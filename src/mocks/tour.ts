export const mockTourData = {
  radiusKm: 5,

  categories: [
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
  ],

  places: [
    {
      id: 1,
      name: "아리랑식당",
      category: "restaurant",
      categoryLabel: "음식점",
      distance: "0.4km",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",

      latitude: 37.3798,
      longitude: 128.6608,

      marker: {
        top: "26%",
        left: "62%",
      },
    },
    {
      id: 2,
      name: "강릉 옹심이 칼국수",
      category: "restaurant",
      categoryLabel: "음식점",
      distance: "0.7km",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",

      latitude: 37.7519,
      longitude: 128.8761,

      marker: {
        top: "57%",
        left: "20%",
      },
    },
    {
      id: 3,
      name: "경포호",
      category: "attraction",
      categoryLabel: "관광지",
      distance: "1.2km",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",

      latitude: 37.7956,
      longitude: 128.8966,

      marker: {
        top: "40%",
        left: "72%",
      },
    },
  ],
};
