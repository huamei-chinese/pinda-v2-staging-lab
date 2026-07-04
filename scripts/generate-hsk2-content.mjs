import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

const extraWords = {
  wo: { hanzi: "我", pinyin: "wo", tone: "wo", pos: "pron", vi: "toi" },
  women: { hanzi: "我们", pinyin: "wo men", tone: "wo men", pos: "pron", vi: "chung toi" },
  xiang: { hanzi: "想", pinyin: "xiang", tone: "xiang", pos: "verb", vi: "muon" },
  qu: { hanzi: "去", pinyin: "qu", tone: "qu", pos: "verb", vi: "di" },
  qing: { hanzi: "请", pinyin: "qing", tone: "qing", pos: "verb", vi: "vui long" },
  hen: { hanzi: "很", pinyin: "hen", tone: "hen", pos: "adv", vi: "rat" },
  de: { hanzi: "的", pinyin: "de", tone: "de", pos: "particle", vi: "tro tu so huu" },
  zai: { hanzi: "在", pinyin: "zai", tone: "zai", pos: "prep", vi: "o tai" },
};

const lessonSpecs = [
  {
    no: 1,
    titleZh: "九月去北京旅游最好",
    titleVi: "Tháng chín là thời điểm đẹp nhất để du lịch Bắc Kinh",
    words: [
      ["九月", "jiu yue", "thang chin", "noun"],
      ["北京", "bei jing", "Bac Kinh", "noun"],
      ["旅游", "lv you", "du lich", "verb"],
      ["最好", "zui hao", "tot nhat", "adj"],
      ["新", "xin", "moi", "adj"],
      ["椅子", "yi zi", "ghe", "noun"],
      ["房间", "fang jian", "phong", "noun"],
      ["机场", "ji chang", "san bay", "noun"],
      ["早上", "zao shang", "buoi sang", "noun"],
      ["出发", "chu fa", "xuat phat", "verb"],
    ],
    phrases: [
      ["新的椅子", [4, "de", 5], "cai ghe moi"],
      ["九月北京", [0, 1], "Bac Kinh thang chin"],
      ["去旅游", ["qu", 2], "di du lich"],
      ["早上出发", [8, 9], "xuat phat buoi sang"],
    ],
  },
  { no: 2, titleZh: "今天在教室上课", titleVi: "Hôm nay học trong lớp", words: [["今天", "jin tian", "hom nay", "noun"], ["上课", "shang ke", "len lop", "verb"], ["教室", "jiao shi", "phong hoc", "noun"], ["老师", "lao shi", "giao vien", "noun"], ["问题", "wen ti", "van de", "noun"], ["回答", "hui da", "tra loi", "verb"], ["准备", "zhun bei", "chuan bi", "verb"], ["作业", "zuo ye", "bai tap", "noun"], ["以前", "yi qian", "truoc day", "noun"], ["以后", "yi hou", "sau nay", "noun"]] },
  { no: 3, titleZh: "一起在饭店点菜", titleVi: "Cùng gọi món ở nhà hàng", words: [["饭店", "fan dian", "nha hang", "noun"], ["菜单", "cai dan", "thuc don", "noun"], ["牛肉", "niu rou", "thit bo", "noun"], ["米饭", "mi fan", "com", "noun"], ["鸡蛋", "ji dan", "trung ga", "noun"], ["水果", "shui guo", "trai cay", "noun"], ["一起", "yi qi", "cung nhau", "adv"], ["点菜", "dian cai", "goi mon", "verb"], ["便宜", "pian yi", "re", "adj"], ["好吃", "hao chi", "ngon", "adj"]] },
  { no: 4, titleZh: "在商店买衣服", titleVi: "Mua quần áo ở cửa hàng", words: [["商店", "shang dian", "cua hang", "noun"], ["衣服", "yi fu", "quan ao", "noun"], ["颜色", "yan se", "mau sac", "noun"], ["便宜", "pian yi", "re", "adj"], ["贵", "gui", "dat", "adj"], ["买", "mai", "mua", "verb"], ["卖", "mai", "ban", "verb"], ["试试", "shi shi", "thu xem", "verb"], ["左边", "zuo bian", "ben trai", "noun"], ["右边", "you bian", "ben phai", "noun"]] },
  { no: 5, titleZh: "回家给妈妈过生日", titleVi: "Về nhà mừng sinh nhật mẹ", words: [["爸爸", "ba ba", "bo", "noun"], ["妈妈", "ma ma", "me", "noun"], ["孩子", "hai zi", "tre em", "noun"], ["妹妹", "mei mei", "em gai", "noun"], ["生日", "sheng ri", "sinh nhat", "noun"], ["礼物", "li wu", "qua tang", "noun"], ["快乐", "kuai le", "vui ve", "adj"], ["回家", "hui jia", "ve nha", "verb"], ["休息", "xiu xi", "nghi ngoi", "verb"], ["帮忙", "bang mang", "giup do", "verb"]] },
  { no: 6, titleZh: "天气好就去公园运动", titleVi: "Thời tiết đẹp thì đi công viên vận động", words: [["天气", "tian qi", "thoi tiet", "noun"], ["下雨", "xia yu", "mua", "verb"], ["阴天", "yin tian", "troi am u", "noun"], ["晴天", "qing tian", "troi nang", "noun"], ["外面", "wai mian", "ben ngoai", "noun"], ["冷", "leng", "lanh", "adj"], ["热", "re", "nong", "adj"], ["穿", "chuan", "mac", "verb"], ["运动", "yun dong", "van dong", "verb"], ["公园", "gong yuan", "cong vien", "noun"]] },
  { no: 7, titleZh: "坐地铁到车站", titleVi: "Đi tàu điện đến trạm", words: [["公共汽车", "gong gong qi che", "xe buyt", "noun"], ["地铁", "di tie", "tau dien ngam", "noun"], ["车站", "che zhan", "tram xe", "noun"], ["票", "piao", "ve", "noun"], ["到达", "dao da", "den noi", "verb"], ["等", "deng", "doi", "verb"], ["离", "li", "cach", "prep"], ["近", "jin", "gan", "adj"], ["远", "yuan", "xa", "adj"], ["走路", "zou lu", "di bo", "verb"]] },
  { no: 8, titleZh: "旅馆房间很安静", titleVi: "Phòng khách sạn rất yên tĩnh", words: [["旅馆", "lv guan", "khach san", "noun"], ["房间", "fang jian", "phong", "noun"], ["安静", "an jing", "yen tinh", "adj"], ["干净", "gan jing", "sach se", "adj"], ["住", "zhu", "o lai", "verb"], ["晚上", "wan shang", "buoi toi", "noun"], ["开门", "kai men", "mo cua", "verb"], ["服务员", "fu wu yuan", "nhan vien phuc vu", "noun"], ["洗澡", "xi zao", "tam", "verb"], ["空调", "kong tiao", "may lanh", "noun"]] },
  { no: 9, titleZh: "感冒以后要休息", titleVi: "Sau khi cảm cần nghỉ ngơi", words: [["身体", "shen ti", "co the", "noun"], ["感冒", "gan mao", "cam", "verb"], ["发烧", "fa shao", "sot", "verb"], ["药", "yao", "thuoc", "noun"], ["医院", "yi yuan", "benh vien", "noun"], ["医生", "yi sheng", "bac si", "noun"], ["休息", "xiu xi", "nghi ngoi", "verb"], ["喝水", "he shui", "uong nuoc", "verb"], ["睡觉", "shui jiao", "ngu", "verb"], ["好一点", "hao yi dian", "kha hon mot chut", "adj"]] },
  { no: 10, titleZh: "公司开会以后完成文件", titleVi: "Sau cuộc họp công ty hoàn thành tài liệu", words: [["公司", "gong si", "cong ty", "noun"], ["同事", "tong shi", "dong nghiep", "noun"], ["经理", "jing li", "quan ly", "noun"], ["开会", "kai hui", "hop", "verb"], ["文件", "wen jian", "tai lieu", "noun"], ["完成", "wan cheng", "hoan thanh", "verb"], ["忙", "mang", "ban", "adj"], ["事情", "shi qing", "viec", "noun"], ["电话", "dian hua", "dien thoai", "noun"], ["电子邮件", "dian zi you jian", "email", "noun"]] },
  { no: 11, titleZh: "周末和朋友看电影", titleVi: "Cuối tuần xem phim với bạn", words: [["电影", "dian ying", "phim", "noun"], ["音乐", "yin yue", "am nhac", "noun"], ["唱歌", "chang ge", "hat", "verb"], ["跳舞", "tiao wu", "nhay", "verb"], ["游泳", "you yong", "boi", "verb"], ["跑步", "pao bu", "chay bo", "verb"], ["比赛", "bi sai", "thi dau", "noun"], ["兴趣", "xing qu", "so thich", "noun"], ["周末", "zhou mo", "cuoi tuan", "noun"], ["朋友", "peng you", "ban be", "noun"]] },
  { no: 12, titleZh: "每天练习中文口语", titleVi: "Mỗi ngày luyện khẩu ngữ tiếng Trung", words: [["中文", "zhong wen", "tieng Trung", "noun"], ["汉字", "han zi", "chu Han", "noun"], ["语法", "yu fa", "ngu phap", "noun"], ["练习", "lian xi", "luyen tap", "verb"], ["听力", "ting li", "nghe hieu", "noun"], ["口语", "kou yu", "khau ngu", "noun"], ["阅读", "yue du", "doc", "verb"], ["写字", "xie zi", "viet chu", "verb"], ["复习", "fu xi", "on tap", "verb"], ["进步", "jin bu", "tien bo", "verb"]] },
  { no: 13, titleZh: "打扫厨房和客厅", titleVi: "Dọn bếp và phòng khách", words: [["家", "jia", "nha", "noun"], ["厨房", "chu fang", "bep", "noun"], ["桌子", "zhuo zi", "ban", "noun"], ["椅子", "yi zi", "ghe", "noun"], ["门", "men", "cua", "noun"], ["窗户", "chuang hu", "cua so", "noun"], ["打扫", "da sao", "don dep", "verb"], ["做饭", "zuo fan", "nau com", "verb"], ["干净", "gan jing", "sach se", "adj"], ["舒服", "shu fu", "thoai mai", "adj"]] },
  { no: 14, titleZh: "看地图去附近超市", titleVi: "Xem bản đồ đi siêu thị gần đây", words: [["城市", "cheng shi", "thanh pho", "noun"], ["街道", "jie dao", "duong pho", "noun"], ["银行", "yin hang", "ngan hang", "noun"], ["超市", "chao shi", "sieu thi", "noun"], ["邮局", "you ju", "buu dien", "noun"], ["附近", "fu jin", "gan day", "noun"], ["地图", "di tu", "ban do", "noun"], ["方向", "fang xiang", "phuong huong", "noun"], ["过马路", "guo ma lu", "qua duong", "verb"], ["安全", "an quan", "an toan", "adj"]] },
  { no: 15, titleZh: "计划学习和旅行", titleVi: "Lên kế hoạch học tập và du lịch", words: [["计划", "ji hua", "ke hoach", "noun"], ["旅行", "lv xing", "du lich", "verb"], ["学习", "xue xi", "hoc tap", "verb"], ["工作", "gong zuo", "lam viec", "verb"], ["健康", "jian kang", "suc khoe", "noun"], ["家人", "jia ren", "nguoi nha", "noun"], ["时间", "shi jian", "thoi gian", "noun"], ["选择", "xuan ze", "lua chon", "verb"], ["觉得", "jue de", "cam thay", "verb"], ["因为", "yin wei", "boi vi", "prep"]] },
];

function wordFromTuple(tuple) {
  const [hanzi, pinyin, vi, pos] = tuple;
  return { hanzi, pinyin, tone: pinyin, pos, vi };
}

function resolveWord(words, ref) {
  return typeof ref === "number" ? words[ref] : extraWords[ref];
}

function makeItem(stage, hanzi, refs, vi, source) {
  const words = refs.map((ref) => ({ ...ref }));
  return {
    stage,
    vi,
    hanzi,
    words: words.map((word) => ({
      text: word.hanzi,
      pinyin: word.pinyin,
      tone: word.tone,
      pos: word.pos,
      vi: word.vi,
    })),
    source,
    pinyin: words.map((word) => word.pinyin).join(" "),
    tone: words.map((word) => word.tone).join(" "),
  };
}

function makePhraseItems(spec, words) {
  const source = `HSK2 generated lab pack - Lesson ${spec.no}`;
  if (spec.phrases) {
    return spec.phrases.map(([hanzi, refs, vi]) => makeItem("phrase", hanzi, refs.map((ref) => resolveWord(words, ref)), vi, source));
  }
  return [
    makeItem("phrase", `${words[0].hanzi}${words[1].hanzi}`, [words[0], words[1]], `${words[0].vi} ${words[1].vi}`, source),
    makeItem("phrase", `${words[2].hanzi}${words[3].hanzi}`, [words[2], words[3]], `${words[2].vi} ${words[3].vi}`, source),
    makeItem("phrase", `${words[4].hanzi}的${words[5].hanzi}`, [words[4], extraWords.de, words[5]], `${words[5].vi} ${words[4].vi}`, source),
    makeItem("phrase", `${words[8].hanzi}${words[9].hanzi}`, [words[8], words[9]], `${words[8].vi} ${words[9].vi}`, source),
  ];
}

function makeLesson(spec) {
  const source = `HSK2 generated lab pack - Lesson ${spec.no}`;
  const words = spec.words.map(wordFromTuple);
  const wordItems = words.map((word) => makeItem("word", word.hanzi, [word], word.vi, source));
  const phraseItems = makePhraseItems(spec, words);
  const sentenceItems = [
    makeItem("sentence", `我想${words[2].hanzi}${words[3].hanzi}。`, [extraWords.wo, extraWords.xiang, words[2], words[3]], `Toi muon ${words[2].vi} ${words[3].vi}.`, source),
    makeItem("sentence", `${words[0].hanzi}${words[1].hanzi}很${words[3].hanzi}。`, [words[0], words[1], extraWords.hen, words[3]], `${words[0].vi} ${words[1].vi} rat ${words[3].vi}.`, source),
    makeItem("sentence", `请${words[7].hanzi}${words[4].hanzi}。`, [extraWords.qing, words[7], words[4]], `Vui long ${words[7].vi} ${words[4].vi}.`, source),
    makeItem("sentence", `我们${words[8].hanzi}${words[9].hanzi}。`, [extraWords.women, words[8], words[9]], `Chung toi ${words[8].vi} ${words[9].vi}.`, source),
  ];
  const mixedItems = [
    makeItem("mixed", `${words[4].hanzi}的${words[5].hanzi}在${words[6].hanzi}。`, [words[4], extraWords.de, words[5], extraWords.zai, words[6]], `${words[5].vi} ${words[4].vi} o ${words[6].vi}.`, source),
    makeItem("mixed", `我们去${words[1].hanzi}${words[2].hanzi}。`, [extraWords.women, extraWords.qu, words[1], words[2]], `Chung toi di ${words[1].vi} ${words[2].vi}.`, source),
  ];

  return {
    id: `hsk2-l${spec.no}`,
    no: spec.no,
    titleZh: spec.titleZh,
    titleVi: spec.titleVi,
    items: [...wordItems, ...phraseItems, ...sentenceItems, ...mixedItems],
  };
}

const lessons = lessonSpecs.map(makeLesson);

function singleLessonModule(lesson) {
  return `(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.lessonContent = root.lessonContent || {};
  root.lessonContent.HSK2 = root.lessonContent.HSK2 || {};
  root.lessonContent.HSK2[data.id] = {
    id: data.id,
    no: data.no,
    title: data.titleZh,
    titleZh: data.titleZh,
    titleVi: data.titleVi,
    items: data.items,
  };
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return ${JSON.stringify(lesson, null, 2)};
});
`;
}

function batchModule(batchLessons) {
  const data = { level: "HSK2", lessons: batchLessons };
  return `(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.lessonContent = root.lessonContent || {};
  root.lessonContent[data.level] = root.lessonContent[data.level] || {};
  for (const lesson of data.lessons) {
    root.lessonContent[data.level][lesson.id] = {
      id: lesson.id,
      no: lesson.no,
      title: lesson.titleZh,
      titleZh: lesson.titleZh,
      titleVi: lesson.titleVi,
      items: lesson.items,
    };
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return ${JSON.stringify(data, null, 2)};
});
`;
}

function writeGeneratedFile(fileName, content) {
  fs.writeFileSync(path.join(publicDir, fileName), content, "utf8");
  fs.writeFileSync(path.join(rootDir, fileName), `module.exports = require("./public/${fileName}");\n`, "utf8");
}

writeGeneratedFile("lesson-hsk2-l1.js", singleLessonModule(lessons[0]));
writeGeneratedFile("lesson-hsk2-batch-2-5.js", batchModule(lessons.slice(1, 5)));
writeGeneratedFile("lesson-hsk2-batch-6-10.js", batchModule(lessons.slice(5, 10)));
writeGeneratedFile("lesson-hsk2-batch-11-15.js", batchModule(lessons.slice(10, 15)));

console.log("Generated HSK2 lab content packs.");
