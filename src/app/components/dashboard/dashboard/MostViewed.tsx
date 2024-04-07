import { DashboardSection } from "@/shared"
import { blogs } from "./data"
import { BlogCard } from "@/shared"

export const MostViewed = () => {
  return (
    <DashboardSection title="Most Viewed">
      <div className="pt-6">
        <BlogCard length={400} {...blogs[3]} />
      </div>
    </DashboardSection>
  )
}
