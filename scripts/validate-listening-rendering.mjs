import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const REGRESSION_PINYIN = String.fromCodePoint(
  72, 462, 111, 44, 32, 115, 462, 111, 32, 109, 462, 32, 107, 283, 32, 121, 464, 32, 109, 97, 63,
);
const REGRESSION_VIETNAMESE = String.fromCodePoint(
  272, 432, 7907, 99, 44, 32, 113, 117, 233, 116, 32, 109, 227, 32, 273, 432, 7907, 99, 32, 107, 104, 244, 110, 103, 63,
);

function extractListeningRepairRuntime(appSource) {
  const start = appSource.indexOf("function repairUtf8MojibakeText");
  let end = appSource.indexOf("function hydrateListeningCatalog()", start);
  if (end < 0) {
    end = appSource.indexOf("appendCatalogListeningEpisodes();", start);
  }
  if (start < 0 || end < 0 || end <= start) {
    throw new Error("could not find listening repair runtime in public/app.js");
  }
  return appSource.slice(start, end);
}

export function validateListeningRenderingSource(appSource) {
  const errors = [];
  const context = { TextDecoder };
  vm.createContext(context);

  try {
    vm.runInContext(extractListeningRepairRuntime(appSource), context);
  } catch (error) {
    return { ok: false, errors: [`could not evaluate listening repair runtime: ${error.message}`] };
  }

  if (typeof context.repairListeningTextFields !== "function") {
    errors.push("repairListeningTextFields must be available in listening repair runtime");
    return { ok: false, errors };
  }

  const sample = {
    pinyin: REGRESSION_PINYIN,
    vi: REGRESSION_VIETNAMESE,
    vietnamese: REGRESSION_VIETNAMESE,
    zh: "好，扫码可以吗？",
  };
  context.repairListeningTextFields(sample);

  if (sample.pinyin !== REGRESSION_PINYIN) {
    errors.push("listening rendering repair must not modify tone-mark pinyin");
  }
  if (sample.vi !== REGRESSION_VIETNAMESE || sample.vietnamese !== REGRESSION_VIETNAMESE) {
    errors.push("listening rendering repair must not modify Vietnamese subtitle fields");
  }

  return { ok: errors.length === 0, errors };
}

export function validateListeningRenderingPath(appPath) {
  if (!appPath) {
    return { ok: false, errors: ["app path is required"] };
  }
  if (!fs.existsSync(appPath)) {
    return { ok: false, errors: [`app path does not exist: ${appPath}`] };
  }
  return validateListeningRenderingSource(fs.readFileSync(appPath, "utf8"));
}

async function runCli(argv) {
  const appPath = argv[2] || path.join(process.cwd(), "public", "app.js");
  const result = validateListeningRenderingPath(path.resolve(appPath));
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = result.ok ? 0 : 1;
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  runCli(process.argv);
}
