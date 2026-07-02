const test = require('node:test');
const assert = require('node:assert/strict');

const { getTonePattern } = require('../sound-effects.js');

test('keyboard tone feels mechanical and stays very short', async () => {
  const pattern = getTonePattern('key');

  assert.equal(pattern.waveform, 'square');
  assert.ok(pattern.duration <= 0.045);
  assert.ok(pattern.volume <= 0.02);
  assert.ok(pattern.frequencies[0] >= 1100);
});

test('correct and error tones are clearly different feedback patterns', async () => {
  const correct = getTonePattern('correct');
  const error = getTonePattern('error');

  assert.ok(correct.frequencies.length >= 2);
  assert.ok(error.frequencies.length >= 2);
  assert.ok(Math.min(...correct.frequencies) > Math.max(...error.frequencies));
  assert.ok(correct.volume > error.volume);
});

test('success tone is the richest completion sound', async () => {
  const success = getTonePattern('success');
  const correct = getTonePattern('correct');

  assert.ok(success.frequencies.length > correct.frequencies.length);
  assert.ok(success.duration >= correct.duration);
});
