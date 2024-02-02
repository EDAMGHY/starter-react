import { ChangeEvent } from "react"

export interface IInput {
  variant?: "default" | "underline" | "transparent"
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "time"
    | "date"
    | "hidden"
  label?: string | null
  placeholder?: string | null
  hasError?: boolean
  errorMessage?: string
  name: string
  disabled?: boolean
}

export interface ICheckbox {
  variant?: "default"
  label?: string | null
  disabled?: boolean
  checked: boolean
  setChecked: (e: ChangeEvent<HTMLInputElement>) => unknown
  hasError?: boolean
  errorMessage?: string | null
  className?: string | null
}

export interface IInputButton {
  variant: "default" | "underline" | "transparent"
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "time"
    | "date"
    | "hidden"
  label?: string | null
  placeholder?: string | null
  hasError?: boolean
  errorMessage?: string | null
  className?: string | null
  disabled?: boolean
  buttonContent?: string | null
  icon?: string | null
  iconRight?: boolean
}

export type listItem = { value: string; content: string }

export interface ISelect {
  selected?: string
  setSelected: (val: string) => unknown
  variant: "default"
  list: listItem[]
  icon?: string | null
  iconRight?: boolean
  name?: string
  label?: string | null
  placeholder?: string | null
  hasError?: boolean
  errorMessage?: string | null
  className?: string | null
  disabled?: boolean
}

export interface ITextarea {
  variant: "default"
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => unknown
  handleTextareaChange: (val: string) => unknown
  name: string
  placeholder?: string
  label?: string | null
  hasError?: boolean
  errorMessage?: string | null
  rows?: number
  resize?: boolean
  showCounter?: boolean
  maxLength?: number
}

export interface IInputFile {
  onChange: (event: ChangeEvent<HTMLInputElement>) => unknown
  name: string
  label?: string | null
  hasError?: boolean
  errorMessage?: string | null
}

export interface IFileElement {
  onChange: (event: ChangeEvent<HTMLInputElement>) => unknown
  name: string
  label?: string | null
  hasError?: boolean
  errorMessage?: string | null
}
