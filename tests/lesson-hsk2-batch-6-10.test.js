const test = require('node:test');
const assert = require('node:assert/strict');

test('HSK2 lessons 6-10 content pack exists and each lesson follows the expected shape', async () => {
  const batch = require('../lesson-hsk2-batch-6-10.js');

  assert.equal(batch.level, 'HSK2');
  assert.equal(Array.isArray(batch.lessons), true);
  assert.equal(batch.lessons.length, 5);

  const ids = batch.lessons.map((lesson) => lesson.id);
  assert.deepEqual(ids, ['hsk2-l6', 'hsk2-l7', 'hsk2-l8', 'hsk2-l9', 'hsk2-l10']);

  for (const lesson of batch.lessons) {
    assert.equal(typeof lesson.titleZh, 'string');
    assert.equal(typeof lesson.titleVi, 'string');
    assert.equal(Array.isArray(lesson.items), true);
    assert.equal(lesson.items.length, 20);
    assert.ok(lesson.titleZh.length > 0);
    assert.ok(lesson.titleVi.length > 0);
    assert.ok(!lesson.titleZh.includes('锟?'));
    assert.ok(!lesson.titleVi.includes('锟?'));

    const stages = lesson.items.map((item) => item.stage);
    assert.deepEqual(
      stages,
      [
        'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word',
        'phrase', 'phrase', 'phrase', 'phrase',
        'sentence', 'sentence', 'sentence', 'sentence',
        'mixed', 'mixed',
      ],
    );
  }
});
