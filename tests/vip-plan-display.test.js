const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

require("ts-node/register/transpile-only");

const { AuthService } = require("../src/auth/auth.service");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("current user status exposes VIP plan id, name, expiry, and remaining days", () => {
  const expiresAt = new Date(Date.now() + 3 * 86400000).toISOString();
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
    vip_plan_id: "3d",
    vip_trial_used: true,
    premium_until: expiresAt,
    daily_reminder_enabled: true,
    email_verified_at: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    last_login_at: null,
  });

  assert.equal(user.isPremium, true);
  assert.equal(user.vipPlanId, "3d");
  assert.equal(user.vipPlanName, "VIP 3 ngày");
  assert.equal(user.vipPlanNameZh, "3天VIP");
  assert.equal(user.vipTrialUsed, true);
  assert.equal(user.vipExpiresAt, expiresAt);
  assert.equal(user.vipRemainingDays >= 2 && user.vipRemainingDays <= 3, true);
});

test("frontend has explicit VIP plan display helpers and localized labels", () => {
  assert.match(appSource, /function getVipPlanDisplay\(/);
  assert.match(appSource, /VIP 3 ngày/);
  assert.match(appSource, /VIP 30 ngày/);
  assert.match(appSource, /VIP 3 tháng/);
  assert.match(appSource, /3天VIP/);
  assert.match(appSource, /30天VIP/);
  assert.match(appSource, /90天VIP/);
  assert.match(appSource, /Còn \$\{remainingDays\} ngày/);
  assert.match(appSource, /剩余 \$\{remainingDays\} 天/);
  assert.match(appSource, /Hết hạn:/);
  assert.match(appSource, /到期：/);
});

test("admin user list distinguishes VIP 3d, VIP 30d, VIP 90d, and free plans", () => {
  assert.match(appSource, /function getAdminUserPlanLabel\(/);
  assert.match(appSource, /VIP 3d/);
  assert.match(appSource, /VIP 30d/);
  assert.match(appSource, /VIP 90d/);
  assert.match(appSource, /VIP 3 ngày/);
  assert.match(appSource, /VIP 30 ngày/);
  assert.match(appSource, /VIP 3 tháng/);
});

test("admin user plan filter supports all, VIP, non-VIP, and sellable VIP durations", () => {
  const filterSelect = appSource.match(/<select id="adminUserPlanFilter"[\s\S]*?<\/select>/)?.[0] || "";
  assert.match(filterSelect, /value="all"[\s\S]*Tất cả/);
  assert.match(filterSelect, /value="vip"[\s\S]*VIP/);
  assert.match(filterSelect, /value="free"[\s\S]*Không VIP/);
  assert.match(filterSelect, /value="3d"[\s\S]*VIP 3 ngày/);
  assert.match(filterSelect, /value="30d"[\s\S]*VIP 30 ngày/);
  assert.match(filterSelect, /value="90d"[\s\S]*VIP 3 tháng/);
  assert.doesNotMatch(filterSelect, /value="FREE"|value="PREMIUM"|value="EMPLOYEE"/);
  assert.match(appSource, /const ADMIN_USER_PLAN_FILTER_VALUES = new Set\(\["all", "vip", "free", "3d", "30d", "90d"\]\)/);
  assert.match(appSource, /function normalizeAdminUserPlanFilter\(/);
  assert.match(appSource, /function getAdminUserVipPlanFilterValue\(/);
  assert.match(appSource, /planFilter === "vip" && !isActivePremiumUser\(user\)/);
  assert.match(appSource, /planFilter === "free" && isActivePremiumUser\(user\)/);
  assert.match(appSource, /getAdminUserVipPlanFilterValue\(user\) !== planFilter/);
});

test("frontend marks the 3-day VIP plan as one-time only after purchase", () => {
  assert.match(appSource, /function hasUsedIntroVipPlan\(/);
  assert.match(appSource, /vipTrialUsed/);
  assert.match(appSource, /Chỉ mua được một lần/);
  assert.match(appSource, /Gói VIP 3 ngày chỉ mua được một lần cho mỗi tài khoản/);
});
