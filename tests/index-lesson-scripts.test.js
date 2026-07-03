const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');

const expectedGeneratedLessonScripts = [
  'lesson-hsk3-batch-1-5.js',
  'lesson-hsk3-batch-6-10.js',
  'lesson-hsk3-batch-11-15.js',
  'lesson-hsk3-batch-16-20.js',
  'lesson-hsk4-batch-1-5.js',
  'lesson-hsk4-batch-6-10.js',
  'lesson-hsk4-batch-11-15.js',
  'lesson-hsk4-batch-16-20.js',
  'lesson-hsk5-batch-1-6.js',
  'lesson-hsk5-batch-7-12.js',
  'lesson-hsk5-batch-13-18.js',
  'lesson-hsk5-batch-19-24.js',
  'lesson-hsk5-batch-25-30.js',
  'lesson-hsk5-batch-31-36.js',
  'lesson-hsk345-aligned-early.js',
  'lesson-hsk345-aligned-next.js',
  'lesson-hsk345-aligned-final.js',
  'lesson-hsk-remediated.js',
  'lesson-high-frequency-topics.js',
  'academic-review-agent.js',
  'speech-config.js',
  'sound-effects.js',
  'lesson-new-format-loader.js',
  'lesson-hsk6-l1-word.js',
  'lesson-hsk6-l1-phrase.js',
  'lesson-high-frequency-topics2_19_6_word.js',
  'lesson-high-frequency-topics2_19_6_phrase.js',
];

test('index loads every generated HSK3/4/5 lesson pack before app.js', async () => {
  const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const appScriptMatch = indexHtml.match(/<script src="app\.js(?:\?[^"]*)?"><\/script>/);
  const appScriptIndex = appScriptMatch?.index ?? -1;

  assert.notEqual(appScriptIndex, -1, 'index.html should load app.js');

  for (const scriptName of expectedGeneratedLessonScripts) {
    const scriptTag = `<script src="${scriptName}"></script>`;
    const scriptIndex = indexHtml.indexOf(scriptTag);

    assert.notEqual(scriptIndex, -1, `index.html should load ${scriptName}`);
    assert.ok(scriptIndex < appScriptIndex, `${scriptName} should load before app.js`);
  }
});
