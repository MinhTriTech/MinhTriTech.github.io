import { contactContent } from '../../../entities/landing/model/content';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section} id="lien-he" aria-labelledby="contact-title">
      <h2 id="contact-title" className={styles.title}>
        {contactContent.title}
      </h2>
      <p className={styles.sub}>{contactContent.subtitle}</p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <p>
            <strong>Email:</strong> <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
          </p>
          <p>
            <strong>Điện thoại:</strong> <a href="tel:+84000000000">{contactContent.phone}</a>
          </p>
          <p>
            <strong>Khu vực:</strong> {contactContent.location}
          </p>
          <a className={styles.cta} href={`mailto:${contactContent.email}`}>
            Nhận Starter Kit
          </a>
        </div>

        <div className={styles.card}>
          <p>
            <strong>Hợp tác phù hợp:</strong>
          </p>
          <ul className={styles.list}>
            {contactContent.collaborationTypes.map((type) => (
              <li key={type} className={styles.item}>
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
