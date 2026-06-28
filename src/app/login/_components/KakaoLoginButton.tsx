export default function KakaoLoginButton() {
  return (
    <button className="bg-yellow flex cursor-pointer justify-center gap-3 rounded-2xl py-4">
      <img
        src="/images/login/kakao-logo.svg"
        alt="kakao"
        className="h-auto w-4.5"
      />
      <p className="text-brown text-4 font-semibold">카카오로 시작하기</p>
    </button>
  );
}
