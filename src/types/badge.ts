import { badge } from "@/themes"

export interface IBadge {
  icon?: string
  text: string
  href?: string
  className?: string
  inverse?: boolean
  variant?: keyof typeof badge
  size?: "xsmall" | "small" | "normal"
}
