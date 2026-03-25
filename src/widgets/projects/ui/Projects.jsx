import { projectsContent } from '../../../entities/landing/model/content';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.section} id="du-an" aria-labelledby="projects-title">
      <h2 id="projects-title" className={styles.title}>
        {projectsContent.title}
      </h2>
      <p className={styles.sub}>{projectsContent.subtitle}</p>
      <div className={styles.grid}>
        {projectsContent.items.map((project, index) => (
          <article className={styles.card} key={project.title}>
            <span className={styles.step}>0{index + 1}</span>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p>{project.description}</p>
            <p className={styles.meta}>{project.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
