export interface MapCoordinates {
  latitude: number;
  longitude: number;
}

export interface MapMarkerItem extends MapCoordinates {
  id: string | number;
  title?: string;
  description?: string;
}
