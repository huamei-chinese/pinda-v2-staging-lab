import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { PaymentPlansService } from '../payment/payment-plans.service';
import { ContentService } from '../content/content.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly db: DatabaseService,
    private readonly paymentPlansService: PaymentPlansService,
    private readonly contentService: ContentService,
    private readonly authService: AuthService,
  ) {}

  private normalizeRole(role: string | null | undefined): 'user' | 'sales' | 'ctv' | 'content' | 'staff' | 'admin' {
    const normalized = String(role || '').trim().toLowerCase();
    if (normalized === 'admin') return 'admin';
    if (normalized === 'sales') return 'sales';
    if (normalized === 'ctv' || normalized === 'staff' || normalized === 'employee') return 'ctv';
    if (normalized === 'content' || normalized === 'content_manager') return 'content';
    return 'user';
  }

  private normalizeEditableRole(role: string | null | undefined): 'user' | 'sales' | 'ctv' | 'content' {
    const normalized = this.normalizeRole(role);
    if (normalized === 'sales' || normalized === 'ctv' || normalized === 'content') return normalized;
    return 'user';
  }

  private isEditableRoleValue(role: string | null | undefined): boolean {
    const normalized = String(role || '').trim().toLowerCase();
    return ['user', 'sales', 'ctv', 'content', 'staff', 'employee', 'content_manager'].includes(normalized);
  }

  publicUser(row: any) {
    const premiumUntil = row.premium_until ? new Date(row.premium_until) : null;
    const isPremium = Boolean(
      row.is_premium && (!premiumUntil || premiumUntil.getTime() > Date.now()),
    );

    const vipPlanId = isPremium ? this.vipPlanIdFromDuration(row.vip_plan_id, 0) : null;
    const role = this.normalizeRole(row.role);
    const plan = isPremium ? (vipPlanId || 'PREMIUM') : 'FREE';

    return {
      id: row.id,
      fullName: row.full_name,
      email: row.email,
      role,
      ref: row.ref || '',
      src: row.src || '',
      isActive: row.is_active,
      currentLevel: row.current_level || 'HSK2',
      avatarUrl: row.avatar_url || '',
      isPremium,
      plan,
      vip: Number(row.vip || 0),
      vipPlanId,
      vipPlanName: vipPlanId === '7d' ? 'VIP 7 ngày' : vipPlanId === '30d' ? 'VIP 30 ngày' : null,
      vipPlanNameZh: vipPlanId === '7d' ? '7天VIP' : vipPlanId === '30d' ? '30天VIP' : null,
      premiumUntil: row.premium_until,
      dailyReminderEnabled: row.daily_reminder_enabled !== false,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      lastLoginAt: row.last_login_at,
    };
  }

  private async getAdminRequester(headers: Record<string, string | string[] | undefined>) {
    const adminUserId = headers['x-admin-user-id'];
    const userId = Array.isArray(adminUserId) ? adminUserId[0] : adminUserId;
    if (!userId) return null;

    const result = await this.db.query(
      'SELECT role, is_active FROM users WHERE id = $1',
      [userId],
    );
    const user = result.rows[0];
    if (!user?.is_active) return null;
    return { id: userId, role: this.normalizeRole(user.role) };
  }

  async isAdminRequest(headers: Record<string, string | string[] | undefined>): Promise<boolean> {
    const requester = await this.getAdminRequester(headers);
    return requester?.role === 'admin';
  }

  private async assertAdmin(headers: Record<string, string | string[] | undefined>) {
    const requester = await this.getAdminRequester(headers);
    if (requester?.role !== 'admin') {
      throw new HttpException('Vui lòng đăng nhập bằng tài khoản admin.', HttpStatus.UNAUTHORIZED);
    }
    return requester;
  }

  private async assertAdminOrStaff(headers: Record<string, string | string[] | undefined>) {
    const requester = await this.getAdminRequester(headers);
    if (!requester || !['admin', 'staff', 'sales', 'ctv', 'content'].includes(requester.role)) {
      throw new HttpException('Vui lòng đăng nhập bằng tài khoản admin.', HttpStatus.UNAUTHORIZED);
    }
    return requester;
  }

  async getAllUsers(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdminOrStaff(headers);

    try {
      await this.recalculateCtvVipCounts();
      const result = await this.db.query(
        `SELECT id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip, daily_reminder_enabled, created_at, updated_at, last_login_at
         FROM users
         ORDER BY created_at DESC`,
      );
      return { users: result.rows.map((row) => this.publicUser(row)) };
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async recalculateCtvVipCounts() {
    await this.db.query(
      `UPDATE users SET vip = 0 WHERE role IN ('ctv', 'staff', 'employee')`,
    );
    await this.db.query(
      `UPDATE users c
       SET vip = sub.cnt
       FROM (
         SELECT lower(btrim(u.ref)) AS ref, COUNT(*) AS cnt
         FROM users u
         WHERE u.ref IS NOT NULL AND btrim(u.ref) <> ''
           AND u.is_premium = TRUE
           AND (u.premium_until IS NULL OR u.premium_until > NOW())
         GROUP BY lower(btrim(u.ref))
       ) sub
       WHERE lower(btrim(c.ref)) = sub.ref
         AND c.role IN ('ctv', 'staff', 'employee')`,
    );
  }

  private calculatePremiumUntil(plan: string, durationDays: number): string | null {
    if (plan !== 'PREMIUM') return null;
    if (!Number.isFinite(durationDays) || durationDays <= 0) return null;
    const premiumUntil = new Date();
    premiumUntil.setDate(premiumUntil.getDate() + Math.floor(durationDays));
    return premiumUntil.toISOString();
  }

  private vipPlanIdFromDuration(planId: string | null | undefined, durationDays: number): string | null {
    const normalized = String(planId || '').trim().toLowerCase();
    if (normalized === '7d' || normalized === '30d') return normalized;
    if (durationDays === 7) return '7d';
    if (durationDays === 30) return '30d';
    return null;
  }

  async createUser(
    body: {
      fullName?: string;
      email?: string;
      password?: string;
      role?: string;
      currentLevel?: string;
      plan?: string;
      durationDays?: number;
      isActive?: boolean;
    },
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);

    const fullName = String(body.fullName || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    const role = this.normalizeEditableRole(body.role || 'user');
    const currentLevel = String(body.currentLevel || 'HSK2').trim().toUpperCase();
    const plan = String(body.plan || 'FREE').trim().toUpperCase();
    const isActive = body.isActive !== false;
    const durationDays = Math.max(0, Number(body.durationDays || 0));
    const isPremium = plan === 'PREMIUM';
    const roleToSave = plan === 'EMPLOYEE' ? 'ctv' : role || 'user';
    const premiumUntil = this.calculatePremiumUntil(plan, durationDays);
    const vipPlanId = isPremium ? this.vipPlanIdFromDuration(null, durationDays) : null;

    if (fullName.length < 2) {
      throw new HttpException('Vui lòng nhập họ và tên.', HttpStatus.BAD_REQUEST);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new HttpException('Email không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (password.length < 6) {
      throw new HttpException('Mật khẩu cần tối thiểu 6 ký tự.', HttpStatus.BAD_REQUEST);
    }
    if (!/^HSK[1-6]$/.test(currentLevel)) {
      throw new HttpException('Cấp độ không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (!['FREE', 'PREMIUM', 'EMPLOYEE'].includes(plan)) {
      throw new HttpException('Gói tài khoản không hợp lệ.', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.db.query(
        `INSERT INTO users (full_name, email, password_hash, role, is_active, current_level, is_premium, premium_until, vip_plan_id)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         RETURNING id, full_name, email, role, ref, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, daily_reminder_enabled, created_at, updated_at, last_login_at`,
        [
          fullName,
          email,
          this.authService.hashPassword(password),
          roleToSave,
          isActive,
          currentLevel,
          isPremium,
          premiumUntil,
          vipPlanId,
        ],
      );
      return { user: this.publicUser(result.rows[0]) };
    } catch (error: any) {
      if (error.code === '23505') {
        throw new HttpException('Email này đã được đăng ký.', HttpStatus.CONFLICT);
      }
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateUser(
    id: string,
    body: {
      fullName: string;
      email: string;
      role: string;
      isActive: boolean;
      currentLevel?: string;
      plan?: string;
      durationDays?: number;
      premiumUntil?: string;
      vipPlanId?: string;
    },
    headers: Record<string, string | string[] | undefined>,
  ) {
    const requester = await this.assertAdminOrStaff(headers);

    const fullName = String(body.fullName || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const requestedRole = this.normalizeEditableRole(body.role || 'user');
    const isActive = body.isActive === true;
    const currentLevel = String(body.currentLevel || 'HSK2').trim().toUpperCase();
    const plan = String(body.plan || '').trim().toUpperCase();
    const durationDays = Math.floor(Number(body.durationDays || 0));
    const requestedPremiumUntil = String(body.premiumUntil || '').trim();
    const shouldExtendPremium = plan === 'PREMIUM' && Number.isFinite(durationDays) && durationDays > 0;
    const shouldCancelPremium = plan === 'FREE';
    const shouldSetPremiumUntil = plan === 'PREMIUM' && Boolean(requestedPremiumUntil) && !shouldExtendPremium;
    const premiumUntilDate = shouldSetPremiumUntil ? new Date(requestedPremiumUntil) : null;
    const vipPlanId = shouldExtendPremium
      ? this.vipPlanIdFromDuration(null, durationDays)
      : shouldSetPremiumUntil
        ? this.vipPlanIdFromDuration(body.vipPlanId, 0)
        : null;

    if (plan && plan !== 'PREMIUM' && plan !== 'FREE') {
      throw new HttpException('Invalid account plan.', HttpStatus.BAD_REQUEST);
    }

    if (shouldSetPremiumUntil) {
      if (!premiumUntilDate || Number.isNaN(premiumUntilDate.getTime())) {
        throw new HttpException('VIP expiry date is invalid.', HttpStatus.BAD_REQUEST);
      }
      if (premiumUntilDate.getTime() <= Date.now()) {
        throw new HttpException('VIP expiry date must be in the future.', HttpStatus.BAD_REQUEST);
      }
    }

    if (!fullName || !email) {
      throw new HttpException('Tên và email không được để trống.', HttpStatus.BAD_REQUEST);
    }

    try {
      const current = await this.db.query(
        `SELECT id, full_name, email, role, is_active, current_level
         FROM users
         WHERE id = $1`,
        [id],
      );
      const currentUser = current.rows[0];
      if (!currentUser) {
        throw new HttpException('Kh么ng t矛m th岷 user.', HttpStatus.NOT_FOUND);
      }
      const currentRole = this.normalizeRole(currentUser.role);
      if (requester.role !== 'admin') {
        if (currentRole === 'admin') {
          throw new HttpException('Staff cannot modify admin accounts.', HttpStatus.FORBIDDEN);
        }
        if (
          requestedRole !== currentRole ||
          fullName !== String(currentUser.full_name || '').trim() ||
          email !== String(currentUser.email || '').trim().toLowerCase() ||
          currentLevel !== String(currentUser.current_level || 'HSK2').trim().toUpperCase() ||
          isActive !== (currentUser.is_active === true)
        ) {
          throw new HttpException('Staff can only update VIP status.', HttpStatus.FORBIDDEN);
        }
      }
      const roleToSave = currentRole === 'admin' ? currentUser.role : requestedRole;
      const result = await this.db.query(
        `UPDATE users
         SET full_name = $1,
             email = $2,
             role = $3,
             is_active = $4,
             current_level = $5,
             is_premium = CASE
               WHEN $10::boolean THEN FALSE
               WHEN $7::boolean OR $11::boolean THEN TRUE
               ELSE is_premium
             END,
             premium_until = CASE
               WHEN $10::boolean THEN NULL
               WHEN $11::boolean THEN $12::timestamptz
               WHEN $7::boolean THEN GREATEST(COALESCE(premium_until, NOW()), NOW()) + ($8::int * INTERVAL '1 day')
               ELSE premium_until
             END,
             vip_plan_id = CASE
               WHEN $10::boolean THEN NULL
               WHEN $7::boolean OR $11::boolean THEN COALESCE($9, vip_plan_id)
               ELSE vip_plan_id
             END,
             updated_at = NOW()
         WHERE id = $6
         RETURNING id, full_name, email, role, ref, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, daily_reminder_enabled, created_at, updated_at, last_login_at`,
        [
          fullName,
          email,
          roleToSave,
          isActive,
          currentLevel,
          id,
          shouldExtendPremium,
          durationDays,
          vipPlanId,
          shouldCancelPremium,
          shouldSetPremiumUntil,
          premiumUntilDate?.toISOString() || null,
        ],
      );
      if (!result.rows[0]) {
        throw new HttpException('Không tìm thấy user.', HttpStatus.NOT_FOUND);
      }
      return { user: this.publicUser(result.rows[0]) };
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateUserRole(
    id: string,
    body: { role?: string },
    headers: Record<string, string | string[] | undefined>,
  ) {
    const requester = await this.getAdminRequester(headers);
    if (requester?.role !== 'admin') {
      throw new HttpException('Only admin can manage user roles.', requester ? HttpStatus.FORBIDDEN : HttpStatus.UNAUTHORIZED);
    }
    if (!this.isEditableRoleValue(body.role)) {
      throw new HttpException('Role must be user, sales, ctv or content.', HttpStatus.BAD_REQUEST);
    }
    const nextRole = this.normalizeEditableRole(body.role);

    if (!['user', 'sales', 'ctv', 'content'].includes(nextRole)) {
      throw new HttpException('Role must be user, sales, ctv or content.', HttpStatus.BAD_REQUEST);
    }
    if (String(requester.id) === String(id)) {
      throw new HttpException('Cannot change your own admin role.', HttpStatus.FORBIDDEN);
    }

    const current = await this.db.query(
      `SELECT id, role
       FROM users
       WHERE id = $1`,
      [id],
    );
    const currentUser = current.rows[0];
    if (!currentUser) {
      throw new HttpException('Kh么ng t矛m th岷 user.', HttpStatus.NOT_FOUND);
    }
    if (this.normalizeRole(currentUser.role) === 'admin') {
      throw new HttpException('Cannot modify admin accounts.', HttpStatus.FORBIDDEN);
    }

    const result = await this.db.query(
      `UPDATE users
       SET role = $1,
           updated_at = NOW()
       WHERE id = $2
       RETURNING id, full_name, email, role, ref, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, daily_reminder_enabled, created_at, updated_at, last_login_at`,
      [nextRole, id],
    );
    return { user: this.publicUser(result.rows[0]) };
  }

  async updateUserRef(
    id: string,
    body: { ref?: string },
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);
    const ref = this.authService.normalizeReferralRef(body.ref);
    if (!ref) {
      throw new HttpException('Mã ref không hợp lệ.', HttpStatus.BAD_REQUEST);
    }

    const current = await this.db.query(
      `SELECT id, role
       FROM users
       WHERE id = $1`,
      [id],
    );
    const currentUser = current.rows[0];
    if (!currentUser) {
      throw new HttpException('Không tìm thấy user.', HttpStatus.NOT_FOUND);
    }
    if (this.normalizeRole(currentUser.role) !== 'ctv') {
      throw new HttpException('Chỉ tài khoản CTV mới được tạo link ref.', HttpStatus.BAD_REQUEST);
    }

    const result = await this.db.query(
      `UPDATE users
       SET ref = $1,
           updated_at = NOW()
       WHERE id = $2
       RETURNING id, full_name, email, role, ref, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, daily_reminder_enabled, created_at, updated_at, last_login_at`,
      [ref, id],
    );
    return { user: this.publicUser(result.rows[0]) };
  }

  async deleteUser(
    id: string,
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);

    try {
      const result = await this.db.query('DELETE FROM users WHERE id = $1', [id]);
      if (result.rowCount === 0) {
        throw new HttpException('Không tìm thấy user.', HttpStatus.NOT_FOUND);
      }
      return { ok: true };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllPlans(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    try {
      const plans = await this.paymentPlansService.listAllPlans();
      return { plans };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getPlanStats(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    try {
      const stats = await this.paymentPlansService.getAdminStats();
      return { stats };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createPlan(body: any, headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    return this.paymentPlansService.createPlan(body);
  }

  async updatePlan(id: string, body: any, headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    return this.paymentPlansService.updatePlan(id, body);
  }

  async deletePlan(id: string, headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    return this.paymentPlansService.deletePlan(id);
  }

  async getHskLessonLocks(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    try {
      const locks = await this.contentService.listLocks();
      return { locks };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async saveHskLessonLocks(
    body: {
      lessons?: Array<{
        lessonId: string;
        level: string;
        lessonNo?: number;
        titleVi?: string;
        freeItemLimit?: number;
        lockedForFree?: boolean;
      }>;
    },
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);
    try {
      return await this.contentService.saveLocks(body.lessons || []);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getDailyThemeLocks(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    try {
      const locks = await this.contentService.listDailyLocks();
      return { locks };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async saveDailyThemeLocks(
    body: {
      themes?: Array<{
        themeId: string;
        titleVi?: string;
        sortOrder?: number;
        freeItemLimit?: number;
        lockedForFree?: boolean;
      }>;
    },
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);
    try {
      return await this.contentService.saveDailyLocks(body.themes || []);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getHskLevelCovers(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    try {
      const covers = await this.contentService.listHskLevelCovers();
      return { covers };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async saveHskLevelCovers(
    body: {
      covers?: Array<{
        level: string;
        coverUrl?: string;
      }>;
    },
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);
    try {
      return await this.contentService.saveHskLevelCovers(body.covers || []);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private static readonly ANALYTICS_TZ = 'Asia/Ho_Chi_Minh';
  private static readonly ANALYTICS_MAX_SPAN_DAYS = 1000;

  private toYmd(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private ymdToUtcDate(ymd: string): Date {
    const [year, month, day] = ymd.split('-').map(Number);
    return new Date(Date.UTC(year, month - 1, day));
  }

  private spanDays(fromYmd: string, toYmd: string): number {
    return Math.round((this.ymdToUtcDate(toYmd).getTime() - this.ymdToUtcDate(fromYmd).getTime()) / 86400000) + 1;
  }

  private resolveAnalyticsRange(options: { days?: number | string; from?: string; to?: string }) {
    const ymdPattern = /^\d{4}-\d{2}-\d{2}$/;
    let fromYmd = ymdPattern.test(String(options.from || '').trim()) ? String(options.from).trim() : '';
    let toYmd = ymdPattern.test(String(options.to || '').trim()) ? String(options.to).trim() : '';

    if (fromYmd && toYmd) {
      if (fromYmd > toYmd) [fromYmd, toYmd] = [toYmd, fromYmd];
    } else {
      const days = Math.min(AdminService.ANALYTICS_MAX_SPAN_DAYS, Math.max(1, Math.floor(Number(options.days) || 30)));
      const today = new Date();
      const start = new Date(today);
      start.setDate(today.getDate() - (days - 1));
      fromYmd = this.toYmd(start);
      toYmd = this.toYmd(today);
    }

    if (this.spanDays(fromYmd, toYmd) > AdminService.ANALYTICS_MAX_SPAN_DAYS) {
      const end = this.ymdToUtcDate(toYmd);
      const start = new Date(end);
      start.setUTCDate(end.getUTCDate() - (AdminService.ANALYTICS_MAX_SPAN_DAYS - 1));
      fromYmd = start.toISOString().slice(0, 10);
    }

    return { fromYmd, toYmd, days: this.spanDays(fromYmd, toYmd) };
  }

  private buildDailySeries(rows: Array<{ day: string; value: string | number }>, fromYmd: string, toYmd: string) {
    const byDay = new Map<string, number>();
    for (const row of rows) byDay.set(String(row.day), Number(row.value) || 0);

    const series: Array<{ date: string; value: number }> = [];
    const cursor = this.ymdToUtcDate(fromYmd);
    const end = this.ymdToUtcDate(toYmd);
    let guard = 0;
    while (cursor.getTime() <= end.getTime() && guard <= AdminService.ANALYTICS_MAX_SPAN_DAYS) {
      const key = cursor.toISOString().slice(0, 10);
      series.push({ date: key, value: byDay.get(key) || 0 });
      cursor.setUTCDate(cursor.getUTCDate() + 1);
      guard += 1;
    }
    return series;
  }

  async getLearningAnalytics(
    headers: Record<string, string | string[] | undefined>,
    options: { days?: number | string; from?: string; to?: string } = {},
  ) {
    await this.assertAdmin(headers);

    const { fromYmd, toYmd, days } = this.resolveAnalyticsRange(options);
    const tz = AdminService.ANALYTICS_TZ;
    // Range boundaries and daily buckets are aligned to Ho Chi Minh calendar days.
    const withinRange = `created_at >= ($1::date AT TIME ZONE '${tz}') AND created_at < (($2::date + 1) AT TIME ZONE '${tz}')`;
    const dayBucket = `to_char(date_trunc('day', created_at AT TIME ZONE '${tz}'), 'YYYY-MM-DD')`;
    const params = [fromYmd, toYmd];

    try {
      const [
        dailyLearners,
        dailyAttempts,
        topLessons,
        sourceBreakdown,
        vipModalOpens,
        registeredCount,
        learnersCount,
        popupCount,
        vipCount,
      ] = await Promise.all([
        this.db.query(
          `SELECT ${dayBucket} AS day, COUNT(DISTINCT user_id) AS value
           FROM learning_events
           WHERE ${withinRange} AND event_type IN ('lesson_opened', 'question_answered') AND user_id IS NOT NULL
           GROUP BY 1 ORDER BY 1`,
          params,
        ),
        this.db.query(
          `SELECT ${dayBucket} AS day, COUNT(*) AS value
           FROM learning_events
           WHERE ${withinRange} AND event_type = 'question_answered'
           GROUP BY 1 ORDER BY 1`,
          params,
        ),
        this.db.query(
          `SELECT lesson_id, level, COUNT(*) AS value, COUNT(DISTINCT user_id) AS learners
           FROM learning_events
           WHERE ${withinRange} AND event_type = 'lesson_opened' AND lesson_id IS NOT NULL
           GROUP BY lesson_id, level ORDER BY value DESC LIMIT 10`,
          params,
        ),
        this.db.query(
          `SELECT COALESCE(NULLIF(source, ''), 'direct') AS source, COUNT(*) AS events, COUNT(DISTINCT user_id) AS users
           FROM learning_events
           WHERE ${withinRange}
           GROUP BY 1 ORDER BY events DESC`,
          params,
        ),
        this.db.query(
          `SELECT COUNT(*) AS value FROM learning_events WHERE ${withinRange} AND event_type = 'vip_modal_opened'`,
          params,
        ),
        this.db.query(
          `SELECT COUNT(*) AS value FROM users WHERE ${withinRange}`,
          params,
        ),
        this.db.query(
          `SELECT COUNT(DISTINCT user_id) AS value FROM learning_events
           WHERE ${withinRange} AND event_type IN ('lesson_opened', 'question_answered') AND user_id IS NOT NULL`,
          params,
        ),
        this.db.query(
          `SELECT COUNT(DISTINCT user_id) AS value FROM learning_events
           WHERE ${withinRange} AND event_type IN ('paywall_shown', 'vip_modal_opened') AND user_id IS NOT NULL`,
          params,
        ),
        this.db.query(
          `SELECT COUNT(*) AS value FROM users
           WHERE ${withinRange} AND is_premium = TRUE AND (premium_until IS NULL OR premium_until > NOW())`,
          params,
        ),
      ]);

      const num = (result: any) => Number(result.rows[0]?.value || 0);

      return {
        meta: { days, from: fromYmd, to: toYmd },
        dailyLearners: this.buildDailySeries(dailyLearners.rows, fromYmd, toYmd),
        dailyAttempts: this.buildDailySeries(dailyAttempts.rows, fromYmd, toYmd),
        topLessons: topLessons.rows.map((row) => ({
          lessonId: row.lesson_id,
          level: row.level || '',
          opens: Number(row.value) || 0,
          learners: Number(row.learners) || 0,
        })),
        sources: sourceBreakdown.rows.map((row) => ({
          source: row.source,
          events: Number(row.events) || 0,
          users: Number(row.users) || 0,
        })),
        vipModalOpens: num(vipModalOpens),
        funnel: {
          registered: num(registeredCount),
          learned: num(learnersCount),
          popup: num(popupCount),
          vip: num(vipCount),
        },
      };
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
