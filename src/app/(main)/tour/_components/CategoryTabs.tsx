import type { TourCategory } from "@/src/types/tour";

interface CategoryTabsProps {
  categories: TourCategory[];
  selectedCategory: string;
  onChange: (categoryId: string) => void;
}

export default function CategoryTabs({
  categories,
  selectedCategory,
  onChange,
}: CategoryTabsProps) {
  return (
    <div className="flex items-center gap-1">
      {categories.map((category) => {
        const isSelected = selectedCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
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
