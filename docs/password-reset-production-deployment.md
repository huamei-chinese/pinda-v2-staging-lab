# Triển khai quên mật khẩu trên production

Tài liệu này mô tả cấu hình production đúng cho luồng OTP quên mật khẩu của
HuaMei. Kiến trúc hiện tại gồm hai dịch vụ tách biệt:

```text
Trình duyệt / frontend
        |
        | POST /api/password-reset/*
        v
Backend chính trên Railway
        |  - truy cập PostgreSQL
        |  - tạo, kiểm tra và hủy OTP
        |
        | POST /.netlify/functions/mail
        | Authorization: Bearer <MAIL_SERVICE_SECRET>
        v
Mail service trên Netlify
        |
        v
Gmail SMTP -> hộp thư người dùng
```

> **Quan trọng:** `servermail222.netlify.app` chỉ là mail service. Frontend
> không được gọi `/api/password-reset/*` trên domain này.

## 1. Các URL production

Thay `<RAILWAY_BACKEND_DOMAIN>` bằng public domain thật của backend Railway.

| Mục đích | URL đúng |
| --- | --- |
| Frontend yêu cầu gửi OTP | `https://<RAILWAY_BACKEND_DOMAIN>/api/password-reset/request` |
| Frontend kiểm tra OTP | `https://<RAILWAY_BACKEND_DOMAIN>/api/password-reset/verify` |
| Frontend xác nhận mật khẩu mới | `https://<RAILWAY_BACKEND_DOMAIN>/api/password-reset/confirm` |
| Railway gọi mail service | `https://servermail222.netlify.app/.netlify/functions/mail` |

Các URL sau là **sai**:

```text
https://servermail222.netlify.app/api/password-reset/request
https://servermail222.netlify.app/
```

URL thứ nhất không tồn tại nên trả `404`. URL thứ hai chỉ là trang tĩnh, không
phải endpoint gửi email.

## 2. Cấu hình Netlify mail service

Site Netlify phải được deploy từ repository này với `netlify.toml` ở thư mục
gốc. Cấu hình hiện tại publish `netlify-mail-public` và đăng ký function trong
`netlify/mail-functions`.

Vào **Netlify > Site configuration > Environment variables** và khai báo:

```env
MAIL_SERVICE_SECRET=<chuỗi-ngẫu-nhiên-tối-thiểu-32-ký-tự>
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=<địa-chỉ-gmail-gửi-thư>
SMTP_PASS=<google-app-password-16-ký-tự>
SMTP_FROM="HuaMei <your_email@gmail.com>"
```

Yêu cầu đối với Gmail:

1. Bật xác minh hai bước cho tài khoản Google.
2. Tạo Google App Password dành riêng cho HuaMei.
3. Dùng App Password cho `SMTP_PASS`, không dùng mật khẩu Gmail thường.
4. Địa chỉ trong `SMTP_FROM` nên trùng với `SMTP_USER`.

Sau khi lưu biến môi trường, chọn **Deploys > Trigger deploy > Deploy site**.

Không đưa `MAIL_SERVICE_SECRET` hoặc `SMTP_PASS` vào frontend, Git hay file
JavaScript public.

## 3. Cấu hình Railway backend chính

Vào **Railway > Service backend > Variables** và khai báo tối thiểu:

```env
NODE_ENV=production
DATABASE_URL=<postgresql-connection-string>
ENABLE_DB_SCHEMA_INIT=true

PASSWORD_RESET_SECRET=<một-chuỗi-ngẫu-nhiên-dài-khác-mail-secret>
MAIL_SERVICE_URL=https://servermail222.netlify.app/.netlify/functions/mail
MAIL_SERVICE_SECRET=<đúng-chuỗi-MAIL_SERVICE_SECRET-đã-đặt-trên-Netlify>
```

Quy tắc quan trọng:

- `MAIL_SERVICE_URL` phải có đầy đủ `/.netlify/functions/mail`.
- `MAIL_SERVICE_SECRET` trên Railway và Netlify phải giống hoàn toàn.
- `PASSWORD_RESET_SECRET` nên khác `MAIL_SERVICE_SECRET`.
- Không đặt `EMAIL_DELIVERY_MODE=dev` trên production.
- Khi dùng Netlify mail service, Railway không cần giữ `SMTP_USER` và
  `SMTP_PASS`.

Sau khi lưu biến, redeploy hoặc restart Railway. Railway sử dụng lệnh production
được khai báo trong `railway.json`:

```text
npm run build
npm run start:prod
```

## 4. Cấu hình URL backend cho frontend

Frontend đọc backend URL theo thứ tự:

1. `window.HUAMEI_BACKEND_URL`;
2. `localStorage["huamei-backend-url"]`;
3. cùng origin với frontend nếu hai giá trị trên không tồn tại.

### Frontend và Railway cùng domain

Không cần đặt backend URL. Xóa giá trị cũ từng trỏ vào mail service:

```js
localStorage.removeItem("huamei-backend-url");
location.reload();
```

### Frontend và Railway khác domain

Chèn cấu hình này trước thẻ tải `app.js` trong trang production:

```html
<script>
  window.HUAMEI_BACKEND_URL = "https://<RAILWAY_BACKEND_DOMAIN>";
</script>
```

Không đặt giá trị này thành `https://servermail222.netlify.app`.

Sau khi deploy lại frontend, kiểm tra tại Browser Console:

```js
console.table({
  runtimeBackend: window.HUAMEI_BACKEND_URL,
  savedBackend: localStorage.getItem("huamei-backend-url"),
  frontendOrigin: location.origin,
});
```

Nếu `savedBackend` vẫn chứa domain mail cũ, hãy xóa nó. `localStorage` tồn tại
qua nhiều lần redeploy nên deploy code mới không tự xóa cấu hình sai trên trình
duyệt đã từng truy cập.

## 5. Kiểm tra mail function độc lập

Lệnh dưới đây gửi một email thật. Thay email, OTP và secret trước khi chạy:

```bash
curl -i -X POST \
  "https://servermail222.netlify.app/.netlify/functions/mail" \
  -H "Authorization: Bearer <MAIL_SERVICE_SECRET>" \
  -H "Content-Type: application/json" \
  --data '{"email":"your-test-email@example.com","type":"password-reset","code":"123456"}'
```

Kết quả thành công:

```http
HTTP/2 200
```

```json
{"ok":true,"delivery":"sent"}
```

Các kết quả lỗi thường gặp:

- `401 Unauthorized`: secret hai bên không giống nhau hoặc thiếu Bearer token.
- `400 Invalid email/verification code`: body không đúng định dạng.
- `502 Unable to deliver email`: Gmail SMTP từ chối hoặc App Password sai.
- `404`: đang gọi sai URL function hoặc deploy Netlify chưa nhận `netlify.toml`.

## 6. Kiểm tra toàn bộ luồng qua Railway

### Bước 1: yêu cầu OTP

```bash
curl -i -X POST \
  "https://<RAILWAY_BACKEND_DOMAIN>/api/password-reset/request" \
  -H "Content-Type: application/json" \
  --data '{"email":"your-test-email@example.com"}'
```

Phản hồi thành công dự kiến:

```json
{
  "ok": true,
  "delivery": "sent",
  "expiresAt": "<ISO timestamp>"
}
```

### Bước 2: kiểm tra OTP nhận từ email

```bash
curl -i -X POST \
  "https://<RAILWAY_BACKEND_DOMAIN>/api/password-reset/verify" \
  -H "Content-Type: application/json" \
  --data '{"email":"your-test-email@example.com","code":"123456"}'
```

### Bước 3: đặt mật khẩu mới

```bash
curl -i -X POST \
  "https://<RAILWAY_BACKEND_DOMAIN>/api/password-reset/confirm" \
  -H "Content-Type: application/json" \
  --data '{"email":"your-test-email@example.com","code":"123456","newPassword":"NewPassword123!","confirmPassword":"NewPassword123!"}'
```

Sau bước 3, OTP bị xóa và không thể sử dụng lại.

## 7. Checklist nghiệm thu production

- [ ] `https://servermail222.netlify.app/.netlify/functions/mail` tồn tại.
- [ ] Gọi mail function không có secret trả `401`, không phải `404`.
- [ ] Gọi mail function với secret đúng gửi được email thử nghiệm.
- [ ] Railway có `DATABASE_URL` và kết nối được PostgreSQL.
- [ ] Railway có `PASSWORD_RESET_SECRET` riêng.
- [ ] Railway `MAIL_SERVICE_URL` kết thúc bằng `/.netlify/functions/mail`.
- [ ] `MAIL_SERVICE_SECRET` của Railway và Netlify giống nhau.
- [ ] Production không có `EMAIL_DELIVERY_MODE=dev`.
- [ ] Frontend gọi `/api/password-reset/request` trên domain Railway.
- [ ] Frontend không gửi request `/api/*` tới `servermail222.netlify.app`.
- [ ] OTP tới hộp thư, hết hạn sau 10 phút và không dùng lại được sau khi đổi mật khẩu.

## 8. Xử lý lỗi hiện tại

Lỗi:

```text
POST https://servermail222.netlify.app/api/password-reset/request 404
```

Thực hiện lần lượt:

1. Sửa Railway `MAIL_SERVICE_URL` thành
   `https://servermail222.netlify.app/.netlify/functions/mail`.
2. Đảm bảo frontend `HUAMEI_BACKEND_URL` trỏ tới public domain Railway.
3. Xóa `localStorage["huamei-backend-url"]` nếu nó đang chứa domain Netlify.
4. Redeploy/restart Railway sau khi thay biến môi trường.
5. Redeploy frontend nếu đã thay `window.HUAMEI_BACKEND_URL`.
6. Hard refresh trình duyệt và kiểm tra lại tab Network.

Request đúng trong tab Network phải có dạng:

```text
POST https://<RAILWAY_BACKEND_DOMAIN>/api/password-reset/request
```

Sau đó log Railway mới xuất hiện request nội bộ tới:

```text
POST https://servermail222.netlify.app/.netlify/functions/mail
```
