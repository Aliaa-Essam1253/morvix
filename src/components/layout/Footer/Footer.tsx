import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../../common/Logo/Logo';
import { useTranslation } from '../../../i18n/LocalizationContext';
import { capabilities } from '../../../data/capabilities';
import { siteConfig, gmailComposeUrl } from '../../../data/site';
import styles from './Footer.module.css';

export function Footer() {
  const { language, t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grid}>
        <div className={styles.brandCol}>
          <Logo />
          <p>{t('footer.description')}</p>
          <a className={styles.email} href={gmailComposeUrl(siteConfig.email)} target="_blank" rel="noopener noreferrer">
            <Mail size={16} aria-hidden="true" /> {siteConfig.email}
          </a>
        </div>

        <div>
          <h2>{t('footer.quickLinks')}</h2>
          <div className={styles.links}>
            <Link to={`/${language}/about`}>{t('nav.about')}</Link>
            <Link to={`/${language}/services`}>{t('nav.services')}</Link>
            <Link to={`/${language}/projects`}>{t('nav.projects')}</Link>
            <Link to={`/${language}/contact`}>{t('nav.contact')}</Link>
          </div>
        </div>

        <div>
          <h2>{t('footer.capabilities')}</h2>
          <div className={styles.links}>
            {capabilities.slice(0, 5).map((item) => (
              <Link key={item.id} to={`/${language}/services#${item.id}`}>{t(item.titleKey)}</Link>
            ))}
          </div>
        </div>

        <div>
          <h2>{t('footer.contact')}</h2>
          <p className={styles.note}>{t('footer.note')}</p>
          <Link className={styles.contactCta} to={`/${language}/contact`}>{t('common.startProject')}</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {year} {t('footer.rights')}</span>
        <span>MORVIX / ENG–TECH / 01</span>
      </div>
    </footer>
  );
}
