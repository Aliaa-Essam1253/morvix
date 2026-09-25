import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { RouteLoader } from '../components/common/RouteLoader';
import { useTranslation } from '../i18n/LocalizationContext';
import { isLanguage } from '../i18n/types';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const AboutPage = lazy(() => import('../pages/About/AboutPage'));
const ServicesPage = lazy(() => import('../pages/Services/ServicesPage'));
const ProjectsPage = lazy(() => import('../pages/Projects/ProjectsPage'));
const FeedbackPage = lazy(() => import('../pages/Feedback/FeedbackPage'));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));

function RootRedirect() {
  const { language } = useTranslation();
  return <Navigate to={`/${language}`} replace />;
}

function LanguageRoute() {
  const { lang } = useParams();
  const { language, setLanguage } = useTranslation();

  useEffect(() => {
    if (isLanguage(lang) && lang !== language) setLanguage(lang);
  }, [lang, language, setLanguage]);

  if (!isLanguage(lang)) return <Navigate to="/en" replace />;
  return <Outlet />;
}

export function AppRoutes() {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang" element={<LanguageRoute />}>
          <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="solutions" element={<Navigate to="services" replace />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </Suspense>
  );
}
