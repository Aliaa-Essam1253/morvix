import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { ScrollToTop } from './components/common/ScrollToTop';
import { LocalizationProvider } from './i18n/LocalizationContext';
import { ThemeProvider } from './theme/ThemeContext';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <LocalizationProvider>
            <ScrollToTop />
            <AppRoutes />
          </LocalizationProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
