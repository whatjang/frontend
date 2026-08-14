import type { ReportSummary } from "./report";

export type MarketSpecialtyIcon =
  "seafood" | "fried-chicken" | "vegetable" | "meat" | "fruit" | "food";

export type MarketFacilityIcon =
  "parking" | "restroom" | "wheelchair" | "nursing-room";

export type MarketType = "상설시장" | "오일장" | "상설·오일장";

export interface MarketSpecialty {
  id: number;
  label: string;
  icon: MarketSpecialtyIcon;
  description?: string;
  imageUrl?: string;
}

export interface MarketFacility {
  id: number;
  label: string;
  icon: MarketFacilityIcon;
  available: boolean;
}

export interface MarketLocation {
  latitude: number;
  longitude: number;
}

export interface MarketReport extends ReportSummary {
  author: string;
}

export interface Market {
  id: number;
  name: string;
  address: string;
  description: string;
  imageUrl: string;

  marketType: MarketType;
  marketDays: number[];
  openingHours: string;
  phone: string;
  notice?: string;

  distanceKm: number;
  isOpenToday: boolean;
  isFavorite: boolean;

  location: MarketLocation;
  facilities: MarketFacility[];
  specialties: MarketSpecialty[];
  reports: MarketReport[];
  nearbyAttractions: string[];
}
