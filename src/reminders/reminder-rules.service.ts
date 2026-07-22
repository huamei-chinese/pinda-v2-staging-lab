import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

export type ReminderRules = {
  autoEnabled: boolean;
  inactiveDays: number;
  lowStudyMinutes: number;
  lowStudyWindowDays: number;
  cooldownDays: number;
  maxEmailsPerMonth: number;
  vipExpiryDays: number;
  maxEmailsPerRun: number;
  updatedAt: string | null;
};

@Injectable()
export class ReminderRulesService {
  constructor(private readonly db: DatabaseService) {}

  private number(value: unknown, name: string, min: number, max: number): number {
    const parsed = Number(value);
    if (!Number.isInteger(parsed) || parsed < min || parsed > max) {
      throw new HttpException(`${name} phải là số nguyên từ ${min} đến ${max}.`, HttpStatus.BAD_REQUEST);
    }
    return parsed;
  }

  private map(row: any): ReminderRules {
    return {
      autoEnabled: row.auto_enabled === true,
      inactiveDays: Number(row.inactive_days),
      lowStudyMinutes: Number(row.low_study_minutes),
      lowStudyWindowDays: Number(row.low_study_window_days),
      cooldownDays: Number(row.cooldown_days),
      maxEmailsPerMonth: Number(row.max_emails_per_month),
      vipExpiryDays: Number(row.vip_expiry_days),
      maxEmailsPerRun: Number(row.max_emails_per_run),
      updatedAt: row.updated_at || null,
    };
  }

  private async assertAdmin(headers: Record<string, string | string[] | undefined>) {
    const raw = headers['x-admin-user-id'];
    const userId = String(Array.isArray(raw) ? raw[0] : raw || '').trim();
    if (!userId) {
      throw new HttpException('Vui lòng đăng nhập bằng tài khoản admin.', HttpStatus.UNAUTHORIZED);
    }
    const result = await this.db.query(
      "SELECT id FROM users WHERE id = $1 AND role = 'admin' AND is_active = TRUE",
      [userId],
    );
    if (!result.rows[0]) {
      throw new HttpException('Chỉ admin được thay đổi quy tắc nhắc học.', HttpStatus.FORBIDDEN);
    }
    return userId;
  }

  async getCurrentRules(): Promise<ReminderRules> {
    const result = await this.db.query('SELECT * FROM study_reminder_rules WHERE id = 1');
    if (!result.rows[0]) {
      throw new HttpException('Chưa khởi tạo quy tắc nhắc học.', HttpStatus.SERVICE_UNAVAILABLE);
    }
    return this.map(result.rows[0]);
  }

  async getAdminRules(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    return { rules: await this.getCurrentRules() };
  }

  async updateAdminRules(body: any, headers: Record<string, string | string[] | undefined>) {
    const adminId = await this.assertAdmin(headers);
    if (typeof body?.autoEnabled !== 'boolean') {
      throw new HttpException('autoEnabled phải là boolean.', HttpStatus.BAD_REQUEST);
    }
    const values = {
      inactiveDays: this.number(body.inactiveDays, 'Không học trong', 1, 90),
      lowStudyMinutes: this.number(body.lowStudyMinutes, 'Học dưới', 1, 1440),
      lowStudyWindowDays: this.number(body.lowStudyWindowDays ?? 7, 'Cửa sổ học', 1, 30),
      cooldownDays: this.number(body.cooldownDays, 'Cooldown', 1, 30),
      maxEmailsPerMonth: this.number(body.maxEmailsPerMonth, 'Tối đa mỗi tháng', 1, 31),
      vipExpiryDays: this.number(body.vipExpiryDays, 'VIP sắp hết hạn', 1, 90),
      maxEmailsPerRun: this.number(body.maxEmailsPerRun, 'Mỗi lượt tự động', 1, 100),
    };
    const result = await this.db.query(
      `UPDATE study_reminder_rules
       SET auto_enabled = $1,
           inactive_days = $2,
           low_study_minutes = $3,
           low_study_window_days = $4,
           cooldown_days = $5,
           max_emails_per_month = $6,
           vip_expiry_days = $7,
           max_emails_per_run = $8,
           updated_by = $9,
           updated_at = NOW()
       WHERE id = 1
       RETURNING *`,
      [
        body.autoEnabled,
        values.inactiveDays,
        values.lowStudyMinutes,
        values.lowStudyWindowDays,
        values.cooldownDays,
        values.maxEmailsPerMonth,
        values.vipExpiryDays,
        values.maxEmailsPerRun,
        adminId,
      ],
    );
    return { rules: this.map(result.rows[0]) };
  }
}
