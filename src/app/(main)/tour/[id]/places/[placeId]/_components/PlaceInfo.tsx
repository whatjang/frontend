import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  CircleParking,
  Clock3,
  ExternalLink,
  Phone,
  Timer,
} from "lucide-react";
import type { ReactNode } from "react";

import type { NearbyPlaceDetail } from "@/src/types/tour/nearbyTour";

interface PlaceInfoProps {
  place: NearbyPlaceDetail;
}

function splitMultilineText(value: string) {
  return value
    .replace(/^-\s*/, "")
    .split(/\s+-\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function PlaceInfo({ place }: PlaceInfoProps) {
  const hasInfo =
    place.opening_hours ||
    place.rest_date ||
    place.parking ||
    place.use_time ||
    place.telephone ||
    place.reservation ||
    place.homepage;

  if (!hasInfo) {
    return null;
  }

  const openingHourItems = place.opening_hours
    ? splitMultilineText(place.opening_hours)
    : [];

  return (
    <section className="flex flex-col gap-2 px-5">
      <h2 className="text-green text-lg font-bold">장소 정보</h2>

      <div className="border-light-gray divide-light-gray flex flex-col divide-y rounded-3xl border bg-white px-4">
        {place.opening_hours && (
          <InfoRow
            icon={Clock3}
            label="운영시간"
            value={
              <div className="flex flex-col items-end gap-1">
                {openingHourItems.map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>
            }
          />
        )}

        {place.rest_date && (
          <InfoRow icon={CalendarDays} label="휴무일" value={place.rest_date} />
        )}

        {place.parking && (
          <InfoRow icon={CircleParking} label="주차" value={place.parking} />
        )}

        {place.use_time && (
          <InfoRow icon={Timer} label="이용시간" value={place.use_time} />
        )}

        {place.telephone && (
          <InfoRow
            icon={Phone}
            label="전화번호"
            value={
              <a
                href={`tel:${place.telephone}`}
                className="text-green font-semibold"
              >
                {place.telephone}
              </a>
            }
          />
        )}

        {place.reservation && (
          <InfoRow icon={CalendarDays} label="예약" value={place.reservation} />
        )}

        {place.homepage && (
          <InfoRow
            icon={ExternalLink}
            label="홈페이지"
            value={
              <a
                href={place.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green flex items-center gap-1 font-semibold"
              >
                바로가기
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            }
          />
        )}
      </div>
    </section>
  );
}

interface InfoRowProps {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
}

function InfoRow({ icon: Icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-2 py-4">
      <Icon
        size={18}
        strokeWidth={2}
        className="text-green shrink-0"
        aria-hidden="true"
      />

      <span className="text-green shrink-0 text-xs font-semibold">{label}</span>

      <div className="ml-auto min-w-0 text-right text-xs font-medium">
        {value}
      </div>
    </div>
  );
}
