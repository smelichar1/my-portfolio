import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import cz from './locales/cz.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      cz: {
        translation: cz,
      },
      en: {
        translation: en,
      },
    },
    lng: 'cz', // Výchozí jazyk
    fallbackLng: 'en', // Pokud není překlad pro daný jazyk, použije angličtinu
    interpolation: {
      escapeValue: false, // Pro React není potřeba escapování
    },
  });

export default i18n;
