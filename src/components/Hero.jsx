import { heroContent } from '../data/content';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <p className="hero__tag">{heroContent.tag}</p>
        <h1 id="hero-title">{heroContent.title}</h1>
        <p className="hero__sub">{heroContent.subtitle}</p>
        <div className="hero__cta">
          <a href={heroContent.primaryCta.href} className="btn btn--primary">
            {heroContent.primaryCta.label}
          </a>
          <a href={heroContent.secondaryCta.href} className="btn btn--ghost">
            {heroContent.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
