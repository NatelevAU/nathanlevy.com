import React, { createContext, useContext, useState } from 'react';

export type ThemePreference = 'light' | 'dark' | 'auto';

interface SettingsContextType {
  themePreference: ThemePreference;
  setThemePreference: (pref: ThemePreference) => void;
}

const SettingsContext = createContext<SettingsContextType>({
  themePreference: 'auto',
  setThemePreference: () => {},
});

export const useSettings = () => useContext(SettingsContext);

const STORAGE_KEY = 'themePreference';

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored ?? 'auto') as ThemePreference;
  });

  const setThemePreference = (pref: ThemePreference) => {
    localStorage.setItem(STORAGE_KEY, pref);
    setThemePreferenceState(pref);
  };

  return (
    <SettingsContext.Provider value={{ themePreference, setThemePreference }}>
      {children}
    </SettingsContext.Provider>
  );
};
