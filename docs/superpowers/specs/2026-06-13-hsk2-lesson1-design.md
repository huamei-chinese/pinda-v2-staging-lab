# HSK2 Lesson 1 Content Design

**Scope:** Replace the current sample HSK2 lesson 1 data with textbook-based content from *HSK Standard Course 2*, Lesson 1, while preserving the existing browser prototype and interaction model.

**Lesson Source:** `HSK标准教程2.pdf`, Lesson 1: `九月去北京旅游最好`

**Product Goal:** Ship the first real textbook-backed lesson in the prototype so the content pipeline can be validated before scaling to all 15 lessons.

## Constraints

- Vietnamese is the learner-facing default language.
- Vietnamese translations must be idiomatic and teaching-appropriate, not literal Chinese-to-Vietnamese calques.
- Existing exercise flow remains:
  - word
  - phrase
  - sentence
  - mixed review
- Pinyin-first input remains the default, with Hanzi also accepted by the current matcher.
- The existing UI and app state model stay intact for this pass.

## Content Strategy

- Use the textbook lesson title, core vocabulary, and grammar focus as the canonical source.
- Keep the first lesson pack to 20 exercises for a manageable MVP lesson:
  - 10 word items
  - 4 phrase items
  - 4 sentence items
  - 2 mixed review items
- Favor textbook sentences where possible, then use tightly constrained lesson-consistent recombinations for review items.

## Validation Rules

- Every exercise item must include:
  - Vietnamese prompt
  - Hanzi answer
  - pinyin answer
  - tone-marked display
  - word breakdown
  - part-of-speech tag
- No mojibake or replacement characters in stored content.
- Lesson metadata must expose:
  - `id`
  - `no`
  - `titleZh`
  - `titleVi`
  - `items`

## Integration Plan

- Store lesson 1 content in a dedicated file instead of embedding more textbook data directly into the already-large `app.js`.
- Load the lesson pack before `app.js`.
- Merge lesson overrides into the existing `hskLevels` structure at runtime.
- Prefer localized lesson titles in UI:
  - Vietnamese view -> `titleVi`
  - Chinese view -> `titleZh`

## Acceptance Criteria

- HSK2 lesson 1 no longer uses sample greeting content.
- The lesson title and exercise prompts align with textbook lesson 1.
- The browser prototype still loads without breaking navigation.
- A repeatable automated test verifies the lesson pack shape and count.

## Notes

- The current workspace is not a git repository, so this spec cannot be committed even though the Superpowers workflow normally expects a commit.
