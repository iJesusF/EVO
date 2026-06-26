import type { en } from './en';
type Key = keyof typeof en;
export const zh: Record<Key, string | string[]> = {
  appName: 'EVO 第 6 赛季面板', seasonTitle: '第 6 赛季 — 暗影雨林', alliance: '联盟', evo: 'EVO', currentPhase: '当前阶段', nextMajorEvent: '下一重大活动', language: '语言', completed: '已完成', days: '天', hours: '小时', minutes: '分钟', seconds: '秒',
  overview: '第 6 赛季总览', objectives: '关键目标', schedule: '活动日程', guides: '指南', map: '暗影雨林地图', factionZones: '阵营与区域', altarGuide: '祭坛指南', recommendedBuilds: '推荐配置', commonMistakes: '常见错误', marchPlanner: '行军规划', resourceCalculator: '资源计算', glossary: '术语表',
  topEvent: '重点活动倒计时', currentObjective: '下一个目标', timeline: '目标时间线', quickReminders: '快速提醒', mapLegend: '地图图例', howToReadMap: '如何阅读地图', mapFooter: 'EVO 团结一致，更加强大。', mapPlaceholder: '暗影雨林战术地图占位图',
  evoTerritory: 'EVO 领地', ally: '盟友', neutral: '中立', enemy: '敌人', outpost: '前哨', altar: '祭坛', sanctuary: '圣所', tradePost: '贸易站',
  priority: '优先级', description: '说明', startTime: '开始时间', countdown: '倒计时', status: '状态', preparation: '准备', notes: '备注', high: '高', medium: '中', low: '低', active: '进行中', upcoming: '即将开始', locked: '锁定',
  reminders: ['每个目标前签到。', '用完每日体力。', '与盟友协调集结。', '在联盟聊天中沟通。', '保持活跃，享受游戏。'],
  pageObjectives: '追踪第 6 赛季主要目标，并在每个窗口前完成准备。', pageSchedule: '查看暗影雨林活动时间线与倒计时。', pageGuides: '给指挥官和活跃成员使用的快速参考卡。', pageMap: '带图例和视觉控制的大型战术地图视图。'
};
