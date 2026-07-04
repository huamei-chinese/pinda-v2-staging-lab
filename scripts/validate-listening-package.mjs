import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REQUIRED_SCHEMA_VERSION = "pinda_listening_topic_batch_v1";
const REQUIRED_MODULE = "daily_listening";
const ALLOWED_TRACKS = new Set(["dialogue", "monologue"]);
const ALLOWED_DIALOGUE_LEVELS = new Set(["beginner", "intermediate", "advanced"]);
const ALLOWED_MONOLOGUE_LEVELS = new Set(["speech", "magazine", "psychology", "other"]);
const FORBIDDEN_SENTENCE_PATTERNS = [
  /请听今天/,
  /今天的(对话|短文|独白)/,
  /主题[一二三四五六七八九十\d]/,
  /第[一二三四五六七八九十\d]+课/,
  /\bBài\s*\d+/i,
  /\bChu\s*de\b/i,
  /\bChủ\s*đề\b/i,
  /\bLesson\b/i,
  /\bTopic\b/i,
];

function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isFiniteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function normalizeAssetPath(value) {
  return String(value || "").replace(/\\/g, "/").replace(/^\/+/, "");
}

function isSafeAudioPath(value) {
  const raw = String(value || "").replace(/\\/g, "/").trim();
  if (!raw) return false;
  if (/^[a-z][a-z0-9+.-]*:/i.test(raw)) return false;
  if (raw.startsWith("/")) return false;
  const parts = raw.split("/").filter(Boolean);
  return parts[0] === "audio" && !parts.includes("..");
}

function requireString(errors, value, label) {
  if (!isNonEmptyString(value)) {
    errors.push(`${label} is required`);
  }
}

function collectFiles(root) {
  const files = new Set();
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      files.add(path.relative(root, fullPath).replace(/\\/g, "/"));
    }
  }

  return files;
}

function pushMissingAudio(errors, availableFiles, audioPath, label = "audio") {
  const normalized = normalizeAssetPath(audioPath);
  if (!normalized) return;
  if (!isSafeAudioPath(audioPath)) {
    errors.push(`${label} must be a relative audio/ path without traversal`);
    return;
  }
  if (availableFiles && !availableFiles.has(normalized)) {
    errors.push(`missing audio file: ${normalized}`);
  }
}

function sameNormalizedText(a, b) {
  const normalize = (value) => String(value || "").replace(/[：:，,。！？?！\s"'“”‘’]/g, "").toLowerCase();
  const left = normalize(a);
  const right = normalize(b);
  if (!left || !right) return false;
  if (left === right) return true;
  return left.length >= 8 && right.length >= 8 && (left.includes(right) || right.includes(left));
}

function sentenceHasForbiddenIntroText(sentence) {
  const fields = [sentence?.zh, sentence?.pinyin, sentence?.vi].filter(Boolean);
  return fields.some((field) => FORBIDDEN_SENTENCE_PATTERNS.some((pattern) => pattern.test(String(field))));
}

function sentenceMatchesLessonTitle(lesson, sentence) {
  const fields = [sentence?.zh, sentence?.pinyin, sentence?.vi].filter(Boolean);
  return fields.some((field) =>
    sameNormalizedText(field, lesson?.title_zh) ||
    sameNormalizedText(field, lesson?.title_vi)
  );
}

function sentenceLooksLikeTitleOrIntro(lesson, sentence) {
  return sentenceHasForbiddenIntroText(sentence) || sentenceMatchesLessonTitle(lesson, sentence);
}

function validateSentence(errors, lesson, sentence, sentenceIndex, track) {
  const label = `lesson ${lesson.id || sentenceIndex + 1} sentence ${sentenceIndex + 1}`;
  requireString(errors, sentence?.id, `${label} id`);
  if (sentence?.order !== sentenceIndex + 1) {
    errors.push(`${label} order must be ${sentenceIndex + 1}`);
  }
  if (track === "dialogue") {
    requireString(errors, sentence?.speaker, `${label} speaker`);
  }
  requireString(errors, sentence?.zh, `${label} zh`);
  requireString(errors, sentence?.pinyin, `${label} pinyin`);
  requireString(errors, sentence?.vi, `${label} vi`);
  if (!isFiniteNumber(sentence?.start)) {
    errors.push(`${label} start must be a number`);
  }
  if (!isFiniteNumber(sentence?.end)) {
    errors.push(`${label} end must be a number`);
  }
  if (isFiniteNumber(sentence?.start) && isFiniteNumber(sentence?.end) && sentence.end <= sentence.start) {
    errors.push(`${label} end must be greater than start`);
  }
  const allowLaterTitleOverlap =
    process.env.PINDA_ALLOW_TITLE_OVERLAP_AFTER_FIRST === "1" &&
    sentenceIndex > 0 &&
    !sentenceHasForbiddenIntroText(sentence);
  if (sentenceLooksLikeTitleOrIntro(lesson, sentence) && !(allowLaterTitleOverlap && sentenceMatchesLessonTitle(lesson, sentence))) {
    errors.push(`${label} title or intro text must not be in sentences`);
  }
}

function validateKeyword(errors, availableFiles, lesson, keyword, keywordIndex) {
  const label = `lesson ${lesson.id || keywordIndex + 1} keyword ${keywordIndex + 1}`;
  requireString(errors, keyword?.id, `${label} id`);
  if (keyword?.order !== keywordIndex + 1) {
    errors.push(`${label} order must be ${keywordIndex + 1}`);
  }
  requireString(errors, keyword?.zh, `${label} zh`);
  requireString(errors, keyword?.pinyin, `${label} pinyin`);
  requireString(errors, keyword?.vi, `${label} vi`);
  requireString(errors, keyword?.audio, `${label} audio`);
  pushMissingAudio(errors, availableFiles, keyword?.audio, `${label} audio`);
}

function validateLesson(errors, availableFiles, lesson, lessonIndex, track) {
  const label = `lesson ${lessonIndex + 1}`;
  requireString(errors, lesson?.id, `${label} id`);
  if (!ALLOWED_TRACKS.has(lesson?.type)) {
    errors.push(`${label} type must be dialogue or monologue`);
  }
  if (lesson?.type && lesson.type !== track) {
    errors.push(`${label} type must match manifest track`);
  }
  requireString(errors, lesson?.title_zh, `${label} title_zh`);
  requireString(errors, lesson?.title_vi, `${label} title_vi`);
  if (lesson?.main_audio_includes_title !== true) {
    requireString(errors, lesson?.title_audio, `${label} title_audio`);
    if (!isNonEmptyString(lesson?.title_audio)) {
      errors.push(`${label} main_audio_includes_title must be true or title_audio is required`);
    }
  }
  if (isNonEmptyString(lesson?.title_audio)) {
    pushMissingAudio(errors, availableFiles, lesson.title_audio, `${label} title_audio`);
  }
  requireString(errors, lesson?.main_audio, `${label} main_audio`);
  pushMissingAudio(errors, availableFiles, lesson?.main_audio, `${label} main_audio`);

  if (!Array.isArray(lesson?.sentences) || lesson.sentences.length === 0) {
    errors.push(`${label} sentences must be a non-empty array`);
  } else {
    lesson.sentences.forEach((sentence, index) => validateSentence(errors, lesson, sentence, index, track));
  }

  if (!Array.isArray(lesson?.keywords) || lesson.keywords.length === 0) {
    errors.push(`${label} keywords must be a non-empty array`);
  } else {
    lesson.keywords.forEach((keyword, index) => validateKeyword(errors, availableFiles, lesson, keyword, index));
  }
}

export function validateListeningManifest(manifest, availableFiles = null) {
  const errors = [];

  if (!isObject(manifest)) {
    return { ok: false, errors: ["manifest must be a JSON object"], summary: {} };
  }

  if (manifest.schema_version !== REQUIRED_SCHEMA_VERSION) {
    errors.push(`schema_version must be ${REQUIRED_SCHEMA_VERSION}`);
  }
  if (manifest.module !== REQUIRED_MODULE) {
    errors.push(`module must be ${REQUIRED_MODULE}`);
  }
  if (!ALLOWED_TRACKS.has(manifest.track)) {
    errors.push("track must be dialogue or monologue");
  }

  if (!isObject(manifest.level)) {
    errors.push("level object is required");
  } else {
    requireString(errors, manifest.level.id, "level id");
    requireString(errors, manifest.level.name_zh, "level name_zh");
    requireString(errors, manifest.level.name_vi, "level name_vi");
    if (manifest.track === "dialogue" && !ALLOWED_DIALOGUE_LEVELS.has(manifest.level.id)) {
      errors.push("level id must be beginner, intermediate, or advanced");
    }
    if (manifest.track === "monologue" && !ALLOWED_MONOLOGUE_LEVELS.has(manifest.level.id)) {
      errors.push("level id must be speech, magazine, psychology, or other");
    }
  }

  if (!isObject(manifest.topic)) {
    errors.push("topic object is required");
  } else {
    requireString(errors, manifest.topic.id, "topic id");
    requireString(errors, manifest.topic.title_zh, "topic title_zh");
    requireString(errors, manifest.topic.title_vi, "topic title_vi");
  }

  if (!Array.isArray(manifest.lessons) || manifest.lessons.length === 0) {
    errors.push("lessons must be a non-empty array");
  } else {
    const lessonIds = new Set();
    manifest.lessons.forEach((lesson, index) => {
      if (lesson?.id) {
        if (lessonIds.has(lesson.id)) {
          errors.push(`duplicate lesson id: ${lesson.id}`);
        }
        lessonIds.add(lesson.id);
      }
      validateLesson(errors, availableFiles, lesson, index, manifest.track);
    });
  }

  const lessons = Array.isArray(manifest.lessons) ? manifest.lessons : [];
  const summary = {
    track: manifest.track || "",
    level_id: isObject(manifest.level) ? manifest.level.id || "" : "",
    topic_id: isObject(manifest.topic) ? manifest.topic.id || "" : "",
    lesson_count: lessons.length,
    sentence_count: lessons.reduce((total, lesson) => total + (Array.isArray(lesson?.sentences) ? lesson.sentences.length : 0), 0),
    keyword_count: lessons.reduce((total, lesson) => total + (Array.isArray(lesson?.keywords) ? lesson.keywords.length : 0), 0),
  };

  return { ok: errors.length === 0, errors, summary };
}

export function validateListeningPackageFolder(folderPath) {
  const manifestPath = path.join(folderPath, "manifest.json");
  if (!fs.existsSync(manifestPath)) {
    return { ok: false, errors: ["manifest.json is required at package root"], summary: {} };
  }

  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    return validateListeningManifest(manifest, collectFiles(folderPath));
  } catch (error) {
    return { ok: false, errors: [`manifest.json is invalid JSON: ${error.message}`], summary: {} };
  }
}

function expandZipToTemp(zipPath) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "pinda-listening-package-"));
  const result = spawnSync("powershell.exe", [
    "-NoProfile",
    "-Command",
    "& { param($zip,$dest) Expand-Archive -LiteralPath $zip -DestinationPath $dest -Force }",
    zipPath,
    tempDir,
  ], { encoding: "utf8" });

  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || "Expand-Archive failed").trim());
  }

  return tempDir;
}

export function validateListeningPackagePath(packagePath) {
  if (!packagePath) {
    return { ok: false, errors: ["package path is required"], summary: {} };
  }
  if (!fs.existsSync(packagePath)) {
    return { ok: false, errors: [`package path does not exist: ${packagePath}`], summary: {} };
  }
  if (fs.statSync(packagePath).isDirectory()) {
    return validateListeningPackageFolder(packagePath);
  }
  if (packagePath.toLowerCase().endsWith(".zip")) {
    try {
      return validateListeningPackageFolder(expandZipToTemp(packagePath));
    } catch (error) {
      return { ok: false, errors: [`zip extraction failed: ${error.message}`], summary: {} };
    }
  }
  return { ok: false, errors: ["package path must be a .zip file or extracted package folder"], summary: {} };
}

async function runCli(argv) {
  const packagePath = argv[2];
  if (!packagePath) {
    console.error("Usage: node scripts/validate-listening-package.mjs <topic-batch.zip|folder>");
    process.exitCode = 1;
    return;
  }

  const result = validateListeningPackagePath(path.resolve(packagePath));
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = result.ok ? 0 : 1;
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  runCli(process.argv);
}
