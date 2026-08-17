import { Notice } from "@/src/types/notice";

export const mockNotices: Notice[] = [
  {
    id: 1,
    marketName: "속초 관광수산시장",
    type: "D-1",
    message: "내일은 속초 관광수산시장 장날이에요!",
    createdAt: "2026-05-08T00:00:00",
    isRead: false,
  },
  {
    id: 2,
    marketName: "정선 5일장",
    type: "D-Day",
    message: "오늘은 정선 5일장 장날이에요!",
    createdAt: "2026-05-07T08:30:00",
    isRead: false,
  },
  {
    id: 3,
    marketName: "춘천 풍물시장",
    type: "D-1",
    message: "내일은 춘천 풍물시장 장날이에요!",
    createdAt: "2026-05-06T09:00:00",
    isRead: true,
  },
];
