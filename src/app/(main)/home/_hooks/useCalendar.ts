import { useMemo, useState } from "react";

import {
  addDays,
  formatIsoDate,
  getMonthCalendarDays,
  getToday,
  getWeekCalendarDays,
} from "@/src/utils/calendar";

export type CalendarView = "month" | "week";

export function useCalendar() {
  const [view, setView] = useState<CalendarView>("week");
  const [cursorDate, setCursorDate] = useState(() => getToday());
  const [selectedDate, setSelectedDate] = useState(() =>
    formatIsoDate(getToday())
  );

  const year = cursorDate.getUTCFullYear();
  const month = cursorDate.getUTCMonth() + 1;

  const calendarDays = useMemo(() => {
    if (view === "month") {
      return getMonthCalendarDays(year, month, {
        weekStartsOn: 1,
      });
    }

    return getWeekCalendarDays(cursorDate, {
      weekStartsOn: 1,
    });
  }, [cursorDate, month, view, year]);

  const periodLabel = `${year}년 ${month}월`;

  const handlePrev = () => {
    setCursorDate((prev) => {
      if (view === "week") {
        return addDays(prev, -7);
      }

      return new Date(
        Date.UTC(prev.getUTCFullYear(), prev.getUTCMonth() - 1, 1)
      );
    });
  };

  const handleNext = () => {
    setCursorDate((prev) => {
      if (view === "week") {
        return addDays(prev, 7);
      }

      return new Date(
        Date.UTC(prev.getUTCFullYear(), prev.getUTCMonth() + 1, 1)
      );
    });
  };

  const handleSelectDate = (date: Date, isoDate: string) => {
    setSelectedDate(isoDate);
    setCursorDate(date);
  };

  return {
    view,
    setView,
    year,
    month,
    calendarDays,
    selectedDate,
    periodLabel,
    handlePrev,
    handleNext,
    handleSelectDate,
  };
}
