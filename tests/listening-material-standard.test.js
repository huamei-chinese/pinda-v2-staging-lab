const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const standardPath = path.join(repoRoot, "docs", "listening-material-standard.md");
const promptPath = path.join(repoRoot, "docs", "listening-material-factory-prompt.md");

test("daily listening material standard documents the required upload contract", () => {
  const standard = fs.readFileSync(standardPath, "utf8");

  assert.match(standard, /pinda_listening_topic_batch_v1/);
  assert.match(standard, /manifest\.json/);
  assert.match(standard, /audio\/title/);
  assert.match(standard, /main_audio_includes_title/);
  assert.match(standard, /title_audio/);
  assert.match(standard, /relative `audio\/\.\.\.` paths only/);
  assert.match(standard, /must not contain `\.\.`/);
  assert.match(standard, /dialogue -> level -> topic -> lessons/);
  assert.match(standard, /monologue -> topic_category -> lessons/);
  assert.match(standard, /validate:listening-package/);
  assert.match(standard, /import:listening-package/);
});

test("daily listening material factory prompt tells the factory to keep titles out of subtitles", () => {
  const prompt = fs.readFileSync(promptPath, "utf8");

  assert.match(prompt, /audio\/main/);
  assert.match(prompt, /禁止使用 \.\.\//);
  assert.match(prompt, /title_zh/);
  assert.match(prompt, /title_vi/);
  assert.match(prompt, /sentences/);
  assert.match(prompt, /标题不得出现在 sentences/);
  assert.match(prompt, /标题必须被朗读/);
  assert.match(prompt, /每个主题可以包含多个课程/);
});
