import clsx from "clsx"
import { Header } from "./Header"
import { ReactNode } from "react"

export interface ISection {
  title?: string | undefined
  className?: string
  children: ReactNode
  topSection?: ReactNode
}

export const DashboardSection = ({ children, title, className }: ISection) => {
  return (
    <section
      className={clsx(
        "dashboard-section text-secondary bg-primary p-5 rounded-lg",
        className,
      )}
    >
      {title && <Header variant="secondary" title={title} />}
      {children}
    </section>
  )
}
