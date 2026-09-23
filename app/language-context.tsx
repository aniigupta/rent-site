"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  type Language,
  type TranslationKey,
  translations,
  featureTranslations,
  locationTranslations,
} from "@/data/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  translateFeature: (feature: string) => string;
  translateLocation: (location: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => translations.en[key] || "",
  translateFeature: (f) => f,
  translateLocation: (l) => l,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      // 1. Check if user previously chose a language manually
      const saved = localStorage.getItem("app_lang") as Language | null;
      if (saved === "en" || saved === "hi") {
        setLanguageState(saved);
        document.documentElement.lang = saved;
        return;
      }

      // 2. Check phone / browser language
      const navLangs = navigator.languages?.length
        ? navigator.languages
        : [navigator.language];

      const isHindi = navLangs.some(
        (l) => l && l.toLowerCase().startsWith("hi")
      );

      if (isHindi) {
        setLanguageState("hi");
        document.documentElement.lang = "hi";
      } else {
        setLanguageState("en");
        document.documentElement.lang = "en";
      }
    } catch {
      // Fallback
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("app_lang", lang);
      document.documentElement.lang = lang;
    } catch {}
  };

  const t = (key: TranslationKey, params?: Record<string, string | number>): string => {
    const dict = translations[language] || translations.en;
    let str = dict[key] || translations.en[key] || "";
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, String(v));
      });
    }
    return str;
  };

  const translateFeature = (feature: string): string => {
    if (language === "hi" && featureTranslations[feature]) {
      return featureTranslations[feature];
    }
    return feature;
  };

  const translateLocation = (loc: string): string => {
    if (language === "hi" && locationTranslations[loc]) {
      return locationTranslations[loc];
    }
    return loc;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        translateFeature,
        translateLocation,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label="Language selection"
      className={`inline-flex items-center rounded-full bg-slate-100 p-0.5 text-xs font-semibold ring-1 ring-slate-200/80 shadow-xs ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-2.5 py-1 transition-all cursor-pointer ${
          language === "en"
            ? "bg-slate-900 text-white shadow-xs font-bold"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        aria-pressed={language === "hi"}
        className={`rounded-full px-2.5 py-1 transition-all cursor-pointer ${
          language === "hi"
            ? "bg-emerald-600 text-white shadow-xs font-bold"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        हिंदी
      </button>
    </div>
  );
}
