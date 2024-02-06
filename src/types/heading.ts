import { heading } from "@/themes"
import { ReactNode } from "react"

export interface IHeading {
  variant?: keyof typeof heading.default | null
  children: ReactNode
  className?: string
  level?: number
  gloria?: boolean
  bold?: boolean
}
