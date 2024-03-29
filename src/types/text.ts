import { text } from "@/themes"
import { ReactNode } from "react"

export interface IText {
  variant?: keyof typeof text
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
}
