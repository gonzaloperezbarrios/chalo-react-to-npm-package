import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false
    },
    backend: {
      crossDomain: true,
      customHeaders: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          "Access-Control-Allow-Methods": "GET"
        }
      }
    }
  });

export default i18n;
