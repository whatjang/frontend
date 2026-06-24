import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-green text-sm font-medium">왓장</p>

      <h1 className="mt-3 text-2xl font-bold text-gray-900">
        지금은 장터 정보를 불러올 수 없습니다
      </h1>

      <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
        인터넷 연결이 불안정해 강원 장날, 먹거리, 주변 관광 정보를 불러오지
        못했습니다. 연결 상태를 확인한 뒤 다시 시도해 주세요.
      </p>

      <Link
        href="/"
        className="bg-green mt-6 rounded-md px-4 py-2 text-sm font-medium text-white"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
