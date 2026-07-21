# huamei-learning-app
HuaMei Chinese learning app, admin system and learning content platform.

## Xác thực tài khoản

Ứng dụng dùng PostgreSQL cho đăng ký, đăng nhập, hồ sơ người dùng, quyền, tiến
độ học và thanh toán. Frontend gọi trực tiếp các API `/api/register` và
`/api/login`; không cần cấu hình dịch vụ xác thực bên ngoài.

## Quên mật khẩu qua Gmail SMTP

Màn hình **Quên mật khẩu** dùng luồng OTP ba bước qua Gmail SMTP:

1. Người dùng nhập email đã đăng ký.
2. Backend gửi mã xác minh 6 số qua Gmail SMTP. Mã chỉ có hiệu lực trong 10 phút
   và chỉ được lưu trong PostgreSQL dưới dạng hash.
3. Người dùng xác minh mã và tạo mật khẩu mới.

### 1. Tạo Google App Password

1. Bật xác minh 2 bước cho tài khoản Google dùng để gửi email.
2. Mở phần **Mật khẩu ứng dụng** trong tài khoản Google.
3. Tạo một mật khẩu ứng dụng mới cho HuaMei và lưu chuỗi 16 ký tự được cấp.
   Không dùng mật khẩu đăng nhập Gmail thông thường và không commit App Password
   vào Git.

### 2. Cấu hình môi trường production

Thêm các biến sau vào Railway, Netlify hoặc môi trường chạy backend:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_google_app_password_without_spaces
SMTP_FROM=HuaMei <your_email@gmail.com>
PASSWORD_RESET_SECRET=replace_with_a_long_random_secret
```

Không đặt `EMAIL_DELIVERY_MODE=dev` trong production. Chế độ này chỉ dành cho
máy phát triển và backend sẽ từ chối khởi động luồng gửi mã nếu phát hiện nó ở
production.

Sau khi lưu biến môi trường, redeploy backend. Có thể kiểm tra luồng từ nút
**Quên mật khẩu?** trên màn hình đăng nhập. Nếu Gmail từ chối xác thực, kiểm tra
lại xác minh 2 bước, App Password và đảm bảo `SMTP_USER` trùng với địa chỉ trong
`SMTP_FROM`.
