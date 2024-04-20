import { Button, Heading, Text } from "@/ui"
import { Section } from "@/shared"
import { analytics } from "./data"
import { createElement } from "react"
import { IconType } from "react-icons"

export const Analytics = () => {
  const topSection = (
    <div className="w-full flex justify-between items-center gap-5">
      <Heading gloria level={3}>
        Welcome Back Abdellah 👋🏻
      </Heading>
      <Button>Add Blog</Button>
    </div>
  )
  return (
    <Section
      title="Overview"
      className="flex flex-col gap-y-8"
      topSection={topSection}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {analytics.map((item, index) => (
          <AnalyticCard key={index} {...item} />
        ))}
      </div>
    </Section>
  )
}

const AnalyticCard = ({
  title,
  icon,
  number,
}: {
  title?: string
  icon?: IconType
  number?: number
}) => {
  return (
    <div className="flex bg-primary text-secondary px-5 py-8 rounded-lg gap-5 justify-between items-center overflow-hidden">
      <div>
        {title && <Heading level={5}>{title}</Heading>}
        {number && (
          <Text
            as="span"
            variant="custom"
            className="inline-block mt-2 font-bold text-4xl"
          >
            {number}
          </Text>
        )}
      </div>
      <div className="shrink-0 size-16 rounded-full p-1 bg-secondary text-primary flex justify-center items-center">
        {icon && createElement(icon, { className: "size-9" })}
      </div>
    </div>
  )
}
