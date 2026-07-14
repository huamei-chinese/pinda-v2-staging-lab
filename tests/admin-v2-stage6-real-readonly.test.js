const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const publicDir = path.join(repoRoot, "public");
const srcDir = path.join(repoRoot, "src");

const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");
const localData = JSON.parse(fs.readFileSync(path.join((typeof repoRoot !== "undefined" ? repoRoot : root), "dev-only", "admin-v2-local-data.json"), "utf8"));
const controller = fs.readFileSync(
  path.join(srcDir, "admin-v2-local-preview", "admin-v2-local-preview.controller.ts"),
  "utf8",
);

test("stage 6 exposes a real-data read-only preview surface", () => {
  for (const required of [
    "第 6 阶段：真实数据只读接入",
    "真实后台字段契约",
    "真实学习数据：暂无真实表",
    "真实代理佣金：暂无真实表",
    "只读真实用户预览",
  ]) {
    assert.match(html, new RegExp(required), `Stage 6 UI should include ${required}`);
  }

  for (const selector of [
    "data-real-readonly-status",
    "data-real-readonly-users-body",
    "data-real-readonly-contract-body",
    "data-real-readonly-gaps-body",
    'data-real-readonly-action="previewRealUsers"',
  ]) {
    assert.match(html, new RegExp(selector), `Stage 6 UI should expose ${selector}`);
  }

  assert.match(css, /\.real-readonly-grid/);
  assert.match(css, /\.real-readonly-gap/);
  assert.match(html, /real-readonly-user-table/);
});

test("stage 6 real user preview follows the old admin table reading pattern", () => {
  assert.match(html, /姓名 \/ ID/);
  assert.match(html, /Email \/ 注册时间/);
  assert.match(html, /套餐/);
  assert.match(html, /操作/);

  assert.match(js, /class="real-readonly-user-identity"/);
  assert.match(js, /ID: \$\{escapeHtml\(user\.id\)\}/);
  assert.match(js, /class="real-readonly-email-block"/);
  assert.match(js, /注册时间：\$\{escapeHtml\(user\.registeredAt \|\| user\.createdAt \|\| "待接入"\)\}/);
  assert.match(js, />VIP 7d</);
  assert.match(js, />VIP 30d</);
  assert.match(js, />VIP 90d</);
  assert.match(js, /aria-label="自定义 VIP 到期日期"/);
  assert.match(js, /只读预览，不写入数据库/);

  assert.match(css, /\.real-readonly-user-identity/);
  assert.match(css, /\.real-readonly-email-block/);
  assert.match(css, /\.real-readonly-vip-actions/);
});

test("stage 6 uses only the local read-only adapter, never the production admin API", () => {
  assert.match(js, /realUsersPreviewUrl:\s*"\/api\/admin-v2\/real-users-readonly-preview"/);
  assert.match(js, /adminV2RealReadonlyFallback/);
  assert.match(js, /renderRealReadonlyPreview\(adminV2RealReadonlyFallback/);
  assert.match(js, /if \(tab === "users"\) \{\s*refreshRealReadonlyPreview\(\);/);
  assert.match(js, /refreshRealReadonlyPreview/);
  assert.match(js, /renderRealReadonlyUsers/);
  assert.match(js, /renderRealReadonlyContracts/);
  assert.match(js, /renderRealReadonlyGaps/);

  for (const forbidden of [
    /fetch\(["']\/api\/admin\/users/i,
    /fetch\(["']\/api\/admin\/plans/i,
    /fetch\(["']\/api\/payments/i,
    /fetch\(["']\/api\/webhooks/i,
    /\bmethod:\s*["']PATCH["']/i,
    /\bmethod:\s*["']DELETE["']/i,
  ]) {
    assert.doesNotMatch(js, forbidden, `Stage 6 JS must not use ${forbidden}`);
  }
});

test("stage 6 local data documents true backend contracts and current gaps", () => {
  assert.equal(localData.realReadonlyMeta.realDatabaseConnected, false);
  assert.equal(localData.realReadonlyMeta.writeEnabled, false);
  assert.equal(localData.realReadonlyMeta.source, "local-contract-preview");

  assert.ok(Array.isArray(localData.realReadonlyUsers));
  assert.ok(localData.realReadonlyUsers.length >= 3);
  assert.ok(localData.realReadonlyUsers.every((user) => user.readOnly === true));

  const contractTables = localData.realReadonlyContracts.map((item) => item.sourceTable);
  for (const table of ["users", "payment_plans", "payment_orders"]) {
    assert.ok(contractTables.includes(table), `contract should include ${table}`);
  }

  const gapKeys = localData.realReadonlyGaps.map((item) => item.key);
  for (const key of ["learning_records", "learning_events", "agent_commissions"]) {
    assert.ok(gapKeys.includes(key), `gap list should include ${key}`);
  }
});

test("stage 6 controller adds a local-only read endpoint without database or payment dependencies", () => {
  assert.match(controller, /@Get\("real-users-readonly-preview"\)/);
  assert.match(controller, /getRealUsersReadonlyPreview/);
  assert.match(controller, /buildRealReadonlyPreview/);
  assert.doesNotMatch(controller, /\bDatabaseService\b|\bDATABASE_URL\b|\bPaymentService\b|\bSEPAY\b/i);
  assert.doesNotMatch(controller, /fetch\(["']\/api\/admin\/users/i);
  assert.doesNotMatch(controller, /UPDATE users|DELETE FROM|INSERT INTO/i);
});
