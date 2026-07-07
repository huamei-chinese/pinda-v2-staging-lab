const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const srcDir = path.join(root, "src");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");
const localData = JSON.parse(fs.readFileSync(path.join(publicDir, "admin-v2-local-data.json"), "utf8"));
const controller = fs.readFileSync(
  path.join(srcDir, "admin-v2-local-preview", "admin-v2-local-preview.controller.ts"),
  "utf8",
);

test("battle A exposes a real-feeling customer VIP service workspace", () => {
  for (const required of [
    "战役 A：用户/VIP/客服闭环",
    "搜索客户",
    "客服备注",
    "操作日志",
    "VIP 7d",
    "VIP 30d",
    "设到期",
    "取消 VIP",
    "设为客服管理员",
    "data-customer-search",
    "data-customer-action",
    "data-customer-detail",
    "data-audit-log-body",
  ]) {
    assert.match(html, new RegExp(required), `Battle A UI should include ${required}`);
  }

  assert.match(css, /\.customer-command-center/);
  assert.match(css, /\.customer-action-grid/);
  assert.match(css, /\.audit-log-panel/);
});

test("battle A frontend calls only the local experimental customer action API", () => {
  for (const required of [
    "customerActionUrl",
    "/api/admin-v2/customer-action",
    "performCustomerAction",
    "renderCustomerDetail",
    "renderAuditLogs",
    "vip7d",
    "vip30d",
    "setExpiry",
    "cancelVip",
    "makeStaff",
    "addNote",
  ]) {
    assert.match(js, new RegExp(required), `Battle A JS should include ${required}`);
  }

  assert.doesNotMatch(js, /fetch\(["']\/api\/admin\/users/);
  assert.doesNotMatch(js, /fetch\(["']\/api\/payments/);
  assert.doesNotMatch(js, /fetch\(["']\/api\/webhooks/);
});

test("battle A backend action endpoint writes only local experiment data", () => {
  assert.match(controller, /@Post\("customer-action"\)/);
  assert.match(controller, /customer-action/);
  assert.match(controller, /fs\.writeFileSync/);
  assert.match(controller, /vip7d/);
  assert.match(controller, /vip30d/);
  assert.match(controller, /cancelVip/);
  assert.match(controller, /makeStaff/);
  assert.match(controller, /addNote/);
  assert.match(controller, /local-json-only/);

  for (const forbidden of [
    "DatabaseService",
    "PaymentService",
    "SEPAY",
    "DATABASE_URL",
    "payment_orders",
    "UPDATE users",
  ]) {
    assert.doesNotMatch(controller, new RegExp(forbidden), `Battle A endpoint must not use ${forbidden}`);
  }
});

test("battle A local data has customer service fields and audit logs", () => {
  assert.ok(Array.isArray(localData.users));
  assert.ok(localData.users.length >= 5);
  assert.ok(Array.isArray(localData.auditLogs));

  for (const user of localData.users) {
    for (const field of [
      "id",
      "email",
      "name",
      "phone",
      "role",
      "level",
      "plan",
      "vipStatus",
      "vipExpiresAt",
      "source",
      "agentOwner",
      "recentLearning",
      "customerNotes",
    ]) {
      assert.ok(Object.hasOwn(user, field), `user ${user.email} should include ${field}`);
    }
  }
});
