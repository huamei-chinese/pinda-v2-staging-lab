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
  "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification",
  "levels": {
    "HSK3": [
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l11",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l12",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l13",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l14",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l15",
            "pinyin": "wen ti jie guo guan dian",
            "tone": "wèn tí jié guǒ guān diǎn"
          }
        ]
      },
      {
        "id": "hsk3-l16",
        "no": 16,
        "titleZh": "我现在累得下了班就想睡觉",
        "titleVi": "Bây giờ tôi mệt đến mức tan làm là chỉ muốn ngủ",
        "items": [
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "xian zai",
            "tone": "xiàn zài"
          },
          {
            "stage": "word",
            "vi": "mệt",
            "hanzi": "累",
            "words": [
              {
                "text": "累",
                "pinyin": "lei",
                "tone": "lèi",
                "pos": "adj",
                "vi": "mệt"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "lei",
            "tone": "lèi"
          },
          {
            "stage": "word",
            "vi": "ngủ",
            "hanzi": "睡觉",
            "words": [
              {
                "text": "睡觉",
                "pinyin": "shui jiao",
                "tone": "shuì jiào",
                "pos": "verb",
                "vi": "ngủ"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "shui jiao",
            "tone": "shuì jiào"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "gong zuo",
            "tone": "gōng zuò"
          },
          {
            "stage": "phrase",
            "vi": "bây giờ và mệt",
            "hanzi": "现在累",
            "words": [
              {
                "text": "现在",
                "pinyin": "xian zai",
                "tone": "xiàn zài",
                "pos": "adv",
                "vi": "bây giờ"
              },
              {
                "text": "累",
                "pinyin": "lei",
                "tone": "lèi",
                "pos": "adj",
                "vi": "mệt"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "xian zai lei",
            "tone": "xiàn zài lèi"
          },
          {
            "stage": "phrase",
            "vi": "mệt và ngủ",
            "hanzi": "累睡觉",
            "words": [
              {
                "text": "累",
                "pinyin": "lei",
                "tone": "lèi",
                "pos": "adj",
                "vi": "mệt"
              },
              {
                "text": "睡觉",
                "pinyin": "shui jiao",
                "tone": "shuì jiào",
                "pos": "verb",
                "vi": "ngủ"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "lei shui jiao",
            "tone": "lèi shuì jiào"
          },
          {
            "stage": "phrase",
            "vi": "ngủ và rất",
            "hanzi": "睡觉非常",
            "words": [
              {
                "text": "睡觉",
                "pinyin": "shui jiao",
                "tone": "shuì jiào",
                "pos": "verb",
                "vi": "ngủ"
              },
              {
                "text": "非常",
                "pinyin": "fei chang",
                "tone": "fēi cháng",
                "pos": "adv",
                "vi": "rất"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "shui jiao fei chang",
            "tone": "shuì jiào fēi cháng"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "fei chang fang bian",
            "tone": "fēi cháng fāng biàn"
          },
          {
            "stage": "sentence",
            "vi": "bây giờ mệt.",
            "hanzi": "现在累。",
            "words": [
              {
                "text": "现在",
                "pinyin": "xian zai",
                "tone": "xiàn zài",
                "pos": "adv",
                "vi": "bây giờ"
              },
              {
                "text": "累",
                "pinyin": "lei",
                "tone": "lèi",
                "pos": "adj",
                "vi": "mệt"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "xian zai lei",
            "tone": "xiàn zài lèi"
          },
          {
            "stage": "sentence",
            "vi": "mệt có liên quan đến ngủ.",
            "hanzi": "累和睡觉有关。",
            "words": [
              {
                "text": "累",
                "pinyin": "lei",
                "tone": "lèi",
                "pos": "adj",
                "vi": "mệt"
              },
              {
                "text": "睡觉",
                "pinyin": "shui jiao",
                "tone": "shuì jiào",
                "pos": "verb",
                "vi": "ngủ"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "lei shui jiao",
            "tone": "lèi shuì jiào"
          },
          {
            "stage": "sentence",
            "vi": "ngủ, rất, thuận tiện.",
            "hanzi": "睡觉非常方便。",
            "words": [
              {
                "text": "睡觉",
                "pinyin": "shui jiao",
                "tone": "shuì jiào",
                "pos": "verb",
                "vi": "ngủ"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "shui jiao fei chang fang bian",
            "tone": "shuì jiào fēi cháng fāng biàn"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "fang bian ren zhen zhong yao",
            "tone": "fāng biàn rèn zhēn zhòng yào"
          },
          {
            "stage": "mixed",
            "vi": "Quan điểm về bây giờ và mệt.",
            "hanzi": "现在累观点。",
            "words": [
              {
                "text": "现在",
                "pinyin": "xian zai",
                "tone": "xiàn zài",
                "pos": "adv",
                "vi": "bây giờ"
              },
              {
                "text": "累",
                "pinyin": "lei",
                "tone": "lèi",
                "pos": "adj",
                "vi": "mệt"
              },
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "xian zai lei guan dian",
            "tone": "xiàn zài lèi guān diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Quan điểm về mệt và ngủ.",
            "hanzi": "累睡觉观点。",
            "words": [
              {
                "text": "累",
                "pinyin": "lei",
                "tone": "lèi",
                "pos": "adj",
                "vi": "mệt"
              },
              {
                "text": "睡觉",
                "pinyin": "shui jiao",
                "tone": "shuì jiào",
                "pos": "verb",
                "vi": "ngủ"
              },
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l16",
            "pinyin": "lei shui jiao guan dian",
            "tone": "lèi shuì jiào guān diǎn"
          }
        ]
      },
      {
        "id": "hsk3-l17",
        "no": 17,
        "titleZh": "谁都有办法看好你的病",
        "titleVi": "Ai cũng có cách chữa tốt bệnh của bạn",
        "items": [
          {
            "stage": "word",
            "vi": "cách, biện pháp",
            "hanzi": "办法",
            "words": [
              {
                "text": "办法",
                "pinyin": "ban fa",
                "tone": "bàn fǎ",
                "pos": "noun",
                "vi": "cách, biện pháp"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "ban fa",
            "tone": "bàn fǎ"
          },
          {
            "stage": "word",
            "vi": "bệnh",
            "hanzi": "病",
            "words": [
              {
                "text": "病",
                "pinyin": "bing",
                "tone": "bìng",
                "pos": "noun",
                "vi": "bệnh"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "bing",
            "tone": "bìng"
          },
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
          },
          {
            "stage": "phrase",
            "vi": "cách, biện pháp và bệnh",
            "hanzi": "办法病",
            "words": [
              {
                "text": "办法",
                "pinyin": "ban fa",
                "tone": "bàn fǎ",
                "pos": "noun",
                "vi": "cách, biện pháp"
              },
              {
                "text": "病",
                "pinyin": "bing",
                "tone": "bìng",
                "pos": "noun",
                "vi": "bệnh"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "ban fa bing",
            "tone": "bàn fǎ bìng"
          },
          {
            "stage": "phrase",
            "vi": "bệnh và bảo vệ",
            "hanzi": "病保护",
            "words": [
              {
                "text": "病",
                "pinyin": "bing",
                "tone": "bìng",
                "pos": "noun",
                "vi": "bệnh"
              },
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "bing bao hu",
            "tone": "bìng bǎo hù"
          },
          {
            "stage": "phrase",
            "vi": "bảo vệ và thuận tiện",
            "hanzi": "保护方便",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              },
              {
                "text": "方便",
                "pinyin": "fang bian",
                "tone": "fāng biàn",
                "pos": "adj",
                "vi": "thuận tiện"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "bao hu fang bian",
            "tone": "bǎo hù fāng biàn"
          },
          {
            "stage": "phrase",
            "vi": "thuận tiện và nghiêm túc",
            "hanzi": "方便认真",
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
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "fang bian ren zhen",
            "tone": "fāng biàn rèn zhēn"
          },
          {
            "stage": "sentence",
            "vi": "cách, biện pháp bệnh.",
            "hanzi": "办法病。",
            "words": [
              {
                "text": "办法",
                "pinyin": "ban fa",
                "tone": "bàn fǎ",
                "pos": "noun",
                "vi": "cách, biện pháp"
              },
              {
                "text": "病",
                "pinyin": "bing",
                "tone": "bìng",
                "pos": "noun",
                "vi": "bệnh"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "ban fa bing",
            "tone": "bàn fǎ bìng"
          },
          {
            "stage": "sentence",
            "vi": "bệnh có liên quan đến bảo vệ.",
            "hanzi": "病和保护有关。",
            "words": [
              {
                "text": "病",
                "pinyin": "bing",
                "tone": "bìng",
                "pos": "noun",
                "vi": "bệnh"
              },
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "bing bao hu",
            "tone": "bìng bǎo hù"
          },
          {
            "stage": "sentence",
            "vi": "bảo vệ, thuận tiện, nghiêm túc.",
            "hanzi": "保护方便认真。",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              },
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
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "bao hu fang bian ren zhen",
            "tone": "bǎo hù fāng biàn rèn zhēn"
          },
          {
            "stage": "sentence",
            "vi": "nghiêm túc và kết quả rất quan trọng.",
            "hanzi": "认真结果很重要。",
            "words": [
              {
                "text": "认真",
                "pinyin": "ren zhen",
                "tone": "rèn zhēn",
                "pos": "adj",
                "vi": "nghiêm túc"
              },
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              },
              {
                "text": "重要",
                "pinyin": "zhong yao",
                "tone": "zhòng yào",
                "pos": "adj",
                "vi": "quan trọng"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "ren zhen jie guo zhong yao",
            "tone": "rèn zhēn jié guǒ zhòng yào"
          },
          {
            "stage": "mixed",
            "vi": "Quan điểm về cách, biện pháp và bệnh.",
            "hanzi": "办法病观点。",
            "words": [
              {
                "text": "办法",
                "pinyin": "ban fa",
                "tone": "bàn fǎ",
                "pos": "noun",
                "vi": "cách, biện pháp"
              },
              {
                "text": "病",
                "pinyin": "bing",
                "tone": "bìng",
                "pos": "noun",
                "vi": "bệnh"
              },
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "ban fa bing guan dian",
            "tone": "bàn fǎ bìng guān diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Quan điểm về bệnh và bảo vệ.",
            "hanzi": "病保护观点。",
            "words": [
              {
                "text": "病",
                "pinyin": "bing",
                "tone": "bìng",
                "pos": "noun",
                "vi": "bệnh"
              },
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              },
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l17",
            "pinyin": "bing bao hu guan dian",
            "tone": "bìng bǎo hù guān diǎn"
          }
        ]
      },
      {
        "id": "hsk3-l18",
        "no": 18,
        "titleZh": "我相信他们会同意的",
        "titleVi": "Tôi tin rằng họ sẽ đồng ý",
        "items": [
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "xiang xin",
            "tone": "xiāng xìn"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "tong yi",
            "tone": "tóng yì"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "fei chang",
            "tone": "fēi cháng"
          },
          {
            "stage": "phrase",
            "vi": "tin tưởng và đồng ý",
            "hanzi": "相信同意",
            "words": [
              {
                "text": "相信",
                "pinyin": "xiang xin",
                "tone": "xiāng xìn",
                "pos": "verb",
                "vi": "tin tưởng"
              },
              {
                "text": "同意",
                "pinyin": "tong yi",
                "tone": "tóng yì",
                "pos": "verb",
                "vi": "đồng ý"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "xiang xin tong yi",
            "tone": "xiāng xìn tóng yì"
          },
          {
            "stage": "phrase",
            "vi": "đồng ý và kết quả",
            "hanzi": "同意结果",
            "words": [
              {
                "text": "同意",
                "pinyin": "tong yi",
                "tone": "tóng yì",
                "pos": "verb",
                "vi": "đồng ý"
              },
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "tong yi jie guo",
            "tone": "tóng yì jié guǒ"
          },
          {
            "stage": "phrase",
            "vi": "kết quả và văn hóa",
            "hanzi": "结果文化",
            "words": [
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              },
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "jie guo wen hua",
            "tone": "jié guǒ wén huà"
          },
          {
            "stage": "phrase",
            "vi": "văn hóa và học",
            "hanzi": "文化学习",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "wen hua xue xi",
            "tone": "wén huà xué xí"
          },
          {
            "stage": "sentence",
            "vi": "tin tưởng đồng ý.",
            "hanzi": "相信同意。",
            "words": [
              {
                "text": "相信",
                "pinyin": "xiang xin",
                "tone": "xiāng xìn",
                "pos": "verb",
                "vi": "tin tưởng"
              },
              {
                "text": "同意",
                "pinyin": "tong yi",
                "tone": "tóng yì",
                "pos": "verb",
                "vi": "đồng ý"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "xiang xin tong yi",
            "tone": "xiāng xìn tóng yì"
          },
          {
            "stage": "sentence",
            "vi": "đồng ý có liên quan đến kết quả.",
            "hanzi": "同意和结果有关。",
            "words": [
              {
                "text": "同意",
                "pinyin": "tong yi",
                "tone": "tóng yì",
                "pos": "verb",
                "vi": "đồng ý"
              },
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "tong yi jie guo",
            "tone": "tóng yì jié guǒ"
          },
          {
            "stage": "sentence",
            "vi": "kết quả, văn hóa, học.",
            "hanzi": "结果文化学习。",
            "words": [
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              },
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "jie guo wen hua xue xi",
            "tone": "jié guǒ wén huà xué xí"
          },
          {
            "stage": "sentence",
            "vi": "học và công việc rất quan trọng.",
            "hanzi": "学习工作很重要。",
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
              },
              {
                "text": "重要",
                "pinyin": "zhong yao",
                "tone": "zhòng yào",
                "pos": "adj",
                "vi": "quan trọng"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "xue xi gong zuo zhong yao",
            "tone": "xué xí gōng zuò zhòng yào"
          },
          {
            "stage": "mixed",
            "vi": "Quan điểm về tin tưởng và đồng ý.",
            "hanzi": "相信同意观点。",
            "words": [
              {
                "text": "相信",
                "pinyin": "xiang xin",
                "tone": "xiāng xìn",
                "pos": "verb",
                "vi": "tin tưởng"
              },
              {
                "text": "同意",
                "pinyin": "tong yi",
                "tone": "tóng yì",
                "pos": "verb",
                "vi": "đồng ý"
              },
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "xiang xin tong yi guan dian",
            "tone": "xiāng xìn tóng yì guān diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Quan điểm về đồng ý và kết quả.",
            "hanzi": "同意结果观点。",
            "words": [
              {
                "text": "同意",
                "pinyin": "tong yi",
                "tone": "tóng yì",
                "pos": "verb",
                "vi": "đồng ý"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l18",
            "pinyin": "tong yi jie guo guan dian",
            "tone": "tóng yì jié guǒ guān diǎn"
          }
        ]
      },
      {
        "id": "hsk3-l19",
        "no": 19,
        "titleZh": "你没看出来吗",
        "titleVi": "Bạn không nhìn ra sao",
        "items": [
          {
            "stage": "word",
            "vi": "nhìn ra, nhận ra",
            "hanzi": "看出来",
            "words": [
              {
                "text": "看出来",
                "pinyin": "kan chu lai",
                "tone": "kàn chū lái",
                "pos": "verb",
                "vi": "nhìn ra, nhận ra"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "kan chu lai",
            "tone": "kàn chū lái"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "wen ti",
            "tone": "wèn tí"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "yi jing",
            "tone": "yǐ jīng"
          },
          {
            "stage": "phrase",
            "vi": "nhìn ra, nhận ra và vấn đề",
            "hanzi": "看出来问题",
            "words": [
              {
                "text": "看出来",
                "pinyin": "kan chu lai",
                "tone": "kàn chū lái",
                "pos": "verb",
                "vi": "nhìn ra, nhận ra"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "kan chu lai wen ti",
            "tone": "kàn chū lái wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề và phán đoán",
            "hanzi": "问题判断",
            "words": [
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              },
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "wen ti pan duan",
            "tone": "wèn tí pàn duàn"
          },
          {
            "stage": "phrase",
            "vi": "phán đoán và kết quả",
            "hanzi": "判断结果",
            "words": [
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              },
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "pan duan jie guo",
            "tone": "pàn duàn jié guǒ"
          },
          {
            "stage": "phrase",
            "vi": "kết quả và văn hóa",
            "hanzi": "结果文化",
            "words": [
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              },
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "jie guo wen hua",
            "tone": "jié guǒ wén huà"
          },
          {
            "stage": "sentence",
            "vi": "nhìn ra, nhận ra vấn đề.",
            "hanzi": "看出来问题。",
            "words": [
              {
                "text": "看出来",
                "pinyin": "kan chu lai",
                "tone": "kàn chū lái",
                "pos": "verb",
                "vi": "nhìn ra, nhận ra"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "kan chu lai wen ti",
            "tone": "kàn chū lái wèn tí"
          },
          {
            "stage": "sentence",
            "vi": "vấn đề có liên quan đến phán đoán.",
            "hanzi": "问题和判断有关。",
            "words": [
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              },
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "wen ti pan duan",
            "tone": "wèn tí pàn duàn"
          },
          {
            "stage": "sentence",
            "vi": "phán đoán, kết quả, văn hóa.",
            "hanzi": "判断结果文化。",
            "words": [
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              },
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              },
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "pan duan jie guo wen hua",
            "tone": "pàn duàn jié guǒ wén huà"
          },
          {
            "stage": "sentence",
            "vi": "văn hóa và học rất quan trọng.",
            "hanzi": "文化学习很重要。",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "重要",
                "pinyin": "zhong yao",
                "tone": "zhòng yào",
                "pos": "adj",
                "vi": "quan trọng"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "wen hua xue xi zhong yao",
            "tone": "wén huà xué xí zhòng yào"
          },
          {
            "stage": "mixed",
            "vi": "Quan điểm về nhìn ra, nhận ra và vấn đề.",
            "hanzi": "看出来问题观点。",
            "words": [
              {
                "text": "看出来",
                "pinyin": "kan chu lai",
                "tone": "kàn chū lái",
                "pos": "verb",
                "vi": "nhìn ra, nhận ra"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "kan chu lai wen ti guan dian",
            "tone": "kàn chū lái wèn tí guān diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Quan điểm về vấn đề và phán đoán.",
            "hanzi": "问题判断观点。",
            "words": [
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              },
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              },
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l19",
            "pinyin": "wen ti pan duan guan dian",
            "tone": "wèn tí pàn duàn guān diǎn"
          }
        ]
      },
      {
        "id": "hsk3-l20",
        "no": 20,
        "titleZh": "我被他影响了",
        "titleVi": "Tôi đã bị anh ấy ảnh hưởng",
        "items": [
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "ying xiang",
            "tone": "yǐng xiǎng"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "peng you",
            "tone": "péng yǒu"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "ren zhen",
            "tone": "rèn zhēn"
          },
          {
            "stage": "phrase",
            "vi": "ảnh hưởng và bạn bè",
            "hanzi": "影响朋友",
            "words": [
              {
                "text": "影响",
                "pinyin": "ying xiang",
                "tone": "yǐng xiǎng",
                "pos": "verb",
                "vi": "ảnh hưởng"
              },
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "ying xiang peng you",
            "tone": "yǐng xiǎng péng yǒu"
          },
          {
            "stage": "phrase",
            "vi": "bạn bè và kết quả",
            "hanzi": "朋友结果",
            "words": [
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              },
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "peng you jie guo",
            "tone": "péng yǒu jié guǒ"
          },
          {
            "stage": "phrase",
            "vi": "kết quả và công việc",
            "hanzi": "结果工作",
            "words": [
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              },
              {
                "text": "工作",
                "pinyin": "gong zuo",
                "tone": "gōng zuò",
                "pos": "noun",
                "vi": "công việc"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "jie guo gong zuo",
            "tone": "jié guǒ gōng zuò"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "gong zuo jiao liu",
            "tone": "gōng zuò jiāo liú"
          },
          {
            "stage": "sentence",
            "vi": "ảnh hưởng bạn bè.",
            "hanzi": "影响朋友。",
            "words": [
              {
                "text": "影响",
                "pinyin": "ying xiang",
                "tone": "yǐng xiǎng",
                "pos": "verb",
                "vi": "ảnh hưởng"
              },
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "ying xiang peng you",
            "tone": "yǐng xiǎng péng yǒu"
          },
          {
            "stage": "sentence",
            "vi": "bạn bè có liên quan đến kết quả.",
            "hanzi": "朋友和结果有关。",
            "words": [
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              },
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "peng you jie guo",
            "tone": "péng yǒu jié guǒ"
          },
          {
            "stage": "sentence",
            "vi": "kết quả, công việc, giao tiếp.",
            "hanzi": "结果工作交流。",
            "words": [
              {
                "text": "结果",
                "pinyin": "jie guo",
                "tone": "jié guǒ",
                "pos": "noun",
                "vi": "kết quả"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "jie guo gong zuo jiao liu",
            "tone": "jié guǒ gōng zuò jiāo liú"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "jiao liu ji hua zhong yao",
            "tone": "jiāo liú jì huà zhòng yào"
          },
          {
            "stage": "mixed",
            "vi": "Quan điểm về ảnh hưởng và bạn bè.",
            "hanzi": "影响朋友观点。",
            "words": [
              {
                "text": "影响",
                "pinyin": "ying xiang",
                "tone": "yǐng xiǎng",
                "pos": "verb",
                "vi": "ảnh hưởng"
              },
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              },
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              }
            ],
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "ying xiang peng you guan dian",
            "tone": "yǐng xiǎng péng yǒu guān diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Quan điểm về bạn bè và kết quả.",
            "hanzi": "朋友结果观点。",
            "words": [
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
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
            "source": "Textbook alignment candidate final batch - needs human PDF/OCR verification - hsk3-l20",
            "pinyin": "peng you jie guo guan dian",
            "tone": "péng yǒu jié guǒ guān diǎn"
          }
        ]
      }
    ],
    "HSK4": [
      {
        "id": "hsk4-l11",
        "no": 11,
        "titleZh": "读书好，读好书，好读书",
        "titleVi": "Đọc sách có ích, đọc sách hay, yêu đọc sách",
        "items": [
          {
            "stage": "word",
            "vi": "đọc sách, học hành",
            "hanzi": "读书",
            "words": [
              {
                "text": "读书",
                "pinyin": "du shu",
                "tone": "dú shū",
                "pos": "verb",
                "vi": "đọc sách, học hành"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "du shu",
            "tone": "dú shū"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "xi guan",
            "tone": "xí guàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "wen hua",
            "tone": "wén huà"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "ji xu",
            "tone": "jì xù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "nei rong",
            "tone": "nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về đọc sách, học hành",
            "hanzi": "读书内容",
            "words": [
              {
                "text": "读书",
                "pinyin": "du shu",
                "tone": "dú shū",
                "pos": "verb",
                "vi": "đọc sách, học hành"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "du shu nei rong",
            "tone": "dú shū nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về cách thức",
            "hanzi": "方式方法",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "fang shi fang fa",
            "tone": "fāng shì fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về thói quen",
            "hanzi": "习惯重点",
            "words": [
              {
                "text": "习惯",
                "pinyin": "xi guan",
                "tone": "xí guàn",
                "pos": "noun",
                "vi": "thói quen"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "xi guan zhong dian",
            "tone": "xí guàn zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về đọc sách, học hành",
            "hanzi": "读书问题",
            "words": [
              {
                "text": "读书",
                "pinyin": "du shu",
                "tone": "dú shū",
                "pos": "verb",
                "vi": "đọc sách, học hành"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "du shu wen ti",
            "tone": "dú shū wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cách thức",
            "hanzi": "方式重点",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "fang shi zhong dian",
            "tone": "fāng shì zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Đọc sách có ích, đọc sách hay, yêu đọc sách",
            "hanzi": "读书好，读好书，好读书。",
            "words": [
              {
                "text": "读书",
                "pinyin": "du shu",
                "tone": "dú shū",
                "pos": "verb",
                "vi": "đọc sách, học hành"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "du shu",
            "tone": "dú shū"
          },
          {
            "stage": "sentence",
            "vi": "cách thức là trọng điểm của bài này.",
            "hanzi": "方式是本课重点。",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "fang shi zhong dian",
            "tone": "fāng shì zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: đọc sách, học hành.",
            "hanzi": "读书是本课重点。",
            "words": [
              {
                "text": "读书",
                "pinyin": "du shu",
                "tone": "dú shū",
                "pos": "verb",
                "vi": "đọc sách, học hành"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l11",
            "pinyin": "du shu zhong dian",
            "tone": "dú shū zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk4-l12",
        "no": 12,
        "titleZh": "用心发现世界",
        "titleVi": "Dùng trái tim để khám phá thế giới",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "shi jie",
            "tone": "shì jiè"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "ren zhen",
            "tone": "rèn zhēn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "ji xu",
            "tone": "jì xù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về phát hiện",
            "hanzi": "发现内容",
            "words": [
              {
                "text": "发现",
                "pinyin": "fa xian",
                "tone": "fā xiàn",
                "pos": "verb",
                "vi": "phát hiện"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "fa xian nei rong",
            "tone": "fā xiàn nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về thế giới",
            "hanzi": "世界方法",
            "words": [
              {
                "text": "世界",
                "pinyin": "shi jie",
                "tone": "shì jiè",
                "pos": "noun",
                "vi": "thế giới"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "shi jie fang fa",
            "tone": "shì jiè fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về nghiêm túc",
            "hanzi": "认真重点",
            "words": [
              {
                "text": "认真",
                "pinyin": "ren zhen",
                "tone": "rèn zhēn",
                "pos": "adj",
                "vi": "nghiêm túc"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "ren zhen zhong dian",
            "tone": "rèn zhēn zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về phát hiện",
            "hanzi": "发现问题",
            "words": [
              {
                "text": "发现",
                "pinyin": "fa xian",
                "tone": "fā xiàn",
                "pos": "verb",
                "vi": "phát hiện"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "fa xian wen ti",
            "tone": "fā xiàn wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về thế giới",
            "hanzi": "世界重点",
            "words": [
              {
                "text": "世界",
                "pinyin": "shi jie",
                "tone": "shì jiè",
                "pos": "noun",
                "vi": "thế giới"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "shi jie zhong dian",
            "tone": "shì jiè zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Dùng trái tim để khám phá thế giới",
            "hanzi": "用心发现世界。",
            "words": [
              {
                "text": "发现",
                "pinyin": "fa xian",
                "tone": "fā xiàn",
                "pos": "verb",
                "vi": "phát hiện"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "fa xian",
            "tone": "fā xiàn"
          },
          {
            "stage": "sentence",
            "vi": "thế giới là trọng điểm của bài này.",
            "hanzi": "世界是本课重点。",
            "words": [
              {
                "text": "世界",
                "pinyin": "shi jie",
                "tone": "shì jiè",
                "pos": "noun",
                "vi": "thế giới"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "shi jie zhong dian",
            "tone": "shì jiè zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: phát hiện.",
            "hanzi": "发现是本课重点。",
            "words": [
              {
                "text": "发现",
                "pinyin": "fa xian",
                "tone": "fā xiàn",
                "pos": "verb",
                "vi": "phát hiện"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l12",
            "pinyin": "fa xian zhong dian",
            "tone": "fā xiàn zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk4-l13",
        "no": 13,
        "titleZh": "喝着茶看京剧",
        "titleVi": "Vừa uống trà vừa xem kinh kịch",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "cha",
            "tone": "chá"
          },
          {
            "stage": "word",
            "vi": "kinh kịch",
            "hanzi": "京剧",
            "words": [
              {
                "text": "京剧",
                "pinyin": "jing ju",
                "tone": "jīng jù",
                "pos": "noun",
                "vi": "kinh kịch"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "ji xu",
            "tone": "jì xù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "xue xi",
            "tone": "xué xí"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về trà",
            "hanzi": "茶内容",
            "words": [
              {
                "text": "茶",
                "pinyin": "cha",
                "tone": "chá",
                "pos": "noun",
                "vi": "trà"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "cha nei rong",
            "tone": "chá nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về kinh kịch",
            "hanzi": "京剧方法",
            "words": [
              {
                "text": "京剧",
                "pinyin": "jing ju",
                "tone": "jīng jù",
                "pos": "noun",
                "vi": "kinh kịch"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "jing ju fang fa",
            "tone": "jīng jù fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về văn hóa",
            "hanzi": "文化重点",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "wen hua zhong dian",
            "tone": "wén huà zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về trà",
            "hanzi": "茶问题",
            "words": [
              {
                "text": "茶",
                "pinyin": "cha",
                "tone": "chá",
                "pos": "noun",
                "vi": "trà"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "cha wen ti",
            "tone": "chá wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về kinh kịch",
            "hanzi": "京剧重点",
            "words": [
              {
                "text": "京剧",
                "pinyin": "jing ju",
                "tone": "jīng jù",
                "pos": "noun",
                "vi": "kinh kịch"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "jing ju zhong dian",
            "tone": "jīng jù zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Vừa uống trà vừa xem kinh kịch",
            "hanzi": "喝着茶看京剧。",
            "words": [
              {
                "text": "茶",
                "pinyin": "cha",
                "tone": "chá",
                "pos": "noun",
                "vi": "trà"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "cha",
            "tone": "chá"
          },
          {
            "stage": "sentence",
            "vi": "kinh kịch là trọng điểm của bài này.",
            "hanzi": "京剧是本课重点。",
            "words": [
              {
                "text": "京剧",
                "pinyin": "jing ju",
                "tone": "jīng jù",
                "pos": "noun",
                "vi": "kinh kịch"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "jing ju zhong dian",
            "tone": "jīng jù zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: trà.",
            "hanzi": "茶是本课重点。",
            "words": [
              {
                "text": "茶",
                "pinyin": "cha",
                "tone": "chá",
                "pos": "noun",
                "vi": "trà"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l13",
            "pinyin": "cha zhong dian",
            "tone": "chá zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk4-l14",
        "no": 14,
        "titleZh": "保护地球母亲",
        "titleVi": "Bảo vệ Mẹ Trái Đất",
        "items": [
          {
            "stage": "word",
            "vi": "bảo vệ Trái Đất",
            "hanzi": "保护地球",
            "words": [
              {
                "text": "保护地球",
                "pinyin": "bao hu di qiu",
                "tone": "bǎo hù dì qiú",
                "pos": "verb",
                "vi": "bảo vệ Trái Đất"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "bao hu di qiu",
            "tone": "bǎo hù dì qiú"
          },
          {
            "stage": "word",
            "vi": "Mẹ Trái Đất",
            "hanzi": "地球母亲",
            "words": [
              {
                "text": "地球母亲",
                "pinyin": "di qiu mu qin",
                "tone": "dì qiú mǔ qīn",
                "pos": "noun",
                "vi": "Mẹ Trái Đất"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "di qiu mu qin",
            "tone": "dì qiú mǔ qīn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "wen hua",
            "tone": "wén huà"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "ji xu",
            "tone": "jì xù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "gong zuo",
            "tone": "gōng zuò"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về bảo vệ Trái Đất",
            "hanzi": "保护地球内容",
            "words": [
              {
                "text": "保护地球",
                "pinyin": "bao hu di qiu",
                "tone": "bǎo hù dì qiú",
                "pos": "verb",
                "vi": "bảo vệ Trái Đất"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "bao hu di qiu nei rong",
            "tone": "bǎo hù dì qiú nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về Mẹ Trái Đất",
            "hanzi": "地球母亲方法",
            "words": [
              {
                "text": "地球母亲",
                "pinyin": "di qiu mu qin",
                "tone": "dì qiú mǔ qīn",
                "pos": "noun",
                "vi": "Mẹ Trái Đất"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "di qiu mu qin fang fa",
            "tone": "dì qiú mǔ qīn fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về văn hóa",
            "hanzi": "文化重点",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "wen hua zhong dian",
            "tone": "wén huà zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về bảo vệ Trái Đất",
            "hanzi": "保护地球问题",
            "words": [
              {
                "text": "保护地球",
                "pinyin": "bao hu di qiu",
                "tone": "bǎo hù dì qiú",
                "pos": "verb",
                "vi": "bảo vệ Trái Đất"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "bao hu di qiu wen ti",
            "tone": "bǎo hù dì qiú wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về Mẹ Trái Đất",
            "hanzi": "地球母亲重点",
            "words": [
              {
                "text": "地球母亲",
                "pinyin": "di qiu mu qin",
                "tone": "dì qiú mǔ qīn",
                "pos": "noun",
                "vi": "Mẹ Trái Đất"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "di qiu mu qin zhong dian",
            "tone": "dì qiú mǔ qīn zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Bảo vệ Mẹ Trái Đất",
            "hanzi": "保护地球母亲。",
            "words": [
              {
                "text": "保护地球",
                "pinyin": "bao hu di qiu",
                "tone": "bǎo hù dì qiú",
                "pos": "verb",
                "vi": "bảo vệ Trái Đất"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "bao hu di qiu",
            "tone": "bǎo hù dì qiú"
          },
          {
            "stage": "sentence",
            "vi": "Mẹ Trái Đất là trọng điểm của bài này.",
            "hanzi": "地球母亲是本课重点。",
            "words": [
              {
                "text": "地球母亲",
                "pinyin": "di qiu mu qin",
                "tone": "dì qiú mǔ qīn",
                "pos": "noun",
                "vi": "Mẹ Trái Đất"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "di qiu mu qin zhong dian",
            "tone": "dì qiú mǔ qīn zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: bảo vệ Trái Đất.",
            "hanzi": "保护地球是本课重点。",
            "words": [
              {
                "text": "保护地球",
                "pinyin": "bao hu di qiu",
                "tone": "bǎo hù dì qiú",
                "pos": "verb",
                "vi": "bảo vệ Trái Đất"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l14",
            "pinyin": "bao hu di qiu zhong dian",
            "tone": "bǎo hù dì qiú zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk4-l15",
        "no": 15,
        "titleZh": "教育孩子的艺术",
        "titleVi": "Nghệ thuật giáo dục trẻ em",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "yi shu",
            "tone": "yì shù"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "ji xu",
            "tone": "jì xù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "xue xi",
            "tone": "xué xí"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về giáo dục",
            "hanzi": "教育内容",
            "words": [
              {
                "text": "教育",
                "pinyin": "jiao yu",
                "tone": "jiào yù",
                "pos": "verb",
                "vi": "giáo dục"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "jiao yu nei rong",
            "tone": "jiào yù nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về trẻ em",
            "hanzi": "孩子方法",
            "words": [
              {
                "text": "孩子",
                "pinyin": "hai zi",
                "tone": "hái zi",
                "pos": "noun",
                "vi": "trẻ em"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "hai zi fang fa",
            "tone": "hái zi fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về nghệ thuật",
            "hanzi": "艺术重点",
            "words": [
              {
                "text": "艺术",
                "pinyin": "yi shu",
                "tone": "yì shù",
                "pos": "noun",
                "vi": "nghệ thuật"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "yi shu zhong dian",
            "tone": "yì shù zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về giáo dục",
            "hanzi": "教育问题",
            "words": [
              {
                "text": "教育",
                "pinyin": "jiao yu",
                "tone": "jiào yù",
                "pos": "verb",
                "vi": "giáo dục"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "jiao yu wen ti",
            "tone": "jiào yù wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về trẻ em",
            "hanzi": "孩子重点",
            "words": [
              {
                "text": "孩子",
                "pinyin": "hai zi",
                "tone": "hái zi",
                "pos": "noun",
                "vi": "trẻ em"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "hai zi zhong dian",
            "tone": "hái zi zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Nghệ thuật giáo dục trẻ em",
            "hanzi": "教育孩子的艺术。",
            "words": [
              {
                "text": "教育",
                "pinyin": "jiao yu",
                "tone": "jiào yù",
                "pos": "verb",
                "vi": "giáo dục"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "jiao yu",
            "tone": "jiào yù"
          },
          {
            "stage": "sentence",
            "vi": "trẻ em là trọng điểm của bài này.",
            "hanzi": "孩子是本课重点。",
            "words": [
              {
                "text": "孩子",
                "pinyin": "hai zi",
                "tone": "hái zi",
                "pos": "noun",
                "vi": "trẻ em"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "hai zi zhong dian",
            "tone": "hái zi zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: giáo dục.",
            "hanzi": "教育是本课重点。",
            "words": [
              {
                "text": "教育",
                "pinyin": "jiao yu",
                "tone": "jiào yù",
                "pos": "verb",
                "vi": "giáo dục"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l15",
            "pinyin": "jiao yu zhong dian",
            "tone": "jiào yù zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk4-l16",
        "no": 16,
        "titleZh": "生活可以更美好",
        "titleVi": "Cuộc sống có thể tốt đẹp hơn",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "mei",
            "tone": "měi"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về cuộc sống",
            "hanzi": "生活内容",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "sheng huo nei rong",
            "tone": "shēng huó nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về đẹp",
            "hanzi": "美方法",
            "words": [
              {
                "text": "美",
                "pinyin": "mei",
                "tone": "měi",
                "pos": "adj",
                "vi": "đẹp"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "mei fang fa",
            "tone": "měi fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cách thức",
            "hanzi": "方式重点",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "fang shi zhong dian",
            "tone": "fāng shì zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về cuộc sống",
            "hanzi": "生活问题",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "sheng huo wen ti",
            "tone": "shēng huó wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về đẹp",
            "hanzi": "美重点",
            "words": [
              {
                "text": "美",
                "pinyin": "mei",
                "tone": "měi",
                "pos": "adj",
                "vi": "đẹp"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "mei zhong dian",
            "tone": "měi zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Cuộc sống có thể tốt đẹp hơn",
            "hanzi": "生活可以更美好。",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
          },
          {
            "stage": "sentence",
            "vi": "đẹp là trọng điểm của bài này.",
            "hanzi": "美是本课重点。",
            "words": [
              {
                "text": "美",
                "pinyin": "mei",
                "tone": "měi",
                "pos": "adj",
                "vi": "đẹp"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "mei zhong dian",
            "tone": "měi zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: cuộc sống.",
            "hanzi": "生活是本课重点。",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l16",
            "pinyin": "sheng huo zhong dian",
            "tone": "shēng huó zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk4-l17",
        "no": 17,
        "titleZh": "人与自然",
        "titleVi": "Con người và thiên nhiên",
        "items": [
          {
            "stage": "word",
            "vi": "con người và thiên nhiên",
            "hanzi": "人与自然",
            "words": [
              {
                "text": "人与自然",
                "pinyin": "ren yu zi ran",
                "tone": "rén yǔ zì rán",
                "pos": "noun",
                "vi": "con người và thiên nhiên"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "ren yu zi ran",
            "tone": "rén yǔ zì rán"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về con người và thiên nhiên",
            "hanzi": "人与自然内容",
            "words": [
              {
                "text": "人与自然",
                "pinyin": "ren yu zi ran",
                "tone": "rén yǔ zì rán",
                "pos": "noun",
                "vi": "con người và thiên nhiên"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "ren yu zi ran nei rong",
            "tone": "rén yǔ zì rán nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về bảo vệ",
            "hanzi": "保护方法",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "bao hu fang fa",
            "tone": "bǎo hù fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về quan điểm",
            "hanzi": "观点重点",
            "words": [
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "guan dian zhong dian",
            "tone": "guān diǎn zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về con người và thiên nhiên",
            "hanzi": "人与自然问题",
            "words": [
              {
                "text": "人与自然",
                "pinyin": "ren yu zi ran",
                "tone": "rén yǔ zì rán",
                "pos": "noun",
                "vi": "con người và thiên nhiên"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "ren yu zi ran wen ti",
            "tone": "rén yǔ zì rán wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về bảo vệ",
            "hanzi": "保护重点",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "bao hu zhong dian",
            "tone": "bǎo hù zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Con người và thiên nhiên",
            "hanzi": "人与自然。",
            "words": [
              {
                "text": "人与自然",
                "pinyin": "ren yu zi ran",
                "tone": "rén yǔ zì rán",
                "pos": "noun",
                "vi": "con người và thiên nhiên"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "ren yu zi ran",
            "tone": "rén yǔ zì rán"
          },
          {
            "stage": "sentence",
            "vi": "bảo vệ là trọng điểm của bài này.",
            "hanzi": "保护是本课重点。",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "bao hu zhong dian",
            "tone": "bǎo hù zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: con người và thiên nhiên.",
            "hanzi": "人与自然是本课重点。",
            "words": [
              {
                "text": "人与自然",
                "pinyin": "ren yu zi ran",
                "tone": "rén yǔ zì rán",
                "pos": "noun",
                "vi": "con người và thiên nhiên"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l17",
            "pinyin": "ren yu zi ran zhong dian",
            "tone": "rén yǔ zì rán zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk4-l18",
        "no": 18,
        "titleZh": "科技与世界",
        "titleVi": "Khoa học công nghệ và thế giới",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "shi jie",
            "tone": "shì jiè"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "wen hua",
            "tone": "wén huà"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "ji xu",
            "tone": "jì xù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "ren zhen",
            "tone": "rèn zhēn"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về khoa học công nghệ",
            "hanzi": "科技内容",
            "words": [
              {
                "text": "科技",
                "pinyin": "ke ji",
                "tone": "kē jì",
                "pos": "noun",
                "vi": "khoa học công nghệ"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "ke ji nei rong",
            "tone": "kē jì nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về thế giới",
            "hanzi": "世界方法",
            "words": [
              {
                "text": "世界",
                "pinyin": "shi jie",
                "tone": "shì jiè",
                "pos": "noun",
                "vi": "thế giới"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "shi jie fang fa",
            "tone": "shì jiè fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về văn hóa",
            "hanzi": "文化重点",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "wen hua zhong dian",
            "tone": "wén huà zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về khoa học công nghệ",
            "hanzi": "科技问题",
            "words": [
              {
                "text": "科技",
                "pinyin": "ke ji",
                "tone": "kē jì",
                "pos": "noun",
                "vi": "khoa học công nghệ"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "ke ji wen ti",
            "tone": "kē jì wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về thế giới",
            "hanzi": "世界重点",
            "words": [
              {
                "text": "世界",
                "pinyin": "shi jie",
                "tone": "shì jiè",
                "pos": "noun",
                "vi": "thế giới"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "shi jie zhong dian",
            "tone": "shì jiè zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Khoa học công nghệ và thế giới",
            "hanzi": "科技与世界。",
            "words": [
              {
                "text": "科技",
                "pinyin": "ke ji",
                "tone": "kē jì",
                "pos": "noun",
                "vi": "khoa học công nghệ"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "ke ji",
            "tone": "kē jì"
          },
          {
            "stage": "sentence",
            "vi": "thế giới là trọng điểm của bài này.",
            "hanzi": "世界是本课重点。",
            "words": [
              {
                "text": "世界",
                "pinyin": "shi jie",
                "tone": "shì jiè",
                "pos": "noun",
                "vi": "thế giới"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "shi jie zhong dian",
            "tone": "shì jiè zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: khoa học công nghệ.",
            "hanzi": "科技是本课重点。",
            "words": [
              {
                "text": "科技",
                "pinyin": "ke ji",
                "tone": "kē jì",
                "pos": "noun",
                "vi": "khoa học công nghệ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l18",
            "pinyin": "ke ji zhong dian",
            "tone": "kē jì zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk4-l19",
        "no": 19,
        "titleZh": "生活的味道",
        "titleVi": "Hương vị cuộc sống",
        "items": [
          {
            "stage": "word",
            "vi": "hương vị cuộc sống",
            "hanzi": "生活的味道",
            "words": [
              {
                "text": "生活的味道",
                "pinyin": "sheng huo de wei dao",
                "tone": "shēng huó de wèi dào",
                "pos": "noun",
                "vi": "hương vị cuộc sống"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "sheng huo de wei dao",
            "tone": "shēng huó de wèi dào"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "fang shi",
            "tone": "fāng shì"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về hương vị cuộc sống",
            "hanzi": "生活的味道内容",
            "words": [
              {
                "text": "生活的味道",
                "pinyin": "sheng huo de wei dao",
                "tone": "shēng huó de wèi dào",
                "pos": "noun",
                "vi": "hương vị cuộc sống"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "sheng huo de wei dao nei rong",
            "tone": "shēng huó de wèi dào nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về cuộc sống",
            "hanzi": "生活方法",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "sheng huo fang fa",
            "tone": "shēng huó fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về quan điểm",
            "hanzi": "观点重点",
            "words": [
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "guan dian zhong dian",
            "tone": "guān diǎn zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về hương vị cuộc sống",
            "hanzi": "生活的味道问题",
            "words": [
              {
                "text": "生活的味道",
                "pinyin": "sheng huo de wei dao",
                "tone": "shēng huó de wèi dào",
                "pos": "noun",
                "vi": "hương vị cuộc sống"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "sheng huo de wei dao wen ti",
            "tone": "shēng huó de wèi dào wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cuộc sống",
            "hanzi": "生活重点",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "sheng huo zhong dian",
            "tone": "shēng huó zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Hương vị cuộc sống",
            "hanzi": "生活的味道。",
            "words": [
              {
                "text": "生活的味道",
                "pinyin": "sheng huo de wei dao",
                "tone": "shēng huó de wèi dào",
                "pos": "noun",
                "vi": "hương vị cuộc sống"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "sheng huo de wei dao",
            "tone": "shēng huó de wèi dào"
          },
          {
            "stage": "sentence",
            "vi": "cuộc sống là trọng điểm của bài này.",
            "hanzi": "生活是本课重点。",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "sheng huo zhong dian",
            "tone": "shēng huó zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: hương vị cuộc sống.",
            "hanzi": "生活的味道是本课重点。",
            "words": [
              {
                "text": "生活的味道",
                "pinyin": "sheng huo de wei dao",
                "tone": "shēng huó de wèi dào",
                "pos": "noun",
                "vi": "hương vị cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l19",
            "pinyin": "sheng huo de wei dao zhong dian",
            "tone": "shēng huó de wèi dào zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk4-l20",
        "no": 20,
        "titleZh": "路上的风景",
        "titleVi": "Phong cảnh trên đường",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "feng jing",
            "tone": "fēng jǐng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "shi jie",
            "tone": "shì jiè"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "ji xu",
            "tone": "jì xù"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về trên đường",
            "hanzi": "路上内容",
            "words": [
              {
                "text": "路上",
                "pinyin": "lu shang",
                "tone": "lù shang",
                "pos": "noun",
                "vi": "trên đường"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "lu shang nei rong",
            "tone": "lù shang nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về phong cảnh",
            "hanzi": "风景方法",
            "words": [
              {
                "text": "风景",
                "pinyin": "feng jing",
                "tone": "fēng jǐng",
                "pos": "noun",
                "vi": "phong cảnh"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "feng jing fang fa",
            "tone": "fēng jǐng fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về thế giới",
            "hanzi": "世界重点",
            "words": [
              {
                "text": "世界",
                "pinyin": "shi jie",
                "tone": "shì jiè",
                "pos": "noun",
                "vi": "thế giới"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "shi jie zhong dian",
            "tone": "shì jiè zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về trên đường",
            "hanzi": "路上问题",
            "words": [
              {
                "text": "路上",
                "pinyin": "lu shang",
                "tone": "lù shang",
                "pos": "noun",
                "vi": "trên đường"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "lu shang wen ti",
            "tone": "lù shang wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về phong cảnh",
            "hanzi": "风景重点",
            "words": [
              {
                "text": "风景",
                "pinyin": "feng jing",
                "tone": "fēng jǐng",
                "pos": "noun",
                "vi": "phong cảnh"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "feng jing zhong dian",
            "tone": "fēng jǐng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Phong cảnh trên đường",
            "hanzi": "路上的风景。",
            "words": [
              {
                "text": "路上",
                "pinyin": "lu shang",
                "tone": "lù shang",
                "pos": "noun",
                "vi": "trên đường"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "lu shang",
            "tone": "lù shang"
          },
          {
            "stage": "sentence",
            "vi": "phong cảnh là trọng điểm của bài này.",
            "hanzi": "风景是本课重点。",
            "words": [
              {
                "text": "风景",
                "pinyin": "feng jing",
                "tone": "fēng jǐng",
                "pos": "noun",
                "vi": "phong cảnh"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "feng jing zhong dian",
            "tone": "fēng jǐng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: trên đường.",
            "hanzi": "路上是本课重点。",
            "words": [
              {
                "text": "路上",
                "pinyin": "lu shang",
                "tone": "lù shang",
                "pos": "noun",
                "vi": "trên đường"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk4-l20",
            "pinyin": "lu shang zhong dian",
            "tone": "lù shang zhòng diǎn"
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
        "items": [
          {
            "stage": "word",
            "vi": "cưa bỏ",
            "hanzi": "锯掉",
            "words": [
              {
                "text": "锯掉",
                "pinyin": "ju diao",
                "tone": "jù diào",
                "pos": "verb",
                "vi": "cưa bỏ"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "ju diao",
            "tone": "jù diào"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
          },
          {
            "stage": "word",
            "vi": "đáy giỏ",
            "hanzi": "筐底",
            "words": [
              {
                "text": "筐底",
                "pinyin": "kuang di",
                "tone": "kuāng dǐ",
                "pos": "noun",
                "vi": "đáy giỏ"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "kuang di",
            "tone": "kuāng dǐ"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "nei rong",
            "tone": "nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về cưa bỏ",
            "hanzi": "锯掉内容",
            "words": [
              {
                "text": "锯掉",
                "pinyin": "ju diao",
                "tone": "jù diào",
                "pos": "verb",
                "vi": "cưa bỏ"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "ju diao nei rong",
            "tone": "jù diào nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về cuộc sống",
            "hanzi": "生活方法",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "sheng huo fang fa",
            "tone": "shēng huó fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về đáy giỏ",
            "hanzi": "筐底重点",
            "words": [
              {
                "text": "筐底",
                "pinyin": "kuang di",
                "tone": "kuāng dǐ",
                "pos": "noun",
                "vi": "đáy giỏ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "kuang di zhong dian",
            "tone": "kuāng dǐ zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về cưa bỏ",
            "hanzi": "锯掉问题",
            "words": [
              {
                "text": "锯掉",
                "pinyin": "ju diao",
                "tone": "jù diào",
                "pos": "verb",
                "vi": "cưa bỏ"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "ju diao wen ti",
            "tone": "jù diào wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cuộc sống",
            "hanzi": "生活重点",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "sheng huo zhong dian",
            "tone": "shēng huó zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Cưa bỏ đáy chiếc giỏ của cuộc sống",
            "hanzi": "锯掉生活的筐底。",
            "words": [
              {
                "text": "锯掉",
                "pinyin": "ju diao",
                "tone": "jù diào",
                "pos": "verb",
                "vi": "cưa bỏ"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "ju diao",
            "tone": "jù diào"
          },
          {
            "stage": "sentence",
            "vi": "cuộc sống là trọng điểm của bài này.",
            "hanzi": "生活是本课重点。",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "sheng huo zhong dian",
            "tone": "shēng huó zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: cưa bỏ.",
            "hanzi": "锯掉是本课重点。",
            "words": [
              {
                "text": "锯掉",
                "pinyin": "ju diao",
                "tone": "jù diào",
                "pos": "verb",
                "vi": "cưa bỏ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l13",
            "pinyin": "ju diao zhong dian",
            "tone": "jù diào zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l14",
        "no": 14,
        "titleZh": "北京的四合院",
        "titleVi": "Tứ hợp viện ở Bắc Kinh",
        "items": [
          {
            "stage": "word",
            "vi": "Bắc Kinh",
            "hanzi": "北京",
            "words": [
              {
                "text": "北京",
                "pinyin": "bei jing",
                "tone": "běi jīng",
                "pos": "noun",
                "vi": "Bắc Kinh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "bei jing",
            "tone": "běi jīng"
          },
          {
            "stage": "word",
            "vi": "tứ hợp viện",
            "hanzi": "四合院",
            "words": [
              {
                "text": "四合院",
                "pinyin": "si he yuan",
                "tone": "sì hé yuàn",
                "pos": "noun",
                "vi": "tứ hợp viện"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "si he yuan",
            "tone": "sì hé yuàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về tứ hợp viện",
            "hanzi": "四合院内容",
            "words": [
              {
                "text": "四合院",
                "pinyin": "si he yuan",
                "tone": "sì hé yuàn",
                "pos": "noun",
                "vi": "tứ hợp viện"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "si he yuan nei rong",
            "tone": "sì hé yuàn nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về văn hóa",
            "hanzi": "文化方法",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "wen hua fang fa",
            "tone": "wén huà fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về điều tra",
            "hanzi": "调查重点",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "diao cha zhong dian",
            "tone": "diào chá zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về tứ hợp viện",
            "hanzi": "四合院问题",
            "words": [
              {
                "text": "四合院",
                "pinyin": "si he yuan",
                "tone": "sì hé yuàn",
                "pos": "noun",
                "vi": "tứ hợp viện"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "si he yuan wen ti",
            "tone": "sì hé yuàn wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về văn hóa",
            "hanzi": "文化重点",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "wen hua zhong dian",
            "tone": "wén huà zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Tứ hợp viện ở Bắc Kinh",
            "hanzi": "北京的四合院。",
            "words": [
              {
                "text": "四合院",
                "pinyin": "si he yuan",
                "tone": "sì hé yuàn",
                "pos": "noun",
                "vi": "tứ hợp viện"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "si he yuan",
            "tone": "sì hé yuàn"
          },
          {
            "stage": "sentence",
            "vi": "văn hóa là trọng điểm của bài này.",
            "hanzi": "文化是本课重点。",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "wen hua zhong dian",
            "tone": "wén huà zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: tứ hợp viện.",
            "hanzi": "四合院是本课重点。",
            "words": [
              {
                "text": "四合院",
                "pinyin": "si he yuan",
                "tone": "sì hé yuàn",
                "pos": "noun",
                "vi": "tứ hợp viện"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l14",
            "pinyin": "si he yuan zhong dian",
            "tone": "sì hé yuàn zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l15",
        "no": 15,
        "titleZh": "纸上谈兵",
        "titleVi": "Bàn binh trên giấy",
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
                "pos": "verb",
                "vi": "bàn binh trên giấy"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "zhi shang tan bing",
            "tone": "zhǐ shàng tán bīng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "wen hua",
            "tone": "wén huà"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về bàn binh trên giấy",
            "hanzi": "纸上谈兵内容",
            "words": [
              {
                "text": "纸上谈兵",
                "pinyin": "zhi shang tan bing",
                "tone": "zhǐ shàng tán bīng",
                "pos": "verb",
                "vi": "bàn binh trên giấy"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "zhi shang tan bing nei rong",
            "tone": "zhǐ shàng tán bīng nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về phán đoán",
            "hanzi": "判断方法",
            "words": [
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "pan duan fang fa",
            "tone": "pàn duàn fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cách thức",
            "hanzi": "方式重点",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "fang shi zhong dian",
            "tone": "fāng shì zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về bàn binh trên giấy",
            "hanzi": "纸上谈兵问题",
            "words": [
              {
                "text": "纸上谈兵",
                "pinyin": "zhi shang tan bing",
                "tone": "zhǐ shàng tán bīng",
                "pos": "verb",
                "vi": "bàn binh trên giấy"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "zhi shang tan bing wen ti",
            "tone": "zhǐ shàng tán bīng wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về phán đoán",
            "hanzi": "判断重点",
            "words": [
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "pan duan zhong dian",
            "tone": "pàn duàn zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Bàn binh trên giấy",
            "hanzi": "纸上谈兵。",
            "words": [
              {
                "text": "纸上谈兵",
                "pinyin": "zhi shang tan bing",
                "tone": "zhǐ shàng tán bīng",
                "pos": "verb",
                "vi": "bàn binh trên giấy"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "zhi shang tan bing",
            "tone": "zhǐ shàng tán bīng"
          },
          {
            "stage": "sentence",
            "vi": "phán đoán là trọng điểm của bài này.",
            "hanzi": "判断是本课重点。",
            "words": [
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "pan duan zhong dian",
            "tone": "pàn duàn zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: bàn binh trên giấy.",
            "hanzi": "纸上谈兵是本课重点。",
            "words": [
              {
                "text": "纸上谈兵",
                "pinyin": "zhi shang tan bing",
                "tone": "zhǐ shàng tán bīng",
                "pos": "verb",
                "vi": "bàn binh trên giấy"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l15",
            "pinyin": "zhi shang tan bing zhong dian",
            "tone": "zhǐ shàng tán bīng zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l16",
        "no": 16,
        "titleZh": "体重与节食",
        "titleVi": "Cân nặng và việc ăn kiêng",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "jie shi",
            "tone": "jié shí"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về cân nặng",
            "hanzi": "体重内容",
            "words": [
              {
                "text": "体重",
                "pinyin": "ti zhong",
                "tone": "tǐ zhòng",
                "pos": "noun",
                "vi": "cân nặng"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "ti zhong nei rong",
            "tone": "tǐ zhòng nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về ăn kiêng",
            "hanzi": "节食方法",
            "words": [
              {
                "text": "节食",
                "pinyin": "jie shi",
                "tone": "jié shí",
                "pos": "verb",
                "vi": "ăn kiêng"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "jie shi fang fa",
            "tone": "jié shí fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cuộc sống",
            "hanzi": "生活重点",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "sheng huo zhong dian",
            "tone": "shēng huó zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về cân nặng",
            "hanzi": "体重问题",
            "words": [
              {
                "text": "体重",
                "pinyin": "ti zhong",
                "tone": "tǐ zhòng",
                "pos": "noun",
                "vi": "cân nặng"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "ti zhong wen ti",
            "tone": "tǐ zhòng wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về ăn kiêng",
            "hanzi": "节食重点",
            "words": [
              {
                "text": "节食",
                "pinyin": "jie shi",
                "tone": "jié shí",
                "pos": "verb",
                "vi": "ăn kiêng"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "jie shi zhong dian",
            "tone": "jié shí zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Cân nặng và việc ăn kiêng",
            "hanzi": "体重与节食。",
            "words": [
              {
                "text": "体重",
                "pinyin": "ti zhong",
                "tone": "tǐ zhòng",
                "pos": "noun",
                "vi": "cân nặng"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "ti zhong",
            "tone": "tǐ zhòng"
          },
          {
            "stage": "sentence",
            "vi": "ăn kiêng là trọng điểm của bài này.",
            "hanzi": "节食是本课重点。",
            "words": [
              {
                "text": "节食",
                "pinyin": "jie shi",
                "tone": "jié shí",
                "pos": "verb",
                "vi": "ăn kiêng"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "jie shi zhong dian",
            "tone": "jié shí zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: cân nặng.",
            "hanzi": "体重是本课重点。",
            "words": [
              {
                "text": "体重",
                "pinyin": "ti zhong",
                "tone": "tǐ zhòng",
                "pos": "noun",
                "vi": "cân nặng"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l16",
            "pinyin": "ti zhong zhong dian",
            "tone": "tǐ zhòng zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l17",
        "no": 17,
        "titleZh": "在最美好的时刻离开",
        "titleVi": "Rời đi vào khoảnh khắc đẹp nhất",
        "items": [
          {
            "stage": "word",
            "vi": "khoảnh khắc đẹp nhất",
            "hanzi": "美好的时刻",
            "words": [
              {
                "text": "美好的时刻",
                "pinyin": "mei hao de shi ke",
                "tone": "měi hǎo de shí kè",
                "pos": "noun",
                "vi": "khoảnh khắc đẹp nhất"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "mei hao de shi ke",
            "tone": "měi hǎo de shí kè"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "li kai",
            "tone": "lí kāi"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về khoảnh khắc đẹp nhất",
            "hanzi": "美好的时刻内容",
            "words": [
              {
                "text": "美好的时刻",
                "pinyin": "mei hao de shi ke",
                "tone": "měi hǎo de shí kè",
                "pos": "noun",
                "vi": "khoảnh khắc đẹp nhất"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "mei hao de shi ke nei rong",
            "tone": "měi hǎo de shí kè nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về rời đi",
            "hanzi": "离开方法",
            "words": [
              {
                "text": "离开",
                "pinyin": "li kai",
                "tone": "lí kāi",
                "pos": "verb",
                "vi": "rời đi"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "li kai fang fa",
            "tone": "lí kāi fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cuộc sống",
            "hanzi": "生活重点",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "sheng huo zhong dian",
            "tone": "shēng huó zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về khoảnh khắc đẹp nhất",
            "hanzi": "美好的时刻问题",
            "words": [
              {
                "text": "美好的时刻",
                "pinyin": "mei hao de shi ke",
                "tone": "měi hǎo de shí kè",
                "pos": "noun",
                "vi": "khoảnh khắc đẹp nhất"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "mei hao de shi ke wen ti",
            "tone": "měi hǎo de shí kè wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về rời đi",
            "hanzi": "离开重点",
            "words": [
              {
                "text": "离开",
                "pinyin": "li kai",
                "tone": "lí kāi",
                "pos": "verb",
                "vi": "rời đi"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "li kai zhong dian",
            "tone": "lí kāi zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Rời đi vào khoảnh khắc đẹp nhất",
            "hanzi": "在最美好的时刻离开。",
            "words": [
              {
                "text": "美好的时刻",
                "pinyin": "mei hao de shi ke",
                "tone": "měi hǎo de shí kè",
                "pos": "noun",
                "vi": "khoảnh khắc đẹp nhất"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "mei hao de shi ke",
            "tone": "měi hǎo de shí kè"
          },
          {
            "stage": "sentence",
            "vi": "rời đi là trọng điểm của bài này.",
            "hanzi": "离开是本课重点。",
            "words": [
              {
                "text": "离开",
                "pinyin": "li kai",
                "tone": "lí kāi",
                "pos": "verb",
                "vi": "rời đi"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "li kai zhong dian",
            "tone": "lí kāi zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: khoảnh khắc đẹp nhất.",
            "hanzi": "美好的时刻是本课重点。",
            "words": [
              {
                "text": "美好的时刻",
                "pinyin": "mei hao de shi ke",
                "tone": "měi hǎo de shí kè",
                "pos": "noun",
                "vi": "khoảnh khắc đẹp nhất"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l17",
            "pinyin": "mei hao de shi ke zhong dian",
            "tone": "měi hǎo de shí kè zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l18",
        "no": 18,
        "titleZh": "抽象艺术美不美",
        "titleVi": "Nghệ thuật trừu tượng có đẹp không",
        "items": [
          {
            "stage": "word",
            "vi": "nghệ thuật trừu tượng",
            "hanzi": "抽象艺术",
            "words": [
              {
                "text": "抽象艺术",
                "pinyin": "chou xiang yi shu",
                "tone": "chōu xiàng yì shù",
                "pos": "noun",
                "vi": "nghệ thuật trừu tượng"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "chou xiang yi shu",
            "tone": "chōu xiàng yì shù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "yi shu",
            "tone": "yì shù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về nghệ thuật trừu tượng",
            "hanzi": "抽象艺术内容",
            "words": [
              {
                "text": "抽象艺术",
                "pinyin": "chou xiang yi shu",
                "tone": "chōu xiàng yì shù",
                "pos": "noun",
                "vi": "nghệ thuật trừu tượng"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "chou xiang yi shu nei rong",
            "tone": "chōu xiàng yì shù nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về nghệ thuật",
            "hanzi": "艺术方法",
            "words": [
              {
                "text": "艺术",
                "pinyin": "yi shu",
                "tone": "yì shù",
                "pos": "noun",
                "vi": "nghệ thuật"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "yi shu fang fa",
            "tone": "yì shù fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về quan điểm",
            "hanzi": "观点重点",
            "words": [
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "guan dian zhong dian",
            "tone": "guān diǎn zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về nghệ thuật trừu tượng",
            "hanzi": "抽象艺术问题",
            "words": [
              {
                "text": "抽象艺术",
                "pinyin": "chou xiang yi shu",
                "tone": "chōu xiàng yì shù",
                "pos": "noun",
                "vi": "nghệ thuật trừu tượng"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "chou xiang yi shu wen ti",
            "tone": "chōu xiàng yì shù wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về nghệ thuật",
            "hanzi": "艺术重点",
            "words": [
              {
                "text": "艺术",
                "pinyin": "yi shu",
                "tone": "yì shù",
                "pos": "noun",
                "vi": "nghệ thuật"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "yi shu zhong dian",
            "tone": "yì shù zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Nghệ thuật trừu tượng có đẹp không",
            "hanzi": "抽象艺术美不美。",
            "words": [
              {
                "text": "抽象艺术",
                "pinyin": "chou xiang yi shu",
                "tone": "chōu xiàng yì shù",
                "pos": "noun",
                "vi": "nghệ thuật trừu tượng"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "chou xiang yi shu",
            "tone": "chōu xiàng yì shù"
          },
          {
            "stage": "sentence",
            "vi": "nghệ thuật là trọng điểm của bài này.",
            "hanzi": "艺术是本课重点。",
            "words": [
              {
                "text": "艺术",
                "pinyin": "yi shu",
                "tone": "yì shù",
                "pos": "noun",
                "vi": "nghệ thuật"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "yi shu zhong dian",
            "tone": "yì shù zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: nghệ thuật trừu tượng.",
            "hanzi": "抽象艺术是本课重点。",
            "words": [
              {
                "text": "抽象艺术",
                "pinyin": "chou xiang yi shu",
                "tone": "chōu xiàng yì shù",
                "pos": "noun",
                "vi": "nghệ thuật trừu tượng"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l18",
            "pinyin": "chou xiang yi shu zhong dian",
            "tone": "chōu xiàng yì shù zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l19",
        "no": 19,
        "titleZh": "家乡的萝卜饼",
        "titleVi": "Bánh củ cải quê hương",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "jia xiang",
            "tone": "jiā xiāng"
          },
          {
            "stage": "word",
            "vi": "bánh củ cải",
            "hanzi": "萝卜饼",
            "words": [
              {
                "text": "萝卜饼",
                "pinyin": "luo bo bing",
                "tone": "luó bo bǐng",
                "pos": "noun",
                "vi": "bánh củ cải"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "luo bo bing",
            "tone": "luó bo bǐng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "diao cha",
            "tone": "diào chá"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về quê hương",
            "hanzi": "家乡内容",
            "words": [
              {
                "text": "家乡",
                "pinyin": "jia xiang",
                "tone": "jiā xiāng",
                "pos": "noun",
                "vi": "quê hương"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "jia xiang nei rong",
            "tone": "jiā xiāng nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về bánh củ cải",
            "hanzi": "萝卜饼方法",
            "words": [
              {
                "text": "萝卜饼",
                "pinyin": "luo bo bing",
                "tone": "luó bo bǐng",
                "pos": "noun",
                "vi": "bánh củ cải"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "luo bo bing fang fa",
            "tone": "luó bo bǐng fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về truyền thống",
            "hanzi": "传统重点",
            "words": [
              {
                "text": "传统",
                "pinyin": "chuan tong",
                "tone": "chuán tǒng",
                "pos": "noun",
                "vi": "truyền thống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "chuan tong zhong dian",
            "tone": "chuán tǒng zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về quê hương",
            "hanzi": "家乡问题",
            "words": [
              {
                "text": "家乡",
                "pinyin": "jia xiang",
                "tone": "jiā xiāng",
                "pos": "noun",
                "vi": "quê hương"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "jia xiang wen ti",
            "tone": "jiā xiāng wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về bánh củ cải",
            "hanzi": "萝卜饼重点",
            "words": [
              {
                "text": "萝卜饼",
                "pinyin": "luo bo bing",
                "tone": "luó bo bǐng",
                "pos": "noun",
                "vi": "bánh củ cải"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "luo bo bing zhong dian",
            "tone": "luó bo bǐng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Bánh củ cải quê hương",
            "hanzi": "家乡的萝卜饼。",
            "words": [
              {
                "text": "家乡",
                "pinyin": "jia xiang",
                "tone": "jiā xiāng",
                "pos": "noun",
                "vi": "quê hương"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "jia xiang",
            "tone": "jiā xiāng"
          },
          {
            "stage": "sentence",
            "vi": "bánh củ cải là trọng điểm của bài này.",
            "hanzi": "萝卜饼是本课重点。",
            "words": [
              {
                "text": "萝卜饼",
                "pinyin": "luo bo bing",
                "tone": "luó bo bǐng",
                "pos": "noun",
                "vi": "bánh củ cải"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "luo bo bing zhong dian",
            "tone": "luó bo bǐng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: quê hương.",
            "hanzi": "家乡是本课重点。",
            "words": [
              {
                "text": "家乡",
                "pinyin": "jia xiang",
                "tone": "jiā xiāng",
                "pos": "noun",
                "vi": "quê hương"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l19",
            "pinyin": "jia xiang zhong dian",
            "tone": "jiā xiāng zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l20",
        "no": 20,
        "titleZh": "小人书摊",
        "titleVi": "Sạp truyện tranh cũ",
        "items": [
          {
            "stage": "word",
            "vi": "sạp truyện tranh cũ",
            "hanzi": "小人书摊",
            "words": [
              {
                "text": "小人书摊",
                "pinyin": "xiao ren shu tan",
                "tone": "xiǎo rén shū tān",
                "pos": "noun",
                "vi": "sạp truyện tranh cũ"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "xiao ren shu tan",
            "tone": "xiǎo rén shū tān"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "fang shi",
            "tone": "fāng shì"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về sạp truyện tranh cũ",
            "hanzi": "小人书摊内容",
            "words": [
              {
                "text": "小人书摊",
                "pinyin": "xiao ren shu tan",
                "tone": "xiǎo rén shū tān",
                "pos": "noun",
                "vi": "sạp truyện tranh cũ"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "xiao ren shu tan nei rong",
            "tone": "xiǎo rén shū tān nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về văn hóa",
            "hanzi": "文化方法",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "wen hua fang fa",
            "tone": "wén huà fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cuộc sống",
            "hanzi": "生活重点",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "sheng huo zhong dian",
            "tone": "shēng huó zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về sạp truyện tranh cũ",
            "hanzi": "小人书摊问题",
            "words": [
              {
                "text": "小人书摊",
                "pinyin": "xiao ren shu tan",
                "tone": "xiǎo rén shū tān",
                "pos": "noun",
                "vi": "sạp truyện tranh cũ"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "xiao ren shu tan wen ti",
            "tone": "xiǎo rén shū tān wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về văn hóa",
            "hanzi": "文化重点",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "wen hua zhong dian",
            "tone": "wén huà zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Sạp truyện tranh cũ",
            "hanzi": "小人书摊。",
            "words": [
              {
                "text": "小人书摊",
                "pinyin": "xiao ren shu tan",
                "tone": "xiǎo rén shū tān",
                "pos": "noun",
                "vi": "sạp truyện tranh cũ"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "xiao ren shu tan",
            "tone": "xiǎo rén shū tān"
          },
          {
            "stage": "sentence",
            "vi": "văn hóa là trọng điểm của bài này.",
            "hanzi": "文化是本课重点。",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "wen hua zhong dian",
            "tone": "wén huà zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: sạp truyện tranh cũ.",
            "hanzi": "小人书摊是本课重点。",
            "words": [
              {
                "text": "小人书摊",
                "pinyin": "xiao ren shu tan",
                "tone": "xiǎo rén shū tān",
                "pos": "noun",
                "vi": "sạp truyện tranh cũ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l20",
            "pinyin": "xiao ren shu tan zhong dian",
            "tone": "xiǎo rén shū tān zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l21",
        "no": 21,
        "titleZh": "汉字叔叔：一个美国人的汉字情缘",
        "titleVi": "Chú Hán tự: duyên với chữ Hán của một người Mỹ",
        "items": [
          {
            "stage": "word",
            "vi": "Chú Hán tự",
            "hanzi": "汉字叔叔",
            "words": [
              {
                "text": "汉字叔叔",
                "pinyin": "han zi shu shu",
                "tone": "hàn zì shū shu",
                "pos": "noun",
                "vi": "Chú Hán tự"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "han zi shu shu",
            "tone": "hàn zì shū shu"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "zhong guo ren",
            "tone": "zhōng guó rén"
          },
          {
            "stage": "word",
            "vi": "duyên tình, duyên gắn bó",
            "hanzi": "情缘",
            "words": [
              {
                "text": "情缘",
                "pinyin": "qing yuan",
                "tone": "qíng yuán",
                "pos": "noun",
                "vi": "duyên tình, duyên gắn bó"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "qing yuan",
            "tone": "qíng yuán"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về Chú Hán tự",
            "hanzi": "汉字叔叔内容",
            "words": [
              {
                "text": "汉字叔叔",
                "pinyin": "han zi shu shu",
                "tone": "hàn zì shū shu",
                "pos": "noun",
                "vi": "Chú Hán tự"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "han zi shu shu nei rong",
            "tone": "hàn zì shū shu nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về người Trung Quốc",
            "hanzi": "中国人方法",
            "words": [
              {
                "text": "中国人",
                "pinyin": "zhong guo ren",
                "tone": "zhōng guó rén",
                "pos": "noun",
                "vi": "người Trung Quốc"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "zhong guo ren fang fa",
            "tone": "zhōng guó rén fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về duyên tình, duyên gắn bó",
            "hanzi": "情缘重点",
            "words": [
              {
                "text": "情缘",
                "pinyin": "qing yuan",
                "tone": "qíng yuán",
                "pos": "noun",
                "vi": "duyên tình, duyên gắn bó"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "qing yuan zhong dian",
            "tone": "qíng yuán zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về Chú Hán tự",
            "hanzi": "汉字叔叔问题",
            "words": [
              {
                "text": "汉字叔叔",
                "pinyin": "han zi shu shu",
                "tone": "hàn zì shū shu",
                "pos": "noun",
                "vi": "Chú Hán tự"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "han zi shu shu wen ti",
            "tone": "hàn zì shū shu wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về người Trung Quốc",
            "hanzi": "中国人重点",
            "words": [
              {
                "text": "中国人",
                "pinyin": "zhong guo ren",
                "tone": "zhōng guó rén",
                "pos": "noun",
                "vi": "người Trung Quốc"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "zhong guo ren zhong dian",
            "tone": "zhōng guó rén zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Chú Hán tự: duyên với chữ Hán của một người Mỹ",
            "hanzi": "汉字叔叔：一个美国人的汉字情缘。",
            "words": [
              {
                "text": "汉字叔叔",
                "pinyin": "han zi shu shu",
                "tone": "hàn zì shū shu",
                "pos": "noun",
                "vi": "Chú Hán tự"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "han zi shu shu",
            "tone": "hàn zì shū shu"
          },
          {
            "stage": "sentence",
            "vi": "người Trung Quốc là trọng điểm của bài này.",
            "hanzi": "中国人是本课重点。",
            "words": [
              {
                "text": "中国人",
                "pinyin": "zhong guo ren",
                "tone": "zhōng guó rén",
                "pos": "noun",
                "vi": "người Trung Quốc"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "zhong guo ren zhong dian",
            "tone": "zhōng guó rén zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: Chú Hán tự.",
            "hanzi": "汉字叔叔是本课重点。",
            "words": [
              {
                "text": "汉字叔叔",
                "pinyin": "han zi shu shu",
                "tone": "hàn zì shū shu",
                "pos": "noun",
                "vi": "Chú Hán tự"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l21",
            "pinyin": "han zi shu shu zhong dian",
            "tone": "hàn zì shū shu zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l22",
        "no": 22,
        "titleZh": "阅读与思考",
        "titleVi": "Đọc và suy nghĩ",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "nei rong",
            "tone": "nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về đọc",
            "hanzi": "阅读内容",
            "words": [
              {
                "text": "阅读",
                "pinyin": "yue du",
                "tone": "yuè dú",
                "pos": "verb",
                "vi": "đọc"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "yue du nei rong",
            "tone": "yuè dú nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về suy nghĩ",
            "hanzi": "思考方法",
            "words": [
              {
                "text": "思考",
                "pinyin": "si kao",
                "tone": "sī kǎo",
                "pos": "verb",
                "vi": "suy nghĩ"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "si kao fang fa",
            "tone": "sī kǎo fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về quan điểm",
            "hanzi": "观点重点",
            "words": [
              {
                "text": "观点",
                "pinyin": "guan dian",
                "tone": "guān diǎn",
                "pos": "noun",
                "vi": "quan điểm"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "guan dian zhong dian",
            "tone": "guān diǎn zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về đọc",
            "hanzi": "阅读问题",
            "words": [
              {
                "text": "阅读",
                "pinyin": "yue du",
                "tone": "yuè dú",
                "pos": "verb",
                "vi": "đọc"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "yue du wen ti",
            "tone": "yuè dú wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về suy nghĩ",
            "hanzi": "思考重点",
            "words": [
              {
                "text": "思考",
                "pinyin": "si kao",
                "tone": "sī kǎo",
                "pos": "verb",
                "vi": "suy nghĩ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "si kao zhong dian",
            "tone": "sī kǎo zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Đọc và suy nghĩ",
            "hanzi": "阅读与思考。",
            "words": [
              {
                "text": "阅读",
                "pinyin": "yue du",
                "tone": "yuè dú",
                "pos": "verb",
                "vi": "đọc"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "yue du",
            "tone": "yuè dú"
          },
          {
            "stage": "sentence",
            "vi": "suy nghĩ là trọng điểm của bài này.",
            "hanzi": "思考是本课重点。",
            "words": [
              {
                "text": "思考",
                "pinyin": "si kao",
                "tone": "sī kǎo",
                "pos": "verb",
                "vi": "suy nghĩ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "si kao zhong dian",
            "tone": "sī kǎo zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: đọc.",
            "hanzi": "阅读是本课重点。",
            "words": [
              {
                "text": "阅读",
                "pinyin": "yue du",
                "tone": "yuè dú",
                "pos": "verb",
                "vi": "đọc"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l22",
            "pinyin": "yue du zhong dian",
            "tone": "yuè dú zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l23",
        "no": 23,
        "titleZh": "放手",
        "titleVi": "Buông tay",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "fang shou",
            "tone": "fàng shǒu"
          },
          {
            "stage": "word",
            "vi": "tình yêu",
            "hanzi": "爱情",
            "words": [
              {
                "text": "爱情",
                "pinyin": "ai qing",
                "tone": "ài qíng",
                "pos": "noun",
                "vi": "tình yêu"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "ai qing",
            "tone": "ài qíng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "fang shi",
            "tone": "fāng shì"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về buông tay",
            "hanzi": "放手内容",
            "words": [
              {
                "text": "放手",
                "pinyin": "fang shou",
                "tone": "fàng shǒu",
                "pos": "verb",
                "vi": "buông tay"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "fang shou nei rong",
            "tone": "fàng shǒu nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về tình yêu",
            "hanzi": "爱情方法",
            "words": [
              {
                "text": "爱情",
                "pinyin": "ai qing",
                "tone": "ài qíng",
                "pos": "noun",
                "vi": "tình yêu"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "ai qing fang fa",
            "tone": "ài qíng fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cuộc sống",
            "hanzi": "生活重点",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "sheng huo zhong dian",
            "tone": "shēng huó zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về buông tay",
            "hanzi": "放手问题",
            "words": [
              {
                "text": "放手",
                "pinyin": "fang shou",
                "tone": "fàng shǒu",
                "pos": "verb",
                "vi": "buông tay"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "fang shou wen ti",
            "tone": "fàng shǒu wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về tình yêu",
            "hanzi": "爱情重点",
            "words": [
              {
                "text": "爱情",
                "pinyin": "ai qing",
                "tone": "ài qíng",
                "pos": "noun",
                "vi": "tình yêu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "ai qing zhong dian",
            "tone": "ài qíng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Buông tay",
            "hanzi": "放手。",
            "words": [
              {
                "text": "放手",
                "pinyin": "fang shou",
                "tone": "fàng shǒu",
                "pos": "verb",
                "vi": "buông tay"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "fang shou",
            "tone": "fàng shǒu"
          },
          {
            "stage": "sentence",
            "vi": "tình yêu là trọng điểm của bài này.",
            "hanzi": "爱情是本课重点。",
            "words": [
              {
                "text": "爱情",
                "pinyin": "ai qing",
                "tone": "ài qíng",
                "pos": "noun",
                "vi": "tình yêu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "ai qing zhong dian",
            "tone": "ài qíng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: buông tay.",
            "hanzi": "放手是本课重点。",
            "words": [
              {
                "text": "放手",
                "pinyin": "fang shou",
                "tone": "fàng shǒu",
                "pos": "verb",
                "vi": "buông tay"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l23",
            "pinyin": "fang shou zhong dian",
            "tone": "fàng shǒu zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l24",
        "no": 24,
        "titleZh": "支教行动",
        "titleVi": "Hoạt động đi dạy tình nguyện",
        "items": [
          {
            "stage": "word",
            "vi": "đi dạy tình nguyện",
            "hanzi": "支教",
            "words": [
              {
                "text": "支教",
                "pinyin": "zhi jiao",
                "tone": "zhī jiào",
                "pos": "verb",
                "vi": "đi dạy tình nguyện"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "xing dong",
            "tone": "xíng dòng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "wen hua",
            "tone": "wén huà"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về đi dạy tình nguyện",
            "hanzi": "支教内容",
            "words": [
              {
                "text": "支教",
                "pinyin": "zhi jiao",
                "tone": "zhī jiào",
                "pos": "verb",
                "vi": "đi dạy tình nguyện"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "zhi jiao nei rong",
            "tone": "zhī jiào nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về hành động",
            "hanzi": "行动方法",
            "words": [
              {
                "text": "行动",
                "pinyin": "xing dong",
                "tone": "xíng dòng",
                "pos": "noun",
                "vi": "hành động"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "xing dong fang fa",
            "tone": "xíng dòng fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về văn hóa",
            "hanzi": "文化重点",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "wen hua zhong dian",
            "tone": "wén huà zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về đi dạy tình nguyện",
            "hanzi": "支教问题",
            "words": [
              {
                "text": "支教",
                "pinyin": "zhi jiao",
                "tone": "zhī jiào",
                "pos": "verb",
                "vi": "đi dạy tình nguyện"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "zhi jiao wen ti",
            "tone": "zhī jiào wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về hành động",
            "hanzi": "行动重点",
            "words": [
              {
                "text": "行动",
                "pinyin": "xing dong",
                "tone": "xíng dòng",
                "pos": "noun",
                "vi": "hành động"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "xing dong zhong dian",
            "tone": "xíng dòng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Hoạt động đi dạy tình nguyện",
            "hanzi": "支教行动。",
            "words": [
              {
                "text": "支教",
                "pinyin": "zhi jiao",
                "tone": "zhī jiào",
                "pos": "verb",
                "vi": "đi dạy tình nguyện"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "zhi jiao",
            "tone": "zhī jiào"
          },
          {
            "stage": "sentence",
            "vi": "hành động là trọng điểm của bài này.",
            "hanzi": "行动是本课重点。",
            "words": [
              {
                "text": "行动",
                "pinyin": "xing dong",
                "tone": "xíng dòng",
                "pos": "noun",
                "vi": "hành động"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "xing dong zhong dian",
            "tone": "xíng dòng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: đi dạy tình nguyện.",
            "hanzi": "支教是本课重点。",
            "words": [
              {
                "text": "支教",
                "pinyin": "zhi jiao",
                "tone": "zhī jiào",
                "pos": "verb",
                "vi": "đi dạy tình nguyện"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l24",
            "pinyin": "zhi jiao zhong dian",
            "tone": "zhī jiào zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l25",
        "no": 25,
        "titleZh": "给自己加满水",
        "titleVi": "Tiếp đầy năng lượng cho bản thân",
        "items": [
          {
            "stage": "word",
            "vi": "đổ đầy nước",
            "hanzi": "加满水",
            "words": [
              {
                "text": "加满水",
                "pinyin": "jia man shui",
                "tone": "jiā mǎn shuǐ",
                "pos": "verb",
                "vi": "đổ đầy nước"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "jia man shui",
            "tone": "jiā mǎn shuǐ"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "zi ji",
            "tone": "zì jǐ"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "nei rong",
            "tone": "nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về đổ đầy nước",
            "hanzi": "加满水内容",
            "words": [
              {
                "text": "加满水",
                "pinyin": "jia man shui",
                "tone": "jiā mǎn shuǐ",
                "pos": "verb",
                "vi": "đổ đầy nước"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "jia man shui nei rong",
            "tone": "jiā mǎn shuǐ nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về bản thân",
            "hanzi": "自己方法",
            "words": [
              {
                "text": "自己",
                "pinyin": "zi ji",
                "tone": "zì jǐ",
                "pos": "noun",
                "vi": "bản thân"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "zi ji fang fa",
            "tone": "zì jǐ fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cuộc sống",
            "hanzi": "生活重点",
            "words": [
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "sheng huo zhong dian",
            "tone": "shēng huó zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về đổ đầy nước",
            "hanzi": "加满水问题",
            "words": [
              {
                "text": "加满水",
                "pinyin": "jia man shui",
                "tone": "jiā mǎn shuǐ",
                "pos": "verb",
                "vi": "đổ đầy nước"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "jia man shui wen ti",
            "tone": "jiā mǎn shuǐ wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về bản thân",
            "hanzi": "自己重点",
            "words": [
              {
                "text": "自己",
                "pinyin": "zi ji",
                "tone": "zì jǐ",
                "pos": "noun",
                "vi": "bản thân"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "zi ji zhong dian",
            "tone": "zì jǐ zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Tiếp đầy năng lượng cho bản thân",
            "hanzi": "给自己加满水。",
            "words": [
              {
                "text": "加满水",
                "pinyin": "jia man shui",
                "tone": "jiā mǎn shuǐ",
                "pos": "verb",
                "vi": "đổ đầy nước"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "jia man shui",
            "tone": "jiā mǎn shuǐ"
          },
          {
            "stage": "sentence",
            "vi": "bản thân là trọng điểm của bài này.",
            "hanzi": "自己是本课重点。",
            "words": [
              {
                "text": "自己",
                "pinyin": "zi ji",
                "tone": "zì jǐ",
                "pos": "noun",
                "vi": "bản thân"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "zi ji zhong dian",
            "tone": "zì jǐ zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: đổ đầy nước.",
            "hanzi": "加满水是本课重点。",
            "words": [
              {
                "text": "加满水",
                "pinyin": "jia man shui",
                "tone": "jiā mǎn shuǐ",
                "pos": "verb",
                "vi": "đổ đầy nước"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l25",
            "pinyin": "jia man shui zhong dian",
            "tone": "jiā mǎn shuǐ zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l26",
        "no": 26,
        "titleZh": "你属于哪一种“忙”",
        "titleVi": "Bạn thuộc kiểu bận nào",
        "items": [
          {
            "stage": "word",
            "vi": "thuộc về",
            "hanzi": "属于",
            "words": [
              {
                "text": "属于",
                "pinyin": "shu yu",
                "tone": "shǔ yú",
                "pos": "verb",
                "vi": "thuộc về"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "shu yu",
            "tone": "shǔ yú"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "mang",
            "tone": "máng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "gong zuo",
            "tone": "gōng zuò"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về thuộc về",
            "hanzi": "属于内容",
            "words": [
              {
                "text": "属于",
                "pinyin": "shu yu",
                "tone": "shǔ yú",
                "pos": "verb",
                "vi": "thuộc về"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "shu yu nei rong",
            "tone": "shǔ yú nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về bận",
            "hanzi": "忙方法",
            "words": [
              {
                "text": "忙",
                "pinyin": "mang",
                "tone": "máng",
                "pos": "adj",
                "vi": "bận"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "mang fang fa",
            "tone": "máng fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về công việc",
            "hanzi": "工作重点",
            "words": [
              {
                "text": "工作",
                "pinyin": "gong zuo",
                "tone": "gōng zuò",
                "pos": "noun",
                "vi": "công việc"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "gong zuo zhong dian",
            "tone": "gōng zuò zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về thuộc về",
            "hanzi": "属于问题",
            "words": [
              {
                "text": "属于",
                "pinyin": "shu yu",
                "tone": "shǔ yú",
                "pos": "verb",
                "vi": "thuộc về"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "shu yu wen ti",
            "tone": "shǔ yú wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về bận",
            "hanzi": "忙重点",
            "words": [
              {
                "text": "忙",
                "pinyin": "mang",
                "tone": "máng",
                "pos": "adj",
                "vi": "bận"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "mang zhong dian",
            "tone": "máng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Bạn thuộc kiểu bận nào",
            "hanzi": "你属于哪一种“忙”。",
            "words": [
              {
                "text": "属于",
                "pinyin": "shu yu",
                "tone": "shǔ yú",
                "pos": "verb",
                "vi": "thuộc về"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "shu yu",
            "tone": "shǔ yú"
          },
          {
            "stage": "sentence",
            "vi": "bận là trọng điểm của bài này.",
            "hanzi": "忙是本课重点。",
            "words": [
              {
                "text": "忙",
                "pinyin": "mang",
                "tone": "máng",
                "pos": "adj",
                "vi": "bận"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "mang zhong dian",
            "tone": "máng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: thuộc về.",
            "hanzi": "属于是本课重点。",
            "words": [
              {
                "text": "属于",
                "pinyin": "shu yu",
                "tone": "shǔ yú",
                "pos": "verb",
                "vi": "thuộc về"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l26",
            "pinyin": "shu yu zhong dian",
            "tone": "shǔ yú zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l27",
        "no": 27,
        "titleZh": "下棋",
        "titleVi": "Chơi cờ",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "xia qi",
            "tone": "xià qí"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "si kao",
            "tone": "sī kǎo"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "wen hua",
            "tone": "wén huà"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về chơi cờ",
            "hanzi": "下棋内容",
            "words": [
              {
                "text": "下棋",
                "pinyin": "xia qi",
                "tone": "xià qí",
                "pos": "verb",
                "vi": "chơi cờ"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "xia qi nei rong",
            "tone": "xià qí nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về cách thức",
            "hanzi": "方式方法",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "fang shi fang fa",
            "tone": "fāng shì fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về suy nghĩ",
            "hanzi": "思考重点",
            "words": [
              {
                "text": "思考",
                "pinyin": "si kao",
                "tone": "sī kǎo",
                "pos": "verb",
                "vi": "suy nghĩ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "si kao zhong dian",
            "tone": "sī kǎo zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về chơi cờ",
            "hanzi": "下棋问题",
            "words": [
              {
                "text": "下棋",
                "pinyin": "xia qi",
                "tone": "xià qí",
                "pos": "verb",
                "vi": "chơi cờ"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "xia qi wen ti",
            "tone": "xià qí wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cách thức",
            "hanzi": "方式重点",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "fang shi zhong dian",
            "tone": "fāng shì zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Chơi cờ",
            "hanzi": "下棋。",
            "words": [
              {
                "text": "下棋",
                "pinyin": "xia qi",
                "tone": "xià qí",
                "pos": "verb",
                "vi": "chơi cờ"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "xia qi",
            "tone": "xià qí"
          },
          {
            "stage": "sentence",
            "vi": "cách thức là trọng điểm của bài này.",
            "hanzi": "方式是本课重点。",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "fang shi zhong dian",
            "tone": "fāng shì zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: chơi cờ.",
            "hanzi": "下棋是本课重点。",
            "words": [
              {
                "text": "下棋",
                "pinyin": "xia qi",
                "tone": "xià qí",
                "pos": "verb",
                "vi": "chơi cờ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l27",
            "pinyin": "xia qi zhong dian",
            "tone": "xià qí zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l28",
        "no": 28,
        "titleZh": "最受欢迎的毕业生",
        "titleVi": "Sinh viên tốt nghiệp được yêu thích nhất",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "bi ye sheng",
            "tone": "bì yè shēng"
          },
          {
            "stage": "word",
            "vi": "được yêu thích",
            "hanzi": "受欢迎",
            "words": [
              {
                "text": "受欢迎",
                "pinyin": "shou huan ying",
                "tone": "shòu huān yíng",
                "pos": "adj",
                "vi": "được yêu thích"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "shou huan ying",
            "tone": "shòu huān yíng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "gong zuo",
            "tone": "gōng zuò"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về sinh viên tốt nghiệp",
            "hanzi": "毕业生内容",
            "words": [
              {
                "text": "毕业生",
                "pinyin": "bi ye sheng",
                "tone": "bì yè shēng",
                "pos": "noun",
                "vi": "sinh viên tốt nghiệp"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "bi ye sheng nei rong",
            "tone": "bì yè shēng nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về được yêu thích",
            "hanzi": "受欢迎方法",
            "words": [
              {
                "text": "受欢迎",
                "pinyin": "shou huan ying",
                "tone": "shòu huān yíng",
                "pos": "adj",
                "vi": "được yêu thích"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "shou huan ying fang fa",
            "tone": "shòu huān yíng fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về công việc",
            "hanzi": "工作重点",
            "words": [
              {
                "text": "工作",
                "pinyin": "gong zuo",
                "tone": "gōng zuò",
                "pos": "noun",
                "vi": "công việc"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "gong zuo zhong dian",
            "tone": "gōng zuò zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về sinh viên tốt nghiệp",
            "hanzi": "毕业生问题",
            "words": [
              {
                "text": "毕业生",
                "pinyin": "bi ye sheng",
                "tone": "bì yè shēng",
                "pos": "noun",
                "vi": "sinh viên tốt nghiệp"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "bi ye sheng wen ti",
            "tone": "bì yè shēng wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về được yêu thích",
            "hanzi": "受欢迎重点",
            "words": [
              {
                "text": "受欢迎",
                "pinyin": "shou huan ying",
                "tone": "shòu huān yíng",
                "pos": "adj",
                "vi": "được yêu thích"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "shou huan ying zhong dian",
            "tone": "shòu huān yíng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Sinh viên tốt nghiệp được yêu thích nhất",
            "hanzi": "最受欢迎的毕业生。",
            "words": [
              {
                "text": "毕业生",
                "pinyin": "bi ye sheng",
                "tone": "bì yè shēng",
                "pos": "noun",
                "vi": "sinh viên tốt nghiệp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "bi ye sheng",
            "tone": "bì yè shēng"
          },
          {
            "stage": "sentence",
            "vi": "được yêu thích là trọng điểm của bài này.",
            "hanzi": "受欢迎是本课重点。",
            "words": [
              {
                "text": "受欢迎",
                "pinyin": "shou huan ying",
                "tone": "shòu huān yíng",
                "pos": "adj",
                "vi": "được yêu thích"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "shou huan ying zhong dian",
            "tone": "shòu huān yíng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: sinh viên tốt nghiệp.",
            "hanzi": "毕业生是本课重点。",
            "words": [
              {
                "text": "毕业生",
                "pinyin": "bi ye sheng",
                "tone": "bì yè shēng",
                "pos": "noun",
                "vi": "sinh viên tốt nghiệp"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l28",
            "pinyin": "bi ye sheng zhong dian",
            "tone": "bì yè shēng zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l29",
        "no": 29,
        "titleZh": "培养对手",
        "titleVi": "Bồi dưỡng đối thủ",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về bồi dưỡng",
            "hanzi": "培养内容",
            "words": [
              {
                "text": "培养",
                "pinyin": "pei yang",
                "tone": "péi yǎng",
                "pos": "verb",
                "vi": "bồi dưỡng"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "pei yang nei rong",
            "tone": "péi yǎng nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về đối thủ",
            "hanzi": "对手方法",
            "words": [
              {
                "text": "对手",
                "pinyin": "dui shou",
                "tone": "duì shǒu",
                "pos": "noun",
                "vi": "đối thủ"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "dui shou fang fa",
            "tone": "duì shǒu fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cạnh tranh",
            "hanzi": "竞争重点",
            "words": [
              {
                "text": "竞争",
                "pinyin": "jing zheng",
                "tone": "jìng zhēng",
                "pos": "noun",
                "vi": "cạnh tranh"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "jing zheng zhong dian",
            "tone": "jìng zhēng zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về bồi dưỡng",
            "hanzi": "培养问题",
            "words": [
              {
                "text": "培养",
                "pinyin": "pei yang",
                "tone": "péi yǎng",
                "pos": "verb",
                "vi": "bồi dưỡng"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "pei yang wen ti",
            "tone": "péi yǎng wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về đối thủ",
            "hanzi": "对手重点",
            "words": [
              {
                "text": "对手",
                "pinyin": "dui shou",
                "tone": "duì shǒu",
                "pos": "noun",
                "vi": "đối thủ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "dui shou zhong dian",
            "tone": "duì shǒu zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Bồi dưỡng đối thủ",
            "hanzi": "培养对手。",
            "words": [
              {
                "text": "培养",
                "pinyin": "pei yang",
                "tone": "péi yǎng",
                "pos": "verb",
                "vi": "bồi dưỡng"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "pei yang",
            "tone": "péi yǎng"
          },
          {
            "stage": "sentence",
            "vi": "đối thủ là trọng điểm của bài này.",
            "hanzi": "对手是本课重点。",
            "words": [
              {
                "text": "对手",
                "pinyin": "dui shou",
                "tone": "duì shǒu",
                "pos": "noun",
                "vi": "đối thủ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "dui shou zhong dian",
            "tone": "duì shǒu zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: bồi dưỡng.",
            "hanzi": "培养是本课重点。",
            "words": [
              {
                "text": "培养",
                "pinyin": "pei yang",
                "tone": "péi yǎng",
                "pos": "verb",
                "vi": "bồi dưỡng"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l29",
            "pinyin": "pei yang zhong dian",
            "tone": "péi yǎng zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l30",
        "no": 30,
        "titleZh": "竞争让市场更高效",
        "titleVi": "Cạnh tranh làm thị trường hiệu quả hơn",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "gao xiao",
            "tone": "gāo xiào"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về cạnh tranh",
            "hanzi": "竞争内容",
            "words": [
              {
                "text": "竞争",
                "pinyin": "jing zheng",
                "tone": "jìng zhēng",
                "pos": "noun",
                "vi": "cạnh tranh"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "jing zheng nei rong",
            "tone": "jìng zhēng nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về thị trường",
            "hanzi": "市场方法",
            "words": [
              {
                "text": "市场",
                "pinyin": "shi chang",
                "tone": "shì chǎng",
                "pos": "noun",
                "vi": "thị trường"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "shi chang fang fa",
            "tone": "shì chǎng fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về hiệu quả cao",
            "hanzi": "高效重点",
            "words": [
              {
                "text": "高效",
                "pinyin": "gao xiao",
                "tone": "gāo xiào",
                "pos": "adj",
                "vi": "hiệu quả cao"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "gao xiao zhong dian",
            "tone": "gāo xiào zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về cạnh tranh",
            "hanzi": "竞争问题",
            "words": [
              {
                "text": "竞争",
                "pinyin": "jing zheng",
                "tone": "jìng zhēng",
                "pos": "noun",
                "vi": "cạnh tranh"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "jing zheng wen ti",
            "tone": "jìng zhēng wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về thị trường",
            "hanzi": "市场重点",
            "words": [
              {
                "text": "市场",
                "pinyin": "shi chang",
                "tone": "shì chǎng",
                "pos": "noun",
                "vi": "thị trường"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "shi chang zhong dian",
            "tone": "shì chǎng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Cạnh tranh làm thị trường hiệu quả hơn",
            "hanzi": "竞争让市场更高效。",
            "words": [
              {
                "text": "竞争",
                "pinyin": "jing zheng",
                "tone": "jìng zhēng",
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
          },
          {
            "stage": "sentence",
            "vi": "thị trường là trọng điểm của bài này.",
            "hanzi": "市场是本课重点。",
            "words": [
              {
                "text": "市场",
                "pinyin": "shi chang",
                "tone": "shì chǎng",
                "pos": "noun",
                "vi": "thị trường"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "shi chang zhong dian",
            "tone": "shì chǎng zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: cạnh tranh.",
            "hanzi": "竞争是本课重点。",
            "words": [
              {
                "text": "竞争",
                "pinyin": "jing zheng",
                "tone": "jìng zhēng",
                "pos": "noun",
                "vi": "cạnh tranh"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l30",
            "pinyin": "jing zheng zhong dian",
            "tone": "jìng zhēng zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l31",
        "no": 31,
        "titleZh": "登门槛效应",
        "titleVi": "Hiệu ứng ngưỡng cửa",
        "items": [
          {
            "stage": "word",
            "vi": "hiệu ứng ngưỡng cửa",
            "hanzi": "门槛效应",
            "words": [
              {
                "text": "门槛效应",
                "pinyin": "men kan xiao ying",
                "tone": "mén kǎn xiào yìng",
                "pos": "noun",
                "vi": "hiệu ứng ngưỡng cửa"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "men kan xiao ying",
            "tone": "mén kǎn xiào yìng"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "wen hua",
            "tone": "wén huà"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về hiệu ứng ngưỡng cửa",
            "hanzi": "门槛效应内容",
            "words": [
              {
                "text": "门槛效应",
                "pinyin": "men kan xiao ying",
                "tone": "mén kǎn xiào yìng",
                "pos": "noun",
                "vi": "hiệu ứng ngưỡng cửa"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "men kan xiao ying nei rong",
            "tone": "mén kǎn xiào yìng nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về cách thức",
            "hanzi": "方式方法",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "fang shi fang fa",
            "tone": "fāng shì fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về phán đoán",
            "hanzi": "判断重点",
            "words": [
              {
                "text": "判断",
                "pinyin": "pan duan",
                "tone": "pàn duàn",
                "pos": "verb",
                "vi": "phán đoán"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "pan duan zhong dian",
            "tone": "pàn duàn zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về hiệu ứng ngưỡng cửa",
            "hanzi": "门槛效应问题",
            "words": [
              {
                "text": "门槛效应",
                "pinyin": "men kan xiao ying",
                "tone": "mén kǎn xiào yìng",
                "pos": "noun",
                "vi": "hiệu ứng ngưỡng cửa"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "men kan xiao ying wen ti",
            "tone": "mén kǎn xiào yìng wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về cách thức",
            "hanzi": "方式重点",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "fang shi zhong dian",
            "tone": "fāng shì zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Hiệu ứng ngưỡng cửa",
            "hanzi": "登门槛效应。",
            "words": [
              {
                "text": "门槛效应",
                "pinyin": "men kan xiao ying",
                "tone": "mén kǎn xiào yìng",
                "pos": "noun",
                "vi": "hiệu ứng ngưỡng cửa"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "men kan xiao ying",
            "tone": "mén kǎn xiào yìng"
          },
          {
            "stage": "sentence",
            "vi": "cách thức là trọng điểm của bài này.",
            "hanzi": "方式是本课重点。",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "fang shi zhong dian",
            "tone": "fāng shì zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: hiệu ứng ngưỡng cửa.",
            "hanzi": "门槛效应是本课重点。",
            "words": [
              {
                "text": "门槛效应",
                "pinyin": "men kan xiao ying",
                "tone": "mén kǎn xiào yìng",
                "pos": "noun",
                "vi": "hiệu ứng ngưỡng cửa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l31",
            "pinyin": "men kan xiao ying zhong dian",
            "tone": "mén kǎn xiào yìng zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l32",
        "no": 32,
        "titleZh": "身边的环保",
        "titleVi": "Bảo vệ môi trường quanh ta",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "huan bao",
            "tone": "huán bǎo"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về xung quanh",
            "hanzi": "身边内容",
            "words": [
              {
                "text": "身边",
                "pinyin": "shen bian",
                "tone": "shēn biān",
                "pos": "noun",
                "vi": "xung quanh"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "shen bian nei rong",
            "tone": "shēn biān nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về bảo vệ môi trường",
            "hanzi": "环保方法",
            "words": [
              {
                "text": "环保",
                "pinyin": "huan bao",
                "tone": "huán bǎo",
                "pos": "noun",
                "vi": "bảo vệ môi trường"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "huan bao fang fa",
            "tone": "huán bǎo fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về bảo vệ",
            "hanzi": "保护重点",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "bao hu zhong dian",
            "tone": "bǎo hù zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về xung quanh",
            "hanzi": "身边问题",
            "words": [
              {
                "text": "身边",
                "pinyin": "shen bian",
                "tone": "shēn biān",
                "pos": "noun",
                "vi": "xung quanh"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "shen bian wen ti",
            "tone": "shēn biān wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về bảo vệ môi trường",
            "hanzi": "环保重点",
            "words": [
              {
                "text": "环保",
                "pinyin": "huan bao",
                "tone": "huán bǎo",
                "pos": "noun",
                "vi": "bảo vệ môi trường"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "huan bao zhong dian",
            "tone": "huán bǎo zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Bảo vệ môi trường quanh ta",
            "hanzi": "身边的环保。",
            "words": [
              {
                "text": "身边",
                "pinyin": "shen bian",
                "tone": "shēn biān",
                "pos": "noun",
                "vi": "xung quanh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "shen bian",
            "tone": "shēn biān"
          },
          {
            "stage": "sentence",
            "vi": "bảo vệ môi trường là trọng điểm của bài này.",
            "hanzi": "环保是本课重点。",
            "words": [
              {
                "text": "环保",
                "pinyin": "huan bao",
                "tone": "huán bǎo",
                "pos": "noun",
                "vi": "bảo vệ môi trường"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "huan bao zhong dian",
            "tone": "huán bǎo zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: xung quanh.",
            "hanzi": "身边是本课重点。",
            "words": [
              {
                "text": "身边",
                "pinyin": "shen bian",
                "tone": "shēn biān",
                "pos": "noun",
                "vi": "xung quanh"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l32",
            "pinyin": "shen bian zhong dian",
            "tone": "shēn biān zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l33",
        "no": 33,
        "titleZh": "以堵治堵—缓解交通有妙招",
        "titleVi": "Lấy tắc trị tắc - có mẹo giảm ùn tắc giao thông",
        "items": [
          {
            "stage": "word",
            "vi": "lấy tắc trị tắc",
            "hanzi": "以堵治堵",
            "words": [
              {
                "text": "以堵治堵",
                "pinyin": "yi du zhi du",
                "tone": "yǐ dǔ zhì dǔ",
                "pos": "verb",
                "vi": "lấy tắc trị tắc"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "yi du zhi du",
            "tone": "yǐ dǔ zhì dǔ"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "jiao tong",
            "tone": "jiāo tōng"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về lấy tắc trị tắc",
            "hanzi": "以堵治堵内容",
            "words": [
              {
                "text": "以堵治堵",
                "pinyin": "yi du zhi du",
                "tone": "yǐ dǔ zhì dǔ",
                "pos": "verb",
                "vi": "lấy tắc trị tắc"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "yi du zhi du nei rong",
            "tone": "yǐ dǔ zhì dǔ nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về giảm bớt",
            "hanzi": "缓解方法",
            "words": [
              {
                "text": "缓解",
                "pinyin": "huan jie",
                "tone": "huǎn jiě",
                "pos": "verb",
                "vi": "giảm bớt"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "huan jie fang fa",
            "tone": "huǎn jiě fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về giao thông",
            "hanzi": "交通重点",
            "words": [
              {
                "text": "交通",
                "pinyin": "jiao tong",
                "tone": "jiāo tōng",
                "pos": "noun",
                "vi": "giao thông"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "jiao tong zhong dian",
            "tone": "jiāo tōng zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về lấy tắc trị tắc",
            "hanzi": "以堵治堵问题",
            "words": [
              {
                "text": "以堵治堵",
                "pinyin": "yi du zhi du",
                "tone": "yǐ dǔ zhì dǔ",
                "pos": "verb",
                "vi": "lấy tắc trị tắc"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "yi du zhi du wen ti",
            "tone": "yǐ dǔ zhì dǔ wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về giảm bớt",
            "hanzi": "缓解重点",
            "words": [
              {
                "text": "缓解",
                "pinyin": "huan jie",
                "tone": "huǎn jiě",
                "pos": "verb",
                "vi": "giảm bớt"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "huan jie zhong dian",
            "tone": "huǎn jiě zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Lấy tắc trị tắc - có mẹo giảm ùn tắc giao thông",
            "hanzi": "以堵治堵—缓解交通有妙招。",
            "words": [
              {
                "text": "以堵治堵",
                "pinyin": "yi du zhi du",
                "tone": "yǐ dǔ zhì dǔ",
                "pos": "verb",
                "vi": "lấy tắc trị tắc"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "yi du zhi du",
            "tone": "yǐ dǔ zhì dǔ"
          },
          {
            "stage": "sentence",
            "vi": "giảm bớt là trọng điểm của bài này.",
            "hanzi": "缓解是本课重点。",
            "words": [
              {
                "text": "缓解",
                "pinyin": "huan jie",
                "tone": "huǎn jiě",
                "pos": "verb",
                "vi": "giảm bớt"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "huan jie zhong dian",
            "tone": "huǎn jiě zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: lấy tắc trị tắc.",
            "hanzi": "以堵治堵是本课重点。",
            "words": [
              {
                "text": "以堵治堵",
                "pinyin": "yi du zhi du",
                "tone": "yǐ dǔ zhì dǔ",
                "pos": "verb",
                "vi": "lấy tắc trị tắc"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l33",
            "pinyin": "yi du zhi du zhong dian",
            "tone": "yǐ dǔ zhì dǔ zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l34",
        "no": 34,
        "titleZh": "鸟儿的护肤术",
        "titleVi": "Bí quyết chăm sóc da của loài chim",
        "items": [
          {
            "stage": "word",
            "vi": "chim chóc",
            "hanzi": "鸟儿",
            "words": [
              {
                "text": "鸟儿",
                "pinyin": "niao er",
                "tone": "niǎo ér",
                "pos": "noun",
                "vi": "chim chóc"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "niao er",
            "tone": "niǎo ér"
          },
          {
            "stage": "word",
            "vi": "bí quyết chăm sóc da",
            "hanzi": "护肤术",
            "words": [
              {
                "text": "护肤术",
                "pinyin": "hu fu shu",
                "tone": "hù fū shù",
                "pos": "noun",
                "vi": "bí quyết chăm sóc da"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "hu fu shu",
            "tone": "hù fū shù"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về chim chóc",
            "hanzi": "鸟儿内容",
            "words": [
              {
                "text": "鸟儿",
                "pinyin": "niao er",
                "tone": "niǎo ér",
                "pos": "noun",
                "vi": "chim chóc"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "niao er nei rong",
            "tone": "niǎo ér nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về bí quyết chăm sóc da",
            "hanzi": "护肤术方法",
            "words": [
              {
                "text": "护肤术",
                "pinyin": "hu fu shu",
                "tone": "hù fū shù",
                "pos": "noun",
                "vi": "bí quyết chăm sóc da"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "hu fu shu fang fa",
            "tone": "hù fū shù fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về bảo vệ",
            "hanzi": "保护重点",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "bao hu zhong dian",
            "tone": "bǎo hù zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về chim chóc",
            "hanzi": "鸟儿问题",
            "words": [
              {
                "text": "鸟儿",
                "pinyin": "niao er",
                "tone": "niǎo ér",
                "pos": "noun",
                "vi": "chim chóc"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "niao er wen ti",
            "tone": "niǎo ér wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về bí quyết chăm sóc da",
            "hanzi": "护肤术重点",
            "words": [
              {
                "text": "护肤术",
                "pinyin": "hu fu shu",
                "tone": "hù fū shù",
                "pos": "noun",
                "vi": "bí quyết chăm sóc da"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "hu fu shu zhong dian",
            "tone": "hù fū shù zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Bí quyết chăm sóc da của loài chim",
            "hanzi": "鸟儿的护肤术。",
            "words": [
              {
                "text": "鸟儿",
                "pinyin": "niao er",
                "tone": "niǎo ér",
                "pos": "noun",
                "vi": "chim chóc"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "niao er",
            "tone": "niǎo ér"
          },
          {
            "stage": "sentence",
            "vi": "bí quyết chăm sóc da là trọng điểm của bài này.",
            "hanzi": "护肤术是本课重点。",
            "words": [
              {
                "text": "护肤术",
                "pinyin": "hu fu shu",
                "tone": "hù fū shù",
                "pos": "noun",
                "vi": "bí quyết chăm sóc da"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "hu fu shu zhong dian",
            "tone": "hù fū shù zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: chim chóc.",
            "hanzi": "鸟儿是本课重点。",
            "words": [
              {
                "text": "鸟儿",
                "pinyin": "niao er",
                "tone": "niǎo ér",
                "pos": "noun",
                "vi": "chim chóc"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l34",
            "pinyin": "niao er zhong dian",
            "tone": "niǎo ér zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l35",
        "no": 35,
        "titleZh": "植物会出汗",
        "titleVi": "Thực vật biết đổ mồ hôi",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "zhi wu",
            "tone": "zhí wù"
          },
          {
            "stage": "word",
            "vi": "đổ mồ hôi",
            "hanzi": "出汗",
            "words": [
              {
                "text": "出汗",
                "pinyin": "chu han",
                "tone": "chū hàn",
                "pos": "verb",
                "vi": "đổ mồ hôi"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "chu han",
            "tone": "chū hàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "zi ran",
            "tone": "zì rán"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "guan dian",
            "tone": "guān diǎn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "pan duan",
            "tone": "pàn duàn"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "fang shi",
            "tone": "fāng shì"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về thực vật",
            "hanzi": "植物内容",
            "words": [
              {
                "text": "植物",
                "pinyin": "zhi wu",
                "tone": "zhí wù",
                "pos": "noun",
                "vi": "thực vật"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "zhi wu nei rong",
            "tone": "zhí wù nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về đổ mồ hôi",
            "hanzi": "出汗方法",
            "words": [
              {
                "text": "出汗",
                "pinyin": "chu han",
                "tone": "chū hàn",
                "pos": "verb",
                "vi": "đổ mồ hôi"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "chu han fang fa",
            "tone": "chū hàn fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về tự nhiên",
            "hanzi": "自然重点",
            "words": [
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "tự nhiên"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "zi ran zhong dian",
            "tone": "zì rán zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về thực vật",
            "hanzi": "植物问题",
            "words": [
              {
                "text": "植物",
                "pinyin": "zhi wu",
                "tone": "zhí wù",
                "pos": "noun",
                "vi": "thực vật"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "zhi wu wen ti",
            "tone": "zhí wù wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về đổ mồ hôi",
            "hanzi": "出汗重点",
            "words": [
              {
                "text": "出汗",
                "pinyin": "chu han",
                "tone": "chū hàn",
                "pos": "verb",
                "vi": "đổ mồ hôi"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "chu han zhong dian",
            "tone": "chū hàn zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Thực vật biết đổ mồ hôi",
            "hanzi": "植物会出汗。",
            "words": [
              {
                "text": "植物",
                "pinyin": "zhi wu",
                "tone": "zhí wù",
                "pos": "noun",
                "vi": "thực vật"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "zhi wu",
            "tone": "zhí wù"
          },
          {
            "stage": "sentence",
            "vi": "đổ mồ hôi là trọng điểm của bài này.",
            "hanzi": "出汗是本课重点。",
            "words": [
              {
                "text": "出汗",
                "pinyin": "chu han",
                "tone": "chū hàn",
                "pos": "verb",
                "vi": "đổ mồ hôi"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "chu han zhong dian",
            "tone": "chū hàn zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: thực vật.",
            "hanzi": "植物是本课重点。",
            "words": [
              {
                "text": "植物",
                "pinyin": "zhi wu",
                "tone": "zhí wù",
                "pos": "noun",
                "vi": "thực vật"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l35",
            "pinyin": "zhi wu zhong dian",
            "tone": "zhí wù zhòng diǎn"
          }
        ]
      },
      {
        "id": "hsk5-l36",
        "no": 36,
        "titleZh": "老舍与养花",
        "titleVi": "Lão Xá và việc trồng hoa",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "yang hua",
            "tone": "yǎng huā"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "điều tra",
            "hanzi": "调查",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "diao cha",
            "tone": "diào chá"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "word",
            "vi": "cách thức",
            "hanzi": "方式",
            "words": [
              {
                "text": "方式",
                "pinyin": "fang shi",
                "tone": "fāng shì",
                "pos": "noun",
                "vi": "cách thức"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "fang shi",
            "tone": "fāng shì"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "jie guo",
            "tone": "jié guǒ"
          },
          {
            "stage": "word",
            "vi": "nội dung",
            "hanzi": "内容",
            "words": [
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "nei rong",
            "tone": "nèi róng"
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
                "pos": "noun",
                "vi": "cạnh tranh"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "jing zheng",
            "tone": "jìng zhēng"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
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
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "jiao liu",
            "tone": "jiāo liú"
          },
          {
            "stage": "phrase",
            "vi": "nội dung về trồng hoa",
            "hanzi": "养花内容",
            "words": [
              {
                "text": "养花",
                "pinyin": "yang hua",
                "tone": "yǎng huā",
                "pos": "verb",
                "vi": "trồng hoa"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "yang hua nei rong",
            "tone": "yǎng huā nèi róng"
          },
          {
            "stage": "phrase",
            "vi": "phương pháp về văn hóa",
            "hanzi": "文化方法",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "wen hua fang fa",
            "tone": "wén huà fāng fǎ"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về điều tra",
            "hanzi": "调查重点",
            "words": [
              {
                "text": "调查",
                "pinyin": "diao cha",
                "tone": "diào chá",
                "pos": "noun",
                "vi": "điều tra"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "diao cha zhong dian",
            "tone": "diào chá zhòng diǎn"
          },
          {
            "stage": "phrase",
            "vi": "vấn đề về trồng hoa",
            "hanzi": "养花问题",
            "words": [
              {
                "text": "养花",
                "pinyin": "yang hua",
                "tone": "yǎng huā",
                "pos": "verb",
                "vi": "trồng hoa"
              },
              {
                "text": "问题",
                "pinyin": "wen ti",
                "tone": "wèn tí",
                "pos": "noun",
                "vi": "vấn đề"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "yang hua wen ti",
            "tone": "yǎng huā wèn tí"
          },
          {
            "stage": "phrase",
            "vi": "trọng điểm về văn hóa",
            "hanzi": "文化重点",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "wen hua zhong dian",
            "tone": "wén huà zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Lão Xá và việc trồng hoa",
            "hanzi": "老舍与养花。",
            "words": [
              {
                "text": "养花",
                "pinyin": "yang hua",
                "tone": "yǎng huā",
                "pos": "verb",
                "vi": "trồng hoa"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "yang hua",
            "tone": "yǎng huā"
          },
          {
            "stage": "sentence",
            "vi": "văn hóa là trọng điểm của bài này.",
            "hanzi": "文化是本课重点。",
            "words": [
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "wen hua zhong dian",
            "tone": "wén huà zhòng diǎn"
          },
          {
            "stage": "sentence",
            "vi": "Học nội dung này cần có phương pháp.",
            "hanzi": "学习内容需要方法。",
            "words": [
              {
                "text": "学习",
                "pinyin": "xue xi",
                "tone": "xué xí",
                "pos": "verb",
                "vi": "học"
              },
              {
                "text": "内容",
                "pinyin": "nei rong",
                "tone": "nèi róng",
                "pos": "noun",
                "vi": "nội dung"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "方法",
                "pinyin": "fang fa",
                "tone": "fāng fǎ",
                "pos": "noun",
                "vi": "phương pháp"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "xue xi nei rong xu yao fang fa",
            "tone": "xué xí nèi róng xū yào fāng fǎ"
          },
          {
            "stage": "sentence",
            "vi": "Chúng ta cần hiểu trọng điểm này.",
            "hanzi": "我们需要理解重点。",
            "words": [
              {
                "text": "我们",
                "pinyin": "wo men",
                "tone": "wǒ men",
                "pos": "noun",
                "vi": "chúng ta"
              },
              {
                "text": "需要",
                "pinyin": "xu yao",
                "tone": "xū yào",
                "pos": "verb",
                "vi": "cần"
              },
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "wo men xu yao li jie zhong dian",
            "tone": "wǒ men xū yào lǐ jiě zhòng diǎn"
          },
          {
            "stage": "mixed",
            "vi": "Ôn tập trọng điểm: trồng hoa.",
            "hanzi": "养花是本课重点。",
            "words": [
              {
                "text": "养花",
                "pinyin": "yang hua",
                "tone": "yǎng huā",
                "pos": "verb",
                "vi": "trồng hoa"
              },
              {
                "text": "重点",
                "pinyin": "zhong dian",
                "tone": "zhòng diǎn",
                "pos": "noun",
                "vi": "trọng điểm"
              }
            ],
            "source": "Refined textbook-theme candidate final batch - needs human PDF/OCR verification - hsk5-l36",
            "pinyin": "yang hua zhong dian",
            "tone": "yǎng huā zhòng diǎn"
          }
        ]
      }
    ]
  }
};
});
