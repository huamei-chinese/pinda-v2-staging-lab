import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const repoRoot = process.cwd();
const publicRoot = path.join(repoRoot, "public");
const outputPath = path.join(repoRoot, "output", "cdn-assets-manifest.json");

const includeRoots = [
  "audio",
  path.join("listening-app", "audio"),
  path.join("listening-app", "data", "listening-catalog.json"),
  path.join("listening-app", "data", "listening-catalog.js"),
];

const largeAssetExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const largeAssetThresholdBytes = 512 * 1024;

function walkFiles(target) {
  if (!fs.existsSync(target)) return [];
  const stat = fs.statSync(target);
  if (stat.isFile()) return [target];
  return fs.readdirSync(target, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(target, entry.name);
    return entry.isDirectory() ? walkFiles(child) : [child];
  });
}

function sha256(filePath) {
  const hash = crypto.createHash("sha256");
  hash.update(fs.readFileSync(filePath));
  return hash.digest("hex");
}

const selected = new Map();

for (const relativeRoot of includeRoots) {
  const absoluteRoot = path.join(publicRoot, relativeRoot);
  for (const filePath of walkFiles(absoluteRoot)) {
    selected.set(path.relative(publicRoot, filePath).replace(/\\/g, "/"), filePath);
  }
}

for (const filePath of walkFiles(path.join(publicRoot, "assets"))) {
  const stat = fs.statSync(filePath);
  if (largeAssetExtensions.has(path.extname(filePath).toLowerCase()) && stat.size >= largeAssetThresholdBytes) {
    selected.set(path.relative(publicRoot, filePath).replace(/\\/g, "/"), filePath);
  }
}

const assets = [...selected.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([publicPath, filePath]) => {
    const stat = fs.statSync(filePath);
    return {
      publicPath,
      objectKey: publicPath,
      bytes: stat.size,
      mb: Number((stat.size / 1024 / 1024).toFixed(3)),
      sha256: sha256(filePath),
    };
  });

const totals = assets.reduce((acc, asset) => {
  acc.bytes += asset.bytes;
  acc.count += 1;
  return acc;
}, { count: 0, bytes: 0 });

const manifest = {
  generatedAt: new Date().toISOString(),
  publicRoot: path.relative(repoRoot, publicRoot).replace(/\\/g, "/"),
  uploadRoot: "Upload every objectKey to the same key/path in your CDN bucket.",
  recommendedEnv: {
    PUBLIC_AUDIO_BASE_URL: "https://your-cdn.example.com/audio",
    PUBLIC_LISTENING_APP_BASE_URL: "https://your-cdn.example.com/listening-app",
    PUBLIC_LISTENING_CATALOG_JSON_URL: "https://your-cdn.example.com/listening-app/data/listening-catalog.json",
    PUBLIC_LISTENING_CATALOG_SCRIPT_URL: "https://your-cdn.example.com/listening-app/data/listening-catalog.js",
  },
  totals: {
    count: totals.count,
    bytes: totals.bytes,
    mb: Number((totals.bytes / 1024 / 1024).toFixed(3)),
  },
  assets,
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Wrote ${path.relative(repoRoot, outputPath)} (${manifest.totals.count} files, ${manifest.totals.mb} MB)`);
