const test = require('node:test');
const assert = require('node:assert/strict');

test('HSK5 lessons 7-12 content pack exists and each lesson follows the expected shape', async () => {
  const batch = require('../public/lesson-hsk5-batch-7-12.js');

  assert.equal(batch.level, 'HSK5');
  assert.equal(Array.isArray(batch.lessons), true);
  assert.equal(batch.lessons.length, 6);
  assert.deepEqual(batch.lessons.map((lesson) => lesson.id), ["hsk5-l7","hsk5-l8","hsk5-l9","hsk5-l10","hsk5-l11","hsk5-l12"]);

  for (const lesson of batch.lessons) {
    assert.equal(typeof lesson.titleZh, 'string');
    assert.equal(typeof lesson.titleVi, 'string');
    assert.equal(Array.isArray(lesson.items), true);
    assert.equal(lesson.items.length, 22);
    assert.ok(lesson.titleZh.length > 0);
    assert.ok(lesson.titleVi.length > 0);
    assert.deepEqual(lesson.items.map((item) => item.stage), ["word","word","word","word","word","word","word","word","word","word","word","word","phrase","phrase","phrase","phrase","phrase","sentence","sentence","sentence","sentence","mixed"]);
  }
});
