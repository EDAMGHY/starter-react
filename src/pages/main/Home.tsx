import { FeaturedBlogs, PopularCategories, LatestBlogs } from "@/components"

export const Home = () => {
  return (
    <div className="home-sections space-y-10">
      <FeaturedBlogs />
      <PopularCategories />
      <LatestBlogs />
    </div>
  )
}
