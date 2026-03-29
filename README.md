# MinhTriTech Portfolio

Portfolio một trang cho domain [minhtritech.me](https://minhtritech.me), build bằng **React 18 + Vite 5**, hỗ trợ song ngữ Việt/Anh và giao diện dark theme hiện đại.

## Stack

- React 18
- Vite 5
- JavaScript (ES Modules)
- CSS Modules

## Cấu trúc dự án

```
src/
├── App.jsx                              # Root component, bọc LanguageProvider
├── main.jsx                             # Entry point
├── config/
│   └── api.js                           # API URL từ biến môi trường VITE_API_URL
├── context/
│   └── LanguageContext.jsx              # Context chuyển ngôn ngữ VI/EN
├── pages/
│   └── portfolio/
│       ├── PortfolioPage.jsx            # Trang portfolio chính (toàn bộ nội dung)
│       └── PortfolioPage.module.css     # CSS Modules cho trang portfolio
└── styles/
    └── global.css                       # Global stylesheet (dark theme)
```

| Đường dẫn | Mô tả |
|---|---|
| `src/App.jsx` | Root component, bọc `LanguageProvider` |
| `src/main.jsx` | Entry point React |
| `src/config/api.js` | Export `API_URL` từ `import.meta.env.VITE_API_URL` |
| `src/context/LanguageContext.jsx` | Context + hook `useLanguage` để toggle VI/EN |
| `src/pages/portfolio/PortfolioPage.jsx` | Toàn bộ nội dung và các section: Hero, Projects, Skills, Contact, Footer |
| `src/styles/global.css` | Global stylesheet (dark theme) |
| `vite.config.js` | Cấu hình Vite |
| `CNAME` | Custom domain: `minhtritech.me` |

## Chạy local

```bash
npm install
npm run dev
```

App local mặc định: `http://localhost:5173`

## Biến môi trường

Tạo file `.env.local` ở thư mục gốc:

```
VITE_API_URL=https://your-backend-url
```

Biến này được dùng trong `src/config/api.js` và fetch dữ liệu từ backend trong `PortfolioPage.jsx`.

## Build production

```bash
npm run build
npm run preview
```

Output Vite: `dist/` (tự động tối ưu hóa)

## Chỉnh nội dung nhanh

- Sửa text/nội dung landing page trực tiếp trong `src/pages/portfolio/PortfolioPage.jsx` (object `content.vi` và `content.en`)
- Sửa màu/spacing trong `src/styles/global.css` hoặc `src/pages/portfolio/PortfolioPage.module.css`
- Thêm/bớt ngôn ngữ: chỉnh `src/context/LanguageContext.jsx`

## Deploy tự động bằng GitHub Actions

- Workflow tại `.github/workflows/deploy.yml`
- Trigger khi push vào nhánh `main`
- Pipeline: `npm install` → `npm run build` (với `VITE_API_URL` từ secret) → upload `dist/` → deploy GitHub Pages
- Secret cần cấu hình: `VITE_API_URL` tại `Settings → Secrets and variables → Actions`
- Cấu hình repo: `Settings → Pages → Build and deployment → Source = GitHub Actions`
