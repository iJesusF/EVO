'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from './I18nProvider';
const nav = [['/', 'navHome'], ['/login', 'navLogin'], ['/profile', 'navProfile'], ['/admin', 'navAdmin']] as const;
export function TopBar() {
  const { lang, t, setLanguage } = useTranslation();
  const pathname = usePathname();
  return <header className="sticky top-0 z-40 border-b border-white/10 bg-command-950/90 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3"><Link href="/" className="min-w-0"><p className="truncate text-lg font-black text-neon md:text-2xl">{t.appName}</p><p className="hidden text-xs font-bold uppercase tracking-[0.25em] text-slate-400 sm:block">{t.topbarSubtitle}</p></Link><nav className="flex items-center gap-1 overflow-x-auto text-xs font-bold md:text-sm">{nav.map(([href,key])=><Link key={href} href={href} className={`rounded-xl px-3 py-2 ${pathname===href?'bg-neon text-black':'text-slate-300 hover:bg-white/10 hover:text-white'}`}>{t[key]}</Link>)}<button className="rounded-xl border border-tactical/40 px-3 py-2 text-tactical" onClick={() => setLanguage(lang === 'en' ? 'zh' : 'en')}>{lang === 'en' ? t.languageChinese : t.languageEnglish}</button></nav></div></header>;
}
