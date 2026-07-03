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
      "id": "hsk5-l19",
      "no": 19,
      "titleZh": "家乡的萝卜饼",
      "titleVi": "Bánh củ cải quê hương",
      "items": [
        {
          "stage": "word",
          "vi": "quê hương",
          "hanzi": "家乡",
          "words": [
            {
              "text": "家乡",
              "pinyin": "jia xiang",
              "tone": "jiā xiāng",
              "pos": "noun",
              "vi": "quê hương"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "jia xiang",
          "tone": "jiā xiāng"
        },
        {
          "stage": "word",
          "vi": "bánh củ cải",
          "hanzi": "萝卜饼",
          "words": [
            {
              "text": "萝卜饼",
              "pinyin": "luo bo bing",
              "tone": "luó bo bǐng",
              "pos": "noun",
              "vi": "bánh củ cải"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "luo bo bing",
          "tone": "luó bo bǐng"
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
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "chuan tong",
          "tone": "chuán tǒng"
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
          "source": "HSK5 generated prototype - Lesson 19",
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
          "source": "HSK5 generated prototype - Lesson 19",
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
          "source": "HSK5 generated prototype - Lesson 19",
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
          "source": "HSK5 generated prototype - Lesson 19",
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
          "source": "HSK5 generated prototype - Lesson 19",
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
          "source": "HSK5 generated prototype - Lesson 19",
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
          "source": "HSK5 generated prototype - Lesson 19",
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
          "source": "HSK5 generated prototype - Lesson 19",
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
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "wen hua",
          "tone": "wén huà"
        },
        {
          "stage": "phrase",
          "vi": "quê hương và bánh củ cải",
          "hanzi": "家乡萝卜饼",
          "words": [
            {
              "text": "家乡",
              "pinyin": "jia xiang",
              "tone": "jiā xiāng",
              "pos": "noun",
              "vi": "quê hương"
            },
            {
              "text": "萝卜饼",
              "pinyin": "luo bo bing",
              "tone": "luó bo bǐng",
              "pos": "noun",
              "vi": "bánh củ cải"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "jia xiang luo bo bing",
          "tone": "jiā xiāng luó bo bǐng"
        },
        {
          "stage": "phrase",
          "vi": "bánh củ cải và truyền thống",
          "hanzi": "萝卜饼传统",
          "words": [
            {
              "text": "萝卜饼",
              "pinyin": "luo bo bing",
              "tone": "luó bo bǐng",
              "pos": "noun",
              "vi": "bánh củ cải"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "luo bo bing chuan tong",
          "tone": "luó bo bǐng chuán tǒng"
        },
        {
          "stage": "phrase",
          "vi": "truyền thống và nội dung",
          "hanzi": "传统内容",
          "words": [
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            },
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "chuan tong nei rong",
          "tone": "chuán tǒng nèi róng"
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
          "source": "HSK5 generated prototype - Lesson 19",
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
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "jing zheng jing yan",
          "tone": "jìng zhēng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "quê hương bánh củ cải.",
          "hanzi": "家乡萝卜饼。",
          "words": [
            {
              "text": "家乡",
              "pinyin": "jia xiang",
              "tone": "jiā xiāng",
              "pos": "noun",
              "vi": "quê hương"
            },
            {
              "text": "萝卜饼",
              "pinyin": "luo bo bing",
              "tone": "luó bo bǐng",
              "pos": "noun",
              "vi": "bánh củ cải"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "jia xiang luo bo bing",
          "tone": "jiā xiāng luó bo bǐng"
        },
        {
          "stage": "sentence",
          "vi": "bánh củ cải có liên quan đến truyền thống.",
          "hanzi": "萝卜饼和传统有关。",
          "words": [
            {
              "text": "萝卜饼",
              "pinyin": "luo bo bing",
              "tone": "luó bo bǐng",
              "pos": "noun",
              "vi": "bánh củ cải"
            },
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "luo bo bing chuan tong",
          "tone": "luó bo bǐng chuán tǒng"
        },
        {
          "stage": "sentence",
          "vi": "truyền thống, nội dung, cạnh tranh.",
          "hanzi": "传统内容竞争。",
          "words": [
            {
              "text": "传统",
              "pinyin": "chuan tong",
              "tone": "chuán tǒng",
              "pos": "noun",
              "vi": "truyền thống"
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
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "chuan tong nei rong jing zheng",
          "tone": "chuán tǒng nèi róng jìng zhēng"
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
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "jing zheng jing yan zhong yao",
          "tone": "jìng zhēng jīng yàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về quê hương và bánh củ cải.",
          "hanzi": "家乡萝卜饼观点。",
          "words": [
            {
              "text": "家乡",
              "pinyin": "jia xiang",
              "tone": "jiā xiāng",
              "pos": "noun",
              "vi": "quê hương"
            },
            {
              "text": "萝卜饼",
              "pinyin": "luo bo bing",
              "tone": "luó bo bǐng",
              "pos": "noun",
              "vi": "bánh củ cải"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 19",
          "pinyin": "jia xiang luo bo bing guan dian",
          "tone": "jiā xiāng luó bo bǐng guān diǎn"
        }
      ]
    },
    {
      "id": "hsk5-l20",
      "no": 20,
      "titleZh": "小人书摊",
      "titleVi": "Sạp truyện tranh cũ",
      "items": [
        {
          "stage": "word",
          "vi": "sạp truyện tranh cũ",
          "hanzi": "小人书摊",
          "words": [
            {
              "text": "小人书摊",
              "pinyin": "xiao ren shu tan",
              "tone": "xiǎo rén shū tān",
              "pos": "noun",
              "vi": "sạp truyện tranh cũ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "xiao ren shu tan",
          "tone": "xiǎo rén shū tān"
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
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "wen hua",
          "tone": "wén huà"
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
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "sheng huo",
          "tone": "shēng huó"
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
          "source": "HSK5 generated prototype - Lesson 20",
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
          "source": "HSK5 generated prototype - Lesson 20",
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
          "source": "HSK5 generated prototype - Lesson 20",
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
          "source": "HSK5 generated prototype - Lesson 20",
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
          "source": "HSK5 generated prototype - Lesson 20",
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
          "source": "HSK5 generated prototype - Lesson 20",
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
          "source": "HSK5 generated prototype - Lesson 20",
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
          "source": "HSK5 generated prototype - Lesson 20",
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
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "fang shi",
          "tone": "fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "sạp truyện tranh cũ và văn hóa",
          "hanzi": "小人书摊文化",
          "words": [
            {
              "text": "小人书摊",
              "pinyin": "xiao ren shu tan",
              "tone": "xiǎo rén shū tān",
              "pos": "noun",
              "vi": "sạp truyện tranh cũ"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "xiao ren shu tan wen hua",
          "tone": "xiǎo rén shū tān wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và cuộc sống",
          "hanzi": "文化生活",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "wen hua sheng huo",
          "tone": "wén huà shēng huó"
        },
        {
          "stage": "phrase",
          "vi": "cuộc sống và cạnh tranh",
          "hanzi": "生活竞争",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            },
            {
              "text": "竞争",
              "pinyin": "jing zheng",
              "tone": "jìng zhēng",
              "pos": "noun",
              "vi": "cạnh tranh"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "sheng huo jing zheng",
          "tone": "shēng huó jìng zhēng"
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
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "jing zheng jing yan",
          "tone": "jìng zhēng jīng yàn"
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
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "jing yan jiao liu",
          "tone": "jīng yàn jiāo liú"
        },
        {
          "stage": "sentence",
          "vi": "sạp truyện tranh cũ văn hóa.",
          "hanzi": "小人书摊文化。",
          "words": [
            {
              "text": "小人书摊",
              "pinyin": "xiao ren shu tan",
              "tone": "xiǎo rén shū tān",
              "pos": "noun",
              "vi": "sạp truyện tranh cũ"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "xiao ren shu tan wen hua",
          "tone": "xiǎo rén shū tān wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa có liên quan đến cuộc sống.",
          "hanzi": "文化和生活有关。",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "wen hua sheng huo",
          "tone": "wén huà shēng huó"
        },
        {
          "stage": "sentence",
          "vi": "cuộc sống, cạnh tranh, kinh nghiệm.",
          "hanzi": "生活竞争经验。",
          "words": [
            {
              "text": "生活",
              "pinyin": "sheng huo",
              "tone": "shēng huó",
              "pos": "noun",
              "vi": "cuộc sống"
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
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "sheng huo jing zheng jing yan",
          "tone": "shēng huó jìng zhēng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "kinh nghiệm và giao tiếp rất quan trọng.",
          "hanzi": "经验交流很重要。",
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
            },
            {
              "text": "重要",
              "pinyin": "zhong yao",
              "tone": "zhòng yào",
              "pos": "adj",
              "vi": "quan trọng"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "jing yan jiao liu zhong yao",
          "tone": "jīng yàn jiāo liú zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về sạp truyện tranh cũ và văn hóa.",
          "hanzi": "小人书摊文化观点。",
          "words": [
            {
              "text": "小人书摊",
              "pinyin": "xiao ren shu tan",
              "tone": "xiǎo rén shū tān",
              "pos": "noun",
              "vi": "sạp truyện tranh cũ"
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
          "source": "HSK5 generated prototype - Lesson 20",
          "pinyin": "xiao ren shu tan wen hua guan dian",
          "tone": "xiǎo rén shū tān wén huà guān diǎn"
        }
      ]
    },
    {
      "id": "hsk5-l21",
      "no": 21,
      "titleZh": "汉字叔叔：一个美国人的汉字情缘",
      "titleVi": "Chú Hán tự: duyên với chữ Hán của một người Mỹ",
      "items": [
        {
          "stage": "word",
          "vi": "Chú Hán tự",
          "hanzi": "汉字叔叔",
          "words": [
            {
              "text": "汉字叔叔",
              "pinyin": "han zi shu shu",
              "tone": "hàn zì shū shu",
              "pos": "noun",
              "vi": "Chú Hán tự"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "han zi shu shu",
          "tone": "hàn zì shū shu"
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
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "zhong guo ren",
          "tone": "zhōng guó rén"
        },
        {
          "stage": "word",
          "vi": "duyên tình, duyên gắn bó",
          "hanzi": "情缘",
          "words": [
            {
              "text": "情缘",
              "pinyin": "qing yuan",
              "tone": "qíng yuán",
              "pos": "noun",
              "vi": "duyên tình, duyên gắn bó"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "qing yuan",
          "tone": "qíng yuán"
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
          "source": "HSK5 generated prototype - Lesson 21",
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
          "source": "HSK5 generated prototype - Lesson 21",
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
          "source": "HSK5 generated prototype - Lesson 21",
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
          "source": "HSK5 generated prototype - Lesson 21",
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
          "source": "HSK5 generated prototype - Lesson 21",
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
          "source": "HSK5 generated prototype - Lesson 21",
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
          "source": "HSK5 generated prototype - Lesson 21",
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
          "source": "HSK5 generated prototype - Lesson 21",
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
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "bao hu",
          "tone": "bǎo hù"
        },
        {
          "stage": "phrase",
          "vi": "Chú Hán tự và người Trung Quốc",
          "hanzi": "汉字叔叔中国人",
          "words": [
            {
              "text": "汉字叔叔",
              "pinyin": "han zi shu shu",
              "tone": "hàn zì shū shu",
              "pos": "noun",
              "vi": "Chú Hán tự"
            },
            {
              "text": "中国人",
              "pinyin": "zhong guo ren",
              "tone": "zhōng guó rén",
              "pos": "noun",
              "vi": "người Trung Quốc"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "han zi shu shu zhong guo ren",
          "tone": "hàn zì shū shu zhōng guó rén"
        },
        {
          "stage": "phrase",
          "vi": "người Trung Quốc và duyên tình, duyên gắn bó",
          "hanzi": "中国人情缘",
          "words": [
            {
              "text": "中国人",
              "pinyin": "zhong guo ren",
              "tone": "zhōng guó rén",
              "pos": "noun",
              "vi": "người Trung Quốc"
            },
            {
              "text": "情缘",
              "pinyin": "qing yuan",
              "tone": "qíng yuán",
              "pos": "noun",
              "vi": "duyên tình, duyên gắn bó"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "zhong guo ren qing yuan",
          "tone": "zhōng guó rén qíng yuán"
        },
        {
          "stage": "phrase",
          "vi": "duyên tình, duyên gắn bó và nội dung",
          "hanzi": "情缘内容",
          "words": [
            {
              "text": "情缘",
              "pinyin": "qing yuan",
              "tone": "qíng yuán",
              "pos": "noun",
              "vi": "duyên tình, duyên gắn bó"
            },
            {
              "text": "内容",
              "pinyin": "nei rong",
              "tone": "nèi róng",
              "pos": "noun",
              "vi": "nội dung"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "qing yuan nei rong",
          "tone": "qíng yuán nèi róng"
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
          "source": "HSK5 generated prototype - Lesson 21",
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
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "jing zheng jing yan",
          "tone": "jìng zhēng jīng yàn"
        },
        {
          "stage": "sentence",
          "vi": "Chú Hán tự người Trung Quốc.",
          "hanzi": "汉字叔叔中国人。",
          "words": [
            {
              "text": "汉字叔叔",
              "pinyin": "han zi shu shu",
              "tone": "hàn zì shū shu",
              "pos": "noun",
              "vi": "Chú Hán tự"
            },
            {
              "text": "中国人",
              "pinyin": "zhong guo ren",
              "tone": "zhōng guó rén",
              "pos": "noun",
              "vi": "người Trung Quốc"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "han zi shu shu zhong guo ren",
          "tone": "hàn zì shū shu zhōng guó rén"
        },
        {
          "stage": "sentence",
          "vi": "người Trung Quốc có liên quan đến duyên tình, duyên gắn bó.",
          "hanzi": "中国人和情缘有关。",
          "words": [
            {
              "text": "中国人",
              "pinyin": "zhong guo ren",
              "tone": "zhōng guó rén",
              "pos": "noun",
              "vi": "người Trung Quốc"
            },
            {
              "text": "情缘",
              "pinyin": "qing yuan",
              "tone": "qíng yuán",
              "pos": "noun",
              "vi": "duyên tình, duyên gắn bó"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "zhong guo ren qing yuan",
          "tone": "zhōng guó rén qíng yuán"
        },
        {
          "stage": "sentence",
          "vi": "duyên tình, duyên gắn bó, nội dung, cạnh tranh.",
          "hanzi": "情缘内容竞争。",
          "words": [
            {
              "text": "情缘",
              "pinyin": "qing yuan",
              "tone": "qíng yuán",
              "pos": "noun",
              "vi": "duyên tình, duyên gắn bó"
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
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "qing yuan nei rong jing zheng",
          "tone": "qíng yuán nèi róng jìng zhēng"
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
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "jing zheng jing yan zhong yao",
          "tone": "jìng zhēng jīng yàn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về Chú Hán tự và người Trung Quốc.",
          "hanzi": "汉字叔叔中国人观点。",
          "words": [
            {
              "text": "汉字叔叔",
              "pinyin": "han zi shu shu",
              "tone": "hàn zì shū shu",
              "pos": "noun",
              "vi": "Chú Hán tự"
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
          "source": "HSK5 generated prototype - Lesson 21",
          "pinyin": "han zi shu shu zhong guo ren guan dian",
          "tone": "hàn zì shū shu zhōng guó rén guān diǎn"
        }
      ]
    },
    {
      "id": "hsk5-l22",
      "no": 22,
      "titleZh": "阅读与思考",
      "titleVi": "Đọc và suy nghĩ",
      "items": [
        {
          "stage": "word",
          "vi": "đọc",
          "hanzi": "阅读",
          "words": [
            {
              "text": "阅读",
              "pinyin": "yue du",
              "tone": "yuè dú",
              "pos": "verb",
              "vi": "đọc"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "yue du",
          "tone": "yuè dú"
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
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "si kao",
          "tone": "sī kǎo"
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
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "guan dian",
          "tone": "guān diǎn"
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
          "source": "HSK5 generated prototype - Lesson 22",
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
          "source": "HSK5 generated prototype - Lesson 22",
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
          "source": "HSK5 generated prototype - Lesson 22",
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
          "source": "HSK5 generated prototype - Lesson 22",
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
          "source": "HSK5 generated prototype - Lesson 22",
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
          "source": "HSK5 generated prototype - Lesson 22",
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
          "source": "HSK5 generated prototype - Lesson 22",
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
          "source": "HSK5 generated prototype - Lesson 22",
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
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "nei rong",
          "tone": "nèi róng"
        },
        {
          "stage": "phrase",
          "vi": "đọc và suy nghĩ",
          "hanzi": "阅读思考",
          "words": [
            {
              "text": "阅读",
              "pinyin": "yue du",
              "tone": "yuè dú",
              "pos": "verb",
              "vi": "đọc"
            },
            {
              "text": "思考",
              "pinyin": "si kao",
              "tone": "sī kǎo",
              "pos": "verb",
              "vi": "suy nghĩ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "yue du si kao",
          "tone": "yuè dú sī kǎo"
        },
        {
          "stage": "phrase",
          "vi": "suy nghĩ và quan điểm",
          "hanzi": "思考观点",
          "words": [
            {
              "text": "思考",
              "pinyin": "si kao",
              "tone": "sī kǎo",
              "pos": "verb",
              "vi": "suy nghĩ"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "si kao guan dian",
          "tone": "sī kǎo guān diǎn"
        },
        {
          "stage": "phrase",
          "vi": "quan điểm và giao tiếp",
          "hanzi": "观点交流",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
            {
              "text": "交流",
              "pinyin": "jiao liu",
              "tone": "jiāo liú",
              "pos": "verb",
              "vi": "giao tiếp"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "guan dian jiao liu",
          "tone": "guān diǎn jiāo liú"
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
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "jiao liu pan duan",
          "tone": "jiāo liú pàn duàn"
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
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "pan duan diao cha",
          "tone": "pàn duàn diào chá"
        },
        {
          "stage": "sentence",
          "vi": "đọc suy nghĩ.",
          "hanzi": "阅读思考。",
          "words": [
            {
              "text": "阅读",
              "pinyin": "yue du",
              "tone": "yuè dú",
              "pos": "verb",
              "vi": "đọc"
            },
            {
              "text": "思考",
              "pinyin": "si kao",
              "tone": "sī kǎo",
              "pos": "verb",
              "vi": "suy nghĩ"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "yue du si kao",
          "tone": "yuè dú sī kǎo"
        },
        {
          "stage": "sentence",
          "vi": "suy nghĩ có liên quan đến quan điểm.",
          "hanzi": "思考和观点有关。",
          "words": [
            {
              "text": "思考",
              "pinyin": "si kao",
              "tone": "sī kǎo",
              "pos": "verb",
              "vi": "suy nghĩ"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "si kao guan dian",
          "tone": "sī kǎo guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "quan điểm, giao tiếp, phán đoán.",
          "hanzi": "观点交流判断。",
          "words": [
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            },
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
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "guan dian jiao liu pan duan",
          "tone": "guān diǎn jiāo liú pàn duàn"
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
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "pan duan diao cha zhong yao",
          "tone": "pàn duàn diào chá zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đọc và suy nghĩ.",
          "hanzi": "阅读思考观点。",
          "words": [
            {
              "text": "阅读",
              "pinyin": "yue du",
              "tone": "yuè dú",
              "pos": "verb",
              "vi": "đọc"
            },
            {
              "text": "思考",
              "pinyin": "si kao",
              "tone": "sī kǎo",
              "pos": "verb",
              "vi": "suy nghĩ"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 22",
          "pinyin": "yue du si kao guan dian",
          "tone": "yuè dú sī kǎo guān diǎn"
        }
      ]
    },
    {
      "id": "hsk5-l23",
      "no": 23,
      "titleZh": "放手",
      "titleVi": "Buông tay",
      "items": [
        {
          "stage": "word",
          "vi": "buông tay",
          "hanzi": "放手",
          "words": [
            {
              "text": "放手",
              "pinyin": "fang shou",
              "tone": "fàng shǒu",
              "pos": "verb",
              "vi": "buông tay"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 23",
          "pinyin": "fang shou",
          "tone": "fàng shǒu"
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
          "pinyin": "fang shi",
          "tone": "fāng shì"
        },
        {
          "stage": "phrase",
          "vi": "buông tay và tình yêu",
          "hanzi": "放手爱情",
          "words": [
            {
              "text": "放手",
              "pinyin": "fang shou",
              "tone": "fàng shǒu",
              "pos": "verb",
              "vi": "buông tay"
            },
            {
              "text": "爱情",
              "pinyin": "ai qing",
              "tone": "ài qíng",
              "pos": "noun",
              "vi": "tình yêu"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 23",
          "pinyin": "fang shou ai qing",
          "tone": "fàng shǒu ài qíng"
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
          "source": "HSK5 generated prototype - Lesson 23",
          "pinyin": "ai qing sheng huo",
          "tone": "ài qíng shēng huó"
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
          "pinyin": "jiao liu guan dian",
          "tone": "jiāo liú guān diǎn"
        },
        {
          "stage": "sentence",
          "vi": "buông tay tình yêu.",
          "hanzi": "放手爱情。",
          "words": [
            {
              "text": "放手",
              "pinyin": "fang shou",
              "tone": "fàng shǒu",
              "pos": "verb",
              "vi": "buông tay"
            },
            {
              "text": "爱情",
              "pinyin": "ai qing",
              "tone": "ài qíng",
              "pos": "noun",
              "vi": "tình yêu"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 23",
          "pinyin": "fang shou ai qing",
          "tone": "fàng shǒu ài qíng"
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
          "source": "HSK5 generated prototype - Lesson 23",
          "pinyin": "ai qing sheng huo",
          "tone": "ài qíng shēng huó"
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
          "source": "HSK5 generated prototype - Lesson 23",
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
          "source": "HSK5 generated prototype - Lesson 23",
          "pinyin": "jiao liu guan dian zhong yao",
          "tone": "jiāo liú guān diǎn zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về buông tay và tình yêu.",
          "hanzi": "放手爱情观点。",
          "words": [
            {
              "text": "放手",
              "pinyin": "fang shou",
              "tone": "fàng shǒu",
              "pos": "verb",
              "vi": "buông tay"
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
          "source": "HSK5 generated prototype - Lesson 23",
          "pinyin": "fang shou ai qing guan dian",
          "tone": "fàng shǒu ài qíng guān diǎn"
        }
      ]
    },
    {
      "id": "hsk5-l24",
      "no": 24,
      "titleZh": "支教行动",
      "titleVi": "Hoạt động đi dạy tình nguyện",
      "items": [
        {
          "stage": "word",
          "vi": "đi dạy tình nguyện",
          "hanzi": "支教",
          "words": [
            {
              "text": "支教",
              "pinyin": "zhi jiao",
              "tone": "zhī jiào",
              "pos": "verb",
              "vi": "đi dạy tình nguyện"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "zhi jiao",
          "tone": "zhī jiào"
        },
        {
          "stage": "word",
          "vi": "hành động",
          "hanzi": "行动",
          "words": [
            {
              "text": "行动",
              "pinyin": "xing dong",
              "tone": "xíng dòng",
              "pos": "noun",
              "vi": "hành động"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "xing dong",
          "tone": "xíng dòng"
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
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "wen hua",
          "tone": "wén huà"
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
          "source": "HSK5 generated prototype - Lesson 24",
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
          "source": "HSK5 generated prototype - Lesson 24",
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
          "source": "HSK5 generated prototype - Lesson 24",
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
          "source": "HSK5 generated prototype - Lesson 24",
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
          "source": "HSK5 generated prototype - Lesson 24",
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
          "source": "HSK5 generated prototype - Lesson 24",
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
          "source": "HSK5 generated prototype - Lesson 24",
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
          "source": "HSK5 generated prototype - Lesson 24",
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
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "jing yan",
          "tone": "jīng yàn"
        },
        {
          "stage": "phrase",
          "vi": "đi dạy tình nguyện và hành động",
          "hanzi": "支教行动",
          "words": [
            {
              "text": "支教",
              "pinyin": "zhi jiao",
              "tone": "zhī jiào",
              "pos": "verb",
              "vi": "đi dạy tình nguyện"
            },
            {
              "text": "行动",
              "pinyin": "xing dong",
              "tone": "xíng dòng",
              "pos": "noun",
              "vi": "hành động"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "zhi jiao xing dong",
          "tone": "zhī jiào xíng dòng"
        },
        {
          "stage": "phrase",
          "vi": "hành động và văn hóa",
          "hanzi": "行动文化",
          "words": [
            {
              "text": "行动",
              "pinyin": "xing dong",
              "tone": "xíng dòng",
              "pos": "noun",
              "vi": "hành động"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "xing dong wen hua",
          "tone": "xíng dòng wén huà"
        },
        {
          "stage": "phrase",
          "vi": "văn hóa và phán đoán",
          "hanzi": "文化判断",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            },
            {
              "text": "判断",
              "pinyin": "pan duan",
              "tone": "pàn duàn",
              "pos": "verb",
              "vi": "phán đoán"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "wen hua pan duan",
          "tone": "wén huà pàn duàn"
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
          "source": "HSK5 generated prototype - Lesson 24",
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
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "diao cha chuan tong",
          "tone": "diào chá chuán tǒng"
        },
        {
          "stage": "sentence",
          "vi": "đi dạy tình nguyện hành động.",
          "hanzi": "支教行动。",
          "words": [
            {
              "text": "支教",
              "pinyin": "zhi jiao",
              "tone": "zhī jiào",
              "pos": "verb",
              "vi": "đi dạy tình nguyện"
            },
            {
              "text": "行动",
              "pinyin": "xing dong",
              "tone": "xíng dòng",
              "pos": "noun",
              "vi": "hành động"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "zhi jiao xing dong",
          "tone": "zhī jiào xíng dòng"
        },
        {
          "stage": "sentence",
          "vi": "hành động có liên quan đến văn hóa.",
          "hanzi": "行动和文化有关。",
          "words": [
            {
              "text": "行动",
              "pinyin": "xing dong",
              "tone": "xíng dòng",
              "pos": "noun",
              "vi": "hành động"
            },
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "xing dong wen hua",
          "tone": "xíng dòng wén huà"
        },
        {
          "stage": "sentence",
          "vi": "văn hóa, phán đoán, điều tra.",
          "hanzi": "文化判断调查。",
          "words": [
            {
              "text": "文化",
              "pinyin": "wen hua",
              "tone": "wén huà",
              "pos": "noun",
              "vi": "văn hóa"
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
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "wen hua pan duan diao cha",
          "tone": "wén huà pàn duàn diào chá"
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
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "diao cha chuan tong zhong yao",
          "tone": "diào chá chuán tǒng zhòng yào"
        },
        {
          "stage": "mixed",
          "vi": "Quan điểm về đi dạy tình nguyện và hành động.",
          "hanzi": "支教行动观点。",
          "words": [
            {
              "text": "支教",
              "pinyin": "zhi jiao",
              "tone": "zhī jiào",
              "pos": "verb",
              "vi": "đi dạy tình nguyện"
            },
            {
              "text": "行动",
              "pinyin": "xing dong",
              "tone": "xíng dòng",
              "pos": "noun",
              "vi": "hành động"
            },
            {
              "text": "观点",
              "pinyin": "guan dian",
              "tone": "guān diǎn",
              "pos": "noun",
              "vi": "quan điểm"
            }
          ],
          "source": "HSK5 generated prototype - Lesson 24",
          "pinyin": "zhi jiao xing dong guan dian",
          "tone": "zhī jiào xíng dòng guān diǎn"
        }
      ]
    }
  ]
};
});
