import { Header, SelectFilterButton } from "@/shared"
import { InputButton } from "@/ui"

export const BlogsFilter = () => {
  return (
    <Header title="Search" subtitle="Where Every Topic Finds a Home">
      <div className="flex gap-2.5 md:gap-5 items-center justify-between">
        <div className="w-full md:w-2/4 flex items-center gap-3">
          <InputButton placeholder="Search away..." className="!mb-0" />
        </div>
        <SelectFilterButton />
      </div>
    </Header>
  )
}
