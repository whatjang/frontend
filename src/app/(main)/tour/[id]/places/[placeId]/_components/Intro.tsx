"use client";

import { MapPin, MapPinned } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { NearbyPlaceDetail } from "@/src/types/tour/nearbyTour";
import { formatDistance, normalizeTourImageUrl } from "@/src/utils/tour";

interface IntroProps {
  place: NearbyPlaceDetail;
}

const IMAGE_SLIDE_DELAY = 4000;

export default function Intro({ place }: IntroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const imageUrls = useMemo(
    () =>
      place.image_urls
        .map(normalizeTourImageUrl)
        .filter((url): url is string => Boolean(url))
        .filter((url) => !failedImages.includes(url)),
    [place.image_urls, failedImages]
  );

  const hasImage = imageUrls.length > 0;
  const hasMultipleImages = imageUrls.length > 1;

  const safeImageIndex = hasImage ? currentImageIndex % imageUrls.length : 0;

  useEffect(() => {
    if (!hasMultipleImages) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, IMAGE_SLIDE_DELAY);

    return () => window.clearInterval(interval);
  }, [hasMultipleImages, imageUrls.length]);

  const handleImageError = (imageUrl: string) => {
    setFailedImages((prev) => {
      if (prev.includes(imageUrl)) {
        return prev;
      }

      return [...prev, imageUrl];
    });
  };

  return (
    <section className="flex w-full flex-col gap-4 px-5">
      <div className="bg-light-gray relative h-60 w-full overflow-hidden rounded-3xl">
        {hasImage ? (
          <>
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${safeImageIndex * 100}%)`,
              }}
            >
              {imageUrls.map((imageUrl, index) => (
                <div key={imageUrl} className="relative h-full w-full shrink-0">
                  <Image
                    src={imageUrl}
                    alt={`${place.name} ${index + 1}`}
                    fill
                    priority={index === 0}
                    unoptimized
                    onError={() => handleImageError(imageUrl)}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {hasMultipleImages && (
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {imageUrls.map((imageUrl, index) => (
                  <span
                    key={imageUrl}
                    className={[
                      "size-1.5 rounded-full bg-white transition-opacity",
                      index === safeImageIndex ? "opacity-100" : "opacity-50",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <MapPinned
              className="text-deep-gray/40 size-10"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
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
