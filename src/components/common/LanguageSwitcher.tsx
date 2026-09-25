import { Languages } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from '../../i18n/LocalizationContext';
import type { Language } from '../../i18n/types';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSwitch = () => {
    const next: Language = language === 'en' ? 'ar' : 'en';
    const segments = location.pathname.split('/').filter(Boolean);
    if (segments[0] === 'en' || segments[0] === 'ar') segments[0] = next;
    else segments.unshift(next);
    setLanguage(next);
    navigate(`/${segments.join('/')}${location.search}${location.hash}`);
  };

  return (
    <button type="button" className={styles.switcher} onClick={handleSwitch} aria-label={`Switch language: ${t('nav.language')}`}>
      <Languages size={16} aria-hidden="true" />
      <span>{t('nav.language')}</span>
    </button>
  );
}
