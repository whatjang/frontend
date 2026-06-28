"use client";

type NicknameCompleteModalProps = {
  onStart: () => void;
};

export default function NicknameCompleteModal({
  onStart,
}: NicknameCompleteModalProps) {
  return (
    <div
      className="animate-modal-overlay fixed inset-0 z-50 flex items-end justify-center bg-black/20 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="nickname-complete-title"
    >
      <section className="animate-bottom-sheet flex w-full max-w-sm flex-col items-center rounded-t-2xl bg-white px-5 pt-5 pb-8 shadow-xl">
        <div className="bg-deep-gray mx-auto h-1 w-10 rounded-full" />

        <img src="/images/logo.svg" />

        <div className="mb-8 flex w-full flex-col gap-3 text-center">
          <h2 className="text-xl font-bold">짠, 둥실둥실 왓장 등장!</h2>

          <p className="text-deep-gray text-sm">
            가입을 축하드립니다!
            <br />
            오늘은 어떤 강원 장날이 열릴지 구경하러 갈까요?
          </p>
        </div>

        <button
          type="button"
          onClick={onStart}
          className="bg-green text-md h-14 w-full cursor-pointer rounded-xl font-semibold text-white shadow-lg"
        >
          시작하기
        </button>
      </section>
    </div>
  );
}
