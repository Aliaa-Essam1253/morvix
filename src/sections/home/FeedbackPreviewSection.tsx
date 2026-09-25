import { MessageSquareQuote } from 'lucide-react';
import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container';
import { partnershipStandards } from '../../data/values';
import { useTranslation } from '../../i18n/LocalizationContext';

export function FeedbackPreviewSection() {
  const { language, t } = useTranslation();
  return (
    <section className="section">
      <Container>
        <div className="content-split">
          <div className="content-split__sticky">
            <span className="eyebrow">{t('feedback.eyebrow')}</span>
            <MessageSquareQuote size={34} color="var(--cyan)" strokeWidth={1.5} aria-hidden="true" />
            <h2 style={{ fontSize: 'clamp(2rem,4vw,4rem)', margin: '1rem 0' }}>{t('feedback.emptyTitle')}</h2>
            <p>{t('feedback.emptyBody')}</p>
            <Button to={`/${language}/feedback`} variant="secondary">{t('nav.feedback')}</Button>
          </div>
          <div className="value-grid">
            {partnershipStandards.map(([number, titleKey, bodyKey]) => (
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
