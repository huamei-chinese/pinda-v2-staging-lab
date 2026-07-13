const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

require("ts-node/register/transpile-only");

const { AdminService } = require("../src/admin/admin.service");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

function createAdminServiceWithDb(db) {
  return new AdminService(db, {}, {}, {});
}

test("admin update can cancel VIP and clear the stored plan id", async () => {
  const calls = [];
  const db = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes("SELECT role, ref, is_active FROM users")) {
        return { rows: [{ role: "admin", is_active: true }] };
      }
      if (sql.includes("SELECT id, full_name, email, role")) {
        return { rows: [{
          id: "user-1",
          full_name: "User One",
          email: "user@example.com",
          role: "student",
          is_active: true,
          current_level: "HSK2",
        }] };
      }
      if (sql.includes("UPDATE users")) {
        return {
          rows: [{
            id: "user-1",
            full_name: "User One",
            email: "user@example.com",
            role: "student",
            is_active: true,
            current_level: "HSK2",
            is_premium: false,
            premium_until: null,
            vip_plan_id: null,
            daily_reminder_enabled: true,
          }],
          rowCount: 1,
        };
      }
      return { rows: [], rowCount: 0 };
    },
  };
  const service = createAdminServiceWithDb(db);

  const result = await service.updateUser("user-1", {
    fullName: "User One",
    email: "user@example.com",
    role: "student",
    isActive: true,
    currentLevel: "HSK2",
    plan: "FREE",
  }, { "x-admin-user-id": "admin-1" });

  const updateCall = calls.find((call) => call.sql.includes("UPDATE users"));
  assert.match(updateCall.sql, /is_premium = CASE/);
  assert.match(updateCall.sql, /vip_plan_id = CASE/);
  assert.equal(result.user.isPremium, false);
  assert.equal(result.user.vipPlanId, null);
});

test("admin update can set a future VIP expiry and latest plan id", async () => {
  const future = new Date(Date.now() + 10 * 86400000).toISOString();
  const calls = [];
  const db = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes("SELECT role, ref, is_active FROM users")) {
        return { rows: [{ role: "admin", is_active: true }] };
      }
      if (sql.includes("SELECT id, full_name, email, role")) {
        return { rows: [{
          id: "user-1",
          full_name: "User One",
          email: "user@example.com",
          role: "student",
          is_active: true,
          current_level: "HSK2",
        }] };
      }
      if (sql.includes("UPDATE users")) {
        return {
          rows: [{
            id: "user-1",
            full_name: "User One",
            email: "user@example.com",
            role: "student",
            is_active: true,
            current_level: "HSK2",
            is_premium: true,
            premium_until: future,
            vip_plan_id: "30d",
            daily_reminder_enabled: true,
          }],
          rowCount: 1,
        };
      }
      return { rows: [], rowCount: 0 };
    },
  };
  const service = createAdminServiceWithDb(db);

  const result = await service.updateUser("user-1", {
    fullName: "User One",
    email: "user@example.com",
    role: "student",
    isActive: true,
    currentLevel: "HSK2",
    plan: "PREMIUM",
    premiumUntil: future,
    vipPlanId: "30d",
  }, { "x-admin-user-id": "admin-1" });

  const updateCall = calls.find((call) => call.sql.includes("UPDATE users"));
  assert.match(updateCall.sql, /premium_until = CASE/);
  assert.match(updateCall.sql, /vip_plan_id = CASE/);
  assert.equal(result.user.isPremium, true);
  assert.equal(result.user.vipPlanId, "30d");
});

test("frontend exposes admin VIP correction controls", () => {
  assert.match(appSource, /admin-set-vip-expiry/);
  assert.match(appSource, /admin-cancel-vip-user/);
  assert.match(appSource, /confirmAdminVipCancel/);
  assert.match(appSource, /confirmAdminVipExpiryUpdate/);
});

test("frontend auth modal supports password visibility and register password confirmation", () => {
  assert.match(appSource, /id="authConfirmPassword"/);
  assert.match(appSource, /data-toggle-password="authPassword"/);
  assert.match(appSource, /data-toggle-password="authConfirmPassword"/);
  assert.match(appSource, /Mật khẩu nhập lại không khớp/);
  assert.match(appSource, /两次输入的密码不一致/);
});
