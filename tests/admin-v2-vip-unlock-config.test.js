const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 exposes P5 VIP and course unlock configuration surface", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "P5：VIP 与课程解锁配置",
    "老板验收重点",
    "试看规则矩阵",
    "解锁范围矩阵",
    "审批闸口",
    "fallback / rollback",
    "HSK1-HSK4 前 3 课",
    "高频汉语前 3 个主题",
    "每日听力：对话",
    "每日听力：独白/短文",
    "拼打/写字",
  ]) {
    assert.match(text, new RegExp(required), `P5 unlock config should include ${required}`);
  }
});

test("admin v2 P5 keeps VIP pricing and unlock writes disabled", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "只读配置预览",
    "不改 VIP 定价",
    "不写入真实解锁规则",
    "不修改用户 VIP 状态",
    "不触发支付",
    "发布需要老板确认",
    "Git push 需要老板确认",
    "后续只允许接入本地实验配置表",
  ]) {
    assert.match(text, new RegExp(required), `P5 risk boundary should include ${required}`);
  }

  for (const forbidden of [
    "setVipPriceNow",
    "writeUnlockRulesNow",
    "grantVipNow",
    "callPaymentProvider",
    "process.env.DATABASE_URL",
    "SEPAY_WEBHOOK_API_KEY=",
  ]) {
    assert.doesNotMatch(text + js, new RegExp(forbidden), `P5 must not expose ${forbidden}`);
  }
});

test("admin v2 P5 has unlock configuration styling and preview hooks", () => {
  assert.match(css, /\.unlock-config-board/);
  assert.match(css, /\.unlock-tabs/);
  assert.match(css, /\.unlock-card/);
  assert.match(css, /\.approval-gate-list/);
  assert.match(js, /adminV2UnlockState/);
  assert.match(js, /setUnlockPreview/);
  assert.match(js, /data-unlock-preview/);
});
