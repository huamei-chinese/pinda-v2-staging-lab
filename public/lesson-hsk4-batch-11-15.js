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
          "source": "HSK4 generated prototype - Lesson 11",
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
          "source": "HSK4 generated prototype - Lesson 11",
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
          "source": "HSK4 generated prototype - Lesson 11",
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
          "source": "HSK4 generated prototype - Lesson 11",
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
          "source": "HSK4 generated prototype - Lesson 11",
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
          "source": "HSK4 generated prototype - Lesson 11",
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
          "source": "HSK4 generated prototype - Lesson 11",
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
          "source": "HSK4 generated prototype - Lesson 11",
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
          "source": "HSK4 generated prototype - Lesson 11",
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
          "source": "HSK4 generated prototype - Lesson 11",
          "pinyin": "nei rong",
          "tone": "nèi róng"
        },
        {
          "stage": "phrase",
          "vi": "đọc sách, học hành và cách thức",
          "hanzi": "读书方式",
          "words": [
            {
              "text": "读书",
              "pinyin": "du shu",
              "tone": "dú shū",
              "pos": "verb",
              "vi": "đọc sách, học hành"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 11",
          "pinyin": "du shu fang shi",
          "tone": "dú shū fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "cách thức và thói quen",
          "hanzi": "方式习惯",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "习惯",
              "pinyin": "xi guan",
              "tone": "xí guàn",
              "pos": "noun",
              "vi": "thói quen"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 11",
          "pinyin": "fang shi xi guan",
          "tone": "fāng shì xí guàn"
        },
        {
          "stage": "phrase",
          "vi": "thói quen và công việc",
          "hanzi": "习惯工作",
          "words": [
            {
              "text": "习惯",
              "pinyin": "xi guan",
              "tone": "xí guàn",
              "pos": "noun",
              "vi": "thói quen"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gōng zuò",
              "pos": "noun",
              "vi": "công việc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 11",
          "pinyin": "xi guan gong zuo",
          "tone": "xí guàn gōng zuò"
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
          "source": "HSK4 generated prototype - Lesson 11",
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
          "source": "HSK4 generated prototype - Lesson 11",
          "pinyin": "jiao liu wen hua",
          "tone": "jiāo liú wén huà"
        },
        {
          "stage": "sentence",
          "vi": "đọc sách, học hành cách thức.",
          "hanzi": "读书方式。",
          "words": [
            {
              "text": "读书",
              "pinyin": "du shu",
              "tone": "dú shū",
              "pos": "verb",
              "vi": "đọc sách, học hành"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 11",
          "pinyin": "du shu fang shi",
          "tone": "dú shū fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "cách thức có liên quan đến thói quen.",
          "hanzi": "方式和习惯有关。",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "习惯",
              "pinyin": "xi guan",
              "tone": "xí guàn",
              "pos": "noun",
              "vi": "thói quen"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 11",
          "pinyin": "fang shi xi guan",
          "tone": "fāng shì xí guàn"
        },
        {
          "stage": "sentence",
          "vi": "thói quen, công việc, giao tiếp.",
          "hanzi": "习惯工作交流。",
          "words": [
            {
              "text": "习惯",
              "pinyin": "xi guan",
              "tone": "xí guàn",
              "pos": "noun",
              "vi": "thói quen"
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
          "source": "HSK4 generated prototype - Lesson 11",
          "pinyin": "xi guan gong zuo jiao liu",
          "tone": "xí guàn gōng zuò jiāo liú"
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
          "source": "HSK4 generated prototype - Lesson 11",
          "pinyin": "jiao liu wen hua zhong yao",
          "tone": "jiāo liú wén huà zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đọc sách, học hành và cách thức.",
          "hanzi": "读书方式观点。",
          "words": [
            {
              "text": "读书",
              "pinyin": "du shu",
              "tone": "dú shū",
              "pos": "verb",
              "vi": "đọc sách, học hành"
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
          "source": "HSK4 generated prototype - Lesson 11",
          "pinyin": "du shu fang shi guan dian",
          "tone": "dú shū fāng shì guān diǎn"
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
          "source": "HSK4 generated prototype - Lesson 12",
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
          "source": "HSK4 generated prototype - Lesson 12",
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
          "source": "HSK4 generated prototype - Lesson 12",
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
          "source": "HSK4 generated prototype - Lesson 12",
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
          "source": "HSK4 generated prototype - Lesson 12",
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
          "source": "HSK4 generated prototype - Lesson 12",
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
          "source": "HSK4 generated prototype - Lesson 12",
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
          "source": "HSK4 generated prototype - Lesson 12",
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
          "source": "HSK4 generated prototype - Lesson 12",
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
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "jing yan",
          "tone": "jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "phát hiện và thế giới",
          "hanzi": "发现世界",
          "words": [
            {
              "text": "发现",
              "pinyin": "fa xian",
              "tone": "fā xiàn",
              "pos": "verb",
              "vi": "phát hiện"
            },
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "fa xian shi jie",
          "tone": "fā xiàn shì jiè"
        },
        {
          "stage": "phrase",
          "vi": "thế giới và nghiêm túc",
          "hanzi": "世界认真",
          "words": [
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            },
            {
              "text": "认真",
              "pinyin": "ren zhen",
              "tone": "rèn zhēn",
              "pos": "adj",
              "vi": "nghiêm túc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "shi jie ren zhen",
          "tone": "shì jiè rèn zhēn"
        },
        {
          "stage": "phrase",
          "vi": "nghiêm túc và giao tiếp",
          "hanzi": "认真交流",
          "words": [
            {
              "text": "认真",
              "pinyin": "ren zhen",
              "tone": "rèn zhēn",
              "pos": "adj",
              "vi": "nghiêm túc"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "ren zhen jiao liu",
          "tone": "rèn zhēn jiāo liú"
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
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "jiao liu wen hua",
          "tone": "jiāo liú wén huà"
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
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "wen hua fang shi",
          "tone": "wén huà fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "phát hiện thế giới.",
          "hanzi": "发现世界。",
          "words": [
            {
              "text": "发现",
              "pinyin": "fa xian",
              "tone": "fā xiàn",
              "pos": "verb",
              "vi": "phát hiện"
            },
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "fa xian shi jie",
          "tone": "fā xiàn shì jiè"
        },
        {
          "stage": "sentence",
          "vi": "thế giới có liên quan đến nghiêm túc.",
          "hanzi": "世界和认真有关。",
          "words": [
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            },
            {
              "text": "认真",
              "pinyin": "ren zhen",
              "tone": "rèn zhēn",
              "pos": "adj",
              "vi": "nghiêm túc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "shi jie ren zhen",
          "tone": "shì jiè rèn zhēn"
        },
        {
          "stage": "sentence",
          "vi": "nghiêm túc, giao tiếp, văn hóa.",
          "hanzi": "认真交流文化。",
          "words": [
            {
              "text": "认真",
              "pinyin": "ren zhen",
              "tone": "rèn zhēn",
              "pos": "adj",
              "vi": "nghiêm túc"
            },
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
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "ren zhen jiao liu wen hua",
          "tone": "rèn zhēn jiāo liú wén huà"
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
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "wen hua fang shi zhong yao",
          "tone": "wén huà fāng shì zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về phát hiện và thế giới.",
          "hanzi": "发现世界观点。",
          "words": [
            {
              "text": "发现",
              "pinyin": "fa xian",
              "tone": "fā xiàn",
              "pos": "verb",
              "vi": "phát hiện"
            },
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 12",
          "pinyin": "fa xian shi jie guan dian",
          "tone": "fā xiàn shì jiè guān diǎn"
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
          "pinyin": "xue xi",
          "tone": "xué xí"
        },
        {
          "stage": "phrase",
          "vi": "trà và kinh kịch",
          "hanzi": "茶京剧",
          "words": [
            {
              "text": "茶",
              "pinyin": "cha",
              "tone": "chá",
              "pos": "noun",
              "vi": "trà"
            },
            {
              "text": "京剧",
              "pinyin": "jing ju",
              "tone": "jīng jù",
              "pos": "noun",
              "vi": "kinh kịch"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 13",
          "pinyin": "cha jing ju",
          "tone": "chá jīng jù"
        },
        {
          "stage": "phrase",
          "vi": "kinh kịch và văn hóa",
          "hanzi": "京剧文化",
          "words": [
            {
              "text": "京剧",
              "pinyin": "jing ju",
              "tone": "jīng jù",
              "pos": "noun",
              "vi": "kinh kịch"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 13",
          "pinyin": "jing ju wen hua",
          "tone": "jīng jù wén huà"
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
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
          "source": "HSK4 generated prototype - Lesson 13",
          "pinyin": "ji xu ren zhen",
          "tone": "jì xù rèn zhēn"
        },
        {
          "stage": "sentence",
          "vi": "trà kinh kịch.",
          "hanzi": "茶京剧。",
          "words": [
            {
              "text": "茶",
              "pinyin": "cha",
              "tone": "chá",
              "pos": "noun",
              "vi": "trà"
            },
            {
              "text": "京剧",
              "pinyin": "jing ju",
              "tone": "jīng jù",
              "pos": "noun",
              "vi": "kinh kịch"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 13",
          "pinyin": "cha jing ju",
          "tone": "chá jīng jù"
        },
        {
          "stage": "sentence",
          "vi": "kinh kịch có liên quan đến văn hóa.",
          "hanzi": "京剧和文化有关。",
          "words": [
            {
              "text": "京剧",
              "pinyin": "jing ju",
              "tone": "jīng jù",
              "pos": "noun",
              "vi": "kinh kịch"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 13",
          "pinyin": "jing ju wen hua",
          "tone": "jīng jù wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa, cách thức, tiếp tục.",
          "hanzi": "文化方式继续。",
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
              "text": "继续",
              "pinyin": "ji xu",
              "tone": "jì xù",
              "pos": "verb",
              "vi": "tiếp tục"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 13",
          "pinyin": "wen hua fang shi ji xu",
          "tone": "wén huà fāng shì jì xù"
        },
        {
          "stage": "sentence",
          "vi": "tiếp tục và nghiêm túc rất quan trọng.",
          "hanzi": "继续认真很重要。",
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
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 13",
          "pinyin": "ji xu ren zhen zhong yao",
          "tone": "jì xù rèn zhēn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về trà và kinh kịch.",
          "hanzi": "茶京剧观点。",
          "words": [
            {
              "text": "茶",
              "pinyin": "cha",
              "tone": "chá",
              "pos": "noun",
              "vi": "trà"
            },
            {
              "text": "京剧",
              "pinyin": "jing ju",
              "tone": "jīng jù",
              "pos": "noun",
              "vi": "kinh kịch"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 13",
          "pinyin": "cha jing ju guan dian",
          "tone": "chá jīng jù guān diǎn"
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
          "source": "HSK4 generated prototype - Lesson 14",
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
          "source": "HSK4 generated prototype - Lesson 14",
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
          "source": "HSK4 generated prototype - Lesson 14",
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
          "source": "HSK4 generated prototype - Lesson 14",
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
          "source": "HSK4 generated prototype - Lesson 14",
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
          "source": "HSK4 generated prototype - Lesson 14",
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
          "source": "HSK4 generated prototype - Lesson 14",
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
          "source": "HSK4 generated prototype - Lesson 14",
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
          "source": "HSK4 generated prototype - Lesson 14",
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
          "source": "HSK4 generated prototype - Lesson 14",
          "pinyin": "gong zuo",
          "tone": "gōng zuò"
        },
        {
          "stage": "phrase",
          "vi": "bảo vệ Trái Đất và Mẹ Trái Đất",
          "hanzi": "保护地球地球母亲",
          "words": [
            {
              "text": "保护地球",
              "pinyin": "bao hu di qiu",
              "tone": "bǎo hù dì qiú",
              "pos": "verb",
              "vi": "bảo vệ Trái Đất"
            },
            {
              "text": "地球母亲",
              "pinyin": "di qiu mu qin",
              "tone": "dì qiú mǔ qīn",
              "pos": "noun",
              "vi": "Mẹ Trái Đất"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 14",
          "pinyin": "bao hu di qiu di qiu mu qin",
          "tone": "bǎo hù dì qiú dì qiú mǔ qīn"
        },
        {
          "stage": "phrase",
          "vi": "Mẹ Trái Đất và văn hóa",
          "hanzi": "地球母亲文化",
          "words": [
            {
              "text": "地球母亲",
              "pinyin": "di qiu mu qin",
              "tone": "dì qiú mǔ qīn",
              "pos": "noun",
              "vi": "Mẹ Trái Đất"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 14",
          "pinyin": "di qiu mu qin wen hua",
          "tone": "dì qiú mǔ qīn wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và tiếp tục",
          "hanzi": "文化继续",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "继续",
              "pinyin": "ji xu",
              "tone": "jì xù",
              "pos": "verb",
              "vi": "tiếp tục"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 14",
          "pinyin": "wen hua ji xu",
          "tone": "wén huà jì xù"
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
          "source": "HSK4 generated prototype - Lesson 14",
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
          "source": "HSK4 generated prototype - Lesson 14",
          "pinyin": "ren zhen jie guo",
          "tone": "rèn zhēn jié guǒ"
        },
        {
          "stage": "sentence",
          "vi": "bảo vệ Trái Đất Mẹ Trái Đất.",
          "hanzi": "保护地球地球母亲。",
          "words": [
            {
              "text": "保护地球",
              "pinyin": "bao hu di qiu",
              "tone": "bǎo hù dì qiú",
              "pos": "verb",
              "vi": "bảo vệ Trái Đất"
            },
            {
              "text": "地球母亲",
              "pinyin": "di qiu mu qin",
              "tone": "dì qiú mǔ qīn",
              "pos": "noun",
              "vi": "Mẹ Trái Đất"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 14",
          "pinyin": "bao hu di qiu di qiu mu qin",
          "tone": "bǎo hù dì qiú dì qiú mǔ qīn"
        },
        {
          "stage": "sentence",
          "vi": "Mẹ Trái Đất có liên quan đến văn hóa.",
          "hanzi": "地球母亲和文化有关。",
          "words": [
            {
              "text": "地球母亲",
              "pinyin": "di qiu mu qin",
              "tone": "dì qiú mǔ qīn",
              "pos": "noun",
              "vi": "Mẹ Trái Đất"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 14",
          "pinyin": "di qiu mu qin wen hua",
          "tone": "dì qiú mǔ qīn wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa, tiếp tục, nghiêm túc.",
          "hanzi": "文化继续认真。",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
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
          "source": "HSK4 generated prototype - Lesson 14",
          "pinyin": "wen hua ji xu ren zhen",
          "tone": "wén huà jì xù rèn zhēn"
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
          "source": "HSK4 generated prototype - Lesson 14",
          "pinyin": "ren zhen jie guo zhong yao",
          "tone": "rèn zhēn jié guǒ zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về bảo vệ Trái Đất và Mẹ Trái Đất.",
          "hanzi": "保护地球地球母亲观点。",
          "words": [
            {
              "text": "保护地球",
              "pinyin": "bao hu di qiu",
              "tone": "bǎo hù dì qiú",
              "pos": "verb",
              "vi": "bảo vệ Trái Đất"
            },
            {
              "text": "地球母亲",
              "pinyin": "di qiu mu qin",
              "tone": "dì qiú mǔ qīn",
              "pos": "noun",
              "vi": "Mẹ Trái Đất"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 14",
          "pinyin": "bao hu di qiu di qiu mu qin guan dian",
          "tone": "bǎo hù dì qiú dì qiú mǔ qīn guān diǎn"
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
          "source": "HSK4 generated prototype - Lesson 15",
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
          "source": "HSK4 generated prototype - Lesson 15",
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
          "source": "HSK4 generated prototype - Lesson 15",
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
          "source": "HSK4 generated prototype - Lesson 15",
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
          "source": "HSK4 generated prototype - Lesson 15",
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
          "source": "HSK4 generated prototype - Lesson 15",
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
          "source": "HSK4 generated prototype - Lesson 15",
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
          "source": "HSK4 generated prototype - Lesson 15",
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
          "source": "HSK4 generated prototype - Lesson 15",
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
          "source": "HSK4 generated prototype - Lesson 15",
          "pinyin": "xue xi",
          "tone": "xué xí"
        },
        {
          "stage": "phrase",
          "vi": "giáo dục và trẻ em",
          "hanzi": "教育孩子",
          "words": [
            {
              "text": "教育",
              "pinyin": "jiao yu",
              "tone": "jiào yù",
              "pos": "verb",
              "vi": "giáo dục"
            },
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hái zi",
              "pos": "noun",
              "vi": "trẻ em"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 15",
          "pinyin": "jiao yu hai zi",
          "tone": "jiào yù hái zi"
        },
        {
          "stage": "phrase",
          "vi": "trẻ em và nghệ thuật",
          "hanzi": "孩子艺术",
          "words": [
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hái zi",
              "pos": "noun",
              "vi": "trẻ em"
            },
            {
              "text": "艺术",
              "pinyin": "yi shu",
              "tone": "yì shù",
              "pos": "noun",
              "vi": "nghệ thuật"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 15",
          "pinyin": "hai zi yi shu",
          "tone": "hái zi yì shù"
        },
        {
          "stage": "phrase",
          "vi": "nghệ thuật và cách thức",
          "hanzi": "艺术方式",
          "words": [
            {
              "text": "艺术",
              "pinyin": "yi shu",
              "tone": "yì shù",
              "pos": "noun",
              "vi": "nghệ thuật"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 15",
          "pinyin": "yi shu fang shi",
          "tone": "yì shù fāng shì"
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
          "source": "HSK4 generated prototype - Lesson 15",
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
          "source": "HSK4 generated prototype - Lesson 15",
          "pinyin": "ji xu ren zhen",
          "tone": "jì xù rèn zhēn"
        },
        {
          "stage": "sentence",
          "vi": "giáo dục trẻ em.",
          "hanzi": "教育孩子。",
          "words": [
            {
              "text": "教育",
              "pinyin": "jiao yu",
              "tone": "jiào yù",
              "pos": "verb",
              "vi": "giáo dục"
            },
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hái zi",
              "pos": "noun",
              "vi": "trẻ em"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 15",
          "pinyin": "jiao yu hai zi",
          "tone": "jiào yù hái zi"
        },
        {
          "stage": "sentence",
          "vi": "trẻ em có liên quan đến nghệ thuật.",
          "hanzi": "孩子和艺术有关。",
          "words": [
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hái zi",
              "pos": "noun",
              "vi": "trẻ em"
            },
            {
              "text": "艺术",
              "pinyin": "yi shu",
              "tone": "yì shù",
              "pos": "noun",
              "vi": "nghệ thuật"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 15",
          "pinyin": "hai zi yi shu",
          "tone": "hái zi yì shù"
        },
        {
          "stage": "sentence",
          "vi": "nghệ thuật, cách thức, tiếp tục.",
          "hanzi": "艺术方式继续。",
          "words": [
            {
              "text": "艺术",
              "pinyin": "yi shu",
              "tone": "yì shù",
              "pos": "noun",
              "vi": "nghệ thuật"
            },
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
          "source": "HSK4 generated prototype - Lesson 15",
          "pinyin": "yi shu fang shi ji xu",
          "tone": "yì shù fāng shì jì xù"
        },
        {
          "stage": "sentence",
          "vi": "tiếp tục và nghiêm túc rất quan trọng.",
          "hanzi": "继续认真很重要。",
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
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 15",
          "pinyin": "ji xu ren zhen zhong yao",
          "tone": "jì xù rèn zhēn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về giáo dục và trẻ em.",
          "hanzi": "教育孩子观点。",
          "words": [
            {
              "text": "教育",
              "pinyin": "jiao yu",
              "tone": "jiào yù",
              "pos": "verb",
              "vi": "giáo dục"
            },
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hái zi",
              "pos": "noun",
              "vi": "trẻ em"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 15",
          "pinyin": "jiao yu hai zi guan dian",
          "tone": "jiào yù hái zi guān diǎn"
        }
      ]
    }
  ]
};
});
