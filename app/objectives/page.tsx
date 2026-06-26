'use client';
import { objectives } from '@/src/data/objectives';
import { ObjectiveCard } from '@/src/components/ObjectiveCard';
import { PageHeader } from '@/src/components/PageHeader';
import { useI18n } from '@/src/i18n/LanguageProvider';
export default function ObjectivesPage(){ const { t }=useI18n(); return <><PageHeader title={t.objectives} subtitle={t.pageObjectives}/><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{objectives.map((objective)=><ObjectiveCard key={objective.id} objective={objective}/>)}</div></> }
