import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from 'src/i18n/i18n';

export type ThemePreference = 'light' | 'dark' | 'auto';
export type ResolvedTheme = 'light' | 'dark';
export type Language = 'en' | 'pig-latin';

interface SettingsContextType {
  themePreference: ThemePreference;
  setThemePreference: (pref: ThemePreference) => void;
  resolvedTheme: ResolvedTheme;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const SettingsContext = createContext<SettingsContextType>({
  themePreference: 'auto',
  setThemePreference: () => {},
  resolvedTheme: 'light',
  language: 'en',
  setLanguage: () => {},
});

export const useSettings = () => useContext(SettingsContext);

const THEME_STORAGE_KEY = 'themePreference';
const LANGUAGE_STORAGE_KEY = 'language';

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return (stored ?? 'auto') as ThemePreference;
  });

  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return (stored ?? 'en') as Language;
  });

  const [systemDark, setSystemDark] = useState<boolean>(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const resolvedTheme: ResolvedTheme =
    themePreference === 'auto' ? (systemDark ? 'dark' : 'light') : themePreference;

  const setThemePreference = (pref: ThemePreference) => {
    localStorage.setItem(THEME_STORAGE_KEY, pref);
    setThemePreferenceState(pref);
  };

  const setLanguage = (lang: Language) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    setLanguageState(lang);
    void i18n.changeLanguage(lang);
  };

  return (
    <SettingsContext.Provider
      value={{ themePreference, setThemePreference, resolvedTheme, language, setLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
