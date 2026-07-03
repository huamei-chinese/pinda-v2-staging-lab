import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const generatedFiles = [
  path.join(root, "content", "high_frequency_chinese", "high_frequency_topics.json"),
  path.join(root, "content", "high_frequency_chinese", "high_frequency_topics.md"),
  path.join(root, "content", "high_frequency_chinese", "review_report.md"),
  path.join(root, "public", "lesson-high-frequency-topics.js"),
];

function readOutputs() {
  return Object.fromEntries(
    generatedFiles.map((file) => [file, fs.readFileSync(file, "utf8")]),
  );
}

const before = readOutputs();
const result = spawnSync(process.execPath, [path.join(root, "scripts", "generate-high-frequency-content.mjs")], {
  cwd: root,
  encoding: "utf8",
  stdio: "inherit",
});

if (result.status !== 0) {
  process.exit(result.status || 1);
}

const after = readOutputs();
const changed = generatedFiles.filter((file) => before[file] !== after[file]);

if (changed.length > 0) {
  console.error("Generated high-frequency files are not stable:");
  for (const file of changed) {
    console.error(`- ${path.relative(root, file).replace(/\\/g, "/")}`);
  }
  process.exit(1);
}

console.log("High-frequency generation is stable.");
