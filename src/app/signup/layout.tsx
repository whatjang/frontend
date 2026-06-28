import type { ReactNode } from "react";

import SignupFormProvider from "./_providers/SignupFormProvider";

type SignupRouteLayoutProps = {
  children: ReactNode;
};

export default function SignupRouteLayout({
  children,
}: SignupRouteLayoutProps) {
  return <SignupFormProvider>{children}</SignupFormProvider>;
}
