import { createContext, useContext, useEffect } from "react";
import { dictionaries, fallbackLanguage } from "../i18n/translations";

const LanguageContext = createContext();

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function LanguageProvider({ children }) {
  const language = fallbackLanguage;

  useEffect(
    function () {
      document.documentElement.lang = language;
    },
    [language]
  );

  function t(path, params = {}) {
    const dictionary = dictionaries[language] ?? dictionaries[fallbackLanguage];
    const message = getNestedValue(dictionary, path) ?? path;

    return Object.entries(params).reduce(
      (translatedText, [key, value]) =>
        translatedText.replaceAll(`{{${key}}}`, String(value)),
      message
    );
  }

  const value = { language, t };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
}

export { LanguageProvider, useLanguage };
