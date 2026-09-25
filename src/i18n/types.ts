export type Language = 'en' | 'ar';

export const supportedLanguages: Language[] = ['en', 'ar'];

export const isLanguage = (value: string | undefined): value is Language =>
  value === 'en' || value === 'ar';
