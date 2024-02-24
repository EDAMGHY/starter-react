import { FiFilter } from "react-icons/fi"
import { Transition } from "@headlessui/react"
import { useState } from "react"
import { useCloseOnEscAndClickOutside } from "@/hooks"

export const SelectFilterButton = () => {
  const [show, setShow] = useState<boolean>(false)

  const toggleSelect = () => setShow(prev => !prev)
  const closeSelect = () => setShow(false)

  const selectRef = useCloseOnEscAndClickOutside(closeSelect)

  return (
    <div ref={selectRef} className="relative font-sans">
      <button
        onClick={toggleSelect}
        className="p-3.5 inline-flex gap-2 bg-primary text-secondary rounded-md"
      >
        <FiFilter className="w-5 h-5" />
      </button>
      <Transition
        show={show}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 translate-x-5"
        enterTo="transform opacity-100 translate-x-0"
        leave="transition ease-in duration-300"
        leaveFrom="transform opacity-100 translate-x-0"
        leaveTo="transform opacity-0 translate-x-5"
        as="ul"
        className="absolute right-0 text-sm top-[50px] min-w-[150px] rounded-md overflow-hidden bg-primary text-secondary"
      >
        <li className="py-2 px-5 hover:bg-secondary/10">Name (A - Z)</li>
        <li className="py-2 px-5 hover:bg-secondary/10">Name (Z - A)</li>
        <li className="py-2 px-5 hover:bg-secondary/10">Date ASC</li>
        <li className="py-2 px-5 hover:bg-secondary/10">Date DESC</li>
      </Transition>
    </div>
  )
}
