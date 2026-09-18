"use client";

import { ExternalLink, Heart, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import type { NearbyPlace } from "@/src/types/tour";

interface TourPlaceItemProps {
  place: NearbyPlace;
  selected?: boolean;
  onSelect?: () => void;
  liked?: boolean;
  onLikeToggle?: () => void;
  eager?: boolean;
}

const CATEGORY_LABEL = {
  RESTAURANT: "음식점",
  TOURIST_ATTRACTION: "관광지",
  CAFE: "카페",
} as const;

export default function TourPlaceItem({
  place,
  selected = false,
  onSelect,
  liked: controlledLiked,
  onLikeToggle,
  eager = false,
}: TourPlaceItemProps) {
  const [internalLiked, setInternalLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const liked = controlledLiked ?? internalLiked;

  const handleLikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (onLikeToggle) {
      onLikeToggle();
      return;
    }

    setInternalLiked((prev) => !prev);
  };

  const handleMapClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!onSelect || event.target !== event.currentTarget) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect();
    }
  };

  const showImage = place.thumbnail_url && !imageError;

  return (
    <article
      id={`place-${place.place_id}`}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={onSelect ? 0 : undefined}
      className={[
        "flex items-center gap-4 rounded-2xl border bg-white p-3 shadow-xs transition",
        onSelect
          ? "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
          : "",
        selected ? "border-green" : "border-light-gray shadow-light-gray",
      ].join(" ")}
    >
      {showImage ? (
        <Image
          src={place.thumbnail_url!}
          alt={place.name}
          width={84}
          height={84}
          loading={eager ? "eager" : "lazy"}
          onError={() => setImageError(true)}
          className="size-21 shrink-0 rounded-xl object-cover"
        />
      ) : (
        <div className="bg-light-green text-green flex size-21 shrink-0 items-center justify-center rounded-xl">
          <ImageIcon className="size-6" />
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-1">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2">
            <h2 className="min-w-0 truncate text-sm font-bold text-black">
              {place.name}
            </h2>

            <button
              type="button"
              aria-label={
                liked ? `${place.name} 찜 해제` : `${place.name} 찜하기`
              }
              aria-pressed={liked}
              onClick={handleLikeClick}
              className="flex size-5 shrink-0 cursor-pointer items-center justify-center"
            >
              <Heart
                aria-hidden="true"
                className={
                  liked
                    ? "fill-green text-green size-5"
                    : "text-light-gray size-5"
                }
              />
            </button>
          </div>

          <span className="text-deep-gray text-xs">
            {CATEGORY_LABEL[place.category]} · {place.distance_m}m
          </span>
        </div>

        {place.place_url && (
          <a
            href={place.place_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMapClick}
            className="text-green flex w-fit items-center gap-1 text-xs font-semibold whitespace-nowrap"
          >
            지도에서 보기
            <ExternalLink aria-hidden="true" className="size-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
