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
const localData = JSON.parse(fs.readFileSync(path.join((typeof repoRoot !== "undefined" ? repoRoot : root), "dev-only", "admin-v2-local-data.json"), "utf8"));
const controller = fs.readFileSync(
  path.join(srcDir, "admin-v2-local-preview", "admin-v2-local-preview.controller.ts"),
  "utf8",
);

test("battle D exposes an agent customer commission closed-loop workspace", () => {
  for (const required of [
    "战役 D：代理/佣金闭环",
    "代理客户",
    "VIP 客户",
    "佣金",
    "结算状态",
    "团队长视图",
    "标记待结算",
    "标记已复核",
    "冻结佣金",
    "恢复预览",
    "data-agent-filter",
    "data-agent-customers-body",
    "data-agent-commission-body",
    "data-agent-audit-body",
    "data-agent-action",
  ]) {
    assert.match(html, new RegExp(required), `Battle D UI should include ${required}`);
  }

  assert.match(css, /\.agent-command-center/);
  assert.match(css, /\.agent-kpi-grid/);
  assert.match(css, /\.agent-audit-panel/);
});

test("battle D frontend calls only the local experimental agent action API", () => {
  for (const required of [
    "agentActionUrl",
    "/api/admin-v2/agent-action",
    "renderAgentCustomers",
    "renderAgentCommissionRows",
    "renderAgentAudit",
    "performAgentAction",
    "markPendingSettlement",
    "markReviewed",
    "freezeCommission",
    "restorePreview",
  ]) {
    assert.match(js, new RegExp(required), `Battle D JS should include ${required}`);
  }

  assert.doesNotMatch(js, /fetch\(["']\/api\/payments/);
  assert.doesNotMatch(js, /fetch\(["']\/api\/admin\/orders/);
  assert.doesNotMatch(js, /exportCommissionNow|settleCommissionNow|payAgentNow|connectProductionOrders/);
});

test("battle D supports manual customer-to-agent attribution in the local lab only", () => {
  for (const required of [
    "agent-attribution-console",
    "data-agent-attribution-customer",
    "data-agent-attribution-agent",
    "data-agent-attribution-source",
    "data-agent-attribution-note",
    'data-agent-action="reassignCustomerAgent"',
  ]) {
    assert.match(html, new RegExp(required), `manual attribution UI should include ${required}`);
  }

  for (const required of [
    "renderAgentAttributionControls",
    "reassignCustomerAgent",
    "targetAgentId",
    "customerId",
    "data-agent-attribution-summary",
  ]) {
    assert.match(js, new RegExp(required), `manual attribution JS should include ${required}`);
  }

  assert.match(css, /\.agent-attribution-console/);
  assert.match(css, /\.agent-attribution-grid/);
});

test("battle D backend agent endpoint writes only local experiment data", () => {
  assert.match(controller, /@Post\("agent-action"\)/);
  assert.match(controller, /agent-action/);
  assert.match(controller, /fs\.writeFileSync/);
  assert.match(controller, /markPendingSettlement/);
  assert.match(controller, /markReviewed/);
  assert.match(controller, /freezeCommission/);
  assert.match(controller, /restorePreview/);
  assert.match(controller, /reassignCustomerAgent/);
  assert.match(controller, /targetAgentId/);
  assert.match(controller, /customerId/);
  assert.match(controller, /local-json-only/);

  for (const forbidden of [
    "PaymentService",
    "OrderService",
    "exportCommissionNow",
    "settleCommissionNow",
    "payAgentNow",
    "connectProductionOrders",
    "DATABASE_URL",
    "UPDATE commissions",
  ]) {
    assert.doesNotMatch(controller, new RegExp(forbidden), `Battle D endpoint must not use ${forbidden}`);
  }
});

test("battle D agent hierarchy has one first-level and one second-level agent", () => {
  const a001 = localData.agentTeamMembers.find((member) => member.agentId === "agent-a001");
  const a002 = localData.agentTeamMembers.find((member) => member.agentId === "agent-a002");

  assert.equal(a001.role, "一级代理");
  assert.equal(a001.parentAgentId, "agent-s-leader");
  assert.equal(a002.role, "二级代理");
  assert.equal(a002.parentAgentId, "agent-a001");
});

test("battle D local data has agent summary customers commissions team and audit logs", () => {
  assert.ok(localData.agentSummary);
  assert.ok(Array.isArray(localData.agentCustomers));
  assert.ok(localData.agentCustomers.length >= 5);
  assert.ok(Array.isArray(localData.agentCommissions));
  assert.ok(localData.agentCommissions.length >= 4);
  assert.ok(Array.isArray(localData.agentTeamMembers));
  assert.ok(Array.isArray(localData.agentAuditLogs));

  for (const customer of localData.agentCustomers) {
    for (const field of [
      "id",
      "agentId",
      "agentName",
      "customerName",
      "customerEmail",
      "source",
      "vipStatus",
      "commissionStatus",
      "teamScope",
    ]) {
      assert.ok(Object.hasOwn(customer, field), `agent customer ${customer.id} should include ${field}`);
    }
  }
});
