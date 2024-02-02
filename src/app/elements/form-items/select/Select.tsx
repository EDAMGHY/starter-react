import clsx from "clsx"
import { forwardRef, useEffect, Ref, useRef, useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import { Transition } from "@headlessui/react"
import { ISelect } from "@/types"
import { select } from "./theme"

const listItems = [
  {
    value: "Agadir",
    content: "Agadir",
  },
  {
    value: "Casablanca",
    content: "Casablanca",
  },
  {
    value: "Paris",
    content: "Paris",
  },
]

export const Select = forwardRef(
  (
    {
      selected,
      setSelected,
      variant = "default",
      icon,
      iconRight = true,
      list = listItems,
      label,
      name,
      hasError = false,
      errorMessage,
      className,
      ...rest
    }: ISelect,
    ref: Ref<HTMLInputElement>,
  ) => {
    const options = [
      {
        value: "",
        content: "Select an option",
      },
      ...list,
    ]

    const selectRef = useRef<HTMLDivElement>(null)

    const [showSelect, setShowSelect] = useState(false)

    const toggleSelect = () => {
      setShowSelect(prev => !prev)
    }

    const handleChangeSelect = (item: string) => {
      setSelected(item)
      closeSelect()
    }

    const closeSelect = () => {
      setShowSelect(false)
    }

    useEffect(() => {
      const handleOutsideClick = (e: Event) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
          closeSelect()
        }
      }

      document.addEventListener("click", handleOutsideClick, true)
      return () => {
        document.removeEventListener("click", handleOutsideClick, true)
      }
    }, [])

    return (
      <div ref={selectRef} className={clsx(select?.[variant].field, className)}>
        {label && (
          <label className={clsx(select?.[variant].label)} htmlFor={name}>
            {label}
          </label>
        )}
        <div className={clsx(select?.[variant].wrapper)}>
          {icon && icon}

          <input
            ref={ref}
            type="hidden"
            id={name}
            name={name}
            value={selected}
            {...rest}
          />
          <button
            onClick={toggleSelect}
            className={clsx(
              select?.[variant].button.base,
              showSelect
                ? select?.[variant].button.active
                : select?.[variant].button.inactive,
            )}
          >
            <span>{selected ? selected : "Select an option"}</span>

            {iconRight && (
              <FiChevronDown
                className={clsx(
                  select?.[variant].button.icon.base,
                  showSelect
                    ? select?.[variant].button.icon.active
                    : select?.[variant].button.icon.inactive,
                )}
              />
            )}
          </button>

          <Transition
            as={"ul"}
            show={showSelect}
            {...select?.[variant]?.animation}
            className={clsx(select?.[variant].options.wrapper)}
          >
            {options?.map((item, index) => (
              <li
                key={index}
                onClick={() => handleChangeSelect(item)}
                className={clsx(
                  select?.[variant].options.option.base,
                  selected === item.value
                    ? select?.[variant].options.option.active
                    : select?.[variant].options.option.inactive,
                )}
                data-value={item.value}
              >
                {item.content}
              </li>
            ))}
          </Transition>
        </div>
        {hasError && errorMessage && (
          <p className={clsx(select?.[variant].errorMessage)}>{errorMessage}</p>
        )}
      </div>
    )
  },
)
