const assert = require("node:assert/strict");
const test = require("node:test");

require("ts-node/register/transpile-only");

const { PaymentService } = require("../src/payment/payment.service");
const { AuthService } = require("../src/auth/auth.service");

test("SePay webhook authorization fails closed when the webhook key is missing", () => {
  const previousKey = process.env.SEPAY_WEBHOOK_API_KEY;
  const previousNodeEnv = process.env.NODE_ENV;
  delete process.env.SEPAY_WEBHOOK_API_KEY;
  process.env.NODE_ENV = "development";

  try {
    const service = new PaymentService({}, {});
    assert.equal(service.verifyWebhookAuthorization("Apikey local-test"), false);
  } finally {
    if (previousKey === undefined) delete process.env.SEPAY_WEBHOOK_API_KEY;
    else process.env.SEPAY_WEBHOOK_API_KEY = previousKey;
    if (previousNodeEnv === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = previousNodeEnv;
  }
});

test("SePay webhook authorization rejects wrong keys and accepts the configured key", () => {
  const previousKey = process.env.SEPAY_WEBHOOK_API_KEY;
  process.env.SEPAY_WEBHOOK_API_KEY = "unit-test-webhook-key";

  try {
    const service = new PaymentService({}, {});
    assert.equal(service.verifyWebhookAuthorization("Apikey wrong-key"), false);
    assert.equal(service.verifyWebhookAuthorization("Apikey unit-test-webhook-key"), true);
  } finally {
    if (previousKey === undefined) delete process.env.SEPAY_WEBHOOK_API_KEY;
    else process.env.SEPAY_WEBHOOK_API_KEY = previousKey;
  }
});

test("SePay order activation does not extend VIP when the order is already processed", async () => {
  const queries = [];
  const client = {
    async query(sql, params) {
      queries.push({ sql, params });
      if (sql === "BEGIN" || sql === "COMMIT" || sql === "ROLLBACK") return { rows: [], rowCount: 0 };
      if (sql.includes("FROM payment_orders")) {
        return {
          rows: [{
            id: "order-1",
            user_id: "user-1",
            plan_id: "7d",
            amount: 29000,
            status: "paid",
            premium_until: null,
          }],
          rowCount: 1,
        };
      }
      if (sql.includes("SELECT premium_until FROM users")) {
        return { rows: [{ premium_until: null }], rowCount: 1 };
      }
      if (sql.includes("UPDATE payment_orders")) {
        return { rows: [], rowCount: 0 };
      }
      return { rows: [], rowCount: 1 };
    },
    release() {},
  };
  const db = { getPool: () => ({ connect: async () => client }) };
  const plans = {
    getPlanById: async () => ({
      id: "7d",
      months: 7,
      durationUnit: "days",
      amount: 29000,
      nameVi: "Goi VIP 7 ngay",
      nameZh: "7 days VIP",
    }),
  };
  const service = new PaymentService(db, plans);

  await service.activateOrder({ id: "order-1", user_id: "user-1", plan_id: "7d" }, 12345);

  assert.equal(
    queries.some((query) => query.sql.includes("UPDATE users")),
    false,
  );
});

test("current user refresh returns the latest persisted VIP status", async () => {
  const db = {
    async query(sql, params) {
      assert.match(sql, /SELECT \*/);
      assert.deepEqual(params, ["user-1"]);
      return {
        rows: [{
          id: "user-1",
          full_name: "VIP User",
          email: "vip@example.com",
          role: "student",
          is_active: true,
          current_level: "HSK2",
          avatar_url: "",
          is_premium: true,
          premium_until: new Date(Date.now() + 7 * 86400000).toISOString(),
          daily_reminder_enabled: true,
          email_verified_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          last_login_at: null,
        }],
      };
    },
  };
  const service = new AuthService(db);

  const result = await service.getCurrentUser("user-1", { "x-user-id": "user-1" });

  assert.equal(result.user.id, "user-1");
  assert.equal(result.user.isPremium, true);
  assert.equal(result.user.vipStatus, "active");
  assert.equal(result.user.vipPlan, "PREMIUM");
  assert.equal(Boolean(result.user.vipExpiresAt), true);
});
