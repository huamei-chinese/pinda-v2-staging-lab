const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const srcDir = path.join(repoRoot, "src", "admin-v2-local-preview");
const servicePath = path.join(srcDir, "admin-v2-real-readonly.service.ts");
const controllerPath = path.join(srcDir, "admin-v2-local-preview.controller.ts");
const modulePath = path.join(srcDir, "admin-v2-local-preview.module.ts");
const contractPath = path.join(repoRoot, "docs", "admin-v2-real-readonly-field-contract-20260707.md");

test("real readonly database adapter is opt-in and isolated from production database service", () => {
  assert.ok(fs.existsSync(servicePath), "read-only adapter service should exist");

  const service = fs.readFileSync(servicePath, "utf8");
  assert.match(service, /from 'pg'/);
  assert.match(service, /ADMIN_V2_REAL_READONLY_ENABLED/);
  assert.match(service, /ADMIN_V2_REAL_READONLY_PGURL/);
  assert.doesNotMatch(service, /process\.env\.DATABASE_URL/);
  assert.doesNotMatch(service, /\bDatabaseService\b|\bPaymentService\b|\bAdminService\b|\bAuthService\b|\bSEPAY\b/);
});

test("real readonly database adapter enforces read-only SQL boundaries", () => {
  const service = fs.readFileSync(servicePath, "utf8");

  for (const required of [
    "BEGIN READ ONLY",
    "SET LOCAL statement_timeout",
    "information_schema.columns",
    "readonlyTables",
    "readonlyColumnContracts",
    "hsk_lesson_locks",
    "daily_theme_locks",
    "sepay_webhook_events",
    "blockedColumnContracts",
    "v1MissingSourceNotes",
    "V1 后台没有学习数据后台",
    "V1 后台没有代理/直播后台",
    "agent_referrals",
    "quoteIdentifier",
  ]) {
    assert.match(service, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const sensitive of ["password_hash", "email_verification_code_hash", "transfer_code", "payload"]) {
    assert.match(service, new RegExp(`blockedColumnContracts[\\s\\S]*${sensitive}`));
  }

  for (const forbidden of [
    /\bINSERT\s+INTO\b/i,
    /\bUPDATE\s+\w+\s+SET\b/i,
    /\bDELETE\s+FROM\b/i,
    /\bCREATE\s+TABLE\b/i,
    /\bALTER\s+TABLE\b/i,
    /\bDROP\s+TABLE\b/i,
    /\bTRUNCATE\b/i,
    /\bGRANT\b/i,
    /\bCOPY\b/i,
    /\bFOR\s+UPDATE\b/i,
  ]) {
    assert.doesNotMatch(service, forbidden, `read-only adapter must not include ${forbidden}`);
  }
});

test("admin v2 controller delegates real preview to the read-only adapter without adding write APIs", () => {
  const controller = fs.readFileSync(controllerPath, "utf8");
  const moduleSource = fs.readFileSync(modulePath, "utf8");

  assert.match(controller, /AdminV2RealReadonlyService/);
  assert.match(controller, /getRealUsersReadonlyPreview\(\)\s*{\s*return this\.realReadonlyService\.getPreview/);
  assert.match(moduleSource, /providers:\s*\[AdminV2RealReadonlyService\]/);

  assert.doesNotMatch(controller, /ADMIN_V2_REAL_READONLY_PGURL/);
  assert.doesNotMatch(controller, /\bINSERT\s+INTO\b|\bUPDATE\s+\w+\s+SET\b|\bDELETE\s+FROM\b|\bFOR\s+UPDATE\b/i);
});

test("real readonly contract records that V1 has no learning agent or live backend source", () => {
  const contract = fs.readFileSync(contractPath, "utf8");

  assert.match(contract, /V1 Source Reality/);
  assert.match(contract, /V1 后台没有学习数据后台/);
  assert.match(contract, /V1 后台没有代理\/直播后台/);
  assert.match(contract, /not a connection failure/i);
});
