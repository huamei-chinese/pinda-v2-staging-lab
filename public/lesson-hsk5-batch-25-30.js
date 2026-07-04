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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
          "pinyin": "nei rong",
          "tone": "nèi róng"
        },
        {
          "stage": "phrase",
          "vi": "đổ đầy nước và bản thân",
          "hanzi": "加满水自己",
          "words": [
            {
              "text": "加满水",
              "pinyin": "jia man shui",
              "tone": "jiā mǎn shuǐ",
              "pos": "verb",
              "vi": "đổ đầy nước"
            },
            {
              "text": "自己",
              "pinyin": "zi ji",
              "tone": "zì jǐ",
              "pos": "noun",
              "vi": "bản thân"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 25",
          "pinyin": "jia man shui zi ji",
          "tone": "jiā mǎn shuǐ zì jǐ"
        },
        {
          "stage": "phrase",
          "vi": "bản thân và cuộc sống",
          "hanzi": "自己生活",
          "words": [
            {
              "text": "自己",
              "pinyin": "zi ji",
              "tone": "zì jǐ",
              "pos": "noun",
              "vi": "bản thân"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 25",
          "pinyin": "zi ji sheng huo",
          "tone": "zì jǐ shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và quan điểm",
          "hanzi": "生活观点",
          "words": [
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
          "source": "HSK5 generated prototype - Lesson 25",
          "pinyin": "sheng huo guan dian",
          "tone": "shēng huó guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 25",
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
          "source": "HSK5 generated prototype - Lesson 25",
          "pinyin": "pan duan diao cha",
          "tone": "pàn duàn diào chá"
        },
        {
          "stage": "sentence",
          "vi": "đổ đầy nước bản thân.",
          "hanzi": "加满水自己。",
          "words": [
            {
              "text": "加满水",
              "pinyin": "jia man shui",
              "tone": "jiā mǎn shuǐ",
              "pos": "verb",
              "vi": "đổ đầy nước"
            },
            {
              "text": "自己",
              "pinyin": "zi ji",
              "tone": "zì jǐ",
              "pos": "noun",
              "vi": "bản thân"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 25",
          "pinyin": "jia man shui zi ji",
          "tone": "jiā mǎn shuǐ zì jǐ"
        },
        {
          "stage": "sentence",
          "vi": "bản thân có liên quan đến cuộc sống.",
          "hanzi": "自己和生活有关。",
          "words": [
            {
              "text": "自己",
              "pinyin": "zi ji",
              "tone": "zì jǐ",
              "pos": "noun",
              "vi": "bản thân"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 25",
          "pinyin": "zi ji sheng huo",
          "tone": "zì jǐ shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống, quan điểm, phán đoán.",
          "hanzi": "生活观点判断。",
          "words": [
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
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 25",
          "pinyin": "sheng huo guan dian pan duan",
          "tone": "shēng huó guān diǎn pàn duàn"
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
          "source": "HSK5 generated prototype - Lesson 25",
          "pinyin": "pan duan diao cha zhong yao",
          "tone": "pàn duàn diào chá zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đổ đầy nước và bản thân.",
          "hanzi": "加满水自己观点。",
          "words": [
            {
              "text": "加满水",
              "pinyin": "jia man shui",
              "tone": "jiā mǎn shuǐ",
              "pos": "verb",
              "vi": "đổ đầy nước"
            },
            {
              "text": "自己",
              "pinyin": "zi ji",
              "tone": "zì jǐ",
              "pos": "noun",
              "vi": "bản thân"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 25",
          "pinyin": "jia man shui zi ji guan dian",
          "tone": "jiā mǎn shuǐ zì jǐ guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
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
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "jing zheng",
          "tone": "jìng zhēng"
        },
        {
          "stage": "phrase",
          "vi": "thuộc về và bận",
          "hanzi": "属于忙",
          "words": [
            {
              "text": "属于",
              "pinyin": "shu yu",
              "tone": "shǔ yú",
              "pos": "verb",
              "vi": "thuộc về"
            },
            {
              "text": "忙",
              "pinyin": "mang",
              "tone": "máng",
              "pos": "adj",
              "vi": "bận"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "shu yu mang",
          "tone": "shǔ yú máng"
        },
        {
          "stage": "phrase",
          "vi": "bận và công việc",
          "hanzi": "忙工作",
          "words": [
            {
              "text": "忙",
              "pinyin": "mang",
              "tone": "máng",
              "pos": "adj",
              "vi": "bận"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "mang gong zuo",
          "tone": "máng gōng zuò"
        },
        {
          "stage": "phrase",
          "vi": "công việc và phán đoán",
          "hanzi": "工作判断",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "gong zuo pan duan",
          "tone": "gōng zuò pàn duàn"
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
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "pan duan diao cha",
          "tone": "pàn duàn diào chá"
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
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "diao cha chuan tong",
          "tone": "diào chá chuán tǒng"
        },
        {
          "stage": "sentence",
          "vi": "thuộc về bận.",
          "hanzi": "属于忙。",
          "words": [
            {
              "text": "属于",
              "pinyin": "shu yu",
              "tone": "shǔ yú",
              "pos": "verb",
              "vi": "thuộc về"
            },
            {
              "text": "忙",
              "pinyin": "mang",
              "tone": "máng",
              "pos": "adj",
              "vi": "bận"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "shu yu mang",
          "tone": "shǔ yú máng"
        },
        {
          "stage": "sentence",
          "vi": "bận có liên quan đến công việc.",
          "hanzi": "忙和工作有关。",
          "words": [
            {
              "text": "忙",
              "pinyin": "mang",
              "tone": "máng",
              "pos": "adj",
              "vi": "bận"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "mang gong zuo",
          "tone": "máng gōng zuò"
        },
        {
          "stage": "sentence",
          "vi": "công việc, phán đoán, điều tra.",
          "hanzi": "工作判断调查。",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
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
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "gong zuo pan duan diao cha",
          "tone": "gōng zuò pàn duàn diào chá"
        },
        {
          "stage": "sentence",
          "vi": "điều tra và truyền thống rất quan trọng.",
          "hanzi": "调查传统很重要。",
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
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "diao cha chuan tong zhong yao",
          "tone": "diào chá chuán tǒng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về thuộc về và bận.",
          "hanzi": "属于忙观点。",
          "words": [
            {
              "text": "属于",
              "pinyin": "shu yu",
              "tone": "shǔ yú",
              "pos": "verb",
              "vi": "thuộc về"
            },
            {
              "text": "忙",
              "pinyin": "mang",
              "tone": "máng",
              "pos": "adj",
              "vi": "bận"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 26",
          "pinyin": "shu yu mang guan dian",
          "tone": "shǔ yú máng guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
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
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "pan duan",
          "tone": "pàn duàn"
        },
        {
          "stage": "phrase",
          "vi": "chơi cờ và cách thức",
          "hanzi": "下棋方式",
          "words": [
            {
              "text": "下棋",
              "pinyin": "xia qi",
              "tone": "xià qí",
              "pos": "verb",
              "vi": "chơi cờ"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "xia qi fang shi",
          "tone": "xià qí fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "cách thức và suy nghĩ",
          "hanzi": "方式思考",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "思考",
              "pinyin": "si kao",
              "tone": "sī kǎo",
              "pos": "verb",
              "vi": "suy nghĩ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "fang shi si kao",
          "tone": "fāng shì sī kǎo"
        },
        {
          "stage": "phrase",
          "vi": "suy nghĩ và bảo vệ",
          "hanzi": "思考保护",
          "words": [
            {
              "text": "思考",
              "pinyin": "si kao",
              "tone": "sī kǎo",
              "pos": "verb",
              "vi": "suy nghĩ"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "si kao bao hu",
          "tone": "sī kǎo bǎo hù"
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
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "bao hu wen hua",
          "tone": "bǎo hù wén huà"
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
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "wen hua jie guo",
          "tone": "wén huà jié guǒ"
        },
        {
          "stage": "sentence",
          "vi": "chơi cờ cách thức.",
          "hanzi": "下棋方式。",
          "words": [
            {
              "text": "下棋",
              "pinyin": "xia qi",
              "tone": "xià qí",
              "pos": "verb",
              "vi": "chơi cờ"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "xia qi fang shi",
          "tone": "xià qí fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "cách thức có liên quan đến suy nghĩ.",
          "hanzi": "方式和思考有关。",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "思考",
              "pinyin": "si kao",
              "tone": "sī kǎo",
              "pos": "verb",
              "vi": "suy nghĩ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "fang shi si kao",
          "tone": "fāng shì sī kǎo"
        },
        {
          "stage": "sentence",
          "vi": "suy nghĩ, bảo vệ, văn hóa.",
          "hanzi": "思考保护文化。",
          "words": [
            {
              "text": "思考",
              "pinyin": "si kao",
              "tone": "sī kǎo",
              "pos": "verb",
              "vi": "suy nghĩ"
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
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "si kao bao hu wen hua",
          "tone": "sī kǎo bǎo hù wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa và kết quả rất quan trọng.",
          "hanzi": "文化结果很重要。",
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
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "wen hua jie guo zhong yao",
          "tone": "wén huà jié guǒ zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về chơi cờ và cách thức.",
          "hanzi": "下棋方式观点。",
          "words": [
            {
              "text": "下棋",
              "pinyin": "xia qi",
              "tone": "xià qí",
              "pos": "verb",
              "vi": "chơi cờ"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 27",
          "pinyin": "xia qi fang shi guan dian",
          "tone": "xià qí fāng shì guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "sinh viên tốt nghiệp và được yêu thích",
          "hanzi": "毕业生受欢迎",
          "words": [
            {
              "text": "毕业生",
              "pinyin": "bi ye sheng",
              "tone": "bì yè shēng",
              "pos": "noun",
              "vi": "sinh viên tốt nghiệp"
            },
            {
              "text": "受欢迎",
              "pinyin": "shou huan ying",
              "tone": "shòu huān yíng",
              "pos": "adj",
              "vi": "được yêu thích"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 28",
          "pinyin": "bi ye sheng shou huan ying",
          "tone": "bì yè shēng shòu huān yíng"
        },
        {
          "stage": "phrase",
          "vi": "được yêu thích và công việc",
          "hanzi": "受欢迎工作",
          "words": [
            {
              "text": "受欢迎",
              "pinyin": "shou huan ying",
              "tone": "shòu huān yíng",
              "pos": "adj",
              "vi": "được yêu thích"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 28",
          "pinyin": "shou huan ying gong zuo",
          "tone": "shòu huān yíng gōng zuò"
        },
        {
          "stage": "phrase",
          "vi": "công việc và truyền thống",
          "hanzi": "工作传统",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 28",
          "pinyin": "gong zuo chuan tong",
          "tone": "gōng zuò chuán tǒng"
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
          "source": "HSK5 generated prototype - Lesson 28",
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
          "source": "HSK5 generated prototype - Lesson 28",
          "pinyin": "bao hu wen hua",
          "tone": "bǎo hù wén huà"
        },
        {
          "stage": "sentence",
          "vi": "sinh viên tốt nghiệp được yêu thích.",
          "hanzi": "毕业生受欢迎。",
          "words": [
            {
              "text": "毕业生",
              "pinyin": "bi ye sheng",
              "tone": "bì yè shēng",
              "pos": "noun",
              "vi": "sinh viên tốt nghiệp"
            },
            {
              "text": "受欢迎",
              "pinyin": "shou huan ying",
              "tone": "shòu huān yíng",
              "pos": "adj",
              "vi": "được yêu thích"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 28",
          "pinyin": "bi ye sheng shou huan ying",
          "tone": "bì yè shēng shòu huān yíng"
        },
        {
          "stage": "sentence",
          "vi": "được yêu thích có liên quan đến công việc.",
          "hanzi": "受欢迎和工作有关。",
          "words": [
            {
              "text": "受欢迎",
              "pinyin": "shou huan ying",
              "tone": "shòu huān yíng",
              "pos": "adj",
              "vi": "được yêu thích"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 28",
          "pinyin": "shou huan ying gong zuo",
          "tone": "shòu huān yíng gōng zuò"
        },
        {
          "stage": "sentence",
          "vi": "công việc, truyền thống, bảo vệ.",
          "hanzi": "工作传统保护。",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
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
          "source": "HSK5 generated prototype - Lesson 28",
          "pinyin": "gong zuo chuan tong bao hu",
          "tone": "gōng zuò chuán tǒng bǎo hù"
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
          "source": "HSK5 generated prototype - Lesson 28",
          "pinyin": "bao hu wen hua zhong yao",
          "tone": "bǎo hù wén huà zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về sinh viên tốt nghiệp và được yêu thích.",
          "hanzi": "毕业生受欢迎观点。",
          "words": [
            {
              "text": "毕业生",
              "pinyin": "bi ye sheng",
              "tone": "bì yè shēng",
              "pos": "noun",
              "vi": "sinh viên tốt nghiệp"
            },
            {
              "text": "受欢迎",
              "pinyin": "shou huan ying",
              "tone": "shòu huān yíng",
              "pos": "adj",
              "vi": "được yêu thích"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 28",
          "pinyin": "bi ye sheng shou huan ying guan dian",
          "tone": "bì yè shēng shòu huān yíng guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
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
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "chuan tong",
          "tone": "chuán tǒng"
        },
        {
          "stage": "phrase",
          "vi": "bồi dưỡng và đối thủ",
          "hanzi": "培养对手",
          "words": [
            {
              "text": "培养",
              "pinyin": "pei yang",
              "tone": "péi yǎng",
              "pos": "verb",
              "vi": "bồi dưỡng"
            },
            {
              "text": "对手",
              "pinyin": "dui shou",
              "tone": "duì shǒu",
              "pos": "noun",
              "vi": "đối thủ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "pei yang dui shou",
          "tone": "péi yǎng duì shǒu"
        },
        {
          "stage": "phrase",
          "vi": "đối thủ và cạnh tranh",
          "hanzi": "对手竞争",
          "words": [
            {
              "text": "对手",
              "pinyin": "dui shou",
              "tone": "duì shǒu",
              "pos": "noun",
              "vi": "đối thủ"
            },
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "dui shou jing zheng",
          "tone": "duì shǒu jìng zhēng"
        },
        {
          "stage": "phrase",
          "vi": "cạnh tranh và cách thức",
          "hanzi": "竞争方式",
          "words": [
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "jing zheng fang shi",
          "tone": "jìng zhēng fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "cách thức và kết quả",
          "hanzi": "方式结果",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "fang shi jie guo",
          "tone": "fāng shì jié guǒ"
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
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "jie guo nei rong",
          "tone": "jié guǒ nèi róng"
        },
        {
          "stage": "sentence",
          "vi": "bồi dưỡng đối thủ.",
          "hanzi": "培养对手。",
          "words": [
            {
              "text": "培养",
              "pinyin": "pei yang",
              "tone": "péi yǎng",
              "pos": "verb",
              "vi": "bồi dưỡng"
            },
            {
              "text": "对手",
              "pinyin": "dui shou",
              "tone": "duì shǒu",
              "pos": "noun",
              "vi": "đối thủ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "pei yang dui shou",
          "tone": "péi yǎng duì shǒu"
        },
        {
          "stage": "sentence",
          "vi": "đối thủ có liên quan đến cạnh tranh.",
          "hanzi": "对手和竞争有关。",
          "words": [
            {
              "text": "对手",
              "pinyin": "dui shou",
              "tone": "duì shǒu",
              "pos": "noun",
              "vi": "đối thủ"
            },
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "dui shou jing zheng",
          "tone": "duì shǒu jìng zhēng"
        },
        {
          "stage": "sentence",
          "vi": "cạnh tranh, cách thức, kết quả.",
          "hanzi": "竞争方式结果。",
          "words": [
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "jing zheng fang shi jie guo",
          "tone": "jìng zhēng fāng shì jié guǒ"
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
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "jie guo nei rong zhong yao",
          "tone": "jié guǒ nèi róng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về bồi dưỡng và đối thủ.",
          "hanzi": "培养对手观点。",
          "words": [
            {
              "text": "培养",
              "pinyin": "pei yang",
              "tone": "péi yǎng",
              "pos": "verb",
              "vi": "bồi dưỡng"
            },
            {
              "text": "对手",
              "pinyin": "dui shou",
              "tone": "duì shǒu",
              "pos": "noun",
              "vi": "đối thủ"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 29",
          "pinyin": "pei yang dui shou guan dian",
          "tone": "péi yǎng duì shǒu guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
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
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "bao hu",
          "tone": "bǎo hù"
        },
        {
          "stage": "phrase",
          "vi": "cạnh tranh và thị trường",
          "hanzi": "竞争市场",
          "words": [
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            },
            {
              "text": "市场",
              "pinyin": "shi chang",
              "tone": "shì chǎng",
              "pos": "noun",
              "vi": "thị trường"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "jing zheng shi chang",
          "tone": "jìng zhēng shì chǎng"
        },
        {
          "stage": "phrase",
          "vi": "thị trường và hiệu quả cao",
          "hanzi": "市场高效",
          "words": [
            {
              "text": "市场",
              "pinyin": "shi chang",
              "tone": "shì chǎng",
              "pos": "noun",
              "vi": "thị trường"
            },
            {
              "text": "高效",
              "pinyin": "gao xiao",
              "tone": "gāo xiào",
              "pos": "adj",
              "vi": "hiệu quả cao"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "shi chang gao xiao",
          "tone": "shì chǎng gāo xiào"
        },
        {
          "stage": "phrase",
          "vi": "hiệu quả cao và kết quả",
          "hanzi": "高效结果",
          "words": [
            {
              "text": "高效",
              "pinyin": "gao xiao",
              "tone": "gāo xiào",
              "pos": "adj",
              "vi": "hiệu quả cao"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "gao xiao jie guo",
          "tone": "gāo xiào jié guǒ"
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
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "jie guo nei rong",
          "tone": "jié guǒ nèi róng"
        },
        {
          "stage": "phrase",
          "vi": "nội dung và kinh nghiệm",
          "hanzi": "内容经验",
          "words": [
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "nei rong jing yan",
          "tone": "nèi róng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "cạnh tranh thị trường.",
          "hanzi": "竞争市场。",
          "words": [
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            },
            {
              "text": "市场",
              "pinyin": "shi chang",
              "tone": "shì chǎng",
              "pos": "noun",
              "vi": "thị trường"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "jing zheng shi chang",
          "tone": "jìng zhēng shì chǎng"
        },
        {
          "stage": "sentence",
          "vi": "thị trường có liên quan đến hiệu quả cao.",
          "hanzi": "市场和高效有关。",
          "words": [
            {
              "text": "市场",
              "pinyin": "shi chang",
              "tone": "shì chǎng",
              "pos": "noun",
              "vi": "thị trường"
            },
            {
              "text": "高效",
              "pinyin": "gao xiao",
              "tone": "gāo xiào",
              "pos": "adj",
              "vi": "hiệu quả cao"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "shi chang gao xiao",
          "tone": "shì chǎng gāo xiào"
        },
        {
          "stage": "sentence",
          "vi": "hiệu quả cao, kết quả, nội dung.",
          "hanzi": "高效结果内容。",
          "words": [
            {
              "text": "高效",
              "pinyin": "gao xiao",
              "tone": "gāo xiào",
              "pos": "adj",
              "vi": "hiệu quả cao"
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
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "gao xiao jie guo nei rong",
          "tone": "gāo xiào jié guǒ nèi róng"
        },
        {
          "stage": "sentence",
          "vi": "nội dung và kinh nghiệm rất quan trọng.",
          "hanzi": "内容经验很重要。",
          "words": [
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "nei rong jing yan zhong yao",
          "tone": "nèi róng jīng yàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về cạnh tranh và thị trường.",
          "hanzi": "竞争市场观点。",
          "words": [
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            },
            {
              "text": "市场",
              "pinyin": "shi chang",
              "tone": "shì chǎng",
              "pos": "noun",
              "vi": "thị trường"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 30",
          "pinyin": "jing zheng shi chang guan dian",
          "tone": "jìng zhēng shì chǎng guān diǎn"
        }
      ]
    }
  ]
};
});
