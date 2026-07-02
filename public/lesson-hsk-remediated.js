(function (root, factory) {
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
  return {
  "source": "HSK academic remediation - pinyin dictation safe content",
  "levels": {
    "HSK2": [],
    "HSK3": [],
    "HSK4": [
      {
        "id": "hsk4-l11",
        "no": 11,
        "titleZh": "读书好，读好书，好读书",
        "titleVi": "Đọc sách có ích, đọc sách hay, yêu đọc sách",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "đọc sách",
            "hanzi": "读书",
            "words": [
              {
                "text": "读书",
                "pinyin": "du shu",
                "tone": "dú shū",
                "pos": "verb",
                "vi": "đọc sách"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "du shu",
            "tone": "dú shū"
          },
          {
            "stage": "word",
            "vi": "thói quen",
            "hanzi": "习惯",
            "words": [
              {
                "text": "习惯",
                "pinyin": "xi guan",
                "tone": "xí guàn",
                "pos": "noun",
                "vi": "thói quen"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "xi guan",
            "tone": "xí guàn"
          },
          {
            "stage": "word",
            "vi": "kiến thức",
            "hanzi": "知识",
            "words": [
              {
                "text": "知识",
                "pinyin": "zhi shi",
                "tone": "zhī shi",
                "pos": "noun",
                "vi": "kiến thức"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "zhi shi",
            "tone": "zhī shi"
          },
          {
            "stage": "word",
            "vi": "nâng cao",
            "hanzi": "提高",
            "words": [
              {
                "text": "提高",
                "pinyin": "ti gao",
                "tone": "tí gāo",
                "pos": "verb",
                "vi": "nâng cao"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "ti gao",
            "tone": "tí gāo"
          },
          {
            "stage": "word",
            "vi": "lựa chọn",
            "hanzi": "选择",
            "words": [
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "xuan ze",
            "tone": "xuǎn zé"
          },
          {
            "stage": "word",
            "vi": "nghiêm túc",
            "hanzi": "认真",
            "words": [
              {
                "text": "认真",
                "pinyin": "ren zhen",
                "tone": "rèn zhēn",
                "pos": "adj",
                "vi": "nghiêm túc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "ren zhen",
            "tone": "rèn zhēn"
          },
          {
            "stage": "word",
            "vi": "tiếp tục",
            "hanzi": "继续",
            "words": [
              {
                "text": "继续",
                "pinyin": "ji xu",
                "tone": "jì xù",
                "pos": "verb",
                "vi": "tiếp tục"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "ji xu",
            "tone": "jì xù"
          },
          {
            "stage": "word",
            "vi": "hiểu",
            "hanzi": "理解",
            "words": [
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "li jie",
            "tone": "lǐ jiě"
          },
          {
            "stage": "phrase",
            "vi": "kiên trì đọc sách",
            "hanzi": "坚持读书",
            "words": [
              {
                "text": "坚持读书",
                "pinyin": "jian chi du shu",
                "tone": "jiān chí dú shū",
                "pos": "phrase",
                "vi": "kiên trì đọc sách"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "jian chi du shu",
            "tone": "jiān chí dú shū"
          },
          {
            "stage": "phrase",
            "vi": "hình thành thói quen",
            "hanzi": "养成习惯",
            "words": [
              {
                "text": "养成习惯",
                "pinyin": "yang cheng xi guan",
                "tone": "yǎng chéng xí guàn",
                "pos": "phrase",
                "vi": "hình thành thói quen"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "yang cheng xi guan",
            "tone": "yǎng chéng xí guàn"
          },
          {
            "stage": "phrase",
            "vi": "tăng thêm kiến thức",
            "hanzi": "增加知识",
            "words": [
              {
                "text": "增加知识",
                "pinyin": "zeng jia zhi shi",
                "tone": "zēng jiā zhī shi",
                "pos": "phrase",
                "vi": "tăng thêm kiến thức"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "zeng jia zhi shi",
            "tone": "zēng jiā zhī shi"
          },
          {
            "stage": "phrase",
            "vi": "nâng cao trình độ",
            "hanzi": "提高水平",
            "words": [
              {
                "text": "提高水平",
                "pinyin": "ti gao shui ping",
                "tone": "tí gāo shuǐ píng",
                "pos": "phrase",
                "vi": "nâng cao trình độ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "ti gao shui ping",
            "tone": "tí gāo shuǐ píng"
          },
          {
            "stage": "phrase",
            "vi": "chọn sách hay",
            "hanzi": "选择好书",
            "words": [
              {
                "text": "选择好书",
                "pinyin": "xuan ze hao shu",
                "tone": "xuǎn zé hǎo shū",
                "pos": "phrase",
                "vi": "chọn sách hay"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "xuan ze hao shu",
            "tone": "xuǎn zé hǎo shū"
          },
          {
            "stage": "phrase",
            "vi": "học nghiêm túc",
            "hanzi": "认真学习",
            "words": [
              {
                "text": "认真学习",
                "pinyin": "ren zhen xue xi",
                "tone": "rèn zhēn xué xí",
                "pos": "phrase",
                "vi": "học nghiêm túc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "ren zhen xue xi",
            "tone": "rèn zhēn xué xí"
          },
          {
            "stage": "phrase",
            "vi": "tiếp tục đọc",
            "hanzi": "继续阅读",
            "words": [
              {
                "text": "继续阅读",
                "pinyin": "ji xu yue du",
                "tone": "jì xù yuè dú",
                "pos": "phrase",
                "vi": "tiếp tục đọc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "ji xu yue du",
            "tone": "jì xù yuè dú"
          },
          {
            "stage": "phrase",
            "vi": "hiểu nội dung",
            "hanzi": "理解内容",
            "words": [
              {
                "text": "理解内容",
                "pinyin": "li jie nei rong",
                "tone": "lǐ jiě nèi róng",
                "pos": "phrase",
                "vi": "hiểu nội dung"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "li jie nei rong",
            "tone": "lǐ jiě nèi róng"
          },
          {
            "stage": "sentence",
            "vi": "Tôi kiên trì đọc sách mỗi ngày.",
            "hanzi": "我每天坚持读书。",
            "words": [
              {
                "text": "我每天坚持读书",
                "pinyin": "wo mei tian jian chi du shu",
                "tone": "wǒ měi tiān jiān chí dú shū",
                "pos": "sentence",
                "vi": "Tôi kiên trì đọc sách mỗi ngày."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "wo mei tian jian chi du shu",
            "tone": "wǒ měi tiān jiān chí dú shū"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy đã hình thành thói quen đọc sách.",
            "hanzi": "他养成了读书习惯。",
            "words": [
              {
                "text": "他养成了读书习惯",
                "pinyin": "ta yang cheng le du shu xi guan",
                "tone": "tā yǎng chéng le dú shū xí guàn",
                "pos": "sentence",
                "vi": "Anh ấy đã hình thành thói quen đọc sách."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "ta yang cheng le du shu xi guan",
            "tone": "tā yǎng chéng le dú shū xí guàn"
          },
          {
            "stage": "sentence",
            "vi": "Đọc sách có thể tăng thêm kiến thức.",
            "hanzi": "读书能增加知识。",
            "words": [
              {
                "text": "读书能增加知识",
                "pinyin": "du shu neng zeng jia zhi shi",
                "tone": "dú shū néng zēng jiā zhī shi",
                "pos": "sentence",
                "vi": "Đọc sách có thể tăng thêm kiến thức."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "du shu neng zeng jia zhi shi",
            "tone": "dú shū néng zēng jiā zhī shi"
          },
          {
            "stage": "sentence",
            "vi": "Đọc nhiều có thể nâng cao trình độ.",
            "hanzi": "多读书能提高水平。",
            "words": [
              {
                "text": "多读书能提高水平",
                "pinyin": "duo du shu neng ti gao shui ping",
                "tone": "duō dú shū néng tí gāo shuǐ píng",
                "pos": "sentence",
                "vi": "Đọc nhiều có thể nâng cao trình độ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "duo du shu neng ti gao shui ping",
            "tone": "duō dú shū néng tí gāo shuǐ píng"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta nên chọn sách hay.",
            "hanzi": "我们要选择好书。",
            "words": [
              {
                "text": "我们要选择好书",
                "pinyin": "wo men yao xuan ze hao shu",
                "tone": "wǒ men yào xuǎn zé hǎo shū",
                "pos": "sentence",
                "vi": "Chúng ta nên chọn sách hay."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "wo men yao xuan ze hao shu",
            "tone": "wǒ men yào xuǎn zé hǎo shū"
          },
          {
            "stage": "sentence",
            "vi": "Cô ấy luôn học nghiêm túc.",
            "hanzi": "她一直认真学习。",
            "words": [
              {
                "text": "她一直认真学习",
                "pinyin": "ta yi zhi ren zhen xue xi",
                "tone": "tā yì zhí rèn zhēn xué xí",
                "pos": "sentence",
                "vi": "Cô ấy luôn học nghiêm túc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "ta yi zhi ren zhen xue xi",
            "tone": "tā yì zhí rèn zhēn xué xí"
          },
          {
            "stage": "sentence",
            "vi": "Sau giờ học tôi tiếp tục đọc.",
            "hanzi": "下课后我继续阅读。",
            "words": [
              {
                "text": "下课后我继续阅读",
                "pinyin": "xia ke hou wo ji xu yue du",
                "tone": "xià kè hòu wǒ jì xù yuè dú",
                "pos": "sentence",
                "vi": "Sau giờ học tôi tiếp tục đọc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "xia ke hou wo ji xu yue du",
            "tone": "xià kè hòu wǒ jì xù yuè dú"
          },
          {
            "stage": "sentence",
            "vi": "Tôi có thể hiểu cuốn sách này.",
            "hanzi": "我能理解这本书。",
            "words": [
              {
                "text": "我能理解这本书",
                "pinyin": "wo neng li jie zhe ben shu",
                "tone": "wǒ néng lǐ jiě zhè běn shū",
                "pos": "sentence",
                "vi": "Tôi có thể hiểu cuốn sách này."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l11",
            "pinyin": "wo neng li jie zhe ben shu",
            "tone": "wǒ néng lǐ jiě zhè běn shū"
          }
        ]
      },
      {
        "id": "hsk4-l12",
        "no": 12,
        "titleZh": "用心发现世界",
        "titleVi": "Dùng trái tim để khám phá thế giới",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "phát hiện",
            "hanzi": "发现",
            "words": [
              {
                "text": "发现",
                "pinyin": "fa xian",
                "tone": "fā xiàn",
                "pos": "verb",
                "vi": "phát hiện"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "fa xian",
            "tone": "fā xiàn"
          },
          {
            "stage": "word",
            "vi": "thế giới",
            "hanzi": "世界",
            "words": [
              {
                "text": "世界",
                "pinyin": "shi jie",
                "tone": "shì jiè",
                "pos": "noun",
                "vi": "thế giới"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "shi jie",
            "tone": "shì jiè"
          },
          {
            "stage": "word",
            "vi": "dụng tâm",
            "hanzi": "用心",
            "words": [
              {
                "text": "用心",
                "pinyin": "yong xin",
                "tone": "yòng xīn",
                "pos": "adv",
                "vi": "dụng tâm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "yong xin",
            "tone": "yòng xīn"
          },
          {
            "stage": "word",
            "vi": "sự thay đổi",
            "hanzi": "变化",
            "words": [
              {
                "text": "变化",
                "pinyin": "bian hua",
                "tone": "biàn huà",
                "pos": "noun",
                "vi": "sự thay đổi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "bian hua",
            "tone": "biàn huà"
          },
          {
            "stage": "word",
            "vi": "cơ hội",
            "hanzi": "机会",
            "words": [
              {
                "text": "机会",
                "pinyin": "ji hui",
                "tone": "jī huì",
                "pos": "noun",
                "vi": "cơ hội"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "ji hui",
            "tone": "jī huì"
          },
          {
            "stage": "word",
            "vi": "trải nghiệm",
            "hanzi": "经历",
            "words": [
              {
                "text": "经历",
                "pinyin": "jing li",
                "tone": "jīng lì",
                "pos": "noun",
                "vi": "trải nghiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "jing li",
            "tone": "jīng lì"
          },
          {
            "stage": "word",
            "vi": "cảm giác",
            "hanzi": "感觉",
            "words": [
              {
                "text": "感觉",
                "pinyin": "gan jue",
                "tone": "gǎn jué",
                "pos": "noun",
                "vi": "cảm giác"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "gan jue",
            "tone": "gǎn jué"
          },
          {
            "stage": "word",
            "vi": "tin tưởng",
            "hanzi": "相信",
            "words": [
              {
                "text": "相信",
                "pinyin": "xiang xin",
                "tone": "xiāng xìn",
                "pos": "verb",
                "vi": "tin tưởng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "xiang xin",
            "tone": "xiāng xìn"
          },
          {
            "stage": "phrase",
            "vi": "phát hiện vấn đề",
            "hanzi": "发现问题",
            "words": [
              {
                "text": "发现问题",
                "pinyin": "fa xian wen ti",
                "tone": "fā xiàn wèn tí",
                "pos": "phrase",
                "vi": "phát hiện vấn đề"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "fa xian wen ti",
            "tone": "fā xiàn wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "tìm hiểu thế giới",
            "hanzi": "了解世界",
            "words": [
              {
                "text": "了解世界",
                "pinyin": "liao jie shi jie",
                "tone": "liǎo jiě shì jiè",
                "pos": "phrase",
                "vi": "tìm hiểu thế giới"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "liao jie shi jie",
            "tone": "liǎo jiě shì jiè"
          },
          {
            "stage": "phrase",
            "vi": "quan sát chăm chú",
            "hanzi": "用心观察",
            "words": [
              {
                "text": "用心观察",
                "pinyin": "yong xin guan cha",
                "tone": "yòng xīn guān chá",
                "pos": "phrase",
                "vi": "quan sát chăm chú"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "yong xin guan cha",
            "tone": "yòng xīn guān chá"
          },
          {
            "stage": "phrase",
            "vi": "nhìn thấy thay đổi",
            "hanzi": "看到变化",
            "words": [
              {
                "text": "看到变化",
                "pinyin": "kan dao bian hua",
                "tone": "kàn dào biàn huà",
                "pos": "phrase",
                "vi": "nhìn thấy thay đổi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "kan dao bian hua",
            "tone": "kàn dào biàn huà"
          },
          {
            "stage": "phrase",
            "vi": "nắm bắt cơ hội",
            "hanzi": "抓住机会",
            "words": [
              {
                "text": "抓住机会",
                "pinyin": "zhua zhu ji hui",
                "tone": "zhuā zhù jī huì",
                "pos": "phrase",
                "vi": "nắm bắt cơ hội"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "zhua zhu ji hui",
            "tone": "zhuā zhù jī huì"
          },
          {
            "stage": "phrase",
            "vi": "một trải nghiệm",
            "hanzi": "一次经历",
            "words": [
              {
                "text": "一次经历",
                "pinyin": "yi ci jing li",
                "tone": "yí cì jīng lì",
                "pos": "phrase",
                "vi": "một trải nghiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "yi ci jing li",
            "tone": "yí cì jīng lì"
          },
          {
            "stage": "phrase",
            "vi": "cảm giác mới",
            "hanzi": "新的感觉",
            "words": [
              {
                "text": "新的感觉",
                "pinyin": "xin de gan jue",
                "tone": "xīn de gǎn jué",
                "pos": "phrase",
                "vi": "cảm giác mới"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "xin de gan jue",
            "tone": "xīn de gǎn jué"
          },
          {
            "stage": "phrase",
            "vi": "tin vào bản thân",
            "hanzi": "相信自己",
            "words": [
              {
                "text": "相信自己",
                "pinyin": "xiang xin zi ji",
                "tone": "xiāng xìn zì jǐ",
                "pos": "phrase",
                "vi": "tin vào bản thân"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "xiang xin zi ji",
            "tone": "xiāng xìn zì jǐ"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy phát hiện ra một vấn đề.",
            "hanzi": "他发现了一个问题。",
            "words": [
              {
                "text": "他发现了一个问题",
                "pinyin": "ta fa xian le yi ge wen ti",
                "tone": "tā fā xiàn le yí gè wèn tí",
                "pos": "sentence",
                "vi": "Anh ấy phát hiện ra một vấn đề."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "ta fa xian le yi ge wen ti",
            "tone": "tā fā xiàn le yí gè wèn tí"
          },
          {
            "stage": "sentence",
            "vi": "Du lịch giúp tìm hiểu thế giới.",
            "hanzi": "旅行能了解世界。",
            "words": [
              {
                "text": "旅行能了解世界",
                "pinyin": "lü xing neng liao jie shi jie",
                "tone": "lǚ xíng néng liǎo jiě shì jiè",
                "pos": "sentence",
                "vi": "Du lịch giúp tìm hiểu thế giới."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "lü xing neng liao jie shi jie",
            "tone": "lǚ xíng néng liǎo jiě shì jiè"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần quan sát thật chú tâm.",
            "hanzi": "我们要用心观察。",
            "words": [
              {
                "text": "我们要用心观察",
                "pinyin": "wo men yao yong xin guan cha",
                "tone": "wǒ men yào yòng xīn guān chá",
                "pos": "sentence",
                "vi": "Chúng ta cần quan sát thật chú tâm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "wo men yao yong xin guan cha",
            "tone": "wǒ men yào yòng xīn guān chá"
          },
          {
            "stage": "sentence",
            "vi": "Tôi nhìn thấy sự thay đổi của thành phố.",
            "hanzi": "我看到了城市的变化。",
            "words": [
              {
                "text": "我看到了城市的变化",
                "pinyin": "wo kan dao le cheng shi de bian hua",
                "tone": "wǒ kàn dào le chéng shì de biàn huà",
                "pos": "sentence",
                "vi": "Tôi nhìn thấy sự thay đổi của thành phố."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "wo kan dao le cheng shi de bian hua",
            "tone": "wǒ kàn dào le chéng shì de biàn huà"
          },
          {
            "stage": "sentence",
            "vi": "Người trẻ nên nắm bắt cơ hội.",
            "hanzi": "年轻人要抓住机会。",
            "words": [
              {
                "text": "年轻人要抓住机会",
                "pinyin": "nian qing ren yao zhua zhu ji hui",
                "tone": "nián qīng rén yào zhuā zhù jī huì",
                "pos": "sentence",
                "vi": "Người trẻ nên nắm bắt cơ hội."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "nian qing ren yao zhua zhu ji hui",
            "tone": "nián qīng rén yào zhuā zhù jī huì"
          },
          {
            "stage": "sentence",
            "vi": "Trải nghiệm này giúp tôi trưởng thành.",
            "hanzi": "这次经历让我成长。",
            "words": [
              {
                "text": "这次经历让我成长",
                "pinyin": "zhe ci jing li rang wo cheng zhang",
                "tone": "zhè cì jīng lì ràng wǒ chéng zhǎng",
                "pos": "sentence",
                "vi": "Trải nghiệm này giúp tôi trưởng thành."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "zhe ci jing li rang wo cheng zhang",
            "tone": "zhè cì jīng lì ràng wǒ chéng zhǎng"
          },
          {
            "stage": "sentence",
            "vi": "Nơi này cho tôi cảm giác mới.",
            "hanzi": "这里给我新的感觉。",
            "words": [
              {
                "text": "这里给我新的感觉",
                "pinyin": "zhe li gei wo xin de gan jue",
                "tone": "zhè lǐ gěi wǒ xīn de gǎn jué",
                "pos": "sentence",
                "vi": "Nơi này cho tôi cảm giác mới."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "zhe li gei wo xin de gan jue",
            "tone": "zhè lǐ gěi wǒ xīn de gǎn jué"
          },
          {
            "stage": "sentence",
            "vi": "Hãy tin vào bản thân mình.",
            "hanzi": "请你相信自己。",
            "words": [
              {
                "text": "请你相信自己",
                "pinyin": "qing ni xiang xin zi ji",
                "tone": "qǐng nǐ xiāng xìn zì jǐ",
                "pos": "sentence",
                "vi": "Hãy tin vào bản thân mình."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l12",
            "pinyin": "qing ni xiang xin zi ji",
            "tone": "qǐng nǐ xiāng xìn zì jǐ"
          }
        ]
      },
      {
        "id": "hsk4-l13",
        "no": 13,
        "titleZh": "喝着茶看京剧",
        "titleVi": "Vừa uống trà vừa xem kinh kịch",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "trà",
            "hanzi": "茶",
            "words": [
              {
                "text": "茶",
                "pinyin": "cha",
                "tone": "chá",
                "pos": "noun",
                "vi": "trà"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "cha",
            "tone": "chá"
          },
          {
            "stage": "word",
            "vi": "Kinh kịch",
            "hanzi": "京剧",
            "words": [
              {
                "text": "京剧",
                "pinyin": "jing ju",
                "tone": "jīng jù",
                "pos": "noun",
                "vi": "Kinh kịch"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "jing ju",
            "tone": "jīng jù"
          },
          {
            "stage": "word",
            "vi": "văn hóa",
            "hanzi": "文化",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "truyền thống",
            "hanzi": "传统",
            "words": [
              {
                "text": "传统",
                "pinyin": "chuan tong",
                "tone": "chuán tǒng",
                "pos": "noun",
                "vi": "truyền thống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
          {
            "stage": "word",
            "vi": "hương vị",
            "hanzi": "味道",
            "words": [
              {
                "text": "味道",
                "pinyin": "wei dao",
                "tone": "wèi dào",
                "pos": "noun",
                "vi": "hương vị"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "wei dao",
            "tone": "wèi dào"
          },
          {
            "stage": "word",
            "vi": "biểu diễn",
            "hanzi": "表演",
            "words": [
              {
                "text": "表演",
                "pinyin": "biao yan",
                "tone": "biǎo yǎn",
                "pos": "verb",
                "vi": "biểu diễn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "biao yan",
            "tone": "biǎo yǎn"
          },
          {
            "stage": "word",
            "vi": "thưởng thức",
            "hanzi": "欣赏",
            "words": [
              {
                "text": "欣赏",
                "pinyin": "xin shang",
                "tone": "xīn shǎng",
                "pos": "verb",
                "vi": "thưởng thức"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "xin shang",
            "tone": "xīn shǎng"
          },
          {
            "stage": "word",
            "vi": "yên tĩnh",
            "hanzi": "安静",
            "words": [
              {
                "text": "安静",
                "pinyin": "an jing",
                "tone": "ān jìng",
                "pos": "adj",
                "vi": "yên tĩnh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "an jing",
            "tone": "ān jìng"
          },
          {
            "stage": "phrase",
            "vi": "uống trà",
            "hanzi": "喝茶",
            "words": [
              {
                "text": "喝茶",
                "pinyin": "he cha",
                "tone": "hē chá",
                "pos": "phrase",
                "vi": "uống trà"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "he cha",
            "tone": "hē chá"
          },
          {
            "stage": "phrase",
            "vi": "xem Kinh kịch",
            "hanzi": "看京剧",
            "words": [
              {
                "text": "看京剧",
                "pinyin": "kan jing ju",
                "tone": "kàn jīng jù",
                "pos": "phrase",
                "vi": "xem Kinh kịch"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "kan jing ju",
            "tone": "kàn jīng jù"
          },
          {
            "stage": "phrase",
            "vi": "trải nghiệm văn hóa",
            "hanzi": "体验文化",
            "words": [
              {
                "text": "体验文化",
                "pinyin": "ti yan wen hua",
                "tone": "tǐ yàn wén huà",
                "pos": "phrase",
                "vi": "trải nghiệm văn hóa"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "ti yan wen hua",
            "tone": "tǐ yàn wén huà"
          },
          {
            "stage": "phrase",
            "vi": "nghệ thuật truyền thống",
            "hanzi": "传统艺术",
            "words": [
              {
                "text": "传统艺术",
                "pinyin": "chuan tong yi shu",
                "tone": "chuán tǒng yì shù",
                "pos": "phrase",
                "vi": "nghệ thuật truyền thống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "chuan tong yi shu",
            "tone": "chuán tǒng yì shù"
          },
          {
            "stage": "phrase",
            "vi": "hương vị của trà",
            "hanzi": "茶的味道",
            "words": [
              {
                "text": "茶的味道",
                "pinyin": "cha de wei dao",
                "tone": "chá de wèi dào",
                "pos": "phrase",
                "vi": "hương vị của trà"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "cha de wei dao",
            "tone": "chá de wèi dào"
          },
          {
            "stage": "phrase",
            "vi": "biểu diễn Kinh kịch",
            "hanzi": "京剧表演",
            "words": [
              {
                "text": "京剧表演",
                "pinyin": "jing ju biao yan",
                "tone": "jīng jù biǎo yǎn",
                "pos": "phrase",
                "vi": "biểu diễn Kinh kịch"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "jing ju biao yan",
            "tone": "jīng jù biǎo yǎn"
          },
          {
            "stage": "phrase",
            "vi": "thưởng thức nghệ thuật",
            "hanzi": "欣赏艺术",
            "words": [
              {
                "text": "欣赏艺术",
                "pinyin": "xin shang yi shu",
                "tone": "xīn shǎng yì shù",
                "pos": "phrase",
                "vi": "thưởng thức nghệ thuật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "xin shang yi shu",
            "tone": "xīn shǎng yì shù"
          },
          {
            "stage": "phrase",
            "vi": "lắng nghe yên tĩnh",
            "hanzi": "安静地听",
            "words": [
              {
                "text": "安静地听",
                "pinyin": "an jing di ting",
                "tone": "ān jìng dì tīng",
                "pos": "phrase",
                "vi": "lắng nghe yên tĩnh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "an jing di ting",
            "tone": "ān jìng dì tīng"
          },
          {
            "stage": "sentence",
            "vi": "Ông thích uống trà.",
            "hanzi": "爷爷喜欢喝茶。",
            "words": [
              {
                "text": "爷爷喜欢喝茶",
                "pinyin": "ye ye xi huan he cha",
                "tone": "yé ye xǐ huan hē chá",
                "pos": "sentence",
                "vi": "Ông thích uống trà."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "ye ye xi huan he cha",
            "tone": "yé ye xǐ huan hē chá"
          },
          {
            "stage": "sentence",
            "vi": "Tôi muốn đi xem Kinh kịch.",
            "hanzi": "我想去看京剧。",
            "words": [
              {
                "text": "我想去看京剧",
                "pinyin": "wo xiang qu kan jing ju",
                "tone": "wǒ xiǎng qù kàn jīng jù",
                "pos": "sentence",
                "vi": "Tôi muốn đi xem Kinh kịch."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "wo xiang qu kan jing ju",
            "tone": "wǒ xiǎng qù kàn jīng jù"
          },
          {
            "stage": "sentence",
            "vi": "Uống trà cũng là một nét văn hóa.",
            "hanzi": "喝茶也是一种文化。",
            "words": [
              {
                "text": "喝茶也是一种文化",
                "pinyin": "he cha ye shi yi zhong wen hua",
                "tone": "hē chá yě shì yì zhǒng wén huà",
                "pos": "sentence",
                "vi": "Uống trà cũng là một nét văn hóa."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "he cha ye shi yi zhong wen hua",
            "tone": "hē chá yě shì yì zhǒng wén huà"
          },
          {
            "stage": "sentence",
            "vi": "Kinh kịch là nghệ thuật truyền thống.",
            "hanzi": "京剧是传统艺术。",
            "words": [
              {
                "text": "京剧是传统艺术",
                "pinyin": "jing ju shi chuan tong yi shu",
                "tone": "jīng jù shì chuán tǒng yì shù",
                "pos": "sentence",
                "vi": "Kinh kịch là nghệ thuật truyền thống."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "jing ju shi chuan tong yi shu",
            "tone": "jīng jù shì chuán tǒng yì shù"
          },
          {
            "stage": "sentence",
            "vi": "Loại trà này có hương vị rất thơm.",
            "hanzi": "这种茶味道很香。",
            "words": [
              {
                "text": "这种茶味道很香",
                "pinyin": "zhe zhong cha wei dao hen xiang",
                "tone": "zhè zhǒng chá wèi dào hěn xiāng",
                "pos": "sentence",
                "vi": "Loại trà này có hương vị rất thơm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "zhe zhong cha wei dao hen xiang",
            "tone": "zhè zhǒng chá wèi dào hěn xiāng"
          },
          {
            "stage": "sentence",
            "vi": "Tối nay có biểu diễn Kinh kịch.",
            "hanzi": "今晚有京剧表演。",
            "words": [
              {
                "text": "今晚有京剧表演",
                "pinyin": "jin wan you jing ju biao yan",
                "tone": "jīn wǎn yǒu jīng jù biǎo yǎn",
                "pos": "sentence",
                "vi": "Tối nay có biểu diễn Kinh kịch."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "jin wan you jing ju biao yan",
            "tone": "jīn wǎn yǒu jīng jù biǎo yǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học sinh học cách thưởng thức nghệ thuật.",
            "hanzi": "学生学会欣赏艺术。",
            "words": [
              {
                "text": "学生学会欣赏艺术",
                "pinyin": "xue sheng xue hui xin shang yi shu",
                "tone": "xué shēng xué huì xīn shǎng yì shù",
                "pos": "sentence",
                "vi": "Học sinh học cách thưởng thức nghệ thuật."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "xue sheng xue hui xin shang yi shu",
            "tone": "xué shēng xué huì xīn shǎng yì shù"
          },
          {
            "stage": "sentence",
            "vi": "Mọi người yên lặng nghe hát kịch.",
            "hanzi": "大家安静地听戏。",
            "words": [
              {
                "text": "大家安静地听戏",
                "pinyin": "da jia an jing di ting xi",
                "tone": "dà jiā ān jìng dì tīng xì",
                "pos": "sentence",
                "vi": "Mọi người yên lặng nghe hát kịch."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l13",
            "pinyin": "da jia an jing di ting xi",
            "tone": "dà jiā ān jìng dì tīng xì"
          }
        ]
      },
      {
        "id": "hsk4-l14",
        "no": 14,
        "titleZh": "保护地球母亲",
        "titleVi": "Bảo vệ Mẹ Trái Đất",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "bảo vệ",
            "hanzi": "保护",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "word",
            "vi": "Trái Đất",
            "hanzi": "地球",
            "words": [
              {
                "text": "地球",
                "pinyin": "di qiu",
                "tone": "dì qiú",
                "pos": "noun",
                "vi": "Trái Đất"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "di qiu",
            "tone": "dì qiú"
          },
          {
            "stage": "word",
            "vi": "môi trường",
            "hanzi": "环境",
            "words": [
              {
                "text": "环境",
                "pinyin": "huan jing",
                "tone": "huán jìng",
                "pos": "noun",
                "vi": "môi trường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "huan jing",
            "tone": "huán jìng"
          },
          {
            "stage": "word",
            "vi": "ô nhiễm",
            "hanzi": "污染",
            "words": [
              {
                "text": "污染",
                "pinyin": "wu ran",
                "tone": "wū rǎn",
                "pos": "noun",
                "vi": "ô nhiễm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "wu ran",
            "tone": "wū rǎn"
          },
          {
            "stage": "word",
            "vi": "rác",
            "hanzi": "垃圾",
            "words": [
              {
                "text": "垃圾",
                "pinyin": "la ji",
                "tone": "lā jī",
                "pos": "noun",
                "vi": "rác"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "la ji",
            "tone": "lā jī"
          },
          {
            "stage": "word",
            "vi": "tiết kiệm",
            "hanzi": "节约",
            "words": [
              {
                "text": "节约",
                "pinyin": "jie yue",
                "tone": "jié yuē",
                "pos": "verb",
                "vi": "tiết kiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "jie yue",
            "tone": "jié yuē"
          },
          {
            "stage": "word",
            "vi": "thiên nhiên",
            "hanzi": "自然",
            "words": [
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "thiên nhiên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "zi ran",
            "tone": "zì rán"
          },
          {
            "stage": "word",
            "vi": "trách nhiệm",
            "hanzi": "责任",
            "words": [
              {
                "text": "责任",
                "pinyin": "ze ren",
                "tone": "zé rèn",
                "pos": "noun",
                "vi": "trách nhiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "ze ren",
            "tone": "zé rèn"
          },
          {
            "stage": "phrase",
            "vi": "bảo vệ Trái Đất",
            "hanzi": "保护地球",
            "words": [
              {
                "text": "保护地球",
                "pinyin": "bao hu di qiu",
                "tone": "bǎo hù dì qiú",
                "pos": "phrase",
                "vi": "bảo vệ Trái Đất"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "bao hu di qiu",
            "tone": "bǎo hù dì qiú"
          },
          {
            "stage": "phrase",
            "vi": "Mẹ Trái Đất",
            "hanzi": "地球母亲",
            "words": [
              {
                "text": "地球母亲",
                "pinyin": "di qiu mu qin",
                "tone": "dì qiú mǔ qīn",
                "pos": "phrase",
                "vi": "Mẹ Trái Đất"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "di qiu mu qin",
            "tone": "dì qiú mǔ qīn"
          },
          {
            "stage": "phrase",
            "vi": "bảo vệ môi trường",
            "hanzi": "保护环境",
            "words": [
              {
                "text": "保护环境",
                "pinyin": "bao hu huan jing",
                "tone": "bǎo hù huán jìng",
                "pos": "phrase",
                "vi": "bảo vệ môi trường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "bao hu huan jing",
            "tone": "bǎo hù huán jìng"
          },
          {
            "stage": "phrase",
            "vi": "giảm ô nhiễm",
            "hanzi": "减少污染",
            "words": [
              {
                "text": "减少污染",
                "pinyin": "jian shao wu ran",
                "tone": "jiǎn shǎo wū rǎn",
                "pos": "phrase",
                "vi": "giảm ô nhiễm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "jian shao wu ran",
            "tone": "jiǎn shǎo wū rǎn"
          },
          {
            "stage": "phrase",
            "vi": "vứt rác",
            "hanzi": "扔垃圾",
            "words": [
              {
                "text": "扔垃圾",
                "pinyin": "reng la ji",
                "tone": "rēng lā jī",
                "pos": "phrase",
                "vi": "vứt rác"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "reng la ji",
            "tone": "rēng lā jī"
          },
          {
            "stage": "phrase",
            "vi": "tiết kiệm nước",
            "hanzi": "节约用水",
            "words": [
              {
                "text": "节约用水",
                "pinyin": "jie yue yong shui",
                "tone": "jié yuē yòng shuǐ",
                "pos": "phrase",
                "vi": "tiết kiệm nước"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "jie yue yong shui",
            "tone": "jié yuē yòng shuǐ"
          },
          {
            "stage": "phrase",
            "vi": "yêu quý thiên nhiên",
            "hanzi": "爱护自然",
            "words": [
              {
                "text": "爱护自然",
                "pinyin": "ai hu zi ran",
                "tone": "ài hù zì rán",
                "pos": "phrase",
                "vi": "yêu quý thiên nhiên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "ai hu zi ran",
            "tone": "ài hù zì rán"
          },
          {
            "stage": "phrase",
            "vi": "trách nhiệm chung",
            "hanzi": "共同责任",
            "words": [
              {
                "text": "共同责任",
                "pinyin": "gong tong ze ren",
                "tone": "gòng tóng zé rèn",
                "pos": "phrase",
                "vi": "trách nhiệm chung"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "gong tong ze ren",
            "tone": "gòng tóng zé rèn"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta nên bảo vệ Trái Đất.",
            "hanzi": "我们应该保护地球。",
            "words": [
              {
                "text": "我们应该保护地球",
                "pinyin": "wo men ying gai bao hu di qiu",
                "tone": "wǒ men yīng gāi bǎo hù dì qiú",
                "pos": "sentence",
                "vi": "Chúng ta nên bảo vệ Trái Đất."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "wo men ying gai bao hu di qiu",
            "tone": "wǒ men yīng gāi bǎo hù dì qiú"
          },
          {
            "stage": "sentence",
            "vi": "Trái Đất là ngôi nhà của chúng ta.",
            "hanzi": "地球是我们的家。",
            "words": [
              {
                "text": "地球是我们的家",
                "pinyin": "di qiu shi wo men de jia",
                "tone": "dì qiú shì wǒ men de jiā",
                "pos": "sentence",
                "vi": "Trái Đất là ngôi nhà của chúng ta."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "di qiu shi wo men de jia",
            "tone": "dì qiú shì wǒ men de jiā"
          },
          {
            "stage": "sentence",
            "vi": "Bảo vệ môi trường bắt đầu từ việc nhỏ.",
            "hanzi": "保护环境从小事做起。",
            "words": [
              {
                "text": "保护环境从小事做起",
                "pinyin": "bao hu huan jing cong xiao shi zuo qi",
                "tone": "bǎo hù huán jìng cóng xiǎo shì zuò qǐ",
                "pos": "sentence",
                "vi": "Bảo vệ môi trường bắt đầu từ việc nhỏ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "bao hu huan jing cong xiao shi zuo qi",
            "tone": "bǎo hù huán jìng cóng xiǎo shì zuò qǐ"
          },
          {
            "stage": "sentence",
            "vi": "Nhà máy cần giảm ô nhiễm.",
            "hanzi": "工厂要减少污染。",
            "words": [
              {
                "text": "工厂要减少污染",
                "pinyin": "gong chang yao jian shao wu ran",
                "tone": "gōng chǎng yào jiǎn shǎo wū rǎn",
                "pos": "sentence",
                "vi": "Nhà máy cần giảm ô nhiễm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "gong chang yao jian shao wu ran",
            "tone": "gōng chǎng yào jiǎn shǎo wū rǎn"
          },
          {
            "stage": "sentence",
            "vi": "Đừng vứt rác bừa bãi.",
            "hanzi": "不要随便扔垃圾。",
            "words": [
              {
                "text": "不要随便扔垃圾",
                "pinyin": "bu yao sui bian reng la ji",
                "tone": "bú yào suí biàn rēng lā jī",
                "pos": "sentence",
                "vi": "Đừng vứt rác bừa bãi."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "bu yao sui bian reng la ji",
            "tone": "bú yào suí biàn rēng lā jī"
          },
          {
            "stage": "sentence",
            "vi": "Mọi người hãy tiết kiệm nước.",
            "hanzi": "请大家节约用水。",
            "words": [
              {
                "text": "请大家节约用水",
                "pinyin": "qing da jia jie yue yong shui",
                "tone": "qǐng dà jiā jié yuē yòng shuǐ",
                "pos": "sentence",
                "vi": "Mọi người hãy tiết kiệm nước."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "qing da jia jie yue yong shui",
            "tone": "qǐng dà jiā jié yuē yòng shuǐ"
          },
          {
            "stage": "sentence",
            "vi": "Trẻ em nên yêu quý thiên nhiên.",
            "hanzi": "孩子应该爱护自然。",
            "words": [
              {
                "text": "孩子应该爱护自然",
                "pinyin": "hai zi ying gai ai hu zi ran",
                "tone": "hái zi yīng gāi ài hù zì rán",
                "pos": "sentence",
                "vi": "Trẻ em nên yêu quý thiên nhiên."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "hai zi ying gai ai hu zi ran",
            "tone": "hái zi yīng gāi ài hù zì rán"
          },
          {
            "stage": "sentence",
            "vi": "Bảo vệ môi trường là trách nhiệm chung.",
            "hanzi": "环保是共同责任。",
            "words": [
              {
                "text": "环保是共同责任",
                "pinyin": "huan bao shi gong tong ze ren",
                "tone": "huán bǎo shì gòng tóng zé rèn",
                "pos": "sentence",
                "vi": "Bảo vệ môi trường là trách nhiệm chung."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l14",
            "pinyin": "huan bao shi gong tong ze ren",
            "tone": "huán bǎo shì gòng tóng zé rèn"
          }
        ]
      },
      {
        "id": "hsk4-l15",
        "no": 15,
        "titleZh": "教育孩子的艺术",
        "titleVi": "Nghệ thuật giáo dục trẻ em",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "giáo dục",
            "hanzi": "教育",
            "words": [
              {
                "text": "教育",
                "pinyin": "jiao yu",
                "tone": "jiào yù",
                "pos": "verb",
                "vi": "giáo dục"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "jiao yu",
            "tone": "jiào yù"
          },
          {
            "stage": "word",
            "vi": "trẻ em",
            "hanzi": "孩子",
            "words": [
              {
                "text": "孩子",
                "pinyin": "hai zi",
                "tone": "hái zi",
                "pos": "noun",
                "vi": "trẻ em"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "hai zi",
            "tone": "hái zi"
          },
          {
            "stage": "word",
            "vi": "nghệ thuật",
            "hanzi": "艺术",
            "words": [
              {
                "text": "艺术",
                "pinyin": "yi shu",
                "tone": "yì shù",
                "pos": "noun",
                "vi": "nghệ thuật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "yi shu",
            "tone": "yì shù"
          },
          {
            "stage": "word",
            "vi": "khích lệ",
            "hanzi": "鼓励",
            "words": [
              {
                "text": "鼓励",
                "pinyin": "gu li",
                "tone": "gǔ lì",
                "pos": "verb",
                "vi": "khích lệ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "gu li",
            "tone": "gǔ lì"
          },
          {
            "stage": "word",
            "vi": "phê bình",
            "hanzi": "批评",
            "words": [
              {
                "text": "批评",
                "pinyin": "pi ping",
                "tone": "pī píng",
                "pos": "verb",
                "vi": "phê bình"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "pi ping",
            "tone": "pī píng"
          },
          {
            "stage": "word",
            "vi": "kiên nhẫn",
            "hanzi": "耐心",
            "words": [
              {
                "text": "耐心",
                "pinyin": "nai xin",
                "tone": "nài xīn",
                "pos": "noun",
                "vi": "kiên nhẫn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "nai xin",
            "tone": "nài xīn"
          },
          {
            "stage": "word",
            "vi": "trưởng thành",
            "hanzi": "成长",
            "words": [
              {
                "text": "成长",
                "pinyin": "cheng zhang",
                "tone": "chéng zhǎng",
                "pos": "verb",
                "vi": "trưởng thành"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "cheng zhang",
            "tone": "chéng zhǎng"
          },
          {
            "stage": "word",
            "vi": "giao tiếp",
            "hanzi": "沟通",
            "words": [
              {
                "text": "沟通",
                "pinyin": "gou tong",
                "tone": "gōu tōng",
                "pos": "verb",
                "vi": "giao tiếp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "gou tong",
            "tone": "gōu tōng"
          },
          {
            "stage": "phrase",
            "vi": "giáo dục trẻ em",
            "hanzi": "教育孩子",
            "words": [
              {
                "text": "教育孩子",
                "pinyin": "jiao yu hai zi",
                "tone": "jiào yù hái zi",
                "pos": "phrase",
                "vi": "giáo dục trẻ em"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "jiao yu hai zi",
            "tone": "jiào yù hái zi"
          },
          {
            "stage": "phrase",
            "vi": "quan tâm trẻ em",
            "hanzi": "关心孩子",
            "words": [
              {
                "text": "关心孩子",
                "pinyin": "guan xin hai zi",
                "tone": "guān xīn hái zi",
                "pos": "phrase",
                "vi": "quan tâm trẻ em"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "guan xin hai zi",
            "tone": "guān xīn hái zi"
          },
          {
            "stage": "phrase",
            "vi": "nghệ thuật giáo dục",
            "hanzi": "教育的艺术",
            "words": [
              {
                "text": "教育的艺术",
                "pinyin": "jiao yu de yi shu",
                "tone": "jiào yù de yì shù",
                "pos": "phrase",
                "vi": "nghệ thuật giáo dục"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "jiao yu de yi shu",
            "tone": "jiào yù de yì shù"
          },
          {
            "stage": "phrase",
            "vi": "khích lệ học sinh",
            "hanzi": "鼓励学生",
            "words": [
              {
                "text": "鼓励学生",
                "pinyin": "gu li xue sheng",
                "tone": "gǔ lì xué shēng",
                "pos": "phrase",
                "vi": "khích lệ học sinh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "gu li xue sheng",
            "tone": "gǔ lì xué shēng"
          },
          {
            "stage": "phrase",
            "vi": "tiếp nhận phê bình",
            "hanzi": "接受批评",
            "words": [
              {
                "text": "接受批评",
                "pinyin": "jie shou pi ping",
                "tone": "jiē shòu pī píng",
                "pos": "phrase",
                "vi": "tiếp nhận phê bình"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "jie shou pi ping",
            "tone": "jiē shòu pī píng"
          },
          {
            "stage": "phrase",
            "vi": "có kiên nhẫn",
            "hanzi": "有耐心",
            "words": [
              {
                "text": "有耐心",
                "pinyin": "you nai xin",
                "tone": "yǒu nài xīn",
                "pos": "phrase",
                "vi": "có kiên nhẫn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "you nai xin",
            "tone": "yǒu nài xīn"
          },
          {
            "stage": "phrase",
            "vi": "trưởng thành lành mạnh",
            "hanzi": "健康成长",
            "words": [
              {
                "text": "健康成长",
                "pinyin": "jian kang cheng zhang",
                "tone": "jiàn kāng chéng zhǎng",
                "pos": "phrase",
                "vi": "trưởng thành lành mạnh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "jian kang cheng zhang",
            "tone": "jiàn kāng chéng zhǎng"
          },
          {
            "stage": "phrase",
            "vi": "chủ động giao tiếp",
            "hanzi": "主动沟通",
            "words": [
              {
                "text": "主动沟通",
                "pinyin": "zhu dong gou tong",
                "tone": "zhǔ dòng gōu tōng",
                "pos": "phrase",
                "vi": "chủ động giao tiếp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "zhu dong gou tong",
            "tone": "zhǔ dòng gōu tōng"
          },
          {
            "stage": "sentence",
            "vi": "Cha mẹ cần giáo dục con cái.",
            "hanzi": "父母要教育孩子。",
            "words": [
              {
                "text": "父母要教育孩子",
                "pinyin": "fu mu yao jiao yu hai zi",
                "tone": "fù mǔ yào jiào yù hái zi",
                "pos": "sentence",
                "vi": "Cha mẹ cần giáo dục con cái."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "fu mu yao jiao yu hai zi",
            "tone": "fù mǔ yào jiào yù hái zi"
          },
          {
            "stage": "sentence",
            "vi": "Giáo viên rất quan tâm trẻ em.",
            "hanzi": "老师很关心孩子。",
            "words": [
              {
                "text": "老师很关心孩子",
                "pinyin": "lao shi hen guan xin hai zi",
                "tone": "lǎo shī hěn guān xīn hái zi",
                "pos": "sentence",
                "vi": "Giáo viên rất quan tâm trẻ em."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "lao shi hen guan xin hai zi",
            "tone": "lǎo shī hěn guān xīn hái zi"
          },
          {
            "stage": "sentence",
            "vi": "Giáo dục trẻ em cần có nghệ thuật.",
            "hanzi": "教育孩子需要艺术。",
            "words": [
              {
                "text": "教育孩子需要艺术",
                "pinyin": "jiao yu hai zi xu yao yi shu",
                "tone": "jiào yù hái zi xū yào yì shù",
                "pos": "sentence",
                "vi": "Giáo dục trẻ em cần có nghệ thuật."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "jiao yu hai zi xu yao yi shu",
            "tone": "jiào yù hái zi xū yào yì shù"
          },
          {
            "stage": "sentence",
            "vi": "Giáo viên thường khích lệ học sinh.",
            "hanzi": "老师常常鼓励学生。",
            "words": [
              {
                "text": "老师常常鼓励学生",
                "pinyin": "lao shi chang chang gu li xue sheng",
                "tone": "lǎo shī cháng cháng gǔ lì xué shēng",
                "pos": "sentence",
                "vi": "Giáo viên thường khích lệ học sinh."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "lao shi chang chang gu li xue sheng",
            "tone": "lǎo shī cháng cháng gǔ lì xué shēng"
          },
          {
            "stage": "sentence",
            "vi": "Trẻ em cần học cách tiếp nhận phê bình.",
            "hanzi": "孩子要学会接受批评。",
            "words": [
              {
                "text": "孩子要学会接受批评",
                "pinyin": "hai zi yao xue hui jie shou pi ping",
                "tone": "hái zi yào xué huì jiē shòu pī píng",
                "pos": "sentence",
                "vi": "Trẻ em cần học cách tiếp nhận phê bình."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "hai zi yao xue hui jie shou pi ping",
            "tone": "hái zi yào xué huì jiē shòu pī píng"
          },
          {
            "stage": "sentence",
            "vi": "Giáo dục trẻ em cần có sự kiên nhẫn.",
            "hanzi": "教育孩子要有耐心。",
            "words": [
              {
                "text": "教育孩子要有耐心",
                "pinyin": "jiao yu hai zi yao you nai xin",
                "tone": "jiào yù hái zi yào yǒu nài xīn",
                "pos": "sentence",
                "vi": "Giáo dục trẻ em cần có sự kiên nhẫn."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "jiao yu hai zi yao you nai xin",
            "tone": "jiào yù hái zi yào yǒu nài xīn"
          },
          {
            "stage": "sentence",
            "vi": "Mỗi đứa trẻ đều đang trưởng thành.",
            "hanzi": "每个孩子都在成长。",
            "words": [
              {
                "text": "每个孩子都在成长",
                "pinyin": "mei ge hai zi dou zai cheng zhang",
                "tone": "měi gè hái zi dōu zài chéng zhǎng",
                "pos": "sentence",
                "vi": "Mỗi đứa trẻ đều đang trưởng thành."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "mei ge hai zi dou zai cheng zhang",
            "tone": "měi gè hái zi dōu zài chéng zhǎng"
          },
          {
            "stage": "sentence",
            "vi": "Cha mẹ cần giao tiếp với con cái.",
            "hanzi": "父母要和孩子沟通。",
            "words": [
              {
                "text": "父母要和孩子沟通",
                "pinyin": "fu mu yao he hai zi gou tong",
                "tone": "fù mǔ yào hé hái zi gōu tōng",
                "pos": "sentence",
                "vi": "Cha mẹ cần giao tiếp với con cái."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l15",
            "pinyin": "fu mu yao he hai zi gou tong",
            "tone": "fù mǔ yào hé hái zi gōu tōng"
          }
        ]
      },
      {
        "id": "hsk4-l16",
        "no": 16,
        "titleZh": "生活可以更美好",
        "titleVi": "Cuộc sống có thể tốt đẹp hơn",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "cuộc sống",
            "hanzi": "生活",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
          },
          {
            "stage": "word",
            "vi": "tốt đẹp",
            "hanzi": "美好",
            "words": [
              {
                "text": "美好",
                "pinyin": "mei hao",
                "tone": "měi hǎo",
                "pos": "adj",
                "vi": "tốt đẹp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "mei hao",
            "tone": "měi hǎo"
          },
          {
            "stage": "word",
            "vi": "tâm trạng",
            "hanzi": "心情",
            "words": [
              {
                "text": "心情",
                "pinyin": "xin qing",
                "tone": "xīn qíng",
                "pos": "noun",
                "vi": "tâm trạng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "xin qing",
            "tone": "xīn qíng"
          },
          {
            "stage": "word",
            "vi": "vui vẻ",
            "hanzi": "快乐",
            "words": [
              {
                "text": "快乐",
                "pinyin": "kuai le",
                "tone": "kuài lè",
                "pos": "adj",
                "vi": "vui vẻ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "kuai le",
            "tone": "kuài lè"
          },
          {
            "stage": "word",
            "vi": "đơn giản",
            "hanzi": "简单",
            "words": [
              {
                "text": "简单",
                "pinyin": "jian dan",
                "tone": "jiǎn dān",
                "pos": "adj",
                "vi": "đơn giản"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "jian dan",
            "tone": "jiǎn dān"
          },
          {
            "stage": "word",
            "vi": "nỗ lực",
            "hanzi": "努力",
            "words": [
              {
                "text": "努力",
                "pinyin": "nu li",
                "tone": "nǔ lì",
                "pos": "verb",
                "vi": "nỗ lực"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "nu li",
            "tone": "nǔ lì"
          },
          {
            "stage": "word",
            "vi": "thay đổi",
            "hanzi": "改变",
            "words": [
              {
                "text": "改变",
                "pinyin": "gai bian",
                "tone": "gǎi biàn",
                "pos": "verb",
                "vi": "thay đổi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "gai bian",
            "tone": "gǎi biàn"
          },
          {
            "stage": "word",
            "vi": "hy vọng",
            "hanzi": "希望",
            "words": [
              {
                "text": "希望",
                "pinyin": "xi wang",
                "tone": "xī wàng",
                "pos": "noun",
                "vi": "hy vọng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "xi wang",
            "tone": "xī wàng"
          },
          {
            "stage": "phrase",
            "vi": "yêu cuộc sống",
            "hanzi": "热爱生活",
            "words": [
              {
                "text": "热爱生活",
                "pinyin": "re ai sheng huo",
                "tone": "rè ài shēng huó",
                "pos": "phrase",
                "vi": "yêu cuộc sống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "re ai sheng huo",
            "tone": "rè ài shēng huó"
          },
          {
            "stage": "phrase",
            "vi": "cuộc sống tốt đẹp",
            "hanzi": "美好生活",
            "words": [
              {
                "text": "美好生活",
                "pinyin": "mei hao sheng huo",
                "tone": "měi hǎo shēng huó",
                "pos": "phrase",
                "vi": "cuộc sống tốt đẹp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "mei hao sheng huo",
            "tone": "měi hǎo shēng huó"
          },
          {
            "stage": "phrase",
            "vi": "tâm trạng khá tốt",
            "hanzi": "心情不错",
            "words": [
              {
                "text": "心情不错",
                "pinyin": "xin qing bu cuo",
                "tone": "xīn qíng bú cuò",
                "pos": "phrase",
                "vi": "tâm trạng khá tốt"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "xin qing bu cuo",
            "tone": "xīn qíng bú cuò"
          },
          {
            "stage": "phrase",
            "vi": "sống vui vẻ",
            "hanzi": "快乐生活",
            "words": [
              {
                "text": "快乐生活",
                "pinyin": "kuai le sheng huo",
                "tone": "kuài lè shēng huó",
                "pos": "phrase",
                "vi": "sống vui vẻ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "kuai le sheng huo",
            "tone": "kuài lè shēng huó"
          },
          {
            "stage": "phrase",
            "vi": "hạnh phúc giản dị",
            "hanzi": "简单的幸福",
            "words": [
              {
                "text": "简单的幸福",
                "pinyin": "jian dan de xing fu",
                "tone": "jiǎn dān de xìng fú",
                "pos": "phrase",
                "vi": "hạnh phúc giản dị"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "jian dan de xing fu",
            "tone": "jiǎn dān de xìng fú"
          },
          {
            "stage": "phrase",
            "vi": "làm việc nỗ lực",
            "hanzi": "努力工作",
            "words": [
              {
                "text": "努力工作",
                "pinyin": "nu li gong zuo",
                "tone": "nǔ lì gōng zuò",
                "pos": "phrase",
                "vi": "làm việc nỗ lực"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "nu li gong zuo",
            "tone": "nǔ lì gōng zuò"
          },
          {
            "stage": "phrase",
            "vi": "thay đổi thói quen",
            "hanzi": "改变习惯",
            "words": [
              {
                "text": "改变习惯",
                "pinyin": "gai bian xi guan",
                "tone": "gǎi biàn xí guàn",
                "pos": "phrase",
                "vi": "thay đổi thói quen"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "gai bian xi guan",
            "tone": "gǎi biàn xí guàn"
          },
          {
            "stage": "phrase",
            "vi": "đầy hy vọng",
            "hanzi": "充满希望",
            "words": [
              {
                "text": "充满希望",
                "pinyin": "chong man xi wang",
                "tone": "chōng mǎn xī wàng",
                "pos": "phrase",
                "vi": "đầy hy vọng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "chong man xi wang",
            "tone": "chōng mǎn xī wàng"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta nên yêu cuộc sống.",
            "hanzi": "我们要热爱生活。",
            "words": [
              {
                "text": "我们要热爱生活",
                "pinyin": "wo men yao re ai sheng huo",
                "tone": "wǒ men yào rè ài shēng huó",
                "pos": "sentence",
                "vi": "Chúng ta nên yêu cuộc sống."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "wo men yao re ai sheng huo",
            "tone": "wǒ men yào rè ài shēng huó"
          },
          {
            "stage": "sentence",
            "vi": "Nỗ lực sẽ mang lại cuộc sống tốt đẹp.",
            "hanzi": "努力会带来美好生活。",
            "words": [
              {
                "text": "努力会带来美好生活",
                "pinyin": "nu li hui dai lai mei hao sheng huo",
                "tone": "nǔ lì huì dài lái měi hǎo shēng huó",
                "pos": "sentence",
                "vi": "Nỗ lực sẽ mang lại cuộc sống tốt đẹp."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "nu li hui dai lai mei hao sheng huo",
            "tone": "nǔ lì huì dài lái měi hǎo shēng huó"
          },
          {
            "stage": "sentence",
            "vi": "Hôm nay tâm trạng tôi khá tốt.",
            "hanzi": "今天我的心情不错。",
            "words": [
              {
                "text": "今天我的心情不错",
                "pinyin": "jin tian wo de xin qing bu cuo",
                "tone": "jīn tiān wǒ de xīn qíng bú cuò",
                "pos": "sentence",
                "vi": "Hôm nay tâm trạng tôi khá tốt."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "jin tian wo de xin qing bu cuo",
            "tone": "jīn tiān wǒ de xīn qíng bú cuò"
          },
          {
            "stage": "sentence",
            "vi": "Cô ấy hy vọng sống vui vẻ.",
            "hanzi": "她希望快乐生活。",
            "words": [
              {
                "text": "她希望快乐生活",
                "pinyin": "ta xi wang kuai le sheng huo",
                "tone": "tā xī wàng kuài lè shēng huó",
                "pos": "sentence",
                "vi": "Cô ấy hy vọng sống vui vẻ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "ta xi wang kuai le sheng huo",
            "tone": "tā xī wàng kuài lè shēng huó"
          },
          {
            "stage": "sentence",
            "vi": "Hạnh phúc đôi khi rất giản dị.",
            "hanzi": "幸福有时很简单。",
            "words": [
              {
                "text": "幸福有时很简单",
                "pinyin": "xing fu you shi hen jian dan",
                "tone": "xìng fú yǒu shí hěn jiǎn dān",
                "pos": "sentence",
                "vi": "Hạnh phúc đôi khi rất giản dị."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "xing fu you shi hen jian dan",
            "tone": "xìng fú yǒu shí hěn jiǎn dān"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy làm việc nỗ lực mỗi ngày.",
            "hanzi": "他每天努力工作。",
            "words": [
              {
                "text": "他每天努力工作",
                "pinyin": "ta mei tian nu li gong zuo",
                "tone": "tā měi tiān nǔ lì gōng zuò",
                "pos": "sentence",
                "vi": "Anh ấy làm việc nỗ lực mỗi ngày."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "ta mei tian nu li gong zuo",
            "tone": "tā měi tiān nǔ lì gōng zuò"
          },
          {
            "stage": "sentence",
            "vi": "Thói quen tốt có thể thay đổi cuộc sống.",
            "hanzi": "好习惯能改变生活。",
            "words": [
              {
                "text": "好习惯能改变生活",
                "pinyin": "hao xi guan neng gai bian sheng huo",
                "tone": "hǎo xí guàn néng gǎi biàn shēng huó",
                "pos": "sentence",
                "vi": "Thói quen tốt có thể thay đổi cuộc sống."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "hao xi guan neng gai bian sheng huo",
            "tone": "hǎo xí guàn néng gǎi biàn shēng huó"
          },
          {
            "stage": "sentence",
            "vi": "Cuộc sống mới đầy hy vọng.",
            "hanzi": "新的生活充满希望。",
            "words": [
              {
                "text": "新的生活充满希望",
                "pinyin": "xin de sheng huo chong man xi wang",
                "tone": "xīn de shēng huó chōng mǎn xī wàng",
                "pos": "sentence",
                "vi": "Cuộc sống mới đầy hy vọng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l16",
            "pinyin": "xin de sheng huo chong man xi wang",
            "tone": "xīn de shēng huó chōng mǎn xī wàng"
          }
        ]
      },
      {
        "id": "hsk4-l17",
        "no": 17,
        "titleZh": "人与自然",
        "titleVi": "Con người và thiên nhiên",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "thiên nhiên",
            "hanzi": "自然",
            "words": [
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "thiên nhiên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "zi ran",
            "tone": "zì rán"
          },
          {
            "stage": "word",
            "vi": "động vật",
            "hanzi": "动物",
            "words": [
              {
                "text": "动物",
                "pinyin": "dong wu",
                "tone": "dòng wù",
                "pos": "noun",
                "vi": "động vật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "dong wu",
            "tone": "dòng wù"
          },
          {
            "stage": "word",
            "vi": "thực vật",
            "hanzi": "植物",
            "words": [
              {
                "text": "植物",
                "pinyin": "zhi wu",
                "tone": "zhí wù",
                "pos": "noun",
                "vi": "thực vật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "zhi wu",
            "tone": "zhí wù"
          },
          {
            "stage": "word",
            "vi": "nhân loại",
            "hanzi": "人类",
            "words": [
              {
                "text": "人类",
                "pinyin": "ren lei",
                "tone": "rén lèi",
                "pos": "noun",
                "vi": "nhân loại"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "ren lei",
            "tone": "rén lèi"
          },
          {
            "stage": "word",
            "vi": "mối quan hệ",
            "hanzi": "关系",
            "words": [
              {
                "text": "关系",
                "pinyin": "guan xi",
                "tone": "guān xì",
                "pos": "noun",
                "vi": "mối quan hệ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "guan xi",
            "tone": "guān xì"
          },
          {
            "stage": "word",
            "vi": "không khí",
            "hanzi": "空气",
            "words": [
              {
                "text": "空气",
                "pinyin": "kong qi",
                "tone": "kōng qì",
                "pos": "noun",
                "vi": "không khí"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "kong qi",
            "tone": "kōng qì"
          },
          {
            "stage": "word",
            "vi": "rừng",
            "hanzi": "森林",
            "words": [
              {
                "text": "森林",
                "pinyin": "sen lin",
                "tone": "sēn lín",
                "pos": "noun",
                "vi": "rừng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "sen lin",
            "tone": "sēn lín"
          },
          {
            "stage": "word",
            "vi": "cân bằng",
            "hanzi": "平衡",
            "words": [
              {
                "text": "平衡",
                "pinyin": "ping heng",
                "tone": "píng héng",
                "pos": "noun",
                "vi": "cân bằng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "ping heng",
            "tone": "píng héng"
          },
          {
            "stage": "phrase",
            "vi": "bảo vệ thiên nhiên",
            "hanzi": "保护自然",
            "words": [
              {
                "text": "保护自然",
                "pinyin": "bao hu zi ran",
                "tone": "bǎo hù zì rán",
                "pos": "phrase",
                "vi": "bảo vệ thiên nhiên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "bao hu zi ran",
            "tone": "bǎo hù zì rán"
          },
          {
            "stage": "phrase",
            "vi": "yêu quý động vật",
            "hanzi": "爱护动物",
            "words": [
              {
                "text": "爱护动物",
                "pinyin": "ai hu dong wu",
                "tone": "ài hù dòng wù",
                "pos": "phrase",
                "vi": "yêu quý động vật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "ai hu dong wu",
            "tone": "ài hù dòng wù"
          },
          {
            "stage": "phrase",
            "vi": "quan sát thực vật",
            "hanzi": "观察植物",
            "words": [
              {
                "text": "观察植物",
                "pinyin": "guan cha zhi wu",
                "tone": "guān chá zhí wù",
                "pos": "phrase",
                "vi": "quan sát thực vật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "guan cha zhi wu",
            "tone": "guān chá zhí wù"
          },
          {
            "stage": "phrase",
            "vi": "đời sống con người",
            "hanzi": "人类生活",
            "words": [
              {
                "text": "人类生活",
                "pinyin": "ren lei sheng huo",
                "tone": "rén lèi shēng huó",
                "pos": "phrase",
                "vi": "đời sống con người"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "ren lei sheng huo",
            "tone": "rén lèi shēng huó"
          },
          {
            "stage": "phrase",
            "vi": "mối quan hệ mật thiết",
            "hanzi": "密切关系",
            "words": [
              {
                "text": "密切关系",
                "pinyin": "mi qie guan xi",
                "tone": "mì qiè guān xì",
                "pos": "phrase",
                "vi": "mối quan hệ mật thiết"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "mi qie guan xi",
            "tone": "mì qiè guān xì"
          },
          {
            "stage": "phrase",
            "vi": "không khí trong lành",
            "hanzi": "新鲜空气",
            "words": [
              {
                "text": "新鲜空气",
                "pinyin": "xin xian kong qi",
                "tone": "xīn xiān kōng qì",
                "pos": "phrase",
                "vi": "không khí trong lành"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "xin xian kong qi",
            "tone": "xīn xiān kōng qì"
          },
          {
            "stage": "phrase",
            "vi": "đi vào rừng",
            "hanzi": "走进森林",
            "words": [
              {
                "text": "走进森林",
                "pinyin": "zou jin sen lin",
                "tone": "zǒu jìn sēn lín",
                "pos": "phrase",
                "vi": "đi vào rừng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "zou jin sen lin",
            "tone": "zǒu jìn sēn lín"
          },
          {
            "stage": "phrase",
            "vi": "giữ cân bằng",
            "hanzi": "保持平衡",
            "words": [
              {
                "text": "保持平衡",
                "pinyin": "bao chi ping heng",
                "tone": "bǎo chí píng héng",
                "pos": "phrase",
                "vi": "giữ cân bằng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "bao chi ping heng",
            "tone": "bǎo chí píng héng"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cùng bảo vệ thiên nhiên.",
            "hanzi": "我们一起保护自然。",
            "words": [
              {
                "text": "我们一起保护自然",
                "pinyin": "wo men yi qi bao hu zi ran",
                "tone": "wǒ men yì qǐ bǎo hù zì rán",
                "pos": "sentence",
                "vi": "Chúng ta cùng bảo vệ thiên nhiên."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "wo men yi qi bao hu zi ran",
            "tone": "wǒ men yì qǐ bǎo hù zì rán"
          },
          {
            "stage": "sentence",
            "vi": "Trẻ em nên yêu quý động vật.",
            "hanzi": "孩子们应该爱护动物。",
            "words": [
              {
                "text": "孩子们应该爱护动物",
                "pinyin": "hai zi men ying gai ai hu dong wu",
                "tone": "hái zi men yīng gāi ài hù dòng wù",
                "pos": "sentence",
                "vi": "Trẻ em nên yêu quý động vật."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "hai zi men ying gai ai hu dong wu",
            "tone": "hái zi men yīng gāi ài hù dòng wù"
          },
          {
            "stage": "sentence",
            "vi": "Học sinh quan sát thực vật trong công viên.",
            "hanzi": "学生在公园观察植物。",
            "words": [
              {
                "text": "学生在公园观察植物",
                "pinyin": "xue sheng zai gong yuan guan cha zhi wu",
                "tone": "xué shēng zài gōng yuán guān chá zhí wù",
                "pos": "sentence",
                "vi": "Học sinh quan sát thực vật trong công viên."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "xue sheng zai gong yuan guan cha zhi wu",
            "tone": "xué shēng zài gōng yuán guān chá zhí wù"
          },
          {
            "stage": "sentence",
            "vi": "Thiên nhiên ảnh hưởng đến đời sống con người.",
            "hanzi": "自然影响人类生活。",
            "words": [
              {
                "text": "自然影响人类生活",
                "pinyin": "zi ran ying xiang ren lei sheng huo",
                "tone": "zì rán yǐng xiǎng rén lèi shēng huó",
                "pos": "sentence",
                "vi": "Thiên nhiên ảnh hưởng đến đời sống con người."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "zi ran ying xiang ren lei sheng huo",
            "tone": "zì rán yǐng xiǎng rén lèi shēng huó"
          },
          {
            "stage": "sentence",
            "vi": "Con người và thiên nhiên có quan hệ mật thiết.",
            "hanzi": "人与自然关系密切。",
            "words": [
              {
                "text": "人与自然关系密切",
                "pinyin": "ren yu zi ran guan xi mi qie",
                "tone": "rén yǔ zì rán guān xì mì qiè",
                "pos": "sentence",
                "vi": "Con người và thiên nhiên có quan hệ mật thiết."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "ren yu zi ran guan xi mi qie",
            "tone": "rén yǔ zì rán guān xì mì qiè"
          },
          {
            "stage": "sentence",
            "vi": "Không khí trên núi rất trong lành.",
            "hanzi": "山里的空气很新鲜。",
            "words": [
              {
                "text": "山里的空气很新鲜",
                "pinyin": "shan li de kong qi hen xin xian",
                "tone": "shān lǐ de kōng qì hěn xīn xiān",
                "pos": "sentence",
                "vi": "Không khí trên núi rất trong lành."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "shan li de kong qi hen xin xian",
            "tone": "shān lǐ de kōng qì hěn xīn xiān"
          },
          {
            "stage": "sentence",
            "vi": "Cuối tuần chúng tôi đi vào rừng.",
            "hanzi": "我们周末走进森林。",
            "words": [
              {
                "text": "我们周末走进森林",
                "pinyin": "wo men zhou mo zou jin sen lin",
                "tone": "wǒ men zhōu mò zǒu jìn sēn lín",
                "pos": "sentence",
                "vi": "Cuối tuần chúng tôi đi vào rừng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "wo men zhou mo zou jin sen lin",
            "tone": "wǒ men zhōu mò zǒu jìn sēn lín"
          },
          {
            "stage": "sentence",
            "vi": "Thiên nhiên cần được giữ cân bằng.",
            "hanzi": "自然需要保持平衡。",
            "words": [
              {
                "text": "自然需要保持平衡",
                "pinyin": "zi ran xu yao bao chi ping heng",
                "tone": "zì rán xū yào bǎo chí píng héng",
                "pos": "sentence",
                "vi": "Thiên nhiên cần được giữ cân bằng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l17",
            "pinyin": "zi ran xu yao bao chi ping heng",
            "tone": "zì rán xū yào bǎo chí píng héng"
          }
        ]
      },
      {
        "id": "hsk4-l18",
        "no": 18,
        "titleZh": "科技与世界",
        "titleVi": "Khoa học công nghệ và thế giới",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "khoa học công nghệ",
            "hanzi": "科技",
            "words": [
              {
                "text": "科技",
                "pinyin": "ke ji",
                "tone": "kē jì",
                "pos": "noun",
                "vi": "khoa học công nghệ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "ke ji",
            "tone": "kē jì"
          },
          {
            "stage": "word",
            "vi": "thế giới",
            "hanzi": "世界",
            "words": [
              {
                "text": "世界",
                "pinyin": "shi jie",
                "tone": "shì jiè",
                "pos": "noun",
                "vi": "thế giới"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "shi jie",
            "tone": "shì jiè"
          },
          {
            "stage": "word",
            "vi": "mạng Internet",
            "hanzi": "网络",
            "words": [
              {
                "text": "网络",
                "pinyin": "wang luo",
                "tone": "wǎng luò",
                "pos": "noun",
                "vi": "mạng Internet"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "wang luo",
            "tone": "wǎng luò"
          },
          {
            "stage": "word",
            "vi": "điện thoại",
            "hanzi": "手机",
            "words": [
              {
                "text": "手机",
                "pinyin": "shou ji",
                "tone": "shǒu jī",
                "pos": "noun",
                "vi": "điện thoại"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "shou ji",
            "tone": "shǒu jī"
          },
          {
            "stage": "word",
            "vi": "thông tin",
            "hanzi": "信息",
            "words": [
              {
                "text": "信息",
                "pinyin": "xin xi",
                "tone": "xìn xī",
                "pos": "noun",
                "vi": "thông tin"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "xin xi",
            "tone": "xìn xī"
          },
          {
            "stage": "word",
            "vi": "tiện lợi",
            "hanzi": "方便",
            "words": [
              {
                "text": "方便",
                "pinyin": "fang bian",
                "tone": "fāng biàn",
                "pos": "adj",
                "vi": "tiện lợi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "fang bian",
            "tone": "fāng biàn"
          },
          {
            "stage": "word",
            "vi": "ảnh hưởng",
            "hanzi": "影响",
            "words": [
              {
                "text": "影响",
                "pinyin": "ying xiang",
                "tone": "yǐng xiǎng",
                "pos": "verb",
                "vi": "ảnh hưởng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "ying xiang",
            "tone": "yǐng xiǎng"
          },
          {
            "stage": "word",
            "vi": "tương lai",
            "hanzi": "未来",
            "words": [
              {
                "text": "未来",
                "pinyin": "wei lai",
                "tone": "wèi lái",
                "pos": "noun",
                "vi": "tương lai"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "wei lai",
            "tone": "wèi lái"
          },
          {
            "stage": "phrase",
            "vi": "phát triển công nghệ",
            "hanzi": "发展科技",
            "words": [
              {
                "text": "发展科技",
                "pinyin": "fa zhan ke ji",
                "tone": "fā zhǎn kē jì",
                "pos": "phrase",
                "vi": "phát triển công nghệ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "fa zhan ke ji",
            "tone": "fā zhǎn kē jì"
          },
          {
            "stage": "phrase",
            "vi": "kết nối thế giới",
            "hanzi": "连接世界",
            "words": [
              {
                "text": "连接世界",
                "pinyin": "lian jie shi jie",
                "tone": "lián jiē shì jiè",
                "pos": "phrase",
                "vi": "kết nối thế giới"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "lian jie shi jie",
            "tone": "lián jiē shì jiè"
          },
          {
            "stage": "phrase",
            "vi": "sử dụng mạng",
            "hanzi": "使用网络",
            "words": [
              {
                "text": "使用网络",
                "pinyin": "shi yong wang luo",
                "tone": "shǐ yòng wǎng luò",
                "pos": "phrase",
                "vi": "sử dụng mạng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "shi yong wang luo",
            "tone": "shǐ yòng wǎng luò"
          },
          {
            "stage": "phrase",
            "vi": "điện thoại thông minh",
            "hanzi": "智能手机",
            "words": [
              {
                "text": "智能手机",
                "pinyin": "zhi neng shou ji",
                "tone": "zhì néng shǒu jī",
                "pos": "phrase",
                "vi": "điện thoại thông minh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "zhi neng shou ji",
            "tone": "zhì néng shǒu jī"
          },
          {
            "stage": "phrase",
            "vi": "thu nhận thông tin",
            "hanzi": "获得信息",
            "words": [
              {
                "text": "获得信息",
                "pinyin": "huo de xin xi",
                "tone": "huò dé xìn xī",
                "pos": "phrase",
                "vi": "thu nhận thông tin"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "huo de xin xi",
            "tone": "huò dé xìn xī"
          },
          {
            "stage": "phrase",
            "vi": "cuộc sống tiện lợi",
            "hanzi": "生活方便",
            "words": [
              {
                "text": "生活方便",
                "pinyin": "sheng huo fang bian",
                "tone": "shēng huó fāng biàn",
                "pos": "phrase",
                "vi": "cuộc sống tiện lợi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "sheng huo fang bian",
            "tone": "shēng huó fāng biàn"
          },
          {
            "stage": "phrase",
            "vi": "ảnh hưởng cuộc sống",
            "hanzi": "影响生活",
            "words": [
              {
                "text": "影响生活",
                "pinyin": "ying xiang sheng huo",
                "tone": "yǐng xiǎng shēng huó",
                "pos": "phrase",
                "vi": "ảnh hưởng cuộc sống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "ying xiang sheng huo",
            "tone": "yǐng xiǎng shēng huó"
          },
          {
            "stage": "phrase",
            "vi": "thế giới tương lai",
            "hanzi": "未来世界",
            "words": [
              {
                "text": "未来世界",
                "pinyin": "wei lai shi jie",
                "tone": "wèi lái shì jiè",
                "pos": "phrase",
                "vi": "thế giới tương lai"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "wei lai shi jie",
            "tone": "wèi lái shì jiè"
          },
          {
            "stage": "sentence",
            "vi": "Công nghệ đã thay đổi thế giới.",
            "hanzi": "科技改变了世界。",
            "words": [
              {
                "text": "科技改变了世界",
                "pinyin": "ke ji gai bian le shi jie",
                "tone": "kē jì gǎi biàn le shì jiè",
                "pos": "sentence",
                "vi": "Công nghệ đã thay đổi thế giới."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "ke ji gai bian le shi jie",
            "tone": "kē jì gǎi biàn le shì jiè"
          },
          {
            "stage": "sentence",
            "vi": "Internet kết nối thế giới.",
            "hanzi": "互联网连接世界。",
            "words": [
              {
                "text": "互联网连接世界",
                "pinyin": "hu lian wang lian jie shi jie",
                "tone": "hù lián wǎng lián jiē shì jiè",
                "pos": "sentence",
                "vi": "Internet kết nối thế giới."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "hu lian wang lian jie shi jie",
            "tone": "hù lián wǎng lián jiē shì jiè"
          },
          {
            "stage": "sentence",
            "vi": "Học sinh thường sử dụng Internet.",
            "hanzi": "学生常常使用网络。",
            "words": [
              {
                "text": "学生常常使用网络",
                "pinyin": "xue sheng chang chang shi yong wang luo",
                "tone": "xué shēng cháng cháng shǐ yòng wǎng luò",
                "pos": "sentence",
                "vi": "Học sinh thường sử dụng Internet."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "xue sheng chang chang shi yong wang luo",
            "tone": "xué shēng cháng cháng shǐ yòng wǎng luò"
          },
          {
            "stage": "sentence",
            "vi": "Điện thoại thông minh rất tiện lợi.",
            "hanzi": "智能手机很方便。",
            "words": [
              {
                "text": "智能手机很方便",
                "pinyin": "zhi neng shou ji hen fang bian",
                "tone": "zhì néng shǒu jī hěn fāng biàn",
                "pos": "sentence",
                "vi": "Điện thoại thông minh rất tiện lợi."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "zhi neng shou ji hen fang bian",
            "tone": "zhì néng shǒu jī hěn fāng biàn"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta thu nhận thông tin từ Internet.",
            "hanzi": "我们从网络获得信息。",
            "words": [
              {
                "text": "我们从网络获得信息",
                "pinyin": "wo men cong wang luo huo de xin xi",
                "tone": "wǒ men cóng wǎng luò huò dé xìn xī",
                "pos": "sentence",
                "vi": "Chúng ta thu nhận thông tin từ Internet."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "wo men cong wang luo huo de xin xi",
            "tone": "wǒ men cóng wǎng luò huò dé xìn xī"
          },
          {
            "stage": "sentence",
            "vi": "Công nghệ làm cuộc sống tiện lợi hơn.",
            "hanzi": "科技让生活更方便。",
            "words": [
              {
                "text": "科技让生活更方便",
                "pinyin": "ke ji rang sheng huo geng fang bian",
                "tone": "kē jì ràng shēng huó gèng fāng biàn",
                "pos": "sentence",
                "vi": "Công nghệ làm cuộc sống tiện lợi hơn."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "ke ji rang sheng huo geng fang bian",
            "tone": "kē jì ràng shēng huó gèng fāng biàn"
          },
          {
            "stage": "sentence",
            "vi": "Công nghệ ảnh hưởng đến cuộc sống của chúng ta.",
            "hanzi": "科技影响我们的生活。",
            "words": [
              {
                "text": "科技影响我们的生活",
                "pinyin": "ke ji ying xiang wo men de sheng huo",
                "tone": "kē jì yǐng xiǎng wǒ men de shēng huó",
                "pos": "sentence",
                "vi": "Công nghệ ảnh hưởng đến cuộc sống của chúng ta."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "ke ji ying xiang wo men de sheng huo",
            "tone": "kē jì yǐng xiǎng wǒ men de shēng huó"
          },
          {
            "stage": "sentence",
            "vi": "Thế giới tương lai sẽ thông minh hơn.",
            "hanzi": "未来世界会更智能。",
            "words": [
              {
                "text": "未来世界会更智能",
                "pinyin": "wei lai shi jie hui geng zhi neng",
                "tone": "wèi lái shì jiè huì gèng zhì néng",
                "pos": "sentence",
                "vi": "Thế giới tương lai sẽ thông minh hơn."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l18",
            "pinyin": "wei lai shi jie hui geng zhi neng",
            "tone": "wèi lái shì jiè huì gèng zhì néng"
          }
        ]
      },
      {
        "id": "hsk4-l19",
        "no": 19,
        "titleZh": "生活的味道",
        "titleVi": "Hương vị cuộc sống",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "hương vị",
            "hanzi": "味道",
            "words": [
              {
                "text": "味道",
                "pinyin": "wei dao",
                "tone": "wèi dào",
                "pos": "noun",
                "vi": "hương vị"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "wei dao",
            "tone": "wèi dào"
          },
          {
            "stage": "word",
            "vi": "trải nghiệm",
            "hanzi": "经历",
            "words": [
              {
                "text": "经历",
                "pinyin": "jing li",
                "tone": "jīng lì",
                "pos": "noun",
                "vi": "trải nghiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "jing li",
            "tone": "jīng lì"
          },
          {
            "stage": "word",
            "vi": "kỷ niệm",
            "hanzi": "回忆",
            "words": [
              {
                "text": "回忆",
                "pinyin": "hui yi",
                "tone": "huí yì",
                "pos": "noun",
                "vi": "kỷ niệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "hui yi",
            "tone": "huí yì"
          },
          {
            "stage": "word",
            "vi": "cảm động",
            "hanzi": "感动",
            "words": [
              {
                "text": "感动",
                "pinyin": "gan dong",
                "tone": "gǎn dòng",
                "pos": "verb",
                "vi": "cảm động"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "gan dong",
            "tone": "gǎn dòng"
          },
          {
            "stage": "word",
            "vi": "trân trọng",
            "hanzi": "珍惜",
            "words": [
              {
                "text": "珍惜",
                "pinyin": "zhen xi",
                "tone": "zhēn xī",
                "pos": "verb",
                "vi": "trân trọng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "zhen xi",
            "tone": "zhēn xī"
          },
          {
            "stage": "word",
            "vi": "bình thường",
            "hanzi": "普通",
            "words": [
              {
                "text": "普通",
                "pinyin": "pu tong",
                "tone": "pǔ tōng",
                "pos": "adj",
                "vi": "bình thường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "pu tong",
            "tone": "pǔ tōng"
          },
          {
            "stage": "word",
            "vi": "ấm áp",
            "hanzi": "温暖",
            "words": [
              {
                "text": "温暖",
                "pinyin": "wen nuan",
                "tone": "wēn nuǎn",
                "pos": "adj",
                "vi": "ấm áp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "wen nuan",
            "tone": "wēn nuǎn"
          },
          {
            "stage": "word",
            "vi": "hạnh phúc",
            "hanzi": "幸福",
            "words": [
              {
                "text": "幸福",
                "pinyin": "xing fu",
                "tone": "xìng fú",
                "pos": "noun",
                "vi": "hạnh phúc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "xing fu",
            "tone": "xìng fú"
          },
          {
            "stage": "phrase",
            "vi": "hương vị cuộc sống",
            "hanzi": "生活的味道",
            "words": [
              {
                "text": "生活的味道",
                "pinyin": "sheng huo de wei dao",
                "tone": "shēng huó de wèi dào",
                "pos": "phrase",
                "vi": "hương vị cuộc sống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "sheng huo de wei dao",
            "tone": "shēng huó de wèi dào"
          },
          {
            "stage": "phrase",
            "vi": "trải nghiệm khó quên",
            "hanzi": "难忘经历",
            "words": [
              {
                "text": "难忘经历",
                "pinyin": "nan wang jing li",
                "tone": "nán wàng jīng lì",
                "pos": "phrase",
                "vi": "trải nghiệm khó quên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "nan wang jing li",
            "tone": "nán wàng jīng lì"
          },
          {
            "stage": "phrase",
            "vi": "kỷ niệm đẹp",
            "hanzi": "美好回忆",
            "words": [
              {
                "text": "美好回忆",
                "pinyin": "mei hao hui yi",
                "tone": "měi hǎo huí yì",
                "pos": "phrase",
                "vi": "kỷ niệm đẹp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "mei hao hui yi",
            "tone": "měi hǎo huí yì"
          },
          {
            "stage": "phrase",
            "vi": "làm người ta cảm động",
            "hanzi": "让人感动",
            "words": [
              {
                "text": "让人感动",
                "pinyin": "rang ren gan dong",
                "tone": "ràng rén gǎn dòng",
                "pos": "phrase",
                "vi": "làm người ta cảm động"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "rang ren gan dong",
            "tone": "ràng rén gǎn dòng"
          },
          {
            "stage": "phrase",
            "vi": "trân trọng hiện tại",
            "hanzi": "珍惜现在",
            "words": [
              {
                "text": "珍惜现在",
                "pinyin": "zhen xi xian zai",
                "tone": "zhēn xī xiàn zài",
                "pos": "phrase",
                "vi": "trân trọng hiện tại"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "zhen xi xian zai",
            "tone": "zhēn xī xiàn zài"
          },
          {
            "stage": "phrase",
            "vi": "ngày bình thường",
            "hanzi": "普通日子",
            "words": [
              {
                "text": "普通日子",
                "pinyin": "pu tong ri zi",
                "tone": "pǔ tōng rì zi",
                "pos": "phrase",
                "vi": "ngày bình thường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "pu tong ri zi",
            "tone": "pǔ tōng rì zi"
          },
          {
            "stage": "phrase",
            "vi": "cảm thấy ấm áp",
            "hanzi": "感到温暖",
            "words": [
              {
                "text": "感到温暖",
                "pinyin": "gan dao wen nuan",
                "tone": "gǎn dào wēn nuǎn",
                "pos": "phrase",
                "vi": "cảm thấy ấm áp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "gan dao wen nuan",
            "tone": "gǎn dào wēn nuǎn"
          },
          {
            "stage": "phrase",
            "vi": "cảm thấy hạnh phúc",
            "hanzi": "感到幸福",
            "words": [
              {
                "text": "感到幸福",
                "pinyin": "gan dao xing fu",
                "tone": "gǎn dào xìng fú",
                "pos": "phrase",
                "vi": "cảm thấy hạnh phúc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "gan dao xing fu",
            "tone": "gǎn dào xìng fú"
          },
          {
            "stage": "sentence",
            "vi": "Mỗi người đều có hương vị cuộc sống riêng.",
            "hanzi": "每个人都有生活的味道。",
            "words": [
              {
                "text": "每个人都有生活的味道",
                "pinyin": "mei ge ren dou you sheng huo de wei dao",
                "tone": "měi gè rén dōu yǒu shēng huó de wèi dào",
                "pos": "sentence",
                "vi": "Mỗi người đều có hương vị cuộc sống riêng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "mei ge ren dou you sheng huo de wei dao",
            "tone": "měi gè rén dōu yǒu shēng huó de wèi dào"
          },
          {
            "stage": "sentence",
            "vi": "Chuyến đi này là một trải nghiệm khó quên.",
            "hanzi": "这次旅行是难忘经历。",
            "words": [
              {
                "text": "这次旅行是难忘经历",
                "pinyin": "zhe ci lü xing shi nan wang jing li",
                "tone": "zhè cì lǚ xíng shì nán wàng jīng lì",
                "pos": "sentence",
                "vi": "Chuyến đi này là một trải nghiệm khó quên."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "zhe ci lü xing shi nan wang jing li",
            "tone": "zhè cì lǚ xíng shì nán wàng jīng lì"
          },
          {
            "stage": "sentence",
            "vi": "Ảnh cũ mang lại những kỷ niệm đẹp.",
            "hanzi": "老照片带来美好回忆。",
            "words": [
              {
                "text": "老照片带来美好回忆",
                "pinyin": "lao zhao pian dai lai mei hao hui yi",
                "tone": "lǎo zhào piàn dài lái měi hǎo huí yì",
                "pos": "sentence",
                "vi": "Ảnh cũ mang lại những kỷ niệm đẹp."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "lao zhao pian dai lai mei hao hui yi",
            "tone": "lǎo zhào piàn dài lái měi hǎo huí yì"
          },
          {
            "stage": "sentence",
            "vi": "Việc nhỏ này làm tôi cảm động.",
            "hanzi": "这件小事让我感动。",
            "words": [
              {
                "text": "这件小事让我感动",
                "pinyin": "zhe jian xiao shi rang wo gan dong",
                "tone": "zhè jiàn xiǎo shì ràng wǒ gǎn dòng",
                "pos": "sentence",
                "vi": "Việc nhỏ này làm tôi cảm động."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "zhe jian xiao shi rang wo gan dong",
            "tone": "zhè jiàn xiǎo shì ràng wǒ gǎn dòng"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần trân trọng hiện tại.",
            "hanzi": "我们要珍惜现在。",
            "words": [
              {
                "text": "我们要珍惜现在",
                "pinyin": "wo men yao zhen xi xian zai",
                "tone": "wǒ men yào zhēn xī xiàn zài",
                "pos": "sentence",
                "vi": "Chúng ta cần trân trọng hiện tại."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "wo men yao zhen xi xian zai",
            "tone": "wǒ men yào zhēn xī xiàn zài"
          },
          {
            "stage": "sentence",
            "vi": "Những ngày bình thường cũng rất quan trọng.",
            "hanzi": "普通日子也很重要。",
            "words": [
              {
                "text": "普通日子也很重要",
                "pinyin": "pu tong ri zi ye hen zhong yao",
                "tone": "pǔ tōng rì zi yě hěn zhòng yào",
                "pos": "sentence",
                "vi": "Những ngày bình thường cũng rất quan trọng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "pu tong ri zi ye hen zhong yao",
            "tone": "pǔ tōng rì zi yě hěn zhòng yào"
          },
          {
            "stage": "sentence",
            "vi": "Lời nói của bạn làm tôi thấy ấm áp.",
            "hanzi": "朋友的话让我温暖。",
            "words": [
              {
                "text": "朋友的话让我温暖",
                "pinyin": "peng you de hua rang wo wen nuan",
                "tone": "péng yǒu de huà ràng wǒ wēn nuǎn",
                "pos": "sentence",
                "vi": "Lời nói của bạn làm tôi thấy ấm áp."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "peng you de hua rang wo wen nuan",
            "tone": "péng yǒu de huà ràng wǒ wēn nuǎn"
          },
          {
            "stage": "sentence",
            "vi": "Cả nhà ở bên nhau rất hạnh phúc.",
            "hanzi": "一家人在一起很幸福。",
            "words": [
              {
                "text": "一家人在一起很幸福",
                "pinyin": "yi jia ren zai yi qi hen xing fu",
                "tone": "yì jiā rén zài yì qǐ hěn xìng fú",
                "pos": "sentence",
                "vi": "Cả nhà ở bên nhau rất hạnh phúc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l19",
            "pinyin": "yi jia ren zai yi qi hen xing fu",
            "tone": "yì jiā rén zài yì qǐ hěn xìng fú"
          }
        ]
      },
      {
        "id": "hsk4-l20",
        "no": 20,
        "titleZh": "路上的风景",
        "titleVi": "Phong cảnh trên đường",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "trên đường",
            "hanzi": "路上",
            "words": [
              {
                "text": "路上",
                "pinyin": "lu shang",
                "tone": "lù shang",
                "pos": "noun",
                "vi": "trên đường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "lu shang",
            "tone": "lù shang"
          },
          {
            "stage": "word",
            "vi": "phong cảnh",
            "hanzi": "风景",
            "words": [
              {
                "text": "风景",
                "pinyin": "feng jing",
                "tone": "fēng jǐng",
                "pos": "noun",
                "vi": "phong cảnh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "feng jing",
            "tone": "fēng jǐng"
          },
          {
            "stage": "word",
            "vi": "du lịch",
            "hanzi": "旅行",
            "words": [
              {
                "text": "旅行",
                "pinyin": "lü xing",
                "tone": "lǚ xíng",
                "pos": "verb",
                "vi": "du lịch"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "lü xing",
            "tone": "lǚ xíng"
          },
          {
            "stage": "word",
            "vi": "phương hướng",
            "hanzi": "方向",
            "words": [
              {
                "text": "方向",
                "pinyin": "fang xiang",
                "tone": "fāng xiàng",
                "pos": "noun",
                "vi": "phương hướng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "fang xiang",
            "tone": "fāng xiàng"
          },
          {
            "stage": "word",
            "vi": "xuất phát",
            "hanzi": "出发",
            "words": [
              {
                "text": "出发",
                "pinyin": "chu fa",
                "tone": "chū fā",
                "pos": "verb",
                "vi": "xuất phát"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "chu fa",
            "tone": "chū fā"
          },
          {
            "stage": "word",
            "vi": "đến nơi",
            "hanzi": "到达",
            "words": [
              {
                "text": "到达",
                "pinyin": "dao da",
                "tone": "dào dá",
                "pos": "verb",
                "vi": "đến nơi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "dao da",
            "tone": "dào dá"
          },
          {
            "stage": "word",
            "vi": "đi qua",
            "hanzi": "经过",
            "words": [
              {
                "text": "经过",
                "pinyin": "jing guo",
                "tone": "jīng guò",
                "pos": "verb",
                "vi": "đi qua"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "jing guo",
            "tone": "jīng guò"
          },
          {
            "stage": "word",
            "vi": "tâm trạng",
            "hanzi": "心情",
            "words": [
              {
                "text": "心情",
                "pinyin": "xin qing",
                "tone": "xīn qíng",
                "pos": "noun",
                "vi": "tâm trạng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "xin qing",
            "tone": "xīn qíng"
          },
          {
            "stage": "phrase",
            "vi": "trên đường",
            "hanzi": "在路上",
            "words": [
              {
                "text": "在路上",
                "pinyin": "zai lu shang",
                "tone": "zài lù shang",
                "pos": "phrase",
                "vi": "trên đường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "zai lu shang",
            "tone": "zài lù shang"
          },
          {
            "stage": "phrase",
            "vi": "ngắm phong cảnh",
            "hanzi": "欣赏风景",
            "words": [
              {
                "text": "欣赏风景",
                "pinyin": "xin shang feng jing",
                "tone": "xīn shǎng fēng jǐng",
                "pos": "phrase",
                "vi": "ngắm phong cảnh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "xin shang feng jing",
            "tone": "xīn shǎng fēng jǐng"
          },
          {
            "stage": "phrase",
            "vi": "du lịch một mình",
            "hanzi": "独自旅行",
            "words": [
              {
                "text": "独自旅行",
                "pinyin": "du zi lü xing",
                "tone": "dú zì lǚ xíng",
                "pos": "phrase",
                "vi": "du lịch một mình"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "du zi lü xing",
            "tone": "dú zì lǚ xíng"
          },
          {
            "stage": "phrase",
            "vi": "nhìn rõ phương hướng",
            "hanzi": "看清方向",
            "words": [
              {
                "text": "看清方向",
                "pinyin": "kan qing fang xiang",
                "tone": "kàn qīng fāng xiàng",
                "pos": "phrase",
                "vi": "nhìn rõ phương hướng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "kan qing fang xiang",
            "tone": "kàn qīng fāng xiàng"
          },
          {
            "stage": "phrase",
            "vi": "chuẩn bị xuất phát",
            "hanzi": "准备出发",
            "words": [
              {
                "text": "准备出发",
                "pinyin": "zhun bei chu fa",
                "tone": "zhǔn bèi chū fā",
                "pos": "phrase",
                "vi": "chuẩn bị xuất phát"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "zhun bei chu fa",
            "tone": "zhǔn bèi chū fā"
          },
          {
            "stage": "phrase",
            "vi": "đến nơi an toàn",
            "hanzi": "安全到达",
            "words": [
              {
                "text": "安全到达",
                "pinyin": "an quan dao da",
                "tone": "ān quán dào dá",
                "pos": "phrase",
                "vi": "đến nơi an toàn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "an quan dao da",
            "tone": "ān quán dào dá"
          },
          {
            "stage": "phrase",
            "vi": "đi qua thị trấn nhỏ",
            "hanzi": "经过小城",
            "words": [
              {
                "text": "经过小城",
                "pinyin": "jing guo xiao cheng",
                "tone": "jīng guò xiǎo chéng",
                "pos": "phrase",
                "vi": "đi qua thị trấn nhỏ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "jing guo xiao cheng",
            "tone": "jīng guò xiǎo chéng"
          },
          {
            "stage": "phrase",
            "vi": "thư giãn tâm trạng",
            "hanzi": "放松心情",
            "words": [
              {
                "text": "放松心情",
                "pinyin": "fang song xin qing",
                "tone": "fàng sōng xīn qíng",
                "pos": "phrase",
                "vi": "thư giãn tâm trạng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "fang song xin qing",
            "tone": "fàng sōng xīn qíng"
          },
          {
            "stage": "sentence",
            "vi": "Tôi nhìn thấy phong cảnh trên đường.",
            "hanzi": "我在路上看见风景。",
            "words": [
              {
                "text": "我在路上看见风景",
                "pinyin": "wo zai lu shang kan jian feng jing",
                "tone": "wǒ zài lù shang kàn jiàn fēng jǐng",
                "pos": "sentence",
                "vi": "Tôi nhìn thấy phong cảnh trên đường."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "wo zai lu shang kan jian feng jing",
            "tone": "wǒ zài lù shang kàn jiàn fēng jǐng"
          },
          {
            "stage": "sentence",
            "vi": "Chúng tôi dừng xe để ngắm phong cảnh.",
            "hanzi": "我们停车欣赏风景。",
            "words": [
              {
                "text": "我们停车欣赏风景",
                "pinyin": "wo men ting che xin shang feng jing",
                "tone": "wǒ men tíng chē xīn shǎng fēng jǐng",
                "pos": "sentence",
                "vi": "Chúng tôi dừng xe để ngắm phong cảnh."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "wo men ting che xin shang feng jing",
            "tone": "wǒ men tíng chē xīn shǎng fēng jǐng"
          },
          {
            "stage": "sentence",
            "vi": "Cô ấy thích đi du lịch một mình.",
            "hanzi": "她喜欢独自旅行。",
            "words": [
              {
                "text": "她喜欢独自旅行",
                "pinyin": "ta xi huan du zi lü xing",
                "tone": "tā xǐ huan dú zì lǚ xíng",
                "pos": "sentence",
                "vi": "Cô ấy thích đi du lịch một mình."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "ta xi huan du zi lü xing",
            "tone": "tā xǐ huan dú zì lǚ xíng"
          },
          {
            "stage": "sentence",
            "vi": "Trước khi xuất phát cần nhìn rõ phương hướng.",
            "hanzi": "出发前要看清方向。",
            "words": [
              {
                "text": "出发前要看清方向",
                "pinyin": "chu fa qian yao kan qing fang xiang",
                "tone": "chū fā qián yào kàn qīng fāng xiàng",
                "pos": "sentence",
                "vi": "Trước khi xuất phát cần nhìn rõ phương hướng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "chu fa qian yao kan qing fang xiang",
            "tone": "chū fā qián yào kàn qīng fāng xiàng"
          },
          {
            "stage": "sentence",
            "vi": "Sáng mai chúng tôi xuất phát.",
            "hanzi": "我们明天早上出发。",
            "words": [
              {
                "text": "我们明天早上出发",
                "pinyin": "wo men ming tian zao shang chu fa",
                "tone": "wǒ men míng tiān zǎo shàng chū fā",
                "pos": "sentence",
                "vi": "Sáng mai chúng tôi xuất phát."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "wo men ming tian zao shang chu fa",
            "tone": "wǒ men míng tiān zǎo shàng chū fā"
          },
          {
            "stage": "sentence",
            "vi": "Tàu đến nơi đúng giờ.",
            "hanzi": "火车准时到达。",
            "words": [
              {
                "text": "火车准时到达",
                "pinyin": "huo che zhun shi dao da",
                "tone": "huǒ chē zhǔn shí dào dá",
                "pos": "sentence",
                "vi": "Tàu đến nơi đúng giờ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "huo che zhun shi dao da",
            "tone": "huǒ chē zhǔn shí dào dá"
          },
          {
            "stage": "sentence",
            "vi": "Xe đi qua một thị trấn nhỏ.",
            "hanzi": "汽车经过一座小城。",
            "words": [
              {
                "text": "汽车经过一座小城",
                "pinyin": "qi che jing guo yi zuo xiao cheng",
                "tone": "qì chē jīng guò yí zuò xiǎo chéng",
                "pos": "sentence",
                "vi": "Xe đi qua một thị trấn nhỏ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "qi che jing guo yi zuo xiao cheng",
            "tone": "qì chē jīng guò yí zuò xiǎo chéng"
          },
          {
            "stage": "sentence",
            "vi": "Du lịch có thể giúp thư giãn tâm trạng.",
            "hanzi": "旅行能放松心情。",
            "words": [
              {
                "text": "旅行能放松心情",
                "pinyin": "lü xing neng fang song xin qing",
                "tone": "lǚ xíng néng fàng sōng xīn qíng",
                "pos": "sentence",
                "vi": "Du lịch có thể giúp thư giãn tâm trạng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk4-l20",
            "pinyin": "lü xing neng fang song xin qing",
            "tone": "lǚ xíng néng fàng sōng xīn qíng"
          }
        ]
      }
    ],
    "HSK5": [
      {
        "id": "hsk5-l13",
        "no": 13,
        "titleZh": "锯掉生活的筐底",
        "titleVi": "Cưa bỏ đáy chiếc giỏ của cuộc sống",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "cuộc sống",
            "hanzi": "生活",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
          },
          {
            "stage": "word",
            "vi": "gánh nặng",
            "hanzi": "负担",
            "words": [
              {
                "text": "负担",
                "pinyin": "fu dan",
                "tone": "fù dān",
                "pos": "noun",
                "vi": "gánh nặng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "fu dan",
            "tone": "fù dān"
          },
          {
            "stage": "word",
            "vi": "lựa chọn",
            "hanzi": "选择",
            "words": [
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "xuan ze",
            "tone": "xuǎn zé"
          },
          {
            "stage": "word",
            "vi": "từ bỏ",
            "hanzi": "放弃",
            "words": [
              {
                "text": "放弃",
                "pinyin": "fang qi",
                "tone": "fàng qì",
                "pos": "verb",
                "vi": "từ bỏ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "fang qi",
            "tone": "fàng qì"
          },
          {
            "stage": "word",
            "vi": "nhẹ nhõm",
            "hanzi": "轻松",
            "words": [
              {
                "text": "轻松",
                "pinyin": "qing song",
                "tone": "qīng sōng",
                "pos": "adj",
                "vi": "nhẹ nhõm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "qing song",
            "tone": "qīng sōng"
          },
          {
            "stage": "word",
            "vi": "áp lực",
            "hanzi": "压力",
            "words": [
              {
                "text": "压力",
                "pinyin": "ya li",
                "tone": "yā lì",
                "pos": "noun",
                "vi": "áp lực"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "ya li",
            "tone": "yā lì"
          },
          {
            "stage": "word",
            "vi": "kiên trì",
            "hanzi": "坚持",
            "words": [
              {
                "text": "坚持",
                "pinyin": "jian chi",
                "tone": "jiān chí",
                "pos": "verb",
                "vi": "kiên trì"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "jian chi",
            "tone": "jiān chí"
          },
          {
            "stage": "word",
            "vi": "trí tuệ",
            "hanzi": "智慧",
            "words": [
              {
                "text": "智慧",
                "pinyin": "zhi hui",
                "tone": "zhì huì",
                "pos": "noun",
                "vi": "trí tuệ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "zhi hui",
            "tone": "zhì huì"
          },
          {
            "stage": "phrase",
            "vi": "đối mặt cuộc sống",
            "hanzi": "面对生活",
            "words": [
              {
                "text": "面对生活",
                "pinyin": "mian dui sheng huo",
                "tone": "miàn duì shēng huó",
                "pos": "phrase",
                "vi": "đối mặt cuộc sống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "mian dui sheng huo",
            "tone": "miàn duì shēng huó"
          },
          {
            "stage": "phrase",
            "vi": "buông gánh nặng",
            "hanzi": "放下负担",
            "words": [
              {
                "text": "放下负担",
                "pinyin": "fang xia fu dan",
                "tone": "fàng xià fù dān",
                "pos": "phrase",
                "vi": "buông gánh nặng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "fang xia fu dan",
            "tone": "fàng xià fù dān"
          },
          {
            "stage": "phrase",
            "vi": "đưa ra lựa chọn",
            "hanzi": "做出选择",
            "words": [
              {
                "text": "做出选择",
                "pinyin": "zuo chu xuan ze",
                "tone": "zuò chū xuǎn zé",
                "pos": "phrase",
                "vi": "đưa ra lựa chọn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "zuo chu xuan ze",
            "tone": "zuò chū xuǎn zé"
          },
          {
            "stage": "phrase",
            "vi": "từ bỏ điều dư thừa",
            "hanzi": "放弃多余的东西",
            "words": [
              {
                "text": "放弃多余的东西",
                "pinyin": "fang qi duo yu de dong xi",
                "tone": "fàng qì duō yú de dōng xī",
                "pos": "phrase",
                "vi": "từ bỏ điều dư thừa"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "fang qi duo yu de dong xi",
            "tone": "fàng qì duō yú de dōng xī"
          },
          {
            "stage": "phrase",
            "vi": "cảm thấy nhẹ nhõm",
            "hanzi": "感到轻松",
            "words": [
              {
                "text": "感到轻松",
                "pinyin": "gan dao qing song",
                "tone": "gǎn dào qīng sōng",
                "pos": "phrase",
                "vi": "cảm thấy nhẹ nhõm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "gan dao qing song",
            "tone": "gǎn dào qīng sōng"
          },
          {
            "stage": "phrase",
            "vi": "giảm áp lực",
            "hanzi": "减少压力",
            "words": [
              {
                "text": "减少压力",
                "pinyin": "jian shao ya li",
                "tone": "jiǎn shǎo yā lì",
                "pos": "phrase",
                "vi": "giảm áp lực"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "jian shao ya li",
            "tone": "jiǎn shǎo yā lì"
          },
          {
            "stage": "phrase",
            "vi": "kiên trì đến cùng",
            "hanzi": "坚持到底",
            "words": [
              {
                "text": "坚持到底",
                "pinyin": "jian chi dao di",
                "tone": "jiān chí dào dǐ",
                "pos": "phrase",
                "vi": "kiên trì đến cùng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "jian chi dao di",
            "tone": "jiān chí dào dǐ"
          },
          {
            "stage": "phrase",
            "vi": "trí tuệ sống",
            "hanzi": "生活智慧",
            "words": [
              {
                "text": "生活智慧",
                "pinyin": "sheng huo zhi hui",
                "tone": "shēng huó zhì huì",
                "pos": "phrase",
                "vi": "trí tuệ sống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "sheng huo zhi hui",
            "tone": "shēng huó zhì huì"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần dũng cảm đối mặt với cuộc sống.",
            "hanzi": "我们要勇敢面对生活。",
            "words": [
              {
                "text": "我们要勇敢面对生活",
                "pinyin": "wo men yao yong gan mian dui sheng huo",
                "tone": "wǒ men yào yǒng gǎn miàn duì shēng huó",
                "pos": "sentence",
                "vi": "Chúng ta cần dũng cảm đối mặt với cuộc sống."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "wo men yao yong gan mian dui sheng huo",
            "tone": "wǒ men yào yǒng gǎn miàn duì shēng huó"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy đã học cách buông gánh nặng.",
            "hanzi": "他学会了放下负担。",
            "words": [
              {
                "text": "他学会了放下负担",
                "pinyin": "ta xue hui le fang xia fu dan",
                "tone": "tā xué huì le fàng xià fù dān",
                "pos": "sentence",
                "vi": "Anh ấy đã học cách buông gánh nặng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "ta xue hui le fang xia fu dan",
            "tone": "tā xué huì le fàng xià fù dān"
          },
          {
            "stage": "sentence",
            "vi": "Lúc quan trọng cần đưa ra lựa chọn.",
            "hanzi": "关键时刻要做出选择。",
            "words": [
              {
                "text": "关键时刻要做出选择",
                "pinyin": "guan jian shi ke yao zuo chu xuan ze",
                "tone": "guān jiàn shí kè yào zuò chū xuǎn zé",
                "pos": "sentence",
                "vi": "Lúc quan trọng cần đưa ra lựa chọn."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "guan jian shi ke yao zuo chu xuan ze",
            "tone": "guān jiàn shí kè yào zuò chū xuǎn zé"
          },
          {
            "stage": "sentence",
            "vi": "Đôi khi từ bỏ cũng là trí tuệ.",
            "hanzi": "有时放弃也是智慧。",
            "words": [
              {
                "text": "有时放弃也是智慧",
                "pinyin": "you shi fang qi ye shi zhi hui",
                "tone": "yǒu shí fàng qì yě shì zhì huì",
                "pos": "sentence",
                "vi": "Đôi khi từ bỏ cũng là trí tuệ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "you shi fang qi ye shi zhi hui",
            "tone": "yǒu shí fàng qì yě shì zhì huì"
          },
          {
            "stage": "sentence",
            "vi": "Sau khi buông xuống tôi thấy nhẹ nhõm.",
            "hanzi": "放下以后我感到轻松。",
            "words": [
              {
                "text": "放下以后我感到轻松",
                "pinyin": "fang xia yi hou wo gan dao qing song",
                "tone": "fàng xià yǐ hòu wǒ gǎn dào qīng sōng",
                "pos": "sentence",
                "vi": "Sau khi buông xuống tôi thấy nhẹ nhõm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "fang xia yi hou wo gan dao qing song",
            "tone": "fàng xià yǐ hòu wǒ gǎn dào qīng sōng"
          },
          {
            "stage": "sentence",
            "vi": "Vận động có thể giảm áp lực.",
            "hanzi": "运动能减少压力。",
            "words": [
              {
                "text": "运动能减少压力",
                "pinyin": "yun dong neng jian shao ya li",
                "tone": "yùn dòng néng jiǎn shǎo yā lì",
                "pos": "sentence",
                "vi": "Vận động có thể giảm áp lực."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "yun dong neng jian shao ya li",
            "tone": "yùn dòng néng jiǎn shǎo yā lì"
          },
          {
            "stage": "sentence",
            "vi": "Việc thật sự quan trọng thì cần kiên trì.",
            "hanzi": "真正重要的事要坚持。",
            "words": [
              {
                "text": "真正重要的事要坚持",
                "pinyin": "zhen zheng zhong yao de shi yao jian chi",
                "tone": "zhēn zhèng zhòng yào de shì yào jiān chí",
                "pos": "sentence",
                "vi": "Việc thật sự quan trọng thì cần kiên trì."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "zhen zheng zhong yao de shi yao jian chi",
            "tone": "zhēn zhèng zhòng yào de shì yào jiān chí"
          },
          {
            "stage": "sentence",
            "vi": "Câu chuyện này đầy trí tuệ sống.",
            "hanzi": "这个故事充满生活智慧。",
            "words": [
              {
                "text": "这个故事充满生活智慧",
                "pinyin": "zhe ge gu shi chong man sheng huo zhi hui",
                "tone": "zhè ge gù shì chōng mǎn shēng huó zhì huì",
                "pos": "sentence",
                "vi": "Câu chuyện này đầy trí tuệ sống."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l13",
            "pinyin": "zhe ge gu shi chong man sheng huo zhi hui",
            "tone": "zhè ge gù shì chōng mǎn shēng huó zhì huì"
          }
        ]
      },
      {
        "id": "hsk5-l14",
        "no": 14,
        "titleZh": "北京的四合院",
        "titleVi": "Tứ hợp viện ở Bắc Kinh",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "nhà tứ hợp viện",
            "hanzi": "四合院",
            "words": [
              {
                "text": "四合院",
                "pinyin": "si he yuan",
                "tone": "sì hé yuàn",
                "pos": "noun",
                "vi": "nhà tứ hợp viện"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "si he yuan",
            "tone": "sì hé yuàn"
          },
          {
            "stage": "word",
            "vi": "ngõ nhỏ",
            "hanzi": "胡同",
            "words": [
              {
                "text": "胡同",
                "pinyin": "hu tong",
                "tone": "hú tòng",
                "pos": "noun",
                "vi": "ngõ nhỏ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "hu tong",
            "tone": "hú tòng"
          },
          {
            "stage": "word",
            "vi": "truyền thống",
            "hanzi": "传统",
            "words": [
              {
                "text": "传统",
                "pinyin": "chuan tong",
                "tone": "chuán tǒng",
                "pos": "noun",
                "vi": "truyền thống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
          {
            "stage": "word",
            "vi": "sân nhà",
            "hanzi": "院子",
            "words": [
              {
                "text": "院子",
                "pinyin": "yuan zi",
                "tone": "yuàn zi",
                "pos": "noun",
                "vi": "sân nhà"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "yuan zi",
            "tone": "yuàn zi"
          },
          {
            "stage": "word",
            "vi": "hàng xóm",
            "hanzi": "邻居",
            "words": [
              {
                "text": "邻居",
                "pinyin": "lin ju",
                "tone": "lín jū",
                "pos": "noun",
                "vi": "hàng xóm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "lin ju",
            "tone": "lín jū"
          },
          {
            "stage": "word",
            "vi": "bảo tồn",
            "hanzi": "保护",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo tồn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "word",
            "vi": "kiến trúc",
            "hanzi": "建筑",
            "words": [
              {
                "text": "建筑",
                "pinyin": "jian zhu",
                "tone": "jiàn zhù",
                "pos": "noun",
                "vi": "kiến trúc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "jian zhu",
            "tone": "jiàn zhù"
          },
          {
            "stage": "word",
            "vi": "ký ức",
            "hanzi": "记忆",
            "words": [
              {
                "text": "记忆",
                "pinyin": "ji yi",
                "tone": "jì yì",
                "pos": "noun",
                "vi": "ký ức"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "ji yi",
            "tone": "jì yì"
          },
          {
            "stage": "phrase",
            "vi": "nhà tứ hợp viện Bắc Kinh",
            "hanzi": "北京四合院",
            "words": [
              {
                "text": "北京四合院",
                "pinyin": "bei jing si he yuan",
                "tone": "běi jīng sì hé yuàn",
                "pos": "phrase",
                "vi": "nhà tứ hợp viện Bắc Kinh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "bei jing si he yuan",
            "tone": "běi jīng sì hé yuàn"
          },
          {
            "stage": "phrase",
            "vi": "ngõ nhỏ cổ",
            "hanzi": "老胡同",
            "words": [
              {
                "text": "老胡同",
                "pinyin": "lao hu tong",
                "tone": "lǎo hú tòng",
                "pos": "phrase",
                "vi": "ngõ nhỏ cổ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "lao hu tong",
            "tone": "lǎo hú tòng"
          },
          {
            "stage": "phrase",
            "vi": "kiến trúc truyền thống",
            "hanzi": "传统建筑",
            "words": [
              {
                "text": "传统建筑",
                "pinyin": "chuan tong jian zhu",
                "tone": "chuán tǒng jiàn zhù",
                "pos": "phrase",
                "vi": "kiến trúc truyền thống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "chuan tong jian zhu",
            "tone": "chuán tǒng jiàn zhù"
          },
          {
            "stage": "phrase",
            "vi": "sân rộng rãi",
            "hanzi": "宽敞的院子",
            "words": [
              {
                "text": "宽敞的院子",
                "pinyin": "kuan chang de yuan zi",
                "tone": "kuān chǎng de yuàn zi",
                "pos": "phrase",
                "vi": "sân rộng rãi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "kuan chang de yuan zi",
            "tone": "kuān chǎng de yuàn zi"
          },
          {
            "stage": "phrase",
            "vi": "hàng xóm cũ",
            "hanzi": "老邻居",
            "words": [
              {
                "text": "老邻居",
                "pinyin": "lao lin ju",
                "tone": "lǎo lín jū",
                "pos": "phrase",
                "vi": "hàng xóm cũ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "lao lin ju",
            "tone": "lǎo lín jū"
          },
          {
            "stage": "phrase",
            "vi": "bảo tồn nhà cổ",
            "hanzi": "保护老房子",
            "words": [
              {
                "text": "保护老房子",
                "pinyin": "bao hu lao fang zi",
                "tone": "bǎo hù lǎo fáng zi",
                "pos": "phrase",
                "vi": "bảo tồn nhà cổ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "bao hu lao fang zi",
            "tone": "bǎo hù lǎo fáng zi"
          },
          {
            "stage": "phrase",
            "vi": "kiến trúc cổ",
            "hanzi": "古老建筑",
            "words": [
              {
                "text": "古老建筑",
                "pinyin": "gu lao jian zhu",
                "tone": "gǔ lǎo jiàn zhù",
                "pos": "phrase",
                "vi": "kiến trúc cổ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "gu lao jian zhu",
            "tone": "gǔ lǎo jiàn zhù"
          },
          {
            "stage": "phrase",
            "vi": "ký ức đô thị",
            "hanzi": "城市记忆",
            "words": [
              {
                "text": "城市记忆",
                "pinyin": "cheng shi ji yi",
                "tone": "chéng shì jì yì",
                "pos": "phrase",
                "vi": "ký ức đô thị"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "cheng shi ji yi",
            "tone": "chéng shì jì yì"
          },
          {
            "stage": "sentence",
            "vi": "Nhà tứ hợp viện Bắc Kinh rất đặc sắc.",
            "hanzi": "北京四合院很有特色。",
            "words": [
              {
                "text": "北京四合院很有特色",
                "pinyin": "bei jing si he yuan hen you te se",
                "tone": "běi jīng sì hé yuàn hěn yǒu tè sè",
                "pos": "sentence",
                "vi": "Nhà tứ hợp viện Bắc Kinh rất đặc sắc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "bei jing si he yuan hen you te se",
            "tone": "běi jīng sì hé yuàn hěn yǒu tè sè"
          },
          {
            "stage": "sentence",
            "vi": "Trong ngõ cổ rất yên tĩnh.",
            "hanzi": "老胡同里很安静。",
            "words": [
              {
                "text": "老胡同里很安静",
                "pinyin": "lao hu tong li hen an jing",
                "tone": "lǎo hú tòng lǐ hěn ān jìng",
                "pos": "sentence",
                "vi": "Trong ngõ cổ rất yên tĩnh."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "lao hu tong li hen an jing",
            "tone": "lǎo hú tòng lǐ hěn ān jìng"
          },
          {
            "stage": "sentence",
            "vi": "Tứ hợp viện là kiến trúc truyền thống.",
            "hanzi": "四合院是传统建筑。",
            "words": [
              {
                "text": "四合院是传统建筑",
                "pinyin": "si he yuan shi chuan tong jian zhu",
                "tone": "sì hé yuàn shì chuán tǒng jiàn zhù",
                "pos": "sentence",
                "vi": "Tứ hợp viện là kiến trúc truyền thống."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "si he yuan shi chuan tong jian zhu",
            "tone": "sì hé yuàn shì chuán tǒng jiàn zhù"
          },
          {
            "stage": "sentence",
            "vi": "Trong sân có trồng hoa.",
            "hanzi": "院子里种着花。",
            "words": [
              {
                "text": "院子里种着花",
                "pinyin": "yuan zi li zhong zhe hua",
                "tone": "yuàn zi lǐ zhǒng zhe huā",
                "pos": "sentence",
                "vi": "Trong sân có trồng hoa."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "yuan zi li zhong zhe hua",
            "tone": "yuàn zi lǐ zhǒng zhe huā"
          },
          {
            "stage": "sentence",
            "vi": "Những hàng xóm cũ thường trò chuyện.",
            "hanzi": "老邻居常常聊天。",
            "words": [
              {
                "text": "老邻居常常聊天",
                "pinyin": "lao lin ju chang chang liao tian",
                "tone": "lǎo lín jū cháng cháng liáo tiān",
                "pos": "sentence",
                "vi": "Những hàng xóm cũ thường trò chuyện."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "lao lin ju chang chang liao tian",
            "tone": "lǎo lín jū cháng cháng liáo tiān"
          },
          {
            "stage": "sentence",
            "vi": "Thành phố cần bảo tồn nhà cổ.",
            "hanzi": "城市需要保护老房子。",
            "words": [
              {
                "text": "城市需要保护老房子",
                "pinyin": "cheng shi xu yao bao hu lao fang zi",
                "tone": "chéng shì xū yào bǎo hù lǎo fáng zi",
                "pos": "sentence",
                "vi": "Thành phố cần bảo tồn nhà cổ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "cheng shi xu yao bao hu lao fang zi",
            "tone": "chéng shì xū yào bǎo hù lǎo fáng zi"
          },
          {
            "stage": "sentence",
            "vi": "Loại kiến trúc này có nhiều lịch sử.",
            "hanzi": "这种建筑很有历史。",
            "words": [
              {
                "text": "这种建筑很有历史",
                "pinyin": "zhe zhong jian zhu hen you li shi",
                "tone": "zhè zhǒng jiàn zhù hěn yǒu lì shǐ",
                "pos": "sentence",
                "vi": "Loại kiến trúc này có nhiều lịch sử."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "zhe zhong jian zhu hen you li shi",
            "tone": "zhè zhǒng jiàn zhù hěn yǒu lì shǐ"
          },
          {
            "stage": "sentence",
            "vi": "Tứ hợp viện lưu giữ ký ức đô thị.",
            "hanzi": "四合院保存着城市记忆。",
            "words": [
              {
                "text": "四合院保存着城市记忆",
                "pinyin": "si he yuan bao cun zhe cheng shi ji yi",
                "tone": "sì hé yuàn bǎo cún zhe chéng shì jì yì",
                "pos": "sentence",
                "vi": "Tứ hợp viện lưu giữ ký ức đô thị."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l14",
            "pinyin": "si he yuan bao cun zhe cheng shi ji yi",
            "tone": "sì hé yuàn bǎo cún zhe chéng shì jì yì"
          }
        ]
      },
      {
        "id": "hsk5-l15",
        "no": 15,
        "titleZh": "纸上谈兵",
        "titleVi": "Bàn binh trên giấy",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "bàn binh trên giấy",
            "hanzi": "纸上谈兵",
            "words": [
              {
                "text": "纸上谈兵",
                "pinyin": "zhi shang tan bing",
                "tone": "zhǐ shàng tán bīng",
                "pos": "idiom",
                "vi": "bàn binh trên giấy"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "zhi shang tan bing",
            "tone": "zhǐ shàng tán bīng"
          },
          {
            "stage": "word",
            "vi": "kinh nghiệm",
            "hanzi": "经验",
            "words": [
              {
                "text": "经验",
                "pinyin": "jing yan",
                "tone": "jīng yàn",
                "pos": "noun",
                "vi": "kinh nghiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
          },
          {
            "stage": "word",
            "vi": "thực tế",
            "hanzi": "实际",
            "words": [
              {
                "text": "实际",
                "pinyin": "shi ji",
                "tone": "shí jì",
                "pos": "noun",
                "vi": "thực tế"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "shi ji",
            "tone": "shí jì"
          },
          {
            "stage": "word",
            "vi": "thất bại",
            "hanzi": "失败",
            "words": [
              {
                "text": "失败",
                "pinyin": "shi bai",
                "tone": "shī bài",
                "pos": "verb",
                "vi": "thất bại"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "shi bai",
            "tone": "shī bài"
          },
          {
            "stage": "word",
            "vi": "chỉ huy",
            "hanzi": "指挥",
            "words": [
              {
                "text": "指挥",
                "pinyin": "zhi hui",
                "tone": "zhǐ huī",
                "pos": "verb",
                "vi": "chỉ huy"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "zhi hui",
            "tone": "zhǐ huī"
          },
          {
            "stage": "word",
            "vi": "phán đoán",
            "hanzi": "判断",
            "words": [
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "bài học",
            "hanzi": "教训",
            "words": [
              {
                "text": "教训",
                "pinyin": "jiao xun",
                "tone": "jiào xùn",
                "pos": "noun",
                "vi": "bài học"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "jiao xun",
            "tone": "jiào xùn"
          },
          {
            "stage": "word",
            "vi": "lý thuyết",
            "hanzi": "理论",
            "words": [
              {
                "text": "理论",
                "pinyin": "li lun",
                "tone": "lǐ lùn",
                "pos": "noun",
                "vi": "lý thuyết"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "li lun",
            "tone": "lǐ lùn"
          },
          {
            "stage": "phrase",
            "vi": "tránh nói suông",
            "hanzi": "避免纸上谈兵",
            "words": [
              {
                "text": "避免纸上谈兵",
                "pinyin": "bi mian zhi shang tan bing",
                "tone": "bì miǎn zhǐ shàng tán bīng",
                "pos": "phrase",
                "vi": "tránh nói suông"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "bi mian zhi shang tan bing",
            "tone": "bì miǎn zhǐ shàng tán bīng"
          },
          {
            "stage": "phrase",
            "vi": "tích lũy kinh nghiệm",
            "hanzi": "积累经验",
            "words": [
              {
                "text": "积累经验",
                "pinyin": "ji lei jing yan",
                "tone": "jī lěi jīng yàn",
                "pos": "phrase",
                "vi": "tích lũy kinh nghiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "ji lei jing yan",
            "tone": "jī lěi jīng yàn"
          },
          {
            "stage": "phrase",
            "vi": "kết hợp thực tế",
            "hanzi": "结合实际",
            "words": [
              {
                "text": "结合实际",
                "pinyin": "jie he shi ji",
                "tone": "jié hé shí jì",
                "pos": "phrase",
                "vi": "kết hợp thực tế"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "jie he shi ji",
            "tone": "jié hé shí jì"
          },
          {
            "stage": "phrase",
            "vi": "trải qua thất bại",
            "hanzi": "经历失败",
            "words": [
              {
                "text": "经历失败",
                "pinyin": "jing li shi bai",
                "tone": "jīng lì shī bài",
                "pos": "phrase",
                "vi": "trải qua thất bại"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "jing li shi bai",
            "tone": "jīng lì shī bài"
          },
          {
            "stage": "phrase",
            "vi": "chỉ huy quân đội",
            "hanzi": "指挥军队",
            "words": [
              {
                "text": "指挥军队",
                "pinyin": "zhi hui jun dui",
                "tone": "zhǐ huī jūn duì",
                "pos": "phrase",
                "vi": "chỉ huy quân đội"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "zhi hui jun dui",
            "tone": "zhǐ huī jūn duì"
          },
          {
            "stage": "phrase",
            "vi": "phán đoán đúng",
            "hanzi": "正确判断",
            "words": [
              {
                "text": "正确判断",
                "pinyin": "zheng que pan duan",
                "tone": "zhèng què pàn duàn",
                "pos": "phrase",
                "vi": "phán đoán đúng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "zheng que pan duan",
            "tone": "zhèng què pàn duàn"
          },
          {
            "stage": "phrase",
            "vi": "rút ra bài học",
            "hanzi": "吸取教训",
            "words": [
              {
                "text": "吸取教训",
                "pinyin": "xi qu jiao xun",
                "tone": "xī qǔ jiào xùn",
                "pos": "phrase",
                "vi": "rút ra bài học"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "xi qu jiao xun",
            "tone": "xī qǔ jiào xùn"
          },
          {
            "stage": "phrase",
            "vi": "chỉ hiểu lý thuyết",
            "hanzi": "只懂理论",
            "words": [
              {
                "text": "只懂理论",
                "pinyin": "zhi dong li lun",
                "tone": "zhī dǒng lǐ lùn",
                "pos": "phrase",
                "vi": "chỉ hiểu lý thuyết"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "zhi dong li lun",
            "tone": "zhī dǒng lǐ lùn"
          },
          {
            "stage": "sentence",
            "vi": "Làm việc không thể chỉ nói suông.",
            "hanzi": "做事不能纸上谈兵。",
            "words": [
              {
                "text": "做事不能纸上谈兵",
                "pinyin": "zuo shi bu neng zhi shang tan bing",
                "tone": "zuò shì bù néng zhǐ shàng tán bīng",
                "pos": "sentence",
                "vi": "Làm việc không thể chỉ nói suông."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "zuo shi bu neng zhi shang tan bing",
            "tone": "zuò shì bù néng zhǐ shàng tán bīng"
          },
          {
            "stage": "sentence",
            "vi": "Thực hành giúp tích lũy kinh nghiệm.",
            "hanzi": "实践能积累经验。",
            "words": [
              {
                "text": "实践能积累经验",
                "pinyin": "shi jian neng ji lei jing yan",
                "tone": "shí jiàn néng jī lěi jīng yàn",
                "pos": "sentence",
                "vi": "Thực hành giúp tích lũy kinh nghiệm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "shi jian neng ji lei jing yan",
            "tone": "shí jiàn néng jī lěi jīng yàn"
          },
          {
            "stage": "sentence",
            "vi": "Kế hoạch cần kết hợp thực tế.",
            "hanzi": "计划要结合实际。",
            "words": [
              {
                "text": "计划要结合实际",
                "pinyin": "ji hua yao jie he shi ji",
                "tone": "jì huà yào jié hé shí jì",
                "pos": "sentence",
                "vi": "Kế hoạch cần kết hợp thực tế."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "ji hua yao jie he shi ji",
            "tone": "jì huà yào jié hé shí jì"
          },
          {
            "stage": "sentence",
            "vi": "Sau thất bại cần tổng kết.",
            "hanzi": "失败以后要总结。",
            "words": [
              {
                "text": "失败以后要总结",
                "pinyin": "shi bai yi hou yao zong jie",
                "tone": "shī bài yǐ hòu yào zǒng jié",
                "pos": "sentence",
                "vi": "Sau thất bại cần tổng kết."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "shi bai yi hou yao zong jie",
            "tone": "shī bài yǐ hòu yào zǒng jié"
          },
          {
            "stage": "sentence",
            "vi": "Ông ấy không có năng lực chỉ huy quân đội.",
            "hanzi": "他没有能力指挥军队。",
            "words": [
              {
                "text": "他没有能力指挥军队",
                "pinyin": "ta mei you neng li zhi hui jun dui",
                "tone": "tā méi yǒu néng lì zhǐ huī jūn duì",
                "pos": "sentence",
                "vi": "Ông ấy không có năng lực chỉ huy quân đội."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "ta mei you neng li zhi hui jun dui",
            "tone": "tā méi yǒu néng lì zhǐ huī jūn duì"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần học cách phán đoán đúng.",
            "hanzi": "我们要学会正确判断。",
            "words": [
              {
                "text": "我们要学会正确判断",
                "pinyin": "wo men yao xue hui zheng que pan duan",
                "tone": "wǒ men yào xué huì zhèng què pàn duàn",
                "pos": "sentence",
                "vi": "Chúng ta cần học cách phán đoán đúng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "wo men yao xue hui zheng que pan duan",
            "tone": "wǒ men yào xué huì zhèng què pàn duàn"
          },
          {
            "stage": "sentence",
            "vi": "Việc này đã cho anh ấy một bài học.",
            "hanzi": "这件事给了他教训。",
            "words": [
              {
                "text": "这件事给了他教训",
                "pinyin": "zhe jian shi gei le ta jiao xun",
                "tone": "zhè jiàn shì gěi le tā jiào xùn",
                "pos": "sentence",
                "vi": "Việc này đã cho anh ấy một bài học."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "zhe jian shi gei le ta jiao xun",
            "tone": "zhè jiàn shì gěi le tā jiào xùn"
          },
          {
            "stage": "sentence",
            "vi": "Chỉ hiểu lý thuyết là chưa đủ.",
            "hanzi": "只懂理论是不够的。",
            "words": [
              {
                "text": "只懂理论是不够的",
                "pinyin": "zhi dong li lun shi bu gou de",
                "tone": "zhī dǒng lǐ lùn shì bú gòu de",
                "pos": "sentence",
                "vi": "Chỉ hiểu lý thuyết là chưa đủ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l15",
            "pinyin": "zhi dong li lun shi bu gou de",
            "tone": "zhī dǒng lǐ lùn shì bú gòu de"
          }
        ]
      },
      {
        "id": "hsk5-l16",
        "no": 16,
        "titleZh": "体重与节食",
        "titleVi": "Cân nặng và việc ăn kiêng",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "cân nặng",
            "hanzi": "体重",
            "words": [
              {
                "text": "体重",
                "pinyin": "ti zhong",
                "tone": "tǐ zhòng",
                "pos": "noun",
                "vi": "cân nặng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "ti zhong",
            "tone": "tǐ zhòng"
          },
          {
            "stage": "word",
            "vi": "ăn kiêng",
            "hanzi": "节食",
            "words": [
              {
                "text": "节食",
                "pinyin": "jie shi",
                "tone": "jié shí",
                "pos": "verb",
                "vi": "ăn kiêng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "jie shi",
            "tone": "jié shí"
          },
          {
            "stage": "word",
            "vi": "giảm cân",
            "hanzi": "减肥",
            "words": [
              {
                "text": "减肥",
                "pinyin": "jian fei",
                "tone": "jiǎn féi",
                "pos": "verb",
                "vi": "giảm cân"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "jian fei",
            "tone": "jiǎn féi"
          },
          {
            "stage": "word",
            "vi": "sức khỏe",
            "hanzi": "健康",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "noun",
                "vi": "sức khỏe"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "jian kang",
            "tone": "jiàn kāng"
          },
          {
            "stage": "word",
            "vi": "dinh dưỡng",
            "hanzi": "营养",
            "words": [
              {
                "text": "营养",
                "pinyin": "ying yang",
                "tone": "yíng yǎng",
                "pos": "noun",
                "vi": "dinh dưỡng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "ying yang",
            "tone": "yíng yǎng"
          },
          {
            "stage": "word",
            "vi": "kiên trì",
            "hanzi": "坚持",
            "words": [
              {
                "text": "坚持",
                "pinyin": "jian chi",
                "tone": "jiān chí",
                "pos": "verb",
                "vi": "kiên trì"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "jian chi",
            "tone": "jiān chí"
          },
          {
            "stage": "word",
            "vi": "phương pháp",
            "hanzi": "方法",
            "words": [
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "fang fa",
            "tone": "fāng fǎ"
          },
          {
            "stage": "word",
            "vi": "hiệu quả",
            "hanzi": "效果",
            "words": [
              {
                "text": "效果",
                "pinyin": "xiao guo",
                "tone": "xiào guǒ",
                "pos": "noun",
                "vi": "hiệu quả"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "xiao guo",
            "tone": "xiào guǒ"
          },
          {
            "stage": "phrase",
            "vi": "kiểm soát cân nặng",
            "hanzi": "控制体重",
            "words": [
              {
                "text": "控制体重",
                "pinyin": "kong zhi ti zhong",
                "tone": "kòng zhì tǐ zhòng",
                "pos": "phrase",
                "vi": "kiểm soát cân nặng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "kong zhi ti zhong",
            "tone": "kòng zhì tǐ zhòng"
          },
          {
            "stage": "phrase",
            "vi": "ăn kiêng hợp lý",
            "hanzi": "合理节食",
            "words": [
              {
                "text": "合理节食",
                "pinyin": "he li jie shi",
                "tone": "hé lǐ jié shí",
                "pos": "phrase",
                "vi": "ăn kiêng hợp lý"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "he li jie shi",
            "tone": "hé lǐ jié shí"
          },
          {
            "stage": "phrase",
            "vi": "giảm cân khoa học",
            "hanzi": "科学减肥",
            "words": [
              {
                "text": "科学减肥",
                "pinyin": "ke xue jian fei",
                "tone": "kē xué jiǎn féi",
                "pos": "phrase",
                "vi": "giảm cân khoa học"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "ke xue jian fei",
            "tone": "kē xué jiǎn féi"
          },
          {
            "stage": "phrase",
            "vi": "giữ sức khỏe",
            "hanzi": "保持健康",
            "words": [
              {
                "text": "保持健康",
                "pinyin": "bao chi jian kang",
                "tone": "bǎo chí jiàn kāng",
                "pos": "phrase",
                "vi": "giữ sức khỏe"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "bao chi jian kang",
            "tone": "bǎo chí jiàn kāng"
          },
          {
            "stage": "phrase",
            "vi": "dinh dưỡng cân bằng",
            "hanzi": "营养均衡",
            "words": [
              {
                "text": "营养均衡",
                "pinyin": "ying yang jun heng",
                "tone": "yíng yǎng jūn héng",
                "pos": "phrase",
                "vi": "dinh dưỡng cân bằng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "ying yang jun heng",
            "tone": "yíng yǎng jūn héng"
          },
          {
            "stage": "phrase",
            "vi": "kiên trì vận động",
            "hanzi": "坚持运动",
            "words": [
              {
                "text": "坚持运动",
                "pinyin": "jian chi yun dong",
                "tone": "jiān chí yùn dòng",
                "pos": "phrase",
                "vi": "kiên trì vận động"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "jian chi yun dong",
            "tone": "jiān chí yùn dòng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp đúng",
            "hanzi": "正确方法",
            "words": [
              {
                "text": "正确方法",
                "pinyin": "zheng que fang fa",
                "tone": "zhèng què fāng fǎ",
                "pos": "phrase",
                "vi": "phương pháp đúng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "zheng que fang fa",
            "tone": "zhèng què fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "hiệu quả rõ rệt",
            "hanzi": "效果明显",
            "words": [
              {
                "text": "效果明显",
                "pinyin": "xiao guo ming xian",
                "tone": "xiào guǒ míng xiǎn",
                "pos": "phrase",
                "vi": "hiệu quả rõ rệt"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "xiao guo ming xian",
            "tone": "xiào guǒ míng xiǎn"
          },
          {
            "stage": "sentence",
            "vi": "Cô ấy đang kiểm soát cân nặng.",
            "hanzi": "她正在控制体重。",
            "words": [
              {
                "text": "她正在控制体重",
                "pinyin": "ta zheng zai kong zhi ti zhong",
                "tone": "tā zhèng zài kòng zhì tǐ zhòng",
                "pos": "sentence",
                "vi": "Cô ấy đang kiểm soát cân nặng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "ta zheng zai kong zhi ti zhong",
            "tone": "tā zhèng zài kòng zhì tǐ zhòng"
          },
          {
            "stage": "sentence",
            "vi": "Ăn kiêng cũng phải chú ý sức khỏe.",
            "hanzi": "节食也要注意健康。",
            "words": [
              {
                "text": "节食也要注意健康",
                "pinyin": "jie shi ye yao zhu yi jian kang",
                "tone": "jié shí yě yào zhù yì jiàn kāng",
                "pos": "sentence",
                "vi": "Ăn kiêng cũng phải chú ý sức khỏe."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "jie shi ye yao zhu yi jian kang",
            "tone": "jié shí yě yào zhù yì jiàn kāng"
          },
          {
            "stage": "sentence",
            "vi": "Giảm cân khoa học không được quá vội.",
            "hanzi": "科学减肥不能太急。",
            "words": [
              {
                "text": "科学减肥不能太急",
                "pinyin": "ke xue jian fei bu neng tai ji",
                "tone": "kē xué jiǎn féi bù néng tài jí",
                "pos": "sentence",
                "vi": "Giảm cân khoa học không được quá vội."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "ke xue jian fei bu neng tai ji",
            "tone": "kē xué jiǎn féi bù néng tài jí"
          },
          {
            "stage": "sentence",
            "vi": "Vận động giúp giữ sức khỏe.",
            "hanzi": "运动能保持健康。",
            "words": [
              {
                "text": "运动能保持健康",
                "pinyin": "yun dong neng bao chi jian kang",
                "tone": "yùn dòng néng bǎo chí jiàn kāng",
                "pos": "sentence",
                "vi": "Vận động giúp giữ sức khỏe."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "yun dong neng bao chi jian kang",
            "tone": "yùn dòng néng bǎo chí jiàn kāng"
          },
          {
            "stage": "sentence",
            "vi": "Ăn uống hằng ngày cần cân bằng dinh dưỡng.",
            "hanzi": "每天饮食要营养均衡。",
            "words": [
              {
                "text": "每天饮食要营养均衡",
                "pinyin": "mei tian yin shi yao ying yang jun heng",
                "tone": "měi tiān yǐn shí yào yíng yǎng jūn héng",
                "pos": "sentence",
                "vi": "Ăn uống hằng ngày cần cân bằng dinh dưỡng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "mei tian yin shi yao ying yang jun heng",
            "tone": "měi tiān yǐn shí yào yíng yǎng jūn héng"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy kiên trì vận động ba tháng.",
            "hanzi": "他坚持运动三个月。",
            "words": [
              {
                "text": "他坚持运动三个月",
                "pinyin": "ta jian chi yun dong san ge yue",
                "tone": "tā jiān chí yùn dòng sān gè yuè",
                "pos": "sentence",
                "vi": "Anh ấy kiên trì vận động ba tháng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "ta jian chi yun dong san ge yue",
            "tone": "tā jiān chí yùn dòng sān gè yuè"
          },
          {
            "stage": "sentence",
            "vi": "Giảm cân cần tìm phương pháp đúng.",
            "hanzi": "减肥要找正确方法。",
            "words": [
              {
                "text": "减肥要找正确方法",
                "pinyin": "jian fei yao zhao zheng que fang fa",
                "tone": "jiǎn féi yào zhǎo zhèng què fāng fǎ",
                "pos": "sentence",
                "vi": "Giảm cân cần tìm phương pháp đúng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "jian fei yao zhao zheng que fang fa",
            "tone": "jiǎn féi yào zhǎo zhèng què fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Phương pháp này có hiệu quả rõ rệt.",
            "hanzi": "这种方法效果明显。",
            "words": [
              {
                "text": "这种方法效果明显",
                "pinyin": "zhe zhong fang fa xiao guo ming xian",
                "tone": "zhè zhǒng fāng fǎ xiào guǒ míng xiǎn",
                "pos": "sentence",
                "vi": "Phương pháp này có hiệu quả rõ rệt."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l16",
            "pinyin": "zhe zhong fang fa xiao guo ming xian",
            "tone": "zhè zhǒng fāng fǎ xiào guǒ míng xiǎn"
          }
        ]
      },
      {
        "id": "hsk5-l17",
        "no": 17,
        "titleZh": "在最美好的时刻离开",
        "titleVi": "Rời đi vào khoảnh khắc đẹp nhất",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "khoảnh khắc",
            "hanzi": "时刻",
            "words": [
              {
                "text": "时刻",
                "pinyin": "shi ke",
                "tone": "shí kè",
                "pos": "noun",
                "vi": "khoảnh khắc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "shi ke",
            "tone": "shí kè"
          },
          {
            "stage": "word",
            "vi": "rời đi",
            "hanzi": "离开",
            "words": [
              {
                "text": "离开",
                "pinyin": "li kai",
                "tone": "lí kāi",
                "pos": "verb",
                "vi": "rời đi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "li kai",
            "tone": "lí kāi"
          },
          {
            "stage": "word",
            "vi": "sân khấu",
            "hanzi": "舞台",
            "words": [
              {
                "text": "舞台",
                "pinyin": "wu tai",
                "tone": "wǔ tái",
                "pos": "noun",
                "vi": "sân khấu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "wu tai",
            "tone": "wǔ tái"
          },
          {
            "stage": "word",
            "vi": "tiếng vỗ tay",
            "hanzi": "掌声",
            "words": [
              {
                "text": "掌声",
                "pinyin": "zhang sheng",
                "tone": "zhǎng shēng",
                "pos": "noun",
                "vi": "tiếng vỗ tay"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "zhang sheng",
            "tone": "zhǎng shēng"
          },
          {
            "stage": "word",
            "vi": "tạm biệt",
            "hanzi": "告别",
            "words": [
              {
                "text": "告别",
                "pinyin": "gao bie",
                "tone": "gào bié",
                "pos": "verb",
                "vi": "tạm biệt"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "gao bie",
            "tone": "gào bié"
          },
          {
            "stage": "word",
            "vi": "lựa chọn",
            "hanzi": "选择",
            "words": [
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "xuan ze",
            "tone": "xuǎn zé"
          },
          {
            "stage": "word",
            "vi": "tôn trọng",
            "hanzi": "尊重",
            "words": [
              {
                "text": "尊重",
                "pinyin": "zun zhong",
                "tone": "zūn zhòng",
                "pos": "verb",
                "vi": "tôn trọng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "zun zhong",
            "tone": "zūn zhòng"
          },
          {
            "stage": "word",
            "vi": "hồi ức",
            "hanzi": "回忆",
            "words": [
              {
                "text": "回忆",
                "pinyin": "hui yi",
                "tone": "huí yì",
                "pos": "noun",
                "vi": "hồi ức"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "hui yi",
            "tone": "huí yì"
          },
          {
            "stage": "phrase",
            "vi": "khoảnh khắc đẹp",
            "hanzi": "美好时刻",
            "words": [
              {
                "text": "美好时刻",
                "pinyin": "mei hao shi ke",
                "tone": "měi hǎo shí kè",
                "pos": "phrase",
                "vi": "khoảnh khắc đẹp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "mei hao shi ke",
            "tone": "měi hǎo shí kè"
          },
          {
            "stage": "phrase",
            "vi": "rời đi đúng lúc",
            "hanzi": "及时离开",
            "words": [
              {
                "text": "及时离开",
                "pinyin": "ji shi li kai",
                "tone": "jí shí lí kāi",
                "pos": "phrase",
                "vi": "rời đi đúng lúc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "ji shi li kai",
            "tone": "jí shí lí kāi"
          },
          {
            "stage": "phrase",
            "vi": "rời sân khấu",
            "hanzi": "离开舞台",
            "words": [
              {
                "text": "离开舞台",
                "pinyin": "li kai wu tai",
                "tone": "lí kāi wǔ tái",
                "pos": "phrase",
                "vi": "rời sân khấu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "li kai wu tai",
            "tone": "lí kāi wǔ tái"
          },
          {
            "stage": "phrase",
            "vi": "tiếng vỗ tay nhiệt liệt",
            "hanzi": "热烈掌声",
            "words": [
              {
                "text": "热烈掌声",
                "pinyin": "re lie zhang sheng",
                "tone": "rè liè zhǎng shēng",
                "pos": "phrase",
                "vi": "tiếng vỗ tay nhiệt liệt"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "re lie zhang sheng",
            "tone": "rè liè zhǎng shēng"
          },
          {
            "stage": "phrase",
            "vi": "chính thức tạm biệt",
            "hanzi": "正式告别",
            "words": [
              {
                "text": "正式告别",
                "pinyin": "zheng shi gao bie",
                "tone": "zhèng shì gào bié",
                "pos": "phrase",
                "vi": "chính thức tạm biệt"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "zheng shi gao bie",
            "tone": "zhèng shì gào bié"
          },
          {
            "stage": "phrase",
            "vi": "lựa chọn dũng cảm",
            "hanzi": "勇敢选择",
            "words": [
              {
                "text": "勇敢选择",
                "pinyin": "yong gan xuan ze",
                "tone": "yǒng gǎn xuǎn zé",
                "pos": "phrase",
                "vi": "lựa chọn dũng cảm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "yong gan xuan ze",
            "tone": "yǒng gǎn xuǎn zé"
          },
          {
            "stage": "phrase",
            "vi": "tôn trọng quyết định",
            "hanzi": "尊重决定",
            "words": [
              {
                "text": "尊重决定",
                "pinyin": "zun zhong jue ding",
                "tone": "zūn zhòng jué dìng",
                "pos": "phrase",
                "vi": "tôn trọng quyết định"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "zun zhong jue ding",
            "tone": "zūn zhòng jué dìng"
          },
          {
            "stage": "phrase",
            "vi": "để lại hồi ức",
            "hanzi": "留下回忆",
            "words": [
              {
                "text": "留下回忆",
                "pinyin": "liu xia hui yi",
                "tone": "liú xià huí yì",
                "pos": "phrase",
                "vi": "để lại hồi ức"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "liu xia hui yi",
            "tone": "liú xià huí yì"
          },
          {
            "stage": "sentence",
            "vi": "Cô ấy ghi nhớ khoảnh khắc đẹp đó.",
            "hanzi": "她记住了那个美好时刻。",
            "words": [
              {
                "text": "她记住了那个美好时刻",
                "pinyin": "ta ji zhu le na ge mei hao shi ke",
                "tone": "tā jì zhù le nà ge měi hǎo shí kè",
                "pos": "sentence",
                "vi": "Cô ấy ghi nhớ khoảnh khắc đẹp đó."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "ta ji zhu le na ge mei hao shi ke",
            "tone": "tā jì zhù le nà ge měi hǎo shí kè"
          },
          {
            "stage": "sentence",
            "vi": "Đôi khi cần rời đi đúng lúc.",
            "hanzi": "有时需要及时离开。",
            "words": [
              {
                "text": "有时需要及时离开",
                "pinyin": "you shi xu yao ji shi li kai",
                "tone": "yǒu shí xū yào jí shí lí kāi",
                "pos": "sentence",
                "vi": "Đôi khi cần rời đi đúng lúc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "you shi xu yao ji shi li kai",
            "tone": "yǒu shí xū yào jí shí lí kāi"
          },
          {
            "stage": "sentence",
            "vi": "Diễn viên quyết định rời sân khấu.",
            "hanzi": "演员决定离开舞台。",
            "words": [
              {
                "text": "演员决定离开舞台",
                "pinyin": "yan yuan jue ding li kai wu tai",
                "tone": "yǎn yuán jué dìng lí kāi wǔ tái",
                "pos": "sentence",
                "vi": "Diễn viên quyết định rời sân khấu."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "yan yuan jue ding li kai wu tai",
            "tone": "yǎn yuán jué dìng lí kāi wǔ tái"
          },
          {
            "stage": "sentence",
            "vi": "Khán giả đã dành tiếng vỗ tay nhiệt liệt.",
            "hanzi": "观众给了热烈掌声。",
            "words": [
              {
                "text": "观众给了热烈掌声",
                "pinyin": "guan zhong gei le re lie zhang sheng",
                "tone": "guān zhòng gěi le rè liè zhǎng shēng",
                "pos": "sentence",
                "vi": "Khán giả đã dành tiếng vỗ tay nhiệt liệt."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "guan zhong gei le re lie zhang sheng",
            "tone": "guān zhòng gěi le rè liè zhǎng shēng"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy chính thức tạm biệt bạn bè.",
            "hanzi": "他向朋友正式告别。",
            "words": [
              {
                "text": "他向朋友正式告别",
                "pinyin": "ta xiang peng you zheng shi gao bie",
                "tone": "tā xiàng péng yǒu zhèng shì gào bié",
                "pos": "sentence",
                "vi": "Anh ấy chính thức tạm biệt bạn bè."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "ta xiang peng you zheng shi gao bie",
            "tone": "tā xiàng péng yǒu zhèng shì gào bié"
          },
          {
            "stage": "sentence",
            "vi": "Cô ấy đã đưa ra một lựa chọn dũng cảm.",
            "hanzi": "她做了一个勇敢选择。",
            "words": [
              {
                "text": "她做了一个勇敢选择",
                "pinyin": "ta zuo le yi ge yong gan xuan ze",
                "tone": "tā zuò le yí gè yǒng gǎn xuǎn zé",
                "pos": "sentence",
                "vi": "Cô ấy đã đưa ra một lựa chọn dũng cảm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "ta zuo le yi ge yong gan xuan ze",
            "tone": "tā zuò le yí gè yǒng gǎn xuǎn zé"
          },
          {
            "stage": "sentence",
            "vi": "Chúng tôi tôn trọng quyết định của anh ấy.",
            "hanzi": "我们尊重他的决定。",
            "words": [
              {
                "text": "我们尊重他的决定",
                "pinyin": "wo men zun zhong ta de jue ding",
                "tone": "wǒ men zūn zhòng tā de jué dìng",
                "pos": "sentence",
                "vi": "Chúng tôi tôn trọng quyết định của anh ấy."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "wo men zun zhong ta de jue ding",
            "tone": "wǒ men zūn zhòng tā de jué dìng"
          },
          {
            "stage": "sentence",
            "vi": "Khoảnh khắc đẹp để lại hồi ức.",
            "hanzi": "美好时刻留下回忆。",
            "words": [
              {
                "text": "美好时刻留下回忆",
                "pinyin": "mei hao shi ke liu xia hui yi",
                "tone": "měi hǎo shí kè liú xià huí yì",
                "pos": "sentence",
                "vi": "Khoảnh khắc đẹp để lại hồi ức."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l17",
            "pinyin": "mei hao shi ke liu xia hui yi",
            "tone": "měi hǎo shí kè liú xià huí yì"
          }
        ]
      },
      {
        "id": "hsk5-l18",
        "no": 18,
        "titleZh": "抽象艺术美不美",
        "titleVi": "Nghệ thuật trừu tượng có đẹp không",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "trừu tượng",
            "hanzi": "抽象",
            "words": [
              {
                "text": "抽象",
                "pinyin": "chou xiang",
                "tone": "chōu xiàng",
                "pos": "adj",
                "vi": "trừu tượng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "chou xiang",
            "tone": "chōu xiàng"
          },
          {
            "stage": "word",
            "vi": "nghệ thuật",
            "hanzi": "艺术",
            "words": [
              {
                "text": "艺术",
                "pinyin": "yi shu",
                "tone": "yì shù",
                "pos": "noun",
                "vi": "nghệ thuật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "yi shu",
            "tone": "yì shù"
          },
          {
            "stage": "word",
            "vi": "tác phẩm",
            "hanzi": "作品",
            "words": [
              {
                "text": "作品",
                "pinyin": "zuo pin",
                "tone": "zuò pǐn",
                "pos": "noun",
                "vi": "tác phẩm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "zuo pin",
            "tone": "zuò pǐn"
          },
          {
            "stage": "word",
            "vi": "triển lãm tranh",
            "hanzi": "画展",
            "words": [
              {
                "text": "画展",
                "pinyin": "hua zhan",
                "tone": "huà zhǎn",
                "pos": "noun",
                "vi": "triển lãm tranh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "hua zhan",
            "tone": "huà zhǎn"
          },
          {
            "stage": "word",
            "vi": "hiểu",
            "hanzi": "理解",
            "words": [
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "li jie",
            "tone": "lǐ jiě"
          },
          {
            "stage": "word",
            "vi": "cảm nhận",
            "hanzi": "感受",
            "words": [
              {
                "text": "感受",
                "pinyin": "gan shou",
                "tone": "gǎn shòu",
                "pos": "verb",
                "vi": "cảm nhận"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "gan shou",
            "tone": "gǎn shòu"
          },
          {
            "stage": "word",
            "vi": "tưởng tượng",
            "hanzi": "想象",
            "words": [
              {
                "text": "想象",
                "pinyin": "xiang xiang",
                "tone": "xiǎng xiàng",
                "pos": "verb",
                "vi": "tưởng tượng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "xiang xiang",
            "tone": "xiǎng xiàng"
          },
          {
            "stage": "word",
            "vi": "thẩm mỹ",
            "hanzi": "审美",
            "words": [
              {
                "text": "审美",
                "pinyin": "shen mei",
                "tone": "shěn měi",
                "pos": "noun",
                "vi": "thẩm mỹ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "shen mei",
            "tone": "shěn měi"
          },
          {
            "stage": "phrase",
            "vi": "tác phẩm trừu tượng",
            "hanzi": "抽象作品",
            "words": [
              {
                "text": "抽象作品",
                "pinyin": "chou xiang zuo pin",
                "tone": "chōu xiàng zuò pǐn",
                "pos": "phrase",
                "vi": "tác phẩm trừu tượng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "chou xiang zuo pin",
            "tone": "chōu xiàng zuò pǐn"
          },
          {
            "stage": "phrase",
            "vi": "thưởng thức nghệ thuật",
            "hanzi": "欣赏艺术",
            "words": [
              {
                "text": "欣赏艺术",
                "pinyin": "xin shang yi shu",
                "tone": "xīn shǎng yì shù",
                "pos": "phrase",
                "vi": "thưởng thức nghệ thuật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "xin shang yi shu",
            "tone": "xīn shǎng yì shù"
          },
          {
            "stage": "phrase",
            "vi": "tác phẩm nghệ thuật",
            "hanzi": "艺术作品",
            "words": [
              {
                "text": "艺术作品",
                "pinyin": "yi shu zuo pin",
                "tone": "yì shù zuò pǐn",
                "pos": "phrase",
                "vi": "tác phẩm nghệ thuật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "yi shu zuo pin",
            "tone": "yì shù zuò pǐn"
          },
          {
            "stage": "phrase",
            "vi": "tham quan triển lãm tranh",
            "hanzi": "参观画展",
            "words": [
              {
                "text": "参观画展",
                "pinyin": "can guan hua zhan",
                "tone": "cān guān huà zhǎn",
                "pos": "phrase",
                "vi": "tham quan triển lãm tranh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "can guan hua zhan",
            "tone": "cān guān huà zhǎn"
          },
          {
            "stage": "phrase",
            "vi": "hiểu tác phẩm",
            "hanzi": "理解作品",
            "words": [
              {
                "text": "理解作品",
                "pinyin": "li jie zuo pin",
                "tone": "lǐ jiě zuò pǐn",
                "pos": "phrase",
                "vi": "hiểu tác phẩm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "li jie zuo pin",
            "tone": "lǐ jiě zuò pǐn"
          },
          {
            "stage": "phrase",
            "vi": "cảm nhận cái đẹp",
            "hanzi": "感受美",
            "words": [
              {
                "text": "感受美",
                "pinyin": "gan shou mei",
                "tone": "gǎn shòu měi",
                "pos": "phrase",
                "vi": "cảm nhận cái đẹp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "gan shou mei",
            "tone": "gǎn shòu měi"
          },
          {
            "stage": "phrase",
            "vi": "phát huy tưởng tượng",
            "hanzi": "发挥想象",
            "words": [
              {
                "text": "发挥想象",
                "pinyin": "fa hui xiang xiang",
                "tone": "fā huī xiǎng xiàng",
                "pos": "phrase",
                "vi": "phát huy tưởng tượng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "fa hui xiang xiang",
            "tone": "fā huī xiǎng xiàng"
          },
          {
            "stage": "phrase",
            "vi": "năng lực thẩm mỹ",
            "hanzi": "审美能力",
            "words": [
              {
                "text": "审美能力",
                "pinyin": "shen mei neng li",
                "tone": "shěn měi néng lì",
                "pos": "phrase",
                "vi": "năng lực thẩm mỹ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "shen mei neng li",
            "tone": "shěn měi néng lì"
          },
          {
            "stage": "sentence",
            "vi": "Bức tranh này rất trừu tượng.",
            "hanzi": "这幅画很抽象。",
            "words": [
              {
                "text": "这幅画很抽象",
                "pinyin": "zhe fu hua hen chou xiang",
                "tone": "zhè fú huà hěn chōu xiàng",
                "pos": "sentence",
                "vi": "Bức tranh này rất trừu tượng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "zhe fu hua hen chou xiang",
            "tone": "zhè fú huà hěn chōu xiàng"
          },
          {
            "stage": "sentence",
            "vi": "Thưởng thức nghệ thuật cần kiên nhẫn.",
            "hanzi": "欣赏艺术需要耐心。",
            "words": [
              {
                "text": "欣赏艺术需要耐心",
                "pinyin": "xin shang yi shu xu yao nai xin",
                "tone": "xīn shǎng yì shù xū yào nài xīn",
                "pos": "sentence",
                "vi": "Thưởng thức nghệ thuật cần kiên nhẫn."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "xin shang yi shu xu yao nai xin",
            "tone": "xīn shǎng yì shù xū yào nài xīn"
          },
          {
            "stage": "sentence",
            "vi": "Tác phẩm này rất đặc biệt.",
            "hanzi": "这件作品很特别。",
            "words": [
              {
                "text": "这件作品很特别",
                "pinyin": "zhe jian zuo pin hen te bie",
                "tone": "zhè jiàn zuò pǐn hěn tè bié",
                "pos": "sentence",
                "vi": "Tác phẩm này rất đặc biệt."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "zhe jian zuo pin hen te bie",
            "tone": "zhè jiàn zuò pǐn hěn tè bié"
          },
          {
            "stage": "sentence",
            "vi": "Cuối tuần chúng tôi tham quan triển lãm tranh.",
            "hanzi": "周末我们参观画展。",
            "words": [
              {
                "text": "周末我们参观画展",
                "pinyin": "zhou mo wo men can guan hua zhan",
                "tone": "zhōu mò wǒ men cān guān huà zhǎn",
                "pos": "sentence",
                "vi": "Cuối tuần chúng tôi tham quan triển lãm tranh."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "zhou mo wo men can guan hua zhan",
            "tone": "zhōu mò wǒ men cān guān huà zhǎn"
          },
          {
            "stage": "sentence",
            "vi": "Tôi vẫn chưa thể hiểu tác phẩm này.",
            "hanzi": "我还不能理解这件作品。",
            "words": [
              {
                "text": "我还不能理解这件作品",
                "pinyin": "wo hai bu neng li jie zhe jian zuo pin",
                "tone": "wǒ hái bù néng lǐ jiě zhè jiàn zuò pǐn",
                "pos": "sentence",
                "vi": "Tôi vẫn chưa thể hiểu tác phẩm này."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "wo hai bu neng li jie zhe jian zuo pin",
            "tone": "wǒ hái bù néng lǐ jiě zhè jiàn zuò pǐn"
          },
          {
            "stage": "sentence",
            "vi": "Mỗi người đều có thể cảm nhận cái đẹp.",
            "hanzi": "每个人都能感受美。",
            "words": [
              {
                "text": "每个人都能感受美",
                "pinyin": "mei ge ren dou neng gan shou mei",
                "tone": "měi gè rén dōu néng gǎn shòu měi",
                "pos": "sentence",
                "vi": "Mỗi người đều có thể cảm nhận cái đẹp."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "mei ge ren dou neng gan shou mei",
            "tone": "měi gè rén dōu néng gǎn shòu měi"
          },
          {
            "stage": "sentence",
            "vi": "Tranh trừu tượng cần phát huy trí tưởng tượng.",
            "hanzi": "抽象画需要发挥想象。",
            "words": [
              {
                "text": "抽象画需要发挥想象",
                "pinyin": "chou xiang hua xu yao fa hui xiang xiang",
                "tone": "chōu xiàng huà xū yào fā huī xiǎng xiàng",
                "pos": "sentence",
                "vi": "Tranh trừu tượng cần phát huy trí tưởng tượng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "chou xiang hua xu yao fa hui xiang xiang",
            "tone": "chōu xiàng huà xū yào fā huī xiǎng xiàng"
          },
          {
            "stage": "sentence",
            "vi": "Nghệ thuật có thể nâng cao năng lực thẩm mỹ.",
            "hanzi": "艺术能提高审美能力。",
            "words": [
              {
                "text": "艺术能提高审美能力",
                "pinyin": "yi shu neng ti gao shen mei neng li",
                "tone": "yì shù néng tí gāo shěn měi néng lì",
                "pos": "sentence",
                "vi": "Nghệ thuật có thể nâng cao năng lực thẩm mỹ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l18",
            "pinyin": "yi shu neng ti gao shen mei neng li",
            "tone": "yì shù néng tí gāo shěn měi néng lì"
          }
        ]
      },
      {
        "id": "hsk5-l19",
        "no": 19,
        "titleZh": "家乡的萝卜饼",
        "titleVi": "Bánh củ cải quê hương",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "quê hương",
            "hanzi": "家乡",
            "words": [
              {
                "text": "家乡",
                "pinyin": "jia xiang",
                "tone": "jiā xiāng",
                "pos": "noun",
                "vi": "quê hương"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "jia xiang",
            "tone": "jiā xiāng"
          },
          {
            "stage": "word",
            "vi": "củ cải",
            "hanzi": "萝卜",
            "words": [
              {
                "text": "萝卜",
                "pinyin": "luo bo",
                "tone": "luó bo",
                "pos": "noun",
                "vi": "củ cải"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "luo bo",
            "tone": "luó bo"
          },
          {
            "stage": "word",
            "vi": "nhớ nhung",
            "hanzi": "怀念",
            "words": [
              {
                "text": "怀念",
                "pinyin": "huai nian",
                "tone": "huái niàn",
                "pos": "verb",
                "vi": "nhớ nhung"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "huai nian",
            "tone": "huái niàn"
          },
          {
            "stage": "word",
            "vi": "màu sắc",
            "hanzi": "色彩",
            "words": [
              {
                "text": "色彩",
                "pinyin": "se cai",
                "tone": "sè cǎi",
                "pos": "noun",
                "vi": "màu sắc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "se cai",
            "tone": "sè cǎi"
          },
          {
            "stage": "word",
            "vi": "thanh đạm",
            "hanzi": "清淡",
            "words": [
              {
                "text": "清淡",
                "pinyin": "qing dan",
                "tone": "qīng dàn",
                "pos": "adj",
                "vi": "thanh đạm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "qing dan",
            "tone": "qīng dàn"
          },
          {
            "stage": "word",
            "vi": "trộn đều",
            "hanzi": "搅拌",
            "words": [
              {
                "text": "搅拌",
                "pinyin": "jiao ban",
                "tone": "jiǎo bàn",
                "pos": "verb",
                "vi": "trộn đều"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "jiao ban",
            "tone": "jiǎo bàn"
          },
          {
            "stage": "word",
            "vi": "phòng tránh",
            "hanzi": "预防",
            "words": [
              {
                "text": "预防",
                "pinyin": "yu fang",
                "tone": "yù fáng",
                "pos": "verb",
                "vi": "phòng tránh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "yu fang",
            "tone": "yù fáng"
          },
          {
            "stage": "word",
            "vi": "tranh thủ",
            "hanzi": "趁",
            "words": [
              {
                "text": "趁",
                "pinyin": "chen",
                "tone": "chèn",
                "pos": "prep",
                "vi": "tranh thủ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "chen",
            "tone": "chèn"
          },
          {
            "stage": "phrase",
            "vi": "nhớ quê hương",
            "hanzi": "想念家乡",
            "words": [
              {
                "text": "想念家乡",
                "pinyin": "xiang nian jia xiang",
                "tone": "xiǎng niàn jiā xiāng",
                "pos": "phrase",
                "vi": "nhớ quê hương"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "xiang nian jia xiang",
            "tone": "xiǎng niàn jiā xiāng"
          },
          {
            "stage": "phrase",
            "vi": "củ cải ba màu",
            "hanzi": "三色萝卜",
            "words": [
              {
                "text": "三色萝卜",
                "pinyin": "san se luo bo",
                "tone": "sān sè luó bo",
                "pos": "phrase",
                "vi": "củ cải ba màu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "san se luo bo",
            "tone": "sān sè luó bo"
          },
          {
            "stage": "phrase",
            "vi": "nhớ hương vị",
            "hanzi": "怀念味道",
            "words": [
              {
                "text": "怀念味道",
                "pinyin": "huai nian wei dao",
                "tone": "huái niàn wèi dào",
                "pos": "phrase",
                "vi": "nhớ hương vị"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "huai nian wei dao",
            "tone": "huái niàn wèi dào"
          },
          {
            "stage": "phrase",
            "vi": "màu sắc phong phú",
            "hanzi": "色彩丰富",
            "words": [
              {
                "text": "色彩丰富",
                "pinyin": "se cai feng fu",
                "tone": "sè cǎi fēng fù",
                "pos": "phrase",
                "vi": "màu sắc phong phú"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "se cai feng fu",
            "tone": "sè cǎi fēng fù"
          },
          {
            "stage": "phrase",
            "vi": "thanh đạm ngon miệng",
            "hanzi": "清淡可口",
            "words": [
              {
                "text": "清淡可口",
                "pinyin": "qing dan ke kou",
                "tone": "qīng dàn kě kǒu",
                "pos": "phrase",
                "vi": "thanh đạm ngon miệng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "qing dan ke kou",
            "tone": "qīng dàn kě kǒu"
          },
          {
            "stage": "phrase",
            "vi": "trộn đều",
            "hanzi": "搅拌均匀",
            "words": [
              {
                "text": "搅拌均匀",
                "pinyin": "jiao ban jun yun",
                "tone": "jiǎo bàn jūn yún",
                "pos": "phrase",
                "vi": "trộn đều"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "jiao ban jun yun",
            "tone": "jiǎo bàn jūn yún"
          },
          {
            "stage": "phrase",
            "vi": "phòng bị cháy đáy",
            "hanzi": "预防糊底",
            "words": [
              {
                "text": "预防糊底",
                "pinyin": "yu fang hu di",
                "tone": "yù fáng hú dǐ",
                "pos": "phrase",
                "vi": "phòng bị cháy đáy"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "yu fang hu di",
            "tone": "yù fáng hú dǐ"
          },
          {
            "stage": "phrase",
            "vi": "ăn khi còn nóng",
            "hanzi": "趁热吃",
            "words": [
              {
                "text": "趁热吃",
                "pinyin": "chen re chi",
                "tone": "chèn rè chī",
                "pos": "phrase",
                "vi": "ăn khi còn nóng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "chen re chi",
            "tone": "chèn rè chī"
          },
          {
            "stage": "sentence",
            "vi": "Tôi thường nhớ quê hương.",
            "hanzi": "我常常想念家乡。",
            "words": [
              {
                "text": "我常常想念家乡",
                "pinyin": "wo chang chang xiang nian jia xiang",
                "tone": "wǒ cháng cháng xiǎng niàn jiā xiāng",
                "pos": "sentence",
                "vi": "Tôi thường nhớ quê hương."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "wo chang chang xiang nian jia xiang",
            "tone": "wǒ cháng cháng xiǎng niàn jiā xiāng"
          },
          {
            "stage": "sentence",
            "vi": "Củ cải ba màu rất đẹp.",
            "hanzi": "三色萝卜很漂亮。",
            "words": [
              {
                "text": "三色萝卜很漂亮",
                "pinyin": "san se luo bo hen piao liang",
                "tone": "sān sè luó bo hěn piào liang",
                "pos": "sentence",
                "vi": "Củ cải ba màu rất đẹp."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "san se luo bo hen piao liang",
            "tone": "sān sè luó bo hěn piào liang"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy nhớ hương vị quê nhà.",
            "hanzi": "他怀念家乡的味道。",
            "words": [
              {
                "text": "他怀念家乡的味道",
                "pinyin": "ta huai nian jia xiang de wei dao",
                "tone": "tā huái niàn jiā xiāng de wèi dào",
                "pos": "sentence",
                "vi": "Anh ấy nhớ hương vị quê nhà."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "ta huai nian jia xiang de wei dao",
            "tone": "tā huái niàn jiā xiāng de wèi dào"
          },
          {
            "stage": "sentence",
            "vi": "Bánh củ cải có màu sắc phong phú.",
            "hanzi": "萝卜饼色彩丰富。",
            "words": [
              {
                "text": "萝卜饼色彩丰富",
                "pinyin": "luo bo bing se cai feng fu",
                "tone": "luó bo bǐng sè cǎi fēng fù",
                "pos": "sentence",
                "vi": "Bánh củ cải có màu sắc phong phú."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "luo bo bing se cai feng fu",
            "tone": "luó bo bǐng sè cǎi fēng fù"
          },
          {
            "stage": "sentence",
            "vi": "Món này thanh đạm và ngon miệng.",
            "hanzi": "这种菜清淡可口。",
            "words": [
              {
                "text": "这种菜清淡可口",
                "pinyin": "zhe zhong cai qing dan ke kou",
                "tone": "zhè zhòng cài qīng dàn kě kǒu",
                "pos": "sentence",
                "vi": "Món này thanh đạm và ngon miệng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "zhe zhong cai qing dan ke kou",
            "tone": "zhè zhòng cài qīng dàn kě kǒu"
          },
          {
            "stage": "sentence",
            "vi": "Hãy trộn đều sợi củ cải.",
            "hanzi": "把萝卜丝搅拌均匀。",
            "words": [
              {
                "text": "把萝卜丝搅拌均匀",
                "pinyin": "ba luo bo si jiao ban jun yun",
                "tone": "bǎ luó bo sī jiǎo bàn jūn yún",
                "pos": "sentence",
                "vi": "Hãy trộn đều sợi củ cải."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "ba luo bo si jiao ban jun yun",
            "tone": "bǎ luó bo sī jiǎo bàn jūn yún"
          },
          {
            "stage": "sentence",
            "vi": "Cho chút nước có thể phòng bị cháy đáy.",
            "hanzi": "放点水可以预防糊底。",
            "words": [
              {
                "text": "放点水可以预防糊底",
                "pinyin": "fang dian shui ke yi yu fang hu di",
                "tone": "fàng diǎn shuǐ kě yǐ yù fáng hú dǐ",
                "pos": "sentence",
                "vi": "Cho chút nước có thể phòng bị cháy đáy."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "fang dian shui ke yi yu fang hu di",
            "tone": "fàng diǎn shuǐ kě yǐ yù fáng hú dǐ"
          },
          {
            "stage": "sentence",
            "vi": "Bánh củ cải nên ăn khi còn nóng.",
            "hanzi": "萝卜饼要趁热吃。",
            "words": [
              {
                "text": "萝卜饼要趁热吃",
                "pinyin": "luo bo bing yao chen re chi",
                "tone": "luó bo bǐng yào chèn rè chī",
                "pos": "sentence",
                "vi": "Bánh củ cải nên ăn khi còn nóng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l19",
            "pinyin": "luo bo bing yao chen re chi",
            "tone": "luó bo bǐng yào chèn rè chī"
          }
        ]
      },
      {
        "id": "hsk5-l20",
        "no": 20,
        "titleZh": "小人书摊",
        "titleVi": "Sạp truyện tranh cũ",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "truyện tranh cũ",
            "hanzi": "小人书",
            "words": [
              {
                "text": "小人书",
                "pinyin": "xiao ren shu",
                "tone": "xiǎo rén shū",
                "pos": "noun",
                "vi": "truyện tranh cũ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "xiao ren shu",
            "tone": "xiǎo rén shū"
          },
          {
            "stage": "word",
            "vi": "sạp sách",
            "hanzi": "书摊",
            "words": [
              {
                "text": "书摊",
                "pinyin": "shu tan",
                "tone": "shū tān",
                "pos": "noun",
                "vi": "sạp sách"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "shu tan",
            "tone": "shū tān"
          },
          {
            "stage": "word",
            "vi": "tuổi thơ",
            "hanzi": "童年",
            "words": [
              {
                "text": "童年",
                "pinyin": "tong nian",
                "tone": "tóng nián",
                "pos": "noun",
                "vi": "tuổi thơ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "tong nian",
            "tone": "tóng nián"
          },
          {
            "stage": "word",
            "vi": "xếp hàng",
            "hanzi": "排队",
            "words": [
              {
                "text": "排队",
                "pinyin": "pai dui",
                "tone": "pái duì",
                "pos": "verb",
                "vi": "xếp hàng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "pai dui",
            "tone": "pái duì"
          },
          {
            "stage": "word",
            "vi": "câu chuyện",
            "hanzi": "故事",
            "words": [
              {
                "text": "故事",
                "pinyin": "gu shi",
                "tone": "gù shì",
                "pos": "noun",
                "vi": "câu chuyện"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "gu shi",
            "tone": "gù shì"
          },
          {
            "stage": "word",
            "vi": "rẻ",
            "hanzi": "便宜",
            "words": [
              {
                "text": "便宜",
                "pinyin": "pian yi",
                "tone": "pián yi",
                "pos": "adj",
                "vi": "rẻ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "pian yi",
            "tone": "pián yi"
          },
          {
            "stage": "word",
            "vi": "náo nhiệt",
            "hanzi": "热闹",
            "words": [
              {
                "text": "热闹",
                "pinyin": "re nao",
                "tone": "rè nào",
                "pos": "adj",
                "vi": "náo nhiệt"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "re nao",
            "tone": "rè nào"
          },
          {
            "stage": "word",
            "vi": "kỷ niệm",
            "hanzi": "回忆",
            "words": [
              {
                "text": "回忆",
                "pinyin": "hui yi",
                "tone": "huí yì",
                "pos": "noun",
                "vi": "kỷ niệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "hui yi",
            "tone": "huí yì"
          },
          {
            "stage": "phrase",
            "vi": "đọc truyện tranh cũ",
            "hanzi": "看小人书",
            "words": [
              {
                "text": "看小人书",
                "pinyin": "kan xiao ren shu",
                "tone": "kàn xiǎo rén shū",
                "pos": "phrase",
                "vi": "đọc truyện tranh cũ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "kan xiao ren shu",
            "tone": "kàn xiǎo rén shū"
          },
          {
            "stage": "phrase",
            "vi": "sạp sách ven đường",
            "hanzi": "路边书摊",
            "words": [
              {
                "text": "路边书摊",
                "pinyin": "lu bian shu tan",
                "tone": "lù biān shū tān",
                "pos": "phrase",
                "vi": "sạp sách ven đường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "lu bian shu tan",
            "tone": "lù biān shū tān"
          },
          {
            "stage": "phrase",
            "vi": "ký ức tuổi thơ",
            "hanzi": "童年记忆",
            "words": [
              {
                "text": "童年记忆",
                "pinyin": "tong nian ji yi",
                "tone": "tóng nián jì yì",
                "pos": "phrase",
                "vi": "ký ức tuổi thơ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "tong nian ji yi",
            "tone": "tóng nián jì yì"
          },
          {
            "stage": "phrase",
            "vi": "xếp hàng thuê sách",
            "hanzi": "排队租书",
            "words": [
              {
                "text": "排队租书",
                "pinyin": "pai dui zu shu",
                "tone": "pái duì zū shū",
                "pos": "phrase",
                "vi": "xếp hàng thuê sách"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "pai dui zu shu",
            "tone": "pái duì zū shū"
          },
          {
            "stage": "phrase",
            "vi": "câu chuyện thú vị",
            "hanzi": "有趣故事",
            "words": [
              {
                "text": "有趣故事",
                "pinyin": "you qu gu shi",
                "tone": "yǒu qù gù shì",
                "pos": "phrase",
                "vi": "câu chuyện thú vị"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "you qu gu shi",
            "tone": "yǒu qù gù shì"
          },
          {
            "stage": "phrase",
            "vi": "giá rẻ",
            "hanzi": "价格便宜",
            "words": [
              {
                "text": "价格便宜",
                "pinyin": "jia ge pian yi",
                "tone": "jià gé pián yi",
                "pos": "phrase",
                "vi": "giá rẻ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "jia ge pian yi",
            "tone": "jià gé pián yi"
          },
          {
            "stage": "phrase",
            "vi": "sạp sách náo nhiệt",
            "hanzi": "书摊热闹",
            "words": [
              {
                "text": "书摊热闹",
                "pinyin": "shu tan re nao",
                "tone": "shū tān rè nào",
                "pos": "phrase",
                "vi": "sạp sách náo nhiệt"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "shu tan re nao",
            "tone": "shū tān rè nào"
          },
          {
            "stage": "phrase",
            "vi": "kỷ niệm đẹp",
            "hanzi": "美好回忆",
            "words": [
              {
                "text": "美好回忆",
                "pinyin": "mei hao hui yi",
                "tone": "měi hǎo huí yì",
                "pos": "phrase",
                "vi": "kỷ niệm đẹp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "mei hao hui yi",
            "tone": "měi hǎo huí yì"
          },
          {
            "stage": "sentence",
            "vi": "Hồi nhỏ tôi thích đọc truyện tranh cũ.",
            "hanzi": "小时候我爱看小人书。",
            "words": [
              {
                "text": "小时候我爱看小人书",
                "pinyin": "xiao shi hou wo ai kan xiao ren shu",
                "tone": "xiǎo shí hòu wǒ ài kàn xiǎo rén shū",
                "pos": "sentence",
                "vi": "Hồi nhỏ tôi thích đọc truyện tranh cũ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "xiao shi hou wo ai kan xiao ren shu",
            "tone": "xiǎo shí hòu wǒ ài kàn xiǎo rén shū"
          },
          {
            "stage": "sentence",
            "vi": "Sạp sách ven đường rất nhộn nhịp.",
            "hanzi": "路边书摊很热闹。",
            "words": [
              {
                "text": "路边书摊很热闹",
                "pinyin": "lu bian shu tan hen re nao",
                "tone": "lù biān shū tān hěn rè nào",
                "pos": "sentence",
                "vi": "Sạp sách ven đường rất nhộn nhịp."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "lu bian shu tan hen re nao",
            "tone": "lù biān shū tān hěn rè nào"
          },
          {
            "stage": "sentence",
            "vi": "Truyện tranh cũ để lại ký ức tuổi thơ.",
            "hanzi": "小人书留下童年记忆。",
            "words": [
              {
                "text": "小人书留下童年记忆",
                "pinyin": "xiao ren shu liu xia tong nian ji yi",
                "tone": "xiǎo rén shū liú xià tóng nián jì yì",
                "pos": "sentence",
                "vi": "Truyện tranh cũ để lại ký ức tuổi thơ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "xiao ren shu liu xia tong nian ji yi",
            "tone": "xiǎo rén shū liú xià tóng nián jì yì"
          },
          {
            "stage": "sentence",
            "vi": "Bọn trẻ xếp hàng thuê sách.",
            "hanzi": "孩子们排队租书。",
            "words": [
              {
                "text": "孩子们排队租书",
                "pinyin": "hai zi men pai dui zu shu",
                "tone": "hái zi men pái duì zū shū",
                "pos": "sentence",
                "vi": "Bọn trẻ xếp hàng thuê sách."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "hai zi men pai dui zu shu",
            "tone": "hái zi men pái duì zū shū"
          },
          {
            "stage": "sentence",
            "vi": "Trong sách có nhiều câu chuyện thú vị.",
            "hanzi": "书里有很多有趣故事。",
            "words": [
              {
                "text": "书里有很多有趣故事",
                "pinyin": "shu li you hen duo you qu gu shi",
                "tone": "shū lǐ yǒu hěn duō yǒu qù gù shì",
                "pos": "sentence",
                "vi": "Trong sách có nhiều câu chuyện thú vị."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "shu li you hen duo you qu gu shi",
            "tone": "shū lǐ yǒu hěn duō yǒu qù gù shì"
          },
          {
            "stage": "sentence",
            "vi": "Khi đó thuê sách rất rẻ.",
            "hanzi": "那时租书很便宜。",
            "words": [
              {
                "text": "那时租书很便宜",
                "pinyin": "na shi zu shu hen pian yi",
                "tone": "nà shí zū shū hěn pián yi",
                "pos": "sentence",
                "vi": "Khi đó thuê sách rất rẻ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "na shi zu shu hen pian yi",
            "tone": "nà shí zū shū hěn pián yi"
          },
          {
            "stage": "sentence",
            "vi": "Sau giờ học sạp sách rất náo nhiệt.",
            "hanzi": "放学后书摊很热闹。",
            "words": [
              {
                "text": "放学后书摊很热闹",
                "pinyin": "fang xue hou shu tan hen re nao",
                "tone": "fàng xué hòu shū tān hěn rè nào",
                "pos": "sentence",
                "vi": "Sau giờ học sạp sách rất náo nhiệt."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "fang xue hou shu tan hen re nao",
            "tone": "fàng xué hòu shū tān hěn rè nào"
          },
          {
            "stage": "sentence",
            "vi": "Những cuốn sách này là kỷ niệm đẹp.",
            "hanzi": "这些书是美好回忆。",
            "words": [
              {
                "text": "这些书是美好回忆",
                "pinyin": "zhe xie shu shi mei hao hui yi",
                "tone": "zhè xiē shū shì měi hǎo huí yì",
                "pos": "sentence",
                "vi": "Những cuốn sách này là kỷ niệm đẹp."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l20",
            "pinyin": "zhe xie shu shi mei hao hui yi",
            "tone": "zhè xiē shū shì měi hǎo huí yì"
          }
        ]
      },
      {
        "id": "hsk5-l21",
        "no": 21,
        "titleZh": "汉字叔叔：一个美国人的汉字情缘",
        "titleVi": "Chú Hán tự: duyên với chữ Hán của một người Mỹ",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "chữ Hán",
            "hanzi": "汉字",
            "words": [
              {
                "text": "汉字",
                "pinyin": "han zi",
                "tone": "hàn zì",
                "pos": "noun",
                "vi": "chữ Hán"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "han zi",
            "tone": "hàn zì"
          },
          {
            "stage": "word",
            "vi": "chú",
            "hanzi": "叔叔",
            "words": [
              {
                "text": "叔叔",
                "pinyin": "shu shu",
                "tone": "shū shu",
                "pos": "noun",
                "vi": "chú"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "shu shu",
            "tone": "shū shu"
          },
          {
            "stage": "word",
            "vi": "mối duyên",
            "hanzi": "情缘",
            "words": [
              {
                "text": "情缘",
                "pinyin": "qing yuan",
                "tone": "qíng yuán",
                "pos": "noun",
                "vi": "mối duyên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "qing yuan",
            "tone": "qíng yuán"
          },
          {
            "stage": "word",
            "vi": "trang web",
            "hanzi": "网站",
            "words": [
              {
                "text": "网站",
                "pinyin": "wang zhan",
                "tone": "wǎng zhàn",
                "pos": "noun",
                "vi": "trang web"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "wang zhan",
            "tone": "wǎng zhàn"
          },
          {
            "stage": "word",
            "vi": "tư liệu",
            "hanzi": "资料",
            "words": [
              {
                "text": "资料",
                "pinyin": "zi liao",
                "tone": "zī liào",
                "pos": "noun",
                "vi": "tư liệu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "zi liao",
            "tone": "zī liào"
          },
          {
            "stage": "word",
            "vi": "yêu thích sâu sắc",
            "hanzi": "热爱",
            "words": [
              {
                "text": "热爱",
                "pinyin": "re ai",
                "tone": "rè ài",
                "pos": "verb",
                "vi": "yêu thích sâu sắc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "re ai",
            "tone": "rè ài"
          },
          {
            "stage": "word",
            "vi": "kiên trì",
            "hanzi": "坚持",
            "words": [
              {
                "text": "坚持",
                "pinyin": "jian chi",
                "tone": "jiān chí",
                "pos": "verb",
                "vi": "kiên trì"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "jian chi",
            "tone": "jiān chí"
          },
          {
            "stage": "word",
            "vi": "truyền bá",
            "hanzi": "传播",
            "words": [
              {
                "text": "传播",
                "pinyin": "chuan bo",
                "tone": "chuán bō",
                "pos": "verb",
                "vi": "truyền bá"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "chuan bo",
            "tone": "chuán bō"
          },
          {
            "stage": "phrase",
            "vi": "nghiên cứu chữ Hán",
            "hanzi": "研究汉字",
            "words": [
              {
                "text": "研究汉字",
                "pinyin": "yan jiu han zi",
                "tone": "yán jiū hàn zì",
                "pos": "phrase",
                "vi": "nghiên cứu chữ Hán"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "yan jiu han zi",
            "tone": "yán jiū hàn zì"
          },
          {
            "stage": "phrase",
            "vi": "Chú Hán tự",
            "hanzi": "汉字叔叔",
            "words": [
              {
                "text": "汉字叔叔",
                "pinyin": "han zi shu shu",
                "tone": "hàn zì shū shu",
                "pos": "phrase",
                "vi": "Chú Hán tự"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "han zi shu shu",
            "tone": "hàn zì shū shu"
          },
          {
            "stage": "phrase",
            "vi": "mối duyên với chữ Hán",
            "hanzi": "汉字情缘",
            "words": [
              {
                "text": "汉字情缘",
                "pinyin": "han zi qing yuan",
                "tone": "hàn zì qíng yuán",
                "pos": "phrase",
                "vi": "mối duyên với chữ Hán"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "han zi qing yuan",
            "tone": "hàn zì qíng yuán"
          },
          {
            "stage": "phrase",
            "vi": "xây dựng trang web",
            "hanzi": "建立网站",
            "words": [
              {
                "text": "建立网站",
                "pinyin": "jian li wang zhan",
                "tone": "jiàn lì wǎng zhàn",
                "pos": "phrase",
                "vi": "xây dựng trang web"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "jian li wang zhan",
            "tone": "jiàn lì wǎng zhàn"
          },
          {
            "stage": "phrase",
            "vi": "sắp xếp tư liệu",
            "hanzi": "整理资料",
            "words": [
              {
                "text": "整理资料",
                "pinyin": "zheng li zi liao",
                "tone": "zhěng lǐ zī liào",
                "pos": "phrase",
                "vi": "sắp xếp tư liệu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "zheng li zi liao",
            "tone": "zhěng lǐ zī liào"
          },
          {
            "stage": "phrase",
            "vi": "yêu văn hóa Trung Quốc",
            "hanzi": "热爱中国文化",
            "words": [
              {
                "text": "热爱中国文化",
                "pinyin": "re ai zhong guo wen hua",
                "tone": "rè ài zhōng guó wén huà",
                "pos": "phrase",
                "vi": "yêu văn hóa Trung Quốc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "re ai zhong guo wen hua",
            "tone": "rè ài zhōng guó wén huà"
          },
          {
            "stage": "phrase",
            "vi": "kiên trì nhiều năm",
            "hanzi": "坚持多年",
            "words": [
              {
                "text": "坚持多年",
                "pinyin": "jian chi duo nian",
                "tone": "jiān chí duō nián",
                "pos": "phrase",
                "vi": "kiên trì nhiều năm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "jian chi duo nian",
            "tone": "jiān chí duō nián"
          },
          {
            "stage": "phrase",
            "vi": "truyền bá văn hóa chữ Hán",
            "hanzi": "传播汉字文化",
            "words": [
              {
                "text": "传播汉字文化",
                "pinyin": "chuan bo han zi wen hua",
                "tone": "chuán bō hàn zì wén huà",
                "pos": "phrase",
                "vi": "truyền bá văn hóa chữ Hán"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "chuan bo han zi wen hua",
            "tone": "chuán bō hàn zì wén huà"
          },
          {
            "stage": "sentence",
            "vi": "Ông ấy cả đời nghiên cứu chữ Hán.",
            "hanzi": "他一生研究汉字。",
            "words": [
              {
                "text": "他一生研究汉字",
                "pinyin": "ta yi sheng yan jiu han zi",
                "tone": "tā yì shēng yán jiū hàn zì",
                "pos": "sentence",
                "vi": "Ông ấy cả đời nghiên cứu chữ Hán."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "ta yi sheng yan jiu han zi",
            "tone": "tā yì shēng yán jiū hàn zì"
          },
          {
            "stage": "sentence",
            "vi": "Mọi người gọi ông là Chú Hán tự.",
            "hanzi": "大家叫他汉字叔叔。",
            "words": [
              {
                "text": "大家叫他汉字叔叔",
                "pinyin": "da jia jiao ta han zi shu shu",
                "tone": "dà jiā jiào tā hàn zì shū shu",
                "pos": "sentence",
                "vi": "Mọi người gọi ông là Chú Hán tự."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "da jia jiao ta han zi shu shu",
            "tone": "dà jiā jiào tā hàn zì shū shu"
          },
          {
            "stage": "sentence",
            "vi": "Ông có mối duyên sâu sắc với chữ Hán.",
            "hanzi": "他和汉字有很深的情缘。",
            "words": [
              {
                "text": "他和汉字有很深的情缘",
                "pinyin": "ta he han zi you hen shen de qing yuan",
                "tone": "tā hé hàn zì yǒu hěn shēn de qíng yuán",
                "pos": "sentence",
                "vi": "Ông có mối duyên sâu sắc với chữ Hán."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "ta he han zi you hen shen de qing yuan",
            "tone": "tā hé hàn zì yǒu hěn shēn de qíng yuán"
          },
          {
            "stage": "sentence",
            "vi": "Ông ấy xây dựng một trang web chữ Hán.",
            "hanzi": "他建立了汉字网站。",
            "words": [
              {
                "text": "他建立了汉字网站",
                "pinyin": "ta jian li le han zi wang zhan",
                "tone": "tā jiàn lì le hàn zì wǎng zhàn",
                "pos": "sentence",
                "vi": "Ông ấy xây dựng một trang web chữ Hán."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "ta jian li le han zi wang zhan",
            "tone": "tā jiàn lì le hàn zì wǎng zhàn"
          },
          {
            "stage": "sentence",
            "vi": "Ông ấy sắp xếp rất nhiều tư liệu.",
            "hanzi": "他整理了大量资料。",
            "words": [
              {
                "text": "他整理了大量资料",
                "pinyin": "ta zheng li le da liang zi liao",
                "tone": "tā zhěng lǐ le dà liàng zī liào",
                "pos": "sentence",
                "vi": "Ông ấy sắp xếp rất nhiều tư liệu."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "ta zheng li le da liang zi liao",
            "tone": "tā zhěng lǐ le dà liàng zī liào"
          },
          {
            "stage": "sentence",
            "vi": "Ông ấy yêu văn hóa Trung Quốc.",
            "hanzi": "他热爱中国文化。",
            "words": [
              {
                "text": "他热爱中国文化",
                "pinyin": "ta re ai zhong guo wen hua",
                "tone": "tā rè ài zhōng guó wén huà",
                "pos": "sentence",
                "vi": "Ông ấy yêu văn hóa Trung Quốc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "ta re ai zhong guo wen hua",
            "tone": "tā rè ài zhōng guó wén huà"
          },
          {
            "stage": "sentence",
            "vi": "Ông ấy kiên trì nghiên cứu nhiều năm.",
            "hanzi": "他坚持研究很多年。",
            "words": [
              {
                "text": "他坚持研究很多年",
                "pinyin": "ta jian chi yan jiu hen duo nian",
                "tone": "tā jiān chí yán jiū hěn duō nián",
                "pos": "sentence",
                "vi": "Ông ấy kiên trì nghiên cứu nhiều năm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "ta jian chi yan jiu hen duo nian",
            "tone": "tā jiān chí yán jiū hěn duō nián"
          },
          {
            "stage": "sentence",
            "vi": "Trang web giúp truyền bá văn hóa chữ Hán.",
            "hanzi": "网站帮助传播汉字文化。",
            "words": [
              {
                "text": "网站帮助传播汉字文化",
                "pinyin": "wang zhan bang zhu chuan bo han zi wen hua",
                "tone": "wǎng zhàn bāng zhù chuán bō hàn zì wén huà",
                "pos": "sentence",
                "vi": "Trang web giúp truyền bá văn hóa chữ Hán."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l21",
            "pinyin": "wang zhan bang zhu chuan bo han zi wen hua",
            "tone": "wǎng zhàn bāng zhù chuán bō hàn zì wén huà"
          }
        ]
      },
      {
        "id": "hsk5-l22",
        "no": 22,
        "titleZh": "阅读与思考",
        "titleVi": "Đọc và suy nghĩ",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "đọc",
            "hanzi": "阅读",
            "words": [
              {
                "text": "阅读",
                "pinyin": "yue du",
                "tone": "yuè dú",
                "pos": "verb",
                "vi": "đọc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "yue du",
            "tone": "yuè dú"
          },
          {
            "stage": "word",
            "vi": "suy nghĩ",
            "hanzi": "思考",
            "words": [
              {
                "text": "思考",
                "pinyin": "si kao",
                "tone": "sī kǎo",
                "pos": "verb",
                "vi": "suy nghĩ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "si kao",
            "tone": "sī kǎo"
          },
          {
            "stage": "word",
            "vi": "quan điểm",
            "hanzi": "观点",
            "words": [
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
          },
          {
            "stage": "word",
            "vi": "vấn đề",
            "hanzi": "问题",
            "words": [
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "wen ti",
            "tone": "wèn tí"
          },
          {
            "stage": "word",
            "vi": "đáp án",
            "hanzi": "答案",
            "words": [
              {
                "text": "答案",
                "pinyin": "da an",
                "tone": "dá àn",
                "pos": "noun",
                "vi": "đáp án"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "da an",
            "tone": "dá àn"
          },
          {
            "stage": "word",
            "vi": "phán đoán",
            "hanzi": "判断",
            "words": [
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "thu hoạch",
            "hanzi": "收获",
            "words": [
              {
                "text": "收获",
                "pinyin": "shou huo",
                "tone": "shōu huò",
                "pos": "noun",
                "vi": "thu hoạch"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "shou huo",
            "tone": "shōu huò"
          },
          {
            "stage": "word",
            "vi": "thói quen",
            "hanzi": "习惯",
            "words": [
              {
                "text": "习惯",
                "pinyin": "xi guan",
                "tone": "xí guàn",
                "pos": "noun",
                "vi": "thói quen"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "xi guan",
            "tone": "xí guàn"
          },
          {
            "stage": "phrase",
            "vi": "kiên trì đọc",
            "hanzi": "坚持阅读",
            "words": [
              {
                "text": "坚持阅读",
                "pinyin": "jian chi yue du",
                "tone": "jiān chí yuè dú",
                "pos": "phrase",
                "vi": "kiên trì đọc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "jian chi yue du",
            "tone": "jiān chí yuè dú"
          },
          {
            "stage": "phrase",
            "vi": "suy nghĩ độc lập",
            "hanzi": "独立思考",
            "words": [
              {
                "text": "独立思考",
                "pinyin": "du li si kao",
                "tone": "dú lì sī kǎo",
                "pos": "phrase",
                "vi": "suy nghĩ độc lập"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "du li si kao",
            "tone": "dú lì sī kǎo"
          },
          {
            "stage": "phrase",
            "vi": "bày tỏ quan điểm",
            "hanzi": "表达观点",
            "words": [
              {
                "text": "表达观点",
                "pinyin": "biao da guan dian",
                "tone": "biǎo dá guān diǎn",
                "pos": "phrase",
                "vi": "bày tỏ quan điểm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "biao da guan dian",
            "tone": "biǎo dá guān diǎn"
          },
          {
            "stage": "phrase",
            "vi": "nêu vấn đề",
            "hanzi": "提出问题",
            "words": [
              {
                "text": "提出问题",
                "pinyin": "ti chu wen ti",
                "tone": "tí chū wèn tí",
                "pos": "phrase",
                "vi": "nêu vấn đề"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "ti chu wen ti",
            "tone": "tí chū wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "tìm đáp án",
            "hanzi": "寻找答案",
            "words": [
              {
                "text": "寻找答案",
                "pinyin": "xun zhao da an",
                "tone": "xún zhǎo dá àn",
                "pos": "phrase",
                "vi": "tìm đáp án"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "xun zhao da an",
            "tone": "xún zhǎo dá àn"
          },
          {
            "stage": "phrase",
            "vi": "phán đoán độc lập",
            "hanzi": "独立判断",
            "words": [
              {
                "text": "独立判断",
                "pinyin": "du li pan duan",
                "tone": "dú lì pàn duàn",
                "pos": "phrase",
                "vi": "phán đoán độc lập"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "du li pan duan",
            "tone": "dú lì pàn duàn"
          },
          {
            "stage": "phrase",
            "vi": "thu hoạch từ việc đọc",
            "hanzi": "阅读收获",
            "words": [
              {
                "text": "阅读收获",
                "pinyin": "yue du shou huo",
                "tone": "yuè dú shōu huò",
                "pos": "phrase",
                "vi": "thu hoạch từ việc đọc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "yue du shou huo",
            "tone": "yuè dú shōu huò"
          },
          {
            "stage": "phrase",
            "vi": "thói quen đọc",
            "hanzi": "阅读习惯",
            "words": [
              {
                "text": "阅读习惯",
                "pinyin": "yue du xi guan",
                "tone": "yuè dú xí guàn",
                "pos": "phrase",
                "vi": "thói quen đọc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "yue du xi guan",
            "tone": "yuè dú xí guàn"
          },
          {
            "stage": "sentence",
            "vi": "Kiên trì đọc giúp mở rộng tầm mắt.",
            "hanzi": "坚持阅读能开阔眼界。",
            "words": [
              {
                "text": "坚持阅读能开阔眼界",
                "pinyin": "jian chi yue du neng kai kuo yan jie",
                "tone": "jiān chí yuè dú néng kāi kuò yǎn jiè",
                "pos": "sentence",
                "vi": "Kiên trì đọc giúp mở rộng tầm mắt."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "jian chi yue du neng kai kuo yan jie",
            "tone": "jiān chí yuè dú néng kāi kuò yǎn jiè"
          },
          {
            "stage": "sentence",
            "vi": "Sau khi đọc cần suy nghĩ độc lập.",
            "hanzi": "阅读以后要独立思考。",
            "words": [
              {
                "text": "阅读以后要独立思考",
                "pinyin": "yue du yi hou yao du li si kao",
                "tone": "yuè dú yǐ hòu yào dú lì sī kǎo",
                "pos": "sentence",
                "vi": "Sau khi đọc cần suy nghĩ độc lập."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "yue du yi hou yao du li si kao",
            "tone": "yuè dú yǐ hòu yào dú lì sī kǎo"
          },
          {
            "stage": "sentence",
            "vi": "Hãy bày tỏ quan điểm rõ ràng.",
            "hanzi": "请清楚表达观点。",
            "words": [
              {
                "text": "请清楚表达观点",
                "pinyin": "qing qing chu biao da guan dian",
                "tone": "qǐng qīng chǔ biǎo dá guān diǎn",
                "pos": "sentence",
                "vi": "Hãy bày tỏ quan điểm rõ ràng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "qing qing chu biao da guan dian",
            "tone": "qǐng qīng chǔ biǎo dá guān diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học sinh giỏi biết nêu vấn đề.",
            "hanzi": "好学生会提出问题。",
            "words": [
              {
                "text": "好学生会提出问题",
                "pinyin": "hao xue sheng hui ti chu wen ti",
                "tone": "hào xué shēng huì tí chū wèn tí",
                "pos": "sentence",
                "vi": "Học sinh giỏi biết nêu vấn đề."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "hao xue sheng hui ti chu wen ti",
            "tone": "hào xué shēng huì tí chū wèn tí"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta tìm đáp án trong sách.",
            "hanzi": "我们在书中寻找答案。",
            "words": [
              {
                "text": "我们在书中寻找答案",
                "pinyin": "wo men zai shu zhong xun zhao da an",
                "tone": "wǒ men zài shū zhōng xún zhǎo dá àn",
                "pos": "sentence",
                "vi": "Chúng ta tìm đáp án trong sách."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "wo men zai shu zhong xun zhao da an",
            "tone": "wǒ men zài shū zhōng xún zhǎo dá àn"
          },
          {
            "stage": "sentence",
            "vi": "Suy nghĩ giúp chúng ta phán đoán độc lập.",
            "hanzi": "思考帮助我们独立判断。",
            "words": [
              {
                "text": "思考帮助我们独立判断",
                "pinyin": "si kao bang zhu wo men du li pan duan",
                "tone": "sī kǎo bāng zhù wǒ men dú lì pàn duàn",
                "pos": "sentence",
                "vi": "Suy nghĩ giúp chúng ta phán đoán độc lập."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "si kao bang zhu wo men du li pan duan",
            "tone": "sī kǎo bāng zhù wǒ men dú lì pàn duàn"
          },
          {
            "stage": "sentence",
            "vi": "Cuốn sách này giúp tôi thu hoạch nhiều điều.",
            "hanzi": "这本书让我收获很多。",
            "words": [
              {
                "text": "这本书让我收获很多",
                "pinyin": "zhe ben shu rang wo shou huo hen duo",
                "tone": "zhè běn shū ràng wǒ shōu huò hěn duō",
                "pos": "sentence",
                "vi": "Cuốn sách này giúp tôi thu hoạch nhiều điều."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "zhe ben shu rang wo shou huo hen duo",
            "tone": "zhè běn shū ràng wǒ shōu huò hěn duō"
          },
          {
            "stage": "sentence",
            "vi": "Tôi muốn hình thành thói quen đọc.",
            "hanzi": "我想养成阅读习惯。",
            "words": [
              {
                "text": "我想养成阅读习惯",
                "pinyin": "wo xiang yang cheng yue du xi guan",
                "tone": "wǒ xiǎng yǎng chéng yuè dú xí guàn",
                "pos": "sentence",
                "vi": "Tôi muốn hình thành thói quen đọc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l22",
            "pinyin": "wo xiang yang cheng yue du xi guan",
            "tone": "wǒ xiǎng yǎng chéng yuè dú xí guàn"
          }
        ]
      },
      {
        "id": "hsk5-l23",
        "no": 23,
        "titleZh": "放手",
        "titleVi": "Buông tay",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "buông tay",
            "hanzi": "放手",
            "words": [
              {
                "text": "放手",
                "pinyin": "fang shou",
                "tone": "fàng shǒu",
                "pos": "verb",
                "vi": "buông tay"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "fang shou",
            "tone": "fàng shǒu"
          },
          {
            "stage": "word",
            "vi": "trưởng thành",
            "hanzi": "成长",
            "words": [
              {
                "text": "成长",
                "pinyin": "cheng zhang",
                "tone": "chéng zhǎng",
                "pos": "verb",
                "vi": "trưởng thành"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "cheng zhang",
            "tone": "chéng zhǎng"
          },
          {
            "stage": "word",
            "vi": "lo lắng",
            "hanzi": "担心",
            "words": [
              {
                "text": "担心",
                "pinyin": "dan xin",
                "tone": "dān xīn",
                "pos": "verb",
                "vi": "lo lắng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "dan xin",
            "tone": "dān xīn"
          },
          {
            "stage": "word",
            "vi": "độc lập",
            "hanzi": "独立",
            "words": [
              {
                "text": "独立",
                "pinyin": "du li",
                "tone": "dú lì",
                "pos": "adj",
                "vi": "độc lập"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "du li",
            "tone": "dú lì"
          },
          {
            "stage": "word",
            "vi": "tin tưởng",
            "hanzi": "信任",
            "words": [
              {
                "text": "信任",
                "pinyin": "xin ren",
                "tone": "xìn rèn",
                "pos": "verb",
                "vi": "tin tưởng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "xin ren",
            "tone": "xìn rèn"
          },
          {
            "stage": "word",
            "vi": "quyết định",
            "hanzi": "决定",
            "words": [
              {
                "text": "决定",
                "pinyin": "jue ding",
                "tone": "jué dìng",
                "pos": "noun",
                "vi": "quyết định"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "jue ding",
            "tone": "jué dìng"
          },
          {
            "stage": "word",
            "vi": "trách nhiệm",
            "hanzi": "责任",
            "words": [
              {
                "text": "责任",
                "pinyin": "ze ren",
                "tone": "zé rèn",
                "pos": "noun",
                "vi": "trách nhiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "ze ren",
            "tone": "zé rèn"
          },
          {
            "stage": "word",
            "vi": "dũng khí",
            "hanzi": "勇气",
            "words": [
              {
                "text": "勇气",
                "pinyin": "yong qi",
                "tone": "yǒng qì",
                "pos": "noun",
                "vi": "dũng khí"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "yong qi",
            "tone": "yǒng qì"
          },
          {
            "stage": "phrase",
            "vi": "học cách buông tay",
            "hanzi": "学会放手",
            "words": [
              {
                "text": "学会放手",
                "pinyin": "xue hui fang shou",
                "tone": "xué huì fàng shǒu",
                "pos": "phrase",
                "vi": "học cách buông tay"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "xue hui fang shou",
            "tone": "xué huì fàng shǒu"
          },
          {
            "stage": "phrase",
            "vi": "trưởng thành độc lập",
            "hanzi": "独立成长",
            "words": [
              {
                "text": "独立成长",
                "pinyin": "du li cheng zhang",
                "tone": "dú lì chéng zhǎng",
                "pos": "phrase",
                "vi": "trưởng thành độc lập"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "du li cheng zhang",
            "tone": "dú lì chéng zhǎng"
          },
          {
            "stage": "phrase",
            "vi": "lo lắng quá mức",
            "hanzi": "过分担心",
            "words": [
              {
                "text": "过分担心",
                "pinyin": "guo fen dan xin",
                "tone": "guò fèn dān xīn",
                "pos": "phrase",
                "vi": "lo lắng quá mức"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "guo fen dan xin",
            "tone": "guò fèn dān xīn"
          },
          {
            "stage": "phrase",
            "vi": "sống độc lập",
            "hanzi": "独立生活",
            "words": [
              {
                "text": "独立生活",
                "pinyin": "du li sheng huo",
                "tone": "dú lì shēng huó",
                "pos": "phrase",
                "vi": "sống độc lập"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "du li sheng huo",
            "tone": "dú lì shēng huó"
          },
          {
            "stage": "phrase",
            "vi": "tin tưởng con cái",
            "hanzi": "信任孩子",
            "words": [
              {
                "text": "信任孩子",
                "pinyin": "xin ren hai zi",
                "tone": "xìn rèn hái zi",
                "pos": "phrase",
                "vi": "tin tưởng con cái"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "xin ren hai zi",
            "tone": "xìn rèn hái zi"
          },
          {
            "stage": "phrase",
            "vi": "tự quyết định",
            "hanzi": "自己决定",
            "words": [
              {
                "text": "自己决定",
                "pinyin": "zi ji jue ding",
                "tone": "zì jǐ jué dìng",
                "pos": "phrase",
                "vi": "tự quyết định"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "zi ji jue ding",
            "tone": "zì jǐ jué dìng"
          },
          {
            "stage": "phrase",
            "vi": "gánh trách nhiệm",
            "hanzi": "承担责任",
            "words": [
              {
                "text": "承担责任",
                "pinyin": "cheng dan ze ren",
                "tone": "chéng dān zé rèn",
                "pos": "phrase",
                "vi": "gánh trách nhiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "cheng dan ze ren",
            "tone": "chéng dān zé rèn"
          },
          {
            "stage": "phrase",
            "vi": "cần dũng khí",
            "hanzi": "需要勇气",
            "words": [
              {
                "text": "需要勇气",
                "pinyin": "xu yao yong qi",
                "tone": "xū yào yǒng qì",
                "pos": "phrase",
                "vi": "cần dũng khí"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "xu yao yong qi",
            "tone": "xū yào yǒng qì"
          },
          {
            "stage": "sentence",
            "vi": "Cha mẹ cũng cần học cách buông tay.",
            "hanzi": "父母也要学会放手。",
            "words": [
              {
                "text": "父母也要学会放手",
                "pinyin": "fu mu ye yao xue hui fang shou",
                "tone": "fù mǔ yě yào xué huì fàng shǒu",
                "pos": "sentence",
                "vi": "Cha mẹ cũng cần học cách buông tay."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "fu mu ye yao xue hui fang shou",
            "tone": "fù mǔ yě yào xué huì fàng shǒu"
          },
          {
            "stage": "sentence",
            "vi": "Trẻ em cần trưởng thành độc lập.",
            "hanzi": "孩子需要独立成长。",
            "words": [
              {
                "text": "孩子需要独立成长",
                "pinyin": "hai zi xu yao du li cheng zhang",
                "tone": "hái zi xū yào dú lì chéng zhǎng",
                "pos": "sentence",
                "vi": "Trẻ em cần trưởng thành độc lập."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "hai zi xu yao du li cheng zhang",
            "tone": "hái zi xū yào dú lì chéng zhǎng"
          },
          {
            "stage": "sentence",
            "vi": "Mẹ luôn lo lắng quá mức.",
            "hanzi": "妈妈总是过分担心。",
            "words": [
              {
                "text": "妈妈总是过分担心",
                "pinyin": "ma ma zong shi guo fen dan xin",
                "tone": "mā ma zǒng shì guò fèn dān xīn",
                "pos": "sentence",
                "vi": "Mẹ luôn lo lắng quá mức."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "ma ma zong shi guo fen dan xin",
            "tone": "mā ma zǒng shì guò fèn dān xīn"
          },
          {
            "stage": "sentence",
            "vi": "Sinh viên cần học cách sống độc lập.",
            "hanzi": "大学生要学会独立生活。",
            "words": [
              {
                "text": "大学生要学会独立生活",
                "pinyin": "da xue sheng yao xue hui du li sheng huo",
                "tone": "dà xué shēng yào xué huì dú lì shēng huó",
                "pos": "sentence",
                "vi": "Sinh viên cần học cách sống độc lập."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "da xue sheng yao xue hui du li sheng huo",
            "tone": "dà xué shēng yào xué huì dú lì shēng huó"
          },
          {
            "stage": "sentence",
            "vi": "Cha mẹ nên tin tưởng con cái.",
            "hanzi": "父母应该信任孩子。",
            "words": [
              {
                "text": "父母应该信任孩子",
                "pinyin": "fu mu ying gai xin ren hai zi",
                "tone": "fù mǔ yīng gāi xìn rèn hái zi",
                "pos": "sentence",
                "vi": "Cha mẹ nên tin tưởng con cái."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "fu mu ying gai xin ren hai zi",
            "tone": "fù mǔ yīng gāi xìn rèn hái zi"
          },
          {
            "stage": "sentence",
            "vi": "Việc này hãy để cậu ấy tự quyết định.",
            "hanzi": "这件事让他自己决定。",
            "words": [
              {
                "text": "这件事让他自己决定",
                "pinyin": "zhe jian shi rang ta zi ji jue ding",
                "tone": "zhè jiàn shì ràng tā zì jǐ jué dìng",
                "pos": "sentence",
                "vi": "Việc này hãy để cậu ấy tự quyết định."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "zhe jian shi rang ta zi ji jue ding",
            "tone": "zhè jiàn shì ràng tā zì jǐ jué dìng"
          },
          {
            "stage": "sentence",
            "vi": "Người trẻ cần gánh trách nhiệm.",
            "hanzi": "年轻人要承担责任。",
            "words": [
              {
                "text": "年轻人要承担责任",
                "pinyin": "nian qing ren yao cheng dan ze ren",
                "tone": "nián qīng rén yào chéng dān zé rèn",
                "pos": "sentence",
                "vi": "Người trẻ cần gánh trách nhiệm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "nian qing ren yao cheng dan ze ren",
            "tone": "nián qīng rén yào chéng dān zé rèn"
          },
          {
            "stage": "sentence",
            "vi": "Buông tay cũng cần dũng khí.",
            "hanzi": "放手也需要勇气。",
            "words": [
              {
                "text": "放手也需要勇气",
                "pinyin": "fang shou ye xu yao yong qi",
                "tone": "fàng shǒu yě xū yào yǒng qì",
                "pos": "sentence",
                "vi": "Buông tay cũng cần dũng khí."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l23",
            "pinyin": "fang shou ye xu yao yong qi",
            "tone": "fàng shǒu yě xū yào yǒng qì"
          }
        ]
      },
      {
        "id": "hsk5-l24",
        "no": 24,
        "titleZh": "支教行动",
        "titleVi": "Hoạt động đi dạy tình nguyện",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "dạy học tình nguyện",
            "hanzi": "支教",
            "words": [
              {
                "text": "支教",
                "pinyin": "zhi jiao",
                "tone": "zhī jiào",
                "pos": "verb",
                "vi": "dạy học tình nguyện"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "zhi jiao",
            "tone": "zhī jiào"
          },
          {
            "stage": "word",
            "vi": "hành động",
            "hanzi": "行动",
            "words": [
              {
                "text": "行动",
                "pinyin": "xing dong",
                "tone": "xíng dòng",
                "pos": "noun",
                "vi": "hành động"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "xing dong",
            "tone": "xíng dòng"
          },
          {
            "stage": "word",
            "vi": "vùng núi",
            "hanzi": "山区",
            "words": [
              {
                "text": "山区",
                "pinyin": "shan qu",
                "tone": "shān qū",
                "pos": "noun",
                "vi": "vùng núi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "shan qu",
            "tone": "shān qū"
          },
          {
            "stage": "word",
            "vi": "nghĩa vụ",
            "hanzi": "义务",
            "words": [
              {
                "text": "义务",
                "pinyin": "yi wu",
                "tone": "yì wù",
                "pos": "noun",
                "vi": "nghĩa vụ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "yi wu",
            "tone": "yì wù"
          },
          {
            "stage": "word",
            "vi": "điều kiện",
            "hanzi": "条件",
            "words": [
              {
                "text": "条件",
                "pinyin": "tiao jian",
                "tone": "tiáo jiàn",
                "pos": "noun",
                "vi": "điều kiện"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "tiao jian",
            "tone": "tiáo jiàn"
          },
          {
            "stage": "word",
            "vi": "kiên trì",
            "hanzi": "坚持",
            "words": [
              {
                "text": "坚持",
                "pinyin": "jian chi",
                "tone": "jiān chí",
                "pos": "verb",
                "vi": "kiên trì"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "jian chi",
            "tone": "jiān chí"
          },
          {
            "stage": "word",
            "vi": "thay đổi",
            "hanzi": "改变",
            "words": [
              {
                "text": "改变",
                "pinyin": "gai bian",
                "tone": "gǎi biàn",
                "pos": "verb",
                "vi": "thay đổi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "gai bian",
            "tone": "gǎi biàn"
          },
          {
            "stage": "word",
            "vi": "cảm động",
            "hanzi": "感动",
            "words": [
              {
                "text": "感动",
                "pinyin": "gan dong",
                "tone": "gǎn dòng",
                "pos": "verb",
                "vi": "cảm động"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "gan dong",
            "tone": "gǎn dòng"
          },
          {
            "stage": "phrase",
            "vi": "tham gia dạy học tình nguyện",
            "hanzi": "参加支教",
            "words": [
              {
                "text": "参加支教",
                "pinyin": "can jia zhi jiao",
                "tone": "cān jiā zhī jiào",
                "pos": "phrase",
                "vi": "tham gia dạy học tình nguyện"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "can jia zhi jiao",
            "tone": "cān jiā zhī jiào"
          },
          {
            "stage": "phrase",
            "vi": "hành động công ích",
            "hanzi": "公益行动",
            "words": [
              {
                "text": "公益行动",
                "pinyin": "gong yi xing dong",
                "tone": "gōng yì xíng dòng",
                "pos": "phrase",
                "vi": "hành động công ích"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "gong yi xing dong",
            "tone": "gōng yì xíng dòng"
          },
          {
            "stage": "phrase",
            "vi": "trường vùng núi",
            "hanzi": "山区学校",
            "words": [
              {
                "text": "山区学校",
                "pinyin": "shan qu xue xiao",
                "tone": "shān qū xué xiào",
                "pos": "phrase",
                "vi": "trường vùng núi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "shan qu xue xiao",
            "tone": "shān qū xué xiào"
          },
          {
            "stage": "phrase",
            "vi": "thực hiện nghĩa vụ",
            "hanzi": "履行义务",
            "words": [
              {
                "text": "履行义务",
                "pinyin": "lü xing yi wu",
                "tone": "lǚ xíng yì wù",
                "pos": "phrase",
                "vi": "thực hiện nghĩa vụ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "lü xing yi wu",
            "tone": "lǚ xíng yì wù"
          },
          {
            "stage": "phrase",
            "vi": "điều kiện gian khổ",
            "hanzi": "条件艰苦",
            "words": [
              {
                "text": "条件艰苦",
                "pinyin": "tiao jian jian ku",
                "tone": "tiáo jiàn jiān kǔ",
                "pos": "phrase",
                "vi": "điều kiện gian khổ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "tiao jian jian ku",
            "tone": "tiáo jiàn jiān kǔ"
          },
          {
            "stage": "phrase",
            "vi": "kiên trì lên lớp",
            "hanzi": "坚持上课",
            "words": [
              {
                "text": "坚持上课",
                "pinyin": "jian chi shang ke",
                "tone": "jiān chí shàng kè",
                "pos": "phrase",
                "vi": "kiên trì lên lớp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "jian chi shang ke",
            "tone": "jiān chí shàng kè"
          },
          {
            "stage": "phrase",
            "vi": "thay đổi số phận",
            "hanzi": "改变命运",
            "words": [
              {
                "text": "改变命运",
                "pinyin": "gai bian ming yun",
                "tone": "gǎi biàn mìng yùn",
                "pos": "phrase",
                "vi": "thay đổi số phận"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "gai bian ming yun",
            "tone": "gǎi biàn mìng yùn"
          },
          {
            "stage": "phrase",
            "vi": "vô cùng cảm động",
            "hanzi": "深受感动",
            "words": [
              {
                "text": "深受感动",
                "pinyin": "shen shou gan dong",
                "tone": "shēn shòu gǎn dòng",
                "pos": "phrase",
                "vi": "vô cùng cảm động"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "shen shou gan dong",
            "tone": "shēn shòu gǎn dòng"
          },
          {
            "stage": "sentence",
            "vi": "Cô ấy đến vùng núi tham gia dạy học tình nguyện.",
            "hanzi": "她去山区参加支教。",
            "words": [
              {
                "text": "她去山区参加支教",
                "pinyin": "ta qu shan qu can jia zhi jiao",
                "tone": "tā qù shān qū cān jiā zhī jiào",
                "pos": "sentence",
                "vi": "Cô ấy đến vùng núi tham gia dạy học tình nguyện."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "ta qu shan qu can jia zhi jiao",
            "tone": "tā qù shān qū cān jiā zhī jiào"
          },
          {
            "stage": "sentence",
            "vi": "Dạy học tình nguyện là một hành động công ích.",
            "hanzi": "支教是一种公益行动。",
            "words": [
              {
                "text": "支教是一种公益行动",
                "pinyin": "zhi jiao shi yi zhong gong yi xing dong",
                "tone": "zhī jiào shì yì zhǒng gōng yì xíng dòng",
                "pos": "sentence",
                "vi": "Dạy học tình nguyện là một hành động công ích."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "zhi jiao shi yi zhong gong yi xing dong",
            "tone": "zhī jiào shì yì zhǒng gōng yì xíng dòng"
          },
          {
            "stage": "sentence",
            "vi": "Trường vùng núi cần giáo viên.",
            "hanzi": "山区学校需要老师。",
            "words": [
              {
                "text": "山区学校需要老师",
                "pinyin": "shan qu xue xiao xu yao lao shi",
                "tone": "shān qū xué xiào xū yào lǎo shī",
                "pos": "sentence",
                "vi": "Trường vùng núi cần giáo viên."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "shan qu xue xiao xu yao lao shi",
            "tone": "shān qū xué xiào xū yào lǎo shī"
          },
          {
            "stage": "sentence",
            "vi": "Giúp người khác cũng là một nghĩa vụ.",
            "hanzi": "帮助别人也是一种义务。",
            "words": [
              {
                "text": "帮助别人也是一种义务",
                "pinyin": "bang zhu bie ren ye shi yi zhong yi wu",
                "tone": "bāng zhù bié rén yě shì yì zhǒng yì wù",
                "pos": "sentence",
                "vi": "Giúp người khác cũng là một nghĩa vụ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "bang zhu bie ren ye shi yi zhong yi wu",
            "tone": "bāng zhù bié rén yě shì yì zhǒng yì wù"
          },
          {
            "stage": "sentence",
            "vi": "Điều kiện ở đó rất gian khổ.",
            "hanzi": "那里的条件很艰苦。",
            "words": [
              {
                "text": "那里的条件很艰苦",
                "pinyin": "na li de tiao jian hen jian ku",
                "tone": "nà lǐ de tiáo jiàn hěn jiān kǔ",
                "pos": "sentence",
                "vi": "Điều kiện ở đó rất gian khổ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "na li de tiao jian hen jian ku",
            "tone": "nà lǐ de tiáo jiàn hěn jiān kǔ"
          },
          {
            "stage": "sentence",
            "vi": "Giáo viên mỗi ngày kiên trì lên lớp.",
            "hanzi": "老师每天坚持上课。",
            "words": [
              {
                "text": "老师每天坚持上课",
                "pinyin": "lao shi mei tian jian chi shang ke",
                "tone": "lǎo shī měi tiān jiān chí shàng kè",
                "pos": "sentence",
                "vi": "Giáo viên mỗi ngày kiên trì lên lớp."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "lao shi mei tian jian chi shang ke",
            "tone": "lǎo shī měi tiān jiān chí shàng kè"
          },
          {
            "stage": "sentence",
            "vi": "Giáo dục có thể thay đổi số phận.",
            "hanzi": "教育可以改变命运。",
            "words": [
              {
                "text": "教育可以改变命运",
                "pinyin": "jiao yu ke yi gai bian ming yun",
                "tone": "jiào yù kě yǐ gǎi biàn mìng yùn",
                "pos": "sentence",
                "vi": "Giáo dục có thể thay đổi số phận."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "jiao yu ke yi gai bian ming yun",
            "tone": "jiào yù kě yǐ gǎi biàn mìng yùn"
          },
          {
            "stage": "sentence",
            "vi": "Lời của học sinh làm tôi vô cùng cảm động.",
            "hanzi": "学生的话让我深受感动。",
            "words": [
              {
                "text": "学生的话让我深受感动",
                "pinyin": "xue sheng de hua rang wo shen shou gan dong",
                "tone": "xué shēng de huà ràng wǒ shēn shòu gǎn dòng",
                "pos": "sentence",
                "vi": "Lời của học sinh làm tôi vô cùng cảm động."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l24",
            "pinyin": "xue sheng de hua rang wo shen shou gan dong",
            "tone": "xué shēng de huà ràng wǒ shēn shòu gǎn dòng"
          }
        ]
      },
      {
        "id": "hsk5-l25",
        "no": 25,
        "titleZh": "给自己加满水",
        "titleVi": "Tiếp đầy năng lượng cho bản thân",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "bản thân",
            "hanzi": "自己",
            "words": [
              {
                "text": "自己",
                "pinyin": "zi ji",
                "tone": "zì jǐ",
                "pos": "pron",
                "vi": "bản thân"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "zi ji",
            "tone": "zì jǐ"
          },
          {
            "stage": "word",
            "vi": "năng lượng",
            "hanzi": "能量",
            "words": [
              {
                "text": "能量",
                "pinyin": "neng liang",
                "tone": "néng liàng",
                "pos": "noun",
                "vi": "năng lượng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "neng liang",
            "tone": "néng liàng"
          },
          {
            "stage": "word",
            "vi": "áp lực",
            "hanzi": "压力",
            "words": [
              {
                "text": "压力",
                "pinyin": "ya li",
                "tone": "yā lì",
                "pos": "noun",
                "vi": "áp lực"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "ya li",
            "tone": "yā lì"
          },
          {
            "stage": "word",
            "vi": "nghỉ ngơi",
            "hanzi": "休息",
            "words": [
              {
                "text": "休息",
                "pinyin": "xiu xi",
                "tone": "xiū xi",
                "pos": "verb",
                "vi": "nghỉ ngơi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "xiu xi",
            "tone": "xiū xi"
          },
          {
            "stage": "word",
            "vi": "điều chỉnh",
            "hanzi": "调整",
            "words": [
              {
                "text": "调整",
                "pinyin": "tiao zheng",
                "tone": "tiáo zhěng",
                "pos": "verb",
                "vi": "điều chỉnh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "tiao zheng",
            "tone": "tiáo zhěng"
          },
          {
            "stage": "word",
            "vi": "cảm xúc",
            "hanzi": "情绪",
            "words": [
              {
                "text": "情绪",
                "pinyin": "qing xu",
                "tone": "qíng xù",
                "pos": "noun",
                "vi": "cảm xúc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "qing xu",
            "tone": "qíng xù"
          },
          {
            "stage": "word",
            "vi": "mục tiêu",
            "hanzi": "目标",
            "words": [
              {
                "text": "目标",
                "pinyin": "mu biao",
                "tone": "mù biāo",
                "pos": "noun",
                "vi": "mục tiêu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "mu biao",
            "tone": "mù biāo"
          },
          {
            "stage": "word",
            "vi": "cân bằng",
            "hanzi": "平衡",
            "words": [
              {
                "text": "平衡",
                "pinyin": "ping heng",
                "tone": "píng héng",
                "pos": "noun",
                "vi": "cân bằng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "ping heng",
            "tone": "píng héng"
          },
          {
            "stage": "phrase",
            "vi": "chăm sóc bản thân",
            "hanzi": "照顾自己",
            "words": [
              {
                "text": "照顾自己",
                "pinyin": "zhao gu zi ji",
                "tone": "zhào gù zì jǐ",
                "pos": "phrase",
                "vi": "chăm sóc bản thân"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "zhao gu zi ji",
            "tone": "zhào gù zì jǐ"
          },
          {
            "stage": "phrase",
            "vi": "bổ sung năng lượng",
            "hanzi": "补充能量",
            "words": [
              {
                "text": "补充能量",
                "pinyin": "bu chong neng liang",
                "tone": "bǔ chōng néng liàng",
                "pos": "phrase",
                "vi": "bổ sung năng lượng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "bu chong neng liang",
            "tone": "bǔ chōng néng liàng"
          },
          {
            "stage": "phrase",
            "vi": "đối mặt áp lực",
            "hanzi": "面对压力",
            "words": [
              {
                "text": "面对压力",
                "pinyin": "mian dui ya li",
                "tone": "miàn duì yā lì",
                "pos": "phrase",
                "vi": "đối mặt áp lực"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "mian dui ya li",
            "tone": "miàn duì yā lì"
          },
          {
            "stage": "phrase",
            "vi": "nghỉ ngơi thật tốt",
            "hanzi": "好好休息",
            "words": [
              {
                "text": "好好休息",
                "pinyin": "hao hao xiu xi",
                "tone": "hǎo hǎo xiū xi",
                "pos": "phrase",
                "vi": "nghỉ ngơi thật tốt"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "hao hao xiu xi",
            "tone": "hǎo hǎo xiū xi"
          },
          {
            "stage": "phrase",
            "vi": "điều chỉnh trạng thái",
            "hanzi": "调整状态",
            "words": [
              {
                "text": "调整状态",
                "pinyin": "tiao zheng zhuang tai",
                "tone": "tiáo zhěng zhuàng tài",
                "pos": "phrase",
                "vi": "điều chỉnh trạng thái"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "tiao zheng zhuang tai",
            "tone": "tiáo zhěng zhuàng tài"
          },
          {
            "stage": "phrase",
            "vi": "kiểm soát cảm xúc",
            "hanzi": "控制情绪",
            "words": [
              {
                "text": "控制情绪",
                "pinyin": "kong zhi qing xu",
                "tone": "kòng zhì qíng xù",
                "pos": "phrase",
                "vi": "kiểm soát cảm xúc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "kong zhi qing xu",
            "tone": "kòng zhì qíng xù"
          },
          {
            "stage": "phrase",
            "vi": "xác định mục tiêu",
            "hanzi": "明确目标",
            "words": [
              {
                "text": "明确目标",
                "pinyin": "ming que mu biao",
                "tone": "míng què mù biāo",
                "pos": "phrase",
                "vi": "xác định mục tiêu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "ming que mu biao",
            "tone": "míng què mù biāo"
          },
          {
            "stage": "phrase",
            "vi": "giữ cân bằng",
            "hanzi": "保持平衡",
            "words": [
              {
                "text": "保持平衡",
                "pinyin": "bao chi ping heng",
                "tone": "bǎo chí píng héng",
                "pos": "phrase",
                "vi": "giữ cân bằng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "bao chi ping heng",
            "tone": "bǎo chí píng héng"
          },
          {
            "stage": "sentence",
            "vi": "Khi bận cũng phải chăm sóc bản thân.",
            "hanzi": "忙的时候也要照顾自己。",
            "words": [
              {
                "text": "忙的时候也要照顾自己",
                "pinyin": "mang de shi hou ye yao zhao gu zi ji",
                "tone": "máng de shí hòu yě yào zhào gù zì jǐ",
                "pos": "sentence",
                "vi": "Khi bận cũng phải chăm sóc bản thân."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "mang de shi hou ye yao zhao gu zi ji",
            "tone": "máng de shí hòu yě yào zhào gù zì jǐ"
          },
          {
            "stage": "sentence",
            "vi": "Nghỉ ngơi có thể bổ sung năng lượng.",
            "hanzi": "休息能补充能量。",
            "words": [
              {
                "text": "休息能补充能量",
                "pinyin": "xiu xi neng bu chong neng liang",
                "tone": "xiū xi néng bǔ chōng néng liàng",
                "pos": "sentence",
                "vi": "Nghỉ ngơi có thể bổ sung năng lượng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "xiu xi neng bu chong neng liang",
            "tone": "xiū xi néng bǔ chōng néng liàng"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy học cách đối mặt với áp lực.",
            "hanzi": "他学会面对压力。",
            "words": [
              {
                "text": "他学会面对压力",
                "pinyin": "ta xue hui mian dui ya li",
                "tone": "tā xué huì miàn duì yā lì",
                "pos": "sentence",
                "vi": "Anh ấy học cách đối mặt với áp lực."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "ta xue hui mian dui ya li",
            "tone": "tā xué huì miàn duì yā lì"
          },
          {
            "stage": "sentence",
            "vi": "Mệt thì cần nghỉ ngơi thật tốt.",
            "hanzi": "累了就要好好休息。",
            "words": [
              {
                "text": "累了就要好好休息",
                "pinyin": "lei le jiu yao hao hao xiu xi",
                "tone": "lèi le jiù yào hǎo hǎo xiū xi",
                "pos": "sentence",
                "vi": "Mệt thì cần nghỉ ngơi thật tốt."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "lei le jiu yao hao hao xiu xi",
            "tone": "lèi le jiù yào hǎo hǎo xiū xi"
          },
          {
            "stage": "sentence",
            "vi": "Trước kỳ thi cần điều chỉnh trạng thái.",
            "hanzi": "考试前要调整状态。",
            "words": [
              {
                "text": "考试前要调整状态",
                "pinyin": "kao shi qian yao tiao zheng zhuang tai",
                "tone": "kǎo shì qián yào tiáo zhěng zhuàng tài",
                "pos": "sentence",
                "vi": "Trước kỳ thi cần điều chỉnh trạng thái."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "kao shi qian yao tiao zheng zhuang tai",
            "tone": "kǎo shì qián yào tiáo zhěng zhuàng tài"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy đang học cách kiểm soát cảm xúc.",
            "hanzi": "他正在学习控制情绪。",
            "words": [
              {
                "text": "他正在学习控制情绪",
                "pinyin": "ta zheng zai xue xi kong zhi qing xu",
                "tone": "tā zhèng zài xué xí kòng zhì qíng xù",
                "pos": "sentence",
                "vi": "Anh ấy đang học cách kiểm soát cảm xúc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "ta zheng zai xue xi kong zhi qing xu",
            "tone": "tā zhèng zài xué xí kòng zhì qíng xù"
          },
          {
            "stage": "sentence",
            "vi": "Sau khi xác định mục tiêu rồi hãy hành động.",
            "hanzi": "明确目标以后再行动。",
            "words": [
              {
                "text": "明确目标以后再行动",
                "pinyin": "ming que mu biao yi hou zai xing dong",
                "tone": "míng què mù biāo yǐ hòu zài xíng dòng",
                "pos": "sentence",
                "vi": "Sau khi xác định mục tiêu rồi hãy hành động."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "ming que mu biao yi hou zai xing dong",
            "tone": "míng què mù biāo yǐ hòu zài xíng dòng"
          },
          {
            "stage": "sentence",
            "vi": "Công việc và cuộc sống cần giữ cân bằng.",
            "hanzi": "工作和生活要保持平衡。",
            "words": [
              {
                "text": "工作和生活要保持平衡",
                "pinyin": "gong zuo he sheng huo yao bao chi ping heng",
                "tone": "gōng zuò hé shēng huó yào bǎo chí píng héng",
                "pos": "sentence",
                "vi": "Công việc và cuộc sống cần giữ cân bằng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l25",
            "pinyin": "gong zuo he sheng huo yao bao chi ping heng",
            "tone": "gōng zuò hé shēng huó yào bǎo chí píng héng"
          }
        ]
      },
      {
        "id": "hsk5-l26",
        "no": 26,
        "titleZh": "你属于哪一种“忙”",
        "titleVi": "Bạn thuộc kiểu bận nào",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "bận",
            "hanzi": "忙",
            "words": [
              {
                "text": "忙",
                "pinyin": "mang",
                "tone": "máng",
                "pos": "adj",
                "vi": "bận"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "mang",
            "tone": "máng"
          },
          {
            "stage": "word",
            "vi": "nghe nói",
            "hanzi": "据说",
            "words": [
              {
                "text": "据说",
                "pinyin": "ju shuo",
                "tone": "jù shuō",
                "pos": "verb",
                "vi": "nghe nói"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "ju shuo",
            "tone": "jù shuō"
          },
          {
            "stage": "word",
            "vi": "cá tính",
            "hanzi": "个性",
            "words": [
              {
                "text": "个性",
                "pinyin": "ge xing",
                "tone": "gè xìng",
                "pos": "noun",
                "vi": "cá tính"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "ge xing",
            "tone": "gè xìng"
          },
          {
            "stage": "word",
            "vi": "mạo hiểm",
            "hanzi": "冒险",
            "words": [
              {
                "text": "冒险",
                "pinyin": "mao xian",
                "tone": "mào xiǎn",
                "pos": "verb",
                "vi": "mạo hiểm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "mao xian",
            "tone": "mào xiǎn"
          },
          {
            "stage": "word",
            "vi": "làm chậm trễ",
            "hanzi": "耽误",
            "words": [
              {
                "text": "耽误",
                "pinyin": "dan wu",
                "tone": "dān wù",
                "pos": "verb",
                "vi": "làm chậm trễ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "dan wu",
            "tone": "dān wù"
          },
          {
            "stage": "word",
            "vi": "còn về",
            "hanzi": "至于",
            "words": [
              {
                "text": "至于",
                "pinyin": "zhi yu",
                "tone": "zhì yú",
                "pos": "prep",
                "vi": "còn về"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "zhi yu",
            "tone": "zhì yú"
          },
          {
            "stage": "word",
            "vi": "cuối cùng cũng",
            "hanzi": "总算",
            "words": [
              {
                "text": "总算",
                "pinyin": "zong suan",
                "tone": "zǒng suàn",
                "pos": "adv",
                "vi": "cuối cùng cũng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "zong suan",
            "tone": "zǒng suàn"
          },
          {
            "stage": "word",
            "vi": "hiệu suất",
            "hanzi": "效率",
            "words": [
              {
                "text": "效率",
                "pinyin": "xiao lü",
                "tone": "xiào lǜ",
                "pos": "noun",
                "vi": "hiệu suất"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "xiao lü",
            "tone": "xiào lǜ"
          },
          {
            "stage": "phrase",
            "vi": "luôn rất bận",
            "hanzi": "一直很忙",
            "words": [
              {
                "text": "一直很忙",
                "pinyin": "yi zhi hen mang",
                "tone": "yì zhí hěn máng",
                "pos": "phrase",
                "vi": "luôn rất bận"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "yi zhi hen mang",
            "tone": "yì zhí hěn máng"
          },
          {
            "stage": "phrase",
            "vi": "nghe nói rất hiệu quả",
            "hanzi": "据说很有效",
            "words": [
              {
                "text": "据说很有效",
                "pinyin": "ju shuo hen you xiao",
                "tone": "jù shuō hěn yǒu xiào",
                "pos": "phrase",
                "vi": "nghe nói rất hiệu quả"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "ju shuo hen you xiao",
            "tone": "jù shuō hěn yǒu xiào"
          },
          {
            "stage": "phrase",
            "vi": "rất có cá tính",
            "hanzi": "很有个性",
            "words": [
              {
                "text": "很有个性",
                "pinyin": "hen you ge xing",
                "tone": "hěn yǒu gè xìng",
                "pos": "phrase",
                "vi": "rất có cá tính"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "hen you ge xing",
            "tone": "hěn yǒu gè xìng"
          },
          {
            "stage": "phrase",
            "vi": "thích mạo hiểm",
            "hanzi": "喜欢冒险",
            "words": [
              {
                "text": "喜欢冒险",
                "pinyin": "xi huan mao xian",
                "tone": "xǐ huan mào xiǎn",
                "pos": "phrase",
                "vi": "thích mạo hiểm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "xi huan mao xian",
            "tone": "xǐ huan mào xiǎn"
          },
          {
            "stage": "phrase",
            "vi": "làm chậm trễ thời gian",
            "hanzi": "耽误时间",
            "words": [
              {
                "text": "耽误时间",
                "pinyin": "dan wu shi jian",
                "tone": "dān wù shí jiān",
                "pos": "phrase",
                "vi": "làm chậm trễ thời gian"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "dan wu shi jian",
            "tone": "dān wù shí jiān"
          },
          {
            "stage": "phrase",
            "vi": "còn về chi phí",
            "hanzi": "至于费用",
            "words": [
              {
                "text": "至于费用",
                "pinyin": "zhi yu fei yong",
                "tone": "zhì yú fèi yòng",
                "pos": "phrase",
                "vi": "còn về chi phí"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "zhi yu fei yong",
            "tone": "zhì yú fèi yòng"
          },
          {
            "stage": "phrase",
            "vi": "cuối cùng cũng hiểu",
            "hanzi": "总算明白",
            "words": [
              {
                "text": "总算明白",
                "pinyin": "zong suan ming bai",
                "tone": "zǒng suàn míng bái",
                "pos": "phrase",
                "vi": "cuối cùng cũng hiểu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "zong suan ming bai",
            "tone": "zǒng suàn míng bái"
          },
          {
            "stage": "phrase",
            "vi": "nâng cao hiệu suất",
            "hanzi": "提高效率",
            "words": [
              {
                "text": "提高效率",
                "pinyin": "ti gao xiao lü",
                "tone": "tí gāo xiào lǜ",
                "pos": "phrase",
                "vi": "nâng cao hiệu suất"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "ti gao xiao lü",
            "tone": "tí gāo xiào lǜ"
          },
          {
            "stage": "sentence",
            "vi": "Gần đây anh ấy luôn rất bận.",
            "hanzi": "他最近一直很忙。",
            "words": [
              {
                "text": "他最近一直很忙",
                "pinyin": "ta zui jin yi zhi hen mang",
                "tone": "tā zuì jìn yì zhí hěn máng",
                "pos": "sentence",
                "vi": "Gần đây anh ấy luôn rất bận."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "ta zui jin yi zhi hen mang",
            "tone": "tā zuì jìn yì zhí hěn máng"
          },
          {
            "stage": "sentence",
            "vi": "Nghe nói phương pháp này rất hiệu quả.",
            "hanzi": "据说这个方法很有效。",
            "words": [
              {
                "text": "据说这个方法很有效",
                "pinyin": "ju shuo zhe ge fang fa hen you xiao",
                "tone": "jù shuō zhè ge fāng fǎ hěn yǒu xiào",
                "pos": "sentence",
                "vi": "Nghe nói phương pháp này rất hiệu quả."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "ju shuo zhe ge fang fa hen you xiao",
            "tone": "jù shuō zhè ge fāng fǎ hěn yǒu xiào"
          },
          {
            "stage": "sentence",
            "vi": "Vị đạo diễn này rất có cá tính.",
            "hanzi": "这位导演很有个性。",
            "words": [
              {
                "text": "这位导演很有个性",
                "pinyin": "zhe wei dao yan hen you ge xing",
                "tone": "zhè wèi dǎo yǎn hěn yǒu gè xìng",
                "pos": "sentence",
                "vi": "Vị đạo diễn này rất có cá tính."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "zhe wei dao yan hen you ge xing",
            "tone": "zhè wèi dǎo yǎn hěn yǒu gè xìng"
          },
          {
            "stage": "sentence",
            "vi": "Khi còn trẻ ông ấy thích mạo hiểm.",
            "hanzi": "年轻时他喜欢冒险。",
            "words": [
              {
                "text": "年轻时他喜欢冒险",
                "pinyin": "nian qing shi ta xi huan mao xian",
                "tone": "nián qīng shí tā xǐ huan mào xiǎn",
                "pos": "sentence",
                "vi": "Khi còn trẻ ông ấy thích mạo hiểm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "nian qing shi ta xi huan mao xian",
            "tone": "nián qīng shí tā xǐ huan mào xiǎn"
          },
          {
            "stage": "sentence",
            "vi": "Tắc đường làm chậm trễ thời gian.",
            "hanzi": "堵车耽误了时间。",
            "words": [
              {
                "text": "堵车耽误了时间",
                "pinyin": "du che dan wu le shi jian",
                "tone": "dǔ chē dān wù le shí jiān",
                "pos": "sentence",
                "vi": "Tắc đường làm chậm trễ thời gian."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "du che dan wu le shi jian",
            "tone": "dǔ chē dān wù le shí jiān"
          },
          {
            "stage": "sentence",
            "vi": "Còn về chi phí, chúng ta bàn sau.",
            "hanzi": "至于费用，我们再商量。",
            "words": [
              {
                "text": "至于费用，我们再商量",
                "pinyin": "zhi yu fei yong ， wo men zai shang liang",
                "tone": "zhì yú fèi yòng ， wǒ men zài shāng liáng",
                "pos": "sentence",
                "vi": "Còn về chi phí, chúng ta bàn sau."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "zhi yu fei yong ， wo men zai shang liang",
            "tone": "zhì yú fèi yòng ， wǒ men zài shāng liáng"
          },
          {
            "stage": "sentence",
            "vi": "Cuối cùng anh ấy cũng hiểu nguyên nhân.",
            "hanzi": "他总算明白了原因。",
            "words": [
              {
                "text": "他总算明白了原因",
                "pinyin": "ta zong suan ming bai le yuan yin",
                "tone": "tā zǒng suàn míng bái le yuán yīn",
                "pos": "sentence",
                "vi": "Cuối cùng anh ấy cũng hiểu nguyên nhân."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "ta zong suan ming bai le yuan yin",
            "tone": "tā zǒng suàn míng bái le yuán yīn"
          },
          {
            "stage": "sentence",
            "vi": "Suy nghĩ có thể nâng cao hiệu suất.",
            "hanzi": "思考能提高效率。",
            "words": [
              {
                "text": "思考能提高效率",
                "pinyin": "si kao neng ti gao xiao lü",
                "tone": "sī kǎo néng tí gāo xiào lǜ",
                "pos": "sentence",
                "vi": "Suy nghĩ có thể nâng cao hiệu suất."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l26",
            "pinyin": "si kao neng ti gao xiao lü",
            "tone": "sī kǎo néng tí gāo xiào lǜ"
          }
        ]
      },
      {
        "id": "hsk5-l27",
        "no": 27,
        "titleZh": "下棋",
        "titleVi": "Chơi cờ",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "chơi cờ",
            "hanzi": "下棋",
            "words": [
              {
                "text": "下棋",
                "pinyin": "xia qi",
                "tone": "xià qí",
                "pos": "verb",
                "vi": "chơi cờ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "xia qi",
            "tone": "xià qí"
          },
          {
            "stage": "word",
            "vi": "cờ tướng",
            "hanzi": "象棋",
            "words": [
              {
                "text": "象棋",
                "pinyin": "xiang qi",
                "tone": "xiàng qí",
                "pos": "noun",
                "vi": "cờ tướng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "xiang qi",
            "tone": "xiàng qí"
          },
          {
            "stage": "word",
            "vi": "huấn luyện viên",
            "hanzi": "教练",
            "words": [
              {
                "text": "教练",
                "pinyin": "jiao lian",
                "tone": "jiào liàn",
                "pos": "noun",
                "vi": "huấn luyện viên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "jiao lian",
            "tone": "jiào liàn"
          },
          {
            "stage": "word",
            "vi": "đồng ý",
            "hanzi": "答应",
            "words": [
              {
                "text": "答应",
                "pinyin": "da ying",
                "tone": "dā ying",
                "pos": "verb",
                "vi": "đồng ý"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "da ying",
            "tone": "dā ying"
          },
          {
            "stage": "word",
            "vi": "suy nghĩ",
            "hanzi": "思考",
            "words": [
              {
                "text": "思考",
                "pinyin": "si kao",
                "tone": "sī kǎo",
                "pos": "verb",
                "vi": "suy nghĩ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "si kao",
            "tone": "sī kǎo"
          },
          {
            "stage": "word",
            "vi": "thua",
            "hanzi": "输",
            "words": [
              {
                "text": "输",
                "pinyin": "shu",
                "tone": "shū",
                "pos": "verb",
                "vi": "thua"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "shu",
            "tone": "shū"
          },
          {
            "stage": "word",
            "vi": "thắng",
            "hanzi": "赢",
            "words": [
              {
                "text": "赢",
                "pinyin": "ying",
                "tone": "yíng",
                "pos": "verb",
                "vi": "thắng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "ying",
            "tone": "yíng"
          },
          {
            "stage": "word",
            "vi": "kiên nhẫn",
            "hanzi": "耐心",
            "words": [
              {
                "text": "耐心",
                "pinyin": "nai xin",
                "tone": "nài xīn",
                "pos": "noun",
                "vi": "kiên nhẫn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "nai xin",
            "tone": "nài xīn"
          },
          {
            "stage": "phrase",
            "vi": "chơi cờ với bố",
            "hanzi": "和父亲下棋",
            "words": [
              {
                "text": "和父亲下棋",
                "pinyin": "he fu qin xia qi",
                "tone": "hé fù qīn xià qí",
                "pos": "phrase",
                "vi": "chơi cờ với bố"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "he fu qin xia qi",
            "tone": "hé fù qīn xià qí"
          },
          {
            "stage": "phrase",
            "vi": "học cờ tướng",
            "hanzi": "学象棋",
            "words": [
              {
                "text": "学象棋",
                "pinyin": "xue xiang qi",
                "tone": "xué xiàng qí",
                "pos": "phrase",
                "vi": "học cờ tướng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "xue xiang qi",
            "tone": "xué xiàng qí"
          },
          {
            "stage": "phrase",
            "vi": "huấn luyện viên cờ tướng",
            "hanzi": "象棋教练",
            "words": [
              {
                "text": "象棋教练",
                "pinyin": "xiang qi jiao lian",
                "tone": "xiàng qí jiào liàn",
                "pos": "phrase",
                "vi": "huấn luyện viên cờ tướng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "xiang qi jiao lian",
            "tone": "xiàng qí jiào liàn"
          },
          {
            "stage": "phrase",
            "vi": "vui vẻ đồng ý",
            "hanzi": "高兴地答应",
            "words": [
              {
                "text": "高兴地答应",
                "pinyin": "gao xing di da ying",
                "tone": "gāo xìng dì dā ying",
                "pos": "phrase",
                "vi": "vui vẻ đồng ý"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "gao xing di da ying",
            "tone": "gāo xìng dì dā ying"
          },
          {
            "stage": "phrase",
            "vi": "suy nghĩ nghiêm túc",
            "hanzi": "认真思考",
            "words": [
              {
                "text": "认真思考",
                "pinyin": "ren zhen si kao",
                "tone": "rèn zhēn sī kǎo",
                "pos": "phrase",
                "vi": "suy nghĩ nghiêm túc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "ren zhen si kao",
            "tone": "rèn zhēn sī kǎo"
          },
          {
            "stage": "phrase",
            "vi": "thua một ván",
            "hanzi": "输了一盘",
            "words": [
              {
                "text": "输了一盘",
                "pinyin": "shu le yi pan",
                "tone": "shū le yì pán",
                "pos": "phrase",
                "vi": "thua một ván"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "shu le yi pan",
            "tone": "shū le yì pán"
          },
          {
            "stage": "phrase",
            "vi": "thắng cuộc thi",
            "hanzi": "赢得比赛",
            "words": [
              {
                "text": "赢得比赛",
                "pinyin": "ying de bi sai",
                "tone": "yíng dé bǐ sài",
                "pos": "phrase",
                "vi": "thắng cuộc thi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "ying de bi sai",
            "tone": "yíng dé bǐ sài"
          },
          {
            "stage": "phrase",
            "vi": "cần kiên nhẫn",
            "hanzi": "需要耐心",
            "words": [
              {
                "text": "需要耐心",
                "pinyin": "xu yao nai xin",
                "tone": "xū yào nài xīn",
                "pos": "phrase",
                "vi": "cần kiên nhẫn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "xu yao nai xin",
            "tone": "xū yào nài xīn"
          },
          {
            "stage": "sentence",
            "vi": "Tôi chơi cờ với bố.",
            "hanzi": "我和父亲下棋。",
            "words": [
              {
                "text": "我和父亲下棋",
                "pinyin": "wo he fu qin xia qi",
                "tone": "wǒ hé fù qīn xià qí",
                "pos": "sentence",
                "vi": "Tôi chơi cờ với bố."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "wo he fu qin xia qi",
            "tone": "wǒ hé fù qīn xià qí"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy học cờ tướng từ nhỏ.",
            "hanzi": "他从小学习象棋。",
            "words": [
              {
                "text": "他从小学习象棋",
                "pinyin": "ta cong xiao xue xi xiang qi",
                "tone": "tā cóng xiǎo xué xí xiàng qí",
                "pos": "sentence",
                "vi": "Anh ấy học cờ tướng từ nhỏ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "ta cong xiao xue xi xiang qi",
            "tone": "tā cóng xiǎo xué xí xiàng qí"
          },
          {
            "stage": "sentence",
            "vi": "Bố là một huấn luyện viên cờ tướng.",
            "hanzi": "父亲是一位象棋教练。",
            "words": [
              {
                "text": "父亲是一位象棋教练",
                "pinyin": "fu qin shi yi wei xiang qi jiao lian",
                "tone": "fù qīn shì yí wèi xiàng qí jiào liàn",
                "pos": "sentence",
                "vi": "Bố là một huấn luyện viên cờ tướng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "fu qin shi yi wei xiang qi jiao lian",
            "tone": "fù qīn shì yí wèi xiàng qí jiào liàn"
          },
          {
            "stage": "sentence",
            "vi": "Tôi vui vẻ đồng ý.",
            "hanzi": "我高兴地答应了。",
            "words": [
              {
                "text": "我高兴地答应了",
                "pinyin": "wo gao xing di da ying le",
                "tone": "wǒ gāo xìng dì dā ying le",
                "pos": "sentence",
                "vi": "Tôi vui vẻ đồng ý."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "wo gao xing di da ying le",
            "tone": "wǒ gāo xìng dì dā ying le"
          },
          {
            "stage": "sentence",
            "vi": "Khi chơi cờ cần suy nghĩ nghiêm túc.",
            "hanzi": "下棋时要认真思考。",
            "words": [
              {
                "text": "下棋时要认真思考",
                "pinyin": "xia qi shi yao ren zhen si kao",
                "tone": "xià qí shí yào rèn zhēn sī kǎo",
                "pos": "sentence",
                "vi": "Khi chơi cờ cần suy nghĩ nghiêm túc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "xia qi shi yao ren zhen si kao",
            "tone": "xià qí shí yào rèn zhēn sī kǎo"
          },
          {
            "stage": "sentence",
            "vi": "Tôi thua ngay ván đầu tiên.",
            "hanzi": "我第一盘就输了。",
            "words": [
              {
                "text": "我第一盘就输了",
                "pinyin": "wo di yi pan jiu shu le",
                "tone": "wǒ dì yī pán jiù shū le",
                "pos": "sentence",
                "vi": "Tôi thua ngay ván đầu tiên."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "wo di yi pan jiu shu le",
            "tone": "wǒ dì yī pán jiù shū le"
          },
          {
            "stage": "sentence",
            "vi": "Cuối cùng anh ấy thắng cuộc thi.",
            "hanzi": "他最后赢得比赛。",
            "words": [
              {
                "text": "他最后赢得比赛",
                "pinyin": "ta zui hou ying de bi sai",
                "tone": "tā zuì hòu yíng dé bǐ sài",
                "pos": "sentence",
                "vi": "Cuối cùng anh ấy thắng cuộc thi."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "ta zui hou ying de bi sai",
            "tone": "tā zuì hòu yíng dé bǐ sài"
          },
          {
            "stage": "sentence",
            "vi": "Chơi cờ rất cần kiên nhẫn.",
            "hanzi": "下棋非常需要耐心。",
            "words": [
              {
                "text": "下棋非常需要耐心",
                "pinyin": "xia qi fei chang xu yao nai xin",
                "tone": "xià qí fēi cháng xū yào nài xīn",
                "pos": "sentence",
                "vi": "Chơi cờ rất cần kiên nhẫn."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l27",
            "pinyin": "xia qi fei chang xu yao nai xin",
            "tone": "xià qí fēi cháng xū yào nài xīn"
          }
        ]
      },
      {
        "id": "hsk5-l28",
        "no": 28,
        "titleZh": "最受欢迎的毕业生",
        "titleVi": "Sinh viên tốt nghiệp được yêu thích nhất",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "sinh viên tốt nghiệp",
            "hanzi": "毕业生",
            "words": [
              {
                "text": "毕业生",
                "pinyin": "bi ye sheng",
                "tone": "bì yè shēng",
                "pos": "noun",
                "vi": "sinh viên tốt nghiệp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "bi ye sheng",
            "tone": "bì yè shēng"
          },
          {
            "stage": "word",
            "vi": "hoan nghênh",
            "hanzi": "欢迎",
            "words": [
              {
                "text": "欢迎",
                "pinyin": "huan ying",
                "tone": "huān yíng",
                "pos": "verb",
                "vi": "hoan nghênh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "huan ying",
            "tone": "huān yíng"
          },
          {
            "stage": "word",
            "vi": "tuyển dụng",
            "hanzi": "招聘",
            "words": [
              {
                "text": "招聘",
                "pinyin": "zhao pin",
                "tone": "zhāo pìn",
                "pos": "verb",
                "vi": "tuyển dụng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "zhao pin",
            "tone": "zhāo pìn"
          },
          {
            "stage": "word",
            "vi": "năng lực",
            "hanzi": "能力",
            "words": [
              {
                "text": "能力",
                "pinyin": "neng li",
                "tone": "néng lì",
                "pos": "noun",
                "vi": "năng lực"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "neng li",
            "tone": "néng lì"
          },
          {
            "stage": "word",
            "vi": "kinh nghiệm",
            "hanzi": "经验",
            "words": [
              {
                "text": "经验",
                "pinyin": "jing yan",
                "tone": "jīng yàn",
                "pos": "noun",
                "vi": "kinh nghiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
          },
          {
            "stage": "word",
            "vi": "thái độ",
            "hanzi": "态度",
            "words": [
              {
                "text": "态度",
                "pinyin": "tai du",
                "tone": "tài dù",
                "pos": "noun",
                "vi": "thái độ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "tai du",
            "tone": "tài dù"
          },
          {
            "stage": "word",
            "vi": "hợp tác",
            "hanzi": "合作",
            "words": [
              {
                "text": "合作",
                "pinyin": "he zuo",
                "tone": "hé zuò",
                "pos": "verb",
                "vi": "hợp tác"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "he zuo",
            "tone": "hé zuò"
          },
          {
            "stage": "word",
            "vi": "cơ hội",
            "hanzi": "机会",
            "words": [
              {
                "text": "机会",
                "pinyin": "ji hui",
                "tone": "jī huì",
                "pos": "noun",
                "vi": "cơ hội"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "ji hui",
            "tone": "jī huì"
          },
          {
            "stage": "phrase",
            "vi": "sinh viên tốt nghiệp xuất sắc",
            "hanzi": "优秀毕业生",
            "words": [
              {
                "text": "优秀毕业生",
                "pinyin": "you xiu bi ye sheng",
                "tone": "yōu xiù bì yè shēng",
                "pos": "phrase",
                "vi": "sinh viên tốt nghiệp xuất sắc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "you xiu bi ye sheng",
            "tone": "yōu xiù bì yè shēng"
          },
          {
            "stage": "phrase",
            "vi": "được yêu thích",
            "hanzi": "受欢迎",
            "words": [
              {
                "text": "受欢迎",
                "pinyin": "shou huan ying",
                "tone": "shòu huān yíng",
                "pos": "phrase",
                "vi": "được yêu thích"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "shou huan ying",
            "tone": "shòu huān yíng"
          },
          {
            "stage": "phrase",
            "vi": "công ty tuyển dụng",
            "hanzi": "公司招聘",
            "words": [
              {
                "text": "公司招聘",
                "pinyin": "gong si zhao pin",
                "tone": "gōng sī zhāo pìn",
                "pos": "phrase",
                "vi": "công ty tuyển dụng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "gong si zhao pin",
            "tone": "gōng sī zhāo pìn"
          },
          {
            "stage": "phrase",
            "vi": "năng lực làm việc",
            "hanzi": "工作能力",
            "words": [
              {
                "text": "工作能力",
                "pinyin": "gong zuo neng li",
                "tone": "gōng zuò néng lì",
                "pos": "phrase",
                "vi": "năng lực làm việc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "gong zuo neng li",
            "tone": "gōng zuò néng lì"
          },
          {
            "stage": "phrase",
            "vi": "kinh nghiệm thực tập",
            "hanzi": "实习经验",
            "words": [
              {
                "text": "实习经验",
                "pinyin": "shi xi jing yan",
                "tone": "shí xí jīng yàn",
                "pos": "phrase",
                "vi": "kinh nghiệm thực tập"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "shi xi jing yan",
            "tone": "shí xí jīng yàn"
          },
          {
            "stage": "phrase",
            "vi": "thái độ nghiêm túc",
            "hanzi": "认真态度",
            "words": [
              {
                "text": "认真态度",
                "pinyin": "ren zhen tai du",
                "tone": "rèn zhēn tài dù",
                "pos": "phrase",
                "vi": "thái độ nghiêm túc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "ren zhen tai du",
            "tone": "rèn zhēn tài dù"
          },
          {
            "stage": "phrase",
            "vi": "hợp tác nhóm",
            "hanzi": "团队合作",
            "words": [
              {
                "text": "团队合作",
                "pinyin": "tuan dui he zuo",
                "tone": "tuán duì hé zuò",
                "pos": "phrase",
                "vi": "hợp tác nhóm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "tuan dui he zuo",
            "tone": "tuán duì hé zuò"
          },
          {
            "stage": "phrase",
            "vi": "có được cơ hội",
            "hanzi": "获得机会",
            "words": [
              {
                "text": "获得机会",
                "pinyin": "huo de ji hui",
                "tone": "huò dé jī huì",
                "pos": "phrase",
                "vi": "có được cơ hội"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "huo de ji hui",
            "tone": "huò dé jī huì"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy là sinh viên tốt nghiệp xuất sắc.",
            "hanzi": "他是优秀毕业生。",
            "words": [
              {
                "text": "他是优秀毕业生",
                "pinyin": "ta shi you xiu bi ye sheng",
                "tone": "tā shì yōu xiù bì yè shēng",
                "pos": "sentence",
                "vi": "Anh ấy là sinh viên tốt nghiệp xuất sắc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "ta shi you xiu bi ye sheng",
            "tone": "tā shì yōu xiù bì yè shēng"
          },
          {
            "stage": "sentence",
            "vi": "Kiểu sinh viên như vậy rất được yêu thích.",
            "hanzi": "这样的学生很受欢迎。",
            "words": [
              {
                "text": "这样的学生很受欢迎",
                "pinyin": "zhe yang de xue sheng hen shou huan ying",
                "tone": "zhè yàng de xué shēng hěn shòu huān yíng",
                "pos": "sentence",
                "vi": "Kiểu sinh viên như vậy rất được yêu thích."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "zhe yang de xue sheng hen shou huan ying",
            "tone": "zhè yàng de xué shēng hěn shòu huān yíng"
          },
          {
            "stage": "sentence",
            "vi": "Nhiều công ty đến trường tuyển dụng.",
            "hanzi": "很多公司来学校招聘。",
            "words": [
              {
                "text": "很多公司来学校招聘",
                "pinyin": "hen duo gong si lai xue xiao zhao pin",
                "tone": "hěn duō gōng sī lái xué xiào zhāo pìn",
                "pos": "sentence",
                "vi": "Nhiều công ty đến trường tuyển dụng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "hen duo gong si lai xue xiao zhao pin",
            "tone": "hěn duō gōng sī lái xué xiào zhāo pìn"
          },
          {
            "stage": "sentence",
            "vi": "Doanh nghiệp coi trọng năng lực làm việc.",
            "hanzi": "企业重视工作能力。",
            "words": [
              {
                "text": "企业重视工作能力",
                "pinyin": "qi ye zhong shi gong zuo neng li",
                "tone": "qǐ yè zhòng shì gōng zuò néng lì",
                "pos": "sentence",
                "vi": "Doanh nghiệp coi trọng năng lực làm việc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "qi ye zhong shi gong zuo neng li",
            "tone": "qǐ yè zhòng shì gōng zuò néng lì"
          },
          {
            "stage": "sentence",
            "vi": "Kinh nghiệm thực tập rất quan trọng.",
            "hanzi": "实习经验很重要。",
            "words": [
              {
                "text": "实习经验很重要",
                "pinyin": "shi xi jing yan hen zhong yao",
                "tone": "shí xí jīng yàn hěn zhòng yào",
                "pos": "sentence",
                "vi": "Kinh nghiệm thực tập rất quan trọng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "shi xi jing yan hen zhong yao",
            "tone": "shí xí jīng yàn hěn zhòng yào"
          },
          {
            "stage": "sentence",
            "vi": "Thái độ nghiêm túc khiến người khác yên tâm.",
            "hanzi": "认真态度让人放心。",
            "words": [
              {
                "text": "认真态度让人放心",
                "pinyin": "ren zhen tai du rang ren fang xin",
                "tone": "rèn zhēn tài dù ràng rén fàng xīn",
                "pos": "sentence",
                "vi": "Thái độ nghiêm túc khiến người khác yên tâm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "ren zhen tai du rang ren fang xin",
            "tone": "rèn zhēn tài dù ràng rén fàng xīn"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy giỏi hợp tác nhóm.",
            "hanzi": "他善于团队合作。",
            "words": [
              {
                "text": "他善于团队合作",
                "pinyin": "ta shan yu tuan dui he zuo",
                "tone": "tā shàn yú tuán duì hé zuò",
                "pos": "sentence",
                "vi": "Anh ấy giỏi hợp tác nhóm."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "ta shan yu tuan dui he zuo",
            "tone": "tā shàn yú tuán duì hé zuò"
          },
          {
            "stage": "sentence",
            "vi": "Người nỗ lực sẽ có được cơ hội.",
            "hanzi": "努力的人会获得机会。",
            "words": [
              {
                "text": "努力的人会获得机会",
                "pinyin": "nu li de ren hui huo de ji hui",
                "tone": "nǔ lì de rén huì huò dé jī huì",
                "pos": "sentence",
                "vi": "Người nỗ lực sẽ có được cơ hội."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l28",
            "pinyin": "nu li de ren hui huo de ji hui",
            "tone": "nǔ lì de rén huì huò dé jī huì"
          }
        ]
      },
      {
        "id": "hsk5-l29",
        "no": 29,
        "titleZh": "培养对手",
        "titleVi": "Bồi dưỡng đối thủ",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "bồi dưỡng",
            "hanzi": "培养",
            "words": [
              {
                "text": "培养",
                "pinyin": "pei yang",
                "tone": "péi yǎng",
                "pos": "verb",
                "vi": "bồi dưỡng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "pei yang",
            "tone": "péi yǎng"
          },
          {
            "stage": "word",
            "vi": "đối thủ",
            "hanzi": "对手",
            "words": [
              {
                "text": "对手",
                "pinyin": "dui shou",
                "tone": "duì shǒu",
                "pos": "noun",
                "vi": "đối thủ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "dui shou",
            "tone": "duì shǒu"
          },
          {
            "stage": "word",
            "vi": "cạnh tranh",
            "hanzi": "竞争",
            "words": [
              {
                "text": "竞争",
                "pinyin": "jing zheng",
                "tone": "jìng zhēng",
                "pos": "verb",
                "vi": "cạnh tranh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
          },
          {
            "stage": "word",
            "vi": "tiến bộ",
            "hanzi": "进步",
            "words": [
              {
                "text": "进步",
                "pinyin": "jin bu",
                "tone": "jìn bù",
                "pos": "verb",
                "vi": "tiến bộ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "jin bu",
            "tone": "jìn bù"
          },
          {
            "stage": "word",
            "vi": "áp lực",
            "hanzi": "压力",
            "words": [
              {
                "text": "压力",
                "pinyin": "ya li",
                "tone": "yā lì",
                "pos": "noun",
                "vi": "áp lực"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "ya li",
            "tone": "yā lì"
          },
          {
            "stage": "word",
            "vi": "mục tiêu",
            "hanzi": "目标",
            "words": [
              {
                "text": "目标",
                "pinyin": "mu biao",
                "tone": "mù biāo",
                "pos": "noun",
                "vi": "mục tiêu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "mu biao",
            "tone": "mù biāo"
          },
          {
            "stage": "word",
            "vi": "vượt qua",
            "hanzi": "超越",
            "words": [
              {
                "text": "超越",
                "pinyin": "chao yue",
                "tone": "chāo yuè",
                "pos": "verb",
                "vi": "vượt qua"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "chao yue",
            "tone": "chāo yuè"
          },
          {
            "stage": "word",
            "vi": "tôn trọng",
            "hanzi": "尊重",
            "words": [
              {
                "text": "尊重",
                "pinyin": "zun zhong",
                "tone": "zūn zhòng",
                "pos": "verb",
                "vi": "tôn trọng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "zun zhong",
            "tone": "zūn zhòng"
          },
          {
            "stage": "phrase",
            "vi": "rèn luyện năng lực",
            "hanzi": "培养能力",
            "words": [
              {
                "text": "培养能力",
                "pinyin": "pei yang neng li",
                "tone": "péi yǎng néng lì",
                "pos": "phrase",
                "vi": "rèn luyện năng lực"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "pei yang neng li",
            "tone": "péi yǎng néng lì"
          },
          {
            "stage": "phrase",
            "vi": "tôn trọng đối thủ",
            "hanzi": "尊重对手",
            "words": [
              {
                "text": "尊重对手",
                "pinyin": "zun zhong dui shou",
                "tone": "zūn zhòng duì shǒu",
                "pos": "phrase",
                "vi": "tôn trọng đối thủ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "zun zhong dui shou",
            "tone": "zūn zhòng duì shǒu"
          },
          {
            "stage": "phrase",
            "vi": "cạnh tranh công bằng",
            "hanzi": "公平竞争",
            "words": [
              {
                "text": "公平竞争",
                "pinyin": "gong ping jing zheng",
                "tone": "gōng píng jìng zhēng",
                "pos": "phrase",
                "vi": "cạnh tranh công bằng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "gong ping jing zheng",
            "tone": "gōng píng jìng zhēng"
          },
          {
            "stage": "phrase",
            "vi": "không ngừng tiến bộ",
            "hanzi": "不断进步",
            "words": [
              {
                "text": "不断进步",
                "pinyin": "bu duan jin bu",
                "tone": "bú duàn jìn bù",
                "pos": "phrase",
                "vi": "không ngừng tiến bộ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "bu duan jin bu",
            "tone": "bú duàn jìn bù"
          },
          {
            "stage": "phrase",
            "vi": "áp lực cạnh tranh",
            "hanzi": "竞争压力",
            "words": [
              {
                "text": "竞争压力",
                "pinyin": "jing zheng ya li",
                "tone": "jìng zhēng yā lì",
                "pos": "phrase",
                "vi": "áp lực cạnh tranh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "jing zheng ya li",
            "tone": "jìng zhēng yā lì"
          },
          {
            "stage": "phrase",
            "vi": "xác định mục tiêu",
            "hanzi": "明确目标",
            "words": [
              {
                "text": "明确目标",
                "pinyin": "ming que mu biao",
                "tone": "míng què mù biāo",
                "pos": "phrase",
                "vi": "xác định mục tiêu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "ming que mu biao",
            "tone": "míng què mù biāo"
          },
          {
            "stage": "phrase",
            "vi": "vượt qua bản thân",
            "hanzi": "超越自己",
            "words": [
              {
                "text": "超越自己",
                "pinyin": "chao yue zi ji",
                "tone": "chāo yuè zì jǐ",
                "pos": "phrase",
                "vi": "vượt qua bản thân"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "chao yue zi ji",
            "tone": "chāo yuè zì jǐ"
          },
          {
            "stage": "phrase",
            "vi": "tôn trọng lẫn nhau",
            "hanzi": "互相尊重",
            "words": [
              {
                "text": "互相尊重",
                "pinyin": "hu xiang zun zhong",
                "tone": "hù xiāng zūn zhòng",
                "pos": "phrase",
                "vi": "tôn trọng lẫn nhau"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "hu xiang zun zhong",
            "tone": "hù xiāng zūn zhòng"
          },
          {
            "stage": "sentence",
            "vi": "Cạnh tranh có thể rèn luyện năng lực.",
            "hanzi": "竞争能培养能力。",
            "words": [
              {
                "text": "竞争能培养能力",
                "pinyin": "jing zheng neng pei yang neng li",
                "tone": "jìng zhēng néng péi yǎng néng lì",
                "pos": "sentence",
                "vi": "Cạnh tranh có thể rèn luyện năng lực."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "jing zheng neng pei yang neng li",
            "tone": "jìng zhēng néng péi yǎng néng lì"
          },
          {
            "stage": "sentence",
            "vi": "Cao thủ thật sự tôn trọng đối thủ.",
            "hanzi": "真正的高手尊重对手。",
            "words": [
              {
                "text": "真正的高手尊重对手",
                "pinyin": "zhen zheng de gao shou zun zhong dui shou",
                "tone": "zhēn zhèng de gāo shǒu zūn zhòng duì shǒu",
                "pos": "sentence",
                "vi": "Cao thủ thật sự tôn trọng đối thủ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "zhen zheng de gao shou zun zhong dui shou",
            "tone": "zhēn zhèng de gāo shǒu zūn zhòng duì shǒu"
          },
          {
            "stage": "sentence",
            "vi": "Cạnh tranh công bằng thúc đẩy tiến bộ.",
            "hanzi": "公平竞争能促进进步。",
            "words": [
              {
                "text": "公平竞争能促进进步",
                "pinyin": "gong ping jing zheng neng cu jin jin bu",
                "tone": "gōng píng jìng zhēng néng cù jìn jìn bù",
                "pos": "sentence",
                "vi": "Cạnh tranh công bằng thúc đẩy tiến bộ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "gong ping jing zheng neng cu jin jin bu",
            "tone": "gōng píng jìng zhēng néng cù jìn jìn bù"
          },
          {
            "stage": "sentence",
            "vi": "Có đối thủ mới không ngừng tiến bộ.",
            "hanzi": "有对手才会不断进步。",
            "words": [
              {
                "text": "有对手才会不断进步",
                "pinyin": "you dui shou cai hui bu duan jin bu",
                "tone": "yǒu duì shǒu cái huì bú duàn jìn bù",
                "pos": "sentence",
                "vi": "Có đối thủ mới không ngừng tiến bộ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "you dui shou cai hui bu duan jin bu",
            "tone": "yǒu duì shǒu cái huì bú duàn jìn bù"
          },
          {
            "stage": "sentence",
            "vi": "Áp lực cạnh tranh khiến anh ấy nỗ lực.",
            "hanzi": "竞争压力让他努力。",
            "words": [
              {
                "text": "竞争压力让他努力",
                "pinyin": "jing zheng ya li rang ta nu li",
                "tone": "jìng zhēng yā lì ràng tā nǔ lì",
                "pos": "sentence",
                "vi": "Áp lực cạnh tranh khiến anh ấy nỗ lực."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "jing zheng ya li rang ta nu li",
            "tone": "jìng zhēng yā lì ràng tā nǔ lì"
          },
          {
            "stage": "sentence",
            "vi": "Đối thủ khiến mục tiêu rõ ràng hơn.",
            "hanzi": "对手让目标更明确。",
            "words": [
              {
                "text": "对手让目标更明确",
                "pinyin": "dui shou rang mu biao geng ming que",
                "tone": "duì shǒu ràng mù biāo gèng míng què",
                "pos": "sentence",
                "vi": "Đối thủ khiến mục tiêu rõ ràng hơn."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "dui shou rang mu biao geng ming que",
            "tone": "duì shǒu ràng mù biāo gèng míng què"
          },
          {
            "stage": "sentence",
            "vi": "Quan trọng nhất là vượt qua bản thân.",
            "hanzi": "最重要的是超越自己。",
            "words": [
              {
                "text": "最重要的是超越自己",
                "pinyin": "zui zhong yao de shi chao yue zi ji",
                "tone": "zuì zhòng yào de shì chāo yuè zì jǐ",
                "pos": "sentence",
                "vi": "Quan trọng nhất là vượt qua bản thân."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "zui zhong yao de shi chao yue zi ji",
            "tone": "zuì zhòng yào de shì chāo yuè zì jǐ"
          },
          {
            "stage": "sentence",
            "vi": "Các đối thủ cũng cần tôn trọng lẫn nhau.",
            "hanzi": "对手之间也要互相尊重。",
            "words": [
              {
                "text": "对手之间也要互相尊重",
                "pinyin": "dui shou zhi jian ye yao hu xiang zun zhong",
                "tone": "duì shǒu zhī jiān yě yào hù xiāng zūn zhòng",
                "pos": "sentence",
                "vi": "Các đối thủ cũng cần tôn trọng lẫn nhau."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l29",
            "pinyin": "dui shou zhi jian ye yao hu xiang zun zhong",
            "tone": "duì shǒu zhī jiān yě yào hù xiāng zūn zhòng"
          }
        ]
      },
      {
        "id": "hsk5-l30",
        "no": 30,
        "titleZh": "竞争让市场更高效",
        "titleVi": "Cạnh tranh làm thị trường hiệu quả hơn",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "cạnh tranh",
            "hanzi": "竞争",
            "words": [
              {
                "text": "竞争",
                "pinyin": "jing zheng",
                "tone": "jìng zhēng",
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
          },
          {
            "stage": "word",
            "vi": "thị trường",
            "hanzi": "市场",
            "words": [
              {
                "text": "市场",
                "pinyin": "shi chang",
                "tone": "shì chǎng",
                "pos": "noun",
                "vi": "thị trường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "shi chang",
            "tone": "shì chǎng"
          },
          {
            "stage": "word",
            "vi": "hiệu quả cao",
            "hanzi": "高效",
            "words": [
              {
                "text": "高效",
                "pinyin": "gao xiao",
                "tone": "gāo xiào",
                "pos": "adj",
                "vi": "hiệu quả cao"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "gao xiao",
            "tone": "gāo xiào"
          },
          {
            "stage": "word",
            "vi": "doanh nghiệp",
            "hanzi": "企业",
            "words": [
              {
                "text": "企业",
                "pinyin": "qi ye",
                "tone": "qǐ yè",
                "pos": "noun",
                "vi": "doanh nghiệp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "qi ye",
            "tone": "qǐ yè"
          },
          {
            "stage": "word",
            "vi": "khách hàng",
            "hanzi": "顾客",
            "words": [
              {
                "text": "顾客",
                "pinyin": "gu ke",
                "tone": "gù kè",
                "pos": "noun",
                "vi": "khách hàng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "gu ke",
            "tone": "gù kè"
          },
          {
            "stage": "word",
            "vi": "giá cả",
            "hanzi": "价格",
            "words": [
              {
                "text": "价格",
                "pinyin": "jia ge",
                "tone": "jià gé",
                "pos": "noun",
                "vi": "giá cả"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "jia ge",
            "tone": "jià gé"
          },
          {
            "stage": "word",
            "vi": "chất lượng",
            "hanzi": "质量",
            "words": [
              {
                "text": "质量",
                "pinyin": "zhi liang",
                "tone": "zhì liàng",
                "pos": "noun",
                "vi": "chất lượng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "zhi liang",
            "tone": "zhì liàng"
          },
          {
            "stage": "word",
            "vi": "đổi mới",
            "hanzi": "创新",
            "words": [
              {
                "text": "创新",
                "pinyin": "chuang xin",
                "tone": "chuàng xīn",
                "pos": "verb",
                "vi": "đổi mới"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "chuang xin",
            "tone": "chuàng xīn"
          },
          {
            "stage": "phrase",
            "vi": "cạnh tranh thị trường",
            "hanzi": "市场竞争",
            "words": [
              {
                "text": "市场竞争",
                "pinyin": "shi chang jing zheng",
                "tone": "shì chǎng jìng zhēng",
                "pos": "phrase",
                "vi": "cạnh tranh thị trường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "shi chang jing zheng",
            "tone": "shì chǎng jìng zhēng"
          },
          {
            "stage": "phrase",
            "vi": "tìm hiểu thị trường",
            "hanzi": "了解市场",
            "words": [
              {
                "text": "了解市场",
                "pinyin": "liao jie shi chang",
                "tone": "liǎo jiě shì chǎng",
                "pos": "phrase",
                "vi": "tìm hiểu thị trường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "liao jie shi chang",
            "tone": "liǎo jiě shì chǎng"
          },
          {
            "stage": "phrase",
            "vi": "dịch vụ hiệu quả",
            "hanzi": "高效服务",
            "words": [
              {
                "text": "高效服务",
                "pinyin": "gao xiao fu wu",
                "tone": "gāo xiào fú wù",
                "pos": "phrase",
                "vi": "dịch vụ hiệu quả"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "gao xiao fu wu",
            "tone": "gāo xiào fú wù"
          },
          {
            "stage": "phrase",
            "vi": "phát triển doanh nghiệp",
            "hanzi": "企业发展",
            "words": [
              {
                "text": "企业发展",
                "pinyin": "qi ye fa zhan",
                "tone": "qǐ yè fā zhǎn",
                "pos": "phrase",
                "vi": "phát triển doanh nghiệp"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "qi ye fa zhan",
            "tone": "qǐ yè fā zhǎn"
          },
          {
            "stage": "phrase",
            "vi": "phục vụ khách hàng",
            "hanzi": "服务顾客",
            "words": [
              {
                "text": "服务顾客",
                "pinyin": "fu wu gu ke",
                "tone": "fú wù gù kè",
                "pos": "phrase",
                "vi": "phục vụ khách hàng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "fu wu gu ke",
            "tone": "fú wù gù kè"
          },
          {
            "stage": "phrase",
            "vi": "hạ giá",
            "hanzi": "降低价格",
            "words": [
              {
                "text": "降低价格",
                "pinyin": "jiang di jia ge",
                "tone": "jiàng dī jià gé",
                "pos": "phrase",
                "vi": "hạ giá"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "jiang di jia ge",
            "tone": "jiàng dī jià gé"
          },
          {
            "stage": "phrase",
            "vi": "nâng cao chất lượng",
            "hanzi": "提高质量",
            "words": [
              {
                "text": "提高质量",
                "pinyin": "ti gao zhi liang",
                "tone": "tí gāo zhì liàng",
                "pos": "phrase",
                "vi": "nâng cao chất lượng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "ti gao zhi liang",
            "tone": "tí gāo zhì liàng"
          },
          {
            "stage": "phrase",
            "vi": "không ngừng đổi mới",
            "hanzi": "不断创新",
            "words": [
              {
                "text": "不断创新",
                "pinyin": "bu duan chuang xin",
                "tone": "bú duàn chuàng xīn",
                "pos": "phrase",
                "vi": "không ngừng đổi mới"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "bu duan chuang xin",
            "tone": "bú duàn chuàng xīn"
          },
          {
            "stage": "sentence",
            "vi": "Cạnh tranh thị trường ngày càng gay gắt.",
            "hanzi": "市场竞争越来越激烈。",
            "words": [
              {
                "text": "市场竞争越来越激烈",
                "pinyin": "shi chang jing zheng yue lai yue ji lie",
                "tone": "shì chǎng jìng zhēng yuè lái yuè jī liè",
                "pos": "sentence",
                "vi": "Cạnh tranh thị trường ngày càng gay gắt."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "shi chang jing zheng yue lai yue ji lie",
            "tone": "shì chǎng jìng zhēng yuè lái yuè jī liè"
          },
          {
            "stage": "sentence",
            "vi": "Doanh nghiệp phải tìm hiểu thị trường.",
            "hanzi": "企业必须了解市场。",
            "words": [
              {
                "text": "企业必须了解市场",
                "pinyin": "qi ye bi xu liao jie shi chang",
                "tone": "qǐ yè bì xū liǎo jiě shì chǎng",
                "pos": "sentence",
                "vi": "Doanh nghiệp phải tìm hiểu thị trường."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "qi ye bi xu liao jie shi chang",
            "tone": "qǐ yè bì xū liǎo jiě shì chǎng"
          },
          {
            "stage": "sentence",
            "vi": "Dịch vụ hiệu quả cao có thể thu hút khách hàng.",
            "hanzi": "高效服务能吸引顾客。",
            "words": [
              {
                "text": "高效服务能吸引顾客",
                "pinyin": "gao xiao fu wu neng xi yin gu ke",
                "tone": "gāo xiào fú wù néng xī yǐn gù kè",
                "pos": "sentence",
                "vi": "Dịch vụ hiệu quả cao có thể thu hút khách hàng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "gao xiao fu wu neng xi yin gu ke",
            "tone": "gāo xiào fú wù néng xī yǐn gù kè"
          },
          {
            "stage": "sentence",
            "vi": "Doanh nghiệp phát triển cần đổi mới.",
            "hanzi": "企业发展需要创新。",
            "words": [
              {
                "text": "企业发展需要创新",
                "pinyin": "qi ye fa zhan xu yao chuang xin",
                "tone": "qǐ yè fā zhǎn xū yào chuàng xīn",
                "pos": "sentence",
                "vi": "Doanh nghiệp phát triển cần đổi mới."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "qi ye fa zhan xu yao chuang xin",
            "tone": "qǐ yè fā zhǎn xū yào chuàng xīn"
          },
          {
            "stage": "sentence",
            "vi": "Cửa hàng cần phục vụ khách hàng nghiêm túc.",
            "hanzi": "商店要认真服务顾客。",
            "words": [
              {
                "text": "商店要认真服务顾客",
                "pinyin": "shang dian yao ren zhen fu wu gu ke",
                "tone": "shāng diàn yào rèn zhēn fú wù gù kè",
                "pos": "sentence",
                "vi": "Cửa hàng cần phục vụ khách hàng nghiêm túc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "shang dian yao ren zhen fu wu gu ke",
            "tone": "shāng diàn yào rèn zhēn fú wù gù kè"
          },
          {
            "stage": "sentence",
            "vi": "Cạnh tranh có thể làm giảm giá.",
            "hanzi": "竞争可能降低价格。",
            "words": [
              {
                "text": "竞争可能降低价格",
                "pinyin": "jing zheng ke neng jiang di jia ge",
                "tone": "jìng zhēng kě néng jiàng dī jià gé",
                "pos": "sentence",
                "vi": "Cạnh tranh có thể làm giảm giá."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "jing zheng ke neng jiang di jia ge",
            "tone": "jìng zhēng kě néng jiàng dī jià gé"
          },
          {
            "stage": "sentence",
            "vi": "Công ty nỗ lực nâng cao chất lượng.",
            "hanzi": "公司努力提高质量。",
            "words": [
              {
                "text": "公司努力提高质量",
                "pinyin": "gong si nu li ti gao zhi liang",
                "tone": "gōng sī nǔ lì tí gāo zhì liàng",
                "pos": "sentence",
                "vi": "Công ty nỗ lực nâng cao chất lượng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "gong si nu li ti gao zhi liang",
            "tone": "gōng sī nǔ lì tí gāo zhì liàng"
          },
          {
            "stage": "sentence",
            "vi": "Không đổi mới thì không có phát triển.",
            "hanzi": "没有创新就没有发展。",
            "words": [
              {
                "text": "没有创新就没有发展",
                "pinyin": "mei you chuang xin jiu mei you fa zhan",
                "tone": "méi yǒu chuàng xīn jiù méi yǒu fā zhǎn",
                "pos": "sentence",
                "vi": "Không đổi mới thì không có phát triển."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l30",
            "pinyin": "mei you chuang xin jiu mei you fa zhan",
            "tone": "méi yǒu chuàng xīn jiù méi yǒu fā zhǎn"
          }
        ]
      },
      {
        "id": "hsk5-l31",
        "no": 31,
        "titleZh": "登门槛效应",
        "titleVi": "Hiệu ứng ngưỡng cửa",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "ngưỡng cửa",
            "hanzi": "门槛",
            "words": [
              {
                "text": "门槛",
                "pinyin": "men kan",
                "tone": "mén kǎn",
                "pos": "noun",
                "vi": "ngưỡng cửa"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "men kan",
            "tone": "mén kǎn"
          },
          {
            "stage": "word",
            "vi": "hiệu ứng",
            "hanzi": "效应",
            "words": [
              {
                "text": "效应",
                "pinyin": "xiao ying",
                "tone": "xiào yìng",
                "pos": "noun",
                "vi": "hiệu ứng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "xiao ying",
            "tone": "xiào yìng"
          },
          {
            "stage": "word",
            "vi": "yêu cầu",
            "hanzi": "请求",
            "words": [
              {
                "text": "请求",
                "pinyin": "qing qiu",
                "tone": "qǐng qiú",
                "pos": "verb",
                "vi": "yêu cầu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "qing qiu",
            "tone": "qǐng qiú"
          },
          {
            "stage": "word",
            "vi": "chấp nhận",
            "hanzi": "接受",
            "words": [
              {
                "text": "接受",
                "pinyin": "jie shou",
                "tone": "jiē shòu",
                "pos": "verb",
                "vi": "chấp nhận"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "jie shou",
            "tone": "jiē shòu"
          },
          {
            "stage": "word",
            "vi": "tâm lý",
            "hanzi": "心理",
            "words": [
              {
                "text": "心理",
                "pinyin": "xin li",
                "tone": "xīn lǐ",
                "pos": "noun",
                "vi": "tâm lý"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "xin li",
            "tone": "xīn lǐ"
          },
          {
            "stage": "word",
            "vi": "từng bước",
            "hanzi": "逐步",
            "words": [
              {
                "text": "逐步",
                "pinyin": "zhu bu",
                "tone": "zhú bù",
                "pos": "adv",
                "vi": "từng bước"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "zhu bu",
            "tone": "zhú bù"
          },
          {
            "stage": "word",
            "vi": "đồng ý",
            "hanzi": "同意",
            "words": [
              {
                "text": "同意",
                "pinyin": "tong yi",
                "tone": "tóng yì",
                "pos": "verb",
                "vi": "đồng ý"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "tong yi",
            "tone": "tóng yì"
          },
          {
            "stage": "word",
            "vi": "ảnh hưởng",
            "hanzi": "影响",
            "words": [
              {
                "text": "影响",
                "pinyin": "ying xiang",
                "tone": "yǐng xiǎng",
                "pos": "verb",
                "vi": "ảnh hưởng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "ying xiang",
            "tone": "yǐng xiǎng"
          },
          {
            "stage": "phrase",
            "vi": "bước qua ngưỡng cửa",
            "hanzi": "登门槛",
            "words": [
              {
                "text": "登门槛",
                "pinyin": "deng men kan",
                "tone": "dēng mén kǎn",
                "pos": "phrase",
                "vi": "bước qua ngưỡng cửa"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "deng men kan",
            "tone": "dēng mén kǎn"
          },
          {
            "stage": "phrase",
            "vi": "hiệu ứng ngưỡng cửa",
            "hanzi": "门槛效应",
            "words": [
              {
                "text": "门槛效应",
                "pinyin": "men kan xiao ying",
                "tone": "mén kǎn xiào yìng",
                "pos": "phrase",
                "vi": "hiệu ứng ngưỡng cửa"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "men kan xiao ying",
            "tone": "mén kǎn xiào yìng"
          },
          {
            "stage": "phrase",
            "vi": "đưa ra yêu cầu",
            "hanzi": "提出请求",
            "words": [
              {
                "text": "提出请求",
                "pinyin": "ti chu qing qiu",
                "tone": "tí chū qǐng qiú",
                "pos": "phrase",
                "vi": "đưa ra yêu cầu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "ti chu qing qiu",
            "tone": "tí chū qǐng qiú"
          },
          {
            "stage": "phrase",
            "vi": "dễ chấp nhận",
            "hanzi": "容易接受",
            "words": [
              {
                "text": "容易接受",
                "pinyin": "rong yi jie shou",
                "tone": "róng yì jiē shòu",
                "pos": "phrase",
                "vi": "dễ chấp nhận"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "rong yi jie shou",
            "tone": "róng yì jiē shòu"
          },
          {
            "stage": "phrase",
            "vi": "thay đổi tâm lý",
            "hanzi": "心理变化",
            "words": [
              {
                "text": "心理变化",
                "pinyin": "xin li bian hua",
                "tone": "xīn lǐ biàn huà",
                "pos": "phrase",
                "vi": "thay đổi tâm lý"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "xin li bian hua",
            "tone": "xīn lǐ biàn huà"
          },
          {
            "stage": "phrase",
            "vi": "nâng cao từng bước",
            "hanzi": "逐步提高",
            "words": [
              {
                "text": "逐步提高",
                "pinyin": "zhu bu ti gao",
                "tone": "zhú bù tí gāo",
                "pos": "phrase",
                "vi": "nâng cao từng bước"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "zhu bu ti gao",
            "tone": "zhú bù tí gāo"
          },
          {
            "stage": "phrase",
            "vi": "đồng ý giúp đỡ",
            "hanzi": "同意帮忙",
            "words": [
              {
                "text": "同意帮忙",
                "pinyin": "tong yi bang mang",
                "tone": "tóng yì bāng máng",
                "pos": "phrase",
                "vi": "đồng ý giúp đỡ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "tong yi bang mang",
            "tone": "tóng yì bāng máng"
          },
          {
            "stage": "phrase",
            "vi": "ảnh hưởng quyết định",
            "hanzi": "影响决定",
            "words": [
              {
                "text": "影响决定",
                "pinyin": "ying xiang jue ding",
                "tone": "yǐng xiǎng jué dìng",
                "pos": "phrase",
                "vi": "ảnh hưởng quyết định"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "ying xiang jue ding",
            "tone": "yǐng xiǎng jué dìng"
          },
          {
            "stage": "sentence",
            "vi": "Trước hết hãy để anh ấy bước qua ngưỡng nhỏ.",
            "hanzi": "先请他登上小门槛。",
            "words": [
              {
                "text": "先请他登上小门槛",
                "pinyin": "xian qing ta deng shang xiao men kan",
                "tone": "xiān qǐng tā dēng shàng xiǎo mén kǎn",
                "pos": "sentence",
                "vi": "Trước hết hãy để anh ấy bước qua ngưỡng nhỏ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "xian qing ta deng shang xiao men kan",
            "tone": "xiān qǐng tā dēng shàng xiǎo mén kǎn"
          },
          {
            "stage": "sentence",
            "vi": "Đây chính là hiệu ứng ngưỡng cửa.",
            "hanzi": "这就是门槛效应。",
            "words": [
              {
                "text": "这就是门槛效应",
                "pinyin": "zhe jiu shi men kan xiao ying",
                "tone": "zhè jiù shì mén kǎn xiào yìng",
                "pos": "sentence",
                "vi": "Đây chính là hiệu ứng ngưỡng cửa."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "zhe jiu shi men kan xiao ying",
            "tone": "zhè jiù shì mén kǎn xiào yìng"
          },
          {
            "stage": "sentence",
            "vi": "Trước tiên hãy đưa ra một yêu cầu nhỏ.",
            "hanzi": "先提出一个小请求。",
            "words": [
              {
                "text": "先提出一个小请求",
                "pinyin": "xian ti chu yi ge xiao qing qiu",
                "tone": "xiān tí chū yí gè xiǎo qǐng qiú",
                "pos": "sentence",
                "vi": "Trước tiên hãy đưa ra một yêu cầu nhỏ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "xian ti chu yi ge xiao qing qiu",
            "tone": "xiān tí chū yí gè xiǎo qǐng qiú"
          },
          {
            "stage": "sentence",
            "vi": "Yêu cầu nhỏ dễ được chấp nhận hơn.",
            "hanzi": "小请求更容易接受。",
            "words": [
              {
                "text": "小请求更容易接受",
                "pinyin": "xiao qing qiu geng rong yi jie shou",
                "tone": "xiǎo qǐng qiú gèng róng yì jiē shòu",
                "pos": "sentence",
                "vi": "Yêu cầu nhỏ dễ được chấp nhận hơn."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "xiao qing qiu geng rong yi jie shou",
            "tone": "xiǎo qǐng qiú gèng róng yì jiē shòu"
          },
          {
            "stage": "sentence",
            "vi": "Tâm lý con người sẽ dần thay đổi.",
            "hanzi": "人的心理会慢慢变化。",
            "words": [
              {
                "text": "人的心理会慢慢变化",
                "pinyin": "ren de xin li hui man man bian hua",
                "tone": "rén de xīn lǐ huì màn màn biàn huà",
                "pos": "sentence",
                "vi": "Tâm lý con người sẽ dần thay đổi."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "ren de xin li hui man man bian hua",
            "tone": "rén de xīn lǐ huì màn màn biàn huà"
          },
          {
            "stage": "sentence",
            "vi": "Yêu cầu có thể nâng cao từng bước.",
            "hanzi": "要求可以逐步提高。",
            "words": [
              {
                "text": "要求可以逐步提高",
                "pinyin": "yao qiu ke yi zhu bu ti gao",
                "tone": "yāo qiú kě yǐ zhú bù tí gāo",
                "pos": "sentence",
                "vi": "Yêu cầu có thể nâng cao từng bước."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "yao qiu ke yi zhu bu ti gao",
            "tone": "yāo qiú kě yǐ zhú bù tí gāo"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy đồng ý giúp một việc nhỏ.",
            "hanzi": "他同意帮一个小忙。",
            "words": [
              {
                "text": "他同意帮一个小忙",
                "pinyin": "ta tong yi bang yi ge xiao mang",
                "tone": "tā tóng yì bāng yí gè xiǎo máng",
                "pos": "sentence",
                "vi": "Anh ấy đồng ý giúp một việc nhỏ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "ta tong yi bang yi ge xiao mang",
            "tone": "tā tóng yì bāng yí gè xiǎo máng"
          },
          {
            "stage": "sentence",
            "vi": "Bước đầu tiên sẽ ảnh hưởng đến quyết định.",
            "hanzi": "第一步会影响决定。",
            "words": [
              {
                "text": "第一步会影响决定",
                "pinyin": "di yi bu hui ying xiang jue ding",
                "tone": "dì yī bù huì yǐng xiǎng jué dìng",
                "pos": "sentence",
                "vi": "Bước đầu tiên sẽ ảnh hưởng đến quyết định."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l31",
            "pinyin": "di yi bu hui ying xiang jue ding",
            "tone": "dì yī bù huì yǐng xiǎng jué dìng"
          }
        ]
      },
      {
        "id": "hsk5-l32",
        "no": 32,
        "titleZh": "身边的环保",
        "titleVi": "Bảo vệ môi trường quanh ta",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "xung quanh",
            "hanzi": "身边",
            "words": [
              {
                "text": "身边",
                "pinyin": "shen bian",
                "tone": "shēn biān",
                "pos": "noun",
                "vi": "xung quanh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "shen bian",
            "tone": "shēn biān"
          },
          {
            "stage": "word",
            "vi": "bảo vệ môi trường",
            "hanzi": "环保",
            "words": [
              {
                "text": "环保",
                "pinyin": "huan bao",
                "tone": "huán bǎo",
                "pos": "noun",
                "vi": "bảo vệ môi trường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "huan bao",
            "tone": "huán bǎo"
          },
          {
            "stage": "word",
            "vi": "tài nguyên",
            "hanzi": "资源",
            "words": [
              {
                "text": "资源",
                "pinyin": "zi yuan",
                "tone": "zī yuán",
                "pos": "noun",
                "vi": "tài nguyên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "zi yuan",
            "tone": "zī yuán"
          },
          {
            "stage": "word",
            "vi": "rác",
            "hanzi": "垃圾",
            "words": [
              {
                "text": "垃圾",
                "pinyin": "la ji",
                "tone": "lā jī",
                "pos": "noun",
                "vi": "rác"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "la ji",
            "tone": "lā jī"
          },
          {
            "stage": "word",
            "vi": "túi ni lông",
            "hanzi": "塑料袋",
            "words": [
              {
                "text": "塑料袋",
                "pinyin": "su liao dai",
                "tone": "sù liào dài",
                "pos": "noun",
                "vi": "túi ni lông"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "su liao dai",
            "tone": "sù liào dài"
          },
          {
            "stage": "word",
            "vi": "tiết kiệm",
            "hanzi": "节约",
            "words": [
              {
                "text": "节约",
                "pinyin": "jie yue",
                "tone": "jié yuē",
                "pos": "verb",
                "vi": "tiết kiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "jie yue",
            "tone": "jié yuē"
          },
          {
            "stage": "word",
            "vi": "thói quen",
            "hanzi": "习惯",
            "words": [
              {
                "text": "习惯",
                "pinyin": "xi guan",
                "tone": "xí guàn",
                "pos": "noun",
                "vi": "thói quen"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "xi guan",
            "tone": "xí guàn"
          },
          {
            "stage": "word",
            "vi": "hành động",
            "hanzi": "行动",
            "words": [
              {
                "text": "行动",
                "pinyin": "xing dong",
                "tone": "xíng dòng",
                "pos": "noun",
                "vi": "hành động"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "xing dong",
            "tone": "xíng dòng"
          },
          {
            "stage": "phrase",
            "vi": "việc nhỏ xung quanh",
            "hanzi": "身边小事",
            "words": [
              {
                "text": "身边小事",
                "pinyin": "shen bian xiao shi",
                "tone": "shēn biān xiǎo shì",
                "pos": "phrase",
                "vi": "việc nhỏ xung quanh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "shen bian xiao shi",
            "tone": "shēn biān xiǎo shì"
          },
          {
            "stage": "phrase",
            "vi": "ủng hộ bảo vệ môi trường",
            "hanzi": "支持环保",
            "words": [
              {
                "text": "支持环保",
                "pinyin": "zhi chi huan bao",
                "tone": "zhī chí huán bǎo",
                "pos": "phrase",
                "vi": "ủng hộ bảo vệ môi trường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "zhi chi huan bao",
            "tone": "zhī chí huán bǎo"
          },
          {
            "stage": "phrase",
            "vi": "tiết kiệm tài nguyên",
            "hanzi": "节约资源",
            "words": [
              {
                "text": "节约资源",
                "pinyin": "jie yue zi yuan",
                "tone": "jié yuē zī yuán",
                "pos": "phrase",
                "vi": "tiết kiệm tài nguyên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "jie yue zi yuan",
            "tone": "jié yuē zī yuán"
          },
          {
            "stage": "phrase",
            "vi": "phân loại rác",
            "hanzi": "垃圾分类",
            "words": [
              {
                "text": "垃圾分类",
                "pinyin": "la ji fen lei",
                "tone": "lā jī fēn lèi",
                "pos": "phrase",
                "vi": "phân loại rác"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "la ji fen lei",
            "tone": "lā jī fēn lèi"
          },
          {
            "stage": "phrase",
            "vi": "dùng ít túi ni lông",
            "hanzi": "少用塑料袋",
            "words": [
              {
                "text": "少用塑料袋",
                "pinyin": "shao yong su liao dai",
                "tone": "shǎo yòng sù liào dài",
                "pos": "phrase",
                "vi": "dùng ít túi ni lông"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "shao yong su liao dai",
            "tone": "shǎo yòng sù liào dài"
          },
          {
            "stage": "phrase",
            "vi": "tiết kiệm điện",
            "hanzi": "节约用电",
            "words": [
              {
                "text": "节约用电",
                "pinyin": "jie yue yong dian",
                "tone": "jié yuē yòng diàn",
                "pos": "phrase",
                "vi": "tiết kiệm điện"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "jie yue yong dian",
            "tone": "jié yuē yòng diàn"
          },
          {
            "stage": "phrase",
            "vi": "thói quen bảo vệ môi trường",
            "hanzi": "环保习惯",
            "words": [
              {
                "text": "环保习惯",
                "pinyin": "huan bao xi guan",
                "tone": "huán bǎo xí guàn",
                "pos": "phrase",
                "vi": "thói quen bảo vệ môi trường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "huan bao xi guan",
            "tone": "huán bǎo xí guàn"
          },
          {
            "stage": "phrase",
            "vi": "hành động ngay",
            "hanzi": "马上行动",
            "words": [
              {
                "text": "马上行动",
                "pinyin": "ma shang xing dong",
                "tone": "mǎ shàng xíng dòng",
                "pos": "phrase",
                "vi": "hành động ngay"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "ma shang xing dong",
            "tone": "mǎ shàng xíng dòng"
          },
          {
            "stage": "sentence",
            "vi": "Bảo vệ môi trường có thể bắt đầu từ việc nhỏ xung quanh.",
            "hanzi": "环保可以从身边小事做起。",
            "words": [
              {
                "text": "环保可以从身边小事做起",
                "pinyin": "huan bao ke yi cong shen bian xiao shi zuo qi",
                "tone": "huán bǎo kě yǐ cóng shēn biān xiǎo shì zuò qǐ",
                "pos": "sentence",
                "vi": "Bảo vệ môi trường có thể bắt đầu từ việc nhỏ xung quanh."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "huan bao ke yi cong shen bian xiao shi zuo qi",
            "tone": "huán bǎo kě yǐ cóng shēn biān xiǎo shì zuò qǐ"
          },
          {
            "stage": "sentence",
            "vi": "Ngày càng nhiều người ủng hộ bảo vệ môi trường.",
            "hanzi": "越来越多人支持环保。",
            "words": [
              {
                "text": "越来越多人支持环保",
                "pinyin": "yue lai yue duo ren zhi chi huan bao",
                "tone": "yuè lái yuè duō rén zhī chí huán bǎo",
                "pos": "sentence",
                "vi": "Ngày càng nhiều người ủng hộ bảo vệ môi trường."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "yue lai yue duo ren zhi chi huan bao",
            "tone": "yuè lái yuè duō rén zhī chí huán bǎo"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần tiết kiệm tài nguyên.",
            "hanzi": "我们要节约资源。",
            "words": [
              {
                "text": "我们要节约资源",
                "pinyin": "wo men yao jie yue zi yuan",
                "tone": "wǒ men yào jié yuē zī yuán",
                "pos": "sentence",
                "vi": "Chúng ta cần tiết kiệm tài nguyên."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "wo men yao jie yue zi yuan",
            "tone": "wǒ men yào jié yuē zī yuán"
          },
          {
            "stage": "sentence",
            "vi": "Khu dân cư bắt đầu phân loại rác.",
            "hanzi": "社区开始垃圾分类。",
            "words": [
              {
                "text": "社区开始垃圾分类",
                "pinyin": "she qu kai shi la ji fen lei",
                "tone": "shè qū kāi shǐ lā jī fēn lèi",
                "pos": "sentence",
                "vi": "Khu dân cư bắt đầu phân loại rác."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "she qu kai shi la ji fen lei",
            "tone": "shè qū kāi shǐ lā jī fēn lèi"
          },
          {
            "stage": "sentence",
            "vi": "Khi mua sắm hãy dùng ít túi ni lông.",
            "hanzi": "购物时少用塑料袋。",
            "words": [
              {
                "text": "购物时少用塑料袋",
                "pinyin": "gou wu shi shao yong su liao dai",
                "tone": "gòu wù shí shǎo yòng sù liào dài",
                "pos": "sentence",
                "vi": "Khi mua sắm hãy dùng ít túi ni lông."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "gou wu shi shao yong su liao dai",
            "tone": "gòu wù shí shǎo yòng sù liào dài"
          },
          {
            "stage": "sentence",
            "vi": "Rời phòng cần tiết kiệm điện.",
            "hanzi": "离开房间要节约用电。",
            "words": [
              {
                "text": "离开房间要节约用电",
                "pinyin": "li kai fang jian yao jie yue yong dian",
                "tone": "lí kāi fáng jiān yào jié yuē yòng diàn",
                "pos": "sentence",
                "vi": "Rời phòng cần tiết kiệm điện."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "li kai fang jian yao jie yue yong dian",
            "tone": "lí kāi fáng jiān yào jié yuē yòng diàn"
          },
          {
            "stage": "sentence",
            "vi": "Thói quen tốt có thể bảo vệ môi trường.",
            "hanzi": "好习惯能保护环境。",
            "words": [
              {
                "text": "好习惯能保护环境",
                "pinyin": "hao xi guan neng bao hu huan jing",
                "tone": "hǎo xí guàn néng bǎo hù huán jìng",
                "pos": "sentence",
                "vi": "Thói quen tốt có thể bảo vệ môi trường."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "hao xi guan neng bao hu huan jing",
            "tone": "hǎo xí guàn néng bǎo hù huán jìng"
          },
          {
            "stage": "sentence",
            "vi": "Bảo vệ môi trường cần hành động ngay.",
            "hanzi": "环保需要马上行动。",
            "words": [
              {
                "text": "环保需要马上行动",
                "pinyin": "huan bao xu yao ma shang xing dong",
                "tone": "huán bǎo xū yào mǎ shàng xíng dòng",
                "pos": "sentence",
                "vi": "Bảo vệ môi trường cần hành động ngay."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l32",
            "pinyin": "huan bao xu yao ma shang xing dong",
            "tone": "huán bǎo xū yào mǎ shàng xíng dòng"
          }
        ]
      },
      {
        "id": "hsk5-l33",
        "no": 33,
        "titleZh": "以堵治堵—缓解交通有妙招",
        "titleVi": "Lấy tắc trị tắc - có mẹo giảm ùn tắc giao thông",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "tắc đường",
            "hanzi": "堵车",
            "words": [
              {
                "text": "堵车",
                "pinyin": "du che",
                "tone": "dǔ chē",
                "pos": "verb",
                "vi": "tắc đường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "du che",
            "tone": "dǔ chē"
          },
          {
            "stage": "word",
            "vi": "giảm bớt",
            "hanzi": "缓解",
            "words": [
              {
                "text": "缓解",
                "pinyin": "huan jie",
                "tone": "huǎn jiě",
                "pos": "verb",
                "vi": "giảm bớt"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "huan jie",
            "tone": "huǎn jiě"
          },
          {
            "stage": "word",
            "vi": "giao thông",
            "hanzi": "交通",
            "words": [
              {
                "text": "交通",
                "pinyin": "jiao tong",
                "tone": "jiāo tōng",
                "pos": "noun",
                "vi": "giao thông"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "jiao tong",
            "tone": "jiāo tōng"
          },
          {
            "stage": "word",
            "vi": "mẹo hay",
            "hanzi": "妙招",
            "words": [
              {
                "text": "妙招",
                "pinyin": "miao zhao",
                "tone": "miào zhāo",
                "pos": "noun",
                "vi": "mẹo hay"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "miao zhao",
            "tone": "miào zhāo"
          },
          {
            "stage": "word",
            "vi": "đông đúc",
            "hanzi": "拥挤",
            "words": [
              {
                "text": "拥挤",
                "pinyin": "yong ji",
                "tone": "yōng jǐ",
                "pos": "adj",
                "vi": "đông đúc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "yong ji",
            "tone": "yōng jǐ"
          },
          {
            "stage": "word",
            "vi": "cao điểm",
            "hanzi": "高峰",
            "words": [
              {
                "text": "高峰",
                "pinyin": "gao feng",
                "tone": "gāo fēng",
                "pos": "noun",
                "vi": "cao điểm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "gao feng",
            "tone": "gāo fēng"
          },
          {
            "stage": "word",
            "vi": "tàu điện ngầm",
            "hanzi": "地铁",
            "words": [
              {
                "text": "地铁",
                "pinyin": "di tie",
                "tone": "dì tiě",
                "pos": "noun",
                "vi": "tàu điện ngầm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "di tie",
            "tone": "dì tiě"
          },
          {
            "stage": "word",
            "vi": "phương án",
            "hanzi": "方案",
            "words": [
              {
                "text": "方案",
                "pinyin": "fang an",
                "tone": "fāng àn",
                "pos": "noun",
                "vi": "phương án"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "fang an",
            "tone": "fāng àn"
          },
          {
            "stage": "phrase",
            "vi": "tắc đường giờ cao điểm sáng",
            "hanzi": "早高峰堵车",
            "words": [
              {
                "text": "早高峰堵车",
                "pinyin": "zao gao feng du che",
                "tone": "zǎo gāo fēng dǔ chē",
                "pos": "phrase",
                "vi": "tắc đường giờ cao điểm sáng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "zao gao feng du che",
            "tone": "zǎo gāo fēng dǔ chē"
          },
          {
            "stage": "phrase",
            "vi": "giảm ùn tắc giao thông",
            "hanzi": "缓解交通",
            "words": [
              {
                "text": "缓解交通",
                "pinyin": "huan jie jiao tong",
                "tone": "huǎn jiě jiāo tōng",
                "pos": "phrase",
                "vi": "giảm ùn tắc giao thông"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "huan jie jiao tong",
            "tone": "huǎn jiě jiāo tōng"
          },
          {
            "stage": "phrase",
            "vi": "giao thông đô thị",
            "hanzi": "城市交通",
            "words": [
              {
                "text": "城市交通",
                "pinyin": "cheng shi jiao tong",
                "tone": "chéng shì jiāo tōng",
                "pos": "phrase",
                "vi": "giao thông đô thị"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "cheng shi jiao tong",
            "tone": "chéng shì jiāo tōng"
          },
          {
            "stage": "phrase",
            "vi": "nghĩ ra mẹo hay",
            "hanzi": "想出妙招",
            "words": [
              {
                "text": "想出妙招",
                "pinyin": "xiang chu miao zhao",
                "tone": "xiǎng chū miào zhāo",
                "pos": "phrase",
                "vi": "nghĩ ra mẹo hay"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "xiang chu miao zhao",
            "tone": "xiǎng chū miào zhāo"
          },
          {
            "stage": "phrase",
            "vi": "đường sá đông đúc",
            "hanzi": "道路拥挤",
            "words": [
              {
                "text": "道路拥挤",
                "pinyin": "dao lu yong ji",
                "tone": "dào lù yōng jǐ",
                "pos": "phrase",
                "vi": "đường sá đông đúc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "dao lu yong ji",
            "tone": "dào lù yōng jǐ"
          },
          {
            "stage": "phrase",
            "vi": "cao điểm giao thông",
            "hanzi": "交通高峰",
            "words": [
              {
                "text": "交通高峰",
                "pinyin": "jiao tong gao feng",
                "tone": "jiāo tōng gāo fēng",
                "pos": "phrase",
                "vi": "cao điểm giao thông"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "jiao tong gao feng",
            "tone": "jiāo tōng gāo fēng"
          },
          {
            "stage": "phrase",
            "vi": "đi tàu điện ngầm",
            "hanzi": "乘坐地铁",
            "words": [
              {
                "text": "乘坐地铁",
                "pinyin": "cheng zuo di tie",
                "tone": "chéng zuò dì tiě",
                "pos": "phrase",
                "vi": "đi tàu điện ngầm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "cheng zuo di tie",
            "tone": "chéng zuò dì tiě"
          },
          {
            "stage": "phrase",
            "vi": "đề xuất phương án",
            "hanzi": "提出方案",
            "words": [
              {
                "text": "提出方案",
                "pinyin": "ti chu fang an",
                "tone": "tí chū fāng àn",
                "pos": "phrase",
                "vi": "đề xuất phương án"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "ti chu fang an",
            "tone": "tí chū fāng àn"
          },
          {
            "stage": "sentence",
            "vi": "Giờ cao điểm sáng thường tắc đường.",
            "hanzi": "早高峰经常堵车。",
            "words": [
              {
                "text": "早高峰经常堵车",
                "pinyin": "zao gao feng jing chang du che",
                "tone": "zǎo gāo fēng jīng cháng dǔ chē",
                "pos": "sentence",
                "vi": "Giờ cao điểm sáng thường tắc đường."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "zao gao feng jing chang du che",
            "tone": "zǎo gāo fēng jīng cháng dǔ chē"
          },
          {
            "stage": "sentence",
            "vi": "Cách mới có thể giảm ùn tắc giao thông.",
            "hanzi": "新办法能缓解交通。",
            "words": [
              {
                "text": "新办法能缓解交通",
                "pinyin": "xin ban fa neng huan jie jiao tong",
                "tone": "xīn bàn fǎ néng huǎn jiě jiāo tōng",
                "pos": "sentence",
                "vi": "Cách mới có thể giảm ùn tắc giao thông."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "xin ban fa neng huan jie jiao tong",
            "tone": "xīn bàn fǎ néng huǎn jiě jiāo tōng"
          },
          {
            "stage": "sentence",
            "vi": "Áp lực giao thông đô thị rất lớn.",
            "hanzi": "城市交通压力很大。",
            "words": [
              {
                "text": "城市交通压力很大",
                "pinyin": "cheng shi jiao tong ya li hen da",
                "tone": "chéng shì jiāo tōng yā lì hěn dà",
                "pos": "sentence",
                "vi": "Áp lực giao thông đô thị rất lớn."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "cheng shi jiao tong ya li hen da",
            "tone": "chéng shì jiāo tōng yā lì hěn dà"
          },
          {
            "stage": "sentence",
            "vi": "Kỹ sư nghĩ ra một mẹo hay.",
            "hanzi": "工程师想出一个妙招。",
            "words": [
              {
                "text": "工程师想出一个妙招",
                "pinyin": "gong cheng shi xiang chu yi ge miao zhao",
                "tone": "gōng chéng shī xiǎng chū yí gè miào zhāo",
                "pos": "sentence",
                "vi": "Kỹ sư nghĩ ra một mẹo hay."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "gong cheng shi xiang chu yi ge miao zhao",
            "tone": "gōng chéng shī xiǎng chū yí gè miào zhāo"
          },
          {
            "stage": "sentence",
            "vi": "Con đường này rất đông đúc.",
            "hanzi": "这条路非常拥挤。",
            "words": [
              {
                "text": "这条路非常拥挤",
                "pinyin": "zhe tiao lu fei chang yong ji",
                "tone": "zhè tiáo lù fēi cháng yōng jǐ",
                "pos": "sentence",
                "vi": "Con đường này rất đông đúc."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "zhe tiao lu fei chang yong ji",
            "tone": "zhè tiáo lù fēi cháng yōng jǐ"
          },
          {
            "stage": "sentence",
            "vi": "Giờ cao điểm giao thông tốt nhất nên đi tàu điện.",
            "hanzi": "交通高峰最好坐地铁。",
            "words": [
              {
                "text": "交通高峰最好坐地铁",
                "pinyin": "jiao tong gao feng zui hao zuo di tie",
                "tone": "jiāo tōng gāo fēng zuì hǎo zuò dì tiě",
                "pos": "sentence",
                "vi": "Giờ cao điểm giao thông tốt nhất nên đi tàu điện."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "jiao tong gao feng zui hao zuo di tie",
            "tone": "jiāo tōng gāo fēng zuì hǎo zuò dì tiě"
          },
          {
            "stage": "sentence",
            "vi": "Đi tàu điện ngầm tương đối đúng giờ.",
            "hanzi": "乘坐地铁比较准时。",
            "words": [
              {
                "text": "乘坐地铁比较准时",
                "pinyin": "cheng zuo di tie bi jiao zhun shi",
                "tone": "chéng zuò dì tiě bǐ jiào zhǔn shí",
                "pos": "sentence",
                "vi": "Đi tàu điện ngầm tương đối đúng giờ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "cheng zuo di tie bi jiao zhun shi",
            "tone": "chéng zuò dì tiě bǐ jiào zhǔn shí"
          },
          {
            "stage": "sentence",
            "vi": "Chuyên gia đề xuất phương án mới.",
            "hanzi": "专家提出新的方案。",
            "words": [
              {
                "text": "专家提出新的方案",
                "pinyin": "zhuan jia ti chu xin de fang an",
                "tone": "zhuān jiā tí chū xīn de fāng àn",
                "pos": "sentence",
                "vi": "Chuyên gia đề xuất phương án mới."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l33",
            "pinyin": "zhuan jia ti chu xin de fang an",
            "tone": "zhuān jiā tí chū xīn de fāng àn"
          }
        ]
      },
      {
        "id": "hsk5-l34",
        "no": 34,
        "titleZh": "鸟儿的护肤术",
        "titleVi": "Bí quyết chăm sóc da của loài chim",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "chim",
            "hanzi": "鸟儿",
            "words": [
              {
                "text": "鸟儿",
                "pinyin": "niao er",
                "tone": "niǎo ér",
                "pos": "noun",
                "vi": "chim"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "niao er",
            "tone": "niǎo ér"
          },
          {
            "stage": "word",
            "vi": "chăm sóc da",
            "hanzi": "护肤",
            "words": [
              {
                "text": "护肤",
                "pinyin": "hu fu",
                "tone": "hù fū",
                "pos": "verb",
                "vi": "chăm sóc da"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "hu fu",
            "tone": "hù fū"
          },
          {
            "stage": "word",
            "vi": "lông vũ",
            "hanzi": "羽毛",
            "words": [
              {
                "text": "羽毛",
                "pinyin": "yu mao",
                "tone": "yǔ máo",
                "pos": "noun",
                "vi": "lông vũ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "yu mao",
            "tone": "yǔ máo"
          },
          {
            "stage": "word",
            "vi": "ánh nắng",
            "hanzi": "阳光",
            "words": [
              {
                "text": "阳光",
                "pinyin": "yang guang",
                "tone": "yáng guāng",
                "pos": "noun",
                "vi": "ánh nắng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "yang guang",
            "tone": "yáng guāng"
          },
          {
            "stage": "word",
            "vi": "ký sinh trùng",
            "hanzi": "寄生虫",
            "words": [
              {
                "text": "寄生虫",
                "pinyin": "ji sheng chong",
                "tone": "jì shēng chóng",
                "pos": "noun",
                "vi": "ký sinh trùng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "ji sheng chong",
            "tone": "jì shēng chóng"
          },
          {
            "stage": "word",
            "vi": "hành vi",
            "hanzi": "行为",
            "words": [
              {
                "text": "行为",
                "pinyin": "xing wei",
                "tone": "xíng wéi",
                "pos": "noun",
                "vi": "hành vi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "xing wei",
            "tone": "xíng wéi"
          },
          {
            "stage": "word",
            "vi": "nghiên cứu",
            "hanzi": "研究",
            "words": [
              {
                "text": "研究",
                "pinyin": "yan jiu",
                "tone": "yán jiū",
                "pos": "verb",
                "vi": "nghiên cứu"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "yan jiu",
            "tone": "yán jiū"
          },
          {
            "stage": "word",
            "vi": "thiên nhiên",
            "hanzi": "自然",
            "words": [
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "thiên nhiên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "zi ran",
            "tone": "zì rán"
          },
          {
            "stage": "phrase",
            "vi": "quan sát chim",
            "hanzi": "观察鸟儿",
            "words": [
              {
                "text": "观察鸟儿",
                "pinyin": "guan cha niao er",
                "tone": "guān chá niǎo ér",
                "pos": "phrase",
                "vi": "quan sát chim"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "guan cha niao er",
            "tone": "guān chá niǎo ér"
          },
          {
            "stage": "phrase",
            "vi": "cách chăm sóc da",
            "hanzi": "护肤方法",
            "words": [
              {
                "text": "护肤方法",
                "pinyin": "hu fu fang fa",
                "tone": "hù fū fāng fǎ",
                "pos": "phrase",
                "vi": "cách chăm sóc da"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "hu fu fang fa",
            "tone": "hù fū fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "bảo vệ lông vũ",
            "hanzi": "保护羽毛",
            "words": [
              {
                "text": "保护羽毛",
                "pinyin": "bao hu yu mao",
                "tone": "bǎo hù yǔ máo",
                "pos": "phrase",
                "vi": "bảo vệ lông vũ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "bao hu yu mao",
            "tone": "bǎo hù yǔ máo"
          },
          {
            "stage": "phrase",
            "vi": "tắm nắng",
            "hanzi": "晒太阳",
            "words": [
              {
                "text": "晒太阳",
                "pinyin": "shai tai yang",
                "tone": "shài tài yáng",
                "pos": "phrase",
                "vi": "tắm nắng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "shai tai yang",
            "tone": "shài tài yáng"
          },
          {
            "stage": "phrase",
            "vi": "loại bỏ ký sinh trùng",
            "hanzi": "清除寄生虫",
            "words": [
              {
                "text": "清除寄生虫",
                "pinyin": "qing chu ji sheng chong",
                "tone": "qīng chú jì shēng chóng",
                "pos": "phrase",
                "vi": "loại bỏ ký sinh trùng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "qing chu ji sheng chong",
            "tone": "qīng chú jì shēng chóng"
          },
          {
            "stage": "phrase",
            "vi": "hành vi kỳ lạ",
            "hanzi": "奇特行为",
            "words": [
              {
                "text": "奇特行为",
                "pinyin": "qi te xing wei",
                "tone": "qí tè xíng wéi",
                "pos": "phrase",
                "vi": "hành vi kỳ lạ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "qi te xing wei",
            "tone": "qí tè xíng wéi"
          },
          {
            "stage": "phrase",
            "vi": "nghiên cứu chim",
            "hanzi": "研究鸟类",
            "words": [
              {
                "text": "研究鸟类",
                "pinyin": "yan jiu niao lei",
                "tone": "yán jiū niǎo lèi",
                "pos": "phrase",
                "vi": "nghiên cứu chim"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "yan jiu niao lei",
            "tone": "yán jiū niǎo lèi"
          },
          {
            "stage": "phrase",
            "vi": "hiện tượng tự nhiên",
            "hanzi": "自然现象",
            "words": [
              {
                "text": "自然现象",
                "pinyin": "zi ran xian xiang",
                "tone": "zì rán xiàn xiàng",
                "pos": "phrase",
                "vi": "hiện tượng tự nhiên"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "zi ran xian xiang",
            "tone": "zì rán xiàn xiàng"
          },
          {
            "stage": "sentence",
            "vi": "Nhà khoa học quan sát chim.",
            "hanzi": "科学家观察鸟儿。",
            "words": [
              {
                "text": "科学家观察鸟儿",
                "pinyin": "ke xue jia guan cha niao er",
                "tone": "kē xué jiā guān chá niǎo ér",
                "pos": "sentence",
                "vi": "Nhà khoa học quan sát chim."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "ke xue jia guan cha niao er",
            "tone": "kē xué jiā guān chá niǎo ér"
          },
          {
            "stage": "sentence",
            "vi": "Chim cũng có cách chăm sóc da.",
            "hanzi": "鸟儿也有护肤方法。",
            "words": [
              {
                "text": "鸟儿也有护肤方法",
                "pinyin": "niao er ye you hu fu fang fa",
                "tone": "niǎo ér yě yǒu hù fū fāng fǎ",
                "pos": "sentence",
                "vi": "Chim cũng có cách chăm sóc da."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "niao er ye you hu fu fang fa",
            "tone": "niǎo ér yě yǒu hù fū fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chim cần bảo vệ lông vũ.",
            "hanzi": "鸟儿需要保护羽毛。",
            "words": [
              {
                "text": "鸟儿需要保护羽毛",
                "pinyin": "niao er xu yao bao hu yu mao",
                "tone": "niǎo ér xū yào bǎo hù yǔ máo",
                "pos": "sentence",
                "vi": "Chim cần bảo vệ lông vũ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "niao er xu yao bao hu yu mao",
            "tone": "niǎo ér xū yào bǎo hù yǔ máo"
          },
          {
            "stage": "sentence",
            "vi": "Chim thích tắm nắng.",
            "hanzi": "鸟儿喜欢晒太阳。",
            "words": [
              {
                "text": "鸟儿喜欢晒太阳",
                "pinyin": "niao er xi huan shai tai yang",
                "tone": "niǎo ér xǐ huan shài tài yáng",
                "pos": "sentence",
                "vi": "Chim thích tắm nắng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "niao er xi huan shai tai yang",
            "tone": "niǎo ér xǐ huan shài tài yáng"
          },
          {
            "stage": "sentence",
            "vi": "Tắm nắng có thể loại bỏ ký sinh trùng.",
            "hanzi": "晒太阳能清除寄生虫。",
            "words": [
              {
                "text": "晒太阳能清除寄生虫",
                "pinyin": "shai tai yang neng qing chu ji sheng chong",
                "tone": "shài tài yáng néng qīng chú jì shēng chóng",
                "pos": "sentence",
                "vi": "Tắm nắng có thể loại bỏ ký sinh trùng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "shai tai yang neng qing chu ji sheng chong",
            "tone": "shài tài yáng néng qīng chú jì shēng chóng"
          },
          {
            "stage": "sentence",
            "vi": "Hành vi này rất kỳ lạ.",
            "hanzi": "这种行为很奇特。",
            "words": [
              {
                "text": "这种行为很奇特",
                "pinyin": "zhe zhong xing wei hen qi te",
                "tone": "zhè zhǒng xíng wéi hěn qí tè",
                "pos": "sentence",
                "vi": "Hành vi này rất kỳ lạ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "zhe zhong xing wei hen qi te",
            "tone": "zhè zhǒng xíng wéi hěn qí tè"
          },
          {
            "stage": "sentence",
            "vi": "Họ nghiên cứu loài chim lâu dài.",
            "hanzi": "他们长期研究鸟类。",
            "words": [
              {
                "text": "他们长期研究鸟类",
                "pinyin": "ta men chang qi yan jiu niao lei",
                "tone": "tā men cháng qī yán jiū niǎo lèi",
                "pos": "sentence",
                "vi": "Họ nghiên cứu loài chim lâu dài."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "ta men chang qi yan jiu niao lei",
            "tone": "tā men cháng qī yán jiū niǎo lèi"
          },
          {
            "stage": "sentence",
            "vi": "Đây là hiện tượng tự nhiên thú vị.",
            "hanzi": "这是有趣的自然现象。",
            "words": [
              {
                "text": "这是有趣的自然现象",
                "pinyin": "zhe shi you qu de zi ran xian xiang",
                "tone": "zhè shì yǒu qù de zì rán xiàn xiàng",
                "pos": "sentence",
                "vi": "Đây là hiện tượng tự nhiên thú vị."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l34",
            "pinyin": "zhe shi you qu de zi ran xian xiang",
            "tone": "zhè shì yǒu qù de zì rán xiàn xiàng"
          }
        ]
      },
      {
        "id": "hsk5-l35",
        "no": 35,
        "titleZh": "植物会出汗",
        "titleVi": "Thực vật biết đổ mồ hôi",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "thực vật",
            "hanzi": "植物",
            "words": [
              {
                "text": "植物",
                "pinyin": "zhi wu",
                "tone": "zhí wù",
                "pos": "noun",
                "vi": "thực vật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "zhi wu",
            "tone": "zhí wù"
          },
          {
            "stage": "word",
            "vi": "ra mồ hôi",
            "hanzi": "出汗",
            "words": [
              {
                "text": "出汗",
                "pinyin": "chu han",
                "tone": "chū hàn",
                "pos": "verb",
                "vi": "ra mồ hôi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "chu han",
            "tone": "chū hàn"
          },
          {
            "stage": "word",
            "vi": "nước",
            "hanzi": "水分",
            "words": [
              {
                "text": "水分",
                "pinyin": "shui fen",
                "tone": "shuǐ fèn",
                "pos": "noun",
                "vi": "nước"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "shui fen",
            "tone": "shuǐ fèn"
          },
          {
            "stage": "word",
            "vi": "lá cây",
            "hanzi": "叶子",
            "words": [
              {
                "text": "叶子",
                "pinyin": "ye zi",
                "tone": "yè zi",
                "pos": "noun",
                "vi": "lá cây"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "ye zi",
            "tone": "yè zi"
          },
          {
            "stage": "word",
            "vi": "nhiệt độ",
            "hanzi": "温度",
            "words": [
              {
                "text": "温度",
                "pinyin": "wen du",
                "tone": "wēn dù",
                "pos": "noun",
                "vi": "nhiệt độ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "wen du",
            "tone": "wēn dù"
          },
          {
            "stage": "word",
            "vi": "bốc hơi",
            "hanzi": "蒸发",
            "words": [
              {
                "text": "蒸发",
                "pinyin": "zheng fa",
                "tone": "zhēng fā",
                "pos": "verb",
                "vi": "bốc hơi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "zheng fa",
            "tone": "zhēng fā"
          },
          {
            "stage": "word",
            "vi": "sinh trưởng",
            "hanzi": "生长",
            "words": [
              {
                "text": "生长",
                "pinyin": "sheng zhang",
                "tone": "shēng zhǎng",
                "pos": "verb",
                "vi": "sinh trưởng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "sheng zhang",
            "tone": "shēng zhǎng"
          },
          {
            "stage": "word",
            "vi": "môi trường",
            "hanzi": "环境",
            "words": [
              {
                "text": "环境",
                "pinyin": "huan jing",
                "tone": "huán jìng",
                "pos": "noun",
                "vi": "môi trường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "huan jing",
            "tone": "huán jìng"
          },
          {
            "stage": "phrase",
            "vi": "quan sát thực vật",
            "hanzi": "观察植物",
            "words": [
              {
                "text": "观察植物",
                "pinyin": "guan cha zhi wu",
                "tone": "guān chá zhí wù",
                "pos": "phrase",
                "vi": "quan sát thực vật"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "guan cha zhi wu",
            "tone": "guān chá zhí wù"
          },
          {
            "stage": "phrase",
            "vi": "thực vật ra mồ hôi",
            "hanzi": "植物出汗",
            "words": [
              {
                "text": "植物出汗",
                "pinyin": "zhi wu chu han",
                "tone": "zhí wù chū hàn",
                "pos": "phrase",
                "vi": "thực vật ra mồ hôi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "zhi wu chu han",
            "tone": "zhí wù chū hàn"
          },
          {
            "stage": "phrase",
            "vi": "hấp thụ nước",
            "hanzi": "吸收水分",
            "words": [
              {
                "text": "吸收水分",
                "pinyin": "xi shou shui fen",
                "tone": "xī shōu shuǐ fèn",
                "pos": "phrase",
                "vi": "hấp thụ nước"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "xi shou shui fen",
            "tone": "xī shōu shuǐ fèn"
          },
          {
            "stage": "phrase",
            "vi": "lá xanh",
            "hanzi": "绿色叶子",
            "words": [
              {
                "text": "绿色叶子",
                "pinyin": "lü se ye zi",
                "tone": "lǜ sè yè zi",
                "pos": "phrase",
                "vi": "lá xanh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "lü se ye zi",
            "tone": "lǜ sè yè zi"
          },
          {
            "stage": "phrase",
            "vi": "giảm nhiệt độ",
            "hanzi": "降低温度",
            "words": [
              {
                "text": "降低温度",
                "pinyin": "jiang di wen du",
                "tone": "jiàng dī wēn dù",
                "pos": "phrase",
                "vi": "giảm nhiệt độ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "jiang di wen du",
            "tone": "jiàng dī wēn dù"
          },
          {
            "stage": "phrase",
            "vi": "nước bốc hơi",
            "hanzi": "水分蒸发",
            "words": [
              {
                "text": "水分蒸发",
                "pinyin": "shui fen zheng fa",
                "tone": "shuǐ fèn zhēng fā",
                "pos": "phrase",
                "vi": "nước bốc hơi"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "shui fen zheng fa",
            "tone": "shuǐ fèn zhēng fā"
          },
          {
            "stage": "phrase",
            "vi": "sinh trưởng khỏe mạnh",
            "hanzi": "健康生长",
            "words": [
              {
                "text": "健康生长",
                "pinyin": "jian kang sheng zhang",
                "tone": "jiàn kāng shēng zhǎng",
                "pos": "phrase",
                "vi": "sinh trưởng khỏe mạnh"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "jian kang sheng zhang",
            "tone": "jiàn kāng shēng zhǎng"
          },
          {
            "stage": "phrase",
            "vi": "thích nghi môi trường",
            "hanzi": "适应环境",
            "words": [
              {
                "text": "适应环境",
                "pinyin": "shi ying huan jing",
                "tone": "shì yìng huán jìng",
                "pos": "phrase",
                "vi": "thích nghi môi trường"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "shi ying huan jing",
            "tone": "shì yìng huán jìng"
          },
          {
            "stage": "sentence",
            "vi": "Bọn trẻ quan sát thực vật.",
            "hanzi": "孩子们观察植物。",
            "words": [
              {
                "text": "孩子们观察植物",
                "pinyin": "hai zi men guan cha zhi wu",
                "tone": "hái zi men guān chá zhí wù",
                "pos": "sentence",
                "vi": "Bọn trẻ quan sát thực vật."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "hai zi men guan cha zhi wu",
            "tone": "hái zi men guān chá zhí wù"
          },
          {
            "stage": "sentence",
            "vi": "Thực vật cũng có thể ra mồ hôi.",
            "hanzi": "植物也会出汗。",
            "words": [
              {
                "text": "植物也会出汗",
                "pinyin": "zhi wu ye hui chu han",
                "tone": "zhí wù yě huì chū hàn",
                "pos": "sentence",
                "vi": "Thực vật cũng có thể ra mồ hôi."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "zhi wu ye hui chu han",
            "tone": "zhí wù yě huì chū hàn"
          },
          {
            "stage": "sentence",
            "vi": "Rễ có thể hấp thụ nước.",
            "hanzi": "根能吸收水分。",
            "words": [
              {
                "text": "根能吸收水分",
                "pinyin": "gen neng xi shou shui fen",
                "tone": "gēn néng xī shōu shuǐ fèn",
                "pos": "sentence",
                "vi": "Rễ có thể hấp thụ nước."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "gen neng xi shou shui fen",
            "tone": "gēn néng xī shōu shuǐ fèn"
          },
          {
            "stage": "sentence",
            "vi": "Lá cây sẽ tỏa hơi nước.",
            "hanzi": "叶子会散发水分。",
            "words": [
              {
                "text": "叶子会散发水分",
                "pinyin": "ye zi hui san fa shui fen",
                "tone": "yè zi huì sàn fā shuǐ fèn",
                "pos": "sentence",
                "vi": "Lá cây sẽ tỏa hơi nước."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "ye zi hui san fa shui fen",
            "tone": "yè zi huì sàn fā shuǐ fèn"
          },
          {
            "stage": "sentence",
            "vi": "Ra mồ hôi có thể giảm nhiệt độ.",
            "hanzi": "出汗能降低温度。",
            "words": [
              {
                "text": "出汗能降低温度",
                "pinyin": "chu han neng jiang di wen du",
                "tone": "chū hàn néng jiàng dī wēn dù",
                "pos": "sentence",
                "vi": "Ra mồ hôi có thể giảm nhiệt độ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "chu han neng jiang di wen du",
            "tone": "chū hàn néng jiàng dī wēn dù"
          },
          {
            "stage": "sentence",
            "vi": "Dưới nắng nước bốc hơi rất nhanh.",
            "hanzi": "阳光下水分蒸发很快。",
            "words": [
              {
                "text": "阳光下水分蒸发很快",
                "pinyin": "yang guang xia shui fen zheng fa hen kuai",
                "tone": "yáng guāng xià shuǐ fèn zhēng fā hěn kuài",
                "pos": "sentence",
                "vi": "Dưới nắng nước bốc hơi rất nhanh."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "yang guang xia shui fen zheng fa hen kuai",
            "tone": "yáng guāng xià shuǐ fèn zhēng fā hěn kuài"
          },
          {
            "stage": "sentence",
            "vi": "Thực vật cần nước để sinh trưởng.",
            "hanzi": "植物需要水才能生长。",
            "words": [
              {
                "text": "植物需要水才能生长",
                "pinyin": "zhi wu xu yao shui cai neng sheng zhang",
                "tone": "zhí wù xū yào shuǐ cái néng shēng zhǎng",
                "pos": "sentence",
                "vi": "Thực vật cần nước để sinh trưởng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "zhi wu xu yao shui cai neng sheng zhang",
            "tone": "zhí wù xū yào shuǐ cái néng shēng zhǎng"
          },
          {
            "stage": "sentence",
            "vi": "Thực vật sẽ thích nghi với môi trường.",
            "hanzi": "植物会适应环境。",
            "words": [
              {
                "text": "植物会适应环境",
                "pinyin": "zhi wu hui shi ying huan jing",
                "tone": "zhí wù huì shì yìng huán jìng",
                "pos": "sentence",
                "vi": "Thực vật sẽ thích nghi với môi trường."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l35",
            "pinyin": "zhi wu hui shi ying huan jing",
            "tone": "zhí wù huì shì yìng huán jìng"
          }
        ]
      },
      {
        "id": "hsk5-l36",
        "no": 36,
        "titleZh": "老舍与养花",
        "titleVi": "Lão Xá và việc trồng hoa",
        "remediationStatus": "curated_academic_review",
        "items": [
          {
            "stage": "word",
            "vi": "Lão Xá",
            "hanzi": "老舍",
            "words": [
              {
                "text": "老舍",
                "pinyin": "lao she",
                "tone": "lǎo shè",
                "pos": "noun",
                "vi": "Lão Xá"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "lao she",
            "tone": "lǎo shè"
          },
          {
            "stage": "word",
            "vi": "trồng hoa",
            "hanzi": "养花",
            "words": [
              {
                "text": "养花",
                "pinyin": "yang hua",
                "tone": "yǎng huā",
                "pos": "verb",
                "vi": "trồng hoa"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "yang hua",
            "tone": "yǎng huā"
          },
          {
            "stage": "word",
            "vi": "nhà văn",
            "hanzi": "作家",
            "words": [
              {
                "text": "作家",
                "pinyin": "zuo jia",
                "tone": "zuò jiā",
                "pos": "noun",
                "vi": "nhà văn"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "zuo jia",
            "tone": "zuò jiā"
          },
          {
            "stage": "word",
            "vi": "niềm vui",
            "hanzi": "乐趣",
            "words": [
              {
                "text": "乐趣",
                "pinyin": "le qu",
                "tone": "lè qù",
                "pos": "noun",
                "vi": "niềm vui"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "le qu",
            "tone": "lè qù"
          },
          {
            "stage": "word",
            "vi": "chăm sóc",
            "hanzi": "照顾",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhao gu",
                "tone": "zhào gù",
                "pos": "verb",
                "vi": "chăm sóc"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "zhao gu",
            "tone": "zhào gù"
          },
          {
            "stage": "word",
            "vi": "kinh nghiệm",
            "hanzi": "经验",
            "words": [
              {
                "text": "经验",
                "pinyin": "jing yan",
                "tone": "jīng yàn",
                "pos": "noun",
                "vi": "kinh nghiệm"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
          },
          {
            "stage": "word",
            "vi": "thất bại",
            "hanzi": "失败",
            "words": [
              {
                "text": "失败",
                "pinyin": "shi bai",
                "tone": "shī bài",
                "pos": "verb",
                "vi": "thất bại"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "shi bai",
            "tone": "shī bài"
          },
          {
            "stage": "word",
            "vi": "yêu thích",
            "hanzi": "热爱",
            "words": [
              {
                "text": "热爱",
                "pinyin": "re ai",
                "tone": "rè ài",
                "pos": "verb",
                "vi": "yêu thích"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "re ai",
            "tone": "rè ài"
          },
          {
            "stage": "phrase",
            "vi": "ông Lão Xá",
            "hanzi": "老舍先生",
            "words": [
              {
                "text": "老舍先生",
                "pinyin": "lao she xian sheng",
                "tone": "lǎo shè xiān shēng",
                "pos": "phrase",
                "vi": "ông Lão Xá"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "lao she xian sheng",
            "tone": "lǎo shè xiān shēng"
          },
          {
            "stage": "phrase",
            "vi": "thích trồng hoa",
            "hanzi": "喜欢养花",
            "words": [
              {
                "text": "喜欢养花",
                "pinyin": "xi huan yang hua",
                "tone": "xǐ huan yǎng huā",
                "pos": "phrase",
                "vi": "thích trồng hoa"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "xi huan yang hua",
            "tone": "xǐ huan yǎng huā"
          },
          {
            "stage": "phrase",
            "vi": "nhà văn nổi tiếng",
            "hanzi": "著名作家",
            "words": [
              {
                "text": "著名作家",
                "pinyin": "zhu ming zuo jia",
                "tone": "zhù míng zuò jiā",
                "pos": "phrase",
                "vi": "nhà văn nổi tiếng"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "zhu ming zuo jia",
            "tone": "zhù míng zuò jiā"
          },
          {
            "stage": "phrase",
            "vi": "niềm vui cuộc sống",
            "hanzi": "生活乐趣",
            "words": [
              {
                "text": "生活乐趣",
                "pinyin": "sheng huo le qu",
                "tone": "shēng huó lè qù",
                "pos": "phrase",
                "vi": "niềm vui cuộc sống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "sheng huo le qu",
            "tone": "shēng huó lè qù"
          },
          {
            "stage": "phrase",
            "vi": "chăm sóc hoa cỏ",
            "hanzi": "照顾花草",
            "words": [
              {
                "text": "照顾花草",
                "pinyin": "zhao gu hua cao",
                "tone": "zhào gù huā cǎo",
                "pos": "phrase",
                "vi": "chăm sóc hoa cỏ"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "zhao gu hua cao",
            "tone": "zhào gù huā cǎo"
          },
          {
            "stage": "phrase",
            "vi": "kinh nghiệm trồng hoa",
            "hanzi": "养花经验",
            "words": [
              {
                "text": "养花经验",
                "pinyin": "yang hua jing yan",
                "tone": "yǎng huā jīng yàn",
                "pos": "phrase",
                "vi": "kinh nghiệm trồng hoa"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "yang hua jing yan",
            "tone": "yǎng huā jīng yàn"
          },
          {
            "stage": "phrase",
            "vi": "trải qua thất bại",
            "hanzi": "经历失败",
            "words": [
              {
                "text": "经历失败",
                "pinyin": "jing li shi bai",
                "tone": "jīng lì shī bài",
                "pos": "phrase",
                "vi": "trải qua thất bại"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "jing li shi bai",
            "tone": "jīng lì shī bài"
          },
          {
            "stage": "phrase",
            "vi": "yêu cuộc sống",
            "hanzi": "热爱生活",
            "words": [
              {
                "text": "热爱生活",
                "pinyin": "re ai sheng huo",
                "tone": "rè ài shēng huó",
                "pos": "phrase",
                "vi": "yêu cuộc sống"
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "re ai sheng huo",
            "tone": "rè ài shēng huó"
          },
          {
            "stage": "sentence",
            "vi": "Ông Lão Xá thích trồng hoa.",
            "hanzi": "老舍先生喜欢养花。",
            "words": [
              {
                "text": "老舍先生喜欢养花",
                "pinyin": "lao she xian sheng xi huan yang hua",
                "tone": "lǎo shè xiān shēng xǐ huan yǎng huā",
                "pos": "sentence",
                "vi": "Ông Lão Xá thích trồng hoa."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "lao she xian sheng xi huan yang hua",
            "tone": "lǎo shè xiān shēng xǐ huan yǎng huā"
          },
          {
            "stage": "sentence",
            "vi": "Trồng hoa mang lại niềm vui cho ông.",
            "hanzi": "养花给他带来快乐。",
            "words": [
              {
                "text": "养花给他带来快乐",
                "pinyin": "yang hua gei ta dai lai kuai le",
                "tone": "yǎng huā gěi tā dài lái kuài lè",
                "pos": "sentence",
                "vi": "Trồng hoa mang lại niềm vui cho ông."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "yang hua gei ta dai lai kuai le",
            "tone": "yǎng huā gěi tā dài lái kuài lè"
          },
          {
            "stage": "sentence",
            "vi": "Lão Xá là nhà văn nổi tiếng.",
            "hanzi": "老舍是著名作家。",
            "words": [
              {
                "text": "老舍是著名作家",
                "pinyin": "lao she shi zhu ming zuo jia",
                "tone": "lǎo shè shì zhù míng zuò jiā",
                "pos": "sentence",
                "vi": "Lão Xá là nhà văn nổi tiếng."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "lao she shi zhu ming zuo jia",
            "tone": "lǎo shè shì zhù míng zuò jiā"
          },
          {
            "stage": "sentence",
            "vi": "Trồng hoa là niềm vui cuộc sống của ông.",
            "hanzi": "养花是他的生活乐趣。",
            "words": [
              {
                "text": "养花是他的生活乐趣",
                "pinyin": "yang hua shi ta de sheng huo le qu",
                "tone": "yǎng huā shì tā de shēng huó lè qù",
                "pos": "sentence",
                "vi": "Trồng hoa là niềm vui cuộc sống của ông."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "yang hua shi ta de sheng huo le qu",
            "tone": "yǎng huā shì tā de shēng huó lè qù"
          },
          {
            "stage": "sentence",
            "vi": "Mỗi ngày ông chăm sóc hoa cỏ.",
            "hanzi": "他每天照顾花草。",
            "words": [
              {
                "text": "他每天照顾花草",
                "pinyin": "ta mei tian zhao gu hua cao",
                "tone": "tā měi tiān zhào gù huā cǎo",
                "pos": "sentence",
                "vi": "Mỗi ngày ông chăm sóc hoa cỏ."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "ta mei tian zhao gu hua cao",
            "tone": "tā měi tiān zhào gù huā cǎo"
          },
          {
            "stage": "sentence",
            "vi": "Ông có nhiều kinh nghiệm trồng hoa.",
            "hanzi": "他有很多养花经验。",
            "words": [
              {
                "text": "他有很多养花经验",
                "pinyin": "ta you hen duo yang hua jing yan",
                "tone": "tā yǒu hěn duō yǎng huā jīng yàn",
                "pos": "sentence",
                "vi": "Ông có nhiều kinh nghiệm trồng hoa."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "ta you hen duo yang hua jing yan",
            "tone": "tā yǒu hěn duō yǎng huā jīng yàn"
          },
          {
            "stage": "sentence",
            "vi": "Trồng hoa cũng sẽ trải qua thất bại.",
            "hanzi": "养花也会经历失败。",
            "words": [
              {
                "text": "养花也会经历失败",
                "pinyin": "yang hua ye hui jing li shi bai",
                "tone": "yǎng huā yě huì jīng lì shī bài",
                "pos": "sentence",
                "vi": "Trồng hoa cũng sẽ trải qua thất bại."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "yang hua ye hui jing li shi bai",
            "tone": "yǎng huā yě huì jīng lì shī bài"
          },
          {
            "stage": "sentence",
            "vi": "Trồng hoa thể hiện ông yêu cuộc sống.",
            "hanzi": "养花表现了他热爱生活。",
            "words": [
              {
                "text": "养花表现了他热爱生活",
                "pinyin": "yang hua biao xian le ta re ai sheng huo",
                "tone": "yǎng huā biǎo xiàn le tā rè ài shēng huó",
                "pos": "sentence",
                "vi": "Trồng hoa thể hiện ông yêu cuộc sống."
              }
            ],
            "source": "HSK academic remediation - pinyin dictation safe content - hsk5-l36",
            "pinyin": "yang hua biao xian le ta re ai sheng huo",
            "tone": "yǎng huā biǎo xiàn le tā rè ài shēng huó"
          }
        ]
      }
    ]
  }
};
});
