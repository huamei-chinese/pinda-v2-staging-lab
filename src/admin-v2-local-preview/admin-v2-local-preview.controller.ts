import { Body, Controller, Get, Post } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { AdminV2RealReadonlyService } from './admin-v2-real-readonly.service';

@Controller("api/admin-v2")
export class AdminV2LocalPreviewController {
  constructor(private readonly realReadonlyService: AdminV2RealReadonlyService) {}

  @Get("local-preview")
  getLocalPreview() {
    const data = this.readLocalData();

    return {
      ...data,
      meta: {
        ...data.meta,
        apiMode: 'local-preview',
        readOnly: true,
        databaseConnected: false,
        paymentWritesEnabled: false,
      },
    };
  }

  @Get("real-users-readonly-preview")
  getRealUsersReadonlyPreview() {
    return this.realReadonlyService.getPreview(this.readLocalData());
  }

  @Get("stage7-schema-contract")
  getStage7SchemaContract() {
    const data = this.readLocalData();

    return {
      learning: Array.isArray(data.stage7LearningEventSchemas) ? data.stage7LearningEventSchemas : [],
      agent: Array.isArray(data.stage7AgentDataSchemas) ? data.stage7AgentDataSchemas : [],
      gates: Array.isArray(data.stage7AcceptanceGates) ? data.stage7AcceptanceGates : [],
      meta: {
        ...(data.stage7SchemaMeta || {}),
        apiMode: 'stage7-schema-contract',
        readOnly: true,
        realDatabaseConnected: false,
        writeEnabled: false,
      },
    };
  }

  @Post("customer-action")
  customerAction(@Body() body: { action?: string; userId?: string; value?: string }) {
    const data = this.readLocalData();
    const users = Array.isArray(data.users) ? data.users : [];
    const user = users.find((item: { id?: string }) => item.id === body.userId);

    if (!user || !body.action) {
      return {
        ok: false,
        reason: 'missing-user-or-action',
        scope: 'local-json-only',
      };
    }

    const now = new Date();
    const note = typeof body.value === 'string' ? body.value.trim() : '';

    if (body.action === 'vip7d') {
      user.vipStatus = 'VIP';
      user.plan = 'VIP 7d';
      user.vipExpiresAt = this.formatDate(this.addDays(now, 7));
    }

    if (body.action === 'vip30d') {
      user.vipStatus = 'VIP';
      user.plan = 'VIP 30d';
      user.vipExpiresAt = this.formatDate(this.addDays(now, 30));
    }

    if (body.action === 'setExpiry' && note) {
      user.vipStatus = 'VIP';
      user.vipExpiresAt = note;
    }

    if (body.action === 'cancelVip') {
      user.vipStatus = 'Free';
      user.plan = 'Free';
      user.vipExpiresAt = 'N/A';
    }

    if (body.action === 'makeStaff') {
      user.role = '客服管理员';
    }

    if (body.action === 'addNote' && note) {
      user.customerNotes = user.customerNotes ? `${user.customerNotes} / ${note}` : note;
    }

    const auditLogs = Array.isArray(data.auditLogs) ? data.auditLogs : [];
    auditLogs.unshift({
      id: `audit-${Date.now()}`,
      time: now.toISOString(),
      operator: 'local-admin-v2',
      action: body.action,
      userId: user.id,
      userEmail: user.email,
      note: note || '本地实验操作',
      scope: 'local-json-only',
    });

    const nextData = {
      ...data,
      users,
      auditLogs,
      meta: {
        ...data.meta,
        writeScope: 'local-json-only',
        updatedAt: now.toISOString(),
      },
    };

    fs.writeFileSync(this.dataPath(), `${JSON.stringify(nextData, null, 2)}\n`, 'utf8');

    return {
      ok: true,
      user,
      auditLogs,
      meta: {
        ...nextData.meta,
        apiMode: 'local-preview',
        readOnly: false,
        writeScope: 'local-json-only',
        databaseConnected: false,
        paymentWritesEnabled: false,
      },
    };
  }

  @Post("learning-event")
  learningEvent(
    @Body()
    body: {
      eventName?: string;
      userId?: string;
      module?: string;
      lesson?: string;
      questionsDelta?: number;
      wrongDelta?: number;
    },
  ) {
    const allowedEvents = ['lesson_opened', 'question_answered', 'wrong_answer', 'listening_audio_played'];
    const data = this.readLocalData();
    const users = Array.isArray(data.users) ? data.users : [];
    const user = users.find((item: { id?: string }) => item.id === body.userId);

    if (!user || !body.eventName || !allowedEvents.includes(body.eventName)) {
      return {
        ok: false,
        reason: 'missing-user-or-learning-event',
        scope: 'local-json-only',
      };
    }

    const now = new Date();
    const records = Array.isArray(data.learningRecords) ? data.learningRecords : [];
    const record = records.find((item: { userId?: string }) => item.userId === user.id);
    const questionsDelta = Number(body.questionsDelta || (body.eventName === 'question_answered' ? 1 : 0));
    const wrongDelta = Number(body.wrongDelta || (body.eventName === 'wrong_answer' ? 1 : 0));

    if (record) {
      record.module = body.module || record.module;
      record.lesson = body.lesson || record.lesson;
      record.questionsAnswered = Number(record.questionsAnswered || 0) + questionsDelta;
      record.wrongAnswers = Number(record.wrongAnswers || 0) + wrongDelta;
      record.lastStudiedAt = now.toISOString();
      record.recentLearning = `${body.eventName} / ${record.lesson}`;
      record.accuracy = this.formatAccuracy(record.questionsAnswered, record.wrongAnswers);
      user.recentLearning = record.lesson;
    }

    const learningEvents = Array.isArray(data.learningEvents) ? data.learningEvents : [];
    learningEvents.unshift({
      id: `learn-${Date.now()}`,
      time: now.toISOString(),
      eventName: body.eventName,
      userId: user.id,
      userEmail: user.email,
      module: body.module || record?.module || '本地实验学习',
      lesson: body.lesson || record?.lesson || user.recentLearning,
      questionsDelta,
      wrongDelta,
      scope: 'local-json-only',
    });

    const nextData = {
      ...data,
      users,
      learningRecords: records,
      learningEvents,
      learningSummary: this.buildLearningSummary(records, learningEvents, now),
      meta: {
        ...data.meta,
        writeScope: 'local-json-only',
        updatedAt: now.toISOString(),
      },
    };

    fs.writeFileSync(this.dataPath(), `${JSON.stringify(nextData, null, 2)}\n`, 'utf8');

    return {
      ok: true,
      record,
      learningEvents,
      learningSummary: nextData.learningSummary,
      meta: {
        ...nextData.meta,
        apiMode: 'local-preview',
        readOnly: false,
        writeScope: 'local-json-only',
        databaseConnected: false,
        paymentWritesEnabled: false,
      },
    };
  }

  @Post("material-action")
  materialAction(@Body() body: { action?: string; packageId?: string; note?: string }) {
    const allowedActions = [
      'approveIntake',
      'blockIntake',
      'submitDraft',
      'publishLocal',
      'fallbackLocal',
      'rollbackLocal',
    ];
    const data = this.readLocalData();
    const packages = Array.isArray(data.materialPackages) ? data.materialPackages : [];
    const item = packages.find((entry: { id?: string }) => entry.id === body.packageId);

    if (!item || !body.action || !allowedActions.includes(body.action)) {
      return {
        ok: false,
        reason: 'missing-material-or-action',
        scope: 'local-json-only',
      };
    }

    const now = new Date();
    const note = typeof body.note === 'string' && body.note.trim() ? body.note.trim() : '本地素材实验操作';

    if (body.action === 'approveIntake') {
      item.reviewStatus = '验收通过';
      item.uploadStatus = '本地已接收';
    }

    if (body.action === 'blockIntake') {
      item.reviewStatus = '验收阻断';
      item.draftStatus = '不能提交';
      item.publishStatus = '未发布';
    }

    if (body.action === 'submitDraft' && item.reviewStatus !== '验收阻断') {
      item.draftStatus = '草稿已提交';
      item.reviewStatus = item.reviewStatus === '待审核' ? '已审核' : item.reviewStatus;
    }

    if (body.action === 'publishLocal' && item.draftStatus === '草稿已提交') {
      item.publishStatus = '本地已发布';
      item.fallbackStatus = '静态默认可用';
    }

    if (body.action === 'fallbackLocal') {
      item.fallbackStatus = 'fallback 已启用';
      item.publishStatus = '本地暂停';
    }

    if (body.action === 'rollbackLocal') {
      item.publishStatus = '已回滚';
      item.fallbackStatus = '静态默认可用';
    }

    const materialAuditLogs = Array.isArray(data.materialAuditLogs) ? data.materialAuditLogs : [];
    materialAuditLogs.unshift({
      id: `material-audit-${Date.now()}`,
      time: now.toISOString(),
      operator: 'local-admin-v2',
      action: body.action,
      packageId: item.id,
      note,
      scope: 'local-json-only',
    });

    const releaseHistory = Array.isArray(data.releaseHistory) ? data.releaseHistory : [];
    if (body.action === 'publishLocal' || body.action === 'rollbackLocal' || body.action === 'fallbackLocal') {
      releaseHistory.unshift({
        id: `release-${Date.now()}`,
        time: now.toISOString(),
        packageId: item.id,
        title: item.title,
        status: item.publishStatus,
        rollbackVersion: item.rollbackVersion,
        scope: 'local-json-only',
      });
    }

    const nextData = {
      ...data,
      materialPackages: packages,
      materialAuditLogs,
      releaseHistory,
      materialSummary: this.buildMaterialSummary(packages),
      meta: {
        ...data.meta,
        writeScope: 'local-json-only',
        updatedAt: now.toISOString(),
      },
    };

    fs.writeFileSync(this.dataPath(), `${JSON.stringify(nextData, null, 2)}\n`, 'utf8');

    return {
      ok: true,
      materialPackage: item,
      materialAuditLogs,
      releaseHistory,
      materialSummary: nextData.materialSummary,
      meta: {
        ...nextData.meta,
        apiMode: 'local-preview',
        readOnly: false,
        writeScope: 'local-json-only',
        databaseConnected: false,
        paymentWritesEnabled: false,
      },
    };
  }

  @Post("agent-action")
  agentAction(@Body() body: { action?: string; commissionId?: string; note?: string; customerId?: string; targetAgentId?: string; source?: string }) {
    const allowedActions = ['markPendingSettlement', 'markReviewed', 'freezeCommission', 'restorePreview', 'reassignCustomerAgent'];
    const data = this.readLocalData();
    const commissions = Array.isArray(data.agentCommissions) ? data.agentCommissions : [];
    const customers = Array.isArray(data.agentCustomers) ? data.agentCustomers : [];
    const teamMembers = Array.isArray(data.agentTeamMembers) ? data.agentTeamMembers : [];
    const commission = commissions.find((entry: { id?: string }) => entry.id === body.commissionId);
    const customer = customers.find((entry: { id?: string }) => entry.id === body.customerId);
    const targetAgent = teamMembers.find((entry: { agentId?: string }) => entry.agentId === body.targetAgentId);

    if (!body.action || !allowedActions.includes(body.action)) {
      return {
        ok: false,
        reason: 'missing-agent-commission-or-action',
        scope: 'local-json-only',
      };
    }

    const now = new Date();
    const note = typeof body.note === 'string' && body.note.trim() ? body.note.trim() : '本地代理佣金实验操作';

    if (body.action === 'reassignCustomerAgent') {
      if (!customer || !targetAgent) {
        return {
          ok: false,
          reason: 'missing-agent-customer-or-target-agent',
          scope: 'local-json-only',
        };
      }

      customer.agentId = targetAgent.agentId;
      customer.agentName = targetAgent.agentName;
      customer.source = typeof body.source === 'string' && body.source.trim() ? body.source.trim() : customer.source;
      customer.teamScope = this.buildAgentTeamScope(targetAgent, teamMembers);

      commissions
        .filter((entry: { customerEmail?: string }) => entry.customerEmail === customer.customerEmail)
        .forEach((entry: { agentId?: string; agentName?: string; source?: string; teamScope?: string }) => {
          entry.agentId = targetAgent.agentId;
          entry.agentName = targetAgent.agentName;
          entry.source = customer.source;
          entry.teamScope = customer.teamScope;
        });
    }

    if (body.action !== 'reassignCustomerAgent' && !commission) {
      return {
        ok: false,
        reason: 'missing-agent-commission-or-action',
        scope: 'local-json-only',
      };
    }

    if (body.action === 'markPendingSettlement') {
      commission.status = '待结算';
      commission.settlementStatus = '只读预览';
    }

    if (body.action === 'markReviewed') {
      commission.status = '已复核';
      commission.settlementStatus = '不可付款';
    }

    if (body.action === 'freezeCommission') {
      commission.status = '冻结预览';
      commission.settlementStatus = '冻结';
    }

    if (body.action === 'restorePreview') {
      commission.status = '只读预览';
      commission.settlementStatus = '不可付款';
    }

    customers
      .filter((customer: { customerEmail?: string }) => customer.customerEmail === commission.customerEmail)
      .forEach((customer: { commissionStatus?: string }) => {
        customer.commissionStatus = commission.status;
      });

    const agentAuditLogs = Array.isArray(data.agentAuditLogs) ? data.agentAuditLogs : [];
    agentAuditLogs.unshift({
      id: `agent-audit-${Date.now()}`,
      time: now.toISOString(),
      operator: 'local-admin-v2',
      action: body.action,
      commissionId: commission?.id || '',
      customerId: customer?.id || '',
      targetAgentId: targetAgent?.agentId || '',
      note,
      scope: 'local-json-only',
    });

    const nextData = {
      ...data,
      agentCustomers: customers,
      agentCommissions: commissions,
      agentTeamMembers: teamMembers,
      agentAuditLogs,
      agentSummary: this.buildAgentSummary(customers, commissions, teamMembers),
      meta: {
        ...data.meta,
        writeScope: 'local-json-only',
        updatedAt: now.toISOString(),
      },
    };

    fs.writeFileSync(this.dataPath(), `${JSON.stringify(nextData, null, 2)}\n`, 'utf8');

    return {
      ok: true,
      commission,
      customer,
      agentCustomers: customers,
      agentCommissions: commissions,
      agentAuditLogs,
      agentSummary: nextData.agentSummary,
      meta: {
        ...nextData.meta,
        apiMode: 'local-preview',
        readOnly: false,
        writeScope: 'local-json-only',
        databaseConnected: false,
        paymentWritesEnabled: false,
      },
    };
  }

  private dataPath() {
    return path.join(process.cwd(), 'dev-only', 'admin-v2-local-data.json');
  }

  private readLocalData() {
    return JSON.parse(fs.readFileSync(this.dataPath(), 'utf8'));
  }

  private buildRealReadonlyPreview(data: any) {
    const users = Array.isArray(data.realReadonlyUsers)
      ? data.realReadonlyUsers
      : this.buildRealReadonlyUsers(Array.isArray(data.users) ? data.users : []);

    return {
      users,
      contracts: Array.isArray(data.realReadonlyContracts) ? data.realReadonlyContracts : [],
      gaps: Array.isArray(data.realReadonlyGaps) ? data.realReadonlyGaps : [],
      meta: {
        ...(data.realReadonlyMeta || {}),
        apiMode: 'real-readonly-contract-preview',
        source: 'local-contract-preview',
        readOnly: true,
        realDatabaseConnected: false,
        writeEnabled: false,
      },
    };
  }

  private buildRealReadonlyUsers(users: any[]) {
    return users.map((user) => ({
      id: user.id,
      fullName: user.name || user.fullName || 'unknown',
      email: user.email,
      registeredAt: user.registeredAt || user.createdAt || user.created_at || 'pending',
      role: user.role || '普通用户',
      currentLevel: user.level || user.currentLevel || 'HSK2',
      vipStatus: user.vipStatus || user.plan || 'Free',
      premiumUntil: user.vipExpiresAt || user.premiumUntil || 'N/A',
      isActive: true,
      sourceTable: 'users',
      readOnly: true,
    }));
  }

  private buildAgentTeamScope(agent: any, teamMembers: any[]) {
    if (!agent?.parentAgentId) return agent?.agentName || 'unknown-agent';
    const parent = teamMembers.find((member) => member.agentId === agent.parentAgentId);
    return `${this.buildAgentTeamScope(parent, teamMembers)} / ${agent.agentName}`;
  }

  private addDays(date: Date, days: number) {
    const next = new Date(date);
    next.setDate(next.getDate() + days);
    return next;
  }

  private formatDate(date: Date) {
    return date.toISOString().slice(0, 10);
  }

  private formatAccuracy(questionsAnswered: number, wrongAnswers: number) {
    if (!questionsAnswered) return '0%';
    return `${Math.max(0, Math.round(((questionsAnswered - wrongAnswers) / questionsAnswered) * 100))}%`;
  }

  private buildLearningSummary(records: any[], events: any[], now: Date) {
    const questionsAnsweredToday = records.reduce(
      (total, record) => total + Number(record.questionsAnswered || 0),
      0,
    );
    const wrongAnswersToday = records.reduce((total, record) => total + Number(record.wrongAnswers || 0), 0);

    return {
      activeLearnersToday: records.length,
      questionsAnsweredToday,
      wrongAnswersToday,
      averageAccuracy: this.formatAccuracy(questionsAnsweredToday, wrongAnswersToday),
      lastEventAt: events[0]?.time || now.toISOString(),
      writeScope: 'local-json-only',
    };
  }

  private buildMaterialSummary(packages: any[]) {
    return {
      totalPackages: packages.length,
      pendingReview: packages.filter((item) => item.reviewStatus === '待审核').length,
      draftsReady: packages.filter((item) => item.draftStatus === '草稿已提交').length,
      publishedLocal: packages.filter((item) => item.publishStatus === '本地已发布').length,
      fallbackActive: packages.filter((item) => item.fallbackStatus === 'fallback 已启用').length,
      rollbackReady: packages.filter((item) => Boolean(item.rollbackVersion)).length,
      writeScope: 'local-json-only',
    };
  }

  private buildAgentSummary(customers: any[], commissions: any[], teamMembers: any[]) {
    return {
      agentCount: teamMembers.length,
      customerCount: customers.length,
      vipCustomerCount: customers.filter((item) => item.vipStatus === 'VIP').length,
      commissionPreview: commissions.reduce((total, item) => total + Number(item.amount || 0), 0),
      pendingSettlement: commissions.filter((item) => item.status === '待结算').length,
      reviewedCommissions: commissions.filter((item) => item.status === '已复核').length,
      frozenCommissions: commissions.filter((item) => item.status === '冻结预览').length,
      teamLeader: teamMembers.find((item) => item.role === '团队长')?.agentName || 'S-leader',
      writeScope: 'local-json-only',
    };
  }
}
