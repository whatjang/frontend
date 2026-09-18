import { WEEKDAYS } from "@/src/constants/calendar";
import type { CalendarDay } from "@/src/utils/calendar";

import type { CalendarView } from "../../_hooks/useCalendar";
import HomeCalendarItem from "./HomeCalendarItem";

interface HomeCalendarGridProps {
  view: CalendarView;
  days: CalendarDay[];
  selectedDate: string;
  marketCountByDate: Map<string, number>;
  onSelectDate: (date: Date, isoDate: string) => void;
}

export default function HomeCalendarGrid({
  view,
  days,
  selectedDate,
  marketCountByDate,
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
            hasMarket={(marketCountByDate.get(day.isoDate) ?? 0) > 0}
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
            hasMarket={(marketCountByDate.get(day.isoDate) ?? 0) > 0}
            onSelect={() => onSelectDate(day.value, day.isoDate)}
          />
        ))}
      </div>
    </>
  );
}
