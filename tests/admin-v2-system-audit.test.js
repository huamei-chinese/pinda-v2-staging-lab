const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 exposes P8 system settings and audit log surface", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "P8：系统设置与审计日志",
    "老板验收重点",
    "系统设置总览",
    "审计日志",
    "发布闸口",
    "错误 hook 提醒",
    "环境边界",
    "操作人",
    "操作时间",
    "操作类型",
    "风险等级",
    "结果",
  ]) {
    assert.match(text, new RegExp(required), `P8 system surface should include ${required}`);
  }

  assert.match(html, /data-admin-v2-panel="system"/);
  assert.match(html, /data-system-preview="settings"/);
  assert.match(html, /data-system-preview="audit"/);
  assert.match(html, /data-system-preview="release"/);
  assert.match(html, /data-system-preview="hooks"/);
});

test("admin v2 P8 keeps production release env and high-risk writes blocked", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "不连接正式数据库",
    "不部署正式站",
    "不修改 .env",
    "Git push 需要老板确认",
    "发布需要老板确认",
    "支付/VIP/数据库变更需要老板确认",
    "出错立即记录防错误 hook 提醒",
    "只读系统预览",
  ]) {
    assert.match(text, new RegExp(required), `P8 risk boundary should include ${required}`);
  }

  for (const forbidden of [
    "deployProductionNow",
    "pushMainNow",
    "writeEnvNow",
    "runMigrationNow",
    "unlockVipNow",
    "updatePaymentNow",
    "DATABASE_URL=",
  ]) {
    assert.doesNotMatch(text + js, new RegExp(forbidden), `P8 must not expose ${forbidden}`);
  }
});

test("admin v2 P8 has system styling and preview hooks", () => {
  assert.match(css, /\.system-control-board/);
  assert.match(css, /\.system-tabs/);
  assert.match(css, /\.system-card/);
  assert.match(css, /\.audit-log-table/);
  assert.match(css, /\.hook-reminder-note/);
  assert.match(js, /adminV2SystemState/);
  assert.match(js, /setSystemPreview/);
  assert.match(js, /data-system-preview/);
});
