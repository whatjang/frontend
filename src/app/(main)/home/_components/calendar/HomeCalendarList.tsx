"use client";

import { useCalendar } from "../../_hooks/useCalendar";
import HomeCalendarControls from "./HomeCalendarControls";
import HomeCalendarGrid from "./HomeCalendarGrid";
import HomeCalendarMarketList from "./HomeCalendarMarketList";

export default function HomeCalendarList() {
  const {
    view,
    setView,
    calendarDays,
    selectedDate,
    selectedMarkets,
    periodLabel,
    handlePrev,
    handleNext,
    handleSelectDate,
  } = useCalendar();

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
          onSelectDate={handleSelectDate}
        />
      </div>

      <HomeCalendarMarketList
        selectedDate={selectedDate}
        markets={selectedMarkets}
      />
    </section>
  );
}
