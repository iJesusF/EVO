'use client';
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { dictionaries, isLanguage, type Dictionary, type Language } from '@/lib/i18n';

type I18nContextValue = { lang: Language; t: Dictionary; setLanguage: (lang: Language) => void };
const I18nContext = createContext<I18nContextValue | null>(null);

function readCookieLanguage() {
  if (typeof document === 'undefined') return null;
  return document.cookie.split('; ').find((row) => row.startsWith('lang='))?.split('=')[1] ?? null;
}

function detectInitialLanguage(): Language {
  const cookieLang = readCookieLanguage();
  if (isLanguage(cookieLang)) return cookieLang;
  const storedLang = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null;
  if (isLanguage(storedLang)) return storedLang;
  const browserLang = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : '';
  return browserLang.startsWith('zh') ? 'zh' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  useEffect(() => setLang(detectInitialLanguage()), []);
  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('lang', lang);
    document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
  }, [lang]);
  const value = useMemo(() => ({ lang, t: dictionaries[lang], setLanguage: setLang }), [lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useTranslation must be used inside I18nProvider');
  return context;
}
