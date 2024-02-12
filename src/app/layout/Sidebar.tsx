import { sidebar_menus as menus } from "@/data"
import { Logo } from "@/shared"
import { NavLink } from "react-router-dom"
import { Link } from "@/ui"

export const Sidebar = () => {
  return (
    <aside className="sticky space-y-10 text-secondary left-0 flex-col inset-y-5 w-[260px] bg-primary rounded h-[calc(100vh-40px)] px-8 py-5">
      <div className="space-y-6">
        <Link href="/">
          <Logo />
        </Link>
        <p className="text-center text-sm">The Blog World</p>
      </div>

      <ul className="sidebar flex flex-col gap-4">
        {menus.map(menu => (
          <li key={menu?.id}>
            <NavLink
              className={({ isActive }) =>
                `sidebar-link transition-all duration-500 inline-flex items-center gap-3 hover:underline underline-offset-4 ${isActive ? "active underline" : ""}`
              }
              to={menu.path}
              end
            >
              <span className="p-2 rounded-full">
                <menu.icon className="w-5 h-5 " />
              </span>
              <span>{menu.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}
