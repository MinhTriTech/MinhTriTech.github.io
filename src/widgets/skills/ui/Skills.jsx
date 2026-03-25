import { skillsContent } from '../../../entities/landing/model/content';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className={styles.section} id="ky-nang" aria-labelledby="skills-title">
      <h2 id="skills-title" className={styles.title}>
        {skillsContent.title}
      </h2>
      <p className={styles.sub}>{skillsContent.subtitle}</p>

      <div className={styles.grid}>
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Năng lực cốt lõi</h3>
          <ul className={styles.list}>
            {skillsContent.coreSkills.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Routine đề xuất</h3>
          <ol className={styles.list}>
            {skillsContent.workflow.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
