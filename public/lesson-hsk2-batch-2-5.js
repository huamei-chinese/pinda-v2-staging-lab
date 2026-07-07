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
      "id": "hsk2-l2",
      "no": 2,
      "titleZh": "今天在教室上课",
      "titleVi": "Hôm nay học trong lớp",
      "items": [
        {
          "stage": "word",
          "vi": "hôm nay",
          "hanzi": "今天",
          "words": [
            {
              "text": "今天",
              "pinyin": "jin tian",
              "tone": "jin tian",
              "pos": "noun",
              "vi": "hôm nay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "jin tian",
          "tone": "jin tian"
        },
        {
          "stage": "word",
          "vi": "lên lớp",
          "hanzi": "上课",
          "words": [
            {
              "text": "上课",
              "pinyin": "shang ke",
              "tone": "shang ke",
              "pos": "verb",
              "vi": "lên lớp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "shang ke",
          "tone": "shang ke"
        },
        {
          "stage": "word",
          "vi": "phòng học",
          "hanzi": "教室",
          "words": [
            {
              "text": "教室",
              "pinyin": "jiao shi",
              "tone": "jiao shi",
              "pos": "noun",
              "vi": "phòng học"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "jiao shi",
          "tone": "jiao shi"
        },
        {
          "stage": "word",
          "vi": "giáo viên",
          "hanzi": "老师",
          "words": [
            {
              "text": "老师",
              "pinyin": "lao shi",
              "tone": "lao shi",
              "pos": "noun",
              "vi": "giáo viên"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "lao shi",
          "tone": "lao shi"
        },
        {
          "stage": "word",
          "vi": "vấn đề",
          "hanzi": "问题",
          "words": [
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wen ti",
              "pos": "noun",
              "vi": "vấn đề"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wen ti",
          "tone": "wen ti"
        },
        {
          "stage": "word",
          "vi": "trả lời",
          "hanzi": "回答",
          "words": [
            {
              "text": "回答",
              "pinyin": "hui da",
              "tone": "hui da",
              "pos": "verb",
              "vi": "trả lời"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "hui da",
          "tone": "hui da"
        },
        {
          "stage": "word",
          "vi": "chuẩn bị",
          "hanzi": "准备",
          "words": [
            {
              "text": "准备",
              "pinyin": "zhun bei",
              "tone": "zhun bei",
              "pos": "verb",
              "vi": "chuẩn bị"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "zhun bei",
          "tone": "zhun bei"
        },
        {
          "stage": "word",
          "vi": "bài tập",
          "hanzi": "作业",
          "words": [
            {
              "text": "作业",
              "pinyin": "zuo ye",
              "tone": "zuo ye",
              "pos": "noun",
              "vi": "bài tập"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "zuo ye",
          "tone": "zuo ye"
        },
        {
          "stage": "word",
          "vi": "trước đây",
          "hanzi": "以前",
          "words": [
            {
              "text": "以前",
              "pinyin": "yi qian",
              "tone": "yi qian",
              "pos": "noun",
              "vi": "trước đây"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "yi qian",
          "tone": "yi qian"
        },
        {
          "stage": "word",
          "vi": "sau này",
          "hanzi": "以后",
          "words": [
            {
              "text": "以后",
              "pinyin": "yi hou",
              "tone": "yi hou",
              "pos": "noun",
              "vi": "sau này"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "yi hou",
          "tone": "yi hou"
        },
        {
          "stage": "phrase",
          "vi": "hôm nay lên lớp",
          "hanzi": "今天上课",
          "words": [
            {
              "text": "今天",
              "pinyin": "jin tian",
              "tone": "jin tian",
              "pos": "noun",
              "vi": "hôm nay"
            },
            {
              "text": "上课",
              "pinyin": "shang ke",
              "tone": "shang ke",
              "pos": "verb",
              "vi": "lên lớp"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "jin tian shang ke",
          "tone": "jin tian shang ke"
        },
        {
          "stage": "phrase",
          "vi": "phòng học giáo viên",
          "hanzi": "教室老师",
          "words": [
            {
              "text": "教室",
              "pinyin": "jiao shi",
              "tone": "jiao shi",
              "pos": "noun",
              "vi": "phòng học"
            },
            {
              "text": "老师",
              "pinyin": "lao shi",
              "tone": "lao shi",
              "pos": "noun",
              "vi": "giáo viên"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "jiao shi lao shi",
          "tone": "jiao shi lao shi"
        },
        {
          "stage": "phrase",
          "vi": "trả lời vấn đề",
          "hanzi": "问题的回答",
          "words": [
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wen ti",
              "pos": "noun",
              "vi": "vấn đề"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "回答",
              "pinyin": "hui da",
              "tone": "hui da",
              "pos": "verb",
              "vi": "trả lời"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wen ti de hui da",
          "tone": "wen ti de hui da"
        },
        {
          "stage": "phrase",
          "vi": "trước đây sau này",
          "hanzi": "以前以后",
          "words": [
            {
              "text": "以前",
              "pinyin": "yi qian",
              "tone": "yi qian",
              "pos": "noun",
              "vi": "trước đây"
            },
            {
              "text": "以后",
              "pinyin": "yi hou",
              "tone": "yi hou",
              "pos": "noun",
              "vi": "sau này"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "yi qian yi hou",
          "tone": "yi qian yi hou"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn phòng học giáo viên.",
          "hanzi": "我想教室老师。",
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
              "text": "教室",
              "pinyin": "jiao shi",
              "tone": "jiao shi",
              "pos": "noun",
              "vi": "phòng học"
            },
            {
              "text": "老师",
              "pinyin": "lao shi",
              "tone": "lao shi",
              "pos": "noun",
              "vi": "giáo viên"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wo xiang jiao shi lao shi",
          "tone": "wo xiang jiao shi lao shi"
        },
        {
          "stage": "sentence",
          "vi": "hôm nay lên lớp rất giáo viên.",
          "hanzi": "今天上课很老师。",
          "words": [
            {
              "text": "今天",
              "pinyin": "jin tian",
              "tone": "jin tian",
              "pos": "noun",
              "vi": "hôm nay"
            },
            {
              "text": "上课",
              "pinyin": "shang ke",
              "tone": "shang ke",
              "pos": "verb",
              "vi": "lên lớp"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "老师",
              "pinyin": "lao shi",
              "tone": "lao shi",
              "pos": "noun",
              "vi": "giáo viên"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "jin tian shang ke hen lao shi",
          "tone": "jin tian shang ke hen lao shi"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng bài tập vấn đề.",
          "hanzi": "请作业问题。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "作业",
              "pinyin": "zuo ye",
              "tone": "zuo ye",
              "pos": "noun",
              "vi": "bài tập"
            },
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wen ti",
              "pos": "noun",
              "vi": "vấn đề"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "qing zuo ye wen ti",
          "tone": "qing zuo ye wen ti"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi trước đây sau này.",
          "hanzi": "我们以前以后。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "以前",
              "pinyin": "yi qian",
              "tone": "yi qian",
              "pos": "noun",
              "vi": "trước đây"
            },
            {
              "text": "以后",
              "pinyin": "yi hou",
              "tone": "yi hou",
              "pos": "noun",
              "vi": "sau này"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wo men yi qian yi hou",
          "tone": "wo men yi qian yi hou"
        },
        {
          "stage": "mixed",
          "vi": "trả lời vấn đề ở chuẩn bị.",
          "hanzi": "问题的回答在准备。",
          "words": [
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wen ti",
              "pos": "noun",
              "vi": "vấn đề"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "回答",
              "pinyin": "hui da",
              "tone": "hui da",
              "pos": "verb",
              "vi": "trả lời"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "准备",
              "pinyin": "zhun bei",
              "tone": "zhun bei",
              "pos": "verb",
              "vi": "chuẩn bị"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wen ti de hui da zai zhun bei",
          "tone": "wen ti de hui da zai zhun bei"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi lên lớp phòng học.",
          "hanzi": "我们去上课教室。",
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
              "text": "上课",
              "pinyin": "shang ke",
              "tone": "shang ke",
              "pos": "verb",
              "vi": "lên lớp"
            },
            {
              "text": "教室",
              "pinyin": "jiao shi",
              "tone": "jiao shi",
              "pos": "noun",
              "vi": "phòng học"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wo men qu shang ke jiao shi",
          "tone": "wo men qu shang ke jiao shi"
        }
      ]
    },
    {
      "id": "hsk2-l3",
      "no": 3,
      "titleZh": "一起在饭店点菜",
      "titleVi": "Cùng gọi món ở nhà hàng",
      "items": [
        {
          "stage": "word",
          "vi": "nhà hàng",
          "hanzi": "饭店",
          "words": [
            {
              "text": "饭店",
              "pinyin": "fan dian",
              "tone": "fan dian",
              "pos": "noun",
              "vi": "nhà hàng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "fan dian",
          "tone": "fan dian"
        },
        {
          "stage": "word",
          "vi": "thực đơn",
          "hanzi": "菜单",
          "words": [
            {
              "text": "菜单",
              "pinyin": "cai dan",
              "tone": "cai dan",
              "pos": "noun",
              "vi": "thực đơn"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "cai dan",
          "tone": "cai dan"
        },
        {
          "stage": "word",
          "vi": "thịt bò",
          "hanzi": "牛肉",
          "words": [
            {
              "text": "牛肉",
              "pinyin": "niu rou",
              "tone": "niu rou",
              "pos": "noun",
              "vi": "thịt bò"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "niu rou",
          "tone": "niu rou"
        },
        {
          "stage": "word",
          "vi": "cơm",
          "hanzi": "米饭",
          "words": [
            {
              "text": "米饭",
              "pinyin": "mi fan",
              "tone": "mi fan",
              "pos": "noun",
              "vi": "cơm"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "mi fan",
          "tone": "mi fan"
        },
        {
          "stage": "word",
          "vi": "trứng gà",
          "hanzi": "鸡蛋",
          "words": [
            {
              "text": "鸡蛋",
              "pinyin": "ji dan",
              "tone": "ji dan",
              "pos": "noun",
              "vi": "trứng gà"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "ji dan",
          "tone": "ji dan"
        },
        {
          "stage": "word",
          "vi": "trái cây",
          "hanzi": "水果",
          "words": [
            {
              "text": "水果",
              "pinyin": "shui guo",
              "tone": "shui guo",
              "pos": "noun",
              "vi": "trái cây"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "shui guo",
          "tone": "shui guo"
        },
        {
          "stage": "word",
          "vi": "cùng nhau",
          "hanzi": "一起",
          "words": [
            {
              "text": "一起",
              "pinyin": "yi qi",
              "tone": "yi qi",
              "pos": "adv",
              "vi": "cùng nhau"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "yi qi",
          "tone": "yi qi"
        },
        {
          "stage": "word",
          "vi": "gọi món",
          "hanzi": "点菜",
          "words": [
            {
              "text": "点菜",
              "pinyin": "dian cai",
              "tone": "dian cai",
              "pos": "verb",
              "vi": "gọi món"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "dian cai",
          "tone": "dian cai"
        },
        {
          "stage": "word",
          "vi": "rẻ",
          "hanzi": "便宜",
          "words": [
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "rẻ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "pian yi",
          "tone": "pian yi"
        },
        {
          "stage": "word",
          "vi": "ngon",
          "hanzi": "好吃",
          "words": [
            {
              "text": "好吃",
              "pinyin": "hao chi",
              "tone": "hao chi",
              "pos": "adj",
              "vi": "ngon"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "hao chi",
          "tone": "hao chi"
        },
        {
          "stage": "phrase",
          "vi": "nhà hàng thực đơn",
          "hanzi": "饭店菜单",
          "words": [
            {
              "text": "饭店",
              "pinyin": "fan dian",
              "tone": "fan dian",
              "pos": "noun",
              "vi": "nhà hàng"
            },
            {
              "text": "菜单",
              "pinyin": "cai dan",
              "tone": "cai dan",
              "pos": "noun",
              "vi": "thực đơn"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "fan dian cai dan",
          "tone": "fan dian cai dan"
        },
        {
          "stage": "phrase",
          "vi": "thịt bò cơm",
          "hanzi": "牛肉米饭",
          "words": [
            {
              "text": "牛肉",
              "pinyin": "niu rou",
              "tone": "niu rou",
              "pos": "noun",
              "vi": "thịt bò"
            },
            {
              "text": "米饭",
              "pinyin": "mi fan",
              "tone": "mi fan",
              "pos": "noun",
              "vi": "cơm"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "niu rou mi fan",
          "tone": "niu rou mi fan"
        },
        {
          "stage": "phrase",
          "vi": "trái cây trứng gà",
          "hanzi": "鸡蛋的水果",
          "words": [
            {
              "text": "鸡蛋",
              "pinyin": "ji dan",
              "tone": "ji dan",
              "pos": "noun",
              "vi": "trứng gà"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "水果",
              "pinyin": "shui guo",
              "tone": "shui guo",
              "pos": "noun",
              "vi": "trái cây"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "ji dan de shui guo",
          "tone": "ji dan de shui guo"
        },
        {
          "stage": "phrase",
          "vi": "rẻ ngon",
          "hanzi": "便宜好吃",
          "words": [
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "rẻ"
            },
            {
              "text": "好吃",
              "pinyin": "hao chi",
              "tone": "hao chi",
              "pos": "adj",
              "vi": "ngon"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "pian yi hao chi",
          "tone": "pian yi hao chi"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn thịt bò cơm.",
          "hanzi": "我想牛肉米饭。",
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
              "text": "牛肉",
              "pinyin": "niu rou",
              "tone": "niu rou",
              "pos": "noun",
              "vi": "thịt bò"
            },
            {
              "text": "米饭",
              "pinyin": "mi fan",
              "tone": "mi fan",
              "pos": "noun",
              "vi": "cơm"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "wo xiang niu rou mi fan",
          "tone": "wo xiang niu rou mi fan"
        },
        {
          "stage": "sentence",
          "vi": "nhà hàng thực đơn rất cơm.",
          "hanzi": "饭店菜单很米饭。",
          "words": [
            {
              "text": "饭店",
              "pinyin": "fan dian",
              "tone": "fan dian",
              "pos": "noun",
              "vi": "nhà hàng"
            },
            {
              "text": "菜单",
              "pinyin": "cai dan",
              "tone": "cai dan",
              "pos": "noun",
              "vi": "thực đơn"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "米饭",
              "pinyin": "mi fan",
              "tone": "mi fan",
              "pos": "noun",
              "vi": "cơm"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "fan dian cai dan hen mi fan",
          "tone": "fan dian cai dan hen mi fan"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng gọi món trứng gà.",
          "hanzi": "请点菜鸡蛋。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "点菜",
              "pinyin": "dian cai",
              "tone": "dian cai",
              "pos": "verb",
              "vi": "gọi món"
            },
            {
              "text": "鸡蛋",
              "pinyin": "ji dan",
              "tone": "ji dan",
              "pos": "noun",
              "vi": "trứng gà"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "qing dian cai ji dan",
          "tone": "qing dian cai ji dan"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi rẻ ngon.",
          "hanzi": "我们便宜好吃。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "rẻ"
            },
            {
              "text": "好吃",
              "pinyin": "hao chi",
              "tone": "hao chi",
              "pos": "adj",
              "vi": "ngon"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "wo men pian yi hao chi",
          "tone": "wo men pian yi hao chi"
        },
        {
          "stage": "mixed",
          "vi": "trái cây trứng gà ở cùng nhau.",
          "hanzi": "鸡蛋的水果在一起。",
          "words": [
            {
              "text": "鸡蛋",
              "pinyin": "ji dan",
              "tone": "ji dan",
              "pos": "noun",
              "vi": "trứng gà"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "水果",
              "pinyin": "shui guo",
              "tone": "shui guo",
              "pos": "noun",
              "vi": "trái cây"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "一起",
              "pinyin": "yi qi",
              "tone": "yi qi",
              "pos": "adv",
              "vi": "cùng nhau"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "ji dan de shui guo zai yi qi",
          "tone": "ji dan de shui guo zai yi qi"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi thực đơn thịt bò.",
          "hanzi": "我们去菜单牛肉。",
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
              "text": "菜单",
              "pinyin": "cai dan",
              "tone": "cai dan",
              "pos": "noun",
              "vi": "thực đơn"
            },
            {
              "text": "牛肉",
              "pinyin": "niu rou",
              "tone": "niu rou",
              "pos": "noun",
              "vi": "thịt bò"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "wo men qu cai dan niu rou",
          "tone": "wo men qu cai dan niu rou"
        }
      ]
    },
    {
      "id": "hsk2-l4",
      "no": 4,
      "titleZh": "在商店买衣服",
      "titleVi": "Mua quần áo ở cửa hàng",
      "items": [
        {
          "stage": "word",
          "vi": "cửa hàng",
          "hanzi": "商店",
          "words": [
            {
              "text": "商店",
              "pinyin": "shang dian",
              "tone": "shang dian",
              "pos": "noun",
              "vi": "cửa hàng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "shang dian",
          "tone": "shang dian"
        },
        {
          "stage": "word",
          "vi": "quần áo",
          "hanzi": "衣服",
          "words": [
            {
              "text": "衣服",
              "pinyin": "yi fu",
              "tone": "yi fu",
              "pos": "noun",
              "vi": "quần áo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "yi fu",
          "tone": "yi fu"
        },
        {
          "stage": "word",
          "vi": "màu sắc",
          "hanzi": "颜色",
          "words": [
            {
              "text": "颜色",
              "pinyin": "yan se",
              "tone": "yan se",
              "pos": "noun",
              "vi": "màu sắc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "yan se",
          "tone": "yan se"
        },
        {
          "stage": "word",
          "vi": "rẻ",
          "hanzi": "便宜",
          "words": [
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "rẻ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "pian yi",
          "tone": "pian yi"
        },
        {
          "stage": "word",
          "vi": "đắt",
          "hanzi": "贵",
          "words": [
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "gui",
              "pos": "adj",
              "vi": "đắt"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "gui",
          "tone": "gui"
        },
        {
          "stage": "word",
          "vi": "mua",
          "hanzi": "买",
          "words": [
            {
              "text": "买",
              "pinyin": "mai",
              "tone": "mai",
              "pos": "verb",
              "vi": "mua"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "mai",
          "tone": "mai"
        },
        {
          "stage": "word",
          "vi": "bán",
          "hanzi": "卖",
          "words": [
            {
              "text": "卖",
              "pinyin": "mai",
              "tone": "mai",
              "pos": "verb",
              "vi": "bán"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "mai",
          "tone": "mai"
        },
        {
          "stage": "word",
          "vi": "thử xem",
          "hanzi": "试试",
          "words": [
            {
              "text": "试试",
              "pinyin": "shi shi",
              "tone": "shi shi",
              "pos": "verb",
              "vi": "thử xem"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "shi shi",
          "tone": "shi shi"
        },
        {
          "stage": "word",
          "vi": "bên trái",
          "hanzi": "左边",
          "words": [
            {
              "text": "左边",
              "pinyin": "zuo bian",
              "tone": "zuo bian",
              "pos": "noun",
              "vi": "bên trái"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "zuo bian",
          "tone": "zuo bian"
        },
        {
          "stage": "word",
          "vi": "bên phải",
          "hanzi": "右边",
          "words": [
            {
              "text": "右边",
              "pinyin": "you bian",
              "tone": "you bian",
              "pos": "noun",
              "vi": "bên phải"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "you bian",
          "tone": "you bian"
        },
        {
          "stage": "phrase",
          "vi": "cửa hàng quần áo",
          "hanzi": "商店衣服",
          "words": [
            {
              "text": "商店",
              "pinyin": "shang dian",
              "tone": "shang dian",
              "pos": "noun",
              "vi": "cửa hàng"
            },
            {
              "text": "衣服",
              "pinyin": "yi fu",
              "tone": "yi fu",
              "pos": "noun",
              "vi": "quần áo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "shang dian yi fu",
          "tone": "shang dian yi fu"
        },
        {
          "stage": "phrase",
          "vi": "màu sắc rẻ",
          "hanzi": "颜色便宜",
          "words": [
            {
              "text": "颜色",
              "pinyin": "yan se",
              "tone": "yan se",
              "pos": "noun",
              "vi": "màu sắc"
            },
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "rẻ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "yan se pian yi",
          "tone": "yan se pian yi"
        },
        {
          "stage": "phrase",
          "vi": "mua đắt",
          "hanzi": "贵的买",
          "words": [
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "gui",
              "pos": "adj",
              "vi": "đắt"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "买",
              "pinyin": "mai",
              "tone": "mai",
              "pos": "verb",
              "vi": "mua"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "gui de mai",
          "tone": "gui de mai"
        },
        {
          "stage": "phrase",
          "vi": "bên trái bên phải",
          "hanzi": "左边右边",
          "words": [
            {
              "text": "左边",
              "pinyin": "zuo bian",
              "tone": "zuo bian",
              "pos": "noun",
              "vi": "bên trái"
            },
            {
              "text": "右边",
              "pinyin": "you bian",
              "tone": "you bian",
              "pos": "noun",
              "vi": "bên phải"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "zuo bian you bian",
          "tone": "zuo bian you bian"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn màu sắc rẻ.",
          "hanzi": "我想颜色便宜。",
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
              "text": "颜色",
              "pinyin": "yan se",
              "tone": "yan se",
              "pos": "noun",
              "vi": "màu sắc"
            },
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "rẻ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "wo xiang yan se pian yi",
          "tone": "wo xiang yan se pian yi"
        },
        {
          "stage": "sentence",
          "vi": "cửa hàng quần áo rất rẻ.",
          "hanzi": "商店衣服很便宜。",
          "words": [
            {
              "text": "商店",
              "pinyin": "shang dian",
              "tone": "shang dian",
              "pos": "noun",
              "vi": "cửa hàng"
            },
            {
              "text": "衣服",
              "pinyin": "yi fu",
              "tone": "yi fu",
              "pos": "noun",
              "vi": "quần áo"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "rẻ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "shang dian yi fu hen pian yi",
          "tone": "shang dian yi fu hen pian yi"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng thử xem đắt.",
          "hanzi": "请试试贵。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "试试",
              "pinyin": "shi shi",
              "tone": "shi shi",
              "pos": "verb",
              "vi": "thử xem"
            },
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "gui",
              "pos": "adj",
              "vi": "đắt"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "qing shi shi gui",
          "tone": "qing shi shi gui"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi bên trái bên phải.",
          "hanzi": "我们左边右边。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "左边",
              "pinyin": "zuo bian",
              "tone": "zuo bian",
              "pos": "noun",
              "vi": "bên trái"
            },
            {
              "text": "右边",
              "pinyin": "you bian",
              "tone": "you bian",
              "pos": "noun",
              "vi": "bên phải"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "wo men zuo bian you bian",
          "tone": "wo men zuo bian you bian"
        },
        {
          "stage": "mixed",
          "vi": "mua đắt ở bán.",
          "hanzi": "贵的买在卖。",
          "words": [
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "gui",
              "pos": "adj",
              "vi": "đắt"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "买",
              "pinyin": "mai",
              "tone": "mai",
              "pos": "verb",
              "vi": "mua"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "卖",
              "pinyin": "mai",
              "tone": "mai",
              "pos": "verb",
              "vi": "bán"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "gui de mai zai mai",
          "tone": "gui de mai zai mai"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi quần áo màu sắc.",
          "hanzi": "我们去衣服颜色。",
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
              "text": "衣服",
              "pinyin": "yi fu",
              "tone": "yi fu",
              "pos": "noun",
              "vi": "quần áo"
            },
            {
              "text": "颜色",
              "pinyin": "yan se",
              "tone": "yan se",
              "pos": "noun",
              "vi": "màu sắc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "wo men qu yi fu yan se",
          "tone": "wo men qu yi fu yan se"
        }
      ]
    },
    {
      "id": "hsk2-l5",
      "no": 5,
      "titleZh": "回家给妈妈过生日",
      "titleVi": "Về nhà mừng sinh nhật mẹ",
      "items": [
        {
          "stage": "word",
          "vi": "bố",
          "hanzi": "爸爸",
          "words": [
            {
              "text": "爸爸",
              "pinyin": "ba ba",
              "tone": "ba ba",
              "pos": "noun",
              "vi": "bố"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "ba ba",
          "tone": "ba ba"
        },
        {
          "stage": "word",
          "vi": "mẹ",
          "hanzi": "妈妈",
          "words": [
            {
              "text": "妈妈",
              "pinyin": "ma ma",
              "tone": "ma ma",
              "pos": "noun",
              "vi": "mẹ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "ma ma",
          "tone": "ma ma"
        },
        {
          "stage": "word",
          "vi": "trẻ em",
          "hanzi": "孩子",
          "words": [
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hai zi",
              "pos": "noun",
              "vi": "trẻ em"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "hai zi",
          "tone": "hai zi"
        },
        {
          "stage": "word",
          "vi": "em gái",
          "hanzi": "妹妹",
          "words": [
            {
              "text": "妹妹",
              "pinyin": "mei mei",
              "tone": "mei mei",
              "pos": "noun",
              "vi": "em gái"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "mei mei",
          "tone": "mei mei"
        },
        {
          "stage": "word",
          "vi": "sinh nhật",
          "hanzi": "生日",
          "words": [
            {
              "text": "生日",
              "pinyin": "sheng ri",
              "tone": "sheng ri",
              "pos": "noun",
              "vi": "sinh nhật"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "sheng ri",
          "tone": "sheng ri"
        },
        {
          "stage": "word",
          "vi": "quà tặng",
          "hanzi": "礼物",
          "words": [
            {
              "text": "礼物",
              "pinyin": "li wu",
              "tone": "li wu",
              "pos": "noun",
              "vi": "quà tặng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "li wu",
          "tone": "li wu"
        },
        {
          "stage": "word",
          "vi": "vui vẻ",
          "hanzi": "快乐",
          "words": [
            {
              "text": "快乐",
              "pinyin": "kuai le",
              "tone": "kuai le",
              "pos": "adj",
              "vi": "vui vẻ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "kuai le",
          "tone": "kuai le"
        },
        {
          "stage": "word",
          "vi": "về nhà",
          "hanzi": "回家",
          "words": [
            {
              "text": "回家",
              "pinyin": "hui jia",
              "tone": "hui jia",
              "pos": "verb",
              "vi": "về nhà"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "hui jia",
          "tone": "hui jia"
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
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "xiu xi",
          "tone": "xiu xi"
        },
        {
          "stage": "word",
          "vi": "giúp đỡ",
          "hanzi": "帮忙",
          "words": [
            {
              "text": "帮忙",
              "pinyin": "bang mang",
              "tone": "bang mang",
              "pos": "verb",
              "vi": "giúp đỡ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "bang mang",
          "tone": "bang mang"
        },
        {
          "stage": "phrase",
          "vi": "bố mẹ",
          "hanzi": "爸爸妈妈",
          "words": [
            {
              "text": "爸爸",
              "pinyin": "ba ba",
              "tone": "ba ba",
              "pos": "noun",
              "vi": "bố"
            },
            {
              "text": "妈妈",
              "pinyin": "ma ma",
              "tone": "ma ma",
              "pos": "noun",
              "vi": "mẹ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "ba ba ma ma",
          "tone": "ba ba ma ma"
        },
        {
          "stage": "phrase",
          "vi": "trẻ em em gái",
          "hanzi": "孩子妹妹",
          "words": [
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hai zi",
              "pos": "noun",
              "vi": "trẻ em"
            },
            {
              "text": "妹妹",
              "pinyin": "mei mei",
              "tone": "mei mei",
              "pos": "noun",
              "vi": "em gái"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "hai zi mei mei",
          "tone": "hai zi mei mei"
        },
        {
          "stage": "phrase",
          "vi": "quà tặng sinh nhật",
          "hanzi": "生日的礼物",
          "words": [
            {
              "text": "生日",
              "pinyin": "sheng ri",
              "tone": "sheng ri",
              "pos": "noun",
              "vi": "sinh nhật"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "礼物",
              "pinyin": "li wu",
              "tone": "li wu",
              "pos": "noun",
              "vi": "quà tặng"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "sheng ri de li wu",
          "tone": "sheng ri de li wu"
        },
        {
          "stage": "phrase",
          "vi": "nghỉ ngơi giúp đỡ",
          "hanzi": "休息帮忙",
          "words": [
            {
              "text": "休息",
              "pinyin": "xiu xi",
              "tone": "xiu xi",
              "pos": "verb",
              "vi": "nghỉ ngơi"
            },
            {
              "text": "帮忙",
              "pinyin": "bang mang",
              "tone": "bang mang",
              "pos": "verb",
              "vi": "giúp đỡ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "xiu xi bang mang",
          "tone": "xiu xi bang mang"
        },
        {
          "stage": "sentence",
          "vi": "Tôi muốn trẻ em em gái.",
          "hanzi": "我想孩子妹妹。",
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
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hai zi",
              "pos": "noun",
              "vi": "trẻ em"
            },
            {
              "text": "妹妹",
              "pinyin": "mei mei",
              "tone": "mei mei",
              "pos": "noun",
              "vi": "em gái"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "wo xiang hai zi mei mei",
          "tone": "wo xiang hai zi mei mei"
        },
        {
          "stage": "sentence",
          "vi": "bố mẹ rất em gái.",
          "hanzi": "爸爸妈妈很妹妹。",
          "words": [
            {
              "text": "爸爸",
              "pinyin": "ba ba",
              "tone": "ba ba",
              "pos": "noun",
              "vi": "bố"
            },
            {
              "text": "妈妈",
              "pinyin": "ma ma",
              "tone": "ma ma",
              "pos": "noun",
              "vi": "mẹ"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rất"
            },
            {
              "text": "妹妹",
              "pinyin": "mei mei",
              "tone": "mei mei",
              "pos": "noun",
              "vi": "em gái"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "ba ba ma ma hen mei mei",
          "tone": "ba ba ma ma hen mei mei"
        },
        {
          "stage": "sentence",
          "vi": "Vui lòng về nhà sinh nhật.",
          "hanzi": "请回家生日。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui lòng"
            },
            {
              "text": "回家",
              "pinyin": "hui jia",
              "tone": "hui jia",
              "pos": "verb",
              "vi": "về nhà"
            },
            {
              "text": "生日",
              "pinyin": "sheng ri",
              "tone": "sheng ri",
              "pos": "noun",
              "vi": "sinh nhật"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "qing hui jia sheng ri",
          "tone": "qing hui jia sheng ri"
        },
        {
          "stage": "sentence",
          "vi": "Chúng tôi nghỉ ngơi giúp đỡ.",
          "hanzi": "我们休息帮忙。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chúng tôi"
            },
            {
              "text": "休息",
              "pinyin": "xiu xi",
              "tone": "xiu xi",
              "pos": "verb",
              "vi": "nghỉ ngơi"
            },
            {
              "text": "帮忙",
              "pinyin": "bang mang",
              "tone": "bang mang",
              "pos": "verb",
              "vi": "giúp đỡ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "wo men xiu xi bang mang",
          "tone": "wo men xiu xi bang mang"
        },
        {
          "stage": "mixed",
          "vi": "quà tặng sinh nhật ở vui vẻ.",
          "hanzi": "生日的礼物在快乐。",
          "words": [
            {
              "text": "生日",
              "pinyin": "sheng ri",
              "tone": "sheng ri",
              "pos": "noun",
              "vi": "sinh nhật"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "trợ từ sở hữu"
            },
            {
              "text": "礼物",
              "pinyin": "li wu",
              "tone": "li wu",
              "pos": "noun",
              "vi": "quà tặng"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "ở tại"
            },
            {
              "text": "快乐",
              "pinyin": "kuai le",
              "tone": "kuai le",
              "pos": "adj",
              "vi": "vui vẻ"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "sheng ri de li wu zai kuai le",
          "tone": "sheng ri de li wu zai kuai le"
        },
        {
          "stage": "mixed",
          "vi": "Chúng tôi đi mẹ trẻ em.",
          "hanzi": "我们去妈妈孩子。",
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
              "text": "妈妈",
              "pinyin": "ma ma",
              "tone": "ma ma",
              "pos": "noun",
              "vi": "mẹ"
            },
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hai zi",
              "pos": "noun",
              "vi": "trẻ em"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "wo men qu ma ma hai zi",
          "tone": "wo men qu ma ma hai zi"
        }
      ]
    }
  ]
};
});
