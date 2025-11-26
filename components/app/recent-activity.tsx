import { Activity as ActivityIcon, Moon, Brain, Heart } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export type ActivityItem = {
  id: string | number
  title: string
  time: string
  href?: string
  icon?: LucideIcon
  color?: string
}

const defaultActivities: ActivityItem[] = [
  {
    id: 1,
    icon: ActivityIcon,
    title: "Stress check completed",
    time: "2 hours ago",
    color: "text-primary",
    href: "/stress",
  },
  {
    id: 2,
    icon: Moon,
    title: "Sleep logged: 7h 24m",
    time: "8 hours ago",
    color: "text-accent",
    href: "/sleep",
  },
  {
    id: 3,
    icon: Brain,
    title: "Coach session: Breathing exercise",
    time: "Yesterday",
    color: "text-green-400",
    href: "/coach",
  },
  {
    id: 4,
    icon: Heart,
    title: "Heart rate zone: Recovery",
    time: "Yesterday",
    color: "text-red-400",
    href: "/stress/hrv",
  },
]

export function RecentActivity({ items }: { items?: ActivityItem[] }) {
  const activities = items && items.length > 0 ? items : defaultActivities

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Recent Activity</h3>
        <Link href="/activity" className="text-xs text-primary hover:underline flex items-center gap-1">
          See all
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="space-y-2">
        {activities.map((activity) => {
          const Icon = activity.icon || ActivityIcon
          return (
            <Link
              key={activity.id}
              href={activity.href || "/activity"}
              className="flex items-center gap-3 p-3 rounded-xl bg-card/30 hover:bg-card/50 transition-colors"
            >
              <div className="p-2 rounded-lg bg-secondary">
                <Icon className={`w-4 h-4 ${activity.color || "text-primary"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
