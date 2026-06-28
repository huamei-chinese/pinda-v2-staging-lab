const test = require('node:test');
const assert = require('node:assert/strict');

const { getSpeechPlaybackConfig, choosePreferredChineseVoice } = require('../speech-config.js');

test('speech config separates normal and slow playback speed clearly', async () => {
  const normal = getSpeechPlaybackConfig({ slow: false, stage: 'word' });
  const slow = getSpeechPlaybackConfig({ slow: true, stage: 'word' });

  assert.ok(normal.rate >= 0.9);
  assert.ok(slow.rate <= 0.55);
  assert.ok(normal.rate - slow.rate >= 0.35);
  assert.equal(normal.lang, 'zh-CN');
  assert.equal(slow.lang, 'zh-CN');
});

test('speech config keeps sentence speed slower than word speed but faster than slow mode', async () => {
  const word = getSpeechPlaybackConfig({ slow: false, stage: 'word' });
  const phrase = getSpeechPlaybackConfig({ slow: false, stage: 'phrase' });
  const sentence = getSpeechPlaybackConfig({ slow: false, stage: 'sentence' });
  const slow = getSpeechPlaybackConfig({ slow: true, stage: 'sentence' });

  assert.ok(phrase.rate < word.rate);
  assert.ok(phrase.rate > sentence.rate);
  assert.ok(sentence.rate < word.rate);
  assert.ok(sentence.rate > slow.rate);
});

test('preferred Chinese voice prioritizes Mandarin voices', async () => {
  const voices = [
    { name: 'English Voice', lang: 'en-US' },
    { name: 'Microsoft Xiaoxiao Online', lang: 'zh-CN' },
    { name: 'Cantonese Voice', lang: 'zh-HK' },
  ];

  assert.equal(choosePreferredChineseVoice(voices).name, 'Microsoft Xiaoxiao Online');
});

test('preferred Chinese voice avoids Cantonese when a Mandarin voice is available', async () => {
  const voices = [
    { name: 'Sin-ji', lang: 'zh-HK' },
    { name: 'Chrome Mandarin', lang: 'zh-CN' },
    { name: 'Mei-Jia', lang: 'zh-TW' },
  ];

  assert.equal(choosePreferredChineseVoice(voices).name, 'Chrome Mandarin');
});

test('speech config gives slow playback a clearly slower sentence rate', async () => {
  const normalSentence = getSpeechPlaybackConfig({ slow: false, stage: 'sentence' });
  const slowSentence = getSpeechPlaybackConfig({ slow: true, stage: 'sentence' });

  assert.ok(normalSentence.rate - slowSentence.rate >= 0.28);
  assert.ok(slowSentence.rate >= 0.5);
});
