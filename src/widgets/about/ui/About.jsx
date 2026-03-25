import { aboutContent } from '../../../entities/landing/model/content';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="gioi-thieu" aria-labelledby="about-title">
      <h2 id="about-title" className={styles.title}>
        {aboutContent.title}
      </h2>
      <p className={styles.sub}>{aboutContent.subtitle}</p>
      <div className={styles.grid}>
        {aboutContent.cards.map((card) => (
          <article className={styles.card} key={card.title}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
