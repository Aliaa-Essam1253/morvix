import { Bot, BrainCircuit, CircuitBoard, CloudCog, Cpu, DraftingCompass, RadioTower } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Capability {
  id: string;
  titleKey: string;
  bodyKey: string;
  itemsKey: string;
  icon: LucideIcon;
}

export const capabilities: Capability[] = [
  { id: 'software', titleKey: 'capability.softwareTitle', bodyKey: 'capability.softwareBody', itemsKey: 'capability.softwareItems', icon: CloudCog },
  { id: 'ai', titleKey: 'capability.aiTitle', bodyKey: 'capability.aiBody', itemsKey: 'capability.aiItems', icon: BrainCircuit },
  { id: 'embedded', titleKey: 'capability.embeddedTitle', bodyKey: 'capability.embeddedBody', itemsKey: 'capability.embeddedItems', icon: Cpu },
  { id: 'robotics', titleKey: 'capability.roboticsTitle', bodyKey: 'capability.roboticsBody', itemsKey: 'capability.roboticsItems', icon: Bot },
  { id: 'iot', titleKey: 'capability.iotTitle', bodyKey: 'capability.iotBody', itemsKey: 'capability.iotItems', icon: RadioTower },
  { id: 'electronics', titleKey: 'capability.electronicsTitle', bodyKey: 'capability.electronicsBody', itemsKey: 'capability.electronicsItems', icon: CircuitBoard },
  { id: 'mechanical', titleKey: 'capability.mechanicalTitle', bodyKey: 'capability.mechanicalBody', itemsKey: 'capability.mechanicalItems', icon: DraftingCompass },
];
