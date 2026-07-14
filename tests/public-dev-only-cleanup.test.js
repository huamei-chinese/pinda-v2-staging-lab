const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const publicDir = path.join(repoRoot, "public");
const devOnlyDir = path.join(repoRoot, "dev-only");

const movedDevOnlyFiles = [
  "admin-v2-local-data.json",
  "lesson-high-frequency-daily-interview-test.js",
  "lesson-hsk3-l01-word-sentence-test.js",
];

test("dev-only mock/test fixtures are preserved outside the public production folder", () => {
  for (const fileName of movedDevOnlyFiles) {
    const publicPath = path.join(publicDir, fileName);
    const devOnlyPath = path.join(devOnlyDir, fileName);

    assert.equal(fs.existsSync(publicPath), false, `${fileName} must not be published from public/`);
    assert.equal(fs.existsSync(devOnlyPath), true, `${fileName} should be preserved in dev-only/`);
    assert.ok(fs.statSync(devOnlyPath).size > 0, `${fileName} should not be empty`);
  }
});

test("admin v2 no longer fetches local mock JSON from public", () => {
  const adminJs = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

  assert.doesNotMatch(adminJs, /dataUrl:\s*["']admin-v2-local-data\.json["']/);
  assert.doesNotMatch(adminJs, /public\/admin-v2-local-data\.json/);
  assert.match(adminJs, /dataUrl:\s*"\/api\/admin-v2\/local-preview"/);
});

test("HSK runtime content files use production-safe names in public", () => {
  const publicFiles = fs.readdirSync(publicDir);
  const auditHskFiles = publicFiles.filter((fileName) => /^lesson-hsk\d-word-sentence-audit\.js$/.test(fileName));
  assert.deepEqual(auditHskFiles, []);

  for (let level = 1; level <= 6; level += 1) {
    const fileName = `lesson-hsk${level}-word-sentence-content.js`;
    const filePath = path.join(publicDir, fileName);
    assert.equal(fs.existsSync(filePath), true, `${fileName} should remain available for runtime loading`);
    assert.ok(fs.statSync(filePath).size > 0, `${fileName} should not be empty`);
  }
});
