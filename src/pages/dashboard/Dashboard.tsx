import {
  Analytics,
  MostViewed,
  RecentBlogs,
  RecentCategories,
  RecentUsers,
} from "@/components"

export const Dashboard = () => {
  return (
    <section className="my-8 flex flex-col gap-y-8">
      <Analytics />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <MostViewed />
        <RecentBlogs />
        <RecentCategories />
        <RecentUsers />
      </div>
    </section>
  )
}
