export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-green text-sm font-semibold">왓장</p>

        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          강원 장날을 여행처럼 만나는 방법
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-black/70">
          강원도 오일장과 전통 장터의 장날, 먹거리, 특산품, 주변 관광 동선을 한
          번에 확인하는 로컬 장터 여행 서비스입니다.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            className="bg-green rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            장날 찾아보기
          </a>

          <a
            href="#"
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold transition-colors hover:bg-black/5"
          >
            서비스 둘러보기
          </a>
        </div>
      </section>
    </main>
  );
}
