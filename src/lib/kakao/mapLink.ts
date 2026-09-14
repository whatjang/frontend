import type { MapCoordinates } from "@/src/types/map";

interface KakaoMapDestination extends MapCoordinates {
  name: string;
}

interface BuildKakaoDirectionsUrlParams {
  destination: KakaoMapDestination;
  origin?: KakaoMapDestination;
}

export function buildKakaoDirectionsUrl({
  destination,
  origin,
}: BuildKakaoDirectionsUrlParams) {
  const destinationName = encodeURIComponent(destination.name);

  const destinationPath =
    `${destinationName},` +
    `${destination.latitude},` +
    `${destination.longitude}`;

  if (!origin) {
    return `https://map.kakao.com/link/to/${destinationPath}`;
  }

  const originName = encodeURIComponent(origin.name);

  const originPath =
    `${originName},` + `${origin.latitude},` + `${origin.longitude}`;

  return `https://map.kakao.com/link/from/${originPath}/to/${destinationPath}`;
}
