const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const publicDir = path.join(repoRoot, "public");

const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");
const serveLocal = fs.readFileSync(path.join(repoRoot, "serve-local.mjs"), "utf8");
const localData = JSON.parse(fs.readFileSync(path.join((typeof repoRoot !== "undefined" ? repoRoot : root), "dev-only", "admin-v2-local-data.json"), "utf8"));

test("stage 10 exposes final boss acceptance and commit push decision surface", () => {
  for (const required of [
    "第 10 阶段：总体验收包 / 最终提交前决策",
    "P1-P9 总体验收",
    "老板最终决策",
    "是否允许 commit",
    "是否允许 push",
    "是否允许创建 PR",
    "Superpower 验收",
    "不部署正式站",
    "回滚计划",
  ]) {
    assert.match(html, new RegExp(required));
  }

  for (const selector of [
    "data-stage10-final-status",
    "data-stage10-can-commit",
    "data-stage10-can-push",
    "data-stage10-can-pr",
    "data-stage10-stage-body",
    "data-stage10-checklist-body",
    "data-stage10-risk-body",
    'data-stage10-action="refreshFinalAcceptance"',
  ]) {
    assert.match(html, new RegExp(selector));
  }

  assert.match(css, /\.stage10-final-acceptance/);
  assert.match(css, /\.stage10-decision-grid/);
});

test("stage 10 frontend reads only local final acceptance state", () => {
  assert.match(js, /stage10FinalUrl:\s*"\/api\/admin-v2\/stage10-final-acceptance"/);
  assert.match(js, /renderStage10FinalAcceptance/);
  assert.match(js, /refreshStage10FinalAcceptance/);
  assert.match(js, /data-stage10-action='refreshFinalAcceptance'/);

  for (const forbidden of [
    /\bgh\s+pr\s+create\b/i,
    /\bgit\s+commit\b/i,
    /\bgit\s+push\b/i,
    /\bdeploy\b[\s\S]{0,80}\bproduction\b/i,
    /\bmethod:\s*["']POST["'][\s\S]{0,120}stage10/i,
    /\bmethod:\s*["']PATCH["']/i,
    /\bmethod:\s*["']DELETE["']/i,
  ]) {
    assert.doesNotMatch(js, forbidden);
  }
});

test("stage 10 local data keeps final commit push decisions blocked until boss approval", () => {
  assert.equal(localData.stage10FinalAcceptance.status, "waiting-boss-final-acceptance");
  assert.equal(localData.stage10FinalAcceptance.canCommit, false);
  assert.equal(localData.stage10FinalAcceptance.canPush, false);
  assert.equal(localData.stage10FinalAcceptance.canCreatePr, false);
  assert.equal(localData.stage10FinalAcceptance.canDeployProduction, false);
  assert.equal(localData.stage10FinalAcceptance.requiresBossApproval, true);

  assert.ok(Array.isArray(localData.stage10FinalAcceptance.stageSummaries));
  assert.equal(localData.stage10FinalAcceptance.stageSummaries.length, 9);
  assert.ok(localData.stage10FinalAcceptance.stageSummaries.some((item) => item.stage === "P9"));

  const locks = localData.stage10FinalAcceptance.riskLocks.map((item) => item.key);
  for (const key of ["production_site_locked", "payment_vip_locked", "database_locked", "main_merge_locked"]) {
    assert.ok(locks.includes(key), `stage 10 should include ${key}`);
  }
});

test("stage 10 static preview API serves read-only final acceptance JSON", () => {
  assert.match(serveLocal, /buildStage10FinalAcceptance/);
  assert.match(serveLocal, /requested === "\/api\/admin-v2\/stage10-final-acceptance"/);
  assert.match(serveLocal, /canCommit:\s*false/);
  assert.match(serveLocal, /canPush:\s*false/);
  assert.match(serveLocal, /canCreatePr:\s*false/);
  assert.match(serveLocal, /canDeployProduction:\s*false/);

  for (const forbidden of [
    /\bexec\b|\bspawn\b|\bgit\s+commit\b|\bgit\s+push\b|\bgh\s+pr\s+create\b/i,
    /\bPaymentService\b|\bSEPAY\b|\bDATABASE_URL\b/i,
    /\bINSERT\s+INTO\b|\bUPDATE\s+\w+\s+SET\b|\bDELETE\s+FROM\b|\bCREATE\s+TABLE\b/i,
  ]) {
    assert.doesNotMatch(serveLocal, forbidden);
  }
});
