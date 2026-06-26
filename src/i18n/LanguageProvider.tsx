'use client';
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en } from './en';
import { zh } from './zh';
export type Language = 'en' | 'zh';
type Dictionary = typeof en;
type I18nContext = { language: Language; setLanguage: (language: Language) => void; t: Dictionary };
const dictionaries: Record<Language, Dictionary> = { en, zh: zh as Dictionary };
const Context = createContext<I18nContext | null>(null);
function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem('language');
  if (stored === 'en' || stored === 'zh') return stored;
  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  useEffect(() => setLanguageState(getInitialLanguage()), []);
  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem('language', next);
  };
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: dictionaries[language] }), [language]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useI18n() {
  const value = useContext(Context);
  if (!value) throw new Error('useI18n must be used inside LanguageProvider');
  return value;
}
