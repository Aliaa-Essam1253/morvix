import { Blocks, Bot, BrainCircuit, CloudCog, Cpu, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Solution {
  id: string;
  titleKey: string;
  bodyKey: string;
  icon: LucideIcon;
}

export const solutions: Solution[] = [
  { id: 'digital', titleKey: 'solution.digitalTitle', bodyKey: 'solution.digitalBody', icon: CloudCog },
  { id: 'intelligent', titleKey: 'solution.intelligentTitle', bodyKey: 'solution.intelligentBody', icon: BrainCircuit },
  { id: 'connected', titleKey: 'solution.connectedTitle', bodyKey: 'solution.connectedBody', icon: Cpu },
  { id: 'automation', titleKey: 'solution.automationTitle', bodyKey: 'solution.automationBody', icon: Bot },
  { id: 'product', titleKey: 'solution.productTitle', bodyKey: 'solution.productBody', icon: Blocks },
  { id: 'consulting', titleKey: 'solution.consultingTitle', bodyKey: 'solution.consultingBody', icon: Workflow },
];
