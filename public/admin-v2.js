const adminV2State = {
  activeTab: "overview",
  activeRole: "admin",
};

const adminV2ServiceState = {
  activePreview: "profile",
};

const adminV2AnalyticsState = {
  activePreview: "events",
};

const adminV2UnlockState = {
  activePreview: "trial",
};

const adminV2ContentState = {
  activePreview: "intake",
};

const adminV2AgentState = {
  activePreview: "overview",
};

const adminV2SystemState = {
  activePreview: "settings",
};

const adminV2SyncState = {
  activePreview: "github",
};

const adminV2CommissionRangeState = {
  activeRange: "thisWeek",
  labels: {
    yesterday: "昨天 2026-07-05 00:00 至 2026-07-05 23:59",
    thisWeek: "本周 2026-07-06 00:00 至 2026-07-12 23:59",
    thisMonth: "本月 2026-07-01 00:00 至 2026-07-31 23:59",
    custom: "自定义日期 待接入日期选择器",
  },
};

const adminV2LocalBridge = {
  mode: "mock",
  apiUrl: "/api/admin-v2/local-preview",
  customerActionUrl: "/api/admin-v2/customer-action",
  learningEventUrl: "/api/admin-v2/learning-event",
  materialActionUrl: "/api/admin-v2/material-action",
  agentActionUrl: "/api/admin-v2/agent-action",
  realUsersPreviewUrl: "/api/admin-v2/real-users-readonly-preview",
  stage7SchemaUrl: "/api/admin-v2/stage7-schema-contract",
  stage8HandoffUrl: "/api/admin-v2/stage8-local-api-handoff",
  stage9ReadinessUrl: "/api/admin-v2/stage9-pr-readiness",
  stage10FinalUrl: "/api/admin-v2/stage10-final-acceptance",
  dataUrl: "admin-v2-local-data.json",
  blockedEndpoints: [
    "/api/payments/orders",
    "/api/webhooks/sepay",
    "/api/admin/users/:id/role",
    "/api/admin/plans",
    "/api/admin/content",
  ],
};

const adminV2Stage7SchemaFallback = {
  learning: [
    {
      key: "learning_event",
      label: "学习事件",
      fields: "event_id, user_id, module, lesson_id, event_name, occurred_at",
      source: "前台学习行为",
      boundary: "只定义契约，不采集正式用户行为。",
    },
    {
      key: "learning_summary",
      label: "学习汇总",
      fields: "user_id, date, questions_answered, wrong_answers, accuracy",
      source: "学习事件聚合",
      boundary: "只读分析口径，不写正式统计表。",
    },
    {
      key: "wrong_answer_event",
      label: "错题事件",
      fields: "user_id, question_id, answer, correct_answer, lesson_id",
      source: "练习答题结果",
      boundary: "不保存敏感内容，不影响 VIP 锁课。",
    },
  ],
  agent: [
    {
      key: "agent_referral",
      label: "代理归因 schema",
      fields: "agent_code, user_id, source_url, bound_at, changed_by",
      owner: "阿杰确认",
      boundary: "只定义归因字段，不绑定正式用户。",
    },
    {
      key: "agent_customer",
      label: "代理客户 schema",
      fields: "agent_id, user_id, vip_status, first_seen_at, last_activity_at",
      owner: "阿杰确认",
      boundary: "代理账号只看自己客户。",
    },
    {
      key: "agent_commission_preview",
      label: "佣金结算 schema",
      fields: "agent_id, user_id, vip_plan, amount, status, period",
      owner: "老板确认",
      boundary: "只做预览，不结算，不付款。",
    },
  ],
  gates: [
    { owner: "老板", item: "确认是否允许进入真实表设计", status: "required-before-real-db" },
    { owner: "阿杰", item: "确认学习事件和代理归因字段", status: "pending-review" },
    { owner: "阿辉", item: "确认后台操作路径是否易用", status: "pending-ui-review" },
  ],
};

const adminV2RealReadonlyFallback = {
  users: [
    {
      id: "5E802A4",
      fullName: "lixiang001",
      email: "lixiang001@gmail.com",
      registeredAt: "2026/07/02 22:49",
      role: "普通用户",
      currentLevel: "HSK2",
      vipStatus: "Free",
      premiumUntil: "N/A",
      readOnly: true,
    },
    {
      id: "9AB59000",
      fullName: "Felix",
      email: "langkhai01082002@gmail.com",
      registeredAt: "2026/07/01 19:29",
      role: "普通用户",
      currentLevel: "HSK2",
      vipStatus: "VIP 7d",
      premiumUntil: "2026-07-08",
      readOnly: true,
    },
    {
      id: "8E6320AE",
      fullName: "lixiang",
      email: "huameizhongxin@gmail.com",
      registeredAt: "2026/06/28 22:45",
      role: "超级管理员",
      currentLevel: "HSK2",
      vipStatus: "VIP",
      premiumUntil: "N/A",
      readOnly: true,
    },
  ],
  contracts: [
    {
      sourceTable: "users",
      sourceFields: "id, full_name, email, role, current_level, is_premium, premium_until",
      adminV2Fields: "用户ID、姓名、Email、角色、等级、VIP状态、VIP到期",
      riskBoundary: "只读展示，不修改用户、VIP或角色。",
    },
    {
      sourceTable: "payment plans",
      sourceFields: "id, months, duration_unit, amount, name_vi, name_zh, is_active",
      adminV2Fields: "套餐名称、时长、价格、启用状态",
      riskBoundary: "只读核对套餐字段，不调整定价。",
    },
    {
      sourceTable: "course locks",
      sourceFields: "level, lesson_id, free_limit, is_locked, updated_at",
      adminV2Fields: "课程等级、课节、免费限制、锁课状态",
      riskBoundary: "只读核对锁课配置，不改 VIP 锁定。",
    },
  ],
  gaps: [
    {
      label: "真实学习记录",
      status: "当前发布后台暂无真实表或 API 来源",
      nextStep: "第 7 阶段先定义学习事件 schema。",
    },
    {
      label: "真实代理归因",
      status: "当前发布后台暂无真实表或 API 来源",
      nextStep: "后续由阿杰确认代理归因表设计。",
    },
    {
      label: "真实代理佣金",
      status: "当前发布后台暂无真实表或 API 来源",
      nextStep: "先有订单归因和结算规则，再接真实佣金。",
    },
  ],
};

const adminV2CustomerState = {
  activeUserId: null,
  data: { users: [], auditLogs: [] },
};

const adminV2CustomerActions = ["vip7d", "vip30d", "setExpiry", "cancelVip", "makeStaff", "addNote"];

const adminV2LearningState = {
  activeUserId: "",
  data: { learningRecords: [], learningEvents: [], learningSummary: {} },
};

const adminV2LearningActions = ["lesson_opened", "question_answered", "wrong_answer", "listening_audio_played"];

const adminV2MaterialState = {
  activePackageId: "",
  data: { materialPackages: [], materialAuditLogs: [], releaseHistory: [], materialSummary: {} },
};

const adminV2MaterialActions = [
  "approveIntake",
  "blockIntake",
  "submitDraft",
  "publishLocal",
  "fallbackLocal",
  "rollbackLocal",
];

const adminV2AgentDataState = {
  activeAgentId: "",
  activeCommissionId: "",
  data: {
    agentCustomers: [],
    agentCommissions: [],
    agentTeamMembers: [],
    agentAuditLogs: [],
    agentSummary: {},
  },
};

const adminV2AgentActions = ["markPendingSettlement", "markReviewed", "freezeCommission", "restorePreview", "reassignCustomerAgent"];

const adminV2Roles = {
  admin: {
    label: "系统管理员",
    summary: "admin 可看全后台；支付、VIP、数据库写入仍然关闭。",
    visibleMenus: ["overview", "users", "learning", "support", "content", "unlock", "agents", "system", "sync"],
  },
  staff: {
    label: "运营员工",
    summary: "staff 不看佣金导出和系统设置；可看用户、学习数据、客服和内容状态。",
    visibleMenus: ["overview", "users", "learning", "support", "content"],
  },
  content_manager: {
    label: "内容管理员",
    summary: "content_manager 不看营收、佣金、VIP 定价；只处理内容草稿和素材状态。",
    visibleMenus: ["overview", "content"],
  },
  agent: {
    label: "代理账号",
    summary: "agent 只看自己的推广、客户、佣金；不能看全站用户和系统设置。",
    visibleMenus: ["overview", "agents"],
  },
};

function renderAdminV2LocalData(data) {
  const meta = data.meta || {};
  const metrics = data.metrics || {};
  const users = Array.isArray(data.users) ? data.users : [];
  const auditLogs = Array.isArray(data.auditLogs) ? data.auditLogs : [];
  const learningRecords = Array.isArray(data.learningRecords) ? data.learningRecords : [];
  const learningEvents = Array.isArray(data.learningEvents) ? data.learningEvents : [];
  const materialPackages = Array.isArray(data.materialPackages) ? data.materialPackages : [];
  const materialAuditLogs = Array.isArray(data.materialAuditLogs) ? data.materialAuditLogs : [];
  const agentCustomers = Array.isArray(data.agentCustomers) ? data.agentCustomers : [];
  const agentCommissions = Array.isArray(data.agentCommissions) ? data.agentCommissions : [];
  const agentTeamMembers = Array.isArray(data.agentTeamMembers) ? data.agentTeamMembers : [];
  const agentAuditLogs = Array.isArray(data.agentAuditLogs) ? data.agentAuditLogs : [];
  const realReadonlyUsers = Array.isArray(data.realReadonlyUsers) ? data.realReadonlyUsers : [];
  const realReadonlyContracts = Array.isArray(data.realReadonlyContracts) ? data.realReadonlyContracts : [];
  const realReadonlyGaps = Array.isArray(data.realReadonlyGaps) ? data.realReadonlyGaps : [];
  adminV2CustomerState.data = { ...data, users, auditLogs };
  adminV2LearningState.data = { ...data, learningRecords, learningEvents, learningSummary: data.learningSummary || {} };
  adminV2MaterialState.data = {
    ...data,
    materialPackages,
    materialAuditLogs,
    releaseHistory: Array.isArray(data.releaseHistory) ? data.releaseHistory : [],
    materialSummary: data.materialSummary || {},
  };
  adminV2AgentDataState.data = {
    ...data,
    agentCustomers,
    agentCommissions,
    agentTeamMembers,
    agentAuditLogs,
    agentSummary: data.agentSummary || {},
  };
  if (!adminV2CustomerState.activeUserId && users[0]) {
    adminV2CustomerState.activeUserId = users[0].id;
  }
  if (!adminV2LearningState.activeUserId && learningRecords[0]) {
    adminV2LearningState.activeUserId = learningRecords[0].userId;
  }
  if (!adminV2MaterialState.activePackageId && materialPackages[0]) {
    adminV2MaterialState.activePackageId = materialPackages[0].id;
  }
  if (!adminV2AgentDataState.activeAgentId && agentTeamMembers[0]) {
    adminV2AgentDataState.activeAgentId = agentTeamMembers[0].agentId;
  }
  if (!adminV2AgentDataState.activeCommissionId && agentCommissions[0]) {
    adminV2AgentDataState.activeCommissionId = agentCommissions[0].id;
  }

  const apiLabel = document.querySelector("[data-local-api-label]");
  const apiStatus = document.querySelector("[data-local-api-status]");
  const apiPath = document.querySelector("[data-local-api-path]");
  const connectedByApi = meta.apiMode === "local-preview";
  if (apiLabel) {
    apiLabel.textContent = connectedByApi ? "本地后端 API 已连接" : "静态 JSON fallback 已启用";
  }
  if (apiStatus) {
    apiStatus.textContent = connectedByApi ? "API 200 / connected" : "fallback";
  }
  if (apiPath) {
    apiPath.textContent = connectedByApi
      ? "数据来自 /api/admin-v2/local-preview"
      : "后端不可用时回退 admin-v2-local-data.json";
  }

  const lastSync = document.querySelector("[data-api-last-sync]");
  const requestStatus = document.querySelector("[data-api-request-status]");
  const userCount = document.querySelector("[data-api-user-count]");
  const apiVersion = document.querySelector("[data-api-version]");
  if (lastSync) lastSync.textContent = new Date().toLocaleTimeString("zh-CN", { hour12: false });
  if (requestStatus) requestStatus.textContent = connectedByApi ? "API 200" : "fallback JSON";
  if (userCount) userCount.textContent = String(users.length);
  if (apiVersion) apiVersion.textContent = meta.apiMode || meta.mode || "mock";

  const sourceLabel = document.querySelector("[data-local-source-label]");
  if (sourceLabel) {
    sourceLabel.textContent = meta.sourceLabel || adminV2LocalBridge.dataUrl;
  }

  const metricsTarget = document.querySelector("[data-local-metrics]");
  if (metricsTarget) {
    metricsTarget.innerHTML = [
      `今日注册：${metrics.todayRegistrations ?? 0}`,
      `本周学习：${metrics.weeklyLearners ?? 0}`,
      `待审核素材：${metrics.pendingMaterials ?? 0}`,
      `代理佣金：${metrics.agentCommissionLabel || "只读"}`,
    ].map((item) => `<span>${item}</span>`).join("");
  }

  const usersBody = document.querySelector("[data-local-users-body]");
  if (usersBody) {
    renderCustomerRows(users);
  }
  renderCustomerDetail(getActiveCustomer());
  renderAuditLogs(auditLogs);
  renderLearningUserFilter(learningRecords);
  renderLearningSummary(data.learningSummary || {});
  renderLearningRecords(learningRecords);
  renderLearningEvents(learningEvents);
  renderMaterialFilter(materialPackages);
  renderMaterialSummary(data.materialSummary || {});
  renderMaterialPackages(materialPackages);
  renderMaterialAudit(materialAuditLogs);
  renderAgentFilter(agentTeamMembers);
  renderAgentAttributionControls(agentCustomers, agentTeamMembers);
  renderAgentSummary(data.agentSummary || {});
  renderAgentCustomers(agentCustomers);
  renderAgentCommissionRows(agentCommissions);
  renderAgentAudit(agentAuditLogs);
  renderRealReadonlyUsers(realReadonlyUsers);
  renderRealReadonlyContracts(realReadonlyContracts);
  renderRealReadonlyGaps(realReadonlyGaps);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getActiveCustomer() {
  const users = adminV2CustomerState.data.users || [];
  return users.find((user) => user.id === adminV2CustomerState.activeUserId) || users[0] || null;
}

function renderCustomerRows(users) {
  const query = document.querySelector("[data-customer-search]")?.value?.trim().toLowerCase() || "";
  const visibleUsers = query
    ? users.filter((user) => [user.id, user.email, user.name, user.phone].join(" ").toLowerCase().includes(query))
    : users;
  const usersBody = document.querySelector("[data-local-users-body]");
  if (!usersBody) return;

  if (!visibleUsers.length) {
    usersBody.innerHTML = '<tr><td colspan="10">没有匹配客户。</td></tr>';
    return;
  }

  usersBody.innerHTML = visibleUsers.map((user) => `
    <tr data-customer-row="${escapeHtml(user.id)}">
      <td>${escapeHtml(user.email)}</td>
      <td>${escapeHtml(user.name)}</td>
      <td>${escapeHtml(user.phone)}</td>
      <td>${escapeHtml(user.registeredAt)}</td>
      <td>${escapeHtml(user.source)}</td>
      <td>${escapeHtml(user.agentOwner)}</td>
      <td><span class="status-badge">${escapeHtml(user.vipStatus)}</span></td>
      <td>${escapeHtml(user.vipExpiresAt)}</td>
      <td>${escapeHtml(user.recentLearning)}</td>
      <td><button class="customer-row-action" type="button" data-customer-select="${escapeHtml(user.id)}">选择</button></td>
    </tr>
  `).join("");
}

function renderCustomerDetail(user) {
  const target = document.querySelector("[data-customer-detail]");
  if (!target) return;

  if (!user) {
    target.innerHTML = "等待选择客户。";
    return;
  }

  target.innerHTML = `
    <h3>${escapeHtml(user.name)}</h3>
    <dl>
      <div><dt>ID</dt><dd>${escapeHtml(user.id)}</dd></div>
      <div><dt>邮箱</dt><dd>${escapeHtml(user.email)}</dd></div>
      <div><dt>等级</dt><dd>${escapeHtml(user.level)}</dd></div>
      <div><dt>角色</dt><dd>${escapeHtml(user.role)}</dd></div>
      <div><dt>套餐</dt><dd>${escapeHtml(user.plan)}</dd></div>
      <div><dt>VIP 到期</dt><dd>${escapeHtml(user.vipExpiresAt)}</dd></div>
      <div><dt>代理归属</dt><dd>${escapeHtml(user.agentOwner)}</dd></div>
      <div><dt>最近学习</dt><dd>${escapeHtml(user.recentLearning)}</dd></div>
    </dl>
    <p>${escapeHtml(user.customerNotes)}</p>
  `;
}

function renderAuditLogs(logs) {
  const target = document.querySelector("[data-audit-log-body]");
  if (!target) return;
  const visibleLogs = Array.isArray(logs) ? logs.slice(0, 8) : [];

  if (!visibleLogs.length) {
    target.innerHTML = '<tr><td colspan="4">暂无操作日志。</td></tr>';
    return;
  }

  target.innerHTML = visibleLogs.map((log) => `
    <tr>
      <td>${escapeHtml(log.time)}</td>
      <td>${escapeHtml(log.action)}</td>
      <td>${escapeHtml(log.userEmail || log.userId)}</td>
      <td>${escapeHtml(log.note)}</td>
    </tr>
  `).join("");
}

function performCustomerAction(action) {
  if (!adminV2CustomerActions.includes(action)) return;

  const user = getActiveCustomer();
  if (!user) return;

  let value = "";
  if (action === "setExpiry") {
    value = document.querySelector("[data-customer-expiry]")?.value || "";
  }
  if (action === "addNote") {
    value = document.querySelector("[data-customer-note]")?.value || "";
  }

  fetch(adminV2LocalBridge.customerActionUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, userId: user.id, value }),
  })
    .then((response) => response.json())
    .then(() => refreshAdminV2BackendData());
}

function renderLearningUserFilter(records) {
  const filter = document.querySelector("[data-learning-user-filter]");
  if (!filter) return;
  const current = filter.value || adminV2LearningState.activeUserId;
  filter.innerHTML = ['<option value="">全部用户</option>'].concat(records.map((record) => {
    return `<option value="${escapeHtml(record.userId)}">${escapeHtml(record.name)} / ${escapeHtml(record.userEmail)}</option>`;
  })).join("");
  filter.value = current && records.some((record) => record.userId === current) ? current : "";
}

function renderLearningSummary(summary) {
  const activeUsers = document.querySelector("[data-learning-active-users]");
  const questionCount = document.querySelector("[data-learning-question-count]");
  const wrongCount = document.querySelector("[data-learning-wrong-count]");
  const accuracy = document.querySelector("[data-learning-accuracy]");
  if (activeUsers) activeUsers.textContent = String(summary.activeLearnersToday ?? 0);
  if (questionCount) questionCount.textContent = String(summary.questionsAnsweredToday ?? 0);
  if (wrongCount) wrongCount.textContent = String(summary.wrongAnswersToday ?? 0);
  if (accuracy) accuracy.textContent = summary.averageAccuracy || "0%";
}

function renderLearningRecords(records) {
  const target = document.querySelector("[data-learning-records-body]");
  if (!target) return;
  const selectedUserId = document.querySelector("[data-learning-user-filter]")?.value || "";
  const visibleRecords = selectedUserId ? records.filter((record) => record.userId === selectedUserId) : records;

  if (!visibleRecords.length) {
    target.innerHTML = '<tr><td colspan="7">没有匹配学习记录。</td></tr>';
    return;
  }

  target.innerHTML = visibleRecords.map((record) => `
    <tr>
      <td>${escapeHtml(record.name)}<br><small>${escapeHtml(record.userEmail)}</small></td>
      <td>${escapeHtml(record.module)}</td>
      <td>${escapeHtml(record.lesson)}</td>
      <td>${escapeHtml(record.questionsAnswered)}</td>
      <td>${escapeHtml(record.wrongAnswers)}</td>
      <td><span class="status-badge">${escapeHtml(record.accuracy)}</span></td>
      <td>${escapeHtml(record.recentLearning)}<br><small>${escapeHtml(record.lastStudiedAt)}</small></td>
    </tr>
  `).join("");
}

function renderLearningEvents(events) {
  const target = document.querySelector("[data-learning-events-body]");
  if (!target) return;
  const visibleEvents = Array.isArray(events) ? events.slice(0, 10) : [];

  if (!visibleEvents.length) {
    target.innerHTML = '<tr><td colspan="4">暂无学习事件。</td></tr>';
    return;
  }

  target.innerHTML = visibleEvents.map((event) => `
    <tr>
      <td>${escapeHtml(event.time)}</td>
      <td>${escapeHtml(event.eventName)}</td>
      <td>${escapeHtml(event.userEmail || event.userId)}</td>
      <td>${escapeHtml(event.lesson)}</td>
    </tr>
  `).join("");
}

function performLearningAction(eventName) {
  if (!adminV2LearningActions.includes(eventName)) return;
  const records = adminV2LearningState.data.learningRecords || [];
  const selectedUserId = document.querySelector("[data-learning-user-filter]")?.value || adminV2LearningState.activeUserId;
  const record = records.find((item) => item.userId === selectedUserId) || records[0];
  if (!record) return;

  const moduleValue = document.querySelector("[data-learning-module]")?.value || record.module;
  const lessonValue = document.querySelector("[data-learning-lesson]")?.value || record.lesson;
  const wrongDelta = eventName === "wrong_answer" ? 1 : 0;
  const questionsDelta = eventName === "question_answered" || eventName === "wrong_answer" ? 1 : 0;

  fetch(adminV2LocalBridge.learningEventUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      userId: record.userId,
      module: moduleValue,
      lesson: lessonValue,
      questionsDelta,
      wrongDelta,
    }),
  })
    .then((response) => response.json())
    .then(() => refreshAdminV2BackendData());
}

function renderMaterialFilter(packages) {
  const filter = document.querySelector("[data-material-filter]");
  if (!filter) return;
  const current = filter.value || adminV2MaterialState.activePackageId;
  filter.innerHTML = ['<option value="">全部素材包</option>'].concat(packages.map((item) => {
    return `<option value="${escapeHtml(item.id)}">${escapeHtml(item.title)}</option>`;
  })).join("");
  filter.value = current && packages.some((item) => item.id === current) ? current : "";
}

function renderMaterialSummary(summary) {
  const bindings = [
    ["[data-material-total]", summary.totalPackages],
    ["[data-material-pending]", summary.pendingReview],
    ["[data-material-drafts]", summary.draftsReady],
    ["[data-material-published]", summary.publishedLocal],
    ["[data-material-fallback]", summary.fallbackActive],
    ["[data-material-rollback]", summary.rollbackReady],
  ];

  bindings.forEach(([selector, value]) => {
    const target = document.querySelector(selector);
    if (target) target.textContent = String(value ?? 0);
  });
}

function renderMaterialPackages(packages) {
  const target = document.querySelector("[data-materials-body]");
  if (!target) return;
  const selectedPackageId = document.querySelector("[data-material-filter]")?.value || "";
  const visiblePackages = selectedPackageId ? packages.filter((item) => item.id === selectedPackageId) : packages;

  if (!visiblePackages.length) {
    target.innerHTML = '<tr><td colspan="9">没有匹配素材包。</td></tr>';
    return;
  }

  target.innerHTML = visiblePackages.map((item) => `
    <tr>
      <td>${escapeHtml(item.title)}<br><small>${escapeHtml(item.id)}</small></td>
      <td>${escapeHtml(item.type)}</td>
      <td>${escapeHtml(item.lessonCount)} 课 / ${escapeHtml(item.topicCount)} 主题</td>
      <td>${escapeHtml(item.audioStatus)}</td>
      <td>${escapeHtml(item.uploadStatus)}</td>
      <td><span class="status-badge">${escapeHtml(item.reviewStatus)}</span></td>
      <td>${escapeHtml(item.draftStatus)}</td>
      <td>${escapeHtml(item.publishStatus)}</td>
      <td>${escapeHtml(item.fallbackStatus)}<br><small>${escapeHtml(item.rollbackVersion)}</small></td>
    </tr>
  `).join("");
}

function renderMaterialAudit(logs) {
  const target = document.querySelector("[data-material-audit-body]");
  if (!target) return;
  const visibleLogs = Array.isArray(logs) ? logs.slice(0, 10) : [];

  if (!visibleLogs.length) {
    target.innerHTML = '<tr><td colspan="4">暂无素材操作日志。</td></tr>';
    return;
  }

  target.innerHTML = visibleLogs.map((log) => `
    <tr>
      <td>${escapeHtml(log.time)}</td>
      <td>${escapeHtml(log.action)}</td>
      <td>${escapeHtml(log.packageId)}</td>
      <td>${escapeHtml(log.note)}</td>
    </tr>
  `).join("");
}

function performMaterialAction(action) {
  if (!adminV2MaterialActions.includes(action)) return;
  const packages = adminV2MaterialState.data.materialPackages || [];
  const selectedPackageId = document.querySelector("[data-material-filter]")?.value || adminV2MaterialState.activePackageId;
  const item = packages.find((entry) => entry.id === selectedPackageId) || packages[0];
  if (!item) return;

  const note = document.querySelector("[data-material-note]")?.value || "";

  fetch(adminV2LocalBridge.materialActionUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, packageId: item.id, note }),
  })
    .then((response) => response.json())
    .then(() => refreshAdminV2BackendData());
}

function renderAgentFilter(teamMembers) {
  const filter = document.querySelector("[data-agent-filter]");
  if (!filter) return;
  const current = filter.value || adminV2AgentDataState.activeAgentId;
  filter.innerHTML = ['<option value="">全部代理</option>'].concat(teamMembers.map((member) => {
    return `<option value="${escapeHtml(member.agentId)}">${escapeHtml(member.agentName)} / ${escapeHtml(member.role)}</option>`;
  })).join("");
  filter.value = current && teamMembers.some((member) => member.agentId === current) ? current : "";
}

function renderAgentAttributionControls(customers, teamMembers) {
  const customerSelect = document.querySelector("[data-agent-attribution-customer]");
  const agentSelect = document.querySelector("[data-agent-attribution-agent]");
  if (!customerSelect || !agentSelect) return;

  const currentCustomerId = customerSelect.value;
  const currentAgentId = agentSelect.value;

  customerSelect.innerHTML = customers.map((customer) => `
    <option value="${escapeHtml(customer.id)}">${escapeHtml(customer.customerName)} / ${escapeHtml(customer.customerEmail)} / ${escapeHtml(customer.agentName)}</option>
  `).join("");
  agentSelect.innerHTML = teamMembers.map((member) => `
    <option value="${escapeHtml(member.agentId)}">${escapeHtml(member.agentName)} / ${escapeHtml(member.role)}</option>
  `).join("");

  if (currentCustomerId && customers.some((customer) => customer.id === currentCustomerId)) {
    customerSelect.value = currentCustomerId;
  }
  if (currentAgentId && teamMembers.some((member) => member.agentId === currentAgentId)) {
    agentSelect.value = currentAgentId;
  }
}

function renderAgentSummary(summary) {
  const bindings = [
    ["[data-agent-total]", summary.agentCount],
    ["[data-agent-customers]", summary.customerCount],
    ["[data-agent-vip-customers]", summary.vipCustomerCount],
    ["[data-agent-commission-preview]", summary.commissionPreview],
    ["[data-agent-pending]", summary.pendingSettlement],
    ["[data-agent-reviewed]", summary.reviewedCommissions],
    ["[data-agent-frozen]", summary.frozenCommissions],
    ["[data-agent-team-leader]", summary.teamLeader],
  ];

  bindings.forEach(([selector, value]) => {
    const target = document.querySelector(selector);
    if (target) target.textContent = String(value ?? 0);
  });
}

function getVisibleAgentRows(rows) {
  const selectedAgentId = document.querySelector("[data-agent-filter]")?.value || "";
  return selectedAgentId ? rows.filter((item) => item.agentId === selectedAgentId) : rows;
}

function renderAgentCustomers(customers) {
  const target = document.querySelector("[data-agent-customers-body]");
  if (!target) return;
  const visibleCustomers = getVisibleAgentRows(customers);

  if (!visibleCustomers.length) {
    target.innerHTML = '<tr><td colspan="8">没有匹配代理客户。</td></tr>';
    return;
  }

  target.innerHTML = visibleCustomers.map((customer) => `
    <tr>
      <td>${escapeHtml(customer.agentName)}<br><small>${escapeHtml(customer.agentId)}</small></td>
      <td>${escapeHtml(customer.customerName)}<br><small>${escapeHtml(customer.customerEmail)}</small></td>
      <td>${escapeHtml(customer.source)}</td>
      <td><span class="status-badge">${escapeHtml(customer.vipStatus)}</span></td>
      <td>${escapeHtml(customer.commissionStatus)}</td>
      <td>${escapeHtml(customer.teamScope)}</td>
      <td>${escapeHtml(customer.registeredAt)}</td>
      <td>${escapeHtml(customer.lastActivity)}</td>
    </tr>
  `).join("");
}

function renderAgentCommissionRows(commissions) {
  const target = document.querySelector("[data-agent-commission-body]");
  if (!target) return;
  const visibleCommissions = getVisibleAgentRows(commissions);

  if (!visibleCommissions.length) {
    target.innerHTML = '<tr><td colspan="9">没有匹配佣金记录。</td></tr>';
    return;
  }

  if (!visibleCommissions.some((item) => item.id === adminV2AgentDataState.activeCommissionId)) {
    adminV2AgentDataState.activeCommissionId = visibleCommissions[0].id;
  }

  target.innerHTML = visibleCommissions.map((commission) => `
    <tr data-agent-commission-row="${escapeHtml(commission.id)}">
      <td>${escapeHtml(commission.agentName)}<br><small>${escapeHtml(commission.agentId)}</small></td>
      <td>${escapeHtml(commission.customerName)}<br><small>${escapeHtml(commission.customerEmail)}</small></td>
      <td>${escapeHtml(commission.source)}</td>
      <td>${escapeHtml(commission.orderRef)}</td>
      <td>${escapeHtml(commission.amount)}</td>
      <td><span class="status-badge">${escapeHtml(commission.status)}</span></td>
      <td>${escapeHtml(commission.settlementStatus)}</td>
      <td>${escapeHtml(commission.period)}</td>
      <td><button class="customer-row-action" type="button" data-agent-commission-select="${escapeHtml(commission.id)}">选择</button></td>
    </tr>
  `).join("");
}

function renderAgentAudit(logs) {
  const target = document.querySelector("[data-agent-audit-body]");
  if (!target) return;
  const visibleLogs = Array.isArray(logs) ? logs.slice(0, 10) : [];

  if (!visibleLogs.length) {
    target.innerHTML = '<tr><td colspan="4">暂无代理佣金操作日志。</td></tr>';
    return;
  }

  target.innerHTML = visibleLogs.map((log) => `
    <tr>
      <td>${escapeHtml(log.time)}</td>
      <td>${escapeHtml(log.action)}</td>
      <td>${escapeHtml(log.commissionId)}</td>
      <td>${escapeHtml(log.note)}</td>
    </tr>
  `).join("");
}

function performAgentAction(action) {
  if (!adminV2AgentActions.includes(action)) return;
  const note = action === "reassignCustomerAgent"
    ? document.querySelector("[data-agent-attribution-note]")?.value || ""
    : document.querySelector("[data-agent-note]")?.value || "";

  if (action === "reassignCustomerAgent") {
    const customerId = document.querySelector("[data-agent-attribution-customer]")?.value || "";
    const targetAgentId = document.querySelector("[data-agent-attribution-agent]")?.value || "";
    const source = document.querySelector("[data-agent-attribution-source]")?.value || "";
    if (!customerId || !targetAgentId) return;

    fetch(adminV2LocalBridge.agentActionUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, customerId, targetAgentId, source, note }),
    })
      .then((response) => response.json())
      .then((data) => {
        const summary = document.querySelector("[data-agent-attribution-summary]");
        if (summary && data?.ok) summary.textContent = "本地归属已更新，不写真实数据库。";
        refreshAdminV2BackendData();
      });
    return;
  }

  const commissions = adminV2AgentDataState.data.agentCommissions || [];
  const visibleCommissions = getVisibleAgentRows(commissions);
  const fallbackCommission = visibleCommissions[0] || commissions[0];
  const commissionId = adminV2AgentDataState.activeCommissionId || fallbackCommission?.id;
  if (!commissionId) return;

  fetch(adminV2LocalBridge.agentActionUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, commissionId, note }),
  })
    .then((response) => response.json())
    .then(() => refreshAdminV2BackendData());
}

function renderRealReadonlyUsers(users) {
  const target = document.querySelector("[data-real-readonly-users-body]");
  if (!target) return;
  if (!users.length) {
    target.innerHTML = '<tr><td colspan="7">暂无只读真实用户预览。</td></tr>';
    return;
  }

  target.innerHTML = users.map((user) => `
    <tr class="real-readonly-user-row">
      <td>
        <div class="real-readonly-user-identity">
          <span class="real-readonly-avatar">${escapeHtml(getCustomerInitials(user.fullName || user.email || user.id))}</span>
          <div>
            <strong>${escapeHtml(user.fullName || "未命名用户")}</strong>
            <small>ID: ${escapeHtml(user.id)}</small>
          </div>
        </div>
      </td>
      <td>
        <div class="real-readonly-email-block">
          <strong>${escapeHtml(user.email)}</strong>
          <small>注册时间：${escapeHtml(user.registeredAt || user.createdAt || "待接入")}</small>
        </div>
      </td>
      <td><span class="status-badge">${escapeHtml(user.role)}</span></td>
      <td>${escapeHtml(user.currentLevel)}</td>
      <td>${escapeHtml(user.vipStatus)}</td>
      <td>${escapeHtml(user.premiumUntil)}</td>
      <td>
        <div class="real-readonly-vip-actions">
          <button type="button" disabled>VIP 7d</button>
          <button type="button" disabled>VIP 30d</button>
          <button type="button" disabled>VIP 90d</button>
          <input type="date" disabled aria-label="自定义 VIP 到期日期" />
          <button type="button" disabled>自定义</button>
          <small>${user.readOnly ? "只读预览，不写入数据库" : "禁止写入"}</small>
        </div>
      </td>
    </tr>
  `).join("");
}

function renderRealReadonlyContracts(contracts) {
  const target = document.querySelector("[data-real-readonly-contract-body]");
  if (!target) return;
  if (!contracts.length) {
    target.innerHTML = '<tr><td colspan="4">暂无真实后台字段契约。</td></tr>';
    return;
  }

  target.innerHTML = contracts.map((item) => `
    <tr>
      <td>${escapeHtml(item.sourceTable)}</td>
      <td>${escapeHtml(item.sourceFields)}</td>
      <td>${escapeHtml(item.adminV2Fields)}</td>
      <td>${escapeHtml(item.riskBoundary)}</td>
    </tr>
  `).join("");
}

function renderRealReadonlyGaps(gaps) {
  const target = document.querySelector("[data-real-readonly-gaps-body]");
  if (!target) return;
  if (!gaps.length) {
    target.innerHTML = '<tr><td colspan="3">暂无真实数据缺口。</td></tr>';
    return;
  }

  target.innerHTML = gaps.map((item) => `
    <tr>
      <td>${escapeHtml(item.label)}</td>
      <td>${escapeHtml(item.status)}</td>
      <td>${escapeHtml(item.nextStep)}</td>
    </tr>
  `).join("");
}

function renderRealReadonlyPreview(data, statusText) {
  renderRealReadonlyUsers(Array.isArray(data.users) ? data.users : []);
  renderRealReadonlyContracts(Array.isArray(data.contracts) ? data.contracts : []);
  renderRealReadonlyGaps(Array.isArray(data.gaps) ? data.gaps : []);
  const status = document.querySelector("[data-real-readonly-status]");
  if (status) status.textContent = statusText;
}

function refreshRealReadonlyPreview() {
  const status = document.querySelector("[data-real-readonly-status]");
  if (status) status.textContent = "只读请求中";

  fetch(adminV2LocalBridge.realUsersPreviewUrl, { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => {
      renderRealReadonlyPreview(data, "本地只读预览已加载");
    })
    .catch(() => {
      fetch(adminV2LocalBridge.dataUrl, { cache: "no-store" })
        .then((response) => response.json())
        .then((data) => {
          renderRealReadonlyPreview({
            users: Array.isArray(data.realReadonlyUsers) ? data.realReadonlyUsers : [],
            contracts: Array.isArray(data.realReadonlyContracts) ? data.realReadonlyContracts : [],
            gaps: Array.isArray(data.realReadonlyGaps) ? data.realReadonlyGaps : [],
          }, "JSON fallback 只读预览");
        })
        .catch(() => {
          renderRealReadonlyPreview(adminV2RealReadonlyFallback, "静态兜底只读预览");
        });
    });
}

function renderStage7LearningSchemas(items) {
  const target = document.querySelector("[data-stage7-learning-schema-body]");
  if (!target) return;
  if (!items.length) {
    target.innerHTML = '<tr><td colspan="4">暂无学习 schema 契约。</td></tr>';
    return;
  }

  target.innerHTML = items.map((item) => `
    <tr>
      <td>${escapeHtml(item.label)}</td>
      <td>${escapeHtml(item.fields)}</td>
      <td>${escapeHtml(item.source)}</td>
      <td>${escapeHtml(item.boundary)}</td>
    </tr>
  `).join("");
}

function renderStage7AgentSchemas(items) {
  const target = document.querySelector("[data-stage7-agent-schema-body]");
  if (!target) return;
  if (!items.length) {
    target.innerHTML = '<tr><td colspan="4">暂无代理 schema 契约。</td></tr>';
    return;
  }

  target.innerHTML = items.map((item) => `
    <tr>
      <td>${escapeHtml(item.label)}</td>
      <td>${escapeHtml(item.fields)}</td>
      <td>${escapeHtml(item.owner)}</td>
      <td>${escapeHtml(item.boundary)}</td>
    </tr>
  `).join("");
}

function renderStage7Gates(items) {
  const target = document.querySelector("[data-stage7-gate-body]");
  if (!target) return;
  if (!items.length) {
    target.innerHTML = '<tr><td colspan="3">暂无第 7 阶段接入闸口。</td></tr>';
    return;
  }

  target.innerHTML = items.map((item) => `
    <tr>
      <td>${escapeHtml(item.owner)}</td>
      <td>${escapeHtml(item.item)}</td>
      <td><span class="status-badge">${escapeHtml(item.status)}</span></td>
    </tr>
  `).join("");
}

function renderStage7SchemaContract(data, statusText) {
  renderStage7LearningSchemas(Array.isArray(data.learning) ? data.learning : []);
  renderStage7AgentSchemas(Array.isArray(data.agent) ? data.agent : []);
  renderStage7Gates(Array.isArray(data.gates) ? data.gates : []);
  const status = document.querySelector("[data-stage7-schema-status]");
  if (status) status.textContent = statusText;
}

function refreshStage7SchemaContract() {
  const status = document.querySelector("[data-stage7-schema-status]");
  if (status) status.textContent = "schema 请求中";

  fetch(adminV2LocalBridge.stage7SchemaUrl, { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => {
      renderStage7SchemaContract(data, "本地 schema 契约已加载");
    })
    .catch(() => {
      fetch(adminV2LocalBridge.dataUrl, { cache: "no-store" })
        .then((response) => response.json())
        .then((data) => {
          renderStage7SchemaContract({
            learning: Array.isArray(data.stage7LearningEventSchemas) ? data.stage7LearningEventSchemas : [],
            agent: Array.isArray(data.stage7AgentDataSchemas) ? data.stage7AgentDataSchemas : [],
            gates: Array.isArray(data.stage7AcceptanceGates) ? data.stage7AcceptanceGates : [],
          }, "JSON schema 契约已加载");
        })
        .catch(() => {
          renderStage7SchemaContract(adminV2Stage7SchemaFallback, "静态兜底 schema 契约");
        });
    });
}

function renderAdminV2LocalBridgeFallback() {
  const metricsTarget = document.querySelector("[data-local-metrics]");
  if (metricsTarget) {
    metricsTarget.innerHTML = [
      "今日注册：mock 等待加载",
      "本周学习：mock 等待加载",
      "待审核素材：mock 等待加载",
      "代理佣金：只读",
    ].map((item) => `<span>${item}</span>`).join("");
  }

  const requestStatus = document.querySelector("[data-api-request-status]");
  if (requestStatus) requestStatus.textContent = "请求失败";
}

function refreshAdminV2BackendData() {
  if (adminV2LocalBridge.mode !== "mock") {
    renderAdminV2LocalBridgeFallback();
    return;
  }

  const requestStatus = document.querySelector("[data-api-request-status]");
  if (requestStatus) requestStatus.textContent = "请求中";

  fetch(adminV2LocalBridge.apiUrl, { cache: "no-store" })
    .then((response) => response.json())
    .then(renderAdminV2LocalData)
    .catch(() => {
      fetch(adminV2LocalBridge.dataUrl, { cache: "no-store" })
        .then((response) => response.json())
        .then(renderAdminV2LocalData)
        .catch(renderAdminV2LocalBridgeFallback);
    });
}

function loadAdminV2LocalBridge() {
  refreshAdminV2BackendData();
}

function setAdminV2Tab(tab, options = {}) {
  adminV2State.activeTab = tab;
  document.querySelectorAll("[data-admin-v2-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminV2Tab === tab);
  });
  document.querySelectorAll("[data-admin-v2-overview-only]").forEach((section) => {
    section.hidden = tab !== "overview";
  });
  let activePanel = null;
  document.querySelectorAll("[data-admin-v2-panel]").forEach((panel) => {
    const active = panel.dataset.adminV2Panel === tab;
    panel.classList.toggle("active", active);
    if (active) activePanel = panel;
  });
  if (options.scroll && activePanel) {
    activePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (tab === "users") {
    refreshRealReadonlyPreview();
  }
  if (tab === "learning") {
    refreshStage7SchemaContract();
  }
}

document.querySelectorAll("[data-admin-v2-tab]").forEach((button) => {
  button.addEventListener("click", () => setAdminV2Tab(button.dataset.adminV2Tab, { scroll: true }));
});

function setAdminV2Role(role) {
  const config = adminV2Roles[role] || adminV2Roles.admin;
  adminV2State.activeRole = role;

  document.querySelectorAll("[data-admin-v2-role]").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminV2Role === role);
  });

  const roleLabel = document.querySelector("[data-role-label]");
  const roleSummary = document.querySelector("[data-role-summary]");
  if (roleLabel) roleLabel.textContent = config.label;
  if (roleSummary) roleSummary.textContent = config.summary;

  document.querySelectorAll("[data-menu-key]").forEach((button) => {
    const visible = config.visibleMenus.includes(button.dataset.menuKey);
    button.classList.toggle("role-muted", !visible);
    button.title = visible ? "当前角色可见" : "当前角色不可见或后续需隐藏";
  });
}

document.querySelectorAll("[data-admin-v2-role]").forEach((button) => {
  button.addEventListener("click", () => setAdminV2Role(button.dataset.adminV2Role));
});

setAdminV2Role(adminV2State.activeRole);

function setServicePreview(preview) {
  adminV2ServiceState.activePreview = preview;
  document.querySelectorAll("[data-service-preview]").forEach((button) => {
    button.classList.toggle("active", button.dataset.servicePreview === preview);
  });
  document.querySelectorAll("[data-service-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.servicePanel === preview);
  });
}

document.querySelectorAll("[data-service-preview]").forEach((button) => {
  button.addEventListener("click", () => setServicePreview(button.dataset.servicePreview));
});

setServicePreview(adminV2ServiceState.activePreview);

function setAnalyticsPreview(preview) {
  adminV2AnalyticsState.activePreview = preview;
  document.querySelectorAll("[data-analytics-preview]").forEach((button) => {
    button.classList.toggle("active", button.dataset.analyticsPreview === preview);
  });
  document.querySelectorAll("[data-analytics-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.analyticsPanel === preview);
  });
}

document.querySelectorAll("[data-analytics-preview]").forEach((button) => {
  button.addEventListener("click", () => setAnalyticsPreview(button.dataset.analyticsPreview));
});

setAnalyticsPreview(adminV2AnalyticsState.activePreview);

function setUnlockPreview(preview) {
  adminV2UnlockState.activePreview = preview;
  document.querySelectorAll("[data-unlock-preview]").forEach((button) => {
    button.classList.toggle("active", button.dataset.unlockPreview === preview);
  });
  document.querySelectorAll("[data-unlock-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.unlockPanel === preview);
  });
}

document.querySelectorAll("[data-unlock-preview]").forEach((button) => {
  button.addEventListener("click", () => setUnlockPreview(button.dataset.unlockPreview));
});

setUnlockPreview(adminV2UnlockState.activePreview);

function setContentPreview(preview) {
  adminV2ContentState.activePreview = preview;
  document.querySelectorAll("[data-content-preview]").forEach((button) => {
    button.classList.toggle("active", button.dataset.contentPreview === preview);
  });
  document.querySelectorAll("[data-content-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.contentPanel === preview);
  });
}

document.querySelectorAll("[data-content-preview]").forEach((button) => {
  button.addEventListener("click", () => setContentPreview(button.dataset.contentPreview));
});

setContentPreview(adminV2ContentState.activePreview);

function setAgentPreview(preview) {
  adminV2AgentState.activePreview = preview;
  document.querySelectorAll("[data-agent-preview]").forEach((button) => {
    button.classList.toggle("active", button.dataset.agentPreview === preview);
  });
  document.querySelectorAll("[data-agent-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.agentPanel === preview);
  });
}

document.querySelectorAll("[data-agent-preview]").forEach((button) => {
  button.addEventListener("click", () => setAgentPreview(button.dataset.agentPreview));
});

setAgentPreview(adminV2AgentState.activePreview);

function setCommissionRange(range) {
  const label = adminV2CommissionRangeState.labels[range] || adminV2CommissionRangeState.labels.thisWeek;
  adminV2CommissionRangeState.activeRange = range;

  document.querySelectorAll("[data-commission-range]").forEach((button) => {
    button.classList.toggle("active", button.dataset.commissionRange === range);
  });

  const summary = document.querySelector("[data-commission-range-summary]");
  if (summary) {
    summary.textContent = `统计口径时间戳：${label}，本地实验占位。`;
  }

  const cardSummary = document.querySelector("[data-commission-card-summary]");
  if (cardSummary) {
    cardSummary.textContent = `结算周期：${label}；金额为实验占位，不代表真实可结算佣金。`;
  }
}

document.querySelectorAll("[data-commission-range]").forEach((button) => {
  button.addEventListener("click", () => setCommissionRange(button.dataset.commissionRange));
});

setCommissionRange(adminV2CommissionRangeState.activeRange);

function setSystemPreview(preview) {
  adminV2SystemState.activePreview = preview;
  document.querySelectorAll("[data-system-preview]").forEach((button) => {
    button.classList.toggle("active", button.dataset.systemPreview === preview);
  });
  document.querySelectorAll("[data-system-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.systemPanel === preview);
  });
}

function renderStage8LocalApiHandoff(data) {
  const status = document.querySelector("[data-stage8-api-status]");
  const source = document.querySelector("[data-stage8-api-source]");
  const database = document.querySelector("[data-stage8-api-database]");
  const write = document.querySelector("[data-stage8-api-write]");
  const deploy = document.querySelector("[data-stage8-api-deploy]");
  const endpointBody = document.querySelector("[data-stage8-endpoint-body]");
  const handoff = data || {};

  if (status) status.textContent = handoff.status || "local-api-ready";
  if (source) source.textContent = handoff.source || "public/admin-v2-local-data.json";
  if (database) database.textContent = handoff.realDatabaseConnected ? "已连接" : "不连接";
  if (write) write.textContent = handoff.writeEnabled ? "开启" : "关闭";
  if (deploy) deploy.textContent = handoff.productionDeployEnabled ? "可发布" : "不可发布";

  const checks = Array.isArray(handoff.endpointChecks) ? handoff.endpointChecks : [];
  if (!endpointBody) return;
  if (!checks.length) {
    endpointBody.innerHTML = '<tr><td colspan="3">等待加载本地 API 验收清单。</td></tr>';
    return;
  }

  endpointBody.innerHTML = checks.map((item) => `
    <tr>
      <td>${escapeHtml(item.path)}</td>
      <td><span class="status-badge">${escapeHtml(item.status)}</span></td>
      <td>${escapeHtml(item.source)}</td>
    </tr>
  `).join("");
}

function refreshStage8LocalApiHandoff() {
  const status = document.querySelector("[data-stage8-api-status]");
  if (status) status.textContent = "请求中";

  fetch(adminV2LocalBridge.stage8HandoffUrl, { cache: "no-store" })
    .then((response) => response.json())
    .then(renderStage8LocalApiHandoff)
    .catch(() => {
      fetch(adminV2LocalBridge.dataUrl, { cache: "no-store" })
        .then((response) => response.json())
        .then((data) => renderStage8LocalApiHandoff(data.stage8LocalApiHandoff || {}))
        .catch(() => {
          renderStage8LocalApiHandoff({
            status: "fallback-only",
            source: "static fallback",
            realDatabaseConnected: false,
            writeEnabled: false,
            productionDeployEnabled: false,
            endpointChecks: [],
          });
        });
    });
}

document.querySelectorAll("[data-system-preview]").forEach((button) => {
  button.addEventListener("click", () => setSystemPreview(button.dataset.systemPreview));
});

setSystemPreview(adminV2SystemState.activePreview);

function setSyncPreview(preview) {
  adminV2SyncState.activePreview = preview;
  document.querySelectorAll("[data-sync-preview]").forEach((button) => {
    button.classList.toggle("active", button.dataset.syncPreview === preview);
  });
  document.querySelectorAll("[data-sync-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.syncPanel === preview);
  });
}

document.querySelectorAll("[data-sync-preview]").forEach((button) => {
  button.addEventListener("click", () => setSyncPreview(button.dataset.syncPreview));
});

setSyncPreview(adminV2SyncState.activePreview);

function renderStage9Rows(selector, items, columns, emptyText) {
  const target = document.querySelector(selector);
  if (!target) return;
  if (!items.length) {
    target.innerHTML = `<tr><td colspan="${columns.length}">${escapeHtml(emptyText)}</td></tr>`;
    return;
  }

  target.innerHTML = items.map((item) => `
    <tr>
      ${columns.map((column) => `<td>${escapeHtml(item[column] || "")}</td>`).join("")}
    </tr>
  `).join("");
}

function renderStage9Readiness(data) {
  const readiness = data || {};
  const status = document.querySelector("[data-stage9-readiness-status]");
  const gitStatus = document.querySelector("[data-stage9-git-status]");
  const commit = document.querySelector("[data-stage9-can-commit]");
  const push = document.querySelector("[data-stage9-can-push]");
  const deploy = document.querySelector("[data-stage9-can-deploy]");
  const merge = document.querySelector("[data-stage9-can-merge]");
  const next = document.querySelector("[data-stage9-next-action]");

  if (status) status.textContent = readiness.status || "waiting-boss-acceptance";
  if (gitStatus) gitStatus.textContent = readiness.gitStatus || "worktree-changes-not-committed";
  if (commit) commit.textContent = readiness.canCommit ? "允许" : "不允许";
  if (push) push.textContent = readiness.canPush ? "允许" : "不允许";
  if (deploy) deploy.textContent = readiness.canDeployProduction ? "允许" : "不允许";
  if (merge) merge.textContent = readiness.canMergeMain ? "允许" : "不允许";
  if (next) next.textContent = readiness.nextAllowedAction || "老板统一验收通过后再进入提交/推送准备。";

  renderStage9Rows(
    "[data-stage9-team-body]",
    Array.isArray(readiness.teamReviews) ? readiness.teamReviews : [],
    ["owner", "scope", "status", "focus"],
    "等待加载团队 review 清单。",
  );
  renderStage9Rows(
    "[data-stage9-checklist-body]",
    Array.isArray(readiness.checklist) ? readiness.checklist : [],
    ["item", "status"],
    "等待加载 PR 闸口清单。",
  );
  renderStage9Rows(
    "[data-stage9-risk-body]",
    Array.isArray(readiness.productionBlockers) ? readiness.productionBlockers : [],
    ["label", "status"],
    "等待加载生产阻断项。",
  );
}

function refreshStage9Readiness() {
  const status = document.querySelector("[data-stage9-readiness-status]");
  if (status) status.textContent = "请求中";

  fetch(adminV2LocalBridge.stage9ReadinessUrl, { cache: "no-store" })
    .then((response) => response.json())
    .then(renderStage9Readiness)
    .catch(() => {
      fetch(adminV2LocalBridge.dataUrl, { cache: "no-store" })
        .then((response) => response.json())
        .then((data) => renderStage9Readiness(data.stage9PrReadiness || {}))
        .catch(() => {
          renderStage9Readiness({
            status: "fallback-only",
            gitStatus: "unknown",
            canCommit: false,
            canPush: false,
            canDeployProduction: false,
            canMergeMain: false,
            teamReviews: [],
            checklist: [],
            productionBlockers: [],
          });
        });
    });
}

function renderStage10FinalAcceptance(data) {
  const acceptance = data || {};
  const status = document.querySelector("[data-stage10-final-status]");
  const commit = document.querySelector("[data-stage10-can-commit]");
  const push = document.querySelector("[data-stage10-can-push]");
  const pr = document.querySelector("[data-stage10-can-pr]");
  const deploy = document.querySelector("[data-stage10-can-deploy]");
  const note = document.querySelector("[data-stage10-decision-note]");

  if (status) status.textContent = acceptance.status || "waiting-boss-final-acceptance";
  if (commit) commit.textContent = acceptance.canCommit ? "允许" : "不允许";
  if (push) push.textContent = acceptance.canPush ? "允许" : "不允许";
  if (pr) pr.textContent = acceptance.canCreatePr ? "允许" : "不允许";
  if (deploy) deploy.textContent = acceptance.canDeployProduction ? "允许" : "不允许";
  if (note) note.textContent = acceptance.decisionNote || "老板最终确认之前，不提交、不 push、不创建 PR、不部署正式站。";

  renderStage9Rows(
    "[data-stage10-stage-body]",
    Array.isArray(acceptance.stageSummaries) ? acceptance.stageSummaries : [],
    ["stage", "label", "status"],
    "等待加载 P1-P9 总体验收清单。",
  );
  renderStage9Rows(
    "[data-stage10-checklist-body]",
    Array.isArray(acceptance.finalChecklist) ? acceptance.finalChecklist : [],
    ["item", "status"],
    "等待加载最终提交前清单。",
  );
  renderStage9Rows(
    "[data-stage10-risk-body]",
    Array.isArray(acceptance.riskLocks) ? acceptance.riskLocks : [],
    ["label", "status"],
    "等待加载风险锁。",
  );
}

function refreshStage10FinalAcceptance() {
  const status = document.querySelector("[data-stage10-final-status]");
  if (status) status.textContent = "请求中";

  fetch(adminV2LocalBridge.stage10FinalUrl, { cache: "no-store" })
    .then((response) => response.json())
    .then(renderStage10FinalAcceptance)
    .catch(() => {
      fetch(adminV2LocalBridge.dataUrl, { cache: "no-store" })
        .then((response) => response.json())
        .then((data) => renderStage10FinalAcceptance(data.stage10FinalAcceptance || {}))
        .catch(() => {
          renderStage10FinalAcceptance({
            status: "fallback-only",
            canCommit: false,
            canPush: false,
            canCreatePr: false,
            canDeployProduction: false,
            stageSummaries: [],
            finalChecklist: [],
            riskLocks: [],
          });
        });
    });
}

document.querySelector("[data-customer-search]")?.addEventListener("input", () => {
  renderCustomerRows(adminV2CustomerState.data.users || []);
});

document.querySelector("[data-local-users-body]")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-customer-select]");
  if (!button) return;
  adminV2CustomerState.activeUserId = button.dataset.customerSelect;
  renderCustomerDetail(getActiveCustomer());
});

document.querySelectorAll("[data-customer-action]").forEach((button) => {
  button.addEventListener("click", () => performCustomerAction(button.dataset.customerAction));
});

document.querySelector("[data-learning-user-filter]")?.addEventListener("change", (event) => {
  adminV2LearningState.activeUserId = event.target.value;
  renderLearningRecords(adminV2LearningState.data.learningRecords || []);
});

document.querySelectorAll("[data-learning-action]").forEach((button) => {
  button.addEventListener("click", () => performLearningAction(button.dataset.learningAction));
});

document.querySelector("[data-material-filter]")?.addEventListener("change", (event) => {
  adminV2MaterialState.activePackageId = event.target.value;
  renderMaterialPackages(adminV2MaterialState.data.materialPackages || []);
});

document.querySelectorAll("[data-material-action]").forEach((button) => {
  button.addEventListener("click", () => performMaterialAction(button.dataset.materialAction));
});

document.querySelector("[data-agent-filter]")?.addEventListener("change", (event) => {
  adminV2AgentDataState.activeAgentId = event.target.value;
  adminV2AgentDataState.activeCommissionId = "";
  renderAgentCustomers(adminV2AgentDataState.data.agentCustomers || []);
  renderAgentCommissionRows(adminV2AgentDataState.data.agentCommissions || []);
});

document.querySelector("[data-agent-attribution-customer]")?.addEventListener("change", (event) => {
  const customers = adminV2AgentDataState.data.agentCustomers || [];
  const customer = customers.find((item) => item.id === event.target.value);
  const source = document.querySelector("[data-agent-attribution-source]");
  if (source && customer) source.value = customer.source || "";
});

document.querySelector("[data-agent-commission-body]")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-agent-commission-select]");
  if (!button) return;
  adminV2AgentDataState.activeCommissionId = button.dataset.agentCommissionSelect;
});

document.querySelectorAll("[data-agent-action]").forEach((button) => {
  button.addEventListener("click", () => performAgentAction(button.dataset.agentAction));
});

document.querySelector("[data-real-readonly-action='previewRealUsers']")?.addEventListener("click", refreshRealReadonlyPreview);
document.querySelector("[data-stage7-schema-action='refreshContract']")?.addEventListener("click", refreshStage7SchemaContract);
document.querySelector("[data-stage8-api-action='refreshHandoff']")?.addEventListener("click", refreshStage8LocalApiHandoff);
document.querySelector("[data-stage9-action='refreshReadiness']")?.addEventListener("click", refreshStage9Readiness);
document.querySelector("[data-stage10-action='refreshFinalAcceptance']")?.addEventListener("click", refreshStage10FinalAcceptance);
document.querySelector("[data-refresh-backend]")?.addEventListener("click", refreshAdminV2BackendData);
loadAdminV2LocalBridge();
refreshStage7SchemaContract();
refreshStage8LocalApiHandoff();
refreshStage9Readiness();
refreshStage10FinalAcceptance();
