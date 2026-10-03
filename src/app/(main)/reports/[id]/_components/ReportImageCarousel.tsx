"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { getReportImageUrl } from "@/src/utils/report";

interface ReportImageCarouselProps {
  imageUrls: string[];
}

export default function ReportImageCarousel({
  imageUrls,
}: ReportImageCarouselProps) {
  const images = imageUrls
    .map(getReportImageUrl)
    .filter((url): url is string => Boolean(url));

  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const hasMultipleImages = images.length > 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div
        className="bg-light-gray aspect-4/3 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url("${images[currentIndex]}")`,
        }}
      />

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="이전 이미지"
            className="absolute top-1/2 left-3 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-md backdrop-blur-sm disabled:opacity-30"
          >
            <ChevronLeft size={15} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            aria-label="다음 이미지"
            className="absolute top-1/2 right-3 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-md backdrop-blur-sm disabled:opacity-30"
          >
            <ChevronRight size={15} />
          </button>

          <div className="absolute right-3 bottom-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
