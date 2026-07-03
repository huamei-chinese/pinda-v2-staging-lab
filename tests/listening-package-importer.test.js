const assert = require("node:assert/strict");
const { pathToFileURL } = require("node:url");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const moduleUrl = pathToFileURL(path.join(repoRoot, "scripts", "import-listening-package.mjs")).href;

async function loadImporter() {
  return import(moduleUrl);
}

function manifest() {
  return {
    schema_version: "pinda_listening_topic_batch_v1",
    module: "daily_listening",
    track: "dialogue",
    level: { id: "intermediate", name_zh: "中级对话", name_vi: "Hoi thoai trung cap" },
    topic: {
      id: "topic-chat-with-chinese-001",
      title_zh: "一个人生活",
      title_vi: "Cuoc song mot minh",
    },
    lessons: [
      {
        id: "daily-001",
        type: "dialogue",
        title_zh: "一个人生活，是自由还是孤单？",
        title_vi: "Song mot minh la tu do hay co don?",
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

test("converts a listening package lesson into the current app episode shape", async () => {
  const { convertManifestToListeningItems } = await loadImporter();
  const items = convertManifestToListeningItems(manifest());

  assert.equal(items.length, 1);
  assert.equal(items[0].id, "ep-001");
  assert.equal(items[0].title, "一个人生活，是自由还是孤单？");
  assert.equal(items[0].titleZh, "一个人生活，是自由还是孤单？");
  assert.equal(items[0].category, "Cuoc song mot minh");
  assert.equal(items[0].categoryZh, "一个人生活");
  assert.equal(items[0].level, "Hoi thoai trung cap");
  assert.equal(items[0].speaker, "A");
  assert.equal(items[0].audioSrc, "/listening-app/audio/main/daily-001-main.mp3");
  assert.deepEqual(items[0].sentences[0], [
    "阿南，你能接受一个人生活吗？",
    "A Nan, ni neng jieshou yi ge ren shenghuo ma?",
    "A Nam, ban co chap nhan song mot minh khong?",
    0,
    3.2,
  ]);
  assert.deepEqual(items[0].keywords[0], ["接受", "jieshou", "chap nhan"]);
});

test("renders import items as buildItem blocks for public app", async () => {
  const { convertManifestToListeningItems, renderListeningItemsForApp } = await loadImporter();
  const source = renderListeningItemsForApp(convertManifestToListeningItems(manifest()));

  assert.match(source, /buildItem\(\{/);
  assert.match(source, /id: "ep-001"/);
  assert.match(source, /audioSrc: "\/listening-app\/audio\/main\/daily-001-main\.mp3"/);
  assert.match(source, /sentences: makeSentences\("ep-001"/);
  assert.match(source, /keywords: makeKeywords\(/);
});
