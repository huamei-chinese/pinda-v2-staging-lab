import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as crypto from 'crypto';
import { applyPlanDuration, formatVnd } from './payment-plans';
import { PaymentPlansService } from './payment-plans.service';

export interface SepayWebhookPayload {
  id: number;
  gateway?: string;
  transactionDate?: string;
  accountNumber?: string;
  subAccount?: string;
  code?: string | null;
  content?: string;
  transferType?: string;
  description?: string;
  transferAmount?: number;
  accumulated?: number;
  referenceCode?: string;
}

interface SepayApiTransaction {
  id?: string;
  transaction_date?: string;
  transactionDate?: string;
  account_number?: string;
  accountNumber?: string;
  transfer_type?: string;
  transferType?: string;
  amount_in?: number;
  amountIn?: number;
  transferAmount?: number;
  transaction_content?: string;
  content?: string;
  description?: string;
  reference_number?: string;
  referenceCode?: string;
  code?: string | null;
}

@Injectable()
export class PaymentService {
  constructor(
    private readonly db: DatabaseService,
    private readonly paymentPlansService: PaymentPlansService,
  ) {}

  getBankConfig() {
    return {
      bankName: process.env.SEPAY_BANK_NAME || 'Vietcombank',
      bankCode: process.env.SEPAY_BANK_CODE || 'Vietcombank',
      accountNumber: process.env.SEPAY_BANK_ACCOUNT || '',
      accountName: process.env.SEPAY_BANK_ACCOUNT_NAME || 'HUAMEI EDUCATION',
      paymentPrefix: (process.env.SEPAY_PAYMENT_PREFIX || 'HUAMEI').toUpperCase(),
    };
  }

  async listPlans() {
    const config = this.getBankConfig();
    const plans = await this.paymentPlansService.listActivePlans();
    return {
      plans,
      bankConfigured: Boolean(config.accountNumber),
    };
  }

  private generateTransferCode(prefix: string): string {
    const suffix = crypto.randomBytes(4).toString('hex').toUpperCase();
    return `${prefix}${suffix}`;
  }

  buildQrImageUrl(account: string, bank: string, amount: number, description: string): string {
    const des = description.replace(/[^a-zA-Z0-9 ]/g, '').trim();
    const params = new URLSearchParams({
      acc: account,
      bank,
      amount: String(amount),
      des,
      template: 'compact',
    });
    return `https://qr.sepay.vn/img?${params.toString()}`;
  }

  private getSepayApiConfig() {
    return {
      token: process.env.SEPAY_API_TOKEN || process.env.SEPAY_USER_API_TOKEN || '',
      baseUrl: process.env.SEPAY_API_BASE_URL || 'https://userapi.sepay.vn/v2',
    };
  }

  private isIntroVipPlanId(planId: string | null | undefined): boolean {
    const id = String(planId || '').trim().toLowerCase();
    return id === '3d' || id === '7d';
  }

  private async hasUsedIntroVipPlan(userId: string, db: { query: Function } = this.db, excludeOrderId?: string): Promise<boolean> {
    const result = await db.query(
      `SELECT 1
       FROM payment_orders
       WHERE user_id = $1
         AND status = 'paid'
         AND lower(plan_id) IN ('3d', '7d')
         AND ($2::uuid IS NULL OR id <> $2::uuid)
       LIMIT 1`,
      [userId, excludeOrderId || null],
    );
    return Boolean(result.rows[0]);
  }

  async createOrder(userId: string, email: string, planId: string) {
    const plan = await this.paymentPlansService.getPlan(planId);
    if (!plan) {
      throw new HttpException({ error: 'Gói thanh toán không hợp lệ.' }, HttpStatus.BAD_REQUEST);
    }

    const config = this.getBankConfig();
    if (!config.accountNumber) {
      throw new HttpException(
        { error: 'Chưa cấu hình tài khoản ngân hàng SePay trên server.' },
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    const userResult = await this.db.query(
      'SELECT id, email, is_active, vip_trial_used FROM users WHERE id = $1',
      [userId],
    );
    const user = userResult.rows[0];
    if (!user) {
      throw new HttpException({ error: 'Không tìm thấy tài khoản.' }, HttpStatus.NOT_FOUND);
    }
    if (String(user.email).toLowerCase() !== String(email).toLowerCase()) {
      throw new HttpException({ error: 'Thông tin tài khoản không khớp.' }, HttpStatus.FORBIDDEN);
    }
    if (!user.is_active) {
      throw new HttpException({ error: 'Tài khoản đã bị khóa.' }, HttpStatus.FORBIDDEN);
    }
    if (this.isIntroVipPlanId(plan.id) && (user.vip_trial_used || await this.hasUsedIntroVipPlan(userId))) {
      throw new HttpException(
        { error: 'Gói VIP 3 ngày chỉ mua được một lần cho mỗi tài khoản.' },
        HttpStatus.CONFLICT,
      );
    }

    let transferCode = '';
    let inserted = false;
    for (let attempt = 0; attempt < 5 && !inserted; attempt += 1) {
      transferCode = this.generateTransferCode(config.paymentPrefix);
      try {
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const result = await this.db.query(
          `INSERT INTO payment_orders (user_id, plan_id, amount, transfer_code, expires_at)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING id, user_id, plan_id, amount, transfer_code, status, created_at, expires_at`,
          [userId, plan.id, plan.amount, transferCode, expiresAt.toISOString()],
        );
        inserted = true;
        const order = result.rows[0];
        return {
          order: {
            id: order.id,
            planId: order.plan_id,
            amount: order.amount,
            amountLabel: formatVnd(order.amount),
            transferCode: order.transfer_code,
            status: order.status,
            expiresAt: order.expires_at,
            planNameVi: plan.nameVi,
            planNameZh: plan.nameZh,
          },
          bank: {
            bankName: config.bankName,
            accountNumber: config.accountNumber,
            accountName: config.accountName,
          },
          bankConfigured: Boolean(config.accountNumber),
          qrImageUrl: this.buildQrImageUrl(
            config.accountNumber,
            config.bankCode,
            plan.amount,
            transferCode,
          ),
        };
      } catch (error: any) {
        if (error.code !== '23505') {
          throw new HttpException(
            { error: error.message || 'Không thể tạo đơn thanh toán.' },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      }
    }

    throw new HttpException({ error: 'Không thể tạo mã thanh toán, vui lòng thử lại.' }, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  async getOrderStatus(orderId: string, userId?: string) {
    const result = await this.db.query(
      `SELECT o.*, u.email
       FROM payment_orders o
       JOIN users u ON u.id = o.user_id
       WHERE o.id = $1`,
      [orderId],
    );
    const order = result.rows[0];
    if (!order) {
      throw new HttpException({ error: 'Không tìm thấy đơn thanh toán.' }, HttpStatus.NOT_FOUND);
    }
    if (userId && order.user_id !== userId) {
      throw new HttpException({ error: 'Không có quyền xem đơn này.' }, HttpStatus.FORBIDDEN);
    }

    if (order.status === 'pending') {
      const reconciledOrder = await this.reconcilePendingOrderFromSepayApi(order);
      if (reconciledOrder) {
        Object.assign(order, reconciledOrder);
      }
    }

    if (order.status === 'pending' && order.expires_at && new Date(order.expires_at) < new Date()) {
      await this.db.query(
        `UPDATE payment_orders SET status = 'expired' WHERE id = $1 AND status = 'pending'`,
        [orderId],
      );
      order.status = 'expired';
    }

    const userPremium = await this.db.query(
      'SELECT is_premium, premium_until FROM users WHERE id = $1',
      [order.user_id],
    );

    const plan = await this.paymentPlansService.getPlanById(order.plan_id);

    return {
      order: {
        id: order.id,
        status: order.status,
        planId: order.plan_id,
        planNameVi: plan?.nameVi || null,
        planNameZh: plan?.nameZh || null,
        transferCode: order.transfer_code,
        amount: order.amount,
        paidAt: order.paid_at,
        expiresAt: order.expires_at,
      },
      premium: {
        isPremium: userPremium.rows[0]?.is_premium || false,
        premiumUntil: userPremium.rows[0]?.premium_until || null,
      },
    };
  }

  verifyWebhookAuthorization(authorizationHeader?: string): boolean {
    const apiKey = process.env.SEPAY_WEBHOOK_API_KEY;
    if (!apiKey) {
      return false;
    }
    if (!authorizationHeader) return false;
    const expected = `Apikey ${apiKey}`;
    const provided = authorizationHeader.trim();
    if (provided.length !== expected.length) return false;
    return crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(expected));
  }

  async handleSepayWebhook(payload: SepayWebhookPayload) {
    if (!payload?.id) {
      throw new HttpException({ error: 'Webhook thiếu id giao dịch.' }, HttpStatus.BAD_REQUEST);
    }

    const existingEvent = await this.db.query(
      'SELECT sepay_id, processed FROM sepay_webhook_events WHERE sepay_id = $1',
      [payload.id],
    );
    if (existingEvent.rows[0]?.processed) {
      return { success: true, duplicate: true };
    }

    try {
      await this.db.query(
        `INSERT INTO sepay_webhook_events (sepay_id, payload)
         VALUES ($1, $2)
         ON CONFLICT (sepay_id) DO NOTHING`,
        [payload.id, JSON.stringify(payload)],
      );
    } catch {
      // continue if race on insert
    }

    if (payload.transferType && payload.transferType !== 'in') {
      await this.markWebhookProcessed(payload.id, null);
      return { success: true, ignored: true };
    }

    const amount = Number(payload.transferAmount || 0);
    if (!amount || amount <= 0) {
      await this.markWebhookProcessed(payload.id, null);
      return { success: true, ignored: true };
    }

    const order = await this.findOrderFromWebhook(payload);
    if (!order) {
      await this.markWebhookProcessed(payload.id, null);
      return { success: true, unmatched: true };
    }

    if (order.status === 'paid') {
      await this.markWebhookProcessed(payload.id, order.id);
      return { success: true, duplicate: true };
    }

    if (amount < Number(order.amount)) {
      await this.markWebhookProcessed(payload.id, order.id);
      return { success: true, underpaid: true };
    }

    const paidAt = this.parseSepayTransactionDate(payload.transactionDate) || new Date();
    await this.activateOrder(order, payload.id, paidAt);
    return { success: true, orderId: order.id };
  }

  private parseSepayTransactionDate(value?: string): Date | null {
    const normalized = String(value || '').trim();
    if (!normalized) return null;

    const localMatch = normalized.match(
      /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?/,
    );
    if (localMatch) {
      const [, year, month, day, hour, minute, second = '00'] = localMatch;
      const parsed = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}+07:00`);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    }

    const parsed = new Date(normalized);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  private async findOrderFromWebhook(payload: SepayWebhookPayload) {
    const config = this.getBankConfig();
    const prefix = config.paymentPrefix;
    const candidates = new Set<string>();

    if (payload.code) candidates.add(String(payload.code).toUpperCase());
    const haystacks = [payload.content, payload.description].filter(Boolean).join(' ').toUpperCase();

    if (haystacks) {
      const regex = new RegExp(`${prefix}[A-Z0-9]{6,}`, 'g');
      const matches = haystacks.match(regex) || [];
      matches.forEach((code) => candidates.add(code));
    }

    for (const code of candidates) {
      const result = await this.db.query(
        `SELECT * FROM payment_orders
         WHERE transfer_code = $1 AND status = 'pending'
         ORDER BY created_at DESC
         LIMIT 1`,
        [code],
      );
      if (result.rows[0]) return result.rows[0];
    }

    return null;
  }

  private normalizeSepayLookupText(value: unknown): string {
    return String(value || '')
      .trim()
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '');
  }

  private getSepayTransactionAmount(transaction: SepayApiTransaction): number {
    return Number(
      transaction.amount_in
        ?? transaction.amountIn
        ?? transaction.transferAmount
        ?? 0,
    );
  }

  private getSepayTransactionPaidAt(transaction: SepayApiTransaction): Date | null {
    return this.parseSepayTransactionDate(
      transaction.transaction_date
        || transaction.transactionDate
        || '',
    );
  }

  private sepayTransactionMatchesOrder(transaction: SepayApiTransaction, order: any): boolean {
    const expectedCode = this.normalizeSepayLookupText(order.transfer_code);
    if (!expectedCode) return false;

    const amount = this.getSepayTransactionAmount(transaction);
    if (!amount || amount < Number(order.amount || 0)) return false;

    const transferType = String(transaction.transfer_type || transaction.transferType || '').trim().toLowerCase();
    if (transferType && transferType !== 'in') return false;

    const config = this.getBankConfig();
    const accountNumber = String(transaction.account_number || transaction.accountNumber || '').replace(/\D/g, '');
    const expectedAccount = String(config.accountNumber || '').replace(/\D/g, '');
    if (expectedAccount && accountNumber && accountNumber !== expectedAccount) return false;

    const haystack = [
      transaction.code,
      transaction.transaction_content,
      transaction.content,
      transaction.description,
      transaction.reference_number,
      transaction.referenceCode,
    ].map((value) => this.normalizeSepayLookupText(value)).join(' ');

    return haystack.includes(expectedCode);
  }

  private async findSepayApiTransactionForOrder(order: any): Promise<SepayApiTransaction | null> {
    const config = this.getSepayApiConfig();
    if (!config.token || !order?.transfer_code) return null;

    const baseUrl = config.baseUrl.replace(/\/+$/, '');
    const params = new URLSearchParams({
      q: String(order.transfer_code),
      transfer_type: 'in',
      amount_in_min: String(Math.max(0, Number(order.amount || 0))),
      amount_in_max: String(Math.max(0, Number(order.amount || 0))),
      per_page: '10',
      page: '1',
      timestamp_format: 'iso8601',
    });
    const response = await fetch(`${baseUrl}/transactions?${params.toString()}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${config.token}`,
      },
    });

    if (!response.ok) return null;
    const body = await response.json().catch(() => null);
    const transactions = Array.isArray(body?.data) ? body.data as SepayApiTransaction[] : [];
    return transactions.find((transaction) => this.sepayTransactionMatchesOrder(transaction, order)) || null;
  }

  private async reconcilePendingOrderFromSepayApi(order: any): Promise<any | null> {
    try {
      const transaction = await this.findSepayApiTransactionForOrder(order);
      if (!transaction) return null;
      const paidAt = this.getSepayTransactionPaidAt(transaction) || new Date();
      await this.activateOrder(order, null, paidAt);
      const refreshed = await this.db.query('SELECT * FROM payment_orders WHERE id = $1', [order.id]);
      return refreshed.rows[0] || null;
    } catch {
      return null;
    }
  }

  private async activateOrder(order: any, sepayId: number | null, paidAt = new Date()) {
    const client = await this.db.getPool()!.connect();
    try {
      await client.query('BEGIN');

      const orderResult = await client.query(
        'SELECT * FROM payment_orders WHERE id = $1 FOR UPDATE',
        [order.id],
      );
      const lockedOrder = orderResult.rows[0];
      if (!lockedOrder || lockedOrder.status !== 'pending') {
        if (sepayId !== null) {
          await client.query(
            `UPDATE sepay_webhook_events
             SET processed = TRUE, order_id = COALESCE($2, order_id)
             WHERE sepay_id = $1`,
            [sepayId, order.id],
          );
        }
        await client.query('COMMIT');
        return;
      }

      const plan = await this.paymentPlansService.getPlanById(lockedOrder.plan_id);
      if (!plan) {
        if (sepayId !== null) {
          await client.query(
            `UPDATE sepay_webhook_events
             SET processed = TRUE, order_id = COALESCE($2, order_id)
             WHERE sepay_id = $1`,
            [sepayId, lockedOrder.id],
          );
        }
        await client.query('COMMIT');
        return;
      }

      const userResult = await client.query(
        'SELECT premium_until, vip_trial_used FROM users WHERE id = $1 FOR UPDATE',
        [lockedOrder.user_id],
      );
      const user = userResult.rows[0];
      const isIntroVipPlan = this.isIntroVipPlanId(plan.id);
      const now = new Date();
      const paidAtBase = Number.isNaN(paidAt.getTime()) || paidAt.getTime() > now.getTime() + 5 * 60 * 1000
        ? now
        : paidAt;
      const paidAtIso = paidAtBase.toISOString();
      if (isIntroVipPlan && (user?.vip_trial_used || await this.hasUsedIntroVipPlan(lockedOrder.user_id, client, lockedOrder.id))) {
        await client.query(
          `UPDATE payment_orders
           SET status = 'duplicate', paid_at = $2
           WHERE id = $1 AND status = 'pending'`,
          [lockedOrder.id, paidAtIso],
        );
        if (sepayId !== null) {
          await client.query(
            `UPDATE sepay_webhook_events
             SET processed = TRUE, order_id = COALESCE($2, order_id)
             WHERE sepay_id = $1`,
            [sepayId, lockedOrder.id],
          );
        }
        await client.query('COMMIT');
        return;
      }
      const currentEnd = user?.premium_until ? new Date(user.premium_until) : null;
      const base = currentEnd && currentEnd > paidAtBase ? currentEnd : paidAtBase;
      const premiumUntil = applyPlanDuration(base, plan);

      const paidResult = await client.query(
        `UPDATE payment_orders
         SET status = 'paid', paid_at = $2
         WHERE id = $1 AND status = 'pending'`,
        [lockedOrder.id, paidAtIso],
      );
      if (paidResult.rowCount !== 1) {
        if (sepayId !== null) {
          await client.query(
            `UPDATE sepay_webhook_events
             SET processed = TRUE, order_id = COALESCE($2, order_id)
             WHERE sepay_id = $1`,
            [sepayId, lockedOrder.id],
          );
        }
        await client.query('COMMIT');
        return;
      }

      await client.query(
        `UPDATE users
         SET is_premium = TRUE,
             premium_until = $2,
             vip_plan_id = $3,
             vip_trial_used = CASE WHEN $4::boolean THEN TRUE ELSE vip_trial_used END,
             updated_at = NOW()
         WHERE id = $1`,
        [lockedOrder.user_id, premiumUntil.toISOString(), plan.id, isIntroVipPlan],
      );

      if (sepayId !== null) {
        await client.query(
          `UPDATE sepay_webhook_events
           SET processed = TRUE, order_id = $2
           WHERE sepay_id = $1`,
          [sepayId, lockedOrder.id],
        );
      }

      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  private async markWebhookProcessed(sepayId: number, orderId: string | null) {
    await this.db.query(
      `UPDATE sepay_webhook_events
       SET processed = TRUE, order_id = COALESCE($2, order_id)
       WHERE sepay_id = $1`,
      [sepayId, orderId],
    );
  }
}
