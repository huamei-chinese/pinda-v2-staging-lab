const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 exposes P6 content and material workflow surface", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "P6：内容与素材流程",
    "老板验收重点",
    "素材包验收",
    "每日听力素材",
    "拼打/写字内容池",
    "审核发布流程",
    "fallback / rollback",
    "对话素材",
    "独白/短文素材",
    "音频状态",
    "上传状态",
    "审核状态",
  ]) {
    assert.match(text, new RegExp(required), `P6 material flow should include ${required}`);
  }
});

test("admin v2 P6 blocks polluted or incomplete content operations", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "缺素材就阻断",
    "不替代内容",
    "不从旧污染目录复制",
    "不调用 Noiz",
    "不写正式内容数据",
    "不发布到正式站",
    "素材上传待接本地实验表",
    "老板确认后才允许发布",
  ]) {
    assert.match(text, new RegExp(required), `P6 guardrail should include ${required}`);
  }

  for (const forbidden of [
    "copyFromOldPollutedLab",
    "runNoizNow",
    "publishToProductionNow",
    "writeProductionContent",
    "legacyDDriveImport",
    "SEPAY_WEBHOOK_API_KEY=",
  ]) {
    assert.doesNotMatch(text + js, new RegExp(forbidden), `P6 must not expose ${forbidden}`);
  }
});

test("admin v2 P6 has content workflow styling and preview hooks", () => {
  assert.match(css, /\.content-flow-board/);
  assert.match(css, /\.content-tabs/);
  assert.match(css, /\.content-card/);
  assert.match(css, /\.material-checklist/);
  assert.match(js, /adminV2ContentState/);
  assert.match(js, /setContentPreview/);
  assert.match(js, /data-content-preview/);
});
