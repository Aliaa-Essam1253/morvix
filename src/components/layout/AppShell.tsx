import { Outlet } from 'react-router-dom';
import { useTranslation } from '../../i18n/LocalizationContext';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import { Starfield } from '../common/Starfield/Starfield';

export function AppShell() {
  const { language } = useTranslation();
  return (
    <>
      <Starfield />
      <a className="skip-link" href="#main-content">{language === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
