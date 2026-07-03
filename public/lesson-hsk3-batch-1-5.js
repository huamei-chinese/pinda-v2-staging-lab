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
      "id": "hsk3-l1",
      "no": 1,
      "titleZh": "周末你有什么打算",
      "titleVi": "Cuối tuần bạn có dự định gì",
      "items": [
        {
          "stage": "word",
          "vi": "cuối tuần",
          "hanzi": "周末",
          "words": [
            {
              "text": "周末",
              "pinyin": "zhou mo",
              "tone": "zhōu mò",
              "pos": "noun",
              "vi": "cuối tuần"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "zhou mo",
          "tone": "zhōu mò"
        },
        {
          "stage": "word",
          "vi": "dự định",
          "hanzi": "打算",
          "words": [
            {
              "text": "打算",
              "pinyin": "da suan",
              "tone": "dǎ suàn",
              "pos": "verb",
              "vi": "dự định"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "da suan",
          "tone": "dǎ suàn"
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
          "source": "HSK3 generated prototype - Lesson 1",
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
          "source": "HSK3 generated prototype - Lesson 1",
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
          "source": "HSK3 generated prototype - Lesson 1",
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
          "source": "HSK3 generated prototype - Lesson 1",
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
          "source": "HSK3 generated prototype - Lesson 1",
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
          "source": "HSK3 generated prototype - Lesson 1",
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
          "source": "HSK3 generated prototype - Lesson 1",
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
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "ren zhen",
          "tone": "rèn zhēn"
        },
        {
          "stage": "phrase",
          "vi": "cuối tuần và dự định",
          "hanzi": "周末打算",
          "words": [
            {
              "text": "周末",
              "pinyin": "zhou mo",
              "tone": "zhōu mò",
              "pos": "noun",
              "vi": "cuối tuần"
            },
            {
              "text": "打算",
              "pinyin": "da suan",
              "tone": "dǎ suàn",
              "pos": "verb",
              "vi": "dự định"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "zhou mo da suan",
          "tone": "zhōu mò dǎ suàn"
        },
        {
          "stage": "phrase",
          "vi": "dự định và học",
          "hanzi": "打算学习",
          "words": [
            {
              "text": "打算",
              "pinyin": "da suan",
              "tone": "dǎ suàn",
              "pos": "verb",
              "vi": "dự định"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "da suan xue xi",
          "tone": "dǎ suàn xué xí"
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
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "xue xi gong zuo",
          "tone": "xué xí gōng zuò"
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
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "gong zuo jiao liu",
          "tone": "gōng zuò jiāo liú"
        },
        {
          "stage": "sentence",
          "vi": "cuối tuần dự định.",
          "hanzi": "周末打算。",
          "words": [
            {
              "text": "周末",
              "pinyin": "zhou mo",
              "tone": "zhōu mò",
              "pos": "noun",
              "vi": "cuối tuần"
            },
            {
              "text": "打算",
              "pinyin": "da suan",
              "tone": "dǎ suàn",
              "pos": "verb",
              "vi": "dự định"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "zhou mo da suan",
          "tone": "zhōu mò dǎ suàn"
        },
        {
          "stage": "sentence",
          "vi": "dự định có liên quan đến học.",
          "hanzi": "打算和学习有关。",
          "words": [
            {
              "text": "打算",
              "pinyin": "da suan",
              "tone": "dǎ suàn",
              "pos": "verb",
              "vi": "dự định"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "da suan xue xi",
          "tone": "dǎ suàn xué xí"
        },
        {
          "stage": "sentence",
          "vi": "học, công việc, giao tiếp.",
          "hanzi": "学习工作交流。",
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
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "xue xi gong zuo jiao liu",
          "tone": "xué xí gōng zuò jiāo liú"
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
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "jiao liu ji hua zhong yao",
          "tone": "jiāo liú jì huà zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về cuối tuần và dự định.",
          "hanzi": "周末打算观点。",
          "words": [
            {
              "text": "周末",
              "pinyin": "zhou mo",
              "tone": "zhōu mò",
              "pos": "noun",
              "vi": "cuối tuần"
            },
            {
              "text": "打算",
              "pinyin": "da suan",
              "tone": "dǎ suàn",
              "pos": "verb",
              "vi": "dự định"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "zhou mo da suan guan dian",
          "tone": "zhōu mò dǎ suàn guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về dự định và học.",
          "hanzi": "打算学习观点。",
          "words": [
            {
              "text": "打算",
              "pinyin": "da suan",
              "tone": "dǎ suàn",
              "pos": "verb",
              "vi": "dự định"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 1",
          "pinyin": "da suan xue xi guan dian",
          "tone": "dǎ suàn xué xí guān diǎn"
        }
      ]
    },
    {
      "id": "hsk3-l2",
      "no": 2,
      "titleZh": "他什么时候回来",
      "titleVi": "Khi nào anh ấy quay về",
      "items": [
        {
          "stage": "word",
          "vi": "lúc, thời điểm",
          "hanzi": "时候",
          "words": [
            {
              "text": "时候",
              "pinyin": "shi hou",
              "tone": "shí hòu",
              "pos": "noun",
              "vi": "lúc, thời điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "shi hou",
          "tone": "shí hòu"
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
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "hui lai",
          "tone": "huí lái"
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
          "source": "HSK3 generated prototype - Lesson 2",
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
          "source": "HSK3 generated prototype - Lesson 2",
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
          "source": "HSK3 generated prototype - Lesson 2",
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
          "source": "HSK3 generated prototype - Lesson 2",
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
          "source": "HSK3 generated prototype - Lesson 2",
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
          "source": "HSK3 generated prototype - Lesson 2",
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
          "source": "HSK3 generated prototype - Lesson 2",
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
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "jie guo",
          "tone": "jié guǒ"
        },
        {
          "stage": "phrase",
          "vi": "lúc, thời điểm và trở về",
          "hanzi": "时候回来",
          "words": [
            {
              "text": "时候",
              "pinyin": "shi hou",
              "tone": "shí hòu",
              "pos": "noun",
              "vi": "lúc, thời điểm"
            },
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "shi hou hui lai",
          "tone": "shí hòu huí lái"
        },
        {
          "stage": "phrase",
          "vi": "trở về và công việc",
          "hanzi": "回来工作",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "hui lai gong zuo",
          "tone": "huí lái gōng zuò"
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
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "gong zuo jiao liu",
          "tone": "gōng zuò jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "giao tiếp và kế hoạch",
          "hanzi": "交流计划",
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
            }
          ],
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "jiao liu ji hua",
          "tone": "jiāo liú jì huà"
        },
        {
          "stage": "sentence",
          "vi": "lúc, thời điểm trở về.",
          "hanzi": "时候回来。",
          "words": [
            {
              "text": "时候",
              "pinyin": "shi hou",
              "tone": "shí hòu",
              "pos": "noun",
              "vi": "lúc, thời điểm"
            },
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "shi hou hui lai",
          "tone": "shí hòu huí lái"
        },
        {
          "stage": "sentence",
          "vi": "trở về có liên quan đến công việc.",
          "hanzi": "回来和工作有关。",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "hui lai gong zuo",
          "tone": "huí lái gōng zuò"
        },
        {
          "stage": "sentence",
          "vi": "công việc, giao tiếp, kế hoạch.",
          "hanzi": "工作交流计划。",
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
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "gong zuo jiao liu ji hua",
          "tone": "gōng zuò jiāo liú jì huà"
        },
        {
          "stage": "sentence",
          "vi": "kế hoạch và đã rất quan trọng.",
          "hanzi": "计划已经很重要。",
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
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "ji hua yi jing zhong yao",
          "tone": "jì huà yǐ jīng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về lúc, thời điểm và trở về.",
          "hanzi": "时候回来观点。",
          "words": [
            {
              "text": "时候",
              "pinyin": "shi hou",
              "tone": "shí hòu",
              "pos": "noun",
              "vi": "lúc, thời điểm"
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
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "shi hou hui lai guan dian",
          "tone": "shí hòu huí lái guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về trở về và công việc.",
          "hanzi": "回来工作观点。",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
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
          "source": "HSK3 generated prototype - Lesson 2",
          "pinyin": "hui lai gong zuo guan dian",
          "tone": "huí lái gōng zuò guān diǎn"
        }
      ]
    },
    {
      "id": "hsk3-l3",
      "no": 3,
      "titleZh": "桌子上放着很多饮料",
      "titleVi": "Trên bàn có rất nhiều đồ uống",
      "items": [
        {
          "stage": "word",
          "vi": "cái bàn",
          "hanzi": "桌子",
          "words": [
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuō zi",
              "pos": "noun",
              "vi": "cái bàn"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "zhuo zi",
          "tone": "zhuō zi"
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
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "fang zhe",
          "tone": "fàng zhe"
        },
        {
          "stage": "word",
          "vi": "đồ uống",
          "hanzi": "饮料",
          "words": [
            {
              "text": "饮料",
              "pinyin": "yin liao",
              "tone": "yǐn liào",
              "pos": "noun",
              "vi": "đồ uống"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "yin liao",
          "tone": "yǐn liào"
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
          "source": "HSK3 generated prototype - Lesson 3",
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
          "source": "HSK3 generated prototype - Lesson 3",
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
          "source": "HSK3 generated prototype - Lesson 3",
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
          "source": "HSK3 generated prototype - Lesson 3",
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
          "source": "HSK3 generated prototype - Lesson 3",
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
          "source": "HSK3 generated prototype - Lesson 3",
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
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "jie guo",
          "tone": "jié guǒ"
        },
        {
          "stage": "phrase",
          "vi": "cái bàn và đặt, để",
          "hanzi": "桌子放着",
          "words": [
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuō zi",
              "pos": "noun",
              "vi": "cái bàn"
            },
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "zhuo zi fang zhe",
          "tone": "zhuō zi fàng zhe"
        },
        {
          "stage": "phrase",
          "vi": "đặt, để và đồ uống",
          "hanzi": "放着饮料",
          "words": [
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            },
            {
              "text": "饮料",
              "pinyin": "yin liao",
              "tone": "yǐn liào",
              "pos": "noun",
              "vi": "đồ uống"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "fang zhe yin liao",
          "tone": "fàng zhe yǐn liào"
        },
        {
          "stage": "phrase",
          "vi": "đồ uống và giao tiếp",
          "hanzi": "饮料交流",
          "words": [
            {
              "text": "饮料",
              "pinyin": "yin liao",
              "tone": "yǐn liào",
              "pos": "noun",
              "vi": "đồ uống"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "yin liao jiao liu",
          "tone": "yǐn liào jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "giao tiếp và kế hoạch",
          "hanzi": "交流计划",
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
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "jiao liu ji hua",
          "tone": "jiāo liú jì huà"
        },
        {
          "stage": "sentence",
          "vi": "cái bàn đặt, để.",
          "hanzi": "桌子放着。",
          "words": [
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuō zi",
              "pos": "noun",
              "vi": "cái bàn"
            },
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "zhuo zi fang zhe",
          "tone": "zhuō zi fàng zhe"
        },
        {
          "stage": "sentence",
          "vi": "đặt, để có liên quan đến đồ uống.",
          "hanzi": "放着和饮料有关。",
          "words": [
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            },
            {
              "text": "饮料",
              "pinyin": "yin liao",
              "tone": "yǐn liào",
              "pos": "noun",
              "vi": "đồ uống"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "fang zhe yin liao",
          "tone": "fàng zhe yǐn liào"
        },
        {
          "stage": "sentence",
          "vi": "đồ uống, giao tiếp, kế hoạch.",
          "hanzi": "饮料交流计划。",
          "words": [
            {
              "text": "饮料",
              "pinyin": "yin liao",
              "tone": "yǐn liào",
              "pos": "noun",
              "vi": "đồ uống"
            },
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
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "yin liao jiao liu ji hua",
          "tone": "yǐn liào jiāo liú jì huà"
        },
        {
          "stage": "sentence",
          "vi": "kế hoạch và đã rất quan trọng.",
          "hanzi": "计划已经很重要。",
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
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "ji hua yi jing zhong yao",
          "tone": "jì huà yǐ jīng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về cái bàn và đặt, để.",
          "hanzi": "桌子放着观点。",
          "words": [
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuō zi",
              "pos": "noun",
              "vi": "cái bàn"
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
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "zhuo zi fang zhe guan dian",
          "tone": "zhuō zi fàng zhe guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đặt, để và đồ uống.",
          "hanzi": "放着饮料观点。",
          "words": [
            {
              "text": "放着",
              "pinyin": "fang zhe",
              "tone": "fàng zhe",
              "pos": "verb",
              "vi": "đặt, để"
            },
            {
              "text": "饮料",
              "pinyin": "yin liao",
              "tone": "yǐn liào",
              "pos": "noun",
              "vi": "đồ uống"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 3",
          "pinyin": "fang zhe yin liao guan dian",
          "tone": "fàng zhe yǐn liào guān diǎn"
        }
      ]
    },
    {
      "id": "hsk3-l4",
      "no": 4,
      "titleZh": "她总是笑着跟客人说话",
      "titleVi": "Cô ấy luôn mỉm cười nói chuyện với khách",
      "items": [
        {
          "stage": "word",
          "vi": "luôn luôn",
          "hanzi": "总是",
          "words": [
            {
              "text": "总是",
              "pinyin": "zong shi",
              "tone": "zǒng shì",
              "pos": "adv",
              "vi": "luôn luôn"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "zong shi",
          "tone": "zǒng shì"
        },
        {
          "stage": "word",
          "vi": "mỉm cười",
          "hanzi": "笑着",
          "words": [
            {
              "text": "笑着",
              "pinyin": "xiao zhe",
              "tone": "xiào zhe",
              "pos": "verb",
              "vi": "mỉm cười"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "xiao zhe",
          "tone": "xiào zhe"
        },
        {
          "stage": "word",
          "vi": "khách",
          "hanzi": "客人",
          "words": [
            {
              "text": "客人",
              "pinyin": "ke ren",
              "tone": "kè rén",
              "pos": "noun",
              "vi": "khách"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "ke ren",
          "tone": "kè rén"
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
          "source": "HSK3 generated prototype - Lesson 4",
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
          "source": "HSK3 generated prototype - Lesson 4",
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
          "source": "HSK3 generated prototype - Lesson 4",
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
          "source": "HSK3 generated prototype - Lesson 4",
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
          "source": "HSK3 generated prototype - Lesson 4",
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
          "source": "HSK3 generated prototype - Lesson 4",
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
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "wen hua",
          "tone": "wén huà"
        },
        {
          "stage": "phrase",
          "vi": "luôn luôn và mỉm cười",
          "hanzi": "总是笑着",
          "words": [
            {
              "text": "总是",
              "pinyin": "zong shi",
              "tone": "zǒng shì",
              "pos": "adv",
              "vi": "luôn luôn"
            },
            {
              "text": "笑着",
              "pinyin": "xiao zhe",
              "tone": "xiào zhe",
              "pos": "verb",
              "vi": "mỉm cười"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "zong shi xiao zhe",
          "tone": "zǒng shì xiào zhe"
        },
        {
          "stage": "phrase",
          "vi": "mỉm cười và khách",
          "hanzi": "笑着客人",
          "words": [
            {
              "text": "笑着",
              "pinyin": "xiao zhe",
              "tone": "xiào zhe",
              "pos": "verb",
              "vi": "mỉm cười"
            },
            {
              "text": "客人",
              "pinyin": "ke ren",
              "tone": "kè rén",
              "pos": "noun",
              "vi": "khách"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "xiao zhe ke ren",
          "tone": "xiào zhe kè rén"
        },
        {
          "stage": "phrase",
          "vi": "khách và kế hoạch",
          "hanzi": "客人计划",
          "words": [
            {
              "text": "客人",
              "pinyin": "ke ren",
              "tone": "kè rén",
              "pos": "noun",
              "vi": "khách"
            },
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "ke ren ji hua",
          "tone": "kè rén jì huà"
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
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "ji hua yi jing",
          "tone": "jì huà yǐ jīng"
        },
        {
          "stage": "sentence",
          "vi": "luôn luôn mỉm cười.",
          "hanzi": "总是笑着。",
          "words": [
            {
              "text": "总是",
              "pinyin": "zong shi",
              "tone": "zǒng shì",
              "pos": "adv",
              "vi": "luôn luôn"
            },
            {
              "text": "笑着",
              "pinyin": "xiao zhe",
              "tone": "xiào zhe",
              "pos": "verb",
              "vi": "mỉm cười"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "zong shi xiao zhe",
          "tone": "zǒng shì xiào zhe"
        },
        {
          "stage": "sentence",
          "vi": "mỉm cười có liên quan đến khách.",
          "hanzi": "笑着和客人有关。",
          "words": [
            {
              "text": "笑着",
              "pinyin": "xiao zhe",
              "tone": "xiào zhe",
              "pos": "verb",
              "vi": "mỉm cười"
            },
            {
              "text": "客人",
              "pinyin": "ke ren",
              "tone": "kè rén",
              "pos": "noun",
              "vi": "khách"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "xiao zhe ke ren",
          "tone": "xiào zhe kè rén"
        },
        {
          "stage": "sentence",
          "vi": "khách, kế hoạch, đã.",
          "hanzi": "客人计划已经。",
          "words": [
            {
              "text": "客人",
              "pinyin": "ke ren",
              "tone": "kè rén",
              "pos": "noun",
              "vi": "khách"
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
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "ke ren ji hua yi jing",
          "tone": "kè rén jì huà yǐ jīng"
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
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "yi jing fei chang zhong yao",
          "tone": "yǐ jīng fēi cháng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về luôn luôn và mỉm cười.",
          "hanzi": "总是笑着观点。",
          "words": [
            {
              "text": "总是",
              "pinyin": "zong shi",
              "tone": "zǒng shì",
              "pos": "adv",
              "vi": "luôn luôn"
            },
            {
              "text": "笑着",
              "pinyin": "xiao zhe",
              "tone": "xiào zhe",
              "pos": "verb",
              "vi": "mỉm cười"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "zong shi xiao zhe guan dian",
          "tone": "zǒng shì xiào zhe guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về mỉm cười và khách.",
          "hanzi": "笑着客人观点。",
          "words": [
            {
              "text": "笑着",
              "pinyin": "xiao zhe",
              "tone": "xiào zhe",
              "pos": "verb",
              "vi": "mỉm cười"
            },
            {
              "text": "客人",
              "pinyin": "ke ren",
              "tone": "kè rén",
              "pos": "noun",
              "vi": "khách"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 4",
          "pinyin": "xiao zhe ke ren guan dian",
          "tone": "xiào zhe kè rén guān diǎn"
        }
      ]
    },
    {
      "id": "hsk3-l5",
      "no": 5,
      "titleZh": "我最近越来越胖了",
      "titleVi": "Dạo này tôi ngày càng béo hơn",
      "items": [
        {
          "stage": "word",
          "vi": "gần đây",
          "hanzi": "最近",
          "words": [
            {
              "text": "最近",
              "pinyin": "zui jin",
              "tone": "zuì jìn",
              "pos": "adv",
              "vi": "gần đây"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "zui jin",
          "tone": "zuì jìn"
        },
        {
          "stage": "word",
          "vi": "ngày càng",
          "hanzi": "越来越",
          "words": [
            {
              "text": "越来越",
              "pinyin": "yue lai yue",
              "tone": "yuè lái yuè",
              "pos": "adv",
              "vi": "ngày càng"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "yue lai yue",
          "tone": "yuè lái yuè"
        },
        {
          "stage": "word",
          "vi": "béo, mập",
          "hanzi": "胖",
          "words": [
            {
              "text": "胖",
              "pinyin": "pang",
              "tone": "pàng",
              "pos": "adj",
              "vi": "béo, mập"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "pang",
          "tone": "pàng"
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
          "source": "HSK3 generated prototype - Lesson 5",
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
          "source": "HSK3 generated prototype - Lesson 5",
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
          "source": "HSK3 generated prototype - Lesson 5",
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
          "source": "HSK3 generated prototype - Lesson 5",
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
          "source": "HSK3 generated prototype - Lesson 5",
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
          "source": "HSK3 generated prototype - Lesson 5",
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
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "xue xi",
          "tone": "xué xí"
        },
        {
          "stage": "phrase",
          "vi": "gần đây và ngày càng",
          "hanzi": "最近越来越",
          "words": [
            {
              "text": "最近",
              "pinyin": "zui jin",
              "tone": "zuì jìn",
              "pos": "adv",
              "vi": "gần đây"
            },
            {
              "text": "越来越",
              "pinyin": "yue lai yue",
              "tone": "yuè lái yuè",
              "pos": "adv",
              "vi": "ngày càng"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "zui jin yue lai yue",
          "tone": "zuì jìn yuè lái yuè"
        },
        {
          "stage": "phrase",
          "vi": "ngày càng và béo, mập",
          "hanzi": "越来越胖",
          "words": [
            {
              "text": "越来越",
              "pinyin": "yue lai yue",
              "tone": "yuè lái yuè",
              "pos": "adv",
              "vi": "ngày càng"
            },
            {
              "text": "胖",
              "pinyin": "pang",
              "tone": "pàng",
              "pos": "adj",
              "vi": "béo, mập"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "yue lai yue pang",
          "tone": "yuè lái yuè pàng"
        },
        {
          "stage": "phrase",
          "vi": "béo, mập và đã",
          "hanzi": "胖已经",
          "words": [
            {
              "text": "胖",
              "pinyin": "pang",
              "tone": "pàng",
              "pos": "adj",
              "vi": "béo, mập"
            },
            {
              "text": "已经",
              "pinyin": "yi jing",
              "tone": "yǐ jīng",
              "pos": "adv",
              "vi": "đã"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "pang yi jing",
          "tone": "pàng yǐ jīng"
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
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "yi jing fei chang",
          "tone": "yǐ jīng fēi cháng"
        },
        {
          "stage": "sentence",
          "vi": "gần đây ngày càng.",
          "hanzi": "最近越来越。",
          "words": [
            {
              "text": "最近",
              "pinyin": "zui jin",
              "tone": "zuì jìn",
              "pos": "adv",
              "vi": "gần đây"
            },
            {
              "text": "越来越",
              "pinyin": "yue lai yue",
              "tone": "yuè lái yuè",
              "pos": "adv",
              "vi": "ngày càng"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "zui jin yue lai yue",
          "tone": "zuì jìn yuè lái yuè"
        },
        {
          "stage": "sentence",
          "vi": "ngày càng có liên quan đến béo, mập.",
          "hanzi": "越来越和胖有关。",
          "words": [
            {
              "text": "越来越",
              "pinyin": "yue lai yue",
              "tone": "yuè lái yuè",
              "pos": "adv",
              "vi": "ngày càng"
            },
            {
              "text": "胖",
              "pinyin": "pang",
              "tone": "pàng",
              "pos": "adj",
              "vi": "béo, mập"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "yue lai yue pang",
          "tone": "yuè lái yuè pàng"
        },
        {
          "stage": "sentence",
          "vi": "béo, mập, đã, rất.",
          "hanzi": "胖已经非常。",
          "words": [
            {
              "text": "胖",
              "pinyin": "pang",
              "tone": "pàng",
              "pos": "adj",
              "vi": "béo, mập"
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
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "pang yi jing fei chang",
          "tone": "pàng yǐ jīng fēi cháng"
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
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "fei chang fang bian zhong yao",
          "tone": "fēi cháng fāng biàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về gần đây và ngày càng.",
          "hanzi": "最近越来越观点。",
          "words": [
            {
              "text": "最近",
              "pinyin": "zui jin",
              "tone": "zuì jìn",
              "pos": "adv",
              "vi": "gần đây"
            },
            {
              "text": "越来越",
              "pinyin": "yue lai yue",
              "tone": "yuè lái yuè",
              "pos": "adv",
              "vi": "ngày càng"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "zui jin yue lai yue guan dian",
          "tone": "zuì jìn yuè lái yuè guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về ngày càng và béo, mập.",
          "hanzi": "越来越胖观点。",
          "words": [
            {
              "text": "越来越",
              "pinyin": "yue lai yue",
              "tone": "yuè lái yuè",
              "pos": "adv",
              "vi": "ngày càng"
            },
            {
              "text": "胖",
              "pinyin": "pang",
              "tone": "pàng",
              "pos": "adj",
              "vi": "béo, mập"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 5",
          "pinyin": "yue lai yue pang guan dian",
          "tone": "yuè lái yuè pàng guān diǎn"
        }
      ]
    }
  ]
};
});
