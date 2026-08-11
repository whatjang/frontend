import Link from "next/link";
import type { NavbarItem } from "@/src/constants/navigation";

type NavItemProps = NavbarItem & {
  active: boolean;
};

export default function NavItem({
  label,
  href,
  ariaLabel,
  icon: Icon,
  active,
}: NavItemProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      aria-current={active ? "page" : undefined}
      className={[
        "text-green flex w-full min-w-0 flex-col items-center justify-center gap-1 text-xs font-semibold transition-opacity",
        active ? "opacity-100" : "opacity-60",
      ].join(" ")}
    >
      <Icon
        className="h-6 w-6 shrink-0"
        strokeWidth={2.6}
        absoluteStrokeWidth
      />

      <span className="w-full text-center leading-none whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
}
