'use client';

import { useEffect, useState, useRef } from 'react';
import { getContent } from '../../../entities/landing/model/content-bilingual';
import { useLanguage } from '../../../shared/context/LanguageContext';
import styles from './Header.module.css';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const content = getContent(language);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const navRefs = useRef({});
  const navContainerRef = useRef(null);

  const updateIndicator = (href) => {
    const linkElement = navRefs.current[href];
    if (linkElement && navContainerRef.current) {
      const { offsetWidth, offsetLeft } = linkElement;
      setIndicatorStyle({
        width: offsetWidth,
        left: offsetLeft
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = content.navLinks.map(link => link.href.replace('#', ''));
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        // Check if section is in viewport (top of section is visible)
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(`#${sectionId}`);
          updateIndicator(`#${sectionId}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content.navLinks]);

  useEffect(() => {
    // Update indicator on window resize
    const handleResize = () => {
      updateIndicator(activeSection);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsScrolling(true);
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(href);
      updateIndicator(href);
      
      // Add hash to URL
      window.history.pushState(null, '', href);
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.brand} onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          MinhTriTech
        </a>
        <nav className={styles.links} ref={navContainerRef} aria-label="Navigation">
          {content.navLinks.map((link) => (
            <a
              key={link.href}
              ref={(el) => {
                if (el) navRefs.current[link.href] = el;
              }}
              href={link.href}
              className={`${styles.link} ${activeSection === link.href ? styles.active : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <span
            className={styles.indicator}
            style={{
              width: `${indicatorStyle.width}px`,
              left: `${indicatorStyle.left}px`
            }}
          />
        </nav>
        <button className={`${styles.button}`} onClick={toggleLanguage} title="Toggle language">
          {language === 'vi' ? 'EN' : 'VN'}
        </button>
      </div>
    </header>
  );
}
