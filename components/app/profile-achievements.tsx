import { Award, Flame, Target, Zap, Star, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

const achievements = [
  { icon: Flame, label: "14 Day Streak", unlocked: true, color: "from-orange-400 to-red-400" },
  { icon: Target, label: "Sleep Goal Master", unlocked: true, color: "from-accent to-purple-400" },
  { icon: Zap, label: "HRV Champion", unlocked: true, color: "from-green-400 to-emerald-400" },
  { icon: Star, label: "Mindfulness Pro", unlocked: false, color: "from-yellow-400 to-orange-400" },
  { icon: Trophy, label: "30 Day Journey", unlocked: false, color: "from-primary to-cyan-400" },
  { icon: Award, label: "Stress Master", unlocked: false, color: "from-pink-400 to-rose-400" },
]

export function ProfileAchievements() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Achievements</h3>
        <span className="text-xs text-muted-foreground">3 of 6 unlocked</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {achievements.map((achievement, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col items-center p-3 rounded-xl border transition-all",
              achievement.unlocked ? "bg-card/50 border-border" : "bg-card/20 border-border/50 opacity-50",
            )}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mb-2",
                achievement.unlocked ? `bg-gradient-to-br ${achievement.color}` : "bg-secondary",
              )}
            >
              <achievement.icon
                className={cn("w-5 h-5", achievement.unlocked ? "text-white" : "text-muted-foreground")}
              />
            </div>
            <span className="text-xs text-center text-foreground font-medium">{achievement.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
