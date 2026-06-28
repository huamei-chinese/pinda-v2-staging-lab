const test = require('node:test');
const assert = require('node:assert/strict');

test('HSK5 lower-half title details stay aligned with the standard course contents', async () => {
  const batch25 = require('../lesson-hsk5-batch-25-30.js');
  const batch31 = require('../lesson-hsk5-batch-31-36.js');
  const titles = [...batch25.lessons, ...batch31.lessons].map((lesson) => lesson.titleZh);

  assert.deepEqual(titles, [
    '给自己加满水',
    '你属于哪一种“忙”',
    '下棋',
    '最受欢迎的毕业生',
    '培养对手',
    '竞争让市场更高效',
    '登门槛效应',
    '身边的环保',
    '以堵治堵—缓解交通有妙招',
    '鸟儿的护肤术',
    '植物会出汗',
    '老舍与养花',
  ]);
});
