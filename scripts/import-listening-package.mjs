import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateListeningPackagePath } from "./validate-listening-package.mjs";

const APP_PATH = path.join(process.cwd(), "public", "app.js");
const PUBLIC_LISTENING_ROOT = path.join(process.cwd(), "public", "listening-app");

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

function sortByOrder(items) {
  return [...items].sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
}

function speakerLabel(sentences) {
  const speakers = [...new Set(sentences.map((sentence) => sentence.speaker).filter(Boolean))];
  return speakers.length > 0 ? speakers.join("/") : "旁白";
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

export function importListeningPackage(packagePath) {
  const validation = validateListeningPackagePath(packagePath);
  if (!validation.ok) {
    throw new Error(`listening package validation failed:\n${validation.errors.join("\n")}`);
  }

  const packageRoot = resolvePackageFolder(packagePath);
  const manifest = JSON.parse(fs.readFileSync(path.join(packageRoot, "manifest.json"), "utf8"));
  const items = convertManifestToListeningItems(manifest);
  const appSource = fs.readFileSync(APP_PATH, "utf8");
  const nextAppSource = replaceListeningEpisodeBlocks(appSource, items);
  fs.writeFileSync(APP_PATH, nextAppSource, "utf8");

  const copied = [
    ...copyAudioFolder(packageRoot, path.join("audio", "main")),
    ...copyAudioFolder(packageRoot, path.join("audio", "words")),
  ];

  return {
    ok: true,
    imported_episode_ids: items.map((item) => item.id),
    copied_audio_count: copied.length,
    copied_audio: copied,
    validation: validation.summary,
  };
}

async function runCli(argv) {
  const packagePath = argv[2];
  if (!packagePath) {
    console.error("Usage: node scripts/import-listening-package.mjs <topic-batch.zip|folder>");
    process.exitCode = 1;
    return;
  }

  try {
    const result = importListeningPackage(path.resolve(packagePath));
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
