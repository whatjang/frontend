import type { LucideIcon } from "lucide-react";
import {
  Clock3,
  Ellipsis,
  ListFilter,
  Ticket,
  UsersRound,
  Utensils,
} from "lucide-react";

import { REPORT_TAGS } from "@/src/constants/report";
import type {
  ReportFeedCategory,
  ReportItemCategory,
  ReportTag,
} from "@/src/types/report";

export const REPORT_CATEGORY_ICONS = {
  혼잡도: UsersRound,
  "운영 여부": Clock3,
  "새로운 먹거리": Utensils,
  "이벤트/축제": Ticket,
  기타: Ellipsis,
} satisfies Record<ReportTag, LucideIcon>;

export const REPORT_CATEGORY_LABELS = {
  CROWD: "혼잡도",
  OPERATION: "운영 여부",
  NEW_FOOD: "새로운 먹거리",
  EVENT_FESTIVAL: "이벤트/축제",
  OTHER: "기타",
} satisfies Record<ReportItemCategory, ReportTag>;

const REPORT_FEED_CATEGORY_VALUES = {
  혼잡도: "CROWD",
  "운영 여부": "OPERATION",
  "새로운 먹거리": "NEW_FOOD",
  "이벤트/축제": "EVENT_FESTIVAL",
  기타: "OTHER",
} satisfies Record<ReportTag, ReportItemCategory>;

export const REPORT_FEED_CATEGORIES = [
  {
    value: "ALL" as const,
    label: "전체" as const,
    icon: ListFilter,
  },

  ...REPORT_TAGS.map((tag) => ({
    value: REPORT_FEED_CATEGORY_VALUES[tag],
    label: tag,
    icon: REPORT_CATEGORY_ICONS[tag],
  })),
] satisfies {
  value: ReportFeedCategory;
  label: "전체" | ReportTag;
  icon: LucideIcon;
}[];
