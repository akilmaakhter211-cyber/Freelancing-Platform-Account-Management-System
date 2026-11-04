import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <div className="min-h-screen lg:pl-[260px]">
        <Header />

        <main className="mx-auto max-w-[1600px] p-5 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}