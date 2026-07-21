# huamei-learning-app
HuaMei Chinese learning app, admin system and learning content platform.

## Firebase Authentication trên Railway

Ứng dụng tiếp tục dùng PostgreSQL cho hồ sơ người dùng, quyền, tiến độ học và
thanh toán. Firebase chỉ quản lý đăng ký, đăng nhập, phiên đăng nhập và email
đặt lại mật khẩu.

### 1. Cấu hình Firebase

1. Tạo một Firebase project và thêm một Web App.
2. Trong **Authentication > Sign-in method**, bật **Email/Password**.
3. Trong **Authentication > Settings > Authorized domains**, thêm domain
   Railway và domain riêng của ứng dụng (nếu có).
4. Trong **Project settings > Service accounts**, tạo private key cho service
   account. Không commit file JSON này vào Git.

### 2. Biến môi trường Railway

Thêm các biến sau vào service backend:

```env
FIREBASE_WEB_API_KEY=api-key-cua-web-app
FIREBASE_PROJECT_ID=project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxx@project-id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
```

Giữ nguyên `DATABASE_URL` PostgreSQL. Sau khi thêm biến, redeploy service.
`FIREBASE_PRIVATE_KEY` có thể chứa xuống dòng thật hoặc chuỗi `\n`; backend hỗ
trợ cả hai dạng.

### Luồng hoạt động

- Tài khoản mới được tạo trong Firebase, sau đó backend tạo hồ sơ tương ứng
  trong PostgreSQL và liên kết bằng `firebase_uid`.
- Mỗi API cần danh tính nhận Firebase ID token qua header `Authorization`.
  Backend xác minh token trước khi ánh xạ sang ID người dùng PostgreSQL.
- Tài khoản cũ được chuyển sang Firebase ở lần đăng nhập đầu tiên sau khi mật
  khẩu cũ đã được backend xác minh.
- Khi quên mật khẩu, Firebase gửi email chứa liên kết đặt lại mật khẩu. Với tài
  khoản cũ, backend tạo liên kết Firebase một lần trước khi yêu cầu gửi email.
- Nếu chưa cấu hình đủ bốn biến Firebase, ứng dụng tự dùng lại luồng đăng nhập
  và mã OTP email cũ.

Xem danh sách biến mẫu đầy đủ trong [`.env.example`](.env.example).

## Quên mật khẩu qua Gmail SMTP

Màn hình **Quên mật khẩu** luôn dùng luồng OTP ba bước qua Gmail SMTP, kể cả
khi Firebase Authentication đang được bật:

1. Người dùng nhập email đã đăng ký.
2. Backend gửi mã xác minh 6 số qua Gmail SMTP. Mã chỉ có hiệu lực trong 10 phút
   và chỉ được lưu trong PostgreSQL dưới dạng hash.
3. Người dùng xác minh mã và tạo mật khẩu mới.

Nếu tài khoản đã liên kết Firebase, backend đồng thời cập nhật mật khẩu Firebase
và thu hồi các phiên cũ trước khi đăng nhập lại bằng mật khẩu mới.

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
