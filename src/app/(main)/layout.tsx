import Header from "@/src/components/Header";
import Navbar from "@/src/components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="to-signup-gradient-end h-dvh overflow-hidden bg-linear-to-br from-white">
      <div className="mx-auto h-full w-full max-w-md overflow-hidden">
        <div className="h-full scrollbar-none overflow-x-hidden overflow-y-auto overscroll-contain pb-[calc(8rem+env(safe-area-inset-bottom))] [&::-webkit-scrollbar]:hidden">
          <Header />

          <main>{children}</main>
        </div>

        <Navbar />
      </div>
    </div>
  );
}
