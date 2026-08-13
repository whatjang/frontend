"use client";

import Image from "next/image";

import { ExternalLink, Heart } from "lucide-react";
import { useState } from "react";

import type { TourPlace } from "@/src/types/tour";

interface PlaceItemProps {
  place: TourPlace;
  selected: boolean;
  onSelect: () => void;
  eager?: boolean;
}

export default function PlaceItem({
  place,
  selected,
  onSelect,
  eager = false,
}: PlaceItemProps) {
  const [liked, setLiked] = useState(false);

  const kakaoMapUrl = `https://map.kakao.com/link/map/${encodeURIComponent(
    place.name
  )},${place.latitude},${place.longitude}`;

  const handleLikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setLiked((prev) => !prev);
  };

  const handleMapClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <article
      id={`place-${place.id}`}
      onClick={onSelect}
      className={[
        "flex cursor-pointer items-center gap-4 rounded-2xl border bg-white p-3 shadow-xs transition",
        selected ? "border-green" : "border-light-gray shadow-light-gray",
      ].join(" ")}
    >
      <Image
        src={place.image}
        alt={place.name}
        width={84}
        height={84}
        loading={eager ? "eager" : "lazy"}
        className="size-21 shrink-0 rounded-xl object-cover"
      />

      <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-1">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-md min-w-0 truncate font-bold text-black">
              {place.name}
            </h2>

            <button
              type="button"
              aria-label={`${place.name} 찜하기`}
              onClick={handleLikeClick}
              className="flex size-5 shrink-0 cursor-pointer items-center justify-center"
            >
              <Heart
                className={
                  liked
                    ? "fill-green text-green size-5"
                    : "text-light-gray size-5"
                }
              />
            </button>
          </div>

          <span className="text-deep-gray text-xs">
            {place.categoryLabel} · {place.distance}
          </span>
        </div>

        <a
          href={kakaoMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleMapClick}
          className="text-green flex w-fit items-center gap-1 text-xs font-semibold whitespace-nowrap"
        >
          지도에서 보기
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </article>
  );
}
