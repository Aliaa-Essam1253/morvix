import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { solutions } from '../../data/solutions';
import { useTranslation } from '../../i18n/LocalizationContext';

export function SolutionsPreviewSection() {
  const { language, t } = useTranslation();
  return (
    <section className="section">
      <Container>
        <SectionHeading eyebrow={t('solutions.eyebrow')} title={t('solutions.title')} body={t('solutions.intro')} />
        <div className="solution-grid">
          {solutions.slice(0, 3).map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className="solution-card">
                <div className="solution-card__icon"><Icon size={22} aria-hidden="true" /></div>
                <h3>{t(item.titleKey)}</h3>
                <p>{t(item.bodyKey)}</p>
              </article>
            );
          })}
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <Button to={`/${language}/services#solutions`} variant="secondary" arrow>{t('nav.solutions')}</Button>
        </div>
      </Container>
    </section>
  );
}
