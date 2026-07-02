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
const adminKey = process.env.ADMIN_KEY || "admin-dev-key";
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
      if (raw.length > 1024 * 1024) {
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

function isAdminRequest(req, url) {
  const headerKey = req.headers["x-admin-key"];
  const queryKey = url.searchParams.get("adminKey");
  return (headerKey || queryKey) === adminKey;
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
  if (!isAdminRequest(req, url)) {
    sendJson(res, 401, { error: "Admin key không hợp lệ." });
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
  const filePath = path.resolve(root, path.extname(requested) ? `.${requested}` : "index.html");
  if (!filePath.startsWith(root)) {
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
      console.log(`Admin key: ${adminKey === "admin-dev-key" ? "admin-dev-key (development only)" : "configured"}`);
    });
  })
  .catch((error) => {
    console.error("Cannot initialize database schema:", error);
    process.exit(1);
  });
