import { footerContent } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>{footerContent.left}</p>
        <p>{footerContent.right}</p>
      </div>
    </footer>
  );
}
