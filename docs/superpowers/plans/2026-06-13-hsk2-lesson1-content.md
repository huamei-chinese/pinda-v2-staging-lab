# HSK2 Lesson 1 Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the prototype HSK2 lesson 1 sample data with textbook-backed lesson 1 content and verify it in both automated and browser checks.

**Architecture:** Keep the existing app state and rendering flow intact, but move lesson 1 into a dedicated override file that can be validated independently and merged into `hskLevels` at runtime. Add a small automated content-shape test and verify the browser renders the new lesson correctly.

**Tech Stack:** Static HTML, browser JavaScript, Node.js built-in test runner, Playwright screenshots

---

### Task 1: Add a failing lesson-pack test

**Files:**
- Create: `D:\TIK-YL\tests\lesson-hsk2-l1.test.js`

- [ ] **Step 1: Write the failing test**
- [ ] **Step 2: Run the test and confirm the content module is missing**
- [ ] **Step 3: Lock the expected lesson structure and item count**

### Task 2: Create the lesson 1 textbook content pack

**Files:**
- Create: `D:\TIK-YL\lesson-hsk2-l1.js`

- [ ] **Step 1: Encode textbook-backed lesson metadata**
- [ ] **Step 2: Encode 20 validated exercise items**
- [ ] **Step 3: Re-run the lesson test and confirm it passes**

### Task 3: Integrate the lesson override into the prototype

**Files:**
- Modify: `D:\TIK-YL\index.html`
- Modify: `D:\TIK-YL\app.js`

- [ ] **Step 1: Load the lesson content file before the app bundle**
- [ ] **Step 2: Merge override content into `hskLevels`**
- [ ] **Step 3: Prefer localized titles when rendering HSK lessons**

### Task 4: Verify the rendered lesson in the browser

**Files:**
- Read: `D:\TIK-YL\qa-*.png`

- [ ] **Step 1: Open the local app**
- [ ] **Step 2: Enter HSK2 lesson 1**
- [ ] **Step 3: Capture screenshots and confirm textbook lesson title and prompt flow**

### Task 5: Record design and workflow notes

**Files:**
- Create: `D:\TIK-YL\docs\superpowers\specs\2026-06-13-hsk2-lesson1-design.md`
- Create: `D:\TIK-YL\docs\superpowers\plans\2026-06-13-hsk2-lesson1-content.md`

- [ ] **Step 1: Save the design brief**
- [ ] **Step 2: Save this implementation plan**
- [ ] **Step 3: Note that git commit is unavailable because this workspace is not a git repository**
