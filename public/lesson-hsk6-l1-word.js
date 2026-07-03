(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  if (root.registerNewFormatLessonContent) {
    root.registerNewFormatLessonContent(data, {
      contentType: "word",
      level: "HSK6",
      lessonId: "hsk6-l1",
      no: 1,
      titleZh: "HSK6 L1",
      titleVi: "HSK6 bai 1",
    });
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return {
    source: "HSK6 L1 lab word pack",
    level: "HSK6",
    id: "hsk6-l1",
    type: "word",
    lesson_number: 1,
    title: "HSK6 L1 - word",
    topic: "HSK6 bai 1",
    items: [
      {
        id: "hsk6-l1-word-001",
        hanzi: "措施",
        pinyin: "cuo shi",
        vietnamese: "bien phap",
        part_of_speech: "Danh tu",
      },
      {
        id: "hsk6-l1-word-002",
        hanzi: "效率",
        pinyin: "xiao lv",
        vietnamese: "hieu suat",
        part_of_speech: "Danh tu",
      },
      {
        id: "hsk6-l1-word-003",
        hanzi: "承担",
        pinyin: "cheng dan",
        vietnamese: "dam nhan",
        part_of_speech: "Dong tu",
      },
    ],
  };
});
