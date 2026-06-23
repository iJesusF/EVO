import { alliance } from '@/data/alliance';
import { events } from '@/data/events';
import { orders } from '@/data/orders';
import { getDictionary, getLanguageFromSearchParams, localize, type LocalizedSearchParams } from '@/lib/i18n';
import { isSupabaseConfigured } from '@/lib/supabase';
import { EventCard } from '@/components/EventCard';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import { OrderCard } from '@/components/OrderCard';
import { SectionHeader } from '@/components/SectionHeader';
import { StatCard } from '@/components/StatCard';

export default async function Home({ searchParams }: { searchParams?: Promise<LocalizedSearchParams> }) {
  const lang = getLanguageFromSearchParams(await searchParams);
  const t = getDictionary(lang);
  return <><div className="flex items-start justify-between gap-4"><SectionHeader eyebrow={t.homeEyebrow} title={t.homeTitle} subtitle={t.homeSubtitle}/><LanguageSwitch lang={lang}/></div><div className="grid gap-4 md:grid-cols-4"><StatCard label={t.totalPower} value={alliance.totalPower} detail={alliance.season}/><StatCard label={t.vip18} value={String(alliance.vip18Count)} detail="Critical rally assets"/><StatCard label={t.seasonStatus} value="ACTIVE" detail={localize(alliance.status,lang)}/><StatCard label={t.supabaseMode} value={isSupabaseConfigured ? 'SUPABASE' : 'MOCK'} detail={isSupabaseConfigured ? 'Auth + database ready' : t.mockFallback}/></div><section className="mt-6 rounded-2xl border border-neon/20 bg-neon/10 p-5"><p className="text-xs font-bold uppercase tracking-widest text-neon">{t.activeDirective}</p><p className="mt-2 text-xl font-black text-white">{localize(alliance.directive,lang)}</p></section><div className="mt-8 grid gap-6 lg:grid-cols-2"><section><h2 className="mb-4 text-2xl font-black">{t.nextEvents}</h2><div className="grid gap-3">{events.slice(0,3).map(e=><EventCard key={e.id} event={e} lang={lang}/>)}</div></section><section><h2 className="mb-4 text-2xl font-black">{t.quickOrders}</h2><div className="grid gap-3">{orders.slice(0,2).map(o=><OrderCard key={o.id} order={o} lang={lang}/>)}</div></section></div></>;
}
