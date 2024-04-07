import { clsx } from "clsx"
import { ReactNode } from "react"

interface IHeader {
  title: string
  variant?: "primary" | "secondary"
  subtitle?: string
  children?: ReactNode
}

export const Header = ({
  variant = "primary",
  title,
  subtitle,
  children,
}: IHeader) => {
  return (
    <div className="font-gloria space-y-4">
      <div
        className={clsx(
          "border-t-2  flex justify-normal items-center w-full",
          variant === "primary" ? "border-primary" : "border-secondary",
        )}
      >
        <div
          className={clsx(
            "py-1 px-5",
            variant === "primary"
              ? "bg-primary text-secondary"
              : "bg-secondary text-primary",
          )}
        >
          {title && <h2 className="text-[20px] leading-[28px]">{title}</h2>}
        </div>
      </div>
      {subtitle && <h3 className="text-[32px] leading-[42px]">{subtitle}</h3>}
      {children}
    </div>
  )
}
