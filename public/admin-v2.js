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
  dataUrl: "admin-v2-local-data.json",
  blockedEndpoints: [
    "/api/payments/orders",
    "/api/webhooks/sepay",
    "/api/admin/users/:id/role",
    "/api/admin/plans",
    "/api/admin/content",
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

const adminV2AgentActions = ["markPendingSettlement", "markReviewed", "freezeCommission", "restorePreview"];

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
  renderAgentSummary(data.agentSummary || {});
  renderAgentCustomers(agentCustomers);
  renderAgentCommissionRows(agentCommissions);
  renderAgentAudit(agentAuditLogs);
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
  const commissions = adminV2AgentDataState.data.agentCommissions || [];
  const visibleCommissions = getVisibleAgentRows(commissions);
  const fallbackCommission = visibleCommissions[0] || commissions[0];
  const commissionId = adminV2AgentDataState.activeCommissionId || fallbackCommission?.id;
  if (!commissionId) return;

  const note = document.querySelector("[data-agent-note]")?.value || "";

  fetch(adminV2LocalBridge.agentActionUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, commissionId, note }),
  })
    .then((response) => response.json())
    .then(() => refreshAdminV2BackendData());
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

function setAdminV2Tab(tab) {
  adminV2State.activeTab = tab;
  document.querySelectorAll("[data-admin-v2-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminV2Tab === tab);
  });
  document.querySelectorAll("[data-admin-v2-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.adminV2Panel === tab);
  });
}

document.querySelectorAll("[data-admin-v2-tab]").forEach((button) => {
  button.addEventListener("click", () => setAdminV2Tab(button.dataset.adminV2Tab));
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

document.querySelector("[data-agent-commission-body]")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-agent-commission-select]");
  if (!button) return;
  adminV2AgentDataState.activeCommissionId = button.dataset.agentCommissionSelect;
});

document.querySelectorAll("[data-agent-action]").forEach((button) => {
  button.addEventListener("click", () => performAgentAction(button.dataset.agentAction));
});

document.querySelector("[data-refresh-backend]")?.addEventListener("click", refreshAdminV2BackendData);
loadAdminV2LocalBridge();
