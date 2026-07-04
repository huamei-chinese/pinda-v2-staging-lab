# Pinda V2 Daily Listening Upload Acceptance And Isolation

Scope: V2 staging lab only. Do not use this document for the production site.

## Do I Need Source Documents For Acceptance?

For the upload checklist itself, source dialogue or monologue documents are not required.

The required handoff from the material factory is:

1. Standard ZIP package.
2. Matching validation report.

Source documents are useful only when there is a content dispute, for example:

1. A lesson title in the app does not match the boss manuscript.
2. A sentence is missing or appears in the wrong order.
3. A vocabulary word or Vietnamese explanation looks wrong.
4. The browser acceptance listener hears content that does not match the manuscript.

## Current Chain Health Snapshot

Checked on 2026-07-04 in:

```text
D:\6.20_Pinda_V1\03_Lab_Project\pinda-v2-staging-lab
```

Healthy commands:

```powershell
npm.cmd run validate:listening-catalog
node --test .\tests\listening-catalog.test.js .\tests\listening-catalog-importer.test.js .\tests\listening-catalog-ui-contract.test.js .\tests\listening-package-validator.test.js .\tests\listening-material-standard.test.js
```

Observed healthy result:

```text
validate:listening-catalog: ok=true, lessons=17
listening tests: 25 passed
```

## Upload Gate

Every package must pass this sequence before it is treated as imported content:

1. Confirm this is the V2 staging lab, not production.
2. Confirm the ZIP and validation report belong to the same topic batch.
3. Validate the ZIP:

```powershell
npm.cmd run validate:listening-package -- "C:\path\to\topic-batch.zip"
```

4. Import only after validation passes.
5. Validate the catalog after import:

```powershell
npm.cmd run validate:listening-catalog
```

6. Run the listening tests:

```powershell
node --test .\tests\listening-catalog.test.js .\tests\listening-catalog-importer.test.js .\tests\listening-catalog-ui-contract.test.js .\tests\listening-package-validator.test.js .\tests\listening-material-standard.test.js
```

7. Run local browser acceptance.
8. Commit or push only after boss browser acceptance.

## Import Modes

Normal incremental import:

```powershell
npm.cmd run import:listening-package -- "C:\path\to\topic-batch.zip"
```

Clean replacement import:

```powershell
npm.cmd run import:listening-package -- --replace-container "C:\path\to\topic-batch.zip"
```

Use `--replace-container` carefully.

For dialogue packages, `--replace-container` clears the whole dialogue level container:

```text
dialogue -> beginner
dialogue -> intermediate
dialogue -> advanced
```

For monologue packages, `--replace-container` clears the whole monologue category container:

```text
monologue -> speech
monologue -> magazine
monologue -> psychology
monologue -> other
```

If multiple topic packages belong to the same container, use this pattern:

1. Import the first real package for that container with `--replace-container`.
2. Import the remaining real packages for the same container without `--replace-container`.

This removes old test content once, then preserves the real topic batches imported after it.

## Old Content Isolation Strategy

The app content layer must stay separated from UI code:

1. Imported catalog data lives in `public/listening-app/data/listening-catalog.json`.
2. Browser-readable catalog data lives in `public/listening-app/data/listening-catalog.js`.
3. Imported audio lives under `public/listening-app/audio/catalog/`.
4. UI source files must not hardcode imported topic ids, lesson text, or audio paths.

Old test content must not be mixed into the learner path. Use these rules:

1. Before importing the first real package in a container, use `--replace-container`.
2. After each import, run `validate:listening-catalog`.
3. Check that the target container contains only expected real topics and lessons.
4. Do not delete audio folders manually unless a separate cleanup task verifies that no catalog entry references them.
5. Do not modify production project folders or production data.

## Browser Acceptance Checklist

Listening home:

1. The app opens at the listening home, not an old detail page.
2. Dialogue and monologue entry cards are visible.
3. Dialogue shows levels first.
4. Monologue shows topic categories directly, without an extra level layer.

Dialogue flow:

```text
listening home -> dialogue -> level -> topic list -> lesson list -> lesson detail
```

Monologue flow:

```text
listening home -> monologue -> topic category -> lesson list -> lesson detail
```

Lesson detail:

1. The displayed lesson title matches `title_zh`.
2. The spoken title plays before the body.
3. The first subtitle sentence is the first real body sentence.
4. The title does not appear inside subtitles.
5. The main audio plays.
6. Previous and next sentence buttons work.
7. Pinyin and Vietnamese subtitle toggles work.
8. Vocabulary list shows words from the current lesson only.
9. Vocabulary audio paths load from the catalog audio folder.
10. No old demo lesson appears in the current learner path.

## Required Boss Acceptance Evidence

For each imported batch, record:

1. ZIP path.
2. Validation report path.
3. Validation command result.
4. Import command used.
5. Catalog validation result.
6. Listening test result.
7. Browser route checked.
8. Boss acceptance result.

Without these eight items, the batch is not ready for GitHub merge.
