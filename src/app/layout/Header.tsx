import { menus } from "@/data"
import { NavLink } from "react-router-dom"
import { Logo } from "@/shared"
import { Link } from "@/ui"
import { FiMenu, FiX } from "react-icons/fi"
import { useEffect, useState } from "react"
import { Transition } from "@headlessui/react"

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  useEffect(() => {
    if (openMenu) {
      document?.body.classList.add("overflow-hidden")
    } else {
      document?.body.classList.remove("overflow-hidden")
    }
  }, [openMenu])

  const openMenuModal = () => setOpenMenu(true)
  const closeMenuModal = () => setOpenMenu(false)

  return (
    <nav className="sticky bg-secondary z-[999] left-0 top-0 w-full py-5 text-primary">
      <div className="container flex w-full items-center justify-between">
        <Link href={"/"}>
          <Logo />
        </Link>
        <ul className="hidden md:flex gap-2">
          {menus.map(menu => (
            <li key={menu?.id}>
              <NavLink
                className={({ isActive }) =>
                  `relative hover:rounded inline-flex overflow-hidden before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-primary before:-z-[1] before:transition-all transition-all duration-500 before:duration-500 hover:border-primary hover:text-secondary hover:before:translate-y-0 py-2 px-5 font-medium ${isActive ? "before:translate-y-[calc(100%-4px)]" : "before:translate-y-full"}`
                }
                to={menu.path}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button onClick={openMenuModal} className="md:hidden block">
          <FiMenu className="w-6 h-6" />
        </button>
        <Transition
          show={openMenu}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 -translate-x-full"
          enterTo="transform opacity-100 translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="transform opacity-100 translate-x-0"
          leaveTo="transform opacity-0 -translate-x-full"
          className="fixed top-0 flex items-center justify-start flex-col gap-10 left-0 w-full h-screen text-secondary bg-primary z-[999] px-5 py-10"
        >
          <Link onClick={closeMenuModal} className="mx-auto" href={"/"}>
            <Logo />
          </Link>
          <button onClick={closeMenuModal} className="absolute right-4 top-7">
            <FiX className="w-6 h-6" />
          </button>
          <ul className="w-full">
            {menus.map(menu => (
              <li key={menu?.id}>
                <NavLink
                  className={({ isActive }) =>
                    `inline-flex p-4 w-full border-l-4 ${isActive ? "border-primary/70 text-primary/70 bg-secondary" : "text-secondary bg-primary border-transparent"}`
                  }
                  to={menu.path}
                  onClick={closeMenuModal}
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </Transition>
      </div>
    </nav>
  )
}
