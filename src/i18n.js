import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../public/locales/en.json";
import ar from "../public/locales/ar.json";



      //  save change lang in Storage &  Html
      const savedLanguage = localStorage.getItem("language") || "en";
      const savedDirection = localStorage.getItem("direction") || "ltr";
      document.documentElement.setAttribute("lang", savedLanguage);
      document.documentElement.setAttribute("dir", savedDirection);




        const resources = {
          en: {
            translation: en,
          },
          ar: {
            translation: ar,
          },
        };

        i18n
          .use(LanguageDetector)
          .use(initReactI18next)
          .init({
            resources,
            detection: {
              order: ["localStorage", "htmlTag"],
              caches: ["localStorage"],
            },

            interpolation: {
              escapeValue: false,
            },

            react: {
              useSuspense: false,
            },
          });

export default i18n;