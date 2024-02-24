import { useThemeSwitcher } from "@/hooks"
import { FiMoon, FiSun } from "react-icons/fi"
import clsx from "clsx"

export const ThemeToggle = () => {
  const { addDarkTheme, removeDarkTheme, isDark } = useThemeSwitcher()
  return (
    <>
      <div className="fixed -right-[30px] top-1/2 -translate-y-1/2 rounded-full bg-primary size-[50px]" />
      <div
        className={clsx(
          "fixed z-[200] px-2 py-1 flex justify-center items-center top-1/2 rotate-90 -translate-y-1/2 -right-5 rounded-full bg-primary text-secondary",
        )}
      >
        <div
          className={clsx(
            "rounded-full py-2 flex flex-col gap-6 justify-center items-center transition-all duration-500",
            isDark ? "rotate-30" : "rotate-[180deg]",
          )}
        >
          <button onClick={addDarkTheme}>
            <FiMoon className={clsx("w-5 h-5", isDark ? "" : "-rotate-180")} />
          </button>

          <button onClick={removeDarkTheme}>
            <FiSun className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  )
}
