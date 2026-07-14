(function (root, factory) {
  const api = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.registerNewFormatLessonContent = api.registerNewFormatLessonContent;
  root.registerNewFormatHighFrequencyTopics = api.registerNewFormatHighFrequencyTopics;
  root.runtimeAudio = {
    resolveAudioSource: api.resolveAudioSource,
    expandAudioPathCandidates: api.expandAudioPathCandidates,
  };
})(typeof globalThis !== "undefined" ? globalThis : this, function (root) {
  const posMap = [
    [/đại từ|dai tu/i, "pron"],
    [/động từ|dong tu/i, "verb"],
    [/tính từ|tinh tu/i, "adj"],
    [/phó từ|pho tu/i, "adv"],
    [/danh từ|danh tu/i, "noun"],
    [/cụm|cum/i, "phrase"],
  ];

  function normalizePos(rawValue, fallback = "phrase") {
    const value = String(rawValue || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase();
    if (value.includes("dai tu")) return "pron";
    if (value.includes("dong tu")) return "verb";
    if (value.includes("tinh tu")) return "adj";
    if (value.includes("pho tu")) return "adv";
    if (value.includes("danh tu")) return "noun";
    if (value.includes("cum")) return "phrase";
    const match = posMap.find(([pattern]) => pattern.test(String(rawValue || "")));
    return match ? match[1] : fallback;
  }

  function stripTitleSuffix(title, type) {
    return String(title || "")
      .replace(type === "word" ? /\s*-\s*(生词|world|word)\s*$/i : /\s*-\s*(长句|句子|sentence|phrase)\s*$/i, "")
      .trim();
  }

  function makeWord(entry, type) {
    return {
      text: entry.hanzi || "",
      pinyin: entry.pinyin || "",
      tone: entry.pinyin || "",
      pos: normalizePos(entry.part_of_speech || entry.grammar_notes, type === "word" ? "noun" : "phrase"),
      vi: entry.vietnamese || "",
    };
  }

  function makeSegments(entry) {
    if (!Array.isArray(entry.segments)) return [];
    return entry.segments.map((segment) => ({
      text: segment.text || "",
      pos: normalizePos(segment.pos, "phrase"),
      rawPos: segment.pos || "",
    })).filter((segment) => segment.text);
  }

  function splitPinyin(value) {
    return String(value || "")
      .replace(/[,.!?。？！、，]/g, "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
  }

  function makeSegmentWords(entry, segments) {
    const pinyinParts = splitPinyin(entry.pinyin);
    const oneToOne = pinyinParts.length === segments.length;
    let cursor = 0;
    return segments.map((segment, index) => {
      let pinyin = "";
      if (oneToOne) {
        pinyin = pinyinParts[index] || "";
      } else {
        const remainingSegments = segments.length - index;
        const remainingParts = pinyinParts.length - cursor;
        const count = Math.max(1, remainingParts - remainingSegments + 1);
        pinyin = pinyinParts.slice(cursor, cursor + count).join(" ");
        cursor += count;
      }
      return {
        text: segment.text,
        pinyin,
        tone: pinyin,
        pos: segment.pos,
        vi: segment.rawPos || segment.text,
      };
    });
  }

  function firstTextValue(values) {
    for (const value of values) {
      if (typeof value === "string" && value.trim()) return value.trim();
    }
    return "";
  }

  function resolveAudioSource(item, speed = "normal") {
    if (!item || typeof item !== "object") return "";
    const audio = item.audio && typeof item.audio === "object" ? item.audio : {};
    if (speed === "slow") {
      return firstTextValue([
        item.audio_slow_path,
        audio.slow,
        item.slow_audio,
        item.audioSlow,
        item.audio_slow,
        item.audioNormal,
        item.audioSrc,
        typeof item.audio === "string" ? item.audio : "",
      ]);
    }
    return firstTextValue([
      item.audio_normal_path,
      audio.normal,
      item.normal_audio,
      item.audioNormal,
      item.audioSrc,
      typeof item.audio === "string" ? item.audio : "",
    ]);
  }

  function addCandidate(candidates, value) {
    if (value && !candidates.includes(value)) candidates.push(value);
  }

  function expandAudioPathCandidates(source) {
    const original = typeof source === "string" ? source.trim() : "";
    if (!original) return [];
    const candidates = [original];
    const variants = [
      [/(^|\/)daily(?=\/)/g, "$1Daily"],
      [/(^|\/)Daily(?=\/)/g, "$1daily"],
      [/(^|\/)hsk(?=\/)/g, "$1HSK"],
      [/(^|\/)HSK(?=\/)/g, "$1hsk"],
      [/(^|\/)word(?=\/)/g, "$1Word"],
      [/(^|\/)Word(?=\/)/g, "$1word"],
      [/(^|\/)word(?=\/)/g, "$1world"],
      [/(^|\/)Word(?=\/)/g, "$1world"],
      [/(^|\/)world(?=\/)/g, "$1Word"],
      [/(^|\/)phrase(?=\/)/g, "$1Phrase"],
      [/(^|\/)Phrase(?=\/)/g, "$1phrase"],
    ];

    for (const [pattern, replacement] of variants) {
      addCandidate(candidates, original.replace(pattern, replacement));
    }

    const snapshot = [...candidates];
    for (const candidate of snapshot) {
      if (candidate.includes("/Daily/")) addCandidate(candidates, candidate.replace(/\/word\//g, "/Word/"));
      if (candidate.includes("/daily/")) addCandidate(candidates, candidate.replace(/\/word\//g, "/Word/"));
      addCandidate(candidates, candidate.replace(/\/Word\//g, "/world/"));
      addCandidate(candidates, candidate.replace(/\/word\//g, "/world/"));
      addCandidate(candidates, candidate.replace(/\/world\//g, "/Word/"));
    }

    return candidates;
  }

  function makeItem(entry, type, source) {
    const word = makeWord(entry, type);
    const segments = makeSegments(entry);
    const words = type === "phrase" && segments.length > 0 ? makeSegmentWords(entry, segments) : [word];
    const audioNormal = firstTextValue([entry.audio_normal_path, entry.normal_audio]);
    const audioSlow = firstTextValue([entry.audio_slow_path, entry.slow_audio, entry.audioSlow]);
    return {
      id: entry.id,
      stage: type,
      vi: entry.vietnamese || "",
      hanzi: entry.hanzi || "",
      words,
      source,
      pinyin: entry.pinyin || "",
      tone: entry.pinyin || "",
      audio_normal_path: audioNormal,
      audio_slow_path: audioSlow,
      normal_audio: entry.normal_audio || "",
      slow_audio: entry.slow_audio || "",
      audioSlow: entry.audioSlow || audioSlow,
      audio: {
        normal: audioNormal,
        slow: audioSlow,
        normalSpeed: entry.normal_speed,
        slowSpeed: entry.slow_speed,
      },
      explanation: entry.explanation || entry.grammar_notes || "",
      keywordMarks: Array.isArray(entry.keyword_marks) ? entry.keyword_marks : [],
      segments,
      segmentsText: entry.segments_text || "",
    };
  }

  function registerNewFormatLessonContent(rawPacks, options = {}) {
    const packs = Array.isArray(rawPacks) ? rawPacks : [rawPacks];
    const firstPack = packs.find(Boolean) || {};
    const type = options.contentType || firstPack.type || "word";
    const level = options.level || firstPack.level;
    const lessonId = options.lessonId || firstPack.id;
    if (!level || !lessonId) return null;

    const no = options.no || firstPack.lesson_number || firstPack.no || 1;
    const source = firstPack.source || "new lesson format";
    const titleZh = options.titleZh || stripTitleSuffix(firstPack.title, type) || firstPack.title || lessonId;
    const titleVi = options.titleVi || firstPack.topic || titleZh;
    const items = packs.flatMap((pack) => (Array.isArray(pack.items) ? pack.items : []).map((entry) => makeItem(entry, type, source)));

    root.lessonContent = root.lessonContent || {};
    root.lessonContent[level] = root.lessonContent[level] || {};
    const existing = root.lessonContent[level][lessonId] || {};
    const content = {
      ...(existing.content || {}),
      [type]: items,
    };

    root.lessonContent[level][lessonId] = {
      ...existing,
      id: lessonId,
      no,
      title: existing.title || titleZh,
      titleZh: existing.titleZh || titleZh,
      titleVi: existing.titleVi || titleVi,
      content,
      items: [...(content.word || []), ...(content.phrase || [])],
    };

    return root.lessonContent[level][lessonId];
  }

  function highFrequencyThemeId(pack = {}) {
    const base = pack.id || [pack.topic_id, pack.unit_id].filter(Boolean).join("-");
    return String(base || "daily-topic").replace(/-(world|word|phrase|sentence)$/i, "");
  }

  function registerNewFormatHighFrequencyTopics(rawPacks, options = {}) {
    const packs = Array.isArray(rawPacks) ? rawPacks : [rawPacks];
    root.highFrequencyTopics = Array.isArray(root.highFrequencyTopics) ? root.highFrequencyTopics : [];

    for (const pack of packs) {
      if (!pack || !Array.isArray(pack.items)) continue;
      const contentType = options.contentType || (pack.type === "world" ? "word" : pack.type) || "word";
      const themeId = options.themeId || highFrequencyThemeId(pack);
      const existing = root.highFrequencyTopics.find((theme) => theme.id === themeId);
      const theme = existing || {
        id: themeId,
        icon: options.icon || "CN",
        vi: pack.topic || pack.title || themeId,
        zh: stripTitleSuffix(pack.title, contentType) || pack.title || themeId,
        levelRange: options.levelRange || "HSK1-HSK4",
        color: options.color || "#0ea855",
        items: [],
      };

      const newItems = pack.items.map((entry) => makeItem(entry, contentType, pack.source || "new high-frequency format"));
      const seenIds = new Set(theme.items.map((item) => item.id).filter(Boolean));
      for (const item of newItems) {
        if (item.id && seenIds.has(item.id)) continue;
        theme.items.push(item);
        if (item.id) seenIds.add(item.id);
      }

      if (!existing) root.highFrequencyTopics.push(theme);
    }

    return root.highFrequencyTopics;
  }

  return {
    registerNewFormatLessonContent,
    registerNewFormatHighFrequencyTopics,
    resolveAudioSource,
    expandAudioPathCandidates,
  };
});
