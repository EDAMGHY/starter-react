import { useThemeSwitcher } from "@/hooks"
import clsx from "clsx"
import { FiMoon, FiSun } from "react-icons/fi"

export const ThemeToggle = () => {
  const { addDarkTheme, removeDarkTheme, isDark } = useThemeSwitcher()
  return (
    <div
      className={clsx(
        "fixed z-[200] -top-10 -right-10 rounded-full w-20 h-20 bg-primary text-secondary flex flex-col gap-6 justify-center items-center transition-all duration-500",
        isDark ? "rotate-45" : "rotate-[225deg]",
      )}
    >
      <button onClick={addDarkTheme} className="">
        <FiMoon className="w-5 h-5" />
      </button>

      <button onClick={removeDarkTheme} className="">
        <FiSun className="w-5 h-5" />
      </button>
    </div>
  )
}
