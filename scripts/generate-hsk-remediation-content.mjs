import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pinyin } from "pinyin-pro";
import { curatedLessonPlans } from "./hsk-remediation-curated-plans.mjs";

const root = process.cwd();
const require = createRequire(import.meta.url);

const source = "HSK academic remediation - pinyin dictation safe content";
const remediationTargets = {
  HSK4: new Set(Array.from({ length: 10 }, (_, index) => `hsk4-l${index + 11}`)),
  HSK5: new Set(Array.from({ length: 24 }, (_, index) => `hsk5-l${index + 13}`)),
};

const pdfTextEvidenceLessons = new Set(Array.from({ length: 18 }, (_, index) => `hsk5-l${index + 19}`));

const packFiles = [
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
];

const hardStopWords = new Set(["的", "了", "吗", "呢", "内容", "重点"]);
const weakWords = new Set(["方式", "结果", "经验", "交流", "竞争", "文化", "问题", "方法"]);
const bannedPatterns = [
  /是本课重点/,
  /学习内容需要方法/,
  /我们需要理解重点/,
  /本课重点/,
  /重要内容/,
];

const phraseOverrides = {
  茶: "喝茶",
  京剧: "看京剧",
  读书: "认真读书",
  世界: "了解世界",
  地球母亲: "保护地球",
  保护地球: "保护地球",
  教育: "教育孩子",
  孩子: "教育孩子",
  生活: "热爱生活",
  自然: "保护自然",
  科技: "发展科技",
  风景: "欣赏风景",
  纸上谈兵: "避免纸上谈兵",
  判断: "做出判断",
  体重: "控制体重",
  节食: "合理节食",
  离开: "及时离开",
  艺术: "欣赏艺术",
  家乡: "想念家乡",
  小人书摊: "逛小人书摊",
  阅读: "坚持阅读",
  思考: "独立思考",
  放手: "学会放手",
  支教: "参加支教",
  行动: "开始行动",
  自己: "照顾自己",
  下棋: "喜欢下棋",
  培养: "培养能力",
  对手: "尊重对手",
  市场: "了解市场",
  高效: "提高效率",
  门槛效应: "理解门槛效应",
  环保: "支持环保",
  身边: "关注身边",
  缓解: "缓解交通",
  交通: "缓解交通",
  妙招: "想出妙招",
  鸟儿: "观察鸟儿",
  护肤术: "学习护肤术",
  植物: "观察植物",
  出汗: "容易出汗",
  老舍: "老舍先生",
  养花: "喜欢养花",
  微信: "使用微信",
  用户: "服务用户",
  海外: "住在海外",
  争论: "参加争论",
  奇迹: "创造奇迹",
  鲁迅: "阅读鲁迅",
  作家: "了解作家",
  成语: "学习成语",
  成语故事: "学习成语故事",
};

const viOverrides = {
  喝茶: "uống trà",
  看京剧: "xem kinh kịch",
  认真读书: "đọc sách nghiêm túc",
  了解世界: "tìm hiểu thế giới",
  保护地球: "bảo vệ Trái Đất",
  教育孩子: "giáo dục trẻ em",
  热爱生活: "yêu cuộc sống",
  保护自然: "bảo vệ thiên nhiên",
  发展科技: "phát triển khoa học công nghệ",
  欣赏风景: "ngắm phong cảnh",
  避免纸上谈兵: "tránh chỉ nói suông",
  做出判断: "đưa ra phán đoán",
  控制体重: "kiểm soát cân nặng",
  合理节食: "ăn kiêng hợp lý",
  及时离开: "rời đi đúng lúc",
  欣赏艺术: "thưởng thức nghệ thuật",
  想念家乡: "nhớ quê hương",
  逛小人书摊: "ghé sạp truyện tranh cũ",
  坚持阅读: "kiên trì đọc sách",
  独立思考: "suy nghĩ độc lập",
  学会放手: "học cách buông tay",
  参加支教: "tham gia dạy học tình nguyện",
  开始行动: "bắt đầu hành động",
  照顾自己: "chăm sóc bản thân",
  喜欢下棋: "thích chơi cờ",
  培养能力: "rèn luyện năng lực",
  尊重对手: "tôn trọng đối thủ",
  了解市场: "tìm hiểu thị trường",
  提高效率: "nâng cao hiệu suất",
  理解门槛效应: "hiểu hiệu ứng ngưỡng cửa",
  支持环保: "ủng hộ bảo vệ môi trường",
  关注身边: "quan tâm những điều xung quanh",
  缓解交通: "giảm ùn tắc giao thông",
  想出妙招: "nghĩ ra mẹo hay",
  观察鸟儿: "quan sát chim",
  学习护肤术: "học cách chăm sóc da",
  观察植物: "quan sát thực vật",
  容易出汗: "dễ ra mồ hôi",
  老舍先生: "ông Lão Xá",
  喜欢养花: "thích trồng hoa",
  使用微信: "sử dụng WeChat",
  服务用户: "phục vụ người dùng",
  住在海外: "sống ở nước ngoài",
  参加争论: "tham gia tranh luận",
  创造奇迹: "tạo nên kỳ tích",
  阅读鲁迅: "đọc Lỗ Tấn",
  了解作家: "tìm hiểu nhà văn",
  学习成语: "học thành ngữ",
  学习成语故事: "học câu chuyện thành ngữ",
};

function toPinyin(text, toneType = "none") {
  return pinyin(text, { toneType, type: "array", nonZh: "consecutive" })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function makeWord(text, pos = "verb", vi = "") {
  return {
    text,
    pinyin: toPinyin(text, "none"),
    tone: toPinyin(text, "symbol"),
    pos,
    vi: vi || viOverrides[text] || "",
  };
}

function item(stage, vi, hanzi, words, lessonId) {
  return {
    stage,
    vi,
    hanzi,
    words,
    source: `${source} - ${lessonId}`,
    pinyin: words.map((word) => word.pinyin).join(" "),
    tone: words.map((word) => word.tone).join(" "),
  };
}

function loadLessons() {
  const merged = {};
  for (const file of packFiles) {
    const pack = awaitImport(file);
    if (pack.lessons) {
      merged[pack.level] = merged[pack.level] || {};
      for (const lesson of pack.lessons) merged[pack.level][lesson.id] = lesson;
    } else if (pack.id) {
      const level = pack.id.split("-")[0].toUpperCase();
      merged[level] = merged[level] || {};
      merged[level][pack.id] = pack;
    } else if (pack.levels) {
      for (const [level, lessons] of Object.entries(pack.levels)) {
        merged[level] = merged[level] || {};
        for (const lesson of lessons) merged[level][lesson.id] = lesson;
      }
    }
  }
  return merged;
}

function awaitImport(file) {
  return JSON.parse(JSON.stringify(require(path.join(root, "public", file))));
}

function uniqueByText(words) {
  const seen = new Set();
  return words.filter((word) => {
    if (!word?.text || seen.has(word.text)) return false;
    seen.add(word.text);
    return true;
  });
}

function shouldKeepWord(word, lesson) {
  if (!word?.text || hardStopWords.has(word.text)) return false;
  if (weakWords.has(word.text) && !(lesson.titleZh || lesson.title || "").includes(word.text)) return false;
  return true;
}

function selectWords(lesson) {
  const wordItems = lesson.items.filter((entry) => entry.stage === "word").flatMap((entry) => entry.words);
  const phraseWords = lesson.items.flatMap((entry) => entry.words || []);
  const candidates = uniqueByText([...wordItems, ...phraseWords]);
  const selected = candidates.filter((word) => shouldKeepWord(word, lesson));
  const target = lesson.id.startsWith("hsk5") ? 10 : 8;
  if (selected.length >= 8) return selected.slice(0, target);
  const fallback = candidates.filter((word) => word?.text && !hardStopWords.has(word.text));
  return uniqueByText([...selected, ...fallback]).slice(0, target);
}

function phraseFor(word) {
  if (phraseOverrides[word.text]) return phraseOverrides[word.text];
  if (word.pos === "verb") return `认真${word.text}`;
  if (word.pos === "adj") return `很${word.text}`;
  return `了解${word.text}`;
}

function sentenceFor(phrase, level) {
  const cleanPhrase = phrase.replace(/[。？！]/g, "");
  if (level === "HSK5") {
    return cleanPhrase.length <= 5 ? `我们应该${cleanPhrase}。` : `我们要${cleanPhrase}。`;
  }
  if (level === "HSK4") {
    return cleanPhrase.length <= 5 ? `我想${cleanPhrase}。` : `我们一起${cleanPhrase}。`;
  }
  if (level === "HSK3") {
    return `我想${cleanPhrase}。`;
  }
  return `${cleanPhrase}很好。`;
}

function phraseVi(phrase, word) {
  return viOverrides[phrase] || `${word.vi || word.text}`;
}

function sentenceVi(sentence, phrase, word) {
  const vi = phraseVi(phrase, word);
  if (sentence.startsWith("我们应该")) return `Chúng ta nên ${vi}.`;
  if (sentence.startsWith("我们要")) return `Chúng ta cần ${vi}.`;
  if (sentence.startsWith("我们一起")) return `Chúng ta cùng ${vi}.`;
  if (sentence.startsWith("我想")) return `Tôi muốn ${vi}.`;
  return `${vi}.`;
}

function curatedWord([text, pos, vi]) {
  return makeWord(text, pos, vi);
}

function curatedPhraseWords([, , , phrase, phraseVi]) {
  return [makeWord(phrase, "phrase", phraseVi)];
}

function curatedSentenceWords([, , , , , sentence, sentenceVi]) {
  return [makeWord(sentence.replace(/[。？！]/g, ""), "sentence", sentenceVi)];
}

function remediateCuratedLesson(lesson) {
  const plan = curatedLessonPlans[lesson.id];
  const wordItems = plan.map((entry) => item("word", entry[2], entry[0], [curatedWord(entry)], lesson.id));
  const phraseItems = plan.map((entry) => item("phrase", entry[4], entry[3], curatedPhraseWords(entry), lesson.id));
  const sentenceItems = plan.map((entry) => item("sentence", entry[6], entry[5], curatedSentenceWords(entry), lesson.id));
  return {
    id: lesson.id,
    no: lesson.no,
    titleZh: lesson.titleZh || lesson.title,
    titleVi: lesson.titleVi || lesson.title,
    remediationStatus: "curated_academic_review",
    items: [...wordItems, ...phraseItems, ...sentenceItems],
  };
}

function remediateLesson(level, lesson) {
  if (curatedLessonPlans[lesson.id]) return remediateCuratedLesson(lesson);
  const words = selectWords(lesson);
  const wordItems = words.map((word) => item("word", word.vi, word.text, [word], lesson.id));
  const phraseItems = words.map((word) => {
    const phrase = phraseFor(word);
    return item("phrase", phraseVi(phrase, word), phrase, [makeWord(phrase, "verb", phraseVi(phrase, word))], lesson.id);
  });
  const sentenceItems = words.map((word) => {
    const phrase = phraseFor(word);
    const sentence = sentenceFor(phrase, level);
    return item("sentence", sentenceVi(sentence, phrase, word), sentence, [makeWord(sentence.replace(/[。？！]/g, ""), "verb", sentenceVi(sentence, phrase, word))], lesson.id);
  });
  return {
    id: lesson.id,
    no: lesson.no,
    titleZh: lesson.titleZh || lesson.title,
    titleVi: lesson.titleVi || lesson.title,
    remediationStatus: "needs_manual_review",
    items: [...wordItems, ...phraseItems, ...sentenceItems],
  };
}

function hasRisk(lesson) {
  return lesson.items.some((entry) => bannedPatterns.some((pattern) => pattern.test(entry.hanzi || "")));
}

function reviewStatusForLesson(lesson, target) {
  if (!target) return "pass_ready_for_ui";
  if (curatedLessonPlans[lesson.id] && pdfTextEvidenceLessons.has(lesson.id)) return "pass_ready_for_ui";
  if (curatedLessonPlans[lesson.id]) return "needs_textbook_ocr_review";
  return "needs_manual_review";
}

function build() {
  const merged = loadLessons();
  const levels = {};
  const report = {
    summary: { totalLessons: 0, remediatedLessons: 0, needsManualReview: 0 },
    byLevel: {},
    lessons: [],
  };

  for (const [level, lessonsById] of Object.entries(merged)) {
    levels[level] = [];
    report.byLevel[level] = { total: 0, remediated: 0, passReady: 0, needsManualReview: 0 };
    for (const lesson of Object.values(lessonsById).sort((a, b) => (a.no || 0) - (b.no || 0))) {
      report.summary.totalLessons += 1;
      report.byLevel[level].total += 1;
      const target = remediationTargets[level]?.has(lesson.id) || hasRisk(lesson);
      const status = reviewStatusForLesson(lesson, target);
      if (target) {
        const remediated = remediateLesson(level, lesson);
        levels[level].push(remediated);
        report.summary.remediatedLessons += 1;
        report.byLevel[level].remediated += 1;
        if (status === "pass_ready_for_ui") {
          report.byLevel[level].passReady += 1;
        } else {
          report.summary.needsManualReview += 1;
          report.byLevel[level].needsManualReview += 1;
        }
        report.lessons.push({
          level,
          lessonId: lesson.id,
          lessonNo: lesson.no,
          titleZh: lesson.titleZh || lesson.title,
          status,
          evidence: pdfTextEvidenceLessons.has(lesson.id) ? "pdf_text_evidence_available" : "pdf_text_layer_unavailable_or_partial",
          originalProblem: "模板化、占位化内容或高风险课程，已替换为自然的拼音听打教学链",
          deletedContent: lesson.items.filter((entry) => bannedPatterns.some((pattern) => pattern.test(entry.hanzi || ""))).map((entry) => entry.hanzi),
          newWords: remediated.items.filter((entry) => entry.stage === "word").map((entry) => entry.hanzi),
          newPhrases: remediated.items.filter((entry) => entry.stage === "phrase").map((entry) => entry.hanzi),
          newSentences: remediated.items.filter((entry) => entry.stage === "sentence").map((entry) => entry.hanzi),
        });
      } else {
        report.byLevel[level].passReady += 1;
        report.lessons.push({
          level,
          lessonId: lesson.id,
          lessonNo: lesson.no,
          titleZh: lesson.titleZh || lesson.title,
          status,
          originalProblem: "",
          deletedContent: [],
          newWords: [],
          newPhrases: [],
          newSentences: [],
        });
      }
    }
  }

  writeLessonPack(levels);
  writeReport(report);
}

function writeLessonPack(levels) {
  const body = `(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.lessonContent = root.lessonContent || {};
  for (const [level, lessons] of Object.entries(data.levels)) {
    root.lessonContent[level] = root.lessonContent[level] || {};
    for (const lesson of lessons) {
      root.lessonContent[level][lesson.id] = {
        id: lesson.id,
        no: lesson.no,
        title: lesson.titleZh,
        titleZh: lesson.titleZh,
        titleVi: lesson.titleVi,
        remediationStatus: lesson.remediationStatus,
        items: lesson.items,
      };
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return ${JSON.stringify({ source, levels }, null, 2)};
});
`;
  fs.writeFileSync(path.join(root, "public", "lesson-hsk-remediated.js"), body, "utf8");
}

function writeReport(report) {
  const lines = [
    "# HSK Pinyin Dictation Remediation Report",
    "",
    "## 全量整改总评",
    "",
    `总课程数：${report.summary.totalLessons}`,
    `已系统整改课程数：${report.summary.remediatedLessons}`,
    `仍需人工教材复核课程数：${report.summary.needsManualReview}`,
    "",
    "## 分等级统计",
    "",
    ...Object.entries(report.byLevel).map(([level, data]) => `- ${level}: total ${data.total}, remediated ${data.remediated}, pass_ready_for_ui ${data.passReady}, needs_manual_review ${data.needsManualReview}`),
    "",
    "## 每课修复明细",
    "",
    ...report.lessons.map((lesson) => [
      `### ${lesson.level} 第${lesson.lessonNo}课 ${lesson.titleZh}`,
      "",
      `状态：${lesson.status}`,
      `原问题：${lesson.originalProblem || "未发现阻断性问题"}`,
      `删除内容：${lesson.deletedContent.length ? lesson.deletedContent.join(" / ") : "无"}`,
      `新增重点词：${lesson.newWords.length ? lesson.newWords.join(" / ") : "无"}`,
      `新增短语：${lesson.newPhrases.length ? lesson.newPhrases.join(" / ") : "无"}`,
      `新增句子：${lesson.newSentences.length ? lesson.newSentences.join(" / ") : "无"}`,
      `是否适合拼音听打：${lesson.status === "pass_ready_for_ui" ? "是" : "基本适合，但需人工教材复核"}`,
      `是否允许进入 UI：${lesson.status === "pass_ready_for_ui" ? "允许" : "临时允许预览，不允许作为最终出版内容"}`,
      "",
    ].join("\n")),
  ];
  fs.writeFileSync(path.join(root, "docs", "hsk-full-remediation-report.md"), lines.join("\n"), "utf8");
  fs.writeFileSync(path.join(root, "docs", "hsk-full-remediation-report.json"), JSON.stringify(report, null, 2), "utf8");
}

build();
