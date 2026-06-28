# HOOK：长句词性拆解与拼音判断防错提醒

执行本文件前，必须先读取并遵守：
docs/PINDA_V1_LOCAL_ACCEPTANCE_GATE.md

如果本文件内容与本地总验收闸门冲突，以本地总验收闸门为准。

## 1. 长句拆解前必须检查

1. 学习模块只有 word / sentence。
2. sentence 内部 segments 不是学习模块。
3. segments 必须有 segment_type 和 pos。
4. segment_type 只能是 词 / 短语 / 功能词块。
5. pos 只能是 名词 / 动词 / 形容词 / 代词 / 副词 / 功能词。
6. 禁止把 生词 / 短语 / 关键词 当成 pos。
7. 禁止把 phrase 作为独立学习模块。
8. 2～4 个字的自然词块可以作为 segment，但必须正确标注 segment_type 和 pos。

## 2. 拼音判断前必须检查

1. 拼音正确但不完整，不得显示红色。
2. 红色只能表示拼音错误。
3. 数量不完整不等于拼音错误。
4. 空格不同不应直接判错。
5. 带声调和不带声调应尽量兼容。
6. 用户输入部分正确时，应给温和反馈。

## 3. 下划线颜色检查

1. 长句词块普通状态下可以多色显示。
2. 多色下划线只用于视觉区分。
3. 红色只用于错误。
4. 绿色只用于正确。

## 4. 页面渲染防错

1. 句子 segment 卡片底部标签不得读取 item.type / stage / word / sentence。
2. 句子 segment 卡片底部标签必须读取 segment.segment_type 和 segment.pos。
3. “生词”只能是学习入口名，不能出现在句子拆解标签中。
4. “短语”只能作为 segment_type，不能单独作为词性标签。
5. 首页标题不得被练习页下划线样式污染。
6. 多色下划线 CSS 必须限定在 practice screen 作用域内。

## 5. 强制渲染规则

1. 句子拆解卡片底部标签只能由 displaySegmentLabel(segment) 生成。
2. 禁止直接显示 segment.pos。
3. 禁止直接显示 segment.type。
4. 禁止从 item.type / stage / word / sentence 推导句子拆解标签。
5. 标签必须包含 “ · ”。
6. 标签必须是 segment_type + pos。
7. 如果标签不包含 “ · ”，验收失败。
8. “生词”只能作为学习入口名称，不能出现在句子拆解卡片底部。
9. “短语”只能作为 segment_type，不能单独作为标签。
