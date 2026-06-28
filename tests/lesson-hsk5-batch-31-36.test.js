const test = require('node:test');
const assert = require('node:assert/strict');

test('HSK5 lessons 31-36 content pack exists and each lesson follows the expected shape', async () => {
  const batch = require('../public/lesson-hsk5-batch-31-36.js');

  assert.equal(batch.level, 'HSK5');
  assert.equal(Array.isArray(batch.lessons), true);
  assert.equal(batch.lessons.length, 6);
  assert.deepEqual(batch.lessons.map((lesson) => lesson.id), ["hsk5-l31","hsk5-l32","hsk5-l33","hsk5-l34","hsk5-l35","hsk5-l36"]);

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
