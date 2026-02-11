import React from "react";
import { LanguageProvider } from "./contexts/Language";
import Header from "./conponents/Header";

export default function App() {
  return (
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  );
}
