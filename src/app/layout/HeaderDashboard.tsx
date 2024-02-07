import { menus } from "@/data"
import { Link, NavLink } from "react-router-dom"
import { Logo } from "@/shared"

export const HeaderDashboard = () => {
  return (
    <nav className="sticky z-[100] left-0 top-0 w-full py-5 text-gray-700">
      <div className="container flex w-full items-center justify-between">
        <Link to={"/"}>
          <Logo />
        </Link>
        <ul className="flex gap-2">
          {menus.map(menu => (
            <li key={menu?.id}>
              <NavLink
                className={({ isActive }) =>
                  `relative hover:rounded inline-flex overflow-hidden before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gray-700 before:-z-[1] before:transition-all transition-all duration-500 before:duration-500 hover:border-gray-700 hover:text-gray-300 hover:before:translate-y-0 py-2 px-5 font-medium ${isActive ? "before:translate-y-[calc(100%-4px)]" : "before:translate-y-full"}`
                }
                to={menu.path}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
