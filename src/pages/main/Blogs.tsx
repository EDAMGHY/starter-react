import { BlogsFilter, BlogsListing } from "@/components"

export const Blogs = () => {
  return (
    <section className="py-8 space-y-16">
      <BlogsFilter />
      <BlogsListing />
    </section>
  )
}
