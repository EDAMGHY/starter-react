import {
  Home,
  About,
  DashboardNotFound,
  MainNotFound,
  MainLayout,
  DashboardLayout,
  AddBlog,
  AddCategory,
  AllBlogs,
  Categories,
  Dashboard,
  DeleteBlog,
  EditBlog,
  EditCategory,
  DeleteCategory,
  MyBlogs,
  Profile,
  Users,
} from "@/pages"
import { ThemeToggle } from "@/layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeSwitcherProvider } from "@/context"

const App = () => {
  return (
    <ThemeSwitcherProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />} path="/">
            <Route element={<Home />} index />
            <Route element={<About />} path="about" />
            <Route element={<MainNotFound />} path="*" />
          </Route>
          <Route element={<DashboardLayout />} path="/dashboard">
            <Route element={<Dashboard />} index />
            <Route element={<Profile />} path="profile" />
            <Route element={<AllBlogs />} path="all-blogs" />
            <Route element={<Users />} path="users" />
            <Route element={<MyBlogs />} path="blogs" />
            <Route element={<Categories />} path="categories" />
            <Route element={<AddBlog />} path="blogs/add" />
            <Route element={<EditBlog />} path="blogs/:id/edit" />
            <Route element={<DeleteBlog />} path="blogs/:id/delete" />
            <Route element={<AddCategory />} path="categories/add" />
            <Route element={<EditCategory />} path="categories/:id/edit" />
            <Route element={<DeleteCategory />} path="categories/:id/delete" />
            <Route element={<DashboardNotFound />} path="*" />
          </Route>
        </Routes>
        <ThemeToggle />
      </Router>
    </ThemeSwitcherProvider>
  )
}

export default App
