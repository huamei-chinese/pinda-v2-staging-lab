import crypto from "node:crypto";
import tls from "node:tls";
import pg from "pg";

const { Pool } = pg;
const BATCH_SIZE = 50;
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
        Bạn nhận thư vì đã bật Nhắc học. Bạn có thể tắt tính năng này trong trang Cá nhân của HuaMei.
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
  const messageId = `<daily-reminder-${delivery.id}@${messageIdDomain}>`;
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
    "X-HuaMei-Category: daily-reminder",
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

async function enqueueEligibleUsers(reminderDate) {
  const result = await getPool().query(
    `INSERT INTO daily_reminder_deliveries (user_id, reminder_date, email, full_name)
     SELECT id, $1::date, email, full_name
     FROM users
     WHERE is_active = TRUE
       AND daily_reminder_enabled = TRUE
       AND email IS NOT NULL
       AND btrim(email) <> ''
       AND email ~* '^[^[:space:]@]+@[^[:space:]@]+\\.[^[:space:]@]+$'
     ON CONFLICT (user_id, reminder_date) DO NOTHING
     RETURNING id`,
    [reminderDate],
  );
  return result.rowCount || 0;
}

async function skipUsersWhoOptedOut(reminderDate) {
  await getPool().query(
    `UPDATE daily_reminder_deliveries d
     SET status = 'skipped',
         last_error = 'User inactive, opted out, or changed email.',
         locked_at = NULL,
         updated_at = NOW()
     FROM users u
     WHERE d.user_id = u.id
       AND d.reminder_date = $1::date
       AND d.status IN ('pending', 'failed')
       AND (u.is_active <> TRUE OR u.daily_reminder_enabled <> TRUE OR lower(u.email) <> lower(d.email))`,
    [reminderDate],
  );
}

async function claimBatch(reminderDate) {
  const result = await getPool().query(
    `WITH candidates AS (
       SELECT d.id
       FROM daily_reminder_deliveries d
       JOIN users u ON u.id = d.user_id
       WHERE d.reminder_date = $1::date
         AND d.attempts < $2
         AND (
           d.status IN ('pending', 'failed')
           OR (d.status = 'processing' AND d.locked_at < NOW() - ($3 * INTERVAL '1 minute'))
         )
         AND u.is_active = TRUE
         AND u.daily_reminder_enabled = TRUE
         AND lower(u.email) = lower(d.email)
       ORDER BY d.created_at ASC, d.id ASC
       FOR UPDATE OF d SKIP LOCKED
       LIMIT $4
     )
     UPDATE daily_reminder_deliveries d
     SET status = 'processing',
         attempts = d.attempts + 1,
         locked_at = NOW(),
         last_error = NULL,
         updated_at = NOW()
     FROM candidates
     WHERE d.id = candidates.id
     RETURNING d.id, d.user_id, d.reminder_date::text, d.email, d.full_name, d.attempts`,
    [reminderDate, MAX_ATTEMPTS, PROCESSING_STALE_MINUTES, BATCH_SIZE],
  );
  return result.rows;
}

async function markDeliverySent(delivery, messageId, reminderDate) {
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    await client.query(
      `UPDATE daily_reminder_deliveries
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
       SET daily_reminder_last_sent_on = $2::date,
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
    `UPDATE daily_reminder_deliveries
     SET status = 'failed',
         last_error = $2,
         locked_at = NULL,
         updated_at = NOW()
     WHERE id = $1`,
    [delivery.id, message],
  );
}

async function processDailyReminders() {
  const reminderDate = vietnamDate();
  const enqueued = await enqueueEligibleUsers(reminderDate);
  await skipUsersWhoOptedOut(reminderDate);
  let sent = 0;
  let failed = 0;
  let abort = false;

  while (!abort) {
    const deliveries = await claimBatch(reminderDate);
    if (deliveries.length === 0) break;
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
        console.error("Daily reminder SMTP delivery failed:", {
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
  }

  console.log("Daily reminder dispatch completed:", { reminderDate, enqueued, sent, failed });
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
  await processDailyReminders();
}

export const __test = { authorized, encodeHeaderWord, escapeHtml, isFatalSmtpError, vietnamDate };
