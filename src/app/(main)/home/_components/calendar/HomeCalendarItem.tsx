interface HomeCalendarItemProps {
  weekday?: string;
  date: number;
  isoDate: string;
  isToday: boolean;
  isSelected: boolean;
  isCurrentMonth?: boolean;
  hasMarket?: boolean;
  onSelect: () => void;
}

export default function HomeCalendarItem({
  weekday,
  date,
  isoDate,
  isToday,
  isSelected,
  isCurrentMonth = true,
  hasMarket = false,
  onSelect,
}: HomeCalendarItemProps) {
  return (
    <button
      type="button"
      aria-label={`${isoDate} 장날 확인`}
      aria-pressed={isSelected}
      onClick={onSelect}
      className="flex min-w-0 flex-col items-center gap-1"
    >
      {weekday && (
        <span
          className={`text-xs font-semibold ${
            isToday || isSelected ? "text-green" : "text-gray"
          }`}
        >
          {weekday}
        </span>
      )}

      <time
        dateTime={isoDate}
        aria-current={isToday ? "date" : undefined}
        className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xs font-semibold transition ${
          isSelected
            ? "bg-green shadow-green/30 text-white shadow-lg"
            : isToday
              ? "text-green ring-green/30 ring-1"
              : isCurrentMonth
                ? "text-green/60"
                : "text-gray-300"
        }`}
      >
        {date}
      </time>

      <span
        aria-hidden="true"
        className={`h-1 w-1 rounded-full ${
          hasMarket && !isSelected ? "bg-green" : "bg-transparent"
        }`}
      />
    </button>
  );
}
