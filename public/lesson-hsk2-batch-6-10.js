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
          "vi": "thời tiết",
          "hanzi": "天气",
          "words": [
            {
              "text": "天气",
              "pinyin": "tian qi",
              "tone": "tian qi",
              "pos": "noun",
              "vi": "thời tiết"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "tian qi",
          "tone": "tian qi"
        },
        {
          "stage": "word",
          "vi": "mưa",
          "hanzi": "下雨",
          "words": [
            {
              "text": "下雨",
              "pinyin": "xia yu",
              "tone": "xia yu",
              "pos": "verb",
              "vi": "mưa"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "xia yu",
          "tone": "xia yu"
        },
        {
          "stage": "word",
          "vi": "trời âm u",
          "hanzi": "阴天",
          "words": [
            {
              "text": "阴天",
              "pinyin": "yin tian",
              "tone": "yin tian",
              "pos": "noun",
              "vi": "trời âm u"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "yin tian",
          "tone": "yin tian"
        },
        {
          "stage": "word",
          "vi": "trời nắng",
          "hanzi": "晴天",
          "words": [
            {
              "text": "晴天",
              "pinyin": "qing tian",
              "tone": "qing tian",
              "pos": "noun",
              "vi": "trời nắng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "qing tian",
          "tone": "qing tian"
        },
        {
          "stage": "word",
          "vi": "bên ngoài",
          "hanzi": "外面",
          "words": [
            {
              "text": "外面",
              "pinyin": "wai mian",
              "tone": "wai mian",
              "pos": "noun",
              "vi": "bên ngoài"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wai mian",
          "tone": "wai mian"
        },
        {
          "stage": "word",
          "vi": "lạnh",
          "hanzi": "冷",
          "words": [
            {
              "text": "冷",
              "pinyin": "leng",
              "tone": "leng",
              "pos": "adj",
              "vi": "lạnh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "leng",
          "tone": "leng"
        },
        {
          "stage": "word",
          "vi": "nóng",
          "hanzi": "热",
          "words": [
            {
              "text": "热",
              "pinyin": "re",
              "tone": "re",
              "pos": "adj",
              "vi": "nóng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "re",
          "tone": "re"
        },
        {
          "stage": "word",
          "vi": "mặc",
          "hanzi": "穿",
          "words": [
            {
              "text": "穿",
              "pinyin": "chuan",
              "tone": "chuan",
              "pos": "verb",
              "vi": "mặc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "chuan",
          "tone": "chuan"
        },
        {
          "stage": "word",
          "vi": "vận động",
          "hanzi": "运动",
          "words": [
            {
              "text": "运动",
              "pinyin": "yun dong",
              "tone": "yun dong",
              "pos": "verb",
              "vi": "vận động"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "yun dong",
          "tone": "yun dong"
        },
        {
          "stage": "word",
          "vi": "công viên",
          "hanzi": "公园",
          "words": [
            {
              "text": "公园",
              "pinyin": "gong yuan",
              "tone": "gong yuan",
              "pos": "noun",
              "vi": "công viên"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "gong yuan",
          "tone": "gong yuan"
        },
        {
          "stage": "phrase",
          "vi": "thời tiết mưa",
          "hanzi": "天气下雨",
          "words": [
            {
              "text": "天气",
              "pinyin": "tian qi",
              "tone": "tian qi",
              "pos": "noun",
              "vi": "thời tiết"
            },
            {
              "text": "下雨",
              "pinyin": "xia yu",
              "tone": "xia yu",
              "pos": "verb",
              "vi": "mưa"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "tian qi xia yu",
          "tone": "tian qi xia yu"
        },
        {
          "stage": "phrase",
          "vi": "trời âm u trời nắng",
          "hanzi": "阴天晴天",
          "words": [
            {
              "text": "阴天",
              "pinyin": "yin tian",
              "tone": "yin tian",
              "pos": "noun",
              "vi": "trời âm u"
            },
            {
              "text": "晴天",
              "pinyin": "qing tian",
              "tone": "qing tian",
              "pos": "noun",
              "vi": "trời nắng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "yin tian qing tian",
          "tone": "yin tian qing tian"
        },
        {
          "stage": "phrase",
          "vi": "lạnh bên ngoài",
          "hanzi": "外面的冷",
          "words": [
            {
              "text": "外面",
              "pinyin": "wai mian",
              "tone": "wai mian",
              "pos": "noun",
              "vi": "bên ngoài"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "冷",
              "pinyin": "leng",
              "tone": "leng",
              "pos": "adj",
              "vi": "lạnh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wai mian de leng",
          "tone": "wai mian de leng"
        },
        {
          "stage": "phrase",
          "vi": "vận động công viên",
          "hanzi": "运动公园",
          "words": [
            {
              "text": "运动",
              "pinyin": "yun dong",
              "tone": "yun dong",
              "pos": "verb",
              "vi": "vận động"
            },
            {
              "text": "公园",
              "pinyin": "gong yuan",
              "tone": "gong yuan",
              "pos": "noun",
              "vi": "công viên"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "yun dong gong yuan",
          "tone": "yun dong gong yuan"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn trời âm u trời nắng.",
          "hanzi": "我想阴天晴天。",
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
              "text": "阴天",
              "pinyin": "yin tian",
              "tone": "yin tian",
              "pos": "noun",
              "vi": "trời âm u"
            },
            {
              "text": "晴天",
              "pinyin": "qing tian",
              "tone": "qing tian",
              "pos": "noun",
              "vi": "trời nắng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wo xiang yin tian qing tian",
          "tone": "wo xiang yin tian qing tian"
        },
        {
          "stage": "sentence",
          "vi": "thời tiết mưa rất trời nắng.",
          "hanzi": "天气下雨很晴天。",
          "words": [
            {
              "text": "天气",
              "pinyin": "tian qi",
              "tone": "tian qi",
              "pos": "noun",
              "vi": "thời tiết"
            },
            {
              "text": "下雨",
              "pinyin": "xia yu",
              "tone": "xia yu",
              "pos": "verb",
              "vi": "mưa"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "晴天",
              "pinyin": "qing tian",
              "tone": "qing tian",
              "pos": "noun",
              "vi": "trời nắng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "tian qi xia yu hen qing tian",
          "tone": "tian qi xia yu hen qing tian"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng mặc bên ngoài.",
          "hanzi": "请穿外面。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "穿",
              "pinyin": "chuan",
              "tone": "chuan",
              "pos": "verb",
              "vi": "mặc"
            },
            {
              "text": "外面",
              "pinyin": "wai mian",
              "tone": "wai mian",
              "pos": "noun",
              "vi": "bên ngoài"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "qing chuan wai mian",
          "tone": "qing chuan wai mian"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi vận động công viên.",
          "hanzi": "我们运动公园。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "运动",
              "pinyin": "yun dong",
              "tone": "yun dong",
              "pos": "verb",
              "vi": "vận động"
            },
            {
              "text": "公园",
              "pinyin": "gong yuan",
              "tone": "gong yuan",
              "pos": "noun",
              "vi": "công viên"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wo men yun dong gong yuan",
          "tone": "wo men yun dong gong yuan"
        },
        {
          "stage": "mixed",
          "vi": "lạnh bên ngoài ở nóng.",
          "hanzi": "外面的冷在热。",
          "words": [
            {
              "text": "外面",
              "pinyin": "wai mian",
              "tone": "wai mian",
              "pos": "noun",
              "vi": "bên ngoài"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "冷",
              "pinyin": "leng",
              "tone": "leng",
              "pos": "adj",
              "vi": "lạnh"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "热",
              "pinyin": "re",
              "tone": "re",
              "pos": "adj",
              "vi": "nóng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 6",
          "pinyin": "wai mian de leng zai re",
          "tone": "wai mian de leng zai re"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi mưa trời âm u.",
          "hanzi": "我们去下雨阴天。",
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
              "text": "下雨",
              "pinyin": "xia yu",
              "tone": "xia yu",
              "pos": "verb",
              "vi": "mưa"
            },
            {
              "text": "阴天",
              "pinyin": "yin tian",
              "tone": "yin tian",
              "pos": "noun",
              "vi": "trời âm u"
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
          "vi": "xe buýt",
          "hanzi": "公共汽车",
          "words": [
            {
              "text": "公共汽车",
              "pinyin": "gong gong qi che",
              "tone": "gong gong qi che",
              "pos": "noun",
              "vi": "xe buýt"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "gong gong qi che",
          "tone": "gong gong qi che"
        },
        {
          "stage": "word",
          "vi": "tàu điện ngầm",
          "hanzi": "地铁",
          "words": [
            {
              "text": "地铁",
              "pinyin": "di tie",
              "tone": "di tie",
              "pos": "noun",
              "vi": "tàu điện ngầm"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "di tie",
          "tone": "di tie"
        },
        {
          "stage": "word",
          "vi": "trạm xe",
          "hanzi": "车站",
          "words": [
            {
              "text": "车站",
              "pinyin": "che zhan",
              "tone": "che zhan",
              "pos": "noun",
              "vi": "trạm xe"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "che zhan",
          "tone": "che zhan"
        },
        {
          "stage": "word",
          "vi": "vé",
          "hanzi": "票",
          "words": [
            {
              "text": "票",
              "pinyin": "piao",
              "tone": "piao",
              "pos": "noun",
              "vi": "vé"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "piao",
          "tone": "piao"
        },
        {
          "stage": "word",
          "vi": "đến nơi",
          "hanzi": "到达",
          "words": [
            {
              "text": "到达",
              "pinyin": "dao da",
              "tone": "dao da",
              "pos": "verb",
              "vi": "đến nơi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "dao da",
          "tone": "dao da"
        },
        {
          "stage": "word",
          "vi": "đợi",
          "hanzi": "等",
          "words": [
            {
              "text": "等",
              "pinyin": "deng",
              "tone": "deng",
              "pos": "verb",
              "vi": "đợi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "deng",
          "tone": "deng"
        },
        {
          "stage": "word",
          "vi": "cách",
          "hanzi": "离",
          "words": [
            {
              "text": "离",
              "pinyin": "li",
              "tone": "li",
              "pos": "prep",
              "vi": "cách"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "li",
          "tone": "li"
        },
        {
          "stage": "word",
          "vi": "gần",
          "hanzi": "近",
          "words": [
            {
              "text": "近",
              "pinyin": "jin",
              "tone": "jin",
              "pos": "adj",
              "vi": "gần"
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
          "vi": "đi bộ",
          "hanzi": "走路",
          "words": [
            {
              "text": "走路",
              "pinyin": "zou lu",
              "tone": "zou lu",
              "pos": "verb",
              "vi": "đi bộ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "zou lu",
          "tone": "zou lu"
        },
        {
          "stage": "phrase",
          "vi": "xe buýt tàu điện ngầm",
          "hanzi": "公共汽车地铁",
          "words": [
            {
              "text": "公共汽车",
              "pinyin": "gong gong qi che",
              "tone": "gong gong qi che",
              "pos": "noun",
              "vi": "xe buýt"
            },
            {
              "text": "地铁",
              "pinyin": "di tie",
              "tone": "di tie",
              "pos": "noun",
              "vi": "tàu điện ngầm"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "gong gong qi che di tie",
          "tone": "gong gong qi che di tie"
        },
        {
          "stage": "phrase",
          "vi": "trạm xe vé",
          "hanzi": "车站票",
          "words": [
            {
              "text": "车站",
              "pinyin": "che zhan",
              "tone": "che zhan",
              "pos": "noun",
              "vi": "trạm xe"
            },
            {
              "text": "票",
              "pinyin": "piao",
              "tone": "piao",
              "pos": "noun",
              "vi": "vé"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "che zhan piao",
          "tone": "che zhan piao"
        },
        {
          "stage": "phrase",
          "vi": "đợi đến nơi",
          "hanzi": "到达的等",
          "words": [
            {
              "text": "到达",
              "pinyin": "dao da",
              "tone": "dao da",
              "pos": "verb",
              "vi": "đến nơi"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "等",
              "pinyin": "deng",
              "tone": "deng",
              "pos": "verb",
              "vi": "đợi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "dao da de deng",
          "tone": "dao da de deng"
        },
        {
          "stage": "phrase",
          "vi": "xa đi bộ",
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
              "vi": "đi bộ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "yuan zou lu",
          "tone": "yuan zou lu"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn trạm xe vé.",
          "hanzi": "我想车站票。",
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
              "text": "车站",
              "pinyin": "che zhan",
              "tone": "che zhan",
              "pos": "noun",
              "vi": "trạm xe"
            },
            {
              "text": "票",
              "pinyin": "piao",
              "tone": "piao",
              "pos": "noun",
              "vi": "vé"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "wo xiang che zhan piao",
          "tone": "wo xiang che zhan piao"
        },
        {
          "stage": "sentence",
          "vi": "xe buýt tàu điện ngầm rất vé.",
          "hanzi": "公共汽车地铁很票。",
          "words": [
            {
              "text": "公共汽车",
              "pinyin": "gong gong qi che",
              "tone": "gong gong qi che",
              "pos": "noun",
              "vi": "xe buýt"
            },
            {
              "text": "地铁",
              "pinyin": "di tie",
              "tone": "di tie",
              "pos": "noun",
              "vi": "tàu điện ngầm"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "票",
              "pinyin": "piao",
              "tone": "piao",
              "pos": "noun",
              "vi": "vé"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "gong gong qi che di tie hen piao",
          "tone": "gong gong qi che di tie hen piao"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng gần đến nơi.",
          "hanzi": "请近到达。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "近",
              "pinyin": "jin",
              "tone": "jin",
              "pos": "adj",
              "vi": "gần"
            },
            {
              "text": "到达",
              "pinyin": "dao da",
              "tone": "dao da",
              "pos": "verb",
              "vi": "đến nơi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "qing jin dao da",
          "tone": "qing jin dao da"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi xa đi bộ.",
          "hanzi": "我们远走路。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
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
              "vi": "đi bộ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "wo men yuan zou lu",
          "tone": "wo men yuan zou lu"
        },
        {
          "stage": "mixed",
          "vi": "đợi đến nơi ở cách.",
          "hanzi": "到达的等在离。",
          "words": [
            {
              "text": "到达",
              "pinyin": "dao da",
              "tone": "dao da",
              "pos": "verb",
              "vi": "đến nơi"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "等",
              "pinyin": "deng",
              "tone": "deng",
              "pos": "verb",
              "vi": "đợi"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "离",
              "pinyin": "li",
              "tone": "li",
              "pos": "prep",
              "vi": "cách"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 7",
          "pinyin": "dao da de deng zai li",
          "tone": "dao da de deng zai li"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi tàu điện ngầm trạm xe.",
          "hanzi": "我们去地铁车站。",
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
              "text": "地铁",
              "pinyin": "di tie",
              "tone": "di tie",
              "pos": "noun",
              "vi": "tàu điện ngầm"
            },
            {
              "text": "车站",
              "pinyin": "che zhan",
              "tone": "che zhan",
              "pos": "noun",
              "vi": "trạm xe"
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
          "vi": "khách sạn",
          "hanzi": "旅馆",
          "words": [
            {
              "text": "旅馆",
              "pinyin": "lv guan",
              "tone": "lv guan",
              "pos": "noun",
              "vi": "khách sạn"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "lv guan",
          "tone": "lv guan"
        },
        {
          "stage": "word",
          "vi": "phòng",
          "hanzi": "房间",
          "words": [
            {
              "text": "房间",
              "pinyin": "fang jian",
              "tone": "fang jian",
              "pos": "noun",
              "vi": "phòng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "fang jian",
          "tone": "fang jian"
        },
        {
          "stage": "word",
          "vi": "yên tĩnh",
          "hanzi": "安静",
          "words": [
            {
              "text": "安静",
              "pinyin": "an jing",
              "tone": "an jing",
              "pos": "adj",
              "vi": "yên tĩnh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "an jing",
          "tone": "an jing"
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
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "gan jing",
          "tone": "gan jing"
        },
        {
          "stage": "word",
          "vi": "ở lại",
          "hanzi": "住",
          "words": [
            {
              "text": "住",
              "pinyin": "zhu",
              "tone": "zhu",
              "pos": "verb",
              "vi": "ở lại"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "zhu",
          "tone": "zhu"
        },
        {
          "stage": "word",
          "vi": "buổi tối",
          "hanzi": "晚上",
          "words": [
            {
              "text": "晚上",
              "pinyin": "wan shang",
              "tone": "wan shang",
              "pos": "noun",
              "vi": "buổi tối"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "wan shang",
          "tone": "wan shang"
        },
        {
          "stage": "word",
          "vi": "mở cửa",
          "hanzi": "开门",
          "words": [
            {
              "text": "开门",
              "pinyin": "kai men",
              "tone": "kai men",
              "pos": "verb",
              "vi": "mở cửa"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "kai men",
          "tone": "kai men"
        },
        {
          "stage": "word",
          "vi": "nhân viên phục vụ",
          "hanzi": "服务员",
          "words": [
            {
              "text": "服务员",
              "pinyin": "fu wu yuan",
              "tone": "fu wu yuan",
              "pos": "noun",
              "vi": "nhân viên phục vụ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "fu wu yuan",
          "tone": "fu wu yuan"
        },
        {
          "stage": "word",
          "vi": "tắm",
          "hanzi": "洗澡",
          "words": [
            {
              "text": "洗澡",
              "pinyin": "xi zao",
              "tone": "xi zao",
              "pos": "verb",
              "vi": "tắm"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "xi zao",
          "tone": "xi zao"
        },
        {
          "stage": "word",
          "vi": "máy lạnh",
          "hanzi": "空调",
          "words": [
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kong tiao",
              "pos": "noun",
              "vi": "máy lạnh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "kong tiao",
          "tone": "kong tiao"
        },
        {
          "stage": "phrase",
          "vi": "khách sạn phòng",
          "hanzi": "旅馆房间",
          "words": [
            {
              "text": "旅馆",
              "pinyin": "lv guan",
              "tone": "lv guan",
              "pos": "noun",
              "vi": "khách sạn"
            },
            {
              "text": "房间",
              "pinyin": "fang jian",
              "tone": "fang jian",
              "pos": "noun",
              "vi": "phòng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "lv guan fang jian",
          "tone": "lv guan fang jian"
        },
        {
          "stage": "phrase",
          "vi": "yên tĩnh sạch sẽ",
          "hanzi": "安静干净",
          "words": [
            {
              "text": "安静",
              "pinyin": "an jing",
              "tone": "an jing",
              "pos": "adj",
              "vi": "yên tĩnh"
            },
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sạch sẽ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "an jing gan jing",
          "tone": "an jing gan jing"
        },
        {
          "stage": "phrase",
          "vi": "buổi tối ở lại",
          "hanzi": "住的晚上",
          "words": [
            {
              "text": "住",
              "pinyin": "zhu",
              "tone": "zhu",
              "pos": "verb",
              "vi": "ở lại"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "晚上",
              "pinyin": "wan shang",
              "tone": "wan shang",
              "pos": "noun",
              "vi": "buổi tối"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "zhu de wan shang",
          "tone": "zhu de wan shang"
        },
        {
          "stage": "phrase",
          "vi": "tắm máy lạnh",
          "hanzi": "洗澡空调",
          "words": [
            {
              "text": "洗澡",
              "pinyin": "xi zao",
              "tone": "xi zao",
              "pos": "verb",
              "vi": "tắm"
            },
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kong tiao",
              "pos": "noun",
              "vi": "máy lạnh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "xi zao kong tiao",
          "tone": "xi zao kong tiao"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn yên tĩnh sạch sẽ.",
          "hanzi": "我想安静干净。",
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
              "text": "安静",
              "pinyin": "an jing",
              "tone": "an jing",
              "pos": "adj",
              "vi": "yên tĩnh"
            },
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sạch sẽ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "wo xiang an jing gan jing",
          "tone": "wo xiang an jing gan jing"
        },
        {
          "stage": "sentence",
          "vi": "khách sạn phòng rất sạch sẽ.",
          "hanzi": "旅馆房间很干净。",
          "words": [
            {
              "text": "旅馆",
              "pinyin": "lv guan",
              "tone": "lv guan",
              "pos": "noun",
              "vi": "khách sạn"
            },
            {
              "text": "房间",
              "pinyin": "fang jian",
              "tone": "fang jian",
              "pos": "noun",
              "vi": "phòng"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "干净",
              "pinyin": "gan jing",
              "tone": "gan jing",
              "pos": "adj",
              "vi": "sạch sẽ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "lv guan fang jian hen gan jing",
          "tone": "lv guan fang jian hen gan jing"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng nhân viên phục vụ ở lại.",
          "hanzi": "请服务员住。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "服务员",
              "pinyin": "fu wu yuan",
              "tone": "fu wu yuan",
              "pos": "noun",
              "vi": "nhân viên phục vụ"
            },
            {
              "text": "住",
              "pinyin": "zhu",
              "tone": "zhu",
              "pos": "verb",
              "vi": "ở lại"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "qing fu wu yuan zhu",
          "tone": "qing fu wu yuan zhu"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi tắm máy lạnh.",
          "hanzi": "我们洗澡空调。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "洗澡",
              "pinyin": "xi zao",
              "tone": "xi zao",
              "pos": "verb",
              "vi": "tắm"
            },
            {
              "text": "空调",
              "pinyin": "kong tiao",
              "tone": "kong tiao",
              "pos": "noun",
              "vi": "máy lạnh"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "wo men xi zao kong tiao",
          "tone": "wo men xi zao kong tiao"
        },
        {
          "stage": "mixed",
          "vi": "buổi tối ở lại ở mở cửa.",
          "hanzi": "住的晚上在开门。",
          "words": [
            {
              "text": "住",
              "pinyin": "zhu",
              "tone": "zhu",
              "pos": "verb",
              "vi": "ở lại"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "晚上",
              "pinyin": "wan shang",
              "tone": "wan shang",
              "pos": "noun",
              "vi": "buổi tối"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "开门",
              "pinyin": "kai men",
              "tone": "kai men",
              "pos": "verb",
              "vi": "mở cửa"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 8",
          "pinyin": "zhu de wan shang zai kai men",
          "tone": "zhu de wan shang zai kai men"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi phòng yên tĩnh.",
          "hanzi": "我们去房间安静。",
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
              "text": "房间",
              "pinyin": "fang jian",
              "tone": "fang jian",
              "pos": "noun",
              "vi": "phòng"
            },
            {
              "text": "安静",
              "pinyin": "an jing",
              "tone": "an jing",
              "pos": "adj",
              "vi": "yên tĩnh"
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
          "vi": "cơ thể",
          "hanzi": "身体",
          "words": [
            {
              "text": "身体",
              "pinyin": "shen ti",
              "tone": "shen ti",
              "pos": "noun",
              "vi": "cơ thể"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "shen ti",
          "tone": "shen ti"
        },
        {
          "stage": "word",
          "vi": "cảm",
          "hanzi": "感冒",
          "words": [
            {
              "text": "感冒",
              "pinyin": "gan mao",
              "tone": "gan mao",
              "pos": "verb",
              "vi": "cảm"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "gan mao",
          "tone": "gan mao"
        },
        {
          "stage": "word",
          "vi": "sốt",
          "hanzi": "发烧",
          "words": [
            {
              "text": "发烧",
              "pinyin": "fa shao",
              "tone": "fa shao",
              "pos": "verb",
              "vi": "sốt"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "fa shao",
          "tone": "fa shao"
        },
        {
          "stage": "word",
          "vi": "thuốc",
          "hanzi": "药",
          "words": [
            {
              "text": "药",
              "pinyin": "yao",
              "tone": "yao",
              "pos": "noun",
              "vi": "thuốc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "yao",
          "tone": "yao"
        },
        {
          "stage": "word",
          "vi": "bệnh viện",
          "hanzi": "医院",
          "words": [
            {
              "text": "医院",
              "pinyin": "yi yuan",
              "tone": "yi yuan",
              "pos": "noun",
              "vi": "bệnh viện"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "yi yuan",
          "tone": "yi yuan"
        },
        {
          "stage": "word",
          "vi": "bác sĩ",
          "hanzi": "医生",
          "words": [
            {
              "text": "医生",
              "pinyin": "yi sheng",
              "tone": "yi sheng",
              "pos": "noun",
              "vi": "bác sĩ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "yi sheng",
          "tone": "yi sheng"
        },
        {
          "stage": "word",
          "vi": "nghỉ ngơi",
          "hanzi": "休息",
          "words": [
            {
              "text": "休息",
              "pinyin": "xiu xi",
              "tone": "xiu xi",
              "pos": "verb",
              "vi": "nghỉ ngơi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "xiu xi",
          "tone": "xiu xi"
        },
        {
          "stage": "word",
          "vi": "uống nước",
          "hanzi": "喝水",
          "words": [
            {
              "text": "喝水",
              "pinyin": "he shui",
              "tone": "he shui",
              "pos": "verb",
              "vi": "uống nước"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "he shui",
          "tone": "he shui"
        },
        {
          "stage": "word",
          "vi": "ngủ",
          "hanzi": "睡觉",
          "words": [
            {
              "text": "睡觉",
              "pinyin": "shui jiao",
              "tone": "shui jiao",
              "pos": "verb",
              "vi": "ngủ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "shui jiao",
          "tone": "shui jiao"
        },
        {
          "stage": "word",
          "vi": "khá hơn một chút",
          "hanzi": "好一点",
          "words": [
            {
              "text": "好一点",
              "pinyin": "hao yi dian",
              "tone": "hao yi dian",
              "pos": "adj",
              "vi": "khá hơn một chút"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "hao yi dian",
          "tone": "hao yi dian"
        },
        {
          "stage": "phrase",
          "vi": "cơ thể cảm",
          "hanzi": "身体感冒",
          "words": [
            {
              "text": "身体",
              "pinyin": "shen ti",
              "tone": "shen ti",
              "pos": "noun",
              "vi": "cơ thể"
            },
            {
              "text": "感冒",
              "pinyin": "gan mao",
              "tone": "gan mao",
              "pos": "verb",
              "vi": "cảm"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "shen ti gan mao",
          "tone": "shen ti gan mao"
        },
        {
          "stage": "phrase",
          "vi": "sốt thuốc",
          "hanzi": "发烧药",
          "words": [
            {
              "text": "发烧",
              "pinyin": "fa shao",
              "tone": "fa shao",
              "pos": "verb",
              "vi": "sốt"
            },
            {
              "text": "药",
              "pinyin": "yao",
              "tone": "yao",
              "pos": "noun",
              "vi": "thuốc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "fa shao yao",
          "tone": "fa shao yao"
        },
        {
          "stage": "phrase",
          "vi": "bác sĩ bệnh viện",
          "hanzi": "医院的医生",
          "words": [
            {
              "text": "医院",
              "pinyin": "yi yuan",
              "tone": "yi yuan",
              "pos": "noun",
              "vi": "bệnh viện"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "医生",
              "pinyin": "yi sheng",
              "tone": "yi sheng",
              "pos": "noun",
              "vi": "bác sĩ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "yi yuan de yi sheng",
          "tone": "yi yuan de yi sheng"
        },
        {
          "stage": "phrase",
          "vi": "ngủ khá hơn một chút",
          "hanzi": "睡觉好一点",
          "words": [
            {
              "text": "睡觉",
              "pinyin": "shui jiao",
              "tone": "shui jiao",
              "pos": "verb",
              "vi": "ngủ"
            },
            {
              "text": "好一点",
              "pinyin": "hao yi dian",
              "tone": "hao yi dian",
              "pos": "adj",
              "vi": "khá hơn một chút"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "shui jiao hao yi dian",
          "tone": "shui jiao hao yi dian"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn sốt thuốc.",
          "hanzi": "我想发烧药。",
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
              "text": "发烧",
              "pinyin": "fa shao",
              "tone": "fa shao",
              "pos": "verb",
              "vi": "sốt"
            },
            {
              "text": "药",
              "pinyin": "yao",
              "tone": "yao",
              "pos": "noun",
              "vi": "thuốc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "wo xiang fa shao yao",
          "tone": "wo xiang fa shao yao"
        },
        {
          "stage": "sentence",
          "vi": "cơ thể cảm rất thuốc.",
          "hanzi": "身体感冒很药。",
          "words": [
            {
              "text": "身体",
              "pinyin": "shen ti",
              "tone": "shen ti",
              "pos": "noun",
              "vi": "cơ thể"
            },
            {
              "text": "感冒",
              "pinyin": "gan mao",
              "tone": "gan mao",
              "pos": "verb",
              "vi": "cảm"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "药",
              "pinyin": "yao",
              "tone": "yao",
              "pos": "noun",
              "vi": "thuốc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "shen ti gan mao hen yao",
          "tone": "shen ti gan mao hen yao"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng uống nước bệnh viện.",
          "hanzi": "请喝水医院。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "喝水",
              "pinyin": "he shui",
              "tone": "he shui",
              "pos": "verb",
              "vi": "uống nước"
            },
            {
              "text": "医院",
              "pinyin": "yi yuan",
              "tone": "yi yuan",
              "pos": "noun",
              "vi": "bệnh viện"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "qing he shui yi yuan",
          "tone": "qing he shui yi yuan"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi ngủ khá hơn một chút.",
          "hanzi": "我们睡觉好一点。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "睡觉",
              "pinyin": "shui jiao",
              "tone": "shui jiao",
              "pos": "verb",
              "vi": "ngủ"
            },
            {
              "text": "好一点",
              "pinyin": "hao yi dian",
              "tone": "hao yi dian",
              "pos": "adj",
              "vi": "khá hơn một chút"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "wo men shui jiao hao yi dian",
          "tone": "wo men shui jiao hao yi dian"
        },
        {
          "stage": "mixed",
          "vi": "bác sĩ bệnh viện ở nghỉ ngơi.",
          "hanzi": "医院的医生在休息。",
          "words": [
            {
              "text": "医院",
              "pinyin": "yi yuan",
              "tone": "yi yuan",
              "pos": "noun",
              "vi": "bệnh viện"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "医生",
              "pinyin": "yi sheng",
              "tone": "yi sheng",
              "pos": "noun",
              "vi": "bác sĩ"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "休息",
              "pinyin": "xiu xi",
              "tone": "xiu xi",
              "pos": "verb",
              "vi": "nghỉ ngơi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 9",
          "pinyin": "yi yuan de yi sheng zai xiu xi",
          "tone": "yi yuan de yi sheng zai xiu xi"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi cảm sốt.",
          "hanzi": "我们去感冒发烧。",
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
              "text": "感冒",
              "pinyin": "gan mao",
              "tone": "gan mao",
              "pos": "verb",
              "vi": "cảm"
            },
            {
              "text": "发烧",
              "pinyin": "fa shao",
              "tone": "fa shao",
              "pos": "verb",
              "vi": "sốt"
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
          "vi": "công ty",
          "hanzi": "公司",
          "words": [
            {
              "text": "公司",
              "pinyin": "gong si",
              "tone": "gong si",
              "pos": "noun",
              "vi": "công ty"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "gong si",
          "tone": "gong si"
        },
        {
          "stage": "word",
          "vi": "đồng nghiệp",
          "hanzi": "同事",
          "words": [
            {
              "text": "同事",
              "pinyin": "tong shi",
              "tone": "tong shi",
              "pos": "noun",
              "vi": "đồng nghiệp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "tong shi",
          "tone": "tong shi"
        },
        {
          "stage": "word",
          "vi": "quản lý",
          "hanzi": "经理",
          "words": [
            {
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jing li",
              "pos": "noun",
              "vi": "quản lý"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "jing li",
          "tone": "jing li"
        },
        {
          "stage": "word",
          "vi": "họp",
          "hanzi": "开会",
          "words": [
            {
              "text": "开会",
              "pinyin": "kai hui",
              "tone": "kai hui",
              "pos": "verb",
              "vi": "họp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "kai hui",
          "tone": "kai hui"
        },
        {
          "stage": "word",
          "vi": "tài liệu",
          "hanzi": "文件",
          "words": [
            {
              "text": "文件",
              "pinyin": "wen jian",
              "tone": "wen jian",
              "pos": "noun",
              "vi": "tài liệu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wen jian",
          "tone": "wen jian"
        },
        {
          "stage": "word",
          "vi": "hoàn thành",
          "hanzi": "完成",
          "words": [
            {
              "text": "完成",
              "pinyin": "wan cheng",
              "tone": "wan cheng",
              "pos": "verb",
              "vi": "hoàn thành"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wan cheng",
          "tone": "wan cheng"
        },
        {
          "stage": "word",
          "vi": "bận",
          "hanzi": "忙",
          "words": [
            {
              "text": "忙",
              "pinyin": "mang",
              "tone": "mang",
              "pos": "adj",
              "vi": "bận"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "mang",
          "tone": "mang"
        },
        {
          "stage": "word",
          "vi": "việc",
          "hanzi": "事情",
          "words": [
            {
              "text": "事情",
              "pinyin": "shi qing",
              "tone": "shi qing",
              "pos": "noun",
              "vi": "việc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "shi qing",
          "tone": "shi qing"
        },
        {
          "stage": "word",
          "vi": "điện thoại",
          "hanzi": "电话",
          "words": [
            {
              "text": "电话",
              "pinyin": "dian hua",
              "tone": "dian hua",
              "pos": "noun",
              "vi": "điện thoại"
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
          "vi": "công ty đồng nghiệp",
          "hanzi": "公司同事",
          "words": [
            {
              "text": "公司",
              "pinyin": "gong si",
              "tone": "gong si",
              "pos": "noun",
              "vi": "công ty"
            },
            {
              "text": "同事",
              "pinyin": "tong shi",
              "tone": "tong shi",
              "pos": "noun",
              "vi": "đồng nghiệp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "gong si tong shi",
          "tone": "gong si tong shi"
        },
        {
          "stage": "phrase",
          "vi": "quản lý họp",
          "hanzi": "经理开会",
          "words": [
            {
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jing li",
              "pos": "noun",
              "vi": "quản lý"
            },
            {
              "text": "开会",
              "pinyin": "kai hui",
              "tone": "kai hui",
              "pos": "verb",
              "vi": "họp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "jing li kai hui",
          "tone": "jing li kai hui"
        },
        {
          "stage": "phrase",
          "vi": "hoàn thành tài liệu",
          "hanzi": "文件的完成",
          "words": [
            {
              "text": "文件",
              "pinyin": "wen jian",
              "tone": "wen jian",
              "pos": "noun",
              "vi": "tài liệu"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "完成",
              "pinyin": "wan cheng",
              "tone": "wan cheng",
              "pos": "verb",
              "vi": "hoàn thành"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wen jian de wan cheng",
          "tone": "wen jian de wan cheng"
        },
        {
          "stage": "phrase",
          "vi": "điện thoại email",
          "hanzi": "电话电子邮件",
          "words": [
            {
              "text": "电话",
              "pinyin": "dian hua",
              "tone": "dian hua",
              "pos": "noun",
              "vi": "điện thoại"
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
          "vi": "Tôi muốn quản lý họp.",
          "hanzi": "我想经理开会。",
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
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jing li",
              "pos": "noun",
              "vi": "quản lý"
            },
            {
              "text": "开会",
              "pinyin": "kai hui",
              "tone": "kai hui",
              "pos": "verb",
              "vi": "họp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wo xiang jing li kai hui",
          "tone": "wo xiang jing li kai hui"
        },
        {
          "stage": "sentence",
          "vi": "công ty đồng nghiệp rất họp.",
          "hanzi": "公司同事很开会。",
          "words": [
            {
              "text": "公司",
              "pinyin": "gong si",
              "tone": "gong si",
              "pos": "noun",
              "vi": "công ty"
            },
            {
              "text": "同事",
              "pinyin": "tong shi",
              "tone": "tong shi",
              "pos": "noun",
              "vi": "đồng nghiệp"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "开会",
              "pinyin": "kai hui",
              "tone": "kai hui",
              "pos": "verb",
              "vi": "họp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "gong si tong shi hen kai hui",
          "tone": "gong si tong shi hen kai hui"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng việc tài liệu.",
          "hanzi": "请事情文件。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "事情",
              "pinyin": "shi qing",
              "tone": "shi qing",
              "pos": "noun",
              "vi": "việc"
            },
            {
              "text": "文件",
              "pinyin": "wen jian",
              "tone": "wen jian",
              "pos": "noun",
              "vi": "tài liệu"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "qing shi qing wen jian",
          "tone": "qing shi qing wen jian"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi điện thoại email.",
          "hanzi": "我们电话电子邮件。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "电话",
              "pinyin": "dian hua",
              "tone": "dian hua",
              "pos": "noun",
              "vi": "điện thoại"
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
          "vi": "hoàn thành tài liệu ở bận.",
          "hanzi": "文件的完成在忙。",
          "words": [
            {
              "text": "文件",
              "pinyin": "wen jian",
              "tone": "wen jian",
              "pos": "noun",
              "vi": "tài liệu"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "完成",
              "pinyin": "wan cheng",
              "tone": "wan cheng",
              "pos": "verb",
              "vi": "hoàn thành"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "忙",
              "pinyin": "mang",
              "tone": "mang",
              "pos": "adj",
              "vi": "bận"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 10",
          "pinyin": "wen jian de wan cheng zai mang",
          "tone": "wen jian de wan cheng zai mang"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi đồng nghiệp quản lý.",
          "hanzi": "我们去同事经理。",
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
              "text": "同事",
              "pinyin": "tong shi",
              "tone": "tong shi",
              "pos": "noun",
              "vi": "đồng nghiệp"
            },
            {
              "text": "经理",
              "pinyin": "jing li",
              "tone": "jing li",
              "pos": "noun",
              "vi": "quản lý"
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
