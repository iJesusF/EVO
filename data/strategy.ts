import type { LocalizedText, Priority } from './types';
export type StrategySection = { id:string; title:LocalizedText; priority:Priority; bullets:LocalizedText[] };
export const strategySections: StrategySection[] = [
 {id:'altars', title:{en:'Altars', zh:'祭坛'}, priority:'High', bullets:[{en:'Lock altar chain before enemy reset rotation.', zh:'在敌方重置轮换前锁定祭坛链。'},{en:'VIP 18 joins only decisive flips.', zh:'VIP 18 只参加决定性转换。'}]},
 {id:'outposts', title:{en:'Outposts', zh:'前哨'}, priority:'High', bullets:[{en:'Hold forward outposts as rally anchors.', zh:'将前线前哨作为集结锚点。'}]},
 {id:'sanctuaries', title:{en:'Sanctuaries', zh:'圣所'}, priority:'Medium', bullets:[{en:'Probe with scouts, commit rallies only with clean timing.', zh:'先侦察试探，仅在时机明确时投入集结。'}]},
 {id:'faction-duel', title:{en:'Faction Duel', zh:'阵营对决'}, priority:'High', bullets:[{en:'Stack claims and speedups into scoring windows.', zh:'把领取和加速集中到得分窗口。'}]},
 {id:'defense', title:{en:'Defense', zh:'防守'}, priority:'High', bullets:[{en:'Reinforce rally leads first; burn traps only on command.', zh:'优先增援集结手；仅按指令消耗陷阱。'}]},
 {id:'rally-plan', title:{en:'Rally Plan', zh:'集结计划'}, priority:'High', bullets:[{en:'One caller, two VIP 18 assets, no split focus.', zh:'单一指挥、两个 VIP 18 核心，不分散火力。'}]}
];
