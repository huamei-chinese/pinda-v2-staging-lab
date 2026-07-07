const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const srcDir = path.join(root, "src");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");
const localData = JSON.parse(fs.readFileSync(path.join(publicDir, "admin-v2-local-data.json"), "utf8"));
const controller = fs.readFileSync(
  path.join(srcDir, "admin-v2-local-preview", "admin-v2-local-preview.controller.ts"),
  "utf8",
);

test("battle B exposes a learning data closed-loop workspace", () => {
  for (const required of [
    "战役 B：学习数据闭环",
    "学习记录",
    "做题数",
    "错题数",
    "最近学习",
    "学习事件",
    "记录 lesson_opened",
    "记录 question_answered",
    "记录 wrong_answer",
    "data-learning-user-filter",
    "data-learning-records-body",
    "data-learning-events-body",
    "data-learning-action",
  ]) {
    assert.match(html, new RegExp(required), `Battle B UI should include ${required}`);
  }

  assert.match(css, /\.learning-command-center/);
  assert.match(css, /\.learning-kpi-grid/);
  assert.match(css, /\.learning-event-panel/);
});

test("battle B frontend calls only the local experimental learning event API", () => {
  for (const required of [
    "learningEventUrl",
    "/api/admin-v2/learning-event",
    "renderLearningRecords",
    "renderLearningEvents",
    "performLearningAction",
    "lesson_opened",
    "question_answered",
    "wrong_answer",
    "listening_audio_played",
  ]) {
    assert.match(js, new RegExp(required), `Battle B JS should include ${required}`);
  }

  assert.doesNotMatch(js, /fetch\(["']\/api\/analytics/);
  assert.doesNotMatch(js, /fetch\(["']\/api\/admin\/users/);
  assert.doesNotMatch(js, /analyticsWriteKey/);
});

test("battle B backend learning endpoint writes only local experiment data", () => {
  assert.match(controller, /@Post\("learning-event"\)/);
  assert.match(controller, /learning-event/);
  assert.match(controller, /fs\.writeFileSync/);
  assert.match(controller, /lesson_opened/);
  assert.match(controller, /question_answered/);
  assert.match(controller, /wrong_answer/);
  assert.match(controller, /listening_audio_played/);
  assert.match(controller, /local-json-only/);

  for (const forbidden of [
    "AnalyticsService",
    "sendProductionAnalytics",
    "analyticsWriteKey",
    "DATABASE_URL",
    "INSERT INTO learning_events",
    "UPDATE users",
  ]) {
    assert.doesNotMatch(controller, new RegExp(forbidden), `Battle B endpoint must not use ${forbidden}`);
  }
});

test("battle B local data has learning records summary and events", () => {
  assert.ok(localData.learningSummary);
  assert.ok(Array.isArray(localData.learningRecords));
  assert.ok(localData.learningRecords.length >= 5);
  assert.ok(Array.isArray(localData.learningEvents));
  assert.ok(localData.learningEvents.length >= 4);

  for (const record of localData.learningRecords) {
    for (const field of [
      "userId",
      "userEmail",
      "name",
      "module",
      "lesson",
      "questionsAnswered",
      "wrongAnswers",
      "accuracy",
      "lastStudiedAt",
      "recentLearning",
    ]) {
      assert.ok(Object.hasOwn(record, field), `learning record ${record.userEmail} should include ${field}`);
    }
  }
});
