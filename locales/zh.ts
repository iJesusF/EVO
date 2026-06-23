import type { en } from './en';
type LocaleKey = keyof typeof en;
export const zh: Record<LocaleKey, string> = {
  appName: 'EVO ALLY GOD 911', topbarSubtitle: '第 6 赛季联盟指挥', navHome: '指挥', navLogin: '登录', navProfile: '资料', navAdmin: '管理', languageEnglish: 'English', languageChinese: '中文',
  allianceStatus: '联盟状态', alliancePower: '联盟战力', vip18Players: 'VIP 18 玩家', seasonStatus: '第 6 赛季状态', currentObjective: '当前目标', lastUpdated: '最后更新', dataMode: '数据模式', mockMode: '模拟数据启用', supabaseMode: 'Supabase 已就绪',
  nextEvents: '近期活动', eventTitle: '活动', eventTime: '日期 / 时间', importance: '重要性', preparation: '准备要求', notes: '备注',
  announcements: '主要指令 / 公告', createdBy: '发布者', updatedAt: '更新时间', priority: '优先级', content: '内容',
  quickGuides: '第 6 赛季快速指南', checklist: '检查清单', category: '分类',
  rosterSnapshot: '成员快照', vipRallyFocus: 'VIP 18 / 集结手重点', rulesReminders: '规则与提醒', supportPlayers: '支援成员', rallyUse: '集结用途',
  player: '玩家', totalPower: '总战力', firstSquadPower: '一队战力', vip: 'VIP', role: '角色', squadType: '队伍', heroes: '最佳英雄', timezone: '时区', availability: '在线时间', vipAsset: 'VIP 18 集结核心', rallyLead: '集结手', defender: '防守者',
  loginTitle: '联盟登录', loginSubtitle: '成员通过 Supabase 认证登录。缺少环境变量时仍可使用演示模式。', email: '邮箱', password: '密码', signIn: '登录', authDemo: '认证演示：配置 Supabase 环境变量后启用真实登录。',
  profileTitle: '我的资料', profileSubtitle: '成员只能更新自己的资料。R4/R5 可在管理页维护所有成员。', saveProfile: '保存资料',
  adminTitle: '管理指挥中心', adminSubtitle: 'R4/R5 管理首页公告、活动、指南、规则、成员资料和 CSV 导入。', adminOnly: '仅 R4/R5 管理员', manageAnnouncements: '管理公告', manageEvents: '管理活动', manageGuides: '管理指南', manageRules: '管理规则', manageRoster: '管理成员', openImport: '打开 CSV 导入',
  importTitle: '成员 CSV 导入', importSubtitle: '从 Google Sheets 导出的 CSV 导入初始成员。最终导入前先验证并预览。', expectedFields: '预期字段', importSteps: '导入步骤', chooseCsv: '选择 CSV', previewImport: '预览导入', finalImport: '最终导入',
  priorityHigh: '高', priorityMedium: '中', priorityLow: '低', emptyState: '暂无启用的指挥数据。', errorState: '指挥数据不可用，正在使用本地备用数据。', notFoundTitle: '指挥路线不存在', notFoundBody: '返回联盟主指挥面板。', returnHome: '返回首页',
  day: '日期', title: '标题', type: '类型', responsible: '负责人', status: '状态', statusOpen: '开放', statusInProgress: '进行中', statusLocked: '锁定', statusDone: '完成', accessGateTitle: '联盟访问受限', accessGateBody: 'Supabase 认证策略上线后可启用此入口。',
  jumpStatus: '状态', jumpEvents: '活动', jumpOrders: '指令', jumpGuides: '指南', jumpRoster: '成员', jumpVip: 'VIP 18', jumpRules: '规则'
};
