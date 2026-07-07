# Admin V2 Real Readonly Field Contract 2026-07-07

## Scope

This contract records the production Railway PostgreSQL tables that were verified through the Admin V2 read-only path.

Hard boundaries:
- Read-only only.
- No production deployment.
- No Git push until boss approval.
- No payment, VIP, user, or database writes.
- No secrets or connection strings in this file.

## Verified Tables

| Area | Table | Rows | Admin V2 Use |
| --- | ---: | ---: | --- |
| Users / VIP | `users` | 543 | User list, role, HSK level, active state, VIP state, VIP expiry |
| Payments / Orders | `payment_orders` | 242 | Order status preview, VIP payment evidence |
| VIP Plans | `payment_plans` | 5 | Plan labels, amount, duration |
| HSK Unlock Rules | `hsk_lesson_locks` | 146 | HSK course lock and free-item preview |
| Daily Theme Unlock Rules | `daily_theme_locks` | 27 | Daily theme lock and free-item preview |
| Payment Webhook Audit | `sepay_webhook_events` | 1 | Payment callback audit preview only |

## User Summary

| Metric | Count |
| --- | ---: |
| Total users | 543 |
| Active users | 543 |
| VIP users | 49 |

## Order Summary

| Status | Count |
| --- | ---: |
| `pending` | 241 |
| `expired` | 1 |

## Present Field Contract

### `users`

Allowed read fields:
- `id`
- `full_name`
- `email`
- `role`
- `is_active`
- `current_level`
- `avatar_url`
- `is_premium`
- `premium_until`
- `vip_plan_id`
- `created_at`
- `updated_at`
- `last_login_at`

Blocked fields:
- `password_hash`
- `email_verification_code_hash`
- `email_verification_expires_at`

### `payment_orders`

Allowed read fields:
- `id`
- `user_id`
- `plan_id`
- `amount`
- `status`
- `created_at`
- `paid_at`
- `expires_at`

Blocked by default:
- `transfer_code`

### `payment_plans`

Allowed read fields:
- `id`
- `months`
- `duration_unit`
- `amount`
- `name_vi`
- `name_zh`
- `is_active`
- `sort_order`

### `hsk_lesson_locks`

Allowed read fields:
- `lesson_id`
- `level`
- `lesson_no`
- `title_vi`
- `free_item_limit`
- `locked_for_free`
- `updated_at`

### `daily_theme_locks`

Allowed read fields:
- `theme_id`
- `title_vi`
- `sort_order`
- `free_item_limit`
- `locked_for_free`
- `updated_at`

### `sepay_webhook_events`

Allowed read fields:
- `sepay_id`
- `order_id`
- `processed`
- `received_at`

Blocked by default:
- `payload`

## Missing Tables

These expected Admin V2 production data sources were not found in the current Railway database:

## V1 Source Reality

Boss confirmation on 2026-07-07:
- V1 后台没有学习数据后台.
- V1 后台没有代理/直播后台.
- Therefore missing learning, agent, live, and commission sources are not a connection failure.
- These areas should be treated as V2 new backend capabilities, not as existing V1 data waiting to be imported.

| Missing Table | Impact |
| --- | --- |
| `learning_records` | V1 has no learning data backend, so real study progress cannot be imported from V1 |
| `learning_events` | V1 has no learning event backend, so event stream must be designed as V2 new data |
| `agent_commissions` | V1 has no agent/live backend or commission backend, so commission settlement must be designed as V2 new data |
| `agent_referrals` | V1 has no agent/live backend, so agent attribution must be designed as V2 new data |

## Next Mapping Order

1. Map `users`, `payment_orders`, and `payment_plans` into the Admin V2 read-only user/VIP/order preview.
2. Map `hsk_lesson_locks` and `daily_theme_locks` into the VIP/course unlock preview.
3. Keep learning analytics and agent commission panels marked as missing real data until real tables exist.
4. Keep all writes disabled until a separate production-write approval stage.
