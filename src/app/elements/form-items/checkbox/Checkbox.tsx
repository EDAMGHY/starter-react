import { Ref, forwardRef, useRef } from "react"
import clsx from "clsx"
import { checkbox } from "./theme"
import { FiCheck } from "react-icons/fi"
import { ICheckbox } from "@/types"

export const Checkbox = forwardRef(
  (
    {
      variant = "default",
      label,
      disabled = false,
      checked = false,
      setChecked,
      hasError,
      errorMessage,
      className,
      ...rest
    }: ICheckbox,
    ref: Ref<HTMLInputElement>,
  ) => {
    const checkboxRef = useRef<HTMLInputElement>(null)

    const toggleCheckbox = () => {
      !disabled && checkboxRef?.current?.click()
    }

    return (
      <div className={clsx("relative mb-3", className)}>
        <input
          type="checkbox"
          className="invisible absolute left-56 h-0 w-0"
          disabled={disabled}
          onChange={!disabled && setChecked}
          {...rest}
          ref={e => {
            ref?.(e)
            checkboxRef.current = e
          }}
        />
        <div className={checkbox[variant].wrapper}>
          <div
            role="checkbox"
            aria-checked={checked}
            aria-label={label}
            className={clsx(
              checkbox[variant].input?.base,
              checked
                ? checkbox[variant].input?.checked
                : checkbox[variant].input?.unchecked,
              disabled && checkbox[variant].input?.disabled,
              hasError && checkbox[variant].input?.hasError,
            )}
            onClick={toggleCheckbox}
            tabIndex="0"
          >
            {checked && <FiCheck className={checkbox[variant].icon} />}
          </div>
          <label
            className={clsx(
              checkbox[variant].label,
              hasError && checkbox[variant].hasError,
              disabled && checkbox[variant].disabled,
            )}
            onClick={toggleCheckbox}
          >
            {label}
          </label>
        </div>
        {errorMessage && hasError && (
          <p className={checkbox[variant].errorMessage}>{errorMessage}</p>
        )}
      </div>
    )
  },
)
