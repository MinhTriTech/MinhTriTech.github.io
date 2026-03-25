# MinhTriTech Landing Page (Next.js)

Landing page một trang cho domain [minhtritech.me](https://minhtritech.me), được build bằng **Next.js 14** theo hướng component-based, nội dung dễ chỉnh sửa và giữ giao diện dark theme hiện có.

## Stack

- React 18
- Next.js 14
- JavaScript (ES Modules)
- CSS Modules

## Cấu trúc chính

| Đường dẫn | Mô tả |
|---|---|
| `app/layout.jsx` | Root layout với Header và Footer |
| `app/page.jsx` | Trang chính ghép toàn bộ section landing page |
| `app/components/*` | Components: Hero, About, Projects, Activity, Skills, Contact, Header, Footer |
| `app/globals.css` | Global stylesheet (dark theme) |
| `src/entities/landing/model/content.js` | Toàn bộ nội dung/copy của landing page |
| `src/entities/github-activity/*` | Hook + utility fetch và format GitHub activity |
| `src/shared/config/constants.js` | Constants (GitHub username, messages, etc.) |
| `jsconfig.json` | Path aliases (@app, @entities, @shared, etc.) |
| `.env.local` | Environment variables (GitHub config) |
| `CNAME` | Custom domain: `minhtritech.me` |

## Chạy local

```bash
npm install
npm run dev
```

App local mặc định: `http://localhost:3000`

## Build production

```bash
npm run build
npm start
```

Output Next.js: `.next/` (tự động optimize)

## Chỉnh nội dung nhanh

- Sửa text landing page trong `src/entities/landing/model/content.js`
- Sửa username GitHub trong `src/shared/config/constants.js` (`GITHUB_USERNAME`)
- Sửa màu/spacing trong `app/globals.css` hoặc `app/components/*.module.css`

## Environment Variables

Tạo `.env.local`:

```env
NEXT_PUBLIC_GITHUB_USERNAME=minhtritech
# NEXT_PUBLIC_GITHUB_TOKEN=your_token_here  # Optional: for higher rate limits
```

## GitHub Pages + Custom Domain

Next.js được deploy tự động trên GitHub Pages thông qua GitHub Actions hoặc manual build:

```bash
npm run build
```

Output sẽ tối ưu hoá cho static hosting.

## Migration từ Vite → Next.js

**Lợi ích:**
- Tốc độ load nhanh hơn (Image optimization, Code splitting tự động)
- SEO tốt hơn (Server-side rendering metadata)
- API routes có sẵn (nếu cần backend sau)
- Ecosystem rộng và cộng đồng lớn hơn

**Thay đổi chính:**
- `src/` → `app/` (Next.js app directory)
- Vite config → `next.config.js`
- Path aliases trong `jsconfig.json` (thay vì `vite.config.js`)
- Components không cần wrapper HTML nữa (Next.js tự xử lý)


- Giữ file `CNAME` để preserve domain `minhtritech.me`
- Sau khi build, publish artifact từ `dist/` theo quy trình deploy bạn đang dùng
- Nếu dùng GitHub Actions, đảm bảo copy `CNAME` vào artifact deploy

## Deploy tự động bằng GitHub Actions

- Workflow đã có tại `.github/workflows/deploy.yml`
- Trigger khi push vào nhánh `main` hoặc chạy thủ công (`workflow_dispatch`)
- Pipeline thực hiện: `npm ci` → `npm run build` → copy `CNAME` vào `dist/` → deploy Pages
- Cần cấu hình repo: `Settings → Pages → Build and deployment → Source = GitHub Actions`

## Lưu ý activity GitHub

- Endpoint dùng: `GET https://api.github.com/users/{username}/events/public`
- API public có rate limit theo IP; khi lỗi/rate-limit, UI sẽ hiển thị fallback message.
