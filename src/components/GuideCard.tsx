'use client';
import { Guide } from '@/src/data/guides';
import { useI18n } from '@/src/i18n/LanguageProvider';
export function GuideCard({ guide }: { guide: Guide }) { const { language }=useI18n(); return <article id={guide.id} className="scroll-mt-24 rounded-2xl border border-white/10 bg-slate-900/70 p-5"><h3 className="text-xl font-black text-white">{guide.title[language]}</h3><p className="mt-2 text-sm text-slate-300">{guide.summary[language]}</p><ul className="mt-4 space-y-2 text-sm text-slate-200">{guide.bullets.map((b)=><li key={b.en}>✓ {b[language]}</li>)}</ul></article> }
