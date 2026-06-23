import Link from 'next/link';
import { MemberTable } from '@/components/MemberTable';
import { SectionHeader } from '@/components/SectionHeader';
import { roster } from '@/data/roster';
import { getDictionary, getLanguageFromSearchParams, type LocalizedSearchParams } from '@/lib/i18n';
export default async function Admin({searchParams}:{searchParams?:Promise<LocalizedSearchParams>}){const lang=getLanguageFromSearchParams(await searchParams); const t=getDictionary(lang); return <><SectionHeader title={t.adminTitle} subtitle={t.adminSubtitle}/><div className="mb-5 flex flex-wrap gap-3"><Link className="rounded-xl border border-tactical/40 px-4 py-2 font-bold text-tactical" href="/admin/import">{t.importTitle}</Link><span className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100">{t.adminOnly}</span></div><MemberTable lang={lang} members={roster}/></>}
