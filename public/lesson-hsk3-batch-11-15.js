(function (root, factory) {
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
  return {
  "level": "HSK3",
  "lessons": [
    {
      "id": "hsk3-l11",
      "no": 11,
      "titleZh": "别忘了把空调关了",
      "titleVi": "Đừng quên tắt điều hòa",
      "items": [
        {
          "stage": "word",
          "vi": "quên rồi",
          "hanzi": "忘了",
          "words": [
            {
              "text": "忘了",
              "pinyin": "wang le",
              "tone": "wàng le",
              "pos": "verb",
              "vi": "quên rồi"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "wang le",
          "tone": "wàng le"
        },
        {
          "stage": "word",
          "vi": "điều hòa",
          "hanzi": "空调",
          "words": [
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kōng tiáo",
              "pos": "noun",
              "vi": "điều hòa"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "kong tiao",
          "tone": "kōng tiáo"
        },
        {
          "stage": "word",
          "vi": "tắt đi",
          "hanzi": "关了",
          "words": [
            {
              "text": "关了",
              "pinyin": "guan le",
              "tone": "guān le",
              "pos": "verb",
              "vi": "tắt đi"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "guan le",
          "tone": "guān le"
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
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "xue xi",
          "tone": "xué xí"
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
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "gong zuo",
          "tone": "gōng zuò"
        },
        {
          "stage": "word",
          "vi": "giao tiếp",
          "hanzi": "交流",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "word",
          "vi": "kế hoạch",
          "hanzi": "计划",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "ji hua",
          "tone": "jì huà"
        },
        {
          "stage": "word",
          "vi": "đã",
          "hanzi": "已经",
          "words": [
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "yi jing",
          "tone": "yǐ jīng"
        },
        {
          "stage": "word",
          "vi": "rất",
          "hanzi": "非常",
          "words": [
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "fei chang",
          "tone": "fēi cháng"
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
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "fang bian",
          "tone": "fāng biàn"
        },
        {
          "stage": "phrase",
          "vi": "quên rồi và điều hòa",
          "hanzi": "忘了空调",
          "words": [
            {
              "text": "忘了",
              "pinyin": "wang le",
              "tone": "wàng le",
              "pos": "verb",
              "vi": "quên rồi"
            },
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kōng tiáo",
              "pos": "noun",
              "vi": "điều hòa"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "wang le kong tiao",
          "tone": "wàng le kōng tiáo"
        },
        {
          "stage": "phrase",
          "vi": "điều hòa và tắt đi",
          "hanzi": "空调关了",
          "words": [
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kōng tiáo",
              "pos": "noun",
              "vi": "điều hòa"
            },
            {
              "text": "关了",
              "pinyin": "guan le",
              "tone": "guān le",
              "pos": "verb",
              "vi": "tắt đi"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "kong tiao guan le",
          "tone": "kōng tiáo guān le"
        },
        {
          "stage": "phrase",
          "vi": "tắt đi và học",
          "hanzi": "关了学习",
          "words": [
            {
              "text": "关了",
              "pinyin": "guan le",
              "tone": "guān le",
              "pos": "verb",
              "vi": "tắt đi"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "guan le xue xi",
          "tone": "guān le xué xí"
        },
        {
          "stage": "phrase",
          "vi": "học và công việc",
          "hanzi": "学习工作",
          "words": [
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "xue xi gong zuo",
          "tone": "xué xí gōng zuò"
        },
        {
          "stage": "sentence",
          "vi": "quên rồi điều hòa.",
          "hanzi": "忘了空调。",
          "words": [
            {
              "text": "忘了",
              "pinyin": "wang le",
              "tone": "wàng le",
              "pos": "verb",
              "vi": "quên rồi"
            },
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kōng tiáo",
              "pos": "noun",
              "vi": "điều hòa"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "wang le kong tiao",
          "tone": "wàng le kōng tiáo"
        },
        {
          "stage": "sentence",
          "vi": "điều hòa có liên quan đến tắt đi.",
          "hanzi": "空调和关了有关。",
          "words": [
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kōng tiáo",
              "pos": "noun",
              "vi": "điều hòa"
            },
            {
              "text": "关了",
              "pinyin": "guan le",
              "tone": "guān le",
              "pos": "verb",
              "vi": "tắt đi"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "kong tiao guan le",
          "tone": "kōng tiáo guān le"
        },
        {
          "stage": "sentence",
          "vi": "tắt đi, học, công việc.",
          "hanzi": "关了学习工作。",
          "words": [
            {
              "text": "关了",
              "pinyin": "guan le",
              "tone": "guān le",
              "pos": "verb",
              "vi": "tắt đi"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "guan le xue xi gong zuo",
          "tone": "guān le xué xí gōng zuò"
        },
        {
          "stage": "sentence",
          "vi": "công việc và giao tiếp rất quan trọng.",
          "hanzi": "工作交流很重要。",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "gong zuo jiao liu zhong yao",
          "tone": "gōng zuò jiāo liú zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về quên rồi và điều hòa.",
          "hanzi": "忘了空调观点。",
          "words": [
            {
              "text": "忘了",
              "pinyin": "wang le",
              "tone": "wàng le",
              "pos": "verb",
              "vi": "quên rồi"
            },
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kōng tiáo",
              "pos": "noun",
              "vi": "điều hòa"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "wang le kong tiao guan dian",
          "tone": "wàng le kōng tiáo guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về điều hòa và tắt đi.",
          "hanzi": "空调关了观点。",
          "words": [
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kōng tiáo",
              "pos": "noun",
              "vi": "điều hòa"
            },
            {
              "text": "关了",
              "pinyin": "guan le",
              "tone": "guān le",
              "pos": "verb",
              "vi": "tắt đi"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 11",
          "pinyin": "kong tiao guan le guan dian",
          "tone": "kōng tiáo guān le guān diǎn"
        }
      ]
    },
    {
      "id": "hsk3-l12",
      "no": 12,
      "titleZh": "把重要的东西放在我这儿吧",
      "titleVi": "Hãy để đồ quan trọng ở chỗ tôi",
      "items": [
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
          "source": "HSK3 generated prototype - Lesson 12",
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
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "dong xi",
          "tone": "dōng xī"
        },
        {
          "stage": "word",
          "vi": "đặt, để",
          "hanzi": "放着",
          "words": [
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "fang zhe",
          "tone": "fàng zhe"
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
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "gong zuo",
          "tone": "gōng zuò"
        },
        {
          "stage": "word",
          "vi": "giao tiếp",
          "hanzi": "交流",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "word",
          "vi": "kế hoạch",
          "hanzi": "计划",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "ji hua",
          "tone": "jì huà"
        },
        {
          "stage": "word",
          "vi": "đã",
          "hanzi": "已经",
          "words": [
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "yi jing",
          "tone": "yǐ jīng"
        },
        {
          "stage": "word",
          "vi": "rất",
          "hanzi": "非常",
          "words": [
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "fei chang",
          "tone": "fēi cháng"
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
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "fang bian",
          "tone": "fāng biàn"
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
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "ren zhen",
          "tone": "rèn zhēn"
        },
        {
          "stage": "phrase",
          "vi": "quan trọng và đồ vật",
          "hanzi": "重要东西",
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
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "zhong yao dong xi",
          "tone": "zhòng yào dōng xī"
        },
        {
          "stage": "phrase",
          "vi": "đồ vật và đặt, để",
          "hanzi": "东西放着",
          "words": [
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            },
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "dong xi fang zhe",
          "tone": "dōng xī fàng zhe"
        },
        {
          "stage": "phrase",
          "vi": "đặt, để và công việc",
          "hanzi": "放着工作",
          "words": [
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "fang zhe gong zuo",
          "tone": "fàng zhe gōng zuò"
        },
        {
          "stage": "phrase",
          "vi": "công việc và giao tiếp",
          "hanzi": "工作交流",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "gong zuo jiao liu",
          "tone": "gōng zuò jiāo liú"
        },
        {
          "stage": "sentence",
          "vi": "quan trọng đồ vật.",
          "hanzi": "重要东西。",
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
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "zhong yao dong xi",
          "tone": "zhòng yào dōng xī"
        },
        {
          "stage": "sentence",
          "vi": "đồ vật có liên quan đến đặt, để.",
          "hanzi": "东西和放着有关。",
          "words": [
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            },
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "dong xi fang zhe",
          "tone": "dōng xī fàng zhe"
        },
        {
          "stage": "sentence",
          "vi": "đặt, để, công việc, giao tiếp.",
          "hanzi": "放着工作交流。",
          "words": [
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "fang zhe gong zuo jiao liu",
          "tone": "fàng zhe gōng zuò jiāo liú"
        },
        {
          "stage": "sentence",
          "vi": "giao tiếp và kế hoạch rất quan trọng.",
          "hanzi": "交流计划很重要。",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "jiao liu ji hua zhong yao",
          "tone": "jiāo liú jì huà zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về quan trọng và đồ vật.",
          "hanzi": "重要东西观点。",
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
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "zhong yao dong xi guan dian",
          "tone": "zhòng yào dōng xī guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đồ vật và đặt, để.",
          "hanzi": "东西放着观点。",
          "words": [
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            },
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 12",
          "pinyin": "dong xi fang zhe guan dian",
          "tone": "dōng xī fàng zhe guān diǎn"
        }
      ]
    },
    {
      "id": "hsk3-l13",
      "no": 13,
      "titleZh": "我是走回来的",
      "titleVi": "Tôi đi bộ về",
      "items": [
        {
          "stage": "word",
          "vi": "trở về",
          "hanzi": "回来",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "hui lai",
          "tone": "huí lái"
        },
        {
          "stage": "word",
          "vi": "bây giờ",
          "hanzi": "现在",
          "words": [
            {
              "text": "现在",
              "pinyin": "xian zai",
              "tone": "xiàn zài",
              "pos": "adv",
              "vi": "bây giờ"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "xian zai",
          "tone": "xiàn zài"
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
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "gong zuo",
          "tone": "gōng zuò"
        },
        {
          "stage": "word",
          "vi": "đã",
          "hanzi": "已经",
          "words": [
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "yi jing",
          "tone": "yǐ jīng"
        },
        {
          "stage": "word",
          "vi": "rất",
          "hanzi": "非常",
          "words": [
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "fei chang",
          "tone": "fēi cháng"
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
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "fang bian",
          "tone": "fāng biàn"
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
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "ren zhen",
          "tone": "rèn zhēn"
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
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "jie guo",
          "tone": "jié guǒ"
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
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "wen hua",
          "tone": "wén huà"
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
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "xue xi",
          "tone": "xué xí"
        },
        {
          "stage": "phrase",
          "vi": "trở về và bây giờ",
          "hanzi": "回来现在",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "现在",
              "pinyin": "xian zai",
              "tone": "xiàn zài",
              "pos": "adv",
              "vi": "bây giờ"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "hui lai xian zai",
          "tone": "huí lái xiàn zài"
        },
        {
          "stage": "phrase",
          "vi": "bây giờ và công việc",
          "hanzi": "现在工作",
          "words": [
            {
              "text": "现在",
              "pinyin": "xian zai",
              "tone": "xiàn zài",
              "pos": "adv",
              "vi": "bây giờ"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "xian zai gong zuo",
          "tone": "xiàn zài gōng zuò"
        },
        {
          "stage": "phrase",
          "vi": "công việc và đã",
          "hanzi": "工作已经",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "gong zuo yi jing",
          "tone": "gōng zuò yǐ jīng"
        },
        {
          "stage": "phrase",
          "vi": "đã và rất",
          "hanzi": "已经非常",
          "words": [
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            },
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "yi jing fei chang",
          "tone": "yǐ jīng fēi cháng"
        },
        {
          "stage": "sentence",
          "vi": "trở về bây giờ.",
          "hanzi": "回来现在。",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "现在",
              "pinyin": "xian zai",
              "tone": "xiàn zài",
              "pos": "adv",
              "vi": "bây giờ"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "hui lai xian zai",
          "tone": "huí lái xiàn zài"
        },
        {
          "stage": "sentence",
          "vi": "bây giờ có liên quan đến công việc.",
          "hanzi": "现在和工作有关。",
          "words": [
            {
              "text": "现在",
              "pinyin": "xian zai",
              "tone": "xiàn zài",
              "pos": "adv",
              "vi": "bây giờ"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "xian zai gong zuo",
          "tone": "xiàn zài gōng zuò"
        },
        {
          "stage": "sentence",
          "vi": "công việc, đã, rất.",
          "hanzi": "工作已经非常。",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            },
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "gong zuo yi jing fei chang",
          "tone": "gōng zuò yǐ jīng fēi cháng"
        },
        {
          "stage": "sentence",
          "vi": "rất và thuận tiện rất quan trọng.",
          "hanzi": "非常方便很重要。",
          "words": [
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "方便",
              "pinyin": "fang bian",
              "tone": "fāng biàn",
              "pos": "adj",
              "vi": "thuận tiện"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "fei chang fang bian zhong yao",
          "tone": "fēi cháng fāng biàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về trở về và bây giờ.",
          "hanzi": "回来现在观点。",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "现在",
              "pinyin": "xian zai",
              "tone": "xiàn zài",
              "pos": "adv",
              "vi": "bây giờ"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "hui lai xian zai guan dian",
          "tone": "huí lái xiàn zài guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về bây giờ và công việc.",
          "hanzi": "现在工作观点。",
          "words": [
            {
              "text": "现在",
              "pinyin": "xian zai",
              "tone": "xiàn zài",
              "pos": "adv",
              "vi": "bây giờ"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 13",
          "pinyin": "xian zai gong zuo guan dian",
          "tone": "xiàn zài gōng zuò guān diǎn"
        }
      ]
    },
    {
      "id": "hsk3-l14",
      "no": 14,
      "titleZh": "你把水果拿过来",
      "titleVi": "Bạn cầm trái cây mang qua đây",
      "items": [
        {
          "stage": "word",
          "vi": "trái cây",
          "hanzi": "水果",
          "words": [
            {
              "text": "水果",
              "pinyin": "shui guo",
              "tone": "shuǐ guǒ",
              "pos": "noun",
              "vi": "trái cây"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "shui guo",
          "tone": "shuǐ guǒ"
        },
        {
          "stage": "word",
          "vi": "trở về",
          "hanzi": "回来",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "hui lai",
          "tone": "huí lái"
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
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "dong xi",
          "tone": "dōng xī"
        },
        {
          "stage": "word",
          "vi": "kế hoạch",
          "hanzi": "计划",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "ji hua",
          "tone": "jì huà"
        },
        {
          "stage": "word",
          "vi": "đã",
          "hanzi": "已经",
          "words": [
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "yi jing",
          "tone": "yǐ jīng"
        },
        {
          "stage": "word",
          "vi": "rất",
          "hanzi": "非常",
          "words": [
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "fei chang",
          "tone": "fēi cháng"
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
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "fang bian",
          "tone": "fāng biàn"
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
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "ren zhen",
          "tone": "rèn zhēn"
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
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "jie guo",
          "tone": "jié guǒ"
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
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "wen hua",
          "tone": "wén huà"
        },
        {
          "stage": "phrase",
          "vi": "trái cây và trở về",
          "hanzi": "水果回来",
          "words": [
            {
              "text": "水果",
              "pinyin": "shui guo",
              "tone": "shuǐ guǒ",
              "pos": "noun",
              "vi": "trái cây"
            },
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "shui guo hui lai",
          "tone": "shuǐ guǒ huí lái"
        },
        {
          "stage": "phrase",
          "vi": "trở về và đồ vật",
          "hanzi": "回来东西",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "hui lai dong xi",
          "tone": "huí lái dōng xī"
        },
        {
          "stage": "phrase",
          "vi": "đồ vật và kế hoạch",
          "hanzi": "东西计划",
          "words": [
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            },
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "dong xi ji hua",
          "tone": "dōng xī jì huà"
        },
        {
          "stage": "phrase",
          "vi": "kế hoạch và đã",
          "hanzi": "计划已经",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            },
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "ji hua yi jing",
          "tone": "jì huà yǐ jīng"
        },
        {
          "stage": "sentence",
          "vi": "trái cây trở về.",
          "hanzi": "水果回来。",
          "words": [
            {
              "text": "水果",
              "pinyin": "shui guo",
              "tone": "shuǐ guǒ",
              "pos": "noun",
              "vi": "trái cây"
            },
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "shui guo hui lai",
          "tone": "shuǐ guǒ huí lái"
        },
        {
          "stage": "sentence",
          "vi": "trở về có liên quan đến đồ vật.",
          "hanzi": "回来和东西有关。",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "hui lai dong xi",
          "tone": "huí lái dōng xī"
        },
        {
          "stage": "sentence",
          "vi": "đồ vật, kế hoạch, đã.",
          "hanzi": "东西计划已经。",
          "words": [
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            },
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            },
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "dong xi ji hua yi jing",
          "tone": "dōng xī jì huà yǐ jīng"
        },
        {
          "stage": "sentence",
          "vi": "đã và rất rất quan trọng.",
          "hanzi": "已经非常很重要。",
          "words": [
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            },
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "yi jing fei chang zhong yao",
          "tone": "yǐ jīng fēi cháng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về trái cây và trở về.",
          "hanzi": "水果回来观点。",
          "words": [
            {
              "text": "水果",
              "pinyin": "shui guo",
              "tone": "shuǐ guǒ",
              "pos": "noun",
              "vi": "trái cây"
            },
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "shui guo hui lai guan dian",
          "tone": "shuǐ guǒ huí lái guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về trở về và đồ vật.",
          "hanzi": "回来东西观点。",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 14",
          "pinyin": "hui lai dong xi guan dian",
          "tone": "huí lái dōng xī guān diǎn"
        }
      ]
    },
    {
      "id": "hsk3-l15",
      "no": 15,
      "titleZh": "其他都没什么问题",
      "titleVi": "Những cái khác đều không có vấn đề gì",
      "items": [
        {
          "stage": "word",
          "vi": "khác",
          "hanzi": "其他",
          "words": [
            {
              "text": "其他",
              "pinyin": "qi ta",
              "tone": "qí tā",
              "pos": "adj",
              "vi": "khác"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "qi ta",
          "tone": "qí tā"
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
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "wen ti",
          "tone": "wèn tí"
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
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "jie guo",
          "tone": "jié guǒ"
        },
        {
          "stage": "word",
          "vi": "rất",
          "hanzi": "非常",
          "words": [
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "fei chang",
          "tone": "fēi cháng"
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
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "fang bian",
          "tone": "fāng biàn"
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
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "ren zhen",
          "tone": "rèn zhēn"
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
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "wen hua",
          "tone": "wén huà"
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
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "xue xi",
          "tone": "xué xí"
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
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "gong zuo",
          "tone": "gōng zuò"
        },
        {
          "stage": "word",
          "vi": "giao tiếp",
          "hanzi": "交流",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "khác và vấn đề",
          "hanzi": "其他问题",
          "words": [
            {
              "text": "其他",
              "pinyin": "qi ta",
              "tone": "qí tā",
              "pos": "adj",
              "vi": "khác"
            },
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wèn tí",
              "pos": "noun",
              "vi": "vấn đề"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "qi ta wen ti",
          "tone": "qí tā wèn tí"
        },
        {
          "stage": "phrase",
          "vi": "vấn đề và kết quả",
          "hanzi": "问题结果",
          "words": [
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wèn tí",
              "pos": "noun",
              "vi": "vấn đề"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "wen ti jie guo",
          "tone": "wèn tí jié guǒ"
        },
        {
          "stage": "phrase",
          "vi": "kết quả và rất",
          "hanzi": "结果非常",
          "words": [
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            },
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "jie guo fei chang",
          "tone": "jié guǒ fēi cháng"
        },
        {
          "stage": "phrase",
          "vi": "rất và thuận tiện",
          "hanzi": "非常方便",
          "words": [
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "方便",
              "pinyin": "fang bian",
              "tone": "fāng biàn",
              "pos": "adj",
              "vi": "thuận tiện"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "fei chang fang bian",
          "tone": "fēi cháng fāng biàn"
        },
        {
          "stage": "sentence",
          "vi": "khác vấn đề.",
          "hanzi": "其他问题。",
          "words": [
            {
              "text": "其他",
              "pinyin": "qi ta",
              "tone": "qí tā",
              "pos": "adj",
              "vi": "khác"
            },
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wèn tí",
              "pos": "noun",
              "vi": "vấn đề"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "qi ta wen ti",
          "tone": "qí tā wèn tí"
        },
        {
          "stage": "sentence",
          "vi": "vấn đề có liên quan đến kết quả.",
          "hanzi": "问题和结果有关。",
          "words": [
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wèn tí",
              "pos": "noun",
              "vi": "vấn đề"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "wen ti jie guo",
          "tone": "wèn tí jié guǒ"
        },
        {
          "stage": "sentence",
          "vi": "kết quả, rất, thuận tiện.",
          "hanzi": "结果非常方便。",
          "words": [
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            },
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "方便",
              "pinyin": "fang bian",
              "tone": "fāng biàn",
              "pos": "adj",
              "vi": "thuận tiện"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "jie guo fei chang fang bian",
          "tone": "jié guǒ fēi cháng fāng biàn"
        },
        {
          "stage": "sentence",
          "vi": "thuận tiện và nghiêm túc rất quan trọng.",
          "hanzi": "方便认真很重要。",
          "words": [
            {
              "text": "方便",
              "pinyin": "fang bian",
              "tone": "fāng biàn",
              "pos": "adj",
              "vi": "thuận tiện"
            },
            {
              "text": "认真",
              "pinyin": "ren zhen",
              "tone": "rèn zhēn",
              "pos": "adj",
              "vi": "nghiêm túc"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "fang bian ren zhen zhong yao",
          "tone": "fāng biàn rèn zhēn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về khác và vấn đề.",
          "hanzi": "其他问题观点。",
          "words": [
            {
              "text": "其他",
              "pinyin": "qi ta",
              "tone": "qí tā",
              "pos": "adj",
              "vi": "khác"
            },
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wèn tí",
              "pos": "noun",
              "vi": "vấn đề"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "qi ta wen ti guan dian",
          "tone": "qí tā wèn tí guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về vấn đề và kết quả.",
          "hanzi": "问题结果观点。",
          "words": [
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wèn tí",
              "pos": "noun",
              "vi": "vấn đề"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 15",
          "pinyin": "wen ti jie guo guan dian",
          "tone": "wèn tí jié guǒ guān diǎn"
        }
      ]
    }
  ]
};
});
