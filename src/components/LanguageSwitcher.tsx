'use client';
import { useI18n } from '@/src/i18n/LanguageProvider';
export function LanguageSwitcher(){ const { language, setLanguage } = useI18n(); return <div className="flex rounded-full border border-teal-400/20 bg-slate-950/50 p-1 text-xs font-bold"><button className={`rounded-full px-3 py-1 ${language==='en'?'bg-teal-300 text-slate-950':'text-slate-300'}`} onClick={()=>setLanguage('en')}>EN</button><button className={`rounded-full px-3 py-1 ${language==='zh'?'bg-teal-300 text-slate-950':'text-slate-300'}`} onClick={()=>setLanguage('zh')}>中文</button></div>; }
