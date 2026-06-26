export type Guide = { id:string; title:{en:string; zh:string}; summary:{en:string; zh:string}; bullets:{en:string; zh:string}[] };
export const guides: Guide[] = [
  { id:'overview', title:{en:'Season 6 Overview', zh:'第 6 赛季总览'}, summary:{en:'Understand the Shadow Rainforest flow before committing resources.', zh:'投入资源前先理解暗影雨林节奏。'}, bullets:[{en:'Track phase changes daily.', zh:'每天追踪阶段变化。'},{en:'Keep shields ready.', zh:'保持护盾就绪。'}] },
  { id:'zones', title:{en:'Faction & Zones', zh:'阵营与区域'}, summary:{en:'Know friendly, neutral, and enemy routes.', zh:'了解友方、中立与敌方路线。'}, bullets:[{en:'Mark safe paths.', zh:'标记安全路线。'}] },
  { id:'altar', title:{en:'Altar Guide', zh:'祭坛指南'}, summary:{en:'Altars require timing, scouts, and clean rally calls.', zh:'祭坛需要时机、侦察和清晰集结指令。'}, bullets:[{en:'Scout first.', zh:'先侦察。'}] },
  { id:'builds', title:{en:'Recommended Builds', zh:'推荐配置'}, summary:{en:'Prioritize survivability and rally contribution.', zh:'优先生存能力与集结贡献。'}, bullets:[{en:'Save presets.', zh:'保存预设。'}] },
  { id:'mistakes', title:{en:'Common Mistakes', zh:'常见错误'}, summary:{en:'Avoid feeding points or wasting speedups.', zh:'避免送分或浪费加速。'}, bullets:[{en:'Do not solo objectives.', zh:'不要单打目标。'}] },
  { id:'march', title:{en:'March Planner', zh:'行军规划'}, summary:{en:'Keep marches short and coordinated.', zh:'保持短距离且协调的行军。'}, bullets:[{en:'Recall gatherers early.', zh:'提前召回采集队。'}] },
  { id:'resources', title:{en:'Resource Calculator', zh:'资源计算'}, summary:{en:'Estimate healing and build costs before war windows.', zh:'战争窗口前估算治疗和建设成本。'}, bullets:[{en:'Keep emergency reserves.', zh:'保留应急储备。'}] },
  { id:'glossary', title:{en:'Glossary', zh:'术语表'}, summary:{en:'Quick terms for rally, zone, and objective calls.', zh:'集结、区域与目标指令的快速术语。'}, bullets:[{en:'Rally = coordinated attack.', zh:'集结 = 协同攻击。'}] }
];
