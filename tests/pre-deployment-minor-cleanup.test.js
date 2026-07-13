const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

require("ts-node/register/transpile-only");

const { HttpStatus } = require("@nestjs/common");
const { DatabaseService } = require("../src/database/database.service");
const { PaymentPlansService } = require("../src/payment/payment-plans.service");
const { ContentService } = require("../src/content/content.service");

const envExample = fs.readFileSync(path.join(__dirname, "..", ".env.example"), "utf8");
const packageJson = require("../package.json");
const railwayJson = require("../railway.json");

test("public payment plans expose only the approved 7d, 30d, and 90d plans", async () => {
  const db = {
    async query() {
      return {
        rows: [
          { id: "7d", months: 7, duration_unit: "days", amount: 29000, name_vi: "Gói VIP 7 ngày", name_zh: "7天 VIP", sort_order: 1 },
          { id: "30d", months: 30, duration_unit: "days", amount: 129000, name_vi: "Gói VIP 1 tháng", name_zh: "1个月 VIP", sort_order: 2 },
          { id: "90d", months: 90, duration_unit: "days", amount: 329000, name_vi: "Gói VIP 3 tháng", name_zh: "3个月 VIP", sort_order: 3 },
          { id: "1m", months: 1, duration_unit: "months", amount: 29000, name_vi: "1 Tháng", name_zh: "1 个月", sort_order: 3 },
        ],
      };
    },
  };
  const service = new PaymentPlansService(db);

  const plans = await service.listActivePlans();

  assert.deepEqual(plans.map((plan) => plan.id), ["7d", "30d", "90d"]);
  assert.equal(plans[0].amount, 29000);
  assert.equal(plans[1].amount, 129000);
  assert.equal(plans[2].amount, 329000);
});

test("legacy 1m payment plan id is resolved as the approved 30d plan", async () => {
  let queryParams = null;
  const db = {
    async query(sql, params) {
      queryParams = params;
      return {
        rows: [
          { id: "30d", months: 30, duration_unit: "days", amount: 129000, name_vi: "Gói VIP 1 tháng", name_zh: "1个月 VIP" },
        ],
      };
    },
  };
  const service = new PaymentPlansService(db);

  const plan = await service.getPlan("1m");

  assert.deepEqual(queryParams, ["30d"]);
  assert.equal(plan.id, "30d");
  assert.equal(plan.amount, 129000);
  assert.equal(plan.durationUnit, "days");
  assert.equal(plan.months, 30);
});

test("legacy 3m payment plan id is resolved as the approved 90d plan", async () => {
  let queryParams = null;
  const db = {
    async query(sql, params) {
      queryParams = params;
      return {
        rows: [
          { id: "90d", months: 90, duration_unit: "days", amount: 329000, name_vi: "Gói VIP 3 tháng", name_zh: "3个月 VIP" },
        ],
      };
    },
  };
  const service = new PaymentPlansService(db);

  const plan = await service.getPlan("3m");

  assert.deepEqual(queryParams, ["90d"]);
  assert.equal(plan.id, "90d");
  assert.equal(plan.amount, 329000);
  assert.equal(plan.durationUnit, "days");
  assert.equal(plan.months, 90);
});

test(".env.example uses the Node entry port and contains only placeholder SePay variables", () => {
  assert.match(envExample, /^PORT=3000$/m);
  assert.match(envExample, /^ENABLE_DB_SCHEMA_INIT=true$/m);
  assert.match(envExample, /SEPAY_WEBHOOK_API_KEY=your_sepay_webhook_api_key/);
  assert.match(envExample, /SEPAY_BANK_NAME=your_bank_display_name/);
  assert.match(envExample, /SEPAY_BANK_CODE=your_sepay_bank_code/);
  assert.match(envExample, /SEPAY_BANK_ACCOUNT=your_bank_account_number/);
  assert.match(envExample, /SEPAY_BANK_ACCOUNT_NAME=your_bank_account_name/);
  assert.match(envExample, /SEPAY_PAYMENT_PREFIX=HUAMEI/);
  assert.match(envExample, /DATABASE_URL=postgresql:\/\/user:password@host:5432\/database\?sslmode=require/);
  assert.doesNotMatch(envExample, /SEPAY_WEBHOOK_API_KEY=(?!your_sepay_webhook_api_key)\S+/);
});

test("database routes fail as service unavailable when DATABASE_URL is missing", async () => {
  const db = new DatabaseService();

  await assert.rejects(
    () => db.query("SELECT 1"),
    (error) => {
      assert.equal(error.getStatus(), HttpStatus.SERVICE_UNAVAILABLE);
      assert.match(JSON.stringify(error.getResponse()), /DATABASE_URL/);
      return true;
    },
  );
});

test("Railway deploy runs the compiled Nest production server", () => {
  assert.equal(packageJson.scripts.build, "nest build");
  assert.equal(packageJson.scripts.start, "nest start");
  assert.equal(packageJson.scripts["start:prod"], "node dist/main");
  assert.equal(packageJson.engines.node, ">=20 <25");
  assert.equal(railwayJson.build.buildCommand, "npm run build");
  assert.equal(railwayJson.deploy.startCommand, "npm run start:prod");
  assert.equal(railwayJson.deploy.healthcheckPath, "/");
});

test("public HSK lock rules are read fresh so admin lock changes reach clients", async () => {
  let publicSelectCount = 0;
  const db = {
    async query(sql) {
      if (/FROM hsk_lesson_locks\s+WHERE locked_for_free/.test(sql)) {
        publicSelectCount += 1;
        return {
          rows: publicSelectCount === 1
            ? [{ lesson_id: "HSK1-L01", free_item_limit: 6, locked_for_free: false }]
            : [{ lesson_id: "HSK2-L03", free_item_limit: 0, free_word_limit: 2, free_sentence_limit: 1, locked_for_free: true }],
        };
      }
      return {
        rows: [],
      };
    },
  };
  const service = new ContentService(db);

  const first = await service.listPublicHskLocks();
  const second = await service.listPublicHskLocks();

  assert.equal(publicSelectCount, 2);
  assert.equal(first[0].lessonId, "HSK1-L01");
  assert.equal(second[0].lessonId, "HSK2-L03");
  assert.equal(second[0].lockedForFree, true);
});
