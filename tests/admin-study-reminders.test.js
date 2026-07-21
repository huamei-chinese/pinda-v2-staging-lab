const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");

const app = fs.readFileSync("public/app.js", "utf8");
const styles = fs.readFileSync("public/styles.css", "utf8");
const moduleSource = fs.readFileSync("src/admin/admin.module.ts", "utf8");
const controller = fs.readFileSync("src/admin/admin-study-reminders.controller.ts", "utf8");
const service = fs.readFileSync("src/admin/study-reminder.service.ts", "utf8");
const schedule = fs.readFileSync("netlify/functions/daily-reminders.mjs", "utf8");

test("admin-only reminder box is directly below lesson lock navigation", () => {
  const contentButton = app.indexOf('id="adminContentTabBtn"');
  const reminderButton = app.indexOf('id="adminStudyRemindersTabBtn"');
  assert.ok(contentButton >= 0 && reminderButton > contentButton);
  assert.match(app, /normalized === "admin"\) return \[[^\]]*"content", "reminders"/);
  assert.doesNotMatch(app, /normalized === "staff"\) return \[[^\]]*"reminders"/);
  assert.match(app, /adminTab === "reminders" \? renderAdminStudyRemindersPanelHTML/);
});

test("reminder UI keeps an isolated namespace and exposes phased controls", () => {
  assert.match(styles, /\.admin-main--reminders \.admin-users-panel/);
  assert.match(styles, /\.admin-study-reminders-panel/);
  assert.match(app, /Phát hiện/);
  assert.match(app, /Phân nhóm/);
  assert.match(app, /Đo quay lại/);
  assert.match(app, /data-admin-reminder-preview/);
  assert.match(app, /data-admin-reminder-send/);
  assert.match(app, /data-admin-reminder-save/);
});

test("backend isolates reminder routes and protects all operations as admin", () => {
  assert.match(controller, /@Controller\('api\/admin\/study-reminders'\)/);
  assert.match(controller, /@Get\('overview'\)/);
  assert.match(controller, /@Put\('settings'\)/);
  assert.match(controller, /@Post\('send\/:userId'\)/);
  assert.match(controller, /@Post\('run'\)/);
  assert.match(service, /private async assertAdmin/);
  assert.match(service, /String\(requester\.role \|\| ''\)\.toLowerCase\(\) !== 'admin'/);
  assert.match(moduleSource, /AdminStudyRemindersController/);
  assert.match(moduleSource, /StudyReminderService/);
});

test("smart sending respects active VIP opt-out cooldown monthly limit and return tracking", () => {
  assert.match(service, /user\.is_premium = TRUE/);
  assert.match(service, /user\.premium_until IS NULL OR user\.premium_until > NOW\(\)/);
  assert.match(service, /row\.daily_reminder_enabled === false/);
  assert.match(service, /settings\.cooldownDays/);
  assert.match(service, /settings\.monthlyLimit/);
  assert.match(service, /SET returned_at/);
  assert.match(service, /automatic_enabled BOOLEAN NOT NULL DEFAULT FALSE/);
});

test("scheduled sender is opt-in and uses the same limits and log", () => {
  assert.match(schedule, /if \(!settings\?\.automatic_enabled\)/);
  assert.match(schedule, /users\.is_premium=TRUE/);
  assert.match(schedule, /users\.daily_reminder_enabled=TRUE/);
  assert.match(schedule, /settings\.cooldown_days/);
  assert.match(schedule, /settings\.monthly_limit/);
  assert.match(schedule, /INSERT INTO study_reminder_logs/);
});
