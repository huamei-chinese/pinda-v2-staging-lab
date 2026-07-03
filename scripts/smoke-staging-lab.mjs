const baseUrl = (process.env.LAB_SMOKE_BASE_URL || "http://localhost:4173").replace(/\/+$/, "");

const checks = [
  {
    name: "learner home",
    path: "/",
    expectedStatus: 200,
    includes: ["app.js", "lesson-hsk2-l1.js", "lesson-high-frequency-topics.js", "adminScreen", "subscriptionsScreen"],
  },
  {
    name: "main stylesheet",
    path: "/styles.css",
    expectedStatus: 200,
    includes: [".app-shell"],
  },
  {
    name: "main app runtime",
    path: "/app.js",
    expectedStatus: 200,
    includes: ["const dailyThemes = globalThis.highFrequencyTopics", "const listeningEpisodes", "adminScreen", "data-retry-payment-order"],
  },
  {
    name: "HSK2 lesson pack",
    path: "/lesson-hsk2-l1.js",
    expectedStatus: 200,
    includes: ["hsk2-l1"],
  },
  {
    name: "HSK3 generated pack",
    path: "/lesson-hsk3-batch-1-5.js",
    expectedStatus: 200,
    includes: ["hsk3-l1"],
  },
  {
    name: "HSK4 generated pack",
    path: "/lesson-hsk4-batch-1-5.js",
    expectedStatus: 200,
    includes: ["hsk4-l1"],
  },
  {
    name: "HSK5 generated pack",
    path: "/lesson-hsk5-batch-1-6.js",
    expectedStatus: 200,
    includes: ["hsk5-l1"],
  },
  {
    name: "high-frequency content",
    path: "/lesson-high-frequency-topics.js",
    expectedStatus: 200,
    includes: ["highFrequencyTopics"],
  },
  {
    name: "daily listening entry",
    path: "/listening-app",
    expectedStatus: 200,
    includes: ["/listening-app/listening"],
  },
  {
    name: "daily listening list",
    path: "/listening-app/listening",
    expectedStatus: 200,
    includes: ["/listening-app/listening/ep-001", "daily-card"],
  },
  {
    name: "daily listening detail",
    path: "/listening-app/listening/ep-001",
    expectedStatus: 200,
    includes: ["/listening-app/listening-detail.css", "daily-001-main.MP3", "shadow-sentence"],
  },
  {
    name: "daily listening typing drill",
    path: "/listening-app/typing/ep-001",
    expectedStatus: 200,
    includes: ["app/typing/%5Bid%5D/page", "bottom-nav"],
  },
  {
    name: "daily listening favorites",
    path: "/listening-app/favorites",
    expectedStatus: 200,
    includes: ["app/favorites/page", "bottom-nav"],
  },
  {
    name: "daily listening member gate",
    path: "/listening-app/member",
    expectedStatus: 200,
    includes: ["app/member/page", "primary-button"],
  },
  {
    name: "daily listening review checklist",
    path: "/listening-app/review",
    expectedStatus: 200,
    includes: ["app/review/page", "/listening-app/listening/ep-001"],
  },
  {
    name: "VIP subscriptions surface",
    path: "/subscriptions.html",
    expectedStatus: 200,
    includes: ["subscription-page", "planTableBody"],
  },
  {
    name: "payment plans DB fallback",
    path: "/api/payments/plans",
    expectedStatus: 503,
    includes: [],
  },
];

async function runCheck(check) {
  const url = `${baseUrl}${check.path}`;
  const response = await fetch(url, { redirect: "manual" });
  const body = await response.text();
  const failures = [];

  if (response.status !== check.expectedStatus) {
    failures.push(`expected HTTP ${check.expectedStatus}, got ${response.status}`);
  }

  for (const expectedText of check.includes || []) {
    if (!body.includes(expectedText)) {
      failures.push(`missing text: ${expectedText}`);
    }
  }

  return {
    ...check,
    url,
    ok: failures.length === 0,
    failures,
  };
}

const results = [];

for (const check of checks) {
  try {
    results.push(await runCheck(check));
  } catch (error) {
    results.push({
      ...check,
      url: `${baseUrl}${check.path}`,
      ok: false,
      failures: [error.message],
    });
  }
}

for (const result of results) {
  const status = result.ok ? "PASS" : "FAIL";
  console.log(`${status} ${result.name} ${result.url}`);
  for (const failure of result.failures) {
    console.log(`  - ${failure}`);
  }
}

const failed = results.filter((result) => !result.ok);
if (failed.length) {
  console.error(`Staging lab smoke failed: ${failed.length}/${results.length} checks failed.`);
  process.exit(1);
}

console.log(`Staging lab smoke passed: ${results.length}/${results.length} checks passed.`);
