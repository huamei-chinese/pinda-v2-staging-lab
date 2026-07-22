import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ReminderReportsService {
  constructor(private readonly db: DatabaseService) {}

  private isMissingReportTable(error: unknown) {
    return String((error as { code?: string })?.code || '') === '42P01';
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
      throw new HttpException('Chỉ admin được xem báo cáo nhắc học.', HttpStatus.FORBIDDEN);
    }
  }

  private map(row: any) {
    return {
      dispatchId: row.id,
      reminderDate: row.reminder_date || null,
      reason: row.reason,
      status: row.status,
      counts: {
        enqueued: Number(row.enqueued_count || 0),
        claimed: Number(row.claimed_count || 0),
        sent: Number(row.sent_count || 0),
        failed: Number(row.failed_count || 0),
        skipped: Number(row.skipped_count || 0),
      },
      aborted: row.aborted === true,
      error: row.error || null,
      rules: row.rules_snapshot || {},
      requestedAt: row.requested_at,
      startedAt: row.started_at || null,
      completedAt: row.completed_at || null,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async getReport(dispatchId: string, headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    let result;
    try {
      result = await this.db.query('SELECT * FROM study_reminder_runs WHERE id = $1', [dispatchId]);
    } catch (error) {
      if (!this.isMissingReportTable(error)) throw error;
      throw new HttpException('Báo cáo chưa được Server 2 khởi tạo.', HttpStatus.NOT_FOUND);
    }
    if (!result.rows[0]) {
      throw new HttpException('Không tìm thấy lượt gửi nhắc học.', HttpStatus.NOT_FOUND);
    }
    return { report: this.map(result.rows[0]) };
  }

  async listReports(rawLimit: unknown, headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    const parsed = Number(rawLimit ?? 20);
    const limit = Number.isInteger(parsed) ? Math.min(Math.max(parsed, 1), 100) : 20;
    let result;
    try {
      result = await this.db.query(
        'SELECT * FROM study_reminder_runs ORDER BY created_at DESC LIMIT $1',
        [limit],
      );
    } catch (error) {
      if (!this.isMissingReportTable(error)) throw error;
      return { reports: [] };
    }
    return { reports: result.rows.map((row: any) => this.map(row)) };
  }
}
