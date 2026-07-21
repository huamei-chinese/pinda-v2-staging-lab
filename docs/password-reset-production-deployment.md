# Triển khai quên mật khẩu bằng Gmail SMTP

Luồng quên mật khẩu chỉ sử dụng Gmail SMTP và Google App Password. Không sử
dụng mail relay, Resend, Firebase reset email hoặc chế độ trả OTP ở môi trường
development.

```text
Frontend
  -> POST /api/password-reset/request
Backend chính
  -> tạo OTP 6 số, lưu hash vào PostgreSQL
  -> kết nối trực tiếp smtp.gmail.com bằng Google App Password
Gmail
  -> gửi OTP tới người dùng
Frontend
  -> POST /api/password-reset/verify
  -> POST /api/password-reset/confirm
```

Nếu tài khoản đã liên kết Firebase, bước `confirm` vẫn đồng bộ mật khẩu mới và
thu hồi phiên Firebase cũ. Firebase không tự gửi email reset và không phải một
luồng quên mật khẩu riêng.

## 1. Tạo Google App Password

1. Bật xác minh hai bước cho tài khoản Google gửi thư.
2. Mở phần **Mật khẩu ứng dụng** trong tài khoản Google.
3. Tạo App Password dành riêng cho HuaMei.
4. Lưu App Password trong biến môi trường production, không commit vào Git.

Không dùng mật khẩu đăng nhập Gmail thông thường.

## 2. Biến môi trường bắt buộc

Đặt trực tiếp trên dịch vụ đang chạy API `/api/password-reset/*`, ví dụ Railway
hoặc Netlify Functions:

```env
NODE_ENV=production
DATABASE_URL=<postgresql-connection-string>
PASSWORD_RESET_SECRET=<chuỗi-ngẫu-nhiên-dài>

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_google_app_password_without_spaces
SMTP_FROM="HuaMei <your_email@gmail.com>"
```

Tùy chọn:

```env
SMTP_HELO=localhost
SMTP_REJECT_UNAUTHORIZED=true
```

`SMTP_USER` phải trùng với địa chỉ bên trong `SMTP_FROM`. `SMTP_PASS` là Google
App Password; khoảng trắng trong App Password được backend tự loại bỏ khi dùng
Gmail.

## 3. Biến phải xóa khỏi luồng quên mật khẩu

Xóa khỏi Railway/Netlify nếu trước đây đã cấu hình:

```text
MAIL_SERVICE_URL
MAIL_SERVICE_SECRET
EMAIL_DELIVERY_MODE
```

`RESEND_API_KEY` không còn được code xác thực/quên mật khẩu sử dụng. Nếu hệ
thống nhắc học hằng ngày vẫn dùng Resend thì có thể giữ biến này cho scheduled
function đó; nó không được dùng làm fallback cho OTP.

Không gọi các endpoint cũ:

```text
/.netlify/functions/mail
/api/auth/firebase-prepare-reset
```

## 4. API quên mật khẩu

### Gửi OTP

```http
POST https://<BACKEND_DOMAIN>/api/password-reset/request
Content-Type: application/json
```

```json
{"email":"test@example.com"}
```

Phản hồi thành công:

```json
{
  "ok": true,
  "delivery": "sent",
  "expiresAt": "<ISO timestamp>"
}
```

### Kiểm tra OTP

```http
POST https://<BACKEND_DOMAIN>/api/password-reset/verify
Content-Type: application/json
```

```json
{"email":"test@example.com","code":"123456"}
```

### Đặt mật khẩu mới

```http
POST https://<BACKEND_DOMAIN>/api/password-reset/confirm
Content-Type: application/json
```

```json
{
  "email":"test@example.com",
  "code":"123456",
  "newPassword":"NewPassword123!",
  "confirmPassword":"NewPassword123!"
}
```

OTP hết hạn sau 10 phút và bị xóa sau khi đổi mật khẩu thành công.

## 5. Kiểm tra production

Gửi OTP tới một tài khoản test đã đăng ký:

```bash
curl -i -X POST \
  "https://<BACKEND_DOMAIN>/api/password-reset/request" \
  -H "Content-Type: application/json" \
  --data '{"email":"test@example.com"}'
```

Kết quả thường gặp:

- `200`: Gmail SMTP đã nhận thư để gửi.
- `400`: email không hợp lệ.
- `404`: email chưa đăng ký.
- `503`: thiếu `SMTP_USER` hoặc `SMTP_PASS`.
- `502`: Gmail từ chối kết nối, xác thực, người gửi hoặc người nhận.

Khi gặp `502`, kiểm tra log backend. Log `Gmail SMTP failed` sẽ chứa mã SMTP như
`535` (sai App Password), `550` (người gửi/người nhận bị từ chối) hoặc lỗi kết
nối TLS.

## 6. Checklist triển khai

- [ ] Google Account đã bật xác minh hai bước.
- [ ] Đã tạo Google App Password mới.
- [ ] Backend có `SMTP_HOST=smtp.gmail.com` và `SMTP_PORT=465`.
- [ ] Backend có `SMTP_USER`, `SMTP_PASS` và `SMTP_FROM`.
- [ ] Backend có `PASSWORD_RESET_SECRET` riêng.
- [ ] Đã xóa `MAIL_SERVICE_URL`, `MAIL_SERVICE_SECRET` và `EMAIL_DELIVERY_MODE`.
- [ ] Frontend gọi `/api/password-reset/*` trên backend chính.
- [ ] Không còn request tới `/.netlify/functions/mail`.
- [ ] Tài khoản test nhận được OTP và đổi mật khẩu thành công.
