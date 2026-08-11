"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { WEEKDAYS } from "@/src/constants/calendar";
import {
  type CalendarDay,
  getCurrentWeekCalendarDays,
} from "@/src/utils/calendar";

import HomeCalendarItem from "./HomeCalendarItem";

export default function HomeCalendarList() {
  const [week] = useState<CalendarDay[]>(() =>
    getCurrentWeekCalendarDays({
      weekStartsOn: 1,
    })
  );

  return (
    <section
      aria-labelledby="home-calendar-title"
      className="shadow-green/15 mx-5 rounded-3xl bg-white/55 p-6 shadow-lg backdrop-blur-md"
    >
      <header className="flex items-center justify-between">
        <h2 id="home-calendar-title" className="text-green text-lg font-bold">
          장날 캘린더
        </h2>

        <Link
          href="/search"
          className="text-green flex items-center text-xs font-semibold"
        >
          <span>전체</span>

          <ChevronRight
            aria-hidden="true"
            className="h-4 w-4"
            strokeWidth={2}
          />
        </Link>
      </header>

      <div className="mt-4 grid grid-cols-7">
        {WEEKDAYS.map((weekday, index) => {
          const day = week[index];

          return (
            <HomeCalendarItem
              key={day.isoDate}
              weekday={weekday}
              date={day.date}
              isoDate={day.isoDate}
              isToday={day.isToday}
            />
          );
        })}
      </div>
    </section>
  );
}
