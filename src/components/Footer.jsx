import { footerContent } from '../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>{footerContent.left}</p>
        <p>{footerContent.right}</p>
      </div>
    </footer>
  );
}
