# Bug Regression Log

## 2026-06-13 - Teacher preview leaked the answer before submission

**Bug**
- The `teacher-preview` block was visible before the learner completed the item.
- This leaked the Hanzi answer and pinyin while the student was still typing.

**Root Cause**
- The first fix used the wrong rule:
  - Vietnamese mode before completion -> hidden
  - Chinese mode before completion -> visible
- That assumption was incorrect for the real product requirement.

**Correct Rule**
- `teacher-preview` must stay hidden before completion in **all** languages and modes.
- It may only appear **after the current item is complete**.

**Regression Protection**
- Rule isolated in: `D:\TIK-YL\practice-rules.js`
- Automated checks in: `D:\TIK-YL\tests\practice-rules.test.js`

## 2026-06-13 - Beginner POS label showed wrong category for function words

**Bug**
- The practice card showed misleading POS labels such as marking `的` as a phrase.
- This is especially harmful for beginner learners because it teaches the wrong grammar category.

**Root Cause**
- Content entries mixed raw structure labels such as `phrase` into the same field used for learner-facing POS display.
- The UI rendered that raw field directly instead of filtering to the beginner teaching set.

**Correct Rule**
- Beginner-facing POS labels only teach these six categories:
  - noun
  - verb
  - adj
  - adv
  - prep
  - particle
- Unsupported deep labels must stay hidden instead of being shown incorrectly.
- Known function words such as `的` must use the correct raw category (`particle`).

**Regression Protection**
- Rule isolated in: `D:\TIK-YL\lesson-runtime-rules.js`
- Automated checks in:
  - `D:\TIK-YL\tests\lesson-runtime-rules.test.js`
  - `D:\TIK-YL\tests\hsk2-content-rules.test.js`

## 2026-06-13 - Memory panel leaked answer details before completion

**Bug**
- The right-side memory card showed answer details before the learner completed the item.
- Even when the main answer stayed hidden, the memory detail row still rendered Hanzi, pinyin, part-of-speech, and Vietnamese meaning.

**Root Cause**
- The memory detail row in `app.js` was always rendered.
- The card title and headline respected completion state, but the detail list did not.

**Correct Rule**
- Before completion, the memory card may show only the locked placeholder state.
- The answer detail list must appear only after the current item is complete.

**Regression Protection**
- Rule isolated in: `D:\TIK-YL\practice-rules.js`
- Automated checks in: `D:\TIK-YL\tests\practice-rules.test.js`

**Required check before future releases**
- In practice mode, before any correct answer is submitted:
  - no `teacher-preview`
  - no Hanzi answer leak
  - no pinyin answer leak

## 2026-06-13 - Dictation slot helper leaked the answer hint before writing

**Bug**
- In dictation mode, the slot footer under the underline showed helper text before the learner answered.
- This exposed part-of-speech plus the Vietnamese meaning too early, which breaks the listening-first exercise.

**Root Cause**
- The slot helper line was rendered unconditionally in `app.js`.
- The rendering rule did not distinguish between translate mode and dictation mode.

**Correct Rule**
- Before the learner solves a slot, the slot helper must stay hidden in every mode.
- After a single slot is solved, only that slot may reveal its part-of-speech and Vietnamese meaning.
- After the whole item is complete, all slot helpers may appear.

**Regression Protection**
- Rule isolated in: `D:\TIK-YL\practice-rules.js`
- Automated checks in: `D:\TIK-YL\tests\practice-rules.test.js`

## 2026-06-14 - High-frequency segmentation split real words into false single characters

**Bug**
- `申请岗位` was split into `申 / 请 / 岗位`, and `申` was mislabeled as a noun.
- `岗位要求` was split into `岗位 / 要 / 求`, creating unnatural one-character answer slots.
- Many high-frequency action words such as `出发`, `租房`, `发烧`, `上班`, and `管理` defaulted to `noun`.

**Root Cause**
- The high-frequency generator did not have enough common multi-character words in its segmentation dictionary.
- Unknown words fell back to `noun`, which made action words look like nouns in the UI.

**Correct Rule**
- Real multi-character words must stay intact when they are the natural training unit.
- Beginner-facing labels must mark common actions as `verb`, not `noun`.
- Known bad fragments such as `申`, `需`, and `求` must not enter generated high-frequency training slots.

**Regression Protection**
- Generator rules in: `D:\TIK-YL\scripts\generate-high-frequency-content.mjs`
- Automated checks in:
  - `D:\TIK-YL\tests\high-frequency-content.test.js`
  - `D:\TIK-YL\tests\slot-granularity.test.js`
