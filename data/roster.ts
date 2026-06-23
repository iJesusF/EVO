import type { LocalizedText } from './types';
export type Role = 'Rally Lead' | 'Defender' | 'Scout' | 'Support' | 'Farmer';
export type Member = { player:string; power:string; vip:number; role:Role; availability:LocalizedText; notes:LocalizedText };
export const roster: Member[] = [
 {player:'Aegis-33', power:'2.8G', vip:18, role:'Rally Lead', availability:{en:'18:00-23:00 UTC', zh:'18:00-23:00 UTC'}, notes:{en:'VIP 18 reserved for critical rallies.', zh:'VIP 18 仅用于关键集结。'}},
 {player:'DragonR4', power:'2.5G', vip:18, role:'Defender', availability:{en:'Reset + war windows', zh:'重置与战争窗口'}, notes:{en:'Anchor defense for altar flips.', zh:'祭坛转换时担任防守核心。'}},
 {player:'NightScout', power:'980M', vip:14, role:'Scout', availability:{en:'Late UTC', zh:'UTC 深夜'}, notes:{en:'Enemy stack reports and watch lines.', zh:'负责敌方兵力与警戒线报告。'}},
 {player:'MedicCore', power:'1.3G', vip:15, role:'Support', availability:{en:'Daily reset', zh:'每日重置'}, notes:{en:'Hospital, buffs, and reinforcement calls.', zh:'负责医院、增益与增援呼叫。'}},
 {player:'GrainWolf', power:'760M', vip:12, role:'Farmer', availability:{en:'Flexible', zh:'灵活'}, notes:{en:'RSS staging, short marches only.', zh:'资源集结，仅短距离行军。'}}
];
