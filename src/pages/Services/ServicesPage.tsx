import { Container } from '../../components/common/Container';
import { PageHero } from '../../components/common/PageHero';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SEO } from '../../components/common/SEO';
import { CapabilityCard } from '../../components/ui/CapabilityCard/CapabilityCard';
import { capabilities } from '../../data/capabilities';
import { audiences } from '../../data/audiences';
import { solutions } from '../../data/solutions';
import { useTranslation } from '../../i18n/LocalizationContext';

export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('nav.services')} description={t('services.intro')} />
      <PageHero eyebrow={t('services.eyebrow')} title={t('services.title')} body={t('services.intro')} />
      <section className="section">
        <Container>
          <div className="section-grid grid-3">
            {capabilities.map((capability) => <CapabilityCard key={capability.id} capability={capability} showCta />)}
          </div>
        </Container>
      </section>
      <section className="section section--panel">
        <Container>
          <SectionHeading eyebrow={t('services.architectureEyebrow')} title={t('services.architectureTitle')} body={t('services.architectureBody')} />
          <div className="case-structure">
            <div><strong>01 — {t('services.streamsProjects')}</strong><p>{t('services.streamsProjectsBody')}</p></div>
            <div><strong>02 — {t('services.streamsProducts')}</strong><p>{t('services.streamsProductsBody')}</p></div>
            <div><strong>03 — {t('services.streamsConsulting')}</strong><p>{t('services.streamsConsultingBody')}</p></div>
            <div><strong>04 — {t('services.streamsPartners')}</strong><p>{t('services.streamsPartnersBody')}</p></div>
          </div>
        </Container>
      </section>
      <section className="section" id="solutions">
        <Container>
          <SectionHeading eyebrow={t('solutions.eyebrow')} title={t('solutions.title')} body={t('solutions.intro')} />
          <div className="solution-grid">
            {solutions.map((item) => {
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
        </Container>
      </section>
      <section className="section section--panel">
        <Container>
          <SectionHeading eyebrow={t('solutions.customersEyebrow')} title={t('solutions.customersTitle')} body={t('solutions.customersBody')} />
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
      <section className="section">
        <Container>
          <article className="statement-card panel">
            <span className="eyebrow">{t('solutions.responseEyebrow')}</span>
            <h3>{t('solutions.responseTitle')}</h3>
          </article>
        </Container>
      </section>
    </>
  );
}
