export const checkbox = {
  default: {
    wrapper: "inline-flex gap-5 group w-full items-center justify-between",
    input: {
      base: "relative flex h-6 w-6 items-center justify-center rounded-md border-2",
      disabled: "border-black/20 cursor-not-allowed",
      checked: "border-primary",
      hasError: "!border-error",
      unchecked: "border-gray-300",
    },
    disabled: "text-black/20 cursor-not-allowed",
    hasError: "text-error",
    label: "inline-block",
    icon: "absolute left-1/2 top-1/2 !h-4 !w-4 -translate-x-1/2 -translate-y-1/2",
    errorMessage:
      "absolute -bottom-4 left-0 text-error text-xs font-normal inline-block",
  },
}
