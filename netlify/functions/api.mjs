import crypto from "node:crypto";
import net from "node:net";
import tls from "node:tls";
import pg from "pg";

const { Pool } = pg;

let pool;
let schemaReady;

function normalizeDurationUnit(value) {
  return value === "days" ? "days" : "months";
}

function applyPlanDuration(base, plan) {
  const result = new Date(base);
  const value = Number(plan.months);
  if (normalizeDurationUnit(plan.durationUnit) === "days") {
    result.setDate(result.getDate() + value);
  } else {
    result.setMonth(result.getMonth() + value);
  }
  return result;
}

const DEFAULT_PAYMENT_PLANS = [
  { id: "1m", months: 1, amount: 149000, nameVi: "1 Tháng", nameZh: "1 个月" },
  { id: "3m", months: 3, amount: 399000, nameVi: "3 Tháng", nameZh: "3 个月" },
  { id: "6m", months: 6, amount: 699000, nameVi: "6 Tháng", nameZh: "6 个月" },
];

function env(name) {
  return globalThis.Netlify?.env?.get(name) || process.env[name] || "";
}

function isProduction() {
  return env("NODE_ENV") === "production";
}

function isEnabled(name) {
  return ["1", "true", "yes", "on"].includes(env(name).toLowerCase());
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

function apiError(message, status = 500) {
  const error = new Error(typeof message === "string" ? message : message?.error || "Lỗi server.");
  error.status = status;
  error.payload = typeof message === "string" ? { error: message } : message;
  return error;
}

function normalizeHanzi(value) {
  return String(value || "").replace(/[。？！、，,.!?\s]/g, "");
}

function repairUtf8Mojibake(value) {
  const text = String(value || "");
  if (!/[\u00C0-\u00FF\u0100-\u017F\u0192\u02C6\u02DC\u2013-\u201E\u2020-\u2026\u2030\u2039-\u203A\u20AC\u2122]/.test(text)) return text;
  const cp1252 = {
    0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86,
    0x2021: 0x87, 0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C,
    0x017D: 0x8E, 0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95,
    0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B,
    0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F,
  };
  try {
    const bytes = Array.from(text, (char) => {
      const code = char.codePointAt(0) || 0;
      return cp1252[code] ?? (code <= 255 ? code : 0x3F);
    });
    const repaired = Buffer.from(bytes).toString("utf8");
    return repaired.includes("\uFFFD") ? text : repaired;
  } catch {
    return text;
  }
}

function comparePronunciationFallback(referenceText, recognizedText) {
  const targetChars = Array.from(normalizeHanzi(referenceText));
  const spokenChars = Array.from(normalizeHanzi(recognizedText));
  const rows = targetChars.length + 1;
  const cols = spokenChars.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = targetChars.length - 1; i >= 0; i -= 1) {
    for (let j = spokenChars.length - 1; j >= 0; j -= 1) {
      dp[i][j] = targetChars[i] === spokenChars[j]
        ? dp[i + 1][j + 1] + 1
        : Math.max(dp[i + 1][j], dp[i][j + 1]);
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
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return {
    score: targetChars.length ? Math.round((matched.size / targetChars.length) * 100) : 0,
    charResults: targetChars.map((char, index) => ({
      char,
      correct: matched.has(index),
      errorType: matched.has(index) ? "None" : "Mismatch",
    })),
  };
}

function speechAssessmentProvider() {
  const hasIflytek = Boolean(env("IFLYTEK_APP_ID") && env("IFLYTEK_API_KEY") && env("IFLYTEK_API_SECRET"));
  return hasIflytek ? "iflytek" : "";
}

function iflytekIseAuth() {
  const protocol = (env("IFLYTEK_ISE_PROTOCOL") || "wss").replace(/:$/, "");
  const host = env("IFLYTEK_ISE_HOST") || "ise-api-sg.xf-yun.com";
  const pathname = env("IFLYTEK_ISE_PATH") || "/v2/ise";
  const date = new Date().toUTCString();
  const signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${pathname} HTTP/1.1`;
  const signature = crypto.createHmac("sha256", env("IFLYTEK_API_SECRET")).update(signatureOrigin).digest("base64");
  const authorizationOrigin = `api_key="${env("IFLYTEK_API_KEY")}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  const authorization = Buffer.from(authorizationOrigin).toString("base64");
  const url = `${protocol}://${host}${pathname}?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${encodeURIComponent(host)}`;
  return { protocol, host, pathname, url };
}

function iflytekIseUrl() {
  return iflytekIseAuth().url;
}

function parseIflytekHandshake(raw) {
  const [header = "", body = ""] = raw.split(/\r?\n\r?\n/);
  const statusMatch = header.match(/^HTTP\/\d(?:\.\d)?\s+(\d{3})\s*([^\r\n]*)/i);
  return {
    statusCode: Number(statusMatch?.[1] || 0),
    statusText: (statusMatch?.[2] || "").trim(),
    body: body.trim(),
  };
}

function iflytekHandshakeMessage(response) {
  let providerMessage = response.body || response.statusText || "Unknown iFLYTEK handshake error";
  try {
    const data = JSON.parse(response.body);
    if (data?.message) providerMessage = String(data.message);
  } catch {}
  return `iFLYTEK ISE xac thuc that bai (${response.statusCode}): ${providerMessage}`;
}

function verifyIflytekHandshake(auth) {
  return new Promise((resolve, reject) => {
    const target = new URL(auth.url);
    if (!["ws:", "wss:"].includes(target.protocol)) {
      reject(apiError(`IFLYTEK_ISE_PROTOCOL khong hop le: ${auth.protocol}`, 500));
      return;
    }
    const isSecure = target.protocol === "wss:";
    const port = Number(target.port || (isSecure ? 443 : 80));
    const key = crypto.randomBytes(16).toString("base64");
    const request = [
      `GET ${target.pathname}${target.search} HTTP/1.1`,
      `Host: ${target.host}`,
      "Upgrade: websocket",
      "Connection: Upgrade",
      `Sec-WebSocket-Key: ${key}`,
      "Sec-WebSocket-Version: 13",
      "\r\n",
    ].join("\r\n");
    const socket = isSecure
      ? tls.connect({ host: target.hostname, port, servername: target.hostname })
      : net.connect({ host: target.hostname, port });
    let raw = "";
    let settled = false;
    const finish = (error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      try { socket.destroy(); } catch {}
      if (error) reject(error);
      else resolve();
    };
    const timeout = setTimeout(() => {
      finish(apiError("iFLYTEK ISE handshake phan hoi qua lau.", 504));
    }, 10000);
    socket.on(isSecure ? "secureConnect" : "connect", () => socket.write(request));
    socket.on("data", (chunk) => {
      raw += chunk.toString("utf8");
      if (!raw.includes("\r\n\r\n")) return;
      const response = parseIflytekHandshake(raw);
      if (response.statusCode === 101) {
        finish();
        return;
      }
      finish(apiError(iflytekHandshakeMessage(response), 502));
    });
    socket.on("error", (error) => {
      finish(apiError(`Khong ket noi duoc iFLYTEK ISE: ${error.message}`, 502));
    });
  });
}

function normalizeProviderScore(value) {
  const score = Number(value);
  if (!Number.isFinite(score)) return null;
  if (score <= 5) return Math.round(score * 20);
  if (score <= 10) return Math.round(score * 10);
  return Math.max(0, Math.min(100, Math.round(score)));
}

function xmlDecode(value = "") {
  return String(value || "")
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&quot;/g, "\"")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function xmlAttribute(node, names) {
  for (const name of names) {
    const match = String(node || "").match(new RegExp(`\\b${name}="([^"]*)"`, "i"));
    if (match) return xmlDecode(match[1]);
  }
  return "";
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
  const resultNode = xml.match(/<(?:read_sentence|sentence|rec_paper)\b[^>]*>/i)?.[0] || "";
  const totalScore = xmlAttribute(resultNode, ["total_score", "overall_score", "score"]);
  const scoreMatches = [...xml.matchAll(/\b(?:phone_score|tone_score|fluency_score|accuracy_score|total_score|overall_score|score)="([^"]+)"/gi)]
    .map((match) => normalizeProviderScore(match[1]))
    .filter((score) => score !== null);
  const score = normalizeProviderScore(totalScore)
    ?? (scoreMatches.length ? Math.round(scoreMatches.reduce((sum, item) => sum + item, 0) / scoreMatches.length) : 0);
  const wordNodes = [...xml.matchAll(/<word\b[^>]*>/gi)].map((match) => match[0]);
  const words = wordNodes.map((node) => {
    const word = xmlAttribute(node, ["content", "text", "word"]);
    const wordScore = normalizeProviderScore(xmlAttribute(node, ["total_score", "phone_score", "tone_score", "score"]));
    return {
      word,
      accuracyScore: wordScore,
      errorType: wordScore === null || wordScore >= 60 ? "None" : "Pronunciation",
    };
  }).filter((word) => word.word);
  const recognizedText = words.length
    ? words.map((word) => word.word).join("")
    : xmlAttribute(resultNode || xml, ["content", "text"]) || referenceText;
  const fallback = comparePronunciationFallback(referenceText, recognizedText || referenceText);
  const charResults = fallback.charResults.map((item) => ({
    ...item,
    correct: item.correct && score >= 60,
    errorType: item.correct && score >= 60 ? "None" : "Pronunciation",
    accuracyScore: score,
  }));
  return { provider: "iflytek", recognizedText, score, accuracyScore: score, fluencyScore: null, completenessScore: null, words, charResults, rawXml: xml };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function assessWithIflytek(referenceText, audioBuffer) {
  if (typeof WebSocket === "undefined") {
    throw apiError("Node runtime chua ho tro WebSocket de ket noi iFLYTEK.", 503);
  }
  const auth = iflytekIseAuth();
  await verifyIflytekHandshake(auth);
  const pcmBuffer = pcmPayloadFromAudioBuffer(audioBuffer);
  const messages = [];
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(auth.url);
    let settled = false;
    const fail = (error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      reject(error);
    };
    const timeout = setTimeout(() => {
      try { socket.close(); } catch {}
      fail(apiError("iFLYTEK phan hoi qua lau.", 504));
    }, 30000);
    socket.addEventListener("open", async () => {
      try {
        const chunkSize = 1280;
        socket.send(JSON.stringify({
          common: { app_id: env("IFLYTEK_APP_ID") },
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
              aus: isLastAudioFrame ? 4 : isFirstAudioFrame ? 1 : 2,
            },
            data: {
              status: isLastAudioFrame ? 2 : 1,
              data: chunk.toString("base64"),
            },
          }));
          await delay(40);
        }
      } catch (error) {
        fail(error instanceof Error ? error : apiError("Khong gui duoc audio den iFLYTEK ISE.", 502));
      }
    });
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(String(event.data || "{}"));
      messages.push(message);
      if (message.code && message.code !== 0) {
        fail(apiError(message.message || "iFLYTEK cham phat am that bai.", 502));
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
      fail(apiError(detail ? `Khong ket noi duoc iFLYTEK ISE: ${detail}` : "Khong ket noi duoc iFLYTEK ISE.", 502));
    });
    socket.addEventListener("close", (event) => {
      if (settled) return;
      const reason = event?.reason ? ` ${event.reason}` : "";
      fail(apiError(`iFLYTEK ISE da dong ket noi truoc khi tra ket qua (${event?.code || "unknown"}).${reason}`, 502));
    });
  });
}

function pinyinTones(pinyin) {
  const toneMarks = {
    ā: 1, á: 2, ǎ: 3, à: 4, ē: 1, é: 2, ě: 3, è: 4, ī: 1, í: 2, ǐ: 3, ì: 4,
    ō: 1, ó: 2, ǒ: 3, ò: 4, ū: 1, ú: 2, ǔ: 3, ù: 4, ǖ: 1, ǘ: 2, ǚ: 3, ǜ: 4,
    Ā: 1, Á: 2, Ǎ: 3, À: 4, Ē: 1, É: 2, Ě: 3, È: 4, Ī: 1, Í: 2, Ǐ: 3, Ì: 4,
    Ō: 1, Ó: 2, Ǒ: 3, Ò: 4, Ū: 1, Ú: 2, Ǔ: 3, Ù: 4, Ǖ: 1, Ǘ: 2, Ǚ: 3, Ǜ: 4,
  };
  return String(pinyin || "").split(/[\s,，。！？、]+/).map((token) => {
    const numeric = token.match(/[1-5]/)?.[0];
    if (numeric) return Number(numeric) === 5 ? 0 : Number(numeric);
    for (const char of token) if (toneMarks[char]) return toneMarks[char];
    return 0;
  }).filter((tone) => tone >= 0);
}

function wavPcmSamples(audioBuffer) {
  if (audioBuffer.subarray(0, 4).toString("ascii") !== "RIFF") return null;
  let offset = 12;
  let sampleRate = 16000;
  let bitsPerSample = 16;
  let channels = 1;
  let data = null;
  while (offset + 8 <= audioBuffer.length) {
    const chunkId = audioBuffer.subarray(offset, offset + 4).toString("ascii");
    const chunkSize = audioBuffer.readUInt32LE(offset + 4);
    const dataStart = offset + 8;
    if (chunkId === "fmt ") {
      channels = audioBuffer.readUInt16LE(dataStart + 2) || 1;
      sampleRate = audioBuffer.readUInt32LE(dataStart + 4) || sampleRate;
      bitsPerSample = audioBuffer.readUInt16LE(dataStart + 14) || bitsPerSample;
    }
    if (chunkId === "data") data = audioBuffer.subarray(dataStart, dataStart + chunkSize);
    offset = dataStart + chunkSize + (chunkSize % 2);
  }
  if (!data || bitsPerSample !== 16) return null;
  const sampleCount = Math.floor(data.length / 2 / channels);
  const samples = new Float32Array(sampleCount);
  for (let index = 0; index < sampleCount; index += 1) {
    samples[index] = data.readInt16LE(index * channels * 2) / 32768;
  }
  return { samples, sampleRate };
}

function estimatePitch(frame, sampleRate) {
  let energy = 0;
  for (const sample of frame) energy += sample * sample;
  if (energy / frame.length < 0.0004) return null;
  const minLag = Math.floor(sampleRate / 450);
  const maxLag = Math.floor(sampleRate / 75);
  let bestLag = 0;
  let best = 0;
  for (let lag = minLag; lag <= maxLag; lag += 1) {
    let corr = 0;
    let normA = 0;
    let normB = 0;
    for (let index = 0; index + lag < frame.length; index += 1) {
      const a = frame[index];
      const b = frame[index + lag];
      corr += a * b;
      normA += a * a;
      normB += b * b;
    }
    const score = corr / Math.sqrt((normA || 1) * (normB || 1));
    if (score > best) {
      best = score;
      bestLag = lag;
    }
  }
  return best > 0.35 && bestLag ? sampleRate / bestLag : null;
}

function pitchContour(audioBuffer) {
  const wav = wavPcmSamples(audioBuffer);
  if (!wav) return [];
  const frameSize = Math.round(wav.sampleRate * 0.04);
  const hopSize = Math.round(wav.sampleRate * 0.02);
  const contour = [];
  for (let start = 0; start + frameSize <= wav.samples.length; start += hopSize) {
    const pitch = estimatePitch(wav.samples.subarray(start, start + frameSize), wav.sampleRate);
    if (pitch && pitch >= 75 && pitch <= 450) contour.push(pitch);
  }
  return contour;
}

function toneContourScore(tone, contour) {
  if (!contour.length) return null;
  const values = contour.map((pitch) => Math.log2(pitch));
  const first = values[0];
  const last = values[values.length - 1];
  const mid = values[Math.floor(values.length / 2)];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const slope = last - first;
  const range = max - min;
  if (tone === 1) return Math.round(Math.max(35, Math.min(100, 100 - Math.abs(slope) * 120 - Math.max(0, range - 0.22) * 80)));
  if (tone === 2) return Math.round(Math.max(35, Math.min(100, 60 + slope * 180)));
  if (tone === 3) {
    const dip = Math.min(first, last) - mid;
    return Math.round(Math.max(35, Math.min(100, 55 + dip * 220 + Math.max(0, last - mid) * 80)));
  }
  if (tone === 4) return Math.round(Math.max(35, Math.min(100, 60 - slope * 180)));
  return Math.round(Math.max(45, Math.min(85, 72 - range * 25)));
}

function assessToneAndIntonation(audioBuffer, pinyin) {
  const tones = pinyinTones(pinyin).filter((tone) => tone > 0);
  const contour = pitchContour(audioBuffer);
  if (!tones.length || contour.length < 6) return { toneScore: null, intonationScore: null, toneResults: [] };
  const segmentLength = contour.length / tones.length;
  const toneResults = tones.map((tone, index) => {
    const start = Math.floor(index * segmentLength);
    const end = Math.max(start + 1, Math.floor((index + 1) * segmentLength));
    const score = toneContourScore(tone, contour.slice(start, end));
    return { index, tone, score, correct: Number(score) >= 60 };
  });
  const scores = toneResults.map((item) => item.score).filter((score) => Number.isFinite(Number(score)));
  const toneScore = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : null;
  const intonationScore = toneScore === null ? null : Math.round((toneScore * 0.75) + (Math.min(100, contour.length * 2) * 0.25));
  return { toneScore, intonationScore, toneResults };
}

async function assessListeningPronunciation(body) {
  const provider = speechAssessmentProvider();
  if (!provider) {
    throw apiError({
      error: "Pronunciation assessment chưa được cấu hình.",
      code: "speech_not_configured",
    }, 503);
  }

  const referenceText = repairUtf8Mojibake(String(body.referenceText || "")).trim();
  const audioBase64 = String(body.audioBase64 || "");
  if (!referenceText) throw apiError("Thiếu câu gốc để chấm phát âm.", 400);
  if (!audioBase64) throw apiError("Thiếu audio ghi âm để chấm phát âm.", 400);

  const audioBuffer = Buffer.from(audioBase64, "base64");
  if (!audioBuffer.length) throw apiError("Audio ghi âm không hợp lệ.", 400);
  if (audioBuffer.length > 8 * 1024 * 1024) throw apiError("Audio ghi âm quá lớn.", 413);

  const result = await assessWithIflytek(referenceText, audioBuffer);
  return json({ ...result, ...assessToneAndIntonation(audioBuffer, body.pinyin || ""), referenceText });
}

async function readBody(req) {
  if (req.method === "GET" || req.method === "HEAD") return {};
  return req.json().catch(() => ({}));
}

function getPool() {
  if (pool) return pool;
  const databaseUrl = env("DATABASE_URL");
  if (!databaseUrl) {
    throw apiError("DATABASE_URL chưa được cấu hình trên Netlify.", 503);
  }
  pool = new Pool({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
  });
  return pool;
}

async function query(text, params) {
  await ensureSchema();
  return getPool().query(text, params);
}

async function ensureSchema() {
  if (schemaReady) return schemaReady;
  schemaReady = (async () => {
    if (isProduction() && !isEnabled("ENABLE_DB_SCHEMA_INIT")) {
      console.warn("Database schema initialization skipped in production.");
      return;
    }
    const db = getPool();
    await db.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'student',
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        current_level TEXT NOT NULL DEFAULT 'HSK2',
        avatar_url TEXT,
        is_premium BOOLEAN NOT NULL DEFAULT FALSE,
        premium_until TIMESTAMPTZ,
        daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE,
        daily_reminder_last_sent_on DATE,
        email_verified_at TIMESTAMPTZ,
        email_verification_code_hash TEXT,
        email_verification_expires_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        last_login_at TIMESTAMPTZ
      );
    `);
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS current_level TEXT NOT NULL DEFAULT 'HSK2';");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar_url TEXT;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT FALSE;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS premium_until TIMESTAMPTZ;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_reminder_last_sent_on DATE;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verified_at TIMESTAMPTZ;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verification_code_hash TEXT;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verification_expires_at TIMESTAMPTZ;");
    await db.query(`
      CREATE TABLE IF NOT EXISTS payment_orders (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        plan_id TEXT NOT NULL,
        amount INTEGER NOT NULL,
        transfer_code TEXT NOT NULL UNIQUE,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        paid_at TIMESTAMPTZ,
        expires_at TIMESTAMPTZ NOT NULL
      );
    `);
    await db.query("CREATE INDEX IF NOT EXISTS idx_payment_orders_user_id ON payment_orders(user_id);");
    await db.query("CREATE INDEX IF NOT EXISTS idx_payment_orders_transfer_code ON payment_orders(transfer_code);");
    await db.query("CREATE INDEX IF NOT EXISTS idx_payment_orders_status ON payment_orders(status);");
    await db.query(`
      CREATE TABLE IF NOT EXISTS sepay_webhook_events (
        sepay_id BIGINT PRIMARY KEY,
        order_id UUID REFERENCES payment_orders(id) ON DELETE SET NULL,
        payload JSONB NOT NULL,
        processed BOOLEAN NOT NULL DEFAULT FALSE,
        received_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await db.query(`
      CREATE TABLE IF NOT EXISTS payment_plans (
        id TEXT PRIMARY KEY,
        months INTEGER NOT NULL,
        duration_unit TEXT NOT NULL DEFAULT 'months',
        amount INTEGER NOT NULL,
        name_vi TEXT NOT NULL,
        name_zh TEXT NOT NULL,
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        sort_order INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await db.query(`
      ALTER TABLE payment_plans
      ADD COLUMN IF NOT EXISTS duration_unit TEXT NOT NULL DEFAULT 'months';
    `);
    for (const [index, plan] of DEFAULT_PAYMENT_PLANS.entries()) {
      await db.query(
        `INSERT INTO payment_plans (id, months, amount, name_vi, name_zh, is_active, sort_order)
         VALUES ($1, $2, $3, $4, $5, TRUE, $6)
         ON CONFLICT (id) DO NOTHING`,
        [plan.id, plan.months, plan.amount, plan.nameVi, plan.nameZh, index + 1],
      );
    }
    await db.query(`
      CREATE TABLE IF NOT EXISTS hsk_lesson_locks (
        lesson_id TEXT PRIMARY KEY,
        level TEXT NOT NULL,
        lesson_no INTEGER NOT NULL DEFAULT 0,
        title_vi TEXT NOT NULL DEFAULT '',
        free_item_limit INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await db.query(`
      ALTER TABLE hsk_lesson_locks
      ADD COLUMN IF NOT EXISTS free_item_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await db.query(`
      CREATE TABLE IF NOT EXISTS daily_theme_locks (
        theme_id TEXT PRIMARY KEY,
        title_vi TEXT NOT NULL DEFAULT '',
        sort_order INTEGER NOT NULL DEFAULT 0,
        free_item_limit INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await db.query(`
      ALTER TABLE daily_theme_locks
      ADD COLUMN IF NOT EXISTS free_item_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await db.query(`
      CREATE TABLE IF NOT EXISTS hsk_level_covers (
        level TEXT PRIMARY KEY,
        cover_url TEXT NOT NULL DEFAULT '',
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
  })();
  return schemaReady;
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

function publicUser(row) {
  const premiumUntil = row.premium_until ? new Date(row.premium_until) : null;
  const isPremium = Boolean(row.is_premium && (!premiumUntil || premiumUntil.getTime() > Date.now()));
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    role: row.role,
    isActive: row.is_active,
    currentLevel: row.current_level || "HSK2",
    avatarUrl: row.avatar_url || "",
    isPremium,
    plan: isPremium ? "PREMIUM" : "FREE",
    premiumUntil: row.premium_until || null,
    dailyReminderEnabled: row.daily_reminder_enabled !== false,
    emailVerified: Boolean(row.email_verified_at),
    emailVerifiedAt: row.email_verified_at || null,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    lastLoginAt: row.last_login_at,
  };
}

function formatVnd(amount) {
  return `${amount.toLocaleString("vi-VN")}đ`;
}

async function getPlanById(planId) {
  const result = await query(
    `SELECT id, months, duration_unit, amount, name_vi, name_zh
     FROM payment_plans
     WHERE id = $1`,
    [planId],
  );
  const row = result.rows[0];
  if (!row) return null;
  return {
    id: row.id,
    months: Number(row.months),
    durationUnit: normalizeDurationUnit(row.duration_unit),
    amount: Number(row.amount),
    nameVi: row.name_vi,
    nameZh: row.name_zh,
  };
}

async function getPlan(planId) {
  const result = await query(
    `SELECT id, months, duration_unit, amount, name_vi, name_zh
     FROM payment_plans
     WHERE id = $1 AND is_active = TRUE`,
    [planId],
  );
  const row = result.rows[0];
  if (!row) return null;
  return {
    id: row.id,
    months: Number(row.months),
    durationUnit: normalizeDurationUnit(row.duration_unit),
    amount: Number(row.amount),
    nameVi: row.name_vi,
    nameZh: row.name_zh,
  };
}

function mapAdminPlan(row) {
  return {
    id: row.id,
    months: Number(row.months),
    durationUnit: normalizeDurationUnit(row.duration_unit),
    amount: Number(row.amount),
    nameVi: row.name_vi,
    nameZh: row.name_zh,
    isActive: row.is_active,
    sortOrder: Number(row.sort_order),
    buyerCount: Number(row.buyer_count || 0),
    priceLabel: formatVnd(Number(row.amount)),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function bankConfig() {
  return {
    bankName: env("SEPAY_BANK_NAME") || "Vietcombank",
    bankCode: env("SEPAY_BANK_CODE") || "Vietcombank",
    accountNumber: env("SEPAY_BANK_ACCOUNT"),
    accountName: env("SEPAY_BANK_ACCOUNT_NAME") || "HUAMEI EDUCATION",
    paymentPrefix: (env("SEPAY_PAYMENT_PREFIX") || "HUAMEI").toUpperCase(),
  };
}

function cloudinaryConfig() {
  return {
    cloudName: env("CLOUDINARY_CLOUD_NAME"),
    apiKey: env("CLOUDINARY_API_KEY"),
    apiSecret: env("CLOUDINARY_API_SECRET"),
    folder: env("CLOUDINARY_AVATAR_FOLDER") || "huamei/avatars",
  };
}

function signCloudinaryParams(params, apiSecret) {
  const payload = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return crypto.createHash("sha1").update(`${payload}${apiSecret}`).digest("hex");
}

async function uploadAvatarToCloudinary(userId, avatarDataUrl) {
  const config = cloudinaryConfig();
  if (!config.cloudName || !config.apiKey || !config.apiSecret) {
    throw apiError("Cloudinary chưa được cấu hình trên server.", 503);
  }
  if (!String(avatarDataUrl || "").startsWith("data:image/")) {
    throw apiError("Ảnh đại diện không hợp lệ.", 400);
  }
  if (String(avatarDataUrl).length > 600000) {
    throw apiError("Ảnh đại diện quá lớn. Vui lòng chọn ảnh nhỏ hơn.", 413);
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const publicId = `user-${userId}`;
  const params = {
    folder: config.folder,
    overwrite: "true",
    public_id: publicId,
    timestamp,
  };
  const form = new FormData();
  form.append("file", avatarDataUrl);
  form.append("api_key", config.apiKey);
  Object.entries(params).forEach(([key, value]) => form.append(key, String(value)));
  form.append("signature", signCloudinaryParams(params, config.apiSecret));

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`, {
    method: "POST",
    body: form,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.secure_url) {
    throw apiError(data.error?.message || "Không thể tải ảnh lên Cloudinary.", response.status || 502);
  }
  return data.secure_url;
}

async function assertAdmin(req) {
  const userId = req.headers.get("x-admin-user-id");
  if (!userId) throw apiError("Vui lòng đăng nhập bằng tài khoản admin.", 401);
  const result = await query("SELECT role, is_active FROM users WHERE id = $1", [userId]);
  const user = result.rows[0];
  if (user?.role !== "admin" || user?.is_active !== true) {
    throw apiError("Vui lòng đăng nhập bằng tài khoản admin.", 401);
  }
}

async function register(body) {
  const fullName = String(body.fullName || body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  if (fullName.length < 2) throw apiError("Vui lòng nhập họ và tên.", 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw apiError("Email không hợp lệ.", 400);
  if (password.length < 6) throw apiError("Mật khẩu cần tối thiểu 6 ký tự.", 400);

  try {
    const result = await query(
      `INSERT INTO users (full_name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [fullName, email, hashPassword(password)],
    );
    return json({ user: publicUser(result.rows[0]) });
  } catch (error) {
    if (error.code === "23505") throw apiError("Email này đã được đăng ký.", 409);
    throw error;
  }
}

async function login(body) {
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const result = await query("SELECT * FROM users WHERE email = $1", [email]);
  const user = result.rows[0];
  if (!user || !verifyPassword(password, user.password_hash)) {
    throw apiError("Email hoặc mật khẩu không đúng.", 401);
  }
  if (!user.is_active) throw apiError("Tài khoản đã bị khóa.", 403);
  const updated = await query(
    `UPDATE users SET last_login_at = NOW(), updated_at = NOW()
     WHERE id = $1
     RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
    [user.id],
  );
  return json({ user: publicUser(updated.rows[0]) });
}

async function updateOwnProfile(req, id, body) {
  const requesterId = req.headers.get("x-user-id");
  if (!requesterId || requesterId !== id) {
    throw apiError("Bạn không có quyền cập nhật hồ sơ này.", 403);
  }
  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const currentLevel = String(body.currentLevel || "HSK2").trim().toUpperCase();
  const avatarUrl = String(body.avatarUrl || "").trim();
  const dailyReminderEnabled = body.dailyReminderEnabled !== false;
  if (fullName.length < 2) throw apiError("Vui lòng nhập họ và tên.", 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw apiError("Email không hợp lệ.", 400);
  if (avatarUrl && !avatarUrl.startsWith("data:image/") && !/^https?:\/\//i.test(avatarUrl) && !avatarUrl.startsWith("assets/")) {
    throw apiError("Ảnh đại diện không hợp lệ.", 400);
  }
  if (avatarUrl.length > 600000) {
    throw apiError("Ảnh đại diện quá lớn. Vui lòng chọn ảnh nhỏ hơn.", 413);
  }

  try {
    const result = await query(
      `UPDATE users
       SET full_name = $1,
           email = $2,
           current_level = $3,
           avatar_url = $4,
           daily_reminder_enabled = $5,
           email_verified_at = CASE WHEN email = $2 THEN email_verified_at ELSE NULL END,
           email_verification_code_hash = CASE WHEN email = $2 THEN email_verification_code_hash ELSE NULL END,
           email_verification_expires_at = CASE WHEN email = $2 THEN email_verification_expires_at ELSE NULL END,
           updated_at = NOW()
       WHERE id = $6
       RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [fullName, email, currentLevel, avatarUrl || null, dailyReminderEnabled, id],
    );
    if (!result.rows[0]) throw apiError("Không tìm thấy tài khoản.", 404);
    return json({ user: publicUser(result.rows[0]) });
  } catch (error) {
    if (error.code === "23505") throw apiError("Email này đã được đăng ký.", 409);
    throw error;
  }
}

async function updateOwnAvatar(req, id, body) {
  const requesterId = req.headers.get("x-user-id");
  if (!requesterId || requesterId !== id) {
    throw apiError("Bạn không có quyền cập nhật hồ sơ này.", 403);
  }
  const avatarUrl = await uploadAvatarToCloudinary(id, body.avatarDataUrl || body.avatarUrl || "");
  const result = await query(
    `UPDATE users
     SET avatar_url = $1, updated_at = NOW()
     WHERE id = $2
     RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
    [avatarUrl, id],
  );
  if (!result.rows[0]) throw apiError("Không tìm thấy tài khoản.", 404);
  return json({ user: publicUser(result.rows[0]), avatarUrl });
}

async function changeOwnPassword(req, id, body) {
  const requesterId = req.headers.get("x-user-id");
  if (!requesterId || requesterId !== id) {
    throw apiError("Bạn không có quyền đổi mật khẩu tài khoản này.", 403);
  }

  const currentPassword = String(body.currentPassword || "");
  const newPassword = String(body.newPassword || "");
  const confirmPassword = String(body.confirmPassword || "");

  if (!currentPassword) throw apiError("Vui lòng nhập mật khẩu hiện tại.", 400);
  if (newPassword.length < 6) throw apiError("Mật khẩu mới cần tối thiểu 6 ký tự.", 400);
  if (newPassword !== confirmPassword) throw apiError("Mật khẩu xác nhận không khớp.", 400);
  if (currentPassword === newPassword) throw apiError("Mật khẩu mới cần khác mật khẩu hiện tại.", 400);

  const current = await query("SELECT id, password_hash FROM users WHERE id = $1", [id]);
  const user = current.rows[0];
  if (!user) throw apiError("Không tìm thấy tài khoản.", 404);
  if (!verifyPassword(currentPassword, user.password_hash)) {
    throw apiError("Mật khẩu hiện tại không đúng.", 401);
  }

  await query(
    "UPDATE users SET password_hash = $1, updated_at = NOW() WHERE id = $2",
    [hashPassword(newPassword), id],
  );
  return json({ ok: true });
}

async function updateOwnReminderSettings(req, id, body) {
  const requesterId = req.headers.get("x-user-id");
  if (!requesterId || requesterId !== id) {
    throw apiError("Bạn không có quyền cập nhật thông báo tài khoản này.", 403);
  }

  const enabled = body.enabled !== false;
  const result = await query(
    `UPDATE users
     SET daily_reminder_enabled = $1, updated_at = NOW()
     WHERE id = $2
     RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
    [enabled, id],
  );
  if (!result.rows[0]) throw apiError("Không tìm thấy tài khoản.", 404);
  return json({ user: publicUser(result.rows[0]) });
}

function emailVerificationHash(userId, email, code) {
  const secret = env("EMAIL_VERIFICATION_SECRET");
  if (isProduction() && !secret) {
    throw apiError("EMAIL_VERIFICATION_SECRET is required in production.", 503);
  }
  return crypto
    .createHash("sha256")
    .update(`${userId}:${email}:${code}:${secret || "huamei-email-verification-dev"}`)
    .digest("hex");
}

async function sendVerificationEmail(email, code) {
  const resendApiKey = env("RESEND_API_KEY");
  const from = env("EMAIL_FROM") || "HuaMei <no-reply@huamei.vn>";
  if (!resendApiKey) {
    console.log(`[email-verification] ${email}: ${code}`);
    return "dev";
  }
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: email,
      subject: "Ma xac minh email HuaMei",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2>Ma xac minh email HuaMei</h2>
          <p>Nhap ma ben duoi de xac minh email cua ban:</p>
          <p style="font-size:28px;font-weight:800;letter-spacing:6px">${code}</p>
          <p>Ma co hieu luc trong 10 phut.</p>
        </div>
      `,
    }),
  });
  if (!response.ok) throw apiError("Khong the gui email xac minh. Vui long thu lai sau.", 502);
  return "sent";
}

async function sendEmailVerificationCode(req, id) {
  const requesterId = req.headers.get("x-user-id");
  if (!requesterId || requesterId !== id) {
    throw apiError("Ban khong co quyen xac minh email tai khoan nay.", 403);
  }
  const current = await query("SELECT id, email, email_verified_at FROM users WHERE id = $1", [id]);
  const user = current.rows[0];
  if (!user) throw apiError("Khong tim thay tai khoan.", 404);
  if (user.email_verified_at) return json({ ok: true, alreadyVerified: true });

  const code = String(crypto.randomInt(100000, 1000000));
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  await query(
    `UPDATE users
     SET email_verification_code_hash = $1,
         email_verification_expires_at = $2,
         updated_at = NOW()
     WHERE id = $3`,
    [emailVerificationHash(id, user.email, code), expiresAt.toISOString(), id],
  );
  const delivery = await sendVerificationEmail(user.email, code);
  return json({
    ok: true,
    delivery,
    expiresAt: expiresAt.toISOString(),
    devCode: delivery === "dev" && env("NODE_ENV") !== "production" ? code : undefined,
  });
}

async function confirmEmailVerificationCode(req, id, body) {
  const requesterId = req.headers.get("x-user-id");
  if (!requesterId || requesterId !== id) {
    throw apiError("Ban khong co quyen xac minh email tai khoan nay.", 403);
  }
  const code = String(body.code || "").replace(/\D/g, "");
  if (!/^\d{6}$/.test(code)) throw apiError("Ma xac minh gom 6 chu so.", 400);

  const current = await query(
    `SELECT id, email, email_verification_code_hash, email_verification_expires_at
     FROM users
     WHERE id = $1`,
    [id],
  );
  const user = current.rows[0];
  if (!user) throw apiError("Khong tim thay tai khoan.", 404);
  const expiresAt = user.email_verification_expires_at ? new Date(user.email_verification_expires_at) : null;
  if (!user.email_verification_code_hash || !expiresAt || expiresAt.getTime() < Date.now()) {
    throw apiError("Ma xac minh da het han. Vui long gui lai ma moi.", 400);
  }
  if (emailVerificationHash(id, user.email, code) !== user.email_verification_code_hash) {
    throw apiError("Ma xac minh khong dung.", 400);
  }

  const updated = await query(
    `UPDATE users
     SET email_verified_at = NOW(),
         email_verification_code_hash = NULL,
         email_verification_expires_at = NULL,
         updated_at = NOW()
     WHERE id = $1
     RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
    [id],
  );
  return json({ ok: true, user: publicUser(updated.rows[0]) });
}

async function listUsers(req) {
  await assertAdmin(req);
  const result = await query(
    `SELECT id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, created_at, updated_at, last_login_at
     FROM users
     ORDER BY created_at DESC`,
  );
  return json({ users: result.rows.map(publicUser) });
}

function calculatePremiumUntil(plan, durationDays) {
  if (plan !== "PREMIUM") return null;
  if (!Number.isFinite(durationDays) || durationDays <= 0) return null;
  const premiumUntil = new Date();
  premiumUntil.setDate(premiumUntil.getDate() + Math.floor(durationDays));
  return premiumUntil.toISOString();
}

async function createUser(req, body) {
  await assertAdmin(req);
  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const role = String(body.role || "student").trim();
  const currentLevel = String(body.currentLevel || "HSK2").trim().toUpperCase();
  const plan = String(body.plan || "FREE").trim().toUpperCase();
  const isActive = body.isActive !== false;
  const durationDays = Math.max(0, Number(body.durationDays || 0));
  const isPremium = plan === "PREMIUM";
  const premiumUntil = calculatePremiumUntil(plan, durationDays);

  if (fullName.length < 2) throw apiError("Vui lòng nhập họ và tên.", 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw apiError("Email không hợp lệ.", 400);
  if (password.length < 6) throw apiError("Mật khẩu cần tối thiểu 6 ký tự.", 400);
  if (!/^HSK[1-6]$/.test(currentLevel)) throw apiError("Cấp độ không hợp lệ.", 400);
  if (!["FREE", "PREMIUM"].includes(plan)) throw apiError("Gói tài khoản không hợp lệ.", 400);

  try {
    const result = await query(
      `INSERT INTO users (full_name, email, password_hash, role, is_active, current_level, is_premium, premium_until)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [fullName, email, hashPassword(password), role || "student", isActive, currentLevel, isPremium, premiumUntil],
    );
    return json({ user: publicUser(result.rows[0]) });
  } catch (error) {
    if (error.code === "23505") throw apiError("Email này đã được đăng ký.", 409);
    throw error;
  }
}

async function updateUser(req, id, body) {
  await assertAdmin(req);
  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const role = String(body.role || "student").trim();
  const isActive = body.isActive === true;
  const currentLevel = String(body.currentLevel || "HSK2").trim().toUpperCase();
  if (!fullName || !email) throw apiError("Tên và email không được để trống.", 400);
  const result = await query(
    `UPDATE users
     SET full_name = $1, email = $2, role = $3, is_active = $4, current_level = $5, updated_at = NOW()
     WHERE id = $6
     RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
    [fullName, email, role, isActive, currentLevel, id],
  );
  if (!result.rows[0]) throw apiError("Không tìm thấy user.", 404);
  return json({ user: publicUser(result.rows[0]) });
}

async function deleteUser(req, id) {
  await assertAdmin(req);
  const result = await query("DELETE FROM users WHERE id = $1", [id]);
  if (result.rowCount === 0) throw apiError("Không tìm thấy user.", 404);
  return json({ ok: true });
}

async function listPlans() {
  const config = bankConfig();
  const result = await query(
    `SELECT id, months, duration_unit, amount, name_vi, name_zh, sort_order
     FROM payment_plans
     WHERE is_active = TRUE
     ORDER BY sort_order ASC, created_at ASC`,
  );
  return json({
    plans: result.rows.map((row) => ({
      id: row.id,
      months: Number(row.months),
      durationUnit: normalizeDurationUnit(row.duration_unit),
      amount: Number(row.amount),
      sortOrder: Number(row.sort_order),
      priceLabel: formatVnd(Number(row.amount)),
      nameVi: row.name_vi,
      nameZh: row.name_zh,
    })),
    bankConfigured: Boolean(config.accountNumber),
  });
}

async function getAdminPlanStats(req) {
  await assertAdmin(req);

  const revenueResult = await query(`
    SELECT
      COALESCE(SUM(amount), 0)::bigint AS total_revenue,
      COALESCE(SUM(amount) FILTER (
        WHERE paid_at >= date_trunc('month', NOW())
      ), 0)::bigint AS revenue_this_month,
      COALESCE(SUM(amount) FILTER (
        WHERE paid_at >= date_trunc('month', NOW()) - interval '1 month'
          AND paid_at < date_trunc('month', NOW())
      ), 0)::bigint AS revenue_last_month
    FROM payment_orders
    WHERE status = 'paid'
  `);

  const usersResult = await query(`
    SELECT COUNT(*)::int AS active_premium_users
    FROM users
    WHERE is_premium = TRUE
      AND (premium_until IS NULL OR premium_until > NOW())
  `);

  const weekResult = await query(`
    SELECT
      COUNT(*) FILTER (WHERE paid_at >= date_trunc('week', NOW()))::int AS paid_this_week,
      COUNT(*) FILTER (
        WHERE paid_at >= date_trunc('week', NOW()) - interval '1 week'
          AND paid_at < date_trunc('week', NOW())
      )::int AS paid_last_week
    FROM payment_orders
    WHERE status = 'paid'
  `);

  const renewalResult = await query(`
    SELECT
      COUNT(*)::int AS total_buyers,
      COUNT(*) FILTER (WHERE order_count >= 2)::int AS renewing_buyers
    FROM (
      SELECT user_id, COUNT(*)::int AS order_count
      FROM payment_orders
      WHERE status = 'paid'
      GROUP BY user_id
    ) buyers
  `);

  const recentResult = await query(`
    SELECT o.id, o.amount, o.paid_at, o.plan_id,
           u.full_name, u.email,
           p.name_vi AS plan_name_vi
    FROM payment_orders o
    JOIN users u ON u.id = o.user_id
    LEFT JOIN payment_plans p ON p.id = o.plan_id
    WHERE o.status = 'paid'
    ORDER BY o.paid_at DESC NULLS LAST
    LIMIT 8
  `);

  const revenueRow = revenueResult.rows[0];
  const totalRevenue = Number(revenueRow?.total_revenue || 0);
  const thisMonth = Number(revenueRow?.revenue_this_month || 0);
  const lastMonth = Number(revenueRow?.revenue_last_month || 0);
  const revenueGrowthPercent = lastMonth > 0
    ? Math.round(((thisMonth - lastMonth) / lastMonth) * 1000) / 10
    : (thisMonth > 0 ? 100 : 0);

  const activePremiumUsers = Number(usersResult.rows[0]?.active_premium_users || 0);
  const paidThisWeek = Number(weekResult.rows[0]?.paid_this_week || 0);
  const paidLastWeek = Number(weekResult.rows[0]?.paid_last_week || 0);
  const weekGrowthPercent = paidLastWeek > 0
    ? Math.round(((paidThisWeek - paidLastWeek) / paidLastWeek) * 1000) / 10
    : (paidThisWeek > 0 ? 100 : 0);

  const totalBuyers = Number(renewalResult.rows[0]?.total_buyers || 0);
  const renewingBuyers = Number(renewalResult.rows[0]?.renewing_buyers || 0);
  const renewalRatePercent = totalBuyers > 0
    ? Math.round((renewingBuyers / totalBuyers) * 1000) / 10
    : 0;

  return json({
    stats: {
      totalRevenue,
      revenueGrowthPercent,
      activePremiumUsers,
      weekGrowthPercent,
      renewalRatePercent,
      recentTransactions: recentResult.rows.map((tx) => ({
        id: tx.id,
        userName: tx.full_name,
        userEmail: tx.email,
        planName: tx.plan_name_vi || tx.plan_id,
        amount: Number(tx.amount),
        paidAt: tx.paid_at,
      })),
    },
  });
}

async function listAdminPlans(req) {
  await assertAdmin(req);
  const result = await query(
    `SELECT p.*,
            COUNT(o.id) FILTER (WHERE o.status = 'paid') AS buyer_count
     FROM payment_plans p
     LEFT JOIN payment_orders o ON o.plan_id = p.id
     GROUP BY p.id
     ORDER BY p.sort_order ASC, p.created_at ASC`,
  );
  return json({ plans: result.rows.map(mapAdminPlan) });
}

async function createAdminPlan(req, body) {
  await assertAdmin(req);
  const id = String(body.id || "").trim().toLowerCase();
  const months = Number(body.months);
  const durationUnit = normalizeDurationUnit(body.durationUnit);
  const amount = Number(body.amount);
  const nameVi = String(body.nameVi || "").trim();
  const nameZh = String(body.nameZh || "").trim();
  const isActive = body.isActive !== false;
  const sortOrder = Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0;

  if (!/^[a-z0-9_-]{2,20}$/.test(id)) {
    throw apiError("Mã gói phải từ 2–20 ký tự (chữ thường, số, gạch ngang).", 400);
  }
  if (!Number.isInteger(months) || months < 1) throw apiError("Thời hạn phải là số nguyên dương.", 400);
  if (body.durationUnit !== undefined && body.durationUnit !== "days" && body.durationUnit !== "months") {
    throw apiError("Đơn vị thời hạn phải là ngày hoặc tháng.", 400);
  }
  if (!Number.isInteger(amount) || amount < 1000) throw apiError("Giá gói phải từ 1.000 VNĐ trở lên.", 400);
  if (!nameVi || !nameZh) throw apiError("Tên gói (Việt/Trung) không được để trống.", 400);

  try {
    const result = await query(
      `INSERT INTO payment_plans (id, months, duration_unit, amount, name_vi, name_zh, is_active, sort_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *, 0 AS buyer_count`,
      [id, months, durationUnit, amount, nameVi, nameZh, isActive, sortOrder],
    );
    return json({ plan: mapAdminPlan(result.rows[0]) });
  } catch (error) {
    if (error.code === "23505") throw apiError("Mã gói đã tồn tại.", 409);
    throw error;
  }
}

async function updateAdminPlan(req, id, body) {
  await assertAdmin(req);
  const existing = await query("SELECT id FROM payment_plans WHERE id = $1", [id]);
  if (!existing.rows[0]) throw apiError("Không tìm thấy gói.", 404);

  const months = body.months !== undefined ? Number(body.months) : undefined;
  const durationUnit = body.durationUnit !== undefined ? normalizeDurationUnit(body.durationUnit) : undefined;
  const amount = body.amount !== undefined ? Number(body.amount) : undefined;
  const nameVi = body.nameVi !== undefined ? String(body.nameVi).trim() : undefined;
  const nameZh = body.nameZh !== undefined ? String(body.nameZh).trim() : undefined;
  const isActive = body.isActive;
  const sortOrder = body.sortOrder !== undefined ? Number(body.sortOrder) : undefined;

  if (months !== undefined && (!Number.isInteger(months) || months < 1)) {
    throw apiError("Thời hạn phải là số nguyên dương.", 400);
  }
  if (body.durationUnit !== undefined && body.durationUnit !== "days" && body.durationUnit !== "months") {
    throw apiError("Đơn vị thời hạn phải là ngày hoặc tháng.", 400);
  }
  if (amount !== undefined && (!Number.isInteger(amount) || amount < 1000)) {
    throw apiError("Giá gói phải từ 1.000 VNĐ trở lên.", 400);
  }
  if (nameVi !== undefined && !nameVi) throw apiError("Tên tiếng Việt không được để trống.", 400);
  if (nameZh !== undefined && !nameZh) throw apiError("Tên tiếng Trung không được để trống.", 400);

  const result = await query(
    `UPDATE payment_plans
     SET months = COALESCE($2, months),
         duration_unit = COALESCE($3, duration_unit),
         amount = COALESCE($4, amount),
         name_vi = COALESCE($5, name_vi),
         name_zh = COALESCE($6, name_zh),
         is_active = COALESCE($7, is_active),
         sort_order = COALESCE($8, sort_order),
         updated_at = NOW()
     WHERE id = $1
     RETURNING *`,
    [id, months ?? null, durationUnit ?? null, amount ?? null, nameVi ?? null, nameZh ?? null, isActive ?? null, sortOrder ?? null],
  );
  const buyerCount = await query(
    `SELECT COUNT(*)::int AS buyer_count
     FROM payment_orders
     WHERE plan_id = $1 AND status = 'paid'`,
    [id],
  );
  return json({
    plan: mapAdminPlan({
      ...result.rows[0],
      buyer_count: buyerCount.rows[0]?.buyer_count || 0,
    }),
  });
}

async function deleteAdminPlan(req, id) {
  await assertAdmin(req);
  const orders = await query(
    `SELECT COUNT(*)::int AS total FROM payment_orders WHERE plan_id = $1`,
    [id],
  );
  if (Number(orders.rows[0]?.total || 0) > 0) {
    throw apiError('Không thể xóa gói đã có giao dịch. Hãy chuyển trạng thái sang "Tạm ẩn".', 409);
  }
  const result = await query("DELETE FROM payment_plans WHERE id = $1", [id]);
  if (result.rowCount === 0) throw apiError("Không tìm thấy gói.", 404);
  return json({ ok: true });
}

function mapHskLessonLock(row) {
  return {
    lessonId: row.lesson_id,
    level: row.level,
    lessonNo: Number(row.lesson_no),
    titleVi: row.title_vi,
    freeItemLimit: Number(row.free_item_limit || 0),
    lockedForFree: row.locked_for_free,
    updatedAt: row.updated_at,
  };
}

async function getPublicHskLocks() {
  const result = await query(
    `SELECT lesson_id, free_item_limit
     FROM hsk_lesson_locks
     WHERE free_item_limit > 0
     ORDER BY lesson_id ASC`,
  );
  return json({
    lessonLocks: result.rows.map((row) => ({
      lessonId: row.lesson_id,
      freeItemLimit: Math.max(0, Number(row.free_item_limit || 0)),
    })),
  });
}

async function listAdminHskLocks(req) {
  await assertAdmin(req);
  const result = await query(
    `SELECT lesson_id, level, lesson_no, title_vi, free_item_limit, locked_for_free, updated_at
     FROM hsk_lesson_locks
     ORDER BY level ASC, lesson_no ASC, lesson_id ASC`,
  );
  return json({ locks: result.rows.map(mapHskLessonLock) });
}

async function saveAdminHskLocks(req, body) {
  await assertAdmin(req);
  const lessons = Array.isArray(body.lessons) ? body.lessons : [];
  if (lessons.length === 0) throw apiError("Danh sách bài học không hợp lệ.", 400);

  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    for (const lesson of lessons) {
      const lessonId = String(lesson.lessonId || "").trim();
      const level = String(lesson.level || "").trim().toUpperCase();
      const lessonNo = Number(lesson.lessonNo || 0);
      const titleVi = String(lesson.titleVi || "").trim();
      const freeItemLimit = Math.max(0, Number(lesson.freeItemLimit || 0));
      const lockedForFree = lesson.lockedForFree === true;
      const effectiveLockedForFree = lockedForFree || freeItemLimit > 0;
      if (!lessonId || !level) continue;
      await client.query(
        `INSERT INTO hsk_lesson_locks (lesson_id, level, lesson_no, title_vi, free_item_limit, locked_for_free, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, NOW())
         ON CONFLICT (lesson_id) DO UPDATE
         SET level = EXCLUDED.level,
             lesson_no = EXCLUDED.lesson_no,
             title_vi = EXCLUDED.title_vi,
             free_item_limit = EXCLUDED.free_item_limit,
             locked_for_free = EXCLUDED.locked_for_free,
             updated_at = NOW()`,
        [lessonId, level, lessonNo, titleVi, freeItemLimit, effectiveLockedForFree],
      );
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  const result = await query(
    `SELECT lesson_id, level, lesson_no, title_vi, free_item_limit, locked_for_free, updated_at
     FROM hsk_lesson_locks
     ORDER BY level ASC, lesson_no ASC, lesson_id ASC`,
  );
  return json({ locks: result.rows.map(mapHskLessonLock) });
}

function mapHskLevelCover(row) {
  return {
    level: row.level,
    coverUrl: String(row.cover_url || ""),
    updatedAt: row.updated_at,
  };
}

async function getPublicHskLevelCovers() {
  const result = await query(
    `SELECT level, cover_url, updated_at
     FROM hsk_level_covers
     ORDER BY level ASC`,
  );
  return json({ covers: result.rows.map(mapHskLevelCover) });
}

async function listAdminHskLevelCovers(req) {
  await assertAdmin(req);
  const result = await query(
    `SELECT level, cover_url, updated_at
     FROM hsk_level_covers
     ORDER BY level ASC`,
  );
  return json({ covers: result.rows.map(mapHskLevelCover) });
}

async function saveAdminHskLevelCovers(req, body) {
  await assertAdmin(req);
  const covers = Array.isArray(body.covers) ? body.covers : [];
  if (covers.length === 0) throw apiError("Danh sách cấp HSK không hợp lệ.", 400);

  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    for (const cover of covers) {
      const level = String(cover.level || "").trim().toUpperCase();
      const coverUrl = String(cover.coverUrl || "").trim();
      if (!/^HSK[1-6]$/.test(level)) continue;
      await client.query(
        `INSERT INTO hsk_level_covers (level, cover_url, updated_at)
         VALUES ($1, $2, NOW())
         ON CONFLICT (level) DO UPDATE
         SET cover_url = EXCLUDED.cover_url,
             updated_at = NOW()`,
        [level, coverUrl],
      );
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  const result = await query(
    `SELECT level, cover_url, updated_at
     FROM hsk_level_covers
     ORDER BY level ASC`,
  );
  return json({ covers: result.rows.map(mapHskLevelCover) });
}

function mapDailyThemeLock(row) {
  return {
    themeId: row.theme_id,
    titleVi: row.title_vi,
    sortOrder: Number(row.sort_order),
    freeItemLimit: Math.max(0, Number(row.free_item_limit || 0)),
    lockedForFree: row.locked_for_free,
    updatedAt: row.updated_at,
  };
}

async function getPublicDailyLocks() {
  const result = await query(
    `SELECT theme_id, free_item_limit, locked_for_free
     FROM daily_theme_locks
     WHERE locked_for_free = TRUE OR free_item_limit > 0
     ORDER BY theme_id ASC`,
  );
  const themeLocks = result.rows.map((row) => ({
    themeId: row.theme_id,
    freeItemLimit: Math.max(0, Number(row.free_item_limit || 0)),
    lockedForFree: row.locked_for_free === true,
  }));
  const lockedThemeIds = themeLocks
    .filter((item) => item.lockedForFree && Number(item.freeItemLimit || 0) <= 0)
    .map((item) => item.themeId);
  return json({ lockedThemeIds, themeLocks });
}

async function listAdminDailyLocks(req) {
  await assertAdmin(req);
  const result = await query(
    `SELECT theme_id, title_vi, sort_order, free_item_limit, locked_for_free, updated_at
     FROM daily_theme_locks
     ORDER BY sort_order ASC, theme_id ASC`,
  );
  return json({ locks: result.rows.map(mapDailyThemeLock) });
}

async function saveAdminDailyLocks(req, body) {
  await assertAdmin(req);
  const themes = Array.isArray(body.themes) ? body.themes : [];
  if (themes.length === 0) throw apiError("Danh sách chủ đề không hợp lệ.", 400);

  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    for (const theme of themes) {
      const themeId = String(theme.themeId || "").trim();
      const titleVi = String(theme.titleVi || "").trim();
      const sortOrder = Number(theme.sortOrder || 0);
      const freeItemLimit = Math.max(0, Number(theme.freeItemLimit || 0));
      const lockedForFree = theme.lockedForFree === true;
      if (!themeId) continue;
      await client.query(
        `INSERT INTO daily_theme_locks (theme_id, title_vi, sort_order, free_item_limit, locked_for_free, updated_at)
         VALUES ($1, $2, $3, $4, $5, NOW())
         ON CONFLICT (theme_id) DO UPDATE
         SET title_vi = EXCLUDED.title_vi,
             sort_order = EXCLUDED.sort_order,
             free_item_limit = EXCLUDED.free_item_limit,
             locked_for_free = EXCLUDED.locked_for_free,
             updated_at = NOW()`,
        [themeId, titleVi, sortOrder, freeItemLimit, lockedForFree],
      );
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  const result = await query(
    `SELECT theme_id, title_vi, sort_order, free_item_limit, locked_for_free, updated_at
     FROM daily_theme_locks
     ORDER BY sort_order ASC, theme_id ASC`,
  );
  return json({ locks: result.rows.map(mapDailyThemeLock) });
}

function buildQrImageUrl(account, bank, amount, description) {
  const params = new URLSearchParams({
    acc: account,
    bank,
    amount: String(amount),
    des: description.replace(/[^a-zA-Z0-9 ]/g, "").trim(),
    template: "compact",
  });
  return `https://qr.sepay.vn/img?${params.toString()}`;
}

async function createOrder(body) {
  const userId = String(body.userId || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const planId = String(body.planId || "").trim();
  if (!userId || !email || !planId) throw apiError({ error: "Thiếu thông tin tạo đơn thanh toán." }, 400);
  const plan = await getPlan(planId);
  if (!plan) throw apiError({ error: "Gói thanh toán không hợp lệ." }, 400);
  const config = bankConfig();
  if (!config.accountNumber) {
    throw apiError({ error: "Chưa cấu hình tài khoản ngân hàng SePay trên server." }, 503);
  }

  const userResult = await query("SELECT id, email, is_active FROM users WHERE id = $1", [userId]);
  const user = userResult.rows[0];
  if (!user) throw apiError({ error: "Không tìm thấy tài khoản." }, 404);
  if (String(user.email).toLowerCase() !== email) throw apiError({ error: "Thông tin tài khoản không khớp." }, 403);
  if (!user.is_active) throw apiError({ error: "Tài khoản đã bị khóa." }, 403);

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const transferCode = `${config.paymentPrefix}${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
    try {
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const result = await query(
        `INSERT INTO payment_orders (user_id, plan_id, amount, transfer_code, expires_at)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, user_id, plan_id, amount, transfer_code, status, created_at, expires_at`,
        [userId, plan.id, plan.amount, transferCode, expiresAt.toISOString()],
      );
      const order = result.rows[0];
      return json({
        order: {
          id: order.id,
          planId: order.plan_id,
          amount: order.amount,
          amountLabel: formatVnd(order.amount),
          transferCode: order.transfer_code,
          status: order.status,
          expiresAt: order.expires_at,
          planNameVi: plan.nameVi,
          planNameZh: plan.nameZh,
        },
        bank: {
          bankName: config.bankName,
          accountNumber: config.accountNumber,
          accountName: config.accountName,
        },
        qrImageUrl: buildQrImageUrl(config.accountNumber, config.bankCode, plan.amount, transferCode),
      });
    } catch (error) {
      if (error.code !== "23505") throw error;
    }
  }
  throw apiError({ error: "Không thể tạo mã thanh toán, vui lòng thử lại." }, 500);
}

async function orderStatus(orderId, userId) {
  const result = await query(
    `SELECT o.*, u.email
     FROM payment_orders o
     JOIN users u ON u.id = o.user_id
     WHERE o.id = $1`,
    [orderId],
  );
  const order = result.rows[0];
  if (!order) throw apiError({ error: "Không tìm thấy đơn thanh toán." }, 404);
  if (userId && order.user_id !== userId) throw apiError({ error: "Không có quyền xem đơn này." }, 403);
  if (order.status === "pending" && order.expires_at && new Date(order.expires_at) < new Date()) {
    await query("UPDATE payment_orders SET status = 'expired' WHERE id = $1 AND status = 'pending'", [orderId]);
    order.status = "expired";
  }
  const userPremium = await query("SELECT is_premium, premium_until FROM users WHERE id = $1", [order.user_id]);
  const plan = await getPlanById(order.plan_id);
  return json({
    order: {
      id: order.id,
      status: order.status,
      planId: order.plan_id,
      planNameVi: plan?.nameVi || null,
      planNameZh: plan?.nameZh || null,
      transferCode: order.transfer_code,
      amount: order.amount,
      paidAt: order.paid_at,
      expiresAt: order.expires_at,
    },
    premium: {
      isPremium: userPremium.rows[0]?.is_premium || false,
      premiumUntil: userPremium.rows[0]?.premium_until || null,
    },
  });
}

function verifyWebhookAuthorization(req) {
  const apiKey = env("SEPAY_WEBHOOK_API_KEY");
  if (!apiKey) return env("NODE_ENV") !== "production";
  const authorization = req.headers.get("authorization");
  if (!authorization) return false;
  const expected = `Apikey ${apiKey}`;
  const provided = authorization.trim();
  return provided.length === expected.length && crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(expected));
}

async function handleSepayWebhook(req, payload) {
  if (!verifyWebhookAuthorization(req)) throw apiError({ success: false, error: "Unauthorized" }, 401);
  if (!payload?.id) throw apiError({ error: "Webhook thiếu id giao dịch." }, 400);
  const existingEvent = await query("SELECT sepay_id, processed FROM sepay_webhook_events WHERE sepay_id = $1", [payload.id]);
  if (existingEvent.rows[0]?.processed) return json({ success: true, duplicate: true });
  await query(
    `INSERT INTO sepay_webhook_events (sepay_id, payload)
     VALUES ($1, $2)
     ON CONFLICT (sepay_id) DO NOTHING`,
    [payload.id, JSON.stringify(payload)],
  );

  const amount = Number(payload.transferAmount || 0);
  if ((payload.transferType && payload.transferType !== "in") || !amount || amount <= 0) {
    await markWebhookProcessed(payload.id, null);
    return json({ success: true, ignored: true });
  }

  const order = await findOrderFromWebhook(payload);
  if (!order) {
    await markWebhookProcessed(payload.id, null);
    return json({ success: true, unmatched: true });
  }
  if (order.status === "paid") {
    await markWebhookProcessed(payload.id, order.id);
    return json({ success: true, duplicate: true });
  }
  if (amount < Number(order.amount)) {
    await markWebhookProcessed(payload.id, order.id);
    return json({ success: true, underpaid: true });
  }
  await activateOrder(order, payload.id);
  return json({ success: true, orderId: order.id });
}

async function findOrderFromWebhook(payload) {
  const prefix = bankConfig().paymentPrefix;
  const candidates = new Set();
  if (payload.code) candidates.add(String(payload.code).toUpperCase());
  const haystacks = [payload.content, payload.description].filter(Boolean).join(" ").toUpperCase();
  if (haystacks) {
    const matches = haystacks.match(new RegExp(`${prefix}[A-Z0-9]{6,}`, "g")) || [];
    matches.forEach((code) => candidates.add(code));
  }
  for (const code of candidates) {
    const result = await query(
      `SELECT * FROM payment_orders
       WHERE transfer_code = $1 AND status = 'pending'
       ORDER BY created_at DESC
       LIMIT 1`,
      [code],
    );
    if (result.rows[0]) return result.rows[0];
  }
  return null;
}

async function activateOrder(order, sepayId) {
  const plan = await getPlanById(order.plan_id);
  if (!plan) return;
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    const userResult = await client.query("SELECT premium_until FROM users WHERE id = $1 FOR UPDATE", [order.user_id]);
    const now = new Date();
    const currentEnd = userResult.rows[0]?.premium_until ? new Date(userResult.rows[0].premium_until) : null;
    const premiumUntil = applyPlanDuration(currentEnd && currentEnd > now ? currentEnd : now, plan);
    await client.query("UPDATE payment_orders SET status = 'paid', paid_at = NOW() WHERE id = $1 AND status = 'pending'", [order.id]);
    await client.query("UPDATE users SET is_premium = TRUE, premium_until = $2, updated_at = NOW() WHERE id = $1", [order.user_id, premiumUntil.toISOString()]);
    await client.query("UPDATE sepay_webhook_events SET processed = TRUE, order_id = $2 WHERE sepay_id = $1", [sepayId, order.id]);
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

async function markWebhookProcessed(sepayId, orderId) {
  await query(
    `UPDATE sepay_webhook_events
     SET processed = TRUE, order_id = COALESCE($2, order_id)
     WHERE sepay_id = $1`,
    [sepayId, orderId],
  );
}

async function route(req) {
  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/\.netlify\/functions\/api/, "/api");
  const body = await readBody(req);

  if (req.method === "POST" && path === "/api/register") return register(body);
  if (req.method === "POST" && path === "/api/login") return login(body);
  if (req.method === "POST" && path === "/api/listening/pronunciation-assessment") return assessListeningPronunciation(body);
  const ownAvatarMatch = path.match(/^\/api\/users\/([^/]+)\/avatar$/);
  if (ownAvatarMatch && req.method === "PATCH") return updateOwnAvatar(req, decodeURIComponent(ownAvatarMatch[1]), body);
  const ownPasswordMatch = path.match(/^\/api\/users\/([^/]+)\/password$/);
  if (ownPasswordMatch && req.method === "PATCH") return changeOwnPassword(req, decodeURIComponent(ownPasswordMatch[1]), body);
  const emailVerificationSendMatch = path.match(/^\/api\/users\/([^/]+)\/email-verification\/send$/);
  if (emailVerificationSendMatch && req.method === "POST") return sendEmailVerificationCode(req, decodeURIComponent(emailVerificationSendMatch[1]));
  const emailVerificationConfirmMatch = path.match(/^\/api\/users\/([^/]+)\/email-verification\/confirm$/);
  if (emailVerificationConfirmMatch && req.method === "POST") return confirmEmailVerificationCode(req, decodeURIComponent(emailVerificationConfirmMatch[1]), body);
  const ownReminderMatch = path.match(/^\/api\/users\/([^/]+)\/reminder-settings$/);
  if (ownReminderMatch && req.method === "PATCH") return updateOwnReminderSettings(req, decodeURIComponent(ownReminderMatch[1]), body);
  const ownProfileMatch = path.match(/^\/api\/users\/([^/]+)\/profile$/);
  if (ownProfileMatch && req.method === "PATCH") return updateOwnProfile(req, decodeURIComponent(ownProfileMatch[1]), body);
  if (req.method === "GET" && path === "/api/admin/users") return listUsers(req);
  if (req.method === "POST" && path === "/api/admin/users") return createUser(req, body);
  const adminUserMatch = path.match(/^\/api\/admin\/users\/([^/]+)$/);
  if (adminUserMatch && req.method === "PATCH") return updateUser(req, decodeURIComponent(adminUserMatch[1]), body);
  if (adminUserMatch && req.method === "DELETE") return deleteUser(req, decodeURIComponent(adminUserMatch[1]));
  if (req.method === "GET" && path === "/api/admin/plans/stats") return getAdminPlanStats(req);
  if (req.method === "GET" && path === "/api/admin/plans") return listAdminPlans(req);
  if (req.method === "POST" && path === "/api/admin/plans") return createAdminPlan(req, body);
  const adminPlanMatch = path.match(/^\/api\/admin\/plans\/([^/]+)$/);
  if (adminPlanMatch && req.method === "PATCH") return updateAdminPlan(req, decodeURIComponent(adminPlanMatch[1]), body);
  if (adminPlanMatch && req.method === "DELETE") return deleteAdminPlan(req, decodeURIComponent(adminPlanMatch[1]));
  if (req.method === "GET" && path === "/api/content/hsk-locks") return getPublicHskLocks();
  if (req.method === "GET" && path === "/api/content/daily-locks") return getPublicDailyLocks();
  if (req.method === "GET" && path === "/api/content/hsk-level-covers") return getPublicHskLevelCovers();
  if (req.method === "GET" && path === "/api/admin/content/hsk-locks") return listAdminHskLocks(req);
  if (req.method === "PUT" && path === "/api/admin/content/hsk-locks") return saveAdminHskLocks(req, body);
  if (req.method === "GET" && path === "/api/admin/content/hsk-level-covers") return listAdminHskLevelCovers(req);
  if (req.method === "PUT" && path === "/api/admin/content/hsk-level-covers") return saveAdminHskLevelCovers(req, body);
  if (req.method === "GET" && path === "/api/admin/content/daily-locks") return listAdminDailyLocks(req);
  if (req.method === "PUT" && path === "/api/admin/content/daily-locks") return saveAdminDailyLocks(req, body);
  if (req.method === "GET" && path === "/api/payments/plans") return listPlans();
  if (req.method === "POST" && path === "/api/payments/orders") return createOrder(body);
  const orderStatusMatch = path.match(/^\/api\/payments\/orders\/([^/]+)\/status$/);
  if (orderStatusMatch && req.method === "GET") return orderStatus(decodeURIComponent(orderStatusMatch[1]), url.searchParams.get("userId") || undefined);
  if (req.method === "POST" && path === "/api/webhooks/sepay") return handleSepayWebhook(req, body);
  throw apiError("API route không tồn tại.", 404);
}

export default async function handler(req) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204 });
  try {
    return await route(req);
  } catch (error) {
    console.error(error);
    return json(error.payload || { error: error.message || "Lỗi server." }, error.status || 500);
  }
}

export const config = {
  path: "/api/*",
};
