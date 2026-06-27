import KakaoLoginButton from "./_components/KakaoLoginButton";

export default function LoginPage() {
  return (
    <main className="from-login-gradient-start flex min-h-screen flex-col items-center justify-center bg-linear-to-b to-white px-5">
      <div className="flex max-w-xs flex-col items-center gap-12">
        <section className="flex flex-col gap-8 text-center">
          <h1 className="text-2xl font-bold text-black">환영합니다!</h1>

          <p className="text-green text-sm font-medium">
            이제부터 왓장과 함께
            <br />
            전통시장을 즐겁게 둘러봐요.
          </p>
        </section>

        <section className="flex flex-col items-center gap-12">
          <img src="/images/login/explain.svg" alt="explain" />

          <div className="flex w-full flex-col gap-8">
            <KakaoLoginButton />

            <p className="text-deep-gray text-center text-xs font-normal">
              로그인 시 왓장의{" "}
              <span className="font-medium underline">이용약관</span> 및{" "}
              <span className="font-medium underline">개인정보 처리방침</span>
              에
              <br />
              동의하는 것으로 간주됩니다.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
