import type { ReactNode } from 'react';
import { getDictionary, type Language } from '@/lib/i18n';
// Wrap protected pages with <AccessGate lang={lang}> when authentication is added.
export function AccessGate({lang, children}:{lang:Language; children:ReactNode}){const t=getDictionary(lang); const enabled=false; if(!enabled) return <>{children}</>; return <div className="rounded-2xl border border-tactical/40 bg-tactical/10 p-6"><h2 className="font-black">{t.accessGateTitle}</h2><p>{t.accessGateBody}</p></div>}
