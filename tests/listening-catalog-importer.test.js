const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { pathToFileURL } = require("node:url");

const repoRoot = path.join(__dirname, "..");
const importerUrl = pathToFileURL(path.join(repoRoot, "scripts", "import-listening-package.mjs")).href;
const validatorUrl = pathToFileURL(path.join(repoRoot, "scripts", "validate-listening-catalog.mjs")).href;
const catalogPath = path.join(repoRoot, "public", "listening-app", "data", "listening-catalog.json");

function readBaseCatalog() {
  return JSON.parse(fs.readFileSync(catalogPath, "utf8"));
}

function emptyCatalog() {
  const catalog = readBaseCatalog();
  const dialogue = catalog.tracks.find((track) => track.id === "dialogue");
  dialogue.levels.forEach((level) => {
    level.topics = [];
  });
  const monologue = catalog.tracks.find((track) => track.id === "monologue");
  monologue.topics.forEach((topic) => {
    topic.lessons = [];
    delete topic.source_topic_id;
    delete topic.source_topic_title_zh;
    delete topic.source_topic_title_vi;
  });
  return catalog;
}

function lesson(id, type, titleZh) {
  return {
    id,
    type,
    title_zh: titleZh,
    title_vi: `${titleZh} vi`,
    main_audio_includes_title: true,
    main_audio: `audio/main/${id}-main.mp3`,
    sentences: [
      {
        id: `${id}-s001`,
        order: 1,
        speaker: type === "dialogue" ? "A" : undefined,
        zh: "你好。",
        pinyin: "Ni hao.",
        vi: "Xin chao.",
        start: 0,
        end: 1.5,
      },
    ],
    keywords: [
      {
        id: `${id}-k001`,
        order: 1,
        zh: "你好",
        pinyin: "ni hao",
        vi: "xin chao",
        audio: `audio/words/${id}-keyword-001.mp3`,
      },
    ],
  };
}

function manifest(track, topicId, topicZh, levelId = "intermediate") {
  return {
    schema_version: "pinda_listening_topic_batch_v1",
    module: "daily_listening",
    track,
    level: { id: levelId, name_zh: "中级", name_vi: "Trung cấp" },
    topic: { id: topicId, title_zh: topicZh, title_vi: `${topicZh} vi` },
    lessons: [lesson("daily-001", track, `${topicZh} 第一课`)],
  };
}

test("catalog importer keeps dialogue levels and writes monologue directly under topic", async () => {
  const { mergeManifestIntoCatalog } = await import(importerUrl);
  const { validateListeningCatalog } = await import(validatorUrl);

  let catalog = emptyCatalog();
  catalog = mergeManifestIntoCatalog(catalog, manifest("dialogue", "topic-chat", "生活对话"));
  catalog = mergeManifestIntoCatalog(catalog, manifest("monologue", "topic-newspaper-entertainment-001", "娱乐杂志"));

  const dialogue = catalog.tracks.find((track) => track.id === "dialogue");
  const intermediate = dialogue.levels.find((level) => level.id === "intermediate");
  assert.equal(intermediate.topics.length, 1);
  assert.equal(intermediate.topics[0].id, "topic-chat");
  assert.equal(intermediate.topics[0].lessons[0].id, "dialogue-intermediate-topic-chat-daily-001");

  const monologue = catalog.tracks.find((track) => track.id === "monologue");
  assert.equal("levels" in monologue, false);
  const magazine = monologue.topics.find((topic) => topic.id === "magazine");
  assert.equal(magazine.lessons.length, 1);
  assert.equal(magazine.lessons[0].id, "monologue-magazine-topic-newspaper-entertainment-001-daily-001");

  assert.equal(validateListeningCatalog(catalog).ok, true);
});

test("catalog importer can store dialogue and monologue source lessons with the same source id", async () => {
  const { mergeManifestIntoCatalog } = await import(importerUrl);
  const catalog = mergeManifestIntoCatalog(
    mergeManifestIntoCatalog(emptyCatalog(), manifest("dialogue", "topic-chat", "生活对话")),
    manifest("monologue", "topic-newspaper-entertainment-001", "娱乐杂志"),
  );

  const lessonIds = catalog.tracks.flatMap((track) => {
    if (track.id === "dialogue") {
      return track.levels.flatMap((level) => level.topics.flatMap((topic) => topic.lessons.map((lesson) => lesson.id)));
    }
    return track.topics.flatMap((topic) => topic.lessons.map((lesson) => lesson.id));
  });

  assert.equal(new Set(lessonIds).size, 2);
  assert.ok(lessonIds.includes("dialogue-intermediate-topic-chat-daily-001"));
  assert.ok(lessonIds.includes("monologue-magazine-topic-newspaper-entertainment-001-daily-001"));
});

test("catalog importer uses monologue level id as the content category", async () => {
  const { mergeManifestIntoCatalog } = await import(importerUrl);
  const catalog = mergeManifestIntoCatalog(
    emptyCatalog(),
    manifest("monologue", "topic-time-management-001", "Time management", "psychology"),
  );

  const monologue = catalog.tracks.find((track) => track.id === "monologue");
  const psychology = monologue.topics.find((topic) => topic.id === "psychology");
  const other = monologue.topics.find((topic) => topic.id === "other");

  assert.equal(psychology.lessons.length, 1);
  assert.equal(psychology.source_topic_id, "topic-time-management-001");
  assert.equal(psychology.lessons[0].id, "monologue-psychology-topic-time-management-001-daily-001");
  assert.equal(other.lessons.length, 0);
});

test("catalog importer can replace the current container to remove old test content", async () => {
  const { mergeManifestIntoCatalog } = await import(importerUrl);
  let catalog = emptyCatalog();

  catalog = mergeManifestIntoCatalog(catalog, manifest("dialogue", "topic-old", "Old dialogue"));
  catalog = mergeManifestIntoCatalog(catalog, manifest("dialogue", "topic-new", "New dialogue"), {
    replaceContainer: true,
  });

  const dialogue = catalog.tracks.find((track) => track.id === "dialogue");
  const intermediate = dialogue.levels.find((level) => level.id === "intermediate");
  assert.deepEqual(intermediate.topics.map((topic) => topic.id), ["topic-new"]);

  catalog = mergeManifestIntoCatalog(catalog, manifest("monologue", "topic-old-magazine", "Old magazine"));
  catalog = mergeManifestIntoCatalog(catalog, manifest("monologue", "topic-new-magazine", "New magazine"), {
    replaceContainer: true,
  });

  const monologue = catalog.tracks.find((track) => track.id === "monologue");
  const magazine = monologue.topics.find((topic) => topic.id === "magazine");
  assert.equal(magazine.source_topic_id, "topic-new-magazine");
  assert.equal(magazine.lessons.length, 1);
  assert.equal(magazine.lessons[0].id, "monologue-magazine-topic-new-magazine-daily-001");
});
