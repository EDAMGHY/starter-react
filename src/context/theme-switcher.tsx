import { ReactNode, createContext, useEffect, useState } from "react"

interface ThemeSwitcherContextType {
  isDark: boolean
  addDarkTheme?: () => void
  removeDarkTheme?: () => void
}

export const ThemeSwitcherContext = createContext<ThemeSwitcherContextType>({
  isDark: false,
})

const getTheme = () => {
  const localTheme = localStorage.getItem("theme-blogs")
  return localTheme === "dark"
}

export const ThemeSwitcherProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isDark, setIsDark] = useState(getTheme() || false)

  const addDarkTheme = () => {
    document.documentElement.classList.add("dark")
    document.documentElement.classList.remove("light")
    localStorage.setItem("theme-blogs", "dark")
    setIsDark(true)
  }
  const removeDarkTheme = () => {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    localStorage.setItem("theme-blogs", "light")
    setIsDark(false)
  }

  useEffect(() => {
    document.documentElement.classList.add(getTheme() ? "dark" : "light")
  }, [isDark])

  return (
    <ThemeSwitcherContext.Provider
      value={{ isDark, addDarkTheme, removeDarkTheme }}
    >
      {children}
    </ThemeSwitcherContext.Provider>
  )
}
