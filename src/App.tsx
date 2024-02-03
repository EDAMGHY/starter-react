import { Home, About, NotFound } from "@/pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer, Header } from "@/layout"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
