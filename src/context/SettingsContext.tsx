import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemePreference = 'light' | 'dark' | 'auto';
export type ResolvedTheme = 'light' | 'dark';

interface SettingsContextType {
  themePreference: ThemePreference;
  setThemePreference: (pref: ThemePreference) => void;
  resolvedTheme: ResolvedTheme;
}

const SettingsContext = createContext<SettingsContextType>({
  themePreference: 'auto',
  setThemePreference: () => {},
  resolvedTheme: 'light',
});

export const useSettings = () => useContext(SettingsContext);

const STORAGE_KEY = 'themePreference';

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored ?? 'auto') as ThemePreference;
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
    localStorage.setItem(STORAGE_KEY, pref);
    setThemePreferenceState(pref);
  };

  return (
    <SettingsContext.Provider value={{ themePreference, setThemePreference, resolvedTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};
