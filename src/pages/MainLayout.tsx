import { Outlet } from "react-router-dom"
import { Footer, Header } from "@/layout"

export const MainLayout = () => {
  return (
    <>
      <Header />
      <section className="container">
        <h1>MainLayout</h1>
        <Outlet />
      </section>
      <Footer />
    </>
  )
}
