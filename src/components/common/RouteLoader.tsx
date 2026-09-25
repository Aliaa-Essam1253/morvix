import styles from './RouteLoader.module.css';

export function RouteLoader() {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <span className={styles.ring} aria-hidden="true" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
