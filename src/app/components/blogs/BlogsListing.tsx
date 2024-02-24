import { blogs } from "./data"
import { BlogCard } from "@/shared"

export const BlogsListing = () => {
  return (
    <div className="gap-10 md:gap-y-10 md:gap-x-6 grid grid-cols-1 md:grid-cols-2">
      {blogs.map((item, index) => (
        <BlogCard key={index} {...item} />
      ))}
    </div>
  )
}
