import { WEEKDAYS } from "@/src/constants/calendar";
import { getMockHomeMarketsByDate } from "@/src/mocks/calendar";
import type { CalendarDay } from "@/src/utils/calendar";

import HomeCalendarItem from "./HomeCalendarItem";
import type { CalendarView } from "../../_hooks/useCalendar";

interface HomeCalendarGridProps {
  view: CalendarView;
  days: CalendarDay[];
  selectedDate: string;
  onSelectDate: (date: Date, isoDate: string) => void;
}

export default function HomeCalendarGrid({
  view,
  days,
  selectedDate,
  onSelectDate,
}: HomeCalendarGridProps) {
  if (view === "week") {
    return (
      <div className="mt-2 grid grid-cols-7">
        {days.map((day, index) => (
          <HomeCalendarItem
            key={day.isoDate}
            weekday={WEEKDAYS[index]}
            date={day.date}
            isoDate={day.isoDate}
            isToday={day.isToday}
            isSelected={selectedDate === day.isoDate}
            hasMarket={getMockHomeMarketsByDate(day.isoDate).length > 0}
            onSelect={() => onSelectDate(day.value, day.isoDate)}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="mt-2 grid grid-cols-7">
        {WEEKDAYS.map((weekday) => (
          <span
            key={weekday}
            className="text-center text-xs font-semibold text-gray-500"
          >
            {weekday}
          </span>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-y-1">
        {days.map((day) => (
          <HomeCalendarItem
            key={day.isoDate}
            date={day.date}
            isoDate={day.isoDate}
            isToday={day.isToday}
            isSelected={selectedDate === day.isoDate}
            isCurrentMonth={day.isCurrentMonth}
            hasMarket={getMockHomeMarketsByDate(day.isoDate).length > 0}
            onSelect={() => onSelectDate(day.value, day.isoDate)}
          />
        ))}
      </div>
    </>
  );
}
