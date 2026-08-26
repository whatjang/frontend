import type { LucideIcon } from "lucide-react";
import {
  Search,
  Map,
  BookOpen,
  CircleUserRound,
  House,
  Bell,
} from "lucide-react";

export const ROUTES = {
  home: "/home",
  notice: "/notice",
  search: "/search",
  tour: "/tour",
  mypage: "/mypage",
  market: "/markets",
  report: "/reports",
  trend: "/trend",
} as const;

export type HeaderLogoItem = {
  href: string;
  ariaLabel: string;
  src: string;
  alt: string;
};

export const HEADER_LOGO_ITEM: HeaderLogoItem = {
  href: ROUTES.home,
  ariaLabel: "홈으로 이동",
  src: "/images/common/logo.svg",
  alt: "왓장 로고",
};

export type HeaderIconItem = {
  href: string;
  ariaLabel: string;
  icon: LucideIcon;
};

export const HEADER_NOTICE_ITEM: HeaderIconItem = {
  href: ROUTES.notice,
  ariaLabel: "알림 페이지로 이동",
  icon: Bell,
};

export type NavbarItem = {
  label: string;
  href: string;
  ariaLabel: string;
  icon: LucideIcon;
};

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    label: "검색",
    href: ROUTES.search,
    ariaLabel: "검색 페이지로 이동",
    icon: Search,
  },
  {
    label: "명소",
    href: ROUTES.tour,
    ariaLabel: "명소 페이지로 이동",
    icon: Map,
  },
  {
    label: "제보",
    href: ROUTES.report,
    ariaLabel: "현장 제보 피드 페이지로 이동",
    icon: BookOpen,
  },
  {
    label: "마이",
    href: ROUTES.mypage,
    ariaLabel: "마이 페이지로 이동",
    icon: CircleUserRound,
  },
];

export const HOME_NAVBAR_ITEM: NavbarItem = {
  label: "홈",
  href: ROUTES.home,
  ariaLabel: "홈으로 이동",
  icon: House,
};
