# HSK3/4/5 Alignment Workflow

## Goal

Produce textbook-aligned practice content for HSK3, HSK4, and HSK5 in parallel while keeping one shared product standard.

## Parallel Tracks

- HSK3 track: 20 lessons, 10 words / 4 phrases / 4 sentences / 2 mixed review items.
- HSK4 track: 20 lessons, 10 words / 5 phrases / 4 sentences / 1 mixed review item.
- HSK5 track: 36 lessons, 12 words / 5 phrases / 4 sentences / 1 mixed review item.

## Shared Hooks

- Vietnamese translation hook: all Vietnamese prompts, meanings, and explanations must sound natural to Vietnamese learners, not literal machine translation.
- POS hook: learner-facing labels must stay inside the beginner set only: noun, verb, adj, adv, prep, particle.
- Progression hook: each lesson must move from word to phrase to sentence to mixed review.
- Answer leak hook: teacher preview, memory details, and dictation hints must stay hidden before completion.
- Script hook: every generated lesson pack must be loaded before `app.js`.

## Execution Pattern

1. Extract or confirm official lesson titles.
2. Draft level-specific source vocabulary and phrases.
3. Generate lesson packs with `npm run generate:hsk345`.
4. Run `npm test`.
5. Spot-check the browser at `http://localhost:4173`.
6. Record new bugs or rules in `docs/bug-regressions.md`.

## Current Status

- HSK3/4/5 lesson trees exist.
- HSK4 lower-half lesson titles are locked by regression test.
- HSK5 lower-half title details for lesson 26 and lesson 33 are locked by regression test.
- Early aligned override content exists for:
  - HSK3 lessons 1-5
  - HSK4 lessons 1-5
  - HSK5 lessons 1-6
- Next aligned override content exists for:
  - HSK3 lessons 6-10
  - HSK4 lessons 6-10
  - HSK5 lessons 7-12
- Final aligned override content exists for:
  - HSK3 lessons 11-20
  - HSK4 lessons 11-20
  - HSK5 lessons 13-36
- The override packs are generated as `lesson-hsk345-aligned-early.js`, `lesson-hsk345-aligned-next.js`, and `lesson-hsk345-aligned-final.js`, then loaded after prototype packs, before `app.js`.
- Current aligned overrides are textbook-theme candidates and still need human PDF/OCR verification before final release.
