# HSK 生词 / 句子模块素材格式标准

执行本文件前，必须先读取并遵守：

```text
docs/PINDA_V1_LOCAL_ACCEPTANCE_GATE.md
```

如果本文件与本地总验收闸门冲突，以本地总验收闸门为准。

## 1. 适用范围

本标准只用于 Pinda V1 的 HSK 教程 / HSK 学习模块中的：

1. 生词 `word`
2. 句子 `sentence`

暂时不处理：

1. HSK 考试听力斩
2. 选图题
3. 判断题
4. 选择题
5. 长对话题
6. 答案解析题库
7. 图片题
8. HSK 模拟考试

以上考试题型以后单独制定标准。

## 2. 两模块规则

HSK 学习模块只允许两个学习入口：

1. 生词
2. 句子

素材 `item.type` 只允许：

1. `word`
2. `sentence`

严禁出现：

1. `phrase` 独立模块
2. `world` 拼写
3. `keyword` 独立模块
4. `vocabulary_phrase`
5. 关键词作为学习入口
6. 短语作为学习入口

## 3. 素材包目录结构

HSK 素材按等级和课次组织。

```text
hsk_package/
├─ manifest.json
├─ audio/
│  └─ HSK3/
│     └─ L01/
│        ├─ word/
│        └─ sentence/
├─ README.md
└─ validation_report.md
```

只允许：

1. `audio/HSK3/L01/word/`
2. `audio/HSK3/L01/sentence/`

严禁出现：

1. `audio/HSK3/L01/phrase/`
2. `audio/HSK3/L01/world/`
3. `audio/HSK3/L01/keyword/`

## 4. manifest.json 顶层字段

`manifest.json` 顶层必须包含：

1. `package_id`
2. `module`
3. `version`
4. `language_pair`
5. `level`
6. `lesson`
7. `items`

字段说明：

1. `package_id`：素材包唯一 ID，例如 `hsk3_l01_word_sentence_test_001`
2. `module`：固定为 `hsk_course`
3. `version`：版本号，例如 `1.0.0-test.1`
4. `language_pair`：固定为 `zh-vi`
5. `level`：HSK 等级，例如 `HSK3`
6. `lesson`：课次信息
7. `items`：素材条目数组

## 5. lesson 字段

`lesson` 必须包含：

1. `level`
2. `lesson_id`
3. `lesson_no`
4. `lesson_title_zh`
5. `lesson_title_vi`
6. `enabled`
7. `sort_order`

示例：

```json
{
  "level": "HSK3",
  "lesson_id": "hsk3_l01",
  "lesson_no": 1,
  "lesson_title_zh": "第一课",
  "lesson_title_vi": "Bài 1",
  "enabled": true,
  "sort_order": 1
}
```

## 6. item 字段

每条 item 必须包含：

1. `id`
2. `type`
3. `chinese_text`
4. `pinyin`
5. `vietnamese`
6. `audio_normal_path`
7. `audio_slow_path`
8. `segments`，仅 `sentence` 必填
9. `sort_order`
10. `enabled`

`type` 只能是：

1. `word`
2. `sentence`

严禁出现：

1. `phrase`
2. `world`
3. `keyword`
4. `vocabulary_phrase`

## 7. word / 生词规则

`word` = HSK 生词。

要求：

1. 一般为 1～4 个汉字。
2. 可以是单字、词语、固定搭配。
3. 不能全部是 4 字固定表达。
4. 必须优先保留教材核心生词。
5. HSK 教材原始生词必须优先，不得漏词。
6. 如果是测试包，建议先做 5 条 `word`。
7. 每条 `word` 必须有中文、拼音、越南语、normal 音频、slow 音频。

示例：

```json
{
  "id": "hsk3_l01_word_001",
  "type": "word",
  "chinese_text": "面试",
  "pinyin": "miànshì",
  "vietnamese": "phỏng vấn",
  "audio_normal_path": "audio/HSK3/L01/word/hsk3_l01_word_001_normal.mp3",
  "audio_slow_path": "audio/HSK3/L01/word/hsk3_l01_word_001_slow.mp3",
  "sort_order": 1,
  "enabled": true
}
```

## 8. sentence / 句子规则

`sentence` = HSK 句子。

要求：

1. 一般为 5 个及以上汉字。
2. 必须是自然、完整、适合教学的句子。
3. 必须符合当前 HSK 等级和课次。
4. 必须有中文、拼音、越南语。
5. 必须有 normal 音频和 slow 音频。
6. 必须有 `segments`。
7. 如果是测试包，建议先做 5 条 `sentence`。

## 9. sentence.segments 规则

每条 `sentence` 必须包含 `segments`。

每个 segment 必须包含：

1. `text`
2. `pinyin`
3. `vietnamese`
4. `segment_type`
5. `pos`

`segment_type` 只能是：

1. 词
2. 短语
3. 功能词块

`pos` 只能是：

1. 名词
2. 动词
3. 形容词
4. 代词
5. 副词
6. 功能词

严禁 `pos` 出现：

1. 生词
2. 短语
3. 关键词
4. `word`
5. `phrase`
6. `sentence`
7. `vocab`
8. `keyword`

注意：

1. “短语”可以作为 `segment_type`。
2. “短语”不能作为 `pos`。
3. “生词”是学习入口，不是词性。
4. 句子拆解标签必须显示 `segment_type · pos`。

示例：

```json
{
  "id": "hsk3_l01_sentence_001",
  "type": "sentence",
  "chinese_text": "我想应聘这个职位。",
  "pinyin": "Wǒ xiǎng yìngpìn zhège zhíwèi.",
  "vietnamese": "Tôi muốn ứng tuyển vị trí này.",
  "audio_normal_path": "audio/HSK3/L01/sentence/hsk3_l01_sentence_001_normal.mp3",
  "audio_slow_path": "audio/HSK3/L01/sentence/hsk3_l01_sentence_001_slow.mp3",
  "segments": [
    {
      "text": "我",
      "pinyin": "wǒ",
      "vietnamese": "tôi",
      "segment_type": "词",
      "pos": "代词"
    },
    {
      "text": "想",
      "pinyin": "xiǎng",
      "vietnamese": "muốn",
      "segment_type": "词",
      "pos": "动词"
    },
    {
      "text": "应聘",
      "pinyin": "yìngpìn",
      "vietnamese": "ứng tuyển",
      "segment_type": "词",
      "pos": "动词"
    },
    {
      "text": "这个职位",
      "pinyin": "zhège zhíwèi",
      "vietnamese": "vị trí này",
      "segment_type": "短语",
      "pos": "名词"
    }
  ],
  "sort_order": 1,
  "enabled": true
}
```

## 10. 音频规则

每条 item 必须有两条真实 MP3：

1. normal 正常语速
2. slow 慢速语速

规则：

```text
slow = normal 的 0.75 倍语速
```

要求：

1. normal 和 slow 必须是同一句中文内容。
2. `audio_normal_path` 必须能找到真实 mp3。
3. `audio_slow_path` 必须能找到真实 mp3。
4. 不能生成 0KB mp3。
5. 不能生成假 mp3。
6. 不能文本和音频错绑。
7. 短词 slow 需要人工听审或 ASR 辅助抽查。

## 11. 文件命名规则

word 音频命名：

```text
hsk3_l01_word_001_normal.mp3
hsk3_l01_word_001_slow.mp3
```

sentence 音频命名：

```text
hsk3_l01_sentence_001_normal.mp3
hsk3_l01_sentence_001_slow.mp3
```

路径示例：

```text
audio/HSK3/L01/word/hsk3_l01_word_001_normal.mp3
audio/HSK3/L01/word/hsk3_l01_word_001_slow.mp3
audio/HSK3/L01/sentence/hsk3_l01_sentence_001_normal.mp3
audio/HSK3/L01/sentence/hsk3_l01_sentence_001_slow.mp3
```

禁止：

```text
hsk3_l01_phrase_001_normal.mp3
hsk3_l01_world_001_normal.mp3
audio/HSK3/L01/phrase/
audio/HSK3/L01/world/
```

## 12. 第一批 HSK 测试范围建议

第一批 HSK 对接测试不要大。

建议只做：

1. 1 个等级
2. 1 个课次
3. 5 个 `word`
4. 5 个 `sentence`

示例：

1. HSK3
2. 第 1 课
3. 5 个生词
4. 5 个句子
5. 总 item = 10
6. normal = 10
7. slow = 10
8. 总 MP3 = 20

本文件只定义标准，不生成素材。

## 13. 验收标准

HSK 素材包必须通过：

1. `manifest.json` 存在。
2. `audio/` 存在。
3. `README.md` 存在。
4. `validation_report.md` 存在。
5. 只包含 `word` / `sentence`。
6. 不包含 `phrase`。
7. 不包含 `world`。
8. `word` 数量正确。
9. `sentence` 数量正确。
10. `sentence` 必须有 `segments`。
11. `segments` 字段完整。
12. `segment_type` 合法。
13. `pos` 合法。
14. 禁止 `pos=生词` / `pos=短语` / `pos=关键词`。
15. normal 音频存在。
16. slow 音频存在。
17. slow = 0.75。
18. 中文、拼音、越南语完整。
19. 没有乱码。
20. 没有 `.env`、API Key、数据库密码、客户资料。
