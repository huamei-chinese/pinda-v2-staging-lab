const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const publicAppSource = fs.readFileSync(path.join(repoRoot, "public", "app.js"), "utf8");
const rootAppSource = fs.readFileSync(path.join(repoRoot, "app.js"), "utf8");

function assertAdminCountUsesStudentUsers(source) {
  assert.match(source, /const studentUsers = state\.adminUsers\.filter\(\(user\) => user\.role !== "admin"\);/);
  assert.match(source, /const totalUsers = studentUsers\.length;/);
  assert.match(source, /`\$\{premiumStudentUsers\.length\}\/\$\{studentUsers\.length\}/);
  assert.doesNotMatch(source, /const totalUsers = state\.adminUsers\.length;/);
}

test("admin header user total matches Pro conversion denominator in public app", () => {
  assertAdminCountUsesStudentUsers(publicAppSource);
});

test("admin header user total matches Pro conversion denominator in root app", () => {
  assertAdminCountUsesStudentUsers(rootAppSource);
});
