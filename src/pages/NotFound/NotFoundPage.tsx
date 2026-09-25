import { Radar } from 'lucide-react';
import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container';
import { SEO } from '../../components/common/SEO';
import { useTranslation } from '../../i18n/LocalizationContext';

export default function NotFoundPage() {
  const { language, t } = useTranslation();
  return (
    <section className="section" style={{ paddingTop: 'calc(var(--header-height) + 7rem)', minHeight: '75vh' }}>
      <SEO title="404" description={t('notFound.body')} />
      <Container>
        <div className="empty-state">
          <div className="empty-state__content">
            <Radar className="empty-state__icon" size={44} aria-hidden="true" />
            <span className="eyebrow">{t('notFound.eyebrow')}</span>
            <h1>{t('notFound.title')}</h1>
            <p>{t('notFound.body')}</p>
            <Button to={`/${language}`}>{t('common.backHome')}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
