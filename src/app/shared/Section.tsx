import clsx from "clsx"
import { Header } from "./Header"
import { ReactNode } from "react"

export interface ISection {
  title?: string | undefined
  className?: string
  children: ReactNode
}

export const Section = ({ children, title, className }: ISection) => {
  return (
    <section className={clsx("section", className)}>
      {title && <Header title={title} />}
      {children}
    </section>
  )
}
