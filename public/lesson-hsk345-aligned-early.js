(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.lessonContent = root.lessonContent || {};
  for (const [level, lessons] of Object.entries(data.levels)) {
    root.lessonContent[level] = root.lessonContent[level] || {};
    for (const lesson of lessons) {
      root.lessonContent[level][lesson.id] = {
        id: lesson.id,
        no: lesson.no,
        title: lesson.titleZh,
        titleZh: lesson.titleZh,
        titleVi: lesson.titleVi,
        items: lesson.items,
      };
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  return {
  "source": "Textbook alignment candidate - needs human PDF/OCR verification",
  "levels": {
    "HSK3": [
      {
        "id": "hsk3-l1",
        "no": 1,
        "titleZh": "周末你有什么打算",
        "titleVi": "Cuối tuần bạn có dự định gì",
        "items": [
          {
            "stage": "word",
            "vi": "cuối tuần",
            "hanzi": "周末",
            "words": [
              {
                "text": "周末",
                "pinyin": "zhou mo",
                "tone": "zhōu mò",
                "pos": "noun",
                "vi": "cuối tuần"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhou mo",
            "tone": "zhōu mò"
          },
          {
            "stage": "word",
            "vi": "dự định, định",
            "hanzi": "打算",
            "words": [
              {
                "text": "打算",
                "pinyin": "da suan",
                "tone": "dǎ suàn",
                "pos": "verb",
                "vi": "dự định, định"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "da suan",
            "tone": "dǎ suàn"
          },
          {
            "stage": "word",
            "vi": "chơi",
            "hanzi": "玩儿",
            "words": [
              {
                "text": "玩儿",
                "pinyin": "wan er",
                "tone": "wán ér",
                "pos": "verb",
                "vi": "chơi"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wan er",
            "tone": "wán ér"
          },
          {
            "stage": "word",
            "vi": "phim",
            "hanzi": "电影",
            "words": [
              {
                "text": "电影",
                "pinyin": "dian ying",
                "tone": "diàn yǐng",
                "pos": "noun",
                "vi": "phim"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dian ying",
            "tone": "diàn yǐng"
          },
          {
            "stage": "word",
            "vi": "đồ uống",
            "hanzi": "饮料",
            "words": [
              {
                "text": "饮料",
                "pinyin": "yin liao",
                "tone": "yǐn liào",
                "pos": "noun",
                "vi": "đồ uống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yin liao",
            "tone": "yǐn liào"
          },
          {
            "stage": "word",
            "vi": "bia",
            "hanzi": "啤酒",
            "words": [
              {
                "text": "啤酒",
                "pinyin": "pi jiu",
                "tone": "pí jiǔ",
                "pos": "noun",
                "vi": "bia"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pi jiu",
            "tone": "pí jiǔ"
          },
          {
            "stage": "word",
            "vi": "tham gia",
            "hanzi": "参加",
            "words": [
              {
                "text": "参加",
                "pinyin": "can jia",
                "tone": "cān jiā",
                "pos": "verb",
                "vi": "tham gia"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "can jia",
            "tone": "cān jiā"
          },
          {
            "stage": "word",
            "vi": "mang theo",
            "hanzi": "带",
            "words": [
              {
                "text": "带",
                "pinyin": "dai",
                "tone": "dài",
                "pos": "verb",
                "vi": "mang theo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dai",
            "tone": "dài"
          },
          {
            "stage": "word",
            "vi": "bài tập",
            "hanzi": "作业",
            "words": [
              {
                "text": "作业",
                "pinyin": "zuo ye",
                "tone": "zuò yè",
                "pos": "noun",
                "vi": "bài tập"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zuo ye",
            "tone": "zuò yè"
          },
          {
            "stage": "word",
            "vi": "ôn tập",
            "hanzi": "复习",
            "words": [
              {
                "text": "复习",
                "pinyin": "fu xi",
                "tone": "fù xí",
                "pos": "verb",
                "vi": "ôn tập"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fu xi",
            "tone": "fù xí"
          },
          {
            "stage": "phrase",
            "vi": "cuối tuần này",
            "hanzi": "这个周末",
            "words": [
              {
                "text": "周末",
                "pinyin": "zhou mo",
                "tone": "zhōu mò",
                "pos": "noun",
                "vi": "cuối tuần"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhou mo",
            "tone": "zhōu mò"
          },
          {
            "stage": "phrase",
            "vi": "có dự định gì",
            "hanzi": "有什么打算",
            "words": [
              {
                "text": "打算",
                "pinyin": "da suan",
                "tone": "dǎ suàn",
                "pos": "verb",
                "vi": "dự định, định"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "da suan",
            "tone": "dǎ suàn"
          },
          {
            "stage": "phrase",
            "vi": "đi xem phim",
            "hanzi": "去看电影",
            "words": [
              {
                "text": "电影",
                "pinyin": "dian ying",
                "tone": "diàn yǐng",
                "pos": "noun",
                "vi": "phim"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dian ying",
            "tone": "diàn yǐng"
          },
          {
            "stage": "phrase",
            "vi": "mang một ít đồ uống",
            "hanzi": "带点儿饮料",
            "words": [
              {
                "text": "带",
                "pinyin": "dai",
                "tone": "dài",
                "pos": "verb",
                "vi": "mang theo"
              },
              {
                "text": "饮料",
                "pinyin": "yin liao",
                "tone": "yǐn liào",
                "pos": "noun",
                "vi": "đồ uống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dai yin liao",
            "tone": "dài yǐn liào"
          },
          {
            "stage": "sentence",
            "vi": "Cuối tuần bạn có dự định gì?",
            "hanzi": "周末你有什么打算",
            "words": [
              {
                "text": "周末",
                "pinyin": "zhou mo",
                "tone": "zhōu mò",
                "pos": "noun",
                "vi": "cuối tuần"
              },
              {
                "text": "打算",
                "pinyin": "da suan",
                "tone": "dǎ suàn",
                "pos": "verb",
                "vi": "dự định, định"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhou mo da suan",
            "tone": "zhōu mò dǎ suàn"
          },
          {
            "stage": "sentence",
            "vi": "Tôi định đi xem phim.",
            "hanzi": "我打算去看电影",
            "words": [
              {
                "text": "打算",
                "pinyin": "da suan",
                "tone": "dǎ suàn",
                "pos": "verb",
                "vi": "dự định, định"
              },
              {
                "text": "电影",
                "pinyin": "dian ying",
                "tone": "diàn yǐng",
                "pos": "noun",
                "vi": "phim"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "da suan dian ying",
            "tone": "dǎ suàn diàn yǐng"
          },
          {
            "stage": "sentence",
            "vi": "Bạn mang một ít đồ uống đến nhé.",
            "hanzi": "你带点儿饮料来吧",
            "words": [
              {
                "text": "带",
                "pinyin": "dai",
                "tone": "dài",
                "pos": "verb",
                "vi": "mang theo"
              },
              {
                "text": "饮料",
                "pinyin": "yin liao",
                "tone": "yǐn liào",
                "pos": "noun",
                "vi": "đồ uống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dai yin liao",
            "tone": "dài yǐn liào"
          },
          {
            "stage": "sentence",
            "vi": "Sau khi làm xong bài tập, tôi ôn tiếng Trung.",
            "hanzi": "我写完作业以后复习汉语",
            "words": [
              {
                "text": "作业",
                "pinyin": "zuo ye",
                "tone": "zuò yè",
                "pos": "noun",
                "vi": "bài tập"
              },
              {
                "text": "复习",
                "pinyin": "fu xi",
                "tone": "fù xí",
                "pos": "verb",
                "vi": "ôn tập"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zuo ye fu xi",
            "tone": "zuò yè fù xí"
          },
          {
            "stage": "mixed",
            "vi": "Cuối tuần này tôi muốn đi xem phim.",
            "hanzi": "我这个周末想去看电影",
            "words": [
              {
                "text": "周末",
                "pinyin": "zhou mo",
                "tone": "zhōu mò",
                "pos": "noun",
                "vi": "cuối tuần"
              },
              {
                "text": "电影",
                "pinyin": "dian ying",
                "tone": "diàn yǐng",
                "pos": "noun",
                "vi": "phim"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhou mo dian ying",
            "tone": "zhōu mò diàn yǐng"
          },
          {
            "stage": "mixed",
            "vi": "Cuối tuần bạn có dự định gì?",
            "hanzi": "你周末有什么打算",
            "words": [
              {
                "text": "周末",
                "pinyin": "zhou mo",
                "tone": "zhōu mò",
                "pos": "noun",
                "vi": "cuối tuần"
              },
              {
                "text": "打算",
                "pinyin": "da suan",
                "tone": "dǎ suàn",
                "pos": "verb",
                "vi": "dự định, định"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhou mo da suan",
            "tone": "zhōu mò dǎ suàn"
          }
        ]
      },
      {
        "id": "hsk3-l2",
        "no": 2,
        "titleZh": "他什么时候回来",
        "titleVi": "Khi nào anh ấy quay về",
        "items": [
          {
            "stage": "word",
            "vi": "lúc, thời điểm",
            "hanzi": "时候",
            "words": [
              {
                "text": "时候",
                "pinyin": "shi hou",
                "tone": "shí hòu",
                "pos": "noun",
                "vi": "lúc, thời điểm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shi hou",
            "tone": "shí hòu"
          },
          {
            "stage": "word",
            "vi": "quay lại, trở về",
            "hanzi": "回来",
            "words": [
              {
                "text": "回来",
                "pinyin": "hui lai",
                "tone": "huí lái",
                "pos": "verb",
                "vi": "quay lại, trở về"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hui lai",
            "tone": "huí lái"
          },
          {
            "stage": "word",
            "vi": "sân bay",
            "hanzi": "机场",
            "words": [
              {
                "text": "机场",
                "pinyin": "ji chang",
                "tone": "jī chǎng",
                "pos": "noun",
                "vi": "sân bay"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji chang",
            "tone": "jī chǎng"
          },
          {
            "stage": "word",
            "vi": "đón",
            "hanzi": "接",
            "words": [
              {
                "text": "接",
                "pinyin": "jie",
                "tone": "jiē",
                "pos": "verb",
                "vi": "đón"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jie",
            "tone": "jiē"
          },
          {
            "stage": "word",
            "vi": "đợi",
            "hanzi": "等",
            "words": [
              {
                "text": "等",
                "pinyin": "deng",
                "tone": "děng",
                "pos": "verb",
                "vi": "đợi"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "deng",
            "tone": "děng"
          },
          {
            "stage": "word",
            "vi": "đến muộn",
            "hanzi": "迟到",
            "words": [
              {
                "text": "迟到",
                "pinyin": "chi dao",
                "tone": "chí dào",
                "pos": "verb",
                "vi": "đến muộn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chi dao",
            "tone": "chí dào"
          },
          {
            "stage": "word",
            "vi": "cuộc họp",
            "hanzi": "会议",
            "words": [
              {
                "text": "会议",
                "pinyin": "hui yi",
                "tone": "huì yì",
                "pos": "noun",
                "vi": "cuộc họp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hui yi",
            "tone": "huì yì"
          },
          {
            "stage": "word",
            "vi": "kết thúc",
            "hanzi": "结束",
            "words": [
              {
                "text": "结束",
                "pinyin": "jie shu",
                "tone": "jié shù",
                "pos": "verb",
                "vi": "kết thúc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jie shu",
            "tone": "jié shù"
          },
          {
            "stage": "word",
            "vi": "vừa nãy",
            "hanzi": "刚才",
            "words": [
              {
                "text": "刚才",
                "pinyin": "gang cai",
                "tone": "gāng cái",
                "pos": "adv",
                "vi": "vừa nãy"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gang cai",
            "tone": "gāng cái"
          },
          {
            "stage": "word",
            "vi": "một lát",
            "hanzi": "一会儿",
            "words": [
              {
                "text": "一会儿",
                "pinyin": "yi hui er",
                "tone": "yí huì er",
                "pos": "noun",
                "vi": "một lát"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yi hui er",
            "tone": "yí huì er"
          },
          {
            "stage": "phrase",
            "vi": "khi nào quay lại",
            "hanzi": "什么时候回来",
            "words": [
              {
                "text": "时候",
                "pinyin": "shi hou",
                "tone": "shí hòu",
                "pos": "noun",
                "vi": "lúc, thời điểm"
              },
              {
                "text": "回来",
                "pinyin": "hui lai",
                "tone": "huí lái",
                "pos": "verb",
                "vi": "quay lại, trở về"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shi hou hui lai",
            "tone": "shí hòu huí lái"
          },
          {
            "stage": "phrase",
            "vi": "đi sân bay đón người",
            "hanzi": "去机场接人",
            "words": [
              {
                "text": "机场",
                "pinyin": "ji chang",
                "tone": "jī chǎng",
                "pos": "noun",
                "vi": "sân bay"
              },
              {
                "text": "接",
                "pinyin": "jie",
                "tone": "jiē",
                "pos": "verb",
                "vi": "đón"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji chang jie",
            "tone": "jī chǎng jiē"
          },
          {
            "stage": "phrase",
            "vi": "sau khi cuộc họp kết thúc",
            "hanzi": "会议结束以后",
            "words": [
              {
                "text": "会议",
                "pinyin": "hui yi",
                "tone": "huì yì",
                "pos": "noun",
                "vi": "cuộc họp"
              },
              {
                "text": "结束",
                "pinyin": "jie shu",
                "tone": "jié shù",
                "pos": "verb",
                "vi": "kết thúc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hui yi jie shu",
            "tone": "huì yì jié shù"
          },
          {
            "stage": "phrase",
            "vi": "đợi một lát",
            "hanzi": "等一会儿",
            "words": [
              {
                "text": "等",
                "pinyin": "deng",
                "tone": "děng",
                "pos": "verb",
                "vi": "đợi"
              },
              {
                "text": "一会儿",
                "pinyin": "yi hui er",
                "tone": "yí huì er",
                "pos": "noun",
                "vi": "một lát"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "deng yi hui er",
            "tone": "děng yí huì er"
          },
          {
            "stage": "sentence",
            "vi": "Khi nào anh ấy quay lại?",
            "hanzi": "他什么时候回来",
            "words": [
              {
                "text": "时候",
                "pinyin": "shi hou",
                "tone": "shí hòu",
                "pos": "noun",
                "vi": "lúc, thời điểm"
              },
              {
                "text": "回来",
                "pinyin": "hui lai",
                "tone": "huí lái",
                "pos": "verb",
                "vi": "quay lại, trở về"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shi hou hui lai",
            "tone": "shí hòu huí lái"
          },
          {
            "stage": "sentence",
            "vi": "Tôi đi sân bay đón anh ấy.",
            "hanzi": "我去机场接他",
            "words": [
              {
                "text": "机场",
                "pinyin": "ji chang",
                "tone": "jī chǎng",
                "pos": "noun",
                "vi": "sân bay"
              },
              {
                "text": "接",
                "pinyin": "jie",
                "tone": "jiē",
                "pos": "verb",
                "vi": "đón"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji chang jie",
            "tone": "jī chǎng jiē"
          },
          {
            "stage": "sentence",
            "vi": "Sau khi cuộc họp kết thúc, anh ấy sẽ quay lại.",
            "hanzi": "会议结束以后他就回来",
            "words": [
              {
                "text": "会议",
                "pinyin": "hui yi",
                "tone": "huì yì",
                "pos": "noun",
                "vi": "cuộc họp"
              },
              {
                "text": "结束",
                "pinyin": "jie shu",
                "tone": "jié shù",
                "pos": "verb",
                "vi": "kết thúc"
              },
              {
                "text": "回来",
                "pinyin": "hui lai",
                "tone": "huí lái",
                "pos": "verb",
                "vi": "quay lại, trở về"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hui yi jie shu hui lai",
            "tone": "huì yì jié shù huí lái"
          },
          {
            "stage": "sentence",
            "vi": "Vừa nãy anh ấy gọi điện cho tôi.",
            "hanzi": "刚才他给我打电话了",
            "words": [
              {
                "text": "刚才",
                "pinyin": "gang cai",
                "tone": "gāng cái",
                "pos": "adv",
                "vi": "vừa nãy"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gang cai",
            "tone": "gāng cái"
          },
          {
            "stage": "mixed",
            "vi": "Khi nào anh ấy quay lại?",
            "hanzi": "他什么时候回来",
            "words": [
              {
                "text": "时候",
                "pinyin": "shi hou",
                "tone": "shí hòu",
                "pos": "noun",
                "vi": "lúc, thời điểm"
              },
              {
                "text": "回来",
                "pinyin": "hui lai",
                "tone": "huí lái",
                "pos": "verb",
                "vi": "quay lại, trở về"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shi hou hui lai",
            "tone": "shí hòu huí lái"
          },
          {
            "stage": "mixed",
            "vi": "Tôi đang đợi bạn ở sân bay.",
            "hanzi": "我在机场等你",
            "words": [
              {
                "text": "机场",
                "pinyin": "ji chang",
                "tone": "jī chǎng",
                "pos": "noun",
                "vi": "sân bay"
              },
              {
                "text": "等",
                "pinyin": "deng",
                "tone": "děng",
                "pos": "verb",
                "vi": "đợi"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji chang deng",
            "tone": "jī chǎng děng"
          }
        ]
      },
      {
        "id": "hsk3-l3",
        "no": 3,
        "titleZh": "桌子上放着很多饮料",
        "titleVi": "Trên bàn có rất nhiều đồ uống",
        "items": [
          {
            "stage": "word",
            "vi": "cái bàn",
            "hanzi": "桌子",
            "words": [
              {
                "text": "桌子",
                "pinyin": "zhuo zi",
                "tone": "zhuō zi",
                "pos": "noun",
                "vi": "cái bàn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuo zi",
            "tone": "zhuō zi"
          },
          {
            "stage": "word",
            "vi": "phía trên, trên",
            "hanzi": "上",
            "words": [
              {
                "text": "上",
                "pinyin": "shang",
                "tone": "shàng",
                "pos": "noun",
                "vi": "phía trên, trên"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shang",
            "tone": "shàng"
          },
          {
            "stage": "word",
            "vi": "đặt, để",
            "hanzi": "放",
            "words": [
              {
                "text": "放",
                "pinyin": "fang",
                "tone": "fàng",
                "pos": "verb",
                "vi": "đặt, để"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fang",
            "tone": "fàng"
          },
          {
            "stage": "word",
            "vi": "trợ từ chỉ trạng thái tiếp diễn",
            "hanzi": "着",
            "words": [
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "particle",
                "vi": "trợ từ chỉ trạng thái tiếp diễn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhe",
            "tone": "zhe"
          },
          {
            "stage": "word",
            "vi": "đồ uống",
            "hanzi": "饮料",
            "words": [
              {
                "text": "饮料",
                "pinyin": "yin liao",
                "tone": "yǐn liào",
                "pos": "noun",
                "vi": "đồ uống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yin liao",
            "tone": "yǐn liào"
          },
          {
            "stage": "word",
            "vi": "cái cốc",
            "hanzi": "杯子",
            "words": [
              {
                "text": "杯子",
                "pinyin": "bei zi",
                "tone": "bēi zi",
                "pos": "noun",
                "vi": "cái cốc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bei zi",
            "tone": "bēi zi"
          },
          {
            "stage": "word",
            "vi": "sữa bò",
            "hanzi": "牛奶",
            "words": [
              {
                "text": "牛奶",
                "pinyin": "niu nai",
                "tone": "niú nǎi",
                "pos": "noun",
                "vi": "sữa bò"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "niu nai",
            "tone": "niú nǎi"
          },
          {
            "stage": "word",
            "vi": "trái cây",
            "hanzi": "水果",
            "words": [
              {
                "text": "水果",
                "pinyin": "shui guo",
                "tone": "shuǐ guǒ",
                "pos": "noun",
                "vi": "trái cây"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shui guo",
            "tone": "shuǐ guǒ"
          },
          {
            "stage": "word",
            "vi": "bên cạnh",
            "hanzi": "旁边",
            "words": [
              {
                "text": "旁边",
                "pinyin": "pang bian",
                "tone": "páng biān",
                "pos": "noun",
                "vi": "bên cạnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pang bian",
            "tone": "páng biān"
          },
          {
            "stage": "word",
            "vi": "sạch sẽ",
            "hanzi": "干净",
            "words": [
              {
                "text": "干净",
                "pinyin": "gan jing",
                "tone": "gān jìng",
                "pos": "adj",
                "vi": "sạch sẽ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gan jing",
            "tone": "gān jìng"
          },
          {
            "stage": "phrase",
            "vi": "trên bàn",
            "hanzi": "桌子上",
            "words": [
              {
                "text": "桌子",
                "pinyin": "zhuo zi",
                "tone": "zhuō zi",
                "pos": "noun",
                "vi": "cái bàn"
              },
              {
                "text": "上",
                "pinyin": "shang",
                "tone": "shàng",
                "pos": "noun",
                "vi": "phía trên, trên"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuo zi shang",
            "tone": "zhuō zi shàng"
          },
          {
            "stage": "phrase",
            "vi": "đang để đồ uống",
            "hanzi": "放着饮料",
            "words": [
              {
                "text": "放",
                "pinyin": "fang",
                "tone": "fàng",
                "pos": "verb",
                "vi": "đặt, để"
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "particle",
                "vi": "trợ từ chỉ trạng thái tiếp diễn"
              },
              {
                "text": "饮料",
                "pinyin": "yin liao",
                "tone": "yǐn liào",
                "pos": "noun",
                "vi": "đồ uống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fang zhe yin liao",
            "tone": "fàng zhe yǐn liào"
          },
          {
            "stage": "phrase",
            "vi": "rất nhiều cốc",
            "hanzi": "很多杯子",
            "words": [
              {
                "text": "杯子",
                "pinyin": "bei zi",
                "tone": "bēi zi",
                "pos": "noun",
                "vi": "cái cốc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bei zi",
            "tone": "bēi zi"
          },
          {
            "stage": "phrase",
            "vi": "ở bên cạnh",
            "hanzi": "在旁边",
            "words": [
              {
                "text": "旁边",
                "pinyin": "pang bian",
                "tone": "páng biān",
                "pos": "noun",
                "vi": "bên cạnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pang bian",
            "tone": "páng biān"
          },
          {
            "stage": "sentence",
            "vi": "Trên bàn có để rất nhiều đồ uống.",
            "hanzi": "桌子上放着很多饮料",
            "words": [
              {
                "text": "桌子",
                "pinyin": "zhuo zi",
                "tone": "zhuō zi",
                "pos": "noun",
                "vi": "cái bàn"
              },
              {
                "text": "上",
                "pinyin": "shang",
                "tone": "shàng",
                "pos": "noun",
                "vi": "phía trên, trên"
              },
              {
                "text": "放",
                "pinyin": "fang",
                "tone": "fàng",
                "pos": "verb",
                "vi": "đặt, để"
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "particle",
                "vi": "trợ từ chỉ trạng thái tiếp diễn"
              },
              {
                "text": "饮料",
                "pinyin": "yin liao",
                "tone": "yǐn liào",
                "pos": "noun",
                "vi": "đồ uống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuo zi shang fang zhe yin liao",
            "tone": "zhuō zi shàng fàng zhe yǐn liào"
          },
          {
            "stage": "sentence",
            "vi": "Cái cốc ở bên cạnh sữa.",
            "hanzi": "杯子在牛奶旁边",
            "words": [
              {
                "text": "杯子",
                "pinyin": "bei zi",
                "tone": "bēi zi",
                "pos": "noun",
                "vi": "cái cốc"
              },
              {
                "text": "牛奶",
                "pinyin": "niu nai",
                "tone": "niú nǎi",
                "pos": "noun",
                "vi": "sữa bò"
              },
              {
                "text": "旁边",
                "pinyin": "pang bian",
                "tone": "páng biān",
                "pos": "noun",
                "vi": "bên cạnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bei zi niu nai pang bian",
            "tone": "bēi zi niú nǎi páng biān"
          },
          {
            "stage": "sentence",
            "vi": "Ở đây có trái cây và đồ uống.",
            "hanzi": "这里有水果和饮料",
            "words": [
              {
                "text": "水果",
                "pinyin": "shui guo",
                "tone": "shuǐ guǒ",
                "pos": "noun",
                "vi": "trái cây"
              },
              {
                "text": "饮料",
                "pinyin": "yin liao",
                "tone": "yǐn liào",
                "pos": "noun",
                "vi": "đồ uống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shui guo yin liao",
            "tone": "shuǐ guǒ yǐn liào"
          },
          {
            "stage": "sentence",
            "vi": "Cái bàn rất sạch.",
            "hanzi": "桌子很干净",
            "words": [
              {
                "text": "桌子",
                "pinyin": "zhuo zi",
                "tone": "zhuō zi",
                "pos": "noun",
                "vi": "cái bàn"
              },
              {
                "text": "干净",
                "pinyin": "gan jing",
                "tone": "gān jìng",
                "pos": "adj",
                "vi": "sạch sẽ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuo zi gan jing",
            "tone": "zhuō zi gān jìng"
          },
          {
            "stage": "mixed",
            "vi": "Trên bàn có để rất nhiều đồ uống.",
            "hanzi": "桌子上放着很多饮料",
            "words": [
              {
                "text": "桌子",
                "pinyin": "zhuo zi",
                "tone": "zhuō zi",
                "pos": "noun",
                "vi": "cái bàn"
              },
              {
                "text": "放",
                "pinyin": "fang",
                "tone": "fàng",
                "pos": "verb",
                "vi": "đặt, để"
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "particle",
                "vi": "trợ từ chỉ trạng thái tiếp diễn"
              },
              {
                "text": "饮料",
                "pinyin": "yin liao",
                "tone": "yǐn liào",
                "pos": "noun",
                "vi": "đồ uống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuo zi fang zhe yin liao",
            "tone": "zhuō zi fàng zhe yǐn liào"
          },
          {
            "stage": "mixed",
            "vi": "Cái cốc ở bên cạnh sữa.",
            "hanzi": "杯子在牛奶旁边",
            "words": [
              {
                "text": "杯子",
                "pinyin": "bei zi",
                "tone": "bēi zi",
                "pos": "noun",
                "vi": "cái cốc"
              },
              {
                "text": "牛奶",
                "pinyin": "niu nai",
                "tone": "niú nǎi",
                "pos": "noun",
                "vi": "sữa bò"
              },
              {
                "text": "旁边",
                "pinyin": "pang bian",
                "tone": "páng biān",
                "pos": "noun",
                "vi": "bên cạnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bei zi niu nai pang bian",
            "tone": "bēi zi niú nǎi páng biān"
          }
        ]
      },
      {
        "id": "hsk3-l4",
        "no": 4,
        "titleZh": "她总是笑着跟客人说话",
        "titleVi": "Cô ấy luôn mỉm cười nói chuyện với khách",
        "items": [
          {
            "stage": "word",
            "vi": "luôn luôn",
            "hanzi": "总是",
            "words": [
              {
                "text": "总是",
                "pinyin": "zong shi",
                "tone": "zǒng shì",
                "pos": "adv",
                "vi": "luôn luôn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zong shi",
            "tone": "zǒng shì"
          },
          {
            "stage": "word",
            "vi": "cười",
            "hanzi": "笑",
            "words": [
              {
                "text": "笑",
                "pinyin": "xiao",
                "tone": "xiào",
                "pos": "verb",
                "vi": "cười"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xiao",
            "tone": "xiào"
          },
          {
            "stage": "word",
            "vi": "trợ từ chỉ trạng thái",
            "hanzi": "着",
            "words": [
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "particle",
                "vi": "trợ từ chỉ trạng thái"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhe",
            "tone": "zhe"
          },
          {
            "stage": "word",
            "vi": "với, cùng",
            "hanzi": "跟",
            "words": [
              {
                "text": "跟",
                "pinyin": "gen",
                "tone": "gēn",
                "pos": "prep",
                "vi": "với, cùng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gen",
            "tone": "gēn"
          },
          {
            "stage": "word",
            "vi": "khách",
            "hanzi": "客人",
            "words": [
              {
                "text": "客人",
                "pinyin": "ke ren",
                "tone": "kè rén",
                "pos": "noun",
                "vi": "khách"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ke ren",
            "tone": "kè rén"
          },
          {
            "stage": "word",
            "vi": "nói chuyện",
            "hanzi": "说话",
            "words": [
              {
                "text": "说话",
                "pinyin": "shuo hua",
                "tone": "shuō huà",
                "pos": "verb",
                "vi": "nói chuyện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shuo hua",
            "tone": "shuō huà"
          },
          {
            "stage": "word",
            "vi": "phục vụ",
            "hanzi": "服务",
            "words": [
              {
                "text": "服务",
                "pinyin": "fu wu",
                "tone": "fú wù",
                "pos": "verb",
                "vi": "phục vụ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fu wu",
            "tone": "fú wù"
          },
          {
            "stage": "word",
            "vi": "nhiệt tình",
            "hanzi": "热情",
            "words": [
              {
                "text": "热情",
                "pinyin": "re qing",
                "tone": "rè qíng",
                "pos": "adj",
                "vi": "nhiệt tình"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "re qing",
            "tone": "rè qíng"
          },
          {
            "stage": "word",
            "vi": "nghiêm túc, cẩn thận",
            "hanzi": "认真",
            "words": [
              {
                "text": "认真",
                "pinyin": "ren zhen",
                "tone": "rèn zhēn",
                "pos": "adj",
                "vi": "nghiêm túc, cẩn thận"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ren zhen",
            "tone": "rèn zhēn"
          },
          {
            "stage": "word",
            "vi": "quản lý, giám đốc",
            "hanzi": "经理",
            "words": [
              {
                "text": "经理",
                "pinyin": "jing li",
                "tone": "jīng lǐ",
                "pos": "noun",
                "vi": "quản lý, giám đốc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jing li",
            "tone": "jīng lǐ"
          },
          {
            "stage": "phrase",
            "vi": "luôn mỉm cười",
            "hanzi": "总是笑着",
            "words": [
              {
                "text": "总是",
                "pinyin": "zong shi",
                "tone": "zǒng shì",
                "pos": "adv",
                "vi": "luôn luôn"
              },
              {
                "text": "笑",
                "pinyin": "xiao",
                "tone": "xiào",
                "pos": "verb",
                "vi": "cười"
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "particle",
                "vi": "trợ từ chỉ trạng thái"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zong shi xiao zhe",
            "tone": "zǒng shì xiào zhe"
          },
          {
            "stage": "phrase",
            "vi": "nói chuyện với khách",
            "hanzi": "跟客人说话",
            "words": [
              {
                "text": "跟",
                "pinyin": "gen",
                "tone": "gēn",
                "pos": "prep",
                "vi": "với, cùng"
              },
              {
                "text": "客人",
                "pinyin": "ke ren",
                "tone": "kè rén",
                "pos": "noun",
                "vi": "khách"
              },
              {
                "text": "说话",
                "pinyin": "shuo hua",
                "tone": "shuō huà",
                "pos": "verb",
                "vi": "nói chuyện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gen ke ren shuo hua",
            "tone": "gēn kè rén shuō huà"
          },
          {
            "stage": "phrase",
            "vi": "phục vụ rất nhiệt tình",
            "hanzi": "服务很热情",
            "words": [
              {
                "text": "服务",
                "pinyin": "fu wu",
                "tone": "fú wù",
                "pos": "verb",
                "vi": "phục vụ"
              },
              {
                "text": "热情",
                "pinyin": "re qing",
                "tone": "rè qíng",
                "pos": "adj",
                "vi": "nhiệt tình"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fu wu re qing",
            "tone": "fú wù rè qíng"
          },
          {
            "stage": "phrase",
            "vi": "làm việc rất nghiêm túc",
            "hanzi": "工作很认真",
            "words": [
              {
                "text": "认真",
                "pinyin": "ren zhen",
                "tone": "rèn zhēn",
                "pos": "adj",
                "vi": "nghiêm túc, cẩn thận"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ren zhen",
            "tone": "rèn zhēn"
          },
          {
            "stage": "sentence",
            "vi": "Cô ấy luôn mỉm cười nói chuyện với khách.",
            "hanzi": "她总是笑着跟客人说话",
            "words": [
              {
                "text": "总是",
                "pinyin": "zong shi",
                "tone": "zǒng shì",
                "pos": "adv",
                "vi": "luôn luôn"
              },
              {
                "text": "笑",
                "pinyin": "xiao",
                "tone": "xiào",
                "pos": "verb",
                "vi": "cười"
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "particle",
                "vi": "trợ từ chỉ trạng thái"
              },
              {
                "text": "跟",
                "pinyin": "gen",
                "tone": "gēn",
                "pos": "prep",
                "vi": "với, cùng"
              },
              {
                "text": "客人",
                "pinyin": "ke ren",
                "tone": "kè rén",
                "pos": "noun",
                "vi": "khách"
              },
              {
                "text": "说话",
                "pinyin": "shuo hua",
                "tone": "shuō huà",
                "pos": "verb",
                "vi": "nói chuyện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zong shi xiao zhe gen ke ren shuo hua",
            "tone": "zǒng shì xiào zhe gēn kè rén shuō huà"
          },
          {
            "stage": "sentence",
            "vi": "Nhân viên phục vụ này rất nhiệt tình.",
            "hanzi": "这个服务员很热情",
            "words": [
              {
                "text": "服务",
                "pinyin": "fu wu",
                "tone": "fú wù",
                "pos": "verb",
                "vi": "phục vụ"
              },
              {
                "text": "热情",
                "pinyin": "re qing",
                "tone": "rè qíng",
                "pos": "adj",
                "vi": "nhiệt tình"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fu wu re qing",
            "tone": "fú wù rè qíng"
          },
          {
            "stage": "sentence",
            "vi": "Quản lý nói cô ấy làm việc rất nghiêm túc.",
            "hanzi": "经理说她工作很认真",
            "words": [
              {
                "text": "经理",
                "pinyin": "jing li",
                "tone": "jīng lǐ",
                "pos": "noun",
                "vi": "quản lý, giám đốc"
              },
              {
                "text": "认真",
                "pinyin": "ren zhen",
                "tone": "rèn zhēn",
                "pos": "adj",
                "vi": "nghiêm túc, cẩn thận"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jing li ren zhen",
            "tone": "jīng lǐ rèn zhēn"
          },
          {
            "stage": "sentence",
            "vi": "Khách thích nói chuyện với cô ấy.",
            "hanzi": "客人喜欢跟她说话",
            "words": [
              {
                "text": "客人",
                "pinyin": "ke ren",
                "tone": "kè rén",
                "pos": "noun",
                "vi": "khách"
              },
              {
                "text": "跟",
                "pinyin": "gen",
                "tone": "gēn",
                "pos": "prep",
                "vi": "với, cùng"
              },
              {
                "text": "说话",
                "pinyin": "shuo hua",
                "tone": "shuō huà",
                "pos": "verb",
                "vi": "nói chuyện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ke ren gen shuo hua",
            "tone": "kè rén gēn shuō huà"
          },
          {
            "stage": "mixed",
            "vi": "Cô ấy luôn mỉm cười nói chuyện với khách.",
            "hanzi": "她总是笑着跟客人说话",
            "words": [
              {
                "text": "总是",
                "pinyin": "zong shi",
                "tone": "zǒng shì",
                "pos": "adv",
                "vi": "luôn luôn"
              },
              {
                "text": "笑",
                "pinyin": "xiao",
                "tone": "xiào",
                "pos": "verb",
                "vi": "cười"
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "particle",
                "vi": "trợ từ chỉ trạng thái"
              },
              {
                "text": "客人",
                "pinyin": "ke ren",
                "tone": "kè rén",
                "pos": "noun",
                "vi": "khách"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zong shi xiao zhe ke ren",
            "tone": "zǒng shì xiào zhe kè rén"
          },
          {
            "stage": "mixed",
            "vi": "vừa cười vừa nói chuyện",
            "hanzi": "笑着说话",
            "words": [
              {
                "text": "笑",
                "pinyin": "xiao",
                "tone": "xiào",
                "pos": "verb",
                "vi": "cười"
              },
              {
                "text": "着",
                "pinyin": "zhe",
                "tone": "zhe",
                "pos": "particle",
                "vi": "trợ từ chỉ trạng thái"
              },
              {
                "text": "说话",
                "pinyin": "shuo hua",
                "tone": "shuō huà",
                "pos": "verb",
                "vi": "nói chuyện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xiao zhe shuo hua",
            "tone": "xiào zhe shuō huà"
          }
        ]
      },
      {
        "id": "hsk3-l5",
        "no": 5,
        "titleZh": "我最近越来越胖了",
        "titleVi": "Dạo này tôi ngày càng béo hơn",
        "items": [
          {
            "stage": "word",
            "vi": "gần đây, dạo này",
            "hanzi": "最近",
            "words": [
              {
                "text": "最近",
                "pinyin": "zui jin",
                "tone": "zuì jìn",
                "pos": "adv",
                "vi": "gần đây, dạo này"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zui jin",
            "tone": "zuì jìn"
          },
          {
            "stage": "word",
            "vi": "càng ngày càng",
            "hanzi": "越来越",
            "words": [
              {
                "text": "越来越",
                "pinyin": "yue lai yue",
                "tone": "yuè lái yuè",
                "pos": "adv",
                "vi": "càng ngày càng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yue lai yue",
            "tone": "yuè lái yuè"
          },
          {
            "stage": "word",
            "vi": "béo, mập",
            "hanzi": "胖",
            "words": [
              {
                "text": "胖",
                "pinyin": "pang",
                "tone": "pàng",
                "pos": "adj",
                "vi": "béo, mập"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pang",
            "tone": "pàng"
          },
          {
            "stage": "word",
            "vi": "vận động, tập thể thao",
            "hanzi": "运动",
            "words": [
              {
                "text": "运动",
                "pinyin": "yun dong",
                "tone": "yùn dòng",
                "pos": "verb",
                "vi": "vận động, tập thể thao"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yun dong",
            "tone": "yùn dòng"
          },
          {
            "stage": "word",
            "vi": "rèn luyện, tập luyện",
            "hanzi": "锻炼",
            "words": [
              {
                "text": "锻炼",
                "pinyin": "duan lian",
                "tone": "duàn liàn",
                "pos": "verb",
                "vi": "rèn luyện, tập luyện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "duan lian",
            "tone": "duàn liàn"
          },
          {
            "stage": "word",
            "vi": "khỏe mạnh",
            "hanzi": "健康",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jian kang",
            "tone": "jiàn kāng"
          },
          {
            "stage": "word",
            "vi": "ngọt",
            "hanzi": "甜",
            "words": [
              {
                "text": "甜",
                "pinyin": "tian",
                "tone": "tián",
                "pos": "adj",
                "vi": "ngọt"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tian",
            "tone": "tián"
          },
          {
            "stage": "word",
            "vi": "gầy",
            "hanzi": "瘦",
            "words": [
              {
                "text": "瘦",
                "pinyin": "shou",
                "tone": "shòu",
                "pos": "adj",
                "vi": "gầy"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shou",
            "tone": "shòu"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xi guan",
            "tone": "xí guàn"
          },
          {
            "stage": "word",
            "vi": "cơm",
            "hanzi": "米饭",
            "words": [
              {
                "text": "米饭",
                "pinyin": "mi fan",
                "tone": "mǐ fàn",
                "pos": "noun",
                "vi": "cơm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mi fan",
            "tone": "mǐ fàn"
          },
          {
            "stage": "phrase",
            "vi": "dạo này rất bận",
            "hanzi": "最近很忙",
            "words": [
              {
                "text": "最近",
                "pinyin": "zui jin",
                "tone": "zuì jìn",
                "pos": "adv",
                "vi": "gần đây, dạo này"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zui jin",
            "tone": "zuì jìn"
          },
          {
            "stage": "phrase",
            "vi": "càng ngày càng béo",
            "hanzi": "越来越胖",
            "words": [
              {
                "text": "越来越",
                "pinyin": "yue lai yue",
                "tone": "yuè lái yuè",
                "pos": "adv",
                "vi": "càng ngày càng"
              },
              {
                "text": "胖",
                "pinyin": "pang",
                "tone": "pàng",
                "pos": "adj",
                "vi": "béo, mập"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yue lai yue pang",
            "tone": "yuè lái yuè pàng"
          },
          {
            "stage": "phrase",
            "vi": "vận động nhiều hơn",
            "hanzi": "多运动",
            "words": [
              {
                "text": "运动",
                "pinyin": "yun dong",
                "tone": "yùn dòng",
                "pos": "verb",
                "vi": "vận động, tập thể thao"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yun dong",
            "tone": "yùn dòng"
          },
          {
            "stage": "phrase",
            "vi": "thói quen lành mạnh",
            "hanzi": "健康的习惯",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              },
              {
                "text": "习惯",
                "pinyin": "xi guan",
                "tone": "xí guàn",
                "pos": "noun",
                "vi": "thói quen"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jian kang xi guan",
            "tone": "jiàn kāng xí guàn"
          },
          {
            "stage": "sentence",
            "vi": "Dạo này tôi càng ngày càng béo.",
            "hanzi": "我最近越来越胖了",
            "words": [
              {
                "text": "最近",
                "pinyin": "zui jin",
                "tone": "zuì jìn",
                "pos": "adv",
                "vi": "gần đây, dạo này"
              },
              {
                "text": "越来越",
                "pinyin": "yue lai yue",
                "tone": "yuè lái yuè",
                "pos": "adv",
                "vi": "càng ngày càng"
              },
              {
                "text": "胖",
                "pinyin": "pang",
                "tone": "pàng",
                "pos": "adj",
                "vi": "béo, mập"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zui jin yue lai yue pang",
            "tone": "zuì jìn yuè lái yuè pàng"
          },
          {
            "stage": "sentence",
            "vi": "Bạn nên vận động nhiều hơn.",
            "hanzi": "你应该多运动",
            "words": [
              {
                "text": "运动",
                "pinyin": "yun dong",
                "tone": "yùn dòng",
                "pos": "verb",
                "vi": "vận động, tập thể thao"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yun dong",
            "tone": "yùn dòng"
          },
          {
            "stage": "sentence",
            "vi": "Buổi tối tôi không muốn ăn quá nhiều cơm.",
            "hanzi": "我晚上不想吃太多米饭",
            "words": [
              {
                "text": "米饭",
                "pinyin": "mi fan",
                "tone": "mǐ fàn",
                "pos": "noun",
                "vi": "cơm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mi fan",
            "tone": "mǐ fàn"
          },
          {
            "stage": "sentence",
            "vi": "Thói quen lành mạnh rất quan trọng.",
            "hanzi": "健康的习惯很重要",
            "words": [
              {
                "text": "健康",
                "pinyin": "jian kang",
                "tone": "jiàn kāng",
                "pos": "adj",
                "vi": "khỏe mạnh"
              },
              {
                "text": "习惯",
                "pinyin": "xi guan",
                "tone": "xí guàn",
                "pos": "noun",
                "vi": "thói quen"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jian kang xi guan",
            "tone": "jiàn kāng xí guàn"
          },
          {
            "stage": "mixed",
            "vi": "Dạo này tôi càng ngày càng béo.",
            "hanzi": "我最近越来越胖了",
            "words": [
              {
                "text": "最近",
                "pinyin": "zui jin",
                "tone": "zuì jìn",
                "pos": "adv",
                "vi": "gần đây, dạo này"
              },
              {
                "text": "越来越",
                "pinyin": "yue lai yue",
                "tone": "yuè lái yuè",
                "pos": "adv",
                "vi": "càng ngày càng"
              },
              {
                "text": "胖",
                "pinyin": "pang",
                "tone": "pàng",
                "pos": "adj",
                "vi": "béo, mập"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zui jin yue lai yue pang",
            "tone": "zuì jìn yuè lái yuè pàng"
          },
          {
            "stage": "mixed",
            "vi": "Bạn nên vận động nhiều hơn.",
            "hanzi": "你应该多运动",
            "words": [
              {
                "text": "运动",
                "pinyin": "yun dong",
                "tone": "yùn dòng",
                "pos": "verb",
                "vi": "vận động, tập thể thao"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yun dong",
            "tone": "yùn dòng"
          }
        ]
      }
    ],
    "HSK4": [
      {
        "id": "hsk4-l1",
        "no": 1,
        "titleZh": "简单的爱情",
        "titleVi": "Tình yêu giản dị",
        "items": [
          {
            "stage": "word",
            "vi": "đơn giản",
            "hanzi": "简单",
            "words": [
              {
                "text": "简单",
                "pinyin": "jian dan",
                "tone": "jiǎn dān",
                "pos": "adj",
                "vi": "đơn giản"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jian dan",
            "tone": "jiǎn dān"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ai qing",
            "tone": "ài qíng"
          },
          {
            "stage": "word",
            "vi": "lãng mạn",
            "hanzi": "浪漫",
            "words": [
              {
                "text": "浪漫",
                "pinyin": "lang man",
                "tone": "làng màn",
                "pos": "adj",
                "vi": "lãng mạn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lang man",
            "tone": "làng màn"
          },
          {
            "stage": "word",
            "vi": "cảm động, làm cảm động",
            "hanzi": "感动",
            "words": [
              {
                "text": "感动",
                "pinyin": "gan dong",
                "tone": "gǎn dòng",
                "pos": "verb",
                "vi": "cảm động, làm cảm động"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gan dong",
            "tone": "gǎn dòng"
          },
          {
            "stage": "word",
            "vi": "bày tỏ, biểu thị",
            "hanzi": "表示",
            "words": [
              {
                "text": "表示",
                "pinyin": "biao shi",
                "tone": "biǎo shì",
                "pos": "verb",
                "vi": "bày tỏ, biểu thị"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biao shi",
            "tone": "biǎo shì"
          },
          {
            "stage": "word",
            "vi": "ở bên, đi cùng",
            "hanzi": "陪",
            "words": [
              {
                "text": "陪",
                "pinyin": "pei",
                "tone": "péi",
                "pos": "verb",
                "vi": "ở bên, đi cùng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pei",
            "tone": "péi"
          },
          {
            "stage": "word",
            "vi": "quan tâm",
            "hanzi": "关心",
            "words": [
              {
                "text": "关心",
                "pinyin": "guan xin",
                "tone": "guān xīn",
                "pos": "verb",
                "vi": "quan tâm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "guan xin",
            "tone": "guān xīn"
          },
          {
            "stage": "word",
            "vi": "tin tưởng",
            "hanzi": "信任",
            "words": [
              {
                "text": "信任",
                "pinyin": "xin ren",
                "tone": "xìn rèn",
                "pos": "verb",
                "vi": "tin tưởng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xin ren",
            "tone": "xìn rèn"
          },
          {
            "stage": "word",
            "vi": "chung, cùng nhau",
            "hanzi": "共同",
            "words": [
              {
                "text": "共同",
                "pinyin": "gong tong",
                "tone": "gòng tóng",
                "pos": "adj",
                "vi": "chung, cùng nhau"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gong tong",
            "tone": "gòng tóng"
          },
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xing fu",
            "tone": "xìng fú"
          },
          {
            "stage": "phrase",
            "vi": "tình yêu giản dị",
            "hanzi": "简单的爱情",
            "words": [
              {
                "text": "简单",
                "pinyin": "jian dan",
                "tone": "jiǎn dān",
                "pos": "adj",
                "vi": "đơn giản"
              },
              {
                "text": "爱情",
                "pinyin": "ai qing",
                "tone": "ài qíng",
                "pos": "noun",
                "vi": "tình yêu"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jian dan ai qing",
            "tone": "jiǎn dān ài qíng"
          },
          {
            "stage": "phrase",
            "vi": "bày tỏ sự quan tâm",
            "hanzi": "表示关心",
            "words": [
              {
                "text": "表示",
                "pinyin": "biao shi",
                "tone": "biǎo shì",
                "pos": "verb",
                "vi": "bày tỏ, biểu thị"
              },
              {
                "text": "关心",
                "pinyin": "guan xin",
                "tone": "guān xīn",
                "pos": "verb",
                "vi": "quan tâm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biao shi guan xin",
            "tone": "biǎo shì guān xīn"
          },
          {
            "stage": "phrase",
            "vi": "ở bên anh ấy",
            "hanzi": "陪他一起",
            "words": [
              {
                "text": "陪",
                "pinyin": "pei",
                "tone": "péi",
                "pos": "verb",
                "vi": "ở bên, đi cùng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pei",
            "tone": "péi"
          },
          {
            "stage": "phrase",
            "vi": "tin tưởng lẫn nhau",
            "hanzi": "互相信任",
            "words": [
              {
                "text": "信任",
                "pinyin": "xin ren",
                "tone": "xìn rèn",
                "pos": "verb",
                "vi": "tin tưởng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xin ren",
            "tone": "xìn rèn"
          },
          {
            "stage": "phrase",
            "vi": "cùng nhau sống",
            "hanzi": "共同生活",
            "words": [
              {
                "text": "共同",
                "pinyin": "gong tong",
                "tone": "gòng tóng",
                "pos": "adj",
                "vi": "chung, cùng nhau"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gong tong",
            "tone": "gòng tóng"
          },
          {
            "stage": "sentence",
            "vi": "Tình yêu có thể rất giản dị.",
            "hanzi": "爱情可以很简单",
            "words": [
              {
                "text": "爱情",
                "pinyin": "ai qing",
                "tone": "ài qíng",
                "pos": "noun",
                "vi": "tình yêu"
              },
              {
                "text": "简单",
                "pinyin": "jian dan",
                "tone": "jiǎn dān",
                "pos": "adj",
                "vi": "đơn giản"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ai qing jian dan",
            "tone": "ài qíng jiǎn dān"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy quan tâm cô ấy mỗi ngày.",
            "hanzi": "他每天都关心她",
            "words": [
              {
                "text": "关心",
                "pinyin": "guan xin",
                "tone": "guān xīn",
                "pos": "verb",
                "vi": "quan tâm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "guan xin",
            "tone": "guān xīn"
          },
          {
            "stage": "sentence",
            "vi": "Tình yêu thật sự cần sự tin tưởng.",
            "hanzi": "真正的爱情需要信任",
            "words": [
              {
                "text": "爱情",
                "pinyin": "ai qing",
                "tone": "ài qíng",
                "pos": "noun",
                "vi": "tình yêu"
              },
              {
                "text": "信任",
                "pinyin": "xin ren",
                "tone": "xìn rèn",
                "pos": "verb",
                "vi": "tin tưởng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ai qing xin ren",
            "tone": "ài qíng xìn rèn"
          },
          {
            "stage": "sentence",
            "vi": "Họ cùng nhau đối mặt với những vấn đề trong cuộc sống.",
            "hanzi": "他们一起面对生活中的问题",
            "words": [
              {
                "text": "共同",
                "pinyin": "gong tong",
                "tone": "gòng tóng",
                "pos": "adj",
                "vi": "chung, cùng nhau"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gong tong",
            "tone": "gòng tóng"
          },
          {
            "stage": "mixed",
            "vi": "Tình yêu có thể rất giản dị.",
            "hanzi": "爱情可以很简单",
            "words": [
              {
                "text": "爱情",
                "pinyin": "ai qing",
                "tone": "ài qíng",
                "pos": "noun",
                "vi": "tình yêu"
              },
              {
                "text": "简单",
                "pinyin": "jian dan",
                "tone": "jiǎn dān",
                "pos": "adj",
                "vi": "đơn giản"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ai qing jian dan",
            "tone": "ài qíng jiǎn dān"
          }
        ]
      },
      {
        "id": "hsk4-l2",
        "no": 2,
        "titleZh": "真正的朋友",
        "titleVi": "Người bạn thật sự",
        "items": [
          {
            "stage": "word",
            "vi": "thật sự",
            "hanzi": "真正",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhen zheng",
                "tone": "zhēn zhèng",
                "pos": "adj",
                "vi": "thật sự"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhen zheng",
            "tone": "zhēn zhèng"
          },
          {
            "stage": "word",
            "vi": "bạn bè",
            "hanzi": "朋友",
            "words": [
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "peng you",
            "tone": "péng yǒu"
          },
          {
            "stage": "word",
            "vi": "giúp đỡ",
            "hanzi": "帮助",
            "words": [
              {
                "text": "帮助",
                "pinyin": "bang zhu",
                "tone": "bāng zhù",
                "pos": "verb",
                "vi": "giúp đỡ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bang zhu",
            "tone": "bāng zhù"
          },
          {
            "stage": "word",
            "vi": "thành thật",
            "hanzi": "诚实",
            "words": [
              {
                "text": "诚实",
                "pinyin": "cheng shi",
                "tone": "chéng shí",
                "pos": "adj",
                "vi": "thành thật"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "cheng shi",
            "tone": "chéng shí"
          },
          {
            "stage": "word",
            "vi": "hiểu, thông cảm",
            "hanzi": "理解",
            "words": [
              {
                "text": "理解",
                "pinyin": "li jie",
                "tone": "lǐ jiě",
                "pos": "verb",
                "vi": "hiểu, thông cảm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "li jie",
            "tone": "lǐ jiě"
          },
          {
            "stage": "word",
            "vi": "động viên",
            "hanzi": "鼓励",
            "words": [
              {
                "text": "鼓励",
                "pinyin": "gu li",
                "tone": "gǔ lì",
                "pos": "verb",
                "vi": "động viên"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gu li",
            "tone": "gǔ lì"
          },
          {
            "stage": "word",
            "vi": "khó khăn",
            "hanzi": "困难",
            "words": [
              {
                "text": "困难",
                "pinyin": "kun nan",
                "tone": "kùn nán",
                "pos": "noun",
                "vi": "khó khăn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "kun nan",
            "tone": "kùn nán"
          },
          {
            "stage": "word",
            "vi": "chia sẻ",
            "hanzi": "分享",
            "words": [
              {
                "text": "分享",
                "pinyin": "fen xiang",
                "tone": "fēn xiǎng",
                "pos": "verb",
                "vi": "chia sẻ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fen xiang",
            "tone": "fēn xiǎng"
          },
          {
            "stage": "word",
            "vi": "liên lạc",
            "hanzi": "联系",
            "words": [
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lian xi",
            "tone": "lián xì"
          },
          {
            "stage": "word",
            "vi": "tình bạn",
            "hanzi": "友谊",
            "words": [
              {
                "text": "友谊",
                "pinyin": "you yi",
                "tone": "yǒu yì",
                "pos": "noun",
                "vi": "tình bạn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "you yi",
            "tone": "yǒu yì"
          },
          {
            "stage": "phrase",
            "vi": "người bạn thật sự",
            "hanzi": "真正的朋友",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhen zheng",
                "tone": "zhēn zhèng",
                "pos": "adj",
                "vi": "thật sự"
              },
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhen zheng peng you",
            "tone": "zhēn zhèng péng yǒu"
          },
          {
            "stage": "phrase",
            "vi": "giúp đỡ lẫn nhau",
            "hanzi": "互相帮助",
            "words": [
              {
                "text": "帮助",
                "pinyin": "bang zhu",
                "tone": "bāng zhù",
                "pos": "verb",
                "vi": "giúp đỡ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bang zhu",
            "tone": "bāng zhù"
          },
          {
            "stage": "phrase",
            "vi": "gặp khó khăn",
            "hanzi": "遇到困难",
            "words": [
              {
                "text": "困难",
                "pinyin": "kun nan",
                "tone": "kùn nán",
                "pos": "noun",
                "vi": "khó khăn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "kun nan",
            "tone": "kùn nán"
          },
          {
            "stage": "phrase",
            "vi": "chia sẻ niềm vui",
            "hanzi": "分享快乐",
            "words": [
              {
                "text": "分享",
                "pinyin": "fen xiang",
                "tone": "fēn xiǎng",
                "pos": "verb",
                "vi": "chia sẻ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fen xiang",
            "tone": "fēn xiǎng"
          },
          {
            "stage": "phrase",
            "vi": "giữ liên lạc",
            "hanzi": "保持联系",
            "words": [
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lian xi",
            "tone": "lián xì"
          },
          {
            "stage": "sentence",
            "vi": "Người bạn thật sự sẽ giúp đỡ lẫn nhau.",
            "hanzi": "真正的朋友会互相帮助",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhen zheng",
                "tone": "zhēn zhèng",
                "pos": "adj",
                "vi": "thật sự"
              },
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              },
              {
                "text": "帮助",
                "pinyin": "bang zhu",
                "tone": "bāng zhù",
                "pos": "verb",
                "vi": "giúp đỡ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhen zheng peng you bang zhu",
            "tone": "zhēn zhèng péng yǒu bāng zhù"
          },
          {
            "stage": "sentence",
            "vi": "Giữa bạn bè nên thành thật.",
            "hanzi": "朋友之间应该诚实",
            "words": [
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              },
              {
                "text": "诚实",
                "pinyin": "cheng shi",
                "tone": "chéng shí",
                "pos": "adj",
                "vi": "thành thật"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "peng you cheng shi",
            "tone": "péng yǒu chéng shí"
          },
          {
            "stage": "sentence",
            "vi": "Khi anh ấy gặp khó khăn, tôi đã động viên anh ấy.",
            "hanzi": "他遇到困难时我鼓励了他",
            "words": [
              {
                "text": "困难",
                "pinyin": "kun nan",
                "tone": "kùn nán",
                "pos": "noun",
                "vi": "khó khăn"
              },
              {
                "text": "鼓励",
                "pinyin": "gu li",
                "tone": "gǔ lì",
                "pos": "verb",
                "vi": "động viên"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "kun nan gu li",
            "tone": "kùn nán gǔ lì"
          },
          {
            "stage": "sentence",
            "vi": "Dù rất bận, chúng tôi vẫn thường xuyên liên lạc.",
            "hanzi": "即使很忙我们也经常联系",
            "words": [
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lian xi",
            "tone": "lián xì"
          },
          {
            "stage": "mixed",
            "vi": "Người bạn thật sự sẽ giúp đỡ lẫn nhau.",
            "hanzi": "真正的朋友会互相帮助",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhen zheng",
                "tone": "zhēn zhèng",
                "pos": "adj",
                "vi": "thật sự"
              },
              {
                "text": "朋友",
                "pinyin": "peng you",
                "tone": "péng yǒu",
                "pos": "noun",
                "vi": "bạn bè"
              },
              {
                "text": "帮助",
                "pinyin": "bang zhu",
                "tone": "bāng zhù",
                "pos": "verb",
                "vi": "giúp đỡ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhen zheng peng you bang zhu",
            "tone": "zhēn zhèng péng yǒu bāng zhù"
          }
        ]
      },
      {
        "id": "hsk4-l3",
        "no": 3,
        "titleZh": "经理对我印象不错",
        "titleVi": "Người quản lý có ấn tượng tốt với tôi",
        "items": [
          {
            "stage": "word",
            "vi": "quản lý, giám đốc",
            "hanzi": "经理",
            "words": [
              {
                "text": "经理",
                "pinyin": "jing li",
                "tone": "jīng lǐ",
                "pos": "noun",
                "vi": "quản lý, giám đốc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jing li",
            "tone": "jīng lǐ"
          },
          {
            "stage": "word",
            "vi": "ấn tượng",
            "hanzi": "印象",
            "words": [
              {
                "text": "印象",
                "pinyin": "yin xiang",
                "tone": "yìn xiàng",
                "pos": "noun",
                "vi": "ấn tượng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yin xiang",
            "tone": "yìn xiàng"
          },
          {
            "stage": "word",
            "vi": "phỏng vấn",
            "hanzi": "面试",
            "words": [
              {
                "text": "面试",
                "pinyin": "mian shi",
                "tone": "miàn shì",
                "pos": "noun",
                "vi": "phỏng vấn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mian shi",
            "tone": "miàn shì"
          },
          {
            "stage": "word",
            "vi": "căng thẳng",
            "hanzi": "紧张",
            "words": [
              {
                "text": "紧张",
                "pinyin": "jin zhang",
                "tone": "jǐn zhāng",
                "pos": "adj",
                "vi": "căng thẳng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jin zhang",
            "tone": "jǐn zhāng"
          },
          {
            "stage": "word",
            "vi": "chuẩn bị",
            "hanzi": "准备",
            "words": [
              {
                "text": "准备",
                "pinyin": "zhun bei",
                "tone": "zhǔn bèi",
                "pos": "verb",
                "vi": "chuẩn bị"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhun bei",
            "tone": "zhǔn bèi"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
          },
          {
            "stage": "word",
            "vi": "phụ trách, có trách nhiệm",
            "hanzi": "负责",
            "words": [
              {
                "text": "负责",
                "pinyin": "fu ze",
                "tone": "fù zé",
                "pos": "verb",
                "vi": "phụ trách, có trách nhiệm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fu ze",
            "tone": "fù zé"
          },
          {
            "stage": "word",
            "vi": "năng lực",
            "hanzi": "能力",
            "words": [
              {
                "text": "能力",
                "pinyin": "neng li",
                "tone": "néng lì",
                "pos": "noun",
                "vi": "năng lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "neng li",
            "tone": "néng lì"
          },
          {
            "stage": "word",
            "vi": "biểu hiện, thể hiện",
            "hanzi": "表现",
            "words": [
              {
                "text": "表现",
                "pinyin": "biao xian",
                "tone": "biǎo xiàn",
                "pos": "noun",
                "vi": "biểu hiện, thể hiện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biao xian",
            "tone": "biǎo xiàn"
          },
          {
            "stage": "word",
            "vi": "cơ hội",
            "hanzi": "机会",
            "words": [
              {
                "text": "机会",
                "pinyin": "ji hui",
                "tone": "jī huì",
                "pos": "noun",
                "vi": "cơ hội"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji hui",
            "tone": "jī huì"
          },
          {
            "stage": "phrase",
            "vi": "để lại ấn tượng",
            "hanzi": "留下印象",
            "words": [
              {
                "text": "印象",
                "pinyin": "yin xiang",
                "tone": "yìn xiàng",
                "pos": "noun",
                "vi": "ấn tượng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yin xiang",
            "tone": "yìn xiàng"
          },
          {
            "stage": "phrase",
            "vi": "chuẩn bị phỏng vấn",
            "hanzi": "准备面试",
            "words": [
              {
                "text": "准备",
                "pinyin": "zhun bei",
                "tone": "zhǔn bèi",
                "pos": "verb",
                "vi": "chuẩn bị"
              },
              {
                "text": "面试",
                "pinyin": "mian shi",
                "tone": "miàn shì",
                "pos": "noun",
                "vi": "phỏng vấn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhun bei mian shi",
            "tone": "zhǔn bèi miàn shì"
          },
          {
            "stage": "phrase",
            "vi": "kinh nghiệm làm việc",
            "hanzi": "工作经验",
            "words": [
              {
                "text": "经验",
                "pinyin": "jing yan",
                "tone": "jīng yàn",
                "pos": "noun",
                "vi": "kinh nghiệm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
          },
          {
            "stage": "phrase",
            "vi": "nghiêm túc và có trách nhiệm",
            "hanzi": "认真负责",
            "words": [
              {
                "text": "负责",
                "pinyin": "fu ze",
                "tone": "fù zé",
                "pos": "verb",
                "vi": "phụ trách, có trách nhiệm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fu ze",
            "tone": "fù zé"
          },
          {
            "stage": "phrase",
            "vi": "thể hiện khá tốt",
            "hanzi": "表现不错",
            "words": [
              {
                "text": "表现",
                "pinyin": "biao xian",
                "tone": "biǎo xiàn",
                "pos": "noun",
                "vi": "biểu hiện, thể hiện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biao xian",
            "tone": "biǎo xiàn"
          },
          {
            "stage": "sentence",
            "vi": "Người quản lý có ấn tượng tốt với tôi.",
            "hanzi": "经理对我的印象不错",
            "words": [
              {
                "text": "经理",
                "pinyin": "jing li",
                "tone": "jīng lǐ",
                "pos": "noun",
                "vi": "quản lý, giám đốc"
              },
              {
                "text": "印象",
                "pinyin": "yin xiang",
                "tone": "yìn xiàng",
                "pos": "noun",
                "vi": "ấn tượng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jing li yin xiang",
            "tone": "jīng lǐ yìn xiàng"
          },
          {
            "stage": "sentence",
            "vi": "Trước buổi phỏng vấn tôi hơi căng thẳng.",
            "hanzi": "面试前我有点儿紧张",
            "words": [
              {
                "text": "面试",
                "pinyin": "mian shi",
                "tone": "miàn shì",
                "pos": "noun",
                "vi": "phỏng vấn"
              },
              {
                "text": "紧张",
                "pinyin": "jin zhang",
                "tone": "jǐn zhāng",
                "pos": "adj",
                "vi": "căng thẳng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mian shi jin zhang",
            "tone": "miàn shì jǐn zhāng"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy làm việc nghiêm túc và rất có trách nhiệm.",
            "hanzi": "他工作认真也很负责",
            "words": [
              {
                "text": "负责",
                "pinyin": "fu ze",
                "tone": "fù zé",
                "pos": "verb",
                "vi": "phụ trách, có trách nhiệm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fu ze",
            "tone": "fù zé"
          },
          {
            "stage": "sentence",
            "vi": "Buổi phỏng vấn lần này cho tôi một cơ hội tốt.",
            "hanzi": "这次面试给了我一个好机会",
            "words": [
              {
                "text": "面试",
                "pinyin": "mian shi",
                "tone": "miàn shì",
                "pos": "noun",
                "vi": "phỏng vấn"
              },
              {
                "text": "机会",
                "pinyin": "ji hui",
                "tone": "jī huì",
                "pos": "noun",
                "vi": "cơ hội"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mian shi ji hui",
            "tone": "miàn shì jī huì"
          },
          {
            "stage": "mixed",
            "vi": "Người quản lý có ấn tượng tốt với tôi.",
            "hanzi": "经理对我的印象不错",
            "words": [
              {
                "text": "经理",
                "pinyin": "jing li",
                "tone": "jīng lǐ",
                "pos": "noun",
                "vi": "quản lý, giám đốc"
              },
              {
                "text": "印象",
                "pinyin": "yin xiang",
                "tone": "yìn xiàng",
                "pos": "noun",
                "vi": "ấn tượng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jing li yin xiang",
            "tone": "jīng lǐ yìn xiàng"
          }
        ]
      },
      {
        "id": "hsk4-l4",
        "no": 4,
        "titleZh": "不要太着急赚钱",
        "titleVi": "Đừng quá vội kiếm tiền",
        "items": [
          {
            "stage": "word",
            "vi": "sốt ruột, vội vàng",
            "hanzi": "着急",
            "words": [
              {
                "text": "着急",
                "pinyin": "zhao ji",
                "tone": "zháo jí",
                "pos": "adj",
                "vi": "sốt ruột, vội vàng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhao ji",
            "tone": "zháo jí"
          },
          {
            "stage": "word",
            "vi": "kiếm tiền",
            "hanzi": "赚钱",
            "words": [
              {
                "text": "赚钱",
                "pinyin": "zhuan qian",
                "tone": "zhuàn qián",
                "pos": "verb",
                "vi": "kiếm tiền"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuan qian",
            "tone": "zhuàn qián"
          },
          {
            "stage": "word",
            "vi": "thành công",
            "hanzi": "成功",
            "words": [
              {
                "text": "成功",
                "pinyin": "cheng gong",
                "tone": "chéng gōng",
                "pos": "noun",
                "vi": "thành công"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "cheng gong",
            "tone": "chéng gōng"
          },
          {
            "stage": "word",
            "vi": "quan trọng",
            "hanzi": "重要",
            "words": [
              {
                "text": "重要",
                "pinyin": "zhong yao",
                "tone": "zhòng yào",
                "pos": "adj",
                "vi": "quan trọng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhong yao",
            "tone": "zhòng yào"
          },
          {
            "stage": "word",
            "vi": "nỗ lực",
            "hanzi": "努力",
            "words": [
              {
                "text": "努力",
                "pinyin": "nu li",
                "tone": "nǔ lì",
                "pos": "verb",
                "vi": "nỗ lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nu li",
            "tone": "nǔ lì"
          },
          {
            "stage": "word",
            "vi": "cơ hội",
            "hanzi": "机会",
            "words": [
              {
                "text": "机会",
                "pinyin": "ji hui",
                "tone": "jī huì",
                "pos": "noun",
                "vi": "cơ hội"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji hui",
            "tone": "jī huì"
          },
          {
            "stage": "word",
            "vi": "kế hoạch",
            "hanzi": "计划",
            "words": [
              {
                "text": "计划",
                "pinyin": "ji hua",
                "tone": "jì huà",
                "pos": "noun",
                "vi": "kế hoạch"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji hua",
            "tone": "jì huà"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
          },
          {
            "stage": "word",
            "vi": "áp lực",
            "hanzi": "压力",
            "words": [
              {
                "text": "压力",
                "pinyin": "ya li",
                "tone": "yā lì",
                "pos": "noun",
                "vi": "áp lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ya li",
            "tone": "yā lì"
          },
          {
            "stage": "word",
            "vi": "bình tĩnh",
            "hanzi": "冷静",
            "words": [
              {
                "text": "冷静",
                "pinyin": "leng jing",
                "tone": "lěng jìng",
                "pos": "adj",
                "vi": "bình tĩnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "leng jing",
            "tone": "lěng jìng"
          },
          {
            "stage": "phrase",
            "vi": "quá vội vàng",
            "hanzi": "太着急",
            "words": [
              {
                "text": "着急",
                "pinyin": "zhao ji",
                "tone": "zháo jí",
                "pos": "adj",
                "vi": "sốt ruột, vội vàng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhao ji",
            "tone": "zháo jí"
          },
          {
            "stage": "phrase",
            "vi": "vội kiếm tiền",
            "hanzi": "急着赚钱",
            "words": [
              {
                "text": "赚钱",
                "pinyin": "zhuan qian",
                "tone": "zhuàn qián",
                "pos": "verb",
                "vi": "kiếm tiền"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhuan qian",
            "tone": "zhuàn qián"
          },
          {
            "stage": "phrase",
            "vi": "tích lũy kinh nghiệm",
            "hanzi": "积累经验",
            "words": [
              {
                "text": "经验",
                "pinyin": "jing yan",
                "tone": "jīng yàn",
                "pos": "noun",
                "vi": "kinh nghiệm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jing yan",
            "tone": "jīng yàn"
          },
          {
            "stage": "phrase",
            "vi": "lập kế hoạch",
            "hanzi": "制定计划",
            "words": [
              {
                "text": "计划",
                "pinyin": "ji hua",
                "tone": "jì huà",
                "pos": "noun",
                "vi": "kế hoạch"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji hua",
            "tone": "jì huà"
          },
          {
            "stage": "phrase",
            "vi": "giữ bình tĩnh",
            "hanzi": "保持冷静",
            "words": [
              {
                "text": "冷静",
                "pinyin": "leng jing",
                "tone": "lěng jìng",
                "pos": "adj",
                "vi": "bình tĩnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "leng jing",
            "tone": "lěng jìng"
          },
          {
            "stage": "sentence",
            "vi": "Người trẻ đừng quá vội kiếm tiền.",
            "hanzi": "年轻人不要太着急赚钱",
            "words": [
              {
                "text": "着急",
                "pinyin": "zhao ji",
                "tone": "zháo jí",
                "pos": "adj",
                "vi": "sốt ruột, vội vàng"
              },
              {
                "text": "赚钱",
                "pinyin": "zhuan qian",
                "tone": "zhuàn qián",
                "pos": "verb",
                "vi": "kiếm tiền"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhao ji zhuan qian",
            "tone": "zháo jí zhuàn qián"
          },
          {
            "stage": "sentence",
            "vi": "Thành công cần thời gian và nỗ lực.",
            "hanzi": "成功需要时间和努力",
            "words": [
              {
                "text": "成功",
                "pinyin": "cheng gong",
                "tone": "chéng gōng",
                "pos": "noun",
                "vi": "thành công"
              },
              {
                "text": "努力",
                "pinyin": "nu li",
                "tone": "nǔ lì",
                "pos": "verb",
                "vi": "nỗ lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "cheng gong nu li",
            "tone": "chéng gōng nǔ lì"
          },
          {
            "stage": "sentence",
            "vi": "Khi chưa có kinh nghiệm, áp lực sẽ khá lớn.",
            "hanzi": "没有经验时压力会比较大",
            "words": [
              {
                "text": "经验",
                "pinyin": "jing yan",
                "tone": "jīng yàn",
                "pos": "noun",
                "vi": "kinh nghiệm"
              },
              {
                "text": "压力",
                "pinyin": "ya li",
                "tone": "yā lì",
                "pos": "noun",
                "vi": "áp lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jing yan ya li",
            "tone": "jīng yàn yā lì"
          },
          {
            "stage": "sentence",
            "vi": "Trước khi làm việc gì, tốt nhất nên có kế hoạch.",
            "hanzi": "做事以前最好先有计划",
            "words": [
              {
                "text": "计划",
                "pinyin": "ji hua",
                "tone": "jì huà",
                "pos": "noun",
                "vi": "kế hoạch"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji hua",
            "tone": "jì huà"
          },
          {
            "stage": "mixed",
            "vi": "Người trẻ đừng quá vội kiếm tiền.",
            "hanzi": "年轻人不要太着急赚钱",
            "words": [
              {
                "text": "着急",
                "pinyin": "zhao ji",
                "tone": "zháo jí",
                "pos": "adj",
                "vi": "sốt ruột, vội vàng"
              },
              {
                "text": "赚钱",
                "pinyin": "zhuan qian",
                "tone": "zhuàn qián",
                "pos": "verb",
                "vi": "kiếm tiền"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhao ji zhuan qian",
            "tone": "zháo jí zhuàn qián"
          }
        ]
      },
      {
        "id": "hsk4-l5",
        "no": 5,
        "titleZh": "只买对的，不买贵的",
        "titleVi": "Chỉ mua thứ phù hợp, không mua thứ đắt",
        "items": [
          {
            "stage": "word",
            "vi": "mua",
            "hanzi": "买",
            "words": [
              {
                "text": "买",
                "pinyin": "mai",
                "tone": "mǎi",
                "pos": "verb",
                "vi": "mua"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mai",
            "tone": "mǎi"
          },
          {
            "stage": "word",
            "vi": "đắt",
            "hanzi": "贵",
            "words": [
              {
                "text": "贵",
                "pinyin": "gui",
                "tone": "guì",
                "pos": "adj",
                "vi": "đắt"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gui",
            "tone": "guì"
          },
          {
            "stage": "word",
            "vi": "rẻ",
            "hanzi": "便宜",
            "words": [
              {
                "text": "便宜",
                "pinyin": "pian yi",
                "tone": "pián yi",
                "pos": "adj",
                "vi": "rẻ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pian yi",
            "tone": "pián yi"
          },
          {
            "stage": "word",
            "vi": "phù hợp",
            "hanzi": "合适",
            "words": [
              {
                "text": "合适",
                "pinyin": "he shi",
                "tone": "hé shì",
                "pos": "adj",
                "vi": "phù hợp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "he shi",
            "tone": "hé shì"
          },
          {
            "stage": "word",
            "vi": "chất lượng",
            "hanzi": "质量",
            "words": [
              {
                "text": "质量",
                "pinyin": "zhi liang",
                "tone": "zhì liàng",
                "pos": "noun",
                "vi": "chất lượng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhi liang",
            "tone": "zhì liàng"
          },
          {
            "stage": "word",
            "vi": "giá cả",
            "hanzi": "价格",
            "words": [
              {
                "text": "价格",
                "pinyin": "jia ge",
                "tone": "jià gé",
                "pos": "noun",
                "vi": "giá cả"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jia ge",
            "tone": "jià gé"
          },
          {
            "stage": "word",
            "vi": "lựa chọn",
            "hanzi": "选择",
            "words": [
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xuan ze",
            "tone": "xuǎn zé"
          },
          {
            "stage": "word",
            "vi": "so sánh",
            "hanzi": "比较",
            "words": [
              {
                "text": "比较",
                "pinyin": "bi jiao",
                "tone": "bǐ jiào",
                "pos": "verb",
                "vi": "so sánh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bi jiao",
            "tone": "bǐ jiào"
          },
          {
            "stage": "word",
            "vi": "lãng phí",
            "hanzi": "浪费",
            "words": [
              {
                "text": "浪费",
                "pinyin": "lang fei",
                "tone": "làng fèi",
                "pos": "verb",
                "vi": "lãng phí"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lang fei",
            "tone": "làng fèi"
          },
          {
            "stage": "word",
            "vi": "thiết thực, hữu dụng",
            "hanzi": "实用",
            "words": [
              {
                "text": "实用",
                "pinyin": "shi yong",
                "tone": "shí yòng",
                "pos": "adj",
                "vi": "thiết thực, hữu dụng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shi yong",
            "tone": "shí yòng"
          },
          {
            "stage": "phrase",
            "vi": "mua thứ phù hợp",
            "hanzi": "买对的",
            "words": [
              {
                "text": "买",
                "pinyin": "mai",
                "tone": "mǎi",
                "pos": "verb",
                "vi": "mua"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mai",
            "tone": "mǎi"
          },
          {
            "stage": "phrase",
            "vi": "không mua thứ đắt",
            "hanzi": "不买贵的",
            "words": [
              {
                "text": "贵",
                "pinyin": "gui",
                "tone": "guì",
                "pos": "adj",
                "vi": "đắt"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gui",
            "tone": "guì"
          },
          {
            "stage": "phrase",
            "vi": "giá cả phù hợp",
            "hanzi": "价格合适",
            "words": [
              {
                "text": "价格",
                "pinyin": "jia ge",
                "tone": "jià gé",
                "pos": "noun",
                "vi": "giá cả"
              },
              {
                "text": "合适",
                "pinyin": "he shi",
                "tone": "hé shì",
                "pos": "adj",
                "vi": "phù hợp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jia ge he shi",
            "tone": "jià gé hé shì"
          },
          {
            "stage": "phrase",
            "vi": "chất lượng khá tốt",
            "hanzi": "质量不错",
            "words": [
              {
                "text": "质量",
                "pinyin": "zhi liang",
                "tone": "zhì liàng",
                "pos": "noun",
                "vi": "chất lượng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhi liang",
            "tone": "zhì liàng"
          },
          {
            "stage": "phrase",
            "vi": "so sánh thử",
            "hanzi": "比较一下",
            "words": [
              {
                "text": "比较",
                "pinyin": "bi jiao",
                "tone": "bǐ jiào",
                "pos": "verb",
                "vi": "so sánh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bi jiao",
            "tone": "bǐ jiào"
          },
          {
            "stage": "sentence",
            "vi": "Mua đồ không thể chỉ nhìn vào giá.",
            "hanzi": "买东西不能只看价格",
            "words": [
              {
                "text": "买",
                "pinyin": "mai",
                "tone": "mǎi",
                "pos": "verb",
                "vi": "mua"
              },
              {
                "text": "价格",
                "pinyin": "jia ge",
                "tone": "jià gé",
                "pos": "noun",
                "vi": "giá cả"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mai jia ge",
            "tone": "mǎi jià gé"
          },
          {
            "stage": "sentence",
            "vi": "Đắt chưa chắc là phù hợp nhất.",
            "hanzi": "贵的不一定最合适",
            "words": [
              {
                "text": "贵",
                "pinyin": "gui",
                "tone": "guì",
                "pos": "adj",
                "vi": "đắt"
              },
              {
                "text": "合适",
                "pinyin": "he shi",
                "tone": "hé shì",
                "pos": "adj",
                "vi": "phù hợp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gui he shi",
            "tone": "guì hé shì"
          },
          {
            "stage": "sentence",
            "vi": "Tôi muốn so sánh chất lượng trước.",
            "hanzi": "我想先比较一下质量",
            "words": [
              {
                "text": "比较",
                "pinyin": "bi jiao",
                "tone": "bǐ jiào",
                "pos": "verb",
                "vi": "so sánh"
              },
              {
                "text": "质量",
                "pinyin": "zhi liang",
                "tone": "zhì liàng",
                "pos": "noun",
                "vi": "chất lượng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bi jiao zhi liang",
            "tone": "bǐ jiào zhì liàng"
          },
          {
            "stage": "sentence",
            "vi": "Chỉ mua thứ phù hợp thì mới không lãng phí tiền.",
            "hanzi": "只买对的才不会浪费钱",
            "words": [
              {
                "text": "买",
                "pinyin": "mai",
                "tone": "mǎi",
                "pos": "verb",
                "vi": "mua"
              },
              {
                "text": "浪费",
                "pinyin": "lang fei",
                "tone": "làng fèi",
                "pos": "verb",
                "vi": "lãng phí"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mai lang fei",
            "tone": "mǎi làng fèi"
          },
          {
            "stage": "mixed",
            "vi": "Chỉ mua thứ phù hợp thì mới không lãng phí tiền.",
            "hanzi": "只买对的才不会浪费钱",
            "words": [
              {
                "text": "买",
                "pinyin": "mai",
                "tone": "mǎi",
                "pos": "verb",
                "vi": "mua"
              },
              {
                "text": "浪费",
                "pinyin": "lang fei",
                "tone": "làng fèi",
                "pos": "verb",
                "vi": "lãng phí"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mai lang fei",
            "tone": "mǎi làng fèi"
          }
        ]
      }
    ],
    "HSK5": [
      {
        "id": "hsk5-l1",
        "no": 1,
        "titleZh": "爱的细节",
        "titleVi": "Những chi tiết của tình yêu",
        "items": [
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ai qing",
            "tone": "ài qíng"
          },
          {
            "stage": "word",
            "vi": "chi tiết",
            "hanzi": "细节",
            "words": [
              {
                "text": "细节",
                "pinyin": "xi jie",
                "tone": "xì jié",
                "pos": "noun",
                "vi": "chi tiết"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xi jie",
            "tone": "xì jié"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "sheng huo",
            "tone": "shēng huó"
          },
          {
            "stage": "word",
            "vi": "quan tâm",
            "hanzi": "关心",
            "words": [
              {
                "text": "关心",
                "pinyin": "guan xin",
                "tone": "guān xīn",
                "pos": "verb",
                "vi": "quan tâm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "guan xin",
            "tone": "guān xīn"
          },
          {
            "stage": "word",
            "vi": "chăm sóc",
            "hanzi": "照顾",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhao gu",
                "tone": "zhào gù",
                "pos": "verb",
                "vi": "chăm sóc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhao gu",
            "tone": "zhào gù"
          },
          {
            "stage": "word",
            "vi": "bày tỏ",
            "hanzi": "表达",
            "words": [
              {
                "text": "表达",
                "pinyin": "biao da",
                "tone": "biǎo dá",
                "pos": "verb",
                "vi": "bày tỏ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biao da",
            "tone": "biǎo dá"
          },
          {
            "stage": "word",
            "vi": "trân trọng",
            "hanzi": "珍惜",
            "words": [
              {
                "text": "珍惜",
                "pinyin": "zhen xi",
                "tone": "zhēn xī",
                "pos": "verb",
                "vi": "trân trọng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhen xi",
            "tone": "zhēn xī"
          },
          {
            "stage": "word",
            "vi": "ở bên, đi cùng",
            "hanzi": "陪",
            "words": [
              {
                "text": "陪",
                "pinyin": "pei",
                "tone": "péi",
                "pos": "verb",
                "vi": "ở bên, đi cùng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pei",
            "tone": "péi"
          },
          {
            "stage": "word",
            "vi": "trách nhiệm",
            "hanzi": "责任",
            "words": [
              {
                "text": "责任",
                "pinyin": "ze ren",
                "tone": "zé rèn",
                "pos": "noun",
                "vi": "trách nhiệm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ze ren",
            "tone": "zé rèn"
          },
          {
            "stage": "word",
            "vi": "hạnh phúc",
            "hanzi": "幸福",
            "words": [
              {
                "text": "幸福",
                "pinyin": "xing fu",
                "tone": "xìng fú",
                "pos": "adj",
                "vi": "hạnh phúc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xing fu",
            "tone": "xìng fú"
          },
          {
            "stage": "word",
            "vi": "thật sự",
            "hanzi": "真正",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhen zheng",
                "tone": "zhēn zhèng",
                "pos": "adj",
                "vi": "thật sự"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhen zheng",
            "tone": "zhēn zhèng"
          },
          {
            "stage": "word",
            "vi": "bình thường",
            "hanzi": "普通",
            "words": [
              {
                "text": "普通",
                "pinyin": "pu tong",
                "tone": "pǔ tōng",
                "pos": "adj",
                "vi": "bình thường"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pu tong",
            "tone": "pǔ tōng"
          },
          {
            "stage": "phrase",
            "vi": "chi tiết của tình yêu",
            "hanzi": "爱的细节",
            "words": [
              {
                "text": "爱情",
                "pinyin": "ai qing",
                "tone": "ài qíng",
                "pos": "noun",
                "vi": "tình yêu"
              },
              {
                "text": "细节",
                "pinyin": "xi jie",
                "tone": "xì jié",
                "pos": "noun",
                "vi": "chi tiết"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ai qing xi jie",
            "tone": "ài qíng xì jié"
          },
          {
            "stage": "phrase",
            "vi": "quan tâm người nhà",
            "hanzi": "关心家人",
            "words": [
              {
                "text": "关心",
                "pinyin": "guan xin",
                "tone": "guān xīn",
                "pos": "verb",
                "vi": "quan tâm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "guan xin",
            "tone": "guān xīn"
          },
          {
            "stage": "phrase",
            "vi": "bày tỏ lời cảm ơn",
            "hanzi": "表达感谢",
            "words": [
              {
                "text": "表达",
                "pinyin": "biao da",
                "tone": "biǎo dá",
                "pos": "verb",
                "vi": "bày tỏ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "biao da",
            "tone": "biǎo dá"
          },
          {
            "stage": "phrase",
            "vi": "trân trọng cuộc sống",
            "hanzi": "珍惜生活",
            "words": [
              {
                "text": "珍惜",
                "pinyin": "zhen xi",
                "tone": "zhēn xī",
                "pos": "verb",
                "vi": "trân trọng"
              },
              {
                "text": "生活",
                "pinyin": "sheng huo",
                "tone": "shēng huó",
                "pos": "noun",
                "vi": "cuộc sống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhen xi sheng huo",
            "tone": "zhēn xī shēng huó"
          },
          {
            "stage": "phrase",
            "vi": "hạnh phúc thật sự",
            "hanzi": "真正的幸福",
            "words": [
              {
                "text": "真正",
                "pinyin": "zhen zheng",
                "tone": "zhēn zhèng",
                "pos": "adj",
                "vi": "thật sự"
              },
              {
                "text": "幸福",
                "pinyin": "xing fu",
                "tone": "xìng fú",
                "pos": "adj",
                "vi": "hạnh phúc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhen zheng xing fu",
            "tone": "zhēn zhèng xìng fú"
          },
          {
            "stage": "sentence",
            "vi": "Tình yêu thường ẩn trong những chi tiết rất nhỏ.",
            "hanzi": "爱常常藏在很小的细节里",
            "words": [
              {
                "text": "细节",
                "pinyin": "xi jie",
                "tone": "xì jié",
                "pos": "noun",
                "vi": "chi tiết"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xi jie",
            "tone": "xì jié"
          },
          {
            "stage": "sentence",
            "vi": "Anh ấy chăm sóc cha mẹ mỗi ngày và không hề thấy phiền.",
            "hanzi": "他每天照顾父母从不觉得麻烦",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhao gu",
                "tone": "zhào gù",
                "pos": "verb",
                "vi": "chăm sóc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhao gu",
            "tone": "zhào gù"
          },
          {
            "stage": "sentence",
            "vi": "Một câu nói bình thường cũng có thể thể hiện sự quan tâm thật lòng.",
            "hanzi": "一句普通的话也可以表达真正的关心",
            "words": [
              {
                "text": "普通",
                "pinyin": "pu tong",
                "tone": "pǔ tōng",
                "pos": "adj",
                "vi": "bình thường"
              },
              {
                "text": "表达",
                "pinyin": "biao da",
                "tone": "biǎo dá",
                "pos": "verb",
                "vi": "bày tỏ"
              },
              {
                "text": "真正",
                "pinyin": "zhen zheng",
                "tone": "zhēn zhèng",
                "pos": "adj",
                "vi": "thật sự"
              },
              {
                "text": "关心",
                "pinyin": "guan xin",
                "tone": "guān xīn",
                "pos": "verb",
                "vi": "quan tâm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pu tong biao da zhen zheng guan xin",
            "tone": "pǔ tōng biǎo dá zhēn zhèng guān xīn"
          },
          {
            "stage": "sentence",
            "vi": "Người biết trân trọng thì dễ cảm thấy hạnh phúc hơn.",
            "hanzi": "懂得珍惜的人更容易感到幸福",
            "words": [
              {
                "text": "珍惜",
                "pinyin": "zhen xi",
                "tone": "zhēn xī",
                "pos": "verb",
                "vi": "trân trọng"
              },
              {
                "text": "幸福",
                "pinyin": "xing fu",
                "tone": "xìng fú",
                "pos": "adj",
                "vi": "hạnh phúc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhen xi xing fu",
            "tone": "zhēn xī xìng fú"
          },
          {
            "stage": "mixed",
            "vi": "Chi tiết, chăm sóc, trân trọng và hạnh phúc.",
            "hanzi": "细节照顾珍惜幸福",
            "words": [
              {
                "text": "细节",
                "pinyin": "xi jie",
                "tone": "xì jié",
                "pos": "noun",
                "vi": "chi tiết"
              },
              {
                "text": "照顾",
                "pinyin": "zhao gu",
                "tone": "zhào gù",
                "pos": "verb",
                "vi": "chăm sóc"
              },
              {
                "text": "珍惜",
                "pinyin": "zhen xi",
                "tone": "zhēn xī",
                "pos": "verb",
                "vi": "trân trọng"
              },
              {
                "text": "幸福",
                "pinyin": "xing fu",
                "tone": "xìng fú",
                "pos": "adj",
                "vi": "hạnh phúc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xi jie zhao gu zhen xi xing fu",
            "tone": "xì jié zhào gù zhēn xī xìng fú"
          }
        ]
      },
      {
        "id": "hsk5-l2",
        "no": 2,
        "titleZh": "留串钥匙给父母",
        "titleVi": "Để lại một chùm chìa khóa cho cha mẹ",
        "items": [
          {
            "stage": "word",
            "vi": "chìa khóa",
            "hanzi": "钥匙",
            "words": [
              {
                "text": "钥匙",
                "pinyin": "yao shi",
                "tone": "yào shi",
                "pos": "noun",
                "vi": "chìa khóa"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yao shi",
            "tone": "yào shi"
          },
          {
            "stage": "word",
            "vi": "cha mẹ",
            "hanzi": "父母",
            "words": [
              {
                "text": "父母",
                "pinyin": "fu mu",
                "tone": "fù mǔ",
                "pos": "noun",
                "vi": "cha mẹ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fu mu",
            "tone": "fù mǔ"
          },
          {
            "stage": "word",
            "vi": "người già",
            "hanzi": "老人",
            "words": [
              {
                "text": "老人",
                "pinyin": "lao ren",
                "tone": "lǎo rén",
                "pos": "noun",
                "vi": "người già"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lao ren",
            "tone": "lǎo rén"
          },
          {
            "stage": "word",
            "vi": "hàng xóm",
            "hanzi": "邻居",
            "words": [
              {
                "text": "邻居",
                "pinyin": "lin ju",
                "tone": "lín jū",
                "pos": "noun",
                "vi": "hàng xóm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lin ju",
            "tone": "lín jū"
          },
          {
            "stage": "word",
            "vi": "cửa nhà",
            "hanzi": "家门",
            "words": [
              {
                "text": "家门",
                "pinyin": "jia men",
                "tone": "jiā mén",
                "pos": "noun",
                "vi": "cửa nhà"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jia men",
            "tone": "jiā mén"
          },
          {
            "stage": "word",
            "vi": "an toàn",
            "hanzi": "安全",
            "words": [
              {
                "text": "安全",
                "pinyin": "an quan",
                "tone": "ān quán",
                "pos": "adj",
                "vi": "an toàn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "an quan",
            "tone": "ān quán"
          },
          {
            "stage": "word",
            "vi": "thuận tiện",
            "hanzi": "方便",
            "words": [
              {
                "text": "方便",
                "pinyin": "fang bian",
                "tone": "fāng biàn",
                "pos": "adj",
                "vi": "thuận tiện"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fang bian",
            "tone": "fāng biàn"
          },
          {
            "stage": "word",
            "vi": "lo lắng",
            "hanzi": "担心",
            "words": [
              {
                "text": "担心",
                "pinyin": "dan xin",
                "tone": "dān xīn",
                "pos": "verb",
                "vi": "lo lắng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dan xin",
            "tone": "dān xīn"
          },
          {
            "stage": "word",
            "vi": "liên lạc",
            "hanzi": "联系",
            "words": [
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lian xi",
            "tone": "lián xì"
          },
          {
            "stage": "word",
            "vi": "để lại",
            "hanzi": "留下",
            "words": [
              {
                "text": "留下",
                "pinyin": "liu xia",
                "tone": "liú xià",
                "pos": "verb",
                "vi": "để lại"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "liu xia",
            "tone": "liú xià"
          },
          {
            "stage": "word",
            "vi": "chăm sóc",
            "hanzi": "照顾",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhao gu",
                "tone": "zhào gù",
                "pos": "verb",
                "vi": "chăm sóc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhao gu",
            "tone": "zhào gù"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xi guan",
            "tone": "xí guàn"
          },
          {
            "stage": "phrase",
            "vi": "để lại một chùm chìa khóa",
            "hanzi": "留一串钥匙",
            "words": [
              {
                "text": "留下",
                "pinyin": "liu xia",
                "tone": "liú xià",
                "pos": "verb",
                "vi": "để lại"
              },
              {
                "text": "钥匙",
                "pinyin": "yao shi",
                "tone": "yào shi",
                "pos": "noun",
                "vi": "chìa khóa"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "liu xia yao shi",
            "tone": "liú xià yào shi"
          },
          {
            "stage": "phrase",
            "vi": "tiện cho cha mẹ",
            "hanzi": "方便父母",
            "words": [
              {
                "text": "方便",
                "pinyin": "fang bian",
                "tone": "fāng biàn",
                "pos": "adj",
                "vi": "thuận tiện"
              },
              {
                "text": "父母",
                "pinyin": "fu mu",
                "tone": "fù mǔ",
                "pos": "noun",
                "vi": "cha mẹ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fang bian fu mu",
            "tone": "fāng biàn fù mǔ"
          },
          {
            "stage": "phrase",
            "vi": "liên lạc với hàng xóm",
            "hanzi": "联系邻居",
            "words": [
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              },
              {
                "text": "邻居",
                "pinyin": "lin ju",
                "tone": "lín jū",
                "pos": "noun",
                "vi": "hàng xóm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lian xi lin ju",
            "tone": "lián xì lín jū"
          },
          {
            "stage": "phrase",
            "vi": "lo về an toàn",
            "hanzi": "担心安全",
            "words": [
              {
                "text": "担心",
                "pinyin": "dan xin",
                "tone": "dān xīn",
                "pos": "verb",
                "vi": "lo lắng"
              },
              {
                "text": "安全",
                "pinyin": "an quan",
                "tone": "ān quán",
                "pos": "adj",
                "vi": "an toàn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "dan xin an quan",
            "tone": "dān xīn ān quán"
          },
          {
            "stage": "phrase",
            "vi": "chăm sóc người già",
            "hanzi": "照顾老人",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhao gu",
                "tone": "zhào gù",
                "pos": "verb",
                "vi": "chăm sóc"
              },
              {
                "text": "老人",
                "pinyin": "lao ren",
                "tone": "lǎo rén",
                "pos": "noun",
                "vi": "người già"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhao gu lao ren",
            "tone": "zhào gù lǎo rén"
          },
          {
            "stage": "sentence",
            "vi": "Tôi để lại cho cha mẹ một chùm chìa khóa.",
            "hanzi": "我给父母留了一串钥匙",
            "words": [
              {
                "text": "父母",
                "pinyin": "fu mu",
                "tone": "fù mǔ",
                "pos": "noun",
                "vi": "cha mẹ"
              },
              {
                "text": "留下",
                "pinyin": "liu xia",
                "tone": "liú xià",
                "pos": "verb",
                "vi": "để lại"
              },
              {
                "text": "钥匙",
                "pinyin": "yao shi",
                "tone": "yào shi",
                "pos": "noun",
                "vi": "chìa khóa"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fu mu liu xia yao shi",
            "tone": "fù mǔ liú xià yào shi"
          },
          {
            "stage": "sentence",
            "vi": "Làm vậy là để họ vào nhà thuận tiện hơn.",
            "hanzi": "这样做是为了方便他们进门",
            "words": [
              {
                "text": "方便",
                "pinyin": "fang bian",
                "tone": "fāng biàn",
                "pos": "adj",
                "vi": "thuận tiện"
              },
              {
                "text": "家门",
                "pinyin": "jia men",
                "tone": "jiā mén",
                "pos": "noun",
                "vi": "cửa nhà"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fang bian jia men",
            "tone": "fāng biàn jiā mén"
          },
          {
            "stage": "sentence",
            "vi": "Nếu người già thấy không khỏe, có thể liên lạc ngay với hàng xóm.",
            "hanzi": "如果老人身体不舒服可以马上联系邻居",
            "words": [
              {
                "text": "老人",
                "pinyin": "lao ren",
                "tone": "lǎo rén",
                "pos": "noun",
                "vi": "người già"
              },
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              },
              {
                "text": "邻居",
                "pinyin": "lin ju",
                "tone": "lín jū",
                "pos": "noun",
                "vi": "hàng xóm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "lao ren lian xi lin ju",
            "tone": "lǎo rén lián xì lín jū"
          },
          {
            "stage": "sentence",
            "vi": "Nhiều sự quan tâm cuối cùng sẽ trở thành thói quen trong đời sống.",
            "hanzi": "很多关心最后都会变成生活里的习惯",
            "words": [
              {
                "text": "习惯",
                "pinyin": "xi guan",
                "tone": "xí guàn",
                "pos": "noun",
                "vi": "thói quen"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xi guan",
            "tone": "xí guàn"
          },
          {
            "stage": "mixed",
            "vi": "Thuận tiện, an toàn, lo lắng và liên lạc.",
            "hanzi": "方便安全担心联系",
            "words": [
              {
                "text": "方便",
                "pinyin": "fang bian",
                "tone": "fāng biàn",
                "pos": "adj",
                "vi": "thuận tiện"
              },
              {
                "text": "安全",
                "pinyin": "an quan",
                "tone": "ān quán",
                "pos": "adj",
                "vi": "an toàn"
              },
              {
                "text": "担心",
                "pinyin": "dan xin",
                "tone": "dān xīn",
                "pos": "verb",
                "vi": "lo lắng"
              },
              {
                "text": "联系",
                "pinyin": "lian xi",
                "tone": "lián xì",
                "pos": "verb",
                "vi": "liên lạc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fang bian an quan dan xin lian xi",
            "tone": "fāng biàn ān quán dān xīn lián xì"
          }
        ]
      },
      {
        "id": "hsk5-l3",
        "no": 3,
        "titleZh": "人生有选择，一切可改变",
        "titleVi": "Cuộc đời có lựa chọn, mọi thứ đều có thể thay đổi",
        "items": [
          {
            "stage": "word",
            "vi": "cuộc đời",
            "hanzi": "人生",
            "words": [
              {
                "text": "人生",
                "pinyin": "ren sheng",
                "tone": "rén shēng",
                "pos": "noun",
                "vi": "cuộc đời"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ren sheng",
            "tone": "rén shēng"
          },
          {
            "stage": "word",
            "vi": "lựa chọn",
            "hanzi": "选择",
            "words": [
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xuan ze",
            "tone": "xuǎn zé"
          },
          {
            "stage": "word",
            "vi": "thay đổi",
            "hanzi": "改变",
            "words": [
              {
                "text": "改变",
                "pinyin": "gai bian",
                "tone": "gǎi biàn",
                "pos": "verb",
                "vi": "thay đổi"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gai bian",
            "tone": "gǎi biàn"
          },
          {
            "stage": "word",
            "vi": "cơ hội",
            "hanzi": "机会",
            "words": [
              {
                "text": "机会",
                "pinyin": "ji hui",
                "tone": "jī huì",
                "pos": "noun",
                "vi": "cơ hội"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji hui",
            "tone": "jī huì"
          },
          {
            "stage": "word",
            "vi": "quyết định",
            "hanzi": "决定",
            "words": [
              {
                "text": "决定",
                "pinyin": "jue ding",
                "tone": "jué dìng",
                "pos": "verb",
                "vi": "quyết định"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jue ding",
            "tone": "jué dìng"
          },
          {
            "stage": "word",
            "vi": "thái độ",
            "hanzi": "态度",
            "words": [
              {
                "text": "态度",
                "pinyin": "tai du",
                "tone": "tài dù",
                "pos": "noun",
                "vi": "thái độ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tai du",
            "tone": "tài dù"
          },
          {
            "stage": "word",
            "vi": "nỗ lực",
            "hanzi": "努力",
            "words": [
              {
                "text": "努力",
                "pinyin": "nu li",
                "tone": "nǔ lì",
                "pos": "verb",
                "vi": "nỗ lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nu li",
            "tone": "nǔ lì"
          },
          {
            "stage": "word",
            "vi": "kiên trì",
            "hanzi": "坚持",
            "words": [
              {
                "text": "坚持",
                "pinyin": "jian chi",
                "tone": "jiān chí",
                "pos": "verb",
                "vi": "kiên trì"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jian chi",
            "tone": "jiān chí"
          },
          {
            "stage": "word",
            "vi": "thất bại",
            "hanzi": "失败",
            "words": [
              {
                "text": "失败",
                "pinyin": "shi bai",
                "tone": "shī bài",
                "pos": "verb",
                "vi": "thất bại"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shi bai",
            "tone": "shī bài"
          },
          {
            "stage": "word",
            "vi": "thành công",
            "hanzi": "成功",
            "words": [
              {
                "text": "成功",
                "pinyin": "cheng gong",
                "tone": "chéng gōng",
                "pos": "verb",
                "vi": "thành công"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "cheng gong",
            "tone": "chéng gōng"
          },
          {
            "stage": "word",
            "vi": "dũng cảm",
            "hanzi": "勇敢",
            "words": [
              {
                "text": "勇敢",
                "pinyin": "yong gan",
                "tone": "yǒng gǎn",
                "pos": "adj",
                "vi": "dũng cảm"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yong gan",
            "tone": "yǒng gǎn"
          },
          {
            "stage": "word",
            "vi": "phù hợp",
            "hanzi": "适合",
            "words": [
              {
                "text": "适合",
                "pinyin": "shi he",
                "tone": "shì hé",
                "pos": "adj",
                "vi": "phù hợp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shi he",
            "tone": "shì hé"
          },
          {
            "stage": "phrase",
            "vi": "lựa chọn trong cuộc đời",
            "hanzi": "人生的选择",
            "words": [
              {
                "text": "人生",
                "pinyin": "ren sheng",
                "tone": "rén shēng",
                "pos": "noun",
                "vi": "cuộc đời"
              },
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ren sheng xuan ze",
            "tone": "rén shēng xuǎn zé"
          },
          {
            "stage": "phrase",
            "vi": "thay đổi số phận",
            "hanzi": "改变命运",
            "words": [
              {
                "text": "改变",
                "pinyin": "gai bian",
                "tone": "gǎi biàn",
                "pos": "verb",
                "vi": "thay đổi"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gai bian",
            "tone": "gǎi biàn"
          },
          {
            "stage": "phrase",
            "vi": "nắm bắt cơ hội",
            "hanzi": "抓住机会",
            "words": [
              {
                "text": "机会",
                "pinyin": "ji hui",
                "tone": "jī huì",
                "pos": "noun",
                "vi": "cơ hội"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji hui",
            "tone": "jī huì"
          },
          {
            "stage": "phrase",
            "vi": "kiên trì nỗ lực",
            "hanzi": "坚持努力",
            "words": [
              {
                "text": "坚持",
                "pinyin": "jian chi",
                "tone": "jiān chí",
                "pos": "verb",
                "vi": "kiên trì"
              },
              {
                "text": "努力",
                "pinyin": "nu li",
                "tone": "nǔ lì",
                "pos": "verb",
                "vi": "nỗ lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jian chi nu li",
            "tone": "jiān chí nǔ lì"
          },
          {
            "stage": "phrase",
            "vi": "quyết định dũng cảm",
            "hanzi": "勇敢决定",
            "words": [
              {
                "text": "勇敢",
                "pinyin": "yong gan",
                "tone": "yǒng gǎn",
                "pos": "adj",
                "vi": "dũng cảm"
              },
              {
                "text": "决定",
                "pinyin": "jue ding",
                "tone": "jué dìng",
                "pos": "verb",
                "vi": "quyết định"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "yong gan jue ding",
            "tone": "yǒng gǎn jué dìng"
          },
          {
            "stage": "sentence",
            "vi": "Cuộc đời có rất nhiều lựa chọn.",
            "hanzi": "人生有很多选择",
            "words": [
              {
                "text": "人生",
                "pinyin": "ren sheng",
                "tone": "rén shēng",
                "pos": "noun",
                "vi": "cuộc đời"
              },
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ren sheng xuan ze",
            "tone": "rén shēng xuǎn zé"
          },
          {
            "stage": "sentence",
            "vi": "Một quyết định có thể thay đổi hướng đi của một người.",
            "hanzi": "一次决定可能会改变一个人的方向",
            "words": [
              {
                "text": "决定",
                "pinyin": "jue ding",
                "tone": "jué dìng",
                "pos": "verb",
                "vi": "quyết định"
              },
              {
                "text": "改变",
                "pinyin": "gai bian",
                "tone": "gǎi biàn",
                "pos": "verb",
                "vi": "thay đổi"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jue ding gai bian",
            "tone": "jué dìng gǎi biàn"
          },
          {
            "stage": "sentence",
            "vi": "Thất bại không đáng sợ, điều đáng sợ là không còn cố gắng.",
            "hanzi": "失败并不可怕可怕的是不再努力",
            "words": [
              {
                "text": "失败",
                "pinyin": "shi bai",
                "tone": "shī bài",
                "pos": "verb",
                "vi": "thất bại"
              },
              {
                "text": "努力",
                "pinyin": "nu li",
                "tone": "nǔ lì",
                "pos": "verb",
                "vi": "nỗ lực"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "shi bai nu li",
            "tone": "shī bài nǔ lì"
          },
          {
            "stage": "sentence",
            "vi": "Chỉ cần kiên trì, ta có thể tìm được con đường phù hợp với mình.",
            "hanzi": "只要坚持就可能找到适合自己的路",
            "words": [
              {
                "text": "坚持",
                "pinyin": "jian chi",
                "tone": "jiān chí",
                "pos": "verb",
                "vi": "kiên trì"
              },
              {
                "text": "适合",
                "pinyin": "shi he",
                "tone": "shì hé",
                "pos": "adj",
                "vi": "phù hợp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "jian chi shi he",
            "tone": "jiān chí shì hé"
          },
          {
            "stage": "mixed",
            "vi": "Lựa chọn, thay đổi, cơ hội và kiên trì.",
            "hanzi": "选择改变机会坚持",
            "words": [
              {
                "text": "选择",
                "pinyin": "xuan ze",
                "tone": "xuǎn zé",
                "pos": "verb",
                "vi": "lựa chọn"
              },
              {
                "text": "改变",
                "pinyin": "gai bian",
                "tone": "gǎi biàn",
                "pos": "verb",
                "vi": "thay đổi"
              },
              {
                "text": "机会",
                "pinyin": "ji hui",
                "tone": "jī huì",
                "pos": "noun",
                "vi": "cơ hội"
              },
              {
                "text": "坚持",
                "pinyin": "jian chi",
                "tone": "jiān chí",
                "pos": "verb",
                "vi": "kiên trì"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xuan ze gai bian ji hui jian chi",
            "tone": "xuǎn zé gǎi biàn jī huì jiān chí"
          }
        ]
      },
      {
        "id": "hsk5-l4",
        "no": 4,
        "titleZh": "子路背米",
        "titleVi": "Tử Lộ cõng gạo",
        "items": [
          {
            "stage": "word",
            "vi": "Tử Lộ",
            "hanzi": "子路",
            "words": [
              {
                "text": "子路",
                "pinyin": "zi lu",
                "tone": "zǐ lù",
                "pos": "noun",
                "vi": "Tử Lộ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zi lu",
            "tone": "zǐ lù"
          },
          {
            "stage": "word",
            "vi": "Khổng Tử",
            "hanzi": "孔子",
            "words": [
              {
                "text": "孔子",
                "pinyin": "kong zi",
                "tone": "kǒng zǐ",
                "pos": "noun",
                "vi": "Khổng Tử"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "kong zi",
            "tone": "kǒng zǐ"
          },
          {
            "stage": "word",
            "vi": "cha mẹ",
            "hanzi": "父母",
            "words": [
              {
                "text": "父母",
                "pinyin": "fu mu",
                "tone": "fù mǔ",
                "pos": "noun",
                "vi": "cha mẹ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "fu mu",
            "tone": "fù mǔ"
          },
          {
            "stage": "word",
            "vi": "gạo",
            "hanzi": "米",
            "words": [
              {
                "text": "米",
                "pinyin": "mi",
                "tone": "mǐ",
                "pos": "noun",
                "vi": "gạo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "mi",
            "tone": "mǐ"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
          {
            "stage": "word",
            "vi": "cõng, vác",
            "hanzi": "背",
            "words": [
              {
                "text": "背",
                "pinyin": "bei",
                "tone": "bèi",
                "pos": "verb",
                "vi": "cõng, vác"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bei",
            "tone": "bèi"
          },
          {
            "stage": "word",
            "vi": "chăm sóc",
            "hanzi": "照顾",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhao gu",
                "tone": "zhào gù",
                "pos": "verb",
                "vi": "chăm sóc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhao gu",
            "tone": "zhào gù"
          },
          {
            "stage": "word",
            "vi": "kính trọng",
            "hanzi": "尊敬",
            "words": [
              {
                "text": "尊敬",
                "pinyin": "zun jing",
                "tone": "zūn jìng",
                "pos": "verb",
                "vi": "kính trọng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zun jing",
            "tone": "zūn jìng"
          },
          {
            "stage": "word",
            "vi": "biết ơn",
            "hanzi": "感恩",
            "words": [
              {
                "text": "感恩",
                "pinyin": "gan en",
                "tone": "gǎn ēn",
                "pos": "verb",
                "vi": "biết ơn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gan en",
            "tone": "gǎn ēn"
          },
          {
            "stage": "word",
            "vi": "hiếu thảo",
            "hanzi": "孝顺",
            "words": [
              {
                "text": "孝顺",
                "pinyin": "xiao shun",
                "tone": "xiào shùn",
                "pos": "adj",
                "vi": "hiếu thảo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xiao shun",
            "tone": "xiào shùn"
          },
          {
            "stage": "word",
            "vi": "nghèo khó",
            "hanzi": "贫穷",
            "words": [
              {
                "text": "贫穷",
                "pinyin": "pin qiong",
                "tone": "pín qióng",
                "pos": "adj",
                "vi": "nghèo khó"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "pin qiong",
            "tone": "pín qióng"
          },
          {
            "stage": "word",
            "vi": "vất vả",
            "hanzi": "辛苦",
            "words": [
              {
                "text": "辛苦",
                "pinyin": "xin ku",
                "tone": "xīn kǔ",
                "pos": "adj",
                "vi": "vất vả"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xin ku",
            "tone": "xīn kǔ"
          },
          {
            "stage": "phrase",
            "vi": "cõng gạo về nhà",
            "hanzi": "背米回家",
            "words": [
              {
                "text": "背",
                "pinyin": "bei",
                "tone": "bèi",
                "pos": "verb",
                "vi": "cõng, vác"
              },
              {
                "text": "米",
                "pinyin": "mi",
                "tone": "mǐ",
                "pos": "noun",
                "vi": "gạo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bei mi",
            "tone": "bèi mǐ"
          },
          {
            "stage": "phrase",
            "vi": "chăm sóc cha mẹ",
            "hanzi": "照顾父母",
            "words": [
              {
                "text": "照顾",
                "pinyin": "zhao gu",
                "tone": "zhào gù",
                "pos": "verb",
                "vi": "chăm sóc"
              },
              {
                "text": "父母",
                "pinyin": "fu mu",
                "tone": "fù mǔ",
                "pos": "noun",
                "vi": "cha mẹ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhao gu fu mu",
            "tone": "zhào gù fù mǔ"
          },
          {
            "stage": "phrase",
            "vi": "kính trọng người già",
            "hanzi": "尊敬老人",
            "words": [
              {
                "text": "尊敬",
                "pinyin": "zun jing",
                "tone": "zūn jìng",
                "pos": "verb",
                "vi": "kính trọng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zun jing",
            "tone": "zūn jìng"
          },
          {
            "stage": "phrase",
            "vi": "câu chuyện truyền thống",
            "hanzi": "传统故事",
            "words": [
              {
                "text": "传统",
                "pinyin": "chuan tong",
                "tone": "chuán tǒng",
                "pos": "noun",
                "vi": "truyền thống"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
          {
            "stage": "phrase",
            "vi": "biết ơn",
            "hanzi": "懂得感恩",
            "words": [
              {
                "text": "感恩",
                "pinyin": "gan en",
                "tone": "gǎn ēn",
                "pos": "verb",
                "vi": "biết ơn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gan en",
            "tone": "gǎn ēn"
          },
          {
            "stage": "sentence",
            "vi": "Khi còn trẻ, nhà Tử Lộ rất nghèo.",
            "hanzi": "子路年轻时家里很贫穷",
            "words": [
              {
                "text": "子路",
                "pinyin": "zi lu",
                "tone": "zǐ lù",
                "pos": "noun",
                "vi": "Tử Lộ"
              },
              {
                "text": "贫穷",
                "pinyin": "pin qiong",
                "tone": "pín qióng",
                "pos": "adj",
                "vi": "nghèo khó"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zi lu pin qiong",
            "tone": "zǐ lù pín qióng"
          },
          {
            "stage": "sentence",
            "vi": "Ông thường cõng gạo về nhà chăm sóc cha mẹ.",
            "hanzi": "他常常背米回家照顾父母",
            "words": [
              {
                "text": "背",
                "pinyin": "bei",
                "tone": "bèi",
                "pos": "verb",
                "vi": "cõng, vác"
              },
              {
                "text": "米",
                "pinyin": "mi",
                "tone": "mǐ",
                "pos": "noun",
                "vi": "gạo"
              },
              {
                "text": "照顾",
                "pinyin": "zhao gu",
                "tone": "zhào gù",
                "pos": "verb",
                "vi": "chăm sóc"
              },
              {
                "text": "父母",
                "pinyin": "fu mu",
                "tone": "fù mǔ",
                "pos": "noun",
                "vi": "cha mẹ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bei mi zhao gu fu mu",
            "tone": "bèi mǐ zhào gù fù mǔ"
          },
          {
            "stage": "sentence",
            "vi": "Câu chuyện này thể hiện lòng hiếu thảo trong truyền thống Trung Quốc.",
            "hanzi": "这个故事表现了中国传统中的孝顺",
            "words": [
              {
                "text": "传统",
                "pinyin": "chuan tong",
                "tone": "chuán tǒng",
                "pos": "noun",
                "vi": "truyền thống"
              },
              {
                "text": "孝顺",
                "pinyin": "xiao shun",
                "tone": "xiào shùn",
                "pos": "adj",
                "vi": "hiếu thảo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuan tong xiao shun",
            "tone": "chuán tǒng xiào shùn"
          },
          {
            "stage": "sentence",
            "vi": "Người thật sự biết ơn sẽ không quên sự vất vả của cha mẹ.",
            "hanzi": "真正懂得感恩的人不会忘记父母的辛苦",
            "words": [
              {
                "text": "感恩",
                "pinyin": "gan en",
                "tone": "gǎn ēn",
                "pos": "verb",
                "vi": "biết ơn"
              },
              {
                "text": "父母",
                "pinyin": "fu mu",
                "tone": "fù mǔ",
                "pos": "noun",
                "vi": "cha mẹ"
              },
              {
                "text": "辛苦",
                "pinyin": "xin ku",
                "tone": "xīn kǔ",
                "pos": "adj",
                "vi": "vất vả"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "gan en fu mu xin ku",
            "tone": "gǎn ēn fù mǔ xīn kǔ"
          },
          {
            "stage": "mixed",
            "vi": "Truyền thống, hiếu thảo, chăm sóc và biết ơn.",
            "hanzi": "传统孝顺照顾感恩",
            "words": [
              {
                "text": "传统",
                "pinyin": "chuan tong",
                "tone": "chuán tǒng",
                "pos": "noun",
                "vi": "truyền thống"
              },
              {
                "text": "孝顺",
                "pinyin": "xiao shun",
                "tone": "xiào shùn",
                "pos": "adj",
                "vi": "hiếu thảo"
              },
              {
                "text": "照顾",
                "pinyin": "zhao gu",
                "tone": "zhào gù",
                "pos": "verb",
                "vi": "chăm sóc"
              },
              {
                "text": "感恩",
                "pinyin": "gan en",
                "tone": "gǎn ēn",
                "pos": "verb",
                "vi": "biết ơn"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuan tong xiao shun zhao gu gan en",
            "tone": "chuán tǒng xiào shùn zhào gù gǎn ēn"
          }
        ]
      },
      {
        "id": "hsk5-l5",
        "no": 5,
        "titleZh": "济南的泉水",
        "titleVi": "Nước suối ở Tế Nam",
        "items": [
          {
            "stage": "word",
            "vi": "Tế Nam",
            "hanzi": "济南",
            "words": [
              {
                "text": "济南",
                "pinyin": "ji nan",
                "tone": "jǐ nán",
                "pos": "noun",
                "vi": "Tế Nam"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji nan",
            "tone": "jǐ nán"
          },
          {
            "stage": "word",
            "vi": "nước suối",
            "hanzi": "泉水",
            "words": [
              {
                "text": "泉水",
                "pinyin": "quan shui",
                "tone": "quán shuǐ",
                "pos": "noun",
                "vi": "nước suối"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "quan shui",
            "tone": "quán shuǐ"
          },
          {
            "stage": "word",
            "vi": "thành phố",
            "hanzi": "城市",
            "words": [
              {
                "text": "城市",
                "pinyin": "cheng shi",
                "tone": "chéng shì",
                "pos": "noun",
                "vi": "thành phố"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "cheng shi",
            "tone": "chéng shì"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "feng jing",
            "tone": "fēng jǐng"
          },
          {
            "stage": "word",
            "vi": "du khách",
            "hanzi": "游客",
            "words": [
              {
                "text": "游客",
                "pinyin": "you ke",
                "tone": "yóu kè",
                "pos": "noun",
                "vi": "du khách"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "you ke",
            "tone": "yóu kè"
          },
          {
            "stage": "word",
            "vi": "thiên nhiên",
            "hanzi": "自然",
            "words": [
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "thiên nhiên"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zi ran",
            "tone": "zì rán"
          },
          {
            "stage": "word",
            "vi": "môi trường",
            "hanzi": "环境",
            "words": [
              {
                "text": "环境",
                "pinyin": "huan jing",
                "tone": "huán jìng",
                "pos": "noun",
                "vi": "môi trường"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "huan jing",
            "tone": "huán jìng"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "wen hua",
            "tone": "wén huà"
          },
          {
            "stage": "word",
            "vi": "hình thành",
            "hanzi": "形成",
            "words": [
              {
                "text": "形成",
                "pinyin": "xing cheng",
                "tone": "xíng chéng",
                "pos": "verb",
                "vi": "hình thành"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xing cheng",
            "tone": "xíng chéng"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bao hu",
            "tone": "bǎo hù"
          },
          {
            "stage": "word",
            "vi": "nổi tiếng",
            "hanzi": "著名",
            "words": [
              {
                "text": "著名",
                "pinyin": "zhu ming",
                "tone": "zhù míng",
                "pos": "adj",
                "vi": "nổi tiếng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhu ming",
            "tone": "zhù míng"
          },
          {
            "stage": "word",
            "vi": "trong vắt",
            "hanzi": "清澈",
            "words": [
              {
                "text": "清澈",
                "pinyin": "qing che",
                "tone": "qīng chè",
                "pos": "adj",
                "vi": "trong vắt"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "qing che",
            "tone": "qīng chè"
          },
          {
            "stage": "phrase",
            "vi": "suối nước ở Tế Nam",
            "hanzi": "济南的泉水",
            "words": [
              {
                "text": "济南",
                "pinyin": "ji nan",
                "tone": "jǐ nán",
                "pos": "noun",
                "vi": "Tế Nam"
              },
              {
                "text": "泉水",
                "pinyin": "quan shui",
                "tone": "quán shuǐ",
                "pos": "noun",
                "vi": "nước suối"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji nan quan shui",
            "tone": "jǐ nán quán shuǐ"
          },
          {
            "stage": "phrase",
            "vi": "nước suối trong vắt",
            "hanzi": "清澈的泉水",
            "words": [
              {
                "text": "清澈",
                "pinyin": "qing che",
                "tone": "qīng chè",
                "pos": "adj",
                "vi": "trong vắt"
              },
              {
                "text": "泉水",
                "pinyin": "quan shui",
                "tone": "quán shuǐ",
                "pos": "noun",
                "vi": "nước suối"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "qing che quan shui",
            "tone": "qīng chè quán shuǐ"
          },
          {
            "stage": "phrase",
            "vi": "thành phố nổi tiếng",
            "hanzi": "著名城市",
            "words": [
              {
                "text": "著名",
                "pinyin": "zhu ming",
                "tone": "zhù míng",
                "pos": "adj",
                "vi": "nổi tiếng"
              },
              {
                "text": "城市",
                "pinyin": "cheng shi",
                "tone": "chéng shì",
                "pos": "noun",
                "vi": "thành phố"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zhu ming cheng shi",
            "tone": "zhù míng chéng shì"
          },
          {
            "stage": "phrase",
            "vi": "bảo vệ môi trường",
            "hanzi": "保护环境",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              },
              {
                "text": "环境",
                "pinyin": "huan jing",
                "tone": "huán jìng",
                "pos": "noun",
                "vi": "môi trường"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bao hu huan jing",
            "tone": "bǎo hù huán jìng"
          },
          {
            "stage": "phrase",
            "vi": "phong cảnh thiên nhiên",
            "hanzi": "自然风景",
            "words": [
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "thiên nhiên"
              },
              {
                "text": "风景",
                "pinyin": "feng jing",
                "tone": "fēng jǐng",
                "pos": "noun",
                "vi": "phong cảnh"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "zi ran feng jing",
            "tone": "zì rán fēng jǐng"
          },
          {
            "stage": "sentence",
            "vi": "Tế Nam nổi tiếng nhờ các dòng suối.",
            "hanzi": "济南因为泉水而著名",
            "words": [
              {
                "text": "济南",
                "pinyin": "ji nan",
                "tone": "jǐ nán",
                "pos": "noun",
                "vi": "Tế Nam"
              },
              {
                "text": "泉水",
                "pinyin": "quan shui",
                "tone": "quán shuǐ",
                "pos": "noun",
                "vi": "nước suối"
              },
              {
                "text": "著名",
                "pinyin": "zhu ming",
                "tone": "zhù míng",
                "pos": "adj",
                "vi": "nổi tiếng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "ji nan quan shui zhu ming",
            "tone": "jǐ nán quán shuǐ zhù míng"
          },
          {
            "stage": "sentence",
            "vi": "Nước suối trong vắt thu hút rất nhiều du khách.",
            "hanzi": "清澈的泉水吸引了很多游客",
            "words": [
              {
                "text": "清澈",
                "pinyin": "qing che",
                "tone": "qīng chè",
                "pos": "adj",
                "vi": "trong vắt"
              },
              {
                "text": "泉水",
                "pinyin": "quan shui",
                "tone": "quán shuǐ",
                "pos": "noun",
                "vi": "nước suối"
              },
              {
                "text": "游客",
                "pinyin": "you ke",
                "tone": "yóu kè",
                "pos": "noun",
                "vi": "du khách"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "qing che quan shui you ke",
            "tone": "qīng chè quán shuǐ yóu kè"
          },
          {
            "stage": "sentence",
            "vi": "Suối nước không chỉ là cảnh thiên nhiên mà còn là một phần văn hóa đô thị.",
            "hanzi": "泉水不仅是自然风景也是城市文化的一部分",
            "words": [
              {
                "text": "泉水",
                "pinyin": "quan shui",
                "tone": "quán shuǐ",
                "pos": "noun",
                "vi": "nước suối"
              },
              {
                "text": "自然",
                "pinyin": "zi ran",
                "tone": "zì rán",
                "pos": "noun",
                "vi": "thiên nhiên"
              },
              {
                "text": "风景",
                "pinyin": "feng jing",
                "tone": "fēng jǐng",
                "pos": "noun",
                "vi": "phong cảnh"
              },
              {
                "text": "城市",
                "pinyin": "cheng shi",
                "tone": "chéng shì",
                "pos": "noun",
                "vi": "thành phố"
              },
              {
                "text": "文化",
                "pinyin": "wen hua",
                "tone": "wén huà",
                "pos": "noun",
                "vi": "văn hóa"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "quan shui zi ran feng jing cheng shi wen hua",
            "tone": "quán shuǐ zì rán fēng jǐng chéng shì wén huà"
          },
          {
            "stage": "sentence",
            "vi": "Bảo vệ suối nước chính là bảo vệ môi trường của thành phố này.",
            "hanzi": "保护泉水就是保护这座城市的环境",
            "words": [
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              },
              {
                "text": "泉水",
                "pinyin": "quan shui",
                "tone": "quán shuǐ",
                "pos": "noun",
                "vi": "nước suối"
              },
              {
                "text": "城市",
                "pinyin": "cheng shi",
                "tone": "chéng shì",
                "pos": "noun",
                "vi": "thành phố"
              },
              {
                "text": "环境",
                "pinyin": "huan jing",
                "tone": "huán jìng",
                "pos": "noun",
                "vi": "môi trường"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bao hu quan shui cheng shi huan jing",
            "tone": "bǎo hù quán shuǐ chéng shì huán jìng"
          },
          {
            "stage": "mixed",
            "vi": "Suối nước, nổi tiếng, du khách và bảo vệ.",
            "hanzi": "泉水著名游客保护",
            "words": [
              {
                "text": "泉水",
                "pinyin": "quan shui",
                "tone": "quán shuǐ",
                "pos": "noun",
                "vi": "nước suối"
              },
              {
                "text": "著名",
                "pinyin": "zhu ming",
                "tone": "zhù míng",
                "pos": "adj",
                "vi": "nổi tiếng"
              },
              {
                "text": "游客",
                "pinyin": "you ke",
                "tone": "yóu kè",
                "pos": "noun",
                "vi": "du khách"
              },
              {
                "text": "保护",
                "pinyin": "bao hu",
                "tone": "bǎo hù",
                "pos": "verb",
                "vi": "bảo vệ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "quan shui zhu ming you ke bao hu",
            "tone": "quán shuǐ zhù míng yóu kè bǎo hù"
          }
        ]
      },
      {
        "id": "hsk5-l6",
        "no": 6,
        "titleZh": "除夕的由来",
        "titleVi": "Nguồn gốc của đêm giao thừa",
        "items": [
          {
            "stage": "word",
            "vi": "đêm giao thừa",
            "hanzi": "除夕",
            "words": [
              {
                "text": "除夕",
                "pinyin": "chu xi",
                "tone": "chú xī",
                "pos": "noun",
                "vi": "đêm giao thừa"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chu xi",
            "tone": "chú xī"
          },
          {
            "stage": "word",
            "vi": "Tết Nguyên đán",
            "hanzi": "春节",
            "words": [
              {
                "text": "春节",
                "pinyin": "chun jie",
                "tone": "chūn jié",
                "pos": "noun",
                "vi": "Tết Nguyên đán"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chun jie",
            "tone": "chūn jié"
          },
          {
            "stage": "word",
            "vi": "nguồn gốc",
            "hanzi": "由来",
            "words": [
              {
                "text": "由来",
                "pinyin": "you lai",
                "tone": "yóu lái",
                "pos": "noun",
                "vi": "nguồn gốc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "you lai",
            "tone": "yóu lái"
          },
          {
            "stage": "word",
            "vi": "truyền thuyết",
            "hanzi": "传说",
            "words": [
              {
                "text": "传说",
                "pinyin": "chuan shuo",
                "tone": "chuán shuō",
                "pos": "noun",
                "vi": "truyền thuyết"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuan shuo",
            "tone": "chuán shuō"
          },
          {
            "stage": "word",
            "vi": "quái vật Niên",
            "hanzi": "年兽",
            "words": [
              {
                "text": "年兽",
                "pinyin": "nian shou",
                "tone": "nián shòu",
                "pos": "noun",
                "vi": "quái vật Niên"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "nian shou",
            "tone": "nián shòu"
          },
          {
            "stage": "word",
            "vi": "pháo",
            "hanzi": "鞭炮",
            "words": [
              {
                "text": "鞭炮",
                "pinyin": "bian pao",
                "tone": "biān pào",
                "pos": "noun",
                "vi": "pháo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bian pao",
            "tone": "biān pào"
          },
          {
            "stage": "word",
            "vi": "phong tục",
            "hanzi": "习俗",
            "words": [
              {
                "text": "习俗",
                "pinyin": "xi su",
                "tone": "xí sú",
                "pos": "noun",
                "vi": "phong tục"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "xi su",
            "tone": "xí sú"
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
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuan tong",
            "tone": "chuán tǒng"
          },
          {
            "stage": "word",
            "vi": "sợ",
            "hanzi": "害怕",
            "words": [
              {
                "text": "害怕",
                "pinyin": "hai pa",
                "tone": "hài pà",
                "pos": "verb",
                "vi": "sợ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hai pa",
            "tone": "hài pà"
          },
          {
            "stage": "word",
            "vi": "chúc mừng, ăn mừng",
            "hanzi": "庆祝",
            "words": [
              {
                "text": "庆祝",
                "pinyin": "qing zhu",
                "tone": "qìng zhù",
                "pos": "verb",
                "vi": "chúc mừng, ăn mừng"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "qing zhu",
            "tone": "qìng zhù"
          },
          {
            "stage": "word",
            "vi": "náo nhiệt",
            "hanzi": "热闹",
            "words": [
              {
                "text": "热闹",
                "pinyin": "re nao",
                "tone": "rè nào",
                "pos": "adj",
                "vi": "náo nhiệt"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "re nao",
            "tone": "rè nào"
          },
          {
            "stage": "word",
            "vi": "sum họp",
            "hanzi": "团圆",
            "words": [
              {
                "text": "团圆",
                "pinyin": "tuan yuan",
                "tone": "tuán yuán",
                "pos": "adj",
                "vi": "sum họp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tuan yuan",
            "tone": "tuán yuán"
          },
          {
            "stage": "phrase",
            "vi": "nguồn gốc đêm giao thừa",
            "hanzi": "除夕的由来",
            "words": [
              {
                "text": "除夕",
                "pinyin": "chu xi",
                "tone": "chú xī",
                "pos": "noun",
                "vi": "đêm giao thừa"
              },
              {
                "text": "由来",
                "pinyin": "you lai",
                "tone": "yóu lái",
                "pos": "noun",
                "vi": "nguồn gốc"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chu xi you lai",
            "tone": "chú xī yóu lái"
          },
          {
            "stage": "phrase",
            "vi": "phong tục Tết Nguyên đán",
            "hanzi": "春节习俗",
            "words": [
              {
                "text": "春节",
                "pinyin": "chun jie",
                "tone": "chūn jié",
                "pos": "noun",
                "vi": "Tết Nguyên đán"
              },
              {
                "text": "习俗",
                "pinyin": "xi su",
                "tone": "xí sú",
                "pos": "noun",
                "vi": "phong tục"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chun jie xi su",
            "tone": "chūn jié xí sú"
          },
          {
            "stage": "phrase",
            "vi": "đốt pháo",
            "hanzi": "放鞭炮",
            "words": [
              {
                "text": "鞭炮",
                "pinyin": "bian pao",
                "tone": "biān pào",
                "pos": "noun",
                "vi": "pháo"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bian pao",
            "tone": "biān pào"
          },
          {
            "stage": "phrase",
            "vi": "sợ màu đỏ",
            "hanzi": "害怕红色",
            "words": [
              {
                "text": "害怕",
                "pinyin": "hai pa",
                "tone": "hài pà",
                "pos": "verb",
                "vi": "sợ"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "hai pa",
            "tone": "hài pà"
          },
          {
            "stage": "phrase",
            "vi": "cả nhà sum họp",
            "hanzi": "全家团圆",
            "words": [
              {
                "text": "团圆",
                "pinyin": "tuan yuan",
                "tone": "tuán yuán",
                "pos": "adj",
                "vi": "sum họp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "tuan yuan",
            "tone": "tuán yuán"
          },
          {
            "stage": "sentence",
            "vi": "Đêm giao thừa là buổi tối quan trọng nhất trước Tết Nguyên đán.",
            "hanzi": "除夕是春节前最重要的晚上",
            "words": [
              {
                "text": "除夕",
                "pinyin": "chu xi",
                "tone": "chú xī",
                "pos": "noun",
                "vi": "đêm giao thừa"
              },
              {
                "text": "春节",
                "pinyin": "chun jie",
                "tone": "chūn jié",
                "pos": "noun",
                "vi": "Tết Nguyên đán"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chu xi chun jie",
            "tone": "chú xī chūn jié"
          },
          {
            "stage": "sentence",
            "vi": "Về nguồn gốc đêm giao thừa có một truyền thuyết thú vị.",
            "hanzi": "关于除夕的由来有一个有趣的传说",
            "words": [
              {
                "text": "除夕",
                "pinyin": "chu xi",
                "tone": "chú xī",
                "pos": "noun",
                "vi": "đêm giao thừa"
              },
              {
                "text": "由来",
                "pinyin": "you lai",
                "tone": "yóu lái",
                "pos": "noun",
                "vi": "nguồn gốc"
              },
              {
                "text": "传说",
                "pinyin": "chuan shuo",
                "tone": "chuán shuō",
                "pos": "noun",
                "vi": "truyền thuyết"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chu xi you lai chuan shuo",
            "tone": "chú xī yóu lái chuán shuō"
          },
          {
            "stage": "sentence",
            "vi": "Người ta dùng màu đỏ và pháo để xua đuổi quái vật Niên.",
            "hanzi": "人们用红色和鞭炮赶走年兽",
            "words": [
              {
                "text": "鞭炮",
                "pinyin": "bian pao",
                "tone": "biān pào",
                "pos": "noun",
                "vi": "pháo"
              },
              {
                "text": "年兽",
                "pinyin": "nian shou",
                "tone": "nián shòu",
                "pos": "noun",
                "vi": "quái vật Niên"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "bian pao nian shou",
            "tone": "biān pào nián shòu"
          },
          {
            "stage": "sentence",
            "vi": "Ngày nay, ý nghĩa quan trọng hơn của đêm giao thừa là cả nhà sum họp.",
            "hanzi": "今天除夕更重要的意义是全家团圆",
            "words": [
              {
                "text": "除夕",
                "pinyin": "chu xi",
                "tone": "chú xī",
                "pos": "noun",
                "vi": "đêm giao thừa"
              },
              {
                "text": "团圆",
                "pinyin": "tuan yuan",
                "tone": "tuán yuán",
                "pos": "adj",
                "vi": "sum họp"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chu xi tuan yuan",
            "tone": "chú xī tuán yuán"
          },
          {
            "stage": "mixed",
            "vi": "Truyền thuyết, phong tục và ý nghĩa ngày nay.",
            "hanzi": "传说习俗今天的意义",
            "words": [
              {
                "text": "传说",
                "pinyin": "chuan shuo",
                "tone": "chuán shuō",
                "pos": "noun",
                "vi": "truyền thuyết"
              },
              {
                "text": "习俗",
                "pinyin": "xi su",
                "tone": "xí sú",
                "pos": "noun",
                "vi": "phong tục"
              }
            ],
            "source": "Textbook alignment candidate - needs human PDF/OCR verification",
            "pinyin": "chuan shuo xi su",
            "tone": "chuán shuō xí sú"
          }
        ]
      }
    ]
  }
};
});
