import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { ProcessTimeline } from '../../components/ui/ProcessTimeline/ProcessTimeline';
import { useTranslation } from '../../i18n/LocalizationContext';

export function ProcessSection() {
  const { t } = useTranslation();
  return (
    <section className="section">
      <Container>
        <SectionHeading eyebrow={t('home.processEyebrow')} title={t('home.processTitle')} body={t('home.processBody')} />
        <ProcessTimeline />
      </Container>
    </section>
  );
}
