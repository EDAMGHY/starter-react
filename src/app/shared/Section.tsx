import clsx from "clsx"
import { Header } from "./Header"
import { ReactNode } from "react"

export interface IDashboardSection {
  title?: string | undefined
  className?: string
  children: ReactNode
  topSection?: ReactNode
}

export const Section = ({
  children,
  title,
  topSection,
  className,
}: IDashboardSection) => {
  return (
    <section className={clsx("section", className)}>
      {topSection ? (
        <div>
          {title && <Header title={title} />}
          {topSection}
        </div>
      ) : (
        <>{title && <Header title={title} />}</>
      )}

      {children}
    </section>
  )
}
