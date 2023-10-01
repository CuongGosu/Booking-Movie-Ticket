import {
  differenceInDays,
  formatDistance,
  parseISO,
  isValid,
  isDate,
} from 'date-fns';

export const subtractDates = (
  dateStr1: string | Date,
  dateStr2: string | Date,
): number | null => {
  const date1 = isDate(dateStr1)
    ? (dateStr1 as Date)
    : parseISO(String(dateStr1));
  const date2 = isDate(dateStr2)
    ? (dateStr2 as Date)
    : parseISO(String(dateStr2));

  if (isValid(date1) && isValid(date2)) {
    return differenceInDays(date1, date2);
  }

  return null; // Handle invalid dates
};

export const formatDistanceFromNow = (dateStr: string): string => {
  const parsedDate = parseISO(dateStr);

  if (isValid(parsedDate)) {
    return formatDistance(parsedDate, new Date(), {
      addSuffix: true,
    })
      .replace('about ', '')
      .replace('in', 'In');
  }

  return 'Invalid Date'; // Handle invalid date
};

export const getToday = (options: { end?: boolean } = {}): string => {
  const today = new Date();
  if (options.end) {
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }

  return today.toISOString();
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};
export function getColorForClassification(classification: string) {
  switch (classification) {
    case 'C13':
      return 'text-yellow-500'; // Màu vàng
    case 'C18':
      return 'text-red-500'; // Màu đỏ
    case 'C16':
      return 'text-orange-500'; // Màu cam
    case 'P':
      return 'text-green-500'; // Màu xanh lá cây
    case 'K':
      return 'text-cyan-500'; // Màu xanh lá cây
    default:
      return 'text-slate-500'; // Màu mặc định đen
  }
}
