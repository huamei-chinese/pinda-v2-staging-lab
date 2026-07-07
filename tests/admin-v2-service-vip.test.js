const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 exposes P3 user support and VIP service view", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "P3：用户 / 客服 / VIP 服务视图",
    "老板验收重点",
    "用户详情卡",
    "客服处理队列",
    "VIP 服务状态",
    "代理归因记录",
    "服务备注",
    "最近学习轨迹",
    "订单与付款状态",
  ]) {
    assert.match(text, new RegExp(required), `P3 view should include ${required}`);
  }
});

test("admin v2 P3 keeps service actions read-only and blocks real mutations", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "只读预览",
    "不写入真实 VIP",
    "不修改用户数据",
    "不触发支付回调",
    "客服备注待接本地实验表",
    "VIP 开通、延期、取消仍需老板确认",
  ]) {
    assert.match(text, new RegExp(required), `P3 risk copy should include ${required}`);
  }

  for (const forbidden of [
    "chargeCustomer",
    "grantVipNow",
    "cancelVipNow",
    "updateProductionUser",
    "paymentWebhookSecret",
    "SEPAY_WEBHOOK_API_KEY=",
  ]) {
    assert.doesNotMatch(text + js, new RegExp(forbidden), `P3 must not expose ${forbidden}`);
  }
});

test("admin v2 P3 has service styling and preview state hooks", () => {
  assert.match(css, /\.service-grid/);
  assert.match(css, /\.customer-profile/);
  assert.match(css, /\.vip-service-board/);
  assert.match(css, /\.readonly-action/);
  assert.match(js, /adminV2ServiceState/);
  assert.match(js, /setServicePreview/);
  assert.match(js, /data-service-preview/);
});
