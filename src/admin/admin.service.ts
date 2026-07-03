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

  private normalizeRole(role: string | null | undefined): 'user' | 'staff' | 'admin' {
    const normalized = String(role || '').trim().toLowerCase();
    if (normalized === 'admin') return 'admin';
    if (normalized === 'staff' || normalized === 'employee') return 'staff';
    return 'user';
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
      isActive: row.is_active,
      currentLevel: row.current_level || 'HSK2',
      avatarUrl: row.avatar_url || '',
      isPremium,
      plan,
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
    if (!requester || !['admin', 'staff'].includes(requester.role)) {
      throw new HttpException('Vui lòng đăng nhập bằng tài khoản admin.', HttpStatus.UNAUTHORIZED);
    }
    return requester;
  }

  async getAllUsers(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdminOrStaff(headers);

    try {
      const result = await this.db.query(
        `SELECT id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, daily_reminder_enabled, created_at, updated_at, last_login_at
         FROM users
         ORDER BY created_at DESC`,
      );
      return { users: result.rows.map((row) => this.publicUser(row)) };
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
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
    const role = this.normalizeRole(body.role || 'user');
    const currentLevel = String(body.currentLevel || 'HSK2').trim().toUpperCase();
    const plan = String(body.plan || 'FREE').trim().toUpperCase();
    const isActive = body.isActive !== false;
    const durationDays = Math.max(0, Number(body.durationDays || 0));
    const isPremium = plan === 'PREMIUM';
    const roleToSave = plan === 'EMPLOYEE' ? 'staff' : role || 'user';
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
         RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, daily_reminder_enabled, created_at, updated_at, last_login_at`,
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
    const requestedRole = this.normalizeRole(body.role || 'user');
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
      if (requester.role === 'staff') {
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
      if (currentRole !== 'admin' && requestedRole === 'admin') {
        throw new HttpException('Cannot set admin role from this endpoint.', HttpStatus.FORBIDDEN);
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
         RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, daily_reminder_enabled, created_at, updated_at, last_login_at`,
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
      throw new HttpException('Only admin can manage staff roles.', requester ? HttpStatus.FORBIDDEN : HttpStatus.UNAUTHORIZED);
    }
    const nextRole = this.normalizeRole(body.role);

    if (!['user', 'staff'].includes(nextRole)) {
      throw new HttpException('Role must be user or staff.', HttpStatus.BAD_REQUEST);
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
       RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, daily_reminder_enabled, created_at, updated_at, last_login_at`,
      [nextRole, id],
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
}
