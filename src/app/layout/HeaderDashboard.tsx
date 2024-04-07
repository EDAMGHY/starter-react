import { InputButton } from "@/ui"
import { formatDate } from "@/utils"
import { FiSearch } from "react-icons/fi"

export const HeaderDashboard = () => {
  return (
    <nav className="flex w-full justify-between items-center text-primary">
      <button className="shrink-0 md:hidden block">
        <FiSearch className="w-6 h-6" />
      </button>

      <InputButton
        variant="transparent"
        placeholder="Search..."
        className="!mb-0 !w-1/2 md:block hidden"
      />
      <TodayDate />
    </nav>
  )
}

const TodayDate = () => {
  return (
    <p className="font-gloria md:text-base text-sm">
      <span>Today :</span>
      <span>{formatDate(new Date())}</span>
    </p>
  )
}
