const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appPath = path.join(__dirname, "..", "public", "app.js");
const appSource = fs.readFileSync(appPath, "utf8");

test("frontend and admin sessions use separate HuaMei storage keys", () => {
  assert.match(appSource, /STUDENT_USER_STORAGE_KEY\s*=\s*"huamei_student_user"/);
  assert.match(appSource, /ADMIN_USER_STORAGE_KEY\s*=\s*"huamei_admin_user"/);
  assert.doesNotMatch(appSource, /user:\s*JSON\.parse\(localStorage\.getItem\("v2-user"\)/);
  assert.match(appSource, /localStorage\.removeItem\("v2-user"\)/);
});

test("admin login persists only admin session state", () => {
  assert.match(appSource, /state\.adminUser\s*=\s*data\.user/);
  assert.doesNotMatch(appSource, /state\.user\s*=\s*data\.user;\s*\n\s*state\.adminStatus\s*=\s*""/);
});

test("admin API calls use admin user id instead of student user id", () => {
  assert.match(appSource, /function getAdminUserId\(\)/);
  assert.doesNotMatch(appSource, /"X-Admin-User-Id": state\.user\?\.id \|\| ""/);
});

test("student login cannot store an admin account as the frontend learner", () => {
  assert.match(appSource, /data\.user\?\.role\s*===\s*"admin"/);
  assert.match(appSource, /state\.user\s*=\s*data\.user/);
});

test("student and admin logout paths are separated", () => {
  assert.match(appSource, /function logoutAdminUser\(\)/);
  assert.match(appSource, /state\.adminUser\s*=\s*null/);
  assert.match(appSource, /state\.user\s*=\s*null/);
});
