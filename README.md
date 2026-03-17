# MinhTriTech Landing Page (ReactJS + Vite)

Landing page một trang cho domain [minhtritech.me](https://minhtritech.me), được build lại bằng ReactJS theo hướng component-based, nội dung dễ chỉnh sửa và giữ giao diện dark theme hiện có.

## Stack

- React 18
- Vite 5
- JavaScript (ES Modules)
- CSS thuần (global stylesheet)

## Cấu trúc chính

| Đường dẫn | Mô tả |
|---|---|
| `index.html` | Entry HTML + SEO metadata + mount point `#root` |
| `src/App.jsx` | Ghép toàn bộ section landing page |
| `src/components/*` | Components: Header, Hero, About, Projects, Activity, Skills, Contact, Footer |
| `src/data/content.js` | Toàn bộ nội dung/copy của landing page |
| `src/hooks/useGitHubActivity.js` | Hook fetch và quản lý trạng thái activity GitHub |
| `src/lib/githubActivity.js` | Hàm fetch API + formatter + build dữ liệu heatmap |
| `src/index.css` | Toàn bộ style global (migrate từ bản tĩnh) |
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

Thư mục output: `dist/`

## Chỉnh nội dung nhanh

- Sửa text landing page trong `src/data/content.js`
- Sửa username GitHub trong `src/lib/constants.js` (`GITHUB_USERNAME`)
- Sửa màu/spacing trong `src/index.css`

## GitHub Pages + custom domain

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
