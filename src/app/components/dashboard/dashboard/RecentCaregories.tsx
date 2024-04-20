import { DashboardSection } from "@/shared"
import { categories } from "./data"
import { Heading, Text } from "@/ui"

export const RecentCategories = () => {
  return (
    <DashboardSection title="Recent Categories">
      <div className="pt-6 space-y-6">
        {categories.slice(0, 3).map((item, index) => (
          <CategoryCard index={index + 1} key={index} {...item} />
        ))}
      </div>
    </DashboardSection>
  )
}

const CategoryCard = ({
  index = 1,
  name,
  description,
}: {
  name?: string
  index: number
  description?: string
}) => {
  return (
    <div className="flex justify-start items-center gap-6">
      <Text
        as="span"
        variant="custom"
        className="inline-block text-2xl font-bold"
      >
        0{index}
      </Text>
      <div className="space-y-2">
        {name && (
          <Heading gloria level={4}>
            {name}
          </Heading>
        )}
        {description && <Text className="line-clamp-2">{description}</Text>}
      </div>
    </div>
  )
}
