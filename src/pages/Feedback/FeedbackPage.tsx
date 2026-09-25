import { MessageSquareQuote } from 'lucide-react';
import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container';
import { PageHero } from '../../components/common/PageHero';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SEO } from '../../components/common/SEO';
import { partnershipStandards } from '../../data/values';
import { useTranslation } from '../../i18n/LocalizationContext';
import { testimonials } from '../../data/testimonials';
import { TestimonialCard } from '../../components/ui/TestimonialCard/TestimonialCard';

export default function FeedbackPage() {
  const { language, t } = useTranslation();
  return (
    <>
      <SEO title={t('nav.feedback')} description={t('feedback.intro')} />
      <PageHero eyebrow={t('feedback.eyebrow')} title={t('feedback.title')} body={t('feedback.intro')} />
      <section className="section">
        <Container>
          {testimonials.length > 0 ? (
            <div className="section-grid grid-3">
              {testimonials.map((testimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state__content">
                <MessageSquareQuote className="empty-state__icon" size={42} strokeWidth={1.4} aria-hidden="true" />
                <h2>{t('feedback.emptyTitle')}</h2>
                <p>{t('feedback.emptyBody')}</p>
                <Button to={`/${language}/contact`} variant="secondary">{t('common.contactUs')}</Button>
              </div>
            </div>
          )}
        </Container>
      </section>
      <section className="section section--panel">
        <Container>
          <SectionHeading eyebrow={t('feedback.standardsEyebrow')} title={t('feedback.standardsTitle')} />
          <div className="value-grid">
            {partnershipStandards.map(([number, titleKey, bodyKey]) => (
              <article key={number} className="value-card">
                <span className="kicker-number">{number}</span>
                <h3>{t(titleKey)}</h3>
                <p>{t(bodyKey)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
