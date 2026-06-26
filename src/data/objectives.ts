export type Objective = { id:string; title:{en:string; zh:string}; priority:'high'|'medium'|'low'; description:{en:string; zh:string}; startsAt:string; status:'active'|'upcoming'|'locked' };
export const objectives: Objective[] = [
  { id:'control-center', title:{en:'Control Center Capture', zh:'控制中心占领'}, priority:'high', description:{en:'Secure the central control point and deny enemy rally anchors.', zh:'夺取中心控制点并阻止敌方集结锚点。'}, startsAt:'2026-07-03T18:00:00Z', status:'upcoming' },
  { id:'air-base', title:{en:'Air Base Secured', zh:'空军基地稳固'}, priority:'medium', description:{en:'Hold air base routes for fast reinforcement lanes.', zh:'控制空军基地路线，建立快速增援通道。'}, startsAt:'2026-07-05T18:00:00Z', status:'upcoming' },
  { id:'train-station', title:{en:'Train Station Control', zh:'火车站控制'}, priority:'high', description:{en:'Coordinate with allies to control the transit objective.', zh:'与盟友协调控制交通目标。'}, startsAt:'2026-07-08T20:00:00Z', status:'locked' },
  { id:'sanctuary-clash', title:{en:'Sanctuary Clash', zh:'圣所冲突'}, priority:'high', description:{en:'Fight only through coordinated rallies and reinforcements.', zh:'只通过协调集结与增援作战。'}, startsAt:'2026-07-12T19:00:00Z', status:'locked' },
  { id:'final-showdown', title:{en:'Final Showdown', zh:'最终决战'}, priority:'high', description:{en:'Save major buffs and rally strength for the final phase.', zh:'为最终阶段保留主要增益和集结战力。'}, startsAt:'2026-07-18T21:00:00Z', status:'locked' }
];
