const test = require('node:test');
const assert = require('node:assert/strict');

test('HSK4 lower-half lesson titles stay aligned with the standard course contents', async () => {
  const batch11 = require('../lesson-hsk4-batch-11-15.js');
  const batch16 = require('../lesson-hsk4-batch-16-20.js');
  const titles = [...batch11.lessons, ...batch16.lessons].map((lesson) => lesson.titleZh);

  assert.deepEqual(titles, [
    '读书好，读好书，好读书',
    '用心发现世界',
    '喝着茶看京剧',
    '保护地球母亲',
    '教育孩子的艺术',
    '生活可以更美好',
    '人与自然',
    '科技与世界',
    '生活的味道',
    '路上的风景',
  ]);
});
