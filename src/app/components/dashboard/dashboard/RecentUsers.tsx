import { DashCard, DashboardSection } from "@/shared"
import { users } from "./data"

export const RecentUsers = () => {
  return (
    <DashboardSection title="Recent Users">
      <div className="pt-6 space-y-6">
        {users.slice(0, 3).map((item, index) => (
          <DashCard key={index} rounded {...item} />
        ))}
      </div>
    </DashboardSection>
  )
}
