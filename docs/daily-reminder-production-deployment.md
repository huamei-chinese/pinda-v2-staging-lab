# Triển khai Nhắc học: Railway gọi Netlify Background Function

## Luồng production

1. NestJS/Railway lên lịch lúc `07:00` theo giờ Việt Nam.
2. Railway gửi `POST` đến Netlify Background Function với Bearer secret.
3. Netlify trả `202 Accepted` và xử lý email trong nền.
4. Worker ghi từng lần gửi vào `daily_reminder_deliveries`, claim bằng
   `FOR UPDATE SKIP LOCKED`, rồi gửi tuần tự qua Gmail SMTP trên một kết nối tái sử dụng.
5. Unique key `(user_id, reminder_date)` ngăn hai worker xử lý đồng thời cùng
   một reminder. Delivery được cập nhật ngay sau khi Gmail chấp nhận từng thư.

## Biến môi trường Netlify

```env
DATABASE_URL=postgresql://...
REMINDER_SERVICE_SECRET=<random-secret>
APP_URL=https://your-app-domain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=<google-app-password-without-spaces>
SMTP_FROM=HuaMei <your-email@gmail.com>
```

`SMTP_PASS` phải là Google App Password, không phải mật khẩu đăng nhập Gmail.
`SMTP_USER` phải trùng với địa chỉ bên trong `SMTP_FROM`. Netlify cần được đặt
cùng bộ biến Gmail SMTP đang dùng cho email quên mật khẩu trên Railway.

## Biến môi trường Railway

```env
REMINDER_DISPATCH_ENABLED=true
REMINDER_DISPATCH_HOUR_VIETNAM=7
REMINDER_SERVICE_URL=https://your-reminder-site.netlify.app/.netlify/functions/daily-reminders-background
REMINDER_SERVICE_SECRET=<same-random-secret-as-netlify>
```

Nên triển khai code Railway trước để migration tạo bảng
`daily_reminder_deliveries`, sau đó deploy Netlify, đặt URL Netlify vào Railway
và redeploy Railway để kích hoạt scheduler.

## Trình tự phát hành

1. Deploy backend Railway với `REMINDER_DISPATCH_ENABLED=false`.
2. Xác nhận bảng `daily_reminder_deliveries` đã được tạo.
3. Deploy Netlify production và đặt đầy đủ biến môi trường Netlify.
4. Đặt `REMINDER_SERVICE_URL`, cùng secret và
   `REMINDER_DISPATCH_ENABLED=true` trên Railway.
5. Redeploy Railway.
6. Kiểm tra log Railway có `Netlify accepted reminder dispatch`.
7. Kiểm tra log Netlify có `Daily reminder dispatch completed`.
8. Kiểm tra Gmail Sent, log Netlify và bảng `daily_reminder_deliveries` trước
   khi mở rộng cho toàn bộ người dùng.

Reminder service dùng file cấu hình riêng để không deploy function `/api/*` của
ứng dụng chính:

```powershell
npx netlify deploy --config netlify.reminders.toml
npx netlify deploy --config netlify.reminders.toml --prod
```

Lệnh đầu tạo deploy preview. Chỉ chạy lệnh `--prod` sau khi preview build thành
công và các biến môi trường của site reminder đã được thiết lập.

## Kiểm tra an toàn

- Request không có đúng Bearer secret không được gửi email.
- Chỉ method `POST` được worker xử lý.
- Người dùng tắt Nhắc học sau lúc enqueue sẽ được đánh dấu `skipped`.
- Job `processing` bị gián đoạn có thể được claim lại sau 20 phút.
- Mỗi delivery được thử tối đa ba lần.
- Worker không còn giới hạn cố định 500 tài khoản.
- SMTP không có idempotency key phía nhà cung cấp; nếu runtime dừng đúng khoảng
  giữa lúc Gmail nhận thư và lúc PostgreSQL ghi `sent`, một thư có thể được gửi
  lại. `Message-ID` cố định và việc cập nhật từng delivery thu hẹp khoảng rủi ro này.
