# 高频汉语模块素材格式标准

执行本文件前，必须先读取并遵守：
docs/PINDA_V1_LOCAL_ACCEPTANCE_GATE.md

如果本文件内容与本地总验收闸门冲突，以本地总验收闸门为准。

## 1. 适用范围

本标准只用于 Pinda V1 的高频汉语 / Daily 模块，不适用于 HSK 考试模块。

第一阶段只覆盖主题、生词、句子、正常音频、慢速音频，以及中文 / 拼音 / 越南语文本。

暂不包含复杂考试题型、长对话、图片题、选择题或判断题。

## 2. 两模块规则

高频汉语素材只允许两个 item type：

- `word`：生词
- `sentence`：句子

严禁出现：

- `phrase`
- `world`
- `keyword`
- `vocabulary_phrase`

短语、固定搭配不再单独建立 `phrase` 类型。它们必须按中文汉字数量归入 `word` 或 `sentence`。

## 3. 内容归类规则

根据 `chinese_text` 的汉字数量判断：

- 1～4 个汉字：`word` / 生词
- 5 个及以上汉字：`sentence` / 句子

计算规则：

1. 只统计中文汉字。
2. 忽略标点符号。
3. 忽略空格。
4. 忽略数字和英文。
5. 1～4 个汉字内的短语、固定搭配，也归入 `word`。
6. 不允许单独建立 `phrase` 类型。

示例：

| 中文 | 汉字数 | type |
| --- | ---: | --- |
| 面试 | 2 | `word` |
| 自我介绍 | 4 | `word` |
| 参加面试 | 4 | `word` |
| 请先做一下自我介绍 | 9 | `sentence` |
| 我想应聘这个职位 | 8 | `sentence` |

## 4. 第一批测试范围

第一批建议只做小批量验证：

- 1 个主题
- 5 条 `word`
- 5 条 `sentence`
- 总计 10 条 item

推荐主题：

- 工作面试 / Phỏng vấn xin việc

## 5. 素材包目录结构

素材包必须保持简单：

```text
high_frequency_package/
├── manifest.json
├── audio/
│   └── daily_interview/
│       ├── word/
│       └── sentence/
├── README.md
└── validation_report.md
```

严禁出现：

```text
high_frequency_package/audio/daily_interview/phrase/
```

不要在第一批测试中加入复杂目录、业务代码或正式项目源码。

## 6. manifest.json 顶层结构

示例：

```json
{
  "package_id": "daily_interview_v1",
  "module": "high_frequency_daily",
  "version": "1.0.0",
  "language_pair": "zh-vi",
  "topic": {
    "topic_id": "daily_interview",
    "topic_title_zh": "工作面试",
    "topic_title_vi": "Phỏng vấn xin việc",
    "category": "work",
    "enabled": true,
    "sort_order": 1
  },
  "items": []
}
```

## 7. topic 字段

`topic` 必须包含：

- `topic_id`
- `topic_title_zh`
- `topic_title_vi`
- `category`
- `enabled`
- `sort_order`

## 8. item 字段

每条素材只保留必要字段：

- `id`
- `type`
- `chinese_text`
- `pinyin`
- `vietnamese`
- `audio_normal_path`
- `audio_slow_path`
- `segments`，仅 `sentence` 必填
- `sort_order`
- `enabled`

`type` 只能是：

- `word`
- `sentence`

示例：

```json
{
  "id": "daily_interview_word_001",
  "type": "word",
  "chinese_text": "面试",
  "pinyin": "miànshì",
  "vietnamese": "phỏng vấn",
  "audio_normal_path": "audio/daily_interview/word/daily_interview_word_001_normal.mp3",
  "audio_slow_path": "audio/daily_interview/word/daily_interview_word_001_slow.mp3",
  "sort_order": 1,
  "enabled": true
}
```

### sentence.segments 字段

每条 `sentence` item 必须包含 `segments`。

`segments` 必须是真正用于 Pinda V1 前端句子拆解和下划线显示的自然词块数组。

硬性要求：

- 一个 segment 对应一个前端输入块。
- 一个 segment 对应一条独立底部下划线。
- 5 个及以上汉字的 `sentence` 禁止整句单 segment。
- 如果 `segments.length === 1`，且 `segments[0].text` 去掉标点后等于 `chinese_text` 去掉标点后的整句，验收失败。
- `segments` 拼接后去掉标点和空格，必须等于 `chinese_text` 去掉标点和空格。
- 不能把“我们什么时候走”“我们直到下午晚些时候才到达”这类整句整体标成一个 `短语 · 动词`。
- 固定词、自然短语、时间词块、功能词块必须按自然语义拆开。
- Pinda V1 浏览器验收时，长句下划线数量必须与 `segments.length` 一致。

每个 segment 必须包含：

- `text`
- `pinyin`
- `vietnamese`
- `segment_type`
- `pos`

`segment_type` 只能是：

- `词`
- `短语`
- `功能词块`

`pos` 只能是：

- `名词`
- `动词`
- `形容词`
- `代词`
- `副词`
- `功能词`

注意：

- `segment_type` 说明它是词、短语还是功能词块。
- `pos` 说明它属于 6 种核心词性之一。
- `短语` 可以作为 `segment_type`，但不能作为 `pos`。
- 严禁把 `生词`、`短语`、`关键词`、`word`、`phrase`、`sentence`、`vocab`、`keyword` 当成 `segments[].pos`。

示例 1：

```json
[
  {
    "text": "这个岗位",
    "pinyin": "zhè ge gǎngwèi",
    "vietnamese": "vị trí này",
    "segment_type": "短语",
    "pos": "名词"
  },
  {
    "text": "需要",
    "pinyin": "xūyào",
    "vietnamese": "cần",
    "segment_type": "词",
    "pos": "动词"
  },
  {
    "text": "一点",
    "pinyin": "yìdiǎn",
    "vietnamese": "một chút",
    "segment_type": "词",
    "pos": "副词"
  },
  {
    "text": "工作经验",
    "pinyin": "gōngzuò jīngyàn",
    "vietnamese": "kinh nghiệm làm việc",
    "segment_type": "短语",
    "pos": "名词"
  }
]
```

示例 2：

```json
[
  {
    "text": "这里",
    "pinyin": "zhè lǐ",
    "vietnamese": "ở đây",
    "segment_type": "词",
    "pos": "名词"
  },
  {
    "text": "不好打车",
    "pinyin": "bù hǎo dǎ chē",
    "vietnamese": "khó gọi xe",
    "segment_type": "短语",
    "pos": "动词"
  },
  {
    "text": "我们",
    "pinyin": "wǒ men",
    "vietnamese": "chúng ta",
    "segment_type": "词",
    "pos": "代词"
  },
  {
    "text": "坐公交",
    "pinyin": "zuò gōngjiāo",
    "vietnamese": "đi xe buýt",
    "segment_type": "短语",
    "pos": "动词"
  },
  {
    "text": "吧",
    "pinyin": "ba",
    "vietnamese": "nhé",
    "segment_type": "功能词块",
    "pos": "功能词"
  }
]
```

## 9. 音频命名规则

只允许两类命名：

```text
daily_interview_word_001_normal.mp3
daily_interview_word_001_slow.mp3
daily_interview_sentence_001_normal.mp3
daily_interview_sentence_001_slow.mp3
```

推荐路径：

```text
audio/daily_interview/word/daily_interview_word_001_normal.mp3
audio/daily_interview/word/daily_interview_word_001_slow.mp3
audio/daily_interview/sentence/daily_interview_sentence_001_normal.mp3
audio/daily_interview/sentence/daily_interview_sentence_001_slow.mp3
```

严禁出现：

```text
daily_interview_phrase_001_normal.mp3
daily_interview_phrase_001_slow.mp3
daily_interview_world_001_normal.mp3
```

## 10. 音频规则

素材包必须满足：

1. 每条 item 必须有 normal 音频。
2. 每条 item 必须有 slow 音频。
3. normal = 正常语速。
4. slow = 正常语速的 0.75 倍。
5. normal 和 slow 必须是同一句中文内容，只允许语速不同。
6. 每条音频路径必须能找到对应 mp3 文件。
7. 如果音频文件已经正确，只允许重建 manifest / README / validation_report / failed_items 等交接文本，不得为了修正 `segments` 重新跑 TTS。

## 11. 必填规则

素材包必须满足：

1. `id` 必须唯一。
2. `type` 只能是 `word` 或 `sentence`。
3. `word` 的 `chinese_text` 必须为 1～4 个汉字。
4. `sentence` 的 `chinese_text` 必须为 5 个及以上汉字。
5. `sentence` 必须包含合法 `segments`。
6. `sentence.segments` 必须自然拆解，禁止整句单 segment。
7. `sentence.segments` 拼接后必须还原原句。
8. 浏览器中 sentence 下划线必须按 segments 分段显示。
9. `chinese_text` 不能为空。
10. `pinyin` 不能为空。
11. `vietnamese` 不能为空。
12. `audio_normal_path` 不能为空。
13. `audio_slow_path` 不能为空。
14. 不允许乱码。
15. 不允许真实客户资料、API Key、数据库密码、Cookie、Token 或账号密码。
16. 不允许 HSK 内容。

## 12. 第一批素材验收标准

第一批素材必须通过：

1. `manifest.json` 存在且可 UTF-8 正常读取。
2. `audio/`、`README.md`、`validation_report.md` 存在。
3. item 总数为 10。
4. `word` 数量为 5。
5. `sentence` 数量为 5。
6. 不存在 `phrase`、`world` 或 `audio/daily_interview/phrase/`。
7. 中文显示正确。
8. 拼音显示正确。
9. 越南语显示正确。
10. 正常音频可以播放。
11. 慢速音频可以播放。
12. 文本和音频一一对应。
13. 页面无明显乱码。
14. Console 无严重红色报错。

## 13. 本地验收与导入流程

素材包进入正式项目前必须按顺序处理：

1. 先本地验收素材包。
2. 验收通过后，才复制到 Pinda V1 本地测试目录。
3. 本地浏览器预览通过后，才允许进入 GitHub 固化阶段。
4. 未通过本地预览，禁止上传 GitHub。
5. 未经老板确认，禁止 commit / push / PR / merge。

## 14. 素材工厂输出要求

请素材生产工厂只输出：

1. `manifest.json`
2. `audio/` 文件夹
3. `README.md`
4. `validation_report.md`

不要输出复杂代码，不要输出正式项目源码，不要接入数据库，不要包含真实客户资料或任何密钥。
