interface HomeCalendarItemProps {
  weekday: string;
  date: number;
  isoDate: string;
  isToday: boolean;
}

export default function HomeCalendarItem({
  weekday,
  date,
  isoDate,
  isToday,
}: HomeCalendarItemProps) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-3">
      <span
        className={`text-xs font-semibold ${
          isToday ? "text-green" : "text-gray"
        }`}
      >
        {weekday}
      </span>

      <time
        dateTime={isoDate}
        aria-current={isToday ? "date" : undefined}
        className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ${
          isToday
            ? "bg-green shadow-green/35 text-white shadow-lg"
            : "text-green/60"
        }`}
      >
        {date}
      </time>
    </div>
  );
}
