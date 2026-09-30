"use client";

import { MapPin, MapPinned } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import type { NearbyPlaceDetail } from "@/src/types/tour/nearbyTour";

interface IntroProps {
  place: NearbyPlaceDetail;
}

function formatDistance(distance: number) {
  if (distance < 1000) {
    return `${distance}m`;
  }

  return `${(distance / 1000).toFixed(1)}km`;
}

function normalizeImageUrl(url: string | undefined) {
  return url?.replace(/^http:\/\//, "https://") ?? null;
}

export default function Intro({ place }: IntroProps) {
  const [imageError, setImageError] = useState(false);

  const imageUrl = normalizeImageUrl(place.image_urls[0]);
  const showImage = Boolean(imageUrl) && !imageError;

  return (
    <section className="flex w-full flex-col gap-4 px-5">
      <div className="bg-light-gray relative flex h-60 w-full items-center justify-center overflow-hidden rounded-3xl">
        {showImage ? (
          <Image
            src={imageUrl!}
            alt={place.name}
            fill
            priority
            unoptimized
            onError={() => setImageError(true)}
            className="object-cover"
          />
        ) : (
          <MapPinned
            className="text-deep-gray/40 size-10"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-green text-xl font-bold">{place.name}</h1>

        {place.address && (
          <div className="flex items-start gap-1">
            <MapPin
              size={16}
              strokeWidth={2}
              className="text-green mt-0.5 shrink-0"
              aria-hidden="true"
            />

            <div className="text-deep-gray flex flex-col text-sm">
              <p className="font-bold">{place.address}</p>

              <p>시장에서 {formatDistance(place.distance_m)}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
