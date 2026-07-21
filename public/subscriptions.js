const addPlanBtn = document.querySelector("#addPlanBtn");
const downloadCsvBtn = document.querySelector("#downloadCsvBtn");
const planDialog = document.querySelector("#planDialog");
const planDialogForm = document.querySelector("#planDialogForm");
const planTableBody = document.querySelector("#planTableBody");
const planDialogTitle = document.querySelector("#planDialogTitle");
const planIdInput = document.querySelector("#planIdInput");
const planNameViInput = document.querySelector("#planNameViInput");
const planNameZhInput = document.querySelector("#planNameZhInput");
const planDurationInput = document.querySelector("#planDurationInput");
const planDurationUnitSelect = document.querySelector("#planDurationUnitSelect");
const planAmountInput = document.querySelector("#planAmountInput");
const planStatusSelect = document.querySelector("#planStatusSelect");
const planSortInput = document.querySelector("#planSortInput");
const toast = document.querySelector("#toast");
const recentTransactionsList = document.querySelector("#recentTransactionsList");

let editingPlanId = null;
let plans = [];
let latestStats = {};
let latestTransactions = [];
let currentLang = new URLSearchParams(window.location.search).get("lang") || localStorage.getItem("v2-lang") || "vi";

const i18n = {
  vi: {
    pageTitle: "Quản lý gói đăng ký",
    pageSubtitle: "Theo dõi doanh thu và tối ưu hóa các gói học tập của HuaMei.",
    addPlan: "Thêm gói mới",
    totalRevenue: "Tổng doanh thu",
    activePlans: "Gói đang hoạt động",
    users: "Users",
    renewalRate: "Tỷ lệ gia hạn",
    planList: "Danh sách gói dịch vụ",
    downloadCsv: "Tải CSV",
    planName: "Tên gói",
    price: "Giá (VNĐ)",
    buyers: "Người mua",
    status: "Trạng thái",
    actions: "Thao tác",
    recentTransactions: "Giao dịch gần đây",
    latest: "Mới nhất",
    loadingTransactions: "Đang tải giao dịch...",
    emptyPlans: "Chưa có gói dịch vụ nào. Nhấn \"Thêm gói mới\" để tạo.",
    emptyTransactions: "Chưa có giao dịch thanh toán.",
    active: "Đang bán",
    hidden: "Tạm ẩn",
    edit: "Sửa",
    delete: "Xóa",
    editPlan: "Chỉnh sửa gói",
    newPlan: "Thêm gói mới",
    close: "Đóng",
    planId: "Mã gói",
    planNameVi: "Tên gói (Tiếng Việt)",
    planNameZh: "Tên gói (Tiếng Trung)",
    duration: "Thời hạn",
    durationUnit: "Đơn vị thời hạn",
    months: "Tháng",
    days: "Ngày",
    amount: "Giá bán (VNĐ)",
    sortOrder: "Thứ tự hiển thị",
    savePlan: "Lưu gói",
    noRevenue: "Chưa có doanh thu tháng này",
    revenueThisMonth: "{value} tháng này",
    upWeek: "Tăng {value} so với tuần trước",
    downWeek: "Giảm {value} so với tuần trước",
    noWeekTransactions: "Chưa có giao dịch tuần này",
    renewalStable: "Đang ở mức ổn định",
    renewalImprove: "Cần cải thiện tỷ lệ gia hạn",
    renewalEmpty: "Chưa có dữ liệu gia hạn",
    customer: "Khách hàng",
    proPlan: "Gói Pro",
    adminRequired: "Vui lòng đăng nhập bằng tài khoản admin.",
    cannotConnect: "Không thể kết nối server.",
    updatedPlan: "Đã cập nhật gói đăng ký.",
    addedPlan: "Đã thêm gói mới.",
    deletedPlan: "Đã xóa gói.",
    confirmDelete: "Xóa gói \"{name}\"?",
    csvToast: "Đã tải danh sách gói (CSV)",
    csvHeader: "Ma goi,Ten goi,Thoi han,Don vi,Gia VND,Trang thai,Nguoi mua",
  },
  zh: {
    pageTitle: "订阅套餐管理",
    pageSubtitle: "跟踪收入并优化 HuaMei 的学习套餐。",
    addPlan: "新增套餐",
    totalRevenue: "总收入",
    activePlans: "生效套餐",
    users: "用户",
    renewalRate: "续费率",
    planList: "套餐列表",
    downloadCsv: "下载 CSV",
    planName: "套餐名称",
    price: "价格 (VNĐ)",
    buyers: "购买人数",
    status: "状态",
    actions: "操作",
    recentTransactions: "最近交易",
    latest: "最新",
    loadingTransactions: "正在加载交易...",
    emptyPlans: "暂无套餐。点击“新增套餐”创建。",
    emptyTransactions: "暂无支付交易。",
    active: "在售",
    hidden: "隐藏",
    edit: "编辑",
    delete: "删除",
    editPlan: "编辑套餐",
    newPlan: "新增套餐",
    close: "关闭",
    planId: "套餐 ID",
    planNameVi: "套餐名称（越南语）",
    planNameZh: "套餐名称（中文）",
    duration: "时长",
    durationUnit: "时长单位",
    months: "月",
    days: "天",
    amount: "售价 (VNĐ)",
    sortOrder: "显示顺序",
    savePlan: "保存套餐",
    noRevenue: "本月暂无收入",
    revenueThisMonth: "{value} 本月",
    upWeek: "较上周增长 {value}",
    downWeek: "较上周下降 {value}",
    noWeekTransactions: "本周暂无交易",
    renewalStable: "当前较稳定",
    renewalImprove: "需要提升续费率",
    renewalEmpty: "暂无续费数据",
    customer: "客户",
    proPlan: "Pro 套餐",
    adminRequired: "请使用管理员账户登录。",
    cannotConnect: "无法连接服务器。",
    updatedPlan: "已更新套餐。",
    addedPlan: "已新增套餐。",
    deletedPlan: "已删除套餐。",
    confirmDelete: "删除套餐“{name}”？",
    csvToast: "已下载套餐列表 (CSV)",
    csvHeader: "套餐ID,套餐名称,时长,单位,价格VND,状态,购买人数",
  },
};

const tr = (key) => (i18n[currentLang] || i18n.vi)[key] || i18n.vi[key] || key;

function getAdminUserId() {
  try {
    const user = JSON.parse(
      localStorage.getItem("huamei_admin_user")
        || localStorage.getItem("v2-user")
        || "null",
    );
    return String(user?.role || "").toLowerCase() === "admin" ? user.id : "";
  } catch {
    return "";
  }
}

function formatAmount(value) {
  return Number(value || 0).toLocaleString("vi-VN");
}

function parseAmount(value) {
  return Number(String(value || "").replace(/[^\d]/g, ""));
}

function showToast(message, isError = false) {
  toast.textContent = message;
  toast.classList.toggle("error", isError);
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function applyStaticLanguage() {
  document.documentElement.lang = currentLang;
  document.title = tr("pageTitle");
  document.querySelector(".subscription-hero h1").textContent = tr("pageTitle");
  document.querySelector(".subscription-hero p").textContent = tr("pageSubtitle");
  addPlanBtn.lastChild.textContent = ` ${tr("addPlan")}`;
  document.querySelector(".metric-card:nth-child(1) p").textContent = tr("totalRevenue");
  document.querySelector(".metric-card:nth-child(2) p").textContent = tr("activePlans");
  document.querySelector(".metric-card:nth-child(2) em").textContent = tr("users");
  document.querySelector(".metric-card:nth-child(3) p").textContent = tr("renewalRate");
  document.querySelector(".plans-panel .panel-title h2").textContent = tr("planList");
  downloadCsvBtn.textContent = tr("downloadCsv");
  document.querySelector(".plan-table").setAttribute("aria-label", tr("planList"));
  const headers = document.querySelectorAll(".plan-head [role='columnheader']");
  [tr("planName"), tr("price"), tr("buyers"), tr("status"), tr("actions")].forEach((text, index) => {
    if (headers[index]) headers[index].textContent = text;
  });
  document.querySelector(".transaction-panel .panel-title h2").textContent = tr("recentTransactions");
  document.querySelector(".today-badge").textContent = tr("latest");
  document.querySelector(".dialog-close")?.setAttribute("aria-label", tr("close"));
  const labels = planDialogForm?.querySelectorAll("label") || [];
  const labelText = [tr("planId"), tr("planNameVi"), tr("planNameZh"), tr("duration"), tr("amount"), tr("sortOrder"), tr("status")];
  labels.forEach((label, index) => {
    const firstText = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (firstText) firstText.textContent = `\n        ${labelText[index]}\n        `;
  });
  planDurationUnitSelect?.setAttribute("aria-label", tr("durationUnit"));
  const monthOption = planDurationUnitSelect?.querySelector('option[value="months"]');
  const dayOption = planDurationUnitSelect?.querySelector('option[value="days"]');
  if (monthOption) monthOption.textContent = tr("months");
  if (dayOption) dayOption.textContent = tr("days");
  const activeOption = planStatusSelect?.querySelector('option[value="active"]');
  const hiddenOption = planStatusSelect?.querySelector('option[value="hidden"]');
  if (activeOption) activeOption.textContent = tr("active");
  if (hiddenOption) hiddenOption.textContent = tr("hidden");
  document.querySelector(".dialog-submit").textContent = tr("savePlan");
  if (planDialogTitle) planDialogTitle.textContent = editingPlanId ? tr("editPlan") : tr("newPlan");
}

function applyLanguage(nextLang = currentLang) {
  currentLang = nextLang === "zh" ? "zh" : "vi";
  localStorage.setItem("v2-lang", currentLang);
  applyStaticLanguage();
  renderStats(latestStats);
  renderRecentTransactions(latestTransactions);
  renderPlans();
}

async function apiRequest(path, options = {}) {
  let firebaseIdToken = "";
  try {
    if (window.parent !== window && typeof window.parent.getFirebaseIdToken === "function") {
      firebaseIdToken = await window.parent.getFirebaseIdToken();
    } else {
      const session = JSON.parse(localStorage.getItem("huamei_student_token") || "null");
      if (session?.idToken && Number(session.expiresAt || 0) > Date.now()) {
        firebaseIdToken = session.idToken;
      }
    }
  } catch {
    firebaseIdToken = "";
  }
  const response = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(firebaseIdToken ? { Authorization: `Bearer ${firebaseIdToken}` } : {}),
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error
      || (Array.isArray(data.message) ? data.message[0] : data.message)
      || tr("cannotConnect");
    throw new Error(message);
  }
  return data;
}

function adminHeaders() {
  const adminUserId = getAdminUserId();
  if (!adminUserId) {
    throw new Error(tr("adminRequired"));
  }
  return { "X-Admin-User-Id": adminUserId };
}

function formatPercent(value) {
  const number = Number(value || 0);
  const sign = number > 0 ? "+" : "";
  return `${sign}${number.toLocaleString("vi-VN", { maximumFractionDigits: 1 })}%`;
}

function formatTransactionTime(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
  }).format(date);
}

function setMetricTrend(element, value, positiveText, negativeText, neutralText) {
  if (!element) return;
  const number = Number(value || 0);
  element.classList.remove("stable", "neutral", "down");
  if (number > 0) {
    element.textContent = positiveText.replace("{value}", formatPercent(number));
  } else if (number < 0) {
    element.classList.add("down");
    element.textContent = negativeText.replace("{value}", formatPercent(number));
  } else {
    element.classList.add("neutral");
    element.textContent = neutralText;
  }
}

function renderStats(stats) {
  const totalRevenueMetric = document.querySelector("#totalRevenueMetric");
  const revenueGrowthMetric = document.querySelector("#revenueGrowthMetric");
  const activeUsersMetric = document.querySelector("#activeUsersMetric");
  const activeUsersGrowthMetric = document.querySelector("#activeUsersGrowthMetric");
  const renewalRateMetric = document.querySelector("#renewalRateMetric");
  const renewalStatusMetric = document.querySelector("#renewalStatusMetric");

  if (totalRevenueMetric) {
    totalRevenueMetric.textContent = formatAmount(stats?.totalRevenue || 0);
  }

  setMetricTrend(
    revenueGrowthMetric,
    stats?.revenueGrowthPercent,
    tr("revenueThisMonth"),
    tr("revenueThisMonth"),
    tr("noRevenue"),
  );

  if (activeUsersMetric) {
    activeUsersMetric.textContent = formatAmount(stats?.activePremiumUsers || 0);
  }

  setMetricTrend(
    activeUsersGrowthMetric,
    stats?.weekGrowthPercent,
    tr("upWeek"),
    tr("downWeek"),
    tr("noWeekTransactions"),
  );

  if (renewalRateMetric) {
    renewalRateMetric.textContent = `${Number(stats?.renewalRatePercent || 0).toLocaleString("vi-VN", { maximumFractionDigits: 1 })}%`;
  }

  if (renewalStatusMetric) {
    const rate = Number(stats?.renewalRatePercent || 0);
    renewalStatusMetric.classList.remove("stable", "neutral", "down");
    if (rate >= 60) {
      renewalStatusMetric.classList.add("stable");
      renewalStatusMetric.textContent = tr("renewalStable");
    } else if (rate > 0) {
      renewalStatusMetric.classList.add("neutral");
      renewalStatusMetric.textContent = tr("renewalImprove");
    } else {
      renewalStatusMetric.classList.add("neutral");
      renewalStatusMetric.textContent = tr("renewalEmpty");
    }
  }
}

function renderRecentTransactions(transactions) {
  if (!recentTransactionsList) return;

  if (!transactions?.length) {
    recentTransactionsList.innerHTML = `<p class="transaction-empty">${tr("emptyTransactions")}</p>`;
    return;
  }

  recentTransactionsList.innerHTML = transactions.map((tx) => `
    <article class="transaction-item">
      <div class="transaction-avatar">${escapeHtml(String(tx.userName || tx.userEmail || "U").charAt(0).toUpperCase())}</div>
      <div>
        <strong>${escapeHtml(tx.userName || tx.userEmail || tr("customer"))}</strong>
        <span>${escapeHtml(tx.planName || tr("proPlan"))} - ${formatTransactionTime(tx.paidAt)}</span>
      </div>
      <p>+${formatAmount(tx.amount)}đ</p>
    </article>
  `).join("");
}

async function loadStats() {
  try {
    const data = await apiRequest("/api/admin/plans/stats", {
      headers: adminHeaders(),
    });
    latestStats = data.stats || {};
    latestTransactions = data.stats?.recentTransactions || [];
    renderStats(latestStats);
    renderRecentTransactions(latestTransactions);
  } catch (error) {
    latestStats = {};
    latestTransactions = [];
    renderStats({});
    if (recentTransactionsList) {
      recentTransactionsList.innerHTML = `<p class="transaction-empty">${escapeHtml(error.message)}</p>`;
    }
  }
}

function planBadge(plan) {
  const value = Number(plan.months) || 0;
  if (plan.durationUnit === "days") return `${value}D`;
  if (value >= 12) return `${Math.round(value / 12)}Y`;
  return `${value}M`;
}

function formatPlanDuration(plan) {
  const value = Number(plan.months) || 0;
  if (plan.durationUnit === "days") return `${value} ${tr("days").toLowerCase()}`;
  return `${value} ${tr("months").toLowerCase()}`;
}

function renderPlans() {
  if (!planTableBody) return;

  if (!plans.length) {
    planTableBody.innerHTML = `
      <div class="plan-row plan-empty" role="row">
        <span role="cell">${tr("emptyPlans")}</span>
      </div>
    `;
    return;
  }

  planTableBody.innerHTML = plans.map((plan) => `
    <div class="plan-row" role="row" data-plan-id="${escapeHtml(plan.id)}">
      <span class="plan-name" role="cell">
        <i>${escapeHtml(planBadge(plan))}</i>
        ${escapeHtml(currentLang === "zh" ? (plan.nameZh || plan.nameVi) : plan.nameVi)}
        <small>${escapeHtml(formatPlanDuration(plan))}</small>
      </span>
      <span role="cell">${formatAmount(plan.amount)}</span>
      <span role="cell">${formatAmount(plan.buyerCount || 0)}</span>
      <span role="cell">
        <mark class="${plan.isActive ? "" : "inactive"}">${plan.isActive ? tr("active") : tr("hidden")}</mark>
      </span>
      <span class="plan-actions" role="cell">
        <button class="icon-action edit-plan-btn" type="button" aria-label="${tr("edit")} ${escapeHtml(currentLang === "zh" ? (plan.nameZh || plan.nameVi) : plan.nameVi)}">✎</button>
        <button class="icon-action delete delete-plan-btn" type="button" aria-label="${tr("delete")} ${escapeHtml(currentLang === "zh" ? (plan.nameZh || plan.nameVi) : plan.nameVi)}">🗑</button>
      </span>
    </div>
  `).join("");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function openPlanDialog(plan = null) {
  editingPlanId = plan?.id || null;
  if (planDialogTitle) {
    planDialogTitle.textContent = plan ? tr("editPlan") : tr("newPlan");
  }
  if (planIdInput) {
    planIdInput.value = plan?.id || "";
    planIdInput.disabled = Boolean(plan);
  }
  if (planNameViInput) planNameViInput.value = plan?.nameVi || "";
  if (planNameZhInput) planNameZhInput.value = plan?.nameZh || "";
  if (planDurationInput) planDurationInput.value = plan?.months ?? "";
  if (planDurationUnitSelect) planDurationUnitSelect.value = plan?.durationUnit === "days" ? "days" : "months";
  if (planAmountInput) planAmountInput.value = plan ? formatAmount(plan.amount) : "";
  if (planStatusSelect) planStatusSelect.value = plan?.isActive === false ? "hidden" : "active";
  if (planSortInput) planSortInput.value = plan?.sortOrder ?? plans.length + 1;

  if (typeof planDialog?.showModal === "function") {
    planDialog.showModal();
  }
}

async function loadPlans() {
  try {
    const data = await apiRequest("/api/admin/plans", {
      headers: adminHeaders(),
    });
    plans = data.plans || [];
    renderPlans();
  } catch (error) {
    showToast(error.message, true);
    plans = [];
    renderPlans();
  }
}

async function savePlan(event) {
  event.preventDefault();

  const payload = {
    id: planIdInput?.value.trim().toLowerCase() || "",
    nameVi: planNameViInput?.value.trim() || "",
    nameZh: planNameZhInput?.value.trim() || "",
    months: Number(planDurationInput?.value || 0),
    durationUnit: planDurationUnitSelect?.value === "days" ? "days" : "months",
    amount: parseAmount(planAmountInput?.value),
    isActive: planStatusSelect?.value !== "hidden",
    sortOrder: Number(planSortInput?.value || 0),
  };

  try {
    if (editingPlanId) {
      await apiRequest(`/api/admin/plans/${encodeURIComponent(editingPlanId)}`, {
        method: "PATCH",
        headers: adminHeaders(),
        body: JSON.stringify(payload),
      });
      showToast(tr("updatedPlan"));
    } else {
      await apiRequest("/api/admin/plans", {
        method: "POST",
        headers: adminHeaders(),
        body: JSON.stringify(payload),
      });
      showToast(tr("addedPlan"));
    }
    planDialog?.close();
    await Promise.all([loadPlans(), loadStats()]);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deletePlan(planId) {
  const plan = plans.find((item) => item.id === planId);
  if (!plan) return;
  const planName = currentLang === "zh" ? (plan.nameZh || plan.nameVi) : plan.nameVi;
  if (!window.confirm(tr("confirmDelete").replace("{name}", planName))) return;

  try {
    await apiRequest(`/api/admin/plans/${encodeURIComponent(planId)}`, {
      method: "DELETE",
      headers: adminHeaders(),
    });
    showToast(tr("deletedPlan"));
    await Promise.all([loadPlans(), loadStats()]);
  } catch (error) {
    showToast(error.message, true);
  }
}

addPlanBtn?.addEventListener("click", () => openPlanDialog());

document.querySelector(".dialog-close")?.addEventListener("click", () => planDialog?.close());

planDialogForm?.addEventListener("submit", savePlan);

planTableBody?.addEventListener("click", (event) => {
  const editBtn = event.target.closest(".edit-plan-btn");
  if (editBtn) {
    const row = editBtn.closest("[data-plan-id]");
    const plan = plans.find((item) => item.id === row?.dataset.planId);
    if (plan) openPlanDialog(plan);
    return;
  }

  const deleteBtn = event.target.closest(".delete-plan-btn");
  if (deleteBtn) {
    const row = deleteBtn.closest("[data-plan-id]");
    if (row?.dataset.planId) deletePlan(row.dataset.planId);
  }
});

downloadCsvBtn?.addEventListener("click", () => {
  const csv = [
    tr("csvHeader"),
    ...plans.map((plan) => [
      plan.id,
      currentLang === "zh" ? (plan.nameZh || plan.nameVi) : plan.nameVi,
      plan.months,
      plan.durationUnit === "days" ? tr("days") : tr("months"),
      plan.amount,
      plan.isActive ? tr("active") : tr("hidden"),
      plan.buyerCount || 0,
    ].join(",")),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "danh-sach-goi-dich-vu.csv";
  anchor.click();
  URL.revokeObjectURL(url);
  showToast(tr("csvToast"));
});

window.addEventListener("message", (event) => {
  if (event.data?.type === "set-admin-language") {
    applyLanguage(event.data.lang);
  }
});

window.addEventListener("storage", (event) => {
  if (event.key === "v2-lang" && event.newValue) {
    applyLanguage(event.newValue);
  }
});

applyLanguage(currentLang);
loadPlans();
loadStats();
