const test = require('node:test');
const assert = require('node:assert/strict');

test('HSK5 lessons 13-18 content pack exists and each lesson follows the expected shape', async () => {
  const batch = require('../public/lesson-hsk5-batch-13-18.js');

  assert.equal(batch.level, 'HSK5');
  assert.equal(Array.isArray(batch.lessons), true);
  assert.equal(batch.lessons.length, 6);
  assert.deepEqual(batch.lessons.map((lesson) => lesson.id), ["hsk5-l13","hsk5-l14","hsk5-l15","hsk5-l16","hsk5-l17","hsk5-l18"]);

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
