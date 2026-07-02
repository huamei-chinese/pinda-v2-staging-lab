import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { PaymentPlansService } from '../payment/payment-plans.service';
import { ContentService } from '../content/content.service';
import { AuthService } from '../auth/auth.service';
import * as crypto from 'crypto';

@Injectable()
export class AdminService {
  constructor(
    private readonly db: DatabaseService,
    private readonly paymentPlansService: PaymentPlansService,
    private readonly contentService: ContentService,
    private readonly authService: AuthService,
  ) {}

  publicUser(row: any) {
    const premiumUntil = row.premium_until ? new Date(row.premium_until) : null;
    const isPremium = Boolean(
      row.is_premium && (!premiumUntil || premiumUntil.getTime() > Date.now()),
    );

    const plan = row.role === 'employee' ? 'EMPLOYEE' : isPremium ? 'PREMIUM' : 'FREE';

    return {
      id: row.id,
      fullName: row.full_name,
      email: row.email,
      role: row.role,
      isActive: row.is_active,
      currentLevel: row.current_level || 'HSK2',
      avatarUrl: row.avatar_url || '',
      isPremium,
      plan,
      premiumUntil: row.premium_until,
      dailyReminderEnabled: row.daily_reminder_enabled !== false,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      lastLoginAt: row.last_login_at,
    };
  }

  async isAdminRequest(headers: Record<string, string | string[] | undefined>): Promise<boolean> {
    const configuredAdminKey = process.env.ADMIN_KEY || '';
    const providedAdminKeyHeader = headers['x-admin-key'];
    const providedAdminKey = String(Array.isArray(providedAdminKeyHeader) ? providedAdminKeyHeader[0] : providedAdminKeyHeader || '');
    if (!configuredAdminKey || !providedAdminKey) return false;

    const expected = Buffer.from(configuredAdminKey);
    const provided = Buffer.from(providedAdminKey);
    if (expected.length !== provided.length || !crypto.timingSafeEqual(expected, provided)) {
      return false;
    }

    const adminUserId = headers['x-admin-user-id'];
    const userId = Array.isArray(adminUserId) ? adminUserId[0] : adminUserId;
    if (!userId) return false;

    const result = await this.db.query(
      'SELECT role, is_active FROM users WHERE id = $1',
      [userId],
    );
    const user = result.rows[0];
    return user?.role === 'admin' && user?.is_active === true;
  }

  private async assertAdmin(headers: Record<string, string | string[] | undefined>) {
    if (!(await this.isAdminRequest(headers))) {
      throw new HttpException('Vui lòng đăng nhập bằng tài khoản admin.', HttpStatus.UNAUTHORIZED);
    }
  }

  async getAllUsers(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);

    try {
      const result = await this.db.query(
        `SELECT id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, created_at, updated_at, last_login_at
         FROM users
         ORDER BY created_at DESC`,
      );
      return { users: result.rows.map((row) => this.publicUser(row)) };
    } catch (error: any) {
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
    const role = String(body.role || 'student').trim();
    const currentLevel = String(body.currentLevel || 'HSK2').trim().toUpperCase();
    const plan = String(body.plan || 'FREE').trim().toUpperCase();
    const isActive = body.isActive !== false;
    const durationDays = Math.max(0, Number(body.durationDays || 0));
    const isPremium = plan === 'PREMIUM';
    const roleToSave = plan === 'EMPLOYEE' ? 'employee' : role || 'student';
    const premiumUntil = this.calculatePremiumUntil(plan, durationDays);

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
        `INSERT INTO users (full_name, email, password_hash, role, is_active, current_level, is_premium, premium_until)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, created_at, updated_at, last_login_at`,
        [
          fullName,
          email,
          this.authService.hashPassword(password),
          roleToSave,
          isActive,
          currentLevel,
          isPremium,
          premiumUntil,
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
    body: { fullName: string; email: string; role: string; isActive: boolean; currentLevel?: string },
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);

    const fullName = String(body.fullName || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const role = String(body.role || 'student').trim();
    const isActive = body.isActive === true;
    const currentLevel = String(body.currentLevel || 'HSK2').trim().toUpperCase();

    if (!fullName || !email) {
      throw new HttpException('Tên và email không được để trống.', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.db.query(
        `UPDATE users
         SET full_name = $1, email = $2, role = $3, is_active = $4, current_level = $5, updated_at = NOW()
         WHERE id = $6
         RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, created_at, updated_at, last_login_at`,
        [fullName, email, role, isActive, currentLevel, id],
      );
      if (!result.rows[0]) {
        throw new HttpException('Không tìm thấy user.', HttpStatus.NOT_FOUND);
      }
      return { user: this.publicUser(result.rows[0]) };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
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
