import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

import { supportedLngs, LanguageCode } from './languages';

// Gets the initial language from local storage or the browser language, and uses 'en' if neither is available
const getInitialLanguage = (): LanguageCode => {
  const savedLanguage = localStorage.getItem('language') as LanguageCode | null;
  if (savedLanguage && supportedLngs.includes(savedLanguage)) {
    return savedLanguage;
  }
  const browserLng = navigator.language.split('-')[0] as LanguageCode;
  return supportedLngs.includes(browserLng) ? browserLng : 'en';
};

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs,
    lng: getInitialLanguage(),
    ns: ['common', 'layout', 'seo', 'about', 'resume', 'projects', 'contact'],
    defaultNS: 'common',
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    },
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  })
  .catch((err) => {
    console.error('Failed to initialize i18n:', err);
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

i18n.on('failedLoading', (lng, ns, msg) => {
  console.error(`Failed to load translations: ${lng} ${ns} ${msg}`);
});

export default i18n;
