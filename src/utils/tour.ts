export function formatDistance(distance: number) {
  if (distance < 1000) {
    return `${distance}m`;
  }

  return `${(distance / 1000).toFixed(1)}km`;
}

export function normalizeTourImageUrl(url: string | null | undefined) {
  return url?.replace(/^http:\/\//, "https://") ?? null;
}
