# MinhTriTech Landing Page

Landing page một trang cho domain [minhtritech.me](https://minhtritech.me), build bằng **React 18 + Vite 5** theo kiến trúc Feature-Sliced Design (FSD), nội dung dễ chỉnh sửa và giao diện dark theme hiện đại.

## Stack

- React 18
- Vite 5
- JavaScript (ES Modules)
- CSS Modules

## Cấu trúc dự án

```
src/
├── app/                         # Root App component + global styles
│   ├── App.jsx
│   └── styles/global.css
├── widgets/                     # Các section UI của landing page
│   ├── header/ui/
│   ├── hero/ui/
│   ├── about/ui/
│   ├── projects/ui/
│   ├── skills/ui/
│   ├── activity/ui/
│   ├── contact/ui/
│   └── footer/ui/
├── entities/
│   ├── landing/model/content.js # Toàn bộ nội dung/copy của landing page
│   └── github-activity/         # Hook + utility fetch GitHub activity
├── pages/
│   ├── home/ui/HomePage.jsx
│   └── portfolio/PortfolioPage.jsx
└── shared/
    ├── config/constants.js      # Constants (GitHub username, v.v.)
    └── context/LanguageContext.jsx
```

| Đường dẫn | Mô tả |
|---|---|
| `src/app/App.jsx` | Root component, bọc LanguageProvider |
| `src/widgets/*/ui/` | Components: Hero, About, Projects, Activity, Skills, Contact, Header, Footer |
| `src/app/styles/global.css` | Global stylesheet (dark theme) |
| `src/entities/landing/model/content.js` | Toàn bộ nội dung/copy của landing page |
| `src/entities/github-activity/` | Hook + utility fetch và format GitHub activity |
| `src/shared/config/constants.js` | Constants (GitHub username, messages, v.v.) |
| `src/shared/context/LanguageContext.jsx` | Context chuyển ngôn ngữ VI/EN |
| `vite.config.js` | Cấu hình Vite |
| `CNAME` | Custom domain: `minhtritech.me` |

## Chạy local

```bash
npm install
npm run dev
```

App local mặc định: `http://localhost:5173`

## Build production

```bash
npm run build
npm run preview
```

Output Vite: `dist/` (tự động tối ưu hóa)

## Chỉnh nội dung nhanh

- Sửa text landing page trong `src/entities/landing/model/content.js`
- Sửa username GitHub trong `src/shared/config/constants.js`
- Sửa màu/spacing trong `src/app/styles/global.css` hoặc `src/widgets/*/*.module.css`
- Nội dung song ngữ (VI/EN): `src/entities/landing/model/content-bilingual.js`

## Deploy tự động bằng GitHub Actions

- Workflow tại `.github/workflows/deploy.yml`
- Trigger khi push vào nhánh `main`
- Pipeline: `npm install` → `npm run build` → upload `dist/` → deploy GitHub Pages
- Cấu hình repo: `Settings → Pages → Build and deployment → Source = GitHub Actions`

## Lưu ý activity GitHub

- Endpoint: `GET https://api.github.com/users/{username}/events/public`
- API public có rate limit theo IP; khi lỗi/rate-limit, UI hiển thị fallback message.
