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
  assert.match(appSource, /removeAuthStorageKey\("v2-user"\)/);
});

test("admin login mirrors portal account into client session state", () => {
  assert.match(appSource, /state\.adminUser\s*=\s*data\.user/);
  assert.match(appSource, /state\.user\s*=\s*data\.user;\s*\n\s*state\.adminTab\s*=\s*getDefaultAdminTabForRole/);
});

test("admin API calls use admin user id instead of student user id", () => {
  assert.match(appSource, /function getAdminUserId\(\)/);
  assert.doesNotMatch(appSource, /"X-Admin-User-Id": state\.user\?\.id \|\| ""/);
});

test("client login can store portal accounts as frontend learners", () => {
  assert.doesNotMatch(appSource, /\["admin", "staff", "employee", "sales", "ctv", "content"\]\.includes\(String\(data\.user\?\.role/);
  assert.match(appSource, /state\.user\s*=\s*data\.user/);
  assert.match(appSource, /state\.adminUser\s*=\s*isAdminPortalRole\(data\.user\?\.role\) \? data\.user : null/);
});

test("student and admin logout paths are separated", () => {
  assert.match(appSource, /function logoutAdminUser\(\)/);
  assert.match(appSource, /state\.adminUser\s*=\s*null/);
  assert.match(appSource, /state\.user\s*=\s*null/);
});

test("frontend logout clears every persisted auth identity before reload", () => {
  assert.match(appSource, /function clearAllAuthStorage\(\)/);
  assert.match(appSource, /STUDENT_USER_STORAGE_KEY,[\s\S]*ADMIN_USER_STORAGE_KEY,[\s\S]*STUDENT_TOKEN_STORAGE_KEY,[\s\S]*ADMIN_TOKEN_STORAGE_KEY/);
  assert.match(appSource, /function removeAuthStorageKey\(key\)[\s\S]*localStorage\.removeItem\(key\)[\s\S]*sessionStorage\.removeItem\(key\)/);
  assert.match(
    appSource,
    /function logoutCurrentUser\(\)[\s\S]*state\.user\s*=\s*null;[\s\S]*state\.adminUser\s*=\s*null;[\s\S]*clearAllAuthStorage\(\);[\s\S]*saveState\(\);/,
  );
});
