const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const moduleUrl = pathToFileURL(path.join(repoRoot, "scripts", "normalize-ajie-listening-files.mjs")).href;

async function loadImporter() {
  return import(moduleUrl);
}

test("normalizes Ajie monologue course text into a lab listening episode", async () => {
  const { parseAjieListeningText, normalizeAjieCourse } = await loadImporter();
  const source = JSON.stringify({
    course: {
      id: "monologue_course",
      name: "Doc thoai",
      topics: [
        {
          id: "topic_001",
          title: "Chu de 1",
          level: { code: "beginner", name: "So cap" },
          audio: { url: "audio/monologue/topic_001.mp3", duration: 120.5 },
          sentences: [
            {
              id: "sent_001",
              order: 1,
              text: { zh: "大家好，我叫安。", pinyin: "Dajia hao, wo jiao An.", vi: "Chao moi nguoi, toi ten la An." },
              audio_time: { start: 0.5, end: 3.2 },
            },
          ],
          vocabulary: [
            {
              id: "vocab_001",
              word: { zh: "大家", pinyin: "dajia", vi: "moi nguoi" },
              audio: { url: "/audio/vocabulary/dajia.mp3", duration: 1.1 },
            },
          ],
        },
      ],
    },
  });

  const parsed = parseAjieListeningText(source, "DocThoai.txt");
  const episodes = normalizeAjieCourse(parsed);

  assert.equal(episodes.length, 1);
  assert.equal(episodes[0].id, "ajie-monologue-topic-001");
  assert.equal(episodes[0].title, "Chu de 1");
  assert.equal(episodes[0].category, "So cap");
  assert.equal(episodes[0].audio_main, "audio/monologue/topic_001.mp3");
  assert.deepEqual(episodes[0].typing_words, ["大家"]);
  assert.equal(episodes[0].sentences[0].chinese, "大家好，我叫安。");
  assert.equal(episodes[0].sentences[0].start, 0.5);
  assert.equal(episodes[0].keywords[0].audio_word, "/audio/vocabulary/dajia.mp3");
});

test("normalizes Ajie dialogue course text while preserving speaker labels", async () => {
  const { parseAjieListeningText, normalizeAjieCourse } = await loadImporter();
  const source = JSON.stringify({
    course: {
      id: "dialogue_course",
      name: "Doi thoai",
      levels: [
        {
          id: "beginner",
          name: "Doi thoai so cap",
          topics: [
            {
              id: "beginner_topic_001",
              title: "Chu de 1",
              audio: { url: "audio/beginner/topic_001.mp3", duration: 120.5 },
              dialogues: [
                {
                  id: "dlg_001",
                  order: 1,
                  speaker: "A",
                  text: { zh: "你好！", pinyin: "Ni hao!", vi: "Xin chao!" },
                  audio_time: { start: 0.5, end: 1.8 },
                },
                {
                  id: "dlg_002",
                  order: 2,
                  speaker: "B",
                  text: { zh: "你好！你叫什么名字？", pinyin: "Ni hao! Ni jiao shenme mingzi?", vi: "Xin chao! Ban ten la gi?" },
                  audio_time: { start: 2, end: 4.6 },
                },
              ],
              vocabulary: [
                {
                  id: "vocab_001",
                  word: { zh: "你好", pinyin: "ni hao", vi: "xin chao" },
                  audio: { url: "/audio/ni.mp3", duration: 1.2 },
                },
              ],
            },
          ],
        },
      ],
    },
  });

  const parsed = parseAjieListeningText(source, "DoiThoai.txt");
  const episodes = normalizeAjieCourse(parsed);

  assert.equal(episodes.length, 1);
  assert.equal(episodes[0].id, "ajie-dialogue-beginner-topic-001");
  assert.equal(episodes[0].category, "Doi thoai so cap");
  assert.equal(episodes[0].speaker, "A/B");
  assert.equal(episodes[0].sentences[0].speaker, "A");
  assert.equal(episodes[0].sentences[1].speaker, "B");
  assert.deepEqual(episodes[0].typing_words, ["你好"]);
});

test("reports invalid Ajie JSON with the source file name", async () => {
  const { parseAjieListeningText } = await loadImporter();

  assert.throws(
    () => parseAjieListeningText('{ "course": { "id": "dialogue_course", "order": 1,a } }', "DoiThoai.txt"),
    /DoiThoai\.txt: invalid JSON/,
  );
});

test("reports missing audio assets referenced by normalized Ajie episodes", async () => {
  const { checkReferencedAudioFiles } = await loadImporter();
  const episodes = [
    {
      audio_main: "audio/monologue/topic_001.mp3",
      keywords: [
        { audio_word: "/audio/vocabulary/dajia.mp3" },
        { audio_word: "" },
      ],
    },
  ];

  const missing = checkReferencedAudioFiles(episodes, path.join(repoRoot, "public", "listening-app"));

  assert.deepEqual(missing, [
    "audio/monologue/topic_001.mp3",
    "/audio/vocabulary/dajia.mp3",
  ]);
});
