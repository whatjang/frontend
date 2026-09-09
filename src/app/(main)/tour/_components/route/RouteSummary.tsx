interface RouteSummaryProps {
  estimatedMinutes: number;
  estimatedDistanceKm: number;
}

export default function RouteSummary({
  estimatedMinutes,
  estimatedDistanceKm,
}: RouteSummaryProps) {
  return (
    <aside
      aria-label="추천 동선 요약"
      className="border-light-gray flex items-center justify-between rounded-2xl border bg-white p-3"
    >
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold">
          도보 약 {estimatedMinutes}분 소요
        </p>

        <p className="text-deep-gray text-xs">총 {estimatedDistanceKm}km</p>
      </div>

      <span className="bg-green rounded-full px-4 py-2 text-xs font-bold text-white">
        추천 동선
      </span>
    </aside>
  );
}
