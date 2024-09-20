import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/common.json';
// import fr from '../locales/fr/common.json';

// Initialisation d'i18next
i18n
  .use(initReactI18next) // Passe l'instance à react-i18next
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de repli
    interpolation: {
      escapeValue: false, // Pas nécessaire pour React
    },
  });

export default i18n;
