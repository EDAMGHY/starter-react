import { MainCard, Section } from "@/shared"
import { featured_blogs } from "./data"

export const FeaturedBlogs = () => {
  return (
    <Section title="Featured" className="space-y-6">
      <MainCard {...featured_blogs} />
    </Section>
  )
}
