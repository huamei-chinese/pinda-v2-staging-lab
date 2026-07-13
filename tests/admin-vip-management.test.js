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

test("VIP management UI loads revenue and activation data by date range", () => {
  assert.match(appSource, /\/api\/admin\/vip\/overview\?\$\{params\.toString\(\)\}/);
  assert.match(appSource, /adminVipFromInput/);
  assert.match(appSource, /adminVipToInput/);
  assert.match(appSource, /function analyticsNormalizeDateInput\(value\)/);
  assert.match(appSource, /analyticsNormalizeDateInput\(fromInput\?\.value\)/);
  assert.match(appSource, /data\?\.meta\?\.from && data\?\.meta\?\.to/);
  assert.match(appSource, /Doanh thu/);
  assert.match(appSource, /data-admin-vip-plan-filter/);
});

test("admin VIP backend aggregates paid orders and popup opens", () => {
  assert.match(adminServiceSource, /async getVipManagement/);
  assert.match(adminServiceSource, /normalizeAnalyticsDateInput\(options\.from\)/);
  assert.match(adminServiceSource, /\^\(\\d\{1,2\}\)\[\.\/-\]\(\\d\{1,2\}\)\[\.\/-\]\(\\d\{4\}\)\$/);
  assert.match(adminServiceSource, /FROM payment_orders o/);
  assert.match(adminServiceSource, /o\.status = 'paid'/);
  assert.match(adminServiceSource, /COALESCE\(SUM\(o\.amount\), 0\)::bigint AS revenue/);
  assert.match(adminServiceSource, /event_type = 'vip_modal_opened'/);
  assert.match(adminVipControllerSource, /@Controller\('api\/admin\/vip'\)/);
  assert.match(adminModuleSource, /AdminVipController/);
});

test("Netlify and local server expose the VIP overview before API fallback", () => {
  assert.match(netlifyApiSource, /path === "\/api\/admin\/vip\/overview"/);
  assert.match(netlifyApiSource, /function getVipManagement/);
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
