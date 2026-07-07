import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

const targetFiles = [
  "public/admin-v2.html",
  "public/admin-v2.css",
  "public/admin-v2.js",
  "public/admin-v2-local-data.json",
  "src/admin-v2-local-preview/admin-v2-local-preview.controller.ts",
  "src/admin-v2-local-preview/admin-v2-local-preview.module.ts",
];

const checks = [
  { label: "production site reference", pattern: /hoctrung\.com/i },
  {
    label: "formal project path reference",
    pattern: new RegExp(`${"02_Working"}_${"Project"}|${"pratice"}_${"write"}`, "i"),
  },
  { label: "direct payment fetch", pattern: /fetch\(["']\/api\/payments/i },
  { label: "direct webhook fetch", pattern: /fetch\(["']\/api\/webhooks/i },
  { label: "direct admin-user write fetch", pattern: /fetch\(["']\/api\/admin\/users/i },
  { label: "direct order write fetch", pattern: /fetch\(["']\/api\/admin\/orders/i },
  { label: "direct analytics write fetch", pattern: /fetch\(["']\/api\/analytics/i },
  { label: "direct content write fetch", pattern: /fetch\(["']\/api\/(admin\/)?content/i },
  { label: "production analytics key", pattern: /analyticsWriteKey|sendProductionAnalytics/i },
  { label: "production content action", pattern: /publishToProductionNow|writeProductionContent|runNoizNow|legacyDDriveImport|copyFromOldPollutedLab/i },
  { label: "commission settlement action", pattern: /exportCommissionNow|settleCommissionNow|payAgentNow|connectProductionOrders/i },
  { label: "server database dependency", pattern: /\bDatabaseService\b|\bDATABASE_URL\b|\bpayment_orders\b|UPDATE users/i },
  { label: "server payment dependency", pattern: /\bPaymentService\b|\bSEPAY\b/i },
];

const allowedDisplayOnly = [
  { file: "public/admin-v2.html", label: "server database dependency", includes: "DATABASE_URL off" },
  { file: "public/admin-v2.js", label: "server payment dependency", includes: "/api/webhooks/sepay" },
  { file: "public/admin-v2-local-data.json", label: "server database dependency", includes: "payment_orders" },
  { file: "public/admin-v2-local-data.json", label: "server payment dependency", includes: "/api/webhooks/sepay" },
];

function normalize(filePath) {
  return filePath.replaceAll("\\", "/");
}

function listExistingTargets() {
  const files = [];
  for (const target of targetFiles) {
    const absolute = path.join(repoRoot, target);
    if (existsSync(absolute) && statSync(absolute).isFile()) {
      files.push(target);
    }
  }

  const previewDir = path.join(repoRoot, "src", "admin-v2-local-preview");
  if (existsSync(previewDir)) {
    for (const entry of readdirSync(previewDir)) {
      const relative = normalize(path.join("src", "admin-v2-local-preview", entry));
      if (!files.includes(relative)) files.push(relative);
    }
  }

  return files;
}

function isAllowed(filePath, label, line) {
  const normalized = normalize(filePath);
  return allowedDisplayOnly.some(
    (entry) => entry.file === normalized && entry.label === label && line.includes(entry.includes),
  );
}

const findings = [];

for (const filePath of listExistingTargets()) {
  const absolute = path.join(repoRoot, filePath);
  const lines = readFileSync(absolute, "utf8").split(/\r?\n/);
  for (const [lineIndex, line] of lines.entries()) {
    for (const check of checks) {
      if (check.pattern.test(line) && !isAllowed(filePath, check.label, line)) {
        findings.push({ filePath, lineNumber: lineIndex + 1, label: check.label });
      }
    }
  }
}

if (findings.length) {
  console.error("Admin V2 risk guard failed:");
  for (const finding of findings) {
    console.error(`- ${finding.filePath}:${finding.lineNumber}: ${finding.label}`);
  }
  process.exit(1);
}

console.log("Admin V2 risk guard passed: local experiment files contain no production write risks.");
