import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import TRANSLATIONS_EN from "./en_CA/en_CA.json";
import TRANSLATIONS_FR from "./fr_CA/fr_CA.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: TRANSLATIONS_EN
            },
            fr: {
                translation: TRANSLATIONS_FR
            }
        }
});