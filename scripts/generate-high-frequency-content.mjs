import fs from "node:fs";
import path from "node:path";
import { pinyin } from "pinyin-pro";

const root = process.cwd();
const outputDir = path.join(root, "content", "high_frequency_chinese");
const localSourcePath = path.join(outputDir, "high_frequency_topics.json");
const sourcePath = process.env.HIGH_FREQUENCY_SOURCE || localSourcePath;
const lessonOutput = path.join(root, "public", "lesson-high-frequency-topics.js");

const colors = [
  "#58cc02",
  "#1cb0f6",
  "#ce82ff",
  "#ff9600",
  "#ff4b4b",
  "#00c2a8",
  "#7c5cff",
  "#ff6b9a",
  "#64748b",
  "#a855f7",
  "#f97316",
  "#e11d48",
];

const icons = ["Hi", "CV", "BK", "TR", "SH", "GO", "HM", "DR", "OF", "FX", "EC", "RL"];

const commonSegments = [
  ["我的", "possessive-pron", "của tôi"],
  ["你的", "possessive-pron", "của bạn"],
  ["他的", "possessive-pron", "của anh ấy"],
  ["她的", "possessive-pron", "của cô ấy"],
  ["它的", "possessive-pron", "của nó"],
  ["我们的", "possessive-pron", "của chúng tôi"],
  ["你们的", "possessive-pron", "của các bạn"],
  ["他们的", "possessive-pron", "của họ"],
  ["我", "pron", "tôi"],
  ["你", "pron", "bạn"],
  ["他", "pron", "anh ấy"],
  ["她", "pron", "cô ấy"],
  ["我们", "pron", "chúng ta"],
  ["大家", "pron", "mọi người"],
  ["老师", "noun", "thầy/cô"],
  ["公司", "noun", "công ty"],
  ["客户", "noun", "khách hàng"],
  ["产品", "noun", "sản phẩm"],
  ["申请", "verb", "ứng tuyển"],
  ["要求", "noun", "yêu cầu"],
  ["岗位", "noun", "vị trí công việc"],
  ["申请退货", "verb", "yêu cầu trả hàng"],
  ["客户要求", "noun", "yêu cầu của khách hàng"],
  ["今天", "noun", "hôm nay"],
  ["明天", "noun", "ngày mai"],
  ["上午", "noun", "buổi sáng"],
  ["下午", "noun", "buổi chiều"],
  ["晚上", "noun", "buổi tối"],
  ["今晚", "noun", "tối nay"],
  ["以前", "noun", "trước khi"],
  ["以后", "noun", "sau khi"],
  ["现在", "noun", "bây giờ"],
  ["下课以后", "noun", "sau giờ học"],
  ["每天下午", "noun", "mỗi buổi chiều"],
  ["每天早上", "noun", "mỗi buổi sáng"],
  ["九点", "noun", "9 giờ"],
  ["三点", "noun", "3 giờ"],
  ["这句话", "noun", "câu này"],
  ["这个语法点", "noun", "điểm ngữ pháp này"],
  ["这个景点", "noun", "điểm tham quan này"],
  ["这个岗位", "noun", "vị trí này"],
  ["这个客户", "noun", "khách hàng này"],
  ["这个产品", "noun", "sản phẩm này"],
  ["这台机器", "noun", "cái máy này"],
  ["这套房子", "noun", "căn nhà này"],
  ["这个", "pron", "này"],
  ["今天的订单", "noun", "đơn hàng hôm nay"],
  ["今天的任务", "noun", "nhiệm vụ hôm nay"],
  ["我叫阿明", "noun", "tôi tên là A Minh"],
  ["很高兴", "adj", "rất vui"],
  ["有点", "adv", "hơi"],
  ["比较", "adv", "khá"],
  ["已经", "adv", "đã"],
  ["还没", "adv", "vẫn chưa"],
  ["马上", "adv", "ngay"],
  ["最好", "adv", "tốt nhất"],
  ["可能", "adv", "có thể"],
  ["一定", "adv", "nhất định"],
  ["及时", "adv", "kịp thời"],
  ["准时", "adv", "đúng giờ"],
  ["不太", "adv", "không lắm"],
  ["不要", "adv", "đừng"],
  ["不能", "adv", "không thể"],
  ["不", "adv", "không"],
  ["没", "adv", "chưa"],
  ["要", "verb", "cần"],
  ["想", "verb", "muốn"],
  ["需要", "verb", "cần"],
  ["可以", "verb", "có thể"],
  ["能", "verb", "có thể"],
  ["会", "verb", "sẽ"],
  ["请", "verb", "xin hãy"],
  ["先", "adv", "trước"],
  ["再", "adv", "rồi"],
  ["把", "prep", "đem"],
  ["给我", "prep", "cho tôi"],
  ["发给我", "verb", "gửi cho tôi"],
  ["由谁", "pron", "do ai"],
  ["让你", "verb", "làm bạn"],
  ["一起", "adv", "cùng nhau"],
  ["最重要的是", "noun", "điều quan trọng nhất là"],
  ["啊", "particle", "nhé"],
  ["吗", "particle", "không"],
  ["了", "particle", "rồi"],
  ["的", "particle", "của"],
  ["得", "particle", "được"],
  ["一", "noun", "một"],
  ["一下", "noun", "một chút"],
  ["一个", "noun", "một"],
  ["一点", "noun", "một chút"],
  ["一套", "noun", "một căn"],
  ["一张", "noun", "một tấm"],
  ["一天", "noun", "một ngày"],
  ["半天", "noun", "nửa ngày"],
  ["空调", "noun", "máy lạnh"],
  ["自我", "pron", "bản thân"],
  ["简单", "adj", "đơn giản"],
  ["参加", "verb", "tham gia"],
  ["通过", "verb", "vượt qua"],
  ["投", "verb", "nộp"],
  ["改", "verb", "sửa"],
  ["看", "verb", "xem"],
  ["发", "verb", "gửi"],
  ["叫", "verb", "tên là"],
  ["什么", "pron", "gì"],
  ["问", "verb", "hỏi"],
  ["等", "verb", "chờ"],
  ["收到", "verb", "nhận được"],
  ["电话", "noun", "điện thoại"],
  ["拍", "verb", "chụp"],
  ["张", "noun", "tấm"],
  ["照", "noun", "ảnh"],
  ["号", "noun", "số"],
  ["老师", "noun", "thầy/cô"],
  ["医生", "noun", "bác sĩ"],
  ["领导", "noun", "lãnh đạo"],
  ["很", "adv", "rất"],
  ["也", "adv", "cũng"],
  ["和", "prep", "và"],
  ["后", "noun", "sau"],
  ["好", "adj", "tốt"],
  ["开始", "verb", "bắt đầu"],
  ["认真", "adv", "nghiêm túc"],
  ["线上", "noun", "trực tuyến"],
  ["听", "verb", "nghe"],
  ["懂", "verb", "hiểu"],
  ["写", "verb", "viết"],
  ["加", "verb", "thêm/kết bạn"],
  ["拿", "verb", "cầm/lấy"],
  ["订", "verb", "đặt"],
  ["投", "verb", "nộp/gửi"],
  ["交", "verb", "nộp/trả"],
  ["进", "verb", "vào"],
  ["开", "verb", "mở/vận hành"],
  ["管理", "verb", "quản lý"],
  ["处理", "verb", "xử lý"],
  ["时间", "noun", "thời gian"],
  ["号码", "noun", "số"],
  ["手机", "noun", "điện thoại"],
  ["首页", "noun", "trang chủ"],
  ["活动", "noun", "hoạt động"],
  ["几点", "pron", "mấy giờ"],
  ["一直", "adv", "liên tục"],
];

function toPinyinNone(text) {
  return pinyin(text, { toneType: "none", type: "array", nonZh: "consecutive" })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeText(value) {
  return String(value || "").trim();
}

function inferPos(text) {
  const verbs = new Set([
    "认识",
    "介绍",
    "来自",
    "参加",
    "通过",
    "通知",
    "出发",
    "到达",
    "打车",
    "堵车",
    "换乘",
    "导航",
    "租房",
    "搬家",
    "维修",
    "发烧",
    "咳嗽",
    "头疼",
    "请假",
    "休息",
    "恢复",
    "上班",
    "下班",
    "加班",
    "汇报",
    "负责",
    "管理",
    "处理",
    "直播",
    "上课",
    "听懂",
    "复习",
    "练习",
    "发音",
    "点餐",
    "打包",
    "付款",
    "预订",
    "拍照",
    "检查",
    "包装",
    "出货",
    "发货",
    "退货",
    "喜欢",
    "关心",
    "约会",
    "道歉",
    "信任",
    "陪伴",
    "分手",
    "结婚",
  ]);
  const adjectives = new Set(["便宜", "贵", "安全", "好"]);
  if (verbs.has(text)) return "verb";
  if (adjectives.has(text)) return "adj";
  return "noun";
}

function makeSegmentDictionary(topic, options = {}) {
  const includePhrases = options.includePhrases !== false;
  const entries = new Map();
  for (const [text, pos, vi] of commonSegments) {
    entries.set(text, { text, pos, vi, tone: pinyin(text, { toneType: "symbol" }) });
  }
  for (const word of topic.words) {
    entries.set(word.zh, { text: word.zh, pos: inferPos(word.zh), vi: word.vi, tone: word.pinyin });
    if (includePhrases) {
      for (const phrase of word.phrases) {
        entries.set(phrase.zh, { text: phrase.zh, pos: "phrase", vi: phrase.vi, tone: phrase.pinyin });
      }
    }
  }
  return [...entries.values()].sort((a, b) => b.text.length - a.text.length);
}

function makeWord(text, tone, vi, pos = "noun") {
  return {
    text,
    pinyin: toPinyinNone(text),
    tone: normalizeText(tone) || pinyin(text, { toneType: "symbol" }),
    pos,
    vi,
  };
}

function segmentTrainingText(text, topic, options = {}) {
  const clean = normalizeText(text).replace(/[，。？！、,.!?]/g, "");
  const dictionary = makeSegmentDictionary(topic, options).filter((entry) => !(options.excludeExact && entry.text === clean));
  const segments = [];
  let index = 0;

  while (index < clean.length) {
    const match = dictionary.find((entry) => clean.startsWith(entry.text, index));
    if (match) {
      segments.push(makeWord(match.text, match.tone, match.vi, match.pos));
      index += match.text.length;
      continue;
    }

    let next = clean.length;
    for (const entry of dictionary) {
      const foundAt = clean.indexOf(entry.text, index + 1);
      if (foundAt !== -1 && foundAt < next) next = foundAt;
    }
    const unknown = clean.slice(index, next);
    if (unknown) {
      segments.push(makeWord(unknown, pinyin(unknown, { toneType: "symbol" }), unknown, "noun"));
    }
    index = next;
  }

  return segments.length ? segments : [makeWord(clean, pinyin(clean, { toneType: "symbol" }), clean, "noun")];
}

function makeItem(stage, vi, hanzi, tone, words, source) {
  return {
    stage,
    vi,
    hanzi,
    words,
    source,
    pinyin: toPinyinNone(hanzi),
    tone: normalizeText(tone) || pinyin(hanzi, { toneType: "symbol" }),
  };
}

function validateTopic(topic) {
  const issues = [];
  if (!topic.topic_id || !topic.topic_zh || !topic.topic_vi || !topic.level_range) {
    issues.push("missing required topic metadata");
  }
  if (!Array.isArray(topic.words) || topic.words.length !== 10) {
    issues.push(`expected 10 words, got ${topic.words?.length || 0}`);
  }
  if (!Array.isArray(topic.sentences) || topic.sentences.length !== 4) {
    issues.push(`expected 4 sentences, got ${topic.sentences?.length || 0}`);
  }
  for (const [wordIndex, word] of (topic.words || []).entries()) {
    if (!word.zh || !word.pinyin || !word.vi) issues.push(`word ${wordIndex + 1} missing zh/pinyin/vi`);
    if (!Array.isArray(word.phrases) || word.phrases.length !== 3) {
      issues.push(`word ${wordIndex + 1} expected 3 phrases, got ${word.phrases?.length || 0}`);
    }
    for (const [phraseIndex, phrase] of (word.phrases || []).entries()) {
      if (!phrase.zh || !phrase.pinyin || !phrase.vi) {
        issues.push(`phrase ${wordIndex + 1}.${phraseIndex + 1} missing zh/pinyin/vi`);
      }
    }
  }
  for (const [sentenceIndex, sentence] of (topic.sentences || []).entries()) {
    if (!sentence.zh || !sentence.pinyin || !sentence.vi || sentence.training_type !== "both") {
      issues.push(`sentence ${sentenceIndex + 1} missing zh/pinyin/vi or training_type`);
    }
  }
  return issues;
}

function convertTopic(topic, index) {
  const source = `high-frequency-source:${topic.topic_id}`;
  const wordItems = topic.words.map((word) =>
    makeItem("word", word.vi, word.zh, word.pinyin, [makeWord(word.zh, word.pinyin, word.vi, inferPos(word.zh))], source),
  );
  const phraseItems = topic.words.flatMap((word) =>
    word.phrases.map((phrase) =>
      makeItem("phrase", phrase.vi, phrase.zh, phrase.pinyin, segmentTrainingText(phrase.zh, topic, { includePhrases: false, excludeExact: true }), source),
    ),
  );
  const sentenceItems = topic.sentences.map((sentence) =>
    makeItem(
      "sentence",
      sentence.vi,
      sentence.zh,
      sentence.pinyin,
      segmentTrainingText(sentence.zh, topic),
      source,
    ),
  );

  return {
    id: topic.topic_id,
    icon: icons[index] || String(index + 1).padStart(2, "0"),
    vi: topic.topic_vi,
    zh: topic.topic_zh,
    levelRange: topic.level_range,
    color: colors[index % colors.length],
    items: [...wordItems, ...phraseItems, ...sentenceItems],
  };
}

function writeBrowserPack(topics) {
  const browserData = JSON.stringify({ source: "high_frequency_topics.json", topics }, null, 2).replace(/\n/g, "\n  ");
  const body = `(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.highFrequencyTopics = data.topics;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return ${browserData};
});
`;
  fs.writeFileSync(lessonOutput, body, "utf8");
}

function writeDocs(sourceTopics, convertedTopics, issueMap) {
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "high_frequency_topics.json"), JSON.stringify(sourceTopics, null, 2), "utf8");
  const sourceLabel = path.relative(root, sourcePath).replace(/\\/g, "/");
  const md = [
    "# 高频汉语主题模块",
    "",
    `素材来源：${sourceLabel}`,
    "",
    "| 主题 | 越南语 | 等级 | 生词 | 短语 | 句子 |",
    "| --- | --- | --- | ---: | ---: | ---: |",
    ...sourceTopics.map((topic) => {
      const phrases = topic.words.reduce((sum, word) => sum + word.phrases.length, 0);
      return `| ${topic.topic_zh} | ${topic.topic_vi} | ${topic.level_range} | ${topic.words.length} | ${phrases} | ${topic.sentences.length} |`;
    }),
    "",
  ].join("\n");
  fs.writeFileSync(path.join(outputDir, "high_frequency_topics.md"), md, "utf8");

  const issueLines = Object.entries(issueMap).flatMap(([topicId, issues]) =>
    issues.length ? [`## ${topicId}`, "", ...issues.map((issue) => `- ${issue}`), ""] : [],
  );
  const report = [
    "# 高频汉语素材接入审查报告",
    "",
    `主题数：${sourceTopics.length}`,
    `练习项：${convertedTopics.reduce((sum, topic) => sum + topic.items.length, 0)}`,
    `问题数：${Object.values(issueMap).reduce((sum, issues) => sum + issues.length, 0)}`,
    "",
    issueLines.length ? issueLines.join("\n") : "未发现结构性问题。内容按素材原文接入，未做扩写或改写。",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(outputDir, "review_report.md"), report, "utf8");
}

const sourceTopics = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const issueMap = Object.fromEntries(sourceTopics.map((topic) => [topic.topic_id, validateTopic(topic)]));
const convertedTopics = sourceTopics.map(convertTopic);

writeBrowserPack(convertedTopics);
writeDocs(sourceTopics, convertedTopics, issueMap);

const issueCount = Object.values(issueMap).reduce((sum, issues) => sum + issues.length, 0);
console.log(
  JSON.stringify(
    {
      sourcePath,
      topics: convertedTopics.length,
      items: convertedTopics.reduce((sum, topic) => sum + topic.items.length, 0),
      issueCount,
      output: lessonOutput,
    },
    null,
    2,
  ),
);
