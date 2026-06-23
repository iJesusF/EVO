import Link from 'next/link';
import { getDictionary, localizedHref, type Language } from '@/lib/i18n';

export function LanguageSwitch({ lang, path = '/' }: { lang: Language; path?: string }) {
  const t = getDictionary(lang);
  const next = lang === 'en' ? 'zh' : 'en';
  return <Link className="rounded-xl border border-tactical/40 px-3 py-2 text-sm font-bold text-tactical" href={localizedHref(path, next)}>{t.languageToggle}</Link>;
}
