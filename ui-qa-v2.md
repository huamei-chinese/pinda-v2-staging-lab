# V2 UI Polish And Functional QA

Date: 2026-06-13

## UI Findings Before Polish

- The V2 prototype looked unfinished because spacing, card hierarchy, and page rhythm were too generic.
- Homepage modules used loose emoji-style imagery and did not feel like one coherent learning product.
- HSK lesson selection lacked a clear course-path feeling.
- Practice page had too much empty space without useful learning context.
- Chinese and Vietnamese helper information was present but not visually separated clearly enough.

## Fixes Applied

- Added a glass-style app header and tighter page shell.
- Added a light learning-path motif and a clearer daily goal card.
- Reworked module cards with stable product symbols instead of loose emoji art.
- Reworked HSK lesson rows into course-path style nodes.
- Polished high-frequency topic cards with colored top accents and icon tiles.
- Reduced practice-page vertical emptiness and added teacher Chinese preview.
- Improved card radii, shadows, spacing, and visual token consistency.

## Functional QA

- `nihao` -> `你好`: passed.
- `ni hao` -> `你好`: passed.
- `你好` -> `你好`: passed.
- `你 好` -> `你好`: passed.
- Language toggle Vietnamese/Chinese: passed.
- Daily topic practice to completion page: passed.
- Desktop screenshots captured:
  - `ui-polish-home.png`
  - `ui-polish-hsk.png`
  - `ui-polish-practice.png`
  - `ui-polish-complete.png`
- Mobile screenshot captured:
  - `ui-polish-mobile.png`

## Remaining P3 Polish

- Vietnamese copy should still be reviewed by a Vietnamese QA pass before real content launch.
- Mobile top bar can be further compressed once final brand name is chosen.
- Final production icon set should replace prototype symbols before public release.

Final result: passed
