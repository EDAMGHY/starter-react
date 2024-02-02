export const select = {
  default: {
    field: "relative min-w-[200px] max-w-full mb-4",
    label: "inline-block mb-2 capitalize",
    wrapper: "w-full relative",
    button: {
      base: "w-full justify-between inline-flex gap-2 items-center bg-secondary py-2 px-3 text-primary border-2 transition-all duration-300",
      active: "border-primary",
      inactive: "border-transparent",
      hasError: "has-error",
      icon: {
        base: "w-5 h-5 text-inherit transition-all ease-out duration-300",
        active: "-rotate-180",
        inactive: "",
      },
    },
    options: {
      wrapper:
        "min-w-full bg-secondary border-2 border-primary divide-y-2 divide-primary absolute left-1/2 -translate-x-1/2 top-[50px] z-[2]",
      option: {
        base: "py-3 px-3 hover:bg-primary text-primary hover:text-secondary transition-all duration-300 cursor-pointer",
        active: "",
        inactive: "",
      },
    },
    errorMessage:
      "absolute z-[1] -bottom-5 left-0 text-error text-xs font-normal inline-block",
    animation: {
      enter: "transition origin-top ease-out duration-300",
      enterFrom: "transform origin-top opacity-0 scale-75",
      enterTo: "transform origin-top opacity-100 scale-100",
      leave: "transition origin-top ease-in duration-300",
      leaveFrom: "transform origin-top opacity-100 scale-100",
      leaveTo: "transform origin-top opacity-0 scale-75",
    },
  },
}
