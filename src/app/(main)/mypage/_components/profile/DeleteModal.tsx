import { LoaderCircle } from "lucide-react";

interface DeleteModalProps {
  isOpen: boolean;
  isLoading?: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title?: string;
  description?: string;
}

export default function DeleteModal({
  isOpen,
  isLoading = false,
  onClose,
  onConfirm,
  title = "정말 삭제하시겠어요?",
  description = "삭제된 내용은 다시 복구하기 어려울 수 있어요.",
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5"
      onClick={() => {
        if (!isLoading) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-modal-title"
        className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col gap-2">
          <h2 id="delete-modal-title" className="text-lg font-bold">
            {title}
          </h2>

          <p className="text-deep-gray text-sm">{description}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="border-light-gray text-deep-gray cursor-pointer rounded-xl border py-3 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-50"
          >
            취소
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            aria-busy={isLoading}
            className="bg-red flex cursor-pointer items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading && <LoaderCircle size={16} className="animate-spin" />}
            {isLoading ? "탈퇴 중..." : "탈퇴하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
