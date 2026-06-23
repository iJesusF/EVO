import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-slate-100">
      <SectionHeader title="Command route not found" subtitle="The requested war-room panel does not exist. Return to the alliance dashboard." />
      <Link className="rounded-xl border border-neon/40 px-4 py-2 font-bold text-neon" href="/">Return home</Link>
    </main>
  );
}
