import { ChangeEvent, Ref, forwardRef, useState } from "react"
import clsx from "clsx"
import { textarea } from "./theme"
import { ITextarea } from "@/types"

export const Textarea = forwardRef(
  (
    {
      variant = "default",
      placeholder,
      handleTextareaChange,
      label,
      hasError,
      errorMessage,
      rows = 1,
      resize = true,
      showCounter = false,
      maxLength = 100,
      onChange,
      name,
      ...rest
    }: ITextarea,
    ref: Ref<HTMLTextAreaElement>,
  ) => {
    const [length, setLength] = useState(0)
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const inputValue = e.target.value
      setLength(inputValue.split("").length)
      handleTextareaChange?.(e.target.value)
    }
    return (
      <div className={clsx("relative")}>
        {label && (
          <label className={clsx(textarea[variant].label)} htmlFor={name}>
            {label}
          </label>
        )}
        <div className={clsx("w-full")}>
          <textarea
            ref={ref}
            className={clsx(
              textarea[variant].base,
              !resize && textarea[variant].resize,
              hasError && textarea[variant].hasError,
            )}
            placeholder={placeholder}
            onChange={e => {
              onTextareaChange(e)
              onChange(e)
            }}
            rows={rows}
            maxLength={showCounter ? maxLength : undefined}
            id={name}
            name={name}
            {...rest}
          />
          {showCounter && maxLength !== null && (
            <span
              className={clsx(textarea?.[variant]?.counter)}
            >{`${length}/${maxLength}`}</span>
          )}
          {errorMessage && hasError && (
            <p className={textarea[variant].errorMessage}>{errorMessage}</p>
          )}
        </div>
      </div>
    )
  },
)

export default Textarea

Textarea.displayName = "Textarea"
