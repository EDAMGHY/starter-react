import { Checkbox, Input } from "@/ui"
import { useState } from "react"

export const Home = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <h1>Input</h1>
      <div className="p-4 flex flex-wrap gap-4">
        <Input name="Name" placeholder={"Enter Name"} />
        <Input name="Name" placeholder={"Enter Name"} variant="transparent" />
        <Input name="Name" placeholder={"Enter Name"} variant="underline" />
        <Checkbox
          checked={checked}
          setChecked={val => {
            setChecked(val.target?.checked)
            console.log("val", val.target?.checked)
          }}
          label={"Gender"}
          variant="default"
        />
      </div>
    </div>
  )
}
