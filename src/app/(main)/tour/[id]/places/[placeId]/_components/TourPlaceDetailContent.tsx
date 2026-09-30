import type { NearbyPlaceDetail } from "@/src/types/tour/nearbyTour";

import Intro from "./Intro";
import MenuInfo from "./MenuInfo";
import Overview from "./Overview";
import PlaceInfo from "./PlaceInfo";

interface TourPlaceDetailContentProps {
  marketId: number;
  placeId: string;
}

const MOCK_PLACE: NearbyPlaceDetail = {
  market_id: 1,
  place_id: "126508",
  source: "TOUR_API",
  name: "아리랑식당",
  address: "강원특별자치도 강릉시 금성로 21",
  telephone: "033-123-4567",
  homepage: "https://example.com",
  overview:
    "강릉중앙시장 인근에 위치한 음식점입니다. 지역의 특색 있는 음식을 편하게 즐길 수 있습니다.",
  image_urls: [
    "https://tong.visitkorea.or.kr/cms/resource/01/1234501_image2_1.jpg",
  ],
  latitude: 37.754,
  longitude: 128.879,
  distance_m: 400,
  opening_hours: "10:00~20:00",
  rest_date: "매주 월요일",
  parking: "주차 가능",
  use_time: "09:00~18:00",
  representative_menu: "장칼국수",
  treat_menu: "장칼국수, 감자옹심이",
  reservation: "전화 예약 가능",
  source_notice: "출처: ⓒ한국관광공사",
};

export default function TourPlaceDetailContent({
  marketId,
  placeId,
}: TourPlaceDetailContentProps) {
  const place: NearbyPlaceDetail = {
    ...MOCK_PLACE,
    market_id: marketId,
    place_id: placeId,
  };

  return (
    <main className="flex flex-col gap-8">
      <Intro place={place} />

      {place.overview && <Overview overview={place.overview} />}

      <PlaceInfo place={place} />

      <MenuInfo
        representativeMenu={place.representative_menu}
        treatMenu={place.treat_menu}
      />

      <p className="text-deep-gray px-5 text-right text-xs">
        {place.source_notice}
      </p>
    </main>
  );
}
