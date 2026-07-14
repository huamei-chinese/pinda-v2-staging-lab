const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");

const appSource = fs.readFileSync("public/app.js", "utf8");
const stylesSource = fs.readFileSync("public/styles.css", "utf8");
const adminServiceSource = fs.readFileSync("src/admin/admin.service.ts", "utf8");
const adminModuleSource = fs.readFileSync("src/admin/admin.module.ts", "utf8");
const adminVipControllerSource = fs.readFileSync("src/admin/admin-vip.controller.ts", "utf8");
const netlifyApiSource = fs.readFileSync("netlify/functions/api.mjs", "utf8");
const serverSource = fs.readFileSync("server.js", "utf8");

test("admin has a dedicated VIP management tab under users", () => {
  assert.match(appSource, /id="adminVipTabBtn"/);
  assert.match(appSource, /state\.adminTab = "vip"/);
  assert.match(appSource, /renderAdminVipPanelHTML\(\)/);
  assert.match(stylesSource, /\.admin-main--vip \.admin-users-panel/);
});

test("VIP management UI loads revenue activation registration and paginated user data by date range", () => {
  assert.match(appSource, /\/api\/admin\/vip\/overview\?\$\{params\.toString\(\)\}/);
  assert.match(appSource, /function renderAdminVipRangeControl\(\)/);
  assert.match(appSource, /id="adminVipRangeTrigger"/);
  assert.match(appSource, /data-admin-vip-preset/);
  assert.match(appSource, /data-admin-vip-cal-nav/);
  assert.match(appSource, /data-admin-vip-day/);
  assert.match(appSource, /function analyticsNormalizeDateInput\(value\)/);
  assert.match(appSource, /state\.adminVipDraftFrom/);
  assert.match(appSource, /state\.adminVipDraftTo/);
  assert.match(appSource, /data\?\.meta\?\.from && data\?\.meta\?\.to/);
  assert.match(appSource, /data-admin-vip-plan-filter/);
  assert.match(appSource, /registeredUsers/);
  assert.match(appSource, /data\.registeredUsers \?\? data\.registeredCount \?\? 0/);
  assert.match(appSource, /admin-vip-registration-card/);
  assert.match(appSource, /adminVipUserPage/);
  assert.match(appSource, /adminVipUserPageSize/);
  assert.match(appSource, /function renderAdminVipUserPagination/);
  assert.match(appSource, /data-admin-vip-user-page/);
  assert.match(appSource, /pagedUsers/);
  assert.match(stylesSource, /\.admin-vip-range--picker/);
  assert.match(stylesSource, /\.admin-vip-range-pop/);
  assert.match(stylesSource, /\.admin-vip-registration-card/);
  assert.match(stylesSource, /\.admin-vip-pagination/);
});

test("admin VIP backend aggregates paid orders popup opens and all historical user registrations", () => {
  assert.match(adminServiceSource, /async getVipManagement/);
  assert.match(adminServiceSource, /normalizeAnalyticsDateInput\(options\.from\)/);
  assert.match(adminServiceSource, /\^\(\\d\{1,2\}\)\[\.\/-\]\(\\d\{1,2\}\)\[\.\/-\]\(\\d\{4\}\)\$/);
  assert.match(adminServiceSource, /FROM payment_orders o/);
  assert.match(adminServiceSource, /o\.status = 'paid'/);
  assert.match(adminServiceSource, /date::timestamp AT TIME ZONE/);
  assert.match(adminServiceSource, /o\.amount IN \(29000, 129000, 329000\)/);
  assert.match(adminServiceSource, /LOWER\(COALESCE\(u\.email, ''\)\) NOT LIKE 'test%@%'/);
  assert.match(adminServiceSource, /COALESCE\(SUM\(o\.amount\), 0\)::bigint AS revenue/);
  assert.match(adminServiceSource, /event_type = 'vip_modal_opened'/);
  assert.match(adminServiceSource, /SELECT COUNT\(\*\) AS value FROM users WHERE \$\{eventWithinRange\}/);
  assert.match(adminServiceSource, /registeredUsers: Number\(registeredUsers\.rows\[0\]\?\.value \|\| 0\)/);
  assert.doesNotMatch(adminServiceSource, /LIMIT 400/);
  assert.match(adminVipControllerSource, /@Controller\('api\/admin\/vip'\)/);
  assert.match(adminModuleSource, /AdminVipController/);
});

test("Netlify and local server expose all VIP overview users before API fallback", () => {
  assert.match(netlifyApiSource, /path === "\/api\/admin\/vip\/overview"/);
  assert.match(netlifyApiSource, /function getVipManagement/);
  assert.match(netlifyApiSource, /o\.amount IN \(29000, 129000, 329000\)/);
  assert.match(netlifyApiSource, /LOWER\(COALESCE\(u\.email, ''\)\) NOT LIKE 'test%@%'/);
  assert.match(netlifyApiSource, /SELECT COUNT\(\*\) AS value FROM users WHERE \$\{eventWithinRange\}/);
  assert.match(serverSource, /SELECT COUNT\(\*\) AS value FROM users WHERE \$\{eventWithinRange\}/);
  assert.match(netlifyApiSource, /registeredUsers: Number\(registeredUsers\.rows\[0\]\?\.value \|\| 0\)/);
  assert.match(serverSource, /registeredUsers: Number\(registeredUsers\.rows\[0\]\?\.value \|\| 0\)/);
  assert.doesNotMatch(netlifyApiSource, /LIMIT 400/);
  assert.doesNotMatch(serverSource, /LIMIT 400/);
  assert.match(netlifyApiSource, /function analyticsNormalizeDateInput\(value\)/);
  assert.match(serverSource, /function analyticsNormalizeDateInput\(value\)/);
  assert.match(serverSource, /const fromParam = analyticsNormalizeDateInput\(searchParams\.get\("from"\)\)/);
  const serverRouteIndex = serverSource.indexOf('url.pathname === "/api/admin/vip/overview"');
  const fallbackIndex = serverSource.indexOf('url.pathname.startsWith("/api/")');
  assert.notEqual(serverRouteIndex, -1);
  assert.ok(serverRouteIndex < fallbackIndex);
});

test("Netlify admin user updates persist VIP plan ids including 90d", () => {
  assert.match(netlifyApiSource, /function vipPlanIdFromDuration\(planId, durationDays\)/);
  assert.match(netlifyApiSource, /if \(durationDays === 90\) return "90d"/);
  assert.match(netlifyApiSource, /INSERT INTO users \(full_name, email, password_hash, role, is_active, current_level, is_premium, premium_until, vip_plan_id\)/);
  assert.match(netlifyApiSource, /vip_plan_id = CASE[\s\S]*COALESCE\(\$9, vip_plan_id\)/);
});
