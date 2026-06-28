# 给素材生产工厂 Codex 的提示词：生成 Pinda V1 HSK 生词 / 句子测试素材包

执行本文件前，必须先读取并遵守：

```text
docs/PINDA_V1_LOCAL_ACCEPTANCE_GATE.md
docs/hsk-material-standard.md
```

如果本文件与本地总验收闸门或 HSK 标准冲突，以本地总验收闸门和 HSK 标准为准。

## 1. 任务目标

你是素材生产工厂 Codex。

请按照 Pinda V1 HSK 生词 / 句子标准，生成第一批 HSK 对接测试素材包。

本提示词只是给素材工厂使用的生成说明，不是给 Pinda V1 正式项目直接执行。

## 2. 本次只允许生成的内容

只生成 HSK 学习模块中的：

1. `word` / 生词
2. `sentence` / 句子

不生成：

1. HSK 听力题型
2. HSK 考试题
3. 选图题
4. 判断题
5. 选择题
6. 长对话题
7. 答案解析题库
8. 图片题
9. `phrase`
10. `world`

## 3. 第一批测试范围

第一批必须小批量。

建议：

1. 1 个等级，例如 `HSK3`
2. 1 个课次，例如 `L01`
3. 5 条 `word`
4. 5 条 `sentence`
5. 总 item = 10
6. normal = 10
7. slow = 10
8. 总 MP3 = 20

## 4. 输出目录结构

素材工厂必须输出：

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

严禁输出：

```text
audio/HSK3/L01/phrase/
audio/HSK3/L01/world/
audio/HSK3/L01/keyword/
```

## 5. manifest 规则

`manifest.json` 顶层必须包含：

1. `package_id`
2. `module`
3. `version`
4. `language_pair`
5. `level`
6. `lesson`
7. `items`

固定值：

1. `module = hsk_course`
2. `language_pair = zh-vi`

`lesson` 必须包含：

1. `level`
2. `lesson_id`
3. `lesson_no`
4. `lesson_title_zh`
5. `lesson_title_vi`
6. `enabled`
7. `sort_order`

## 6. item 规则

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

严禁：

1. `phrase`
2. `world`
3. `keyword`
4. `vocabulary_phrase`

## 7. word 规则

`word` 是 HSK 生词。

要求：

1. 一般为 1～4 个汉字。
2. 必须优先保留教材核心生词。
3. HSK 教材原始生词不得漏词。
4. 测试包建议先做 5 条。
5. 每条必须有中文、拼音、越南语、normal 音频、slow 音频。

## 8. sentence 和 segments 规则

`sentence` 是 HSK 句子。

要求：

1. 一般为 5 个及以上汉字。
2. 必须自然、完整、适合教学。
3. 必须符合当前 HSK 等级和课次。
4. 必须有中文、拼音、越南语。
5. 必须有 normal 音频和 slow 音频。
6. 必须有 `segments`。

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

严禁把以下内容作为 `pos`：

1. 生词
2. 短语
3. 关键词
4. `word`
5. `phrase`
6. `sentence`
7. `vocab`
8. `keyword`

句子拆解标签必须能在 Pinda V1 前端显示为：

```text
segment_type · pos
```

## 9. 音频规则

每条 item 必须有：

1. normal 正常音频
2. slow 慢速音频

规则：

1. slow = normal 的 0.75 倍语速。
2. normal 和 slow 必须是同一句中文内容。
3. `audio_normal_path` 必须能找到真实 mp3。
4. `audio_slow_path` 必须能找到真实 mp3。
5. 不能生成 0KB mp3。
6. 不能生成假 mp3。
7. 不能文本和音频错绑。
8. 短词 slow 需要人工听审或 ASR 辅助抽查。

## 10. 生成流程

必须按顺序执行：

1. 先离线构造 manifest。
2. 先离线验证字段、分类、Unicode、禁用词。
3. 先做 1 条 TTS probe。
4. probe 通过后再批量 TTS。
5. 失败只重试失败条目，不重跑整包。
6. 生成后输出 `validation_report.md`。

## 11. Git 和交付规则

本地验收通过前禁止任何 Git 操作：

1. 不 commit
2. 不 push
3. 不创建 PR
4. 不 merge
5. 不上传 GitHub

素材工厂不得直接修改 Pinda V1 正式项目，不得导入素材到 Pinda V1。

## 12. 输出结论

素材工厂完成后必须输出：

1. 素材包路径
2. manifest 摘要
3. word / sentence 数量
4. normal / slow 音频数量
5. validation_report 摘要
6. 是否可以交给 Pinda V1 本地验收
