import crypto from "node:crypto";
import net from "node:net";
import tls from "node:tls";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
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
  { id: "3d", months: 3, durationUnit: "days", amount: 29000, nameVi: "Gói VIP 3 ngày", nameZh: "3天 VIP" },
  { id: "30d", months: 30, durationUnit: "days", amount: 129000, nameVi: "Gói VIP 1 tháng", nameZh: "1个月 VIP" },
  { id: "90d", months: 90, durationUnit: "days", amount: 329000, nameVi: "Gói VIP 3 tháng", nameZh: "3个月 VIP" },
];

const SEEDED_STAFF_EMAILS = ["kamini01@gmail.com", "theanh.tuyendung3332@gmail.com"];
const HOME_COIN_TASK_REWARDS = {
  vocab: 10,
  listening: 15,
  write: 15,
};
const HOME_DAILY_EXP_REWARDS = {
  exp_10: 10,
  exp_20: 10,
  exp_30: 10,
};
const HOME_DAILY_EXP_SOURCES = Object.keys(HOME_DAILY_EXP_REWARDS);
const HOME_DAILY_EXP_STEP_SECONDS = 10 * 60;
const HOME_COIN_TASK_REQUIREMENTS = {
  vocab: { progressKey: "savedVocabCount", minimum: 20 },
  listening: { progressKey: "listenSeconds", minimum: 30 * 60 },
  write: { progressKey: "writeSeconds", minimum: 30 * 60 },
};
const HOME_COIN_TIME_ZONE = "Asia/Ho_Chi_Minh";

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
  if (env("OPENAI_API_KEY")) return "openai";
  const hasIflytek = Boolean(env("IFLYTEK_APP_ID") && env("IFLYTEK_API_KEY") && env("IFLYTEK_API_SECRET"));
  return hasIflytek ? "iflytek" : "";
}

function publicPronunciationAssessmentError(provider = "") {
  if (provider === "openai") {
    return "He thong cham noi theo dang can cau hinh lai OpenAI API key. Vui long thu lai sau.";
  }
  return "Khong cham duoc phat am. Vui long thu lai sau.";
}

function clampScore(value, fallback = 0) {
  const score = Number(value);
  if (!Number.isFinite(score)) return fallback;
  return Math.max(0, Math.min(100, Math.round(score)));
}

function audioFileName(mimeType = "") {
  if (/wav/i.test(mimeType)) return "recording.wav";
  if (/mpeg|mp3/i.test(mimeType)) return "recording.mp3";
  if (/mp4|m4a/i.test(mimeType)) return "recording.m4a";
  if (/ogg/i.test(mimeType)) return "recording.ogg";
  if (/webm/i.test(mimeType)) return "recording.webm";
  return "recording.wav";
}

function openAiHeaders(jsonBody = true) {
  const headers = {
    Authorization: `Bearer ${env("OPENAI_API_KEY")}`,
  };
  if (jsonBody) headers["Content-Type"] = "application/json";
  return headers;
}

async function openAiJson(url, init) {
  const response = await fetch(url, init);
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }
  if (!response.ok) {
    const message = data?.error?.message || data?.message || `OpenAI request failed (${response.status})`;
    throw apiError({
      error: message,
      code: "openai_request_failed",
      provider: "openai",
      providerCode: response.status,
    }, 502);
  }
  return data;
}

async function transcribeWithOpenAi(audioBuffer, mimeType = "") {
  const formData = new FormData();
  const audioBytes = new Uint8Array(audioBuffer.length);
  audioBytes.set(audioBuffer);
  const audioBlob = new Blob([audioBytes], { type: mimeType || "audio/wav" });
  formData.append("file", audioBlob, audioFileName(mimeType));
  formData.append("model", env("OPENAI_TRANSCRIBE_MODEL") || "gpt-4o-mini-transcribe");
  formData.append("language", env("OPENAI_TRANSCRIBE_LANGUAGE") || "zh");
  formData.append("response_format", "text");

  const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: openAiHeaders(false),
    body: formData,
  });
  const text = await response.text();
  if (!response.ok) {
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = { raw: text };
    }
    throw apiError({
      error: data?.error?.message || data?.message || `OpenAI request failed (${response.status})`,
      code: "openai_request_failed",
      provider: "openai",
      providerCode: response.status,
    }, 502);
  }
  return text.trim();
}

function responseOutputText(data) {
  if (typeof data?.output_text === "string") return data.output_text;
  const pieces = [];
  for (const output of data?.output || []) {
    for (const content of output?.content || []) {
      if (typeof content?.text === "string") pieces.push(content.text);
    }
  }
  return pieces.join("\n").trim();
}

function parseOpenAiScore(data) {
  const text = responseOutputText(data);
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return {};
    try {
      return JSON.parse(match[0]);
    } catch {
      return {};
    }
  }
}

async function scoreWithOpenAi(referenceText, recognizedText, pinyin) {
  const schema = {
    type: "object",
    additionalProperties: false,
    properties: {
      score: { type: "number", minimum: 0, maximum: 100 },
      accuracyScore: { type: "number", minimum: 0, maximum: 100 },
      fluencyScore: { type: "number", minimum: 0, maximum: 100 },
      completenessScore: { type: "number", minimum: 0, maximum: 100 },
      feedback: { type: "string" },
      mistakes: {
        type: "array",
        items: { type: "string" },
      },
    },
    required: ["score", "accuracyScore", "fluencyScore", "completenessScore", "feedback", "mistakes"],
  };

  const data = await openAiJson("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: openAiHeaders(),
    body: JSON.stringify({
      model: env("OPENAI_ASSESSMENT_MODEL") || "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: "You grade Mandarin sentence pronunciation from a speech transcript. Return strict JSON only. Be fair: minor punctuation or spacing differences should not hurt the score. Penalize missing, extra, or wrong Chinese characters. Use Vietnamese feedback.",
        },
        {
          role: "user",
          content: JSON.stringify({
            referenceText,
            referencePinyin: pinyin,
            recognizedText,
            rubric: {
              score: "overall pronunciation score from 0 to 100",
              accuracyScore: "how closely recognized Chinese text matches the reference",
              fluencyScore: "estimated fluency from transcript completeness and naturalness",
              completenessScore: "how complete the spoken sentence is",
            },
          }),
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "pronunciation_assessment",
          strict: true,
          schema,
        },
      },
    }),
  });
  return parseOpenAiScore(data);
}

async function assessWithOpenAi(referenceText, audioBuffer, mimeType = "", pinyin = "") {
  const recognizedText = await transcribeWithOpenAi(audioBuffer, mimeType);
  const fallback = comparePronunciationFallback(referenceText, recognizedText);
  const score = clampScore(fallback.score);
  const accuracyScore = score;
  const fluencyScore = score;
  const completenessScore = score;
  const charResults = fallback.charResults.map((item) => ({
    ...item,
    errorType: item.correct ? "None" : "Mismatch",
    accuracyScore: item.correct ? 100 : 0,
  }));

  return {
    provider: "openai",
    assessmentMode: "stt_compare",
    recognizedText,
    score,
    accuracyScore,
    fluencyScore,
    completenessScore,
    feedback: fastCompareFeedback(score, recognizedText),
    mistakes: fastCompareMistakes(score),
    words: [],
    charResults,
  };
}

function fastCompareFeedback(score, recognizedText) {
  if (!recognizedText) return "Chưa nhận diện được giọng nói. Hãy thử nói rõ và gần micro hơn.";
  if (score >= 90) return "Bạn nói rất sát câu gốc.";
  if (score >= 70) return "Bạn nói khá đúng, còn một vài chữ chưa khớp với câu gốc.";
  if (score >= 40) return "Bạn nói đúng một phần câu, cần luyện lại các chữ bị thiếu hoặc sai.";
  return "Câu nói khác khá nhiều so với câu gốc. Hãy nghe lại và nói chậm hơn.";
}

function fastCompareMistakes(score) {
  if (score >= 90) return [];
  if (score >= 70) return ["Một vài chữ chưa khớp với câu gốc"];
  if (score >= 40) return ["Thiếu hoặc sai nhiều chữ trong câu gốc"];
  return ["Câu nhận diện khác nhiều so với câu gốc"];
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

  let result;
  try {
    result = provider === "openai"
      ? await assessWithOpenAi(referenceText, audioBuffer, String(body.mimeType || ""), String(body.pinyin || ""))
      : await assessWithIflytek(referenceText, audioBuffer);
  } catch (error) {
    console.error("Pronunciation assessment failed", {
      provider,
      message: error?.message || error,
      status: error?.status,
      payload: error?.payload,
    });
    throw apiError({
      error: publicPronunciationAssessmentError(provider),
      code: "speech_assessment_failed",
      provider,
    }, error?.status || 502);
  }
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

async function ensureCoinTransactionSchema(db) {
  await db.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
  await db.query(`
    CREATE TABLE IF NOT EXISTS coin_transactions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      source TEXT NOT NULL,
      period_key TEXT NOT NULL,
      amount INTEGER NOT NULL CHECK (amount > 0),
      metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  await db.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_coin_transactions_unique_claim
    ON coin_transactions(user_id, source, period_key);
  `);
  await db.query(`
    CREATE INDEX IF NOT EXISTS idx_coin_transactions_user_created
    ON coin_transactions(user_id, created_at DESC);
  `);
  await db.query(`
    CREATE INDEX IF NOT EXISTS idx_coin_transactions_created
    ON coin_transactions(created_at DESC);
  `);
}

async function ensureSafeSchemaMigrations(db) {
  await db.query("ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS partner_code TEXT;");
  await db.query("ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS password_reset_code_hash TEXT;");
  await db.query("ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS password_reset_expires_at TIMESTAMPTZ;");
  await db.query("ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS vip_plan_id TEXT;");
  await db.query(`
    DO $$
    BEGIN
      IF to_regclass('public.users') IS NOT NULL THEN
        CREATE UNIQUE INDEX IF NOT EXISTS idx_users_partner_code_unique
        ON users (lower(btrim(partner_code)))
        WHERE partner_code IS NOT NULL AND btrim(partner_code) <> '';
      END IF;
    END $$;
  `);
  await ensureCoinTransactionSchema(db);
  await seedStaffAccounts(db);
}

async function seedStaffAccounts(db) {
  const table = await db.query("SELECT to_regclass('public.users') AS table_name;");
  if (!table.rows[0]?.table_name) return;
  await db.query(
    `UPDATE users
     SET role = 'staff',
         updated_at = NOW()
     WHERE lower(email) = ANY($1::text[])
       AND role <> 'admin'
       AND role <> 'staff'`,
    [SEEDED_STAFF_EMAILS],
  );
}

async function ensureSchema() {
  if (schemaReady) return schemaReady;
  schemaReady = (async () => {
    const db = getPool();
    await ensureSafeSchemaMigrations(db);
    if (isProduction() && !isEnabled("ENABLE_DB_SCHEMA_INIT")) {
      console.warn("Database schema initialization skipped in production.");
      return;
    }
    await db.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user',
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        current_level TEXT NOT NULL DEFAULT 'HSK2',
        avatar_url TEXT,
        is_premium BOOLEAN NOT NULL DEFAULT FALSE,
        premium_until TIMESTAMPTZ,
        vip_plan_id TEXT,
        daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE,
        daily_reminder_last_sent_on DATE,
        email_verified_at TIMESTAMPTZ,
        email_verification_code_hash TEXT,
        email_verification_expires_at TIMESTAMPTZ,
        password_reset_code_hash TEXT,
        password_reset_expires_at TIMESTAMPTZ,
        ref TEXT,
        partner_code TEXT,
        src TEXT,
        vip INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        last_login_at TIMESTAMPTZ
      );
    `);
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS current_level TEXT NOT NULL DEFAULT 'HSK2';");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar_url TEXT;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT FALSE;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS premium_until TIMESTAMPTZ;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS vip_plan_id TEXT;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS vip_trial_used BOOLEAN NOT NULL DEFAULT FALSE;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS daily_reminder_last_sent_on DATE;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verified_at TIMESTAMPTZ;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verification_code_hash TEXT;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verification_expires_at TIMESTAMPTZ;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS password_reset_code_hash TEXT;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS password_reset_expires_at TIMESTAMPTZ;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS ref TEXT;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS partner_code TEXT;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS src TEXT;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS vip INTEGER NOT NULL DEFAULT 0;");
    await db.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS idx_users_partner_code_unique
      ON users (lower(btrim(partner_code)))
      WHERE partner_code IS NOT NULL AND btrim(partner_code) <> '';
    `);
    await seedStaffAccounts(db);
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
        `INSERT INTO payment_plans (id, months, duration_unit, amount, name_vi, name_zh, is_active, sort_order)
         VALUES ($1, $2, $3, $4, $5, $6, TRUE, $7)
         ON CONFLICT (id) DO UPDATE SET
           months = EXCLUDED.months,
           duration_unit = EXCLUDED.duration_unit,
           amount = EXCLUDED.amount,
           name_vi = EXCLUDED.name_vi,
           name_zh = EXCLUDED.name_zh,
           is_active = EXCLUDED.is_active,
           sort_order = EXCLUDED.sort_order,
           updated_at = NOW()`,
        [plan.id, plan.months, plan.durationUnit, plan.amount, plan.nameVi, plan.nameZh, index + 1],
      );
    }
    await db.query(`
      UPDATE payment_plans
      SET is_active = FALSE,
          updated_at = NOW()
      WHERE id = '7d';
    `);
    await db.query(`
      UPDATE users
      SET vip_trial_used = TRUE,
          vip_plan_id = CASE WHEN lower(coalesce(vip_plan_id, '')) = '7d' THEN '3d' ELSE vip_plan_id END,
          updated_at = NOW()
      WHERE EXISTS (
        SELECT 1
        FROM payment_orders
        WHERE payment_orders.user_id = users.id
          AND payment_orders.status = 'paid'
          AND lower(payment_orders.plan_id) IN ('3d', '7d')
      );
    `);
    await db.query(`
      WITH first_trial AS (
        SELECT DISTINCT ON (user_id)
               user_id,
               paid_at
        FROM payment_orders
        WHERE status = 'paid'
          AND paid_at IS NOT NULL
          AND lower(plan_id) IN ('3d', '7d')
        ORDER BY user_id, paid_at ASC
      )
      UPDATE users
      SET premium_until = first_trial.paid_at + interval '3 days',
          updated_at = NOW()
      FROM first_trial
      WHERE users.id = first_trial.user_id
        AND lower(coalesce(users.vip_plan_id, '')) IN ('3d', '7d')
        AND users.premium_until IS NOT NULL
        AND users.premium_until > first_trial.paid_at + interval '3 days';
    `);
    await db.query(`
      UPDATE users
      SET vip_plan_id = '3d',
          updated_at = NOW()
      WHERE lower(coalesce(vip_plan_id, '')) = '7d';
    `);
    await db.query(`
      UPDATE payment_orders
      SET plan_id = '3d'
      WHERE lower(plan_id) = '7d';
    `);
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
      ALTER TABLE hsk_lesson_locks
      ADD COLUMN IF NOT EXISTS free_word_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await db.query(`
      ALTER TABLE hsk_lesson_locks
      ADD COLUMN IF NOT EXISTS free_sentence_limit INTEGER NOT NULL DEFAULT 0;
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
      ALTER TABLE daily_theme_locks
      ADD COLUMN IF NOT EXISTS free_word_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await db.query(`
      ALTER TABLE daily_theme_locks
      ADD COLUMN IF NOT EXISTS free_sentence_limit INTEGER NOT NULL DEFAULT 0;
    `);
    await db.query(`
      CREATE TABLE IF NOT EXISTS listening_topic_locks (
        topic_id TEXT PRIMARY KEY,
        title_vi TEXT NOT NULL DEFAULT '',
        sort_order INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS listening_lesson_locks (
        lesson_id TEXT PRIMARY KEY,
        topic_id TEXT NOT NULL DEFAULT '',
        title_vi TEXT NOT NULL DEFAULT '',
        sort_order INTEGER NOT NULL DEFAULT 0,
        locked_for_free BOOLEAN NOT NULL DEFAULT FALSE,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await db.query(`
      CREATE TABLE IF NOT EXISTS hsk_level_covers (
        level TEXT PRIMARY KEY,
        cover_url TEXT NOT NULL DEFAULT '',
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await db.query(`
      CREATE TABLE IF NOT EXISTS learning_events (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES users(id) ON DELETE SET NULL,
        event_type TEXT NOT NULL,
        module TEXT,
        level TEXT,
        lesson_id TEXT,
        topic_id TEXT,
        question_id TEXT,
        is_correct BOOLEAN,
        source TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await db.query(`CREATE INDEX IF NOT EXISTS idx_learning_events_created_at ON learning_events(created_at);`);
    await db.query(`CREATE INDEX IF NOT EXISTS idx_learning_events_type_created ON learning_events(event_type, created_at);`);
    await db.query(`CREATE INDEX IF NOT EXISTS idx_learning_events_lesson ON learning_events(lesson_id);`);
    await db.query(`CREATE INDEX IF NOT EXISTS idx_learning_events_source ON learning_events(source);`);
    await db.query(`CREATE INDEX IF NOT EXISTS idx_learning_events_user ON learning_events(user_id);`);
    await db.query(`
      CREATE TABLE IF NOT EXISTS coin_transactions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        source TEXT NOT NULL,
        period_key TEXT NOT NULL,
        amount INTEGER NOT NULL CHECK (amount > 0),
        metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    await db.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS idx_coin_transactions_unique_claim
      ON coin_transactions(user_id, source, period_key);
    `);
    await db.query(`
      CREATE INDEX IF NOT EXISTS idx_coin_transactions_user_created
      ON coin_transactions(user_id, created_at DESC);
    `);
    await db.query(`
      CREATE INDEX IF NOT EXISTS idx_coin_transactions_created
      ON coin_transactions(created_at DESC);
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
  const vipPlanId = isPremium ? normalizeVipPlanId(row.vip_plan_id) : null;
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    role: normalizePublicRole(row.role),
    ref: row.ref || "",
    partnerCode: row.partner_code || "",
    src: row.src || "",
    isActive: row.is_active,
    currentLevel: row.current_level || "HSK2",
    avatarUrl: row.avatar_url || "",
    isPremium,
    plan: isPremium ? (vipPlanId || "PREMIUM") : "FREE",
    vipPlan: isPremium ? (vipPlanId || "PREMIUM") : "FREE",
    vipPlanId,
    vipPlanName: vipPlanName(vipPlanId, "vi"),
    vipPlanNameZh: vipPlanName(vipPlanId, "zh"),
    vipTrialUsed: Boolean(row.vip_trial_used),
    vipStatus: isPremium ? "active" : "inactive",
    vipExpiresAt: row.premium_until || null,
    vipRemainingDays: isPremium ? vipRemainingDays(premiumUntil) : 0,
    vip: Number(row.vip || 0),
    premiumUntil: row.premium_until || null,
    dailyReminderEnabled: row.daily_reminder_enabled !== false,
    emailVerified: Boolean(row.email_verified_at),
    emailVerifiedAt: row.email_verified_at || null,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    lastLoginAt: row.last_login_at,
  };
}

function vipRemainingDays(premiumUntil) {
  if (!premiumUntil) return 0;
  const remainingMs = premiumUntil.getTime() - Date.now();
  return remainingMs > 0 ? Math.ceil(remainingMs / 86400000) : 0;
}

function normalizeVipPlanId(planId) {
  const normalized = String(planId || "").trim().toLowerCase();
  if (normalized === "3d" || normalized === "7d") return "3d";
  if (normalized === "30d") return "30d";
  if (normalized === "90d" || normalized === "3m") return "90d";
  return normalized || null;
}

function vipPlanName(planId, lang) {
  if (planId === "3d") return lang === "zh" ? "3天VIP" : "VIP 3 ngày";
  if (planId === "30d") return lang === "zh" ? "30天VIP" : "VIP 30 ngày";
  if (planId === "90d") return lang === "zh" ? "90天VIP" : "VIP 3 tháng";
  return null;
}

function normalizePaymentPlanId(planId) {
  const normalized = String(planId || "").trim().toLowerCase();
  if (normalized === "7d") return "3d";
  if (normalized === "1m") return "30d";
  if (normalized === "3m") return "90d";
  return normalized;
}

function defaultPaymentPlan(planId) {
  return DEFAULT_PAYMENT_PLANS.find((plan) => plan.id === planId) || null;
}

function normalizePublicRole(role) {
  const normalized = String(role || "").trim().toLowerCase();
  if (normalized === "admin") return "admin";
  if (normalized === "sales" || normalized === "koc") return "sales";
  if (normalized === "staff" || normalized === "employee") return "staff";
  if (normalized === "ctv") return "ctv";
  if (normalized === "content" || normalized === "content_manager") return "content";
  return "user";
}

function normalizeUuid(value) {
  const normalized = String(value || "").trim();
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(normalized)
    ? normalized
    : "";
}

function getVietnamDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: HOME_COIN_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${lookup.year}-${lookup.month}-${lookup.day}`;
}

function normalizeCoinSource(source) {
  const normalized = String(source || "").trim().toLowerCase().replace(/^daily[-_:]/, "").replace(/-/g, "_");
  if (Object.prototype.hasOwnProperty.call(HOME_COIN_TASK_REWARDS, normalized)) return normalized;
  if (Object.prototype.hasOwnProperty.call(HOME_DAILY_EXP_REWARDS, normalized)) return normalized;
  return "";
}

function isDailyExpSource(source) {
  return Object.prototype.hasOwnProperty.call(HOME_DAILY_EXP_REWARDS, source);
}

function areDailyCoinTasksComplete(progress = {}) {
  return Object.keys(HOME_COIN_TASK_REQUIREMENTS).every((source) => {
    const requirement = HOME_COIN_TASK_REQUIREMENTS[source];
    return Number(progress?.[requirement.progressKey] || 0) >= requirement.minimum;
  });
}

function getExtraStudySeconds(progress = {}) {
  const fallback = Number(progress?.listenSeconds || 0) + Number(progress?.writeSeconds || 0) - (2 * 30 * 60);
  return Math.max(0, Math.floor(Number(progress?.extraStudySeconds ?? fallback) || 0));
}

function isCoinClaimProgressEligible(source, progress = {}) {
  if (isDailyExpSource(source)) {
    const tier = Math.max(1, Number(String(source).replace("exp_", "")) / 10 || 1);
    return areDailyCoinTasksComplete(progress) && getExtraStudySeconds(progress) >= tier * HOME_DAILY_EXP_STEP_SECONDS;
  }
  const requirement = HOME_COIN_TASK_REQUIREMENTS[source];
  if (!requirement) return false;
  return Number(progress?.[requirement.progressKey] || 0) >= requirement.minimum;
}

function rewardAmountForCoinSource(source) {
  return isDailyExpSource(source) ? HOME_DAILY_EXP_REWARDS[source] : HOME_COIN_TASK_REWARDS[source];
}

function normalizeCoinPeriod(period) {
  return String(period || "").trim().toLowerCase() === "month" ? "month" : "week";
}

function coinPeriodSql(period) {
  return period === "month"
    ? `date_trunc('month', timezone('${HOME_COIN_TIME_ZONE}', now())) AT TIME ZONE '${HOME_COIN_TIME_ZONE}'`
    : `date_trunc('week', timezone('${HOME_COIN_TIME_ZONE}', now())) AT TIME ZONE '${HOME_COIN_TIME_ZONE}'`;
}

function coinWalletFromRows(rows = []) {
  const getMetric = (period, key) => Number(rows.find((row) => row.period === period)?.[key] || 0);
  return {
    coins: getMetric("total", "coins"),
    exp: getMetric("total", "exp"),
    score: getMetric("total", "score"),
    weeklyCoins: getMetric("week", "coins"),
    weeklyExp: getMetric("week", "exp"),
    weeklyScore: getMetric("week", "score"),
    monthlyCoins: getMetric("month", "coins"),
    monthlyExp: getMetric("month", "exp"),
    monthlyScore: getMetric("month", "score"),
  };
}

function publicCoinEntry(row) {
  const displayName = row.full_name || row.email || "HuaMei learner";
  return {
    userId: row.user_id,
    displayName,
    avatarInitial: String(displayName || "H").trim().charAt(0).toUpperCase() || "H",
    avatarUrl: row.avatar_url || "",
    score: Number(row.score || 0),
    coins: Number(row.total_coins || row.coins || 0),
    exp: Number(row.total_exp || row.exp || 0),
    rank: Number(row.rank || 0),
    updatedAt: row.last_awarded_at || null,
  };
}

function normalizeEditableRole(role) {
  const normalized = normalizePublicRole(role);
  return ["user", "sales", "ctv", "content", "staff"].includes(normalized) ? normalized : "user";
}

function isEditableRoleValue(role) {
  const normalized = String(role || "").trim().toLowerCase();
  return ["user", "sales", "ctv", "content", "staff", "employee", "content_manager"].includes(normalized);
}

function normalizeReferralRef(ref) {
  const normalized = String(ref || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 64);
  return normalized || null;
}

function isPartnerRole(role) {
  return ["sales", "ctv", "staff"].includes(normalizePublicRole(role));
}

async function ensurePartnerCodes() {
  await query("ALTER TABLE users ADD COLUMN IF NOT EXISTS partner_code TEXT;");
  await query(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_users_partner_code_unique
    ON users (lower(btrim(partner_code)))
    WHERE partner_code IS NOT NULL AND btrim(partner_code) <> '';
  `);
  await query(`
    WITH existing AS (
      SELECT COALESCE(MAX(partner_code::int), 0) AS max_code
      FROM users
      WHERE partner_code ~ '^[0-9]+$'
    ),
    missing AS (
      SELECT id, ROW_NUMBER() OVER (ORDER BY created_at DESC, updated_at ASC, id ASC) AS rn
      FROM users
      WHERE role IN ('ctv', 'sales', 'koc')
        AND (partner_code IS NULL OR btrim(partner_code) = '')
    )
    UPDATE public.users u
    SET partner_code = (existing.max_code + missing.rn)::text,
        updated_at = NOW()
    FROM missing, existing
    WHERE u.id = missing.id;
  `);
}

function getPartnerReferralSeed(user) {
  const emailLocal = String(user?.email || "").split("@")[0];
  return normalizeReferralRef(emailLocal) || normalizeReferralRef(user?.full_name) || "ctv";
}

async function findPartnerReferralOwner(ref, userId) {
  if (!ref) return null;
  const duplicate = await query(
    `SELECT id, full_name, email
     FROM users
     WHERE lower(btrim(ref)) = $1
       AND id <> $2
       AND role IN ('ctv', 'staff', 'employee', 'sales', 'koc')
     LIMIT 1`,
    [ref, userId],
  );
  return duplicate.rows[0] || null;
}

async function getUniquePartnerReferralRef(user) {
  const seed = getPartnerReferralSeed(user);
  for (let index = 0; index < 100; index += 1) {
    const suffix = index === 0 ? "" : String(index + 1);
    const base = seed.slice(0, Math.max(1, 64 - suffix.length));
    const candidate = `${base}${suffix}`;
    const owner = await findPartnerReferralOwner(candidate, user.id);
    if (!owner) return candidate;
  }
  throw apiError("Khong the tao ma ref rieng khong trung cho tai khoan nay.", 409);
}

async function getReferralRefForRoleChange(currentUser, nextRole) {
  const nextIsPartner = isPartnerRole(nextRole);
  const currentIsPartner = isPartnerRole(currentUser?.role);
  if (!nextIsPartner) return { shouldSetRef: false, ref: null };

  const currentRef = normalizeReferralRef(currentUser?.ref);
  const shouldGenerateOwnRef = !currentIsPartner || !currentRef || Boolean(await findPartnerReferralOwner(currentRef, currentUser.id));
  if (!shouldGenerateOwnRef) return { shouldSetRef: false, ref: currentRef };

  return {
    shouldSetRef: true,
    ref: await getUniquePartnerReferralRef(currentUser),
  };
}

function normalizeSource(source) {
  const normalized = String(source || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 40);
  return normalized || null;
}

function referralSourceFromPrefix(prefix) {
  const normalized = String(prefix || "").trim().toUpperCase();
  if (normalized === "F") return "facebook";
  if (normalized === "T") return "tiktok";
  if (normalized === "K") return "koc";
  if (normalized === "L") return "ctv_livestream";
  return null;
}

async function resolveReferralAttribution(ref, src) {
  const normalizedRef = normalizeReferralRef(ref);
  const normalizedSource = normalizeSource(src);
  if (!normalizedRef) return { ref: null, src: normalizedSource };

  const shortCodeMatch = normalizedRef.match(/^([ftkl])?([0-9]+)$/i);
  if (!shortCodeMatch) return { ref: normalizedRef, src: normalizedSource };

  const [, prefix = "", partnerCode] = shortCodeMatch;
  const sourceFromPrefix = referralSourceFromPrefix(prefix);
  const owner = await query(
    `SELECT ref
     FROM users
     WHERE lower(btrim(partner_code)) = $1
       AND role IN ('ctv', 'sales', 'koc')
     ORDER BY created_at DESC
     LIMIT 1`,
    [partnerCode],
  );
  const ownerRef = normalizeReferralRef(owner.rows[0]?.ref);
  return {
    ref: ownerRef || partnerCode,
    src: normalizedSource || sourceFromPrefix,
  };
}

function formatVnd(amount) {
  return `${amount.toLocaleString("vi-VN")}đ`;
}

async function getPlanById(planId) {
  const normalizedPlanId = normalizePaymentPlanId(planId);
  const result = await query(
    `SELECT id, months, duration_unit, amount, name_vi, name_zh
     FROM payment_plans
     WHERE id = $1`,
    [normalizedPlanId],
  );
  const row = result.rows[0];
  if (!row) return defaultPaymentPlan(normalizedPlanId);
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
  const normalizedPlanId = normalizePaymentPlanId(planId);
  const result = await query(
    `SELECT id, months, duration_unit, amount, name_vi, name_zh
     FROM payment_plans
     WHERE id = $1 AND is_active = TRUE`,
    [normalizedPlanId],
  );
  const row = result.rows[0];
  if (!row) return defaultPaymentPlan(normalizedPlanId);
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

function sepayApiConfig() {
  return {
    token: env("SEPAY_API_TOKEN") || env("SEPAY_USER_API_TOKEN"),
    baseUrl: env("SEPAY_API_BASE_URL") || "https://userapi.sepay.vn/v2",
  };
}

function parseSepayTransactionDate(value) {
  const normalized = String(value || "").trim();
  if (!normalized) return null;

  const localMatch = normalized.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?/);
  if (localMatch) {
    const [, year, month, day, hour, minute, second = "00"] = localMatch;
    const parsed = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}+07:00`);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
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

async function getAdminRequester(req) {
  const userId = req.headers.get("x-admin-user-id");
  if (!userId) return null;
  if (!userId) throw apiError("Vui lòng đăng nhập bằng tài khoản admin.", 401);
  const result = await query("SELECT role, is_active FROM users WHERE id = $1", [userId]);
  const user = result.rows[0];
  if (user?.is_active !== true) return null;
  return { id: userId, role: normalizePublicRole(user.role) };
  if (user?.role !== "admin" || user?.is_active !== true) {
    throw apiError("Vui lòng đăng nhập bằng tài khoản admin.", 401);
  }
}

async function assertAdmin(req) {
  const requester = await getAdminRequester(req);
  if (!requester || requester.role !== "admin") {
    throw apiError("Vui lÃ²ng Ä‘Äƒng nháº­p báº±ng tÃ i khoáº£n admin.", 401);
  }
  return requester;
}

async function assertAdminOrStaff(req) {
  const requester = await getAdminRequester(req);
  if (!requester || !["admin", "staff"].includes(requester.role)) {
    throw apiError("Vui lÃ²ng Ä‘Äƒng nháº­p báº±ng tÃ i khoáº£n admin.", 401);
  }
  return requester;
}

async function getCoinRequester(req) {
  const userId = normalizeUuid(req.headers.get("x-user-id"));
  if (!userId) return null;
  const result = await query(
    "SELECT id, full_name, email, avatar_url, is_active FROM users WHERE id = $1",
    [userId],
  );
  const user = result.rows[0];
  return user?.is_active === true ? user : null;
}

async function getCoinWallet(userId) {
  const result = await query(
    `SELECT period,
            COALESCE(SUM(CASE WHEN source = ANY($2::text[]) THEN 0 ELSE amount END), 0)::int AS coins,
            COALESCE(SUM(CASE WHEN source = ANY($2::text[]) THEN amount ELSE 0 END), 0)::int AS exp,
            COALESCE(SUM(amount), 0)::int AS score
     FROM (
       SELECT 'total' AS period, source, amount
       FROM coin_transactions
       WHERE user_id = $1
       UNION ALL
       SELECT 'week' AS period, source, amount
       FROM coin_transactions
       WHERE user_id = $1
         AND created_at >= ${coinPeriodSql("week")}
       UNION ALL
       SELECT 'month' AS period, source, amount
       FROM coin_transactions
       WHERE user_id = $1
         AND created_at >= ${coinPeriodSql("month")}
     ) scoped
     GROUP BY period`,
    [userId, HOME_DAILY_EXP_SOURCES],
  );
  return coinWalletFromRows(result.rows);
}

async function getTodayCoinClaims(userId) {
  const periodKey = `daily:${getVietnamDateKey()}`;
  const result = await query(
    `SELECT source, amount, created_at
     FROM coin_transactions
     WHERE user_id = $1
       AND period_key = $2
       AND source = ANY($3::text[])
     ORDER BY created_at ASC`,
    [userId, periodKey, [...Object.keys(HOME_COIN_TASK_REWARDS), ...HOME_DAILY_EXP_SOURCES]],
  );
  return {
    periodKey,
    claimedSources: result.rows.map((row) => row.source),
    claims: result.rows.map((row) => ({
      source: row.source,
      amount: Number(row.amount || 0),
      createdAt: row.created_at,
    })),
  };
}

async function getCoinSummary(req) {
  const requester = await getCoinRequester(req);
  if (!requester) throw apiError("Vui long dang nhap de dung xu HuaMei.", 401);
  const wallet = await getCoinWallet(requester.id);
  const today = await getTodayCoinClaims(requester.id);
  return json({
    wallet,
    today,
    rewards: HOME_COIN_TASK_REWARDS,
    expRewards: HOME_DAILY_EXP_REWARDS,
    user: {
      id: requester.id,
      fullName: requester.full_name,
      email: requester.email,
      avatarUrl: requester.avatar_url || "",
    },
    generatedAt: new Date().toISOString(),
  });
}

async function claimHomeCoin(req, body) {
  const requester = await getCoinRequester(req);
  if (!requester) throw apiError("Vui long dang nhap de nhan xu.", 401);
  const source = normalizeCoinSource(body.source || body.taskId);
  if (!source) throw apiError("Nhiem vu nhan xu khong hop le.", 400);
  if (!isCoinClaimProgressEligible(source, body.progress)) throw apiError("Nhiem vu chua du dieu kien nhan xu.", 400);
  const amount = rewardAmountForCoinSource(source);
  const rewardType = isDailyExpSource(source) ? "exp" : "coin";
  const periodKey = `daily:${getVietnamDateKey()}`;
  const metadata = {
    claimedFrom: rewardType === "exp" ? "home_daily_exp_bonus" : "home_coin_hunt",
    rewardType,
    clientProgress: body.progress && typeof body.progress === "object" ? body.progress : null,
  };
  const inserted = await query(
    `INSERT INTO coin_transactions (user_id, source, period_key, amount, metadata)
     VALUES ($1, $2, $3, $4, $5::jsonb)
     ON CONFLICT (user_id, source, period_key) DO NOTHING
     RETURNING id, source, period_key, amount, created_at`,
    [requester.id, source, periodKey, amount, JSON.stringify(metadata)],
  );
  const wallet = await getCoinWallet(requester.id);
  const today = await getTodayCoinClaims(requester.id);
  return json({
    claimed: inserted.rowCount > 0,
    transaction: inserted.rows[0] ? {
      id: inserted.rows[0].id,
      source: inserted.rows[0].source,
      periodKey: inserted.rows[0].period_key,
      amount: Number(inserted.rows[0].amount || 0),
      rewardType,
      createdAt: inserted.rows[0].created_at,
    } : null,
    wallet,
    today,
    generatedAt: new Date().toISOString(),
  });
}

async function getCoinLeaderboard(req, searchParams) {
  const requester = await getCoinRequester(req);
  const currentUserId = requester?.id || null;
  const period = normalizeCoinPeriod(searchParams.get("period"));
  const limit = Math.max(1, Math.min(50, Number(searchParams.get("limit") || 10) || 10));
  const scopedStartSql = coinPeriodSql(period);
  const result = await query(
    `WITH period_scores AS (
       SELECT user_id,
              COALESCE(SUM(amount), 0)::int AS score,
              COALESCE(SUM(CASE WHEN source = ANY($3::text[]) THEN 0 ELSE amount END), 0)::int AS coins,
              COALESCE(SUM(CASE WHEN source = ANY($3::text[]) THEN amount ELSE 0 END), 0)::int AS exp,
              MAX(created_at) AS last_awarded_at
       FROM coin_transactions
       WHERE created_at >= ${scopedStartSql}
       GROUP BY user_id
     ),
     total_scores AS (
       SELECT user_id,
              COALESCE(SUM(CASE WHEN source = ANY($3::text[]) THEN 0 ELSE amount END), 0)::int AS total_coins,
              COALESCE(SUM(CASE WHEN source = ANY($3::text[]) THEN amount ELSE 0 END), 0)::int AS total_exp,
              COALESCE(SUM(amount), 0)::int AS total_score
       FROM coin_transactions
       GROUP BY user_id
     ),
     ranked AS (
       SELECT u.id AS user_id,
              u.full_name,
              u.email,
              u.avatar_url,
              COALESCE(ps.score, 0)::int AS score,
              COALESCE(ps.coins, 0)::int AS coins,
              COALESCE(ps.exp, 0)::int AS exp,
              COALESCE(ts.total_coins, 0)::int AS total_coins,
              COALESCE(ts.total_exp, 0)::int AS total_exp,
              COALESCE(ts.total_score, 0)::int AS total_score,
              ps.last_awarded_at,
              ROW_NUMBER() OVER (
                ORDER BY COALESCE(ps.score, 0) DESC,
                         ps.last_awarded_at ASC NULLS LAST,
                         lower(u.full_name) ASC
              ) AS rank
       FROM users u
       LEFT JOIN period_scores ps ON ps.user_id = u.id
       LEFT JOIN total_scores ts ON ts.user_id = u.id
       WHERE u.is_active = TRUE
     )
     SELECT *
     FROM ranked
     WHERE rank <= $2 OR user_id = $1::uuid
     ORDER BY rank ASC`,
    [currentUserId, limit, HOME_DAILY_EXP_SOURCES],
  );
  const entries = result.rows.map(publicCoinEntry);
  return json({
    period,
    entries: entries.filter((entry) => entry.rank <= limit),
    current: currentUserId ? entries.find((entry) => entry.userId === currentUserId) || null : null,
    generatedAt: new Date().toISOString(),
  });
}

async function register(body) {
  const fullName = String(body.fullName || body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const attribution = await resolveReferralAttribution(body.ref, body.src);
  if (fullName.length < 2) throw apiError("Vui lòng nhập họ và tên.", 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw apiError("Email không hợp lệ.", 400);
  if (password.length < 6) throw apiError("Mật khẩu cần tối thiểu 6 ký tự.", 400);

  try {
    const result = await query(
      `INSERT INTO users (full_name, email, password_hash, ref, src)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, full_name, email, role, ref, partner_code, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
      [fullName, email, hashPassword(password), attribution.ref, attribution.src],
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
     RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
    [user.id],
  );
  return json({ user: publicUser(updated.rows[0]) });
}

async function getCurrentUserStatus(req, id) {
  const requesterId = req.headers.get("x-user-id");
  if (!requesterId || requesterId !== id) {
    throw apiError("Báº¡n khÃ´ng cÃ³ quyá»n xem tráº¡ng thÃ¡i tÃ i khoáº£n nÃ y.", 403);
  }
  const result = await query("SELECT * FROM users WHERE id = $1", [id]);
  const user = result.rows[0];
  if (!user) throw apiError("KhÃ´ng tÃ¬m tháº¥y tÃ i khoáº£n.", 404);
  if (!user.is_active) throw apiError("TÃ i khoáº£n Ä‘Ã£ bá»‹ khÃ³a.", 403);
  return json({ user: publicUser(user) });
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
       RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
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
     RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
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
     RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
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

function passwordResetHash(userId, email, code) {
  const secret = env("PASSWORD_RESET_SECRET") || env("EMAIL_VERIFICATION_SECRET");
  if (isProduction() && !secret) {
    throw apiError("PASSWORD_RESET_SECRET or EMAIL_VERIFICATION_SECRET is required in production.", 503);
  }
  return crypto
    .createHash("sha256")
    .update(`${userId}:${email}:${code}:password-reset:${secret || "huamei-password-reset-dev"}`)
    .digest("hex");
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

async function sendSmtpEmail(to, subject, html) {
  const host = env("SMTP_HOST") || "smtp.gmail.com";
  const port = Number(env("SMTP_PORT") || 465);
  const user = String(env("SMTP_USER") || "").trim();
  const pass = smtpPassword(host, env("SMTP_PASS"));
  const from = env("SMTP_FROM") || (user ? `HuaMei <${user}>` : env("EMAIL_FROM"));
  if (!user || !pass || !from) throw apiError("SMTP_USER, SMTP_PASS and SMTP_FROM/EMAIL_FROM are required.", 503);

  const socket = tls.connect({ host, port, servername: host, rejectUnauthorized: env("SMTP_REJECT_UNAUTHORIZED") !== "false" });
  socket.setEncoding("utf8");
  try {
    await smtpCommand(socket, null, ["220"]);
    await smtpCommand(socket, `EHLO ${cleanEmailHeader(env("SMTP_HELO") || "localhost")}`, ["250"]);
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

async function sendTransactionalEmail(email, subject, html, logPrefix, code) {
  const deliveryMode = env("EMAIL_DELIVERY_MODE").trim().toLowerCase();
  if (deliveryMode === "dev") {
    if (isProduction()) {
      throw apiError("EMAIL_DELIVERY_MODE=dev is not allowed in production.", 503);
    }
    console.log(`[${logPrefix}] ${email}: ${code}`);
    return "dev";
  }

  if (env("SMTP_USER") && env("SMTP_PASS")) {
    try {
      await sendSmtpEmail(email, subject, html);
      return "sent";
    } catch (error) {
      console.warn(`[${logPrefix}] SMTP email failed:`, error instanceof Error ? error.message : error);
      throw apiError("Khong the gui email qua SMTP. Vui long kiem tra SMTP_USER, SMTP_PASS va SMTP_FROM.", 502);
    }
  }

  const resendApiKey = env("RESEND_API_KEY");
  const from = env("EMAIL_FROM") || "HuaMei <no-reply@huamei.vn>";
  if (!resendApiKey) {
    if (isProduction()) {
      throw apiError("Chưa cấu hình dịch vụ gửi email. Vui lòng cấu hình Gmail SMTP hoặc Resend.", 503);
    }
    console.log(`[${logPrefix}] ${email}: ${code}`);
    return "dev";
  }
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: email, subject, html }),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.warn(`[${logPrefix}] Resend email failed ${response.status}: ${detail.slice(0, 500)}`);
    throw apiError("Khong the gui email qua Resend. Vui long cau hinh SMTP_USER/SMTP_PASS hoac kiem tra RESEND_API_KEY va EMAIL_FROM.", 502);
  }
  return "sent";
}

async function sendVerificationEmail(email, code) {
  return sendTransactionalEmail(
    email,
    "Ma xac minh email HuaMei",
    `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2>Ma xac minh email HuaMei</h2>
          <p>Nhap ma ben duoi de xac minh email cua ban:</p>
          <p style="font-size:28px;font-weight:800;letter-spacing:6px">${code}</p>
          <p>Ma co hieu luc trong 10 phut.</p>
        </div>
      `,
    "email-verification",
    code,
  );
}

async function sendPasswordResetEmail(email, code) {
  return sendTransactionalEmail(
    email,
    "Ma dat lai mat khau HuaMei",
    `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2>Dat lai mat khau HuaMei</h2>
          <p>Nhap ma ben duoi de tao mat khau moi cho tai khoan cua ban:</p>
          <p style="font-size:28px;font-weight:800;letter-spacing:6px">${code}</p>
          <p>Ma co hieu luc trong 10 phut. Neu ban khong yeu cau, hay bo qua email nay.</p>
        </div>
      `,
    "password-reset",
    code,
  );
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
     RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
    [id],
  );
  return json({ ok: true, user: publicUser(updated.rows[0]) });
}

async function requestPasswordReset(body) {
  const email = String(body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw apiError("Email khong hop le.", 400);
  const current = await query("SELECT id, email, is_active FROM users WHERE email = $1", [email]);
  const user = current.rows[0];
  if (!user) throw apiError("Email nay chua co tai khoan.", 404);
  if (!user.is_active) throw apiError("Tai khoan da bi khoa.", 403);

  const code = String(crypto.randomInt(100000, 1000000));
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  await query(
    `UPDATE users
     SET password_reset_code_hash = $1,
         password_reset_expires_at = $2,
         updated_at = NOW()
     WHERE id = $3`,
    [passwordResetHash(user.id, user.email, code), expiresAt.toISOString(), user.id],
  );
  const delivery = await sendPasswordResetEmail(user.email, code);
  return json({
    ok: true,
    delivery,
    expiresAt: expiresAt.toISOString(),
    devCode: delivery === "dev" && env("NODE_ENV") !== "production" ? code : undefined,
  });
}

async function getPasswordResetUser(email, code) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const normalizedCode = String(code || "").replace(/\D/g, "");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) throw apiError("Email khong hop le.", 400);
  if (!/^\d{6}$/.test(normalizedCode)) throw apiError("Ma xac minh gom 6 chu so.", 400);
  const current = await query(
    `SELECT id, email, password_reset_code_hash, password_reset_expires_at, is_active
     FROM users
     WHERE email = $1`,
    [normalizedEmail],
  );
  const user = current.rows[0];
  if (!user) throw apiError("Email hoac ma xac minh khong dung.", 400);
  if (!user.is_active) throw apiError("Tai khoan da bi khoa.", 403);
  const expiresAt = user.password_reset_expires_at ? new Date(user.password_reset_expires_at) : null;
  if (!user.password_reset_code_hash || !expiresAt || expiresAt.getTime() < Date.now()) {
    throw apiError("Ma xac minh da het han. Vui long gui lai ma moi.", 400);
  }
  if (passwordResetHash(user.id, user.email, normalizedCode) !== user.password_reset_code_hash) {
    throw apiError("Ma xac minh khong dung.", 400);
  }
  return { user, code: normalizedCode };
}

async function verifyPasswordResetCode(body) {
  await getPasswordResetUser(body.email, body.code);
  return json({ ok: true });
}

async function confirmPasswordReset(body) {
  const newPassword = String(body.newPassword || body.password || "");
  const confirmPassword = String(body.confirmPassword || "");
  if (newPassword.length < 6) throw apiError("Mat khau moi can toi thieu 6 ky tu.", 400);
  if (newPassword !== confirmPassword) throw apiError("Mat khau xac nhan khong khop.", 400);
  const { user } = await getPasswordResetUser(body.email, body.code);
  const updated = await query(
    `UPDATE users
     SET password_hash = $1,
         password_reset_code_hash = NULL,
         password_reset_expires_at = NULL,
         last_login_at = NOW(),
         updated_at = NOW()
     WHERE id = $2
     RETURNING id, full_name, email, role, ref, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
    [hashPassword(newPassword), user.id],
  );
  return json({ ok: true, user: publicUser(updated.rows[0]) });
}

async function recalculateCtvVipCounts() {
  await query(`UPDATE users SET vip = 0 WHERE role IN ('ctv', 'sales', 'koc')`);
  await query(
    `UPDATE users c
     SET vip = sub.cnt
     FROM (
       SELECT lower(btrim(u.ref)) AS ref, COUNT(*) AS cnt
       FROM users u
       WHERE u.ref IS NOT NULL AND btrim(u.ref) <> ''
         AND u.is_premium = TRUE
         AND (u.premium_until IS NULL OR u.premium_until > NOW())
       GROUP BY lower(btrim(u.ref))
     ) sub
     WHERE lower(btrim(c.ref)) = sub.ref
       AND c.role IN ('ctv', 'sales', 'koc')`,
  );
}

async function listUsers(req) {
  await assertAdminOrStaff(req);
  await ensurePartnerCodes();
  await recalculateCtvVipCounts();
  const result = await query(
    `SELECT id, full_name, email, role, ref, partner_code, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, vip, daily_reminder_enabled, created_at, updated_at, last_login_at
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

function vipPlanIdFromDuration(planId, durationDays) {
  const normalized = String(planId || "").trim().toLowerCase();
  if (normalized === "3d" || normalized === "7d") return "3d";
  if (normalized === "30d" || normalized === "90d") return normalized;
  if (normalized === "3m") return "90d";
  if (durationDays === 3 || durationDays === 7) return "3d";
  if (durationDays === 30) return "30d";
  if (durationDays === 90) return "90d";
  return null;
}

async function createUser(req, body) {
  await assertAdminOrStaff(req);
  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const role = normalizeEditableRole(body.role);
  const currentLevel = String(body.currentLevel || "HSK2").trim().toUpperCase();
  const plan = String(body.plan || "FREE").trim().toUpperCase();
  const isActive = body.isActive !== false;
  const durationDays = Math.max(0, Number(body.durationDays || 0));
  const isPremium = plan === "PREMIUM";
  const premiumUntil = calculatePremiumUntil(plan, durationDays);
  const vipPlanId = isPremium ? vipPlanIdFromDuration(null, durationDays) : null;

  if (fullName.length < 2) throw apiError("Vui lòng nhập họ và tên.", 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw apiError("Email không hợp lệ.", 400);
  if (password.length < 6) throw apiError("Mật khẩu cần tối thiểu 6 ký tự.", 400);
  if (!/^HSK[1-6]$/.test(currentLevel)) throw apiError("Cấp độ không hợp lệ.", 400);
  if (!["FREE", "PREMIUM"].includes(plan)) throw apiError("Gói tài khoản không hợp lệ.", 400);

  try {
    const result = await query(
      `INSERT INTO users (full_name, email, password_hash, role, is_active, current_level, is_premium, premium_until, vip_plan_id, vip_trial_used)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING id`,
      [fullName, email, hashPassword(password), role, isActive, currentLevel, isPremium, premiumUntil, vipPlanId, vipPlanId === "3d"],
    );
    await ensurePartnerCodes();
    const refreshed = await query(
      `SELECT id, full_name, email, role, ref, partner_code, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at
       FROM users
       WHERE id = $1`,
      [result.rows[0].id],
    );
    return json({ user: publicUser(refreshed.rows[0]) });
  } catch (error) {
    if (error.code === "23505") throw apiError("Email này đã được đăng ký.", 409);
    throw error;
  }
}

async function updateUser(req, id, body) {
  const requester = await assertAdminOrStaff(req);
  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const role = normalizeEditableRole(body.role);
  const isActive = body.isActive === true;
  const currentLevel = String(body.currentLevel || "HSK2").trim().toUpperCase();
  const plan = String(body.plan || "").trim().toUpperCase();
  const durationDays = Math.floor(Number(body.durationDays || 0));
  const requestedPremiumUntil = String(body.premiumUntil || "").trim();
  const shouldExtendPremium = plan === "PREMIUM" && Number.isFinite(durationDays) && durationDays > 0;
  const shouldCancelPremium = plan === "FREE";
  const shouldSetPremiumUntil = plan === "PREMIUM" && Boolean(requestedPremiumUntil) && !shouldExtendPremium;
  const premiumUntilDate = shouldSetPremiumUntil ? new Date(requestedPremiumUntil) : null;
  const vipPlanId = shouldExtendPremium
    ? vipPlanIdFromDuration(null, durationDays)
    : shouldSetPremiumUntil
      ? vipPlanIdFromDuration(body.vipPlanId, 0)
      : null;
  if (plan && plan !== "PREMIUM" && plan !== "FREE") throw apiError("Invalid account plan.", 400);
  if (shouldSetPremiumUntil) {
    if (!premiumUntilDate || Number.isNaN(premiumUntilDate.getTime())) throw apiError("VIP expiry date is invalid.", 400);
    if (premiumUntilDate.getTime() <= Date.now()) throw apiError("VIP expiry date must be in the future.", 400);
  }
  if (!fullName || !email) throw apiError("Tên và email không được để trống.", 400);
  const roleCurrent = await query(
    `SELECT id, full_name, email, role, ref, partner_code
     FROM users
     WHERE id = $1`,
    [id],
  );
  const roleCurrentUser = roleCurrent.rows[0];
  if (!roleCurrentUser) throw apiError("Khong tim thay user.", 404);
  const roleCurrentRole = normalizePublicRole(roleCurrentUser.role);
  if (requester.role === "staff") {
    const current = await query(
      `SELECT id, role
       FROM users
       WHERE id = $1`,
      [id],
    );
    const currentUser = current.rows[0];
    if (!currentUser) throw apiError("KhÃ´ng tÃ¬m tháº¥y user.", 404);
    const currentRole = normalizePublicRole(currentUser.role);
    if (currentRole === "admin") throw apiError("Staff cannot modify admin accounts.", 403);
    if (String(requester.id) === String(id) && role !== currentRole) {
      throw apiError("Staff cannot change their own role from this endpoint.", 403);
    }
  }
  const roleToSave = roleCurrentRole === "admin" ? roleCurrentUser.role : role;
  const roleChangeRef = await getReferralRefForRoleChange(roleCurrentUser, roleToSave);
  const result = await query(
    `UPDATE users
     SET full_name = $1,
         email = $2,
         role = $3,
         ref = CASE WHEN $13::boolean THEN $14 ELSE ref END,
         is_active = $4,
         current_level = $5,
         is_premium = CASE
           WHEN $10::boolean THEN FALSE
           WHEN $7::boolean OR $11::boolean THEN TRUE
           ELSE is_premium
         END,
         premium_until = CASE
           WHEN $10::boolean THEN NULL
           WHEN $11::boolean THEN $12::timestamptz
           WHEN $7::boolean THEN GREATEST(COALESCE(premium_until, NOW()), NOW()) + ($8::int * INTERVAL '1 day')
           ELSE premium_until
         END,
         vip_plan_id = CASE
           WHEN $10::boolean THEN NULL
           WHEN $7::boolean OR $11::boolean THEN COALESCE($9, vip_plan_id)
           ELSE vip_plan_id
         END,
         vip_trial_used = CASE
           WHEN ($7::boolean OR $11::boolean) AND lower(coalesce($9, '')) IN ('3d', '7d') THEN TRUE
           ELSE vip_trial_used
         END,
         updated_at = NOW()
     WHERE id = $6
     RETURNING id`,
    [
      fullName,
      email,
      role,
      isActive,
      currentLevel,
      id,
      shouldExtendPremium,
      durationDays,
      vipPlanId,
      shouldCancelPremium,
      shouldSetPremiumUntil,
      premiumUntilDate?.toISOString() || null,
      roleChangeRef.shouldSetRef,
      roleChangeRef.ref,
    ],
  );
  if (!result.rows[0]) throw apiError("Không tìm thấy user.", 404);
  await ensurePartnerCodes();
  const refreshed = await query(
    `SELECT id, full_name, email, role, ref, partner_code, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at
     FROM users
     WHERE id = $1`,
    [id],
  );
  return json({ user: publicUser(refreshed.rows[0]) });
}

async function updateUserRole(req, id, body) {
  const requester = await assertAdminOrStaff(req);
  if (!isEditableRoleValue(body.role)) {
    throw apiError("Role must be user, sales, ctv, content or staff.", 400);
  }
  const nextRole = normalizeEditableRole(body.role);
  if (!["user", "sales", "ctv", "content", "staff"].includes(nextRole)) {
    throw apiError("Role must be user, sales, ctv, content or staff.", 400);
  }
  const current = await query(
    `SELECT id, full_name, email, role, ref, partner_code
     FROM users
     WHERE id = $1`,
    [id],
  );
  const currentUser = current.rows[0];
  if (!currentUser) throw apiError("Khong tim thay user.", 404);
  const currentRole = normalizePublicRole(currentUser.role);
  if (currentUser.id === requester.id) {
    throw apiError("You cannot change your own role.", 403);
  }
  if (currentRole === "admin") {
    throw apiError("Cannot modify admin accounts.", 403);
  }
  const roleChangeRef = await getReferralRefForRoleChange(currentUser, nextRole);
  const result = await query(
    `UPDATE users
     SET role = $1,
         ref = CASE WHEN $3::boolean THEN $4 ELSE ref END,
         updated_at = NOW()
     WHERE id = $2
     RETURNING id`,
    [nextRole, id, roleChangeRef.shouldSetRef, roleChangeRef.ref],
  );
  if (!result.rows[0]) throw apiError("Khong tim thay user.", 404);
  await ensurePartnerCodes();
  const refreshed = await query(
    `SELECT id, full_name, email, role, ref, partner_code, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at
     FROM users
     WHERE id = $1`,
    [id],
  );
  return json({ user: publicUser(refreshed.rows[0]) });
}

async function updateUserRef(req, id, body) {
  const requester = await assertAdminOrStaff(req);
  const ref = normalizeReferralRef(body.ref);
  if (!ref) throw apiError("Mã ref không hợp lệ.", 400);

  const current = await query(
    `SELECT id, role
     FROM users
     WHERE id = $1`,
    [id],
  );
  const currentUser = current.rows[0];
  if (!currentUser) throw apiError("Không tìm thấy user.", 404);
  const currentRole = normalizePublicRole(currentUser.role);
  const duplicate = await findPartnerReferralOwner(ref, id);
  if (duplicate) {
    throw apiError("Ma ref nay dang duoc dung boi CTV/nhan vien khac.", 409);
  }
  if (!["ctv", "sales"].includes(currentRole)) {
    throw apiError("Chỉ tài khoản CTV mới được tạo link ref.", 400);
  }

  const result = await query(
    `UPDATE users
     SET ref = $1,
         updated_at = NOW()
     WHERE id = $2
     RETURNING id, full_name, email, role, ref, partner_code, src, is_active, current_level, avatar_url, is_premium, premium_until, vip_plan_id, vip_trial_used, daily_reminder_enabled, email_verified_at, created_at, updated_at, last_login_at`,
    [ref, id],
  );
  return json({ user: publicUser(result.rows[0]) });
}

async function deleteUser(req, id) {
  const requester = await assertAdminOrStaff(req);
  if (requester.role === "staff") {
    if (String(requester.id) === String(id)) throw apiError("Staff cannot delete their own account.", 403);
    const current = await query(
      `SELECT id, role
       FROM users
       WHERE id = $1`,
      [id],
    );
    const currentUser = current.rows[0];
    if (!currentUser) throw apiError("KhÃ´ng tÃ¬m tháº¥y user.", 404);
    if (normalizePublicRole(currentUser.role) === "admin") {
      throw apiError("Staff cannot delete admin accounts.", 403);
    }
  }
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
  const rowsById = new Map(result.rows.map((row) => [row.id, row]));
  return json({
    plans: DEFAULT_PAYMENT_PLANS.map((plan, index) => {
      const row = rowsById.get(plan.id) || {};
      const amount = Number(row.amount ?? plan.amount);
      return {
        id: plan.id,
        months: Number(row.months ?? plan.months),
        durationUnit: normalizeDurationUnit(row.duration_unit ?? plan.durationUnit),
        amount,
        sortOrder: Number(row.sort_order ?? index + 1),
        priceLabel: formatVnd(amount),
        nameVi: row.name_vi ?? plan.nameVi,
        nameZh: row.name_zh ?? plan.nameZh,
      };
    }),
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

function resolveWordSentenceLimits(row) {
  const legacyLimit = Math.max(0, Number(row.free_item_limit || 0));
  const explicitWordLimit = Math.max(0, Number(row.free_word_limit || 0));
  const explicitSentenceLimit = Math.max(0, Number(row.free_sentence_limit || 0));
  const hasSpecificLimits = explicitWordLimit > 0 || explicitSentenceLimit > 0;
  return {
    freeItemLimit: legacyLimit,
    freeWordLimit: hasSpecificLimits ? explicitWordLimit : legacyLimit,
    freeSentenceLimit: hasSpecificLimits ? explicitSentenceLimit : legacyLimit,
  };
}

function mapHskLessonLock(row) {
  return {
    lessonId: row.lesson_id,
    level: row.level,
    lessonNo: Number(row.lesson_no),
    titleVi: row.title_vi,
    ...resolveWordSentenceLimits(row),
    lockedForFree: row.locked_for_free,
    updatedAt: row.updated_at,
  };
}

async function getPublicHskLocks() {
  const result = await query(
    `SELECT lesson_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free
     FROM hsk_lesson_locks
     WHERE locked_for_free = TRUE OR free_item_limit > 0 OR free_word_limit > 0 OR free_sentence_limit > 0
     ORDER BY lesson_id ASC`,
  );
  return json({
    lessonLocks: result.rows.map((row) => ({
      lessonId: row.lesson_id,
      ...resolveWordSentenceLimits(row),
      lockedForFree: row.locked_for_free === true,
    })),
  });
}

async function listAdminHskLocks(req) {
  await assertAdmin(req);
  const result = await query(
    `SELECT lesson_id, level, lesson_no, title_vi, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free, updated_at
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
      const freeWordLimit = Math.max(0, Number(lesson.freeWordLimit ?? freeItemLimit));
      const freeSentenceLimit = Math.max(0, Number(lesson.freeSentenceLimit ?? freeItemLimit));
      const lockedForFree = lesson.lockedForFree === true;
      const effectiveLockedForFree = lockedForFree;
      if (!lessonId || !level) continue;
      await client.query(
        `INSERT INTO hsk_lesson_locks (lesson_id, level, lesson_no, title_vi, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
         ON CONFLICT (lesson_id) DO UPDATE
         SET level = EXCLUDED.level,
             lesson_no = EXCLUDED.lesson_no,
             title_vi = EXCLUDED.title_vi,
             free_item_limit = EXCLUDED.free_item_limit,
             free_word_limit = EXCLUDED.free_word_limit,
             free_sentence_limit = EXCLUDED.free_sentence_limit,
             locked_for_free = EXCLUDED.locked_for_free,
             updated_at = NOW()`,
        [lessonId, level, lessonNo, titleVi, freeItemLimit, freeWordLimit, freeSentenceLimit, effectiveLockedForFree],
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
    `SELECT lesson_id, level, lesson_no, title_vi, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free, updated_at
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
    ...resolveWordSentenceLimits(row),
    lockedForFree: row.locked_for_free,
    updatedAt: row.updated_at,
  };
}

async function getPublicDailyLocks() {
  const result = await query(
    `SELECT theme_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free
     FROM daily_theme_locks
     WHERE locked_for_free = TRUE OR free_item_limit > 0 OR free_word_limit > 0 OR free_sentence_limit > 0
     ORDER BY theme_id ASC`,
  );
  const themeLocks = result.rows.map((row) => ({
    themeId: row.theme_id,
    ...resolveWordSentenceLimits(row),
    lockedForFree: row.locked_for_free === true,
  }));
  const mergedThemeLocks = mergeDailyLocksWithStaticCatalog(themeLocks.map((row) => ({
    theme_id: row.themeId,
    free_item_limit: row.freeItemLimit,
    free_word_limit: row.freeWordLimit,
    free_sentence_limit: row.freeSentenceLimit,
    locked_for_free: row.lockedForFree,
  }))).filter((item) => item.lockedForFree || Number(item.freeItemLimit || item.freeWordLimit || item.freeSentenceLimit || 0) > 0)
    .map((item) => ({
      themeId: item.themeId,
      freeItemLimit: Math.max(0, Number(item.freeItemLimit || item.freeSentenceLimit || item.freeWordLimit || 0)),
      lockedForFree: item.lockedForFree === true,
    }));
  const lockedThemeIds = mergedThemeLocks
    .filter((item) => item.lockedForFree && Number(item.freeItemLimit || 0) <= 0)
    .map((item) => item.themeId);
  return json({ lockedThemeIds, themeLocks: mergedThemeLocks });
}

async function getPublicLearningAccessRules() {
  const [hskResult, dailyResult, topicResult, lessonResult] = await Promise.all([
    query(`SELECT lesson_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free FROM hsk_lesson_locks ORDER BY lesson_id ASC`),
    query(`SELECT theme_id, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free FROM daily_theme_locks ORDER BY sort_order ASC, theme_id ASC`),
    query(`SELECT topic_id, locked_for_free FROM listening_topic_locks ORDER BY sort_order ASC, topic_id ASC`),
    query(`SELECT lesson_id, topic_id, locked_for_free FROM listening_lesson_locks ORDER BY sort_order ASC, lesson_id ASC`),
  ]);
  return json({
    hskLessonLocks: hskResult.rows.map((row) => ({
      lessonId: row.lesson_id,
      lockedForFree: row.locked_for_free === true,
      freeWordLimit: resolveWordSentenceLimits(row).freeWordLimit,
      freeSentenceLimit: resolveWordSentenceLimits(row).freeSentenceLimit,
    })),
    dailyThemeLocks: mergeDailyLocksWithStaticCatalog(dailyResult.rows).map((row) => ({
      themeId: row.themeId,
      lockedForFree: row.lockedForFree === true,
      freeWordLimit: Math.max(0, Number(row.freeWordLimit || 0)),
      freeSentenceLimit: Math.max(0, Number(row.freeSentenceLimit || 0)),
    })),
    listeningTopicLocks: topicResult.rows.map((row) => ({
      topicId: row.topic_id,
      lockedForFree: row.locked_for_free === true,
    })),
    listeningLessonLocks: lessonResult.rows.map((row) => ({
      lessonId: row.lesson_id,
      topicId: row.topic_id,
      lockedForFree: row.locked_for_free === true,
    })),
  });
}

let staticListeningLockCatalogCache = null;

function listStaticListeningLockCatalog() {
  if (staticListeningLockCatalogCache) return staticListeningLockCatalogCache;

  const catalogPath = path.join(process.cwd(), "public", "listening-app", "data", "listening-catalog.json");
  const topics = new Map();
  const lessons = new Map();

  if (fs.existsSync(catalogPath)) {
    try {
      const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
      let topicOrder = 0;
      const addTopic = (topic) => {
        const topicId = String(topic?.id || "").trim();
        if (!topicId) return;
        topicOrder += 1;
        const existingTopic = topics.get(topicId);
        topics.set(topicId, {
          topicId,
          titleVi: existingTopic?.titleVi || String(topic?.label_vi || topic?.label_zh || topicId).trim(),
          titleZh: existingTopic?.titleZh || String(topic?.label_zh || topic?.label_vi || topicId).trim(),
          sortOrder: existingTopic?.sortOrder || topicOrder,
          lockedForFree: existingTopic?.lockedForFree === true,
          updatedAt: existingTopic?.updatedAt,
        });

        let lessonOrder = 0;
        for (const lesson of topic?.lessons || []) {
          const lessonId = String(lesson?.id || "").trim();
          if (!lessonId) continue;
          lessonOrder += 1;
          const existingLesson = lessons.get(lessonId);
          lessons.set(lessonId, {
            lessonId,
            topicId,
            titleVi: existingLesson?.titleVi || String(lesson?.title_vi || lesson?.title_zh || lesson?.title || lessonId).trim(),
            titleZh: existingLesson?.titleZh || String(lesson?.title_zh || lesson?.title_vi || lesson?.title || lessonId).trim(),
            sortOrder: existingLesson?.sortOrder || lessonOrder,
            lockedForFree: existingLesson?.lockedForFree === true,
            updatedAt: existingLesson?.updatedAt,
          });
        }
      };

      for (const track of catalog?.tracks || []) {
        for (const level of track?.levels || []) {
          for (const topic of level?.topics || []) addTopic(topic);
        }
        for (const topic of track?.topics || []) addTopic(topic);
      }
    } catch {
      // Keep admin usable even if a local catalog file is temporarily malformed.
    }
  }

  staticListeningLockCatalogCache = {
    topics: [...topics.values()].sort((a, b) => a.sortOrder - b.sortOrder || a.topicId.localeCompare(b.topicId)),
    lessons: [...lessons.values()].sort((a, b) => a.topicId.localeCompare(b.topicId) || a.sortOrder - b.sortOrder || a.lessonId.localeCompare(b.lessonId)),
  };
  return staticListeningLockCatalogCache;
}

function mergeListeningLocksWithStaticCatalog(topicRows = [], lessonRows = []) {
  const staticCatalog = listStaticListeningLockCatalog();
  const topics = new Map(staticCatalog.topics.map((item) => [item.topicId, item]));
  const lessons = new Map(staticCatalog.lessons.map((item) => [item.lessonId, item]));

  for (const row of topicRows) {
    const topicId = String(row.topic_id || "").trim();
    if (!topicId) continue;
    const base = topics.get(topicId);
    topics.set(topicId, {
      topicId,
      titleVi: base?.titleVi || row.title_vi || "",
      titleZh: base?.titleZh || base?.titleVi || row.title_vi || "",
      sortOrder: Number(base?.sortOrder || row.sort_order || 0),
      lockedForFree: row.locked_for_free === true,
      updatedAt: row.updated_at,
    });
  }

  for (const row of lessonRows) {
    const lessonId = String(row.lesson_id || "").trim();
    if (!lessonId) continue;
    const base = lessons.get(lessonId);
    lessons.set(lessonId, {
      lessonId,
      topicId: row.topic_id || base?.topicId || "",
      titleVi: base?.titleVi || row.title_vi || "",
      titleZh: base?.titleZh || base?.titleVi || row.title_vi || "",
      sortOrder: Number(base?.sortOrder || row.sort_order || 0),
      lockedForFree: row.locked_for_free === true,
      updatedAt: row.updated_at,
    });
  }

  return {
    topics: [...topics.values()].sort((a, b) => a.sortOrder - b.sortOrder || a.topicId.localeCompare(b.topicId)),
    lessons: [...lessons.values()].sort((a, b) => a.topicId.localeCompare(b.topicId) || a.sortOrder - b.sortOrder || a.lessonId.localeCompare(b.lessonId)),
  };
}

let staticDailyThemeCatalogCache = null;
let dailyThemeLegacyAliasCache = null;

function normalizeComparableTitle(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function dailyThemeTitle(theme) {
  return String(theme?.vi || theme?.lesson_title_vi || theme?.title_vi || theme?.title || theme?.zh || theme?.lesson_title_cn || "").trim();
}

function loadHighFrequencyTopicsFromPublicScript(fileName, seed = []) {
  const filePath = path.join(process.cwd(), "public", fileName);
  if (!fs.existsSync(filePath)) return [];

  try {
    const context = {
      highFrequencyTopics: [...seed],
      console,
    };
    context.globalThis = context;
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(filePath, "utf8"), context, { filename: filePath });
    return Array.isArray(context.highFrequencyTopics) ? context.highFrequencyTopics : [];
  } catch {
    return [];
  }
}

function listStaticDailyThemeCatalog() {
  if (staticDailyThemeCatalogCache) return staticDailyThemeCatalogCache;

  let themes = loadHighFrequencyTopicsFromPublicScript("lesson-high-frequency-v1-27-topics.js");
  if (!themes.length) {
    themes = loadHighFrequencyTopicsFromPublicScript("lesson-high-frequency-topics.js");
    themes = loadHighFrequencyTopicsFromPublicScript("lesson-high-frequency-topic-unit.js", themes);
  }

  const catalog = new Map();
  themes.forEach((theme, index) => {
    const themeId = String(theme?.id || "").trim();
    if (!themeId || catalog.has(themeId)) return;
    catalog.set(themeId, {
      themeId,
      titleVi: dailyThemeTitle(theme),
      sortOrder: index + 1,
      freeItemLimit: 0,
      freeWordLimit: 0,
      freeSentenceLimit: 0,
      lockedForFree: false,
    });
  });

  staticDailyThemeCatalogCache = [...catalog.values()]
    .sort((a, b) => a.sortOrder - b.sortOrder || a.themeId.localeCompare(b.themeId));
  return staticDailyThemeCatalogCache;
}

function getDailyThemeLegacyAliasMap() {
  if (dailyThemeLegacyAliasCache) return dailyThemeLegacyAliasCache;

  const aliasMap = new Map();
  const modern = listStaticDailyThemeCatalog();
  const legacyThemes = loadHighFrequencyTopicsFromPublicScript("lesson-high-frequency-topics.js");
  const modernByTitle = new Map(modern.map((theme) => [normalizeComparableTitle(theme.titleVi), theme.themeId]));

  legacyThemes.forEach((theme, index) => {
    const legacyId = String(theme?.id || "").trim();
    if (!legacyId || modern.some((item) => item.themeId === legacyId)) return;
    const byTitle = modernByTitle.get(normalizeComparableTitle(dailyThemeTitle(theme)));
    const byTopicUnitOrder = modern.find((item) => item.themeId === `hf-topic-unit-bai${String(index + 1).padStart(2, "0")}`);
    const targetId = byTitle || byTopicUnitOrder?.themeId || "";
    if (targetId) aliasMap.set(legacyId, targetId);
  });

  dailyThemeLegacyAliasCache = aliasMap;
  return aliasMap;
}

function mergeDailyLocksWithStaticCatalog(rows = []) {
  const staticCatalog = listStaticDailyThemeCatalog();
  const merged = new Map();
  const priorities = new Map();
  const aliases = getDailyThemeLegacyAliasMap();

  for (const item of staticCatalog) {
    merged.set(item.themeId, item);
    priorities.set(item.themeId, 0);
  }

  for (const row of rows) {
    const sourceId = String(row.theme_id || "").trim();
    if (!sourceId) continue;
    const targetId = merged.has(sourceId) ? sourceId : aliases.get(sourceId);
    if (!targetId || !merged.has(targetId)) continue;

    const priority = targetId === sourceId ? 2 : 1;
    if ((priorities.get(targetId) || 0) > priority) continue;

    const base = merged.get(targetId);
    const limits = resolveWordSentenceLimits(row);
    merged.set(targetId, {
      ...base,
      ...limits,
      lockedForFree: row.locked_for_free === true,
      updatedAt: row.updated_at,
    });
    priorities.set(targetId, priority);
  }

  return [...merged.values()].sort((a, b) => a.sortOrder - b.sortOrder || a.themeId.localeCompare(b.themeId));
}

async function listAdminListeningLocks(req) {
  await assertAdmin(req);
  const [topics, lessons] = await Promise.all([
    query(`SELECT topic_id, title_vi, sort_order, locked_for_free, updated_at FROM listening_topic_locks ORDER BY sort_order ASC, topic_id ASC`),
    query(`SELECT lesson_id, topic_id, title_vi, sort_order, locked_for_free, updated_at FROM listening_lesson_locks ORDER BY sort_order ASC, lesson_id ASC`),
  ]);
  return json(mergeListeningLocksWithStaticCatalog(topics.rows, lessons.rows));
}

async function saveAdminListeningLocks(req, body) {
  await assertAdmin(req);
  const topics = Array.isArray(body.topics) ? body.topics : [];
  const lessons = Array.isArray(body.lessons) ? body.lessons : [];
  if (topics.length === 0 && lessons.length === 0) throw apiError("Danh sách khóa nghe không hợp lệ.", 400);
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    for (const topic of topics) {
      const topicId = String(topic.topicId || "").trim();
      if (!topicId) continue;
      await client.query(
        `INSERT INTO listening_topic_locks (topic_id, title_vi, sort_order, locked_for_free, updated_at)
         VALUES ($1, $2, $3, $4, NOW())
         ON CONFLICT (topic_id) DO UPDATE SET title_vi = EXCLUDED.title_vi, sort_order = EXCLUDED.sort_order, locked_for_free = EXCLUDED.locked_for_free, updated_at = NOW()`,
        [topicId, String(topic.titleVi || "").trim(), Number(topic.sortOrder || 0), topic.lockedForFree === true],
      );
    }
    for (const lesson of lessons) {
      const lessonId = String(lesson.lessonId || "").trim();
      if (!lessonId) continue;
      await client.query(
        `INSERT INTO listening_lesson_locks (lesson_id, topic_id, title_vi, sort_order, locked_for_free, updated_at)
         VALUES ($1, $2, $3, $4, $5, NOW())
         ON CONFLICT (lesson_id) DO UPDATE SET topic_id = EXCLUDED.topic_id, title_vi = EXCLUDED.title_vi, sort_order = EXCLUDED.sort_order, locked_for_free = EXCLUDED.locked_for_free, updated_at = NOW()`,
        [lessonId, String(lesson.topicId || "").trim(), String(lesson.titleVi || "").trim(), Number(lesson.sortOrder || 0), lesson.lockedForFree === true],
      );
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
  return listAdminListeningLocks(req);
}

async function listAdminDailyLocks(req) {
  await assertAdmin(req);
  const result = await query(
    `SELECT theme_id, title_vi, sort_order, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free, updated_at
     FROM daily_theme_locks
     ORDER BY sort_order ASC, theme_id ASC`,
  );
  return json({ locks: mergeDailyLocksWithStaticCatalog(result.rows) });
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
      const freeWordLimit = Math.max(0, Number(theme.freeWordLimit ?? freeItemLimit));
      const freeSentenceLimit = Math.max(0, Number(theme.freeSentenceLimit ?? freeItemLimit));
      const lockedForFree = theme.lockedForFree === true;
      if (!themeId) continue;
      await client.query(
        `INSERT INTO daily_theme_locks (theme_id, title_vi, sort_order, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
         ON CONFLICT (theme_id) DO UPDATE
         SET title_vi = EXCLUDED.title_vi,
             sort_order = EXCLUDED.sort_order,
             free_item_limit = EXCLUDED.free_item_limit,
             free_word_limit = EXCLUDED.free_word_limit,
             free_sentence_limit = EXCLUDED.free_sentence_limit,
             locked_for_free = EXCLUDED.locked_for_free,
             updated_at = NOW()`,
        [themeId, titleVi, sortOrder, freeItemLimit, freeWordLimit, freeSentenceLimit, lockedForFree],
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
    `SELECT theme_id, title_vi, sort_order, free_item_limit, free_word_limit, free_sentence_limit, locked_for_free, updated_at
     FROM daily_theme_locks
     ORDER BY sort_order ASC, theme_id ASC`,
  );
  return json({ locks: mergeDailyLocksWithStaticCatalog(result.rows) });
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

function isIntroVipPlanId(planId) {
  const id = String(planId || "").trim().toLowerCase();
  return id === "3d" || id === "7d";
}

async function hasUsedIntroVipPlan(userId, dbQuery = query, excludeOrderId = null) {
  const result = await dbQuery(
    `SELECT 1
     FROM payment_orders
     WHERE user_id = $1
       AND status = 'paid'
       AND lower(plan_id) IN ('3d', '7d')
       AND ($2::uuid IS NULL OR id <> $2::uuid)
     LIMIT 1`,
    [userId, excludeOrderId],
  );
  return Boolean(result.rows[0]);
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

  const userResult = await query("SELECT id, email, is_active, vip_trial_used FROM users WHERE id = $1", [userId]);
  const user = userResult.rows[0];
  if (!user) throw apiError({ error: "Không tìm thấy tài khoản." }, 404);
  if (String(user.email).toLowerCase() !== email) throw apiError({ error: "Thông tin tài khoản không khớp." }, 403);
  if (!user.is_active) throw apiError({ error: "Tài khoản đã bị khóa." }, 403);
  if (isIntroVipPlanId(plan.id) && (user.vip_trial_used || await hasUsedIntroVipPlan(userId))) {
    throw apiError({ error: "Gói VIP 3 ngày chỉ mua được một lần cho mỗi tài khoản." }, 409);
  }

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
  if (order.status === "pending") {
    const reconciledOrder = await reconcilePendingOrderFromSepayApi(order);
    if (reconciledOrder) Object.assign(order, reconciledOrder);
  }
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
  const paidAt = parseSepayTransactionDate(payload.transactionDate) || new Date();
  await activateOrder(order, payload.id, paidAt);
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

function normalizeSepayLookupText(value) {
  return String(value || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function getSepayTransactionAmount(transaction) {
  return Number(transaction?.amount_in ?? transaction?.amountIn ?? transaction?.transferAmount ?? 0);
}

function getSepayTransactionPaidAt(transaction) {
  return parseSepayTransactionDate(transaction?.transaction_date || transaction?.transactionDate || "");
}

function sepayTransactionMatchesOrder(transaction, order) {
  const expectedCode = normalizeSepayLookupText(order?.transfer_code);
  if (!expectedCode) return false;
  const amount = getSepayTransactionAmount(transaction);
  if (!amount || amount < Number(order.amount || 0)) return false;
  const transferType = String(transaction?.transfer_type || transaction?.transferType || "").trim().toLowerCase();
  if (transferType && transferType !== "in") return false;
  const config = bankConfig();
  const accountNumber = String(transaction?.account_number || transaction?.accountNumber || "").replace(/\D/g, "");
  const expectedAccount = String(config.accountNumber || "").replace(/\D/g, "");
  if (expectedAccount && accountNumber && accountNumber !== expectedAccount) return false;
  const haystack = [
    transaction?.code,
    transaction?.transaction_content,
    transaction?.content,
    transaction?.description,
    transaction?.reference_number,
    transaction?.referenceCode,
  ].map((value) => normalizeSepayLookupText(value)).join(" ");
  return haystack.includes(expectedCode);
}

async function findSepayApiTransactionForOrder(order) {
  const config = sepayApiConfig();
  if (!config.token || !order?.transfer_code) return null;
  const baseUrl = config.baseUrl.replace(/\/+$/, "");
  const params = new URLSearchParams({
    q: String(order.transfer_code),
    transfer_type: "in",
    amount_in_min: String(Math.max(0, Number(order.amount || 0))),
    amount_in_max: String(Math.max(0, Number(order.amount || 0))),
    per_page: "10",
    page: "1",
    timestamp_format: "iso8601",
  });
  const response = await fetch(`${baseUrl}/transactions?${params.toString()}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${config.token}`,
    },
  });
  if (!response.ok) return null;
  const body = await response.json().catch(() => null);
  const transactions = Array.isArray(body?.data) ? body.data : [];
  return transactions.find((transaction) => sepayTransactionMatchesOrder(transaction, order)) || null;
}

async function reconcilePendingOrderFromSepayApi(order) {
  try {
    const transaction = await findSepayApiTransactionForOrder(order);
    if (!transaction) return null;
    const paidAt = getSepayTransactionPaidAt(transaction) || new Date();
    await activateOrder(order, null, paidAt);
    const refreshed = await query("SELECT * FROM payment_orders WHERE id = $1", [order.id]);
    return refreshed.rows[0] || null;
  } catch {
    return null;
  }
}

async function activateOrder(order, sepayId, paidAt = new Date()) {
  const plan = await getPlanById(order.plan_id);
  if (!plan) return;
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    const orderResult = await client.query("SELECT * FROM payment_orders WHERE id = $1 FOR UPDATE", [order.id]);
    const lockedOrder = orderResult.rows[0];
    if (!lockedOrder || lockedOrder.status !== "pending") {
      if (sepayId !== null) {
        await client.query("UPDATE sepay_webhook_events SET processed = TRUE, order_id = COALESCE($2, order_id) WHERE sepay_id = $1", [sepayId, order.id]);
      }
      await client.query("COMMIT");
      return;
    }
    const userResult = await client.query("SELECT premium_until, vip_trial_used FROM users WHERE id = $1 FOR UPDATE", [lockedOrder.user_id]);
    const user = userResult.rows[0];
    const isIntroVipPlan = isIntroVipPlanId(plan.id);
    const now = new Date();
    const paidAtBase = Number.isNaN(paidAt.getTime()) || paidAt.getTime() > now.getTime() + 5 * 60 * 1000 ? now : paidAt;
    const paidAtIso = paidAtBase.toISOString();
    if (isIntroVipPlan && (user?.vip_trial_used || await hasUsedIntroVipPlan(lockedOrder.user_id, client.query.bind(client), lockedOrder.id))) {
      await client.query("UPDATE payment_orders SET status = 'duplicate', paid_at = $2 WHERE id = $1 AND status = 'pending'", [lockedOrder.id, paidAtIso]);
      if (sepayId !== null) {
        await client.query("UPDATE sepay_webhook_events SET processed = TRUE, order_id = $2 WHERE sepay_id = $1", [sepayId, lockedOrder.id]);
      }
      await client.query("COMMIT");
      return;
    }
    const currentEnd = user?.premium_until ? new Date(user.premium_until) : null;
    const premiumUntil = applyPlanDuration(currentEnd && currentEnd > paidAtBase ? currentEnd : paidAtBase, plan);
    await client.query("UPDATE payment_orders SET status = 'paid', paid_at = $2, plan_id = $3 WHERE id = $1 AND status = 'pending'", [lockedOrder.id, paidAtIso, plan.id]);
    await client.query(
      `UPDATE users
       SET is_premium = TRUE,
           premium_until = $2,
           vip_plan_id = $3,
           vip_trial_used = CASE WHEN $4::boolean THEN TRUE ELSE vip_trial_used END,
           updated_at = NOW()
      WHERE id = $1`,
      [lockedOrder.user_id, premiumUntil.toISOString(), plan.id, isIntroVipPlan],
    );
    if (sepayId !== null) {
      await client.query("UPDATE sepay_webhook_events SET processed = TRUE, order_id = $2 WHERE sepay_id = $1", [sepayId, lockedOrder.id]);
    }
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

const ALLOWED_LEARNING_EVENTS = new Set([
  "lesson_opened",
  "question_answered",
  "practice_completed",
  "paywall_shown",
  "vip_modal_opened",
  "study_session_started",
  "study_session_heartbeat",
  "study_session_ended",
]);
const LEARNING_UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function normalizeEventText(value, maxLength = 120) {
  const normalized = String(value ?? "").trim();
  if (!normalized) return null;
  return normalized.slice(0, maxLength);
}

function normalizeEventSource(value) {
  const normalized = String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 40);
  return normalized || null;
}

function normalizeEventUserId(value) {
  const normalized = String(value ?? "").trim();
  return LEARNING_UUID_REGEX.test(normalized) ? normalized : null;
}

function normalizeEventBoolean(value) {
  if (value === true || value === false) return value;
  if (value === "true") return true;
  if (value === "false") return false;
  return null;
}

function normalizeLearningEvent(raw, fallbackUserId) {
  const eventType = String(raw?.eventType ?? raw?.event_type ?? "").trim();
  if (!ALLOWED_LEARNING_EVENTS.has(eventType)) return null;
  return {
    userId: normalizeEventUserId(raw?.userId ?? raw?.user_id ?? fallbackUserId),
    eventType,
    module: normalizeEventText(raw?.module),
    level: normalizeEventText(raw?.level, 20),
    lessonId: normalizeEventText(raw?.lessonId ?? raw?.lesson_id),
    topicId: normalizeEventText(raw?.topicId ?? raw?.topic_id),
    questionId: normalizeEventText(raw?.questionId ?? raw?.question_id),
    isCorrect: normalizeEventBoolean(raw?.isCorrect ?? raw?.is_correct),
    source: normalizeEventSource(raw?.source),
  };
}

async function recordLearningEvents(req, body) {
  const fallbackUserId = normalizeEventUserId(req.headers.get("x-user-id"));
  const rawEvents = Array.isArray(body?.events)
    ? body.events
    : Array.isArray(body)
      ? body
      : [body];
  const events = rawEvents
    .map((raw) => normalizeLearningEvent(raw, fallbackUserId))
    .filter((event) => event !== null)
    .slice(0, 100);

  if (events.length === 0) return json({ ok: true, inserted: 0 }, 202);

  const values = [];
  const placeholders = events.map((event, index) => {
    const base = index * 9;
    values.push(
      event.userId,
      event.eventType,
      event.module,
      event.level,
      event.lessonId,
      event.topicId,
      event.questionId,
      event.isCorrect,
      event.source,
    );
    return `((SELECT id FROM users WHERE id = $${base + 1}::uuid), $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7}, $${base + 8}, $${base + 9})`;
  });

  await query(
    `INSERT INTO learning_events
       (user_id, event_type, module, level, lesson_id, topic_id, question_id, is_correct, source)
     VALUES ${placeholders.join(", ")}`,
    values,
  );
  return json({ ok: true, inserted: events.length }, 202);
}

const ANALYTICS_TZ = "Asia/Ho_Chi_Minh";
const ANALYTICS_MAX_SPAN_DAYS = 1000;
const ANALYTICS_CACHE_TTL_MS = 2 * 60 * 1000;
const analyticsResponseCache = new Map();

function analyticsCacheKey(kind, fromYmd, toYmd) {
  return `${kind}:${fromYmd}:${toYmd}`;
}

function getAnalyticsCache(key) {
  const cached = analyticsResponseCache.get(key);
  if (!cached) return null;
  if (cached.expiresAt <= Date.now()) {
    analyticsResponseCache.delete(key);
    return null;
  }
  return cached.value;
}

function setAnalyticsCache(key, value) {
  analyticsResponseCache.set(key, {
    expiresAt: Date.now() + ANALYTICS_CACHE_TTL_MS,
    value,
  });
  return value;
}

function analyticsToYmd(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function analyticsYmdToUtcDate(ymd) {
  const [year, month, day] = String(ymd || "").split("-").map(Number);
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (Number.isNaN(date.getTime())) return null;
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return date;
}

function analyticsNormalizeDateInput(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const ymd = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (ymd) {
    const date = analyticsYmdToUtcDate(`${ymd[1]}-${ymd[2]}-${ymd[3]}`);
    return date ? analyticsToYmd(date) : "";
  }
  const slash = raw.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
  if (!slash) return "";
  const first = Number(slash[1]);
  const second = Number(slash[2]);
  const year = Number(slash[3]);
  let month = first;
  let day = second;
  if (first > 12 && second <= 12) {
    day = first;
    month = second;
  }
  const date = analyticsYmdToUtcDate(`${year}-${month}-${day}`);
  return date ? analyticsToYmd(date) : "";
}

function analyticsSpanDays(fromYmd, toYmd) {
  return Math.round((analyticsYmdToUtcDate(toYmd).getTime() - analyticsYmdToUtcDate(fromYmd).getTime()) / 86400000) + 1;
}

function resolveAnalyticsRange(searchParams) {
  let fromYmd = analyticsNormalizeDateInput(searchParams.get("from"));
  let toYmd = analyticsNormalizeDateInput(searchParams.get("to"));

  if (fromYmd && toYmd) {
    if (fromYmd > toYmd) [fromYmd, toYmd] = [toYmd, fromYmd];
  } else {
    const days = Math.min(ANALYTICS_MAX_SPAN_DAYS, Math.max(1, Math.floor(Number(searchParams.get("days")) || 30)));
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - (days - 1));
    fromYmd = analyticsToYmd(start);
    toYmd = analyticsToYmd(today);
  }

  if (analyticsSpanDays(fromYmd, toYmd) > ANALYTICS_MAX_SPAN_DAYS) {
    const end = analyticsYmdToUtcDate(toYmd);
    const start = new Date(end);
    start.setUTCDate(end.getUTCDate() - (ANALYTICS_MAX_SPAN_DAYS - 1));
    fromYmd = start.toISOString().slice(0, 10);
  }

  return { fromYmd, toYmd, days: analyticsSpanDays(fromYmd, toYmd) };
}

function buildLearningDailySeries(rows, fromYmd, toYmd) {
  const byDay = new Map();
  for (const row of rows) byDay.set(String(row.day), Number(row.value) || 0);
  const series = [];
  const cursor = analyticsYmdToUtcDate(fromYmd);
  const end = analyticsYmdToUtcDate(toYmd);
  let guard = 0;
  while (cursor.getTime() <= end.getTime() && guard <= ANALYTICS_MAX_SPAN_DAYS) {
    const key = cursor.toISOString().slice(0, 10);
    series.push({ date: key, value: byDay.get(key) || 0 });
    cursor.setUTCDate(cursor.getUTCDate() + 1);
    guard += 1;
  }
  return series;
}

async function getLearningAnalytics(req, searchParams) {
  await assertAdmin(req);
  const { fromYmd, toYmd, days } = resolveAnalyticsRange(searchParams);
  const bypassCache = searchParams.get("live") === "1";
  const cacheKey = analyticsCacheKey("learning", fromYmd, toYmd);
  const cached = bypassCache ? null : getAnalyticsCache(cacheKey);
  if (cached) return json(cached);
  const withinRange = `created_at >= ($1::date::timestamp AT TIME ZONE '${ANALYTICS_TZ}') AND created_at < (($2::date + 1)::timestamp AT TIME ZONE '${ANALYTICS_TZ}')`;
  const eventWithinRange = `e.created_at >= ($1::date::timestamp AT TIME ZONE '${ANALYTICS_TZ}') AND e.created_at < (($2::date + 1)::timestamp AT TIME ZONE '${ANALYTICS_TZ}')`;
  const dayBucket = `to_char(date_trunc('day', created_at AT TIME ZONE '${ANALYTICS_TZ}'), 'YYYY-MM-DD')`;
  const params = [fromYmd, toYmd];
  const vipSessionCte = `
    WITH vip_users AS (
      SELECT id, full_name, email, vip_plan_id, premium_until
      FROM users
      WHERE is_premium = TRUE AND (premium_until IS NULL OR premium_until > NOW())
    ),
    session_starts AS (
      SELECT e.*, u.full_name, u.email, u.vip_plan_id, u.premium_until,
             LEAD(e.created_at) OVER (PARTITION BY e.user_id ORDER BY e.created_at) AS next_started_at
      FROM learning_events e
      JOIN vip_users u ON u.id = e.user_id
      WHERE ${eventWithinRange}
        AND e.event_type = 'study_session_started'
    ),
    session_rollup AS (
      SELECT s.user_id,
             s.full_name,
             s.email,
             s.vip_plan_id,
             s.premium_until,
             s.module,
             s.level,
             s.lesson_id,
             s.topic_id,
             s.question_id,
             s.created_at AS started_at,
             COALESCE(MAX(e.created_at), s.created_at) AS last_seen_at,
             BOOL_OR(e.event_type = 'study_session_ended') AS has_ended,
             COUNT(e.id)::int AS event_count
      FROM session_starts s
      LEFT JOIN learning_events e ON e.user_id = s.user_id
       AND e.created_at >= s.created_at
       AND e.created_at < COALESCE(s.next_started_at, (($2::date + 1)::timestamp AT TIME ZONE '${ANALYTICS_TZ}'))
       AND e.event_type IN ('study_session_started', 'study_session_heartbeat', 'study_session_ended')
       AND COALESCE(e.module, '') = COALESCE(s.module, '')
       AND COALESCE(e.lesson_id, '') = COALESCE(s.lesson_id, '')
       AND COALESCE(e.topic_id, '') = COALESCE(s.topic_id, '')
       AND COALESCE(e.question_id, '') = COALESCE(s.question_id, '')
      GROUP BY s.user_id, s.full_name, s.email, s.vip_plan_id, s.premium_until, s.module, s.level, s.lesson_id, s.topic_id, s.question_id, s.created_at, s.next_started_at
    ),
    final_sessions AS (
      SELECT *,
             (NOT has_ended AND last_seen_at >= NOW() - interval '90 seconds') AS is_active,
             GREATEST(0, FLOOR(EXTRACT(EPOCH FROM ((CASE WHEN NOT has_ended AND last_seen_at >= NOW() - interval '90 seconds' THEN NOW() ELSE last_seen_at END) - started_at))))::int AS duration_seconds
      FROM session_rollup
    )
  `;

  const [
    dailyLearners,
    dailyAttempts,
    topLessons,
    sourceBreakdown,
    vipModalOpens,
    registeredCount,
    learnersCount,
    popupCount,
    vipCount,
    vipBehaviorRows,
    vipModuleSummary,
    vipContentSummary,
    vipUserSummary,
  ] = await Promise.all([
    query(
      `SELECT ${dayBucket} AS day, COUNT(DISTINCT user_id) AS value
       FROM learning_events
       WHERE ${withinRange} AND event_type IN ('lesson_opened', 'question_answered', 'practice_completed') AND user_id IS NOT NULL
       GROUP BY 1 ORDER BY 1`,
      params,
    ),
    query(
      `SELECT ${dayBucket} AS day, COUNT(*) AS value
       FROM learning_events
       WHERE ${withinRange} AND event_type = 'practice_completed'
       GROUP BY 1 ORDER BY 1`,
      params,
    ),
    query(
      `SELECT lesson_id, level, COUNT(*) AS value, COUNT(DISTINCT user_id) AS learners
       FROM learning_events
       WHERE ${withinRange} AND event_type = 'lesson_opened' AND lesson_id IS NOT NULL
       GROUP BY lesson_id, level ORDER BY value DESC LIMIT 10`,
      params,
    ),
    query(
      `SELECT COALESCE(NULLIF(source, ''), 'direct') AS source, COUNT(*) AS events, COUNT(DISTINCT user_id) AS users
       FROM learning_events
       WHERE ${withinRange}
       GROUP BY 1 ORDER BY events DESC`,
      params,
    ),
    query(
      `SELECT COUNT(*) AS value FROM learning_events WHERE ${withinRange} AND event_type = 'vip_modal_opened'`,
      params,
    ),
    query(`SELECT COUNT(*) AS value FROM users WHERE ${withinRange}`, params),
    query(
      `SELECT COUNT(DISTINCT user_id) AS value FROM learning_events
       WHERE ${withinRange} AND event_type IN ('lesson_opened', 'question_answered', 'practice_completed') AND user_id IS NOT NULL`,
      params,
    ),
    query(
      `SELECT COUNT(DISTINCT user_id) AS value FROM learning_events
       WHERE ${withinRange} AND event_type IN ('paywall_shown', 'vip_modal_opened') AND user_id IS NOT NULL`,
      params,
    ),
    query(
      `SELECT COUNT(*) AS value FROM users
       WHERE ${withinRange} AND is_premium = TRUE AND (premium_until IS NULL OR premium_until > NOW())`,
      params,
    ),
    query(
      `${vipSessionCte}
       SELECT *
       FROM final_sessions
       ORDER BY is_active DESC, last_seen_at DESC
       LIMIT 500`,
      params,
    ),
    query(
      `${vipSessionCte}
       SELECT COALESCE(NULLIF(module, ''), 'unknown') AS module,
              COUNT(*)::int AS sessions,
              COUNT(DISTINCT user_id)::int AS vip_users,
              COUNT(*) FILTER (WHERE is_active)::int AS active_sessions,
              COALESCE(SUM(duration_seconds), 0)::bigint AS total_seconds,
              COALESCE(ROUND(AVG(duration_seconds)), 0)::int AS avg_seconds
       FROM final_sessions
       GROUP BY 1
       ORDER BY total_seconds DESC, sessions DESC, module ASC`,
      params,
    ),
    query(
      `${vipSessionCte}
       SELECT COALESCE(NULLIF(module, ''), 'unknown') AS module,
              COALESCE(NULLIF(level, ''), '') AS level,
              COALESCE(NULLIF(topic_id, ''), '') AS topic_id,
              COALESCE(NULLIF(lesson_id, ''), '') AS lesson_id,
              COALESCE(NULLIF(question_id, ''), '') AS question_id,
              COUNT(*)::int AS sessions,
              COUNT(DISTINCT user_id)::int AS vip_users,
              COUNT(*) FILTER (WHERE is_active)::int AS active_sessions,
              COALESCE(SUM(duration_seconds), 0)::bigint AS total_seconds,
              COALESCE(ROUND(AVG(duration_seconds)), 0)::int AS avg_seconds,
              MAX(last_seen_at) AS last_seen_at
       FROM final_sessions
       GROUP BY 1, 2, 3, 4, 5
       ORDER BY total_seconds DESC, sessions DESC, module ASC, level ASC, topic_id ASC, lesson_id ASC
       LIMIT 500`,
      params,
    ),
    query(
      `${vipSessionCte}
       SELECT user_id,
              MAX(full_name) AS full_name,
              MAX(email) AS email,
              MAX(vip_plan_id) AS vip_plan_id,
              COUNT(*)::int AS sessions,
              COUNT(DISTINCT COALESCE(NULLIF(module, ''), 'unknown'))::int AS modules,
              COUNT(*) FILTER (WHERE is_active)::int AS active_sessions,
              COALESCE(SUM(duration_seconds), 0)::bigint AS total_seconds,
              COALESCE(ROUND(AVG(duration_seconds)), 0)::int AS avg_seconds,
              MAX(last_seen_at) AS last_seen_at,
              BOOL_OR(is_active) AS is_active
       FROM final_sessions
       GROUP BY user_id
       ORDER BY is_active DESC, total_seconds DESC, last_seen_at DESC
       LIMIT 20`,
      params,
    ),
  ]);

  const num = (result) => Number(result.rows[0]?.value || 0);

  const response = {
    meta: { days, from: fromYmd, to: toYmd },
    dailyLearners: buildLearningDailySeries(dailyLearners.rows, fromYmd, toYmd),
    dailyAttempts: buildLearningDailySeries(dailyAttempts.rows, fromYmd, toYmd),
    topLessons: topLessons.rows.map((row) => ({
      lessonId: row.lesson_id,
      level: row.level || "",
      opens: Number(row.value) || 0,
      learners: Number(row.learners) || 0,
    })),
    sources: sourceBreakdown.rows.map((row) => ({
      source: row.source,
      events: Number(row.events) || 0,
      users: Number(row.users) || 0,
    })),
    vipBehavior: {
      activeSessions: vipBehaviorRows.rows.filter((row) => row.is_active === true).length,
      totalStudySeconds: vipModuleSummary.rows.reduce((sum, row) => sum + (Number(row.total_seconds) || 0), 0),
      moduleSummary: vipModuleSummary.rows.map((row) => ({
        module: row.module || "",
        sessions: Number(row.sessions) || 0,
        vipUsers: Number(row.vip_users) || 0,
        activeSessions: Number(row.active_sessions) || 0,
        totalSeconds: Number(row.total_seconds) || 0,
        avgSeconds: Number(row.avg_seconds) || 0,
      })),
      contentSummary: vipContentSummary.rows.map((row) => ({
        module: row.module || "",
        level: row.level || "",
        topicId: row.topic_id || "",
        lessonId: row.lesson_id || "",
        questionId: row.question_id || "",
        sessions: Number(row.sessions) || 0,
        vipUsers: Number(row.vip_users) || 0,
        activeSessions: Number(row.active_sessions) || 0,
        totalSeconds: Number(row.total_seconds) || 0,
        avgSeconds: Number(row.avg_seconds) || 0,
        lastSeenAt: row.last_seen_at,
      })),
      userSummary: vipUserSummary.rows.map((row) => ({
        userId: row.user_id,
        fullName: row.full_name || "",
        email: row.email || "",
        vipPlanId: row.vip_plan_id || "VIP",
        sessions: Number(row.sessions) || 0,
        modules: Number(row.modules) || 0,
        activeSessions: Number(row.active_sessions) || 0,
        totalSeconds: Number(row.total_seconds) || 0,
        avgSeconds: Number(row.avg_seconds) || 0,
        lastSeenAt: row.last_seen_at,
        isActive: row.is_active === true,
      })),
      recentSessions: vipBehaviorRows.rows.map((row) => ({
        userId: row.user_id,
        fullName: row.full_name || "",
        email: row.email || "",
        vipPlanId: row.vip_plan_id || "VIP",
        module: row.module || "",
        level: row.level || "",
        lessonId: row.lesson_id || "",
        topicId: row.topic_id || "",
        questionId: row.question_id || "",
        startedAt: row.started_at,
        lastSeenAt: row.last_seen_at,
        isActive: row.is_active === true,
        durationSeconds: Number(row.duration_seconds) || 0,
        eventCount: Number(row.event_count) || 0,
      })),
    },
    vipModalOpens: num(vipModalOpens),
    funnel: {
      registered: num(registeredCount),
      learned: num(learnersCount),
      popup: num(popupCount),
      vip: num(vipCount),
    },
  };
  return json(bypassCache ? response : setAnalyticsCache(cacheKey, response));
}

async function getVipManagement(req, searchParams) {
  await assertAdmin(req);
  const { fromYmd, toYmd, days } = resolveAnalyticsRange(searchParams);
  const cacheKey = analyticsCacheKey("vip", fromYmd, toYmd);
  const cached = getAnalyticsCache(cacheKey);
  if (cached) return json(cached);
  const eventWithinRange = `created_at >= ($1::date::timestamp AT TIME ZONE '${ANALYTICS_TZ}') AND created_at < (($2::date + 1)::timestamp AT TIME ZONE '${ANALYTICS_TZ}')`;
  const paidWithinRange = `o.paid_at >= ($1::date::timestamp AT TIME ZONE '${ANALYTICS_TZ}') AND o.paid_at < (($2::date + 1)::timestamp AT TIME ZONE '${ANALYTICS_TZ}')`;
  const paidDayBucket = `to_char(date_trunc('day', o.paid_at AT TIME ZONE '${ANALYTICS_TZ}'), 'YYYY-MM-DD')`;
  const validVipPaymentFilter = `o.amount IN (29000, 129000, 329000)`;
  const realVipUserFilter = `LOWER(COALESCE(u.email, '')) NOT LIKE 'test%@%'`;
  const params = [fromYmd, toYmd];

  const [vipModalOpens, registeredUsers, paidTotals, dailyRevenue, planBreakdown, userPlanRows] = await Promise.all([
    query(
      `SELECT COUNT(*) AS value FROM learning_events WHERE ${eventWithinRange} AND event_type = 'vip_modal_opened'`,
      params,
    ),
    query(
      `SELECT COUNT(*) AS value FROM users WHERE ${eventWithinRange}`,
      params,
    ),
    query(
      `SELECT COUNT(*)::int AS activations, COALESCE(SUM(o.amount), 0)::bigint AS revenue
       FROM payment_orders o
       JOIN users u ON u.id = o.user_id
       WHERE o.status = 'paid' AND o.paid_at IS NOT NULL AND ${validVipPaymentFilter} AND ${realVipUserFilter} AND ${paidWithinRange}`,
      params,
    ),
    query(
      `SELECT ${paidDayBucket} AS day, COALESCE(SUM(o.amount), 0)::bigint AS value
       FROM payment_orders o
       JOIN users u ON u.id = o.user_id
       WHERE o.status = 'paid' AND o.paid_at IS NOT NULL AND ${validVipPaymentFilter} AND ${realVipUserFilter} AND ${paidWithinRange}
       GROUP BY 1 ORDER BY 1`,
      params,
    ),
    query(
      `SELECT o.plan_id, COALESCE(p.name_vi, o.plan_id) AS plan_name,
              COUNT(*)::int AS activations,
              COALESCE(SUM(o.amount), 0)::bigint AS revenue
       FROM payment_orders o
       JOIN users u ON u.id = o.user_id
       LEFT JOIN payment_plans p ON p.id = o.plan_id
       WHERE o.status = 'paid' AND o.paid_at IS NOT NULL AND ${validVipPaymentFilter} AND ${realVipUserFilter} AND ${paidWithinRange}
       GROUP BY o.plan_id, p.name_vi
       ORDER BY revenue DESC, activations DESC`,
      params,
    ),
    query(
      `SELECT u.id AS user_id, u.full_name, u.email, u.is_premium, u.premium_until, u.vip_plan_id,
              o.plan_id, COALESCE(p.name_vi, o.plan_id) AS plan_name,
              COUNT(*)::int AS activations,
              COALESCE(SUM(o.amount), 0)::bigint AS revenue,
              MAX(o.paid_at) AS latest_paid_at
       FROM payment_orders o
       JOIN users u ON u.id = o.user_id
       LEFT JOIN payment_plans p ON p.id = o.plan_id
       WHERE o.status = 'paid' AND o.paid_at IS NOT NULL AND ${validVipPaymentFilter} AND ${realVipUserFilter} AND ${paidWithinRange}
       GROUP BY u.id, u.full_name, u.email, u.is_premium, u.premium_until, u.vip_plan_id, o.plan_id, p.name_vi
       ORDER BY revenue DESC, latest_paid_at DESC`,
      params,
    ),
  ]);

  const usersById = new Map();
  for (const row of userPlanRows.rows) {
    const userId = String(row.user_id || "");
    if (!usersById.has(userId)) {
      usersById.set(userId, {
        userId,
        fullName: row.full_name || "",
        email: row.email || "",
        isPremium: row.is_premium === true,
        premiumUntil: row.premium_until || null,
        currentPlanId: row.vip_plan_id || "",
        totalActivations: 0,
        totalRevenue: 0,
        latestPaidAt: null,
        plans: {},
      });
    }
    const user = usersById.get(userId);
    const planId = String(row.plan_id || "unknown").toLowerCase();
    const activations = Number(row.activations || 0);
    const revenue = Number(row.revenue || 0);
    user.totalActivations += activations;
    user.totalRevenue += revenue;
    const latestPaidAt = row.latest_paid_at || null;
    if (latestPaidAt && (!user.latestPaidAt || new Date(latestPaidAt).getTime() > new Date(user.latestPaidAt).getTime())) {
      user.latestPaidAt = latestPaidAt;
    }
    user.plans[planId] = {
      planId,
      planName: row.plan_name || planId,
      activations,
      revenue,
    };
  }

  const response = {
    meta: { days, from: fromYmd, to: toYmd },
    vipModalOpens: Number(vipModalOpens.rows[0]?.value || 0),
    registeredUsers: Number(registeredUsers.rows[0]?.value || 0),
    vipActivations: Number(paidTotals.rows[0]?.activations || 0),
    revenue: Number(paidTotals.rows[0]?.revenue || 0),
    dailyRevenue: buildLearningDailySeries(dailyRevenue.rows, fromYmd, toYmd),
    planBreakdown: planBreakdown.rows.map((row) => ({
      planId: row.plan_id || "",
      planName: row.plan_name || row.plan_id || "",
      activations: Number(row.activations || 0),
      revenue: Number(row.revenue || 0),
    })),
    users: Array.from(usersById.values()).sort((a, b) => b.totalRevenue - a.totalRevenue || b.totalActivations - a.totalActivations),
  };
  return json(setAnalyticsCache(cacheKey, response));
}

async function route(req) {
  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/\.netlify\/functions\/api/, "/api");
  const body = await readBody(req);

  if (req.method === "POST" && path === "/api/events") return recordLearningEvents(req, body);
  if (req.method === "GET" && path === "/api/admin/analytics/overview") return getLearningAnalytics(req, url.searchParams);
  if (req.method === "GET" && path === "/api/admin/vip/overview") return getVipManagement(req, url.searchParams);
  if (req.method === "GET" && path === "/api/coins/summary") return getCoinSummary(req);
  if (req.method === "POST" && path === "/api/coins/claim") return claimHomeCoin(req, body);
  if (req.method === "GET" && path === "/api/coins/leaderboard") return getCoinLeaderboard(req, url.searchParams);

  if (req.method === "POST" && path === "/api/register") return register(body);
  if (req.method === "POST" && path === "/api/login") return login(body);
  if (req.method === "POST" && path === "/api/password-reset/request") return requestPasswordReset(body);
  if (req.method === "POST" && path === "/api/password-reset/verify") return verifyPasswordResetCode(body);
  if (req.method === "POST" && path === "/api/password-reset/confirm") return confirmPasswordReset(body);
  if (req.method === "POST" && path === "/api/listening/pronunciation-assessment") return assessListeningPronunciation(body);
  const ownStatusMatch = path.match(/^\/api\/users\/([^/]+)\/status$/);
  if (ownStatusMatch && req.method === "GET") return getCurrentUserStatus(req, decodeURIComponent(ownStatusMatch[1]));
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
  const adminUserRoleMatch = path.match(/^\/api\/admin\/users\/([^/]+)\/role$/);
  if (adminUserRoleMatch && req.method === "PATCH") return updateUserRole(req, decodeURIComponent(adminUserRoleMatch[1]), body);
  const adminUserRefMatch = path.match(/^\/api\/admin\/users\/([^/]+)\/ref$/);
  if (adminUserRefMatch && req.method === "PATCH") return updateUserRef(req, decodeURIComponent(adminUserRefMatch[1]), body);
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
  if (req.method === "GET" && path === "/api/content/access-rules") return getPublicLearningAccessRules();
  if (req.method === "GET" && path === "/api/content/hsk-level-covers") return getPublicHskLevelCovers();
  if (req.method === "GET" && path === "/api/admin/content/hsk-locks") return listAdminHskLocks(req);
  if (req.method === "PUT" && path === "/api/admin/content/hsk-locks") return saveAdminHskLocks(req, body);
  if (req.method === "GET" && path === "/api/admin/content/hsk-level-covers") return listAdminHskLevelCovers(req);
  if (req.method === "PUT" && path === "/api/admin/content/hsk-level-covers") return saveAdminHskLevelCovers(req, body);
  if (req.method === "GET" && path === "/api/admin/content/daily-locks") return listAdminDailyLocks(req);
  if (req.method === "PUT" && path === "/api/admin/content/daily-locks") return saveAdminDailyLocks(req, body);
  if (req.method === "GET" && path === "/api/admin/content/listening-locks") return listAdminListeningLocks(req);
  if (req.method === "PUT" && path === "/api/admin/content/listening-locks") return saveAdminListeningLocks(req, body);
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
