import type { en } from './en';
export type Language = 'en' | 'zh';
export type TranslationKey = keyof typeof en;
export type TextKey = Exclude<TranslationKey, 'reminders'>;
export type Dictionary = Record<TextKey, string> & { reminders: readonly string[] };
