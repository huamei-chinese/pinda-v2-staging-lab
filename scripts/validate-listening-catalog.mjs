import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pushPinyinGuardError } from "./listening-text-guards.mjs";

const REQUIRED_SCHEMA_VERSION = "pinda_listening_catalog_v1";
const REQUIRED_MODULE = "daily_listening";
const REQUIRED_DIALOGUE_LEVELS = ["beginner", "intermediate", "advanced"];
const REQUIRED_MONOLOGUE_TOPICS = ["speech", "magazine", "psychology", "other"];

function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function requireString(errors, value, label) {
  if (typeof value !== "string" || value.trim().length === 0) {
    errors.push(`${label} is required`);
  }
}

function requireArray(errors, value, label) {
  if (!Array.isArray(value)) {
    errors.push(`${label} must be an array`);
    return [];
  }
  return value;
}

function validateLesson(errors, lesson, pathLabel, seenLessonIds) {
  if (!isObject(lesson)) {
    errors.push(`${pathLabel} lesson must be an object`);
    return;
  }

  requireString(errors, lesson.id, `${pathLabel} lesson id`);
  if (lesson.id) {
    if (seenLessonIds.has(lesson.id)) {
      errors.push(`duplicate lesson id: ${lesson.id}`);
    }
    seenLessonIds.add(lesson.id);
  }

  requireString(errors, lesson.title_zh, `${pathLabel} lesson title_zh`);
  requireString(errors, lesson.title_vi, `${pathLabel} lesson title_vi`);
  if (lesson.main_audio_includes_title !== true) {
    requireString(errors, lesson.title_audio, `${pathLabel} lesson title_audio`);
  }
  requireString(errors, lesson.main_audio, `${pathLabel} lesson main_audio`);
  requireArray(errors, lesson.sentences, `${pathLabel} lesson sentences`);
  requireArray(errors, lesson.keywords, `${pathLabel} lesson keywords`);

  (Array.isArray(lesson.sentences) ? lesson.sentences : []).forEach((sentence, index) => {
    pushPinyinGuardError(errors, sentence?.pinyin, `${pathLabel} lesson sentence ${index + 1} pinyin`);
  });
  (Array.isArray(lesson.keywords) ? lesson.keywords : []).forEach((keyword, index) => {
    pushPinyinGuardError(errors, keyword?.pinyin, `${pathLabel} lesson keyword ${index + 1} pinyin`);
  });
}

function validateTopic(errors, topic, pathLabel, seenLessonIds) {
  if (!isObject(topic)) {
    errors.push(`${pathLabel} topic must be an object`);
    return 0;
  }

  requireString(errors, topic.id, `${pathLabel} topic id`);
  requireString(errors, topic.label_zh, `${pathLabel} topic label_zh`);
  requireString(errors, topic.label_vi, `${pathLabel} topic label_vi`);

  const lessons = requireArray(errors, topic.lessons, `${pathLabel} topic lessons`);
  lessons.forEach((lesson, index) => validateLesson(errors, lesson, `${pathLabel} topic ${topic.id || index}`, seenLessonIds));
  return lessons.length;
}

export function validateListeningCatalog(catalog) {
  const errors = [];
  const seenLessonIds = new Set();

  if (!isObject(catalog)) {
    return { ok: false, errors: ["catalog must be a JSON object"], summary: {} };
  }

  if (catalog.schema_version !== REQUIRED_SCHEMA_VERSION) {
    errors.push(`schema_version must be ${REQUIRED_SCHEMA_VERSION}`);
  }
  if (catalog.module !== REQUIRED_MODULE) {
    errors.push(`module must be ${REQUIRED_MODULE}`);
  }
  requireString(errors, catalog.content_owner, "content_owner");

  const tracks = requireArray(errors, catalog.tracks, "tracks");
  const dialogue = tracks.find((track) => track?.id === "dialogue");
  const monologue = tracks.find((track) => track?.id === "monologue");

  if (!dialogue) {
    errors.push("dialogue track is required");
  }
  if (!monologue) {
    errors.push("monologue track is required");
  }

  let dialogueLessonCount = 0;
  if (dialogue) {
    const levels = requireArray(errors, dialogue.levels, "dialogue levels");
    const levelIds = levels.map((level) => level?.id);
    if (JSON.stringify(levelIds) !== JSON.stringify(REQUIRED_DIALOGUE_LEVELS)) {
      errors.push(`dialogue levels must be ${REQUIRED_DIALOGUE_LEVELS.join(", ")}`);
    }
    levels.forEach((level, index) => {
      if (!isObject(level)) {
        errors.push(`dialogue level ${index + 1} must be an object`);
        return;
      }
      requireString(errors, level.id, `dialogue level ${index + 1} id`);
      requireString(errors, level.label_zh, `dialogue level ${level.id || index + 1} label_zh`);
      requireString(errors, level.label_vi, `dialogue level ${level.id || index + 1} label_vi`);
      const topics = requireArray(errors, level.topics, `dialogue level ${level.id || index + 1} topics`);
      topics.forEach((topic, topicIndex) => {
        dialogueLessonCount += validateTopic(errors, topic, `dialogue level ${level.id || index + 1} topic ${topicIndex + 1}`, seenLessonIds);
      });
    });
  }

  let monologueLessonCount = 0;
  if (monologue) {
    if ("levels" in monologue) {
      errors.push("monologue track must not have levels");
    }
    const topics = requireArray(errors, monologue.topics, "monologue topics");
    const topicIds = topics.map((topic) => topic?.id);
    if (JSON.stringify(topicIds) !== JSON.stringify(REQUIRED_MONOLOGUE_TOPICS)) {
      errors.push(`monologue topics must be ${REQUIRED_MONOLOGUE_TOPICS.join(", ")}`);
    }
    topics.forEach((topic, index) => {
      monologueLessonCount += validateTopic(errors, topic, `monologue topic ${index + 1}`, seenLessonIds);
    });
  }

  return {
    ok: errors.length === 0,
    errors,
    summary: {
      tracks: tracks.length,
      dialogue_levels: dialogue?.levels?.length || 0,
      monologue_topics: monologue?.topics?.length || 0,
      lessons: dialogueLessonCount + monologueLessonCount,
    },
  };
}

export function validateListeningCatalogPath(catalogPath) {
  if (!catalogPath) {
    return { ok: false, errors: ["catalog path is required"], summary: {} };
  }
  if (!fs.existsSync(catalogPath)) {
    return { ok: false, errors: [`catalog path does not exist: ${catalogPath}`], summary: {} };
  }
  try {
    const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
    return validateListeningCatalog(catalog);
  } catch (error) {
    return { ok: false, errors: [`catalog JSON is invalid: ${error.message}`], summary: {} };
  }
}

async function runCli(argv) {
  const catalogPath = argv[2] || path.join(process.cwd(), "public", "listening-app", "data", "listening-catalog.json");
  const result = validateListeningCatalogPath(path.resolve(catalogPath));
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = result.ok ? 0 : 1;
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  runCli(process.argv);
}
