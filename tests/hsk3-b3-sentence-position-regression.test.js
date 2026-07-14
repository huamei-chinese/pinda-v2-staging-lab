const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function loadHsk3AuditContent() {
  const sourcePath = path.join(__dirname, "..", "public", "lesson-hsk3-word-sentence-content.js");
  const source = fs.readFileSync(sourcePath, "utf8");
  const sandbox = { lessonContent: {} };
  vm.runInNewContext(source, sandbox, { filename: sourcePath });
  return sandbox.lessonContent.HSK3;
}

function findByHanzi(hsk3, hanzi, stage) {
  const hits = [];
  for (const lesson of Object.values(hsk3)) {
    for (const item of lesson.content[stage] || []) {
      if (item.hanzi === hanzi || item.chinese_text === hanzi) {
        hits.push({ lesson: lesson.id, item });
      }
    }
  }
  return hits;
}

test("B3 HSK3 screenshot-marked sentence items stay in the sentence module, not vocabulary", () => {
  const hsk3 = loadHsk3AuditContent();
  const sentenceTargets = [
    "我们认识的时间不长。",
    "你说得很清楚。",
    "我现在累得下班了就想睡觉。",
    "他忙得没时间吃饭。",
    "她高兴得笑了。",
    "孩子哭得很大声。",
    "我昨天晚上睡不着。",
    "你昨天睡得好吗？",
    "他恢复得很快。",
    "他长得像他爸爸。",
    "这件衣服不像新的。",
    "原来你认识他。",
    "你猜他是谁？",
    "他变得越来越积极。",
  ];

  for (const hanzi of sentenceTargets) {
    const wordHits = findByHanzi(hsk3, hanzi, "word");
    const sentenceHits = findByHanzi(hsk3, hanzi, "sentence");

    assert.deepEqual(wordHits, [], `${hanzi} should not appear in HSK3 word/vocabulary content`);
    assert.ok(sentenceHits.length > 0, `${hanzi} should appear in HSK3 sentence content`);
    for (const { item } of sentenceHits) {
      assert.equal(item.stage, "sentence");
      assert.equal(item.item_type, "sentence");
      assert.ok(Array.isArray(item.words));
      assert.ok(item.words.length > 0);
    }
  }
});

test("B3 guard keeps real single-word HSK3 vocabulary out of sentence migration", () => {
  const hsk3 = loadHsk3AuditContent();
  const vocabularyTargets = ["态度", "教训"];

  for (const hanzi of vocabularyTargets) {
    const wordHits = findByHanzi(hsk3, hanzi, "word");
    assert.ok(wordHits.length > 0, `${hanzi} should remain available as vocabulary`);
    for (const { item } of wordHits) {
      assert.equal(item.stage, "word");
      assert.equal(item.item_type, "word");
    }
  }
});
