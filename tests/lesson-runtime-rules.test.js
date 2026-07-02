const test = require('node:test');
const assert = require('node:assert/strict');

test('maps beginner-supported parts of speech directly for display', async () => {
  const { getTeachingPosLabelKey } = require('../lesson-runtime-rules.js');

  assert.equal(getTeachingPosLabelKey('noun'), 'noun');
  assert.equal(getTeachingPosLabelKey('verb'), 'verb');
  assert.equal(getTeachingPosLabelKey('adj'), 'adj');
  assert.equal(getTeachingPosLabelKey('adv'), 'adv');
  assert.equal(getTeachingPosLabelKey('prep'), 'prep');
  assert.equal(getTeachingPosLabelKey('particle'), 'particle');
  assert.equal(getTeachingPosLabelKey('pron'), 'pron');
  assert.equal(getTeachingPosLabelKey('possessive-pron'), 'possessive-pron');
  assert.equal(getTeachingPosLabelKey('phrase'), 'phrase');
});

test('hides unsupported deep grammar labels instead of displaying misleading labels', async () => {
  const { getTeachingPosLabelKey } = require('../lesson-runtime-rules.js');

  assert.equal(getTeachingPosLabelKey('grammar'), '');
  assert.equal(getTeachingPosLabelKey('num'), '');
  assert.equal(getTeachingPosLabelKey('measure'), '');
});

test('uses compact prompt sizing for long Vietnamese prompts', async () => {
  const { getPromptSizeVariant } = require('../lesson-runtime-rules.js');

  assert.equal(getPromptSizeVariant('du lịch'), 'normal');
  assert.equal(getPromptSizeVariant('những chiếc ghế mới'), 'compact');
  assert.equal(getPromptSizeVariant('Công việc này là do anh ấy giới thiệu cho tôi.'), 'tiny');
});

test('uses middle prompt sizing for Vietnamese sentences before the tiny threshold', async () => {
  const { getPromptSizeVariant } = require('../lesson-runtime-rules.js');

  assert.equal(getPromptSizeVariant('Tôi rất vui được làm quen với bạn.'), 'small');
});
