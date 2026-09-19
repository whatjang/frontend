"use client";

import { ExternalLink, ImageIcon, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { TOUR_CATEGORY_LABELS } from "@/src/constants/tour";
import type { NearbyPlace } from "@/src/types/tour";

interface TourPlaceItemProps {
  place: NearbyPlace;
  selected?: boolean;
  onSelect?: () => void;
  eager?: boolean;
}

function formatDistance(distance: number) {
  if (distance < 1000) {
    return `${distance}m`;
  }

  return `${(distance / 1000).toFixed(1)}km`;
}

export default function TourPlaceItem({
  place,
  selected = false,
  onSelect,
  eager = false,
}: TourPlaceItemProps) {
  const [imageError, setImageError] = useState(false);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!onSelect || event.target !== event.currentTarget) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect();
    }
  };

  const showImage = Boolean(place.thumbnail_url) && !imageError;

  return (
    <article
      id={`place-${place.place_id}`}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={onSelect ? 0 : undefined}
      className={[
        "flex gap-3 rounded-2xl border bg-white p-3 shadow-xs transition",
        onSelect
          ? "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
          : "",
        selected
          ? "border-green bg-light-green/20"
          : "border-light-gray shadow-light-gray",
      ].join(" ")}
    >
      <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
        {showImage ? (
          <Image
            src={place.thumbnail_url!}
            alt={place.name}
            fill
            sizes="80px"
            loading={eager ? "eager" : "lazy"}
            onError={() => setImageError(true)}
            className="object-cover"
          />
        ) : (
          <div className="bg-light-green text-green flex h-full w-full items-center justify-center">
            <ImageIcon className="size-6" />
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h2 className="text-sm font-bold text-black">{place.name}</h2>

        <div className="flex items-center gap-2">
          <span className="bg-light-green text-green rounded-md px-2 py-1 text-xs font-semibold">
            {TOUR_CATEGORY_LABELS[place.category]}
          </span>

          <span className="text-deep-gray text-xs font-medium">
            {formatDistance(place.distance_m)}
          </span>
        </div>

        {place.address && (
          <div className="text-deep-gray flex items-start gap-1 text-xs">
            <MapPin className="mt-1 size-3 shrink-0" />
            <span className="line-clamp-2 leading-5">{place.address}</span>
          </div>
        )}

        {place.telephone && (
          <div className="text-deep-gray flex items-center gap-1 text-xs">
            <Phone className="size-3 shrink-0" />
            <span>{place.telephone}</span>
          </div>
        )}

        {place.place_url && (
          <a
            href={place.place_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="text-green mt-1 flex w-fit items-center gap-1 text-xs font-semibold"
          >
            카카오맵에서 보기
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
