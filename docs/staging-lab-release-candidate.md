# Pinda V2 Staging Lab Release Candidate

Date: 2026-07-03
Scope: V2 staging lab only

## Verified

- Git branch and remote: `main` aligned with `origin/main` in the lab repository.
- One-command acceptance gate:
  - Command: `npm.cmd run acceptance:lab`
  - Result: safety gate, `137/137` tests, build, dependency audit, temporary local server startup, and `12/12` smoke checks passed.
- Unit and static test suite: `npm.cmd test` passed `137/137`.
- Build: `npm.cmd run build` exited successfully.
- Lab safety gate:
  - Command: `npm.cmd run safety:lab`
  - Result: scanned repo text/code files and passed production-boundary checks for formal site URL, formal project path, live payment keys, SePay secret assignment, and non-placeholder database URLs.
- Dependency security:
  - Nest packages upgraded to the 11.x line.
  - `multer` is pinned through npm `overrides` to the patched 2.2.x line.
  - `npm.cmd audit --audit-level=high` returned `found 0 vulnerabilities`.
- Content generation:
  - `npm.cmd run generate:content` is available for HSK2/3/4/5/remediation content.
  - `npm.cmd run generate:high-frequency` is stable and uses repo-relative high-frequency source paths.
- Local HTTP smoke:
  - Command: `npm.cmd run smoke:lab`
  - Base URL: `http://localhost:4173`
  - Result: `12/12` checks passed.
  - Covered learner home, stylesheet, app runtime, HSK2, HSK3, HSK4, HSK5, high-frequency content, daily listening entry, daily listening list, VIP subscriptions surface, and payment-plan database fallback.
- Browser QA:
  - Tool: Codex in-app browser.
  - Viewports: 1280 x 720 desktop and 390 x 844 mobile.
  - Checked learner home, HSK level list, HSK2 lesson 1 entry, HSK2 word practice input, high-frequency topic list, listening dashboard, and subscriptions/admin-gated surface.
  - HSK2 lesson 1 now opens in local lab mode when `DATABASE_URL` is missing, using built-in content lock fallback rules only on localhost.
  - Desktop HSK level cards stay inside the viewport at 1280 x 720.
  - Mobile HSK2 lesson 1 opens the study part picker instead of a VIP modal in local lab fallback mode.
  - HSK2 word practice accepts pinyin input and reveals the expected memory details without horizontal overflow.
  - Mobile listening and subscriptions horizontal strips keep touch scrolling while hiding visible scrollbars.
  - Screenshots were captured in the Codex QA session and are not committed to the repo.
- Database fallback:
  - `/api/payments/plans` returns `503` when `DATABASE_URL` is not configured.

## Known Gaps

- HSK2 lesson packs for lessons 2-15 are lab-generated and should be treated as lab content unless replaced with approved textbook-final source.
- This report does not certify production sync readiness.

## Production Boundary

- No deployment to `https://hoctrung.com/`.
- No writes to `D:\6.20_Pinda_V1\02_Working_Project\pratice_write`.
- No production database, payment, VIP user, or order operation.
- No live payment key or production database URL is required for local smoke checks.
