const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");

const appSource = fs.readFileSync("public/app.js", "utf8");
const adminServiceSource = fs.readFileSync("src/admin/admin.service.ts", "utf8");
const standaloneServerSource = fs.readFileSync("server.js", "utf8");

test("admin users expose registration time from database created_at", () => {
  assert.match(adminServiceSource, /registeredAt:\s*row\.created_at/);
  assert.match(adminServiceSource, /createdAt:\s*row\.created_at/);
  assert.match(adminServiceSource, /SELECT[\s\S]*created_at[\s\S]*FROM users/);
});

test("standalone server also exposes registration time from database created_at", () => {
  assert.match(standaloneServerSource, /registeredAt:\s*row\.created_at/);
  assert.match(standaloneServerSource, /createdAt:\s*row\.created_at/);
  assert.match(standaloneServerSource, /SELECT[\s\S]*created_at[\s\S]*FROM users/);
});

test("admin user table renders database registration time below email", () => {
  assert.match(appSource, /function getAdminUserRegistrationTimestamp\(user\)/);
  assert.match(appSource, /registeredAt \|\| user\?\.createdAt \|\| user\?\.registered_at \|\| user\?\.created_at/);
  assert.match(appSource, /const registeredAt = getAdminUserRegistrationTimestamp\(user\);/);
  assert.match(appSource, /data-registered-at="\$\{escapeAttr\(registeredAt\)\}"/);
  assert.match(appSource, /class="admin-user-registered-at"/);
});

test("admin ctv referred table formats referred user registration time", () => {
  assert.match(appSource, /function formatAdminRegistrationTimeOnly\(value, isVi\)/);
  assert.match(appSource, /timeZone:\s*"Asia\/Bangkok"/);
  assert.match(appSource, /user\?\.registeredAt \|\| user\?\.createdAt \|\| user\?\.registered_at \|\| user\?\.created_at/);
  assert.match(appSource, /formatAdminRegistrationTimeOnly\(registeredAt, isVi\) \|\| "-"/);
  assert.doesNotMatch(appSource, /formatAdminCtvUserRegisteredAt[\s\S]*split\(": "\)/);
});

test("admin registration date uses Vietnam time and full day month year", () => {
  assert.match(appSource, /timeZone:\s*"Asia\/Bangkok"/);
  assert.match(appSource, /hour:\s*"2-digit"/);
  assert.match(appSource, /minute:\s*"2-digit"/);
  assert.match(appSource, /day:\s*"2-digit"/);
  assert.match(appSource, /month:\s*"2-digit"/);
  assert.match(appSource, /year:\s*"numeric"/);
});
