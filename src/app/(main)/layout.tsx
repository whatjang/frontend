import Header from "@/src/components/Header";
// import Navbar from "@/src/components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="to-signup-gradient-end min-h-dvh bg-linear-to-br from-white">
      <div className="mx-auto flex min-h-dvh w-full max-w-xs flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        {/* <Navbar /> */}
      </div>
    </div>
  );
}
