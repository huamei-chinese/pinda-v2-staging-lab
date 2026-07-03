# Pinda V2 Staging Lab Release Candidate

Date: 2026-07-03
Scope: V2 staging lab only

## Verified

- Git branch and remote: `main` aligned with `origin/main` in the lab repository.
- Unit and static test suite: `npm.cmd test` passed `130/130`.
- Build: `npm.cmd run build` exited successfully.
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
  - Viewport: 1280 x 720.
  - Checked learner home, HSK level list, HSK2 lesson 1 entry, HSK2 word practice input, high-frequency topic list, listening dashboard, and subscriptions/admin-gated surface.
  - HSK2 lesson 1 now opens in local lab mode when `DATABASE_URL` is missing, using built-in content lock fallback rules only on localhost.
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
