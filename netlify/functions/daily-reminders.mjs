import pg from "pg";

const { Pool } = pg;

let pool;

function env(name) {
  return globalThis.Netlify?.env?.get(name) || process.env[name] || "";
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function getPool() {
  if (pool) return pool;
  const databaseUrl = env("DATABASE_URL");
  if (!databaseUrl) {
    throw new Error("DATABASE_URL chưa được cấu hình.");
  }
  pool = new Pool({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
  });
  return pool;
}

async function ensureReminderColumns() {
  const db = getPool();
  await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE;");
  await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_reminder_last_sent_on DATE;");
}

function reminderEmailHtml(user) {
  const name = user.full_name || "bạn";
  const appUrl = env("APP_URL") || env("URL") || "https://huamei.app";
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
        Bạn có thể tắt nhắc học trong trang Cá nhân của HuaMei.
      </p>
    </div>
  `;
}

async function sendReminderEmail(user) {
  const apiKey = env("RESEND_API_KEY");
  const from = env("REMINDER_EMAIL_FROM") || "HuaMei <onboarding@resend.dev>";
  const replyTo = env("REMINDER_EMAIL_REPLY_TO");
  if (!apiKey) {
    throw new Error("RESEND_API_KEY chưa được cấu hình.");
  }

  const payload = {
    from,
    to: [user.email],
    subject: "HuaMei nhắc bạn học hôm nay",
    html: reminderEmailHtml(user),
  };
  if (replyTo) payload.reply_to = replyTo;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || data.error || `Không gửi được email đến ${user.email}.`);
  }
  return data;
}

export default async function handler() {
  await ensureReminderColumns();

  const users = await getPool().query(
    `SELECT id, full_name, email
     FROM users
     WHERE is_active = TRUE
       AND daily_reminder_enabled = TRUE
       AND email IS NOT NULL
       AND email <> ''
       AND (daily_reminder_last_sent_on IS NULL OR daily_reminder_last_sent_on < CURRENT_DATE)
     ORDER BY created_at ASC
     LIMIT 500`,
  );

  const result = {
    sent: 0,
    failed: 0,
    errors: [],
  };

  for (const user of users.rows) {
    try {
      await sendReminderEmail(user);
      await getPool().query(
        "UPDATE users SET daily_reminder_last_sent_on = CURRENT_DATE WHERE id = $1",
        [user.id],
      );
      result.sent += 1;
    } catch (error) {
      result.failed += 1;
      result.errors.push({ userId: user.id, email: user.email, error: error.message });
    }
  }

  return json(result, result.failed > 0 ? 207 : 200);
}
