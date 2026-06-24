import type { Metadata, Viewport } from "next";
import { COLORS } from "@/src/constants/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "왓장 - 강원 장날 여행",
    template: "%s | 왓장",
  },
  description:
    "강원도 오일장과 전통 장터의 장날, 먹거리, 특산품, 주변 관광 동선을 한 번에 확인하는 로컬 장터 여행 서비스입니다.",
  applicationName: "왓장",
  keywords: [
    "왓장",
    "강원도 오일장",
    "강원 전통시장",
    "장날",
    "오일장",
    "전통 장터",
    "강원 여행",
    "로컬 여행",
    "장터 먹거리",
    "강원 특산품",
  ],
  appleWebApp: {
    capable: true,
    title: "왓장",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: COLORS.green,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
