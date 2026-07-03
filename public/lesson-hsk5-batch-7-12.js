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
      "id": "hsk5-l7",
      "no": 7,
      "titleZh": "成语故事两则",
      "titleVi": "Hai câu chuyện thành ngữ",
      "items": [
        {
          "stage": "word",
          "vi": "câu chuyện thành ngữ",
          "hanzi": "成语故事",
          "words": [
            {
              "text": "成语故事",
              "pinyin": "cheng yu gu shi",
              "tone": "chéng yǔ gù shì",
              "pos": "noun",
              "vi": "câu chuyện thành ngữ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "cheng yu gu shi",
          "tone": "chéng yǔ gù shì"
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
          "source": "HSK5 generated prototype - Lesson 7",
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
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "wen hua",
          "tone": "wén huà"
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
          "source": "HSK5 generated prototype - Lesson 7",
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
          "source": "HSK5 generated prototype - Lesson 7",
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
          "source": "HSK5 generated prototype - Lesson 7",
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
          "source": "HSK5 generated prototype - Lesson 7",
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
          "source": "HSK5 generated prototype - Lesson 7",
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
          "source": "HSK5 generated prototype - Lesson 7",
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
          "source": "HSK5 generated prototype - Lesson 7",
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
          "source": "HSK5 generated prototype - Lesson 7",
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
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "fang shi",
          "tone": "fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "câu chuyện thành ngữ và truyền thống",
          "hanzi": "成语故事传统",
          "words": [
            {
              "text": "成语故事",
              "pinyin": "cheng yu gu shi",
              "tone": "chéng yǔ gù shì",
              "pos": "noun",
              "vi": "câu chuyện thành ngữ"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "cheng yu gu shi chuan tong",
          "tone": "chéng yǔ gù shì chuán tǒng"
        },
        {
          "stage": "phrase",
          "vi": "truyền thống và văn hóa",
          "hanzi": "传统文化",
          "words": [
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "chuan tong wen hua",
          "tone": "chuán tǒng wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và nội dung",
          "hanzi": "文化内容",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "wen hua nei rong",
          "tone": "wén huà nèi róng"
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
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "nei rong jing zheng",
          "tone": "nèi róng jìng zhēng"
        },
        {
          "stage": "phrase",
          "vi": "cạnh tranh và kinh nghiệm",
          "hanzi": "竞争经验",
          "words": [
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "jing zheng jing yan",
          "tone": "jìng zhēng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "câu chuyện thành ngữ truyền thống.",
          "hanzi": "成语故事传统。",
          "words": [
            {
              "text": "成语故事",
              "pinyin": "cheng yu gu shi",
              "tone": "chéng yǔ gù shì",
              "pos": "noun",
              "vi": "câu chuyện thành ngữ"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "cheng yu gu shi chuan tong",
          "tone": "chéng yǔ gù shì chuán tǒng"
        },
        {
          "stage": "sentence",
          "vi": "truyền thống có liên quan đến văn hóa.",
          "hanzi": "传统和文化有关。",
          "words": [
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "chuan tong wen hua",
          "tone": "chuán tǒng wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa, nội dung, cạnh tranh.",
          "hanzi": "文化内容竞争。",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
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
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "wen hua nei rong jing zheng",
          "tone": "wén huà nèi róng jìng zhēng"
        },
        {
          "stage": "sentence",
          "vi": "cạnh tranh và kinh nghiệm rất quan trọng.",
          "hanzi": "竞争经验很重要。",
          "words": [
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
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
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "jing zheng jing yan zhong yao",
          "tone": "jìng zhēng jīng yàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về câu chuyện thành ngữ và truyền thống.",
          "hanzi": "成语故事传统观点。",
          "words": [
            {
              "text": "成语故事",
              "pinyin": "cheng yu gu shi",
              "tone": "chéng yǔ gù shì",
              "pos": "noun",
              "vi": "câu chuyện thành ngữ"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 7",
          "pinyin": "cheng yu gu shi chuan tong guan dian",
          "tone": "chéng yǔ gù shì chuán tǒng guān diǎn"
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
          "vi": "triều tam mộ tứ",
          "hanzi": "朝三暮四",
          "words": [
            {
              "text": "朝三暮四",
              "pinyin": "chao san mu si",
              "tone": "cháo sān mù sì",
              "pos": "noun",
              "vi": "triều tam mộ tứ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "chao san mu si",
          "tone": "cháo sān mù sì"
        },
        {
          "stage": "word",
          "vi": "nghĩa xưa và nay",
          "hanzi": "古今义",
          "words": [
            {
              "text": "古今义",
              "pinyin": "gu jin yi",
              "tone": "gǔ jīn yì",
              "pos": "noun",
              "vi": "nghĩa xưa và nay"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "gu jin yi",
          "tone": "gǔ jīn yì"
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
          "source": "HSK5 generated prototype - Lesson 8",
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
          "source": "HSK5 generated prototype - Lesson 8",
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
          "source": "HSK5 generated prototype - Lesson 8",
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
          "source": "HSK5 generated prototype - Lesson 8",
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
          "source": "HSK5 generated prototype - Lesson 8",
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
          "source": "HSK5 generated prototype - Lesson 8",
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
          "source": "HSK5 generated prototype - Lesson 8",
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
          "source": "HSK5 generated prototype - Lesson 8",
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
          "source": "HSK5 generated prototype - Lesson 8",
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
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "wen hua",
          "tone": "wén huà"
        },
        {
          "stage": "phrase",
          "vi": "triều tam mộ tứ và nghĩa xưa và nay",
          "hanzi": "朝三暮四古今义",
          "words": [
            {
              "text": "朝三暮四",
              "pinyin": "chao san mu si",
              "tone": "cháo sān mù sì",
              "pos": "noun",
              "vi": "triều tam mộ tứ"
            },
            {
              "text": "古今义",
              "pinyin": "gu jin yi",
              "tone": "gǔ jīn yì",
              "pos": "noun",
              "vi": "nghĩa xưa và nay"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "chao san mu si gu jin yi",
          "tone": "cháo sān mù sì gǔ jīn yì"
        },
        {
          "stage": "phrase",
          "vi": "nghĩa xưa và nay và quan điểm",
          "hanzi": "古今义观点",
          "words": [
            {
              "text": "古今义",
              "pinyin": "gu jin yi",
              "tone": "gǔ jīn yì",
              "pos": "noun",
              "vi": "nghĩa xưa và nay"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "gu jin yi guan dian",
          "tone": "gǔ jīn yì guān diǎn"
        },
        {
          "stage": "phrase",
          "vi": "quan điểm và nội dung",
          "hanzi": "观点内容",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "guan dian nei rong",
          "tone": "guān diǎn nèi róng"
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
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "nei rong jing zheng",
          "tone": "nèi róng jìng zhēng"
        },
        {
          "stage": "phrase",
          "vi": "cạnh tranh và kinh nghiệm",
          "hanzi": "竞争经验",
          "words": [
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "jing zheng jing yan",
          "tone": "jìng zhēng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "triều tam mộ tứ nghĩa xưa và nay.",
          "hanzi": "朝三暮四古今义。",
          "words": [
            {
              "text": "朝三暮四",
              "pinyin": "chao san mu si",
              "tone": "cháo sān mù sì",
              "pos": "noun",
              "vi": "triều tam mộ tứ"
            },
            {
              "text": "古今义",
              "pinyin": "gu jin yi",
              "tone": "gǔ jīn yì",
              "pos": "noun",
              "vi": "nghĩa xưa và nay"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "chao san mu si gu jin yi",
          "tone": "cháo sān mù sì gǔ jīn yì"
        },
        {
          "stage": "sentence",
          "vi": "nghĩa xưa và nay có liên quan đến quan điểm.",
          "hanzi": "古今义和观点有关。",
          "words": [
            {
              "text": "古今义",
              "pinyin": "gu jin yi",
              "tone": "gǔ jīn yì",
              "pos": "noun",
              "vi": "nghĩa xưa và nay"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "gu jin yi guan dian",
          "tone": "gǔ jīn yì guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "quan điểm, nội dung, cạnh tranh.",
          "hanzi": "观点内容竞争。",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
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
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "guan dian nei rong jing zheng",
          "tone": "guān diǎn nèi róng jìng zhēng"
        },
        {
          "stage": "sentence",
          "vi": "cạnh tranh và kinh nghiệm rất quan trọng.",
          "hanzi": "竞争经验很重要。",
          "words": [
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
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
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "jing zheng jing yan zhong yao",
          "tone": "jìng zhēng jīng yàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về triều tam mộ tứ và nghĩa xưa và nay.",
          "hanzi": "朝三暮四古今义观点。",
          "words": [
            {
              "text": "朝三暮四",
              "pinyin": "chao san mu si",
              "tone": "cháo sān mù sì",
              "pos": "noun",
              "vi": "triều tam mộ tứ"
            },
            {
              "text": "古今义",
              "pinyin": "gu jin yi",
              "tone": "gǔ jīn yì",
              "pos": "noun",
              "vi": "nghĩa xưa và nay"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 8",
          "pinyin": "chao san mu si gu jin yi guan dian",
          "tone": "cháo sān mù sì gǔ jīn yì guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "lu xun",
          "tone": "lǔ xùn"
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
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "wen hua",
          "tone": "wén huà"
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
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "guan dian",
          "tone": "guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 9",
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
          "source": "HSK5 generated prototype - Lesson 9",
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
          "source": "HSK5 generated prototype - Lesson 9",
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
          "source": "HSK5 generated prototype - Lesson 9",
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
          "source": "HSK5 generated prototype - Lesson 9",
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
          "source": "HSK5 generated prototype - Lesson 9",
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
          "source": "HSK5 generated prototype - Lesson 9",
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
          "source": "HSK5 generated prototype - Lesson 9",
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
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "nei rong",
          "tone": "nèi róng"
        },
        {
          "stage": "phrase",
          "vi": "Lỗ Tấn và văn hóa",
          "hanzi": "鲁迅文化",
          "words": [
            {
              "text": "鲁迅",
              "pinyin": "lu xun",
              "tone": "lǔ xùn",
              "pos": "noun",
              "vi": "Lỗ Tấn"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "lu xun wen hua",
          "tone": "lǔ xùn wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và quan điểm",
          "hanzi": "文化观点",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "wen hua guan dian",
          "tone": "wén huà guān diǎn"
        },
        {
          "stage": "phrase",
          "vi": "quan điểm và kinh nghiệm",
          "hanzi": "观点经验",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "guan dian jing yan",
          "tone": "guān diǎn jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "kinh nghiệm và giao tiếp",
          "hanzi": "经验交流",
          "words": [
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "jing yan jiao liu",
          "tone": "jīng yàn jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "giao tiếp và phán đoán",
          "hanzi": "交流判断",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "jiao liu pan duan",
          "tone": "jiāo liú pàn duàn"
        },
        {
          "stage": "sentence",
          "vi": "Lỗ Tấn văn hóa.",
          "hanzi": "鲁迅文化。",
          "words": [
            {
              "text": "鲁迅",
              "pinyin": "lu xun",
              "tone": "lǔ xùn",
              "pos": "noun",
              "vi": "Lỗ Tấn"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "lu xun wen hua",
          "tone": "lǔ xùn wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa có liên quan đến quan điểm.",
          "hanzi": "文化和观点有关。",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "wen hua guan dian",
          "tone": "wén huà guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "quan điểm, kinh nghiệm, giao tiếp.",
          "hanzi": "观点经验交流。",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "guan dian jing yan jiao liu",
          "tone": "guān diǎn jīng yàn jiāo liú"
        },
        {
          "stage": "sentence",
          "vi": "giao tiếp và phán đoán rất quan trọng.",
          "hanzi": "交流判断很重要。",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "jiao liu pan duan zhong yao",
          "tone": "jiāo liú pàn duàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về Lỗ Tấn và văn hóa.",
          "hanzi": "鲁迅文化观点。",
          "words": [
            {
              "text": "鲁迅",
              "pinyin": "lu xun",
              "tone": "lǔ xùn",
              "pos": "noun",
              "vi": "Lỗ Tấn"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 9",
          "pinyin": "lu xun wen hua guan dian",
          "tone": "lǔ xùn wén huà guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 10",
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
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "qi ji",
          "tone": "qí jì"
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
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
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
          "source": "HSK5 generated prototype - Lesson 10",
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
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "jing yan",
          "tone": "jīng yàn"
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
          "source": "HSK5 generated prototype - Lesson 10",
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
          "source": "HSK5 generated prototype - Lesson 10",
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
          "source": "HSK5 generated prototype - Lesson 10",
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
          "source": "HSK5 generated prototype - Lesson 10",
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
          "source": "HSK5 generated prototype - Lesson 10",
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
          "source": "HSK5 generated prototype - Lesson 10",
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
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "fang shi",
          "tone": "fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "tranh luận và kỳ tích",
          "hanzi": "争论奇迹",
          "words": [
            {
              "text": "争论",
              "pinyin": "zheng lun",
              "tone": "zhēng lùn",
              "pos": "verb",
              "vi": "tranh luận"
            },
            {
              "text": "奇迹",
              "pinyin": "qi ji",
              "tone": "qí jì",
              "pos": "noun",
              "vi": "kỳ tích"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "zheng lun qi ji",
          "tone": "zhēng lùn qí jì"
        },
        {
          "stage": "phrase",
          "vi": "kỳ tích và giao tiếp",
          "hanzi": "奇迹交流",
          "words": [
            {
              "text": "奇迹",
              "pinyin": "qi ji",
              "tone": "qí jì",
              "pos": "noun",
              "vi": "kỳ tích"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "qi ji jiao liu",
          "tone": "qí jì jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "giao tiếp và cạnh tranh",
          "hanzi": "交流竞争",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "jiao liu jing zheng",
          "tone": "jiāo liú jìng zhēng"
        },
        {
          "stage": "phrase",
          "vi": "cạnh tranh và kinh nghiệm",
          "hanzi": "竞争经验",
          "words": [
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "jing zheng jing yan",
          "tone": "jìng zhēng jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "kinh nghiệm và quan điểm",
          "hanzi": "经验观点",
          "words": [
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "jing yan guan dian",
          "tone": "jīng yàn guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "tranh luận kỳ tích.",
          "hanzi": "争论奇迹。",
          "words": [
            {
              "text": "争论",
              "pinyin": "zheng lun",
              "tone": "zhēng lùn",
              "pos": "verb",
              "vi": "tranh luận"
            },
            {
              "text": "奇迹",
              "pinyin": "qi ji",
              "tone": "qí jì",
              "pos": "noun",
              "vi": "kỳ tích"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "zheng lun qi ji",
          "tone": "zhēng lùn qí jì"
        },
        {
          "stage": "sentence",
          "vi": "kỳ tích có liên quan đến giao tiếp.",
          "hanzi": "奇迹和交流有关。",
          "words": [
            {
              "text": "奇迹",
              "pinyin": "qi ji",
              "tone": "qí jì",
              "pos": "noun",
              "vi": "kỳ tích"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "qi ji jiao liu",
          "tone": "qí jì jiāo liú"
        },
        {
          "stage": "sentence",
          "vi": "giao tiếp, cạnh tranh, kinh nghiệm.",
          "hanzi": "交流竞争经验。",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "jiao liu jing zheng jing yan",
          "tone": "jiāo liú jìng zhēng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "kinh nghiệm và quan điểm rất quan trọng.",
          "hanzi": "经验观点很重要。",
          "words": [
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "jing yan guan dian zhong yao",
          "tone": "jīng yàn guān diǎn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về tranh luận và kỳ tích.",
          "hanzi": "争论奇迹观点。",
          "words": [
            {
              "text": "争论",
              "pinyin": "zheng lun",
              "tone": "zhēng lùn",
              "pos": "verb",
              "vi": "tranh luận"
            },
            {
              "text": "奇迹",
              "pinyin": "qi ji",
              "tone": "qí jì",
              "pos": "noun",
              "vi": "kỳ tích"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 10",
          "pinyin": "zheng lun qi ji guan dian",
          "tone": "zhēng lùn qí jì guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 11",
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
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "wei hai",
          "tone": "wēi hài"
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
          "source": "HSK5 generated prototype - Lesson 11",
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
          "source": "HSK5 generated prototype - Lesson 11",
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
          "source": "HSK5 generated prototype - Lesson 11",
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
          "source": "HSK5 generated prototype - Lesson 11",
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
          "source": "HSK5 generated prototype - Lesson 11",
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
          "source": "HSK5 generated prototype - Lesson 11",
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
          "source": "HSK5 generated prototype - Lesson 11",
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
          "source": "HSK5 generated prototype - Lesson 11",
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
          "source": "HSK5 generated prototype - Lesson 11",
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
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "fang shi",
          "tone": "fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "đồng hồ báo thức và tác hại",
          "hanzi": "闹钟危害",
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
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "nao zhong wei hai",
          "tone": "nào zhōng wēi hài"
        },
        {
          "stage": "phrase",
          "vi": "tác hại và cuộc sống",
          "hanzi": "危害生活",
          "words": [
            {
              "text": "危害",
              "pinyin": "wei hai",
              "tone": "wēi hài",
              "pos": "noun",
              "vi": "tác hại"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "wei hai sheng huo",
          "tone": "wēi hài shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và kinh nghiệm",
          "hanzi": "生活经验",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "sheng huo jing yan",
          "tone": "shēng huó jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "kinh nghiệm và giao tiếp",
          "hanzi": "经验交流",
          "words": [
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "jing yan jiao liu",
          "tone": "jīng yàn jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "giao tiếp và quan điểm",
          "hanzi": "交流观点",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "jiao liu guan dian",
          "tone": "jiāo liú guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "đồng hồ báo thức tác hại.",
          "hanzi": "闹钟危害。",
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
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "nao zhong wei hai",
          "tone": "nào zhōng wēi hài"
        },
        {
          "stage": "sentence",
          "vi": "tác hại có liên quan đến cuộc sống.",
          "hanzi": "危害和生活有关。",
          "words": [
            {
              "text": "危害",
              "pinyin": "wei hai",
              "tone": "wēi hài",
              "pos": "noun",
              "vi": "tác hại"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "wei hai sheng huo",
          "tone": "wēi hài shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống, kinh nghiệm, giao tiếp.",
          "hanzi": "生活经验交流。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "sheng huo jing yan jiao liu",
          "tone": "shēng huó jīng yàn jiāo liú"
        },
        {
          "stage": "sentence",
          "vi": "giao tiếp và quan điểm rất quan trọng.",
          "hanzi": "交流观点很重要。",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "jiao liu guan dian zhong yao",
          "tone": "jiāo liú guān diǎn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đồng hồ báo thức và tác hại.",
          "hanzi": "闹钟危害观点。",
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
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 11",
          "pinyin": "nao zhong wei hai guan dian",
          "tone": "nào zhōng wēi hài guān diǎn"
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
          "vi": "người dùng ở nước ngoài",
          "hanzi": "海外用户",
          "words": [
            {
              "text": "海外用户",
              "pinyin": "hai wai yong hu",
              "tone": "hǎi wài yòng hù",
              "pos": "noun",
              "vi": "người dùng ở nước ngoài"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "hai wai yong hu",
          "tone": "hǎi wài yòng hù"
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
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "wei xin",
          "tone": "wēi xìn"
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
          "source": "HSK5 generated prototype - Lesson 12",
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
          "source": "HSK5 generated prototype - Lesson 12",
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
          "source": "HSK5 generated prototype - Lesson 12",
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
          "source": "HSK5 generated prototype - Lesson 12",
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
          "source": "HSK5 generated prototype - Lesson 12",
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
          "source": "HSK5 generated prototype - Lesson 12",
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
          "source": "HSK5 generated prototype - Lesson 12",
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
          "source": "HSK5 generated prototype - Lesson 12",
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
          "source": "HSK5 generated prototype - Lesson 12",
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
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "nei rong",
          "tone": "nèi róng"
        },
        {
          "stage": "phrase",
          "vi": "người dùng ở nước ngoài và WeChat",
          "hanzi": "海外用户微信",
          "words": [
            {
              "text": "海外用户",
              "pinyin": "hai wai yong hu",
              "tone": "hǎi wài yòng hù",
              "pos": "noun",
              "vi": "người dùng ở nước ngoài"
            },
            {
              "text": "微信",
              "pinyin": "wei xin",
              "tone": "wēi xìn",
              "pos": "noun",
              "vi": "WeChat"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "hai wai yong hu wei xin",
          "tone": "hǎi wài yòng hù wēi xìn"
        },
        {
          "stage": "phrase",
          "vi": "WeChat và giao tiếp",
          "hanzi": "微信交流",
          "words": [
            {
              "text": "微信",
              "pinyin": "wei xin",
              "tone": "wēi xìn",
              "pos": "noun",
              "vi": "WeChat"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "wei xin jiao liu",
          "tone": "wēi xìn jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "giao tiếp và quan điểm",
          "hanzi": "交流观点",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "jiao liu guan dian",
          "tone": "jiāo liú guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 12",
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
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "pan duan diao cha",
          "tone": "pàn duàn diào chá"
        },
        {
          "stage": "sentence",
          "vi": "người dùng ở nước ngoài WeChat.",
          "hanzi": "海外用户微信。",
          "words": [
            {
              "text": "海外用户",
              "pinyin": "hai wai yong hu",
              "tone": "hǎi wài yòng hù",
              "pos": "noun",
              "vi": "người dùng ở nước ngoài"
            },
            {
              "text": "微信",
              "pinyin": "wei xin",
              "tone": "wēi xìn",
              "pos": "noun",
              "vi": "WeChat"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "hai wai yong hu wei xin",
          "tone": "hǎi wài yòng hù wēi xìn"
        },
        {
          "stage": "sentence",
          "vi": "WeChat có liên quan đến giao tiếp.",
          "hanzi": "微信和交流有关。",
          "words": [
            {
              "text": "微信",
              "pinyin": "wei xin",
              "tone": "wēi xìn",
              "pos": "noun",
              "vi": "WeChat"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "wei xin jiao liu",
          "tone": "wēi xìn jiāo liú"
        },
        {
          "stage": "sentence",
          "vi": "giao tiếp, quan điểm, phán đoán.",
          "hanzi": "交流观点判断。",
          "words": [
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
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
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "jiao liu guan dian pan duan",
          "tone": "jiāo liú guān diǎn pàn duàn"
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
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "pan duan diao cha zhong yao",
          "tone": "pàn duàn diào chá zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về người dùng ở nước ngoài và WeChat.",
          "hanzi": "海外用户微信观点。",
          "words": [
            {
              "text": "海外用户",
              "pinyin": "hai wai yong hu",
              "tone": "hǎi wài yòng hù",
              "pos": "noun",
              "vi": "người dùng ở nước ngoài"
            },
            {
              "text": "微信",
              "pinyin": "wei xin",
              "tone": "wēi xìn",
              "pos": "noun",
              "vi": "WeChat"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 12",
          "pinyin": "hai wai yong hu wei xin guan dian",
          "tone": "hǎi wài yòng hù wēi xìn guān diǎn"
        }
      ]
    }
  ]
};
});
