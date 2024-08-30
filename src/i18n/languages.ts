// The key and code must be a valid Intl.Locale language tag
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
export const languages = {
  'en-US': { code: 'en-US', label: 'English' },
  'nl-NL': { code: 'nl-NL', label: 'Nederlands' },
};

export type LanguageCode = keyof typeof languages;

export const supportedLngs = Object.keys(languages) as LanguageCode[];
