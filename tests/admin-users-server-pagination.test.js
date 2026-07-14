const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const rootDir = path.join(__dirname, "..");
const controllerSource = fs.readFileSync(path.join(rootDir, "src", "admin", "admin.controller.ts"), "utf8");
const serviceSource = fs.readFileSync(path.join(rootDir, "src", "admin", "admin.service.ts"), "utf8");
const publicAppSource = fs.readFileSync(path.join(rootDir, "public", "app.js"), "utf8");

test("admin users API accepts query params and delegates them to the service", () => {
  assert.match(controllerSource, /import \{[^}]*Query[^}]*\} from '@nestjs\/common'/);
  assert.match(controllerSource, /@Query\(\) query/);
  assert.match(controllerSource, /this\.adminService\.getAllUsers\(headers, query\)/);
});

test("admin users service supports server-side pagination, search, level, and VIP plan filters", () => {
  assert.match(serviceSource, /hasAdminUsersQueryOptions/);
  assert.match(serviceSource, /normalizeAdminUsersPageSize/);
  assert.match(serviceSource, /Math\.min\(100, Math\.max\(1/);
  assert.match(serviceSource, /SELECT COUNT\(\*\)::int AS total FROM users \$\{whereSql\}/);
  assert.match(serviceSource, /LIMIT \$\$\{pageParams\.length - 1\} OFFSET \$\$\{pageParams\.length\}/);
  assert.match(serviceSource, /full_name ILIKE/);
  assert.match(serviceSource, /email ILIKE/);
  assert.match(serviceSource, /id::text ILIKE/);
  assert.match(serviceSource, /current_level =/);
  assert.match(serviceSource, /vip_plan_id/);
  assert.match(serviceSource, /serverSide: true/);
  assert.match(serviceSource, /totalUsers/);
  assert.match(serviceSource, /premiumUsers/);
});

test("admin users client sends pagination filters to the server and uses returned metadata", () => {
  assert.match(publicAppSource, /function getAdminUsersRequestUrl\(/);
  assert.match(publicAppSource, /new URLSearchParams\(\)/);
  assert.match(publicAppSource, /params\.set\("page"/);
  assert.match(publicAppSource, /params\.set\("pageSize"/);
  assert.match(publicAppSource, /params\.set\("search"/);
  assert.match(publicAppSource, /params\.set\("level"/);
  assert.match(publicAppSource, /params\.set\("plan"/);
  assert.match(publicAppSource, /normalizeAdminUsersPagination\(data\.pagination/);
  assert.match(publicAppSource, /state\.adminUserSummary = data\.summary/);
  assert.match(publicAppSource, /hasAdminUsersServerPagination\(\)/);
  assert.match(publicAppSource, /adminUserSearchTimer = setTimeout/);
});
