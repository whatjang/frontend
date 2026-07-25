import Header from "@/src/components/Header";
import Navbar from "@/src/components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="to-signup-gradient-end min-h-dvh bg-linear-to-br from-white">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
        <Header />

        <main className="flex-1 pb-[calc(7rem+env(safe-area-inset-bottom))]">
          {children}
        </main>

        <Navbar />
      </div>
    </div>
  );
}
