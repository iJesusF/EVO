import { en } from '@/locales/en';
import { zh } from '@/locales/zh';

export const languages = ['en', 'zh'] as const;
export type Language = (typeof languages)[number];
export type TranslationKey = keyof typeof en;

export const dictionaries = { en, zh } satisfies Record<Language, typeof en>;

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function getDictionary(lang: Language) {
  return dictionaries[lang];
}

export function localize<T extends { en: string; zh: string }>(value: T, lang: Language) {
  return value[lang];
}
