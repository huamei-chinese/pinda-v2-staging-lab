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

function assertSingleWord(hsk5, hanzi, sourcePos) {
  const wordHits = findByHanzi(hsk5, hanzi, "word");
  const sentenceHits = findByHanzi(hsk5, hanzi, "sentence");

  assert.ok(wordHits.length > 0, `${hanzi} should exist in HSK5 word content`);
  assert.deepEqual(sentenceHits, [], `${hanzi} should not be migrated as a standalone sentence`);
  for (const { item } of wordHits) {
    assert.equal(item.stage, "word");
    assert.equal(item.item_type, "word");
    assert.equal(item.source_pos, sourcePos);
  }
}

test("B5.1 HSK5 lessons 1-6 keep screenshot-marked single vocabulary items in word content", () => {
  const hsk5 = loadHsk5AuditContent();

  assertSingleWord(hsk5, "\u6697\u6697", "Ph\u00f3 t\u1eeb");
  assertSingleWord(hsk5, "\u534a\u591c", "Danh t\u1eeb");
  assertSingleWord(hsk5, "\u8d23\u4efb", "Danh t\u1eeb");
  assertSingleWord(hsk5, "\u52c7\u6c14", "Danh t\u1eeb");
  assertSingleWord(hsk5, "\u6001\u5ea6", "Danh t\u1eeb");
  assertSingleWord(hsk5, "\u6587\u5316", "Danh t\u1eeb");
  assertSingleWord(hsk5, "\u602a\u517d", "Danh t\u1eeb");
});

test("B5.1 HSK5 lessons 1-6 keep screenshot-marked full sentences in sentence content", () => {
  const hsk5 = loadHsk5AuditContent();
  const sentenceTargets = [
    "\u771f\u6b63\u6210\u719f\u7684\u4eba\u61c2\u5f97\u56de\u62a5\u7236\u6bcd\u3002",
    "\u517b\u8001\u95ee\u9898\u9700\u8981\u5168\u5bb6\u4e00\u8d77\u5546\u91cf\u3002",
    "\u61c2\u5f97\u611f\u6069\u7684\u4eba\u66f4\u503c\u5f97\u5c0a\u91cd\u3002",
    "\u8fd9\u4e2a\u6545\u4e8b\u503c\u5f97\u6211\u4eec\u8ba4\u771f\u5b66\u4e60\u3002",
    "\u8fd9\u5ea7\u57ce\u5e02\u56e0\u4e3a\u6cc9\u6c34\u53d8\u5f97\u66f4\u6709\u9b45\u529b\u3002",
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

test("B5.1 HSK5 confirmed Vietnamese translation fixes stay natural and specific", () => {
  const hsk5 = loadHsk5AuditContent();
  const quanCheng = findByHanzi(hsk5, "\u6cc9\u57ce", "word")[0].item;
  const shouSui = findByHanzi(hsk5, "\u5b88\u5c81", "word")[0].item;
  const quanChengSentence = findByHanzi(hsk5, "\u6d4e\u5357\u53c8\u53eb\u201c\u6cc9\u57ce\u201d\u3002", "sentence")[0].item;
  const shouSuiSentence = findByHanzi(hsk5, "\u9664\u5915\u665a\u4e0a\u5f88\u591a\u4eba\u4f1a\u5b88\u5c81\u3002", "sentence")[0].item;

  assert.equal(quanCheng.vietnamese, "th\u00e0nh ph\u1ed1 c\u1ee7a nh\u1eefng con su\u1ed1i");
  assert.equal(quanCheng.vi, "th\u00e0nh ph\u1ed1 c\u1ee7a nh\u1eefng con su\u1ed1i");
  assert.equal(quanChengSentence.vietnamese, "T\u1ebf Nam c\u00f2n \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 \u201cth\u00e0nh ph\u1ed1 c\u1ee7a nh\u1eefng con su\u1ed1i\u201d.");
  assert.equal(shouSui.vietnamese, "th\u1ee9c \u0111\u00f3n giao th\u1eeba");
  assert.equal(shouSui.vi, "th\u1ee9c \u0111\u00f3n giao th\u1eeba");
  assert.equal(shouSuiSentence.vietnamese, "T\u1ed1i giao th\u1eeba r\u1ea5t nhi\u1ec1u ng\u01b0\u1eddi s\u1ebd th\u1ee9c \u0111\u00f3n giao th\u1eeba.");
});
