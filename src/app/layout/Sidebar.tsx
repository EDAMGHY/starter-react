import { sidebar_menus as menus } from "@/data"
import { Logo } from "@/shared"
import { NavLink } from "react-router-dom"
import { Link } from "@/ui"
import { FiAnchor, FiChevronDown } from "react-icons/fi"
import { useState } from "react"
import { useCloseOnEscAndClickOutside } from "@/hooks"
import { Transition } from "@headlessui/react"

export const Sidebar = () => {
  return (
    <aside className="sticky space-y-10 text-secondary left-0 flex-col inset-y-5 w-[55px] xl:w-[260px] bg-primary rounded h-[calc(100vh-32px)] px-2 xl:px-6 py-5 transition-all duration-300">
      <div className="xl:block hidden space-y-6">
        <Link href="/">
          <Logo />
        </Link>
        <p className="text-center text-sm">The Blog World</p>
      </div>
      <button className="xl:hidden block absolute -top-6 left-1/2 -translate-x-1/2">
        <FiAnchor className="w-5 h-5" />
      </button>

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
              <span className="hidden xl:inline-block">{menu.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <UserInfo />
    </aside>
  )
}

const UserInfo = () => {
  const [show, setShow] = useState<boolean>(false)

  const closeSelect = () => setShow(false)
  const avatarRef = useCloseOnEscAndClickOutside(closeSelect)

  return (
    <div
      ref={avatarRef}
      className="self-end justify-self-end flex gap-2 w-full max-w-full"
    >
      <Transition
        show={show}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 translate-y-3"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="transform opacity-100 translate-y-0"
        leaveTo="transform opacity-0 translate-y-3"
        as="ul"
        className="absolute text-left overflow-hidden rounded border-2 border-primary shadow-xl z-[50] bottom-12 w-[150px] left-[calc(100%+4px)] h-fit bg-secondary text-primary"
      >
        <li className="w-full">
          <Link
            className="py-4 px-8 font-bold hover:bg-primary/60 hover:text-secondary w-full"
            href="/dashboard/profile"
          >
            Profile
          </Link>
        </li>
        <li className="w-full">
          <Link
            className="py-4 px-8 font-bold hover:bg-primary/60 hover:text-secondary w-full"
            href="/dashbaord/settings"
          >
            Settings
          </Link>
        </li>
        <li className="w-full">
          <Link
            className="py-4 px-8 font-bold hover:bg-primary/60 hover:text-secondary w-full"
            href="/"
          >
            Sign Out
          </Link>
        </li>
      </Transition>
      <button
        onClick={() => setShow(prev => !prev)}
        className="inline-flex gap-1.5 shrink-0 xl:gap-3 items-center"
      >
        <div className="border border-primary p-0.5 rounded-full flex justify-center shrink-0 overflow-hidden">
          <img
            src="https://source.unsplash.com/random"
            className="size-[30px] xl:size-[50px] object-cover  rounded-full shrink-0"
            alt=""
          />
        </div>
        <span className="xl:inline-flex hidden xl:text-base text-xs font-medium">
          John Doe
        </span>

        <FiChevronDown className="size-3 xl:size-5" />
      </button>
    </div>
  )
}
