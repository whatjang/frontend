"use client";

import { useSelectedLayoutSegments } from "next/navigation";

import {
  HOME_NAVBAR_ITEM,
  NAVBAR_ITEMS,
  ROUTES,
} from "@/src/constants/navigation";
import NavItem from "./NavItem";
import HomeNavItem from "./HomeNavItem";

export default function Navbar() {
  const segments = useSelectedLayoutSegments();

  const rootSegment = segments.find((segment) => !segment.startsWith("("));

  const isActive = (href: string) => {
    const rootPath = href.split("/").filter(Boolean)[0];

    return rootSegment === rootPath;
  };

  const isSearchActive =
    rootSegment === "search" ||
    rootSegment === "market" ||
    rootSegment === "report";

  const isHomeActive = isActive(HOME_NAVBAR_ITEM.href);

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-100 -translate-x-1/2">
      <div className="ring-green/10 relative h-20 rounded-full border border-white/80 bg-white/60 px-4 shadow-md ring-1 backdrop-blur-md">
        <div className="grid h-full grid-cols-[1fr_1fr_5rem_1fr_1fr] items-center">
          <NavItem {...NAVBAR_ITEMS[0]} active={isSearchActive} />
          <NavItem
            {...NAVBAR_ITEMS[1]}
            active={isActive(NAVBAR_ITEMS[1].href)}
          />

          <div aria-hidden className="h-15 w-15" />

          <NavItem
            {...NAVBAR_ITEMS[2]}
            active={isActive(NAVBAR_ITEMS[2].href)}
          />
          <NavItem
            {...NAVBAR_ITEMS[3]}
            active={isActive(NAVBAR_ITEMS[3].href)}
          />
        </div>

        <HomeNavItem item={HOME_NAVBAR_ITEM} active={isHomeActive} />
      </div>
    </nav>
  );
}
