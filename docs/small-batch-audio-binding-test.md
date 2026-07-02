# Small Batch Audio Binding Test

## Scope

Use `Daily / Time / Word` for the first material import test. Keep the batch to 5 or 10 rows only.

Do not import a full HSK listening pack until the small batch passes browser playback and language display checks.

## Required Fields

Each test row should include at least:

- `id`
- `level`
- `module`
- `lesson`
- `type`
- `chinese_text`
- `pinyin`
- `vietnamese`
- `audio_normal_path`
- `audio_slow_path`
- `audio_duration`
- `image_path`
- `answer`
- `options`
- `explanation`

## Audio Path Rules

Use `word` for new paths and filenames.

The runtime still tolerates old `world` path variants for legacy material, but new material should not create more `world` directories or filenames.

Preferred audio fields:

- normal speed: `audio_normal_path`
- slow speed: `audio_slow_path`

Backward-compatible fields still accepted by the runtime:

- `audio.normal`
- `audio.slow`
- `normal_audio`
- `slow_audio`
- `audio`
- `audioSlow`

## Test Checklist

For each row, verify:

- Chinese text is correct.
- Pinyin is correct and matches the Chinese text.
- Vietnamese explanation is natural and matches the Chinese text.
- Normal audio button plays the normal audio file.
- Slow audio button plays the slow audio file.
- Language switch keeps Chinese and pinyin visible when Vietnamese is primary.
- Language switch keeps Vietnamese meaning visible when Chinese is primary.
- Missing audio shows a clear fallback hint and logs the attempted path.
- `word` paths work.
- Legacy `world` paths still work if referenced by old material.

## Stop Conditions

Stop the import test if any of these happen:

- normal and slow audio are swapped
- text and audio belong to different rows
- pinyin does not match the Chinese text
- Vietnamese meaning belongs to another row
- browser console shows repeated missing-audio warnings for valid files
- material requires bulk renaming before a 5-row test can pass
