import { useTranslation } from '../../../i18n/LocalizationContext';
import styles from './StatStrip.module.css';

export function StatStrip() {
  const { t } = useTranslation();
  const stats = [
    [t('home.stat1Value'), t('home.stat1')],
    [t('home.stat2Value'), t('home.stat2')],
    [t('home.stat3Value'), t('home.stat3')],
  ];
  return (
    <div className={styles.strip}>
      {stats.map(([value, label]) => (
        <div key={label} className={styles.stat}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
