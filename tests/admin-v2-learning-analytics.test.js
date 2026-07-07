const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");

test("admin v2 exposes P4 learning analytics acceptance surface", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "P4：学习数据与事件分析",
    "老板验收重点",
    "学习事件口径",
    "模块学习漏斗",
    "热门课程排行",
    "VIP 弹窗与锁课触发",
    "每日听力学习",
    "拼打/写字练习",
    "HSK 学习",
    "高频汉语练习",
  ]) {
    assert.match(text, new RegExp(required), `P4 learning analytics should include ${required}`);
  }
});

test("admin v2 P4 defines event names and safe data boundaries", () => {
  const text = html.replace(/\s+/g, " ");

  for (const required of [
    "lesson_opened",
    "question_answered",
    "paywall_shown",
    "vip_modal_opened",
    "listening_audio_played",
    "writing_practice_submitted",
    "只读学习事件规划",
    "不读取正式用户学习数据",
    "不写入正式埋点表",
    "后续只允许接入本地实验表",
  ]) {
    assert.match(text, new RegExp(required), `P4 boundary should include ${required}`);
  }

  for (const forbidden of [
    "sendProductionAnalytics",
    "writeLearningEventNow",
    "connectRealUserEvents",
    "analyticsWriteKey",
    "DATABASE_URL=",
  ]) {
    assert.doesNotMatch(text + js, new RegExp(forbidden), `P4 must not expose ${forbidden}`);
  }
});

test("admin v2 P4 has analytics styling and preview hooks", () => {
  assert.match(css, /\.learning-analytics-board/);
  assert.match(css, /\.analytics-tabs/);
  assert.match(css, /\.analytics-card/);
  assert.match(css, /\.funnel-list/);
  assert.match(js, /adminV2AnalyticsState/);
  assert.match(js, /setAnalyticsPreview/);
  assert.match(js, /data-analytics-preview/);
});
