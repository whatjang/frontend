import SignupLayout from "../_components/common/layout/SignupLayout";
import TermsForm from "../_components/terms/TermsForm";

export default function TermsPage() {
  return (
    <main className="to-signup-gradient-end flex min-h-dvh justify-center bg-linear-to-br from-white px-5">
      <SignupLayout
        title="서비스 이용약관 동의"
        description={`원활한 왓장 서비스 이용을 위해\n약관 동의가 필요합니다.`}
      >
        <TermsForm nextHref="/signup/nickname" />
      </SignupLayout>
    </main>
  );
}
