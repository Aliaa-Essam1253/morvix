import { processSteps } from '../../../data/process';
import { useTranslation } from '../../../i18n/LocalizationContext';
import styles from './ProcessTimeline.module.css';

export function ProcessTimeline() {
  const { t } = useTranslation();
  return (
    <ol className={styles.timeline}>
      {processSteps.map(([id, titleKey, bodyKey], index) => (
        <li key={id} className={styles.step}>
          <div className={styles.node} aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
          <div className={styles.content}>
            <h3>{t(titleKey)}</h3>
            <p>{t(bodyKey)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
