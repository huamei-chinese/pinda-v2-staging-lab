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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 16",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 17",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 18",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 19",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
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
          "source": "HSK3 generated prototype - Lesson 20",
          "pinyin": "peng you jie guo guan dian",
          "tone": "péng yǒu jié guǒ guān diǎn"
        }
      ]
    }
  ]
};
});
