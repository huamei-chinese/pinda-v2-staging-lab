const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");

const app = fs.readFileSync("public/app.js", "utf8");
const styles = fs.readFileSync("public/styles.css", "utf8");
const moduleSource = fs.readFileSync("src/admin/admin.module.ts", "utf8");
const controller = fs.readFileSync("src/admin/admin-study-reminders.controller.ts", "utf8");
const service = fs.readFileSync("src/admin/study-reminder.service.ts", "utf8");
const netlifyConfig = fs.readFileSync("netlify.toml", "utf8");

test("admin-only reminder tab stays directly below content management", () => {
  const contentButton = app.indexOf('id="adminContentTabBtn"');
  const reminderButton = app.indexOf('id="adminStudyRemindersTabBtn"');
  assert.ok(contentButton >= 0 && reminderButton > contentButton);
  assert.match(app, /normalized === "admin"\) return \[[^\]]*"content", "reminders"/);
  assert.doesNotMatch(app, /normalized === "staff"\) return \[[^\]]*"reminders"/);
});

test("admin reminder UI manages rules reports and explicit manual dispatch", () => {
  assert.match(styles, /\.admin-study-reminders-panel/);
  assert.match(app, /api\/admin\/reminder-rules/);
  assert.match(app, /api\/admin\/reminder-reports\?limit=20/);
  assert.match(app, /data-admin-reminder-report/);
  assert.match(app, /data-admin-reminder-save/);
  assert.match(app, /data-admin-reminder-dispatch/);
  assert.match(app, /api\/admin\/reminder-dispatches/);
  assert.match(app, /Danh sách email trong lượt gửi/);
  assert.match(app, /selected\?\.deliveries/);
  assert.match(app, /Bắt đầu một lượt gửi email nhắc học theo các quy tắc hiện tại/);
  assert.match(app, /async function saveAdminStudyReminderSettings\(\) \{[\s\S]*?const body = \{[\s\S]*?body: JSON\.stringify\(body\)/);
  const activeRenderer = app.slice(app.lastIndexOf("function renderAdminStudyRemindersPanelHTML"), app.indexOf("function renderAdmin()"));
  assert.doesNotMatch(activeRenderer, /data-admin-reminder-run|data-admin-reminder-preview|adminReminderSendTime/);
});

test("backend exposes the exact rule and report API contract with admin protection", () => {
  assert.match(controller, /@Controller\('api\/admin'\)/);
  assert.match(controller, /@Get\('reminder-rules'\)/);
  assert.match(controller, /@Put\('reminder-rules'\)/);
  assert.match(controller, /@Get\('reminder-reports'\)/);
  assert.match(controller, /@Get\('reminder-reports\/:dispatchId'\)/);
  assert.match(controller, /@Post\('reminder-dispatches'\)/);
  assert.match(controller, /@HttpCode\(HttpStatus\.ACCEPTED\)/);
  assert.match(service, /private async assertAdmin/);
  assert.match(service, /String\(requester\.role \|\| ''\)\.toLowerCase\(\) !== 'admin'/);
  assert.match(moduleSource, /AdminStudyRemindersController/);
  assert.match(service, /lowStudyWindowDays/);
  assert.match(service, /maxEmailsPerRun/);
  assert.match(service, /FROM study_reminder_rules WHERE id = 1/);
  assert.match(service, /FROM study_reminder_runs ORDER BY/);
  assert.match(service, /SELECT \* FROM study_reminder_runs WHERE id::text = \$1/);
  assert.match(service, /FROM study_reminder_deliveries/);
  assert.match(service, /deliveries: deliveries\.rows\.map/);
  assert.doesNotMatch(service, /FROM study_reminder_reports/);
  assert.doesNotMatch(service, /FROM study_reminder_settings/);
});

test("only the authenticated Server 1 manual route triggers the background worker", () => {
  assert.match(service, /async dispatchNow/);
  assert.match(service, /servermail222\.netlify\.app\/\.netlify\/functions\/study-reminders-background/);
  assert.match(service, /process\.env\.REMINDER_SERVICE_SECRET/);
  assert.match(service, /Authorization: `Bearer \$\{secret\}`/);
  assert.match(service, /'X-HuaMei-Trigger': 'scheduled-rule-check'/);
  assert.match(service, /response\.status !== HttpStatus\.ACCEPTED/);
  assert.match(service, /workerStatus: response\.status/);
  assert.match(service, /Reminder worker accepted dispatch/);
  assert.match(service, /SET auto_enabled=TRUE/);
  assert.doesNotMatch(netlifyConfig, /\[functions\."daily-reminders"\]/);
  assert.equal(fs.existsSync("netlify/functions/daily-reminders.mjs"), false);
  assert.doesNotMatch(service, /sendStudyReminderEmail|sendOne|runBatch/);
});
