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
  "level": "HSK5",
  "lessons": [
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
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
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "nei rong",
          "tone": "nèi róng"
        },
        {
          "stage": "phrase",
          "vi": "cưa bỏ và cuộc sống",
          "hanzi": "锯掉生活",
          "words": [
            {
              "text": "锯掉",
              "pinyin": "ju diao",
              "tone": "jù diào",
              "pos": "verb",
              "vi": "cưa bỏ"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "ju diao sheng huo",
          "tone": "jù diào shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và đáy giỏ",
          "hanzi": "生活筐底",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "筐底",
              "pinyin": "kuang di",
              "tone": "kuāng dǐ",
              "pos": "noun",
              "vi": "đáy giỏ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "sheng huo kuang di",
          "tone": "shēng huó kuāng dǐ"
        },
        {
          "stage": "phrase",
          "vi": "đáy giỏ và quan điểm",
          "hanzi": "筐底观点",
          "words": [
            {
              "text": "筐底",
              "pinyin": "kuang di",
              "tone": "kuāng dǐ",
              "pos": "noun",
              "vi": "đáy giỏ"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "kuang di guan dian",
          "tone": "kuāng dǐ guān diǎn"
        },
        {
          "stage": "phrase",
          "vi": "quan điểm và phán đoán",
          "hanzi": "观点判断",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "guan dian pan duan",
          "tone": "guān diǎn pàn duàn"
        },
        {
          "stage": "phrase",
          "vi": "phán đoán và điều tra",
          "hanzi": "判断调查",
          "words": [
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            },
            {
              "text": "调查",
              "pinyin": "diao cha",
              "tone": "diào chá",
              "pos": "noun",
              "vi": "điều tra"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "pan duan diao cha",
          "tone": "pàn duàn diào chá"
        },
        {
          "stage": "sentence",
          "vi": "cưa bỏ cuộc sống.",
          "hanzi": "锯掉生活。",
          "words": [
            {
              "text": "锯掉",
              "pinyin": "ju diao",
              "tone": "jù diào",
              "pos": "verb",
              "vi": "cưa bỏ"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "ju diao sheng huo",
          "tone": "jù diào shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống có liên quan đến đáy giỏ.",
          "hanzi": "生活和筐底有关。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "筐底",
              "pinyin": "kuang di",
              "tone": "kuāng dǐ",
              "pos": "noun",
              "vi": "đáy giỏ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "sheng huo kuang di",
          "tone": "shēng huó kuāng dǐ"
        },
        {
          "stage": "sentence",
          "vi": "đáy giỏ, quan điểm, phán đoán.",
          "hanzi": "筐底观点判断。",
          "words": [
            {
              "text": "筐底",
              "pinyin": "kuang di",
              "tone": "kuāng dǐ",
              "pos": "noun",
              "vi": "đáy giỏ"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "kuang di guan dian pan duan",
          "tone": "kuāng dǐ guān diǎn pàn duàn"
        },
        {
          "stage": "sentence",
          "vi": "phán đoán và điều tra rất quan trọng.",
          "hanzi": "判断调查很重要。",
          "words": [
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            },
            {
              "text": "调查",
              "pinyin": "diao cha",
              "tone": "diào chá",
              "pos": "noun",
              "vi": "điều tra"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "pan duan diao cha zhong yao",
          "tone": "pàn duàn diào chá zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về cưa bỏ và cuộc sống.",
          "hanzi": "锯掉生活观点。",
          "words": [
            {
              "text": "锯掉",
              "pinyin": "ju diao",
              "tone": "jù diào",
              "pos": "verb",
              "vi": "cưa bỏ"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 13",
          "pinyin": "ju diao sheng huo guan dian",
          "tone": "jù diào shēng huó guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
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
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "Bắc Kinh và tứ hợp viện",
          "hanzi": "北京四合院",
          "words": [
            {
              "text": "北京",
              "pinyin": "bei jing",
              "tone": "běi jīng",
              "pos": "noun",
              "vi": "Bắc Kinh"
            },
            {
              "text": "四合院",
              "pinyin": "si he yuan",
              "tone": "sì hé yuàn",
              "pos": "noun",
              "vi": "tứ hợp viện"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "bei jing si he yuan",
          "tone": "běi jīng sì hé yuàn"
        },
        {
          "stage": "phrase",
          "vi": "tứ hợp viện và văn hóa",
          "hanzi": "四合院文化",
          "words": [
            {
              "text": "四合院",
              "pinyin": "si he yuan",
              "tone": "sì hé yuàn",
              "pos": "noun",
              "vi": "tứ hợp viện"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "si he yuan wen hua",
          "tone": "sì hé yuàn wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và điều tra",
          "hanzi": "文化调查",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "调查",
              "pinyin": "diao cha",
              "tone": "diào chá",
              "pos": "noun",
              "vi": "điều tra"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "wen hua diao cha",
          "tone": "wén huà diào chá"
        },
        {
          "stage": "phrase",
          "vi": "điều tra và truyền thống",
          "hanzi": "调查传统",
          "words": [
            {
              "text": "调查",
              "pinyin": "diao cha",
              "tone": "diào chá",
              "pos": "noun",
              "vi": "điều tra"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "diao cha chuan tong",
          "tone": "diào chá chuán tǒng"
        },
        {
          "stage": "phrase",
          "vi": "truyền thống và bảo vệ",
          "hanzi": "传统保护",
          "words": [
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "chuan tong bao hu",
          "tone": "chuán tǒng bǎo hù"
        },
        {
          "stage": "sentence",
          "vi": "Bắc Kinh tứ hợp viện.",
          "hanzi": "北京四合院。",
          "words": [
            {
              "text": "北京",
              "pinyin": "bei jing",
              "tone": "běi jīng",
              "pos": "noun",
              "vi": "Bắc Kinh"
            },
            {
              "text": "四合院",
              "pinyin": "si he yuan",
              "tone": "sì hé yuàn",
              "pos": "noun",
              "vi": "tứ hợp viện"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "bei jing si he yuan",
          "tone": "běi jīng sì hé yuàn"
        },
        {
          "stage": "sentence",
          "vi": "tứ hợp viện có liên quan đến văn hóa.",
          "hanzi": "四合院和文化有关。",
          "words": [
            {
              "text": "四合院",
              "pinyin": "si he yuan",
              "tone": "sì hé yuàn",
              "pos": "noun",
              "vi": "tứ hợp viện"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "si he yuan wen hua",
          "tone": "sì hé yuàn wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa, điều tra, truyền thống.",
          "hanzi": "文化调查传统。",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "调查",
              "pinyin": "diao cha",
              "tone": "diào chá",
              "pos": "noun",
              "vi": "điều tra"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "wen hua diao cha chuan tong",
          "tone": "wén huà diào chá chuán tǒng"
        },
        {
          "stage": "sentence",
          "vi": "truyền thống và bảo vệ rất quan trọng.",
          "hanzi": "传统保护很重要。",
          "words": [
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "chuan tong bao hu zhong yao",
          "tone": "chuán tǒng bǎo hù zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về Bắc Kinh và tứ hợp viện.",
          "hanzi": "北京四合院观点。",
          "words": [
            {
              "text": "北京",
              "pinyin": "bei jing",
              "tone": "běi jīng",
              "pos": "noun",
              "vi": "Bắc Kinh"
            },
            {
              "text": "四合院",
              "pinyin": "si he yuan",
              "tone": "sì hé yuàn",
              "pos": "noun",
              "vi": "tứ hợp viện"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 14",
          "pinyin": "bei jing si he yuan guan dian",
          "tone": "běi jīng sì hé yuàn guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
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
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "chuan tong",
          "tone": "chuán tǒng"
        },
        {
          "stage": "phrase",
          "vi": "bàn binh trên giấy và phán đoán",
          "hanzi": "纸上谈兵判断",
          "words": [
            {
              "text": "纸上谈兵",
              "pinyin": "zhi shang tan bing",
              "tone": "zhǐ shàng tán bīng",
              "pos": "verb",
              "vi": "bàn binh trên giấy"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "zhi shang tan bing pan duan",
          "tone": "zhǐ shàng tán bīng pàn duàn"
        },
        {
          "stage": "phrase",
          "vi": "phán đoán và cách thức",
          "hanzi": "判断方式",
          "words": [
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "pan duan fang shi",
          "tone": "pàn duàn fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "cách thức và văn hóa",
          "hanzi": "方式文化",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "fang shi wen hua",
          "tone": "fāng shì wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và kết quả",
          "hanzi": "文化结果",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "wen hua jie guo",
          "tone": "wén huà jié guǒ"
        },
        {
          "stage": "phrase",
          "vi": "kết quả và nội dung",
          "hanzi": "结果内容",
          "words": [
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            },
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "jie guo nei rong",
          "tone": "jié guǒ nèi róng"
        },
        {
          "stage": "sentence",
          "vi": "bàn binh trên giấy phán đoán.",
          "hanzi": "纸上谈兵判断。",
          "words": [
            {
              "text": "纸上谈兵",
              "pinyin": "zhi shang tan bing",
              "tone": "zhǐ shàng tán bīng",
              "pos": "verb",
              "vi": "bàn binh trên giấy"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "zhi shang tan bing pan duan",
          "tone": "zhǐ shàng tán bīng pàn duàn"
        },
        {
          "stage": "sentence",
          "vi": "phán đoán có liên quan đến cách thức.",
          "hanzi": "判断和方式有关。",
          "words": [
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "pan duan fang shi",
          "tone": "pàn duàn fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "cách thức, văn hóa, kết quả.",
          "hanzi": "方式文化结果。",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "fang shi wen hua jie guo",
          "tone": "fāng shì wén huà jié guǒ"
        },
        {
          "stage": "sentence",
          "vi": "kết quả và nội dung rất quan trọng.",
          "hanzi": "结果内容很重要。",
          "words": [
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            },
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "jie guo nei rong zhong yao",
          "tone": "jié guǒ nèi róng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về bàn binh trên giấy và phán đoán.",
          "hanzi": "纸上谈兵判断观点。",
          "words": [
            {
              "text": "纸上谈兵",
              "pinyin": "zhi shang tan bing",
              "tone": "zhǐ shàng tán bīng",
              "pos": "verb",
              "vi": "bàn binh trên giấy"
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
          "source": "HSK5 generated prototype - Lesson 15",
          "pinyin": "zhi shang tan bing pan duan guan dian",
          "tone": "zhǐ shàng tán bīng pàn duàn guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
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
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "cân nặng và ăn kiêng",
          "hanzi": "体重节食",
          "words": [
            {
              "text": "体重",
              "pinyin": "ti zhong",
              "tone": "tǐ zhòng",
              "pos": "noun",
              "vi": "cân nặng"
            },
            {
              "text": "节食",
              "pinyin": "jie shi",
              "tone": "jié shí",
              "pos": "verb",
              "vi": "ăn kiêng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "ti zhong jie shi",
          "tone": "tǐ zhòng jié shí"
        },
        {
          "stage": "phrase",
          "vi": "ăn kiêng và cuộc sống",
          "hanzi": "节食生活",
          "words": [
            {
              "text": "节食",
              "pinyin": "jie shi",
              "tone": "jié shí",
              "pos": "verb",
              "vi": "ăn kiêng"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "jie shi sheng huo",
          "tone": "jié shí shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và truyền thống",
          "hanzi": "生活传统",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "sheng huo chuan tong",
          "tone": "shēng huó chuán tǒng"
        },
        {
          "stage": "phrase",
          "vi": "truyền thống và bảo vệ",
          "hanzi": "传统保护",
          "words": [
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "chuan tong bao hu",
          "tone": "chuán tǒng bǎo hù"
        },
        {
          "stage": "phrase",
          "vi": "bảo vệ và văn hóa",
          "hanzi": "保护文化",
          "words": [
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "bao hu wen hua",
          "tone": "bǎo hù wén huà"
        },
        {
          "stage": "sentence",
          "vi": "cân nặng ăn kiêng.",
          "hanzi": "体重节食。",
          "words": [
            {
              "text": "体重",
              "pinyin": "ti zhong",
              "tone": "tǐ zhòng",
              "pos": "noun",
              "vi": "cân nặng"
            },
            {
              "text": "节食",
              "pinyin": "jie shi",
              "tone": "jié shí",
              "pos": "verb",
              "vi": "ăn kiêng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "ti zhong jie shi",
          "tone": "tǐ zhòng jié shí"
        },
        {
          "stage": "sentence",
          "vi": "ăn kiêng có liên quan đến cuộc sống.",
          "hanzi": "节食和生活有关。",
          "words": [
            {
              "text": "节食",
              "pinyin": "jie shi",
              "tone": "jié shí",
              "pos": "verb",
              "vi": "ăn kiêng"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "jie shi sheng huo",
          "tone": "jié shí shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống, truyền thống, bảo vệ.",
          "hanzi": "生活传统保护。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "sheng huo chuan tong bao hu",
          "tone": "shēng huó chuán tǒng bǎo hù"
        },
        {
          "stage": "sentence",
          "vi": "bảo vệ và văn hóa rất quan trọng.",
          "hanzi": "保护文化很重要。",
          "words": [
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
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
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "bao hu wen hua zhong yao",
          "tone": "bǎo hù wén huà zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về cân nặng và ăn kiêng.",
          "hanzi": "体重节食观点。",
          "words": [
            {
              "text": "体重",
              "pinyin": "ti zhong",
              "tone": "tǐ zhòng",
              "pos": "noun",
              "vi": "cân nặng"
            },
            {
              "text": "节食",
              "pinyin": "jie shi",
              "tone": "jié shí",
              "pos": "verb",
              "vi": "ăn kiêng"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 16",
          "pinyin": "ti zhong jie shi guan dian",
          "tone": "tǐ zhòng jié shí guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
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
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "guan dian",
          "tone": "guān diǎn"
        },
        {
          "stage": "phrase",
          "vi": "khoảnh khắc đẹp nhất và rời đi",
          "hanzi": "美好的时刻离开",
          "words": [
            {
              "text": "美好的时刻",
              "pinyin": "mei hao de shi ke",
              "tone": "měi hǎo de shí kè",
              "pos": "noun",
              "vi": "khoảnh khắc đẹp nhất"
            },
            {
              "text": "离开",
              "pinyin": "li kai",
              "tone": "lí kāi",
              "pos": "verb",
              "vi": "rời đi"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "mei hao de shi ke li kai",
          "tone": "měi hǎo de shí kè lí kāi"
        },
        {
          "stage": "phrase",
          "vi": "rời đi và cuộc sống",
          "hanzi": "离开生活",
          "words": [
            {
              "text": "离开",
              "pinyin": "li kai",
              "tone": "lí kāi",
              "pos": "verb",
              "vi": "rời đi"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "li kai sheng huo",
          "tone": "lí kāi shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và bảo vệ",
          "hanzi": "生活保护",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "sheng huo bao hu",
          "tone": "shēng huó bǎo hù"
        },
        {
          "stage": "phrase",
          "vi": "bảo vệ và văn hóa",
          "hanzi": "保护文化",
          "words": [
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "bao hu wen hua",
          "tone": "bǎo hù wén huà"
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
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "wen hua fang shi",
          "tone": "wén huà fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "khoảnh khắc đẹp nhất rời đi.",
          "hanzi": "美好的时刻离开。",
          "words": [
            {
              "text": "美好的时刻",
              "pinyin": "mei hao de shi ke",
              "tone": "měi hǎo de shí kè",
              "pos": "noun",
              "vi": "khoảnh khắc đẹp nhất"
            },
            {
              "text": "离开",
              "pinyin": "li kai",
              "tone": "lí kāi",
              "pos": "verb",
              "vi": "rời đi"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "mei hao de shi ke li kai",
          "tone": "měi hǎo de shí kè lí kāi"
        },
        {
          "stage": "sentence",
          "vi": "rời đi có liên quan đến cuộc sống.",
          "hanzi": "离开和生活有关。",
          "words": [
            {
              "text": "离开",
              "pinyin": "li kai",
              "tone": "lí kāi",
              "pos": "verb",
              "vi": "rời đi"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "li kai sheng huo",
          "tone": "lí kāi shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống, bảo vệ, văn hóa.",
          "hanzi": "生活保护文化。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "sheng huo bao hu wen hua",
          "tone": "shēng huó bǎo hù wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa và cách thức rất quan trọng.",
          "hanzi": "文化方式很重要。",
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
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "wen hua fang shi zhong yao",
          "tone": "wén huà fāng shì zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về khoảnh khắc đẹp nhất và rời đi.",
          "hanzi": "美好的时刻离开观点。",
          "words": [
            {
              "text": "美好的时刻",
              "pinyin": "mei hao de shi ke",
              "tone": "měi hǎo de shí kè",
              "pos": "noun",
              "vi": "khoảnh khắc đẹp nhất"
            },
            {
              "text": "离开",
              "pinyin": "li kai",
              "tone": "lí kāi",
              "pos": "verb",
              "vi": "rời đi"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 17",
          "pinyin": "mei hao de shi ke li kai guan dian",
          "tone": "měi hǎo de shí kè lí kāi guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
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
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "bao hu",
          "tone": "bǎo hù"
        },
        {
          "stage": "phrase",
          "vi": "nghệ thuật trừu tượng và nghệ thuật",
          "hanzi": "抽象艺术艺术",
          "words": [
            {
              "text": "抽象艺术",
              "pinyin": "chou xiang yi shu",
              "tone": "chōu xiàng yì shù",
              "pos": "noun",
              "vi": "nghệ thuật trừu tượng"
            },
            {
              "text": "艺术",
              "pinyin": "yi shu",
              "tone": "yì shù",
              "pos": "noun",
              "vi": "nghệ thuật"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "chou xiang yi shu yi shu",
          "tone": "chōu xiàng yì shù yì shù"
        },
        {
          "stage": "phrase",
          "vi": "nghệ thuật và quan điểm",
          "hanzi": "艺术观点",
          "words": [
            {
              "text": "艺术",
              "pinyin": "yi shu",
              "tone": "yì shù",
              "pos": "noun",
              "vi": "nghệ thuật"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "yi shu guan dian",
          "tone": "yì shù guān diǎn"
        },
        {
          "stage": "phrase",
          "vi": "quan điểm và kết quả",
          "hanzi": "观点结果",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "guan dian jie guo",
          "tone": "guān diǎn jié guǒ"
        },
        {
          "stage": "phrase",
          "vi": "kết quả và nội dung",
          "hanzi": "结果内容",
          "words": [
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            },
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "jie guo nei rong",
          "tone": "jié guǒ nèi róng"
        },
        {
          "stage": "phrase",
          "vi": "nội dung và cạnh tranh",
          "hanzi": "内容竞争",
          "words": [
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            },
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "nei rong jing zheng",
          "tone": "nèi róng jìng zhēng"
        },
        {
          "stage": "sentence",
          "vi": "nghệ thuật trừu tượng nghệ thuật.",
          "hanzi": "抽象艺术艺术。",
          "words": [
            {
              "text": "抽象艺术",
              "pinyin": "chou xiang yi shu",
              "tone": "chōu xiàng yì shù",
              "pos": "noun",
              "vi": "nghệ thuật trừu tượng"
            },
            {
              "text": "艺术",
              "pinyin": "yi shu",
              "tone": "yì shù",
              "pos": "noun",
              "vi": "nghệ thuật"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "chou xiang yi shu yi shu",
          "tone": "chōu xiàng yì shù yì shù"
        },
        {
          "stage": "sentence",
          "vi": "nghệ thuật có liên quan đến quan điểm.",
          "hanzi": "艺术和观点有关。",
          "words": [
            {
              "text": "艺术",
              "pinyin": "yi shu",
              "tone": "yì shù",
              "pos": "noun",
              "vi": "nghệ thuật"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "yi shu guan dian",
          "tone": "yì shù guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "quan điểm, kết quả, nội dung.",
          "hanzi": "观点结果内容。",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            },
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "guan dian jie guo nei rong",
          "tone": "guān diǎn jié guǒ nèi róng"
        },
        {
          "stage": "sentence",
          "vi": "nội dung và cạnh tranh rất quan trọng.",
          "hanzi": "内容竞争很重要。",
          "words": [
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            },
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "nei rong jing zheng zhong yao",
          "tone": "nèi róng jìng zhēng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về nghệ thuật trừu tượng và nghệ thuật.",
          "hanzi": "抽象艺术艺术观点。",
          "words": [
            {
              "text": "抽象艺术",
              "pinyin": "chou xiang yi shu",
              "tone": "chōu xiàng yì shù",
              "pos": "noun",
              "vi": "nghệ thuật trừu tượng"
            },
            {
              "text": "艺术",
              "pinyin": "yi shu",
              "tone": "yì shù",
              "pos": "noun",
              "vi": "nghệ thuật"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 18",
          "pinyin": "chou xiang yi shu yi shu guan dian",
          "tone": "chōu xiàng yì shù yì shù guān diǎn"
        }
      ]
    }
  ]
};
});
