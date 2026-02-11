import React from "react";
import { useLanguage } from "../contexts/Language";

export default function Header() {
  const { language, toggleLanguage, translations } = useLanguage();
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <h1>{translations[language].greeting}</h1>
      <h2>{translations[language].welcome}</h2>
      <button onClick={toggleLanguage}>{translations[language].button}</button>
    </div>
  );
}
