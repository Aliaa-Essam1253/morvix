import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { values } from '../../data/values';
import { useTranslation } from '../../i18n/LocalizationContext';

export function WhyMorvixSection() {
  const { t } = useTranslation();
  return (
    <section className="section">
      <Container>
        <div className="content-split">
          <div className="content-split__sticky">
            <SectionHeading eyebrow={t('home.whyEyebrow')} title={t('home.whyTitle')} body={t('home.whyBody')} />
          </div>
          <div className="value-grid">
            {values.map(([number, titleKey, bodyKey]) => (
              <article key={number} className="value-card">
                <span className="kicker-number">{number}</span>
                <h3>{t(titleKey)}</h3>
                <p>{t(bodyKey)}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
