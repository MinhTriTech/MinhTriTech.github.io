import { projectsContent } from '../data/content';

export default function Projects() {
  return (
    <section className="panel" id="du-an" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">
        {projectsContent.title}
      </h2>
      <p className="section-sub">{projectsContent.subtitle}</p>
      <div className="project-grid">
        {projectsContent.items.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-meta">{project.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
