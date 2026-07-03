const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const appSource = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

test("payment modal shows immediate QR generation loading and slow network copy", () => {
  assert.match(appSource, /Đang tạo mã thanh toán/);
  assert.match(appSource, /正在生成付款二维码/);
  assert.match(appSource, /Mạng hơi chậm, vui lòng chờ hoặc thử lại/);
  assert.match(appSource, /网络较慢，请稍等或重试/);
  assert.match(appSource, /transfer-slow-network-message/);
});

test("payment order failure renders a retry button", () => {
  assert.match(appSource, /retryTransferOrderBtn/);
  assert.match(appSource, /data-retry-payment-order/);
  assert.match(appSource, /showTransferInfoModal\(planId\)/);
});

test("upgrade plan click sets loading state and prevents duplicate payment order creation", () => {
  assert.match(appSource, /setUpgradePlanButtonLoading\(/);
  assert.match(appSource, /state\.activePaymentOrderPlanId/);
  assert.match(appSource, /disabled = true/);
  assert.match(appSource, /classList\.add\("loading"\)/);
});

test("payment plans are cached and prefetched without caching private webhook secrets", () => {
  assert.match(appSource, /state\.paymentPlansLoaded/);
  assert.match(appSource, /state\.paymentBankConfigured/);
  assert.match(appSource, /prefetchPaymentPlans\(/);
  assert.doesNotMatch(appSource, /SEPAY_WEBHOOK_API_KEY/);
});
