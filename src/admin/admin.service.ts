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
    if (normalized === 'sales' || normalized === 'koc') return 'sales';
    if (normalized === 'staff' || normalized === 'employee') return 'staff';
    if (normalized === 'ctv') return 'ctv';
    if (normalized === 'content' || normalized === 'content_manager') return 'content';
    return 'user';
  }

  private normalizeEditableRole(role: string | null | undefined): 'user' | 'sales' | 'ctv' | 'content' | 'staff' {
    const normalized = this.normalizeRole(role);
    if (normalized === 'sales' || normalized === 'ctv' || normalized === 'content' || normalized === 'staff') return normalized;
    return 'user';
  }

  private isEditableRoleValue(role: string | null | undefined): boolean {
    const normalized = String(role || '').trim().toLowerCase();
    return ['user', 'sales', 'koc', 'ctv', 'content', 'staff', 'employee', 'content_manager'].includes(normalized);
  }

  private isPartnerRole(role: string | null | undefined): boolean {
    return ['sales', 'ctv', 'staff'].includes(this.normalizeRole(role));
  }

  private async findPartnerReferralOwner(ref: string | null, userId: string) {
    if (!ref) return null;
    const duplicate = await this.db.query(
      `SELECT id, full_name, email
       FROM users
       WHERE lower(btrim(ref)) = $1
         AND id <> $2
         AND role IN ('ctv', 'staff', 'employee', 'sales', 'koc')
       LIMIT 1`,
      [ref, userId],
    );
    return duplicate.rows[0] || null;
  }

  private getPartnerReferralSeed(user: { full_name?: string | null; email?: string | null }) {
    const emailLocal = String(user.email || '').split('@')[0];
    return (
      this.authService.normalizeReferralRef(emailLocal) ||
      this.authService.normalizeReferralRef(user.full_name) ||
      'ctv'
    );
  }

  private async getUniquePartnerReferralRef(user: { id: string; full_name?: string | null; email?: string | null }) {
    const seed = this.getPartnerReferralSeed(user);
    for (let index = 0; index < 100; index += 1) {
      const suffix = index === 0 ? '' : String(index + 1);
      const base = seed.slice(0, Math.max(1, 64 - suffix.length));
      const candidate = `${base}${suffix}`;
      const owner = await this.findPartnerReferralOwner(candidate, user.id);
      if (!owner) return candidate;
    }
    throw new HttpException('Không thể tạo mã ref riêng không trùng cho tài khoản này.', HttpStatus.CONFLICT);
  }

  private async getReferralRefForRoleChange(
    currentUser: { id: string; full_name?: string | null; email?: string | null; role?: string | null; ref?: string | null },
    nextRole: string,
  ) {
    const nextIsPartner = this.isPartnerRole(nextRole);
    const currentIsPartner = this.isPartnerRole(currentUser.role);
    if (!nextIsPartner) return { shouldSetRef: false, ref: null };

    const currentRef = this.authService.normalizeReferralRef(currentUser.ref);
    const shouldGenerateOwnRef = !currentIsPartner || !currentRef || Boolean(await this.findPartnerReferralOwner(currentRef, currentUser.id));
    if (!shouldGenerateOwnRef) return { shouldSetRef: false, ref: currentRef };

    return {
      shouldSetRef: true,
      ref: await this.getUniquePartnerReferralRef(currentUser),
    };
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
      vipPlanName: vipPlanId === '7d' ? 'VIP 7 ngày' : vipPlanId === '30d' ? 'VIP 30 ngày' : vipPlanId === '90d' ? 'VIP 3 tháng' : null,
      vipPlanNameZh: vipPlanId === '7d' ? '7天VIP' : vipPlanId === '30d' ? '30天VIP' : vipPlanId === '90d' ? '90天VIP' : null,
      premiumUntil: row.premium_until,
      dailyReminderEnabled: row.daily_reminder_enabled !== false,
      registeredAt: row.created_at,
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
      'SELECT role, ref, is_active FROM users WHERE id = $1',
      [userId],
    );
    const user = result.rows[0];
    if (!user?.is_active) return null;
    return { id: userId, role: this.normalizeRole(user.role), ref: String(user.ref || '').trim().toLowerCase() };
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

  private async assertAdminUserListAccess(headers: Record<string, string | string[] | undefined>) {
    const requester = await this.getAdminRequester(headers);
    if (!requester || !['admin', 'staff', 'sales', 'ctv', 'content'].includes(requester.role)) {
      throw new HttpException('Vui lòng đăng nhập bằng tài khoản admin.', HttpStatus.UNAUTHORIZED);
    }
    return requester;
  }

  private async assertAdminOrContent(headers: Record<string, string | string[] | undefined>) {
    const requester = await this.getAdminRequester(headers);
    if (!requester || !['admin', 'content'].includes(requester.role)) {
      throw new HttpException('Please sign in with an admin or content account.', HttpStatus.UNAUTHORIZED);
    }
    return requester;
  }

  private normalizeAdminUsersPage(value: string | string[] | undefined): number {
    const raw = Array.isArray(value) ? value[0] : value;
    return Math.max(1, Math.floor(Number(raw || 1)) || 1);
  }

  private normalizeAdminUsersPageSize(value: string | string[] | undefined): number {
    const raw = Array.isArray(value) ? value[0] : value;
    return Math.min(100, Math.max(1, Math.floor(Number(raw || 9)) || 9));
  }

  private normalizeAdminUsersPlanFilter(value: string | string[] | undefined): 'all' | '7d' | '30d' | '90d' {
    const raw = String(Array.isArray(value) ? value[0] : value || 'all').trim().toLowerCase();
    if (raw === '7d' || raw === '30d') return raw;
    if (raw === '90d' || raw === '3m') return '90d';
    return 'all';
  }

  private hasAdminUsersQueryOptions(query: Record<string, string | string[] | undefined> = {}): boolean {
    return ['page', 'pageSize', 'search', 'level', 'plan'].some((key) => query[key] !== undefined);
  }

  async getAllUsers(
    headers: Record<string, string | string[] | undefined>,
    query: Record<string, string | string[] | undefined> = {},
  ) {
    const requester = await this.assertAdminUserListAccess(headers);

    try {
      await this.recalculateCtvVipCounts();
      const useServerPagination = this.hasAdminUsersQueryOptions(query);
      const filters: string[] = [];
      const filterParams: any[] = [];
      const addFilterParam = (value: any) => {
        filterParams.push(value);
        return `$${filterParams.length}`;
      };
      const scopedFilters: string[] = [];
      const scopedParams: any[] = [];
      const addScopedParam = (value: any) => {
        scopedParams.push(value);
        return `$${scopedParams.length}`;
      };

      if (requester.role === 'ctv' || requester.role === 'sales') {
        const ctvRef = String(requester.ref || '').trim().toLowerCase();
        filters.push(`lower(btrim(ref)) = ${addFilterParam(ctvRef)}`);
        scopedFilters.push(`lower(btrim(ref)) = ${addScopedParam(ctvRef)}`);
      }

      const search = String(Array.isArray(query.search) ? query.search[0] : query.search || '').trim();
      if (search) {
        const placeholder = addFilterParam(`%${search}%`);
        filters.push(`(full_name ILIKE ${placeholder} OR email ILIKE ${placeholder} OR id::text ILIKE ${placeholder})`);
      }

      const level = String(Array.isArray(query.level) ? query.level[0] : query.level || 'all').trim().toUpperCase();
      if (/^HSK[1-6]$/.test(level)) {
        filters.push(`current_level = ${addFilterParam(level)}`);
      }

      const plan = this.normalizeAdminUsersPlanFilter(query.plan);
      if (plan !== 'all') {
        const planPlaceholder = addFilterParam(plan);
        filters.push(`is_premium = TRUE`);
        filters.push(`(premium_until IS NULL OR premium_until > NOW())`);
        filters.push(`CASE
          WHEN lower(coalesce(vip_plan_id, '')) = '7d' THEN '7d'
          WHEN lower(coalesce(vip_plan_id, '')) = '30d' THEN '30d'
          WHEN lower(coalesce(vip_plan_id, '')) IN ('90d', '3m') THEN '90d'
          ELSE ''
        END = ${planPlaceholder}`);
      }

      const whereSql = filters.length ? `WHERE ${filters.join(' AND ')}` : '';
      const scopedWhereSql = scopedFilters.length ? `WHERE ${scopedFilters.join(' AND ')}` : '';
      const summaryResult = await this.db.query(
        `SELECT
           COUNT(*) FILTER (WHERE role <> 'admin')::int AS total_users,
           COUNT(*) FILTER (
             WHERE role <> 'admin'
               AND is_premium = TRUE
               AND (premium_until IS NULL OR premium_until > NOW())
           )::int AS premium_users
         FROM users
         ${scopedWhereSql}`,
        scopedParams,
      );
      const summaryRow = summaryResult.rows[0] || {};
      const summary = {
        totalUsers: Number(summaryRow.total_users || 0),
        premiumUsers: Number(summaryRow.premium_users || 0),
      };

      if (useServerPagination) {
        const pageSize = this.normalizeAdminUsersPageSize(query.pageSize);
        const requestedPage = this.normalizeAdminUsersPage(query.page);
        const countResult = await this.db.query(
          `SELECT COUNT(*)::int AS total FROM users ${whereSql}`,
          filterParams,
        );
        const total = Number(countResult.rows[0]?.total || 0);
        const totalPages = Math.max(1, Math.ceil(total / pageSize));
        const page = Math.min(requestedPage, totalPages);
        const offset = (page - 1) * pageSize;
        const pageParams = [...filterParams, pageSize, offset];
        const result = await this.db.query(
          `SELECT id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip, daily_reminder_enabled, created_at, updated_at, last_login_at
           FROM users
           ${whereSql}
           ORDER BY created_at DESC
           LIMIT $${pageParams.length - 1} OFFSET $${pageParams.length}`,
          pageParams,
        );
        return {
          users: result.rows.map((row) => this.publicUser(row)),
          pagination: {
            page,
            pageSize,
            total,
            totalPages,
            serverSide: true,
          },
          summary,
        };
      }

      const result = await this.db.query(
        `SELECT id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip, daily_reminder_enabled, created_at, updated_at, last_login_at
         FROM users
         ${whereSql}
         ORDER BY created_at DESC`,
        filterParams,
      );
      const users = result.rows.map((row) => this.publicUser(row));
      return {
        users,
        pagination: {
          page: 1,
          pageSize: users.length || 1,
          total: users.length,
          totalPages: 1,
          serverSide: false,
        },
        summary,
      };
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async recalculateCtvVipCounts() {
    await this.db.query(
      `UPDATE users SET vip = 0 WHERE role IN ('ctv', 'sales', 'koc')`,
    );
    await this.db.query(
      `UPDATE users c
       SET vip = sub.cnt
       FROM (
         SELECT lower(btrim(u.ref)) AS ref, COUNT(*) AS cnt
         FROM users u
         WHERE u.ref IS NOT NULL AND btrim(u.ref) <> ''
           AND u.role = 'user'
           AND u.is_premium = TRUE
           AND (u.premium_until IS NULL OR u.premium_until > NOW())
         GROUP BY lower(btrim(u.ref))
       ) sub
       WHERE lower(btrim(c.ref)) = sub.ref
         AND c.role IN ('ctv', 'sales', 'koc')`,
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
    if (normalized === '7d' || normalized === '30d' || normalized === '90d') return normalized;
    if (normalized === '3m') return '90d';
    if (durationDays === 7) return '7d';
    if (durationDays === 30) return '30d';
    if (durationDays === 90) return '90d';
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
    await this.assertAdminOrStaff(headers);

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
        `SELECT id, full_name, email, role, ref, is_active, current_level
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
        if (String(requester.id) === String(id) && requestedRole !== currentRole) {
          throw new HttpException('Staff cannot change their own role from this endpoint.', HttpStatus.FORBIDDEN);
        }
      }
      const roleToSave = currentRole === 'admin' ? currentUser.role : requestedRole;
      const roleChangeRef = await this.getReferralRefForRoleChange(currentUser, roleToSave);
      const result = await this.db.query(
        `UPDATE users
         SET full_name = $1,
             email = $2,
             role = $3,
             ref = CASE WHEN $13::boolean THEN $14 ELSE ref END,
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
          roleChangeRef.shouldSetRef,
          roleChangeRef.ref,
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
    if (!requester || !['admin', 'staff'].includes(requester.role)) {
      throw new HttpException('Only admin can manage user roles.', requester ? HttpStatus.FORBIDDEN : HttpStatus.UNAUTHORIZED);
    }
    if (!this.isEditableRoleValue(body.role)) {
      throw new HttpException('Role must be user, sales, ctv, content or staff.', HttpStatus.BAD_REQUEST);
    }
    const nextRole = this.normalizeEditableRole(body.role);

    if (!['user', 'sales', 'ctv', 'content', 'staff'].includes(nextRole)) {
      throw new HttpException('Role must be user, sales, ctv, content or staff.', HttpStatus.BAD_REQUEST);
    }
    if (String(requester.id) === String(id)) {
      throw new HttpException('Cannot change your own role.', HttpStatus.FORBIDDEN);
    }

    const current = await this.db.query(
      `SELECT id, full_name, email, role, ref
       FROM users
       WHERE id = $1`,
      [id],
    );
    const currentUser = current.rows[0];
    if (!currentUser) {
      throw new HttpException('Kh么ng t矛m th岷 user.', HttpStatus.NOT_FOUND);
    }
    const currentRole = this.normalizeRole(currentUser.role);
    if (currentRole === 'admin') {
      throw new HttpException('Cannot modify admin accounts.', HttpStatus.FORBIDDEN);
    }
    const roleChangeRef = await this.getReferralRefForRoleChange(currentUser, nextRole);
    const result = await this.db.query(
      `UPDATE users
       SET role = $1,
           ref = CASE WHEN $3::boolean THEN $4 ELSE ref END,
           updated_at = NOW()
       WHERE id = $2
       RETURNING id, full_name, email, role, ref, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, daily_reminder_enabled, created_at, updated_at, last_login_at`,
      [nextRole, id, roleChangeRef.shouldSetRef, roleChangeRef.ref],
    );
    return { user: this.publicUser(result.rows[0]) };
  }

  async updateUserRef(
    id: string,
    body: { ref?: string },
    headers: Record<string, string | string[] | undefined>,
  ) {
    const requester = await this.assertAdminOrStaff(headers);
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
    const currentRole = this.normalizeRole(currentUser.role);
    if (!['ctv', 'sales'].includes(currentRole)) {
      throw new HttpException('Chỉ tài khoản CTV mới được tạo link ref.', HttpStatus.BAD_REQUEST);
    }
    const duplicate = await this.db.query(
      `SELECT id, full_name, email
       FROM users
       WHERE lower(btrim(ref)) = $1
         AND id <> $2
         AND role IN ('ctv', 'staff', 'employee', 'sales', 'koc')
       LIMIT 1`,
      [ref, id],
    );
    if (duplicate.rows[0]) {
      throw new HttpException(
        'Mã ref này đang được dùng bởi CTV khác. Vui lòng chọn mã ref khác.',
        HttpStatus.CONFLICT,
      );
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
    const requester = await this.assertAdminOrStaff(headers);

    try {
      if (requester.role === 'staff') {
        if (String(requester.id) === String(id)) {
          throw new HttpException('Staff cannot delete their own account.', HttpStatus.FORBIDDEN);
        }
        const current = await this.db.query(
          `SELECT id, role
           FROM users
           WHERE id = $1`,
          [id],
        );
        const currentUser = current.rows[0];
        if (!currentUser) {
          throw new HttpException('KhÃ´ng tÃ¬m tháº¥y user.', HttpStatus.NOT_FOUND);
        }
        if (this.normalizeRole(currentUser.role) === 'admin') {
          throw new HttpException('Staff cannot delete admin accounts.', HttpStatus.FORBIDDEN);
        }
      }
      const result = await this.db.query('DELETE FROM users WHERE id = $1', [id]);
      if (result.rowCount === 0) {
        throw new HttpException('Không tìm thấy user.', HttpStatus.NOT_FOUND);
      }
      return { ok: true };
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
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
    await this.assertAdminOrContent(headers);
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
    await this.assertAdminOrContent(headers);
    try {
      return await this.contentService.saveLocks(body.lessons || []);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getDailyThemeLocks(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdminOrContent(headers);
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
    await this.assertAdminOrContent(headers);
    try {
      return await this.contentService.saveDailyLocks(body.themes || []);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getHskLevelCovers(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdminOrContent(headers);
    try {
      const covers = await this.contentService.listHskLevelCovers();
      return { covers };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getListeningLocks(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdminOrContent(headers);
    return { ...(await this.contentService.listListeningLocks()) };
  }

  async saveListeningLocks(body: { topics?: any[]; lessons?: any[] }, headers: Record<string, string | string[] | undefined>) {
    await this.assertAdminOrContent(headers);
    return this.contentService.saveListeningLocks(body.topics || [], body.lessons || []);
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
    await this.assertAdminOrContent(headers);
    try {
      return await this.contentService.saveHskLevelCovers(body.covers || []);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private static readonly ANALYTICS_TZ = 'Asia/Ho_Chi_Minh';
  private static readonly ANALYTICS_MAX_SPAN_DAYS = 1000;
  private static readonly ANALYTICS_CACHE_TTL_MS = 2 * 60 * 1000;
  private readonly analyticsResponseCache = new Map<string, { expiresAt: number; value: any }>();

  private analyticsCacheKey(kind: string, fromYmd: string, toYmd: string): string {
    return `${kind}:${fromYmd}:${toYmd}`;
  }

  private getAnalyticsCache<T>(key: string): T | null {
    const cached = this.analyticsResponseCache.get(key);
    if (!cached) return null;
    if (cached.expiresAt <= Date.now()) {
      this.analyticsResponseCache.delete(key);
      return null;
    }
    return cached.value as T;
  }

  private setAnalyticsCache<T>(key: string, value: T): T {
    this.analyticsResponseCache.set(key, {
      expiresAt: Date.now() + AdminService.ANALYTICS_CACHE_TTL_MS,
      value,
    });
    return value;
  }

  private async ensureAnalyticsDailySummary(fromYmd: string, toYmd: string): Promise<void> {
    await this.db.query(`
      CREATE TABLE IF NOT EXISTS analytics_daily_summary (
        day DATE PRIMARY KEY,
        daily_learners INTEGER NOT NULL DEFAULT 0,
        daily_attempts INTEGER NOT NULL DEFAULT 0,
        vip_modal_opens INTEGER NOT NULL DEFAULT 0,
        registered_users INTEGER NOT NULL DEFAULT 0,
        active_learners INTEGER NOT NULL DEFAULT 0,
        popup_users INTEGER NOT NULL DEFAULT 0,
        active_vip_users INTEGER NOT NULL DEFAULT 0,
        vip_revenue BIGINT NOT NULL DEFAULT 0,
        vip_activations INTEGER NOT NULL DEFAULT 0,
        refreshed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    const stale = await this.db.query(
      `
      SELECT calendar.day::date AS day
      FROM generate_series($1::date, $2::date, interval '1 day') AS calendar(day)
      LEFT JOIN analytics_daily_summary summary ON summary.day = calendar.day::date
      WHERE summary.day IS NULL
         OR summary.refreshed_at < NOW() - interval '1 hour'
         OR (calendar.day::date >= (NOW() AT TIME ZONE 'Asia/Ho_Chi_Minh')::date
             AND summary.refreshed_at < NOW() - interval '2 minutes')
      ORDER BY calendar.day
      `,
      [fromYmd, toYmd],
    );
    if (!stale.rows.length) return;

    const refreshFrom = stale.rows[0].day;
    const refreshTo = stale.rows[stale.rows.length - 1].day;
    const tz = AdminService.ANALYTICS_TZ;

    await this.db.query(
      `
      WITH days AS (
        SELECT day::date
        FROM generate_series($1::date, $2::date, interval '1 day') AS day
      ),
      learning AS (
        SELECT (created_at AT TIME ZONE '${tz}')::date AS day,
               COUNT(DISTINCT user_id) FILTER (
                 WHERE event_type IN ('lesson_opened', 'question_answered', 'practice_completed') AND user_id IS NOT NULL
               )::int AS daily_learners,
               COUNT(*) FILTER (WHERE event_type = 'practice_completed')::int AS daily_attempts,
               COUNT(*) FILTER (WHERE event_type = 'vip_modal_opened')::int AS vip_modal_opens,
               COUNT(DISTINCT user_id) FILTER (
                 WHERE event_type IN ('lesson_opened', 'question_answered', 'practice_completed') AND user_id IS NOT NULL
               )::int AS active_learners,
               COUNT(DISTINCT user_id) FILTER (
                 WHERE event_type IN ('paywall_shown', 'vip_modal_opened') AND user_id IS NOT NULL
               )::int AS popup_users
        FROM learning_events
        WHERE created_at >= ($1::date::timestamp AT TIME ZONE '${tz}')
          AND created_at < (($2::date + 1)::timestamp AT TIME ZONE '${tz}')
        GROUP BY 1
      ),
      registrations AS (
        SELECT (created_at AT TIME ZONE '${tz}')::date AS day,
               COUNT(*)::int AS registered_users,
               COUNT(*) FILTER (
                 WHERE is_premium = TRUE AND (premium_until IS NULL OR premium_until > NOW())
               )::int AS active_vip_users
        FROM users
        WHERE created_at >= ($1::date::timestamp AT TIME ZONE '${tz}')
          AND created_at < (($2::date + 1)::timestamp AT TIME ZONE '${tz}')
        GROUP BY 1
      ),
      paid AS (
        SELECT (o.paid_at AT TIME ZONE '${tz}')::date AS day,
               COUNT(*)::int AS vip_activations,
               COALESCE(SUM(o.amount), 0)::bigint AS vip_revenue
        FROM payment_orders o
        JOIN users u ON u.id = o.user_id
        WHERE o.status = 'paid'
          AND o.paid_at IS NOT NULL
          AND o.amount IN (29000, 129000, 329000)
          AND LOWER(COALESCE(u.email, '')) NOT LIKE 'test%@%'
          AND o.paid_at >= ($1::date::timestamp AT TIME ZONE '${tz}')
          AND o.paid_at < (($2::date + 1)::timestamp AT TIME ZONE '${tz}')
        GROUP BY 1
      )
      INSERT INTO analytics_daily_summary (
        day,
        daily_learners,
        daily_attempts,
        vip_modal_opens,
        registered_users,
        active_learners,
        popup_users,
        active_vip_users,
        vip_revenue,
        vip_activations,
        refreshed_at
      )
      SELECT days.day,
             COALESCE(learning.daily_learners, 0),
             COALESCE(learning.daily_attempts, 0),
             COALESCE(learning.vip_modal_opens, 0),
             COALESCE(registrations.registered_users, 0),
             COALESCE(learning.active_learners, 0),
             COALESCE(learning.popup_users, 0),
             COALESCE(registrations.active_vip_users, 0),
             COALESCE(paid.vip_revenue, 0),
             COALESCE(paid.vip_activations, 0),
             NOW()
      FROM days
      LEFT JOIN learning ON learning.day = days.day
      LEFT JOIN registrations ON registrations.day = days.day
      LEFT JOIN paid ON paid.day = days.day
      ON CONFLICT (day) DO UPDATE SET
        daily_learners = EXCLUDED.daily_learners,
        daily_attempts = EXCLUDED.daily_attempts,
        vip_modal_opens = EXCLUDED.vip_modal_opens,
        registered_users = EXCLUDED.registered_users,
        active_learners = EXCLUDED.active_learners,
        popup_users = EXCLUDED.popup_users,
        active_vip_users = EXCLUDED.active_vip_users,
        vip_revenue = EXCLUDED.vip_revenue,
        vip_activations = EXCLUDED.vip_activations,
        refreshed_at = NOW()
      `,
      [refreshFrom, refreshTo],
    );
  }

  private async getAnalyticsDailySummary(fromYmd: string, toYmd: string) {
    await this.ensureAnalyticsDailySummary(fromYmd, toYmd);
    return this.db.query(
      `
      SELECT to_char(day, 'YYYY-MM-DD') AS day,
             daily_learners,
             daily_attempts,
             vip_modal_opens,
             registered_users,
             active_learners,
             popup_users,
             active_vip_users,
             vip_revenue,
             vip_activations
      FROM analytics_daily_summary
      WHERE day BETWEEN $1::date AND $2::date
      ORDER BY day
      `,
      [fromYmd, toYmd],
    );
  }

  private sumAnalyticsRows(rows: any[], key: string): number {
    return rows.reduce((sum, row) => sum + Number(row[key] || 0), 0);
  }


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

  private normalizeAnalyticsDateInput(value: string | number | undefined | null): string {
    const raw = String(value || '').trim();
    if (!raw) return '';

    const ymd = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (ymd) {
      const year = Number(ymd[1]);
      const month = Number(ymd[2]);
      const day = Number(ymd[3]);
      const date = new Date(Date.UTC(year, month - 1, day));
      if (date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day) {
        return date.toISOString().slice(0, 10);
      }
      return '';
    }

    const slash = raw.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
    if (!slash) return '';
    const first = Number(slash[1]);
    const second = Number(slash[2]);
    const year = Number(slash[3]);
    let month = first;
    let day = second;
    if (first > 12 && second <= 12) {
      day = first;
      month = second;
    }
    const date = new Date(Date.UTC(year, month - 1, day));
    if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return '';
    return date.toISOString().slice(0, 10);
  }

  private spanDays(fromYmd: string, toYmd: string): number {
    return Math.round((this.ymdToUtcDate(toYmd).getTime() - this.ymdToUtcDate(fromYmd).getTime()) / 86400000) + 1;
  }

  private resolveAnalyticsRange(options: { days?: number | string; from?: string; to?: string }) {
    let fromYmd = this.normalizeAnalyticsDateInput(options.from);
    let toYmd = this.normalizeAnalyticsDateInput(options.to);

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

  async getVipManagement(
    headers: Record<string, string | string[] | undefined>,
    options: { days?: number | string; from?: string; to?: string } = {},
  ) {
    await this.assertAdmin(headers);

    const { fromYmd, toYmd, days } = this.resolveAnalyticsRange(options);
    const tz = AdminService.ANALYTICS_TZ;
    const paidWithinRange = `o.paid_at >= ($1::date::timestamp AT TIME ZONE '${tz}') AND o.paid_at < (($2::date + 1)::timestamp AT TIME ZONE '${tz}')`;
    const validVipPaymentFilter = `o.amount IN (29000, 129000, 329000)`;
    const realVipUserFilter = `LOWER(COALESCE(u.email, '')) NOT LIKE 'test%@%'`;
    const params = [fromYmd, toYmd];
    const cacheKey = this.analyticsCacheKey('vip', fromYmd, toYmd);
    const cached = this.getAnalyticsCache<any>(cacheKey);
    if (cached) return cached;

    try {
      const [dailySummary, planBreakdown, userPlanRows] = await Promise.all([
        this.getAnalyticsDailySummary(fromYmd, toYmd),
        this.db.query(
          `SELECT o.plan_id, COALESCE(p.name_vi, o.plan_id) AS plan_name,
                  COUNT(*)::int AS activations,
                  COALESCE(SUM(o.amount), 0)::bigint AS revenue
           FROM payment_orders o
           JOIN users u ON u.id = o.user_id
           LEFT JOIN payment_plans p ON p.id = o.plan_id
           WHERE o.status = 'paid' AND o.paid_at IS NOT NULL AND ${validVipPaymentFilter} AND ${realVipUserFilter} AND ${paidWithinRange}
           GROUP BY o.plan_id, p.name_vi
           ORDER BY revenue DESC, activations DESC`,
          params,
        ),
        this.db.query(
          `SELECT u.id AS user_id, u.full_name, u.email, u.is_premium, u.premium_until, u.vip_plan_id,
                  o.plan_id, COALESCE(p.name_vi, o.plan_id) AS plan_name,
                  COUNT(*)::int AS activations,
                  COALESCE(SUM(o.amount), 0)::bigint AS revenue,
                  MAX(o.paid_at) AS latest_paid_at
           FROM payment_orders o
           JOIN users u ON u.id = o.user_id
           LEFT JOIN payment_plans p ON p.id = o.plan_id
           WHERE o.status = 'paid' AND o.paid_at IS NOT NULL AND ${validVipPaymentFilter} AND ${realVipUserFilter} AND ${paidWithinRange}
           GROUP BY u.id, u.full_name, u.email, u.is_premium, u.premium_until, u.vip_plan_id, o.plan_id, p.name_vi
           ORDER BY revenue DESC, latest_paid_at DESC`,
          params,
        ),
      ]);

      const usersById = new Map<string, any>();
      for (const row of userPlanRows.rows) {
        const userId = String(row.user_id || '');
        if (!usersById.has(userId)) {
          usersById.set(userId, {
            userId,
            fullName: row.full_name || '',
            email: row.email || '',
            isPremium: row.is_premium === true,
            premiumUntil: row.premium_until || null,
            currentPlanId: row.vip_plan_id || '',
            totalActivations: 0,
            totalRevenue: 0,
            latestPaidAt: null,
            plans: {},
          });
        }
        const user = usersById.get(userId);
        const planId = String(row.plan_id || 'unknown').toLowerCase();
        const activations = Number(row.activations || 0);
        const revenue = Number(row.revenue || 0);
        user.totalActivations += activations;
        user.totalRevenue += revenue;
        const latestPaidAt = row.latest_paid_at || null;
        if (latestPaidAt && (!user.latestPaidAt || new Date(latestPaidAt).getTime() > new Date(user.latestPaidAt).getTime())) {
          user.latestPaidAt = latestPaidAt;
        }
        user.plans[planId] = {
          planId,
          planName: row.plan_name || planId,
          activations,
          revenue,
        };
      }

      const response = {
        meta: { days, from: fromYmd, to: toYmd },
        vipModalOpens: this.sumAnalyticsRows(dailySummary.rows, 'vip_modal_opens'),
        registeredUsers: this.sumAnalyticsRows(dailySummary.rows, 'registered_users'),
        vipActivations: this.sumAnalyticsRows(dailySummary.rows, 'vip_activations'),
        revenue: this.sumAnalyticsRows(dailySummary.rows, 'vip_revenue'),
        dailyRevenue: this.buildDailySeries(
          dailySummary.rows.map((row) => ({ day: row.day, value: row.vip_revenue })),
          fromYmd,
          toYmd,
        ),
        planBreakdown: planBreakdown.rows.map((row) => ({
          planId: row.plan_id || '',
          planName: row.plan_name || row.plan_id || '',
          activations: Number(row.activations || 0),
          revenue: Number(row.revenue || 0),
        })),
        users: Array.from(usersById.values()).sort((a, b) => b.totalRevenue - a.totalRevenue || b.totalActivations - a.totalActivations),
      };
      return this.setAnalyticsCache(cacheKey, response);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lá»—i server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getLearningAnalytics(
    headers: Record<string, string | string[] | undefined>,
    options: { days?: number | string; from?: string; to?: string } = {},
  ) {
    await this.assertAdmin(headers);

    const { fromYmd, toYmd, days } = this.resolveAnalyticsRange(options);
    const tz = AdminService.ANALYTICS_TZ;
    const withinRange = `created_at >= ($1::date AT TIME ZONE '${tz}') AND created_at < (($2::date + 1) AT TIME ZONE '${tz}')`;
    const params = [fromYmd, toYmd];
    const cacheKey = this.analyticsCacheKey('learning', fromYmd, toYmd);
    const cached = this.getAnalyticsCache<any>(cacheKey);
    if (cached) return cached;

    try {
      const [dailySummary, topLessons, sourceBreakdown] = await Promise.all([
        this.getAnalyticsDailySummary(fromYmd, toYmd),
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
      ]);

      const response = {
        meta: { days, from: fromYmd, to: toYmd },
        dailyLearners: this.buildDailySeries(
          dailySummary.rows.map((row) => ({ day: row.day, value: row.daily_learners })),
          fromYmd,
          toYmd,
        ),
        dailyAttempts: this.buildDailySeries(
          dailySummary.rows.map((row) => ({ day: row.day, value: row.daily_attempts })),
          fromYmd,
          toYmd,
        ),
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
        vipModalOpens: this.sumAnalyticsRows(dailySummary.rows, 'vip_modal_opens'),
        funnel: {
          registered: this.sumAnalyticsRows(dailySummary.rows, 'registered_users'),
          learned: this.sumAnalyticsRows(dailySummary.rows, 'active_learners'),
          popup: this.sumAnalyticsRows(dailySummary.rows, 'popup_users'),
          vip: this.sumAnalyticsRows(dailySummary.rows, 'active_vip_users'),
        },
      };
      return this.setAnalyticsCache(cacheKey, response);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lá»—i server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
