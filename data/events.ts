import type { LocalizedText, Priority } from './types';
export type Event = { id:string; day:string; time:string; type:LocalizedText; title:LocalizedText; importance:Priority; preparation:LocalizedText };
export const events: Event[] = [
 {id:'faction-duel', day:'Monday', time:'19:00 UTC', type:{en:'Faction Duel', zh:'阵营对决'}, title:{en:'Duel score window', zh:'对决得分窗口'}, importance:'High', preparation:{en:'Save stamina, radar, speedups, and chest claims.', zh:'保留体力、雷达、加速和宝箱领取。'}},
 {id:'outpost', day:'Tuesday', time:'18:30 UTC', type:{en:'Outpost', zh:'前哨'}, title:{en:'Outpost lock rotation', zh:'前哨锁定轮换'}, importance:'High', preparation:{en:'Recall gatherers 15 minutes early; preset defense squads.', zh:'提前 15 分钟召回采集队；预设防守队伍。'}},
 {id:'sanctuary', day:'Thursday', time:'20:00 UTC', type:{en:'Sanctuary', zh:'圣所'}, title:{en:'Sanctuary pressure test', zh:'圣所压力测试'}, importance:'Medium', preparation:{en:'Scout first, rally second, reinforce only on command.', zh:'先侦察，再集结，只按指令增援。'}},
 {id:'server-reset', day:'Daily', time:'00:00 UTC', type:{en:'Reset', zh:'重置'}, title:{en:'Reset shield check', zh:'重置护盾检查'}, importance:'Medium', preparation:{en:'Confirm shield timers and hospital capacity.', zh:'确认护盾时间和医院容量。'}}
];
