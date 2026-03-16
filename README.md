# MinhTriTech

Landing page tĩnh cho domain [minhtritech.me](https://minhtritech.me), deploy trên GitHub Pages.

## Cấu trúc

| File | Mô tả |
|------|-------|
| `index.html` | Landing page chính (Hero → Dịch vụ → CTA → Liên hệ → Footer) |
| `styles.css` | CSS mobile-first, không phụ thuộc framework |
| `CNAME` | Custom domain: `minhtritech.me` |

## Sửa nội dung nhanh

- **Tiêu đề / tagline** — thẻ `<h1>` trong `index.html`
- **Dịch vụ** — các thẻ `.card` trong section `#services`
- **Email / SĐT** — tìm `mailto:` và `tel:` trong `index.html`
- **Zalo / Facebook** — tìm `TODO:` trong `index.html` và cập nhật URL
- **Màu sắc** — sửa biến CSS `:root { --primary: ... }` trong `styles.css`
- **Form liên hệ** — gắn `action` theo Formspree / Netlify Forms / backend riêng

## Deploy checklist

- [ ] GitHub Pages đang publish: `Settings → Pages → Source: main / root`
- [ ] File `CNAME` chứa đúng domain (`minhtritech.me`)
- [ ] DNS đã trỏ: `CNAME @ → <username>.github.io` hoặc A record → GitHub IPs
- [ ] Thay toàn bộ `TODO:` trong `index.html` trước khi go-live
- [ ] Bật SSL: `Settings → Pages → Enforce HTTPS`

## Phát triển local

Mở trực tiếp `index.html` trong trình duyệt — không cần server hay build step.
