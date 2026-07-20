import crypto from "node:crypto";
import tls from "node:tls";

const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function cleanEmailHeader(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

function extractEmailAddress(value) {
  const text = String(value || "").trim();
  const match = text.match(/<([^>]+)>/);
  return (match ? match[1] : text).trim();
}

function isAuthorized(request) {
  const expected = String(process.env.MAIL_SERVICE_SECRET || "");
  const header = String(request.headers.get("authorization") || "");
  const provided = header.match(/^Bearer\s+(.+)$/i)?.[1] || "";
  if (!expected || !provided) return false;
  const expectedBuffer = Buffer.from(expected);
  const providedBuffer = Buffer.from(provided);
  return expectedBuffer.length === providedBuffer.length
    && crypto.timingSafeEqual(expectedBuffer, providedBuffer);
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
    throw new Error(`SMTP failed (${code || "no code"}).`);
  }
}

async function sendSmtpEmail(to, subject, html) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = String(process.env.SMTP_USER || "").trim();
  const pass = /gmail/i.test(host)
    ? String(process.env.SMTP_PASS || "").replace(/\s+/g, "")
    : String(process.env.SMTP_PASS || "");
  const from = process.env.SMTP_FROM || (user ? `HuaMei <${user}>` : "");
  if (!user || !pass || !from) {
    throw new Error("Netlify mail service is missing SMTP configuration.");
  }

  const socket = tls.connect({
    host,
    port,
    servername: host,
    rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== "false",
  });
  socket.setEncoding("utf8");
  try {
    await smtpCommand(socket, null, ["220"]);
    await smtpCommand(socket, `EHLO ${cleanEmailHeader(process.env.SMTP_HELO || "localhost")}`, ["250"]);
    await smtpCommand(socket, "AUTH LOGIN", ["334"]);
    await smtpCommand(socket, Buffer.from(user).toString("base64"), ["334"]);
    await smtpCommand(socket, Buffer.from(pass).toString("base64"), ["235"]);
    await smtpCommand(socket, `MAIL FROM:<${extractEmailAddress(from)}>`, ["250"]);
    await smtpCommand(socket, `RCPT TO:<${extractEmailAddress(to)}>`, ["250", "251"]);
    await smtpCommand(socket, "DATA", ["354"]);
    const message = [
      `From: ${cleanEmailHeader(from)}`,
      `To: ${cleanEmailHeader(to)}`,
      `Subject: ${cleanEmailHeader(subject)}`,
      "MIME-Version: 1.0",
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      html,
    ].join("\r\n");
    socket.write(`${message.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..")}\r\n.\r\n`);
    await smtpCommand(socket, null, ["250"]);
    await smtpCommand(socket, "QUIT", ["221"]);
  } finally {
    socket.end();
  }
}

function mailContent(type, code) {
  if (type === "password-reset") {
    return {
      subject: "Ma dat lai mat khau HuaMei",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2>Đặt lại mật khẩu HuaMei</h2>
          <p>Nhập mã bên dưới để tạo mật khẩu mới cho tài khoản của bạn:</p>
          <p style="font-size:28px;font-weight:800;letter-spacing:6px">${code}</p>
          <p>Mã có hiệu lực trong 10 phút. Nếu bạn không yêu cầu, hãy bỏ qua email này.</p>
        </div>
      `,
    };
  }
  if (type === "email-verification") {
    return {
      subject: "Ma xac minh email HuaMei",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2>Mã xác minh email HuaMei</h2>
          <p>Nhập mã bên dưới để xác minh email của bạn:</p>
          <p style="font-size:28px;font-weight:800;letter-spacing:6px">${code}</p>
          <p>Mã có hiệu lực trong 10 phút.</p>
        </div>
      `,
    };
  }
  return null;
}

export default async function handler(request) {
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
  if (!process.env.MAIL_SERVICE_SECRET) {
    return json({ error: "Mail service is not configured." }, 503);
  }
  if (!isAuthorized(request)) return json({ error: "Unauthorized." }, 401);

  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const code = String(body.code || "").replace(/\D/g, "");
    const type = String(body.type || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Invalid email." }, 400);
    }
    if (!/^\d{6}$/.test(code)) return json({ error: "Invalid verification code." }, 400);
    const content = mailContent(type, code);
    if (!content) return json({ error: "Unsupported mail type." }, 400);

    await sendSmtpEmail(email, content.subject, content.html);
    return json({ ok: true, delivery: "sent" });
  } catch (error) {
    console.error("[mail-service] Delivery failed:", error instanceof Error ? error.message : error);
    return json({ error: "Unable to deliver email." }, 502);
  }
}
