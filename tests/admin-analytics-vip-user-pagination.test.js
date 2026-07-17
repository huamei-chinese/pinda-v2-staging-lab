const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(repoRoot, "public", "app.js"), "utf8");
const publicIndex = fs.readFileSync(path.join(repoRoot, "public", "index.html"), "utf8");

test("VIP learning analytics user summary is paginated at five users per page", () => {
  assert.match(appSource, /adminVipAnalyticsUserPage:\s*1/);
  assert.match(appSource, /const ADMIN_VIP_ANALYTICS_USER_PAGE_SIZE = 5;/);
  assert.match(
    appSource,
    /getAdminAnalyticsTablePagination\(vipUserSummary,\s*state\.adminVipAnalyticsUserPage,\s*ADMIN_VIP_ANALYTICS_USER_PAGE_SIZE\)/,
  );
  assert.match(appSource, /renderAdminAnalyticsPaginationHTML\("users",\s*vipUserSummaryPagination,\s*isVi\)/);
  assert.match(appSource, /vipUserSummaryRows\.map/);
  assert.match(appSource, /vipUserSummaryPagination\.startIndex \+ index \+ 1/);
  assert.match(appSource, /if \(kind === "users"\) state\.adminVipAnalyticsUserPage = page;/);
});

test("public entrypoint cache-busts the current app bundle", () => {
  assert.match(publicIndex, /app\.js\?v=auth-forgot-under-password-20260717/);
});
