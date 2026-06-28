const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const appSource = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');

test('completed practice items show a manual continue prompt', () => {
  assert.match(appSource, /continuePrompt:\s*"Nhấn Enter hoặc Space để sang câu tiếp theo"/);
  assert.match(appSource, /continuePrompt:\s*"按 Enter \/ 空格继续"/);
  assert.match(appSource, /state\.complete \? t\("continuePrompt"\) : ""/);
});

test('finishItem does not auto-advance to the next question', () => {
  const finishItemBody = appSource.match(/function finishItem\(options = \{\}\) \{[\s\S]*?\n\}/)?.[0] || '';

  assert.ok(finishItemBody, 'finishItem should exist');
  assert.doesNotMatch(finishItemBody, /nextItem\(/);
});
