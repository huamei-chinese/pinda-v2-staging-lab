const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const srcDir = path.join(root, "src");
const html = fs.readFileSync(path.join(publicDir, "admin-v2.html"), "utf8");
const css = fs.readFileSync(path.join(publicDir, "admin-v2.css"), "utf8");
const js = fs.readFileSync(path.join(publicDir, "admin-v2.js"), "utf8");
const localData = JSON.parse(fs.readFileSync(path.join((typeof repoRoot !== "undefined" ? repoRoot : root), "dev-only", "admin-v2-local-data.json"), "utf8"));
const controller = fs.readFileSync(
  path.join(srcDir, "admin-v2-local-preview", "admin-v2-local-preview.controller.ts"),
  "utf8",
);

test("battle C exposes a content material closed-loop workspace", () => {
  for (const required of [
    "战役 C：内容/素材闭环",
    "素材上传验收",
    "草稿",
    "发布",
    "fallback",
    "rollback",
    "验收通过",
    "验收阻断",
    "提交草稿",
    "本地发布",
    "执行 fallback",
    "执行 rollback",
    "data-material-filter",
    "data-materials-body",
    "data-material-audit-body",
    "data-material-action",
  ]) {
    assert.match(html, new RegExp(required), `Battle C UI should include ${required}`);
  }

  assert.match(css, /\.material-command-center/);
  assert.match(css, /\.material-status-grid/);
  assert.match(css, /\.material-audit-panel/);
});

test("battle C frontend calls only the local experimental material action API", () => {
  for (const required of [
    "materialActionUrl",
    "/api/admin-v2/material-action",
    "renderMaterialPackages",
    "renderMaterialAudit",
    "performMaterialAction",
    "approveIntake",
    "blockIntake",
    "submitDraft",
    "publishLocal",
    "fallbackLocal",
    "rollbackLocal",
  ]) {
    assert.match(js, new RegExp(required), `Battle C JS should include ${required}`);
  }

  assert.doesNotMatch(js, /fetch\(["']\/api\/admin\/content/);
  assert.doesNotMatch(js, /fetch\(["']\/api\/content/);
  assert.doesNotMatch(js, /runNoizNow|publishToProductionNow|copyFromOldPollutedLab/);
});

test("battle C backend material endpoint writes only local experiment data", () => {
  assert.match(controller, /@Post\("material-action"\)/);
  assert.match(controller, /material-action/);
  assert.match(controller, /fs\.writeFileSync/);
  assert.match(controller, /approveIntake/);
  assert.match(controller, /blockIntake/);
  assert.match(controller, /submitDraft/);
  assert.match(controller, /publishLocal/);
  assert.match(controller, /fallbackLocal/);
  assert.match(controller, /rollbackLocal/);
  assert.match(controller, /local-json-only/);

  for (const forbidden of [
    "runNoizNow",
    "publishToProductionNow",
    "copyFromOldPollutedLab",
    "writeProductionContent",
    "legacyDDriveImport",
    "DATABASE_URL",
    "INSERT INTO content",
  ]) {
    assert.doesNotMatch(controller, new RegExp(forbidden), `Battle C endpoint must not use ${forbidden}`);
  }
});

test("battle C local data has material packages drafts releases and audit logs", () => {
  assert.ok(localData.materialSummary);
  assert.ok(Array.isArray(localData.materialPackages));
  assert.ok(localData.materialPackages.length >= 4);
  assert.ok(Array.isArray(localData.materialAuditLogs));
  assert.ok(Array.isArray(localData.releaseHistory));

  for (const item of localData.materialPackages) {
    for (const field of [
      "id",
      "title",
      "type",
      "lessonCount",
      "topicCount",
      "audioStatus",
      "uploadStatus",
      "reviewStatus",
      "draftStatus",
      "publishStatus",
      "fallbackStatus",
      "rollbackVersion",
    ]) {
      assert.ok(Object.hasOwn(item, field), `material package ${item.id} should include ${field}`);
    }
  }
});
