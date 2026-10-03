import type { LucideIcon } from "lucide-react";
import {
  Clock3,
  Ellipsis,
  ListFilter,
  Ticket,
  UsersRound,
  Utensils,
} from "lucide-react";

import { REPORT_CATEGORY_MAP, REPORT_TAGS } from "@/src/constants/report";
import type { ReportFeedCategory, ReportTag } from "@/src/types/report";

export const REPORT_CATEGORY_ICONS = {
  혼잡도: UsersRound,
  "운영 여부": Clock3,
  "새로운 먹거리": Utensils,
  "이벤트/축제": Ticket,
  기타: Ellipsis,
} satisfies Record<ReportTag, LucideIcon>;

export const REPORT_FEED_CATEGORIES = [
  {
    value: "ALL" as const,
    label: "전체" as const,
    icon: ListFilter,
  },

  ...REPORT_TAGS.map((tag) => ({
    value: REPORT_CATEGORY_MAP[tag],
    label: tag,
    icon: REPORT_CATEGORY_ICONS[tag],
  })),
] satisfies {
  value: ReportFeedCategory;
  label: "전체" | ReportTag;
  icon: LucideIcon;
}[];
