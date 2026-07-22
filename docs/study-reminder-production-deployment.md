# Triển khai Nhắc học theo bộ quy tắc: Railway gọi Netlify Background Function

## Luồng production

1. NestJS/Railway lên lịch lúc `07:00` theo giờ Việt Nam.
2. Railway đọc `study_reminder_rules`; nếu admin chưa bật `auto_enabled`, API
   không được gọi. Nếu đã bật, Railway gửi `POST` kèm snapshot quy tắc đến
   Netlify Background Function với Bearer secret.
3. Netlify trả `202 Accepted` và xử lý email trong nền.
4. Trước khi xử lý, Server 2 dùng advisory lock và tự tạo các cột, bảng và index
   riêng của Nhắc học theo quy tắc nếu chúng chưa tồn tại. Hai bảng nền tảng
   `users` và `learning_events` vẫn phải có sẵn.
5. Worker lọc người nhận theo snapshot, ghi từng lần gửi vào
   `study_reminder_deliveries`, claim bằng `FOR UPDATE SKIP LOCKED`, rồi gửi
   tuần tự qua Gmail SMTP trên một kết nối tái sử dụng.
   Worker đọc lại `study_reminder_rules` và dùng database làm nguồn sự thật nếu
   admin vừa thay đổi quy tắc sau khi Server 1 tạo request.
6. Unique key `(user_id, reminder_date)` ngăn hai worker xử lý đồng thời cùng
   một reminder. Delivery được cập nhật ngay sau khi Gmail chấp nhận từng thư.
7. Server 1 tạo một `dispatchId` cho mỗi lượt. Server 2 tạo báo cáo trong
   `study_reminder_runs` ở trạng thái `processing`, rồi cập nhật thành `completed`,
   `failed` hoặc `skipped`.

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

Tài khoản PostgreSQL trong `DATABASE_URL` của Netlify cần có quyền `ALTER TABLE`,
`CREATE TABLE`, `CREATE INDEX` và quyền tạo extension `pgcrypto` nếu database chưa
có extension này. Server 2 chỉ bootstrap schema của tính năng nhắc học, không tự
tạo `users` hoặc `learning_events`.

## Biến môi trường Railway

```env
REMINDER_DISPATCH_ENABLED=true
REMINDER_DISPATCH_HOUR_VIETNAM=7
REMINDER_SERVICE_URL=https://servermail222.netlify.app/.netlify/functions/study-reminders-background
REMINDER_SERVICE_SECRET=<same-random-secret-as-netlify>
```

`REMINDER_DISPATCH_ENABLED` là kill switch cấp hạ tầng. Cả biến này và công tắc
`autoEnabled` trong database đều phải bật thì Server 1 mới gọi Netlify.

## API và quy tắc gửi

Admin đọc và lưu quy tắc qua:

```http
GET /api/admin/reminder-rules
PUT /api/admin/reminder-rules
```

Admin xem báo cáo các lượt gần nhất qua Server 1:

```http
GET /api/admin/reminder-reports?limit=20
X-Admin-User-Id: <admin-user-id>
```

Xem một lượt cụ thể bằng `dispatchId`:

```http
GET /api/admin/reminder-reports/:dispatchId
X-Admin-User-Id: <admin-user-id>
```

Ví dụ kết quả sau khi worker hoàn thành:

```json
{
  "report": {
    "dispatchId": "123e4567-e89b-42d3-a456-426614174000",
    "reminderDate": "2026-07-22",
    "reason": "scheduled-rule-check",
    "status": "completed",
    "counts": {
      "enqueued": 40,
      "claimed": 40,
      "sent": 38,
      "failed": 2,
      "skipped": 0
    },
    "aborted": false,
    "error": null,
    "requestedAt": "2026-07-22T00:00:00.000Z",
    "startedAt": "2026-07-22T00:00:01.000Z",
    "completedAt": "2026-07-22T00:01:10.000Z"
  }
}
```

`202 Accepted` từ Background Function chỉ xác nhận Netlify đã nhận request.
Server 1 hoặc màn hình quản trị dùng API báo cáo trên để biết kết quả cuối cùng.

Người dùng bật/tắt riêng email Nhắc học tự động qua Server 1:

```http
PATCH /api/users/:id/study-reminder-settings
X-User-Id: :id
Content-Type: application/json

{"enabled": false}
```

Payload mặc định theo màn hình quản trị:

```json
{
  "autoEnabled": false,
  "inactiveDays": 3,
  "lowStudyMinutes": 5,
  "lowStudyWindowDays": 7,
  "cooldownDays": 3,
  "maxEmailsPerMonth": 3,
  "vipExpiryDays": 7,
  "maxEmailsPerRun": 50
}
```

Người nhận phải đang hoạt động, chưa tắt email Nhắc học tự động
(`study_reminder_enabled = true`), có email hợp lệ, không vướng cooldown và chưa
đạt giới hạn tháng. Ngoài ra họ phải thỏa ít nhất một trigger:

- không có hoạt động học trong 3 ngày;
- có phiên học trong 7 ngày nhưng tổng thời gian dưới 5 phút;
- VIP còn hiệu lực và sẽ hết hạn trong 7 ngày.

Mỗi request chỉ claim tối đa 50 delivery. Worker không tự lặp sang nhóm 50 tiếp
theo trong cùng request.

Nên triển khai code Railway trước để migration tạo bảng
`study_reminder_deliveries`, sau đó deploy Netlify, đặt URL Netlify vào Railway
và redeploy Railway để kích hoạt scheduler.

## Trình tự phát hành

1. Deploy backend Railway với `REMINDER_DISPATCH_ENABLED=false`.
2. Xác nhận bảng `study_reminder_deliveries` đã được tạo.
3. Deploy Netlify production và đặt đầy đủ biến môi trường Netlify.
4. Đặt `REMINDER_SERVICE_URL`, cùng secret và
   `REMINDER_DISPATCH_ENABLED=true` trên Railway.
5. Redeploy Railway.
6. Kiểm tra log Railway có `Netlify accepted reminder dispatch`.
7. Kiểm tra log Netlify có `Rule-based study reminder dispatch completed`.
8. Kiểm tra Gmail Sent, log Netlify và bảng `study_reminder_deliveries` trước
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
- Người dùng tắt email Nhắc học tự động sau lúc enqueue sẽ được đánh dấu `skipped`.
- Job `processing` bị gián đoạn có thể được claim lại sau 20 phút.
- Mỗi delivery được thử tối đa ba lần.
- Worker không còn giới hạn cố định 500 tài khoản.
- SMTP không có idempotency key phía nhà cung cấp; nếu runtime dừng đúng khoảng
  giữa lúc Gmail nhận thư và lúc PostgreSQL ghi `sent`, một thư có thể được gửi
  lại. `Message-ID` cố định và việc cập nhật từng delivery thu hẹp khoảng rủi ro này.
