import { aboutContent } from '../data/content';

export default function About() {
  return (
    <section className="panel" id="gioi-thieu" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">
        {aboutContent.title}
      </h2>
      <p className="section-sub">{aboutContent.subtitle}</p>
      <div className="about-grid">
        {aboutContent.cards.map((card) => (
          <article className="mini-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
