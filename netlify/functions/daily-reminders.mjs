import { randomUUID } from "node:crypto";
import pg from "pg";

const { Pool } = pg;
let pool;

function env(name) {
  return globalThis.Netlify?.env?.get(name) || process.env[name] || "";
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

function getPool() {
  if (pool) return pool;
  const databaseUrl = env("DATABASE_URL");
  if (!databaseUrl) throw new Error("DATABASE_URL chưa được cấu hình.");
  pool = new Pool({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false } });
  return pool;
}

async function ensureReminderSchema() {
  const db = getPool();
  await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE");
  await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_reminder_last_sent_on DATE");
  await db.query(`CREATE TABLE IF NOT EXISTS study_reminder_settings (
    id TEXT PRIMARY KEY, automatic_enabled BOOLEAN NOT NULL DEFAULT FALSE,
    inactivity_days INTEGER NOT NULL DEFAULT 3, low_activity_minutes INTEGER NOT NULL DEFAULT 5,
    listening_lapse_days INTEGER NOT NULL DEFAULT 5, expiry_window_days INTEGER NOT NULL DEFAULT 7,
    cooldown_days INTEGER NOT NULL DEFAULT 3, monthly_limit INTEGER NOT NULL DEFAULT 3,
    batch_size INTEGER NOT NULL DEFAULT 50, updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), updated_by TEXT
  )`);
  await db.query(`CREATE TABLE IF NOT EXISTS study_reminder_logs (
    id TEXT PRIMARY KEY, user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    segment TEXT NOT NULL, subject TEXT NOT NULL, destination_path TEXT NOT NULL DEFAULT '/',
    status TEXT NOT NULL, provider TEXT, error TEXT, triggered_by TEXT NOT NULL,
    sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), returned_at TIMESTAMPTZ,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb
  )`);
  await db.query("INSERT INTO study_reminder_settings (id) VALUES ('default') ON CONFLICT (id) DO NOTHING");
}

function reminderMessage(segment) {
  const messages = {
    new_unused: "Bạn đã mở VIP nhưng chưa bắt đầu bài học đầu tiên. Hãy thử một bài ngắn hôm nay nhé.",
    expiring: "Gói VIP của bạn sắp hết hạn. Hãy tranh thủ hoàn thành thêm một bài học phù hợp.",
    unfinished: "Bạn đang có một bài học chưa hoàn thành. Quay lại đúng phần đang học để giữ nhịp nhé.",
    inactive: "Lâu rồi bạn chưa quay lại HuaMei. Gói VIP của bạn vẫn đang còn hiệu lực.",
  };
  return messages[segment] || messages.inactive;
}

function reminderEmailHtml(user) {
  const appUrl = String(env("APP_URL") || env("URL") || "https://hoctrung.com").replace(/\/$/, "");
  const name = String(user.full_name || "bạn").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
  return `<div style="font-family:Arial,sans-serif;max-width:580px;margin:auto;padding:30px;color:#17302a">
    <div style="font-size:13px;font-weight:800;color:#0b8f55;letter-spacing:.08em">HUAMEI · NHẮC HỌC THÔNG MINH</div>
    <h1 style="font-size:25px;margin:14px 0">Chào ${name} 😊</h1>
    <p style="line-height:1.7;color:#52645f">${reminderMessage(user.segment)}</p>
    <a href="${appUrl}${user.destination_path || "/"}" style="display:inline-block;margin-top:10px;background:#0b9f5a;color:#fff;text-decoration:none;font-weight:800;padding:13px 20px;border-radius:12px">Vào học ngay</a>
    <p style="margin-top:26px;font-size:12px;line-height:1.6;color:#8a9994">Bạn có thể tắt email nhắc học bất cứ lúc nào trong trang Cá nhân của HuaMei.</p>
  </div>`;
}

async function sendReminderEmail(user) {
  const apiKey = env("RESEND_API_KEY");
  if (!apiKey) throw new Error("RESEND_API_KEY chưa được cấu hình.");
  const payload = {
    from: env("REMINDER_EMAIL_FROM") || "HuaMei <onboarding@resend.dev>",
    to: [user.email],
    subject: user.subject,
    html: reminderEmailHtml(user),
  };
  const replyTo = env("REMINDER_EMAIL_REPLY_TO");
  if (replyTo) payload.reply_to = replyTo;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || data.error || `Không gửi được email đến ${user.email}.`);
  return data;
}

async function eligibleUsers(settings) {
  return getPool().query(
    `WITH activity AS (
       SELECT user_id,
              MAX(created_at) FILTER (WHERE event_type IN ('lesson_opened','question_answered','practice_completed','study_session_started')) AS last_learning_at,
              COUNT(*) FILTER (WHERE event_type='lesson_opened')::int AS opened_count,
              COUNT(*) FILTER (WHERE event_type='practice_completed')::int AS completed_count
       FROM learning_events GROUP BY user_id
     ), reminder_stats AS (
       SELECT user_id, MAX(sent_at) FILTER (WHERE status='sent') AS last_sent_at,
              COUNT(*) FILTER (WHERE status='sent' AND sent_at>=date_trunc('month',NOW()))::int AS sent_this_month
       FROM study_reminder_logs GROUP BY user_id
     )
     SELECT users.id, users.full_name, users.email,
       CASE WHEN COALESCE(activity.opened_count,0)=0 THEN 'new_unused'
            WHEN users.premium_until IS NOT NULL AND users.premium_until<=NOW()+($2::int*INTERVAL '1 day') THEN 'expiring'
            WHEN COALESCE(activity.opened_count,0)>COALESCE(activity.completed_count,0)
              AND COALESCE(activity.last_learning_at,users.created_at)<NOW()-INTERVAL '2 days' THEN 'unfinished'
            ELSE 'inactive' END AS segment,
       '/' AS destination_path, 'HuaMei nhắc bạn học hôm nay' AS subject
     FROM users
     LEFT JOIN activity ON activity.user_id=users.id
     LEFT JOIN reminder_stats ON reminder_stats.user_id=users.id
     WHERE users.is_active=TRUE AND users.is_premium=TRUE
       AND (users.premium_until IS NULL OR users.premium_until>NOW())
       AND users.daily_reminder_enabled=TRUE AND users.email IS NOT NULL AND btrim(users.email)<>''
       AND (COALESCE(activity.opened_count,0)=0
         OR COALESCE(activity.last_learning_at,users.created_at)<NOW()-($1::int*INTERVAL '1 day')
         OR (users.premium_until IS NOT NULL AND users.premium_until<=NOW()+($2::int*INTERVAL '1 day')))
       AND (reminder_stats.last_sent_at IS NULL OR reminder_stats.last_sent_at<NOW()-($3::int*INTERVAL '1 day'))
       AND COALESCE(reminder_stats.sent_this_month,0)<$4::int
     ORDER BY activity.last_learning_at ASC NULLS FIRST LIMIT $5`,
    [settings.inactivity_days, settings.expiry_window_days, settings.cooldown_days, settings.monthly_limit, settings.batch_size],
  );
}

async function writeLog(user, status, error = "") {
  await getPool().query(
    `INSERT INTO study_reminder_logs
     (id,user_id,segment,subject,destination_path,status,provider,error,triggered_by)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,'automatic')`,
    [randomUUID(), user.id, user.segment, user.subject, user.destination_path, status, status === "sent" ? "resend" : "", error.slice(0, 1000)],
  );
}

export default async function handler() {
  await ensureReminderSchema();
  const settings = (await getPool().query("SELECT * FROM study_reminder_settings WHERE id='default'")).rows[0];
  if (!settings?.automatic_enabled) return json({ skipped: true, reason: "automatic_disabled", sent: 0, failed: 0 });

  const users = await eligibleUsers(settings);
  const result = { sent: 0, failed: 0, errors: [] };
  for (const user of users.rows) {
    try {
      await sendReminderEmail(user);
      await writeLog(user, "sent");
      await getPool().query("UPDATE users SET daily_reminder_last_sent_on=CURRENT_DATE WHERE id=$1", [user.id]);
      result.sent += 1;
    } catch (error) {
      const detail = String(error?.message || error);
      await writeLog(user, "failed", detail).catch(() => {});
      result.failed += 1;
      result.errors.push({ userId: user.id, email: user.email, error: detail });
    }
  }
  return json(result, result.failed > 0 ? 207 : 200);
}
