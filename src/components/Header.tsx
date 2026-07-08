import Link from "next/link";
import {
  HEADER_LOGO_ITEM,
  HEADER_NOTICE_ITEM,
} from "@/src/constants/navigation";

export default function Header() {
  const NoticeIcon = HEADER_NOTICE_ITEM.icon;

  return (
    <header className="flex w-full items-center justify-between py-6">
      <Link
        href={HEADER_LOGO_ITEM.href}
        aria-label={HEADER_LOGO_ITEM.ariaLabel}
        className="inline-flex items-center justify-center"
      >
        <img
          src={HEADER_LOGO_ITEM.src}
          alt={HEADER_LOGO_ITEM.alt}
          className={`${HEADER_LOGO_ITEM.className} cursor-pointer`}
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
