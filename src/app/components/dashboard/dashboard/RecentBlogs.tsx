import { DashCard, DashboardSection } from "@/shared"
import { blogs } from "./data"

export const RecentBlogs = () => {
  return (
    <DashboardSection title="Recent Blogs">
      <div className="pt-6 space-y-6">
        {blogs.slice(0, 3).map((item, index) => (
          <DashCard key={index} {...item} />
        ))}
      </div>
    </DashboardSection>
  )
}
