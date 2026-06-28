const test = require('node:test');
const assert = require('node:assert/strict');

const aligned = require('../lesson-hsk345-aligned-next.js');

const expected = {
  HSK3: { ids: ['hsk3-l6', 'hsk3-l7', 'hsk3-l8', 'hsk3-l9', 'hsk3-l10'], stages: [10, 4, 4, 2] },
  HSK4: { ids: ['hsk4-l6', 'hsk4-l7', 'hsk4-l8', 'hsk4-l9', 'hsk4-l10'], stages: [10, 5, 4, 1] },
  HSK5: { ids: ['hsk5-l7', 'hsk5-l8', 'hsk5-l9', 'hsk5-l10', 'hsk5-l11', 'hsk5-l12'], stages: [12, 5, 4, 1] },
};

function expectedStages([words, phrases, sentences, mixed]) {
  return [
    ...Array(words).fill('word'),
    ...Array(phrases).fill('phrase'),
    ...Array(sentences).fill('sentence'),
    ...Array(mixed).fill('mixed'),
  ];
}

test('next aligned content covers the second approved batch for HSK3/4/5', async () => {
  for (const [level, rule] of Object.entries(expected)) {
    assert.deepEqual(aligned.levels[level].map((lesson) => lesson.id), rule.ids);
  }
});

test('next aligned lessons follow each level quantity rule and progression', async () => {
  for (const [level, rule] of Object.entries(expected)) {
    const stages = expectedStages(rule.stages);
    for (const lesson of aligned.levels[level]) {
      assert.deepEqual(lesson.items.map((item) => item.stage), stages, `${lesson.id} stage order should match ${level}`);
      assert.equal(lesson.items.every((item) => item.source.includes('Textbook alignment candidate batch 2')), true);
    }
  }
});

test('next aligned content uses only beginner-facing part of speech labels', async () => {
  const allowed = ['noun', 'verb', 'adj', 'adv', 'prep', 'particle'];
  for (const lessons of Object.values(aligned.levels)) {
    for (const lesson of lessons) {
      for (const item of lesson.items) {
        for (const word of item.words) {
          assert.ok(allowed.includes(word.pos), `${lesson.id} has unsupported pos ${word.pos}`);
        }
      }
    }
  }
});
