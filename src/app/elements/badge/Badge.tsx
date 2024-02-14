import { IBadge } from "@/types"
import { badge } from "./theme"
import clsx from "clsx"

export const Badge = ({
  icon,
  text,
  href,
  variant = "default",
  size = "normal",
  className = "",
}: IBadge) => {
  const Component = href ? "a" : "span"
  return (
    <Component
      href={href}
      className={clsx(
        badge[variant].wrapper,
        badge[variant].color,
        badge[variant].size[size],
        className,
      )}
    >
      {icon && icon}
      <span className="badge">{text}</span>
    </Component>
  )
}

export default Badge
