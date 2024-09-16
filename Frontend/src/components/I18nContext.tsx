import React, { createContext, useContext, useState} from "react";

type Language = "en" | "hu";

interface I18nContextProps {
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
  currentLanguage: Language;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

const translations: { [key in Language]: any } = {
  en: require("../locales/en.json"),
  hu: require("../locales/hu.json")
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string) => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <I18nContext.Provider value={{ t, changeLanguage, currentLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
