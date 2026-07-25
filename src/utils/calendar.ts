import { DEFAULT_TIME_ZONE } from "@/src/constants/calendar";

export interface CalendarDay {
  value: Date;
  date: number;
  isoDate: string;
  isToday: boolean;
  isCurrentMonth?: boolean;
}

interface CalendarOptions {
  today?: Date;
  weekStartsOn?: number;
}

interface CurrentWeekCalendarOptions {
  weekStartsOn?: number;
  timeZone?: string;
}

export function formatIsoDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getDateInTimeZone(
  sourceDate = new Date(),
  timeZone = DEFAULT_TIME_ZONE
) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(sourceDate);

  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  return new Date(Date.UTC(year, month - 1, day));
}

export function getToday(timeZone = DEFAULT_TIME_ZONE) {
  return getDateInTimeZone(new Date(), timeZone);
}

export function addDays(date: Date, amount: number) {
  const result = new Date(date);

  result.setUTCDate(result.getUTCDate() + amount);

  return result;
}

export function getWeekdayIndex(date: Date, weekStartsOn = 1) {
  return (date.getUTCDay() - weekStartsOn + 7) % 7;
}

function createCalendarDay(
  date: Date,
  today: Date,
  currentMonth?: number
): CalendarDay {
  return {
    value: date,
    date: date.getUTCDate(),
    isoDate: formatIsoDate(date),
    isToday: formatIsoDate(date) === formatIsoDate(today),
    isCurrentMonth:
      currentMonth === undefined
        ? undefined
        : date.getUTCMonth() === currentMonth,
  };
}

/**
 * 기준 날짜가 포함된 한 주 반환
 *
 * weekStartsOn
 * 0: 일요일 시작
 * 1: 월요일 시작
 */
export function getWeekCalendarDays(
  anchorDate: Date,
  options: CalendarOptions = {}
): CalendarDay[] {
  const { today = getToday(), weekStartsOn = 1 } = options;

  const offset = getWeekdayIndex(anchorDate, weekStartsOn);

  const startDate = addDays(anchorDate, -offset);

  return Array.from({ length: 7 }, (_, index) => {
    const date = addDays(startDate, index);

    return createCalendarDay(date, today);
  });
}

/**
 * 오늘이 포함된 한 주 반환
 */
export function getCurrentWeekCalendarDays(
  options: CurrentWeekCalendarOptions = {}
): CalendarDay[] {
  const { weekStartsOn = 1, timeZone = DEFAULT_TIME_ZONE } = options;

  const today = getToday(timeZone);

  return getWeekCalendarDays(today, {
    today,
    weekStartsOn,
  });
}

/**
 * 해당 월의 달력 날짜 반환
 * 앞뒤 달 날짜를 포함하며 주 단위로 채움
 *
 * month는 1~12
 */
export function getMonthCalendarDays(
  year: number,
  month: number,
  options: CalendarOptions = {}
): CalendarDay[] {
  const { today = getToday(), weekStartsOn = 1 } = options;

  const monthIndex = month - 1;

  const firstDate = new Date(Date.UTC(year, monthIndex, 1));

  const lastDate = new Date(Date.UTC(year, monthIndex + 1, 0));

  const startOffset = getWeekdayIndex(firstDate, weekStartsOn);

  const totalCells = Math.ceil((startOffset + lastDate.getUTCDate()) / 7) * 7;

  const startDate = addDays(firstDate, -startOffset);

  return Array.from({ length: totalCells }, (_, index) => {
    const date = addDays(startDate, index);

    return createCalendarDay(date, today, monthIndex);
  });
}
