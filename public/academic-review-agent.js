(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.academicReviewAgent = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const lessonPacks = [
    "lesson-hsk2-l1.js",
    "lesson-hsk2-batch-2-5.js",
    "lesson-hsk2-batch-6-10.js",
    "lesson-hsk2-batch-11-15.js",
    "lesson-hsk3-batch-1-5.js",
    "lesson-hsk3-batch-6-10.js",
    "lesson-hsk3-batch-11-15.js",
    "lesson-hsk3-batch-16-20.js",
    "lesson-hsk4-batch-1-5.js",
    "lesson-hsk4-batch-6-10.js",
    "lesson-hsk4-batch-11-15.js",
    "lesson-hsk4-batch-16-20.js",
    "lesson-hsk5-batch-1-6.js",
    "lesson-hsk5-batch-7-12.js",
    "lesson-hsk5-batch-13-18.js",
    "lesson-hsk5-batch-19-24.js",
    "lesson-hsk5-batch-25-30.js",
    "lesson-hsk5-batch-31-36.js",
    "lesson-hsk345-aligned-early.js",
    "lesson-hsk345-aligned-next.js",
    "lesson-hsk345-aligned-final.js",
    "lesson-hsk-remediated.js",
  ];

  const expectedStageCounts = {
    HSK3: { word: 10, phrase: 4, sentence: 4, mixed: 2 },
    HSK4: { word: 10, phrase: 5, sentence: 4, mixed: 1 },
    HSK5: { word: 12, phrase: 5, sentence: 4, mixed: 1 },
  };
  const displayedPos = new Set(["noun", "verb", "adj", "adv", "prep", "particle", "pron", "possessive-pron", "phrase"]);
  const lowLevelStandalone = new Set(["的", "了", "吗", "呢", "因为"]);
  const weakHanziPatterns = [
    /因为的/,
    /的的/,
    /方式文化/,
    /文化结果/,
    /纸上谈兵判断/,
    /观点判断/,
    /观点和判断/,
    /调查传统/,
    /调查和传统/,
    /养花文化/,
    /养花和文化/,
    /文化调查/,
    /文化和调查/,
    /传统保护/,
    /传统和保护/,
    /抽象艺术艺术/,
    /是本课重点/,
    /学习内容需要方法/,
    /我们需要理解重点/,
    /重要内容/,
    /本课学习/,
    /学生需要掌握/,
  ];
  const weakViPatterns = [/\s\+\s/, /undefined/i, /null/i, /NaN/];

  function requirePack(file) {
    if (typeof require !== "function") {
      throw new Error("academic-review-agent requires CommonJS in test mode");
    }
    return require("./" + file);
  }

  function getTeachingPosLabelKey(rawPos) {
    try {
      return require("./lesson-runtime-rules.js").getTeachingPosLabelKey(rawPos);
    } catch {
      return displayedPos.has(rawPos) ? rawPos : "";
    }
  }

  function mergeLessonPack(lessonMap, file) {
    const pack = requirePack(file);
    if (pack.lessons) {
      const level = pack.level;
      lessonMap[level] = lessonMap[level] || {};
      for (const lesson of pack.lessons) {
        lessonMap[level][lesson.id] = lesson;
      }
      return;
    }
    if (pack.id && pack.id.startsWith("hsk")) {
      const level = pack.id.split("-")[0].toUpperCase();
      lessonMap[level] = lessonMap[level] || {};
      lessonMap[level][pack.id] = pack;
      return;
    }
    if (pack.levels) {
      for (const [level, lessons] of Object.entries(pack.levels)) {
        lessonMap[level] = lessonMap[level] || {};
        for (const lesson of lessons) {
          lessonMap[level][lesson.id] = lesson;
        }
      }
    }
  }

  function finalLessons() {
    const lessonMap = {};
    for (const file of lessonPacks) {
      mergeLessonPack(lessonMap, file);
    }
    return Object.entries(lessonMap).flatMap(([level, lessonsById]) =>
      Object.values(lessonsById)
        .sort((a, b) => (a.no || 0) - (b.no || 0))
        .map((lesson) => ({ ...lesson, level })),
    );
  }

  function normalizeLatin(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ü/g, "u")
      .replace(/v/g, "u")
      .replace(/[^a-z0-9]/g, "");
  }

  function normalizeHanzi(value) {
    return String(value || "").replace(/[。？！、，,.!?\s]/g, "");
  }

  function canTrainItem(item) {
    return Boolean(normalizeLatin(item.pinyin) && normalizeHanzi(item.hanzi));
  }

  function addIssue(issues, severity, level, lesson, item, message) {
    issues.push({
      severity,
      level,
      lessonId: lesson.id,
      lessonNo: lesson.no,
      stage: item?.stage || "",
      itemHanzi: item?.hanzi || "",
      itemVi: item?.vi || "",
      message,
    });
  }

  function reviewLesson(level, lesson, issues) {
    if (!lesson.titleZh && !lesson.title) {
      addIssue(issues, "P0", level, lesson, null, "missing Chinese lesson title");
    }
    if (!Array.isArray(lesson.items) || lesson.items.length === 0) {
      addIssue(issues, "P0", level, lesson, null, "lesson has no training items");
      return;
    }

    const expected = expectedStageCounts[level];
    if (lesson.remediationStatus) {
      const counts = lesson.items.reduce((acc, item) => {
        acc[item.stage] = (acc[item.stage] || 0) + 1;
        return acc;
      }, {});
      if ((counts.word || 0) < 8 || (counts.word || 0) > 12) {
        addIssue(issues, "P0", level, lesson, null, `remediated lesson should have 8-12 word items, got ${counts.word || 0}`);
      }
      if (counts.phrase !== counts.word) {
        addIssue(issues, "P0", level, lesson, null, `remediated lesson should have one phrase per word, got ${counts.phrase || 0} phrases for ${counts.word || 0} words`);
      }
      if (counts.sentence !== counts.word) {
        addIssue(issues, "P0", level, lesson, null, `remediated lesson should have one sentence per word, got ${counts.sentence || 0} sentences for ${counts.word || 0} words`);
      }
    } else if (expected) {
      const counts = lesson.items.reduce((acc, item) => {
        acc[item.stage] = (acc[item.stage] || 0) + 1;
        return acc;
      }, {});
      for (const [stage, count] of Object.entries(expected)) {
        if (counts[stage] !== count) {
          addIssue(issues, "P0", level, lesson, null, `expected ${count} ${stage} items, got ${counts[stage] || 0}`);
        }
      }
    }

    lesson.items.forEach((item, itemIndex) => {
      if (!["word", "phrase", "sentence", "mixed"].includes(item.stage)) {
        addIssue(issues, "P0", level, lesson, item, `invalid stage at item ${itemIndex}`);
      }
      if (!item.vi || item.vi.length < 2) {
        addIssue(issues, "P0", level, lesson, item, "missing Vietnamese prompt");
      }
      if (!item.hanzi || item.hanzi.length < 1) {
        addIssue(issues, "P0", level, lesson, item, "missing Chinese answer");
      }
      if (!canTrainItem(item)) {
        addIssue(issues, "P0", level, lesson, item, "item cannot be trained because pinyin or hanzi is empty");
      }
      for (const pattern of weakHanziPatterns) {
        if (pattern.test(item.hanzi)) {
          addIssue(issues, "P1", level, lesson, item, `mechanical or illogical Chinese pattern: ${pattern}`);
        }
      }
      for (const pattern of weakViPatterns) {
        if (pattern.test(item.vi)) {
          addIssue(issues, "P1", level, lesson, item, `bad Vietnamese prompt pattern: ${pattern}`);
        }
      }
      if (level === "HSK5" && item.stage === "word" && lowLevelStandalone.has(item.hanzi)) {
        addIssue(issues, "P1", level, lesson, item, "HSK5 should not drill low-level function word as standalone item");
      }
      if (!Array.isArray(item.words) || item.words.length === 0) {
        addIssue(issues, "P0", level, lesson, item, "missing word breakdown");
      } else {
        for (const word of item.words) {
          const displayLabel = getTeachingPosLabelKey(word.pos);
          if (displayLabel && !displayedPos.has(displayLabel)) {
            addIssue(issues, "P1", level, lesson, item, `unsupported displayed beginner POS label: ${word.pos}`);
          }
          if (!word.text || !word.pinyin || !word.tone || !word.vi) {
            addIssue(issues, "P1", level, lesson, item, "word breakdown is missing text, pinyin, tone, or Vietnamese meaning");
          }
        }
      }
    });
  }

  function runAcademicReview() {
    const lessons = finalLessons();
    const issues = [];
    for (const lesson of lessons) {
      reviewLesson(lesson.level, lesson, issues);
    }
    return {
      summary: {
        totalLessons: lessons.length,
        totalItems: lessons.reduce((sum, lesson) => sum + lesson.items.length, 0),
        totalIssues: issues.length,
      },
      issues,
    };
  }

  return { runAcademicReview };
});
