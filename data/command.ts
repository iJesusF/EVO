import type { AllianceRole, LocalizedText, Priority } from './types';
export type Announcement = { id:string; title:LocalizedText; content:LocalizedText; priority:Priority; createdBy:string; updatedAt:string; isActive:boolean };
export type CommandEvent = { id:string; title:LocalizedText; eventType:string; importance:Priority; eventTime:string; preparation:LocalizedText; notes:LocalizedText; isActive:boolean };
export type GuideCard = { id:string; title:LocalizedText; content:LocalizedText; checklist:LocalizedText[]; category:string; sortOrder:number; isActive:boolean };
export type RuleReminder = { id:string; title:LocalizedText; content:LocalizedText; priority:Priority; sortOrder:number; isActive:boolean };
export type RallyFocus = { playerName:string; role:AllianceRole; rallyUse:LocalizedText; supportPlayers:string[] };
export const allianceStatus = { power:'33G', vip18Players:2, seasonStatus:{en:'Season 6 active: objective control and rally discipline.', zh:'第 6 赛季进行中：目标控制与集结纪律。'}, currentObjective:{en:'Secure faction objectives and hold rally assets for critical targets.', zh:'确保阵营目标，并保留集结核心用于关键目标。'}, lastUpdated:'2026-06-23 00:00 UTC' };
export const announcements: Announcement[] = [
 {id:'a1', title:{en:'Speedup discipline', zh:'加速纪律'}, content:{en:'Do not burn speedups outside buff windows.', zh:'不要在增益窗口之外消耗加速道具。'}, priority:'High', createdBy:'R4 Command', updatedAt:'2026-06-23 00:00 UTC', isActive:true},
 {id:'a2', title:{en:'VIP 18 rally reserve', zh:'VIP 18 集结保留'}, content:{en:'VIP 18 reserved for critical rallies only. No low-value targets.', zh:'VIP 18 仅保留给关键集结，不打低价值目标。'}, priority:'High', createdBy:'R4 Command', updatedAt:'2026-06-23 00:00 UTC', isActive:true},
 {id:'a3', title:{en:'Shield outside war windows', zh:'战争窗口外必须开盾'}, content:{en:'Shield required outside active war windows. Report if shield timer drops below 30 minutes.', zh:'非战争窗口必须开启护盾。护盾低于 30 分钟请上报。'}, priority:'Medium', createdBy:'Defense Team', updatedAt:'2026-06-23 00:00 UTC', isActive:true}
];
export const commandEvents: CommandEvent[] = [
 {id:'e1', title:{en:'Faction objective push', zh:'阵营目标推进'}, eventType:'Season 6', importance:'High', eventTime:'Today 18:00 UTC', preparation:{en:'Recall gatherers, set presets, keep rally slots open.', zh:'召回采集队，设置预设，保留集结队列。'}, notes:{en:'Scouts report enemy stacks every 10 minutes.', zh:'侦察每 10 分钟报告敌方兵力。'}, isActive:true},
 {id:'e2', title:{en:'Buff window spend', zh:'增益窗口消耗'}, eventType:'Growth', importance:'High', eventTime:'Today 20:00 UTC', preparation:{en:'Hold speedups until R4 opens the window.', zh:'R4 开启窗口前保留加速。'}, notes:{en:'No early chest claims.', zh:'不要提前领取宝箱。'}, isActive:true},
 {id:'e3', title:{en:'Reset shield audit', zh:'重置护盾检查'}, eventType:'Defense', importance:'Medium', eventTime:'Daily 00:00 UTC', preparation:{en:'Confirm shields, hospitals, and defense presets.', zh:'确认护盾、医院和防守预设。'}, notes:{en:'Post offline timers in alliance chat.', zh:'在联盟聊天发布离线时间。'}, isActive:true}
];
export const guideCards: GuideCard[] = [
 {id:'g1', title:{en:'Season 6 start checklist', zh:'第 6 赛季开局清单'}, content:{en:'Start clean, shielded, and ready for objective calls.', zh:'以安全护盾状态开局，准备接收目标指令。'}, checklist:[{en:'Confirm shield timer.', zh:'确认护盾时间。'},{en:'Save stamina and speedups.', zh:'保留体力与加速。'}], category:'Season 6', sortOrder:1, isActive:true},
 {id:'g2', title:{en:'Week 1 priorities', zh:'第一周优先级'}, content:{en:'Map position beats random hits.', zh:'地图位置优先于随机攻击。'}, checklist:[{en:'Secure outposts.', zh:'确保前哨。'},{en:'Track faction scoring windows.', zh:'跟踪阵营得分窗口。'}], category:'Season 6', sortOrder:2, isActive:true},
 {id:'g3', title:{en:'Altars', zh:'祭坛'}, content:{en:'Flip only with timing and reinforcements ready.', zh:'只有时机和增援准备好才转换。'}, checklist:[{en:'Scout first.', zh:'先侦察。'},{en:'Reinforce rally lead.', zh:'增援集结手。'}], category:'Objectives', sortOrder:3, isActive:true},
 {id:'g4', title:{en:'Outposts', zh:'前哨'}, content:{en:'Use outposts as rally anchors.', zh:'将前哨作为集结锚点。'}, checklist:[{en:'Hold forward line.', zh:'守住前线。'}], category:'Objectives', sortOrder:4, isActive:true},
 {id:'g5', title:{en:'Sanctuaries', zh:'圣所'}, content:{en:'No solo hits on sanctuary tiles.', zh:'不要单独攻击圣所地块。'}, checklist:[{en:'Wait for command call.', zh:'等待指挥。'}], category:'Objectives', sortOrder:5, isActive:true},
 {id:'g6', title:{en:'Faction duel', zh:'阵营对决'}, content:{en:'Stack claims into scoring windows.', zh:'把领取集中到得分窗口。'}, checklist:[{en:'Do not pre-claim.', zh:'不要提前领取。'}], category:'Events', sortOrder:6, isActive:true},
 {id:'g7', title:{en:'War merit', zh:'战功'}, content:{en:'Earn merit without feeding enemy rallies.', zh:'获取战功但不要送分给敌方集结。'}, checklist:[{en:'Hit only approved targets.', zh:'只打批准目标。'}], category:'Combat', sortOrder:7, isActive:true},
 {id:'g8', title:{en:'Shield discipline', zh:'护盾纪律'}, content:{en:'Shield before sleep and outside active windows.', zh:'睡前与非活跃窗口必须开盾。'}, checklist:[{en:'Refresh under 30 minutes.', zh:'低于 30 分钟续盾。'}], category:'Defense', sortOrder:8, isActive:true},
 {id:'g9', title:{en:'Speedup discipline', zh:'加速纪律'}, content:{en:'Spend only when buffs are active.', zh:'只在增益生效时消耗。'}, checklist:[{en:'Keep emergency healing speedups.', zh:'保留紧急治疗加速。'}], category:'Growth', sortOrder:9, isActive:true}
];
export const rules: RuleReminder[] = [
 {id:'r1', title:{en:'NAP / diplomacy', zh:'NAP / 外交'}, content:{en:'Do not attack NAP alliances or tagged diplomatic targets.', zh:'不要攻击 NAP 联盟或外交标记目标。'}, priority:'High', sortOrder:1, isActive:true},
 {id:'r2', title:{en:'Do-not-attack rules', zh:'禁止攻击规则'}, content:{en:'No solo hits on sanctuaries, rally leads, or marked traps.', zh:'不要单打圣所、集结手或标记陷阱。'}, priority:'High', sortOrder:2, isActive:true},
 {id:'r3', title:{en:'Event discipline', zh:'活动纪律'}, content:{en:'Score inside the assigned window. Report mistakes fast.', zh:'在指定窗口得分，失误立即上报。'}, priority:'Medium', sortOrder:3, isActive:true}
];
export const rallyFocus: RallyFocus[] = [
 {playerName:'Aegis-33', role:'Rally Lead', rallyUse:{en:'Lead decisive objective rallies only.', zh:'只带决定性目标集结。'}, supportPlayers:['MedicCore','NightScout']},
 {playerName:'DragonR4', role:'R4', rallyUse:{en:'Anchor defense and emergency counter-rallies.', zh:'防守核心与紧急反集结。'}, supportPlayers:['MedicCore','GrainWolf']}
];
