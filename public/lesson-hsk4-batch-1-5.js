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
  "level": "HSK4",
  "lessons": [
    {
      "id": "hsk4-l1",
      "no": 1,
      "titleZh": "简单的爱情",
      "titleVi": "Tình yêu giản dị",
      "items": [
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
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "jian dan",
          "tone": "jiǎn dān"
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
          "source": "HSK4 generated prototype - Lesson 1",
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
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "sheng huo",
          "tone": "shēng huó"
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
          "source": "HSK4 generated prototype - Lesson 1",
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
          "source": "HSK4 generated prototype - Lesson 1",
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
          "source": "HSK4 generated prototype - Lesson 1",
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
          "source": "HSK4 generated prototype - Lesson 1",
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
          "source": "HSK4 generated prototype - Lesson 1",
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
          "source": "HSK4 generated prototype - Lesson 1",
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
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "ren zhen",
          "tone": "rèn zhēn"
        },
        {
          "stage": "phrase",
          "vi": "đơn giản và tình yêu",
          "hanzi": "简单爱情",
          "words": [
            {
              "text": "简单",
              "pinyin": "jian dan",
              "tone": "jiǎn dān",
              "pos": "adj",
              "vi": "đơn giản"
            },
            {
              "text": "爱情",
              "pinyin": "ai qing",
              "tone": "ài qíng",
              "pos": "noun",
              "vi": "tình yêu"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "jian dan ai qing",
          "tone": "jiǎn dān ài qíng"
        },
        {
          "stage": "phrase",
          "vi": "tình yêu và cuộc sống",
          "hanzi": "爱情生活",
          "words": [
            {
              "text": "爱情",
              "pinyin": "ai qing",
              "tone": "ài qíng",
              "pos": "noun",
              "vi": "tình yêu"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "ai qing sheng huo",
          "tone": "ài qíng shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và học",
          "hanzi": "生活学习",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "sheng huo xue xi",
          "tone": "shēng huó xué xí"
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
          "source": "HSK4 generated prototype - Lesson 1",
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
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "gong zuo jiao liu",
          "tone": "gōng zuò jiāo liú"
        },
        {
          "stage": "sentence",
          "vi": "đơn giản tình yêu.",
          "hanzi": "简单爱情。",
          "words": [
            {
              "text": "简单",
              "pinyin": "jian dan",
              "tone": "jiǎn dān",
              "pos": "adj",
              "vi": "đơn giản"
            },
            {
              "text": "爱情",
              "pinyin": "ai qing",
              "tone": "ài qíng",
              "pos": "noun",
              "vi": "tình yêu"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "jian dan ai qing",
          "tone": "jiǎn dān ài qíng"
        },
        {
          "stage": "sentence",
          "vi": "tình yêu có liên quan đến cuộc sống.",
          "hanzi": "爱情和生活有关。",
          "words": [
            {
              "text": "爱情",
              "pinyin": "ai qing",
              "tone": "ài qíng",
              "pos": "noun",
              "vi": "tình yêu"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "ai qing sheng huo",
          "tone": "ài qíng shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống, học, công việc.",
          "hanzi": "生活学习工作。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
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
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "sheng huo xue xi gong zuo",
          "tone": "shēng huó xué xí gōng zuò"
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
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "gong zuo jiao liu zhong yao",
          "tone": "gōng zuò jiāo liú zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đơn giản và tình yêu.",
          "hanzi": "简单爱情观点。",
          "words": [
            {
              "text": "简单",
              "pinyin": "jian dan",
              "tone": "jiǎn dān",
              "pos": "adj",
              "vi": "đơn giản"
            },
            {
              "text": "爱情",
              "pinyin": "ai qing",
              "tone": "ài qíng",
              "pos": "noun",
              "vi": "tình yêu"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 1",
          "pinyin": "jian dan ai qing guan dian",
          "tone": "jiǎn dān ài qíng guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l2",
      "no": 2,
      "titleZh": "真正的朋友",
      "titleVi": "Người bạn thật sự",
      "items": [
        {
          "stage": "word",
          "vi": "thật sự",
          "hanzi": "真正",
          "words": [
            {
              "text": "真正",
              "pinyin": "zhen zheng",
              "tone": "zhēn zhèng",
              "pos": "adj",
              "vi": "thật sự"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "zhen zheng",
          "tone": "zhēn zhèng"
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
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "peng you",
          "tone": "péng yǒu"
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
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "sheng huo",
          "tone": "shēng huó"
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
          "source": "HSK4 generated prototype - Lesson 2",
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
          "source": "HSK4 generated prototype - Lesson 2",
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
          "source": "HSK4 generated prototype - Lesson 2",
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
          "source": "HSK4 generated prototype - Lesson 2",
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
          "source": "HSK4 generated prototype - Lesson 2",
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
          "source": "HSK4 generated prototype - Lesson 2",
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
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "jie guo",
          "tone": "jié guǒ"
        },
        {
          "stage": "phrase",
          "vi": "thật sự và bạn bè",
          "hanzi": "真正朋友",
          "words": [
            {
              "text": "真正",
              "pinyin": "zhen zheng",
              "tone": "zhēn zhèng",
              "pos": "adj",
              "vi": "thật sự"
            },
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "péng yǒu",
              "pos": "noun",
              "vi": "bạn bè"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "zhen zheng peng you",
          "tone": "zhēn zhèng péng yǒu"
        },
        {
          "stage": "phrase",
          "vi": "bạn bè và cuộc sống",
          "hanzi": "朋友生活",
          "words": [
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "péng yǒu",
              "pos": "noun",
              "vi": "bạn bè"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "peng you sheng huo",
          "tone": "péng yǒu shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và công việc",
          "hanzi": "生活工作",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "sheng huo gong zuo",
          "tone": "shēng huó gōng zuò"
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
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "gong zuo jiao liu",
          "tone": "gōng zuò jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "giao tiếp và văn hóa",
          "hanzi": "交流文化",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "jiao liu wen hua",
          "tone": "jiāo liú wén huà"
        },
        {
          "stage": "sentence",
          "vi": "thật sự bạn bè.",
          "hanzi": "真正朋友。",
          "words": [
            {
              "text": "真正",
              "pinyin": "zhen zheng",
              "tone": "zhēn zhèng",
              "pos": "adj",
              "vi": "thật sự"
            },
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "péng yǒu",
              "pos": "noun",
              "vi": "bạn bè"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "zhen zheng peng you",
          "tone": "zhēn zhèng péng yǒu"
        },
        {
          "stage": "sentence",
          "vi": "bạn bè có liên quan đến cuộc sống.",
          "hanzi": "朋友和生活有关。",
          "words": [
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "péng yǒu",
              "pos": "noun",
              "vi": "bạn bè"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "peng you sheng huo",
          "tone": "péng yǒu shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống, công việc, giao tiếp.",
          "hanzi": "生活工作交流。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
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
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "sheng huo gong zuo jiao liu",
          "tone": "shēng huó gōng zuò jiāo liú"
        },
        {
          "stage": "sentence",
          "vi": "giao tiếp và văn hóa rất quan trọng.",
          "hanzi": "交流文化很重要。",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "jiao liu wen hua zhong yao",
          "tone": "jiāo liú wén huà zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về thật sự và bạn bè.",
          "hanzi": "真正朋友观点。",
          "words": [
            {
              "text": "真正",
              "pinyin": "zhen zheng",
              "tone": "zhēn zhèng",
              "pos": "adj",
              "vi": "thật sự"
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
          "source": "HSK4 generated prototype - Lesson 2",
          "pinyin": "zhen zheng peng you guan dian",
          "tone": "zhēn zhèng péng yǒu guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l3",
      "no": 3,
      "titleZh": "经理对我印象不错",
      "titleVi": "Người quản lý có ấn tượng tốt với tôi",
      "items": [
        {
          "stage": "word",
          "vi": "quản lý",
          "hanzi": "经理",
          "words": [
            {
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jīng lǐ",
              "pos": "noun",
              "vi": "quản lý"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "jing li",
          "tone": "jīng lǐ"
        },
        {
          "stage": "word",
          "vi": "ấn tượng",
          "hanzi": "印象",
          "words": [
            {
              "text": "印象",
              "pinyin": "yin xiang",
              "tone": "yìn xiàng",
              "pos": "noun",
              "vi": "ấn tượng"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "yin xiang",
          "tone": "yìn xiàng"
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
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "gong zuo",
          "tone": "gōng zuò"
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
          "source": "HSK4 generated prototype - Lesson 3",
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
          "source": "HSK4 generated prototype - Lesson 3",
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
          "source": "HSK4 generated prototype - Lesson 3",
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
          "source": "HSK4 generated prototype - Lesson 3",
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
          "source": "HSK4 generated prototype - Lesson 3",
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
          "source": "HSK4 generated prototype - Lesson 3",
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
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "jing yan",
          "tone": "jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "quản lý và ấn tượng",
          "hanzi": "经理印象",
          "words": [
            {
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jīng lǐ",
              "pos": "noun",
              "vi": "quản lý"
            },
            {
              "text": "印象",
              "pinyin": "yin xiang",
              "tone": "yìn xiàng",
              "pos": "noun",
              "vi": "ấn tượng"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "jing li yin xiang",
          "tone": "jīng lǐ yìn xiàng"
        },
        {
          "stage": "phrase",
          "vi": "ấn tượng và công việc",
          "hanzi": "印象工作",
          "words": [
            {
              "text": "印象",
              "pinyin": "yin xiang",
              "tone": "yìn xiàng",
              "pos": "noun",
              "vi": "ấn tượng"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "yin xiang gong zuo",
          "tone": "yìn xiàng gōng zuò"
        },
        {
          "stage": "phrase",
          "vi": "công việc và văn hóa",
          "hanzi": "工作文化",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "gong zuo wen hua",
          "tone": "gōng zuò wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và cách thức",
          "hanzi": "文化方式",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "wen hua fang shi",
          "tone": "wén huà fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "cách thức và tiếp tục",
          "hanzi": "方式继续",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "继续",
              "pinyin": "ji xu",
              "tone": "jì xù",
              "pos": "verb",
              "vi": "tiếp tục"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "fang shi ji xu",
          "tone": "fāng shì jì xù"
        },
        {
          "stage": "sentence",
          "vi": "quản lý ấn tượng.",
          "hanzi": "经理印象。",
          "words": [
            {
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jīng lǐ",
              "pos": "noun",
              "vi": "quản lý"
            },
            {
              "text": "印象",
              "pinyin": "yin xiang",
              "tone": "yìn xiàng",
              "pos": "noun",
              "vi": "ấn tượng"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "jing li yin xiang",
          "tone": "jīng lǐ yìn xiàng"
        },
        {
          "stage": "sentence",
          "vi": "ấn tượng có liên quan đến công việc.",
          "hanzi": "印象和工作有关。",
          "words": [
            {
              "text": "印象",
              "pinyin": "yin xiang",
              "tone": "yìn xiàng",
              "pos": "noun",
              "vi": "ấn tượng"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "yin xiang gong zuo",
          "tone": "yìn xiàng gōng zuò"
        },
        {
          "stage": "sentence",
          "vi": "công việc, văn hóa, cách thức.",
          "hanzi": "工作文化方式。",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "gong zuo wen hua fang shi",
          "tone": "gōng zuò wén huà fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "cách thức và tiếp tục rất quan trọng.",
          "hanzi": "方式继续很重要。",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "继续",
              "pinyin": "ji xu",
              "tone": "jì xù",
              "pos": "verb",
              "vi": "tiếp tục"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "fang shi ji xu zhong yao",
          "tone": "fāng shì jì xù zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về quản lý và ấn tượng.",
          "hanzi": "经理印象观点。",
          "words": [
            {
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jīng lǐ",
              "pos": "noun",
              "vi": "quản lý"
            },
            {
              "text": "印象",
              "pinyin": "yin xiang",
              "tone": "yìn xiàng",
              "pos": "noun",
              "vi": "ấn tượng"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 3",
          "pinyin": "jing li yin xiang guan dian",
          "tone": "jīng lǐ yìn xiàng guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l4",
      "no": 4,
      "titleZh": "不要太着急赚钱",
      "titleVi": "Đừng quá vội kiếm tiền",
      "items": [
        {
          "stage": "word",
          "vi": "sốt ruột",
          "hanzi": "着急",
          "words": [
            {
              "text": "着急",
              "pinyin": "zhao ji",
              "tone": "zháo jí",
              "pos": "adj",
              "vi": "sốt ruột"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "zhao ji",
          "tone": "zháo jí"
        },
        {
          "stage": "word",
          "vi": "kiếm tiền",
          "hanzi": "赚钱",
          "words": [
            {
              "text": "赚钱",
              "pinyin": "zhuan qian",
              "tone": "zhuàn qián",
              "pos": "verb",
              "vi": "kiếm tiền"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "zhuan qian",
          "tone": "zhuàn qián"
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
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "sheng huo",
          "tone": "shēng huó"
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
          "source": "HSK4 generated prototype - Lesson 4",
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
          "source": "HSK4 generated prototype - Lesson 4",
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
          "source": "HSK4 generated prototype - Lesson 4",
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
          "source": "HSK4 generated prototype - Lesson 4",
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
          "source": "HSK4 generated prototype - Lesson 4",
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
          "source": "HSK4 generated prototype - Lesson 4",
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
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "jing yan",
          "tone": "jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "sốt ruột và kiếm tiền",
          "hanzi": "着急赚钱",
          "words": [
            {
              "text": "着急",
              "pinyin": "zhao ji",
              "tone": "zháo jí",
              "pos": "adj",
              "vi": "sốt ruột"
            },
            {
              "text": "赚钱",
              "pinyin": "zhuan qian",
              "tone": "zhuàn qián",
              "pos": "verb",
              "vi": "kiếm tiền"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "zhao ji zhuan qian",
          "tone": "zháo jí zhuàn qián"
        },
        {
          "stage": "phrase",
          "vi": "kiếm tiền và cuộc sống",
          "hanzi": "赚钱生活",
          "words": [
            {
              "text": "赚钱",
              "pinyin": "zhuan qian",
              "tone": "zhuàn qián",
              "pos": "verb",
              "vi": "kiếm tiền"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "zhuan qian sheng huo",
          "tone": "zhuàn qián shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và văn hóa",
          "hanzi": "生活文化",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "sheng huo wen hua",
          "tone": "shēng huó wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và cách thức",
          "hanzi": "文化方式",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "wen hua fang shi",
          "tone": "wén huà fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "cách thức và tiếp tục",
          "hanzi": "方式继续",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "继续",
              "pinyin": "ji xu",
              "tone": "jì xù",
              "pos": "verb",
              "vi": "tiếp tục"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "fang shi ji xu",
          "tone": "fāng shì jì xù"
        },
        {
          "stage": "sentence",
          "vi": "sốt ruột kiếm tiền.",
          "hanzi": "着急赚钱。",
          "words": [
            {
              "text": "着急",
              "pinyin": "zhao ji",
              "tone": "zháo jí",
              "pos": "adj",
              "vi": "sốt ruột"
            },
            {
              "text": "赚钱",
              "pinyin": "zhuan qian",
              "tone": "zhuàn qián",
              "pos": "verb",
              "vi": "kiếm tiền"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "zhao ji zhuan qian",
          "tone": "zháo jí zhuàn qián"
        },
        {
          "stage": "sentence",
          "vi": "kiếm tiền có liên quan đến cuộc sống.",
          "hanzi": "赚钱和生活有关。",
          "words": [
            {
              "text": "赚钱",
              "pinyin": "zhuan qian",
              "tone": "zhuàn qián",
              "pos": "verb",
              "vi": "kiếm tiền"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "zhuan qian sheng huo",
          "tone": "zhuàn qián shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống, văn hóa, cách thức.",
          "hanzi": "生活文化方式。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "sheng huo wen hua fang shi",
          "tone": "shēng huó wén huà fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "cách thức và tiếp tục rất quan trọng.",
          "hanzi": "方式继续很重要。",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "继续",
              "pinyin": "ji xu",
              "tone": "jì xù",
              "pos": "verb",
              "vi": "tiếp tục"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "fang shi ji xu zhong yao",
          "tone": "fāng shì jì xù zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về sốt ruột và kiếm tiền.",
          "hanzi": "着急赚钱观点。",
          "words": [
            {
              "text": "着急",
              "pinyin": "zhao ji",
              "tone": "zháo jí",
              "pos": "adj",
              "vi": "sốt ruột"
            },
            {
              "text": "赚钱",
              "pinyin": "zhuan qian",
              "tone": "zhuàn qián",
              "pos": "verb",
              "vi": "kiếm tiền"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 4",
          "pinyin": "zhao ji zhuan qian guan dian",
          "tone": "zháo jí zhuàn qián guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l5",
      "no": 5,
      "titleZh": "只买对的，不买贵的",
      "titleVi": "Chỉ mua thứ phù hợp, không mua thứ đắt",
      "items": [
        {
          "stage": "word",
          "vi": "mua đúng thứ phù hợp",
          "hanzi": "买对的",
          "words": [
            {
              "text": "买对的",
              "pinyin": "mai dui de",
              "tone": "mǎi duì de",
              "pos": "verb",
              "vi": "mua đúng thứ phù hợp"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "mai dui de",
          "tone": "mǎi duì de"
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
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "gui",
          "tone": "guì"
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
          "source": "HSK4 generated prototype - Lesson 5",
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
          "source": "HSK4 generated prototype - Lesson 5",
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
          "source": "HSK4 generated prototype - Lesson 5",
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
          "source": "HSK4 generated prototype - Lesson 5",
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
          "source": "HSK4 generated prototype - Lesson 5",
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
          "source": "HSK4 generated prototype - Lesson 5",
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
          "source": "HSK4 generated prototype - Lesson 5",
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
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "gong zuo",
          "tone": "gōng zuò"
        },
        {
          "stage": "phrase",
          "vi": "mua đúng thứ phù hợp và đắt",
          "hanzi": "买对的贵",
          "words": [
            {
              "text": "买对的",
              "pinyin": "mai dui de",
              "tone": "mǎi duì de",
              "pos": "verb",
              "vi": "mua đúng thứ phù hợp"
            },
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "guì",
              "pos": "adj",
              "vi": "đắt"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "mai dui de gui",
          "tone": "mǎi duì de guì"
        },
        {
          "stage": "phrase",
          "vi": "đắt và cách thức",
          "hanzi": "贵方式",
          "words": [
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "guì",
              "pos": "adj",
              "vi": "đắt"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "gui fang shi",
          "tone": "guì fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "cách thức và tiếp tục",
          "hanzi": "方式继续",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "继续",
              "pinyin": "ji xu",
              "tone": "jì xù",
              "pos": "verb",
              "vi": "tiếp tục"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "fang shi ji xu",
          "tone": "fāng shì jì xù"
        },
        {
          "stage": "phrase",
          "vi": "tiếp tục và nghiêm túc",
          "hanzi": "继续认真",
          "words": [
            {
              "text": "继续",
              "pinyin": "ji xu",
              "tone": "jì xù",
              "pos": "verb",
              "vi": "tiếp tục"
            },
            {
              "text": "认真",
              "pinyin": "ren zhen",
              "tone": "rèn zhēn",
              "pos": "adj",
              "vi": "nghiêm túc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "ji xu ren zhen",
          "tone": "jì xù rèn zhēn"
        },
        {
          "stage": "phrase",
          "vi": "nghiêm túc và kết quả",
          "hanzi": "认真结果",
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
            }
          ],
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "ren zhen jie guo",
          "tone": "rèn zhēn jié guǒ"
        },
        {
          "stage": "sentence",
          "vi": "mua đúng thứ phù hợp đắt.",
          "hanzi": "买对的贵。",
          "words": [
            {
              "text": "买对的",
              "pinyin": "mai dui de",
              "tone": "mǎi duì de",
              "pos": "verb",
              "vi": "mua đúng thứ phù hợp"
            },
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "guì",
              "pos": "adj",
              "vi": "đắt"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "mai dui de gui",
          "tone": "mǎi duì de guì"
        },
        {
          "stage": "sentence",
          "vi": "đắt có liên quan đến cách thức.",
          "hanzi": "贵和方式有关。",
          "words": [
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "guì",
              "pos": "adj",
              "vi": "đắt"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "gui fang shi",
          "tone": "guì fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "cách thức, tiếp tục, nghiêm túc.",
          "hanzi": "方式继续认真。",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "继续",
              "pinyin": "ji xu",
              "tone": "jì xù",
              "pos": "verb",
              "vi": "tiếp tục"
            },
            {
              "text": "认真",
              "pinyin": "ren zhen",
              "tone": "rèn zhēn",
              "pos": "adj",
              "vi": "nghiêm túc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "fang shi ji xu ren zhen",
          "tone": "fāng shì jì xù rèn zhēn"
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
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "ren zhen jie guo zhong yao",
          "tone": "rèn zhēn jié guǒ zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về mua đúng thứ phù hợp và đắt.",
          "hanzi": "买对的贵观点。",
          "words": [
            {
              "text": "买对的",
              "pinyin": "mai dui de",
              "tone": "mǎi duì de",
              "pos": "verb",
              "vi": "mua đúng thứ phù hợp"
            },
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "guì",
              "pos": "adj",
              "vi": "đắt"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 5",
          "pinyin": "mai dui de gui guan dian",
          "tone": "mǎi duì de guì guān diǎn"
        }
      ]
    }
  ]
};
});
