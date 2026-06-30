import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between py-6">
      <Link href="/home" aria-label="홈으로 이동">
        <img
          src="/images/common/logo.svg"
          alt="왓장 로고"
          className="h-8 w-auto cursor-pointer"
        />
      </Link>
      <Link href="/notice" aria-label="알림 페이지로 이동">
        <img
          src="/images/common/bell.svg"
          alt="알림"
          className="h-9 w-auto cursor-pointer"
        />
      </Link>
    </header>
  );
}
