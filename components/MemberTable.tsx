import type { Profile } from '@/data/types';
import { getDictionary, localize, type Language } from '@/lib/i18n';

export function MemberTable({ lang, members }: { lang: Language; members: Profile[] }) {
  const t = getDictionary(lang);
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[980px] bg-command-900/70 text-left text-sm">
        <thead className="bg-white/5 text-xs uppercase tracking-widest text-slate-400">
          <tr>{[t.player, t.power, t.firstSquadPower, t.vip, t.role, t.squadType, t.heroes, t.timezone, t.availability, t.notes].map((h) => <th key={h} className="px-4 py-3">{h}</th>)}</tr>
        </thead>
        <tbody>{members.map((m) => <tr key={m.id} className={m.vip_level >= 18 ? 'border-t border-neon/20 bg-neon/10' : 'border-t border-white/10'}>
          <td className="px-4 py-4 font-bold text-white">{m.player_name}{m.vip_level >= 18 && <span className="ml-2 rounded bg-tactical px-2 py-0.5 text-xs text-black">{t.vipAsset}</span>}</td>
          <td className="px-4 py-4">{m.total_power}</td><td className="px-4 py-4">{m.first_squad_power}</td><td className="px-4 py-4">{m.vip_level}</td><td className="px-4 py-4">{m.alliance_role}</td><td className="px-4 py-4">{m.main_squad_type}</td><td className="px-4 py-4">{m.best_heroes}</td><td className="px-4 py-4">{m.timezone}</td><td className="px-4 py-4">{localize(m.availability, lang)}</td><td className="px-4 py-4 text-slate-300">{localize(m.notes, lang)}</td>
        </tr>)}</tbody>
      </table>
    </div>
  );
}
