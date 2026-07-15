const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

require("ts-node/register/transpile-only");

const { HttpException } = require("@nestjs/common");
const { AdminService } = require("../src/admin/admin.service");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const stylesSource = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");
const adminServiceSource = fs.readFileSync(path.join(__dirname, "..", "src", "admin", "admin.service.ts"), "utf8");
const databaseServiceSource = fs.readFileSync(path.join(__dirname, "..", "src", "database", "database.service.ts"), "utf8");
const serverSource = fs.readFileSync(path.join(__dirname, "..", "server.js"), "utf8");
const netlifyApiSource = fs.readFileSync(path.join(__dirname, "..", "netlify", "functions", "api.mjs"), "utf8");

function createAdminServiceWithDb(db) {
  return new AdminService(db, {}, {}, {
    normalizeReferralRef(ref) {
      const normalized = String(ref || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_-]/g, "")
        .slice(0, 64);
      return normalized || null;
    },
  });
}

test("admin can set a normal user to content role in the database", async () => {
  const calls = [];
  const db = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes("SELECT role, ref, is_active FROM users")) {
        return { rows: [{ role: "admin", is_active: true }] };
      }
      if (sql.includes("SELECT id, full_name, email, role, ref")) {
        return { rows: [{ id: "user-1", full_name: "Staff One", email: "staff@example.com", role: "user", ref: "" }] };
      }
      if (sql.includes("UPDATE users")) {
        return {
          rows: [{
            id: "user-1",
            full_name: "Staff One",
            email: "staff@example.com",
            role: "content",
            is_active: true,
            current_level: "HSK2",
            is_premium: false,
            premium_until: null,
            vip_plan_id: null,
            daily_reminder_enabled: true,
          }],
        };
      }
      return { rows: [] };
    },
  };
  const service = createAdminServiceWithDb(db);

  const result = await service.updateUserRole("user-1", { role: "content" }, { "x-admin-user-id": "admin-1" });

  const updateCall = calls.find((call) => call.sql.includes("UPDATE users"));
  assert.equal(updateCall.params[0], "content");
  assert.equal(result.user.role, "content");
});

test("staff can assign full non-admin user roles", async () => {
  const calls = [];
  const db = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes("SELECT role, ref, is_active FROM users")) {
        return { rows: [{ role: "staff", is_active: true }] };
      }
      if (sql.includes("SELECT id, full_name, email, role, ref")) {
        return { rows: [{ id: "user-1", role: "user" }] };
      }
      if (sql.includes("UPDATE users")) {
        return {
          rows: [{
            id: "user-1",
            full_name: "User One",
            email: "user@example.com",
            role: params[0],
            is_active: true,
            current_level: "HSK2",
            is_premium: false,
            premium_until: null,
            vip_plan_id: null,
            daily_reminder_enabled: true,
          }],
        };
      }
      return { rows: [] };
    },
  };
  const service = createAdminServiceWithDb(db);

  const result = await service.updateUserRole("user-1", { role: "sales" }, { "x-admin-user-id": "staff-1" });

  assert.equal(result.user.role, "sales");
  assert.equal(calls.find((call) => call.sql.includes("UPDATE users")).params[0], "sales");

  await assert.rejects(
    () => service.updateUserRole("user-1", { role: "admin" }, { "x-admin-user-id": "staff-1" }),
    (error) => error instanceof HttpException && error.getStatus() === 400,
  );
});

test("admin role update accepts staff but rejects admin role assignment", async () => {
  const calls = [];
  const db = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes("SELECT role, ref, is_active FROM users")) {
        return { rows: [{ role: "admin", is_active: true }] };
      }
      if (sql.includes("SELECT id, full_name, email, role, ref")) {
        return { rows: [{ id: "user-1", role: "user" }] };
      }
      if (sql.includes("UPDATE users")) {
        return {
          rows: [{
            id: "user-1",
            full_name: "User One",
            email: "user@example.com",
            role: params[0],
            is_active: true,
            current_level: "HSK2",
            is_premium: false,
            premium_until: null,
            vip_plan_id: null,
            daily_reminder_enabled: true,
          }],
        };
      }
      return { rows: [] };
    },
  };
  const service = createAdminServiceWithDb(db);

  const result = await service.updateUserRole("user-1", { role: "staff" }, { "x-admin-user-id": "admin-1" });
  assert.equal(result.user.role, "staff");

  await assert.rejects(
    () => service.updateUserRole("user-1", { role: "admin" }, { "x-admin-user-id": "admin-1" }),
    (error) => error instanceof HttpException && error.getStatus() === 400,
  );
});

test("promoting a referred user to ctv assigns a fresh partner referral code", async () => {
  const calls = [];
  const db = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes("SELECT role, ref, is_active FROM users")) {
        return { rows: [{ role: "admin", is_active: true }] };
      }
      if (sql.includes("SELECT id, full_name, email, role, ref")) {
        return {
          rows: [{
            id: "user-1",
            full_name: "kiet",
            email: "kle995301@gmail.com",
            role: "user",
            ref: "kamini",
          }],
        };
      }
      if (sql.includes("lower(btrim(ref))")) {
        if (params[0] === "kamini") {
          return { rows: [{ id: "staff-1", full_name: "Kamini", email: "kamini01@gmail.com" }] };
        }
        return { rows: [] };
      }
      if (sql.includes("UPDATE users")) {
        return {
          rows: [{
            id: "user-1",
            full_name: "kiet",
            email: "kle995301@gmail.com",
            role: params[0],
            ref: params[3],
            is_active: true,
            current_level: "HSK2",
            is_premium: false,
            premium_until: null,
            vip_plan_id: null,
            daily_reminder_enabled: true,
          }],
        };
      }
      return { rows: [] };
    },
  };
  const service = createAdminServiceWithDb(db);

  const result = await service.updateUserRole("user-1", { role: "ctv" }, { "x-admin-user-id": "admin-1" });

  const updateCall = calls.find((call) => call.sql.includes("UPDATE users"));
  assert.deepEqual(updateCall.params, ["ctv", "user-1", true, "kle995301"]);
  assert.equal(result.user.ref, "kle995301");
});

test("admin cannot assign the same referral code to two ctv accounts", async () => {
  const calls = [];
  const db = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes("SELECT role, ref, is_active FROM users")) {
        return { rows: [{ role: "admin", is_active: true }] };
      }
      if (sql.includes("SELECT id, role")) {
        return { rows: [{ id: "ctv-1", role: "ctv" }] };
      }
      if (sql.includes("lower(btrim(ref))")) {
        return {
          rows: [{
            id: "ctv-2",
            full_name: "Existing CTV",
            email: "existing@example.com",
          }],
        };
      }
      return { rows: [] };
    },
  };
  const service = createAdminServiceWithDb(db);

  await assert.rejects(
    () => service.updateUserRef("ctv-1", { ref: " TikTok1 " }, { "x-admin-user-id": "admin-1" }),
    (error) => error instanceof HttpException && error.getStatus() === 409,
  );

  const duplicateCheck = calls.find((call) => call.sql.includes("lower(btrim(ref))"));
  assert.deepEqual(duplicateCheck.params, ["tiktok1", "ctv-1"]);
  assert.equal(calls.some((call) => call.sql.includes("UPDATE users")), false);
});

test("admin can assign a unique normalized referral code to a ctv account", async () => {
  const calls = [];
  const db = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes("SELECT role, ref, is_active FROM users")) {
        return { rows: [{ role: "admin", is_active: true }] };
      }
      if (sql.includes("SELECT id, role")) {
        return { rows: [{ id: "ctv-1", role: "ctv" }] };
      }
      if (sql.includes("lower(btrim(ref))")) {
        return { rows: [] };
      }
      if (sql.includes("UPDATE users")) {
        return {
          rows: [{
            id: "ctv-1",
            full_name: "CTV One",
            email: "ctv@example.com",
            role: "ctv",
            ref: params[0],
            is_active: true,
            current_level: "HSK2",
            is_premium: false,
            premium_until: null,
            vip_plan_id: null,
            daily_reminder_enabled: true,
          }],
        };
      }
      return { rows: [] };
    },
  };
  const service = createAdminServiceWithDb(db);

  const result = await service.updateUserRef("ctv-1", { ref: " TikTok 1!!! " }, { "x-admin-user-id": "admin-1" });

  const updateCall = calls.find((call) => call.sql.includes("UPDATE users"));
  assert.equal(updateCall.params[0], "tiktok1");
  assert.equal(result.user.ref, "tiktok1");
});

test("ctv vip recalculation counts only referred student users", () => {
  assert.match(adminServiceSource, /WHERE u\.ref IS NOT NULL AND btrim\(u\.ref\) <> ''\s+AND u\.role = 'user'\s+AND u\.is_premium = TRUE/);
});

test("staff can update users and grant VIP from the full user endpoint", async () => {
  const future = new Date(Date.now() + 30 * 86400000).toISOString();
  const calls = [];
  const db = {
    async query(sql, params) {
      calls.push({ sql, params });
      if (sql.includes("SELECT role, ref, is_active FROM users")) {
        return { rows: [{ role: "staff", is_active: true }] };
      }
      if (sql.includes("SELECT id, full_name, email, role")) {
        return {
          rows: [{
            id: "user-1",
            full_name: "User One",
            email: "user@example.com",
            role: "user",
            is_active: true,
            current_level: "HSK2",
          }],
        };
      }
      if (sql.includes("UPDATE users")) {
        return {
          rows: [{
            id: "user-1",
            full_name: "User One VIP",
            email: "vip@example.com",
            role: "content",
            is_active: true,
            current_level: "HSK3",
            is_premium: true,
            premium_until: future,
            vip_plan_id: "30d",
            daily_reminder_enabled: true,
          }],
        };
      }
      return { rows: [] };
    },
  };
  const service = createAdminServiceWithDb(db);

  const result = await service.updateUser("user-1", {
    fullName: "User One VIP",
    email: "vip@example.com",
    role: "content",
    isActive: true,
    currentLevel: "HSK3",
    plan: "PREMIUM",
    durationDays: 30,
  }, { "x-admin-user-id": "staff-1" });

  assert.equal(result.user.role, "content");
  assert.equal(result.user.isPremium, true);
  assert.equal(result.user.vipPlanId, "30d");
  assert.equal(calls.find((call) => call.sql.includes("UPDATE users")).params[2], "content");
});

test("frontend exposes staff role controls only for admin console users", () => {
  assert.match(appSource, /function isStaffAdminUser\(\)/);
  assert.match(appSource, /function canAccessAdminConsole\(\)/);
  assert.match(appSource, /ADMIN_EDITABLE_ROLES = \["user", "sales", "ctv", "content", "staff"\]/);
  assert.match(appSource, /STAFF_EDITABLE_ROLES = ADMIN_EDITABLE_ROLES/);
  assert.match(appSource, /if \(normalized === "staff"\) return \["users", "collaborators"\]/);
  assert.match(appSource, /const canManageVip = \(isAdminUser\(\) \|\| isStaffAdminUser\(\)\) && role !== "admin"/);
  assert.match(appSource, /class="admin-role-select"/);
  assert.match(appSource, /class="admin-role-user"/);
  assert.match(appSource, /api\/admin\/users\/\$\{encodeURIComponent\(userId\)\}\/role/);
  assert.match(appSource, /admin-console--staff/);
  assert.doesNotMatch(stylesSource, /admin-console--staff #adminCreateAccountBtn/);
  assert.doesNotMatch(stylesSource, /admin-console--staff \.admin-delete-user/);
});

test("staff seed emails are promoted without touching admin accounts", () => {
  for (const source of [databaseServiceSource, serverSource, netlifyApiSource]) {
    assert.match(source, /kamini01@gmail\.com/);
    assert.match(source, /theanh\.tuyendung3332@gmail\.com/);
    assert.match(source, /role <> 'admin'/);
    assert.match(source, /SET role = 'staff'/);
  }
});
