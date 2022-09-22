import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationKR from './ko.json';
import translationEN from './en.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    // fallbackLng: "en", // detected lng이 불가능 할때 en을 사용하겠다.

    keySeparator: false, // 'messages.welcome' 와 같은 키 형식의 form을 사용할지 여부

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;