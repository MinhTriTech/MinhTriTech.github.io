'use client';

import React, { useState } from 'react';
import { useLanguage } from '../../shared/context/LanguageContext';
import styles from './PortfolioPage.module.css';

export default function PortfolioPage() {
  const { language, toggleLanguage } = useLanguage();
  const [activeNav, setActiveNav] = useState('hero');

  const content = {
    vi: {
      nav: [
        { id: 'hero', label: 'Giới thiệu' },
        { id: 'projects', label: 'Dự án' },
        { id: 'skills', label: 'Kỹ năng' },
        { id: 'contact', label: 'Liên hệ' }
      ],
      hero: {
        name: 'Tri Ngo Hoang Minh',
        title: 'Software Developer',
        intro: 'Sinh viên IT với đam mê xây dựng sản phẩm thực tế. Đang học React, Node.js và các công nghệ web hiện đại.',
        cta: 'Xem dự án của tôi'
      },
      projects: {
        title: 'Dự án tiêu biểu',
        items: [
          {
            name: 'MessApp - Backend',
            desc: 'Backend cho ứng dụng nhắn tin thời gian thực. API REST với Express, database PostgreSQL, WebSocket Socket.IO.',
            tech: ['Node.js', 'Express', 'PostgreSQL', 'Socket.IO'],
            github: 'https://github.com/MinhTriTech/MessApp-backend'
          },
          {
            name: 'MessApp - Frontend',
            desc: 'Giao diện người dùng ứng dụng chat realtime. React 19 + Vite với Socket.IO, upload file, cắt ảnh avatar.',
            tech: ['React', 'Vite', 'Socket.IO', 'CSS'],
            github: 'https://github.com/MinhTriTech/MessApp-frontend'
          }
        ]
      },
      skills: {
        title: 'Kỹ năng & Công nghệ',
        frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
        backend: ['Node.js', 'Express', 'REST API'],
        tools: ['Git', 'VSCode', 'Vite', 'npm']
      },
      contact: {
        title: 'Liên hệ',
        email: 'hoangminhtri.ngo@gmail.com',
        github: 'github.com/MinhTriTech',
        linkedin: 'linkedin.com/in/tri-ngo-hoang-minh'
      },
      footer: '© 2026 Software Developer | Built with React + Vite'
    },
    en: {
      nav: [
        { id: 'hero', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' }
      ],
      hero: {
        name: 'Student Name',
        title: 'Software Developer',
        intro: 'IT student passionate about building real-world products. Learning React, Node.js and modern web technologies.',
        cta: 'View my projects'
      },
      projects: {
        title: 'Featured Projects',
        items: [
          {
            name: 'MessApp - Backend',
            desc: 'Backend for real-time messaging application. REST API with Express, PostgreSQL database, WebSocket Socket.IO.',
            tech: ['Node.js', 'Express', 'PostgreSQL', 'Socket.IO'],
            github: 'https://github.com/MinhTriTech/MessApp-backend'
          },
          {
            name: 'MessApp - Frontend',
            desc: 'User interface for real-time chat app. React 19 + Vite with Socket.IO, file uploads, avatar cropping.',
            tech: ['React', 'Vite', 'Socket.IO', 'CSS'],
            github: 'https://github.com/MinhTriTech/MessApp-frontend'
          }
        ]
      },
      skills: {
        title: 'Skills & Technologies',
        frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
        backend: ['Node.js', 'Express', 'REST API'],
        tools: ['Git', 'VSCode', 'Vite', 'npm']
      },
      contact: {
        title: 'Contact',
        email: 'hoangminhtri.ngo@gmail.com',
        github: 'github.com/MinhTriTech',
        linkedin: 'linkedin.com/in/tri-ngo-hoang-minh'
      },
      footer: '© 2026 Software Developer | Built with React + Vite'
    }
  };

  const t = content[language] || content.vi;

  return (
    <div className={styles.portfolio}>
      {/* Header Navigation */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>MinhTriTech</div>
          <nav className={styles.nav}>
            {t.nav.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.navLink} ${activeNav === item.id ? styles.active : ''}`}
                onClick={() => setActiveNav(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button className={styles.langToggle} onClick={toggleLanguage}>
            {language.toUpperCase()}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>{t.hero.name}</h1>
            <p className={styles.heroSubtitle}>{t.hero.title}</p>
            <p className={styles.heroIntro}>{t.hero.intro}</p>
            <a href="https://github.com/MinhTriTech" target="_blank" rel="noopener noreferrer" className={styles.cta}>
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
          <div className={styles.projectsGrid}>
            {t.projects.items.map((project, idx) => (
              <div key={idx} className={styles.projectCard}>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className={styles.tech}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    {language === 'vi' ? 'Xem trên GitHub →' : 'View on GitHub →'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.skills.title}</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <ul>
                {t.skills.frontend.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Backend</h3>
              <ul>
                {t.skills.backend.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Tools</h3>
              <ul>
                {t.skills.tools.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.contact.title}</h2>
          <div className={styles.contactInfo}>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a href={`https://${t.contact.github}`} target="_blank" rel="noopener noreferrer">
                {t.contact.github}
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a href={`https://${t.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                {t.contact.linkedin}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
