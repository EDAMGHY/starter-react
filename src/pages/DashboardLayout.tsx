import { Footer, HeaderDashboard } from "@/layout"
import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
  return (
    <>
      <main className="flex gap-4 justify-start items-start p-4">
        <sidebar className="sticky text-secondary left-0 inset-y-5 w-[260px] bg-primary rounded-lg h-[calc(100vh-40px)] flex justify-center items-center">
          Sidebar
        </sidebar>
        <section className="w-full">
          <HeaderDashboard />
          <h1>DashboardLayout</h1>

          <Outlet />
          <Footer />
        </section>
      </main>
    </>
  )
}
