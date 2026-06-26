import type { ReactNode } from 'react';
import { LanguageProvider } from '@/src/i18n/LanguageProvider';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
export function AppShell({ children }: { children: ReactNode }) { return <LanguageProvider><div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,.18),transparent_35%),#07131f] text-slate-100"><Sidebar/><main className="px-4 py-4 lg:ml-72 lg:p-8"><TopBar/><div className="mt-6">{children}</div></main></div></LanguageProvider>; }
