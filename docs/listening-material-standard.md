# Pinda V2 Daily Listening Material Standard

This standard is for the V2 staging lab only. It defines the upload package that
the material factory must produce for Daily Listening.

## Goal

Daily Listening content must be safe to import, stable for future UI redesign,
and easy for a future admin system to manage. UI code must read content from the
catalog layer and must not hardcode lesson text, topic ids, or audio paths.

## Page Architecture

Dialogue:

```text
listening home -> dialogue -> level -> topic list -> lessons -> lesson detail
dialogue -> level -> topic -> lessons
```

Monologue or short article:

```text
listening home -> monologue -> topic category -> lessons -> lesson detail
monologue -> topic_category -> lessons
```

Allowed dialogue levels:

```text
beginner
intermediate
advanced
```

Allowed monologue topic categories:

```text
speech
magazine
psychology
other
```

## Zip Layout

Each zip is one topic batch. One topic batch can contain many lessons.

```text
topic-batch.zip
  manifest.json
  audio/
    title/
      daily-001-title.mp3
      daily-002-title.mp3
    main/
      daily-001-main.mp3
      daily-002-main.mp3
    words/
      daily-001-keyword-001.mp3
      daily-001-keyword-002.mp3
```

`audio/title` is required when `main_audio_includes_title` is false. If the main
audio already starts by reading the title, `audio/title` can be omitted.

Audio paths in `manifest.json` must use relative `audio/...` paths only.
They must not contain `..`, absolute paths, Windows drive paths, or URLs.
Valid examples:

```text
audio/title/daily-001-title.mp3
audio/main/daily-001-main.mp3
audio/words/daily-001-keyword-001.mp3
```

## Manifest Contract

`manifest.json` must use:

```json
{
  "schema_version": "pinda_listening_topic_batch_v1",
  "module": "daily_listening",
  "track": "dialogue",
  "level": {
    "id": "intermediate",
    "name_zh": "中级对话",
    "name_vi": "Hoi thoai trung cap"
  },
  "topic": {
    "id": "topic-life-alone-001",
    "title_zh": "一个人生活",
    "title_vi": "Song mot minh"
  },
  "lessons": []
}
```

For monologue or short article packages, use:

```json
{
  "schema_version": "pinda_listening_topic_batch_v1",
  "module": "daily_listening",
  "track": "monologue",
  "level": {
    "id": "magazine",
    "name_zh": "杂志",
    "name_vi": "Tap chi"
  },
  "topic": {
    "id": "topic-news-entertainment-001",
    "title_zh": "娱乐新闻",
    "title_vi": "Tin giai tri"
  },
  "lessons": []
}
```

## Lesson Contract

Each lesson must contain:

```json
{
  "id": "daily-001",
  "type": "dialogue",
  "title_zh": "一个人生活，是自由还是孤单？",
  "title_vi": "Song mot minh la tu do hay co don?",
  "main_audio_includes_title": true,
  "title_audio": "",
  "main_audio": "audio/main/daily-001-main.mp3",
  "sentences": [],
  "keywords": []
}
```

Title audio rule:

```text
Option A: main_audio_includes_title = true
  main_audio must start by reading title_zh, then continue into sentence 1.

Option B: main_audio_includes_title = false
  title_audio is required and must point to audio/title/<lesson-id>-title.mp3.
  The app can play title_audio before main_audio.
```

Subtitle rule:

```text
The title must not appear in sentences.
Intro lines such as "please listen to today's dialogue" must not appear in sentences.
sentences[0] must be the first real body sentence.
```

## Sentence Contract

Dialogue sentence:

```json
{
  "id": "daily-001-s001",
  "order": 1,
  "speaker": "A",
  "zh": "阿南，你能接受一个人生活吗？",
  "pinyin": "A Nan, ni neng jieshou yi ge ren shenghuo ma?",
  "vi": "A Nam, ban co chap nhan song mot minh khong?",
  "start": 0,
  "end": 3.2
}
```

Monologue sentence:

```json
{
  "id": "daily-001-s001",
  "order": 1,
  "zh": "很多人下班以后喜欢一个人待着。",
  "pinyin": "Hen duo ren xiaban yihou xihuan yi ge ren daizhe.",
  "vi": "Sau khi tan lam, nhieu nguoi thich o mot minh.",
  "start": 0,
  "end": 4.1
}
```

## Keyword Contract

```json
{
  "id": "daily-001-k001",
  "order": 1,
  "zh": "接受",
  "pinyin": "jieshou",
  "vi": "chap nhan",
  "audio": "audio/words/daily-001-keyword-001.mp3"
}
```

## Validation And Import

Validate only:

```powershell
npm.cmd run validate:listening-package -- "C:\path\to\topic-batch.zip"
```

Import into the V2 staging lab:

```powershell
npm.cmd run import:listening-package -- "C:\path\to\topic-batch.zip"
```

Catalog validation:

```powershell
npm.cmd run validate:listening-catalog
```

## Acceptance Checklist

- The zip has exactly one `manifest.json` at the root.
- Every referenced audio file exists inside the zip.
- Every lesson has `title_zh` and `title_vi`.
- The title is spoken by either `main_audio_includes_title` or `title_audio`.
- The title does not appear inside `sentences`.
- Dialogue packages use `dialogue -> level -> topic -> lessons`.
- Monologue packages use `monologue -> topic_category -> lessons`.
- One topic package can include 1, 5, 10, or more lessons.
- Lesson ids are stable inside the topic batch.
- Audio files are not placed in UI source folders.
