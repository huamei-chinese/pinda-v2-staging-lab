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
          "vi": "hom nay",
          "hanzi": "今天",
          "words": [
            {
              "text": "今天",
              "pinyin": "jin tian",
              "tone": "jin tian",
              "pos": "noun",
              "vi": "hom nay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "jin tian",
          "tone": "jin tian"
        },
        {
          "stage": "word",
          "vi": "len lop",
          "hanzi": "上课",
          "words": [
            {
              "text": "上课",
              "pinyin": "shang ke",
              "tone": "shang ke",
              "pos": "verb",
              "vi": "len lop"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "shang ke",
          "tone": "shang ke"
        },
        {
          "stage": "word",
          "vi": "phong hoc",
          "hanzi": "教室",
          "words": [
            {
              "text": "教室",
              "pinyin": "jiao shi",
              "tone": "jiao shi",
              "pos": "noun",
              "vi": "phong hoc"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "jiao shi",
          "tone": "jiao shi"
        },
        {
          "stage": "word",
          "vi": "giao vien",
          "hanzi": "老师",
          "words": [
            {
              "text": "老师",
              "pinyin": "lao shi",
              "tone": "lao shi",
              "pos": "noun",
              "vi": "giao vien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "lao shi",
          "tone": "lao shi"
        },
        {
          "stage": "word",
          "vi": "van de",
          "hanzi": "问题",
          "words": [
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wen ti",
              "pos": "noun",
              "vi": "van de"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wen ti",
          "tone": "wen ti"
        },
        {
          "stage": "word",
          "vi": "tra loi",
          "hanzi": "回答",
          "words": [
            {
              "text": "回答",
              "pinyin": "hui da",
              "tone": "hui da",
              "pos": "verb",
              "vi": "tra loi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "hui da",
          "tone": "hui da"
        },
        {
          "stage": "word",
          "vi": "chuan bi",
          "hanzi": "准备",
          "words": [
            {
              "text": "准备",
              "pinyin": "zhun bei",
              "tone": "zhun bei",
              "pos": "verb",
              "vi": "chuan bi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "zhun bei",
          "tone": "zhun bei"
        },
        {
          "stage": "word",
          "vi": "bai tap",
          "hanzi": "作业",
          "words": [
            {
              "text": "作业",
              "pinyin": "zuo ye",
              "tone": "zuo ye",
              "pos": "noun",
              "vi": "bai tap"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "zuo ye",
          "tone": "zuo ye"
        },
        {
          "stage": "word",
          "vi": "truoc day",
          "hanzi": "以前",
          "words": [
            {
              "text": "以前",
              "pinyin": "yi qian",
              "tone": "yi qian",
              "pos": "noun",
              "vi": "truoc day"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "yi qian",
          "tone": "yi qian"
        },
        {
          "stage": "word",
          "vi": "sau nay",
          "hanzi": "以后",
          "words": [
            {
              "text": "以后",
              "pinyin": "yi hou",
              "tone": "yi hou",
              "pos": "noun",
              "vi": "sau nay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "yi hou",
          "tone": "yi hou"
        },
        {
          "stage": "phrase",
          "vi": "hom nay len lop",
          "hanzi": "今天上课",
          "words": [
            {
              "text": "今天",
              "pinyin": "jin tian",
              "tone": "jin tian",
              "pos": "noun",
              "vi": "hom nay"
            },
            {
              "text": "上课",
              "pinyin": "shang ke",
              "tone": "shang ke",
              "pos": "verb",
              "vi": "len lop"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "jin tian shang ke",
          "tone": "jin tian shang ke"
        },
        {
          "stage": "phrase",
          "vi": "phong hoc giao vien",
          "hanzi": "教室老师",
          "words": [
            {
              "text": "教室",
              "pinyin": "jiao shi",
              "tone": "jiao shi",
              "pos": "noun",
              "vi": "phong hoc"
            },
            {
              "text": "老师",
              "pinyin": "lao shi",
              "tone": "lao shi",
              "pos": "noun",
              "vi": "giao vien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "jiao shi lao shi",
          "tone": "jiao shi lao shi"
        },
        {
          "stage": "phrase",
          "vi": "tra loi van de",
          "hanzi": "问题的回答",
          "words": [
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wen ti",
              "pos": "noun",
              "vi": "van de"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "回答",
              "pinyin": "hui da",
              "tone": "hui da",
              "pos": "verb",
              "vi": "tra loi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wen ti de hui da",
          "tone": "wen ti de hui da"
        },
        {
          "stage": "phrase",
          "vi": "truoc day sau nay",
          "hanzi": "以前以后",
          "words": [
            {
              "text": "以前",
              "pinyin": "yi qian",
              "tone": "yi qian",
              "pos": "noun",
              "vi": "truoc day"
            },
            {
              "text": "以后",
              "pinyin": "yi hou",
              "tone": "yi hou",
              "pos": "noun",
              "vi": "sau nay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "yi qian yi hou",
          "tone": "yi qian yi hou"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon phong hoc giao vien.",
          "hanzi": "我想教室老师。",
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
              "text": "教室",
              "pinyin": "jiao shi",
              "tone": "jiao shi",
              "pos": "noun",
              "vi": "phong hoc"
            },
            {
              "text": "老师",
              "pinyin": "lao shi",
              "tone": "lao shi",
              "pos": "noun",
              "vi": "giao vien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wo xiang jiao shi lao shi",
          "tone": "wo xiang jiao shi lao shi"
        },
        {
          "stage": "sentence",
          "vi": "hom nay len lop rat giao vien.",
          "hanzi": "今天上课很老师。",
          "words": [
            {
              "text": "今天",
              "pinyin": "jin tian",
              "tone": "jin tian",
              "pos": "noun",
              "vi": "hom nay"
            },
            {
              "text": "上课",
              "pinyin": "shang ke",
              "tone": "shang ke",
              "pos": "verb",
              "vi": "len lop"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "老师",
              "pinyin": "lao shi",
              "tone": "lao shi",
              "pos": "noun",
              "vi": "giao vien"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "jin tian shang ke hen lao shi",
          "tone": "jin tian shang ke hen lao shi"
        },
        {
          "stage": "sentence",
          "vi": "Vui long bai tap van de.",
          "hanzi": "请作业问题。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "作业",
              "pinyin": "zuo ye",
              "tone": "zuo ye",
              "pos": "noun",
              "vi": "bai tap"
            },
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wen ti",
              "pos": "noun",
              "vi": "van de"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "qing zuo ye wen ti",
          "tone": "qing zuo ye wen ti"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi truoc day sau nay.",
          "hanzi": "我们以前以后。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "以前",
              "pinyin": "yi qian",
              "tone": "yi qian",
              "pos": "noun",
              "vi": "truoc day"
            },
            {
              "text": "以后",
              "pinyin": "yi hou",
              "tone": "yi hou",
              "pos": "noun",
              "vi": "sau nay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wo men yi qian yi hou",
          "tone": "wo men yi qian yi hou"
        },
        {
          "stage": "mixed",
          "vi": "tra loi van de o chuan bi.",
          "hanzi": "问题的回答在准备。",
          "words": [
            {
              "text": "问题",
              "pinyin": "wen ti",
              "tone": "wen ti",
              "pos": "noun",
              "vi": "van de"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "回答",
              "pinyin": "hui da",
              "tone": "hui da",
              "pos": "verb",
              "vi": "tra loi"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "准备",
              "pinyin": "zhun bei",
              "tone": "zhun bei",
              "pos": "verb",
              "vi": "chuan bi"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 2",
          "pinyin": "wen ti de hui da zai zhun bei",
          "tone": "wen ti de hui da zai zhun bei"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di len lop phong hoc.",
          "hanzi": "我们去上课教室。",
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
              "text": "上课",
              "pinyin": "shang ke",
              "tone": "shang ke",
              "pos": "verb",
              "vi": "len lop"
            },
            {
              "text": "教室",
              "pinyin": "jiao shi",
              "tone": "jiao shi",
              "pos": "noun",
              "vi": "phong hoc"
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
          "vi": "nha hang",
          "hanzi": "饭店",
          "words": [
            {
              "text": "饭店",
              "pinyin": "fan dian",
              "tone": "fan dian",
              "pos": "noun",
              "vi": "nha hang"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "fan dian",
          "tone": "fan dian"
        },
        {
          "stage": "word",
          "vi": "thuc don",
          "hanzi": "菜单",
          "words": [
            {
              "text": "菜单",
              "pinyin": "cai dan",
              "tone": "cai dan",
              "pos": "noun",
              "vi": "thuc don"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "cai dan",
          "tone": "cai dan"
        },
        {
          "stage": "word",
          "vi": "thit bo",
          "hanzi": "牛肉",
          "words": [
            {
              "text": "牛肉",
              "pinyin": "niu rou",
              "tone": "niu rou",
              "pos": "noun",
              "vi": "thit bo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "niu rou",
          "tone": "niu rou"
        },
        {
          "stage": "word",
          "vi": "com",
          "hanzi": "米饭",
          "words": [
            {
              "text": "米饭",
              "pinyin": "mi fan",
              "tone": "mi fan",
              "pos": "noun",
              "vi": "com"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "mi fan",
          "tone": "mi fan"
        },
        {
          "stage": "word",
          "vi": "trung ga",
          "hanzi": "鸡蛋",
          "words": [
            {
              "text": "鸡蛋",
              "pinyin": "ji dan",
              "tone": "ji dan",
              "pos": "noun",
              "vi": "trung ga"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "ji dan",
          "tone": "ji dan"
        },
        {
          "stage": "word",
          "vi": "trai cay",
          "hanzi": "水果",
          "words": [
            {
              "text": "水果",
              "pinyin": "shui guo",
              "tone": "shui guo",
              "pos": "noun",
              "vi": "trai cay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "shui guo",
          "tone": "shui guo"
        },
        {
          "stage": "word",
          "vi": "cung nhau",
          "hanzi": "一起",
          "words": [
            {
              "text": "一起",
              "pinyin": "yi qi",
              "tone": "yi qi",
              "pos": "adv",
              "vi": "cung nhau"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "yi qi",
          "tone": "yi qi"
        },
        {
          "stage": "word",
          "vi": "goi mon",
          "hanzi": "点菜",
          "words": [
            {
              "text": "点菜",
              "pinyin": "dian cai",
              "tone": "dian cai",
              "pos": "verb",
              "vi": "goi mon"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "dian cai",
          "tone": "dian cai"
        },
        {
          "stage": "word",
          "vi": "re",
          "hanzi": "便宜",
          "words": [
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "re"
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
          "vi": "nha hang thuc don",
          "hanzi": "饭店菜单",
          "words": [
            {
              "text": "饭店",
              "pinyin": "fan dian",
              "tone": "fan dian",
              "pos": "noun",
              "vi": "nha hang"
            },
            {
              "text": "菜单",
              "pinyin": "cai dan",
              "tone": "cai dan",
              "pos": "noun",
              "vi": "thuc don"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "fan dian cai dan",
          "tone": "fan dian cai dan"
        },
        {
          "stage": "phrase",
          "vi": "thit bo com",
          "hanzi": "牛肉米饭",
          "words": [
            {
              "text": "牛肉",
              "pinyin": "niu rou",
              "tone": "niu rou",
              "pos": "noun",
              "vi": "thit bo"
            },
            {
              "text": "米饭",
              "pinyin": "mi fan",
              "tone": "mi fan",
              "pos": "noun",
              "vi": "com"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "niu rou mi fan",
          "tone": "niu rou mi fan"
        },
        {
          "stage": "phrase",
          "vi": "trai cay trung ga",
          "hanzi": "鸡蛋的水果",
          "words": [
            {
              "text": "鸡蛋",
              "pinyin": "ji dan",
              "tone": "ji dan",
              "pos": "noun",
              "vi": "trung ga"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "水果",
              "pinyin": "shui guo",
              "tone": "shui guo",
              "pos": "noun",
              "vi": "trai cay"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "ji dan de shui guo",
          "tone": "ji dan de shui guo"
        },
        {
          "stage": "phrase",
          "vi": "re ngon",
          "hanzi": "便宜好吃",
          "words": [
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "re"
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
          "vi": "Toi muon thit bo com.",
          "hanzi": "我想牛肉米饭。",
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
              "text": "牛肉",
              "pinyin": "niu rou",
              "tone": "niu rou",
              "pos": "noun",
              "vi": "thit bo"
            },
            {
              "text": "米饭",
              "pinyin": "mi fan",
              "tone": "mi fan",
              "pos": "noun",
              "vi": "com"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "wo xiang niu rou mi fan",
          "tone": "wo xiang niu rou mi fan"
        },
        {
          "stage": "sentence",
          "vi": "nha hang thuc don rat com.",
          "hanzi": "饭店菜单很米饭。",
          "words": [
            {
              "text": "饭店",
              "pinyin": "fan dian",
              "tone": "fan dian",
              "pos": "noun",
              "vi": "nha hang"
            },
            {
              "text": "菜单",
              "pinyin": "cai dan",
              "tone": "cai dan",
              "pos": "noun",
              "vi": "thuc don"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "米饭",
              "pinyin": "mi fan",
              "tone": "mi fan",
              "pos": "noun",
              "vi": "com"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "fan dian cai dan hen mi fan",
          "tone": "fan dian cai dan hen mi fan"
        },
        {
          "stage": "sentence",
          "vi": "Vui long goi mon trung ga.",
          "hanzi": "请点菜鸡蛋。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "点菜",
              "pinyin": "dian cai",
              "tone": "dian cai",
              "pos": "verb",
              "vi": "goi mon"
            },
            {
              "text": "鸡蛋",
              "pinyin": "ji dan",
              "tone": "ji dan",
              "pos": "noun",
              "vi": "trung ga"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "qing dian cai ji dan",
          "tone": "qing dian cai ji dan"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi re ngon.",
          "hanzi": "我们便宜好吃。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "re"
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
          "vi": "trai cay trung ga o cung nhau.",
          "hanzi": "鸡蛋的水果在一起。",
          "words": [
            {
              "text": "鸡蛋",
              "pinyin": "ji dan",
              "tone": "ji dan",
              "pos": "noun",
              "vi": "trung ga"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "水果",
              "pinyin": "shui guo",
              "tone": "shui guo",
              "pos": "noun",
              "vi": "trai cay"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "一起",
              "pinyin": "yi qi",
              "tone": "yi qi",
              "pos": "adv",
              "vi": "cung nhau"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 3",
          "pinyin": "ji dan de shui guo zai yi qi",
          "tone": "ji dan de shui guo zai yi qi"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di thuc don thit bo.",
          "hanzi": "我们去菜单牛肉。",
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
              "text": "菜单",
              "pinyin": "cai dan",
              "tone": "cai dan",
              "pos": "noun",
              "vi": "thuc don"
            },
            {
              "text": "牛肉",
              "pinyin": "niu rou",
              "tone": "niu rou",
              "pos": "noun",
              "vi": "thit bo"
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
          "vi": "cua hang",
          "hanzi": "商店",
          "words": [
            {
              "text": "商店",
              "pinyin": "shang dian",
              "tone": "shang dian",
              "pos": "noun",
              "vi": "cua hang"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "shang dian",
          "tone": "shang dian"
        },
        {
          "stage": "word",
          "vi": "quan ao",
          "hanzi": "衣服",
          "words": [
            {
              "text": "衣服",
              "pinyin": "yi fu",
              "tone": "yi fu",
              "pos": "noun",
              "vi": "quan ao"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "yi fu",
          "tone": "yi fu"
        },
        {
          "stage": "word",
          "vi": "mau sac",
          "hanzi": "颜色",
          "words": [
            {
              "text": "颜色",
              "pinyin": "yan se",
              "tone": "yan se",
              "pos": "noun",
              "vi": "mau sac"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "yan se",
          "tone": "yan se"
        },
        {
          "stage": "word",
          "vi": "re",
          "hanzi": "便宜",
          "words": [
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "re"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "pian yi",
          "tone": "pian yi"
        },
        {
          "stage": "word",
          "vi": "dat",
          "hanzi": "贵",
          "words": [
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "gui",
              "pos": "adj",
              "vi": "dat"
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
          "vi": "ban",
          "hanzi": "卖",
          "words": [
            {
              "text": "卖",
              "pinyin": "mai",
              "tone": "mai",
              "pos": "verb",
              "vi": "ban"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "mai",
          "tone": "mai"
        },
        {
          "stage": "word",
          "vi": "thu xem",
          "hanzi": "试试",
          "words": [
            {
              "text": "试试",
              "pinyin": "shi shi",
              "tone": "shi shi",
              "pos": "verb",
              "vi": "thu xem"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "shi shi",
          "tone": "shi shi"
        },
        {
          "stage": "word",
          "vi": "ben trai",
          "hanzi": "左边",
          "words": [
            {
              "text": "左边",
              "pinyin": "zuo bian",
              "tone": "zuo bian",
              "pos": "noun",
              "vi": "ben trai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "zuo bian",
          "tone": "zuo bian"
        },
        {
          "stage": "word",
          "vi": "ben phai",
          "hanzi": "右边",
          "words": [
            {
              "text": "右边",
              "pinyin": "you bian",
              "tone": "you bian",
              "pos": "noun",
              "vi": "ben phai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "you bian",
          "tone": "you bian"
        },
        {
          "stage": "phrase",
          "vi": "cua hang quan ao",
          "hanzi": "商店衣服",
          "words": [
            {
              "text": "商店",
              "pinyin": "shang dian",
              "tone": "shang dian",
              "pos": "noun",
              "vi": "cua hang"
            },
            {
              "text": "衣服",
              "pinyin": "yi fu",
              "tone": "yi fu",
              "pos": "noun",
              "vi": "quan ao"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "shang dian yi fu",
          "tone": "shang dian yi fu"
        },
        {
          "stage": "phrase",
          "vi": "mau sac re",
          "hanzi": "颜色便宜",
          "words": [
            {
              "text": "颜色",
              "pinyin": "yan se",
              "tone": "yan se",
              "pos": "noun",
              "vi": "mau sac"
            },
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "re"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "yan se pian yi",
          "tone": "yan se pian yi"
        },
        {
          "stage": "phrase",
          "vi": "mua dat",
          "hanzi": "贵的买",
          "words": [
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "gui",
              "pos": "adj",
              "vi": "dat"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
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
          "vi": "ben trai ben phai",
          "hanzi": "左边右边",
          "words": [
            {
              "text": "左边",
              "pinyin": "zuo bian",
              "tone": "zuo bian",
              "pos": "noun",
              "vi": "ben trai"
            },
            {
              "text": "右边",
              "pinyin": "you bian",
              "tone": "you bian",
              "pos": "noun",
              "vi": "ben phai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "zuo bian you bian",
          "tone": "zuo bian you bian"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon mau sac re.",
          "hanzi": "我想颜色便宜。",
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
              "text": "颜色",
              "pinyin": "yan se",
              "tone": "yan se",
              "pos": "noun",
              "vi": "mau sac"
            },
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "re"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "wo xiang yan se pian yi",
          "tone": "wo xiang yan se pian yi"
        },
        {
          "stage": "sentence",
          "vi": "cua hang quan ao rat re.",
          "hanzi": "商店衣服很便宜。",
          "words": [
            {
              "text": "商店",
              "pinyin": "shang dian",
              "tone": "shang dian",
              "pos": "noun",
              "vi": "cua hang"
            },
            {
              "text": "衣服",
              "pinyin": "yi fu",
              "tone": "yi fu",
              "pos": "noun",
              "vi": "quan ao"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "便宜",
              "pinyin": "pian yi",
              "tone": "pian yi",
              "pos": "adj",
              "vi": "re"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "shang dian yi fu hen pian yi",
          "tone": "shang dian yi fu hen pian yi"
        },
        {
          "stage": "sentence",
          "vi": "Vui long thu xem dat.",
          "hanzi": "请试试贵。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "试试",
              "pinyin": "shi shi",
              "tone": "shi shi",
              "pos": "verb",
              "vi": "thu xem"
            },
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "gui",
              "pos": "adj",
              "vi": "dat"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "qing shi shi gui",
          "tone": "qing shi shi gui"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi ben trai ben phai.",
          "hanzi": "我们左边右边。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "左边",
              "pinyin": "zuo bian",
              "tone": "zuo bian",
              "pos": "noun",
              "vi": "ben trai"
            },
            {
              "text": "右边",
              "pinyin": "you bian",
              "tone": "you bian",
              "pos": "noun",
              "vi": "ben phai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "wo men zuo bian you bian",
          "tone": "wo men zuo bian you bian"
        },
        {
          "stage": "mixed",
          "vi": "mua dat o ban.",
          "hanzi": "贵的买在卖。",
          "words": [
            {
              "text": "贵",
              "pinyin": "gui",
              "tone": "gui",
              "pos": "adj",
              "vi": "dat"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
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
              "vi": "o tai"
            },
            {
              "text": "卖",
              "pinyin": "mai",
              "tone": "mai",
              "pos": "verb",
              "vi": "ban"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 4",
          "pinyin": "gui de mai zai mai",
          "tone": "gui de mai zai mai"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di quan ao mau sac.",
          "hanzi": "我们去衣服颜色。",
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
              "text": "衣服",
              "pinyin": "yi fu",
              "tone": "yi fu",
              "pos": "noun",
              "vi": "quan ao"
            },
            {
              "text": "颜色",
              "pinyin": "yan se",
              "tone": "yan se",
              "pos": "noun",
              "vi": "mau sac"
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
          "vi": "bo",
          "hanzi": "爸爸",
          "words": [
            {
              "text": "爸爸",
              "pinyin": "ba ba",
              "tone": "ba ba",
              "pos": "noun",
              "vi": "bo"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "ba ba",
          "tone": "ba ba"
        },
        {
          "stage": "word",
          "vi": "me",
          "hanzi": "妈妈",
          "words": [
            {
              "text": "妈妈",
              "pinyin": "ma ma",
              "tone": "ma ma",
              "pos": "noun",
              "vi": "me"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "ma ma",
          "tone": "ma ma"
        },
        {
          "stage": "word",
          "vi": "tre em",
          "hanzi": "孩子",
          "words": [
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hai zi",
              "pos": "noun",
              "vi": "tre em"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "hai zi",
          "tone": "hai zi"
        },
        {
          "stage": "word",
          "vi": "em gai",
          "hanzi": "妹妹",
          "words": [
            {
              "text": "妹妹",
              "pinyin": "mei mei",
              "tone": "mei mei",
              "pos": "noun",
              "vi": "em gai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "mei mei",
          "tone": "mei mei"
        },
        {
          "stage": "word",
          "vi": "sinh nhat",
          "hanzi": "生日",
          "words": [
            {
              "text": "生日",
              "pinyin": "sheng ri",
              "tone": "sheng ri",
              "pos": "noun",
              "vi": "sinh nhat"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "sheng ri",
          "tone": "sheng ri"
        },
        {
          "stage": "word",
          "vi": "qua tang",
          "hanzi": "礼物",
          "words": [
            {
              "text": "礼物",
              "pinyin": "li wu",
              "tone": "li wu",
              "pos": "noun",
              "vi": "qua tang"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "li wu",
          "tone": "li wu"
        },
        {
          "stage": "word",
          "vi": "vui ve",
          "hanzi": "快乐",
          "words": [
            {
              "text": "快乐",
              "pinyin": "kuai le",
              "tone": "kuai le",
              "pos": "adj",
              "vi": "vui ve"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "kuai le",
          "tone": "kuai le"
        },
        {
          "stage": "word",
          "vi": "ve nha",
          "hanzi": "回家",
          "words": [
            {
              "text": "回家",
              "pinyin": "hui jia",
              "tone": "hui jia",
              "pos": "verb",
              "vi": "ve nha"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "hui jia",
          "tone": "hui jia"
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
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "xiu xi",
          "tone": "xiu xi"
        },
        {
          "stage": "word",
          "vi": "giup do",
          "hanzi": "帮忙",
          "words": [
            {
              "text": "帮忙",
              "pinyin": "bang mang",
              "tone": "bang mang",
              "pos": "verb",
              "vi": "giup do"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "bang mang",
          "tone": "bang mang"
        },
        {
          "stage": "phrase",
          "vi": "bo me",
          "hanzi": "爸爸妈妈",
          "words": [
            {
              "text": "爸爸",
              "pinyin": "ba ba",
              "tone": "ba ba",
              "pos": "noun",
              "vi": "bo"
            },
            {
              "text": "妈妈",
              "pinyin": "ma ma",
              "tone": "ma ma",
              "pos": "noun",
              "vi": "me"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "ba ba ma ma",
          "tone": "ba ba ma ma"
        },
        {
          "stage": "phrase",
          "vi": "tre em em gai",
          "hanzi": "孩子妹妹",
          "words": [
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hai zi",
              "pos": "noun",
              "vi": "tre em"
            },
            {
              "text": "妹妹",
              "pinyin": "mei mei",
              "tone": "mei mei",
              "pos": "noun",
              "vi": "em gai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "hai zi mei mei",
          "tone": "hai zi mei mei"
        },
        {
          "stage": "phrase",
          "vi": "qua tang sinh nhat",
          "hanzi": "生日的礼物",
          "words": [
            {
              "text": "生日",
              "pinyin": "sheng ri",
              "tone": "sheng ri",
              "pos": "noun",
              "vi": "sinh nhat"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "礼物",
              "pinyin": "li wu",
              "tone": "li wu",
              "pos": "noun",
              "vi": "qua tang"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "sheng ri de li wu",
          "tone": "sheng ri de li wu"
        },
        {
          "stage": "phrase",
          "vi": "nghi ngoi giup do",
          "hanzi": "休息帮忙",
          "words": [
            {
              "text": "休息",
              "pinyin": "xiu xi",
              "tone": "xiu xi",
              "pos": "verb",
              "vi": "nghi ngoi"
            },
            {
              "text": "帮忙",
              "pinyin": "bang mang",
              "tone": "bang mang",
              "pos": "verb",
              "vi": "giup do"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "xiu xi bang mang",
          "tone": "xiu xi bang mang"
        },
        {
          "stage": "sentence",
          "vi": "Toi muon tre em em gai.",
          "hanzi": "我想孩子妹妹。",
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
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hai zi",
              "pos": "noun",
              "vi": "tre em"
            },
            {
              "text": "妹妹",
              "pinyin": "mei mei",
              "tone": "mei mei",
              "pos": "noun",
              "vi": "em gai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "wo xiang hai zi mei mei",
          "tone": "wo xiang hai zi mei mei"
        },
        {
          "stage": "sentence",
          "vi": "bo me rat em gai.",
          "hanzi": "爸爸妈妈很妹妹。",
          "words": [
            {
              "text": "爸爸",
              "pinyin": "ba ba",
              "tone": "ba ba",
              "pos": "noun",
              "vi": "bo"
            },
            {
              "text": "妈妈",
              "pinyin": "ma ma",
              "tone": "ma ma",
              "pos": "noun",
              "vi": "me"
            },
            {
              "text": "很",
              "pinyin": "hen",
              "tone": "hen",
              "pos": "adv",
              "vi": "rat"
            },
            {
              "text": "妹妹",
              "pinyin": "mei mei",
              "tone": "mei mei",
              "pos": "noun",
              "vi": "em gai"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "ba ba ma ma hen mei mei",
          "tone": "ba ba ma ma hen mei mei"
        },
        {
          "stage": "sentence",
          "vi": "Vui long ve nha sinh nhat.",
          "hanzi": "请回家生日。",
          "words": [
            {
              "text": "请",
              "pinyin": "qing",
              "tone": "qing",
              "pos": "verb",
              "vi": "vui long"
            },
            {
              "text": "回家",
              "pinyin": "hui jia",
              "tone": "hui jia",
              "pos": "verb",
              "vi": "ve nha"
            },
            {
              "text": "生日",
              "pinyin": "sheng ri",
              "tone": "sheng ri",
              "pos": "noun",
              "vi": "sinh nhat"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "qing hui jia sheng ri",
          "tone": "qing hui jia sheng ri"
        },
        {
          "stage": "sentence",
          "vi": "Chung toi nghi ngoi giup do.",
          "hanzi": "我们休息帮忙。",
          "words": [
            {
              "text": "我们",
              "pinyin": "wo men",
              "tone": "wo men",
              "pos": "pron",
              "vi": "chung toi"
            },
            {
              "text": "休息",
              "pinyin": "xiu xi",
              "tone": "xiu xi",
              "pos": "verb",
              "vi": "nghi ngoi"
            },
            {
              "text": "帮忙",
              "pinyin": "bang mang",
              "tone": "bang mang",
              "pos": "verb",
              "vi": "giup do"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "wo men xiu xi bang mang",
          "tone": "wo men xiu xi bang mang"
        },
        {
          "stage": "mixed",
          "vi": "qua tang sinh nhat o vui ve.",
          "hanzi": "生日的礼物在快乐。",
          "words": [
            {
              "text": "生日",
              "pinyin": "sheng ri",
              "tone": "sheng ri",
              "pos": "noun",
              "vi": "sinh nhat"
            },
            {
              "text": "的",
              "pinyin": "de",
              "tone": "de",
              "pos": "particle",
              "vi": "tro tu so huu"
            },
            {
              "text": "礼物",
              "pinyin": "li wu",
              "tone": "li wu",
              "pos": "noun",
              "vi": "qua tang"
            },
            {
              "text": "在",
              "pinyin": "zai",
              "tone": "zai",
              "pos": "prep",
              "vi": "o tai"
            },
            {
              "text": "快乐",
              "pinyin": "kuai le",
              "tone": "kuai le",
              "pos": "adj",
              "vi": "vui ve"
            }
          ],
          "source": "HSK2 generated lab pack - Lesson 5",
          "pinyin": "sheng ri de li wu zai kuai le",
          "tone": "sheng ri de li wu zai kuai le"
        },
        {
          "stage": "mixed",
          "vi": "Chung toi di me tre em.",
          "hanzi": "我们去妈妈孩子。",
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
              "text": "妈妈",
              "pinyin": "ma ma",
              "tone": "ma ma",
              "pos": "noun",
              "vi": "me"
            },
            {
              "text": "孩子",
              "pinyin": "hai zi",
              "tone": "hai zi",
              "pos": "noun",
              "vi": "tre em"
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
