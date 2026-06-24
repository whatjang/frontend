import type { MetadataRoute } from "next";
import { COLORS } from "@/src/constants/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "왓장 - 강원 장날 여행",
    short_name: "왓장",
    description:
      "강원도 오일장과 전통 장터의 장날, 먹거리, 특산품, 주변 관광 동선을 한 번에 확인하는 로컬 장터 여행 서비스입니다.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: COLORS.white,
    theme_color: COLORS.green,
    lang: "ko-KR",
    categories: ["travel", "food", "navigation", "lifestyle"],
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
