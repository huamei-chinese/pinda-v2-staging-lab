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

function findWordByHanzi(hsk5, hanzi) {
  const hits = [];
  for (const lesson of Object.values(hsk5)) {
    for (const item of lesson.content.word || []) {
      if (item.hanzi === hanzi || item.chinese_text === hanzi) {
        hits.push({ lesson: lesson.id, item });
      }
    }
  }
  return hits;
}

test("B5.4 HSK5 remaining screenshot-marked vocabulary keeps precise POS", () => {
  const hsk5 = loadHsk5AuditContent();
  const expectedWordPos = [
    ["hsk5_l20_word_023", "\u0110\u1ed9ng t\u1eeb"],
    ["hsk5_l21_word_028", "Danh t\u1eeb"],
    ["hsk5_l21_word_030", "Danh t\u1eeb"],
  ];

  for (const [id, sourcePos] of expectedWordPos) {
    const hit = findById(hsk5, id, "word");
    assert.ok(hit, `${id} should exist in HSK5 word content`);
    assert.equal(hit.item.source_pos, sourcePos);
  }

  assert.equal(findWordByHanzi(hsk5, "\u5e2e").length, 0, "B5.4 should not fabricate a standalone HSK5 word item for \u5e2e");
});

test("B5.4 HSK5 \u5b57\u5e93 Vietnamese translation removes the database wording", () => {
  const hsk5 = loadHsk5AuditContent();
  const fontLibrary = findById(hsk5, "hsk5_l21_word_028", "word").item;
  const fontLibrarySentence = findById(hsk5, "hsk5_l21_sentence_019", "sentence").item;
  const fontLibrarySegment = fontLibrarySentence.words.find((word) => word.text === "\u5b57\u5e93");

  for (const value of [
    fontLibrary.vi,
    fontLibrary.vietnamese,
    fontLibrary.words[0].vi,
    fontLibrary.words[0].vietnamese,
    fontLibrarySegment.vi,
    fontLibrarySegment.vietnamese,
  ]) {
    assert.equal(value, "kho ch\u1eef; b\u1ed9 ph\u00f4ng ch\u1eef");
    assert.doesNotMatch(value, /database/i);
  }
});

test("B5.4 HSK5 sentence targets stay in sentence content and keep verb segmentation", () => {
  const hsk5 = loadHsk5AuditContent();
  const attractSentence = findById(hsk5, "hsk5_l20_sentence_012", "sentence").item;
  const helpSourceSentence = findById(hsk5, "hsk5_l21_sentence_005", "sentence").item;
  const helpShapeSentence = findById(hsk5, "hsk5_l21_sentence_020", "sentence").item;

  assert.equal(attractSentence.words.find((word) => word.text === "\u5438\u5f15").pos, "\u52a8\u8bcd");
  assert.equal(helpSourceSentence.words.find((word) => word.text === "\u5e2e\u52a9").pos, "\u52a8\u8bcd");
  assert.equal(helpShapeSentence.words.find((word) => word.text === "\u5e2e\u52a9").pos, "\u52a8\u8bcd");
});
