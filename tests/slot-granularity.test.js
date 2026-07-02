const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

function loadLessonPacks() {
  return fs
    .readdirSync(path.join(__dirname, '..'))
    .filter((file) => /^lesson-.*\.js$/.test(file))
    .map((file) => ({ file, pack: require(path.join('..', file)) }));
}

test('all training answer slots stay short enough for step-by-step pinyin input', async () => {
  const longSlots = [];

  for (const { file, pack } of loadLessonPacks()) {
    const groups = pack.topics || pack.lessons || [];
    for (const group of groups) {
      for (const item of group.items || []) {
        for (const word of item.words || []) {
          const length = [...word.text].length;
          if (length > 6) {
            longSlots.push(`${file} ${group.id || group.title} ${item.hanzi} => ${word.text}`);
          }
        }
      }
    }
  }

  assert.deepEqual(longSlots, []);
});

test('high-frequency phrase and sentence slots avoid whole-phrase underline answers', async () => {
  const pack = require('../lesson-high-frequency-topics.js');
  const longSlots = [];

  for (const topic of pack.topics) {
    for (const item of topic.items) {
      if (item.stage === 'word') continue;
      for (const word of item.words) {
        if ([...word.text].length > 5) {
          longSlots.push(`${topic.id} ${item.hanzi} => ${word.text}`);
        }
      }
    }
  }

  assert.deepEqual(longSlots, []);
});
