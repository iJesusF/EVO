import type { en } from './en';
export const zh: typeof en = {
  appName: '33G 作战室', navHome: '首页', navOrders: '指令', navStrategy: '战略', navCalendar: '日历', navRoster: '成员', navGuides: '指南', navLogin: '登录', navProfile: '资料', navAdmin: '管理', languageToggle: 'English',
  homeEyebrow: '第 6 赛季私人指挥中心', homeTitle: '33G 作战室', homeSubtitle: 'R4 指挥面板，用于指令、集结窗口、护盾、成员战备与阵营目标协调。',
  totalPower: '总战力', vip18: '可用 VIP 18', seasonStatus: '第 6 赛季状态', nextEvents: '近期活动', quickOrders: '快速指令', activeDirective: '当前指令', supabaseMode: '数据模式', mockFallback: 'Supabase 环境变量未配置前，将使用模拟数据。',
  ordersTitle: '今日指令', ordersSubtitle: '所有人可查看。R4/R5 管理员通过 Supabase 管理实时指令。', noDoTitle: '今日禁止事项', objective: '目标', instructions: '指令', time: '时间', responsible: '负责人', status: '状态',
  strategyTitle: '第 6 赛季战略', strategySubtitle: '围绕目标、防守与集结控制的作战室优先级。', tacticalPriorities: '战术优先级',
  calendarTitle: '活动日历', calendarSubtitle: '每周作战窗口与准备要求。', preparation: '准备', importance: '重要性', type: '类型',
  rosterTitle: '联盟成员', rosterSubtitle: '所有人可查看资料。成员只编辑自己；R4/R5 管理员可编辑全部。', player: '玩家', power: '总战力', firstSquadPower: '一队战力', vip: 'VIP', role: '角色', squadType: '队伍', heroes: '最佳英雄', timezone: '时区', availability: '在线时间', notes: '备注', vipAsset: 'VIP 18 集结核心',
  guidesTitle: '快速指南', guidesSubtitle: '战斗日与低活跃时段的纪律清单。',
  loginTitle: '联盟登录', loginSubtitle: 'Supabase 认证入口。可在 Supabase 后台启用邮箱魔法链接或密码登录。', email: '邮箱', password: '密码', signIn: '登录', signOut: '退出', authNotice: '如果缺少 Supabase 环境变量，此页面保持演示模式，网站仍会正常显示。',
  profileTitle: '我的资料', profileSubtitle: '成员更新自己的作战室战备资料。', saveProfile: '保存资料', adminOnly: '仅 R4/R5',
  adminTitle: '管理面板', adminSubtitle: 'R4/R5 用于成员治理、指令和活动战备的控制台。', importTitle: 'CSV 成员导入', importSubtitle: '为 Google Sheets 导出准备 Supabase 导入流程。暂不直接连接 Google Drive。', downloadTemplate: 'CSV 模板字段', importFlow: '导入流程',
  priorityHigh: '高', priorityMedium: '中', priorityLow: '低', statusOpen: '开放', statusInProgress: '进行中', statusLocked: '锁定', statusDone: '完成',
  footer: '模拟数据指挥中心。配置 Supabase 环境变量后切换为数据库。', accessGateTitle: '联盟访问受限', accessGateBody: 'Supabase 认证策略上线后可启用访问限制。'
} as const;
