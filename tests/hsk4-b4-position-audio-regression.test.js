const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function loadHsk4AuditContent() {
  const sourcePath = path.join(__dirname, "..", "public", "lesson-hsk4-word-sentence-content.js");
  const source = fs.readFileSync(sourcePath, "utf8");
  const sandbox = { lessonContent: {} };
  vm.runInNewContext(source, sandbox, { filename: sourcePath });
  return sandbox.lessonContent.HSK4;
}

function findByHanzi(hsk4, hanzi, stage) {
  const hits = [];
  for (const lesson of Object.values(hsk4)) {
    for (const item of lesson.content[stage] || []) {
      if (item.hanzi === hanzi || item.chinese_text === hanzi) {
        hits.push({ lesson: lesson.id, item });
      }
    }
  }
  return hits;
}

test("B4 HSK4 screenshot-marked sentence items stay in the sentence module, not vocabulary", () => {
  const hsk4 = loadHsk4AuditContent();
  const sentenceTargets = [
    "\u81ea\u7136\u5730\u76f8\u5904\u6bd4\u6545\u610f\u6d6a\u6f2b\u66f4\u91cd\u8981\u3002",
    "\u8fd9\u4e2a\u9879\u76ee\u7531\u8c01\u8d1f\u8d23\uff1f",
    "\u9996\u5148\uff0c\u4f60\u8981\u7a7f\u5f97\u6b63\u5f0f\u4e00\u70b9\u3002",
    "\u8bf7\u62ac\u8d77\u4f60\u7684\u80f3\u818a\u3002",
    "\u79df\u623f\u524d\u4e00\u5b9a\u8981\u770b\u6e05\u695a\u5408\u540c\u548c\u62bc\u91d1\u3002",
    "\u5317\u4eac\u662f\u4e2d\u56fd\u7684\u9996\u90fd\u3002",
    "\u5979\u4eca\u5929\u6253\u626e\u5f97\u5f88\u6f02\u4eae\u3002",
    "\u4f60\u7a76\u7adf\u60f3\u53bb\u54ea\u513f\uff1f",
    "\u8d2d\u4e66\u6ee1\u4e00\u4e00\u767e\u5143\u53ef\u4ee5\u83b7\u5f97\u793c\u7269\u3002",
    "\u4ed6\u54b3\u55fd\u5f97\u5f88\u4e25\u91cd\u3002",
    "\u5176\u5b9e\u4f60\u7684\u5bb6\u4eba\u4e00\u76f4\u5f88\u62c5\u5fc3\u4f60\u3002",
    "\u7eff\u8272\u690d\u7269\u8ba9\u773c\u775b\u5f88\u8212\u670d\u3002",
    "\u4e00\u676f\u70ed\u8336\u53ef\u4ee5\u4f7f\u5fc3\u60c5\u53d8\u5f97\u6109\u5feb\u3002",
    "\u4e50\u89c2\u7684\u6001\u5ea6\u80fd\u5e2e\u52a9\u6211\u4eec\u53d1\u73b0\u751f\u6d3b\u4e2d\u7684\u7f8e\u3002",
    "\u54ea\u91cc\uff0c\u6211\u8fd8\u5dee\u5f97\u8fdc\u5462\u3002",
    "\u6210\u529f\u4e0d\u662f\u968f\u968f\u4fbf\u4fbf\u5f97\u5230\u7684\u3002",
    "\u4eca\u5929\u6211\u53bb\u4e0d\u4e86\u3002",
    "\u5979\u5174\u594b\u5730\u62c9\u7740\u6211\u53bb\u5546\u573a\u3002",
    "\u4e5f\u8bb8\u6211\u4eec\u5e94\u8be5\u518d\u5546\u91cf\u4e00\u4e0b\u3002",
    "\u8282\u80fd\u4ea7\u54c1\u8d8a\u6765\u8d8a\u53d7\u6b22\u8fce\u3002",
    "\u77e5\u8bc6\u91cd\u8981\uff0c\u5174\u8da3\u4e5f\u91cd\u8981\u3002",
    "\u5956\u60e9\u8981\u516c\u5e73\u3002",
    "\u6050\u6015\u4eca\u5929\u53bb\u4e0d\u4e86\u3002",
    "\u8fd9\u4e2a\u5bfc\u6e38\u8bb2\u5f97\u5f88\u6e05\u695a\u3002",
    "\u8fd9\u7bc7\u6587\u7ae0\u7684\u4f5c\u8005\u662f\u8c01\uff1f",
    "\u73b0\u4ee3\u4ea4\u901a\u8d8a\u6765\u8d8a\u65b9\u4fbf\u3002",
  ];

  for (const hanzi of sentenceTargets) {
    const wordHits = findByHanzi(hsk4, hanzi, "word");
    const sentenceHits = findByHanzi(hsk4, hanzi, "sentence");

    assert.deepEqual(wordHits, [], `${hanzi} should not appear in HSK4 word/vocabulary content`);
    assert.ok(sentenceHits.length > 0, `${hanzi} should appear in HSK4 sentence content`);
    for (const { item } of sentenceHits) {
      assert.equal(item.stage, "sentence");
      assert.equal(item.item_type, "sentence");
      assert.ok(Array.isArray(item.words));
      assert.ok(item.words.length > 0);
    }
  }
});

test("B4 guard keeps HSK4 vocabulary free of sentence-shaped entries", () => {
  const hsk4 = loadHsk4AuditContent();

  for (const lesson of Object.values(hsk4)) {
    for (const item of lesson.content.word || []) {
      const hanzi = item.hanzi || item.chinese_text || "";
      assert.doesNotMatch(hanzi, /[。？！?]/, `${lesson.id} ${item.id} should not be a sentence in word content`);
    }
  }
});

test("B4 HSK4 screenshot-marked audio binding items keep existing normal and slow sentence audio", () => {
  const hsk4 = loadHsk4AuditContent();
  const audioTargets = [
    { hanzi: "\u516c\u53f8\u63d0\u4f9b\u4f4f\u5bbf\u5417\uff1f", id: "hsk4_l03_sentence_005" },
    { hanzi: "\u4e0d\u8981\u592a\u7740\u6025\u8d5a\u94b1\u3002", id: "hsk4_l04_sentence_001" },
    { hanzi: "\u6211\u4fdd\u8bc1\u6309\u65f6\u5b8c\u6210\u4efb\u52a1\u3002", id: "hsk4_l04_sentence_008" },
  ];

  for (const { hanzi, id } of audioTargets) {
    const hits = findByHanzi(hsk4, hanzi, "sentence");
    assert.equal(hits.length, 1, `${hanzi} should map to one HSK4 sentence`);
    const item = hits[0].item;
    assert.equal(item.id, id);

    for (const [kind, audioPath] of [
      ["normal", item.normal_audio || item.audio_normal_path || item.audio?.normal],
      ["slow", item.slow_audio || item.audio_slow_path || item.audio?.slow],
    ]) {
      assert.ok(audioPath, `${id} should have ${kind} audio path`);
      assert.ok(audioPath.includes(id), `${id} ${kind} audio path should include item id`);
      const resolvedAudioPath = path.join(__dirname, "..", "public", audioPath);
      assert.ok(fs.existsSync(resolvedAudioPath), `${id} ${kind} audio file should exist`);
      assert.ok(fs.statSync(resolvedAudioPath).size > 0, `${id} ${kind} audio file should not be empty`);
    }
  }
});
