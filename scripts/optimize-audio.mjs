import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const args = new Map();
for (let index = 2; index < process.argv.length; index += 1) {
  const arg = process.argv[index];
  if (!arg.startsWith("--")) continue;
  const [key, inlineValue] = arg.slice(2).split("=");
  const nextValue = process.argv[index + 1];
  const value = inlineValue ?? (nextValue && !nextValue.startsWith("--") ? process.argv[++index] : "true");
  args.set(key, value);
}

const audioRoot = path.resolve(args.get("root") || "public/audio");
const targetKbps = Number(args.get("kbps") || 64);
const minSizeKb = Number(args.get("min-size-kb") || 24);
const minSavingRatio = Number(args.get("min-saving") || 0.08);
const concurrency = Math.max(1, Number(args.get("concurrency") || Math.min(4, os.cpus().length)));
const dryRun = args.get("dry-run") === "true";

function findFfmpeg() {
  if (process.env.FFMPEG_PATH) return process.env.FFMPEG_PATH;

  const localAppData = process.env.LOCALAPPDATA;
  if (localAppData) {
    const wingetRoot = path.join(localAppData, "Microsoft", "WinGet", "Packages");
    if (fs.existsSync(wingetRoot)) {
      const stack = [wingetRoot];
      while (stack.length) {
        const current = stack.pop();
        let entries;
        try {
          entries = fs.readdirSync(current, { withFileTypes: true });
        } catch {
          continue;
        }
        for (const entry of entries) {
          const entryPath = path.join(current, entry.name);
          if (entry.isDirectory()) stack.push(entryPath);
          if (entry.isFile() && entry.name.toLowerCase() === "ffmpeg.exe") return entryPath;
        }
      }
    }
  }

  return "ffmpeg";
}

const ffmpegPath = findFfmpeg();

function collectMp3Files(root) {
  const files = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const entryPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(entryPath);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".mp3")) {
        const size = fs.statSync(entryPath).size;
        if (size >= minSizeKb * 1024) files.push({ path: entryPath, size });
      }
    }
  }
  return files.sort((a, b) => b.size - a.size);
}

function runFfmpeg(input, output) {
  return new Promise((resolve) => {
    const child = spawn(ffmpegPath, [
      "-y",
      "-v",
      "error",
      "-i",
      input,
      "-vn",
      "-ac",
      "1",
      "-ar",
      "24000",
      "-codec:a",
      "libmp3lame",
      "-b:a",
      `${targetKbps}k`,
      output,
    ]);

    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("close", (code) => resolve({ ok: code === 0, stderr }));
  });
}

async function optimizeFile(file) {
  const tempPath = `${file.path}.optimized-${process.pid}.tmp.mp3`;
  try {
    const result = await runFfmpeg(file.path, tempPath);
    if (!result.ok || !fs.existsSync(tempPath)) {
      return { status: "failed", before: file.size, after: file.size, path: file.path, error: result.stderr.trim() };
    }

    const optimizedSize = fs.statSync(tempPath).size;
    const shouldReplace = optimizedSize < file.size * (1 - minSavingRatio);
    if (shouldReplace && !dryRun) {
      fs.renameSync(tempPath, file.path);
    } else {
      fs.unlinkSync(tempPath);
    }

    return {
      status: shouldReplace ? "optimized" : "skipped",
      before: file.size,
      after: shouldReplace ? optimizedSize : file.size,
      path: file.path,
    };
  } catch (error) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    return { status: "failed", before: file.size, after: file.size, path: file.path, error: error.message };
  }
}

const files = collectMp3Files(audioRoot);
let cursor = 0;
let optimized = 0;
let skipped = 0;
let failed = 0;
let beforeBytes = files.reduce((sum, file) => sum + file.size, 0);
let afterBytes = beforeBytes;

console.log(`Optimizing ${files.length} MP3 files in ${path.relative(process.cwd(), audioRoot) || audioRoot}`);
console.log(`ffmpeg: ${ffmpegPath}`);
console.log(`target=${targetKbps}kbps min-size=${minSizeKb}KB min-saving=${Math.round(minSavingRatio * 100)}% concurrency=${concurrency}`);

async function worker() {
  while (cursor < files.length) {
    const file = files[cursor++];
    const result = await optimizeFile(file);
    afterBytes -= result.before - result.after;
    if (result.status === "optimized") optimized += 1;
    if (result.status === "skipped") skipped += 1;
    if (result.status === "failed") failed += 1;

    const done = optimized + skipped + failed;
    if (done % 250 === 0 || done === files.length) {
      const savedMb = (beforeBytes - afterBytes) / 1048576;
      console.log(`progress ${done}/${files.length} optimized=${optimized} skipped=${skipped} failed=${failed} saved=${savedMb.toFixed(2)}MB`);
    }
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));

console.log(JSON.stringify({
  optimized,
  skipped,
  failed,
  beforeMB: Number((beforeBytes / 1048576).toFixed(2)),
  afterMB: Number((afterBytes / 1048576).toFixed(2)),
  savedMB: Number(((beforeBytes - afterBytes) / 1048576).toFixed(2)),
}, null, 2));

if (failed > 0) process.exitCode = 1;
