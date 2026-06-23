import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { I18nProvider } from '@/components/I18nProvider';
import { TopBar } from '@/components/TopBar';
export const metadata: Metadata = { title: 'EVO ALLY GOD 911', description: 'Season 6 alliance command dashboard' };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><I18nProvider><div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(57,255,136,.12),transparent_35%),#030712]"><TopBar/><main className="mx-auto max-w-7xl px-4 py-6">{children}</main></div></I18nProvider></body></html>;
}
