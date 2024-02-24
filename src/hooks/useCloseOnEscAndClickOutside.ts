import { useEffect, useRef } from "react"

export const useCloseOnEscAndClickOutside = (
  callback: () => void,
): React.RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleClickOutside, handleKeyDown])

  return ref
}
