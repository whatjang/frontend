"use client";

import { useMemo } from "react";

import { useCurrentLocation } from "@/src/hooks/location/useCurrentLocation";

import { useCalendar } from "../../_hooks/useCalendar";
import {
  type CalendarMonth,
  useMarketCalendars,
} from "../../_hooks/useMarketCalendars";
import { useMarketsOpenOn } from "../../_hooks/useMarketsOpenOn";
import HomeCalendarControls from "./HomeCalendarControls";
import HomeCalendarGrid from "./HomeCalendarGrid";
import HomeCalendarMarketList from "./HomeCalendarMarketList";

export default function HomeCalendarList() {
  const {
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
  } = useCalendar();

  const { coordinates } = useCurrentLocation();

  const visibleMonths = useMemo<CalendarMonth[]>(() => {
    if (view === "month") {
      return [{ year, month }];
    }

    const months = new Map<string, CalendarMonth>();

    calendarDays.forEach((day) => {
      const dayYear = day.value.getUTCFullYear();
      const dayMonth = day.value.getUTCMonth() + 1;

      months.set(`${dayYear}-${dayMonth}`, {
        year: dayYear,
        month: dayMonth,
      });
    });

    return Array.from(months.values());
  }, [calendarDays, month, view, year]);

  const calendarQueries = useMarketCalendars(visibleMonths);

  const marketCountByDate = useMemo(() => {
    const map = new Map<string, number>();

    calendarQueries.forEach(({ data }) => {
      data?.open_dates.forEach(({ date, market_count }) => {
        map.set(date, market_count);
      });
    });

    return map;
  }, [calendarQueries]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
    isPlaceholderData,
  } = useMarketsOpenOn({
    date: selectedDate,
    coordinates,
  });

  const markets = data?.pages.flatMap((page) => page.markets) ?? [];
  const totalCount = data?.pages[0]?.total_count ?? 0;

  return (
    <section aria-labelledby="home-calendar-title" className="px-5">
      <div className="shadow-green/15 rounded-3xl bg-white/55 p-5 shadow-lg backdrop-blur-md">
        <HomeCalendarControls
          view={view}
          periodLabel={periodLabel}
          onChangeView={setView}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        <HomeCalendarGrid
          view={view}
          days={calendarDays}
          selectedDate={selectedDate}
          marketCountByDate={marketCountByDate}
          onSelectDate={handleSelectDate}
        />
      </div>

      <HomeCalendarMarketList
        selectedDate={selectedDate}
        markets={markets}
        totalCount={totalCount}
        isPending={isPending}
        isFetchingNextPage={isFetchingNextPage}
        hasNext={Boolean(hasNextPage && !isPlaceholderData)}
        onLoadMore={() => void fetchNextPage()}
      />
    </section>
  );
}
