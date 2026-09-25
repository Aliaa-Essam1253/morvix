import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { audiences } from '../../data/audiences';
import { useTranslation } from '../../i18n/LocalizationContext';

export function AudienceSection() {
  const { t } = useTranslation();
  return (
    <section className="section section--panel">
      <Container>
        <SectionHeading eyebrow={t('home.audienceEyebrow')} title={t('home.audienceTitle')} body={t('home.audienceBody')} />
        <div className="audience-grid">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className="audience-card">
                <div className="audience-card__icon"><Icon size={21} aria-hidden="true" /></div>
                <h3>{t(item.titleKey)}</h3>
                <p>{t(item.bodyKey)}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
