(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.lessonRuntimeRules = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const beginnerTeachingPos = new Set([
    "noun",
    "verb",
    "adj",
    "adv",
    "prep",
    "particle",
    "pron",
    "possessive-pron",
    "phrase",
  ]);

  function getTeachingPosLabelKey(rawPos) {
    return beginnerTeachingPos.has(rawPos) ? rawPos : "";
  }

  function getPromptSizeVariant(text) {
    const value = String(text || "").trim();
    if (value.length >= 42) return "tiny";
    if (value.length >= 28) return "small";
    if (value.length >= 16) return "compact";
    return "normal";
  }

  return {
    getTeachingPosLabelKey,
    getPromptSizeVariant,
  };
});
