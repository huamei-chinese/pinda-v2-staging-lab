const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

require("ts-node/register/transpile-only");

const { ContentService } = require("../src/content/content.service");

const root = path.join(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const contentServiceSource = fs.readFileSync(path.join(root, "src", "content", "content.service.ts"), "utf8");
const netlifyApiSource = fs.readFileSync(path.join(root, "netlify", "functions", "api.mjs"), "utf8");

function createContentServiceWithRows(rows) {
  return new ContentService({
    async query(sql) {
      if (sql.includes("FROM daily_theme_locks")) return { rows };
      return { rows: [] };
    },
  });
}

test("daily theme admin locks merge the 27-topic client catalog and hide stale legacy ids", async () => {
  const service = createContentServiceWithRows([
    {
      theme_id: "greeting_introduction",
      title_vi: "Chào hỏi và giới thiệu",
      sort_order: 1,
      free_item_limit: 6,
      free_word_limit: 0,
      free_sentence_limit: 6,
      locked_for_free: true,
      updated_at: "2026-07-15T00:00:00.000Z",
    },
  ]);

  const locks = await service.listDailyLocks();

  assert.equal(locks.length, 27);
  assert.equal(locks.some((item) => item.themeId === "greeting_introduction"), false);
  assert.equal(locks[0].themeId, "hf-upgrade-bai01");

  const migratedLegacyLock = locks.find((item) => item.themeId === "hf-topic-unit-bai01");
  assert.equal(migratedLegacyLock.lockedForFree, true);
  assert.equal(migratedLegacyLock.freeSentenceLimit, 6);
});

test("public daily locks expose legacy database settings using current client ids", async () => {
  const service = createContentServiceWithRows([
    {
      theme_id: "greeting_introduction",
      free_item_limit: 0,
      free_word_limit: 0,
      free_sentence_limit: 4,
      locked_for_free: false,
    },
  ]);

  const locks = await service.listPublicDailyLocks();

  assert.deepEqual(locks, [
    {
      themeId: "hf-topic-unit-bai01",
      freeItemLimit: 4,
      lockedForFree: false,
    },
  ]);
});

test("word and sentence limits stay independent for HSK and daily access rules", async () => {
  const service = new ContentService({
    async query(sql) {
      if (sql.includes("FROM hsk_lesson_locks")) {
        return {
          rows: [{
            lesson_id: "hsk2-l1",
            free_item_limit: 8,
            free_word_limit: 0,
            free_sentence_limit: 8,
            locked_for_free: false,
          }],
        };
      }
      if (sql.includes("FROM daily_theme_locks")) {
        return {
          rows: [{
            theme_id: "hf-upgrade-bai01",
            free_item_limit: 5,
            free_word_limit: 5,
            free_sentence_limit: 0,
            locked_for_free: false,
          }],
        };
      }
      return { rows: [] };
    },
  });

  const rules = await service.listPublicLearningAccessRules();
  const hskRule = rules.hskLessonLocks.find((item) => item.lessonId === "hsk2-l1");
  const dailyRule = rules.dailyThemeLocks.find((item) => item.themeId === "hf-upgrade-bai01");

  assert.equal(hskRule.freeWordLimit, 0);
  assert.equal(hskRule.freeSentenceLimit, 8);
  assert.equal(dailyRule.freeWordLimit, 5);
  assert.equal(dailyRule.freeSentenceLimit, 0);
});

test("admin content loads the 27-topic catalog before rendering daily lock rows", () => {
  assert.match(appSource, /await ensureHighFrequencyTopicsLoaded\(\{ silent: true \}\);/);
  assert.match(appSource, /const HIGH_FREQUENCY_TOPICS_SCRIPT_SRC = "lesson-high-frequency-v1-27-topics\.js"/);
  assert.match(appSource, /hskLessonAccessRules:\s*\{\}/);
  assert.match(appSource, /data-admin-content-word-limit/);
  assert.match(appSource, /data-admin-content-sentence-limit/);
  assert.match(appSource, /data-admin-content-daily-word-limit/);
});

test("Netlify daily locks use the same static catalog and legacy alias merge", () => {
  assert.match(contentServiceSource, /listStaticDailyThemeCatalog/);
  assert.match(contentServiceSource, /lesson-high-frequency-v1-27-topics\.js/);
  assert.match(contentServiceSource, /getDailyThemeLegacyAliasMap/);
  assert.match(netlifyApiSource, /listStaticDailyThemeCatalog/);
  assert.match(netlifyApiSource, /lesson-high-frequency-v1-27-topics\.js/);
  assert.match(netlifyApiSource, /getDailyThemeLegacyAliasMap/);
});
