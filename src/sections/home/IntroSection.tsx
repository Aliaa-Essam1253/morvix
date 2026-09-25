import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { StatStrip } from '../../components/ui/StatStrip/StatStrip';
import { useTranslation } from '../../i18n/LocalizationContext';

export function IntroSection() {
  const { t } = useTranslation();
  return (
    <section id="home-intro" className="section">
      <Container>
        <div className="content-split">
          <SectionHeading eyebrow={t('home.introEyebrow')} title={t('home.introTitle')} />
          <div>
            <p className="prose-large">{t('home.introBody')}</p>
            <StatStrip />
          </div>
        </div>
      </Container>
    </section>
  );
}
