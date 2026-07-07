const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function loadHsk5AuditContent() {
  const sourcePath = path.join(__dirname, "..", "public", "lesson-hsk5-word-sentence-audit.js");
  const source = fs.readFileSync(sourcePath, "utf8");
  const sandbox = { lessonContent: {} };
  vm.runInNewContext(source, sandbox, { filename: sourcePath });
  return sandbox.lessonContent.HSK5;
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

function segmentTexts(item) {
  return (item.words || []).map((word) => word.text);
}

function segmentByText(item, text) {
  return (item.words || []).find((word) => word.text === text);
}

test("B5.3 HSK5 lessons 13-16 keep screenshot-marked full sentences in sentence content", () => {
  const hsk5 = loadHsk5AuditContent();
  const sentenceTargets = [
    "\u6ca1\u6709\u76ee\u6807\u7684\u4eba\u5bb9\u6613\u5fd9\u5f97\u6ca1\u6709\u610f\u4e49\u3002",
    "\u4e0d\u8981\u628a\u6ca1\u6709\u4ef7\u503c\u7684\u4e8b\u770b\u5f97\u592a\u91cd\u3002",
    "\u65ad\u820d\u79bb\u4e0d\u662f\u7b80\u5355\u5730\u6254\u4e1c\u897f\u3002",
    "\u8f7b\u88c5\u4e0a\u9635\uff0c\u53cd\u800c\u8d70\u5f97\u66f4\u8fdc\u3002",
  ];

  for (const hanzi of sentenceTargets) {
    assert.deepEqual(findByHanzi(hsk5, hanzi, "word"), [], `${hanzi} should not appear in HSK5 word content`);
    assert.ok(findByHanzi(hsk5, hanzi, "sentence").length > 0, `${hanzi} should appear in HSK5 sentence content`);
  }
});

test("B5.3 HSK5 lessons 13-16 keep screenshot-marked vocabulary POS precise", () => {
  const hsk5 = loadHsk5AuditContent();
  const expectedWordPos = [
    ["hsk5_l13_word_010", "\u0110\u1ed9ng t\u1eeb"],
    ["hsk5_l14_word_008", "\u0110\u1ed9ng t\u1eeb"],
    ["hsk5_l15_word_031", "\u0110\u1ed9ng t\u1eeb"],
    ["hsk5_l16_word_031", "T\u00ednh t\u1eeb"],
  ];

  for (const [id, sourcePos] of expectedWordPos) {
    const hit = findById(hsk5, id, "word");
    assert.ok(hit, `${id} should exist in HSK5 word content`);
    assert.equal(hit.item.source_pos, sourcePos);
  }
});

test("B5.3 HSK5 sentence segmentation matches the screenshot-marked grammar points", () => {
  const hsk5 = loadHsk5AuditContent();
  const giveUpSentence = findById(hsk5, "hsk5_l13_sentence_005", "sentence").item;
  const goalSentence = findById(hsk5, "hsk5_l13_sentence_012", "sentence").item;
  const valueSentence = findById(hsk5, "hsk5_l13_sentence_014", "sentence").item;
  const minimalismSentence = findById(hsk5, "hsk5_l13_sentence_016", "sentence").item;
  const lightSentence = findById(hsk5, "hsk5_l13_sentence_022", "sentence").item;
  const deploySentence = findById(hsk5, "hsk5_l15_sentence_021", "sentence").item;

  assert.equal(segmentByText(giveUpSentence, "\u820d\u5f97").pos, "\u52a8\u8bcd");
  assert.ok(!segmentTexts(goalSentence).includes("\u76ee\u6807\u7684\u4eba\u5bb9\u6613"));
  assert.equal(segmentByText(goalSentence, "\u76ee\u6807").pos, "\u540d\u8bcd");
  assert.equal(segmentByText(goalSentence, "\u5bb9\u6613").pos, "\u5f62\u5bb9\u8bcd");
  assert.equal(segmentByText(valueSentence, "\u91cd").pos, "\u5f62\u5bb9\u8bcd");
  assert.equal(segmentByText(minimalismSentence, "\u4e1c\u897f").vi, "\u0111\u1ed3 \u0111\u1ea1c");
  assert.ok(!segmentTexts(lightSentence).includes("\u53cd\u800c\u8d70"));
  assert.equal(segmentByText(lightSentence, "\u53cd\u800c").pos, "\u526f\u8bcd");
  assert.equal(segmentByText(lightSentence, "\u8d70").pos, "\u52a8\u8bcd");
  assert.equal(segmentByText(deploySentence, "\u90e8\u7f72").pos, "\u52a8\u8bcd");
});
