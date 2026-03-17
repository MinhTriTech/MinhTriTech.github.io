import { navLinks } from '../data/content';

export default function Header() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#trang-chu" className="brand">
          MinhTriTech
        </a>
        <nav className="nav__links" aria-label="Điều hướng chính">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
