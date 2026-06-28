const test = require('node:test');
const assert = require('node:assert/strict');

const pack = require('../lesson-high-frequency-topics.js');

function normalizeLatin(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

test('high-frequency Chinese pack contains the approved 12-topic structure', async () => {
  assert.equal(pack.topics.length, 12);

  for (const topic of pack.topics) {
    const counts = topic.items.reduce((acc, item) => {
      acc[item.stage] = (acc[item.stage] || 0) + 1;
      return acc;
    }, {});

    assert.equal(counts.word, 10, `${topic.id} should keep 10 words`);
    assert.equal(counts.phrase, 30, `${topic.id} should keep 30 phrases`);
    assert.equal(counts.sentence, 4, `${topic.id} should keep 4 sentences`);
    assert.equal(topic.items.length, 44, `${topic.id} should contain 44 training items`);
  }
});

test('high-frequency Chinese items are trainable by pinyin dictation', async () => {
  for (const topic of pack.topics) {
    for (const item of topic.items) {
      assert.ok(item.hanzi, `${topic.id} has an item missing Chinese text`);
      assert.ok(item.vi, `${topic.id} ${item.hanzi} has missing Vietnamese prompt`);
      assert.ok(normalizeLatin(item.pinyin), `${topic.id} ${item.hanzi} has missing pinyin`);
      assert.ok(Array.isArray(item.words) && item.words.length >= 1, `${topic.id} ${item.hanzi} has no word breakdown`);
      for (const word of item.words) {
        assert.ok(word.text, `${topic.id} ${item.hanzi} has word without text`);
        assert.ok(normalizeLatin(word.pinyin), `${topic.id} ${item.hanzi} has word without pinyin`);
        assert.ok(word.tone, `${topic.id} ${item.hanzi} has word without tone pinyin`);
        assert.ok(word.vi, `${topic.id} ${item.hanzi} has word without Vietnamese meaning`);
      }
    }
  }
});

test('high-frequency Chinese source content is not replaced by old sample themes', async () => {
  const topicIds = pack.topics.map((topic) => topic.id);

  assert.deepEqual(topicIds, [
    'greeting_introduction',
    'job_interview',
    'classroom_learning',
    'travel',
    'ordering_shopping',
    'transportation',
    'renting_life',
    'sick_leave',
    'office_life',
    'factory_workshop',
    'ecommerce_workplace',
    'close_relationships',
  ]);
});

test('high-frequency phrases and sentences are split into multiple answer slots', async () => {
  for (const topic of pack.topics) {
    for (const item of topic.items) {
      if (item.stage === 'phrase') {
        assert.ok(item.words.length > 1, `${topic.id} phrase should be split into answer slots: ${item.hanzi}`);
      }
      if (item.stage === 'sentence') {
        assert.ok(item.words.length > 1, `${topic.id} sentence should be split into answer slots: ${item.hanzi}`);
      }
    }
  }
});

test('high-frequency segmentation keeps job-interview words intact', async () => {
  const job = pack.topics.find((topic) => topic.id === 'job_interview');
  const applyPosition = job.items.find((item) => item.hanzi === '申请岗位');
  const positionRequirement = job.items.find((item) => item.hanzi === '岗位要求');

  assert.deepEqual(
    applyPosition.words.map((word) => [word.text, word.pos]),
    [
      ['申请', 'verb'],
      ['岗位', 'noun'],
    ],
  );
  assert.deepEqual(
    positionRequirement.words.map((word) => [word.text, word.pos]),
    [
      ['岗位', 'noun'],
      ['要求', 'noun'],
    ],
  );
});

test('high-frequency segmentation does not leak known bad single-character fragments', async () => {
  const badFragments = new Set(['申', '需', '求']);

  for (const topic of pack.topics) {
    for (const item of topic.items) {
      for (const word of item.words) {
        assert.equal(
          badFragments.has(word.text),
          false,
          `${topic.id} ${item.hanzi} should not contain bad fragment ${word.text}`,
        );
      }
    }
  }
});

test('high-frequency core action words keep beginner-friendly verb labels', async () => {
  const expectedVerbs = [
    ['transportation', '出发'],
    ['transportation', '到达'],
    ['transportation', '打车'],
    ['renting_life', '租房'],
    ['renting_life', '搬家'],
    ['sick_leave', '发烧'],
    ['sick_leave', '请假'],
    ['office_life', '上班'],
    ['office_life', '下班'],
    ['factory_workshop', '检查'],
    ['ecommerce_workplace', '管理店铺', '管理'],
  ];

  for (const [topicId, hanzi, wordText = hanzi] of expectedVerbs) {
    const topic = pack.topics.find((item) => item.id === topicId);
    const item = topic.items.find((entry) => entry.hanzi === hanzi);
    const word = item.words.find((entry) => entry.text === wordText);

    assert.equal(
      word?.pos,
      'verb',
      `${topicId} ${hanzi} should label ${wordText} as verb`,
    );
  }
});

test('high-frequency grammar labels distinguish pronouns, possessive pronouns, and phrases', async () => {
  const greeting = pack.topics.find((topic) => topic.id === 'greeting_introduction');
  const introSentence = greeting.items.find((item) => item.hanzi === '我来自越南，很高兴认识你。');
  const myName = greeting.items.find((item) => item.hanzi === '我的名字');
  const addWechat = greeting.items.find((item) => item.hanzi === '可以加你的微信吗？');

  assert.deepEqual(
    introSentence.words.map((word) => [word.text, word.pos]),
    [
      ['我', 'pron'],
      ['来自越南', 'phrase'],
      ['很高兴', 'adj'],
      ['认识你', 'phrase'],
    ],
  );
  assert.deepEqual(
    myName.words.map((word) => [word.text, word.pos]),
    [
      ['我的', 'possessive-pron'],
      ['名字', 'noun'],
    ],
  );
  assert.ok(
    addWechat.words.some((word) => word.text === '你的' && word.pos === 'possessive-pron'),
    '可以加你的微信吗？ should keep 你的 as a possessive pronoun',
  );
  assert.ok(
    addWechat.words.some((word) => word.text === '加' && word.pos === 'verb'),
    '可以加你的微信吗？ should label 加 as verb',
  );
});
