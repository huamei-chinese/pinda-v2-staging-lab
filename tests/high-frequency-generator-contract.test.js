const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const packageJson = require("../package.json");
const validatorPath = path.join(repoRoot, "scripts", "validate-high-frequency-generation.mjs");

test("package exposes a high-frequency generation stability validator", () => {
  assert.equal(
    packageJson.scripts["validate:high-frequency"],
    "node ./scripts/validate-high-frequency-generation.mjs && node --test ./tests/high-frequency-content.test.js ./tests/high-frequency-segments-standard.test.js",
  );
});

test("high-frequency stability validator compares generated outputs after running the generator", () => {
  assert.equal(fs.existsSync(validatorPath), true, "validate-high-frequency-generation.mjs should exist");

  const source = fs.readFileSync(validatorPath, "utf8");
  assert.match(source, /generate-high-frequency-content\.mjs/);
  assert.match(source, /high_frequency_topics\.json/);
  assert.match(source, /high_frequency_topics\.md/);
  assert.match(source, /review_report\.md/);
  assert.match(source, /lesson-high-frequency-topics\.js/);
  assert.match(source, /readFileSync/);
  assert.match(source, /Generated high-frequency files are not stable/);
});
