import '../globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { isLanguage, type Language } from '@/lib/i18n';
import { Navbar } from '@/components/Navbar';
import { MobileBottomNav } from '@/components/MobileBottomNav';
export const metadata: Metadata = { title: '33G War Room', description: 'Season 6 alliance command center' };
export default function LangLayout({children, params}:{children:ReactNode; params:{lang:string}}){
 const lang: Language = isLanguage(params.lang) ? params.lang : 'en';
 return <html lang={lang}><body><div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(57,255,136,.12),transparent_35%),#030712]"><Navbar lang={lang}/><main className="mx-auto max-w-7xl px-4 pb-24 pt-6 md:pl-64 md:pr-8">{children}</main><MobileBottomNav lang={lang}/></div></body></html>;
}
