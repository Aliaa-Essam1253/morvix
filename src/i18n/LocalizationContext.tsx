import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations } from './translations';
import type { Language } from './types';

interface LocalizationContextValue {
  language: Language;
  direction: 'ltr' | 'rtl';
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const pathLanguage = window.location.pathname.split('/').filter(Boolean)[0];
  if (pathLanguage === 'en' || pathLanguage === 'ar') return pathLanguage;
  const saved = window.localStorage.getItem('morvix-language');
  if (saved === 'en' || saved === 'ar') return saved;
  return window.navigator.language.toLowerCase().startsWith('ar') ? 'ar' : 'en';
}

export function LocalizationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const direction: 'ltr' | 'rtl' = language === 'ar' ? 'rtl' : 'ltr';

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem('morvix-language', next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  const t = useCallback((key: string): string => {
    const parts = key.split('.');
    let current: unknown = translations[language];
    for (const part of parts) {
      if (typeof current !== 'object' || current === null || !(part in current)) return key;
      current = (current as Record<string, unknown>)[part];
    }
    return typeof current === 'string' ? current : key;
  }, [language]);

  const value = useMemo(() => ({ language, direction, setLanguage, t }), [language, direction, setLanguage, t]);
  return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>;
}

export function useTranslation() {
  const context = useContext(LocalizationContext);
  if (!context) throw new Error('useTranslation must be used within LocalizationProvider');
  return context;
}
