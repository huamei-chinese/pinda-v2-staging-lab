const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const packageJson = require("../package.json");
const smokeScriptPath = path.join(repoRoot, "scripts", "smoke-staging-lab.mjs");

test("package exposes a local staging lab smoke command", () => {
  assert.equal(packageJson.scripts["smoke:lab"], "node ./scripts/smoke-staging-lab.mjs");
});

test("staging lab smoke script checks learner, content, listening, VIP, admin, and DB-fallback surfaces", () => {
  assert.equal(fs.existsSync(smokeScriptPath), true, "smoke-staging-lab.mjs should exist");

  const source = fs.readFileSync(smokeScriptPath, "utf8");
  const requiredChecks = [
    "/",
    "/styles.css",
    "/app.js",
    "/lesson-hsk2-l1.js",
    "/lesson-hsk3-batch-1-5.js",
    "/lesson-hsk4-batch-1-5.js",
    "/lesson-hsk5-batch-1-6.js",
    "/lesson-high-frequency-topics.js",
    "/listening-app",
    "/listening-app/listening",
    "/listening-app/listening/ep-001",
    "/listening-app/typing/ep-001",
    "/listening-app/typing/ep-010",
    "/listening-app/favorites",
    "/listening-app/member",
    "/listening-app/review",
    "/subscriptions.html",
    "/api/payments/plans",
  ];

  for (const check of requiredChecks) {
    assert.match(source, new RegExp(check.replaceAll("/", "\\/")), `smoke script should check ${check}`);
  }

  assert.match(source, /expectedStatus:\s*503/, "smoke script should verify database-backed routes fail with 503 when unconfigured");
  assert.match(source, /\/listening-app\/listening/, "smoke script should accept the listening redirect entry");
  assert.doesNotMatch(source, /includes:\s*\[\s*"DATABASE_URL"\s*\]/, "smoke script should not require one backend-specific 503 message");
});
