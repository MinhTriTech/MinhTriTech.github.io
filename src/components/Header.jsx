import { navLinks } from '../data/content';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#trang-chu" className={styles.brand}>
          MinhTriTech
        </a>
        <nav className={styles.links} aria-label="Điều hướng chính">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
