import type { MarketTourRoute } from "@/src/types/marketTour";

export const marketTourRoutes: MarketTourRoute[] = [
  {
    marketId: 1,
    estimatedMinutes: 45,
    estimatedDistanceKm: 3.2,
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
        name: "아바이마을",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "2.3km",
        image:
          "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=400&q=80",

        latitude: 38.2027,
        longitude: 128.5961,

        marker: {
          top: "29%",
          left: "78%",
        },
      },
    ],
  },

  {
    marketId: 2,
    estimatedMinutes: 35,
    estimatedDistanceKm: 2.4,
    places: [
      {
        id: 201,
        name: "월화거리",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "0.4km",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",

        latitude: 37.7513,
        longitude: 128.8767,

        marker: {
          top: "34%",
          left: "39%",
        },
      },
      {
        id: 202,
        name: "강릉대도호부관아",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "0.8km",
        image:
          "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=400&q=80",

        latitude: 37.7528,
        longitude: 128.8789,

        marker: {
          top: "55%",
          left: "60%",
        },
      },
      {
        id: 203,
        name: "남대천",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "1.2km",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80",

        latitude: 37.7465,
        longitude: 128.8755,

        marker: {
          top: "31%",
          left: "79%",
        },
      },
    ],
  },

  {
    marketId: 3,
    estimatedMinutes: 55,
    estimatedDistanceKm: 4.1,
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
        name: "양양 남대천",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "1.5km",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",

        latitude: 38.072,
        longitude: 128.625,

        marker: {
          top: "57%",
          left: "59%",
        },
      },
      {
        id: 303,
        name: "낙산해수욕장",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "2.8km",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",

        latitude: 38.122,
        longitude: 128.632,

        marker: {
          top: "35%",
          left: "79%",
        },
      },
    ],
  },

  {
    marketId: 4,
    estimatedMinutes: 65,
    estimatedDistanceKm: 5.3,
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
        name: "추암해변",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "3.4km",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",

        latitude: 37.479,
        longitude: 129.159,

        marker: {
          top: "57%",
          left: "59%",
        },
      },
      {
        id: 403,
        name: "천곡황금박쥐동굴",
        category: "attraction",
        categoryLabel: "관광지",
        distance: "4.1km",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",

        latitude: 37.522,
        longitude: 129.114,

        marker: {
          top: "30%",
          left: "80%",
        },
      },
    ],
  },
];

export const getMarketTourRoute = (marketId: number) => {
  return marketTourRoutes.find((route) => route.marketId === marketId);
};
