# 历史 Bug 回归风险表

## 使用方式

每次准备交给老板验收前，必须对照本表检查。凡是高风险项失败，本版本不允许交付。

## 高风险项

### R1. 未答前下划线泄题

- 风险：下划线底部提前显示词性、中文、拼音或越南语。
- 影响：学生不用听/不用拼就能看到答案。
- 当前防线：
  - `practice-rules.js`
  - `tests/practice-rules.test.js`
- 验收口径：
  - 未答前不显示提示。
  - 当前格答对后，只显示当前格提示。
  - 整题完成后，才显示完整解释。

### R2. 右侧记忆卡泄题

- 风险：右侧卡片提前显示答案详情。
- 影响：听写模式失效。
- 当前防线：
  - `practice-rules.js`
  - `tests/practice-rules.test.js`
- 验收口径：
  - 未完成前只显示锁定状态。
  - 完成后显示汉字、拼音、越南语解释、词性。

### R3. 真实词被拆成错误单字

- 风险：`申请` 拆成 `申/请`，`要求` 拆成 `要/求`。
- 影响：词性错误、教学错误、输入体验差。
- 当前防线：
  - `scripts/generate-high-frequency-content.mjs`
  - `tests/high-frequency-content.test.js`
- 验收口径：
  - `申请岗位` = `申请 + 岗位`
  - `岗位要求` = `岗位 + 要求`
  - 不出现 `申/需/求` 这类坏碎片。

### R4. 词性乱标

- 风险：动词被标成名词，助词被标成短语。
- 影响：初学者学错语法。
- 当前防线：
  - `lesson-runtime-rules.js`
  - `tests/lesson-runtime-rules.test.js`
  - `tests/high-frequency-content.test.js`
- 验收口径：
  - 初级只显示：名词、动词、形容词、副词、介词、助词。
  - `申请` 是动词。
  - `出发/打车/租房/发烧/上班/管理` 等常见动作词是动词。

### R5. 长句只有一条大下划线

- 风险：整句必须一次性输入，学生不知道错在哪里。
- 影响：训练体验差。
- 当前防线：
  - `tests/slot-granularity.test.js`
- 验收口径：
  - 短语和句子按词拆分。
  - 高频非生词项不出现超过 5 个汉字的输入格。
  - 全部 lesson 不出现超过 6 个汉字的输入格。

### R6. HSK 高等级内容低幼化

- 风险：HSK4/5 反复训练 `的`、人名、标题词或无逻辑短语。
- 影响：难度不匹配。
- 当前防线：
  - `tests/hsk345-content-quality.test.js`
  - `academic-review-agent.js`
  - `tests/academic-review-agent.test.js`
- 验收口径：
  - 不出现机械组合短语。
  - 不出现后台教学话术。
  - HSK5 不反复训练 HSK2 低级功能词。

### R7. 音频普通/慢速无明显差异

- 风险：慢速听起来和普通播放差不多。
- 影响：听写训练体验差。
- 当前防线：
  - `speech-config.js`
  - `tests/speech-config.test.js`
- 验收口径：
  - 生词 0.96
  - 短语 0.88
  - 句子 0.80
  - 慢速 0.52

### R8. 选错中文语音

- 风险：浏览器优先选到粤语/台湾声音。
- 影响：普通话学习不准确。
- 当前防线：
  - `speech-config.js`
  - `tests/speech-config.test.js`
- 验收口径：
  - 有 `zh-CN` / `zh-Hans` 时优先使用。
  - 没有大陆普通话时才回退到其他中文声音。

### R9. 音效不好听或不可区分

- 风险：键盘、正确、错误、完成音效区分不明显。
- 影响：轻游戏反馈不足。
- 当前防线：
  - `sound-effects.js`
  - `tests/sound-effects.test.js`
- 验收口径：
  - 键盘音效短促。
  - 正确音效高频双音。
  - 错误音效低频。
  - 完成音效更丰富。

## 发布前命令

```bash
npm.cmd run generate:high-frequency
npm.cmd test
```

通过标准：

```text
issueCount=0
fail=0
```
