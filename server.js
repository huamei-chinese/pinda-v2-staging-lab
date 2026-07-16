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
    role: normalizePublicRole(row.role),
    ref: row.ref || "",
    partnerCode: row.partner_code || "",
    src: row.src || "",
    isActive: row.is_active,
    registeredAt: row.created_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    lastLoginAt: row.last_login_at,
  };
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
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(normalized)
    ? normalized
    : "";
}

function getRequestHeader(req, name) {
  const value = req.headers[String(name || "").toLowerCase()];
  return Array.isArray(value) ? value[0] : value || "";
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

async function getCoinRequester(req) {
  const userId = normalizeUuid(getRequestHeader(req, "x-user-id"));
  if (!userId || !pool) return null;
  const result = await pool.query(
    "SELECT id, full_name, email, avatar_url, is_active FROM users WHERE id = $1",
    [userId],
  );
  const user = result.rows[0];
  if (!user?.is_active) return null;
  return user;
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

async function getCoinWallet(userId) {
  const result = await pool.query(
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
  const result = await pool.query(
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

async function getCoinLeaderboardData(req, searchParams = new URLSearchParams()) {
  const requester = await getCoinRequester(req);
  const currentUserId = requester?.id || null;
  const period = normalizeCoinPeriod(searchParams.get("period"));
  const limit = Math.max(1, Math.min(50, Number(searchParams.get("limit") || 10) || 10));
  const scopedStartSql = coinPeriodSql(period);
  const result = await pool.query(
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
  return {
    period,
    entries: entries.filter((entry) => entry.rank <= limit),
    current: currentUserId ? entries.find((entry) => entry.userId === currentUserId) || null : null,
    generatedAt: new Date().toISOString(),
  };
}

function normalizeEditableRole(role) {
  const normalized = normalizePublicRole(role);
  return ["user", "sales", "ctv", "content", "staff"].includes(normalized) ? normalized : "user";
}

function isEditableRoleValue(role) {
  const normalized = String(role || "").trim().toLowerCase();
  return ["user", "sales", "koc", "ctv", "content", "staff", "employee", "content_manager"].includes(normalized);
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
  await pool.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS partner_code TEXT;");
  await pool.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_users_partner_code_unique
    ON users (lower(btrim(partner_code)))
    WHERE partner_code IS NOT NULL AND btrim(partner_code) <> '';
  `);
  await pool.query(`
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
  const duplicate = await pool.query(
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
  throw new Error("Cannot create a unique referral code for this user.");
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
  const owner = await pool.query(
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

function resolveAnalyticsRange(searchParams) {
  const today = new Date();
  const days = Math.min(ANALYTICS_MAX_SPAN_DAYS, Math.max(1, Number(searchParams.get("days") || 30) || 30));
  const fromParam = analyticsNormalizeDateInput(searchParams.get("from"));
  const toParam = analyticsNormalizeDateInput(searchParams.get("to"));
  const toDate = analyticsYmdToUtcDate(toParam) || today;
  const fromDate = analyticsYmdToUtcDate(fromParam) || new Date(toDate.getTime() - (days - 1) * 86400000);
  if (fromDate > toDate) {
    const time = fromDate.getTime();
    fromDate.setTime(toDate.getTime());
    toDate.setTime(time);
  }
  const spanDays = Math.max(1, Math.floor((toDate.getTime() - fromDate.getTime()) / 86400000) + 1);
  if (spanDays > ANALYTICS_MAX_SPAN_DAYS) {
    fromDate.setTime(toDate.getTime() - (ANALYTICS_MAX_SPAN_DAYS - 1) * 86400000);
  }
  return {
    fromYmd: analyticsToYmd(fromDate),
    toYmd: analyticsToYmd(toDate),
    days: Math.min(spanDays, ANALYTICS_MAX_SPAN_DAYS),
  };
}

function buildDailySeries(rows, fromYmd, toYmd) {
  const values = new Map(rows.map((row) => [String(row.day), Number(row.value) || 0]));
  const start = analyticsYmdToUtcDate(fromYmd);
  const end = analyticsYmdToUtcDate(toYmd);
  const series = [];
  if (!start || !end) return series;
  for (const cursor = new Date(start); cursor <= end; cursor.setUTCDate(cursor.getUTCDate() + 1)) {
    const day = analyticsToYmd(cursor);
    series.push({ day, value: values.get(day) || 0 });
  }
  return series;
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

function repairMojibake(value) {
  const text = String(value || "");
  if (!/[ÃÂÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/.test(text)) return text;
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
    return repaired.includes("�") ? text : repaired;
  } catch {
    return text;
  }
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
  const hasSpeechace = Boolean(process.env.SPEECHACE_API_KEY);
  if (requested === "iflytek") return hasIflytek ? "iflytek" : "";
  if (requested === "azure") return hasAzure ? "azure" : "";
  if (requested === "speechace") return hasSpeechace ? "speechace" : "";
  if (hasSpeechace) return "speechace";
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

function speechaceScoreValue(data) {
  return normalizeProviderScore(
    data?.text_score?.speechace_score?.pronunciation
    ?? data?.text_score?.speechace_score?.overall
    ?? data?.text_score?.quality_score
    ?? data?.speechace_score?.pronunciation
    ?? data?.speechace_score?.overall
    ?? data?.pronunciation_score
    ?? data?.score,
  );
}

function speechaceWords(data) {
  const words = data?.text_score?.word_score_list || data?.word_score_list || data?.words || [];
  return Array.isArray(words) ? words.map((word) => {
    const score = normalizeProviderScore(
      word?.quality_score
      ?? word?.phone_score
      ?? word?.speechace_score?.pronunciation
      ?? word?.score,
    );
    return {
      word: word?.word || word?.text || "",
      accuracyScore: score,
      errorType: score === null || score >= 60 ? "None" : "Pronunciation",
    };
  }).filter((word) => word.word) : [];
}

function speechaceApiKey() {
  const key = process.env.SPEECHACE_API_KEY || "";
  try {
    return decodeURIComponent(key);
  } catch {
    return key;
  }
}

async function assessWithSpeechace(referenceText, audioBuffer, mimeType) {
  const key = speechaceApiKey();
  const endpoint = process.env.SPEECHACE_ENDPOINT || "https://api.speechace.co/api/scoring/text/v9/json";
  const dialect = process.env.SPEECHACE_DIALECT || "en-us";
  const userId = process.env.SPEECHACE_USER_ID || "huamei-listening";
  const url = new URL(endpoint);
  url.searchParams.set("key", key);
  url.searchParams.set("dialect", dialect);
  url.searchParams.set("user_id", userId);
  url.searchParams.set("include_fluency", process.env.SPEECHACE_INCLUDE_FLUENCY || "1");

  const form = new FormData();
  form.append("text", referenceText);
  form.append("user_audio_file", new Blob([audioBuffer], { type: pronunciationMimeType(mimeType) }), "recording.wav");

  const response = await fetch(url, { method: "POST", body: form });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data?.status === "error") {
    throw new Error(data?.message || data?.detail || data?.error || "Khong cham duoc phat am bang Speechace.");
  }

  const words = speechaceWords(data);
  const recognizedText = words.length ? words.map((word) => word.word).join("") : (data?.text || data?.text_score?.text || referenceText);
  const fallback = comparePronunciationFallback(referenceText, recognizedText || referenceText);
  const score = speechaceScoreValue(data) ?? fallback.score;
  const charResults = fallback.charResults.map((item) => ({
    ...item,
    correct: item.correct && score >= 60,
    errorType: item.correct && score >= 60 ? "None" : "Pronunciation",
    accuracyScore: score,
  }));

  return {
    provider: "speechace",
    recognizedText,
    score,
    accuracyScore: score,
    fluencyScore: normalizeProviderScore(data?.text_score?.speechace_score?.fluency ?? data?.fluency_score),
    completenessScore: normalizeProviderScore(data?.text_score?.speechace_score?.completeness ?? data?.completeness_score),
    words,
    charResults,
    raw: data,
  };
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
  const referenceText = repairUtf8Mojibake(String(body.referenceText || "")).trim();
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
      : provider === "speechace"
        ? await assessWithSpeechace(referenceText, audioBuffer, body.mimeType)
        : await assessWithAzure(referenceText, audioBuffer, body.mimeType);
    sendJson(res, 200, { ...result, ...assessToneAndIntonation(audioBuffer, body.pinyin || ""), referenceText });
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
  return normalizePublicRole(user?.role) === "admin" && user?.is_active === true;
}

async function getAdminRequester(req) {
  const adminUserId = req.headers["x-admin-user-id"];
  const userId = Array.isArray(adminUserId) ? adminUserId[0] : adminUserId;
  if (!userId || !pool) return null;

  const result = await pool.query("SELECT role, is_active FROM users WHERE id = $1", [userId]);
  const user = result.rows[0];
  if (!user?.is_active) return null;
  return { id: userId, role: normalizePublicRole(user.role) };
}

async function seedStaffAccounts() {
  if (!pool) return;
  await pool.query(
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
      role TEXT NOT NULL DEFAULT 'user',
      ref TEXT,
      partner_code TEXT,
      src TEXT,
      is_active BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      last_login_at TIMESTAMPTZ
    );
  `);
  await pool.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS ref TEXT;");
  await pool.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS partner_code TEXT;");
  await pool.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS src TEXT;");
  await pool.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_users_partner_code_unique
    ON users (lower(btrim(partner_code)))
    WHERE partner_code IS NOT NULL AND btrim(partner_code) <> '';
  `);
  await pool.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT FALSE;");
  await pool.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS premium_until TIMESTAMPTZ;");
  await pool.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS vip_plan_id TEXT;");
  await seedStaffAccounts();
  await pool.query(`
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
  await pool.query("CREATE INDEX IF NOT EXISTS idx_learning_events_created_at ON learning_events(created_at);");
  await pool.query("CREATE INDEX IF NOT EXISTS idx_learning_events_event_type ON learning_events(event_type);");
  await pool.query(`
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
  await pool.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_coin_transactions_unique_claim
    ON coin_transactions(user_id, source, period_key);
  `);
  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_coin_transactions_user_created
    ON coin_transactions(user_id, created_at DESC);
  `);
  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_coin_transactions_created
    ON coin_transactions(created_at DESC);
  `);
}

async function handleRegister(req, res) {
  if (!requireDatabase(res)) return;
  const body = await readBody(req);
  const fullName = String(body.fullName || body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const attribution = await resolveReferralAttribution(body.ref, body.src);

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
      `INSERT INTO users (full_name, email, password_hash, ref, src)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, full_name, email, role, ref, partner_code, src, is_active, created_at, updated_at, last_login_at`,
      [fullName, email, hashPassword(password), attribution.ref, attribution.src],
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
     RETURNING id, full_name, email, role, ref, partner_code, src, is_active, created_at, updated_at, last_login_at`,
    [user.id],
  );
  sendJson(res, 200, { user: publicUser(updated.rows[0]) });
}

async function handleAdminUsers(req, res, url) {
  if (!requireDatabase(res)) return;
  const requester = await getAdminRequester(req);
  if (!requester || !["admin", "staff"].includes(requester.role)) {
    sendJson(res, 401, { error: "Vui lòng đăng nhập bằng tài khoản admin." });
    return;
  }

  if (req.method === "GET") {
    await ensurePartnerCodes();
    const result = await pool.query(
      `SELECT id, full_name, email, role, ref, partner_code, src, is_active, created_at, updated_at, last_login_at
       FROM users
       ORDER BY created_at DESC`,
    );
    sendJson(res, 200, { users: result.rows.map(publicUser) });
    return;
  }

  const roleMatch = url.pathname.match(/^\/api\/admin\/users\/([0-9a-f-]+)\/role$/i);
  if (roleMatch && req.method === "PATCH") {
    const body = await readBody(req);
    if (!isEditableRoleValue(body.role)) {
      sendJson(res, 400, { error: "Role must be user, sales, ctv, content or staff." });
      return;
    }
    const nextRole = normalizeEditableRole(body.role);
    if (!["user", "sales", "ctv", "content", "staff"].includes(nextRole)) {
      sendJson(res, 400, { error: "Role must be user, sales, ctv, content or staff." });
      return;
    }
    const current = await pool.query(
      `SELECT id, full_name, email, role, ref, partner_code
       FROM users
       WHERE id = $1`,
      [roleMatch[1]],
    );
    const currentUser = current.rows[0];
    if (!currentUser) {
      sendJson(res, 404, { error: "Khong tim thay user." });
      return;
    }
    const currentRole = normalizePublicRole(currentUser.role);
    if (currentUser.id === requester.id) {
      sendJson(res, 403, { error: "You cannot change your own role." });
      return;
    }
    if (currentRole === "admin") {
      sendJson(res, 403, { error: "Cannot modify admin accounts." });
      return;
    }
    const roleChangeRef = await getReferralRefForRoleChange(currentUser, nextRole);
    const result = await pool.query(
      `UPDATE users
       SET role = $1,
           ref = CASE WHEN $3::boolean THEN $4 ELSE ref END,
           updated_at = NOW()
       WHERE id = $2
       RETURNING id`,
      [nextRole, roleMatch[1], roleChangeRef.shouldSetRef, roleChangeRef.ref],
    );
    if (!result.rows[0]) {
      sendJson(res, 404, { error: "Khong tim thay user." });
      return;
    }
    await ensurePartnerCodes();
    const refreshed = await pool.query(
      `SELECT id, full_name, email, role, ref, partner_code, src, is_active, created_at, updated_at, last_login_at
       FROM users
       WHERE id = $1`,
      [roleMatch[1]],
    );
    sendJson(res, 200, { user: publicUser(refreshed.rows[0]) });
    return;
  }

  const refMatch = url.pathname.match(/^\/api\/admin\/users\/([0-9a-f-]+)\/ref$/i);
  if (refMatch && req.method === "PATCH") {
    const body = await readBody(req);
    const ref = normalizeReferralRef(body.ref);
    if (!ref) {
      sendJson(res, 400, { error: "Mã ref không hợp lệ." });
      return;
    }
    const current = await pool.query(
      `SELECT id, role
       FROM users
       WHERE id = $1`,
      [refMatch[1]],
    );
    const currentUser = current.rows[0];
    if (!currentUser) {
      sendJson(res, 404, { error: "Không tìm thấy user." });
      return;
    }
    const currentRole = normalizePublicRole(currentUser.role);
    if (!["ctv", "sales"].includes(currentRole)) {
      sendJson(res, 400, { error: "Chỉ tài khoản CTV mới được tạo link ref." });
      return;
    }
    const duplicate = await findPartnerReferralOwner(ref, refMatch[1]);
    if (duplicate) {
      sendJson(res, 409, { error: "Ma ref nay dang duoc dung boi CTV/nhan vien khac." });
      return;
    }
    const result = await pool.query(
      `UPDATE users
       SET ref = $1, updated_at = NOW()
       WHERE id = $2
       RETURNING id, full_name, email, role, ref, partner_code, src, is_active, created_at, updated_at, last_login_at`,
      [ref, refMatch[1]],
    );
    sendJson(res, 200, { user: publicUser(result.rows[0]) });
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
    const role = normalizeEditableRole(body.role);
    const isActive = body.isActive === true;
    const roleCurrent = await pool.query(
      `SELECT id, full_name, email, role, ref, partner_code
       FROM users
       WHERE id = $1`,
      [idMatch[1]],
    );
    const roleCurrentUser = roleCurrent.rows[0];
    if (!roleCurrentUser) {
      sendJson(res, 404, { error: "Khong tim thay user." });
      return;
    }
    const roleCurrentRole = normalizePublicRole(roleCurrentUser.role);

    if (!fullName || !email) {
      sendJson(res, 400, { error: "Tên và email không được để trống." });
      return;
    }
    if (requester.role === "staff") {
      const current = await pool.query(
        `SELECT id, role
         FROM users
         WHERE id = $1`,
        [idMatch[1]],
      );
      const currentUser = current.rows[0];
      if (!currentUser) {
        sendJson(res, 404, { error: "KhÃ´ng tÃ¬m tháº¥y user." });
        return;
      }
      const currentRole = normalizePublicRole(currentUser.role);
      if (currentRole === "admin") {
        sendJson(res, 403, { error: "Staff cannot modify admin accounts." });
        return;
      }
      if (String(requester.id) === String(idMatch[1]) && role !== currentRole) {
        sendJson(res, 403, { error: "Staff cannot change their own role from this endpoint." });
        return;
      }
    }

    const roleToSave = roleCurrentRole === "admin" ? roleCurrentUser.role : role;
    const roleChangeRef = await getReferralRefForRoleChange(roleCurrentUser, roleToSave);
    const result = await pool.query(
      `UPDATE users
       SET full_name = $1,
           email = $2,
           role = $3,
           ref = CASE WHEN $6::boolean THEN $7 ELSE ref END,
           is_active = $4,
           updated_at = NOW()
       WHERE id = $5
       RETURNING id`,
      [fullName, email, roleToSave, isActive, idMatch[1], roleChangeRef.shouldSetRef, roleChangeRef.ref],
    );
    if (!result.rows[0]) {
      sendJson(res, 404, { error: "Không tìm thấy user." });
      return;
    }
    await ensurePartnerCodes();
    const refreshed = await pool.query(
      `SELECT id, full_name, email, role, ref, partner_code, src, is_active, created_at, updated_at, last_login_at
       FROM users
       WHERE id = $1`,
      [idMatch[1]],
    );
    sendJson(res, 200, { user: publicUser(refreshed.rows[0]) });
    return;
  }

  if (req.method === "DELETE") {
    if (requester.role === "staff") {
      if (String(requester.id) === String(idMatch[1])) {
        sendJson(res, 403, { error: "Staff cannot delete their own account." });
        return;
      }
      const current = await pool.query(
        `SELECT id, role
         FROM users
         WHERE id = $1`,
        [idMatch[1]],
      );
      const currentUser = current.rows[0];
      if (!currentUser) {
        sendJson(res, 404, { error: "KhÃ´ng tÃ¬m tháº¥y user." });
        return;
      }
      if (normalizePublicRole(currentUser.role) === "admin") {
        sendJson(res, 403, { error: "Staff cannot delete admin accounts." });
        return;
      }
    }
    await pool.query("DELETE FROM users WHERE id = $1", [idMatch[1]]);
    sendJson(res, 200, { ok: true });
    return;
  }

  sendJson(res, 405, { error: "Method không được hỗ trợ." });
}

async function handleAdminAnalyticsOverview(req, res, url) {
  if (!requireDatabase(res)) return;
  if (!(await isAdminRequest(req))) {
    sendJson(res, 401, { error: "Vui lòng đăng nhập bằng tài khoản admin." });
    return;
  }

  const { fromYmd, toYmd, days } = resolveAnalyticsRange(url.searchParams);
  const bypassCache = url.searchParams.get("live") === "1";
  const cacheKey = analyticsCacheKey("learning", fromYmd, toYmd);
  const cached = bypassCache ? null : getAnalyticsCache(cacheKey);
  if (cached) {
    sendJson(res, 200, cached);
    return;
  }
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
    pool.query(
      `SELECT ${dayBucket} AS day, COUNT(DISTINCT user_id) AS value
       FROM learning_events
       WHERE ${withinRange} AND event_type IN ('lesson_opened', 'question_answered', 'practice_completed') AND user_id IS NOT NULL
       GROUP BY 1 ORDER BY 1`,
      params,
    ),
    pool.query(
      `SELECT ${dayBucket} AS day, COUNT(*) AS value
       FROM learning_events
       WHERE ${withinRange} AND event_type = 'practice_completed'
       GROUP BY 1 ORDER BY 1`,
      params,
    ),
    pool.query(
      `SELECT lesson_id, level, COUNT(*) AS value, COUNT(DISTINCT user_id) AS learners
       FROM learning_events
       WHERE ${withinRange} AND event_type = 'lesson_opened' AND lesson_id IS NOT NULL
       GROUP BY lesson_id, level ORDER BY value DESC LIMIT 10`,
      params,
    ),
    pool.query(
      `SELECT COALESCE(NULLIF(source, ''), 'direct') AS source, COUNT(*) AS events, COUNT(DISTINCT user_id) AS users
       FROM learning_events
       WHERE ${withinRange}
       GROUP BY 1 ORDER BY events DESC`,
      params,
    ),
    pool.query(
      `SELECT COUNT(*) AS value FROM learning_events WHERE ${withinRange} AND event_type = 'vip_modal_opened'`,
      params,
    ),
    pool.query(
      `SELECT COUNT(*) AS value FROM users WHERE ${withinRange}`,
      params,
    ),
    pool.query(
      `SELECT COUNT(DISTINCT user_id) AS value FROM learning_events
       WHERE ${withinRange} AND event_type IN ('lesson_opened', 'question_answered', 'practice_completed') AND user_id IS NOT NULL`,
      params,
    ),
    pool.query(
      `SELECT COUNT(DISTINCT user_id) AS value FROM learning_events
       WHERE ${withinRange} AND event_type IN ('paywall_shown', 'vip_modal_opened') AND user_id IS NOT NULL`,
      params,
    ),
    pool.query(
      `SELECT COUNT(*) AS value FROM users
       WHERE ${withinRange} AND is_premium = TRUE AND (premium_until IS NULL OR premium_until > NOW())`,
      params,
    ),
    pool.query(
      `${vipSessionCte}
       SELECT *
       FROM final_sessions
       ORDER BY is_active DESC, last_seen_at DESC
       LIMIT 500`,
      params,
    ),
    pool.query(
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
    pool.query(
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
    pool.query(
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
    dailyLearners: buildDailySeries(dailyLearners.rows, fromYmd, toYmd),
    dailyAttempts: buildDailySeries(dailyAttempts.rows, fromYmd, toYmd),
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
  sendJson(res, 200, bypassCache ? response : setAnalyticsCache(cacheKey, response));
}

async function handleAdminVipOverview(req, res, url) {
  if (!requireDatabase(res)) return;
  if (!(await isAdminRequest(req))) {
    sendJson(res, 401, { error: "Vui lÃ²ng Ä‘Äƒng nháº­p báº±ng tÃ i khoáº£n admin." });
    return;
  }

  const { fromYmd, toYmd, days } = resolveAnalyticsRange(url.searchParams);
  const cacheKey = analyticsCacheKey("vip", fromYmd, toYmd);
  const cached = getAnalyticsCache(cacheKey);
  if (cached) {
    sendJson(res, 200, cached);
    return;
  }
  const eventWithinRange = `created_at >= ($1::date::timestamp AT TIME ZONE '${ANALYTICS_TZ}') AND created_at < (($2::date + 1)::timestamp AT TIME ZONE '${ANALYTICS_TZ}')`;
  const paidWithinRange = `o.paid_at >= ($1::date::timestamp AT TIME ZONE '${ANALYTICS_TZ}') AND o.paid_at < (($2::date + 1)::timestamp AT TIME ZONE '${ANALYTICS_TZ}')`;
  const paidDayBucket = `to_char(date_trunc('day', o.paid_at AT TIME ZONE '${ANALYTICS_TZ}'), 'YYYY-MM-DD')`;
  const validVipPaymentFilter = `o.amount IN (29000, 129000, 329000)`;
  const realVipUserFilter = `LOWER(COALESCE(u.email, '')) NOT LIKE 'test%@%'`;
  const params = [fromYmd, toYmd];

  const [vipModalOpens, registeredUsers, paidTotals, dailyRevenue, planBreakdown, userPlanRows] = await Promise.all([
    pool.query(
      `SELECT COUNT(*) AS value FROM learning_events WHERE ${eventWithinRange} AND event_type = 'vip_modal_opened'`,
      params,
    ),
    pool.query(
      `SELECT COUNT(*) AS value FROM users WHERE ${eventWithinRange}`,
      params,
    ),
    pool.query(
      `SELECT COUNT(*)::int AS activations, COALESCE(SUM(o.amount), 0)::bigint AS revenue
       FROM payment_orders o
       JOIN users u ON u.id = o.user_id
       WHERE o.status = 'paid' AND o.paid_at IS NOT NULL AND ${validVipPaymentFilter} AND ${realVipUserFilter} AND ${paidWithinRange}`,
      params,
    ),
    pool.query(
      `SELECT ${paidDayBucket} AS day, COALESCE(SUM(o.amount), 0)::bigint AS value
       FROM payment_orders o
       JOIN users u ON u.id = o.user_id
       WHERE o.status = 'paid' AND o.paid_at IS NOT NULL AND ${validVipPaymentFilter} AND ${realVipUserFilter} AND ${paidWithinRange}
       GROUP BY 1 ORDER BY 1`,
      params,
    ),
    pool.query(
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
    pool.query(
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
    dailyRevenue: buildDailySeries(dailyRevenue.rows, fromYmd, toYmd),
    planBreakdown: planBreakdown.rows.map((row) => ({
      planId: row.plan_id || "",
      planName: row.plan_name || row.plan_id || "",
      activations: Number(row.activations || 0),
      revenue: Number(row.revenue || 0),
    })),
    users: Array.from(usersById.values()).sort((a, b) => b.totalRevenue - a.totalRevenue || b.totalActivations - a.totalActivations),
  };
  sendJson(res, 200, setAnalyticsCache(cacheKey, response));
}

async function handleCoinSummary(req, res) {
  if (!requireDatabase(res)) return;
  const requester = await getCoinRequester(req);
  if (!requester) {
    sendJson(res, 401, { error: "Vui long dang nhap de dung xu HuaMei." });
    return;
  }
  const wallet = await getCoinWallet(requester.id);
  const today = await getTodayCoinClaims(requester.id);
  sendJson(res, 200, {
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

async function handleCoinClaim(req, res) {
  if (!requireDatabase(res)) return;
  const requester = await getCoinRequester(req);
  if (!requester) {
    sendJson(res, 401, { error: "Vui long dang nhap de nhan xu." });
    return;
  }
  const body = await readBody(req);
  const source = normalizeCoinSource(body.source || body.taskId);
  if (!source) {
    sendJson(res, 400, { error: "Nhiem vu nhan xu khong hop le." });
    return;
  }
  if (!isCoinClaimProgressEligible(source, body.progress)) {
    sendJson(res, 400, { error: "Nhiem vu chua du dieu kien nhan xu." });
    return;
  }
  const amount = rewardAmountForCoinSource(source);
  const rewardType = isDailyExpSource(source) ? "exp" : "coin";
  const periodKey = `daily:${getVietnamDateKey()}`;
  const metadata = {
    claimedFrom: rewardType === "exp" ? "home_daily_exp_bonus" : "home_coin_hunt",
    rewardType,
    clientProgress: body.progress && typeof body.progress === "object" ? body.progress : null,
  };
  const inserted = await pool.query(
    `INSERT INTO coin_transactions (user_id, source, period_key, amount, metadata)
     VALUES ($1, $2, $3, $4, $5::jsonb)
     ON CONFLICT (user_id, source, period_key) DO NOTHING
     RETURNING id, source, period_key, amount, created_at`,
    [requester.id, source, periodKey, amount, JSON.stringify(metadata)],
  );
  const wallet = await getCoinWallet(requester.id);
  const today = await getTodayCoinClaims(requester.id);
  sendJson(res, 200, {
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

async function handleCoinLeaderboard(req, res, url) {
  if (!requireDatabase(res)) return;
  const data = await getCoinLeaderboardData(req, url.searchParams);
  sendJson(res, 200, data);
}

function serveStatic(req, res, url) {
  // Local lab fallback for /listening-app/typing/ep-* exported routes.
  const usesTypingFallback = /^\/listening-app\/typing\/ep-\d+\/?$/.test(url.pathname);
  const usesListeningSpaFallback = /^\/listening-app(?:\/index\.html)?\/?$/.test(url.pathname) ||
    /^\/listening-app\/listening(?:\.html|\/index\.html)?\/?$/.test(url.pathname) ||
    /^\/listening-app\/listening\/ep-\d+(?:\.html)?\/?$/.test(url.pathname);
  const requested = usesTypingFallback
    ? "/listening-app/typing-detail-fallback.html"
    : usesListeningSpaFallback
      ? "/index.html"
    : url.pathname === "/" ? "/index.html" : url.pathname;
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
    if (url.pathname === "/api/admin/analytics/overview" && req.method === "GET") {
      await handleAdminAnalyticsOverview(req, res, url);
      return;
    }
    if (url.pathname === "/api/admin/vip/overview" && req.method === "GET") {
      await handleAdminVipOverview(req, res, url);
      return;
    }
    if (url.pathname === "/api/coins/summary" && req.method === "GET") {
      await handleCoinSummary(req, res);
      return;
    }
    if (url.pathname === "/api/coins/claim" && req.method === "POST") {
      await handleCoinClaim(req, res);
      return;
    }
    if (url.pathname === "/api/coins/leaderboard" && req.method === "GET") {
      await handleCoinLeaderboard(req, res, url);
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
