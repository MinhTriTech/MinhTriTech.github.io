const translations = {
  vi: {
    navLinks: [
      { href: '#gioi-thieu', label: 'Giới thiệu' },
      { href: '#du-an', label: 'Dự án' },
      { href: '#ky-nang', label: 'Kỹ năng' },
      { href: '#hoat-dong', label: 'Hoạt động' }
    ],
    hero: {
      tag: 'Student IT Launchpad 2026',
      title: 'Học IT đúng hướng, build sản phẩm thật',
      subtitle: 'Roadmap rõ ràng, dự án thực chiến và kỹ năng cần có để sẵn sàng đi làm.',
      primaryCta: { href: '#du-an', label: 'Xem lộ trình' },
      highlights: ['Roadmap 12 tuần', '3 dự án portfolio', 'Kỹ năng doanh nghiệp']
    },
    about: {
      title: 'Tại sao mô hình này?',
      subtitle: 'Thị trường ưu tiên năng lực làm sản phẩm thực tế.'
    },
    projects: {
      title: 'Lộ trình dự án',
      subtitle: 'Từ nền tảng cơ bản đến capstone teamwork.'
    },
    skills: {
      title: 'Tech stack',
      subtitle: 'Bộ kỹ năng gọn nhưng đủ sâu để đi internship.'
    },
    footer: {
      left: 'Student IT Launchpad • Learn, Build, Ship',
      right: '© 2026 MinhTriTech'
    }
  },
  en: {
    navLinks: [
      { href: '#gioi-thieu', label: 'About' },
      { href: '#du-an', label: 'Projects' },
      { href: '#ky-nang', label: 'Skills' },
      { href: '#hoat-dong', label: 'Activity' }
    ],
    hero: {
      tag: 'Student IT Launchpad 2026',
      title: 'Learn IT the right way, build real products',
      subtitle: 'Clear roadmap, real-world projects and essential skills to be job-ready.',
      primaryCta: { href: '#du-an', label: 'View roadmap' },
      highlights: ['12-week roadmap', '3 portfolio projects', 'Industry skills']
    },
    about: {
      title: 'Why this approach?',
      subtitle: 'The market prioritizes real product development skills.'
    },
    projects: {
      title: 'Project roadmap',
      subtitle: 'From fundamentals to capstone teamwork.'
    },
    skills: {
      title: 'Tech stack',
      subtitle: 'Concise but deep enough for internships.'
    },
    footer: {
      left: 'Student IT Launchpad • Learn, Build, Ship',
      right: '© 2026 MinhTriTech'
    }
  }
};

export function getContent(language) {
  return translations[language] || translations.vi;
}

export const navLinks = translations.vi.navLinks;
export const heroContent = translations.vi.hero;
export const aboutContent = translations.vi.about;
export const projectsContent = translations.vi.projects;
export const skillsContent = translations.vi.skills;
export const footerContent = translations.vi.footer;
