import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/common/Button/Button';
import { useTranslation } from '../../../i18n/LocalizationContext';
import styles from './FinalCtaSection.module.css';

export function FinalCtaSection() {
  const { language, t } = useTranslation();
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.lines} aria-hidden="true" />
          <span className="eyebrow">{t('home.finalEyebrow')}</span>
          <h2>{t('home.finalTitle')}</h2>
          <p>{t('home.finalBody')}</p>
          <Button to={`/${language}/contact`} arrow>{t('common.startProject')}</Button>
        </div>
      </Container>
    </section>
  );
}
