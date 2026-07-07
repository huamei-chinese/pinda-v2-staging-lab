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
          "vi": "âm nhạc",
          "hanzi": "音乐",
          "words": [
            {
              "text": "音乐",
              "pinyin": "yin yue",
              "tone": "yin yue",
              "pos": "noun",
              "vi": "âm nhạc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "yin yue",
          "tone": "yin yue"
        },
        {
          "stage": "word",
          "vi": "hát",
          "hanzi": "唱歌",
          "words": [
            {
              "text": "唱歌",
              "pinyin": "chang ge",
              "tone": "chang ge",
              "pos": "verb",
              "vi": "hát"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "chang ge",
          "tone": "chang ge"
        },
        {
          "stage": "word",
          "vi": "nhảy",
          "hanzi": "跳舞",
          "words": [
            {
              "text": "跳舞",
              "pinyin": "tiao wu",
              "tone": "tiao wu",
              "pos": "verb",
              "vi": "nhảy"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "tiao wu",
          "tone": "tiao wu"
        },
        {
          "stage": "word",
          "vi": "bơi",
          "hanzi": "游泳",
          "words": [
            {
              "text": "游泳",
              "pinyin": "you yong",
              "tone": "you yong",
              "pos": "verb",
              "vi": "bơi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "you yong",
          "tone": "you yong"
        },
        {
          "stage": "word",
          "vi": "chạy bộ",
          "hanzi": "跑步",
          "words": [
            {
              "text": "跑步",
              "pinyin": "pao bu",
              "tone": "pao bu",
              "pos": "verb",
              "vi": "chạy bộ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "pao bu",
          "tone": "pao bu"
        },
        {
          "stage": "word",
          "vi": "thi đấu",
          "hanzi": "比赛",
          "words": [
            {
              "text": "比赛",
              "pinyin": "bi sai",
              "tone": "bi sai",
              "pos": "noun",
              "vi": "thi đấu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "bi sai",
          "tone": "bi sai"
        },
        {
          "stage": "word",
          "vi": "sở thích",
          "hanzi": "兴趣",
          "words": [
            {
              "text": "兴趣",
              "pinyin": "xing qu",
              "tone": "xing qu",
              "pos": "noun",
              "vi": "sở thích"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "xing qu",
          "tone": "xing qu"
        },
        {
          "stage": "word",
          "vi": "cuối tuần",
          "hanzi": "周末",
          "words": [
            {
              "text": "周末",
              "pinyin": "zhou mo",
              "tone": "zhou mo",
              "pos": "noun",
              "vi": "cuối tuần"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "zhou mo",
          "tone": "zhou mo"
        },
        {
          "stage": "word",
          "vi": "bạn bè",
          "hanzi": "朋友",
          "words": [
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "peng you",
              "pos": "noun",
              "vi": "bạn bè"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "peng you",
          "tone": "peng you"
        },
        {
          "stage": "phrase",
          "vi": "phim âm nhạc",
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
              "vi": "âm nhạc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "dian ying yin yue",
          "tone": "dian ying yin yue"
        },
        {
          "stage": "phrase",
          "vi": "hát nhảy",
          "hanzi": "唱歌跳舞",
          "words": [
            {
              "text": "唱歌",
              "pinyin": "chang ge",
              "tone": "chang ge",
              "pos": "verb",
              "vi": "hát"
            },
            {
              "text": "跳舞",
              "pinyin": "tiao wu",
              "tone": "tiao wu",
              "pos": "verb",
              "vi": "nhảy"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "chang ge tiao wu",
          "tone": "chang ge tiao wu"
        },
        {
          "stage": "phrase",
          "vi": "chạy bộ bơi",
          "hanzi": "游泳的跑步",
          "words": [
            {
              "text": "游泳",
              "pinyin": "you yong",
              "tone": "you yong",
              "pos": "verb",
              "vi": "bơi"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "跑步",
              "pinyin": "pao bu",
              "tone": "pao bu",
              "pos": "verb",
              "vi": "chạy bộ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "you yong de pao bu",
          "tone": "you yong de pao bu"
        },
        {
          "stage": "phrase",
          "vi": "cuối tuần bạn bè",
          "hanzi": "周末朋友",
          "words": [
            {
              "text": "周末",
              "pinyin": "zhou mo",
              "tone": "zhou mo",
              "pos": "noun",
              "vi": "cuối tuần"
            },
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "peng you",
              "pos": "noun",
              "vi": "bạn bè"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "zhou mo peng you",
          "tone": "zhou mo peng you"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn hát nhảy.",
          "hanzi": "我想唱歌跳舞。",
          "words": [
            {
              "text": "我",
              "pinyin": "wo",
              "tone": "wo",
              "pos": "pron",
              "vi": "tôi"
            },
            {
              "text": "想",
              "pinyin": "xiang",
              "tone": "xiang",
              "pos": "verb",
              "vi": "muốn"
            },
            {
              "text": "唱歌",
              "pinyin": "chang ge",
              "tone": "chang ge",
              "pos": "verb",
              "vi": "hát"
            },
            {
              "text": "跳舞",
              "pinyin": "tiao wu",
              "tone": "tiao wu",
              "pos": "verb",
              "vi": "nhảy"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "wo xiang chang ge tiao wu",
          "tone": "wo xiang chang ge tiao wu"
        },
        {
          "stage": "sentence",
          "vi": "phim âm nhạc rất nhảy.",
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
              "vi": "âm nhạc"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "跳舞",
              "pinyin": "tiao wu",
              "tone": "tiao wu",
              "pos": "verb",
              "vi": "nhảy"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "dian ying yin yue hen tiao wu",
          "tone": "dian ying yin yue hen tiao wu"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng sở thích bơi.",
          "hanzi": "请兴趣游泳。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "兴趣",
              "pinyin": "xing qu",
              "tone": "xing qu",
              "pos": "noun",
              "vi": "sở thích"
            },
            {
              "text": "游泳",
              "pinyin": "you yong",
              "tone": "you yong",
              "pos": "verb",
              "vi": "bơi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "qing xing qu you yong",
          "tone": "qing xing qu you yong"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi cuối tuần bạn bè.",
          "hanzi": "我们周末朋友。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "周末",
              "pinyin": "zhou mo",
              "tone": "zhou mo",
              "pos": "noun",
              "vi": "cuối tuần"
            },
            {
              "text": "朋友",
              "pinyin": "peng you",
              "tone": "peng you",
              "pos": "noun",
              "vi": "bạn bè"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "wo men zhou mo peng you",
          "tone": "wo men zhou mo peng you"
        },
        {
          "stage": "mixed",
          "vi": "chạy bộ bơi ở thi đấu.",
          "hanzi": "游泳的跑步在比赛。",
          "words": [
            {
              "text": "游泳",
              "pinyin": "you yong",
              "tone": "you yong",
              "pos": "verb",
              "vi": "bơi"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "跑步",
              "pinyin": "pao bu",
              "tone": "pao bu",
              "pos": "verb",
              "vi": "chạy bộ"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "比赛",
              "pinyin": "bi sai",
              "tone": "bi sai",
              "pos": "noun",
              "vi": "thi đấu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 11",
          "pinyin": "you yong de pao bu zai bi sai",
          "tone": "you yong de pao bu zai bi sai"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi âm nhạc hát.",
          "hanzi": "我们去音乐唱歌。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "去",
              "pinyin": "qu",
              "tone": "qu",
              "pos": "verb",
              "vi": "đi"
            },
            {
              "text": "音乐",
              "pinyin": "yin yue",
              "tone": "yin yue",
              "pos": "noun",
              "vi": "âm nhạc"
            },
            {
              "text": "唱歌",
              "pinyin": "chang ge",
              "tone": "chang ge",
              "pos": "verb",
              "vi": "hát"
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
          "vi": "tiếng Trung",
          "hanzi": "中文",
          "words": [
            {
              "text": "中文",
              "pinyin": "zhong wen",
              "tone": "zhong wen",
              "pos": "noun",
              "vi": "tiếng Trung"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "zhong wen",
          "tone": "zhong wen"
        },
        {
          "stage": "word",
          "vi": "chữ Hán",
          "hanzi": "汉字",
          "words": [
            {
              "text": "汉字",
              "pinyin": "han zi",
              "tone": "han zi",
              "pos": "noun",
              "vi": "chữ Hán"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "han zi",
          "tone": "han zi"
        },
        {
          "stage": "word",
          "vi": "ngữ pháp",
          "hanzi": "语法",
          "words": [
            {
              "text": "语法",
              "pinyin": "yu fa",
              "tone": "yu fa",
              "pos": "noun",
              "vi": "ngữ pháp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "yu fa",
          "tone": "yu fa"
        },
        {
          "stage": "word",
          "vi": "luyện tập",
          "hanzi": "练习",
          "words": [
            {
              "text": "练习",
              "pinyin": "lian xi",
              "tone": "lian xi",
              "pos": "verb",
              "vi": "luyện tập"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "lian xi",
          "tone": "lian xi"
        },
        {
          "stage": "word",
          "vi": "nghe hiểu",
          "hanzi": "听力",
          "words": [
            {
              "text": "听力",
              "pinyin": "ting li",
              "tone": "ting li",
              "pos": "noun",
              "vi": "nghe hiểu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "ting li",
          "tone": "ting li"
        },
        {
          "stage": "word",
          "vi": "khẩu ngữ",
          "hanzi": "口语",
          "words": [
            {
              "text": "口语",
              "pinyin": "kou yu",
              "tone": "kou yu",
              "pos": "noun",
              "vi": "khẩu ngữ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "kou yu",
          "tone": "kou yu"
        },
        {
          "stage": "word",
          "vi": "đọc",
          "hanzi": "阅读",
          "words": [
            {
              "text": "阅读",
              "pinyin": "yue du",
              "tone": "yue du",
              "pos": "verb",
              "vi": "đọc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "yue du",
          "tone": "yue du"
        },
        {
          "stage": "word",
          "vi": "viết chữ",
          "hanzi": "写字",
          "words": [
            {
              "text": "写字",
              "pinyin": "xie zi",
              "tone": "xie zi",
              "pos": "verb",
              "vi": "viết chữ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "xie zi",
          "tone": "xie zi"
        },
        {
          "stage": "word",
          "vi": "ôn tập",
          "hanzi": "复习",
          "words": [
            {
              "text": "复习",
              "pinyin": "fu xi",
              "tone": "fu xi",
              "pos": "verb",
              "vi": "ôn tập"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "fu xi",
          "tone": "fu xi"
        },
        {
          "stage": "word",
          "vi": "tiến bộ",
          "hanzi": "进步",
          "words": [
            {
              "text": "进步",
              "pinyin": "jin bu",
              "tone": "jin bu",
              "pos": "verb",
              "vi": "tiến bộ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "jin bu",
          "tone": "jin bu"
        },
        {
          "stage": "phrase",
          "vi": "tiếng Trung chữ Hán",
          "hanzi": "中文汉字",
          "words": [
            {
              "text": "中文",
              "pinyin": "zhong wen",
              "tone": "zhong wen",
              "pos": "noun",
              "vi": "tiếng Trung"
            },
            {
              "text": "汉字",
              "pinyin": "han zi",
              "tone": "han zi",
              "pos": "noun",
              "vi": "chữ Hán"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "zhong wen han zi",
          "tone": "zhong wen han zi"
        },
        {
          "stage": "phrase",
          "vi": "ngữ pháp luyện tập",
          "hanzi": "语法练习",
          "words": [
            {
              "text": "语法",
              "pinyin": "yu fa",
              "tone": "yu fa",
              "pos": "noun",
              "vi": "ngữ pháp"
            },
            {
              "text": "练习",
              "pinyin": "lian xi",
              "tone": "lian xi",
              "pos": "verb",
              "vi": "luyện tập"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "yu fa lian xi",
          "tone": "yu fa lian xi"
        },
        {
          "stage": "phrase",
          "vi": "khẩu ngữ nghe hiểu",
          "hanzi": "听力的口语",
          "words": [
            {
              "text": "听力",
              "pinyin": "ting li",
              "tone": "ting li",
              "pos": "noun",
              "vi": "nghe hiểu"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "口语",
              "pinyin": "kou yu",
              "tone": "kou yu",
              "pos": "noun",
              "vi": "khẩu ngữ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "ting li de kou yu",
          "tone": "ting li de kou yu"
        },
        {
          "stage": "phrase",
          "vi": "ôn tập tiến bộ",
          "hanzi": "复习进步",
          "words": [
            {
              "text": "复习",
              "pinyin": "fu xi",
              "tone": "fu xi",
              "pos": "verb",
              "vi": "ôn tập"
            },
            {
              "text": "进步",
              "pinyin": "jin bu",
              "tone": "jin bu",
              "pos": "verb",
              "vi": "tiến bộ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "fu xi jin bu",
          "tone": "fu xi jin bu"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn ngữ pháp luyện tập.",
          "hanzi": "我想语法练习。",
          "words": [
            {
              "text": "我",
              "pinyin": "wo",
              "tone": "wo",
              "pos": "pron",
              "vi": "tôi"
            },
            {
              "text": "想",
              "pinyin": "xiang",
              "tone": "xiang",
              "pos": "verb",
              "vi": "muốn"
            },
            {
              "text": "语法",
              "pinyin": "yu fa",
              "tone": "yu fa",
              "pos": "noun",
              "vi": "ngữ pháp"
            },
            {
              "text": "练习",
              "pinyin": "lian xi",
              "tone": "lian xi",
              "pos": "verb",
              "vi": "luyện tập"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "wo xiang yu fa lian xi",
          "tone": "wo xiang yu fa lian xi"
        },
        {
          "stage": "sentence",
          "vi": "tiếng Trung chữ Hán rất luyện tập.",
          "hanzi": "中文汉字很练习。",
          "words": [
            {
              "text": "中文",
              "pinyin": "zhong wen",
              "tone": "zhong wen",
              "pos": "noun",
              "vi": "tiếng Trung"
            },
            {
              "text": "汉字",
              "pinyin": "han zi",
              "tone": "han zi",
              "pos": "noun",
              "vi": "chữ Hán"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "练习",
              "pinyin": "lian xi",
              "tone": "lian xi",
              "pos": "verb",
              "vi": "luyện tập"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "zhong wen han zi hen lian xi",
          "tone": "zhong wen han zi hen lian xi"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng viết chữ nghe hiểu.",
          "hanzi": "请写字听力。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "写字",
              "pinyin": "xie zi",
              "tone": "xie zi",
              "pos": "verb",
              "vi": "viết chữ"
            },
            {
              "text": "听力",
              "pinyin": "ting li",
              "tone": "ting li",
              "pos": "noun",
              "vi": "nghe hiểu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "qing xie zi ting li",
          "tone": "qing xie zi ting li"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi ôn tập tiến bộ.",
          "hanzi": "我们复习进步。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "复习",
              "pinyin": "fu xi",
              "tone": "fu xi",
              "pos": "verb",
              "vi": "ôn tập"
            },
            {
              "text": "进步",
              "pinyin": "jin bu",
              "tone": "jin bu",
              "pos": "verb",
              "vi": "tiến bộ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "wo men fu xi jin bu",
          "tone": "wo men fu xi jin bu"
        },
        {
          "stage": "mixed",
          "vi": "khẩu ngữ nghe hiểu ở đọc.",
          "hanzi": "听力的口语在阅读。",
          "words": [
            {
              "text": "听力",
              "pinyin": "ting li",
              "tone": "ting li",
              "pos": "noun",
              "vi": "nghe hiểu"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "口语",
              "pinyin": "kou yu",
              "tone": "kou yu",
              "pos": "noun",
              "vi": "khẩu ngữ"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "阅读",
              "pinyin": "yue du",
              "tone": "yue du",
              "pos": "verb",
              "vi": "đọc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 12",
          "pinyin": "ting li de kou yu zai yue du",
          "tone": "ting li de kou yu zai yue du"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi chữ Hán ngữ pháp.",
          "hanzi": "我们去汉字语法。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "去",
              "pinyin": "qu",
              "tone": "qu",
              "pos": "verb",
              "vi": "đi"
            },
            {
              "text": "汉字",
              "pinyin": "han zi",
              "tone": "han zi",
              "pos": "noun",
              "vi": "chữ Hán"
            },
            {
              "text": "语法",
              "pinyin": "yu fa",
              "tone": "yu fa",
              "pos": "noun",
              "vi": "ngữ pháp"
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
          "vi": "nhà",
          "hanzi": "家",
          "words": [
            {
              "text": "家",
              "pinyin": "jia",
              "tone": "jia",
              "pos": "noun",
              "vi": "nhà"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "jia",
          "tone": "jia"
        },
        {
          "stage": "word",
          "vi": "bếp",
          "hanzi": "厨房",
          "words": [
            {
              "text": "厨房",
              "pinyin": "chu fang",
              "tone": "chu fang",
              "pos": "noun",
              "vi": "bếp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "chu fang",
          "tone": "chu fang"
        },
        {
          "stage": "word",
          "vi": "bàn",
          "hanzi": "桌子",
          "words": [
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuo zi",
              "pos": "noun",
              "vi": "bàn"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "zhuo zi",
          "tone": "zhuo zi"
        },
        {
          "stage": "word",
          "vi": "ghế",
          "hanzi": "椅子",
          "words": [
            {
              "text": "椅子",
              "pinyin": "yi zi",
              "tone": "yi zi",
              "pos": "noun",
              "vi": "ghế"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "yi zi",
          "tone": "yi zi"
        },
        {
          "stage": "word",
          "vi": "cửa",
          "hanzi": "门",
          "words": [
            {
              "text": "门",
              "pinyin": "men",
              "tone": "men",
              "pos": "noun",
              "vi": "cửa"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "men",
          "tone": "men"
        },
        {
          "stage": "word",
          "vi": "cửa sổ",
          "hanzi": "窗户",
          "words": [
            {
              "text": "窗户",
              "pinyin": "chuang hu",
              "tone": "chuang hu",
              "pos": "noun",
              "vi": "cửa sổ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "chuang hu",
          "tone": "chuang hu"
        },
        {
          "stage": "word",
          "vi": "dọn dẹp",
          "hanzi": "打扫",
          "words": [
            {
              "text": "打扫",
              "pinyin": "da sao",
              "tone": "da sao",
              "pos": "verb",
              "vi": "dọn dẹp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "da sao",
          "tone": "da sao"
        },
        {
          "stage": "word",
          "vi": "nấu cơm",
          "hanzi": "做饭",
          "words": [
            {
              "text": "做饭",
              "pinyin": "zuo fan",
              "tone": "zuo fan",
              "pos": "verb",
              "vi": "nấu cơm"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "zuo fan",
          "tone": "zuo fan"
        },
        {
          "stage": "word",
          "vi": "sạch sẽ",
          "hanzi": "干净",
          "words": [
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sạch sẽ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "gan jing",
          "tone": "gan jing"
        },
        {
          "stage": "word",
          "vi": "thoải mái",
          "hanzi": "舒服",
          "words": [
            {
              "text": "舒服",
              "pinyin": "shu fu",
              "tone": "shu fu",
              "pos": "adj",
              "vi": "thoải mái"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "shu fu",
          "tone": "shu fu"
        },
        {
          "stage": "phrase",
          "vi": "nhà bếp",
          "hanzi": "家厨房",
          "words": [
            {
              "text": "家",
              "pinyin": "jia",
              "tone": "jia",
              "pos": "noun",
              "vi": "nhà"
            },
            {
              "text": "厨房",
              "pinyin": "chu fang",
              "tone": "chu fang",
              "pos": "noun",
              "vi": "bếp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "jia chu fang",
          "tone": "jia chu fang"
        },
        {
          "stage": "phrase",
          "vi": "bàn ghế",
          "hanzi": "桌子椅子",
          "words": [
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuo zi",
              "pos": "noun",
              "vi": "bàn"
            },
            {
              "text": "椅子",
              "pinyin": "yi zi",
              "tone": "yi zi",
              "pos": "noun",
              "vi": "ghế"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "zhuo zi yi zi",
          "tone": "zhuo zi yi zi"
        },
        {
          "stage": "phrase",
          "vi": "cửa sổ cửa",
          "hanzi": "门的窗户",
          "words": [
            {
              "text": "门",
              "pinyin": "men",
              "tone": "men",
              "pos": "noun",
              "vi": "cửa"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "窗户",
              "pinyin": "chuang hu",
              "tone": "chuang hu",
              "pos": "noun",
              "vi": "cửa sổ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "men de chuang hu",
          "tone": "men de chuang hu"
        },
        {
          "stage": "phrase",
          "vi": "sạch sẽ thoải mái",
          "hanzi": "干净舒服",
          "words": [
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sạch sẽ"
            },
            {
              "text": "舒服",
              "pinyin": "shu fu",
              "tone": "shu fu",
              "pos": "adj",
              "vi": "thoải mái"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "gan jing shu fu",
          "tone": "gan jing shu fu"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn bàn ghế.",
          "hanzi": "我想桌子椅子。",
          "words": [
            {
              "text": "我",
              "pinyin": "wo",
              "tone": "wo",
              "pos": "pron",
              "vi": "tôi"
            },
            {
              "text": "想",
              "pinyin": "xiang",
              "tone": "xiang",
              "pos": "verb",
              "vi": "muốn"
            },
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuo zi",
              "pos": "noun",
              "vi": "bàn"
            },
            {
              "text": "椅子",
              "pinyin": "yi zi",
              "tone": "yi zi",
              "pos": "noun",
              "vi": "ghế"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "wo xiang zhuo zi yi zi",
          "tone": "wo xiang zhuo zi yi zi"
        },
        {
          "stage": "sentence",
          "vi": "nhà bếp rất ghế.",
          "hanzi": "家厨房很椅子。",
          "words": [
            {
              "text": "家",
              "pinyin": "jia",
              "tone": "jia",
              "pos": "noun",
              "vi": "nhà"
            },
            {
              "text": "厨房",
              "pinyin": "chu fang",
              "tone": "chu fang",
              "pos": "noun",
              "vi": "bếp"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "椅子",
              "pinyin": "yi zi",
              "tone": "yi zi",
              "pos": "noun",
              "vi": "ghế"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "jia chu fang hen yi zi",
          "tone": "jia chu fang hen yi zi"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng nấu cơm cửa.",
          "hanzi": "请做饭门。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "做饭",
              "pinyin": "zuo fan",
              "tone": "zuo fan",
              "pos": "verb",
              "vi": "nấu cơm"
            },
            {
              "text": "门",
              "pinyin": "men",
              "tone": "men",
              "pos": "noun",
              "vi": "cửa"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "qing zuo fan men",
          "tone": "qing zuo fan men"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi sạch sẽ thoải mái.",
          "hanzi": "我们干净舒服。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sạch sẽ"
            },
            {
              "text": "舒服",
              "pinyin": "shu fu",
              "tone": "shu fu",
              "pos": "adj",
              "vi": "thoải mái"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "wo men gan jing shu fu",
          "tone": "wo men gan jing shu fu"
        },
        {
          "stage": "mixed",
          "vi": "cửa sổ cửa ở dọn dẹp.",
          "hanzi": "门的窗户在打扫。",
          "words": [
            {
              "text": "门",
              "pinyin": "men",
              "tone": "men",
              "pos": "noun",
              "vi": "cửa"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "窗户",
              "pinyin": "chuang hu",
              "tone": "chuang hu",
              "pos": "noun",
              "vi": "cửa sổ"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "打扫",
              "pinyin": "da sao",
              "tone": "da sao",
              "pos": "verb",
              "vi": "dọn dẹp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 13",
          "pinyin": "men de chuang hu zai da sao",
          "tone": "men de chuang hu zai da sao"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi bếp bàn.",
          "hanzi": "我们去厨房桌子。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "去",
              "pinyin": "qu",
              "tone": "qu",
              "pos": "verb",
              "vi": "đi"
            },
            {
              "text": "厨房",
              "pinyin": "chu fang",
              "tone": "chu fang",
              "pos": "noun",
              "vi": "bếp"
            },
            {
              "text": "桌子",
              "pinyin": "zhuo zi",
              "tone": "zhuo zi",
              "pos": "noun",
              "vi": "bàn"
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
          "vi": "thành phố",
          "hanzi": "城市",
          "words": [
            {
              "text": "城市",
              "pinyin": "cheng shi",
              "tone": "cheng shi",
              "pos": "noun",
              "vi": "thành phố"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "cheng shi",
          "tone": "cheng shi"
        },
        {
          "stage": "word",
          "vi": "đường phố",
          "hanzi": "街道",
          "words": [
            {
              "text": "街道",
              "pinyin": "jie dao",
              "tone": "jie dao",
              "pos": "noun",
              "vi": "đường phố"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "jie dao",
          "tone": "jie dao"
        },
        {
          "stage": "word",
          "vi": "ngân hàng",
          "hanzi": "银行",
          "words": [
            {
              "text": "银行",
              "pinyin": "yin hang",
              "tone": "yin hang",
              "pos": "noun",
              "vi": "ngân hàng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "yin hang",
          "tone": "yin hang"
        },
        {
          "stage": "word",
          "vi": "siêu thị",
          "hanzi": "超市",
          "words": [
            {
              "text": "超市",
              "pinyin": "chao shi",
              "tone": "chao shi",
              "pos": "noun",
              "vi": "siêu thị"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "chao shi",
          "tone": "chao shi"
        },
        {
          "stage": "word",
          "vi": "bưu điện",
          "hanzi": "邮局",
          "words": [
            {
              "text": "邮局",
              "pinyin": "you ju",
              "tone": "you ju",
              "pos": "noun",
              "vi": "bưu điện"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "you ju",
          "tone": "you ju"
        },
        {
          "stage": "word",
          "vi": "gần đây",
          "hanzi": "附近",
          "words": [
            {
              "text": "附近",
              "pinyin": "fu jin",
              "tone": "fu jin",
              "pos": "noun",
              "vi": "gần đây"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "fu jin",
          "tone": "fu jin"
        },
        {
          "stage": "word",
          "vi": "bản đồ",
          "hanzi": "地图",
          "words": [
            {
              "text": "地图",
              "pinyin": "di tu",
              "tone": "di tu",
              "pos": "noun",
              "vi": "bản đồ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "di tu",
          "tone": "di tu"
        },
        {
          "stage": "word",
          "vi": "phương hướng",
          "hanzi": "方向",
          "words": [
            {
              "text": "方向",
              "pinyin": "fang xiang",
              "tone": "fang xiang",
              "pos": "noun",
              "vi": "phương hướng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "fang xiang",
          "tone": "fang xiang"
        },
        {
          "stage": "word",
          "vi": "qua đường",
          "hanzi": "过马路",
          "words": [
            {
              "text": "过马路",
              "pinyin": "guo ma lu",
              "tone": "guo ma lu",
              "pos": "verb",
              "vi": "qua đường"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "guo ma lu",
          "tone": "guo ma lu"
        },
        {
          "stage": "word",
          "vi": "an toàn",
          "hanzi": "安全",
          "words": [
            {
              "text": "安全",
              "pinyin": "an quan",
              "tone": "an quan",
              "pos": "adj",
              "vi": "an toàn"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "an quan",
          "tone": "an quan"
        },
        {
          "stage": "phrase",
          "vi": "thành phố đường phố",
          "hanzi": "城市街道",
          "words": [
            {
              "text": "城市",
              "pinyin": "cheng shi",
              "tone": "cheng shi",
              "pos": "noun",
              "vi": "thành phố"
            },
            {
              "text": "街道",
              "pinyin": "jie dao",
              "tone": "jie dao",
              "pos": "noun",
              "vi": "đường phố"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "cheng shi jie dao",
          "tone": "cheng shi jie dao"
        },
        {
          "stage": "phrase",
          "vi": "ngân hàng siêu thị",
          "hanzi": "银行超市",
          "words": [
            {
              "text": "银行",
              "pinyin": "yin hang",
              "tone": "yin hang",
              "pos": "noun",
              "vi": "ngân hàng"
            },
            {
              "text": "超市",
              "pinyin": "chao shi",
              "tone": "chao shi",
              "pos": "noun",
              "vi": "siêu thị"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "yin hang chao shi",
          "tone": "yin hang chao shi"
        },
        {
          "stage": "phrase",
          "vi": "gần đây bưu điện",
          "hanzi": "邮局的附近",
          "words": [
            {
              "text": "邮局",
              "pinyin": "you ju",
              "tone": "you ju",
              "pos": "noun",
              "vi": "bưu điện"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "附近",
              "pinyin": "fu jin",
              "tone": "fu jin",
              "pos": "noun",
              "vi": "gần đây"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "you ju de fu jin",
          "tone": "you ju de fu jin"
        },
        {
          "stage": "phrase",
          "vi": "qua đường an toàn",
          "hanzi": "过马路安全",
          "words": [
            {
              "text": "过马路",
              "pinyin": "guo ma lu",
              "tone": "guo ma lu",
              "pos": "verb",
              "vi": "qua đường"
            },
            {
              "text": "安全",
              "pinyin": "an quan",
              "tone": "an quan",
              "pos": "adj",
              "vi": "an toàn"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "guo ma lu an quan",
          "tone": "guo ma lu an quan"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn ngân hàng siêu thị.",
          "hanzi": "我想银行超市。",
          "words": [
            {
              "text": "我",
              "pinyin": "wo",
              "tone": "wo",
              "pos": "pron",
              "vi": "tôi"
            },
            {
              "text": "想",
              "pinyin": "xiang",
              "tone": "xiang",
              "pos": "verb",
              "vi": "muốn"
            },
            {
              "text": "银行",
              "pinyin": "yin hang",
              "tone": "yin hang",
              "pos": "noun",
              "vi": "ngân hàng"
            },
            {
              "text": "超市",
              "pinyin": "chao shi",
              "tone": "chao shi",
              "pos": "noun",
              "vi": "siêu thị"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "wo xiang yin hang chao shi",
          "tone": "wo xiang yin hang chao shi"
        },
        {
          "stage": "sentence",
          "vi": "thành phố đường phố rất siêu thị.",
          "hanzi": "城市街道很超市。",
          "words": [
            {
              "text": "城市",
              "pinyin": "cheng shi",
              "tone": "cheng shi",
              "pos": "noun",
              "vi": "thành phố"
            },
            {
              "text": "街道",
              "pinyin": "jie dao",
              "tone": "jie dao",
              "pos": "noun",
              "vi": "đường phố"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "超市",
              "pinyin": "chao shi",
              "tone": "chao shi",
              "pos": "noun",
              "vi": "siêu thị"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "cheng shi jie dao hen chao shi",
          "tone": "cheng shi jie dao hen chao shi"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng phương hướng bưu điện.",
          "hanzi": "请方向邮局。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "方向",
              "pinyin": "fang xiang",
              "tone": "fang xiang",
              "pos": "noun",
              "vi": "phương hướng"
            },
            {
              "text": "邮局",
              "pinyin": "you ju",
              "tone": "you ju",
              "pos": "noun",
              "vi": "bưu điện"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "qing fang xiang you ju",
          "tone": "qing fang xiang you ju"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi qua đường an toàn.",
          "hanzi": "我们过马路安全。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "过马路",
              "pinyin": "guo ma lu",
              "tone": "guo ma lu",
              "pos": "verb",
              "vi": "qua đường"
            },
            {
              "text": "安全",
              "pinyin": "an quan",
              "tone": "an quan",
              "pos": "adj",
              "vi": "an toàn"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "wo men guo ma lu an quan",
          "tone": "wo men guo ma lu an quan"
        },
        {
          "stage": "mixed",
          "vi": "gần đây bưu điện ở bản đồ.",
          "hanzi": "邮局的附近在地图。",
          "words": [
            {
              "text": "邮局",
              "pinyin": "you ju",
              "tone": "you ju",
              "pos": "noun",
              "vi": "bưu điện"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "附近",
              "pinyin": "fu jin",
              "tone": "fu jin",
              "pos": "noun",
              "vi": "gần đây"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "地图",
              "pinyin": "di tu",
              "tone": "di tu",
              "pos": "noun",
              "vi": "bản đồ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 14",
          "pinyin": "you ju de fu jin zai di tu",
          "tone": "you ju de fu jin zai di tu"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi đường phố ngân hàng.",
          "hanzi": "我们去街道银行。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "去",
              "pinyin": "qu",
              "tone": "qu",
              "pos": "verb",
              "vi": "đi"
            },
            {
              "text": "街道",
              "pinyin": "jie dao",
              "tone": "jie dao",
              "pos": "noun",
              "vi": "đường phố"
            },
            {
              "text": "银行",
              "pinyin": "yin hang",
              "tone": "yin hang",
              "pos": "noun",
              "vi": "ngân hàng"
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
          "vi": "kế hoạch",
          "hanzi": "计划",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "ji hua",
              "pos": "noun",
              "vi": "kế hoạch"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "ji hua",
          "tone": "ji hua"
        },
        {
          "stage": "word",
          "vi": "du lịch",
          "hanzi": "旅行",
          "words": [
            {
              "text": "旅行",
              "pinyin": "lv xing",
              "tone": "lv xing",
              "pos": "verb",
              "vi": "du lịch"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "lv xing",
          "tone": "lv xing"
        },
        {
          "stage": "word",
          "vi": "học tập",
          "hanzi": "学习",
          "words": [
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xue xi",
              "pos": "verb",
              "vi": "học tập"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "xue xi",
          "tone": "xue xi"
        },
        {
          "stage": "word",
          "vi": "làm việc",
          "hanzi": "工作",
          "words": [
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gong zuo",
              "pos": "verb",
              "vi": "làm việc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "gong zuo",
          "tone": "gong zuo"
        },
        {
          "stage": "word",
          "vi": "sức khỏe",
          "hanzi": "健康",
          "words": [
            {
              "text": "健康",
              "pinyin": "jian kang",
              "tone": "jian kang",
              "pos": "noun",
              "vi": "sức khỏe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jian kang",
          "tone": "jian kang"
        },
        {
          "stage": "word",
          "vi": "người nhà",
          "hanzi": "家人",
          "words": [
            {
              "text": "家人",
              "pinyin": "jia ren",
              "tone": "jia ren",
              "pos": "noun",
              "vi": "người nhà"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jia ren",
          "tone": "jia ren"
        },
        {
          "stage": "word",
          "vi": "thời gian",
          "hanzi": "时间",
          "words": [
            {
              "text": "时间",
              "pinyin": "shi jian",
              "tone": "shi jian",
              "pos": "noun",
              "vi": "thời gian"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "shi jian",
          "tone": "shi jian"
        },
        {
          "stage": "word",
          "vi": "lựa chọn",
          "hanzi": "选择",
          "words": [
            {
              "text": "选择",
              "pinyin": "xuan ze",
              "tone": "xuan ze",
              "pos": "verb",
              "vi": "lựa chọn"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "xuan ze",
          "tone": "xuan ze"
        },
        {
          "stage": "word",
          "vi": "cảm thấy",
          "hanzi": "觉得",
          "words": [
            {
              "text": "觉得",
              "pinyin": "jue de",
              "tone": "jue de",
              "pos": "verb",
              "vi": "cảm thấy"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jue de",
          "tone": "jue de"
        },
        {
          "stage": "word",
          "vi": "bởi vì",
          "hanzi": "因为",
          "words": [
            {
              "text": "因为",
              "pinyin": "yin wei",
              "tone": "yin wei",
              "pos": "prep",
              "vi": "bởi vì"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "yin wei",
          "tone": "yin wei"
        },
        {
          "stage": "phrase",
          "vi": "kế hoạch du lịch",
          "hanzi": "计划旅行",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "ji hua",
              "pos": "noun",
              "vi": "kế hoạch"
            },
            {
              "text": "旅行",
              "pinyin": "lv xing",
              "tone": "lv xing",
              "pos": "verb",
              "vi": "du lịch"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "ji hua lv xing",
          "tone": "ji hua lv xing"
        },
        {
          "stage": "phrase",
          "vi": "học tập làm việc",
          "hanzi": "学习工作",
          "words": [
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xue xi",
              "pos": "verb",
              "vi": "học tập"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gong zuo",
              "pos": "verb",
              "vi": "làm việc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "xue xi gong zuo",
          "tone": "xue xi gong zuo"
        },
        {
          "stage": "phrase",
          "vi": "người nhà sức khỏe",
          "hanzi": "健康的家人",
          "words": [
            {
              "text": "健康",
              "pinyin": "jian kang",
              "tone": "jian kang",
              "pos": "noun",
              "vi": "sức khỏe"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "家人",
              "pinyin": "jia ren",
              "tone": "jia ren",
              "pos": "noun",
              "vi": "người nhà"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jian kang de jia ren",
          "tone": "jian kang de jia ren"
        },
        {
          "stage": "phrase",
          "vi": "cảm thấy bởi vì",
          "hanzi": "觉得因为",
          "words": [
            {
              "text": "觉得",
              "pinyin": "jue de",
              "tone": "jue de",
              "pos": "verb",
              "vi": "cảm thấy"
            },
            {
              "text": "因为",
              "pinyin": "yin wei",
              "tone": "yin wei",
              "pos": "prep",
              "vi": "bởi vì"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jue de yin wei",
          "tone": "jue de yin wei"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn học tập làm việc.",
          "hanzi": "我想学习工作。",
          "words": [
            {
              "text": "我",
              "pinyin": "wo",
              "tone": "wo",
              "pos": "pron",
              "vi": "tôi"
            },
            {
              "text": "想",
              "pinyin": "xiang",
              "tone": "xiang",
              "pos": "verb",
              "vi": "muốn"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xue xi",
              "pos": "verb",
              "vi": "học tập"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gong zuo",
              "pos": "verb",
              "vi": "làm việc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "wo xiang xue xi gong zuo",
          "tone": "wo xiang xue xi gong zuo"
        },
        {
          "stage": "sentence",
          "vi": "kế hoạch du lịch rất làm việc.",
          "hanzi": "计划旅行很工作。",
          "words": [
            {
              "text": "计划",
              "pinyin": "ji hua",
              "tone": "ji hua",
              "pos": "noun",
              "vi": "kế hoạch"
            },
            {
              "text": "旅行",
              "pinyin": "lv xing",
              "tone": "lv xing",
              "pos": "verb",
              "vi": "du lịch"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "工作",
              "pinyin": "gong zuo",
              "tone": "gong zuo",
              "pos": "verb",
              "vi": "làm việc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "ji hua lv xing hen gong zuo",
          "tone": "ji hua lv xing hen gong zuo"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng lựa chọn sức khỏe.",
          "hanzi": "请选择健康。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "选择",
              "pinyin": "xuan ze",
              "tone": "xuan ze",
              "pos": "verb",
              "vi": "lựa chọn"
            },
            {
              "text": "健康",
              "pinyin": "jian kang",
              "tone": "jian kang",
              "pos": "noun",
              "vi": "sức khỏe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "qing xuan ze jian kang",
          "tone": "qing xuan ze jian kang"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi cảm thấy bởi vì.",
          "hanzi": "我们觉得因为。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "觉得",
              "pinyin": "jue de",
              "tone": "jue de",
              "pos": "verb",
              "vi": "cảm thấy"
            },
            {
              "text": "因为",
              "pinyin": "yin wei",
              "tone": "yin wei",
              "pos": "prep",
              "vi": "bởi vì"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "wo men jue de yin wei",
          "tone": "wo men jue de yin wei"
        },
        {
          "stage": "mixed",
          "vi": "người nhà sức khỏe ở thời gian.",
          "hanzi": "健康的家人在时间。",
          "words": [
            {
              "text": "健康",
              "pinyin": "jian kang",
              "tone": "jian kang",
              "pos": "noun",
              "vi": "sức khỏe"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "家人",
              "pinyin": "jia ren",
              "tone": "jia ren",
              "pos": "noun",
              "vi": "người nhà"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "时间",
              "pinyin": "shi jian",
              "tone": "shi jian",
              "pos": "noun",
              "vi": "thời gian"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 15",
          "pinyin": "jian kang de jia ren zai shi jian",
          "tone": "jian kang de jia ren zai shi jian"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi du lịch học tập.",
          "hanzi": "我们去旅行学习。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "去",
              "pinyin": "qu",
              "tone": "qu",
              "pos": "verb",
              "vi": "đi"
            },
            {
              "text": "旅行",
              "pinyin": "lv xing",
              "tone": "lv xing",
              "pos": "verb",
              "vi": "du lịch"
            },
            {
              "text": "学习",
              "pinyin": "xue xi",
              "tone": "xue xi",
              "pos": "verb",
              "vi": "học tập"
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
