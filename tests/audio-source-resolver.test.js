const test = require('node:test');
const assert = require('node:assert/strict');

const {
  resolveAudioSource,
  expandAudioPathCandidates,
  registerNewFormatLessonContent,
} = require('../public/lesson-new-format-loader.js');

test('audio resolver prioritizes future normal audio field before legacy shapes', async () => {
  const item = {
    audio_normal_path: 'audio/Daily/Time/Word/time_001_normal.mp3',
    normal_audio: 'audio/legacy-normal.mp3',
    audio: {
      normal: 'audio/nested-normal.mp3',
      slow: 'audio/nested-slow.mp3',
    },
  };

  assert.equal(resolveAudioSource(item, 'normal'), 'audio/Daily/Time/Word/time_001_normal.mp3');
});

test('audio resolver supports slow audio fields across future, nested, and legacy formats', async () => {
  assert.equal(resolveAudioSource({
    audio_slow_path: 'audio/Daily/Time/Word/time_001_slow_0.75.mp3',
    slow_audio: 'audio/legacy-slow.mp3',
  }, 'slow'), 'audio/Daily/Time/Word/time_001_slow_0.75.mp3');

  assert.equal(resolveAudioSource({
    audio: { slow: 'audio/nested-slow.mp3' },
  }, 'slow'), 'audio/nested-slow.mp3');

  assert.equal(resolveAudioSource({
    audioSlow: 'audio/audioSlow-legacy.mp3',
  }, 'slow'), 'audio/audioSlow-legacy.mp3');
});

test('audio path candidate expansion tolerates Daily, word, and legacy world path variants', async () => {
  const candidates = expandAudioPathCandidates('audio/daily/time/word/time_001_normal.mp3');

  assert.equal(candidates[0], 'audio/daily/time/word/time_001_normal.mp3');
  assert.ok(candidates.includes('audio/Daily/time/Word/time_001_normal.mp3'));
  assert.ok(candidates.includes('audio/Daily/time/world/time_001_normal.mp3'));
});

test('new format loader preserves future audio path fields in generated lesson items', async () => {
  const root = {};
  const lesson = registerNewFormatLessonContent.call(root, {
    id: 'hsk2-l1',
    level: 'HSK2',
    type: 'word',
    items: [{
      id: 'hsk2-l1-word-001',
      hanzi: '时间',
      pinyin: 'shijian',
      vietnamese: 'thời gian',
      audio_normal_path: 'audio/HSK/HSK2/HSK2-L1/Word/word_001_normal.mp3',
      audio_slow_path: 'audio/HSK/HSK2/HSK2-L1/Word/word_001_slow_0.75.mp3',
    }],
  }, { level: 'HSK2', lessonId: 'hsk2-l1', contentType: 'word' });

  assert.equal(lesson.items[0].audio_normal_path, 'audio/HSK/HSK2/HSK2-L1/Word/word_001_normal.mp3');
  assert.equal(lesson.items[0].audio_slow_path, 'audio/HSK/HSK2/HSK2-L1/Word/word_001_slow_0.75.mp3');
  assert.equal(lesson.items[0].audio.normal, 'audio/HSK/HSK2/HSK2-L1/Word/word_001_normal.mp3');
  assert.equal(lesson.items[0].audio.slow, 'audio/HSK/HSK2/HSK2-L1/Word/word_001_slow_0.75.mp3');
});
