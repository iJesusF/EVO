import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { MobileBottomNav } from '@/components/MobileBottomNav';

export const metadata: Metadata = {
  title: '33G War Room',
  description: 'Season 6 alliance command center with Supabase-ready auth and roster management'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(57,255,136,.12),transparent_35%),#030712]">
          <Navbar />
          <main className="mx-auto max-w-7xl px-4 pb-24 pt-6 md:pl-64 md:pr-8">{children}</main>
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}
