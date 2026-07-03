# Pinda V2 Staging Lab Productization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the V2 staging lab into a complete, stable, current experiment candidate that can be reviewed safely before any production sync.

**Architecture:** Keep the lab self-contained in `D:\6.20_Pinda_V1\03_Lab_Project\pinda-v2-staging-lab`. Treat content generation, frontend lesson loading, backend VIP/payment/admin APIs, and verification as separate gates, with production sync explicitly out of scope.

**Tech Stack:** NestJS 10, Node test runner, static public lesson packs, Netlify functions, PostgreSQL-compatible API layer, local Git/GitHub experiment repo.

---

## Current Baseline

- Repository: `https://github.com/huamei-chinese/pinda-v2-staging-lab.git`
- Branch: `main`
- Remote freshness: `git fetch origin` completed, `main` is aligned with `origin/main`
- Tests: `npm.cmd test` passes 130/130
- Build: `npm.cmd run build` passes
- Dependency security: Nest packages are on the 11.x line, `multer` is overridden to the patched 2.2.x line, and `npm.cmd audit --audit-level=high` reports `found 0 vulnerabilities`.
- Production boundary: no deployment to `https://hoctrung.com/`; do not touch `D:\6.20_Pinda_V1\02_Working_Project\pratice_write`.

## Definition Of Done

- Stable HSK content generation can be run from one command: `npm.cmd run generate:content`.
- High-frequency content generation remains a separate command until its generator no longer rewrites local absolute paths or creates noisy whole-file diffs.
- `npm.cmd test` passes 125/125 or the updated full suite passes with a documented new count.
- `npm.cmd run build` passes.
- Browser smoke checks pass for learner entry, HSK content, high-frequency content, daily listening, admin login surface, VIP/paywall modal surface, and payment modal failure states.
- No real production database, VIP user, payment key, order data, or `hoctrung.com` deployment is touched.
- Dependency security is either fixed without breaking changes or documented as a planned breaking-upgrade task with tests passing after upgrade.

## Task 1: Stable HSK Content Generation Gate

**Files:**
- Modify: `package.json`
- Verify: generated lesson files under `public/lesson-*.js`

- [ ] **Step 1: Run the unified generator**

Run:
```powershell
npm.cmd run generate:content
```

Expected:
```text
Generated HSK2 lab content packs.
```
and no command failure.

- [ ] **Step 2: Verify generated content integrity**

Run:
```powershell
npm.cmd test
```

Expected:
```text
pass 125
fail 0
```

- [ ] **Step 3: Verify build**

Run:
```powershell
npm.cmd run build
```

Expected: command exits with code 0.

## Task 2: Content Completeness Review

**Files:**
- Inspect: `public/lesson-hsk2-l1.js`
- Inspect: `public/lesson-hsk2-batch-2-5.js`
- Inspect: `public/lesson-hsk2-batch-6-10.js`
- Inspect: `public/lesson-hsk2-batch-11-15.js`
- Inspect: `docs/hsk-full-remediation-report.md`

- [ ] **Step 1: Confirm HSK2 status**

Run:
```powershell
node --test tests/lesson-hsk2-l1.test.js tests/lesson-hsk2-batch-2-5.test.js tests/lesson-hsk2-batch-6-10.test.js tests/lesson-hsk2-batch-11-15.test.js tests/hsk2-content-rules.test.js
```

Expected:
```text
fail 0
```

- [ ] **Step 2: Decide whether HSK2 lab generated packs are acceptable**

Acceptance rule:
```text
If HSK2 must match textbook-standard final content, replace generated lab lessons 2-15 with approved source content before calling the lab "content final".
If HSK2 can remain lab-only, keep the generated packs but label them as lab-generated in the release note.
```

- [ ] **Step 3: Review remediation warnings**

Run:
```powershell
Select-String -Path docs/hsk-full-remediation-report.md -Pattern "临时允许预览|不允许作为最终出版内容"
```

Acceptance rule:
```text
Every match must be either remediated into pass_ready_for_ui or explicitly listed in the release note as not final content.
```

## Task 2A: High-Frequency Generator Stabilization

**Files:**
- Inspect: `scripts/generate-high-frequency-content.mjs`
- Inspect: `content/high_frequency_chinese/high_frequency_topics.md`
- Inspect: `public/lesson-high-frequency-topics.js`

- [ ] **Step 1: Reproduce the current noisy generator behavior**

Run:
```powershell
npm.cmd run generate:high-frequency
git diff --stat
git diff -- content/high_frequency_chinese/high_frequency_topics.md
```

Expected before fixing:
```text
public/lesson-high-frequency-topics.js shows a large whole-file diff
content/high_frequency_chinese/high_frequency_topics.md contains a local absolute source path
```

- [ ] **Step 2: Make the generator output stable**

Implementation rule:
```text
The generated markdown should write source as content/high_frequency_chinese/high_frequency_topics.json, not a machine-specific absolute path.
The generated public JS should preserve the repository's committed formatting style or the repository should intentionally commit one canonical generated formatting style.
```

- [ ] **Step 3: Validate high-frequency generation**

Run:
```powershell
npm.cmd run generate:high-frequency
npm.cmd test
```

Expected:
```text
tests pass
git diff --stat shows only intentional high-frequency source or output changes
```

## Task 3: Browser Smoke Test Gate

**Files:**
- Inspect: `public/index.html`
- Inspect: `public/app.js`
- Inspect: `public/styles.css`

- [ ] **Step 1: Start a local lab server**

Run:
```powershell
npm.cmd run start:dev
```

Expected:
```text
Nest application successfully started
```

- [ ] **Step 2: Check learner routes manually or with browser automation**

Verify these surfaces:
```text
home loads
HSK level list loads
HSK2 lesson 1 starts
HSK3/4/5 generated lesson list loads
high-frequency module opens
answer input accepts pinyin
teacher preview stays hidden before completion
VIP lock surface opens without creating a real order
admin login surface opens without overwriting learner session
```

- [ ] **Step 3: Record browser evidence**

Save evidence in the task report:
```text
URL checked
viewport
surface checked
result
screenshots if available
```

## Task 4: Dependency Security Gate

**Files:**
- Modify only after review: `package.json`
- Modify only after review: `package-lock.json`

- [ ] **Step 1: Re-run dependency audit**

Run:
```powershell
npm.cmd audit --audit-level=high
```

Expected before work:
```text
audit reports the current vulnerability list
```

- [ ] **Step 2: Apply non-breaking fixes first**

Run:
```powershell
npm.cmd audit fix
```

Expected:
```text
package-lock.json may change; package.json should not jump Nest major versions
```

- [ ] **Step 3: Validate after non-breaking fixes**

Run:
```powershell
npm.cmd test
npm.cmd run build
```

Expected:
```text
tests pass
build passes
```

- [ ] **Step 4: Plan breaking Nest upgrade separately**

Acceptance rule:
```text
Do not run npm.cmd audit fix --force unless the task explicitly targets Nest major-version upgrade and includes API, admin, payment, VIP, Netlify function, and browser smoke checks.
```

## Task 5: Production Boundary Gate

**Files:**
- Inspect: `.env.example`
- Inspect: `netlify/functions/api.mjs`
- Inspect: `src/payment/*`
- Inspect: `src/admin/*`
- Inspect: `src/database/*`

- [ ] **Step 1: Scan production-risk strings**

Run:
```powershell
git grep -n -E "hoctrung\.com|02_Working_Project|pratice_write|sk_live|pk_live|SEPAY_WEBHOOK_SECRET=|DATABASE_URL=postgresql://[^u]" -- . ':!public/audio'
```

Expected:
```text
No real production URL, live key, formal project path, or real database URL is present.
```

- [ ] **Step 2: Confirm no deployment action**

Acceptance rule:
```text
No Netlify deploy, no Vercel deploy, no Railway deploy, no production Git sync.
```

## Task 6: Release Candidate Report

**Files:**
- Create: `docs/staging-lab-release-candidate.md`

- [ ] **Step 1: Write release candidate status**

Include:
```markdown
# Pinda V2 Staging Lab Release Candidate

## Verified
- Git branch and remote
- test command and result
- build command and result
- content generation command and result
- browser smoke surfaces and result

## Known Gaps
- dependency audit status
- HSK2 lab-generated content status
- remediation warnings
- browser surfaces not checked

## Production Boundary
- no hoctrung.com deployment
- no formal project directory writes
- no production database/payment/VIP/order operations
```

- [ ] **Step 2: Commit only lab artifacts**

Run:
```powershell
git status -sb
git diff --name-only
```

Expected:
```text
Only lab docs, scripts, generated content, tests, or package lock files relevant to this plan are changed.
```
