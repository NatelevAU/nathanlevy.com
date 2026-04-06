import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import pigLatinTranslation from './locales/pig-latin/translation.json';

const storedLanguage = localStorage.getItem('language') ?? 'en';

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    'pig-latin': {
      translation: pigLatinTranslation,
    },
  },
  lng: storedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
