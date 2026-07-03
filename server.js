const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { Pool } = require("pg");

const root = __dirname;

function loadEnvFile() {
  const envPath = path.join(root, ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) continue;

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadEnvFile();

const port = process.env.PORT || 4173;
const databaseUrl = process.env.DATABASE_URL;
const pool = databaseUrl
  ? new Pool({
      connectionString: databaseUrl,
      ssl: { rejectUnauthorized: false },
    })
  : null;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 10 * 1024 * 1024) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function publicUser(row) {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    role: row.role,
    isActive: row.is_active,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    lastLoginAt: row.last_login_at,
  };
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  const [salt, hash] = String(storedHash || "").split(":");
  if (!salt || !hash) return false;
  const expected = Buffer.from(hashPassword(password, salt));
  const actual = Buffer.from(storedHash);
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

function requireDatabase(res) {
  if (pool) return true;
  sendJson(res, 503, {
    error: "DATABASE_URL chưa được cấu hình. Hãy đặt Neon PostgreSQL connection string rồi chạy lại server.",
  });
  return false;
}

function normalizeHanzi(value) {
  return String(value || "").replace(/[。？！、，,.!?\s]/g, "");
}

function pronunciationMimeType(value) {
  const mimeType = String(value || "").split(";")[0].trim().toLowerCase();
  if (mimeType === "audio/ogg") return "audio/ogg; codecs=opus";
  if (mimeType === "audio/webm") return "audio/webm; codecs=opus";
  if (mimeType === "audio/wav" || mimeType === "audio/x-wav") return "audio/wav; codecs=audio/pcm; samplerate=16000";
  return mimeType || "application/octet-stream";
}

function comparePronunciationFallback(referenceText, recognizedText) {
  const targetChars = Array.from(normalizeHanzi(referenceText));
  const spokenChars = Array.from(normalizeHanzi(recognizedText));
  const rows = targetChars.length + 1;
  const cols = spokenChars.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = targetChars.length - 1; i >= 0; i -= 1) {
    for (let j = spokenChars.length - 1; j >= 0; j -= 1) {
      dp[i][j] = targetChars[i] === spokenChars[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const matched = new Set();
  let i = 0;
  let j = 0;
  while (i < targetChars.length && j < spokenChars.length) {
    if (targetChars[i] === spokenChars[j]) {
      matched.add(i);
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) i += 1;
    else j += 1;
  }
  return {
    score: targetChars.length ? Math.round((matched.size / targetChars.length) * 100) : 0,
    charResults: targetChars.map((char, index) => ({ char, correct: matched.has(index), errorType: matched.has(index) ? "None" : "Mismatch" })),
  };
}

function azureCharResults(referenceText, azureWords = [], fallback) {
  const targetChars = Array.from(normalizeHanzi(referenceText));
  const targetText = targetChars.join("");
  const results = fallback.charResults.map((item) => ({ ...item }));
  let cursor = 0;
  for (const word of azureWords) {
    const normalizedWord = normalizeHanzi(word.Word || "");
    if (!normalizedWord) continue;
    const foundAt = targetText.indexOf(normalizedWord, cursor);
    if (foundAt === -1) continue;
    const assessment = word.PronunciationAssessment || {};
    const errorType = assessment.ErrorType || "None";
    const accuracyScore = Number(assessment.AccuracyScore ?? 100);
    const correct = errorType === "None" && accuracyScore >= 60;
    for (let offset = 0; offset < normalizedWord.length; offset += 1) {
      const index = foundAt + offset;
      if (results[index]) {
        results[index].correct = correct;
        results[index].errorType = correct ? "None" : errorType;
        results[index].accuracyScore = Number.isFinite(accuracyScore) ? accuracyScore : null;
      }
    }
    cursor = foundAt + normalizedWord.length;
  }
  return results;
}

function speechAssessmentProvider() {
  const requested = String(process.env.SPEECH_ASSESSMENT_PROVIDER || process.env.PRONUNCIATION_ASSESSMENT_PROVIDER || "auto").toLowerCase();
  const hasIflytek = Boolean(process.env.IFLYTEK_APP_ID && process.env.IFLYTEK_API_KEY && process.env.IFLYTEK_API_SECRET);
  const hasAzure = Boolean(process.env.AZURE_SPEECH_KEY && process.env.AZURE_SPEECH_REGION);
  if (requested === "iflytek") return hasIflytek ? "iflytek" : "";
  if (requested === "azure") return hasAzure ? "azure" : "";
  if (hasIflytek) return "iflytek";
  if (hasAzure) return "azure";
  return "";
}

function iflytekIseUrl() {
  const protocol = (process.env.IFLYTEK_ISE_PROTOCOL || "wss").replace(/:$/, "");
  const host = process.env.IFLYTEK_ISE_HOST || "ise-api-sg.xf-yun.com";
  const pathname = process.env.IFLYTEK_ISE_PATH || "/v2/ise";
  const date = new Date().toUTCString();
  const signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${pathname} HTTP/1.1`;
  const signature = crypto.createHmac("sha256", process.env.IFLYTEK_API_SECRET || "").update(signatureOrigin).digest("base64");
  const authorizationOrigin = `api_key="${process.env.IFLYTEK_API_KEY || ""}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  const authorization = Buffer.from(authorizationOrigin).toString("base64");
  return `${protocol}://${host}${pathname}?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${encodeURIComponent(host)}`;
}

function normalizeProviderScore(value) {
  const score = Number(value);
  if (!Number.isFinite(score)) return null;
  if (score <= 5) return Math.round(score * 20);
  if (score <= 10) return Math.round(score * 10);
  return Math.max(0, Math.min(100, Math.round(score)));
}

function pcmPayloadFromAudioBuffer(audioBuffer) {
  if (audioBuffer.subarray(0, 4).toString("ascii") !== "RIFF") return audioBuffer;
  let offset = 12;
  while (offset + 8 <= audioBuffer.length) {
    const chunkId = audioBuffer.subarray(offset, offset + 4).toString("ascii");
    const chunkSize = audioBuffer.readUInt32LE(offset + 4);
    const dataStart = offset + 8;
    if (chunkId === "data") return audioBuffer.subarray(dataStart, dataStart + chunkSize);
    offset = dataStart + chunkSize + (chunkSize % 2);
  }
  return audioBuffer;
}

function parseIflytekAssessment(messages, referenceText) {
  const xml = messages.map((message) => {
    const encoded = message?.data?.data || "";
    if (!encoded) return "";
    try {
      return Buffer.from(encoded, "base64").toString("utf8");
    } catch {
      return "";
    }
  }).join("");
  const totalMatch = xml.match(/\b(?:total_score|overall_score|score)="([^"]+)"/i);
  const scoreMatches = [...xml.matchAll(/\b(?:phone_score|tone_score|fluency_score|accuracy_score|dp_message|score)="([^"]+)"/gi)]
    .map((match) => normalizeProviderScore(match[1]))
    .filter((score) => score !== null);
  const score = normalizeProviderScore(totalMatch?.[1])
    ?? (scoreMatches.length ? Math.round(scoreMatches.reduce((sum, item) => sum + item, 0) / scoreMatches.length) : 0);
  const recognizedMatch = xml.match(/\b(?:content|text)="([^"]+)"/i);
  const recognizedText = recognizedMatch ? recognizedMatch[1].replace(/&quot;/g, "\"").replace(/&amp;/g, "&") : referenceText;
  const fallback = comparePronunciationFallback(referenceText, recognizedText || referenceText);
  const charResults = fallback.charResults.map((item) => ({
    ...item,
    correct: item.correct && score >= 60,
    errorType: item.correct && score >= 60 ? "None" : "Pronunciation",
    accuracyScore: score,
  }));
  return { provider: "iflytek", recognizedText, score, accuracyScore: score, fluencyScore: null, completenessScore: null, charResults, rawXml: xml };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function assessWithIflytek(referenceText, audioBuffer) {
  if (typeof WebSocket === "undefined") {
    throw new Error("Node runtime chưa hỗ trợ WebSocket để kết nối iFLYTEK.");
  }
  const url = iflytekIseUrl();
  const chunkSize = 1280;
  const pcmBuffer = pcmPayloadFromAudioBuffer(audioBuffer);
  const messages = [];
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(url);
    let settled = false;
    const fail = (error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      reject(error);
    };
    const timeout = setTimeout(() => {
      try { socket.close(); } catch {}
      fail(new Error("iFLYTEK phan hoi qua lau."));
    }, 30000);
    socket.addEventListener("open", async () => {
      try {
        socket.send(JSON.stringify({
          common: { app_id: process.env.IFLYTEK_APP_ID || "" },
          business: {
            sub: "ise",
            ent: "cn_vip",
            category: "read_sentence",
            cmd: "ssb",
            auf: "audio/L16;rate=16000",
            aue: "raw",
            rstcd: "utf8",
            tte: "utf-8",
            ttp_skip: true,
            group: "adult",
            rst: "entirety",
            ise_unite: "1",
            extra_ability: "multi_dimension",
            text: `\uFEFF${referenceText}`,
          },
          data: { status: 0 },
        }));
        await delay(40);
        for (let offset = 0; offset < pcmBuffer.length; offset += chunkSize) {
          const chunk = pcmBuffer.subarray(offset, offset + chunkSize);
          const isFirstAudioFrame = offset === 0;
          const isLastAudioFrame = offset + chunkSize >= pcmBuffer.length;
          socket.send(JSON.stringify({
            business: {
              cmd: "auw",
              aus: isFirstAudioFrame ? 1 : isLastAudioFrame ? 4 : 2,
            },
            data: {
              status: isLastAudioFrame ? 2 : 1,
              data: chunk.toString("base64"),
            },
          }));
          await delay(40);
        }
      } catch (error) {
        fail(error instanceof Error ? error : new Error("Khong gui duoc audio den iFLYTEK ISE."));
      }
    });
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(String(event.data || "{}"));
      messages.push(message);
      if (message.code && message.code !== 0) {
        fail(new Error(message.message || "iFLYTEK cham phat am that bai."));
        try { socket.close(); } catch {}
        return;
      }
      if (message.data?.status === 2) {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        try { socket.close(); } catch {}
        resolve(parseIflytekAssessment(messages, referenceText));
      }
    });
    socket.addEventListener("error", (event) => {
      const detail = event?.message || event?.error?.message || "";
      fail(new Error(detail ? `Khong ket noi duoc iFLYTEK ISE: ${detail}` : "Khong ket noi duoc iFLYTEK ISE."));
    });
    socket.addEventListener("close", (event) => {
      if (settled) return;
      const reason = event?.reason ? ` ${event.reason}` : "";
      fail(new Error(`iFLYTEK ISE da dong ket noi truoc khi tra ket qua (${event?.code || "unknown"}).${reason}`));
    });
  });
}

async function assessWithAzure(referenceText, audioBuffer, mimeType) {
  const key = process.env.AZURE_SPEECH_KEY || "";
  const region = process.env.AZURE_SPEECH_REGION || "";
  const pronunciationConfig = {
    ReferenceText: referenceText,
    GradingSystem: "HundredMark",
    Granularity: "Word",
    Dimension: "Comprehensive",
    EnableMiscue: true,
  };
  const endpoint = `https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=zh-CN&format=detailed`;
  const azureResponse = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": key,
      "Content-Type": pronunciationMimeType(mimeType),
      "Pronunciation-Assessment": Buffer.from(JSON.stringify(pronunciationConfig)).toString("base64"),
      Accept: "application/json",
    },
    body: audioBuffer,
  });
  const data = await azureResponse.json().catch(() => ({}));
  if (!azureResponse.ok) {
    const error = new Error(data.error?.message || data.message || "Không chấm được phát âm bằng Azure Speech.");
    error.status = azureResponse.status || 502;
    throw error;
  }
  const best = data.NBest?.[0] || {};
  const assessment = best.PronunciationAssessment || {};
  const recognizedText = best.Display || data.DisplayText || "";
  const fallback = comparePronunciationFallback(referenceText, recognizedText);
  const words = best.Words || [];
  return {
    provider: "azure",
    recognizedText,
    score: Math.round(assessment.PronScore ?? fallback.score),
    accuracyScore: assessment.AccuracyScore ?? null,
    fluencyScore: assessment.FluencyScore ?? null,
    completenessScore: assessment.CompletenessScore ?? null,
    words: words.map((word) => ({
      word: word.Word || "",
      accuracyScore: word.PronunciationAssessment?.AccuracyScore ?? null,
      errorType: word.PronunciationAssessment?.ErrorType || "None",
    })).filter((word) => word.word),
    charResults: words.length ? azureCharResults(referenceText, words, fallback) : fallback.charResults,
  };
}

async function handlePronunciationAssessment(req, res) {
  const body = await readBody(req);
  const referenceText = String(body.referenceText || "").trim();
  const audioBase64 = String(body.audioBase64 || "");
  if (!referenceText || !audioBase64) {
    sendJson(res, 400, { error: "Thiếu câu gốc hoặc audio ghi âm." });
    return;
  }
  const audioBuffer = Buffer.from(audioBase64, "base64");
  const provider = speechAssessmentProvider();
  if (!provider) {
    sendJson(res, 503, { error: "Pronunciation assessment chưa được cấu hình.", code: "speech_not_configured" });
    return;
  }
  try {
    const result = provider === "iflytek"
      ? await assessWithIflytek(referenceText, audioBuffer)
      : await assessWithAzure(referenceText, audioBuffer, body.mimeType);
    sendJson(res, 200, { ...result, referenceText });
  } catch (error) {
    sendJson(res, error.status || 502, { error: error.message || "Không chấm được phát âm.", code: "speech_assessment_failed", provider });
  }
}

async function isAdminRequest(req) {
  const adminUserId = req.headers["x-admin-user-id"];
  const userId = Array.isArray(adminUserId) ? adminUserId[0] : adminUserId;
  if (!userId || !pool) return false;

  const result = await pool.query("SELECT role, is_active FROM users WHERE id = $1", [userId]);
  const user = result.rows[0];
  return user?.role === "admin" && user?.is_active === true;
}

async function ensureSchema() {
  if (!pool) {
    console.warn("DATABASE_URL is missing. API database routes will return 503.");
    return;
  }

  await pool.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      full_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'student',
      is_active BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      last_login_at TIMESTAMPTZ
    );
  `);
}

async function handleRegister(req, res) {
  if (!requireDatabase(res)) return;
  const body = await readBody(req);
  const fullName = String(body.fullName || body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");

  if (fullName.length < 2) {
    sendJson(res, 400, { error: "Vui lòng nhập họ và tên." });
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    sendJson(res, 400, { error: "Email không hợp lệ." });
    return;
  }
  if (password.length < 6) {
    sendJson(res, 400, { error: "Mật khẩu cần tối thiểu 6 ký tự." });
    return;
  }

  try {
    const result = await pool.query(
      `INSERT INTO users (full_name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, full_name, email, role, is_active, created_at, updated_at, last_login_at`,
      [fullName, email, hashPassword(password)],
    );
    sendJson(res, 201, { user: publicUser(result.rows[0]) });
  } catch (error) {
    if (error.code === "23505") {
      sendJson(res, 409, { error: "Email này đã được đăng ký." });
      return;
    }
    throw error;
  }
}

async function handleLogin(req, res) {
  if (!requireDatabase(res)) return;
  const body = await readBody(req);
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  const user = result.rows[0];

  if (!user || !verifyPassword(password, user.password_hash)) {
    sendJson(res, 401, { error: "Email hoặc mật khẩu không đúng." });
    return;
  }
  if (!user.is_active) {
    sendJson(res, 403, { error: "Tài khoản đã bị khóa." });
    return;
  }

  const updated = await pool.query(
    `UPDATE users SET last_login_at = NOW(), updated_at = NOW()
     WHERE id = $1
     RETURNING id, full_name, email, role, is_active, created_at, updated_at, last_login_at`,
    [user.id],
  );
  sendJson(res, 200, { user: publicUser(updated.rows[0]) });
}

async function handleAdminUsers(req, res, url) {
  if (!requireDatabase(res)) return;
  if (!(await isAdminRequest(req))) {
    sendJson(res, 401, { error: "Vui lòng đăng nhập bằng tài khoản admin." });
    return;
  }

  if (req.method === "GET") {
    const result = await pool.query(
      `SELECT id, full_name, email, role, is_active, created_at, updated_at, last_login_at
       FROM users
       ORDER BY created_at DESC`,
    );
    sendJson(res, 200, { users: result.rows.map(publicUser) });
    return;
  }

  const idMatch = url.pathname.match(/^\/api\/admin\/users\/([0-9a-f-]+)$/i);
  if (!idMatch) {
    sendJson(res, 404, { error: "Không tìm thấy user." });
    return;
  }

  if (req.method === "PATCH") {
    const body = await readBody(req);
    const fullName = String(body.fullName || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const role = String(body.role || "student").trim();
    const isActive = body.isActive === true;

    if (!fullName || !email) {
      sendJson(res, 400, { error: "Tên và email không được để trống." });
      return;
    }

    const result = await pool.query(
      `UPDATE users
       SET full_name = $1, email = $2, role = $3, is_active = $4, updated_at = NOW()
       WHERE id = $5
       RETURNING id, full_name, email, role, is_active, created_at, updated_at, last_login_at`,
      [fullName, email, role || "student", isActive, idMatch[1]],
    );
    if (!result.rows[0]) {
      sendJson(res, 404, { error: "Không tìm thấy user." });
      return;
    }
    sendJson(res, 200, { user: publicUser(result.rows[0]) });
    return;
  }

  if (req.method === "DELETE") {
    await pool.query("DELETE FROM users WHERE id = $1", [idMatch[1]]);
    sendJson(res, 200, { ok: true });
    return;
  }

  sendJson(res, 405, { error: "Method không được hỗ trợ." });
}

function serveStatic(req, res, url) {
  const requested = url.pathname === "/" ? "/index.html" : url.pathname;
  const publicRoot = path.join(root, "public");
  const normalized = requested.endsWith("/") ? requested.slice(0, -1) : requested;
  const candidates = path.extname(requested)
    ? [path.resolve(publicRoot, `.${requested}`)]
    : [
        path.resolve(publicRoot, `.${normalized}.html`),
        path.resolve(publicRoot, `.${normalized}`, "index.html"),
        path.resolve(publicRoot, "index.html"),
      ];
  const filePath = candidates.find((candidate) => fs.existsSync(candidate)) || candidates[0];
  if (!filePath.startsWith(publicRoot)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  try {
    if (url.pathname === "/api/listening/pronunciation-assessment" && req.method === "POST") {
      await handlePronunciationAssessment(req, res);
      return;
    }
    if (url.pathname.startsWith("/api/")) {
      sendJson(res, 503, { error: "Backend đã bị vô hiệu hóa." });
      return;
    }
    serveStatic(req, res, url);
  } catch (error) {
    console.error(error);
    sendJson(res, 500, { error: "Server đang gặp lỗi. Vui lòng thử lại." });
  }
});

ensureSchema()
  .then(() => {
    server.listen(port, () => {
      console.log(`Listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Cannot initialize database schema:", error);
    process.exit(1);
  });
