import { Activity, Moon, Brain, Heart } from "lucide-react"

const stats = [
  { label: "Days Active", value: "47", icon: Activity, color: "text-primary" },
  { label: "Avg Sleep", value: "7.2h", icon: Moon, color: "text-accent" },
  { label: "Sessions", value: "23", icon: Brain, color: "text-green-400" },
  { label: "Avg HRV", value: "46ms", icon: Heart, color: "text-red-400" },
]

export function ProfileStats() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center p-3 rounded-xl bg-card/50 border border-border">
          <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
          <span className="text-lg font-bold text-foreground">{stat.value}</span>
          <span className="text-xs text-muted-foreground text-center">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
