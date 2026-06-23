import type { LocalizedText, Priority, Status } from './types';
export type Order = { id: string; priority: Priority; objective: LocalizedText; instructions: LocalizedText; time: string; responsible: string; status: Status };
export const orders: Order[] = [
 { id:'altar-lock', priority:'High', objective:{en:'Secure faction altar chain', zh:'确保阵营祭坛链'}, instructions:{en:'Rally leads hold march slots. Scouts report enemy stacks every 10 minutes.', zh:'集结手保留行军队列。侦察每 10 分钟汇报敌方兵力。'}, time:'18:00 UTC', responsible:'R4 / Rally Leads', status:'In Progress'},
 { id:'buff-window', priority:'High', objective:{en:'Spend only inside buff window', zh:'仅在增益窗口内消耗资源'}, instructions:{en:'Do not burn speedups outside buff windows.', zh:'不要在增益窗口之外消耗加速道具。'}, time:'20:00 UTC', responsible:'Support Team', status:'Open'},
 { id:'shield-discipline', priority:'Medium', objective:{en:'Night shield discipline', zh:'夜间护盾纪律'}, instructions:{en:'Shield mandatory outside active hours.', zh:'非活跃时段必须开启护盾。'}, time:'Before sleep', responsible:'All Members', status:'Open'},
 { id:'farm-clean', priority:'Low', objective:{en:'Clean nearby farms', zh:'清理附近资源点'}, instructions:{en:'Keep marches short. Do not cross enemy watch lines.', zh:'缩短行军距离。不要越过敌方警戒线。'}, time:'Any low-risk window', responsible:'Farmers', status:'Open'}
];
export const dontDoToday: LocalizedText[] = [
 { en:'Do not start solo hits on sanctuary tiles.', zh:'不要单独攻击圣所地块。'},
 { en:'Do not pull VIP 18 into low-value rallies.', zh:'不要把 VIP 18 投入低价值集结。'},
 { en:'Do not empty hospital speedups before command call.', zh:'指挥通知前不要清空医院加速。'}
];
