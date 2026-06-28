const test = require('node:test');
const assert = require('node:assert/strict');

function allLessons() {
  const lesson1 = require('../lesson-hsk2-l1.js');
  const batch = require('../lesson-hsk2-batch-2-5.js');
  return [lesson1, ...batch.lessons];
}

test('lesson 1 marks 的 as a particle instead of a phrase', async () => {
  const lesson1 = require('../lesson-hsk2-l1.js');
  const targetItem = lesson1.items.find((entry) => entry.hanzi === '新的椅子');
  const deWord = targetItem.words.find((word) => word.text === '的');

  assert.equal(deWord.pos, 'particle');
});

test('current HSK2 lessons keep stage progression in contiguous blocks', async () => {
  for (const lesson of allLessons()) {
    const stages = lesson.items.map((item) => item.stage);
    const firstPhrase = stages.indexOf('phrase');
    const firstSentence = stages.indexOf('sentence');
    const firstMixed = stages.indexOf('mixed');

    assert.notEqual(firstPhrase, -1, `${lesson.id} should contain phrase items`);
    assert.notEqual(firstSentence, -1, `${lesson.id} should contain sentence items`);
    assert.notEqual(firstMixed, -1, `${lesson.id} should contain mixed items`);

    assert.equal(stages.slice(0, firstPhrase).every((stage) => stage === 'word'), true, `${lesson.id} should begin with words`);
    assert.equal(stages.slice(firstPhrase, firstSentence).every((stage) => stage === 'phrase'), true, `${lesson.id} should move from words into phrases`);
    assert.equal(stages.slice(firstSentence, firstMixed).every((stage) => stage === 'sentence'), true, `${lesson.id} should move from phrases into sentences`);
    assert.equal(stages.slice(firstMixed).every((stage) => stage === 'mixed'), true, `${lesson.id} should finish with mixed review`);
  }
});
