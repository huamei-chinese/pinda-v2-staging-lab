(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  if (root.registerNewFormatLessonContent) {
    root.registerNewFormatLessonContent(data, {
      contentType: "phrase",
      level: "HSK6",
      lessonId: "hsk6-l1",
      no: 1,
      titleZh: "HSK6 L1",
      titleVi: "HSK6 bai 1",
    });
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return {
    source: "HSK6 L1 lab phrase pack",
    level: "HSK6",
    id: "hsk6-l1",
    type: "phrase",
    lesson_number: 1,
    title: "HSK6 L1 - phrase",
    topic: "HSK6 bai 1",
    items: [
      {
        id: "hsk6-l1-phrase-001",
        hanzi: "采取措施",
        pinyin: "cai qu cuo shi",
        vietnamese: "ap dung bien phap",
        segments: [
          { text: "采取", pos: "Dong tu" },
          { text: "措施", pos: "Danh tu" },
        ],
      },
      {
        id: "hsk6-l1-phrase-002",
        hanzi: "提高效率",
        pinyin: "ti gao xiao lv",
        vietnamese: "nang cao hieu suat",
        segments: [
          { text: "提高", pos: "Dong tu" },
          { text: "效率", pos: "Danh tu" },
        ],
      },
      {
        id: "hsk6-l1-phrase-003",
        hanzi: "承担责任",
        pinyin: "cheng dan ze ren",
        vietnamese: "dam nhan trach nhiem",
        segments: [
          { text: "承担", pos: "Dong tu" },
          { text: "责任", pos: "Danh tu" },
        ],
      },
    ],
  };
});
