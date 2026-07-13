export type DurationUnit = 'days' | 'months';

export interface PaymentPlan {
  id: string;
  months: number;
  durationUnit: DurationUnit;
  amount: number;
  nameVi: string;
  nameZh: string;
}

export const DEFAULT_PAYMENT_PLANS: PaymentPlan[] = [
  { id: '7d', months: 7, durationUnit: 'days', amount: 29000, nameVi: 'Gói VIP 7 ngày', nameZh: '7天 VIP' },
  { id: '30d', months: 30, durationUnit: 'days', amount: 129000, nameVi: 'Gói VIP 1 tháng', nameZh: '1个月 VIP' },
  { id: '90d', months: 90, durationUnit: 'days', amount: 329000, nameVi: 'Gói VIP 3 tháng', nameZh: '3个月 VIP' },
  { id: '1m', months: 1, durationUnit: 'months', amount: 149000, nameVi: '1 Tháng', nameZh: '1 个月' },
  { id: '3m', months: 3, durationUnit: 'months', amount: 399000, nameVi: '3 Tháng', nameZh: '3 个月' },
  { id: '6m', months: 6, durationUnit: 'months', amount: 699000, nameVi: '6 Tháng', nameZh: '6 个月' },
];

export function normalizeDurationUnit(value: unknown): DurationUnit {
  return value === 'days' ? 'days' : 'months';
}

export function applyPlanDuration(base: Date, plan: Pick<PaymentPlan, 'months' | 'durationUnit'>): Date {
  const result = new Date(base);
  const value = Number(plan.months);
  if (normalizeDurationUnit(plan.durationUnit) === 'days') {
    result.setDate(result.getDate() + value);
  } else {
    result.setMonth(result.getMonth() + value);
  }
  return result;
}

export function formatVnd(amount: number): string {
  return `${amount.toLocaleString('vi-VN')}đ`;
}
