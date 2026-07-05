const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { pathToFileURL } = require("node:url");

const repoRoot = path.join(__dirname, "..");
const catalogPath = path.join(repoRoot, "public", "listening-app", "data", "listening-catalog.json");
const listeningRoot = path.join(repoRoot, "public", "listening-app");
const appPath = path.join(repoRoot, "public", "app.js");
const validatorUrl = pathToFileURL(path.join(repoRoot, "scripts", "validate-listening-catalog.mjs")).href;

function readCatalog() {
  assert.equal(fs.existsSync(catalogPath), true, "listening catalog should exist outside public/app.js");
  return JSON.parse(fs.readFileSync(catalogPath, "utf8"));
}

function countCatalogLessons(catalog) {
  return catalog.tracks.reduce((total, track) => {
    if (track.id === "dialogue") {
      return total + track.levels.reduce((levelTotal, level) =>
        levelTotal + level.topics.reduce((topicTotal, topic) => topicTotal + topic.lessons.length, 0), 0);
    }
    return total + track.topics.reduce((topicTotal, topic) => topicTotal + topic.lessons.length, 0);
  }, 0);
}

function catalogLessons(catalog) {
  return catalog.tracks.flatMap((track) => {
    if (track.id === "dialogue") {
      return track.levels.flatMap((level) => level.topics.flatMap((topic) => topic.lessons));
    }
    return track.topics.flatMap((topic) => topic.lessons);
  });
}

test("listening catalog encodes the approved page hierarchy", () => {
  const catalog = readCatalog();

  assert.equal(catalog.schema_version, "pinda_listening_catalog_v1");
  assert.equal(catalog.module, "daily_listening");
  assert.equal(catalog.content_owner, "material_factory");

  const dialogue = catalog.tracks.find((track) => track.id === "dialogue");
  assert.ok(dialogue, "dialogue track should exist");
  assert.deepEqual(
    dialogue.levels.map((level) => level.id),
    ["beginner", "intermediate", "advanced"],
  );
  dialogue.levels.forEach((level) => {
    assert.ok(Array.isArray(level.topics), `dialogue level ${level.id} should own topics`);
  });

  const monologue = catalog.tracks.find((track) => track.id === "monologue");
  assert.ok(monologue, "monologue track should exist");
  assert.equal("levels" in monologue, false, "monologue should not have a level layer");
  assert.deepEqual(
    monologue.topics.map((topic) => topic.id),
    ["speech", "magazine", "psychology", "other"],
  );
  monologue.topics.forEach((topic) => {
    assert.ok(Array.isArray(topic.lessons), `monologue topic ${topic.id} should directly own lessons`);
  });
});

test("listening catalog validator accepts the checked-in catalog", async () => {
  const { validateListeningCatalog } = await import(validatorUrl);
  const result = validateListeningCatalog(readCatalog());

  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(result.summary.tracks, 2);
  assert.equal(result.summary.dialogue_levels, 3);
  assert.equal(result.summary.monologue_topics, 4);
  assert.equal(result.summary.lessons, countCatalogLessons(readCatalog()));
});

test("listening catalog validator rejects pinyin mojibake question marks", async () => {
  const { validateListeningCatalog } = await import(validatorUrl);
  const catalog = readCatalog();
  const lesson = catalog.tracks[0].levels[0].topics[0].lessons[0];
  lesson.sentences[0].pinyin = "H?o, s?o m? k? y? ma?";

  const result = validateListeningCatalog(catalog);

  assert.equal(result.ok, false);
  assert.match(result.errors.join("\n"), /suspicious pinyin mojibake/);
});

test("listening catalog audio references exist in the isolated catalog audio folder", () => {
  const lessons = catalogLessons(readCatalog());
  for (const lesson of lessons) {
    assert.match(lesson.main_audio, /^audio\/catalog\//);
    assert.equal(fs.existsSync(path.join(listeningRoot, lesson.main_audio)), true, `missing main audio: ${lesson.main_audio}`);
    if (lesson.main_audio_includes_title !== true) {
      assert.match(lesson.title_audio, /^audio\/catalog\//);
      assert.equal(fs.existsSync(path.join(listeningRoot, lesson.title_audio)), true, `missing title audio: ${lesson.title_audio}`);
    }
    for (const keyword of lesson.keywords) {
      assert.match(keyword.audio, /^audio\/catalog\//);
      assert.equal(fs.existsSync(path.join(listeningRoot, keyword.audio)), true, `missing keyword audio: ${keyword.audio}`);
    }
  }
});

test("imported catalog topic ids stay out of the UI source file", () => {
  const appSource = fs.readFileSync(appPath, "utf8");

  assert.doesNotMatch(appSource, /topic-chat-with-chinese-001/);
  assert.doesNotMatch(appSource, /topic-newspaper-entertainment-001/);
});
