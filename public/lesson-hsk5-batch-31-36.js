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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
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
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "jing yan",
          "tone": "jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "hiệu ứng ngưỡng cửa và cách thức",
          "hanzi": "门槛效应方式",
          "words": [
            {
              "text": "门槛效应",
              "pinyin": "men kan xiao ying",
              "tone": "mén kǎn xiào yìng",
              "pos": "noun",
              "vi": "hiệu ứng ngưỡng cửa"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "men kan xiao ying fang shi",
          "tone": "mén kǎn xiào yìng fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "cách thức và phán đoán",
          "hanzi": "方式判断",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "fang shi pan duan",
          "tone": "fāng shì pàn duàn"
        },
        {
          "stage": "phrase",
          "vi": "phán đoán và quan điểm",
          "hanzi": "判断观点",
          "words": [
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
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "pan duan guan dian",
          "tone": "pàn duàn guān diǎn"
        },
        {
          "stage": "phrase",
          "vi": "quan điểm và điều tra",
          "hanzi": "观点调查",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "调查",
              "pinyin": "diao cha",
              "tone": "diào chá",
              "pos": "noun",
              "vi": "điều tra"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "guan dian diao cha",
          "tone": "guān diǎn diào chá"
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
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "diao cha chuan tong",
          "tone": "diào chá chuán tǒng"
        },
        {
          "stage": "sentence",
          "vi": "hiệu ứng ngưỡng cửa cách thức.",
          "hanzi": "门槛效应方式。",
          "words": [
            {
              "text": "门槛效应",
              "pinyin": "men kan xiao ying",
              "tone": "mén kǎn xiào yìng",
              "pos": "noun",
              "vi": "hiệu ứng ngưỡng cửa"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "men kan xiao ying fang shi",
          "tone": "mén kǎn xiào yìng fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "cách thức có liên quan đến phán đoán.",
          "hanzi": "方式和判断有关。",
          "words": [
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "fang shi pan duan",
          "tone": "fāng shì pàn duàn"
        },
        {
          "stage": "sentence",
          "vi": "phán đoán, quan điểm, điều tra.",
          "hanzi": "判断观点调查。",
          "words": [
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
            },
            {
              "text": "调查",
              "pinyin": "diao cha",
              "tone": "diào chá",
              "pos": "noun",
              "vi": "điều tra"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "pan duan guan dian diao cha",
          "tone": "pàn duàn guān diǎn diào chá"
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
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "diao cha chuan tong zhong yao",
          "tone": "diào chá chuán tǒng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về hiệu ứng ngưỡng cửa và cách thức.",
          "hanzi": "门槛效应方式观点。",
          "words": [
            {
              "text": "门槛效应",
              "pinyin": "men kan xiao ying",
              "tone": "mén kǎn xiào yìng",
              "pos": "noun",
              "vi": "hiệu ứng ngưỡng cửa"
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
          "source": "HSK5 generated prototype - Lesson 31",
          "pinyin": "men kan xiao ying fang shi guan dian",
          "tone": "mén kǎn xiào yìng fāng shì guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
          "pinyin": "jie guo",
          "tone": "jié guǒ"
        },
        {
          "stage": "phrase",
          "vi": "xung quanh và bảo vệ môi trường",
          "hanzi": "身边环保",
          "words": [
            {
              "text": "身边",
              "pinyin": "shen bian",
              "tone": "shēn biān",
              "pos": "noun",
              "vi": "xung quanh"
            },
            {
              "text": "环保",
              "pinyin": "huan bao",
              "tone": "huán bǎo",
              "pos": "noun",
              "vi": "bảo vệ môi trường"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 32",
          "pinyin": "shen bian huan bao",
          "tone": "shēn biān huán bǎo"
        },
        {
          "stage": "phrase",
          "vi": "bảo vệ môi trường và bảo vệ",
          "hanzi": "环保保护",
          "words": [
            {
              "text": "环保",
              "pinyin": "huan bao",
              "tone": "huán bǎo",
              "pos": "noun",
              "vi": "bảo vệ môi trường"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 32",
          "pinyin": "huan bao bao hu",
          "tone": "huán bǎo bǎo hù"
        },
        {
          "stage": "phrase",
          "vi": "bảo vệ và kinh nghiệm",
          "hanzi": "保护经验",
          "words": [
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 32",
          "pinyin": "bao hu jing yan",
          "tone": "bǎo hù jīng yàn"
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
          "source": "HSK5 generated prototype - Lesson 32",
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
          "source": "HSK5 generated prototype - Lesson 32",
          "pinyin": "jiao liu guan dian",
          "tone": "jiāo liú guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "xung quanh bảo vệ môi trường.",
          "hanzi": "身边环保。",
          "words": [
            {
              "text": "身边",
              "pinyin": "shen bian",
              "tone": "shēn biān",
              "pos": "noun",
              "vi": "xung quanh"
            },
            {
              "text": "环保",
              "pinyin": "huan bao",
              "tone": "huán bǎo",
              "pos": "noun",
              "vi": "bảo vệ môi trường"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 32",
          "pinyin": "shen bian huan bao",
          "tone": "shēn biān huán bǎo"
        },
        {
          "stage": "sentence",
          "vi": "bảo vệ môi trường có liên quan đến bảo vệ.",
          "hanzi": "环保和保护有关。",
          "words": [
            {
              "text": "环保",
              "pinyin": "huan bao",
              "tone": "huán bǎo",
              "pos": "noun",
              "vi": "bảo vệ môi trường"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 32",
          "pinyin": "huan bao bao hu",
          "tone": "huán bǎo bǎo hù"
        },
        {
          "stage": "sentence",
          "vi": "bảo vệ, kinh nghiệm, giao tiếp.",
          "hanzi": "保护经验交流。",
          "words": [
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
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
          "source": "HSK5 generated prototype - Lesson 32",
          "pinyin": "bao hu jing yan jiao liu",
          "tone": "bǎo hù jīng yàn jiāo liú"
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
          "source": "HSK5 generated prototype - Lesson 32",
          "pinyin": "jiao liu guan dian zhong yao",
          "tone": "jiāo liú guān diǎn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về xung quanh và bảo vệ môi trường.",
          "hanzi": "身边环保观点。",
          "words": [
            {
              "text": "身边",
              "pinyin": "shen bian",
              "tone": "shēn biān",
              "pos": "noun",
              "vi": "xung quanh"
            },
            {
              "text": "环保",
              "pinyin": "huan bao",
              "tone": "huán bǎo",
              "pos": "noun",
              "vi": "bảo vệ môi trường"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 32",
          "pinyin": "shen bian huan bao guan dian",
          "tone": "shēn biān huán bǎo guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
          "pinyin": "bao hu",
          "tone": "bǎo hù"
        },
        {
          "stage": "phrase",
          "vi": "lấy tắc trị tắc và giảm bớt",
          "hanzi": "以堵治堵缓解",
          "words": [
            {
              "text": "以堵治堵",
              "pinyin": "yi du zhi du",
              "tone": "yǐ dǔ zhì dǔ",
              "pos": "verb",
              "vi": "lấy tắc trị tắc"
            },
            {
              "text": "缓解",
              "pinyin": "huan jie",
              "tone": "huǎn jiě",
              "pos": "verb",
              "vi": "giảm bớt"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 33",
          "pinyin": "yi du zhi du huan jie",
          "tone": "yǐ dǔ zhì dǔ huǎn jiě"
        },
        {
          "stage": "phrase",
          "vi": "giảm bớt và giao thông",
          "hanzi": "缓解交通",
          "words": [
            {
              "text": "缓解",
              "pinyin": "huan jie",
              "tone": "huǎn jiě",
              "pos": "verb",
              "vi": "giảm bớt"
            },
            {
              "text": "交通",
              "pinyin": "jiao tong",
              "tone": "jiāo tōng",
              "pos": "noun",
              "vi": "giao thông"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 33",
          "pinyin": "huan jie jiao tong",
          "tone": "huǎn jiě jiāo tōng"
        },
        {
          "stage": "phrase",
          "vi": "giao thông và nội dung",
          "hanzi": "交通内容",
          "words": [
            {
              "text": "交通",
              "pinyin": "jiao tong",
              "tone": "jiāo tōng",
              "pos": "noun",
              "vi": "giao thông"
            },
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 33",
          "pinyin": "jiao tong nei rong",
          "tone": "jiāo tōng nèi róng"
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
          "source": "HSK5 generated prototype - Lesson 33",
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
          "source": "HSK5 generated prototype - Lesson 33",
          "pinyin": "jing zheng jing yan",
          "tone": "jìng zhēng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "lấy tắc trị tắc giảm bớt.",
          "hanzi": "以堵治堵缓解。",
          "words": [
            {
              "text": "以堵治堵",
              "pinyin": "yi du zhi du",
              "tone": "yǐ dǔ zhì dǔ",
              "pos": "verb",
              "vi": "lấy tắc trị tắc"
            },
            {
              "text": "缓解",
              "pinyin": "huan jie",
              "tone": "huǎn jiě",
              "pos": "verb",
              "vi": "giảm bớt"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 33",
          "pinyin": "yi du zhi du huan jie",
          "tone": "yǐ dǔ zhì dǔ huǎn jiě"
        },
        {
          "stage": "sentence",
          "vi": "giảm bớt có liên quan đến giao thông.",
          "hanzi": "缓解和交通有关。",
          "words": [
            {
              "text": "缓解",
              "pinyin": "huan jie",
              "tone": "huǎn jiě",
              "pos": "verb",
              "vi": "giảm bớt"
            },
            {
              "text": "交通",
              "pinyin": "jiao tong",
              "tone": "jiāo tōng",
              "pos": "noun",
              "vi": "giao thông"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 33",
          "pinyin": "huan jie jiao tong",
          "tone": "huǎn jiě jiāo tōng"
        },
        {
          "stage": "sentence",
          "vi": "giao thông, nội dung, cạnh tranh.",
          "hanzi": "交通内容竞争。",
          "words": [
            {
              "text": "交通",
              "pinyin": "jiao tong",
              "tone": "jiāo tōng",
              "pos": "noun",
              "vi": "giao thông"
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
          "source": "HSK5 generated prototype - Lesson 33",
          "pinyin": "jiao tong nei rong jing zheng",
          "tone": "jiāo tōng nèi róng jìng zhēng"
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
          "source": "HSK5 generated prototype - Lesson 33",
          "pinyin": "jing zheng jing yan zhong yao",
          "tone": "jìng zhēng jīng yàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về lấy tắc trị tắc và giảm bớt.",
          "hanzi": "以堵治堵缓解观点。",
          "words": [
            {
              "text": "以堵治堵",
              "pinyin": "yi du zhi du",
              "tone": "yǐ dǔ zhì dǔ",
              "pos": "verb",
              "vi": "lấy tắc trị tắc"
            },
            {
              "text": "缓解",
              "pinyin": "huan jie",
              "tone": "huǎn jiě",
              "pos": "verb",
              "vi": "giảm bớt"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 33",
          "pinyin": "yi du zhi du huan jie guan dian",
          "tone": "yǐ dǔ zhì dǔ huǎn jiě guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
          "pinyin": "jing zheng",
          "tone": "jìng zhēng"
        },
        {
          "stage": "phrase",
          "vi": "chim chóc và bí quyết chăm sóc da",
          "hanzi": "鸟儿护肤术",
          "words": [
            {
              "text": "鸟儿",
              "pinyin": "niao er",
              "tone": "niǎo ér",
              "pos": "noun",
              "vi": "chim chóc"
            },
            {
              "text": "护肤术",
              "pinyin": "hu fu shu",
              "tone": "hù fū shù",
              "pos": "noun",
              "vi": "bí quyết chăm sóc da"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 34",
          "pinyin": "niao er hu fu shu",
          "tone": "niǎo ér hù fū shù"
        },
        {
          "stage": "phrase",
          "vi": "bí quyết chăm sóc da và bảo vệ",
          "hanzi": "护肤术保护",
          "words": [
            {
              "text": "护肤术",
              "pinyin": "hu fu shu",
              "tone": "hù fū shù",
              "pos": "noun",
              "vi": "bí quyết chăm sóc da"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 34",
          "pinyin": "hu fu shu bao hu",
          "tone": "hù fū shù bǎo hù"
        },
        {
          "stage": "phrase",
          "vi": "bảo vệ và quan điểm",
          "hanzi": "保护观点",
          "words": [
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
          "source": "HSK5 generated prototype - Lesson 34",
          "pinyin": "bao hu guan dian",
          "tone": "bǎo hù guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 34",
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
          "source": "HSK5 generated prototype - Lesson 34",
          "pinyin": "pan duan diao cha",
          "tone": "pàn duàn diào chá"
        },
        {
          "stage": "sentence",
          "vi": "chim chóc bí quyết chăm sóc da.",
          "hanzi": "鸟儿护肤术。",
          "words": [
            {
              "text": "鸟儿",
              "pinyin": "niao er",
              "tone": "niǎo ér",
              "pos": "noun",
              "vi": "chim chóc"
            },
            {
              "text": "护肤术",
              "pinyin": "hu fu shu",
              "tone": "hù fū shù",
              "pos": "noun",
              "vi": "bí quyết chăm sóc da"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 34",
          "pinyin": "niao er hu fu shu",
          "tone": "niǎo ér hù fū shù"
        },
        {
          "stage": "sentence",
          "vi": "bí quyết chăm sóc da có liên quan đến bảo vệ.",
          "hanzi": "护肤术和保护有关。",
          "words": [
            {
              "text": "护肤术",
              "pinyin": "hu fu shu",
              "tone": "hù fū shù",
              "pos": "noun",
              "vi": "bí quyết chăm sóc da"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 34",
          "pinyin": "hu fu shu bao hu",
          "tone": "hù fū shù bǎo hù"
        },
        {
          "stage": "sentence",
          "vi": "bảo vệ, quan điểm, phán đoán.",
          "hanzi": "保护观点判断。",
          "words": [
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
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 34",
          "pinyin": "bao hu guan dian pan duan",
          "tone": "bǎo hù guān diǎn pàn duàn"
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
          "source": "HSK5 generated prototype - Lesson 34",
          "pinyin": "pan duan diao cha zhong yao",
          "tone": "pàn duàn diào chá zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về chim chóc và bí quyết chăm sóc da.",
          "hanzi": "鸟儿护肤术观点。",
          "words": [
            {
              "text": "鸟儿",
              "pinyin": "niao er",
              "tone": "niǎo ér",
              "pos": "noun",
              "vi": "chim chóc"
            },
            {
              "text": "护肤术",
              "pinyin": "hu fu shu",
              "tone": "hù fū shù",
              "pos": "noun",
              "vi": "bí quyết chăm sóc da"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 34",
          "pinyin": "niao er hu fu shu guan dian",
          "tone": "niǎo ér hù fū shù guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
          "pinyin": "fang shi",
          "tone": "fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "thực vật và đổ mồ hôi",
          "hanzi": "植物出汗",
          "words": [
            {
              "text": "植物",
              "pinyin": "zhi wu",
              "tone": "zhí wù",
              "pos": "noun",
              "vi": "thực vật"
            },
            {
              "text": "出汗",
              "pinyin": "chu han",
              "tone": "chū hàn",
              "pos": "verb",
              "vi": "đổ mồ hôi"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 35",
          "pinyin": "zhi wu chu han",
          "tone": "zhí wù chū hàn"
        },
        {
          "stage": "phrase",
          "vi": "đổ mồ hôi và tự nhiên",
          "hanzi": "出汗自然",
          "words": [
            {
              "text": "出汗",
              "pinyin": "chu han",
              "tone": "chū hàn",
              "pos": "verb",
              "vi": "đổ mồ hôi"
            },
            {
              "text": "自然",
              "pinyin": "zi ran",
              "tone": "zì rán",
              "pos": "noun",
              "vi": "tự nhiên"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 35",
          "pinyin": "chu han zi ran",
          "tone": "chū hàn zì rán"
        },
        {
          "stage": "phrase",
          "vi": "tự nhiên và kinh nghiệm",
          "hanzi": "自然经验",
          "words": [
            {
              "text": "自然",
              "pinyin": "zi ran",
              "tone": "zì rán",
              "pos": "noun",
              "vi": "tự nhiên"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 35",
          "pinyin": "zi ran jing yan",
          "tone": "zì rán jīng yàn"
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
          "source": "HSK5 generated prototype - Lesson 35",
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
          "source": "HSK5 generated prototype - Lesson 35",
          "pinyin": "jiao liu guan dian",
          "tone": "jiāo liú guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "thực vật đổ mồ hôi.",
          "hanzi": "植物出汗。",
          "words": [
            {
              "text": "植物",
              "pinyin": "zhi wu",
              "tone": "zhí wù",
              "pos": "noun",
              "vi": "thực vật"
            },
            {
              "text": "出汗",
              "pinyin": "chu han",
              "tone": "chū hàn",
              "pos": "verb",
              "vi": "đổ mồ hôi"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 35",
          "pinyin": "zhi wu chu han",
          "tone": "zhí wù chū hàn"
        },
        {
          "stage": "sentence",
          "vi": "đổ mồ hôi có liên quan đến tự nhiên.",
          "hanzi": "出汗和自然有关。",
          "words": [
            {
              "text": "出汗",
              "pinyin": "chu han",
              "tone": "chū hàn",
              "pos": "verb",
              "vi": "đổ mồ hôi"
            },
            {
              "text": "自然",
              "pinyin": "zi ran",
              "tone": "zì rán",
              "pos": "noun",
              "vi": "tự nhiên"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 35",
          "pinyin": "chu han zi ran",
          "tone": "chū hàn zì rán"
        },
        {
          "stage": "sentence",
          "vi": "tự nhiên, kinh nghiệm, giao tiếp.",
          "hanzi": "自然经验交流。",
          "words": [
            {
              "text": "自然",
              "pinyin": "zi ran",
              "tone": "zì rán",
              "pos": "noun",
              "vi": "tự nhiên"
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
          "source": "HSK5 generated prototype - Lesson 35",
          "pinyin": "zi ran jing yan jiao liu",
          "tone": "zì rán jīng yàn jiāo liú"
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
          "source": "HSK5 generated prototype - Lesson 35",
          "pinyin": "jiao liu guan dian zhong yao",
          "tone": "jiāo liú guān diǎn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về thực vật và đổ mồ hôi.",
          "hanzi": "植物出汗观点。",
          "words": [
            {
              "text": "植物",
              "pinyin": "zhi wu",
              "tone": "zhí wù",
              "pos": "noun",
              "vi": "thực vật"
            },
            {
              "text": "出汗",
              "pinyin": "chu han",
              "tone": "chū hàn",
              "pos": "verb",
              "vi": "đổ mồ hôi"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 35",
          "pinyin": "zhi wu chu han guan dian",
          "tone": "zhí wù chū hàn guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "Lão Xá và trồng hoa",
          "hanzi": "老舍养花",
          "words": [
            {
              "text": "老舍",
              "pinyin": "lao she",
              "tone": "lǎo shè",
              "pos": "noun",
              "vi": "Lão Xá"
            },
            {
              "text": "养花",
              "pinyin": "yang hua",
              "tone": "yǎng huā",
              "pos": "verb",
              "vi": "trồng hoa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 36",
          "pinyin": "lao she yang hua",
          "tone": "lǎo shè yǎng huā"
        },
        {
          "stage": "phrase",
          "vi": "trồng hoa và văn hóa",
          "hanzi": "养花文化",
          "words": [
            {
              "text": "养花",
              "pinyin": "yang hua",
              "tone": "yǎng huā",
              "pos": "verb",
              "vi": "trồng hoa"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 36",
          "pinyin": "yang hua wen hua",
          "tone": "yǎng huā wén huà"
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
          "pinyin": "chuan tong bao hu",
          "tone": "chuán tǒng bǎo hù"
        },
        {
          "stage": "sentence",
          "vi": "Lão Xá trồng hoa.",
          "hanzi": "老舍养花。",
          "words": [
            {
              "text": "老舍",
              "pinyin": "lao she",
              "tone": "lǎo shè",
              "pos": "noun",
              "vi": "Lão Xá"
            },
            {
              "text": "养花",
              "pinyin": "yang hua",
              "tone": "yǎng huā",
              "pos": "verb",
              "vi": "trồng hoa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 36",
          "pinyin": "lao she yang hua",
          "tone": "lǎo shè yǎng huā"
        },
        {
          "stage": "sentence",
          "vi": "trồng hoa có liên quan đến văn hóa.",
          "hanzi": "养花和文化有关。",
          "words": [
            {
              "text": "养花",
              "pinyin": "yang hua",
              "tone": "yǎng huā",
              "pos": "verb",
              "vi": "trồng hoa"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 36",
          "pinyin": "yang hua wen hua",
          "tone": "yǎng huā wén huà"
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
          "source": "HSK5 generated prototype - Lesson 36",
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
          "source": "HSK5 generated prototype - Lesson 36",
          "pinyin": "chuan tong bao hu zhong yao",
          "tone": "chuán tǒng bǎo hù zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về Lão Xá và trồng hoa.",
          "hanzi": "老舍养花观点。",
          "words": [
            {
              "text": "老舍",
              "pinyin": "lao she",
              "tone": "lǎo shè",
              "pos": "noun",
              "vi": "Lão Xá"
            },
            {
              "text": "养花",
              "pinyin": "yang hua",
              "tone": "yǎng huā",
              "pos": "verb",
              "vi": "trồng hoa"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 36",
          "pinyin": "lao she yang hua guan dian",
          "tone": "lǎo shè yǎng huā guān diǎn"
        }
      ]
    }
  ]
};
});
