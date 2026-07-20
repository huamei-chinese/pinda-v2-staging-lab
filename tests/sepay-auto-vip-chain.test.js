const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

require("ts-node/register/transpile-only");

const { PaymentService } = require("../src/payment/payment.service");
const { AuthService } = require("../src/auth/auth.service");

const netlifyApiSource = fs.readFileSync(path.join(__dirname, "..", "netlify", "functions", "api.mjs"), "utf8");

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

test("payment status reconciles a pending VIP order from SePay API when webhook is missing", async () => {
  const previousToken = process.env.SEPAY_API_TOKEN;
  const previousAccount = process.env.SEPAY_BANK_ACCOUNT;
  const previousFetch = global.fetch;
  process.env.SEPAY_API_TOKEN = "unit-test-sepay-token";
  process.env.SEPAY_BANK_ACCOUNT = "0399054584";

  const order = {
    id: "order-129k",
    user_id: "user-129k",
    email: "buyer@example.com",
    plan_id: "30d",
    amount: 129000,
    transfer_code: "HUAMEI2C9C8F02",
    status: "pending",
    paid_at: null,
    expires_at: new Date(Date.now() - 60_000).toISOString(),
  };
  const queries = [];
  const clientQueries = [];
  const db = {
    async query(sql, params) {
      queries.push({ sql, params });
      if (sql.includes("FROM payment_orders o")) {
        return { rows: [{ ...order }], rowCount: 1 };
      }
      if (sql === "SELECT * FROM payment_orders WHERE id = $1") {
        return { rows: [{ ...order, status: "paid", paid_at: "2026-07-19T10:34:00.000Z" }], rowCount: 1 };
      }
      if (sql.includes("SELECT is_premium, premium_until FROM users")) {
        return { rows: [{ is_premium: true, premium_until: "2026-08-18T10:34:00.000Z" }], rowCount: 1 };
      }
      if (sql.includes("UPDATE payment_orders SET status = 'expired'")) {
        throw new Error("order should reconcile before it expires");
      }
      return { rows: [], rowCount: 0 };
    },
    getPool: () => ({
      connect: async () => ({
        async query(sql, params) {
          clientQueries.push({ sql, params });
          if (sql === "BEGIN" || sql === "COMMIT" || sql === "ROLLBACK") return { rows: [], rowCount: 0 };
          if (sql.includes("SELECT * FROM payment_orders WHERE id = $1 FOR UPDATE")) {
            return { rows: [{ ...order }], rowCount: 1 };
          }
          if (sql.includes("SELECT premium_until, vip_trial_used FROM users")) {
            return { rows: [{ premium_until: null, vip_trial_used: false }], rowCount: 1 };
          }
          if (sql.includes("UPDATE payment_orders")) return { rows: [], rowCount: 1 };
          if (sql.includes("UPDATE users")) return { rows: [], rowCount: 1 };
          return { rows: [], rowCount: 0 };
        },
        release() {},
      }),
    }),
  };
  const plans = {
    getPlanById: async () => ({
      id: "30d",
      months: 30,
      durationUnit: "days",
      amount: 129000,
      nameVi: "Goi VIP 30 ngay",
      nameZh: "30 days VIP",
    }),
  };
  global.fetch = async (url, options) => {
    assert.match(String(url), /https:\/\/userapi\.sepay\.vn\/v2\/transactions\?/);
    assert.match(String(url), /q=HUAMEI2C9C8F02/);
    assert.match(String(url), /amount_in_min=129000/);
    assert.equal(options.headers.Authorization, "Bearer unit-test-sepay-token");
    return {
      ok: true,
      async json() {
        return {
          status: "success",
          data: [{
            id: "sepay-api-transaction-1",
            transaction_date: "2026-07-19T17:34:00+07:00",
            account_number: "0399054584",
            transfer_type: "in",
            amount_in: 129000,
            transaction_content: "MBVCB.15194738791.766224.HUAMEI2C9C8F02",
            reference_number: "FT26201090402872",
            code: null,
          }],
        };
      },
    };
  };

  try {
    const service = new PaymentService(db, plans);
    const result = await service.getOrderStatus(order.id, order.user_id);

    assert.equal(result.order.status, "paid");
    assert.equal(result.premium.isPremium, true);
    assert.equal(clientQueries.some((query) => query.sql.includes("UPDATE users")), true);
    assert.equal(clientQueries.some((query) => query.sql.includes("sepay_webhook_events")), false);
  } finally {
    if (previousToken === undefined) delete process.env.SEPAY_API_TOKEN;
    else process.env.SEPAY_API_TOKEN = previousToken;
    if (previousAccount === undefined) delete process.env.SEPAY_BANK_ACCOUNT;
    else process.env.SEPAY_BANK_ACCOUNT = previousAccount;
    global.fetch = previousFetch;
  }
});

test("Netlify SePay activation persists the selected VIP plan id", () => {
  assert.match(netlifyApiSource, /ALTER TABLE users ADD COLUMN IF NOT EXISTS vip_plan_id TEXT/);
  assert.match(netlifyApiSource, /function parseSepayTransactionDate\(value\)/);
  assert.match(netlifyApiSource, /parseSepayTransactionDate\(payload\.transactionDate\)/);
  assert.match(netlifyApiSource, /function sepayApiConfig\(\)/);
  assert.match(netlifyApiSource, /async function reconcilePendingOrderFromSepayApi\(order\)/);
  assert.match(netlifyApiSource, /reconcilePendingOrderFromSepayApi\(order\)/);
  assert.match(netlifyApiSource, /paid_at = \$2/);
  assert.match(netlifyApiSource, /\{ id: "3d", months: 3, durationUnit: "days", amount: 29000/);
  assert.match(netlifyApiSource, /\{ id: "30d", months: 30, durationUnit: "days", amount: 129000/);
  assert.match(netlifyApiSource, /\{ id: "90d", months: 90, durationUnit: "days", amount: 329000/);
  assert.match(netlifyApiSource, /INSERT INTO payment_plans \(id, months, duration_unit, amount, name_vi, name_zh, is_active, sort_order\)/);
  assert.match(netlifyApiSource, /const vipPlanId = isPremium \? normalizeVipPlanId\(row\.vip_plan_id\) : null/);
  assert.match(netlifyApiSource, /vipPlanId,/);
  assert.match(netlifyApiSource, /vipTrialUsed: Boolean\(row\.vip_trial_used\)/);
  assert.match(netlifyApiSource, /vipRemainingDays: isPremium \? vipRemainingDays\(premiumUntil\) : 0/);
  assert.match(netlifyApiSource, /async function getCurrentUserStatus\(req, id\)/);
  assert.match(netlifyApiSource, /ownStatusMatch && req\.method === "GET"[\s\S]*getCurrentUserStatus/);
  assert.match(
    netlifyApiSource,
    /UPDATE users[\s\S]*vip_trial_used = CASE WHEN \$4::boolean THEN TRUE ELSE vip_trial_used END/,
  );
  assert.match(
    netlifyApiSource,
    /\[lockedOrder\.user_id, premiumUntil\.toISOString\(\), plan\.id, isIntroVipPlan\]/,
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
