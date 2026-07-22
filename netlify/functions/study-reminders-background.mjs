import crypto from "node:crypto";
import tls from "node:tls";
import pg from "pg";

const { Pool } = pg;
const MAX_ATTEMPTS = 3;
const PROCESSING_STALE_MINUTES = 20;
const VIETNAM_TIME_ZONE = "Asia/Ho_Chi_Minh";

let pool;

function env(name) {
  return globalThis.Netlify?.env?.get(name) || process.env[name] || "";
}

function getPool() {
  if (pool) return pool;
  const databaseUrl = env("DATABASE_URL");
  if (!databaseUrl) throw new Error("DATABASE_URL chưa được cấu hình.");
  pool = new Pool({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
    max: 3,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 10000,
  });
  return pool;
}

async function ensureReminderSchema(initialRules) {
  const client = await getPool().connect();
  const lockKey = "huamei-study-reminder-schema-v1";
  try {
    await client.query("SELECT pg_advisory_lock(hashtext($1))", [lockKey]);
    const baseTables = await client.query(
      `SELECT to_regclass('public.users') AS users_table,
              to_regclass('public.learning_events') AS learning_events_table`,
    );
    if (!baseTables.rows[0]?.users_table || !baseTables.rows[0]?.learning_events_table) {
      throw new Error("Base tables users and learning_events must exist before reminder bootstrap.");
    }
    await client.query("CREATE EXTENSION IF NOT EXISTS pgcrypto");
    await client.query(`
      ALTER TABLE users
      ADD COLUMN IF NOT EXISTS study_reminder_last_sent_on DATE;

      CREATE TABLE IF NOT EXISTS study_reminder_rules (
        id SMALLINT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
        auto_enabled BOOLEAN NOT NULL DEFAULT FALSE,
        inactive_days INTEGER NOT NULL DEFAULT 3 CHECK (inactive_days BETWEEN 1 AND 90),
        low_study_minutes INTEGER NOT NULL DEFAULT 5 CHECK (low_study_minutes BETWEEN 1 AND 1440),
        low_study_window_days INTEGER NOT NULL DEFAULT 7 CHECK (low_study_window_days BETWEEN 1 AND 30),
        cooldown_days INTEGER NOT NULL DEFAULT 3 CHECK (cooldown_days BETWEEN 1 AND 30),
        max_emails_per_month INTEGER NOT NULL DEFAULT 3 CHECK (max_emails_per_month BETWEEN 1 AND 31),
        vip_expiry_days INTEGER NOT NULL DEFAULT 7 CHECK (vip_expiry_days BETWEEN 1 AND 90),
        max_emails_per_run INTEGER NOT NULL DEFAULT 50 CHECK (max_emails_per_run BETWEEN 1 AND 100),
        updated_by UUID REFERENCES users(id) ON DELETE SET NULL,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS study_reminder_runs (
        id UUID PRIMARY KEY,
        reminder_date DATE,
        reason TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'queued'
          CHECK (status IN ('queued', 'processing', 'completed', 'failed', 'skipped')),
        rules_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb,
        enqueued_count INTEGER NOT NULL DEFAULT 0 CHECK (enqueued_count >= 0),
        claimed_count INTEGER NOT NULL DEFAULT 0 CHECK (claimed_count >= 0),
        sent_count INTEGER NOT NULL DEFAULT 0 CHECK (sent_count >= 0),
        failed_count INTEGER NOT NULL DEFAULT 0 CHECK (failed_count >= 0),
        skipped_count INTEGER NOT NULL DEFAULT 0 CHECK (skipped_count >= 0),
        aborted BOOLEAN NOT NULL DEFAULT FALSE,
        error TEXT,
        requested_at TIMESTAMPTZ NOT NULL,
        started_at TIMESTAMPTZ,
        completed_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS study_reminder_deliveries (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        dispatch_id UUID REFERENCES study_reminder_runs(id) ON DELETE SET NULL,
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        reminder_date DATE NOT NULL,
        email TEXT NOT NULL,
        full_name TEXT,
        trigger_reason TEXT,
        rules_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb,
        status TEXT NOT NULL DEFAULT 'pending'
          CHECK (status IN ('pending', 'processing', 'sent', 'failed', 'skipped')),
        attempts INTEGER NOT NULL DEFAULT 0 CHECK (attempts >= 0),
        provider_message_id TEXT,
        last_error TEXT,
        locked_at TIMESTAMPTZ,
        sent_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, reminder_date)
      );

      ALTER TABLE study_reminder_deliveries
      ADD COLUMN IF NOT EXISTS dispatch_id UUID REFERENCES study_reminder_runs(id) ON DELETE SET NULL;
      ALTER TABLE study_reminder_deliveries
      ADD COLUMN IF NOT EXISTS trigger_reason TEXT;
      ALTER TABLE study_reminder_deliveries
      ADD COLUMN IF NOT EXISTS rules_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb;

      CREATE INDEX IF NOT EXISTS idx_study_reminder_runs_created
      ON study_reminder_runs (created_at DESC);
      CREATE INDEX IF NOT EXISTS idx_study_reminder_deliveries_dispatch
      ON study_reminder_deliveries (reminder_date, status, created_at);
      CREATE INDEX IF NOT EXISTS idx_learning_events_user_created
      ON learning_events(user_id, created_at DESC);
    `);
    await client.query(
      `INSERT INTO study_reminder_rules
         (id, auto_enabled, inactive_days, low_study_minutes, low_study_window_days,
          cooldown_days, max_emails_per_month, vip_expiry_days, max_emails_per_run)
       VALUES (1, $1, $2, $3, $4, $5, $6, $7, $8)
       ON CONFLICT (id) DO NOTHING`,
      [
        initialRules.autoEnabled,
        initialRules.inactiveDays,
        initialRules.lowStudyMinutes,
        initialRules.lowStudyWindowDays,
        initialRules.cooldownDays,
        initialRules.maxEmailsPerMonth,
        initialRules.vipExpiryDays,
        initialRules.maxEmailsPerRun,
      ],
    );
  } finally {
    await client.query("SELECT pg_advisory_unlock(hashtext($1))", [lockKey]).catch(() => undefined);
    client.release();
  }
}

function vietnamDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: VIETNAM_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function authorized(req) {
  const expected = env("REMINDER_SERVICE_SECRET");
  const match = String(req.headers.get("authorization") || "").match(/^Bearer\s+(.+)$/i);
  const provided = match?.[1]?.trim() || "";
  if (!expected || !provided) return false;
  const expectedBuffer = Buffer.from(expected);
  const providedBuffer = Buffer.from(provided);
  return expectedBuffer.length === providedBuffer.length
    && crypto.timingSafeEqual(expectedBuffer, providedBuffer);
}

function ruleInteger(value, name, min, max) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < min || parsed > max) {
    throw new Error(`Invalid reminder rule ${name}.`);
  }
  return parsed;
}

function normalizeRules(raw) {
  if (!raw || typeof raw.autoEnabled !== "boolean") {
    throw new Error("Missing reminder rules snapshot.");
  }
  return {
    autoEnabled: raw.autoEnabled,
    inactiveDays: ruleInteger(raw.inactiveDays, "inactiveDays", 1, 90),
    lowStudyMinutes: ruleInteger(raw.lowStudyMinutes, "lowStudyMinutes", 1, 1440),
    lowStudyWindowDays: ruleInteger(raw.lowStudyWindowDays, "lowStudyWindowDays", 1, 30),
    cooldownDays: ruleInteger(raw.cooldownDays, "cooldownDays", 1, 30),
    maxEmailsPerMonth: ruleInteger(raw.maxEmailsPerMonth, "maxEmailsPerMonth", 1, 31),
    vipExpiryDays: ruleInteger(raw.vipExpiryDays, "vipExpiryDays", 1, 90),
    maxEmailsPerRun: ruleInteger(raw.maxEmailsPerRun, "maxEmailsPerRun", 1, 100),
    updatedAt: raw.updatedAt ? new Date(raw.updatedAt).toISOString() : null,
  };
}

function normalizeDispatchId(value) {
  const dispatchId = String(value || "").trim();
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(dispatchId)) {
    throw new Error("Invalid or missing reminder dispatchId.");
  }
  return dispatchId;
}

async function startDispatchRun(dispatchId, reason, requestedAt, rules, reminderDate) {
  const updated = await getPool().query(
    `UPDATE study_reminder_runs
     SET reminder_date = $2::date,
         reason = $3,
         status = 'processing',
         rules_snapshot = $4::jsonb,
         requested_at = $5::timestamptz,
         started_at = NOW(),
         completed_at = NULL,
         error = NULL,
         updated_at = NOW()
     WHERE id = $1 AND status IN ('queued', 'failed')
     RETURNING id`,
    [dispatchId, reminderDate, reason, JSON.stringify(rules), requestedAt],
  );
  if (updated.rowCount) return true;
  const inserted = await getPool().query(
    `INSERT INTO study_reminder_runs
       (id, reminder_date, reason, status, rules_snapshot, requested_at, started_at)
     VALUES ($1, $2::date, $3, 'processing', $4::jsonb, $5::timestamptz, NOW())
     ON CONFLICT (id) DO NOTHING
     RETURNING id`,
    [dispatchId, reminderDate, reason, JSON.stringify(rules), requestedAt],
  );
  return Boolean(inserted.rowCount);
}

async function completeDispatchRun(dispatchId, report) {
  await getPool().query(
    `UPDATE study_reminder_runs
     SET status = 'completed',
         enqueued_count = $2,
         claimed_count = $3,
         sent_count = $4,
         failed_count = $5,
         skipped_count = $6,
         aborted = $7,
         completed_at = NOW(),
         updated_at = NOW()
     WHERE id = $1`,
    [dispatchId, report.enqueued, report.claimed, report.sent, report.failed, report.skipped, report.aborted],
  );
}

async function skipDispatchRun(dispatchId, message) {
  await getPool().query(
    `UPDATE study_reminder_runs
     SET status = 'skipped', error = $2, completed_at = NOW(), updated_at = NOW()
     WHERE id = $1`,
    [dispatchId, String(message).slice(0, 2000)],
  );
}

async function failDispatchRun(dispatchId, error) {
  await getPool().query(
    `UPDATE study_reminder_runs
     SET status = 'failed', error = $2, completed_at = NOW(), updated_at = NOW()
     WHERE id = $1`,
    [dispatchId, String(error?.message || error || "Unknown reminder worker error").slice(0, 2000)],
  );
}

async function loadCurrentRules() {
  const result = await getPool().query(
    `SELECT auto_enabled,
            inactive_days,
            low_study_minutes,
            low_study_window_days,
            cooldown_days,
            max_emails_per_month,
            vip_expiry_days,
            max_emails_per_run,
            updated_at
     FROM study_reminder_rules
     WHERE id = 1`,
  );
  const row = result.rows[0];
  if (!row) throw new Error("Reminder rules are not initialized.");
  return normalizeRules({
    autoEnabled: row.auto_enabled,
    inactiveDays: row.inactive_days,
    lowStudyMinutes: row.low_study_minutes,
    lowStudyWindowDays: row.low_study_window_days,
    cooldownDays: row.cooldown_days,
    maxEmailsPerMonth: row.max_emails_per_month,
    vipExpiryDays: row.vip_expiry_days,
    maxEmailsPerRun: row.max_emails_per_run,
    updatedAt: row.updated_at,
  });
}

function reminderEmailHtml(user) {
  const name = escapeHtml(user.full_name || "bạn");
  const appUrl = escapeHtml(env("APP_URL") || "https://huamei.app");
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:28px;color:#0f172a">
      <h1 style="margin:0 0 12px;font-size:24px;color:#059669">Chào ${name}, đến giờ học tiếng Trung rồi!</h1>
      <p style="margin:0 0 18px;line-height:1.6;color:#475569">
        HuaMei nhắc bạn dành vài phút ôn lại từ vựng và tiếp tục bài học hôm nay. Học đều mỗi ngày sẽ giúp bạn nhớ lâu hơn.
      </p>
      <a href="${appUrl}" style="display:inline-block;background:#0ea855;color:#fff;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:10px">
        Vào học ngay
      </a>
      <p style="margin-top:24px;font-size:12px;line-height:1.5;color:#94a3b8">
        Email này được gửi tự động từ hệ thống Nhắc học của HuaMei dựa trên hoạt động học tập của bạn.
      </p>
    </div>
  `;
}

function cleanEmailHeader(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

function extractEmailAddress(value) {
  const text = String(value || "").trim();
  const match = text.match(/<([^>]+)>/);
  return (match ? match[1] : text).trim();
}

function smtpPassword(host, password) {
  return /gmail/i.test(host) ? String(password || "").replace(/\s+/g, "") : String(password || "");
}

function encodeHeaderWord(value) {
  return `=?UTF-8?B?${Buffer.from(cleanEmailHeader(value), "utf8").toString("base64")}?=`;
}

function readSmtpResponse(socket) {
  return new Promise((resolve, reject) => {
    let buffer = "";
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("SMTP timeout."));
    }, 15000);
    const cleanup = () => {
      clearTimeout(timeout);
      socket.off("data", onData);
      socket.off("error", onError);
    };
    const onError = (error) => {
      cleanup();
      reject(error);
    };
    const onData = (chunk) => {
      buffer += chunk.toString();
      const lines = buffer.split(/\r?\n/).filter(Boolean);
      if (lines.some((line) => /^\d{3} /.test(line))) {
        cleanup();
        resolve(buffer);
      }
    };
    socket.on("data", onData);
    socket.once("error", onError);
  });
}

async function smtpCommand(socket, command, expectedCodes) {
  if (command !== null) socket.write(`${command}\r\n`);
  const response = await readSmtpResponse(socket);
  const code = response.slice(0, 3);
  if (!expectedCodes.includes(code)) {
    throw new Error(`SMTP failed (${code || "no code"}): ${response.trim()}`);
  }
  return response;
}

async function openSmtpSession() {
  const host = env("SMTP_HOST") || "smtp.gmail.com";
  const port = Number(env("SMTP_PORT") || 465);
  const user = String(env("SMTP_USER") || "").trim();
  const pass = smtpPassword(host, env("SMTP_PASS"));
  const from = env("SMTP_FROM") || (user ? `HuaMei <${user}>` : env("EMAIL_FROM"));
  if (!user || !pass || !from) {
    throw new Error("SMTP_USER, SMTP_PASS và SMTP_FROM/EMAIL_FROM chưa được cấu hình.");
  }

  const socket = tls.connect({
    host,
    port,
    servername: host,
    rejectUnauthorized: env("SMTP_REJECT_UNAUTHORIZED") !== "false",
  });
  socket.setEncoding("utf8");
  try {
    await smtpCommand(socket, null, ["220"]);
    await smtpCommand(socket, `EHLO ${cleanEmailHeader(env("SMTP_HELO") || "localhost")}`, ["250"]);
    await smtpCommand(socket, "AUTH LOGIN", ["334"]);
    await smtpCommand(socket, Buffer.from(user).toString("base64"), ["334"]);
    await smtpCommand(socket, Buffer.from(pass).toString("base64"), ["235"]);
    return { socket, from };
  } catch (error) {
    socket.destroy();
    throw error;
  }
}

async function sendSmtpReminder(session, delivery) {
  const { socket, from } = session;
  const to = cleanEmailHeader(delivery.email);
  const messageIdDomain = extractEmailAddress(from).split("@")[1] || "huamei.local";
  const messageId = `<study-reminder-${delivery.id}@${messageIdDomain}>`;
  await smtpCommand(socket, `MAIL FROM:<${extractEmailAddress(from)}>`, ["250"]);
  await smtpCommand(socket, `RCPT TO:<${extractEmailAddress(to)}>`, ["250", "251"]);
  await smtpCommand(socket, "DATA", ["354"]);
  const message = [
    `From: ${cleanEmailHeader(from)}`,
    `To: ${to}`,
    `Subject: ${encodeHeaderWord("HuaMei nhắc bạn học hôm nay")}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: ${messageId}`,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "X-HuaMei-Category: rule-based-study-reminder",
    "",
    reminderEmailHtml(delivery),
  ].join("\r\n");
  socket.write(`${message.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..")}\r\n.\r\n`);
  await smtpCommand(socket, null, ["250"]);
  return messageId;
}

async function closeSmtpSession(session) {
  if (!session?.socket || session.socket.destroyed) return;
  try {
    await smtpCommand(session.socket, "QUIT", ["221"]);
  } catch {
    // The message has already been accepted; closing failures do not change delivery status.
  } finally {
    session.socket.end();
  }
}

function isFatalSmtpError(error) {
  const message = String(error?.message || error || "");
  return /SMTP timeout|ECONNREFUSED|ENOTFOUND|ETIMEDOUT|authentication|app password|quota|sending limit|SMTP failed \((?:421|454|530|534|535)/i.test(message);
}

async function enqueueEligibleUsers(dispatchId, reminderDate, rules) {
  const result = await getPool().query(
    `WITH last_learning_activity AS (
       SELECT DISTINCT ON (user_id) user_id, created_at AS last_activity_at
       FROM learning_events
       WHERE user_id IS NOT NULL
         AND event_type IN (
           'lesson_opened', 'question_answered', 'practice_completed',
           'study_session_started', 'study_session_heartbeat', 'study_session_ended'
         )
       ORDER BY user_id, created_at DESC
     ),
     session_starts AS (
       SELECT e.*,
              LEAD(e.created_at) OVER (PARTITION BY e.user_id ORDER BY e.created_at) AS next_started_at
       FROM learning_events e
       WHERE e.user_id IS NOT NULL
         AND e.event_type = 'study_session_started'
         AND e.created_at >= NOW() - ($3 * INTERVAL '1 day')
     ),
     session_rollup AS (
       SELECT s.user_id,
              s.created_at AS started_at,
              COALESCE(MAX(e.created_at), s.created_at) AS last_seen_at
       FROM session_starts s
       LEFT JOIN learning_events e ON e.user_id = s.user_id
        AND e.created_at >= s.created_at
        AND e.created_at < COALESCE(s.next_started_at, NOW())
        AND e.event_type IN ('study_session_started', 'study_session_heartbeat', 'study_session_ended')
        AND COALESCE(e.module, '') = COALESCE(s.module, '')
        AND COALESCE(e.lesson_id, '') = COALESCE(s.lesson_id, '')
        AND COALESCE(e.topic_id, '') = COALESCE(s.topic_id, '')
        AND COALESCE(e.question_id, '') = COALESCE(s.question_id, '')
       GROUP BY s.user_id, s.created_at, s.next_started_at
     ),
     recent_study AS (
       SELECT user_id,
              COUNT(*)::int AS session_count,
              COALESCE(SUM(GREATEST(0, EXTRACT(EPOCH FROM (last_seen_at - started_at)))), 0)::bigint AS study_seconds
       FROM session_rollup
       GROUP BY user_id
     ),
     eligible AS (
       SELECT u.id,
              u.email,
              u.full_name,
              a.last_activity_at,
              COALESCE(s.session_count, 0) AS session_count,
              COALESCE(s.study_seconds, 0) AS study_seconds,
              (u.is_premium = TRUE AND u.premium_until > NOW()
                AND u.premium_until <= NOW() + ($5 * INTERVAL '1 day')) AS vip_expiring,
              CONCAT_WS(',',
                CASE WHEN COALESCE(a.last_activity_at, u.created_at) <= NOW() - ($2 * INTERVAL '1 day')
                  THEN 'inactive' END,
                CASE WHEN COALESCE(s.session_count, 0) > 0 AND COALESCE(s.study_seconds, 0) < ($4 * 60)
                  THEN 'low_study' END,
                CASE WHEN u.is_premium = TRUE AND u.premium_until > NOW()
                  AND u.premium_until <= NOW() + ($5 * INTERVAL '1 day')
                  THEN 'vip_expiring' END
              ) AS trigger_reason
       FROM users u
       LEFT JOIN last_learning_activity a ON a.user_id = u.id
       LEFT JOIN recent_study s ON s.user_id = u.id
       WHERE u.is_active = TRUE
         AND u.email IS NOT NULL
         AND btrim(u.email) <> ''
         AND u.email ~* '^[^[:space:]@]+@[^[:space:]@]+\\.[^[:space:]@]+$'
         AND (
           COALESCE(a.last_activity_at, u.created_at) <= NOW() - ($2 * INTERVAL '1 day')
           OR (COALESCE(s.session_count, 0) > 0 AND COALESCE(s.study_seconds, 0) < ($4 * 60))
           OR (u.is_premium = TRUE AND u.premium_until > NOW()
             AND u.premium_until <= NOW() + ($5 * INTERVAL '1 day'))
         )
         AND NOT EXISTS (
           SELECT 1
           FROM study_reminder_deliveries cooldown
           WHERE cooldown.user_id = u.id
             AND cooldown.status = 'sent'
             AND cooldown.sent_at >= NOW() - ($6 * INTERVAL '1 day')
         )
         AND (
           SELECT COUNT(*)
           FROM study_reminder_deliveries monthly
           WHERE monthly.user_id = u.id
             AND monthly.status = 'sent'
             AND monthly.sent_at >= (date_trunc('month', NOW() AT TIME ZONE '${VIETNAM_TIME_ZONE}') AT TIME ZONE '${VIETNAM_TIME_ZONE}')
             AND monthly.sent_at < ((date_trunc('month', NOW() AT TIME ZONE '${VIETNAM_TIME_ZONE}') + INTERVAL '1 month') AT TIME ZONE '${VIETNAM_TIME_ZONE}')
         ) < $7
       ORDER BY vip_expiring DESC,
                a.last_activity_at ASC NULLS FIRST,
                u.created_at ASC
       LIMIT $8
     )
     INSERT INTO study_reminder_deliveries
       (dispatch_id, user_id, reminder_date, email, full_name, trigger_reason, rules_snapshot)
     SELECT $10::uuid, id, $1::date, email, full_name, trigger_reason, $9::jsonb
     FROM eligible
     ON CONFLICT (user_id, reminder_date) DO NOTHING
     RETURNING id`,
    [
      reminderDate,
      rules.inactiveDays,
      rules.lowStudyWindowDays,
      rules.lowStudyMinutes,
      rules.vipExpiryDays,
      rules.cooldownDays,
      rules.maxEmailsPerMonth,
      rules.maxEmailsPerRun,
      JSON.stringify(rules),
      dispatchId,
    ],
  );
  return result.rowCount || 0;
}

async function skipUsersWhoBecameIneligible(dispatchId, reminderDate) {
  const result = await getPool().query(
    `UPDATE study_reminder_deliveries d
     SET status = 'skipped',
         last_error = 'User inactive or changed email.',
         locked_at = NULL,
         updated_at = NOW()
     FROM users u
     WHERE d.user_id = u.id
       AND d.reminder_date = $1::date
       AND d.dispatch_id = $2::uuid
       AND d.status IN ('pending', 'failed')
       AND (u.is_active <> TRUE OR lower(u.email) <> lower(d.email))`,
    [reminderDate, dispatchId],
  );
  return result.rowCount || 0;
}

async function claimBatch(dispatchId, reminderDate, maxEmailsPerRun) {
  const result = await getPool().query(
    `WITH candidates AS (
       SELECT d.id
       FROM study_reminder_deliveries d
       JOIN users u ON u.id = d.user_id
       WHERE d.reminder_date = $1::date
         AND d.dispatch_id = $5::uuid
         AND d.attempts < $2
         AND (
           d.status IN ('pending', 'failed')
           OR (d.status = 'processing' AND d.locked_at < NOW() - ($3 * INTERVAL '1 minute'))
         )
         AND u.is_active = TRUE
         AND lower(u.email) = lower(d.email)
       ORDER BY d.created_at ASC, d.id ASC
       FOR UPDATE OF d SKIP LOCKED
       LIMIT $4
     )
     UPDATE study_reminder_deliveries d
     SET status = 'processing',
         attempts = d.attempts + 1,
         locked_at = NOW(),
         last_error = NULL,
         updated_at = NOW()
     FROM candidates
     WHERE d.id = candidates.id
     RETURNING d.id, d.user_id, d.reminder_date::text, d.email, d.full_name, d.attempts`,
    [reminderDate, MAX_ATTEMPTS, PROCESSING_STALE_MINUTES, maxEmailsPerRun, dispatchId],
  );
  return result.rows;
}

async function markDeliverySent(delivery, messageId, reminderDate) {
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    await client.query(
      `UPDATE study_reminder_deliveries
       SET status = 'sent',
           provider_message_id = $2,
           sent_at = NOW(),
           locked_at = NULL,
           updated_at = NOW()
       WHERE id = $1`,
      [delivery.id, messageId],
    );
    await client.query(
      `UPDATE users
       SET study_reminder_last_sent_on = $2::date,
           updated_at = NOW()
       WHERE id = $1`,
      [delivery.user_id, reminderDate],
    );
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

async function markDeliveryFailed(delivery, error) {
  const message = String(error?.message || error || "Unknown reminder delivery error").slice(0, 2000);
  await getPool().query(
    `UPDATE study_reminder_deliveries
     SET status = 'failed',
         last_error = $2,
         locked_at = NULL,
         updated_at = NOW()
     WHERE id = $1`,
    [delivery.id, message],
  );
}

async function processRuleBasedStudyReminders(dispatchId, rules) {
  const reminderDate = vietnamDate();
  const enqueued = await enqueueEligibleUsers(dispatchId, reminderDate, rules);
  const skipped = await skipUsersWhoBecameIneligible(dispatchId, reminderDate);
  let sent = 0;
  let failed = 0;
  let abort = false;
  const deliveries = await claimBatch(dispatchId, reminderDate, rules.maxEmailsPerRun);
  let session = null;
  for (let index = 0; index < deliveries.length; index += 1) {
    const delivery = deliveries[index];
    try {
      if (!session) session = await openSmtpSession();
      const messageId = await sendSmtpReminder(session, delivery);
      await markDeliverySent(delivery, messageId, reminderDate);
      sent += 1;
    } catch (error) {
      if (session?.socket) session.socket.destroy();
      session = null;
      await markDeliveryFailed(delivery, error);
      failed += 1;
      console.error("Rule-based study reminder SMTP delivery failed:", {
        reminderDate,
        deliveryId: delivery.id,
        error: error instanceof Error ? error.message : String(error),
      });
      if (isFatalSmtpError(error)) {
        const unprocessed = deliveries.slice(index + 1);
        for (const pendingDelivery of unprocessed) {
          await markDeliveryFailed(pendingDelivery, error);
        }
        failed += unprocessed.length;
        abort = true;
        break;
      }
    }
  }
  await closeSmtpSession(session);

  console.log("Rule-based study reminder dispatch completed:", {
    dispatchId,
    reminderDate,
    enqueued,
    claimed: deliveries.length,
    sent,
    failed,
    aborted: abort,
    rules,
  });
  return { enqueued, claimed: deliveries.length, sent, failed, skipped, aborted: abort };
}

export default async function handler(req) {
  if (req.method !== "POST") {
    console.warn("Rejected reminder dispatch with invalid method.");
    return;
  }
  if (!authorized(req)) {
    console.warn("Rejected unauthorized reminder dispatch.");
    return;
  }
  const body = await req.json().catch(() => ({}));
  const dispatchId = normalizeDispatchId(body.dispatchId);
  const reason = String(body.reason || "server-triggered").slice(0, 200);
  const requestedAt = new Date(body.requestedAt || Date.now()).toISOString();
  const requestedRules = normalizeRules(body.rules);
  await ensureReminderSchema(requestedRules);
  const reminderDate = vietnamDate();
  const started = await startDispatchRun(dispatchId, reason, requestedAt, requestedRules, reminderDate);
  if (!started) {
    console.warn(`Skipped duplicate reminder dispatch ${dispatchId}.`);
    return;
  }
  try {
    const rules = await loadCurrentRules();
    if (!rules.autoEnabled) {
      await skipDispatchRun(dispatchId, "Automatic sending is disabled by admin.");
      console.warn("Skipped reminder dispatch because automatic sending is disabled.");
      return;
    }
    if (String(requestedRules.updatedAt || "") !== String(rules.updatedAt || "")) {
      console.warn("Reminder rules changed after Server 1 created the request; applying current database rules.");
    }
    const report = await processRuleBasedStudyReminders(dispatchId, rules);
    await completeDispatchRun(dispatchId, report);
  } catch (error) {
    await failDispatchRun(dispatchId, error);
    throw error;
  }
}

export const __test = { authorized, encodeHeaderWord, escapeHtml, isFatalSmtpError, normalizeDispatchId, normalizeRules, vietnamDate };
