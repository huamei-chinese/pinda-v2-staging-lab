const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { pathToFileURL } = require('node:url');

const root = path.join(__dirname, '..');
const worker = fs.readFileSync(path.join(root, 'netlify/functions/study-reminders-background.mjs'), 'utf8');
const netlifyConfig = fs.readFileSync(path.join(root, 'netlify.toml'), 'utf8');
const reminderNetlifyConfig = fs.readFileSync(path.join(root, 'netlify.reminders.toml'), 'utf8');
const dispatcher = fs.readFileSync(path.join(root, 'src/reminders/reminder-dispatch.service.ts'), 'utf8');
const rulesService = fs.readFileSync(path.join(root, 'src/reminders/reminder-rules.service.ts'), 'utf8');
const rulesController = fs.readFileSync(path.join(root, 'src/reminders/reminder-rules.controller.ts'), 'utf8');
const reportsController = fs.readFileSync(path.join(root, 'src/reminders/reminder-reports.controller.ts'), 'utf8');
const reportsService = fs.readFileSync(path.join(root, 'src/reminders/reminder-reports.service.ts'), 'utf8');
const database = fs.readFileSync(path.join(root, 'src/database/database.service.ts'), 'utf8');
const authController = fs.readFileSync(path.join(root, 'src/auth/auth.controller.ts'), 'utf8');
const authService = fs.readFileSync(path.join(root, 'src/auth/auth.service.ts'), 'utf8');
const legacyApi = fs.readFileSync(path.join(root, 'netlify/functions/api.mjs'), 'utf8');
const envExample = fs.readFileSync(path.join(root, '.env.example'), 'utf8');

test('rule-based study reminders use an authenticated Netlify background function', () => {
  assert.match(worker, /REMINDER_SERVICE_SECRET/);
  assert.match(worker, /timingSafeEqual/);
  assert.match(worker, /req\.method !== "POST"/);
  assert.match(reminderNetlifyConfig, /directory = "netlify\/reminder-functions"/);
  assert.doesNotMatch(reminderNetlifyConfig, /netlify\/functions/);
});

test('background worker validates its Bearer secret and escapes personalized HTML input', async () => {
  const moduleUrl = pathToFileURL(path.join(root, 'netlify/functions/study-reminders-background.mjs'));
  const reminderModule = await import(moduleUrl.href);
  process.env.REMINDER_SERVICE_SECRET = 'test-reminder-secret';
  try {
    assert.equal(reminderModule.__test.authorized(new Request('https://example.test', {
      method: 'POST',
      headers: { Authorization: 'Bearer test-reminder-secret' },
    })), true);
    assert.equal(reminderModule.__test.authorized(new Request('https://example.test', {
      method: 'POST',
      headers: { Authorization: 'Bearer wrong-secret' },
    })), false);
    assert.equal(reminderModule.__test.escapeHtml('<script>"x"</script>'), '&lt;script&gt;&quot;x&quot;&lt;/script&gt;');
    assert.equal(reminderModule.__test.vietnamDate(new Date('2026-07-20T18:00:00.000Z')), '2026-07-21');
    assert.match(reminderModule.__test.encodeHeaderWord('Nhắc học'), /^=\?UTF-8\?B\?.+\?=$/);
    assert.equal(reminderModule.__test.isFatalSmtpError(new Error('SMTP failed (535): bad credentials')), true);
    assert.equal(reminderModule.__test.isFatalSmtpError(new Error('SMTP failed (550): invalid recipient')), false);
    assert.equal(
      reminderModule.__test.normalizeDispatchId('123e4567-e89b-42d3-a456-426614174000'),
      '123e4567-e89b-42d3-a456-426614174000',
    );
    assert.throws(() => reminderModule.__test.normalizeDispatchId('not-a-uuid'), /dispatchId/);
    assert.deepEqual(reminderModule.__test.normalizeRules({
      autoEnabled: true,
      inactiveDays: 3,
      lowStudyMinutes: 5,
      lowStudyWindowDays: 7,
      cooldownDays: 3,
      maxEmailsPerMonth: 3,
      vipExpiryDays: 7,
      maxEmailsPerRun: 50,
    }), {
      autoEnabled: true,
      inactiveDays: 3,
      lowStudyMinutes: 5,
      lowStudyWindowDays: 7,
      cooldownDays: 3,
      maxEmailsPerMonth: 3,
      vipExpiryDays: 7,
      maxEmailsPerRun: 50,
      updatedAt: null,
    });
  } finally {
    delete process.env.REMINDER_SERVICE_SECRET;
  }
});

test('study reminder worker reuses Gmail SMTP sessions without a fixed 500-user ceiling', () => {
  assert.match(worker, /smtp\.gmail\.com/);
  assert.match(worker, /AUTH LOGIN/);
  assert.match(worker, /claimBatch\(dispatchId, reminderDate, rules\.maxEmailsPerRun\)/);
  assert.match(worker, /LIMIT \$8/);
  assert.doesNotMatch(worker, /LIMIT 500/);
  assert.doesNotMatch(worker, /RESEND_API_KEY|api\.resend\.com/);
});

test('reminder eligibility applies all admin rules before enqueueing users', () => {
  assert.match(worker, /u\.study_reminder_enabled = TRUE/);
  assert.match(worker, /last_learning_activity/);
  assert.match(worker, /NOW\(\) - \(\$2 \* INTERVAL '1 day'\)/);
  assert.match(worker, /recent_study/);
  assert.match(worker, /study_seconds, 0\) < \(\$4 \* 60\)/);
  assert.match(worker, /premium_until <= NOW\(\) \+ \(\$5 \* INTERVAL '1 day'\)/);
  assert.match(worker, /cooldown\.sent_at >= NOW\(\) - \(\$6 \* INTERVAL '1 day'\)/);
  assert.match(worker, /monthly\.status = 'sent'/);
  assert.match(worker, /\) < \$7/);
  assert.match(worker, /trigger_reason, rules_snapshot/);
  assert.match(worker, /FROM study_reminder_rules/);
  assert.match(worker, /applying current database rules/);
});

test('rule-based study reminders have a dedicated user preference', () => {
  assert.match(database, /study_reminder_enabled BOOLEAN NOT NULL DEFAULT TRUE/);
  assert.match(database, /study_reminder_last_sent_on DATE/);
  assert.match(authController, /users\/:id\/study-reminder-settings/);
  assert.match(authService, /SET study_reminder_enabled = \$1/);
  assert.match(legacyApi, /study-reminder-settings/);
  assert.match(legacyApi, /SET study_reminder_enabled = \$1/);
});

test('admin reminder rules default to the screenshot values and are persisted through a protected API', () => {
  assert.match(database, /CREATE TABLE IF NOT EXISTS study_reminder_rules/);
  assert.match(database, /auto_enabled BOOLEAN NOT NULL DEFAULT FALSE/);
  assert.match(database, /inactive_days INTEGER NOT NULL DEFAULT 3/);
  assert.match(database, /low_study_minutes INTEGER NOT NULL DEFAULT 5/);
  assert.match(database, /low_study_window_days INTEGER NOT NULL DEFAULT 7/);
  assert.match(database, /cooldown_days INTEGER NOT NULL DEFAULT 3/);
  assert.match(database, /max_emails_per_month INTEGER NOT NULL DEFAULT 3/);
  assert.match(database, /vip_expiry_days INTEGER NOT NULL DEFAULT 7/);
  assert.match(database, /max_emails_per_run INTEGER NOT NULL DEFAULT 50/);
  assert.match(rulesController, /@Controller\('api\/admin\/reminder-rules'\)/);
  assert.match(rulesController, /@Get\(\)/);
  assert.match(rulesController, /@Put\(\)/);
  assert.match(rulesService, /role = 'admin'/);
});

test('study reminder delivery is claimed safely and persisted per Gmail SMTP message', () => {
  assert.match(database, /CREATE TABLE IF NOT EXISTS study_reminder_deliveries/);
  assert.match(database, /UNIQUE \(user_id, reminder_date\)/);
  assert.match(worker, /FOR UPDATE OF d SKIP LOCKED/);
  assert.match(worker, /Message-ID:/);
  assert.match(worker, /markDeliverySent/);
  assert.match(worker, /study_reminder_last_sent_on = \$2::date/);
});

test('each dispatch persists a completion report exposed by protected Server 1 APIs', () => {
  assert.match(database, /CREATE TABLE IF NOT EXISTS study_reminder_runs/);
  assert.match(database, /status IN \('queued', 'processing', 'completed', 'failed', 'skipped'\)/);
  assert.match(database, /enqueued_count INTEGER/);
  assert.match(database, /sent_count INTEGER/);
  assert.match(database, /failed_count INTEGER/);
  assert.match(worker, /completeDispatchRun\(dispatchId, report\)/);
  assert.match(worker, /failDispatchRun\(dispatchId, error\)/);
  assert.match(reportsController, /@Controller\('api\/admin\/reminder-reports'\)/);
  assert.match(reportsController, /@Get\(':dispatchId'\)/);
  assert.match(reportsService, /SELECT \* FROM study_reminder_runs WHERE id = \$1/);
  assert.match(reportsService, /role = 'admin'/);
});

test('Server 2 bootstraps the reminder schema before processing the request', () => {
  assert.match(worker, /async function ensureReminderSchema\(initialRules\)/);
  assert.match(worker, /pg_advisory_lock/);
  assert.match(worker, /ALTER TABLE users[\s\S]*study_reminder_enabled/);
  assert.match(worker, /CREATE TABLE IF NOT EXISTS study_reminder_rules/);
  assert.match(worker, /CREATE TABLE IF NOT EXISTS study_reminder_runs/);
  assert.match(worker, /CREATE TABLE IF NOT EXISTS study_reminder_deliveries/);
  assert.match(worker, /ON CONFLICT \(id\) DO NOTHING/);
  assert.match(worker, /await ensureReminderSchema\(requestedRules\)/);
  assert.match(worker, /Base tables users and learning_events must exist/);
});

test('main server triggers Netlify at 07:00 Vietnam time only when explicitly enabled', () => {
  assert.match(dispatcher, /DEFAULT_DISPATCH_HOUR_VIETNAM = 7/);
  assert.match(dispatcher, /REMINDER_DISPATCH_ENABLED === 'true'/);
  assert.match(dispatcher, /rulesService\.getCurrentRules\(\)/);
  assert.match(dispatcher, /if \(!rules\.autoEnabled\)/);
  assert.match(dispatcher, /randomUUID\(\)/);
  assert.match(dispatcher, /JSON\.stringify\(\{ dispatchId, reason, requestedAt, rules \}\)/);
  assert.match(dispatcher, /Authorization: `Bearer \$\{process\.env\.REMINDER_SERVICE_SECRET\}`/);
  assert.match(envExample, /REMINDER_SERVICE_URL=/);
  assert.match(envExample, /REMINDER_SERVICE_SECRET=/);
});
