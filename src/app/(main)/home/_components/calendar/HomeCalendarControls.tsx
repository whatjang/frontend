import { ChevronLeft, ChevronRight } from "lucide-react";

import type { CalendarView } from "../../_hooks/useCalendar";

interface HomeCalendarControlsProps {
  view: CalendarView;
  periodLabel: string;
  onChangeView: (view: CalendarView) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function HomeCalendarControls({
  view,
  periodLabel,
  onChangeView,
  onPrev,
  onNext,
}: HomeCalendarControlsProps) {
  return (
    <>
      <header className="flex items-center justify-between">
        <h2 id="home-calendar-title" className="text-green text-md font-bold">
          장날 캘린더
        </h2>

        <div className="bg-light-gray/40 flex rounded-lg p-0.5">
          <button
            type="button"
            aria-pressed={view === "month"}
            onClick={() => onChangeView("month")}
            className={`cursor-pointer rounded-md px-2 py-1 text-xs font-semibold transition ${
              view === "month"
                ? "bg-white text-black shadow-sm"
                : "text-deep-gray"
            }`}
          >
            월간
          </button>

          <button
            type="button"
            aria-pressed={view === "week"}
            onClick={() => onChangeView("week")}
            className={`cursor-pointer rounded-md px-2 py-1 text-xs font-semibold transition ${
              view === "week"
                ? "bg-white text-black shadow-sm"
                : "text-deep-gray"
            }`}
          >
            주간
          </button>
        </div>
      </header>

      <div className="mt-2 flex items-center justify-center gap-1">
        <button
          type="button"
          aria-label={view === "month" ? "이전 달" : "이전 주"}
          onClick={onPrev}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>

        <strong className="min-w-24 text-center text-sm">{periodLabel}</strong>

        <button
          type="button"
          aria-label={view === "month" ? "다음 달" : "다음 주"}
          onClick={onNext}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
