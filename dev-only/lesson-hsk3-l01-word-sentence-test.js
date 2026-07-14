(function (root) {
  const wordItems = [
    {
      id: "hsk3_l01_word_001",
      stage: "word",
      vi: "cuối tuần",
      hanzi: "周末",
      pinyin: "zhōumò",
      tone: "zhōumò",
      audio_normal_path: "audio/HSK3/L01/word/hsk3_l01_word_001_normal.mp3",
      audio_slow_path: "audio/HSK3/L01/word/hsk3_l01_word_001_slow.mp3",
      audio: {
        normal: "audio/HSK3/L01/word/hsk3_l01_word_001_normal.mp3",
        slow: "audio/HSK3/L01/word/hsk3_l01_word_001_slow.mp3",
        normalSpeed: 1,
        slowSpeed: 0.75,
      },
      words: [{ text: "周末", pinyin: "zhōumò", tone: "zhōumò", pos: "noun", vi: "cuối tuần" }],
    },
    {
      id: "hsk3_l01_word_002",
      stage: "word",
      vi: "kế hoạch",
      hanzi: "计划",
      pinyin: "jìhuà",
      tone: "jìhuà",
      audio_normal_path: "audio/HSK3/L01/word/hsk3_l01_word_002_normal.mp3",
      audio_slow_path: "audio/HSK3/L01/word/hsk3_l01_word_002_slow.mp3",
      audio: {
        normal: "audio/HSK3/L01/word/hsk3_l01_word_002_normal.mp3",
        slow: "audio/HSK3/L01/word/hsk3_l01_word_002_slow.mp3",
        normalSpeed: 1,
        slowSpeed: 0.75,
      },
      words: [{ text: "计划", pinyin: "jìhuà", tone: "jìhuà", pos: "noun", vi: "kế hoạch" }],
    },
    {
      id: "hsk3_l01_word_003",
      stage: "word",
      vi: "tham gia",
      hanzi: "参加",
      pinyin: "cānjiā",
      tone: "cānjiā",
      audio_normal_path: "audio/HSK3/L01/word/hsk3_l01_word_003_normal.mp3",
      audio_slow_path: "audio/HSK3/L01/word/hsk3_l01_word_003_slow.mp3",
      audio: {
        normal: "audio/HSK3/L01/word/hsk3_l01_word_003_normal.mp3",
        slow: "audio/HSK3/L01/word/hsk3_l01_word_003_slow.mp3",
        normalSpeed: 1,
        slowSpeed: 0.75,
      },
      words: [{ text: "参加", pinyin: "cānjiā", tone: "cānjiā", pos: "verb", vi: "tham gia" }],
    },
    {
      id: "hsk3_l01_word_004",
      stage: "word",
      vi: "đến muộn",
      hanzi: "迟到",
      pinyin: "chídào",
      tone: "chídào",
      audio_normal_path: "audio/HSK3/L01/word/hsk3_l01_word_004_normal.mp3",
      audio_slow_path: "audio/HSK3/L01/word/hsk3_l01_word_004_slow.mp3",
      audio: {
        normal: "audio/HSK3/L01/word/hsk3_l01_word_004_normal.mp3",
        slow: "audio/HSK3/L01/word/hsk3_l01_word_004_slow.mp3",
        normalSpeed: 1,
        slowSpeed: 0.75,
      },
      words: [{ text: "迟到", pinyin: "chídào", tone: "chídào", pos: "verb", vi: "đến muộn" }],
    },
    {
      id: "hsk3_l01_word_005",
      stage: "word",
      vi: "ôn tập",
      hanzi: "复习",
      pinyin: "fùxí",
      tone: "fùxí",
      audio_normal_path: "audio/HSK3/L01/word/hsk3_l01_word_005_normal.mp3",
      audio_slow_path: "audio/HSK3/L01/word/hsk3_l01_word_005_slow.mp3",
      audio: {
        normal: "audio/HSK3/L01/word/hsk3_l01_word_005_normal.mp3",
        slow: "audio/HSK3/L01/word/hsk3_l01_word_005_slow.mp3",
        normalSpeed: 1,
        slowSpeed: 0.75,
      },
      words: [{ text: "复习", pinyin: "fùxí", tone: "fùxí", pos: "verb", vi: "ôn tập" }],
    },
  ];

  const sentenceItems = [
    makeSentence("hsk3_l01_sentence_001", "周末你有什么计划？", "Zhōumò nǐ yǒu shénme jìhuà?", "Cuối tuần bạn có kế hoạch gì?", 1, [
      segment("周末", "zhōumò", "cuối tuần", "词", "名词"),
      segment("你", "nǐ", "bạn", "词", "代词"),
      segment("有", "yǒu", "có", "词", "动词"),
      segment("什么", "shénme", "gì", "词", "代词"),
      segment("计划", "jìhuà", "kế hoạch", "词", "名词"),
    ]),
    makeSentence("hsk3_l01_sentence_002", "我明天参加会议。", "Wǒ míngtiān cānjiā huìyì.", "Ngày mai tôi tham gia cuộc họp.", 2, [
      segment("我", "wǒ", "tôi", "词", "代词"),
      segment("明天", "míngtiān", "ngày mai", "词", "名词"),
      segment("参加", "cānjiā", "tham gia", "词", "动词"),
      segment("会议", "huìyì", "cuộc họp", "词", "名词"),
    ]),
    makeSentence("hsk3_l01_sentence_003", "他上课经常迟到。", "Tā shàngkè jīngcháng chídào.", "Anh ấy thường đến lớp muộn.", 3, [
      segment("他", "tā", "anh ấy", "词", "代词"),
      segment("上课", "shàngkè", "vào lớp", "词", "动词"),
      segment("经常", "jīngcháng", "thường xuyên", "词", "副词"),
      segment("迟到", "chídào", "đến muộn", "词", "动词"),
    ]),
    makeSentence("hsk3_l01_sentence_004", "这个问题比较简单。", "Zhège wèntí bǐjiào jiǎndān.", "Vấn đề này tương đối đơn giản.", 4, [
      segment("这个", "zhège", "cái này", "词", "代词"),
      segment("问题", "wèntí", "vấn đề", "词", "名词"),
      segment("比较", "bǐjiào", "tương đối", "词", "副词"),
      segment("简单", "jiǎndān", "đơn giản", "词", "形容词"),
    ]),
    makeSentence("hsk3_l01_sentence_005", "我们先复习生词。", "Wǒmen xiān fùxí shēngcí.", "Chúng ta ôn lại từ mới trước.", 5, [
      segment("我们", "wǒmen", "chúng ta", "词", "代词"),
      segment("先", "xiān", "trước", "词", "副词"),
      segment("复习", "fùxí", "ôn tập", "词", "动词"),
      segment("生词", "shēngcí", "từ mới", "词", "名词"),
    ]),
  ];

  function segment(text, pinyin, vietnamese, segmentType, pos) {
    return { text, pinyin, vietnamese, segment_type: segmentType, pos };
  }

  function makeSentence(id, hanzi, pinyin, vi, number, segments) {
    const normal = `audio/HSK3/L01/sentence/hsk3_l01_sentence_00${number}_normal.mp3`;
    const slow = `audio/HSK3/L01/sentence/hsk3_l01_sentence_00${number}_slow.mp3`;
    return {
      id,
      stage: "sentence",
      vi,
      hanzi,
      pinyin,
      tone: pinyin,
      audio_normal_path: normal,
      audio_slow_path: slow,
      audio: {
        normal,
        slow,
        normalSpeed: 1,
        slowSpeed: 0.75,
      },
      words: segments.map((part) => ({
        text: part.text,
        pinyin: part.pinyin,
        tone: part.pinyin,
        pos: part.pos,
        vi: part.vietnamese,
        segmentType: part.segment_type,
        segment_type: part.segment_type,
        segmentPos: part.pos,
      })),
      segments,
    };
  }

  root.lessonContent = root.lessonContent || {};
  root.lessonContent.HSK3 = root.lessonContent.HSK3 || {};
  root.lessonContent.HSK3["hsk3-l1"] = {
    id: "hsk3-l1",
    no: 1,
    title: "HSK3 第一课：周末计划",
    titleZh: "HSK3 第一课：周末计划",
    titleVi: "HSK3 Bài 1: Kế hoạch cuối tuần",
    content: {
      word: wordItems,
      sentence: sentenceItems,
    },
    items: [...wordItems, ...sentenceItems],
    wordItems,
    sentenceItems,
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
