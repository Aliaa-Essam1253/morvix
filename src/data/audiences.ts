import { Building2, Factory, FlaskConical, Lightbulb, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Audience {
  id: string;
  titleKey: string;
  bodyKey: string;
  icon: LucideIcon;
}

export const audiences: Audience[] = [
  { id: 'startups', titleKey: 'audience.startupsTitle', bodyKey: 'audience.startupsBody', icon: Rocket },
  { id: 'business', titleKey: 'audience.businessTitle', bodyKey: 'audience.businessBody', icon: Building2 },
  { id: 'industry', titleKey: 'audience.industryTitle', bodyKey: 'audience.industryBody', icon: Factory },
  { id: 'research', titleKey: 'audience.researchTitle', bodyKey: 'audience.researchBody', icon: FlaskConical },
  { id: 'innovators', titleKey: 'audience.innovatorsTitle', bodyKey: 'audience.innovatorsBody', icon: Lightbulb },
];
