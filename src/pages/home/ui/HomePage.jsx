'use client';

import { getContent } from '../../../entities/landing/model/content-bilingual';
import { useLanguage } from '../../../shared/context/LanguageContext';
import Activity from '../../../widgets/activity/ui/Activity';
import Contact from '../../../widgets/contact/ui/Contact';

export default function HomePage() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <>
      <section id="gioi-thieu">
        <h2>{content.about.title}</h2>
        <p>{content.about.subtitle}</p>
      </section>

      <section id="du-an">
        <h2>{content.projects.title}</h2>
        <p>{content.projects.subtitle}</p>
      </section>

      <Activity />

      <section id="ky-nang">
        <h2>{content.skills.title}</h2>
        <p>{content.skills.subtitle}</p>
      </section>

      <Contact />
    </>
  );
}
