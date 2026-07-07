const cleanAdminState = {
  tab: "overview",
  language: "zh",
};

const cleanAdminText = {
  zh: {
    language: "中文 / Tiếng Việt",
    brandTitle: "Admin V2 clean shell",
    brandSubtitle: "UI review only · no data",
    navOverview: "运营总览",
    navUsers: "用户管理",
    navLearning: "学习数据",
    navSupport: "客服工作台",
    navContent: "内容管理",
    navVip: "VIP 与课程",
    navAgents: "代理与佣金",
    navSystem: "系统设置",
    topEyebrow: "给阿辉的纯净后台",
    topTitle: "华美后台数据管理中心 V2",
    topSummary: "只保留后台结构、导航、空状态、筛选条、表格骨架和操作位，不接真实数据。",
    statusShell: "UI shell",
    statusApi: "no API",
    statusDb: "no database",
    warningTitle: "设计验收边界",
    warningCopy: "此页面只给 UI 测试使用；没有用户数据、没有订单、没有 VIP 写入、没有支付回调、没有数据库连接。",
    sectionOverviewEyebrow: "Overview",
    sectionOverviewTitle: "运营总览",
    metricSignup: "今日注册",
    metricSignupHint: "等待真实数据接入",
    metricLearning: "今日学习",
    metricLearningHint: "等待学习事件",
    metricSupport: "待处理客服",
    metricSupportHint: "等待客服队列",
    metricAgents: "代理佣金",
    metricAgentsHint: "等待佣金契约",
    overviewEmptyTitle: "空总览状态",
    overviewEmptyCopy: "阿辉可以在这里调整图表、数据卡和信息密度；当前不展示任何真实业务内容。",
    sectionUsersEyebrow: "Users",
    sectionUsersTitle: "用户管理",
    filterSearch: "搜索用户",
    filterSearchPlaceholder: "姓名 / 邮箱 / ID",
    filterLevel: "等级",
    filterAllLevels: "全部等级",
    filterPlan: "套餐",
    filterAllPlans: "全部套餐",
    refresh: "刷新",
    thName: "姓名 / ID",
    thEmail: "Email / 注册时间",
    thRole: "角色",
    thLevel: "等级",
    thExpiry: "期限",
    thAction: "操作",
    emptyUsers: "暂无用户数据 / Chưa có dữ liệu người dùng",
    sectionLearningEyebrow: "Learning",
    sectionLearningTitle: "学习数据",
    learningEmptyTitle: "学习记录空状态",
    learningEmptyCopy: "预留做题数、错题数、最近学习、学习事件列表位置。",
    sectionSupportEyebrow: "Support",
    sectionSupportTitle: "客服工作台",
    supportCardTitle: "客户卡片",
    supportCardCopy: "预留客户资料、VIP 状态、订单状态、备注位置。",
    supportQueueTitle: "处理队列",
    supportQueueCopy: "预留客服任务、跟进状态和操作记录位置。",
    sectionContentEyebrow: "Content",
    sectionContentTitle: "内容管理",
    contentEmptyTitle: "素材工作流空状态",
    contentEmptyCopy: "预留素材上传、验收、草稿、发布、fallback、rollback 入口。",
    sectionVipTitle: "VIP 与课程",
    vipEmptyTitle: "权限配置空状态",
    vipEmptyCopy: "预留 VIP 授权、课程锁定、套餐规则位置；当前没有写入能力。",
    sectionAgentsEyebrow: "Agents",
    sectionAgentsTitle: "代理与佣金",
    agentAttributionTitle: "代理归属",
    agentAttributionCopy: "预留客户来源、一级代理、二级代理、手动归因位置。",
    commissionTitle: "佣金预览",
    commissionCopy: "预留昨日、本周、本月、自定义时间范围。",
    sectionSystemEyebrow: "System",
    sectionSystemTitle: "系统设置",
    systemEmptyTitle: "发布闸口空状态",
    systemEmptyCopy: "预留环境、权限、审计日志、发布确认位置。",
  },
  vi: {
    language: "Tiếng Việt / 中文",
    brandTitle: "Admin V2 clean shell",
    brandSubtitle: "Chỉ dùng để kiểm tra UI · không có dữ liệu",
    navOverview: "Tổng quan vận hành",
    navUsers: "Quản lý người dùng",
    navLearning: "Dữ liệu học tập",
    navSupport: "Bàn hỗ trợ khách hàng",
    navContent: "Quản lý nội dung",
    navVip: "VIP và khóa học",
    navAgents: "Đại lý và hoa hồng",
    navSystem: "Cài đặt hệ thống",
    topEyebrow: "Backend sạch cho UI",
    topTitle: "Trung tâm quản trị dữ liệu HuaMei V2",
    topSummary: "Chỉ giữ bố cục, điều hướng, trạng thái trống, bộ lọc, khung bảng và vị trí thao tác; không kết nối dữ liệu thật.",
    statusShell: "Khung UI",
    statusApi: "không API",
    statusDb: "không database",
    warningTitle: "Ranh giới nghiệm thu thiết kế",
    warningCopy: "Trang này chỉ dùng để kiểm tra UI; không có dữ liệu người dùng, đơn hàng, ghi VIP, webhook thanh toán hoặc kết nối database.",
    sectionOverviewEyebrow: "Tổng quan",
    sectionOverviewTitle: "Tổng quan vận hành",
    metricSignup: "Đăng ký hôm nay",
    metricSignupHint: "Chờ kết nối dữ liệu thật",
    metricLearning: "Học hôm nay",
    metricLearningHint: "Chờ sự kiện học tập",
    metricSupport: "Hỗ trợ chờ xử lý",
    metricSupportHint: "Chờ hàng đợi hỗ trợ",
    metricAgents: "Hoa hồng đại lý",
    metricAgentsHint: "Chờ hợp đồng hoa hồng",
    overviewEmptyTitle: "Trạng thái tổng quan trống",
    overviewEmptyCopy: "A Huy có thể chỉnh biểu đồ, thẻ dữ liệu và mật độ thông tin tại đây; hiện không hiển thị nội dung nghiệp vụ thật.",
    sectionUsersEyebrow: "Người dùng",
    sectionUsersTitle: "Quản lý người dùng",
    filterSearch: "Tìm người dùng",
    filterSearchPlaceholder: "Tên / email / ID",
    filterLevel: "Cấp độ",
    filterAllLevels: "Tất cả cấp độ",
    filterPlan: "Gói",
    filterAllPlans: "Tất cả gói",
    refresh: "Làm mới",
    thName: "Tên / ID",
    thEmail: "Email / thời gian đăng ký",
    thRole: "Vai trò",
    thLevel: "Cấp độ",
    thExpiry: "Hạn dùng",
    thAction: "Thao tác",
    emptyUsers: "Chưa có dữ liệu người dùng",
    sectionLearningEyebrow: "Học tập",
    sectionLearningTitle: "Dữ liệu học tập",
    learningEmptyTitle: "Trạng thái trống của hồ sơ học tập",
    learningEmptyCopy: "Giữ chỗ cho số câu làm, câu sai, lần học gần nhất và danh sách sự kiện học tập.",
    sectionSupportEyebrow: "Hỗ trợ",
    sectionSupportTitle: "Bàn hỗ trợ khách hàng",
    supportCardTitle: "Thẻ khách hàng",
    supportCardCopy: "Giữ chỗ cho hồ sơ khách hàng, trạng thái VIP, trạng thái đơn hàng và ghi chú.",
    supportQueueTitle: "Hàng đợi xử lý",
    supportQueueCopy: "Giữ chỗ cho nhiệm vụ hỗ trợ, trạng thái theo dõi và lịch sử thao tác.",
    sectionContentEyebrow: "Nội dung",
    sectionContentTitle: "Quản lý nội dung",
    contentEmptyTitle: "Trạng thái trống của quy trình nội dung",
    contentEmptyCopy: "Giữ chỗ cho tải lên, nghiệm thu, bản nháp, phát hành, fallback và rollback.",
    sectionVipTitle: "VIP và khóa học",
    vipEmptyTitle: "Trạng thái trống của cấu hình quyền",
    vipEmptyCopy: "Giữ chỗ cho cấp VIP, khóa bài học và quy tắc gói; hiện không có khả năng ghi.",
    sectionAgentsEyebrow: "Đại lý",
    sectionAgentsTitle: "Đại lý và hoa hồng",
    agentAttributionTitle: "Gán nguồn đại lý",
    agentAttributionCopy: "Giữ chỗ cho nguồn khách hàng, đại lý cấp 1, đại lý cấp 2 và gán thủ công.",
    commissionTitle: "Xem trước hoa hồng",
    commissionCopy: "Giữ chỗ cho hôm qua, tuần này, tháng này và khoảng thời gian tùy chỉnh.",
    sectionSystemEyebrow: "Hệ thống",
    sectionSystemTitle: "Cài đặt hệ thống",
    systemEmptyTitle: "Trạng thái trống của cổng phát hành",
    systemEmptyCopy: "Giữ chỗ cho môi trường, quyền, nhật ký kiểm toán và xác nhận phát hành.",
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
  document.querySelectorAll("[data-clean-i18n]").forEach((node) => {
    const key = node.dataset.cleanI18n;
    if (copy[key]) node.textContent = copy[key];
  });
  document.querySelectorAll("[data-clean-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.cleanI18nPlaceholder;
    if (copy[key]) node.setAttribute("placeholder", copy[key]);
  });
}

document.querySelectorAll("[data-clean-tab]").forEach((button) => {
  button.addEventListener("click", () => setCleanAdminTab(button.dataset.cleanTab));
});

document.querySelector("[data-clean-language]")?.addEventListener("click", () => {
  setCleanAdminLanguage(cleanAdminState.language === "zh" ? "vi" : "zh");
});

setCleanAdminTab(cleanAdminState.tab);
setCleanAdminLanguage(cleanAdminState.language);
