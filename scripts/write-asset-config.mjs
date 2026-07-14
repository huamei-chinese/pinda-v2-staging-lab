import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(process.cwd(), "public");
const outputPath = path.join(publicDir, "asset-config.js");

function cleanUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  return raw.replace(/\/+$/, "");
}

const config = {
  assetBaseUrl: cleanUrl(process.env.PUBLIC_ASSET_BASE_URL || process.env.PUBLIC_CDN_BASE_URL),
  audioBaseUrl: cleanUrl(process.env.PUBLIC_AUDIO_BASE_URL),
  listeningAppBaseUrl: cleanUrl(process.env.PUBLIC_LISTENING_APP_BASE_URL),
  listeningCatalogJsonUrl: cleanUrl(process.env.PUBLIC_LISTENING_CATALOG_JSON_URL),
  listeningCatalogScriptUrl: cleanUrl(process.env.PUBLIC_LISTENING_CATALOG_SCRIPT_URL),
};

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(
  outputPath,
  `window.HUAMEI_ASSET_CONFIG = Object.freeze(${JSON.stringify(config, null, 2)});\n`,
  "utf8",
);

console.log(`Wrote ${path.relative(process.cwd(), outputPath)}`);
