import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

const checks = [
  { label: "production site URL", patternText: "hoctrung.com", pattern: /hoctrung\.com/i },
  { label: "production project directory", patternText: "02_Working_Project", pattern: /02_Working_Project/i },
  { label: "production project folder", patternText: "pratice_write", pattern: /pratice_write/i },
  { label: "Stripe live secret key", patternText: "sk_live", pattern: /sk_live/i },
  { label: "Stripe live publishable key", patternText: "pk_live", pattern: /pk_live/i },
  { label: "SePay webhook secret assignment", patternText: "SEPAY_WEBHOOK_SECRET=", pattern: /SEPAY_WEBHOOK_SECRET=\S+/i },
  { label: "non-placeholder database URL", patternText: "DATABASE_URL=postgresql://[^u]", pattern: /DATABASE_URL=postgresql:\/\/[^u]/i },
];

const allCheckLabels = checks.map((check) => check.label);
const allowlist = [
  {
    path: "docs/staging-lab-release-candidate.md",
    labels: ["production site URL", "production project directory", "production project folder"],
  },
  {
    path: "docs/superpowers/plans/2026-07-03-staging-lab-productization.md",
    labels: ["production site URL", "production project directory", "production project folder"],
  },
  {
    path: "docs/superpowers/plans/2026-07-03-staging-lab-productization.md",
    labels: [
      "Stripe live secret key",
      "Stripe live publishable key",
      "SePay webhook secret assignment",
      "non-placeholder database URL",
    ],
    lineIncludes: "git grep -n -E",
  },
  {
    path: "scripts/check-staging-lab-safety.mjs",
    labels: allCheckLabels,
  },
  {
    path: "tests/staging-lab-safety-script.test.js",
    labels: allCheckLabels,
  },
];

const ignoredPathPrefixes = [".git/", "dist/", "node_modules/", "public/audio/"];
const ignoredPathSuffixes = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".mp3", ".wav", ".zip"];

function normalizePath(filePath) {
  return filePath.replaceAll("\\", "/");
}

function listFiles(args) {
  // Keep the scan repeatable by starting from git ls-files instead of ad hoc directory walking.
  return execFileSync("git", args, { cwd: repoRoot, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })
    .split(/\r?\n/)
    .map((filePath) => filePath.trim())
    .filter(Boolean);
}

function isIgnored(filePath) {
  const normalized = normalizePath(filePath);
  return (
    ignoredPathPrefixes.some((prefix) => normalized.startsWith(prefix)) ||
    ignoredPathSuffixes.some((suffix) => normalized.toLowerCase().endsWith(suffix))
  );
}

function isAllowed(filePath, label, line) {
  const normalized = normalizePath(filePath);
  return allowlist.some(
    (entry) =>
      entry.path === normalized &&
      entry.labels.includes(label) &&
      (!entry.lineIncludes || line.includes(entry.lineIncludes)),
  );
}

const trackedFiles = listFiles(["ls-files"]);
const untrackedFiles = listFiles(["ls-files", "--others", "--exclude-standard"]);
const files = [...new Set([...trackedFiles, ...untrackedFiles])].filter((filePath) => !isIgnored(filePath));

const findings = [];

for (const filePath of files) {
  const absolutePath = path.join(repoRoot, filePath);
  if (!existsSync(absolutePath) || !statSync(absolutePath).isFile()) {
    continue;
  }

  const lines = readFileSync(absolutePath, "utf8").split(/\r?\n/);
  for (const check of checks) {
    for (const [lineIndex, line] of lines.entries()) {
      if (check.pattern.test(line) && !isAllowed(filePath, check.label, line)) {
        findings.push({ filePath, lineNumber: lineIndex + 1, label: check.label, patternText: check.patternText });
      }
    }
  }
}

if (findings.length) {
  console.error("Staging lab safety check failed:");
  for (const finding of findings) {
    console.error(`- ${finding.filePath}:${finding.lineNumber}: ${finding.label} (${finding.patternText})`);
  }
  process.exit(1);
}

console.log(`Staging lab safety check passed: scanned ${files.length} files.`);
