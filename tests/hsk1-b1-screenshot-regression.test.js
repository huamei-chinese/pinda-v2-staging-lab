const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function loadHsk1Content() {
  const sourcePath = path.join(__dirname, "..", "public", "lesson-hsk1-word-sentence-content.js");
  const source = fs.readFileSync(sourcePath, "utf8");
  const sandbox = { lessonContent: {} };
  vm.runInNewContext(source, sandbox, { filename: sourcePath });
  return sandbox.lessonContent.HSK1;
}

function firstWord(item) {
  assert.equal(Array.isArray(item.words), true);
  assert.ok(item.words.length > 0);
  return item.words[0];
}

test("B1 HSK1 lesson titles include level and lesson number before the Vietnamese title", () => {
  const hsk1 = loadHsk1Content();

  for (let no = 1; no <= 15; no += 1) {
    const lesson = hsk1[`hsk1-l${no}`];
    assert.ok(lesson, `missing HSK1 lesson ${no}`);
    assert.match(lesson.titleVi, new RegExp(`^HSK1 第${no}课 - `));
  }
});

test("B1 HSK1 lesson 5 marks 了 as a particle instead of a generic word/function label", () => {
  const hsk1 = loadHsk1Content();
  const leWord = hsk1["hsk1-l5"].content.word.find((item) => item.hanzi === "了");

  assert.ok(leWord, "missing HSK1 lesson 5 了 word item");
  assert.equal(leWord.source_pos, "Trợ từ");
  assert.deepEqual(
    {
      text: firstWord(leWord).text,
      segment_type: firstWord(leWord).segment_type,
      pos: firstWord(leWord).pos,
    },
    { text: "了", segment_type: "助词", pos: "助词" },
  );
});

test("B1 HSK1 lesson 9 keeps 司机 as a noun with the approved Vietnamese meaning", () => {
  const hsk1 = loadHsk1Content();
  const driver = hsk1["hsk1-l9"].content.word.find((item) => item.hanzi === "司机");

  assert.ok(driver, "missing HSK1 lesson 9 司机 word item");
  assert.equal(driver.vi, "tài xế");
  assert.equal(driver.source_pos, "Danh từ");
  assert.equal(firstWord(driver).pos, "名词");
});

test("B1 HSK1 lesson 14 keeps the apple purchase item in the sentence stage and marks 了 as a particle", () => {
  const hsk1 = loadHsk1Content();
  const sentence = hsk1["hsk1-l14"].content.sentence.find((item) => item.hanzi === "我买了一点儿苹果。");

  assert.ok(sentence, "missing HSK1 lesson 14 apple purchase sentence");
  assert.equal(sentence.stage, "sentence");
  assert.equal(sentence.item_type, "sentence");

  const leSegment = sentence.words.find((word) => word.text === "了");
  assert.ok(leSegment, "missing 了 segment in apple purchase sentence");
  assert.equal(leSegment.segment_type, "助词");
  assert.equal(leSegment.pos, "助词");
});

test("B1 guard does not retag unrelated HSK1 function words while fixing screenshot targets", () => {
  const hsk1 = loadHsk1Content();
  const helloWord = hsk1["hsk1-l1"].content.word.find((item) => item.hanzi === "喂");
  const questionSentence = hsk1["hsk1-l10"].content.sentence.find((item) => item.hanzi === "我能坐这儿吗？");
  const maSegment = questionSentence.words.find((word) => word.text === "吗");

  assert.equal(firstWord(helloWord).segment_type, "词");
  assert.equal(firstWord(helloWord).pos, "功能词");
  assert.equal(maSegment.segment_type, "功能词块");
  assert.equal(maSegment.pos, "功能词");
});
