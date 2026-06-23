import type { LocalizedText } from './types';
export type Guide = { id:string; title:LocalizedText; items:LocalizedText[] };
export const guides: Guide[] = [
 {id:'before-battle', title:{en:'Before battle', zh:'战斗前'}, items:[{en:'Recall gatherers and empty exposed marches.', zh:'召回采集队，清空暴露行军。'},{en:'Set squads, heroes, drones, and buffs before call.', zh:'指挥前设置队伍、英雄、无人机和增益。'},{en:'Wait for rally lead targets; no solo hits.', zh:'等待集结手目标；禁止单独攻击。'}]},
 {id:'before-sleep', title:{en:'Before sleep', zh:'睡前'}, items:[{en:'Shield mandatory outside active hours.', zh:'非活跃时段必须开启护盾。'},{en:'Queue long upgrades and safe research.', zh:'安排长时间升级和安全研究。'},{en:'Post availability for next war window.', zh:'发布下一战争窗口的在线时间。'}]},
 {id:'push-day', title:{en:'Push day', zh:'冲榜日'}, items:[{en:'Hold speedups until R4 opens buff window.', zh:'R4 开启增益窗口前保留加速。'},{en:'Claim points in the correct event order.', zh:'按正确活动顺序领取积分。'}]},
 {id:'shield-use', title:{en:'Shield use', zh:'护盾使用'}, items:[{en:'Refresh shield before it drops under 30 minutes.', zh:'护盾低于 30 分钟前续盾。'},{en:'Never drop shield while hospitals are full.', zh:'医院满员时绝不掉盾。'}]},
 {id:'speedups', title:{en:'Speedups use', zh:'加速使用'}, items:[{en:'Do not burn speedups outside buff windows.', zh:'不要在增益窗口之外消耗加速道具。'},{en:'Keep emergency healing speedups for defense.', zh:'保留紧急治疗加速用于防守。'}]}
];
