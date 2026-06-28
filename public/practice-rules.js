(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.practiceRules = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function shouldShowTeacherPreview(state) {
    return state.complete === true;
  }

  function shouldShowSlotMeta(state, index) {
    if (state.complete === true) return true;
    return Array.isArray(state.solved) && state.solved[index] === true;
  }

  function shouldShowMemoryDetails(state) {
    return state.complete === true;
  }

  function shouldRenderAnswerInput(state, index) {
    return index === state.activeWord && state.complete !== true;
  }

  return {
    shouldShowTeacherPreview,
    shouldShowSlotMeta,
    shouldShowMemoryDetails,
    shouldRenderAnswerInput,
  };
});
