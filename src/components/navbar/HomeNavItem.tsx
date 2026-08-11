import Link from "next/link";
import type { NavbarItem } from "@/src/constants/navigation";

type HomeNavItemProps = {
  item: NavbarItem;
  active: boolean;
};

export default function HomeNavItem({ item, active }: HomeNavItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      aria-label={item.ariaLabel}
      aria-current={active ? "page" : undefined}
      className={[
        "from-green to-navbar-gradient-end absolute top-1/2 left-1/2 flex h-15 w-15 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-linear-to-br ring-white/60 transition-all duration-200",
        active
          ? "shadow-green/35 scale-[1.02] shadow-xl ring-2"
          : "scale-100 shadow-2xl ring-1",
      ].join(" ")}
    >
      <Icon
        className="h-6 w-6 text-white transition-transform duration-200"
        strokeWidth={active ? 3 : 2.8}
        absoluteStrokeWidth
      />
    </Link>
  );
}
