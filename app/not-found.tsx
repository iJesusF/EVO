'use client';
import Link from 'next/link';
import { useI18n } from '@/src/i18n/LanguageProvider';
export default function NotFound(){ const { t }=useI18n(); return <main className="rounded-3xl border border-white/10 bg-slate-900/70 p-8"><h1 className="text-3xl font-black text-white">404</h1><p className="mt-2 text-slate-300">{t.mapPlaceholder}</p><Link className="mt-5 inline-block rounded-xl bg-teal-300 px-4 py-2 font-black text-slate-950" href="/">{t.overview}</Link></main> }
