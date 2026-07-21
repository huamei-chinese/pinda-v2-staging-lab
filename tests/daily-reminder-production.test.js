const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { pathToFileURL } = require('node:url');

const root = path.join(__dirname, '..');
const worker = fs.readFileSync(path.join(root, 'netlify/functions/daily-reminders-background.mjs'), 'utf8');
const netlifyConfig = fs.readFileSync(path.join(root, 'netlify.toml'), 'utf8');
const reminderNetlifyConfig = fs.readFileSync(path.join(root, 'netlify.reminders.toml'), 'utf8');
const dispatcher = fs.readFileSync(path.join(root, 'src/reminders/reminder-dispatch.service.ts'), 'utf8');
const database = fs.readFileSync(path.join(root, 'src/database/database.service.ts'), 'utf8');
const envExample = fs.readFileSync(path.join(root, '.env.example'), 'utf8');

test('daily reminders use an authenticated Netlify background function', () => {
  assert.match(worker, /REMINDER_SERVICE_SECRET/);
  assert.match(worker, /timingSafeEqual/);
  assert.match(worker, /req\.method !== "POST"/);
  assert.doesNotMatch(netlifyConfig, /\[functions\."daily-reminders"\][\s\S]*schedule/);
  assert.match(reminderNetlifyConfig, /directory = "netlify\/reminder-functions"/);
  assert.doesNotMatch(reminderNetlifyConfig, /netlify\/functions/);
});

test('background worker validates its Bearer secret and escapes personalized HTML input', async () => {
  const moduleUrl = pathToFileURL(path.join(root, 'netlify/functions/daily-reminders-background.mjs'));
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
  } finally {
    delete process.env.REMINDER_SERVICE_SECRET;
  }
});

test('daily reminder worker reuses Gmail SMTP sessions without a fixed 500-user ceiling', () => {
  assert.match(worker, /smtp\.gmail\.com/);
  assert.match(worker, /AUTH LOGIN/);
  assert.match(worker, /const BATCH_SIZE = 50/);
  assert.match(worker, /while \(!abort\)/);
  assert.doesNotMatch(worker, /LIMIT 500/);
  assert.doesNotMatch(worker, /RESEND_API_KEY|api\.resend\.com/);
});

test('daily reminder delivery is claimed safely and persisted per Gmail SMTP message', () => {
  assert.match(database, /CREATE TABLE IF NOT EXISTS daily_reminder_deliveries/);
  assert.match(database, /UNIQUE \(user_id, reminder_date\)/);
  assert.match(worker, /FOR UPDATE OF d SKIP LOCKED/);
  assert.match(worker, /Message-ID:/);
  assert.match(worker, /markDeliverySent/);
  assert.match(worker, /daily_reminder_last_sent_on = \$2::date/);
});

test('main server triggers Netlify at 07:00 Vietnam time only when explicitly enabled', () => {
  assert.match(dispatcher, /DEFAULT_DISPATCH_HOUR_VIETNAM = 7/);
  assert.match(dispatcher, /REMINDER_DISPATCH_ENABLED === 'true'/);
  assert.match(dispatcher, /Authorization: `Bearer \$\{process\.env\.REMINDER_SERVICE_SECRET\}`/);
  assert.match(envExample, /REMINDER_SERVICE_URL=/);
  assert.match(envExample, /REMINDER_SERVICE_SECRET=/);
});
