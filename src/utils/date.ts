import { DEFAULT_TIME_ZONE } from "@/src/constants/calendar";

export function formatIsoDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function formatDateTime(
  dateString: string,
  timeZone = DEFAULT_TIME_ZONE
) {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat("ko-KR", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;
  const hour = parts.find((part) => part.type === "hour")?.value;
  const minute = parts.find((part) => part.type === "minute")?.value;

  return `${year}.${month}.${day} ${hour}:${minute}`;
}

export function formatKoreanShortDate(
  date = new Date(),
  timeZone = DEFAULT_TIME_ZONE
) {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone,
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
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
