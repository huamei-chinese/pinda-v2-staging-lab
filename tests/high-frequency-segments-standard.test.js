const test = require("node:test");
const assert = require("node:assert/strict");

const data = require("../public/lesson-high-frequency-daily-interview-test.js");
const legacyHighFrequencyData = require("../public/lesson-high-frequency-topics.js");

const allowedSegmentTypes = new Set(["词", "短语", "功能词块"]);
const allowedPos = new Set(["名词", "动词", "形容词", "代词", "副词", "功能词"]);
const forbiddenPos = new Set(["生词", "短语", "关键词", "word", "phrase", "sentence", "vocab", "keyword"]);
const forbiddenSegmentLabels = new Set(["生词", "关键词", "短语", "word", "phrase", "sentence", "vocab", "keyword"]);
const standalonePosLabels = new Set(["名词", "动词", "形容词", "代词", "副词", "功能词"]);

function displaySegmentLabelForTest(segment = {}) {
  const allowedTypes = new Set(["词", "短语", "功能词块"]);
  const allowedPosLabels = new Set(["名词", "动词", "形容词", "代词", "副词", "功能词"]);
  const legacyOverrides = {
    发给我: { segment_type: "短语", pos: "动词" },
    这个岗位: { segment_type: "短语", pos: "名词" },
    工作经验: { segment_type: "短语", pos: "名词" },
    参加面试: { segment_type: "短语", pos: "动词" },
    需要: { segment_type: "词", pos: "动词" },
    一点: { segment_type: "词", pos: "副词" },
  };
  const posMap = {
    noun: "名词",
    verb: "动词",
    adj: "形容词",
    pron: "代词",
    adv: "副词",
    function: "功能词",
    prep: "功能词",
    particle: "功能词",
    "possessive-pron": "代词",
  };
  const normalized = legacyOverrides[segment.text] || segment;
  const rawType = String(normalized.segment_type || normalized.segmentType || "").trim();
  const rawPos = String(posMap[normalized.pos] || normalized.pos || "").trim();
  const typeLabel = allowedTypes.has(rawType) ? rawType : "未标注词块";
  if (allowedPosLabels.has(rawPos)) return `${typeLabel} · ${rawPos}`;
  return `${typeLabel} · ${rawPos ? "词性错误" : "未标注词性"}`;
}

function normalizeChinese(value) {
  return String(value || "").replace(/[。？！、，,.!?\s]/g, "");
}

test("local high-frequency sentence test data uses segment_type and six allowed pos labels", () => {
  const sentenceItems = data.topics
    .filter((topic) => topic.type === "sentence")
    .flatMap((topic) => topic.items || []);

  assert.equal(sentenceItems.length, 5);

  for (const item of sentenceItems) {
    assert.ok(Array.isArray(item.segments), `${item.id} must include segments`);
    assert.ok(item.segments.length > 0, `${item.id} must include at least one segment`);

    const joined = normalizeChinese(item.segments.map((segment) => segment.text).join(""));
    assert.equal(joined, normalizeChinese(item.hanzi), `${item.id} segments should match sentence text`);

    for (const segment of item.segments) {
      assert.ok(segment.text, `${item.id} segment missing text`);
      assert.ok(segment.pinyin, `${item.id} ${segment.text} missing pinyin`);
      assert.ok(segment.vietnamese, `${item.id} ${segment.text} missing vietnamese`);
      assert.ok(allowedSegmentTypes.has(segment.segment_type), `${item.id} ${segment.text} has invalid segment_type`);
      assert.ok(allowedPos.has(segment.pos), `${item.id} ${segment.text} has invalid pos`);
      assert.equal(forbiddenPos.has(segment.pos), false, `${item.id} ${segment.text} uses forbidden pos`);
    }
  }
});

test("segment label text uses segment_type plus pos and never module labels", () => {
  const sampleLabels = [
    ["词", "名词", "词 · 名词"],
    ["短语", "动词", "短语 · 动词"],
    ["功能词块", "功能词", "功能词块 · 功能词"],
  ];

  for (const [segmentType, pos, expected] of sampleLabels) {
    const label = `${segmentType} · ${pos}`;
    assert.equal(label, expected);
    assert.equal(forbiddenSegmentLabels.has(label), false);
  }
});

test("displaySegmentLabel is the only segment card label function and requires segment_type plus pos", () => {
  const fs = require("node:fs");
  const app = fs.readFileSync("public/app.js", "utf8");
  assert.match(app, /function displaySegmentLabel\(segment = \{\}\)/);
  assert.equal(displaySegmentLabelForTest({ text: "发给我", segment_type: "短语", pos: "动词" }), "短语 · 动词");
  assert.equal(displaySegmentLabelForTest({ text: "这个岗位", segment_type: "短语", pos: "名词" }), "短语 · 名词");
  assert.equal(displaySegmentLabelForTest({ text: "工作经验", segment_type: "短语", pos: "名词" }), "短语 · 名词");
  assert.equal(displaySegmentLabelForTest({ text: "需要", segment_type: "词", pos: "动词" }), "词 · 动词");
  assert.equal(displaySegmentLabelForTest({ text: "一点", segment_type: "词", pos: "副词" }), "词 · 副词");
});

test("legacy high frequency sentence words normalize to segment_type plus pos labels", () => {
  const jobInterview = legacyHighFrequencyData.topics.find((topic) => topic.id === "job_interview");
  assert.ok(jobInterview, "job_interview topic should exist");

  const sentenceWords = jobInterview.items
    .filter((item) => item.stage === "sentence")
    .flatMap((item) => item.words || []);
  const labelsByText = new Map(sentenceWords.map((word) => [word.text, displaySegmentLabelForTest(word)]));

  assert.equal(labelsByText.get("发给我"), "短语 · 动词");
  assert.equal(labelsByText.get("这个岗位"), "短语 · 名词");
  assert.equal(labelsByText.get("工作经验"), "短语 · 名词");
  assert.equal(labelsByText.get("需要"), "词 · 动词");
  assert.equal(labelsByText.get("一点"), "词 · 副词");

  for (const label of labelsByText.values()) {
    assert.match(label, / · /);
    assert.equal(standalonePosLabels.has(label), false);
    assert.equal(forbiddenSegmentLabels.has(label), false);
  }
});

test("segment renderer does not fall back to learning module labels", () => {
  const fs = require("node:fs");
  const app = fs.readFileSync("public/app.js", "utf8");
  const match = app.match(/function displaySegmentLabel\(segment = \{\}\) \{[\s\S]*?\n\}/);
  assert.ok(match, "displaySegmentLabel should exist");
  const source = match[0];
  assert.match(source, /allowedSegmentTypes/);
  assert.match(source, /allowedSegmentPosLabels/);
  assert.match(app, /displaySegmentLabel\(normalizeDisplaySegment\(word\)\)/);
  assert.doesNotMatch(app, /function getSegmentMetaLabel/);
  assert.doesNotMatch(source, /hskContentTypeLabel/);
  assert.doesNotMatch(source, /beginnerPosText/);
  assert.doesNotMatch(source, /stagePhrase/);
});

test("practice underline color selectors are scoped away from hero title", () => {
  const fs = require("node:fs");
  const css = fs.readFileSync("public/styles.css", "utf8");
  assert.match(css, /\.hero-highlight::after\s*\{\s*content:\s*none;/);
  assert.equal(/(^|\n)\.color-[0-5]\s+\.slot-line/.test(css), false);
  assert.match(css, /#practiceScreen \.answer-slot\.color-0 \.slot-line/);
  assert.match(css, /#practiceScreen \.answer-slot\.color-5 \.slot-line/);
});
