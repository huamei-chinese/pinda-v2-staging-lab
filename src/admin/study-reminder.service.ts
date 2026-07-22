import { randomUUID } from 'node:crypto';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

const REMINDER_WORKER_URL = 'https://servermail222.netlify.app/.netlify/functions/study-reminders-background';

type ReminderRules = {
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
export class StudyReminderService {
  private readonly logger = new Logger(StudyReminderService.name);
  private schemaPromise: Promise<void> | null = null;

  constructor(private readonly db: DatabaseService) {}

  private async assertAdmin(headers: Record<string, string | string[] | undefined>) {
    const value = headers['x-admin-user-id'];
    const id = Array.isArray(value) ? value[0] : value;
    if (!id) throw new HttpException('Vui lòng đăng nhập bằng tài khoản admin.', HttpStatus.UNAUTHORIZED);
    const result = await this.db.query('SELECT id, role, is_active FROM users WHERE id = $1', [id]);
    const requester = result.rows[0];
    if (!requester?.is_active || String(requester.role || '').toLowerCase() !== 'admin') {
      throw new HttpException('Bạn không có quyền quản lý nhắc học.', HttpStatus.FORBIDDEN);
    }
    return String(requester.id);
  }

  private ensureSchema() {
    if (!this.schemaPromise) {
      this.schemaPromise = (async () => {
        await this.db.query(`
          CREATE TABLE IF NOT EXISTS study_reminder_rules (
            id SMALLINT PRIMARY KEY,
            auto_enabled BOOLEAN NOT NULL DEFAULT TRUE,
            inactive_days INTEGER NOT NULL DEFAULT 3,
            low_study_minutes INTEGER NOT NULL DEFAULT 5,
            low_study_window_days INTEGER NOT NULL DEFAULT 7,
            cooldown_days INTEGER NOT NULL DEFAULT 3,
            max_emails_per_month INTEGER NOT NULL DEFAULT 3,
            vip_expiry_days INTEGER NOT NULL DEFAULT 7,
            max_emails_per_run INTEGER NOT NULL DEFAULT 50,
            updated_by UUID,
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
          )
        `);
        await this.db.query(`
          INSERT INTO study_reminder_rules (id, auto_enabled)
          VALUES (1, TRUE)
          ON CONFLICT (id) DO NOTHING
        `);
        await this.db.query(`
          CREATE TABLE IF NOT EXISTS study_reminder_runs (
            id UUID PRIMARY KEY,
            reminder_date DATE NOT NULL,
            reason TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'processing',
            rules_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb,
            enqueued_count INTEGER NOT NULL DEFAULT 0,
            claimed_count INTEGER NOT NULL DEFAULT 0,
            sent_count INTEGER NOT NULL DEFAULT 0,
            failed_count INTEGER NOT NULL DEFAULT 0,
            skipped_count INTEGER NOT NULL DEFAULT 0,
            aborted BOOLEAN NOT NULL DEFAULT FALSE,
            error TEXT,
            requested_at TIMESTAMPTZ,
            started_at TIMESTAMPTZ,
            completed_at TIMESTAMPTZ,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
          )
        `);
        await this.db.query(`
          CREATE TABLE IF NOT EXISTS study_reminder_deliveries (
            id UUID PRIMARY KEY,
            dispatch_id UUID NOT NULL,
            user_id UUID,
            reminder_date DATE NOT NULL,
            email TEXT NOT NULL,
            full_name TEXT,
            trigger_reason TEXT,
            rules_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb,
            status TEXT NOT NULL DEFAULT 'pending',
            attempts INTEGER NOT NULL DEFAULT 0,
            provider_message_id TEXT,
            last_error TEXT,
            locked_at TIMESTAMPTZ,
            sent_at TIMESTAMPTZ,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
          )
        `);
      })().catch((error) => {
        this.schemaPromise = null;
        throw error;
      });
    }
    return this.schemaPromise;
  }

  private numberInRange(value: unknown, fallback: number, min: number, max: number) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? Math.min(max, Math.max(min, Math.round(parsed))) : fallback;
  }

  private mapRules(row: any): ReminderRules {
    return {
      autoEnabled: Boolean(row?.auto_enabled),
      inactiveDays: this.numberInRange(row?.inactive_days, 3, 1, 60),
      lowStudyMinutes: this.numberInRange(row?.low_study_minutes, 5, 1, 240),
      lowStudyWindowDays: this.numberInRange(row?.low_study_window_days, 7, 1, 30),
      cooldownDays: this.numberInRange(row?.cooldown_days, 3, 1, 30),
      maxEmailsPerMonth: this.numberInRange(row?.max_emails_per_month, 3, 1, 31),
      vipExpiryDays: this.numberInRange(row?.vip_expiry_days, 7, 1, 30),
      maxEmailsPerRun: this.numberInRange(row?.max_emails_per_run, 50, 1, 500),
      updatedAt: row?.updated_at ? new Date(row.updated_at).toISOString() : null,
    };
  }

  private mapReport(row: any) {
    return {
      dispatchId: String(row.id),
      status: String(row.status || 'processing'),
      counts: {
        enqueued: Number(row.enqueued_count || 0),
        claimed: Number(row.claimed_count || 0),
        sent: Number(row.sent_count || 0),
        failed: Number(row.failed_count || 0),
        skipped: Number(row.skipped_count || 0),
      },
      aborted: Boolean(row.aborted),
      error: row.error || null,
      startedAt: row.started_at || row.requested_at || row.created_at || null,
      completedAt: row.completed_at || null,
    };
  }

  private mapDelivery(row: any) {
    return {
      id: String(row.id),
      userId: row.user_id ? String(row.user_id) : null,
      email: String(row.email || ''),
      fullName: String(row.full_name || ''),
      status: String(row.status || 'pending'),
      attempts: Number(row.attempts || 0),
      providerMessageId: row.provider_message_id || null,
      error: row.last_error || null,
      sentAt: row.sent_at || null,
      createdAt: row.created_at || null,
    };
  }

  async getRules(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    await this.ensureSchema();
    const result = await this.db.query('SELECT * FROM study_reminder_rules WHERE id = 1');
    return { rules: this.mapRules(result.rows[0]) };
  }

  async updateRules(headers: Record<string, string | string[] | undefined>, body: Record<string, unknown>) {
    const requesterId = await this.assertAdmin(headers);
    await this.ensureSchema();
    const currentResult = await this.db.query('SELECT * FROM study_reminder_rules WHERE id = 1');
    const current = this.mapRules(currentResult.rows[0]);
    const next = {
      autoEnabled: true,
      inactiveDays: this.numberInRange(body.inactiveDays, current.inactiveDays, 1, 60),
      lowStudyMinutes: this.numberInRange(body.lowStudyMinutes, current.lowStudyMinutes, 1, 240),
      lowStudyWindowDays: this.numberInRange(body.lowStudyWindowDays, current.lowStudyWindowDays, 1, 30),
      cooldownDays: this.numberInRange(body.cooldownDays, current.cooldownDays, 1, 30),
      maxEmailsPerMonth: this.numberInRange(body.maxEmailsPerMonth, current.maxEmailsPerMonth, 1, 31),
      vipExpiryDays: this.numberInRange(body.vipExpiryDays, current.vipExpiryDays, 1, 30),
      maxEmailsPerRun: this.numberInRange(body.maxEmailsPerRun, current.maxEmailsPerRun, 1, 500),
    };
    const result = await this.db.query(
      `UPDATE study_reminder_rules
       SET auto_enabled=$1, inactive_days=$2, low_study_minutes=$3, low_study_window_days=$4,
           cooldown_days=$5, max_emails_per_month=$6, vip_expiry_days=$7, max_emails_per_run=$8,
           updated_at=NOW(), updated_by=$9::uuid
       WHERE id=1 RETURNING *`,
      [next.autoEnabled, next.inactiveDays, next.lowStudyMinutes, next.lowStudyWindowDays,
        next.cooldownDays, next.maxEmailsPerMonth, next.vipExpiryDays, next.maxEmailsPerRun, requesterId],
    );
    return { rules: this.mapRules(result.rows[0]) };
  }

  async getReports(headers: Record<string, string | string[] | undefined>, limitValue?: string) {
    await this.assertAdmin(headers);
    await this.ensureSchema();
    const limit = this.numberInRange(limitValue, 20, 1, 100);
    const result = await this.db.query(
      'SELECT * FROM study_reminder_runs ORDER BY COALESCE(started_at, requested_at, created_at) DESC LIMIT $1',
      [limit],
    );
    return { reports: result.rows.map((row: any) => this.mapReport(row)) };
  }

  async getReport(headers: Record<string, string | string[] | undefined>, dispatchId: string) {
    await this.assertAdmin(headers);
    await this.ensureSchema();
    const result = await this.db.query('SELECT * FROM study_reminder_runs WHERE id::text = $1', [dispatchId]);
    if (!result.rows[0]) throw new HttpException('Không tìm thấy lượt gửi nhắc học.', HttpStatus.NOT_FOUND);
    const deliveries = await this.db.query(
      `SELECT id, user_id, email, full_name, status, attempts, provider_message_id, last_error, sent_at, created_at
       FROM study_reminder_deliveries
       WHERE dispatch_id::text = $1
       ORDER BY COALESCE(sent_at, created_at) DESC
       LIMIT 500`,
      [dispatchId],
    );
    return {
      report: {
        ...this.mapReport(result.rows[0]),
        deliveries: deliveries.rows.map((row: any) => this.mapDelivery(row)),
      },
    };
  }

  async dispatchNow(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    await this.ensureSchema();
    const secret = String(process.env.REMINDER_SERVICE_SECRET || '').trim();
    if (!secret) {
      throw new HttpException('REMINDER_SERVICE_SECRET chưa được cấu hình trên Server 1.', HttpStatus.SERVICE_UNAVAILABLE);
    }

    const dispatchId = randomUUID();
    const requestedAt = new Date().toISOString();
    const settings = await this.db.query(`
      UPDATE study_reminder_rules
      SET auto_enabled=TRUE, updated_at=NOW()
      WHERE id=1
      RETURNING *
    `);
    const rules = this.mapRules(settings.rows[0]);
    try {
      this.logger.log(`Dispatching manual study reminders: dispatchId=${dispatchId}`);
      const response = await fetch(REMINDER_WORKER_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${secret}`,
          'Content-Type': 'application/json',
          'X-HuaMei-Trigger': 'scheduled-rule-check',
        },
        body: JSON.stringify({
          dispatchId,
          reason: 'scheduled-rule-check',
          requestedAt,
          rules: {
            autoEnabled: true,
            inactiveDays: rules.inactiveDays,
            lowStudyMinutes: rules.lowStudyMinutes,
            lowStudyWindowDays: rules.lowStudyWindowDays,
            cooldownDays: rules.cooldownDays,
            maxEmailsPerMonth: rules.maxEmailsPerMonth,
            vipExpiryDays: rules.vipExpiryDays,
            maxEmailsPerRun: rules.maxEmailsPerRun,
            updatedAt: rules.updatedAt || requestedAt,
          },
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (response.status !== HttpStatus.ACCEPTED) {
        throw new Error(payload?.error || payload?.message || `Reminder worker trả về HTTP ${response.status}.`);
      }
      this.logger.log(`Reminder worker accepted dispatch: dispatchId=${dispatchId}, status=${response.status}`);
      return { accepted: true, dispatchId, requestedAt, workerStatus: response.status };
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      this.logger.error(`Reminder worker rejected dispatch: dispatchId=${dispatchId}, error=${detail}`);
      await this.db.query(
        `INSERT INTO study_reminder_runs
           (id,reminder_date,reason,status,rules_snapshot,failed_count,aborted,error,requested_at,started_at,completed_at,updated_at)
         VALUES ($1::uuid,(NOW() AT TIME ZONE 'Asia/Ho_Chi_Minh')::date,'scheduled-rule-check','failed',$2::jsonb,1,TRUE,$3,$4,NOW(),NOW(),NOW())
         ON CONFLICT (id) DO UPDATE SET
           status='failed', failed_count=GREATEST(study_reminder_runs.failed_count,1), aborted=TRUE,
           error=EXCLUDED.error, completed_at=NOW(), updated_at=NOW()`,
        [dispatchId, JSON.stringify(rules), detail.slice(0, 2000), requestedAt],
      ).catch(() => undefined);
      throw new HttpException(detail, HttpStatus.BAD_GATEWAY);
    }
  }
}
