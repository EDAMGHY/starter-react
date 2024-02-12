import { Link as RouterLink } from "react-router-dom"
import { forwardRef } from "react"
import { link } from "./theme"
import clsx from "clsx"
import { ILink } from "@/types"

export const Link = forwardRef(
  (
    {
      href = "#.",
      children,
      className = "",
      variant = "default",
      target = "_self",
      icon,
      iconRight = null,
      ...rest
    }: ILink,
    ref,
  ) => {
    return (
      <RouterLink
        to={href}
        ref={ref}
        rel={target === "_blank" ? "noopener" : null}
        target={target}
        className={clsx(className, link.base, link?.variants?.[variant])}
        {...rest}
      >
        {icon && !iconRight && icon}
        {children}
        {icon && iconRight && icon}
      </RouterLink>
    )
  },
)
