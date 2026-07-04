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
      "id": "hsk4-l16",
      "no": 16,
      "titleZh": "生活可以更美好",
      "titleVi": "Cuộc sống có thể tốt đẹp hơn",
      "items": [
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
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "sheng huo",
          "tone": "shēng huó"
        },
        {
          "stage": "word",
          "vi": "đẹp",
          "hanzi": "美",
          "words": [
            {
              "text": "美",
              "pinyin": "mei",
              "tone": "měi",
              "pos": "adj",
              "vi": "đẹp"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "mei",
          "tone": "měi"
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
          "source": "HSK4 generated prototype - Lesson 16",
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
          "source": "HSK4 generated prototype - Lesson 16",
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
          "source": "HSK4 generated prototype - Lesson 16",
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
          "source": "HSK4 generated prototype - Lesson 16",
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
          "source": "HSK4 generated prototype - Lesson 16",
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
          "source": "HSK4 generated prototype - Lesson 16",
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
          "source": "HSK4 generated prototype - Lesson 16",
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
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "wen hua",
          "tone": "wén huà"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và đẹp",
          "hanzi": "生活美",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "美",
              "pinyin": "mei",
              "tone": "měi",
              "pos": "adj",
              "vi": "đẹp"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "sheng huo mei",
          "tone": "shēng huó měi"
        },
        {
          "stage": "phrase",
          "vi": "đẹp và cách thức",
          "hanzi": "美方式",
          "words": [
            {
              "text": "美",
              "pinyin": "mei",
              "tone": "měi",
              "pos": "adj",
              "vi": "đẹp"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "mei fang shi",
          "tone": "měi fāng shì"
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
          "source": "HSK4 generated prototype - Lesson 16",
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
          "source": "HSK4 generated prototype - Lesson 16",
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
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "nei rong jing yan",
          "tone": "nèi róng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống đẹp.",
          "hanzi": "生活美。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "美",
              "pinyin": "mei",
              "tone": "měi",
              "pos": "adj",
              "vi": "đẹp"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "sheng huo mei",
          "tone": "shēng huó měi"
        },
        {
          "stage": "sentence",
          "vi": "đẹp có liên quan đến cách thức.",
          "hanzi": "美和方式有关。",
          "words": [
            {
              "text": "美",
              "pinyin": "mei",
              "tone": "měi",
              "pos": "adj",
              "vi": "đẹp"
            },
            {
              "text": "方式",
              "pinyin": "fang shi",
              "tone": "fāng shì",
              "pos": "noun",
              "vi": "cách thức"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "mei fang shi",
          "tone": "měi fāng shì"
        },
        {
          "stage": "sentence",
          "vi": "cách thức, kết quả, nội dung.",
          "hanzi": "方式结果内容。",
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
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "fang shi jie guo nei rong",
          "tone": "fāng shì jié guǒ nèi róng"
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
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "nei rong jing yan zhong yao",
          "tone": "nèi róng jīng yàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về cuộc sống và đẹp.",
          "hanzi": "生活美观点。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "美",
              "pinyin": "mei",
              "tone": "měi",
              "pos": "adj",
              "vi": "đẹp"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 16",
          "pinyin": "sheng huo mei guan dian",
          "tone": "shēng huó měi guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l17",
      "no": 17,
      "titleZh": "人与自然",
      "titleVi": "Con người và thiên nhiên",
      "items": [
        {
          "stage": "word",
          "vi": "con người và thiên nhiên",
          "hanzi": "人与自然",
          "words": [
            {
              "text": "人与自然",
              "pinyin": "ren yu zi ran",
              "tone": "rén yǔ zì rán",
              "pos": "noun",
              "vi": "con người và thiên nhiên"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "ren yu zi ran",
          "tone": "rén yǔ zì rán"
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
          "source": "HSK4 generated prototype - Lesson 17",
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
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "guan dian",
          "tone": "guān diǎn"
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
          "source": "HSK4 generated prototype - Lesson 17",
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
          "source": "HSK4 generated prototype - Lesson 17",
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
          "source": "HSK4 generated prototype - Lesson 17",
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
          "source": "HSK4 generated prototype - Lesson 17",
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
          "source": "HSK4 generated prototype - Lesson 17",
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
          "source": "HSK4 generated prototype - Lesson 17",
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
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "con người và thiên nhiên và bảo vệ",
          "hanzi": "人与自然保护",
          "words": [
            {
              "text": "人与自然",
              "pinyin": "ren yu zi ran",
              "tone": "rén yǔ zì rán",
              "pos": "noun",
              "vi": "con người và thiên nhiên"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "ren yu zi ran bao hu",
          "tone": "rén yǔ zì rán bǎo hù"
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
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "bao hu guan dian",
          "tone": "bǎo hù guān diǎn"
        },
        {
          "stage": "phrase",
          "vi": "quan điểm và nghiêm túc",
          "hanzi": "观点认真",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "认真",
              "pinyin": "ren zhen",
              "tone": "rèn zhēn",
              "pos": "adj",
              "vi": "nghiêm túc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "guan dian ren zhen",
          "tone": "guān diǎn rèn zhēn"
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
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "ren zhen jie guo",
          "tone": "rèn zhēn jié guǒ"
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
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "jie guo nei rong",
          "tone": "jié guǒ nèi róng"
        },
        {
          "stage": "sentence",
          "vi": "con người và thiên nhiên bảo vệ.",
          "hanzi": "人与自然保护。",
          "words": [
            {
              "text": "人与自然",
              "pinyin": "ren yu zi ran",
              "tone": "rén yǔ zì rán",
              "pos": "noun",
              "vi": "con người và thiên nhiên"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "ren yu zi ran bao hu",
          "tone": "rén yǔ zì rán bǎo hù"
        },
        {
          "stage": "sentence",
          "vi": "bảo vệ có liên quan đến quan điểm.",
          "hanzi": "保护和观点有关。",
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
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "bao hu guan dian",
          "tone": "bǎo hù guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "quan điểm, nghiêm túc, kết quả.",
          "hanzi": "观点认真结果。",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
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
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "guan dian ren zhen jie guo",
          "tone": "guān diǎn rèn zhēn jié guǒ"
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
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "jie guo nei rong zhong yao",
          "tone": "jié guǒ nèi róng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về con người và thiên nhiên và bảo vệ.",
          "hanzi": "人与自然保护观点。",
          "words": [
            {
              "text": "人与自然",
              "pinyin": "ren yu zi ran",
              "tone": "rén yǔ zì rán",
              "pos": "noun",
              "vi": "con người và thiên nhiên"
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
          "source": "HSK4 generated prototype - Lesson 17",
          "pinyin": "ren yu zi ran bao hu guan dian",
          "tone": "rén yǔ zì rán bǎo hù guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l18",
      "no": 18,
      "titleZh": "科技与世界",
      "titleVi": "Khoa học công nghệ và thế giới",
      "items": [
        {
          "stage": "word",
          "vi": "khoa học công nghệ",
          "hanzi": "科技",
          "words": [
            {
              "text": "科技",
              "pinyin": "ke ji",
              "tone": "kē jì",
              "pos": "noun",
              "vi": "khoa học công nghệ"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "ke ji",
          "tone": "kē jì"
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
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "shi jie",
          "tone": "shì jiè"
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
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "wen hua",
          "tone": "wén huà"
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
          "source": "HSK4 generated prototype - Lesson 18",
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
          "source": "HSK4 generated prototype - Lesson 18",
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
          "source": "HSK4 generated prototype - Lesson 18",
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
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
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
          "source": "HSK4 generated prototype - Lesson 18",
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
          "source": "HSK4 generated prototype - Lesson 18",
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
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "ren zhen",
          "tone": "rèn zhēn"
        },
        {
          "stage": "phrase",
          "vi": "khoa học công nghệ và thế giới",
          "hanzi": "科技世界",
          "words": [
            {
              "text": "科技",
              "pinyin": "ke ji",
              "tone": "kē jì",
              "pos": "noun",
              "vi": "khoa học công nghệ"
            },
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "ke ji shi jie",
          "tone": "kē jì shì jiè"
        },
        {
          "stage": "phrase",
          "vi": "thế giới và văn hóa",
          "hanzi": "世界文化",
          "words": [
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "shi jie wen hua",
          "tone": "shì jiè wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và kinh nghiệm",
          "hanzi": "文化经验",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "wen hua jing yan",
          "tone": "wén huà jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "kinh nghiệm và học",
          "hanzi": "经验学习",
          "words": [
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "jing yan xue xi",
          "tone": "jīng yàn xué xí"
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
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "xue xi gong zuo",
          "tone": "xué xí gōng zuò"
        },
        {
          "stage": "sentence",
          "vi": "khoa học công nghệ thế giới.",
          "hanzi": "科技世界。",
          "words": [
            {
              "text": "科技",
              "pinyin": "ke ji",
              "tone": "kē jì",
              "pos": "noun",
              "vi": "khoa học công nghệ"
            },
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "ke ji shi jie",
          "tone": "kē jì shì jiè"
        },
        {
          "stage": "sentence",
          "vi": "thế giới có liên quan đến văn hóa.",
          "hanzi": "世界和文化有关。",
          "words": [
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "shi jie wen hua",
          "tone": "shì jiè wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa, kinh nghiệm, học.",
          "hanzi": "文化经验学习。",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "wen hua jing yan xue xi",
          "tone": "wén huà jīng yàn xué xí"
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
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "xue xi gong zuo zhong yao",
          "tone": "xué xí gōng zuò zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về khoa học công nghệ và thế giới.",
          "hanzi": "科技世界观点。",
          "words": [
            {
              "text": "科技",
              "pinyin": "ke ji",
              "tone": "kē jì",
              "pos": "noun",
              "vi": "khoa học công nghệ"
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
          "source": "HSK4 generated prototype - Lesson 18",
          "pinyin": "ke ji shi jie guan dian",
          "tone": "kē jì shì jiè guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l19",
      "no": 19,
      "titleZh": "生活的味道",
      "titleVi": "Hương vị cuộc sống",
      "items": [
        {
          "stage": "word",
          "vi": "hương vị cuộc sống",
          "hanzi": "生活的味道",
          "words": [
            {
              "text": "生活的味道",
              "pinyin": "sheng huo de wei dao",
              "tone": "shēng huó de wèi dào",
              "pos": "noun",
              "vi": "hương vị cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "sheng huo de wei dao",
          "tone": "shēng huó de wèi dào"
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
          "source": "HSK4 generated prototype - Lesson 19",
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
          "source": "HSK4 generated prototype - Lesson 19",
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
          "source": "HSK4 generated prototype - Lesson 19",
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
          "source": "HSK4 generated prototype - Lesson 19",
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
          "source": "HSK4 generated prototype - Lesson 19",
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
          "source": "HSK4 generated prototype - Lesson 19",
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
          "source": "HSK4 generated prototype - Lesson 19",
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
          "source": "HSK4 generated prototype - Lesson 19",
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
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "fang shi",
          "tone": "fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "hương vị cuộc sống và cuộc sống",
          "hanzi": "生活的味道生活",
          "words": [
            {
              "text": "生活的味道",
              "pinyin": "sheng huo de wei dao",
              "tone": "shēng huó de wèi dào",
              "pos": "noun",
              "vi": "hương vị cuộc sống"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "sheng huo de wei dao sheng huo",
          "tone": "shēng huó de wèi dào shēng huó"
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
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "sheng huo guan dian",
          "tone": "shēng huó guān diǎn"
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
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "guan dian nei rong",
          "tone": "guān diǎn nèi róng"
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
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "nei rong jing yan",
          "tone": "nèi róng jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "kinh nghiệm và học",
          "hanzi": "经验学习",
          "words": [
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "jing yan xue xi",
          "tone": "jīng yàn xué xí"
        },
        {
          "stage": "sentence",
          "vi": "hương vị cuộc sống cuộc sống.",
          "hanzi": "生活的味道生活。",
          "words": [
            {
              "text": "生活的味道",
              "pinyin": "sheng huo de wei dao",
              "tone": "shēng huó de wèi dào",
              "pos": "noun",
              "vi": "hương vị cuộc sống"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "sheng huo de wei dao sheng huo",
          "tone": "shēng huó de wèi dào shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống có liên quan đến quan điểm.",
          "hanzi": "生活和观点有关。",
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
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "sheng huo guan dian",
          "tone": "shēng huó guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "quan điểm, nội dung, kinh nghiệm.",
          "hanzi": "观点内容经验。",
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
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "guan dian nei rong jing yan",
          "tone": "guān diǎn nèi róng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "kinh nghiệm và học rất quan trọng.",
          "hanzi": "经验学习很重要。",
          "words": [
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
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
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "jing yan xue xi zhong yao",
          "tone": "jīng yàn xué xí zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về hương vị cuộc sống và cuộc sống.",
          "hanzi": "生活的味道生活观点。",
          "words": [
            {
              "text": "生活的味道",
              "pinyin": "sheng huo de wei dao",
              "tone": "shēng huó de wèi dào",
              "pos": "noun",
              "vi": "hương vị cuộc sống"
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
          "source": "HSK4 generated prototype - Lesson 19",
          "pinyin": "sheng huo de wei dao sheng huo guan dian",
          "tone": "shēng huó de wèi dào shēng huó guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l20",
      "no": 20,
      "titleZh": "路上的风景",
      "titleVi": "Phong cảnh trên đường",
      "items": [
        {
          "stage": "word",
          "vi": "trên đường",
          "hanzi": "路上",
          "words": [
            {
              "text": "路上",
              "pinyin": "lu shang",
              "tone": "lù shang",
              "pos": "noun",
              "vi": "trên đường"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "lu shang",
          "tone": "lù shang"
        },
        {
          "stage": "word",
          "vi": "phong cảnh",
          "hanzi": "风景",
          "words": [
            {
              "text": "风景",
              "pinyin": "feng jing",
              "tone": "fēng jǐng",
              "pos": "noun",
              "vi": "phong cảnh"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "feng jing",
          "tone": "fēng jǐng"
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
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "shi jie",
          "tone": "shì jiè"
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
          "source": "HSK4 generated prototype - Lesson 20",
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
          "source": "HSK4 generated prototype - Lesson 20",
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
          "source": "HSK4 generated prototype - Lesson 20",
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
          "source": "HSK4 generated prototype - Lesson 20",
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
          "source": "HSK4 generated prototype - Lesson 20",
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
          "source": "HSK4 generated prototype - Lesson 20",
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
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "ji xu",
          "tone": "jì xù"
        },
        {
          "stage": "phrase",
          "vi": "trên đường và phong cảnh",
          "hanzi": "路上风景",
          "words": [
            {
              "text": "路上",
              "pinyin": "lu shang",
              "tone": "lù shang",
              "pos": "noun",
              "vi": "trên đường"
            },
            {
              "text": "风景",
              "pinyin": "feng jing",
              "tone": "fēng jǐng",
              "pos": "noun",
              "vi": "phong cảnh"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "lu shang feng jing",
          "tone": "lù shang fēng jǐng"
        },
        {
          "stage": "phrase",
          "vi": "phong cảnh và thế giới",
          "hanzi": "风景世界",
          "words": [
            {
              "text": "风景",
              "pinyin": "feng jing",
              "tone": "fēng jǐng",
              "pos": "noun",
              "vi": "phong cảnh"
            },
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "feng jing shi jie",
          "tone": "fēng jǐng shì jiè"
        },
        {
          "stage": "phrase",
          "vi": "thế giới và kinh nghiệm",
          "hanzi": "世界经验",
          "words": [
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "shi jie jing yan",
          "tone": "shì jiè jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "kinh nghiệm và học",
          "hanzi": "经验学习",
          "words": [
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "jing yan xue xi",
          "tone": "jīng yàn xué xí"
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
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "xue xi gong zuo",
          "tone": "xué xí gōng zuò"
        },
        {
          "stage": "sentence",
          "vi": "trên đường phong cảnh.",
          "hanzi": "路上风景。",
          "words": [
            {
              "text": "路上",
              "pinyin": "lu shang",
              "tone": "lù shang",
              "pos": "noun",
              "vi": "trên đường"
            },
            {
              "text": "风景",
              "pinyin": "feng jing",
              "tone": "fēng jǐng",
              "pos": "noun",
              "vi": "phong cảnh"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "lu shang feng jing",
          "tone": "lù shang fēng jǐng"
        },
        {
          "stage": "sentence",
          "vi": "phong cảnh có liên quan đến thế giới.",
          "hanzi": "风景和世界有关。",
          "words": [
            {
              "text": "风景",
              "pinyin": "feng jing",
              "tone": "fēng jǐng",
              "pos": "noun",
              "vi": "phong cảnh"
            },
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "feng jing shi jie",
          "tone": "fēng jǐng shì jiè"
        },
        {
          "stage": "sentence",
          "vi": "thế giới, kinh nghiệm, học.",
          "hanzi": "世界经验学习。",
          "words": [
            {
              "text": "世界",
              "pinyin": "shi jie",
              "tone": "shì jiè",
              "pos": "noun",
              "vi": "thế giới"
            },
            {
              "text": "经验",
              "pinyin": "jing yan",
              "tone": "jīng yàn",
              "pos": "noun",
              "vi": "kinh nghiệm"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "shi jie jing yan xue xi",
          "tone": "shì jiè jīng yàn xué xí"
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
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "xue xi gong zuo zhong yao",
          "tone": "xué xí gōng zuò zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về trên đường và phong cảnh.",
          "hanzi": "路上风景观点。",
          "words": [
            {
              "text": "路上",
              "pinyin": "lu shang",
              "tone": "lù shang",
              "pos": "noun",
              "vi": "trên đường"
            },
            {
              "text": "风景",
              "pinyin": "feng jing",
              "tone": "fēng jǐng",
              "pos": "noun",
              "vi": "phong cảnh"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 20",
          "pinyin": "lu shang feng jing guan dian",
          "tone": "lù shang fēng jǐng guān diǎn"
        }
      ]
    }
  ]
};
});
