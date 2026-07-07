export function hasSuspiciousPinyinQuestionMark(value) {
  const text = String(value || "");
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] !== "?") continue;

    const previous = text[index - 1] || "";
    const next = text[index + 1] || "";
    if (!/\p{L}/u.test(previous)) continue;
    if (/\p{L}/u.test(next)) return true;
    if (next && !/[\s"'”’\])}]/.test(next)) return true;

    const left = text.slice(0, index).match(/\p{L}+$/u)?.[0] || "";
    if (left.length === 1 && /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüńňǹḿ]/iu.test(left)) {
      continue;
    }
    if (left.length <= 1) return true;
  }
  return false;
}

export function pushPinyinGuardError(errors, value, label) {
  if (hasSuspiciousPinyinQuestionMark(value)) {
    errors.push(`${label} has suspicious pinyin mojibake question marks`);
  }
}
