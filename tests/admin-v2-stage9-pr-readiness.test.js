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
const localData = JSON.parse(fs.readFileSync(path.join(publicDir, "admin-v2-local-data.json"), "utf8"));

test("stage 9 exposes boss-facing PR and team review readiness", () => {
  for (const required of [
    "第 9 阶段：PR / 团队同步 / 生产前检查",
    "当前是否可以提交",
    "当前是否可以 push",
    "阿辉 UI review",
    "阿杰功能 review",
    "老板统一验收",
    "不部署正式站",
    "不合并 main",
  ]) {
    assert.match(html, new RegExp(required));
  }

  for (const selector of [
    "data-stage9-readiness-status",
    "data-stage9-git-status",
    "data-stage9-team-body",
    "data-stage9-checklist-body",
    "data-stage9-risk-body",
    'data-stage9-action="refreshReadiness"',
  ]) {
    assert.match(html, new RegExp(selector));
  }

  assert.match(css, /\.stage9-pr-readiness/);
  assert.match(css, /\.stage9-readiness-grid/);
});

test("stage 9 frontend reads local readiness only and keeps push deploy blocked", () => {
  assert.match(js, /stage9ReadinessUrl:\s*"\/api\/admin-v2\/stage9-pr-readiness"/);
  assert.match(js, /renderStage9Readiness/);
  assert.match(js, /refreshStage9Readiness/);
  assert.match(js, /data-stage9-action='refreshReadiness'/);

  for (const forbidden of [
    /\bgh\s+pr\s+create\b/i,
    /\bgit\s+push\b/i,
    /\bdeploy\b[\s\S]{0,80}\bproduction\b/i,
    /\bmethod:\s*["']POST["'][\s\S]{0,120}stage9/i,
    /\bmethod:\s*["']PATCH["']/i,
    /\bmethod:\s*["']DELETE["']/i,
  ]) {
    assert.doesNotMatch(js, forbidden);
  }
});

test("stage 9 local data defines explicit owner gates and production blockers", () => {
  assert.equal(localData.stage9PrReadiness.canCommit, false);
  assert.equal(localData.stage9PrReadiness.canPush, false);
  assert.equal(localData.stage9PrReadiness.canDeployProduction, false);
  assert.equal(localData.stage9PrReadiness.canMergeMain, false);

  const owners = localData.stage9PrReadiness.teamReviews.map((item) => item.owner);
  for (const owner of ["老板", "阿辉", "阿杰"]) {
    assert.ok(owners.includes(owner), `stage 9 should include ${owner}`);
  }

  const blockers = localData.stage9PrReadiness.productionBlockers.map((item) => item.key);
  for (const key of ["real_db_not_connected", "production_deploy_blocked", "payment_vip_untouched"]) {
    assert.ok(blockers.includes(key), `stage 9 should include ${key}`);
  }
});

test("stage 9 static preview API serves read-only PR readiness JSON", () => {
  assert.match(serveLocal, /buildStage9PrReadiness/);
  assert.match(serveLocal, /requested === "\/api\/admin-v2\/stage9-pr-readiness"/);
  assert.match(serveLocal, /canCommit:\s*false/);
  assert.match(serveLocal, /canPush:\s*false/);
  assert.match(serveLocal, /canDeployProduction:\s*false/);
  assert.match(serveLocal, /canMergeMain:\s*false/);

  for (const forbidden of [
    /\bexec\b|\bspawn\b|\bgit\s+push\b|\bgh\s+pr\s+create\b/i,
    /\bPaymentService\b|\bSEPAY\b|\bDATABASE_URL\b/i,
    /\bINSERT\s+INTO\b|\bUPDATE\s+\w+\s+SET\b|\bDELETE\s+FROM\b|\bCREATE\s+TABLE\b/i,
  ]) {
    assert.doesNotMatch(serveLocal, forbidden);
  }
});
