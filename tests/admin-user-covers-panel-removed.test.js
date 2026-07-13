const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("admin users tab does not render the redundant HSK level cover editor", () => {
  assert.doesNotMatch(appSource, /admin-user-covers-panel/);
  assert.doesNotMatch(appSource, /\$\{adminTab === "users" \? `[\s\S]*renderAdminHskLevelCoversHTML\(isVi\)/);
});
