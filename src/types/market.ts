export type MarketSpecialtyIcon =
  "seafood" | "fried-chicken" | "vegetable" | "meat" | "fruit" | "food";

export interface MarketSpecialty {
  label: string;
  icon: MarketSpecialtyIcon;
}

export interface Market {
  id: number;
  name: string;
  address: string;
  marketDays: number[];
  distanceKm: number;
  isOpenToday: boolean;
  specialties: MarketSpecialty[];
}
