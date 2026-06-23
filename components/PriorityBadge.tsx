'use client';
import { type Priority } from '@/data/types';
import { useTranslation } from './I18nProvider';
export function PriorityBadge({priority}:{priority:Priority; lang?: unknown}){ const {t}=useTranslation(); const label={High:t.priorityHigh,Medium:t.priorityMedium,Low:t.priorityLow}[priority]; const cls= priority==='High'?'border-red-400/40 bg-red-500/15 text-red-200':priority==='Medium'?'border-tactical/40 bg-tactical/15 text-yellow-100':'border-neon/30 bg-neon/10 text-green-100'; return <span className={`rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${cls}`}>{label}</span> }
