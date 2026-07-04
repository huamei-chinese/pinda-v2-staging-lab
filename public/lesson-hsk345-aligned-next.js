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
        items: lesson.items,
      };
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return {
  "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
  "levels": {
    "HSK3": [
      {
        "id": "hsk3-l6",
        "no": 6,
        "titleZh": "怎么突然找不到了",
        "titleVi": "Sao đột nhiên lại không tìm thấy nữa",
        "items": [
          {
            "stage": "word",
            "vi": "đột nhiên",
            "hanzi": "突然",
            "words": [
              {
                "text": "突然",
                "pinyin": "tu ran",
                "tone": "tū rán",
                "pos": "adv",
                "vi": "đột nhiên"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tu ran",
            "tone": "tū rán"
          },
          {
            "stage": "word",
            "vi": "tìm",
            "hanzi": "找",
            "words": [
              {
                "text": "找",
                "pinyin": "zhao",
                "tone": "zhǎo",
                "pos": "verb",
                "vi": "tìm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhao",
            "tone": "zhǎo"
          },
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fa xian",
            "tone": "fā xiàn"
          },
          {
            "stage": "word",
            "vi": "quan trọng",
            "hanzi": "重要",
            "words": [
              {
                "text": "重要",
                "pinyin": "zhong yao",
                "tone": "zhòng yào",
                "pos": "adj",
                "vi": "quan trọng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhong yao",
            "tone": "zhòng yào"
          },
          {
            "stage": "word",
            "vi": "đồ vật",
            "hanzi": "东西",
            "words": [
              {
                "text": "东西",
                "pinyin": "dong xi",
                "tone": "dōng xī",
                "pos": "noun",
                "vi": "đồ vật"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "dong xi",
            "tone": "dōng xī"
          },
          {
            "stage": "word",
            "vi": "nơi, chỗ",
            "hanzi": "地方",
            "words": [
              {
                "text": "地方",
                "pinyin": "di fang",
                "tone": "dì fāng",
                "pos": "noun",
                "vi": "nơi, chỗ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "di fang",
            "tone": "dì fāng"
          },
          {
            "stage": "word",
            "vi": "quên",
            "hanzi": "忘记",
            "words": [
              {
                "text": "忘记",
                "pinyin": "wang ji",
                "tone": "wàng jì",
                "pos": "verb",
                "vi": "quên"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wang ji",
            "tone": "wàng jì"
          },
          {
            "stage": "word",
            "vi": "có thể",
            "hanzi": "可能",
            "words": [
              {
                "text": "可能",
                "pinyin": "ke neng",
                "tone": "kě néng",
                "pos": "adv",
                "vi": "có thể"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ke neng",
            "tone": "kě néng"
          },
          {
            "stage": "word",
            "vi": "bên cạnh",
            "hanzi": "旁边",
            "words": [
              {
                "text": "旁边",
                "pinyin": "pang bian",
                "tone": "páng biān",
                "pos": "noun",
                "vi": "bên cạnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "pang bian",
            "tone": "páng biān"
          },
          {
            "stage": "word",
            "vi": "sốt ruột, vội",
            "hanzi": "着急",
            "words": [
              {
                "text": "着急",
                "pinyin": "zhao ji",
                "tone": "zháo jí",
                "pos": "adj",
                "vi": "sốt ruột, vội"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhao ji",
            "tone": "zháo jí"
          },
          {
            "stage": "phrase",
            "vi": "đột nhiên không tìm thấy",
            "hanzi": "突然找不到",
            "words": [
              {
                "text": "突然",
                "pinyin": "tu ran",
                "tone": "tū rán",
                "pos": "adv",
                "vi": "đột nhiên"
              },
              {
                "text": "找",
                "pinyin": "zhao",
                "tone": "zhǎo",
                "pos": "verb",
                "vi": "tìm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tu ran zhao",
            "tone": "tū rán zhǎo"
          },
          {
            "stage": "phrase",
            "vi": "đồ quan trọng",
            "hanzi": "重要的东西",
            "words": [
              {
                "text": "重要",
                "pinyin": "zhong yao",
                "tone": "zhòng yào",
                "pos": "adj",
                "vi": "quan trọng"
              },
              {
                "text": "东西",
                "pinyin": "dong xi",
                "tone": "dōng xī",
                "pos": "noun",
                "vi": "đồ vật"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhong yao dong xi",
            "tone": "zhòng yào dōng xī"
          },
          {
            "stage": "phrase",
            "vi": "quên chỗ",
            "hanzi": "忘记地方",
            "words": [
              {
                "text": "忘记",
                "pinyin": "wang ji",
                "tone": "wàng jì",
                "pos": "verb",
                "vi": "quên"
              },
              {
                "text": "地方",
                "pinyin": "di fang",
                "tone": "dì fāng",
                "pos": "noun",
                "vi": "nơi, chỗ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wang ji di fang",
            "tone": "wàng jì dì fāng"
          },
          {
            "stage": "phrase",
            "vi": "đừng sốt ruột",
            "hanzi": "别着急",
            "words": [
              {
                "text": "着急",
                "pinyin": "zhao ji",
                "tone": "zháo jí",
                "pos": "adj",
                "vi": "sốt ruột, vội"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhao ji",
            "tone": "zháo jí"
          },
          {
            "stage": "sentence",
            "vi": "Tôi đột nhiên không tìm thấy điện thoại nữa.",
            "hanzi": "我突然找不到手机了",
            "words": [
              {
                "text": "突然",
                "pinyin": "tu ran",
                "tone": "tū rán",
                "pos": "adv",
                "vi": "đột nhiên"
              },
              {
                "text": "找",
                "pinyin": "zhao",
                "tone": "zhǎo",
                "pos": "verb",
                "vi": "tìm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tu ran zhao",
            "tone": "tū rán zhǎo"
          },
          {
            "stage": "sentence",
            "vi": "Đồ quan trọng như vậy thì không thể quên.",
            "hanzi": "这么重要的东西不能忘记",
            "words": [
              {
                "text": "重要",
                "pinyin": "zhong yao",
                "tone": "zhòng yào",
                "pos": "adj",
                "vi": "quan trọng"
              },
              {
                "text": "东西",
                "pinyin": "dong xi",
                "tone": "dōng xī",
                "pos": "noun",
                "vi": "đồ vật"
              },
              {
                "text": "忘记",
                "pinyin": "wang ji",
                "tone": "wàng jì",
                "pos": "verb",
                "vi": "quên"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhong yao dong xi wang ji",
            "tone": "zhòng yào dōng xī wàng jì"
          },
          {
            "stage": "sentence",
            "vi": "Bạn xem bên cạnh bàn có không.",
            "hanzi": "你看看桌子旁边有没有",
            "words": [
              {
                "text": "旁边",
                "pinyin": "pang bian",
                "tone": "páng biān",
                "pos": "noun",
                "vi": "bên cạnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "pang bian",
            "tone": "páng biān"
          },
          {
            "stage": "sentence",
            "vi": "Đừng vội, chúng ta cùng tìm.",
            "hanzi": "别着急我们一起找",
            "words": [
              {
                "text": "着急",
                "pinyin": "zhao ji",
                "tone": "zháo jí",
                "pos": "adj",
                "vi": "sốt ruột, vội"
              },
              {
                "text": "找",
                "pinyin": "zhao",
                "tone": "zhǎo",
                "pos": "verb",
                "vi": "tìm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhao ji zhao",
            "tone": "zháo jí zhǎo"
          },
          {
            "stage": "mixed",
            "vi": "Sao đột nhiên lại không tìm thấy nữa?",
            "hanzi": "怎么突然找不到了",
            "words": [
              {
                "text": "突然",
                "pinyin": "tu ran",
                "tone": "tū rán",
                "pos": "adv",
                "vi": "đột nhiên"
              },
              {
                "text": "找",
                "pinyin": "zhao",
                "tone": "zhǎo",
                "pos": "verb",
                "vi": "tìm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tu ran zhao",
            "tone": "tū rán zhǎo"
          },
          {
            "stage": "mixed",
            "vi": "Đồ quan trọng có thể ở bên cạnh.",
            "hanzi": "重要的东西可能在旁边",
            "words": [
              {
                "text": "重要",
                "pinyin": "zhong yao",
                "tone": "zhòng yào",
                "pos": "adj",
                "vi": "quan trọng"
              },
              {
                "text": "东西",
                "pinyin": "dong xi",
                "tone": "dōng xī",
                "pos": "noun",
                "vi": "đồ vật"
              },
              {
                "text": "可能",
                "pinyin": "ke neng",
                "tone": "kě néng",
                "pos": "adv",
                "vi": "có thể"
              },
              {
                "text": "旁边",
                "pinyin": "pang bian",
                "tone": "páng biān",
                "pos": "noun",
                "vi": "bên cạnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhong yao dong xi ke neng pang bian",
            "tone": "zhòng yào dōng xī kě néng páng biān"
          }
        ]
      },
      {
        "id": "hsk3-l7",
        "no": 7,
        "titleZh": "我跟她都认识五年了",
        "titleVi": "Tôi và cô ấy quen nhau đã năm năm rồi",
        "items": [
          {
            "stage": "word",
            "vi": "quen, biết",
            "hanzi": "认识",
            "words": [
              {
                "text": "认识",
                "pinyin": "ren shi",
                "tone": "rèn shi",
                "pos": "verb",
                "vi": "quen, biết"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ren shi",
            "tone": "rèn shi"
          },
          {
            "stage": "word",
            "vi": "bạn bè",
            "hanzi": "朋友",
            "words": [
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "peng you",
            "tone": "péng yǒu"
          },
          {
            "stage": "word",
            "vi": "năm năm",
            "hanzi": "五年",
            "words": [
              {
                "text": "五年",
                "pinyin": "wu nian",
                "tone": "wǔ nián",
                "pos": "noun",
                "vi": "năm năm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wu nian",
            "tone": "wǔ nián"
          },
          {
            "stage": "word",
            "vi": "cùng nhau",
            "hanzi": "一起",
            "words": [
              {
                "text": "一起",
                "pinyin": "yi qi",
                "tone": "yì qǐ",
                "pos": "adv",
                "vi": "cùng nhau"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yi qi",
            "tone": "yì qǐ"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "guan xi",
            "tone": "guān xì"
          },
          {
            "stage": "word",
            "vi": "hiểu, biết rõ",
            "hanzi": "了解",
            "words": [
              {
                "text": "了解",
                "pinyin": "liao jie",
                "tone": "liǎo jiě",
                "pos": "verb",
                "vi": "hiểu, biết rõ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "liao jie",
            "tone": "liǎo jiě"
          },
          {
            "stage": "word",
            "vi": "bạn học",
            "hanzi": "同学",
            "words": [
              {
                "text": "同学",
                "pinyin": "tong xue",
                "tone": "tóng xué",
                "pos": "noun",
                "vi": "bạn học"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tong xue",
            "tone": "tóng xué"
          },
          {
            "stage": "word",
            "vi": "liên lạc",
            "hanzi": "联系",
            "words": [
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "lian xi",
            "tone": "lián xì"
          },
          {
            "stage": "word",
            "vi": "thường xuyên",
            "hanzi": "经常",
            "words": [
              {
                "text": "经常",
                "pinyin": "jing chang",
                "tone": "jīng cháng",
                "pos": "adv",
                "vi": "thường xuyên"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jing chang",
            "tone": "jīng cháng"
          },
          {
            "stage": "word",
            "vi": "nhớ",
            "hanzi": "记得",
            "words": [
              {
                "text": "记得",
                "pinyin": "ji de",
                "tone": "jì de",
                "pos": "verb",
                "vi": "nhớ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ji de",
            "tone": "jì de"
          },
          {
            "stage": "phrase",
            "vi": "quen nhau năm năm",
            "hanzi": "认识五年",
            "words": [
              {
                "text": "认识",
                "pinyin": "ren shi",
                "tone": "rèn shi",
                "pos": "verb",
                "vi": "quen, biết"
              },
              {
                "text": "五年",
                "pinyin": "wu nian",
                "tone": "wǔ nián",
                "pos": "noun",
                "vi": "năm năm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ren shi wu nian",
            "tone": "rèn shi wǔ nián"
          },
          {
            "stage": "phrase",
            "vi": "cùng nhau học",
            "hanzi": "一起学习",
            "words": [
              {
                "text": "一起",
                "pinyin": "yi qi",
                "tone": "yì qǐ",
                "pos": "adv",
                "vi": "cùng nhau"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yi qi",
            "tone": "yì qǐ"
          },
          {
            "stage": "phrase",
            "vi": "quan hệ rất tốt",
            "hanzi": "关系很好",
            "words": [
              {
                "text": "关系",
                "pinyin": "guan xi",
                "tone": "guān xì",
                "pos": "noun",
                "vi": "mối quan hệ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "guan xi",
            "tone": "guān xì"
          },
          {
            "stage": "phrase",
            "vi": "thường xuyên liên lạc",
            "hanzi": "经常联系",
            "words": [
              {
                "text": "经常",
                "pinyin": "jing chang",
                "tone": "jīng cháng",
                "pos": "adv",
                "vi": "thường xuyên"
              },
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jing chang lian xi",
            "tone": "jīng cháng lián xì"
          },
          {
            "stage": "sentence",
            "vi": "Tôi và cô ấy quen nhau đã năm năm rồi.",
            "hanzi": "我跟她都认识五年了",
            "words": [
              {
                "text": "认识",
                "pinyin": "ren shi",
                "tone": "rèn shi",
                "pos": "verb",
                "vi": "quen, biết"
              },
              {
                "text": "五年",
                "pinyin": "wu nian",
                "tone": "wǔ nián",
                "pos": "noun",
                "vi": "năm năm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ren shi wu nian",
            "tone": "rèn shi wǔ nián"
          },
          {
            "stage": "sentence",
            "vi": "Trước đây chúng tôi là bạn học.",
            "hanzi": "我们以前是同学",
            "words": [
              {
                "text": "同学",
                "pinyin": "tong xue",
                "tone": "tóng xué",
                "pos": "noun",
                "vi": "bạn học"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tong xue",
            "tone": "tóng xué"
          },
          {
            "stage": "sentence",
            "vi": "Bạn tốt nên hiểu nhau.",
            "hanzi": "好朋友应该互相了解",
            "words": [
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              },
              {
                "text": "了解",
                "pinyin": "liao jie",
                "tone": "liǎo jiě",
                "pos": "verb",
                "vi": "hiểu, biết rõ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "peng you liao jie",
            "tone": "péng yǒu liǎo jiě"
          },
          {
            "stage": "sentence",
            "vi": "Dù rất bận, chúng tôi vẫn thường xuyên liên lạc.",
            "hanzi": "虽然很忙我们还经常联系",
            "words": [
              {
                "text": "经常",
                "pinyin": "jing chang",
                "tone": "jīng cháng",
                "pos": "adv",
                "vi": "thường xuyên"
              },
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jing chang lian xi",
            "tone": "jīng cháng lián xì"
          },
          {
            "stage": "mixed",
            "vi": "Tôi và cô ấy quen nhau đã năm năm rồi.",
            "hanzi": "我跟她都认识五年了",
            "words": [
              {
                "text": "认识",
                "pinyin": "ren shi",
                "tone": "rèn shi",
                "pos": "verb",
                "vi": "quen, biết"
              },
              {
                "text": "五年",
                "pinyin": "wu nian",
                "tone": "wǔ nián",
                "pos": "noun",
                "vi": "năm năm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ren shi wu nian",
            "tone": "rèn shi wǔ nián"
          },
          {
            "stage": "mixed",
            "vi": "Bạn bè nên thường xuyên liên lạc.",
            "hanzi": "朋友之间要经常联系",
            "words": [
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              },
              {
                "text": "经常",
                "pinyin": "jing chang",
                "tone": "jīng cháng",
                "pos": "adv",
                "vi": "thường xuyên"
              },
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "peng you jing chang lian xi",
            "tone": "péng yǒu jīng cháng lián xì"
          }
        ]
      },
      {
        "id": "hsk3-l8",
        "no": 8,
        "titleZh": "你去哪儿我就去哪儿",
        "titleVi": "Bạn đi đâu thì tôi đi đó",
        "items": [
          {
            "stage": "word",
            "vi": "đâu, chỗ nào",
            "hanzi": "哪儿",
            "words": [
              {
                "text": "哪儿",
                "pinyin": "na er",
                "tone": "nǎ ér",
                "pos": "noun",
                "vi": "đâu, chỗ nào"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "na er",
            "tone": "nǎ ér"
          },
          {
            "stage": "word",
            "vi": "theo, cùng với",
            "hanzi": "跟",
            "words": [
              {
                "text": "跟",
                "pinyin": "gen",
                "tone": "gēn",
                "pos": "prep",
                "vi": "theo, cùng với"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gen",
            "tone": "gēn"
          },
          {
            "stage": "word",
            "vi": "thì, liền",
            "hanzi": "就",
            "words": [
              {
                "text": "就",
                "pinyin": "jiu",
                "tone": "jiù",
                "pos": "adv",
                "vi": "thì, liền"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jiu",
            "tone": "jiù"
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
                "pos": "verb",
                "vi": "quyết định"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jue ding",
            "tone": "jué dìng"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "chu fa",
            "tone": "chū fā"
          },
          {
            "stage": "word",
            "vi": "quay về",
            "hanzi": "回来",
            "words": [
              {
                "text": "回来",
                "pinyin": "hui lai",
                "tone": "huí lái",
                "pos": "verb",
                "vi": "quay về"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "hui lai",
            "tone": "huí lái"
          },
          {
            "stage": "word",
            "vi": "sẵn lòng",
            "hanzi": "愿意",
            "words": [
              {
                "text": "愿意",
                "pinyin": "yuan yi",
                "tone": "yuàn yì",
                "pos": "verb",
                "vi": "sẵn lòng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yuan yi",
            "tone": "yuàn yì"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xuan ze",
            "tone": "xuǎn zé"
          },
          {
            "stage": "phrase",
            "vi": "đi đâu",
            "hanzi": "去哪儿",
            "words": [
              {
                "text": "哪儿",
                "pinyin": "na er",
                "tone": "nǎ ér",
                "pos": "noun",
                "vi": "đâu, chỗ nào"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "na er",
            "tone": "nǎ ér"
          },
          {
            "stage": "phrase",
            "vi": "đi cùng bạn",
            "hanzi": "跟你一起",
            "words": [
              {
                "text": "跟",
                "pinyin": "gen",
                "tone": "gēn",
                "pos": "prep",
                "vi": "theo, cùng với"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gen",
            "tone": "gēn"
          },
          {
            "stage": "phrase",
            "vi": "xuất phát ngay",
            "hanzi": "马上出发",
            "words": [
              {
                "text": "出发",
                "pinyin": "chu fa",
                "tone": "chū fā",
                "pos": "verb",
                "vi": "xuất phát"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "chu fa",
            "tone": "chū fā"
          },
          {
            "stage": "phrase",
            "vi": "sẵn lòng lựa chọn",
            "hanzi": "愿意选择",
            "words": [
              {
                "text": "愿意",
                "pinyin": "yuan yi",
                "tone": "yuàn yì",
                "pos": "verb",
                "vi": "sẵn lòng"
              },
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yuan yi xuan ze",
            "tone": "yuàn yì xuǎn zé"
          },
          {
            "stage": "sentence",
            "vi": "Bạn đi đâu thì tôi đi đó.",
            "hanzi": "你去哪儿我就去哪儿",
            "words": [
              {
                "text": "哪儿",
                "pinyin": "na er",
                "tone": "nǎ ér",
                "pos": "noun",
                "vi": "đâu, chỗ nào"
              },
              {
                "text": "就",
                "pinyin": "jiu",
                "tone": "jiù",
                "pos": "adv",
                "vi": "thì, liền"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "na er jiu",
            "tone": "nǎ ér jiù"
          },
          {
            "stage": "sentence",
            "vi": "Tôi sẵn lòng đi du lịch cùng bạn.",
            "hanzi": "我愿意跟你一起旅行",
            "words": [
              {
                "text": "愿意",
                "pinyin": "yuan yi",
                "tone": "yuàn yì",
                "pos": "verb",
                "vi": "sẵn lòng"
              },
              {
                "text": "跟",
                "pinyin": "gen",
                "tone": "gēn",
                "pos": "prep",
                "vi": "theo, cùng với"
              },
              {
                "text": "旅行",
                "pinyin": "lü xing",
                "tone": "lǚ xíng",
                "pos": "verb",
                "vi": "du lịch"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yuan yi gen lü xing",
            "tone": "yuàn yì gēn lǚ xíng"
          },
          {
            "stage": "sentence",
            "vi": "Chúng tôi quyết định ngày mai xuất phát.",
            "hanzi": "我们决定明天出发",
            "words": [
              {
                "text": "决定",
                "pinyin": "jue ding",
                "tone": "jué dìng",
                "pos": "verb",
                "vi": "quyết định"
              },
              {
                "text": "出发",
                "pinyin": "chu fa",
                "tone": "chū fā",
                "pos": "verb",
                "vi": "xuất phát"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jue ding chu fa",
            "tone": "jué dìng chū fā"
          },
          {
            "stage": "sentence",
            "vi": "Sau khi quay về rồi nói cho tôi phương hướng.",
            "hanzi": "回来以后再告诉我方向",
            "words": [
              {
                "text": "回来",
                "pinyin": "hui lai",
                "tone": "huí lái",
                "pos": "verb",
                "vi": "quay về"
              },
              {
                "text": "方向",
                "pinyin": "fang xiang",
                "tone": "fāng xiàng",
                "pos": "noun",
                "vi": "phương hướng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "hui lai fang xiang",
            "tone": "huí lái fāng xiàng"
          },
          {
            "stage": "mixed",
            "vi": "Bạn đi đâu thì tôi đi đó.",
            "hanzi": "你去哪儿我就去哪儿",
            "words": [
              {
                "text": "哪儿",
                "pinyin": "na er",
                "tone": "nǎ ér",
                "pos": "noun",
                "vi": "đâu, chỗ nào"
              },
              {
                "text": "就",
                "pinyin": "jiu",
                "tone": "jiù",
                "pos": "adv",
                "vi": "thì, liền"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "na er jiu",
            "tone": "nǎ ér jiù"
          },
          {
            "stage": "mixed",
            "vi": "Tôi sẵn lòng xuất phát cùng bạn.",
            "hanzi": "我愿意跟你一起出发",
            "words": [
              {
                "text": "愿意",
                "pinyin": "yuan yi",
                "tone": "yuàn yì",
                "pos": "verb",
                "vi": "sẵn lòng"
              },
              {
                "text": "跟",
                "pinyin": "gen",
                "tone": "gēn",
                "pos": "prep",
                "vi": "theo, cùng với"
              },
              {
                "text": "出发",
                "pinyin": "chu fa",
                "tone": "chū fā",
                "pos": "verb",
                "vi": "xuất phát"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yuan yi gen chu fa",
            "tone": "yuàn yì gēn chū fā"
          }
        ]
      },
      {
        "id": "hsk3-l9",
        "no": 9,
        "titleZh": "她的汉语说得跟中国人一样好",
        "titleVi": "Tiếng Trung của cô ấy nói hay như người Trung Quốc",
        "items": [
          {
            "stage": "word",
            "vi": "tiếng Trung",
            "hanzi": "汉语",
            "words": [
              {
                "text": "汉语",
                "pinyin": "han yu",
                "tone": "hàn yǔ",
                "pos": "noun",
                "vi": "tiếng Trung"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "han yu",
            "tone": "hàn yǔ"
          },
          {
            "stage": "word",
            "vi": "người Trung Quốc",
            "hanzi": "中国人",
            "words": [
              {
                "text": "中国人",
                "pinyin": "zhong guo ren",
                "tone": "zhōng guó rén",
                "pos": "noun",
                "vi": "người Trung Quốc"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhong guo ren",
            "tone": "zhōng guó rén"
          },
          {
            "stage": "word",
            "vi": "giống nhau, như nhau",
            "hanzi": "一样",
            "words": [
              {
                "text": "一样",
                "pinyin": "yi yang",
                "tone": "yí yàng",
                "pos": "adj",
                "vi": "giống nhau, như nhau"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yi yang",
            "tone": "yí yàng"
          },
          {
            "stage": "word",
            "vi": "lưu loát",
            "hanzi": "流利",
            "words": [
              {
                "text": "流利",
                "pinyin": "liu li",
                "tone": "liú lì",
                "pos": "adj",
                "vi": "lưu loát"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "liu li",
            "tone": "liú lì"
          },
          {
            "stage": "word",
            "vi": "phát âm",
            "hanzi": "发音",
            "words": [
              {
                "text": "发音",
                "pinyin": "fa yin",
                "tone": "fā yīn",
                "pos": "noun",
                "vi": "phát âm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fa yin",
            "tone": "fā yīn"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jin bu",
            "tone": "jìn bù"
          },
          {
            "stage": "word",
            "vi": "luyện tập",
            "hanzi": "练习",
            "words": [
              {
                "text": "练习",
                "pinyin": "lian xi",
                "tone": "liàn xí",
                "pos": "verb",
                "vi": "luyện tập"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "lian xi",
            "tone": "liàn xí"
          },
          {
            "stage": "word",
            "vi": "ngữ pháp",
            "hanzi": "语法",
            "words": [
              {
                "text": "语法",
                "pinyin": "yu fa",
                "tone": "yǔ fǎ",
                "pos": "noun",
                "vi": "ngữ pháp"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yu fa",
            "tone": "yǔ fǎ"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ren zhen",
            "tone": "rèn zhēn"
          },
          {
            "stage": "word",
            "vi": "trình độ",
            "hanzi": "水平",
            "words": [
              {
                "text": "水平",
                "pinyin": "shui ping",
                "tone": "shuǐ píng",
                "pos": "noun",
                "vi": "trình độ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shui ping",
            "tone": "shuǐ píng"
          },
          {
            "stage": "phrase",
            "vi": "nói tiếng Trung",
            "hanzi": "说汉语",
            "words": [
              {
                "text": "汉语",
                "pinyin": "han yu",
                "tone": "hàn yǔ",
                "pos": "noun",
                "vi": "tiếng Trung"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "han yu",
            "tone": "hàn yǔ"
          },
          {
            "stage": "phrase",
            "vi": "phát âm rất tốt",
            "hanzi": "发音很好",
            "words": [
              {
                "text": "发音",
                "pinyin": "fa yin",
                "tone": "fā yīn",
                "pos": "noun",
                "vi": "phát âm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fa yin",
            "tone": "fā yīn"
          },
          {
            "stage": "phrase",
            "vi": "luyện tập nghiêm túc",
            "hanzi": "认真练习",
            "words": [
              {
                "text": "认真",
                "pinyin": "ren zhen",
                "tone": "rèn zhēn",
                "pos": "adj",
                "vi": "nghiêm túc"
              },
              {
                "text": "练习",
                "pinyin": "lian xi",
                "tone": "liàn xí",
                "pos": "verb",
                "vi": "luyện tập"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ren zhen lian xi",
            "tone": "rèn zhēn liàn xí"
          },
          {
            "stage": "phrase",
            "vi": "trình độ nâng cao",
            "hanzi": "水平提高",
            "words": [
              {
                "text": "水平",
                "pinyin": "shui ping",
                "tone": "shuǐ píng",
                "pos": "noun",
                "vi": "trình độ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shui ping",
            "tone": "shuǐ píng"
          },
          {
            "stage": "sentence",
            "vi": "Tiếng Trung của cô ấy nói hay như người Trung Quốc.",
            "hanzi": "她的汉语说得跟中国人一样好",
            "words": [
              {
                "text": "汉语",
                "pinyin": "han yu",
                "tone": "hàn yǔ",
                "pos": "noun",
                "vi": "tiếng Trung"
              },
              {
                "text": "中国人",
                "pinyin": "zhong guo ren",
                "tone": "zhōng guó rén",
                "pos": "noun",
                "vi": "người Trung Quốc"
              },
              {
                "text": "一样",
                "pinyin": "yi yang",
                "tone": "yí yàng",
                "pos": "adj",
                "vi": "giống nhau, như nhau"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "han yu zhong guo ren yi yang",
            "tone": "hàn yǔ zhōng guó rén yí yàng"
          },
          {
            "stage": "sentence",
            "vi": "Phát âm của cô ấy rất lưu loát.",
            "hanzi": "她的发音很流利",
            "words": [
              {
                "text": "发音",
                "pinyin": "fa yin",
                "tone": "fā yīn",
                "pos": "noun",
                "vi": "phát âm"
              },
              {
                "text": "流利",
                "pinyin": "liu li",
                "tone": "liú lì",
                "pos": "adj",
                "vi": "lưu loát"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fa yin liu li",
            "tone": "fā yīn liú lì"
          },
          {
            "stage": "sentence",
            "vi": "Mỗi ngày luyện tập nghiêm túc thì sẽ tiến bộ.",
            "hanzi": "每天认真练习就会进步",
            "words": [
              {
                "text": "认真",
                "pinyin": "ren zhen",
                "tone": "rèn zhēn",
                "pos": "adj",
                "vi": "nghiêm túc"
              },
              {
                "text": "练习",
                "pinyin": "lian xi",
                "tone": "liàn xí",
                "pos": "verb",
                "vi": "luyện tập"
              },
              {
                "text": "进步",
                "pinyin": "jin bu",
                "tone": "jìn bù",
                "pos": "verb",
                "vi": "tiến bộ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ren zhen lian xi jin bu",
            "tone": "rèn zhēn liàn xí jìn bù"
          },
          {
            "stage": "sentence",
            "vi": "Ngữ pháp và phát âm đều rất quan trọng.",
            "hanzi": "语法和发音都很重要",
            "words": [
              {
                "text": "语法",
                "pinyin": "yu fa",
                "tone": "yǔ fǎ",
                "pos": "noun",
                "vi": "ngữ pháp"
              },
              {
                "text": "发音",
                "pinyin": "fa yin",
                "tone": "fā yīn",
                "pos": "noun",
                "vi": "phát âm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yu fa fa yin",
            "tone": "yǔ fǎ fā yīn"
          },
          {
            "stage": "mixed",
            "vi": "Tiếng Trung của cô ấy nói hay như người Trung Quốc.",
            "hanzi": "她的汉语说得跟中国人一样好",
            "words": [
              {
                "text": "汉语",
                "pinyin": "han yu",
                "tone": "hàn yǔ",
                "pos": "noun",
                "vi": "tiếng Trung"
              },
              {
                "text": "中国人",
                "pinyin": "zhong guo ren",
                "tone": "zhōng guó rén",
                "pos": "noun",
                "vi": "người Trung Quốc"
              },
              {
                "text": "一样",
                "pinyin": "yi yang",
                "tone": "yí yàng",
                "pos": "adj",
                "vi": "giống nhau, như nhau"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "han yu zhong guo ren yi yang",
            "tone": "hàn yǔ zhōng guó rén yí yàng"
          },
          {
            "stage": "mixed",
            "vi": "Luyện tập nghiêm túc có thể nâng cao trình độ.",
            "hanzi": "认真练习可以提高水平",
            "words": [
              {
                "text": "认真",
                "pinyin": "ren zhen",
                "tone": "rèn zhēn",
                "pos": "adj",
                "vi": "nghiêm túc"
              },
              {
                "text": "练习",
                "pinyin": "lian xi",
                "tone": "liàn xí",
                "pos": "verb",
                "vi": "luyện tập"
              },
              {
                "text": "水平",
                "pinyin": "shui ping",
                "tone": "shuǐ píng",
                "pos": "noun",
                "vi": "trình độ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ren zhen lian xi shui ping",
            "tone": "rèn zhēn liàn xí shuǐ píng"
          }
        ]
      },
      {
        "id": "hsk3-l10",
        "no": 10,
        "titleZh": "数学比历史难多了",
        "titleVi": "Toán khó hơn lịch sử nhiều",
        "items": [
          {
            "stage": "word",
            "vi": "toán học",
            "hanzi": "数学",
            "words": [
              {
                "text": "数学",
                "pinyin": "shu xue",
                "tone": "shù xué",
                "pos": "noun",
                "vi": "toán học"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shu xue",
            "tone": "shù xué"
          },
          {
            "stage": "word",
            "vi": "lịch sử",
            "hanzi": "历史",
            "words": [
              {
                "text": "历史",
                "pinyin": "li shi",
                "tone": "lì shǐ",
                "pos": "noun",
                "vi": "lịch sử"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "li shi",
            "tone": "lì shǐ"
          },
          {
            "stage": "word",
            "vi": "khó",
            "hanzi": "难",
            "words": [
              {
                "text": "难",
                "pinyin": "nan",
                "tone": "nán",
                "pos": "adj",
                "vi": "khó"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "nan",
            "tone": "nán"
          },
          {
            "stage": "word",
            "vi": "dễ",
            "hanzi": "容易",
            "words": [
              {
                "text": "容易",
                "pinyin": "rong yi",
                "tone": "róng yì",
                "pos": "adj",
                "vi": "dễ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "rong yi",
            "tone": "róng yì"
          },
          {
            "stage": "word",
            "vi": "so với",
            "hanzi": "比",
            "words": [
              {
                "text": "比",
                "pinyin": "bi",
                "tone": "bǐ",
                "pos": "prep",
                "vi": "so với"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "bi",
            "tone": "bǐ"
          },
          {
            "stage": "word",
            "vi": "hơn nhiều",
            "hanzi": "多了",
            "words": [
              {
                "text": "多了",
                "pinyin": "duo le",
                "tone": "duō le",
                "pos": "adv",
                "vi": "hơn nhiều"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "duo le",
            "tone": "duō le"
          },
          {
            "stage": "word",
            "vi": "thành tích, điểm số",
            "hanzi": "成绩",
            "words": [
              {
                "text": "成绩",
                "pinyin": "cheng ji",
                "tone": "chéng jì",
                "pos": "noun",
                "vi": "thành tích, điểm số"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "cheng ji",
            "tone": "chéng jì"
          },
          {
            "stage": "word",
            "vi": "kỳ thi",
            "hanzi": "考试",
            "words": [
              {
                "text": "考试",
                "pinyin": "kao shi",
                "tone": "kǎo shì",
                "pos": "noun",
                "vi": "kỳ thi"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "kao shi",
            "tone": "kǎo shì"
          },
          {
            "stage": "word",
            "vi": "ôn tập",
            "hanzi": "复习",
            "words": [
              {
                "text": "复习",
                "pinyin": "fu xi",
                "tone": "fù xí",
                "pos": "verb",
                "vi": "ôn tập"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fu xi",
            "tone": "fù xí"
          },
          {
            "stage": "word",
            "vi": "cảm thấy, cho rằng",
            "hanzi": "觉得",
            "words": [
              {
                "text": "觉得",
                "pinyin": "jue de",
                "tone": "jué de",
                "pos": "verb",
                "vi": "cảm thấy, cho rằng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jue de",
            "tone": "jué de"
          },
          {
            "stage": "phrase",
            "vi": "khó hơn lịch sử",
            "hanzi": "比历史难",
            "words": [
              {
                "text": "比",
                "pinyin": "bi",
                "tone": "bǐ",
                "pos": "prep",
                "vi": "so với"
              },
              {
                "text": "历史",
                "pinyin": "li shi",
                "tone": "lì shǐ",
                "pos": "noun",
                "vi": "lịch sử"
              },
              {
                "text": "难",
                "pinyin": "nan",
                "tone": "nán",
                "pos": "adj",
                "vi": "khó"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "bi li shi nan",
            "tone": "bǐ lì shǐ nán"
          },
          {
            "stage": "phrase",
            "vi": "điểm toán",
            "hanzi": "数学成绩",
            "words": [
              {
                "text": "数学",
                "pinyin": "shu xue",
                "tone": "shù xué",
                "pos": "noun",
                "vi": "toán học"
              },
              {
                "text": "成绩",
                "pinyin": "cheng ji",
                "tone": "chéng jì",
                "pos": "noun",
                "vi": "thành tích, điểm số"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shu xue cheng ji",
            "tone": "shù xué chéng jì"
          },
          {
            "stage": "phrase",
            "vi": "chuẩn bị thi",
            "hanzi": "准备考试",
            "words": [
              {
                "text": "考试",
                "pinyin": "kao shi",
                "tone": "kǎo shì",
                "pos": "noun",
                "vi": "kỳ thi"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "kao shi",
            "tone": "kǎo shì"
          },
          {
            "stage": "phrase",
            "vi": "ôn tập nghiêm túc",
            "hanzi": "认真复习",
            "words": [
              {
                "text": "复习",
                "pinyin": "fu xi",
                "tone": "fù xí",
                "pos": "verb",
                "vi": "ôn tập"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fu xi",
            "tone": "fù xí"
          },
          {
            "stage": "sentence",
            "vi": "Toán khó hơn lịch sử nhiều.",
            "hanzi": "数学比历史难多了",
            "words": [
              {
                "text": "数学",
                "pinyin": "shu xue",
                "tone": "shù xué",
                "pos": "noun",
                "vi": "toán học"
              },
              {
                "text": "比",
                "pinyin": "bi",
                "tone": "bǐ",
                "pos": "prep",
                "vi": "so với"
              },
              {
                "text": "历史",
                "pinyin": "li shi",
                "tone": "lì shǐ",
                "pos": "noun",
                "vi": "lịch sử"
              },
              {
                "text": "难",
                "pinyin": "nan",
                "tone": "nán",
                "pos": "adj",
                "vi": "khó"
              },
              {
                "text": "多了",
                "pinyin": "duo le",
                "tone": "duō le",
                "pos": "adv",
                "vi": "hơn nhiều"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shu xue bi li shi nan duo le",
            "tone": "shù xué bǐ lì shǐ nán duō le"
          },
          {
            "stage": "sentence",
            "vi": "Tôi thấy lịch sử tương đối dễ.",
            "hanzi": "我觉得历史比较容易",
            "words": [
              {
                "text": "觉得",
                "pinyin": "jue de",
                "tone": "jué de",
                "pos": "verb",
                "vi": "cảm thấy, cho rằng"
              },
              {
                "text": "历史",
                "pinyin": "li shi",
                "tone": "lì shǐ",
                "pos": "noun",
                "vi": "lịch sử"
              },
              {
                "text": "容易",
                "pinyin": "rong yi",
                "tone": "róng yì",
                "pos": "adj",
                "vi": "dễ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jue de li shi rong yi",
            "tone": "jué de lì shǐ róng yì"
          },
          {
            "stage": "sentence",
            "vi": "Trước kỳ thi phải ôn tập nghiêm túc.",
            "hanzi": "考试以前要认真复习",
            "words": [
              {
                "text": "考试",
                "pinyin": "kao shi",
                "tone": "kǎo shì",
                "pos": "noun",
                "vi": "kỳ thi"
              },
              {
                "text": "复习",
                "pinyin": "fu xi",
                "tone": "fù xí",
                "pos": "verb",
                "vi": "ôn tập"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "kao shi fu xi",
            "tone": "kǎo shì fù xí"
          },
          {
            "stage": "sentence",
            "vi": "Điểm toán của anh ấy ngày càng tốt.",
            "hanzi": "他的数学成绩越来越好",
            "words": [
              {
                "text": "数学",
                "pinyin": "shu xue",
                "tone": "shù xué",
                "pos": "noun",
                "vi": "toán học"
              },
              {
                "text": "成绩",
                "pinyin": "cheng ji",
                "tone": "chéng jì",
                "pos": "noun",
                "vi": "thành tích, điểm số"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shu xue cheng ji",
            "tone": "shù xué chéng jì"
          },
          {
            "stage": "mixed",
            "vi": "Toán khó hơn lịch sử nhiều.",
            "hanzi": "数学比历史难多了",
            "words": [
              {
                "text": "数学",
                "pinyin": "shu xue",
                "tone": "shù xué",
                "pos": "noun",
                "vi": "toán học"
              },
              {
                "text": "比",
                "pinyin": "bi",
                "tone": "bǐ",
                "pos": "prep",
                "vi": "so với"
              },
              {
                "text": "历史",
                "pinyin": "li shi",
                "tone": "lì shǐ",
                "pos": "noun",
                "vi": "lịch sử"
              },
              {
                "text": "难",
                "pinyin": "nan",
                "tone": "nán",
                "pos": "adj",
                "vi": "khó"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shu xue bi li shi nan",
            "tone": "shù xué bǐ lì shǐ nán"
          },
          {
            "stage": "mixed",
            "vi": "Trước kỳ thi phải ôn toán.",
            "hanzi": "考试以前要复习数学",
            "words": [
              {
                "text": "考试",
                "pinyin": "kao shi",
                "tone": "kǎo shì",
                "pos": "noun",
                "vi": "kỳ thi"
              },
              {
                "text": "复习",
                "pinyin": "fu xi",
                "tone": "fù xí",
                "pos": "verb",
                "vi": "ôn tập"
              },
              {
                "text": "数学",
                "pinyin": "shu xue",
                "tone": "shù xué",
                "pos": "noun",
                "vi": "toán học"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "kao shi fu xi shu xue",
            "tone": "kǎo shì fù xí shù xué"
          }
        ]
      }
    ],
    "HSK4": [
      {
        "id": "hsk4-l6",
        "no": 6,
        "titleZh": "一分钱一分货",
        "titleVi": "Tiền nào của nấy",
        "items": [
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhi liang",
            "tone": "zhì liàng"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jia ge",
            "tone": "jià gé"
          },
          {
            "stage": "word",
            "vi": "hàng hóa, sản phẩm",
            "hanzi": "商品",
            "words": [
              {
                "text": "商品",
                "pinyin": "shang pin",
                "tone": "shāng pǐn",
                "pos": "noun",
                "vi": "hàng hóa, sản phẩm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shang pin",
            "tone": "shāng pǐn"
          },
          {
            "stage": "word",
            "vi": "dịch vụ",
            "hanzi": "服务",
            "words": [
              {
                "text": "服务",
                "pinyin": "fu wu",
                "tone": "fú wù",
                "pos": "noun",
                "vi": "dịch vụ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fu wu",
            "tone": "fú wù"
          },
          {
            "stage": "word",
            "vi": "đáng",
            "hanzi": "值得",
            "words": [
              {
                "text": "值得",
                "pinyin": "zhi de",
                "tone": "zhí dé",
                "pos": "verb",
                "vi": "đáng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhi de",
            "tone": "zhí dé"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "pian yi",
            "tone": "pián yi"
          },
          {
            "stage": "word",
            "vi": "đắt",
            "hanzi": "贵",
            "words": [
              {
                "text": "贵",
                "pinyin": "gui",
                "tone": "guì",
                "pos": "adj",
                "vi": "đắt"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gui",
            "tone": "guì"
          },
          {
            "stage": "word",
            "vi": "so sánh",
            "hanzi": "比较",
            "words": [
              {
                "text": "比较",
                "pinyin": "bi jiao",
                "tone": "bǐ jiào",
                "pos": "verb",
                "vi": "so sánh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "bi jiao",
            "tone": "bǐ jiào"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xuan ze",
            "tone": "xuǎn zé"
          },
          {
            "stage": "word",
            "vi": "hài lòng",
            "hanzi": "满意",
            "words": [
              {
                "text": "满意",
                "pinyin": "man yi",
                "tone": "mǎn yì",
                "pos": "adj",
                "vi": "hài lòng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "man yi",
            "tone": "mǎn yì"
          },
          {
            "stage": "phrase",
            "vi": "tiền nào của nấy",
            "hanzi": "一分钱一分货",
            "words": [
              {
                "text": "质量",
                "pinyin": "zhi liang",
                "tone": "zhì liàng",
                "pos": "noun",
                "vi": "chất lượng"
              },
              {
                "text": "价格",
                "pinyin": "jia ge",
                "tone": "jià gé",
                "pos": "noun",
                "vi": "giá cả"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhi liang jia ge",
            "tone": "zhì liàng jià gé"
          },
          {
            "stage": "phrase",
            "vi": "chất lượng khá tốt",
            "hanzi": "质量不错",
            "words": [
              {
                "text": "质量",
                "pinyin": "zhi liang",
                "tone": "zhì liàng",
                "pos": "noun",
                "vi": "chất lượng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhi liang",
            "tone": "zhì liàng"
          },
          {
            "stage": "phrase",
            "vi": "giá rẻ",
            "hanzi": "价格便宜",
            "words": [
              {
                "text": "价格",
                "pinyin": "jia ge",
                "tone": "jià gé",
                "pos": "noun",
                "vi": "giá cả"
              },
              {
                "text": "便宜",
                "pinyin": "pian yi",
                "tone": "pián yi",
                "pos": "adj",
                "vi": "rẻ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jia ge pian yi",
            "tone": "jià gé pián yi"
          },
          {
            "stage": "phrase",
            "vi": "đáng lựa chọn",
            "hanzi": "值得选择",
            "words": [
              {
                "text": "值得",
                "pinyin": "zhi de",
                "tone": "zhí dé",
                "pos": "verb",
                "vi": "đáng"
              },
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhi de xuan ze",
            "tone": "zhí dé xuǎn zé"
          },
          {
            "stage": "phrase",
            "vi": "hài lòng về dịch vụ",
            "hanzi": "服务满意",
            "words": [
              {
                "text": "服务",
                "pinyin": "fu wu",
                "tone": "fú wù",
                "pos": "noun",
                "vi": "dịch vụ"
              },
              {
                "text": "满意",
                "pinyin": "man yi",
                "tone": "mǎn yì",
                "pos": "adj",
                "vi": "hài lòng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fu wu man yi",
            "tone": "fú wù mǎn yì"
          },
          {
            "stage": "sentence",
            "vi": "Khi mua đồ, thường là tiền nào của nấy.",
            "hanzi": "买东西常常是一分钱一分货",
            "words": [
              {
                "text": "质量",
                "pinyin": "zhi liang",
                "tone": "zhì liàng",
                "pos": "noun",
                "vi": "chất lượng"
              },
              {
                "text": "价格",
                "pinyin": "jia ge",
                "tone": "jià gé",
                "pos": "noun",
                "vi": "giá cả"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhi liang jia ge",
            "tone": "zhì liàng jià gé"
          },
          {
            "stage": "sentence",
            "vi": "Sản phẩm này tuy đắt nhưng chất lượng rất tốt.",
            "hanzi": "这个商品虽然贵但是质量很好",
            "words": [
              {
                "text": "商品",
                "pinyin": "shang pin",
                "tone": "shāng pǐn",
                "pos": "noun",
                "vi": "hàng hóa, sản phẩm"
              },
              {
                "text": "贵",
                "pinyin": "gui",
                "tone": "guì",
                "pos": "adj",
                "vi": "đắt"
              },
              {
                "text": "质量",
                "pinyin": "zhi liang",
                "tone": "zhì liàng",
                "pos": "noun",
                "vi": "chất lượng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shang pin gui zhi liang",
            "tone": "shāng pǐn guì zhì liàng"
          },
          {
            "stage": "sentence",
            "vi": "Bạn có thể so sánh giá cả và dịch vụ trước.",
            "hanzi": "你可以先比较价格和服务",
            "words": [
              {
                "text": "比较",
                "pinyin": "bi jiao",
                "tone": "bǐ jiào",
                "pos": "verb",
                "vi": "so sánh"
              },
              {
                "text": "价格",
                "pinyin": "jia ge",
                "tone": "jià gé",
                "pos": "noun",
                "vi": "giá cả"
              },
              {
                "text": "服务",
                "pinyin": "fu wu",
                "tone": "fú wù",
                "pos": "noun",
                "vi": "dịch vụ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "bi jiao jia ge fu wu",
            "tone": "bǐ jiào jià gé fú wù"
          },
          {
            "stage": "sentence",
            "vi": "Chọn sản phẩm phù hợp thì mới hài lòng.",
            "hanzi": "选择合适的商品才会满意",
            "words": [
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              },
              {
                "text": "商品",
                "pinyin": "shang pin",
                "tone": "shāng pǐn",
                "pos": "noun",
                "vi": "hàng hóa, sản phẩm"
              },
              {
                "text": "满意",
                "pinyin": "man yi",
                "tone": "mǎn yì",
                "pos": "adj",
                "vi": "hài lòng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xuan ze shang pin man yi",
            "tone": "xuǎn zé shāng pǐn mǎn yì"
          },
          {
            "stage": "mixed",
            "vi": "Tiền nào của nấy.",
            "hanzi": "一分钱一分货",
            "words": [
              {
                "text": "质量",
                "pinyin": "zhi liang",
                "tone": "zhì liàng",
                "pos": "noun",
                "vi": "chất lượng"
              },
              {
                "text": "价格",
                "pinyin": "jia ge",
                "tone": "jià gé",
                "pos": "noun",
                "vi": "giá cả"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhi liang jia ge",
            "tone": "zhì liàng jià gé"
          }
        ]
      },
      {
        "id": "hsk4-l7",
        "no": 7,
        "titleZh": "最好的医生是自己",
        "titleVi": "Bác sĩ tốt nhất là chính mình",
        "items": [
          {
            "stage": "word",
            "vi": "bác sĩ",
            "hanzi": "医生",
            "words": [
              {
                "text": "医生",
                "pinyin": "yi sheng",
                "tone": "yī shēng",
                "pos": "noun",
                "vi": "bác sĩ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yi sheng",
            "tone": "yī shēng"
          },
          {
            "stage": "word",
            "vi": "bản thân",
            "hanzi": "自己",
            "words": [
              {
                "text": "自己",
                "pinyin": "zi ji",
                "tone": "zì jǐ",
                "pos": "noun",
                "vi": "bản thân"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zi ji",
            "tone": "zì jǐ"
          },
          {
            "stage": "word",
            "vi": "khỏe mạnh",
            "hanzi": "健康",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jian kang",
            "tone": "jiàn kāng"
          },
          {
            "stage": "word",
            "vi": "cơ thể, sức khỏe",
            "hanzi": "身体",
            "words": [
              {
                "text": "身体",
                "pinyin": "shen ti",
                "tone": "shēn tǐ",
                "pos": "noun",
                "vi": "cơ thể, sức khỏe"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shen ti",
            "tone": "shēn tǐ"
          },
          {
            "stage": "word",
            "vi": "phòng ngừa",
            "hanzi": "预防",
            "words": [
              {
                "text": "预防",
                "pinyin": "yu fang",
                "tone": "yù fáng",
                "pos": "verb",
                "vi": "phòng ngừa"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yu fang",
            "tone": "yù fáng"
          },
          {
            "stage": "word",
            "vi": "rèn luyện, tập luyện",
            "hanzi": "锻炼",
            "words": [
              {
                "text": "锻炼",
                "pinyin": "duan lian",
                "tone": "duàn liàn",
                "pos": "verb",
                "vi": "rèn luyện, tập luyện"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "duan lian",
            "tone": "duàn liàn"
          },
          {
            "stage": "word",
            "vi": "ăn uống",
            "hanzi": "饮食",
            "words": [
              {
                "text": "饮食",
                "pinyin": "yin shi",
                "tone": "yǐn shí",
                "pos": "noun",
                "vi": "ăn uống"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yin shi",
            "tone": "yǐn shí"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xiu xi",
            "tone": "xiū xi"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xi guan",
            "tone": "xí guàn"
          },
          {
            "stage": "word",
            "vi": "quan trọng",
            "hanzi": "重要",
            "words": [
              {
                "text": "重要",
                "pinyin": "zhong yao",
                "tone": "zhòng yào",
                "pos": "adj",
                "vi": "quan trọng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhong yao",
            "tone": "zhòng yào"
          },
          {
            "stage": "phrase",
            "vi": "bác sĩ tốt nhất",
            "hanzi": "最好的医生",
            "words": [
              {
                "text": "医生",
                "pinyin": "yi sheng",
                "tone": "yī shēng",
                "pos": "noun",
                "vi": "bác sĩ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yi sheng",
            "tone": "yī shēng"
          },
          {
            "stage": "phrase",
            "vi": "chăm sóc bản thân",
            "hanzi": "照顾自己",
            "words": [
              {
                "text": "自己",
                "pinyin": "zi ji",
                "tone": "zì jǐ",
                "pos": "noun",
                "vi": "bản thân"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zi ji",
            "tone": "zì jǐ"
          },
          {
            "stage": "phrase",
            "vi": "giữ sức khỏe",
            "hanzi": "保持健康",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jian kang",
            "tone": "jiàn kāng"
          },
          {
            "stage": "phrase",
            "vi": "chú ý ăn uống",
            "hanzi": "注意饮食",
            "words": [
              {
                "text": "饮食",
                "pinyin": "yin shi",
                "tone": "yǐn shí",
                "pos": "noun",
                "vi": "ăn uống"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yin shi",
            "tone": "yǐn shí"
          },
          {
            "stage": "phrase",
            "vi": "kiên trì tập luyện",
            "hanzi": "坚持锻炼",
            "words": [
              {
                "text": "锻炼",
                "pinyin": "duan lian",
                "tone": "duàn liàn",
                "pos": "verb",
                "vi": "rèn luyện, tập luyện"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "duan lian",
            "tone": "duàn liàn"
          },
          {
            "stage": "sentence",
            "vi": "Bác sĩ tốt nhất là chính bản thân mình.",
            "hanzi": "最好的医生是自己",
            "words": [
              {
                "text": "医生",
                "pinyin": "yi sheng",
                "tone": "yī shēng",
                "pos": "noun",
                "vi": "bác sĩ"
              },
              {
                "text": "自己",
                "pinyin": "zi ji",
                "tone": "zì jǐ",
                "pos": "noun",
                "vi": "bản thân"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yi sheng zi ji",
            "tone": "yī shēng zì jǐ"
          },
          {
            "stage": "sentence",
            "vi": "Cơ thể khỏe mạnh cần thói quen tốt.",
            "hanzi": "健康的身体需要好习惯",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              },
              {
                "text": "身体",
                "pinyin": "shen ti",
                "tone": "shēn tǐ",
                "pos": "noun",
                "vi": "cơ thể, sức khỏe"
              },
              {
                "text": "习惯",
                "pinyin": "xi guan",
                "tone": "xí guàn",
                "pos": "noun",
                "vi": "thói quen"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jian kang shen ti xi guan",
            "tone": "jiàn kāng shēn tǐ xí guàn"
          },
          {
            "stage": "sentence",
            "vi": "Tập luyện mỗi ngày cũng phải chú ý nghỉ ngơi.",
            "hanzi": "每天锻炼也要注意休息",
            "words": [
              {
                "text": "锻炼",
                "pinyin": "duan lian",
                "tone": "duàn liàn",
                "pos": "verb",
                "vi": "rèn luyện, tập luyện"
              },
              {
                "text": "休息",
                "pinyin": "xiu xi",
                "tone": "xiū xi",
                "pos": "verb",
                "vi": "nghỉ ngơi"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "duan lian xiu xi",
            "tone": "duàn liàn xiū xi"
          },
          {
            "stage": "sentence",
            "vi": "Phòng ngừa quan trọng hơn đi khám sau khi bị bệnh.",
            "hanzi": "预防比生病以后看医生更重要",
            "words": [
              {
                "text": "预防",
                "pinyin": "yu fang",
                "tone": "yù fáng",
                "pos": "verb",
                "vi": "phòng ngừa"
              },
              {
                "text": "医生",
                "pinyin": "yi sheng",
                "tone": "yī shēng",
                "pos": "noun",
                "vi": "bác sĩ"
              },
              {
                "text": "重要",
                "pinyin": "zhong yao",
                "tone": "zhòng yào",
                "pos": "adj",
                "vi": "quan trọng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yu fang yi sheng zhong yao",
            "tone": "yù fáng yī shēng zhòng yào"
          },
          {
            "stage": "mixed",
            "vi": "Cơ thể khỏe mạnh cần thói quen tốt.",
            "hanzi": "健康的身体需要好习惯",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              },
              {
                "text": "身体",
                "pinyin": "shen ti",
                "tone": "shēn tǐ",
                "pos": "noun",
                "vi": "cơ thể, sức khỏe"
              },
              {
                "text": "习惯",
                "pinyin": "xi guan",
                "tone": "xí guàn",
                "pos": "noun",
                "vi": "thói quen"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jian kang shen ti xi guan",
            "tone": "jiàn kāng shēn tǐ xí guàn"
          }
        ]
      },
      {
        "id": "hsk4-l8",
        "no": 8,
        "titleZh": "生活中不缺少美",
        "titleVi": "Trong cuộc sống không thiếu cái đẹp",
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
          },
          {
            "stage": "word",
            "vi": "thiếu",
            "hanzi": "缺少",
            "words": [
              {
                "text": "缺少",
                "pinyin": "que shao",
                "tone": "quē shǎo",
                "pos": "verb",
                "vi": "thiếu"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "que shao",
            "tone": "quē shǎo"
          },
          {
            "stage": "word",
            "vi": "đẹp",
            "hanzi": "美",
            "words": [
              {
                "text": "美",
                "pinyin": "mei",
                "tone": "měi",
                "pos": "adj",
                "vi": "đẹp"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "mei",
            "tone": "měi"
          },
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fa xian",
            "tone": "fā xiàn"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zi ran",
            "tone": "zì rán"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "feng jing",
            "tone": "fēng jǐng"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xin qing",
            "tone": "xīn qíng"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "pu tong",
            "tone": "pǔ tōng"
          },
          {
            "stage": "word",
            "vi": "đôi mắt",
            "hanzi": "眼睛",
            "words": [
              {
                "text": "眼睛",
                "pinyin": "yan jing",
                "tone": "yǎn jīng",
                "pos": "noun",
                "vi": "đôi mắt"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yan jing",
            "tone": "yǎn jīng"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gan shou",
            "tone": "gǎn shòu"
          },
          {
            "stage": "phrase",
            "vi": "không thiếu cái đẹp",
            "hanzi": "不缺少美",
            "words": [
              {
                "text": "缺少",
                "pinyin": "que shao",
                "tone": "quē shǎo",
                "pos": "verb",
                "vi": "thiếu"
              },
              {
                "text": "美",
                "pinyin": "mei",
                "tone": "měi",
                "pos": "adj",
                "vi": "đẹp"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "que shao mei",
            "tone": "quē shǎo měi"
          },
          {
            "stage": "phrase",
            "vi": "phát hiện phong cảnh",
            "hanzi": "发现风景",
            "words": [
              {
                "text": "发现",
                "pinyin": "fa xian",
                "tone": "fā xiàn",
                "pos": "verb",
                "vi": "phát hiện"
              },
              {
                "text": "风景",
                "pinyin": "feng jing",
                "tone": "fēng jǐng",
                "pos": "noun",
                "vi": "phong cảnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fa xian feng jing",
            "tone": "fā xiàn fēng jǐng"
          },
          {
            "stage": "phrase",
            "vi": "cuộc sống bình thường",
            "hanzi": "普通生活",
            "words": [
              {
                "text": "普通",
                "pinyin": "pu tong",
                "tone": "pǔ tōng",
                "pos": "adj",
                "vi": "bình thường"
              },
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "pu tong sheng huo",
            "tone": "pǔ tōng shēng huó"
          },
          {
            "stage": "phrase",
            "vi": "cảm nhận thiên nhiên",
            "hanzi": "感受自然",
            "words": [
              {
                "text": "感受",
                "pinyin": "gan shou",
                "tone": "gǎn shòu",
                "pos": "verb",
                "vi": "cảm nhận"
              },
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "thiên nhiên"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gan shou zi ran",
            "tone": "gǎn shòu zì rán"
          },
          {
            "stage": "phrase",
            "vi": "tâm trạng rất tốt",
            "hanzi": "心情很好",
            "words": [
              {
                "text": "心情",
                "pinyin": "xin qing",
                "tone": "xīn qíng",
                "pos": "noun",
                "vi": "tâm trạng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xin qing",
            "tone": "xīn qíng"
          },
          {
            "stage": "sentence",
            "vi": "Trong cuộc sống không thiếu cái đẹp.",
            "hanzi": "生活中不缺少美",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "缺少",
                "pinyin": "que shao",
                "tone": "quē shǎo",
                "pos": "verb",
                "vi": "thiếu"
              },
              {
                "text": "美",
                "pinyin": "mei",
                "tone": "měi",
                "pos": "adj",
                "vi": "đẹp"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "sheng huo que shao mei",
            "tone": "shēng huó quē shǎo měi"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần đôi mắt biết phát hiện cái đẹp.",
            "hanzi": "我们需要发现美的眼睛",
            "words": [
              {
                "text": "发现",
                "pinyin": "fa xian",
                "tone": "fā xiàn",
                "pos": "verb",
                "vi": "phát hiện"
              },
              {
                "text": "美",
                "pinyin": "mei",
                "tone": "měi",
                "pos": "adj",
                "vi": "đẹp"
              },
              {
                "text": "眼睛",
                "pinyin": "yan jing",
                "tone": "yǎn jīng",
                "pos": "noun",
                "vi": "đôi mắt"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fa xian mei yan jing",
            "tone": "fā xiàn měi yǎn jīng"
          },
          {
            "stage": "sentence",
            "vi": "Trong cuộc sống bình thường cũng có nhiều phong cảnh đẹp.",
            "hanzi": "普通生活里也有很多风景",
            "words": [
              {
                "text": "普通",
                "pinyin": "pu tong",
                "tone": "pǔ tōng",
                "pos": "adj",
                "vi": "bình thường"
              },
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "风景",
                "pinyin": "feng jing",
                "tone": "fēng jǐng",
                "pos": "noun",
                "vi": "phong cảnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "pu tong sheng huo feng jing",
            "tone": "pǔ tōng shēng huó fēng jǐng"
          },
          {
            "stage": "sentence",
            "vi": "Cảm nhận thiên nhiên sẽ làm tâm trạng tốt hơn.",
            "hanzi": "感受自然会让心情变好",
            "words": [
              {
                "text": "感受",
                "pinyin": "gan shou",
                "tone": "gǎn shòu",
                "pos": "verb",
                "vi": "cảm nhận"
              },
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "thiên nhiên"
              },
              {
                "text": "心情",
                "pinyin": "xin qing",
                "tone": "xīn qíng",
                "pos": "noun",
                "vi": "tâm trạng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gan shou zi ran xin qing",
            "tone": "gǎn shòu zì rán xīn qíng"
          },
          {
            "stage": "mixed",
            "vi": "Trong cuộc sống không thiếu cái đẹp.",
            "hanzi": "生活中不缺少美",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "缺少",
                "pinyin": "que shao",
                "tone": "quē shǎo",
                "pos": "verb",
                "vi": "thiếu"
              },
              {
                "text": "美",
                "pinyin": "mei",
                "tone": "měi",
                "pos": "adj",
                "vi": "đẹp"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "sheng huo que shao mei",
            "tone": "shēng huó quē shǎo měi"
          }
        ]
      },
      {
        "id": "hsk4-l9",
        "no": 9,
        "titleZh": "阳光总在风雨后",
        "titleVi": "Ánh nắng luôn đến sau mưa gió",
        "items": [
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yang guang",
            "tone": "yáng guāng"
          },
          {
            "stage": "word",
            "vi": "mưa gió, khó khăn",
            "hanzi": "风雨",
            "words": [
              {
                "text": "风雨",
                "pinyin": "feng yu",
                "tone": "fēng yǔ",
                "pos": "noun",
                "vi": "mưa gió, khó khăn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "feng yu",
            "tone": "fēng yǔ"
          },
          {
            "stage": "word",
            "vi": "khó khăn",
            "hanzi": "困难",
            "words": [
              {
                "text": "困难",
                "pinyin": "kun nan",
                "tone": "kùn nán",
                "pos": "noun",
                "vi": "khó khăn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "kun nan",
            "tone": "kùn nán"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jian chi",
            "tone": "jiān chí"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xi wang",
            "tone": "xī wàng"
          },
          {
            "stage": "word",
            "vi": "thành công",
            "hanzi": "成功",
            "words": [
              {
                "text": "成功",
                "pinyin": "cheng gong",
                "tone": "chéng gōng",
                "pos": "noun",
                "vi": "thành công"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "cheng gong",
            "tone": "chéng gōng"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shi bai",
            "tone": "shī bài"
          },
          {
            "stage": "word",
            "vi": "trải qua",
            "hanzi": "经历",
            "words": [
              {
                "text": "经历",
                "pinyin": "jing li",
                "tone": "jīng lì",
                "pos": "verb",
                "vi": "trải qua"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jing li",
            "tone": "jīng lì"
          },
          {
            "stage": "word",
            "vi": "dũng cảm",
            "hanzi": "勇敢",
            "words": [
              {
                "text": "勇敢",
                "pinyin": "yong gan",
                "tone": "yǒng gǎn",
                "pos": "adj",
                "vi": "dũng cảm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yong gan",
            "tone": "yǒng gǎn"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xiang xin",
            "tone": "xiāng xìn"
          },
          {
            "stage": "phrase",
            "vi": "sau mưa gió",
            "hanzi": "风雨以后",
            "words": [
              {
                "text": "风雨",
                "pinyin": "feng yu",
                "tone": "fēng yǔ",
                "pos": "noun",
                "vi": "mưa gió, khó khăn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "feng yu",
            "tone": "fēng yǔ"
          },
          {
            "stage": "phrase",
            "vi": "nhìn thấy ánh nắng",
            "hanzi": "看到阳光",
            "words": [
              {
                "text": "阳光",
                "pinyin": "yang guang",
                "tone": "yáng guāng",
                "pos": "noun",
                "vi": "ánh nắng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yang guang",
            "tone": "yáng guāng"
          },
          {
            "stage": "phrase",
            "vi": "kiên trì hy vọng",
            "hanzi": "坚持希望",
            "words": [
              {
                "text": "坚持",
                "pinyin": "jian chi",
                "tone": "jiān chí",
                "pos": "verb",
                "vi": "kiên trì"
              },
              {
                "text": "希望",
                "pinyin": "xi wang",
                "tone": "xī wàng",
                "pos": "noun",
                "vi": "hy vọng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jian chi xi wang",
            "tone": "jiān chí xī wàng"
          },
          {
            "stage": "phrase",
            "vi": "trải qua khó khăn",
            "hanzi": "经历困难",
            "words": [
              {
                "text": "经历",
                "pinyin": "jing li",
                "tone": "jīng lì",
                "pos": "verb",
                "vi": "trải qua"
              },
              {
                "text": "困难",
                "pinyin": "kun nan",
                "tone": "kùn nán",
                "pos": "noun",
                "vi": "khó khăn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jing li kun nan",
            "tone": "jīng lì kùn nán"
          },
          {
            "stage": "phrase",
            "vi": "dũng cảm tin tưởng",
            "hanzi": "勇敢相信",
            "words": [
              {
                "text": "勇敢",
                "pinyin": "yong gan",
                "tone": "yǒng gǎn",
                "pos": "adj",
                "vi": "dũng cảm"
              },
              {
                "text": "相信",
                "pinyin": "xiang xin",
                "tone": "xiāng xìn",
                "pos": "verb",
                "vi": "tin tưởng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yong gan xiang xin",
            "tone": "yǒng gǎn xiāng xìn"
          },
          {
            "stage": "sentence",
            "vi": "Ánh nắng luôn đến sau mưa gió.",
            "hanzi": "阳光总在风雨后",
            "words": [
              {
                "text": "阳光",
                "pinyin": "yang guang",
                "tone": "yáng guāng",
                "pos": "noun",
                "vi": "ánh nắng"
              },
              {
                "text": "风雨",
                "pinyin": "feng yu",
                "tone": "fēng yǔ",
                "pos": "noun",
                "vi": "mưa gió, khó khăn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yang guang feng yu",
            "tone": "yáng guāng fēng yǔ"
          },
          {
            "stage": "sentence",
            "vi": "Sau khi trải qua khó khăn, con người sẽ dũng cảm hơn.",
            "hanzi": "经历困难以后人会更勇敢",
            "words": [
              {
                "text": "经历",
                "pinyin": "jing li",
                "tone": "jīng lì",
                "pos": "verb",
                "vi": "trải qua"
              },
              {
                "text": "困难",
                "pinyin": "kun nan",
                "tone": "kùn nán",
                "pos": "noun",
                "vi": "khó khăn"
              },
              {
                "text": "勇敢",
                "pinyin": "yong gan",
                "tone": "yǒng gǎn",
                "pos": "adj",
                "vi": "dũng cảm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jing li kun nan yong gan",
            "tone": "jīng lì kùn nán yǒng gǎn"
          },
          {
            "stage": "sentence",
            "vi": "Sau thất bại vẫn phải giữ hy vọng.",
            "hanzi": "失败以后也要坚持希望",
            "words": [
              {
                "text": "失败",
                "pinyin": "shi bai",
                "tone": "shī bài",
                "pos": "verb",
                "vi": "thất bại"
              },
              {
                "text": "坚持",
                "pinyin": "jian chi",
                "tone": "jiān chí",
                "pos": "verb",
                "vi": "kiên trì"
              },
              {
                "text": "希望",
                "pinyin": "xi wang",
                "tone": "xī wàng",
                "pos": "noun",
                "vi": "hy vọng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shi bai jian chi xi wang",
            "tone": "shī bài jiān chí xī wàng"
          },
          {
            "stage": "sentence",
            "vi": "Tôi tin rằng sau nỗ lực sẽ thành công.",
            "hanzi": "我相信努力以后会成功",
            "words": [
              {
                "text": "相信",
                "pinyin": "xiang xin",
                "tone": "xiāng xìn",
                "pos": "verb",
                "vi": "tin tưởng"
              },
              {
                "text": "成功",
                "pinyin": "cheng gong",
                "tone": "chéng gōng",
                "pos": "noun",
                "vi": "thành công"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xiang xin cheng gong",
            "tone": "xiāng xìn chéng gōng"
          },
          {
            "stage": "mixed",
            "vi": "Ánh nắng luôn đến sau mưa gió.",
            "hanzi": "阳光总在风雨后",
            "words": [
              {
                "text": "阳光",
                "pinyin": "yang guang",
                "tone": "yáng guāng",
                "pos": "noun",
                "vi": "ánh nắng"
              },
              {
                "text": "风雨",
                "pinyin": "feng yu",
                "tone": "fēng yǔ",
                "pos": "noun",
                "vi": "mưa gió, khó khăn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yang guang feng yu",
            "tone": "yáng guāng fēng yǔ"
          }
        ]
      },
      {
        "id": "hsk4-l10",
        "no": 10,
        "titleZh": "幸福的标准",
        "titleVi": "Tiêu chuẩn của hạnh phúc",
        "items": [
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xing fu",
            "tone": "xìng fú"
          },
          {
            "stage": "word",
            "vi": "tiêu chuẩn",
            "hanzi": "标准",
            "words": [
              {
                "text": "标准",
                "pinyin": "biao zhun",
                "tone": "biāo zhǔn",
                "pos": "noun",
                "vi": "tiêu chuẩn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "biao zhun",
            "tone": "biāo zhǔn"
          },
          {
            "stage": "word",
            "vi": "gia đình",
            "hanzi": "家庭",
            "words": [
              {
                "text": "家庭",
                "pinyin": "jia ting",
                "tone": "jiā tíng",
                "pos": "noun",
                "vi": "gia đình"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jia ting",
            "tone": "jiā tíng"
          },
          {
            "stage": "word",
            "vi": "công việc",
            "hanzi": "工作",
            "words": [
              {
                "text": "工作",
                "pinyin": "gong zuo",
                "tone": "gōng zuò",
                "pos": "noun",
                "vi": "công việc"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gong zuo",
            "tone": "gōng zuò"
          },
          {
            "stage": "word",
            "vi": "khỏe mạnh",
            "hanzi": "健康",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jian kang",
            "tone": "jiàn kāng"
          },
          {
            "stage": "word",
            "vi": "mãn nguyện, thỏa mãn",
            "hanzi": "满足",
            "words": [
              {
                "text": "满足",
                "pinyin": "man zu",
                "tone": "mǎn zú",
                "pos": "adj",
                "vi": "mãn nguyện, thỏa mãn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "man zu",
            "tone": "mǎn zú"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "mu biao",
            "tone": "mù biāo"
          },
          {
            "stage": "word",
            "vi": "tiền bạc",
            "hanzi": "金钱",
            "words": [
              {
                "text": "金钱",
                "pinyin": "jin qian",
                "tone": "jīn qián",
                "pos": "noun",
                "vi": "tiền bạc"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jin qian",
            "tone": "jīn qián"
          },
          {
            "stage": "word",
            "vi": "tự do",
            "hanzi": "自由",
            "words": [
              {
                "text": "自由",
                "pinyin": "zi you",
                "tone": "zì yóu",
                "pos": "noun",
                "vi": "tự do"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zi you",
            "tone": "zì yóu"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tai du",
            "tone": "tài dù"
          },
          {
            "stage": "phrase",
            "vi": "tiêu chuẩn của hạnh phúc",
            "hanzi": "幸福的标准",
            "words": [
              {
                "text": "幸福",
                "pinyin": "xing fu",
                "tone": "xìng fú",
                "pos": "noun",
                "vi": "hạnh phúc"
              },
              {
                "text": "标准",
                "pinyin": "biao zhun",
                "tone": "biāo zhǔn",
                "pos": "noun",
                "vi": "tiêu chuẩn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xing fu biao zhun",
            "tone": "xìng fú biāo zhǔn"
          },
          {
            "stage": "phrase",
            "vi": "gia đình khỏe mạnh",
            "hanzi": "家庭健康",
            "words": [
              {
                "text": "家庭",
                "pinyin": "jia ting",
                "tone": "jiā tíng",
                "pos": "noun",
                "vi": "gia đình"
              },
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jia ting jian kang",
            "tone": "jiā tíng jiàn kāng"
          },
          {
            "stage": "phrase",
            "vi": "mục tiêu công việc",
            "hanzi": "工作目标",
            "words": [
              {
                "text": "工作",
                "pinyin": "gong zuo",
                "tone": "gōng zuò",
                "pos": "noun",
                "vi": "công việc"
              },
              {
                "text": "目标",
                "pinyin": "mu biao",
                "tone": "mù biāo",
                "pos": "noun",
                "vi": "mục tiêu"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gong zuo mu biao",
            "tone": "gōng zuò mù biāo"
          },
          {
            "stage": "phrase",
            "vi": "tiền bạc và tự do",
            "hanzi": "金钱和自由",
            "words": [
              {
                "text": "金钱",
                "pinyin": "jin qian",
                "tone": "jīn qián",
                "pos": "noun",
                "vi": "tiền bạc"
              },
              {
                "text": "自由",
                "pinyin": "zi you",
                "tone": "zì yóu",
                "pos": "noun",
                "vi": "tự do"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jin qian zi you",
            "tone": "jīn qián zì yóu"
          },
          {
            "stage": "phrase",
            "vi": "thái độ biết đủ",
            "hanzi": "满足的态度",
            "words": [
              {
                "text": "满足",
                "pinyin": "man zu",
                "tone": "mǎn zú",
                "pos": "adj",
                "vi": "mãn nguyện, thỏa mãn"
              },
              {
                "text": "态度",
                "pinyin": "tai du",
                "tone": "tài dù",
                "pos": "noun",
                "vi": "thái độ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "man zu tai du",
            "tone": "mǎn zú tài dù"
          },
          {
            "stage": "sentence",
            "vi": "Tiêu chuẩn hạnh phúc của mỗi người không giống nhau.",
            "hanzi": "每个人幸福的标准不一样",
            "words": [
              {
                "text": "幸福",
                "pinyin": "xing fu",
                "tone": "xìng fú",
                "pos": "noun",
                "vi": "hạnh phúc"
              },
              {
                "text": "标准",
                "pinyin": "biao zhun",
                "tone": "biāo zhǔn",
                "pos": "noun",
                "vi": "tiêu chuẩn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xing fu biao zhun",
            "tone": "xìng fú biāo zhǔn"
          },
          {
            "stage": "sentence",
            "vi": "Có người cho rằng một gia đình khỏe mạnh là quan trọng nhất.",
            "hanzi": "有人觉得健康的家庭最重要",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              },
              {
                "text": "家庭",
                "pinyin": "jia ting",
                "tone": "jiā tíng",
                "pos": "noun",
                "vi": "gia đình"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jian kang jia ting",
            "tone": "jiàn kāng jiā tíng"
          },
          {
            "stage": "sentence",
            "vi": "Tiền bạc không phải mục tiêu duy nhất.",
            "hanzi": "金钱不是唯一的目标",
            "words": [
              {
                "text": "金钱",
                "pinyin": "jin qian",
                "tone": "jīn qián",
                "pos": "noun",
                "vi": "tiền bạc"
              },
              {
                "text": "目标",
                "pinyin": "mu biao",
                "tone": "mù biāo",
                "pos": "noun",
                "vi": "mục tiêu"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jin qian mu biao",
            "tone": "jīn qián mù biāo"
          },
          {
            "stage": "sentence",
            "vi": "Biết hài lòng cũng là một thái độ sống.",
            "hanzi": "懂得满足也是一种生活态度",
            "words": [
              {
                "text": "满足",
                "pinyin": "man zu",
                "tone": "mǎn zú",
                "pos": "adj",
                "vi": "mãn nguyện, thỏa mãn"
              },
              {
                "text": "态度",
                "pinyin": "tai du",
                "tone": "tài dù",
                "pos": "noun",
                "vi": "thái độ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "man zu tai du",
            "tone": "mǎn zú tài dù"
          },
          {
            "stage": "mixed",
            "vi": "Tiêu chuẩn hạnh phúc của mỗi người không giống nhau.",
            "hanzi": "每个人幸福的标准不一样",
            "words": [
              {
                "text": "幸福",
                "pinyin": "xing fu",
                "tone": "xìng fú",
                "pos": "noun",
                "vi": "hạnh phúc"
              },
              {
                "text": "标准",
                "pinyin": "biao zhun",
                "tone": "biāo zhǔn",
                "pos": "noun",
                "vi": "tiêu chuẩn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xing fu biao zhun",
            "tone": "xìng fú biāo zhǔn"
          }
        ]
      }
    ],
    "HSK5": [
      {
        "id": "hsk5-l7",
        "no": 7,
        "titleZh": "成语故事两则",
        "titleVi": "Hai câu chuyện thành ngữ",
        "items": [
          {
            "stage": "word",
            "vi": "thành ngữ",
            "hanzi": "成语",
            "words": [
              {
                "text": "成语",
                "pinyin": "cheng yu",
                "tone": "chéng yǔ",
                "pos": "noun",
                "vi": "thành ngữ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "cheng yu",
            "tone": "chéng yǔ"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gu shi",
            "tone": "gù shì"
          },
          {
            "stage": "word",
            "vi": "đạo lý",
            "hanzi": "道理",
            "words": [
              {
                "text": "道理",
                "pinyin": "dao li",
                "tone": "dào lǐ",
                "pos": "noun",
                "vi": "đạo lý"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "dao li",
            "tone": "dào lǐ"
          },
          {
            "stage": "word",
            "vi": "ngôn ngữ",
            "hanzi": "语言",
            "words": [
              {
                "text": "语言",
                "pinyin": "yu yan",
                "tone": "yǔ yán",
                "pos": "noun",
                "vi": "ngôn ngữ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yu yan",
            "tone": "yǔ yán"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "giải thích",
            "hanzi": "解释",
            "words": [
              {
                "text": "解释",
                "pinyin": "jie shi",
                "tone": "jiě shì",
                "pos": "verb",
                "vi": "giải thích"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jie shi",
            "tone": "jiě shì"
          },
          {
            "stage": "word",
            "vi": "ghi nhớ",
            "hanzi": "记住",
            "words": [
              {
                "text": "记住",
                "pinyin": "ji zhu",
                "tone": "jì zhù",
                "pos": "verb",
                "vi": "ghi nhớ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ji zhu",
            "tone": "jì zhù"
          },
          {
            "stage": "word",
            "vi": "sử dụng",
            "hanzi": "使用",
            "words": [
              {
                "text": "使用",
                "pinyin": "shi yong",
                "tone": "shǐ yòng",
                "pos": "verb",
                "vi": "sử dụng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shi yong",
            "tone": "shǐ yòng"
          },
          {
            "stage": "word",
            "vi": "thời cổ đại",
            "hanzi": "古代",
            "words": [
              {
                "text": "古代",
                "pinyin": "gu dai",
                "tone": "gǔ dài",
                "pos": "noun",
                "vi": "thời cổ đại"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gu dai",
            "tone": "gǔ dài"
          },
          {
            "stage": "word",
            "vi": "ý nghĩa",
            "hanzi": "意思",
            "words": [
              {
                "text": "意思",
                "pinyin": "yi si",
                "tone": "yì sī",
                "pos": "noun",
                "vi": "ý nghĩa"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yi si",
            "tone": "yì sī"
          },
          {
            "stage": "word",
            "vi": "học",
            "hanzi": "学习",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xue xi",
            "tone": "xué xí"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zhi hui",
            "tone": "zhì huì"
          },
          {
            "stage": "phrase",
            "vi": "câu chuyện thành ngữ",
            "hanzi": "成语故事",
            "words": [
              {
                "text": "成语",
                "pinyin": "cheng yu",
                "tone": "chéng yǔ",
                "pos": "noun",
                "vi": "thành ngữ"
              },
              {
                "text": "故事",
                "pinyin": "gu shi",
                "tone": "gù shì",
                "pos": "noun",
                "vi": "câu chuyện"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "cheng yu gu shi",
            "tone": "chéng yǔ gù shì"
          },
          {
            "stage": "phrase",
            "vi": "giải thích ý nghĩa",
            "hanzi": "解释意思",
            "words": [
              {
                "text": "解释",
                "pinyin": "jie shi",
                "tone": "jiě shì",
                "pos": "verb",
                "vi": "giải thích"
              },
              {
                "text": "意思",
                "pinyin": "yi si",
                "tone": "yì sī",
                "pos": "noun",
                "vi": "ý nghĩa"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jie shi yi si",
            "tone": "jiě shì yì sī"
          },
          {
            "stage": "phrase",
            "vi": "học văn hóa",
            "hanzi": "学习文化",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xue xi wen hua",
            "tone": "xué xí wén huà"
          },
          {
            "stage": "phrase",
            "vi": "trí tuệ cổ đại",
            "hanzi": "古代智慧",
            "words": [
              {
                "text": "古代",
                "pinyin": "gu dai",
                "tone": "gǔ dài",
                "pos": "noun",
                "vi": "thời cổ đại"
              },
              {
                "text": "智慧",
                "pinyin": "zhi hui",
                "tone": "zhì huì",
                "pos": "noun",
                "vi": "trí tuệ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gu dai zhi hui",
            "tone": "gǔ dài zhì huì"
          },
          {
            "stage": "phrase",
            "vi": "sử dụng đúng",
            "hanzi": "正确使用",
            "words": [
              {
                "text": "使用",
                "pinyin": "shi yong",
                "tone": "shǐ yòng",
                "pos": "verb",
                "vi": "sử dụng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shi yong",
            "tone": "shǐ yòng"
          },
          {
            "stage": "sentence",
            "vi": "Trong chuyện thành ngữ thường có đạo lý sâu sắc.",
            "hanzi": "成语故事里常常有深刻的道理",
            "words": [
              {
                "text": "成语",
                "pinyin": "cheng yu",
                "tone": "chéng yǔ",
                "pos": "noun",
                "vi": "thành ngữ"
              },
              {
                "text": "故事",
                "pinyin": "gu shi",
                "tone": "gù shì",
                "pos": "noun",
                "vi": "câu chuyện"
              },
              {
                "text": "道理",
                "pinyin": "dao li",
                "tone": "dào lǐ",
                "pos": "noun",
                "vi": "đạo lý"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "cheng yu gu shi dao li",
            "tone": "chéng yǔ gù shì dào lǐ"
          },
          {
            "stage": "sentence",
            "vi": "Học thành ngữ cũng có thể hiểu văn hóa Trung Quốc.",
            "hanzi": "学习成语也能了解中国文化",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "成语",
                "pinyin": "cheng yu",
                "tone": "chéng yǔ",
                "pos": "noun",
                "vi": "thành ngữ"
              },
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xue xi cheng yu wen hua",
            "tone": "xué xí chéng yǔ wén huà"
          },
          {
            "stage": "sentence",
            "vi": "Giáo viên giải thích ý nghĩa trước rồi mới để chúng tôi sử dụng.",
            "hanzi": "老师先解释意思再让我们使用",
            "words": [
              {
                "text": "解释",
                "pinyin": "jie shi",
                "tone": "jiě shì",
                "pos": "verb",
                "vi": "giải thích"
              },
              {
                "text": "意思",
                "pinyin": "yi si",
                "tone": "yì sī",
                "pos": "noun",
                "vi": "ý nghĩa"
              },
              {
                "text": "使用",
                "pinyin": "shi yong",
                "tone": "shǐ yòng",
                "pos": "verb",
                "vi": "sử dụng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jie shi yi si shi yong",
            "tone": "jiě shì yì sī shǐ yòng"
          },
          {
            "stage": "sentence",
            "vi": "Trong các câu chuyện cổ đại có rất nhiều trí tuệ.",
            "hanzi": "古代故事中有很多智慧",
            "words": [
              {
                "text": "古代",
                "pinyin": "gu dai",
                "tone": "gǔ dài",
                "pos": "noun",
                "vi": "thời cổ đại"
              },
              {
                "text": "故事",
                "pinyin": "gu shi",
                "tone": "gù shì",
                "pos": "noun",
                "vi": "câu chuyện"
              },
              {
                "text": "智慧",
                "pinyin": "zhi hui",
                "tone": "zhì huì",
                "pos": "noun",
                "vi": "trí tuệ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gu dai gu shi zhi hui",
            "tone": "gǔ dài gù shì zhì huì"
          },
          {
            "stage": "mixed",
            "vi": "Trong chuyện thành ngữ có đạo lý.",
            "hanzi": "成语故事里有道理",
            "words": [
              {
                "text": "成语",
                "pinyin": "cheng yu",
                "tone": "chéng yǔ",
                "pos": "noun",
                "vi": "thành ngữ"
              },
              {
                "text": "故事",
                "pinyin": "gu shi",
                "tone": "gù shì",
                "pos": "noun",
                "vi": "câu chuyện"
              },
              {
                "text": "道理",
                "pinyin": "dao li",
                "tone": "dào lǐ",
                "pos": "noun",
                "vi": "đạo lý"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "cheng yu gu shi dao li",
            "tone": "chéng yǔ gù shì dào lǐ"
          }
        ]
      },
      {
        "id": "hsk5-l8",
        "no": 8,
        "titleZh": "朝三暮四的古今义",
        "titleVi": "Nghĩa xưa và nay của 'triều tam mộ tứ'",
        "items": [
          {
            "stage": "word",
            "vi": "thành ngữ triều tam mộ tứ",
            "hanzi": "朝三暮四",
            "words": [
              {
                "text": "朝三暮四",
                "pinyin": "chao san mu si",
                "tone": "cháo sān mù sì",
                "pos": "noun",
                "vi": "thành ngữ triều tam mộ tứ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "chao san mu si",
            "tone": "cháo sān mù sì"
          },
          {
            "stage": "word",
            "vi": "thời cổ đại",
            "hanzi": "古代",
            "words": [
              {
                "text": "古代",
                "pinyin": "gu dai",
                "tone": "gǔ dài",
                "pos": "noun",
                "vi": "thời cổ đại"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gu dai",
            "tone": "gǔ dài"
          },
          {
            "stage": "word",
            "vi": "hiện đại",
            "hanzi": "现代",
            "words": [
              {
                "text": "现代",
                "pinyin": "xian dai",
                "tone": "xiàn dài",
                "pos": "noun",
                "vi": "hiện đại"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xian dai",
            "tone": "xiàn dài"
          },
          {
            "stage": "word",
            "vi": "ý nghĩa",
            "hanzi": "意义",
            "words": [
              {
                "text": "意义",
                "pinyin": "yi yi",
                "tone": "yì yì",
                "pos": "noun",
                "vi": "ý nghĩa"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yi yi",
            "tone": "yì yì"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gai bian",
            "tone": "gǎi biàn"
          },
          {
            "stage": "word",
            "vi": "từ ngữ",
            "hanzi": "词语",
            "words": [
              {
                "text": "词语",
                "pinyin": "ci yu",
                "tone": "cí yǔ",
                "pos": "noun",
                "vi": "từ ngữ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ci yu",
            "tone": "cí yǔ"
          },
          {
            "stage": "word",
            "vi": "con khỉ",
            "hanzi": "猴子",
            "words": [
              {
                "text": "猴子",
                "pinyin": "hou zi",
                "tone": "hóu zi",
                "pos": "noun",
                "vi": "con khỉ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "hou zi",
            "tone": "hóu zi"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xuan ze",
            "tone": "xuǎn zé"
          },
          {
            "stage": "word",
            "vi": "bề ngoài",
            "hanzi": "表面",
            "words": [
              {
                "text": "表面",
                "pinyin": "biao mian",
                "tone": "biǎo miàn",
                "pos": "noun",
                "vi": "bề ngoài"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "biao mian",
            "tone": "biǎo miàn"
          },
          {
            "stage": "word",
            "vi": "bản chất",
            "hanzi": "本质",
            "words": [
              {
                "text": "本质",
                "pinyin": "ben zhi",
                "tone": "běn zhì",
                "pos": "noun",
                "vi": "bản chất"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ben zhi",
            "tone": "běn zhì"
          },
          {
            "stage": "word",
            "vi": "hiểu lầm",
            "hanzi": "误解",
            "words": [
              {
                "text": "误解",
                "pinyin": "wu jie",
                "tone": "wù jiě",
                "pos": "verb",
                "vi": "hiểu lầm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wu jie",
            "tone": "wù jiě"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xi guan",
            "tone": "xí guàn"
          },
          {
            "stage": "phrase",
            "vi": "ý nghĩa xưa và nay",
            "hanzi": "古今意义",
            "words": [
              {
                "text": "古代",
                "pinyin": "gu dai",
                "tone": "gǔ dài",
                "pos": "noun",
                "vi": "thời cổ đại"
              },
              {
                "text": "现代",
                "pinyin": "xian dai",
                "tone": "xiàn dài",
                "pos": "noun",
                "vi": "hiện đại"
              },
              {
                "text": "意义",
                "pinyin": "yi yi",
                "tone": "yì yì",
                "pos": "noun",
                "vi": "ý nghĩa"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gu dai xian dai yi yi",
            "tone": "gǔ dài xiàn dài yì yì"
          },
          {
            "stage": "phrase",
            "vi": "từ ngữ thay đổi",
            "hanzi": "词语改变",
            "words": [
              {
                "text": "词语",
                "pinyin": "ci yu",
                "tone": "cí yǔ",
                "pos": "noun",
                "vi": "từ ngữ"
              },
              {
                "text": "改变",
                "pinyin": "gai bian",
                "tone": "gǎi biàn",
                "pos": "verb",
                "vi": "thay đổi"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ci yu gai bian",
            "tone": "cí yǔ gǎi biàn"
          },
          {
            "stage": "phrase",
            "vi": "bề ngoài khác nhau",
            "hanzi": "表面不同",
            "words": [
              {
                "text": "表面",
                "pinyin": "biao mian",
                "tone": "biǎo miàn",
                "pos": "noun",
                "vi": "bề ngoài"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "biao mian",
            "tone": "biǎo miàn"
          },
          {
            "stage": "phrase",
            "vi": "bản chất giống nhau",
            "hanzi": "本质一样",
            "words": [
              {
                "text": "本质",
                "pinyin": "ben zhi",
                "tone": "běn zhì",
                "pos": "noun",
                "vi": "bản chất"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ben zhi",
            "tone": "běn zhì"
          },
          {
            "stage": "phrase",
            "vi": "dễ hiểu lầm",
            "hanzi": "容易误解",
            "words": [
              {
                "text": "误解",
                "pinyin": "wu jie",
                "tone": "wù jiě",
                "pos": "verb",
                "vi": "hiểu lầm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wu jie",
            "tone": "wù jiě"
          },
          {
            "stage": "sentence",
            "vi": "Ý nghĩa của 'triều tam mộ tứ' trong cổ đại và hiện đại không hoàn toàn giống nhau.",
            "hanzi": "朝三暮四在古代和现代意义不完全一样",
            "words": [
              {
                "text": "朝三暮四",
                "pinyin": "chao san mu si",
                "tone": "cháo sān mù sì",
                "pos": "noun",
                "vi": "thành ngữ triều tam mộ tứ"
              },
              {
                "text": "古代",
                "pinyin": "gu dai",
                "tone": "gǔ dài",
                "pos": "noun",
                "vi": "thời cổ đại"
              },
              {
                "text": "现代",
                "pinyin": "xian dai",
                "tone": "xiàn dài",
                "pos": "noun",
                "vi": "hiện đại"
              },
              {
                "text": "意义",
                "pinyin": "yi yi",
                "tone": "yì yì",
                "pos": "noun",
                "vi": "ý nghĩa"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "chao san mu si gu dai xian dai yi yi",
            "tone": "cháo sān mù sì gǔ dài xiàn dài yì yì"
          },
          {
            "stage": "sentence",
            "vi": "Ý nghĩa của từ ngữ sẽ thay đổi theo thời đại.",
            "hanzi": "词语的意义会随着时代改变",
            "words": [
              {
                "text": "词语",
                "pinyin": "ci yu",
                "tone": "cí yǔ",
                "pos": "noun",
                "vi": "từ ngữ"
              },
              {
                "text": "意义",
                "pinyin": "yi yi",
                "tone": "yì yì",
                "pos": "noun",
                "vi": "ý nghĩa"
              },
              {
                "text": "改变",
                "pinyin": "gai bian",
                "tone": "gǎi biàn",
                "pos": "verb",
                "vi": "thay đổi"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ci yu yi yi gai bian",
            "tone": "cí yǔ yì yì gǎi biàn"
          },
          {
            "stage": "sentence",
            "vi": "Con khỉ chỉ nhìn thấy lựa chọn bề ngoài.",
            "hanzi": "猴子只看到了表面的选择",
            "words": [
              {
                "text": "猴子",
                "pinyin": "hou zi",
                "tone": "hóu zi",
                "pos": "noun",
                "vi": "con khỉ"
              },
              {
                "text": "表面",
                "pinyin": "biao mian",
                "tone": "biǎo miàn",
                "pos": "noun",
                "vi": "bề ngoài"
              },
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "hou zi biao mian xuan ze",
            "tone": "hóu zi biǎo miàn xuǎn zé"
          },
          {
            "stage": "sentence",
            "vi": "Hiểu bản chất mới có thể tránh hiểu lầm.",
            "hanzi": "理解本质才能避免误解",
            "words": [
              {
                "text": "本质",
                "pinyin": "ben zhi",
                "tone": "běn zhì",
                "pos": "noun",
                "vi": "bản chất"
              },
              {
                "text": "误解",
                "pinyin": "wu jie",
                "tone": "wù jiě",
                "pos": "verb",
                "vi": "hiểu lầm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ben zhi wu jie",
            "tone": "běn zhì wù jiě"
          },
          {
            "stage": "mixed",
            "vi": "Ý nghĩa của từ ngữ có thể thay đổi.",
            "hanzi": "词语的意义会改变",
            "words": [
              {
                "text": "词语",
                "pinyin": "ci yu",
                "tone": "cí yǔ",
                "pos": "noun",
                "vi": "từ ngữ"
              },
              {
                "text": "意义",
                "pinyin": "yi yi",
                "tone": "yì yì",
                "pos": "noun",
                "vi": "ý nghĩa"
              },
              {
                "text": "改变",
                "pinyin": "gai bian",
                "tone": "gǎi biàn",
                "pos": "verb",
                "vi": "thay đổi"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ci yu yi yi gai bian",
            "tone": "cí yǔ yì yì gǎi biàn"
          }
        ]
      },
      {
        "id": "hsk5-l9",
        "no": 9,
        "titleZh": "别样鲁迅",
        "titleVi": "Một Lỗ Tấn khác",
        "items": [
          {
            "stage": "word",
            "vi": "Lỗ Tấn",
            "hanzi": "鲁迅",
            "words": [
              {
                "text": "鲁迅",
                "pinyin": "lu xun",
                "tone": "lǔ xùn",
                "pos": "noun",
                "vi": "Lỗ Tấn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "lu xun",
            "tone": "lǔ xùn"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zuo jia",
            "tone": "zuò jiā"
          },
          {
            "stage": "word",
            "vi": "bài viết",
            "hanzi": "文章",
            "words": [
              {
                "text": "文章",
                "pinyin": "wen zhang",
                "tone": "wén zhāng",
                "pos": "noun",
                "vi": "bài viết"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wen zhang",
            "tone": "wén zhāng"
          },
          {
            "stage": "word",
            "vi": "hình tượng",
            "hanzi": "形象",
            "words": [
              {
                "text": "形象",
                "pinyin": "xing xiang",
                "tone": "xíng xiàng",
                "pos": "noun",
                "vi": "hình tượng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xing xiang",
            "tone": "xíng xiàng"
          },
          {
            "stage": "word",
            "vi": "hiểu, tìm hiểu",
            "hanzi": "了解",
            "words": [
              {
                "text": "了解",
                "pinyin": "liao jie",
                "tone": "liǎo jiě",
                "pos": "verb",
                "vi": "hiểu, tìm hiểu"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "liao jie",
            "tone": "liǎo jiě"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yan jiu",
            "tone": "yán jiū"
          },
          {
            "stage": "word",
            "vi": "thời đại",
            "hanzi": "时代",
            "words": [
              {
                "text": "时代",
                "pinyin": "shi dai",
                "tone": "shí dài",
                "pos": "noun",
                "vi": "thời đại"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shi dai",
            "tone": "shí dài"
          },
          {
            "stage": "word",
            "vi": "tư tưởng",
            "hanzi": "思想",
            "words": [
              {
                "text": "思想",
                "pinyin": "si xiang",
                "tone": "sī xiǎng",
                "pos": "noun",
                "vi": "tư tưởng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "si xiang",
            "tone": "sī xiǎng"
          },
          {
            "stage": "word",
            "vi": "hài hước",
            "hanzi": "幽默",
            "words": [
              {
                "text": "幽默",
                "pinyin": "you mo",
                "tone": "yōu mò",
                "pos": "adj",
                "vi": "hài hước"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "you mo",
            "tone": "yōu mò"
          },
          {
            "stage": "word",
            "vi": "nghiêm túc",
            "hanzi": "严肃",
            "words": [
              {
                "text": "严肃",
                "pinyin": "yan su",
                "tone": "yán sù",
                "pos": "adj",
                "vi": "nghiêm túc"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yan su",
            "tone": "yán sù"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zuo pin",
            "tone": "zuò pǐn"
          },
          {
            "stage": "word",
            "vi": "đánh giá",
            "hanzi": "评价",
            "words": [
              {
                "text": "评价",
                "pinyin": "ping jia",
                "tone": "píng jià",
                "pos": "verb",
                "vi": "đánh giá"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ping jia",
            "tone": "píng jià"
          },
          {
            "stage": "phrase",
            "vi": "một Lỗ Tấn khác",
            "hanzi": "别样鲁迅",
            "words": [
              {
                "text": "鲁迅",
                "pinyin": "lu xun",
                "tone": "lǔ xùn",
                "pos": "noun",
                "vi": "Lỗ Tấn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "lu xun",
            "tone": "lǔ xùn"
          },
          {
            "stage": "phrase",
            "vi": "nghiên cứu tác phẩm",
            "hanzi": "研究作品",
            "words": [
              {
                "text": "研究",
                "pinyin": "yan jiu",
                "tone": "yán jiū",
                "pos": "verb",
                "vi": "nghiên cứu"
              },
              {
                "text": "作品",
                "pinyin": "zuo pin",
                "tone": "zuò pǐn",
                "pos": "noun",
                "vi": "tác phẩm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yan jiu zuo pin",
            "tone": "yán jiū zuò pǐn"
          },
          {
            "stage": "phrase",
            "vi": "hiểu thời đại",
            "hanzi": "了解时代",
            "words": [
              {
                "text": "了解",
                "pinyin": "liao jie",
                "tone": "liǎo jiě",
                "pos": "verb",
                "vi": "hiểu, tìm hiểu"
              },
              {
                "text": "时代",
                "pinyin": "shi dai",
                "tone": "shí dài",
                "pos": "noun",
                "vi": "thời đại"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "liao jie shi dai",
            "tone": "liǎo jiě shí dài"
          },
          {
            "stage": "phrase",
            "vi": "hình tượng hài hước",
            "hanzi": "幽默形象",
            "words": [
              {
                "text": "幽默",
                "pinyin": "you mo",
                "tone": "yōu mò",
                "pos": "adj",
                "vi": "hài hước"
              },
              {
                "text": "形象",
                "pinyin": "xing xiang",
                "tone": "xíng xiàng",
                "pos": "noun",
                "vi": "hình tượng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "you mo xing xiang",
            "tone": "yōu mò xíng xiàng"
          },
          {
            "stage": "phrase",
            "vi": "đánh giá bài viết",
            "hanzi": "评价文章",
            "words": [
              {
                "text": "评价",
                "pinyin": "ping jia",
                "tone": "píng jià",
                "pos": "verb",
                "vi": "đánh giá"
              },
              {
                "text": "文章",
                "pinyin": "wen zhang",
                "tone": "wén zhāng",
                "pos": "noun",
                "vi": "bài viết"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ping jia wen zhang",
            "tone": "píng jià wén zhāng"
          },
          {
            "stage": "sentence",
            "vi": "Lỗ Tấn là một nhà văn quan trọng.",
            "hanzi": "鲁迅是一位重要的作家",
            "words": [
              {
                "text": "鲁迅",
                "pinyin": "lu xun",
                "tone": "lǔ xùn",
                "pos": "noun",
                "vi": "Lỗ Tấn"
              },
              {
                "text": "作家",
                "pinyin": "zuo jia",
                "tone": "zuò jiā",
                "pos": "noun",
                "vi": "nhà văn"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "lu xun zuo jia",
            "tone": "lǔ xùn zuò jiā"
          },
          {
            "stage": "sentence",
            "vi": "Đọc bài viết của ông có thể hiểu thời đại đó.",
            "hanzi": "读他的文章可以了解那个时代",
            "words": [
              {
                "text": "文章",
                "pinyin": "wen zhang",
                "tone": "wén zhāng",
                "pos": "noun",
                "vi": "bài viết"
              },
              {
                "text": "了解",
                "pinyin": "liao jie",
                "tone": "liǎo jiě",
                "pos": "verb",
                "vi": "hiểu, tìm hiểu"
              },
              {
                "text": "时代",
                "pinyin": "shi dai",
                "tone": "shí dài",
                "pos": "noun",
                "vi": "thời đại"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wen zhang liao jie shi dai",
            "tone": "wén zhāng liǎo jiě shí dài"
          },
          {
            "stage": "sentence",
            "vi": "Một số tác phẩm thể hiện mặt hài hước của ông.",
            "hanzi": "有些作品表现了他幽默的一面",
            "words": [
              {
                "text": "作品",
                "pinyin": "zuo pin",
                "tone": "zuò pǐn",
                "pos": "noun",
                "vi": "tác phẩm"
              },
              {
                "text": "幽默",
                "pinyin": "you mo",
                "tone": "yōu mò",
                "pos": "adj",
                "vi": "hài hước"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zuo pin you mo",
            "tone": "zuò pǐn yōu mò"
          },
          {
            "stage": "sentence",
            "vi": "Đánh giá một nhà văn cần nghiên cứu nghiêm túc.",
            "hanzi": "评价一个作家需要认真研究",
            "words": [
              {
                "text": "评价",
                "pinyin": "ping jia",
                "tone": "píng jià",
                "pos": "verb",
                "vi": "đánh giá"
              },
              {
                "text": "作家",
                "pinyin": "zuo jia",
                "tone": "zuò jiā",
                "pos": "noun",
                "vi": "nhà văn"
              },
              {
                "text": "研究",
                "pinyin": "yan jiu",
                "tone": "yán jiū",
                "pos": "verb",
                "vi": "nghiên cứu"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ping jia zuo jia yan jiu",
            "tone": "píng jià zuò jiā yán jiū"
          },
          {
            "stage": "mixed",
            "vi": "Đọc bài viết của Lỗ Tấn có thể hiểu thời đại.",
            "hanzi": "读鲁迅的文章可以了解时代",
            "words": [
              {
                "text": "鲁迅",
                "pinyin": "lu xun",
                "tone": "lǔ xùn",
                "pos": "noun",
                "vi": "Lỗ Tấn"
              },
              {
                "text": "文章",
                "pinyin": "wen zhang",
                "tone": "wén zhāng",
                "pos": "noun",
                "vi": "bài viết"
              },
              {
                "text": "了解",
                "pinyin": "liao jie",
                "tone": "liǎo jiě",
                "pos": "verb",
                "vi": "hiểu, tìm hiểu"
              },
              {
                "text": "时代",
                "pinyin": "shi dai",
                "tone": "shí dài",
                "pos": "noun",
                "vi": "thời đại"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "lu xun wen zhang liao jie shi dai",
            "tone": "lǔ xùn wén zhāng liǎo jiě shí dài"
          }
        ]
      },
      {
        "id": "hsk5-l10",
        "no": 10,
        "titleZh": "争论的奇迹",
        "titleVi": "Kỳ tích của tranh luận",
        "items": [
          {
            "stage": "word",
            "vi": "tranh luận",
            "hanzi": "争论",
            "words": [
              {
                "text": "争论",
                "pinyin": "zheng lun",
                "tone": "zhēng lùn",
                "pos": "verb",
                "vi": "tranh luận"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zheng lun",
            "tone": "zhēng lùn"
          },
          {
            "stage": "word",
            "vi": "kỳ tích",
            "hanzi": "奇迹",
            "words": [
              {
                "text": "奇迹",
                "pinyin": "qi ji",
                "tone": "qí jì",
                "pos": "noun",
                "vi": "kỳ tích"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "qi ji",
            "tone": "qí jì"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tong yi",
            "tone": "tóng yì"
          },
          {
            "stage": "word",
            "vi": "phản đối",
            "hanzi": "反对",
            "words": [
              {
                "text": "反对",
                "pinyin": "fan dui",
                "tone": "fǎn duì",
                "pos": "verb",
                "vi": "phản đối"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fan dui",
            "tone": "fǎn duì"
          },
          {
            "stage": "word",
            "vi": "thảo luận",
            "hanzi": "讨论",
            "words": [
              {
                "text": "讨论",
                "pinyin": "tao lun",
                "tone": "tǎo lùn",
                "pos": "verb",
                "vi": "thảo luận"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tao lun",
            "tone": "tǎo lùn"
          },
          {
            "stage": "word",
            "vi": "giải quyết",
            "hanzi": "解决",
            "words": [
              {
                "text": "解决",
                "pinyin": "jie jue",
                "tone": "jiě jué",
                "pos": "verb",
                "vi": "giải quyết"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jie jue",
            "tone": "jiě jué"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wen ti",
            "tone": "wèn tí"
          },
          {
            "stage": "word",
            "vi": "sáng tạo",
            "hanzi": "创造",
            "words": [
              {
                "text": "创造",
                "pinyin": "chuang zao",
                "tone": "chuàng zào",
                "pos": "verb",
                "vi": "sáng tạo"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "chuang zao",
            "tone": "chuàng zào"
          },
          {
            "stage": "word",
            "vi": "đội nhóm",
            "hanzi": "团队",
            "words": [
              {
                "text": "团队",
                "pinyin": "tuan dui",
                "tone": "tuán duì",
                "pos": "noun",
                "vi": "đội nhóm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tuan dui",
            "tone": "tuán duì"
          },
          {
            "stage": "word",
            "vi": "chứng minh",
            "hanzi": "证明",
            "words": [
              {
                "text": "证明",
                "pinyin": "zheng ming",
                "tone": "zhèng míng",
                "pos": "verb",
                "vi": "chứng minh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zheng ming",
            "tone": "zhèng míng"
          },
          {
            "stage": "word",
            "vi": "kết quả",
            "hanzi": "结果",
            "words": [
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "phrase",
            "vi": "quan điểm khác nhau",
            "hanzi": "不同观点",
            "words": [
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
          },
          {
            "stage": "phrase",
            "vi": "đồng ý và phản đối",
            "hanzi": "同意反对",
            "words": [
              {
                "text": "同意",
                "pinyin": "tong yi",
                "tone": "tóng yì",
                "pos": "verb",
                "vi": "đồng ý"
              },
              {
                "text": "反对",
                "pinyin": "fan dui",
                "tone": "fǎn duì",
                "pos": "verb",
                "vi": "phản đối"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tong yi fan dui",
            "tone": "tóng yì fǎn duì"
          },
          {
            "stage": "phrase",
            "vi": "thảo luận vấn đề",
            "hanzi": "讨论问题",
            "words": [
              {
                "text": "讨论",
                "pinyin": "tao lun",
                "tone": "tǎo lùn",
                "pos": "verb",
                "vi": "thảo luận"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tao lun wen ti",
            "tone": "tǎo lùn wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "tạo ra kỳ tích",
            "hanzi": "创造奇迹",
            "words": [
              {
                "text": "创造",
                "pinyin": "chuang zao",
                "tone": "chuàng zào",
                "pos": "verb",
                "vi": "sáng tạo"
              },
              {
                "text": "奇迹",
                "pinyin": "qi ji",
                "tone": "qí jì",
                "pos": "noun",
                "vi": "kỳ tích"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "chuang zao qi ji",
            "tone": "chuàng zào qí jì"
          },
          {
            "stage": "phrase",
            "vi": "chứng minh kết quả",
            "hanzi": "证明结果",
            "words": [
              {
                "text": "证明",
                "pinyin": "zheng ming",
                "tone": "zhèng míng",
                "pos": "verb",
                "vi": "chứng minh"
              },
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zheng ming jie guo",
            "tone": "zhèng míng jié guǒ"
          },
          {
            "stage": "sentence",
            "vi": "Tranh luận không nhất thiết là chuyện xấu.",
            "hanzi": "争论不一定是坏事",
            "words": [
              {
                "text": "争论",
                "pinyin": "zheng lun",
                "tone": "zhēng lùn",
                "pos": "verb",
                "vi": "tranh luận"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zheng lun",
            "tone": "zhēng lùn"
          },
          {
            "stage": "sentence",
            "vi": "Các quan điểm khác nhau có thể giúp đội nhóm giải quyết vấn đề.",
            "hanzi": "不同观点可以帮助团队解决问题",
            "words": [
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              },
              {
                "text": "团队",
                "pinyin": "tuan dui",
                "tone": "tuán duì",
                "pos": "noun",
                "vi": "đội nhóm"
              },
              {
                "text": "解决",
                "pinyin": "jie jue",
                "tone": "jiě jué",
                "pos": "verb",
                "vi": "giải quyết"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "guan dian tuan dui jie jue wen ti",
            "tone": "guān diǎn tuán duì jiě jué wèn tí"
          },
          {
            "stage": "sentence",
            "vi": "Có người đồng ý và cũng có người phản đối.",
            "hanzi": "有人同意也有人反对",
            "words": [
              {
                "text": "同意",
                "pinyin": "tong yi",
                "tone": "tóng yì",
                "pos": "verb",
                "vi": "đồng ý"
              },
              {
                "text": "反对",
                "pinyin": "fan dui",
                "tone": "fǎn duì",
                "pos": "verb",
                "vi": "phản đối"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tong yi fan dui",
            "tone": "tóng yì fǎn duì"
          },
          {
            "stage": "sentence",
            "vi": "Một cuộc thảo luận tốt đôi khi có thể tạo ra kỳ tích.",
            "hanzi": "好的讨论有时能创造奇迹",
            "words": [
              {
                "text": "讨论",
                "pinyin": "tao lun",
                "tone": "tǎo lùn",
                "pos": "verb",
                "vi": "thảo luận"
              },
              {
                "text": "创造",
                "pinyin": "chuang zao",
                "tone": "chuàng zào",
                "pos": "verb",
                "vi": "sáng tạo"
              },
              {
                "text": "奇迹",
                "pinyin": "qi ji",
                "tone": "qí jì",
                "pos": "noun",
                "vi": "kỳ tích"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tao lun chuang zao qi ji",
            "tone": "tǎo lùn chuàng zào qí jì"
          },
          {
            "stage": "mixed",
            "vi": "Các quan điểm khác nhau có thể giúp giải quyết vấn đề.",
            "hanzi": "不同观点可以帮助解决问题",
            "words": [
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              },
              {
                "text": "解决",
                "pinyin": "jie jue",
                "tone": "jiě jué",
                "pos": "verb",
                "vi": "giải quyết"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "guan dian jie jue wen ti",
            "tone": "guān diǎn jiě jué wèn tí"
          }
        ]
      },
      {
        "id": "hsk5-l11",
        "no": 11,
        "titleZh": "闹钟的危害",
        "titleVi": "Tác hại của đồng hồ báo thức",
        "items": [
          {
            "stage": "word",
            "vi": "đồng hồ báo thức",
            "hanzi": "闹钟",
            "words": [
              {
                "text": "闹钟",
                "pinyin": "nao zhong",
                "tone": "nào zhōng",
                "pos": "noun",
                "vi": "đồng hồ báo thức"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "nao zhong",
            "tone": "nào zhōng"
          },
          {
            "stage": "word",
            "vi": "tác hại",
            "hanzi": "危害",
            "words": [
              {
                "text": "危害",
                "pinyin": "wei hai",
                "tone": "wēi hài",
                "pos": "noun",
                "vi": "tác hại"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wei hai",
            "tone": "wēi hài"
          },
          {
            "stage": "word",
            "vi": "giấc ngủ",
            "hanzi": "睡眠",
            "words": [
              {
                "text": "睡眠",
                "pinyin": "shui mian",
                "tone": "shuì mián",
                "pos": "noun",
                "vi": "giấc ngủ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shui mian",
            "tone": "shuì mián"
          },
          {
            "stage": "word",
            "vi": "thức dậy",
            "hanzi": "起床",
            "words": [
              {
                "text": "起床",
                "pinyin": "qi chuang",
                "tone": "qǐ chuáng",
                "pos": "verb",
                "vi": "thức dậy"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "qi chuang",
            "tone": "qǐ chuáng"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ying xiang",
            "tone": "yǐng xiǎng"
          },
          {
            "stage": "word",
            "vi": "khỏe mạnh",
            "hanzi": "健康",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jian kang",
            "tone": "jiàn kāng"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ya li",
            "tone": "yā lì"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xi guan",
            "tone": "xí guàn"
          },
          {
            "stage": "word",
            "vi": "tự nhiên",
            "hanzi": "自然",
            "words": [
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "tự nhiên"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zi ran",
            "tone": "zì rán"
          },
          {
            "stage": "word",
            "vi": "thời gian",
            "hanzi": "时间",
            "words": [
              {
                "text": "时间",
                "pinyin": "shi jian",
                "tone": "shí jiān",
                "pos": "noun",
                "vi": "thời gian"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shi jian",
            "tone": "shí jiān"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tiao zheng",
            "tone": "tiáo zhěng"
          },
          {
            "stage": "phrase",
            "vi": "tác hại của đồng hồ báo thức",
            "hanzi": "闹钟的危害",
            "words": [
              {
                "text": "闹钟",
                "pinyin": "nao zhong",
                "tone": "nào zhōng",
                "pos": "noun",
                "vi": "đồng hồ báo thức"
              },
              {
                "text": "危害",
                "pinyin": "wei hai",
                "tone": "wēi hài",
                "pos": "noun",
                "vi": "tác hại"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "nao zhong wei hai",
            "tone": "nào zhōng wēi hài"
          },
          {
            "stage": "phrase",
            "vi": "ảnh hưởng giấc ngủ",
            "hanzi": "影响睡眠",
            "words": [
              {
                "text": "影响",
                "pinyin": "ying xiang",
                "tone": "yǐng xiǎng",
                "pos": "verb",
                "vi": "ảnh hưởng"
              },
              {
                "text": "睡眠",
                "pinyin": "shui mian",
                "tone": "shuì mián",
                "pos": "noun",
                "vi": "giấc ngủ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ying xiang shui mian",
            "tone": "yǐng xiǎng shuì mián"
          },
          {
            "stage": "phrase",
            "vi": "thức dậy tự nhiên",
            "hanzi": "自然起床",
            "words": [
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "tự nhiên"
              },
              {
                "text": "起床",
                "pinyin": "qi chuang",
                "tone": "qǐ chuáng",
                "pos": "verb",
                "vi": "thức dậy"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "zi ran qi chuang",
            "tone": "zì rán qǐ chuáng"
          },
          {
            "stage": "phrase",
            "vi": "điều chỉnh thời gian",
            "hanzi": "调整时间",
            "words": [
              {
                "text": "调整",
                "pinyin": "tiao zheng",
                "tone": "tiáo zhěng",
                "pos": "verb",
                "vi": "điều chỉnh"
              },
              {
                "text": "时间",
                "pinyin": "shi jian",
                "tone": "shí jiān",
                "pos": "noun",
                "vi": "thời gian"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tiao zheng shi jian",
            "tone": "tiáo zhěng shí jiān"
          },
          {
            "stage": "phrase",
            "vi": "chú ý nghỉ ngơi",
            "hanzi": "注意休息",
            "words": [
              {
                "text": "休息",
                "pinyin": "xiu xi",
                "tone": "xiū xi",
                "pos": "verb",
                "vi": "nghỉ ngơi"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xiu xi",
            "tone": "xiū xi"
          },
          {
            "stage": "sentence",
            "vi": "Đồng hồ báo thức có thể ảnh hưởng đến giấc ngủ.",
            "hanzi": "闹钟可能会影响睡眠",
            "words": [
              {
                "text": "闹钟",
                "pinyin": "nao zhong",
                "tone": "nào zhōng",
                "pos": "noun",
                "vi": "đồng hồ báo thức"
              },
              {
                "text": "影响",
                "pinyin": "ying xiang",
                "tone": "yǐng xiǎng",
                "pos": "verb",
                "vi": "ảnh hưởng"
              },
              {
                "text": "睡眠",
                "pinyin": "shui mian",
                "tone": "shuì mián",
                "pos": "noun",
                "vi": "giấc ngủ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "nao zhong ying xiang shui mian",
            "tone": "nào zhōng yǐng xiǎng shuì mián"
          },
          {
            "stage": "sentence",
            "vi": "Giấc ngủ không tốt sẽ tạo áp lực cho cơ thể.",
            "hanzi": "睡眠不好会给身体带来压力",
            "words": [
              {
                "text": "睡眠",
                "pinyin": "shui mian",
                "tone": "shuì mián",
                "pos": "noun",
                "vi": "giấc ngủ"
              },
              {
                "text": "压力",
                "pinyin": "ya li",
                "tone": "yā lì",
                "pos": "noun",
                "vi": "áp lực"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shui mian ya li",
            "tone": "shuì mián yā lì"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta nên điều chỉnh thời gian nghỉ ngơi.",
            "hanzi": "我们应该调整休息时间",
            "words": [
              {
                "text": "调整",
                "pinyin": "tiao zheng",
                "tone": "tiáo zhěng",
                "pos": "verb",
                "vi": "điều chỉnh"
              },
              {
                "text": "休息",
                "pinyin": "xiu xi",
                "tone": "xiū xi",
                "pos": "verb",
                "vi": "nghỉ ngơi"
              },
              {
                "text": "时间",
                "pinyin": "shi jian",
                "tone": "shí jiān",
                "pos": "noun",
                "vi": "thời gian"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "tiao zheng xiu xi shi jian",
            "tone": "tiáo zhěng xiū xi shí jiān"
          },
          {
            "stage": "sentence",
            "vi": "Thói quen tốt rất quan trọng đối với sức khỏe.",
            "hanzi": "好的习惯对健康很重要",
            "words": [
              {
                "text": "习惯",
                "pinyin": "xi guan",
                "tone": "xí guàn",
                "pos": "noun",
                "vi": "thói quen"
              },
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xi guan jian kang",
            "tone": "xí guàn jiàn kāng"
          },
          {
            "stage": "mixed",
            "vi": "Đồng hồ báo thức có thể ảnh hưởng giấc ngủ.",
            "hanzi": "闹钟可能影响睡眠",
            "words": [
              {
                "text": "闹钟",
                "pinyin": "nao zhong",
                "tone": "nào zhōng",
                "pos": "noun",
                "vi": "đồng hồ báo thức"
              },
              {
                "text": "影响",
                "pinyin": "ying xiang",
                "tone": "yǐng xiǎng",
                "pos": "verb",
                "vi": "ảnh hưởng"
              },
              {
                "text": "睡眠",
                "pinyin": "shui mian",
                "tone": "shuì mián",
                "pos": "noun",
                "vi": "giấc ngủ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "nao zhong ying xiang shui mian",
            "tone": "nào zhōng yǐng xiǎng shuì mián"
          }
        ]
      },
      {
        "id": "hsk5-l12",
        "no": 12,
        "titleZh": "海外用户玩儿微信",
        "titleVi": "Người dùng ở nước ngoài dùng WeChat",
        "items": [
          {
            "stage": "word",
            "vi": "nước ngoài, hải ngoại",
            "hanzi": "海外",
            "words": [
              {
                "text": "海外",
                "pinyin": "hai wai",
                "tone": "hǎi wài",
                "pos": "noun",
                "vi": "nước ngoài, hải ngoại"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "hai wai",
            "tone": "hǎi wài"
          },
          {
            "stage": "word",
            "vi": "người dùng",
            "hanzi": "用户",
            "words": [
              {
                "text": "用户",
                "pinyin": "yong hu",
                "tone": "yòng hù",
                "pos": "noun",
                "vi": "người dùng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yong hu",
            "tone": "yòng hù"
          },
          {
            "stage": "word",
            "vi": "WeChat",
            "hanzi": "微信",
            "words": [
              {
                "text": "微信",
                "pinyin": "wei xin",
                "tone": "wēi xìn",
                "pos": "noun",
                "vi": "WeChat"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wei xin",
            "tone": "wēi xìn"
          },
          {
            "stage": "word",
            "vi": "phần mềm",
            "hanzi": "软件",
            "words": [
              {
                "text": "软件",
                "pinyin": "ruan jian",
                "tone": "ruǎn jiàn",
                "pos": "noun",
                "vi": "phần mềm"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ruan jian",
            "tone": "ruǎn jiàn"
          },
          {
            "stage": "word",
            "vi": "giao tiếp, trao đổi",
            "hanzi": "交流",
            "words": [
              {
                "text": "交流",
                "pinyin": "jiao liu",
                "tone": "jiāo liú",
                "pos": "verb",
                "vi": "giao tiếp, trao đổi"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "xin xi",
            "tone": "xìn xī"
          },
          {
            "stage": "word",
            "vi": "chia sẻ",
            "hanzi": "分享",
            "words": [
              {
                "text": "分享",
                "pinyin": "fen xiang",
                "tone": "fēn xiǎng",
                "pos": "verb",
                "vi": "chia sẻ"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fen xiang",
            "tone": "fēn xiǎng"
          },
          {
            "stage": "word",
            "vi": "bạn bè",
            "hanzi": "朋友",
            "words": [
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "peng you",
            "tone": "péng yǒu"
          },
          {
            "stage": "word",
            "vi": "chức năng",
            "hanzi": "功能",
            "words": [
              {
                "text": "功能",
                "pinyin": "gong neng",
                "tone": "gōng néng",
                "pos": "noun",
                "vi": "chức năng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gong neng",
            "tone": "gōng néng"
          },
          {
            "stage": "word",
            "vi": "thuận tiện",
            "hanzi": "方便",
            "words": [
              {
                "text": "方便",
                "pinyin": "fang bian",
                "tone": "fāng biàn",
                "pos": "adj",
                "vi": "thuận tiện"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fang bian",
            "tone": "fāng biàn"
          },
          {
            "stage": "word",
            "vi": "mạng internet",
            "hanzi": "网络",
            "words": [
              {
                "text": "网络",
                "pinyin": "wang luo",
                "tone": "wǎng luò",
                "pos": "noun",
                "vi": "mạng internet"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wang luo",
            "tone": "wǎng luò"
          },
          {
            "stage": "word",
            "vi": "sử dụng",
            "hanzi": "使用",
            "words": [
              {
                "text": "使用",
                "pinyin": "shi yong",
                "tone": "shǐ yòng",
                "pos": "verb",
                "vi": "sử dụng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shi yong",
            "tone": "shǐ yòng"
          },
          {
            "stage": "phrase",
            "vi": "người dùng ở nước ngoài",
            "hanzi": "海外用户",
            "words": [
              {
                "text": "海外",
                "pinyin": "hai wai",
                "tone": "hǎi wài",
                "pos": "noun",
                "vi": "nước ngoài, hải ngoại"
              },
              {
                "text": "用户",
                "pinyin": "yong hu",
                "tone": "yòng hù",
                "pos": "noun",
                "vi": "người dùng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "hai wai yong hu",
            "tone": "hǎi wài yòng hù"
          },
          {
            "stage": "phrase",
            "vi": "sử dụng WeChat",
            "hanzi": "使用微信",
            "words": [
              {
                "text": "使用",
                "pinyin": "shi yong",
                "tone": "shǐ yòng",
                "pos": "verb",
                "vi": "sử dụng"
              },
              {
                "text": "微信",
                "pinyin": "wei xin",
                "tone": "wēi xìn",
                "pos": "noun",
                "vi": "WeChat"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "shi yong wei xin",
            "tone": "shǐ yòng wēi xìn"
          },
          {
            "stage": "phrase",
            "vi": "chia sẻ thông tin",
            "hanzi": "分享信息",
            "words": [
              {
                "text": "分享",
                "pinyin": "fen xiang",
                "tone": "fēn xiǎng",
                "pos": "verb",
                "vi": "chia sẻ"
              },
              {
                "text": "信息",
                "pinyin": "xin xi",
                "tone": "xìn xī",
                "pos": "noun",
                "vi": "thông tin"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "fen xiang xin xi",
            "tone": "fēn xiǎng xìn xī"
          },
          {
            "stage": "phrase",
            "vi": "giao tiếp qua mạng",
            "hanzi": "网络交流",
            "words": [
              {
                "text": "网络",
                "pinyin": "wang luo",
                "tone": "wǎng luò",
                "pos": "noun",
                "vi": "mạng internet"
              },
              {
                "text": "交流",
                "pinyin": "jiao liu",
                "tone": "jiāo liú",
                "pos": "verb",
                "vi": "giao tiếp, trao đổi"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wang luo jiao liu",
            "tone": "wǎng luò jiāo liú"
          },
          {
            "stage": "phrase",
            "vi": "chức năng thuận tiện",
            "hanzi": "功能方便",
            "words": [
              {
                "text": "功能",
                "pinyin": "gong neng",
                "tone": "gōng néng",
                "pos": "noun",
                "vi": "chức năng"
              },
              {
                "text": "方便",
                "pinyin": "fang bian",
                "tone": "fāng biàn",
                "pos": "adj",
                "vi": "thuận tiện"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "gong neng fang bian",
            "tone": "gōng néng fāng biàn"
          },
          {
            "stage": "sentence",
            "vi": "Nhiều người dùng ở nước ngoài thích sử dụng WeChat.",
            "hanzi": "很多海外用户喜欢使用微信",
            "words": [
              {
                "text": "海外",
                "pinyin": "hai wai",
                "tone": "hǎi wài",
                "pos": "noun",
                "vi": "nước ngoài, hải ngoại"
              },
              {
                "text": "用户",
                "pinyin": "yong hu",
                "tone": "yòng hù",
                "pos": "noun",
                "vi": "người dùng"
              },
              {
                "text": "使用",
                "pinyin": "shi yong",
                "tone": "shǐ yòng",
                "pos": "verb",
                "vi": "sử dụng"
              },
              {
                "text": "微信",
                "pinyin": "wei xin",
                "tone": "wēi xìn",
                "pos": "noun",
                "vi": "WeChat"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "hai wai yong hu shi yong wei xin",
            "tone": "hǎi wài yòng hù shǐ yòng wēi xìn"
          },
          {
            "stage": "sentence",
            "vi": "Phần mềm này giúp bạn bè giao tiếp thuận tiện hơn.",
            "hanzi": "这个软件让朋友之间交流更方便",
            "words": [
              {
                "text": "软件",
                "pinyin": "ruan jian",
                "tone": "ruǎn jiàn",
                "pos": "noun",
                "vi": "phần mềm"
              },
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              },
              {
                "text": "交流",
                "pinyin": "jiao liu",
                "tone": "jiāo liú",
                "pos": "verb",
                "vi": "giao tiếp, trao đổi"
              },
              {
                "text": "方便",
                "pinyin": "fang bian",
                "tone": "fāng biàn",
                "pos": "adj",
                "vi": "thuận tiện"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "ruan jian peng you jiao liu fang bian",
            "tone": "ruǎn jiàn péng yǒu jiāo liú fāng biàn"
          },
          {
            "stage": "sentence",
            "vi": "Người dùng có thể chia sẻ thông tin trên mạng.",
            "hanzi": "用户可以在网络上分享信息",
            "words": [
              {
                "text": "用户",
                "pinyin": "yong hu",
                "tone": "yòng hù",
                "pos": "noun",
                "vi": "người dùng"
              },
              {
                "text": "网络",
                "pinyin": "wang luo",
                "tone": "wǎng luò",
                "pos": "noun",
                "vi": "mạng internet"
              },
              {
                "text": "分享",
                "pinyin": "fen xiang",
                "tone": "fēn xiǎng",
                "pos": "verb",
                "vi": "chia sẻ"
              },
              {
                "text": "信息",
                "pinyin": "xin xi",
                "tone": "xìn xī",
                "pos": "noun",
                "vi": "thông tin"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "yong hu wang luo fen xiang xin xi",
            "tone": "yòng hù wǎng luò fēn xiǎng xìn xī"
          },
          {
            "stage": "sentence",
            "vi": "Các chức năng của WeChat ngày càng nhiều.",
            "hanzi": "微信的功能越来越多",
            "words": [
              {
                "text": "微信",
                "pinyin": "wei xin",
                "tone": "wēi xìn",
                "pos": "noun",
                "vi": "WeChat"
              },
              {
                "text": "功能",
                "pinyin": "gong neng",
                "tone": "gōng néng",
                "pos": "noun",
                "vi": "chức năng"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "wei xin gong neng",
            "tone": "wēi xìn gōng néng"
          },
          {
            "stage": "mixed",
            "vi": "Người dùng ở nước ngoài thích sử dụng WeChat.",
            "hanzi": "海外用户喜欢使用微信",
            "words": [
              {
                "text": "海外",
                "pinyin": "hai wai",
                "tone": "hǎi wài",
                "pos": "noun",
                "vi": "nước ngoài, hải ngoại"
              },
              {
                "text": "用户",
                "pinyin": "yong hu",
                "tone": "yòng hù",
                "pos": "noun",
                "vi": "người dùng"
              },
              {
                "text": "使用",
                "pinyin": "shi yong",
                "tone": "shǐ yòng",
                "pos": "verb",
                "vi": "sử dụng"
              },
              {
                "text": "微信",
                "pinyin": "wei xin",
                "tone": "wēi xìn",
                "pos": "noun",
                "vi": "WeChat"
              }
            ],
            "source": "Textbook alignment candidate batch 2 - needs human PDF/OCR verification",
            "pinyin": "hai wai yong hu shi yong wei xin",
            "tone": "hǎi wài yòng hù shǐ yòng wēi xìn"
          }
        ]
      }
    ]
  }
};
});
