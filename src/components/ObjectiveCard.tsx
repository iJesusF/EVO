'use client';
import { Objective } from '@/src/data/objectives';
import { useI18n } from '@/src/i18n/LanguageProvider';
import { CountdownTimer } from './CountdownTimer';
export function ObjectiveCard({ objective }: { objective: Objective }) { const { t, language } = useI18n(); return <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-xl"><div className="flex items-start justify-between gap-3"><h3 className="text-lg font-black text-white">{objective.title[language]}</h3><span className="rounded-full border border-teal-400/30 px-2 py-1 text-xs font-black text-teal-200">{t[objective.priority]}</span></div><p className="mt-2 text-sm text-slate-300">{objective.description[language]}</p><div className="mt-4 grid gap-3"><p className="text-xs text-slate-400">{t.startTime}: {objective.startsAt}</p><CountdownTimer targetDate={objective.startsAt}/><p className="text-xs font-bold text-slate-400">{t.status}: {t[objective.status]}</p></div></article> }
