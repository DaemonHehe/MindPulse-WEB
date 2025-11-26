import { ProfileHeader } from "@/components/app/profile-header"
import { ProfileStats } from "@/components/app/profile-stats"
import { ProfileAchievements } from "@/components/app/profile-achievements"
import { ProfileMenu } from "@/components/app/profile-menu"

export default function ProfilePage() {
  return (
    <div className="px-4 py-6 space-y-6 max-w-lg mx-auto">
      <ProfileHeader />
      <ProfileStats />
      <ProfileAchievements />
      <ProfileMenu />
    </div>
  )
}
