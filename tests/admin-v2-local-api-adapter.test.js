const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const srcDir = path.join(root, "src");
const publicDir = path.join(root, "public");
const controllerPath = path.join(srcDir, "admin-v2-local-preview", "admin-v2-local-preview.controller.ts");
const modulePath = path.join(srcDir, "admin-v2-local-preview", "admin-v2-local-preview.module.ts");
const appModule = fs.readFileSync(path.join(srcDir, "app.module.ts"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 exposes a lab-only read-only local preview API", () => {
  assert.ok(fs.existsSync(controllerPath), "local preview controller should exist");
  assert.ok(fs.existsSync(modulePath), "local preview module should exist");

  const controller = fs.readFileSync(controllerPath, "utf8");
  const moduleSource = fs.readFileSync(modulePath, "utf8");

  assert.match(controller, /@Controller\("api\/admin-v2"\)/);
  assert.match(controller, /@Get\("local-preview"\)/);
  assert.match(controller, /admin-v2-local-data\.json/);
  assert.match(controller, /readOnly:\s*true/);
  assert.match(controller, /databaseConnected:\s*false/);
  assert.match(controller, /paymentWritesEnabled:\s*false/);
  assert.match(moduleSource, /AdminV2LocalPreviewController/);
});

test("admin v2 local preview API stays isolated from high risk backend modules", () => {
  const controller = fs.readFileSync(controllerPath, "utf8");
  const moduleSource = fs.readFileSync(modulePath, "utf8");
  const combined = `${controller}\n${moduleSource}`;

  for (const forbidden of [
    "DatabaseService",
    "DatabaseModule",
    "PaymentService",
    "PaymentModule",
    "AdminService",
    "AuthService",
    "SEPAY",
    "DATABASE_URL",
    "is_premium",
    "premium_until",
    "vip_plan_id",
  ]) {
    assert.doesNotMatch(combined, new RegExp(forbidden), `local API must not import or mention ${forbidden}`);
  }

  assert.match(appModule, /AdminV2LocalPreviewModule/);
});

test("admin v2 frontend prefers local API and falls back to static mock JSON", () => {
  assert.match(js, /apiUrl:\s*"\/api\/admin-v2\/local-preview"/);
  assert.match(js, /fetch\(adminV2LocalBridge\.apiUrl/);
  assert.match(js, /fetch\(adminV2LocalBridge\.dataUrl/);
  assert.match(js, /renderAdminV2LocalData/);
  assert.match(js, /data-local-api-label/);
  assert.match(js, /本地后端 API 已连接/);
  assert.doesNotMatch(js, /fetch\(["']\/api\/payments/);
  assert.doesNotMatch(js, /fetch\(["']\/api\/webhooks/);
});

test("admin v2 makes backend refresh visible to the boss", () => {
  const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");

  for (const required of [
    "刷新后端数据",
    "最近同步",
    "接口状态",
    "返回用户数",
    "数据版本",
    "data-refresh-backend",
    "data-api-last-sync",
    "data-api-user-count",
    "data-api-version",
  ]) {
    assert.match(html, new RegExp(required), `backend refresh surface should include ${required}`);
  }

  assert.match(js, /refreshAdminV2BackendData/);
  assert.match(js, /data-refresh-backend/);
  assert.match(js, /new Date\(\)\.toLocaleTimeString/);
  assert.match(js, /data-api-user-count/);
  assert.match(js, /data-api-version/);
});
