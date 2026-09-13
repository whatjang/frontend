import Image from "next/image";

import KakaoLoginButton from "./_components/KakaoLoginButton";

export default function LoginPage() {
  return (
    <main className="from-login-gradient-start flex min-h-screen flex-col items-center justify-center bg-linear-to-b to-white px-5">
      <div className="flex w-full max-w-md flex-col items-center gap-12">
        <section className="flex flex-col gap-8 text-center">
          <h1 className="text-2xl font-bold">환영합니다!</h1>

          <p className="text-green text-sm font-medium">
            이제부터 왓장과 함께
            <br />
            전통시장을 즐겁게 둘러봐요.
          </p>
        </section>

        <section className="flex w-full flex-col items-center gap-12">
          <div className="relative aspect-40/29 w-full">
            <Image
              src="/images/login/explain.svg"
              alt="왓장 서비스 소개 이미지"
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="flex w-full max-w-sm flex-col items-center gap-8">
            <KakaoLoginButton />

            <p className="text-deep-gray text-center text-xs font-normal">
              카카오로 시작한 후 서비스 이용을 위한
              <br />
              약관 동의와 닉네임 설정을 진행합니다.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
