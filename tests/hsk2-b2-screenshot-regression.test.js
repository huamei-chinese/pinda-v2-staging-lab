const assert = require("node:assert/strict");
const test = require("node:test");

const hsk2Lesson1Words = require("../public/HSK2/lesson-hsk2-l1-word.js.js");
const hsk2Lesson1Phrases = require("../public/HSK2/lesson-hsk2-l1-phrase.js.js");

function findItem(groups, hanzi) {
  for (const group of groups) {
    const item = group.items.find((entry) => entry.hanzi === hanzi);
    if (item) return item;
  }
  return null;
}

test("B2 HSK2 lesson 1 keeps 米 as the length unit meter, not mixed with rice", () => {
  const meter = findItem(hsk2Lesson1Words, "米");

  assert.ok(meter, "missing HSK2 lesson 1 米 word item");
  assert.equal(meter.vietnamese, "mét");
  assert.equal(meter.part_of_speech, "Lượng từ");
  assert.match(meter.explanation, /chiều cao|đơn vị đo độ dài|mét/i);
  assert.doesNotMatch(meter.vietnamese, /gạo/i);
});

test("B2 HSK2 lesson 1 sentence segmentation treats 米 in 我一米七 as a measure word", () => {
  const sentence = findItem(hsk2Lesson1Phrases, "我一米七。");

  assert.ok(sentence, "missing HSK2 lesson 1 我一米七。 sentence");
  assert.match(sentence.segments_text, /米｜Lượng từ/);
  assert.doesNotMatch(sentence.segments_text, /米｜Danh từ/);

  const meterSegment = sentence.segments.find((segment) => segment.text === "米");
  const oneSegment = sentence.segments.find((segment) => segment.text === "一");
  assert.ok(meterSegment, "missing 米 segment in 我一米七。");
  assert.ok(oneSegment, "missing 一 segment in 我一米七。");
  assert.equal(oneSegment.pos, "Danh từ");
  assert.equal(meterSegment.pos, "Lượng từ");
});
