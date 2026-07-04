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
      "id": "hsk5-l1",
      "no": 1,
      "titleZh": "爱的细节",
      "titleVi": "Những chi tiết của tình yêu",
      "items": [
        {
          "stage": "word",
          "vi": "chi tiết của tình yêu",
          "hanzi": "爱的细节",
          "words": [
            {
              "text": "爱的细节",
              "pinyin": "ai de xi jie",
              "tone": "ài de xì jié",
              "pos": "noun",
              "vi": "chi tiết của tình yêu"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 1",
          "pinyin": "ai de xi jie",
          "tone": "ài de xì jié"
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
          "pinyin": "nei rong",
          "tone": "nèi róng"
        },
        {
          "stage": "phrase",
          "vi": "chi tiết của tình yêu và tình yêu",
          "hanzi": "爱的细节爱情",
          "words": [
            {
              "text": "爱的细节",
              "pinyin": "ai de xi jie",
              "tone": "ài de xì jié",
              "pos": "noun",
              "vi": "chi tiết của tình yêu"
            },
            {
              "text": "爱情",
              "pinyin": "ai qing",
              "tone": "ài qíng",
              "pos": "noun",
              "vi": "tình yêu"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 1",
          "pinyin": "ai de xi jie ai qing",
          "tone": "ài de xì jié ài qíng"
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
          "source": "HSK5 generated prototype - Lesson 1",
          "pinyin": "ai qing sheng huo",
          "tone": "ài qíng shēng huó"
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
          "pinyin": "pan duan diao cha",
          "tone": "pàn duàn diào chá"
        },
        {
          "stage": "sentence",
          "vi": "chi tiết của tình yêu tình yêu.",
          "hanzi": "爱的细节爱情。",
          "words": [
            {
              "text": "爱的细节",
              "pinyin": "ai de xi jie",
              "tone": "ài de xì jié",
              "pos": "noun",
              "vi": "chi tiết của tình yêu"
            },
            {
              "text": "爱情",
              "pinyin": "ai qing",
              "tone": "ài qíng",
              "pos": "noun",
              "vi": "tình yêu"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 1",
          "pinyin": "ai de xi jie ai qing",
          "tone": "ài de xì jié ài qíng"
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
          "source": "HSK5 generated prototype - Lesson 1",
          "pinyin": "ai qing sheng huo",
          "tone": "ài qíng shēng huó"
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
          "source": "HSK5 generated prototype - Lesson 1",
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
          "source": "HSK5 generated prototype - Lesson 1",
          "pinyin": "pan duan diao cha zhong yao",
          "tone": "pàn duàn diào chá zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về chi tiết của tình yêu và tình yêu.",
          "hanzi": "爱的细节爱情观点。",
          "words": [
            {
              "text": "爱的细节",
              "pinyin": "ai de xi jie",
              "tone": "ài de xì jié",
              "pos": "noun",
              "vi": "chi tiết của tình yêu"
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
          "source": "HSK5 generated prototype - Lesson 1",
          "pinyin": "ai de xi jie ai qing guan dian",
          "tone": "ài de xì jié ài qíng guān diǎn"
        }
      ]
    },
    {
      "id": "hsk5-l2",
      "no": 2,
      "titleZh": "留串钥匙给父母",
      "titleVi": "Để lại một chùm chìa khóa cho cha mẹ",
      "items": [
        {
          "stage": "word",
          "vi": "chìa khóa",
          "hanzi": "钥匙",
          "words": [
            {
              "text": "钥匙",
              "pinyin": "yao shi",
              "tone": "yào shi",
              "pos": "noun",
              "vi": "chìa khóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "yao shi",
          "tone": "yào shi"
        },
        {
          "stage": "word",
          "vi": "cha mẹ",
          "hanzi": "父母",
          "words": [
            {
              "text": "父母",
              "pinyin": "fu mu",
              "tone": "fù mǔ",
              "pos": "noun",
              "vi": "cha mẹ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "fu mu",
          "tone": "fù mǔ"
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
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "sheng huo",
          "tone": "shēng huó"
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
          "source": "HSK5 generated prototype - Lesson 2",
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
          "source": "HSK5 generated prototype - Lesson 2",
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
          "source": "HSK5 generated prototype - Lesson 2",
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
          "source": "HSK5 generated prototype - Lesson 2",
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
          "source": "HSK5 generated prototype - Lesson 2",
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
          "source": "HSK5 generated prototype - Lesson 2",
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
          "source": "HSK5 generated prototype - Lesson 2",
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
          "source": "HSK5 generated prototype - Lesson 2",
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
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "jing zheng",
          "tone": "jìng zhēng"
        },
        {
          "stage": "phrase",
          "vi": "chìa khóa và cha mẹ",
          "hanzi": "钥匙父母",
          "words": [
            {
              "text": "钥匙",
              "pinyin": "yao shi",
              "tone": "yào shi",
              "pos": "noun",
              "vi": "chìa khóa"
            },
            {
              "text": "父母",
              "pinyin": "fu mu",
              "tone": "fù mǔ",
              "pos": "noun",
              "vi": "cha mẹ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "yao shi fu mu",
          "tone": "yào shi fù mǔ"
        },
        {
          "stage": "phrase",
          "vi": "cha mẹ và cuộc sống",
          "hanzi": "父母生活",
          "words": [
            {
              "text": "父母",
              "pinyin": "fu mu",
              "tone": "fù mǔ",
              "pos": "noun",
              "vi": "cha mẹ"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "fu mu sheng huo",
          "tone": "fù mǔ shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và phán đoán",
          "hanzi": "生活判断",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "sheng huo pan duan",
          "tone": "shēng huó pàn duàn"
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
          "source": "HSK5 generated prototype - Lesson 2",
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
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "diao cha chuan tong",
          "tone": "diào chá chuán tǒng"
        },
        {
          "stage": "sentence",
          "vi": "chìa khóa cha mẹ.",
          "hanzi": "钥匙父母。",
          "words": [
            {
              "text": "钥匙",
              "pinyin": "yao shi",
              "tone": "yào shi",
              "pos": "noun",
              "vi": "chìa khóa"
            },
            {
              "text": "父母",
              "pinyin": "fu mu",
              "tone": "fù mǔ",
              "pos": "noun",
              "vi": "cha mẹ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "yao shi fu mu",
          "tone": "yào shi fù mǔ"
        },
        {
          "stage": "sentence",
          "vi": "cha mẹ có liên quan đến cuộc sống.",
          "hanzi": "父母和生活有关。",
          "words": [
            {
              "text": "父母",
              "pinyin": "fu mu",
              "tone": "fù mǔ",
              "pos": "noun",
              "vi": "cha mẹ"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "fu mu sheng huo",
          "tone": "fù mǔ shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống, phán đoán, điều tra.",
          "hanzi": "生活判断调查。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
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
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "sheng huo pan duan diao cha",
          "tone": "shēng huó pàn duàn diào chá"
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
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "diao cha chuan tong zhong yao",
          "tone": "diào chá chuán tǒng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về chìa khóa và cha mẹ.",
          "hanzi": "钥匙父母观点。",
          "words": [
            {
              "text": "钥匙",
              "pinyin": "yao shi",
              "tone": "yào shi",
              "pos": "noun",
              "vi": "chìa khóa"
            },
            {
              "text": "父母",
              "pinyin": "fu mu",
              "tone": "fù mǔ",
              "pos": "noun",
              "vi": "cha mẹ"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 2",
          "pinyin": "yao shi fu mu guan dian",
          "tone": "yào shi fù mǔ guān diǎn"
        }
      ]
    },
    {
      "id": "hsk5-l3",
      "no": 3,
      "titleZh": "人生有选择，一切可改变",
      "titleVi": "Cuộc đời có lựa chọn, mọi thứ đều có thể thay đổi",
      "items": [
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
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "xuan ze",
          "tone": "xuǎn zé"
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
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "gai bian",
          "tone": "gǎi biàn"
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
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "guan dian",
          "tone": "guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 3",
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
          "source": "HSK5 generated prototype - Lesson 3",
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
          "source": "HSK5 generated prototype - Lesson 3",
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
          "source": "HSK5 generated prototype - Lesson 3",
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
          "source": "HSK5 generated prototype - Lesson 3",
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
          "source": "HSK5 generated prototype - Lesson 3",
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
          "source": "HSK5 generated prototype - Lesson 3",
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
          "source": "HSK5 generated prototype - Lesson 3",
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
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "lựa chọn và thay đổi",
          "hanzi": "选择改变",
          "words": [
            {
              "text": "选择",
              "pinyin": "xuan ze",
              "tone": "xuǎn zé",
              "pos": "verb",
              "vi": "lựa chọn"
            },
            {
              "text": "改变",
              "pinyin": "gai bian",
              "tone": "gǎi biàn",
              "pos": "verb",
              "vi": "thay đổi"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "xuan ze gai bian",
          "tone": "xuǎn zé gǎi biàn"
        },
        {
          "stage": "phrase",
          "vi": "thay đổi và quan điểm",
          "hanzi": "改变观点",
          "words": [
            {
              "text": "改变",
              "pinyin": "gai bian",
              "tone": "gǎi biàn",
              "pos": "verb",
              "vi": "thay đổi"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "gai bian guan dian",
          "tone": "gǎi biàn guān diǎn"
        },
        {
          "stage": "phrase",
          "vi": "quan điểm và truyền thống",
          "hanzi": "观点传统",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "guan dian chuan tong",
          "tone": "guān diǎn chuán tǒng"
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
          "source": "HSK5 generated prototype - Lesson 3",
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
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "bao hu wen hua",
          "tone": "bǎo hù wén huà"
        },
        {
          "stage": "sentence",
          "vi": "lựa chọn thay đổi.",
          "hanzi": "选择改变。",
          "words": [
            {
              "text": "选择",
              "pinyin": "xuan ze",
              "tone": "xuǎn zé",
              "pos": "verb",
              "vi": "lựa chọn"
            },
            {
              "text": "改变",
              "pinyin": "gai bian",
              "tone": "gǎi biàn",
              "pos": "verb",
              "vi": "thay đổi"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "xuan ze gai bian",
          "tone": "xuǎn zé gǎi biàn"
        },
        {
          "stage": "sentence",
          "vi": "thay đổi có liên quan đến quan điểm.",
          "hanzi": "改变和观点有关。",
          "words": [
            {
              "text": "改变",
              "pinyin": "gai bian",
              "tone": "gǎi biàn",
              "pos": "verb",
              "vi": "thay đổi"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "gai bian guan dian",
          "tone": "gǎi biàn guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "quan điểm, truyền thống, bảo vệ.",
          "hanzi": "观点传统保护。",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
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
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "guan dian chuan tong bao hu",
          "tone": "guān diǎn chuán tǒng bǎo hù"
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
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "bao hu wen hua zhong yao",
          "tone": "bǎo hù wén huà zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về lựa chọn và thay đổi.",
          "hanzi": "选择改变观点。",
          "words": [
            {
              "text": "选择",
              "pinyin": "xuan ze",
              "tone": "xuǎn zé",
              "pos": "verb",
              "vi": "lựa chọn"
            },
            {
              "text": "改变",
              "pinyin": "gai bian",
              "tone": "gǎi biàn",
              "pos": "verb",
              "vi": "thay đổi"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 3",
          "pinyin": "xuan ze gai bian guan dian",
          "tone": "xuǎn zé gǎi biàn guān diǎn"
        }
      ]
    },
    {
      "id": "hsk5-l4",
      "no": 4,
      "titleZh": "子路背米",
      "titleVi": "Tử Lộ cõng gạo",
      "items": [
        {
          "stage": "word",
          "vi": "Tử Lộ",
          "hanzi": "子路",
          "words": [
            {
              "text": "子路",
              "pinyin": "zi lu",
              "tone": "zǐ lù",
              "pos": "noun",
              "vi": "Tử Lộ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "zi lu",
          "tone": "zǐ lù"
        },
        {
          "stage": "word",
          "vi": "cõng gạo",
          "hanzi": "背米",
          "words": [
            {
              "text": "背米",
              "pinyin": "bei mi",
              "tone": "bèi mǐ",
              "pos": "verb",
              "vi": "cõng gạo"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "bei mi",
          "tone": "bèi mǐ"
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "guan dian",
          "tone": "guān diǎn"
        },
        {
          "stage": "phrase",
          "vi": "Tử Lộ và cõng gạo",
          "hanzi": "子路背米",
          "words": [
            {
              "text": "子路",
              "pinyin": "zi lu",
              "tone": "zǐ lù",
              "pos": "noun",
              "vi": "Tử Lộ"
            },
            {
              "text": "背米",
              "pinyin": "bei mi",
              "tone": "bèi mǐ",
              "pos": "verb",
              "vi": "cõng gạo"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "zi lu bei mi",
          "tone": "zǐ lù bèi mǐ"
        },
        {
          "stage": "phrase",
          "vi": "cõng gạo và truyền thống",
          "hanzi": "背米传统",
          "words": [
            {
              "text": "背米",
              "pinyin": "bei mi",
              "tone": "bèi mǐ",
              "pos": "verb",
              "vi": "cõng gạo"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "bei mi chuan tong",
          "tone": "bèi mǐ chuán tǒng"
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
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
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "wen hua fang shi",
          "tone": "wén huà fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "Tử Lộ cõng gạo.",
          "hanzi": "子路背米。",
          "words": [
            {
              "text": "子路",
              "pinyin": "zi lu",
              "tone": "zǐ lù",
              "pos": "noun",
              "vi": "Tử Lộ"
            },
            {
              "text": "背米",
              "pinyin": "bei mi",
              "tone": "bèi mǐ",
              "pos": "verb",
              "vi": "cõng gạo"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "zi lu bei mi",
          "tone": "zǐ lù bèi mǐ"
        },
        {
          "stage": "sentence",
          "vi": "cõng gạo có liên quan đến truyền thống.",
          "hanzi": "背米和传统有关。",
          "words": [
            {
              "text": "背米",
              "pinyin": "bei mi",
              "tone": "bèi mǐ",
              "pos": "verb",
              "vi": "cõng gạo"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "bei mi chuan tong",
          "tone": "bèi mǐ chuán tǒng"
        },
        {
          "stage": "sentence",
          "vi": "truyền thống, bảo vệ, văn hóa.",
          "hanzi": "传统保护文化。",
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
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "chuan tong bao hu wen hua",
          "tone": "chuán tǒng bǎo hù wén huà"
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
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "wen hua fang shi zhong yao",
          "tone": "wén huà fāng shì zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về Tử Lộ và cõng gạo.",
          "hanzi": "子路背米观点。",
          "words": [
            {
              "text": "子路",
              "pinyin": "zi lu",
              "tone": "zǐ lù",
              "pos": "noun",
              "vi": "Tử Lộ"
            },
            {
              "text": "背米",
              "pinyin": "bei mi",
              "tone": "bèi mǐ",
              "pos": "verb",
              "vi": "cõng gạo"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 4",
          "pinyin": "zi lu bei mi guan dian",
          "tone": "zǐ lù bèi mǐ guān diǎn"
        }
      ]
    },
    {
      "id": "hsk5-l5",
      "no": 5,
      "titleZh": "济南的泉水",
      "titleVi": "Nước suối ở Tế Nam",
      "items": [
        {
          "stage": "word",
          "vi": "Tế Nam",
          "hanzi": "济南",
          "words": [
            {
              "text": "济南",
              "pinyin": "ji nan",
              "tone": "jǐ nán",
              "pos": "noun",
              "vi": "Tế Nam"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "ji nan",
          "tone": "jǐ nán"
        },
        {
          "stage": "word",
          "vi": "nước suối",
          "hanzi": "泉水",
          "words": [
            {
              "text": "泉水",
              "pinyin": "quan shui",
              "tone": "quán shuǐ",
              "pos": "noun",
              "vi": "nước suối"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "quan shui",
          "tone": "quán shuǐ"
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
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "wen hua",
          "tone": "wén huà"
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
          "source": "HSK5 generated prototype - Lesson 5",
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
          "source": "HSK5 generated prototype - Lesson 5",
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
          "source": "HSK5 generated prototype - Lesson 5",
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
          "source": "HSK5 generated prototype - Lesson 5",
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
          "source": "HSK5 generated prototype - Lesson 5",
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
          "source": "HSK5 generated prototype - Lesson 5",
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
          "source": "HSK5 generated prototype - Lesson 5",
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
          "source": "HSK5 generated prototype - Lesson 5",
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
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "pan duan",
          "tone": "pàn duàn"
        },
        {
          "stage": "phrase",
          "vi": "Tế Nam và nước suối",
          "hanzi": "济南泉水",
          "words": [
            {
              "text": "济南",
              "pinyin": "ji nan",
              "tone": "jǐ nán",
              "pos": "noun",
              "vi": "Tế Nam"
            },
            {
              "text": "泉水",
              "pinyin": "quan shui",
              "tone": "quán shuǐ",
              "pos": "noun",
              "vi": "nước suối"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "ji nan quan shui",
          "tone": "jǐ nán quán shuǐ"
        },
        {
          "stage": "phrase",
          "vi": "nước suối và văn hóa",
          "hanzi": "泉水文化",
          "words": [
            {
              "text": "泉水",
              "pinyin": "quan shui",
              "tone": "quán shuǐ",
              "pos": "noun",
              "vi": "nước suối"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "quan shui wen hua",
          "tone": "quán shuǐ wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và bảo vệ",
          "hanzi": "文化保护",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "wen hua bao hu",
          "tone": "wén huà bǎo hù"
        },
        {
          "stage": "phrase",
          "vi": "bảo vệ và cách thức",
          "hanzi": "保护方式",
          "words": [
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "bao hu fang shi",
          "tone": "bǎo hù fāng shì"
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
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "fang shi jie guo",
          "tone": "fāng shì jié guǒ"
        },
        {
          "stage": "sentence",
          "vi": "Tế Nam nước suối.",
          "hanzi": "济南泉水。",
          "words": [
            {
              "text": "济南",
              "pinyin": "ji nan",
              "tone": "jǐ nán",
              "pos": "noun",
              "vi": "Tế Nam"
            },
            {
              "text": "泉水",
              "pinyin": "quan shui",
              "tone": "quán shuǐ",
              "pos": "noun",
              "vi": "nước suối"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "ji nan quan shui",
          "tone": "jǐ nán quán shuǐ"
        },
        {
          "stage": "sentence",
          "vi": "nước suối có liên quan đến văn hóa.",
          "hanzi": "泉水和文化有关。",
          "words": [
            {
              "text": "泉水",
              "pinyin": "quan shui",
              "tone": "quán shuǐ",
              "pos": "noun",
              "vi": "nước suối"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "quan shui wen hua",
          "tone": "quán shuǐ wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa, bảo vệ, cách thức.",
          "hanzi": "文化保护方式。",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "wen hua bao hu fang shi",
          "tone": "wén huà bǎo hù fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "cách thức và kết quả rất quan trọng.",
          "hanzi": "方式结果很重要。",
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
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "fang shi jie guo zhong yao",
          "tone": "fāng shì jié guǒ zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về Tế Nam và nước suối.",
          "hanzi": "济南泉水观点。",
          "words": [
            {
              "text": "济南",
              "pinyin": "ji nan",
              "tone": "jǐ nán",
              "pos": "noun",
              "vi": "Tế Nam"
            },
            {
              "text": "泉水",
              "pinyin": "quan shui",
              "tone": "quán shuǐ",
              "pos": "noun",
              "vi": "nước suối"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 5",
          "pinyin": "ji nan quan shui guan dian",
          "tone": "jǐ nán quán shuǐ guān diǎn"
        }
      ]
    },
    {
      "id": "hsk5-l6",
      "no": 6,
      "titleZh": "除夕的由来",
      "titleVi": "Nguồn gốc của đêm giao thừa",
      "items": [
        {
          "stage": "word",
          "vi": "đêm giao thừa",
          "hanzi": "除夕",
          "words": [
            {
              "text": "除夕",
              "pinyin": "chu xi",
              "tone": "chú xī",
              "pos": "noun",
              "vi": "đêm giao thừa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "chu xi",
          "tone": "chú xī"
        },
        {
          "stage": "word",
          "vi": "nguồn gốc",
          "hanzi": "由来",
          "words": [
            {
              "text": "由来",
              "pinyin": "you lai",
              "tone": "yóu lái",
              "pos": "noun",
              "vi": "nguồn gốc"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "you lai",
          "tone": "yóu lái"
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
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "chuan tong",
          "tone": "chuán tǒng"
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
          "source": "HSK5 generated prototype - Lesson 6",
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
          "source": "HSK5 generated prototype - Lesson 6",
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
          "source": "HSK5 generated prototype - Lesson 6",
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
          "source": "HSK5 generated prototype - Lesson 6",
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
          "source": "HSK5 generated prototype - Lesson 6",
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
          "source": "HSK5 generated prototype - Lesson 6",
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
          "source": "HSK5 generated prototype - Lesson 6",
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
          "source": "HSK5 generated prototype - Lesson 6",
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
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "diao cha",
          "tone": "diào chá"
        },
        {
          "stage": "phrase",
          "vi": "đêm giao thừa và nguồn gốc",
          "hanzi": "除夕由来",
          "words": [
            {
              "text": "除夕",
              "pinyin": "chu xi",
              "tone": "chú xī",
              "pos": "noun",
              "vi": "đêm giao thừa"
            },
            {
              "text": "由来",
              "pinyin": "you lai",
              "tone": "yóu lái",
              "pos": "noun",
              "vi": "nguồn gốc"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "chu xi you lai",
          "tone": "chú xī yóu lái"
        },
        {
          "stage": "phrase",
          "vi": "nguồn gốc và truyền thống",
          "hanzi": "由来传统",
          "words": [
            {
              "text": "由来",
              "pinyin": "you lai",
              "tone": "yóu lái",
              "pos": "noun",
              "vi": "nguồn gốc"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "you lai chuan tong",
          "tone": "yóu lái chuán tǒng"
        },
        {
          "stage": "phrase",
          "vi": "truyền thống và cách thức",
          "hanzi": "传统方式",
          "words": [
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "chuan tong fang shi",
          "tone": "chuán tǒng fāng shì"
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
          "source": "HSK5 generated prototype - Lesson 6",
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
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "jie guo nei rong",
          "tone": "jié guǒ nèi róng"
        },
        {
          "stage": "sentence",
          "vi": "đêm giao thừa nguồn gốc.",
          "hanzi": "除夕由来。",
          "words": [
            {
              "text": "除夕",
              "pinyin": "chu xi",
              "tone": "chú xī",
              "pos": "noun",
              "vi": "đêm giao thừa"
            },
            {
              "text": "由来",
              "pinyin": "you lai",
              "tone": "yóu lái",
              "pos": "noun",
              "vi": "nguồn gốc"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "chu xi you lai",
          "tone": "chú xī yóu lái"
        },
        {
          "stage": "sentence",
          "vi": "nguồn gốc có liên quan đến truyền thống.",
          "hanzi": "由来和传统有关。",
          "words": [
            {
              "text": "由来",
              "pinyin": "you lai",
              "tone": "yóu lái",
              "pos": "noun",
              "vi": "nguồn gốc"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "you lai chuan tong",
          "tone": "yóu lái chuán tǒng"
        },
        {
          "stage": "sentence",
          "vi": "truyền thống, cách thức, kết quả.",
          "hanzi": "传统方式结果。",
          "words": [
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
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
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "chuan tong fang shi jie guo",
          "tone": "chuán tǒng fāng shì jié guǒ"
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
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "jie guo nei rong zhong yao",
          "tone": "jié guǒ nèi róng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đêm giao thừa và nguồn gốc.",
          "hanzi": "除夕由来观点。",
          "words": [
            {
              "text": "除夕",
              "pinyin": "chu xi",
              "tone": "chú xī",
              "pos": "noun",
              "vi": "đêm giao thừa"
            },
            {
              "text": "由来",
              "pinyin": "you lai",
              "tone": "yóu lái",
              "pos": "noun",
              "vi": "nguồn gốc"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 6",
          "pinyin": "chu xi you lai guan dian",
          "tone": "chú xī yóu lái guān diǎn"
        }
      ]
    }
  ]
};
});
