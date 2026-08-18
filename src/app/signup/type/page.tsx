import SignupLayout from "../_components/common/layout/SignupLayout";
import TypeForm from "../_components/type/TypeForm";

export default function UserTypePage() {
  return (
    <main className="to-signup-gradient-end flex min-h-dvh justify-center bg-linear-to-br from-white px-5">
      <SignupLayout
        title="회원 유형 선택"
        description="왓장을 어떻게 이용하실 건가요?"
      >
        <TypeForm />
      </SignupLayout>
    </main>
  );
}
