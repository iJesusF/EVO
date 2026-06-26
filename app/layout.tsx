import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AppShell } from '@/src/components/AppShell';
export const metadata: Metadata = { title: 'EVO Season 6 Dashboard', description: 'Last War Season 6 Shadow Rainforest strategy dashboard for EVO' };
export default function RootLayout({ children }: { children: ReactNode }) { return <html lang="en"><body><AppShell>{children}</AppShell></body></html>; }
