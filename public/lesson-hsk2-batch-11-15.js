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
  "level": "HSK2",
  "lessons": [
    {
      "id": "hsk2-l11",
      "no": 11,
      "titleZh": "周末和朋友看电影",
      "titleVi": "Cuối tuần xem phim với bạn",
      "items": [
        {
          "stage": "word",
          "vi": "phim",
          "hanzi": "电影",
          "words": [
            {
              "text": "电影",
              "pinyin": "dian ying",
              "tone": "dian ying",
              "pos": "noun",
              "vi": "phim"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "dian ying",
          "tone": "dian ying"
        },
        {
          "stage": "word",
          "vi": "am nhac",
          "hanzi": "音乐",
          "words": [
            {
              "text": "音乐",
              "pinyin": "yin yue",
              "tone": "yin yue",
              "pos": "noun",
              "vi": "am nhac"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "yin yue",
          "tone": "yin yue"
        },
        {
          "stage": "word",
          "vi": "hat",
          "hanzi": "唱歌",
          "words": [
            {
              "text": "唱歌",
              "pinyin": "chang ge",
              "tone": "chang ge",
              "pos": "verb",
              "vi": "hat"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "chang ge",
          "tone": "chang ge"
        },
        {
          "stage": "word",
          "vi": "nhay",
          "hanzi": "跳舞",
          "words": [
            {
              "text": "跳舞",
              "pinyin": "tiao wu",
              "tone": "tiao wu",
              "pos": "verb",
              "vi": "nhay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "tiao wu",
          "tone": "tiao wu"
        },
        {
          "stage": "word",
          "vi": "boi",
          "hanzi": "游泳",
          "words": [
            {
              "text": "游泳",
              "pinyin": "you yong",
              "tone": "you yong",
              "pos": "verb",
              "vi": "boi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "you yong",
          "tone": "you yong"
        },
        {
          "stage": "word",
          "vi": "chay bo",
          "hanzi": "跑步",
          "words": [
            {
              "text": "跑步",
              "pinyin": "pao bu",
              "tone": "pao bu",
              "pos": "verb",
              "vi": "chay bo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "pao bu",
          "tone": "pao bu"
        },
        {
          "stage": "word",
          "vi": "thi dau",
          "hanzi": "比赛",
          "words": [
            {
              "text": "比赛",
              "pinyin": "bi sai",
              "tone": "bi sai",
              "pos": "noun",
              "vi": "thi dau"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "bi sai",
          "tone": "bi sai"
        },
        {
          "stage": "word",
          "vi": "so thich",
          "hanzi": "兴趣",
          "words": [
            {
              "text": "兴趣",
              "pinyin": "xing qu",
              "tone": "xing qu",
              "pos": "noun",
              "vi": "so thich"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "xing qu",
          "tone": "xing qu"
        },
        {
          "stage": "word",
          "vi": "cuoi tuan",
          "hanzi": "周末",
          "words": [
            {
              "text": "周末",
              "pinyin": "zhou mo",
              "tone": "zhou mo",
              "pos": "noun",
              "vi": "cuoi tuan"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "zhou mo",
          "tone": "zhou mo"
        },
        {
          "stage": "word",
          "vi": "ban be",
          "hanzi": "朋友",
          "words": [
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "peng you",
              "pos": "noun",
              "vi": "ban be"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "peng you",
          "tone": "peng you"
        },
        {
          "stage": "phrase",
          "vi": "phim am nhac",
          "hanzi": "电影音乐",
          "words": [
            {
              "text": "电影",
              "pinyin": "dian ying",
              "tone": "dian ying",
              "pos": "noun",
              "vi": "phim"
            },
            {
              "text": "音乐",
              "pinyin": "yin yue",
              "tone": "yin yue",
              "pos": "noun",
              "vi": "am nhac"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "dian ying yin yue",
          "tone": "dian ying yin yue"
        },
        {
          "stage": "phrase",
          "vi": "hat nhay",
          "hanzi": "唱歌跳舞",
          "words": [
            {
              "text": "唱歌",
              "pinyin": "chang ge",
              "tone": "chang ge",
              "pos": "verb",
              "vi": "hat"
            },
            {
              "text": "跳舞",
              "pinyin": "tiao wu",
              "tone": "tiao wu",
              "pos": "verb",
              "vi": "nhay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "chang ge tiao wu",
          "tone": "chang ge tiao wu"
        },
        {
          "stage": "phrase",
          "vi": "chay bo boi",
          "hanzi": "游泳的跑步",
          "words": [
            {
              "text": "游泳",
              "pinyin": "you yong",
              "tone": "you yong",
              "pos": "verb",
              "vi": "boi"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "跑步",
              "pinyin": "pao bu",
              "tone": "pao bu",
              "pos": "verb",
              "vi": "chay bo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "you yong de pao bu",
          "tone": "you yong de pao bu"
        },
        {
          "stage": "phrase",
          "vi": "cuoi tuan ban be",
          "hanzi": "周末朋友",
          "words": [
            {
              "text": "周末",
              "pinyin": "zhou mo",
              "tone": "zhou mo",
              "pos": "noun",
              "vi": "cuoi tuan"
            },
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "peng you",
              "pos": "noun",
              "vi": "ban be"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "zhou mo peng you",
          "tone": "zhou mo peng you"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon hat nhay.",
          "hanzi": "我想唱歌跳舞。",
          "words": [
            {
              "text": "我",
              "pinyin": "wo",
              "tone": "wo",
              "pos": "pron",
              "vi": "toi"
            },
            {
              "text": "想",
              "pinyin": "xiang",
              "tone": "xiang",
              "pos": "verb",
              "vi": "muon"
            },
            {
              "text": "唱歌",
              "pinyin": "chang ge",
              "tone": "chang ge",
              "pos": "verb",
              "vi": "hat"
            },
            {
              "text": "跳舞",
              "pinyin": "tiao wu",
              "tone": "tiao wu",
              "pos": "verb",
              "vi": "nhay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "wo xiang chang ge tiao wu",
          "tone": "wo xiang chang ge tiao wu"
        },
        {
          "stage": "sentence",
          "vi": "phim am nhac rat nhay.",
          "hanzi": "电影音乐很跳舞。",
          "words": [
            {
              "text": "电影",
              "pinyin": "dian ying",
              "tone": "dian ying",
              "pos": "noun",
              "vi": "phim"
            },
            {
              "text": "音乐",
              "pinyin": "yin yue",
              "tone": "yin yue",
              "pos": "noun",
              "vi": "am nhac"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "跳舞",
              "pinyin": "tiao wu",
              "tone": "tiao wu",
              "pos": "verb",
              "vi": "nhay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "dian ying yin yue hen tiao wu",
          "tone": "dian ying yin yue hen tiao wu"
        },
        {
          "stage": "sentence",
          "vi": "Vui long so thich boi.",
          "hanzi": "请兴趣游泳。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "兴趣",
              "pinyin": "xing qu",
              "tone": "xing qu",
              "pos": "noun",
              "vi": "so thich"
            },
            {
              "text": "游泳",
              "pinyin": "you yong",
              "tone": "you yong",
              "pos": "verb",
              "vi": "boi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "qing xing qu you yong",
          "tone": "qing xing qu you yong"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi cuoi tuan ban be.",
          "hanzi": "我们周末朋友。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "周末",
              "pinyin": "zhou mo",
              "tone": "zhou mo",
              "pos": "noun",
              "vi": "cuoi tuan"
            },
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "peng you",
              "pos": "noun",
              "vi": "ban be"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "wo men zhou mo peng you",
          "tone": "wo men zhou mo peng you"
        },
        {
          "stage": "mixed",
          "vi": "chay bo boi o thi dau.",
          "hanzi": "游泳的跑步在比赛。",
          "words": [
            {
              "text": "游泳",
              "pinyin": "you yong",
              "tone": "you yong",
              "pos": "verb",
              "vi": "boi"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "跑步",
              "pinyin": "pao bu",
              "tone": "pao bu",
              "pos": "verb",
              "vi": "chay bo"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "比赛",
              "pinyin": "bi sai",
              "tone": "bi sai",
              "pos": "noun",
              "vi": "thi dau"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "you yong de pao bu zai bi sai",
          "tone": "you yong de pao bu zai bi sai"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di am nhac hat.",
          "hanzi": "我们去音乐唱歌。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "去",
              "pinyin": "qu",
              "tone": "qu",
              "pos": "verb",
              "vi": "di"
            },
            {
              "text": "音乐",
              "pinyin": "yin yue",
              "tone": "yin yue",
              "pos": "noun",
              "vi": "am nhac"
            },
            {
              "text": "唱歌",
              "pinyin": "chang ge",
              "tone": "chang ge",
              "pos": "verb",
              "vi": "hat"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "wo men qu yin yue chang ge",
          "tone": "wo men qu yin yue chang ge"
        }
      ]
    },
    {
      "id": "hsk2-l12",
      "no": 12,
      "titleZh": "每天练习中文口语",
      "titleVi": "Mỗi ngày luyện khẩu ngữ tiếng Trung",
      "items": [
        {
          "stage": "word",
          "vi": "tieng Trung",
          "hanzi": "中文",
          "words": [
            {
              "text": "中文",
              "pinyin": "zhong wen",
              "tone": "zhong wen",
              "pos": "noun",
              "vi": "tieng Trung"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "zhong wen",
          "tone": "zhong wen"
        },
        {
          "stage": "word",
          "vi": "chu Han",
          "hanzi": "汉字",
          "words": [
            {
              "text": "汉字",
              "pinyin": "han zi",
              "tone": "han zi",
              "pos": "noun",
              "vi": "chu Han"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "han zi",
          "tone": "han zi"
        },
        {
          "stage": "word",
          "vi": "ngu phap",
          "hanzi": "语法",
          "words": [
            {
              "text": "语法",
              "pinyin": "yu fa",
              "tone": "yu fa",
              "pos": "noun",
              "vi": "ngu phap"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "yu fa",
          "tone": "yu fa"
        },
        {
          "stage": "word",
          "vi": "luyen tap",
          "hanzi": "练习",
          "words": [
            {
              "text": "练习",
              "pinyin": "lian xi",
              "tone": "lian xi",
              "pos": "verb",
              "vi": "luyen tap"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "lian xi",
          "tone": "lian xi"
        },
        {
          "stage": "word",
          "vi": "nghe hieu",
          "hanzi": "听力",
          "words": [
            {
              "text": "听力",
              "pinyin": "ting li",
              "tone": "ting li",
              "pos": "noun",
              "vi": "nghe hieu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "ting li",
          "tone": "ting li"
        },
        {
          "stage": "word",
          "vi": "khau ngu",
          "hanzi": "口语",
          "words": [
            {
              "text": "口语",
              "pinyin": "kou yu",
              "tone": "kou yu",
              "pos": "noun",
              "vi": "khau ngu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "kou yu",
          "tone": "kou yu"
        },
        {
          "stage": "word",
          "vi": "doc",
          "hanzi": "阅读",
          "words": [
            {
              "text": "阅读",
              "pinyin": "yue du",
              "tone": "yue du",
              "pos": "verb",
              "vi": "doc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "yue du",
          "tone": "yue du"
        },
        {
          "stage": "word",
          "vi": "viet chu",
          "hanzi": "写字",
          "words": [
            {
              "text": "写字",
              "pinyin": "xie zi",
              "tone": "xie zi",
              "pos": "verb",
              "vi": "viet chu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "xie zi",
          "tone": "xie zi"
        },
        {
          "stage": "word",
          "vi": "on tap",
          "hanzi": "复习",
          "words": [
            {
              "text": "复习",
              "pinyin": "fu xi",
              "tone": "fu xi",
              "pos": "verb",
              "vi": "on tap"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "fu xi",
          "tone": "fu xi"
        },
        {
          "stage": "word",
          "vi": "tien bo",
          "hanzi": "进步",
          "words": [
            {
              "text": "进步",
              "pinyin": "jin bu",
              "tone": "jin bu",
              "pos": "verb",
              "vi": "tien bo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "jin bu",
          "tone": "jin bu"
        },
        {
          "stage": "phrase",
          "vi": "tieng Trung chu Han",
          "hanzi": "中文汉字",
          "words": [
            {
              "text": "中文",
              "pinyin": "zhong wen",
              "tone": "zhong wen",
              "pos": "noun",
              "vi": "tieng Trung"
            },
            {
              "text": "汉字",
              "pinyin": "han zi",
              "tone": "han zi",
              "pos": "noun",
              "vi": "chu Han"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "zhong wen han zi",
          "tone": "zhong wen han zi"
        },
        {
          "stage": "phrase",
          "vi": "ngu phap luyen tap",
          "hanzi": "语法练习",
          "words": [
            {
              "text": "语法",
              "pinyin": "yu fa",
              "tone": "yu fa",
              "pos": "noun",
              "vi": "ngu phap"
            },
            {
              "text": "练习",
              "pinyin": "lian xi",
              "tone": "lian xi",
              "pos": "verb",
              "vi": "luyen tap"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "yu fa lian xi",
          "tone": "yu fa lian xi"
        },
        {
          "stage": "phrase",
          "vi": "khau ngu nghe hieu",
          "hanzi": "听力的口语",
          "words": [
            {
              "text": "听力",
              "pinyin": "ting li",
              "tone": "ting li",
              "pos": "noun",
              "vi": "nghe hieu"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "口语",
              "pinyin": "kou yu",
              "tone": "kou yu",
              "pos": "noun",
              "vi": "khau ngu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "ting li de kou yu",
          "tone": "ting li de kou yu"
        },
        {
          "stage": "phrase",
          "vi": "on tap tien bo",
          "hanzi": "复习进步",
          "words": [
            {
              "text": "复习",
              "pinyin": "fu xi",
              "tone": "fu xi",
              "pos": "verb",
              "vi": "on tap"
            },
            {
              "text": "进步",
              "pinyin": "jin bu",
              "tone": "jin bu",
              "pos": "verb",
              "vi": "tien bo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "fu xi jin bu",
          "tone": "fu xi jin bu"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon ngu phap luyen tap.",
          "hanzi": "我想语法练习。",
          "words": [
            {
              "text": "我",
              "pinyin": "wo",
              "tone": "wo",
              "pos": "pron",
              "vi": "toi"
            },
            {
              "text": "想",
              "pinyin": "xiang",
              "tone": "xiang",
              "pos": "verb",
              "vi": "muon"
            },
            {
              "text": "语法",
              "pinyin": "yu fa",
              "tone": "yu fa",
              "pos": "noun",
              "vi": "ngu phap"
            },
            {
              "text": "练习",
              "pinyin": "lian xi",
              "tone": "lian xi",
              "pos": "verb",
              "vi": "luyen tap"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "wo xiang yu fa lian xi",
          "tone": "wo xiang yu fa lian xi"
        },
        {
          "stage": "sentence",
          "vi": "tieng Trung chu Han rat luyen tap.",
          "hanzi": "中文汉字很练习。",
          "words": [
            {
              "text": "中文",
              "pinyin": "zhong wen",
              "tone": "zhong wen",
              "pos": "noun",
              "vi": "tieng Trung"
            },
            {
              "text": "汉字",
              "pinyin": "han zi",
              "tone": "han zi",
              "pos": "noun",
              "vi": "chu Han"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "练习",
              "pinyin": "lian xi",
              "tone": "lian xi",
              "pos": "verb",
              "vi": "luyen tap"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "zhong wen han zi hen lian xi",
          "tone": "zhong wen han zi hen lian xi"
        },
        {
          "stage": "sentence",
          "vi": "Vui long viet chu nghe hieu.",
          "hanzi": "请写字听力。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "写字",
              "pinyin": "xie zi",
              "tone": "xie zi",
              "pos": "verb",
              "vi": "viet chu"
            },
            {
              "text": "听力",
              "pinyin": "ting li",
              "tone": "ting li",
              "pos": "noun",
              "vi": "nghe hieu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "qing xie zi ting li",
          "tone": "qing xie zi ting li"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi on tap tien bo.",
          "hanzi": "我们复习进步。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "复习",
              "pinyin": "fu xi",
              "tone": "fu xi",
              "pos": "verb",
              "vi": "on tap"
            },
            {
              "text": "进步",
              "pinyin": "jin bu",
              "tone": "jin bu",
              "pos": "verb",
              "vi": "tien bo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "wo men fu xi jin bu",
          "tone": "wo men fu xi jin bu"
        },
        {
          "stage": "mixed",
          "vi": "khau ngu nghe hieu o doc.",
          "hanzi": "听力的口语在阅读。",
          "words": [
            {
              "text": "听力",
              "pinyin": "ting li",
              "tone": "ting li",
              "pos": "noun",
              "vi": "nghe hieu"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "口语",
              "pinyin": "kou yu",
              "tone": "kou yu",
              "pos": "noun",
              "vi": "khau ngu"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "阅读",
              "pinyin": "yue du",
              "tone": "yue du",
              "pos": "verb",
              "vi": "doc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "ting li de kou yu zai yue du",
          "tone": "ting li de kou yu zai yue du"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di chu Han ngu phap.",
          "hanzi": "我们去汉字语法。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "去",
              "pinyin": "qu",
              "tone": "qu",
              "pos": "verb",
              "vi": "di"
            },
            {
              "text": "汉字",
              "pinyin": "han zi",
              "tone": "han zi",
              "pos": "noun",
              "vi": "chu Han"
            },
            {
              "text": "语法",
              "pinyin": "yu fa",
              "tone": "yu fa",
              "pos": "noun",
              "vi": "ngu phap"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "wo men qu han zi yu fa",
          "tone": "wo men qu han zi yu fa"
        }
      ]
    },
    {
      "id": "hsk2-l13",
      "no": 13,
      "titleZh": "打扫厨房和客厅",
      "titleVi": "Dọn bếp và phòng khách",
      "items": [
        {
          "stage": "word",
          "vi": "nha",
          "hanzi": "家",
          "words": [
            {
              "text": "家",
              "pinyin": "jia",
              "tone": "jia",
              "pos": "noun",
              "vi": "nha"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "jia",
          "tone": "jia"
        },
        {
          "stage": "word",
          "vi": "bep",
          "hanzi": "厨房",
          "words": [
            {
              "text": "厨房",
              "pinyin": "chu fang",
              "tone": "chu fang",
              "pos": "noun",
              "vi": "bep"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "chu fang",
          "tone": "chu fang"
        },
        {
          "stage": "word",
          "vi": "ban",
          "hanzi": "桌子",
          "words": [
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuo zi",
              "pos": "noun",
              "vi": "ban"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "zhuo zi",
          "tone": "zhuo zi"
        },
        {
          "stage": "word",
          "vi": "ghe",
          "hanzi": "椅子",
          "words": [
            {
              "text": "椅子",
              "pinyin": "yi zi",
              "tone": "yi zi",
              "pos": "noun",
              "vi": "ghe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "yi zi",
          "tone": "yi zi"
        },
        {
          "stage": "word",
          "vi": "cua",
          "hanzi": "门",
          "words": [
            {
              "text": "门",
              "pinyin": "men",
              "tone": "men",
              "pos": "noun",
              "vi": "cua"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "men",
          "tone": "men"
        },
        {
          "stage": "word",
          "vi": "cua so",
          "hanzi": "窗户",
          "words": [
            {
              "text": "窗户",
              "pinyin": "chuang hu",
              "tone": "chuang hu",
              "pos": "noun",
              "vi": "cua so"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "chuang hu",
          "tone": "chuang hu"
        },
        {
          "stage": "word",
          "vi": "don dep",
          "hanzi": "打扫",
          "words": [
            {
              "text": "打扫",
              "pinyin": "da sao",
              "tone": "da sao",
              "pos": "verb",
              "vi": "don dep"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "da sao",
          "tone": "da sao"
        },
        {
          "stage": "word",
          "vi": "nau com",
          "hanzi": "做饭",
          "words": [
            {
              "text": "做饭",
              "pinyin": "zuo fan",
              "tone": "zuo fan",
              "pos": "verb",
              "vi": "nau com"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "zuo fan",
          "tone": "zuo fan"
        },
        {
          "stage": "word",
          "vi": "sach se",
          "hanzi": "干净",
          "words": [
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sach se"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "gan jing",
          "tone": "gan jing"
        },
        {
          "stage": "word",
          "vi": "thoai mai",
          "hanzi": "舒服",
          "words": [
            {
              "text": "舒服",
              "pinyin": "shu fu",
              "tone": "shu fu",
              "pos": "adj",
              "vi": "thoai mai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "shu fu",
          "tone": "shu fu"
        },
        {
          "stage": "phrase",
          "vi": "nha bep",
          "hanzi": "家厨房",
          "words": [
            {
              "text": "家",
              "pinyin": "jia",
              "tone": "jia",
              "pos": "noun",
              "vi": "nha"
            },
            {
              "text": "厨房",
              "pinyin": "chu fang",
              "tone": "chu fang",
              "pos": "noun",
              "vi": "bep"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "jia chu fang",
          "tone": "jia chu fang"
        },
        {
          "stage": "phrase",
          "vi": "ban ghe",
          "hanzi": "桌子椅子",
          "words": [
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuo zi",
              "pos": "noun",
              "vi": "ban"
            },
            {
              "text": "椅子",
              "pinyin": "yi zi",
              "tone": "yi zi",
              "pos": "noun",
              "vi": "ghe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "zhuo zi yi zi",
          "tone": "zhuo zi yi zi"
        },
        {
          "stage": "phrase",
          "vi": "cua so cua",
          "hanzi": "门的窗户",
          "words": [
            {
              "text": "门",
              "pinyin": "men",
              "tone": "men",
              "pos": "noun",
              "vi": "cua"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "窗户",
              "pinyin": "chuang hu",
              "tone": "chuang hu",
              "pos": "noun",
              "vi": "cua so"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "men de chuang hu",
          "tone": "men de chuang hu"
        },
        {
          "stage": "phrase",
          "vi": "sach se thoai mai",
          "hanzi": "干净舒服",
          "words": [
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sach se"
            },
            {
              "text": "舒服",
              "pinyin": "shu fu",
              "tone": "shu fu",
              "pos": "adj",
              "vi": "thoai mai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "gan jing shu fu",
          "tone": "gan jing shu fu"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon ban ghe.",
          "hanzi": "我想桌子椅子。",
          "words": [
            {
              "text": "我",
              "pinyin": "wo",
              "tone": "wo",
              "pos": "pron",
              "vi": "toi"
            },
            {
              "text": "想",
              "pinyin": "xiang",
              "tone": "xiang",
              "pos": "verb",
              "vi": "muon"
            },
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuo zi",
              "pos": "noun",
              "vi": "ban"
            },
            {
              "text": "椅子",
              "pinyin": "yi zi",
              "tone": "yi zi",
              "pos": "noun",
              "vi": "ghe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "wo xiang zhuo zi yi zi",
          "tone": "wo xiang zhuo zi yi zi"
        },
        {
          "stage": "sentence",
          "vi": "nha bep rat ghe.",
          "hanzi": "家厨房很椅子。",
          "words": [
            {
              "text": "家",
              "pinyin": "jia",
              "tone": "jia",
              "pos": "noun",
              "vi": "nha"
            },
            {
              "text": "厨房",
              "pinyin": "chu fang",
              "tone": "chu fang",
              "pos": "noun",
              "vi": "bep"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "椅子",
              "pinyin": "yi zi",
              "tone": "yi zi",
              "pos": "noun",
              "vi": "ghe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "jia chu fang hen yi zi",
          "tone": "jia chu fang hen yi zi"
        },
        {
          "stage": "sentence",
          "vi": "Vui long nau com cua.",
          "hanzi": "请做饭门。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "做饭",
              "pinyin": "zuo fan",
              "tone": "zuo fan",
              "pos": "verb",
              "vi": "nau com"
            },
            {
              "text": "门",
              "pinyin": "men",
              "tone": "men",
              "pos": "noun",
              "vi": "cua"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "qing zuo fan men",
          "tone": "qing zuo fan men"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi sach se thoai mai.",
          "hanzi": "我们干净舒服。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sach se"
            },
            {
              "text": "舒服",
              "pinyin": "shu fu",
              "tone": "shu fu",
              "pos": "adj",
              "vi": "thoai mai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "wo men gan jing shu fu",
          "tone": "wo men gan jing shu fu"
        },
        {
          "stage": "mixed",
          "vi": "cua so cua o don dep.",
          "hanzi": "门的窗户在打扫。",
          "words": [
            {
              "text": "门",
              "pinyin": "men",
              "tone": "men",
              "pos": "noun",
              "vi": "cua"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "窗户",
              "pinyin": "chuang hu",
              "tone": "chuang hu",
              "pos": "noun",
              "vi": "cua so"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "打扫",
              "pinyin": "da sao",
              "tone": "da sao",
              "pos": "verb",
              "vi": "don dep"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "men de chuang hu zai da sao",
          "tone": "men de chuang hu zai da sao"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di bep ban.",
          "hanzi": "我们去厨房桌子。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "去",
              "pinyin": "qu",
              "tone": "qu",
              "pos": "verb",
              "vi": "di"
            },
            {
              "text": "厨房",
              "pinyin": "chu fang",
              "tone": "chu fang",
              "pos": "noun",
              "vi": "bep"
            },
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuo zi",
              "pos": "noun",
              "vi": "ban"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "wo men qu chu fang zhuo zi",
          "tone": "wo men qu chu fang zhuo zi"
        }
      ]
    },
    {
      "id": "hsk2-l14",
      "no": 14,
      "titleZh": "看地图去附近超市",
      "titleVi": "Xem bản đồ đi siêu thị gần đây",
      "items": [
        {
          "stage": "word",
          "vi": "thanh pho",
          "hanzi": "城市",
          "words": [
            {
              "text": "城市",
              "pinyin": "cheng shi",
              "tone": "cheng shi",
              "pos": "noun",
              "vi": "thanh pho"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "cheng shi",
          "tone": "cheng shi"
        },
        {
          "stage": "word",
          "vi": "duong pho",
          "hanzi": "街道",
          "words": [
            {
              "text": "街道",
              "pinyin": "jie dao",
              "tone": "jie dao",
              "pos": "noun",
              "vi": "duong pho"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "jie dao",
          "tone": "jie dao"
        },
        {
          "stage": "word",
          "vi": "ngan hang",
          "hanzi": "银行",
          "words": [
            {
              "text": "银行",
              "pinyin": "yin hang",
              "tone": "yin hang",
              "pos": "noun",
              "vi": "ngan hang"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "yin hang",
          "tone": "yin hang"
        },
        {
          "stage": "word",
          "vi": "sieu thi",
          "hanzi": "超市",
          "words": [
            {
              "text": "超市",
              "pinyin": "chao shi",
              "tone": "chao shi",
              "pos": "noun",
              "vi": "sieu thi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "chao shi",
          "tone": "chao shi"
        },
        {
          "stage": "word",
          "vi": "buu dien",
          "hanzi": "邮局",
          "words": [
            {
              "text": "邮局",
              "pinyin": "you ju",
              "tone": "you ju",
              "pos": "noun",
              "vi": "buu dien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "you ju",
          "tone": "you ju"
        },
        {
          "stage": "word",
          "vi": "gan day",
          "hanzi": "附近",
          "words": [
            {
              "text": "附近",
              "pinyin": "fu jin",
              "tone": "fu jin",
              "pos": "noun",
              "vi": "gan day"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "fu jin",
          "tone": "fu jin"
        },
        {
          "stage": "word",
          "vi": "ban do",
          "hanzi": "地图",
          "words": [
            {
              "text": "地图",
              "pinyin": "di tu",
              "tone": "di tu",
              "pos": "noun",
              "vi": "ban do"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "di tu",
          "tone": "di tu"
        },
        {
          "stage": "word",
          "vi": "phuong huong",
          "hanzi": "方向",
          "words": [
            {
              "text": "方向",
              "pinyin": "fang xiang",
              "tone": "fang xiang",
              "pos": "noun",
              "vi": "phuong huong"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "fang xiang",
          "tone": "fang xiang"
        },
        {
          "stage": "word",
          "vi": "qua duong",
          "hanzi": "过马路",
          "words": [
            {
              "text": "过马路",
              "pinyin": "guo ma lu",
              "tone": "guo ma lu",
              "pos": "verb",
              "vi": "qua duong"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "guo ma lu",
          "tone": "guo ma lu"
        },
        {
          "stage": "word",
          "vi": "an toan",
          "hanzi": "安全",
          "words": [
            {
              "text": "安全",
              "pinyin": "an quan",
              "tone": "an quan",
              "pos": "adj",
              "vi": "an toan"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "an quan",
          "tone": "an quan"
        },
        {
          "stage": "phrase",
          "vi": "thanh pho duong pho",
          "hanzi": "城市街道",
          "words": [
            {
              "text": "城市",
              "pinyin": "cheng shi",
              "tone": "cheng shi",
              "pos": "noun",
              "vi": "thanh pho"
            },
            {
              "text": "街道",
              "pinyin": "jie dao",
              "tone": "jie dao",
              "pos": "noun",
              "vi": "duong pho"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "cheng shi jie dao",
          "tone": "cheng shi jie dao"
        },
        {
          "stage": "phrase",
          "vi": "ngan hang sieu thi",
          "hanzi": "银行超市",
          "words": [
            {
              "text": "银行",
              "pinyin": "yin hang",
              "tone": "yin hang",
              "pos": "noun",
              "vi": "ngan hang"
            },
            {
              "text": "超市",
              "pinyin": "chao shi",
              "tone": "chao shi",
              "pos": "noun",
              "vi": "sieu thi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "yin hang chao shi",
          "tone": "yin hang chao shi"
        },
        {
          "stage": "phrase",
          "vi": "gan day buu dien",
          "hanzi": "邮局的附近",
          "words": [
            {
              "text": "邮局",
              "pinyin": "you ju",
              "tone": "you ju",
              "pos": "noun",
              "vi": "buu dien"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "附近",
              "pinyin": "fu jin",
              "tone": "fu jin",
              "pos": "noun",
              "vi": "gan day"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "you ju de fu jin",
          "tone": "you ju de fu jin"
        },
        {
          "stage": "phrase",
          "vi": "qua duong an toan",
          "hanzi": "过马路安全",
          "words": [
            {
              "text": "过马路",
              "pinyin": "guo ma lu",
              "tone": "guo ma lu",
              "pos": "verb",
              "vi": "qua duong"
            },
            {
              "text": "安全",
              "pinyin": "an quan",
              "tone": "an quan",
              "pos": "adj",
              "vi": "an toan"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "guo ma lu an quan",
          "tone": "guo ma lu an quan"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon ngan hang sieu thi.",
          "hanzi": "我想银行超市。",
          "words": [
            {
              "text": "我",
              "pinyin": "wo",
              "tone": "wo",
              "pos": "pron",
              "vi": "toi"
            },
            {
              "text": "想",
              "pinyin": "xiang",
              "tone": "xiang",
              "pos": "verb",
              "vi": "muon"
            },
            {
              "text": "银行",
              "pinyin": "yin hang",
              "tone": "yin hang",
              "pos": "noun",
              "vi": "ngan hang"
            },
            {
              "text": "超市",
              "pinyin": "chao shi",
              "tone": "chao shi",
              "pos": "noun",
              "vi": "sieu thi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "wo xiang yin hang chao shi",
          "tone": "wo xiang yin hang chao shi"
        },
        {
          "stage": "sentence",
          "vi": "thanh pho duong pho rat sieu thi.",
          "hanzi": "城市街道很超市。",
          "words": [
            {
              "text": "城市",
              "pinyin": "cheng shi",
              "tone": "cheng shi",
              "pos": "noun",
              "vi": "thanh pho"
            },
            {
              "text": "街道",
              "pinyin": "jie dao",
              "tone": "jie dao",
              "pos": "noun",
              "vi": "duong pho"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "超市",
              "pinyin": "chao shi",
              "tone": "chao shi",
              "pos": "noun",
              "vi": "sieu thi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "cheng shi jie dao hen chao shi",
          "tone": "cheng shi jie dao hen chao shi"
        },
        {
          "stage": "sentence",
          "vi": "Vui long phuong huong buu dien.",
          "hanzi": "请方向邮局。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "方向",
              "pinyin": "fang xiang",
              "tone": "fang xiang",
              "pos": "noun",
              "vi": "phuong huong"
            },
            {
              "text": "邮局",
              "pinyin": "you ju",
              "tone": "you ju",
              "pos": "noun",
              "vi": "buu dien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "qing fang xiang you ju",
          "tone": "qing fang xiang you ju"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi qua duong an toan.",
          "hanzi": "我们过马路安全。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "过马路",
              "pinyin": "guo ma lu",
              "tone": "guo ma lu",
              "pos": "verb",
              "vi": "qua duong"
            },
            {
              "text": "安全",
              "pinyin": "an quan",
              "tone": "an quan",
              "pos": "adj",
              "vi": "an toan"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "wo men guo ma lu an quan",
          "tone": "wo men guo ma lu an quan"
        },
        {
          "stage": "mixed",
          "vi": "gan day buu dien o ban do.",
          "hanzi": "邮局的附近在地图。",
          "words": [
            {
              "text": "邮局",
              "pinyin": "you ju",
              "tone": "you ju",
              "pos": "noun",
              "vi": "buu dien"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "附近",
              "pinyin": "fu jin",
              "tone": "fu jin",
              "pos": "noun",
              "vi": "gan day"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "地图",
              "pinyin": "di tu",
              "tone": "di tu",
              "pos": "noun",
              "vi": "ban do"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "you ju de fu jin zai di tu",
          "tone": "you ju de fu jin zai di tu"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di duong pho ngan hang.",
          "hanzi": "我们去街道银行。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "去",
              "pinyin": "qu",
              "tone": "qu",
              "pos": "verb",
              "vi": "di"
            },
            {
              "text": "街道",
              "pinyin": "jie dao",
              "tone": "jie dao",
              "pos": "noun",
              "vi": "duong pho"
            },
            {
              "text": "银行",
              "pinyin": "yin hang",
              "tone": "yin hang",
              "pos": "noun",
              "vi": "ngan hang"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "wo men qu jie dao yin hang",
          "tone": "wo men qu jie dao yin hang"
        }
      ]
    },
    {
      "id": "hsk2-l15",
      "no": 15,
      "titleZh": "计划学习和旅行",
      "titleVi": "Lên kế hoạch học tập và du lịch",
      "items": [
        {
          "stage": "word",
          "vi": "ke hoach",
          "hanzi": "计划",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "ji hua",
              "pos": "noun",
              "vi": "ke hoach"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "ji hua",
          "tone": "ji hua"
        },
        {
          "stage": "word",
          "vi": "du lich",
          "hanzi": "旅行",
          "words": [
            {
              "text": "旅行",
              "pinyin": "lv xing",
              "tone": "lv xing",
              "pos": "verb",
              "vi": "du lich"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "lv xing",
          "tone": "lv xing"
        },
        {
          "stage": "word",
          "vi": "hoc tap",
          "hanzi": "学习",
          "words": [
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xue xi",
              "pos": "verb",
              "vi": "hoc tap"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "xue xi",
          "tone": "xue xi"
        },
        {
          "stage": "word",
          "vi": "lam viec",
          "hanzi": "工作",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gong zuo",
              "pos": "verb",
              "vi": "lam viec"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "gong zuo",
          "tone": "gong zuo"
        },
        {
          "stage": "word",
          "vi": "suc khoe",
          "hanzi": "健康",
          "words": [
            {
              "text": "健康",
              "pinyin": "jian kang",
              "tone": "jian kang",
              "pos": "noun",
              "vi": "suc khoe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jian kang",
          "tone": "jian kang"
        },
        {
          "stage": "word",
          "vi": "nguoi nha",
          "hanzi": "家人",
          "words": [
            {
              "text": "家人",
              "pinyin": "jia ren",
              "tone": "jia ren",
              "pos": "noun",
              "vi": "nguoi nha"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jia ren",
          "tone": "jia ren"
        },
        {
          "stage": "word",
          "vi": "thoi gian",
          "hanzi": "时间",
          "words": [
            {
              "text": "时间",
              "pinyin": "shi jian",
              "tone": "shi jian",
              "pos": "noun",
              "vi": "thoi gian"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "shi jian",
          "tone": "shi jian"
        },
        {
          "stage": "word",
          "vi": "lua chon",
          "hanzi": "选择",
          "words": [
            {
              "text": "选择",
              "pinyin": "xuan ze",
              "tone": "xuan ze",
              "pos": "verb",
              "vi": "lua chon"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "xuan ze",
          "tone": "xuan ze"
        },
        {
          "stage": "word",
          "vi": "cam thay",
          "hanzi": "觉得",
          "words": [
            {
              "text": "觉得",
              "pinyin": "jue de",
              "tone": "jue de",
              "pos": "verb",
              "vi": "cam thay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jue de",
          "tone": "jue de"
        },
        {
          "stage": "word",
          "vi": "boi vi",
          "hanzi": "因为",
          "words": [
            {
              "text": "因为",
              "pinyin": "yin wei",
              "tone": "yin wei",
              "pos": "prep",
              "vi": "boi vi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "yin wei",
          "tone": "yin wei"
        },
        {
          "stage": "phrase",
          "vi": "ke hoach du lich",
          "hanzi": "计划旅行",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "ji hua",
              "pos": "noun",
              "vi": "ke hoach"
            },
            {
              "text": "旅行",
              "pinyin": "lv xing",
              "tone": "lv xing",
              "pos": "verb",
              "vi": "du lich"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "ji hua lv xing",
          "tone": "ji hua lv xing"
        },
        {
          "stage": "phrase",
          "vi": "hoc tap lam viec",
          "hanzi": "学习工作",
          "words": [
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xue xi",
              "pos": "verb",
              "vi": "hoc tap"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gong zuo",
              "pos": "verb",
              "vi": "lam viec"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "xue xi gong zuo",
          "tone": "xue xi gong zuo"
        },
        {
          "stage": "phrase",
          "vi": "nguoi nha suc khoe",
          "hanzi": "健康的家人",
          "words": [
            {
              "text": "健康",
              "pinyin": "jian kang",
              "tone": "jian kang",
              "pos": "noun",
              "vi": "suc khoe"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "家人",
              "pinyin": "jia ren",
              "tone": "jia ren",
              "pos": "noun",
              "vi": "nguoi nha"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jian kang de jia ren",
          "tone": "jian kang de jia ren"
        },
        {
          "stage": "phrase",
          "vi": "cam thay boi vi",
          "hanzi": "觉得因为",
          "words": [
            {
              "text": "觉得",
              "pinyin": "jue de",
              "tone": "jue de",
              "pos": "verb",
              "vi": "cam thay"
            },
            {
              "text": "因为",
              "pinyin": "yin wei",
              "tone": "yin wei",
              "pos": "prep",
              "vi": "boi vi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jue de yin wei",
          "tone": "jue de yin wei"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon hoc tap lam viec.",
          "hanzi": "我想学习工作。",
          "words": [
            {
              "text": "我",
              "pinyin": "wo",
              "tone": "wo",
              "pos": "pron",
              "vi": "toi"
            },
            {
              "text": "想",
              "pinyin": "xiang",
              "tone": "xiang",
              "pos": "verb",
              "vi": "muon"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xue xi",
              "pos": "verb",
              "vi": "hoc tap"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gong zuo",
              "pos": "verb",
              "vi": "lam viec"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "wo xiang xue xi gong zuo",
          "tone": "wo xiang xue xi gong zuo"
        },
        {
          "stage": "sentence",
          "vi": "ke hoach du lich rat lam viec.",
          "hanzi": "计划旅行很工作。",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "ji hua",
              "pos": "noun",
              "vi": "ke hoach"
            },
            {
              "text": "旅行",
              "pinyin": "lv xing",
              "tone": "lv xing",
              "pos": "verb",
              "vi": "du lich"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gong zuo",
              "pos": "verb",
              "vi": "lam viec"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "ji hua lv xing hen gong zuo",
          "tone": "ji hua lv xing hen gong zuo"
        },
        {
          "stage": "sentence",
          "vi": "Vui long lua chon suc khoe.",
          "hanzi": "请选择健康。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "选择",
              "pinyin": "xuan ze",
              "tone": "xuan ze",
              "pos": "verb",
              "vi": "lua chon"
            },
            {
              "text": "健康",
              "pinyin": "jian kang",
              "tone": "jian kang",
              "pos": "noun",
              "vi": "suc khoe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "qing xuan ze jian kang",
          "tone": "qing xuan ze jian kang"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi cam thay boi vi.",
          "hanzi": "我们觉得因为。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "觉得",
              "pinyin": "jue de",
              "tone": "jue de",
              "pos": "verb",
              "vi": "cam thay"
            },
            {
              "text": "因为",
              "pinyin": "yin wei",
              "tone": "yin wei",
              "pos": "prep",
              "vi": "boi vi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "wo men jue de yin wei",
          "tone": "wo men jue de yin wei"
        },
        {
          "stage": "mixed",
          "vi": "nguoi nha suc khoe o thoi gian.",
          "hanzi": "健康的家人在时间。",
          "words": [
            {
              "text": "健康",
              "pinyin": "jian kang",
              "tone": "jian kang",
              "pos": "noun",
              "vi": "suc khoe"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "家人",
              "pinyin": "jia ren",
              "tone": "jia ren",
              "pos": "noun",
              "vi": "nguoi nha"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "时间",
              "pinyin": "shi jian",
              "tone": "shi jian",
              "pos": "noun",
              "vi": "thoi gian"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jian kang de jia ren zai shi jian",
          "tone": "jian kang de jia ren zai shi jian"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di du lich hoc tap.",
          "hanzi": "我们去旅行学习。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "去",
              "pinyin": "qu",
              "tone": "qu",
              "pos": "verb",
              "vi": "di"
            },
            {
              "text": "旅行",
              "pinyin": "lv xing",
              "tone": "lv xing",
              "pos": "verb",
              "vi": "du lich"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xue xi",
              "pos": "verb",
              "vi": "hoc tap"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "wo men qu lv xing xue xi",
          "tone": "wo men qu lv xing xue xi"
        }
      ]
    }
  ]
};
});
