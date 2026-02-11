import { createContext, useContext, useState } from "react";
import React from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguege] = useState("ko");

  const toggleLanguage = () => {
    setLanguege((prev) => (prev === "ko" ? "en" : "ko"));
  };

  const translations = {
    ko: {
      greeting: "안녕하세요",
      welcome: "환영합니다",
      button: "언어 변경",
    },
    en: {
      greeting: "Hello",
      welcome: "Welcome",
      button: "change ko",
    },
  };
  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
/* eslint-disable react-refresh/only-export-components */
export const useLanguage = () => {
  return useContext(LanguageContext);
};
