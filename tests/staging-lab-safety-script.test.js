const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const packageJson = require("../package.json");
const safetyScriptPath = path.join(repoRoot, "scripts", "check-staging-lab-safety.mjs");

test("package exposes a staging lab safety command", () => {
  assert.equal(packageJson.scripts["safety:lab"], "node ./scripts/check-staging-lab-safety.mjs");
});

test("staging lab safety script protects production boundaries and secrets", () => {
  assert.equal(fs.existsSync(safetyScriptPath), true, "check-staging-lab-safety.mjs should exist");

  const source = fs.readFileSync(safetyScriptPath, "utf8");
  const requiredPatterns = [
    "hoctrung.com",
    "02_Working_Project",
    "pratice_write",
    "sk_live",
    "pk_live",
    "SEPAY_WEBHOOK_SECRET=",
    "DATABASE_URL=postgresql://[^u]",
  ];

  for (const pattern of requiredPatterns) {
    assert.match(source, new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `safety script should check ${pattern}`);
  }

  assert.match(source, /allowlist/i, "safety script should allow protective documentation references");
  assert.match(source, /git ls-files/, "safety script should scan tracked files for repeatable results");
});
