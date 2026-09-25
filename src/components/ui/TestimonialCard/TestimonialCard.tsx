import { Quote } from 'lucide-react';
import type { Testimonial } from '../../../data/contentTypes';
import { useTranslation } from '../../../i18n/LocalizationContext';
import styles from './TestimonialCard.module.css';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { language } = useTranslation();
  return (
    <figure className={styles.card}>
      <Quote size={28} className={styles.quoteIcon} aria-hidden="true" />
      <blockquote>“{testimonial.quote[language]}”</blockquote>
      <figcaption>
        {testimonial.photo ? <img src={testimonial.photo} alt="" loading="lazy" /> : <span className={styles.avatar}>{testimonial.name.charAt(0)}</span>}
        <div><strong>{testimonial.name}</strong><span>{testimonial.position[language]} · {testimonial.company}</span></div>
      </figcaption>
    </figure>
  );
}
