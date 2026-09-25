import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../../data/contentTypes';
import { useTranslation } from '../../../i18n/LocalizationContext';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  const { language, t } = useTranslation();
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={project.image} alt={project.imageAlt[language]} loading="lazy" />
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>{project.client[language]} · {project.industry[language]}</div>
        <h2>{project.title[language]}</h2>
        <dl className={styles.details}>
          <div><dt>{t('projects.challenge')}</dt><dd>{project.challenge[language]}</dd></div>
          <div><dt>{t('projects.solution')}</dt><dd>{project.solution[language]}</dd></div>
        </dl>
        <div className={styles.tech}>{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        {project.href ? <a href={project.href} target="_blank" rel="noreferrer">{t('common.learnMore')} <ArrowUpRight size={15} /></a> : null}
      </div>
    </article>
  );
}
