import { useMemo, useState } from "react";

import { getMockHomeMarketsByDate } from "@/src/mocks/calendar";
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

  const calendarDays = useMemo(() => {
    if (view === "month") {
      return getMonthCalendarDays(
        cursorDate.getUTCFullYear(),
        cursorDate.getUTCMonth() + 1,
        {
          weekStartsOn: 1,
        }
      );
    }

    return getWeekCalendarDays(cursorDate, {
      weekStartsOn: 1,
    });
  }, [cursorDate, view]);

  const selectedMarkets = useMemo(
    () => getMockHomeMarketsByDate(selectedDate),
    [selectedDate]
  );

  const periodLabel = `${cursorDate.getUTCFullYear()}년 ${
    cursorDate.getUTCMonth() + 1
  }월`;

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
    calendarDays,
    selectedDate,
    selectedMarkets,
    periodLabel,
    handlePrev,
    handleNext,
    handleSelectDate,
  };
}
