export type NoticeType = "D-1" | "D-Day";

export interface Notice {
  id: number;
  marketName: string;
  type: NoticeType;
  message: string;
  createdAt: string;
  isRead: boolean;
}
