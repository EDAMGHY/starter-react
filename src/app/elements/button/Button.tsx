import React, { Ref, forwardRef } from "react"
import { clsx } from "clsx"

import { Link } from "../link/Link"
import { button } from "./theme"
import { IButton } from "@/types"

const CustomButton = forwardRef<HTMLButtonElement, IButton>(
  ({ children, ...props }: IButton, ref: Ref<HTMLButtonElement>) => {
    const { target, href, ...rest } = props // Destructuring assignment
    // eslint-disable-next-line
    const _target = target
    // eslint-disable-next-line
    const _href = href
    return (
      <button ref={ref} {...rest}>
        {children}
      </button>
    )
  },
)

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      children,
      type = "button",
      className = "",
      variant = "primary",
      size = "normal",
      pill = false,
      outline = false,
      disabled = false,
      icon,
      iconRight = null,
      href = null,
      target = null,
      ...rest
    }: IButton,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const ButtonComponent: React.FC<IButton> = href ? Link : CustomButton

    let props
    if (!href) {
      props = { type }
    }
    return (
      <ButtonComponent
        ref={ref}
        rel={href && target === "_blank" ? "noopener" : null}
        disabled={disabled}
        href={href}
        {...props}
        target={target}
        className={clsx(
          button.base,
          pill && button.pill,
          button.size[size],
          !outline ? button.variants[variant] : button.outlineVariants[variant],
          disabled && button.disabled,
          outline && disabled && button.outlineVariants?.disabled[variant],
          className,
        )}
        {...rest}
      >
        {icon && !iconRight && icon}
        {children}
        {icon && iconRight && icon}
      </ButtonComponent>
    )
  },
)
