'use client';
import Link from 'next/link';
import { useTranslation } from '@/components/I18nProvider';
export default function NotFound(){const {t}=useTranslation(); return <main className="mx-auto max-w-3xl px-4 py-16 text-slate-100"><h1 className="text-3xl font-black">{t.notFoundTitle}</h1><p className="mt-2 text-slate-300">{t.notFoundBody}</p><Link className="mt-5 inline-block rounded-xl border border-neon/40 px-4 py-2 font-bold text-neon" href="/">{t.returnHome}</Link></main>}
