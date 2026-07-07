const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function loadHsk6AuditContent() {
  const sourcePath = path.join(__dirname, "..", "public", "lesson-hsk6-word-sentence-audit.js");
  const source = fs.readFileSync(sourcePath, "utf8");
  const sandbox = { lessonContent: {} };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  vm.runInNewContext(source, sandbox, { filename: sourcePath });
  return sandbox.lessonContent.HSK6;
}

function resolvePublicPath(publicPath) {
  return path.join(__dirname, "..", "public", publicPath);
}

test("B6 HSK6 course table exposes all 40 lessons in order", () => {
  const hsk6 = loadHsk6AuditContent();
  const lessons = Object.values(hsk6).sort((a, b) => a.no - b.no);

  assert.equal(lessons.length, 40);
  assert.deepEqual(
    lessons.map((lesson) => lesson.no),
    Array.from({ length: 40 }, (_, index) => index + 1),
  );
  assert.equal(lessons[0].id, "hsk6-l1");
  assert.equal(lessons[39].id, "hsk6-l40");
});

test("B6 HSK6 sentence source gap is explicit for lessons 21-30", () => {
  const hsk6 = loadHsk6AuditContent();
  const lessonsWithoutSentences = Object.values(hsk6)
    .filter((lesson) => (lesson.content?.sentence || []).length === 0)
    .map((lesson) => lesson.no)
    .sort((a, b) => a - b);

  assert.deepEqual(lessonsWithoutSentences, [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
});

test("B6 HSK6 lessons with sentence source keep complete sentence audio pairs", () => {
  const hsk6 = loadHsk6AuditContent();

  for (const lesson of Object.values(hsk6)) {
    const sentenceItems = lesson.content?.sentence || [];
    const sentenceDir = resolvePublicPath(`audio/HSK6/L${String(lesson.no).padStart(2, "0")}/sentence`);

    if (sentenceItems.length === 0) {
      assert.equal(fs.existsSync(sentenceDir), false, `${lesson.id} should not pretend to have sentence audio`);
      continue;
    }

    assert.equal(sentenceItems.length, 25, `${lesson.id} should have 25 sentence items`);
    assert.ok(fs.existsSync(sentenceDir), `${lesson.id} sentence audio directory should exist`);

    for (const item of sentenceItems) {
      assert.equal(item.stage, "sentence");
      assert.equal(item.item_type, "sentence");

      for (const [kind, audioPath] of [
        ["normal", item.normal_audio || item.audio_normal_path || item.audio?.normal],
        ["slow", item.slow_audio || item.audio_slow_path || item.audio?.slow],
      ]) {
        assert.ok(audioPath, `${item.id} should have ${kind} audio path`);
        assert.ok(audioPath.includes(item.id), `${item.id} ${kind} audio path should include item id`);
        const resolvedAudioPath = resolvePublicPath(audioPath);
        assert.ok(fs.existsSync(resolvedAudioPath), `${item.id} ${kind} audio file should exist`);
        assert.ok(fs.statSync(resolvedAudioPath).size > 0, `${item.id} ${kind} audio file should not be empty`);
      }
    }
  }
});

test("B6 HSK6 word audio references point to existing non-empty files", () => {
  const hsk6 = loadHsk6AuditContent();

  for (const lesson of Object.values(hsk6)) {
    const wordItems = lesson.content?.word || [];
    const expectedWordCount = lesson.id === "hsk6-l28" ? 55 : 40;

    assert.equal(wordItems.length, expectedWordCount, `${lesson.id} should keep its audited word count`);

    for (const item of wordItems) {
      assert.equal(item.stage, "word");
      assert.equal(item.item_type, "word");

      for (const [kind, audioPath] of [
        ["normal", item.normal_audio || item.audio_normal_path || item.audio?.normal],
        ["slow", item.slow_audio || item.audio_slow_path || item.audio?.slow],
      ]) {
        assert.ok(audioPath, `${item.id} should have ${kind} audio path`);
        assert.ok(audioPath.includes(item.id), `${item.id} ${kind} audio path should include item id`);
        const resolvedAudioPath = resolvePublicPath(audioPath);
        assert.ok(fs.existsSync(resolvedAudioPath), `${item.id} ${kind} audio file should exist`);
        assert.ok(fs.statSync(resolvedAudioPath).size > 0, `${item.id} ${kind} audio file should not be empty`);
      }
    }
  }
});
