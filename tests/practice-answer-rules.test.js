const test = require('node:test');
const assert = require('node:assert/strict');

const { matchContiguousAnswer, normalizePracticeWords } = require('../practice-answer-rules.js');

test('normalizes pronoun plus 的 into one possessive pronoun slot', async () => {
  const words = normalizePracticeWords([
    { text: '你', pinyin: 'ni', tone: 'nǐ', pos: 'pron', vi: 'bạn' },
    { text: '的', pinyin: 'de', tone: 'de', pos: 'particle', vi: 'của' },
    { text: '微信', pinyin: 'weixin', tone: 'wēixìn', pos: 'noun', vi: 'WeChat' },
  ]);

  assert.deepEqual(
    words.map((word) => [word.text, word.pos]),
    [
      ['你的', 'possessive-pron'],
      ['微信', 'noun'],
    ],
  );
});

test('matches a multi-slot pinyin answer from the active underline', async () => {
  const words = [
    { text: '这个', pinyin: 'zhe ge' },
    { text: '岗位', pinyin: 'gang wei' },
    { text: '需要', pinyin: 'xu yao' },
  ];

  assert.deepEqual(
    matchContiguousAnswer('zhegegangwei', words, 0, 'zhe ge gang wei xu yao', '这个岗位需要'),
    { kind: 'partial', start: 0, count: 2 },
  );
});

test('matches full pinyin answer from any active underline', async () => {
  const words = [
    { text: '这个', pinyin: 'zhe ge' },
    { text: '岗位', pinyin: 'gang wei' },
    { text: '需要', pinyin: 'xu yao' },
  ];

  assert.deepEqual(
    matchContiguousAnswer('zhegegangweixuyao', words, 1, 'zhe ge gang wei xu yao', '这个岗位需要'),
    { kind: 'full', start: 0, count: 3 },
  );
});

test('does not complete a future underline when the active underline is different', async () => {
  const words = [
    { text: '这个', pinyin: 'zhe ge' },
    { text: '岗位', pinyin: 'gang wei' },
    { text: '需要', pinyin: 'xu yao' },
    { text: '经验', pinyin: 'jing yan' },
  ];

  assert.deepEqual(
    matchContiguousAnswer('gangweixuyao', words, 0, 'zhe ge gang wei xu yao jing yan', '这个岗位需要经验'),
    { kind: 'none', count: 0 },
  );
});

test('accepts pinyin prefix inside one underline slot without completing it', async () => {
  const words = [
    { text: '我', pinyin: 'wo' },
    { text: '来自越南', pinyin: 'lai zi yue nan' },
    { text: '很高兴', pinyin: 'hen gao xing' },
  ];

  assert.deepEqual(
    matchContiguousAnswer('lai zi', words, 0, 'wo lai zi yue nan hen gao xing', '我来自越南很高兴'),
    { kind: 'none', count: 0 },
  );

  assert.deepEqual(
    matchContiguousAnswer('lai zi', words, 1, 'wo lai zi yue nan hen gao xing', '我来自越南很高兴'),
    { kind: 'progress', start: 1, inputLength: 5, totalLength: 11 },
  );
});

test('completes the active underline only after the whole underline pinyin is typed', async () => {
  const words = [
    { text: '我', pinyin: 'wo' },
    { text: '来自越南', pinyin: 'lai zi yue nan' },
    { text: '很高兴', pinyin: 'hen gao xing' },
  ];

  assert.deepEqual(
    matchContiguousAnswer('laiziyuenan', words, 1, 'wo lai zi yue nan hen gao xing', '我来自越南很高兴'),
    { kind: 'partial', start: 1, count: 1 },
  );
});

test('completes multiple consecutive underlines when they are fully typed from the active underline', async () => {
  const words = [
    { text: '我', pinyin: 'wo' },
    { text: '来自越南', pinyin: 'lai zi yue nan' },
    { text: '很高兴', pinyin: 'hen gao xing' },
  ];

  assert.deepEqual(
    matchContiguousAnswer('wolaiziyuenan', words, 0, 'wo lai zi yue nan hen gao xing', '我来自越南很高兴'),
    { kind: 'partial', start: 0, count: 2 },
  );
});
