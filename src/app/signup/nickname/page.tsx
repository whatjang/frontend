import SignupLayout from "../_components/common/layout/SignupLayout";
import NicknameForm from "../_components/nickname/NicknameForm";

export default function NicknamePage() {
  return (
    <main className="to-signup-gradient-end flex min-h-dvh justify-center bg-linear-to-br from-white px-5">
      <SignupLayout
        title="닉네임 설정"
        description="왓장에서 사용할 닉네임을 입력해주세요."
      >
        <NicknameForm />
      </SignupLayout>
    </main>
  );
}
