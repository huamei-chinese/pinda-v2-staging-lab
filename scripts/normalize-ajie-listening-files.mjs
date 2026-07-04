import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function parseAjieListeningText(source, sourceName = "Ajie listening file") {
  try {
    return JSON.parse(source);
  } catch (error) {
    throw new Error(`${sourceName}: invalid JSON (${error.message})`);
  }
}

function slugPart(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeSentence(topicId, entry, index) {
  const text = entry.text || {};
  const audioTime = entry.audio_time || {};

  return {
    sentence_id: entry.id || `${topicId}-s${index + 1}`,
    speaker: entry.speaker,
    chinese: text.zh || "",
    pinyin: text.pinyin || "",
    vietnamese: text.vi || "",
    start: Number.isFinite(audioTime.start) ? audioTime.start : index * 6,
    end: Number.isFinite(audioTime.end) ? audioTime.end : index * 6 + 5.2,
    is_shadowing_enabled: true,
  };
}

function normalizeKeyword(entry) {
  const word = entry.word || {};
  const audio = entry.audio || {};

  return {
    word: word.zh || "",
    pinyin: word.pinyin || "",
    vietnamese_meaning: word.vi || "",
    audio_word: audio.url || "",
    is_collectable: true,
    typing_enabled: true,
  };
}

function buildEpisode({ id, title, category, speaker, audioMain, lines, vocabulary }) {
  const sentences = lines.map((line, index) => normalizeSentence(id, line, index));
  const keywords = (vocabulary || []).map(normalizeKeyword).filter((keyword) => keyword.word);

  return {
    id,
    title,
    category,
    speaker,
    sentences,
    keywords,
    is_free: true,
    is_member_only: false,
    member_cta: "Lab import from Ajie listening source.",
    created_at: new Date().toISOString().slice(0, 10),
    cover_image: "/covers/placeholder-listening.svg",
    audio_main: audioMain || "",
    chinese_text: sentences.map((sentence) => sentence.chinese).join(""),
    pinyin_text: sentences.map((sentence) => sentence.pinyin).join(" "),
    vietnamese_translation: sentences.map((sentence) => sentence.vietnamese).join(" "),
    shadowing_sentences: sentences.map((sentence) => sentence.sentence_id),
    typing_words: keywords.map((keyword) => keyword.word),
  };
}

function normalizeMonologueCourse(course) {
  return (course.topics || []).map((topic) => buildEpisode({
    id: `ajie-monologue-${slugPart(topic.id)}`,
    title: topic.title || course.name || topic.id,
    category: topic.level?.name || topic.level?.code || course.name || "Ajie monologue",
    speaker: "Monologue",
    audioMain: topic.audio?.url || "",
    lines: topic.sentences || [],
    vocabulary: topic.vocabulary || [],
  }));
}

function normalizeDialogueCourse(course) {
  return (course.levels || []).flatMap((level) => (
    (level.topics || []).map((topic) => {
      const speakers = [...new Set((topic.dialogues || []).map((line) => line.speaker).filter(Boolean))];

      return buildEpisode({
        id: `ajie-dialogue-${slugPart(topic.id)}`,
        title: topic.title || course.name || topic.id,
        category: level.name || level.id || course.name || "Ajie dialogue",
        speaker: speakers.length ? speakers.join("/") : "Dialogue",
        audioMain: topic.audio?.url || "",
        lines: topic.dialogues || [],
        vocabulary: topic.vocabulary || [],
      });
    })
  ));
}

export function normalizeAjieCourse(parsed) {
  const course = parsed?.course;
  if (!course || typeof course !== "object") {
    throw new Error("Ajie listening file is missing course object");
  }

  if (Array.isArray(course.topics)) {
    return normalizeMonologueCourse(course);
  }

  if (Array.isArray(course.levels)) {
    return normalizeDialogueCourse(course);
  }

  throw new Error(`Unsupported Ajie course shape: ${course.id || "unknown"}`);
}

export function normalizeAjieListeningText(source, sourceName) {
  return normalizeAjieCourse(parseAjieListeningText(source, sourceName));
}

function resolveAssetPath(assetRoot, audioPath) {
  const relativePath = String(audioPath || "").replace(/^\/+/, "");
  return path.join(assetRoot, relativePath);
}

export function checkReferencedAudioFiles(episodes, assetRoot) {
  const missing = [];

  for (const episode of episodes) {
    const audioPaths = [
      episode.audio_main,
      ...(episode.keywords || []).map((keyword) => keyword.audio_word),
    ].filter(Boolean);

    for (const audioPath of audioPaths) {
      if (!fs.existsSync(resolveAssetPath(assetRoot, audioPath))) {
        missing.push(audioPath);
      }
    }
  }

  return missing;
}

export function parseAjieCliArgs(argv) {
  const args = argv.slice(2);
  const files = [];
  let assetRoot = "";

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--asset-root") {
      assetRoot = args[index + 1] || "";
      index += 1;
      continue;
    }
    files.push(arg);
  }

  return { assetRoot, files };
}

export function validateAjieSourceFiles(files, assetRoot = "") {
  const report = [];
  let hasBlockingIssue = false;

  for (const file of files) {
    try {
      const source = fs.readFileSync(file, "utf8");
      const episodes = normalizeAjieListeningText(source, path.basename(file));
      const missingAudio = assetRoot ? checkReferencedAudioFiles(episodes, assetRoot) : [];
      if (missingAudio.length > 0) {
        hasBlockingIssue = true;
      }
      report.push({ file, valid: true, episode_count: episodes.length, missing_audio: missingAudio, episodes });
    } catch (error) {
      hasBlockingIssue = true;
      report.push({ file, valid: false, error: error.message });
    }
  }

  return { ok: !hasBlockingIssue, files: report };
}

async function runCli(argv) {
  const { assetRoot, files } = parseAjieCliArgs(argv);
  if (files.length === 0) {
    console.error("Usage: node scripts/normalize-ajie-listening-files.mjs [--asset-root public/listening-app] <DocThoai.txt> [DoiThoai.txt]");
    process.exitCode = 1;
    return;
  }

  const result = validateAjieSourceFiles(files, assetRoot);
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = result.ok ? 0 : 1;
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  runCli(process.argv);
}
