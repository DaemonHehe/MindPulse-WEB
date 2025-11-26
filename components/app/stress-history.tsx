"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, TrendingUp, TrendingDown, Minus } from "lucide-react"

const historyData = [
  { date: "Today", avg: 23, high: 42, low: 15, trend: "down" as const },
  { date: "Yesterday", avg: 31, high: 58, low: 18, trend: "up" as const },
  { date: "Mon, Nov 24", avg: 28, high: 45, low: 12, trend: "stable" as const },
  { date: "Sun, Nov 23", avg: 19, high: 32, low: 10, trend: "down" as const },
  { date: "Sat, Nov 22", avg: 25, high: 40, low: 15, trend: "stable" as const },
]

export function StressHistory() {
  const [expanded, setExpanded] = useState(false)
  const displayData = expanded ? historyData : historyData.slice(0, 3)

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-red-400" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-green-400" />
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getBarColor = (avg: number) => {
    if (avg <= 25) return "bg-green-400"
    if (avg <= 50) return "bg-yellow-400"
    if (avg <= 75) return "bg-orange-400"
    return "bg-red-400"
  }

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-foreground">History</h3>
      <div className="space-y-2">
        {displayData.map((day, i) => (
          <div key={i} className="p-4 rounded-xl bg-card/30 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{day.date}</span>
              {getTrendIcon(day.trend)}
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={cn("h-full rounded-full transition-all duration-500", getBarColor(day.avg))}
                  style={{ width: `${day.avg}%` }}
                />
              </div>
              <span className="text-sm font-bold text-foreground w-12 text-right">{day.avg}%</span>
            </div>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>High: {day.high}%</span>
              <span>Low: {day.low}%</span>
            </div>
          </div>
        ))}
      </div>

      {historyData.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-center gap-1 w-full py-2 text-sm text-primary hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
          <ChevronDown className={cn("w-4 h-4 transition-transform", expanded && "rotate-180")} />
        </button>
      )}
    </div>
  )
}
