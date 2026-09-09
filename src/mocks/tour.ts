import type { NearbyTourCategory, NearbyTourData } from "@/src/types/tour";

const nearbyTourCategories: NearbyTourCategory[] = [
  {
    id: "restaurant",
    label: "음식점",
  },
  {
    id: "attraction",
    label: "관광지",
  },
  {
    id: "cafe",
    label: "카페",
  },
];

const marketNearbyTourData = {
  1: {
    radiusKm: 5,
    categories: nearbyTourCategories,
    places: [
      {
        id: 101,
        name: "속초해수욕장",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "1.4km",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
        latitude: 38.1905,
        longitude: 128.6018,
        marker: {
          top: "32%",
          left: "42%",
        },
      },
      {
        id: 102,
        name: "청초호",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "1.8km",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
        latitude: 38.197,
        longitude: 128.5905,
        marker: {
          top: "54%",
          left: "61%",
        },
      },
      {
        id: 103,
        name: "속초 카페",
        category: "cafe",
        categoryLabel: "카페",
        distance: "0.9km",
        image:
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80",
        latitude: 38.195,
        longitude: 128.593,
        marker: {
          top: "68%",
          left: "31%",
        },
      },
    ],
  },

  2: {
    radiusKm: 5,
    categories: nearbyTourCategories,
    places: [
      {
        id: 201,
        name: "강릉 옹심이 칼국수",
        category: "restaurant",
        categoryLabel: "음식점",
        distance: "0.4km",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
        latitude: 37.7519,
        longitude: 128.8761,
        marker: {
          top: "26%",
          left: "62%",
        },
      },
      {
        id: 202,
        name: "월화거리",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "0.6km",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
        latitude: 37.7513,
        longitude: 128.8767,
        marker: {
          top: "57%",
          left: "20%",
        },
      },
      {
        id: 203,
        name: "강릉 카페거리",
        category: "cafe",
        categoryLabel: "카페",
        distance: "1.2km",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
        latitude: 37.7525,
        longitude: 128.879,
        marker: {
          top: "40%",
          left: "72%",
        },
      },
    ],
  },

  3: {
    radiusKm: 5,
    categories: nearbyTourCategories,
    places: [
      {
        id: 301,
        name: "낙산사",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "2.1km",
        image:
          "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=400&q=80",
        latitude: 38.125,
        longitude: 128.627,
        marker: {
          top: "27%",
          left: "41%",
        },
      },
      {
        id: 302,
        name: "양양 맛집",
        category: "restaurant",
        categoryLabel: "음식점",
        distance: "0.8km",
        image:
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80",
        latitude: 38.072,
        longitude: 128.625,
        marker: {
          top: "57%",
          left: "59%",
        },
      },
      {
        id: 303,
        name: "낙산 카페",
        category: "cafe",
        categoryLabel: "카페",
        distance: "1.3km",
        image:
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80",
        latitude: 38.122,
        longitude: 128.632,
        marker: {
          top: "35%",
          left: "79%",
        },
      },
    ],
  },

  4: {
    radiusKm: 5,
    categories: nearbyTourCategories,
    places: [
      {
        id: 401,
        name: "무릉별유천지",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "2.6km",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
        latitude: 37.518,
        longitude: 129.112,
        marker: {
          top: "31%",
          left: "40%",
        },
      },
      {
        id: 402,
        name: "동해 맛집",
        category: "restaurant",
        categoryLabel: "음식점",
        distance: "1.1km",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
        latitude: 37.52,
        longitude: 129.115,
        marker: {
          top: "57%",
          left: "59%",
        },
      },
      {
        id: 403,
        name: "동해 바다 카페",
        category: "cafe",
        categoryLabel: "카페",
        distance: "1.8km",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
        latitude: 37.51,
        longitude: 129.12,
        marker: {
          top: "30%",
          left: "80%",
        },
      },
    ],
  },
} satisfies Record<number, NearbyTourData>;

export const getMarketNearbyTourData = (marketId: number) => {
  return marketNearbyTourData[marketId as keyof typeof marketNearbyTourData];
};
