'use client';
import { events } from '@/src/data/events';
import { useI18n } from '@/src/i18n/LanguageProvider';
export function TimelineCard(){ const { t, language } = useI18n(); return <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"><h2 className="text-xl font-black text-white">{t.timeline}</h2><div className="mt-4 space-y-4">{events.slice(0,5).map((event,i)=><div className="relative border-l border-teal-400/30 pl-4" key={event.id}><span className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-teal-300"/><p className="font-bold text-white">{event.title[language]}</p><p className="text-xs text-slate-400">{event.startsAt}</p></div>)}</div></section> }
