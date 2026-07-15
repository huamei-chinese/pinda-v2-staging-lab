const VIETNAMESE_QA_HOOK =
  "HOOK: Vietnamese UI, prompts, and explanations must be natural, accurate, and idiomatic for Vietnamese learners.";

function getHuameiAssetConfig() {
  return globalThis.HUAMEI_ASSET_CONFIG && typeof globalThis.HUAMEI_ASSET_CONFIG === "object"
    ? globalThis.HUAMEI_ASSET_CONFIG
    : {};
}

function stripTrailingSlash(value) {
  return String(value || "").trim().replace(/\/+$/, "");
}

function joinAssetUrl(baseUrl, assetPath = "") {
  const base = stripTrailingSlash(baseUrl);
  if (!base) return assetPath;
  const value = String(assetPath || "").trim();
  if (!value) return "";
  const [pathPart, suffix = ""] = value.split(/([?#].*)/, 2);
  return `${base}/${pathPart.replace(/^\/+/, "")}${suffix}`;
}

function resolvePublicAssetPath(path = "", scope = "asset") {
  const value = String(path || "").trim();
  if (!value) return "";
  if (/^(?:https?:)?\/\//i.test(value) || /^(?:data:|blob:)/i.test(value)) return value;

  const config = getHuameiAssetConfig();
  const normalized = value.replace(/^\/+/, "");

  if (scope === "listeningApp") {
    if (config.listeningAppBaseUrl) return joinAssetUrl(config.listeningAppBaseUrl, normalized.replace(/^listening-app\//, ""));
    if (config.assetBaseUrl) return joinAssetUrl(config.assetBaseUrl, normalized);
  }

  if (scope === "audio") {
    if (config.audioBaseUrl) return joinAssetUrl(config.audioBaseUrl, normalized.replace(/^audio\//, ""));
    if (config.assetBaseUrl) return joinAssetUrl(config.assetBaseUrl, normalized);
  }

  if (config.assetBaseUrl) return joinAssetUrl(config.assetBaseUrl, normalized);
  return value;
}

const i18n = {
  vi: {
    brandSubtitle: "Dành cho người Việt học tiếng Trung",
    review: "Ôn câu sai",
    lang: "中文",
    dashboard: "Bảng học hôm nay",
    todayGoal: "Mục tiêu hôm nay",
    goalText: "Hoàn thành 1 bài học hoặc 1 chủ đề.",
    saved: "Từ đã lưu",
    wrong: "Câu sai",
    streak: "Ngày học",
    xp: "Điểm luyện tập",
    choose: "Chọn lộ trình học",
    chooseSub: "Học theo giáo trình HSK hoặc luyện các chủ đề giao tiếp thường dùng.",
    hskTitle: "Khóa HSK",
    hskSub: "HSK2 đến HSK5, học theo từng bài trong giáo trình.",
    dailyTitle: "Tiếng Trung thông dụng",
    dailySub: "Tình huống học tập, công việc và đời sống hằng ngày.",
    enter: "Vào học",
    continue: "Tiếp tục",
    path: "Lộ trình",
    hskCourse: "Chọn cấp độ và bài học HSK",
    dailyCourse: "Chọn chủ đề tiếng Trung tần suất cao",
    lesson: "Bài",
    translate: "Việt → Trung",
    dictation: "Nghe viết",
    stageWord: "Từ vựng",
    stagePhrase: "Từ vựng",
    stageSentence: "Câu",
    stageMixed: "Ôn tập",
    prev: "Trước",
    play: "Nghe",
    slow: "Nghe chậm",
    showAnswer: "Đáp án",
    next: "Tiếp",
    mastered: "Đã thuộc",
    favorite: "Lưu",
    translateHint: "Nhìn tiếng Việt, gõ pinyin hoặc chữ Hán.",
    dictationHint: "Nghe tiếng Trung, gõ pinyin hoặc chữ Hán.",
    inputPlaceholder: "Gõ pinyin hoặc chữ Hán",
    good: "Đúng rồi. Tiếp tục nào.",
    continuePrompt: "Nhấn Enter hoặc Space để sang câu tiếp theo",
    bad: "Chưa đúng. Nghe lại tiếng Trung rồi thử tiếp.",
    done: "Hoàn thành!",
    completeTitle: "Bài học hoàn thành",
    completeSub: "Bạn đã hoàn thành mục tiêu hôm nay.",
    backHome: "Về trang chính",
    nextLesson: "Bài tiếp theo",
    teacherPreview: "Bản xem trước cho giáo viên",
    answerTitle: "Nội dung cần nhớ",
    modeLabel: "Chế độ luyện tập",
    topicCount: "chủ đề",
    itemCount: "mục luyện",
    login: "Đăng nhập",
    register: "Đăng ký",
    logout: "Đăng xuất",
    account: "Tài khoản",
    admin: "Admin",
    vocab: "Bộ từ",
    listening: "Luyện nghe",
    subscriptions: "Gói đăng ký",
    homeTab: "Trang chủ",
    dailyTabNav: "Tần suất cao",
  },
  zh: {
    brandSubtitle: "给越南学生使用的中文练习",
    review: "错题复习",
    lang: "VI",
    dashboard: "今日学习面板",
    todayGoal: "今日学习目标",
    goalText: "完成 1 节课或 1 个主题。",
    saved: "生词收藏",
    wrong: "错题",
    streak: "连续学习",
    xp: "练习积分",
    choose: "选择学习路径",
    chooseSub: "按 HSK 教材学习，或练习高频生活/职场中文。",
    hskTitle: "HSK课程",
    hskSub: "HSK2 到 HSK5，按教材第几课排列。",
    dailyTitle: "高频汉语",
    dailySub: "学习、工作和生活场景里的高频汉语。",
    enter: "进入",
    continue: "继续",
    path: "学习路径",
    hskCourse: "选择HSK等级和课程章节",
    dailyCourse: "选择高频汉语主题",
    lesson: "第",
    translate: "越译中",
    dictation: "听写",
    stageWord: "生词",
    stagePhrase: "生词",
    stageSentence: "句子",
    stageMixed: "混合复习",
    prev: "上一题",
    play: "播放",
    slow: "慢速",
    showAnswer: "答案",
    next: "下一题",
    mastered: "掌握",
    favorite: "收藏",
    translateHint: "看越南语提示，输入拼音或汉字。",
    dictationHint: "听中文语音，输入拼音或汉字。",
    inputPlaceholder: "输入拼音或汉字",
    good: "正确，继续。",
    continuePrompt: "按 Enter / 空格继续",
    bad: "还不对，听一下再试。",
    done: "完成！",
    completeTitle: "课程完成",
    completeSub: "今日目标已完成。",
    backHome: "返回首页",
    nextLesson: "下一课",
    teacherPreview: "老师中文预览",
    answerTitle: "记忆内容",
    modeLabel: "练习模式",
    topicCount: "个主题",
    itemCount: "个练习",
    login: "登录",
    register: "注册",
    logout: "退出登录",
    account: "我的账户",
    admin: "管理员",
    vocab: "生词本",
    listening: "听力",
    subscriptions: "订阅套餐",
    homeTab: "首页",
    dailyTabNav: "高频汉语",
  },
};

const posText = {
  vi: {
    pron: "đại từ",
    noun: "danh từ",
    verb: "động từ",
    adj: "tính từ",
    adv: "phó từ",
    phrase: "từ vựng",
    grammar: "ngữ pháp",
  },
  zh: {
    pron: "代词",
    noun: "名词",
    verb: "动词",
    adj: "形容词",
    adv: "副词",
    phrase: "生词",
    grammar: "语法",
  },
};

const stageKey = {
  word: "stageWord",
  phrase: "stagePhrase",
  sentence: "stageSentence",
  mixed: "stageMixed",
};

const CONTENT_LOCK_ICON_SRC = "assets/content-lock-icon.png";

function renderContentLockIconHTML(size = "md") {
  return `<img class="content-lock-icon content-lock-icon--${size}" src="${CONTENT_LOCK_ICON_SRC}" alt="" aria-hidden="true" />`;
}

function w(text, pinyin, tone, pos, vi) {
  return { text, pinyin, tone, pos, vi };
}

function item(stage, vi, hanzi, words, source = "sample") {
  return {
    stage,
    vi,
    hanzi,
    words,
    source,
    pinyin: words.map((word) => word.pinyin).join(" "),
    tone: words.map((word) => word.tone).join(" "),
  };
}

function splitHskLessonItems(items = []) {
  const safeItems = Array.isArray(items) ? items : [];
  return {
    word: safeItems.filter((entry) => entry.stage === "word"),
    phrase: safeItems.filter((entry) => entry.stage === "phrase"),
    sentence: safeItems.filter((entry) => entry.stage === "sentence"),
  };
}

function normalizeHskLesson(lessonItem = {}) {
  const sourceItems = Array.isArray(lessonItem.items) ? lessonItem.items : [];
  const splitContent = splitHskLessonItems(sourceItems);
  const content = {
    ...lessonItem.content,
    word: Array.isArray(lessonItem.content?.word) ? lessonItem.content.word : splitContent.word,
    phrase: Array.isArray(lessonItem.content?.phrase) ? lessonItem.content.phrase : splitContent.phrase,
    sentence: Array.isArray(lessonItem.content?.sentence) ? lessonItem.content.sentence : splitContent.sentence,
  };
  const items = sourceItems.length > 0 ? sourceItems : [...content.word, ...content.phrase, ...content.sentence];
  return {
    ...lessonItem,
    items,
    content,
    wordItems: content.word,
    phraseItems: content.phrase,
    sentenceItems: content.sentence,
  };
}

function lesson(id, no, title, items) {
  return normalizeHskLesson({ id, no, title, items });
}

const hskLevels = {
  HSK1: [],
  HSK2: [
    lesson("hsk2-l1", 1, "认识你很高兴", [
      item("word", "xin chào", "你好", [w("你好", "ni hao", "nǐ hǎo", "phrase", "xin chào")]),
      item("word", "bạn", "你", [w("你", "ni", "nǐ", "pron", "bạn")]),
      item("word", "tôi", "我", [w("我", "wo", "wǒ", "pron", "tôi")]),
      item("word", "quen biết", "认识", [w("认识", "renshi", "rènshi", "verb", "quen biết")]),
      item("phrase", "rất vui", "很高兴", [w("很", "hen", "hěn", "adv", "rất"), w("高兴", "gaoxing", "gāoxìng", "adj", "vui")]),
      item("sentence", "Rất vui được gặp bạn.", "认识你很高兴。", [
        w("认识", "renshi", "rènshi", "verb", "quen biết"),
        w("你", "ni", "nǐ", "pron", "bạn"),
        w("很高兴", "hen gaoxing", "hěn gāoxìng", "phrase", "rất vui"),
      ]),
      item("mixed", "Tôi rất vui.", "我很高兴。", [w("我", "wo", "wǒ", "pron", "tôi"), w("很高兴", "hen gaoxing", "hěn gāoxìng", "phrase", "rất vui")]),
    ]),
    lesson("hsk2-l2", 2, "今天几号", [
      item("word", "hôm nay", "今天", [w("今天", "jintian", "jīntiān", "noun", "hôm nay")]),
      item("phrase", "mấy giờ", "几点", [w("几", "ji", "jǐ", "pron", "mấy"), w("点", "dian", "diǎn", "noun", "giờ")]),
      item("sentence", "Bây giờ là mấy giờ?", "现在几点？", [w("现在", "xianzai", "xiànzài", "noun", "bây giờ"), w("几点", "ji dian", "jǐ diǎn", "phrase", "mấy giờ")]),
    ]),
    lesson("hsk2-l3", 3, "我想学中文", [
      item("word", "học", "学", [w("学", "xue", "xué", "verb", "học")]),
      item("phrase", "học tiếng Trung", "学中文", [w("学", "xue", "xué", "verb", "học"), w("中文", "zhongwen", "Zhōngwén", "noun", "tiếng Trung")]),
      item("sentence", "Tôi muốn học tiếng Trung.", "我想学中文。", [w("我", "wo", "wǒ", "pron", "tôi"), w("想", "xiang", "xiǎng", "verb", "muốn"), w("学中文", "xue zhongwen", "xué Zhōngwén", "phrase", "học tiếng Trung")]),
    ]),
  ],
  HSK3: [
    lesson("hsk3-l1", 1, "周末你有什么打算", [
      item("word", "cuối tuần", "周末", [w("周末", "zhoumo", "zhōumò", "noun", "cuối tuần")]),
      item("phrase", "có dự định", "有打算", [w("有", "you", "yǒu", "verb", "có"), w("打算", "dasuan", "dǎsuàn", "noun", "dự định")]),
      item("sentence", "Cuối tuần bạn có dự định gì?", "周末你有什么打算？", [w("周末", "zhoumo", "zhōumò", "noun", "cuối tuần"), w("你", "ni", "nǐ", "pron", "bạn"), w("有什么打算", "you shenme dasuan", "yǒu shénme dǎsuàn", "phrase", "có dự định gì")]),
    ]),
    lesson("hsk3-l2", 2, "他什么时候回来", [
      item("word", "trở về", "回来", [w("回来", "huilai", "huílái", "verb", "trở về")]),
      item("sentence", "Khi nào anh ấy trở về?", "他什么时候回来？", [w("他", "ta", "tā", "pron", "anh ấy"), w("什么时候", "shenme shihou", "shénme shíhou", "phrase", "khi nào"), w("回来", "huilai", "huílái", "verb", "trở về")]),
    ]),
  ],
  HSK4: [
    lesson("hsk4-l1", 1, "简单的爱情", [
      item("word", "đơn giản", "简单", [w("简单", "jiandan", "jiǎndān", "adj", "đơn giản")]),
      item("sentence", "Tình yêu không đơn giản.", "爱情不简单。", [w("爱情", "aiqing", "àiqíng", "noun", "tình yêu"), w("不", "bu", "bù", "adv", "không"), w("简单", "jiandan", "jiǎndān", "adj", "đơn giản")]),
    ]),
    lesson("hsk4-l2", 2, "真正的朋友", [
      item("word", "thật sự", "真正", [w("真正", "zhenzheng", "zhēnzhèng", "adj", "thật sự")]),
      item("sentence", "Bạn thật sự là bạn của tôi.", "你是真正的朋友。", [w("你", "ni", "nǐ", "pron", "bạn"), w("真正的朋友", "zhenzheng de pengyou", "zhēnzhèng de péngyou", "phrase", "người bạn thật sự")]),
    ]),
  ],
  HSK5: [
    lesson("hsk5-l1", 1, "人生有选择", [
      item("word", "lựa chọn", "选择", [w("选择", "xuanze", "xuǎnzé", "verb", "lựa chọn")]),
      item("sentence", "Trong cuộc sống luôn có lựa chọn.", "人生总有选择。", [w("人生", "rensheng", "rénshēng", "noun", "cuộc sống"), w("总有", "zong you", "zǒng yǒu", "phrase", "luôn có"), w("选择", "xuanze", "xuǎnzé", "noun", "lựa chọn")]),
    ]),
    lesson("hsk5-l2", 2, "工作效率", [
      item("word", "hiệu suất", "效率", [w("效率", "xiaolv", "xiàolǜ", "noun", "hiệu suất")]),
      item("sentence", "Chúng ta cần nâng cao hiệu suất làm việc.", "我们需要提高工作效率。", [w("我们", "women", "wǒmen", "pron", "chúng ta"), w("需要", "xuyao", "xūyào", "verb", "cần"), w("提高", "tigao", "tígāo", "verb", "nâng cao"), w("工作效率", "gongzuo xiaolv", "gōngzuò xiàolǜ", "phrase", "hiệu suất làm việc")]),
    ]),
  ],
  HSK6: [],
};

const hskLevelContentScripts = {
  HSK1: "lesson-hsk1-word-sentence-content.js",
  HSK2: "lesson-hsk2-word-sentence-content.js",
  HSK3: "lesson-hsk3-word-sentence-content.js",
  HSK4: "lesson-hsk4-word-sentence-content.js",
  HSK5: "lesson-hsk5-word-sentence-content.js",
  HSK6: "lesson-hsk6-word-sentence-content.js",
};

const hskLevelContentLoaded = new Set();
const dynamicScriptPromises = {};
const LISTENING_CATALOG_JSON_SRC = getHuameiAssetConfig().listeningCatalogJsonUrl
  || resolvePublicAssetPath("listening-app/data/listening-catalog.json?v=20260713-catalog", "listeningApp");
const LISTENING_CATALOG_SCRIPT_SRC = getHuameiAssetConfig().listeningCatalogScriptUrl
  || resolvePublicAssetPath("listening-app/data/listening-catalog.js?v=20260713-catalog", "listeningApp");
let listeningCatalogTopics = [];
let listeningCatalogLoaded = false;
let listeningCatalogLoadPromise = null;

function mergeHskLevelContent(levelKey) {
  const lessonMap = globalThis.lessonContent?.[levelKey];
  if (!lessonMap || !hskLevels[levelKey]) return false;
  Object.entries(lessonMap).forEach(([lessonId, lessonValue]) => {
    const lessonIndex = hskLevels[levelKey].findIndex((entry) => entry.id === lessonId);
    const normalizedLesson = normalizeHskLesson(lessonValue);
    if (lessonIndex >= 0) {
      hskLevels[levelKey][lessonIndex] = normalizedLesson;
    } else {
      hskLevels[levelKey].push(normalizedLesson);
    }
  });
  hskLevels[levelKey].sort((a, b) => (a.no || 0) - (b.no || 0));
  return true;
}

if (globalThis.lessonContent) {
  Object.keys(globalThis.lessonContent).forEach((levelKey) => {
    mergeHskLevelContent(levelKey);
  });
}

function loadDynamicScript(src) {
  if (!src) return Promise.resolve();
  if (dynamicScriptPromises[src]) return dynamicScriptPromises[src];

  dynamicScriptPromises[src] = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-lazy-src="${src}"], script[src="${src}"]`);
    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }

    const script = existing || document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.lazySrc = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => {
      delete dynamicScriptPromises[src];
      reject(new Error(`Could not load ${src}`));
    };
    if (!existing) document.body.appendChild(script);
  });

  return dynamicScriptPromises[src];
}

async function ensureHskLevelContent(levelKey) {
  if (!levelKey || hskLevelContentLoaded.has(levelKey)) return true;
  const scriptSrc = hskLevelContentScripts[levelKey];
  if (!scriptSrc) return false;
  try {
    await loadDynamicScript(scriptSrc);
    const merged = mergeHskLevelContent(levelKey);
    if (merged) hskLevelContentLoaded.add(levelKey);
    return merged;
  } catch (error) {
    console.warn("Could not lazy-load HSK level content.", error);
    showToast?.(state.lang === "vi" ? "Chưa tải được dữ liệu bài học. Vui lòng thử lại." : "课程数据加载失败，请重试。");
    return false;
  }
}

function prefetchHskLevelContent(levelKey) {
  if (!levelKey || hskLevelContentLoaded.has(levelKey)) return;
  const scriptSrc = hskLevelContentScripts[levelKey];
  if (!scriptSrc) return;
  loadDynamicScript(scriptSrc)
    .then(() => {
      if (mergeHskLevelContent(levelKey)) hskLevelContentLoaded.add(levelKey);
    })
    .catch((error) => {
      console.warn("Could not prefetch HSK level content.", error);
    });
}

const HIGH_FREQUENCY_TOPICS_SCRIPT_SRC = "lesson-high-frequency-v1-27-topics.js";
const fallbackDailyThemes = [
  ["greeting", "Hi", "Chào hỏi và giới thiệu", "问候与介绍", "#58cc02"],
  ["interview", "CV", "Phỏng vấn xin việc", "工作面试", "#1cb0f6"],
  ["classroom", "BK", "Học trên lớp", "课堂学习", "#ce82ff"],
  ["travel", "TR", "Du lịch", "旅游", "#ff9600"],
  ["shopping", "SH", "Ăn uống và mua sắm", "点餐购物", "#ff4b4b"],
  ["transport", "GO", "Đi lại", "出行交通", "#00c2a8"],
  ["renting", "HM", "Thuê nhà", "租房生活", "#7c5cff"],
  ["sickleave", "DR", "Ốm đau và xin nghỉ", "生病与请假", "#ff6b9a"],
  ["office", "OF", "Đời sống công sở", "职场生活", "#64748b"],
  ["factory", "FX", "Xưởng sản xuất", "工厂车间", "#a855f7"],
  ["ecommerce", "EC", "Công việc TMĐT", "电商职场", "#f97316"],
  ["relationship", "RL", "Quan hệ thân mật", "亲密关系", "#e11d48"],
].map(([id, icon, vi, zh, color]) => ({
  id,
  icon,
  vi,
  zh,
  color,
  items: [
    item("word", "xin chào", "你好", [w("你好", "ni hao", "nǐ hǎo", "phrase", "xin chào")]),
    item("phrase", "rất vui", "很高兴", [w("很", "hen", "hěn", "adv", "rất"), w("高兴", "gaoxing", "gāoxìng", "adj", "vui")]),
    item("sentence", "Bạn hãy nói chậm một chút.", "请说慢一点儿。", [w("请", "qing", "qǐng", "verb", "xin hãy"), w("说慢一点儿", "shuo man yidianr", "shuō màn yìdiǎnr", "phrase", "nói chậm một chút")]),
    item("mixed", "Tôi muốn học tiếng Trung.", "我想学中文。", [w("我", "wo", "wǒ", "pron", "tôi"), w("想", "xiang", "xiǎng", "verb", "muốn"), w("学中文", "xue zhongwen", "xué Zhōngwén", "phrase", "học tiếng Trung")]),
  ],
}));
let dailyThemes = Array.isArray(globalThis.highFrequencyTopics) && globalThis.highFrequencyTopics.length
  ? globalThis.highFrequencyTopics
  : fallbackDailyThemes;
let highFrequencyTopicsLoaded = Array.isArray(globalThis.highFrequencyTopics) && globalThis.highFrequencyTopics.length >= 20;
let highFrequencyTopicsLoadPromise = null;

function hydrateHighFrequencyTopics() {
  if (!Array.isArray(globalThis.highFrequencyTopics) || !globalThis.highFrequencyTopics.length) return false;
  dailyThemes = globalThis.highFrequencyTopics;
  highFrequencyTopicsLoaded = true;
  return true;
}

function ensureHighFrequencyTopicsLoaded(options = {}) {
  if (highFrequencyTopicsLoaded || hydrateHighFrequencyTopics()) return Promise.resolve(true);
  if (highFrequencyTopicsLoadPromise) return highFrequencyTopicsLoadPromise;

  highFrequencyTopicsLoadPromise = loadDynamicScript(HIGH_FREQUENCY_TOPICS_SCRIPT_SRC)
    .then(() => {
      if (!hydrateHighFrequencyTopics()) throw new Error("High frequency topics did not register data.");
      return true;
    })
    .catch((error) => {
      console.warn("Could not lazy-load high-frequency topics.", error);
      if (!options.silent && typeof showToast === "function") {
        showToast(state.lang === "vi"
          ? "ChÆ°a táº£i Ä‘Æ°á»£c chá»§ Ä‘á» giao tiáº¿p. Vui lÃ²ng thá»­ láº¡i."
          : "äº¤é™…ä¸»é¢˜åŠ è½½å¤±è´¥ï¼Œè¯·é‡è¯•ã€‚");
      }
      highFrequencyTopicsLoadPromise = null;
      return false;
    });
  return highFrequencyTopicsLoadPromise;
}

hydrateHighFrequencyTopics();

function shouldLoadHighFrequencyTopicsForCourse() {
  if (highFrequencyTopicsLoaded) return false;
  if (state.module === "daily") return true;
  return state.module === "hsk" && (state.writeCourseView === "paths" || state.writeCourseView === "communication");
}

function renderLessonLoadingHTML({
  variant = "write",
  title = "",
  detail = "",
} = {}) {
  const isListening = variant === "listen";
  const isVi = state.lang === "vi";
  const fallbackTitle = isListening
    ? (isVi ? "\u0110ang t\u1ea3i d\u1eef li\u1ec7u luy\u1ec7n nghe..." : "\u6b63\u5728\u52a0\u8f7d\u542c\u529b\u6570\u636e...")
    : (isVi ? "\u0110ang t\u1ea3i d\u1eef li\u1ec7u b\u00e0i h\u1ecdc..." : "\u6b63\u5728\u52a0\u8f7d\u8bfe\u7a0b\u6570\u636e...");
  const fallbackDetail = isListening
    ? (isVi ? "Chu\u1ea9n b\u1ecb \u00e2m thanh, ph\u1ee5 \u0111\u1ec1 v\u00e0 t\u1eeb kh\u00f3a." : "\u6b63\u5728\u51c6\u5907\u97f3\u9891\u3001\u5b57\u5e55\u548c\u5173\u952e\u8bcd\u3002")
    : (isVi ? "Chu\u1ea9n b\u1ecb t\u1eeb v\u1ef1ng, c\u00e2u m\u1eabu v\u00e0 ti\u1ebfn \u0111\u1ed9 c\u1ee7a b\u1ea1n." : "\u6b63\u5728\u51c6\u5907\u8bcd\u6c47\u3001\u4f8b\u53e5\u548c\u5b66\u4e60\u8fdb\u5ea6\u3002");

  return `
    <div class="lesson-loading-card lesson-loading-card--${isListening ? "listen" : "write"}" role="status" aria-live="polite">
      <div class="lesson-loading-visual" aria-hidden="true">
        <span class="lesson-loading-ring"></span>
        <span class="lesson-loading-mark">${isListening ? desktopNavIcon("listening") : iconSvg("pen")}</span>
        <span class="lesson-loading-dot lesson-loading-dot--one"></span>
        <span class="lesson-loading-dot lesson-loading-dot--two"></span>
        <span class="lesson-loading-dot lesson-loading-dot--three"></span>
      </div>
      <div class="lesson-loading-copy">
        <strong>${title || fallbackTitle}</strong>
        <span>${detail || fallbackDetail}</span>
      </div>
      <div class="lesson-loading-bars" aria-hidden="true">
        <i></i><i></i><i></i>
      </div>
    </div>
  `;
}

function renderHighFrequencyTopicsLoading(options = {}) {
  const isVi = state.lang === "vi";
  const activeNav = state.module === "daily" ? "daily" : "hsk";
  setScreenWithDesktopShell("course", `
    <section class="hsk-lesson-screen hsk-lesson-screen--loading">
      <div class="hsk-lesson-panel">
        ${renderLessonLoadingHTML({
          variant: "write",
          title: isVi ? "\u0110ang t\u1ea3i d\u1eef li\u1ec7u ch\u1ee7 \u0111\u1ec1..." : "\u6b63\u5728\u52a0\u8f7d\u4e3b\u9898\u6570\u636e...",
          detail: isVi ? "S\u1eafp x\u1ebfp c\u00e1c t\u00ecnh hu\u1ed1ng giao ti\u1ebfp v\u00e0 th\u1ebb luy\u1ec7n t\u1eadp." : "\u6b63\u5728\u6574\u7406\u4ea4\u9645\u573a\u666f\u548c\u7ec3\u4e60\u5361\u7247\u3002",
        })}
      </div>
    </section>
  `, "app-desktop-shell--course", activeNav, options);
}

const hskTags = {
  "hsk2-l1": { text: "Du lịch", class: "tag-travel", icon: "🌲" },
  "hsk2-l2": { text: "Thói quen", class: "tag-habit", icon: "🕒" },
  "hsk2-l3": { text: "Mua sắm", class: "tag-shopping", icon: "🛍️" },
  "hsk2-l4": { text: "Công việc", class: "tag-work", icon: "💼" },
  "hsk2-l5": { text: "Mua sắm", class: "tag-shopping", icon: "🛍️" },
  "hsk2-l6": { text: "Ẩm thực", class: "tag-food", icon: "🍜" },
  "hsk2-l7": { text: "Giao tiếp", class: "tag-chat", icon: "💬" },
  "hsk2-l8": { text: "Giao tiếp", class: "tag-chat", icon: "💬" },
  "hsk2-l9": { text: "Học tập", class: "tag-study", icon: "📚" },
  "hsk2-l10": { text: "Thói quen", class: "tag-habit", icon: "🕒" },
};

function getHskTag(lessonId) {
  return hskTags[lessonId] || { text: "Học tập", class: "tag-study", icon: "📚" };
}

function getHskStatusBadge(lessonId) {
  if (lessonId === "hsk2-l1") return `<span class="badge-status badge-new">★ Mới</span>`;
  if (lessonId === "hsk2-l4") return `<span class="badge-status badge-popular">★ Phổ biến</span>`;
  return "";
}

const themeCategories = {
  greeting: ["giao-tiep", "pho-bien"],
  greeting_introduction: ["giao-tiep", "pho-bien"],
  interview: ["cong-viec", "pho-bien"],
  job_interview: ["cong-viec", "pho-bien"],
  classroom: ["hoc-tap"],
  classroom_learning: ["hoc-tap"],
  travel: ["du-lich", "pho-bien"],
  tourism_travel: ["du-lich", "pho-bien"],
  shopping: ["giao-tiep", "pho-bien"],
  dining_shopping: ["giao-tiep", "pho-bien"],
  ordering_shopping: ["giao-tiep", "pho-bien"],
  transport: ["du-lich"],
  transportation: ["du-lich"],
  renting: ["giao-tiep"],
  renting_life: ["giao-tiep"],
  sickleave: ["cong-viec"],
  illness_leave: ["cong-viec"],
  sick_leave: ["cong-viec"],
  office: ["cong-viec"],
  office_life: ["cong-viec"],
  factory: ["cong-viec"],
  factory_workshop: ["cong-viec"],
  ecommerce: ["cong-viec"],
  ecommerce_workplace: ["cong-viec"],
  relationship: ["giao-tiep"],
  close_relationships: ["giao-tiep"],
};

function getThemeIcon(visualType) {
  const icons = {
    chat: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C6.48 2 2 5.82 2 10.5c0 1.83.69 3.52 1.87 4.88-.17.65-.63 1.95-1.72 2.75-.15.11-.18.31-.07.45.07.09.18.14.3.14.32 0 1.62-.07 3.09-.76 1.45.86 3.12 1.34 4.93 1.34 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm-3.5 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm3.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm3.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/></svg>`,
    briefcase: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    book: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    map: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="15" rx="3"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="12" y1="6" x2="12" y2="21"/></svg>`,
    cart: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    bus: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="8" y1="3" x2="8" y2="9"/><line x1="16" y1="3" x2="16" y2="9"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/><line x1="6" y1="19" x2="6" y2="21"/><line x1="18" y1="19" x2="18" y2="21"/></svg>`,
    home: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    clinic: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/></svg>`,
    desk: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="8" rx="2"/><path d="M6 14h12a2 2 0 0 1 2 2v1H4v-1a2 2 0 0 1 2-2z"/><path d="M5 11v3M19 11v3"/><line x1="12" y1="17" x2="12" y2="20"/><path d="M8 21h8M12 20l-3 2M12 20l3 2"/></svg>`,
    gear: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M22 22H2V10l6 4v-4l6 4v-4l6 4v8zM17 14h2v2h-2v-2zm-5 2h2v2h-2v-2zm-5 0h2v2H7v-2z"/></svg>`,
    shop: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    wave: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V7a2 2 0 0 1 4 0v1"/><path d="M11 11V6a2 2 0 0 1 4 0v2"/><path d="M15 11V7a2 2 0 0 1 4 0v4"/><path d="M3 11v2a7 7 0 0 0 14 0v-2"/><path d="M17 11v2a3 3 0 0 0 3 3"/></svg>`,
    plane: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M13 2l7 10-7 10V2z"/></svg>`,
    food: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v8"/><path d="M6 11c0 2.2 1.8 4 4 4h0"/><path d="M10 3v11"/><path d="M18 3c0 5-2 8-4 11v7"/><path d="M18 11V3"/></svg>`,
  };
  return icons[visualType] || `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
}

const STUDENT_USER_STORAGE_KEY = "huamei_student_user";
const ADMIN_USER_STORAGE_KEY = "huamei_admin_user";
const STUDENT_TOKEN_STORAGE_KEY = "huamei_student_token";
const ADMIN_TOKEN_STORAGE_KEY = "huamei_admin_token";
const LEGACY_AUTH_STORAGE_KEYS = ["v2-user", "token", "user", "currentUser", "authToken"];
const HOME_TODAY_STUDY_STORAGE_KEY = "v2-home-today-study";
const HOME_QUICK_HSK_LAST_LESSON_STORAGE_KEY = "v2-home-quick-hsk-last-lesson";
const HOME_QUICK_HSK_SENTENCE_LAST_LESSON_STORAGE_KEY = "v2-home-quick-hsk-sentence-last-lesson";
const HOME_TODAY_TIME_TARGET_SECONDS = 30 * 60;
const HOME_TODAY_VOCAB_TARGET = 20;

function iconSvg(name) {
  const icons = {
    pen: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>`,
    target: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-4"/><path d="M12 16V8"/><path d="M16 16v-6"/><path d="M8 9l4-4 4 3 4-5"/></svg>`,
    badge: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2l2.6 5.1 5.7.8-4.1 4 1 5.7L12 15l-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 2z"/></svg>`,
    "bar-chart": `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M5 19V12"/><path d="M12 19V7"/><path d="M19 19V4"/></svg>`,
    "arrow-left": `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/></svg>`,
    "arrow-right": `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>`,
    "book-open": `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5.5A3.5 3.5 0 0 1 6.5 2H21v17H7a4 4 0 0 0-4 4V5.5z"/><path d="M3 19a4 4 0 0 1 4-4h14"/></svg>`,
    letters: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19l5-14 5 14"/><path d="M6 14h6"/><path d="M15 6h6"/><path d="M18 3v13"/><path d="M16 10c1.2 2.8 2.9 4.8 5 6"/></svg>`,
    message: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.6-4.8A8 8 0 1 1 21 12z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>`,
  };
  return icons[name] || getThemeIcon(name);
}

function readStoredJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch {
    return null;
  }
}

const ADMIN_PORTAL_ROLE_KEYS = ["admin", "staff", "sales", "ctv", "content"];

function normalizeAdminPortalRole(role) {
  const normalized = String(role || "").trim().toLowerCase();
  if (normalized === "admin") return "admin";
  if (normalized === "sales" || normalized === "koc") return "sales";
  if (normalized === "staff" || normalized === "employee") return "staff";
  if (normalized === "ctv") return "ctv";
  if (normalized === "content" || normalized === "content_manager") return "content";
  return "user";
}

function isAdminPortalRole(role) {
  return ADMIN_PORTAL_ROLE_KEYS.includes(normalizeAdminPortalRole(role));
}

function readStoredStudentUser() {
  return readStoredJson(STUDENT_USER_STORAGE_KEY) || readStoredJson(ADMIN_USER_STORAGE_KEY);
}

function readStoredAdminUser() {
  const user = readStoredJson(ADMIN_USER_STORAGE_KEY);
  return isAdminPortalRole(user?.role) ? user : null;
}

function removeAuthStorageKey(key) {
  try { localStorage.removeItem(key); } catch { /* ignore storage errors */ }
  try { sessionStorage.removeItem(key); } catch { /* ignore storage errors */ }
}

function clearLegacyAuthStorage() {
  removeAuthStorageKey("v2-user");
  LEGACY_AUTH_STORAGE_KEYS.forEach(removeAuthStorageKey);
}

function clearAllAuthStorage() {
  [
    STUDENT_USER_STORAGE_KEY,
    ADMIN_USER_STORAGE_KEY,
    STUDENT_TOKEN_STORAGE_KEY,
    ADMIN_TOKEN_STORAGE_KEY,
  ].forEach(removeAuthStorageKey);
  clearLegacyAuthStorage();
}

const state = {
  lang: localStorage.getItem("v2-lang") || "vi",
  screen: "home",
  module: "hsk",
  level: "HSK2",
  writeCourseView: "paths",
  hskLevelPicker: true,
  hskContentType: "",
  hskPendingLessonId: "",
  dailyContentType: "",
  dailyPendingThemeId: "",
  dailyBackTarget: "",
  lessonId: "hsk2-l1",
  themeId: "greeting",
  mode: "translate",
  index: 0,
  activeWord: 0,
  activeInput: "",
  slotProgress: [],
  lastBadInput: "",
  solved: [],
  complete: false,
  score: 0,
  practiceStartedAt: 0,
  practiceCompletedAt: 0,
  wrong: new Set(JSON.parse(localStorage.getItem("v2-wrong") || "[]")),
  saved: new Set(JSON.parse(localStorage.getItem("v2-saved") || "[]")),
  completed: new Set(JSON.parse(localStorage.getItem("v2-completed") || "[]")),
  hskSearchQuery: "",
  hskFilterTab: "newest",
  dailySearchQuery: "",
  dailyFilterTab: "all",
  vocabSearchQuery: "",
  vocabFilterTab: "all",
  listeningView: "dashboard",
  listeningSeedEpisodeId: "",
  listeningTopicId: "",
  listeningLessonsBackTarget: "levels",
  listeningLevelId: "dialogue-so-cap",
  listeningBackTarget: "",
  listeningEpisodeId: "ep-001",
  listeningSentenceIndex: 0,
  listeningVocabPracticeIndex: 0,
  listeningSubtitleMode: localStorage.getItem("v2-listening-subtitle-mode") || "pinyin-zh",
  listeningPlaybackRate: [0.75, 1, 1.25, 1.5].includes(Number(localStorage.getItem("v2-listening-rate"))) ? Number(localStorage.getItem("v2-listening-rate")) : 1,
  listeningSaved: new Set(JSON.parse(localStorage.getItem("v2-listening-saved") || "[]")),
  user: readStoredStudentUser(),
  adminUser: readStoredAdminUser(),
  activities: JSON.parse(localStorage.getItem("v2-activities") || "[]"),
  emailVerificationCode: "",
  emailVerificationStatus: "",
  emailVerificationFormOpen: false,
  emailVerificationSending: false,
  emailVerificationConfirming: false,
  adminUsers: [],
  adminCustomerSearch: "",
  adminCustomerFrom: "",
  adminCustomerTo: "",
  adminStatus: "",
  adminTab: "users",
  paymentPlans: [],
  contentLocksReady: false,
  contentLocksFailed: false,
  contentLocksError: "",
  contentLocksLoadedAt: 0,
  contentLocksLoadingPromise: null,
  pendingUpgradePlanId: "",
  hskLessonFreeItemLimits: {},
  hskLessonAccessRules: {},
  hskLockedLessonIds: new Set(),
  hskLevelCovers: {},
  dailyLockedThemeIds: new Set(),
  dailyThemeFreeItemLimits: {},
  dailyThemeAccessRules: {},
  listeningLockedTopicIds: new Set(),
  listeningLockedLessonIds: new Set(),
  adminContentLevel: "HSK2",
  adminContentModule: "hsk",
  adminContentHskPanel: "locks",
  adminContentLocks: {},
  adminContentDailyLocks: {},
  adminListeningTopicLocks: {},
  adminListeningLessonLocks: {},
  adminListeningCatalogTopics: [],
  adminListeningCatalogLessons: [],
  adminListeningSelectedTopicId: "",
  adminHskLevelCovers: {},
  adminContentStatus: "",
  adminCtvSearch: "",
  adminCtvSelectedId: "ctv-huong",
  adminCtvLinkStatus: "",
  adminCtvLinkSource: "",
  adminCtvReferralLinkDraft: "",
  adminCtvPickerSearch: "",
  adminCtvPage: 1,
  adminCtvPageSize: 10,
  adminCtvUserFilter: "all",
  adminCtvDetailOpen: false,
  adminAnalytics: null,
  adminAnalyticsDays: 30,
  adminAnalyticsLoading: false,
  adminAnalyticsError: "",
  adminAnalyticsFrom: "",
  adminAnalyticsTo: "",
  adminAnalyticsPickerOpen: false,
  adminAnalyticsDraftFrom: "",
  adminAnalyticsDraftTo: "",
  adminAnalyticsCalMonth: "",
  adminVipContentSummaryPage: 1,
  adminVipSessionPage: 1,
  adminVipHighEngagementPage: 1,
  adminVip: null,
  adminVipLoading: false,
  adminVipError: "",
  adminVipFrom: "",
  adminVipTo: "",
  adminVipPickerOpen: false,
  adminVipDraftFrom: "",
  adminVipDraftTo: "",
  adminVipCalMonth: "",
  adminVipPlanFilter: "all",
  adminVipUserPage: 1,
  adminVipUserPageSize: 8,
  adminUserSearch: "",
  adminUserLevelFilter: "all",
  adminUserPlanFilter: "all",
  adminUserPage: 1,
  adminUserPageSize: 9,
  adminUserPagination: null,
  adminUserSummary: null,
  paymentPlansLoaded: false,
  paymentBankConfigured: false,
  paymentPlansPromise: null,
  activePaymentOrderPlanId: "",
};

const $ = (selector) => document.querySelector(selector);
const screens = {
  home: $("#homeScreen"),
  course: $("#courseScreen"),
  practice: $("#practiceScreen"),
  complete: $("#completeScreen"),
  admin: $("#adminScreen"),
  vocab: $("#vocabScreen"),
  listening: $("#listeningScreen"),
  account: $("#accountScreen"),
  subscriptions: $("#subscriptionsScreen"),
};
let adminUserSearchTimer = null;
const t = (key) => i18n[state.lang][key] || i18n.vi[key] || key;
let homeTodayStudySession = { area: "", startedAt: Date.now() };
const MOBILE_PAGE_TRANSITION_CLASS = "mobile-page-transition-enter";
const mobilePageTransitionTimers = new WeakMap();

function shouldRunMobilePageTransition() {
  const isMobile = window.matchMedia?.("(max-width: 700px)")?.matches ?? window.innerWidth <= 700;
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  return isMobile && !reduceMotion;
}

function triggerMobilePageTransition(screenName) {
  const node = screens[screenName];
  if (!node || node.classList.contains("hidden") || !shouldRunMobilePageTransition()) return;

  const oldTimer = mobilePageTransitionTimers.get(node);
  if (oldTimer) window.clearTimeout(oldTimer);

  node.classList.remove(MOBILE_PAGE_TRANSITION_CLASS);
  requestAnimationFrame(() => {
    node.classList.add(MOBILE_PAGE_TRANSITION_CLASS);
    const timer = window.setTimeout(() => {
      node.classList.remove(MOBILE_PAGE_TRANSITION_CLASS);
      mobilePageTransitionTimers.delete(node);
    }, 420);
    mobilePageTransitionTimers.set(node, timer);
  });
}

function optimizeScreenMedia(root = document) {
  if (!root?.querySelectorAll) return;
  root.querySelectorAll("img").forEach((img) => {
    if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
    const shouldEagerLoad = img.closest([
      ".home-desktop-module-card:first-child",
      ".home-mobile-module-card:first-child",
      ".listening-gateway-hero",
      ".listening-topic-hero",
      ".listening-detail-banner",
      ".hsk-level-hero",
      ".write-path-hero",
      ".write-communication-header",
    ].join(", "));
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", shouldEagerLoad ? "eager" : "lazy");
    }
    if (!img.hasAttribute("fetchpriority")) {
      img.setAttribute("fetchpriority", shouldEagerLoad ? "high" : "low");
    }
  });
  root.querySelectorAll("audio").forEach((audio) => {
    if (!audio.hasAttribute("preload")) audio.setAttribute("preload", "none");
  });
}

function scheduleScreenMediaOptimization(root = document) {
  optimizeScreenMedia(root);
  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(() => optimizeScreenMedia(root));
  }
}

const IDLE_IMAGE_PRELOAD_SOURCES = [
  "assets/home-module-writing-optimized.jpg",
  "assets/home-module-listening1-optimized.jpg",
  "assets/home-module-hsk-optimized.jpg",
  "assets/luyennghe-optimized.jpg",
  "assets/anhnentuvung-optimized.jpg",
  "assets/anhnentrinhphatnhac-optimized.jpg",
  "assets/backgroundluyennghe-optimized.jpg",
  "assets/backgroundluyenviet-optimized.jpg",
  "assets/backgroundthongdung-optimized.jpg",
  "assets/docthoai1-optimized.jpg",
  "assets/doithoai1-optimized.jpg",
  "assets/hsk-level-hero-optimized.jpg",
];
let idleImagePreloadStarted = false;

function scheduleIdleImagePreload() {
  if (idleImagePreloadStarted) return;
  if (navigator.connection?.saveData) return;
  idleImagePreloadStarted = true;
  const preload = () => {
    IDLE_IMAGE_PRELOAD_SOURCES.forEach((src) => {
      const image = new Image();
      image.decoding = "async";
      image.fetchPriority = "low";
      image.src = src;
    });
  };
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(preload, { timeout: 2500 });
    return;
  }
  setTimeout(preload, 1200);
}

function getVietnamDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);
  return parts.reduce((acc, part) => {
    if (part.type !== "literal") acc[part.type] = part.value;
    return acc;
  }, {});
}

function getVietnamTodayKey(date = new Date()) {
  const parts = getVietnamDateParts(date);
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
}

function getVietnamTodayLabel(isVi) {
  const parts = getVietnamDateParts();
  if (!isVi) return `${parts.month}月${parts.day}日`;
  const weekday = String(parts.weekday || "").replace(/^./, (char) => char.toUpperCase());
  return `${weekday}, ${Number(parts.day)} tháng ${Number(parts.month)}`;
}

function getDefaultHomeTodayStudyState() {
  return {
    dateKey: getVietnamTodayKey(),
    writeSeconds: 0,
    listenSeconds: 0,
  };
}

function readHomeTodayStudyState() {
  const todayKey = getVietnamTodayKey();
  try {
    const stored = JSON.parse(localStorage.getItem(HOME_TODAY_STUDY_STORAGE_KEY) || "null");
    if (!stored || stored.dateKey !== todayKey) return { ...getDefaultHomeTodayStudyState(), dateKey: todayKey };
    return {
      dateKey: todayKey,
      writeSeconds: Math.max(0, Number(stored.writeSeconds || 0)),
      listenSeconds: Math.max(0, Number(stored.listenSeconds || 0)),
    };
  } catch {
    return { ...getDefaultHomeTodayStudyState(), dateKey: todayKey };
  }
}

function saveHomeTodayStudyState(progress) {
  try {
    localStorage.setItem(HOME_TODAY_STUDY_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore storage failures; progress remains best-effort for the current session.
  }
}

function getHomeStudyAreaForScreen(screenName) {
  if (screenName === "listening") return "listening";
  if (screenName === "course" || screenName === "practice" || screenName === "complete") return "write";
  return "";
}

function addHomeTodayStudySeconds(area, seconds) {
  if (!area || seconds <= 0) return;
  const progress = readHomeTodayStudyState();
  if (area === "listening") progress.listenSeconds += seconds;
  if (area === "write") progress.writeSeconds += seconds;
  saveHomeTodayStudyState(progress);
}

function flushHomeTodayStudySession(now = Date.now()) {
  if (!homeTodayStudySession.area || !homeTodayStudySession.startedAt) return;
  const elapsedSeconds = Math.max(0, Math.floor((now - homeTodayStudySession.startedAt) / 1000));
  if (elapsedSeconds > 0) addHomeTodayStudySeconds(homeTodayStudySession.area, elapsedSeconds);
  homeTodayStudySession.startedAt = now;
}

function syncHomeTodayStudySession(nextScreen = state.screen) {
  const now = Date.now();
  flushHomeTodayStudySession(now);
  homeTodayStudySession = {
    area: getHomeStudyAreaForScreen(nextScreen),
    startedAt: now,
  };
}

function getHomeTodayStudyProgress() {
  const stored = readHomeTodayStudyState();
  const liveSeconds = homeTodayStudySession.area && homeTodayStudySession.startedAt
    ? Math.max(0, Math.floor((Date.now() - homeTodayStudySession.startedAt) / 1000))
    : 0;
  const listenSeconds = stored.listenSeconds + (homeTodayStudySession.area === "listening" ? liveSeconds : 0);
  const writeSeconds = stored.writeSeconds + (homeTodayStudySession.area === "write" ? liveSeconds : 0);
  const savedVocabCount = state.saved instanceof Set ? state.saved.size : 0;
  const vocabRatio = Math.min(1, savedVocabCount / HOME_TODAY_VOCAB_TARGET);
  const listenRatio = Math.min(1, listenSeconds / HOME_TODAY_TIME_TARGET_SECONDS);
  const writeRatio = Math.min(1, writeSeconds / HOME_TODAY_TIME_TARGET_SECONDS);
  const completedCount = [vocabRatio, listenRatio, writeRatio].filter((ratio) => ratio >= 1).length;
  return {
    dateLabel: getVietnamTodayLabel(state.lang === "vi"),
    savedVocabCount,
    listenSeconds,
    writeSeconds,
    completedCount,
    totalCount: 3,
    percent: Math.round(((vocabRatio + listenRatio + writeRatio) / 3) * 100),
  };
}

function formatHomeTodayMinuteValue(seconds) {
  return Math.min(30, Math.floor(Math.max(0, seconds) / 60));
}

function makeSentences(episodeId, rows = []) {
  return rows.map(([chinese, pinyin, vietnamese, start = 0, end = null], index) => ({
    id: `${episodeId}-sentence-${String(index + 1).padStart(2, "0")}`,
    chinese,
    pinyin,
    vietnamese,
    start,
    end,
  }));
}

function makeKeywords(rows = []) {
  return rows.map(([chinese, pinyin = "", vietnamese = "", partOfSpeechOrExamples = "", examples = []]) => {
    const partOfSpeech = Array.isArray(partOfSpeechOrExamples) ? "" : partOfSpeechOrExamples;
    return {
      chinese,
      pinyin,
      vietnamese,
      partOfSpeech,
      examples: Array.isArray(partOfSpeechOrExamples) ? partOfSpeechOrExamples : examples,
    };
  });
}

function getListeningDefaultAudioSrc(episodeId) {
  const episodeNumber = String(episodeId || "").match(/\d+/)?.[0] || "001";
  const extension = episodeId === "ep-001" ? "MP3" : "mp3";
  return resolvePublicAssetPath(`/listening-app/audio/main/daily-${episodeNumber}-main.${extension}`, "listeningApp");
}

function getListeningItemDuration(sentences = []) {
  const lastSentence = sentences[sentences.length - 1];
  return Math.ceil(lastSentence?.end ?? lastSentence?.start ?? 0);
}

function getListeningAudioDuration(audio = $("#listeningAudio"), episode = getListeningEpisode()) {
  const audioDuration = Number(audio?.duration);
  if (Number.isFinite(audioDuration) && audioDuration > 0) return audioDuration;
  const episodeDuration = Number(episode?.duration);
  if (Number.isFinite(episodeDuration) && episodeDuration > 0) return episodeDuration;
  return getListeningItemDuration(episode?.sentences || []);
}

function getListeningSentenceStart(episode = getListeningEpisode(), index = 0) {
  const sentences = episode?.sentences || [];
  const safeIndex = Math.max(0, Math.min(Number(index) || 0, sentences.length - 1));
  const start = Number(sentences[safeIndex]?.start);
  return Number.isFinite(start) && start >= 0 ? start : 0;
}

function getListeningSentenceIndexAtTime(episode = getListeningEpisode(), currentTime = 0) {
  const sentences = episode?.sentences || [];
  if (!sentences.length) return 0;

  const time = Math.max(0, Number(currentTime) || 0);
  for (let index = 0; index < sentences.length; index += 1) {
    const sentence = sentences[index] || {};
    const nextSentence = sentences[index + 1] || {};
    const start = Number.isFinite(Number(sentence.start)) ? Number(sentence.start) : 0;
    const explicitEnd = Number(sentence.end);
    const nextStart = Number(nextSentence.start);
    const end = Number.isFinite(explicitEnd)
      ? explicitEnd
      : Number.isFinite(nextStart)
        ? nextStart
        : Infinity;

    if (time >= start && time < end) return index;
  }

  const firstStart = Number(sentences[0]?.start || 0);
  return time < firstStart ? 0 : sentences.length - 1;
}

function buildItem(item) {
  const sentences = item.sentences || [];
  return {
    ...item,
    titleZh: item.titleZh || item.title,
    categoryZh: item.categoryZh || item.category,
    level: item.level || "Trung bình",
    duration: item.duration ?? getListeningItemDuration(sentences),
    progress: item.progress ?? 0,
    audioSrc: item.audioSrc || getListeningDefaultAudioSrc(item.id),
    description: item.description || item.member_cta || "",
    sentences,
    keywords: item.keywords || [],
  };
}
function sub(id, start, end, zh, pinyin, vi) {
  return { id, start, end, zh, pinyin, vi };
}
function vocab(hanzi, pinyin, vi, posVi, posZh, examples = []) {
  return {
    hanzi,
    pinyin,
    vi,
    posVi,
    posZh,
    audioNormal: "",
    audioSlow: "",
    examples,
  };
}

const listeningEpisodes = [
  buildItem({
    id: "ep-001",
    title: "为什么你学了 HSK 还是听不懂",
    category: "热点短文",
    is_featured_sample: true,
    speaker: "林老师",
    sentences: makeSentences("ep-001", [
      ["最近我有点儿不开心。", "Zuìjìn wǒ yǒudiǎnr bù kāixīn.", "Dạo này tôi hơi không vui.", 0, 3.77],
      ["我喜欢你", "Wǒ xǐhuān nǐ", "Tôi thích bạn", 3.77, 8.34],
      ["你吃饭了吗", "nị chi phan lơ ma?", "Bạn đã ăn chưa?", 8.34, 18.38],
      ["你是不是又在和别人比？", "Nǐ shì bú shì yòu zài hé biérén bǐ?", "Có phải bạn lại đang so sánh mình với người khác không?", 18.38, 22.35],
      ["可能是吧。看到他们越来越好，我就觉得自己进步得很慢。", "Kěnéng shì ba. Kàndào tāmen yuè lái yuè hǎo, wǒ jiù juéde zìjǐ jìnbù de hěn màn.", "Có lẽ vậy. Thấy họ ngày càng tốt hơn, tôi lại cảm thấy mình tiến bộ rất chậm.", 22.35, 30.65],
      ["每个人的时间不一样。别人快，不代表你差。", "Měi ge rén de shíjiān bù yíyàng. Biérén kuài, bù dàibiǎo nǐ chà.", "Thời gian của mỗi người không giống nhau. Người khác nhanh không có nghĩa là bạn kém.", 30.65, 39.12],
      ["可是我还是会着急。", "Kěshì wǒ háishi huì zháojí.", "Nhưng tôi vẫn sẽ sốt ruột.", 39.12, 42.47],
      ["着急很正常。但你可以先做好今天的事。每天进步一点点，就已经很好了。", "Zháojí hěn zhèngcháng. Dàn nǐ kěyǐ xiān zuò hǎo jīntiān de shì. Měitiān jìnbù yìdiǎndiǎn, jiù yǐjīng hěn hǎo le.", "Sốt ruột là bình thường. Nhưng bạn có thể làm tốt việc hôm nay trước. Mỗi ngày tiến bộ một chút đã rất tốt rồi.", 42.47, 54.61],
      ["你说得对。我不应该一直看别人。", "Nǐ shuō de duì. Wǒ bù yīnggāi yìzhí kàn biérén.", "Bạn nói đúng. Tôi không nên cứ nhìn người khác mãi.", 54.61, 60.75],
      ["对。你要相信自己，也要给自己一点时间。", "Duì. Nǐ yào xiāngxìn zìjǐ, yě yào gěi zìjǐ yìdiǎn shíjiān.", "Đúng. Bạn phải tin bản thân, cũng phải cho bản thân thêm một chút thời gian.", 60.75, 68.44],
    ]),
    keywords: makeKeywords([
      ["通过", "tong guo", "vượt qua", "giới từ"],
      ["真实", "zhen shi", "thật, thực tế", "tính từ"],
      ["紧张", "jin zhang", "căng thẳng", "tính từ"],
      ["原因", "yuan yin", "nguyên nhân", "danh từ"],
      ["努力", "nu li", "cố gắng", "động từ"],
      ["材料", "cai liao", "tài liệu", "danh từ"],
      ["省略", "sheng lue", "lược bỏ", "động từ"],
      ["连读", "lian du", "nối âm", "danh từ"],
      ["表达", "biao da", "cách diễn đạt", "động từ"],
    ]),
    is_free: true,
    is_member_only: false,
    member_cta: "想继续练真实语速？解锁更多 1 分钟精品听力。",
    created_at: "2026-06-16",
    progress: 80,
  }),
  buildItem({
    id: "ep-002",
    title: "Phân biệt bốn thanh điệu",
    titleZh: "区分四个声调",
    category: "Thanh điệu",
    categoryZh: "声调",
    level: "Dễ",
    speaker: "HuaMei",
    sentences: makeSentences("ep-002", [
      ["妈，麻，马，骂。", "ma1, ma2, ma3, ma4.", "Bốn thanh của âm ma.", 0, 8],
      ["请再听一遍。", "Qing zai ting yi bian.", "Hãy nghe lại một lần nữa.", 8, 24],
    ]),
    keywords: makeKeywords([
      ["妈", "ma1", "mẹ"],
      ["麻", "ma2", "tê"],
      ["马", "ma3", "ngựa"],
      ["骂", "ma4", "mắng"],
    ]),
    is_free: true,
    is_member_only: false,
    member_cta: "继续练习声调辨音，听得更准。",
    created_at: "2026-06-16",
    progress: 60,
  }),
  buildItem({
    id: "ep-003",
    title: "Âm zh, ch, sh",
    titleZh: "zh ch sh 发音",
    category: "Phát âm",
    categoryZh: "发音",
    speaker: "HuaMei",
    sentences: makeSentences("ep-003", [
      ["知，吃，是。", "zhi, chi, shi.", "Ba âm zh, ch, sh.", 0, 9],
      ["请慢慢跟读。", "Qing man man gen du.", "Hãy đọc theo thật chậm.", 9, 27],
    ]),
    keywords: makeKeywords([
      ["知", "zhi", "biết"],
      ["吃", "chi", "ăn"],
      ["是", "shi", "là"],
    ]),
    is_free: true,
    is_member_only: false,
    member_cta: "继续练发音，区分舌尖音。",
    created_at: "2026-06-16",
    progress: 65,
  }),
  buildItem({
    id: "ep-004",
    title: "Nghe câu ngắn",
    titleZh: "听短句",
    category: "Giao tiếp",
    categoryZh: "交流",
    speaker: "HuaMei",
    sentences: makeSentences("ep-004", [
      ["请说慢一点儿。", "Qing shuo man yi dianr.", "Xin hãy nói chậm một chút.", 0, 9],
      ["我没听清楚。", "Wo mei ting qing chu.", "Tôi nghe chưa rõ.", 9, 31],
    ]),
    keywords: makeKeywords([
      ["请", "qing", "xin, mời"],
      ["慢", "man", "chậm"],
      ["一点儿", "yi dianr", "một chút"],
    ]),
    is_free: true,
    is_member_only: false,
    member_cta: "继续练短句听力，抓住关键词。",
    created_at: "2026-06-16",
    progress: 50,
  }),
];

function catalogLessonToListeningItem(lesson, context = {}) {
  const topic = context.topic || {};
  const level = context.level || {};
  return buildItem({
    id: lesson.id,
    type: context.trackId,
    kind: "catalog",
    catalogTopicId: topic.id || "",
    catalogLevelId: level.id || "",
    title: lesson.title_vi || lesson.title_zh || "",
    titleZh: lesson.title_zh || lesson.title_vi || "",
    titlePinyin: lesson.title_pinyin || lesson.titlePinyin || "",
    category: topic.label_vi || topic.source_topic_title_vi || topic.label_zh || "",
    categoryZh: topic.label_zh || topic.source_topic_title_zh || topic.label_vi || "",
    level: level.label_vi || topic.label_vi || "",
    speaker: lesson.speaker || "",
    titleAudioSrc: listeningCatalogAssetPath(lesson.title_audio || ""),
    audioSrc: listeningCatalogAssetPath(lesson.main_audio || ""),
    sentences: (lesson.sentences || []).map((sentence) => ({
      id: sentence.id,
      speaker: sentence.speaker || "",
      chinese: sentence.zh || "",
      pinyin: sentence.pinyin || "",
      vietnamese: sentence.vi || "",
      start: Number(sentence.start || 0),
      end: Number(sentence.end || 0),
      audioSrc: listeningCatalogAssetPath(sentence.audio || sentence.audioSrc || ""),
    })),
    keywords: (lesson.keywords || []).map((keyword) => ({
      chinese: keyword.zh || "",
      pinyin: keyword.pinyin || "",
      vietnamese: keyword.vi || "",
      partOfSpeech: keyword.partOfSpeech || keyword.part_of_speech || keyword.source_pos || keyword.posVi || keyword.posZh || keyword.pos || "",
      audioNormal: listeningCatalogAssetPath(keyword.audio || ""),
      audioSlow: listeningCatalogAssetPath(keyword.audio || ""),
      examples: (keyword.examples || []).map((example) => ({
        chinese: example.zh || example.chinese || "",
        pinyin: example.pinyin || "",
        vietnamese: example.vi || example.vietnamese || "",
        audioSrc: example.audio ? `/listening-app/${example.audio}` : "",
        start: Number.isFinite(Number(example.start)) ? Number(example.start) : null,
        end: Number.isFinite(Number(example.end)) ? Number(example.end) : null,
      })),
    })),
    is_free: true,
    is_member_only: false,
    member_cta: "",
    created_at: "2026-07-04",
    progress: 0,
  });
}

function getCatalogLevelRows(levelId = "") {
  const catalog = globalThis.pindaListeningCatalog;
  if (!catalog || !Array.isArray(catalog.tracks)) return null;

  const dialogue = catalog.tracks.find((track) => track.id === "dialogue");
  const monologue = catalog.tracks.find((track) => track.id === "monologue");

  if (String(levelId).startsWith("dialogue") && dialogue) {
    const level = (dialogue.levels || []).find((item) => item.legacy_level_id === levelId);
    if (!level) return [];
    const selectedTopic = (level.topics || []).find((topic) =>
      (topic.lessons || []).some((lesson) => lesson.id === state.listeningSeedEpisodeId),
    );
    if (state.listeningSeedEpisodeId && selectedTopic) {
      return (selectedTopic.lessons || []).map((lesson, index) => ({
        no: index + 1,
        episodeId: lesson.id,
        title: lesson.title_vi || lesson.title_zh,
        zh: lesson.title_zh || lesson.title_vi,
        kind: "content",
      }));
    }
    return (level.topics || []).map((topic, index) => ({
      no: index + 1,
      episodeId: topic.lessons?.[0]?.id || "",
      title: topic.label_vi || topic.label_zh,
      zh: topic.label_zh || topic.label_vi,
      kind: "topic",
    })).filter((row) => row.episodeId);
  }

  if (String(levelId).startsWith("monologue") && monologue) {
    const topic = (monologue.topics || []).find((item) => item.legacy_level_id === levelId);
    if (!topic) return [];
    return (topic.lessons || []).map((lesson, index) => ({
      no: index + 1,
      episodeId: lesson.id,
      title: lesson.title_vi || lesson.title_zh,
      zh: lesson.title_zh || lesson.title_vi,
      kind: "content",
    }));
  }

  return [];
}

function appendCatalogListeningEpisodes() {
  const catalog = globalThis.pindaListeningCatalog;
  if (!catalog || !Array.isArray(catalog.tracks)) return;
  const items = [];
  (catalog.tracks || []).forEach((track) => {
    if (track.id === "dialogue") {
      (track.levels || []).forEach((level) => {
        (level.topics || []).forEach((topic) => {
          (topic.lessons || []).forEach((lesson) => {
            items.push(catalogLessonToListeningItem(lesson, { trackId: track.id, level, topic }));
          });
        });
      });
      return;
    }
    (track.topics || []).forEach((topic) => {
      (topic.lessons || []).forEach((lesson) => {
        items.push(catalogLessonToListeningItem(lesson, { trackId: track.id, topic }));
      });
    });
  });

  items.forEach((episode) => {
    const index = listeningEpisodes.findIndex((item) => item.id === episode.id);
    if (index >= 0) {
      listeningEpisodes[index] = episode;
    } else {
      listeningEpisodes.push(episode);
    }
  });
}

function disabledLegacyContentToListeningEpisode(content, index = 0) {
  const id = content.id || `dialogue-so-cap-topic-${index + 1}`;
  const idText = String(id);
  const isMonologue = idText.startsWith("monologue-");

  const sentences = (content.subtitles || content.sentences || []).map((item) => ({
    chinese: item.zh || item.chinese || "",
    pinyin: item.pinyin || "",
    vietnamese: item.vi || item.vietnamese || "",
    start: Number(item.start || 0),
    end: Number(item.end || 0),
  })).filter((item) => item.chinese || item.pinyin || item.vietnamese);

  return {
    id,
    title: content.titleVi || content.title || `Bài nghe ${index + 1}`,
    titleZh: content.titleZh || content.zh || content.titleVi || `听力 ${index + 1}`,
    category: isMonologue ? "Độc thoại" : "Đối thoại sơ cấp",
    categoryZh: isMonologue ? "独白" : "初级对话",
    speaker: content.speaker || "林老师",
    duration: Number(content.duration || getListeningItemDuration(sentences) || 69),
    progress: Number(content.progress || 0),
    audioSrc: content.audioNormal || content.audioSrc || content.audio || "",
    sentences,
    keywords: (content.vocabulary || content.keywords || []).map((word) => ({
      chinese: word.hanzi || word.chinese || "",
      pinyin: word.pinyin || "",
      vietnamese: word.vi || word.vietnamese || "",
      partOfSpeech: word.partOfSpeech || word.part_of_speech || word.source_pos || word.posVi || word.posZh || word.pos || "",
      audioNormal: word.audioNormal || "",
      audioSlow: word.audioSlow || "",
      examples: (word.examples || []).map((example) => ({
        chinese: example.zh || example.chinese || "",
        pinyin: example.pinyin || "",
        vietnamese: example.vi || example.vietnamese || "",
      })),
    })),
  };
}


if (false && typeof listeningContentMap !== "undefined") {
  (Object.values(listeningContentMap)).forEach((content, index) => {
    const episode = disabledLegacyContentToListeningEpisode(content, index);
    const existed = listeningEpisodes.some((item) => item.id === episode.id);

    if (!existed) {
      listeningEpisodes.push(episode);
    }
  });
}

function listeningCatalogAssetPath(path = "") {
  const value = String(path || "").trim();
  if (!value) return "";
  if (/^(?:https?:)?\/\//i.test(value) || /^(?:data:|blob:)/i.test(value)) return value;
  const normalized = value.replace(/^\/+/, "");
  if (normalized.startsWith("listening-app/")) {
    return resolvePublicAssetPath(`/${normalized}`, "listeningApp");
  }
  return resolvePublicAssetPath(`/listening-app/${normalized}`, "listeningApp");
}

function getListeningCatalogTopics() {
  const catalog = globalThis.pindaListeningCatalog;
  if (!catalog || !Array.isArray(catalog.tracks)) return [];

  return catalog.tracks.flatMap((track) => {
    const dialogueTopics = (track.levels || []).flatMap((level) => (
      (level.topics || []).map((topic) => ({
        ...topic,
        trackId: track.id,
        trackLabelVi: track.label_vi,
        trackLabelZh: track.label_zh,
        levelId: level.legacy_level_id || level.id,
        levelLabelVi: level.label_vi,
        levelLabelZh: level.label_zh,
      }))
    ));
    const monologueTopics = (track.topics || []).map((topic) => ({
      ...topic,
      trackId: track.id,
      trackLabelVi: track.label_vi,
      trackLabelZh: track.label_zh,
      levelId: topic.legacy_level_id || topic.id,
      levelLabelVi: topic.label_vi,
      levelLabelZh: topic.label_zh,
    }));
    return [...dialogueTopics, ...monologueTopics];
  });
}

function listeningCatalogLessonToEpisode(lesson = {}, topic = {}) {
  const sentences = (lesson.sentences || []).map((sentence, index) => ({
    id: sentence.id || `${lesson.id}-sentence-${index + 1}`,
    speaker: sentence.speaker || "",
    chinese: sentence.zh || sentence.chinese || "",
    pinyin: sentence.pinyin || "",
    vietnamese: sentence.vi || sentence.vietnamese || "",
    start: Number(sentence.start || 0),
    end: Number(sentence.end || 0),
    audioSrc: listeningCatalogAssetPath(sentence.audio || sentence.audioSrc || ""),
  })).filter((sentence) => sentence.chinese || sentence.pinyin || sentence.vietnamese);

  return buildItem({
    id: lesson.id,
    trackId: topic.trackId || lesson.track || "",
    levelId: topic.levelId || "",
    topicId: topic.id || "",
    title: lesson.title_vi || lesson.title_zh || lesson.id || "",
    titleZh: lesson.title_zh || lesson.title_vi || lesson.id || "",
    titlePinyin: lesson.title_pinyin || lesson.titlePinyin || "",
    category: topic.label_vi || topic.levelLabelVi || topic.trackLabelVi || "",
    categoryZh: topic.label_zh || topic.levelLabelZh || topic.trackLabelZh || "",
    level: topic.levelLabelVi || topic.levelLabelZh || "",
    speaker: lesson.speaker || "",
    audioSrc: listeningCatalogAssetPath(lesson.main_audio || ""),
    sentences,
    keywords: (lesson.keywords || []).map((keyword) => ({
      chinese: keyword.zh || keyword.chinese || "",
      pinyin: keyword.pinyin || "",
      vietnamese: keyword.vi || keyword.vietnamese || "",
      partOfSpeech: keyword.partOfSpeech || keyword.part_of_speech || keyword.source_pos || keyword.posVi || keyword.posZh || keyword.pos || "",
      audioNormal: listeningCatalogAssetPath(keyword.audio || ""),
      audioSlow: listeningCatalogAssetPath(keyword.audio_slow || keyword.audioSlow || keyword.audio || ""),
      examples: (keyword.examples || []).map((example) => ({
        chinese: example.zh || example.chinese || "",
        pinyin: example.pinyin || "",
        vietnamese: example.vi || example.vietnamese || "",
        audioSrc: listeningCatalogAssetPath(example.audio || example.audioSrc || ""),
        start: Number.isFinite(Number(example.start)) ? Number(example.start) : null,
        end: Number.isFinite(Number(example.end)) ? Number(example.end) : null,
      })),
    })),
    is_free: true,
    is_member_only: false,
    member_cta: lesson.member_cta || "Tiếp tục luyện nghe mỗi ngày.",
    created_at: lesson.created_at || "",
    progress: Number(lesson.progress || 0),
  });
}

function getDialogueListeningEpisodes(levelId = "dialogue-so-cap") {
  const prefixMap = {
    "dialogue-so-cap": "dialogue-so-cap-topic-",
    "dialogue-trung-cap": "dialogue-trung-cap-topic-",
    "dialogue-cao-cap": "dialogue-cao-cap-topic-",
  };

  const prefix = prefixMap[levelId] || "dialogue-";

  return listeningEpisodes.filter((episode) =>
    String(episode.id || "").startsWith(prefix)
  );
}

function getMonologueListeningEpisodes(levelId = "") {
  const prefixMap = {
    "monologue-dien-thuyet": "monologue-dien-thuyet",
    "monologue-tap-chi": "monologue-tap-chi",
    "monologue-tam-ly-hoc": "monologue-tam-ly-hoc",
    "monologue-chu-de-khac": "monologue-other",
    "monologue-other": "monologue-other",
  };

  const prefix = prefixMap[levelId] || "monologue-";

  return listeningEpisodes.filter((episode) =>
    String(episode.id || "").startsWith(prefix)
  );
}

function repairUtf8MojibakeText(value) {
  const text = String(value || "");
  if (!/[\u00C0-\u00FF\u0100-\u017F\u0192\u02C6\u02DC\u2013-\u201E\u2020-\u2026\u2030\u2039-\u203A\u20AC\u2122]/.test(text)) return value;
  const cp1252 = {
    0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86,
    0x2021: 0x87, 0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C,
    0x017D: 0x8E, 0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95,
    0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B,
    0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F,
  };
  try {
    const bytes = Uint8Array.from(Array.from(text, (char) => {
      const code = char.codePointAt(0) || 0;
      return cp1252[code] ?? (code <= 255 ? code : 0x3F);
    }));
    const repaired = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    return repaired.includes("\uFFFD") ? value : repaired;
  } catch {
    return value;
  }
}

function shouldSkipListeningTextRepair(key = "") {
  return /^(pinyin|vi|vietnamese|title|category|level|speaker)$/i.test(String(key || ""));
}

function repairListeningTextFields(value, key = "") {
  if (typeof value === "string") return shouldSkipListeningTextRepair(key) ? value : repairUtf8MojibakeText(value);
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      value[index] = repairListeningTextFields(item, key);
    });
    return value;
  }
  if (value && typeof value === "object") {
    Object.keys(value).forEach((key) => {
      value[key] = repairListeningTextFields(value[key], key);
    });
  }
  return value;
}

function hydrateListeningCatalog() {
  const topics = getListeningCatalogTopics();
  if (!topics.length) return false;
  listeningCatalogTopics = topics;
  listeningCatalogTopics.forEach((topic) => {
    (topic.lessons || []).forEach((lesson) => {
      if (!listeningEpisodes.some((episode) => episode.id === lesson.id)) {
        listeningEpisodes.push(listeningCatalogLessonToEpisode(lesson, topic));
      }
    });
  });
  appendCatalogListeningEpisodes();
  listeningEpisodes.forEach(repairListeningTextFields);
  listeningCatalogLoaded = true;
  return true;
}

function renderListeningCatalogLoading(options = {}) {
  setScreenWithDesktopShell("listening", `
    <section class="listening-gateway-screen listening-gateway-screen--loading">
      ${renderLessonLoadingHTML({ variant: "listen" })}
    </section>
  `, "app-desktop-shell--listening", "listening", options);
  return;

  const isVi = state.lang === "vi";
  setScreenWithDesktopShell("listening", `
    <section class="listening-gateway-screen listening-gateway-screen--loading">
      <div class="hsk-no-results">
        ${isVi ? "Äang táº£i dá»¯ liá»‡u luyá»‡n nghe..." : "æ­£åœ¨åŠ è½½å¬åŠ›æ•°æ®..."}
      </div>
    </section>
  `, "app-desktop-shell--listening", "listening", options);
}

async function loadListeningCatalogData() {
  if (globalThis.pindaListeningCatalog) return true;
  if (typeof fetch === "function") {
    try {
      const response = await fetch(LISTENING_CATALOG_JSON_SRC, { cache: "force-cache" });
      if (!response.ok) throw new Error(`Listening catalog JSON returned ${response.status}`);
      globalThis.pindaListeningCatalog = await response.json();
      return true;
    } catch (error) {
      console.warn("Could not fetch listening catalog JSON, falling back to script.", error);
    }
  }
  await loadDynamicScript(LISTENING_CATALOG_SCRIPT_SRC);
  return true;
}

function ensureListeningCatalogLoaded(options = {}) {
  if (listeningCatalogLoaded || hydrateListeningCatalog()) return Promise.resolve(true);
  if (listeningCatalogLoadPromise) return listeningCatalogLoadPromise;

  if (options.renderLoading) renderListeningCatalogLoading(options);
  listeningCatalogLoadPromise = loadListeningCatalogData()
    .then(() => {
      if (!hydrateListeningCatalog()) throw new Error("Listening catalog did not register data.");
      return true;
    })
    .catch((error) => {
      console.warn("Could not lazy-load listening catalog.", error);
      if (!options.silent && typeof showToast === "function") {
        showToast(state.lang === "vi"
          ? "ChÆ°a táº£i Ä‘Æ°á»£c dá»¯ liá»‡u luyá»‡n nghe. Vui lÃ²ng thá»­ láº¡i."
          : "å¬åŠ›æ•°æ®åŠ è½½å¤±è´¥ï¼Œè¯·é‡è¯•ã€‚");
      }
      listeningCatalogLoadPromise = null;
      return false;
    });
  return listeningCatalogLoadPromise;
}

hydrateListeningCatalog();
listeningEpisodes.forEach(repairListeningTextFields);

function getListeningEpisode(episodeId = state.listeningEpisodeId) {
  return listeningEpisodes.find((episode) => episode.id === episodeId) || listeningEpisodes[0];
}

function getSuggestedListeningEpisodes() {
  const seen = new Set();
  const suggestedIds = listeningCatalogTopics
    .filter((topic) => topic.levelId === "dialogue-trung-cap")
    .filter((topic) => Array.isArray(topic.lessons) && topic.lessons.length > 0)
    .flatMap((topic) => topic.lessons.map((lesson) => lesson.id).filter(Boolean));
  const sourceIds = suggestedIds.length ? suggestedIds : listeningEpisodes.map((episode) => episode.id);

  return sourceIds
    .map((episodeId) => listeningEpisodes.find((episode) => episode.id === episodeId))
    .filter((episode) => {
      if (!episode?.id || seen.has(episode.id)) return false;
      seen.add(episode.id);
      return true;
    });
}

function getListeningTopicByEpisodeId(episodeId = "") {
  return listeningCatalogTopics.find((topic) =>
    (topic.lessons || []).some((lesson) => lesson.id === episodeId)
  ) || null;
}

function openRandomSuggestedListeningLesson() {
  const suggestedEpisodes = getSuggestedListeningEpisodes();
  const episode = suggestedEpisodes[Math.floor(Math.random() * suggestedEpisodes.length)] || suggestedEpisodes[0];
  if (!episode) return false;

  const topic = getListeningTopicByEpisodeId(episode.id);
  state.listeningLevelId = topic?.levelId || episode.levelId || state.listeningLevelId || "dialogue-so-cap";
  state.listeningEpisodeId = episode.id;
  state.listeningView = "detail";
  state.listeningSentenceIndex = 0;
  state.listeningVocabPracticeIndex = 0;
  state.listeningBackTarget = "dashboard";
  state.listeningLessonsBackTarget = "dashboard";
  state.listeningSeedEpisodeId = "";
  state.listeningTopicId = topic?.id || "";
  renderListening();
  setScreen("listening");
  return true;
}

function getListeningRepeatPracticeCandidates() {
  return listeningEpisodes
    .filter((episode) => episode?.id && Array.isArray(episode.sentences) && episode.sentences.length > 0)
    .flatMap((episode) => episode.sentences.map((sentence, sentenceIndex) => ({
      episode,
      sentence,
      sentenceIndex,
    })))
    .filter((candidate) => candidate.sentence?.chinese);
}

function openRandomListeningRepeatPractice() {
  const candidates = getListeningRepeatPracticeCandidates();
  const selected = randomArrayItem(candidates);
  if (!selected) return false;

  const topic = getListeningTopicByEpisodeId(selected.episode.id);
  state.listeningLevelId = topic?.levelId || selected.episode.levelId || state.listeningLevelId || "dialogue-so-cap";
  state.listeningEpisodeId = selected.episode.id;
  state.listeningView = "repeat";
  state.listeningSentenceIndex = selected.sentenceIndex;
  state.listeningVocabPracticeIndex = 0;
  state.listeningBackTarget = "dashboard";
  state.listeningLessonsBackTarget = "dashboard";
  state.listeningSeedEpisodeId = "";
  state.listeningTopicId = topic?.id || "";
  resetListeningRepeatAttempt();
  renderListening();
  setScreen("listening");
  return true;
}

const hskContentTypes = [
  { id: "word", labelVi: "Từ vựng", labelZh: "生词" },
  { id: "sentence", labelVi: "Câu", labelZh: "句子" },
];
function hskContentTypeLabel(type) {
  const entry = hskContentTypes.find((item) => item.id === type);
  if (!entry) return "";
  return state.lang === "vi" ? entry.labelVi : entry.labelZh;
}
function hskAllLessonItems(lessonItem) {
  const items = Array.isArray(lessonItem.items) ? lessonItem.items : [];
  if (items.length > 0) return items;
  return [
    ...(Array.isArray(lessonItem.content?.word) ? lessonItem.content.word : []),
    ...(Array.isArray(lessonItem.content?.phrase) ? lessonItem.content.phrase : []),
    ...(Array.isArray(lessonItem.content?.sentence) ? lessonItem.content.sentence : []),
  ];
}
function chineseCharCount(value) {
  return (String(value || "").match(/[\u4e00-\u9fff]/g) || []).length;
}
function itemChineseText(item = {}) {
  return item.hanzi || item.chinese_text || item.text || "";
}
function learningContentBucket(item = {}) {
  if (item.batch_id === "HF-001" && (item.item_type === "word" || item.item_type === "sentence")) {
    return item.item_type;
  }
  const count = chineseCharCount(itemChineseText(item));
  if (count > 0) return count <= 4 ? "word" : "sentence";
  return item.stage === "sentence" ? "sentence" : "word";
}
function lessonItemsByDisplayType(items = [], type = "") {
  const safeItems = Array.isArray(items) ? items : [];
  if (!type) return safeItems;
  if (type === "word" || type === "sentence") {
    return safeItems.filter((item) => learningContentBucket(item) === type);
  }
  return [];
}
function hskLessonItemsByType(lessonItem, type = state.hskContentType) {
  return lessonItemsByDisplayType(hskAllLessonItems(lessonItem), type);
}
function getHskPendingLesson() {
  return hskLevels[state.level].find((lessonItem) => lessonItem.id === state.hskPendingLessonId) || null;
}
function dailyThemeItemsByType(theme, type = state.dailyContentType) {
  const items = Array.isArray(theme?.items) ? theme.items : [];
  return lessonItemsByDisplayType(items, type);
}
function getDailyPendingTheme() {
  return dailyThemes.find((theme) => theme.id === state.dailyPendingThemeId) || null;
}
const shouldShowTeacherPreview = (currentState) =>
  globalThis.practiceRules?.shouldShowTeacherPreview
    ? globalThis.practiceRules.shouldShowTeacherPreview(currentState)
    : currentState.complete;
const getTeachingPosLabelKey = (rawPos) =>
  globalThis.lessonRuntimeRules?.getTeachingPosLabelKey
    ? globalThis.lessonRuntimeRules.getTeachingPosLabelKey(rawPos)
    : rawPos;
const getPromptSizeVariant = (text) =>
  globalThis.lessonRuntimeRules?.getPromptSizeVariant
    ? globalThis.lessonRuntimeRules.getPromptSizeVariant(text)
    : "normal";

const themeVisuals = {
  greeting: "chat",
  greeting_introduction: "chat",
  interview: "briefcase",
  job_interview: "briefcase",
  classroom: "book",
  classroom_learning: "book",
  travel: "map",
  tourism_travel: "map",
  shopping: "cart",
  dining_shopping: "cart",
  ordering_shopping: "cart",
  transport: "bus",
  transportation: "bus",
  renting: "home",
  renting_life: "home",
  sickleave: "clinic",
  illness_leave: "clinic",
  sick_leave: "clinic",
  office: "desk",
  office_life: "desk",
  factory: "gear",
  factory_workshop: "gear",
  ecommerce: "shop",
  ecommerce_workplace: "shop",
  relationship: "heart",
  close_relationships: "heart",
};

const dailyThemeCardMeta = {
  greeting_introduction: {
    titleVi: "Chào hỏi cơ bản",
    titleZh: "基础问候",
    descVi: "Làm quen, giới thiệu bản thân và chào hỏi thông thường trong đời sống hàng ngày.",
    descZh: "认识新朋友、自我介绍和日常生活中的常用问候。",
    visual: "wave",
  },
  job_interview: {
    titleVi: "Phỏng vấn xin việc",
    titleZh: "工作面试",
    descVi: "Chuẩn bị hồ sơ, giới thiệu bản thân và trả lời các câu hỏi phỏng vấn thường gặp.",
    descZh: "准备简历、自我介绍并回答常见面试问题。",
    visual: "briefcase",
  },
  classroom_learning: {
    titleVi: "Học trên lớp",
    titleZh: "课堂学习",
    descVi: "Giao tiếp với giáo viên, bạn cùng lớp và tham gia các hoạt động học tập hằng ngày.",
    descZh: "与老师、同学交流并参与日常课堂活动。",
    visual: "book",
  },
  travel: {
    titleVi: "Du lịch & Khám phá",
    titleZh: "旅游与探索",
    descVi: "Đặt vé, hỏi đường, đặt phòng khách sạn và xử lý tình huống khi đi du lịch.",
    descZh: "订票、问路、订酒店以及旅行中的常见情景。",
    visual: "plane",
  },
  ordering_shopping: {
    titleVi: "Ẩm thực & Mua sắm",
    titleZh: "餐饮与购物",
    descVi: "Gọi món, thanh toán, mặc cả và mua bán hàng hóa trong đời sống hằng ngày.",
    descZh: "点餐、结账、讨价还价和日常购物交流。",
    visual: "food",
  },
  transportation: {
    titleVi: "Đi lại & Giao thông",
    titleZh: "出行交通",
    descVi: "Hỏi đường, đón xe, mua vé và giao tiếp khi di chuyển trong thành phố.",
    descZh: "问路、乘车、买票以及城市出行交流。",
    visual: "bus",
  },
  renting_life: {
    titleVi: "Thuê nhà & Sinh hoạt",
    titleZh: "租房生活",
    descVi: "Tìm nhà, thương lượng giá thuê và trao đổi các vấn đề sinh hoạt hằng ngày.",
    descZh: "找房、谈租金以及处理日常生活问题。",
    visual: "home",
  },
  sick_leave: {
    titleVi: "Ốm đau & Xin nghỉ",
    titleZh: "生病与请假",
    descVi: "Mô tả triệu chứng, đi khám bệnh và xin nghỉ làm hoặc nghỉ học.",
    descZh: "描述症状、就医以及请假的相关表达。",
    visual: "clinic",
  },
  office_life: {
    titleVi: "Môi trường Công sở",
    titleZh: "职场环境",
    descVi: "Giao tiếp văn phòng, viết email, họp báo cáo và đàm phán thương mại.",
    descZh: "办公室沟通、写邮件、开会汇报和商务洽谈。",
    visual: "briefcase",
  },
  factory_workshop: {
    titleVi: "Xưởng sản xuất",
    titleZh: "工厂车间",
    descVi: "Trao đổi công việc, an toàn lao động và phối hợp trong môi trường nhà máy.",
    descZh: "工厂作业、安全规范与生产协作交流。",
    visual: "gear",
  },
  ecommerce_workplace: {
    titleVi: "Công việc TMĐT",
    titleZh: "电商职场",
    descVi: "Chăm sóc khách hàng, xử lý đơn hàng và giao tiếp trong môi trường thương mại điện tử.",
    descZh: "客户服务、订单处理与电商职场沟通。",
    visual: "shop",
  },
  close_relationships: {
    titleVi: "Hẹn hò & Kết bạn",
    titleZh: "约会与交友",
    descVi: "Thể hiện cảm xúc, rủ đi chơi, tán gẫu và xây dựng các mối quan hệ xã hội.",
    descZh: "表达情感、邀约、闲聊以及建立社交关系。",
    visual: "heart",
  },
};

function getDailyThemeCardMeta(theme) {
  const meta = dailyThemeCardMeta[theme.id];
  const isVi = state.lang === "vi";
  return {
    title: meta ? (isVi ? meta.titleVi : meta.titleZh) : (isVi ? theme.vi : theme.zh),
    desc: meta ? (isVi ? meta.descVi : meta.descZh) : (isVi ? theme.vi : theme.zh),
    visual: meta?.visual || themeVisuals[theme.id] || "chat",
  };
}

function isDailyTimeTheme(theme = {}) {
  const values = [
    theme.id,
    theme.vi,
    theme.zh,
    theme.topic,
    theme.title,
    theme.lesson_title_vi,
    theme.lesson_title_cn,
  ]
    .filter(Boolean)
    .map((value) => String(value).toLowerCase());
  return values.some((value) =>
    value.includes("thời gian")
    || value.includes("thoi gian")
    || value.includes("时间")
    || value.includes("shijian")
    || value.includes("shíjiān"),
  );
}

const DAILY_FEATURED_TIME_CARD = {
  tone: "time",
  cover: "assets/daily-theme-time-purple.png",
  titleVi: "Thời gian",
  titleZh: "时间",
  zhLabel: "时间",
  pinyin: "shíjiān",
  descVi: "Hỏi và nói về thời gian, lịch hẹn, ngày tháng.",
  descZh: "学习表达时间、预约和日期。",
  icon: "clock",
};

const DAILY_FEATURED_THEME_CARDS = {
  "hf-001-bai01": {
    tone: "time",
    cover: "assets/daily-theme-time-purple.png",
    titleVi: "Thời gian",
    titleZh: "时间",
    zhLabel: "时间",
    pinyin: "shíjiān",
    descVi: "Hỏi và nói về thời gian, lịch hẹn, ngày tháng.",
    descZh: "学习表达时间、预约和日期。",
    icon: "clock",
  },
  "hf-001-bai02": {
    tone: "breakfast",
    cover: "assets/daily-theme-breakfast-yellow.png",
    titleVi: "Bữa sáng",
    titleZh: "早餐",
    zhLabel: "早餐",
    pinyin: "zǎocān",
    descVi: "Gọi món, mô tả món ăn và trò chuyện khi dùng bữa sáng.",
    descZh: "点餐、描述食物以及早餐时的日常交流。",
    icon: "food",
  },
  "hf-001-bai03": {
    tone: "city",
    cover: "assets/daily-theme-city-blue.png",
    titleVi: "Cảnh phố trong thành phố",
    titleZh: "城市街景",
    zhLabel: "城市街景",
    pinyin: "chéngshì jiējǐng",
    descVi: "Hỏi đường, đón xe và giao tiếp khi di chuyển trên phố.",
    descZh: "问路、乘车以及城市街头的日常交流。",
    icon: "bus",
  },
  "hf-001-bai04": {
    tone: "housing",
    cover: "assets/daily-theme-housing-green.png",
    titleVi: "Tìm chỗ ở",
    titleZh: "寻找住所",
    zhLabel: "寻找住所",
    pinyin: "xúnzhǎo zhùsuǒ",
    descVi: "Tìm nhà, hỏi giá thuê và trao đổi về nơi ở.",
    descZh: "找房、询问租金以及住宿相关交流。",
    icon: "home",
  },
  "hf-002-bai05": {
    tone: "profile",
    cover: "assets/daily-theme-profile-blue.png",
    titleVi: "Thông tin cá nhân",
    titleZh: "个人情况",
    zhLabel: "个人情况",
    pinyin: "gèrén qíngkuàng",
    descVi: "Giới thiệu bản thân, nói về tuổi, nghề nghiệp và thông tin cá nhân.",
    descZh: "自我介绍、谈论年龄、职业和个人情况。",
    icon: "profile",
  },
  "hf-002-bai06": {
    tone: "relationship",
    cover: "assets/daily-theme-relationship-pink.png",
    titleVi: "Gia đình",
    titleZh: "家庭",
    zhLabel: "家庭",
    pinyin: "jiātíng",
    descVi: "Giới thiệu thành viên gia đình và trò chuyện về đời sống gia đình.",
    descZh: "介绍家庭成员以及谈论家庭生活的交流。",
    icon: "heart",
  },
  "hf-002-bai07": {
    tone: "shopping",
    cover: "assets/daily-theme-shopping-orange.png",
    titleVi: "Trang phục",
    titleZh: "服装",
    zhLabel: "服装",
    pinyin: "fúzhuāng",
    descVi: "Mua sắm quần áo, mô tả trang phục và trao đổi về thời trang.",
    descZh: "购买衣服、描述服装以及谈论穿搭的交流。",
    icon: "cart",
  },
  "hf-002-bai08": {
    tone: "traffic",
    cover: "assets/daily-theme-traffic-blue.png",
    titleVi: "Phương tiện giao thông",
    titleZh: "交通工具",
    zhLabel: "交通工具",
    pinyin: "jiāotōng gōngjù",
    descVi: "Hỏi đường, đón xe, mua vé và giao tiếp khi di chuyển trong thành phố.",
    descZh: "问路、乘车、买票以及城市出行交流。",
    icon: "bus",
  },
  "hf-002-bai09": {
    tone: "holiday",
    cover: "assets/daily-theme-holiday-red.png",
    titleVi: "Rạp chiếu phim",
    titleZh: "电影院",
    zhLabel: "电影院",
    pinyin: "diànyǐngyuàn",
    descVi: "Mua vé, chọn phim và trò chuyện khi đi xem phim.",
    descZh: "购票、选片以及看电影时的日常交流。",
    icon: "star",
  },
  "hf-002-bai10": {
    tone: "city",
    cover: "assets/daily-theme-city-blue.png",
    titleVi: "Từ vựng liên quan đến thể thao",
    titleZh: "体育运动相关",
    zhLabel: "体育运动",
    pinyin: "tǐyù yùndòng",
    descVi: "Nói về môn thể thao, tập luyện và các hoạt động thể chất.",
    descZh: "谈论运动项目、锻炼和体育活动。",
    icon: "bus",
  },
  "hf-003-bai11": {
    tone: "sickleave",
    cover: "assets/daily-theme-sickleave-teal.png",
    titleVi: "Bệnh viện",
    titleZh: "医院",
    zhLabel: "医院",
    pinyin: "yīyuàn",
    descVi: "Giao tiếp khi khám bệnh, làm thủ tục và trao đổi với nhân viên y tế.",
    descZh: "就医、办理手续以及与医护人员交流。",
    icon: "clinic",
  },
  "hf-003-bai12": {
    tone: "office",
    cover: "assets/daily-theme-office-navy.png",
    titleVi: "Công ty và pháp nhân",
    titleZh: "公司与法人",
    zhLabel: "公司与法人",
    pinyin: "gōngsī yǔ fǎrén",
    descVi: "Trao đổi về công ty, pháp nhân và các vấn đề kinh doanh liên quan.",
    descZh: "交流公司、法人以及商务相关话题。",
    icon: "briefcase",
  },
  "hf-003-bai13": {
    tone: "classroom",
    cover: "assets/daily-theme-classroom-green.png",
    titleVi: "Trường học",
    titleZh: "学校",
    zhLabel: "学校",
    pinyin: "xuéxiào",
    descVi: "Giao tiếp trong môi trường trường lớp, sự kiện và hoạt động học đường.",
    descZh: "在学校环境、校园活动和课堂日常中交流。",
    icon: "book",
  },
  "hf-topic-unit-bai01": {
    tone: "greeting",
    cover: "assets/daily-theme-greeting-yellow.png",
    titleVi: "Chào hỏi và giới thiệu",
    titleZh: "问候与介绍",
    zhLabel: "问候与介绍",
    pinyin: "wènhòu yǔ jièshào",
    descVi: "Làm quen, giới thiệu bản thân và chào hỏi thông thường trong đời sống hàng ngày.",
    descZh: "认识新朋友、自我介绍和日常生活中的常用问候。",
    icon: "wave",
  },
  "hf-topic-unit-bai02": {
    tone: "interview",
    cover: "assets/daily-theme-interview-blue.png",
    titleVi: "Phỏng vấn xin việc",
    titleZh: "工作面试",
    zhLabel: "工作面试",
    pinyin: "gōngzuò miànshì",
    descVi: "Chuẩn bị hồ sơ, giới thiệu bản thân và trả lời các câu hỏi phỏng vấn thường gặp.",
    descZh: "准备简历、自我介绍并回答常见面试问题。",
    icon: "briefcase",
  },
  "hf-topic-unit-bai03": {
    tone: "classroom",
    cover: "assets/daily-theme-classroom-green.png",
    titleVi: "Học tập trên lớp",
    titleZh: "课堂学习",
    zhLabel: "课堂学习",
    pinyin: "kètáng xuéxí",
    descVi: "Giao tiếp với giáo viên, bạn cùng lớp và tham gia các hoạt động học tập hằng ngày.",
    descZh: "与老师、同学交流并参与日常课堂活动。",
    icon: "book",
  },
  "hf-topic-unit-bai04": {
    tone: "travel",
    cover: "assets/daily-theme-travel-blue.png",
    titleVi: "Du lịch",
    titleZh: "旅游",
    zhLabel: "旅游",
    pinyin: "lǚyóu",
    descVi: "Đặt vé, hỏi đường, đặt phòng khách sạn và xử lý tình huống khi đi du lịch.",
    descZh: "订票、问路、订酒店以及旅行中的常见情景。",
    icon: "plane",
  },
  "hf-topic-unit-bai05": {
    tone: "shopping",
    cover: "assets/daily-theme-shopping-orange.png",
    titleVi: "Gọi món và mua sắm",
    titleZh: "点餐购物",
    zhLabel: "点餐购物",
    pinyin: "diǎncān gòuwù",
    descVi: "Gọi món, thanh toán, mặc cả và mua bán hàng hóa trong đời sống hằng ngày.",
    descZh: "点餐、结账、讨价还价和日常购物交流。",
    icon: "cart",
  },
  "hf-topic-unit-bai06": {
    tone: "traffic",
    cover: "assets/daily-theme-traffic-blue.png",
    titleVi: "Đi lại và giao thông",
    titleZh: "出行交通",
    zhLabel: "出行交通",
    pinyin: "chūxíng jiāotōng",
    descVi: "Hỏi đường, đón xe, mua vé và giao tiếp khi di chuyển trong thành phố.",
    descZh: "问路、乘车、买票以及城市出行交流。",
    icon: "bus",
  },
  "hf-topic-unit-bai07": {
    tone: "renting-life",
    cover: "assets/daily-theme-renting-brown.png",
    titleVi: "Thuê nhà và sinh hoạt",
    titleZh: "租房生活",
    zhLabel: "租房生活",
    pinyin: "zūfáng shēnghuó",
    descVi: "Tìm nhà, thương lượng giá thuê và trao đổi các vấn đề sinh hoạt hằng ngày.",
    descZh: "找房、谈租金以及处理日常生活问题。",
    icon: "home",
  },
  "hf-topic-unit-bai08": {
    tone: "sickleave",
    cover: "assets/daily-theme-sickleave-teal.png",
    titleVi: "Bị bệnh và xin nghỉ",
    titleZh: "生病与请假",
    zhLabel: "生病与请假",
    pinyin: "shēngbìng yǔ qǐngjià",
    descVi: "Mô tả triệu chứng, đi khám bệnh và xin nghỉ làm hoặc nghỉ học.",
    descZh: "描述症状、就医以及请假的相关表达。",
    icon: "clinic",
  },
  "hf-topic-unit-bai09": {
    tone: "office",
    cover: "assets/daily-theme-office-navy.png",
    titleVi: "Đời sống công sở",
    titleZh: "职场生活",
    zhLabel: "职场生活",
    pinyin: "zhíchǎng shēnghuó",
    descVi: "Giao tiếp văn phòng, viết email, họp báo cáo và đàm phán thương mại.",
    descZh: "办公室沟通、写邮件、开会汇报和商务洽谈。",
    icon: "desk",
  },
  "hf-topic-unit-bai10": {
    tone: "factory",
    cover: "assets/daily-theme-factory-gray.png",
    titleVi: "Nhà máy và xưởng sản xuất",
    titleZh: "工厂车间",
    zhLabel: "工厂车间",
    pinyin: "gōngchǎng chējiān",
    descVi: "Trao đổi công việc, an toàn lao động và phối hợp trong môi trường nhà máy.",
    descZh: "工厂作业、安全规范与生产协作交流。",
    icon: "gear",
  },
  "hf-topic-unit-bai11": {
    tone: "ecommerce",
    cover: "assets/daily-theme-ecommerce-purple.png",
    titleVi: "Công việc thương mại điện tử",
    titleZh: "电商职场",
    zhLabel: "电商职场",
    pinyin: "diànshāng zhíchǎng",
    descVi: "Chăm sóc khách hàng, xử lý đơn hàng và giao tiếp trong môi trường thương mại điện tử.",
    descZh: "客户服务、订单处理与电商职场沟通。",
    icon: "shop",
  },
  "hf-topic-unit-bai12": {
    tone: "relationship",
    cover: "assets/daily-theme-relationship-pink.png",
    titleVi: "Mối quan hệ thân thiết",
    titleZh: "亲密关系",
    zhLabel: "亲密关系",
    pinyin: "qīnmì guānxì",
    descVi: "Thể hiện cảm xúc, rủ đi chơi, tán gẫu và xây dựng các mối quan hệ xã hội.",
    descZh: "表达情感、邀约、闲聊以及建立社交关系。",
    icon: "heart",
  },
  "hf-003-bai14": {
    tone: "admin",
    cover: "assets/daily-theme-admin-blue.png",
    titleVi: "Hành chính và hiến pháp",
    titleZh: "行政与宪法",
    zhLabel: "行政与宪法",
    pinyin: "xíngzhèng yǔ xiànfǎ",
    descVi: "Trao đổi về thủ tục hành chính, quy định pháp luật và các vấn đề công vụ.",
    descZh: "交流行政手续、法律法规和公务相关话题。",
    icon: "desk",
  },
  "hf-003-bai15": {
    tone: "holiday",
    cover: "assets/daily-theme-holiday-red.png",
    titleVi: "Ngày nghỉ và lễ hội",
    titleZh: "假日与节庆",
    zhLabel: "假日与节庆",
    pinyin: "jiàrì yǔ jiéqìng",
    descVi: "Nói về ngày lễ, kỳ nghỉ và các hoạt động vui chơi trong dịp lễ hội.",
    descZh: "谈论节日、假期以及节庆期间的日常交流。",
    icon: "star",
  },
  "hf-003-bai16": {
    tone: "travel-gear",
    cover: "assets/daily-theme-travel-gear-teal.png",
    titleVi: "Đồ dùng du lịch",
    titleZh: "旅行用品",
    zhLabel: "旅行用品",
    pinyin: "lǚxíng yòngpǐn",
    descVi: "Chuẩn bị hành lý, mua sắm đồ dùng và trao đổi khi chuẩn bị đi du lịch.",
    descZh: "准备行李、购买旅行用品以及出行前的相关交流。",
    icon: "map",
  },
  "hf-003-bai17": {
    tone: "universe",
    cover: "assets/daily-theme-universe-purple.png",
    titleVi: "Vũ trụ",
    titleZh: "宇宙",
    zhLabel: "宇宙",
    pinyin: "yǔzhòu",
    descVi: "Học từ vựng và mô tả về không gian, hành tinh và các hiện tượng vũ trụ.",
    descZh: "学习描述太空、行星和宇宙现象的相关表达。",
    icon: "star",
  },
};

const DAILY_FEATURED_FALLBACK_SLOTS = [
  { tone: "time", cover: "assets/daily-theme-time-purple.png", icon: "clock" },
  { tone: "breakfast", cover: "assets/daily-theme-breakfast-yellow.png", icon: "food" },
  { tone: "city", cover: "assets/daily-theme-city-blue.png", icon: "bus" },
  { tone: "housing", cover: "assets/daily-theme-housing-green.png", icon: "home" },
  { tone: "profile", cover: "assets/daily-theme-profile-blue.png", icon: "profile" },
  { tone: "greeting", cover: "assets/daily-theme-greeting-yellow.png", icon: "wave" },
  { tone: "interview", cover: "assets/daily-theme-interview-blue.png", icon: "briefcase" },
  { tone: "classroom", cover: "assets/daily-theme-classroom-green.png", icon: "book" },
  { tone: "travel", cover: "assets/daily-theme-travel-blue.png", icon: "plane" },
  { tone: "shopping", cover: "assets/daily-theme-shopping-orange.png", icon: "cart" },
  { tone: "traffic", cover: "assets/daily-theme-traffic-blue.png", icon: "bus" },
  { tone: "renting-life", cover: "assets/daily-theme-renting-brown.png", icon: "home" },
  { tone: "sickleave", cover: "assets/daily-theme-sickleave-teal.png", icon: "clinic" },
  { tone: "office", cover: "assets/daily-theme-office-navy.png", icon: "desk" },
  { tone: "factory", cover: "assets/daily-theme-factory-gray.png", icon: "gear" },
  { tone: "ecommerce", cover: "assets/daily-theme-ecommerce-purple.png", icon: "shop" },
  { tone: "relationship", cover: "assets/daily-theme-relationship-pink.png", icon: "heart" },
  { tone: "admin", cover: "assets/daily-theme-admin-blue.png", icon: "desk" },
  { tone: "holiday", cover: "assets/daily-theme-holiday-red.png", icon: "star" },
  { tone: "travel-gear", cover: "assets/daily-theme-travel-gear-teal.png", icon: "map" },
  { tone: "universe", cover: "assets/daily-theme-universe-purple.png", icon: "star" },
];

function getDailyThemeDescBoth(theme = {}) {
  const preset = dailyThemeCardMeta[theme.id];
  if (preset) {
    return { descVi: preset.descVi, descZh: preset.descZh };
  }
  return {
    descVi: theme.vi || theme.lesson_title_vi || "",
    descZh: theme.zh || theme.lesson_title_cn || "",
  };
}

function buildDailyFeaturedThemeFallback(theme = {}) {
  const cardMeta = getDailyThemeCardMeta(theme);
  const descBoth = getDailyThemeDescBoth(theme);
  const themeIndex = dailyThemes.findIndex((item) => item.id === theme.id);
  const slot = DAILY_FEATURED_FALLBACK_SLOTS[
    themeIndex >= 0 ? themeIndex % DAILY_FEATURED_FALLBACK_SLOTS.length : 0
  ];
  const visual = themeVisuals[theme.id] || cardMeta.visual || "chat";
  const icon = slot.icon || visual;
  return {
    tone: slot.tone,
    cover: slot.cover,
    titleVi: theme.vi || cardMeta.title,
    titleZh: theme.zh || cardMeta.title,
    zhLabel: theme.zh || theme.vi || cardMeta.title,
    pinyin: "",
    descVi: descBoth.descVi,
    descZh: descBoth.descZh,
    icon,
  };
}

function getDailyFeaturedThemeConfig(theme = {}) {
  if (DAILY_FEATURED_THEME_CARDS[theme.id]) {
    return DAILY_FEATURED_THEME_CARDS[theme.id];
  }
  if (isDailyTimeTheme(theme)) {
    return DAILY_FEATURED_TIME_CARD;
  }
  return buildDailyFeaturedThemeFallback(theme);
}

function renderDailyFeaturedThemeIcon(iconType) {
  const icons = {
    clock: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`,
    food: getThemeIcon("food"),
    bus: getThemeIcon("bus"),
    home: getThemeIcon("home"),
    profile: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"></circle><path d="M5 20a7 7 0 0 1 14 0"></path></svg>`,
    cart: getThemeIcon("cart"),
    clinic: getThemeIcon("clinic"),
    wave: getThemeIcon("wave"),
    briefcase: getThemeIcon("briefcase"),
    book: getThemeIcon("book"),
    plane: getThemeIcon("plane"),
    map: getThemeIcon("map"),
    star: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2l2.6 5.1 5.7.8-4.1 4 1 5.7L12 15l-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 2z"/></svg>`,
    desk: getThemeIcon("desk"),
    gear: getThemeIcon("gear"),
    shop: getThemeIcon("shop"),
    heart: getThemeIcon("heart"),
  };
  return icons[iconType] || icons.clock;
}

function renderDailyFeaturedThemeCardHTML(theme, cardMeta, isLocked, countLabel, isVi, config, accessStatus = isLocked ? "locked" : "open") {
  const itemCount = Array.isArray(theme.items) ? theme.items.length : 0;
  const buttonLabel = isLocked ? lockedContentCtaText() : (isVi ? "Vào học" : "开始学习");
  const title = isVi ? config.titleVi : config.titleZh;
  const desc = isVi ? config.descVi : config.descZh;
  const accessBadgeHTML = accessStatusBadgeHTML(accessStatus, { type: "daily-theme", theme, config });
  return `
      <article class="daily-theme-card daily-theme-card--featured daily-theme-card--${config.tone} access-rule-${accessStatus} ${isLocked ? "locked" : ""}" data-theme="${theme.id}" ${isLocked ? 'data-locked="true"' : ""}>
        <img
          class="daily-theme-cover"
          src="${config.cover}"
          alt="${escapeAttr(title)}"
          aria-hidden="true"
        />
        <div class="daily-theme-card-time-overlay"></div>
        <div class="daily-theme-card-time-content">
          <div class="daily-theme-card-time-top">
            <span class="daily-theme-count-badge">${itemCount} ${countLabel}</span>
            ${accessBadgeHTML}
          </div>
          <div class="daily-theme-card-time-body">
            <div class="daily-theme-time-title-row">
              <span class="daily-theme-time-icon" aria-hidden="true">
                ${renderDailyFeaturedThemeIcon(config.icon)}
              </span>
              <h3 class="daily-theme-title">${title}</h3>
            </div>
            <p class="daily-theme-time-zh">${config.zhLabel} <span>${config.pinyin}</span></p>
            <p class="daily-theme-desc">${desc}</p>
          </div>
          <button class="daily-theme-enter-btn" type="button">
            ${isLocked ? lockedAccessButtonText() : buttonLabel}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
            </svg>
          </button>
        </div>
      </article>
  `;
}

function lessonVisualClass(index) {
  return `lesson-visual-${index % 6}`;
}

function themeVisualClass(theme) {
  return `theme-visual-${themeVisuals[theme.id] || "chat"}`;
}

function themeIconLabel(theme) {
  const labels = {
    greeting: "问",
    greeting_introduction: "问",
    interview: "职",
    job_interview: "职",
    classroom: "书",
    classroom_learning: "书",
    travel: "行",
    tourism_travel: "行",
    shopping: "购",
    dining_shopping: "购",
    ordering_shopping: "购",
    transport: "车",
    transportation: "车",
    renting: "家",
    renting_life: "家",
    sickleave: "医",
    illness_leave: "医",
    sick_leave: "医",
    office: "办",
    workplace_life: "办",
    office_life: "办",
    factory: "工",
    factory_workshop: "工",
    ecommerce: "商",
    ecommerce_workplace: "商",
    relationship: "友",
    close_relationship: "友",
    close_relationships: "友",
  };
  return labels[theme.id] || theme.icon;
}

let audioContext;
let activeSpeechAudio = null;
let speechPlaybackToken = 0;
let scheduledPracticeSpeakTimer = null;
let slowSpeech = false;
let preferredChineseVoice = null;

function currentCollection() {
  if (state.module === "vocab") {
    const items = [...state.saved]
      .map(hanzi => normalizeVocabPracticeItem(findItemByHanzi(hanzi), hanzi))
      .filter(item => item.hanzi && item.words.length > 0);
    return {
      id: "vocab",
      no: "",
      title: state.lang === "vi" ? "Bộ từ luyện tập" : "生词本练习",
      items: items.length > 0 ? items : [{ hanzi: "", words: [], vi: "", stage: "word" }]
    };
  }
  if (state.module === "hsk") {
    const lessonItem = hskLevels[state.level].find((entry) => entry.id === state.lessonId);
    if (!lessonItem) return null;
    const contentType = state.hskContentType;
    const lessonItems = hskLessonItemsByType(lessonItem, contentType);
    return {
      ...lessonItem,
      title:
        state.lang === "vi"
          ? `${lessonItem.titleVi || lessonItem.title}${contentType ? ` - ${hskContentTypeLabel(contentType)}` : ""}`
          : `${lessonItem.titleZh || lessonItem.title}${contentType ? ` - ${hskContentTypeLabel(contentType)}` : ""}`,
      items: lessonItems,
    };
  }
  const theme = dailyThemes.find((itemTheme) => itemTheme.id === state.themeId);
  const contentType = state.dailyContentType;
  return {
    id: theme.id,
    no: "",
    title:
      state.lang === "vi"
        ? `${theme.vi}${contentType ? ` - ${hskContentTypeLabel(contentType)}` : ""}`
        : `${theme.zh}${contentType ? ` - ${hskContentTypeLabel(contentType)}` : ""}`,
    items: dailyThemeItemsByType(theme, contentType),
  };
}

function normalizeSegmentPos(pos = "") {
  const value = String(pos || "").trim();
  const map = {
    名词: "noun",
    动词: "verb",
    形容词: "adj",
    代词: "pron",
    副词: "adv",
    功能词: "function",
    noun: "noun",
    verb: "verb",
    adj: "adj",
    pron: "pron",
    adv: "adv",
    function: "function",
  };
  return map[value] || value;
}

const allowedSegmentTypes = new Set(["词", "短语", "功能词块"]);
const allowedSegmentPosLabels = new Set(["名词", "动词", "形容词", "代词", "副词", "功能词"]);
const illegalSegmentPosLabels = new Set(["生词", "关键词", "短语", "word", "phrase", "sentence", "vocab", "keyword"]);
const legacySegmentOverrides = {
  发给我: { segment_type: "短语", pos: "动词" },
  这个岗位: { segment_type: "短语", pos: "名词" },
  工作经验: { segment_type: "短语", pos: "名词" },
  参加面试: { segment_type: "短语", pos: "动词" },
  需要: { segment_type: "词", pos: "动词" },
  一点: { segment_type: "词", pos: "副词" },
};

function segmentWarn(message, segment = {}) {
  console.warn(`[segment-label] ${message}`, {
    id: segment.id || "",
    text: segment.text || "",
  });
}

function segmentPosLabel(rawPos = "") {
  const value = String(rawPos || "").trim();
  const map = {
    名词: "名词",
    动词: "动词",
    形容词: "形容词",
    代词: "代词",
    副词: "副词",
    功能词: "功能词",
    noun: "名词",
    verb: "动词",
    adj: "形容词",
    pron: "代词",
    adv: "副词",
    function: "功能词",
    prep: "功能词",
    particle: "功能词",
    "possessive-pron": "代词",
  };
  return map[value] || value;
}

function inferSegmentType(segment = {}, posLabel = "") {
  const text = String(segment.text || "").trim();
  if (posLabel === "功能词") return "功能词块";
  if (String(segment.pos || "").trim() === "phrase") return "短语";
  if ((text.match(/[\u4e00-\u9fff]/g) || []).length >= 3) return "短语";
  return "词";
}

function normalizeDisplaySegment(segment = {}) {
  const text = String(segment.text || "").trim();
  const override = legacySegmentOverrides[text];
  if (override && !segment.segment_type && !segment.segmentType) {
    return { ...segment, segment_type: override.segment_type, pos: override.pos };
  }
  const posLabel = segmentPosLabel(segment.segmentPos || segment.pos);
  return {
    ...segment,
    segment_type: segment.segment_type || segment.segmentType || inferSegmentType(segment, posLabel),
    pos: posLabel,
  };
}

function displaySegmentLabel(segment = {}) {
  const rawType = String(segment.segment_type || segment.segmentType || "").trim();
  const rawPos = String(segment.pos || "").trim();
  const typeLabel = allowedSegmentTypes.has(rawType) ? rawType : "未标注词块";
  const posLabel = segmentPosLabel(rawPos);

  if (!rawType) segmentWarn("missing segment_type", segment);
  if (!rawPos) {
    segmentWarn("missing pos", segment);
    return `${typeLabel} · 未标注词性`;
  }
  if (!allowedSegmentTypes.has(rawType)) segmentWarn(`invalid segment_type: ${rawType}`, segment);
  if (illegalSegmentPosLabels.has(rawPos) || !allowedSegmentPosLabels.has(posLabel)) {
    segmentWarn(`invalid pos: ${rawPos}`, segment);
    return `${typeLabel} · 词性错误`;
  }
  return `${typeLabel} · ${posLabel}`;
}

function segmentToWord(segment = {}) {
  const pinyin = segment.pinyin || segment.tone || "";
  return {
    text: segment.text || "",
    pinyin,
    tone: pinyin,
    pos: normalizeSegmentPos(segment.pos),
    vi: segment.vietnamese || segment.vi || "",
    segmentType: segment.segment_type || segment.segmentType || "",
    segment_type: segment.segment_type || segment.segmentType || "",
    segmentPos: segment.pos || "",
  };
}

function sentenceSegmentsToWords(item = {}) {
  if (item.stage !== "sentence" || !Array.isArray(item.segments) || item.segments.length === 0) return null;
  return item.segments.map(segmentToWord).filter((word) => word.text && word.pinyin && word.pos);
}

function itemToSinglePracticeWord(item = {}) {
  const text = itemChineseText(item);
  const pinyin = item.pinyin || item.tone || "";
  if (!text || !pinyin) return [];
  return [{
    text,
    pinyin,
    tone: item.tone || pinyin,
    pos: normalizeSegmentPos(item.pos || learningContentBucket(item)),
    vi: item.vietnamese || item.vi || "",
    segmentType: "word",
    segment_type: "",
    segmentPos: item.pos || "",
  }];
}

function currentItem() {
  const collection = currentCollection();
  state.index = Math.max(0, Math.min(state.index, collection.items.length - 1));
  const itemNow = collection.items[state.index];
  const sourceWords = sentenceSegmentsToWords(itemNow) || itemNow.words || itemToSinglePracticeWord(itemNow);
  const words = globalThis.practiceAnswerRules?.normalizePracticeWords
    ? globalThis.practiceAnswerRules.normalizePracticeWords(sourceWords)
    : sourceWords;
  const safeWords = Array.isArray(words) ? words : [];
  return {
    ...itemNow,
    words: safeWords,
    pinyin: safeWords.map((word) => word.pinyin).join(" "),
    tone: safeWords.map((word) => word.tone).join(" "),
  };
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

function escapeAttr(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtml(value) {
  return escapeAttr(value);
}

async function copyTextToClipboard(value) {
  const text = String(value || "");
  if (!text) return false;
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall back to the legacy copy path below.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    return document.execCommand("copy");
  } finally {
    textarea.remove();
  }
}

function showCopyButtonFeedback(button, isVi = state.lang === "vi") {
  if (!button) return;
  if (!button.dataset.originalCopyHtml) {
    button.dataset.originalCopyHtml = button.innerHTML;
  }
  if (button.dataset.copyFeedbackTimer) {
    clearTimeout(Number(button.dataset.copyFeedbackTimer));
  }
  button.classList.add("copied");
  button.textContent = isVi ? "Đã sao chép ✓" : "已复制 ✓";
  const timer = window.setTimeout(() => {
    button.classList.remove("copied");
    button.innerHTML = button.dataset.originalCopyHtml || "";
    delete button.dataset.copyFeedbackTimer;
  }, 2000);
  button.dataset.copyFeedbackTimer = String(timer);
}

const BACKEND_DISABLED = false;
const LISTENING_REALTIME_WS_PATH = "/api/listening/realtime-pronunciation";
const LISTENING_REALTIME_WS_STORAGE_KEY = "huamei-realtime-ws-url";
const HUAMEI_BACKEND_URL_STORAGE_KEY = "huamei-backend-url";

function backendDisabledMessage() {
  return state.lang === "vi"
    ? "Bản Netlify hiện chỉ chạy nội dung học tĩnh, chưa bật đăng nhập."
    : "Netlify 版本目前仅运行静态学习内容，尚未启用登录。";
}

function formatPlanPrice(amount) {
  return `${Number(amount || 0).toLocaleString("vi-VN")}đ`;
}

function planDurationDays(plan) {
  const value = Number(plan.months) || 0;
  return plan.durationUnit === "days" ? value : value * 30;
}

const LOCAL_DEFAULT_PAYMENT_PLANS = [
  {
    id: "3d",
    months: 3,
    durationUnit: "days",
    amount: 29000,
    nameVi: "Gói VIP 3 ngày",
    nameZh: "3天 VIP",
    sortOrder: 1,
    priceLabel: "29.000đ",
  },
  {
    id: "30d",
    months: 30,
    durationUnit: "days",
    amount: 129000,
    nameVi: "Gói VIP 1 tháng",
    nameZh: "1个月 VIP",
    sortOrder: 2,
    priceLabel: "129.000đ",
  },
  {
    id: "90d",
    months: 90,
    durationUnit: "days",
    amount: 329000,
    nameVi: "Gói VIP 3 tháng",
    nameZh: "3个月 VIP",
    sortOrder: 3,
    priceLabel: "329.000đ",
  },
];

function isThreeDayVipPlan(plan) {
  const planId = String(plan?.id || "").trim().toLowerCase();
  return plan?.durationUnit === "days"
    && Number(plan.amount) === 29000
    && (Number(plan.months) === 3 || planId === "3d" || planId === "7d");
}

function isOneMonthVipPlan(plan) {
  return plan?.durationUnit === "days" && Number(plan.months) === 30 && Number(plan.amount) === 129000;
}

function isThreeMonthVipPlan(plan) {
  return plan?.durationUnit === "days" && Number(plan.months) === 90 && Number(plan.amount) === 329000;
}

function selectUpgradePlansForDisplay(apiPlans = []) {
  const plans = [...(apiPlans || []), ...LOCAL_DEFAULT_PAYMENT_PLANS];
  const threeDay = plans.find((plan) => plan.id === "3d" && isThreeDayVipPlan(plan))
    || plans.find((plan) => plan.id === "7d" && isThreeDayVipPlan(plan))
    || plans.find(isThreeDayVipPlan)
    || LOCAL_DEFAULT_PAYMENT_PLANS[0];
  const oneMonth = plans.find((plan) => plan.id === "30d" && isOneMonthVipPlan(plan))
    || plans.find(isOneMonthVipPlan)
    || LOCAL_DEFAULT_PAYMENT_PLANS[1];
  const threeMonth = plans.find((plan) => plan.id === "90d" && isThreeMonthVipPlan(plan))
    || plans.find(isThreeMonthVipPlan)
    || LOCAL_DEFAULT_PAYMENT_PLANS[2];
  return [threeDay, oneMonth, threeMonth];
}

function buildDisplayPlans(apiPlans, isVi) {
  const sorted = [...(apiPlans || [])].sort((a, b) => {
    if (a.sortOrder !== b.sortOrder) return (a.sortOrder || 0) - (b.sortOrder || 0);
    return planDurationDays(a) - planDurationDays(b);
  });
  if (!sorted.length) return [];

  const monthPlans = sorted.filter((plan) => plan.durationUnit !== "days");
  const baseMonthly = monthPlans.length
    ? monthPlans[0].amount / monthPlans[0].months
    : sorted[0].amount / Math.max(1, planDurationDays(sorted[0]) / 30);
  const popularIndex = sorted.length >= 3 ? 1 : sorted.length === 2 ? 1 : 0;

  return sorted.map((plan, index) => {
    const isDayPlan = plan.durationUnit === "days";
    const isThreeDayVip = isThreeDayVipPlan(plan);
    const isOneMonthVip = isOneMonthVipPlan(plan);
    const isThreeMonthVip = isThreeMonthVipPlan(plan);
    const displayDayCount = isThreeDayVip ? 3 : Number(plan.months);
    const monthly = isDayPlan
      ? Math.round(plan.amount / Math.max(1, displayDayCount / 30))
      : Math.round(plan.amount / plan.months);
    const savings = !isDayPlan && monthPlans.length && plan.months === monthPlans[0].months
      ? 0
      : !isDayPlan && monthPlans.length
        ? Math.max(0, Math.round((1 - plan.amount / (baseMonthly * plan.months)) * 100))
        : 0;

    let kickerVi;
    let kickerZh;
    if (isOneMonthVip) {
      kickerVi = "Gói VIP 1 tháng";
      kickerZh = "1个月 VIP";
    } else if (isThreeMonthVip) {
      kickerVi = "Gói VIP 3 tháng";
      kickerZh = "3个月 VIP";
    } else if (isDayPlan) {
      kickerVi = isThreeDayVip ? "Gói VIP 3 ngày" : plan.nameVi;
      kickerZh = isThreeDayVip ? "3天 VIP" : plan.nameZh;
    } else if (plan.months === monthPlans[0]?.months) {
      kickerVi = "Gói cơ bản";
      kickerZh = "基础套餐";
    } else if (savings > 0) {
      kickerVi = `Tiết kiệm ${savings}%`;
      kickerZh = `节省 ${savings}%`;
    } else {
      kickerVi = plan.nameVi;
      kickerZh = plan.nameZh;
    }

    const note = isDayPlan
      ? (isOneMonthVip ? (isVi ? "/ 30 ngày" : "/ 30天") : (isVi ? `/ ${displayDayCount} ngày` : `/ ${displayDayCount}天`))
      : plan.months === 1
        ? (isVi ? "/tháng" : "/月")
        : (isVi ? `Chỉ ~${Math.round(monthly / 1000)}k / tháng` : `仅 ~${Math.round(monthly / 1000)}k / 月`);

    return {
      id: isThreeDayVip ? "3d" : plan.id,
      nameVi: kickerVi,
      nameZh: kickerZh,
      durationVi: isThreeMonthVip ? "Gói VIP 3 tháng" : (isOneMonthVip ? "Gói VIP 1 tháng" : (isThreeDayVip ? "Gói VIP 3 ngày" : plan.nameVi)),
      durationZh: isThreeMonthVip ? "3个月 VIP" : (isOneMonthVip ? "1个月 VIP" : (isThreeDayVip ? "3天 VIP" : plan.nameZh)),
      price: isThreeMonthVip ? "329.000đ" : (isOneMonthVip ? "129.000đ" : (isThreeDayVip ? "29.000đ" : (plan.priceLabel || formatPlanPrice(plan.amount)))),
      note,
      discount: index === popularIndex && sorted.length > 1 ? (isVi ? "Phổ biến nhất" : "最受欢迎") : "",
      popular: index === popularIndex && sorted.length > 1,
      isThreeDayVip,
      isOneMonthVip,
      actionVi: isThreeMonthVip ? "Đăng ký gói 3 tháng" : (isOneMonthVip ? "Đăng ký gói 1 tháng" : "Đăng ký gói 3 ngày"),
      actionZh: "开通 VIP",
    };
  });
}

async function loadPaymentPlans() {
  if (BACKEND_DISABLED) return [];
  if (state.paymentPlansLoaded) return state.paymentPlans;
  if (state.paymentPlansPromise) return state.paymentPlansPromise;
  state.paymentPlansPromise = apiRequest("/api/payments/plans")
    .then((data) => {
      state.paymentPlans = data.plans || [];
      state.paymentBankConfigured = data.bankConfigured === true;
      state.paymentPlansLoaded = true;
      return state.paymentPlans;
    })
    .finally(() => {
      state.paymentPlansPromise = null;
    });
  return state.paymentPlansPromise;
}

function prefetchPaymentPlans() {
  if (BACKEND_DISABLED || state.paymentPlansLoaded || state.paymentPlansPromise) return;
  loadPaymentPlans().catch((error) => {
    console.warn("Payment plans prefetch failed; local defaults remain available.", error);
  });
}

async function refreshPaymentPlans() {
  if (BACKEND_DISABLED) return [];
  state.paymentPlansLoaded = false;
  state.paymentPlansPromise = null;
  const data = await apiRequest("/api/payments/plans");
  state.paymentPlans = data.plans || [];
  state.paymentBankConfigured = data.bankConfigured === true;
  state.paymentPlansLoaded = true;
  return state.paymentPlans;
}

async function apiRequest(path, options = {}) {
  if (BACKEND_DISABLED && path.startsWith("/api/")) {
    throw new Error(backendDisabledMessage());
  }

  const shouldBypassCache = /^\/api\/(?:content|admin\/content)\//.test(path)
    || /^\/api\/users\/[^/]+\/status(?:\?|$)/.test(path)
    || /^\/api\/payments\/orders\/[^/]+\/status(?:\?|$)/.test(path);
  const response = await fetch(path, {
    cache: shouldBypassCache ? "no-store" : options.cache,
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(shouldBypassCache ? { "Cache-Control": "no-cache" } : {}),
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error
      || (Array.isArray(data.message) ? data.message[0] : data.message)
      || "Không thể kết nối server.";
    throw new Error(message);
  }
  return data;
}

const TRAFFIC_SOURCE_KEY = "v2-traffic-source";
const REFERRAL_REF_KEY = "v2-referral-ref";
const ALLOWED_LEARNING_EVENT_TYPES = new Set([
  "lesson_opened",
  "question_answered",
  "practice_completed",
  "paywall_shown",
  "vip_modal_opened",
  "study_session_started",
  "study_session_heartbeat",
  "study_session_ended",
]);
let learningEventQueue = [];
let learningEventFlushTimer = null;
const LEARNING_BEHAVIOR_HEARTBEAT_MS = 30000;
let learningBehaviorSession = {
  key: "",
  context: null,
  startedAt: 0,
  lastHeartbeatAt: 0,
  heartbeatTimer: null,
};

function normalizeReferralParam(value, maxLength = 64) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, maxLength);
}

function readReferralParamsFromSearch(search = "") {
  try {
    const params = new URLSearchParams(search || "");
    return {
      ref: normalizeReferralParam(
        params.get("r") || params.get("ref") || params.get("referral") || params.get("referral_ref") || "",
        64,
      ),
      src: normalizeReferralParam(
        params.get("src") || params.get("source") || params.get("utm_source") || "",
        40,
      ),
    };
  } catch {
    return { ref: "", src: "" };
  }
}

function writeReferralStorage(key, value) {
  if (!value) return;
  try { localStorage.setItem(key, value); } catch { /* ignore storage errors */ }
  try { sessionStorage.setItem(key, value); } catch { /* ignore storage errors */ }
}

function readReferralStorage(key) {
  try {
    return localStorage.getItem(key) || sessionStorage.getItem(key) || "";
  } catch {
    try { return sessionStorage.getItem(key) || ""; } catch { return ""; }
  }
}

function removeReferralStorage(key) {
  try { localStorage.removeItem(key); } catch { /* ignore storage errors */ }
  try { sessionStorage.removeItem(key); } catch { /* ignore storage errors */ }
}

function persistReferralParams(params) {
  if (params?.ref) writeReferralStorage(REFERRAL_REF_KEY, params.ref);
  if (params?.src) writeReferralStorage(TRAFFIC_SOURCE_KEY, params.src);
}

function captureReferralParams() {
  if (typeof window === "undefined") return;
  persistReferralParams(readReferralParamsFromSearch(window.location.search));
}

function captureReferralRef() {
  captureReferralParams();
}

function captureTrafficSource() {
  captureReferralParams();
}

function getReferralRefFromUrl() {
  if (typeof window !== "undefined") {
    const params = readReferralParamsFromSearch(window.location.search);
    persistReferralParams(params);
    if (params.ref) return params.ref;
  }
  return readReferralStorage(REFERRAL_REF_KEY);
}

function getTrafficSource() {
  if (typeof window !== "undefined") {
    const params = readReferralParamsFromSearch(window.location.search);
    persistReferralParams(params);
    if (params.src) return params.src;
  }
  return readReferralStorage(TRAFFIC_SOURCE_KEY);
}

function clearReferralAttribution() {
  removeReferralStorage(REFERRAL_REF_KEY);
  removeReferralStorage(TRAFFIC_SOURCE_KEY);
}

function ensureReferralQueryInAddress() {
  if (typeof window === "undefined" || !window.history?.replaceState) return;
  if (state.user?.id || window.location.pathname === "/admin") return;
  const params = new URLSearchParams(window.location.search);
  const current = readReferralParamsFromSearch(window.location.search);
  const storedRef = current.ref || readReferralStorage(REFERRAL_REF_KEY);
  const storedSrc = current.src || readReferralStorage(TRAFFIC_SOURCE_KEY);
  if (!storedRef || current.ref) return;
  params.set("r", storedRef);
  if (storedSrc && !current.src) params.set("src", storedSrc);
  const nextSearch = params.toString();
  const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ""}${window.location.hash || ""}`;
  window.history.replaceState(window.history.state, "", nextUrl);
}

function trackEvent(eventType, payload = {}) {
  if (BACKEND_DISABLED || !ALLOWED_LEARNING_EVENT_TYPES.has(eventType)) return;
  learningEventQueue.push({
    eventType,
    userId: state.user?.id || null,
    module: payload.module || null,
    level: payload.level || null,
    lessonId: payload.lessonId || null,
    topicId: payload.topicId || null,
    questionId: payload.questionId || null,
    isCorrect: typeof payload.isCorrect === "boolean" ? payload.isCorrect : null,
    source: getTrafficSource() || null,
  });
  if (learningEventQueue.length >= 10) {
    flushLearningEvents();
    return;
  }
  if (!learningEventFlushTimer) {
    learningEventFlushTimer = setTimeout(flushLearningEvents, 4000);
  }
}

function flushLearningEvents(useBeacon = false) {
  if (learningEventFlushTimer) {
    clearTimeout(learningEventFlushTimer);
    learningEventFlushTimer = null;
  }
  if (BACKEND_DISABLED || learningEventQueue.length === 0) return;
  const batch = learningEventQueue.splice(0, learningEventQueue.length);
  const bodyString = JSON.stringify({ events: batch });

  if (useBeacon && typeof navigator !== "undefined" && navigator.sendBeacon) {
    try {
      navigator.sendBeacon("/api/events", new Blob([bodyString], { type: "application/json" }));
      return;
    } catch {
      /* fall back to fetch below */
    }
  }

  const headers = state.user?.id ? { "X-User-Id": state.user.id } : {};
  apiRequest("/api/events", { method: "POST", headers, body: bodyString }).catch(() => {
    /* analytics must never break the UX */
  });
}

function normalizeLearningBehaviorPart(value) {
  return String(value || "").trim();
}

function buildLearningBehaviorContext(screenName = state.screen) {
  if (!state.user?.id || screenName === "admin") return null;
  if (screenName === "listening") {
    if (!["detail", "repeat", "vocab"].includes(state.listeningView)) return null;
    const episode = typeof getListeningEpisode === "function" ? getListeningEpisode(state.listeningEpisodeId) : null;
    const topic = typeof getListeningTopicByEpisodeId === "function" ? getListeningTopicByEpisodeId(state.listeningEpisodeId) : null;
    return {
      module: "listening",
      level: state.listeningLevelId || episode?.levelId || null,
      lessonId: state.listeningEpisodeId || episode?.id || null,
      topicId: state.listeningTopicId || topic?.id || null,
      questionId: state.listeningView || null,
    };
  }
  if (screenName === "practice" || screenName === "complete") {
    const isDaily = state.module === "daily";
    const contentType = isDaily ? (state.dailyContentType || "daily") : (state.hskContentType || "hsk");
    return {
      module: "writing",
      level: isDaily ? "daily" : (state.level || null),
      lessonId: isDaily ? null : (state.lessonId || null),
      topicId: isDaily ? (state.themeId || null) : null,
      questionId: `${state.mode || "practice"}:${contentType}`,
    };
  }
  return null;
}

function getLearningBehaviorSessionKey(context) {
  if (!context) return "";
  return [
    context.module,
    context.level,
    context.lessonId,
    context.topicId,
    context.questionId,
  ].map(normalizeLearningBehaviorPart).join("|");
}

function clearLearningBehaviorHeartbeat() {
  if (!learningBehaviorSession.heartbeatTimer) return;
  clearTimeout(learningBehaviorSession.heartbeatTimer);
  learningBehaviorSession.heartbeatTimer = null;
}

function sendLearningBehaviorHeartbeat(force = false) {
  if (!learningBehaviorSession.key || !learningBehaviorSession.context) return;
  const now = Date.now();
  if (!force && now - learningBehaviorSession.lastHeartbeatAt < LEARNING_BEHAVIOR_HEARTBEAT_MS - 1000) return;
  learningBehaviorSession.lastHeartbeatAt = now;
  trackEvent("study_session_heartbeat", learningBehaviorSession.context);
}

function scheduleLearningBehaviorHeartbeat() {
  clearLearningBehaviorHeartbeat();
  if (!learningBehaviorSession.key || !learningBehaviorSession.context) return;
  learningBehaviorSession.heartbeatTimer = setTimeout(() => {
    sendLearningBehaviorHeartbeat(true);
    scheduleLearningBehaviorHeartbeat();
  }, LEARNING_BEHAVIOR_HEARTBEAT_MS);
}

function endLearningBehaviorSession() {
  if (learningBehaviorSession.key && learningBehaviorSession.context) {
    sendLearningBehaviorHeartbeat(true);
    trackEvent("study_session_ended", learningBehaviorSession.context);
  }
  clearLearningBehaviorHeartbeat();
  learningBehaviorSession = {
    key: "",
    context: null,
    startedAt: 0,
    lastHeartbeatAt: 0,
    heartbeatTimer: null,
  };
}

function syncLearningBehaviorSession(screenName = state.screen) {
  const context = buildLearningBehaviorContext(screenName);
  const nextKey = getLearningBehaviorSessionKey(context);
  if (!context || !nextKey) {
    endLearningBehaviorSession();
    return;
  }
  if (learningBehaviorSession.key === nextKey) {
    scheduleLearningBehaviorHeartbeat();
    return;
  }
  endLearningBehaviorSession();
  const now = Date.now();
  learningBehaviorSession = {
    key: nextKey,
    context,
    startedAt: now,
    lastHeartbeatAt: now,
    heartbeatTimer: null,
  };
  trackEvent("study_session_started", context);
  scheduleLearningBehaviorHeartbeat();
}

function buildPracticeEventContext() {
  const module = state.module || null;
  const context = { module, level: null, lessonId: null, topicId: null };
  if (module === "hsk") {
    context.lessonId = state.lessonId || null;
    context.level = state.level || null;
  } else if (module === "daily") {
    context.topicId = state.themeId || null;
  }
  return context;
}

function getPaymentOrderErrorMessage(error, isVi = state.lang === "vi") {
  const message = String(error?.message || "");
  if (/bank|sepay|ngan hang|ngân hàng|tai khoan|tài khoản/i.test(message)) {
    return isVi
      ? "Cấu hình SePay / tài khoản ngân hàng chưa đầy đủ. Vui lòng liên hệ quản trị viên."
      : "SePay / 银行账户配置未完成，请联系管理员。";
  }
  return message || (isVi ? "Không thể tạo đơn thanh toán." : "无法创建支付订单。");
}

async function refreshCurrentUserStatus(showFailureToast = false) {
  if (BACKEND_DISABLED || !state.user?.id) return null;

  try {
    const data = await apiRequest(`/api/users/${encodeURIComponent(state.user.id)}/status`, {
      headers: {
        "X-User-Id": state.user.id,
      },
    });
    if (data.user) {
      state.user = { ...state.user, ...data.user };
      saveState();
      return state.user;
    }
  } catch (error) {
    state.user = { ...state.user, vipStatus: "unknown" };
    saveState();
    console.warn("Could not refresh current user status; keeping the last known VIP access state.", error);
    if (showFailureToast) {
      showToast(state.lang === "vi"
        ? "Không thể cập nhật trạng thái VIP. Vui lòng tải lại trang."
        : "无法更新 VIP 状态，请刷新页面。");
    }
  }
  return null;
}

function refreshVisibleVipAccessState() {
  renderChrome();
  if (state.screen === "course") renderCourse();
  else if (state.screen === "listening") renderListening({ silentCatalogLoad: true });
  else if (state.screen === "home") renderHome();
  else if (state.screen === "account") openAccountScreen();
}

function formatDateTime(value) {
  if (!value) return "Chưa có";
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatAdminDate(value) {
  if (!value) return "N/A";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "N/A";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function formatAdminRegistrationDate(value, isVi) {
  const emptyLabel = isVi ? "Chưa có thời gian đăng ký" : "暂无注册时间";
  if (!value) return emptyLabel;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return emptyLabel;
  let formatted = "";
  try {
    const parts = new Intl.DateTimeFormat(isVi ? "vi-VN" : "zh-CN", {
      timeZone: "Asia/Bangkok",
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour12: false,
    }).formatToParts(date).reduce((map, part) => {
      map[part.type] = part.value;
      return map;
    }, {});
    formatted = `${parts.hour}:${parts.minute} ${parts.day}/${parts.month}/${parts.year}`;
  } catch (error) {
    formatted = new Intl.DateTimeFormat(isVi ? "vi-VN" : "zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour12: false,
    }).format(date);
  }
  return isVi ? `Đăng ký: ${formatted}` : `注册: ${formatted}`;
}

function getAdminUserRegistrationTimestamp(user) {
  return user?.registeredAt || user?.createdAt || user?.registered_at || user?.created_at || "";
}

function formatAdminRegistrationTimeOnly(value, isVi) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  try {
    const parts = new Intl.DateTimeFormat(isVi ? "vi-VN" : "zh-CN", {
      timeZone: "Asia/Bangkok",
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour12: false,
    }).formatToParts(date).reduce((map, part) => {
      map[part.type] = part.value;
      return map;
    }, {});
    return `${parts.hour}:${parts.minute} ${parts.day}/${parts.month}/${parts.year}`;
  } catch (error) {
    return new Intl.DateTimeFormat(isVi ? "vi-VN" : "zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour12: false,
    }).format(date);
  }
}

function formatAdminDateInput(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
}

function formatPremiumExpiry(value, isVi) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat(isVi ? "vi-VN" : "zh-CN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function showUpgradeSuccessModal({ planLabel, premiumUntil }) {
  const isVi = state.lang === "vi";
  const existing = document.getElementById("upgradeSuccessModal");
  if (existing) existing.remove();

  const modalDiv = document.createElement("div");
  modalDiv.id = "upgradeSuccessModal";
  modalDiv.className = "upgrade-success-overlay";
  modalDiv.innerHTML = `
    <div class="upgrade-success-modal">
      <div class="upgrade-success-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h2>${isVi ? "Nâng cấp thành công!" : "升级成功！"}</h2>
      <p class="upgrade-success-subtitle">${isVi
      ? "Chào mừng bạn đến với gói Pro. Toàn bộ tính năng cao cấp đã được mở khóa."
      : "欢迎加入 Pro 套餐，全部高级功能已解锁。"}</p>
      <div class="upgrade-success-details">
        <div class="upgrade-success-row">
          <span>${isVi ? "GÓI ĐĂNG KÝ" : "订阅套餐"}</span>
          <strong>${escapeAttr(planLabel)}</strong>
        </div>
        <div class="upgrade-success-row">
          <span>${isVi ? "NGÀY HẾT HẠN" : "到期日期"}</span>
          <strong>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
              <path d="M3 10h18" />
            </svg>
            ${escapeAttr(formatPremiumExpiry(premiumUntil, isVi))}
          </strong>
        </div>
      </div>
      <button class="upgrade-success-action" id="upgradeSuccessStartBtn" type="button">
        ${isVi ? "Bắt đầu học ngay" : "立即开始学习"}
        <span aria-hidden="true">→</span>
      </button>
    </div>
  `;

  document.body.appendChild(modalDiv);
  const closeModal = () => modalDiv.remove();
  modalDiv.querySelector("#upgradeSuccessStartBtn").onclick = () => {
    closeModal();
    renderChrome();
    setScreen("home");
  };
  modalDiv.onclick = (event) => {
    if (event.target === modalDiv) closeModal();
  };
}

function isActivePremiumUser(user) {
  const premiumUntil = user?.premiumUntil ? new Date(user.premiumUntil) : null;
  return Boolean(user?.isPremium && (!premiumUntil || premiumUntil.getTime() > Date.now()));
}

function normalizeVipPlanId(user) {
  const planId = String(user?.vipPlanId || user?.vipPlan || user?.plan || "").trim().toLowerCase();
  if (planId === "3d" || planId === "7d") return "3d";
  if (planId === "30d") return "30d";
  if (planId === "90d" || planId === "3m") return "90d";
  return "";
}

function isIntroVipPlanId(planId) {
  const id = String(planId || "").trim().toLowerCase();
  return id === "3d" || id === "7d";
}

function hasUsedIntroVipPlan(user = state.user) {
  return Boolean(user?.vipTrialUsed || isIntroVipPlanId(user?.vipPlanId || user?.vipPlan || user?.plan));
}

function formatVipDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function calculateVipRemainingDays(value) {
  if (!value) return 0;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 0;
  const remainingMs = date.getTime() - Date.now();
  return remainingMs > 0 ? Math.ceil(remainingMs / 86400000) : 0;
}

function getVipPlanDisplay(user, isVi = state.lang === "vi") {
  const expiresAt = user?.vipExpiresAt || user?.premiumUntil || "";
  const remainingDays = Number.isFinite(Number(user?.vipRemainingDays))
    ? Number(user.vipRemainingDays)
    : calculateVipRemainingDays(expiresAt);
  const expired = Boolean(user?.isPremium && expiresAt && remainingDays <= 0);
  if (!isActivePremiumUser(user)) {
    return {
      badge: isVi ? "Tài khoản thường" : "普通用户",
      status: expired ? (isVi ? "Đã hết hạn" : "已过期") : (isVi ? "Chưa mở VIP" : "未开通 VIP"),
      expiry: expiresAt ? `${isVi ? "Hết hạn:" : "到期："} ${formatVipDate(expiresAt)}` : "",
      planId: "",
    };
  }

  const planId = normalizeVipPlanId(user);
  const badge = planId === "3d"
    ? (isVi ? "VIP 3 ngày" : "3天VIP")
    : planId === "30d"
      ? (isVi ? "VIP 30 ngày" : "30天VIP")
      : planId === "90d"
        ? (isVi ? "VIP 3 tháng" : "90天VIP")
        : (user?.vipPlanName && isVi ? user.vipPlanName : user?.vipPlanNameZh || "VIP");
  return {
    badge,
    status: isVi ? `Còn ${remainingDays} ngày` : `剩余 ${remainingDays} 天`,
    expiry: expiresAt ? `${isVi ? "Hết hạn:" : "到期："} ${formatVipDate(expiresAt)}` : (isVi ? "Chưa mở" : "未开通"),
    planId,
  };
}

function hasPremiumAccess() {
  if (state.user?.role === "employee") return true;
  return isActivePremiumUser(state.user);
}

function areContentLocksTrusted() {
  return state.contentLocksReady === true && state.contentLocksFailed !== true || shouldUseLocalContentLockFallback();
}

function shouldUseLocalContentLockFallback() {
  return (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") && /DATABASE_URL|Backend/i.test(String(state.contentLocksError || backendDisabledMessage()));
}

function getHskLessonFreeItemLimit(lessonId) {
  if (!Object.prototype.hasOwnProperty.call(state.hskLessonFreeItemLimits || {}, lessonId)) {
    return null;
  }
  const value = Number(state.hskLessonFreeItemLimits?.[lessonId] || 0);
  if (!Number.isFinite(value) || value <= 0) return null;
  return Math.floor(value);
}

function normalizeAccessItemType(contentType = "") {
  return contentType === "sentence" ? "sentence" : "word";
}

function parseHskLessonAccessMeta(lessonId) {
  const directMatch = String(lessonId || "").match(/^hsk([1-6])-l0?(\d+)$/i);
  if (directMatch) {
    return {
      level: Number(directMatch[1]),
      lessonNo: Number(directMatch[2]),
    };
  }
  for (const [levelKey, lessons] of Object.entries(hskLevels || {})) {
    const found = (lessons || []).find((lessonItem) => lessonItem.id === lessonId);
    if (found) {
      const levelMatch = String(levelKey).match(/HSK([1-6])/i);
      return {
        level: Number(levelMatch?.[1] || 0),
        lessonNo: Number(found.no || 0),
      };
    }
  }
  return { level: 0, lessonNo: 0 };
}

function accessRule(status, freeLimit = null) {
  return { status, freeLimit };
}

function getHskAccessRule(lessonId, contentType = "word") {
  const { level, lessonNo } = parseHskLessonAccessMeta(lessonId);
  const itemType = normalizeAccessItemType(contentType);
  if (!level || !lessonNo) return accessRule("locked", 0);
  const configured = state.hskLessonAccessRules?.[lessonId];
  if (configured) {
    if (configured.lockedForFree === true) return accessRule("locked", 0);
    const limit = itemType === "sentence"
      ? Number(configured.freeSentenceLimit || 0)
      : Number(configured.freeWordLimit || 0);
    if (limit > 0) return accessRule("partial", Math.floor(limit));
    return accessRule("open");
  }
  if (state.hskLockedLessonIds.has(String(lessonId || ""))) return accessRule("locked", 0);
  const configuredFreeLimit = getHskLessonFreeItemLimit(lessonId);
  if (configuredFreeLimit !== null) return accessRule("partial", configuredFreeLimit);

  if (level === 1 || level === 2) {
    if (lessonNo <= 2) return accessRule("open");
    if (lessonNo === 3) return accessRule("partial", itemType === "sentence" ? 4 : 6);
    return accessRule("locked", 0);
  }

  if (level >= 3 && level <= 6) {
    if (lessonNo <= 2) return accessRule("partial", itemType === "sentence" ? 2 : 6);
    return accessRule("locked", 0);
  }

  return accessRule("locked", 0);
}

function getDailyThemeAccessIndex(themeId) {
  const index = dailyThemes.findIndex((theme) => theme.id === themeId);
  if (index >= 0) return index + 1;
  const idMatch = String(themeId || "").match(/bai0?(\d+)/i);
  return Number(idMatch?.[1] || 0);
}

function getDailyThemeAccessRule(themeId, contentType = "word") {
  const configured = state.dailyThemeAccessRules?.[themeId];
  if (configured) {
    if (configured.lockedForFree === true) return accessRule("locked", 0);
    const limit = normalizeAccessItemType(contentType) === "sentence"
      ? Number(configured.freeSentenceLimit || 0)
      : Number(configured.freeWordLimit || 0);
    if (limit > 0) return accessRule("partial", Math.floor(limit));
    return accessRule("open");
  }
  const themeIndex = getDailyThemeAccessIndex(themeId);
  const itemType = normalizeAccessItemType(contentType);
  if (themeIndex === 1) return accessRule("open");
  if (themeIndex === 2) return accessRule("partial", itemType === "sentence" ? 2 : 6);
  if (themeIndex >= 3) return accessRule("locked", 0);
  return accessRule("locked", 0);
}

function combineAccessStatuses(statuses = []) {
  const safeStatuses = statuses.filter(Boolean);
  if (!safeStatuses.length) return "locked";
  if (safeStatuses.every((status) => status === "open")) return "open";
  if (safeStatuses.every((status) => status === "locked")) return "locked";
  return "partial";
}

function getHskLessonAccessStatus(lessonId) {
  if (hasPremiumAccess()) return "open";
  if (!areContentLocksTrusted()) return "locked";
  return combineAccessStatuses([
    getHskAccessRule(lessonId, "word").status,
    getHskAccessRule(lessonId, "sentence").status,
  ]);
}

function getDailyThemeAccessStatus(themeId) {
  if (hasPremiumAccess()) return "open";
  if (!areContentLocksTrusted()) return "locked";
  return combineAccessStatuses([
    getDailyThemeAccessRule(themeId, "word").status,
    getDailyThemeAccessRule(themeId, "sentence").status,
  ]);
}

function getHskContentTypeAccessStatus(lessonId, contentType) {
  if (hasPremiumAccess()) return "open";
  if (!areContentLocksTrusted()) return "locked";
  return getHskAccessRule(lessonId, contentType).status;
}

function getDailyContentTypeAccessStatus(themeId, contentType) {
  if (hasPremiumAccess()) return "open";
  if (!areContentLocksTrusted()) return "locked";
  return getDailyThemeAccessRule(themeId, contentType).status;
}

function shouldShowPartialAccessBadge(context = {}) {
  if (context.type !== "daily-theme") return true;
  const theme = context.theme || {};
  const config = context.config || {};
  const id = String(theme.id || "").trim().toLowerCase();
  const title = `${theme.vi || ""} ${theme.titleVi || ""} ${theme.lesson_title_vi || ""} ${config.titleVi || ""}`.toLowerCase();
  return id === "housing"
    || id === "renting_life"
    || id === "renting"
    || (title.includes("thuê nhà") && (title.includes("chuyển nhà") || title.includes("sinh hoạt")));
}

function accessStatusBadgeHTML(status, context = {}) {
  if (status === "partial") {
    if (!shouldShowPartialAccessBadge(context)) return "";
    return `<span class="access-rule-badge access-rule-badge--partial">${state.lang === "vi" ? "Miễn phí một phần" : "部分免费"}</span>`;
  }
  if (status === "locked") {
    return `<span class="access-rule-badge access-rule-badge--locked">${renderContentLockIconHTML("inline")} VIP</span>`;
  }
  return "";
}

function lockedAccessButtonText() {
  return state.lang === "vi" ? "Mở khóa VIP" : "解锁 VIP";
}

function isHskLessonLockedForUser(lessonId) {
  if (hasPremiumAccess()) return false;
  if (!areContentLocksTrusted()) return true;
  return getHskLessonAccessStatus(lessonId) === "locked";
}

function isDailyThemeLockedForUser(themeId) {
  if (hasPremiumAccess()) return false;
  if (!areContentLocksTrusted()) return true;
  return getDailyThemeAccessStatus(themeId) === "locked";
}

function getDailyThemeFreeItemLimit(themeId) {
  if (!Object.prototype.hasOwnProperty.call(state.dailyThemeFreeItemLimits || {}, themeId)) {
    return null;
  }
  const value = Number(state.dailyThemeFreeItemLimits?.[themeId] || 0);
  if (!Number.isFinite(value) || value <= 0) return null;
  return Math.floor(value);
}

function canAccessHskLesson(lessonId) {
  return !isHskLessonLockedForUser(lessonId);
}

function canAccessHskLessonItem(lessonId, itemIndex, contentType = state.hskContentType) {
  if (hasPremiumAccess()) return true;
  if (!areContentLocksTrusted()) return false;
  const rule = getHskAccessRule(lessonId, contentType);
  if (rule.status === "open") return true;
  if (rule.status === "locked") return false;
  const itemNo = Number(itemIndex) + 1;
  return Number.isFinite(itemNo) && itemNo <= Number(rule.freeLimit || 0);
}

function canAccessDailyTheme(themeId) {
  return !isDailyThemeLockedForUser(themeId);
}

function canAccessDailyThemeItem(themeId, itemIndex, contentType = state.dailyContentType) {
  if (hasPremiumAccess()) return true;
  if (!areContentLocksTrusted()) return false;
  const rule = getDailyThemeAccessRule(themeId, contentType);
  if (rule.status === "open") return true;
  if (rule.status === "locked") return false;
  const itemNo = Number(itemIndex) + 1;
  return Number.isFinite(itemNo) && itemNo <= Number(rule.freeLimit || 0);
}

function getStoredQuickHskLastLessonId(storageKey = HOME_QUICK_HSK_LAST_LESSON_STORAGE_KEY) {
  try {
    return localStorage.getItem(storageKey) || "";
  } catch {
    return "";
  }
}

function setStoredQuickHskLastLessonId(lessonId = "", storageKey = HOME_QUICK_HSK_LAST_LESSON_STORAGE_KEY) {
  try {
    localStorage.setItem(storageKey, lessonId);
  } catch {
    // Best-effort only; random practice still works without storage.
  }
}

function randomArrayItem(items = []) {
  if (!items.length) return null;
  return items[Math.floor(Math.random() * items.length)] || items[0] || null;
}

function getQuickHskVocabularyPracticeCandidates() {
  const premium = hasPremiumAccess();
  return Object.entries(hskLevels)
    .flatMap(([level, lessons]) => (lessons || []).flatMap((lessonItem) => {
      const wordItems = hskLessonItemsByType(lessonItem, "word");
      return wordItems
        .map((item, index) => ({
          level,
          lessonId: lessonItem.id,
          index,
          item,
        }))
        .filter((candidate) => premium || canAccessHskLessonItem(candidate.lessonId, candidate.index, "word"));
    }))
    .filter((candidate) => candidate.lessonId && candidate.item);
}

function getQuickHskSentencePracticeCandidates() {
  const premium = hasPremiumAccess();
  return Object.entries(hskLevels)
    .flatMap(([level, lessons]) => (lessons || []).flatMap((lessonItem) => {
      const sentenceItems = hskLessonItemsByType(lessonItem, "sentence");
      return sentenceItems
        .map((item, index) => ({
          level,
          lessonId: lessonItem.id,
          index,
          item,
        }))
        .filter((candidate) => premium || canAccessHskLessonItem(candidate.lessonId, candidate.index, "sentence"));
    }))
    .filter((candidate) => candidate.lessonId && candidate.item);
}

function openRandomHskVocabularyTypingPractice() {
  const candidates = getQuickHskVocabularyPracticeCandidates();
  if (!candidates.length) return false;

  const lastLessonId = getStoredQuickHskLastLessonId();
  const lessonIds = Array.from(new Set(candidates.map((candidate) => candidate.lessonId)));
  const nextLessonIds = lessonIds.length > 1
    ? lessonIds.filter((lessonId) => lessonId !== lastLessonId)
    : lessonIds;
  const lessonId = randomArrayItem(nextLessonIds) || randomArrayItem(lessonIds);
  const lessonCandidates = candidates.filter((candidate) => candidate.lessonId === lessonId);
  const selected = randomArrayItem(lessonCandidates) || randomArrayItem(candidates);
  if (!selected) return false;

  setStoredQuickHskLastLessonId(selected.lessonId);
  startPractice({
    lessonId: selected.lessonId,
    mode: "translate",
    hskContentType: "word",
    index: selected.index,
  });
  return true;
}

function openRandomHskSentenceTypingPractice() {
  const candidates = getQuickHskSentencePracticeCandidates();
  if (!candidates.length) return false;

  const lastLessonId = getStoredQuickHskLastLessonId(HOME_QUICK_HSK_SENTENCE_LAST_LESSON_STORAGE_KEY);
  const lessonIds = Array.from(new Set(candidates.map((candidate) => candidate.lessonId)));
  const nextLessonIds = lessonIds.length > 1
    ? lessonIds.filter((lessonId) => lessonId !== lastLessonId)
    : lessonIds;
  const lessonId = randomArrayItem(nextLessonIds) || randomArrayItem(lessonIds);
  const lessonCandidates = candidates.filter((candidate) => candidate.lessonId === lessonId);
  const selected = randomArrayItem(lessonCandidates) || randomArrayItem(candidates);
  if (!selected) return false;

  setStoredQuickHskLastLessonId(selected.lessonId, HOME_QUICK_HSK_SENTENCE_LAST_LESSON_STORAGE_KEY);
  startPractice({
    lessonId: selected.lessonId,
    mode: "translate",
    hskContentType: "sentence",
    index: selected.index,
  });
  return true;
}

function promptHskLessonLocked() {
  promptUpgradeLocked();
}

function promptUpgradeLocked() {
  const isVi = state.lang === "vi";
  trackEvent("paywall_shown", buildPracticeEventContext());
  showToast(isVi ? "Nội dung này yêu cầu Gói VIP." : "此内容需要 VIP。");
  showUpgradePlansModal();
}

function lockedContentCtaText() {
  const isVi = state.lang === "vi";
  return isVi ? "Gói VIP" : "VIP";
}

async function loadContentLocks() {
  state.contentLocksReady = false;
  state.contentLocksFailed = false;
  state.contentLocksError = "";
  if (BACKEND_DISABLED) {
    state.hskLessonFreeItemLimits = {};
    state.hskLessonAccessRules = {};
    state.hskLockedLessonIds = new Set();
    state.hskLevelCovers = {};
    state.dailyLockedThemeIds = new Set();
    state.dailyThemeFreeItemLimits = {};
    state.dailyThemeAccessRules = {};
    state.listeningLockedTopicIds = new Set();
    state.listeningLockedLessonIds = new Set();
    state.contentLocksFailed = true;
    state.contentLocksError = backendDisabledMessage();
    state.contentLocksLoadedAt = 0;
    return false;
  }
  try {
    const [hskData, dailyData, coverData, accessData] = await Promise.all([
      apiRequest("/api/content/hsk-locks"),
      apiRequest("/api/content/daily-locks"),
      apiRequest("/api/content/hsk-level-covers"),
      apiRequest("/api/content/access-rules"),
    ]);
    if (!Array.isArray(hskData.lessonLocks) || !Array.isArray(dailyData.themeLocks) || !Array.isArray(dailyData.lockedThemeIds)) {
      throw new Error("Invalid content lock response");
    }
    const hskAccessItems = [...(hskData.lessonLocks || []), ...(accessData.hskLessonLocks || [])]
      .filter((item) => item?.lessonId);
    const hskLimitEntries = hskAccessItems.map((item) => [
      item.lessonId,
      Math.max(0, Number(item.freeItemLimit || item.freeWordLimit || item.freeSentenceLimit || 0)),
    ]).filter(([lessonId, limit]) => lessonId && limit > 0);
    state.hskLessonFreeItemLimits = hskLimitEntries.reduce((limits, [lessonId, limit]) => {
      limits[lessonId] = Math.max(Number(limits[lessonId] || 0), Number(limit || 0));
      return limits;
    }, {});
    state.hskLessonAccessRules = Object.fromEntries(
      hskAccessItems
        .filter((item) => item.lockedForFree === true || Math.max(0, Number(item.freeItemLimit || item.freeWordLimit || item.freeSentenceLimit || 0)) > 0)
        .map((item) => [item.lessonId, {
          lockedForFree: item.lockedForFree === true,
          freeWordLimit: Math.max(0, Number(item.freeWordLimit || item.freeItemLimit || 0)),
          freeSentenceLimit: Math.max(0, Number(item.freeSentenceLimit || item.freeItemLimit || 0)),
        }]),
    );
    state.hskLevelCovers = Object.fromEntries(
      (coverData.covers || []).map((item) => [item.level, String(item.coverUrl || "").trim()]),
    );
    state.dailyThemeFreeItemLimits = Object.fromEntries(
      (dailyData.themeLocks || [])
        .map((item) => [item.themeId, Math.max(0, Number(item.freeItemLimit || 0))])
        .filter(([, limit]) => limit > 0),
    );
    state.dailyThemeAccessRules = Object.fromEntries(
      (accessData.dailyThemeLocks || []).map((item) => [item.themeId, {
        lockedForFree: item.lockedForFree === true,
        freeWordLimit: Math.max(0, Number(item.freeWordLimit || 0)),
        freeSentenceLimit: Math.max(0, Number(item.freeSentenceLimit || item.freeItemLimit || 0)),
      }]),
    );
    state.dailyLockedThemeIds = new Set(
      (dailyData.lockedThemeIds || []).filter((themeId) => !state.dailyThemeFreeItemLimits?.[themeId]),
    );
    state.hskLockedLessonIds = new Set([
      ...(hskData.lessonLocks || []).filter((item) => item.lockedForFree).map((item) => item.lessonId),
      ...(accessData.hskLessonLocks || []).filter((item) => item.lockedForFree).map((item) => item.lessonId),
    ]);
    state.listeningLockedTopicIds = new Set((accessData.listeningTopicLocks || []).filter((item) => item.lockedForFree).map((item) => item.topicId));
    state.listeningLockedLessonIds = new Set((accessData.listeningLessonLocks || []).filter((item) => item.lockedForFree).map((item) => item.lessonId));
    state.contentLocksReady = true;
    state.contentLocksFailed = false;
    state.contentLocksError = "";
    state.contentLocksLoadedAt = Date.now();
    return true;
  } catch (error) {
    state.hskLessonFreeItemLimits = {};
    state.hskLessonAccessRules = {};
    state.hskLockedLessonIds = new Set();
    state.hskLevelCovers = {};
    state.dailyLockedThemeIds = new Set();
    state.dailyThemeFreeItemLimits = {};
    state.dailyThemeAccessRules = {};
    state.listeningLockedTopicIds = new Set();
    state.listeningLockedLessonIds = new Set();
    state.contentLocksReady = false;
    state.contentLocksFailed = true;
    state.contentLocksError = error?.message || "Failed to load content locks";
    state.contentLocksLoadedAt = 0;
    return false;
  }
}

async function refreshContentLocksIfStale(maxAgeMs = 10000, options = {}) {
  if (BACKEND_DISABLED) return false;
  const force = options.force === true;
  const loadedAt = Number(state.contentLocksLoadedAt || 0);
  const isFresh = state.contentLocksReady === true && loadedAt > 0 && Date.now() - loadedAt < maxAgeMs;
  if (!force && isFresh) return true;
  if (!state.contentLocksLoadingPromise) {
    state.contentLocksLoadingPromise = loadContentLocks().finally(() => {
      state.contentLocksLoadingPromise = null;
    });
  }
  const ok = await state.contentLocksLoadingPromise;
  if (options.rerender === true) {
    if (state.screen === "course") renderCourse();
    if (state.screen === "listening") renderListening({ silentCatalogLoad: true });
    if (state.screen === "home") renderHome();
  }
  return ok;
}

function refreshContentLocksAfterFastVipPrompt() {
  void refreshContentLocksIfStale(10000, { rerender: true });
}

function showFastVipPromptIfKnownLocked(isLocked, promptFn = promptUpgradeLocked) {
  if (!areContentLocksTrusted() || !isLocked) return false;
  promptFn();
  refreshContentLocksAfterFastVipPrompt();
  return true;
}

async function loadHskLessonLocks() {
  return loadContentLocks();
}

async function loadListeningAccessRules() {
  if (BACKEND_DISABLED) return false;
  try {
    const data = await apiRequest("/api/content/access-rules");
    state.listeningLockedTopicIds = new Set((data.listeningTopicLocks || []).filter((item) => item.lockedForFree).map((item) => item.topicId));
    state.listeningLockedLessonIds = new Set((data.listeningLessonLocks || []).filter((item) => item.lockedForFree).map((item) => item.lessonId));
    if (state.screen === "listening") renderListening();
    return true;
  } catch {
    return false;
  }
}

async function loadAllContentAccessRules() {
  await loadContentLocks();
  await loadListeningAccessRules();
}

function isListeningContentLocked(topicId = "", lessonId = "") {
  if (hasPremiumAccess() || isAdminUser()) return false;
  return state.listeningLockedTopicIds.has(String(topicId || "")) || state.listeningLockedLessonIds.has(String(lessonId || ""));
}

function showListeningLockedMessage() {
  showUpgradePlansModal();
  return;
  showToast(state.lang === "vi" ? "Nội dung này dành cho tài khoản VIP." : "此内容仅限 VIP 账户。 ");
}

function getHskLessonsCatalog() {
  return Object.keys(hskLevels).flatMap((level) =>
    hskLevels[level].map((lesson) => ({
      lessonId: lesson.id,
      level,
      lessonNo: lesson.no,
      titleVi: lesson.titleVi || lesson.title || "",
    })),
  );
}

function getDailyThemesCatalog() {
  return dailyThemes.map((theme, index) => ({
    themeId: theme.id,
    sortOrder: index + 1,
    titleVi: theme.vi || "",
  }));
}

function getAdminLocalizedCatalogTitle(item = {}, isVi = state.lang === "vi", fallback = "") {
  const titleVi = String(item.titleVi || item.title || "").trim();
  const titleZh = String(item.titleZh || item.title_zh || "").trim();
  const safeFallback = String(fallback || item.topicId || item.lessonId || item.id || "").trim();
  return isVi
    ? (titleVi || titleZh || safeFallback)
    : (titleZh || titleVi || safeFallback);
}

function getListeningLocksCatalog() {
  if (Array.isArray(state.adminListeningCatalogTopics) && state.adminListeningCatalogTopics.length > 0) {
    const topics = state.adminListeningCatalogTopics.map((topic, topicIndex) => ({
      topicId: topic.topicId,
      sortOrder: Number(topic.sortOrder || topicIndex + 1),
      titleVi: topic.titleVi || topic.title || topic.topicId || "",
      titleZh: topic.titleZh || topic.title || topic.titleVi || topic.topicId || "",
    }));
    const topicOrder = Object.fromEntries(topics.map((topic, index) => [topic.topicId, index + 1]));
    const lessons = (state.adminListeningCatalogLessons || []).map((lesson, lessonIndex) => ({
      lessonId: lesson.lessonId,
      topicId: lesson.topicId || "",
      sortOrder: Number(lesson.sortOrder || lessonIndex + 1),
      titleVi: lesson.titleVi || lesson.title || lesson.lessonId || "",
      titleZh: lesson.titleZh || lesson.title || lesson.titleVi || lesson.lessonId || "",
    })).sort((a, b) => (topicOrder[a.topicId] || 9999) - (topicOrder[b.topicId] || 9999) || a.sortOrder - b.sortOrder || a.lessonId.localeCompare(b.lessonId));
    return { topics, lessons };
  }

  const topics = listeningCatalogTopics.map((topic, topicIndex) => ({
    topicId: topic.id,
    sortOrder: topicIndex + 1,
    titleVi: topic.label_vi || topic.label_zh || topic.id || "",
    titleZh: topic.label_zh || topic.label_vi || topic.id || "",
    lessons: (topic.lessons || []).map((lesson, lessonIndex) => ({
      lessonId: lesson.id,
      topicId: topic.id,
      sortOrder: lessonIndex + 1,
      titleVi: lesson.title_vi || lesson.title_zh || lesson.title || lesson.id || "",
      titleZh: lesson.title_zh || lesson.title_vi || lesson.title || lesson.id || "",
    })),
  }));
  return { topics, lessons: topics.flatMap((topic) => topic.lessons) };
}

function buildAdminContentLocksMap(locks = []) {
  const map = {};
  locks.forEach((item) => {
    map[item.lessonId] = {
      lockedForFree: item.lockedForFree === true,
      freeItemLimit: Math.max(0, Number(item.freeItemLimit || 0)),
      freeWordLimit: Math.max(0, Number(item.freeWordLimit || item.freeItemLimit || 0)),
      freeSentenceLimit: Math.max(0, Number(item.freeSentenceLimit || item.freeItemLimit || 0)),
    };
  });
  return map;
}

function parseAdminFreeItemLimit(value) {
  const parsed = Math.floor(Number(value || 0));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function syncAdminHskContentLocksFromDOM(root = document) {
  root.querySelectorAll("[data-admin-content-limit], [data-admin-content-word-limit], [data-admin-content-sentence-limit]").forEach((input) => {
    if (!input.matches("input[type='number']")) return;
    const lessonId = input.dataset.adminContentLimit || input.dataset.adminContentWordLimit || input.dataset.adminContentSentenceLimit;
    if (!lessonId) return;
    const prev = state.adminContentLocks[lessonId] || { lockedForFree: false, freeItemLimit: 0, freeWordLimit: 0, freeSentenceLimit: 0 };
    state.adminContentLocks[lessonId] = {
      ...prev,
      freeItemLimit: input.dataset.adminContentLimit ? parseAdminFreeItemLimit(input.value) : prev.freeItemLimit,
      freeWordLimit: input.dataset.adminContentWordLimit ? parseAdminFreeItemLimit(input.value) : prev.freeWordLimit,
      freeSentenceLimit: input.dataset.adminContentSentenceLimit ? parseAdminFreeItemLimit(input.value) : prev.freeSentenceLimit,
      lockedForFree: prev.lockedForFree === true,
    };
  });
  root.querySelectorAll("[data-admin-content-lock]").forEach((input) => {
    const lessonId = input.dataset.adminContentLock;
    if (!lessonId) return;
    state.adminContentLocks[lessonId] = {
      ...(state.adminContentLocks[lessonId] || { freeItemLimit: 0 }),
      lockedForFree: input.checked === true,
    };
  });
}

function syncAdminDailyContentLocksFromDOM(root = document) {
  root.querySelectorAll("[data-admin-content-daily-lock], [data-admin-content-daily-limit], [data-admin-content-daily-word-limit], [data-admin-content-daily-sentence-limit]").forEach((input) => {
    if (!input.matches("input[type='number'], input[type='checkbox']")) return;
    const themeId = input.dataset.adminContentDailyLock || input.dataset.adminContentDailyLimit || input.dataset.adminContentDailyWordLimit || input.dataset.adminContentDailySentenceLimit;
    if (!themeId) return;
    const prev = state.adminContentDailyLocks[themeId] || { lockedForFree: false, freeItemLimit: 0, freeWordLimit: 0, freeSentenceLimit: 0 };
    state.adminContentDailyLocks[themeId] = {
      ...prev,
      lockedForFree: input.dataset.adminContentDailyLock ? input.checked === true : prev.lockedForFree === true,
      freeItemLimit: input.dataset.adminContentDailyLimit ? parseAdminFreeItemLimit(input.value) : prev.freeItemLimit,
      freeWordLimit: input.dataset.adminContentDailyWordLimit ? parseAdminFreeItemLimit(input.value) : prev.freeWordLimit,
      freeSentenceLimit: input.dataset.adminContentDailySentenceLimit ? parseAdminFreeItemLimit(input.value) : prev.freeSentenceLimit,
    };
  });
}

function updateAdminDailyLockConfig(themeId, patch = {}) {
  const prev = state.adminContentDailyLocks[themeId] || { lockedForFree: false, freeItemLimit: 0, freeWordLimit: 0, freeSentenceLimit: 0 };
  state.adminContentDailyLocks[themeId] = {
    lockedForFree: patch.lockedForFree !== undefined ? patch.lockedForFree === true : prev.lockedForFree === true,
    freeItemLimit: parseAdminFreeItemLimit(
      patch.freeItemLimit !== undefined ? patch.freeItemLimit : prev.freeItemLimit,
    ),
    freeWordLimit: parseAdminFreeItemLimit(
      patch.freeWordLimit !== undefined ? patch.freeWordLimit : prev.freeWordLimit,
    ),
    freeSentenceLimit: parseAdminFreeItemLimit(
      patch.freeSentenceLimit !== undefined ? patch.freeSentenceLimit : prev.freeSentenceLimit,
    ),
  };
}

function updateAdminHskLockConfig(lessonId, patch = {}) {
  const prev = state.adminContentLocks[lessonId] || { lockedForFree: false, freeItemLimit: 0, freeWordLimit: 0, freeSentenceLimit: 0 };
  state.adminContentLocks[lessonId] = {
    lockedForFree: patch.lockedForFree !== undefined ? patch.lockedForFree === true : prev.lockedForFree === true,
    freeItemLimit: parseAdminFreeItemLimit(
      patch.freeItemLimit !== undefined ? patch.freeItemLimit : prev.freeItemLimit,
    ),
    freeWordLimit: parseAdminFreeItemLimit(
      patch.freeWordLimit !== undefined ? patch.freeWordLimit : prev.freeWordLimit,
    ),
    freeSentenceLimit: parseAdminFreeItemLimit(
      patch.freeSentenceLimit !== undefined ? patch.freeSentenceLimit : prev.freeSentenceLimit,
    ),
  };
}

const HSK_LEVEL_IDS = ["HSK1", "HSK2", "HSK3", "HSK4", "HSK5", "HSK6"];
const HSK_LEVEL_DEFAULT_COVERS = {
  HSK1: "assets/hsk-level-card-bg.png",
  HSK2: "assets/hsk2-card-bg.png",
  HSK3: "assets/hsk3-card-bg.png",
  HSK4: "assets/hsk4-card-bg.png",
  HSK5: "assets/hsk5-card-bg.png",
  HSK6: "assets/hsk6-card-bg.png",
};
const DEFAULT_HSK_LEVEL_COVER = HSK_LEVEL_DEFAULT_COVERS.HSK1;
const MAX_HSK_LEVEL_COVER_MB = 5;
const MAX_HSK_LEVEL_COVER_BYTES = MAX_HSK_LEVEL_COVER_MB * 1024 * 1024;
const MAX_HSK_LEVEL_COVER_DATA_URL_CHARS = Math.ceil(MAX_HSK_LEVEL_COVER_BYTES * 1.4) + 256;
const MAX_ACCOUNT_AVATAR_SOURCE_BYTES = 5 * 1024 * 1024;
const ACCOUNT_AVATAR_SIZE = 320;
const ACCOUNT_DEFAULT_AVATAR = "assets/review_user_1.png";

function getDefaultHskLevelCoverUrl(level) {
  return HSK_LEVEL_DEFAULT_COVERS[level] || DEFAULT_HSK_LEVEL_COVER;
}

function buildAdminHskLevelCoversMap(covers = []) {
  const map = {};
  HSK_LEVEL_IDS.forEach((level) => {
    map[level] = "";
  });
  covers.forEach((item) => {
    if (item?.level) map[item.level] = String(item.coverUrl || "").trim();
  });
  return map;
}

function getHskLevelCoverUrl(level) {
  const url = String(state.hskLevelCovers?.[level] || "").trim();
  return url || getDefaultHskLevelCoverUrl(level);
}

function getAdminHskLevelCoverPreview(level) {
  const url = String(state.adminHskLevelCovers?.[level] || "").trim();
  return url || getDefaultHskLevelCoverUrl(level);
}

function syncAdminHskLevelCoversFromDOM(root = document) {
  root.querySelectorAll("[data-admin-hsk-cover-url]").forEach((input) => {
    const level = input.dataset.adminHskCoverUrl;
    if (!level) return;
    state.adminHskLevelCovers[level] = String(input.value || "").trim();
  });
}

function updateAdminHskLevelCoverPreview(level) {
  const preview = document.querySelector(`[data-admin-cover-preview="${level}"]`);
  if (preview) preview.src = getAdminHskLevelCoverPreview(level);
}

function buildAdminContentDailyLocksMap(locks = []) {
  const map = {};
  locks.forEach((item) => {
    map[item.themeId] = {
      lockedForFree: item.lockedForFree === true,
      freeItemLimit: Math.max(0, Number(item.freeItemLimit || 0)),
      freeWordLimit: Math.max(0, Number(item.freeWordLimit || 0)),
      freeSentenceLimit: Math.max(0, Number(item.freeSentenceLimit || item.freeItemLimit || 0)),
    };
  });
  return map;
}

async function loadAdminContentLocks() {
  const isVi = state.lang === "vi";
  if (!shouldShowAdminTab("content")) {
    state.adminContentStatus = isVi ? "Vui lòng đăng nhập bằng tài khoản admin." : "请使用管理员账户登录。";
    state.adminContentLocks = {};
    state.adminContentDailyLocks = {};
    state.adminListeningTopicLocks = {};
    state.adminListeningLessonLocks = {};
    state.adminListeningCatalogTopics = [];
    state.adminListeningCatalogLessons = [];
    state.adminHskLevelCovers = {};
    renderAdmin();
    return;
  }

  state.adminContentStatus = isVi ? "Đang tải cấu hình nội dung..." : "正在加载内容配置...";
  renderAdmin();
  try {
    await ensureHighFrequencyTopicsLoaded({ silent: true });
    if (state.adminTab === "content") {
      await Promise.allSettled(HSK_LEVEL_IDS.map((level) => ensureHskLevelContent(level)));
    }
    const headers = { "X-Admin-User-Id": getAdminUserId() };
    const [hskData, dailyData, coverData, listeningData] = await Promise.all([
      apiRequest("/api/admin/content/hsk-locks", { headers }),
      apiRequest("/api/admin/content/daily-locks", { headers }),
      apiRequest("/api/admin/content/hsk-level-covers", { headers }),
      apiRequest("/api/admin/content/listening-locks", { headers }),
    ]);
    state.adminContentLocks = buildAdminContentLocksMap(hskData.locks || []);
    state.adminContentDailyLocks = buildAdminContentDailyLocksMap(dailyData.locks || []);
    state.adminListeningTopicLocks = buildAdminListeningLocksMap(listeningData.topics || [], "topicId");
    state.adminListeningLessonLocks = buildAdminListeningLocksMap(listeningData.lessons || [], "lessonId");
    state.adminListeningCatalogTopics = listeningData.topics || [];
    state.adminListeningCatalogLessons = listeningData.lessons || [];
    state.adminHskLevelCovers = buildAdminHskLevelCoversMap(coverData.covers || []);
    const lockedHsk = (hskData.locks || []).filter((item) => item.lockedForFree || Number(item.freeItemLimit || 0) > 0).length;
    const lockedDaily = (dailyData.locks || []).filter((item) => item.lockedForFree || Number(item.freeItemLimit || 0) > 0).length;
    const lockedListening = (listeningData.topics || []).filter((item) => item.lockedForFree).length + (listeningData.lessons || []).filter((item) => item.lockedForFree).length;
    state.adminContentStatus = isVi
      ? `Đã tải ${lockedHsk} bài HSK, ${lockedDaily} chủ đề thông dụng và ${lockedListening} mục luyện nghe đang khóa.`
      : `已加载 ${lockedHsk} 个 HSK 课程、${lockedDaily} 个高频主题和 ${lockedListening} 个听力锁定项。`;
  } catch (error) {
    state.adminContentLocks = {};
    state.adminContentDailyLocks = {};
    state.adminListeningTopicLocks = {};
    state.adminListeningLessonLocks = {};
    state.adminListeningCatalogTopics = [];
    state.adminListeningCatalogLessons = [];
    state.adminHskLevelCovers = {};
    state.adminContentStatus = error.message;
  }
  renderAdmin();
}

function renderAdminHskLevelCoversHTML(isVi) {
  const cards = hskLevelCards.map((card) => {
    const coverUrl = String(state.adminHskLevelCovers?.[card.level] || "").trim();
    const previewUrl = getAdminHskLevelCoverPreview(card.level);
    return `
      <div class="admin-hsk-cover-card">
        <div class="admin-hsk-cover-preview">
          <img data-admin-cover-preview="${escapeAttr(card.level)}" src="${escapeAttr(previewUrl)}" alt="" />
        </div>
        <div class="admin-hsk-cover-meta">
          <strong>${escapeHtml(card.level)}</strong>
          <span>${escapeHtml(isVi ? card.vi : card.zh)}</span>
        </div>
        <label class="admin-hsk-cover-label">${isVi ? "URL ảnh bìa" : "封面 URL"}</label>
        <input
          class="admin-hsk-cover-url"
          type="text"
          data-admin-hsk-cover-url="${escapeAttr(card.level)}"
          value="${escapeAttr(coverUrl)}"
          placeholder="${escapeAttr(getDefaultHskLevelCoverUrl(card.level))}"
        />
        <label class="admin-hsk-cover-file-btn">
          <input type="file" accept="image/*" data-admin-hsk-cover-file="${escapeAttr(card.level)}" hidden />
          ${isVi ? "Chọn ảnh từ máy" : "从本机选择图片"}
        </label>
        <button class="admin-hsk-cover-reset" type="button" data-admin-hsk-cover-reset="${escapeAttr(card.level)}">
          ${isVi ? "Dùng ảnh mặc định" : "使用默认图"}
        </button>
      </div>
    `;
  }).join("");

  return `
    <p class="admin-content-subtitle">${isVi
      ? "Mỗi cấp HSK có thể đặt ảnh bìa riêng cho card chọn cấp độ. Nhập đường dẫn (ví dụ assets/hsk1-cover.png) hoặc chọn ảnh từ máy, rồi bấm Lưu ảnh bìa."
      : "每个 HSK 等级可单独设置封面。输入路径或选择本地图片后点击保存封面。"}</p>
    <div class="admin-hsk-cover-grid">${cards}</div>
  `;
}

function renderAdminContentHskLocksSectionHTML(isVi) {
  const level = state.adminContentLevel || "HSK2";
  const locksMap = state.adminContentLocks || {};
  const lessons = hskLevels[level] || [];
  const levelTabs = Object.keys(hskLevels).map((levelKey) => `
    <button class="admin-content-level-btn ${levelKey === level ? "active" : ""}" type="button" data-admin-content-level="${levelKey}">
      ${levelKey}
    </button>
  `).join("");
  const lockedInLevel = lessons.filter((lesson) => locksMap[lesson.id]?.lockedForFree === true || Math.max(Number(locksMap[lesson.id]?.freeItemLimit || 0), Number(locksMap[lesson.id]?.freeWordLimit || 0), Number(locksMap[lesson.id]?.freeSentenceLimit || 0)) > 0).length;
  const rows = lessons.map((lesson) => {
    const freeWordLimit = Math.max(0, Number(locksMap[lesson.id]?.freeWordLimit || locksMap[lesson.id]?.freeItemLimit || 0));
    const freeSentenceLimit = Math.max(0, Number(locksMap[lesson.id]?.freeSentenceLimit || locksMap[lesson.id]?.freeItemLimit || 0));
    const lockedForFree = locksMap[lesson.id]?.lockedForFree === true;
    return `
      <tr>
        <td>${lesson.no}</td>
        <td><code>${escapeAttr(lesson.id)}</code></td>
        <td>${escapeAttr(isVi ? (lesson.titleVi || lesson.title) : (lesson.titleZh || lesson.title))}</td>
        <td>
          <label class="admin-lock-toggle">
            <input type="checkbox" data-admin-content-lock="${escapeAttr(lesson.id)}" ${lockedForFree ? "checked" : ""} />
            Khóa bài
          </label>
        </td>
        <td>
          <input
            class="admin-content-limit-input"
            type="number"
            min="0"
            step="1"
            placeholder="${isVi ? "Miá»…n phÃ­ Ä‘áº¿n tá»«" : "å…è´¹åˆ°è¯"}"
            data-admin-content-word-limit="${escapeAttr(lesson.id)}"
            value="${freeWordLimit > 0 ? freeWordLimit : ""}"
          />
        </td>
        <td>
          <input
            class="admin-content-limit-input"
            type="number"
            min="0"
            step="1"
            placeholder="${isVi ? "0 = không giới hạn" : "0 = 不限"}"
            data-admin-content-sentence-limit="${escapeAttr(lesson.id)}"
            value="${freeSentenceLimit > 0 ? freeSentenceLimit : ""}"
          />
        </td>
      </tr>
    `;
  }).join("");

  return `
    <p class="admin-content-subtitle">${isVi
      ? `Nhập số thứ tự câu cuối cùng tài khoản Free được làm (ví dụ 8 = Free làm đến hết câu 8, bấm Tiếp sang câu 9 sẽ bị chặn). Để trống hoặc nhập 0 = không giới hạn. (${lockedInLevel}/${lessons.length} bài đang giới hạn tại ${level})`
      : `输入 Free 用户可做到第几题（例如 8 = 做到第 8 题，点下一题会拦截）。留空或 0 = 不限。（${level}：${lockedInLevel}/${lessons.length}）`}</p>
    <div class="admin-content-level-tabs">${levelTabs}</div>
    <div class="admin-table-wrap">
      <table class="admin-users-table admin-content-table">
        <thead>
          <tr>
            <th>${isVi ? "Bài" : "课"}</th>
            <th>ID</th>
            <th>${isVi ? "Tiêu đề" : "标题"}</th>
            <th>${isVi ? "Khóa" : "锁定"}</th>
            <th>${isVi ? "Miễn phí đến từ" : "免费到词"}</th>
            <th>${isVi ? "Miễn phí đến câu" : "免费到句"}</th>
          </tr>
        </thead>
        <tbody>
          ${rows || `<tr><td colspan="6" class="admin-empty">${isVi ? "Không có bài học." : "暂无课程。"}</td></tr>`}
        </tbody>
      </table>
    </div>
    <div class="admin-content-actions">
      <button id="adminLockAllContentBtn" type="button">${isVi ? "Giới hạn tất cả đến từ/câu 8" : "本等级全部限到第 8 项"}</button>
      <button id="adminUnlockAllContentBtn" type="button">${isVi ? "Bỏ giới hạn cấp này" : "取消本等级限制"}</button>
    </div>
  `;
}

function renderAdminContentHskSectionHTML(isVi) {
  return renderAdminContentHskLocksSectionHTML(isVi);
  const panel = state.adminContentHskPanel || "locks";
  const panelTabs = `
    <div class="admin-content-hsk-tabs">
      <button class="admin-content-hsk-tab ${panel === "locks" ? "active" : ""}" type="button" data-admin-content-hsk-panel="locks">
        ${isVi ? "Giới hạn Free" : "Free 限制"}
      </button>
      <button class="admin-content-hsk-tab ${panel === "covers" ? "active" : ""}" type="button" data-admin-content-hsk-panel="covers">
        ${isVi ? "Ảnh bìa cấp độ" : "等级封面"}
      </button>
    </div>
  `;
  return `${panelTabs}${panel === "covers" ? renderAdminHskLevelCoversHTML(isVi) : renderAdminContentHskLocksSectionHTML(isVi)}`;
}

function renderAdminContentDailySectionHTML(isVi) {
  const locksMap = state.adminContentDailyLocks || {};
  const lockedCount = dailyThemes.filter((theme) => locksMap[theme.id]?.lockedForFree === true || Math.max(Number(locksMap[theme.id]?.freeWordLimit || 0), Number(locksMap[theme.id]?.freeSentenceLimit || 0), Number(locksMap[theme.id]?.freeItemLimit || 0)) > 0).length;
  const rows = dailyThemes.map((theme, index) => {
    const lockConfig = locksMap[theme.id] || { lockedForFree: false, freeItemLimit: 0, freeWordLimit: 0, freeSentenceLimit: 0 };
    const freeWordLimit = Math.max(0, Number(lockConfig.freeWordLimit || lockConfig.freeItemLimit || 0));
    const freeSentenceLimit = Math.max(0, Number(lockConfig.freeSentenceLimit || lockConfig.freeItemLimit || 0));
    const locked = lockConfig.lockedForFree === true;
    const cardMeta = getDailyThemeCardMeta(theme);
    return `
      <tr>
        <td>${index + 1}</td>
        <td><code>${escapeAttr(theme.id)}</code></td>
        <td>
          <label class="admin-lock-toggle">
            <input type="checkbox" data-admin-content-daily-lock="${escapeAttr(theme.id)}" ${locked ? "checked" : ""} />
            ${isVi ? "Khóa chủ đề" : "锁定主题"}
          </label>
        </td>
        <td>${escapeAttr(isVi ? cardMeta.title : (theme.zh || cardMeta.title))}</td>
        <td>
          <input
            class="admin-content-limit-input"
            type="number"
            min="0"
            step="1"
            placeholder="${isVi ? "Tá»«" : "è¯"}"
            value="${freeWordLimit > 0 ? freeWordLimit : ""}"
            data-admin-content-daily-word-limit="${escapeAttr(theme.id)}"
          />
        </td>
        <td>
          <input
            class="admin-content-limit-input"
            type="number"
            min="0"
            step="1"
            placeholder="${isVi ? "VD: 8" : "例：8"}"
            value="${freeSentenceLimit > 0 ? freeSentenceLimit : ""}"
            data-admin-content-daily-sentence-limit="${escapeAttr(theme.id)}"
          />
        </td>
      </tr>
    `;
  }).join("");

  return `
    <p class="admin-content-subtitle">${isVi
      ? `Nhập số thứ tự câu cuối cùng khách chưa đăng nhập và tài khoản Free được làm trong từng chủ đề giao tiếp. Ví dụ 6 = được học đến hết câu 6, sang câu 7 sẽ bị chặn. Để trống hoặc nhập 0 = không giới hạn. (${lockedCount}/${dailyThemes.length} chủ đề đang giới hạn hoặc khóa)`
      : `输入 Free 用户在每个交际主题中可做到第几题。例如 6 = 可做到第 6 题，第 7 题会被拦截。留空或 0 = 不限。（${lockedCount}/${dailyThemes.length}）`}</p>
    <div class="admin-table-wrap">
      <table class="admin-users-table admin-content-table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>${isVi ? "Khóa chủ đề" : "锁定主题"}</th>
            <th>${isVi ? "Chủ đề" : "主题"}</th>
            <th>${isVi ? "Miễn phí đến từ" : "免费到词"}</th>
            <th>${isVi ? "Miễn phí đến câu" : "免费到句"}</th>
          </tr>
        </thead>
        <tbody>
          ${rows || `<tr><td colspan="6" class="admin-empty">${isVi ? "Không có chủ đề." : "暂无主题。"}</td></tr>`}
        </tbody>
      </table>
    </div>
    <div class="admin-content-actions">
      <button id="adminLockAllContentBtn" type="button">${isVi ? "Giới hạn tất cả đến câu 8" : "全部限到第 8 题"}</button>
      <button id="adminUnlockAllContentBtn" type="button">${isVi ? "Bỏ giới hạn tất cả chủ đề" : "取消全部限制"}</button>
    </div>
  `;
}

function renderAdminContentListeningSectionHTML(isVi) {
  const catalog = getListeningLocksCatalog();
  const selectedTopic = catalog.topics.find((topic) => topic.topicId === state.adminListeningSelectedTopicId) || null;
  const lockedTopics = catalog.topics.filter((topic) => state.adminListeningTopicLocks[topic.topicId]).length;
  const lockedLessons = catalog.lessons.filter((lesson) => state.adminListeningLessonLocks[lesson.lessonId]).length;
  const topicRows = catalog.topics.map((topic) => {
    const topicTitle = getAdminLocalizedCatalogTitle(topic, isVi, topic.topicId);
    return `
      <tr data-admin-listening-topic-select="${escapeAttr(topic.topicId)}"><td><code>${escapeAttr(topic.topicId)}</code></td><td>${escapeHtml(topicTitle)}</td><td><label class="admin-lock-toggle"><input type="checkbox" data-admin-listening-topic-lock="${escapeAttr(topic.topicId)}" ${state.adminListeningTopicLocks[topic.topicId] ? "checked" : ""} /> ${isVi ? "Khóa chủ đề" : "锁定主题"}</label></td></tr>
    `;
  }).join("");
  const lessonRows = catalog.lessons.filter((lesson) => !selectedTopic || lesson.topicId === selectedTopic.topicId).map((lesson) => {
    const topic = catalog.topics.find((item) => item.topicId === lesson.topicId) || { topicId: lesson.topicId };
    const topicTitle = getAdminLocalizedCatalogTitle(topic, isVi, lesson.topicId);
    const lessonTitle = getAdminLocalizedCatalogTitle(lesson, isVi, lesson.lessonId);
    return `
      <tr><td><code>${escapeAttr(lesson.lessonId)}</code></td><td>${escapeHtml(topicTitle)}</td><td>${escapeHtml(lessonTitle)}</td><td><label class="admin-lock-toggle"><input type="checkbox" data-admin-listening-lesson-lock="${escapeAttr(lesson.lessonId)}" ${state.adminListeningLessonLocks[lesson.lessonId] ? "checked" : ""} /> ${isVi ? "Khóa bài" : "锁定课程"}</label></td></tr>
    `;
  }).join("");
  const selectedTopicTitle = selectedTopic ? getAdminLocalizedCatalogTitle(selectedTopic, isVi, selectedTopic.topicId) : "";
  return `
    <p class="admin-content-subtitle">${isVi ? `Khóa theo chủ đề hoặc từng bài nghe. (${lockedTopics} chủ đề, ${lockedLessons} bài đang khóa)` : `可按听力主题或单独课程锁定。（${lockedTopics} 个主题，${lockedLessons} 节课程已锁定）`}</p>
    ${selectedTopic ? `<button type="button" class="admin-content-topic-back" data-admin-listening-topic-back>‹ ${isVi ? "Quay lại danh sách chủ đề" : "返回主题列表"}</button><p class="admin-content-subtitle"><strong>${escapeHtml(selectedTopicTitle)}</strong> · ${isVi ? "Danh sách bài nghe trong chủ đề" : "主题内的听力课程"}</p>` : ""}
    <div class="admin-content-lock-grid">
      <div class="admin-content-lock-card"><h3>${isVi ? "Khóa chủ đề Luyện nghe" : "锁定听力主题"}</h3><div class="admin-table-wrap"><table class="admin-users-table admin-content-table"><thead><tr><th>ID</th><th>${isVi ? "Chủ đề" : "主题"}</th><th>${isVi ? "Trạng thái" : "状态"}</th></tr></thead><tbody>${topicRows || `<tr><td colspan="3" class="admin-empty">${isVi ? "Chưa có chủ đề nghe." : "暂无听力主题。"}</td></tr>`}</tbody></table></div></div>
      <div class="admin-content-lock-card"><h3>${isVi ? "Khóa từng bài nghe" : "锁定单独听力课程"}</h3><div class="admin-table-wrap"><table class="admin-users-table admin-content-table"><thead><tr><th>ID</th><th>${isVi ? "Chủ đề" : "主题"}</th><th>${isVi ? "Bài học" : "课程"}</th><th>${isVi ? "Trạng thái" : "状态"}</th></tr></thead><tbody>${lessonRows || `<tr><td colspan="4" class="admin-empty">${isVi ? "Chưa có bài nghe." : "暂无听力课程。"}</td></tr>`}</tbody></table></div></div>
    </div>
  `;
}

function renderAdminContentPanelHTML() {
  const isVi = state.lang === "vi";
  const contentModule = state.adminContentModule || "hsk";
  const hskPanel = "locks";
  const moduleTabs = `
    <button class="admin-content-module-btn ${contentModule === "hsk" ? "active" : ""}" type="button" data-admin-content-module="hsk">
      ${isVi ? "Khóa HSK" : "HSK 课程"}
    </button>
    <button class="admin-content-module-btn ${contentModule === "daily" ? "active" : ""}" type="button" data-admin-content-module="daily">
      ${isVi ? "Tiếng Trung thông dụng" : "高频汉语"}
    </button>
    <button class="admin-content-module-btn ${contentModule === "listening" ? "active" : ""}" type="button" data-admin-content-module="listening">
      ${isVi ? "Luyện nghe" : "听力"}
    </button>
  `;
  const saveBtn = contentModule === "hsk" && hskPanel === "covers"
    ? `<button id="adminSaveHskLevelCoversBtn" class="admin-add-user" type="button">${isVi ? "Lưu ảnh bìa" : "保存封面"}</button>`
    : `<button id="adminSaveContentLocksBtn" class="admin-add-user" type="button">${isVi ? "Lưu cấu hình" : "保存配置"}</button>`;

  return `
    <section class="admin-content-panel">
      <div class="admin-content-header">
        <div>
          <h2>${contentModule === "hsk" && hskPanel === "covers"
      ? (isVi ? "Ảnh bìa cấp độ HSK" : "HSK 等级封面")
      : (isVi ? "Khóa nội dung cho gói Free" : "为 Free 套餐锁定内容")}</h2>
          <p>${contentModule === "hsk" && hskPanel === "covers"
      ? (isVi
        ? "Tùy chỉnh ảnh nền cho từng card HSK1–HSK6 trên màn hình chọn cấp độ."
        : "自定义 HSK1–HSK6 等级卡片的封面背景。")
      : (isVi
        ? "Chọn bài HSK hoặc chủ đề giao tiếp sẽ bị khóa với khách chưa đăng nhập và tài khoản gói Free. Người dùng Pro và Admin vẫn truy cập đầy đủ."
        : "选择要对未登录用户和 Free 用户锁定的 HSK 课程或交际主题。Pro 和管理员仍可访问全部。")}</p>
        </div>
        ${saveBtn}
      </div>
      <p class="admin-content-status">${escapeAttr(state.adminContentStatus || "")}</p>
      <div class="admin-content-module-tabs">${moduleTabs}</div>
      ${contentModule === "daily" ? renderAdminContentDailySectionHTML(isVi) : contentModule === "listening" ? renderAdminContentListeningSectionHTML(isVi) : renderAdminContentHskSectionHTML(isVi)}
    </section>
  `;
}

function isAdminCtvUser(user) {
  return ["ctv", "sales"].includes(normalizeAdminRole(user?.role));
}

function normalizeAdminCtvRef(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 64);
}

function buildAdminListeningLocksMap(locks = [], key) {
  return Object.fromEntries((locks || []).map((item) => [item[key], item.lockedForFree === true]));
}

function getAdminCtvReferredUsers(ctv) {
  const ref = getAdminCtvGeneratedRef(ctv);
  if (!ref) return [];
  const ctvIdentity = String(ctv?.id || ctv?.email || "");
  return (state.adminUsers || []).filter((candidate) => {
    const candidateRef = normalizeAdminCtvRef(candidate.ref || candidate.referralRef);
    const candidateIdentity = String(candidate.id || candidate.email || "");
    return isAdminEndUser(candidate) && candidateRef === ref && candidateIdentity !== ctvIdentity;
  });
}

function getAdminCtvUserStats(ctv) {
  const users = ctv ? getAdminCtvReferredUsers(ctv) : [];
  const vipUsers = users.filter(isActivePremiumUser);
  const regularUsers = users.filter((user) => !isActivePremiumUser(user));
  return {
    users,
    vipUsers,
    regularUsers,
    total: users.length,
    vip: vipUsers.length,
    regular: regularUsers.length,
    sourceBreakdown: buildUserSourceCounts(users),
  };
}

function getAdminCtvRows() {
  return (state.adminUsers || [])
    .filter(isAdminCtvUser)
    .map((user, index) => {
      const row = {
        id: user.id || user.email || `ctv-${index + 1}`,
        name: user.fullName || user.name || user.email || "CTV",
        email: user.email || "",
        phone: user.phone || user.phoneNumber || user.mobile || "",
        ref: normalizeAdminCtvRef(user.ref || user.referralRef),
        commission: Number(user.commission || user.totalCommission || user.commissionTotal || 0),
        status: user.isActive === false ? "paused" : "active",
        verified: user.emailVerified === true || user.isVerified === true,
        avatar: user.avatarUrl || user.avatar || user.photoUrl || "",
      };
      const ref = getAdminCtvGeneratedRef(row);
      const stats = getAdminCtvUserStats({ ...row, ref });
      const referrals = stats.total;
      const vipCount = stats.vip;
      const sourceBreakdown = stats.sourceBreakdown;
      return { ...row, ref, referrals, vipCount, sourceBreakdown };
    });
}

const ADMIN_SOURCE_KEYS = ["tiktok", "facebook", "koc", "ctv_livestream"];

function normalizeUserSource(user) {
  const raw = String(user?.src || user?.source || "").trim().toLowerCase().replace(/[^a-z0-9_-]/g, "");
  return raw || "direct";
}

function buildUserSourceCounts(users) {
  const counts = Object.fromEntries([...ADMIN_SOURCE_KEYS, "direct", "other"].map((key) => [key, 0]));
  for (const user of users || []) {
    const key = normalizeUserSource(user);
    if (key === "direct") counts.direct += 1;
    else if (ADMIN_SOURCE_KEYS.includes(key)) counts[key] += 1;
    else counts.other += 1;
  }
  return counts;
}

function isAdminEndUser(user) {
  const role = String(user?.role || "").trim().toLowerCase();
  return !["admin", "staff", "employee", "sales", "ctv", "content"].includes(role);
}

function getAdminUserSourceSummary() {
  const endUsers = (state.adminUsers || []).filter(isAdminEndUser);
  const counts = buildUserSourceCounts(endUsers);
  return { total: endUsers.length, counts };
}

function renderAdminCtvSourceBadges(breakdown) {
  const badges = [];
  for (const key of ADMIN_SOURCE_KEYS) {
    if (breakdown[key] > 0) badges.push(`<span class="admin-ctv-src-pill src-${key}">${getAnalyticsSourceLabel(key)} ${breakdown[key]}</span>`);
  }
  if (breakdown.other > 0) badges.push(`<span class="admin-ctv-src-pill src-other">${state.lang === "vi" ? "Khác" : "其他"} ${breakdown.other}</span>`);
  if (breakdown.direct > 0) badges.push(`<span class="admin-ctv-src-pill src-direct">${getAnalyticsSourceLabel("direct")} ${breakdown.direct}</span>`);
  return badges.length ? `<div class="admin-ctv-src-cell">${badges.join("")}</div>` : '<span class="admin-ctv-src-empty">—</span>';
}

function formatAdminCtvMoney(value) {
  return `${Number(value || 0).toLocaleString("vi-VN")} đ`;
}

function getAdminCtvSlug(ctv) {
  return String(ctv?.name || "ctv")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 28) || "ctv";
}

function getAdminCtvGeneratedRef(ctv) {
  const savedRef = normalizeAdminCtvRef(ctv?.ref);
  if (savedRef) return savedRef;
  const phoneRef = String(ctv?.phone || "").replace(/\D/g, "").slice(-10);
  if (phoneRef) return phoneRef;
  return normalizeAdminCtvRef(getAdminCtvSlug(ctv));
}

const ADMIN_CTV_LINK_SOURCES = [
  { id: "", label: "Không gắn nguồn" },
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "koc", label: "KOC" },
  { id: "ctv_livestream", label: "CTV Livestream" },
];

function getAdminCtvLink(ctv) {
  const origin = typeof window !== "undefined" && window.location?.origin
    ? window.location.origin
    : "https://example.com";
  const code = getAdminCtvGeneratedRef(ctv);
  const source = String(state.adminCtvLinkSource || "").trim().toLowerCase();
  const url = new URL("/", origin);
  url.searchParams.set("r", code);
  if (source) url.searchParams.set("src", source);
  return url.toString();
}

function getAdminCtvReferralLinkInputValue(ctv) {
  return state.adminCtvReferralLinkDraft || (ctv ? getAdminCtvLink(ctv) : "");
}

async function saveAdminCtvReferralLink() {
  const isVi = state.lang === "vi";
  const selected = getSelectedAdminCtv();
  if (!selected?.id) {
    state.adminCtvLinkStatus = isVi ? "Vui lòng chọn tài khoản CTV." : "请选择合作伙伴账号。";
    renderAdmin();
    return;
  }
  const ref = getAdminCtvGeneratedRef(selected);
  state.adminCtvLinkStatus = isVi ? "Đang lưu link giới thiệu..." : "正在保存推广链接...";
  renderAdmin();
  try {
    const data = await apiRequest(`/api/admin/users/${encodeURIComponent(selected.id)}/ref`, {
      method: "PATCH",
      headers: { "X-Admin-User-Id": getAdminUserId() },
      body: JSON.stringify({ ref }),
    });
    state.adminUsers = state.adminUsers.map((user) => (
      String(user.id) === String(selected.id)
        ? { ...user, ...(data.user || {}), ref }
        : user
    ));
    state.adminCtvSelectedId = selected.id;
    state.adminCtvLinkStatus = isVi ? `Đã lưu mã ref "${ref}" cho tài khoản CTV.` : `已为该合作伙伴保存推广码 "${ref}"。`;
    renderAdmin();
  } catch (error) {
    state.adminCtvLinkStatus = error.message || (isVi ? "Không thể lưu link giới thiệu." : "无法保存推广链接。");
    renderAdmin();
  }
}

function getFilteredAdminCtvRows() {
  const adminCtvRows = getAdminCtvRows();
  const query = String(state.adminCtvSearch || "").trim().toLowerCase();
  if (!query) return adminCtvRows;
  return adminCtvRows.filter((ctv) => [ctv.name, ctv.email, ctv.phone].join(" ").toLowerCase().includes(query));
}

function getSelectedAdminCtv(rows = getAdminCtvRows()) {
  const adminCtvRows = getAdminCtvRows();
  return rows.find((ctv) => ctv.id === state.adminCtvSelectedId) || adminCtvRows.find((ctv) => ctv.id === state.adminCtvSelectedId) || adminCtvRows[0];
}

const ADMIN_CTV_PAGE_SIZES = [10, 20, 50, 100];

function getAdminCtvPagination(rows) {
  const pageSize = Math.max(1, Number(state.adminCtvPageSize || 10));
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  const currentPage = Math.min(Math.max(1, Number(state.adminCtvPage || 1)), totalPages);
  state.adminCtvPage = currentPage;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, rows.length);
  return {
    pageSize,
    totalPages,
    currentPage,
    startIndex,
    endIndex,
    pageRows: rows.slice(startIndex, endIndex),
  };
}

function renderAdminCtvPaginationButtonsHTML(totalPages, currentPage) {
  const pages = [];
  if (totalPages <= 5) {
    for (let page = 1; page <= totalPages; page += 1) pages.push(page);
  } else {
    pages.push(1);
    const middleStart = Math.max(2, currentPage - 1);
    const middleEnd = Math.min(totalPages - 1, currentPage + 1);
    if (middleStart > 2) pages.push("ellipsis-start");
    for (let page = middleStart; page <= middleEnd; page += 1) pages.push(page);
    if (middleEnd < totalPages - 1) pages.push("ellipsis-end");
    pages.push(totalPages);
  }

  return `
    <button type="button" data-admin-ctv-page="${Math.max(1, currentPage - 1)}" ${currentPage <= 1 ? "disabled" : ""} aria-label="Trang trước">‹</button>
    ${pages.map((page) => typeof page === "number"
    ? `<button type="button" class="${page === currentPage ? "active" : ""}" data-admin-ctv-page="${page}">${page}</button>`
    : `<span class="admin-ctv-ellipsis">…</span>`).join("")}
    <button type="button" data-admin-ctv-page="${Math.min(totalPages, currentPage + 1)}" ${currentPage >= totalPages ? "disabled" : ""} aria-label="Trang sau">›</button>
  `;
}

function renderAdminCtvAvatar(ctv) {
  if (ctv.avatar) {
    return `<img src="${escapeAttr(ctv.avatar)}" alt="${escapeAttr(ctv.name)}" />`;
  }
  return `<span>${escapeHtml(ctv.name.slice(0, 2).toUpperCase())}</span>`;
}

function getAdminCtvPickerRows(rows) {
  const query = String(state.adminCtvPickerSearch || "").trim().toLowerCase();
  if (!query) return rows;
  return rows.filter((ctv) => [ctv.name, ctv.email, ctv.phone].join(" ").toLowerCase().includes(query));
}

function renderAdminCtvPickerRowsHTML(allRows, selectedId, isVi) {
  const rows = getAdminCtvPickerRows(allRows);
  if (!allRows.length) {
    return `<div class="admin-ctv-empty">${isVi ? "Chưa có người dùng nào có vai trò CTV." : "暂无具有 CTV 角色的用户。"}</div>`;
  }
  if (!rows.length) {
    return `<div class="admin-ctv-empty">${isVi ? "Không tìm thấy CTV phù hợp." : "未找到匹配的合作伙伴。"}</div>`;
  }
  return rows.map((ctv) => `
    <label class="admin-ctv-picker-row ${selectedId === ctv.id ? "active" : ""}">
      <input type="radio" name="adminCtvSelect" value="${escapeAttr(ctv.id)}" ${selectedId === ctv.id ? "checked" : ""} />
      ${renderAdminCtvAvatar(ctv)}
      <span><strong>${escapeHtml(ctv.name)}</strong><small>${escapeHtml(ctv.email)}</small></span>
      <em>ctv</em>
    </label>
  `).join("");
}

function updateAdminCtvPickerList() {
  const container = document.getElementById("adminCtvPickerList");
  if (!container) return;
  const isVi = state.lang === "vi";
  const allRows = getAdminCtvRows();
  const selected = getSelectedAdminCtv();
  container.innerHTML = renderAdminCtvPickerRowsHTML(allRows, selected?.id, isVi);
}

function getAdminCtvFilteredUsers(stats) {
  if (state.adminCtvUserFilter === "vip") return stats.vipUsers;
  if (state.adminCtvUserFilter === "regular") return stats.regularUsers;
  return stats.users;
}

function getAdminCtvUserRegisteredAt(user) {
  return user?.registeredAt || user?.createdAt || user?.registered_at || user?.created_at || user?.created || "";
}

function formatAdminCtvUserRegisteredAt(user, isVi) {
  const registeredAt = getAdminCtvUserRegisteredAt(user);
  if (!registeredAt) return "-";
  return formatAdminRegistrationTimeOnly(registeredAt, isVi) || "-";
}

function getAdminCtvUserLabel(user) {
  return user?.fullName || user?.name || user?.email || user?.id || "User";
}

function renderAdminCtvReferredUsersHTML(users, isVi) {
  if (!users.length) {
    return `<tr><td colspan="4" class="admin-empty">${isVi ? "Không có user phù hợp với bộ lọc." : "没有符合筛选的用户。"}</td></tr>`;
  }
  return users.map((user) => {
    const vipInfo = getVipPlanDisplay(user, isVi);
    const source = normalizeUserSource(user);
    return `
      <tr>
        <td><strong>${escapeHtml(getAdminCtvUserLabel(user))}</strong><small>${escapeHtml(user.email || user.id || "")}</small></td>
        <td><span class="admin-ctv-user-badge ${isActivePremiumUser(user) ? "vip" : "regular"}">${escapeHtml(vipInfo.badge)}</span><small>${escapeHtml(vipInfo.expiry || vipInfo.status)}</small></td>
        <td>${escapeHtml(getAnalyticsSourceLabel(source))}</td>
        <td>${escapeHtml(formatAdminCtvUserRegisteredAt(user, isVi))}</td>
      </tr>
    `;
  }).join("");
}

function renderAdminCtvDetailViewHTML(selected, stats, isVi) {
  const filteredUsers = getAdminCtvFilteredUsers(stats);
  const filters = [
    { id: "all", label: isVi ? "Tất cả" : "全部", count: stats.total },
    { id: "regular", label: isVi ? "User thường" : "普通用户", count: stats.regular },
    { id: "vip", label: "VIP", count: stats.vip },
  ];
  if (!selected) {
    return `
      <section class="admin-ctv-detail-view">
        <button class="admin-ctv-detail-back" type="button" data-admin-ctv-back-list aria-label="${isVi ? "Trở lại danh sách CTV" : "返回合作伙伴列表"}">‹</button>
        <p>${isVi ? "Chọn một CTV để xem số user đăng ký từ link giới thiệu." : "选择一个合作伙伴查看推广链接注册用户数。"}</p>
      </section>
    `;
  }
  return `
    <section class="admin-ctv-detail-view">
      <button class="admin-ctv-detail-back" type="button" data-admin-ctv-back-list aria-label="${isVi ? "Trở lại danh sách CTV" : "返回合作伙伴列表"}">‹</button>
      <div class="admin-ctv-detail-head">
        <div class="admin-ctv-person">
          ${renderAdminCtvAvatar(selected)}
          <strong>${escapeHtml(selected.name)}${selected.verified ? '<span class="admin-ctv-check">✓</span>' : ""}<small>${escapeHtml(selected.email)}</small></strong>
        </div>
        <input id="adminCtvReferralLink" type="text" value="${escapeAttr(getAdminCtvReferralLinkInputValue(selected))}" aria-label="${isVi ? "Link giới thiệu có thể chỉnh sửa" : "可编辑推广链接"}" />
      </div>
      <div class="admin-ctv-detail-stats">
        <article><span>${isVi ? "Tổng user từ link" : "链接注册用户"}</span><strong>${formatAnalyticsNumber(stats.total)}</strong></article>
        <article><span>${isVi ? "User thường" : "普通用户"}</span><strong>${formatAnalyticsNumber(stats.regular)}</strong></article>
        <article><span>VIP</span><strong>${formatAnalyticsNumber(stats.vip)}</strong></article>
      </div>
      <div class="admin-ctv-user-filter" role="group" aria-label="${isVi ? "Lọc user của CTV" : "筛选合作伙伴用户"}">
        ${filters.map((filter) => `
          <button class="${state.adminCtvUserFilter === filter.id ? "active" : ""}" type="button" data-admin-ctv-user-filter="${filter.id}">
            ${escapeHtml(filter.label)} <b>${formatAnalyticsNumber(filter.count)}</b>
          </button>
        `).join("")}
      </div>
      <div class="admin-ctv-referred-table-wrap">
        <table class="admin-ctv-referred-table">
          <thead>
            <tr><th>${isVi ? "User" : "用户"}</th><th>${isVi ? "Loại" : "类型"}</th><th>${isVi ? "Nguồn" : "来源"}</th><th>${isVi ? "Ngày đăng ký" : "注册日期"}</th></tr>
          </thead>
          <tbody>${renderAdminCtvReferredUsersHTML(filteredUsers, isVi)}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderAdminCollaboratorsPanelHTML() {
  const isVi = state.lang === "vi";
  const allRows = getAdminCtvRows();
  const rows = getFilteredAdminCtvRows();
  const selected = getSelectedAdminCtv(rows);
  const selectedStats = getAdminCtvUserStats(selected);
  const totalCommission = allRows.reduce((sum, ctv) => sum + ctv.commission, 0);
  const activeCount = allRows.filter((ctv) => ctv.status === "active").length;
  const pagination = getAdminCtvPagination(rows);
  const tableRows = pagination.pageRows.map((ctv, index) => `
    <tr class="${selected?.id === ctv.id ? "active" : ""}" data-admin-ctv-select="${escapeAttr(ctv.id)}">
      <td>${pagination.startIndex + index + 1}</td>
      <td>
        <div class="admin-ctv-person">
          ${renderAdminCtvAvatar(ctv)}
          <strong>${escapeHtml(ctv.name)}${ctv.verified ? '<span class="admin-ctv-check">✓</span>' : ""}</strong>
        </div>
      </td>
      <td>${escapeHtml(ctv.email)}<small>${escapeHtml(ctv.phone)}</small></td>
      <td><b>${escapeHtml(formatAdminCtvMoney(ctv.commission))}</b></td>
      <td>${ctv.referrals}</td>
      <td>${ctv.vipCount}</td>
      <td>${renderAdminCtvSourceBadges(ctv.sourceBreakdown)}</td>
      <td><button class="admin-ctv-more" type="button" data-admin-ctv-select="${escapeAttr(ctv.id)}" aria-label="${isVi ? "Xem CTV" : "查看合作伙伴"}">›</button></td>
    </tr>
  `).join("");
  const sourceSummary = getAdminUserSourceSummary();
  const summaryCards = [
    { key: "total", label: isVi ? "Tổng người dùng" : "总用户", value: sourceSummary.total },
    { key: "tiktok", label: getAnalyticsSourceLabel("tiktok"), value: sourceSummary.counts.tiktok },
    { key: "facebook", label: getAnalyticsSourceLabel("facebook"), value: sourceSummary.counts.facebook },
    { key: "koc", label: getAnalyticsSourceLabel("koc"), value: sourceSummary.counts.koc },
    { key: "ctv_livestream", label: getAnalyticsSourceLabel("ctv_livestream"), value: sourceSummary.counts.ctv_livestream },
    { key: "direct", label: getAnalyticsSourceLabel("direct"), value: sourceSummary.counts.direct + sourceSummary.counts.other },
  ];
  const sourceSummaryHTML = summaryCards
    .map((card) => `
      <article class="admin-ctv-source-card admin-ctv-source-card--${card.key}">
        <span class="admin-ctv-source-dot"></span>
        <div><strong>${formatAnalyticsNumber(card.value)}</strong><small>${escapeHtml(card.label)}</small></div>
      </article>`)
    .join("");
  const pickerRows = renderAdminCtvPickerRowsHTML(allRows, selected?.id, isVi);
  const collaboratorBodyHTML = state.adminCtvDetailOpen
    ? renderAdminCtvDetailViewHTML(selected, selectedStats, isVi)
    : `
      <div class="admin-ctv-layout">
        <section class="admin-ctv-list">
          <div class="admin-ctv-list-head">
            <h2>${isVi ? "Danh sách cộng tác viên" : "合作伙伴列表"}</h2>
          </div>
          <div class="admin-table-wrap">
            <table class="admin-ctv-table">
              <thead>
                <tr><th>#</th><th>${isVi ? "Cộng tác viên" : "合作伙伴"}</th><th>${isVi ? "Liên hệ" : "联系方式"}</th><th>${isVi ? "Tổng hoa hồng" : "总佣金"}</th><th>${isVi ? "Người đăng ký" : "注册用户"}</th><th>VIP</th><th>${isVi ? "Nguồn" : "来源"}</th><th>${isVi ? "Thao tác" : "操作"}</th></tr>
              </thead>
              <tbody>${tableRows || `<tr><td colspan="8" class="admin-empty">${isVi ? "Không tìm thấy CTV phù hợp." : "未找到匹配的合作伙伴。"}</td></tr>`}</tbody>
            </table>
          </div>
          <footer class="admin-ctv-pagination">
            <span>${isVi ? "Hiển thị" : "显示"} ${rows.length ? pagination.startIndex + 1 : 0} - ${pagination.endIndex} ${isVi ? "của" : "共"} ${rows.length} CTV${state.adminCtvSearch ? (isVi ? ` (lọc từ ${allRows.length})` : `（从 ${allRows.length} 筛选）`) : ""}</span>
            <div>${renderAdminCtvPaginationButtonsHTML(pagination.totalPages, pagination.currentPage)}</div>
            <select id="adminCtvPageSizeSelect" aria-label="${isVi ? "Số CTV mỗi trang" : "每页数量"}">
              ${ADMIN_CTV_PAGE_SIZES.map((size) => `<option value="${size}" ${size === pagination.pageSize ? "selected" : ""}>${size} / ${isVi ? "trang" : "页"}</option>`).join("")}
            </select>
          </footer>
        </section>

        <aside class="admin-ctv-link">
          <h2><span>🔗</span>${isVi ? "Tạo link" : "生成链接"}</h2>
          <div class="admin-ctv-step"><span>1</span><strong>${isVi ? "Chọn tài khoản CTV" : "选择合作伙伴账号"}</strong></div>
          <div class="admin-ctv-link-search-box">
            <input id="adminCtvLinkSearchInput" class="admin-ctv-link-search" type="search" value="${escapeAttr(state.adminCtvPickerSearch)}" placeholder="${isVi ? "Tìm kiếm tên, email hoặc số điện thoại..." : "搜索姓名、邮箱或电话..."}" />
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7.5"/><path d="M21 21l-4.3-4.3"/></svg>
          </div>
          <div class="admin-ctv-picker" id="adminCtvPickerList">${pickerRows}</div>
          <div class="admin-ctv-step"><span>2</span><strong>${isVi ? "Chọn nguồn kênh (tùy chọn)" : "选择来源渠道（可选）"}</strong></div>
          <select id="adminCtvLinkSourceSelect" class="admin-ctv-link-source" aria-label="${isVi ? "Nguồn kênh" : "来源渠道"}">
            ${ADMIN_CTV_LINK_SOURCES.map((source) => `<option value="${source.id}" ${source.id === (state.adminCtvLinkSource || "") ? "selected" : ""}>${source.id === "" ? (isVi ? "Không gắn nguồn" : "不绑定来源") : source.label}</option>`).join("")}
          </select>
          <div class="admin-ctv-step"><span>3</span><strong>${isVi ? "Link giới thiệu của CTV" : "合作伙伴推广链接"}</strong></div>
          <div class="admin-ctv-link-output">
            <input id="adminCtvReferralLink" type="text" value="${escapeAttr(getAdminCtvReferralLinkInputValue(selected))}" aria-label="${isVi ? "Link giới thiệu có thể chỉnh sửa" : "可编辑推广链接"}" />
            <button id="adminCtvCopyLinkBtn" type="button" aria-label="${isVi ? "Sao chép link" : "复制链接"}">⧉</button>
          </div>
          <button id="adminCtvCreateLinkBtn" class="admin-ctv-create" type="button">🔗 ${isVi ? "Tạo link" : "生成链接"}</button>
          <p>${escapeHtml(state.adminCtvLinkStatus || (isVi ? "Link sẽ được tạo dựa trên tài khoản CTV đã chọn." : "链接将根据所选合作伙伴账号生成。"))}</p>
        </aside>
      </div>
    `;

  return `
    <section class="admin-ctv-panel">
      <header class="admin-ctv-hero">
        <button class="admin-ctv-back" type="button" aria-label="${isVi ? "Quay lại" : "返回"}">‹</button>
        <div>
          <h1>${isVi ? "Quản lí CTV" : "合作伙伴管理"}</h1>
          <p>${isVi ? "Quản lý cộng tác viên, theo dõi hoa hồng và tạo link giới thiệu." : "管理合作伙伴、跟踪佣金并生成推广链接。"}</p>
        </div>
      </header>

      <div class="admin-ctv-stats">
        <article class="admin-ctv-stat admin-ctv-stat--money">
          <span>₫</span>
          <div><strong>${escapeHtml(formatAdminCtvMoney(totalCommission))}</strong><small>${isVi ? "Tổng hoa hồng" : "总佣金"}</small></div>
        </article>
        <article class="admin-ctv-stat admin-ctv-stat--people">
          <span>●●●</span>
          <div><strong>${activeCount}</strong><small>${isVi ? "Tổng cộng tác viên đang hoạt động" : "活跃合作伙伴总数"}</small></div>
        </article>
      </div>

      <section class="admin-ctv-source-panel">
        <div class="admin-ctv-source-head">
          <h2>${isVi ? "Theo dõi nguồn người dùng" : "用户来源跟踪"}</h2>
          <p>${isVi ? "Số người dùng đăng ký theo từng kênh nguồn (src)." : "按来源渠道 (src) 统计的注册用户数。"}</p>
        </div>
        <div class="admin-ctv-source-cards">${sourceSummaryHTML}</div>
      </section>

      ${collaboratorBodyHTML}
    </section>
  `;
}

function formatAnalyticsNumber(value) {
  return Number(value || 0).toLocaleString("vi-VN");
}

function formatAnalyticsDurationSeconds(value) {
  const total = Math.max(0, Math.floor(Number(value) || 0));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  if (hours > 0) return `${hours}h ${String(minutes).padStart(2, "0")}p`;
  if (minutes > 0) return `${minutes}p ${String(seconds).padStart(2, "0")}s`;
  return `${seconds}s`;
}

function getLearningBehaviorModuleLabel(module, isVi = state.lang === "vi") {
  const key = String(module || "").toLowerCase();
  const vi = {
    listening: "Luyện nghe",
    writing: "Luyện viết",
    hsk: "HSK",
    daily: "Tiếng Trung thông dụng",
  };
  const zh = {
    listening: "听力",
    writing: "拼写",
    hsk: "HSK",
    daily: "高频汉语",
  };
  return (isVi ? vi : zh)[key] || (module ? String(module) : "—");
}

function getHskLessonMetaById(lessonId = "") {
  const id = String(lessonId || "");
  for (const [level, lessons] of Object.entries(hskLevels || {})) {
    const lesson = (lessons || []).find((item) => item.id === id);
    if (lesson) return { level, lesson };
  }
  return null;
}

function formatLearningBehaviorHskLevel(level = "", isVi = state.lang === "vi") {
  const match = String(level || "").match(/^HSK\s*([1-6])$/i);
  if (match) return `HSK ${match[1]}`;
  return level || (isVi ? "Ch\u01b0a r\u00f5 c\u1ea5p" : "\u672a\u77e5\u7ea7\u522b");
}

function getLearningBehaviorListeningTopic(row = {}) {
  const topicId = String(row.topicId || row.topic_id || "");
  const lessonId = String(row.lessonId || row.lesson_id || "");
  if (topicId) {
    const direct = listeningCatalogTopics.find((topic) => topic.id === topicId);
    if (direct) return direct;
  }
  if (lessonId) {
    const byLesson = listeningCatalogTopics.find((topic) =>
      (topic.lessons || []).some((lesson) => lesson.id === lessonId)
    );
    if (byLesson) return byLesson;
  }
  return null;
}

function getLearningBehaviorListeningLesson(row = {}) {
  const lessonId = String(row.lessonId || row.lesson_id || "");
  const topic = getLearningBehaviorListeningTopic(row);
  const topicLessons = Array.isArray(topic?.lessons) ? topic.lessons : [];
  const topicLessonIndex = topicLessons.findIndex((lesson) => lesson.id === lessonId);
  const topicLesson = topicLessonIndex >= 0 ? topicLessons[topicLessonIndex] : null;
  const episode = listeningEpisodes.find((item) => item.id === lessonId) || null;
  const globalIndex = listeningEpisodes.findIndex((item) => item.id === lessonId);
  return {
    topic,
    no: topicLessonIndex >= 0 ? topicLessonIndex + 1 : (globalIndex >= 0 ? globalIndex + 1 : 0),
    titleVi: topicLesson?.title_vi || topicLesson?.title || episode?.title || lessonId,
    titleZh: topicLesson?.title_zh || topicLesson?.zh || episode?.titleZh || episode?.title || lessonId,
  };
}

function getLearningBehaviorLevelLabel(row = {}, isVi = state.lang === "vi") {
  const moduleKey = String(row.module || "").toLowerCase();
  const level = String(row.level || "");
  if (moduleKey === "writing") {
    if (level === "daily") return isVi ? "Ti\u1ebfng Trung th\u00f4ng d\u1ee5ng" : "\u9ad8\u9891\u6c49\u8bed";
    return formatLearningBehaviorHskLevel(level, isVi);
  }
  if (moduleKey === "listening") {
    const topic = getLearningBehaviorListeningTopic(row);
    return isVi
      ? (topic?.levelLabelVi || getListeningDashboardHeroTitle(level, true))
      : (topic?.levelLabelZh || getListeningDashboardHeroTitle(level, false));
  }
  return level || "—";
}

function getLearningBehaviorTopicLabel(row = {}, isVi = state.lang === "vi") {
  const moduleKey = String(row.module || "").toLowerCase();
  if (moduleKey === "listening") {
    const topic = getLearningBehaviorListeningTopic(row);
    return isVi
      ? (topic?.label_vi || topic?.label_zh || row.topicId || "—")
      : (topic?.label_zh || topic?.label_vi || row.topicId || "—");
  }
  if (moduleKey === "writing" && String(row.level || "") === "daily") {
    const theme = dailyThemes.find((item) => item.id === row.topicId);
    return isVi ? (theme?.vi || row.topicId || "—") : (theme?.zh || theme?.vi || row.topicId || "—");
  }
  return "—";
}

function getLearningBehaviorPartLabel(questionId = "", module = "", isVi = state.lang === "vi") {
  const value = String(questionId || "").trim();
  const key = value.includes(":") ? value.split(":").pop() : value;
  const normalized = String(key || "").toLowerCase();
  if (String(module || "").toLowerCase() === "listening") {
    const vi = { detail: "Chi ti\u1ebft b\u00e0i", repeat: "Luy\u1ec7n n\u00f3i", vocab: "T\u1eeb v\u1ef1ng" };
    const zh = { detail: "\u8bfe\u7a0b\u8be6\u60c5", repeat: "\u8ddf\u8bfb\u7ec3\u4e60", vocab: "\u8bcd\u6c47" };
    return (isVi ? vi : zh)[normalized] || value || "—";
  }
  const vi = { word: "T\u1eeb v\u1ef1ng", sentence: "C\u00e2u" };
  const zh = { word: "\u751f\u8bcd", sentence: "\u53e5\u5b50" };
  return (isVi ? vi : zh)[normalized] || value || "—";
}

function getLearningBehaviorContentTitle(row = {}, isVi = state.lang === "vi") {
  const moduleKey = String(row.module || "").toLowerCase();
  if (moduleKey === "writing") {
    if (String(row.level || "") === "daily") {
      const theme = dailyThemes.find((item) => item.id === row.topicId);
      return isVi ? (theme?.vi || row.topicId || "—") : (theme?.zh || theme?.vi || row.topicId || "—");
    }
    const meta = getHskLessonMetaById(row.lessonId);
    if (meta?.lesson) {
      const no = meta.lesson.no || "";
      const title = isVi ? (meta.lesson.titleVi || meta.lesson.title) : (meta.lesson.titleZh || meta.lesson.title);
      return isVi ? `B\u00e0i ${no}: ${title}` : `\u7b2c${no}\u8bfe\uff1a${title}`;
    }
    return row.lessonId || "—";
  }
  if (moduleKey === "listening") {
    const lesson = getLearningBehaviorListeningLesson(row);
    const title = isVi ? lesson.titleVi : lesson.titleZh;
    if (lesson.no > 0) return isVi ? `B\u00e0i ${lesson.no}: ${title}` : `\u7b2c${lesson.no}\u8bfe\uff1a${title}`;
    return title || row.lessonId || "—";
  }
  return row.lessonId || row.topicId || row.level || "—";
}

function getLearningBehaviorContentLabel(row = {}, isVi = state.lang === "vi") {
  const title = getLearningBehaviorContentTitle(row, isVi);
  const part = getLearningBehaviorPartLabel(row.questionId, row.module, isVi);
  if (!part || part === "—") return title || "—";
  return `${title || "—"} · ${part}`;
}

function joinLearningBehaviorMetaLabels(labels = []) {
  const safeLabels = labels
    .map((label) => String(label || "").trim())
    .filter((label) => label && label !== "—");
  return safeLabels.length ? safeLabels.join(" · ") : "—";
}

const ADMIN_VIP_ANALYTICS_PAGE_SIZE = 10;

function getAdminAnalyticsTablePagination(rows = [], currentPage = 1, pageSize = ADMIN_VIP_ANALYTICS_PAGE_SIZE) {
  const safeRows = Array.isArray(rows) ? rows : [];
  const safePageSize = Math.max(1, Number(pageSize) || ADMIN_VIP_ANALYTICS_PAGE_SIZE);
  const totalRows = safeRows.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / safePageSize));
  const page = Math.min(Math.max(1, Number(currentPage) || 1), totalPages);
  const startIndex = (page - 1) * safePageSize;
  const endIndex = Math.min(startIndex + safePageSize, totalRows);
  return {
    pageRows: safeRows.slice(startIndex, endIndex),
    totalRows,
    totalPages,
    currentPage: page,
    startIndex,
    endIndex,
    pageSize: safePageSize,
  };
}

function renderAdminAnalyticsPaginationButtonsHTML(kind, totalPages, currentPage) {
  const pages = [];
  if (totalPages <= 5) {
    for (let page = 1; page <= totalPages; page += 1) pages.push(page);
  } else {
    pages.push(1);
    const middleStart = Math.max(2, currentPage - 1);
    const middleEnd = Math.min(totalPages - 1, currentPage + 1);
    if (middleStart > 2) pages.push("ellipsis-start");
    for (let page = middleStart; page <= middleEnd; page += 1) pages.push(page);
    if (middleEnd < totalPages - 1) pages.push("ellipsis-end");
    pages.push(totalPages);
  }

  return `
    <button type="button" data-admin-analytics-vip-page-kind="${escapeAttr(kind)}" data-admin-analytics-vip-page="${Math.max(1, currentPage - 1)}" ${currentPage <= 1 ? "disabled" : ""}>‹</button>
    ${pages.map((page) => typeof page === "number"
    ? `<button type="button" class="${page === currentPage ? "active" : ""}" data-admin-analytics-vip-page-kind="${escapeAttr(kind)}" data-admin-analytics-vip-page="${page}">${page}</button>`
    : `<span class="admin-ctv-ellipsis">…</span>`).join("")}
    <button type="button" data-admin-analytics-vip-page-kind="${escapeAttr(kind)}" data-admin-analytics-vip-page="${Math.min(totalPages, currentPage + 1)}" ${currentPage >= totalPages ? "disabled" : ""}>›</button>
  `;
}

function renderAdminAnalyticsPaginationHTML(kind, pagination, isVi = state.lang === "vi") {
  if (!pagination || pagination.totalRows <= pagination.pageSize) return "";
  return `
    <footer class="admin-vip-pagination admin-analytics-pagination">
      <span>${isVi ? "Hi\u1ec3n th\u1ecb" : "\u663e\u793a"} ${pagination.totalRows ? pagination.startIndex + 1 : 0} - ${pagination.endIndex} ${isVi ? "trong" : "/"} ${pagination.totalRows}</span>
      <div class="admin-vip-pagination-actions">${renderAdminAnalyticsPaginationButtonsHTML(kind, pagination.totalPages, pagination.currentPage)}</div>
    </footer>
  `;
}

function getAdminVipEngagementTotals(rows = []) {
  const safeRows = Array.isArray(rows) ? rows : [];
  const totalSeconds = safeRows.reduce((sum, row) => sum + (Number(row.totalSeconds) || 0), 0);
  const sessions = safeRows.reduce((sum, row) => sum + (Number(row.sessions) || 0), 0);
  return {
    vipUsers: safeRows.reduce((sum, row) => sum + (Number(row.vipUsers) || 0), 0),
    sessions,
    activeSessions: safeRows.reduce((sum, row) => sum + (Number(row.activeSessions) || 0), 0),
    totalSeconds,
    avgSeconds: sessions > 0 ? Math.round(totalSeconds / sessions) : 0,
  };
}

function compareAdminVipEngagementRows(a, b, direction = "low") {
  const weight = direction === "high" ? -1 : 1;
  const score =
    (a.sessions - b.sessions) ||
    (a.vipUsers - b.vipUsers) ||
    (a.totalSeconds - b.totalSeconds) ||
    (a.activeSessions - b.activeSessions);
  if (score !== 0) return score * weight;
  return String(a.scope || "").localeCompare(String(b.scope || ""), "vi") ||
    String(a.detail || "").localeCompare(String(b.detail || ""), "vi");
}

function buildAdminVipEngagementRows(contentSummary = [], isVi = state.lang === "vi", direction = "low") {
  const summaryRows = Array.isArray(contentSummary) ? contentSummary : [];
  const rows = [];

  HSK_LEVEL_IDS.forEach((levelId) => {
    const matches = summaryRows.filter((row) =>
      String(row.module || "").toLowerCase() === "writing" &&
      String(row.level || "").toUpperCase() === levelId
    );
    rows.push({
      key: `writing:${levelId}`,
      module: "writing",
      scope: formatLearningBehaviorHskLevel(levelId, isVi),
      detail: isVi ? "To\u00e0n c\u1ea5p HSK" : "\u6574\u4e2a HSK \u7ea7\u522b",
      ...getAdminVipEngagementTotals(matches),
    });
  });

  listeningCatalogTopics.forEach((topic) => {
    const matches = summaryRows.filter((row) =>
      String(row.module || "").toLowerCase() === "listening" &&
      String(row.topicId || row.topic_id || "") === String(topic.id || "")
    );
    const levelLabel = isVi
      ? (topic.levelLabelVi || getListeningDashboardHeroTitle(topic.levelId, true) || "\u0110ang ph\u00e2n lo\u1ea1i")
      : (topic.levelLabelZh || getListeningDashboardHeroTitle(topic.levelId, false) || "\u672a\u5206\u7c7b");
    const topicLabel = isVi
      ? (topic.label_vi || topic.label_zh || topic.id)
      : (topic.label_zh || topic.label_vi || topic.id);
    rows.push({
      key: `listening:${topic.id}`,
      module: "listening",
      scope: levelLabel,
      detail: topicLabel,
      ...getAdminVipEngagementTotals(matches),
    });
  });

  if (!listeningCatalogTopics.length) {
    const fallbackListeningKeys = new Map();
    summaryRows
      .filter((row) => String(row.module || "").toLowerCase() === "listening")
      .forEach((row) => {
        const key = `${row.level || ""}:${row.topicId || ""}`;
        if (!fallbackListeningKeys.has(key)) fallbackListeningKeys.set(key, []);
        fallbackListeningKeys.get(key).push(row);
      });
    fallbackListeningKeys.forEach((matches, key) => {
      const first = matches[0] || {};
      rows.push({
        key: `listening:${key}`,
        module: "listening",
        scope: getLearningBehaviorLevelLabel(first, isVi),
        detail: getLearningBehaviorTopicLabel(first, isVi),
        ...getAdminVipEngagementTotals(matches),
      });
    });
  }

  return rows.sort((a, b) => compareAdminVipEngagementRows(a, b, direction));
}

function buildAdminVipHighEngagementRows(contentSummary = [], isVi = state.lang === "vi") {
  return buildAdminVipEngagementRows(contentSummary, isVi, "high");
}

function analyticsFormatChartDate(ymd, compact = true) {
  const match = String(ymd || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return ymd || "";
  const [, year, month, day] = match;
  return compact ? `${day}/${month}` : `${day}/${month}/${year}`;
}

function getAnalyticsChartPointDay(point, index = 0) {
  const directDay = point?.day || point?.date || point?.ymd || point?.label;
  if (directDay) return String(directDay);

  const metaFrom = state.adminAnalytics?.meta?.from || state.adminAnalyticsFrom;
  const startDate = analyticsParseYmd(metaFrom);
  if (!startDate) return "";
  return analyticsToYmd(analyticsAddDays(startDate, index));
}

function getAnalyticsChartTickIndexes(points) {
  const total = points.length;
  if (total <= 0) return [];
  if (total <= 7) return points.map((_, index) => index);

  const tickCount = Math.min(6, total);
  const indexes = new Set();
  for (let i = 0; i < tickCount; i += 1) {
    indexes.add(Math.round((i * (total - 1)) / (tickCount - 1)));
  }
  return [...indexes].sort((a, b) => a - b);
}

function renderAnalyticsLineChart(series, color = "#059669", options = {}) {
  const points = Array.isArray(series) ? series : [];
  const width = 300;
  const height = 160;
  const padX = 6;
  const padY = 14;
  const unitLabel = options.unitLabel || "";
  if (points.length === 0) {
    return `
      <div class="admin-analytics-line-chart">
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img"></svg>
        <div class="chart-x-axis"></div>
      </div>
    `;
  }
  const maxValue = Math.max(1, ...points.map((point) => Number(point.value) || 0));
  const stepX = points.length > 1 ? (width - padX * 2) / (points.length - 1) : 0;
  const coords = points.map((point, index) => {
    const x = padX + stepX * index;
    const y = height - padY - ((Number(point.value) || 0) / maxValue) * (height - padY * 2);
    return { x, y, point };
  });
  const linePath = coords
    .map(({ x, y }, index) => `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const lastX = coords[coords.length - 1].x.toFixed(1);
  const firstX = coords[0].x.toFixed(1);
  const areaPath = `${linePath} L${lastX},${height - padY} L${firstX},${height - padY} Z`;
  const hoverTargets = coords.map(({ x, y, point }, index) => {
    const value = Number(point.value) || 0;
    const day = getAnalyticsChartPointDay(point, index);
    const dayLabel = analyticsFormatChartDate(day, false);
    const valueLabel = `${formatAnalyticsNumber(value)}${unitLabel ? ` ${unitLabel}` : ""}`;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;
    const widthPercent = Math.max(100 / points.length, 6);
    return `
      <button
        class="chart-hover-target"
        type="button"
        style="left:${xPercent.toFixed(3)}%; width:${widthPercent.toFixed(3)}%; --chart-y:${yPercent.toFixed(3)}%; --chart-color:${escapeAttr(color)};"
        aria-label="${escapeAttr(`${dayLabel}: ${valueLabel}`)}"
      >
        <span class="chart-dot" aria-hidden="true"></span>
        <span class="chart-tooltip" role="tooltip">
          <b>${escapeHtml(dayLabel)}</b>
          <strong>${escapeHtml(valueLabel)}</strong>
        </span>
      </button>
    `;
  }).join("");
  const axisLabels = getAnalyticsChartTickIndexes(points).map((index) => {
    const coord = coords[index];
    if (!coord) return "";
    const xPercent = (coord.x / width) * 100;
    return `<span style="left:${xPercent.toFixed(3)}%">${escapeHtml(analyticsFormatChartDate(getAnalyticsChartPointDay(coord.point, index)))}</span>`;
  }).join("");
  return `
    <div class="admin-analytics-line-chart">
      <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img">
        <path class="chart-area" d="${areaPath}" fill="${color}"></path>
        <path class="chart-line" d="${linePath}" stroke="${color}"></path>
      </svg>
      <div class="chart-hover-layer">${hoverTargets}</div>
      <div class="chart-x-axis">${axisLabels}</div>
    </div>
  `;
}

function getAnalyticsSourceLabel(source) {
  const key = String(source || "").toLowerCase();
  const map = {
    tiktok: "TikTok",
    facebook: "Facebook",
    koc: "KOC",
    ctv_livestream: "CTV Livestream",
    direct: state.lang === "vi" ? "Trực tiếp" : "直接",
  };
  return map[key] || (source ? String(source) : "—");
}

const ANALYTICS_PRESETS = [
  { id: "today", label: "Hôm nay", labelZh: "今天" },
  { id: "yesterday", label: "Hôm qua", labelZh: "昨天" },
  { id: "last7", label: "7 ngày qua", labelZh: "过去 7 天" },
  { id: "last14", label: "14 ngày qua", labelZh: "过去 14 天" },
  { id: "last28", label: "28 ngày qua", labelZh: "过去 28 天" },
  { id: "last30", label: "30 ngày qua", labelZh: "过去 30 天" },
  { id: "thisWeek", label: "Tuần này", labelZh: "本周" },
  { id: "lastWeek", label: "Tuần trước", labelZh: "上周" },
  { id: "thisMonth", label: "Tháng này", labelZh: "本月" },
  { id: "lastMonth", label: "Tháng trước", labelZh: "上月" },
  { id: "max", label: "Tối đa", labelZh: "最大范围" },
];

function analyticsTodayLocal() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function analyticsToYmd(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function analyticsParseYmd(ymd) {
  const [year, month, day] = String(ymd || "").split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  date.setHours(0, 0, 0, 0);
  return date;
}

function analyticsNormalizeDateInput(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const ymd = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (ymd) {
    const date = new Date(Number(ymd[1]), Number(ymd[2]) - 1, Number(ymd[3]));
    date.setHours(0, 0, 0, 0);
    return Number.isNaN(date.getTime()) ? "" : analyticsToYmd(date);
  }
  const slash = raw.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
  if (!slash) return "";
  let first = Number(slash[1]);
  let second = Number(slash[2]);
  const year = Number(slash[3]);
  let month = first;
  let day = second;
  if (first > 12 && second <= 12) {
    day = first;
    month = second;
  }
  const date = new Date(year, month - 1, day);
  date.setHours(0, 0, 0, 0);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return "";
  return analyticsToYmd(date);
}

function analyticsAddDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function analyticsStartOfWeek(date) {
  const start = new Date(date);
  const mondayOffset = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - mondayOffset);
  start.setHours(0, 0, 0, 0);
  return start;
}

function analyticsPresetRange(preset) {
  const today = analyticsTodayLocal();
  switch (preset) {
    case "today": return { from: today, to: today };
    case "yesterday": { const day = analyticsAddDays(today, -1); return { from: day, to: day }; }
    case "last7": return { from: analyticsAddDays(today, -6), to: today };
    case "last14": return { from: analyticsAddDays(today, -13), to: today };
    case "last28": return { from: analyticsAddDays(today, -27), to: today };
    case "last30": return { from: analyticsAddDays(today, -29), to: today };
    case "thisWeek": return { from: analyticsStartOfWeek(today), to: today };
    case "lastWeek": { const start = analyticsAddDays(analyticsStartOfWeek(today), -7); return { from: start, to: analyticsAddDays(start, 6) }; }
    case "thisMonth": return { from: new Date(today.getFullYear(), today.getMonth(), 1), to: today };
    case "lastMonth": return { from: new Date(today.getFullYear(), today.getMonth() - 1, 1), to: new Date(today.getFullYear(), today.getMonth(), 0) };
    case "max": return { from: new Date(2020, 0, 1), to: today };
    default: return { from: analyticsAddDays(today, -29), to: today };
  }
}

function analyticsFormatDisplay(ymd) {
  const date = analyticsParseYmd(ymd);
  if (!date) return "";
  if (state.lang === "vi") return `${date.getDate()} Tháng ${date.getMonth() + 1}, ${date.getFullYear()}`;
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function analyticsRangeLabel(fromYmd, toYmd) {
  if (!fromYmd || !toYmd) return state.lang === "vi" ? "Chọn khoảng thời gian" : "选择时间范围";
  if (fromYmd === toYmd) return analyticsFormatDisplay(fromYmd);
  return `${analyticsFormatDisplay(fromYmd)} – ${analyticsFormatDisplay(toYmd)}`;
}

function getActiveAnalyticsPreset() {
  for (const preset of ANALYTICS_PRESETS) {
    const range = analyticsPresetRange(preset.id);
    if (analyticsToYmd(range.from) === state.adminAnalyticsFrom && analyticsToYmd(range.to) === state.adminAnalyticsTo) {
      return preset.id;
    }
  }
  return "";
}

function renderAnalyticsCalendarMonth(year, month) {
  const draftFrom = state.adminAnalyticsDraftFrom;
  const draftTo = state.adminAnalyticsDraftTo;
  const isVi = state.lang === "vi";
  const first = new Date(year, month, 1);
  const startDow = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weekdays = isVi ? ["T2", "T3", "T4", "T5", "T6", "T7", "CN"] : ["一", "二", "三", "四", "五", "六", "日"];

  let cells = "";
  for (let i = 0; i < startDow; i += 1) cells += `<span class="cal-cell cal-empty"></span>`;
  for (let day = 1; day <= daysInMonth; day += 1) {
    const ymd = analyticsToYmd(new Date(year, month, day));
    const hasRange = draftFrom && draftTo;
    const inRange = hasRange && ymd >= draftFrom && ymd <= draftTo;
    const isEndpoint = ymd === draftFrom || ymd === draftTo;
    const cls = ["cal-cell", "cal-day", inRange ? "in-range" : "", isEndpoint ? "selected" : ""].filter(Boolean).join(" ");
    cells += `<button type="button" class="${cls}" data-analytics-day="${ymd}">${day}</button>`;
  }
  return `
    <div class="admin-analytics-cal-month">
      <div class="cal-head">${isVi ? `Tháng ${month + 1} ${year}` : `${year}年${month + 1}月`}</div>
      <div class="cal-weekdays">${weekdays.map((w) => `<span>${w}</span>`).join("")}</div>
      <div class="cal-grid">${cells}</div>
    </div>`;
}

function renderAdminAnalyticsRangeControl() {
  const triggerLabel = analyticsRangeLabel(state.adminAnalyticsFrom, state.adminAnalyticsTo);
  if (!state.adminAnalyticsPickerOpen) {
    return `
      <div class="admin-analytics-daterange">
        <button id="adminAnalyticsRangeTrigger" class="admin-analytics-range-trigger" type="button">
          <span class="range-icon">📅</span><span>${escapeHtml(triggerLabel)}</span><span class="range-caret">▾</span>
        </button>
      </div>`;
  }

  const activePreset = getActiveAnalyticsPreset();
  const calMonthDate = analyticsParseYmd(`${state.adminAnalyticsCalMonth}-01`) || analyticsTodayLocal();
  const leftYear = calMonthDate.getFullYear();
  const leftMonth = calMonthDate.getMonth();
  const rightDate = new Date(leftYear, leftMonth + 1, 1);

  const isVi = state.lang === "vi";
  const presetsHTML = ANALYTICS_PRESETS
    .map((preset) => `<button type="button" data-analytics-preset="${preset.id}" class="${activePreset === preset.id ? "active" : ""}">${isVi ? preset.label : preset.labelZh}</button>`)
    .join("");

  return `
    <div class="admin-analytics-daterange">
      <button id="adminAnalyticsRangeTrigger" class="admin-analytics-range-trigger open" type="button">
        <span class="range-icon">📅</span><span>${escapeHtml(triggerLabel)}</span><span class="range-caret">▴</span>
      </button>
      <div class="admin-analytics-range-backdrop" id="adminAnalyticsRangeBackdrop"></div>
      <div class="admin-analytics-range-pop">
        <div class="admin-analytics-presets">${presetsHTML}</div>
        <div class="admin-analytics-cal">
          <div class="cal-nav">
            <button type="button" data-analytics-cal-nav="-1" aria-label="${isVi ? "Tháng trước" : "上个月"}">‹</button>
            <button type="button" data-analytics-cal-nav="1" aria-label="${isVi ? "Tháng sau" : "下个月"}">›</button>
          </div>
          <div class="cal-months">
            ${renderAnalyticsCalendarMonth(leftYear, leftMonth)}
            ${renderAnalyticsCalendarMonth(rightDate.getFullYear(), rightDate.getMonth())}
          </div>
          <div class="admin-analytics-range-footer">
            <div class="admin-analytics-range-summary">
              <strong>${escapeHtml(analyticsRangeLabel(state.adminAnalyticsDraftFrom, state.adminAnalyticsDraftTo))}</strong>
              <small>${state.lang === "vi" ? "Ngày hiển thị theo Giờ TP Hồ Chí Minh" : "日期按胡志明市时间显示"}</small>
            </div>
            <div class="admin-analytics-range-actions">
              <button type="button" id="adminAnalyticsRangeCancel">${state.lang === "vi" ? "Hủy" : "取消"}</button>
              <button type="button" id="adminAnalyticsRangeApply" class="primary" ${state.adminAnalyticsDraftFrom && state.adminAnalyticsDraftTo ? "" : "disabled"}>${state.lang === "vi" ? "Cập nhật" : "更新"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderAdminAnalyticsPanelHTML() {
  const isVi = state.lang === "vi";

  let bodyHTML;
  if (state.adminAnalyticsLoading) {
    bodyHTML = `<div class="admin-analytics-status">${isVi ? "Đang tải dữ liệu phân tích..." : "正在加载分析数据..."}</div>`;
  } else if (state.adminAnalyticsError) {
    bodyHTML = `<div class="admin-analytics-status error">${escapeHtml(state.adminAnalyticsError)}</div>`;
  } else if (!state.adminAnalytics) {
    bodyHTML = `<div class="admin-analytics-status">${isVi ? "Chưa có dữ liệu phân tích." : "暂无分析数据。"}</div>`;
  } else {
    const data = state.adminAnalytics;
    const dailyLearners = data.dailyLearners || [];
    const dailyAttempts = data.dailyAttempts || [];
    const attemptsTotal = dailyAttempts.reduce((sum, point) => sum + (Number(point.value) || 0), 0);
    const learnersPeak = dailyLearners.reduce((max, point) => Math.max(max, Number(point.value) || 0), 0);
    const vipBehavior = data.vipBehavior || {};
    const vipSessions = Array.isArray(vipBehavior.recentSessions) ? vipBehavior.recentSessions : [];
    const activeVipSessions = Number(vipBehavior.activeSessions || 0);
    const totalVipStudySeconds = Number(vipBehavior.totalStudySeconds || 0);
    const vipModuleSummary = Array.isArray(vipBehavior.moduleSummary) ? vipBehavior.moduleSummary : [];
    const vipContentSummary = Array.isArray(vipBehavior.contentSummary) ? vipBehavior.contentSummary : [];
    const vipUserSummary = Array.isArray(vipBehavior.userSummary) ? vipBehavior.userSummary : [];
    const totalVipSessions = vipModuleSummary.reduce((sum, row) => sum + (Number(row.sessions) || 0), 0);
    const activeVipUsers = vipUserSummary.filter((row) => row.isActive).length;
    const vipSessionPagination = getAdminAnalyticsTablePagination(vipSessions, state.adminVipSessionPage);
    const vipContentSummaryPagination = getAdminAnalyticsTablePagination(vipContentSummary, state.adminVipContentSummaryPage);
    const vipHighEngagementRows = buildAdminVipHighEngagementRows(vipContentSummary, isVi);
    const vipHighEngagementPagination = getAdminAnalyticsTablePagination(vipHighEngagementRows, state.adminVipHighEngagementPage);
    state.adminVipSessionPage = vipSessionPagination.currentPage;
    state.adminVipContentSummaryPage = vipContentSummaryPagination.currentPage;
    state.adminVipHighEngagementPage = vipHighEngagementPagination.currentPage;
    const vipSessionRows = vipSessionPagination.pageRows;
    const vipContentSummaryRows = vipContentSummaryPagination.pageRows;
    const vipHighEngagementPageRows = vipHighEngagementPagination.pageRows;
    const vipSessionPaginationHTML = renderAdminAnalyticsPaginationHTML("sessions", vipSessionPagination, isVi);
    const vipContentSummaryPaginationHTML = renderAdminAnalyticsPaginationHTML("content", vipContentSummaryPagination, isVi);
    const vipHighEngagementPaginationHTML = renderAdminAnalyticsPaginationHTML("high-engagement", vipHighEngagementPagination, isVi);

    const vipBehaviorRowsHTML = vipSessions.length
      ? vipSessionRows.map((session, index) => {
        const levelLabel = getLearningBehaviorLevelLabel(session, isVi);
        const topicLabel = getLearningBehaviorTopicLabel(session, isVi);
        const partLabel = getLearningBehaviorPartLabel(session.questionId, session.module, isVi);
        const contentTitle = getLearningBehaviorContentTitle(session, isVi);
        const contentMeta = joinLearningBehaviorMetaLabels([levelLabel, topicLabel, partLabel]);
        return `
          <tr>
            <td><span class="rank">${vipSessionPagination.startIndex + index + 1}</span></td>
            <td>
              <strong>${escapeHtml(session.fullName || session.email || "\u2014")}</strong>
              <small>${escapeHtml(session.email || "")}</small>
            </td>
            <td>${escapeHtml(session.vipPlanId || "VIP")}</td>
            <td>${escapeHtml(getLearningBehaviorModuleLabel(session.module, isVi))}</td>
            <td>
              <strong>${escapeHtml(contentTitle)}</strong>
              <small>${escapeHtml(contentMeta)}</small>
            </td>
            <td>${escapeHtml(formatDateTime(session.startedAt || session.lastSeenAt))}</td>
            <td>${escapeHtml(formatDateTime(session.lastSeenAt))}</td>
            <td>${escapeHtml(formatAnalyticsDurationSeconds(session.durationSeconds))}</td>
            <td>${session.isActive ? (isVi ? "\u0110ang h\u1ecdc" : "\u6b63\u5728\u5b66\u4e60") : (isVi ? "\u0110\u00e3 r\u1eddi" : "\u5df2\u79bb\u5f00")}</td>
          </tr>`;
      }).join("")
      : `<tr><td colspan="9" class="admin-empty">${isVi ? "Ch\u01b0a c\u00f3 phi\u00ean h\u1ecdc VIP trong kho\u1ea3ng ng\u00e0y n\u00e0y." : "\u6240\u9009\u8303\u56f4\u6682\u65e0 VIP \u5b66\u4e60\u4f1a\u8bdd\u3002"}</td></tr>`;

    const vipSummaryCardsHTML = [
      { label: isVi ? "VIP \u0111ang h\u1ecdc" : "\u6b63\u5728\u5b66\u4e60\u7684 VIP", value: formatAnalyticsNumber(activeVipSessions), hint: isVi ? "phi\u00ean tr\u1ef1c ti\u1ebfp" : "\u5b9e\u65f6\u5b66\u4e60\u4f1a\u8bdd" },
      { label: isVi ? "T\u1ed5ng phi\u00ean VIP" : "VIP \u5b66\u4e60\u4f1a\u8bdd", value: formatAnalyticsNumber(totalVipSessions), hint: isVi ? "trong kho\u1ea3ng l\u1ecdc" : "\u6309\u7b5b\u9009\u8303\u56f4" },
      { label: isVi ? "T\u1ed5ng th\u1eddi gian" : "\u603b\u5b66\u4e60\u65f6\u957f", value: formatAnalyticsDurationSeconds(totalVipStudySeconds), hint: isVi ? "th\u1eddi gian h\u1ecdc VIP" : "VIP \u5b66\u4e60\u65f6\u957f" },
      { label: isVi ? "Ng\u01b0\u1eddi d\u00f9ng VIP ho\u1ea1t \u0111\u1ed9ng" : "\u6d3b\u8dc3 VIP \u7528\u6237", value: formatAnalyticsNumber(vipUserSummary.length), hint: activeVipUsers ? `${formatAnalyticsNumber(activeVipUsers)} ${isVi ? "\u0111ang h\u1ecdc" : "\u6b63\u5728\u5b66\u4e60"}` : (isVi ? "theo kho\u1ea3ng l\u1ecdc" : "\u6309\u7b5b\u9009\u8303\u56f4") },
    ].map((card) => `
      <article class="admin-analytics-summary-card">
        <span>${escapeHtml(card.label)}</span>
        <strong>${escapeHtml(card.value)}</strong>
        <small>${escapeHtml(card.hint)}</small>
      </article>
    `).join("");

    const vipModuleSummaryHTML = vipModuleSummary.length
      ? vipModuleSummary.map((row) => `
          <tr>
            <td>${escapeHtml(getLearningBehaviorModuleLabel(row.module, isVi))}</td>
            <td>${formatAnalyticsNumber(row.vipUsers)}</td>
            <td>${formatAnalyticsNumber(row.sessions)}</td>
            <td>${formatAnalyticsDurationSeconds(row.totalSeconds)}</td>
            <td>${formatAnalyticsDurationSeconds(row.avgSeconds)}</td>
            <td>${formatAnalyticsNumber(row.activeSessions)}</td>
          </tr>`).join("")
      : `<tr><td colspan="6" class="admin-empty">${isVi ? "Ch\u01b0a c\u00f3 t\u1ed5ng h\u1ee3p theo ph\u00e2n h\u1ec7." : "\u6682\u65e0\u6a21\u5757\u6c47\u603b\u3002"}</td></tr>`;

    const vipContentSummaryHTML = vipContentSummary.length
      ? vipContentSummaryRows.map((row, index) => {
        const levelLabel = getLearningBehaviorLevelLabel(row, isVi);
        const topicLabel = getLearningBehaviorTopicLabel(row, isVi);
        const contentTitle = getLearningBehaviorContentTitle(row, isVi);
        const partLabel = getLearningBehaviorPartLabel(row.questionId, row.module, isVi);
        return `
          <tr>
            <td><span class="rank">${vipContentSummaryPagination.startIndex + index + 1}</span></td>
            <td>${escapeHtml(getLearningBehaviorModuleLabel(row.module, isVi))}</td>
            <td>
              <strong>${escapeHtml(levelLabel)}</strong>
              <small>${escapeHtml(topicLabel)}</small>
            </td>
            <td>
              <strong>${escapeHtml(contentTitle)}</strong>
              <small>${escapeHtml(partLabel)}</small>
            </td>
            <td>${formatAnalyticsNumber(row.vipUsers)}</td>
            <td>${formatAnalyticsNumber(row.sessions)}</td>
            <td>${formatAnalyticsDurationSeconds(row.totalSeconds)}</td>
            <td>${formatAnalyticsDurationSeconds(row.avgSeconds)}</td>
            <td>${formatAnalyticsNumber(row.activeSessions)}</td>
          </tr>`;
      }).join("")
      : `<tr><td colspan="9" class="admin-empty">${isVi ? "Ch\u01b0a c\u00f3 t\u1ed5ng h\u1ee3p chi ti\u1ebft theo b\u00e0i/ph\u1ea7n." : "\u6682\u65e0\u6309\u8bfe\u7a0b/\u90e8\u5206\u7684\u6c47\u603b\u3002"}</td></tr>`;

    const vipHighEngagementHTML = vipHighEngagementRows.length
      ? vipHighEngagementPageRows.map((row, index) => `
          <tr>
            <td><span class="rank">${vipHighEngagementPagination.startIndex + index + 1}</span></td>
            <td>${escapeHtml(getLearningBehaviorModuleLabel(row.module, isVi))}</td>
            <td>
              <strong>${escapeHtml(row.scope || "\u2014")}</strong>
              <small>${escapeHtml(row.detail || "\u2014")}</small>
            </td>
            <td>${formatAnalyticsNumber(row.sessions)}</td>
            <td>${formatAnalyticsNumber(row.vipUsers)}</td>
            <td>${formatAnalyticsDurationSeconds(row.totalSeconds)}</td>
            <td>${formatAnalyticsDurationSeconds(row.avgSeconds)}</td>
            <td>${formatAnalyticsNumber(row.activeSessions)}</td>
          </tr>`).join("")
      : `<tr><td colspan="8" class="admin-empty">${isVi ? "Ch\u01b0a c\u00f3 catalog \u0111\u1ec3 so s\u00e1nh m\u1ee9c nhi\u1ec1u ng\u01b0\u1eddi v\u00e0o." : "\u6682\u65e0\u53ef\u6bd4\u8f83\u7684\u76ee\u5f55\u6570\u636e\u3002"}</td></tr>`;

    const vipUserSummaryHTML = vipUserSummary.length
      ? vipUserSummary.map((row, index) => `
          <tr>
            <td><span class="rank">${index + 1}</span></td>
            <td>
              <strong>${escapeHtml(row.fullName || row.email || "\u2014")}</strong>
              <small>${escapeHtml(row.email || "")}</small>
            </td>
            <td>${escapeHtml(row.vipPlanId || "VIP")}</td>
            <td>${formatAnalyticsNumber(row.sessions)}</td>
            <td>${formatAnalyticsNumber(row.modules)}</td>
            <td>${formatAnalyticsDurationSeconds(row.totalSeconds)}</td>
            <td>${formatAnalyticsDurationSeconds(row.avgSeconds)}</td>
            <td>${escapeHtml(formatDateTime(row.lastSeenAt))}</td>
            <td>${row.isActive ? (isVi ? "\u0110ang h\u1ecdc" : "\u6b63\u5728\u5b66\u4e60") : (isVi ? "\u0110\u00e3 r\u1eddi" : "\u5df2\u79bb\u5f00")}</td>
          </tr>`).join("")
      : `<tr><td colspan="9" class="admin-empty">${isVi ? "Ch\u01b0a c\u00f3 t\u1ed5ng h\u1ee3p theo ng\u01b0\u1eddi d\u00f9ng VIP." : "\u6682\u65e0 VIP \u7528\u6237\u6c47\u603b\u3002"}</td></tr>`;

    bodyHTML = `
      <div class="admin-analytics-grid">
        <div class="admin-analytics-chart">
          <h3>${isVi ? "Xu hướng người học mỗi ngày" : "每日学习人数趋势"}</h3>
          <div class="admin-analytics-metric">${formatAnalyticsNumber(learnersPeak)}</div>
          ${renderAnalyticsLineChart(dailyLearners, "#0ea5e9", { unitLabel: isVi ? "người" : "用户" })}
        </div>
        <div class="admin-analytics-chart">
          <h3>${isVi ? "Xu hướng lượt làm bài mỗi ngày" : "每日答题次数趋势"}</h3>
          <div class="admin-analytics-metric">${formatAnalyticsNumber(attemptsTotal)}</div>
          ${renderAnalyticsLineChart(dailyAttempts, "#059669", { unitLabel: isVi ? "lượt" : "次" })}
        </div>
        <div class="admin-analytics-block admin-analytics-block--wide">
          <h3>${isVi ? "Theo d\u00f5i h\u00e0nh vi h\u1ecdc t\u1eadp VIP" : "VIP \u5b66\u4e60\u884c\u4e3a\u8ddf\u8e2a"}</h3>
          <p class="admin-analytics-funnel-note">
            ${isVi
              ? `${formatAnalyticsNumber(activeVipSessions)} VIP \u0111ang h\u1ecdc \u00b7 t\u1ed5ng ${escapeHtml(formatAnalyticsDurationSeconds(totalVipStudySeconds))} trong kho\u1ea3ng l\u1ecdc`
              : `${formatAnalyticsNumber(activeVipSessions)} \u4e2a VIP \u6b63\u5728\u5b66\u4e60 \u00b7 \u603b\u8ba1 ${escapeHtml(formatAnalyticsDurationSeconds(totalVipStudySeconds))}`}
          </p>
          <div class="admin-analytics-summary-grid">${vipSummaryCardsHTML}</div>
          <div class="admin-analytics-behavior-summaries">
            <section>
              <h4>${isVi ? "T\u1ed5ng h\u1ee3p theo ph\u00e2n h\u1ec7" : "\u6309\u6a21\u5757\u6c47\u603b"}</h4>
              <table class="admin-analytics-table admin-analytics-table--compact">
                <thead>
                  <tr>
                    <th>${isVi ? "Ph\u00e2n h\u1ec7" : "\u6a21\u5757"}</th>
                    <th>${isVi ? "VIP" : "VIP"}</th>
                    <th>${isVi ? "Phi\u00ean" : "\u4f1a\u8bdd"}</th>
                    <th>${isVi ? "T\u1ed5ng" : "\u603b\u8ba1"}</th>
                    <th>${isVi ? "TB" : "\u5e73\u5747"}</th>
                    <th>${isVi ? "\u0110ang h\u1ecdc" : "\u6b63\u5728\u5b66\u4e60"}</th>
                  </tr>
                </thead>
                <tbody>${vipModuleSummaryHTML}</tbody>
              </table>
            </section>
            <section>
              <h4>${isVi ? "T\u1ed5ng h\u1ee3p theo ng\u01b0\u1eddi d\u00f9ng VIP" : "\u6309 VIP \u7528\u6237\u6c47\u603b"}</h4>
              <table class="admin-analytics-table admin-analytics-table--compact">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>${isVi ? "Ng\u01b0\u1eddi d\u00f9ng" : "\u7528\u6237"}</th>
                    <th>VIP</th>
                    <th>${isVi ? "Phi\u00ean" : "\u4f1a\u8bdd"}</th>
                    <th>${isVi ? "S\u1ed1 ph\u00e2n h\u1ec7" : "\u6a21\u5757\u6570"}</th>
                    <th>${isVi ? "T\u1ed5ng" : "\u603b\u8ba1"}</th>
                    <th>${isVi ? "TB" : "\u5e73\u5747"}</th>
                    <th>${isVi ? "L\u1ea7n cu\u1ed1i" : "\u6700\u540e\u6d3b\u52a8"}</th>
                    <th>${isVi ? "Tr\u1ea1ng th\u00e1i" : "\u72b6\u6001"}</th>
                  </tr>
                </thead>
                <tbody>${vipUserSummaryHTML}</tbody>
              </table>
            </section>
          </div>
          <h4>${isVi ? "T\u1ed5ng h\u1ee3p chi ti\u1ebft theo b\u00e0i/ph\u1ea7n" : "\u6309\u8bfe\u7a0b/\u90e8\u5206\u6c47\u603b"}</h4>
          <table class="admin-analytics-table admin-analytics-table--compact">
            <thead>
              <tr>
                <th>#</th>
                <th>${isVi ? "Ph\u00e2n h\u1ec7" : "\u6a21\u5757"}</th>
                <th>${isVi ? "C\u1ea5p / ch\u1ee7 \u0111\u1ec1" : "\u7ea7\u522b / \u4e3b\u9898"}</th>
                <th>${isVi ? "B\u00e0i / ph\u1ea7n" : "\u8bfe\u7a0b / \u90e8\u5206"}</th>
                <th>VIP</th>
                <th>${isVi ? "Phi\u00ean" : "\u4f1a\u8bdd"}</th>
                <th>${isVi ? "T\u1ed5ng" : "\u603b\u8ba1"}</th>
                <th>${isVi ? "TB" : "\u5e73\u5747"}</th>
                <th>${isVi ? "\u0110ang h\u1ecdc" : "\u6b63\u5728\u5b66\u4e60"}</th>
              </tr>
            </thead>
            <tbody>${vipContentSummaryHTML}</tbody>
          </table>
          ${vipContentSummaryPaginationHTML}
          <h4>${isVi ? "C\u1ea5p / ch\u1ee7 \u0111\u1ec1 nhi\u1ec1u ng\u01b0\u1eddi v\u00e0o" : "\u8f83\u591a\u8bbf\u95ee\u7684\u7ea7\u522b / \u4e3b\u9898"}</h4>
          <p class="admin-analytics-funnel-note">${isVi ? "D\u1ef1a tr\u00ean t\u1ed5ng h\u1ee3p chi ti\u1ebft trong kho\u1ea3ng ng\u00e0y \u0111ang l\u1ecdc; d\u00f2ng n\u00e0o c\u00e0ng nhi\u1ec1u phi\u00ean c\u00e0ng \u0111ang \u0111\u01b0\u1ee3c VIP quan t\u00e2m." : "\u57fa\u4e8e\u5f53\u524d\u7b5b\u9009\u8303\u56f4\u7684\u8be6\u7ec6\u6c47\u603b\uff0c\u4f1a\u8bdd\u8d8a\u591a\u4ee3\u8868 VIP \u8d8a\u5173\u6ce8\u3002"}</p>
          <table class="admin-analytics-table admin-analytics-table--compact">
            <thead>
              <tr>
                <th>#</th>
                <th>${isVi ? "Ph\u00e2n h\u1ec7" : "\u6a21\u5757"}</th>
                <th>${isVi ? "C\u1ea5p / ch\u1ee7 \u0111\u1ec1" : "\u7ea7\u522b / \u4e3b\u9898"}</th>
                <th>${isVi ? "Phi\u00ean" : "\u4f1a\u8bdd"}</th>
                <th>VIP</th>
                <th>${isVi ? "T\u1ed5ng" : "\u603b\u8ba1"}</th>
                <th>${isVi ? "TB" : "\u5e73\u5747"}</th>
                <th>${isVi ? "\u0110ang h\u1ecdc" : "\u6b63\u5728\u5b66\u4e60"}</th>
              </tr>
            </thead>
            <tbody>${vipHighEngagementHTML}</tbody>
          </table>
          ${vipHighEngagementPaginationHTML}
          <h4>${isVi ? "Chi ti\u1ebft phi\u00ean h\u1ecdc VIP" : "VIP \u5b66\u4e60\u4f1a\u8bdd\u660e\u7ec6"}</h4>
          <table class="admin-analytics-table">
            <thead>
              <tr>
                <th>#</th>
                <th>${isVi ? "Ng\u01b0\u1eddi d\u00f9ng" : "\u7528\u6237"}</th>
                <th>VIP</th>
                <th>${isVi ? "Ph\u00e2n h\u1ec7" : "\u6a21\u5757"}</th>
                <th>${isVi ? "B\u00e0i / ph\u1ea7n" : "\u8bfe\u7a0b / \u90e8\u5206"}</th>
                <th>${isVi ? "B\u1eaft \u0111\u1ea7u" : "\u5f00\u59cb"}</th>
                <th>${isVi ? "L\u1ea7n cu\u1ed1i" : "\u6700\u540e\u6d3b\u52a8"}</th>
                <th>${isVi ? "Th\u1eddi gian" : "\u65f6\u957f"}</th>
                <th>${isVi ? "Tr\u1ea1ng th\u00e1i" : "\u72b6\u6001"}</th>
              </tr>
            </thead>
            <tbody>${vipBehaviorRowsHTML}</tbody>
          </table>
          ${vipSessionPaginationHTML}
        </div>
      </div>`;
  }

  return `
    <section class="admin-analytics-panel">
      <header class="admin-analytics-head">
        <div>
          <h2>${isVi ? "Phân tích học tập" : "学习分析"}</h2>
          <p>${isVi ? "Theo dõi xu hướng học tập, kênh nguồn và chuyển đổi VIP." : "跟踪学习趋势、流量来源和 VIP 转化。"}</p>
        </div>
        ${renderAdminAnalyticsRangeControl()}
      </header>
      ${bodyHTML}
    </section>
  `;
}

async function loadAdminAnalytics() {
  const isVi = state.lang === "vi";
  if (!canAccessAdminConsole()) {
    state.adminAnalyticsError = isVi ? "Vui lòng đăng nhập bằng tài khoản admin." : "请使用管理员账户登录。";
    state.adminAnalytics = null;
    renderAdmin();
    return;
  }

  if (!state.adminAnalyticsFrom || !state.adminAnalyticsTo) {
    const preset = analyticsPresetRange("last30");
    state.adminAnalyticsFrom = analyticsToYmd(preset.from);
    state.adminAnalyticsTo = analyticsToYmd(preset.to);
  }

  state.adminVipContentSummaryPage = 1;
  state.adminVipSessionPage = 1;
  state.adminVipHighEngagementPage = 1;
  state.adminAnalyticsLoading = true;
  state.adminAnalyticsError = "";
  renderAdmin();
  try {
    const params = new URLSearchParams({
      from: state.adminAnalyticsFrom,
      to: state.adminAnalyticsTo,
      live: "1",
    });
    const data = await apiRequest(`/api/admin/analytics/overview?${params.toString()}`, {
      method: "GET",
      headers: {
        "X-Admin-User-Id": getAdminUserId(),
      },
    });
    state.adminAnalytics = data;
  } catch (error) {
    state.adminAnalytics = null;
    state.adminAnalyticsError = error.message || (isVi ? "Không thể tải dữ liệu phân tích." : "无法加载分析数据。");
  }
  state.adminAnalyticsLoading = false;
  renderAdmin();
}

function ensureAdminVipRange() {
  state.adminVipFrom = analyticsNormalizeDateInput(state.adminVipFrom) || state.adminVipFrom;
  state.adminVipTo = analyticsNormalizeDateInput(state.adminVipTo) || state.adminVipTo;
  if (!state.adminVipFrom || !state.adminVipTo) {
    const preset = analyticsPresetRange("last30");
    state.adminVipFrom = analyticsToYmd(preset.from);
    state.adminVipTo = analyticsToYmd(preset.to);
  }
  if (state.adminVipFrom && state.adminVipTo && state.adminVipFrom > state.adminVipTo) {
    [state.adminVipFrom, state.adminVipTo] = [state.adminVipTo, state.adminVipFrom];
  }
}

function getActiveAdminVipPreset() {
  for (const preset of ANALYTICS_PRESETS) {
    const range = analyticsPresetRange(preset.id);
    if (analyticsToYmd(range.from) === state.adminVipFrom && analyticsToYmd(range.to) === state.adminVipTo) {
      return preset.id;
    }
  }
  return "";
}

function renderAdminVipCalendarMonth(year, month) {
  const draftFrom = state.adminVipDraftFrom;
  const draftTo = state.adminVipDraftTo;
  const isVi = state.lang === "vi";
  const first = new Date(year, month, 1);
  const startDow = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weekdays = isVi ? ["T2", "T3", "T4", "T5", "T6", "T7", "CN"] : ["一", "二", "三", "四", "五", "六", "日"];

  let cells = "";
  for (let i = 0; i < startDow; i += 1) cells += `<span class="cal-cell cal-empty"></span>`;
  for (let day = 1; day <= daysInMonth; day += 1) {
    const ymd = analyticsToYmd(new Date(year, month, day));
    const hasRange = draftFrom && draftTo;
    const inRange = hasRange && ymd >= draftFrom && ymd <= draftTo;
    const isEndpoint = ymd === draftFrom || ymd === draftTo;
    const cls = ["cal-cell", "cal-day", inRange ? "in-range" : "", isEndpoint ? "selected" : ""].filter(Boolean).join(" ");
    cells += `<button type="button" class="${cls}" data-admin-vip-day="${ymd}">${day}</button>`;
  }
  return `
    <div class="admin-analytics-cal-month">
      <div class="cal-head">${isVi ? `Tháng ${month + 1} ${year}` : `${year}年${month + 1}月`}</div>
      <div class="cal-weekdays">${weekdays.map((w) => `<span>${w}</span>`).join("")}</div>
      <div class="cal-grid">${cells}</div>
    </div>`;
}

function renderAdminVipRangeControl() {
  const triggerLabel = analyticsRangeLabel(state.adminVipFrom, state.adminVipTo);
  if (!state.adminVipPickerOpen) {
    return `
      <div class="admin-vip-range admin-vip-range--picker">
        <div class="admin-analytics-daterange admin-vip-daterange">
          <button id="adminVipRangeTrigger" class="admin-analytics-range-trigger admin-vip-range-trigger" type="button">
            <span class="range-icon">&#128197;</span><span>${escapeHtml(triggerLabel)}</span><span class="range-caret">▾</span>
          </button>
        </div>
      </div>`;
  }

  const activePreset = getActiveAdminVipPreset();
  const calMonthDate = analyticsParseYmd(`${state.adminVipCalMonth}-01`) || analyticsTodayLocal();
  const leftYear = calMonthDate.getFullYear();
  const leftMonth = calMonthDate.getMonth();
  const rightDate = new Date(leftYear, leftMonth + 1, 1);
  const isVi = state.lang === "vi";
  const presetsHTML = ANALYTICS_PRESETS
    .map((preset) => `<button type="button" data-admin-vip-preset="${preset.id}" class="${activePreset === preset.id ? "active" : ""}">${isVi ? preset.label : preset.labelZh}</button>`)
    .join("");

  return `
    <div class="admin-vip-range admin-vip-range--picker">
      <div class="admin-analytics-daterange admin-vip-daterange">
        <button id="adminVipRangeTrigger" class="admin-analytics-range-trigger admin-vip-range-trigger open" type="button">
          <span class="range-icon">&#128197;</span><span>${escapeHtml(triggerLabel)}</span><span class="range-caret">▴</span>
        </button>
        <div class="admin-analytics-range-backdrop" id="adminVipRangeBackdrop"></div>
        <div class="admin-analytics-range-pop admin-vip-range-pop">
          <div class="admin-analytics-presets">${presetsHTML}</div>
          <div class="admin-analytics-cal">
            <div class="cal-nav">
              <button type="button" data-admin-vip-cal-nav="-1" aria-label="${isVi ? "Tháng trước" : "上个月"}">‹</button>
              <button type="button" data-admin-vip-cal-nav="1" aria-label="${isVi ? "Tháng sau" : "下个月"}">›</button>
            </div>
            <div class="cal-months">
              ${renderAdminVipCalendarMonth(leftYear, leftMonth)}
              ${renderAdminVipCalendarMonth(rightDate.getFullYear(), rightDate.getMonth())}
            </div>
            <div class="admin-analytics-range-footer">
              <div class="admin-analytics-range-summary">
                <strong>${escapeHtml(analyticsRangeLabel(state.adminVipDraftFrom, state.adminVipDraftTo))}</strong>
                <small>${state.lang === "vi" ? "Ngày hiển thị theo Giờ TP Hồ Chí Minh" : "日期按胡志明市时间显示"}</small>
              </div>
              <div class="admin-analytics-range-actions">
                <button type="button" id="adminVipRangeCancel">${state.lang === "vi" ? "Hủy" : "取消"}</button>
                <button type="button" id="adminVipRangeApply" class="primary" ${state.adminVipDraftFrom && state.adminVipDraftTo ? "" : "disabled"}>${state.lang === "vi" ? "Cập nhật" : "更新"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function formatAdminVipMoney(value) {
  return `${Number(value || 0).toLocaleString("vi-VN")} đ`;
}

function formatAdminVipDate(value) {
  return formatAdminRegistrationTimeOnly(value, state.lang === "vi") || "—";
}

function getAdminVipPlanLabel(planId, fallback = "") {
  const id = String(planId || "").toLowerCase();
  if (id === "3d" || id === "7d") return state.lang === "vi" ? "VIP 3 ngày" : "3天 VIP";
  if (id === "30d") return state.lang === "vi" ? "VIP 30 ngày" : "30天 VIP";
  if (id === "90d" || id === "3m") return state.lang === "vi" ? "VIP 3 tháng" : "90天 VIP";
  return fallback || planId || "VIP";
}

function getAdminVipUserPlanMetric(user, planId) {
  if (!user) return { activations: 0, revenue: 0 };
  if (planId === "all") {
    return {
      activations: Number(user.totalActivations || 0),
      revenue: Number(user.totalRevenue || 0),
    };
  }
  const plans = user.plans || {};
  const normalizedPlanId = planId === "7d" ? "3d" : planId;
  const plan = plans[normalizedPlanId] || (normalizedPlanId === "3d" ? plans["7d"] : null) || {};
  return {
    activations: Number(plan.activations || 0),
    revenue: Number(plan.revenue || 0),
  };
}

function renderAdminVipUserPagination(totalItems, totalPages, currentPage, pageSize, isVi) {
  if (!totalItems) return "";
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(totalItems, currentPage * pageSize);
  const pages = [];
  const addPage = (value) => {
    if (value >= 1 && value <= totalPages && !pages.includes(value)) pages.push(value);
  };
  addPage(1);
  addPage(currentPage - 1);
  addPage(currentPage);
  addPage(currentPage + 1);
  addPage(totalPages);
  pages.sort((a, b) => a - b);

  const pageButtons = [];
  let previousPage = 0;
  for (const page of pages) {
    if (previousPage && page - previousPage > 1) {
      pageButtons.push(`<span class="admin-vip-page-ellipsis">…</span>`);
    }
    pageButtons.push(`
      <button type="button" class="${page === currentPage ? "active" : ""}" data-admin-vip-user-page="${page}" data-admin-vip-total-pages="${totalPages}" ${page === currentPage ? "aria-current=\"page\"" : ""}>
        ${page}
      </button>`);
    previousPage = page;
  }

  return `
    <div class="admin-vip-pagination">
      <span>${isVi ? "Hiển thị" : "显示"} ${formatAnalyticsNumber(startItem)}–${formatAnalyticsNumber(endItem)} / ${formatAnalyticsNumber(totalItems)} ${isVi ? "người dùng" : "用户"}</span>
      ${totalPages > 1 ? `
        <div class="admin-vip-pagination-actions">
          <button type="button" data-admin-vip-user-page="prev" data-admin-vip-total-pages="${totalPages}" ${currentPage <= 1 ? "disabled" : ""}>‹</button>
          ${pageButtons.join("")}
          <button type="button" data-admin-vip-user-page="next" data-admin-vip-total-pages="${totalPages}" ${currentPage >= totalPages ? "disabled" : ""}>›</button>
        </div>` : ""}
    </div>`;
}

function renderAdminVipPanelHTML() {
  ensureAdminVipRange();
  const isVi = state.lang === "vi";
  const data = state.adminVip || {};
  const selectedPlan = state.adminVipPlanFilter === "7d" ? "3d" : (state.adminVipPlanFilter || "all");
  const planBreakdown = Array.isArray(data.planBreakdown) ? data.planBreakdown : [];
  const planBreakdownById = new Map();
  planBreakdown.forEach((plan) => {
    const id = String(plan.planId || "").toLowerCase();
    const normalizedId = id === "7d" ? "3d" : id;
    if (!normalizedId) return;
    const current = planBreakdownById.get(normalizedId) || { planId: normalizedId, planName: "", activations: 0, revenue: 0 };
    current.planName = current.planName || plan.planName || "";
    current.activations += Number(plan.activations || 0);
    current.revenue += Number(plan.revenue || 0);
    planBreakdownById.set(normalizedId, current);
  });
  const planIds = Array.from(new Set(["3d", "30d", "90d", ...planBreakdownById.keys()]));
  const planTabs = [
    { id: "all", label: isVi ? "Tất cả" : "全部", activations: data.vipActivations || 0, revenue: data.revenue || 0 },
    ...planIds.map((planId) => {
      const plan = planBreakdownById.get(planId) || {};
      return {
        id: planId,
        label: getAdminVipPlanLabel(planId, plan.planName),
        activations: Number(plan.activations || 0),
        revenue: Number(plan.revenue || 0),
      };
    }),
  ];
  const users = (Array.isArray(data.users) ? data.users : [])
    .map((user) => ({ user, metric: getAdminVipUserPlanMetric(user, selectedPlan) }))
    .filter((entry) => entry.metric.activations > 0)
    .sort((a, b) => b.metric.revenue - a.metric.revenue || b.metric.activations - a.metric.activations);
  const selectedPlanInfo = planTabs.find((plan) => plan.id === selectedPlan) || planTabs[0];
  const dailyRevenue = Array.isArray(data.dailyRevenue) ? data.dailyRevenue : [];
  const registeredUsers = Number(data.registeredUsers ?? data.registeredCount ?? 0);
  const vipUserPageSize = Math.max(1, Number(state.adminVipUserPageSize || 8));
  const vipUserTotalPages = Math.max(1, Math.ceil(users.length / vipUserPageSize));
  const vipUserPage = Math.min(Math.max(1, Number(state.adminVipUserPage || 1)), vipUserTotalPages);
  state.adminVipUserPage = vipUserPage;
  const pagedUsers = users.slice((vipUserPage - 1) * vipUserPageSize, vipUserPage * vipUserPageSize);

  let bodyHTML = "";
  if (state.adminVipLoading) {
    bodyHTML = `<div class="admin-vip-status">${isVi ? "Đang tải dữ liệu VIP..." : "正在加载 VIP 数据..."}</div>`;
  } else if (state.adminVipError) {
    bodyHTML = `<div class="admin-vip-status error">${escapeHtml(state.adminVipError)}</div>`;
  } else if (!state.adminVip) {
    bodyHTML = `<div class="admin-vip-status">${isVi ? "Chưa có dữ liệu VIP." : "暂无 VIP 数据。"}</div>`;
  } else {
    const rows = pagedUsers.map(({ user, metric }) => `
      <tr>
        <td><strong>${escapeHtml(user.fullName || user.email || "User")}</strong><small>${escapeHtml(user.email || user.userId || "")}</small></td>
        <td>${escapeHtml(selectedPlanInfo.label)}<small>${isVi ? "Gói đang xem" : "当前套餐"}</small></td>
        <td><b>${formatAnalyticsNumber(metric.activations)}</b><small>${isVi ? "lượt kích hoạt" : "次开通"}</small></td>
        <td><b>${escapeHtml(formatAdminVipMoney(metric.revenue))}</b><small>${isVi ? "số tiền bỏ ra" : "消费金额"}</small></td>
        <td>${escapeHtml(formatAdminVipDate(user.latestPaidAt))}</td>
        <td>${user.isPremium ? `<span class="admin-vip-user-state active">VIP</span>` : `<span class="admin-vip-user-state inactive">${isVi ? "Hết hạn" : "已过期"}</span>`}<small>${escapeHtml(user.premiumUntil ? formatAdminDate(user.premiumUntil) : "N/A")}</small></td>
      </tr>
    `).join("");
    const paginationHTML = renderAdminVipUserPagination(users.length, vipUserTotalPages, vipUserPage, vipUserPageSize, isVi);

    bodyHTML = `
      <div class="admin-vip-summary">
        <article class="admin-vip-revenue-card">
          <span>${isVi ? "Doanh thu" : "收入"}</span>
          <strong>${escapeHtml(formatAdminVipMoney(data.revenue))}</strong>
          <small>${escapeHtml(analyticsRangeLabel(state.adminVipFrom, state.adminVipTo))}</small>
        </article>
        <article><span>${isVi ? "Kích hoạt VIP" : "VIP 开通"}</span><strong>${formatAnalyticsNumber(data.vipActivations || 0)}</strong><small>${isVi ? "đơn đã thanh toán" : "已支付订单"}</small></article>
        <article><span>${isVi ? "Lượt mở popup VIP" : "VIP 弹窗次数"}</span><strong>${formatAnalyticsNumber(data.vipModalOpens || 0)}</strong><small>${isVi ? "theo ngày lọc" : "按日期筛选"}</small></article>
      </div>
      <div class="admin-vip-plan-tabs">
        ${planTabs.map((plan) => `
          <button type="button" class="${selectedPlan === plan.id ? "active" : ""}" data-admin-vip-plan-filter="${escapeAttr(plan.id)}">
            <strong>${escapeHtml(plan.label)}</strong>
            <span>${formatAnalyticsNumber(plan.activations)} · ${escapeHtml(formatAdminVipMoney(plan.revenue))}</span>
          </button>
        `).join("")}
        <article class="admin-vip-registration-card">
          <strong>${isVi ? "Số lượng người đăng kí" : "注册用户数"}</strong>
          <span>${formatAnalyticsNumber(registeredUsers)} · ${isVi ? "người đăng kí trong khoảng này" : "所选日期注册用户"}</span>
        </article>
      </div>
      <div class="admin-vip-layout">
        <section class="admin-vip-chart">
          <h3>${isVi ? "Doanh thu theo ngày" : "每日收入"}</h3>
          <div class="admin-analytics-metric">${escapeHtml(formatAdminVipMoney(selectedPlanInfo.revenue))}</div>
          ${renderAnalyticsLineChart(dailyRevenue, "#0f766e", { unitLabel: "VND" })}
        </section>
        <section class="admin-vip-list">
          <h3>${isVi ? "Danh sách kích hoạt VIP" : "VIP 开通列表"}</h3>
          <div class="admin-table-wrap">
            <table class="admin-vip-table">
              <thead>
                <tr>
                  <th>${isVi ? "Người dùng" : "用户"}</th>
                  <th>${isVi ? "Gói" : "套餐"}</th>
                  <th>${isVi ? "Số lần mua" : "购买次数"}</th>
                  <th>${isVi ? "Số tiền" : "金额"}</th>
                  <th>${isVi ? "Gần nhất" : "最近"}</th>
                  <th>${isVi ? "Trạng thái" : "状态"}</th>
                </tr>
              </thead>
              <tbody>${rows || `<tr><td colspan="6" class="admin-empty">${isVi ? "Chưa có lượt kích hoạt VIP trong khoảng ngày này." : "该日期范围内暂无 VIP 开通。"}</td></tr>`}</tbody>
            </table>
          </div>
          ${paginationHTML}
        </section>
      </div>`;
  }

  return `
    <section class="admin-vip-panel">
      <header class="admin-vip-head">
        <div>
          <h2>${isVi ? "Quản lí VIP" : "VIP 管理"}</h2>
          <p>${isVi ? "Theo dõi popup VIP, lượt kích hoạt, doanh thu và người dùng đã mua theo từng gói." : "查看 VIP 弹窗、开通、收入和按套餐购买的用户。"}</p>
        </div>
        ${renderAdminVipRangeControl()}
      </header>
      ${bodyHTML}
    </section>
  `;
}

async function loadAdminVipManagement() {
  const isVi = state.lang === "vi";
  if (!canAccessAdminConsole()) {
    state.adminVipError = isVi ? "Vui lòng đăng nhập bằng tài khoản admin." : "请使用管理员账户登录。";
    state.adminVip = null;
    renderAdmin();
    return;
  }
  ensureAdminVipRange();
  state.adminVipLoading = true;
  state.adminVipError = "";
  renderAdmin();
  try {
    const params = new URLSearchParams({
      from: state.adminVipFrom,
      to: state.adminVipTo,
    });
    const data = await apiRequest(`/api/admin/vip/overview?${params.toString()}`, {
      method: "GET",
      headers: {
        "X-Admin-User-Id": getAdminUserId(),
      },
    });
    if (data?.meta?.from && data?.meta?.to) {
      state.adminVipFrom = analyticsNormalizeDateInput(data.meta.from) || state.adminVipFrom;
      state.adminVipTo = analyticsNormalizeDateInput(data.meta.to) || state.adminVipTo;
    }
    state.adminVip = data;
  } catch (error) {
    state.adminVip = null;
    state.adminVipError = error.message || (isVi ? "Không thể tải dữ liệu VIP." : "无法加载 VIP 数据。");
  }
  state.adminVipLoading = false;
  renderAdmin();
}

function slotPinyinLength(word) {
  return Math.max(1, normalizeLatin(word?.pinyin || "").length);
}

function slotProgressText(index, word) {
  const done = Math.min(state.slotProgress[index] || 0, slotPinyinLength(word));
  return `${done}/${slotPinyinLength(word)}`;
}

function slotProgressPercent(index, word) {
  return `${Math.min(100, Math.round(((state.slotProgress[index] || 0) / slotPinyinLength(word)) * 100))}%`;
}

function getDisplayPosLabel(rawPos) {
  const normalizedPos = normalizeSegmentPos(rawPos);
  const posKey = normalizedPos === "function" ? "function" : getTeachingPosLabelKey(normalizedPos);
  if (!posKey) return "";
  const beginnerPosText = {
    vi: {
      noun: "danh từ",
      verb: "động từ",
      adj: "tính từ",
      adv: "phó từ",
      prep: "giới từ",
      particle: "trợ từ",
      pron: "đại từ",
      "possessive-pron": "đại từ sở hữu",
      phrase: "từ vựng",
    },
    zh: {
      noun: "名词",
      verb: "动词",
      adj: "形容词",
      adv: "副词",
      prep: "介词",
      particle: "助词",
      pron: "代词",
      "possessive-pron": "物主代词",
      phrase: "生词",
    },
  };
  return beginnerPosText[state.lang]?.[posKey] || "";
}

function getSegmentTypeLabel(type = "") {
  const isVi = state.lang === "vi";
  const labels = {
    词: isVi ? "từ" : "词",
    短语: isVi ? "cụm" : "短语",
    功能词块: isVi ? "cụm chức năng" : "功能词块",
  };
  return labels[type] || type;
}

function isMatch(input, expectedPinyin, expectedHanzi) {
  return (
    normalizeLatin(input) === normalizeLatin(expectedPinyin) ||
    normalizeHanzi(input) === normalizeHanzi(expectedHanzi)
  );
}

function classifyActivePinyinInput(value, itemNow = currentItem()) {
  const input = String(value || "").trim();
  if (!input) return { kind: "empty" };
  const activeWord = itemNow.words[state.activeWord] || {};
  const normalizedInput = normalizeLatin(input);
  const normalizedTarget = normalizeLatin(activeWord.pinyin || activeWord.tone || "");
  const normalizedHanziInput = normalizeHanzi(input);
  const normalizedHanziTarget = normalizeHanzi(activeWord.text || "");

  if (normalizedHanziInput && normalizedHanziInput === normalizedHanziTarget) return { kind: "correct" };
  if (!normalizedInput || !normalizedTarget) return { kind: "wrong" };
  if (normalizedInput === normalizedTarget) return { kind: "correct" };
  if (normalizedTarget.startsWith(normalizedInput)) {
    return {
      kind: "progress",
      start: state.activeWord,
      inputLength: normalizedInput.length,
      totalLength: normalizedTarget.length,
    };
  }
  if (normalizedInput.startsWith(normalizedTarget)) return { kind: "extra" };
  return { kind: "wrong" };
}

function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `
    <span class="toast-icon">★</span>
    <span class="toast-text">${escapeAttr(message)}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 2200);
}


function slotPinyinLength(word) {
  return Math.max(1, normalizeLatin(word?.pinyin || "").length);
}

function slotProgressText(index, word) {
  const done = Math.min(state.slotProgress[index] || 0, slotPinyinLength(word));
  return `${done}/${slotPinyinLength(word)}`;
}

function slotProgressPercent(index, word) {
  return `${Math.min(100, Math.round(((state.slotProgress[index] || 0) / slotPinyinLength(word)) * 100))}%`;
}

function getDisplayPosLabel(rawPos) {
  const normalizedPos = normalizeSegmentPos(rawPos);
  const posKey = normalizedPos === "function" ? "function" : getTeachingPosLabelKey(normalizedPos);
  if (!posKey) return "";
  const beginnerPosText = {
    vi: {
      noun: "danh từ",
      verb: "động từ",
      adj: "tính từ",
      adv: "phó từ",
      prep: "giới từ",
      particle: "trợ từ",
      pron: "đại từ",
      "possessive-pron": "đại từ sở hữu",
      phrase: "từ vựng",
    },
    zh: {
      noun: "名词",
      verb: "动词",
      adj: "形容词",
      adv: "副词",
      prep: "介词",
      particle: "助词",
      pron: "代词",
      "possessive-pron": "物主代词",
      phrase: "生词",
    },
  };
  return beginnerPosText[state.lang]?.[posKey] || "";
}

function getSegmentTypeLabel(type = "") {
  const isVi = state.lang === "vi";
  const labels = {
    词: isVi ? "từ" : "词",
    短语: isVi ? "cụm" : "短语",
    功能词块: isVi ? "cụm chức năng" : "功能词块",
  };
  return labels[type] || type;
}

function isMatch(input, expectedPinyin, expectedHanzi) {
  return (
    normalizeLatin(input) === normalizeLatin(expectedPinyin) ||
    normalizeHanzi(input) === normalizeHanzi(expectedHanzi)
  );
}

function classifyActivePinyinInput(value, itemNow = currentItem()) {
  const input = String(value || "").trim();
  if (!input) return { kind: "empty" };
  const activeWord = itemNow.words[state.activeWord] || {};
  const normalizedInput = normalizeLatin(input);
  const normalizedTarget = normalizeLatin(activeWord.pinyin || activeWord.tone || "");
  const normalizedHanziInput = normalizeHanzi(input);
  const normalizedHanziTarget = normalizeHanzi(activeWord.text || "");

  if (normalizedHanziInput && normalizedHanziInput === normalizedHanziTarget) return { kind: "correct" };
  if (!normalizedInput || !normalizedTarget) return { kind: "wrong" };
  if (normalizedInput === normalizedTarget) return { kind: "correct" };
  if (normalizedTarget.startsWith(normalizedInput)) {
    return {
      kind: "progress",
      start: state.activeWord,
      inputLength: normalizedInput.length,
      totalLength: normalizedTarget.length,
    };
  }
  if (normalizedInput.startsWith(normalizedTarget)) return { kind: "extra" };
  return { kind: "wrong" };
}

function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `
    <span class="toast-icon">★</span>
    <span class="toast-text">${escapeAttr(message)}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 2200);
}

function saveState() {
  localStorage.setItem("v2-lang", state.lang);
  localStorage.setItem("v2-wrong", JSON.stringify([...state.wrong]));
  localStorage.setItem("v2-saved", JSON.stringify([...state.saved]));
  localStorage.setItem("v2-completed", JSON.stringify([...state.completed]));
  localStorage.setItem("v2-listening-saved", JSON.stringify([...state.listeningSaved]));
  localStorage.setItem("v2-activities", JSON.stringify((state.activities || []).slice(0, 30)));
  if (state.user) localStorage.setItem(STUDENT_USER_STORAGE_KEY, JSON.stringify(state.user));
  else removeAuthStorageKey(STUDENT_USER_STORAGE_KEY);
  if (state.adminUser) localStorage.setItem(ADMIN_USER_STORAGE_KEY, JSON.stringify(state.adminUser));
  else removeAuthStorageKey(ADMIN_USER_STORAGE_KEY);
  removeAuthStorageKey(STUDENT_TOKEN_STORAGE_KEY);
  removeAuthStorageKey(ADMIN_TOKEN_STORAGE_KEY);
  clearLegacyAuthStorage();
}

function activityUserKey() {
  return state.user?.id || state.user?.email || "guest";
}

function recordUserActivity(type, detail = {}) {
  const now = new Date().toISOString();
  const activity = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type,
    userKey: activityUserKey(),
    createdAt: now,
    ...detail,
  };
  state.activities = [activity, ...(state.activities || [])].slice(0, 30);
  saveState();
  refreshRecentActivitiesPanel();
  return activity;
}

function currentUserActivities(limit = 5) {
  const key = activityUserKey();
  return (state.activities || [])
    .filter((activity) => !activity.userKey || activity.userKey === key)
    .slice(0, limit);
}

function formatActivityTime(value) {
  const date = new Date(value || Date.now());
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(date);
}

function getActivityView(activity, isVi) {
  const labels = {
    profile: [isVi ? "Cập nhật hồ sơ" : "更新资料", isVi ? "Đã thay đổi thông tin cá nhân" : "个人信息已更新", "green"],
    avatar: [isVi ? "Cập nhật ảnh đại diện" : "更新头像", isVi ? "Đã thay đổi ảnh hồ sơ" : "头像已更换", "green"],
    password: [isVi ? "Đổi mật khẩu" : "修改密码", isVi ? "Tài khoản được bảo mật hơn" : "账号安全性已提升", "green"],
    reminder_on: [isVi ? "Bật nhắc học" : "开启学习提醒", isVi ? "Nhận email nhắc học lúc 7h sáng" : "每天早上 7 点接收学习提醒邮件", "yellow"],
    reminder_off: [isVi ? "Tắt nhắc học" : "关闭学习提醒", isVi ? "Đã tắt email nhắc học hằng ngày" : "每日学习提醒邮件已关闭", "yellow"],
    email_verified: [isVi ? "Xác minh email" : "邮箱验证", isVi ? "Email tài khoản đã được xác minh" : "账号邮箱已验证", "green"],
    save_vocab: [isVi ? "Lưu từ mới" : "收藏生词", activity.hanzi ? `${activity.hanzi} ${activity.meaning || ""}`.trim() : (isVi ? "Đã lưu từ vựng" : "已收藏生词"), "purple"],
    complete: [isVi ? "Hoàn thành bài học" : "完成课程", activity.title || (isVi ? "Đã hoàn thành một mục luyện tập" : "已完成一个练习项目"), "green"],
  };
  const fallback = [isVi ? "Hoạt động mới" : "新活动", activity.title || "", "purple"];
  const [title, subtitle, tone] = labels[activity.type] || fallback;
  return { title, subtitle, tone };
}

function renderActivityAvatarHTML() {
  const avatarUrl = getAccountAvatarUrl();
  const displayName = state.user?.fullName || state.user?.email || "User";
  return `<img class="activity-avatar" src="${escapeAttr(avatarUrl)}" alt="${escapeAttr(displayName)}" />`;
}

function renderRecentActivitiesHTML(isVi, updatedLabel, limit = 2) {
  const activities = currentUserActivities(limit);
  const list = activities.length ? activities.map((activity) => {
    const view = getActivityView(activity, isVi);
    return `
      <li>
        ${renderActivityAvatarHTML()}
        <strong>${escapeHtml(view.title)}${view.subtitle ? `<small>${escapeHtml(view.subtitle)}</small>` : ""}</strong>
        <em>${escapeHtml(formatActivityTime(activity.createdAt))}</em>
      </li>
    `;
  }).join("") : `
    <li class="account-activity-empty">
      <span class="activity-dot activity-dot--green"></span>
      <strong>${isVi ? "Chưa có hoạt động" : "暂无活动"}<small>${isVi ? "Hoạt động học tập sẽ hiển thị tại đây" : "学习活动会显示在这里"}</small></strong>
      <em>${escapeHtml(updatedLabel)}</em>
    </li>
  `;
  return `<ul>${list}</ul>`;
}

function refreshRecentActivitiesPanel() {
  const card = document.querySelector(".account-activity-card");
  if (!card) return;
  const body = card.querySelector("ul");
  if (!body) return;
  const updatedLabel = state.user?.updatedAt ? formatDateTime(state.user.updatedAt) : formatActivityTime(Date.now());
  const replacement = document.createElement("div");
  replacement.innerHTML = renderRecentActivitiesHTML(state.lang === "vi", updatedLabel, 2);
  body.replaceWith(replacement.firstElementChild);
}

function showRecentActivitiesDrawer() {
  const isVi = state.lang === "vi";
  const existing = document.getElementById("recentActivitiesDrawer");
  if (existing) existing.remove();

  const updatedLabel = state.user?.updatedAt ? formatDateTime(state.user.updatedAt) : formatActivityTime(Date.now());
  const drawer = document.createElement("div");
  drawer.id = "recentActivitiesDrawer";
  drawer.className = "recent-activities-drawer-overlay";
  drawer.innerHTML = `
    <aside class="recent-activities-drawer" role="dialog" aria-modal="true" aria-label="${isVi ? "Tất cả hoạt động gần đây" : "全部最近活动"}">
      <header class="recent-activities-drawer-header">
        <div>
          <span>${isVi ? "Hồ sơ cá nhân" : "个人资料"}</span>
          <h2>${isVi ? "Hoạt động gần đây" : "最近活动"}</h2>
        </div>
        <button type="button" class="recent-activities-drawer-close" data-close-activities-drawer aria-label="${isVi ? "Đóng" : "关闭"}">&times;</button>
      </header>
      <div class="recent-activities-drawer-body">
        ${renderRecentActivitiesHTML(isVi, updatedLabel, 30)}
      </div>
    </aside>
  `;
  document.body.appendChild(drawer);
  requestAnimationFrame(() => drawer.classList.add("open"));

  const closeDrawer = () => {
    drawer.classList.remove("open");
    drawer.classList.add("closing");
    setTimeout(() => drawer.remove(), 220);
  };

  drawer.querySelector("[data-close-activities-drawer]")?.addEventListener("click", closeDrawer);
  drawer.addEventListener("click", (event) => {
    if (event.target === drawer) closeDrawer();
  });
  drawer.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer();
  });
  drawer.tabIndex = -1;
  drawer.focus();
}

function getAdminPortalRole(user = state.adminUser) {
  return normalizeAdminPortalRole(user?.role);
}

function getAllowedAdminTabsForRole(role) {
  const normalized = normalizeAdminPortalRole(role);
  if (normalized === "admin") return ["users", "vip", "subscriptions", "content", "collaborators", "analytics"];
  if (normalized === "staff") return ["users", "collaborators"];
  if (normalized === "sales" || normalized === "ctv") return ["customers"];
  if (normalized === "content") return ["content"];
  return [];
}

function getDefaultAdminTabForRole(role) {
  return getAllowedAdminTabsForRole(role)[0] || "users";
}

function isAdminTabAllowed(tab, role = getAdminPortalRole()) {
  return getAllowedAdminTabsForRole(role).includes(String(tab || "").trim().toLowerCase());
}

function getSafeAdminTab(tab = state.adminTab) {
  const normalized = String(tab || "").trim().toLowerCase();
  return isAdminTabAllowed(normalized) ? normalized : getDefaultAdminTabForRole(getAdminPortalRole());
}

function shouldShowAdminTab(tab) {
  return isAdminTabAllowed(tab);
}

function isAdminUser() {
  return getAdminPortalRole() === "admin";
}

function isStaffAdminUser() {
  return getAdminPortalRole() === "staff";
}

function isKocAdminUser() {
  return getAdminPortalRole() === "sales";
}

function isCtvAdminUser() {
  const role = getAdminPortalRole();
  return role === "ctv" || role === "sales";
}

function canAccessAdminConsole() {
  return isAdminPortalRole(getAdminPortalRole());
}

function getAdminUserId() {
  return canAccessAdminConsole() ? state.adminUser.id : "";
}

function scrollAppToTop() {
  const scrollNow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.getElementById("app")?.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
    document.querySelector(".app-shell:not(.hidden)")?.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
    document.querySelector(".screen:not(.hidden)")?.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
  };
  scrollNow();
  requestAnimationFrame(scrollNow);
  setTimeout(scrollNow, 80);
}

function logoutCurrentUser() {
  if (BACKEND_DISABLED) {
    showToast(backendDisabledMessage());
    return false;
  }
  if (!state.user && !state.adminUser) return false;
  state.user = null;
  state.adminUser = null;
  state.adminUsers = [];
  state.adminStatus = "";
  clearAllAuthStorage();
  saveState();
  renderChrome();
  if (state.screen === "account") {
    setScreen("home");
    renderHome();
  } else if (state.screen === "home") {
    renderHome();
  } else if (state.screen === "course") {
    renderCourse();
  } else if (state.screen === "vocab") {
    renderVocab();
  }
  return true;
}

function logoutAdminUser() {
  if (!state.adminUser) return false;
  if (state.user?.id === state.adminUser.id) state.user = null;
  state.adminUser = null;
  state.adminUsers = [];
  state.adminStatus = "";
  clearAllAuthStorage();
  saveState();
  renderChrome();
  renderAdmin();
  return true;
}

function navigatePrimaryTab(target) {
  state.fromRoadmap = false;
  state.dailyPendingThemeId = "";
  state.dailyContentType = "";
  state.dailyBackTarget = "";

  if (target === "write") target = "hsk";
  if (target === "listen") target = "listening";

  if (target === "listening") {
    state.listeningView = "levels";
    state.listeningSentenceIndex = 0;
  }

  if (target === "home") {
    renderHome();
    setScreen("home");
  } else if (target === "quick-hsk-vocab") {
    if (!openRandomHskVocabularyTypingPractice()) {
      if (hasPremiumAccess()) navigatePrimaryTab("hsk");
      else promptUpgradeLocked();
      return;
    }
  } else if (target === "quick-hsk-sentence") {
    if (!openRandomHskSentenceTypingPractice()) {
      if (hasPremiumAccess()) navigatePrimaryTab("hsk");
      else promptUpgradeLocked();
      return;
    }
  } else if (target === "quick-speaking") {
    renderListeningCatalogLoading();
    setScreen("listening");
    ensureListeningCatalogLoaded().then(() => {
      if (!openRandomListeningRepeatPractice()) {
        state.listeningView = "levels";
        renderListening({ skipCatalogLoad: true });
        setScreen("listening");
      }
    });
    $("#mobileMenu")?.classList.remove("active");
    return;
  } else if (target === "quick-listening") {
    renderListeningCatalogLoading();
    setScreen("listening");
    ensureListeningCatalogLoaded().then(() => {
      if (!openRandomSuggestedListeningLesson()) {
        state.listeningView = "levels";
        renderListening({ skipCatalogLoad: true });
        setScreen("listening");
      }
    });
    $("#mobileMenu")?.classList.remove("active");
    return;
  } else if (target === "write-communication") {
    state.module = "hsk";
    state.writeCourseView = "communication";
    state.hskLevelPicker = false;
    state.hskPendingLessonId = "";
    state.hskContentType = "";
    renderCourse();
    setScreen("course");
  } else if (target === "hsk") {
    state.module = "hsk";
    state.writeCourseView = "paths";
    state.hskLevelPicker = true;
    state.hskPendingLessonId = "";
    state.hskContentType = "";
    renderCourse();
    setScreen("course");
  } else if (target === "daily") {
    state.module = "daily";
    state.hskPendingLessonId = "";
    state.hskContentType = "";
    renderCourse();
    setScreen("course");
  } else if (target === "vocab") {
    renderVocab();
    setScreen("vocab");
  } else if (target === "listening") {
    renderListening();
    setScreen("listening");
  } else if (target === "subscriptions") {
    setScreen("subscriptions");
  } else if (target === "account") {
    if (BACKEND_DISABLED) return;
    openAccountScreen();
  }

  scrollAppToTop();
  $("#mobileMenu")?.classList.remove("active");
}

async function openDailyTopicFromHome(themeId, options = {}) {
  if (!options.skipHighFrequencyLoad && !highFrequencyTopicsLoaded) {
    const fallbackThemeIndex = fallbackDailyThemes.findIndex((item) => item.id === themeId);
    state.fromRoadmap = false;
    state.module = "daily";
    state.hskPendingLessonId = "";
    state.hskContentType = "";
    state.dailyContentType = "";
    state.dailyBackTarget = options.backTarget || "";
    renderHighFrequencyTopicsLoading(options);
    setScreen("course");
    scrollAppToTop();
    ensureHighFrequencyTopicsLoaded({ silent: options.silentHighFrequencyLoad }).then(() => {
      const resolvedThemeId = dailyThemes.some((item) => item.id === themeId)
        ? themeId
        : (fallbackThemeIndex >= 0 ? dailyThemes[fallbackThemeIndex]?.id : themeId);
      if (resolvedThemeId) openDailyTopicFromHome(resolvedThemeId, { ...options, skipHighFrequencyLoad: true });
    });
    return;
  }
  const theme = dailyThemes.find((item) => item.id === themeId);
  if (!theme) return;
  if (showFastVipPromptIfKnownLocked(isDailyThemeLockedForUser(theme.id))) return;
  await refreshContentLocksIfStale(0, { force: true });
  if (isDailyThemeLockedForUser(theme.id)) {
    promptUpgradeLocked();
    return;
  }
  state.fromRoadmap = false;
  state.module = "daily";
  state.hskPendingLessonId = "";
  state.hskContentType = "";
  state.dailyPendingThemeId = theme.id;
  state.dailyContentType = "";
  state.dailyBackTarget = options.backTarget || "";
  renderCourse();
  setScreen("course");
  scrollAppToTop();
}

const APP_ROUTE_STORAGE_KEY = "v2-route";

function savePersistedRoute() {
  try {
    const route = {
      screen: state.screen,
      module: state.module,
      level: state.level,
      writeCourseView: state.writeCourseView,
      hskLevelPicker: state.hskLevelPicker,
      hskPendingLessonId: state.hskPendingLessonId,
      hskContentType: state.hskContentType,
      lessonId: state.lessonId,
      dailyPendingThemeId: state.dailyPendingThemeId,
      dailyContentType: state.dailyContentType,
      dailyBackTarget: state.dailyBackTarget,
      themeId: state.themeId,
      mode: state.mode,
      index: state.index,
      activeWord: state.activeWord,
      vocabFilterTab: state.vocabFilterTab,
      listeningView: state.listeningView,
      listeningLevelId: state.listeningLevelId,
      listeningEpisodeId: state.listeningEpisodeId,
      listeningSentenceIndex: state.listeningSentenceIndex,
      listeningVocabPracticeIndex: state.listeningVocabPracticeIndex,
      listeningLessonsBackTarget: state.listeningLessonsBackTarget,
      listeningBackTarget: state.listeningBackTarget,
      listeningSeedEpisodeId: state.listeningSeedEpisodeId,
      listeningTopicId: state.listeningTopicId,
      adminTab: state.adminTab,
      adminContentLevel: state.adminContentLevel,
      adminContentModule: state.adminContentModule,
      adminContentHskPanel: state.adminContentHskPanel,
      adminAnalyticsFrom: state.adminAnalyticsFrom,
      adminAnalyticsTo: state.adminAnalyticsTo,
      adminVipFrom: state.adminVipFrom,
      adminVipTo: state.adminVipTo,
      adminVipPlanFilter: state.adminVipPlanFilter,
      adminVipUserPage: state.adminVipUserPage,
    };
    localStorage.setItem(APP_ROUTE_STORAGE_KEY, JSON.stringify(route));
  } catch {
    // bỏ qua nếu lỗi lưu trữ
  }
}

function readPersistedRoute() {
  try {
    return JSON.parse(localStorage.getItem(APP_ROUTE_STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function restorePersistedRoute() {
  const route = readPersistedRoute();
  if (!route || !route.screen) return false;
  // The admin console is a separate entry route. Never restore it on the learner home URL.
  if (route.screen === "admin" && window.location.pathname !== "/admin") return false;

  try {
    if (route.module) state.module = route.module;
    if (route.level && hskLevels[route.level]) state.level = route.level;
    if (route.writeCourseView) state.writeCourseView = route.writeCourseView;
    if (typeof route.hskLevelPicker === "boolean") state.hskLevelPicker = route.hskLevelPicker;
    if (route.hskPendingLessonId !== undefined) state.hskPendingLessonId = route.hskPendingLessonId;
    if (route.hskContentType !== undefined) state.hskContentType = route.hskContentType;
    if (route.lessonId) state.lessonId = route.lessonId;
    if (route.dailyPendingThemeId !== undefined) state.dailyPendingThemeId = route.dailyPendingThemeId;
    if (route.dailyContentType !== undefined) state.dailyContentType = route.dailyContentType;
    if (route.dailyBackTarget !== undefined) state.dailyBackTarget = route.dailyBackTarget;
    if (route.themeId) state.themeId = route.themeId;
    if (route.mode) state.mode = route.mode;
    if (Number.isInteger(route.index)) state.index = route.index;
    if (Number.isInteger(route.activeWord)) state.activeWord = route.activeWord;
    if (route.vocabFilterTab) state.vocabFilterTab = route.vocabFilterTab;
    if (route.listeningView) state.listeningView = route.listeningView;
    if (route.listeningLevelId) state.listeningLevelId = route.listeningLevelId;
    if (route.listeningEpisodeId) state.listeningEpisodeId = route.listeningEpisodeId;
    if (Number.isInteger(route.listeningSentenceIndex)) state.listeningSentenceIndex = route.listeningSentenceIndex;
    if (Number.isInteger(route.listeningVocabPracticeIndex)) state.listeningVocabPracticeIndex = route.listeningVocabPracticeIndex;
    if (route.listeningLessonsBackTarget) state.listeningLessonsBackTarget = route.listeningLessonsBackTarget;
    if (route.listeningBackTarget !== undefined) state.listeningBackTarget = route.listeningBackTarget;
    if (route.listeningSeedEpisodeId !== undefined) state.listeningSeedEpisodeId = route.listeningSeedEpisodeId;
    if (route.listeningTopicId !== undefined) state.listeningTopicId = route.listeningTopicId;
    if (route.adminTab) state.adminTab = route.adminTab;
    if (route.adminContentLevel) state.adminContentLevel = route.adminContentLevel;
    if (route.adminContentModule) state.adminContentModule = route.adminContentModule;
    if (route.adminContentHskPanel) state.adminContentHskPanel = route.adminContentHskPanel;
    if (route.adminAnalyticsFrom) state.adminAnalyticsFrom = route.adminAnalyticsFrom;
    if (route.adminAnalyticsTo) state.adminAnalyticsTo = route.adminAnalyticsTo;
    if (route.adminVipFrom) state.adminVipFrom = route.adminVipFrom;
    if (route.adminVipTo) state.adminVipTo = route.adminVipTo;
    if (route.adminVipPlanFilter) state.adminVipPlanFilter = route.adminVipPlanFilter;
    if (route.adminVipUserPage) state.adminVipUserPage = Math.max(1, Number(route.adminVipUserPage) || 1);

    switch (route.screen) {
      case "home":
        renderHome();
        setScreen("home");
        return true;

      case "course":
        renderCourse();
        setScreen("course");
        return true;

      case "vocab":
        renderVocab();
        setScreen("vocab");
        return true;

      case "listening":
        renderListening();
        setScreen("listening");
        return true;

      case "account":
        if (!state.user) return false;
        renderAccount();
        setScreen("account");
        return true;

      case "admin":
        renderAdmin();
        setScreen("admin");
        loadActiveAdminTabData();
        return true;

      case "subscriptions":
        setScreen("subscriptions");
        return true;

      case "practice": {
        if (state.module === "hsk" && route.lessonId && hskLevels[state.level]?.some((l) => l.id === route.lessonId)) {
          startPractice({ lessonId: route.lessonId, mode: route.mode || "translate", hskContentType: route.hskContentType || "", index: route.index || 0 });
          return true;
        }
        if (state.module === "daily" && route.themeId) {
          const restoreDailyPractice = () => startPractice({
            themeId: route.themeId,
            mode: route.mode || "translate",
            dailyContentType: route.dailyContentType || "",
            index: route.index || 0,
          });
          if (dailyThemes.some((th) => th.id === route.themeId)) {
            restoreDailyPractice();
            return true;
          }
          if (!highFrequencyTopicsLoaded) {
            renderHighFrequencyTopicsLoading();
            setScreen("course");
            ensureHighFrequencyTopicsLoaded({ silent: true }).then(() => {
              if (dailyThemes.some((th) => th.id === route.themeId)) restoreDailyPractice();
              else renderCourse({ skipHighFrequencyLoad: true });
            });
            return true;
          }
        }
        if (state.module === "vocab") {
          return startSavedVocabPractice(route.index || 0);
        }
        return false;
      }

      case "complete":
        if (state.module === "daily" && state.dailyBackTarget === "write-communication") {
          backToWriteCommunicationCourse();
          return true;
        }
        renderCourse();
        setScreen("course");
        return true;

      default:
        return false;
    }
  } catch {
    return false;
  }
}

function restorePersistedAdminRouteState() {
  const route = readPersistedRoute();
  if (!route || route.screen !== "admin") return false;

  if (route.adminTab) state.adminTab = route.adminTab;
  if (route.adminContentLevel) state.adminContentLevel = route.adminContentLevel;
  if (route.adminContentModule) state.adminContentModule = route.adminContentModule;
  if (route.adminContentHskPanel) state.adminContentHskPanel = route.adminContentHskPanel;
  if (route.adminAnalyticsFrom) state.adminAnalyticsFrom = route.adminAnalyticsFrom;
  if (route.adminAnalyticsTo) state.adminAnalyticsTo = route.adminAnalyticsTo;
  if (route.adminVipFrom) state.adminVipFrom = route.adminVipFrom;
  if (route.adminVipTo) state.adminVipTo = route.adminVipTo;
  if (route.adminVipPlanFilter) state.adminVipPlanFilter = route.adminVipPlanFilter;
  if (route.adminVipUserPage) state.adminVipUserPage = Math.max(1, Number(route.adminVipUserPage) || 1);
  return true;
}

function loadActiveAdminTabData() {
  if (!canAccessAdminConsole()) return;
  const safeTab = getSafeAdminTab(state.adminTab);
  state.adminTab = safeTab;

  switch (safeTab) {
    case "customers":
      if (!state.adminUsers.length) loadAdminUsers();
      break;
    case "content":
      loadAdminContentLocks();
      break;
    case "collaborators":
      if (!state.adminUsers.length) loadAdminUsers();
      break;
    case "analytics":
      loadAdminAnalytics();
      break;
    case "vip":
      loadAdminVipManagement();
      break;
    case "subscriptions":
      break;
    case "users":
    default:
      loadAdminUsers();
      loadAdminContentLocks();
      break;
  }
}

function setScreen(name) {
  syncHomeTodayStudySession(name);
  state.screen = name;
  syncLearningBehaviorSession(name);
  if (name === "course" || name === "listening" || name === "home") {
    void refreshContentLocksIfStale(8000, { rerender: true });
  }
  Object.entries(screens).forEach(([key, node]) => node.classList.toggle("hidden", key !== name));
  triggerMobilePageTransition(name);
  $("#backBtn")?.classList.toggle("hidden", name === "home" || name === "course" || name === "admin" || name === "vocab" || name === "listening" || name === "subscriptions" || name === "account");

  // Footer tạm ẩn
  // renderGlobalFooter();
  // $("#globalFooter")?.classList.toggle("hidden", name === "subscriptions");
  // $("#globalFooter")?.classList.toggle("footer-hide-on-mobile", name === "account");

  const appNode = $("#app");
  if (appNode) {
    appNode.className = "app-shell screen-" + name;
  }

  // Highlight active middle navigation items
  const navHsk = $("#navHskBtn");
  const navDaily = $("#navDailyBtn");
  const navVocab = $("#navVocabBtn");
  const navSubscriptions = $("#navSubscriptionsBtn");
  const navAdmin = $("#navAdminBtn");
  const mNavHsk = $("#mobileHskBtn");
  const mNavDaily = $("#mobileDailyBtn");
  const mNavVocab = $("#mobileVocabBtn");
  const mNavSubscriptions = $("#mobileSubscriptionsBtn");
  const mNavAdmin = $("#mobileAdminBtn");

  if (navHsk && navDaily && navVocab && navSubscriptions && navAdmin) {
    navHsk.classList.toggle("active", name === "course" && state.module === "hsk");
    navDaily.classList.toggle("active", name === "course" && state.module === "daily");
    navVocab.classList.toggle("active", name === "vocab");
    navSubscriptions.classList.toggle("active", name === "subscriptions");
    navAdmin.classList.toggle("active", name === "admin");
  }
  if (mNavHsk && mNavDaily && mNavVocab && mNavSubscriptions && mNavAdmin) {
    mNavHsk.classList.toggle("active", name === "course" && state.module === "hsk");
    mNavDaily.classList.toggle("active", name === "course" && state.module === "daily");
    mNavVocab.classList.toggle("active", name === "vocab");
    mNavSubscriptions.classList.toggle("active", name === "subscriptions");
    mNavAdmin.classList.toggle("active", name === "admin");
  }

  const bottomNav = $("#mobileBottomNav");
  const bottomHome = $("#bottomNavHomeBtn");
  const bottomHsk = $("#bottomNavHskBtn");
  const bottomDaily = $("#bottomNavDailyBtn");
  const bottomVocab = $("#bottomNavVocabBtn");
  const bottomListening = $("#bottomNavListeningBtn");
  const bottomSubscriptions = $("#bottomNavSubscriptionsBtn");
  const bottomAccount = $("#bottomNavAccountBtn");
  const showBottomNav = ["home", "course", "vocab", "listening", "account"].includes(name);

  if (bottomNav) {
    bottomNav.classList.toggle("hidden", !showBottomNav);
    document.body.classList.toggle("has-mobile-bottom-nav", showBottomNav);
  }
  if (bottomHome && bottomHsk && bottomDaily && bottomVocab && bottomListening && bottomSubscriptions && bottomAccount) {
    bottomHome.classList.toggle("active", name === "home");
    bottomHsk.classList.toggle("active", name === "course" && state.module === "hsk");
    bottomDaily.classList.toggle("active", name === "course" && state.module === "daily");
    bottomVocab.classList.toggle("active", name === "vocab");
    bottomListening.classList.toggle("active", name === "listening");
    bottomSubscriptions.classList.toggle("active", name === "subscriptions");
    bottomAccount.classList.toggle("active", name === "account");
    bottomAccount.classList.toggle("hidden", BACKEND_DISABLED);
  }
  scheduleScreenMediaOptimization(screens[name] || document);
  savePersistedRoute();
  scrollAppToTop();
}

function renderChrome() {
  const isVi = state.lang === "vi";
  document.documentElement.lang = state.lang === "vi" ? "vi" : "zh-CN";
  const brandSubtitle = $("#brandSubtitle");
  if (brandSubtitle) brandSubtitle.textContent = t("brandSubtitle");
  const reviewBtn = $("#reviewBtn");
  if (reviewBtn) reviewBtn.textContent = t("review");
  const loginBtn = $("#loginBtn");
  const registerBtn = $("#registerBtn");
  const mobileLoginBtn = $("#mobileLoginBtn");
  const mobileRegisterBtn = $("#mobileRegisterBtn");
  const navAdmin = $("#navAdminBtn");
  const mobileAdmin = $("#mobileAdminBtn");
  const sidebarLoginBtn = $("#sidebarLoginBtn");
  const sidebarRegisterBtn = $("#sidebarRegisterBtn");

  const navHskBtn = $("#navHskBtn");
  const navDailyBtn = $("#navDailyBtn");
  const navVocabBtn = $("#navVocabBtn");
  const navSubscriptionsBtn = $("#navSubscriptionsBtn");
  const mobileHskBtn = $("#mobileHskBtn");
  const mobileDailyBtn = $("#mobileDailyBtn");
  const mobileVocabBtn = $("#mobileVocabBtn");
  const mobileSubscriptionsBtn = $("#mobileSubscriptionsBtn");
  const bottomHomeBtn = $("#bottomNavHomeBtn");
  const bottomHskBtn = $("#bottomNavHskBtn");
  const bottomDailyBtn = $("#bottomNavDailyBtn");
  const bottomVocabBtn = $("#bottomNavVocabBtn");
  const bottomListeningBtn = $("#bottomNavListeningBtn");
  const bottomSubscriptionsBtn = $("#bottomNavSubscriptionsBtn");
  const bottomAccountBtn = $("#bottomNavAccountBtn");

  if (navHskBtn) navHskBtn.textContent = t("hskTitle");
  if (navDailyBtn) navDailyBtn.textContent = t("dailyTitle");
  if (navVocabBtn) navVocabBtn.textContent = t("vocab");

  if (mobileHskBtn) mobileHskBtn.innerHTML = `${t("hskTitle")} <span class="arrow">›</span>`;
  if (mobileDailyBtn) mobileDailyBtn.innerHTML = `${t("dailyTitle")} <span class="arrow">›</span>`;
  if (mobileVocabBtn) mobileVocabBtn.innerHTML = `${t("vocab")} <span class="arrow">›</span>`;

  if (bottomHomeBtn) {
    bottomHomeBtn.dataset.bottomNav = "home";
    bottomHomeBtn.querySelector(".mobile-bottom-nav-label").textContent = t("homeTab");
    bottomHomeBtn.querySelector(".mobile-bottom-nav-icon").innerHTML = desktopNavIcon("home");
  }

  if (bottomHskBtn) {
    bottomHskBtn.dataset.bottomNav = "write";
    bottomHskBtn.querySelector(".mobile-bottom-nav-label").textContent = isVi ? "Luyện gõ" : "拼打";
    bottomHskBtn.querySelector(".mobile-bottom-nav-icon").innerHTML = desktopNavIcon("write");
  }

  if (bottomListeningBtn) {
    bottomListeningBtn.dataset.bottomNav = "listen";
    bottomListeningBtn.querySelector(".mobile-bottom-nav-label").textContent = isVi ? "Luyện nghe" : "听力";
    bottomListeningBtn.querySelector(".mobile-bottom-nav-icon").innerHTML = desktopNavIcon("listening");
  }

  if (bottomSubscriptionsBtn) {
    bottomSubscriptionsBtn.dataset.bottomNav = "vip";
    bottomSubscriptionsBtn.setAttribute("aria-label", isVi ? "Mở Gói VIP" : "打开 VIP 套餐");
    bottomSubscriptionsBtn.querySelector(".mobile-bottom-nav-label").textContent = isVi ? "Gói VIP" : "VIP";
    bottomSubscriptionsBtn.querySelector(".mobile-bottom-nav-icon").innerHTML = desktopNavIcon("vip");
  }

  if (bottomAccountBtn) {
    bottomAccountBtn.dataset.bottomNav = "account";
    bottomAccountBtn.querySelector(".mobile-bottom-nav-label").textContent = isVi ? "Cá nhân" : "个人";
    bottomAccountBtn.querySelector(".mobile-bottom-nav-icon").innerHTML = desktopNavIcon("account");
  }

  const canViewAdmin = !BACKEND_DISABLED && canAccessAdminConsole();
  if (navAdmin) {
    navAdmin.textContent = t("admin");
    navAdmin.classList.toggle("hidden", !canViewAdmin);
  }
  if (mobileAdmin) {
    mobileAdmin.innerHTML = `${t("admin")} <span class="arrow">›</span>`;
    mobileAdmin.classList.toggle("hidden", !canViewAdmin);
  }
  const menuToggleBtn = $("#menuToggleBtn");
  if (menuToggleBtn) {
    menuToggleBtn.classList.add("hidden");
  }
  [loginBtn, registerBtn, mobileLoginBtn, mobileRegisterBtn, sidebarLoginBtn, sidebarRegisterBtn].forEach((button) => {
    if (!button) return;
    button.classList.toggle("hidden", BACKEND_DISABLED);
  });
  if (BACKEND_DISABLED) return;
  if (state.user) {
    if (loginBtn) loginBtn.textContent = state.user.fullName || t("account");
    if (registerBtn) registerBtn.textContent = t("logout");
    if (mobileLoginBtn) mobileLoginBtn.textContent = state.user.fullName || t("account");
    if (mobileRegisterBtn) mobileRegisterBtn.textContent = t("logout");
  } else {
    if (loginBtn) loginBtn.textContent = t("login");
    if (registerBtn) registerBtn.textContent = t("register");
    if (mobileLoginBtn) mobileLoginBtn.textContent = t("login");
    if (mobileRegisterBtn) mobileRegisterBtn.textContent = t("register");
  }

  if (loginBtn) {
    loginBtn.disabled = false;
    loginBtn.removeAttribute("title");
  }
  if (registerBtn) {
    registerBtn.disabled = false;
    registerBtn.removeAttribute("title");
  }
  if (mobileLoginBtn) {
    mobileLoginBtn.disabled = false;
    mobileLoginBtn.removeAttribute("title");
  }
  if (mobileRegisterBtn) {
    mobileRegisterBtn.disabled = false;
    mobileRegisterBtn.removeAttribute("title");
  }
  if (sidebarLoginBtn) {
    sidebarLoginBtn.disabled = false;
    sidebarLoginBtn.removeAttribute("title");
  }
  if (sidebarRegisterBtn) {
    sidebarRegisterBtn.disabled = false;
    sidebarRegisterBtn.removeAttribute("title");
  }

  const langToggle = $("#langToggle");
  if (langToggle) {
    langToggle.innerHTML = `
      <span class="lang-vi ${state.lang === "vi" ? "active" : ""}">VI</span>
      <span class="lang-divider">|</span>
      <span class="lang-en ${state.lang === "zh" ? "active" : ""}">CN</span>
    `;
  }
}

function getLessonTotalItems(item) {
  if (item.lessonId) {
    for (const level of Object.values(hskLevels)) {
      const found = level.find(l => l.id === item.lessonId);
      if (found) return hskAllLessonItems(found).length;
    }
  } else if (item.themeId) {
    const found = dailyThemes.find(t => t.id === item.themeId);
    if (found) return found.items.length;
  }
  return item.totalItems || 3;
}

const dailyRoadmap = [
  { day: 1, title: "Chào hỏi cơ bản", label: "Cơ bản 1", totalItems: 7, lessonId: "hsk2-l1" },
  { day: 2, title: "Phiên âm Pinyin", label: "Cơ bản", totalItems: 20, lessonId: "hsk2-l2" },
  { day: 3, title: "Từ vựng thông dụng", label: "Cơ bản 3", totalItems: 20, lessonId: "hsk2-l3" },
  { day: 4, title: "Mẫu câu giao tiếp", label: "Màu sắc", totalItems: 4, themeId: "greeting" },
  { day: 5, title: "Giới thiệu công việc", label: "Công việc", totalItems: 20, lessonId: "hsk2-l4" },
  { day: 6, title: "Mua sắm lựa chọn", label: "Lựa chọn", totalItems: 20, lessonId: "hsk2-l5" },
  { day: 7, title: "Ăn uống giao tiếp", label: "Ăn uống", totalItems: 20, lessonId: "hsk2-l6" }
];

function renderRoadmap() {
  if (!screens.roadmap) {
    state.module = "hsk";
    state.hskLevelPicker = true;
    renderCourse();
    setScreen("course");
    return;
  }
  const isVi = state.lang === "vi";
  const completedDaysCount = dailyRoadmap.filter(d => {
    const id = d.lessonId || d.themeId;
    return state.completed.has(id);
  }).length;

  const completedCount = [...state.completed].length;

  screens.roadmap.innerHTML = `
    <div class="roadmap-layout">
      <!-- Left Column: Flowing pathway -->
      <div class="roadmap-panel">
        <div class="roadmap-header-title">
          <h2>${isVi ? "Lộ trình học tập" : "学习路径"}</h2>
          <p>${isVi ? "Hoàn thành mỗi bài học hàng ngày để mở khóa nội dung tiếp theo" : "完成每日课程以解锁下一个内容"}</p>
        </div>
        
        <div class="roadmap-timeline">
          ${dailyRoadmap.map((item, index) => {
    const id = item.lessonId || item.themeId;
    const isCompleted = state.completed.has(id);
    const isCurrentActive = !isCompleted && (index === 0 || state.completed.has(dailyRoadmap[index - 1].lessonId || dailyRoadmap[index - 1].themeId));
    const isLocked = !isCompleted && !isCurrentActive;

    let statusClass = "locked";
    if (isCompleted) statusClass = "done";
    else if (isCurrentActive) statusClass = "active";

    const totalItems = getLessonTotalItems(item);
    const progressText = isCompleted ? `${totalItems}/${totalItems}` : `0/${totalItems}`;

    return `
              <div class="roadmap-timeline-item status-${statusClass}">
                <div class="timeline-node-col">
                  <button class="roadmap-node-circle" type="button" data-roadmap-day="${item.day}" data-lesson-id="${item.lessonId || ''}" data-theme-id="${item.themeId || ''}" ${isLocked ? "disabled" : ""}>
                    <div class="node-circle-inner">
                      ${isCompleted ? `<span class="node-star-gold">★</span>` : ""}
                      ${isCurrentActive ? `<span class="node-star-active">★</span>` : ""}
                      ${isLocked ? `
                        <span class="node-icon-locked">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                          </svg>
                        </span>
                      ` : ""}
                    </div>
                  </button>
                </div>
                
                <div class="timeline-content-col">
                  <div class="timeline-meta">
                    <span class="day-badge">${isVi ? `Ngày ${item.day}` : `第 ${item.day} 天`}</span>
                    <span class="progress-info">${progressText} ${isVi ? "câu đã học" : "个句子已学"}</span>
                  </div>
                  <h3 class="lesson-label">${item.label}</h3>
                  <p class="lesson-title">${item.title}</p>
                </div>
                
                <div class="timeline-action-col">
                  <button class="btn-timeline-action ${statusClass}" type="button" data-roadmap-day="${item.day}" data-lesson-id="${item.lessonId || ''}" data-theme-id="${item.themeId || ''}" ${isLocked ? "disabled" : ""}>
                    ${isCompleted ? (isVi ? "Ôn tập" : "复习") : isCurrentActive ? (isVi ? "Học ngay" : "立即学习") : (isVi ? "Chưa mở khóa" : "未解锁")}
                  </button>
                </div>
              </div>
            `;
  }).join("")}
        </div>
      </div>
      
      <!-- Right Column: Sidebar Stats -->
      <aside class="roadmap-sidebar">
        <div class="sidebar-card stats-card">
          <h3>${isVi ? "Thống kê" : "统计"}</h3>
          <div class="stats-underline"></div>
          
          <div class="stat-item">
            <div class="stat-icon-wrapper progress-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div class="stat-copy">
              <span>${isVi ? "Tiến độ" : "进度"}</span>
              <strong>${completedDaysCount}/${dailyRoadmap.length} ${isVi ? "ngày" : "天"}</strong>
            </div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon-wrapper lesson-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <div class="stat-copy">
              <span>${isVi ? "Bài học hoàn thành" : "完成的课程"}</span>
              <strong>${completedCount}</strong>
            </div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon-wrapper streak-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2c1 2 2 3.5 3 5.5s1 3 1 4.5c0 3-2.5 5.5-5.5 5.5S5 15 5 12c0-2.5 2.5-5.5 5-7.5l2-2.5z"/>
              </svg>
            </div>
            <div class="stat-copy">
              <span>${isVi ? "Chuỗi học" : "学习天数"}</span>
              <strong>${completedCount} ${isVi ? "ngày" : "天"}</strong>
            </div>
          </div>
        </div>
        
        <div class="sidebar-card cta-card">
          <div class="cta-info">
            <div class="cta-icon">✍️</div>
            <p>${isVi ? "Hãy đăng ký / đăng nhập để lưu tiến độ học tập của bạn." : "请注册/登录以保存您的学习进度。"}</p>
          </div>
          <button class="btn-sidebar-login" id="sidebarLoginBtn" type="button" disabled title="Đăng nhập/Đăng ký tạm thời bị vô hiệu hóa">${t("login")}</button>
          <button class="btn-sidebar-register" id="sidebarRegisterBtn" type="button" disabled title="Đăng nhập/Đăng ký tạm thời bị vô hiệu hóa">${t("register")}</button>
        </div>
        
      </aside>
    </div>
  `;
}

async function loadAdminUsers() {
  const isVi = state.lang === "vi";
  if (!canAccessAdminConsole()) {
    state.adminStatus = isVi ? "Vui lòng đăng nhập bằng tài khoản admin." : "请使用管理员账户登录。";
    state.adminUsers = [];
    renderAdmin();
    return;
  }

  state.adminStatus = isVi ? "Đang tải danh sách người dùng..." : "正在加载用户列表...";
  renderAdmin();
  try {
    const data = await apiRequest(getAdminUsersRequestUrl(), {
      method: "GET",
      headers: {
        "X-Admin-User-Id": getAdminUserId(),
      },
    });
    state.adminUsers = data.users || [];
    state.adminUserPagination = normalizeAdminUsersPagination(data.pagination, state.adminUsers.length);
    state.adminUserSummary = data.summary || null;
    state.adminUserPage = state.adminUserPagination.page;
    state.adminUserPageSize = state.adminUserPagination.pageSize;
    const total = state.adminUserPagination.serverSide ? state.adminUserPagination.total : state.adminUsers.length;
    state.adminStatus = isVi ? `Đã tải ${total} người dùng.` : `已加载 ${total} 个用户。`;
  } catch (error) {
    state.adminUsers = [];
    state.adminUserPagination = null;
    state.adminUserSummary = null;
    state.adminStatus = error.message;
  }
  renderAdmin();
}

function getAdminUserPlan(user) {
  if (user?.plan === "EMPLOYEE") return "EMPLOYEE";
  if (user?.role === "employee") return "EMPLOYEE";
  if (user?.role === "admin") return "PREMIUM";
  if (isActivePremiumUser(user)) return normalizeVipPlanId(user) || "PREMIUM";
  return "FREE";
}

const ADMIN_USER_PLAN_FILTER_VALUES = new Set(["all", "3d", "30d", "90d"]);

function normalizeAdminUserPlanFilter(value) {
  const normalized = String(value || "all").trim().toLowerCase();
  if (normalized === "7d") return "3d";
  return ADMIN_USER_PLAN_FILTER_VALUES.has(normalized) ? normalized : "all";
}

function shouldUseAdminUsersServerPagination() {
  return state.screen === "admin" && (state.adminTab || "users") === "users";
}

function getAdminUsersRequestUrl() {
  if (!shouldUseAdminUsersServerPagination()) return "/api/admin/users";
  const params = new URLSearchParams();
  params.set("page", String(Math.max(1, Number(state.adminUserPage || 1))));
  params.set("pageSize", String(Math.max(1, Number(state.adminUserPageSize || 9))));
  const search = String(state.adminUserSearch || "").trim();
  const level = state.adminUserLevelFilter || "all";
  const plan = normalizeAdminUserPlanFilter(state.adminUserPlanFilter);
  if (search) params.set("search", search);
  if (level !== "all") params.set("level", level);
  if (plan !== "all") params.set("plan", plan);
  return `/api/admin/users?${params.toString()}`;
}

function normalizeAdminUsersPagination(rawPagination, fallbackCount = 0) {
  const total = Math.max(0, Number(rawPagination?.total ?? fallbackCount) || 0);
  const pageSize = Math.max(1, Number(rawPagination?.pageSize ?? state.adminUserPageSize ?? 9) || 9);
  const totalPages = Math.max(1, Number(rawPagination?.totalPages ?? Math.ceil(total / pageSize)) || 1);
  const page = Math.min(totalPages, Math.max(1, Number(rawPagination?.page ?? state.adminUserPage ?? 1) || 1));
  const startIndex = total > 0 ? (page - 1) * pageSize : 0;
  const endIndex = total > 0 ? Math.min(startIndex + pageSize, total) : 0;
  return {
    page,
    pageSize,
    total,
    totalPages,
    startIndex,
    endIndex,
    serverSide: rawPagination?.serverSide === true,
  };
}

function hasAdminUsersServerPagination() {
  return state.adminUserPagination?.serverSide === true;
}

function getAdminUserVipPlanFilterValue(user) {
  return normalizeVipPlanId(user);
}

function getAdminUserPlanLabel(plan, isVi = state.lang === "vi") {
  if (plan === "3d") return isVi ? "VIP 3 ngày" : "VIP 3d";
  if (plan === "30d") return isVi ? "VIP 30 ngày" : "VIP 30d";
  if (plan === "90d") return isVi ? "VIP 3 tháng" : "VIP 90d";
  if (plan === "PREMIUM") return "VIP";
  if (plan === "EMPLOYEE") return isVi ? "Nhân viên" : "员工";
  if (plan === "FREE") return isVi ? "Thường" : "Free";
  return plan || "";
}

function normalizeAdminRole(role) {
  const normalized = String(role || "").toLowerCase();
  if (normalized === "admin") return "admin";
  if (normalized === "sales" || normalized === "koc") return "sales";
  if (normalized === "staff" || normalized === "employee") return "staff";
  if (normalized === "ctv") return "ctv";
  if (normalized === "content" || normalized === "content_manager") return "content";
  return "user";
}

function getAdminRoleLabel(role, isVi = state.lang === "vi") {
  const normalized = normalizeAdminRole(role);
  if (normalized === "admin") return isVi ? "Quản trị viên cao nhất" : "超级管理员";
  if (normalized === "staff") return "Staff";
  if (normalized === "sales") return "KOC";
  if (normalized === "ctv") return "CTV";
  if (normalized === "content") return "Content";
  return isVi ? "Thường" : "普通用户";
}

const ADMIN_EDITABLE_ROLES = ["user", "sales", "ctv", "content", "staff"];
const STAFF_EDITABLE_ROLES = ADMIN_EDITABLE_ROLES;

function getAdminAssignableRoles() {
  return isAdminUser() ? ADMIN_EDITABLE_ROLES : STAFF_EDITABLE_ROLES;
}

function renderAdminRoleOptionsHTML(currentRole, isVi = state.lang === "vi", roles = getAdminAssignableRoles()) {
  return roles.map((role) => {
    const label = getAdminRoleLabel(role, isVi);
    return `<option value="${role}" ${role === currentRole ? "selected" : ""}>${escapeAttr(label)}</option>`;
  }).join("");
}

function findAdminUserById(userId) {
  return (state.adminUsers || []).find((user) => String(user.id) === String(userId)) || null;
}

function confirmAdminVipUpgrade(userId, durationDays) {
  const user = findAdminUserById(userId);
  const isVi = state.lang === "vi";
  const hasPremium = isActivePremiumUser(user);
  const planLabel = durationDays === 90
    ? (isVi ? "VIP 3 tháng" : "90天 VIP")
    : durationDays === 30
      ? (isVi ? "VIP 30 ngày" : "30天 VIP")
      : (isVi ? "VIP 3 ngày" : "3天 VIP");
  const target = user?.email || user?.fullName || userId;
  const currentExpiry = user?.premiumUntil ? formatAdminDate(user.premiumUntil) : "";
  const existingVipNote = hasPremium
    ? (isVi
      ? `\n\nTài khoản này đang có existing VIP đến ${currentExpiry}. Lần mở này sẽ gia hạn từ ngày hết hạn hiện tại.`
      : `\n\n该账号已有 existing VIP，到期日 ${currentExpiry}。本次开通会从当前到期日继续延长。`)
    : "";
  const message = isVi
    ? `Xác nhận mở ${planLabel} cho ${target}?${existingVipNote}`
    : `确认给 ${target} 开通 ${planLabel} 吗？${existingVipNote}`;
  return window.confirm(message);
}

function confirmAdminVipExpiryUpdate(userId, dateValue) {
  const user = findAdminUserById(userId);
  const isVi = state.lang === "vi";
  const target = user?.email || user?.fullName || userId;
  return window.confirm(isVi
    ? `Xác nhận đặt ngày hết hạn VIP của ${target} thành ${dateValue}?`
    : `确认把 ${target} 的 VIP 到期日期设置为 ${dateValue} 吗？`);
}

function confirmAdminVipCancel(userId) {
  const user = findAdminUserById(userId);
  const isVi = state.lang === "vi";
  const target = user?.email || user?.fullName || userId;
  return window.confirm(isVi
    ? `Xác nhận hủy VIP và đưa ${target} về tài khoản thường?`
    : `确认取消 ${target} 的 VIP 并恢复为普通用户吗？`);
}

function confirmAdminRoleChange(userId, nextRole) {
  const user = findAdminUserById(userId);
  const isVi = state.lang === "vi";
  const target = user?.email || user?.fullName || userId;
  const roleLabel = getAdminRoleLabel(nextRole, isVi);
  const action = isVi ? `cập nhật vai trò thành ${roleLabel}` : `更新角色为 ${roleLabel}`;
  return window.confirm(isVi
    ? `Xác nhận ${action} cho ${target}?`
    : `确认将 ${target} ${action} 吗？`);
}

function buildAdminUserPatchPayload(row, extra = {}) {
  return {
    fullName: row.querySelector('[data-field="fullName"]').value.trim(),
    email: row.querySelector('[data-field="email"]').value.trim(),
    role: row.querySelector('[data-field="role"]').value,
    currentLevel: row.querySelector('[data-field="currentLevel"]')?.value || "HSK2",
    isActive: row.querySelector('[data-field="isActive"]').checked,
    ...extra,
  };
}

function getFilteredAdminUsers() {
  if (hasAdminUsersServerPagination()) return state.adminUsers || [];
  const query = normalizeLatin(state.adminUserSearch.trim());
  const levelFilter = state.adminUserLevelFilter || "all";
  const planFilter = normalizeAdminUserPlanFilter(state.adminUserPlanFilter);

  return state.adminUsers.filter((user) => {
    const level = user.currentLevel || user.level || "HSK2";
    if (levelFilter !== "all" && level !== levelFilter) return false;
    if (planFilter !== "all" && getAdminUserVipPlanFilterValue(user) !== planFilter) return false;
    if (!query) return true;
    const name = normalizeLatin(user.fullName || "");
    const email = normalizeLatin(user.email || "");
    const id = normalizeLatin(String(user.id || ""));
    return name.includes(query) || email.includes(query) || id.includes(query);
  });
}

function getAdminUserPagination(users) {
  if (hasAdminUsersServerPagination()) {
    return {
      ...state.adminUserPagination,
      currentPage: state.adminUserPagination.page,
      pageUsers: users,
    };
  }
  const pageSize = Math.max(1, Number(state.adminUserPageSize || 9));
  const totalPages = Math.max(1, Math.ceil(users.length / pageSize));
  const currentPage = Math.min(Math.max(1, Number(state.adminUserPage || 1)), totalPages);
  state.adminUserPage = currentPage;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, users.length);
  return {
    pageSize,
    totalPages,
    currentPage,
    startIndex,
    endIndex,
    pageUsers: users.slice(startIndex, endIndex),
  };
}

function renderAdminUserPaginationHTML(totalPages, currentPage) {
  const pages = [];
  if (totalPages <= 4) {
    for (let page = 1; page <= totalPages; page += 1) pages.push(page);
  } else {
    pages.push(1);
    const middleStart = Math.max(2, currentPage - 1);
    const middleEnd = Math.min(totalPages - 1, currentPage + 1);
    if (middleStart > 2) pages.push("ellipsis-start");
    for (let page = middleStart; page <= middleEnd; page += 1) pages.push(page);
    if (middleEnd < totalPages - 1) pages.push("ellipsis-end");
    pages.push(totalPages);
  }

  return `
    <button type="button" data-admin-user-page="${Math.max(1, currentPage - 1)}" ${currentPage <= 1 ? "disabled" : ""}>‹</button>
    ${pages.map((page) => typeof page === "number"
    ? `<button type="button" class="${page === currentPage ? "active" : ""}" data-admin-user-page="${page}">${page}</button>`
    : `<span>...</span>`).join("")}
    <button type="button" data-admin-user-page="${Math.min(totalPages, currentPage + 1)}" ${currentPage >= totalPages ? "disabled" : ""}>›</button>
  `;
}

function buildAdminUserRowsHTML(users, isVi) {
  return users.map((user, index) => {
    const initials = String(user.fullName || user.email || "U").split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    const avatar = index % 3 === 0 ? `assets/review_user_${(index % 3) + 1}.png` : "";
    const currentLevel = user.currentLevel || user.level || "HSK2";
    const hasPremium = isActivePremiumUser(user);
    const plan = getAdminUserPlan(user);
    const displayDuration = hasPremium ? formatAdminDate(user.premiumUntil) : "N/A";
    const vipDisplay = getVipPlanDisplay(user, isVi);
    const duration = hasPremium ? vipDisplay.status : "N/A";
    const expiryInputValue = formatAdminDateInput(user.premiumUntil);
    const role = normalizeAdminRole(user.role);
    const registeredAt = getAdminUserRegistrationTimestamp(user);
    const registeredLabel = formatAdminRegistrationDate(registeredAt, isVi);
    const canChangeStaffRole = role !== "admin" && (
      isAdminUser() ||
      (getAdminPortalRole() === "staff" && STAFF_EDITABLE_ROLES.includes(role))
    );
    const assignableRoles = isAdminUser() ? ADMIN_EDITABLE_ROLES : STAFF_EDITABLE_ROLES;
    const canManageVip = (isAdminUser() || isStaffAdminUser()) && role !== "admin";
    const staffRoleButton = canChangeStaffRole
      ? `<select class="admin-role-select" aria-label="${isVi ? "Vai trò" : "角色"}">${renderAdminRoleOptionsHTML(role, isVi, assignableRoles)}</select><button class="admin-role-user" type="button">${isVi ? "Lưu vai trò" : "保存角色"}</button>`
      : "";
    return `
      <tr class="admin-user-role-${role}" data-user-id="${escapeAttr(user.id)}" data-registered-at="${escapeAttr(registeredAt)}">
        <td>
          <div class="admin-user-cell">
            ${avatar ? `<img src="${avatar}" alt="${escapeAttr(user.fullName || user.email)}" />` : `<span>${escapeAttr(initials)}</span>`}
            <div>
              <strong>${escapeAttr(user.fullName || (isVi ? "Chưa có tên" : "暂无姓名"))}</strong>
              <small>ID: ${escapeAttr(String(user.id || "").slice(0, 8).toUpperCase())}</small>
            </div>
          </div>
        </td>
        <td>
          <div class="admin-user-email">
            <strong>${escapeAttr(user.email || "")}</strong>
            <small class="admin-user-registered-at">${escapeAttr(registeredLabel)}</small>
          </div>
        </td>
        <td><span class="admin-pill role ${role}">${escapeAttr(getAdminRoleLabel(role, isVi))}</span></td>
        <td><span class="admin-pill level">${escapeAttr(currentLevel)}</span></td>
        <td><span class="admin-pill ${plan.toLowerCase()}">${escapeAttr(getAdminUserPlanLabel(plan, isVi))}</span></td>
        <td>
          <div class="admin-duration">
            <strong>${displayDuration}</strong>
            ${duration !== "N/A" ? `<small>${escapeAttr(duration)}</small>` : ""}
          </div>
        </td>
        <td>
          <div class="admin-row-actions">
            ${canManageVip ? `
            <button class="admin-vip-user" type="button" data-vip-days="3" aria-label="VIP 3 days">VIP 3d</button>
            <button class="admin-vip-user" type="button" data-vip-days="30" aria-label="VIP 30 days">VIP 30d</button>
            <button class="admin-vip-user" type="button" data-vip-days="90" aria-label="VIP 90 days">VIP 90d</button>
            <input class="admin-vip-expiry-input" type="date" value="${escapeAttr(expiryInputValue)}" aria-label="${isVi ? "Ngày hết hạn VIP" : "VIP 到期日期"}" />
            <button class="admin-set-vip-expiry" type="button">${isVi ? "Đặt hạn" : "设到期"}</button>
            <button class="admin-cancel-vip-user" type="button">${isVi ? "Hủy VIP" : "取消VIP"}</button>
            <button class="admin-delete-user" type="button" aria-label="${isVi ? "Xóa" : "删除"}">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5"/><path d="M14 11v5"/></svg>
            </button>
            ` : ""}
          </div>
          <div class="admin-row-role-actions">
            ${staffRoleButton}
          </div>
          <input type="hidden" data-field="fullName" value="${escapeAttr(user.fullName || "")}" />
          <input type="hidden" data-field="email" value="${escapeAttr(user.email || "")}" />
          <input type="hidden" data-field="role" value="${escapeAttr(role)}" />
          <input type="hidden" data-field="currentLevel" value="${escapeAttr(currentLevel)}" />
          <input type="checkbox" data-field="isActive" ${user.isActive ? "checked" : ""} hidden />
        </td>
      </tr>
    `;
  }).join("");
}

function updateAdminUsersList() {
  if (state.screen !== "admin" || (state.adminTab || "users") !== "users") return;
  const isVi = state.lang === "vi";
  const filteredUsers = getFilteredAdminUsers();
  const pagination = getAdminUserPagination(filteredUsers);
  const tbody = screens.admin?.querySelector(".admin-users-table tbody");
  const footerText = screens.admin?.querySelector(".admin-table-footer > span");
  const footerPagination = screens.admin?.querySelector(".admin-table-footer > div");
  if (!tbody) {
    renderAdmin();
    return;
  }
  tbody.innerHTML = pagination.pageUsers.length > 0
    ? buildAdminUserRowsHTML(pagination.pageUsers, isVi)
    : `<tr><td colspan="7" class="admin-empty">${isVi ? "Không có người dùng phù hợp bộ lọc." : "没有符合筛选条件的用户。"}</td></tr>`;
  if (footerText) {
    const total = hasAdminUsersServerPagination() ? pagination.total : filteredUsers.length;
    footerText.textContent = isVi
      ? `Hiển thị ${total > 0 ? pagination.startIndex + 1 : 0} - ${pagination.endIndex} trên ${total} kết quả`
      : `显示 ${total > 0 ? pagination.startIndex + 1 : 0} - ${pagination.endIndex} / ${total} 个结果`;
  }
  if (footerPagination) {
    footerPagination.innerHTML = renderAdminUserPaginationHTML(pagination.totalPages, pagination.currentPage);
  }
}

function getAdminCustomerUsers() {
  const endUsers = (state.adminUsers || []).filter(isAdminEndUser);
  if (!isCtvAdminUser()) return endUsers;
  const ownRef = normalizeAdminCtvRef(state.adminUser?.ref || state.adminUser?.referralRef);
  if (!ownRef) return endUsers;
  return endUsers.filter((user) => normalizeAdminCtvRef(user.ref || user.referralRef) === ownRef);
}

function formatAdminCustomerDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString("vi-VN", { dateStyle: "short", timeStyle: "short" });
}

function renderAdminCustomersPanelHTML(isVi) {
  const query = normalizeLatin(String(state.adminCustomerSearch || "").trim());
  const from = String(state.adminCustomerFrom || "");
  const to = String(state.adminCustomerTo || "");
  const customers = getAdminCustomerUsers().filter((user) => {
    const createdDate = String(user.createdAt || "").slice(0, 10);
    if (from && (!createdDate || createdDate < from)) return false;
    if (to && (!createdDate || createdDate > to)) return false;
    if (!query) return true;
    return [user.email, user.fullName, user.src, user.currentLevel].some((value) => normalizeLatin(String(value || "")).includes(query));
  });
  const vipCustomers = customers.filter(isActivePremiumUser);
  const rows = customers.map((user) => `
    <tr>
      <td>${escapeAttr(user.email || "—")}</td>
      <td>${escapeAttr(formatAdminCustomerDate(user.createdAt))}</td>
      <td>${escapeAttr(user.src || "—")}</td>
      <td>${isActivePremiumUser(user) ? escapeAttr(getAdminUserPlanLabel(getAdminUserPlan(user), isVi)) : (isVi ? "Không VIP" : "非 VIP")}</td>
      <td>${escapeAttr(user.premiumUntil ? formatAdminDate(user.premiumUntil) : "N/A")}</td>
      <td>—</td>
      <td>—</td>
      <td>${escapeAttr(user.currentLevel || "None")}</td>
    </tr>
  `).join("");
  return `
    <section class="admin-customers-panel">
      <div class="admin-customers-header">
        <div><h2>${isVi ? "Hệ thống - Khách hàng của tôi" : "系统 - 我的客户"}</h2><p>${isVi ? "Theo dõi danh sách khách hàng và trạng thái VIP." : "查看客户列表和 VIP 状态。"}</p></div>
        <div class="admin-customer-filters"><input id="adminCustomerSearchInput" type="search" value="${escapeAttr(state.adminCustomerSearch || "")}" placeholder="${isVi ? "Tìm email khách hàng..." : "搜索客户邮箱..."}" /><label>${isVi ? "Từ ngày" : "开始日期"}<input id="adminCustomerFrom" type="date" value="${escapeAttr(from)}" /></label><label>${isVi ? "Đến ngày" : "结束日期"}<input id="adminCustomerTo" type="date" value="${escapeAttr(to)}" /></label></div>
      </div>
      <div class="admin-customer-metrics"><article><span>${isVi ? "Tổng số khách hàng" : "客户总数"}</span><strong>${getAdminCustomerUsers().length}</strong></article><article><span>${isVi ? "Khách hàng VIP" : "VIP 客户"}</span><strong>${getAdminCustomerUsers().filter(isActivePremiumUser).length}</strong></article><article><span>${isVi ? "Tỷ lệ chuyển đổi VIP" : "VIP 转化率"}</span><strong>${getAdminCustomerUsers().length ? `${Math.round((getAdminCustomerUsers().filter(isActivePremiumUser).length / getAdminCustomerUsers().length) * 1000) / 10}%` : "0%"}</strong></article></div>
      <p class="admin-content-subtitle">${isVi ? "Hành động xem chi tiết học tập sẽ được mở rộng trong các bước tiếp theo." : "后续将扩展学习详情查看操作。"}</p>
      <div class="admin-table-wrap"><table class="admin-users-table admin-customers-table"><thead><tr><th>Email</th><th>${isVi ? "Thời gian đăng ký" : "注册时间"}</th><th>${isVi ? "Kênh nguồn" : "来源渠道"}</th><th>${isVi ? "Trạng thái VIP" : "VIP 状态"}</th><th>${isVi ? "VIP hết hạn" : "VIP 到期"}</th><th>${isVi ? "Tổng câu đã làm" : "完成题数"}</th><th>${isVi ? "Tổng câu sai" : "错题数"}</th><th>${isVi ? "Lộ trình học" : "学习路线"}</th></tr></thead><tbody>${rows || `<tr><td colspan="8" class="admin-empty">${isVi ? "Chưa có khách hàng." : "暂无客户。"}</td></tr>`}</tbody></table></div>
    </section>
  `;
}

function renderAdmin() {
  const isVi = state.lang === "vi";
  if (!canAccessAdminConsole()) {
    screens.admin.innerHTML = `
      <section class="admin-login-screen">
        <form class="admin-login-card" id="adminLoginForm">
          <div class="admin-login-logo">中</div>
          <h1>${isVi ? "Đăng nhập Admin" : "管理员登录"}</h1>
          <p>${isVi ? "Chỉ tài khoản có quyền admin mới có thể truy cập trang quản trị." : "只有管理员账户可以访问控制台。"}</p>
          <label>
            <span>Email</span>
            <input id="adminLoginEmail" type="email" placeholder="admin@huamei.vn" required />
          </label>
          <label>
            <span>${isVi ? "Mật khẩu" : "密码"}</span>
            <input id="adminLoginPassword" type="password" placeholder="••••••••" required />
          </label>
          <p class="admin-login-message ${state.adminStatus ? "error" : ""}">${escapeAttr(state.adminStatus || "")}</p>
          <button type="submit">${isVi ? "Đăng nhập quản trị" : "登录管理后台"}</button>
        </form>
      </section>
    `;
    return;
  }

  const studentUsers = state.adminUsers.filter((user) => user.role !== "admin");
  const adminUserSummary = state.adminUserSummary || {};
  const totalUsers = Number.isFinite(Number(adminUserSummary.totalUsers)) ? Number(adminUserSummary.totalUsers) : studentUsers.length;
  const premiumStudentUsers = studentUsers.filter((user) => isActivePremiumUser(user));
  const premiumStudentUsersTotal = Number.isFinite(Number(adminUserSummary.premiumUsers)) ? Number(adminUserSummary.premiumUsers) : premiumStudentUsers.length;
  const vipRate = totalUsers > 0 ? Math.round((premiumStudentUsersTotal / totalUsers) * 1000) / 10 : 0;
  const vipRateMeta = isVi
    ? `${premiumStudentUsersTotal}/${totalUsers} tài khoản đã lên Pro`
    : `${premiumStudentUsersTotal}/${totalUsers} 个账户已升级 Pro`;
  const adminTab = getSafeAdminTab(state.adminTab);
  state.adminTab = adminTab;
  const showAdminCustomersTab = shouldShowAdminTab("customers");
  const showAdminUsersTab = shouldShowAdminTab("users");
  const showAdminVipTab = shouldShowAdminTab("vip");
  const showAdminCtvTab = shouldShowAdminTab("collaborators");
  const showAdminAnalyticsTab = shouldShowAdminTab("analytics");
  const showAdminContentTab = shouldShowAdminTab("content");
  const adminMainClass = [
    adminTab === "subscriptions" ? "admin-main--subscriptions" : "",
    adminTab === "content" ? "admin-main--content" : "",
    adminTab === "collaborators" ? "admin-main--ctv" : "",
    adminTab === "analytics" ? "admin-main--analytics" : "",
    adminTab === "vip" ? "admin-main--vip" : "",
    adminTab === "customers" ? "admin-main--customers" : "",
  ].filter(Boolean).join(" ");
  const filteredUsers = getFilteredAdminUsers();
  const userPagination = getAdminUserPagination(filteredUsers);
  const levelFilter = state.adminUserLevelFilter || "all";
  const planFilter = normalizeAdminUserPlanFilter(state.adminUserPlanFilter);
  const rows = buildAdminUserRowsHTML(userPagination.pageUsers, isVi);
  const adminTitleMap = {
    vip: isVi ? "Khóa VIP" : "VIP 管理",
    users: isVi ? "Quản lý người dùng" : "用户管理",
    subscriptions: isVi ? "Quản lý gói đăng ký" : "订阅套餐管理",
    content: isVi ? "Quản lý nội dung" : "内容管理",
    collaborators: isVi ? "Quản lí CTV" : "合作伙伴管理",
    analytics: isVi ? "Phân tích học tập" : "学习分析",
  };
  const adminSubtitleMap = {
    vip: isVi ? "Mở VIP theo thời hạn, đặt ngày hết hạn hoặc hủy VIP cho từng tài khoản." : "为单个账户开通 VIP、设置到期日或取消 VIP。",
    users: `<strong>${totalUsers || 0}</strong> ${isVi ? "người dùng đã đăng ký" : "注册用户"} <span>↗ +12% ${isVi ? "tháng này" : "本月"}</span>`,
    subscriptions: isVi ? "Theo dõi doanh thu, giao dịch và các gói Pro đang bán." : "跟踪收入、交易和正在销售的 Pro 套餐。",
    content: isVi ? "Cấu hình giới hạn miễn phí, ảnh bìa HSK và quyền truy cập nội dung." : "配置免费限制、HSK 封面和内容访问权限。",
    collaborators: isVi ? "Quản lý cộng tác viên, theo dõi hoa hồng và tạo link giới thiệu." : "管理合作伙伴、跟踪佣金并生成推广链接。",
    analytics: isVi ? "Theo dõi xu hướng học tập, kênh nguồn và chuyển đổi VIP." : "跟踪学习趋势、流量来源和 VIP 转化。",
  };

  adminTitleMap.vip = isVi ? "Quản lí VIP" : "VIP 管理";
  adminSubtitleMap.vip = isVi
    ? "Theo dõi popup VIP, lượt kích hoạt và doanh thu theo ngày."
    : "按日期查看 VIP 弹窗、开通和收入。";

  screens.admin.innerHTML = `
    <div class="admin-console ${isStaffAdminUser() ? "admin-console--staff" : "admin-console--admin"}">
      <aside class="admin-sidebar">
        <div class="admin-brand">
          <span>中</span>
          <div><strong>HuaMei</strong><small>ADMIN CONSOLE</small></div>
        </div>
        <button class="admin-language-inline-btn" id="adminLanguageInlineBtn" type="button">
          <span class="${isVi ? "active" : ""}">VI</span>
          <span class="${state.lang === "zh" ? "active" : ""}">中文</span>
        </button>
        <nav>
          ${showAdminCustomersTab ? `<button id="adminCustomersTabBtn" class="${adminTab === "customers" ? "active" : ""}" type="button"><span>👥</span>${isVi ? "Khách hàng của tôi" : "我的客户"}</button>` : ""}
          ${showAdminUsersTab ? `<button id="adminUsersTabBtn" class="${adminTab === "users" ? "active" : ""}" type="button"><span>👥</span>${isVi ? "Người dùng" : "用户"}</button>` : ""}
          ${showAdminVipTab ? `<button id="adminVipTabBtn" class="${adminTab === "vip" ? "active" : ""}" type="button"><span>VIP</span>${isVi ? "Quản lí VIP" : "VIP 管理"}</button>` : ""}
          ${showAdminCtvTab ? `<button id="adminCtvTabBtn" class="${adminTab === "collaborators" ? "active" : ""}" type="button"><span>🔗</span>${isVi ? "Quản lí CTV" : "合作伙伴管理"}</button>` : ""}
          ${showAdminAnalyticsTab ? `<button id="adminAnalyticsTabBtn" class="${adminTab === "analytics" ? "active" : ""}" type="button"><span>📊</span>${isVi ? "Phân tích học tập" : "学习分析"}</button>` : ""}
          ${showAdminContentTab ? `<button id="adminContentTabBtn" class="${adminTab === "content" ? "active" : ""}" type="button"><span>📚</span>${isVi ? "Khóa bài học" : "课程锁定"}</button>` : ""}
        </nav>
        
        <div class="admin-sidebar-foot">
          <button class="admin-language-btn" id="adminLogoutBtn" type="button">
            <span>${t("logout")}</span>
            <strong>${isVi ? "Admin" : "管理员"}</strong>
          </button>
          <button class="admin-language-btn" id="adminLanguageBtn" type="button">
            <span>${isVi ? "Ngôn ngữ" : "语言"}</span>
            <strong>${isVi ? "Tiếng Việt / 中文" : "中文 / Tiếng Việt"}</strong>
          </button>
        </div>
      </aside>

      <main class="admin-main ${adminMainClass}">
        <header class="admin-topbar">
          <div class="admin-search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
            <input type="text" placeholder="${isVi ? "Tìm kiếm hệ thống..." : "搜索系统..."}" />
          </div>
          <div class="admin-top-user">
            <span>🔔</span><span>?</span><i></i>
            <div><strong>${isVi ? "Quản trị viên" : "管理员"}</strong><small>${isVi ? "Super Admin" : "超级管理员"}</small></div>
            <img src="assets/review_user_1.png" alt="Admin" />
          </div>
        </header>

        <section class="admin-title-row">
          <div>
            <h1>${adminTitleMap[adminTab] || adminTitleMap.users}</h1>
            <p>${adminSubtitleMap[adminTab] || adminSubtitleMap.users}</p>
          </div>
          ${adminTab === "users" ? `
            <button class="admin-create-account-card" id="adminCreateAccountBtn" type="button">
              <strong>${isVi ? "Tạo tài khoản" : "创建账户"}</strong>
            </button>
          ` : ""}
        </section>

        <section class="admin-dashboard-grid">
          <div class="admin-filter-panel">
            <div class="admin-filter-search">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
              <input id="adminUserSearchInput" type="text" value="${escapeAttr(state.adminUserSearch)}" placeholder="${isVi ? "Tìm theo tên, email hoặc ID..." : "按姓名、邮箱或 ID 搜索..."}" />
            </div>
            <select id="adminUserLevelFilter" class="admin-filter-select" aria-label="${isVi ? "Lọc theo cấp độ" : "按等级筛选"}">
              <option value="all" ${levelFilter === "all" ? "selected" : ""}>${isVi ? "Tất cả cấp độ" : "所有等级"}</option>
              ${Object.keys(hskLevels).map((level) => `<option value="${level}" ${levelFilter === level ? "selected" : ""}>${level}</option>`).join("")}
            </select>
            <select id="adminUserPlanFilter" class="admin-filter-select" aria-label="${isVi ? "Lọc theo gói" : "按套餐筛选"}">
              <option value="all" ${planFilter === "all" ? "selected" : ""}>${isVi ? "Tất cả" : "全部"}</option>
              <option value="3d" ${planFilter === "3d" ? "selected" : ""}>${isVi ? "VIP 3 ngày" : "3天 VIP"}</option>
              <option value="30d" ${planFilter === "30d" ? "selected" : ""}>${isVi ? "VIP 30 ngày" : "30天 VIP"}</option>
              <option value="90d" ${planFilter === "90d" ? "selected" : ""}>${isVi ? "VIP 3 tháng" : "90天 VIP"}</option>
            </select>
            <button id="adminRefreshBtn" class="admin-filter-refresh" type="button">${isVi ? "Làm mới" : "刷新"}</button>
          </div>
          <aside class="admin-vip-card">
            <span>${isVi ? "Tỷ lệ chuyển đổi VIP" : "VIP 转化率"}</span>
            <strong>${vipRate}%</strong>
            <small>${vipRateMeta}</small>
          </aside>
        </section>

        ${adminTab === "customers" ? renderAdminCustomersPanelHTML(isVi) : ""}

        <section class="admin-users-panel">
          <div class="admin-table-wrap">
            <table class="admin-users-table">
              <thead>
                <tr>
                  <th>${isVi ? "Họ và tên" : "姓名"}</th>
                  <th>Email</th>
                  <th>${isVi ? "Vai trò" : "角色"}</th>
                  <th>${isVi ? "Cấp độ" : "等级"}</th>
                  <th>${isVi ? "Gói" : "套餐"}</th>
                  <th>${isVi ? "Thời hạn" : "期限"}</th>
                  <th>${isVi ? "Thao tác" : "操作"}</th>
                </tr>
              </thead>
              <tbody>
                ${rows || `<tr><td colspan="7" class="admin-empty">${escapeAttr(filteredUsers.length === 0 && state.adminUsers.length > 0 ? (isVi ? "Không có người dùng phù hợp bộ lọc." : "没有符合筛选条件的用户。") : (state.adminStatus || (isVi ? "Chưa có dữ liệu người dùng." : "暂无用户数据。")))}</td></tr>`}
              </tbody>
            </table>
          </div>
          <footer class="admin-table-footer">
            <span>${isVi ? `Hiển thị ${filteredUsers.length > 0 ? userPagination.startIndex + 1 : 0} - ${userPagination.endIndex} trên ${filteredUsers.length} kết quả` : `显示 ${filteredUsers.length > 0 ? userPagination.startIndex + 1 : 0} - ${userPagination.endIndex} / ${filteredUsers.length} 个结果`}</span>
            <div>${renderAdminUserPaginationHTML(userPagination.totalPages, userPagination.currentPage)}</div>
          </footer>
        </section>

        <section class="admin-subscriptions-panel">
          <iframe
            class="admin-subscriptions-frame"
            src="subscriptions.html?lang=${encodeURIComponent(state.lang)}"
            title="${isVi ? "Quản lý gói đăng ký" : "订阅套餐管理"}"
            loading="lazy"></iframe>
        </section>

        ${adminTab === "content" ? renderAdminContentPanelHTML() : ""}
        ${adminTab === "collaborators" ? renderAdminCollaboratorsPanelHTML() : ""}
        ${adminTab === "analytics" ? renderAdminAnalyticsPanelHTML() : ""}
        ${adminTab === "vip" ? renderAdminVipPanelHTML() : ""}
      </main>
    </div>
  `;
}

function showModal(type) {
  if (BACKEND_DISABLED) {
    showToast(backendDisabledMessage());
    return;
  }
  const modalDiv = document.createElement("div");
  modalDiv.id = "authModal";
  modalDiv.className = "auth-modal-overlay";

  const isLogin = type === "login";
  const isVi = state.lang === "vi";
  modalDiv.innerHTML = `
    <div class="auth-modal-content">
      <button class="auth-modal-close" id="closeAuthModal" type="button">&times;</button>
      <div class="auth-modal-logo auth-modal-logo--brand">
        <img src="/assets/huamei-logo.png" alt="HuaMei" />
      </div>
      <h2>${isLogin ? (isVi ? "Đăng nhập" : "登录") : (isVi ? "Đăng ký tài khoản" : "注册账户")}</h2>
      <p class="auth-modal-sub">${isLogin ? (isVi ? "Chào mừng bạn quay trở lại!" : "欢迎回来！") : (isVi ? "Bắt đầu hành trình học tiếng Trung ngay hôm nay." : "立即开始您的中文学习之旅。")}</p>
      
      <form id="authForm" onsubmit="event.preventDefault();">
        ${!isLogin ? `
        <div class="form-group">
          <label for="authName">${isVi ? "Họ và tên" : "姓名"}</label>
          <input type="text" id="authName"  required />
        </div>
        ` : ""}
        <div class="form-group">
          <label for="authEmail">Email</label>
          <input type="email" id="authEmail"  required />
        </div>
        <div class="form-group">
          <label for="authPassword">${isVi ? "Mật khẩu" : "密码"}</label>
          <div class="password-input-row">
            <input type="password" id="authPassword" required />
            <button class="password-toggle-btn" type="button" data-toggle-password="authPassword">${isVi ? "Hiện" : "显示"}</button>
          </div>
        </div>
        ${!isLogin ? `
        <div class="form-group">
          <label for="authConfirmPassword">${isVi ? "Nhập lại mật khẩu" : "确认密码"}</label>
          <div class="password-input-row">
            <input type="password" id="authConfirmPassword" required />
            <button class="password-toggle-btn" type="button" data-toggle-password="authConfirmPassword">${isVi ? "Hiện" : "显示"}</button>
          </div>
        </div>
        <div class="form-group checkbox-group">
          <input type="checkbox" id="authTerms" required />
          <label for="authTerms">${isVi ? "Tôi đồng ý với các điều khoản dịch vụ" : "我同意服务条款"}</label>
        </div>
        ` : ""}
        <p class="auth-form-message" id="authFormMessage" role="status"></p>
        <button type="submit" class="btn-auth-submit">${isLogin ? (isVi ? "Đăng nhập" : "登录") : (isVi ? "Đăng ký" : "注册")}</button>
      </form>
      
      <div class="auth-modal-footer">
        <span>${isLogin ? (isVi ? "Chưa có tài khoản?" : "还没有账户？") : (isVi ? "Đã có tài khoản?" : "已有账户？")}</span>
        <button class="btn-auth-switch" id="authSwitchBtn" type="button">${isLogin ? (isVi ? "Đăng ký ngay" : "立即注册") : (isVi ? "Đăng nhập" : "登录")}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalDiv);

  document.getElementById("closeAuthModal").onclick = () => modalDiv.remove();

  document.getElementById("authSwitchBtn").onclick = () => {
    modalDiv.remove();
    showModal(isLogin ? "register" : "login");
  };

  modalDiv.querySelectorAll("[data-toggle-password]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = modalDiv.querySelector(`#${button.dataset.togglePassword}`);
      if (!input) return;
      const showPassword = input.type === "password";
      input.type = showPassword ? "text" : "password";
      button.textContent = showPassword
        ? (isVi ? "Ẩn" : "隐藏")
        : (isVi ? "Hiện" : "显示");
    });
  });

  document.getElementById("authForm").onsubmit = async (e) => {
    e.preventDefault();
    const message = document.getElementById("authFormMessage");
    const submitBtn = modalDiv.querySelector(".btn-auth-submit");
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value;
    const confirmPassword = document.getElementById("authConfirmPassword")?.value || "";
    const fullName = document.getElementById("authName")?.value.trim();

    message.textContent = "";
    message.className = "auth-form-message";
    if (!isLogin && password !== confirmPassword) {
      message.textContent = isVi ? "Mật khẩu nhập lại không khớp" : "两次输入的密码不一致";
      message.classList.add("error");
      return;
    }
    submitBtn.disabled = true;
    submitBtn.textContent = isLogin ? (isVi ? "Đang đăng nhập..." : "正在登录...") : (isVi ? "Đang đăng ký..." : "正在注册...");

    try {
      const data = await apiRequest(isLogin ? "/api/login" : "/api/register", {
        method: "POST",
        body: JSON.stringify(isLogin ? { email, password } : {
          fullName,
          email,
          password,
          ref: getReferralRefFromUrl(),
          src: getTrafficSource(),
        }),
      });
      if (!isLogin) clearReferralAttribution();
      state.user = data.user;
      state.adminUser = isAdminPortalRole(data.user?.role) ? data.user : null;
      if (state.adminUser) state.adminTab = getSafeAdminTab(state.adminTab);
      saveState();
      loadContentLocks().then(() => {
        renderChrome();
        if (state.screen === "course") renderCourse();
      });
      message.textContent = isLogin ? (isVi ? "Đăng nhập thành công." : "登录成功。") : (isVi ? "Đăng ký thành công." : "注册成功。");
      message.classList.add("success");
      const pendingPlanId = state.pendingUpgradePlanId;
      state.pendingUpgradePlanId = "";
      setTimeout(() => {
        modalDiv.remove();
        if (pendingPlanId) showTransferInfoModal(pendingPlanId);
      }, 500);
    } catch (error) {
      message.textContent = error.message;
      message.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = isLogin ? (isVi ? "Đăng nhập" : "登录") : (isVi ? "Đăng ký" : "注册");
    }
  };
}

function showEmailVerificationModal() {
  if (BACKEND_DISABLED) {
    showToast(backendDisabledMessage());
    return;
  }
  if (!state.user?.id) {
    showModal("login");
    return;
  }
  if (state.user.emailVerified === true) {
    showToast(state.lang === "vi" ? "Email đã được xác minh." : "邮箱已验证。");
    return;
  }
  document.getElementById("authModal")?.remove();
  const isVi = state.lang === "vi";
  const email = state.user.email || "";
  const modalDiv = document.createElement("div");
  modalDiv.id = "authModal";
  modalDiv.className = "auth-modal-overlay";
  modalDiv.innerHTML = `
    <div class="auth-modal-content auth-modal-content--email-verify">
      <button class="auth-modal-close" id="closeAuthModal" type="button">&times;</button>
      <div class="auth-modal-logo">验</div>
      <h2>${isVi ? "Xác minh email" : "邮箱验证"}</h2>
      <p class="auth-modal-sub">${isVi ? `Mã xác minh sẽ được gửi tới ${escapeHtml(email)}` : `验证码将发送至 ${escapeHtml(email)}`}</p>

      <form id="emailVerificationForm" onsubmit="event.preventDefault();">
        <div class="form-group">
          <label for="emailVerificationCodeModalInput">${isVi ? "Mã xác minh" : "验证码"}</label>
          <input type="text" id="emailVerificationCodeModalInput" inputmode="numeric" maxlength="6" placeholder="${isVi ? "Nhập mã 6 số" : "输入 6 位验证码"}" value="${escapeAttr(state.emailVerificationCode)}" required />
        </div>
        <p class="auth-form-message" id="emailVerificationMessage" role="status">${escapeHtml(state.emailVerificationStatus || "")}</p>
        <div class="email-verification-modal-actions">
          <button type="button" class="btn-auth-secondary" id="emailVerificationSendBtn">${isVi ? "Gửi mã" : "发送验证码"}</button>
          <button type="submit" class="btn-auth-submit" id="emailVerificationConfirmBtn">${isVi ? "Xác minh" : "验证"}</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modalDiv);
  const closeModal = () => modalDiv.remove();
  const message = document.getElementById("emailVerificationMessage");
  const codeInput = document.getElementById("emailVerificationCodeModalInput");
  const sendBtn = document.getElementById("emailVerificationSendBtn");
  const confirmBtn = document.getElementById("emailVerificationConfirmBtn");

  document.getElementById("closeAuthModal").onclick = closeModal;
  modalDiv.onclick = (event) => { if (event.target === modalDiv) closeModal(); };
  codeInput?.focus();
  codeInput.oninput = () => {
    state.emailVerificationCode = codeInput.value.replace(/\D/g, "").slice(0, 6);
    codeInput.value = state.emailVerificationCode;
  };

  sendBtn.onclick = async () => {
    sendBtn.disabled = true;
    message.textContent = isVi ? "Đang gửi mã xác minh..." : "正在发送验证码...";
    message.className = "auth-form-message";
    try {
      const data = await apiRequest(`/api/users/${encodeURIComponent(state.user.id)}/email-verification/send`, {
        method: "POST",
        headers: { "X-User-Id": state.user.id },
      });
      state.emailVerificationStatus = data.alreadyVerified
        ? (isVi ? "Email đã được xác minh." : "邮箱已验证。")
        : data.delivery === "dev" && data.devCode
          ? (isVi ? `Đã tạo mã xác minh. Mã dev: ${data.devCode}` : `已生成验证码。开发码：${data.devCode}`)
          : (isVi ? "Đã gửi mã xác minh tới email của bạn." : "验证码已发送至你的邮箱。");
      message.textContent = state.emailVerificationStatus;
      message.classList.add("success");
    } catch (error) {
      state.emailVerificationStatus = error.message || (isVi ? "Không thể gửi mã xác minh." : "无法发送验证码。");
      message.textContent = state.emailVerificationStatus;
      message.classList.add("error");
    } finally {
      sendBtn.disabled = false;
      renderAccount();
    }
  };

  document.getElementById("emailVerificationForm").onsubmit = async (event) => {
    event.preventDefault();
    const code = String(state.emailVerificationCode || "").replace(/\D/g, "");
    message.className = "auth-form-message";
    if (!/^\d{6}$/.test(code)) {
      state.emailVerificationStatus = isVi ? "Vui lòng nhập mã gồm 6 chữ số." : "请输入 6 位验证码。";
      message.textContent = state.emailVerificationStatus;
      message.classList.add("error");
      return;
    }
    confirmBtn.disabled = true;
    message.textContent = isVi ? "Đang xác minh mã..." : "正在验证验证码...";
    try {
      const data = await apiRequest(`/api/users/${encodeURIComponent(state.user.id)}/email-verification/confirm`, {
        method: "POST",
        headers: { "X-User-Id": state.user.id },
        body: JSON.stringify({ code }),
      });
      if (data.user) state.user = { ...state.user, ...data.user };
      state.emailVerificationCode = "";
      state.emailVerificationFormOpen = false;
      state.emailVerificationStatus = isVi ? "Xác minh email thành công." : "邮箱验证成功。";
      saveState();
      recordUserActivity("email_verified");
      renderAccount();
      message.textContent = state.emailVerificationStatus;
      message.classList.add("success");
      setTimeout(() => modalDiv.remove(), 500);
    } catch (error) {
      state.emailVerificationStatus = error.message || (isVi ? "Mã xác minh không hợp lệ." : "验证码无效。");
      message.textContent = state.emailVerificationStatus;
      message.classList.add("error");
    } finally {
      confirmBtn.disabled = false;
    }
  };
}

function showChangePasswordModal() {
  if (BACKEND_DISABLED) {
    showToast(backendDisabledMessage());
    return;
  }
  if (!state.user?.id) {
    showModal("login");
    return;
  }

  const isVi = state.lang === "vi";
  const existing = document.getElementById("changePasswordModal");
  if (existing) existing.remove();

  const modalDiv = document.createElement("div");
  modalDiv.id = "changePasswordModal";
  modalDiv.className = "auth-modal-overlay change-password-overlay";
  modalDiv.innerHTML = `
    <div class="auth-modal-content change-password-modal">
      <button class="auth-modal-close" id="closeChangePasswordModal" type="button">&times;</button>
      <div class="auth-modal-logo change-password-logo">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      </div>
      <h2>${isVi ? "Đổi mật khẩu" : "修改密码"}</h2>
      <p class="auth-modal-sub">${isVi ? "Nhập mật khẩu hiện tại để bảo vệ tài khoản của bạn." : "请输入当前密码以保护你的账号。"}</p>

      <form id="changePasswordForm" class="auth-form change-password-form">
        <div class="form-group">
          <label for="currentPasswordInput">${isVi ? "Mật khẩu hiện tại" : "当前密码"}</label>
          <input type="password" id="currentPasswordInput" autocomplete="current-password" required />
        </div>
        <div class="form-group">
          <label for="newPasswordInput">${isVi ? "Mật khẩu mới" : "新密码"}</label>
          <input type="password" id="newPasswordInput" autocomplete="new-password" minlength="6" required />
          <small class="change-password-hint">${isVi ? "Tối thiểu 6 ký tự." : "至少 6 个字符。"}</small>
        </div>
        <div class="form-group">
          <label for="confirmPasswordInput">${isVi ? "Nhập lại mật khẩu mới" : "确认新密码"}</label>
          <input type="password" id="confirmPasswordInput" autocomplete="new-password" minlength="6" required />
        </div>
        <p class="auth-form-message" id="changePasswordMessage" role="status"></p>
        <button type="submit" class="btn-auth-submit">${isVi ? "Cập nhật mật khẩu" : "更新密码"}</button>
      </form>
    </div>
  `;

  document.body.appendChild(modalDiv);

  const closeModal = () => modalDiv.remove();
  modalDiv.querySelector("#closeChangePasswordModal").onclick = closeModal;
  modalDiv.onclick = (event) => {
    if (event.target === modalDiv) closeModal();
  };

  modalDiv.querySelector("#changePasswordForm").onsubmit = async (event) => {
    event.preventDefault();
    const message = modalDiv.querySelector("#changePasswordMessage");
    const submitBtn = modalDiv.querySelector(".btn-auth-submit");
    const currentPassword = modalDiv.querySelector("#currentPasswordInput").value;
    const newPassword = modalDiv.querySelector("#newPasswordInput").value;
    const confirmPassword = modalDiv.querySelector("#confirmPasswordInput").value;

    message.textContent = "";
    message.className = "auth-form-message";
    if (newPassword !== confirmPassword) {
      message.textContent = isVi ? "Mật khẩu xác nhận không khớp." : "两次输入的新密码不一致。";
      message.classList.add("error");
      return;
    }
    if (currentPassword === newPassword) {
      message.textContent = isVi ? "Mật khẩu mới cần khác mật khẩu hiện tại." : "新密码不能与当前密码相同。";
      message.classList.add("error");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = isVi ? "Đang cập nhật..." : "正在更新...";

    try {
      await apiRequest(`/api/users/${encodeURIComponent(state.user.id)}/password`, {
        method: "PATCH",
        headers: { "X-User-Id": state.user.id },
        body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
      });
      message.textContent = isVi ? "Đã đổi mật khẩu thành công." : "密码修改成功。";
      message.classList.add("success");
      recordUserActivity("password");
      showToast(isVi ? "Đã đổi mật khẩu thành công" : "密码修改成功");
      setTimeout(closeModal, 650);
    } catch (error) {
      message.textContent = error.message || (isVi ? "Không thể đổi mật khẩu." : "无法修改密码。");
      message.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = isVi ? "Cập nhật mật khẩu" : "更新密码";
    }
  };
}

function showAdminCreateAccountModal() {
  const isVi = state.lang === "vi";
  const existing = document.getElementById("adminCreateAccountModal");
  if (existing) existing.remove();

  const modalDiv = document.createElement("div");
  modalDiv.id = "adminCreateAccountModal";
  modalDiv.className = "auth-modal-overlay admin-create-account-overlay";
  modalDiv.innerHTML = `
    <div class="auth-modal-content admin-create-account-modal">
      <button class="auth-modal-close" id="closeAdminCreateAccountModal" type="button">&times;</button>
      <div class="auth-modal-logo">＋</div>
      <h2>${isVi ? "Tạo tài khoản học viên" : "创建学员账户"}</h2>
      <p class="auth-modal-sub">${isVi ? "Nhập thông tin tài khoản theo dữ liệu quản lý người dùng." : "按用户管理字段填写账户信息。"}</p>

      <form id="adminCreateAccountForm" class="auth-form admin-create-account-form">
        <div class="form-group">
          <label for="adminCreateName">${isVi ? "Họ và tên" : "姓名"}</label>
          <input type="text" id="adminCreateName" placeholder="${isVi ? "Nguyễn Nhi" : "Nguyễn Nhi"}" required />
        </div>
        <div class="form-group">
          <label for="adminCreateEmail">Email</label>
          <input type="email" id="adminCreateEmail" placeholder="student@gmail.com" required />
        </div>
        <div class="admin-create-account-grid">
          <div class="form-group">
            <label for="adminCreateLevel">${isVi ? "Cấp độ" : "等级"}</label>
            <select id="adminCreateLevel">
              ${Object.keys(hskLevels).map((level) => `<option value="${level}" ${level === "HSK2" ? "selected" : ""}>${level}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label for="adminCreatePlan">${isVi ? "Gói" : "套餐"}</label>
            <select id="adminCreatePlan">
              <option value="FREE">Free</option>
              <option value="PREMIUM">Pro</option>
            </select>
          </div>
        </div>
        <div class="admin-create-account-grid admin-create-account-grid--single">
          <div class="form-group">
            <label for="adminCreateDuration">${isVi ? "Thời hạn Pro (ngày)" : "Pro 期限（天）"}</label>
            <input type="number" id="adminCreateDuration" min="0" step="1" placeholder="N/A" />
          </div>
        </div>
        <div class="form-group">
          <label for="adminCreatePassword">${isVi ? "Mật khẩu khởi tạo" : "初始密码"}</label>
          <input type="password" id="adminCreatePassword" placeholder="••••••••" required />
        </div>
        <p class="auth-form-message" id="adminCreateAccountMessage" role="status"></p>
        <button type="submit" class="btn-auth-submit">${isVi ? "Tạo tài khoản" : "创建账户"}</button>
      </form>
    </div>
  `;

  document.body.appendChild(modalDiv);

  const closeModal = () => modalDiv.remove();
  modalDiv.querySelector("#closeAdminCreateAccountModal").onclick = closeModal;
  modalDiv.onclick = (event) => {
    if (event.target === modalDiv) closeModal();
  };

  modalDiv.querySelector("#adminCreateAccountForm").onsubmit = async (event) => {
    event.preventDefault();
    const message = modalDiv.querySelector("#adminCreateAccountMessage");
    const submitBtn = modalDiv.querySelector(".btn-auth-submit");
    const payload = {
      fullName: modalDiv.querySelector("#adminCreateName").value.trim(),
      email: modalDiv.querySelector("#adminCreateEmail").value.trim(),
      currentLevel: modalDiv.querySelector("#adminCreateLevel").value,
      plan: modalDiv.querySelector("#adminCreatePlan").value,
      durationDays: Number(modalDiv.querySelector("#adminCreateDuration").value || 0),
      isActive: true,
      password: modalDiv.querySelector("#adminCreatePassword").value,
    };

    message.textContent = "";
    message.className = "auth-form-message";
    submitBtn.disabled = true;
    submitBtn.textContent = isVi ? "Đang tạo..." : "正在创建...";

    try {
      const data = await apiRequest("/api/admin/users", {
        method: "POST",
        headers: { "X-Admin-User-Id": getAdminUserId() },
        body: JSON.stringify(payload),
      });
      state.adminUsers = [data.user, ...state.adminUsers.filter((user) => user.id !== data.user.id)];
      loadAdminUsers();
      showToast(isVi ? "Đã tạo tài khoản học viên." : "已创建学员账户。");
      closeModal();
    } catch (error) {
      message.textContent = error.message;
      message.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = isVi ? "Tạo tài khoản" : "创建账户";
    }
  };
}

function showAdminDeleteUserConfirm(row) {
  const isVi = state.lang === "vi";
  const userId = row?.dataset?.userId || "";
  const email = row?.querySelector('[data-field="email"]')?.value?.trim() || "";
  const name = row?.querySelector('[data-field="fullName"]')?.value?.trim() || email;
  if (!userId) return;

  const existing = document.getElementById("adminDeleteUserModal");
  if (existing) existing.remove();

  const modalDiv = document.createElement("div");
  modalDiv.id = "adminDeleteUserModal";
  modalDiv.className = "auth-modal-overlay admin-delete-user-overlay";
  modalDiv.innerHTML = `
    <div class="auth-modal-content admin-delete-user-modal">
      <button class="auth-modal-close" id="closeAdminDeleteUserModal" type="button">&times;</button>
      <div class="auth-modal-logo admin-delete-user-logo">!</div>
      <h2>${isVi ? "Xóa người dùng" : "删除用户"}</h2>
      <p class="auth-modal-sub">${isVi ? "Bạn có chắc chắn muốn xóa người dùng này không" : "确定要删除此用户吗？"}</p>
      ${name ? `<p class="admin-delete-user-target">${escapeAttr(name)}${email && email !== name ? `<br><small>${escapeAttr(email)}</small>` : ""}</p>` : ""}
      <p class="auth-form-message" id="adminDeleteUserMessage" role="status"></p>
      <div class="admin-delete-user-actions">
        <button type="button" class="admin-delete-user-cancel" id="cancelAdminDeleteUserBtn">${isVi ? "Hủy" : "取消"}</button>
        <button type="button" class="admin-delete-user-confirm" id="confirmAdminDeleteUserBtn">${isVi ? "Xóa" : "删除"}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalDiv);

  const closeModal = () => modalDiv.remove();
  const confirmBtn = modalDiv.querySelector("#confirmAdminDeleteUserBtn");
  const cancelBtn = modalDiv.querySelector("#cancelAdminDeleteUserBtn");
  const message = modalDiv.querySelector("#adminDeleteUserMessage");

  modalDiv.querySelector("#closeAdminDeleteUserModal").onclick = closeModal;
  cancelBtn.onclick = closeModal;
  modalDiv.onclick = (event) => {
    if (event.target === modalDiv) closeModal();
  };

  confirmBtn.onclick = async () => {
    message.textContent = "";
    message.className = "auth-form-message";
    confirmBtn.disabled = true;
    cancelBtn.disabled = true;
    confirmBtn.textContent = isVi ? "Đang xóa..." : "正在删除...";

    try {
      await apiRequest(`/api/admin/users/${encodeURIComponent(userId)}`, {
        method: "DELETE",
        headers: {
          "X-Admin-User-Id": getAdminUserId(),
        },
      });
      state.adminUsers = state.adminUsers.filter((user) => user.id !== userId);
      closeModal();
      loadAdminUsers();
      showToast(isVi ? "Đã xóa người dùng." : "已删除用户。");
    } catch (error) {
      message.textContent = error.message;
      message.classList.add("error");
      confirmBtn.disabled = false;
      cancelBtn.disabled = false;
      confirmBtn.textContent = isVi ? "Xóa" : "删除";
    }
  };
}

function openAccountScreen() {
  if (!state.user) {
    showModal("login");
    return;
  }
  renderAccount();
  setScreen("account");
}

function showAccountPanel() {
  openAccountScreen();
}

function getAccountAvatarUrl() {
  return state.user?.avatarUrl || ACCOUNT_DEFAULT_AVATAR;
}

function resizeAccountAvatarFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error(state.lang === "vi" ? "Không thể đọc file ảnh." : "无法读取图片文件。"));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error(state.lang === "vi" ? "File ảnh không hợp lệ." : "图片文件无效。"));
      image.onload = () => {
        const sourceSize = Math.min(image.naturalWidth, image.naturalHeight);
        const sx = Math.max(0, Math.round((image.naturalWidth - sourceSize) / 2));
        const sy = Math.max(0, Math.round((image.naturalHeight - sourceSize) / 2));
        const canvas = document.createElement("canvas");
        canvas.width = ACCOUNT_AVATAR_SIZE;
        canvas.height = ACCOUNT_AVATAR_SIZE;
        const context = canvas.getContext("2d");
        context.drawImage(image, sx, sy, sourceSize, sourceSize, 0, 0, ACCOUNT_AVATAR_SIZE, ACCOUNT_AVATAR_SIZE);
        resolve(canvas.toDataURL("image/jpeg", 0.86));
      };
      image.src = String(reader.result || "");
    };
    reader.readAsDataURL(file);
  });
}

async function persistAccountProfile() {
  if (BACKEND_DISABLED || !state.user?.id) return null;
  const data = await apiRequest(`/api/users/${encodeURIComponent(state.user.id)}/profile`, {
    method: "PATCH",
    headers: { "X-User-Id": state.user.id },
    body: JSON.stringify({
      fullName: state.user.fullName,
      email: state.user.email,
      currentLevel: state.user.currentLevel || state.level || "HSK2",
      avatarUrl: state.user.avatarUrl || "",
    }),
  });
  if (data.user) {
    state.user = { ...state.user, ...data.user };
    if (state.user.currentLevel) state.level = state.user.currentLevel;
    saveState();
  }
  return data;
}

async function persistDailyReminderSetting(enabled) {
  if (BACKEND_DISABLED || !state.user?.id) return null;
  const data = await apiRequest(`/api/users/${encodeURIComponent(state.user.id)}/profile`, {
    method: "PATCH",
    headers: { "X-User-Id": state.user.id },
    body: JSON.stringify({
      fullName: state.user.fullName,
      email: state.user.email,
      currentLevel: state.user.currentLevel || state.level || "HSK2",
      avatarUrl: state.user.avatarUrl || "",
      dailyReminderEnabled: enabled,
    }),
  });
  if (data.user) {
    state.user = { ...state.user, ...data.user };
    saveState();
  }
  return data;
}

async function sendAccountEmailVerificationCode() {
  if (BACKEND_DISABLED) {
    showToast(backendDisabledMessage());
    return;
  }
  if (!state.user?.id) {
    showModal("login");
    return;
  }
  const isVi = state.lang === "vi";
  state.emailVerificationFormOpen = true;
  state.emailVerificationSending = true;
  state.emailVerificationStatus = isVi ? "Đang gửi mã xác minh..." : "正在发送验证码...";
  renderAccount();
  try {
    const data = await apiRequest(`/api/users/${encodeURIComponent(state.user.id)}/email-verification/send`, {
      method: "POST",
      headers: { "X-User-Id": state.user.id },
    });
    state.emailVerificationStatus = data.alreadyVerified
      ? (isVi ? "Email đã được xác minh." : "邮箱已验证。")
      : data.delivery === "dev" && data.devCode
        ? (isVi ? `Đã tạo mã xác minh. Mã dev: ${data.devCode}` : `已生成验证码。开发码：${data.devCode}`)
        : (isVi ? "Đã gửi mã xác minh tới email của bạn." : "验证码已发送至你的邮箱。");
    showToast(state.emailVerificationStatus);
  } catch (error) {
    state.emailVerificationStatus = error.message || (isVi ? "Không thể gửi mã xác minh." : "无法发送验证码。");
    showToast(state.emailVerificationStatus);
  } finally {
    state.emailVerificationSending = false;
    renderAccount();
  }
}

async function confirmAccountEmailVerificationCode() {
  if (BACKEND_DISABLED) {
    showToast(backendDisabledMessage());
    return;
  }
  if (!state.user?.id) {
    showModal("login");
    return;
  }
  const isVi = state.lang === "vi";
  const code = String(state.emailVerificationCode || "").replace(/\D/g, "");
  if (!/^\d{6}$/.test(code)) {
    state.emailVerificationStatus = isVi ? "Vui lòng nhập mã gồm 6 chữ số." : "请输入 6 位验证码。";
    renderAccount();
    return;
  }
  state.emailVerificationConfirming = true;
  state.emailVerificationStatus = isVi ? "Đang xác minh mã..." : "正在验证验证码...";
  renderAccount();
  try {
    const data = await apiRequest(`/api/users/${encodeURIComponent(state.user.id)}/email-verification/confirm`, {
      method: "POST",
      headers: { "X-User-Id": state.user.id },
      body: JSON.stringify({ code }),
    });
    if (data.user) state.user = { ...state.user, ...data.user };
    state.emailVerificationCode = "";
    state.emailVerificationFormOpen = false;
    state.emailVerificationStatus = isVi ? "Xác minh email thành công." : "邮箱验证成功。";
    saveState();
    recordUserActivity("email_verified");
    showToast(state.emailVerificationStatus);
  } catch (error) {
    state.emailVerificationStatus = error.message || (isVi ? "Mã xác minh không hợp lệ." : "验证码无效。");
    showToast(state.emailVerificationStatus);
  } finally {
    state.emailVerificationConfirming = false;
    renderAccount();
  }
}

async function updateAccountAvatar(file, input) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showToast(state.lang === "vi" ? "Vui lòng chọn file ảnh." : "请选择图片文件。");
    return;
  }
  if (file.size > MAX_ACCOUNT_AVATAR_SOURCE_BYTES) {
    showToast(state.lang === "vi" ? "Ảnh quá lớn. Vui lòng chọn ảnh dưới 5MB." : "图片太大，请选择 5MB 以下的图片。");
    if (input) input.value = "";
    return;
  }

  const previousAvatarUrl = state.user.avatarUrl || "";
  try {
    const previewUrl = await resizeAccountAvatarFile(file);
    state.user.avatarUrl = previewUrl;
    saveState();
    const avatarImg = document.getElementById("accountAvatarImage");
    if (avatarImg) avatarImg.src = previewUrl;
    if (!BACKEND_DISABLED && state.user?.id) {
      const data = await apiRequest(`/api/users/${encodeURIComponent(state.user.id)}/avatar`, {
        method: "PATCH",
        headers: { "X-User-Id": state.user.id },
        body: JSON.stringify({ avatarDataUrl: previewUrl }),
      });
      if (data.user) {
        state.user = { ...state.user, ...data.user };
      } else if (data.avatarUrl) {
        state.user.avatarUrl = data.avatarUrl;
      }
      saveState();
      if (avatarImg) avatarImg.src = getAccountAvatarUrl();
    }
    renderChrome();
    recordUserActivity("avatar");
    showToast(state.lang === "vi" ? "Đã cập nhật ảnh đại diện" : "头像已更新");
  } catch (error) {
    if (!BACKEND_DISABLED && state.user) {
      state.user.avatarUrl = previousAvatarUrl;
      saveState();
      const avatarImg = document.getElementById("accountAvatarImage");
      if (avatarImg) avatarImg.src = getAccountAvatarUrl();
    }
    showToast(error.message || (state.lang === "vi" ? "Không thể cập nhật ảnh đại diện." : "无法更新头像。"));
  } finally {
    if (input) input.value = "";
  }
}

function formatAccountJoinedLabel(value, isVi) {
  if (!value) return isVi ? "Chưa có dữ liệu" : "暂无数据";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return isVi ? "Chưa có dữ liệu" : "暂无数据";
  if (isVi) {
    return `Tháng ${date.getMonth() + 1}, ${date.getFullYear()}`;
  }
  return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "long" }).format(date);
}

function formatAccountLevelLabel(level, isVi) {
  const normalized = String(level || "HSK2").replace(/^HSK/i, "HSK ");
  return isVi ? `Cấp độ ${normalized}` : normalized;
}

function renderAccount() {
  if (!state.user || !screens.account) return;
  const isVi = state.lang === "vi";
  const displayName = state.user.fullName || state.user.email || t("account");
  const email = state.user.email || "";
  const joinedDate = state.user.createdAt ? formatDateTime(state.user.createdAt) : (isVi ? "Chưa có dữ liệu" : "暂无数据");
  const joinedLabel = formatAccountJoinedLabel(state.user.createdAt, isVi);
  const selectedLevel = state.user.currentLevel || state.level || "HSK2";
  const currentLevel = hskLevels[selectedLevel] ? selectedLevel : "HSK2";
  const hasPremium = hasPremiumAccess();
  const vipDisplay = getVipPlanDisplay(state.user, isVi);
  const avatarUrl = getAccountAvatarUrl();
  const dailyReminderEnabled = state.user.dailyReminderEnabled !== false;
  const studyDays = Math.max(1, Math.floor((Date.now() - new Date(state.user.createdAt || Date.now()).getTime()) / 86400000) + 1);
  const levelOptions = Object.keys(hskLevels).map((level) => `
    <option value="${level}" ${level === currentLevel ? "selected" : ""}>${formatAccountLevelLabel(level, isVi)}</option>
  `).join("");

  const updatedLabel = state.user.updatedAt ? formatDateTime(state.user.updatedAt) : joinedDate;
  const levelBadgeLabel = currentLevel.replace(/^HSK/i, "HSK ");
  const completedCount = state.completed?.size || 7;
  const savedCount = state.saved?.size ?? 0;
  const levelLessons = hskLevels[currentLevel] || [];
  const levelTotalLessons = levelLessons.length;
  const levelCompletedLessons = levelLessons.filter((lessonItem) => state.completed?.has(lessonItem.id)).length;
  const levelProgressPercent = levelTotalLessons > 0
    ? Math.min(100, Math.round((levelCompletedLessons / levelTotalLessons) * 100))
    : 0;
  const securityText = isVi
    ? "Thông tin của bạn được mã hóa và bảo vệ tuyệt đối."
    : "你的信息已加密并受到保护。";
  const upgradeBannerTitle = hasPremium
    ? (isVi ? "Tài khoản HuaMei Pro" : "HuaMei Pro 账号")
    : (isVi ? "Nâng cấp HuaMei Pro" : "升级 HuaMei Pro");
  const upgradeBannerText = hasPremium
    ? (isVi ? "Bạn đã mở khóa toàn bộ bài học HSK nâng cao, học không giới hạn cùng trợ lý AI và quyền lợi Pro." : "你已解锁高级 HSK 课程、AI 助手无限学习和 Pro 权益。")
    : (isVi ? "Mở khóa tất cả bài học HSK nâng cao, học không giới hạn cùng trợ lý AI và nhận chứng chỉ sau mỗi cấp độ." : "解锁高级 HSK 课程、无限学习 AI 助手，并在每个级别后获得证书。");

  setScreenWithDesktopShell("account", `
    <div class="account-layout">
      <header class="account-mobile-header">
        <button type="button" class="account-mobile-back" data-mobile-page-back aria-label="${isVi ? "Quay lại trang chủ" : "返回首页"}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1>${isVi ? "Hồ sơ cá nhân" : "个人资料"}</h1>
        <button type="submit" form="accountForm" class="account-mobile-save">${isVi ? "Lưu" : "保存"}</button>
      </header>

      <section class="account-upgrade-banner account-desktop-only${hasPremium ? " account-upgrade-banner--active" : ""}">
        <span class="account-upgrade-crown" aria-hidden="true">
          <img src="assets/account-upgrade-crown.png" alt="" />
        </span>
        <div>
          <h2>${upgradeBannerTitle}</h2>
          <p>${upgradeBannerText}</p>
        </div>
        ${hasPremium ? `
          <span class="account-upgrade-status">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2l2.2 4.8 5.3.7-3.8 3.7.9 5.3-4.6-2.5-4.6 2.5.9-5.3L4.5 7.5l5.3-.7L12 2z"/></svg>
            ${isVi ? "Đã lưu thông tin tài khoản" : "账号信息已保存"}
          </span>
        ` : `
          <button type="button" class="account-upgrade-btn">
            ${isVi ? "Nâng cấp ngay" : "立即升级"}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </button>
        `}
      </section>

      <div class="account-panel account-mobile-stack">
        <aside class="account-profile-card">
          <div class="account-profile-cover" aria-hidden="true"></div>
          <div class="account-avatar-wrap">
            <img id="accountAvatarImage" src="${escapeAttr(avatarUrl)}" alt="${escapeAttr(displayName)}" />
            <input id="accountAvatarInput" type="file" accept="image/*" hidden />
            <button type="button" class="account-avatar-edit" id="accountAvatarEditBtn" aria-label="${isVi ? "Đổi ảnh đại diện" : "更换头像"}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
              </svg>
            </button>
          </div>
          <h3>${escapeAttr(displayName)}</h3>
          <p>${isVi ? "Học viên tích cực" : "积极学员"}</p>
          <div class="account-badges">
            <span>${escapeAttr(levelBadgeLabel)}</span>
            <span class="account-badge-pro">${escapeHtml(vipDisplay.badge)}</span>
          </div>
          <p class="account-vip-meta">${escapeHtml(vipDisplay.status)}${vipDisplay.expiry ? ` · ${escapeHtml(vipDisplay.expiry)}` : ""}</p>
          <div class="account-profile-metrics account-desktop-only">
            <article>
              <span class="account-metric-icon account-metric-icon--calendar" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>
              </span>
              <small>${isVi ? "Ngày học" : "学习天数"}</small>
              <strong>${studyDays} ${isVi ? "ngày" : "天"}</strong>
            </article>
            <article>
              <span class="account-metric-icon account-metric-icon--book" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>
              </span>
              <small>${isVi ? "Từ đã luyện" : "已练词汇"}</small>
              <strong>${savedCount} ${isVi ? "từ" : "词"}</strong>
            </article>
          </div>
          <section class="account-progress-card account-desktop-only">
            <div>
              <h4>${isVi ? `Tiến độ ${levelBadgeLabel}` : `${levelBadgeLabel} 进度`}</h4>
              <strong>${levelProgressPercent}%</strong>
            </div>
            <span class="account-progress-track"><i style="width:${levelProgressPercent}%"></i></span>
            <p><span>${isVi ? `Đã học ${levelCompletedLessons} / ${levelTotalLessons} bài` : `已学 ${levelCompletedLessons} / ${levelTotalLessons} 课`}</span><button type="button" data-home-nav="hsk">${isVi ? "Xem chi tiết" : "查看详情"} ›</button></p>
          </section>
          <section class="account-achievements-card account-desktop-only">
            <div class="account-card-heading">
              <h4>${isVi ? "Thành tích của bạn" : "你的成就"}</h4>
            </div>
            <div class="account-achievements-grid">
              <article><img src="assets/content-lock-icon.png" alt="" /><strong>${isVi ? "Chăm chỉ" : "勤奋"}</strong><small>${isVi ? `${studyDays} ngày` : `连续 ${studyDays} 天`}</small></article>
              <article><img src="assets/review_user_2.png" alt="" /><strong>${isVi ? "Đã học" : "已学习"}</strong><small>${isVi ? `${completedCount} bài` : `${completedCount} 课已完成`}</small></article>
              <article><img src="assets/review_user_3.png" alt="" /><strong>${isVi ? "Bộ từ" : "生词本"}</strong><small>${isVi ? `${savedCount} từ vựng` : `${savedCount} 个已收藏词`}</small></article>
            </div>
          </section>
          <button type="button" class="account-profile-logout-btn" data-account-logout>
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
              <path d="M21 19V5a2 2 0 0 0-2-2h-6" />
              <path d="M13 21h6a2 2 0 0 0 2-2" />
            </svg>
            <span>${t("logout")}</span>
          </button>
          <div class="account-streak">
            <span class="account-streak-calendar" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" />
              </svg>
            </span>
            <div>
              <small>${isVi ? "Ngày học" : "学习天数"}</small>
              <strong>${studyDays} ${isVi ? "Ngày" : "天"}</strong>
              <em>${isVi ? "Tiếp tục cố gắng nhé!" : "继续努力！"}</em>
            </div>
            <span class="account-streak-flame" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M13 2S5 9 5 15a7 7 0 0 0 14 0c0-3-2-5-4-7 .2 2-1 3-2 3 1-4 0-7 0-9z" />
              </svg>
            </span>
          </div>
          <nav class="account-side-nav" aria-label="${isVi ? "Cài đặt tài khoản" : "账号设置"}">
            <button class="active" type="button">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>
              <span>${isVi ? "Thông tin cơ bản" : "基本信息"}</span>
            </button>
            <button id="accountChangePasswordBtn" type="button">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8z" /><path d="m9 12 2 2 4-5" /></svg>
              <span>${isVi ? "Bảo mật tài khoản" : "账号安全"}</span>
            </button>
            <button type="button" id="accountMobileLanguageBtn">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
              <span>${isVi ? "Cài đặt thông báo" : "通知设置"}</span>
            </button>
          </nav>
          <button class="account-help-card" type="button">
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5Z" /><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5Z" /></svg>
            </span>
            <span><strong>${isVi ? "Cần hỗ trợ?" : "需要帮助？"}</strong><small>${isVi ? "Liên hệ với chúng tôi" : "联系我们"}</small></span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </aside>

        ${hasPremium ? "" : `
          <section class="account-mobile-upgrade">
            <p>${isVi ? "Mở khóa tất cả bài học và luyện tập chuyên sâu với HuaMei Pro" : "升级 HuaMei Pro，解锁全部课程与深度学习练习"}</p>
            <button type="button" class="account-mobile-upgrade-btn account-upgrade-btn">
              ${isVi ? "Nâng cấp ngay" : "立即升级"}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>
              </svg>
            </button>
          </section>
        `}

        <section class="account-info-card">
          <div class="account-info-header account-desktop-only">
            <div class="account-info-title">
              <span class="account-info-icon">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <div>
                <h2>${isVi ? "Thông tin cơ bản" : "基本信息"}</h2>
                <p>${isVi ? "Cập nhật thông tin để bảo mật tài khoản" : "更新信息以保护你的账号"}</p>
              </div>
            </div>
            <em>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              ${isVi ? `Cập nhật lần cuối: ${updatedLabel}` : `最后更新：${updatedLabel}`}
            </em>
          </div>

          <form id="accountForm" class="account-form">
            <label>
              <span>${isVi ? "Tên hiển thị" : "显示名称"}</span>
              <span class="account-field">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>
                <input id="accountNameInput" type="text" value="${escapeAttr(displayName)}" />
              </span>
            </label>
            <label>
              <span>Email</span>
              <span class="account-field">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                <input id="accountEmailInput" type="email" value="${escapeAttr(email)}" />
              </span>
            </label>
            <label>
              <span>${isVi ? "Cấp độ hiện tại" : "当前等级"}</span>
              <span class="account-field account-field--select">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6" /><path d="M15.5 13.2 17 22l-5-3-5 3 1.5-8.8" /><path d="m10 8 1.4 1.4L14.5 6" /></svg>
                <select id="accountLevelInput">${levelOptions}</select>
              </span>
            </label>
            <label>
              <span>${isVi ? "Ngôn ngữ hiển thị" : "显示语言"}</span>
              <span class="account-field account-field--select">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20" /><path d="M12 2a15 15 0 0 0 0 20" /></svg>
                <select id="accountLangInput">
                  <option value="vi" ${state.lang === "vi" ? "selected" : ""}>Tiếng Việt</option>
                  <option value="zh" ${state.lang === "zh" ? "selected" : ""}>中文</option>
                </select>
              </span>
            </label>
            <button type="button" class="account-password-card" id="accountMobileChangePasswordBtn">
              <span class="account-password-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>
                </svg>
              </span>
              <span class="account-password-label">${isVi ? "Đổi mật khẩu" : "修改密码"}</span>
              <svg class="account-password-chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6"/>
              </svg>
            </button>
            <div class="account-security-banner">
              <span class="account-security-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8z" /><path d="m9 12 2 2 4-5" /></svg>
              </span>
              <span><strong>${isVi ? "Bảo mật tài khoản" : "账号安全"}</strong><small>${securityText}</small></span>
              <span class="account-security-lock" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="78" height="78" fill="currentColor"><path d="M17 9V7A5 5 0 0 0 7 7v2a3 3 0 0 0-2 2.83V19a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-7.17A3 3 0 0 0 17 9Zm-8 0V7a3 3 0 0 1 6 0v2H9Zm4 7.73V18a1 1 0 1 1-2 0v-1.27a2 2 0 1 1 2 0Z" /></svg>
              </span>
            </div>
            <div class="account-form-actions account-desktop-only">
              <button class="account-save-btn" type="submit">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" /><path d="M17 21v-8H7v8" /><path d="M7 3v5h8" /></svg>
                ${isVi ? "Lưu thay đổi" : "保存更改"}
              </button>
              <button class="account-cancel-btn" type="button" id="cancelAccountPanel">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                ${isVi ? "Hủy bỏ" : "取消"}
              </button>
            </div>
          </form>
          <div class="account-desktop-widgets account-desktop-only">
            <section class="account-widget account-security-widget">
              <div>
                <h3>${isVi ? "Đổi mật khẩu" : "修改密码"}</h3>
                <p>${isVi ? "Cập nhật mật khẩu để bảo vệ tài khoản" : "更新密码以保护账号"}</p>
              </div>
              <div class="account-widget-row">
                <span>${isVi ? "Bảo mật tài khoản" : "账号安全"}</span>
                <button type="button" id="accountDesktopChangePasswordAltBtn">${isVi ? "Đổi mật khẩu" : "修改密码"}</button>
              </div>
            </section>
            <section class="account-widget account-notification-widget">
              <div>
                <h3>${isVi ? "Tùy chọn thông báo" : "通知选项"}</h3>
                <p>${isVi ? "Nhắc học mỗi ngày" : "每日学习提醒"}</p>
              </div>
              <label class="account-toggle">
                <input type="checkbox" id="accountDailyReminderInput" ${dailyReminderEnabled ? "checked" : ""} />
                <span></span>
              </label>
            </section>
            <section class="account-activity-card">
              <div class="account-card-heading">
                <h3>${isVi ? "Hoạt động gần đây" : "最近活动"}</h3>
                <button type="button" data-account-activities-all>${isVi ? "Xem tất cả" : "查看全部"} ›</button>
              </div>
              ${renderRecentActivitiesHTML(isVi, updatedLabel)}
            </section>
          </div>
          <p class="account-joined-note">${isVi ? `Tham gia từ: ${joinedLabel}` : `加入时间：${joinedLabel}`}</p>
        </section>
      </div>
    </div>
  `, "app-desktop-shell--account", "account");
}

function showUpgradePlansModal() {
  const isVi = state.lang === "vi";
  const existing = document.getElementById("upgradePlansModal");
  if (existing) existing.remove();
  trackEvent("vip_modal_opened", buildPracticeEventContext());

  const benefits = isVi
    ? [
      "Truy cập tất cả khóa học HSK 1-6",
      "Kho từ vựng & cụm từ không giới hạn",
      "Luyện nói cùng AI thông minh",
      "Không quảng cáo làm phiền",
      "Hỗ trợ ưu tiên 24/7",
    ]
    : [
      "访问全部 HSK 1-6 课程",
      "无限词汇与短语库",
      "智能 AI 口语练习",
      "无广告干扰",
      "24/7 优先支持",
    ];

  const modalDiv = document.createElement("div");
  modalDiv.id = "upgradePlansModal";
  modalDiv.className = "upgrade-plans-overlay";
  modalDiv.innerHTML = `
    <div class="upgrade-plans-modal">
      <button class="upgrade-plans-close" id="closeUpgradePlansModal" type="button" aria-label="${isVi ? "Đóng" : "关闭"}">&times;</button>
      <div class="upgrade-plans-heading">
        <span class="upgrade-mobile-pill">VIP</span>
        <h2>${isVi ? "Nâng cấp Gói VIP" : "VIP 套餐"}</h2>
        <h3>${isVi ? "Nâng cấp Gói VIP" : "VIP 套餐"}</h3>
        <p>${isVi ? "Chọn gói VIP phù hợp. Nếu chưa đăng nhập, hệ thống sẽ yêu cầu đăng nhập trước khi thanh toán." : "选择适合的 VIP 套餐。未登录时，点击开通后会先进入登录/注册流程。"}</p>
      </div>
      <div class="upgrade-plans-grid">
        <p class="upgrade-plans-loading">${isVi ? "Đang chuẩn bị bảng giá..." : "正在准备价格..."}</p>
      </div>
    </div>
  `;

  document.body.appendChild(modalDiv);
  const closeModal = () => modalDiv.remove();
  modalDiv.querySelector("#closeUpgradePlansModal").onclick = closeModal;
  modalDiv.onclick = (event) => {
    if (event.target === modalDiv) closeModal();
  };

  const setUpgradePlanButtonLoading = (planTarget, loading) => {
    const card = planTarget?.closest?.("[data-upgrade-plan-card]") || planTarget;
    const button = card?.querySelector?.("[data-upgrade-plan]") || (planTarget?.matches?.("[data-upgrade-plan]") ? planTarget : null);
    if (!button) return;
    if (loading) {
      button.disabled = true;
      button.classList.add("loading");
      button.dataset.originalText = button.textContent.trim();
      button.textContent = isVi ? "Đang mở..." : "正在打开...";
    } else if (button.dataset.originalText) {
      button.disabled = false;
      button.classList.remove("loading");
      button.textContent = button.dataset.originalText;
      delete button.dataset.originalText;
    } else {
      button.disabled = false;
      button.classList.remove("loading");
    }
  };

  const bindPlanSelection = (plans) => {
    const selectPlan = (planId, planTarget) => {
      if (!planId) return;
      if (isIntroVipPlanId(planId) && hasUsedIntroVipPlan()) {
        showToast(isVi ? "Gói VIP 3 ngày chỉ mua được một lần cho mỗi tài khoản." : "3天 VIP 每个账号只能购买一次。");
        return;
      }
      setUpgradePlanButtonLoading(planTarget, true);
      closeModal();
      showTransferInfoModal(isIntroVipPlanId(planId) ? "3d" : planId);
    };
    modalDiv.addEventListener("click", (event) => {
      const planTarget = event.target.closest("[data-upgrade-plan], [data-upgrade-plan-card]");
      if (!planTarget || !modalDiv.contains(planTarget)) return;
      selectPlan(planTarget.dataset.upgradePlan || planTarget.dataset.upgradePlanCard, planTarget);
    });
    modalDiv.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const planTarget = event.target.closest("[data-upgrade-plan-card]");
      if (!planTarget || !modalDiv.contains(planTarget)) return;
      event.preventDefault();
      selectPlan(planTarget.dataset.upgradePlanCard, planTarget);
    });
  };

  const renderPlans = (plans) => {
    const grid = modalDiv.querySelector(".upgrade-plans-grid");
    if (!grid) return;
    grid.classList.toggle("upgrade-plans-grid--single", plans.length === 1);
    modalDiv.querySelector(".upgrade-mobile-benefits")?.remove();
    grid.innerHTML = plans.map((plan) => {
      const introPlanUsed = isIntroVipPlanId(plan.id) && hasUsedIntroVipPlan();
      const cardClasses = ["upgrade-plan-card", plan.popular ? "popular" : "", introPlanUsed ? "used-once" : ""].filter(Boolean).join(" ");
      const actionText = introPlanUsed
        ? (isVi ? "Đã mua một lần" : "已购买一次")
        : (isVi ? plan.actionVi : plan.actionZh);
      return `
      <article class="${cardClasses}" data-upgrade-plan-card="${escapeAttr(plan.id)}" role="${introPlanUsed ? "group" : "button"}" tabindex="${introPlanUsed ? "-1" : "0"}" aria-disabled="${introPlanUsed ? "true" : "false"}">
        ${introPlanUsed ? `<div class="upgrade-one-time-badge">${isVi ? "Chỉ mua được một lần" : "仅可购买一次"}</div>` : ""}
        ${plan.discount ? `<div class="upgrade-popular-badge">${escapeAttr(plan.discount)}</div>` : ""}
        <div class="upgrade-plan-kicker">${escapeAttr(isVi ? plan.nameVi : plan.nameZh)}</div>
        <h3>${escapeAttr(isVi ? plan.durationVi : plan.durationZh)}</h3>
        <div class="upgrade-plan-price">
          <strong>${escapeAttr(plan.price)}</strong>
          ${!plan.popular ? `<span>${escapeAttr(plan.note)}</span>` : ""}
        </div>
        ${plan.popular ? `<p class="upgrade-plan-note">${escapeAttr(plan.note)}</p>` : ""}
        <ul>
          ${benefits.map((benefit) => `
            <li>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.1 13.7-3.6-3.6 1.4-1.4 2.2 2.2 4.8-4.8 1.4 1.4-6.2 6.2z" />
              </svg>
              ${benefit}
            </li>
          `).join("")}
        </ul>
        <button class="upgrade-plan-action" type="button" data-upgrade-plan="${escapeAttr(plan.id)}" ${introPlanUsed ? "disabled" : ""}>
          ${escapeAttr(actionText)}
          ${introPlanUsed ? "" : `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>`}
        </button>
      </article>
    `;
    }).join("");

    const mobileBenefits = document.createElement("section");
    mobileBenefits.className = "upgrade-mobile-benefits";
    mobileBenefits.innerHTML = `
      <h3>${isVi ? "Đặc quyền Pro" : "Pro 特权"}</h3>
      <ul>
        ${benefits.map((benefit) => `
          <li>
            <span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div>
              <strong>${benefit}</strong>
              <small>${isVi ? "Truy cập đầy đủ không giới hạn trong tài khoản của bạn." : "在你的账号中无限访问。"}</small>
            </div>
          </li>
        `).join("")}
      </ul>
    `;
    modalDiv.querySelector(".upgrade-plans-modal").appendChild(mobileBenefits);
  };

  bindPlanSelection();
  const renderFallbackPlans = () => renderPlans(buildDisplayPlans(selectUpgradePlansForDisplay([]), isVi));
  const scheduleAfterModalPaint = (callback) => {
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(() => setTimeout(callback, 0));
    } else {
      setTimeout(callback, 0);
    }
  };

  scheduleAfterModalPaint(() => {
    if (!document.body.contains(modalDiv)) return;
    renderFallbackPlans();

    loadPaymentPlans()
      .then((apiPlans) => {
        const plans = buildDisplayPlans(selectUpgradePlansForDisplay(apiPlans), isVi);
        if (!plans.length) {
          const grid = modalDiv.querySelector(".upgrade-plans-grid");
          if (grid) renderFallbackPlans();
          return;
        }
        renderPlans(plans);
      })
      .catch((error) => {
        console.warn("Payment plans API failed; using local defaults.", error);
        renderFallbackPlans();
      });
  });
}

async function showTransferInfoModal(planId) {
  const isVi = state.lang === "vi";
  planId = isIntroVipPlanId(planId) ? "3d" : planId;
  if (state.activePaymentOrderPlanId) return;
  const existing = document.getElementById("transferInfoModal");
  if (existing) existing.remove();

  if (!state.user) {
    state.pendingUpgradePlanId = planId || "";
    showToast(isVi ? "Vui lòng đăng nhập để đăng ký Gói VIP" : "请先登录以开通 VIP");
    showModal("login");
    return;
  }
  if (!planId) {
    showToast(isVi ? "Gói thanh toán không hợp lệ" : "套餐无效");
    return;
  }
  if (isIntroVipPlanId(planId) && hasUsedIntroVipPlan()) {
    showToast(isVi ? "Gói VIP 3 ngày chỉ mua được một lần cho mỗi tài khoản." : "3天 VIP 每个账号只能购买一次。");
    return;
  }
  state.activePaymentOrderPlanId = planId;

  const modalDiv = document.createElement("div");
  modalDiv.id = "transferInfoModal";
  modalDiv.className = "transfer-info-overlay";
  modalDiv.innerHTML = `
    <div class="transfer-info-modal">
      <button class="transfer-info-close" id="closeTransferInfoModal" type="button" aria-label="${isVi ? "Đóng" : "关闭"}">&times;</button>
      <div class="transfer-icon">
        <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      </div>
      <h2>${isVi ? "Thông tin chuyển khoản" : "转账信息"}</h2>
      <p class="transfer-subtitle">${isVi ? "Đang tạo mã thanh toán..." : "正在生成付款二维码..."}</p>
      <div class="transfer-loading-state">
        <div class="transfer-status transfer-status-pending">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2h12M6 22h12M8 2c0 5 8 5 8 10s-8 5-8 10" />
          </svg>
          ${isVi ? "Vui lòng chờ trong giây lát" : "请稍候"}
        </div>
        <p class="transfer-slow-network-message" id="transferSlowNetworkMessage"></p>
      </div>
    </div>
  `;
  document.body.appendChild(modalDiv);

  let pollTimer = null;
  let slowNetworkTimer = null;
  const closeModal = () => {
    if (pollTimer) clearInterval(pollTimer);
    if (slowNetworkTimer) clearTimeout(slowNetworkTimer);
    state.activePaymentOrderPlanId = "";
    modalDiv.remove();
  };
  modalDiv.querySelector("#closeTransferInfoModal").onclick = closeModal;
  modalDiv.onclick = (event) => {
    if (event.target === modalDiv) closeModal();
  };

  let paymentData;
  try {
    slowNetworkTimer = setTimeout(() => {
      const slowMessage = modalDiv.querySelector("#transferSlowNetworkMessage");
      if (slowMessage) {
        slowMessage.textContent = isVi
          ? "Mạng hơi chậm, vui lòng chờ hoặc thử lại"
          : "网络较慢，请稍等或重试";
      }
    }, 5000);
    paymentData = await apiRequest("/api/payments/orders", {
      method: "POST",
      body: JSON.stringify({
        userId: state.user.id,
        email: state.user.email,
        planId,
      }),
    });
    if (slowNetworkTimer) clearTimeout(slowNetworkTimer);
  } catch (error) {
    if (slowNetworkTimer) clearTimeout(slowNetworkTimer);
    modalDiv.querySelector(".transfer-subtitle").textContent = isVi
      ? "Không thể tạo đơn thanh toán"
      : "无法创建支付订单";
    modalDiv.querySelector(".transfer-loading-state").innerHTML = `
      <p class="transfer-error-text">${escapeAttr(getPaymentOrderErrorMessage(error, isVi))}</p>
      <button id="retryTransferOrderBtn" class="transfer-retry-btn" type="button" data-retry-payment-order="${escapeAttr(planId)}">${isVi ? "Thử lại" : "重试"}</button>
    `;
    modalDiv.querySelector("[data-retry-payment-order]")?.addEventListener("click", () => {
      state.activePaymentOrderPlanId = "";
      closeModal();
      showTransferInfoModal(planId);
    });
    return;
  }

  if (paymentData.bankConfigured === false || !paymentData.bank?.accountNumber) {
    if (slowNetworkTimer) clearTimeout(slowNetworkTimer);
    modalDiv.querySelector(".transfer-subtitle").textContent = isVi
      ? "Chưa thể hiển thị thông tin chuyển khoản"
      : "暂时无法显示转账信息";
    modalDiv.querySelector(".transfer-loading-state").innerHTML = `
      <p class="transfer-error-text">${escapeAttr(getPaymentOrderErrorMessage(new Error("bankConfigured=false"), isVi))}</p>
      <button id="retryTransferOrderBtn" class="transfer-retry-btn" type="button" data-retry-payment-order="${escapeAttr(planId)}">${isVi ? "Thử lại" : "重试"}</button>
    `;
    modalDiv.querySelector("[data-retry-payment-order]")?.addEventListener("click", () => {
      state.activePaymentOrderPlanId = "";
      closeModal();
      showTransferInfoModal(planId);
    });
    return;
  }

  const { order, bank, qrImageUrl } = paymentData;
  const transferCode = order.transferCode;
  const amount = order.amountLabel;
  const normalizedPlanId = String(order.planId || planId || "").toLowerCase();
  const activationPlanLabel = isIntroVipPlanId(normalizedPlanId)
    ? (isVi ? "3 ngày" : "3天")
    : normalizedPlanId === "90d"
      ? (isVi ? "3 tháng" : "90天")
      : (isVi ? "30 ngày" : "30天");
  const customerEmail = state.user.email || "";
  const activationMessage = [
    isVi ? "Em đã chuyển khoản VIP." : "我已完成 VIP 转账。",
    isVi ? `Email: ${customerEmail}` : `登录邮箱: ${customerEmail}`,
    isVi ? `Mã đơn: ${transferCode}` : `订单号: ${transferCode}`,
    isVi ? `Gói: ${activationPlanLabel}` : `套餐: ${activationPlanLabel}`,
    isVi ? `Số tiền: ${amount}` : `金额: ${amount}`,
    isVi ? "Nhờ CSKH kiểm tra và kích hoạt VIP giúp em." : "请客服核对并帮我开通 VIP。",
  ].join("\n");
  const zaloSupportNumber = "0825319378";
  const zaloSupportUrl = "https://zalo.me/0825319378";
  const manualActivationNotice = isVi
    ? "CSKH sẽ kiểm tra và kích hoạt VIP cho bạn sau khi xác nhận giao dịch."
    : "客服核对到账后会为你开通 VIP。";
  const copySuccessNotice = isVi
    ? "Đã sao chép. Vui lòng dán vào Zalo và gửi cho CSKH."
    : "已复制，请粘贴到 Zalo 发送给客服。";
  const copyFailedNotice = isVi
    ? "Không thể sao chép tự động. Vui lòng sao chép mã đơn và email để gửi CSKH."
    : "无法自动复制，请手动复制订单号和邮箱发送给客服。";

  modalDiv.querySelector(".transfer-info-modal").innerHTML = `
    <button class="transfer-info-close" id="closeTransferInfoModal" type="button" aria-label="${isVi ? "Đóng" : "关闭"}">&times;</button>
    <div class="transfer-icon">
      <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    </div>
    <h2>${isVi ? "Thông tin chuyển khoản" : "转账信息"}</h2>
    <p class="transfer-subtitle">${isVi ? "Nâng cấp tài khoản PRO để bắt đầu hành trình chinh phục ngôn ngữ" : "升级 PRO 账户，开启语言学习旅程"}</p>

    <div class="transfer-content-grid">
      <div class="transfer-fields">
        <label>
          <span>${isVi ? "Ngân hàng" : "银行"}</span>
          <div class="transfer-field transfer-bank">
            <span></span>
            ${escapeAttr(bank.bankName)}
          </div>
        </label>
        <label>
          <span>${isVi ? "Chủ tài khoản" : "账户名"}</span>
          <div class="transfer-field">${escapeAttr(bank.accountName)}</div>
        </label>
        <label>
          <span>${isVi ? "Số tài khoản" : "账号"}</span>
          <div class="transfer-field transfer-copy-row">
            <span>${escapeAttr(bank.accountNumber)}</span>
            <button type="button" data-copy-transfer="${escapeAttr(bank.accountNumber)}" aria-label="${isVi ? "Sao chép số tài khoản" : "复制账号"}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="10" height="10" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>
        </label>
        <label>
          <span>${isVi ? "Số tiền" : "金额"}</span>
          <div class="transfer-field transfer-amount">${escapeAttr(amount)}</div>
        </label>
        <div class="transfer-note-box">
          <div>
            <span>${isVi ? "Nội dung chuyển khoản" : "转账备注"}</span>
            <strong>${escapeAttr(transferCode)}</strong>
          </div>
          <button type="button" data-copy-transfer="${escapeAttr(transferCode)}">${isVi ? "Sao chép" : "复制"}</button>
        </div>
      </div>

      <div class="transfer-qr-area">
        <div class="transfer-qr-box">
          <img class="transfer-qr-image" src="${escapeAttr(qrImageUrl)}" alt="${isVi ? "Mã QR thanh toán VietQR" : "VietQR 付款码"}" width="220" height="220" />
        </div>
        <p>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3z" />
            <path d="M15 15h2v2h-2zM19 15h2v6h-6v-2h4z" />
          </svg>
          ${isVi ? "Quét mã VietQR để thanh toán nhanh" : "扫码快速付款"}
        </p>
        <p class="transfer-qr-fallback">${isVi ? "Nếu mã QR không hiển thị, vui lòng chuyển khoản thủ công theo thông tin bên trái và ghi đúng nội dung DH." : "如果二维码无法显示，请按左侧银行信息手动转账，并填写正确的 DH 备注。"}</p>
        <div class="transfer-status transfer-status-pending" id="transferPaymentStatus">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2h12M6 22h12M8 2c0 5 8 5 8 10s-8 5-8 10" />
          </svg>
          ${manualActivationNotice}
        </div>
      </div>
    </div>

    <div class="transfer-manual-actions">
      <button class="transfer-zalo-btn" type="button" data-open-zalo-support>${isVi ? "Gửi mã đơn qua Zalo" : "通过 Zalo 发送订单号"}</button>
      <button class="transfer-copy-activation-btn" type="button" data-copy-transfer="${escapeAttr(activationMessage)}" data-copy-success="${escapeAttr(copySuccessNotice)}">${isVi ? "Sao chép tin nhắn kích hoạt" : "复制激活信息"}</button>
      <button class="transfer-copy-activation-btn" type="button" data-copy-transfer="${escapeAttr(zaloSupportNumber)}">${isVi ? "Sao chép số Zalo CSKH" : "复制客服号码"}</button>
    </div>
    <p class="transfer-zalo-help">${isVi ? "Nếu mở Zalo trên máy tính và thấy mã QR, vui lòng dùng Zalo trên điện thoại để quét mã, hoặc sao chép số CSKH để liên hệ." : "如果电脑端打开 Zalo 后出现二维码，请用手机 Zalo 扫码登录，或复制客服号码添加客服。"}</p>

    <div class="transfer-footer-note transfer-footer-note--manual">
      <span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </span>
      <div>
        <p>${manualActivationNotice}</p>
        <ol class="transfer-manual-steps">
          <li>${isVi ? "Bước 1: Chuyển khoản đúng số tiền và nội dung DH." : "步骤 1：请按正确金额和 DH 备注完成转账。"}</li>
          <li>${isVi ? "Bước 2: Bấm nút Zalo để gửi mã đơn và email đăng nhập cho CSKH." : "步骤 2：点击 Zalo 按钮，将订单号和登录邮箱发送给客服。"}</li>
          <li>${isVi ? "Bước 3: CSKH kiểm tra giao dịch và kích hoạt VIP cho bạn." : "步骤 3：客服核对到账后为你开通 VIP。"}</li>
        </ol>
      </div>
    </div>
  `;

  modalDiv.querySelector("#closeTransferInfoModal").onclick = closeModal;
  modalDiv.querySelector("[data-open-zalo-support]")?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const copied = await copyTextToClipboard(activationMessage);
    if (copied) {
      showCopyButtonFeedback(button, isVi);
      showToast(copySuccessNotice);
    } else {
      showToast(copyFailedNotice);
    }
    window.open(zaloSupportUrl, "_blank", "noopener,noreferrer");
  });
  modalDiv.querySelectorAll("[data-copy-transfer]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copyTransfer;
      const copied = await copyTextToClipboard(value);
      if (copied) {
        showCopyButtonFeedback(button, isVi);
        showToast(button.dataset.copySuccess || copySuccessNotice);
      } else {
        showToast(copyFailedNotice);
      }
    });
  });

  const updatePaymentStatus = async () => {
    try {
      const statusData = await apiRequest(
        `/api/payments/orders/${order.id}/status?userId=${encodeURIComponent(state.user.id)}`,
      );
      if (statusData.order.status === "paid") {
        if (pollTimer) clearInterval(pollTimer);
        const statusEl = modalDiv.querySelector("#transferPaymentStatus");
        if (statusEl) {
          statusEl.className = "transfer-status transfer-status-success";
          statusEl.innerHTML = isVi ? "VIP đã được mở" : "VIP 已开通";
        }
        state.user.isPremium = statusData.premium.isPremium;
        state.user.premiumUntil = statusData.premium.premiumUntil;
        state.user.vipExpiresAt = statusData.premium.premiumUntil;
        state.user.vipPlanId = statusData.order?.planId || order.planId || state.user.vipPlanId || null;
        if (isIntroVipPlanId(state.user.vipPlanId)) {
          state.user.vipPlanId = "3d";
          state.user.vipTrialUsed = true;
        }
        state.user.vipRemainingDays = calculateVipRemainingDays(state.user.vipExpiresAt);
        saveState();
        await refreshCurrentUserStatus(true);
        refreshVisibleVipAccessState();

        const planName = isVi
          ? (statusData.order.planNameVi || order.planNameVi || "Pro")
          : (statusData.order.planNameZh || order.planNameZh || "Pro");
        const planLabel = isVi ? `Gói ${planName} (Pro)` : `${planName} (Pro)`;

        closeModal();
        showUpgradeSuccessModal({
          planLabel,
          premiumUntil: statusData.premium.premiumUntil,
        });
      }
    } catch {
      // keep polling quietly
    }
  };

  updatePaymentStatus();
  pollTimer = setInterval(updatePaymentStatus, 5000);
}

function showQuitModal() {
  if (document.getElementById("quitModal")) return;
  const modalDiv = document.createElement("div");
  modalDiv.id = "quitModal";
  modalDiv.className = "quit-modal-overlay";
  const isVi = state.lang === "vi";
  let modalClosed = false;

  modalDiv.innerHTML = `
    <div class="quit-modal-content">
      <button class="quit-modal-close" id="closeQuitModal" type="button">&times;</button>
      
      <div class="quit-modal-illustration">
        <svg viewBox="0 0 160 160" width="120" height="120">
          <!-- Antlers -->
          <path d="M50 45 C45 35 48 20 40 15 C38 12 33 15 35 20 C37 25 42 32 46 40" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M42 27 C35 25 32 18 28 20 C25 22 28 28 35 30" stroke="#8b5a2b" stroke-width="3" stroke-linecap="round" fill="none" />
          
          <path d="M110 45 C115 35 112 20 120 15 C122 12 127 15 125 20 C123 25 118 32 114 40" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M118 27 C125 25 128 18 132 20 C135 22 132 28 125 30" stroke="#8b5a2b" stroke-width="3" stroke-linecap="round" fill="none" />
          
          <!-- Ears -->
          <path d="M38 52 C20 50 25 62 36 60 Z" fill="#ffb03a" stroke="#8b5a2b" stroke-width="2" />
          <path d="M122 52 C140 50 135 62 124 60 Z" fill="#ffb03a" stroke="#8b5a2b" stroke-width="2" />
          
          <!-- Head / Face -->
          <path d="M45 60 C45 105 55 120 80 120 C105 120 115 105 115 60 C115 45 105 45 80 45 C55 45 45 45 45 60 Z" fill="#ffb03a" stroke="#8b5a2b" stroke-width="3" />
          
          <!-- White belly/snout area -->
          <ellipse cx="80" cy="108" rx="25" ry="12" fill="#ffffff" />
          
          <!-- Nose -->
          <ellipse cx="80" cy="95" rx="5" ry="3.5" fill="#1e293b" />
          
          <!-- Glasses Rim -->
          <circle cx="62" cy="72" r="18" fill="none" stroke="#000000" stroke-width="4" />
          <circle cx="98" cy="72" r="18" fill="none" stroke="#000000" stroke-width="4" />
          <!-- Glasses Bridge -->
          <path d="M76 72 L84 72" stroke="#000000" stroke-width="4" />
          
          <!-- Sad Eyes inside glasses -->
          <!-- Left Eye -->
          <path d="M58 70 C60 67 64 67 66 70" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none" />
          <circle cx="62" cy="76" r="2.5" fill="#1e293b" />
          
          <!-- Right Eye -->
          <path d="M94 70 C96 67 100 67 102 70" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none" />
          <circle cx="98" cy="76" r="2.5" fill="#1e293b" />
          
          <!-- Tears (Blue) -->
          <!-- Left tear -->
          <path d="M62 78 C58 88 56 102 62 108 C64 102 64 88 62 78" fill="#38bdf8" opacity="0.85" />
          <path d="M60 84 C56 94 54 102 58 106 C60 102 60 94 60 84" fill="#38bdf8" opacity="0.6" />
          <!-- Right tear -->
          <path d="M98 78 C102 88 104 102 98 108 C96 102 96 88 98 78" fill="#38bdf8" opacity="0.85" />
          <path d="M100 84 C104 94 106 102 102 106 C100 102 100 94 100 84" fill="#38bdf8" opacity="0.6" />
        </svg>
      </div>
      
      <h2>${isVi ? "Khoan, đừng đi!" : "等一下，别走！"}</h2>
      <p class="quit-modal-sub">${isVi ? "Chỉ còn 2 phút thôi! Bạn có chắc chắn muốn thoát không?" : "只需再学习2分钟！你确定要退出吗？"}</p>
      
      <div class="quit-modal-buttons">
        <button id="btnKeepLearning" class="btn-keep-learning" type="button">${isVi ? "HỌC TIẾP" : "继续学习"}</button>
        <button id="btnQuitLearning" class="btn-quit-learning" type="button">${isVi ? "KẾT THÚC" : "结束"}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalDiv);

  const closeModal = (options = {}) => {
    if (modalClosed) return;
    modalClosed = true;
    const immediate = Boolean(options.immediate);
    if (immediate) {
      modalDiv.remove();
      return;
    }
    modalDiv.classList.add("fade-out");
    setTimeout(() => modalDiv.remove(), 200);
  };

  document.getElementById("closeQuitModal").onclick = closeModal;
  document.getElementById("btnKeepLearning").onclick = closeModal;
  modalDiv.onclick = (e) => { if (e.target === modalDiv) closeModal(); };

  document.getElementById("btnQuitLearning").onclick = (event) => {
    event.currentTarget.disabled = true;
    closeModal({ immediate: true });
    backFromPracticeToCourse();
  };
}

function renderGlobalFooter() {
  // Footer tạm ẩn
  return;

  const footerNode = $("#globalFooter");
  if (!footerNode) return;

  const isVi = state.lang === "vi";

  if (state.screen === "home" || state.screen === "roadmap" || state.screen === "course") {
    footerNode.innerHTML = `
        <div class="footer-container">
          <div class="footer-brand-col">
            <div class="footer-logo">
              <div class="footer-logo-circle">中</div>
              <span class="footer-logo-text">${isVi ? "Học Tiếng Trung" : "学习中文"}</span>
            </div>
            <p class="footer-tagline">${isVi ? "Học dễ hiểu - Nhớ lâu - Ứng dụng ngay" : "易学 - 难忘 - 即学即用"}</p>
            <div class="footer-socials">
              <a href="#" class="social-icon social-fb" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1h-3A4.5 4.5 0 0 0 9 5.5V8z"/></svg>
              </a>
              <a href="#" class="social-icon social-yt" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5c-1.2.3-2.1 1.2-2.4 2.4C0 8.3 0 12 0 12s0 3.7.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg>
              </a>
              <a href="#" class="social-icon social-tt" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.5 2v10c0 1.9-1.6 3.5-3.5 3.5S5.5 13.9 5.5 12s1.6-3.5 3.5-3.5c.5 0 1 .1 1.4.3v-4c-1.4-.6-3-.7-4.5-.4-2.7.6-4.9 2.8-5.3 5.6C.1 16.5 3 20 6.5 20h2c3.9 0 7-3.1 7-7V6.8c1.3.9 2.8 1.4 4.5 1.2V4c-1.8 0-3.3-.9-4.1-2.4l-1.4.4z"/></svg>
              </a>
              <a href="mailto:hello@hoctiengtrung.vn" class="social-icon social-mail" aria-label="Email">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              </a>
            </div>
          </div>
          
          <div class="footer-links-col">
            <h4 class="footer-heading">${isVi ? "KHÁM PHÁ" : "探索"}</h4>
            <ul class="footer-list">
              <li><a href="#" data-footer-nav="course">${isVi ? "Khóa học" : "课程"}</a></li>
              <li><a href="#" data-footer-nav="course">${isVi ? "Lộ trình" : "路线"}</a></li>
              <li><a href="#" data-footer-nav="blog">${isVi ? "Blog" : "博客"}</a></li>
            </ul>
          </div>
          
          <div class="footer-links-col">
            <h4 class="footer-heading">${isVi ? "VỀ CHÚNG TÔI" : "关于我们"}</h4>
            <ul class="footer-list">
              <li><a href="#">${isVi ? "Giảng viên" : "讲师"}</a></li>
              <li><a href="#">${isVi ? "Giới thiệu" : "介绍"}</a></li>
              <li><a href="#">${isVi ? "Chính sách" : "政策"}</a></li>
            </ul>
          </div>
          
          <div class="footer-links-col">
            <h4 class="footer-heading">${isVi ? "LIÊN HỆ" : "联系"}</h4>
            <ul class="footer-list footer-contact-list">
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>0988 888 888</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                <span>hello@hoctiengtrung.vn</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${isVi ? "Hà Nội, Việt Nam" : "河内，越南"}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© 2024 ${isVi ? "Học Tiếng Trung. Tất cả quyền được bảo lưu." : "学习中文。版权所有。"}</p>
        </div>
    `;
    footerNode.classList.remove("hidden");
  } else {
    footerNode.innerHTML = "";
    footerNode.classList.add("hidden");
  }

}

function getHomeDashboardStats() {
  const totalLessons = Object.values(hskLevels).flat().length + dailyThemes.length;
  if (!state.user) {
    return {
      totalLessons,
      completedLessons: 0,
      percent: 0,
      xp: 0,
      studyMinutes: 0,
      practicedChars: 0,
      streakDays: 0,
      level: 0,
      topPercent: 0,
    };
  }
  const completedLessons = state.completed.size;
  const percent = totalLessons > 0 ? Math.min(100, Math.round((completedLessons / totalLessons) * 100)) : 0;
  const xp = completedLessons * 20 + state.saved.size * 5;
  const studyMinutes = Math.max(12, completedLessons * 6 + state.saved.size * 2);
  const practicedChars = Math.max(state.saved.size * 3, completedLessons * 4);
  const streakDays = Math.max(1, Math.min(30, completedLessons || 1));
  const level = Math.max(1, Math.min(99, Math.floor(xp / 100) + 1));
  return {
    totalLessons,
    completedLessons,
    percent,
    xp,
    studyMinutes,
    practicedChars,
    streakDays,
    level,
    topPercent: Math.max(5, 100 - Math.min(95, completedLessons * 3 + 8)),
  };
}

function renderHomeTodayStudyCardHTML(isVi) {
  const progress = getHomeTodayStudyProgress();
  const vocabCount = Math.min(progress.savedVocabCount, HOME_TODAY_VOCAB_TARGET);
  const listenMinutes = formatHomeTodayMinuteValue(progress.listenSeconds);
  const writeMinutes = formatHomeTodayMinuteValue(progress.writeSeconds);
  const rows = [
    {
      label: isVi ? "Từ vựng" : "词汇",
      value: `${vocabCount} / ${HOME_TODAY_VOCAB_TARGET}`,
      done: vocabCount >= HOME_TODAY_VOCAB_TARGET,
    },
    {
      label: isVi ? "Luyện nghe" : "听力练习",
      value: `${listenMinutes} / 30 ${isVi ? "phút" : "分钟"}`,
      done: progress.listenSeconds >= HOME_TODAY_TIME_TARGET_SECONDS,
    },
    {
      label: isVi ? "Luyện gõ" : "拼打",
      value: `${writeMinutes} / 30 ${isVi ? "phút" : "分钟"}`,
      done: progress.writeSeconds >= HOME_TODAY_TIME_TARGET_SECONDS,
    },
  ];

  return `
    <section class="home-desktop-calendar-card home-today-study-card" aria-label="${isVi ? "Hôm nay học gì" : "今天学什么"}">
      <header class="home-today-study-head">
        <span class="home-today-study-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="5" width="16" height="15" rx="3"></rect>
            <path d="M8 3v4M16 3v4M4 10h16M9 15l2 2 4-5"></path>
          </svg>
        </span>
        <div>
          <h3>${isVi ? "Hôm nay học gì?" : "今天学什么？"}</h3>
        </div>
        <time datetime="${escapeAttr(getVietnamTodayKey())}">${escapeHtml(progress.dateLabel)}</time>
      </header>

      <div class="home-today-study-summary">
        <div class="home-today-study-ring" style="--home-today-progress: ${progress.percent};">
          <span>${progress.percent}%</span>
        </div>
        <div class="home-today-study-copy">
          <strong>${isVi ? `Đã hoàn thành ${progress.completedCount} / ${progress.totalCount} mục` : `已完成 ${progress.completedCount} / ${progress.totalCount} 项`}</strong>
          <span class="home-today-study-bar" aria-hidden="true"><i style="width: ${progress.percent}%"></i></span>
        </div>
      </div>

      <ul class="home-today-study-list">
        ${rows.map((row) => `
          <li class="${row.done ? "is-done" : ""}">
            <span class="home-today-study-check" aria-hidden="true">${row.done ? "✓" : ""}</span>
            <span>${escapeHtml(row.label)}</span>
            <strong>${escapeHtml(row.value)}</strong>
          </li>
        `).join("")}
      </ul>
    </section>
  `;
}

function renderHomeDesktopSavedVocabHTML(isVi) {
  const savedItems = Array.from(state.saved)
    .map((hanzi) => ({ hanzi, ...findItemByHanzi(hanzi) }))
    .slice(0, 4);

  if (!savedItems.length) {
    return `
      <div class="home-desktop-vocab-empty">
        ${isVi ? "Chưa có từ vựng đã lưu. Hãy lưu từ khi luyện tập để ôn lại tại đây." : "还没有收藏生词。练习时收藏词汇即可在这里复习。"}
      </div>
    `;
  }

  return `
    <div class="home-desktop-vocab-grid">
      ${savedItems.map((item) => `
        <article class="home-desktop-vocab-card" data-vocab-hanzi="${escapeAttr(item.hanzi)}">
          <div class="home-desktop-vocab-top">
            <strong class="home-desktop-vocab-hanzi">${escapeHtml(item.hanzi)}</strong>
            <button type="button" class="home-desktop-vocab-star" aria-label="${isVi ? "Đã lưu" : "已收藏"}">★</button>
          </div>
          <p class="home-desktop-vocab-pinyin">${escapeHtml(item.tone || item.pinyin || "")}</p>
          <p class="home-desktop-vocab-meaning">${escapeHtml(item.vi || "")}</p>
          <button type="button" class="home-desktop-vocab-speak vocab-speak-btn" aria-label="${isVi ? "Phát âm" : "朗读"}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>
            </svg>
          </button>
        </article>
      `).join("")}
    </div>
  `;
}

function renderHomeDesktopModulesHTML(isVi) {
  return `
    <section class="home-desktop-modules home-desktop-modules--duo home-duo-modules">
      <article class="home-desktop-module-card home-duo-card home-duo-card--write" data-home-module="write" role="button" tabindex="0">
        <div class="home-duo-card-bg" aria-hidden="true"></div>
        <div class="home-duo-copy">
          <span class="home-duo-badge">${isVi ? "✦ Mỗi ngày luyện gõ" : "✦ 每日拼打"}</span>
          <h3>${isVi ? "Luyện gõ" : "拼打"}</h3>
          <p>${isVi ? "Khóa HSK theo cấp độ và tiếng Trung tần suất cao" : "分级 HSK 课程与高频汉语"}</p>
          <button type="button" class="home-duo-btn" data-home-module="write">
            ${isVi ? "Bắt đầu học" : "开始学习"} <span>›</span>
          </button>
        </div>
        <div class="home-duo-art home-duo-art--write">
          <img src="assets/home-module-writing-optimized.jpg" alt="" onerror="this.src='assets/home-module-hsk-pc.png'" />
        </div>
        <span class="home-duo-watermark">写</span>
      </article>

      <article class="home-desktop-module-card home-duo-card home-duo-card--listen" data-home-module="listen" role="button" tabindex="0">
        <div class="home-duo-card-bg" aria-hidden="true"></div>
        <div class="home-duo-copy">
          <span class="home-duo-badge">${isVi ? "✦ Mỗi ngày luyện nghe" : "✦ 每日听力练习"}</span>
          <h3>${isVi ? "Luyện nghe" : "听力练习"}</h3>
          <p>${isVi ? "Đối thoại & độc thoại theo từng trình độ" : "对话与独白，分级练习"}</p>
          <button type="button" class="home-duo-btn" data-home-module="listen">
            ${isVi ? "Vào luyện tập" : "进入练习"} <span>›</span>
          </button>
        </div>
        <div class="home-duo-art home-duo-art--listen">
          <img src="assets/home-module-listening1-optimized.jpg" alt="" onerror="this.src='assets/home-module-vocab-pc.png'" />
        </div>
        <span class="home-duo-watermark">听</span>
      </article>
    </section>
  `;
}

function getDesktopNavActive() {
  if (state.screen === "home") return "home";
  if (state.screen === "vocab") return "vocab";
  if (state.screen === "listening") return "listening";
  if (state.screen === "account") return "account";
  if (state.screen === "course") return "write";
  return "";
}

function desktopNavIcon(name) {
  const icons = {
    home: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M3 10.6 12 3l9 7.6V21h-6v-6H9v6H3V10.6z"/></svg>`,
    hsk: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5z"/><path d="M6 10.2v5.1c1.7 1.5 3.7 2.2 6 2.2s4.3-.7 6-2.2v-5.1"/><path d="M21 9v5"/></svg>`,
    daily: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 18h7"/><path d="M7.5 18c2.4-4.3 4.1-8.6 5-13"/><path d="M5 8h9"/><path d="M11 5h4"/><path d="M15 20l3.6-9 3.4 9"/><path d="M16.2 17h4.6"/></svg>`,
    vocab: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M10 3v18"/><path d="M14 3v18"/></svg>`,
    listening: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>`,
    account: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="7" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>`,
    write: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>`,
    vip: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3.3 2.55 5.16 5.7.83-4.12 4.02.97 5.67L12 16.3l-5.1 2.68.97-5.67-4.12-4.02 5.7-.83L12 3.3z"/></svg>`,
  };
  return icons[name] || "";
}

function renderAppDesktopSidebarHTML(activeNavOverride = "") {
  const isVi = state.lang === "vi";
  const active = activeNavOverride || getDesktopNavActive();
  const navClass = (id) => `home-desktop-nav-item${active === id ? " is-active" : ""}`;
  const stats = getHomeDashboardStats();

  return `
    <aside class="home-desktop-sidebar" aria-label="${isVi ? "Điều hướng" : "导航"}">
      <div class="home-desktop-brand">
        <span class="home-desktop-brand-icon" aria-hidden="true">✎</span>
        <div>
          <strong>${isVi ? "HuaMei" : "HuaMei"}</strong>
          <small>${isVi ? "Học đúng - Nhớ lâu" : "学得准 – 记得稳"}</small>
        </div>
      </div>
      <nav class="home-desktop-nav">
        <button type="button" class="${navClass("home")}" data-home-nav="home">
          <span aria-hidden="true">${desktopNavIcon("home")}</span>${isVi ? "Trang chủ" : "首页"}
        </button>
        <button type="button" class="${navClass("write")}" data-home-nav="write">
        <span aria-hidden="true">${desktopNavIcon("write")}</span>${isVi ? "Luyện gõ" : "拼打"}
      </button>
      <button type="button" class="${navClass("listening")}" data-home-nav="listen">
        <span aria-hidden="true">${desktopNavIcon("listening")}</span>${t("listening")}
      </button>
        <button type="button" class="home-desktop-nav-item home-desktop-vip-label" data-sidebar-vip-upgrade aria-label="${isVi ? "M\u1edf G\u00f3i VIP" : "\u6253\u5f00 VIP \u5957\u9910"}">
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.15" stroke-linecap="round" stroke-linejoin="round">
              <path d="m12 3.3 2.55 5.16 5.7.83-4.12 4.02.97 5.67L12 16.3l-5.1 2.68.97-5.67-4.12-4.02 5.7-.83L12 3.3z"/>
            </svg>
          </span>${isVi ? "G\u00f3i VIP" : "VIP \u5957\u9910"}
        </button>
        <button type="button" class="${navClass("account")}" data-home-nav="account">
          <span aria-hidden="true">${desktopNavIcon("account")}</span>${isVi ? "Cá nhân" : "个人"}
        </button>
      </nav>

      <div class="home-desktop-sidebar-streak">
        <span class="home-desktop-sidebar-streak-icon" aria-hidden="true">🔥</span>
        <div>
          <strong>${stats.streakDays} ${isVi ? "ngày" : "天"}</strong>
          <small>${isVi ? "Chuỗi ngày học" : "连续学习"}</small>
        </div>
      </div>

      <div class="home-desktop-sidebar-panda" aria-hidden="true"></div>

      <div class="home-desktop-sidebar-foot">
        ${state.user ? `
          <button type="button" class="home-desktop-logout-btn" id="homeDesktopLogoutBtn">
            ${t("logout")}
          </button>
        ` : ""}
      </div>
    </aside>
  `;
}

function renderMobilePageReturnBar(activeNav = "", title = "") {
  if (!activeNav || activeNav === "home") return "";
  if (activeNav === "account") return "";
  if (activeNav === "hsk" && !state.hskLevelPicker && state.writeCourseView !== "communication") return "";
  const labels = {
    hsk: state.lang === "vi" ? "Khóa HSK" : "HSK 课程",
    daily: t("dailyTabNav"),
    listening: t("listening"),
    vocab: state.lang === "vi" ? "Bộ từ" : "词库",
    account: state.lang === "vi" ? "Cá nhân" : "个人",
  };
  const headerTitle = title || labels[activeNav] || "";
  return `
    <div class="mobile-page-return-bar mobile-page-return-bar--${escapeAttr(activeNav)}" aria-label="${escapeAttr(headerTitle)}">
      <button type="button" class="mobile-page-return-btn" data-mobile-page-back aria-label="${state.lang === "vi" ? "Quay lại trang chủ" : "返回首页"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <h1 class="mobile-page-return-title">${escapeHtml(headerTitle)}</h1>
    </div>
  `;
}

function wrapWithAppDesktopShell(innerHTML, shellClass = "", activeNav = "", options = {}) {
  return `
    <div class="app-desktop-shell ${shellClass}">
      ${renderAppDesktopSidebarHTML(activeNav)}
      <div class="app-desktop-content">
        ${options.hideMobileHeader ? "" : renderMobilePageReturnBar(activeNav, options.mobileTitle || "")}
        ${innerHTML}
      </div>
    </div>
  `;
}

function getAppScrollSnapshot() {
  return {
    windowY: window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0,
    appY: document.getElementById("app")?.scrollTop || 0,
    shellY: document.querySelector(".app-shell:not(.hidden)")?.scrollTop || 0,
    screenY: document.querySelector(".screen:not(.hidden)")?.scrollTop || 0,
  };
}

function restoreAppScrollSnapshot(snapshot = {}) {
  const restoreNow = () => {
    window.scrollTo({ top: snapshot.windowY || 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = snapshot.windowY || 0;
    document.body.scrollTop = snapshot.windowY || 0;
    document.getElementById("app")?.scrollTo?.({ top: snapshot.appY || 0, left: 0, behavior: "auto" });
    document.querySelector(".app-shell:not(.hidden)")?.scrollTo?.({ top: snapshot.shellY || 0, left: 0, behavior: "auto" });
    document.querySelector(".screen:not(.hidden)")?.scrollTo?.({ top: snapshot.screenY || 0, left: 0, behavior: "auto" });
  };
  restoreNow();
  requestAnimationFrame(restoreNow);
}

function setScreenWithDesktopShell(screenKey, innerHTML, shellClass = "", activeNav = "", options = {}) {
  const node = screens[screenKey];
  if (!node) return;
  const scrollSnapshot = options.preserveScroll ? getAppScrollSnapshot() : null;
  node.innerHTML = wrapWithAppDesktopShell(innerHTML, shellClass, activeNav, options);
  scheduleScreenMediaOptimization(node);
  if (scrollSnapshot) restoreAppScrollSnapshot(scrollSnapshot);
  else scrollAppToTop();
}

const listeningCategories = [
  {
    id: "dialogue",
    icon: "💬",
    vi: "Đối thoại",
    zh: "对话",
    countVi: "3 cấp độ",
    countZh: "3 个等级",
    levels: [
      { id: "dialogue-so-cap", vi: "Đối thoại sơ cấp", zh: "初级对话", code: "A", descVi: "Phù hợp cho người mới bắt đầu", descZh: "适合初学者", countVi: "12 bài", countZh: "12 课" },
      { id: "dialogue-trung-cap", vi: "Đối thoại trung cấp", zh: "中级对话", code: "B", descVi: "Nâng cao khả năng nghe hiểu", descZh: "提升听力理解能力", countVi: "24 bài", countZh: "24 课" },
      { id: "dialogue-cao-cap", vi: "Đối thoại cao cấp", zh: "高级对话", code: "C", descVi: "Thử thách khả năng nghe hiểu", descZh: "挑战听力理解能力", countVi: "18 bài", countZh: "18 课" },
    ],
  },
  {
    id: "monologue",
    icon: "🎙️",
    vi: "Độc thoại",
    zh: "独白",
    countVi: "4 chủ đề",
    countZh: "4 个主题",
    levels: [
      { id: "monologue-dien-thuyet", vi: "Diễn thuyết", zh: "演讲", rowIcon: "🎤", descVi: "Các bài diễn thuyết nổi tiếng", descZh: "著名演讲文章" },
      { id: "monologue-tap-chi", vi: "Tạp chí", zh: "杂志", rowIcon: "📖", descVi: "Bài viết từ tạp chí, báo chí", descZh: "杂志报刊文章" },
      { id: "monologue-tam-ly-hoc", vi: "Tâm lý học", zh: "心理学", rowIcon: "🎓", descVi: "Chủ đề tâm lý, cảm xúc, hành vi", descZh: "心理、情感、行为主题" },
      { id: "monologue-other", vi: "Chủ Đề Khác", zh: "其他主题", rowIcon: "⭐", descVi: "Nhiều chủ đề thú vị khác", descZh: "更多有趣主题" },
    ],

  },
];

function renderListeningLevelGateway(options = {}) {
  const isVi = state.lang === "vi";
  const categoryHTML = listeningCategories.map((category) => `
    <article class="listening-gateway-card listening-gateway-card--${category.id}">
      <div class="listening-gateway-card-head">
        <span class="listening-gateway-icon">${category.icon}</span>
        <div>
          <h2>${escapeHtml(isVi ? category.vi : category.zh)}</h2>
          <small>${escapeHtml(isVi ? category.countVi : category.countZh)}</small>
        </div>
        ${category.id === "dialogue" ? `
          <span class="listening-gateway-card-illustration listening-gateway-card-illustration--dialogue" aria-hidden="true"></span>
        ` : `
          <span class="listening-gateway-card-illustration listening-gateway-card-illustration--monologue" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6a9 9 0 0 1 9-3M21 18a9 9 0 0 1-9 3"/><circle cx="12" cy="12" r="3"/><path d="M4 12h2M18 12h2"/></svg>
          </span>
        `}
      </div>

      <div class="listening-gateway-levels">
        ${category.levels.map((level) => `
          <button type="button" class="listening-gateway-level" data-listening-level="${escapeAttr(level.id)}">
            ${level.code ? `
              <span class="listening-level-code listening-level-code--${escapeAttr(level.code.toLowerCase())}">${escapeHtml(level.code)}</span>
            ` : `
              <span class="listening-level-row-icon">${escapeHtml(level.rowIcon || "🔊")}</span>
            `}
            <span class="listening-level-body">
              <strong>${escapeHtml(isVi ? level.vi : level.zh)}</strong>
              <small>${escapeHtml(isVi ? (level.descVi || "") : (level.descZh || ""))}</small>
            </span>
            ${level.countVi ? `
              <span class="listening-level-count">${escapeHtml(isVi ? level.countVi : level.countZh)}</span>
            ` : ""}
            <span class="listening-level-chevron" aria-hidden="true">›</span>
          </button>
        `).join("")}
      </div>
    </article>
  `).join("");

  setScreenWithDesktopShell("listening", `
    <section class="listening-gateway-screen">
      <header class="listening-gateway-hero">
        <div class="listening-gateway-hero-inner">
          <button class="listening-gateway-badge listening-gateway-badge--back" type="button" data-listening-gateway-back aria-label="${isVi ? "Quay lại" : "返回"}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/><path d="M20 12H9"/></svg>
            ${isVi ? "Quay lại" : "返回"}
          </button>
          <h1>${isVi ? "Luyện Nghe" : "听力练习"}</h1>
          <p>${isVi ? "Nghe hiểu tự nhiên - Tiến bộ mỗi ngày" : "自然听懂，每天进步"}</p>

          <button type="button" class="listening-gateway-cta" data-listening-start>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            ${isVi ? "Bắt đầu luyện nghe" : "开始听力练习"}
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>
          </button>

          <div class="listening-gateway-stats-row">
            <div class="listening-gateway-stat">
              <span class="listening-gateway-stat-icon">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
              </span>
              <span class="listening-gateway-stat-text">
                <strong>${isVi ? "Nghe hiểu" : "听力理解"}</strong>
                <small>${isVi ? "Nắm bắt nội dung dễ dàng" : "轻松掌握内容"}</small>
              </span>
            </div>
            <div class="listening-gateway-stat">
              <span class="listening-gateway-stat-icon">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6a9 9 0 0 1 9-3M21 18a9 9 0 0 1-9 3"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
              <span class="listening-gateway-stat-text">
                <strong>${isVi ? "Phát âm chuẩn" : "标准发音"}</strong>
                <small>${isVi ? "Làm quen ngữ điệu tự nhiên" : "熟悉自然语调"}</small>
              </span>
            </div>
            <div class="listening-gateway-stat">
              <span class="listening-gateway-stat-icon">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>
              </span>
              <span class="listening-gateway-stat-text">
                <strong>${isVi ? "Tiến bộ mỗi ngày" : "每天进步"}</strong>
                <small>${isVi ? "Luyện nghe hiệu quả" : "高效听力训练"}</small>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div class="listening-gateway-grid">
        ${categoryHTML}
      </div>
    </section>
  `, "app-desktop-shell--listening", "listening", {
    ...options,
    hideMobileHeader: true,
  });
}

function getListeningLevelInfo(levelId = state.listeningLevelId) {
  for (const category of listeningCategories) {
    const level = category.levels.find((item) => item.id === levelId);
    if (level) return { category, level };
  }
  return { category: listeningCategories[0], level: listeningCategories[0].levels[0] };
}

function getListeningDashboardHeroTitle(levelId = state.listeningLevelId, isVi = state.lang === "vi") {
  const heroTitles = {
    "dialogue-so-cap": isVi ? "Nghe Sơ Cấp" : "初级听力",
    "dialogue-trung-cap": isVi ? "Nghe Trung Cấp" : "中级听力",
    "dialogue-cao-cap": isVi ? "Nghe Cao Cấp" : "高端聆听",
  };
  return heroTitles[levelId] || (isVi ? "Luyện nghe tiếng Trung" : "中文听力训练");
}

const LISTENING_LESSON_PROGRESS_STORAGE_KEY = "v2-listening-lesson-progress";

function readListeningProgressMap() {
  try {
    const value = JSON.parse(localStorage.getItem(LISTENING_LESSON_PROGRESS_STORAGE_KEY) || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

function writeListeningProgressMap(progressMap) {
  try {
    localStorage.setItem(LISTENING_LESSON_PROGRESS_STORAGE_KEY, JSON.stringify(progressMap || {}));
  } catch {
    // localStorage can fail in private mode; the UI should still keep working.
  }
}

function getListeningLessonProgress(episodeId) {
  if (!episodeId) return null;
  return readListeningProgressMap()[episodeId] || null;
}

function getListeningLessonStatus(episodeId, duration = 0) {
  const progress = getListeningLessonProgress(episodeId);
  if (!progress) {
    return { statusVi: "Chưa học", statusZh: "未学", key: "not-started" };
  }

  const safeDuration = Math.max(0, Number(duration || progress.duration || 0));
  const currentTime = Math.max(0, Number(progress.currentTime || 0));
  const percent = Math.max(
    0,
    Number.isFinite(Number(progress.percent))
      ? Number(progress.percent)
      : (safeDuration > 0 ? (currentTime / safeDuration) * 100 : 0)
  );
  const completed = Boolean(progress.completed) || percent >= 99.5 || (safeDuration > 0 && currentTime >= safeDuration - 0.5);

  if (completed) {
    return { statusVi: "Đã học", statusZh: "已学", key: "completed" };
  }

  return { statusVi: "Đang học", statusZh: "学习中", key: "in-progress" };
}

function updateListeningLessonProgress(episodeId, currentTime = 0, duration = 0, options = {}) {
  if (!episodeId) return;
  const progressMap = readListeningProgressMap();
  const previous = progressMap[episodeId] || {};
  const safeDuration = Math.max(0, Number(duration || previous.duration || 0));
  const safeCurrent = Math.max(0, Number(currentTime || 0));
  const percent = safeDuration > 0 ? Math.min(100, (safeCurrent / safeDuration) * 100) : Number(previous.percent || 0);
  const completed = Boolean(options.completed) || Boolean(previous.completed) || percent >= 99.5;

  progressMap[episodeId] = {
    ...previous,
    currentTime: completed && safeDuration > 0 ? safeDuration : safeCurrent,
    duration: safeDuration,
    percent: completed ? 100 : Math.max(0, Math.min(99, percent)),
    completed,
    updatedAt: Date.now(),
  };
  writeListeningProgressMap(progressMap);
}

function getListeningTopicProgressPercent(lessons = []) {
  const safeLessons = Array.isArray(lessons) ? lessons : [];
  if (!safeLessons.length) return 0;

  const completedCount = safeLessons.filter((lesson) => {
    const episodeId = lesson?.id || lesson?.episodeId || "";
    const episode = listeningEpisodes.find((item) => item.id === episodeId) || lesson || {};
    const duration = Number(episode.duration || lesson?.duration || getListeningItemDuration(episode.sentences || lesson?.sentences || []));
    return getListeningLessonStatus(episodeId, duration).key === "completed";
  }).length;

  return Math.round((completedCount / safeLessons.length) * 100);
}

function getContinueListeningLesson() {
  const progressMap = readListeningProgressMap();
  const candidates = Object.entries(progressMap)
    .map(([episodeId, progress]) => {
      const episode = listeningEpisodes.find((item) => item.id === episodeId);
      if (!episode || !progress) return null;

      const duration = Number(episode.duration || progress.duration || getListeningItemDuration(episode.sentences || []));
      const status = getListeningLessonStatus(episodeId, duration);
      if (status.key !== "in-progress") return null;

      const progressPercent = Math.max(
        0,
        Math.min(99, Math.round(Number(progress.percent || 0)))
      );
      const lessonNumber = Math.max(1, listeningEpisodes.findIndex((item) => item.id === episodeId) + 1);

      return {
        episode,
        progress,
        progressPercent,
        lessonNumber,
        updatedAt: Number(progress.updatedAt || 0),
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.updatedAt - a.updatedAt);

  return candidates[0] || null;
}

function renderIntermediateListeningSuggestionsHTML(isVi) {
  const suggestedImages = [
    "assets/anhthanhphan1.png",
    "assets/anhthanhphan2.png",
    "assets/anhthanhphan3.png",
    "assets/anhthanhphan4.jpg",
    "assets/anhthanhphan5.png",
  ];
  const suggestedTopics = listeningCatalogTopics
    .filter((topic) => topic.levelId === "dialogue-trung-cap")
    .filter((topic) => Array.isArray(topic.lessons) && topic.lessons.length > 0)
    .slice(0, 5);

  if (!suggestedTopics.length) return "";

  return `
    <section class="listening-suggested-lessons-v3" aria-label="${isVi ? "Bài học đề xuất" : "推荐课程"}">
      <h2>${isVi ? "Bài học đề xuất" : "推荐课程"}</h2>
      <div class="listening-suggested-list-v3">
        ${suggestedTopics.map((topic, index) => {
    const progress = getListeningTopicProgressPercent(topic.lessons);
    const lessonCount = topic.lessons.length;
    const openId = topic.lessons[0]?.id || topic.id;
    const lessonNumber = Math.max(1, listeningEpisodes.findIndex((episode) => episode.id === openId) + 1);
    const title = isVi ? (topic.label_vi || topic.label_zh || topic.id) : (topic.label_zh || topic.label_vi || topic.id);
    const levelLabel = isVi ? (topic.levelLabelVi || "Đối thoại trung cấp") : (topic.levelLabelZh || "中级对话");
    return `
            <button
              class="listening-suggested-item-v3"
              type="button"
              data-listening-topic-list="${escapeAttr(openId)}"
              data-listening-topic-level="dialogue-trung-cap"
              data-listening-topic-id="${escapeAttr(topic.id || "")}"
            >
              <img src="${escapeAttr(suggestedImages[index % suggestedImages.length])}" alt="" loading="lazy" />
              <span class="listening-suggested-copy-v3">
                <strong>${isVi ? `Bài ${lessonNumber}: ${escapeHtml(title)}` : `第${lessonNumber}课：${escapeHtml(title)}`}</strong>
                <small>${escapeHtml(levelLabel)}</small>
                <span class="listening-suggested-progress-row-v3">
                  <span class="listening-suggested-progress-v3"><i style="width:${progress}%"></i></span>
                  <em>${progress}%</em>
                  <span>${lessonCount} ${isVi ? "bài học" : "课"}</span>
                </span>
              </span>
              <span class="listening-suggested-arrow-v3" aria-hidden="true">›</span>
            </button>
          `;
  }).join("")}
      </div>
    </section>
  `;
}

function getListeningCatalogTopic(topicId = state.listeningTopicId) {
  const selectedTopicId = String(topicId || "");
  if (selectedTopicId) {
    const topic = listeningCatalogTopics.find((item) => item.id === selectedTopicId);
    if (topic) return topic;
  }

  const seedEpisodeId = String(state.listeningSeedEpisodeId || "");
  if (seedEpisodeId) {
    const topic = listeningCatalogTopics.find((item) =>
      (item.lessons || []).some((lesson) => lesson.id === seedEpisodeId)
    );
    if (topic) return topic;
  }

  return listeningCatalogTopics.find((item) => item.levelId === state.listeningLevelId) || null;
}

function getListeningLevelLessons(levelId = state.listeningLevelId) {
  const catalogLevelRows = getCatalogLevelRows(levelId);
  if (catalogLevelRows) return catalogLevelRows;

  const isMonologue = String(levelId).startsWith("monologue");
  const realSource = isMonologue
    ? getMonologueListeningEpisodes(levelId)
    : getDialogueListeningEpisodes(levelId);

  const source = realSource.length ? realSource : listeningEpisodes;
  const hasRealSource = realSource.length > 0;
  const offsetMap = {
    "dialogue-so-cap": 0,
    "dialogue-trung-cap": 1,
    "dialogue-cao-cap": 2,
    "monologue-dien-thuyet": 0,
    "monologue-tap-chi": 1,
    "monologue-tam-ly-hoc": 2,
  };

  const seedIndex = source.findIndex((episode) => episode.id === state.listeningSeedEpisodeId);
  const start = seedIndex >= 0 ? seedIndex : (offsetMap[levelId] || 0) * 5;

  const lessonPresets = [
    {
      title: "Nói chuyện với người Trung Quốc không còn căng thẳng",
      zh: "和中国人聊天不再紧张",
      statusVi: "Mới học",
      statusZh: "新课",
      duration: "08:45",
      tone: "mint",
    },
    {
      title: "Làm việc cùng sếp và đồng nghiệp người Trung Quốc",
      zh: "和中国老板、同事一起工作",
      statusVi: "Đã học",
      statusZh: "已学",
      duration: "11:30",
      tone: "rose",
    },
    {
      title: "Trò chuyện với khách hàng Trung Quốc bằng tiếng Trung",
      zh: "用中文和中国客户沟通",
      statusVi: "Đang học",
      statusZh: "学习中",
      duration: "09:12",
      tone: "violet",
    },
    {
      title: "Xử lý tình huống khẩn cấp bằng tiếng Trung",
      zh: "用中文处理紧急情况",
      statusVi: "Chưa học",
      statusZh: "未学",
      duration: "07:28",
      tone: "orange",
    },
  ];
  const lessonCount = hasRealSource ? Math.min(source.length, 12) : lessonPresets.length;

  return Array.from({ length: lessonCount }, (_, index) => {
    const episode = source[(start + index) % source.length] || listeningEpisodes[0];
    const preset = lessonPresets[index % lessonPresets.length] || lessonPresets[0];
    const duration = hasRealSource || isMonologue
      ? (episode.duration || getListeningItemDuration(episode.sentences))
      : 0;
    const status = getListeningLessonStatus(episode.id, duration);

    return {
      no: index + 1,
      episodeId: episode.id,
      title: hasRealSource || isMonologue ? (episode.title || preset.title) : preset.title,
      zh: hasRealSource || isMonologue ? (episode.titleZh || episode.title || preset.zh) : preset.zh,
      statusVi: status.statusVi,
      statusZh: status.statusZh,
      duration: hasRealSource || isMonologue
        ? listeningFormatTime(duration)
        : preset.duration,
      tone: preset.tone,
    };
  });
}

function openListeningLevel(levelId) {
  state.listeningLevelId = levelId || "dialogue-so-cap";
  state.listeningSeedEpisodeId = "";
  state.listeningTopicId = "";
  state.listeningSentenceIndex = 0;
  state.listeningVocabPracticeIndex = 0;
  state.listeningLessonsBackTarget = "levels";
  const selectedTopic = listeningCatalogTopics.find((topic) => topic.levelId === state.listeningLevelId);
  if (String(state.listeningLevelId).startsWith("monologue") && selectedTopic) {
    state.listeningTopicId = selectedTopic.id || "";
    state.listeningSeedEpisodeId = selectedTopic.lessons?.[0]?.id || "";
    state.listeningView = "lessons";
  } else {
    state.listeningView = "dashboard";
  }

  renderListening();
}
function renderListening(options = {}) {
  if (!options.skipCatalogLoad && !listeningCatalogLoaded) {
    renderListeningCatalogLoading(options);
    ensureListeningCatalogLoaded({ silent: options.silentCatalogLoad }).then(() => {
      if (state.screen === "listening") {
        renderListening({ ...options, skipCatalogLoad: true });
      }
    });
    return;
  }
  syncLearningBehaviorSession("listening");
  if (state.listeningView === "levels") {
    renderListeningLevelGateway(options);
    return;
  }
  if (state.listeningView === "lessons") {
    renderListeningLevelLessons(options);
    return;
  }
  if (state.listeningView === "repeat") {
    renderListeningRepeatLesson(options);
    return;
  }
  if (state.listeningView === "vocab") {
    renderListeningVocabLesson(options);
    return;
  }
  if (state.listeningView === "detail") {
    renderListeningDetail(options);
    return;
  }
  return renderListeningDashboard(options);
}

function renderListeningDashboard() {
  const isVi = state.lang === "vi";
  const selectedListeningLevelId = state.listeningLevelId || "dialogue-so-cap";
  const listeningHeroTitle = getListeningDashboardHeroTitle(selectedListeningLevelId, isVi);
  const catalogCardImages = [
    "assets/anhthanhphan1.png",
    "assets/anhthanhphan2.png",
    "assets/anhthanhphan3.png",
    "assets/anhthanhphan4.jpg",
  ];
  const catalogCardTones = ["green", "blue", "purple", "orange", "rose", "teal"];
  const catalogTopicCards = listeningCatalogTopics
    .filter((topic) => topic.levelId === selectedListeningLevelId)
    .filter((topic) => Array.isArray(topic.lessons) && topic.lessons.length > 0)
    .map((topic, index) => ({
      titleVi: topic.label_vi || topic.label_zh || topic.id,
      titleZh: topic.label_zh || topic.label_vi || topic.id,
      descVi: topic.levelLabelVi || topic.trackLabelVi || "",
      descZh: topic.levelLabelZh || topic.trackLabelZh || "",
      openId: topic.lessons[0]?.id || topic.id,
      levelId: topic.levelId || "",
      topicId: topic.id || "",
      progress: getListeningTopicProgressPercent(topic.lessons),
      lessons: topic.lessons.length,
      locked: isListeningContentLocked(topic.id),
      image: catalogCardImages[index % catalogCardImages.length],
      tone: catalogCardTones[index % catalogCardTones.length],
    }));
  const topicCards = [
    {
      titleVi: "Hội thoại",
      titleZh: "对话",
      descVi: "Giao tiếp hằng ngày",
      descZh: "日常交流",
      openId: "dialogue-so-cap-topic-1",
      progress: 70,
      lessons: 24,
      image: "assets/anhthanhphan1.png",
      tone: "green",
    },
    {
      titleVi: "HSK Listening",
      titleZh: "HSK 听力",
      descVi: "Luyện thi HSK",
      descZh: "HSK 听力练习",
      openId: "dialogue-so-cap-topic-2",
      progress: 60,
      lessons: 18,
      image: "assets/anhthanhphan2.png",
      tone: "blue",
    },
    {
      titleVi: "Phát âm",
      titleZh: "发音",
      descVi: "Luyện phát âm chuẩn",
      descZh: "标准发音练习",
      openId: "dialogue-so-cap-topic-3",
      progress: 45,
      lessons: 12,
      image: "assets/anhthanhphan3.png",
      tone: "purple",
    },
    {
      titleVi: "Du lịch",
      titleZh: "旅行",
      descVi: "Đi đây đó bằng tiếng Trung",
      descZh: "旅行中文",
      openId: "dialogue-so-cap-topic-4",
      progress: 80,
      lessons: 16,
      image: "assets/anhthanhphan4.jpg",
      tone: "orange",
    },
    {
      titleVi: "Mua sắm",
      titleZh: "购物",
      descVi: "Mua sắm, mặc cả",
      descZh: "购物与砍价",
      openId: "dialogue-so-cap-topic-5",
      progress: 65,
      lessons: 14,
      image: "assets/anhthanhphan5.png",
      tone: "rose",
    },
    {
      titleVi: "Ẩm thực",
      titleZh: "美食",
      descVi: "Món ngon mỗi ngày",
      descZh: "每日美食",
      openId: "dialogue-so-cap-topic-6",
      progress: 75,
      lessons: 20,
      image: "assets/anhthanhphan6.png",
      tone: "teal",
    },
  ];
  const monologueCards = getMonologueListeningEpisodes().slice(0, 3).map((episode, index) => ({
    titleVi: episode.title,
    titleZh: episode.titleZh,
    levelVi: "Độc thoại",
    levelZh: "独白",
    openId: episode.id,
    progress: 0,
    minutes: Math.max(1, Math.ceil((episode.duration || 60) / 60)),
    icon: "mic",
    tone: ["purple", "orange", "teal"][index % 3],
    actionVi: "Bắt đầu nghe",
    actionZh: "开始听",
  }));
  const topicIconHTML = (icon) => {
    const icons = {
      chat: `<span class="listening-topic-art listening-topic-art--chat"><i></i><i></i></span>`,
      book: `<span class="listening-topic-art listening-topic-art--book"><i>HSK</i></span>`,
      mic: `<span class="listening-topic-art listening-topic-art--mic"><i></i></span>`,
      suitcase: `<span class="listening-topic-art listening-topic-art--suitcase"><i></i></span>`,
      bag: `<span class="listening-topic-art listening-topic-art--bag"><i></i></span>`,
      briefcase: `<span class="listening-topic-art listening-topic-art--briefcase"><i></i></span>`,
      food: `<span class="listening-topic-art listening-topic-art--food"><i></i></span>`,
    };
    return icons[icon] || icons.chat;
  };
  const allTopicCards = catalogTopicCards.length > 0 ? catalogTopicCards : topicCards;

  const cardsHTML = allTopicCards.map((topic) => `
  <button class="listening-topic-card-v2 listening-topic-card-v2--${escapeAttr(topic.tone)}${topic.locked ? " listening-content-locked" : ""}" type="button" ${topic.locked ? "aria-disabled=\"true\"" : ""} data-listening-topic-list="${escapeAttr(topic.openId)}" data-listening-topic-level="${escapeAttr(topic.levelId || "dialogue-so-cap")}" data-listening-topic-id="${escapeAttr(topic.topicId || "")}">
    <span class="listening-topic-card-v2-copy">
      <strong>${escapeHtml(isVi ? topic.titleVi : topic.titleZh)}</strong>
    </span>

    <span class="listening-topic-card-v2-image">
      <img src="${escapeAttr(topic.image)}" alt="" />
    </span>

    <span class="listening-topic-card-v2-progress">
      <i style="width:${topic.progress}%"></i>
    </span>

    <span class="listening-topic-card-v2-meta">
      <em>${topic.progress}%</em>
      <span>${topic.lessons} ${isVi ? "bài học" : "课"}</span>
    </span>

    <span class="listening-topic-card-v2-arrow" aria-hidden="true">${topic.locked ? "" : "›"}</span>
  </button>
`).join("");
  const continueLesson = getContinueListeningLesson();
  const recommended = continueLesson?.episode || listeningEpisodes[0] || {};
  const continueProgressPercent = continueLesson?.progressPercent ?? 0;
  const continueLessonNumber = Math.max(1, continueLesson?.lessonNumber || 1);
  const continueTitle = isVi
    ? `Bài ${continueLessonNumber}: ${recommended.title || "Bài nghe"}`
    : `第${continueLessonNumber}课：${recommended.titleZh || recommended.title || "听力"}`;
  const listenedMinutes = 512;
  const targetMinutes = 750;
  const progressPercent = 68;
  const userName = state.user?.name || state.user?.fullName || (isVi ? "bạn" : "你");

  setScreenWithDesktopShell("listening", `
    <div class="listening-spa-layout">

      <main class="listening-dashboard-main">
        <div class="listening-dashboard-content">
<section class="listening-spa-hero listening-topic-hero">
  <button class="listening-dashboard-back-btn listening-dashboard-back-btn--hero" type="button" data-listening-dashboard-back aria-label="${isVi ? "Quay lại" : "返回"}">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </button>
  <div class="listening-topic-hero-copy">
    <button class="listening-topic-hero-kicker listening-topic-hero-kicker--back" type="button" data-listening-dashboard-back aria-label="${isVi ? "Quay lại" : "返回"}">
      ${desktopNavIcon("listening")} ${isVi ? "Luyện nghe" : "听力"}
    </button>

    <h2>${escapeHtml(listeningHeroTitle)}</h2>
    <p>${isVi ? "Nghe hiểu · Phản xạ · Giao tiếp tự nhiên" : "听懂 · 反应 · 自然交流"}</p>

    <div class="listening-topic-hero-actions">
      <button class="listening-topic-primary-btn" type="button" data-listening-open="${escapeAttr(recommended.id || "ep-001")}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
        ${isVi ? "Tiếp tục học" : "继续学习"}
      </button>

      <button class="listening-topic-ghost-btn" type="button">
        ${isVi ? "Khám phá" : "探索"}
      </button>
    </div>
  </div>
</section>

      <section class="listening-spa-section">
        <div class="listening-section-head">
          <div class="listening-filter-tabs" role="tablist" aria-label="${isVi ? "Lọc chủ đề" : "筛选主题"}">
            <button class="active" type="button">${isVi ? "Tất cả" : "全部"}</button>
            <button type="button">${isVi ? "Sơ cấp" : "初级"}</button>
            <button type="button">${isVi ? "Trung cấp" : "中级"}</button>
            <button type="button">${isVi ? "Nâng cao" : "高级"}</button>
          </div>
          <button class="listening-sort-btn" type="button">${isVi ? "Mới nhất" : "最新"} <span aria-hidden="true">⌄</span></button>
        </div>
        <div class="listening-topic-grid">
          ${cardsHTML}
        </div>
        <p class="listening-tip">${isVi ? "Mẹo: Nghe chủ động, ghi chú từ khóa và lặp lại để cải thiện hiệu quả!" : "提示：主动听，记录关键词并反复练习。"}</p>
      </section>
        </div>

        <aside class="listening-dashboard-rail listening-dashboard-rail-v3" aria-label="${isVi ? "Tiến độ nghe" : "听力进度"}">
  <section class="listening-continue-v3">
    <h2>${isVi ? "Tiếp tục học" : "继续学习"}</h2>

    <div class="listening-continue-body-v3">
      <img src="assets/anhthanhphan1.png" alt="" />
      <div>
        <strong>${escapeHtml(continueTitle)}</strong>
        <span class="listening-continue-wave-v3"></span>
      </div>
      <button type="button" data-listening-open="${escapeAttr(recommended.id || "ep-001")}" aria-label="${isVi ? "Tiếp tục học" : "继续"}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
      </button>
    </div>

    <div class="listening-continue-progress-v3">
      <i style="width:${continueProgressPercent}%"></i>
    </div>

    <footer>
      <span>${continueProgressPercent}% ${isVi ? "hoàn thành" : "完成"}</span>
      <button type="button" data-listening-open="${escapeAttr(recommended.id || "ep-001")}">${isVi ? "Học tiếp" : "继续"}</button>
    </footer>
  </section>

  ${renderIntermediateListeningSuggestionsHTML(isVi)}
</aside>
      </main>
    </div>
  `, "app-desktop-shell--listening", "listening", {
    hideMobileHeader: true,
  });
}

function listeningFormatTime(value = 0) {
  const seconds = Math.max(0, Math.floor(value));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function getListeningPlaybackRate(rate = state.listeningPlaybackRate) {
  const numericRate = Number(rate);
  return [0.75, 1, 1.25, 1.5].includes(numericRate) ? numericRate : 1;
}

function applyListeningPlaybackRate(audio = $("#listeningAudio")) {
  const rate = getListeningPlaybackRate();
  if (audio) audio.playbackRate = rate;
  return rate;
}

function getListeningRateLabel(rate = state.listeningPlaybackRate) {
  const isVi = state.lang === "vi";
  const labels = {
    0.75: isVi ? "Chậm" : "慢",
    1: isVi ? "Tốc độ" : "速度",
    1.25: isVi ? "Nhanh" : "快",
    1.5: "1.5x",
  };
  return labels[getListeningPlaybackRate(rate)] || (isVi ? "Tốc độ" : "速度");
}

function setListeningPlaybackRate(rate) {
  state.listeningPlaybackRate = getListeningPlaybackRate(rate);
  localStorage.setItem("v2-listening-rate", String(state.listeningPlaybackRate));
  applyListeningPlaybackRate();
  document.querySelectorAll("[data-listening-rate]").forEach((button) => {
    const isActive = Number(button.dataset.listeningRate) === state.listeningPlaybackRate;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  document.querySelectorAll("[data-listening-speed-label]").forEach((node) => {
    node.textContent = getListeningRateLabel();
  });
}

function getListeningSubtitleMode(mode = state.listeningSubtitleMode) {
  return ["vi", "pinyin-zh", "both"].includes(mode) ? mode : "pinyin-zh";
}

function getListeningSubtitleDisplay(mode = state.listeningSubtitleMode) {
  const subtitleMode = getListeningSubtitleMode(mode);
  const isVi = state.lang === "vi";
  const showPinyinChinese = subtitleMode === "pinyin-zh" || subtitleMode === "both";
  const showVietnamese = subtitleMode === "vi" || subtitleMode === "both";
  const translationToggleLabel = showVietnamese
    ? (isVi ? "Ẩn toàn bộ tiếng Việt" : "隐藏全部越南语")
    : (isVi ? "Xem toàn bộ bản dịch tiếng Việt" : "查看全部越南语翻译");

  return {
    subtitleMode,
    showPinyinChinese,
    showVietnamese,
    translationToggleLabel,
  };
}

function isListeningDialogueEpisode(episode = getListeningEpisode()) {
  const markers = [
    episode?.trackId,
    episode?.type,
    episode?.kind,
    episode?.id,
    episode?.category,
    episode?.categoryZh,
  ].map((value) => normalizeLatin(String(value || "")).toLowerCase());

  return markers.some((value) =>
    value.includes("dialogue")
    || value.includes("doi thoai")
    || value.includes("doi-thoai")
    || value.includes("dui thoai")
    || value.includes("对话"),
  );
}

function getListeningSentenceLabel(episode = getListeningEpisode(), sentence = {}, index = 0) {
  if (!isListeningDialogueEpisode(episode)) return String(index + 1);
  const speaker = String(sentence.speaker || "").trim();
  if (/^[A-Z]$/i.test(speaker)) return speaker.toUpperCase();
  return index % 2 === 0 ? "A" : "B";
}

function renderListeningSubtitleButtonsHTML(mode = state.listeningSubtitleMode) {
  const subtitleMode = getListeningSubtitleMode(mode);
  return [
    { id: "vi", label: "Tiếng Việt" },
    { id: "pinyin-zh", label: "Pinyin" },
    { id: "both", label: "Cả 2" },
  ].map((option) => `
  <button class="${subtitleMode === option.id ? "active" : ""}" type="button" data-listening-subtitle-mode="${option.id}" aria-pressed="${subtitleMode === option.id ? "true" : "false"}">
    ${escapeHtml(option.label)}
  </button>
`).join("");
}

function renderListeningSentenceListHTML(episode = getListeningEpisode(), currentIndex = state.listeningSentenceIndex, mode = state.listeningSubtitleMode, options = {}) {
  const { subtitleMode, showPinyinChinese, showVietnamese } = getListeningSubtitleDisplay(mode);
  const hasTitleAudio = Boolean(episode?.titleAudioSrc);
  const titlePinyin = episode?.titlePinyin || "";
  const titleActive = hasTitleAudio && Boolean(options.titleActive);
  const safeIndex = Math.max(0, Math.min(Number(currentIndex) || 0, Math.max(0, (episode?.sentences || []).length - 1)));
  const titleSentenceHTML = hasTitleAudio ? `
  <button class="listening-sentence listening-sentence--title listening-sentence--${subtitleMode} ${titleActive ? "active" : ""}" type="button" data-listening-title-sentence>
    <span aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M5 4h14v3H5z"/><path d="M7 9h10v2H7z"/><path d="M7 13h7v2H7z"/><path d="M7 17h5v2H7z"/>
      </svg>
    </span>
    <p class="listening-sentence-copy listening-sentence-copy--${subtitleMode}">
      ${showPinyinChinese ? `<strong class="listening-line-zh">${escapeHtml(episode.titleZh || episode.title || "")}</strong>` : ""}
      ${showPinyinChinese && titlePinyin ? `<small class="listening-line-pinyin">${escapeHtml(titlePinyin)}</small>` : ""}
      ${showVietnamese ? `<em class="listening-line-vi ${subtitleMode === "vi" ? "listening-line-main" : ""}">${escapeHtml(episode.title || episode.titleZh || "")}</em>` : ""}
    </p>
    <i aria-hidden="true">${desktopNavIcon("listening")}</i>
  </button>
` : "";

  const sentencesHTML = (episode?.sentences || []).map((sentence, index) => `
  <button class="listening-sentence listening-sentence--${subtitleMode} ${!titleActive && index === safeIndex ? "active" : ""}" type="button" data-listening-sentence="${index}">
    <span>${escapeHtml(getListeningSentenceLabel(episode, sentence, index))}</span>
    <p class="listening-sentence-copy listening-sentence-copy--${subtitleMode}">
      ${showPinyinChinese ? `
        <strong class="listening-line-zh">${escapeHtml(sentence.chinese)}</strong>
        <small class="listening-line-pinyin">${escapeHtml(sentence.pinyin)}</small>
      ` : ""}
      ${showVietnamese ? `
        <em class="listening-line-vi ${subtitleMode === "vi" ? "listening-line-main" : ""}">${escapeHtml(sentence.vietnamese)}</em>
      ` : ""}
    </p>
    <i aria-hidden="true">${desktopNavIcon("listening")}</i>
  </button>
`).join("");

  return titleSentenceHTML + sentencesHTML;
}

function scrollListeningSentenceListToActive(list, options = {}) {
  if (!list) return;
  const selector = options.titleActive
    ? "[data-listening-title-sentence]"
    : `[data-listening-sentence="${Math.max(0, Number(options.index) || 0)}"]`;
  const activeButton = list.querySelector(selector);
  if (!activeButton) return;

  const listRect = list.getBoundingClientRect();
  const activeRect = activeButton.getBoundingClientRect();
  const activeTop = list.scrollTop + (activeRect.top - listRect.top);
  const anchorOffset = Number.isFinite(Number(options.anchorOffset)) ? Number(options.anchorOffset) : null;
  const targetTop = anchorOffset === null
    ? activeTop - ((list.clientHeight - activeButton.offsetHeight) / 2)
    : activeTop - anchorOffset;
  const previousScrollBehavior = list.style.scrollBehavior;

  list.style.scrollBehavior = "auto";
  list.scrollTo({
    top: Math.max(0, targetTop),
    behavior: options.behavior || "auto",
  });
  list.scrollTop = Math.max(0, targetTop);
  list.style.scrollBehavior = previousScrollBehavior;
}

function applyListeningSubtitleMode(mode = state.listeningSubtitleMode, sourceElement = null) {
  const subtitleMode = getListeningSubtitleMode(mode);
  state.listeningSubtitleMode = subtitleMode;
  localStorage.setItem("v2-listening-subtitle-mode", subtitleMode);

  const episode = getListeningEpisode();
  const audio = $("#listeningAudio");
  const isAudioTitlePhase = audio?.dataset?.listeningAudioPhase === "title";
  const isMainAudioActive = Boolean(audio && !audio.paused && !audio.ended && !isAudioTitlePhase);
  const sourceScriptCard = sourceElement?.closest?.(".listening-script-card");
  const sourceSentenceList = sourceScriptCard?.querySelector?.(".listening-sentence-list");
  const activeSentenceButton = sourceSentenceList?.querySelector("[data-listening-sentence].active")
    || document.querySelector(".listening-sentence-list [data-listening-sentence].active");
  const activeSentenceIndex = isMainAudioActive
    ? getListeningSentenceIndexAtTime(episode, Math.min((audio.currentTime + 0.25) || 0, getListeningAudioDuration(audio, episode)))
    : Number(activeSentenceButton?.dataset.listeningSentence);
  const titleActive = isAudioTitlePhase || Boolean(
    sourceSentenceList?.querySelector("[data-listening-title-sentence].active")
      || document.querySelector(".listening-sentence-list [data-listening-title-sentence].active")
  );
  const keepSentenceActive = !titleActive && Number.isFinite(activeSentenceIndex);
  const currentIndex = keepSentenceActive ? activeSentenceIndex : state.listeningSentenceIndex;
  if (keepSentenceActive) state.listeningSentenceIndex = currentIndex;
  const sentenceListAnchors = [];
  document.querySelectorAll(".listening-sentence-list").forEach((list) => {
    const anchorSelector = titleActive
      ? "[data-listening-title-sentence].active"
      : `[data-listening-sentence="${currentIndex}"].active`;
    const anchorButton = list.querySelector(anchorSelector);
    const listRect = list.getBoundingClientRect();
    const anchorRect = anchorButton?.getBoundingClientRect?.();
    const isAnchorVisible = Boolean(anchorRect && anchorRect.bottom > listRect.top && anchorRect.top < listRect.bottom);
    sentenceListAnchors.push({
      list,
      anchorOffset: isAnchorVisible ? anchorRect.top - listRect.top : null,
    });
    list.innerHTML = renderListeningSentenceListHTML(episode, currentIndex, subtitleMode, { titleActive });
  });

  document.querySelectorAll("[data-listening-subtitle-mode]").forEach((button) => {
    const isActive = button.dataset.listeningSubtitleMode === subtitleMode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  const { translationToggleLabel } = getListeningSubtitleDisplay(subtitleMode);
  document.querySelectorAll(".listening-translation-side-btn[data-listening-translation]").forEach((button) => {
    button.textContent = translationToggleLabel;
  });
  document.querySelectorAll(".listening-translation-btn[data-listening-translation]").forEach((button) => {
    button.innerHTML = `${escapeHtml(translationToggleLabel)} <span aria-hidden="true">⌄</span>`;
  });

  const alignSubtitleListsToActive = () => {
    sentenceListAnchors.forEach(({ list, anchorOffset }) => {
      scrollListeningSentenceListToActive(list, {
        index: currentIndex,
        titleActive,
        anchorOffset,
        behavior: "auto",
      });
    });
  };

  requestAnimationFrame(() => {
    if (keepSentenceActive) setListeningActiveSentence(currentIndex, { force: true, scroll: false });
    else if (titleActive) setListeningTitleSentenceActive({ scroll: false });
    alignSubtitleListsToActive();
    requestAnimationFrame(alignSubtitleListsToActive);
    setTimeout(alignSubtitleListsToActive, 80);
  });
}

function renderListeningDetail(options = {}) {
  const isVi = state.lang === "vi";
  const episode = getListeningEpisode();
  updateListeningLessonProgress(episode.id, 0, episode.duration);
  const currentIndex = Math.min(state.listeningSentenceIndex, episode.sentences.length - 1);
  const saved = state.listeningSaved.has(episode.id);
  const completionPercent = Math.max(75, Math.round(((currentIndex + 1) / Math.max(1, episode.sentences.length)) * 100));
  const activeSentence = episode.sentences[currentIndex] || episode.sentences[0] || {};
  const userName = state.user?.name || state.user?.fullName || (isVi ? "bạn" : "你");
  const listeningRateOptions = [
    { rate: 0.75, labelVi: "Chậm", labelZh: "慢" },
    { rate: 1, labelVi: "Bình thường", labelZh: "正常" },
    { rate: 1.25, labelVi: "Nhanh", labelZh: "快" }
  ];
  const speedButtonsHTML = listeningRateOptions.map(({ rate, labelVi, labelZh }) => `
    <button class="${state.listeningPlaybackRate === rate ? "active" : ""}" type="button" data-listening-rate="${rate}" aria-pressed="${state.listeningPlaybackRate === rate ? "true" : "false"}">
      <span>${isVi ? labelVi : labelZh}</span>
      <small>${rate}x</small>
    </button>
  `).join("");
  const subtitleMode = state.listeningSubtitleMode || "pinyin-zh";
  const showPinyinChinese = subtitleMode === "pinyin-zh" || subtitleMode === "both";
  const showVietnamese = subtitleMode === "vi" || subtitleMode === "both";
  const translationToggleLabel = showVietnamese
    ? (isVi ? "Ẩn toàn bộ tiếng Việt" : "隐藏全部越南语")
    : (isVi ? "Xem toàn bộ bản dịch tiếng Việt" : "查看全部越南语翻译");

  const hasTitleAudio = Boolean(episode.titleAudioSrc);
  const titlePinyin = episode.titlePinyin || "";
  const titleSentenceHTML = hasTitleAudio ? `
  <button class="listening-sentence listening-sentence--title listening-sentence--${subtitleMode} active" type="button" data-listening-title-sentence>
    <span aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M5 4h14v3H5z"/><path d="M7 9h10v2H7z"/><path d="M7 13h7v2H7z"/><path d="M7 17h5v2H7z"/>
      </svg>
    </span>
    <p class="listening-sentence-copy listening-sentence-copy--${subtitleMode}">
      ${showPinyinChinese ? `<strong class="listening-line-zh">${escapeHtml(episode.titleZh || episode.title || "")}</strong>` : ""}
      ${showPinyinChinese && titlePinyin ? `<small class="listening-line-pinyin">${escapeHtml(titlePinyin)}</small>` : ""}
      ${showVietnamese ? `<em class="listening-line-vi ${subtitleMode === "vi" ? "listening-line-main" : ""}">${escapeHtml(episode.title || episode.titleZh || "")}</em>` : ""}
    </p>
    <i aria-hidden="true">${desktopNavIcon("listening")}</i>
  </button>
` : "";

  const subtitleButtonsHTML = [
    { id: "vi", label: "Tiếng Việt" },
    { id: "pinyin-zh", label: "Pinyin" },
    { id: "both", label: "Cả 2" }
  ].map((option) => `
  <button class="${subtitleMode === option.id ? "active" : ""}" type="button" data-listening-subtitle-mode="${option.id}">
    ${option.label}
  </button>
`).join("");

  const sentencesHTML = titleSentenceHTML + episode.sentences.map((sentence, index) => `
  <button class="listening-sentence listening-sentence--${subtitleMode} ${!hasTitleAudio && index === currentIndex ? "active" : ""}" type="button" data-listening-sentence="${index}">
    <span>${escapeHtml(getListeningSentenceLabel(episode, sentence, index))}</span>
    <p class="listening-sentence-copy listening-sentence-copy--${subtitleMode}">
      ${showPinyinChinese ? `
        <strong class="listening-line-zh">${escapeHtml(sentence.chinese)}</strong>
        <small class="listening-line-pinyin">${escapeHtml(sentence.pinyin)}</small>
      ` : ""}
      ${showVietnamese ? `
        <em class="listening-line-vi ${subtitleMode === "vi" ? "listening-line-main" : ""}">${escapeHtml(sentence.vietnamese)}</em>
      ` : ""}
    </p>
    <i aria-hidden="true">${desktopNavIcon("listening")}</i>
  </button>
`).join("");
  const keywordsHTML = episode.keywords.map((word, index) => {
    const keywordText = typeof word === "string" ? word : word.chinese || "";
    const keywordMeta = typeof word === "string" ? "" : [word.pinyin, word.vietnamese].filter(Boolean).join(" · ");
    return `<button type="button" data-listening-keyword="${index}" title="${escapeAttr(keywordMeta)}">${escapeHtml(keywordText)}</button>`;
  }).join("");
  const initialAudioSrc = episode.titleAudioSrc || episode.audioSrc;
  const initialAudioPhase = episode.titleAudioSrc ? "title" : "main";
  const nextSentencesHTML = episode.sentences
    .map((sentence, index) => ({ sentence, index }))
    .filter((item) => item.index !== currentIndex)
    .slice(0, 3)
    .map(({ sentence, index }) => `
      <button class="listening-next-card" type="button" data-listening-sentence="${index}">
        <span>${escapeHtml(getListeningSentenceLabel(episode, sentence, index))}</span>
        <strong>${escapeHtml(sentence.chinese)}</strong>
        <small>${escapeHtml(sentence.pinyin)}</small>
        <i><b></b>${listeningFormatTime(Math.max(0, (sentence.end || sentence.start || 0) - (sentence.start || 0)))}</i>
        <em>${isVi ? "ChÆ°a nghe" : "æœªå¬"}</em>
      </button>
    `).join("");

  const isMobileListeningLayout = Boolean(window.matchMedia?.("(max-width: 640px)")?.matches);
  const listeningDetailHTML = isMobileListeningLayout ? `
    <div class="listening-detail-spa listening-detail-mobile">
      <section class="listening-mobile-hero" aria-label="${isVi ? "Luyện nghe" : "听力练习"}">
        <button class="listening-back-btn listening-mobile-back-btn" type="button" data-listening-back aria-label="${isVi ? "Quay lại" : "返回"}">
          <svg viewBox="0 0 24 24"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
        </button>
      </section>
      <section class="listening-player-card listening-player-card--mobile">
        <audio id="listeningAudio" src="${escapeAttr(initialAudioSrc)}" preload="none" data-listening-audio-phase="${escapeAttr(initialAudioPhase)}"></audio>
        <div class="listening-mobile-cover" aria-hidden="true"></div>
        <div class="listening-player-status">
          <div>
            <strong id="listeningStatusTitle">${isVi ? "Đã tạm dừng" : "已暂停"}</strong>
            <small id="listeningStatusSub">${episode.audioSrc ? (isVi ? "Âm thanh thật đã sẵn sàng" : "真实音频已准备") : (isVi ? "Chế độ demo không cần file âm thanh" : "演示模式")}</small>
          </div>
          <span id="listeningCurrentTime">0:00</span>
          <div class="listening-waveform" aria-hidden="true"><i></i></div>
          <span>${listeningFormatTime(episode.duration)}</span>
        </div>
        <div class="listening-track listening-track--with-markers" data-listening-track>
          <i id="listeningProgress"></i>
        </div>
        <div class="listening-controls listening-controls--mobile">
          <div class="listening-speed-menu" aria-label="${isVi ? "Tốc độ nghe" : "播放速度"}">
            <button class="listening-speed-toggle" type="button" data-listening-speed-toggle aria-haspopup="true" aria-expanded="false">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14a8 8 0 1 1 16 0"/><path d="M12 14l4-4"/><path d="M12 18h.01"/></svg>
              <span data-listening-speed-label>${getListeningRateLabel()}</span>
            </button>
            <div class="listening-speed-options" role="menu">${speedButtonsHTML}</div>
          </div>
          <button class="listening-step-btn listening-step-btn--icon" type="button" data-listening-prev aria-label="${isVi ? "Câu trước" : "上一句"}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 19 4 12l7-7"/><path d="M20 19 13 12l7-7"/></svg>
          </button>
          <button class="listening-main-play" type="button" data-listening-play aria-label="${isVi ? "Phát" : "播放"}">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <button class="listening-step-btn listening-step-btn--icon" type="button" data-listening-next aria-label="${isVi ? "Câu sau" : "下一句"}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 5 7 7-7 7"/><path d="m4 5 7 7-7 7"/></svg>
          </button>
          <button class="listening-replay-link" type="button" data-listening-replay>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 3-6"/><path d="M4 4v6h6"/></svg>
            ${isVi ? "Nghe lại câu này" : "重听本句"}
          </button>
        </div>
      </section>

      <section class="listening-script-card listening-script-card--mobile">
        <div class="listening-mobile-section-title">
          <span aria-hidden="true"></span>
          <h5 class="listening-script-title">${isVi ? "Nội dung nghe" : "听力内容"}</h5>
        </div>
        <div class="listening-script-head">
          <div class="listening-subtitle-actions">
            ${subtitleButtonsHTML}
          </div>
        </div>
        <div class="listening-sentence-list">${sentencesHTML}</div>
      </section>

      <section class="listening-quick-links-card listening-mobile-card">
        <h2>${isVi ? "Luyện tập nhanh" : "快速练习"}</h2>
        <div class="listening-script-quick-actions" aria-label="${isVi ? "Lối tắt luyện tập" : "练习快捷入口"}">
          <button type="button" data-listening-jump="vocab">
            ${desktopNavIcon("vocab")}
            <span>${isVi ? "Từ vựng" : "词汇"}</span>
          </button>
          <button type="button" data-listening-jump="repeat">
            ${desktopNavIcon("listening")}
            <span>${isVi ? "Nói theo" : "跟读"}</span>
          </button>
        </div>
      </section>
      <section class="listening-vocab-practice-panel hidden" id="listeningVocabPracticePanel" aria-live="polite"></section>
    </div>
  ` : `
    <div class="listening-detail-spa">
      <header class="listening-detail-topbar">
        <button class="listening-back-btn" type="button" data-listening-back>
          <svg viewBox="0 0 24 24"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
        </button>
        <h1>${isVi ? "Nghe mỗi ngày" : "每日听力"}</h1>
        <div class="listening-detail-top-actions">
          <div class="listening-language-switch" aria-label="${isVi ? "Ngôn ngữ" : "语言"}">
            <span class="active">VI</span>
            <span>中文</span>
          </div>
          <button class="listening-save-link ${saved ? "saved" : ""}" type="button" data-listening-save>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v16l-6-4-6 4z"/></svg>
            ${saved ? (isVi ? "Đã lưu" : "已收藏") : (isVi ? "Lưu" : "收藏")}
          </button>
          <button class="listening-profile-btn" type="button" data-home-nav="account">
            <img src="assets/default-guest-avatar.png" alt="" />
            <span>${isVi ? `Chào ${escapeHtml(userName)}` : `你好 ${escapeHtml(userName)}`}</span>
          </button>
        </div>
      </header>
      <section class="listening-detail-hero listening-detail-hero--image" aria-hidden="true"></section>

      <section class="listening-player-card">
        <audio id="listeningAudio" src="${escapeAttr(initialAudioSrc)}" preload="none" data-listening-audio-phase="${escapeAttr(initialAudioPhase)}"></audio>
        <div class="listening-player-status">
          <div>
            <strong id="listeningStatusTitle">${isVi ? "Đã tạm dừng" : "已暂停"}</strong>
            <small id="listeningStatusSub">${episode.audioSrc ? (isVi ? "Âm thanh thật đã sẵn sàng" : "真实音频已准备") : (isVi ? "Chế độ demo không cần file âm thanh" : "演示模式")}</small>
          </div>
          <span id="listeningCurrentTime">0:00</span>
          <div class="listening-waveform" aria-hidden="true"><i></i></div>
          <span>${listeningFormatTime(episode.duration)}</span>
        </div>
        <div class="listening-time-row"><span>0:00</span><span>${listeningFormatTime(episode.duration)}</span></div>
        <div class="listening-track listening-track--with-markers" data-listening-track>
  <span class="listening-track-marker listening-track-marker--start" aria-hidden="true">▶</span>
  <i id="listeningProgress"></i>
  <span class="listening-track-marker listening-track-marker--end" aria-hidden="true">◆</span>
</div>
        <div class="listening-controls">
          <div class="listening-speed-menu" aria-label="${isVi ? "Tốc độ nghe" : "播放速度"}">
            <button class="listening-speed-toggle" type="button" data-listening-speed-toggle aria-haspopup="true" aria-expanded="false">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14a8 8 0 1 1 16 0"/><path d="M12 14l4-4"/><path d="M12 18h.01"/></svg>
              <span data-listening-speed-label>${getListeningRateLabel()}</span>
            </button>
            <div class="listening-speed-options" role="menu">${speedButtonsHTML}</div>
          </div>
          <button class="listening-step-btn" type="button" data-listening-prev aria-label="${isVi ? "Câu trước" : "上一句"}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 19 4 12l7-7"/><path d="M20 19 13 12l7-7"/></svg>
            <span>${isVi ? "Câu trước" : "上一句"}</span>
          </button>
          <button class="listening-main-play" type="button" data-listening-play aria-label="${isVi ? "Phát" : "播放"}">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <button class="listening-step-btn" type="button" data-listening-next aria-label="${isVi ? "Câu sau" : "下一句"}">
            <span>${isVi ? "Câu sau" : "下一句"}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 5 7 7-7 7"/><path d="m4 5 7 7-7 7"/></svg>
          </button>
          <button class="listening-replay-link" type="button" data-listening-replay>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 3-6"/><path d="M4 4v6h6"/></svg>
            ${isVi ? "Nghe lại câu này" : "重听本句"}
          </button>
        </div>
      </section>

      <div class="listening-detail-practice-grid">
        <section class="listening-script-card">
          <h2 class="listening-script-title">${isVi ? "Nội dung nghe" : "听力内容"}</h2>
<div class="listening-script-head">
  <div class="listening-subtitle-actions">
    ${subtitleButtonsHTML}
  </div>
</div>
<div class="listening-sentence-list">${sentencesHTML}</div>
          <button class="listening-translation-btn" type="button" data-listening-translation>${translationToggleLabel} <span aria-hidden="true">⌄</span></button>
        </section>
        <section class="listening-repeat-card">
          <div class="listening-keyword-block">
            <h2>${isVi ? "Từ trọng điểm" : "重点词"}</h2>
            <div>${keywordsHTML}</div>
            <article class="listening-keyword-detail hidden" id="listeningKeywordDetail" aria-live="polite"></article>
          </div>
          <div class="listening-translation-panel">
            <h2>${isVi ? "Xem bản dịch" : "查看翻译"}</h2>
            <p>${isVi ? "Xem toàn bộ bản dịch tiếng Việt của bài nghe." : "查看本课完整越南语翻译。"}</p>
            <button class="listening-translation-side-btn" type="button" data-listening-translation>${translationToggleLabel}</button>
          </div>
          <div class="listening-quick-links-card">
            <h2>${isVi ? "Luyện tập nhanh" : "快速练习"}</h2>
            <div class="listening-script-quick-actions" aria-label="${isVi ? "Lối tắt luyện tập" : "练习快捷入口"}">
              <button type="button" data-listening-jump="vocab">
                ${desktopNavIcon("vocab")}
                <span>${isVi ? "Từ vựng" : "词汇"}</span>
              </button>
              <button type="button" data-listening-jump="repeat">
                ${desktopNavIcon("listening")}
                <span>${isVi ? "Nói theo" : "跟读"}</span>
              </button>
            </div>
          </div>
          <section class="listening-vocab-practice-panel hidden" id="listeningVocabPracticePanel" aria-live="polite"></section>
        </section>
      </div>
      </div>

  `;

  setScreenWithDesktopShell("listening", listeningDetailHTML, "app-desktop-shell--listening", "listening", {
    preserveScroll: Boolean(options.preserveScroll),
    mobileTitle: isVi ? (episode.title || "Bài nghe") : (episode.titleZh || episode.title || "听力"),
    hideMobileHeader: true,
  });

  requestAnimationFrame(() => {
    bindListeningAudioEvents();
    syncListeningAudioUi();
    if (initialAudioPhase === "title") setListeningTitleSentenceActive({ scroll: true });
    else setListeningActiveSentence(currentIndex, { force: true, scroll: true });
  });
}

function setListeningTitleSentenceActive(options = {}) {
  const titleButton = document.querySelector("[data-listening-title-sentence]");
  if (!titleButton) return;

  document.querySelectorAll("[data-listening-sentence]").forEach((button) => {
    button.classList.remove("active");
  });
  titleButton.classList.add("active");

  if (!options.scroll) return;
  const list = titleButton.closest(".listening-sentence-list");
  if (!list) return;
  list.scrollTo({ top: 0, behavior: "smooth" });
}

function isListeningTitleAudioPhase() {
  return $("#listeningAudio")?.dataset?.listeningAudioPhase === "title";
}

function setListeningActiveSentence(index, options = {}) {
  const episode = getListeningEpisode();
  const nextIndex = Math.max(0, Math.min(index, episode.sentences.length - 1));

  if (state.listeningSentenceIndex === nextIndex && !options.force && !options.scroll) return;

  state.listeningSentenceIndex = nextIndex;

  document.querySelector("[data-listening-title-sentence]")?.classList.remove("active");
  document.querySelectorAll("[data-listening-sentence]").forEach((button) => {
    const isActive = Number(button.dataset.listeningSentence || 0) === nextIndex;
    button.classList.toggle("active", isActive);
  });

  if (options.scroll === false) return;

  const activeButton = document.querySelector(
    `.listening-sentence-list [data-listening-sentence="${nextIndex}"]`
  );
  const list = activeButton?.closest(".listening-sentence-list");

  if (list && activeButton) {
    const listRect = list.getBoundingClientRect();
    const activeRect = activeButton.getBoundingClientRect();
    const targetTop = list.scrollTop
      + (activeRect.top - listRect.top)
      - ((list.clientHeight - activeButton.offsetHeight) / 2);

    list.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth"
    });
  }
}

function renderListeningPreservingActiveSentence(options = {}) {
  const activeIndex = state.listeningSentenceIndex;
  const keepTitleActive = isListeningTitleAudioPhase();
  renderListening({ preserveScroll: true });
  requestAnimationFrame(() => {
    state.listeningSentenceIndex = activeIndex;
    if (keepTitleActive) setListeningTitleSentenceActive({ scroll: Boolean(options.scroll) });
    else setListeningActiveSentence(activeIndex, {
      force: true,
      scroll: Boolean(options.scroll),
    });
  });
}

let listeningMediaRecorder = null;
let listeningRecordingStream = null;
let listeningRecordingChunks = [];
let listeningRecordingUrl = "";
let listeningRecordingBlob = null;
let listeningRecordingAudio = null;
let listeningRepeatRecognition = null;
let listeningRepeatTranscript = "";
let listeningRepeatInterim = "";
let listeningRepeatScoringDone = false;
let listeningRepeatScoreTimer = null;
let listeningRepeatRecognitionAvailable = false;
let listeningRepeatLatestScore = null;
let listeningRepeatAttemptToken = 0;
let listeningRepeatOriginalMarks = null;
let listeningPlaybackRequested = false;
let listeningPlaybackToken = 0;
let listeningRepeatSpeechToken = 0;
let listeningRepeatSpeechState = "idle";
let listeningRepeatAudioStopTimer = null;
let listeningRepeatStopTonePlayed = false;
let listeningRealtimeWs = null;
let listeningRealtimeAudioContext = null;
let listeningRealtimeSource = null;
let listeningRealtimeProcessor = null;
let listeningRealtimeChunkQueue = [];
let listeningRealtimeScoringActive = false;
let listeningRealtimeCommitTimer = null;
let listeningRepeatSilenceAudioContext = null;
let listeningRepeatSilenceSource = null;
let listeningRepeatSilenceFrame = 0;
const LISTENING_REPEAT_END_PADDING_SECONDS = 0;
const LISTENING_REALTIME_FINAL_WAIT_MS = 900;
const LISTENING_REPEAT_SILENCE_AUTO_STOP_MS = 3000;
const LISTENING_REPEAT_SILENCE_RMS_THRESHOLD = 0.012;
const LISTENING_REPEAT_SILENCE_PEAK_THRESHOLD = 0.045;
const listeningSpecializedPronunciationEnabled = true;

function getListeningRepeatDisplayScore(score = listeningRepeatLatestScore) {
  if (score === null || score === undefined || score === "") return null;
  const numericScore = Number(score);
  return Number.isFinite(numericScore)
    ? Math.max(0, Math.min(100, Math.round(numericScore)))
    : null;
}

function setListeningRepeatInput(value) {
  const input = $("#listeningRepeatInput");
  if (input) input.value = value;
}

function setListeningRepeatScorePreview(score = null) {
  const finalScore = getListeningRepeatDisplayScore(score);
  listeningRepeatLatestScore = finalScore;

  const scoreClass = finalScore !== null && finalScore >= 80 ? "score-tier-good" : "score-tier-bad";
  document.querySelectorAll("[data-listening-recording-score]").forEach((node) => {
    node.textContent = finalScore === null ? "" : String(finalScore);
  });
  document.querySelectorAll("[data-listening-recording-play]").forEach((button) => {
    button.classList.remove("score-tier-good", "score-tier-bad", "score-empty");
    button.classList.add(finalScore === null ? "score-empty" : scoreClass);
  });

  const preview = $(".listening-repeat-score-preview");
  if (!preview) return;

  const strong = preview.querySelector("strong");
  const label = preview.querySelector("span");
  preview.classList.remove("score-tier-bad", "score-tier-good", "score-empty");

  if (finalScore === null) {
    preview.classList.add("score-empty");
    preview.style.setProperty("--lr-score-percent", "0");
    preview.style.setProperty("--lr-ring-color", "#cbd5e1");
    if (strong) strong.textContent = "--";
    if (label) label.textContent = "";
    return;
  }

  const isGood = finalScore >= 80;
  preview.classList.add(isGood ? "score-tier-good" : "score-tier-bad");
  preview.style.setProperty("--lr-score-percent", String(finalScore));
  preview.style.setProperty("--lr-ring-color", isGood ? "#10b981" : "#ef4444");

  if (strong) strong.textContent = String(finalScore);
  if (label) label.textContent = "";
}

function buildListeningRepeatOriginalHTML(text = "") {
  const marks = listeningRepeatOriginalMarks instanceof Set ? listeningRepeatOriginalMarks : null;
  let normalizedIndex = 0;

  return Array.from(String(text || "")).map((char) => {
    if (!normalizeHanzi(char)) return escapeHtml(char);

    const markClass = marks
      ? (marks.has(normalizedIndex) ? " is-correct" : " is-wrong")
      : "";
    normalizedIndex += 1;
    return `<span class="listening-repeat-original-char${markClass}">${escapeHtml(char)}</span>`;
  }).join("");
}

function setListeningRepeatOriginalMarks(referenceText = "", correctIndexes = new Set()) {
  listeningRepeatOriginalMarks = correctIndexes == null
    ? null
    : correctIndexes instanceof Set
      ? correctIndexes
      : new Set(Array.isArray(correctIndexes) ? correctIndexes : []);

  const fallbackText = getListeningEpisode().sentences[state.listeningSentenceIndex]?.chinese || "";
  const text = referenceText || fallbackText;
  document.querySelectorAll("[data-listening-repeat-original]").forEach((node) => {
    node.innerHTML = buildListeningRepeatOriginalHTML(text);
  });
}

function setListeningRepeatListenUi(status = listeningRepeatSpeechState) {
  const isPlaying = status === "playing";
  const isPaused = status === "paused";
  const button = $(".listening-repeat-play-large");
  const label = $("[data-listening-repeat-listen-label]");
  if (button) {
    button.classList.toggle("is-playing", isPlaying);
    button.classList.toggle("is-paused", isPaused);
    button.setAttribute("aria-pressed", isPlaying ? "true" : "false");
    button.setAttribute("aria-label", isPlaying
      ? (state.lang === "vi" ? "Tạm dừng" : "Pause")
      : (state.lang === "vi" ? "Phát" : "Play"));
    button.innerHTML = isPlaying
      ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5h3v14H8z"/><path d="M13 5h3v14h-3z"/></svg>`
      : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`;
  }
  if (label) {
    label.textContent = isPlaying
      ? (state.lang === "vi" ? "Tạm dừng" : "Pause")
      : isPaused
        ? (state.lang === "vi" ? "Tiếp tục" : "Resume")
        : (state.lang === "vi" ? "Nghe lại" : "Replay");
  }
}

function stopListeningRepeatListenPlayback() {
  listeningRepeatSpeechToken += 1;
  listeningRepeatSpeechState = "idle";
  if (listeningRepeatAudioStopTimer) {
    window.clearTimeout(listeningRepeatAudioStopTimer);
    listeningRepeatAudioStopTimer = null;
  }
  const audio = $("#listeningRepeatAudio");
  if (audio) {
    audio.pause();
    audio.ontimeupdate = null;
    audio.onended = null;
    audio.onerror = null;
  }
  window.speechSynthesis?.cancel();
  setListeningRepeatListenUi("idle");
}

function updateListeningRecordingPlaybackUi(enabled = Boolean(listeningRecordingUrl)) {
  document.querySelectorAll("[data-listening-recording-play]").forEach((button) => {
    button.disabled = !enabled;
    button.classList.toggle("has-recording", enabled);
    button.classList.remove("score-tier-good", "score-tier-bad", "score-empty");
    if (enabled) {
      const scoreValue = getListeningRepeatDisplayScore();
      button.classList.add(scoreValue !== null ? (scoreValue >= 80 ? "score-tier-good" : "score-tier-bad") : "score-empty");
    }
    const label = button.querySelector("[data-listening-recording-label]");
    const score = button.querySelector("[data-listening-recording-score]");
    const scoreUnit = button.querySelector("[data-listening-recording-score-unit]");
    if (label) {
      label.textContent = enabled
        ? (state.lang === "vi" ? "Nghe lại ghi âm của bạn" : "重听你的录音")
        : (state.lang === "vi" ? "Chưa có ghi âm" : "还没有录音");
    }
    if (score) {
      const scoreValue = getListeningRepeatDisplayScore();
      score.textContent = scoreValue === null ? "" : String(scoreValue);
    }
    if (scoreUnit) scoreUnit.textContent = state.lang === "vi" ? "điểm" : "分";
  });
}

function resetListeningRecordingPlaybackScoreUi() {
  setListeningRepeatScorePreview(null);
  document.querySelectorAll("[data-listening-recording-play]").forEach((button) => {
    button.classList.remove("score-tier-good", "score-tier-bad");
    button.classList.add("score-empty");
    if (listeningRecordingUrl) {
      button.disabled = false;
      button.classList.add("has-recording");
    }
    const score = button.querySelector("[data-listening-recording-score]");
    if (score) score.textContent = "";
  });
}

function clearListeningRecordingPlayback() {
  if (listeningRecordingAudio) {
    listeningRecordingAudio.pause();
    listeningRecordingAudio = null;
  }
  if (listeningRecordingUrl) URL.revokeObjectURL(listeningRecordingUrl);
  listeningRecordingUrl = "";
  listeningRecordingBlob = null;
  listeningRecordingChunks = [];
  listeningRepeatLatestScore = null;
  updateListeningRecordingPlaybackUi(false);
}

function playListeningRepeatRecording() {
  if (!listeningRecordingUrl) {
    showToast(state.lang === "vi" ? "Chưa có ghi âm để nghe lại." : "还没有录音可以重听。");
    return;
  }
  if (listeningRecordingAudio) {
    listeningRecordingAudio.pause();
    listeningRecordingAudio = null;
  }
  listeningRecordingAudio = new Audio(listeningRecordingUrl);
  document.querySelectorAll("[data-listening-recording-play]").forEach((button) => button.classList.add("is-playing"));
  listeningRecordingAudio.addEventListener("ended", () => {
    document.querySelectorAll("[data-listening-recording-play]").forEach((button) => button.classList.remove("is-playing"));
  }, { once: true });
  listeningRecordingAudio.play().catch(() => {
    document.querySelectorAll("[data-listening-recording-play]").forEach((button) => button.classList.remove("is-playing"));
    showToast(state.lang === "vi" ? "Không thể phát lại ghi âm này." : "无法播放这段录音。");
  });
}

function getListeningRecordingOptions() {
  if (!window.MediaRecorder?.isTypeSupported) return {};
  const candidates = [
    "audio/ogg;codecs=opus",
    "audio/webm;codecs=opus",
    "audio/webm",
  ];
  const mimeType = candidates.find((candidate) => MediaRecorder.isTypeSupported(candidate));
  return mimeType ? { mimeType } : {};
}

function stopListeningRepeatSilenceMonitor() {
  if (listeningRepeatSilenceFrame) {
    window.cancelAnimationFrame(listeningRepeatSilenceFrame);
    listeningRepeatSilenceFrame = 0;
  }
  if (listeningRepeatSilenceSource) {
    try { listeningRepeatSilenceSource.disconnect(); } catch { }
    listeningRepeatSilenceSource = null;
  }
  if (listeningRepeatSilenceAudioContext) {
    listeningRepeatSilenceAudioContext.close?.().catch(() => { });
    listeningRepeatSilenceAudioContext = null;
  }
}

function stopListeningRepeatRecordingForSilence() {
  if (listeningMediaRecorder?.state !== "recording") return;
  if (!listeningRealtimeScoringActive) stopListeningRepeatRecognition();
  listeningRepeatStopTonePlayed = true;
  playTone("record-stop");
  listeningMediaRecorder.stop();
}

function startListeningRepeatSilenceMonitor(stream) {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor || !stream) return false;

  stopListeningRepeatSilenceMonitor();
  try {
    const context = new AudioContextCtor();
    const analyser = context.createAnalyser();
    analyser.fftSize = 2048;
    listeningRepeatSilenceSource = context.createMediaStreamSource(stream);
    listeningRepeatSilenceSource.connect(analyser);
    listeningRepeatSilenceAudioContext = context;

    const samples = new Uint8Array(analyser.fftSize);
    let silentSince = performance.now();

    const sample = () => {
      if (listeningMediaRecorder?.state !== "recording") {
        stopListeningRepeatSilenceMonitor();
        return;
      }

      analyser.getByteTimeDomainData(samples);
      let sumSquares = 0;
      let peak = 0;
      for (let index = 0; index < samples.length; index += 1) {
        const value = Math.abs((samples[index] - 128) / 128);
        sumSquares += value * value;
        if (value > peak) peak = value;
      }

      const rms = Math.sqrt(sumSquares / samples.length);
      if (rms >= LISTENING_REPEAT_SILENCE_RMS_THRESHOLD || peak >= LISTENING_REPEAT_SILENCE_PEAK_THRESHOLD) {
        silentSince = performance.now();
      } else if (performance.now() - silentSince >= LISTENING_REPEAT_SILENCE_AUTO_STOP_MS) {
        stopListeningRepeatRecordingForSilence();
        stopListeningRepeatSilenceMonitor();
        return;
      }

      listeningRepeatSilenceFrame = window.requestAnimationFrame(sample);
    };

    listeningRepeatSilenceFrame = window.requestAnimationFrame(sample);
    return true;
  } catch (error) {
    console.warn("Could not monitor recording silence.", error);
    stopListeningRepeatSilenceMonitor();
    return false;
  }
}

function getListeningRepeatText() {
  return `${listeningRepeatTranscript} ${listeningRepeatInterim}`.trim();
}

function getConfiguredBackendUrl() {
  return String(
    window.HUAMEI_BACKEND_URL
    || localStorage.getItem(HUAMEI_BACKEND_URL_STORAGE_KEY)
    || ""
  ).trim();
}

function normalizeListeningRealtimeWsUrl(value) {
  let raw = String(value || "").trim();
  if (!raw) return "";
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(raw) && !raw.startsWith("/")) {
    raw = raw.includes("localhost") || raw.includes("127.0.0.1")
      ? `http://${raw}`
      : `https://${raw}`;
  }
  try {
    const url = new URL(raw, window.location.origin);
    if (url.protocol === "http:") url.protocol = "ws:";
    if (url.protocol === "https:") url.protocol = "wss:";
    if (!["ws:", "wss:"].includes(url.protocol)) return "";
    if (url.pathname === "/" || !url.pathname) url.pathname = LISTENING_REALTIME_WS_PATH;
    return url.toString();
  } catch {
    return "";
  }
}

function getListeningRealtimeWsUrl() {
  const configuredWs = normalizeListeningRealtimeWsUrl(
    window.HUAMEI_REALTIME_WS_URL
    || localStorage.getItem(LISTENING_REALTIME_WS_STORAGE_KEY)
  );
  if (configuredWs) return configuredWs;

  const configuredBackend = normalizeListeningRealtimeWsUrl(getConfiguredBackendUrl());
  if (configuredBackend) return configuredBackend;

  const isLocalStaticDev = ["localhost", "127.0.0.1"].includes(window.location.hostname)
    && window.location.port === "3000";
  if (isLocalStaticDev) return `ws://${window.location.hostname}:4173${LISTENING_REALTIME_WS_PATH}`;

  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  return `${protocol}//${window.location.host}${LISTENING_REALTIME_WS_PATH}`;
}

function int16PcmToBase64(samples) {
  const bytes = new Uint8Array(samples.buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

function downsampleToPcm16(input, sourceRate, targetRate = 24000) {
  if (!input?.length) return new Int16Array(0);
  const ratio = sourceRate / targetRate;
  const length = Math.max(1, Math.floor(input.length / ratio));
  const output = new Int16Array(length);
  for (let index = 0; index < length; index += 1) {
    const start = Math.floor(index * ratio);
    const end = Math.min(input.length, Math.floor((index + 1) * ratio));
    let sum = 0;
    let count = 0;
    for (let cursor = start; cursor < end; cursor += 1) {
      sum += input[cursor];
      count += 1;
    }
    const sample = Math.max(-1, Math.min(1, count ? sum / count : input[start] || 0));
    output[index] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
  }
  return output;
}

function sendListeningRealtimeMessage(payload) {
  if (!listeningRealtimeWs || listeningRealtimeWs.readyState !== WebSocket.OPEN) return false;
  listeningRealtimeWs.send(JSON.stringify(payload));
  return true;
}

function stopListeningRealtimeScoring(options = {}) {
  if (listeningRealtimeCommitTimer) {
    window.clearTimeout(listeningRealtimeCommitTimer);
    listeningRealtimeCommitTimer = null;
  }
  if (listeningRealtimeProcessor) {
    listeningRealtimeProcessor.onaudioprocess = null;
    try { listeningRealtimeProcessor.disconnect(); } catch { }
    listeningRealtimeProcessor = null;
  }
  if (listeningRealtimeSource) {
    try { listeningRealtimeSource.disconnect(); } catch { }
    listeningRealtimeSource = null;
  }
  if (listeningRealtimeAudioContext) {
    listeningRealtimeAudioContext.close?.().catch(() => { });
    listeningRealtimeAudioContext = null;
  }
  if (options.commit) sendListeningRealtimeMessage({ type: "commit" });
  else sendListeningRealtimeMessage({ type: "stop" });
  if (!options.commit && listeningRealtimeWs) {
    try { listeningRealtimeWs.close(); } catch { }
    listeningRealtimeWs = null;
  }
  listeningRealtimeChunkQueue = [];
  listeningRealtimeScoringActive = false;
}

function startListeningRealtimeScoring(stream) {
  if (!window.WebSocket || !window.AudioContext && !window.webkitAudioContext) return false;

  stopListeningRealtimeScoring({ commit: false });
  const realtimeAttemptToken = listeningRepeatAttemptToken;
  const episode = getListeningEpisode();
  const sentence = episode.sentences[state.listeningSentenceIndex] || episode.sentences[0] || {};
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;

  try {
    listeningRealtimeWs = new WebSocket(getListeningRealtimeWsUrl());
    listeningRealtimeAudioContext = new AudioContextCtor();
    listeningRealtimeSource = listeningRealtimeAudioContext.createMediaStreamSource(stream);
    listeningRealtimeProcessor = listeningRealtimeAudioContext.createScriptProcessor(4096, 1, 1);

    listeningRealtimeProcessor.onaudioprocess = (event) => {
      if (!listeningRealtimeScoringActive || realtimeAttemptToken !== listeningRepeatAttemptToken) return;
      const input = event.inputBuffer.getChannelData(0);
      const pcm = downsampleToPcm16(input, listeningRealtimeAudioContext.sampleRate, 24000);
      if (!pcm.length) return;
      const payload = { type: "audio", audio: int16PcmToBase64(pcm) };
      if (!sendListeningRealtimeMessage(payload) && listeningRealtimeChunkQueue.length < 24) {
        listeningRealtimeChunkQueue.push(payload);
      }
    };

    listeningRealtimeSource.connect(listeningRealtimeProcessor);
    listeningRealtimeProcessor.connect(listeningRealtimeAudioContext.destination);

    listeningRealtimeWs.addEventListener("open", () => {
      listeningRealtimeScoringActive = true;
      sendListeningRealtimeMessage({
        type: "start",
        referenceText: sentence.chinese || "",
        pinyin: sentence.pinyin || "",
      });
      while (listeningRealtimeChunkQueue.length) sendListeningRealtimeMessage(listeningRealtimeChunkQueue.shift());
    });

    listeningRealtimeWs.addEventListener("message", (event) => {
      if (realtimeAttemptToken !== listeningRepeatAttemptToken) return;
      let payload = null;
      try { payload = JSON.parse(event.data); } catch { return; }
      if (payload.type === "partial") {
        listeningRepeatTranscript = payload.recognizedText || "";
        listeningRepeatInterim = "";
        setListeningRepeatInput(listeningRepeatTranscript);
        renderListeningPronunciationPreview(listeningRepeatTranscript);
      }
      if (payload.type === "committed" && payload.recognizedText) {
        listeningRepeatTranscript = payload.recognizedText || listeningRepeatTranscript;
        listeningRepeatInterim = "";
        renderSpecializedPronunciationScore(payload);
      }
      if (payload.type === "final") {
        listeningRepeatTranscript = payload.recognizedText || listeningRepeatTranscript;
        listeningRepeatInterim = "";
        renderSpecializedPronunciationScore(payload);
        if (listeningRealtimeWs) {
          try { listeningRealtimeWs.close(); } catch { }
          listeningRealtimeWs = null;
        }
      }
      if (payload.type === "error") {
        console.warn("Realtime pronunciation scoring failed:", payload.error);
        listeningRealtimeScoringActive = false;
      }
    });

    listeningRealtimeWs.addEventListener("close", () => {
      listeningRealtimeScoringActive = false;
    });
    listeningRealtimeWs.addEventListener("error", () => {
      listeningRealtimeScoringActive = false;
    });

    return true;
  } catch (error) {
    console.warn("Could not start realtime pronunciation scoring.", error);
    stopListeningRealtimeScoring({ commit: false });
    return false;
  }
}

function clearListeningPronunciationResult(message = "", options = {}) {
  if (listeningRepeatScoreTimer) {
    window.clearTimeout(listeningRepeatScoreTimer);
    listeningRepeatScoreTimer = null;
  }
  const panel = $("#listeningPronunciationResult");
  if (panel) {
    panel.classList.remove("has-score");
    panel.innerHTML = message ? `<span>${escapeHtml(message)}</span>` : "";
  }
  if (!options.preserveScore) setListeningRepeatScorePreview(null);
}

function showListeningRepeatScoringLoader() {
  if (typeof document === "undefined") return;
  let overlay = document.getElementById("listeningRepeatScoringOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "listeningRepeatScoringOverlay";
    overlay.className = "listening-repeat-scoring-overlay";
    overlay.setAttribute("role", "status");
    overlay.setAttribute("aria-live", "polite");
    overlay.setAttribute("aria-label", state.lang === "vi" ? "Đang chấm điểm phát âm" : "Scoring pronunciation");
    overlay.innerHTML = '<div class="listening-repeat-scoring-text">Chấm điểm...</div>';
    document.body.appendChild(overlay);
  }
  window.requestAnimationFrame(() => overlay?.classList.add("is-visible"));
}

function hideListeningRepeatScoringLoader() {
  const overlay = document.getElementById("listeningRepeatScoringOverlay");
  if (!overlay) return;
  overlay.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!overlay.classList.contains("is-visible")) overlay.remove();
  }, 180);
}

function scheduleListeningRepeatScore(delay = 650, attemptToken = listeningRepeatAttemptToken) {
  if (listeningRepeatScoringDone) return;
  if (listeningRepeatScoreTimer) window.clearTimeout(listeningRepeatScoreTimer);
  listeningRepeatScoreTimer = window.setTimeout(() => {
    listeningRepeatScoreTimer = null;
    scoreListeningRepeatRecording(attemptToken);
  }, delay);
}

function scheduleListeningRealtimeFallback(delay = LISTENING_REALTIME_FINAL_WAIT_MS, attemptToken = listeningRepeatAttemptToken) {
  if (listeningRealtimeCommitTimer) window.clearTimeout(listeningRealtimeCommitTimer);
  listeningRealtimeCommitTimer = window.setTimeout(() => {
    listeningRealtimeCommitTimer = null;
    if (!listeningRepeatScoringDone && attemptToken === listeningRepeatAttemptToken) {
      renderListeningPronunciationScore(getListeningRepeatText());
    }
  }, delay);
}

function compareListeningPronunciation(targetText, spokenText) {
  const targetChars = Array.from(normalizeHanzi(targetText));
  const spokenChars = Array.from(normalizeHanzi(spokenText));
  const rows = targetChars.length + 1;
  const cols = spokenChars.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = targetChars.length - 1; i >= 0; i -= 1) {
    for (let j = spokenChars.length - 1; j >= 0; j -= 1) {
      dp[i][j] = targetChars[i] === spokenChars[j]
        ? dp[i + 1][j + 1] + 1
        : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const matched = new Set();
  let i = 0;
  let j = 0;
  while (i < targetChars.length && j < spokenChars.length) {
    if (targetChars[i] === spokenChars[j]) {
      matched.add(i);
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  const totalWords = targetChars.length;
  const correctWords = matched.size;
  const scorePerWord = totalWords ? 100 / totalWords : 0;
  const score = totalWords ? Math.round(correctWords * scorePerWord) : 0;

  return { matched, score, spokenText, targetChars, totalWords, correctWords };
  return { matched, score, spokenText, targetChars };
}

function renderListeningPronunciationPreview(spokenText = getListeningRepeatText()) {
  if (listeningRepeatScoringDone) return;

  const episode = getListeningEpisode();
  const sentence = episode.sentences[state.listeningSentenceIndex] || episode.sentences[0] || {};
  const panel = $("#listeningPronunciationResult");
  const hasSpokenText = Boolean(normalizeHanzi(spokenText));
  const result = compareListeningPronunciation(sentence.chinese || "", spokenText);
  const matched = hasSpokenText ? result.matched : new Set();

  updateRepeatAiWordRowsFromResult(sentence.chinese || "", matched);
  setListeningRepeatOriginalMarks(sentence.chinese || "", matched);
  setListeningRepeatScorePreview(hasSpokenText ? result.score : null);

  if (!panel) return;
  const scoreClass = result.score >= 85 ? "good" : result.score >= 60 ? "ok" : "low";
  const markedTarget = result.targetChars.map((char, index) => (
    `<b class="${matched.has(index) ? "correct" : "wrong"}">${escapeHtml(char)}</b>`
  )).join("");

  panel.classList.add("has-score");
  panel.innerHTML = `
    <div class="listening-pronunciation-score ${scoreClass}">
      <strong>${hasSpokenText ? result.score : 0}</strong><span></span>
    </div>
    <div class="listening-pronunciation-lines">
      <p><span>${state.lang === "vi" ? "Câu gốc" : "原句"}</span><em>${markedTarget}</em></p>
      <p><span>${state.lang === "vi" ? "Đang nghe" : "正在识别"}</span><small>${escapeHtml(spokenText || (state.lang === "vi" ? "Hãy đọc câu này..." : "请朗读这个句子..."))}</small></p>
    </div>
  `;
}

function renderListeningPronunciationScore(spokenText = getListeningRepeatText()) {
  if (listeningRepeatScoringDone) return;
  listeningRepeatScoringDone = true;

  const episode = getListeningEpisode();
  const sentence = episode.sentences[state.listeningSentenceIndex] || episode.sentences[0] || {};
  const panel = $("#listeningPronunciationResult");

  const hasSpokenText = Boolean(normalizeHanzi(spokenText));
  const result = compareListeningPronunciation(sentence.chinese || "", spokenText);
  updateRepeatAiWordRowsFromResult(sentence.chinese || "", result.matched);
  setListeningRepeatOriginalMarks(sentence.chinese || "", hasSpokenText ? result.matched : new Set());
  const scoreClass = result.score >= 85 ? "good" : result.score >= 60 ? "ok" : "low";
  const markedTarget = result.targetChars.map((char, index) => (
    `<b class="${result.matched.has(index) ? "correct" : "wrong"}">${escapeHtml(char)}</b>`
  )).join("");

  if (panel) {
    panel.classList.add("has-score");
    panel.innerHTML = `
      <div class="listening-pronunciation-score ${scoreClass}">
        <strong>${hasSpokenText ? result.score : 0}</strong><span></span>
      </div>
      <div class="listening-pronunciation-lines">
        <p><span>${state.lang === "vi" ? "Câu gốc" : "原句"}</span><em>${markedTarget}</em></p>
        <p><span>${state.lang === "vi" ? "Nghe được" : "识别结果"}</span><small>${escapeHtml(spokenText || (state.lang === "vi" ? "Chưa nhận dạng được giọng đọc." : "没有识别到朗读。"))}</small></p>
      </div>
    `;
  }

  setListeningRepeatInput(spokenText || (state.lang === "vi" ? "Chưa nhận dạng được giọng đọc. Hãy thử đọc rõ hơn hoặc kiểm tra quyền micro." : "没有识别到朗读，请再试一次。"));
  setListeningRepeatScorePreview(hasSpokenText ? result.score : 0);
}

function clearRepeatAiWordRows() {
  document.querySelectorAll(".repeat-ai-word-row").forEach((row) => {
    row.classList.remove("repeat-ai-word-row--good", "repeat-ai-word-row--bad");
  });
}

function updateRepeatAiWordRowsFromResult(targetText, correctIndexes = new Set()) {
  const rows = document.querySelectorAll(".repeat-ai-word-row");
  const targetChars = Array.from(normalizeHanzi(targetText || ""));
  let cursor = 0;

  rows.forEach((row) => {
    const wordText = row.querySelector("strong")?.textContent || "";
    const wordChars = Array.from(normalizeHanzi(wordText));
    const indexes = [];

    wordChars.forEach((char) => {
      while (cursor < targetChars.length && targetChars[cursor] !== char) cursor += 1;
      if (cursor < targetChars.length) {
        indexes.push(cursor);
        cursor += 1;
      }
    });

    const isCorrect = indexes.length > 0 && indexes.every((index) => correctIndexes.has(index));
    const label = row.querySelector("em");

    row.classList.remove("repeat-ai-word-row--good", "repeat-ai-word-row--bad");
    row.classList.add(isCorrect ? "repeat-ai-word-row--good" : "repeat-ai-word-row--bad");

    if (label) {
      label.textContent = isCorrect
        ? (state.lang === "vi" ? "Đúng" : "正确")
        : (state.lang === "vi" ? "Sai" : "错误");
    }
  });
}

function renderSpecializedPronunciationScore(result) {
  if (listeningRealtimeCommitTimer) {
    window.clearTimeout(listeningRealtimeCommitTimer);
    listeningRealtimeCommitTimer = null;
  }
  listeningRepeatScoringDone = true;
  const panel = $("#listeningPronunciationResult");
  const charResults = Array.isArray(result?.charResults) ? result.charResults : [];
  const correctWords = charResults.filter((item) => item.correct).length;
  const totalWords = charResults.length;
  const providerScore = getListeningRepeatDisplayScore(result?.score);
  const score = providerScore !== null
    ? providerScore
    : totalWords
    ? Math.round((correctWords / totalWords) * 100)
    : Math.round(Number(result?.score || 0));
  const scoreClass = score >= 85 ? "good" : score >= 60 ? "ok" : "low";

  const correctIndexes = new Set(
    charResults
      .map((item, index) => item.correct ? index : -1)
      .filter((index) => index >= 0)
  );

  const referenceText = result?.referenceText || getListeningEpisode().sentences[state.listeningSentenceIndex]?.chinese || "";
  updateRepeatAiWordRowsFromResult(referenceText, correctIndexes);
  setListeningRepeatOriginalMarks(referenceText, correctIndexes);
  const markedTarget = referenceText
    ? buildListeningRepeatOriginalHTML(referenceText)
    : charResults.map((item) => (
      `<b class="${item.correct ? "correct" : "wrong"}" title="${escapeAttr(item.errorType || "")}">${escapeHtml(item.char || "")}</b>`
    )).join("");
  const metric = (label, value) => Number.isFinite(Number(value))
    ? `<span>${label}: <strong>${Math.round(Number(value))}</strong></span>`
    : "";
  const providerLabel = String(result?.provider || "").toLowerCase() === "openai" ? "OpenAI" : "Speech AI";
  const feedbackHtml = result?.feedback
    ? `<p class="listening-pronunciation-feedback"><span>${state.lang === "vi" ? "Góp ý" : "反馈"}</span><small>${escapeHtml(result.feedback)}</small></p>`
    : "";
  const mistakes = Array.isArray(result?.mistakes) ? result.mistakes.filter(Boolean) : [];
  const mistakesHtml = mistakes.length
    ? `<ul class="listening-pronunciation-mistakes">${mistakes.map((mistake) => `<li>${escapeHtml(mistake)}</li>`).join("")}</ul>`
    : "";

  setListeningRepeatScorePreview(score);
  setListeningRepeatInput(result.recognizedText || "");

  if (panel) {
    panel.classList.add("has-score");
    panel.innerHTML = `
      <div class="listening-pronunciation-score ${scoreClass}">
        <strong>${score}</strong><span></span>
      </div>
      <div class="listening-pronunciation-lines">
        <p class="listening-pronunciation-provider"><span>${providerLabel}</span>${metric("Accuracy", result.accuracyScore)}${metric("Fluency", result.fluencyScore)}${metric("Completeness", result.completenessScore)}</p>
        <p><span>${state.lang === "vi" ? "Câu gốc" : "原句"}</span><em>${markedTarget || escapeHtml(result.referenceText || "")}</em></p>
        <p><span>${state.lang === "vi" ? "Nghe được" : "识别结果"}</span><small>${escapeHtml(result.recognizedText || "—")}</small></p>
        ${feedbackHtml}
        ${mistakesHtml}
      </div>
    `;
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const value = String(reader.result || "");
      resolve(value.includes(",") ? value.split(",").pop() : value);
    }, { once: true });
    reader.addEventListener("error", () => reject(reader.error || new Error("Không đọc được audio.")), { once: true });
    reader.readAsDataURL(blob);
  });
}

function encodePcm16Wav(samples, sampleRate) {
  const bytesPerSample = 2;
  const blockAlign = bytesPerSample;
  const buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
  const view = new DataView(buffer);
  const writeString = (offset, value) => {
    for (let index = 0; index < value.length; index += 1) {
      view.setUint8(offset + index, value.charCodeAt(index));
    }
  };
  writeString(0, "RIFF");
  view.setUint32(4, 36 + samples.length * bytesPerSample, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, samples.length * bytesPerSample, true);
  let offset = 44;
  for (const sample of samples) {
    const clamped = Math.max(-1, Math.min(1, sample));
    view.setInt16(offset, clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff, true);
    offset += bytesPerSample;
  }
  return new Blob([buffer], { type: "audio/wav" });
}

function downsampleAudioChannel(channelData, sourceRate, targetRate = 16000) {
  if (sourceRate === targetRate) return channelData;
  const ratio = sourceRate / targetRate;
  const length = Math.max(1, Math.round(channelData.length / ratio));
  const result = new Float32Array(length);
  for (let index = 0; index < length; index += 1) {
    const start = Math.floor(index * ratio);
    const end = Math.min(channelData.length, Math.floor((index + 1) * ratio));
    let sum = 0;
    let count = 0;
    for (let cursor = start; cursor < end; cursor += 1) {
      sum += channelData[cursor];
      count += 1;
    }
    result[index] = count ? sum / count : channelData[Math.min(start, channelData.length - 1)] || 0;
  }
  return result;
}

async function blobToAssessmentAudio(blob) {
  const originalMimeType = String(blob?.type || "").trim();
  const compactMimeType = originalMimeType.split(";")[0].toLowerCase();
  if (/^audio\/(webm|ogg|mp4|mpeg|wav|x-wav|m4a)$/.test(compactMimeType)) {
    return { audioBase64: await blobToBase64(blob), mimeType: originalMimeType || compactMimeType };
  }

  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) {
    return { audioBase64: await blobToBase64(blob), mimeType: blob.type || "audio/webm" };
  }
  const context = new AudioContextCtor();
  try {
    const arrayBuffer = await blob.arrayBuffer();
    const decoded = await context.decodeAudioData(arrayBuffer.slice(0));
    const channelData = decoded.getChannelData(0);
    const downsampled = downsampleAudioChannel(channelData, decoded.sampleRate, 16000);
    const wavBlob = encodePcm16Wav(downsampled, 16000);
    return { audioBase64: await blobToBase64(wavBlob), mimeType: "audio/wav" };
  } catch (error) {
    console.warn("Could not convert recording to WAV; sending original audio blob.", error);
    return { audioBase64: await blobToBase64(blob), mimeType: blob.type || "audio/webm" };
  } finally {
    if (typeof context.close === "function") {
      context.close().catch(() => { });
    }
  }
}

async function assessListeningPronunciationWithProvider(blob) {
  if (!blob) throw new Error("Thiếu audio ghi âm.");
  const episode = getListeningEpisode();
  const sentence = episode.sentences[state.listeningSentenceIndex] || episode.sentences[0] || {};
  const { audioBase64, mimeType } = await blobToAssessmentAudio(blob);
  return apiRequest("/api/listening/pronunciation-assessment", {
    method: "POST",
    body: JSON.stringify({
      referenceText: sentence.chinese || "",
      pinyin: sentence.pinyin || "",
      audioBase64,
      mimeType,
    }),
  });
}

async function scoreListeningRepeatRecording(attemptToken = listeningRepeatAttemptToken) {
  if (attemptToken !== listeningRepeatAttemptToken) return;
  if (!listeningSpecializedPronunciationEnabled || !listeningRecordingBlob) {
    clearListeningPronunciationResult(state.lang === "vi"
      ? "Chưa có dữ liệu backend để chấm điểm."
      : "暂无后端评分数据。");
    return;
  }

  clearListeningPronunciationResult(state.lang === "vi"
    ? "Đang chấm phát âm..."
    : "正在评分...");

  try {
    const result = await assessListeningPronunciationWithProvider(listeningRecordingBlob);
    if (attemptToken !== listeningRepeatAttemptToken) return;
    renderSpecializedPronunciationScore(result);
  } catch (error) {
    if (attemptToken !== listeningRepeatAttemptToken) return;
    console.warn("Backend pronunciation assessment failed.", error);

    if (!isListeningPronunciationApiUnavailableError(error)) {
      showToast(error.message || (state.lang === "vi"
        ? "Chưa chấm được bằng engine chuyên dụng."
        : "专业评分暂不可用。"));
    }

    listeningRepeatScoringDone = true;
    setListeningRepeatScorePreview(null);
    const panel = $("#listeningPronunciationResult");
    if (panel) {
      panel.classList.remove("has-score");
      panel.innerHTML = `<span>${escapeHtml(state.lang === "vi"
        ? "Chưa nhận được điểm từ backend. Vui lòng thử lại."
        : "尚未收到后端评分，请重试。")}</span>`;
    }
  } finally {
    hideListeningRepeatScoringLoader();
  }
}

function isListeningPronunciationApiUnavailableError(error) {
  const message = String(error?.message || "");
  const code = String(error?.code || "");
  const status = Number(error?.status || 0);

  return status === 404
    || status === 503
    || code === "speech_not_configured"
    || /pronunciation assessment|chưa được cấu hình|chua duoc cau hinh|không thể kết nối server|failed to fetch|load failed/i.test(message);
}

function stopListeningRepeatRecognition() {
  if (!listeningRepeatRecognition) return;
  try {
    listeningRepeatRecognition.stop();
  } catch {
    scheduleListeningRepeatScore(0);
  }
}

function startListeningRepeatRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  listeningRepeatTranscript = "";
  listeningRepeatInterim = "";
  listeningRepeatScoringDone = false;
  listeningRepeatRecognitionAvailable = Boolean(Recognition);

  if (!Recognition) {
    clearListeningPronunciationResult(state.lang === "vi"
      ? "Trình duyệt chưa hỗ trợ nhận dạng giọng nói để chấm điểm."
      : "当前浏览器不支持语音识别评分。");
    return false;
  }

  try {
    listeningRepeatRecognition = new Recognition();
    listeningRepeatRecognition.lang = "zh-CN";
    listeningRepeatRecognition.continuous = true;
    listeningRepeatRecognition.interimResults = true;
    listeningRepeatRecognition.maxAlternatives = 1;

    listeningRepeatRecognition.addEventListener("result", (event) => {
      let interim = "";
      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        const transcript = event.results[index][0]?.transcript || "";
        if (event.results[index].isFinal) listeningRepeatTranscript += transcript;
        else interim += transcript;
      }
      listeningRepeatInterim = interim;
      const heard = getListeningRepeatText();
      if (heard) {
        setListeningRepeatInput(heard);
        renderListeningPronunciationPreview(heard);
      }
    });

    listeningRepeatRecognition.addEventListener("end", () => {
      if (listeningMediaRecorder?.state !== "recording") scheduleListeningRepeatScore(250);
    });

    listeningRepeatRecognition.addEventListener("error", () => {
      listeningRepeatRecognitionAvailable = false;
      if (listeningMediaRecorder?.state !== "recording") scheduleListeningRepeatScore(250);
    });

    listeningRepeatRecognition.start();
    return true;
  } catch {
    clearListeningPronunciationResult(state.lang === "vi"
      ? "Không thể bắt đầu nhận dạng giọng nói."
      : "无法开始语音识别。");
    return false;
  }
}

function refreshListeningActiveSentenceUi() {
  const episode = getListeningEpisode();
  const sentence = episode.sentences[state.listeningSentenceIndex] || episode.sentences[0] || {};
  const completionPercent = Math.max(75, Math.round(((state.listeningSentenceIndex + 1) / Math.max(1, episode.sentences.length)) * 100));

  setListeningActiveSentence(state.listeningSentenceIndex, { scroll: true });
  const repeatChinese = $(".listening-repeat-box blockquote strong");
  const repeatPinyin = $(".listening-repeat-box blockquote small");
  const progressRing = $(".listening-lesson-ring");
  const progressText = $(".listening-lesson-ring strong");

  if (repeatChinese) repeatChinese.textContent = sentence.chinese || "";
  if (repeatPinyin) repeatPinyin.textContent = sentence.pinyin || "";
  if (progressRing) progressRing.style.setProperty("--lesson-progress", `${completionPercent}%`);
  if (progressText) progressText.innerHTML = `${completionPercent}<span>%</span>`;
  setListeningRepeatInput(sentence.chinese || "");
  clearListeningRecordingPlayback();
  clearListeningPronunciationResult(state.lang === "vi"
    ? "Bấm ghi âm, đọc lại câu, rồi bấm dừng để chấm điểm."
    : "点击录音，跟读句子，再点击停止评分。");
}

function speakListeningSentence(index = state.listeningSentenceIndex) {
  const episode = getListeningEpisode();
  const sentence = episode.sentences[Math.max(0, Math.min(index, episode.sentences.length - 1))];
  if (!sentence?.chinese) return false;

  if (!("speechSynthesis" in window)) {
    showToast(state.lang === "vi" ? "Trình duyệt chưa hỗ trợ đọc câu này." : "当前浏览器不支持朗读。");
    return false;
  }

  const playbackRate = getListeningPlaybackRate();
  browserSpeakText(sentence.chinese, { stage: "sentence", rate: playbackRate });
  setListeningPlayIcon(true);
  showToast(state.lang === "vi" ? "Đang đọc câu hiện tại." : "正在朗读当前句子。");
  window.setTimeout(() => syncListeningAudioUi(), Math.max(900, Math.min(4500, (sentence.chinese.length * 180) / playbackRate)));
  return true;
}

function getListeningRepeatSentenceAudioBounds(sentence = {}, audio = null) {
  const startTime = Math.max(0, Number(sentence.start || 0));
  const fallbackDuration = Math.max(1, String(sentence.chinese || "").length * 0.35);
  if (sentence.audioSrc) {
    const duration = Number(audio?.duration);
    const audioDuration = Number.isFinite(duration) && duration > 0 ? duration : null;
    const endTime = audioDuration === null ? fallbackDuration : audioDuration;
    return { startTime: 0, endTime, stopTime: endTime };
  }
  const configuredEnd = Number(sentence.end);
  const rawEndTime = Number.isFinite(configuredEnd) && configuredEnd > startTime
    ? configuredEnd
    : startTime + fallbackDuration;
  const duration = Number(audio?.duration);
  const audioDuration = Number.isFinite(duration) && duration > 0 ? duration : null;
  const stopTime = audioDuration === null
    ? rawEndTime + LISTENING_REPEAT_END_PADDING_SECONDS
    : Math.min(audioDuration, rawEndTime + LISTENING_REPEAT_END_PADDING_SECONDS);
  return { startTime, endTime: rawEndTime, stopTime };
}

function getListeningRepeatSentenceAudioSource(sentence = {}) {
  return String(sentence.audioSrc || "").trim();
}

function toggleListeningRepeatSentencePlayback() {
  const episode = getListeningEpisode();
  const sentence = episode.sentences[state.listeningSentenceIndex] || episode.sentences[0] || {};
  if (!sentence?.chinese) return false;

  const audio = $("#listeningRepeatAudio");
  const sentenceAudioSrc = getListeningRepeatSentenceAudioSource(sentence);
  const usesStandaloneSentenceAudio = Boolean(sentence.audioSrc);

  if (listeningRepeatSpeechState === "playing") {
    if (audio && !audio.paused) audio.pause();
    else window.speechSynthesis.pause();
    if (listeningRepeatAudioStopTimer) {
      window.clearTimeout(listeningRepeatAudioStopTimer);
      listeningRepeatAudioStopTimer = null;
    }
    listeningRepeatSpeechState = "paused";
    setListeningRepeatListenUi("paused");
    return true;
  }

  if (listeningRepeatSpeechState === "paused") {
    if (audio && (episode.audioSrc || usesStandaloneSentenceAudio)) {
      const resumeToken = listeningRepeatSpeechToken;
      if (!usesStandaloneSentenceAudio) {
        const { startTime, stopTime } = getListeningRepeatSentenceAudioBounds(sentence, audio);
        if ((audio.currentTime || 0) < startTime || (audio.currentTime || 0) >= stopTime) {
          audio.currentTime = startTime;
        }
        const remainingMs = Math.max(400, ((stopTime - (audio.currentTime || startTime)) / getListeningPlaybackRate()) * 1000);
        if (listeningRepeatAudioStopTimer) window.clearTimeout(listeningRepeatAudioStopTimer);
        listeningRepeatAudioStopTimer = window.setTimeout(() => {
          if (listeningRepeatSpeechToken !== resumeToken) return;
          audio.pause();
          audio.currentTime = startTime;
          listeningRepeatSpeechState = "idle";
          listeningRepeatAudioStopTimer = null;
          setListeningRepeatListenUi("idle");
        }, remainingMs);
      }
      audio.play().catch(() => {
        if (listeningRepeatSpeechToken !== resumeToken) return;
        listeningRepeatSpeechState = "idle";
        setListeningRepeatListenUi("idle");
      });
    } else {
      window.speechSynthesis.resume();
    }
    listeningRepeatSpeechState = "playing";
    setListeningRepeatListenUi("playing");
    return true;
  }

  const playbackRate = getListeningPlaybackRate();
  const speechToken = listeningRepeatSpeechToken + 1;
  listeningRepeatSpeechToken = speechToken;
  listeningRepeatSpeechState = "playing";
  setListeningRepeatListenUi("playing");

  if (audio && (episode.audioSrc || usesStandaloneSentenceAudio)) {
    const resetRepeatAudioUi = () => {
      if (listeningRepeatSpeechToken !== speechToken) return;
      listeningRepeatSpeechState = "idle";
      if (listeningRepeatAudioStopTimer) {
        window.clearTimeout(listeningRepeatAudioStopTimer);
        listeningRepeatAudioStopTimer = null;
      }
      setListeningRepeatListenUi("idle");
    };
    window.speechSynthesis?.cancel();
    applyListeningPlaybackRate(audio);
    if (usesStandaloneSentenceAudio) {
      audio.src = sentenceAudioSrc;
      audio.currentTime = 0;
    }
    const { startTime, stopTime } = getListeningRepeatSentenceAudioBounds(sentence, audio);
    if (!usesStandaloneSentenceAudio) audio.currentTime = startTime;
    audio.ontimeupdate = usesStandaloneSentenceAudio ? null : () => {
      if (listeningRepeatSpeechToken !== speechToken) return;
      if (audio.currentTime >= stopTime) {
        audio.pause();
        audio.currentTime = startTime;
        resetRepeatAudioUi();
      }
    };
    audio.onended = resetRepeatAudioUi;
    audio.onerror = () => {
      if (listeningRepeatSpeechToken !== speechToken) return;
      resetRepeatAudioUi();
      if (!("speechSynthesis" in window)) {
        showToast(state.lang === "vi" ? "KhÃ´ng thá»ƒ phÃ¡t audio cÃ¢u nÃ y." : "æ— æ³•æ’­æ”¾è¿™å¥éŸ³é¢‘ã€‚");
        return;
      }
      listeningRepeatSpeechState = "playing";
      setListeningRepeatListenUi("playing");
      browserSpeakText(sentence.chinese, { stage: "sentence", rate: playbackRate, onend: resetRepeatAudioUi, onerror: resetRepeatAudioUi });
    };
    if (listeningRepeatAudioStopTimer) {
      window.clearTimeout(listeningRepeatAudioStopTimer);
      listeningRepeatAudioStopTimer = null;
    }
    if (!usesStandaloneSentenceAudio) {
      listeningRepeatAudioStopTimer = window.setTimeout(() => {
        if (listeningRepeatSpeechToken !== speechToken) return;
        audio.pause();
        audio.currentTime = startTime;
        resetRepeatAudioUi();
      }, Math.max(600, ((stopTime - startTime) / playbackRate) * 1000));
    }
    audio.play().catch(() => {
      if (listeningRepeatSpeechToken !== speechToken) return;
      resetRepeatAudioUi();
      if (!("speechSynthesis" in window)) {
        showToast(state.lang === "vi" ? "KhÃ´ng thá»ƒ phÃ¡t audio cÃ¢u nÃ y." : "æ— æ³•æ’­æ”¾è¿™å¥éŸ³é¢‘ã€‚");
        return;
      }
      listeningRepeatSpeechState = "playing";
      setListeningRepeatListenUi("playing");
      browserSpeakText(sentence.chinese, {
        stage: "sentence",
        rate: playbackRate,
        onend: resetRepeatAudioUi,
        onerror: resetRepeatAudioUi,
      });
    });
    return true;
  }

  if (!("speechSynthesis" in window)) {
    showToast(state.lang === "vi" ? "TrÃ¬nh duyá»‡t chÆ°a há»— trá»£ Ä‘á»c cÃ¢u nÃ y." : "å½“å‰æµè§ˆå™¨ä¸æ”¯æŒæœ—è¯»ã€‚");
    listeningRepeatSpeechState = "idle";
    setListeningRepeatListenUi("idle");
    return false;
  }

  browserSpeakText(sentence.chinese, {
    stage: "sentence",
    rate: playbackRate,
    onend: () => {
      if (listeningRepeatSpeechToken !== speechToken) return;
      listeningRepeatSpeechState = "idle";
      setListeningRepeatListenUi("idle");
    },
    onerror: () => {
      if (listeningRepeatSpeechToken !== speechToken) return;
      listeningRepeatSpeechState = "idle";
      setListeningRepeatListenUi("idle");
    },
  });
  return true;
}

function getListeningPartOfSpeechLabel(kind = "") {
  const labels = {
    vi: {
      noun: "Danh t\u1eeb",
      verb: "\u0110\u1ed9ng t\u1eeb",
      adjective: "T\u00ednh t\u1eeb",
      adverb: "Ph\u00f3 t\u1eeb",
      pronoun: "\u0110\u1ea1i t\u1eeb",
      measure: "L\u01b0\u1ee3ng t\u1eeb",
      function: "T\u1eeb ch\u1ee9c n\u0103ng",
      phrase: "C\u1ee5m t\u1eeb",
      unclassified: "Ch\u01b0a ph\u00e2n lo\u1ea1i",
    },
    zh: {
      noun: "\u540d\u8bcd",
      verb: "\u52a8\u8bcd",
      adjective: "\u5f62\u5bb9\u8bcd",
      adverb: "\u526f\u8bcd",
      pronoun: "\u4ee3\u8bcd",
      measure: "\u91cf\u8bcd",
      function: "\u529f\u80fd\u8bcd",
      phrase: "\u77ed\u8bed",
      unclassified: "\u672a\u5206\u7c7b",
    },
  };
  return (labels[state.lang] || labels.vi)[kind] || kind;
}

function normalizeListeningPartOfSpeechLabel(value = "") {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const normalized = normalizeLatin(raw).toLowerCase();
  if (["tu trong diem", "trong diem", "key", "keyword", "\u91cd\u70b9\u8bcd", "\u91cd\u70b9\u8bcd\u6c47"].includes(normalized) || raw === "\u91cd\u70b9\u8bcd") {
    return "";
  }
  const aliases = {
    noun: ["noun", "n", "danh tu", "\u540d\u8bcd"],
    verb: ["verb", "v", "dong tu", "\u52a8\u8bcd"],
    adjective: ["adj", "adjective", "tinh tu", "\u5f62\u5bb9\u8bcd"],
    adverb: ["adv", "adverb", "pho tu", "\u526f\u8bcd"],
    pronoun: ["pron", "pronoun", "dai tu", "\u4ee3\u8bcd"],
    measure: ["measure", "classifier", "luong tu", "\u91cf\u8bcd"],
    function: ["function", "function word", "tu chuc nang", "\u529f\u80fd\u8bcd"],
    phrase: ["phrase", "cum tu", "\u77ed\u8bed"],
  };
  const found = Object.entries(aliases).find(([, values]) => values.includes(normalized) || values.includes(raw));
  return found ? getListeningPartOfSpeechLabel(found[0]) : raw;
}

function inferListeningKeywordPartOfSpeech(keyword = {}) {
  const chinese = String(keyword.chinese || "").trim();
  const exact = {
    "\u4f60\u597d": "phrase",
    "\u6709\u4eba": "phrase",
    "\u53ef\u4ee5": "verb",
    "\u8ba4\u8bc6": "verb",
    "\u542c\u61c2": "verb",
    "\u6539\u53d8": "verb",
    "\u6765\u81ea": "verb",
    "\u7d27\u5f20": "adjective",
    "\u4e0d\u77e5\u9053": "verb",
    "\u7b80\u5355": "adjective",
    "\u95ee\u9898": "noun",
    "\u540d\u5b57": "noun",
    "\u4e2d\u56fd\u4eba": "noun",
    "\u8d8a\u5357\u4eba": "noun",
    "\u5b66\u751f": "noun",
    "\u670b\u53cb": "noun",
    "\u804a\u5929": "verb",
    "\u5de5\u4f5c": "verb",
    "\u516c\u53f8": "noun",
    "\u4e3a\u4ec0\u4e48": "pronoun",
    "\u60f3\u6cd5": "noun",
    "\u4f18\u79c0": "adjective",
    "\u771f\u6b63": "adjective",
    "\u8bda\u5b9e": "adjective",
    "\u5fd9": "adjective",
    "\u52aa\u529b": "verb",
    "\u65b9\u5411": "noun",
    "\u6807\u51c6": "noun",
    "\u8ffd\u6c42": "verb",
    "\u7a33\u5b9a": "adjective",
    "\u9002\u5408": "verb",
    "\u4f18\u70b9": "noun",
    "\u5f31\u70b9": "noun",
    "\u4e0d\u8db3": "noun",
    "\u671f\u5f85": "verb",
  };
  if (exact[chinese]) return getListeningPartOfSpeechLabel(exact[chinese]);
  const vietnamese = normalizeLatin(keyword.vietnamese || "").toLowerCase();
  if (/\b(nghe|noi|lam|hoi|tra loi|muon|can|biet|hieu|quen|nhan|thay doi|bat dau|hoc|gap|den|di|mua|ban|an|uong|goi|xin|giup|mo|dong|tim|thanh toan|giai thich|ket ban)\b/.test(vietnamese)) {
    return getListeningPartOfSpeechLabel("verb");
  }
  if (/\b(don gian|xuat sac|chan thanh|thanh that|cang thang|on dinh|phu hop|thieu|du)\b/.test(vietnamese)) {
    return getListeningPartOfSpeechLabel("adjective");
  }
  if (/\b(nguoi|ten|ban|cong ty|hoc sinh|van de|ky nang|huong|uu diem|nhuoc diem|diem|tieu chuan|mong doi)\b/.test(vietnamese)) {
    return getListeningPartOfSpeechLabel("noun");
  }
  return "";
}

function getListeningKeywordPartOfSpeech(keyword = {}) {
  const explicit = normalizeListeningPartOfSpeechLabel(keyword.partOfSpeech || keyword.part_of_speech || keyword.source_pos || keyword.posVi || keyword.posZh || keyword.pos || "");
  return explicit || inferListeningKeywordPartOfSpeech(keyword) || getListeningPartOfSpeechLabel("unclassified");
}

function getListeningKeyword(index) {
  const episode = getListeningEpisode();
  const keyword = episode.keywords[Math.max(0, Math.min(index, episode.keywords.length - 1))];
  if (!keyword) return null;
  return typeof keyword === "string"
    ? { chinese: keyword, pinyin: "", vietnamese: "", examples: [] }
    : {
      chinese: keyword.chinese || "",
      pinyin: keyword.pinyin || "",
      vietnamese: keyword.vietnamese || "",
      partOfSpeech: keyword.partOfSpeech || keyword.part_of_speech || keyword.source_pos || keyword.posVi || keyword.posZh || keyword.pos || keyword.type || "",
      audioNormal: keyword.audioNormal || keyword.audioSrc || keyword.audio || "",
      audioSlow: keyword.audioSlow || keyword.audio_slow || keyword.audioNormal || keyword.audioSrc || keyword.audio || "",
      audioSrc: keyword.audioSrc || keyword.audioNormal || keyword.audio || "",
      examples: Array.isArray(keyword.examples) ? keyword.examples : [],
    };
}

function getListeningKeywordExamples(keyword = {}) {
  const word = keyword.chinese || "";
  const wordPinyin = keyword.pinyin || "";
  const wordVi = keyword.vietnamese || word;
  const customExamples = Array.isArray(keyword.examples) ? keyword.examples.filter(Boolean) : [];
  const fallbackExamples = [
    {
      chinese: `我想学习“${word}”这个词。`,
      pinyin: `Wǒ xiǎng xuéxí “${wordPinyin || word}” zhège cí.`,
      vietnamese: `Tôi muốn học từ “${wordVi}”.`,
    },
    {
      chinese: `请你再说一遍“${word}”。`,
      pinyin: `Qǐng nǐ zài shuō yí biàn “${wordPinyin || word}”.`,
      vietnamese: `Bạn hãy nói lại “${wordVi}” một lần nữa.`,
    },
    {
      chinese: `这个句子里有“${word}”。`,
      pinyin: `Zhège jùzi lǐ yǒu “${wordPinyin || word}”.`,
      vietnamese: `Trong câu này có từ “${wordVi}”.`,
    },
  ];
  return [...customExamples, ...fallbackExamples].slice(0, 3);
}

function normalizeListeningKeywordExample(example, keyword = {}) {
  if (typeof example === "object" && example) {
    const audioSrc = example.audioSrc || example.audioNormal || example.audio || "";
    return {
      chinese: example.chinese || example.zh || example.text || "",
      pinyin: example.pinyin || "",
      vietnamese: example.vietnamese || example.vi || "",
      audioSrc: typeof listeningCatalogAssetPath === "function" ? listeningCatalogAssetPath(audioSrc) : audioSrc,
      start: Number.isFinite(Number(example.start)) ? Number(example.start) : null,
      end: Number.isFinite(Number(example.end)) ? Number(example.end) : null,
    };
  }
  const chinese = String(example || "");
  return {
    chinese,
    pinyin: "",
    vietnamese: keyword.vietnamese ? `${state.lang === "vi" ? "Ví dụ với" : "例句"} ${keyword.chinese}` : "",
    audioSrc: "",
    start: null,
    end: null,
  };
}

function highlightListeningKeyword(text = "", keyword = "") {
  if (!keyword || !text.includes(keyword)) return escapeHtml(text);
  return escapeHtml(text).replaceAll(escapeHtml(keyword), `<mark>${escapeHtml(keyword)}</mark>`);
}

function buildListeningVocabPracticeHTML(index = state.listeningVocabPracticeIndex) {
  const episode = getListeningEpisode();
  const total = Math.max(1, episode.keywords.length);
  const safeIndex = ((Number(index) || 0) + total) % total;
  state.listeningVocabPracticeIndex = safeIndex;
  const keyword = getListeningKeyword(safeIndex);
  if (!keyword?.chinese) return "";

  const examples = getListeningKeywordExamples(keyword)
    .map((example) => normalizeListeningKeywordExample(example, keyword));
  const examplesHTML = examples.map((example, exampleIndex) => `
    <article class="listening-vocab-example">
      <span>${state.lang === "vi" ? "Ví dụ" : "例句"} ${exampleIndex + 1}</span>
      <p>${highlightListeningKeyword(example.chinese, keyword.chinese)}</p>
      ${example.pinyin ? `<small>${escapeHtml(example.pinyin)}</small>` : ""}
      ${example.vietnamese ? `<em>${escapeHtml(example.vietnamese)}</em>` : ""}
      <button type="button" data-listening-vocab-example-speak="${exampleIndex}" data-listening-vocab-example-audio="${escapeAttr(example.audioSrc || "")}" data-listening-vocab-example-start="${escapeAttr(example.start ?? "")}" data-listening-vocab-example-end="${escapeAttr(example.end ?? "")}" aria-label="${state.lang === "vi" ? "Nghe câu ví dụ" : "听例句"}">
        ${desktopNavIcon("listening")}
      </button>
    </article>
  `).join("");
  const progress = Math.round(((safeIndex + 1) / total) * 100);

  return `
    <div class="listening-vocab-practice-progress">
      <span>${state.lang === "vi" ? "Tiến độ" : "进步"}</span>
      <i><b style="width:${progress}%"></b></i>
      <strong>${safeIndex + 1} / ${total} ${state.lang === "vi" ? "từ" : "词"}</strong>
    </div>
    <div class="listening-vocab-practice-card">
      <div class="listening-vocab-practice-kind"><i></i>${state.lang === "vi" ? "Chữ Hán" : "汉字"}<i></i></div>

      <strong class="listening-vocab-practice-word">${escapeHtml(keyword.chinese)}</strong>
      <div class="listening-vocab-practice-meta">
        <div><span>pinyin</span><p>${escapeHtml(keyword.pinyin || "—")}</p></div>
      </div>
      <div class="listening-vocab-practice-meaning">
        <span>${state.lang === "vi" ? "Tiếng Việt" : "越南语"}</span>
        <p>${escapeHtml(keyword.vietnamese || "—")}</p>
      </div>
      <div class="listening-vocab-practice-audio">
        <button type="button" data-listening-vocab-speak="normal">${desktopNavIcon("listening")} ${state.lang === "vi" ? "Nghe bình thường" : "正常听"}</button>
        <button type="button" data-listening-vocab-speak="slow">${desktopNavIcon("listening")} ${state.lang === "vi" ? "Nghe chậm" : "慢速听"}</button>
      </div>
      <div class="listening-vocab-example-list">${examplesHTML}</div>
      <div class="listening-vocab-practice-actions">
        <button class="listening-vocab-prev-btn" type="button" data-listening-vocab-prev>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="m11 5-7 7 7 7"/></svg>
          ${state.lang === "vi" ? "Trở lại" : "Back"}
        </button>
        <button class="listening-vocab-next-btn" type="button" data-listening-vocab-next>
          Next
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `;
}

function renderListeningVocabPractice(index = state.listeningVocabPracticeIndex) {
  const panel = $("#listeningVocabPracticePanel");
  const html = buildListeningVocabPracticeHTML(index);
  if (!panel || !html) return;
  panel.classList.remove("hidden");
  panel.dataset.keywordIndex = String(state.listeningVocabPracticeIndex);
  panel.innerHTML = html;
}

function renderListeningVocabLesson(options = {}) {
  const isVi = state.lang === "vi";
  setScreenWithDesktopShell("listening", `
    <div class="listening-vocab-lesson-screen">
      <button class="listening-vocab-back-btn" type="button" data-listening-vocab-back aria-label="${isVi ? "Quay lại bài nghe" : "返回听力"}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
      </button>
      <section class="listening-vocab-practice-panel listening-vocab-practice-panel--screen">
        ${buildListeningVocabPracticeHTML(state.listeningVocabPracticeIndex)}
      </section>
    </div>
  `, "app-desktop-shell--listening", "listening", {
    preserveScroll: Boolean(options.preserveScroll),
    hideMobileHeader: true,
  });
}

function resetListeningRepeatAttempt() {
  stopListeningRepeatListenPlayback();
  listeningRepeatTranscript = "";
  listeningRepeatInterim = "";
  listeningRepeatScoringDone = false;
  if (listeningRepeatScoreTimer) {
    window.clearTimeout(listeningRepeatScoreTimer);
    listeningRepeatScoreTimer = null;
  }
  listeningRepeatOriginalMarks = null;
  clearListeningRecordingPlayback();
}

function setListeningRepeatLessonSentence(index) {
  const episode = getListeningEpisode();
  const total = Math.max(1, episode.sentences.length);
  state.listeningSentenceIndex = Math.max(0, Math.min(Number(index) || 0, total - 1));
  resetListeningRepeatAttempt();
}

function renderListeningLevelLessons(options = {}) {
  const isVi = state.lang === "vi";
  const { level } = getListeningLevelInfo(state.listeningLevelId);
  const selectedTopic = getListeningCatalogTopic();
  const lessonTitle = selectedTopic
    ? (isVi ? (selectedTopic.label_vi || selectedTopic.label_zh) : (selectedTopic.label_zh || selectedTopic.label_vi))
    : (isVi ? level.vi : level.zh);
  const lessons = getListeningLevelLessons(state.listeningLevelId);

  const rowsHTML = lessons.map((lesson) => {
    const statusText = isVi ? lesson.statusVi : lesson.statusZh;
    const statusClass = lesson.statusVi === "Đã học"
      ? "completed"
      : lesson.statusVi === "Đang học"
        ? "in-progress"
        : "not-started";
    const bars = Array.from({ length: 16 }, () => {
      const h = 8 + Math.round(Math.random() * 22);
      const d = (Math.random() * 0.8).toFixed(2);
      return `<i style="--h:${h}px;--d:${d}s"></i>`;
    }).join("");

    const rowActionAttr = lesson.kind === "topic"
      ? `data-listening-topic-list="${escapeAttr(lesson.episodeId)}" data-listening-topic-level="${escapeAttr(state.listeningLevelId)}"`
      : `data-listening-topic-open="${escapeAttr(lesson.episodeId)}"`;
    const lessonTopicId = getListeningTopicByEpisodeId(lesson.episodeId)?.id || "";
    const lessonLocked = isListeningContentLocked(lessonTopicId, lesson.kind === "topic" ? "" : lesson.episodeId);

    return `
      <button class="listening-lesson-row listening-lesson-row--${escapeAttr(lesson.tone || "mint")}${lessonLocked ? " listening-content-locked" : ""}" type="button" ${lessonLocked ? "aria-disabled=\"true\"" : ""} ${rowActionAttr}>
  <span class="listening-lesson-play listening-lesson-number">${lesson.no}</span>

  <span class="listening-lesson-copy">
    <strong>${escapeHtml(isVi ? lesson.title : lesson.zh)}</strong>
    <span class="listening-lesson-meta">
      <span class="listening-lesson-status listening-lesson-status--${statusClass}">${escapeHtml(statusText)}</span>
      <span class="listening-lesson-duration">${escapeHtml(lesson.duration)}</span>
    </span>
  </span>

  <span class="listening-lesson-wave" aria-hidden="true">${bars}</span>
  <span class="listening-lesson-arrow" aria-hidden="true">${lessonLocked ? "" : "›"}</span>
</button>
    `;
  }).join("");

  setScreenWithDesktopShell("listening", `
    <section class="listening-lessons-screen">
      <div class="listening-lessons-hero">
        <button class="listening-lessons-back" type="button" data-listening-level-back aria-label="${isVi ? "Quay lại" : "返回"}">‹</button>
        <h1>${escapeHtml(lessonTitle)}</h1>
        <p>${isVi ? "Chọn nội dung để bắt đầu luyện nghe" : "选择一些内容开始练习你的听力技巧"}</p>
      </div>
      <div class="listening-lessons-list">
        ${rowsHTML}
      </div>
    </section>
  `, "app-desktop-shell--listening", "listening", {
    preserveScroll: Boolean(options.preserveScroll),
    mobileTitle: lessonTitle,
    hideMobileHeader: true,
  });
}

function renderListeningRepeatLesson(options = {}) {
  const isVi = state.lang === "vi";
  const episode = getListeningEpisode();
  const total = Math.max(1, episode.sentences.length);
  const currentIndex = Math.max(0, Math.min(state.listeningSentenceIndex, total - 1));
  const sentence = episode.sentences[currentIndex] || episode.sentences[0] || {};
  const progress = Math.round(((currentIndex + 1) / total) * 100);
  const listenLabel = listeningRepeatSpeechState === "playing"
    ? (isVi ? "Tạm dừng" : "Pause")
    : listeningRepeatSpeechState === "paused"
      ? (isVi ? "Tiếp tục" : "Resume")
      : (isVi ? "Nghe lại" : "Replay");

  const repeatWordBase = String(sentence.chinese || "").replace(/[。！？!?，,]/g, "");
  const repeatPinyinParts = String(sentence.pinyin || "")
    .replace(/[.。]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  let repeatWords = [
    { zh: "最近", py: "zuìjìn", status: isVi ? "Tốt" : "好", tone: "good" },
    { zh: "我", py: "wǒ", status: isVi ? "Tốt" : "好", tone: "good" },
    { zh: "有点儿", py: "yǒudiǎnr", status: isVi ? "Hoàn hảo" : "完美", tone: "good" },
    { zh: "不开心", py: "bù kāixīn", status: isVi ? "Cần cải thiện" : "需改进", tone: "bad" },
  ];

  if (!repeatWordBase.includes("最近")) {
    repeatWords = Array.from(repeatWordBase).slice(0, 4).map((ch, index) => ({
      zh: ch,
      py: repeatPinyinParts[index] || "",
      status: index === 3 ? (isVi ? "Cần cải thiện" : "需改进") : (isVi ? "Tốt" : "好"),
      tone: index === 3 ? "bad" : "good",
    }));
  }

  const weakWord = repeatWords.find((word) => word.tone === "bad") || repeatWords[repeatWords.length - 1] || {};
  const repeatWordRowsHTML = repeatWords.map((word) => `
  <div class="repeat-ai-word-row repeat-ai-word-row--${escapeAttr(word.tone)}">
    <strong>${escapeHtml(word.zh)}</strong>
    <span>${escapeHtml(word.py)}</span>
    <em>${escapeHtml(word.status)}</em>
  </div>
`).join("");
  const sentenceFeedIndexes = [currentIndex];
  const sentenceFeedHTML = sentenceFeedIndexes.map((index) => {
    const item = episode.sentences[index] || {};
    const isActive = index === currentIndex;
    const sentenceButtonAttrs = `type="button" data-listening-repeat-sentence="${index}" aria-label="${escapeAttr(isVi ? `Chọn câu ${index + 1}` : `Choose sentence ${index + 1}`)}"`;
    const sentenceNumber = `${index + 1} / ${total}`;

    if (!isActive) {
      return `
        <article class="listening-repeat-feed-card" data-listening-repeat-card="${index}">
          <button class="listening-repeat-feed-preview" ${sentenceButtonAttrs}>
            <span>${escapeHtml(sentenceNumber)}</span>
            <strong>${escapeHtml(item.chinese || "")}</strong>
            <small>${escapeHtml(item.pinyin || "")}</small>
            <em>${escapeHtml(item.vietnamese || "")}</em>
          </button>
        </article>
      `;
    }

    const displayScore = getListeningRepeatDisplayScore();
    return `
    <div class="progressprogress">
      <article class="listening-repeat-feed-card listening-repeat-feed-card--active" data-listening-repeat-card="${index}" data-listening-repeat-active>
        <button class="listening-repeat-feed-nav listening-repeat-feed-nav--prev" type="button" data-listening-repeat-prev ${index <= 0 ? "disabled" : ""} aria-label="${escapeAttr(isVi ? "Câu trước" : "Previous sentence")}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button class="listening-repeat-feed-nav listening-repeat-feed-nav--next" type="button" data-listening-repeat-next ${index + 1 >= total ? "disabled" : ""} aria-label="${escapeAttr(isVi ? "Câu sau" : "Next sentence")}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
        </button>
        <div class="listening-repeat-feed-index">${escapeHtml(sentenceNumber)}</div>
        <div class="listening-repeat-listen-content listening-repeat-feed-active-content ${(item.chinese || "").length > 22 ? "is-very-long" : (item.chinese || "").length > 14 ? "is-long" : ""
      }">
          <span class="listening-repeat-card-count">${escapeHtml(isVi ? `Câu ${sentenceNumber}` : `第 ${sentenceNumber} 句`)}</span>
          <strong data-listening-repeat-original>${buildListeningRepeatOriginalHTML(item.chinese || "")}</strong>
          <small>${escapeHtml(item.pinyin || "")}</small>
          <em>${escapeHtml(item.vietnamese || "")}</em>
        </div>
        <div class="listening-repeat-card-actions listening-repeat-card-actions--triad">
          <button class="listening-repeat-play-large listening-repeat-triad-btn listening-repeat-triad-btn--play ${listeningRepeatSpeechState === "playing" ? "is-playing" : ""} ${listeningRepeatSpeechState === "paused" ? "is-paused" : ""}" type="button" data-listening-repeat-current-play aria-pressed="${listeningRepeatSpeechState === "playing" ? "true" : "false"}" aria-label="${escapeAttr(listenLabel)}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <button class="listening-repeat-mic-large listening-repeat-triad-btn listening-repeat-triad-btn--mic" type="button" data-listening-record aria-label="${isVi ? "Ghi âm" : "Record"}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/><path d="M8 22h8"/></svg>
          </button>
          <button class="listening-recording-playback-btn listening-repeat-score-playback" type="button" data-listening-recording-play disabled aria-label="${isVi ? "Nghe lại ghi âm" : "Play recording"}">
            <svg class="listening-recording-playback-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5z"></path>
              <path d="M15.5 8.5a5 5 0 0 1 0 7"></path>
              <path d="M19 5a10 10 0 0 1 0 14"></path>
            </svg>
            <strong data-listening-recording-score>${displayScore === null ? "--" : displayScore}</strong>
            <small data-listening-recording-score-unit>${isVi ? "điểm" : "分"}</small>
            <span data-listening-recording-label>${isVi ? "Chưa có ghi âm" : "No recording yet"}</span>
          </button>
        </div>
        <span class="listening-repeat-hidden-label" data-listening-repeat-listen-label>${escapeHtml(listenLabel)}</span>
      </article>
      </div>
    `;
  }).join("");

  setScreenWithDesktopShell("listening", `
    <div class="listening-repeat-lesson-screen listening-repeat-lesson-screen--compact">
      <button class="listening-repeat-corner-back" type="button" data-listening-repeat-back aria-label="${isVi ? "Quay trở lại" : "Back"}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="m13.5 8.5-3.5 3.5 3.5 3.5"/></svg>
        <span>${isVi ? "Luyện nói" : "Speaking"}</span>
      </button>
      <section class="listening-repeat-workspace listening-repeat-workspace--compact">
        <audio id="listeningRepeatAudio" src="${escapeAttr(sentence.audioSrc || episode.audioSrc || "")}" preload="none"></audio>
        <div class="listening-repeat-practice-grid">
          <div class="listening-repeat-sentence-feed" aria-label="${escapeAttr(isVi ? "Danh sách câu nói" : "Sentence list")}">
            ${sentenceFeedHTML}
          </div>
        </div>
      </section>
    </div>
  `, "app-desktop-shell--listening app-desktop-shell--listening-repeat", "listening", {
    preserveScroll: Boolean(options.preserveScroll),
    mobileTitle: isVi ? "Nói theo" : "Shadowing",
    hideMobileHeader: true,
  });
  updateListeningRecordingPlaybackUi(Boolean(listeningRecordingUrl));
  setListeningRepeatListenUi(listeningRepeatSpeechState);
  return;

  const completedCount = currentIndex;
  const sentenceCardsHTML = episode.sentences.map((item, index) => `
    <article class="listening-repeat-list-card ${index === currentIndex ? "active" : ""}">
      <button class="listening-repeat-list-main" type="button" data-listening-repeat-sentence="${index}">
        <span>${index + 1}</span>
        <strong>${escapeHtml(item.chinese || "")}</strong>
        <small>${escapeHtml(item.pinyin || "")}</small>
        <em>${escapeHtml(item.vietnamese || "")}</em>
      </button>
      <button class="listening-repeat-list-play" type="button" data-listening-repeat-play="${index}" aria-label="${isVi ? "Nghe câu này" : "Listen"}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
      </button>
    </article>
  `).join("");

  setScreenWithDesktopShell("listening", `
    <div class="listening-repeat-lesson-screen">
      <header class="listening-repeat-lesson-topbar">
        <button class="listening-repeat-back-btn" type="button" data-listening-repeat-back>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
          <span>${isVi ? "Quay trở lại" : "Back"}</span>
        </button>
        <h1>${isVi ? "Nói theo" : "Shadowing"}</h1>
        <div class="listening-repeat-progress">
          <span>${isVi ? "Tiến độ nội dung:" : "Progress:"}</span>
          <strong>${currentIndex + 1} / ${total} ${isVi ? "câu" : "sentences"}</strong>
          <i><b style="width:${progress}%"></b></i>
        </div>
      </header>

      <div class="listening-repeat-lesson-layout">
        <aside class="listening-repeat-sentence-rail">
          <h2>${isVi ? "Danh sách câu trong nội dung nghe" : "Sentence list"}</h2>
          <div class="listening-repeat-list">${sentenceCardsHTML}</div>
          <footer>
            <span>${isVi ? "Tổng số câu:" : "Total:"} <strong>${total}</strong></span>
            <span>${isVi ? "Đã hoàn thành:" : "Done:"} <strong>${completedCount}</strong></span>
          </footer>
        </aside>

        <section class="listening-repeat-workspace">
          <audio id="listeningRepeatAudio" src="${escapeAttr(sentence.audioSrc || episode.audioSrc || "")}" preload="none"></audio>
          <div class="listening-repeat-step">
            <div class="listening-repeat-step-index">1</div>
            <div class="listening-repeat-step-control">
              <button class="listening-repeat-play-large ${listeningRepeatSpeechState === "playing" ? "is-playing" : ""} ${listeningRepeatSpeechState === "paused" ? "is-paused" : ""}" type="button" data-listening-repeat-current-play aria-pressed="${listeningRepeatSpeechState === "playing" ? "true" : "false"}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <span data-listening-repeat-listen-label>${listeningRepeatSpeechState === "playing" ? (isVi ? "Tạm dừng" : "Pause") : listeningRepeatSpeechState === "paused" ? (isVi ? "Tiếp tục" : "Resume") : (isVi ? "Nghe lại" : "Replay")}</span>
            </div>
            <div class="listening-repeat-step-body">
              <h2>${isVi ? "Nghe từng câu" : "Listen sentence by sentence"}</h2>
              <div class="listening-repeat-reference-wave">
                <i></i>
                <span>0:00 / ${listeningFormatTime(Math.max(1, (sentence.end || 0) - (sentence.start || 0)))}</span>
              </div>
              <div class="listening-repeat-current-text">
                <strong>${escapeHtml(sentence.chinese || "")}</strong>
                <small>${escapeHtml(sentence.pinyin || "")}</small>
                <em>${escapeHtml(sentence.vietnamese || "")}</em>
              </div>
            </div>
          </div>

          <div class="listening-repeat-step">
            <div class="listening-repeat-step-index">2</div>
            <div class="listening-repeat-step-control">
              <button class="listening-repeat-mic-large" type="button" data-listening-record>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/><path d="M8 22h8"/></svg>
              </button>
              <span>${isVi ? "Nhấn để bắt đầu" : "Tap to start"}</span>
            </div>
            <div class="listening-repeat-step-body">
              <h2>${isVi ? "Nói theo" : "Repeat"}</h2>
              <div class="listening-repeat-record-panel">
                <div class="listening-repeat-record-status">
                  <span></span>
                  <strong>${isVi ? "Sẵn sàng ghi âm" : "Ready to record"}</strong>
                </div>
                <div class="listening-repeat-record-wave"><i></i></div>
                <p><b>${isVi ? "Mẹo:" : "Tip:"}</b> ${isVi ? "Nói rõ ràng, đúng ngữ điệu và tốc độ tự nhiên." : "Speak clearly with natural rhythm."}</p>
                <button class="listening-recording-playback-btn" type="button" data-listening-recording-play disabled>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                  <span data-listening-recording-label>${isVi ? "Chưa có ghi âm" : "No recording yet"}</span>
                </button>
                <textarea id="listeningRepeatInput" readonly disabled>${escapeHtml(sentence.chinese || "")}</textarea>
              </div>
            </div>
          </div>

          <div class="listening-repeat-step">
            <div class="listening-repeat-step-index">3</div>
            <div class="listening-repeat-step-control">
              <div class="listening-repeat-score-preview"><strong>--</strong><span></span></div>
            </div>
            <div class="listening-repeat-step-body">
              <h2>${isVi ? "Chấm điểm và lỗi sai" : "Score and mistakes"}</h2>
              <div id="listeningPronunciationResult" class="listening-pronunciation-result repeat-ai-live-result">
                <span>${isVi ? "Bấm micro để ghi âm. Sau khi dừng, hệ thống sẽ chấm điểm và tô màu chữ sai." : "Record your voice to see score and mistakes."}</span>
              </div>
            </div>
          </div>

          <button class="listening-repeat-next-btn" type="button" data-listening-repeat-next>
            ${isVi ? "Câu tiếp theo" : "Next sentence"}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
          </button>
        </section>
      </div>
    </div>
  `, "app-desktop-shell--listening", "listening", { preserveScroll: Boolean(options.preserveScroll) });

  updateListeningRecordingPlaybackUi(Boolean(listeningRecordingUrl));
  setListeningRepeatListenUi(listeningRepeatSpeechState);
}

function renderListeningKeywordDetail(index, button = null) {
  const keyword = getListeningKeyword(index);
  const panel = $("#listeningKeywordDetail");
  if (!keyword?.chinese || !panel) return;

  const examplesHTML = getListeningKeywordExamples(keyword)
    .map((example) => normalizeListeningKeywordExample(example, keyword))
    .slice(0, 3)
    .map((example, exampleIndex) => `
      <li>
        <span>${exampleIndex + 1}</span>
        <p>${highlightListeningKeyword(example.chinese, keyword.chinese)}</p>
      </li>
    `).join("");

  document.querySelectorAll("[data-listening-keyword]").forEach((node) => {
    node.classList.remove("active");
    node.setAttribute("aria-expanded", "false");
  });
  button?.classList.add("active");
  button?.setAttribute("aria-expanded", "true");

  panel.classList.remove("hidden");
  panel.innerHTML = `
    <button class="listening-keyword-popup-x" type="button" data-listening-keyword-close aria-label="Đóng">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>
    </button>

    <div class="listening-keyword-popup-head">
      <span>Chữ Hán</span>
      <strong>${escapeHtml(keyword.chinese)}</strong>
    </div>

    <div class="listening-keyword-popup-meta">
      <div><span>Pinyin</span><p>${escapeHtml(keyword.pinyin || "—")}</p></div>
      <div><span>Tiếng Việt</span><p>${escapeHtml(keyword.vietnamese || "—")}</p></div>
    </div>

    <div class="listening-keyword-actions">
      <button type="button" data-listening-keyword-speak="${index}" data-listening-keyword-rate="normal">
        ${desktopNavIcon("listening")} Nghe thường
      </button>
      <button type="button" data-listening-keyword-speak="${index}" data-listening-keyword-rate="slow">
        ${desktopNavIcon("listening")} Nghe chậm
      </button>
    </div>

    <div class="listening-keyword-examples">
      <span>3 câu ví dụ tiếng Trung</span>
      <ol>${examplesHTML}</ol>
    </div>
  `;

  positionListeningKeywordPopup(panel, button);
}

function positionListeningKeywordPopup(panel, button) {
  if (!panel || !button) return;
  const rect = button.getBoundingClientRect();
  const gap = 12;
  const margin = 12;
  const width = Math.min(340, window.innerWidth - margin * 2);
  const leftCandidate = rect.left - width - gap;
  const rightCandidate = rect.right + gap;
  const isCompactDesktop = window.matchMedia?.("(min-width: 901px) and (max-width: 1320px)")?.matches;
  const canOpenLeft = leftCandidate >= margin;
  const canOpenRight = rightCandidate + width <= window.innerWidth - margin;
  let left;

  if (isCompactDesktop && canOpenRight) {
    left = rightCandidate;
  } else if (canOpenLeft) {
    left = leftCandidate;
  } else if (canOpenRight) {
    left = rightCandidate;
  } else {
    left = Math.max(margin, Math.min(leftCandidate, window.innerWidth - width - margin));
  }

  panel.style.width = `${width}px`;
  panel.style.left = `${left}px`;
  const yOffset = 80;
  panel.style.top = `${rect.top + rect.height / 2 + yOffset}px`;
}

function closeListeningKeywordPopup() {
  const panel = $("#listeningKeywordDetail");
  if (!panel) return;
  panel.classList.add("hidden");
  panel.innerHTML = "";
  panel.removeAttribute("style");
  document.querySelectorAll("[data-listening-keyword]").forEach((node) => node.classList.remove("active"));
}
// function positionListeningKeywordPopup(panel, button = null) {
//   if (!panel || !button) return;
//   const gap = 14;
//   const margin = 14;
//   const width = Math.min(380, window.innerWidth - margin * 2);
//   const rect = button.getBoundingClientRect();
//   let left = rect.left - width - gap;
//   if (left < margin) left = rect.right + gap;
//   left = Math.max(margin, Math.min(left, window.innerWidth - width - margin));

//   panel.style.width = `${width}px`;
//   panel.style.left = `${left}px`;
//   panel.style.top = `${rect.top + rect.height / 2}px`;
// }

function getListeningKeywordAudioSources(keyword, options = {}) {
  const normalize = (source) => (
    typeof listeningCatalogAssetPath === "function" ? listeningCatalogAssetPath(source) : source
  );
  const slow = Boolean(options.slow);
  const normalSource = normalize(keyword?.audioNormal || keyword?.audioSrc || keyword?.audio || "");
  const slowSource = normalize(keyword?.audioSlow || normalSource);
  return uniqueAudioSources(slow ? [slowSource, normalSource] : [normalSource]);
}

function playListeningKeyword(index, options = {}) {
  const keyword = getListeningKeyword(index);
  if (!keyword?.chinese) return;

  const slow = Boolean(options.slow);
  const sources = getListeningKeywordAudioSources(keyword, { slow });
  const speakFallback = () => {
    if (!("speechSynthesis" in window)) {
      showToast(state.lang === "vi" ? "TrÃ¬nh duyá»‡t chÆ°a há»— trá»£ phÃ¡t Ã¢m tá»« vá»±ng." : "å½“å‰æµè§ˆå™¨ä¸æ”¯æŒæœ—è¯»è¯è¯­ã€‚");
      return;
    }
    browserSpeakText(keyword.chinese, { stage: "word", slow, rate: slow ? 0.72 : 0.98 });
  };
  if (sources.length > 0) {
    playAudioSources(sources, speakFallback, {
      text: keyword.chinese,
      speed: slow ? "slow" : "normal",
      sources,
      playbackRate: slow ? 0.72 : 1,
    });
    return;
  }

  if (!("speechSynthesis" in window)) {
    showToast(state.lang === "vi" ? "Trình duyệt chưa hỗ trợ phát âm từ vựng." : "当前浏览器不支持朗读词语。");
    return;
  }
  browserSpeakText(keyword.chinese, { stage: "word", slow: Boolean(options.slow), rate: options.slow ? 0.72 : 0.98 });
}

function selectListeningKeyword(index, button = null) {
  renderListeningKeywordDetail(index, button);
  const keyword = getListeningKeyword(index);
  if (!keyword?.chinese) return;
  const chinese = typeof keyword === "string" ? keyword : keyword?.chinese || "";
  const pinyin = typeof keyword === "string" ? "" : keyword?.pinyin || "";
  const vietnamese = typeof keyword === "string" ? "" : keyword?.vietnamese || "";
  const meta = [pinyin, vietnamese].filter(Boolean).join(" · ");

}

async function startListeningRepeatRecording() {
  if (listeningMediaRecorder?.state === "recording") {
    stopListeningRepeatSilenceMonitor();
    if (!listeningRealtimeScoringActive) stopListeningRepeatRecognition();
    listeningRepeatStopTonePlayed = true;
    playTone("record-stop");
    listeningMediaRecorder.stop();
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    showToast(state.lang === "vi" ? "Trình duyệt chưa hỗ trợ ghi âm." : "当前浏览器不支持录音。");
    return;
  }

  const recordingAttemptToken = listeningRepeatAttemptToken + 1;
  listeningRepeatAttemptToken = recordingAttemptToken;
  listeningRepeatTranscript = "";
  listeningRepeatInterim = "";
  listeningRepeatScoringDone = false;
  listeningRepeatOriginalMarks = null;
  if (listeningRealtimeCommitTimer) {
    window.clearTimeout(listeningRealtimeCommitTimer);
    listeningRealtimeCommitTimer = null;
  }
  clearListeningPronunciationResult();
  resetListeningRecordingPlaybackScoreUi();
  clearRepeatAiWordRows();
  setListeningRepeatOriginalMarks(getListeningEpisode().sentences[state.listeningSentenceIndex]?.chinese || "", null);

  try {
    ensureAudio();
    listeningRecordingStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    listeningRepeatStopTonePlayed = false;
    listeningRecordingChunks = [];
    listeningMediaRecorder = new MediaRecorder(listeningRecordingStream, getListeningRecordingOptions());
    startListeningRepeatSilenceMonitor(listeningRecordingStream);
    document.querySelectorAll("[data-listening-record]").forEach((button) => button.classList.add("is-recording"));
    clearListeningPronunciationResult(state.lang === "vi" ? "Đang nghe bạn đọc..." : "正在听你朗读...");
    const canRealtimeScore = startListeningRealtimeScoring(listeningRecordingStream);
    const canScorePronunciation = canRealtimeScore || startListeningRepeatRecognition();
    showToast(state.lang === "vi" ? "Đang ghi âm, bấm lại để dừng." : "正在录音，再点一次停止。");

    listeningMediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data?.size) listeningRecordingChunks.push(event.data);
    });

    listeningMediaRecorder.addEventListener("stop", () => {
      stopListeningRepeatSilenceMonitor();
      if (!listeningRepeatStopTonePlayed) playTone("record-stop");
      listeningRepeatStopTonePlayed = false;
      document.querySelectorAll("[data-listening-record]").forEach((button) => button.classList.remove("is-recording"));
      listeningRecordingStream?.getTracks().forEach((track) => track.stop());
      listeningRecordingStream = null;
      if (listeningRecordingUrl) URL.revokeObjectURL(listeningRecordingUrl);
      const blob = new Blob(listeningRecordingChunks, { type: listeningMediaRecorder.mimeType || "audio/webm" });
      listeningRecordingBlob = blob;
      listeningRecordingUrl = URL.createObjectURL(blob);
      updateListeningRecordingPlaybackUi(true);
      if (canRealtimeScore && listeningRealtimeScoringActive) {
        stopListeningRealtimeScoring({ commit: true });
        renderListeningPronunciationPreview(getListeningRepeatText());
        setListeningRepeatInput(state.lang === "vi"
          ? "Đã ghi âm xong. Đang hoàn tất điểm..."
          : "录音完成，正在完成评分。");
        scheduleListeningRealtimeFallback(LISTENING_REALTIME_FINAL_WAIT_MS, recordingAttemptToken);
      } else if (canScorePronunciation && listeningRepeatRecognitionAvailable) {
        renderListeningPronunciationScore(getListeningRepeatText());
      } else {
        if (canRealtimeScore) stopListeningRealtimeScoring({ commit: false });
        scheduleListeningRepeatScore(0, recordingAttemptToken);
        setListeningRepeatInput(state.lang === "vi"
          ? "Đã ghi âm xong. Đang chờ backend chấm điểm."
          : "录音完成，正在等待后端评分。");
      }
      showToast(state.lang === "vi" ? "Đã ghi âm xong." : "录音完成。");
    }, { once: true });

    listeningMediaRecorder.start();
    playTone("record-start");
  } catch {
    stopListeningRepeatSilenceMonitor();
    stopListeningRealtimeScoring({ commit: false });
    stopListeningRepeatRecognition();
    document.querySelectorAll("[data-listening-record]").forEach((button) => button.classList.remove("is-recording"));
    listeningRecordingStream?.getTracks().forEach((track) => track.stop());
    listeningRecordingStream = null;
    showToast(state.lang === "vi" ? "Không thể mở micro. Hãy kiểm tra quyền trình duyệt." : "无法打开麦克风，请检查浏览器权限。");
        }
      }

function setListeningPlayIcon(isPlaying) {
  document.querySelectorAll("[data-listening-play]").forEach((button) => {
    button.classList.toggle("is-playing", isPlaying);
    button.setAttribute("aria-pressed", isPlaying ? "true" : "false");
    button.setAttribute("aria-label", isPlaying
      ? (state.lang === "vi" ? "Tạm dừng" : "暂停")
      : (state.lang === "vi" ? "Phát" : "播放"));
    button.innerHTML = isPlaying
      ? `<svg viewBox="0 0 24 24"><path d="M8 5h3v14H8z"/><path d="M13 5h3v14h-3z"/></svg>`
      : `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
  });
}

function setListeningWaveformActive(isPlaying) {
  document.querySelectorAll(".listening-waveform").forEach((waveform) => {
    waveform.classList.toggle("is-playing", isPlaying);
  });
}

function setListeningPlaybackUi(isPlaying) {
  const statusTitle = $("#listeningStatusTitle");
  if (statusTitle) statusTitle.textContent = isPlaying ? (state.lang === "vi" ? "Đang phát" : "播放中") : (state.lang === "vi" ? "Đã tạm dừng" : "已暂停");
  setListeningPlayIcon(isPlaying);
  setListeningWaveformActive(isPlaying);
}

function closeListeningSpeedMenus() {
  document.querySelectorAll(".listening-speed-menu.open").forEach((menu) => {
    menu.classList.remove("open");
    menu.querySelector("[data-listening-speed-toggle]")?.setAttribute("aria-expanded", "false");
  });
}

function nextListeningPlaybackToken() {
  listeningPlaybackToken += 1;
  return listeningPlaybackToken;
}

function isCurrentListeningPlaybackToken(token) {
  return token === listeningPlaybackToken;
}

function setListeningAudioSource(audio, src, phase) {
  if (!audio || !src) return;
  const sourceChanged = audio.getAttribute("src") !== src;
  if (sourceChanged) {
    audio.pause();
    audio.setAttribute("src", src);
    audio.load?.();
  }
  audio.dataset.listeningAudioPhase = phase;
  applyListeningPlaybackRate(audio);
}

function prepareListeningTitleAudio(audio, episode) {
  if (!audio || !episode?.titleAudioSrc) return false;
  audio.pause();
  setListeningAudioSource(audio, episode.titleAudioSrc, "title");
  audio.currentTime = 0;
  return true;
}

function prepareListeningMainAudio(audio, episode, startTime = null) {
  if (!audio || !episode?.audioSrc) return false;
  audio.pause();
  setListeningAudioSource(audio, episode.audioSrc, "main");
  if (Number.isFinite(Number(startTime))) {
    audio.currentTime = Number(startTime);
  }
  return true;
}

function shouldStartWithListeningTitle(audio, episode) {
  if (!audio || !episode?.titleAudioSrc || !episode?.audioSrc) return false;
  const phase = audio.dataset.listeningAudioPhase;
  if (phase === "title" || phase === "main") return false;
  return (audio.currentTime || 0) < 0.2;
}

function playListeningAudio(audio, token = listeningPlaybackToken) {
  audio.dataset.listeningPlaybackToken = String(token);
  return audio.play()
    .then(() => {
      if (!listeningPlaybackRequested || !isCurrentListeningPlaybackToken(token)) {
        if (audio.dataset.listeningPlaybackToken === String(token)) audio.pause();
        return;
      }
      syncListeningAudioUi();
    })
    .catch(() => {
      if (!listeningPlaybackRequested || !isCurrentListeningPlaybackToken(token)) {
        syncListeningAudioUi();
        return;
      }
      if (!speakListeningSentence()) syncListeningAudioUi();
    });
}

function playListeningTitleThenMain(audio, episode) {
  const token = nextListeningPlaybackToken();
  if (!prepareListeningTitleAudio(audio, episode)) {
    prepareListeningMainAudio(audio, episode);
  } else {
    setListeningTitleSentenceActive({ scroll: true });
  }
  return playListeningAudio(audio, token);
}

function continueListeningAfterTitleAudio(audio) {
  const episode = getListeningEpisode();
  const token = listeningPlaybackToken;
  if (!audio || audio.dataset.listeningAudioPhase !== "title" || !listeningPlaybackRequested || !isCurrentListeningPlaybackToken(token)) return;
  audio.pause();
  if (!prepareListeningMainAudio(audio, episode, 0)) {
    listeningPlaybackRequested = false;
    nextListeningPlaybackToken();
    syncListeningAudioUi();
    return;
  }
  setListeningActiveSentence(0, { force: true, scroll: true });
  setListeningPlaybackUi(true);
  playListeningAudio(audio, token);
}

function syncListeningAudioUi() {
  if (state.screen !== "listening" || state.listeningView !== "detail") return;
  const episode = getListeningEpisode();
  const audio = $("#listeningAudio");
  const isTitlePhase = audio?.dataset?.listeningAudioPhase === "title";
  const statusTitle = $("#listeningStatusTitle");
  const statusSub = $("#listeningStatusSub");
  const currentTimeNode = $("#listeningCurrentTime");
  const progressNode = $("#listeningProgress");
  applyListeningPlaybackRate(audio);
  const duration = getListeningAudioDuration(audio, episode);
  const current = isTitlePhase
    ? 0
    : audio ? Math.min((audio.currentTime + 0.25) || 0, duration) : getListeningSentenceStart(episode, state.listeningSentenceIndex);
  const percent = !isTitlePhase && duration > 0 ? Math.min(100, (current / duration) * 100) : 0;
  if (audio?.ended && !isTitlePhase) listeningPlaybackRequested = false;
  if (isTitlePhase) {
    setListeningTitleSentenceActive({
      scroll: Boolean(listeningPlaybackRequested || (audio && !audio.paused)),
    });
  }
  if (!isTitlePhase) updateListeningLessonProgress(episode.id, current, duration, { completed: Boolean(audio?.ended || percent >= 100) });
  if (audio && !audio.paused && !isTitlePhase) setListeningActiveSentence(getListeningSentenceIndexAtTime(episode, current));

  if (currentTimeNode) currentTimeNode.textContent = listeningFormatTime(current);
  if (progressNode) progressNode.style.width = `${percent}%`;
  progressNode?.closest(".listening-track")?.classList.toggle("is-started", percent > 0.5);
  if (statusTitle) statusTitle.textContent = audio && (!audio.paused || listeningPlaybackRequested) ? (state.lang === "vi" ? "Đang phát" : "播放中") : (state.lang === "vi" ? "Đã tạm dừng" : "已暂停");
  if (statusSub) {
    if (audio?.error) {
      statusSub.textContent = state.lang === "vi" ? "Không thể phát file, có thể dùng giọng đọc trình duyệt." : "无法播放音频，可使用浏览器朗读。";
    } else if (!episode.audioSrc) {
      statusSub.textContent = state.lang === "vi" ? "Bài này dùng giọng đọc trình duyệt." : "本课使用浏览器朗读。";
    } else {
      statusSub.textContent = state.lang === "vi" ? "Âm thanh thật đã sẵn sàng" : "真实音频已准备";
    }
  }
  const isPlaying = Boolean(audio && !audio.paused && !audio.ended);
  setListeningPlayIcon(isPlaying);
  setListeningWaveformActive(isPlaying);
}

function seekListeningSentence(index, autoplay = false) {
  const episode = getListeningEpisode();
  state.listeningSentenceIndex = Math.max(0, Math.min(index, episode.sentences.length - 1));
  const audio = $("#listeningAudio");
  const startTime = getListeningSentenceStart(episode, state.listeningSentenceIndex);

  if (autoplay && audio && episode.audioSrc) {
    listeningPlaybackRequested = true;
    const token = nextListeningPlaybackToken();
    prepareListeningMainAudio(audio, episode, startTime);
    refreshListeningActiveSentenceUi();
    setListeningPlaybackUi(true);
    playListeningAudio(audio, token);
    return;
  }

  if (autoplay && (!audio || !episode.audioSrc)) {
    refreshListeningActiveSentenceUi();
    if (!speakListeningSentence()) syncListeningAudioUi();
    return;
  }

  renderListeningDetail({ preserveScroll: true });
  requestAnimationFrame(() => {
    const audio = $("#listeningAudio");
    if (audio) prepareListeningMainAudio(audio, episode, startTime);
    syncListeningAudioUi();
  });
}

function seekListeningTitleSentence(autoplay = true) {
  const episode = getListeningEpisode();
  const audio = $("#listeningAudio");
  if (!audio || !episode.titleAudioSrc) return;

  setListeningTitleSentenceActive({ scroll: true });
  if (!autoplay) {
    prepareListeningTitleAudio(audio, episode);
    syncListeningAudioUi();
    return;
  }

  listeningPlaybackRequested = true;
  const token = nextListeningPlaybackToken();
  prepareListeningTitleAudio(audio, episode);
  setListeningPlaybackUi(true);
  playListeningAudio(audio, token);
}

function isListeningPlaybackActive() {
  const audio = $("#listeningAudio");
  return Boolean(audio && (!audio.paused || listeningPlaybackRequested));
}

function toggleListeningPlayback() {
  const episode = getListeningEpisode();
  const audio = $("#listeningAudio");
  closeListeningSpeedMenus();
  if (!audio || !episode.audioSrc) {
    if (listeningPlaybackRequested) {
      listeningPlaybackRequested = false;
      nextListeningPlaybackToken();
      window.speechSynthesis?.cancel?.();
      setListeningPlaybackUi(false);
      return;
    }
    listeningPlaybackRequested = true;
    nextListeningPlaybackToken();
    if (!speakListeningSentence()) {
      listeningPlaybackRequested = false;
      nextListeningPlaybackToken();
      syncListeningAudioUi();
    }
    return;
  }
  if (!audio.paused) {
    listeningPlaybackRequested = false;
    nextListeningPlaybackToken();
    window.speechSynthesis?.cancel?.();
    audio.dataset.listeningResumePhase = audio.dataset.listeningAudioPhase || "";
    audio.dataset.listeningResumeTime = String(audio.currentTime || 0);
    audio.pause();
    syncListeningAudioUi();
    return;
  }

  listeningPlaybackRequested = false;
  listeningPlaybackRequested = true;
  setListeningPlaybackUi(true);
  const phase = audio.dataset.listeningAudioPhase || "";
  const resumeTime = Number(audio.dataset.listeningResumeTime);
  if (audio.ended) {
    if (episode.titleAudioSrc) {
      playListeningTitleThenMain(audio, episode);
      return;
    }
    const token = nextListeningPlaybackToken();
    prepareListeningMainAudio(audio, episode, 0);
    playListeningAudio(audio, token);
    return;
  }
  if (shouldStartWithListeningTitle(audio, episode)) {
    playListeningTitleThenMain(audio, episode);
  } else {
    const token = nextListeningPlaybackToken();
    if (phase === "main") {
      if (Number.isFinite(resumeTime) && resumeTime > 0) {
        audio.currentTime = resumeTime;
        setListeningActiveSentence(getListeningSentenceIndexAtTime(episode, resumeTime), { force: true, scroll: true });
      }
    } else if (phase === "title") {
      setListeningTitleSentenceActive({ scroll: true });
    } else {
      prepareListeningMainAudio(audio, episode);
    }
    playListeningAudio(audio, token);
  }
}

function bindListeningAudioEvents() {
  const audio = $("#listeningAudio");
  if (audio && audio.dataset.bound !== "1") {
    audio.dataset.bound = "1";
    applyListeningPlaybackRate(audio);
    ["loadedmetadata", "timeupdate", "play", "pause", "ended", "error"].forEach((eventName) => {
      audio.addEventListener(eventName, syncListeningAudioUi);
    });
    audio.addEventListener("ended", () => continueListeningAfterTitleAudio(audio));
  } else if (audio) {
    applyListeningPlaybackRate(audio);
  }

  const track = $("[data-listening-track]");
  if (!track || track.dataset.bound === "1") return;
  track.dataset.bound = "1";
  track.addEventListener("click", (event) => {
    const episode = getListeningEpisode();
    const duration = getListeningAudioDuration(audio, episode);
    if (!duration) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const nextTime = ratio * duration;
    if (audio && episode.audioSrc) prepareListeningMainAudio(audio, episode, nextTime);
    setListeningActiveSentence(getListeningSentenceIndexAtTime(episode, nextTime));
    updateListeningLessonProgress(episode.id, nextTime, duration, { completed: nextTime >= duration - 0.35 });
    syncListeningAudioUi();
  });
}

function renderHomeDesktopLayoutHTML(isVi) {
  const stats = getHomeDashboardStats();
  const userName = state.user?.fullName || (isVi ? "Học viên" : "学员");
  const desktopProfileName = state.user ? userName : (isVi ? "Đăng nhập ngay" : "立即登录");
  const userInitial = String(userName).charAt(0).toUpperCase();
  const avatarUrl = getAccountAvatarUrl();
  const avatarHTML = avatarUrl
    ? `<img src="${escapeAttr(avatarUrl)}" alt="${escapeAttr(userName)}" />`
    : escapeHtml(userInitial);
  const vipDisplay = getVipPlanDisplay(state.user, isVi);
  const accountTypeLabel = state.user?.role === "employee" ? (isVi ? "Nhân viên" : "员工") : vipDisplay.badge;
  const hasActiveVip = isActivePremiumUser(state.user);
  const homeDesktopProfileClass = [
    "home-desktop-profile-card",
    state.user ? (hasActiveVip ? "home-desktop-profile-card--vip" : "home-desktop-profile-card--regular") : "home-desktop-profile-card--login",
  ].join(" ");
  const homeDesktopProfileAttrs = state.user ? "" : "data-home-login";
  const homeDesktopMemberKicker = isVi ? "Hạng thành viên" : "会员等级";
  const homeDesktopMemberTitle = hasActiveVip ? "HUAMEI VIP" : accountTypeLabel;
  const homeDesktopMemberStatus = hasActiveVip
    ? (isVi ? "Đặc quyền đang hoạt động" : "权益生效中")
    : vipDisplay.status;
  const vipMetaHTML = state.user ? `
    <small class="home-desktop-vip-meta">${escapeHtml(vipDisplay.status)}</small>
    ${vipDisplay.expiry ? `<small class="home-desktop-vip-meta">${escapeHtml(vipDisplay.expiry)}</small>` : ""}
  ` : "";
  const studyHours = Math.floor(stats.studyMinutes / 60);
  const studyMins = stats.studyMinutes % 60;
  const studyLabel = studyHours > 0
    ? `${studyHours}h ${studyMins}m`
    : `${studyMins}m`;
  return `
    <div class="home-desktop-layout">
      <div class="home-desktop-main">
        <header class="home-desktop-topbar">
          <div>
            <h1>${isVi ? "Học Trung - HuaMei" : "学习中文 - 华美"}</h1>
            <p>${isVi ? "Học đúng – Nhớ lâu" : "学得准 – 记得稳"}</p>
          </div>
          <button type="button" class="home-desktop-lang-btn" id="homeDesktopTopbarLanguageBtn" aria-label="${isVi ? "Đổi ngôn ngữ" : "切换语言"}">
            <span class="${isVi ? "active" : ""}">VI</span>
            <span class="${state.lang === "zh" ? "active" : ""}">中文</span>
          </button>
        </header>


        ${renderHomeDesktopModulesHTML(isVi)}
        <div class="home-mobile-only-block">
          ${renderHomeMobileModulesHTML(isVi)}
          ${renderHomeMobileTopicsHTML(isVi, 4)}
        </div>

        <section class="home-desktop-saved-section">
          <div class="home-desktop-section-head">
            <h2><span class="saved-heading-star">★</span> ${isVi ? "Từ vựng đã lưu" : "收藏生词"}</h2>
            <button type="button" class="home-desktop-link-btn" data-home-module="vocab">${isVi ? "Xem tất cả" : "查看全部"} ›</button>
          </div>
          ${renderHomeDesktopSavedVocabHTML(isVi)}
        </section>

        <section class="home-desktop-feature-strip">
        <article class="home-desktop-feature-card home-desktop-feature-card--green" data-home-nav="quick-hsk-vocab" role="button" tabindex="0">
          <span class="home-feature-icon">A</span>
          <div>
            <strong>${isVi ? "Luyện gõ từ vựng" : "词汇打字练习"}</strong>
            <small>${isVi ? "Tăng phản xạ và ghi nhớ lâu" : "提升反应，记得更久"}</small>
          </div>
        </article>

        <article class="home-desktop-feature-card home-desktop-feature-card--orange" data-home-nav="quick-hsk-sentence" role="button" tabindex="0">
          <span class="home-feature-icon">◎</span>
          <div>
            <strong>${isVi ? "Luyện gõ câu" : "句子打字练习"}</strong>
            <small>${isVi ? "Ghi nhớ cấu trúc câu lâu hơn" : "更久记住句子结构"}</small>
          </div>
        </article>

        <article class="home-desktop-feature-card home-desktop-feature-card--violet" data-home-nav="quick-listening" role="button" tabindex="0">
          <span class="home-feature-icon">▶</span>
          <div>
            <strong>${isVi ? "Luyện nghe nhanh" : "快速听力"}</strong>
            <small>${isVi ? "Ngẫu nhiên vào một bài nghe đề xuất" : "随机进入推荐听力课"}</small>
          </div>
        </article>

        <article class="home-desktop-feature-card home-desktop-feature-card--blue" data-home-nav="quick-speaking" role="button" tabindex="0">
          <span class="home-feature-icon">▣</span>
          <div>
            <strong>${isVi ? "Luyện nói nhanh" : "快速跟读"}</strong>
            <small>${isVi ? "Ngẫu nhiên vào phần nói theo" : "随机进入跟读练习"}</small>
          </div>
        </article>
      </section>
      </div>
      
      <aside class="home-desktop-rail" aria-label="${isVi ? "Tiến độ học tập" : "学习进度"}">
        <div class="${homeDesktopProfileClass}" ${homeDesktopProfileAttrs}>
          <div class="home-desktop-avatar">${avatarHTML}</div>
          <div class="home-desktop-profile-copy">
            <p>${isVi ? "Xin chào!" : "你好！"}</p>
            <strong>${escapeHtml(desktopProfileName)}</strong>
            ${vipMetaHTML}
          </div>
          <span class="home-desktop-level-badge">${escapeHtml(accountTypeLabel)}</span>
          ${state.user ? `
            <div class="home-desktop-membership-panel">
              <span class="home-desktop-membership-kicker">${escapeHtml(homeDesktopMemberKicker)}</span>
              <strong>${escapeHtml(homeDesktopMemberTitle)}</strong>
              ${hasActiveVip ? `<small>${escapeHtml(homeDesktopMemberStatus)}</small>` : ""}
              ${hasActiveVip && vipDisplay.expiry ? `<small class="home-desktop-membership-expiry">${escapeHtml(vipDisplay.expiry)}</small>` : ""}
              <div class="home-desktop-membership-perks">
                ${hasActiveVip ? `
                  <span>${isVi ? "Không giới hạn" : "不限量"}</span>
                  <span>${isVi ? "Nội dung độc quyền" : "专属内容"}</span>
                ` : `
                  <span>${isVi ? "Chưa mở VIP" : "未开通 VIP"}</span>
                  <button class="home-desktop-membership-chip" type="button" data-home-profile-vip="upgrade">${isVi ? "Có thể nâng cấp ngay" : "可立即升级"}</button>
                `}
              </div>
            </div>
          ` : ""}
        </div>

        <div class="home-desktop-streak-card">
          <div>
            <span>${isVi ? "Chuỗi ngày" : "连续天数"}</span>
            <strong>${stats.streakDays} ${isVi ? "ngày" : "天"}</strong>
          </div>
          <span class="home-desktop-streak-icon" aria-hidden="true">👑</span>
        </div>

        ${renderHomeTodayStudyCardHTML(isVi)}
      </aside>
    </div>
  `;
}

function renderHomeMobileTopbarHTML(isVi) {
  const stats = getHomeDashboardStats();
  const isGuest = !state.user;
  const userName = state.user?.fullName || (isVi ? "Chưa đăng nhập" : "未登录");
  const userInitial = String(userName).charAt(0).toUpperCase();
  const avatarUrl = getAccountAvatarUrl();
  const avatarHTML = avatarUrl
    ? `<img src="${escapeAttr(avatarUrl)}" alt="${escapeAttr(userName)}" />`
    : isGuest
      ? `<img src="assets/default-guest-avatar.png" alt="${escapeAttr(userName)}" />`
      : escapeHtml(userInitial);
  const streakLabel = isVi ? "Học liên tục" : "连续学习";
  const dayUnit = isVi ? "ngày" : "天";
  const cheer = isVi ? "Tuyệt vời!" : "太棒了！";
  const vipDisplay = getVipPlanDisplay(state.user, isVi);

  return `
    <header class="home-mobile-topbar" aria-label="${isVi ? "Tiêu đề trang chủ" : "首页标题"}">
      <div class="home-mobile-topbar-streak">
        <span class="home-mobile-topbar-crown" aria-hidden="true">👑</span>
        <span class="home-mobile-topbar-streak-label">${streakLabel}</span>
        <strong class="home-mobile-topbar-streak-days">
          ${stats.streakDays}<span>${dayUnit}</span>
        </strong>
        <span class="home-mobile-topbar-streak-cheer">
          ${cheer}<span class="home-mobile-topbar-streak-arrow" aria-hidden="true">↗</span>
        </span>
      </div>

      <div class="home-mobile-topbar-brand">
        <h1>
          ${isVi
      ? `Luyện gõ<br>tiếng <span class="home-mobile-topbar-accent">Trung</span>`
      : `中文<br><span class="home-mobile-topbar-accent">拼打</span>`}
        </h1>
        <p>${isVi ? "Gõ đúng – Nhớ lâu" : "拼得准 · 记得牢"}</p>
      </div>

      <div class="home-mobile-topbar-profile${isGuest ? " home-mobile-topbar-profile--guest" : ""}" ${isGuest ? "data-home-login" : ""}>
        <div class="home-mobile-topbar-avatar${isGuest ? " home-mobile-topbar-avatar--guest" : ""}">${avatarHTML}</div>
        ${isGuest ? "" : `<p class="home-mobile-topbar-greet">${escapeHtml(userName)}</p>`}
        ${isGuest ? "" : `<span class="home-mobile-topbar-level">
          ${isVi ? "Học viên" : "学员"}
          <span class="home-mobile-topbar-level-badge">
            <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.2 4.8 5.3.7-3.8 3.7.9 5.3-4.6-2.5-4.6 2.5.9-5.3L4.5 7.5l5.3-.7L12 2z"/>
            </svg>
            ${escapeHtml(state.user?.role === "employee" ? (isVi ? "Nhân viên" : "员工") : vipDisplay.badge)}
          </span>
          <small>${escapeHtml(vipDisplay.status)}${vipDisplay.expiry ? ` · ${escapeHtml(vipDisplay.expiry)}` : ""}</small>
        </span>`}
      </div>
    </header>
  `;
}

function renderHomeMobilePromoBannerHTML(isVi) {
  return `
    <section class="home-mobile-promo-banner" aria-label="${isVi ? "Học tiếng Trung" : "学习中文"}">
      <img
        class="home-mobile-promo-banner-img"
        src="assets/home-mobile-promo-banner.png"
        alt="${isVi ? "Học tiếng Trung - Giao tiếp tự tin, mở rộng tương lai" : "学习中文 - 自信交流，拓展未来"}"
      />
    </section>
  `;
}

function renderHomeMobileModulesHTML(isVi) {
  return `
    <section class="home-mobile-modules" aria-label="${isVi ? "Khóa học nhanh" : "快捷课程"}">
      <div class="home-mobile-modules-grid">
        <article class="home-mobile-module-card home-mobile-module-card--hsk" data-home-module="hsk" role="button" tabindex="0">
          <img class="home-mobile-module-cover" src="assets/home-module-hsk-optimized.jpg" alt="" />
          <div class="home-mobile-module-content">
            <div class="home-mobile-module-copy">
              <h3>HSK</h3>
              <p>${isVi ? "Bài học theo cấp độ" : "分级课程"}</p>
            </div>
            <button type="button" class="home-mobile-module-btn" data-home-module="hsk">
              ${isVi ? "Bắt đầu học" : "开始学习"}
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </article>

        <article class="home-mobile-module-card home-mobile-module-card--daily" data-home-module="daily" role="button" tabindex="0">
          <img class="home-mobile-module-cover" src="assets/home-module-daily-optimized.jpg" alt="" />
          <div class="home-mobile-module-content">
            <div class="home-mobile-module-copy">
              <h3>${isVi ? "Giao tiếp" : "交际"}</h3>
              <p>${isVi ? "Luyện nói & viết" : "听说读写"}</p>
            </div>
            <button type="button" class="home-mobile-module-btn" data-home-module="daily">
              ${isVi ? "Vào luyện tập" : "进入练习"}
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </article>

        <article class="home-mobile-module-card home-mobile-module-card--vocab" data-home-module="vocab" role="button" tabindex="0">
          <img class="home-mobile-module-cover" src="assets/home-module-vocab-optimized.jpg" alt="" />
          <div class="home-mobile-module-content">
            <div class="home-mobile-module-copy">
              <h3>${isVi ? "Từ vựng đã lưu" : "收藏生词"}</h3>
              <p>${isVi ? "Ôn tập từ yêu thích" : "复习收藏词"}</p>
            </div>
            <button type="button" class="home-mobile-module-btn" data-home-module="vocab">
              ${isVi ? "Xem danh sách" : "查看列表"}
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderHomeMobileSavedVocabHTML(isVi) {
  const savedItems = Array.from(state.saved)
    .map((hanzi) => ({ hanzi, ...findItemByHanzi(hanzi) }))
    .filter((item) => item && item.hanzi)
    .slice(0, 4);

  return `
    <section class="home-mobile-saved-section" aria-label="${isVi ? "Từ vựng đã lưu" : "收藏生词"}">
      <div class="home-mobile-saved-head">
        <h2><span class="saved-heading-star">★</span> ${isVi ? "Từ vựng đã lưu" : "收藏生词"}</h2>
        <button type="button" class="home-mobile-saved-link" data-home-module="vocab">
          ${isVi ? "Xem tất cả" : "查看全部"} <span aria-hidden="true">›</span>
        </button>
      </div>
      ${savedItems.length ? `
        <div class="home-mobile-saved-grid">
          ${savedItems.map((item) => `
            <article class="home-mobile-vocab-card" data-vocab-hanzi="${escapeAttr(item.hanzi)}">
              <button type="button" class="home-mobile-vocab-star" aria-label="${isVi ? "Đã lưu" : "已收藏"}">★</button>
              <div class="home-mobile-vocab-body">
                <strong class="home-mobile-vocab-hanzi">${escapeHtml(item.hanzi)}</strong>
                <p class="home-mobile-vocab-pinyin">${escapeHtml(item.tone || item.pinyin || "")}</p>
                <p class="home-mobile-vocab-meaning">${escapeHtml(item.vi || "")}</p>
              </div>
              <button type="button" class="home-mobile-vocab-speak vocab-speak-btn" aria-label="${isVi ? "Phát âm" : "朗读"}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>
                </svg>
              </button>
            </article>
          `).join("")}
        </div>
      ` : `
        <div class="home-mobile-saved-empty">
          ${isVi ? "Chưa có từ vựng đã lưu. Hãy lưu từ khi luyện tập để ôn lại tại đây." : "还没有收藏生词。练习时收藏词汇即可在这里复习。"}
        </div>
      `}
    </section>
  `;
}

function renderHomeMobileChallengeHTML(isVi) {
  const challengeChar = "进";
  return `
    <section class="home-mobile-challenge" aria-label="${isVi ? "Thử thách viết mỗi ngày" : "每日书写挑战"}">
      <img
        class="home-mobile-challenge-cover"
        src="assets/home-desktop-challenge.png"
        alt="${isVi ? `Thử thách viết mỗi ngày - Viết chữ ${challengeChar} 10 lần thật đẹp` : `每日书写挑战 - 把“${challengeChar}”写 10 遍`}"
        loading="lazy"
      />
    </section>
  `;
}

function renderHomeMobileTopicsHTML(isVi, limit = 6) {
  const topics = dailyThemes.slice(0, limit);
  return `
    <section class="home-mobile-topics-section" aria-label="${isVi ? "Chủ đề" : "主题"}">
      <div class="home-mobile-topics-head">
        <h2>${isVi ? "Chủ đề" : "主题"}</h2>
        <button type="button" class="home-mobile-topics-link" data-home-module="daily">
          ${isVi ? "Xem tất cả" : "查看全部"} <span aria-hidden="true">›</span>
        </button>
      </div>
      <div class="home-mobile-topics-list">
        ${topics.map((theme, index) => {
    const config = getDailyFeaturedThemeConfig(theme);
    const title = isVi ? config.titleVi : config.titleZh;
    const zhText = config.zhLabel || theme.zh || title;
    const pinyin = config.pinyin || "";
    const itemCount = Array.isArray(theme.items) ? theme.items.length : 0;
    const minutes = Math.max(2, Math.min(5, Math.ceil(itemCount / 2) + 2));
    const level = index === 2 ? (isVi ? "Dễ" : "简单") : `HSK ${index % 2 === 0 ? 1 : 2}`;
    const locked = isDailyThemeLockedForUser(theme.id);
    return `
            <article class="home-mobile-topic-card${locked ? " is-locked" : ""}" data-home-topic="${escapeAttr(theme.id)}" role="button" tabindex="0">
              <span class="home-mobile-topic-index home-mobile-topic-index--${(index % 6) + 1}">${index + 1}</span>
              <img class="home-mobile-topic-cover" src="${escapeAttr(config.cover)}" alt="" loading="lazy" />
              <div class="home-mobile-topic-body">
                <h3>${escapeHtml(title)}</h3>
                <p class="home-mobile-topic-zh">
                  <strong>${escapeHtml(zhText)}</strong>
                  ${pinyin ? `<span>${escapeHtml(pinyin)}</span>` : ""}
                </p>
                <div class="home-mobile-topic-meta">
                  <span class="home-mobile-topic-level">${escapeHtml(level)}</span>
                  <span class="home-mobile-topic-time">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                    ${minutes} ${isVi ? "phút" : "分钟"}
                  </span>
                  <span>${itemCount || 4} ${isVi ? "mục học" : "项"}</span>
                </div>
              </div>
              <button type="button" class="home-mobile-topic-start" data-home-topic="${escapeAttr(theme.id)}">${isVi ? "Vào học" : "开始"}</button>
              <span class="home-mobile-topic-chevron" aria-hidden="true">›</span>
            </article>
          `;
  }).join("")}
      </div>
    </section>
  `;
}

function renderHome() {
  const isVi = state.lang === "vi";
  screens.home.innerHTML = `
    ${wrapWithAppDesktopShell(renderHomeDesktopLayoutHTML(isVi), "app-desktop-shell--home", "home")}

    <div class="home-legacy-mobile">
    ${renderHomeMobileTopbarHTML(isVi)}
    ${renderHomeMobilePromoBannerHTML(isVi)}
    <!-- Hero Section -->
    <section class="redesigned-home hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            ${isVi
      ? `Học tiếng Trung<br>dễ dàng cùng<br><span class="hero-highlight">lộ trình rõ ràng<span class="highlight-line" aria-hidden="true"></span></span>`
      : `轻松学习中文<br>搭配清晰<br><span class="hero-highlight">学习路线<span class="highlight-line" aria-hidden="true"></span></span>`}
          </h1>

          <p class="hero-subtitle">
            ${isVi
      ? "Khóa học bài bản cho người mới bắt đầu đến nâng cao, giúp bạn tự tin giao tiếp, học HSK và ứng dụng trong công việc."
      : "从入门到进阶的系统课程，帮助你自信交流、备考 HSK，并应用到工作中。"}
          </p>
          <div class="hero-buttons">
            <button id="heroStartBtn" class="btn-hero-primary" type="button">
              ${isVi ? "Bắt đầu học ngay" : "立即开始学习"} <span class="arrow-icon">›</span>
            </button>
          </div>
        </div>
          <div class="hero-visual-box">
            <div class="hero-visual-bg" aria-hidden="true"></div>
            <div class="hero-media-card">
              <img src="assets/hero_illustration.png" class="hero-main-img" alt="Học tiếng Trung" />
            </div>
        </div>
    </section>

    ${renderHomeMobileModulesHTML(isVi)}
    ${renderHomeMobileSavedVocabHTML(isVi)}
    ${renderHomeMobileChallengeHTML(isVi)}
    ${renderHomeMobileTopicsHTML(isVi)}
    </div>
  `;
  scheduleScreenMediaOptimization(screens.home);
  scheduleIdleImagePreload();
}

function renderCourse(options = {}) {
  if (!options.skipHighFrequencyLoad && shouldLoadHighFrequencyTopicsForCourse()) {
    renderHighFrequencyTopicsLoading(options);
    ensureHighFrequencyTopicsLoaded({ silent: options.silentHighFrequencyLoad }).then(() => {
      const courseVisible = state.screen === "course" || !screens.course?.classList.contains("hidden");
      if (courseVisible) renderCourse({ ...options, skipHighFrequencyLoad: true });
    });
    return;
  }
  if (state.module === "hsk") renderHskCourse();
  else renderDailyCourse();
}

function backToHskLevelPicker() {
  state.module = "hsk";
  state.writeCourseView = "hsk";
  state.hskLevelPicker = true;
  state.hskPendingLessonId = "";
  state.hskContentType = "";
  renderHskCourse();
}

function backToWriteCommunicationCourse() {
  state.module = "hsk";
  state.writeCourseView = "communication";
  state.hskLevelPicker = false;
  state.hskPendingLessonId = "";
  state.hskContentType = "";
  state.dailyPendingThemeId = "";
  state.dailyContentType = "";
  state.dailyBackTarget = "";
  renderHskCourse();
}

function backToDailyThemeList() {
  if (state.dailyBackTarget === "write-communication") {
    backToWriteCommunicationCourse();
    return;
  }
  state.module = "daily";
  state.dailyPendingThemeId = "";
  state.dailyContentType = "";
  state.dailyBackTarget = "";
  renderDailyCourse();
}

function backFromPracticeToCourse() {
  clearScheduledPracticeSpeak();
  stopSpeechPlayback();
  if (state.module === "daily" && state.dailyBackTarget === "write-communication") {
    backToWriteCommunicationCourse();
    return;
  }
  renderCourse();
  setScreen("course");
}

function handleMobilePageBack() {
  if (state.screen === "listening") {
    if (state.listeningView === "detail") {
      state.listeningView = state.listeningBackTarget === "lessons" ? "lessons" : "dashboard";
      state.listeningBackTarget = "";
      renderListening();
      scrollAppToTop();
      return;
    }

    if (state.listeningView === "lessons") {
      state.listeningView = state.listeningLessonsBackTarget || "levels";
      state.listeningLessonsBackTarget = "levels";
      state.listeningSeedEpisodeId = "";
      renderListening();
      scrollAppToTop();
      return;
    }

    if (state.listeningView === "dashboard") {
      state.listeningView = "levels";
      renderListening();
      scrollAppToTop();
      return;
    }

    navigatePrimaryTab("home");
    return;
  }

  if (state.screen === "course") {
    if (state.module === "hsk" && state.writeCourseView === "communication") {
      state.writeCourseView = "paths";
      state.hskLevelPicker = true;
      renderHskCourse();
      scrollAppToTop();
      return;
    }

    if (state.module === "hsk" && state.writeCourseView === "hsk" && state.hskLevelPicker) {
      state.writeCourseView = "paths";
      renderHskCourse();
      scrollAppToTop();
      return;
    }

    if (state.module === "daily" && state.dailyPendingThemeId) {
      backToDailyThemeList();
      scrollAppToTop();
      return;
    }

    if (state.module === "hsk" && !state.hskLevelPicker) {
      if (state.hskPendingLessonId) {
        state.hskPendingLessonId = "";
        state.hskContentType = "";
        renderHskCourse();
      } else {
        backToHskLevelPicker();
      }
      scrollAppToTop();
      return;
    }
  }

  navigatePrimaryTab("home");
}

function renderHskLessonListHTML(options = {}) {
  const isVi = state.lang === "vi";
  const excludeLessonId = options.excludeLessonId || "";
  const emptyMessage = options.emptyMessage || (isVi ? "Không tìm thấy bài học nào phù hợp." : "未找到符合的课程。");
  let filteredLessons = hskLevels[state.level].map((lessonItem, index) => ({ lessonItem, index }));

  if (excludeLessonId) {
    filteredLessons = filteredLessons.filter(({ lessonItem }) => lessonItem.id !== excludeLessonId);
  }

  if (state.hskSearchQuery.trim()) {
    const query = normalizeLatin(state.hskSearchQuery.trim());
    filteredLessons = filteredLessons.filter(({ lessonItem }) => {
      const matchNo = `bai ${lessonItem.no}`.includes(query);
      const matchVi = normalizeLatin(lessonItem.titleVi || lessonItem.title).includes(query);
      const matchZh = normalizeLatin(lessonItem.titleZh || lessonItem.title).includes(query);
      return matchNo || matchVi || matchZh;
    });
  }

  if (state.hskFilterTab === "completed") {
    filteredLessons = filteredLessons.filter(({ lessonItem }) => state.completed.has(lessonItem.id));
  }

  return filteredLessons.length > 0 ? filteredLessons.map(({ lessonItem }) => {
    const isCompleted = state.completed.has(lessonItem.id);
    const accessStatus = getHskLessonAccessStatus(lessonItem.id);
    const isLocked = accessStatus === "locked";
    const wordCount = hskLessonItemsByType(lessonItem, "word").length;
    const sentenceCount = hskLessonItemsByType(lessonItem, "sentence").length;

    let progressIndicator = "";
    if (isCompleted) {
      progressIndicator = `<span class="lesson-check-badge">✓</span>`;
    } else if (lessonItem.id === "hsk2-l3") {
      progressIndicator = `
        <div class="lesson-radial-progress">
          <div class="lesson-radial-inner">45%</div>
        </div>
      `;
    }

    return `
      <div class="hsk-lesson-card access-rule-${accessStatus} ${isCompleted ? "completed" : ""} ${isLocked ? "locked" : ""}" data-lesson="${lessonItem.id}" ${isLocked ? 'data-locked="true"' : ""}>
        <div class="hsk-lesson-left">
          <div class="hsk-lesson-number${isLocked ? " hsk-lesson-number--locked" : ""}">${lessonItem.no}</div>
          <div class="hsk-lesson-info">
            <h4>
              <span>${isVi ? `Bài ${lessonItem.no}` : `第 ${lessonItem.no} 课`}</span>
            </h4>
            <p>${state.lang === "vi" ? (lessonItem.titleVi || lessonItem.title) : (lessonItem.titleZh || lessonItem.title)}</p>
          </div>
        </div>
        
        <div class="hsk-lesson-center">
          ${progressIndicator}
        </div>
        
        <div class="hsk-lesson-right">
          <span class="hsk-items-count hsk-items-count--word">${wordCount} ${isVi ? "từ vựng" : "生词"}</span>
          <span class="hsk-items-count hsk-items-count--phrase">${sentenceCount} ${isVi ? "câu" : "句子"}</span>
          ${isLocked ? "" : `<button class="hsk-lesson-arrow-btn" type="button" aria-label="${isVi ? "Luyện tập" : "练习"}">›</button>`}
        </div>
      </div>
    `;
  }).join("") : `
    <div class="hsk-no-results">
      ${emptyMessage}
    </div>
  `;
}

function renderHskRemainingLessonsHTML(currentLesson) {
  const isVi = state.lang === "vi";
  if (!currentLesson) return "";
  return `
    <section class="hsk-remaining-lessons">
      <div class="hsk-remaining-lessons-heading">
        <h3>${isVi ? "Các bài còn lại" : "其他课程"}</h3>
        <span>${isVi ? `${state.level} · chọn nhanh bài khác` : `${state.level} · 快速选择其他课程`}</span>
      </div>
      <div class="hsk-lessons-list hsk-lessons-list--remaining">
        ${renderHskLessonListHTML({
    excludeLessonId: currentLesson.id,
    emptyMessage: isVi ? "Không còn bài học nào khác trong cấp độ này." : "该等级没有其他课程。",
  })}
      </div>
    </section>
  `;
}

function renderHskContentTypePickerHTML(lessonItem = getHskPendingLesson()) {
  const isVi = state.lang === "vi";
  if (!lessonItem) return "";
  return `
    <div class="hsk-study-part-grid">
      ${hskContentTypes.map((contentType) => {
    const itemsCount = hskLessonItemsByType(lessonItem, contentType.id).length;
    const active = state.hskContentType === contentType.id;
    const accessStatus = getHskContentTypeAccessStatus(lessonItem.id, contentType.id);
    const isLocked = accessStatus === "locked";
    const disabled = itemsCount === 0;
    const isWord = contentType.id === "word";
    return `
          <button class="hsk-study-part-card hsk-study-part-card--${isWord ? "word" : "sentence"} access-rule-${accessStatus} ${isLocked ? "locked" : ""} ${active ? "active" : ""}" data-hsk-content-type="${contentType.id}" ${isLocked ? 'data-locked="true"' : ""} type="button" ${disabled ? "disabled" : ""}>
            <span class="hsk-study-part-copy">
              ${accessStatusBadgeHTML(accessStatus)}
              <strong>${isWord ? (isVi ? "Từ vựng và Cụm Từ" : "词汇") : (isVi ? "Câu" : "句子")}</strong>
              <small>${itemsCount} ${isWord ? (isVi ? "từ vựng + cụm từ" : "词") : (isVi ? "câu" : "句")}</small>
              <em>${isWord ? `${iconSvg("book-open")} ${isVi ? "Sẵn sàng học" : "准备学习"}` : `${iconSvg("message")} ${itemsCount} ${isVi ? "mục" : "项"}`}</em>
            </span>
            <span class="hsk-study-part-art" aria-hidden="true">
              ${isWord ? `
                <i class="hsk-word-book">生<br>词<br>本</i>
                <i class="hsk-word-card hsk-word-card-main">词<b>cí</b></i>
                <i class="hsk-word-card hsk-word-card-back">旅<b>lǚ</b></i>
              ` : `
                <i class="hsk-sentence-chat">•••</i>
                <i class="hsk-sentence-strip hsk-sentence-strip-a">你去哪儿？</i>
                <i class="hsk-sentence-strip hsk-sentence-strip-b">我去图书馆。</i>
                <i class="hsk-sentence-pencil"></i>
              `}
            </span>
            <span class="hsk-study-part-arrow" aria-hidden="true">${iconSvg("arrow-right")}</span>
          </button>
        `;
  }).join("")}
    </div>
  `;
}

const hskLevelCards = [
  { level: "HSK1", vi: "Sơ cấp", zh: "初级", descVi: "Giao tiếp sinh hoạt hàng ngày", descZh: "日常生活交流" },
  { level: "HSK2", vi: "Sơ cấp", zh: "初级", descVi: "Từ vựng và mẫu câu nền tảng", descZh: "基础词汇和句型" },
  { level: "HSK3", vi: "Sơ cấp", zh: "初级", descVi: "Diễn đạt chủ đề quen thuộc", descZh: "表达熟悉话题" },
  { level: "HSK4", vi: "Trung cấp", zh: "中级", descVi: "Giao tiếp linh hoạt hơn", descZh: "更灵活地交流" },
  { level: "HSK5", vi: "Cao cấp", zh: "高级", descVi: "Đọc hiểu và thảo luận mở rộng", descZh: "阅读理解与讨论" },
  { level: "HSK6", vi: "Cao cấp", zh: "高级", descVi: "Nâng cao phản xạ ngôn ngữ", descZh: "提升语言反应" },
];

function renderHskLevelPickerHTML() {
  const isVi = state.lang === "vi";
  return `
    <section class="hsk-level-picker">
<div class="hsk-level-hero">
        <button class="hsk-level-hero-back-btn" type="button" data-hsk-level-picker-back aria-label="${isVi ? "Quay lại trang chủ" : "返回首页"}">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <img src="assets/hsk-level-hero-optimized.jpg" alt="" aria-hidden="true" />
      </div>

      <div class="hsk-level-grid">
        ${hskLevelCards.map((card) => {
    const isActive = card.level === state.level;
    const lessonCount = hskLevels[card.level]?.length || 30;
    const status = isActive ? (isVi ? "Đang học" : "学习中") : (isVi ? "Bắt đầu" : "开始");
    const levelKey = card.level.toLowerCase();
    return `
          <button class="hsk-level-card hsk-level-card--${levelKey} ${isActive ? "active" : ""}" data-level="${card.level}" type="button">
            <img class="hsk-level-card-art" src="${escapeAttr(getHskLevelCoverUrl(card.level))}" alt="" aria-hidden="true" />
            <span class="hsk-level-card-inner">
              <span class="hsk-level-card-top">
                <span class="hsk-level-card-badge">${card.level}</span>
                <small class="hsk-level-card-count">${lessonCount} ${isVi ? "bài" : "课"}</small>
              </span>
              <span class="hsk-level-card-content">
                <span class="hsk-level-card-title">${isVi ? card.vi : card.zh}</span>
                <span class="hsk-level-card-desc">${isVi ? card.descVi : card.descZh}</span>
                <span class="hsk-level-status"><i>${iconSvg("bar-chart")}</i>${status}</span>
              </span>
              <span class="hsk-level-arrow" aria-hidden="true">${iconSvg("arrow-right")}</span>
            </span>
          </button>
        `;
  }).join("")}
      </div>
    </section>
  `;
}

function renderWritePathPickerHTML() {
  const isVi = state.lang === "vi";
  const totalHskLessons = Object.values(hskLevels).reduce((sum, lessons) => sum + lessons.length, 0);
  const communicationCount = dailyThemes.length;
  const hskSelectorDetails = {
    HSK1: { vi: "Nhập môn Hán tự", zh: "初入汉字" },
    HSK2: { vi: "Giao tiếp cơ bản", zh: "中心与语" },
    HSK3: { vi: "Trung cấp nền tảng", zh: "中心英语" },
    HSK4: { vi: "Cốt lõi chữ và câu", zh: "核心与字语" },
    HSK5: { vi: "Đọc hiểu nâng cao", zh: "进阶阅读" },
    HSK6: { vi: "Diễn đạt chuyên sâu", zh: "中心英语" },
  };
  const hskSelectorRows = hskLevelCards.map((card, index) => {
    const lessons = hskLevels[card.level] || [];
    const completedLessons = lessons.filter((lessonItem) => state.completed.has(lessonItem.id)).length;
    const progress = lessons.length ? Math.round((completedLessons / lessons.length) * 100) : 0;
    const detail = hskSelectorDetails[card.level] || { vi: card.vi, zh: card.zh };
    const levelNumber = String(card.level).replace("HSK", "");
    const isActive = card.level === state.level;
    return `
          <button class="write-hsk-level-row write-hsk-level-row--${card.level.toLowerCase()} ${isActive ? "active" : ""}" type="button" data-write-hsk-level="${card.level}" style="--hsk-row-progress: ${progress}%; --hsk-row-index: ${index};" aria-label="${escapeAttr(isVi ? `Mở danh sách bài học ${card.level}` : `打开 ${card.level} 课程列表`)}">
            <span class="write-hsk-row-level">HSK ${levelNumber}</span>
            <span class="write-hsk-row-copy">
              <strong>${isVi ? detail.vi : detail.zh}</strong>
              <i aria-hidden="true"></i>
            </span>
            <span class="write-hsk-row-arrow" aria-hidden="true">${iconSvg("arrow-right")}</span>
          </button>
    `;
  }).join("");
  const communicationTopicCards = dailyThemes.map((theme, index) => {
    const config = getDailyFeaturedThemeConfig(theme);
    const title = isVi ? config.titleVi : config.titleZh;
    const desc = isVi ? config.descVi : config.descZh;
    const count = Array.isArray(theme.items) ? theme.items.length : 0;
    const isLocked = isDailyThemeLockedForUser(theme.id);
    return `
          <button class="write-communication-topic-card write-communication-topic-card--${config.tone} ${isLocked ? "locked" : ""}" type="button" data-write-daily-theme="${theme.id}" style="--topic-index: ${index};" aria-label="${escapeAttr(isVi ? `Mở chủ đề ${title}` : `打开主题 ${title}`)}">
            <span class="write-communication-topic-cover">
              <img src="${config.cover}" alt="" aria-hidden="true" draggable="false" />
            </span>
            <span class="write-communication-topic-copy">
              <strong>${title}</strong>
              <small>${desc}</small>
            </span>
            <span class="write-communication-topic-count">${count} ${isVi ? "mục" : "项"}</span>
          </button>
    `;
  }).join("");
  return `
    <section class="write-path-picker">
      <div class="hsk-level-hero write-path-hero">
        <button class="hsk-level-hero-back-btn" type="button" data-hsk-level-picker-back aria-label="${isVi ? "Quay lại trang chủ" : "返回首页"}">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <img src="assets/hsk-level-hero-optimized.jpg" alt="" aria-hidden="true" />
      </div>

      <div class="write-path-grid" aria-label="${isVi ? "Chọn lộ trình luyện viết" : "选择练写路径"}">
        <article class="write-path-card write-path-card--hsk write-path-card--hsk-selector" aria-label="${escapeAttr(isVi ? "Chọn cấp độ HSK" : "选择 HSK 等级")}">
          <span class="write-hsk-selector-head">
            <span class="write-path-card-kicker">HSK</span>
            <strong>${isVi ? "Khóa HSK" : "HSK 课程"}</strong>
            <small>${isVi ? "Chọn nhanh cấp độ để vào thẳng danh sách bài học." : "快速选择等级，直接进入课程列表。"}</small>
            <em>${totalHskLessons || 122} ${isVi ? "bài học" : "课"}</em>
          </span>
          <button class="write-path-card-arrow write-hsk-mode-btn" type="button" data-write-path="hsk" aria-label="${escapeAttr(isVi ? "Chọn chế độ HSK" : "选择 HSK 模式")}">${iconSvg("arrow-right")}</button>
          <span class="write-hsk-level-stack">
            ${hskSelectorRows}
          </span>
        </article>

        <article class="write-path-card write-path-card--communication write-path-card--communication-selector" aria-label="${escapeAttr(isVi ? "Chọn chủ đề tiếng Trung thông dụng" : "选择高频汉语主题")}">
          <span class="write-path-card-art" aria-hidden="true">
            <img src="assets/daily-theme-greeting-yellow.png" alt="" />
          </span>
          <span class="write-path-card-copy">
            <span class="write-path-card-kicker">${isVi ? "Giao tiếp" : "交际"}</span>
            <strong>${isVi ? "Tiếng Trung thông dụng" : "高频汉语"}</strong>
            <small>${isVi ? "Chủ đề giao tiếp thường dùng, trình bày dạng desktop." : "常用交际主题，桌面版卡片展示。"}</small>
            <em>${communicationCount} ${isVi ? "chủ đề" : "个主题"}</em>
          </span>
          <button class="write-path-card-arrow write-communication-mode-btn" type="button" data-write-path="communication" aria-label="${escapeAttr(isVi ? "Xem toàn bộ chủ đề giao tiếp" : "查看全部交际主题")}">${iconSvg("arrow-right")}</button>
          <span class="write-communication-topic-carousel" aria-label="${escapeAttr(isVi ? "Danh sách chủ đề giao tiếp" : "交际主题列表")}">
              ${communicationTopicCards}
          </span>
          <button class="write-communication-topic-nav write-communication-topic-nav--prev" type="button" data-write-topic-scroll="prev" aria-label="${escapeAttr(isVi ? "Kéo chủ đề sang trái" : "Scroll topics left")}">${iconSvg("arrow-left")}</button>
          <button class="write-communication-topic-nav write-communication-topic-nav--next" type="button" data-write-topic-scroll="next" aria-label="${escapeAttr(isVi ? "Kéo chủ đề sang phải" : "Scroll topics right")}">${iconSvg("arrow-right")}</button>
          <span class="write-communication-selector-footer">
            <button class="write-communication-explore-btn" type="button" data-write-path="communication">${isVi ? "Khám phá chủ đề" : "探索主题"}</button>
          </span>
        </article>
      </div>

      <div class="write-feature-grid" aria-label="${isVi ? "Công cụ luyện viết" : "练写工具"}">
        <article class="write-feature-card write-feature-card--vocab write-feature-card--decorative">
          <span class="write-feature-art" aria-hidden="true">
            <img src="assets/icontuvungluỵenviet.png" alt="" />
          </span>
          <span class="write-feature-copy">
            <strong>${isVi ? "Từ vựng" : "词汇"}</strong>
            <small>${isVi ? "Học từ vựng theo chủ đề và ghi nhớ hiệu quả." : "按主题学习词汇，记得更牢。"}</small>
            <span class="write-feature-progress" aria-hidden="true"><i></i><em>320 / 800 ${isVi ? "từ" : "词"}</em></span>
          </span>
          <span class="write-feature-arrow write-feature-status" aria-hidden="true"><span></span></span>
        </article>

        <article class="write-feature-card write-feature-card--speaking write-feature-card--decorative">
          <span class="write-feature-art" aria-hidden="true">
            <img src="assets/iconnghenoi.png" alt="" />
          </span>
          <span class="write-feature-copy">
            <strong>${isVi ? "Nghe nói" : "听说"}</strong>
            <small>${isVi ? "Luyện nghe và nói mỗi ngày, giao tiếp tự nhiên hơn." : "每天练听说，交流更自然。"}</small>
            <span class="write-feature-progress" aria-hidden="true"><i></i><em>15 / 50 ${isVi ? "bài" : "课"}</em></span>
          </span>
          <span class="write-feature-arrow write-feature-status" aria-hidden="true"><span></span></span>
        </article>

        <article class="write-feature-card write-feature-card--grammar write-feature-card--decorative">
          <span class="write-feature-art" aria-hidden="true">
            <img src="assets/iconnguphap.png" alt="" />
          </span>
          <span class="write-feature-copy">
            <strong>${isVi ? "Ngữ pháp" : "语法"}</strong>
            <small>${isVi ? "Nắm vững cấu trúc ngữ pháp qua ví dụ thực tế." : "通过真实例句掌握语法结构。"}</small>
            <span class="write-feature-progress" aria-hidden="true"><i></i><em>24 / 60 ${isVi ? "bài" : "课"}</em></span>
          </span>
          <span class="write-feature-arrow write-feature-status" aria-hidden="true"><span></span></span>
        </article>

        <article class="write-feature-card write-feature-card--review write-feature-card--decorative">
          <span class="write-feature-art" aria-hidden="true">
            <img src="assets/iconontap.png" alt="" />
          </span>
          <span class="write-feature-copy">
            <strong>${isVi ? "Ôn tập" : "复习"}</strong>
            <small>${isVi ? "Ôn lại kiến thức và củng cố để ghi nhớ lâu hơn." : "复习旧知识，巩固长期记忆。"}</small>
            <span class="write-feature-progress" aria-hidden="true"><i></i><em>120 / 200 ${isVi ? "bài" : "课"}</em></span>
          </span>
          <span class="write-feature-arrow write-feature-status" aria-hidden="true"><span></span></span>
        </article>
      </div>
    </section>
  `;
}

function renderWriteCommunicationCourseHTML() {
  const isVi = state.lang === "vi";
  return `
    <section class="write-communication-screen">
      <div class="hsk-level-hero write-path-hero">
        <button class="hsk-level-hero-back-btn" type="button" data-write-path-back aria-label="${isVi ? "Quay lại chọn lộ trình" : "返回路径选择"}">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      <header class="write-communication-header">
        <button class="write-communication-header-back-btn" type="button" data-write-path-back aria-label="${isVi ? "Quay lại chọn lộ trình" : "返回路径选择"}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
            <path d="M20 12H9" />
          </svg>
          ${isVi ? "Quay lại" : "返回"}
        </button>
        <h1>${isVi ? "Tiếng Trung thông dụng" : "高频汉语"}</h1>
        <p>${isVi ? "Chọn một chủ đề giao tiếp để luyện từ vựng và câu thường dùng." : "选择一个交际主题，练习高频词汇和句子。"}</p>
      </header>

      <div class="daily-theme-grid write-communication-theme-grid">
        ${renderDailyThemesListHTML()}
      </div>
    </section>
  `;
}

function renderDailyContentTypePickerHTML(theme = getDailyPendingTheme()) {
  const isVi = state.lang === "vi";
  if (!theme) return "";
  return `
    <div class="hsk-study-part-grid daily-study-part-grid">
      ${hskContentTypes.map((contentType) => {
    const itemsCount = dailyThemeItemsByType(theme, contentType.id).length;
    const active = state.dailyContentType === contentType.id;
    const accessStatus = getDailyContentTypeAccessStatus(theme.id, contentType.id);
    const isLocked = accessStatus === "locked";
    const disabled = itemsCount === 0;
    const isWord = contentType.id === "word";
    return `
          <button class="hsk-study-part-card hsk-study-part-card--${isWord ? "word" : "sentence"} daily-study-part-card access-rule-${accessStatus} ${isLocked ? "locked" : ""} ${active ? "active" : ""}" data-daily-content-type="${contentType.id}" ${isLocked ? 'data-locked="true"' : ""} type="button" ${disabled ? "disabled" : ""}>
            <span class="hsk-study-part-copy">
              ${accessStatusBadgeHTML(accessStatus)}
              <strong>${isWord ? (isVi ? "Từ vựng" : "词汇") : (isVi ? "Câu" : "句子")}</strong>
              <small>${itemsCount} ${isWord ? (isVi ? "từ vựng" : "词") : (isVi ? "câu" : "句")}</small>
              <em>${isWord ? `${iconSvg("book-open")} ${isVi ? "Sẵn sàng học" : "准备学习"}` : `${iconSvg("message")} ${itemsCount} ${isVi ? "mục" : "项"}`}</em>
            </span>
            <span class="hsk-study-part-art" aria-hidden="true">
              ${isWord ? `
                <i class="hsk-word-book">生<br>词<br>本</i>
                <i class="hsk-word-card hsk-word-card-main">词<b>cí</b></i>
                <i class="hsk-word-card hsk-word-card-back">旅<b>lǚ</b></i>
              ` : `
                <i class="hsk-sentence-chat">•••</i>
                <i class="hsk-sentence-strip hsk-sentence-strip-a">你去哪儿？</i>
                <i class="hsk-sentence-strip hsk-sentence-strip-b">我去图书馆。</i>
                <i class="hsk-sentence-pencil"></i>
              `}
            </span>
            <span class="hsk-study-part-arrow" aria-hidden="true">${iconSvg("arrow-right")}</span>
          </button>
        `;
  }).join("")}
    </div>
  `;
}

function renderHskCourse() {
  if (state.writeCourseView === "paths") {
    setScreenWithDesktopShell("course", renderWritePathPickerHTML(), "app-desktop-shell--course app-desktop-shell--write-path", "hsk");
    return;
  }

  if (state.writeCourseView === "communication") {
    setScreenWithDesktopShell("course", renderWriteCommunicationCourseHTML(), "app-desktop-shell--course app-desktop-shell--write-communication", "hsk", {
      mobileTitle: state.lang === "vi" ? "Ti\u1ebfng Trung th\u00f4ng d\u1ee5ng" : "\u9ad8\u9891\u6c49\u8bed",
      hideMobileHeader: true,
    });
    return;
  }

  if (state.hskLevelPicker) {
    setScreenWithDesktopShell("course", renderHskLevelPickerHTML(), "app-desktop-shell--course", "hsk");
    return;
  }

  if (hskLevelContentScripts[state.level] && !hskLevelContentLoaded.has(state.level)) {
    setScreenWithDesktopShell("course", `
      <section class="hsk-lesson-screen hsk-lesson-screen--loading">
        <div class="hsk-lesson-panel">
          ${renderLessonLoadingHTML({ variant: "write" })}
        </div>
      </section>
    `, "app-desktop-shell--course", "hsk", { mobileTitle: state.level });
    ensureHskLevelContent(state.level).then(() => {
      if (state.module === "hsk" && !state.hskLevelPicker) renderHskCourse();
    });
    return;

    setScreenWithDesktopShell("course", `
      <section class="hsk-lesson-screen hsk-lesson-screen--loading">
        <div class="hsk-lesson-panel">
          <div class="hsk-no-results">${state.lang === "vi" ? "Đang tải dữ liệu bài học..." : "正在加载课程数据..."}</div>
        </div>
      </section>
    `, "app-desktop-shell--course", "hsk", { mobileTitle: state.level });
    ensureHskLevelContent(state.level).then(() => {
      if (state.module === "hsk" && !state.hskLevelPicker) renderHskCourse();
    });
    return;
  }

  const isVi = state.lang === "vi";
  const totalLessons = hskLevels[state.level].length;
  const completedLessonsInLevel = hskLevels[state.level].filter(l => state.completed.has(l.id)).length;
  const hskProgressPercent = totalLessons > 0 ? Math.round((completedLessonsInLevel / totalLessons) * 100) : 0;
  const totalItemsInLevel = hskLevels[state.level].reduce((acc, l) => acc + hskAllLessonItems(l).length, 0);
  const pendingLesson = getHskPendingLesson();
  const totalWordsInLevel = hskLevels[state.level].reduce((acc, lessonItem) => acc + hskLessonItemsByType(lessonItem, "word").length, 0);
  const totalSentencesInLevel = hskLevels[state.level].reduce((acc, lessonItem) => acc + hskLessonItemsByType(lessonItem, "sentence").length, 0);
  const heroTitle = pendingLesson
    ? (isVi ? "Chọn phần học" : "选择学习部分")
    : (isVi ? `Danh sách bài học ${state.level}` : `${state.level} 课程列表`);
  const mobileHeroTitle = pendingLesson
    ? (state.lang === "vi" ? (pendingLesson.titleVi || pendingLesson.title) : (pendingLesson.titleZh || pendingLesson.title))
    : state.level;
  const heroBackAttr = pendingLesson ? "data-hsk-back-lessons" : "data-hsk-level-back";
  const heroBackLabel = pendingLesson
    ? (isVi ? "Quay lại danh sách bài" : "返回课程列表")
    : (isVi ? "Quay lại chọn cấp độ" : "返回等级选择");

  setScreenWithDesktopShell("course", `
    <section class="hsk-lesson-screen hsk-lesson-screen--${String(state.level || "").toLowerCase()}">
      <div class="hsk-lesson-hero ${pendingLesson ? "hsk-lesson-hero--part" : "hsk-lesson-hero--level"}">
        <button class="hsk-lesson-back-btn" ${heroBackAttr} type="button" aria-label="${heroBackLabel}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1 data-mobile-title="${escapeAttr(mobileHeroTitle)}">${heroTitle}</h1>
        <div class="hsk-lesson-hero-art" aria-hidden="true">
          <span class="hsk-lesson-art-card">汉</span>
          <span class="hsk-lesson-art-book">写</span>
          <span class="hsk-lesson-art-pencil"></span>
        </div>
      </div>

      <div class="hsk-lesson-panel">
        ${pendingLesson ? `
          <div class="hsk-study-part-section">
            <div class="hsk-study-part-heading">
              <h2>${state.lang === "vi" ? (pendingLesson.titleVi || pendingLesson.title) : (pendingLesson.titleZh || pendingLesson.title)}</h2>
              <p>${state.level} · ${isVi ? `Bài ${pendingLesson.no}` : `第 ${pendingLesson.no} 课`}</p>
            </div>
            ${renderHskContentTypePickerHTML(pendingLesson)}
            ${renderHskRemainingLessonsHTML(pendingLesson)}
          </div>
        ` : `
          <div class="hsk-lesson-panel-header">
            <div class="hsk-lesson-title-group">
              <h2>${isVi ? `Danh sách bài học ${state.level}` : `${state.level} 课程列表`}</h2>
            </div>
          </div>

          <div class="hsk-lessons-list hsk-lessons-list--panel">
            ${renderHskLessonListHTML()}
          </div>
        `}
      </div>
    </section>
  `, "app-desktop-shell--course", "hsk", { mobileTitle: mobileHeroTitle });
  return;

  screens.course.innerHTML = `
    <section class="hsk-course-layout">
      <!-- Left Column: Sidebar -->
      <aside class="hsk-sidebar">
        <div class="hsk-sidebar-header">
          <div class="hsk-header-icon">🏆</div>
          <div class="hsk-header-copy">
            <h2>${t("hskTitle")}</h2>
            <p>${isVi ? "Học theo cấp độ HSK với lộ trình bài bản và hiệu quả." : "按HSK级别学习，提供系统且高效的路线。"}</p>
          </div>
        </div>
        
        <div class="hsk-search-wrapper">
          <span class="search-icon">🔍</span>
          <input type="text" id="hskSearchInput" placeholder="${isVi ? "Tìm kiếm bài học..." : "搜索课程..."}" value="${escapeAttr(state.hskSearchQuery)}" />
        </div>
        
        <div class="hsk-level-section">
          <h3>${isVi ? "Chọn cấp độ" : "选择等级"}</h3>
          <div class="hsk-level-list">
            ${Object.keys(hskLevels).map((level) => {
    const isActive = level === state.level;
    return `
                <button class="hsk-level-btn ${isActive ? "active" : ""}" data-level="${level}" type="button">
                  <span>${level}</span>
                  <span class="arrow-icon">›</span>
                </button>
              `;
  }).join("")}
          </div>
        </div>
        
        <div class="hsk-stats-section">
          <h3>${isVi ? "Thống kê nhanh" : "快速统计"}</h3>
          <div class="hsk-stats-grid">
            <div class="hsk-stat-card">
              <div class="stat-card-icon icon-lessons">📚</div>
              <div class="stat-card-info">
                <strong>${totalLessons}</strong>
                <span>${isVi ? "Tổng số bài" : "课程总数"}</span>
              </div>
            </div>
            
            <div class="hsk-stat-card">
              <div class="stat-card-icon icon-progress">📊</div>
              <div class="stat-card-info">
                <strong>${hskProgressPercent}%</strong>
                <span>${isVi ? "Tiến độ học" : "学习进度"}</span>
              </div>
            </div>
            
            <div class="hsk-stat-card">
              <div class="stat-card-icon icon-items">✍️</div>
              <div class="stat-card-info">
                <strong>${totalItemsInLevel}</strong>
                <span>${isVi ? "Tổng số mục luyện" : "练习总数"}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
      <!-- Right Column: Main Content -->
      <section class="hsk-main-content">
        <!-- Banner Recommendation -->
        <div class="hsk-recom-card">
          <div class="recom-target-wrapper">
            <svg viewBox="0 0 100 100" class="banner-target-svg">
              <circle cx="50" cy="50" r="45" fill="#d1fae5" />
              <circle cx="50" cy="50" r="33" fill="none" stroke="#10b981" stroke-width="6" />
              <circle cx="50" cy="50" r="21" fill="none" stroke="#047857" stroke-width="5" />
              <circle cx="50" cy="50" r="10" fill="#0ea855" />
              <line x1="82" y1="18" x2="55" y2="45" stroke="#047857" stroke-width="4" stroke-linecap="round" />
              <polygon points="52,48 57,41 47,44" fill="#047857" />
            </svg>
          </div>
          <div class="hsk-recom-info">
            <h2>${isVi ? "Lộ trình đề xuất hôm nay" : "今日推荐路线"}</h2>
            <p>${isVi ? "Hoàn thành 2-3 bài học để duy trì thói quen học tập hiệu quả." : "完成2-3课以保持高效的学习习惯。"}</p>
            <div class="hsk-recom-meta">
              <span>📖 ${completedLessonsInLevel} / ${totalLessons} ${isVi ? "bài đã học" : "已学课程"}</span>
              <span class="meta-divider">|</span>
              <span>🕒 ~ 20 ${isVi ? "phút" : "分钟"}</span>
            </div>
          </div>
          <button id="hskContinueBtn" class="btn-continue-learn" type="button">
            <span>▶</span> ${isVi ? "Tiếp tục học" : "继续学习"}
          </button>
        </div>
        
        ${pendingLesson ? `
        <div class="hsk-content-type-section">
          <div class="hsk-lessons-header">
            <h2>${isVi ? `Chọn phần học - Bài ${pendingLesson.no}` : `选择学习部分 - 第 ${pendingLesson.no} 课`}</h2>
            <button class="hsk-back-to-lessons-btn" data-hsk-back-lessons type="button">${isVi ? "Danh sách bài" : "课程列表"}</button>
          </div>
          <div class="hsk-selected-lesson-card">
            <strong>${state.lang === "vi" ? (pendingLesson.titleVi || pendingLesson.title) : (pendingLesson.titleZh || pendingLesson.title)}</strong>
            <span>${state.level} · ${isVi ? `Bài ${pendingLesson.no}` : `第 ${pendingLesson.no} 课`}</span>
          </div>
          ${renderHskContentTypePickerHTML(pendingLesson)}
        </div>
        ` : `
        <!-- Lesson List Section -->
        <div class="hsk-lessons-header">
          <h2>${isVi ? `Danh sách bài học ${state.level}` : `${state.level} 课程列表`}</h2>
          <div class="hsk-lessons-actions">
            <div class="hsk-filter-tabs">
              <button class="${state.hskFilterTab === "newest" ? "active" : ""}" data-hsk-filter="newest" type="button">${isVi ? "Mới nhất" : "最新"}</button>
              <button class="${state.hskFilterTab === "popular" ? "active" : ""}" data-hsk-filter="popular" type="button">${isVi ? "Phổ biến" : "热门"}</button>
              <button class="${state.hskFilterTab === "completed" ? "active" : ""}" data-hsk-filter="completed" type="button">${isVi ? "Đã học" : "已学"}</button>
            </div>
            <button class="hsk-filter-settings-btn" type="button" aria-label="Bộ lọc">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="hsk-lessons-list">
          ${renderHskLessonListHTML()}
        </div>
        `}
      </section>
    </section>
  `;
}

function renderDailyThemesListHTML() {
  let filteredThemes = dailyThemes;
  const isVi = state.lang === "vi";

  if (state.dailySearchQuery.trim()) {
    const query = normalizeLatin(state.dailySearchQuery.trim());
    filteredThemes = filteredThemes.filter(theme => {
      const meta = getDailyThemeCardMeta(theme);
      return normalizeLatin(meta.title).includes(query) ||
        normalizeLatin(meta.desc).includes(query) ||
        normalizeLatin(theme.vi).includes(query) ||
        normalizeLatin(theme.zh).includes(query);
    });
  }

  if (state.dailyFilterTab !== "all") {
    filteredThemes = filteredThemes.filter(theme => {
      const cats = themeCategories[theme.id] || [];
      return cats.includes(state.dailyFilterTab);
    });
  }

  return filteredThemes.length > 0 ? filteredThemes.map((theme) => {
    const cardMeta = getDailyThemeCardMeta(theme);
    const accessStatus = getDailyThemeAccessStatus(theme.id);
    const isLocked = accessStatus === "locked";
    const countLabel = isVi ? "Mục luyện" : "个练习";
    const featuredConfig = getDailyFeaturedThemeConfig(theme);
    return renderDailyFeaturedThemeCardHTML(theme, cardMeta, isLocked, countLabel, isVi, featuredConfig, accessStatus);
  }).join("") : `
    <div class="daily-no-results">
      ${isVi ? "Không tìm thấy chủ đề nào phù hợp." : "未找到符合的主题。"}
    </div>
  `;
}

function renderDailyRemainingThemesHTML(currentTheme) {
  const isVi = state.lang === "vi";
  const remainingThemes = dailyThemes.filter((theme) => theme.id !== currentTheme?.id);
  if (!remainingThemes.length) return "";
  const countLabel = isVi ? "Mục luyện" : "个练习";
  const cardsHTML = remainingThemes.map((theme) => {
    const cardMeta = getDailyThemeCardMeta(theme);
    const accessStatus = getDailyThemeAccessStatus(theme.id);
    const isLocked = accessStatus === "locked";
    const featuredConfig = getDailyFeaturedThemeConfig(theme);
    return renderDailyFeaturedThemeCardHTML(theme, cardMeta, isLocked, countLabel, isVi, featuredConfig, accessStatus);
  }).join("");
  return `
    <section class="daily-remaining-themes-section">
      <div class="daily-remaining-themes-heading">
        <h2>${isVi ? "Các chủ đề còn lại" : "其他主题"}</h2>
        <span>${isVi ? "Tiếng Trung tần suất cao · chọn nhanh chủ đề khác" : "高频汉语 · 快速选择其他主题"}</span>
      </div>
      <div class="daily-theme-grid daily-theme-grid--remaining">
        ${cardsHTML}
      </div>
    </section>
  `;
}

function renderDailyCourse() {
  const isVi = state.lang === "vi";
  const pendingTheme = getDailyPendingTheme();
  const pendingThemeConfig = pendingTheme ? getDailyFeaturedThemeConfig(pendingTheme) : null;
  const dailyHeroTitle = pendingTheme ? (isVi ? pendingTheme.vi : pendingTheme.zh) : "";
  const dailyHeroBackLabel = isVi ? "Quay lại danh sách chủ đề" : "返回主题列表";
  const dailyHeroToneClass = pendingThemeConfig?.tone ? ` daily-course-hero--${pendingThemeConfig.tone}` : "";

  setScreenWithDesktopShell("course", `
    <section class="daily-course-layout">
      ${pendingTheme ? `
        <div class="hsk-lesson-hero daily-course-hero daily-course-hero--theme${dailyHeroToneClass}">
          <button class="hsk-lesson-back-btn daily-course-hero-back-btn" data-daily-back-themes type="button" aria-label="${dailyHeroBackLabel}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1>${dailyHeroTitle}</h1>
          <div class="hsk-lesson-hero-art daily-course-hero-art" aria-hidden="true">
            <span class="hsk-lesson-art-card">通</span>
            <span class="hsk-lesson-art-book">用</span>
            <span class="hsk-lesson-art-pencil"></span>
          </div>
        </div>
      ` : ""}
      ${pendingTheme ? `
      <div class="daily-study-screen daily-study-screen--${pendingThemeConfig.tone}">
          <div class="hsk-study-part-section daily-study-part-section">
            ${renderDailyContentTypePickerHTML(pendingTheme)}
            ${renderDailyRemainingThemesHTML(pendingTheme)}
          </div>
        </div>
      ` : `
      <header class="daily-course-header">
        <h1>${isVi ? "Tiếng Trung thông dụng" : "高频汉语"}</h1>
        <p>${isVi
      ? "Khám phá các tình huống giao tiếp thực tế và nâng cao khả năng phản xạ tiếng Trung của bạn qua từng chủ đề cụ thể."
      : "探索真实交流场景，通过具体主题提升你的中文反应能力。"}</p>
      </header>

      <div class="daily-theme-grid">
        ${renderDailyThemesListHTML()}
      </div>
      `}
    </section>
  `, "app-desktop-shell--course", "daily", { mobileTitle: dailyHeroTitle || "" });
}

function stopSpeechPlayback() {
  speechPlaybackToken += 1;
  window.speechSynthesis?.cancel();
  if (activeSpeechAudio) {
    const audio = activeSpeechAudio;
    activeSpeechAudio = null;
    audio.onended = null;
    audio.onerror = null;
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
  }
}

function browserSpeakText(text, options = {}) {
  const config = globalThis.speechConfig?.getSpeechPlaybackConfig
    ? globalThis.speechConfig.getSpeechPlaybackConfig({
      slow: Boolean(options.slow),
      stage: options.stage || "word",
    })
    : { lang: "zh-CN", rate: 0.98, pitch: 1 };
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = config.lang;
  utterance.voice = preferredChineseVoice || chooseChineseVoice();
  utterance.rate = Number.isFinite(Number(options.rate)) ? Math.max(0.5, Math.min(2, Number(options.rate))) : config.rate;
  utterance.pitch = config.pitch;
  if (typeof options.onstart === "function") utterance.onstart = options.onstart;
  if (typeof options.onend === "function") utterance.onend = options.onend;
  if (typeof options.onerror === "function") utterance.onerror = options.onerror;
  stopSpeechPlayback();
  window.speechSynthesis?.speak(utterance);
}

function formatAudioIndex(index) {
  return String(index + 1).padStart(2, "0");
}

function audioPath(...segments) {
  const value = segments
    .filter(Boolean)
    .flatMap((segment) => String(segment).split("/").filter(Boolean))
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return resolvePublicAssetPath(value, "audio");
}

function getAudioFileName(index, slow = false) {
  const config = globalThis.speechConfig?.getLessonAudioConfig?.() || {};
  const suffix = slow ? config.slowSuffix || "-slow" : "";
  const extension = config.fileExtension || "mp3";
  return `${formatAudioIndex(index)}${suffix}.${extension}`;
}

function getHskAudioTypeFolder(type) {
  if (type === "word") return "Word";
  if (type === "phrase") return "Phrase";
  if (type === "sentence") return "Phrase";
  return "";
}

function resolveAudioAssetCandidate(candidate) {
  const value = String(candidate || "").trim();
  if (!value) return "";
  if (/^(?:https?:)?\/\//i.test(value) || /^(?:data:|blob:)/i.test(value)) return value;
  const normalized = value.replace(/^\/+/, "");
  if (normalized.startsWith("listening-app/")) return resolvePublicAssetPath(value, "listeningApp");
  return resolvePublicAssetPath(value, "audio");
}

function uniqueAudioSources(sources) {
  return sources.filter(Boolean).reduce((result, source) => {
    const expanded = globalThis.runtimeAudio?.expandAudioPathCandidates
      ? globalThis.runtimeAudio.expandAudioPathCandidates(source)
      : [source];
    for (const candidate of expanded) {
      const resolved = resolveAudioAssetCandidate(candidate);
      if (resolved && !result.includes(resolved)) result.push(resolved);
    }
    return result;
  }, []);
}

function resolveAudioSource(item, speed = "normal") {
  if (globalThis.runtimeAudio?.resolveAudioSource) {
    const runtimeSource = globalThis.runtimeAudio.resolveAudioSource(item, speed);
    if (runtimeSource) return runtimeSource;
  }
  if (!item || typeof item !== "object") return "";
  const audio = item.audio && typeof item.audio === "object" ? item.audio : {};
  const audioString = typeof item.audio === "string" ? item.audio : "";
  if (speed === "slow") {
    return item.audio_slow_path || audio.slow || item.slow_audio || item.audioSlow || item.audio_slow || item.audioNormal || item.audioSrc || audioString || "";
  }
  return item.audio_normal_path || audio.normal || item.normal_audio || item.audioNormal || item.audioSrc || audioString || "";
}

function getLegacyAudioFileNames(index, type, slow = false) {
  const padded = String(index + 1).padStart(3, "0");
  const canonical = type === "phrase" ? "phrase" : "word";
  const prefixes = canonical === "word" ? ["word", "world"] : ["phrase"];
  const suffixes = slow ? ["slow_0.75", "slow"] : ["normal"];
  return prefixes.flatMap((prefix) => suffixes.map((suffix) => `${prefix}_${padded}_${suffix}.mp3`));
}

function getPracticeAudioSources(options = {}) {
  const collection = currentCollection();
  const item = currentItem();
  const slow = Boolean(options.slow);
  const speed = slow ? "slow" : "normal";
  const directSource = resolveAudioSource(item, speed);

  const config = globalThis.speechConfig?.getLessonAudioConfig?.() || {};
  const fileName = getAudioFileName(state.index, slow);
  const sources = [directSource];
  if (state.module === "hsk" && collection?.id) {
    const typeFolder = getHskAudioTypeFolder(item.stage || state.hskContentType);
    if (typeFolder && collection.no) {
      const levelFolder = state.level;
      const lessonFolder = `${state.level}-L${collection.no}`;
      sources.push(audioPath(config.hskBasePath || "audio/HSK", levelFolder, lessonFolder, typeFolder, fileName));
      for (const legacyName of getLegacyAudioFileNames(state.index, state.hskContentType, slow)) {
        sources.push(audioPath(config.hskBasePath || "audio/HSK", levelFolder, lessonFolder, typeFolder, legacyName));
      }
      return uniqueAudioSources(sources);
    }
    sources.push(audioPath(config.lessonBasePath || "audio/lessons", collection.id, fileName));
    return uniqueAudioSources(sources);
  }
  if (state.module === "daily" && collection?.id) {
    sources.push(audioPath(config.dailyBasePath || "audio/daily", collection.id, fileName));
    return uniqueAudioSources(sources);
  }
  return uniqueAudioSources(sources);
}

function getPracticeAudioSource(options = {}) {
  return getPracticeAudioSources(options)[0] || null;
}

function getVocabTargetText(target) {
  if (typeof target === "string") return target;
  if (!target || typeof target !== "object") return "";
  return target.hanzi || target.chinese || target.zh || target.text || "";
}

function resolveVocabCatalogAudioPath(source) {
  const value = String(source || "").trim();
  if (!value) return "";
  if (/^(?:https?:)?\/\//i.test(value) || /^(?:data:|blob:)/i.test(value)) return value;
  const normalized = value.replace(/^\/+/, "");
  if (normalized.startsWith("listening-app/")) return value;
  if (normalized.startsWith("audio/") && typeof listeningCatalogAssetPath === "function") {
    return listeningCatalogAssetPath(value);
  }
  return value;
}

function getItemAudioSources(item, options = {}) {
  if (!item || typeof item !== "object") return [];
  const slow = Boolean(options.slow);
  const audio = item.audio && typeof item.audio === "object" ? item.audio : {};
  const audioString = typeof item.audio === "string" ? item.audio : "";
  const normalSource = resolveVocabCatalogAudioPath(
    resolveAudioSource(item, "normal") || item.audioNormal || item.audioSrc || audio.normal || audioString || "",
  );
  const slowSource = resolveVocabCatalogAudioPath(
    resolveAudioSource(item, "slow") || item.audioSlow || item.audio_slow || audio.slow || normalSource,
  );
  return uniqueAudioSources(slow ? [slowSource, normalSource] : [normalSource]);
}

function getVocabAudioSources(target, options = {}) {
  const text = getVocabTargetText(target);
  const item = target && typeof target === "object" ? target : findItemByHanzi(text);
  const itemSources = getItemAudioSources(item, options);
  const config = globalThis.speechConfig?.getLessonAudioConfig?.() || {};
  const extension = config.fileExtension || "mp3";
  const genericSource = text ? audioPath(config.vocabBasePath || "audio/vocab", `${text}.${extension}`) : "";
  return uniqueAudioSources([...itemSources, genericSource]);
}

function getVocabAudioSource(target) {
  return getVocabAudioSources(target)[0] || null;
}

function reportAudioFallback(meta = {}) {
  const attempted = meta.sources || [];
  console.warn("Audio file missing; browser voice fallback is used.", {
    itemId: meta.item?.id || "",
    text: meta.item?.hanzi || meta.text || "",
    speed: meta.speed || "normal",
    attemptedAudioPaths: attempted,
  });
  const message = "Audio file missing. Browser voice fallback is used.";
  if (typeof setInputFeedback === "function" && screens.practice && !screens.practice.classList.contains("hidden")) {
    setInputFeedback("bad", message);
  } else if (typeof showToast === "function") {
    showToast(message);
  }
}

function playAudioSources(sources, fallback, meta = {}) {
  const candidates = uniqueAudioSources(Array.isArray(sources) ? sources : [sources]);
  const playbackRate = Number(meta.playbackRate || 1);
  stopSpeechPlayback();
  const playbackToken = speechPlaybackToken;
  const isCurrentPlayback = () => playbackToken === speechPlaybackToken;
  if (candidates.length === 0) {
    reportAudioFallback({ ...meta, sources: candidates });
    fallback?.();
    return;
  }
  let cursor = 0;
  const tryNext = () => {
    if (!isCurrentPlayback()) return;
    const source = candidates[cursor];
    if (!source) {
      if (!isCurrentPlayback()) return;
      reportAudioFallback({ ...meta, sources: candidates });
      fallback?.();
      return;
    }
    cursor += 1;
    const audio = new Audio();
    audio.preload = "none";
    audio.src = source;
    let handledFailure = false;
    const handleFailure = () => {
      if (!isCurrentPlayback()) return;
      if (handledFailure) return;
      handledFailure = true;
      if (activeSpeechAudio === audio) activeSpeechAudio = null;
      tryNext();
    };
    activeSpeechAudio = audio;
    if (Number.isFinite(playbackRate)) {
      audio.playbackRate = Math.max(0.5, Math.min(2, playbackRate));
    }
    audio.onended = () => {
      if (!isCurrentPlayback()) return;
      if (activeSpeechAudio === audio) activeSpeechAudio = null;
    };
    audio.onerror = handleFailure;
    const playPromise = audio.play();
    if (playPromise?.catch) {
      playPromise.catch(handleFailure);
    }
  };
  tryNext();
}

function playAudioSource(source, fallback, meta = {}) {
  playAudioSources([source], fallback, meta);
}

function playAudioSegmentSource(source, start, end, fallback, meta = {}) {
  const segmentStart = Number(start);
  const segmentEnd = Number(end);
  if (!source || !Number.isFinite(segmentStart) || !Number.isFinite(segmentEnd) || segmentEnd <= segmentStart) {
    playAudioSources([source], fallback, meta);
    return;
  }

  stopSpeechPlayback();
  const audio = new Audio();
  audio.preload = "none";
  audio.src = source;
  const playbackRate = Number(meta.playbackRate || 1);
  if (Number.isFinite(playbackRate)) {
    audio.playbackRate = Math.max(0.5, Math.min(2, playbackRate));
  }
  let handledFailure = false;
  const resetActiveAudio = () => {
    if (activeSpeechAudio === audio) activeSpeechAudio = null;
  };
  const handleFailure = () => {
    if (handledFailure) return;
    handledFailure = true;
    resetActiveAudio();
    reportAudioFallback({ ...meta, sources: [source] });
    fallback?.();
  };

  activeSpeechAudio = audio;
  audio.onloadedmetadata = () => {
    try {
      audio.currentTime = segmentStart;
    } catch {
      handleFailure();
      return;
    }
    const playPromise = audio.play();
    if (playPromise?.catch) playPromise.catch(handleFailure);
  };
  audio.ontimeupdate = () => {
    if (audio.currentTime >= segmentEnd) {
      audio.pause();
      audio.currentTime = segmentStart;
      resetActiveAudio();
    }
  };
  audio.onended = resetActiveAudio;
  audio.onerror = handleFailure;
  audio.load();
}

function speakText(target, options = {}) {
  const text = getVocabTargetText(target);
  if (!text) return;
  const item = target && typeof target === "object" ? target : findItemByHanzi(text);
  const slow = Boolean(options.slow);
  const sources = getVocabAudioSources(item || text, { slow });
  playAudioSources(
    sources,
    () => browserSpeakText(text, { slow, stage: item?.stage || "word" }),
    { item, text, speed: slow ? "slow" : "normal", sources },
  );
}

function normalizeListeningKeywordForVocab(keyword = {}, hanzi = "") {
  const source = typeof keyword === "string" ? { chinese: keyword } : keyword;
  const text = source.hanzi || source.chinese || source.zh || source.text || hanzi;
  if (!text) return null;
  const nestedAudio = source.audio && typeof source.audio === "object" ? source.audio : {};
  const audioString = typeof source.audio === "string" ? source.audio : "";
  const audioNormal = resolveVocabCatalogAudioPath(source.audioNormal || source.audioSrc || source.audio_normal_path || source.normal_audio || nestedAudio.normal || audioString || "");
  const audioSlow = resolveVocabCatalogAudioPath(source.audioSlow || source.audio_slow || source.audio_slow_path || source.slow_audio || nestedAudio.slow || audioNormal);
  return {
    ...source,
    hanzi: text,
    pinyin: source.pinyin || "",
    tone: source.tone || source.pinyin || "",
    vi: source.vi || source.vietnamese || source.meaning || "",
    pos: source.pos || source.partOfSpeech || source.part_of_speech || source.source_pos || "",
    stage: source.stage || "word",
    audioNormal,
    audioSlow,
    audioSrc: resolveVocabCatalogAudioPath(source.audioSrc || audioNormal),
  };
}

function findListeningKeywordByHanzi(hanzi) {
  const target = String(hanzi || "").trim();
  if (!target) return null;

  for (const episode of Array.isArray(listeningEpisodes) ? listeningEpisodes : []) {
    for (const keyword of episode.keywords || []) {
      const item = normalizeListeningKeywordForVocab(keyword, target);
      if (item?.hanzi === target) return item;
    }
  }

  const catalog = globalThis.pindaListeningCatalog;
  const tracks = Array.isArray(catalog?.tracks) ? catalog.tracks : [];
  for (const track of tracks) {
    const lessonGroups = [
      ...(track.levels || []).flatMap((level) => level.topics || []),
      ...(track.topics || []),
    ];
    for (const topic of lessonGroups) {
      for (const lesson of topic.lessons || []) {
        for (const keyword of lesson.keywords || []) {
          const item = normalizeListeningKeywordForVocab(keyword, target);
          if (item?.hanzi === target) return item;
        }
      }
    }
  }

  return null;
}

function withListeningAudioFallback(item, hanzi) {
  if (!item) return findListeningKeywordByHanzi(hanzi);
  if (getItemAudioSources(item).length > 0) return item;
  const listeningKeyword = findListeningKeywordByHanzi(hanzi);
  if (!listeningKeyword || getItemAudioSources(listeningKeyword).length === 0) return item;
  return {
    ...item,
    audioNormal: listeningKeyword.audioNormal || listeningKeyword.audioSrc || "",
    audioSlow: listeningKeyword.audioSlow || listeningKeyword.audioNormal || listeningKeyword.audioSrc || "",
    audioSrc: listeningKeyword.audioSrc || listeningKeyword.audioNormal || "",
  };
}

function findItemByHanzi(hanzi) {
  for (const level of Object.values(hskLevels)) {
    for (const lesson of level) {
      const found = lesson.items.find(item => item.hanzi === hanzi);
      if (found) return withListeningAudioFallback(found, hanzi);
    }
  }
  for (const theme of dailyThemes) {
    const found = theme.items.find(item => item.hanzi === hanzi);
    if (found) return withListeningAudioFallback(found, hanzi);
  }
  const listeningKeyword = findListeningKeywordByHanzi(hanzi);
  if (listeningKeyword) return listeningKeyword;
  for (const level of Object.values(hskLevels)) {
    for (const lesson of level) {
      for (const item of lesson.items) {
        const foundWord = (item.words || []).find(w => w.text === hanzi);
        if (foundWord) {
          const nestedAudio = foundWord.audio && typeof foundWord.audio === "object" ? foundWord.audio : {};
          const audioString = typeof foundWord.audio === "string" ? foundWord.audio : "";
          const audioNormal = foundWord.audioNormal || foundWord.audioSrc || foundWord.audio_normal_path || foundWord.normal_audio || nestedAudio.normal || audioString || "";
          const audioSlow = foundWord.audioSlow || foundWord.audio_slow || foundWord.audio_slow_path || foundWord.slow_audio || nestedAudio.slow || audioNormal;
          const wordItem = {
            hanzi: foundWord.text,
            pinyin: foundWord.pinyin,
            tone: foundWord.tone,
            vi: foundWord.vi,
            stage: "word",
            audioNormal,
            audioSlow,
            audioSrc: foundWord.audioSrc || audioNormal,
          };
          return withListeningAudioFallback(wordItem, hanzi);
        }
      }
    }
  }
  return {
    hanzi: hanzi,
    pinyin: "",
    tone: "",
    vi: "Từ đã lưu",
    stage: "word"
  };
}

function normalizeVocabPracticeItem(itemDetail, hanzi = "") {
  const item = itemDetail || {};
  const itemHanzi = item.hanzi || hanzi;
  const audioNormal = resolveAudioSource(item, "normal") || item.audioNormal || item.audioSrc || "";
  const audioSlow = resolveAudioSource(item, "slow") || item.audioSlow || item.audio_slow || audioNormal;
  const words = Array.isArray(item.words) && item.words.length > 0
    ? item.words
    : itemHanzi
      ? [{
        text: itemHanzi,
        pinyin: item.pinyin || "",
        tone: item.tone || "",
        pos: item.pos || "",
        vi: item.vi || "",
        audioNormal,
        audioSlow,
        audioSrc: item.audioSrc || audioNormal,
      }]
      : [];

  return {
    ...item,
    hanzi: itemHanzi,
    vi: item.vi || "",
    stage: item.stage || "word",
    audioNormal,
    audioSlow,
    audioSrc: item.audioSrc || audioNormal,
    words,
  };
}

function startSavedVocabPractice(index = 0) {
  const items = [...state.saved]
    .map(hanzi => normalizeVocabPracticeItem(findItemByHanzi(hanzi), hanzi))
    .filter(item => item.hanzi && item.words.length > 0);

  if (items.length === 0) {
    showToast(state.lang === "vi" ? "Chưa có từ vựng để ôn tập" : "暂无可复习词汇");
    return false;
  }

  const safeIndex = Math.max(0, Math.min(Number(index) || 0, items.length - 1));
  state.fromRoadmap = false;
  startPractice({ module: "vocab", index: safeIndex, mode: state.mode || "translate" });
  return true;
}

function getFilteredVocabItems() {
  let savedList = Array.from(state.saved).map(hanzi => {
    const detail = findItemByHanzi(hanzi);
    return { hanzi, ...detail };
  });

  const query = (state.vocabSearchQuery || "").trim().toLowerCase();
  if (query) {
    const normQuery = normalizeLatin(query);
    savedList = savedList.filter(item =>
      item.hanzi.toLowerCase().includes(query) ||
      normalizeLatin(item.vi).includes(normQuery) ||
      normalizeLatin(item.pinyin || item.tone || "").includes(normQuery)
    );
  }

  if (state.vocabFilterTab === "word") {
    savedList = savedList.filter(item => item.stage !== "phrase" && item.stage !== "sentence");
  } else if (state.vocabFilterTab === "phrase") {
    savedList = savedList.filter(item => item.stage === "phrase" || item.stage === "sentence");
  }

  return savedList;
}

function renderVocabListHTML() {
  const isVi = state.lang === "vi";
  const savedList = getFilteredVocabItems();

  if (savedList.length === 0) {
    return `
      <div class="vocab-empty-state">
        ${isVi ? "Chưa có từ nào trong bộ từ hoặc không tìm thấy kết quả phù hợp." : "生词本为空或未找到匹配结果。"}
      </div>
    `;
  }

  return savedList.map(item => {
    const isSentence = item.stage === "sentence";
    const badgeLabel = isSentence ? (isVi ? "CÂU" : "句子") : (isVi ? "TỪ VỰNG" : "生词");

    return `
      <div class="vocab-item-card" data-vocab-hanzi="${escapeAttr(item.hanzi)}">
        <div class="vocab-item-header">
          <span class="vocab-stage-badge stage-${item.stage || 'word'}">${badgeLabel}</span>
          <button class="vocab-delete-btn" type="button" aria-label="${isVi ? "Xóa khỏi từ đã lưu" : "从收藏中删除"}">
            ★
          </button>
        </div>
        <h3 class="vocab-hanzi">${item.hanzi}</h3>
        <p class="vocab-pinyin">${item.tone || item.pinyin || ""}</p>
        <p class="vocab-translation">${item.vi}</p>
        <button class="vocab-speak-btn" type="button" aria-label="${isVi ? "Phát âm" : "朗读"}">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 5L6 9H3v6h3l5 4V5z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
          ${isVi ? "Phát âm" : "朗读"}
        </button>
      </div>
    `;
  }).join("");
}

function renderVocab() {
  const isVi = state.lang === "vi";
  const totalSaved = Array.from(state.saved).length;
  const visibleCount = getFilteredVocabItems().length;
  const visibleTypeLabel = state.vocabFilterTab === "all"
    ? (isVi ? "mục đã lưu" : "个已保存项")
    : state.vocabFilterTab === "phrase"
      ? (isVi ? "cụm từ" : "短语")
      : (isVi ? "từ vựng" : "个词");

  setScreenWithDesktopShell("vocab", `
    <div class="vocab-layout">
      <div class="vocab-page-heading">
        <div class="vocab-title-book" aria-hidden="true">
          <span class="vocab-title-book-back"></span>
          <span class="vocab-title-book-cover">
            <i class="vocab-title-book-ribbon"></i>
            <b>生词本</b>
            <em>★</em>
          </span>
          <span class="vocab-title-book-tag">★</span>
        </div>
        <div class="vocab-heading-copy">
          <h1>${isVi ? "Bộ lưu từ vựng" : "已保存词汇本"}</h1>
          <p>${isVi ? "Quản lý và ôn tập nhanh các từ Pinyin bạn đã lưu" : "管理并快速复习你保存的拼音词汇"}</p>
        </div>
        <div class="vocab-hero-decor" aria-hidden="true">
          <span>ā</span><span>á</span><span>ǎ</span><span>à</span>
        </div>
        <div class="vocab-pinyin-pill" aria-hidden="true">
          <span>ni hao</span>
          <i>→</i>
          <span>你好</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>
          </svg>
        </div>
        <button class="vocab-review-now-btn vocab-review-now-btn--hero" type="button" data-vocab-review>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
          </svg>
          ${isVi ? "Ôn tập ngay" : "立即复习"}
        </button>
      </div>

      <div class="vocab-control-bar">
        <div class="vocab-visible-count">
          <span class="vocab-count-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11z"/>
              <path d="M12 7.2l1.1 2.1 2.4.4-1.8 1.7.4 2.4-2.1-1.1-2.1 1.1.4-2.4-1.8-1.7 2.4-.4L12 7.2z" fill="#ffffff"/>
            </svg>
          </span>
          <span class="vocab-visible-count-text">${isVi ? "Đang hiển thị" : "正在显示"} <strong>${visibleCount}</strong> ${visibleTypeLabel}</span>
        </div>

        <div class="vocab-type-tabs" aria-label="${isVi ? "Loại mục" : "类型"}">
          <button class="${state.vocabFilterTab === "all" ? "active" : ""}" type="button" data-vocab-filter="all">${isVi ? "Tất cả" : "全部"}</button>
          <button class="${state.vocabFilterTab === "word" ? "active" : ""}" type="button" data-vocab-filter="word">${isVi ? "Từ vựng" : "词汇"}</button>
          <button class="${state.vocabFilterTab === "phrase" ? "active" : ""}" type="button" data-vocab-filter="phrase">${isVi ? "Cụm từ" : "短语"}</button>
        </div>

      </div>

      <div class="vocab-mobile-saved-head">
        <h2><span class="saved-heading-star">★</span>${isVi ? "Từ vựng đã lưu" : "收藏生词"}</h2>
        <button type="button" data-vocab-filter="all">
          ${isVi ? "Xem tất cả" : "查看全部"} <span aria-hidden="true">›</span>
        </button>
      </div>

      <div class="vocab-grid">
        ${renderVocabListHTML()}
      </div>
    </div>
  `, "app-desktop-shell--vocab", "vocab");
}

function resetPractice() {
  const itemNow = currentItem();
  const promptVariant = state.mode === "dictation" ? "dictation" : getPromptSizeVariant(itemNow.vi);
  state.activeWord = 0;
  state.activeInput = "";
  state.slotProgress = itemNow.words.map(() => 0);
  state.lastBadInput = "";
  state.solved = itemNow.words.map(() => false);
  state.complete = false;
  $("#burstLayer").innerHTML = "";
}

function formatPracticeDuration(startedAt, completedAt = Date.now()) {
  const startTime = Number(startedAt || 0);
  const endTime = Number(completedAt || Date.now());
  const elapsedSeconds = startTime > 0 ? Math.max(0, Math.floor((endTime - startTime) / 1000)) : 0;
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startPractice(options = {}) {
  if (options.lessonId && !canAccessHskLesson(options.lessonId)) {
    promptUpgradeLocked();
    return;
  }
  if (options.themeId && !canAccessDailyTheme(options.themeId)) {
    promptUpgradeLocked();
    return;
  }
  if (Object.prototype.hasOwnProperty.call(options, "hskContentType")) {
    state.hskContentType = options.hskContentType || "";
  }
  if (Object.prototype.hasOwnProperty.call(options, "dailyContentType")) {
    state.dailyContentType = options.dailyContentType || "";
  }
  if (options.lessonId) {
    state.module = "hsk";
    state.hskLevelPicker = false;
    state.lessonId = options.lessonId;
    state.hskPendingLessonId = "";
    const foundLevel = Object.keys(hskLevels).find((level) => hskLevels[level].some((lessonItem) => lessonItem.id === options.lessonId));
    if (foundLevel) state.level = foundLevel;
  }

  if (options.themeId) {
    state.module = "daily";
    state.themeId = options.themeId;
    state.dailyPendingThemeId = "";
  }
  if (options.module === "vocab") {
    state.module = "vocab";
  }
  state.mode = options.mode || "translate";
  state.index = options.index || 0;
  if (state.module === "hsk" && !canAccessHskLessonItem(state.lessonId, state.index)) {
    promptUpgradeLocked();
    return;
  }
  if (state.module === "daily" && !canAccessDailyThemeItem(state.themeId, state.index)) {
    promptUpgradeLocked();
    return;
  }
  state.score = 0;
  state.practiceStartedAt = Date.now();
  state.practiceCompletedAt = 0;
  resetPractice();
  renderPractice();
  trackEvent("lesson_opened", buildPracticeEventContext());
  setScreen("practice");
  schedulePracticeSpeak(100, focusInput);
}

function renderPractice() {
  const isVi = state.lang === "vi";
  const collection = currentCollection();
  const itemNow = currentItem();
  const promptVariant = state.mode === "dictation" ? "dictation" : getPromptSizeVariant(itemNow.vi);
  const practiceStage = learningContentBucket(itemNow);
  screens.practice.dataset.practiceStage = practiceStage;
  screens.practice.innerHTML = `
    <header class="practice-top">
      <button id="practiceCloseBtn" class="practice-close-btn" type="button" aria-label="${isVi ? "Đóng" : "关闭"}">&times;</button>  

      <div class="thin-progress"><span style="width:${((state.index + 1) / collection.items.length) * 100}%"></span></div>
      <div class="mode-switch" aria-label="${t("modeLabel")}">
        <button class="${state.mode === "translate" ? "active" : ""}" data-mode="translate" type="button">${t("translate")}</button>
        <button class="${state.mode === "dictation" ? "active" : ""}" data-mode="dictation" type="button">${t("dictation")}</button>
      </div>
    </header>
          <div class="practice-meta">
        <strong>${collection.title}</strong>
        <span>${state.index + 1}/${collection.items.length}</span>
      </div>
    <section class="practice-layout">
      <section class="exercise-card">
        <span class="stage-pill">${hskContentTypeLabel(practiceStage)}</span>
        <p>${state.mode === "translate" ? t("translateHint") : t("dictationHint")}</p>
        <h1 class="practice-prompt practice-prompt--${promptVariant}">${state.mode === "dictation" ? "听一听" : itemNow.vi}</h1>
        <div class="slot-row">
          ${itemNow.words.map((word, index) => {
    const active = practiceRules.shouldRenderAnswerInput(state, index);
    const metaLabel = displaySegmentLabel(normalizeDisplaySegment(word));
    return `
              <div class="answer-slot color-${index % 6} ${active ? "active" : ""} ${(state.slotProgress[index] || 0) > 0 ? "progress" : ""} ${state.solved[index] ? "solved" : ""}">
                <div class="slot-line">
                  <i class="slot-progress-fill" style="width:${slotProgressPercent(index, word)}"></i>
                  ${active ? `<input id="answerInput" placeholder="${t("inputPlaceholder")}" autocomplete="off" inputmode="latin" value="${escapeAttr(state.activeInput)}" />` : `<strong>${state.solved[index] ? word.text : ""}</strong><small>${state.solved[index] ? word.tone : ""}</small>`}
                </div>
                ${active && !state.solved[index] ? `<span class="slot-progress-text">${slotProgressText(index, word)}</span>` : ""}
                ${practiceRules.shouldShowSlotMeta(state, index) && metaLabel ? `<span>${metaLabel}</span>` : ""}
              </div>
            `;
  }).join("")

    }
       
      </section>
      <aside class="memory-panel ${state.complete ? "ready" : ""}">
        <p class="eyebrow">${t("answerTitle")}</p>
        <strong>${state.complete ? itemNow.hanzi : "?"}</strong>
        <span>${state.complete ? itemNow.tone : itemNow.stage.toUpperCase()}</span>
        <p>${state.complete ? itemNow.vi : state.lang === "vi" ? "Trả lời đúng để mở thẻ ghi nhớ." : "答对后打开记忆卡。"}</p>
        <div>
          ${practiceRules.shouldShowMemoryDetails(state) ? itemNow.words.map((word) => { const metaLabel = displaySegmentLabel(normalizeDisplaySegment(word)); const detailParts = [word.text, word.tone, metaLabel, word.vi].filter(Boolean); return `<em>${detailParts.join(" · ")}</em>`; }).join("") : ""}
        </div>
      </aside>
    </section>
    <footer class="function-dock">
      <button id="prevBtn" type="button" ${state.index === 0 ? "disabled" : ""}><span>◀</span>${t("prev")}</button>
      <button id="playBtn" type="button"><span>▶</span>${t("play")}</button>
      <button id="slowBtn" type="button"><span>◷</span>${t("slow")}</button>
      <button id="saveBtn" class="${state.saved.has(itemNow.hanzi) ? "saved" : ""}" type="button"><span>★</span>${state.saved.has(itemNow.hanzi) ? (state.lang === "vi" ? "Đã lưu" : "已收藏") : t("favorite")}</button>
      <button id="answerBtn" type="button"><span>?</span>${t("showAnswer")}</button>
      <button id="nextBtn" class="primary" type="button"><span>↵</span>${t("next")}</button>
    </footer>
  `;
  focusInput();
}

function focusInput() {
  $("#answerInput")?.focus();
}

function setActiveSlotProgress(match) {
  if (!match || match.kind !== "progress") return;
  state.slotProgress[match.start] = Math.min(match.inputLength, match.totalLength);
  const activeSlot = $(".answer-slot.active");
  const fill = activeSlot?.querySelector(".slot-progress-fill");
  const text = activeSlot?.querySelector(".slot-progress-text");
  const itemNow = currentItem();
  const word = itemNow.words[match.start];
  activeSlot?.classList.add("progress");
  activeSlot?.classList.remove("error");
  if (fill) fill.style.width = slotProgressPercent(match.start, word);
  if (text) text.textContent = slotProgressText(match.start, word);
}

function setInputFeedback(kind, message = "") {
  const feedbackNode = $("#feedback");
  if (!feedbackNode) return;
  feedbackNode.textContent = message;
  feedbackNode.className = `feedback ${kind || ""}`.trim();
}

function handleLiveAnswerInput(value) {
  if (state.complete) return;
  state.activeInput = value;
  const itemNow = currentItem();
  const match = globalThis.practiceAnswerRules?.matchContiguousAnswer
    ? globalThis.practiceAnswerRules.matchContiguousAnswer(value, itemNow.words, state.activeWord, itemNow.pinyin, itemNow.hanzi)
    : null;
  const pinyinState = classifyActivePinyinInput(value, itemNow);

  if (!String(value || "").trim()) {
    state.slotProgress[state.activeWord] = 0;
    state.lastBadInput = "";
    $(".answer-slot.active")?.classList.remove("progress", "error");
    setInputFeedback("", "");
    return;
  }

  if (match?.kind === "full" || match?.kind === "partial") {
    submitAnswer(value);
    return;
  }

  if (match?.kind === "progress" || pinyinState.kind === "progress") {
    setActiveSlotProgress(match?.kind === "progress" ? match : pinyinState);
    setInputFeedback("good", state.lang === "vi" ? "Đúng rồi, tiếp tục gõ." : "拼音正确，继续输入。");
    return;
  }

  if (pinyinState.kind === "extra") {
    $(".answer-slot.active")?.classList.remove("error");
    setInputFeedback("warn", state.lang === "vi" ? "Bạn đã gõ thêm nội dung." : "多输入了内容。");
    return;
  }

  $(".answer-slot.active")?.classList.add("error");
  setInputFeedback("bad", state.lang === "vi" ? "Pinyin chưa khớp." : "拼音不匹配。");
  if (state.lastBadInput !== value) {
    playTone("error");
    state.lastBadInput = value;
  }
}

function submitAnswer(value) {
  if (state.complete) {
    nextItem();
    return;
  }
  const itemNow = currentItem();
  const answer = value || $("#answerInput")?.value || "";
  if (!answer.trim()) return;
  const match = globalThis.practiceAnswerRules?.matchContiguousAnswer
    ? globalThis.practiceAnswerRules.matchContiguousAnswer(answer, itemNow.words, state.activeWord, itemNow.pinyin, itemNow.hanzi)
    : null;
  const pinyinState = classifyActivePinyinInput(answer, itemNow);
  if (match?.kind === "full" || isMatch(answer, itemNow.pinyin, itemNow.hanzi)) {
    state.solved = itemNow.words.map(() => true);
    state.slotProgress = itemNow.words.map((word) => slotPinyinLength(word));
    state.activeInput = "";
    finishItem({ autoAdvance: true });
    return;
  }
  if (match?.kind === "partial" && match.count > 0) {
    const start = Number.isInteger(match.start) ? match.start : state.activeWord;
    for (let index = start; index < Math.min(itemNow.words.length, start + match.count); index += 1) {
      state.solved[index] = true;
      state.slotProgress[index] = slotPinyinLength(itemNow.words[index]);
    }
    state.activeInput = "";
    state.lastBadInput = "";
    playTone("correct");
    const nextUnsolved = state.solved.findIndex((solved) => !solved);
    if (nextUnsolved !== -1) {
      state.activeWord = nextUnsolved;
      renderPractice();
      const remaining = state.solved.filter((solved) => !solved).length;
      const recognized = match.tokenCount || match.count;
      const feedback = state.lang === "vi"
        ? `Đã nhận ${recognized} phần, còn ${remaining} phần.`
        : `已识别 ${recognized} 个，还差 ${remaining} 个。`;
      const feedbackNode = $("#feedback");
      if (feedbackNode) {
        feedbackNode.textContent = feedback;
        feedbackNode.className = "feedback good";
      }
    } else {
      finishItem({ autoAdvance: true });
    }
    return;
  }
  if (match?.kind === "progress") {
    setActiveSlotProgress(match);
    setInputFeedback("good", state.lang === "vi" ? "Đúng rồi, tiếp tục gõ." : "拼音正确，继续输入。");
    return;
  }
  if (pinyinState.kind === "progress") {
    setActiveSlotProgress(pinyinState);
    setInputFeedback("good", state.lang === "vi" ? "Đúng rồi, tiếp tục gõ." : "拼音正确，继续输入。");
    return;
  }
  if (pinyinState.kind === "extra") {
    $(".answer-slot.active")?.classList.remove("error");
    setInputFeedback("warn", state.lang === "vi" ? "Bạn đã gõ thêm nội dung." : "多输入了内容。");
    return;
  }
  state.wrong.add(`${currentCollection().id}:${state.index}`);
  saveState();
  trackEvent("question_answered", {
    ...buildPracticeEventContext(),
    questionId: `${currentCollection().id}:${state.index}`,
    isCorrect: false,
  });
  $("#feedback").textContent = t("bad");
  $("#feedback").className = "feedback bad";
  playTone("error");
}

function canSubmitCurrentAnswer(value) {
  const answer = value || $("#answerInput")?.value || "";
  if (!answer.trim()) return false;
  const itemNow = currentItem();
  const match = globalThis.practiceAnswerRules?.matchContiguousAnswer
    ? globalThis.practiceAnswerRules.matchContiguousAnswer(answer, itemNow.words, state.activeWord, itemNow.pinyin, itemNow.hanzi)
    : null;
  if (match?.kind === "full" || match?.kind === "partial") return true;
  return isMatch(answer, itemNow.pinyin, itemNow.hanzi);
}

function finishItem(options = {}) {
  const collection = currentCollection();
  state.complete = true;
  trackEvent("question_answered", {
    ...buildPracticeEventContext(),
    questionId: `${collection.id}:${state.index}`,
    isCorrect: true,
  });
  if (state.index >= collection.items.length - 1 && !state.practiceCompletedAt) {
    state.practiceCompletedAt = Date.now();
    trackEvent("practice_completed", {
      ...buildPracticeEventContext(),
      questionId: collection.id,
      isCorrect: true,
    });
  }
  state.score += 100;
  renderPractice();
  burst();
  playTone("success");
  if (options.autoAdvance) {
    schedulePracticeSpeak(360);
  }
}

function prevItem() {
  if (state.index <= 0) return;
  $("#burstLayer").innerHTML = "";
  state.index -= 1;
  resetPractice();
  renderPractice();
  schedulePracticeSpeak(120);
}

function nextItem() {
  const collection = currentCollection();
  $("#burstLayer").innerHTML = "";
  if (state.index >= collection.items.length - 1) {
    const wasCompleted = state.completed.has(collection.id);
    state.completed.add(collection.id);
    if (!wasCompleted) {
      recordUserActivity("complete", {
        title: collection.title || "",
      });
    }
    saveState();
    renderComplete();
    setScreen("complete");
    return;
  }
  if (state.module === "hsk") {
    const nextIndex = state.index + 1;
    if (!canAccessHskLessonItem(state.lessonId, nextIndex)) {
      promptUpgradeLocked();
      return;
    }
  }
  if (state.module === "daily") {
    const nextIndex = state.index + 1;
    if (!canAccessDailyThemeItem(state.themeId, nextIndex)) {
      promptUpgradeLocked();
      return;
    }
  }
  state.index += 1;
  resetPractice();
  renderPractice();
  schedulePracticeSpeak(120);
}

function showAnswer() {
  state.solved = currentItem().words.map(() => true);
  finishItem();
}

function renderComplete() {
  const collection = currentCollection();
  const isVocab = state.module === "vocab";
  const totalItems = collection.items.length;
  const practiceDuration = formatPracticeDuration(state.practiceStartedAt, state.practiceCompletedAt || Date.now());
  screens.complete.innerHTML = `
    <section class="complete-card">
      <span class="trophy" aria-hidden="true">
        <span class="trophy-check">✓</span>
        <span class="trophy-sparkles">✦✦</span>
      </span>
      <h1>${t("completeTitle")}</h1>
      <p>${t("completeSub")}</p>
      <div class="complete-stats">
        <span class="complete-stat-card"><strong>${totalItems}</strong>${t("itemCount")}</span>
        <span class="complete-stat-card complete-stat-card--time"><strong>${practiceDuration}</strong>${state.lang === "vi" ? "Thời gian" : "用时"}</span>
      </div>
      <div class="complete-actions">
        <button class="secondary" data-complete="home" type="button">${isVocab ? (state.lang === "vi" ? "Về bộ từ" : "返回生词本") : t("backHome")}</button>
        ${isVocab ? "" : `<button class="primary" data-complete="next" type="button">${t("nextLesson")} <span aria-hidden="true">→</span></button>`}
      </div>
    </section>
  `;
}

function chooseChineseVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  preferredChineseVoice = globalThis.speechConfig?.choosePreferredChineseVoice
    ? globalThis.speechConfig.choosePreferredChineseVoice(voices)
    : voices.find((voice) => voice.lang?.toLowerCase().startsWith("zh")) || null;
  return preferredChineseVoice;
}

function clearScheduledPracticeSpeak() {
  if (!scheduledPracticeSpeakTimer) return;
  clearTimeout(scheduledPracticeSpeakTimer);
  scheduledPracticeSpeakTimer = null;
}

function schedulePracticeSpeak(delay = 0, afterSpeak) {
  clearScheduledPracticeSpeak();
  scheduledPracticeSpeakTimer = setTimeout(() => {
    scheduledPracticeSpeakTimer = null;
    speak({ fromSchedule: true });
    if (typeof afterSpeak === "function") afterSpeak();
  }, delay);
}

function speak(options = {}) {
  if (!options.fromSchedule) clearScheduledPracticeSpeak();
  const itemNow = currentItem();
  const playSlow = slowSpeech;
  const sources = getPracticeAudioSources({ slow: playSlow });
  playAudioSources(
    sources,
    () => browserSpeakText(itemNow.hanzi, { slow: playSlow, stage: itemNow.stage }),
    { item: itemNow, speed: playSlow ? "slow" : "normal", sources },
  );
  slowSpeech = false;
}

function ensureAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume();
}

function getFallbackTonePattern(kind) {
  const patterns = {
    "record-start": { frequencies: [660, 920], waveform: "sine", volume: 0.028, duration: 0.07, step: 0.065, attack: 0.006 },
    "record-stop": { frequencies: [880, 620], waveform: "sine", volume: 0.026, duration: 0.085, step: 0.075, attack: 0.006 },
    correct: { frequencies: [880, 1320], waveform: "sine", volume: 0.018, duration: 0.052, step: 0.048, attack: 0.004 },
    success: { frequencies: [784, 988, 1318], waveform: "sine", volume: 0.018, duration: 0.052, step: 0.046, attack: 0.004 },
    error: { frequencies: [260, 196], waveform: "triangle", volume: 0.018, duration: 0.07, step: 0.058, attack: 0.004 },
    key: { frequencies: [1250], waveform: "square", volume: 0.012, duration: 0.038, step: 0.034, attack: 0.004 },
  };
  return patterns[kind] || patterns.key;
}

function playTone(kind) {
  ensureAudio();
  if (!audioContext) return;
  const pattern = globalThis.soundEffects?.getTonePattern
    ? globalThis.soundEffects.getTonePattern(kind)
    : getFallbackTonePattern(kind);
  const safePattern = pattern || getFallbackTonePattern(kind);
  const now = audioContext.currentTime;
  safePattern.frequencies.forEach((freq, index) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = now + index * safePattern.step;
    osc.type = safePattern.waveform;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(safePattern.volume, start + safePattern.attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + safePattern.duration);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start(start);
    osc.stop(start + safePattern.duration + 0.02);
  });
}

function burst() {
  const layer = $("#burstLayer");
  layer.innerHTML = "";
  for (let i = 0; i < 38; i += 1) {
    const part = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 38;
    const dist = 80 + Math.random() * 140;
    part.className = "particle";
    part.style.left = `${window.innerWidth / 2}px`;
    part.style.top = `${window.innerHeight / 2}px`;
    part.style.setProperty("--x", `${Math.cos(angle) * dist}px`);
    part.style.setProperty("--y", `${Math.sin(angle) * dist}px`);
    layer.appendChild(part);
    part.addEventListener("animationend", () => part.remove());
  }
}

function bindEvents() {
  $("#langToggle")?.addEventListener("click", () => {
    state.lang = state.lang === "vi" ? "zh" : "vi";
    saveState();
    renderAll();
  });
  document.addEventListener("keydown", (event) => {
    if (event.target?.id === "homeDesktopSearchInput" && event.key === "Enter") {
      state.vocabSearchQuery = event.target.value.trim();
      navigatePrimaryTab("vocab");
    }
    const homeModuleCard = event.target?.closest?.(".home-desktop-module-card[data-home-module], .home-mobile-module-card[data-home-module]");
    if (homeModuleCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      navigatePrimaryTab(homeModuleCard.dataset.homeModule);
    }
    const homeNavCard = event.target?.closest?.(".home-desktop-feature-card[data-home-nav]");
    if (homeNavCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      const target = homeNavCard.dataset.homeNav;
      if (target === "account") openAccountScreen();
      else if (target) navigatePrimaryTab(target);
    }
    const homeTopicCard = event.target?.closest?.(".home-mobile-topic-card[data-home-topic]");
    if (homeTopicCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openDailyTopicFromHome(homeTopicCard.dataset.homeTopic);
    }
    const writeDailyThemeCard = event.target?.closest?.("[data-write-daily-theme]");
    if (writeDailyThemeCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      writeDailyThemeCard.click();
    }
  });
  let writeTopicCarouselDrag = null;
  document.addEventListener("pointerdown", (event) => {
    const carousel = event.target?.closest?.(".write-communication-topic-carousel");
    if (!carousel || event.button > 0) return;
    writeTopicCarouselDrag = {
      carousel,
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: carousel.scrollLeft,
      moved: false,
    };
  });
  document.addEventListener("pointermove", (event) => {
    if (!writeTopicCarouselDrag) return;
    const drag = writeTopicCarouselDrag;
    const deltaX = event.clientX - drag.startX;
    if (Math.abs(deltaX) > 4) {
      if (!drag.moved) {
        drag.moved = true;
        drag.carousel.classList.add("is-dragging");
        drag.carousel.setPointerCapture?.(drag.pointerId);
      }
      drag.carousel.dataset.dragSuppress = "true";
      drag.carousel.scrollLeft = drag.scrollLeft - deltaX;
      event.preventDefault();
    }
  }, { passive: false });
  const endWriteTopicCarouselDrag = (event) => {
    if (!writeTopicCarouselDrag) return;
    const drag = writeTopicCarouselDrag;
    if (drag.carousel.hasPointerCapture?.(drag.pointerId)) {
      drag.carousel.releasePointerCapture?.(drag.pointerId);
    }
    drag.carousel.classList.remove("is-dragging");
    if (drag.moved) {
      window.setTimeout(() => {
        delete drag.carousel.dataset.dragSuppress;
      }, 80);
    }
    writeTopicCarouselDrag = null;
  };
  document.addEventListener("pointerup", endWriteTopicCarouselDrag);
  document.addEventListener("pointercancel", endWriteTopicCarouselDrag);
  const prefetchHskLevelFromTarget = (target) => {
    const levelButton = target?.closest?.("[data-level], [data-write-hsk-level]");
    const levelKey = levelButton?.dataset?.level || levelButton?.dataset?.writeHskLevel;
    prefetchHskLevelContent(levelKey);
  };
  document.addEventListener("pointerover", (event) => {
    prefetchHskLevelFromTarget(event.target);
  }, { passive: true });
  document.addEventListener("touchstart", (event) => {
    prefetchHskLevelFromTarget(event.target);
  }, { passive: true });
  document.addEventListener("click", (event) => {
    if (event.target.closest?.("[data-hsk-level-back]")) {
      event.preventDefault();
      event.stopPropagation();
      backToHskLevelPicker();
    }


    if (event.target.closest?.("[data-daily-back-themes]")) {
      event.preventDefault();
      event.stopPropagation();
      backToDailyThemeList();
    }
  }, true);
  const menuToggleBtn = $("#menuToggleBtn");
  const mobileMenu = $("#mobileMenu");
  if (menuToggleBtn && mobileMenu) {
    menuToggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }
  $("#mobileBottomNav")?.addEventListener("click", (event) => {
    const bottomNavBtn = event.target.closest("[data-bottom-nav]");
    if (bottomNavBtn) {
      if (bottomNavBtn.dataset.bottomNav === "vip") {
        showUpgradePlansModal();
        return;
      }
      navigatePrimaryTab(bottomNavBtn.dataset.bottomNav);
    }
  });
  $("#backBtn")?.addEventListener("click", () => {
    if (state.screen === "practice" || state.screen === "complete") {
      backFromPracticeToCourse();
    } else if (state.screen === "course") {
      if (state.module === "hsk" && !state.hskLevelPicker) {
        state.hskLevelPicker = true;
        state.hskPendingLessonId = "";
        state.hskContentType = "";
        renderCourse();
        return;
      }
      setScreen("home");
    }
  });
  $("#app").addEventListener("submit", async (event) => {
    const accountForm = event.target.closest("#accountForm");
    if (accountForm) {
      event.preventDefault();
      const fullName = accountForm.querySelector("#accountNameInput")?.value.trim();
      const emailValue = accountForm.querySelector("#accountEmailInput")?.value.trim();
      const nextLevel = accountForm.querySelector("#accountLevelInput")?.value;
      const nextLang = accountForm.querySelector("#accountLangInput")?.value;
      if (fullName) state.user.fullName = fullName;
      if (emailValue) state.user.email = emailValue;
      if (nextLevel) {
        state.level = nextLevel;
        state.user.currentLevel = nextLevel;
      }
      if (nextLang) state.lang = nextLang;
      saveState();
      try {
        await persistAccountProfile();
        recordUserActivity("profile");
        renderChrome();
        renderAccount();
        if (state.screen === "course") renderCourse();
        if (state.screen === "home") renderHome();
        showToast(state.lang === "vi" ? "Đã lưu thông tin tài khoản" : "已保存账户信息");
      } catch (error) {
        showToast(error.message || (state.lang === "vi" ? "Không thể lưu thông tin tài khoản" : "无法保存账户信息"));
      }
      return;
    }

    const adminLoginForm = event.target.closest("#adminLoginForm");
    if (!adminLoginForm) return;
    event.preventDefault();
    const email = $("#adminLoginEmail")?.value.trim();
    const password = $("#adminLoginPassword")?.value || "";
    state.adminStatus = state.lang === "vi" ? "Đang kiểm tra tài khoản admin..." : "正在验证管理员账户...";
    renderAdmin();
    apiRequest("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((data) => {
        if (!isAdminPortalRole(data.user?.role)) {
          throw new Error(state.lang === "vi" ? "Tai khoan nay khong co quyen vao khu quan tri." : "This account cannot access the admin portal.");
        }
        state.adminUser = data.user;
        state.user = data.user;
        state.adminTab = getDefaultAdminTabForRole(getAdminPortalRole(data.user));
        state.adminStatus = "";
        saveState();
        renderChrome();
        renderAdmin();
        loadActiveAdminTabData();
      })
      .catch((error) => {
        state.adminStatus = error.message;
        renderAdmin();
      });
  });
  $("#app").addEventListener("click", async (event) => {
    if (event.target.closest("[data-mobile-page-back]")) {
      handleMobilePageBack();
      return;
    }


    if (state.screen === "listening") {
      const listeningGatewayBackBtn = event.target.closest("[data-listening-gateway-back]");
      if (listeningGatewayBackBtn) {
        navigatePrimaryTab("home");
        return;
      }
      const listeningStartBtn = event.target.closest("[data-listening-start]");
      if (listeningStartBtn) {
        document.querySelector(".listening-gateway-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const listeningDashboardBackBtn = event.target.closest("[data-listening-dashboard-back]");
      if (listeningDashboardBackBtn) {
        state.listeningView = "levels";
        renderListening();
        return;
      }
      const listeningTopicListBtn = event.target.closest("[data-listening-topic-list]");
      if (listeningTopicListBtn) {
        event.preventDefault();

        const topicId = listeningTopicListBtn.dataset.listeningTopicId || getListeningTopicByEpisodeId(listeningTopicListBtn.dataset.listeningTopicList)?.id || "";
        if (showFastVipPromptIfKnownLocked(isListeningContentLocked(topicId), showListeningLockedMessage)) return;
        await refreshContentLocksIfStale(0, { force: true });
        if (isListeningContentLocked(topicId)) {
          showListeningLockedMessage();
          return;
        }

        state.listeningSeedEpisodeId = listeningTopicListBtn.dataset.listeningTopicList;
        state.listeningLessonsBackTarget = "dashboard";
        state.listeningView = "lessons";
        state.listeningSentenceIndex = 0;
        state.listeningVocabPracticeIndex = 0;

        state.listeningLevelId = listeningTopicListBtn.dataset.listeningTopicLevel || state.listeningLevelId;

        renderListening();
        return;
      }
      const listeningTopicOpenBtn = event.target.closest("[data-listening-topic-open]");
      if (listeningTopicOpenBtn) {
        event.preventDefault();
        const lessonId = listeningTopicOpenBtn.dataset.listeningTopicOpen;
        const topicId = getListeningTopicByEpisodeId(lessonId)?.id || "";
        if (showFastVipPromptIfKnownLocked(isListeningContentLocked(topicId, lessonId), showListeningLockedMessage)) return;
        await refreshContentLocksIfStale(0, { force: true });
        if (isListeningContentLocked(topicId, lessonId)) {
          showListeningLockedMessage();
          return;
        }
        state.listeningEpisodeId = listeningTopicOpenBtn.dataset.listeningTopicOpen;
        state.listeningBackTarget = "lessons";
        state.listeningView = "detail";
        state.listeningSentenceIndex = 0;
        renderListening();
        return;
      }

      if (event.target.closest("[data-listening-level-back]")) {
        state.listeningView = state.listeningLessonsBackTarget || "levels";
        state.listeningLessonsBackTarget = "levels";
        state.listeningSeedEpisodeId = "";
        state.listeningTopicId = "";
        renderListening();
        return;
      }
      const listeningOpenBtn = event.target.closest("[data-listening-open]");
      if (listeningOpenBtn) {
        event.preventDefault();
        const lessonId = listeningOpenBtn.dataset.listeningOpen;
        const topicId = getListeningTopicByEpisodeId(lessonId)?.id || "";
        if (showFastVipPromptIfKnownLocked(isListeningContentLocked(topicId, lessonId), showListeningLockedMessage)) return;
        await refreshContentLocksIfStale(0, { force: true });
        if (isListeningContentLocked(topicId, lessonId)) {
          showListeningLockedMessage();
          return;
        }

        if (state.listeningView === "dashboard" && listeningOpenBtn.closest(".listening-topic-card")) {
          state.listeningSeedEpisodeId = listeningOpenBtn.dataset.listeningOpen;
          state.listeningTopicId = "";
          state.listeningLessonsBackTarget = "dashboard";
          state.listeningView = "lessons";
          state.listeningSentenceIndex = 0;
          state.listeningVocabPracticeIndex = 0;
          renderListening();
          return;
        }

        state.listeningEpisodeId = listeningOpenBtn.dataset.listeningOpen;
        state.listeningView = "detail";
        state.listeningSentenceIndex = 0;
        renderListening();
        return;
      }

      const listeningLevelBtn = event.target.closest("[data-listening-level]");
      if (listeningLevelBtn) {
        openListeningLevel(listeningLevelBtn.dataset.listeningLevel);
        return;
      }

      if (event.target.closest("[data-listening-back]")) {
        state.listeningView = state.listeningBackTarget === "lessons" ? "lessons" : "dashboard";
        state.listeningBackTarget = "";
        renderListening();
        return;
      }

      if (event.target.closest("[data-listening-keyword-close]")) {
        closeListeningKeywordPopup();
        return;
      }

      if (event.target.closest("[data-listening-vocab-back]")) {
        state.listeningView = "detail";
        renderListening();
        return;
      }

      if (event.target.closest("[data-listening-repeat-back]")) {
        state.listeningView = "detail";
        renderListening();
        return;
      }

      const listeningSpeedToggle = event.target.closest("[data-listening-speed-toggle]");
      if (listeningSpeedToggle) {
        const speedMenu = listeningSpeedToggle.closest(".listening-speed-menu");
        const shouldOpen = !speedMenu?.classList.contains("open");
        closeListeningSpeedMenus();
        speedMenu?.classList.toggle("open", shouldOpen);
        const isOpen = Boolean(shouldOpen && speedMenu);
        listeningSpeedToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        return;
      }

      const listeningRateBtn = event.target.closest("[data-listening-rate]");
      if (listeningRateBtn) {
        setListeningPlaybackRate(Number(listeningRateBtn.dataset.listeningRate || 1));
        const speedMenu = listeningRateBtn.closest(".listening-speed-menu");
        speedMenu?.classList.remove("open");
        speedMenu?.querySelector("[data-listening-speed-toggle]")?.setAttribute("aria-expanded", "false");
        return;
      }

      const subtitleToggle = event.target.closest("[data-listening-subtitle-mode]");
      if (subtitleToggle) {
        applyListeningSubtitleMode(subtitleToggle.dataset.listeningSubtitleMode || "pinyin-zh", subtitleToggle);
        return;
      }

      const listeningTranslationBtn = event.target.closest("[data-listening-translation]");
      if (listeningTranslationBtn) {
        applyListeningSubtitleMode(state.listeningSubtitleMode === "both" || state.listeningSubtitleMode === "vi" ? "pinyin-zh" : "both", listeningTranslationBtn);
        return;
      }

      const listeningSentenceBtn = event.target.closest("[data-listening-sentence]");
      if (listeningSentenceBtn) {
        seekListeningSentence(Number(listeningSentenceBtn.dataset.listeningSentence || 0), true);
        return;
      }

      const listeningTitleSentenceBtn = event.target.closest("[data-listening-title-sentence]");
      if (listeningTitleSentenceBtn) {
        seekListeningTitleSentence(true);
        return;
      }

      const listeningKeywordSpeakBtn = event.target.closest("[data-listening-keyword-speak]");
      if (listeningKeywordSpeakBtn) {
        playListeningKeyword(Number(listeningKeywordSpeakBtn.dataset.listeningKeywordSpeak || 0), {
          slow: listeningKeywordSpeakBtn.dataset.listeningKeywordRate === "slow",
        });
        return;
      }

      const listeningKeywordBtn = event.target.closest("[data-listening-keyword]");
      if (listeningKeywordBtn) {
        selectListeningKeyword(Number(listeningKeywordBtn.dataset.listeningKeyword || 0), listeningKeywordBtn);
        return;
      }

      const vocabSpeakBtn = event.target.closest("[data-listening-vocab-speak]");
      if (vocabSpeakBtn) {
        playListeningKeyword(state.listeningVocabPracticeIndex, {
          slow: vocabSpeakBtn.dataset.listeningVocabSpeak === "slow",
        });
        return;
      }

      const vocabExampleSpeakBtn = event.target.closest("[data-listening-vocab-example-speak]");
      if (vocabExampleSpeakBtn) {
        const keyword = getListeningKeyword(state.listeningVocabPracticeIndex);
        const examples = getListeningKeywordExamples(keyword).map((example) => normalizeListeningKeywordExample(example, keyword));
        const example = examples[Number(vocabExampleSpeakBtn.dataset.listeningVocabExampleSpeak || 0)];
        const sources = uniqueAudioSources([vocabExampleSpeakBtn.dataset.listeningVocabExampleAudio, example?.audioSrc]);
        const segmentStart = Number(vocabExampleSpeakBtn.dataset.listeningVocabExampleStart || example?.start);
        const segmentEnd = Number(vocabExampleSpeakBtn.dataset.listeningVocabExampleEnd || example?.end);
        if (example?.chinese) {
          const fallback = () => browserSpeakText(example.chinese, { stage: "sentence", rate: 0.98 });
          const meta = {
            text: example.chinese,
            speed: "normal",
            sources,
          };
          if (sources[0] && Number.isFinite(segmentStart) && Number.isFinite(segmentEnd) && segmentEnd > segmentStart) {
            playAudioSegmentSource(sources[0], segmentStart, segmentEnd, fallback, meta);
          } else {
            playAudioSources(sources, fallback, meta);
          }
        }
        return;
      }

      if (event.target.closest("[data-listening-vocab-prev]")) {
        if (state.listeningVocabPracticeIndex <= 0) {
          state.listeningView = "detail";
          renderListening();
          return;
        }

        state.listeningVocabPracticeIndex -= 1;
        if (state.listeningView === "vocab") renderListeningVocabLesson({ preserveScroll: true });
        else renderListeningVocabPractice(state.listeningVocabPracticeIndex);
        return;
      }

      if (event.target.closest("[data-listening-vocab-next]")) {
        const episode = getListeningEpisode();
        state.listeningVocabPracticeIndex = (state.listeningVocabPracticeIndex + 1) % Math.max(1, episode.keywords.length);
        if (state.listeningView === "vocab") renderListeningVocabLesson({ preserveScroll: true });
        else renderListeningVocabPractice(state.listeningVocabPracticeIndex);
        return;
      }

      const listeningJumpBtn = event.target.closest("[data-listening-jump]");
      if (listeningJumpBtn) {
        if (listeningJumpBtn.dataset.listeningJump === "vocab") {
          state.listeningView = "vocab";
          renderListening();
          return;
        }
        if (listeningJumpBtn.dataset.listeningJump === "repeat") {
          resetListeningRepeatAttempt();
          state.listeningView = "repeat";
          state.listeningSentenceIndex = 0;
          renderListening();
          return;
        }
        return;
      }

      const listeningRepeatSentenceBtn = event.target.closest("[data-listening-repeat-sentence]");
      if (listeningRepeatSentenceBtn) {
        setListeningRepeatLessonSentence(Number(listeningRepeatSentenceBtn.dataset.listeningRepeatSentence || 0));
        renderListeningRepeatLesson({ preserveScroll: true });
        return;
      }

      const listeningRepeatPlayBtn = event.target.closest("[data-listening-repeat-play]");
      if (listeningRepeatPlayBtn) {
        const nextIndex = Number(listeningRepeatPlayBtn.dataset.listeningRepeatPlay || 0);
        stopListeningRepeatListenPlayback();
        if (nextIndex !== state.listeningSentenceIndex) {
          setListeningRepeatLessonSentence(nextIndex);
          renderListeningRepeatLesson({ preserveScroll: true });
        }
        speakListeningSentence(nextIndex);
        return;
      }

      if (event.target.closest("[data-listening-repeat-current-play]")) {
        toggleListeningRepeatSentencePlayback();
        return;
      }

      if (event.target.closest("[data-listening-repeat-prev]")) {
        setListeningRepeatLessonSentence(state.listeningSentenceIndex - 1);
        renderListeningRepeatLesson({ preserveScroll: true });
        return;
      }

      if (event.target.closest("[data-listening-repeat-next]")) {
        const episode = getListeningEpisode();
        const total = Math.max(1, episode.sentences.length);
        setListeningRepeatLessonSentence((state.listeningSentenceIndex + 1) % total);
        renderListeningRepeatLesson({ preserveScroll: true });
        return;
      }

      if (event.target.closest("[data-listening-play]")) {
        bindListeningAudioEvents();
        toggleListeningPlayback();
        return;
      }

      if (event.target.closest("[data-listening-prev]")) {
        const episode = getListeningEpisode();
        const titleIsActive = Boolean(document.querySelector(".listening-sentence-list [data-listening-title-sentence].active")) || isListeningTitleAudioPhase();
        if (!titleIsActive && state.listeningSentenceIndex <= 0 && episode.titleAudioSrc) {
          seekListeningTitleSentence(true);
        } else {
          seekListeningSentence(state.listeningSentenceIndex - 1, true);
        }
        return;
      }

      if (event.target.closest("[data-listening-next]")) {
        seekListeningSentence(state.listeningSentenceIndex + 1, true);
        return;
      }

      if (event.target.closest("[data-listening-replay]")) {
        seekListeningSentence(state.listeningSentenceIndex, true);
        return;
      }

      if (event.target.closest("[data-listening-record]")) {
        startListeningRepeatRecording();
        return;
      }

      if (event.target.closest("[data-listening-recording-play]")) {
        playListeningRepeatRecording();
        return;
      }

      if (event.target.closest("[data-listening-save]")) {
        const episode = getListeningEpisode();
        if (state.listeningSaved.has(episode.id)) state.listeningSaved.delete(episode.id);
        else state.listeningSaved.add(episode.id);
        saveState();
        renderListening({ preserveScroll: true });
        return;
      }
    }

    if (event.target.closest("[data-home-login]")) {
      showModal("login");
      return;
    }

    const homeProfileVipAction = event.target.closest("[data-home-profile-vip]");
    if (homeProfileVipAction) {
      if (homeProfileVipAction.dataset.homeProfileVip === "account") {
        openAccountScreen();
      } else {
        showUpgradePlansModal();
      }
      return;
    }

    const cancelAccountPanel = event.target.closest("#cancelAccountPanel");
    if (cancelAccountPanel && state.screen === "account") {
      renderAccount();
      return;
    }

    const sidebarVipUpgradeBtn = event.target.closest("[data-sidebar-vip-upgrade]");
    if (sidebarVipUpgradeBtn) {
      showUpgradePlansModal();
      return;
    }

    const accountUpgradeBtn = event.target.closest(".account-upgrade-btn");
    if (accountUpgradeBtn && state.screen === "account") {
      showUpgradePlansModal();
      return;
    }

    if (event.target.closest("[data-account-activities-all]") && state.screen === "account") {
      showRecentActivitiesDrawer();
      return;
    }

    const accountMobileLanguageBtn = event.target.closest("#accountMobileLanguageBtn");
    const homeDesktopLanguageBtn = event.target.closest("#homeDesktopLanguageBtn");
    const homeDesktopTopbarLanguageBtn = event.target.closest("#homeDesktopTopbarLanguageBtn");
    if ((accountMobileLanguageBtn && state.screen === "account") || homeDesktopLanguageBtn || homeDesktopTopbarLanguageBtn) {
      state.lang = state.lang === "vi" ? "zh" : "vi";
      localStorage.setItem("v2-lang", state.lang);
      saveState();
      renderChrome();
      renderAll();
      return;
    }

    const accountAvatarEditBtn = event.target.closest("#accountAvatarEditBtn");
    if (accountAvatarEditBtn) {
      document.getElementById("accountAvatarInput")?.click();
      return;
    }

    if (event.target.closest("#accountOpenEmailVerificationBtn")) {
      showEmailVerificationModal();
      return;
    }

    if (event.target.closest("#accountSendEmailCodeBtn")) {
      sendAccountEmailVerificationCode();
      return;
    }

    if (event.target.closest("#accountConfirmEmailCodeBtn")) {
      confirmAccountEmailVerificationCode();
      return;
    }

    const accountChangePasswordBtn = event.target.closest("#accountChangePasswordBtn, #accountMobileChangePasswordBtn, #accountDesktopChangePasswordBtn, #accountDesktopChangePasswordAltBtn");
    if (accountChangePasswordBtn) {
      showChangePasswordModal();
      return;
    }

    if (event.target.closest("[data-account-logout]")) {
      logoutCurrentUser();
      return;
    }

    // Mobile menu handlers
    const mobileHskBtn = event.target.closest("#mobileHskBtn");
    if (mobileHskBtn) {
      state.fromRoadmap = false;
      state.module = "hsk";
      state.hskLevelPicker = true;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const mobileDailyBtn = event.target.closest("#mobileDailyBtn");
    if (mobileDailyBtn) {
      state.fromRoadmap = false;
      state.module = "daily";
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const mobileVocabBtn = event.target.closest("#mobileVocabBtn");
    if (mobileVocabBtn) {
      state.fromRoadmap = false;
      renderVocab();
      setScreen("vocab");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const mobileAdminBtn = event.target.closest("#mobileAdminBtn");
    if (mobileAdminBtn) {
      if (BACKEND_DISABLED) {
        showToast(backendDisabledMessage());
        $("#mobileMenu")?.classList.remove("active");
        return;
      }
      state.fromRoadmap = false;
      renderAdmin();
      setScreen("admin");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const loginBtn = event.target.closest("#loginBtn") || event.target.closest("#mobileLoginBtn") || event.target.closest("#sidebarLoginBtn");
    if (loginBtn) {
      if (BACKEND_DISABLED) {
        showToast(backendDisabledMessage());
        $("#mobileMenu")?.classList.remove("active");
        return;
      }
      if (!state.user) {
        showModal("login");
      } else {
        openAccountScreen();
      }
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const registerBtn = event.target.closest("#registerBtn") || event.target.closest("#mobileRegisterBtn") || event.target.closest("#sidebarRegisterBtn");
    if (registerBtn) {
      if (state.user) {
        logoutCurrentUser();
      } else if (!BACKEND_DISABLED) {
        showModal("register");
      } else {
        showToast(backendDisabledMessage());
      }
      $("#mobileMenu")?.classList.remove("active");
      return;
    }

    if (event.target.closest("#homeDesktopLogoutBtn")) {
      logoutCurrentUser();
      return;
    }

    // Middle Nav Items Click Handlers
    const navHskBtn = event.target.closest("#navHskBtn");
    if (navHskBtn) {
      state.fromRoadmap = false;
      state.module = "hsk";
      state.hskLevelPicker = true;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      return;
    }
    const navDailyBtn = event.target.closest("#navDailyBtn");
    if (navDailyBtn) {
      state.fromRoadmap = false;
      state.module = "daily";
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      return;
    }
    const navVocabBtn = event.target.closest("#navVocabBtn");
    if (navVocabBtn) {
      state.fromRoadmap = false;
      renderVocab();
      setScreen("vocab");
      return;
    }
    const navAdminBtn = event.target.closest("#navAdminBtn");
    if (navAdminBtn) {
      if (BACKEND_DISABLED) {
        showToast(backendDisabledMessage());
        return;
      }
      state.fromRoadmap = false;
      renderAdmin();
      setScreen("admin");
      return;
    }

    const adminLoadUsersBtn = event.target.closest("#adminLoadUsersBtn") || event.target.closest("#adminRefreshBtn");
    if (adminLoadUsersBtn) {
      loadAdminUsers();
      return;
    }

    const adminLogoutBtn = event.target.closest("#adminLogoutBtn");
    if (adminLogoutBtn && state.screen === "admin") {
      logoutAdminUser();
      return;
    }

    const adminCreateAccountBtn = event.target.closest("#adminCreateAccountBtn");
    if (adminCreateAccountBtn && state.screen === "admin") {
      showAdminCreateAccountModal();
      return;
    }

    const adminUserPageBtn = event.target.closest("[data-admin-user-page]");
    if (adminUserPageBtn && state.screen === "admin") {
      state.adminUserPage = Math.max(1, Number(adminUserPageBtn.dataset.adminUserPage || 1));
      loadAdminUsers();
      return;
    }

    const adminLanguageBtn = event.target.closest("#adminLanguageBtn") || event.target.closest("#adminLanguageInlineBtn");
    if (adminLanguageBtn && state.screen === "admin") {
      state.lang = state.lang === "vi" ? "zh" : "vi";
      localStorage.setItem("v2-lang", state.lang);
      saveState();
      renderChrome();
      renderAdmin();
      return;
    }

    const adminCtvPageBtn = event.target.closest("[data-admin-ctv-page]");
    if (adminCtvPageBtn && state.screen === "admin") {
      state.adminCtvPage = Math.max(1, Number(adminCtvPageBtn.dataset.adminCtvPage || 1));
      renderAdmin();
      return;
    }

    const adminCtvBackListBtn = event.target.closest("[data-admin-ctv-back-list]");
    if (adminCtvBackListBtn && state.screen === "admin") {
      state.adminCtvDetailOpen = false;
      renderAdmin();
      return;
    }

    const adminCtvSelectTarget = event.target.closest("[data-admin-ctv-select]");
    if (adminCtvSelectTarget && state.screen === "admin") {
      state.adminCtvSelectedId = adminCtvSelectTarget.dataset.adminCtvSelect;
      state.adminCtvLinkStatus = "";
      state.adminCtvReferralLinkDraft = "";
      state.adminCtvDetailOpen = true;
      renderAdmin();
      return;
    }

    const adminCtvUserFilterBtn = event.target.closest("[data-admin-ctv-user-filter]");
    if (adminCtvUserFilterBtn && state.screen === "admin") {
      state.adminCtvUserFilter = adminCtvUserFilterBtn.dataset.adminCtvUserFilter || "all";
      renderAdmin();
      return;
    }

    const adminCustomersTabBtn = event.target.closest("#adminCustomersTabBtn");
    if (adminCustomersTabBtn) {
      if (!shouldShowAdminTab("customers")) return;
      state.adminTab = "customers";
      renderAdmin();
      savePersistedRoute();
      if (!state.adminUsers.length) loadAdminUsers();
      return;
    }

    const adminUsersTabBtn = event.target.closest("#adminUsersTabBtn");
    if (adminUsersTabBtn) {
      if (!shouldShowAdminTab("users")) return;
      state.adminTab = "users";
      renderAdmin();
      savePersistedRoute();
      loadAdminContentLocks();
      return;
    }

    const adminVipTabBtn = event.target.closest("#adminVipTabBtn");
    if (adminVipTabBtn) {
      if (!shouldShowAdminTab("vip")) return;
      state.adminTab = "vip";
      renderAdmin();
      savePersistedRoute();
      loadAdminVipManagement();
      return;
    }

    const adminSubscriptionsTabBtn = event.target.closest("#adminSubscriptionsTabBtn");
    if (adminSubscriptionsTabBtn) {
      if (!shouldShowAdminTab("subscriptions")) return;
      state.adminTab = "subscriptions";
      renderAdmin();
      savePersistedRoute();
      return;
    }

    const adminContentTabBtn = event.target.closest("#adminContentTabBtn");
    if (adminContentTabBtn) {
      if (!shouldShowAdminTab("content")) return;
      state.adminTab = "content";
      renderAdmin();
      savePersistedRoute();
      loadAdminContentLocks();
      return;
    }

    const adminCtvTabBtn = event.target.closest("#adminCtvTabBtn");
    if (adminCtvTabBtn) {
      if (!shouldShowAdminTab("collaborators")) return;
      state.adminTab = "collaborators";
      renderAdmin();
      savePersistedRoute();
      if (!state.adminUsers.length) loadAdminUsers();
      return;
    }

    const adminAnalyticsTabBtn = event.target.closest("#adminAnalyticsTabBtn");
    if (adminAnalyticsTabBtn) {
      if (!shouldShowAdminTab("analytics")) return;
      state.adminTab = "analytics";
      renderAdmin();
      savePersistedRoute();
      loadAdminAnalytics();
      return;
    }

    const adminAnalyticsRangeTrigger = event.target.closest("#adminAnalyticsRangeTrigger");
    if (adminAnalyticsRangeTrigger && state.screen === "admin") {
      if (state.adminAnalyticsPickerOpen) {
        state.adminAnalyticsPickerOpen = false;
      } else {
        state.adminAnalyticsPickerOpen = true;
        state.adminAnalyticsDraftFrom = state.adminAnalyticsFrom || "";
        state.adminAnalyticsDraftTo = state.adminAnalyticsTo || "";
        const anchor = analyticsParseYmd(state.adminAnalyticsTo) || analyticsTodayLocal();
        state.adminAnalyticsCalMonth = `${anchor.getFullYear()}-${String(anchor.getMonth()).padStart(2, "0")}`;
      }
      renderAdmin();
      return;
    }

    if (event.target.closest("#adminAnalyticsRangeBackdrop") && state.screen === "admin") {
      state.adminAnalyticsPickerOpen = false;
      renderAdmin();
      return;
    }

    const adminAnalyticsPresetBtn = event.target.closest("[data-analytics-preset]");
    if (adminAnalyticsPresetBtn && state.screen === "admin") {
      const range = analyticsPresetRange(adminAnalyticsPresetBtn.dataset.analyticsPreset);
      state.adminAnalyticsFrom = analyticsToYmd(range.from);
      state.adminAnalyticsTo = analyticsToYmd(range.to);
      state.adminAnalyticsPickerOpen = false;
      state.adminVipContentSummaryPage = 1;
      state.adminVipSessionPage = 1;
      state.adminVipHighEngagementPage = 1;
      savePersistedRoute();
      loadAdminAnalytics();
      return;
    }

    const adminAnalyticsCalNav = event.target.closest("[data-analytics-cal-nav]");
    if (adminAnalyticsCalNav && state.screen === "admin") {
      const base = analyticsParseYmd(`${state.adminAnalyticsCalMonth}-01`) || analyticsTodayLocal();
      base.setMonth(base.getMonth() + Number(adminAnalyticsCalNav.dataset.analyticsCalNav || 0));
      state.adminAnalyticsCalMonth = `${base.getFullYear()}-${String(base.getMonth()).padStart(2, "0")}`;
      renderAdmin();
      return;
    }

    const adminAnalyticsDayBtn = event.target.closest("[data-analytics-day]");
    if (adminAnalyticsDayBtn && state.screen === "admin") {
      const ymd = adminAnalyticsDayBtn.dataset.analyticsDay;
      if (!state.adminAnalyticsDraftFrom || (state.adminAnalyticsDraftFrom && state.adminAnalyticsDraftTo)) {
        state.adminAnalyticsDraftFrom = ymd;
        state.adminAnalyticsDraftTo = "";
      } else if (ymd < state.adminAnalyticsDraftFrom) {
        state.adminAnalyticsDraftTo = state.adminAnalyticsDraftFrom;
        state.adminAnalyticsDraftFrom = ymd;
      } else {
        state.adminAnalyticsDraftTo = ymd;
      }
      renderAdmin();
      return;
    }

    if (event.target.closest("#adminAnalyticsRangeCancel") && state.screen === "admin") {
      state.adminAnalyticsPickerOpen = false;
      renderAdmin();
      return;
    }

    if (event.target.closest("#adminAnalyticsRangeApply") && state.screen === "admin") {
      if (state.adminAnalyticsDraftFrom && state.adminAnalyticsDraftTo) {
        state.adminAnalyticsFrom = state.adminAnalyticsDraftFrom;
        state.adminAnalyticsTo = state.adminAnalyticsDraftTo;
        state.adminAnalyticsPickerOpen = false;
        state.adminVipContentSummaryPage = 1;
        state.adminVipSessionPage = 1;
        state.adminVipHighEngagementPage = 1;
        savePersistedRoute();
        loadAdminAnalytics();
      }
      return;
    }

    const adminAnalyticsVipPageBtn = event.target.closest("[data-admin-analytics-vip-page]");
    if (adminAnalyticsVipPageBtn && state.screen === "admin") {
      if (adminAnalyticsVipPageBtn.disabled) return;
      const kind = adminAnalyticsVipPageBtn.dataset.adminAnalyticsVipPageKind || "";
      const page = Math.max(1, Number(adminAnalyticsVipPageBtn.dataset.adminAnalyticsVipPage || 1));
      if (kind === "content") state.adminVipContentSummaryPage = page;
      if (kind === "sessions") state.adminVipSessionPage = page;
      if (kind === "high-engagement") state.adminVipHighEngagementPage = page;
      renderAdmin();
      return;
    }

    const adminVipRangeTrigger = event.target.closest("#adminVipRangeTrigger");
    if (adminVipRangeTrigger && state.screen === "admin") {
      if (state.adminVipPickerOpen) {
        state.adminVipPickerOpen = false;
      } else {
        state.adminVipPickerOpen = true;
        state.adminVipDraftFrom = state.adminVipFrom || "";
        state.adminVipDraftTo = state.adminVipTo || "";
        const anchor = analyticsParseYmd(state.adminVipTo) || analyticsTodayLocal();
        state.adminVipCalMonth = `${anchor.getFullYear()}-${String(anchor.getMonth()).padStart(2, "0")}`;
      }
      renderAdmin();
      return;
    }

    if (event.target.closest("#adminVipRangeBackdrop") && state.screen === "admin") {
      state.adminVipPickerOpen = false;
      renderAdmin();
      return;
    }

    const adminVipPresetBtn = event.target.closest("[data-admin-vip-preset]");
    if (adminVipPresetBtn && state.screen === "admin") {
      const range = analyticsPresetRange(adminVipPresetBtn.dataset.adminVipPreset);
      state.adminVipFrom = analyticsToYmd(range.from);
      state.adminVipTo = analyticsToYmd(range.to);
      state.adminVipPickerOpen = false;
      state.adminVipUserPage = 1;
      savePersistedRoute();
      loadAdminVipManagement();
      return;
    }

    const adminVipCalNav = event.target.closest("[data-admin-vip-cal-nav]");
    if (adminVipCalNav && state.screen === "admin") {
      const base = analyticsParseYmd(`${state.adminVipCalMonth}-01`) || analyticsTodayLocal();
      base.setMonth(base.getMonth() + Number(adminVipCalNav.dataset.adminVipCalNav || 0));
      state.adminVipCalMonth = `${base.getFullYear()}-${String(base.getMonth()).padStart(2, "0")}`;
      renderAdmin();
      return;
    }

    const adminVipDayBtn = event.target.closest("[data-admin-vip-day]");
    if (adminVipDayBtn && state.screen === "admin") {
      const ymd = adminVipDayBtn.dataset.adminVipDay;
      if (!state.adminVipDraftFrom || (state.adminVipDraftFrom && state.adminVipDraftTo)) {
        state.adminVipDraftFrom = ymd;
        state.adminVipDraftTo = "";
      } else if (ymd < state.adminVipDraftFrom) {
        state.adminVipDraftTo = state.adminVipDraftFrom;
        state.adminVipDraftFrom = ymd;
      } else {
        state.adminVipDraftTo = ymd;
      }
      renderAdmin();
      return;
    }

    if (event.target.closest("#adminVipRangeCancel") && state.screen === "admin") {
      state.adminVipPickerOpen = false;
      renderAdmin();
      return;
    }

    if (event.target.closest("#adminVipRangeApply") && state.screen === "admin") {
      if (state.adminVipDraftFrom && state.adminVipDraftTo) {
        state.adminVipFrom = state.adminVipDraftFrom;
        state.adminVipTo = state.adminVipDraftTo;
        state.adminVipPickerOpen = false;
        state.adminVipUserPage = 1;
        ensureAdminVipRange();
        savePersistedRoute();
        loadAdminVipManagement();
      }
      return;
    }

    const adminVipUserPageBtn = event.target.closest("[data-admin-vip-user-page]");
    if (adminVipUserPageBtn && state.screen === "admin") {
      if (adminVipUserPageBtn.disabled) return;
      const action = adminVipUserPageBtn.dataset.adminVipUserPage;
      const totalPages = Math.max(1, Number(adminVipUserPageBtn.dataset.adminVipTotalPages || 1));
      const currentPage = Math.min(Math.max(1, Number(state.adminVipUserPage || 1)), totalPages);
      let nextPage = currentPage;
      if (action === "prev") nextPage = currentPage - 1;
      else if (action === "next") nextPage = currentPage + 1;
      else {
        const parsedPage = Number(action || currentPage);
        nextPage = Number.isFinite(parsedPage) ? parsedPage : currentPage;
      }
      state.adminVipUserPage = Math.min(Math.max(1, nextPage), totalPages);
      renderAdmin();
      savePersistedRoute();
      return;
    }

    const adminVipPlanFilterBtn = event.target.closest("[data-admin-vip-plan-filter]");
    if (adminVipPlanFilterBtn && state.screen === "admin") {
      state.adminVipPlanFilter = adminVipPlanFilterBtn.dataset.adminVipPlanFilter || "all";
      state.adminVipUserPage = 1;
      renderAdmin();
      savePersistedRoute();
      return;
    }

    const adminCtvCreateLinkBtn = event.target.closest("#adminCtvCreateLinkBtn");
    if (adminCtvCreateLinkBtn) {
      saveAdminCtvReferralLink();
      return;
    }

    const adminCtvCopyLinkBtn = event.target.closest("#adminCtvCopyLinkBtn");
    if (adminCtvCopyLinkBtn) {
      const input = document.getElementById("adminCtvReferralLink");
      const value = input?.value || "";
      if (input) input.select();
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(value).catch(() => { });
      }
      state.adminCtvLinkStatus = state.lang === "vi" ? "Đã sao chép link giới thiệu." : "已复制推广链接。";
      renderAdmin();
      return;
    }



    const adminContentLevelBtn = event.target.closest("[data-admin-content-level]");
    if (adminContentLevelBtn) {
      syncAdminHskContentLocksFromDOM();
      state.adminContentLevel = adminContentLevelBtn.dataset.adminContentLevel;
      renderAdmin();
      savePersistedRoute();
      return;
    }

    const adminContentModuleBtn = event.target.closest("[data-admin-content-module]");
    if (adminContentModuleBtn) {
      syncAdminHskContentLocksFromDOM();
      syncAdminDailyContentLocksFromDOM();
      syncAdminHskLevelCoversFromDOM();
      state.adminContentModule = adminContentModuleBtn.dataset.adminContentModule;
      renderAdmin();
      if (state.adminContentModule === "listening" && !state.adminListeningCatalogTopics.length) {
        loadAdminContentLocks();
      }
      savePersistedRoute();
      return;
    }

    const adminContentHskPanelBtn = event.target.closest("[data-admin-content-hsk-panel]");
    if (adminContentHskPanelBtn) {
      syncAdminHskContentLocksFromDOM();
      syncAdminHskLevelCoversFromDOM();
      state.adminContentHskPanel = adminContentHskPanelBtn.dataset.adminContentHskPanel;
      renderAdmin();
      savePersistedRoute();
      return;
    }

    const adminHskCoverResetBtn = event.target.closest("[data-admin-hsk-cover-reset]");
    if (adminHskCoverResetBtn) {
      const level = adminHskCoverResetBtn.dataset.adminHskCoverReset;
      state.adminHskLevelCovers[level] = "";
      const urlInput = document.querySelector(`[data-admin-hsk-cover-url="${level}"]`);
      if (urlInput) urlInput.value = "";
      updateAdminHskLevelCoverPreview(level);
      return;
    }

    const adminContentDailyLockToggle = event.target.closest("[data-admin-content-daily-lock]");
    if (adminContentDailyLockToggle && adminContentDailyLockToggle.matches("input[type='checkbox']")) {
      updateAdminDailyLockConfig(adminContentDailyLockToggle.dataset.adminContentDailyLock, {
        lockedForFree: adminContentDailyLockToggle.checked,
      });
      renderAdmin();
      return;
    }

    const adminListeningTopicLock = event.target.closest("[data-admin-listening-topic-lock]");
    if (adminListeningTopicLock && adminListeningTopicLock.matches("input[type='checkbox']")) {
      state.adminListeningTopicLocks[adminListeningTopicLock.dataset.adminListeningTopicLock] = adminListeningTopicLock.checked;
      renderAdmin();
      return;
    }

    const adminListeningTopicSelect = event.target.closest("[data-admin-listening-topic-select]");
    if (adminListeningTopicSelect && !event.target.closest("input")) {
      state.adminListeningSelectedTopicId = adminListeningTopicSelect.dataset.adminListeningTopicSelect || "";
      renderAdmin();
      return;
    }

    if (event.target.closest("[data-admin-listening-topic-back]")) {
      state.adminListeningSelectedTopicId = "";
      renderAdmin();
      return;
    }

    const adminListeningLessonLock = event.target.closest("[data-admin-listening-lesson-lock]");
    if (adminListeningLessonLock && adminListeningLessonLock.matches("input[type='checkbox']")) {
      state.adminListeningLessonLocks[adminListeningLessonLock.dataset.adminListeningLessonLock] = adminListeningLessonLock.checked;
      renderAdmin();
      return;
    }

    const adminLockAllContentBtn = event.target.closest("#adminLockAllContentBtn");
    if (adminLockAllContentBtn) {
      if ((state.adminContentModule || "hsk") === "daily") {
        dailyThemes.forEach((theme) => {
          updateAdminDailyLockConfig(theme.id, { freeItemLimit: 8, freeWordLimit: 8, freeSentenceLimit: 8 });
        });
      } else {
        const level = state.adminContentLevel || "HSK2";
        (hskLevels[level] || []).forEach((lesson) => {
          updateAdminHskLockConfig(lesson.id, { freeItemLimit: 8, freeWordLimit: 8, freeSentenceLimit: 8 });
        });
      }
      renderAdmin();
      return;
    }

    const adminUnlockAllContentBtn = event.target.closest("#adminUnlockAllContentBtn");
    if (adminUnlockAllContentBtn) {
      if ((state.adminContentModule || "hsk") === "daily") {
        dailyThemes.forEach((theme) => {
          updateAdminDailyLockConfig(theme.id, { freeItemLimit: 0, freeWordLimit: 0, freeSentenceLimit: 0 });
        });
      } else {
        const level = state.adminContentLevel || "HSK2";
        (hskLevels[level] || []).forEach((lesson) => {
          updateAdminHskLockConfig(lesson.id, { lockedForFree: false, freeItemLimit: 0, freeWordLimit: 0, freeSentenceLimit: 0 });
        });
      }
      renderAdmin();
      return;
    }

    const adminSaveContentLocksBtn = event.target.closest("#adminSaveContentLocksBtn");
    if (adminSaveContentLocksBtn) {
      const isVi = state.lang === "vi";
      if ((state.adminContentModule || "hsk") === "listening") {
        const catalog = getListeningLocksCatalog();
        const topics = catalog.topics.map((topic) => ({
          topicId: topic.topicId,
          titleVi: topic.titleVi,
          titleZh: topic.titleZh,
          sortOrder: topic.sortOrder,
          lockedForFree: state.adminListeningTopicLocks[topic.topicId] === true,
        }));
        const lessons = catalog.lessons.map((lesson) => ({
          lessonId: lesson.lessonId,
          topicId: lesson.topicId,
          titleVi: lesson.titleVi,
          titleZh: lesson.titleZh,
          sortOrder: lesson.sortOrder,
          lockedForFree: state.adminListeningLessonLocks[lesson.lessonId] === true,
        }));
        state.adminContentStatus = isVi ? "Đang lưu khóa Luyện nghe..." : "正在保存听力锁定...";
        renderAdmin();
        apiRequest("/api/admin/content/listening-locks", {
          method: "PUT",
          headers: { "X-Admin-User-Id": getAdminUserId() },
          body: JSON.stringify({ topics, lessons }),
        }).then((data) => {
          state.adminListeningTopicLocks = buildAdminListeningLocksMap(data.topics || [], "topicId");
          state.adminListeningLessonLocks = buildAdminListeningLocksMap(data.lessons || [], "lessonId");
          state.adminListeningCatalogTopics = data.topics || [];
          state.adminListeningCatalogLessons = data.lessons || [];
          state.adminContentStatus = isVi ? "Đã lưu khóa Luyện nghe." : "听力锁定已保存。";
          loadContentLocks();
          renderAdmin();
        }).catch((error) => {
          state.adminContentStatus = error.message;
          renderAdmin();
        });
        return;
      }
      syncAdminHskContentLocksFromDOM();
      syncAdminDailyContentLocksFromDOM();
      const lessons = getHskLessonsCatalog().map((lesson) => {
        const hskConfig = state.adminContentLocks[lesson.lessonId] || {};
        const freeWordLimit = parseAdminFreeItemLimit(hskConfig.freeWordLimit || hskConfig.freeItemLimit);
        const freeSentenceLimit = parseAdminFreeItemLimit(hskConfig.freeSentenceLimit || hskConfig.freeItemLimit);
        return {
          ...lesson,
          lockedForFree: hskConfig.lockedForFree === true,
          freeItemLimit: Math.max(freeWordLimit, freeSentenceLimit),
          freeWordLimit,
          freeSentenceLimit,
        };
      });
      const themes = getDailyThemesCatalog().map((theme) => {
        const dailyConfig = state.adminContentDailyLocks[theme.themeId] || {};
        const freeWordLimit = parseAdminFreeItemLimit(dailyConfig.freeWordLimit || dailyConfig.freeItemLimit);
        const freeSentenceLimit = parseAdminFreeItemLimit(dailyConfig.freeSentenceLimit || dailyConfig.freeItemLimit);
        return {
          ...theme,
          lockedForFree: dailyConfig.lockedForFree === true,
          freeItemLimit: Math.max(freeWordLimit, freeSentenceLimit),
          freeWordLimit,
          freeSentenceLimit,
        };
      });
      state.adminContentStatus = isVi ? "Đang lưu cấu hình..." : "正在保存配置...";
      renderAdmin();
      const headers = { "X-Admin-User-Id": getAdminUserId() };
      Promise.all([
        apiRequest("/api/admin/content/hsk-locks", {
          method: "PUT",
          headers,
          body: JSON.stringify({ lessons }),
        }),
        apiRequest("/api/admin/content/daily-locks", {
          method: "PUT",
          headers,
          body: JSON.stringify({ themes }),
        }),
      ])
        .then(([hskData, dailyData]) => {
          state.adminContentLocks = buildAdminContentLocksMap(hskData.locks || []);
          state.adminContentDailyLocks = buildAdminContentDailyLocksMap(dailyData.locks || []);
          const lockedHsk = (hskData.locks || []).filter((item) => item.lockedForFree || Number(item.freeItemLimit || 0) > 0).length;
          const lockedDaily = (dailyData.locks || []).filter((item) => item.lockedForFree || Number(item.freeItemLimit || 0) > 0).length;
          state.adminContentStatus = isVi
            ? `Đã lưu. ${lockedHsk} bài HSK có giới hạn Free và ${lockedDaily} chủ đề giao tiếp đang khóa.`
            : `已保存。${lockedHsk} 个 HSK 课程限免配置和 ${lockedDaily} 个交际主题锁定。`;
          loadContentLocks();
          renderAdmin();
        })
        .catch((error) => {
          state.adminContentStatus = error.message;
          renderAdmin();
        });
      return;
    }

    const adminSaveHskLevelCoversBtn = event.target.closest("#adminSaveHskLevelCoversBtn");
    if (adminSaveHskLevelCoversBtn) {
      const isVi = state.lang === "vi";
      syncAdminHskLevelCoversFromDOM();
      const covers = HSK_LEVEL_IDS.map((level) => ({
        level,
        coverUrl: String(state.adminHskLevelCovers[level] || "").trim(),
      }));
      const tooLarge = covers.find((item) => item.coverUrl.startsWith("data:") && item.coverUrl.length > MAX_HSK_LEVEL_COVER_DATA_URL_CHARS);
      if (tooLarge) {
        state.adminContentStatus = isVi
          ? `Ảnh ${tooLarge.level} quá lớn. Giới hạn tối đa khoảng ${MAX_HSK_LEVEL_COVER_MB}MB.`
          : `${tooLarge.level} 的图片太大，最大约 ${MAX_HSK_LEVEL_COVER_MB}MB。`;
        renderAdmin();
        return;
      }
      state.adminContentStatus = isVi ? "Đang lưu ảnh bìa..." : "正在保存封面...";
      renderAdmin();
      const headers = { "X-Admin-User-Id": getAdminUserId() };
      apiRequest("/api/admin/content/hsk-level-covers", {
        method: "PUT",
        headers,
        body: JSON.stringify({ covers }),
      })
        .then((coverData) => {
          state.adminHskLevelCovers = buildAdminHskLevelCoversMap(coverData.covers || []);
          state.adminContentStatus = isVi ? "Đã lưu ảnh bìa các cấp HSK." : "已保存 HSK 等级封面。";
          loadContentLocks().then(() => {
            if (state.screen === "course" && state.hskLevelPicker) renderCourse();
          });
          renderAdmin();
        })
        .catch((error) => {
          state.adminContentStatus = error.message;
          renderAdmin();
        });
      return;
    }

    const adminSaveUser = event.target.closest(".admin-save-user");
    if (adminSaveUser) {
      const row = adminSaveUser.closest("[data-user-id]");
      const userId = row.dataset.userId;
      const payload = buildAdminUserPatchPayload(row);
      state.adminStatus = state.lang === "vi" ? "Đang lưu thay đổi..." : "正在保存更改...";
      renderAdmin();
      apiRequest(`/api/admin/users/${encodeURIComponent(userId)}`, {
        method: "PATCH",
        headers: {
          "X-Admin-User-Id": getAdminUserId(),
        },
        body: JSON.stringify(payload),
      })
        .then(() => loadAdminUsers())
        .catch((error) => {
          state.adminStatus = error.message;
          renderAdmin();
        });
      return;
    }

    const adminVipUser = event.target.closest(".admin-vip-user");
    if (adminVipUser) {
      const row = adminVipUser.closest("[data-user-id]");
      const userId = row.dataset.userId;
      const durationDays = Number(adminVipUser.dataset.vipDays || 0);
      if (!confirmAdminVipUpgrade(userId, durationDays)) return;
      const payload = buildAdminUserPatchPayload(row, {
        plan: "PREMIUM",
        durationDays,
      });
      state.adminStatus = state.lang === "vi" ? `Đang mở VIP ${durationDays} ngày...` : `正在开通 ${durationDays} 天 VIP...`;
      renderAdmin();
      apiRequest(`/api/admin/users/${encodeURIComponent(userId)}`, {
        method: "PATCH",
        headers: {
          "X-Admin-User-Id": getAdminUserId(),
        },
        body: JSON.stringify(payload),
      })
        .then(() => {
          showToast(state.lang === "vi" ? "Đã mở VIP cho người dùng." : "已为用户开通 VIP。");
          return loadAdminUsers();
        })
        .catch((error) => {
          state.adminStatus = error.message;
          renderAdmin();
        });
      return;
    }

    const adminSetVipExpiry = event.target.closest(".admin-set-vip-expiry");
    if (adminSetVipExpiry) {
      const row = adminSetVipExpiry.closest("[data-user-id]");
      const userId = row.dataset.userId;
      const dateValue = row.querySelector(".admin-vip-expiry-input")?.value || "";
      const expiryDate = dateValue ? new Date(`${dateValue}T23:59:59.000Z`) : null;
      if (!expiryDate || Number.isNaN(expiryDate.getTime())) {
        showToast(state.lang === "vi" ? "Vui lòng chọn ngày hết hạn VIP." : "请选择 VIP 到期日期。");
        return;
      }
      if (expiryDate.getTime() <= Date.now()) {
        showToast(state.lang === "vi" ? "Ngày hết hạn phải ở tương lai." : "到期日期必须晚于当前时间。");
        return;
      }
      if (!confirmAdminVipExpiryUpdate(userId, dateValue)) return;
      const user = findAdminUserById(userId);
      const payload = buildAdminUserPatchPayload(row, {
        plan: "PREMIUM",
        premiumUntil: expiryDate.toISOString(),
        vipPlanId: normalizeVipPlanId(user) || null,
      });
      state.adminStatus = state.lang === "vi" ? "Đang cập nhật hạn VIP..." : "正在更新 VIP 到期日期...";
      renderAdmin();
      apiRequest(`/api/admin/users/${encodeURIComponent(userId)}`, {
        method: "PATCH",
        headers: {
          "X-Admin-User-Id": getAdminUserId(),
        },
        body: JSON.stringify(payload),
      })
        .then(() => {
          showToast(state.lang === "vi" ? "Đã cập nhật hạn VIP." : "已更新 VIP 到期日期。");
          return loadAdminUsers();
        })
        .catch((error) => {
          state.adminStatus = error.message;
          renderAdmin();
        });
      return;
    }

    const adminCancelVipUser = event.target.closest(".admin-cancel-vip-user");
    if (adminCancelVipUser) {
      const row = adminCancelVipUser.closest("[data-user-id]");
      const userId = row.dataset.userId;
      if (!confirmAdminVipCancel(userId)) return;
      const payload = buildAdminUserPatchPayload(row, {
        plan: "FREE",
      });
      state.adminStatus = state.lang === "vi" ? "Đang hủy VIP..." : "正在取消 VIP...";
      renderAdmin();
      apiRequest(`/api/admin/users/${encodeURIComponent(userId)}`, {
        method: "PATCH",
        headers: {
          "X-Admin-User-Id": getAdminUserId(),
        },
        body: JSON.stringify(payload),
      })
        .then(() => {
          showToast(state.lang === "vi" ? "Đã hủy VIP cho người dùng." : "已取消用户 VIP。");
          return loadAdminUsers();
        })
        .catch((error) => {
          state.adminStatus = error.message;
          renderAdmin();
        });
      return;
    }

    const adminRoleUser = event.target.closest(".admin-role-user");
    if (adminRoleUser) {
      const assignableRoles = getAdminAssignableRoles();
      if (!isAdminUser() && getAdminPortalRole() !== "staff") {
        showToast(state.lang === "vi" ? "Bạn không có quyền quản lý nhân viên." : "你没有员工权限管理权限。");
        return;
      }
      const row = adminRoleUser.closest("[data-user-id]");
      const userId = row.dataset.userId;
      const roleSelect = row.querySelector(".admin-role-select");
      const nextRole = normalizeAdminRole(roleSelect?.value || row.querySelector('[data-field="role"]')?.value || "user");
      if (!assignableRoles.includes(nextRole)) {
        showToast(state.lang === "vi" ? "Vai trò không hợp lệ." : "角色无效。");
        return;
      }
      if (!confirmAdminRoleChange(userId, nextRole)) return;
      state.adminStatus = state.lang === "vi" ? "Đang cập nhật vai trò..." : "正在更新角色...";
      renderAdmin();
      apiRequest(`/api/admin/users/${encodeURIComponent(userId)}/role`, {
        method: "PATCH",
        headers: {
          "X-Admin-User-Id": getAdminUserId(),
        },
        body: JSON.stringify({ role: nextRole }),
      })
        .then(() => {
          showToast(nextRole === "staff"
            ? (state.lang === "vi" ? "Đã đặt làm CSKH quản trị." : "已设为客服管理员。")
            : (state.lang === "vi" ? "Đã khôi phục thành người dùng thường." : "已恢复为普通用户。"));
          return loadAdminUsers();
        })
        .catch((error) => {
          state.adminStatus = error.message;
          renderAdmin();
        });
      return;
    }

    const adminDeleteUser = event.target.closest(".admin-delete-user");
    if (adminDeleteUser) {
      if (!isAdminUser() && !isStaffAdminUser()) return;
      const row = adminDeleteUser.closest("[data-user-id]");
      showAdminDeleteUserConfirm(row);
      return;
    }

    if (event.target.closest("#homeDesktopLangBtn")) {
      state.lang = state.lang === "vi" ? "zh" : "vi";
      saveState();
      renderAll();
      return;
    }

    if (event.target.closest("#heroStartBtn")) {
      state.module = "hsk";
      state.writeCourseView = "paths";
      state.hskLevelPicker = true;
      renderCourse();
      setScreen("course");
      return;
    }

    const homeTopicBtn = event.target.closest("[data-home-topic]");
    if (homeTopicBtn) {
      openDailyTopicFromHome(homeTopicBtn.dataset.homeTopic);
      return;
    }

    const homeModuleBtn = event.target.closest("[data-home-module]");
    if (homeModuleBtn) {
      if (homeModuleBtn.dataset.homeModule === "vocab") {
        startSavedVocabPractice();
        return;
      }
      navigatePrimaryTab(homeModuleBtn.dataset.homeModule);
      return;
    }

    const homeNavBtn = event.target.closest("[data-home-nav]");
    if (homeNavBtn) {
      const target = homeNavBtn.dataset.homeNav;
      if (target === "account") openAccountScreen();
      else if (target) navigatePrimaryTab(target);
      return;
    }

    if (event.target.closest("#homeDesktopChallengeBtn, #homeMobileChallengeBtn")) {
      state.module = "hsk";
      state.writeCourseView = "paths";
      state.hskLevelPicker = true;
      renderCourse();
      setScreen("course");
      return;
    }

    const homeVocabCard = event.target.closest(".home-desktop-vocab-card, .home-mobile-vocab-card");
    if (homeVocabCard && !event.target.closest(".vocab-speak-btn")) {
      navigatePrimaryTab("vocab");
      return;
    }

    // Roadmap Day clicks
    const roadmapDay = event.target.closest("[data-roadmap-day]");
    if (roadmapDay) {
      const lessonId = roadmapDay.dataset.lessonId;
      const themeId = roadmapDay.dataset.themeId;
      state.fromRoadmap = true;
      if (lessonId) {
        startPractice({ lessonId, mode: "translate", hskContentType: "" });
      } else if (themeId) {
        startPractice({ themeId, mode: "translate" });
      }
      return;
    }

    const benefitBtn = event.target.closest("[data-benefit]");
    if (benefitBtn) {
      const benefitType = benefitBtn.dataset.benefit;
      if (benefitType === "communication") {
        state.module = "daily";
      } else {
        state.module = "hsk";
        state.writeCourseView = "paths";
        state.hskLevelPicker = true;
      }
      state.fromRoadmap = false;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      return;
    }
    const footerNav = event.target.closest("[data-footer-nav]");
    if (footerNav) {
      event.preventDefault();
      const navType = footerNav.dataset.footerNav;
      if (navType === "course") {
        state.module = "hsk";
        state.writeCourseView = "paths";
        state.hskLevelPicker = true;
        state.fromRoadmap = false;
        state.hskPendingLessonId = "";
        state.hskContentType = "";
        state.dailyPendingThemeId = "";
        state.dailyContentType = "";
        renderCourse();
        setScreen("course");
      } else if (navType === "blog") {
        alert(state.lang === "vi" ? "Tính năng Blog đang được phát triển!" : "博客功能正在开发中！");
      }
      return;
    }

    const quickLesson = event.target.closest("[data-quick-lesson]");
    if (quickLesson) {
      startPractice({ lessonId: quickLesson.dataset.quickLesson, mode: "translate", hskContentType: "" });
      return;
    }
    const moduleBtn = event.target.closest("[data-module]");
    if (moduleBtn) {
      if (moduleBtn.dataset.module === "vocab") {
        startSavedVocabPractice();
        return;
      }
      state.module = moduleBtn.dataset.module;
      state.hskLevelPicker = state.module === "hsk";
      state.writeCourseView = state.module === "hsk" ? "paths" : state.writeCourseView;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      return;
    }
    const writePathBackBtn = event.target.closest("[data-write-path-back]");
    if (writePathBackBtn) {
      state.module = "hsk";
      state.writeCourseView = "paths";
      state.hskLevelPicker = true;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderHskCourse();
      return;
    }
    const writeHskLevelBtn = event.target.closest("[data-write-hsk-level]");
    if (writeHskLevelBtn) {
      writeHskLevelBtn.classList.add("is-opening");
      writeHskLevelBtn.setAttribute("aria-busy", "true");
      state.module = "hsk";
      state.level = writeHskLevelBtn.dataset.writeHskLevel;
      state.writeCourseView = "hsk";
      state.hskLevelPicker = false;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      state.dailySearchQuery = "";
      state.dailyFilterTab = "all";
      renderHskCourse();
      return;
    }
    const writeTopicScrollBtn = event.target.closest("[data-write-topic-scroll]");
    if (writeTopicScrollBtn) {
      event.preventDefault();
      event.stopPropagation();
      const communicationCard = writeTopicScrollBtn.closest(".write-path-card--communication-selector");
      const carousel = writeTopicScrollBtn.closest(".write-communication-topic-carousel")
        || communicationCard?.querySelector(".write-communication-topic-carousel");
      if (!carousel) return;
      const direction = writeTopicScrollBtn.dataset.writeTopicScroll === "prev" ? -1 : 1;
      const scrollStep = Math.max(160, Math.round(carousel.clientWidth * 0.74));
      carousel.scrollBy({ left: direction * scrollStep, behavior: "smooth" });
      return;
    }
    const writeDailyThemeBtn = event.target.closest("[data-write-daily-theme]");
    if (writeDailyThemeBtn) {
      event.preventDefault();
      event.stopPropagation();
      const carousel = writeDailyThemeBtn.closest(".write-communication-topic-carousel");
      if (carousel?.dataset.dragSuppress === "true") {
        return;
      }
      const themeId = writeDailyThemeBtn.dataset.writeDailyTheme;
      openDailyTopicFromHome(themeId, { backTarget: "write-communication" });
      return;
    }
    const writePathBtn = event.target.closest("[data-write-path]");
    if (writePathBtn) {
      const nextPath = writePathBtn.dataset.writePath;
      state.module = "hsk";
      state.writeCourseView = nextPath === "communication" ? "communication" : "hsk";
      state.hskLevelPicker = true;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      state.dailySearchQuery = "";
      state.dailyFilterTab = "all";
      renderHskCourse();
      return;
    }
    const writeCommunicationThemeBtn = event.target.closest(".write-communication-screen [data-theme]");
    if (writeCommunicationThemeBtn) {
      const themeId = writeCommunicationThemeBtn.dataset.theme;
      if (showFastVipPromptIfKnownLocked(isDailyThemeLockedForUser(themeId))) return;
      await refreshContentLocksIfStale(0, { force: true });
      if (isDailyThemeLockedForUser(themeId)) {
        promptUpgradeLocked();
        return;
      }
      state.module = "daily";
      state.writeCourseView = "paths";
      state.dailyPendingThemeId = themeId;
      state.dailyContentType = "";
      state.dailyBackTarget = "write-communication";
      renderDailyCourse();
      setScreen("course");
      return;
    }
    const levelBtn = event.target.closest("[data-level]");
    if (levelBtn) {
      state.level = levelBtn.dataset.level;
      state.writeCourseView = "hsk";
      state.hskLevelPicker = false;
      state.hskContentType = "";
      state.hskPendingLessonId = "";
      renderHskCourse();
      return;
    }
    const hskLevelPickerBackBtn = event.target.closest("[data-hsk-level-picker-back]");
    if (hskLevelPickerBackBtn) {
      if (state.module === "hsk" && state.writeCourseView === "hsk") {
        state.writeCourseView = "paths";
        state.hskLevelPicker = true;
        state.hskPendingLessonId = "";
        state.hskContentType = "";
        renderHskCourse();
        return;
      }
      navigatePrimaryTab("home");
      return;
    }
    const hskLevelBackBtn = event.target.closest("[data-hsk-level-back]");
    if (hskLevelBackBtn) {
      backToHskLevelPicker();
      return;
    }
    const hskBackLessonsBtn = event.target.closest("[data-hsk-back-lessons]");
    if (hskBackLessonsBtn) {
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      renderHskCourse();
      return;
    }
    const hskContentTypeBtn = event.target.closest("[data-hsk-content-type]");
    if (hskContentTypeBtn) {
      const nextContentType = hskContentTypeBtn.dataset.hskContentType;
      if (state.hskPendingLessonId) {
        if (showFastVipPromptIfKnownLocked(getHskContentTypeAccessStatus(state.hskPendingLessonId, nextContentType) === "locked", promptHskLessonLocked)) return;
        await refreshContentLocksIfStale(0, { force: true });
        if (getHskContentTypeAccessStatus(state.hskPendingLessonId, nextContentType) === "locked") {
          promptHskLessonLocked();
          return;
        }
        state.hskContentType = nextContentType;
        startPractice({
          lessonId: state.hskPendingLessonId,
          mode: "translate",
          hskContentType: state.hskContentType,
        });
      } else {
        state.hskContentType = nextContentType;
        renderHskCourse();
      }
      return;
    }
    const lessonBtn = event.target.closest("[data-lesson]");
    if (lessonBtn) {
      const lessonId = lessonBtn.dataset.lesson;
      if (showFastVipPromptIfKnownLocked(isHskLessonLockedForUser(lessonId), promptHskLessonLocked)) return;
      await refreshContentLocksIfStale(0, { force: true });
      if (isHskLessonLockedForUser(lessonId)) {
        promptHskLessonLocked();
        return;
      }
      state.hskPendingLessonId = lessonId;
      state.hskContentType = "";
      renderHskCourse();
      return;
    }
    const themeBtn = event.target.closest("[data-theme]");
    if (themeBtn) {
      const themeId = themeBtn.dataset.theme;
      if (showFastVipPromptIfKnownLocked(isDailyThemeLockedForUser(themeId))) return;
      await refreshContentLocksIfStale(0, { force: true });
      if (isDailyThemeLockedForUser(themeId)) {
        promptUpgradeLocked();
        return;
      }
      state.dailyPendingThemeId = themeId;
      state.dailyContentType = "";
      renderDailyCourse();
      return;
    }

    const practiceCloseBtn = event.target.closest("#practiceCloseBtn");
    if (practiceCloseBtn) {
      showQuitModal();
      return;
    }
    const modeBtn = event.target.closest("[data-mode]");
    if (modeBtn) {
      state.mode = modeBtn.dataset.mode;
      resetPractice();
      renderPractice();
      if (state.mode === "dictation") speak();
      return;
    }
    if (event.target.closest("#prevBtn")) prevItem();
    if (event.target.closest("#playBtn")) speak();
    if (event.target.closest("#slowBtn")) {
      slowSpeech = true;
      speak();
    }
    if (event.target.closest("#answerBtn")) showAnswer();
    if (event.target.closest("#nextBtn")) nextItem();
    if (event.target.closest("#saveBtn")) {
      const hanzi = currentItem().hanzi;
      const btn = event.target.closest("#saveBtn");
      if (state.saved.has(hanzi)) {
        state.saved.delete(hanzi);
        btn.classList.remove("saved");
        btn.innerHTML = `<span>★</span>${t("favorite")}`;
        showToast(state.lang === "vi" ? "Đã hủy lưu từ vựng" : "已取消收藏生词");
      } else {
        const savedItem = currentItem();
        state.saved.add(hanzi);
        btn.classList.add("saved");
        btn.innerHTML = `<span>★</span>${state.lang === "vi" ? "Đã lưu" : "已收藏"}`;
        playTone("correct");
        recordUserActivity("save_vocab", {
          hanzi,
          meaning: savedItem?.vi || "",
        });
        showToast(state.lang === "vi" ? "Đã lưu từ vựng thành công" : "生词收藏成功");
      }
      saveState();
    }
    const completeBtn = event.target.closest("[data-complete]");
    if (completeBtn) {
      if (completeBtn.dataset.complete === "home") {
        if (state.module === "vocab") {
          renderVocab();
          setScreen("vocab");
        } else if (state.fromRoadmap) {
          renderRoadmap();
          setScreen("roadmap");
        } else if (state.module === "daily" && state.dailyBackTarget === "write-communication") {
          backToWriteCommunicationCourse();
        } else {
          renderHome();
          setScreen("home");
        }
      } else {
        if (state.fromRoadmap) {
          renderRoadmap();
          setScreen("roadmap");
        } else if (state.module === "daily" && state.dailyBackTarget === "write-communication") {
          backToWriteCommunicationCourse();
        } else {
          renderCourse();
          setScreen("course");
        }
      }
      return;
    }

    // Redesigned HSK course click handlers
    const hskContinueBtn = event.target.closest("#hskContinueBtn");
    if (hskContinueBtn) {
      if (showFastVipPromptIfKnownLocked(hskLevels[state.level].some((lesson) => isHskLessonLockedForUser(lesson.id)) && !hskLevels[state.level].some((lesson) => canAccessHskLesson(lesson.id)), promptHskLessonLocked)) return;
      await refreshContentLocksIfStale(0, { force: true });
      const incompleteLesson = hskLevels[state.level].find((lesson) => !state.completed.has(lesson.id) && canAccessHskLesson(lesson.id))
        || hskLevels[state.level].find((lesson) => canAccessHskLesson(lesson.id));
      if (incompleteLesson) {
        state.hskPendingLessonId = incompleteLesson.id;
        state.hskContentType = "";
        renderHskCourse();
      } else if (hskLevels[state.level].some((lesson) => isHskLessonLockedForUser(lesson.id))) {
        promptHskLessonLocked();
      }
      return;
    }

    const hskFilterBtn = event.target.closest("[data-hsk-filter]");
    if (hskFilterBtn) {
      state.hskFilterTab = hskFilterBtn.dataset.hskFilter;
      document.querySelectorAll("[data-hsk-filter]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.hskFilter === state.hskFilterTab);
      });
      const listContainer = $(".hsk-lessons-list");
      if (listContainer) {
        listContainer.innerHTML = renderHskLessonListHTML();
      }
      return;
    }

    // Redesigned daily themes click handlers
    const dailyStartBtn = event.target.closest("#dailyStartBtn");
    if (dailyStartBtn) {
      if (showFastVipPromptIfKnownLocked(dailyThemes.some((theme) => isDailyThemeLockedForUser(theme.id)) && !dailyThemes.some((theme) => canAccessDailyTheme(theme.id)))) return;
      await refreshContentLocksIfStale(0, { force: true });
      const firstTheme = dailyThemes.find((theme) => !state.completed.has(theme.id) && canAccessDailyTheme(theme.id))
        || dailyThemes.find((theme) => canAccessDailyTheme(theme.id));
      if (firstTheme) {
        state.dailyPendingThemeId = firstTheme.id;
        state.dailyContentType = "";
        renderDailyCourse();
      } else if (dailyThemes.some((theme) => isDailyThemeLockedForUser(theme.id))) {
        promptUpgradeLocked();
      }
      return;
    }

    const dailyBackThemesBtn = event.target.closest("[data-daily-back-themes]");
    if (dailyBackThemesBtn) {
      backToDailyThemeList();
      return;
    }

    const dailyContentTypeBtn = event.target.closest("[data-daily-content-type]");
    if (dailyContentTypeBtn) {
      const nextContentType = dailyContentTypeBtn.dataset.dailyContentType;
      if (state.dailyPendingThemeId) {
        if (getDailyContentTypeAccessStatus(state.dailyPendingThemeId, nextContentType) === "locked") {
          promptUpgradeLocked();
          return;
        }
        state.dailyContentType = nextContentType;
        startPractice({
          themeId: state.dailyPendingThemeId,
          mode: "translate",
          dailyContentType: state.dailyContentType,
        });
      } else {
        state.dailyContentType = nextContentType;
        renderDailyCourse();
      }
      return;
    }

    const dailyFilterBtn = event.target.closest("[data-daily-filter]");
    if (dailyFilterBtn) {
      state.dailyFilterTab = dailyFilterBtn.dataset.dailyFilter;
      document.querySelectorAll("[data-daily-filter]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.dailyFilter === state.dailyFilterTab);
      });
      const gridContainer = $(".daily-theme-grid");
      if (gridContainer) {
        gridContainer.innerHTML = renderDailyThemesListHTML();
      }
      return;
    }

    const vocabDeleteBtn = event.target.closest(".vocab-delete-btn");
    if (vocabDeleteBtn) {
      const card = vocabDeleteBtn.closest("[data-vocab-hanzi]");
      if (card) {
        const hanzi = card.dataset.vocabHanzi;
        state.saved.delete(hanzi);
        saveState();
        renderVocab();
        showToast(state.lang === "vi" ? "Đã xóa khỏi bộ từ" : "已从生词本删除");
      }
      return;
    }

    const vocabFilterBtn = event.target.closest("[data-vocab-filter]");
    if (vocabFilterBtn) {
      state.vocabFilterTab = vocabFilterBtn.dataset.vocabFilter;
      document.querySelectorAll("[data-vocab-filter]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.vocabFilter === state.vocabFilterTab);
      });
      const gridContainer = $(".vocab-grid");
      if (gridContainer) {
        gridContainer.innerHTML = renderVocabListHTML();
      }
      const visibleCount = $(".vocab-visible-count-text strong");
      if (visibleCount) {
        visibleCount.textContent = getFilteredVocabItems().length;
      }
      const visibleType = $(".vocab-visible-count-text");
      if (visibleType) {
        const nextTypeLabel = state.vocabFilterTab === "all"
          ? (state.lang === "vi" ? "mục đã lưu" : "个已保存项")
          : state.vocabFilterTab === "phrase"
            ? (state.lang === "vi" ? "cụm từ" : "短语")
            : (state.lang === "vi" ? "từ vựng" : "个词");
        visibleType.innerHTML = `${state.lang === "vi" ? "Đang hiển thị" : "正在显示"} <strong>${getFilteredVocabItems().length}</strong> ${nextTypeLabel}`;
      }
      return;
    }

    const vocabReviewBtn = event.target.closest("[data-vocab-review]");
    if (vocabReviewBtn) {
      const items = getFilteredVocabItems();
      if (items.length === 0) {
        showToast(state.lang === "vi" ? "Chưa có từ vựng để ôn tập" : "暂无可复习词汇");
        return;
      }
      const firstHanzi = items[0].hanzi;
      const savedItems = [...state.saved].map(hanzi => normalizeVocabPracticeItem(findItemByHanzi(hanzi), hanzi));
      const index = Math.max(0, savedItems.findIndex(item => item.hanzi === firstHanzi));
      startSavedVocabPractice(index);
      return;
    }

    const vocabSpeakBtn = event.target.closest(".vocab-speak-btn");
    if (vocabSpeakBtn) {
      const card = vocabSpeakBtn.closest("[data-vocab-hanzi]");
      if (card) {
        const hanzi = card.dataset.vocabHanzi;
        speakText(findItemByHanzi(hanzi) || hanzi);
      }
      return;
    }

    const vocabCard = event.target.closest(".vocab-item-card");
    if (vocabCard && !vocabDeleteBtn && !vocabSpeakBtn) {
      const hanzi = vocabCard.dataset.vocabHanzi;
      const items = [...state.saved].map(h => normalizeVocabPracticeItem(findItemByHanzi(h), h));
      const index = items.findIndex(item => item.hanzi === hanzi);
      if (index !== -1) {
        startSavedVocabPractice(index);
      }
      return;
    }
  });
  $("#app").addEventListener("keydown", (event) => {
    if (event.target.id === "answerInput") {
      if (event.key.length === 1 || event.key === "Backspace") playTone("key");
      if (event.key === "Enter") {
        event.preventDefault();
        submitAnswer(event.target.value);
        return;
      }
      if (event.key === " ") {
        const value = event.target.value;
        if (canSubmitCurrentAnswer(value)) {
          event.preventDefault();
          submitAnswer(value);
        }
      }
    }
  });
  $("#app").addEventListener("input", (event) => {
    if (event.target.id === "answerInput") {
      handleLiveAnswerInput(event.target.value);
    }
    if (event.target.id === "accountEmailVerificationCodeInput") {
      state.emailVerificationCode = event.target.value.replace(/\D/g, "").slice(0, 6);
      event.target.value = state.emailVerificationCode;
    }
    if (event.target.id === "hskSearchInput") {
      state.hskSearchQuery = event.target.value;
      const listContainer = $(".hsk-lessons-list");
      if (listContainer) {
        listContainer.innerHTML = renderHskLessonListHTML();
      }
    }
    if (event.target.id === "dailySearchInput") {
      state.dailySearchQuery = event.target.value;
      const gridContainer = $(".daily-theme-grid");
      if (gridContainer) {
        gridContainer.innerHTML = renderDailyThemesListHTML();
      }
    }
    if (event.target.id === "vocabSearchInput") {
      state.vocabSearchQuery = event.target.value;
      const gridContainer = $(".vocab-grid");
      if (gridContainer) {
        gridContainer.innerHTML = renderVocabListHTML();
      }
    }
    if (event.target.id === "adminUserSearchInput") {
      state.adminUserSearch = event.target.value;
      state.adminUserPage = 1;
      if (adminUserSearchTimer) clearTimeout(adminUserSearchTimer);
      adminUserSearchTimer = setTimeout(() => {
        loadAdminUsers();
      }, 350);
    }
    if (event.target.id === "adminCustomerSearchInput") {
      state.adminCustomerSearch = event.target.value;
      renderAdmin();
    }
    if (event.target.id === "adminCustomerFrom") {
      state.adminCustomerFrom = event.target.value;
      renderAdmin();
    }
    if (event.target.id === "adminCustomerTo") {
      state.adminCustomerTo = event.target.value;
      renderAdmin();
    }
    if (event.target.id === "adminVipFromInput") {
      state.adminVipFrom = analyticsNormalizeDateInput(event.target.value) || event.target.value;
    }
    if (event.target.id === "adminVipToInput") {
      state.adminVipTo = analyticsNormalizeDateInput(event.target.value) || event.target.value;
    }
    if (event.target.id === "adminCtvSearchInput") {
      state.adminCtvSearch = event.target.value;
      state.adminCtvLinkStatus = "";
      state.adminCtvPage = 1;
      renderAdmin();
    }
    if (event.target.id === "adminCtvLinkSearchInput") {
      state.adminCtvPickerSearch = event.target.value;
      updateAdminCtvPickerList();
    }
    if (event.target.id === "adminCtvReferralLink") {
      state.adminCtvReferralLinkDraft = event.target.value;
      state.adminCtvLinkStatus = "";
    }


    if (event.target.matches?.("[data-admin-content-limit]")) {
      updateAdminHskLockConfig(event.target.dataset.adminContentLimit, {
        freeItemLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-content-word-limit]")) {
      updateAdminHskLockConfig(event.target.dataset.adminContentWordLimit, {
        freeWordLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-content-sentence-limit]")) {
      updateAdminHskLockConfig(event.target.dataset.adminContentSentenceLimit, {
        freeSentenceLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-content-lock]")) {
      updateAdminHskLockConfig(event.target.dataset.adminContentLock, {
        lockedForFree: event.target.checked,
      });
    }
    if (event.target.matches?.("[data-admin-content-daily-limit]")) {
      updateAdminDailyLockConfig(event.target.dataset.adminContentDailyLimit, {
        freeItemLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-content-daily-word-limit]")) {
      updateAdminDailyLockConfig(event.target.dataset.adminContentDailyWordLimit, {
        freeWordLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-content-daily-sentence-limit]")) {
      updateAdminDailyLockConfig(event.target.dataset.adminContentDailySentenceLimit, {
        freeSentenceLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-hsk-cover-url]")) {
      const level = event.target.dataset.adminHskCoverUrl;
      state.adminHskLevelCovers[level] = String(event.target.value || "").trim();
      updateAdminHskLevelCoverPreview(level);
    }
  });
  $("#app").addEventListener("change", (event) => {
    if (event.target.id === "accountAvatarInput") {
      updateAccountAvatar(event.target.files?.[0], event.target);
      return;
    }
    if (event.target.id === "accountDailyReminderInput") {
      const checkbox = event.target;
      const enabled = checkbox.checked;
      const previous = state.user?.dailyReminderEnabled !== false;
      if (state.user) {
        state.user.dailyReminderEnabled = enabled;
        saveState();
      }
      persistDailyReminderSetting(enabled)
        .then(() => {
          recordUserActivity(enabled ? "reminder_on" : "reminder_off");
          showToast(enabled
            ? (state.lang === "vi" ? "Đã bật nhắc học mỗi ngày" : "已开启每日学习提醒")
            : (state.lang === "vi" ? "Đã tắt nhắc học mỗi ngày" : "已关闭每日学习提醒"));
        })
        .catch((error) => {
          if (state.user) {
            state.user.dailyReminderEnabled = previous;
            saveState();
          }
          checkbox.checked = previous;
          showToast(error.message || (state.lang === "vi" ? "Không thể lưu tùy chọn nhắc học" : "无法保存提醒设置"));
        });
      return;
    }
    if (event.target.matches?.("[data-admin-content-limit]")) {
      updateAdminHskLockConfig(event.target.dataset.adminContentLimit, {
        freeItemLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-content-word-limit]")) {
      updateAdminHskLockConfig(event.target.dataset.adminContentWordLimit, {
        freeWordLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-content-sentence-limit]")) {
      updateAdminHskLockConfig(event.target.dataset.adminContentSentenceLimit, {
        freeSentenceLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-content-daily-limit]")) {
      updateAdminDailyLockConfig(event.target.dataset.adminContentDailyLimit, {
        freeItemLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-content-daily-word-limit]")) {
      updateAdminDailyLockConfig(event.target.dataset.adminContentDailyWordLimit, {
        freeWordLimit: event.target.value,
      });
    }
    if (event.target.matches?.("[data-admin-hsk-cover-file]")) {
      const level = event.target.dataset.adminHskCoverFile;
      const file = event.target.files?.[0];
      if (!level || !file) return;
      if (!file.type.startsWith("image/")) {
        showToast(state.lang === "vi" ? "Vui lòng chọn file ảnh." : "请选择图片文件。");
        return;
      }
      if (file.size > MAX_HSK_LEVEL_COVER_BYTES) {
        showToast(state.lang === "vi" ? `Ảnh quá lớn (tối đa ~${MAX_HSK_LEVEL_COVER_MB}MB).` : `图片太大（最大约 ${MAX_HSK_LEVEL_COVER_MB}MB）。`);
        event.target.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        state.adminHskLevelCovers[level] = String(reader.result || "");
        const urlInput = document.querySelector(`[data-admin-hsk-cover-url="${level}"]`);
        if (urlInput) urlInput.value = state.adminHskLevelCovers[level];
        updateAdminHskLevelCoverPreview(level);
      };
      reader.readAsDataURL(file);
    }
    if (event.target.matches?.("input[name='adminCtvSelect']")) {
      state.adminCtvSelectedId = event.target.value;
      state.adminCtvLinkStatus = "";
      state.adminCtvReferralLinkDraft = "";
      renderAdmin();
    }
    if (event.target.id === "adminCtvPageSizeSelect") {
      state.adminCtvPageSize = Math.max(1, Number(event.target.value || 10));
      state.adminCtvPage = 1;
      renderAdmin();
    }
    if (event.target.id === "adminCtvLinkSourceSelect") {
      state.adminCtvLinkSource = String(event.target.value || "").trim().toLowerCase();
      state.adminCtvLinkStatus = "";
      state.adminCtvReferralLinkDraft = "";
      renderAdmin();
    }


    if (event.target.id === "adminUserLevelFilter") {
      state.adminUserLevelFilter = event.target.value;
      state.adminUserPage = 1;
      loadAdminUsers();
    }
    if (event.target.id === "adminUserPlanFilter") {
      state.adminUserPlanFilter = normalizeAdminUserPlanFilter(event.target.value);
      state.adminUserPage = 1;
      loadAdminUsers();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.target?.id === "answerInput") return;
    if (state.screen === "practice" && state.complete && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      nextItem();
    }
  });
}

function renderAll() {
  renderChrome();
  renderHome();
  if (state.screen === "course") renderCourse();
  if (state.screen === "practice") renderPractice();
  if (state.screen === "complete") renderComplete();
  if (state.screen === "admin") renderAdmin();
  if (state.screen === "vocab") renderVocab();
  if (state.screen === "listening") renderListening();
  if (state.screen === "account") renderAccount();
}

function renderCurrentScreenAfterStartupData() {
  renderChrome();
  if (state.screen === "home") renderHome();
  if (state.screen === "course") renderCourse();
  if (state.screen === "practice") renderPractice();
  if (state.screen === "complete") renderComplete();
  if (state.screen === "admin") renderAdmin();
  if (state.screen === "vocab") renderVocab();
  if (state.screen === "listening") renderListening({ silentCatalogLoad: true });
  if (state.screen === "account") renderAccount();
}

function runAfterFirstPaint(callback) {
  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(() => requestAnimationFrame(callback));
    return;
  }
  setTimeout(callback, 0);
}

function warmStartupDataAfterFirstPaint() {
  runAfterFirstPaint(() => {
    const startupTasks = [
      refreshCurrentUserStatus(),
      loadContentLocks(),
      prefetchPaymentPlans(),
    ];
    if (typeof ensureListeningCatalogLoaded === "function") {
      startupTasks.push(ensureListeningCatalogLoaded({ silent: true }));
    }
    Promise.allSettled(startupTasks).then(() => {
      renderCurrentScreenAfterStartupData();
    });
  });
}

function applyRouteFromLocation() {
  const pathname = window.location.pathname;
  const options = {};
  // Legacy listening detail contract sample: 一个人生活，是自由还是孤单？ 阿南，你能接受一个人生活吗？
  if (pathname === "/listening-app/listening") {
    state.screen = "listening"; state.listeningView = "levels";
    renderListening(options); setScreen("listening"); return true;
  }
  const listeningDetailMatch = pathname.match(/^\/listening-app\/listening\/([^/]+)$/);
  if (!listeningDetailMatch) return false;
  const episodeId = decodeURIComponent(listeningDetailMatch[1]);
  state.screen = "listening"; state.listeningEpisodeId = episodeId;
  state.listeningView = "detail"; state.listeningSentenceIndex = 0;
  renderListening(options); setScreen("listening"); return true;
}

function init() {
  console.info(VIETNAMESE_QA_HOOK);
  captureReferralRef();
  captureTrafficSource();
  ensureReferralQueryInAddress();
  bindEvents();
  window.addEventListener("beforeunload", () => {
    flushHomeTodayStudySession();
    endLearningBehaviorSession();
    savePersistedRoute();
    flushLearningEvents(true);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      flushHomeTodayStudySession();
      endLearningBehaviorSession();
      savePersistedRoute();
      flushLearningEvents(true);
    } else {
      syncHomeTodayStudySession(state.screen);
      syncLearningBehaviorSession(state.screen);
    }
  });
  window.addEventListener("pagehide", () => {
    flushHomeTodayStudySession();
    endLearningBehaviorSession();
    flushLearningEvents(true);
  });
  renderChrome();
  if (window.location.pathname === "/admin") {
    restorePersistedAdminRouteState();
    renderAdmin();
    setScreen("admin");
    loadActiveAdminTabData();
  } else {
    if (!applyRouteFromLocation()) {
      const restored = restorePersistedRoute();
      if (!restored) {
        renderHome();
        setScreen("home");
        savePersistedRoute();
      }
    }
  }
  warmStartupDataAfterFirstPaint();
  
}

init();
