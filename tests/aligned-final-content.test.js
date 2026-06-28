const test = require('node:test');
const assert = require('node:assert/strict');

const aligned = require('../lesson-hsk345-aligned-final.js');

const expected = {
  HSK3: { ids: ['hsk3-l11', 'hsk3-l12', 'hsk3-l13', 'hsk3-l14', 'hsk3-l15', 'hsk3-l16', 'hsk3-l17', 'hsk3-l18', 'hsk3-l19', 'hsk3-l20'], stages: [10, 4, 4, 2] },
  HSK4: { ids: ['hsk4-l11', 'hsk4-l12', 'hsk4-l13', 'hsk4-l14', 'hsk4-l15', 'hsk4-l16', 'hsk4-l17', 'hsk4-l18', 'hsk4-l19', 'hsk4-l20'], stages: [10, 5, 4, 1] },
  HSK5: { ids: ['hsk5-l13', 'hsk5-l14', 'hsk5-l15', 'hsk5-l16', 'hsk5-l17', 'hsk5-l18', 'hsk5-l19', 'hsk5-l20', 'hsk5-l21', 'hsk5-l22', 'hsk5-l23', 'hsk5-l24', 'hsk5-l25', 'hsk5-l26', 'hsk5-l27', 'hsk5-l28', 'hsk5-l29', 'hsk5-l30', 'hsk5-l31', 'hsk5-l32', 'hsk5-l33', 'hsk5-l34', 'hsk5-l35', 'hsk5-l36'], stages: [12, 5, 4, 1] },
};

function expectedStages([words, phrases, sentences, mixed]) {
  return [
    ...Array(words).fill('word'),
    ...Array(phrases).fill('phrase'),
    ...Array(sentences).fill('sentence'),
    ...Array(mixed).fill('mixed'),
  ];
}

test('final aligned content covers the remaining approved HSK3/4/5 lessons', async () => {
  for (const [level, rule] of Object.entries(expected)) {
    assert.deepEqual(aligned.levels[level].map((lesson) => lesson.id), rule.ids);
  }
});

test('final aligned lessons preserve the approved quantity rule and progression', async () => {
  for (const [level, rule] of Object.entries(expected)) {
    const stages = expectedStages(rule.stages);
    for (const lesson of aligned.levels[level]) {
      assert.deepEqual(lesson.items.map((item) => item.stage), stages, `${lesson.id} stage order should match ${level}`);
      assert.equal(
        lesson.items.every((item) =>
          item.source.includes('Textbook alignment candidate final batch') ||
          item.source.includes('Refined textbook-theme candidate final batch'),
        ),
        true,
      );
    }
  }
});
