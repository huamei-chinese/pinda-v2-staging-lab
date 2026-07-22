import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as crypto from 'crypto';
import * as tls from 'tls';
import { FirebaseAuthService } from './firebase-auth.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private readonly firebaseAuth: FirebaseAuthService,
  ) {}

  private normalizeVipPlanId(planId: string | null | undefined): string | null {
    const normalized = String(planId || '').trim().toLowerCase();
    if (normalized === '3d' || normalized === '7d') return '3d';
    if (normalized === '30d') return '30d';
    if (normalized === '90d' || normalized === '3m') return '90d';
    return normalized || null;
  }

  private normalizeRole(role: string | null | undefined): 'user' | 'sales' | 'ctv' | 'content' | 'staff' | 'admin' {
    const normalized = String(role || '').trim().toLowerCase();
    if (normalized === 'admin') return 'admin';
    if (normalized === 'sales' || normalized === 'koc') return 'sales';
    if (normalized === 'staff' || normalized === 'employee') return 'staff';
    if (normalized === 'ctv') return 'ctv';
    if (normalized === 'content' || normalized === 'content_manager') return 'content';
    return 'user';
  }

  private vipPlanName(planId: string | null, lang: 'vi' | 'zh'): string | null {
    if (planId === '3d') return lang === 'vi' ? 'VIP 3 ngày' : '3天VIP';
    if (planId === '30d') return lang === 'vi' ? 'VIP 30 ngày' : '30天VIP';
    if (planId === '90d') return lang === 'vi' ? 'VIP 3 tháng' : '90天VIP';
    return planId ? (lang === 'vi' ? 'VIP' : 'VIP') : null;
  }

  private vipRemainingDays(premiumUntil: Date | null): number {
    if (!premiumUntil) return 0;
    const remainingMs = premiumUntil.getTime() - Date.now();
    return remainingMs > 0 ? Math.ceil(remainingMs / 86400000) : 0;
  }

  hashPassword(password: string, salt: string = crypto.randomBytes(16).toString('hex')): string {
    const hash = crypto.pbkdf2Sync(password, salt, 120000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
  }

  verifyPassword(password: string, storedHash: string): boolean {
    const [salt, hash] = String(storedHash || '').split(':');
    if (!salt || !hash) return false;
    const expected = Buffer.from(this.hashPassword(password, salt));
    const actual = Buffer.from(storedHash);
    return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
  }

  normalizeReferralRef(ref: string | null | undefined): string | null {
    const normalized = String(ref || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '')
      .slice(0, 64);
    return normalized || null;
  }

  normalizeSource(source: string | null | undefined): string | null {
    const normalized = String(source || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '')
      .slice(0, 40);
    return normalized || null;
  }

  private referralSourceFromPrefix(prefix: string): string | null {
    const normalized = String(prefix || '').trim().toUpperCase();
    if (normalized === 'F') return 'facebook';
    if (normalized === 'T') return 'tiktok';
    if (normalized === 'K') return 'koc';
    if (normalized === 'L') return 'ctv_livestream';
    return null;
  }

  private async resolveReferralAttribution(ref?: string, src?: string) {
    const normalizedRef = this.normalizeReferralRef(ref);
    const normalizedSource = this.normalizeSource(src);
    if (!normalizedRef) return { ref: null, src: normalizedSource };

    const shortCodeMatch = normalizedRef.match(/^([ftkl])?([0-9]+)$/i);
    if (!shortCodeMatch) return { ref: normalizedRef, src: normalizedSource };

    const [, prefix = '', partnerCode] = shortCodeMatch;
    const sourceFromPrefix = this.referralSourceFromPrefix(prefix);
    const owner = await this.db.query(
      `SELECT ref
       FROM users
       WHERE lower(btrim(partner_code)) = $1
         AND role IN ('ctv', 'sales', 'koc')
       ORDER BY created_at ASC
       LIMIT 1`,
      [partnerCode],
    );
    const ownerRef = this.normalizeReferralRef(owner.rows[0]?.ref);
    return {
      ref: ownerRef || partnerCode,
      src: normalizedSource || sourceFromPrefix,
    };
  }

  publicUser(row: any) {
    const premiumUntil = row.premium_until ? new Date(row.premium_until) : null;
    const isPremium = Boolean(
      row.is_premium && (!premiumUntil || premiumUntil.getTime() > Date.now()),
    );
    const vipPlanId = isPremium ? this.normalizeVipPlanId(row.vip_plan_id) : null;
    const role = this.normalizeRole(row.role);
    const vipPlan = role === 'admin'
      ? 'ADMIN'
      : isPremium
        ? (vipPlanId || 'PREMIUM')
        : 'FREE';
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
      vipStatus: isPremium ? 'active' : 'inactive',
      vipPlan,
      vipPlanId,
      vipPlanName: isPremium ? this.vipPlanName(vipPlanId, 'vi') : null,
      vipPlanNameZh: isPremium ? this.vipPlanName(vipPlanId, 'zh') : null,
      vipTrialUsed: Boolean(row.vip_trial_used),
      vipExpiresAt: row.premium_until || null,
      vipRemainingDays: isPremium ? this.vipRemainingDays(premiumUntil) : 0,
      premiumUntil: row.premium_until || null,
      dailyReminderEnabled: row.daily_reminder_enabled !== false,
      emailVerified: Boolean(row.email_verified_at),
      emailVerifiedAt: row.email_verified_at || null,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      lastLoginAt: row.last_login_at,
    };
  }

  async register(fullName: string, email: string, password: string, ref?: string, src?: string) {
    if (fullName.length < 2) {
      throw new HttpException('Vui lòng nhập họ và tên.', HttpStatus.BAD_REQUEST);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new HttpException('Email không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (password.length < 6) {
      throw new HttpException('Mật khẩu cần tối thiểu 6 ký tự.', HttpStatus.BAD_REQUEST);
    }

    const attribution = await this.resolveReferralAttribution(ref, src);

    try {
      const result = await this.db.query(
        `INSERT INTO users (full_name, email, password_hash, role, ref, src)
         VALUES ($1, $2, $3, 'user', $4, $5)
         RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
        [fullName, email, this.hashPassword(password), attribution.ref, attribution.src],
      );
      return { user: this.publicUser(result.rows[0]) };
    } catch (error: any) {
      if (error.code === '23505') {
        throw new HttpException('Email này đã được đăng ký.', HttpStatus.CONFLICT);
      }
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(email: string, password: string) {
    let result;
    try {
      result = await this.db.query('SELECT * FROM users WHERE email = $1', [email]);
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi cơ sở dữ liệu.', HttpStatus.SERVICE_UNAVAILABLE);
    }

    const user = result.rows[0];
    if (!user || !this.verifyPassword(password, user.password_hash)) {
      throw new HttpException('Email hoặc mật khẩu không đúng.', HttpStatus.UNAUTHORIZED);
    }
    if (!user.is_active) {
      throw new HttpException('Tài khoản đã bị khóa.', HttpStatus.FORBIDDEN);
    }

    const updated = await this.db.query(
      `UPDATE users SET last_login_at = NOW(), updated_at = NOW()
       WHERE id = $1
       RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [user.id],
    );
    return { user: this.publicUser(updated.rows[0]) };
  }

  firebaseConfig() {
    return this.firebaseAuth.publicConfig();
  }

  async canRegisterFirebase(email: string) {
    const normalizedEmail = String(email || '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      throw new HttpException('Email không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    const existing = await this.db.query('SELECT id FROM users WHERE email = $1 LIMIT 1', [normalizedEmail]);
    if (existing.rows[0]) {
      throw new HttpException(
        'Email này đã có tài khoản. Vui lòng đăng nhập để chuyển tài khoản sang Firebase.',
        HttpStatus.CONFLICT,
      );
    }
    return { ok: true };
  }

  private authorizationToken(headers: Record<string, string | string[] | undefined>): string {
    return this.firebaseAuth.bearerToken(headers.authorization);
  }

  async syncFirebaseSession(
    body: any,
    headers: Record<string, string | string[] | undefined>,
  ) {
    const identity = await this.firebaseAuth.verifyIdToken(this.authorizationToken(headers));
    const requestedName = String(body.fullName || identity.name || '').trim();
    const byUid = await this.db.query('SELECT * FROM users WHERE firebase_uid = $1 LIMIT 1', [identity.uid]);
    let user = byUid.rows[0];

    if (!user) {
      const byEmail = await this.db.query('SELECT * FROM users WHERE email = $1 LIMIT 1', [identity.email]);
      const existing = byEmail.rows[0];
      if (existing) {
        if (existing.firebase_uid && existing.firebase_uid !== identity.uid) {
          throw new HttpException('Email này đã liên kết với tài khoản Firebase khác.', HttpStatus.CONFLICT);
        }
        if (!identity.emailVerified) {
          throw new HttpException(
            'Tài khoản cũ cần đăng nhập bằng mật khẩu hiện tại một lần để chuyển sang Firebase.',
            HttpStatus.CONFLICT,
          );
        }
        const attached = await this.db.query(
          `UPDATE users
           SET firebase_uid = $1,
               email_verified_at = COALESCE(email_verified_at, NOW()),
               last_login_at = NOW(),
               updated_at = NOW()
           WHERE id = $2
           RETURNING *`,
          [identity.uid, existing.id],
        );
        user = attached.rows[0];
      } else {
        if (requestedName.length < 2) {
          throw new HttpException('Vui lòng nhập họ và tên.', HttpStatus.BAD_REQUEST);
        }
        const attribution = await this.resolveReferralAttribution(body.ref, body.src);
        const created = await this.db.query(
          `INSERT INTO users (full_name, email, password_hash, firebase_uid, role, ref, src, email_verified_at, last_login_at)
           VALUES ($1, $2, $3, $4, 'user', $5, $6, $7, NOW())
           RETURNING *`,
          [
            requestedName,
            identity.email,
            this.hashPassword(crypto.randomBytes(32).toString('base64url')),
            identity.uid,
            attribution.ref,
            attribution.src,
            identity.emailVerified ? new Date().toISOString() : null,
          ],
        );
        user = created.rows[0];
      }
    } else {
      const updated = await this.db.query(
        `UPDATE users
         SET email = $1,
             email_verified_at = CASE WHEN $2 THEN COALESCE(email_verified_at, NOW()) ELSE email_verified_at END,
             last_login_at = NOW(),
             updated_at = NOW()
         WHERE id = $3
         RETURNING *`,
        [identity.email, identity.emailVerified, user.id],
      );
      user = updated.rows[0];
    }

    if (!user?.is_active) {
      throw new HttpException('Tài khoản đã bị khóa.', HttpStatus.FORBIDDEN);
    }
    return { user: this.publicUser(user) };
  }

  async migrateLegacyUserToFirebase(email: string, password: string) {
    if (!this.firebaseAuth.isEnabled()) {
      throw new HttpException('Firebase Authentication chưa được cấu hình.', HttpStatus.SERVICE_UNAVAILABLE);
    }
    const result = await this.db.query('SELECT * FROM users WHERE email = $1 LIMIT 1', [email]);
    const user = result.rows[0];
    if (!user || !this.verifyPassword(password, user.password_hash)) {
      throw new HttpException('Email hoặc mật khẩu không đúng.', HttpStatus.UNAUTHORIZED);
    }
    if (!user.is_active) {
      throw new HttpException('Tài khoản đã bị khóa.', HttpStatus.FORBIDDEN);
    }

    const firebaseUser = await this.firebaseAuth.ensureUser(user.email, user.full_name, password);
    if (user.firebase_uid && user.firebase_uid !== firebaseUser.uid) {
      throw new HttpException('Tài khoản đã liên kết với Firebase UID khác.', HttpStatus.CONFLICT);
    }
    await this.db.query(
      `UPDATE users
       SET firebase_uid = $1, updated_at = NOW()
       WHERE id = $2`,
      [firebaseUser.uid, user.id],
    );
    const customToken = await this.firebaseAuth.createCustomToken(firebaseUser.uid);
    return { customToken };
  }

  async getCurrentUser(id: string, headers: Record<string, string | string[] | undefined>) {
    const headerValue = headers['x-user-id'];
    const requesterId = Array.isArray(headerValue) ? headerValue[0] : headerValue;
    if (!requesterId || requesterId !== id) {
      throw new HttpException('Bạn không có quyền xem trạng thái tài khoản này.', HttpStatus.FORBIDDEN);
    }

    const result = await this.db.query('SELECT * FROM users WHERE id = $1', [id]);
    const user = result.rows[0];
    if (!user) {
      throw new HttpException('Không tìm thấy tài khoản.', HttpStatus.NOT_FOUND);
    }
    if (!user.is_active) {
      throw new HttpException('Tài khoản đã bị khóa.', HttpStatus.FORBIDDEN);
    }
    return { user: this.publicUser(user) };
  }

  private signCloudinaryParams(params: Record<string, string | number>, apiSecret: string): string {
    const payload = Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null && value !== '')
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    return crypto.createHash('sha1').update(`${payload}${apiSecret}`).digest('hex');
  }

  private async uploadAvatarToCloudinary(userId: string, avatarDataUrl: string): Promise<string> {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME || '';
    const apiKey = process.env.CLOUDINARY_API_KEY || '';
    const apiSecret = process.env.CLOUDINARY_API_SECRET || '';
    const folder = process.env.CLOUDINARY_AVATAR_FOLDER || 'huamei/avatars';

    if (!cloudName || !apiKey || !apiSecret) {
      throw new HttpException('Cloudinary chưa được cấu hình trên server.', HttpStatus.SERVICE_UNAVAILABLE);
    }
    if (!String(avatarDataUrl || '').startsWith('data:image/')) {
      throw new HttpException('Ảnh đại diện không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (avatarDataUrl.length > 600000) {
      throw new HttpException('Ảnh đại diện quá lớn. Vui lòng chọn ảnh nhỏ hơn.', HttpStatus.PAYLOAD_TOO_LARGE);
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const params = {
      folder,
      overwrite: 'true',
      public_id: `user-${userId}`,
      timestamp,
    };
    const form = new FormData();
    form.append('file', avatarDataUrl);
    form.append('api_key', apiKey);
    Object.entries(params).forEach(([key, value]) => form.append(key, String(value)));
    form.append('signature', this.signCloudinaryParams(params, apiSecret));

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: form,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.secure_url) {
      throw new HttpException(
        data.error?.message || 'Không thể tải ảnh lên Cloudinary.',
        response.status || HttpStatus.BAD_GATEWAY,
      );
    }
    return data.secure_url;
  }

  async updateOwnProfile(id: string, body: any, headers: Record<string, string | string[] | undefined>) {
    const headerValue = headers['x-user-id'];
    const requesterId = Array.isArray(headerValue) ? headerValue[0] : headerValue;
    if (!requesterId || requesterId !== id) {
      throw new HttpException('Bạn không có quyền cập nhật hồ sơ này.', HttpStatus.FORBIDDEN);
    }

    const fullName = String(body.fullName || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const currentLevel = String(body.currentLevel || 'HSK2').trim().toUpperCase();
    const avatarUrl = String(body.avatarUrl || '').trim();
    const dailyReminderEnabled = body.dailyReminderEnabled !== false;

    if (fullName.length < 2) {
      throw new HttpException('Vui lòng nhập họ và tên.', HttpStatus.BAD_REQUEST);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new HttpException('Email không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (
      avatarUrl &&
      !avatarUrl.startsWith('data:image/') &&
      !/^https?:\/\//i.test(avatarUrl) &&
      !avatarUrl.startsWith('assets/')
    ) {
      throw new HttpException('Ảnh đại diện không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (avatarUrl.length > 600000) {
      throw new HttpException('Ảnh đại diện quá lớn. Vui lòng chọn ảnh nhỏ hơn.', HttpStatus.PAYLOAD_TOO_LARGE);
    }

    try {
      const result = await this.db.query(
        `UPDATE users
         SET full_name = $1,
             email = $2,
             current_level = $3,
             avatar_url = $4,
             daily_reminder_enabled = $5,
             email_verified_at = CASE WHEN email = $2 THEN email_verified_at ELSE NULL END,
             email_verification_code_hash = CASE WHEN email = $2 THEN email_verification_code_hash ELSE NULL END,
             email_verification_expires_at = CASE WHEN email = $2 THEN email_verification_expires_at ELSE NULL END,
             updated_at = NOW()
         WHERE id = $6
         RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
        [fullName, email, currentLevel, avatarUrl || null, dailyReminderEnabled, id],
      );
      if (!result.rows[0]) {
        throw new HttpException('Không tìm thấy tài khoản.', HttpStatus.NOT_FOUND);
      }
      return { user: this.publicUser(result.rows[0]) };
    } catch (error: any) {
      if (error.code === '23505') {
        throw new HttpException('Email này đã được đăng ký.', HttpStatus.CONFLICT);
      }
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateOwnAvatar(id: string, body: any, headers: Record<string, string | string[] | undefined>) {
    const headerValue = headers['x-user-id'];
    const requesterId = Array.isArray(headerValue) ? headerValue[0] : headerValue;
    if (!requesterId || requesterId !== id) {
      throw new HttpException('Bạn không có quyền cập nhật hồ sơ này.', HttpStatus.FORBIDDEN);
    }

    const avatarUrl = await this.uploadAvatarToCloudinary(id, String(body.avatarDataUrl || body.avatarUrl || ''));
    const result = await this.db.query(
      `UPDATE users
       SET avatar_url = $1, updated_at = NOW()
       WHERE id = $2
       RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [avatarUrl, id],
    );
    if (!result.rows[0]) {
      throw new HttpException('Không tìm thấy tài khoản.', HttpStatus.NOT_FOUND);
    }
    return { user: this.publicUser(result.rows[0]), avatarUrl };
  }

  async changeOwnPassword(id: string, body: any, headers: Record<string, string | string[] | undefined>) {
    const headerValue = headers['x-user-id'];
    const requesterId = Array.isArray(headerValue) ? headerValue[0] : headerValue;
    if (!requesterId || requesterId !== id) {
      throw new HttpException('Bạn không có quyền đổi mật khẩu tài khoản này.', HttpStatus.FORBIDDEN);
    }

    const currentPassword = String(body.currentPassword || '');
    const newPassword = String(body.newPassword || '');
    const confirmPassword = String(body.confirmPassword || '');

    if (!currentPassword) {
      throw new HttpException('Vui lòng nhập mật khẩu hiện tại.', HttpStatus.BAD_REQUEST);
    }
    if (newPassword.length < 6) {
      throw new HttpException('Mật khẩu mới cần tối thiểu 6 ký tự.', HttpStatus.BAD_REQUEST);
    }
    if (newPassword !== confirmPassword) {
      throw new HttpException('Mật khẩu xác nhận không khớp.', HttpStatus.BAD_REQUEST);
    }
    if (currentPassword === newPassword) {
      throw new HttpException('Mật khẩu mới cần khác mật khẩu hiện tại.', HttpStatus.BAD_REQUEST);
    }

    const current = await this.db.query('SELECT id, password_hash FROM users WHERE id = $1', [id]);
    const user = current.rows[0];
    if (!user) {
      throw new HttpException('Không tìm thấy tài khoản.', HttpStatus.NOT_FOUND);
    }
    if (!this.verifyPassword(currentPassword, user.password_hash)) {
      throw new HttpException('Mật khẩu hiện tại không đúng.', HttpStatus.UNAUTHORIZED);
    }

    await this.db.query(
      'UPDATE users SET password_hash = $1, updated_at = NOW() WHERE id = $2',
      [this.hashPassword(newPassword), id],
    );
    return { ok: true };
  }

  private requesterId(headers: Record<string, string | string[] | undefined>): string {
    const headerValue = headers['x-user-id'];
    return String(Array.isArray(headerValue) ? headerValue[0] : headerValue || '');
  }

  private emailVerificationHash(userId: string, email: string, code: string): string {
    const secret = process.env.EMAIL_VERIFICATION_SECRET || '';
    if (process.env.NODE_ENV === 'production' && !secret) {
      throw new HttpException('EMAIL_VERIFICATION_SECRET is required in production.', HttpStatus.SERVICE_UNAVAILABLE);
    }

    return crypto
      .createHash('sha256')
      .update(`${userId}:${email}:${code}:${secret || 'huamei-email-verification-dev'}`)
      .digest('hex');
  }

  private passwordResetHash(userId: string, email: string, code: string): string {
    const secret = process.env.PASSWORD_RESET_SECRET || process.env.EMAIL_VERIFICATION_SECRET || '';
    if (process.env.NODE_ENV === 'production' && !secret) {
      throw new HttpException('PASSWORD_RESET_SECRET or EMAIL_VERIFICATION_SECRET is required in production.', HttpStatus.SERVICE_UNAVAILABLE);
    }

    return crypto
      .createHash('sha256')
      .update(`${userId}:${email}:${code}:password-reset:${secret || 'huamei-password-reset-dev'}`)
      .digest('hex');
  }

  private cleanHeader(value: string): string {
    return String(value || '').replace(/[\r\n]+/g, ' ').trim();
  }

  private extractEmailAddress(value: string): string {
    const text = String(value || '').trim();
    const match = text.match(/<([^>]+)>/);
    return (match ? match[1] : text).trim();
  }

  private smtpPassword(host: string, password: string): string {
    return /gmail/i.test(host) ? String(password || '').replace(/\s+/g, '') : String(password || '');
  }

  private readSmtpResponse(socket: tls.TLSSocket): Promise<string> {
    return new Promise((resolve, reject) => {
      let buffer = '';
      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error('SMTP timeout.'));
      }, 15000);
      const cleanup = () => {
        clearTimeout(timeout);
        socket.off('data', onData);
        socket.off('error', onError);
      };
      const onError = (error: Error) => {
        cleanup();
        reject(error);
      };
      const onData = (chunk: Buffer | string) => {
        buffer += chunk.toString();
        const lines = buffer.split(/\r?\n/).filter(Boolean);
        if (lines.some((line) => /^\d{3} /.test(line))) {
          cleanup();
          resolve(buffer);
        }
      };
      socket.on('data', onData);
      socket.once('error', onError);
    });
  }

  private async smtpCommand(socket: tls.TLSSocket, command: string | null, expectedCodes: string[]) {
    if (command !== null) socket.write(`${command}\r\n`);
    const response = await this.readSmtpResponse(socket);
    const code = response.slice(0, 3);
    if (!expectedCodes.includes(code)) {
      throw new Error(`SMTP failed (${code || 'no code'}): ${response.trim()}`);
    }
    return response;
  }

  private async sendSmtpEmail(to: string, subject: string, html: string): Promise<void> {
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT || 465);
    const user = String(process.env.SMTP_USER || '').trim();
    const pass = this.smtpPassword(host, process.env.SMTP_PASS || '');
    const from = process.env.SMTP_FROM || (user ? `HuaMei <${user}>` : process.env.EMAIL_FROM || '');
    if (!user || !pass || !from) {
      throw new Error('SMTP_USER, SMTP_PASS and SMTP_FROM/EMAIL_FROM are required.');
    }

    const socket = tls.connect({ host, port, servername: host, rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false' });
    socket.setEncoding('utf8');
    try {
      await this.smtpCommand(socket, null, ['220']);
      await this.smtpCommand(socket, `EHLO ${this.cleanHeader(process.env.SMTP_HELO || 'localhost')}`, ['250']);
      await this.smtpCommand(socket, 'AUTH LOGIN', ['334']);
      await this.smtpCommand(socket, Buffer.from(user).toString('base64'), ['334']);
      await this.smtpCommand(socket, Buffer.from(pass).toString('base64'), ['235']);
      await this.smtpCommand(socket, `MAIL FROM:<${this.extractEmailAddress(from)}>`, ['250']);
      await this.smtpCommand(socket, `RCPT TO:<${this.extractEmailAddress(to)}>`, ['250', '251']);
      await this.smtpCommand(socket, 'DATA', ['354']);
      const message = [
        `From: ${this.cleanHeader(from)}`,
        `To: ${this.cleanHeader(to)}`,
        `Subject: ${this.cleanHeader(subject)}`,
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        '',
        html,
      ].join('\r\n');
      socket.write(`${message.replace(/\r?\n/g, '\r\n').replace(/^\./gm, '..')}\r\n.\r\n`);
      await this.smtpCommand(socket, null, ['250']);
      await this.smtpCommand(socket, 'QUIT', ['221']);
    } finally {
      socket.end();
    }
  }

  private async sendTransactionalEmail(email: string, subject: string, html: string, logPrefix: string): Promise<'sent'> {
    const smtpUser = process.env.SMTP_USER || '';
    const smtpPass = process.env.SMTP_PASS || '';
    if (!smtpUser || !smtpPass) {
      throw new HttpException(
        'Chưa cấu hình Gmail SMTP. Vui lòng cấu hình SMTP_USER và SMTP_PASS bằng Google App Password.',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    try {
      await this.sendSmtpEmail(email, subject, html);
      return 'sent';
    } catch (error) {
      console.warn(`[${logPrefix}] Gmail SMTP failed:`, error instanceof Error ? error.message : error);
      throw new HttpException(
        'Không thể gửi email qua Gmail SMTP. Vui lòng kiểm tra SMTP_USER, SMTP_PASS (Google App Password) và SMTP_FROM.',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  private async sendVerificationEmail(email: string, code: string): Promise<'sent'> {
    return this.sendTransactionalEmail(
      email,
      'Ma xac minh email HuaMei',
      `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
            <h2>Ma xac minh email HuaMei</h2>
            <p>Nhap ma ben duoi de xac minh email cua ban:</p>
            <p style="font-size:28px;font-weight:800;letter-spacing:6px">${code}</p>
            <p>Ma co hieu luc trong 10 phut.</p>
          </div>
        `,
      'email-verification',
    );
  }

  private async sendPasswordResetEmail(email: string, code: string): Promise<'sent'> {
    return this.sendTransactionalEmail(
      email,
      'Ma dat lai mat khau HuaMei',
      `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
            <h2>Dat lai mat khau HuaMei</h2>
            <p>Nhap ma ben duoi de tao mat khau moi cho tai khoan cua ban:</p>
            <p style="font-size:28px;font-weight:800;letter-spacing:6px">${code}</p>
            <p>Ma co hieu luc trong 10 phut. Neu ban khong yeu cau, hay bo qua email nay.</p>
          </div>
        `,
      'password-reset',
    );
  }

  async sendEmailVerificationCode(id: string, headers: Record<string, string | string[] | undefined>) {
    if (this.requesterId(headers) !== id) {
      throw new HttpException('Ban khong co quyen xac minh email tai khoan nay.', HttpStatus.FORBIDDEN);
    }

    const current = await this.db.query('SELECT id, email, email_verified_at FROM users WHERE id = $1', [id]);
    const user = current.rows[0];
    if (!user) throw new HttpException('Khong tim thay tai khoan.', HttpStatus.NOT_FOUND);
    if (user.email_verified_at) return { ok: true, alreadyVerified: true };

    const code = String(crypto.randomInt(100000, 1000000));
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    await this.db.query(
      `UPDATE users
       SET email_verification_code_hash = $1,
           email_verification_expires_at = $2,
           updated_at = NOW()
       WHERE id = $3`,
      [this.emailVerificationHash(id, user.email, code), expiresAt.toISOString(), id],
    );
    const delivery = await this.sendVerificationEmail(user.email, code);
    return {
      ok: true,
      delivery,
      expiresAt: expiresAt.toISOString(),
    };
  }

  async confirmEmailVerificationCode(id: string, body: any, headers: Record<string, string | string[] | undefined>) {
    if (this.requesterId(headers) !== id) {
      throw new HttpException('Ban khong co quyen xac minh email tai khoan nay.', HttpStatus.FORBIDDEN);
    }
    const code = String(body.code || '').replace(/\D/g, '');
    if (!/^\d{6}$/.test(code)) {
      throw new HttpException('Ma xac minh gom 6 chu so.', HttpStatus.BAD_REQUEST);
    }

    const current = await this.db.query(
      `SELECT id, email, email_verification_code_hash, email_verification_expires_at
       FROM users
       WHERE id = $1`,
      [id],
    );
    const user = current.rows[0];
    if (!user) throw new HttpException('Khong tim thay tai khoan.', HttpStatus.NOT_FOUND);
    const expiresAt = user.email_verification_expires_at ? new Date(user.email_verification_expires_at) : null;
    if (!user.email_verification_code_hash || !expiresAt || expiresAt.getTime() < Date.now()) {
      throw new HttpException('Ma xac minh da het han. Vui long gui lai ma moi.', HttpStatus.BAD_REQUEST);
    }
    if (this.emailVerificationHash(id, user.email, code) !== user.email_verification_code_hash) {
      throw new HttpException('Ma xac minh khong dung.', HttpStatus.BAD_REQUEST);
    }

    const updated = await this.db.query(
      `UPDATE users
       SET email_verified_at = NOW(),
           email_verification_code_hash = NULL,
           email_verification_expires_at = NULL,
           updated_at = NOW()
       WHERE id = $1
       RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [id],
    );
    return { ok: true, user: this.publicUser(updated.rows[0]) };
  }

  async requestPasswordReset(email: string) {
    const normalizedEmail = String(email || '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      throw new HttpException('Email khong hop le.', HttpStatus.BAD_REQUEST);
    }

    const current = await this.db.query('SELECT id, email, is_active FROM users WHERE email = $1', [normalizedEmail]);
    const user = current.rows[0];
    if (!user) {
      throw new HttpException('Email nay chua co tai khoan.', HttpStatus.NOT_FOUND);
    }
    if (!user.is_active) {
      throw new HttpException('Tai khoan da bi khoa.', HttpStatus.FORBIDDEN);
    }

    const code = String(crypto.randomInt(100000, 1000000));
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    await this.db.query(
      `UPDATE users
       SET password_reset_code_hash = $1,
           password_reset_expires_at = $2,
           updated_at = NOW()
       WHERE id = $3`,
      [this.passwordResetHash(user.id, user.email, code), expiresAt.toISOString(), user.id],
    );
    const delivery = await this.sendPasswordResetEmail(user.email, code);
    return {
      ok: true,
      delivery,
      expiresAt: expiresAt.toISOString(),
    };
  }

  private async getPasswordResetUser(email: string, code: string) {
    const normalizedEmail = String(email || '').trim().toLowerCase();
    const normalizedCode = String(code || '').replace(/\D/g, '');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      throw new HttpException('Email khong hop le.', HttpStatus.BAD_REQUEST);
    }
    if (!/^\d{6}$/.test(normalizedCode)) {
      throw new HttpException('Ma xac minh gom 6 chu so.', HttpStatus.BAD_REQUEST);
    }

    const current = await this.db.query(
      `SELECT id, full_name, email, firebase_uid, password_reset_code_hash, password_reset_expires_at, is_active
       FROM users
       WHERE email = $1`,
      [normalizedEmail],
    );
    const user = current.rows[0];
    if (!user) throw new HttpException('Email hoac ma xac minh khong dung.', HttpStatus.BAD_REQUEST);
    if (!user.is_active) throw new HttpException('Tai khoan da bi khoa.', HttpStatus.FORBIDDEN);
    const expiresAt = user.password_reset_expires_at ? new Date(user.password_reset_expires_at) : null;
    if (!user.password_reset_code_hash || !expiresAt || expiresAt.getTime() < Date.now()) {
      throw new HttpException('Ma xac minh da het han. Vui long gui lai ma moi.', HttpStatus.BAD_REQUEST);
    }
    if (this.passwordResetHash(user.id, user.email, normalizedCode) !== user.password_reset_code_hash) {
      throw new HttpException('Ma xac minh khong dung.', HttpStatus.BAD_REQUEST);
    }
    return { user, code: normalizedCode };
  }

  async verifyPasswordResetCode(email: string, code: string) {
    await this.getPasswordResetUser(email, code);
    return { ok: true };
  }

  async confirmPasswordReset(email: string, code: string, newPassword: string, confirmPassword: string) {
    const password = String(newPassword || '');
    const confirmation = String(confirmPassword || '');
    if (password.length < 6) {
      throw new HttpException('Mat khau moi can toi thieu 6 ky tu.', HttpStatus.BAD_REQUEST);
    }
    if (password !== confirmation) {
      throw new HttpException('Mat khau xac nhan khong khop.', HttpStatus.BAD_REQUEST);
    }

    const { user } = await this.getPasswordResetUser(email, code);
    let firebaseUid = user.firebase_uid || null;
    if (this.firebaseAuth.isEnabled()) {
      const firebaseUser = await this.firebaseAuth.ensureUser(user.email, user.full_name, password);
      if (firebaseUid && firebaseUid !== firebaseUser.uid) {
        throw new HttpException(
          'Tài khoản đang liên kết với một định danh Firebase khác.',
          HttpStatus.CONFLICT,
        );
      }
      firebaseUid = firebaseUser.uid;
      await this.firebaseAuth.revokeUserSessions(firebaseUid);
    }
    const updated = await this.db.query(
      `UPDATE users
       SET password_hash = $1,
           firebase_uid = COALESCE($2, firebase_uid),
           password_reset_code_hash = NULL,
           password_reset_expires_at = NULL,
           last_login_at = NOW(),
           updated_at = NOW()
       WHERE id = $3
       RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [this.hashPassword(password), firebaseUid, user.id],
    );
    return { ok: true, user: this.publicUser(updated.rows[0]) };
  }

  async updateOwnReminderSettings(id: string, body: any, headers: Record<string, string | string[] | undefined>) {
    const headerValue = headers['x-user-id'];
    const requesterId = Array.isArray(headerValue) ? headerValue[0] : headerValue;
    if (!requesterId || requesterId !== id) {
      throw new HttpException('Bạn không có quyền cập nhật thông báo tài khoản này.', HttpStatus.FORBIDDEN);
    }

    const enabled = body.enabled !== false;
    const result = await this.db.query(
      `UPDATE users
       SET daily_reminder_enabled = $1, updated_at = NOW()
       WHERE id = $2
       RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [enabled, id],
    );
    if (!result.rows[0]) {
      throw new HttpException('Không tìm thấy tài khoản.', HttpStatus.NOT_FOUND);
    }
    return { user: this.publicUser(result.rows[0]) };
  }

}
