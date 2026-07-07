const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 exposes P9 PR sync and production readiness surface", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "P9：PR / 同步 / 生产准备",
    "老板验收重点",
    "GitHub 同步准备",
    "阿辉 UI 设计",
    "阿杰功能开发",
    "老板验收",
    "PR 清单",
    "生产前检查",
    "差异确认",
    "冲突风险",
    "回滚计划",
  ]) {
    assert.match(text, new RegExp(required), `P9 readiness surface should include ${required}`);
  }

  assert.match(html, /data-admin-v2-tab="sync"/);
  assert.match(html, /data-menu-key="sync"/);
  assert.match(html, /data-sync-preview="github"/);
  assert.match(html, /data-sync-preview="team"/);
  assert.match(html, /data-sync-preview="pr"/);
  assert.match(html, /data-sync-preview="production"/);
});

test("admin v2 P9 keeps PR push deploy and production actions blocked", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "不 push",
    "不部署",
    "不合并 main",
    "不改正式站",
    "不改支付/VIP/数据库",
    "创建 PR 需要老板确认",
    "与阿辉、阿杰同步后再进入生产",
    "只读同步准备",
  ]) {
    assert.match(text, new RegExp(required), `P9 risk boundary should include ${required}`);
  }

  for (const forbidden of [
    "pushMainNow",
    "mergeMainNow",
    "deployProductionNow",
    "createPrNow",
    "touchHoctrungNow",
    "updateVipNow",
    "updatePaymentNow",
    "runMigrationNow",
  ]) {
    assert.doesNotMatch(text + js, new RegExp(forbidden), `P9 must not expose ${forbidden}`);
  }
});

test("admin v2 P9 has sync readiness styling and preview hooks", () => {
  assert.match(css, /\.sync-readiness-board/);
  assert.match(css, /\.sync-tabs/);
  assert.match(css, /\.sync-card/);
  assert.match(css, /\.handoff-checklist/);
  assert.match(css, /\.production-readiness-note/);
  assert.match(js, /adminV2SyncState/);
  assert.match(js, /setSyncPreview/);
  assert.match(js, /data-sync-preview/);
});
