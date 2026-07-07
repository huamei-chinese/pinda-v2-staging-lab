const assert = require("node:assert/strict");
const test = require("node:test");

const { createPindaModuleBoundaries } = require("../public/pinda-module-boundaries.js");

function makeRoot() {
  return {
    lessonContent: {
      hsk2: {
        "lesson-1": {
          id: "lesson-1",
          title: "Lesson 1",
          content: {
            word: [
              {
                id: "word-1",
                hanzi: "你好",
                pinyin: "ni hao",
                vi: "xin chao",
                vietnamese: "xin chao",
                audio_normal_path: "audio/word-1.mp3",
                internalFlag: "must-not-leak",
              },
            ],
          },
        },
      },
    },
    highFrequencyTopics: [
      {
        id: "daily-greeting",
        items: [{ id: "hf-1", hanzi: "早上好", pinyin: "zao shang hao", vi: "chao buoi sang" }],
      },
    ],
  };
}

test("pinda module boundary exposes the approved four modules", () => {
  const boundary = createPindaModuleBoundaries(makeRoot());

  assert.deepEqual(Object.keys(boundary), [
    "contentData",
    "contentAdapter",
    "learningFeature",
    "accessPolicy",
  ]);
});

test("content adapter preserves whitelisted language fields and blocks unknown fields", () => {
  const boundary = createPindaModuleBoundaries(makeRoot());
  const lesson = boundary.contentData.getLesson("hsk2", "lesson-1");
  const item = boundary.contentAdapter.toPracticeItem(lesson.content.word[0]);

  assert.equal(item.hanzi, "你好");
  assert.equal(item.pinyin, "ni hao");
  assert.equal(item.vi, "xin chao");
  assert.equal(item.vietnamese, "xin chao");
  assert.equal(item.audio_normal_path, "audio/word-1.mp3");
  assert.equal("internalFlag" in item, false);
});

test("learning feature reads practice items through the content boundary", () => {
  const boundary = createPindaModuleBoundaries(makeRoot());
  const items = boundary.learningFeature.selectPracticeItems("hsk2", "lesson-1", "word");

  assert.equal(items.length, 1);
  assert.equal(items[0].id, "word-1");
  assert.equal(items[0].hanzi, "你好");
});

test("access policy is read-only and keeps high-risk systems locked by default", () => {
  const boundary = createPindaModuleBoundaries(makeRoot());

  assert.equal(boundary.accessPolicy.canReadContent(), true);
  assert.equal(boundary.accessPolicy.canWriteVip(), false);
  assert.equal(boundary.accessPolicy.canUsePayment(), false);
  assert.equal(boundary.accessPolicy.canReadDatabase(), false);
});
