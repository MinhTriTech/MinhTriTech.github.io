import { getContent } from '../../../entities/landing/model/content-bilingual';
import { useLanguage } from '../../../shared/context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>{content.footer.left}</p>
        <p>{content.footer.right}</p>
      </div>
    </footer>
  );
}
