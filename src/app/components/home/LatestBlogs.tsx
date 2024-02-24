import { MainCard, Section } from "@/shared"
import { latest_blogs } from "./data"

export const LatestBlogs = () => {
  return (
    <Section className="space-y-6" title="Popular Categories">
      <div className="grid grid-cols-1 gap-8">
        {latest_blogs.map((blog, index) => (
          <LatestBlogCard key={index} reverse={index % 2 !== 0} {...blog} />
        ))}
      </div>
    </Section>
  )
}
const LatestBlogCard = ({ ...rest }) => {
  return <MainCard {...rest} />
}
