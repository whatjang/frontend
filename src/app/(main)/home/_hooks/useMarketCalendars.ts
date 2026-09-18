"use client";

import { useQueries } from "@tanstack/react-query";

import { getMonthlyMarketCalendar } from "@/src/lib/api/market/calendar";

export interface CalendarMonth {
  year: number;
  month: number;
}

export function useMarketCalendars(months: CalendarMonth[]) {
  return useQueries({
    queries: months.map(({ year, month }) => ({
      queryKey: ["market-calendar", year, month],
      queryFn: async () => {
        const response = await getMonthlyMarketCalendar({
          year,
          month,
        });

        return response.result;
      },
    })),
  });
}
