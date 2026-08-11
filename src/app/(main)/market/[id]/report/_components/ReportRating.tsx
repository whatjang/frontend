"use client";

import { Star } from "lucide-react";

interface ReportRatingProps {
  value: number;
  onChange: (rating: number) => void;
}

const MAX_RATING = 5;

export default function ReportRating({ value, onChange }: ReportRatingProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-deep-gray text-sm font-semibold">별점</p>

      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {Array.from({ length: MAX_RATING }, (_, index) => {
            const rating = index + 1;
            const isSelected = rating <= value;

            return (
              <button
                key={rating}
                type="button"
                aria-label={`${rating}점`}
                aria-pressed={value === rating}
                onClick={() => onChange(rating)}
                className="cursor-pointer"
              >
                <Star
                  size={28}
                  className={
                    isSelected ? "fill-green text-green" : "text-light-gray"
                  }
                />
              </button>
            );
          })}
        </div>

        {value > 0 && (
          <span className="text-deep-gray text-sm font-medium">{value}.0</span>
        )}
      </div>
    </div>
  );
}
