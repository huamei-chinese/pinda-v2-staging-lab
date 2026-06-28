(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.speechConfig = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function choosePreferredChineseVoice(voices = []) {
    const preferredNames = [
      "Microsoft Xiaoxiao",
      "Microsoft Huihui",
      "Microsoft Yaoyao",
      "Google 普通话",
      "Google 中文",
      "Chrome Mandarin",
    ];
    const mainlandVoices = voices.filter((voice) => /zh[-_](CN|Hans)/i.test(voice.lang || ""));
    return (
      mainlandVoices.find((voice) => preferredNames.some((name) => voice.name?.includes(name))) ||
      mainlandVoices[0] ||
      voices.find((voice) => preferredNames.some((name) => voice.name?.includes(name))) ||
      voices.find((voice) => (voice.lang || "").toLowerCase().startsWith("zh")) ||
      null
    );
  }

  function getSpeechPlaybackConfig({ slow = false, stage = "word" } = {}) {
    const normalRates = {
      word: 0.96,
      phrase: 0.88,
      sentence: 0.8,
      mixed: 0.8,
    };
    return {
      lang: "zh-CN",
      rate: slow ? 0.52 : normalRates[stage] || normalRates.word,
      pitch: 1.02,
      volume: 1,
    };
  }

  function getLessonAudioConfig() {
    return {
      lessonBasePath: "audio/lessons",
      hskBasePath: "audio/HSK",
      dailyBasePath: "audio/daily",
      vocabBasePath: "audio/vocab",
      fileExtension: "mp3",
      slowSuffix: "-slow",
    };
  }

  return { choosePreferredChineseVoice, getSpeechPlaybackConfig, getLessonAudioConfig };
});
