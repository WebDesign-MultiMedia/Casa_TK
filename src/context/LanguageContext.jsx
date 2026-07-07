import { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";

// Shares the active locale ("en" | "es") and its copy deck with every
// component so the bilingual toggle only has to live in one place (Navbar).
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  const value = {
    lang,
    toggleLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
