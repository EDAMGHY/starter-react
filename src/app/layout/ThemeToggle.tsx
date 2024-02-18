import { useThemeSwitcher } from "@/hooks"
import clsx from "clsx"
import { FiMoon, FiSun } from "react-icons/fi"

export const ThemeToggle = () => {
  const { addDarkTheme, removeDarkTheme, isDark } = useThemeSwitcher()
  return (
    <div
      className={clsx(
        "fixed z-[200] px-2 py-1 top-1/2 rotate-90 -translate-y-1/2 overflow-hidden -right-5 rounded-full bg-primary text-secondary",
      )}
    >
      <div
        className={clsx(
          "rounded-full py-2 flex flex-col gap-6 justify-center items-center transition-all duration-500",
          isDark ? "rotate-30" : "rotate-[180deg]",
        )}
      >
        <button onClick={addDarkTheme} className="">
          <FiMoon className={clsx("w-5 h-5", isDark ? "" : "-rotate-180")} />
        </button>

        <button onClick={removeDarkTheme} className="">
          <FiSun className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
