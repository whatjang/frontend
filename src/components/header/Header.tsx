import Image from "next/image";
import Link from "next/link";
import {
  HEADER_LOGO_ITEM,
  HEADER_NOTICE_ITEM,
} from "@/src/constants/navigation";

export default function Header() {
  const NoticeIcon = HEADER_NOTICE_ITEM.icon;

  return (
    <header className="flex w-full items-center justify-between px-5 py-6">
      <Link
        href={HEADER_LOGO_ITEM.href}
        aria-label={HEADER_LOGO_ITEM.ariaLabel}
        className="relative inline-block h-8 w-12"
      >
        <Image
          src={HEADER_LOGO_ITEM.src}
          alt={HEADER_LOGO_ITEM.alt}
          fill
          loading="eager"
          className="object-contain object-left"
          sizes="48px"
        />
      </Link>

      <Link
        href={HEADER_NOTICE_ITEM.href}
        aria-label={HEADER_NOTICE_ITEM.ariaLabel}
        className="text-green inline-flex items-center justify-center"
      >
        <NoticeIcon
          aria-hidden
          className="h-8 w-6"
          strokeWidth={2.4}
          absoluteStrokeWidth
        />
      </Link>
    </header>
  );
}
