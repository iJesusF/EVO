'use client';
import { guides } from '@/src/data/guides';
import { GuideCard } from '@/src/components/GuideCard';
import { PageHeader } from '@/src/components/PageHeader';
import { useI18n } from '@/src/i18n/LanguageProvider';
export default function GuidesPage(){ const { t }=useI18n(); return <><PageHeader title={t.guides} subtitle={t.pageGuides}/><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{guides.map((guide)=><GuideCard key={guide.id} guide={guide}/>)}</div></> }
