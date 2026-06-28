const test = require('node:test');
const assert = require('node:assert/strict');

const files = [
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
];

function allLessons() {
  return files.flatMap((file) => require('../public/' + file).lessons);
}

test('generated HSK3/4/5 packs cover every approved lesson count', async () => {
  const grouped = {};
  for (const lesson of allLessons()) {
    const level = lesson.id.startsWith('hsk3') ? 'HSK3' : lesson.id.startsWith('hsk4') ? 'HSK4' : 'HSK5';
    grouped[level] = grouped[level] || [];
    grouped[level].push(lesson);
  }

  assert.deepEqual(
    Object.fromEntries(Object.entries(grouped).map(([level, lessons]) => [level, lessons.length])),
    {"HSK3":20,"HSK4":20,"HSK5":36},
  );
});

test('generated HSK3/4/5 content only uses supported beginner teaching labels', async () => {
  for (const lesson of allLessons()) {
    for (const item of lesson.items) {
      for (const word of item.words) {
        assert.ok(["noun","verb","adj","adv","prep","particle"].includes(word.pos), `${lesson.id} has unsupported pos: ${word.pos}`);
      }
    }
  }
});
