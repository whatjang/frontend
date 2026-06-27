import type { ReactNode } from "react";

type SignupProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function SignupLayout({
  title,
  description,
  children,
}: SignupProps) {
  return (
    <section className="flex min-h-dvh w-full max-w-xs flex-col pt-22">
      <header className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{title}</h1>

        <p className="text-sm font-normal whitespace-pre-line">{description}</p>
      </header>

      <section className="mt-12 flex flex-1 flex-col">{children}</section>
    </section>
  );
}
