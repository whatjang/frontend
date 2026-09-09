import type { NearbyTourCategory, TourCategoryId } from "@/src/types/tour";

interface TourCategoryFilterProps {
  categories: NearbyTourCategory[];
  selectedCategory: TourCategoryId | "";
  onChange: (categoryId: TourCategoryId) => void;
}

export default function TourCategoryFilter({
  categories,
  selectedCategory,
  onChange,
}: TourCategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="주변 장소 카테고리"
      className="flex items-center gap-1"
    >
      {categories.map((category) => {
        const isSelected = selectedCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(category.id)}
            className={[
              "cursor-pointer rounded-full px-5 py-2 text-xs font-semibold transition",
              isSelected
                ? "bg-green text-white"
                : "bg-light-gray text-deep-gray",
            ].join(" ")}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
