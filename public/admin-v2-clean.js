const cleanAdminState = {
  tab: "overview",
  language: "zh",
};

const cleanAdminText = {
  zh: {
    language: "中文 / Tiếng Việt",
    shell: "给阿辉的纯净后台",
    title: "华美后台数据管理中心 V2",
    summary: "只保留后台结构、导航、空状态、筛选条、表格骨架和操作位，不接真实数据。",
  },
  vi: {
    language: "Tiếng Việt / 中文",
    shell: "Backend sạch cho UI",
    title: "Trung tâm quản trị dữ liệu HuaMei V2",
    summary: "Chỉ giữ bố cục, điều hướng, trạng thái trống, bộ lọc, khung bảng và vị trí thao tác; không kết nối dữ liệu thật.",
  },
};

function setCleanAdminTab(tab) {
  cleanAdminState.tab = tab;
  document.querySelectorAll("[data-clean-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.cleanTab === tab);
  });
  document.querySelectorAll("[data-clean-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.cleanPanel === tab);
  });
}

function setCleanAdminLanguage(language) {
  cleanAdminState.language = language === "vi" ? "vi" : "zh";
  const copy = cleanAdminText[cleanAdminState.language];
  document.documentElement.lang = cleanAdminState.language === "vi" ? "vi" : "zh-CN";
  const languageButton = document.querySelector("[data-clean-language]");
  const eyebrow = document.querySelector(".clean-eyebrow");
  const title = document.querySelector(".clean-topbar h1");
  const summary = document.querySelector(".clean-topbar p");
  if (languageButton) languageButton.textContent = copy.language;
  if (eyebrow) eyebrow.textContent = copy.shell;
  if (title) title.textContent = copy.title;
  if (summary) summary.textContent = copy.summary;
}

document.querySelectorAll("[data-clean-tab]").forEach((button) => {
  button.addEventListener("click", () => setCleanAdminTab(button.dataset.cleanTab));
});

document.querySelector("[data-clean-language]")?.addEventListener("click", () => {
  setCleanAdminLanguage(cleanAdminState.language === "zh" ? "vi" : "zh");
});

setCleanAdminTab(cleanAdminState.tab);
setCleanAdminLanguage(cleanAdminState.language);
