'use client';
import { MapPanel } from '@/src/components/MapPanel';
import { PageHeader } from '@/src/components/PageHeader';
import { useI18n } from '@/src/i18n/LanguageProvider';
export default function MapPage(){ const { t }=useI18n(); return <><PageHeader title={t.map} subtitle={t.pageMap}/><MapPanel large/></> }
