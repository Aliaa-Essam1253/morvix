import { Container } from '../../components/common/Container';
import { PageHero } from '../../components/common/PageHero';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SEO } from '../../components/common/SEO';
import { CapabilityCard } from '../../components/ui/CapabilityCard/CapabilityCard';
import { capabilities } from '../../data/capabilities';
import { values } from '../../data/values';
import { useTranslation } from '../../i18n/LocalizationContext';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('nav.about')} description={t('about.intro')} />
      <PageHero eyebrow={t('about.eyebrow')} title={t('about.title')} body={t('about.intro')} />

      <section className="section">
        <Container>
          <div className="content-split">
            <div className="content-split__sticky">
              <span className="eyebrow">MORVIX / CORE</span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,4rem)', marginBottom: '1rem' }}>{t('about.identityTitle')}</h2>
            </div>
            <div>
              <p className="prose-large">{t('about.body')}</p>
              <article className="statement-card panel" style={{ marginTop: '1.25rem' }}>
                <span className="eyebrow">{t('about.philosophyEyebrow')}</span>
                <h3>{t('about.philosophyTitle')}</h3>
                <p>{t('about.philosophyBody')}</p>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--panel">
        <Container>
          <div className="grid-2 section-grid">
            <article className="statement-card panel">
              <span className="kicker-number">VISION / 01</span>
              <h3>{t('about.visionLabel')}</h3>
              <p>{t('about.vision')}</p>
            </article>
            <article className="statement-card panel">
              <span className="kicker-number">MISSION / 02</span>
              <h3>{t('about.missionLabel')}</h3>
              <p>{t('about.mission')}</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading eyebrow={t('about.departmentsEyebrow')} title={t('about.departmentsTitle')} body={t('about.departmentsBody')} />
          <div className="section-grid grid-3">
            {capabilities.map((capability) => <CapabilityCard key={capability.id} capability={capability} />)}
          </div>
        </Container>
      </section>

      <section className="section section--panel">
        <Container>
          <SectionHeading eyebrow={t('about.valuesEyebrow')} title={t('about.valuesTitle')} />
          <div className="value-grid">
            {values.map(([number, titleKey, bodyKey]) => (
              <article key={number} className="value-card">
                <span className="kicker-number">{number}</span>
                <h3>{t(titleKey)}</h3>
                <p>{t(bodyKey)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading eyebrow={t('about.differentEyebrow')} title={t('about.differentTitle')} body={t('about.differentBody')} />
        </Container>
      </section>
    </>
  );
}
