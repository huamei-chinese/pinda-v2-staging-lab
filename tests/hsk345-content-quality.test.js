const test = require('node:test');
const assert = require('node:assert/strict');

const files = [
  'lesson-hsk3-batch-1-5.js',
  'lesson-hsk3-batch-6-10.js',
  'lesson-hsk3-batch-11-15.js',
  'lesson-hsk3-batch-16-20.js',
  'lesson-hsk4-batch-1-5.js',
  'lesson-hsk4-batch-6-10.js',
  'lesson-hsk4-batch-11-15.js',
  'lesson-hsk4-batch-16-20.js',
  'lesson-hsk5-batch-1-6.js',
  'lesson-hsk5-batch-7-12.js',
  'lesson-hsk5-batch-13-18.js',
  'lesson-hsk5-batch-19-24.js',
  'lesson-hsk5-batch-25-30.js',
  'lesson-hsk5-batch-31-36.js',
  'lesson-hsk345-aligned-early.js',
  'lesson-hsk345-aligned-next.js',
  'lesson-hsk345-aligned-final.js',
  'lesson-hsk-remediated.js',
];

function lessonsFrom(file) {
  const pack = require('../' + file);
  if (pack.lessons) return pack.lessons;
  return Object.values(pack.levels).flat();
}

function allItems() {
  return files.flatMap((file) => lessonsFrom(file).flatMap((lesson) => lesson.items.map((item) => ({ file, lesson, item }))));
}

test('HSK content does not contain mechanical function-word combinations', async () => {
  const forbidden = [/因为的/, /的的/, /因为.+因为/];
  for (const { file, lesson, item } of allItems()) {
    for (const pattern of forbidden) {
      assert.equal(pattern.test(item.hanzi), false, `${file} ${lesson.id} has bad item: ${item.hanzi}`);
    }
  }
});

test('HSK content does not show formula-like Vietnamese prompts to learners', async () => {
  for (const { file, lesson, item } of allItems()) {
    assert.equal(item.vi.includes(' + '), false, `${file} ${lesson.id} has formula prompt: ${item.vi}`);
  }
});

test('HSK4 and HSK5 override content does not expose mechanical prototype phrase pairs', async () => {
  const forbiddenPairs = [
    '方式文化',
    '文化结果',
    '方式和文化',
    '文化和结果',
    '纸上谈兵判断',
    '观点判断',
    '观点和判断',
    '调查传统',
    '调查和传统',
    '养花文化',
    '养花和文化',
    '文化调查',
    '文化和调查',
    '传统保护',
    '传统和保护',
    '抽象艺术艺术',
  ];
  const overrideFiles = ['lesson-hsk345-aligned-final.js'];
  for (const file of overrideFiles) {
    for (const lesson of lessonsFrom(file)) {
      if (!lesson.id.startsWith('hsk4') && !lesson.id.startsWith('hsk5')) continue;
      for (const item of lesson.items) {
        for (const pair of forbiddenPairs) {
          assert.equal(item.hanzi.includes(pair), false, `${file} ${lesson.id} has mechanical content: ${item.hanzi}`);
        }
      }
    }
  }
});

test('HSK4 and HSK5 final overrides are not copied from generated prototype packs', async () => {
  for (const lesson of lessonsFrom('lesson-hsk345-aligned-final.js')) {
    if (!lesson.id.startsWith('hsk4') && !lesson.id.startsWith('hsk5')) continue;
    assert.equal(
      lesson.items.every((item) => !item.source.includes('generated prototype')),
      true,
      `${lesson.id} should be refined content, not prototype content`,
    );
  }
});

test('HSK5 generated lessons do not drill HSK2-only function words as standalone words', async () => {
  for (const { file, lesson, item } of allItems()) {
    if (!lesson.id.startsWith('hsk5')) continue;
    if (item.stage !== 'word') continue;
    assert.notEqual(item.hanzi, '的', `${file} ${lesson.id} should not drill 的 as a standalone HSK5 word`);
    assert.notEqual(item.hanzi, '因为', `${file} ${lesson.id} should not drill 因为 as a standalone HSK5 word`);
  }
});

test('remediated HSK lessons do not contain placeholder teaching chains', async () => {
  const forbidden = [
    /了解我们/,
    /认真需要/,
    /认真属于/,
    /我们应该很忙/,
    /我们应该老舍先生/,
    /我们应该容易出汗/,
    /因为的的/,
    /X 是本课重点/,
    /本课重点/,
    /学习内容需要方法/,
    /我们需要理解重点/,
  ];
  for (const { file, lesson, item } of allItems()) {
    if (file !== 'lesson-hsk-remediated.js') continue;
    for (const pattern of forbidden) {
      assert.equal(pattern.test(item.hanzi), false, `${file} ${lesson.id} has placeholder chain: ${item.hanzi}`);
      assert.equal(pattern.test(item.vi), false, `${file} ${lesson.id} has placeholder Vietnamese: ${item.vi}`);
    }
  }
});
