import { FC } from "react"
import clsx from "clsx"
import { heading as theme } from "./theme"
import { IHeading } from "@/types"

// Define the component as a functional component
const Heading: FC<IHeading> = ({
  children,
  className = "",
  level = 2,
  variant = null,
  gloria = false,
  bold = true,
  ...props
}: IHeading) => {
  // Dynamically determine the HTML heading element type
  const Component = `h${level}` as keyof JSX.IntrinsicElements
  const heading = gloria ? theme.gloria : theme.default
  return (
    <Component
      className={clsx(
        variant === null && heading[`${level}`],
        variant && heading[variant],
        gloria && "font-gloria",
        bold && "font-bold",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export { Heading }
