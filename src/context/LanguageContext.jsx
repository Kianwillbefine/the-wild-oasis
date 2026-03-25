import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { dictionaries, fallbackLanguage } from "../i18n/translations";

const LanguageContext = createContext();

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorageState(fallbackLanguage, "language");

  useEffect(
    function () {
      document.documentElement.lang = language === "zh-CN" ? "zh-CN" : "en";
    },
    [language]
  );

  function t(path, params = {}) {
    const currentDictionary = dictionaries[language] ?? dictionaries[fallbackLanguage];
    const fallbackDictionary = dictionaries[fallbackLanguage];

    const message =
      getNestedValue(currentDictionary, path) ?? getNestedValue(fallbackDictionary, path) ?? path;

    return Object.entries(params).reduce(
      (translatedText, [key, value]) =>
        translatedText.replaceAll(`{{${key}}}`, String(value)),
      message
    );
  }

  const value = { language, setLanguage, t };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
}

export { LanguageProvider, useLanguage };
