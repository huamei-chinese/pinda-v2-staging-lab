const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");
const { pathToFileURL } = require("node:url");

const guardUrl = pathToFileURL(path.join(__dirname, "..", "scripts", "check-stage4-decoupling-guard.mjs")).href;

test("stage 4 guard allows the approved minimal boundary files", async () => {
  const { validateChangedFiles } = await import(guardUrl);
  const result = validateChangedFiles([
    "public/pinda-module-boundaries.js",
    "tests/pinda-module-boundaries.test.js",
    "tests/stage4-decoupling-guard.test.js",
    "scripts/check-stage4-decoupling-guard.mjs",
  ]);

  assert.deepEqual(result.errors, []);
});

test("stage 4 guard blocks redline business files", async () => {
  const { validateChangedFiles } = await import(guardUrl);
  const result = validateChangedFiles(["src/payment/create-order.js"]);

  assert.match(result.errors.join("\n"), /redline/i);
});

test("stage 4 guard enforces a small public app diff threshold", async () => {
  const { validateAppDiff } = await import(guardUrl);

  assert.deepEqual(validateAppDiff({ added: 0, removed: 0 }).errors, []);
  assert.match(validateAppDiff({ added: 26, removed: 0 }).errors.join("\n"), /public\/app\.js/i);
});

test("stage 4 guard keeps lesson scripts before app.js", async () => {
  const { validateScriptOrder } = await import(guardUrl);
  const html = [
    '<script src="lesson-new-format-loader.js"></script>',
    '<script src="lesson-hsk2-l1.js"></script>',
    '<script src="app.js"></script>',
  ].join("\n");
  const brokenHtml = [
    '<script src="app.js"></script>',
    '<script src="lesson-new-format-loader.js"></script>',
  ].join("\n");

  assert.deepEqual(validateScriptOrder(html).errors, []);
  assert.match(validateScriptOrder(brokenHtml).errors.join("\n"), /before app\.js/i);
});
