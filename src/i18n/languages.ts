export const languages = {
  en: { code: 'en', label: 'English' },
  nl: { code: 'nl', label: 'Nederlands' },
};

export type LanguageCode = keyof typeof languages;

export const supportedLngs = Object.keys(languages) as LanguageCode[];
