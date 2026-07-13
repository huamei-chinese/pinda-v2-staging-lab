import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { DEFAULT_PAYMENT_PLANS, PaymentPlan, formatVnd, normalizeDurationUnit } from './payment-plans';

export interface AdminPaymentPlan extends PaymentPlan {
  isActive: boolean;
  sortOrder: number;
  buyerCount: number;
  priceLabel: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class PaymentPlansService {
  constructor(private readonly db: DatabaseService) {}

  private readonly publicPlanIds = ['7d', '30d', '90d'];

  private normalizePlanId(planId: string): string {
    const id = String(planId || '').trim().toLowerCase();
    if (id === '1m') return '30d';
    if (id === '3m') return '90d';
    return id;
  }

  private defaultPlan(planId: string): PaymentPlan | null {
    return DEFAULT_PAYMENT_PLANS.find((plan) => plan.id === planId) || null;
  }

  private mapRow(row: any): AdminPaymentPlan {
    return {
      id: row.id,
      months: Number(row.months),
      durationUnit: normalizeDurationUnit(row.duration_unit),
      amount: Number(row.amount),
      nameVi: row.name_vi,
      nameZh: row.name_zh,
      isActive: row.is_active,
      sortOrder: Number(row.sort_order),
      buyerCount: Number(row.buyer_count || 0),
      priceLabel: formatVnd(Number(row.amount)),
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async getPlan(planId: string): Promise<PaymentPlan | null> {
    const normalizedPlanId = this.normalizePlanId(planId);
    const result = await this.db.query(
      `SELECT id, months, duration_unit, amount, name_vi, name_zh
       FROM payment_plans
       WHERE id = $1 AND is_active = TRUE`,
      [normalizedPlanId],
    );
    return this.mapPlanRow(result.rows[0]) || this.defaultPlan(normalizedPlanId);
  }

  async getPlanById(planId: string): Promise<PaymentPlan | null> {
    const normalizedPlanId = this.normalizePlanId(planId);
    const result = await this.db.query(
      `SELECT id, months, duration_unit, amount, name_vi, name_zh
       FROM payment_plans
       WHERE id = $1`,
      [normalizedPlanId],
    );
    return this.mapPlanRow(result.rows[0]) || this.defaultPlan(normalizedPlanId);
  }

  private mapPlanRow(row: any): PaymentPlan | null {
    if (!row) return null;
    return {
      id: row.id,
      months: Number(row.months),
      durationUnit: normalizeDurationUnit(row.duration_unit),
      amount: Number(row.amount),
      nameVi: row.name_vi,
      nameZh: row.name_zh,
    };
  }

  async listActivePlans() {
    const result = await this.db.query(
      `SELECT id, months, duration_unit, amount, name_vi, name_zh, sort_order
       FROM payment_plans
       WHERE is_active = TRUE
       ORDER BY sort_order ASC, created_at ASC`,
    );
    const rowsById = new Map(result.rows.map((row) => [row.id, row]));
    return this.publicPlanIds.map((id, index) => {
      const row = rowsById.get(id);
      const fallback = this.defaultPlan(id)!;
      const amount = Number(row?.amount ?? fallback.amount);
      return {
        id,
        months: Number(row?.months ?? fallback.months),
        durationUnit: normalizeDurationUnit(row?.duration_unit ?? fallback.durationUnit),
        amount,
        sortOrder: Number(row?.sort_order ?? index + 1),
        priceLabel: formatVnd(amount),
        nameVi: row?.name_vi ?? fallback.nameVi,
        nameZh: row?.name_zh ?? fallback.nameZh,
      };
    });
  }

  async listAllPlans(): Promise<AdminPaymentPlan[]> {
    const result = await this.db.query(
      `SELECT p.*,
              COUNT(o.id) FILTER (WHERE o.status = 'paid') AS buyer_count
       FROM payment_plans p
       LEFT JOIN payment_orders o ON o.plan_id = p.id
       GROUP BY p.id
       ORDER BY p.sort_order ASC, p.created_at ASC`,
    );
    return result.rows.map((row) => this.mapRow(row));
  }

  async createPlan(body: {
    id: string;
    months: number;
    durationUnit?: string;
    amount: number;
    nameVi: string;
    nameZh: string;
    isActive?: boolean;
    sortOrder?: number;
  }) {
    const id = String(body.id || '').trim().toLowerCase();
    const months = Number(body.months);
    const durationUnit = normalizeDurationUnit(body.durationUnit);
    const amount = Number(body.amount);
    const nameVi = String(body.nameVi || '').trim();
    const nameZh = String(body.nameZh || '').trim();
    const isActive = body.isActive !== false;
    const sortOrder = Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0;

    if (!/^[a-z0-9_-]{2,20}$/.test(id)) {
      throw new HttpException('Mã gói phải từ 2–20 ký tự (chữ thường, số, gạch ngang).', HttpStatus.BAD_REQUEST);
    }
    if (!Number.isInteger(months) || months < 1) {
      throw new HttpException('Thời hạn phải là số nguyên dương.', HttpStatus.BAD_REQUEST);
    }
    if (body.durationUnit !== undefined && body.durationUnit !== 'days' && body.durationUnit !== 'months') {
      throw new HttpException('Đơn vị thời hạn phải là ngày hoặc tháng.', HttpStatus.BAD_REQUEST);
    }
    if (!Number.isInteger(amount) || amount < 1000) {
      throw new HttpException('Giá gói phải từ 1.000 VNĐ trở lên.', HttpStatus.BAD_REQUEST);
    }
    if (!nameVi || !nameZh) {
      throw new HttpException('Tên gói (Việt/Trung) không được để trống.', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.db.query(
        `INSERT INTO payment_plans (id, months, duration_unit, amount, name_vi, name_zh, is_active, sort_order)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING *, 0 AS buyer_count`,
        [id, months, durationUnit, amount, nameVi, nameZh, isActive, sortOrder],
      );
      return { plan: this.mapRow(result.rows[0]) };
    } catch (error: any) {
      if (error.code === '23505') {
        throw new HttpException('Mã gói đã tồn tại.', HttpStatus.CONFLICT);
      }
      throw new HttpException(error.message || 'Không thể tạo gói.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updatePlan(
    id: string,
    body: {
      months?: number;
      durationUnit?: string;
      amount?: number;
      nameVi?: string;
      nameZh?: string;
      isActive?: boolean;
      sortOrder?: number;
    },
  ) {
    const existing = await this.db.query('SELECT id FROM payment_plans WHERE id = $1', [id]);
    if (!existing.rows[0]) {
      throw new HttpException('Không tìm thấy gói.', HttpStatus.NOT_FOUND);
    }

    const months = body.months !== undefined ? Number(body.months) : undefined;
    const durationUnit = body.durationUnit !== undefined ? normalizeDurationUnit(body.durationUnit) : undefined;
    const amount = body.amount !== undefined ? Number(body.amount) : undefined;
    const nameVi = body.nameVi !== undefined ? String(body.nameVi).trim() : undefined;
    const nameZh = body.nameZh !== undefined ? String(body.nameZh).trim() : undefined;
    const isActive = body.isActive;
    const sortOrder = body.sortOrder !== undefined ? Number(body.sortOrder) : undefined;

    if (months !== undefined && (!Number.isInteger(months) || months < 1)) {
      throw new HttpException('Thời hạn phải là số nguyên dương.', HttpStatus.BAD_REQUEST);
    }
    if (body.durationUnit !== undefined && body.durationUnit !== 'days' && body.durationUnit !== 'months') {
      throw new HttpException('Đơn vị thời hạn phải là ngày hoặc tháng.', HttpStatus.BAD_REQUEST);
    }
    if (amount !== undefined && (!Number.isInteger(amount) || amount < 1000)) {
      throw new HttpException('Giá gói phải từ 1.000 VNĐ trở lên.', HttpStatus.BAD_REQUEST);
    }
    if (nameVi !== undefined && !nameVi) {
      throw new HttpException('Tên tiếng Việt không được để trống.', HttpStatus.BAD_REQUEST);
    }
    if (nameZh !== undefined && !nameZh) {
      throw new HttpException('Tên tiếng Trung không được để trống.', HttpStatus.BAD_REQUEST);
    }

    const result = await this.db.query(
      `UPDATE payment_plans
       SET months = COALESCE($2, months),
           duration_unit = COALESCE($3, duration_unit),
           amount = COALESCE($4, amount),
           name_vi = COALESCE($5, name_vi),
           name_zh = COALESCE($6, name_zh),
           is_active = COALESCE($7, is_active),
           sort_order = COALESCE($8, sort_order),
           updated_at = NOW()
       WHERE id = $1
       RETURNING *`,
      [id, months ?? null, durationUnit ?? null, amount ?? null, nameVi ?? null, nameZh ?? null, isActive ?? null, sortOrder ?? null],
    );

    const buyerCount = await this.db.query(
      `SELECT COUNT(*)::int AS buyer_count
       FROM payment_orders
       WHERE plan_id = $1 AND status = 'paid'`,
      [id],
    );

    return {
      plan: this.mapRow({
        ...result.rows[0],
        buyer_count: buyerCount.rows[0]?.buyer_count || 0,
      }),
    };
  }

  async deletePlan(id: string) {
    const orders = await this.db.query(
      `SELECT COUNT(*)::int AS total FROM payment_orders WHERE plan_id = $1`,
      [id],
    );
    if (Number(orders.rows[0]?.total || 0) > 0) {
      throw new HttpException(
        'Không thể xóa gói đã có giao dịch. Hãy chuyển trạng thái sang "Tạm ẩn".',
        HttpStatus.CONFLICT,
      );
    }

    const result = await this.db.query('DELETE FROM payment_plans WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      throw new HttpException('Không tìm thấy gói.', HttpStatus.NOT_FOUND);
    }
    return { ok: true };
  }

  async getAdminStats() {
    const revenueResult = await this.db.query(`
      SELECT
        COALESCE(SUM(amount), 0)::bigint AS total_revenue,
        COALESCE(SUM(amount) FILTER (
          WHERE paid_at >= date_trunc('month', NOW())
        ), 0)::bigint AS revenue_this_month,
        COALESCE(SUM(amount) FILTER (
          WHERE paid_at >= date_trunc('month', NOW()) - interval '1 month'
            AND paid_at < date_trunc('month', NOW())
        ), 0)::bigint AS revenue_last_month
      FROM payment_orders
      WHERE status = 'paid'
    `);

    const usersResult = await this.db.query(`
      SELECT COUNT(*)::int AS active_premium_users
      FROM users
      WHERE is_premium = TRUE
        AND (premium_until IS NULL OR premium_until > NOW())
    `);

    const weekResult = await this.db.query(`
      SELECT
        COUNT(*) FILTER (WHERE paid_at >= date_trunc('week', NOW()))::int AS paid_this_week,
        COUNT(*) FILTER (
          WHERE paid_at >= date_trunc('week', NOW()) - interval '1 week'
            AND paid_at < date_trunc('week', NOW())
        )::int AS paid_last_week
      FROM payment_orders
      WHERE status = 'paid'
    `);

    const renewalResult = await this.db.query(`
      SELECT
        COUNT(*)::int AS total_buyers,
        COUNT(*) FILTER (WHERE order_count >= 2)::int AS renewing_buyers
      FROM (
        SELECT user_id, COUNT(*)::int AS order_count
        FROM payment_orders
        WHERE status = 'paid'
        GROUP BY user_id
      ) buyers
    `);

    const recentResult = await this.db.query(`
      SELECT o.id, o.amount, o.paid_at, o.plan_id,
             u.full_name, u.email,
             p.name_vi AS plan_name_vi
      FROM payment_orders o
      JOIN users u ON u.id = o.user_id
      LEFT JOIN payment_plans p ON p.id = o.plan_id
      WHERE o.status = 'paid'
      ORDER BY o.paid_at DESC NULLS LAST
      LIMIT 8
    `);

    const revenueRow = revenueResult.rows[0];
    const totalRevenue = Number(revenueRow?.total_revenue || 0);
    const thisMonth = Number(revenueRow?.revenue_this_month || 0);
    const lastMonth = Number(revenueRow?.revenue_last_month || 0);
    const revenueGrowthPercent = lastMonth > 0
      ? Math.round(((thisMonth - lastMonth) / lastMonth) * 1000) / 10
      : (thisMonth > 0 ? 100 : 0);

    const activePremiumUsers = Number(usersResult.rows[0]?.active_premium_users || 0);
    const paidThisWeek = Number(weekResult.rows[0]?.paid_this_week || 0);
    const paidLastWeek = Number(weekResult.rows[0]?.paid_last_week || 0);
    const weekGrowthPercent = paidLastWeek > 0
      ? Math.round(((paidThisWeek - paidLastWeek) / paidLastWeek) * 1000) / 10
      : (paidThisWeek > 0 ? 100 : 0);

    const totalBuyers = Number(renewalResult.rows[0]?.total_buyers || 0);
    const renewingBuyers = Number(renewalResult.rows[0]?.renewing_buyers || 0);
    const renewalRatePercent = totalBuyers > 0
      ? Math.round((renewingBuyers / totalBuyers) * 1000) / 10
      : 0;

    return {
      totalRevenue,
      revenueGrowthPercent,
      activePremiumUsers,
      weekGrowthPercent,
      renewalRatePercent,
      recentTransactions: recentResult.rows.map((tx) => ({
        id: tx.id,
        userName: tx.full_name,
        userEmail: tx.email,
        planName: tx.plan_name_vi || tx.plan_id,
        amount: Number(tx.amount),
        paidAt: tx.paid_at,
      })),
    };
  }
}
