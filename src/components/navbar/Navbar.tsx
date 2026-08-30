"use client";

import { usePathname } from "next/navigation";

import {
  HOME_NAVBAR_ITEM,
  NAVBAR_ITEMS,
  ROUTES,
} from "@/src/constants/navigation";

import HomeNavItem from "./HomeNavItem";
import NavItem from "./NavItem";

export default function Navbar() {
  const pathname = usePathname();

  const isPathActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isMarketReportPath =
    pathname === `${ROUTES.market}/new` ||
    /^\/markets\/[^/]+\/new(?:\/|$)/.test(pathname);

  // /markets/[id]/tour
  const isMarketTourPath = /^\/markets\/[^/]+\/tour(?:\/|$)/.test(pathname);

  const isSearchActive =
    !isMarketReportPath &&
    !isMarketTourPath &&
    (isPathActive(ROUTES.search) ||
      isPathActive(ROUTES.market) ||
      isPathActive(ROUTES.trend));

  const isTourActive = isPathActive(ROUTES.tour) || isMarketTourPath;

  const isReportActive = isPathActive(ROUTES.report) || isMarketReportPath;

  const isHomeActive = pathname === HOME_NAVBAR_ITEM.href;

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-100 -translate-x-1/2">
      <div className="ring-green/10 relative h-20 rounded-full border border-white/80 bg-white/60 px-4 shadow-md ring-1 backdrop-blur-md">
        <div className="grid h-full grid-cols-[1fr_1fr_5rem_1fr_1fr] items-center">
          <NavItem {...NAVBAR_ITEMS[0]} active={isSearchActive} />

          <NavItem {...NAVBAR_ITEMS[1]} active={isTourActive} />

          <div aria-hidden className="h-15 w-15" />

          <NavItem {...NAVBAR_ITEMS[2]} active={isReportActive} />

          <NavItem
            {...NAVBAR_ITEMS[3]}
            active={isPathActive(NAVBAR_ITEMS[3].href)}
          />
        </div>

        <HomeNavItem item={HOME_NAVBAR_ITEM} active={isHomeActive} />
      </div>
    </nav>
  );
}
