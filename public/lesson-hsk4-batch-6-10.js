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
      "id": "hsk4-l6",
      "no": 6,
      "titleZh": "一分钱一分货",
      "titleVi": "Tiền nào của nấy",
      "items": [
        {
          "stage": "word",
          "vi": "tiền nào của nấy",
          "hanzi": "一分钱一分货",
          "words": [
            {
              "text": "一分钱一分货",
              "pinyin": "yi fen qian yi fen huo",
              "tone": "yì fēn qián yì fēn huò",
              "pos": "noun",
              "vi": "tiền nào của nấy"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "yi fen qian yi fen huo",
          "tone": "yì fēn qián yì fēn huò"
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
          "source": "HSK4 generated prototype - Lesson 6",
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
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "pan duan",
          "tone": "pàn duàn"
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
          "source": "HSK4 generated prototype - Lesson 6",
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
          "source": "HSK4 generated prototype - Lesson 6",
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
          "source": "HSK4 generated prototype - Lesson 6",
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
          "source": "HSK4 generated prototype - Lesson 6",
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
          "source": "HSK4 generated prototype - Lesson 6",
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
          "source": "HSK4 generated prototype - Lesson 6",
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
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "gong zuo",
          "tone": "gōng zuò"
        },
        {
          "stage": "phrase",
          "vi": "tiền nào của nấy và cuộc sống",
          "hanzi": "一分钱一分货生活",
          "words": [
            {
              "text": "一分钱一分货",
              "pinyin": "yi fen qian yi fen huo",
              "tone": "yì fēn qián yì fēn huò",
              "pos": "noun",
              "vi": "tiền nào của nấy"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "yi fen qian yi fen huo sheng huo",
          "tone": "yì fēn qián yì fēn huò shēng huó"
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
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "sheng huo pan duan",
          "tone": "shēng huó pàn duàn"
        },
        {
          "stage": "phrase",
          "vi": "phán đoán và tiếp tục",
          "hanzi": "判断继续",
          "words": [
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            },
            {
              "text": "继续",
              "pinyin": "ji xu",
              "tone": "jì xù",
              "pos": "verb",
              "vi": "tiếp tục"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "pan duan ji xu",
          "tone": "pàn duàn jì xù"
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
          "source": "HSK4 generated prototype - Lesson 6",
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
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "ren zhen jie guo",
          "tone": "rèn zhēn jié guǒ"
        },
        {
          "stage": "sentence",
          "vi": "tiền nào của nấy cuộc sống.",
          "hanzi": "一分钱一分货生活。",
          "words": [
            {
              "text": "一分钱一分货",
              "pinyin": "yi fen qian yi fen huo",
              "tone": "yì fēn qián yì fēn huò",
              "pos": "noun",
              "vi": "tiền nào của nấy"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "yi fen qian yi fen huo sheng huo",
          "tone": "yì fēn qián yì fēn huò shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống có liên quan đến phán đoán.",
          "hanzi": "生活和判断有关。",
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
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "sheng huo pan duan",
          "tone": "shēng huó pàn duàn"
        },
        {
          "stage": "sentence",
          "vi": "phán đoán, tiếp tục, nghiêm túc.",
          "hanzi": "判断继续认真。",
          "words": [
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
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
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "pan duan ji xu ren zhen",
          "tone": "pàn duàn jì xù rèn zhēn"
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
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "ren zhen jie guo zhong yao",
          "tone": "rèn zhēn jié guǒ zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về tiền nào của nấy và cuộc sống.",
          "hanzi": "一分钱一分货生活观点。",
          "words": [
            {
              "text": "一分钱一分货",
              "pinyin": "yi fen qian yi fen huo",
              "tone": "yì fēn qián yì fēn huò",
              "pos": "noun",
              "vi": "tiền nào của nấy"
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
          "source": "HSK4 generated prototype - Lesson 6",
          "pinyin": "yi fen qian yi fen huo sheng huo guan dian",
          "tone": "yì fēn qián yì fēn huò shēng huó guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l7",
      "no": 7,
      "titleZh": "最好的医生是自己",
      "titleVi": "Bác sĩ tốt nhất là chính mình",
      "items": [
        {
          "stage": "word",
          "vi": "bác sĩ",
          "hanzi": "医生",
          "words": [
            {
              "text": "医生",
              "pinyin": "yi sheng",
              "tone": "yī shēng",
              "pos": "noun",
              "vi": "bác sĩ"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "yi sheng",
          "tone": "yī shēng"
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
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "zi ji",
          "tone": "zì jǐ"
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
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "bao hu",
          "tone": "bǎo hù"
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
          "source": "HSK4 generated prototype - Lesson 7",
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
          "source": "HSK4 generated prototype - Lesson 7",
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
          "source": "HSK4 generated prototype - Lesson 7",
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
          "source": "HSK4 generated prototype - Lesson 7",
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
          "source": "HSK4 generated prototype - Lesson 7",
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
          "source": "HSK4 generated prototype - Lesson 7",
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
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "jiao liu",
          "tone": "jiāo liú"
        },
        {
          "stage": "phrase",
          "vi": "bác sĩ và bản thân",
          "hanzi": "医生自己",
          "words": [
            {
              "text": "医生",
              "pinyin": "yi sheng",
              "tone": "yī shēng",
              "pos": "noun",
              "vi": "bác sĩ"
            },
            {
              "text": "自己",
              "pinyin": "zi ji",
              "tone": "zì jǐ",
              "pos": "noun",
              "vi": "bản thân"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "yi sheng zi ji",
          "tone": "yī shēng zì jǐ"
        },
        {
          "stage": "phrase",
          "vi": "bản thân và bảo vệ",
          "hanzi": "自己保护",
          "words": [
            {
              "text": "自己",
              "pinyin": "zi ji",
              "tone": "zì jǐ",
              "pos": "noun",
              "vi": "bản thân"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "zi ji bao hu",
          "tone": "zì jǐ bǎo hù"
        },
        {
          "stage": "phrase",
          "vi": "bảo vệ và nghiêm túc",
          "hanzi": "保护认真",
          "words": [
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            },
            {
              "text": "认真",
              "pinyin": "ren zhen",
              "tone": "rèn zhēn",
              "pos": "adj",
              "vi": "nghiêm túc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "bao hu ren zhen",
          "tone": "bǎo hù rèn zhēn"
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
          "source": "HSK4 generated prototype - Lesson 7",
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
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "jie guo nei rong",
          "tone": "jié guǒ nèi róng"
        },
        {
          "stage": "sentence",
          "vi": "bác sĩ bản thân.",
          "hanzi": "医生自己。",
          "words": [
            {
              "text": "医生",
              "pinyin": "yi sheng",
              "tone": "yī shēng",
              "pos": "noun",
              "vi": "bác sĩ"
            },
            {
              "text": "自己",
              "pinyin": "zi ji",
              "tone": "zì jǐ",
              "pos": "noun",
              "vi": "bản thân"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "yi sheng zi ji",
          "tone": "yī shēng zì jǐ"
        },
        {
          "stage": "sentence",
          "vi": "bản thân có liên quan đến bảo vệ.",
          "hanzi": "自己和保护有关。",
          "words": [
            {
              "text": "自己",
              "pinyin": "zi ji",
              "tone": "zì jǐ",
              "pos": "noun",
              "vi": "bản thân"
            },
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "zi ji bao hu",
          "tone": "zì jǐ bǎo hù"
        },
        {
          "stage": "sentence",
          "vi": "bảo vệ, nghiêm túc, kết quả.",
          "hanzi": "保护认真结果。",
          "words": [
            {
              "text": "保护",
              "pinyin": "bao hu",
              "tone": "bǎo hù",
              "pos": "verb",
              "vi": "bảo vệ"
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
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "bao hu ren zhen jie guo",
          "tone": "bǎo hù rèn zhēn jié guǒ"
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
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "jie guo nei rong zhong yao",
          "tone": "jié guǒ nèi róng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về bác sĩ và bản thân.",
          "hanzi": "医生自己观点。",
          "words": [
            {
              "text": "医生",
              "pinyin": "yi sheng",
              "tone": "yī shēng",
              "pos": "noun",
              "vi": "bác sĩ"
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
          "source": "HSK4 generated prototype - Lesson 7",
          "pinyin": "yi sheng zi ji guan dian",
          "tone": "yī shēng zì jǐ guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l8",
      "no": 8,
      "titleZh": "生活中不缺少美",
      "titleVi": "Trong cuộc sống không thiếu cái đẹp",
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
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "sheng huo",
          "tone": "shēng huó"
        },
        {
          "stage": "word",
          "vi": "thiếu",
          "hanzi": "缺少",
          "words": [
            {
              "text": "缺少",
              "pinyin": "que shao",
              "tone": "quē shǎo",
              "pos": "verb",
              "vi": "thiếu"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "que shao",
          "tone": "quē shǎo"
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
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "mei",
          "tone": "měi"
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
          "source": "HSK4 generated prototype - Lesson 8",
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
          "source": "HSK4 generated prototype - Lesson 8",
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
          "source": "HSK4 generated prototype - Lesson 8",
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
          "source": "HSK4 generated prototype - Lesson 8",
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
          "source": "HSK4 generated prototype - Lesson 8",
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
          "source": "HSK4 generated prototype - Lesson 8",
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
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "wen hua",
          "tone": "wén huà"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và thiếu",
          "hanzi": "生活缺少",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "缺少",
              "pinyin": "que shao",
              "tone": "quē shǎo",
              "pos": "verb",
              "vi": "thiếu"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "sheng huo que shao",
          "tone": "shēng huó quē shǎo"
        },
        {
          "stage": "phrase",
          "vi": "thiếu và đẹp",
          "hanzi": "缺少美",
          "words": [
            {
              "text": "缺少",
              "pinyin": "que shao",
              "tone": "quē shǎo",
              "pos": "verb",
              "vi": "thiếu"
            },
            {
              "text": "美",
              "pinyin": "mei",
              "tone": "měi",
              "pos": "adj",
              "vi": "đẹp"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "que shao mei",
          "tone": "quē shǎo měi"
        },
        {
          "stage": "phrase",
          "vi": "đẹp và kết quả",
          "hanzi": "美结果",
          "words": [
            {
              "text": "美",
              "pinyin": "mei",
              "tone": "měi",
              "pos": "adj",
              "vi": "đẹp"
            },
            {
              "text": "结果",
              "pinyin": "jie guo",
              "tone": "jié guǒ",
              "pos": "noun",
              "vi": "kết quả"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "mei jie guo",
          "tone": "měi jié guǒ"
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
          "source": "HSK4 generated prototype - Lesson 8",
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
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "nei rong jing yan",
          "tone": "nèi róng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống thiếu.",
          "hanzi": "生活缺少。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "缺少",
              "pinyin": "que shao",
              "tone": "quē shǎo",
              "pos": "verb",
              "vi": "thiếu"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "sheng huo que shao",
          "tone": "shēng huó quē shǎo"
        },
        {
          "stage": "sentence",
          "vi": "thiếu có liên quan đến đẹp.",
          "hanzi": "缺少和美有关。",
          "words": [
            {
              "text": "缺少",
              "pinyin": "que shao",
              "tone": "quē shǎo",
              "pos": "verb",
              "vi": "thiếu"
            },
            {
              "text": "美",
              "pinyin": "mei",
              "tone": "měi",
              "pos": "adj",
              "vi": "đẹp"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "que shao mei",
          "tone": "quē shǎo měi"
        },
        {
          "stage": "sentence",
          "vi": "đẹp, kết quả, nội dung.",
          "hanzi": "美结果内容。",
          "words": [
            {
              "text": "美",
              "pinyin": "mei",
              "tone": "měi",
              "pos": "adj",
              "vi": "đẹp"
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
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "mei jie guo nei rong",
          "tone": "měi jié guǒ nèi róng"
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
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "nei rong jing yan zhong yao",
          "tone": "nèi róng jīng yàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về cuộc sống và thiếu.",
          "hanzi": "生活缺少观点。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "缺少",
              "pinyin": "que shao",
              "tone": "quē shǎo",
              "pos": "verb",
              "vi": "thiếu"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 8",
          "pinyin": "sheng huo que shao guan dian",
          "tone": "shēng huó quē shǎo guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l9",
      "no": 9,
      "titleZh": "阳光总在风雨后",
      "titleVi": "Ánh nắng luôn đến sau mưa gió",
      "items": [
        {
          "stage": "word",
          "vi": "ánh nắng",
          "hanzi": "阳光",
          "words": [
            {
              "text": "阳光",
              "pinyin": "yang guang",
              "tone": "yáng guāng",
              "pos": "noun",
              "vi": "ánh nắng"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "yang guang",
          "tone": "yáng guāng"
        },
        {
          "stage": "word",
          "vi": "gió mưa",
          "hanzi": "风雨",
          "words": [
            {
              "text": "风雨",
              "pinyin": "feng yu",
              "tone": "fēng yǔ",
              "pos": "noun",
              "vi": "gió mưa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "feng yu",
          "tone": "fēng yǔ"
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
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "sheng huo",
          "tone": "shēng huó"
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
          "source": "HSK4 generated prototype - Lesson 9",
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
          "source": "HSK4 generated prototype - Lesson 9",
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
          "source": "HSK4 generated prototype - Lesson 9",
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
          "source": "HSK4 generated prototype - Lesson 9",
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
          "source": "HSK4 generated prototype - Lesson 9",
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
          "source": "HSK4 generated prototype - Lesson 9",
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
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "fang shi",
          "tone": "fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "ánh nắng và gió mưa",
          "hanzi": "阳光风雨",
          "words": [
            {
              "text": "阳光",
              "pinyin": "yang guang",
              "tone": "yáng guāng",
              "pos": "noun",
              "vi": "ánh nắng"
            },
            {
              "text": "风雨",
              "pinyin": "feng yu",
              "tone": "fēng yǔ",
              "pos": "noun",
              "vi": "gió mưa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "yang guang feng yu",
          "tone": "yáng guāng fēng yǔ"
        },
        {
          "stage": "phrase",
          "vi": "gió mưa và cuộc sống",
          "hanzi": "风雨生活",
          "words": [
            {
              "text": "风雨",
              "pinyin": "feng yu",
              "tone": "fēng yǔ",
              "pos": "noun",
              "vi": "gió mưa"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "feng yu sheng huo",
          "tone": "fēng yǔ shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và nội dung",
          "hanzi": "生活内容",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "sheng huo nei rong",
          "tone": "shēng huó nèi róng"
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
          "source": "HSK4 generated prototype - Lesson 9",
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
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "jing yan xue xi",
          "tone": "jīng yàn xué xí"
        },
        {
          "stage": "sentence",
          "vi": "ánh nắng gió mưa.",
          "hanzi": "阳光风雨。",
          "words": [
            {
              "text": "阳光",
              "pinyin": "yang guang",
              "tone": "yáng guāng",
              "pos": "noun",
              "vi": "ánh nắng"
            },
            {
              "text": "风雨",
              "pinyin": "feng yu",
              "tone": "fēng yǔ",
              "pos": "noun",
              "vi": "gió mưa"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "yang guang feng yu",
          "tone": "yáng guāng fēng yǔ"
        },
        {
          "stage": "sentence",
          "vi": "gió mưa có liên quan đến cuộc sống.",
          "hanzi": "风雨和生活有关。",
          "words": [
            {
              "text": "风雨",
              "pinyin": "feng yu",
              "tone": "fēng yǔ",
              "pos": "noun",
              "vi": "gió mưa"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "feng yu sheng huo",
          "tone": "fēng yǔ shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống, nội dung, kinh nghiệm.",
          "hanzi": "生活内容经验。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
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
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "sheng huo nei rong jing yan",
          "tone": "shēng huó nèi róng jīng yàn"
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
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "jing yan xue xi zhong yao",
          "tone": "jīng yàn xué xí zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về ánh nắng và gió mưa.",
          "hanzi": "阳光风雨观点。",
          "words": [
            {
              "text": "阳光",
              "pinyin": "yang guang",
              "tone": "yáng guāng",
              "pos": "noun",
              "vi": "ánh nắng"
            },
            {
              "text": "风雨",
              "pinyin": "feng yu",
              "tone": "fēng yǔ",
              "pos": "noun",
              "vi": "gió mưa"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 9",
          "pinyin": "yang guang feng yu guan dian",
          "tone": "yáng guāng fēng yǔ guān diǎn"
        }
      ]
    },
    {
      "id": "hsk4-l10",
      "no": 10,
      "titleZh": "幸福的标准",
      "titleVi": "Tiêu chuẩn của hạnh phúc",
      "items": [
        {
          "stage": "word",
          "vi": "hạnh phúc",
          "hanzi": "幸福",
          "words": [
            {
              "text": "幸福",
              "pinyin": "xing fu",
              "tone": "xìng fú",
              "pos": "noun",
              "vi": "hạnh phúc"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "xing fu",
          "tone": "xìng fú"
        },
        {
          "stage": "word",
          "vi": "tiêu chuẩn",
          "hanzi": "标准",
          "words": [
            {
              "text": "标准",
              "pinyin": "biao zhun",
              "tone": "biāo zhǔn",
              "pos": "noun",
              "vi": "tiêu chuẩn"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "biao zhun",
          "tone": "biāo zhǔn"
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
          "source": "HSK4 generated prototype - Lesson 10",
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
          "source": "HSK4 generated prototype - Lesson 10",
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
          "source": "HSK4 generated prototype - Lesson 10",
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
          "source": "HSK4 generated prototype - Lesson 10",
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
          "source": "HSK4 generated prototype - Lesson 10",
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
          "source": "HSK4 generated prototype - Lesson 10",
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
          "source": "HSK4 generated prototype - Lesson 10",
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
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "ji xu",
          "tone": "jì xù"
        },
        {
          "stage": "phrase",
          "vi": "hạnh phúc và tiêu chuẩn",
          "hanzi": "幸福标准",
          "words": [
            {
              "text": "幸福",
              "pinyin": "xing fu",
              "tone": "xìng fú",
              "pos": "noun",
              "vi": "hạnh phúc"
            },
            {
              "text": "标准",
              "pinyin": "biao zhun",
              "tone": "biāo zhǔn",
              "pos": "noun",
              "vi": "tiêu chuẩn"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "xing fu biao zhun",
          "tone": "xìng fú biāo zhǔn"
        },
        {
          "stage": "phrase",
          "vi": "tiêu chuẩn và quan điểm",
          "hanzi": "标准观点",
          "words": [
            {
              "text": "标准",
              "pinyin": "biao zhun",
              "tone": "biāo zhǔn",
              "pos": "noun",
              "vi": "tiêu chuẩn"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "biao zhun guan dian",
          "tone": "biāo zhǔn guān diǎn"
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
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "guan dian jing yan",
          "tone": "guān diǎn jīng yàn"
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
          "source": "HSK4 generated prototype - Lesson 10",
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
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "xue xi gong zuo",
          "tone": "xué xí gōng zuò"
        },
        {
          "stage": "sentence",
          "vi": "hạnh phúc tiêu chuẩn.",
          "hanzi": "幸福标准。",
          "words": [
            {
              "text": "幸福",
              "pinyin": "xing fu",
              "tone": "xìng fú",
              "pos": "noun",
              "vi": "hạnh phúc"
            },
            {
              "text": "标准",
              "pinyin": "biao zhun",
              "tone": "biāo zhǔn",
              "pos": "noun",
              "vi": "tiêu chuẩn"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "xing fu biao zhun",
          "tone": "xìng fú biāo zhǔn"
        },
        {
          "stage": "sentence",
          "vi": "tiêu chuẩn có liên quan đến quan điểm.",
          "hanzi": "标准和观点有关。",
          "words": [
            {
              "text": "标准",
              "pinyin": "biao zhun",
              "tone": "biāo zhǔn",
              "pos": "noun",
              "vi": "tiêu chuẩn"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "biao zhun guan dian",
          "tone": "biāo zhǔn guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "quan điểm, kinh nghiệm, học.",
          "hanzi": "观点经验学习。",
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
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xué xí",
              "pos": "verb",
              "vi": "học"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "guan dian jing yan xue xi",
          "tone": "guān diǎn jīng yàn xué xí"
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
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "xue xi gong zuo zhong yao",
          "tone": "xué xí gōng zuò zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về hạnh phúc và tiêu chuẩn.",
          "hanzi": "幸福标准观点。",
          "words": [
            {
              "text": "幸福",
              "pinyin": "xing fu",
              "tone": "xìng fú",
              "pos": "noun",
              "vi": "hạnh phúc"
            },
            {
              "text": "标准",
              "pinyin": "biao zhun",
              "tone": "biāo zhǔn",
              "pos": "noun",
              "vi": "tiêu chuẩn"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK4 generated prototype - Lesson 10",
          "pinyin": "xing fu biao zhun guan dian",
          "tone": "xìng fú biāo zhǔn guān diǎn"
        }
      ]
    }
  ]
};
});
