import { Copy, Mail } from 'lucide-react';
import { useState } from 'react';
import { Container } from '../../components/common/Container';
import { PageHero } from '../../components/common/PageHero';
import { SEO } from '../../components/common/SEO';
import { ContactForm } from '../../components/ui/ContactForm/ContactForm';
import { siteConfig, gmailComposeUrl } from '../../data/site';
import { useTranslation } from '../../i18n/LocalizationContext';

export default function ContactPage() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <SEO title={t('nav.contact')} description={t('contact.intro')} />
      <PageHero eyebrow={t('contact.eyebrow')} title={t('contact.title')} body={t('contact.intro')} />
      <section className="section">
        <Container>
          <div className="content-split">
            <aside className="content-split__sticky">
              <span className="eyebrow">{t('contact.emailLabel')}</span>
              <article className="statement-card panel">
                <Mail size={23} color="var(--cyan)" aria-hidden="true" />
                <h3 style={{ marginTop: '1rem' }}>{t('contact.emailMorvix')}</h3>
                <a href={gmailComposeUrl(siteConfig.email)} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan)', wordBreak: 'break-word' }}>{siteConfig.email}</a>
                <button
                  type="button"
                  onClick={copyEmail}
                  style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '.45rem', border: '1px solid var(--line)', borderRadius: '9px', background: 'var(--surface-chip)', color: 'var(--text-soft)', padding: '.55rem .7rem', cursor: 'pointer' }}
                >
                  <Copy size={14} aria-hidden="true" /> {copied ? t('contact.copied') : t('contact.copyEmail')}
                </button>
              </article>
            </aside>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
