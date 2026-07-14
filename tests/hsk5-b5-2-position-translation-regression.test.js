const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function loadHsk5AuditContent() {
  const sourcePath = path.join(__dirname, "..", "public", "lesson-hsk5-word-sentence-content.js");
  const source = fs.readFileSync(sourcePath, "utf8");
  const sandbox = { lessonContent: {} };
  vm.runInNewContext(source, sandbox, { filename: sourcePath });
  return sandbox.lessonContent.HSK5;
}

function findByHanzi(hsk5, hanzi, stage) {
  const hits = [];
  for (const lesson of Object.values(hsk5)) {
    for (const item of lesson.content[stage] || []) {
      if (item.hanzi === hanzi || item.chinese_text === hanzi) {
        hits.push({ lesson: lesson.id, item });
      }
    }
  }
  return hits;
}

function findById(hsk5, id, stage) {
  for (const lesson of Object.values(hsk5)) {
    for (const item of lesson.content[stage] || []) {
      if (item.id === id) {
        return { lesson: lesson.id, item };
      }
    }
  }
  return null;
}

test("B5.2 HSK5 lessons 7-12 keep screenshot-marked sentence items in sentence content", () => {
  const hsk5 = loadHsk5AuditContent();
  const sentenceTargets = [
    "\u4eca\u5929\u6211\u4eec\u4ece\u522b\u6837\u7684\u89d2\u5ea6\u8ba4\u8bc6\u9c81\u8fc5\u3002",
    "\u901a\u8fc7\u8fd9\u4e9b\u8d44\u6599\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u4e86\u89e3\u4ed6\u3002",
    "\u6279\u5224\u7cbe\u795e\u4e0d\u662f\u7b80\u5355\u5730\u53cd\u5bf9\u4e00\u5207\u3002",
    "\u4ed6\u8868\u8fbe\u5f97\u5f88\u76f4\u63a5\u3002",
    "\u7406\u6027\u7684\u6001\u5ea6\u80fd\u8ba9\u4e89\u8bba\u53d8\u5f97\u6709\u4ef7\u503c\u3002",
    "\u81ea\u7136\u9192\u6765\u4f1a\u8ba9\u4eba\u66f4\u8212\u670d\u3002",
    "\u8fd9\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u4ee5\u7ec3\u4e60\u542c\u529b\u3002",
  ];

  for (const hanzi of sentenceTargets) {
    const wordHits = findByHanzi(hsk5, hanzi, "word");
    const sentenceHits = findByHanzi(hsk5, hanzi, "sentence");

    assert.deepEqual(wordHits, [], `${hanzi} should not appear in HSK5 word/vocabulary content`);
    assert.ok(sentenceHits.length > 0, `${hanzi} should appear in HSK5 sentence content`);
    for (const { item } of sentenceHits) {
      assert.equal(item.stage, "sentence");
      assert.equal(item.item_type, "sentence");
    }
  }
});

test("B5.2 HSK5 screenshot-marked vocabulary POS stays scoped to the marked lesson", () => {
  const hsk5 = loadHsk5AuditContent();
  const expectedWordPos = [
    ["hsk5_l07_word_014", "Danh t\u1eeb"],
    ["hsk5_l07_word_021", "\u0110\u1ed9ng t\u1eeb/Danh t\u1eeb"],
    ["hsk5_l07_word_022", "Danh t\u1eeb"],
    ["hsk5_l08_word_010", "Danh t\u1eeb"],
    ["hsk5_l08_word_023", "\u0110\u1ed9ng t\u1eeb"],
    ["hsk5_l08_word_026", "Danh t\u1eeb"],
  ];

  for (const [id, sourcePos] of expectedWordPos) {
    const hit = findById(hsk5, id, "word");
    assert.ok(hit, `${id} should exist in HSK5 word content`);
    assert.equal(hit.item.stage, "word");
    assert.equal(hit.item.item_type, "word");
    assert.equal(hit.item.source_pos, sourcePos);
  }

  const judgeSegment = findById(hsk5, "hsk5_l10_sentence_016", "sentence").item.words.find((word) => word.text === "\u8bc4\u59d4");
  assert.equal(judgeSegment.pos, "\u540d\u8bcd");
});

test("B5.2 HSK5 small-program Vietnamese translation does not stay in English", () => {
  const hsk5 = loadHsk5AuditContent();
  const smallProgram = findById(hsk5, "hsk5_l12_word_028", "word").item;
  const smallProgramSentence = findById(hsk5, "hsk5_l12_sentence_020", "sentence").item;
  const smallProgramSegment = smallProgramSentence.words.find((word) => word.text === "\u5c0f\u7a0b\u5e8f");

  assert.equal(smallProgram.vi, "\u1ee9ng d\u1ee5ng nh\u1ecf");
  assert.equal(smallProgram.vietnamese, "\u1ee9ng d\u1ee5ng nh\u1ecf");
  assert.equal(smallProgramSegment.vi, "\u1ee9ng d\u1ee5ng nh\u1ecf");
  assert.equal(smallProgramSegment.vietnamese, "\u1ee9ng d\u1ee5ng nh\u1ecf");
  assert.equal(smallProgramSentence.vi, "\u1ee8ng d\u1ee5ng nh\u1ecf n\u00e0y c\u00f3 th\u1ec3 luy\u1ec7n nghe.");
  assert.equal(smallProgramSentence.vietnamese, "\u1ee8ng d\u1ee5ng nh\u1ecf n\u00e0y c\u00f3 th\u1ec3 luy\u1ec7n nghe.");
});
