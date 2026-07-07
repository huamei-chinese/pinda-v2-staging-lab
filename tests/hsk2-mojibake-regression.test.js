const assert = require("node:assert/strict");
const test = require("node:test");

const hsk2Modules = [
  "../lesson-hsk2-l1.js",
  "../lesson-hsk2-batch-2-5.js",
  "../lesson-hsk2-batch-6-10.js",
  "../lesson-hsk2-batch-11-15.js",
];

function hsk2Lessons() {
  return hsk2Modules.flatMap((modulePath) => {
    const pack = require(modulePath);
    return Array.isArray(pack.lessons) ? pack.lessons : [pack];
  });
}

function collectDisplayStrings(value, path = "root", results = []) {
  if (typeof value === "string") {
    results.push({ path, value });
    return results;
  }
  if (Array.isArray(value)) {
    value.forEach((entry, index) => collectDisplayStrings(entry, `${path}[${index}]`, results));
    return results;
  }
  if (value && typeof value === "object") {
    for (const [key, entry] of Object.entries(value)) {
      collectDisplayStrings(entry, `${path}.${key}`, results);
    }
  }
  return results;
}

test("HSK2 lesson 1 keeps approved readable Chinese and Vietnamese metadata", () => {
  const lesson1 = require("../lesson-hsk2-l1.js");
  const firstItem = lesson1.items[0];

  assert.equal(lesson1.titleZh, "九月去北京旅游最好");
  assert.equal(lesson1.titleVi, "Tháng chín là thời điểm đẹp nhất để du lịch Bắc Kinh");
  assert.equal(firstItem.hanzi, "九月");
  assert.equal(firstItem.vi, "tháng chín");
  assert.equal(firstItem.words[0].text, "九月");
});

test("HSK2 generated sentence prompts keep Vietnamese diacritics", () => {
  const lesson1 = require("../lesson-hsk2-l1.js");

  assert.equal(lesson1.items[14].vi, "Tôi muốn du lịch tốt nhất.");
  assert.equal(lesson1.items[15].vi, "tháng chín Bắc Kinh rất tốt nhất.");
  assert.equal(lesson1.items[16].vi, "Vui lòng sân bay mới.");
  assert.equal(lesson1.items[17].vi, "Chúng tôi buổi sáng xuất phát.");
  assert.equal(lesson1.items[18].vi, "ghế mới ở phòng.");
  assert.equal(lesson1.items[19].vi, "Chúng tôi đi Bắc Kinh du lịch.");
});

test("HSK2 generated lessons do not contain known mojibake markers in learner-facing fields", () => {
  const marker = /(涔濇湀|鍖椾含|鏃呮父|鎴戜滑|銆|俙|峄|岷|膽|谩|铆|锚)/;
  const offenders = collectDisplayStrings(hsk2Lessons())
    .filter(({ path }) => !path.endsWith(".source"))
    .filter(({ value }) => marker.test(value));

  assert.deepEqual(offenders, []);
});

test("HSK2 word prompts keep representative Vietnamese diacritics across lessons", () => {
  const expectedVietnamese = new Map([
    ["今天", "hôm nay"],
    ["问题", "vấn đề"],
    ["饭店", "nhà hàng"],
    ["便宜", "rẻ"],
    ["衣服", "quần áo"],
    ["妈妈", "mẹ"],
    ["天气", "thời tiết"],
    ["公共汽车", "xe buýt"],
    ["旅馆", "khách sạn"],
    ["医院", "bệnh viện"],
    ["公司", "công ty"],
    ["音乐", "âm nhạc"],
    ["中文", "tiếng Trung"],
    ["城市", "thành phố"],
    ["计划", "kế hoạch"],
  ]);
  const wordItems = hsk2Lessons().flatMap((lesson) => lesson.items.filter((item) => item.stage === "word"));

  for (const [hanzi, expectedVi] of expectedVietnamese) {
    const item = wordItems.find((entry) => entry.hanzi === hanzi);
    assert.ok(item, `missing HSK2 word item ${hanzi}`);
    assert.equal(item.vi, expectedVi);
    assert.equal(item.words[0].vi, expectedVi);
  }
});
