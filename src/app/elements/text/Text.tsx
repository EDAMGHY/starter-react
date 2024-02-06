import clsx from "clsx"
import { text } from "./theme"
import { IText } from "@/types"

const Text = ({
  variant = "base",
  as = "p",
  className = "",
  children,
  ...props
}: IText) => {
  const Component = as as keyof JSX.IntrinsicElements

  return (
    <Component
      className={clsx(variant in text && text[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export { Text }
