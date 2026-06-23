'use client';
import Link from 'next/link';
import { useTranslation } from '@/components/I18nProvider';
const cards = ['manageAnnouncements','manageEvents','manageGuides','manageRules','manageRoster'] as const;
export default function Admin(){const {t}=useTranslation(); return <section><h1 className="text-3xl font-black text-white">{t.adminTitle}</h1><p className="mt-2 text-sm text-slate-300">{t.adminSubtitle}</p><div className="mt-5 grid gap-4 md:grid-cols-3">{cards.map(k=><div key={k} className="rounded-2xl border border-white/10 bg-command-900/70 p-5"><h2 className="font-black text-white">{t[k]}</h2><p className="mt-2 text-sm text-slate-400">{t.adminOnly}</p></div>)}<Link href="/admin/import" className="rounded-2xl border border-tactical/40 bg-tactical/10 p-5 font-black text-tactical">{t.openImport}</Link></div></section>}
