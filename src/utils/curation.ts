export function formatGrowthRate(rate: number | null) {
  if (rate === null) {
    return "-";
  }

  return `${rate > 0 ? "+" : ""}${rate}%`;
}
