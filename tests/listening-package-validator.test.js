const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const { pathToFileURL } = require("node:url");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const packageJson = require("../package.json");
const moduleUrl = pathToFileURL(path.join(repoRoot, "scripts", "validate-listening-package.mjs")).href;

async function loadValidator() {
  return import(moduleUrl);
}

function validManifest() {
  return {
    schema_version: "pinda_listening_topic_batch_v1",
    module: "daily_listening",
    track: "dialogue",
    level: {
      id: "intermediate",
      name_zh: "中级对话",
      name_vi: "Hoi thoai trung cap",
    },
    topic: {
      id: "topic-life-alone",
      title_zh: "一个人生活",
      title_vi: "Cuoc song mot minh",
    },
    lessons: [
      {
        id: "daily-001",
        type: "dialogue",
        title_zh: "一个人生活，是自由还是孤单？",
        title_vi: "Song mot minh la tu do hay co don?",
        main_audio_includes_title: true,
        main_audio: "audio/main/daily-001-main.mp3",
        sentences: [
          {
            id: "daily-001-s001",
            order: 1,
            speaker: "A",
            zh: "阿南，你能接受一个人生活吗？",
            pinyin: "A Nan, ni neng jieshou yi ge ren shenghuo ma?",
            vi: "A Nam, ban co chap nhan song mot minh khong?",
            start: 0,
            end: 3.2,
          },
        ],
        keywords: [
          {
            id: "daily-001-k001",
            order: 1,
            zh: "接受",
            pinyin: "jieshou",
            vi: "chap nhan",
            audio: "audio/words/daily-001-keyword-001.mp3",
          },
        ],
      },
    ],
  };
}

test("package exposes a listening package upload gate command", () => {
  assert.equal(packageJson.scripts["validate:listening-package"], "node ./scripts/validate-listening-package.mjs");
});

test("package exposes a listening package importer command", () => {
  assert.equal(packageJson.scripts["import:listening-package"], "node ./scripts/import-listening-package.mjs");
});

test("accepts a complete topic batch manifest with referenced audio", async () => {
  const { validateListeningManifest } = await loadValidator();
  const result = validateListeningManifest(validManifest(), new Set([
    "audio/main/daily-001-main.mp3",
    "audio/words/daily-001-keyword-001.mp3",
  ]));

  assert.equal(result.ok, true);
  assert.deepEqual(result.summary, {
    track: "dialogue",
    level_id: "intermediate",
    topic_id: "topic-life-alone",
    lesson_count: 1,
    sentence_count: 1,
    keyword_count: 1,
  });
});

test("rejects title and intro lines inside sentence subtitles", async () => {
  const { validateListeningManifest } = await loadValidator();
  const manifest = validManifest();
  manifest.lessons[0].sentences[0].zh = "请听今天的对话：一个人生活，是自由还是孤单？";
  manifest.lessons[0].sentences[0].pinyin = "qing ting jintian de duihua";
  manifest.lessons[0].sentences[0].vi = "Hay nghe doan hoi thoai hom nay";

  const result = validateListeningManifest(manifest, new Set([
    "audio/main/daily-001-main.mp3",
    "audio/words/daily-001-keyword-001.mp3",
  ]));

  assert.equal(result.ok, false);
  assert.match(result.errors.join("\n"), /title or intro text must not be in sentences/);
});

test("allows short real dialogue greetings that appear inside a longer lesson title", async () => {
  const { validateListeningManifest } = await loadValidator();
  const manifest = validManifest();
  manifest.lessons[0].title_zh = "说完“你好”以后不知道说什么";
  manifest.lessons[0].title_vi = "Khong biet noi gi sau cau xin chao";
  manifest.lessons[0].sentences[0].zh = "你好。";
  manifest.lessons[0].sentences[0].pinyin = "Ni hao.";
  manifest.lessons[0].sentences[0].vi = "Xin chao.";

  const result = validateListeningManifest(manifest, new Set([
    "audio/main/daily-001-main.mp3",
    "audio/words/daily-001-keyword-001.mp3",
  ]));

  assert.equal(result.ok, true);
});

test("requires every lesson audio to include or reference the spoken title", async () => {
  const { validateListeningManifest } = await loadValidator();
  const manifest = validManifest();
  delete manifest.lessons[0].main_audio_includes_title;

  const result = validateListeningManifest(manifest, new Set([
    "audio/main/daily-001-main.mp3",
    "audio/words/daily-001-keyword-001.mp3",
  ]));

  assert.equal(result.ok, false);
  assert.match(result.errors.join("\n"), /main_audio_includes_title must be true or title_audio is required/);
});

test("accepts a separate title audio file when main audio starts with body text", async () => {
  const { validateListeningManifest } = await loadValidator();
  const manifest = validManifest();
  manifest.lessons[0].main_audio_includes_title = false;
  manifest.lessons[0].title_audio = "audio/title/daily-001-title.mp3";

  const result = validateListeningManifest(manifest, new Set([
    "audio/title/daily-001-title.mp3",
    "audio/main/daily-001-main.mp3",
    "audio/words/daily-001-keyword-001.mp3",
  ]));

  assert.equal(result.ok, true);
});

test("rejects audio paths that can escape the package audio folder", async () => {
  const { validateListeningManifest } = await loadValidator();
  const manifest = validManifest();
  manifest.lessons[0].main_audio = "../outside.mp3";
  manifest.lessons[0].keywords[0].audio = "audio/../outside-keyword.mp3";

  const result = validateListeningManifest(manifest, new Set([
    "../outside.mp3",
    "audio/../outside-keyword.mp3",
  ]));

  assert.equal(result.ok, false);
  assert.match(result.errors.join("\n"), /main_audio must be a relative audio\/ path without traversal/);
  assert.match(result.errors.join("\n"), /keyword 1 audio must be a relative audio\/ path without traversal/);
});

test("rejects unsupported level ids for dialogue and monologue packages", async () => {
  const { validateListeningManifest } = await loadValidator();
  const dialogueManifest = validManifest();
  dialogueManifest.level.id = "magazine";

  const monologueManifest = validManifest();
  monologueManifest.track = "monologue";
  monologueManifest.lessons[0].type = "monologue";
  delete monologueManifest.lessons[0].sentences[0].speaker;
  monologueManifest.level.id = "intermediate";

  const files = new Set([
    "audio/main/daily-001-main.mp3",
    "audio/words/daily-001-keyword-001.mp3",
  ]);
  const dialogueResult = validateListeningManifest(dialogueManifest, files);
  const monologueResult = validateListeningManifest(monologueManifest, files);

  assert.equal(dialogueResult.ok, false);
  assert.match(dialogueResult.errors.join("\n"), /level id must be beginner, intermediate, or advanced/);
  assert.equal(monologueResult.ok, false);
  assert.match(monologueResult.errors.join("\n"), /level id must be speech, magazine, psychology, or other/);
});

test("validates a real zipped topic batch package", async () => {
  const { validateListeningPackagePath } = await loadValidator();
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "listening-package-test-"));
  const packageRoot = path.join(tempRoot, "package");
  const zipPath = path.join(tempRoot, "package.zip");
  fs.mkdirSync(path.join(packageRoot, "audio", "main"), { recursive: true });
  fs.mkdirSync(path.join(packageRoot, "audio", "words"), { recursive: true });
  fs.writeFileSync(path.join(packageRoot, "manifest.json"), JSON.stringify(validManifest(), null, 2), "utf8");
  fs.writeFileSync(path.join(packageRoot, "audio", "main", "daily-001-main.mp3"), "main-audio");
  fs.writeFileSync(path.join(packageRoot, "audio", "words", "daily-001-keyword-001.mp3"), "word-audio");

  const zipResult = spawnSync("powershell.exe", [
    "-NoProfile",
    "-Command",
    "& { param($source,$dest) Compress-Archive -Path $source -DestinationPath $dest -Force }",
    path.join(packageRoot, "*"),
    zipPath,
  ], { encoding: "utf8" });
  assert.equal(zipResult.status, 0, zipResult.stderr || zipResult.stdout);

  const result = validateListeningPackagePath(zipPath);

  assert.equal(result.ok, true);
  assert.equal(result.summary.lesson_count, 1);
});
