import { InputButton, Link } from "@/ui"
import { formatDate } from "@/utils"
import { Transition } from "@headlessui/react"
import { useEffect, useRef, useState } from "react"
import { FiChevronDown } from "react-icons/fi"

export const HeaderDashboard = () => {
  return (
    <nav className="w-full flex justify-between items-center gap-4 text-primary">
      <InputButton
        variant="transparent"
        placeholder="Search..."
        className="!w-2/5 !mb-0"
      />
      <TodayDate />
      <UserInfo />
    </nav>
  )
}

const TodayDate = () => {
  return (
    <p className="font-gloria">
      <span>Today :</span>
      <span>{formatDate(new Date())}</span>
    </p>
  )
}

const UserInfo = () => {
  const [show, setShow] = useState<boolean>(false)
  const avatarRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setShow(false)
      }
    }

    document.addEventListener("click", handleOutsideClick, true)
    return () => {
      document.removeEventListener("click", handleOutsideClick, true)
    }
  }, [])

  return (
    <div ref={avatarRef} className="flex gap-4">
      <div className="border border-primary p-0.5 rounded-full overflow-hidden">
        <img
          src="https://source.unsplash.com/random"
          className="w-[50px] h-[50px] rounded-full shrink-0"
          alt=""
        />
      </div>
      <button
        onClick={() => setShow(prev => !prev)}
        className="relative inline-flex gap-3 items-center"
      >
        <span className="inline-flex font-medium">John Doe</span>

        <FiChevronDown className="w-5 h-5" />
        <Transition
          show={show}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 -translate-y-3"
          enterTo="transform opacity-100 translate-y-0"
          leave="transition ease-in duration-300"
          leaveFrom="transform opacity-100 translate-y-0"
          leaveTo="transform opacity-0 -translate-y-3"
          as="ul"
          className="absolute text-left overflow-hidden rounded border-2 border-primary shadow-xl z-[50] right-0 w-[150%] top-16 bg-secondary text-primary"
        >
          <li className="w-full">
            <Link
              className="py-4 px-8 text-left hover:bg-primary hover:text-secondary w-full"
              href="/dashboard/profile"
            >
              Profile
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="py-4 px-8 hover:bg-primary hover:text-secondary w-full"
              href="/dashbaord/settings"
            >
              Settings
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="py-4 px-8 hover:bg-primary hover:text-secondary w-full"
              href="/"
            >
              Sign Out
            </Link>
          </li>
        </Transition>
      </button>
    </div>
  )
}
