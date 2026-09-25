import { FolderKanban } from 'lucide-react';
import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container';
import { PageHero } from '../../components/common/PageHero';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SEO } from '../../components/common/SEO';
import { useTranslation } from '../../i18n/LocalizationContext';
import { projects } from '../../data/projects';
import { ProjectCard } from '../../components/ui/ProjectCard/ProjectCard';

export default function ProjectsPage() {
  const { language, t } = useTranslation();
  return (
    <>
      <SEO title={t('nav.projects')} description={t('projects.intro')} />
      <PageHero eyebrow={t('projects.eyebrow')} title={t('projects.title')} body={t('projects.intro')} />
      <section className="section">
        <Container>
          {projects.length > 0 ? (
            <div className="section-grid">
              {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state__content">
                <FolderKanban className="empty-state__icon" size={42} strokeWidth={1.4} aria-hidden="true" />
                <h2>{t('projects.emptyTitle')}</h2>
                <p>{t('projects.emptyBody')}</p>
                <Button to={`/${language}/contact`} arrow>{t('common.startProject')}</Button>
              </div>
            </div>
          )}
        </Container>
      </section>
      <section className="section section--panel">
        <Container>
          <SectionHeading eyebrow={t('projects.structureEyebrow')} title={t('projects.structureTitle')} />
          <div className="case-structure">
            <div><strong>01</strong><p>{t('projects.challenge')}</p></div>
            <div><strong>02</strong><p>{t('projects.solution')}</p></div>
            <div><strong>03</strong><p>{t('projects.technologies')}</p></div>
            <div><strong>04</strong><p>{t('projects.results')}</p></div>
          </div>
        </Container>
      </section>
    </>
  );
}
