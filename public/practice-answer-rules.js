(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.practiceAnswerRules = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const possessivePronouns = {
    我: { text: "我的", pinyin: "wo de", tone: "wǒ de", vi: "của tôi" },
    你: { text: "你的", pinyin: "ni de", tone: "nǐ de", vi: "của bạn" },
    他: { text: "他的", pinyin: "ta de", tone: "tā de", vi: "của anh ấy" },
    她: { text: "她的", pinyin: "ta de", tone: "tā de", vi: "của cô ấy" },
    它: { text: "它的", pinyin: "ta de", tone: "tā de", vi: "của nó" },
    我们: { text: "我们的", pinyin: "women de", tone: "wǒmen de", vi: "của chúng tôi" },
    你们: { text: "你们的", pinyin: "nimen de", tone: "nǐmen de", vi: "của các bạn" },
    他们: { text: "他们的", pinyin: "tamen de", tone: "tāmen de", vi: "của họ" },
  };

  function normalizeLatin(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ü/g, "u")
      .replace(/v/g, "u")
      .replace(/[^a-z0-9]/g, "");
  }

  function normalizeHanzi(value) {
    return String(value || "").replace(/[。？！、，,.!?\s]/g, "");
  }

  function normalizePracticeWords(words = []) {
    const normalized = [];
    for (let index = 0; index < words.length; index += 1) {
      const current = words[index];
      const next = words[index + 1];
      const possessive = possessivePronouns[current?.text];
      if (possessive && next?.text === "的") {
        normalized.push({
          ...possessive,
          pos: "possessive-pron",
        });
        index += 1;
        continue;
      }
      normalized.push(current);
    }
    return normalized;
  }

  function matchContiguousAnswer(input, words = [], startIndex = 0, fullPinyin = "", fullHanzi = "") {
    const normalizedInput = normalizeLatin(input);
    const normalizedHanziInput = normalizeHanzi(input);
    if (!normalizedInput && !normalizedHanziInput) return { kind: "empty", count: 0 };

    if (
      (fullPinyin && normalizedInput === normalizeLatin(fullPinyin)) ||
      (fullHanzi && normalizedHanziInput === normalizeHanzi(fullHanzi))
    ) {
      return { kind: "full", start: 0, count: words.length };
    }

    if (startIndex >= 0 && startIndex < words.length) {
      for (let end = words.length; end > startIndex; end -= 1) {
        const slice = words.slice(startIndex, end);
        const pinyin = slice.map((word) => word.pinyin).join(" ");
        const hanzi = slice.map((word) => word.text).join("");
        if (normalizedInput === normalizeLatin(pinyin) || normalizedHanziInput === normalizeHanzi(hanzi)) {
          return { kind: "partial", start: startIndex, count: end - startIndex };
        }
      }
    }

    const currentPinyin = normalizeLatin(words[startIndex]?.pinyin || "");
    if (normalizedInput && currentPinyin && currentPinyin.startsWith(normalizedInput)) {
      return {
        kind: "progress",
        start: startIndex,
        inputLength: normalizedInput.length,
        totalLength: currentPinyin.length,
      };
    }

    return { kind: "none", count: 0 };
  }

  return {
    matchContiguousAnswer,
    normalizePracticeWords,
  };
});
