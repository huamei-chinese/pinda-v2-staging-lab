import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateListeningPackagePath } from "./validate-listening-package.mjs";

const APP_PATH = path.join(process.cwd(), "public", "app.js");
const PUBLIC_LISTENING_ROOT = path.join(process.cwd(), "public", "listening-app");
const CATALOG_PATH = path.join(PUBLIC_LISTENING_ROOT, "data", "listening-catalog.json");
const CATALOG_JS_PATH = path.join(PUBLIC_LISTENING_ROOT, "data", "listening-catalog.js");

function expandZipToTemp(zipPath) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "pinda-listening-import-"));
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

function resolvePackageFolder(packagePath) {
  const absolutePath = path.resolve(packagePath);
  if (fs.statSync(absolutePath).isDirectory()) {
    return absolutePath;
  }
  return expandZipToTemp(absolutePath);
}

function lessonIdToEpisodeId(lessonId) {
  const match = String(lessonId || "").match(/(\d+)/);
  if (!match) {
    throw new Error(`lesson id must contain a number: ${lessonId}`);
  }
  return `ep-${match[1].padStart(3, "0")}`;
}

function appAssetPath(assetPath) {
  return `/listening-app/${String(assetPath || "").replace(/\\/g, "/").replace(/^\/+/, "")}`;
}

function normalizeAssetPath(assetPath) {
  return String(assetPath || "").replace(/\\/g, "/").replace(/^\/+/, "");
}

function slugPart(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "item";
}

function sortByOrder(items) {
  return [...items].sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
}

function speakerLabel(sentences) {
  const speakers = [...new Set(sentences.map((sentence) => sentence.speaker).filter(Boolean))];
  return speakers.length > 0 ? speakers.join("/") : "旁白";
}

function resolveDialogueLevelId(manifest) {
  const value = `${manifest.level?.id || ""} ${manifest.level?.name_zh || ""} ${manifest.level?.name_vi || ""}`.toLowerCase();
  if (/beginner|basic|初级|sơ|so cap/.test(value)) return "beginner";
  if (/advanced|高级|cao/.test(value)) return "advanced";
  return "intermediate";
}

function resolveMonologueTopicId(manifest) {
  const levelId = slugPart(manifest.level?.id);
  if (["speech", "magazine", "psychology", "other"].includes(levelId)) return levelId;

  const value = `${manifest.topic?.id || ""} ${manifest.topic?.title_zh || ""} ${manifest.topic?.title_vi || ""}`.toLowerCase();
  if (/speech|演讲|dien|diễn|thuyet|thuyết/.test(value)) return "speech";
  if (/magazine|newspaper|entertainment|杂志|报|tap|tạp|chi|chí/.test(value)) return "magazine";
  if (/psychology|心理|tam|tâm|ly|lý/.test(value)) return "psychology";
  return "other";
}

function namespacedLessonId(trackId, containerId, topicId, sourceLessonId) {
  return [trackId, containerId, slugPart(topicId), slugPart(sourceLessonId)].join("-");
}

function catalogAssetPath(trackId, containerId, topicId, sourceAssetPath) {
  const normalized = normalizeAssetPath(sourceAssetPath);
  const fileName = path.posix.basename(normalized);
  const folder = normalized.includes("/words/")
    ? "words"
    : normalized.includes("/title/")
      ? "title"
      : "main";
  return `audio/catalog/${trackId}/${containerId}/${slugPart(topicId)}/${folder}/${fileName}`;
}

function lessonToCatalogLesson(manifest, lesson, placement) {
  const sentences = sortByOrder(lesson.sentences || []);
  const keywords = sortByOrder(lesson.keywords || []);
  const roles = Array.isArray(lesson.roles) ? lesson.roles : [];
  return {
    id: namespacedLessonId(placement.trackId, placement.containerId, manifest.topic?.id, lesson.id),
    source_lesson_id: lesson.id,
    track: placement.trackId,
    title_zh: lesson.title_zh,
    title_vi: lesson.title_vi,
    main_audio_includes_title: lesson.main_audio_includes_title === true,
    title_audio: lesson.title_audio
      ? catalogAssetPath(placement.trackId, placement.containerId, manifest.topic?.id, lesson.title_audio)
      : "",
    main_audio: catalogAssetPath(placement.trackId, placement.containerId, manifest.topic?.id, lesson.main_audio),
    speaker: speakerLabel(sentences),
    roles,
    sentences: sentences.map((sentence) => ({
      id: sentence.id,
      order: sentence.order,
      speaker: sentence.speaker || "",
      zh: sentence.zh,
      pinyin: sentence.pinyin,
      vi: sentence.vi,
      start: sentence.start,
      end: sentence.end,
    })),
    keywords: keywords.map((keyword) => ({
      id: keyword.id,
      order: keyword.order,
      zh: keyword.zh,
      pinyin: keyword.pinyin,
      vi: keyword.vi,
      audio: catalogAssetPath(placement.trackId, placement.containerId, manifest.topic?.id, keyword.audio),
    })),
  };
}

function upsertLessons(existingLessons, nextLessons) {
  const byId = new Map((existingLessons || []).map((lesson) => [lesson.id, lesson]));
  nextLessons.forEach((lesson) => byId.set(lesson.id, lesson));
  return [...byId.values()].sort((a, b) =>
    String(a.source_lesson_id || a.id).localeCompare(String(b.source_lesson_id || b.id)),
  );
}

function upsertTopic(topics, topic, nextLessons) {
  const existing = topics.find((entry) => entry.id === topic.id);
  if (existing) {
    existing.label_zh = topic.label_zh;
    existing.label_vi = topic.label_vi;
    existing.source_topic_id = topic.source_topic_id;
    existing.lessons = upsertLessons(existing.lessons, nextLessons);
    return;
  }
  topics.push({
    ...topic,
    lessons: upsertLessons([], nextLessons),
  });
}

export function mergeManifestIntoCatalog(catalog, manifest, options = {}) {
  const nextCatalog = JSON.parse(JSON.stringify(catalog));
  const trackId = manifest.track;
  const track = nextCatalog.tracks.find((entry) => entry.id === trackId);
  if (!track) {
    throw new Error(`catalog track not found: ${trackId}`);
  }

  if (trackId === "dialogue") {
    const levelId = resolveDialogueLevelId(manifest);
    const level = track.levels.find((entry) => entry.id === levelId);
    if (!level) {
      throw new Error(`catalog dialogue level not found: ${levelId}`);
    }
    if (options.replaceContainer) {
      level.topics = [];
    }
    const topic = {
      id: manifest.topic.id,
      label_zh: manifest.topic.title_zh,
      label_vi: manifest.topic.title_vi,
      source_topic_id: manifest.topic.id,
    };
    const lessons = sortByOrder(manifest.lessons || []).map((lesson) =>
      lessonToCatalogLesson(manifest, lesson, { trackId, containerId: levelId }),
    );
    upsertTopic(level.topics, topic, lessons);
    return nextCatalog;
  }

  if (trackId === "monologue") {
    const topicId = resolveMonologueTopicId(manifest);
    const topic = track.topics.find((entry) => entry.id === topicId);
    if (!topic) {
      throw new Error(`catalog monologue topic not found: ${topicId}`);
    }
    if (options.replaceContainer) {
      topic.lessons = [];
    }
    const lessons = sortByOrder(manifest.lessons || []).map((lesson) =>
      lessonToCatalogLesson(manifest, lesson, { trackId, containerId: topicId }),
    );
    topic.source_topic_id = manifest.topic.id;
    topic.source_topic_title_zh = manifest.topic.title_zh;
    topic.source_topic_title_vi = manifest.topic.title_vi;
    topic.lessons = upsertLessons(topic.lessons, lessons);
    return nextCatalog;
  }

  throw new Error(`unsupported listening track: ${trackId}`);
}

export function convertManifestToListeningItems(manifest) {
  return sortByOrder(manifest.lessons || []).map((lesson) => {
    const sentences = sortByOrder(lesson.sentences || []);
    const keywords = sortByOrder(lesson.keywords || []);
    return {
      id: lessonIdToEpisodeId(lesson.id),
      title: lesson.title_zh,
      titleZh: lesson.title_zh,
      category: manifest.topic?.title_vi || manifest.topic?.title_zh || "",
      categoryZh: manifest.topic?.title_zh || manifest.topic?.title_vi || "",
      level: manifest.level?.name_vi || manifest.level?.name_zh || "",
      speaker: speakerLabel(sentences),
      audioSrc: appAssetPath(lesson.main_audio),
      sentences: sentences.map((sentence) => [
        sentence.zh,
        sentence.pinyin,
        sentence.vi,
        sentence.start,
        sentence.end,
      ]),
      keywords: keywords.map((keyword) => [keyword.zh, keyword.pinyin, keyword.vi]),
      is_free: true,
      is_member_only: false,
      member_cta: "继续练习每日听力。",
      created_at: "2026-07-03",
      progress: 0,
    };
  });
}

function jsString(value) {
  return JSON.stringify(value);
}

function renderValue(value) {
  return typeof value === "number" ? String(value) : jsString(value);
}

function renderRows(rows) {
  return rows.map((row) => `[${row.map(renderValue).join(", ")}]`).join(",\n        ");
}

export function renderListeningItemsForApp(items) {
  return items.map((item) => `  buildItem({
    id: ${jsString(item.id)},
    title: ${jsString(item.title)},
    titleZh: ${jsString(item.titleZh)},
    category: ${jsString(item.category)},
    categoryZh: ${jsString(item.categoryZh)},
    level: ${jsString(item.level)},
    speaker: ${jsString(item.speaker)},
    audioSrc: ${jsString(item.audioSrc)},
    sentences: makeSentences(${jsString(item.id)}, [
        ${renderRows(item.sentences)}
    ]),
    keywords: makeKeywords([
        ${renderRows(item.keywords)}
    ]),
    is_free: ${item.is_free ? "true" : "false"},
    is_member_only: ${item.is_member_only ? "true" : "false"},
    member_cta: ${jsString(item.member_cta)},
    created_at: ${jsString(item.created_at)},
    progress: ${Number(item.progress || 0)},
  })`).join(",\n");
}

export function replaceListeningEpisodeBlocks(appSource, items) {
  let nextSource = appSource;
  for (const item of items) {
    const block = renderListeningItemsForApp([item]);
    const idPattern = jsString(item.id).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`  buildItem\\(\\{\\r?\\n    id: ${idPattern},[\\s\\S]*?\\r?\\n  \\}\\),?`);
    if (!pattern.test(nextSource)) {
      throw new Error(`could not find listening episode block: ${item.id}`);
    }
    nextSource = nextSource.replace(pattern, `${block},`);
  }
  return nextSource;
}

function copyAudioFolder(packageRoot, relativeFolder) {
  const sourceDir = path.join(packageRoot, relativeFolder);
  const targetDir = path.join(PUBLIC_LISTENING_ROOT, relativeFolder.replace(/^audio[\\/]/, "audio/"));
  if (!fs.existsSync(sourceDir)) {
    return [];
  }

  fs.mkdirSync(targetDir, { recursive: true });
  const copied = [];
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    if (!entry.isFile()) {
      continue;
    }
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);
    fs.copyFileSync(sourcePath, targetPath);
    copied.push(path.relative(process.cwd(), targetPath).replace(/\\/g, "/"));
  }
  return copied;
}

function writeCatalogDataFiles(catalog) {
  const json = `${JSON.stringify(catalog, null, 2)}\n`;
  fs.writeFileSync(CATALOG_PATH, json, "utf8");
  fs.writeFileSync(CATALOG_JS_PATH, `globalThis.pindaListeningCatalog = ${json}`, "utf8");
}

function copyCatalogAudio(packageRoot, manifest) {
  const copied = [];
  const trackId = manifest.track;
  const containerId = trackId === "dialogue" ? resolveDialogueLevelId(manifest) : resolveMonologueTopicId(manifest);
  const copyOne = (sourceAssetPath) => {
    const normalized = normalizeAssetPath(sourceAssetPath);
    const sourcePath = path.join(packageRoot, normalized);
    const targetRelativePath = catalogAssetPath(trackId, containerId, manifest.topic?.id, normalized);
    const targetPath = path.join(PUBLIC_LISTENING_ROOT, targetRelativePath);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(sourcePath, targetPath);
    copied.push(path.relative(process.cwd(), targetPath).replace(/\\/g, "/"));
  };

  for (const lesson of manifest.lessons || []) {
    if (lesson.title_audio) {
      copyOne(lesson.title_audio);
    }
    copyOne(lesson.main_audio);
    for (const keyword of lesson.keywords || []) {
      copyOne(keyword.audio);
    }
  }
  return copied;
}

export function importListeningPackage(packagePath, options = {}) {
  const validation = validateListeningPackagePath(packagePath);
  if (!validation.ok) {
    throw new Error(`listening package validation failed:\n${validation.errors.join("\n")}`);
  }

  const packageRoot = resolvePackageFolder(packagePath);
  const manifest = JSON.parse(fs.readFileSync(path.join(packageRoot, "manifest.json"), "utf8"));
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf8"));
  const nextCatalog = mergeManifestIntoCatalog(catalog, manifest, options);
  writeCatalogDataFiles(nextCatalog);
  const copied = copyCatalogAudio(packageRoot, manifest);
  const containerId = manifest.track === "dialogue" ? resolveDialogueLevelId(manifest) : resolveMonologueTopicId(manifest);
  const importedLessonIds = sortByOrder(manifest.lessons || []).map((lesson) =>
    namespacedLessonId(manifest.track, containerId, manifest.topic?.id, lesson.id),
  );

  return {
    ok: true,
    imported_lesson_ids: importedLessonIds,
    copied_audio_count: copied.length,
    copied_audio: copied,
    validation: validation.summary,
  };
}

async function runCli(argv) {
  const args = argv.slice(2);
  const replaceContainer = args.includes("--replace-container");
  const packagePath = args.find((arg) => arg !== "--replace-container");
  if (!packagePath) {
    console.error("Usage: node scripts/import-listening-package.mjs [--replace-container] <topic-batch.zip|folder>");
    process.exitCode = 1;
    return;
  }

  try {
    const result = importListeningPackage(path.resolve(packagePath), { replaceContainer });
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  runCli(process.argv);
}
