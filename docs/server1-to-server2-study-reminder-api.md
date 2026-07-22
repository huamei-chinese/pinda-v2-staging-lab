# API Server 1 gọi Server 2 — Nhắc học theo bộ quy tắc

## Danh mục API và mục đích sử dụng

| API | Bên gọi | Dùng để làm gì | Có kích hoạt gửi email? |
|---|---|---|---:|
| `POST https://servermail222.netlify.app/.netlify/functions/study-reminders-background` | Scheduler của Server 1 | Yêu cầu Server 2 kiểm tra quy tắc, chọn người nhận và gửi Gmail SMTP. | Có |
| `GET /api/admin/reminder-rules` | Giao diện admin → Server 1 | Đọc bộ quy tắc đang áp dụng trên database chung. | Không |
| `PUT /api/admin/reminder-rules` | Giao diện admin → Server 1 | Bật/tắt tự động và cập nhật ngưỡng lọc người nhận. | Không |
| `GET /api/admin/reminder-reports/:dispatchId` | Admin hoặc Server 1 | Xem kết quả của một lượt gửi cụ thể. | Không |
| `GET /api/admin/reminder-reports?limit=20` | Giao diện admin → Server 1 | Xem danh sách các lượt gửi gần nhất. | Không |

Chỉ endpoint `POST` trên Netlify khởi động quá trình lọc và gửi email. Các API
còn lại chỉ quản lý cấu hình hoặc đọc báo cáo. Người dùng không có công tắc
bật/tắt riêng cho email theo quy tắc.

## 1. Endpoint kích hoạt

### Dùng để làm gì?

Server 1 gọi endpoint này theo lịch để yêu cầu Server 2 thực hiện trọn vẹn một
lượt Nhắc học: bootstrap schema nếu thiếu, đọc quy tắc mới nhất, lọc người dùng,
áp dụng cooldown/giới hạn tháng, gửi Gmail SMTP và ghi báo cáo theo `dispatchId`.

Server 1 không gửi danh sách người dùng và không tự gửi email.

```http
POST https://servermail222.netlify.app/.netlify/functions/study-reminders-background
Authorization: Bearer <REMINDER_SERVICE_SECRET>
Content-Type: application/json
X-HuaMei-Trigger: scheduled-rule-check
```

`REMINDER_SERVICE_SECRET` trên Server 1 và Netlify phải giống nhau.

## 2. Request body

```json
{
  "dispatchId": "123e4567-e89b-42d3-a456-426614174000",
  "reason": "scheduled-rule-check",
  "requestedAt": "2026-07-22T00:00:00.000Z",
  "rules": {
    "autoEnabled": true,
    "inactiveDays": 3,
    "lowStudyMinutes": 5,
    "lowStudyWindowDays": 7,
    "cooldownDays": 3,
    "maxEmailsPerMonth": 3,
    "vipExpiryDays": 7,
    "maxEmailsPerRun": 50,
    "updatedAt": "2026-07-21T10:30:00.000Z"
  }
}
```

### Trường cấp request

| Trường | Bắt buộc | Kiểu | Ý nghĩa |
|---|---:|---|---|
| `dispatchId` | Có | UUID | ID duy nhất cho một lượt; Server 1 tạo trước khi gọi. |
| `reason` | Có | string | `scheduled-rule-check`, `startup-catch-up` hoặc lý do thủ công. |
| `requestedAt` | Có | ISO-8601 UTC | Thời điểm Server 1 tạo request. |
| `rules` | Có | object | Snapshot quy tắc tại thời điểm gọi. |

Khi retry do lỗi mạng, Server 1 phải dùng lại cùng `dispatchId`. Không tạo ID mới
cho cùng một lượt gửi.

### Quy tắc và giới hạn

| Trường | Kiểu | Khoảng hợp lệ |
|---|---|---:|
| `autoEnabled` | boolean | `true` hoặc `false` |
| `inactiveDays` | integer | 1–90 |
| `lowStudyMinutes` | integer | 1–1440 |
| `lowStudyWindowDays` | integer | 1–30 |
| `cooldownDays` | integer | 1–30 |
| `maxEmailsPerMonth` | integer | 1–31 |
| `vipExpiryDays` | integer | 1–90 |
| `maxEmailsPerRun` | integer | 1–100 |
| `updatedAt` | ISO-8601 hoặc `null` | Thời điểm cập nhật quy tắc |

Server 2 dùng snapshot để bootstrap schema nếu cần, sau đó đọc lại
`study_reminder_rules` từ database chung. Nếu quy tắc đã thay đổi, bản trong
database là nguồn sự thật.

## 3. Response

Netlify Background Function trả ngay:

```http
HTTP/1.1 202 Accepted
```

`202` chỉ xác nhận Netlify đã tiếp nhận invocation. Nó không xác nhận email đã
được gửi thành công. Xác thực Bearer, bootstrap database, lọc người nhận và gửi
SMTP diễn ra trong background sau response này.

Các lỗi có thể thấy trực tiếp ở Server 1:

| Trường hợp | Kết quả |
|---|---|
| Sai URL hoặc function chưa deploy | `404` |
| Netlify/gateway lỗi | `5xx` hoặc lỗi mạng |
| Quá 15 giây ở phía Server 1 | `AbortError` do timeout |
| Netlify tiếp nhận invocation | `202` |

Do đặc tính Background Function, request sai secret hoặc payload sai vẫn có thể
đã nhận `202`; lỗi thực tế xuất hiện trong log Netlify và có thể không tạo báo cáo.

## 4. Ví dụ `fetch` trên Server 1

```ts
import { randomUUID } from 'node:crypto';

const dispatchId = randomUUID();
const requestedAt = new Date().toISOString();

const response = await fetch(process.env.REMINDER_SERVICE_URL!, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.REMINDER_SERVICE_SECRET}`,
    'Content-Type': 'application/json',
    'X-HuaMei-Trigger': 'scheduled-rule-check',
  },
  body: JSON.stringify({
    dispatchId,
    reason: 'scheduled-rule-check',
    requestedAt,
    rules,
  }),
  signal: AbortSignal.timeout(15_000),
});

if (response.status !== 202 && !response.ok) {
  throw new Error(`Netlify reminder service returned HTTP ${response.status}`);
}

console.log({ dispatchId, accepted: true, status: response.status });
```

Biến môi trường Server 1:

```env
REMINDER_DISPATCH_ENABLED=true
REMINDER_DISPATCH_HOUR_VIETNAM=7
REMINDER_SERVICE_URL=https://servermail222.netlify.app/.netlify/functions/study-reminders-background
REMINDER_SERVICE_SECRET=<same-secret-as-netlify>
```

## 5. API đọc báo cáo trên Server 1

Hai API dưới đây chỉ đọc kết quả mà Server 2 đã ghi vào database chung. Chúng
không chạy lại bộ lọc và không gửi thêm email.

Server 2 ghi kết quả vào database chung. Server 1 cung cấp API cho admin đọc một
lượt cụ thể:

```http
GET /api/admin/reminder-reports/:dispatchId
X-Admin-User-Id: <admin-user-id>
```

Ví dụ response hoàn thành:

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

Danh sách các lượt gần nhất:

```http
GET /api/admin/reminder-reports?limit=20
X-Admin-User-Id: <admin-user-id>
```

### Ý nghĩa trạng thái báo cáo

| Trạng thái | Ý nghĩa |
|---|---|
| `processing` | Server 2 đang lọc hoặc gửi email. |
| `completed` | Worker đã kết thúc; xem `counts.sent` và `counts.failed`. |
| `failed` | Toàn bộ lượt gặp lỗi; xem `error`. |
| `skipped` | Worker bỏ qua, ví dụ admin đã tắt tự động gửi. |

Ngay sau `202`, API báo cáo có thể tạm trả `404` trong lúc worker chưa tạo bản
ghi. Client có thể poll mỗi 3–5 giây và dừng khi trạng thái là `completed`,
`failed` hoặc `skipped`.

## 6. API quản lý quy tắc trên Server 1

### Đọc quy tắc

```http
GET /api/admin/reminder-rules
X-Admin-User-Id: <admin-user-id>
```

Dùng khi mở màn hình “Quy tắc gửi” để hiển thị cấu hình hiện tại. API chỉ đọc
database, không gọi Netlify và không gửi email.

### Lưu quy tắc

```http
PUT /api/admin/reminder-rules
X-Admin-User-Id: <admin-user-id>
Content-Type: application/json

{
  "autoEnabled": true,
  "inactiveDays": 3,
  "lowStudyMinutes": 5,
  "lowStudyWindowDays": 7,
  "cooldownDays": 3,
  "maxEmailsPerMonth": 3,
  "vipExpiryDays": 7,
  "maxEmailsPerRun": 50
}
```

Dùng khi admin bấm “Lưu quy tắc”. API cập nhật `study_reminder_rules` nhưng không
gửi ngay. Bộ quy tắc mới được sử dụng ở lượt scheduler tiếp theo.

## 7. Trình tự chuẩn

1. Server 1 đọc `study_reminder_rules`.
2. Nếu `autoEnabled = false`, không gọi Server 2.
3. Server 1 tạo một `dispatchId`.
4. Server 1 gọi endpoint Netlify và nhận `202`.
5. Server 2 bootstrap schema riêng của tính năng nếu thiếu.
6. Server 2 tạo báo cáo `processing`, lọc người nhận và gửi Gmail SMTP.
7. Server 2 cập nhật báo cáo thành `completed`, `failed` hoặc `skipped`.
8. Admin hoặc Server 1 đọc báo cáo bằng `dispatchId`.
