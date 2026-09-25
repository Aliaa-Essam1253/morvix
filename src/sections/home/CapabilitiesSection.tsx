import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { CapabilityCard } from '../../components/ui/CapabilityCard/CapabilityCard';
import { capabilities } from '../../data/capabilities';
import { useTranslation } from '../../i18n/LocalizationContext';

export function CapabilitiesSection() {
  const { language, t } = useTranslation();
  return (
    <section className="section section--panel">
      <Container>
        <SectionHeading eyebrow={t('home.capabilitiesEyebrow')} title={t('home.capabilitiesTitle')} body={t('home.capabilitiesBody')} />
        <div className="section-grid grid-3">
          {capabilities.map((item) => <CapabilityCard key={item.id} capability={item} />)}
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <Button to={`/${language}/services`} variant="secondary" arrow>{t('common.viewServices')}</Button>
        </div>
      </Container>
    </section>
  );
}
