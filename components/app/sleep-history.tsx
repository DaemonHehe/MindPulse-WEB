import { Moon, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const history = [
  { date: "Last Night", duration: "7h 24m", score: 82, quality: "Good" },
  { date: "Nov 24", duration: "6h 45m", score: 68, quality: "Fair" },
  { date: "Nov 23", duration: "8h 12m", score: 91, quality: "Excellent" },
  { date: "Nov 22", duration: "5h 30m", score: 52, quality: "Poor" },
]

export function SleepHistory() {
  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "Excellent":
        return "text-green-400"
      case "Good":
        return "text-accent"
      case "Fair":
        return "text-yellow-400"
      case "Poor":
        return "text-red-400"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Sleep History</h3>
        <Link href="/sleep/history" className="text-xs text-primary hover:underline flex items-center gap-1">
          See all
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="space-y-2">
        {history.map((night, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card/30 hover:bg-card/50 transition-colors">
            <div className="p-2 rounded-lg bg-accent/10">
              <Moon className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">{night.date}</p>
                <p className="text-sm font-bold text-foreground">{night.duration}</p>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <p className={cn("text-xs", getQualityColor(night.quality))}>{night.quality}</p>
                <p className="text-xs text-muted-foreground">Score: {night.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
