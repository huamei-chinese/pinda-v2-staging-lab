const test = require('node:test');
const assert = require('node:assert/strict');

test('teacher preview stays hidden in Vietnamese learner mode before the answer is complete', async () => {
  const { shouldShowTeacherPreview } = require('../practice-rules.js');

  assert.equal(
    shouldShowTeacherPreview({ lang: 'vi', complete: false }),
    false,
  );
});

test('teacher preview also stays hidden in Chinese mode before completion', async () => {
  const { shouldShowTeacherPreview } = require('../practice-rules.js');

  assert.equal(
    shouldShowTeacherPreview({ lang: 'zh', complete: false }),
    false,
  );
});

test('teacher preview becomes visible after completion in learner mode', async () => {
  const { shouldShowTeacherPreview } = require('../practice-rules.js');

  assert.equal(
    shouldShowTeacherPreview({ lang: 'vi', complete: true }),
    true,
  );
});

test('slot helper stays hidden before completion in dictation mode', async () => {
  const { shouldShowSlotMeta } = require('../practice-rules.js');

  assert.equal(
    shouldShowSlotMeta({ mode: 'dictation', complete: false, solved: [false] }, 0),
    false,
  );
});

test('slot helper stays hidden before a slot is solved in translate mode', async () => {
  const { shouldShowSlotMeta } = require('../practice-rules.js');

  assert.equal(
    shouldShowSlotMeta({ mode: 'translate', complete: false, solved: [false] }, 0),
    false,
  );
});

test('slot helper becomes visible only for solved slots before completion', async () => {
  const { shouldShowSlotMeta } = require('../practice-rules.js');

  assert.equal(
    shouldShowSlotMeta({ mode: 'translate', complete: false, solved: [true, false] }, 0),
    true,
  );
  assert.equal(
    shouldShowSlotMeta({ mode: 'translate', complete: false, solved: [true, false] }, 1),
    false,
  );
});

test('slot helper becomes visible after completion in dictation mode', async () => {
  const { shouldShowSlotMeta } = require('../practice-rules.js');

  assert.equal(
    shouldShowSlotMeta({ mode: 'dictation', complete: true, solved: [false] }, 0),
    true,
  );
});

test('memory details stay hidden before completion', async () => {
  const { shouldShowMemoryDetails } = require('../practice-rules.js');

  assert.equal(
    shouldShowMemoryDetails({ complete: false }),
    false,
  );
});

test('memory details become visible after completion', async () => {
  const { shouldShowMemoryDetails } = require('../practice-rules.js');

  assert.equal(
    shouldShowMemoryDetails({ complete: true }),
    true,
  );
});

test('dictation mode still renders the active input before completion', async () => {
  const { shouldRenderAnswerInput } = require('../practice-rules.js');

  assert.equal(
    shouldRenderAnswerInput({
      activeWord: 0,
      complete: false,
    }, 0),
    true,
  );
});

test('only the active slot renders the input before completion', async () => {
  const { shouldRenderAnswerInput } = require('../practice-rules.js');

  assert.equal(
    shouldRenderAnswerInput({
      activeWord: 1,
      complete: false,
    }, 0),
    false,
  );
  assert.equal(
    shouldRenderAnswerInput({
      activeWord: 1,
      complete: false,
    }, 1),
    true,
  );
});
