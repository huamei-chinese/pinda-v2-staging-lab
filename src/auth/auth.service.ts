import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(private readonly db: DatabaseService) {}

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

  publicUser(row: any) {
    const premiumUntil = row.premium_until ? new Date(row.premium_until) : null;
    const isPremium = Boolean(
      row.is_premium && (!premiumUntil || premiumUntil.getTime() > Date.now()),
    );
    return {
      id: row.id,
      fullName: row.full_name,
      email: row.email,
      role: row.role,
      isActive: row.is_active,
      currentLevel: row.current_level || 'HSK2',
      avatarUrl: row.avatar_url || '',
      isPremium,
      premiumUntil: row.premium_until || null,
      dailyReminderEnabled: row.daily_reminder_enabled !== false,
      emailVerified: Boolean(row.email_verified_at),
      emailVerifiedAt: row.email_verified_at || null,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      lastLoginAt: row.last_login_at,
    };
  }

  async register(fullName: string, email: string, password: string) {
    if (fullName.length < 2) {
      throw new HttpException('Vui lòng nhập họ và tên.', HttpStatus.BAD_REQUEST);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new HttpException('Email không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (password.length < 6) {
      throw new HttpException('Mật khẩu cần tối thiểu 6 ký tự.', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.db.query(
        `INSERT INTO users (full_name, email, password_hash)
         VALUES ($1, $2, $3)
         RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
        [fullName, email, this.hashPassword(password)],
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
       RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [user.id],
    );
    return { user: this.publicUser(updated.rows[0]) };
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
         RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
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
       RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
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

  private async sendVerificationEmail(email: string, code: string): Promise<'sent' | 'dev'> {
    const resendApiKey = process.env.RESEND_API_KEY || '';
    const from = process.env.EMAIL_FROM || 'HuaMei <no-reply@huamei.vn>';
    if (!resendApiKey) {
      console.log(`[email-verification] ${email}: ${code}`);
      return 'dev';
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: email,
        subject: 'Ma xac minh email HuaMei',
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
            <h2>Ma xac minh email HuaMei</h2>
            <p>Nhap ma ben duoi de xac minh email cua ban:</p>
            <p style="font-size:28px;font-weight:800;letter-spacing:6px">${code}</p>
            <p>Ma co hieu luc trong 10 phut.</p>
          </div>
        `,
      }),
    });
    if (!response.ok) {
      throw new HttpException('Khong the gui email xac minh. Vui long thu lai sau.', HttpStatus.BAD_GATEWAY);
    }
    return 'sent';
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
      devCode: delivery === 'dev' && process.env.NODE_ENV !== 'production' ? code : undefined,
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
       RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [id],
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
       RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [enabled, id],
    );
    if (!result.rows[0]) {
      throw new HttpException('Không tìm thấy tài khoản.', HttpStatus.NOT_FOUND);
    }
    return { user: this.publicUser(result.rows[0]) };
  }
}
