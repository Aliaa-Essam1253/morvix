import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../../common/Logo/Logo';
import { LanguageSwitcher } from '../../common/LanguageSwitcher';
import { ThemeToggle } from '../../common/ThemeToggle';
import { useTranslation } from '../../../i18n/LocalizationContext';
import styles from './Navbar.module.css';

const navItems = [
  ['home', ''],
  ['about', '/about'],
  ['services', '/services'],
  ['projects', '/projects'],
  ['feedback', '/feedback'],
  ['contact', '/contact'],
] as const;

export function Navbar() {
  const { language, t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Logo />

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navItems.map(([key, path]) => (
            <NavLink
              key={key}
              to={`/${language}${path}`}
              end={path === ''}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              {t(`nav.${key}`)}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <LanguageSwitcher />
          <NavLink to={`/${language}/contact`} className={styles.cta}>{t('nav.cta')}</NavLink>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? t('nav.close') : t('nav.menu')}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`${styles.mobilePanel} ${open ? styles.mobileOpen : ''}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navItems.map(([key, path]) => (
            <NavLink
              key={key}
              to={`/${language}${path}`}
              end={path === ''}
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`}
            >
              {t(`nav.${key}`)}
            </NavLink>
          ))}
        </nav>
        <div className={styles.mobileLanguage}>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
