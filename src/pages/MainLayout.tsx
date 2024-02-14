import { Outlet } from "react-router-dom"
import { Footer, Header } from "@/layout"

export const MainLayout = () => {
  return (
    <>
      <Header />
      <section className="container">
        <main className="py-5">
          <Outlet />
        </main>
      </section>
      <Footer />
    </>
  )
}
