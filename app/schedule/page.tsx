'use client';
import { events } from '@/src/data/events';
import { CountdownTimer } from '@/src/components/CountdownTimer';
import { PageHeader } from '@/src/components/PageHeader';
import { useI18n } from '@/src/i18n/LanguageProvider';
export default function SchedulePage(){ const { t, language }=useI18n(); return <><PageHeader title={t.schedule} subtitle={t.pageSchedule}/><div className="space-y-4">{events.map((event)=><article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5" key={event.id}><div className="grid gap-4 lg:grid-cols-[1fr_320px]"><div><h2 className="text-xl font-black text-white">{event.title[language]}</h2><p className="mt-2 text-sm text-slate-400">{event.startsAt}</p><p className="mt-3 text-sm text-slate-300"><b>{t.preparation}:</b> {event.preparation[language]}</p><p className="mt-1 text-sm text-slate-300"><b>{t.notes}:</b> {event.notes[language]}</p></div><CountdownTimer targetDate={event.startsAt}/></div></article>)}</div></> }
