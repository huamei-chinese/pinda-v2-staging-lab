(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.createPindaModuleBoundaries = api.createPindaModuleBoundaries;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const PRACTICE_ITEM_FIELDS = [
    "id",
    "stage",
    "type",
    "hanzi",
    "text",
    "pinyin",
    "tone",
    "vi",
    "vietnamese",
    "pos",
    "words",
    "segments",
    "segmentsText",
    "audio",
    "audio_normal_path",
    "audio_slow_path",
    "normal_audio",
    "slow_audio",
    "audioSlow",
    "explanation",
    "keywordMarks",
    "source",
  ];

  function ownObject(value) {
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  }

  function copyWhitelistedFields(item) {
    const source = ownObject(item);
    return PRACTICE_ITEM_FIELDS.reduce((result, field) => {
      if (Object.prototype.hasOwnProperty.call(source, field)) {
        result[field] = source[field];
      }
      return result;
    }, {});
  }

  function createContentData(root) {
    const state = ownObject(root);

    return {
      listLevels() {
        return Object.keys(ownObject(state.lessonContent));
      },
      getLesson(level, lessonId) {
        return ownObject(ownObject(state.lessonContent)[level])[lessonId] || null;
      },
      listHighFrequencyTopics() {
        return Array.isArray(state.highFrequencyTopics) ? state.highFrequencyTopics : [];
      },
      summarizeListeningCatalog(catalog) {
        const data = ownObject(catalog);
        const tracks = Array.isArray(data.tracks) ? data.tracks : [];
        return {
          schema_version: data.schema_version || "",
          module: data.module || "",
          tracks: tracks.length,
        };
      },
    };
  }

  function createContentAdapter() {
    return {
      toPracticeItem(item) {
        return copyWhitelistedFields(item);
      },
      toPracticeItems(items) {
        return Array.isArray(items) ? items.map(copyWhitelistedFields) : [];
      },
    };
  }

  function createLearningFeature(contentData, contentAdapter) {
    return {
      selectPracticeItems(level, lessonId, stage) {
        const lesson = contentData.getLesson(level, lessonId);
        const content = ownObject(lesson && lesson.content);
        return contentAdapter.toPracticeItems(content[stage]);
      },
    };
  }

  function createAccessPolicy() {
    return {
      canReadContent() {
        return true;
      },
      canWriteVip() {
        return false;
      },
      canUsePayment() {
        return false;
      },
      canReadDatabase() {
        return false;
      },
    };
  }

  function createPindaModuleBoundaries(root) {
    const contentData = createContentData(root);
    const contentAdapter = createContentAdapter();
    return {
      contentData,
      contentAdapter,
      learningFeature: createLearningFeature(contentData, contentAdapter),
      accessPolicy: createAccessPolicy(),
    };
  }

  return {
    createPindaModuleBoundaries,
  };
});
