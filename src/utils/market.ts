export function formatMarketDay(openDayNumbers: number[]) {
  return openDayNumbers.length > 0
    ? `${openDayNumbers.join("·")}일 장`
    : "상설장";
}
