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

test("stage 7 exposes missing real-data schema contract acceptance surface", () => {
  for (const required of [
    "第 7 阶段：缺失真实数据 Schema 契约",
    "学习事件 schema",
    "代理归因 schema",
    "佣金结算 schema",
    "阿杰确认",
    "老板验收后才允许进入真实表设计",
  ]) {
    assert.match(html, new RegExp(required), `Stage 7 UI should include ${required}`);
  }

  for (const selector of [
    "data-stage7-schema-status",
    "data-stage7-learning-schema-body",
    "data-stage7-agent-schema-body",
    "data-stage7-gate-body",
    'data-stage7-schema-action="refreshContract"',
  ]) {
    assert.match(html, new RegExp(selector), `Stage 7 UI should expose ${selector}`);
  }

  assert.match(css, /\.stage7-schema-center/);
  assert.match(css, /\.stage7-schema-grid/);
});

test("stage 7 frontend reads only local schema contract data", () => {
  assert.match(js, /stage7SchemaUrl:\s*"\/api\/admin-v2\/stage7-schema-contract"/);
  assert.match(js, /renderStage7SchemaContract/);
  assert.match(js, /refreshStage7SchemaContract/);
  assert.match(js, /if \(tab === "learning"\) \{\s*refreshStage7SchemaContract\(\);/);
  assert.match(js, /loadAdminV2LocalBridge\(\);\s*refreshStage7SchemaContract\(\);/);

  for (const forbidden of [
    /fetch\(["']\/api\/admin\/analytics/i,
    /fetch\(["']\/api\/analytics/i,
    /fetch\(["']\/api\/admin\/agents/i,
    /\bmethod:\s*["']POST["'][\s\S]{0,120}stage7/i,
    /\bmethod:\s*["']PATCH["']/i,
    /\bmethod:\s*["']DELETE["']/i,
  ]) {
    assert.doesNotMatch(js, forbidden, `Stage 7 JS must not use ${forbidden}`);
  }
});

test("stage 7 local data defines schema contracts without pretending data exists", () => {
  assert.equal(localData.stage7SchemaMeta.realDatabaseConnected, false);
  assert.equal(localData.stage7SchemaMeta.writeEnabled, false);
  assert.equal(localData.stage7SchemaMeta.status, "schema-contract-only");

  assert.ok(Array.isArray(localData.stage7LearningEventSchemas));
  assert.ok(Array.isArray(localData.stage7AgentDataSchemas));
  assert.ok(Array.isArray(localData.stage7AcceptanceGates));

  const learningKeys = localData.stage7LearningEventSchemas.map((item) => item.key);
  for (const key of ["learning_event", "learning_summary", "wrong_answer_event"]) {
    assert.ok(learningKeys.includes(key), `learning schema should include ${key}`);
  }

  const agentKeys = localData.stage7AgentDataSchemas.map((item) => item.key);
  for (const key of ["agent_referral", "agent_customer", "agent_commission_preview"]) {
    assert.ok(agentKeys.includes(key), `agent schema should include ${key}`);
  }

  assert.ok(
    localData.stage7AcceptanceGates.some((gate) => gate.owner === "老板" && gate.status === "required-before-real-db"),
    "boss approval gate must be explicit",
  );
});

test("stage 7 controller adds a local-only schema endpoint without database dependencies", () => {
  assert.match(controller, /@Get\("stage7-schema-contract"\)/);
  assert.match(controller, /getStage7SchemaContract/);
  assert.doesNotMatch(controller, /\bDatabaseService\b|\bDATABASE_URL\b|\bPaymentService\b|\bSEPAY\b/i);
  assert.doesNotMatch(controller, /\bINSERT\s+INTO\b|\bUPDATE\s+\w+\s+SET\b|\bDELETE\s+FROM\b|\bCREATE\s+TABLE\b/i);
});
