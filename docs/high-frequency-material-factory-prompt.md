# 给素材生产工厂 Codex 的提示词：生成 Pinda V1 高频汉语两模块测试素材包

执行本文件前，必须先读取并遵守：
docs/PINDA_V1_LOCAL_ACCEPTANCE_GATE.md

如果本文件内容与本地总验收闸门冲突，以本地总验收闸门为准。

请按照下面要求，为 Pinda V1 正式项目生成第一批高频汉语 / Daily 模块测试素材包。

注意：你是素材生产工厂 Codex。你的任务是生成素材包，不是修改 Pinda V1 正式项目代码。

## 1. 任务目标

生成 Pinda V1 高频汉语模块第一批测试素材。

本次只生成高频汉语 / Daily 模块素材，不生成 HSK 素材。

第一批必须小批量，用于验证文本、音频、路径、语言显示和导入流程，不要一次性生成大批量素材。

## 2. 第一批生成范围

只生成：

- 1 个主题
- 5 条生词 `word`
- 5 条句子 `sentence`

总计 10 条 item。

推荐主题：

- 工作面试 / Phỏng vấn xin việc

不要生成 `phrase`。

不要创建 `phrase` 文件夹。

不要生成 HSK 内容。

## 3. type 和内容归类规则

每条 item 的 `type` 只能是：

- `word`
- `sentence`

严禁出现：

- `phrase`
- `world`
- `keyword`
- `vocabulary_phrase`

根据 `chinese_text` 的汉字数量归类：

- 1～4 个汉字：`word`
- 5 个及以上汉字：`sentence`

计算规则：

1. 只统计中文汉字。
2. 忽略标点符号。
3. 忽略空格。
4. 忽略数字和英文。
5. 1～4 个汉字内的短语、固定搭配，也归入 `word`。
6. 不允许单独建立 `phrase` 类型。

示例：

- 面试 → 2 字 → `word`
- 自我介绍 → 4 字 → `word`
- 参加面试 → 4 字 → `word`
- 请先做一下自我介绍 → 9 字 → `sentence`
- 我想应聘这个职位 → 8 字 → `sentence`

## 4. 每条素材必须包含字段

每条 item 必须包含：

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

每条 `sentence` 必须生成 `segments`。

`segments` 必须是真正用于 Pinda V1 前端下划线拆解的自然词块数组。

硬性规则：

- 一个 segment = 一个前端输入块 = 一条底部下划线。
- 5 个及以上汉字的 sentence 禁止整句单 segment。
- 如果 `segments.length === 1`，且唯一 segment 的 `text` 去标点后等于整句，必须判为失败。
- `segments` 拼接后去掉标点和空格，必须等于 `chinese_text` 去掉标点和空格。
- 必须按自然词、自然短语、时间词块、功能词块拆解。
- 不允许把整句整体标成一个 `短语 · 动词`。
- Pinda V1 浏览器中 sentence 下划线数量必须等于 `segments.length`。

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

严禁把 `生词`、`短语`、`关键词`、`word`、`phrase`、`sentence`、`vocab`、`keyword` 当成 `pos`。

`短语` 只能作为 `segment_type`，不能作为 `pos`。

## 5. topic 必须包含字段

`topic` 必须包含：

- `topic_id`
- `topic_title_zh`
- `topic_title_vi`
- `category`
- `enabled`
- `sort_order`

## 6. 输出素材包结构

素材工厂必须输出：

```text
high_frequency_package/
├─ manifest.json
├─ audio/
│  └─ daily_interview/
│     ├─ word/
│     └─ sentence/
├─ README.md
└─ validation_report.md
```

不要输出正式项目源码。

不要修改 Pinda V1 项目代码。

不要生成 HSK 素材。

不要输出大批量素材。

严禁输出：

```text
high_frequency_package/audio/daily_interview/phrase/
```

## 7. 音频命名规则

只允许两类命名：

```text
daily_interview_word_001_normal.mp3
daily_interview_word_001_slow.mp3
daily_interview_sentence_001_normal.mp3
daily_interview_sentence_001_slow.mp3
```

`audio_normal_path` 示例：

```text
audio/daily_interview/word/daily_interview_word_001_normal.mp3
audio/daily_interview/sentence/daily_interview_sentence_001_normal.mp3
```

`audio_slow_path` 示例：

```text
audio/daily_interview/word/daily_interview_word_001_slow.mp3
audio/daily_interview/sentence/daily_interview_sentence_001_slow.mp3
```

严禁出现：

```text
daily_interview_phrase_001_normal.mp3
daily_interview_phrase_001_slow.mp3
daily_interview_world_001_normal.mp3
```

## 8. 音频要求

每条素材必须有：

- 正常音频 `normal`
- 慢速音频 `slow`

normal = 正常语速。

slow = normal 的 0.75 倍语速。

normal 和 slow 必须是同一句中文内容，只是语速不同。

不要出现文本和音频错绑。

如果音频已经正确，但 `segments` 或 manifest 交接文档错误，只重建 manifest / README / validation_report / failed_items，不重新调用 TTS，不重生成 MP3。

## 9. 语言要求

每条素材必须有：

- 中文
- 拼音
- 地道越南语翻译

不要乱码。

不要缺拼音。

不要缺越南语声调。

不要把中文改成拼音。

不要把越南语写成机器翻译感很重的句子。

## 10. manifest.json 示例

示例只展示 1 个 word、1 个 sentence。实际第一批请生成 5 个 word、5 个 sentence。

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
  "items": [
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
    },
    {
      "id": "daily_interview_sentence_001",
      "type": "sentence",
      "chinese_text": "请先做一下自我介绍。",
      "pinyin": "Qǐng xiān zuò yíxià zìwǒ jièshào.",
      "vietnamese": "Vui lòng giới thiệu bản thân trước.",
      "audio_normal_path": "audio/daily_interview/sentence/daily_interview_sentence_001_normal.mp3",
      "audio_slow_path": "audio/daily_interview/sentence/daily_interview_sentence_001_slow.mp3",
      "segments": [
        {
          "text": "请先",
          "pinyin": "qǐng xiān",
          "vietnamese": "xin trước tiên",
          "segment_type": "短语",
          "pos": "副词"
        },
        {
          "text": "做一下",
          "pinyin": "zuò yíxià",
          "vietnamese": "làm một chút",
          "segment_type": "短语",
          "pos": "动词"
        },
        {
          "text": "自我介绍",
          "pinyin": "zìwǒ jièshào",
          "vietnamese": "giới thiệu bản thân",
          "segment_type": "短语",
          "pos": "名词"
        }
      ],
      "sort_order": 1,
      "enabled": true
    }
  ]
}
```

## 11. 自检要求

素材工厂生成完成后必须自检：

1. `manifest.json` 是否存在。
2. `audio/` 文件夹是否存在。
3. `README.md` 是否存在。
4. `validation_report.md` 是否存在。
5. 每条 `id` 是否唯一。
6. `type` 是否只包含 `word` / `sentence`。
7. 是否不存在 `phrase`。
8. 是否不存在 `world`。
9. `word` 是否全部为 1～4 个汉字。
10. `sentence` 是否全部为 5 个及以上汉字。
11. 每条 `sentence` 是否包含 `segments`。
12. 每个 segment 是否包含 `text`、`pinyin`、`vietnamese`、`segment_type`、`pos`。
13. `segment_type` 是否只包含 `词` / `短语` / `功能词块`。
14. `pos` 是否只包含 `名词` / `动词` / `形容词` / `代词` / `副词` / `功能词`。
15. 是否没有把 `生词`、`短语`、`关键词`、`word`、`phrase`、`sentence`、`vocab`、`keyword` 当成 `pos`。
16. 是否拒绝整句单 segment。
17. segments 拼接后是否能还原原句。
18. segments 是否能驱动 Pinda V1 多段下划线显示。
19. 是否存在 `audio/daily_interview/word/`。
20. 是否存在 `audio/daily_interview/sentence/`。
21. 是否不存在 `audio/daily_interview/phrase/`。
22. `chinese_text` 是否为空。
23. `pinyin` 是否为空。
24. `vietnamese` 是否为空。
25. `audio_normal_path` 是否能找到文件。
26. `audio_slow_path` 是否能找到文件。
27. normal 和 slow 是否是同一句。
28. slow 是否声明为 0.75。
29. 是否存在乱码。
30. 是否存在 `.env`、API Key、数据库密码、客户资料、Token、Cookie 或账号密码。
31. 是否存在 HSK 内容。
32. 是否存在过大文件。

## 12. 本地验收与导入顺序

素材包交给 Pinda V1 正式项目前必须遵守：

1. 先本地验收素材包。
2. 验收通过后，才复制到 Pinda V1 本地测试目录。
3. 本地浏览器预览通过后，才允许进入 GitHub 固化阶段。
4. 未通过本地预览，禁止上传 GitHub。
5. 未经老板确认，禁止 commit / push / PR / merge。

## 13. 最终输出结论

素材工厂最后必须输出：

A. 素材包路径

B. `manifest.json` 摘要

C. 音频文件数量

D. 自检报告

E. 是否可以交给 Pinda V1 正式项目做小批量导入测试

## 14. 禁止事项

不要修改 Pinda V1 正式项目源码。

不要输出 HSK 素材。

不要输出大批量素材。

不要输出 `.env`、API Key、数据库密码、客户资料、Token、Cookie 或账号密码。

不要生成 `phrase` 类型、目录名或文件名。

不要使用 `world` 作为类型、目录名或文件名。

不要省略 slow 音频。

不要省略 validation_report.md。
