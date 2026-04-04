import { format, formatDistance, parseISO } from "date-fns";
import { zhCN } from "date-fns/locale";
import { differenceInDays } from "date-fns/esm";

// 我们希望这个函数同时兼容 Date 对象和字符串（字符串来自 Supabase）
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
    locale: zhCN,
  });

export const formatDate = (date) =>
  format(new Date(date), "yyyy年M月d日", { locale: zhCN });

export const formatDateWithWeekday = (date) =>
  format(new Date(date), "yyyy年M月d日 EEE", { locale: zhCN });

export const formatDateTime = (date) =>
  format(new Date(date), "yyyy年M月d日 HH:mm", { locale: zhCN });

export const formatChartDate = (date) =>
  format(new Date(date), "M月d日", { locale: zhCN });

// Supabase 需要 ISO 日期字符串。但如果直接生成，毫秒或秒数会在每次渲染时变化，不利于比较，所以这里用这个技巧去掉时间部分
export const getToday = function (options = {}) {
  const today = new Date();

  // 为了和 Supabase 返回的 created_at 做比较，这里需要把日期设为当天结束时刻，而不是 0 点
  if (options?.end)
    // 设置为当天最后一毫秒
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    currencyDisplay: "narrowSymbol",
  }).format(value);
