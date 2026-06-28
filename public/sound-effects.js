(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.soundEffects = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const patterns = {
    key: {
      frequencies: [1320],
      waveform: "square",
      volume: 0.012,
      duration: 0.038,
      step: 0.034,
      attack: 0.004,
    },
    correct: {
      frequencies: [760, 1040],
      waveform: "sine",
      volume: 0.05,
      duration: 0.12,
      step: 0.046,
      attack: 0.006,
    },
    error: {
      frequencies: [180, 132],
      waveform: "triangle",
      volume: 0.035,
      duration: 0.15,
      step: 0.052,
      attack: 0.006,
    },
    success: {
      frequencies: [620, 820, 1040, 1320],
      waveform: "sine",
      volume: 0.055,
      duration: 0.18,
      step: 0.048,
      attack: 0.006,
    },
  };

  function getTonePattern(kind) {
    return patterns[kind] || patterns.key;
  }

  return { getTonePattern };
});
