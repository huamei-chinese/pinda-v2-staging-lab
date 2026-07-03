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
      "id": "hsk2-l6",
      "no": 6,
      "titleZh": "天气好就去公园运动",
      "titleVi": "Thời tiết đẹp thì đi công viên vận động",
      "items": [
        {
          "stage": "word",
          "vi": "thoi tiet",
          "hanzi": "天气",
          "words": [
            {
              "text": "天气",
              "pinyin": "tian qi",
              "tone": "tian qi",
              "pos": "noun",
              "vi": "thoi tiet"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "tian qi",
          "tone": "tian qi"
        },
        {
          "stage": "word",
          "vi": "mua",
          "hanzi": "下雨",
          "words": [
            {
              "text": "下雨",
              "pinyin": "xia yu",
              "tone": "xia yu",
              "pos": "verb",
              "vi": "mua"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "xia yu",
          "tone": "xia yu"
        },
        {
          "stage": "word",
          "vi": "troi am u",
          "hanzi": "阴天",
          "words": [
            {
              "text": "阴天",
              "pinyin": "yin tian",
              "tone": "yin tian",
              "pos": "noun",
              "vi": "troi am u"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "yin tian",
          "tone": "yin tian"
        },
        {
          "stage": "word",
          "vi": "troi nang",
          "hanzi": "晴天",
          "words": [
            {
              "text": "晴天",
              "pinyin": "qing tian",
              "tone": "qing tian",
              "pos": "noun",
              "vi": "troi nang"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "qing tian",
          "tone": "qing tian"
        },
        {
          "stage": "word",
          "vi": "ben ngoai",
          "hanzi": "外面",
          "words": [
            {
              "text": "外面",
              "pinyin": "wai mian",
              "tone": "wai mian",
              "pos": "noun",
              "vi": "ben ngoai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wai mian",
          "tone": "wai mian"
        },
        {
          "stage": "word",
          "vi": "lanh",
          "hanzi": "冷",
          "words": [
            {
              "text": "冷",
              "pinyin": "leng",
              "tone": "leng",
              "pos": "adj",
              "vi": "lanh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "leng",
          "tone": "leng"
        },
        {
          "stage": "word",
          "vi": "nong",
          "hanzi": "热",
          "words": [
            {
              "text": "热",
              "pinyin": "re",
              "tone": "re",
              "pos": "adj",
              "vi": "nong"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "re",
          "tone": "re"
        },
        {
          "stage": "word",
          "vi": "mac",
          "hanzi": "穿",
          "words": [
            {
              "text": "穿",
              "pinyin": "chuan",
              "tone": "chuan",
              "pos": "verb",
              "vi": "mac"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "chuan",
          "tone": "chuan"
        },
        {
          "stage": "word",
          "vi": "van dong",
          "hanzi": "运动",
          "words": [
            {
              "text": "运动",
              "pinyin": "yun dong",
              "tone": "yun dong",
              "pos": "verb",
              "vi": "van dong"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "yun dong",
          "tone": "yun dong"
        },
        {
          "stage": "word",
          "vi": "cong vien",
          "hanzi": "公园",
          "words": [
            {
              "text": "公园",
              "pinyin": "gong yuan",
              "tone": "gong yuan",
              "pos": "noun",
              "vi": "cong vien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "gong yuan",
          "tone": "gong yuan"
        },
        {
          "stage": "phrase",
          "vi": "thoi tiet mua",
          "hanzi": "天气下雨",
          "words": [
            {
              "text": "天气",
              "pinyin": "tian qi",
              "tone": "tian qi",
              "pos": "noun",
              "vi": "thoi tiet"
            },
            {
              "text": "下雨",
              "pinyin": "xia yu",
              "tone": "xia yu",
              "pos": "verb",
              "vi": "mua"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "tian qi xia yu",
          "tone": "tian qi xia yu"
        },
        {
          "stage": "phrase",
          "vi": "troi am u troi nang",
          "hanzi": "阴天晴天",
          "words": [
            {
              "text": "阴天",
              "pinyin": "yin tian",
              "tone": "yin tian",
              "pos": "noun",
              "vi": "troi am u"
            },
            {
              "text": "晴天",
              "pinyin": "qing tian",
              "tone": "qing tian",
              "pos": "noun",
              "vi": "troi nang"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "yin tian qing tian",
          "tone": "yin tian qing tian"
        },
        {
          "stage": "phrase",
          "vi": "lanh ben ngoai",
          "hanzi": "外面的冷",
          "words": [
            {
              "text": "外面",
              "pinyin": "wai mian",
              "tone": "wai mian",
              "pos": "noun",
              "vi": "ben ngoai"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "冷",
              "pinyin": "leng",
              "tone": "leng",
              "pos": "adj",
              "vi": "lanh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wai mian de leng",
          "tone": "wai mian de leng"
        },
        {
          "stage": "phrase",
          "vi": "van dong cong vien",
          "hanzi": "运动公园",
          "words": [
            {
              "text": "运动",
              "pinyin": "yun dong",
              "tone": "yun dong",
              "pos": "verb",
              "vi": "van dong"
            },
            {
              "text": "公园",
              "pinyin": "gong yuan",
              "tone": "gong yuan",
              "pos": "noun",
              "vi": "cong vien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "yun dong gong yuan",
          "tone": "yun dong gong yuan"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon troi am u troi nang.",
          "hanzi": "我想阴天晴天。",
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
              "text": "阴天",
              "pinyin": "yin tian",
              "tone": "yin tian",
              "pos": "noun",
              "vi": "troi am u"
            },
            {
              "text": "晴天",
              "pinyin": "qing tian",
              "tone": "qing tian",
              "pos": "noun",
              "vi": "troi nang"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wo xiang yin tian qing tian",
          "tone": "wo xiang yin tian qing tian"
        },
        {
          "stage": "sentence",
          "vi": "thoi tiet mua rat troi nang.",
          "hanzi": "天气下雨很晴天。",
          "words": [
            {
              "text": "天气",
              "pinyin": "tian qi",
              "tone": "tian qi",
              "pos": "noun",
              "vi": "thoi tiet"
            },
            {
              "text": "下雨",
              "pinyin": "xia yu",
              "tone": "xia yu",
              "pos": "verb",
              "vi": "mua"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "晴天",
              "pinyin": "qing tian",
              "tone": "qing tian",
              "pos": "noun",
              "vi": "troi nang"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "tian qi xia yu hen qing tian",
          "tone": "tian qi xia yu hen qing tian"
        },
        {
          "stage": "sentence",
          "vi": "Vui long mac ben ngoai.",
          "hanzi": "请穿外面。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "穿",
              "pinyin": "chuan",
              "tone": "chuan",
              "pos": "verb",
              "vi": "mac"
            },
            {
              "text": "外面",
              "pinyin": "wai mian",
              "tone": "wai mian",
              "pos": "noun",
              "vi": "ben ngoai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "qing chuan wai mian",
          "tone": "qing chuan wai mian"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi van dong cong vien.",
          "hanzi": "我们运动公园。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "运动",
              "pinyin": "yun dong",
              "tone": "yun dong",
              "pos": "verb",
              "vi": "van dong"
            },
            {
              "text": "公园",
              "pinyin": "gong yuan",
              "tone": "gong yuan",
              "pos": "noun",
              "vi": "cong vien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wo men yun dong gong yuan",
          "tone": "wo men yun dong gong yuan"
        },
        {
          "stage": "mixed",
          "vi": "lanh ben ngoai o nong.",
          "hanzi": "外面的冷在热。",
          "words": [
            {
              "text": "外面",
              "pinyin": "wai mian",
              "tone": "wai mian",
              "pos": "noun",
              "vi": "ben ngoai"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "冷",
              "pinyin": "leng",
              "tone": "leng",
              "pos": "adj",
              "vi": "lanh"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "热",
              "pinyin": "re",
              "tone": "re",
              "pos": "adj",
              "vi": "nong"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wai mian de leng zai re",
          "tone": "wai mian de leng zai re"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di mua troi am u.",
          "hanzi": "我们去下雨阴天。",
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
              "text": "下雨",
              "pinyin": "xia yu",
              "tone": "xia yu",
              "pos": "verb",
              "vi": "mua"
            },
            {
              "text": "阴天",
              "pinyin": "yin tian",
              "tone": "yin tian",
              "pos": "noun",
              "vi": "troi am u"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wo men qu xia yu yin tian",
          "tone": "wo men qu xia yu yin tian"
        }
      ]
    },
    {
      "id": "hsk2-l7",
      "no": 7,
      "titleZh": "坐地铁到车站",
      "titleVi": "Đi tàu điện đến trạm",
      "items": [
        {
          "stage": "word",
          "vi": "xe buyt",
          "hanzi": "公共汽车",
          "words": [
            {
              "text": "公共汽车",
              "pinyin": "gong gong qi che",
              "tone": "gong gong qi che",
              "pos": "noun",
              "vi": "xe buyt"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "gong gong qi che",
          "tone": "gong gong qi che"
        },
        {
          "stage": "word",
          "vi": "tau dien ngam",
          "hanzi": "地铁",
          "words": [
            {
              "text": "地铁",
              "pinyin": "di tie",
              "tone": "di tie",
              "pos": "noun",
              "vi": "tau dien ngam"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "di tie",
          "tone": "di tie"
        },
        {
          "stage": "word",
          "vi": "tram xe",
          "hanzi": "车站",
          "words": [
            {
              "text": "车站",
              "pinyin": "che zhan",
              "tone": "che zhan",
              "pos": "noun",
              "vi": "tram xe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "che zhan",
          "tone": "che zhan"
        },
        {
          "stage": "word",
          "vi": "ve",
          "hanzi": "票",
          "words": [
            {
              "text": "票",
              "pinyin": "piao",
              "tone": "piao",
              "pos": "noun",
              "vi": "ve"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "piao",
          "tone": "piao"
        },
        {
          "stage": "word",
          "vi": "den noi",
          "hanzi": "到达",
          "words": [
            {
              "text": "到达",
              "pinyin": "dao da",
              "tone": "dao da",
              "pos": "verb",
              "vi": "den noi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "dao da",
          "tone": "dao da"
        },
        {
          "stage": "word",
          "vi": "doi",
          "hanzi": "等",
          "words": [
            {
              "text": "等",
              "pinyin": "deng",
              "tone": "deng",
              "pos": "verb",
              "vi": "doi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "deng",
          "tone": "deng"
        },
        {
          "stage": "word",
          "vi": "cach",
          "hanzi": "离",
          "words": [
            {
              "text": "离",
              "pinyin": "li",
              "tone": "li",
              "pos": "prep",
              "vi": "cach"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "li",
          "tone": "li"
        },
        {
          "stage": "word",
          "vi": "gan",
          "hanzi": "近",
          "words": [
            {
              "text": "近",
              "pinyin": "jin",
              "tone": "jin",
              "pos": "adj",
              "vi": "gan"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "jin",
          "tone": "jin"
        },
        {
          "stage": "word",
          "vi": "xa",
          "hanzi": "远",
          "words": [
            {
              "text": "远",
              "pinyin": "yuan",
              "tone": "yuan",
              "pos": "adj",
              "vi": "xa"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "yuan",
          "tone": "yuan"
        },
        {
          "stage": "word",
          "vi": "di bo",
          "hanzi": "走路",
          "words": [
            {
              "text": "走路",
              "pinyin": "zou lu",
              "tone": "zou lu",
              "pos": "verb",
              "vi": "di bo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "zou lu",
          "tone": "zou lu"
        },
        {
          "stage": "phrase",
          "vi": "xe buyt tau dien ngam",
          "hanzi": "公共汽车地铁",
          "words": [
            {
              "text": "公共汽车",
              "pinyin": "gong gong qi che",
              "tone": "gong gong qi che",
              "pos": "noun",
              "vi": "xe buyt"
            },
            {
              "text": "地铁",
              "pinyin": "di tie",
              "tone": "di tie",
              "pos": "noun",
              "vi": "tau dien ngam"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "gong gong qi che di tie",
          "tone": "gong gong qi che di tie"
        },
        {
          "stage": "phrase",
          "vi": "tram xe ve",
          "hanzi": "车站票",
          "words": [
            {
              "text": "车站",
              "pinyin": "che zhan",
              "tone": "che zhan",
              "pos": "noun",
              "vi": "tram xe"
            },
            {
              "text": "票",
              "pinyin": "piao",
              "tone": "piao",
              "pos": "noun",
              "vi": "ve"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "che zhan piao",
          "tone": "che zhan piao"
        },
        {
          "stage": "phrase",
          "vi": "doi den noi",
          "hanzi": "到达的等",
          "words": [
            {
              "text": "到达",
              "pinyin": "dao da",
              "tone": "dao da",
              "pos": "verb",
              "vi": "den noi"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "等",
              "pinyin": "deng",
              "tone": "deng",
              "pos": "verb",
              "vi": "doi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "dao da de deng",
          "tone": "dao da de deng"
        },
        {
          "stage": "phrase",
          "vi": "xa di bo",
          "hanzi": "远走路",
          "words": [
            {
              "text": "远",
              "pinyin": "yuan",
              "tone": "yuan",
              "pos": "adj",
              "vi": "xa"
            },
            {
              "text": "走路",
              "pinyin": "zou lu",
              "tone": "zou lu",
              "pos": "verb",
              "vi": "di bo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "yuan zou lu",
          "tone": "yuan zou lu"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon tram xe ve.",
          "hanzi": "我想车站票。",
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
              "text": "车站",
              "pinyin": "che zhan",
              "tone": "che zhan",
              "pos": "noun",
              "vi": "tram xe"
            },
            {
              "text": "票",
              "pinyin": "piao",
              "tone": "piao",
              "pos": "noun",
              "vi": "ve"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "wo xiang che zhan piao",
          "tone": "wo xiang che zhan piao"
        },
        {
          "stage": "sentence",
          "vi": "xe buyt tau dien ngam rat ve.",
          "hanzi": "公共汽车地铁很票。",
          "words": [
            {
              "text": "公共汽车",
              "pinyin": "gong gong qi che",
              "tone": "gong gong qi che",
              "pos": "noun",
              "vi": "xe buyt"
            },
            {
              "text": "地铁",
              "pinyin": "di tie",
              "tone": "di tie",
              "pos": "noun",
              "vi": "tau dien ngam"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "票",
              "pinyin": "piao",
              "tone": "piao",
              "pos": "noun",
              "vi": "ve"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "gong gong qi che di tie hen piao",
          "tone": "gong gong qi che di tie hen piao"
        },
        {
          "stage": "sentence",
          "vi": "Vui long gan den noi.",
          "hanzi": "请近到达。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "近",
              "pinyin": "jin",
              "tone": "jin",
              "pos": "adj",
              "vi": "gan"
            },
            {
              "text": "到达",
              "pinyin": "dao da",
              "tone": "dao da",
              "pos": "verb",
              "vi": "den noi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "qing jin dao da",
          "tone": "qing jin dao da"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi xa di bo.",
          "hanzi": "我们远走路。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "远",
              "pinyin": "yuan",
              "tone": "yuan",
              "pos": "adj",
              "vi": "xa"
            },
            {
              "text": "走路",
              "pinyin": "zou lu",
              "tone": "zou lu",
              "pos": "verb",
              "vi": "di bo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "wo men yuan zou lu",
          "tone": "wo men yuan zou lu"
        },
        {
          "stage": "mixed",
          "vi": "doi den noi o cach.",
          "hanzi": "到达的等在离。",
          "words": [
            {
              "text": "到达",
              "pinyin": "dao da",
              "tone": "dao da",
              "pos": "verb",
              "vi": "den noi"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "等",
              "pinyin": "deng",
              "tone": "deng",
              "pos": "verb",
              "vi": "doi"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "离",
              "pinyin": "li",
              "tone": "li",
              "pos": "prep",
              "vi": "cach"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "dao da de deng zai li",
          "tone": "dao da de deng zai li"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di tau dien ngam tram xe.",
          "hanzi": "我们去地铁车站。",
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
              "text": "地铁",
              "pinyin": "di tie",
              "tone": "di tie",
              "pos": "noun",
              "vi": "tau dien ngam"
            },
            {
              "text": "车站",
              "pinyin": "che zhan",
              "tone": "che zhan",
              "pos": "noun",
              "vi": "tram xe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "wo men qu di tie che zhan",
          "tone": "wo men qu di tie che zhan"
        }
      ]
    },
    {
      "id": "hsk2-l8",
      "no": 8,
      "titleZh": "旅馆房间很安静",
      "titleVi": "Phòng khách sạn rất yên tĩnh",
      "items": [
        {
          "stage": "word",
          "vi": "khach san",
          "hanzi": "旅馆",
          "words": [
            {
              "text": "旅馆",
              "pinyin": "lv guan",
              "tone": "lv guan",
              "pos": "noun",
              "vi": "khach san"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "lv guan",
          "tone": "lv guan"
        },
        {
          "stage": "word",
          "vi": "phong",
          "hanzi": "房间",
          "words": [
            {
              "text": "房间",
              "pinyin": "fang jian",
              "tone": "fang jian",
              "pos": "noun",
              "vi": "phong"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "fang jian",
          "tone": "fang jian"
        },
        {
          "stage": "word",
          "vi": "yen tinh",
          "hanzi": "安静",
          "words": [
            {
              "text": "安静",
              "pinyin": "an jing",
              "tone": "an jing",
              "pos": "adj",
              "vi": "yen tinh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "an jing",
          "tone": "an jing"
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
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "gan jing",
          "tone": "gan jing"
        },
        {
          "stage": "word",
          "vi": "o lai",
          "hanzi": "住",
          "words": [
            {
              "text": "住",
              "pinyin": "zhu",
              "tone": "zhu",
              "pos": "verb",
              "vi": "o lai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "zhu",
          "tone": "zhu"
        },
        {
          "stage": "word",
          "vi": "buoi toi",
          "hanzi": "晚上",
          "words": [
            {
              "text": "晚上",
              "pinyin": "wan shang",
              "tone": "wan shang",
              "pos": "noun",
              "vi": "buoi toi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "wan shang",
          "tone": "wan shang"
        },
        {
          "stage": "word",
          "vi": "mo cua",
          "hanzi": "开门",
          "words": [
            {
              "text": "开门",
              "pinyin": "kai men",
              "tone": "kai men",
              "pos": "verb",
              "vi": "mo cua"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "kai men",
          "tone": "kai men"
        },
        {
          "stage": "word",
          "vi": "nhan vien phuc vu",
          "hanzi": "服务员",
          "words": [
            {
              "text": "服务员",
              "pinyin": "fu wu yuan",
              "tone": "fu wu yuan",
              "pos": "noun",
              "vi": "nhan vien phuc vu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "fu wu yuan",
          "tone": "fu wu yuan"
        },
        {
          "stage": "word",
          "vi": "tam",
          "hanzi": "洗澡",
          "words": [
            {
              "text": "洗澡",
              "pinyin": "xi zao",
              "tone": "xi zao",
              "pos": "verb",
              "vi": "tam"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "xi zao",
          "tone": "xi zao"
        },
        {
          "stage": "word",
          "vi": "may lanh",
          "hanzi": "空调",
          "words": [
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kong tiao",
              "pos": "noun",
              "vi": "may lanh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "kong tiao",
          "tone": "kong tiao"
        },
        {
          "stage": "phrase",
          "vi": "khach san phong",
          "hanzi": "旅馆房间",
          "words": [
            {
              "text": "旅馆",
              "pinyin": "lv guan",
              "tone": "lv guan",
              "pos": "noun",
              "vi": "khach san"
            },
            {
              "text": "房间",
              "pinyin": "fang jian",
              "tone": "fang jian",
              "pos": "noun",
              "vi": "phong"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "lv guan fang jian",
          "tone": "lv guan fang jian"
        },
        {
          "stage": "phrase",
          "vi": "yen tinh sach se",
          "hanzi": "安静干净",
          "words": [
            {
              "text": "安静",
              "pinyin": "an jing",
              "tone": "an jing",
              "pos": "adj",
              "vi": "yen tinh"
            },
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sach se"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "an jing gan jing",
          "tone": "an jing gan jing"
        },
        {
          "stage": "phrase",
          "vi": "buoi toi o lai",
          "hanzi": "住的晚上",
          "words": [
            {
              "text": "住",
              "pinyin": "zhu",
              "tone": "zhu",
              "pos": "verb",
              "vi": "o lai"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "晚上",
              "pinyin": "wan shang",
              "tone": "wan shang",
              "pos": "noun",
              "vi": "buoi toi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "zhu de wan shang",
          "tone": "zhu de wan shang"
        },
        {
          "stage": "phrase",
          "vi": "tam may lanh",
          "hanzi": "洗澡空调",
          "words": [
            {
              "text": "洗澡",
              "pinyin": "xi zao",
              "tone": "xi zao",
              "pos": "verb",
              "vi": "tam"
            },
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kong tiao",
              "pos": "noun",
              "vi": "may lanh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "xi zao kong tiao",
          "tone": "xi zao kong tiao"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon yen tinh sach se.",
          "hanzi": "我想安静干净。",
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
              "text": "安静",
              "pinyin": "an jing",
              "tone": "an jing",
              "pos": "adj",
              "vi": "yen tinh"
            },
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sach se"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "wo xiang an jing gan jing",
          "tone": "wo xiang an jing gan jing"
        },
        {
          "stage": "sentence",
          "vi": "khach san phong rat sach se.",
          "hanzi": "旅馆房间很干净。",
          "words": [
            {
              "text": "旅馆",
              "pinyin": "lv guan",
              "tone": "lv guan",
              "pos": "noun",
              "vi": "khach san"
            },
            {
              "text": "房间",
              "pinyin": "fang jian",
              "tone": "fang jian",
              "pos": "noun",
              "vi": "phong"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sach se"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "lv guan fang jian hen gan jing",
          "tone": "lv guan fang jian hen gan jing"
        },
        {
          "stage": "sentence",
          "vi": "Vui long nhan vien phuc vu o lai.",
          "hanzi": "请服务员住。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "服务员",
              "pinyin": "fu wu yuan",
              "tone": "fu wu yuan",
              "pos": "noun",
              "vi": "nhan vien phuc vu"
            },
            {
              "text": "住",
              "pinyin": "zhu",
              "tone": "zhu",
              "pos": "verb",
              "vi": "o lai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "qing fu wu yuan zhu",
          "tone": "qing fu wu yuan zhu"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi tam may lanh.",
          "hanzi": "我们洗澡空调。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "洗澡",
              "pinyin": "xi zao",
              "tone": "xi zao",
              "pos": "verb",
              "vi": "tam"
            },
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kong tiao",
              "pos": "noun",
              "vi": "may lanh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "wo men xi zao kong tiao",
          "tone": "wo men xi zao kong tiao"
        },
        {
          "stage": "mixed",
          "vi": "buoi toi o lai o mo cua.",
          "hanzi": "住的晚上在开门。",
          "words": [
            {
              "text": "住",
              "pinyin": "zhu",
              "tone": "zhu",
              "pos": "verb",
              "vi": "o lai"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "晚上",
              "pinyin": "wan shang",
              "tone": "wan shang",
              "pos": "noun",
              "vi": "buoi toi"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "开门",
              "pinyin": "kai men",
              "tone": "kai men",
              "pos": "verb",
              "vi": "mo cua"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "zhu de wan shang zai kai men",
          "tone": "zhu de wan shang zai kai men"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di phong yen tinh.",
          "hanzi": "我们去房间安静。",
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
              "text": "房间",
              "pinyin": "fang jian",
              "tone": "fang jian",
              "pos": "noun",
              "vi": "phong"
            },
            {
              "text": "安静",
              "pinyin": "an jing",
              "tone": "an jing",
              "pos": "adj",
              "vi": "yen tinh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "wo men qu fang jian an jing",
          "tone": "wo men qu fang jian an jing"
        }
      ]
    },
    {
      "id": "hsk2-l9",
      "no": 9,
      "titleZh": "感冒以后要休息",
      "titleVi": "Sau khi cảm cần nghỉ ngơi",
      "items": [
        {
          "stage": "word",
          "vi": "co the",
          "hanzi": "身体",
          "words": [
            {
              "text": "身体",
              "pinyin": "shen ti",
              "tone": "shen ti",
              "pos": "noun",
              "vi": "co the"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "shen ti",
          "tone": "shen ti"
        },
        {
          "stage": "word",
          "vi": "cam",
          "hanzi": "感冒",
          "words": [
            {
              "text": "感冒",
              "pinyin": "gan mao",
              "tone": "gan mao",
              "pos": "verb",
              "vi": "cam"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "gan mao",
          "tone": "gan mao"
        },
        {
          "stage": "word",
          "vi": "sot",
          "hanzi": "发烧",
          "words": [
            {
              "text": "发烧",
              "pinyin": "fa shao",
              "tone": "fa shao",
              "pos": "verb",
              "vi": "sot"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "fa shao",
          "tone": "fa shao"
        },
        {
          "stage": "word",
          "vi": "thuoc",
          "hanzi": "药",
          "words": [
            {
              "text": "药",
              "pinyin": "yao",
              "tone": "yao",
              "pos": "noun",
              "vi": "thuoc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "yao",
          "tone": "yao"
        },
        {
          "stage": "word",
          "vi": "benh vien",
          "hanzi": "医院",
          "words": [
            {
              "text": "医院",
              "pinyin": "yi yuan",
              "tone": "yi yuan",
              "pos": "noun",
              "vi": "benh vien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "yi yuan",
          "tone": "yi yuan"
        },
        {
          "stage": "word",
          "vi": "bac si",
          "hanzi": "医生",
          "words": [
            {
              "text": "医生",
              "pinyin": "yi sheng",
              "tone": "yi sheng",
              "pos": "noun",
              "vi": "bac si"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "yi sheng",
          "tone": "yi sheng"
        },
        {
          "stage": "word",
          "vi": "nghi ngoi",
          "hanzi": "休息",
          "words": [
            {
              "text": "休息",
              "pinyin": "xiu xi",
              "tone": "xiu xi",
              "pos": "verb",
              "vi": "nghi ngoi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "xiu xi",
          "tone": "xiu xi"
        },
        {
          "stage": "word",
          "vi": "uong nuoc",
          "hanzi": "喝水",
          "words": [
            {
              "text": "喝水",
              "pinyin": "he shui",
              "tone": "he shui",
              "pos": "verb",
              "vi": "uong nuoc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "he shui",
          "tone": "he shui"
        },
        {
          "stage": "word",
          "vi": "ngu",
          "hanzi": "睡觉",
          "words": [
            {
              "text": "睡觉",
              "pinyin": "shui jiao",
              "tone": "shui jiao",
              "pos": "verb",
              "vi": "ngu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "shui jiao",
          "tone": "shui jiao"
        },
        {
          "stage": "word",
          "vi": "kha hon mot chut",
          "hanzi": "好一点",
          "words": [
            {
              "text": "好一点",
              "pinyin": "hao yi dian",
              "tone": "hao yi dian",
              "pos": "adj",
              "vi": "kha hon mot chut"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "hao yi dian",
          "tone": "hao yi dian"
        },
        {
          "stage": "phrase",
          "vi": "co the cam",
          "hanzi": "身体感冒",
          "words": [
            {
              "text": "身体",
              "pinyin": "shen ti",
              "tone": "shen ti",
              "pos": "noun",
              "vi": "co the"
            },
            {
              "text": "感冒",
              "pinyin": "gan mao",
              "tone": "gan mao",
              "pos": "verb",
              "vi": "cam"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "shen ti gan mao",
          "tone": "shen ti gan mao"
        },
        {
          "stage": "phrase",
          "vi": "sot thuoc",
          "hanzi": "发烧药",
          "words": [
            {
              "text": "发烧",
              "pinyin": "fa shao",
              "tone": "fa shao",
              "pos": "verb",
              "vi": "sot"
            },
            {
              "text": "药",
              "pinyin": "yao",
              "tone": "yao",
              "pos": "noun",
              "vi": "thuoc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "fa shao yao",
          "tone": "fa shao yao"
        },
        {
          "stage": "phrase",
          "vi": "bac si benh vien",
          "hanzi": "医院的医生",
          "words": [
            {
              "text": "医院",
              "pinyin": "yi yuan",
              "tone": "yi yuan",
              "pos": "noun",
              "vi": "benh vien"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "医生",
              "pinyin": "yi sheng",
              "tone": "yi sheng",
              "pos": "noun",
              "vi": "bac si"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "yi yuan de yi sheng",
          "tone": "yi yuan de yi sheng"
        },
        {
          "stage": "phrase",
          "vi": "ngu kha hon mot chut",
          "hanzi": "睡觉好一点",
          "words": [
            {
              "text": "睡觉",
              "pinyin": "shui jiao",
              "tone": "shui jiao",
              "pos": "verb",
              "vi": "ngu"
            },
            {
              "text": "好一点",
              "pinyin": "hao yi dian",
              "tone": "hao yi dian",
              "pos": "adj",
              "vi": "kha hon mot chut"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "shui jiao hao yi dian",
          "tone": "shui jiao hao yi dian"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon sot thuoc.",
          "hanzi": "我想发烧药。",
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
              "text": "发烧",
              "pinyin": "fa shao",
              "tone": "fa shao",
              "pos": "verb",
              "vi": "sot"
            },
            {
              "text": "药",
              "pinyin": "yao",
              "tone": "yao",
              "pos": "noun",
              "vi": "thuoc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "wo xiang fa shao yao",
          "tone": "wo xiang fa shao yao"
        },
        {
          "stage": "sentence",
          "vi": "co the cam rat thuoc.",
          "hanzi": "身体感冒很药。",
          "words": [
            {
              "text": "身体",
              "pinyin": "shen ti",
              "tone": "shen ti",
              "pos": "noun",
              "vi": "co the"
            },
            {
              "text": "感冒",
              "pinyin": "gan mao",
              "tone": "gan mao",
              "pos": "verb",
              "vi": "cam"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "药",
              "pinyin": "yao",
              "tone": "yao",
              "pos": "noun",
              "vi": "thuoc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "shen ti gan mao hen yao",
          "tone": "shen ti gan mao hen yao"
        },
        {
          "stage": "sentence",
          "vi": "Vui long uong nuoc benh vien.",
          "hanzi": "请喝水医院。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "喝水",
              "pinyin": "he shui",
              "tone": "he shui",
              "pos": "verb",
              "vi": "uong nuoc"
            },
            {
              "text": "医院",
              "pinyin": "yi yuan",
              "tone": "yi yuan",
              "pos": "noun",
              "vi": "benh vien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "qing he shui yi yuan",
          "tone": "qing he shui yi yuan"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi ngu kha hon mot chut.",
          "hanzi": "我们睡觉好一点。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "睡觉",
              "pinyin": "shui jiao",
              "tone": "shui jiao",
              "pos": "verb",
              "vi": "ngu"
            },
            {
              "text": "好一点",
              "pinyin": "hao yi dian",
              "tone": "hao yi dian",
              "pos": "adj",
              "vi": "kha hon mot chut"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "wo men shui jiao hao yi dian",
          "tone": "wo men shui jiao hao yi dian"
        },
        {
          "stage": "mixed",
          "vi": "bac si benh vien o nghi ngoi.",
          "hanzi": "医院的医生在休息。",
          "words": [
            {
              "text": "医院",
              "pinyin": "yi yuan",
              "tone": "yi yuan",
              "pos": "noun",
              "vi": "benh vien"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "医生",
              "pinyin": "yi sheng",
              "tone": "yi sheng",
              "pos": "noun",
              "vi": "bac si"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "休息",
              "pinyin": "xiu xi",
              "tone": "xiu xi",
              "pos": "verb",
              "vi": "nghi ngoi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "yi yuan de yi sheng zai xiu xi",
          "tone": "yi yuan de yi sheng zai xiu xi"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di cam sot.",
          "hanzi": "我们去感冒发烧。",
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
              "text": "感冒",
              "pinyin": "gan mao",
              "tone": "gan mao",
              "pos": "verb",
              "vi": "cam"
            },
            {
              "text": "发烧",
              "pinyin": "fa shao",
              "tone": "fa shao",
              "pos": "verb",
              "vi": "sot"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "wo men qu gan mao fa shao",
          "tone": "wo men qu gan mao fa shao"
        }
      ]
    },
    {
      "id": "hsk2-l10",
      "no": 10,
      "titleZh": "公司开会以后完成文件",
      "titleVi": "Sau cuộc họp công ty hoàn thành tài liệu",
      "items": [
        {
          "stage": "word",
          "vi": "cong ty",
          "hanzi": "公司",
          "words": [
            {
              "text": "公司",
              "pinyin": "gong si",
              "tone": "gong si",
              "pos": "noun",
              "vi": "cong ty"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "gong si",
          "tone": "gong si"
        },
        {
          "stage": "word",
          "vi": "dong nghiep",
          "hanzi": "同事",
          "words": [
            {
              "text": "同事",
              "pinyin": "tong shi",
              "tone": "tong shi",
              "pos": "noun",
              "vi": "dong nghiep"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "tong shi",
          "tone": "tong shi"
        },
        {
          "stage": "word",
          "vi": "quan ly",
          "hanzi": "经理",
          "words": [
            {
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jing li",
              "pos": "noun",
              "vi": "quan ly"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "jing li",
          "tone": "jing li"
        },
        {
          "stage": "word",
          "vi": "hop",
          "hanzi": "开会",
          "words": [
            {
              "text": "开会",
              "pinyin": "kai hui",
              "tone": "kai hui",
              "pos": "verb",
              "vi": "hop"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "kai hui",
          "tone": "kai hui"
        },
        {
          "stage": "word",
          "vi": "tai lieu",
          "hanzi": "文件",
          "words": [
            {
              "text": "文件",
              "pinyin": "wen jian",
              "tone": "wen jian",
              "pos": "noun",
              "vi": "tai lieu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wen jian",
          "tone": "wen jian"
        },
        {
          "stage": "word",
          "vi": "hoan thanh",
          "hanzi": "完成",
          "words": [
            {
              "text": "完成",
              "pinyin": "wan cheng",
              "tone": "wan cheng",
              "pos": "verb",
              "vi": "hoan thanh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wan cheng",
          "tone": "wan cheng"
        },
        {
          "stage": "word",
          "vi": "ban",
          "hanzi": "忙",
          "words": [
            {
              "text": "忙",
              "pinyin": "mang",
              "tone": "mang",
              "pos": "adj",
              "vi": "ban"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "mang",
          "tone": "mang"
        },
        {
          "stage": "word",
          "vi": "viec",
          "hanzi": "事情",
          "words": [
            {
              "text": "事情",
              "pinyin": "shi qing",
              "tone": "shi qing",
              "pos": "noun",
              "vi": "viec"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "shi qing",
          "tone": "shi qing"
        },
        {
          "stage": "word",
          "vi": "dien thoai",
          "hanzi": "电话",
          "words": [
            {
              "text": "电话",
              "pinyin": "dian hua",
              "tone": "dian hua",
              "pos": "noun",
              "vi": "dien thoai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "dian hua",
          "tone": "dian hua"
        },
        {
          "stage": "word",
          "vi": "email",
          "hanzi": "电子邮件",
          "words": [
            {
              "text": "电子邮件",
              "pinyin": "dian zi you jian",
              "tone": "dian zi you jian",
              "pos": "noun",
              "vi": "email"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "dian zi you jian",
          "tone": "dian zi you jian"
        },
        {
          "stage": "phrase",
          "vi": "cong ty dong nghiep",
          "hanzi": "公司同事",
          "words": [
            {
              "text": "公司",
              "pinyin": "gong si",
              "tone": "gong si",
              "pos": "noun",
              "vi": "cong ty"
            },
            {
              "text": "同事",
              "pinyin": "tong shi",
              "tone": "tong shi",
              "pos": "noun",
              "vi": "dong nghiep"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "gong si tong shi",
          "tone": "gong si tong shi"
        },
        {
          "stage": "phrase",
          "vi": "quan ly hop",
          "hanzi": "经理开会",
          "words": [
            {
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jing li",
              "pos": "noun",
              "vi": "quan ly"
            },
            {
              "text": "开会",
              "pinyin": "kai hui",
              "tone": "kai hui",
              "pos": "verb",
              "vi": "hop"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "jing li kai hui",
          "tone": "jing li kai hui"
        },
        {
          "stage": "phrase",
          "vi": "hoan thanh tai lieu",
          "hanzi": "文件的完成",
          "words": [
            {
              "text": "文件",
              "pinyin": "wen jian",
              "tone": "wen jian",
              "pos": "noun",
              "vi": "tai lieu"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "完成",
              "pinyin": "wan cheng",
              "tone": "wan cheng",
              "pos": "verb",
              "vi": "hoan thanh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wen jian de wan cheng",
          "tone": "wen jian de wan cheng"
        },
        {
          "stage": "phrase",
          "vi": "dien thoai email",
          "hanzi": "电话电子邮件",
          "words": [
            {
              "text": "电话",
              "pinyin": "dian hua",
              "tone": "dian hua",
              "pos": "noun",
              "vi": "dien thoai"
            },
            {
              "text": "电子邮件",
              "pinyin": "dian zi you jian",
              "tone": "dian zi you jian",
              "pos": "noun",
              "vi": "email"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "dian hua dian zi you jian",
          "tone": "dian hua dian zi you jian"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon quan ly hop.",
          "hanzi": "我想经理开会。",
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
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jing li",
              "pos": "noun",
              "vi": "quan ly"
            },
            {
              "text": "开会",
              "pinyin": "kai hui",
              "tone": "kai hui",
              "pos": "verb",
              "vi": "hop"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wo xiang jing li kai hui",
          "tone": "wo xiang jing li kai hui"
        },
        {
          "stage": "sentence",
          "vi": "cong ty dong nghiep rat hop.",
          "hanzi": "公司同事很开会。",
          "words": [
            {
              "text": "公司",
              "pinyin": "gong si",
              "tone": "gong si",
              "pos": "noun",
              "vi": "cong ty"
            },
            {
              "text": "同事",
              "pinyin": "tong shi",
              "tone": "tong shi",
              "pos": "noun",
              "vi": "dong nghiep"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "开会",
              "pinyin": "kai hui",
              "tone": "kai hui",
              "pos": "verb",
              "vi": "hop"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "gong si tong shi hen kai hui",
          "tone": "gong si tong shi hen kai hui"
        },
        {
          "stage": "sentence",
          "vi": "Vui long viec tai lieu.",
          "hanzi": "请事情文件。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "事情",
              "pinyin": "shi qing",
              "tone": "shi qing",
              "pos": "noun",
              "vi": "viec"
            },
            {
              "text": "文件",
              "pinyin": "wen jian",
              "tone": "wen jian",
              "pos": "noun",
              "vi": "tai lieu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "qing shi qing wen jian",
          "tone": "qing shi qing wen jian"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi dien thoai email.",
          "hanzi": "我们电话电子邮件。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "电话",
              "pinyin": "dian hua",
              "tone": "dian hua",
              "pos": "noun",
              "vi": "dien thoai"
            },
            {
              "text": "电子邮件",
              "pinyin": "dian zi you jian",
              "tone": "dian zi you jian",
              "pos": "noun",
              "vi": "email"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wo men dian hua dian zi you jian",
          "tone": "wo men dian hua dian zi you jian"
        },
        {
          "stage": "mixed",
          "vi": "hoan thanh tai lieu o ban.",
          "hanzi": "文件的完成在忙。",
          "words": [
            {
              "text": "文件",
              "pinyin": "wen jian",
              "tone": "wen jian",
              "pos": "noun",
              "vi": "tai lieu"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "完成",
              "pinyin": "wan cheng",
              "tone": "wan cheng",
              "pos": "verb",
              "vi": "hoan thanh"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "忙",
              "pinyin": "mang",
              "tone": "mang",
              "pos": "adj",
              "vi": "ban"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wen jian de wan cheng zai mang",
          "tone": "wen jian de wan cheng zai mang"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di dong nghiep quan ly.",
          "hanzi": "我们去同事经理。",
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
              "text": "同事",
              "pinyin": "tong shi",
              "tone": "tong shi",
              "pos": "noun",
              "vi": "dong nghiep"
            },
            {
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jing li",
              "pos": "noun",
              "vi": "quan ly"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wo men qu tong shi jing li",
          "tone": "wo men qu tong shi jing li"
        }
      ]
    }
  ]
};
});
