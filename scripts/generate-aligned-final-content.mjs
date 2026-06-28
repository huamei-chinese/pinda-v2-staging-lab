import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pinyin } from "pinyin-pro";

const require = createRequire(import.meta.url);
const root = process.cwd();
const sourceNote = "Textbook alignment candidate final batch - needs human PDF/OCR verification";
const refinedSourceNote = "Refined textbook-theme candidate final batch - needs human PDF/OCR verification";

const packs = [
  ["HSK3", "lesson-hsk3-batch-11-15.js"],
  ["HSK3", "lesson-hsk3-batch-16-20.js"],
  ["HSK4", "lesson-hsk4-batch-11-15.js"],
  ["HSK4", "lesson-hsk4-batch-16-20.js"],
  ["HSK5", "lesson-hsk5-batch-13-18.js"],
  ["HSK5", "lesson-hsk5-batch-19-24.js"],
  ["HSK5", "lesson-hsk5-batch-25-30.js"],
  ["HSK5", "lesson-hsk5-batch-31-36.js"],
];

function toPinyin(text, toneType) {
  return pinyin(text, { toneType, type: "array", nonZh: "consecutive" })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function extraWord(text, pos, vi) {
  return {
    text,
    pinyin: toPinyin(text, "none"),
    tone: toPinyin(text, "symbol"),
    pos,
    vi,
  };
}

const bridgeWords = {
  和: extraWord("和", "prep", "và"),
  有关系: extraWord("有关系", "verb", "có liên quan"),
  学习: extraWord("学习", "verb", "học"),
  需要: extraWord("需要", "verb", "cần"),
  我们: extraWord("我们", "noun", "chúng ta"),
  理解: extraWord("理解", "verb", "hiểu"),
  重点: extraWord("重点", "noun", "trọng điểm"),
  内容: extraWord("内容", "noun", "nội dung"),
  方法: extraWord("方法", "noun", "phương pháp"),
  问题: extraWord("问题", "noun", "vấn đề"),
};

const properNameText = new Set(["老舍", "鲁迅", "子路", "济南", "北京"]);
const weakStandaloneText = new Set(["的", "因为"]);

function uniqueWords(words) {
  const seen = new Set();
  return words.filter((word) => {
    if (!word || seen.has(word.text)) return false;
    seen.add(word.text);
    return true;
  });
}

function contentWords(lesson) {
  const words = lesson.items
    .filter((item) => item.stage === "word")
    .flatMap((item) => item.words)
    .filter((word) => !weakStandaloneText.has(word.text));
  const highValue = words.filter((word) => !properNameText.has(word.text));
  return uniqueWords(highValue.length >= 4 ? highValue : words);
}

function makeItem(stage, vi, hanzi, words, lessonId) {
  const cleanWords = uniqueWords(words);
  return {
    stage,
    vi,
    hanzi,
    words: cleanWords,
    source: `${refinedSourceNote} - ${lessonId}`,
    pinyin: cleanWords.map((word) => word.pinyin).join(" "),
    tone: cleanWords.map((word) => word.tone).join(" "),
  };
}

function refinedPhrase(words, index, lessonId) {
  const core = words.slice(0, Math.min(3, words.length));
  const a = core[index % core.length];
  const tails = [bridgeWords.内容, bridgeWords.方法, bridgeWords.重点, bridgeWords.问题, bridgeWords.重点];
  const tail = tails[index % tails.length];
  return makeItem("phrase", `${tail.vi} về ${a.vi}`, `${a.text}${tail.text}`, [a, tail], lessonId);
}

function refinedSentence(lesson, words, index) {
  const a = words[index % words.length];
  const b = words[(index + 1) % words.length];
  const patterns = [
    () => makeItem("sentence", lesson.titleVi || `Nội dung trọng điểm: ${a.vi}.`, `${lesson.titleZh}。`, [a], lesson.id),
    () => makeItem("sentence", `${a.vi} là trọng điểm của bài này.`, `${a.text}是本课重点。`, [a, bridgeWords.重点], lesson.id),
    () => makeItem("sentence", `Học nội dung này cần có phương pháp.`, `学习内容需要方法。`, [bridgeWords.学习, bridgeWords.内容, bridgeWords.需要, bridgeWords.方法], lesson.id),
    () => makeItem("sentence", `Chúng ta cần hiểu trọng điểm này.`, `我们需要理解重点。`, [bridgeWords.我们, bridgeWords.需要, bridgeWords.理解, bridgeWords.重点], lesson.id),
  ];
  return patterns[index % patterns.length]();
}

function refinedMixed(lesson, words, index) {
  const a = words[index % words.length];
  return makeItem("mixed", `Ôn tập trọng điểm: ${a.vi}.`, `${a.text}是本课重点。`, [a, bridgeWords.重点], lesson.id);
}

function refineAdvancedLesson(lesson) {
  if (!lesson.id.startsWith("hsk4") && !lesson.id.startsWith("hsk5")) {
    return withSource(lesson);
  }
  const words = contentWords(lesson);
  const wordItems = lesson.items
    .filter((item) => item.stage === "word")
    .map((item) => ({
      ...item,
      source: `${refinedSourceNote} - ${lesson.id}`,
    }));
  const phraseCount = lesson.items.filter((item) => item.stage === "phrase").length;
  const sentenceCount = lesson.items.filter((item) => item.stage === "sentence").length;
  const mixedCount = lesson.items.filter((item) => item.stage === "mixed").length;

  return {
    ...lesson,
    items: [
      ...wordItems,
      ...Array.from({ length: phraseCount }, (_, index) => refinedPhrase(words, index, lesson.id)),
      ...Array.from({ length: sentenceCount }, (_, index) => refinedSentence(lesson, words, index)),
      ...Array.from({ length: mixedCount }, (_, index) => refinedMixed(lesson, words, index)),
    ],
  };
}

function withSource(lesson) {
  return {
    ...lesson,
    items: lesson.items.map((item) => ({
      ...item,
      source: `${sourceNote} - ${lesson.id}`,
    })),
  };
}

const levels = {};
for (const [level, file] of packs) {
  levels[level] = levels[level] || [];
  const batch = require(path.join(root, "public", file));
  levels[level].push(...batch.lessons.map(refineAdvancedLesson));
}

const body = `(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.lessonContent = root.lessonContent || {};
  for (const [level, lessons] of Object.entries(data.levels)) {
    root.lessonContent[level] = root.lessonContent[level] || {};
    for (const lesson of lessons) {
      root.lessonContent[level][lesson.id] = {
        id: lesson.id,
        no: lesson.no,
        title: lesson.titleZh,
        titleZh: lesson.titleZh,
        titleVi: lesson.titleVi,
        items: lesson.items,
      };
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return ${JSON.stringify({ source: sourceNote, levels }, null, 2)};
});
`;

fs.writeFileSync(path.join(root, "public", "lesson-hsk345-aligned-final.js"), body, "utf8");
