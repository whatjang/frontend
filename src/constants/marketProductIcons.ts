import type { LucideIcon } from "lucide-react";
import {
  Beef,
  Fish,
  Footprints,
  House,
  Package,
  Shirt,
  Store,
  Utensils,
  Wheat,
} from "lucide-react";

export const PRODUCT_ICONS: Record<string, LucideIcon> = {
  농산물: Wheat,
  축산물: Beef,
  수산물: Fish,
  가공식품: Package,
  의류: Shirt,
  신발: Footprints,
  가정용품: House,
  음식점: Utensils,
  근린생활서비스: Store,
};

export const DEFAULT_PRODUCT_ICON = Package;
