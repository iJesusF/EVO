import Link from 'next/link';
import { en } from '@/locales/en';
const nav = [['/', 'navHome'], ['/orders', 'navOrders'], ['/roster', 'navRoster'], ['/profile', 'navProfile'], ['/admin', 'navAdmin']] as const;
export function MobileBottomNav() {
  return <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-command-950/95 p-2 backdrop-blur md:hidden"><nav className="grid grid-cols-5 gap-1 text-center text-[11px] font-bold">{nav.map(([href,key])=><Link key={key} href={href} className="rounded-lg py-2 text-slate-300 hover:bg-white/10">{en[key]}</Link>)}</nav></div>;
}
