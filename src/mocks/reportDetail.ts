import type { ReportDetail } from "../types/report";

type ReportDetailMock = Pick<
  ReportDetail,
  "isBookmarked" | "helpfulCount" | "incorrectCount" | "comments"
>;

export const reportDetailMocks: Record<number, ReportDetailMock> = {
  101: {
    isBookmarked: false,
    helpfulCount: 9,
    incorrectCount: 0,

    comments: [
      {
        id: 1,
        author: {
          id: 2,
          nickname: "속초댁",
          profileImage: "/images/profile2.jpg",
        },
        createdAt: "5분 전",
        content:
          "좋은 정보 감사합니다! 주차장 정보 덕분에 편하게 방문할 수 있을 것 같아요.",
        likeCount: 2,
      },
    ],
  },

  102: {
    isBookmarked: true,
    helpfulCount: 15,
    incorrectCount: 1,

    comments: [
      {
        id: 1,
        author: {
          id: 3,
          nickname: "바다여행자",
        },
        createdAt: "3분 전",
        content: "오전 방문이 확실히 한산해서 좋더라고요.",
        likeCount: 1,
      },
      {
        id: 2,
        author: {
          id: 4,
          nickname: "시장나들이",
        },
        createdAt: "7분 전",
        content: "좋은 팁 감사합니다!",
        likeCount: 0,
      },
      {
        id: 3,
        author: {
          id: 5,
          nickname: "속초여행",
        },
        createdAt: "12분 전",
        content: "저도 다음에는 오전에 가봐야겠어요.",
        likeCount: 0,
      },
    ],
  },

  201: {
    isBookmarked: true,
    helpfulCount: 24,
    incorrectCount: 2,

    comments: [
      {
        id: 1,
        author: {
          id: 2,
          nickname: "속초댁",
          profileImage: "/images/profile2.jpg",
        },
        createdAt: "5분 전",
        content:
          "좋은 정보 감사합니다! 덕분에 주차 걱정했는데 둔치 주차장으로 바로 가야겠네요.",
        likeCount: 2,
      },
      {
        id: 2,
        author: {
          id: 1,
          nickname: "강릉토박이",
        },
        createdAt: "방금 전",
        content: "네, 둔치 주차장이 훨씬 쾌적해요! 즐거운 시장 나들이 되세요.",
        likeCount: 0,
      },
      {
        id: 3,
        author: {
          id: 3,
          nickname: "시장내비",
        },
        createdAt: "8분 전",
        content:
          "지금 시장 안은 많이 붐비나요? 아이랑 같이 가려는데 유모차 끌기 괜찮을지 궁금해요.",
        likeCount: 0,
      },
    ],
  },

  202: {
    isBookmarked: false,
    helpfulCount: 12,
    incorrectCount: 1,
    comments: [],
  },

  301: {
    isBookmarked: false,
    helpfulCount: 7,
    incorrectCount: 0,
    comments: [],
  },

  401: {
    isBookmarked: false,
    helpfulCount: 4,
    incorrectCount: 0,
    comments: [],
  },
};

export const getReportDetailMockById = (id: number) => {
  return reportDetailMocks[id];
};
