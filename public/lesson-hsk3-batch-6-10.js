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
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "tu ran",
          "tone": "tū rán"
        },
        {
          "stage": "word",
          "vi": "không tìm thấy",
          "hanzi": "找不到",
          "words": [
            {
              "text": "找不到",
              "pinyin": "zhao bu dao",
              "tone": "zhǎo bú dào",
              "pos": "verb",
              "vi": "không tìm thấy"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "zhao bu dao",
          "tone": "zhǎo bú dào"
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
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "dong xi",
          "tone": "dōng xī"
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
          "source": "HSK3 generated prototype - Lesson 6",
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
          "source": "HSK3 generated prototype - Lesson 6",
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
          "source": "HSK3 generated prototype - Lesson 6",
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
          "source": "HSK3 generated prototype - Lesson 6",
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
          "source": "HSK3 generated prototype - Lesson 6",
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
          "source": "HSK3 generated prototype - Lesson 6",
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
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "gong zuo",
          "tone": "gōng zuò"
        },
        {
          "stage": "phrase",
          "vi": "đột nhiên và không tìm thấy",
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
              "text": "找不到",
              "pinyin": "zhao bu dao",
              "tone": "zhǎo bú dào",
              "pos": "verb",
              "vi": "không tìm thấy"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "tu ran zhao bu dao",
          "tone": "tū rán zhǎo bú dào"
        },
        {
          "stage": "phrase",
          "vi": "không tìm thấy và đồ vật",
          "hanzi": "找不到东西",
          "words": [
            {
              "text": "找不到",
              "pinyin": "zhao bu dao",
              "tone": "zhǎo bú dào",
              "pos": "verb",
              "vi": "không tìm thấy"
            },
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "zhao bu dao dong xi",
          "tone": "zhǎo bú dào dōng xī"
        },
        {
          "stage": "phrase",
          "vi": "đồ vật và rất",
          "hanzi": "东西非常",
          "words": [
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            },
            {
              "text": "非常",
              "pinyin": "fei chang",
              "tone": "fēi cháng",
              "pos": "adv",
              "vi": "rất"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "dong xi fei chang",
          "tone": "dōng xī fēi cháng"
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
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "fei chang fang bian",
          "tone": "fēi cháng fāng biàn"
        },
        {
          "stage": "sentence",
          "vi": "đột nhiên không tìm thấy.",
          "hanzi": "突然找不到。",
          "words": [
            {
              "text": "突然",
              "pinyin": "tu ran",
              "tone": "tū rán",
              "pos": "adv",
              "vi": "đột nhiên"
            },
            {
              "text": "找不到",
              "pinyin": "zhao bu dao",
              "tone": "zhǎo bú dào",
              "pos": "verb",
              "vi": "không tìm thấy"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "tu ran zhao bu dao",
          "tone": "tū rán zhǎo bú dào"
        },
        {
          "stage": "sentence",
          "vi": "không tìm thấy có liên quan đến đồ vật.",
          "hanzi": "找不到和东西有关。",
          "words": [
            {
              "text": "找不到",
              "pinyin": "zhao bu dao",
              "tone": "zhǎo bú dào",
              "pos": "verb",
              "vi": "không tìm thấy"
            },
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "zhao bu dao dong xi",
          "tone": "zhǎo bú dào dōng xī"
        },
        {
          "stage": "sentence",
          "vi": "đồ vật, rất, thuận tiện.",
          "hanzi": "东西非常方便。",
          "words": [
            {
              "text": "东西",
              "pinyin": "dong xi",
              "tone": "dōng xī",
              "pos": "noun",
              "vi": "đồ vật"
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
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "dong xi fei chang fang bian",
          "tone": "dōng xī fēi cháng fāng biàn"
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
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "fang bian ren zhen zhong yao",
          "tone": "fāng biàn rèn zhēn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đột nhiên và không tìm thấy.",
          "hanzi": "突然找不到观点。",
          "words": [
            {
              "text": "突然",
              "pinyin": "tu ran",
              "tone": "tū rán",
              "pos": "adv",
              "vi": "đột nhiên"
            },
            {
              "text": "找不到",
              "pinyin": "zhao bu dao",
              "tone": "zhǎo bú dào",
              "pos": "verb",
              "vi": "không tìm thấy"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "tu ran zhao bu dao guan dian",
          "tone": "tū rán zhǎo bú dào guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về không tìm thấy và đồ vật.",
          "hanzi": "找不到东西观点。",
          "words": [
            {
              "text": "找不到",
              "pinyin": "zhao bu dao",
              "tone": "zhǎo bú dào",
              "pos": "verb",
              "vi": "không tìm thấy"
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
          "source": "HSK3 generated prototype - Lesson 6",
          "pinyin": "zhao bu dao dong xi guan dian",
          "tone": "zhǎo bú dào dōng xī guān diǎn"
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
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "ren shi",
          "tone": "rèn shi"
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
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "wu nian",
          "tone": "wǔ nián"
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
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "peng you",
          "tone": "péng yǒu"
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
          "source": "HSK3 generated prototype - Lesson 7",
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
          "source": "HSK3 generated prototype - Lesson 7",
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
          "source": "HSK3 generated prototype - Lesson 7",
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
          "source": "HSK3 generated prototype - Lesson 7",
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
          "source": "HSK3 generated prototype - Lesson 7",
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
          "source": "HSK3 generated prototype - Lesson 7",
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
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "quen, biết và năm năm",
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
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "ren shi wu nian",
          "tone": "rèn shi wǔ nián"
        },
        {
          "stage": "phrase",
          "vi": "năm năm và bạn bè",
          "hanzi": "五年朋友",
          "words": [
            {
              "text": "五年",
              "pinyin": "wu nian",
              "tone": "wǔ nián",
              "pos": "noun",
              "vi": "năm năm"
            },
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "péng yǒu",
              "pos": "noun",
              "vi": "bạn bè"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "wu nian peng you",
          "tone": "wǔ nián péng yǒu"
        },
        {
          "stage": "phrase",
          "vi": "bạn bè và thuận tiện",
          "hanzi": "朋友方便",
          "words": [
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "péng yǒu",
              "pos": "noun",
              "vi": "bạn bè"
            },
            {
              "text": "方便",
              "pinyin": "fang bian",
              "tone": "fāng biàn",
              "pos": "adj",
              "vi": "thuận tiện"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "peng you fang bian",
          "tone": "péng yǒu fāng biàn"
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
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "fang bian ren zhen",
          "tone": "fāng biàn rèn zhēn"
        },
        {
          "stage": "sentence",
          "vi": "quen, biết năm năm.",
          "hanzi": "认识五年。",
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
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "ren shi wu nian",
          "tone": "rèn shi wǔ nián"
        },
        {
          "stage": "sentence",
          "vi": "năm năm có liên quan đến bạn bè.",
          "hanzi": "五年和朋友有关。",
          "words": [
            {
              "text": "五年",
              "pinyin": "wu nian",
              "tone": "wǔ nián",
              "pos": "noun",
              "vi": "năm năm"
            },
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "péng yǒu",
              "pos": "noun",
              "vi": "bạn bè"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "wu nian peng you",
          "tone": "wǔ nián péng yǒu"
        },
        {
          "stage": "sentence",
          "vi": "bạn bè, thuận tiện, nghiêm túc.",
          "hanzi": "朋友方便认真。",
          "words": [
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "péng yǒu",
              "pos": "noun",
              "vi": "bạn bè"
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
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "peng you fang bian ren zhen",
          "tone": "péng yǒu fāng biàn rèn zhēn"
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
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "ren zhen jie guo zhong yao",
          "tone": "rèn zhēn jié guǒ zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về quen, biết và năm năm.",
          "hanzi": "认识五年观点。",
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
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "ren shi wu nian guan dian",
          "tone": "rèn shi wǔ nián guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về năm năm và bạn bè.",
          "hanzi": "五年朋友观点。",
          "words": [
            {
              "text": "五年",
              "pinyin": "wu nian",
              "tone": "wǔ nián",
              "pos": "noun",
              "vi": "năm năm"
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
          "source": "HSK3 generated prototype - Lesson 7",
          "pinyin": "wu nian peng you guan dian",
          "tone": "wǔ nián péng yǒu guān diǎn"
        }
      ]
    },
    {
      "id": "hsk3-l8",
      "no": 8,
      "titleZh": "你去哪儿我就去哪儿",
      "titleVi": "Bạn đi đâu tôi đi đó",
      "items": [
        {
          "stage": "word",
          "vi": "đi đâu",
          "hanzi": "去哪儿",
          "words": [
            {
              "text": "去哪儿",
              "pinyin": "qu na er",
              "tone": "qù nǎ ér",
              "pos": "verb",
              "vi": "đi đâu"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "qu na er",
          "tone": "qù nǎ ér"
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
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "hui lai",
          "tone": "huí lái"
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
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "ji hua",
          "tone": "jì huà"
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
          "source": "HSK3 generated prototype - Lesson 8",
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
          "source": "HSK3 generated prototype - Lesson 8",
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
          "source": "HSK3 generated prototype - Lesson 8",
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
          "source": "HSK3 generated prototype - Lesson 8",
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
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
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
          "source": "HSK3 generated prototype - Lesson 8",
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
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "fei chang",
          "tone": "fēi cháng"
        },
        {
          "stage": "phrase",
          "vi": "đi đâu và trở về",
          "hanzi": "去哪儿回来",
          "words": [
            {
              "text": "去哪儿",
              "pinyin": "qu na er",
              "tone": "qù nǎ ér",
              "pos": "verb",
              "vi": "đi đâu"
            },
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "qu na er hui lai",
          "tone": "qù nǎ ér huí lái"
        },
        {
          "stage": "phrase",
          "vi": "trở về và kế hoạch",
          "hanzi": "回来计划",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "hui lai ji hua",
          "tone": "huí lái jì huà"
        },
        {
          "stage": "phrase",
          "vi": "kế hoạch và kết quả",
          "hanzi": "计划结果",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "ji hua jie guo",
          "tone": "jì huà jié guǒ"
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
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "jie guo wen hua",
          "tone": "jié guǒ wén huà"
        },
        {
          "stage": "sentence",
          "vi": "đi đâu trở về.",
          "hanzi": "去哪儿回来。",
          "words": [
            {
              "text": "去哪儿",
              "pinyin": "qu na er",
              "tone": "qù nǎ ér",
              "pos": "verb",
              "vi": "đi đâu"
            },
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "qu na er hui lai",
          "tone": "qù nǎ ér huí lái"
        },
        {
          "stage": "sentence",
          "vi": "trở về có liên quan đến kế hoạch.",
          "hanzi": "回来和计划有关。",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "hui lai ji hua",
          "tone": "huí lái jì huà"
        },
        {
          "stage": "sentence",
          "vi": "kế hoạch, kết quả, văn hóa.",
          "hanzi": "计划结果文化。",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
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
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "ji hua jie guo wen hua",
          "tone": "jì huà jié guǒ wén huà"
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
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "wen hua xue xi zhong yao",
          "tone": "wén huà xué xí zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đi đâu và trở về.",
          "hanzi": "去哪儿回来观点。",
          "words": [
            {
              "text": "去哪儿",
              "pinyin": "qu na er",
              "tone": "qù nǎ ér",
              "pos": "verb",
              "vi": "đi đâu"
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
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "qu na er hui lai guan dian",
          "tone": "qù nǎ ér huí lái guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về trở về và kế hoạch.",
          "hanzi": "回来计划观点。",
          "words": [
            {
              "text": "回来",
              "pinyin": "hui lai",
              "tone": "huí lái",
              "pos": "verb",
              "vi": "trở về"
            },
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "jì huà",
              "pos": "noun",
              "vi": "kế hoạch"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 8",
          "pinyin": "hui lai ji hua guan dian",
          "tone": "huí lái jì huà guān diǎn"
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
          "source": "HSK3 generated prototype - Lesson 9",
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
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "zhong guo ren",
          "tone": "zhōng guó rén"
        },
        {
          "stage": "word",
          "vi": "giống nhau",
          "hanzi": "一样",
          "words": [
            {
              "text": "一样",
              "pinyin": "yi yang",
              "tone": "yí yàng",
              "pos": "adj",
              "vi": "giống nhau"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "yi yang",
          "tone": "yí yàng"
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
          "source": "HSK3 generated prototype - Lesson 9",
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
          "source": "HSK3 generated prototype - Lesson 9",
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
          "source": "HSK3 generated prototype - Lesson 9",
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
          "source": "HSK3 generated prototype - Lesson 9",
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
          "source": "HSK3 generated prototype - Lesson 9",
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
          "source": "HSK3 generated prototype - Lesson 9",
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
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "yi jing",
          "tone": "yǐ jīng"
        },
        {
          "stage": "phrase",
          "vi": "tiếng Trung và người Trung Quốc",
          "hanzi": "汉语中国人",
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
            }
          ],
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "han yu zhong guo ren",
          "tone": "hàn yǔ zhōng guó rén"
        },
        {
          "stage": "phrase",
          "vi": "người Trung Quốc và giống nhau",
          "hanzi": "中国人一样",
          "words": [
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
              "vi": "giống nhau"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "zhong guo ren yi yang",
          "tone": "zhōng guó rén yí yàng"
        },
        {
          "stage": "phrase",
          "vi": "giống nhau và kết quả",
          "hanzi": "一样结果",
          "words": [
            {
              "text": "一样",
              "pinyin": "yi yang",
              "tone": "yí yàng",
              "pos": "adj",
              "vi": "giống nhau"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "yi yang jie guo",
          "tone": "yí yàng jié guǒ"
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
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "jie guo wen hua",
          "tone": "jié guǒ wén huà"
        },
        {
          "stage": "sentence",
          "vi": "tiếng Trung người Trung Quốc.",
          "hanzi": "汉语中国人。",
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
            }
          ],
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "han yu zhong guo ren",
          "tone": "hàn yǔ zhōng guó rén"
        },
        {
          "stage": "sentence",
          "vi": "người Trung Quốc có liên quan đến giống nhau.",
          "hanzi": "中国人和一样有关。",
          "words": [
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
              "vi": "giống nhau"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "zhong guo ren yi yang",
          "tone": "zhōng guó rén yí yàng"
        },
        {
          "stage": "sentence",
          "vi": "giống nhau, kết quả, văn hóa.",
          "hanzi": "一样结果文化。",
          "words": [
            {
              "text": "一样",
              "pinyin": "yi yang",
              "tone": "yí yàng",
              "pos": "adj",
              "vi": "giống nhau"
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
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "yi yang jie guo wen hua",
          "tone": "yí yàng jié guǒ wén huà"
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
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "wen hua xue xi zhong yao",
          "tone": "wén huà xué xí zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về tiếng Trung và người Trung Quốc.",
          "hanzi": "汉语中国人观点。",
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
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "han yu zhong guo ren guan dian",
          "tone": "hàn yǔ zhōng guó rén guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về người Trung Quốc và giống nhau.",
          "hanzi": "中国人一样观点。",
          "words": [
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
              "vi": "giống nhau"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 9",
          "pinyin": "zhong guo ren yi yang guan dian",
          "tone": "zhōng guó rén yí yàng guān diǎn"
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
          "source": "HSK3 generated prototype - Lesson 10",
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
          "source": "HSK3 generated prototype - Lesson 10",
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
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "nan",
          "tone": "nán"
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
          "source": "HSK3 generated prototype - Lesson 10",
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
          "source": "HSK3 generated prototype - Lesson 10",
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
          "source": "HSK3 generated prototype - Lesson 10",
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
          "source": "HSK3 generated prototype - Lesson 10",
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
          "source": "HSK3 generated prototype - Lesson 10",
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
          "source": "HSK3 generated prototype - Lesson 10",
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
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "fei chang",
          "tone": "fēi cháng"
        },
        {
          "stage": "phrase",
          "vi": "toán học và lịch sử",
          "hanzi": "数学历史",
          "words": [
            {
              "text": "数学",
              "pinyin": "shu xue",
              "tone": "shù xué",
              "pos": "noun",
              "vi": "toán học"
            },
            {
              "text": "历史",
              "pinyin": "li shi",
              "tone": "lì shǐ",
              "pos": "noun",
              "vi": "lịch sử"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "shu xue li shi",
          "tone": "shù xué lì shǐ"
        },
        {
          "stage": "phrase",
          "vi": "lịch sử và khó",
          "hanzi": "历史难",
          "words": [
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
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "li shi nan",
          "tone": "lì shǐ nán"
        },
        {
          "stage": "phrase",
          "vi": "khó và văn hóa",
          "hanzi": "难文化",
          "words": [
            {
              "text": "难",
              "pinyin": "nan",
              "tone": "nán",
              "pos": "adj",
              "vi": "khó"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "nan wen hua",
          "tone": "nán wén huà"
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
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "wen hua xue xi",
          "tone": "wén huà xué xí"
        },
        {
          "stage": "sentence",
          "vi": "toán học lịch sử.",
          "hanzi": "数学历史。",
          "words": [
            {
              "text": "数学",
              "pinyin": "shu xue",
              "tone": "shù xué",
              "pos": "noun",
              "vi": "toán học"
            },
            {
              "text": "历史",
              "pinyin": "li shi",
              "tone": "lì shǐ",
              "pos": "noun",
              "vi": "lịch sử"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "shu xue li shi",
          "tone": "shù xué lì shǐ"
        },
        {
          "stage": "sentence",
          "vi": "lịch sử có liên quan đến khó.",
          "hanzi": "历史和难有关。",
          "words": [
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
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "li shi nan",
          "tone": "lì shǐ nán"
        },
        {
          "stage": "sentence",
          "vi": "khó, văn hóa, học.",
          "hanzi": "难文化学习。",
          "words": [
            {
              "text": "难",
              "pinyin": "nan",
              "tone": "nán",
              "pos": "adj",
              "vi": "khó"
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
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "nan wen hua xue xi",
          "tone": "nán wén huà xué xí"
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
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "xue xi gong zuo zhong yao",
          "tone": "xué xí gōng zuò zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về toán học và lịch sử.",
          "hanzi": "数学历史观点。",
          "words": [
            {
              "text": "数学",
              "pinyin": "shu xue",
              "tone": "shù xué",
              "pos": "noun",
              "vi": "toán học"
            },
            {
              "text": "历史",
              "pinyin": "li shi",
              "tone": "lì shǐ",
              "pos": "noun",
              "vi": "lịch sử"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "shu xue li shi guan dian",
          "tone": "shù xué lì shǐ guān diǎn"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về lịch sử và khó.",
          "hanzi": "历史难观点。",
          "words": [
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
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK3 generated prototype - Lesson 10",
          "pinyin": "li shi nan guan dian",
          "tone": "lì shǐ nán guān diǎn"
        }
      ]
    }
  ]
};
});
