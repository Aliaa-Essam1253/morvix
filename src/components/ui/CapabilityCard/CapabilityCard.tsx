import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Capability } from '../../../data/capabilities';
import { useTranslation } from '../../../i18n/LocalizationContext';
import styles from './CapabilityCard.module.css';

interface CapabilityCardProps {
  capability: Capability;
  showCta?: boolean;
}

export function CapabilityCard({ capability, showCta = false }: CapabilityCardProps) {
  const { language, t } = useTranslation();
  const Icon = capability.icon;
  return (
    <article className={styles.card} id={capability.id}>
      <div className={styles.topLine} aria-hidden="true" />
      <div className={styles.icon}><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></div>
      <h3>{t(capability.titleKey)}</h3>
      <p>{t(capability.bodyKey)}</p>
      <div className={styles.items}>{t(capability.itemsKey)}</div>
      {showCta ? (
        <Link to={`/${language}/contact?service=${capability.id}`} className={styles.link}>
          {t('services.detailCta')} <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      ) : null}
    </article>
  );
}
