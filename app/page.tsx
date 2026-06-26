'use client';
import type { ReactNode } from 'react';
import { events } from '@/src/data/events';
import { objectives } from '@/src/data/objectives';
import { useI18n } from '@/src/i18n/LanguageProvider';
import { CountdownTimer } from '@/src/components/CountdownTimer';
import { MapPanel } from '@/src/components/MapPanel';
import { ObjectiveCard } from '@/src/components/ObjectiveCard';
import { TimelineCard } from '@/src/components/TimelineCard';
import { QuickReminders } from '@/src/components/QuickReminders';
export default function Home(){ const { t, language } = useI18n(); const nextEvent=events[0]; const nextObjective=objectives[0]; return <div className="grid gap-6 xl:grid-cols-[1fr_360px]"><section className="space-y-6"><div className="grid gap-4 md:grid-cols-3"><Info label={t.topEvent} value={nextEvent.title[language]}><CountdownTimer targetDate={nextEvent.startsAt}/></Info><Info label={t.currentPhase} value="Shadow Rainforest"/><Info label={t.alliance} value={t.evo}/></div><MapPanel/></section><aside className="space-y-6"><section><h2 className="mb-3 text-xl font-black text-white">{t.currentObjective}</h2><ObjectiveCard objective={nextObjective}/></section><TimelineCard/><QuickReminders/></aside></div> }
function Info({label,value,children}:{label:string;value:string;children?:ReactNode}){return <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl"><p className="text-xs font-black uppercase tracking-[0.25em] text-teal-300">{label}</p><p className="mt-2 text-xl font-black text-white">{value}</p>{children&&<div className="mt-4">{children}</div>}</div>}
