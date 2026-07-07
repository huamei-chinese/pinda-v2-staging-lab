const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 exposes P7 agent and commission preview surface", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "P7：代理与佣金",
    "老板验收重点",
    "代理总览",
    "推广链接与来源",
    "我的客户",
    "VIP 客户",
    "佣金概览",
    "团队范围",
    "S-leader 团队",
    "代理账号只看自己的数据",
    "时间范围",
    "昨天",
    "本周",
    "本月",
    "自定义日期",
    "结算周期",
    "统计口径时间戳",
  ]) {
    assert.match(text, new RegExp(required), `P7 agent console should include ${required}`);
  }

  assert.match(html, /data-admin-v2-tab="agents"/);
  assert.match(html, /data-menu-key="agents"/);
  assert.match(html, /data-commission-range="yesterday"/);
  assert.match(html, /data-commission-range="thisWeek"/);
  assert.match(html, /data-commission-range="thisMonth"/);
  assert.match(html, /data-commission-range="custom"/);
});

test("admin v2 P7 keeps commission export settlement and payment disabled", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "只读佣金预览",
    "不导出佣金",
    "不结算佣金",
    "不触发付款",
    "不读取正式订单",
    "不修改代理归属",
    "佣金导出需要老板确认",
    "佣金结算需要老板确认",
    "后续只允许接入本地实验佣金表",
    "时间筛选只改变预览口径",
  ]) {
    assert.match(text, new RegExp(required), `P7 risk boundary should include ${required}`);
  }

  for (const forbidden of [
    "exportCommissionNow",
    "settleCommissionNow",
    "payAgentNow",
    "connectProductionOrders",
    "writeAgentAttributionNow",
    "SEPAY_WEBHOOK_API_KEY=",
  ]) {
    assert.doesNotMatch(text + js, new RegExp(forbidden), `P7 must not expose ${forbidden}`);
  }
});

test("admin v2 P7 has agent commission styling and preview hooks", () => {
  assert.match(css, /\.agent-console-board/);
  assert.match(css, /\.agent-tabs/);
  assert.match(css, /\.agent-card/);
  assert.match(css, /\.commission-range-filter/);
  assert.match(css, /\.commission-risk-note/);
  assert.match(js, /adminV2AgentState/);
  assert.match(js, /adminV2CommissionRangeState/);
  assert.match(js, /setAgentPreview/);
  assert.match(js, /setCommissionRange/);
  assert.match(js, /data-agent-preview/);
  assert.match(js, /data-commission-range/);
});
