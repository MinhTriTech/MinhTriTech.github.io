export const navLinks = [
  { href: '#gioi-thieu', label: 'Lợi ích' },
  { href: '#du-an', label: 'Lộ trình' },
  { href: '#hoat-dong', label: 'Nhịp học' },
  { href: '#ky-nang', label: 'Tech stack' },
  { href: '#lien-he', label: 'Đăng ký' }
];

export const heroContent = {
  tag: 'Student IT Launchpad 2026',
  title: 'Học IT đúng hướng, build sản phẩm thật và sẵn sàng đi làm sớm.',
  subtitle:
    'Một landing page định hướng cho sinh viên IT: rõ roadmap theo tuần, dự án thực chiến theo từng cấp độ và hệ thống kỹ năng cần có để đi từ “học rời rạc” sang “portfolio có chiều sâu”.',
  primaryCta: { href: '#du-an', label: 'Xem lộ trình học' },
  secondaryCta: { href: '#lien-he', label: 'Nhận checklist miễn phí' },
  highlights: ['Roadmap 12 tuần có checkpoint', '3 dự án portfolio từ cơ bản đến nâng cao', 'Template CV + GitHub profile cho sinh viên IT'],
  stats: [
    { label: 'Giờ thực hành / tuần', value: '10+' },
    { label: 'Mini project', value: '06' },
    { label: 'Capstone team', value: '01' }
  ]
};

export const aboutContent = {
  title: 'Vì sao mô hình này phù hợp với sinh viên IT hiện nay?',
  subtitle:
    'Thị trường tuyển dụng ưu tiên năng lực làm sản phẩm. Vì vậy, thay vì học lan man, bạn cần một khung học tập có thứ tự ưu tiên và đầu ra rõ ràng.',
  cards: [
    {
      title: 'Định hướng nghề nghiệp sớm',
      description: 'Chọn nhánh Frontend, Backend hoặc Fullstack ngay từ đầu để đầu tư đúng kỹ năng quan trọng.'
    },
    {
      title: 'Học theo dự án thay vì chỉ lý thuyết',
      description: 'Mỗi phần kiến thức đều gắn với bài tập triển khai thật, giúp nhớ lâu và hiểu bản chất.'
    },
    {
      title: 'Portfolio đo được năng lực',
      description: 'Dự án có README chuẩn, commit rõ ràng và demo online để nhà tuyển dụng đánh giá nhanh.'
    },
    {
      title: 'Nhịp học bền vững',
      description: 'Có checklist theo tuần và hệ thống review giúp bạn duy trì tiến độ dù lịch học dày.'
    }
  ]
};

export const projectsContent = {
  title: 'Dự án tiêu biểu',
  subtitle: 'Những dự án fullstack thực chiến - từ frontend đến backend, triển khai trên production.',
  items: [
    {
      title: '💬 MessApp',
      description: 'Ứng dụng nhắn tin thời gian thực với Socket.IO, xác thực JWT, upload file và thông báo trạng thái typing.',
      meta: 'Frontend: React 19 + Vite | Backend: Node.js + Express + PostgreSQL + Socket.IO'
    },
    {
      title: '🎵 Spotify Clone',
      description: 'Nền tảng nghe nhạc với quản lý playlist, tải lên bài hát, tìm kiếm và OAuth Google. Có giao diện admin quản lý toàn bộ hệ thống.',
      meta: 'Frontend: React 19 + Vite + Tailwind CSS | Backend: Node.js + Express + MongoDB + Multer'
    }
  ]
};

export const skillsContent = {
  title: 'Tech stack nên ưu tiên',
  subtitle: 'Bộ kỹ năng gọn nhưng đủ sâu để đi internship hoặc fresher trong 2026.',
  coreSkills: [
    'HTML/CSS/JavaScript vững chắc, hiểu DOM và bất đồng bộ',
    'ReactJS + tư duy component, hooks và state management cơ bản',
    'Làm việc với REST API, xử lý lỗi và trạng thái loading hợp lý',
    'Git/GitHub workflow: branch, pull request, code review'
  ],
  workflow: [
    'Mỗi tuần chọn 1 mục tiêu học tập + 1 output cụ thể.',
    'Áp dụng Pomodoro 50/10 cho block code sâu.',
    'Cuối tuần review lại bug, ghi bài học vào notes cá nhân.',
    'Đăng demo công khai để nhận góp ý từ cộng đồng.'
  ]
};

export const contactContent = {
  title: 'Bắt đầu hành trình IT của bạn ngay hôm nay',
  subtitle:
    'Đăng ký để nhận bộ “IT Student Starter Kit”: checklist lộ trình 12 tuần, mẫu README dự án và khung CV dành cho thực tập sinh.',
  email: 'launchpad@minhtritech.me',
  phone: '+84 888 123 456',
  location: 'Việt Nam',
  collaborationTypes: [
    'Checklist kỹ năng cần có cho vị trí Frontend Intern',
    'Template portfolio + GitHub profile thu hút recruiter',
    'Danh sách đề tài capstone phù hợp sinh viên năm 2-4'
  ]
};

export const footerContent = {
  left: 'Student IT Launchpad • Learn, Build, Ship',
  right: '© 2026 MinhTriTech'
};
