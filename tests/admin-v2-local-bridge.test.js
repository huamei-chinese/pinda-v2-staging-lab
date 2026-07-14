const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");
const localDataPath = path.join((typeof repoRoot !== "undefined" ? repoRoot : root), "dev-only", "admin-v2-local-data.json");

test("admin v2 exposes a safe local frontend-backend bridge shell", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "本地前后端接入安全壳",
    "当前数据源：本地 mock",
    "本地后端 API：连接检测中",
    "数据库：未连接",
    "支付/VIP 写入：禁止",
    "data-local-bridge-status",
    "data-local-users-body",
    "data-local-metrics",
  ]) {
    assert.match(text, new RegExp(required), `local bridge shell should include ${required}`);
  }

  assert.match(css, /\.local-bridge/);
  assert.match(css, /\.bridge-status-grid/);
});

test("admin v2 local bridge uses local preview API and blocks high risk endpoints", () => {
  assert.match(js, /adminV2LocalBridge/);
  assert.match(js, /mode:\s*"mock"/);
  assert.match(js, /dataUrl:\s*"\/api\/admin-v2\/local-preview"/);
  assert.doesNotMatch(js, /dataUrl:\s*"admin-v2-local-data\.json"/);
  assert.match(js, /renderAdminV2LocalData/);

  for (const blocked of [
    "/api/payments/orders",
    "/api/webhooks/sepay",
    "/api/admin/users/:id/role",
    "/api/admin/plans",
    "/api/admin/content",
  ]) {
    assert.match(js, new RegExp(blocked.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `bridge should block ${blocked}`);
  }

  assert.doesNotMatch(js, /fetch\(["']\/api\/payments/);
  assert.doesNotMatch(js, /fetch\(["']\/api\/webhooks/);
  assert.doesNotMatch(js, /DATABASE_URL/);
});

test("admin v2 local mock data is present and marked non-production", () => {
  assert.ok(fs.existsSync(localDataPath), "local mock data file should exist");
  const data = JSON.parse(fs.readFileSync(localDataPath, "utf8"));

  assert.equal(data.meta.mode, "mock");
  assert.equal(data.meta.productionSafe, true);
  assert.equal(data.meta.databaseConnected, false);
  assert.equal(data.meta.paymentWritesEnabled, false);
  assert.ok(Array.isArray(data.users));
  assert.ok(data.users.length >= 2);
  assert.ok(Array.isArray(data.blockedEndpoints));
  assert.ok(data.blockedEndpoints.includes("/api/webhooks/sepay"));
});
