import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "../locales/en.json";
import Hungarian from "../locales/hu.json";

const resources = {
    en: {
        translation: English,
    },
    hu: {
        translation: Hungarian,
    },
}

i18next.use(initReactI18next)
.init({
  resources,
  lng:"en",
});

export default i18next;