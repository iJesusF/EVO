'use client';
import { useI18n } from '@/src/i18n/LanguageProvider';
export function QuickReminders(){ const { t } = useI18n(); return <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"><h2 className="text-xl font-black text-white">{t.quickReminders}</h2><ul className="mt-4 space-y-2 text-sm text-slate-300">{t.reminders.map((item)=><li className="flex gap-2" key={item}><span className="text-teal-300">✓</span>{item}</li>)}</ul></section> }
