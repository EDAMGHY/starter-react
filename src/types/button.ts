import { ReactNode } from "react"
import { button } from "@/themes"

export interface IButton {
  children: ReactNode
  type?: "button" | "submit"
  className?: string
  variant?: keyof typeof button.variants
  size?: keyof typeof button.size
  pill?: boolean
  outline?: boolean
  disabled?: boolean
  icon?: ReactNode
  iconRight?: boolean | null
  href?: string | null
  target?: string | null
}
