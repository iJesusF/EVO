import { en } from '@/locales/en';
import { zh } from '@/locales/zh';

export const languages = ['en', 'zh'] as const;
export type Language = (typeof languages)[number];
export type TranslationKey = keyof typeof en;
export type Dictionary = Record<TranslationKey, string>;
export type LocalizedSearchParams = { lang?: string } | undefined;

export const dictionaries = { en, zh } satisfies Record<Language, Dictionary>;

export function isLanguage(value: string | undefined): value is Language {
  return value === 'en' || value === 'zh';
}

export function getLanguageFromSearchParams(searchParams: LocalizedSearchParams): Language {
  return isLanguage(searchParams?.lang) ? searchParams.lang : 'en';
}

export function getDictionary(lang: Language): Dictionary {
  return dictionaries[lang];
}

export function localize<T extends { en: string; zh: string }>(value: T, lang: Language) {
  return value[lang];
}

export function localizedHref(path: string, lang: Language) {
  return lang === 'en' ? path : `${path}?lang=${lang}`;
}
