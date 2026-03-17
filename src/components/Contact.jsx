import { contactContent } from '../data/content';

export default function Contact() {
  return (
    <section className="panel" id="lien-he" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">
        {contactContent.title}
      </h2>
      <p className="section-sub">{contactContent.subtitle}</p>

      <div className="contact-grid">
        <div className="contact-card">
          <p>
            <strong>Email:</strong> <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
          </p>
          <p>
            <strong>Điện thoại:</strong> <a href="tel:+84000000000">{contactContent.phone}</a>
          </p>
          <p>
            <strong>Khu vực:</strong> {contactContent.location}
          </p>
        </div>

        <div className="contact-card">
          <p>
            <strong>Hợp tác phù hợp:</strong>
          </p>
          <ul>
            {contactContent.collaborationTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
