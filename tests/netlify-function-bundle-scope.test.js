const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const apiSource = fs.readFileSync(path.join(root, "netlify", "functions", "api.mjs"), "utf8");
const netlifyConfig = fs.readFileSync(path.join(root, "netlify.toml"), "utf8");

test("Netlify API limits dynamic public-file tracing to required catalogs", () => {
  assert.doesNotMatch(
    apiSource,
    /const\s+filePath\s*=\s*path\.join\(process\.cwd\(\),\s*["']public["'],\s*fileName\)/,
  );

  for (const fileName of [
    "lesson-high-frequency-v1-27-topics.js",
    "lesson-high-frequency-topics.js",
    "lesson-high-frequency-topic-unit.js",
  ]) {
    assert.match(apiSource, new RegExp(fileName.replaceAll(".", "\\.")));
    assert.match(netlifyConfig, new RegExp(fileName.replaceAll(".", "\\.")));
  }

  assert.match(netlifyConfig, /public\/listening-app\/data\/listening-catalog\.json/);
  assert.match(netlifyConfig, /\[functions\.api\]/);
});
