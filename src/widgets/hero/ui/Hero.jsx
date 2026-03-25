import { heroContent } from '../../../entities/landing/model/content';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <p className={styles.tag}>{heroContent.tag}</p>
        <h1 id="hero-title" className={styles.title}>
          {heroContent.title}
        </h1>
        <p className={styles.sub}>{heroContent.subtitle}</p>

        <div className={styles.highlights} aria-label="Điểm nổi bật chương trình">
          {heroContent.highlights.map((highlight) => (
            <p key={highlight} className={styles.pill}>
              {highlight}
            </p>
          ))}
        </div>

        <div className={styles.cta}>
          <a href={heroContent.primaryCta.href} className={`${styles.button} ${styles.primary}`}>
            {heroContent.primaryCta.label}
          </a>
          <a href={heroContent.secondaryCta.href} className={`${styles.button} ${styles.ghost}`}>
            {heroContent.secondaryCta.label}
          </a>
        </div>

        <div className={styles.stats} aria-label="Chỉ số chương trình">
          {heroContent.stats.map((item) => (
            <article className={styles.stat} key={item.label}>
              <p className={styles.statValue}>{item.value}</p>
              <p className={styles.statLabel}>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
