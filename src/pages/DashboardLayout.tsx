import { Footer, HeaderDashboard, Sidebar } from "@/layout"
import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
  return (
    <>
      <main className="flex gap-4 justify-start items-start p-4">
        <Sidebar />
        <section className="w-full">
          <HeaderDashboard />
          <Outlet />
          <Footer dashboard />
        </section>
      </main>
    </>
  )
}
