import Image from "next/image";

export default function KakaoLoginButton() {
  return (
    <button
      type="button"
      className="bg-yellow flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl py-4"
    >
      <span className="relative size-4.5">
        <Image
          src="/images/login/kakao-logo.svg"
          alt="카카오 로고"
          fill
          sizes="18px"
          className="object-contain"
        />
      </span>

      <p className="text-brown text-4 font-semibold">카카오로 시작하기</p>
    </button>
  );
}
