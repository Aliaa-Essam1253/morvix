import { useMemo } from 'react';
import styles from './Starfield.module.css';

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function makeStars(count: number, seed: number, sizeRange: [number, number]): Star[] {
  const rand = seededRandom(seed);
  return Array.from({ length: count }, (_, id) => ({
    id,
    top: rand() * 100,
    left: rand() * 100,
    size: sizeRange[0] + rand() * (sizeRange[1] - sizeRange[0]),
    duration: 2.4 + rand() * 3.6,
    delay: rand() * 6,
  }));
}

function makeShootingStars(count: number, seed: number): ShootingStar[] {
  const rand = seededRandom(seed);
  return Array.from({ length: count }, (_, id) => ({
    id,
    top: rand() * 55,
    left: rand() * 60,
    duration: 5 + rand() * 3,
    delay: id * 4.5 + rand() * 4,
  }));
}

export function Starfield() {
  const farStars = useMemo(() => makeStars(70, 17, [1, 1.6]), []);
  const midStars = useMemo(() => makeStars(45, 42, [1.4, 2.2]), []);
  const twinkleStars = useMemo(() => makeStars(28, 91, [1.8, 3]), []);
  const shootingStars = useMemo(() => makeShootingStars(3, 5), []);

  return (
    <div className={styles.starfield} aria-hidden="true">
      <div className={`${styles.layer} ${styles.driftSlow}`}>
        {farStars.map((star) => (
          <span
            key={star.id}
            className={styles.dot}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>
      <div className={`${styles.layer} ${styles.driftMid}`}>
        {midStars.map((star) => (
          <span
            key={star.id}
            className={styles.dot}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>
      <div className={styles.layer}>
        {twinkleStars.map((star) => (
          <span
            key={star.id}
            className={`${styles.dot} ${styles.twinkle}`}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
      {shootingStars.map((star) => (
        <span
          key={star.id}
          className={styles.shootingStar}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
