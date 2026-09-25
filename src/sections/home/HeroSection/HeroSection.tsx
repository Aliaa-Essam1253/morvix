import { ArrowDown, Braces, Cpu, ScanLine } from 'lucide-react';
import { Button } from '../../../components/common/Button/Button';
import { Container } from '../../../components/common/Container';
import { useTranslation } from '../../../i18n/LocalizationContext';
import mark from '../../../assets/logos/morvix-full.webp';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const { language, t } = useTranslation();
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.ambient} aria-hidden="true" />
      <Container wide className={styles.grid}>
        <div className={styles.copy}>
          <span className="eyebrow">{t('home.eyebrow')}</span>
          <h1 id="hero-title">
            <span className="metal-text">{t('home.titleLead')}</span>{' '}
            <span className="accent-text">{t('home.titleAccent')}</span>
          </h1>
          <p>{t('home.description')}</p>
          <div className={styles.actions}>
            <Button to={`/${language}/contact`} arrow>{t('common.startProject')}</Button>
            <Button to={`/${language}/services`} variant="secondary">{t('common.exploreCapabilities')}</Button>
          </div>
          <a className={styles.scrollHint} href="#home-intro">
            <ArrowDown size={16} aria-hidden="true" /> {t('home.secondaryCta')}
          </a>
        </div>

        <div className={styles.visualWrap} aria-label={t('home.visualCaption')}>
          <div className={styles.orbitA} aria-hidden="true" />
          <div className={styles.orbitB} aria-hidden="true" />
          <div className={styles.reactor} aria-hidden="true" />
          <div className={styles.logoFrame}>
            <img src={mark} alt="MORVIX" width="700" height="384" fetchPriority="high" />
          </div>
          <div className={`${styles.hud} ${styles.hudOne}`} aria-hidden="true"><Cpu size={15} /> SYS / ENG</div>
          <div className={`${styles.hud} ${styles.hudTwo}`} aria-hidden="true"><Braces size={15} /> SW / AI</div>
          <div className={`${styles.hud} ${styles.hudThree}`} aria-hidden="true"><ScanLine size={15} /> HW / CTRL</div>
        </div>
      </Container>
    </section>
  );
}
