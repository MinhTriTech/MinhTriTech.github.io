import { skillsContent } from '../data/content';

export default function Skills() {
  return (
    <section className="panel" id="ky-nang" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        {skillsContent.title}
      </h2>
      <p className="section-sub">{skillsContent.subtitle}</p>

      <div className="skills-grid">
        <div className="skill-block">
          <h3>Kỹ năng chính</h3>
          <ul>
            {skillsContent.coreSkills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="skill-block">
          <h3>Quy trình làm việc</h3>
          <ol>
            {skillsContent.workflow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
