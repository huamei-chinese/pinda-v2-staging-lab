const test = require('node:test');
const assert = require('node:assert/strict');

test('HSK2 lesson 1 content pack exists and follows the expected shape', async () => {
  const lessonPack = require('../lesson-hsk2-l1.js');

  assert.equal(lessonPack.id, 'hsk2-l1');
  assert.equal(lessonPack.no, 1);
  assert.equal(lessonPack.titleZh, '九月去北京旅游最好');
  assert.equal(lessonPack.titleVi, 'Tháng chín là thời điểm đẹp nhất để du lịch Bắc Kinh');

  assert.equal(Array.isArray(lessonPack.items), true);
  assert.equal(lessonPack.items.length, 20);

  const seenStages = lessonPack.items.map((item) => item.stage);
  assert.deepEqual(
    seenStages,
    [
      'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word', 'word',
      'phrase', 'phrase', 'phrase', 'phrase',
      'sentence', 'sentence', 'sentence', 'sentence',
      'mixed', 'mixed',
    ],
  );

  for (const item of lessonPack.items) {
    assert.equal(typeof item.vi, 'string');
    assert.equal(typeof item.hanzi, 'string');
    assert.equal(Array.isArray(item.words), true);
    assert.ok(item.vi.length > 0);
    assert.ok(item.hanzi.length > 0);
    assert.ok(item.words.length > 0);
    assert.ok(!item.vi.includes('�'));
    assert.ok(!item.hanzi.includes('�'));
    for (const word of item.words) {
      assert.equal(typeof word.text, 'string');
      assert.equal(typeof word.pinyin, 'string');
      assert.equal(typeof word.tone, 'string');
      assert.equal(typeof word.pos, 'string');
      assert.equal(typeof word.vi, 'string');
      assert.ok(word.text.length > 0);
      assert.ok(word.pinyin.length > 0);
      assert.ok(word.vi.length > 0);
    }
  }
});
