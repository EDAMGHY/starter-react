import { Heading, Text } from "@/ui"
import { Section } from "@/shared"
import { FiPieChart, FiBarChart2 } from "react-icons/fi"
import { IconType } from "react-icons"
import { createElement } from "react"

export const PopularCategories = () => {
  return (
    <Section className="space-y-6" title="Popular Categories">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5 w-full">
        {popular_categories.map((category, index) => (
          <PopularCategoryCard key={index} {...category} />
        ))}
      </div>
    </Section>
  )
}

const PopularCategoryCard = ({
  icon,
  title,
  description,
}: IPopularCategory) => {
  return (
    <div className="w-full bg-primary text-secondary p-5 rounded-xl flex-col flex items-start justify-center gap-2.5">
      {icon && createElement(icon, { className: "w-[36px] h-[36px]" })}
      {title && <Heading level={4}> {title} </Heading>}
      {description && <Text> {description} </Text>}
    </div>
  )
}

interface IPopularCategory {
  icon?: IconType
  title?: string
  description?: string
}

const popular_categories: IPopularCategory[] = [
  {
    icon: FiPieChart,
    title: "Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum animi sapiente voluptate voluptates.",
  },
  {
    icon: FiBarChart2,
    title: "Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum animi sapiente voluptate voluptates.",
  },
  {
    icon: FiPieChart,
    title: "Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum animi sapiente voluptate voluptates.",
  },
  {
    icon: FiBarChart2,
    title: "Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum animi sapiente voluptate voluptates.",
  },
]
