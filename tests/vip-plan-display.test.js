const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

require("ts-node/register/transpile-only");

const { AuthService } = require("../src/auth/auth.service");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("current user status exposes VIP plan id, name, expiry, and remaining days", () => {
  const expiresAt = new Date(Date.now() + 7 * 86400000).toISOString();
  const service = new AuthService({});
  const user = service.publicUser({
    id: "user-1",
    full_name: "VIP User",
    email: "vip@example.com",
    role: "student",
    is_active: true,
    current_level: "HSK2",
    avatar_url: "",
    is_premium: true,
    vip_plan_id: "7d",
    premium_until: expiresAt,
    daily_reminder_enabled: true,
    email_verified_at: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    last_login_at: null,
  });

  assert.equal(user.isPremium, true);
  assert.equal(user.vipPlanId, "7d");
  assert.equal(user.vipPlanName, "VIP 7 ngày");
  assert.equal(user.vipPlanNameZh, "7天VIP");
  assert.equal(user.vipExpiresAt, expiresAt);
  assert.equal(user.vipRemainingDays >= 6 && user.vipRemainingDays <= 7, true);
});

test("frontend has explicit VIP plan display helpers and localized labels", () => {
  assert.match(appSource, /function getVipPlanDisplay\(/);
  assert.match(appSource, /VIP 7 ngày/);
  assert.match(appSource, /VIP 30 ngày/);
  assert.match(appSource, /VIP 3 tháng/);
  assert.match(appSource, /7天VIP/);
  assert.match(appSource, /30天VIP/);
  assert.match(appSource, /90天VIP/);
  assert.match(appSource, /Còn \$\{remainingDays\} ngày/);
  assert.match(appSource, /剩余 \$\{remainingDays\} 天/);
  assert.match(appSource, /Hết hạn:/);
  assert.match(appSource, /到期：/);
});

test("admin user list distinguishes VIP 7d, VIP 30d, VIP 90d, and free plans", () => {
  assert.match(appSource, /function getAdminUserPlanLabel\(/);
  assert.match(appSource, /VIP 7d/);
  assert.match(appSource, /VIP 30d/);
  assert.match(appSource, /VIP 90d/);
  assert.match(appSource, /VIP 7 ngày/);
  assert.match(appSource, /VIP 30 ngày/);
  assert.match(appSource, /VIP 3 tháng/);
});
