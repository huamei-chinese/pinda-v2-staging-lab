const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

require("ts-node/register/transpile-only");

const { DEFAULT_PAYMENT_PLANS } = require("../src/payment/payment-plans");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const envExample = fs.readFileSync(path.join(__dirname, "..", ".env.example"), "utf8");

test("MVP payment plans keep the approved 7d, 30d, and 90d prices", () => {
  const sevenDay = DEFAULT_PAYMENT_PLANS.find((plan) => plan.id === "7d");
  const thirtyDay = DEFAULT_PAYMENT_PLANS.find((plan) => plan.id === "30d");
  const ninetyDay = DEFAULT_PAYMENT_PLANS.find((plan) => plan.id === "90d");

  assert.equal(sevenDay.amount, 29000);
  assert.equal(sevenDay.durationUnit, "days");
  assert.equal(sevenDay.months, 7);
  assert.equal(thirtyDay.amount, 129000);
  assert.equal(thirtyDay.durationUnit, "days");
  assert.equal(thirtyDay.months, 30);
  assert.equal(ninetyDay.amount, 329000);
  assert.equal(ninetyDay.durationUnit, "days");
  assert.equal(ninetyDay.months, 90);
});

test("admin manual VIP upgrade requires an explicit confirmation before PATCH", () => {
  assert.match(appSource, /function confirmAdminVipUpgrade\(/);
  assert.match(appSource, /if \(!confirmAdminVipUpgrade\(userId, durationDays\)\) return;/);
  assert.match(appSource, /existing VIP/i);
});

test("admin user search resets pagination and refresh can request fresh backend data", () => {
  assert.match(appSource, /id="adminUserSearchInput"/);
  assert.match(appSource, /id="adminRefreshBtn"/);
  assert.match(appSource, /state\.adminUserSearch = event\.target\.value;/);
  assert.match(appSource, /state\.adminUserPage = 1;/);
  assert.match(appSource, /if \(adminUserSearchTimer\) clearTimeout\(adminUserSearchTimer\);/);
  assert.match(appSource, /adminUserSearchTimer = setTimeout\(\(\) => \{\s*loadAdminUsers\(\);\s*\}, 350\);/s);
  assert.match(appSource, /event\.target\.closest\("#adminLoadUsersBtn"\) \|\| event\.target\.closest\("#adminRefreshBtn"\)/);
  assert.match(appSource, /if \(adminLoadUsersBtn\) \{\s*loadAdminUsers\(\);/s);
});

test("payment modal handles bank configuration and status refresh messaging", () => {
  assert.match(appSource, /function getPaymentOrderErrorMessage\(/);
  assert.match(appSource, /bankConfigured/);
  assert.match(appSource, /transfer-status-success/);
  assert.match(appSource, /refreshCurrentUserStatus\(true\)/);
  assert.match(appSource, /function refreshVisibleVipAccessState\(\)/);
  assert.match(appSource, /if \(state\.screen === "course"\) renderCourse\(\)/);
  assert.match(appSource, /else if \(state\.screen === "listening"\) renderListening\(\{ silentCatalogLoad: true \}\)/);
  assert.match(appSource, /refreshVisibleVipAccessState\(\)/);
  assert.doesNotMatch(appSource, /Could not refresh current user status; locking VIP access/);
});

test("environment template documents SePay webhook and bank variables without real values", () => {
  assert.match(envExample, /SEPAY_WEBHOOK_API_KEY=your_sepay_webhook_api_key/);
  assert.match(envExample, /SEPAY_BANK_NAME=your_bank_display_name/);
  assert.match(envExample, /SEPAY_BANK_CODE=your_sepay_bank_code/);
  assert.match(envExample, /SEPAY_BANK_ACCOUNT=your_bank_account_number/);
  assert.match(envExample, /SEPAY_BANK_ACCOUNT_NAME=your_bank_account_name/);
});
