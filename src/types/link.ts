import { ReactNode } from "react"
import { link } from "@/themes"

export interface ILink {
  href: string
  children: ReactNode
  className?: string
  variant?: keyof typeof link.variants
  target?: "_blank" | "_self"
  icon?: ReactNode
  iconRight?: boolean | null
}
