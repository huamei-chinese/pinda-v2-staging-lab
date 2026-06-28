const test = require('node:test');
const assert = require('node:assert/strict');

test('HSK4 lessons 16-20 content pack exists and each lesson follows the expected shape', async () => {
  const batch = require('../public/lesson-hsk4-batch-16-20.js');

  assert.equal(batch.level, 'HSK4');
  assert.equal(Array.isArray(batch.lessons), true);
  assert.equal(batch.lessons.length, 5);
  assert.deepEqual(batch.lessons.map((lesson) => lesson.id), ["hsk4-l16","hsk4-l17","hsk4-l18","hsk4-l19","hsk4-l20"]);

  for (const lesson of batch.lessons) {
    assert.equal(typeof lesson.titleZh, 'string');
    assert.equal(typeof lesson.titleVi, 'string');
    assert.equal(Array.isArray(lesson.items), true);
    assert.equal(lesson.items.length, 20);
    assert.ok(lesson.titleZh.length > 0);
    assert.ok(lesson.titleVi.length > 0);
    assert.deepEqual(lesson.items.map((item) => item.stage), ["word","word","word","word","word","word","word","word","word","word","phrase","phrase","phrase","phrase","phrase","sentence","sentence","sentence","sentence","mixed"]);
  }
});
