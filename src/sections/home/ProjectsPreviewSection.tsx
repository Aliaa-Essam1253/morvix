import { FolderKanban } from 'lucide-react';
import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container';
import { useTranslation } from '../../i18n/LocalizationContext';

export function ProjectsPreviewSection() {
  const { language, t } = useTranslation();
  return (
    <section className="section section--panel">
      <Container>
        <div className="empty-state" style={{ minHeight: '340px' }}>
          <div className="empty-state__content">
            <FolderKanban className="empty-state__icon" size={38} strokeWidth={1.4} aria-hidden="true" />
            <span className="eyebrow">{t('projects.eyebrow')}</span>
            <h2>{t('projects.emptyTitle')}</h2>
            <p>{t('projects.emptyBody')}</p>
            <Button to={`/${language}/projects`} variant="secondary">{t('nav.projects')}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
