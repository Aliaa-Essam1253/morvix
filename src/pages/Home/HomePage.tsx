import { SEO } from '../../components/common/SEO';
import { useTranslation } from '../../i18n/LocalizationContext';
import { HeroSection } from '../../sections/home/HeroSection/HeroSection';
import { IntroSection } from '../../sections/home/IntroSection';
import { CapabilitiesSection } from '../../sections/home/CapabilitiesSection';
import { ProcessSection } from '../../sections/home/ProcessSection';
import { SolutionsPreviewSection } from '../../sections/home/SolutionsPreviewSection';
import { ProjectsPreviewSection } from '../../sections/home/ProjectsPreviewSection';
import { FeedbackPreviewSection } from '../../sections/home/FeedbackPreviewSection';
import { AudienceSection } from '../../sections/home/AudienceSection';
import { WhyMorvixSection } from '../../sections/home/WhyMorvixSection';
import { FinalCtaSection } from '../../sections/home/FinalCtaSection/FinalCtaSection';

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title="Engineering & Technology" description={t('home.description')} />
      <HeroSection />
      <IntroSection />
      <CapabilitiesSection />
      <SolutionsPreviewSection />
      <ProcessSection />
      <AudienceSection />
      <ProjectsPreviewSection />
      <WhyMorvixSection />
      <FeedbackPreviewSection />
      <FinalCtaSection />
    </>
  );
}
