# HSK2 QA And Content Rules Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix beginner-facing part-of-speech labels, improve prompt typography in practice mode, and enforce more progressive HSK lesson sequencing for the current prototype.

**Architecture:** Add a tiny runtime rules layer for learner-facing labels and prompt sizing, then correct the current lesson content to match that rules layer. Keep the fixes local to the existing app structure so future HSK3/4/5 imports can reuse the same validation path.

**Tech Stack:** Vanilla JavaScript, Node built-in test runner, existing local browser verification flow

---

### Task 1: Add runtime teaching rules

**Files:**
- Create: `D:\TIK-YL\lesson-runtime-rules.js`
- Test: `D:\TIK-YL\tests\lesson-runtime-rules.test.js`

- [ ] **Step 1: Write the failing test**
- [ ] **Step 2: Run test to verify it fails**
- [ ] **Step 3: Add minimal runtime helpers for POS display and prompt sizing**
- [ ] **Step 4: Run test to verify it passes**

### Task 2: Wire the runtime rules into practice rendering

**Files:**
- Modify: `D:\TIK-YL\app.js`
- Modify: `D:\TIK-YL\index.html`
- Modify: `D:\TIK-YL\styles.css`
- Test: `D:\TIK-YL\tests\lesson-runtime-rules.test.js`

- [ ] **Step 1: Render only the six beginner teaching POS labels**
- [ ] **Step 2: Hide unsupported deep POS labels instead of showing wrong labels**
- [ ] **Step 3: Add prompt size variants so long Vietnamese prompts do not cover the pinyin area**
- [ ] **Step 4: Run tests after wiring**

### Task 3: Correct current HSK2 lesson content and pacing

**Files:**
- Modify: `D:\TIK-YL\lesson-hsk2-l1.js`
- Modify: `D:\TIK-YL\lesson-hsk2-batch-2-5.js`
- Create: `D:\TIK-YL\tests\hsk2-content-rules.test.js`

- [ ] **Step 1: Write the failing regression test for known POS mistakes such as `的`**
- [ ] **Step 2: Add a progression test for current lesson stage ordering**
- [ ] **Step 3: Fix the current lesson token POS values and any too-abrupt item sequencing**
- [ ] **Step 4: Run the content tests to verify the fixes**

### Task 4: Verify and document workflow constraints

**Files:**
- Modify: `D:\TIK-YL\docs\bug-regressions.md`

- [ ] **Step 1: Run all affected tests together**
- [ ] **Step 2: Browser-check the updated practice screen**
- [ ] **Step 3: Note that Git worktrees are blocked until this folder becomes a Git repo**

