"use client";

import { usePathname } from "next/navigation";

import Header from "./Header";

export default function HeaderVisibility() {
  const pathname = usePathname();

  const isMarketReportPage = /^\/market\/[^/]+\/report$/.test(pathname);

  if (isMarketReportPage) {
    return null;
  }

  return <Header />;
}
