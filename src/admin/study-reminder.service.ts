import { randomUUID } from 'node:crypto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { AuthService } from '../auth/auth.service';

type ReminderSettings = {
  automaticEnabled: boolean;
  inactivityDays: number;
  lowActivityMinutes: number;
  listeningLapseDays: number;
  expiryWindowDays: number;
  cooldownDays: number;
  monthlyLimit: number;
  batchSize: number;
};

type ReminderCandidate = Record<string, any> & {
  id: string;
  fullName: string;
  email: string;
  segment: string;
  eligible: boolean;
  blockedReason: string;
  destinationPath: string;
};

@Injectable()
export class StudyReminderService {
  private schemaPromise: Promise<void> | null = null;

  constructor(
    private readonly db: DatabaseService,
    private readonly authService: AuthService,
  ) {}

  private async assertAdmin(headers: Record<string, string | string[] | undefined>) {
    const value = headers['x-admin-user-id'];
    const id = Array.isArray(value) ? value[0] : value;
    if (!id) throw new HttpException('Vui lòng đăng nhập bằng tài khoản admin.', HttpStatus.UNAUTHORIZED);
    const result = await this.db.query('SELECT id, role, is_active FROM users WHERE id = $1', [id]);
    const requester = result.rows[0];
    if (!requester?.is_active || String(requester.role || '').toLowerCase() !== 'admin') {
      throw new HttpException('Bạn không có quyền quản lý nhắc học.', HttpStatus.FORBIDDEN);
    }
    return { id: String(requester.id) };
  }

  private ensureSchema() {
    if (!this.schemaPromise) {
      this.schemaPromise = (async () => {
        await this.db.query(`
          CREATE TABLE IF NOT EXISTS study_reminder_settings (
            id TEXT PRIMARY KEY,
            automatic_enabled BOOLEAN NOT NULL DEFAULT FALSE,
            inactivity_days INTEGER NOT NULL DEFAULT 3,
            low_activity_minutes INTEGER NOT NULL DEFAULT 5,
            listening_lapse_days INTEGER NOT NULL DEFAULT 5,
            expiry_window_days INTEGER NOT NULL DEFAULT 7,
            cooldown_days INTEGER NOT NULL DEFAULT 3,
            monthly_limit INTEGER NOT NULL DEFAULT 3,
            batch_size INTEGER NOT NULL DEFAULT 50,
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_by TEXT
          )
        `);
        await this.db.query(`
          CREATE TABLE IF NOT EXISTS study_reminder_logs (
            id TEXT PRIMARY KEY,
            user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            segment TEXT NOT NULL,
            subject TEXT NOT NULL,
            destination_path TEXT NOT NULL DEFAULT '/',
            status TEXT NOT NULL,
            provider TEXT,
            error TEXT,
            triggered_by TEXT NOT NULL,
            sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            returned_at TIMESTAMPTZ,
            metadata JSONB NOT NULL DEFAULT '{}'::jsonb
          )
        `);
        await this.db.query('CREATE INDEX IF NOT EXISTS idx_study_reminder_logs_user_sent ON study_reminder_logs(user_id, sent_at DESC)');
        await this.db.query('CREATE INDEX IF NOT EXISTS idx_study_reminder_logs_status_sent ON study_reminder_logs(status, sent_at DESC)');
        await this.db.query(`
          INSERT INTO study_reminder_settings (id)
          VALUES ('default')
          ON CONFLICT (id) DO NOTHING
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

  private mapSettings(row: any): ReminderSettings {
    return {
      automaticEnabled: Boolean(row?.automatic_enabled),
      inactivityDays: this.numberInRange(row?.inactivity_days, 3, 1, 60),
      lowActivityMinutes: this.numberInRange(row?.low_activity_minutes, 5, 1, 240),
      listeningLapseDays: this.numberInRange(row?.listening_lapse_days, 5, 1, 60),
      expiryWindowDays: this.numberInRange(row?.expiry_window_days, 7, 1, 30),
      cooldownDays: this.numberInRange(row?.cooldown_days, 3, 1, 30),
      monthlyLimit: this.numberInRange(row?.monthly_limit, 3, 1, 12),
      batchSize: this.numberInRange(row?.batch_size, 50, 1, 200),
    };
  }

  private async getSettings() {
    const result = await this.db.query("SELECT * FROM study_reminder_settings WHERE id = 'default'");
    return this.mapSettings(result.rows[0]);
  }

  private async markReturns() {
    await this.db.query(`
      UPDATE study_reminder_logs log
      SET returned_at = (
        SELECT MIN(event.created_at)
        FROM learning_events event
        WHERE event.user_id = log.user_id
          AND event.created_at > log.sent_at
          AND event.event_type IN ('lesson_opened', 'question_answered', 'practice_completed', 'study_session_started')
      )
      WHERE log.status = 'sent'
        AND log.returned_at IS NULL
        AND EXISTS (
          SELECT 1 FROM learning_events event
          WHERE event.user_id = log.user_id
            AND event.created_at > log.sent_at
            AND event.event_type IN ('lesson_opened', 'question_answered', 'practice_completed', 'study_session_started')
        )
    `);
  }

  private daysSince(value: unknown, fallback: unknown) {
    const date = new Date(String(value || fallback || ''));
    if (!Number.isFinite(date.getTime())) return 9999;
    return Math.max(0, Math.floor((Date.now() - date.getTime()) / 86_400_000));
  }

  private segmentFor(row: any, settings: ReminderSettings) {
    const premiumUntil = row.premium_until ? new Date(row.premium_until) : null;
    const expiresInDays = premiumUntil && Number.isFinite(premiumUntil.getTime())
      ? Math.ceil((premiumUntil.getTime() - Date.now()) / 86_400_000)
      : null;
    const idleDays = this.daysSince(row.last_learning_at, row.created_at);
    const opened = Number(row.opened_count || 0);
    const completed = Number(row.completed_count || 0);
    const minutes7d = Math.round((Number(row.study_seconds_7d || 0) / 60) * 10) / 10;
    const module = String(row.last_module || '').toLowerCase();

    if (opened === 0) return 'new_unused';
    if (expiresInDays !== null && expiresInDays >= 0 && expiresInDays <= settings.expiryWindowDays) return 'expiring';
    if (opened > completed && idleDays >= 2) return 'unfinished';
    if (module.includes('listen') && idleDays >= settings.listeningLapseDays) return 'listening_lapse';
    if (idleDays >= settings.inactivityDays) return 'inactive';
    if (minutes7d < settings.lowActivityMinutes) return 'low_activity';
    return 'healthy';
  }

  private destinationFor(row: any) {
    const module = String(row.last_module || '').toLowerCase();
    const lessonId = String(row.last_lesson_id || '').trim();
    if (module.includes('listen')) return lessonId ? `/listening-app/listening/${encodeURIComponent(lessonId)}` : '/listening-app/';
    return '/';
  }

  private async getCandidates(settings: ReminderSettings): Promise<ReminderCandidate[]> {
    const result = await this.db.query(`
      WITH ordered_sessions AS (
        SELECT user_id, event_type, created_at,
               LEAD(created_at) OVER (PARTITION BY user_id ORDER BY created_at) AS next_at
        FROM learning_events
        WHERE created_at >= NOW() - INTERVAL '7 days'
          AND event_type IN ('study_session_started', 'study_session_heartbeat', 'study_session_ended')
      ), study_time AS (
        SELECT user_id,
               COALESCE(SUM(CASE
                 WHEN event_type <> 'study_session_ended' AND next_at <= created_at + INTERVAL '5 minutes'
                 THEN EXTRACT(EPOCH FROM (next_at - created_at)) ELSE 0 END), 0)::bigint AS study_seconds_7d
        FROM ordered_sessions GROUP BY user_id
      ), activity AS (
        SELECT user_id,
               MAX(created_at) FILTER (WHERE event_type IN ('lesson_opened', 'question_answered', 'practice_completed', 'study_session_started')) AS last_learning_at,
               COUNT(*) FILTER (WHERE event_type = 'lesson_opened')::int AS opened_count,
               COUNT(*) FILTER (WHERE event_type = 'practice_completed')::int AS completed_count
        FROM learning_events GROUP BY user_id
      ), reminder_stats AS (
        SELECT user_id,
               MAX(sent_at) FILTER (WHERE status = 'sent') AS last_sent_at,
               COUNT(*) FILTER (WHERE status = 'sent' AND sent_at >= date_trunc('month', NOW()))::int AS sent_this_month
        FROM study_reminder_logs GROUP BY user_id
      )
      SELECT user.id, user.full_name, user.email, user.created_at, user.premium_until, user.vip_plan_id,
             user.daily_reminder_enabled, activity.last_learning_at, activity.opened_count, activity.completed_count,
             COALESCE(study_time.study_seconds_7d, 0) AS study_seconds_7d,
             latest.module AS last_module, latest.lesson_id AS last_lesson_id,
             reminder_stats.last_sent_at, COALESCE(reminder_stats.sent_this_month, 0) AS sent_this_month
      FROM users user
      LEFT JOIN activity ON activity.user_id = user.id
      LEFT JOIN study_time ON study_time.user_id = user.id
      LEFT JOIN reminder_stats ON reminder_stats.user_id = user.id
      LEFT JOIN LATERAL (
        SELECT module, lesson_id FROM learning_events event
        WHERE event.user_id = user.id
          AND event.event_type IN ('lesson_opened', 'question_answered', 'practice_completed', 'study_session_started')
        ORDER BY event.created_at DESC LIMIT 1
      ) latest ON TRUE
      WHERE user.is_active = TRUE
        AND user.is_premium = TRUE
        AND (user.premium_until IS NULL OR user.premium_until > NOW())
        AND user.email IS NOT NULL AND btrim(user.email) <> ''
      ORDER BY activity.last_learning_at ASC NULLS FIRST, user.created_at ASC
      LIMIT 500
    `);

    return result.rows.map((row: any) => {
      const segment = this.segmentFor(row, settings);
      const lastSent = row.last_sent_at ? new Date(row.last_sent_at) : null;
      const cooldownActive = Boolean(lastSent && Date.now() - lastSent.getTime() < settings.cooldownDays * 86_400_000);
      let blockedReason = '';
      if (row.daily_reminder_enabled === false) blockedReason = 'opted_out';
      else if (segment === 'healthy') blockedReason = 'active';
      else if (cooldownActive) blockedReason = 'cooldown';
      else if (Number(row.sent_this_month || 0) >= settings.monthlyLimit) blockedReason = 'monthly_limit';
      return {
        id: String(row.id),
        fullName: String(row.full_name || 'Học viên HuaMei'),
        email: String(row.email || ''),
        vipPlanId: row.vip_plan_id || '',
        premiumUntil: row.premium_until,
        lastLearningAt: row.last_learning_at,
        lastModule: row.last_module || '',
        lastLessonId: row.last_lesson_id || '',
        openedCount: Number(row.opened_count || 0),
        completedCount: Number(row.completed_count || 0),
        studyMinutes7d: Math.round((Number(row.study_seconds_7d || 0) / 60) * 10) / 10,
        lastSentAt: row.last_sent_at,
        sentThisMonth: Number(row.sent_this_month || 0),
        reminderEnabled: row.daily_reminder_enabled !== false,
        segment,
        eligible: !blockedReason,
        blockedReason,
        destinationPath: this.destinationFor(row),
      };
    });
  }

  private messageFor(candidate: ReminderCandidate) {
    const messages: Record<string, { subject: string; intro: string; suggestion: string }> = {
      new_unused: { subject: 'VIP HuaMei của bạn đã sẵn sàng', intro: 'Bạn đã mở VIP nhưng chưa bắt đầu bài học đầu tiên.', suggestion: 'Hãy bắt đầu bằng một bài ngắn hôm nay nhé.' },
      expiring: { subject: 'Gói VIP HuaMei của bạn sắp hết hạn', intro: 'Gói VIP của bạn chỉ còn ít ngày hiệu lực.', suggestion: 'Hãy tranh thủ hoàn thành thêm một bài học phù hợp.' },
      unfinished: { subject: 'Học tiếp bài đang dở trên HuaMei', intro: 'Bạn đang có một bài học chưa hoàn thành.', suggestion: 'Quay lại đúng phần đang học để giữ nhịp nhé.' },
      listening_lapse: { subject: 'Một bài nghe ngắn đang chờ bạn', intro: 'Lâu rồi bạn chưa quay lại phần Luyện nghe.', suggestion: 'Chỉ cần 5 phút nghe hôm nay cũng tạo khác biệt.' },
      inactive: { subject: 'Lâu rồi bạn chưa quay lại HuaMei', intro: 'Gói VIP của bạn vẫn đang còn hiệu lực.', suggestion: 'Gợi ý hôm nay: học 5 phút hoặc ôn lại bài gần nhất.' },
      low_activity: { subject: 'Giữ nhịp học cùng HuaMei', intro: 'Tuần này thời gian học của bạn đang hơi ít.', suggestion: 'Một phiên học ngắn hôm nay sẽ giúp bạn nối lại thói quen.' },
    };
    return messages[candidate.segment] || messages.inactive;
  }

  private emailHtml(candidate: ReminderCandidate, message: { intro: string; suggestion: string }) {
    const baseUrl = String(process.env.APP_URL || 'https://hoctrung.com').replace(/\/$/, '');
    const link = `${baseUrl}${candidate.destinationPath}`;
    const name = this.authService.escapeEmailHtml(candidate.fullName);
    return `<div style="font-family:Arial,sans-serif;max-width:580px;margin:auto;padding:30px;color:#17302a">
      <div style="font-size:13px;font-weight:800;color:#0b8f55;letter-spacing:.08em">HUAMEI · NHẮC HỌC THÔNG MINH</div>
      <h1 style="font-size:25px;margin:14px 0">Chào ${name} 😊</h1>
      <p style="line-height:1.7;color:#52645f">${message.intro} ${message.suggestion}</p>
      <a href="${link}" style="display:inline-block;margin-top:10px;background:#0b9f5a;color:#fff;text-decoration:none;font-weight:800;padding:13px 20px;border-radius:12px">Vào học ngay</a>
      <p style="margin-top:26px;font-size:12px;line-height:1.6;color:#8a9994">Bạn có thể tắt email nhắc học bất cứ lúc nào trong trang Cá nhân của HuaMei.</p>
    </div>`;
  }

  private async insertLog(candidate: ReminderCandidate, triggeredBy: string, status: string, subject: string, provider = '', error = '') {
    await this.db.query(
      `INSERT INTO study_reminder_logs
       (id, user_id, segment, subject, destination_path, status, provider, error, triggered_by, metadata)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb)`,
      [randomUUID(), candidate.id, candidate.segment, subject, candidate.destinationPath, status, provider, error.slice(0, 1000), triggeredBy, JSON.stringify({ studyMinutes7d: candidate.studyMinutes7d, lastLessonId: candidate.lastLessonId })],
    );
  }

  async getOverview(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    await this.ensureSchema();
    await this.markReturns();
    const settings = await this.getSettings();
    const candidates = await this.getCandidates(settings);
    const history = await this.db.query(`
      SELECT log.*, user.full_name, user.email
      FROM study_reminder_logs log JOIN users user ON user.id = log.user_id
      ORDER BY log.sent_at DESC LIMIT 50
    `);
    const metrics = await this.db.query(`
      SELECT COUNT(*) FILTER (WHERE status = 'sent')::int AS sent,
             COUNT(*) FILTER (WHERE status = 'sent' AND returned_at IS NOT NULL)::int AS returned
      FROM study_reminder_logs
      WHERE sent_at >= NOW() - INTERVAL '30 days'
    `);
    const sent30 = Number(metrics.rows[0]?.sent || 0);
    const returned30 = Number(metrics.rows[0]?.returned || 0);
    return {
      settings,
      summary: {
        activeVip: candidates.length,
        atRisk: candidates.filter((item) => item.segment !== 'healthy').length,
        eligible: candidates.filter((item) => item.eligible).length,
        sent30Days: sent30,
        returned30Days: returned30,
        returnRate: sent30 ? Math.round((returned30 / sent30) * 1000) / 10 : 0,
      },
      candidates,
      history: history.rows.map((row: any) => ({
        id: row.id, userId: row.user_id, fullName: row.full_name, email: row.email,
        segment: row.segment, status: row.status, triggeredBy: row.triggered_by,
        sentAt: row.sent_at, returnedAt: row.returned_at, error: row.error || '',
      })),
    };
  }

  async updateSettings(headers: Record<string, string | string[] | undefined>, body: Record<string, unknown>) {
    const requester = await this.assertAdmin(headers);
    await this.ensureSchema();
    const current = await this.getSettings();
    const next = {
      automaticEnabled: body.automaticEnabled === true,
      inactivityDays: this.numberInRange(body.inactivityDays, current.inactivityDays, 1, 60),
      lowActivityMinutes: this.numberInRange(body.lowActivityMinutes, current.lowActivityMinutes, 1, 240),
      listeningLapseDays: this.numberInRange(body.listeningLapseDays, current.listeningLapseDays, 1, 60),
      expiryWindowDays: this.numberInRange(body.expiryWindowDays, current.expiryWindowDays, 1, 30),
      cooldownDays: this.numberInRange(body.cooldownDays, current.cooldownDays, 1, 30),
      monthlyLimit: this.numberInRange(body.monthlyLimit, current.monthlyLimit, 1, 12),
      batchSize: this.numberInRange(body.batchSize, current.batchSize, 1, 200),
    };
    const result = await this.db.query(
      `UPDATE study_reminder_settings SET automatic_enabled=$1, inactivity_days=$2, low_activity_minutes=$3,
       listening_lapse_days=$4, expiry_window_days=$5, cooldown_days=$6, monthly_limit=$7, batch_size=$8,
       updated_at=NOW(), updated_by=$9 WHERE id='default' RETURNING *`,
      [next.automaticEnabled, next.inactivityDays, next.lowActivityMinutes, next.listeningLapseDays, next.expiryWindowDays, next.cooldownDays, next.monthlyLimit, next.batchSize, requester.id],
    );
    return { settings: this.mapSettings(result.rows[0]) };
  }

  async sendOne(headers: Record<string, string | string[] | undefined>, userId: string, triggeredBy: 'manual' | 'automatic') {
    await this.assertAdmin(headers);
    await this.ensureSchema();
    const settings = await this.getSettings();
    const candidate = (await this.getCandidates(settings)).find((item) => item.id === userId);
    if (!candidate) throw new HttpException('Không tìm thấy VIP còn hiệu lực.', HttpStatus.NOT_FOUND);
    if (!candidate.eligible) throw new HttpException(`Chưa thể gửi: ${candidate.blockedReason}.`, HttpStatus.CONFLICT);
    const message = this.messageFor(candidate);
    try {
      const provider = await this.authService.sendStudyReminderEmail(candidate.email, message.subject, this.emailHtml(candidate, message));
      await this.insertLog(candidate, triggeredBy, 'sent', message.subject, provider);
      return { ok: true, provider, userId: candidate.id };
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      await this.insertLog(candidate, triggeredBy, 'failed', message.subject, '', detail);
      throw error;
    }
  }

  async runBatch(headers: Record<string, string | string[] | undefined>, dryRun = true) {
    await this.assertAdmin(headers);
    await this.ensureSchema();
    const settings = await this.getSettings();
    const eligible = (await this.getCandidates(settings)).filter((item) => item.eligible).slice(0, settings.batchSize);
    if (dryRun) return { dryRun: true, total: eligible.length, candidates: eligible };
    if (!settings.automaticEnabled) {
      throw new HttpException('Gửi tự động đang tắt. Hãy bật và lưu cấu hình trước.', HttpStatus.CONFLICT);
    }
    const result = { dryRun: false, total: eligible.length, sent: 0, failed: 0 };
    for (const candidate of eligible) {
      try {
        await this.sendOne(headers, candidate.id, 'automatic');
        result.sent += 1;
      } catch {
        result.failed += 1;
      }
    }
    return result;
  }
}
