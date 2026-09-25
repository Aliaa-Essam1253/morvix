import { Link } from 'react-router-dom';
import mark from '../../../assets/logos/morvix-mark.webp';
import { useTranslation } from '../../../i18n/LocalizationContext';
import styles from './Logo.module.css';

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  const { language, t } = useTranslation();
  return (
    <Link to={`/${language}`} className={styles.logo} aria-label={t('common.brandLabel')}>
      <span className={styles.markWrap} aria-hidden="true">
        <img src={mark} alt="" width="44" height="44" className={styles.mark} />
      </span>
      {!compact ? <span className={styles.wordmark}>MOR<span>VI</span>X</span> : null}
    </Link>
  );
}
