import {
  Clock3,
  Ellipsis,
  ListFilter,
  Ticket,
  UsersRound,
  Utensils,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import type { ReportTag } from "@/src/types/report";

export const REPORT_CATEGORY_ICONS = {
  혼잡도: UsersRound,
  "운영 여부": Clock3,
  "새로운 먹거리": Utensils,
  "이벤트/축제": Ticket,
  기타: Ellipsis,
} satisfies Record<ReportTag, LucideIcon>;

export const REPORT_ALL_CATEGORY_ICON = ListFilter;
