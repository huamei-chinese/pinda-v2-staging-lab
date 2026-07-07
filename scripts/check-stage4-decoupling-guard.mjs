import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const MAX_PUBLIC_APP_DIFF_LINES = 25;
const REDLINE_PATTERNS = [
  /^src\/payment\//,
  /^src\/database\//,
  /^src\/auth\//,
  /^src\/admin\//,
  /^src\/content\//,
  /^\.env(?:\.|$)/,
  /^netlify\.toml$/,
  /^package-lock\.json$/,
  /^package\.json$/,
];

function normalizePath(filePath) {
  return String(filePath || "").replace(/\\/g, "/").replace(/^\.\//, "");
}

export function validateChangedFiles(files) {
  const errors = [];
  for (const file of files.map(normalizePath).filter(Boolean)) {
    if (REDLINE_PATTERNS.some((pattern) => pattern.test(file))) {
      errors.push(`Stage 4 redline file changed: ${file}`);
    }
  }
  return { errors };
}

export function validateAppDiff(diff, threshold = MAX_PUBLIC_APP_DIFF_LINES) {
  const added = Number(diff && diff.added) || 0;
  const removed = Number(diff && diff.removed) || 0;
  const total = added + removed;
  return {
    errors: total > threshold
      ? [`public/app.js diff is ${total} lines; Stage 4 threshold is ${threshold}.`]
      : [],
  };
}

export function validateScriptOrder(html) {
  const source = String(html || "");
  const appMatch = source.match(/<script\s+src=["'](?:\.\/)?app\.js(?:\?[^"']*)?["']\s*><\/script>/);
  const errors = [];
  if (!appMatch) {
    return { errors: ["app.js script tag not found."] };
  }

  const appIndex = appMatch.index;
  const scriptPattern = /<script\s+src=["']([^"']*lesson-[^"']+\.js)["']\s*><\/script>/g;
  for (const match of source.matchAll(scriptPattern)) {
    if (match.index > appIndex) {
      errors.push(`${match[1]} must load before app.js.`);
    }
  }
  return { errors };
}

function gitLines(args, cwd) {
  const output = execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
  return output ? output.split(/\r?\n/).filter(Boolean) : [];
}

function gitChangedFiles(cwd) {
  return [
    ...gitLines(["diff", "--name-only", "HEAD", "--"], cwd),
    ...gitLines(["ls-files", "--others", "--exclude-standard"], cwd),
  ];
}

function gitPublicAppDiff(cwd) {
  const rows = gitLines(["diff", "--numstat", "HEAD", "--", "public/app.js"], cwd);
  if (rows.length === 0) return { added: 0, removed: 0 };
  const [added, removed] = rows[0].split(/\s+/);
  return { added, removed };
}

export function runStage4Guard(cwd = process.cwd()) {
  const errors = [
    ...validateChangedFiles(gitChangedFiles(cwd)).errors,
    ...validateAppDiff(gitPublicAppDiff(cwd)).errors,
  ];

  for (const htmlFile of ["index.html", path.join("public", "index.html")]) {
    const fullPath = path.join(cwd, htmlFile);
    if (fs.existsSync(fullPath)) {
      errors.push(...validateScriptOrder(fs.readFileSync(fullPath, "utf8")).errors.map((error) => `${htmlFile}: ${error}`));
    }
  }

  return { ok: errors.length === 0, errors };
}

const isDirectRun = process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;
if (isDirectRun) {
  const result = runStage4Guard();
  if (!result.ok) {
    console.error(result.errors.join("\n"));
    process.exit(1);
  }
  console.log("Stage 4 decoupling guard passed.");
}
