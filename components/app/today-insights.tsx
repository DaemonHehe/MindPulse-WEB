"use client"

import { useMemo, useState } from "react"
import { Lightbulb, X } from "lucide-react"
import { cn } from "@/lib/utils"

export type InsightItem = {
  id: string | number
  type?: "positive" | "suggestion" | "info"
  title: string
  description: string
}

const defaultInsights: InsightItem[] = [
  {
    id: 1,
    type: "positive",
    title: "Great HRV Recovery",
    description: "Your HRV increased 12% overnight, indicating good recovery.",
  },
  {
    id: 2,
    type: "suggestion",
    title: "Stress Pattern Detected",
    description: "You tend to feel stressed around 3 PM. Try a short walk.",
  },
  {
    id: 3,
    type: "info",
    title: "Sleep Consistency",
    description: "You've maintained consistent sleep times for 5 days.",
  },
]

interface TodayInsightsProps {
  items?: InsightItem[]
}

export function TodayInsights({ items }: TodayInsightsProps) {
  const [dismissed, setDismissed] = useState<string[]>([])
  const source = items && items.length > 0 ? items : defaultInsights

  const activeInsights = useMemo(
    () => source.filter((insight) => !dismissed.includes(String(insight.id))),
    [dismissed, source],
  )

  if (activeInsights.length === 0) return null

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Lightbulb className="w-5 h-5 text-accent" />
        <h3 className="font-semibold text-foreground">Today's Insights</h3>
      </div>
      <div className="space-y-2">
        {activeInsights.map((insight) => (
          <div
            key={insight.id}
            className={cn(
              "relative flex items-start gap-3 p-4 rounded-xl border bg-card/50 backdrop-blur-sm group",
              insight.type === "positive" && "border-green-500/20",
              insight.type === "suggestion" && "border-accent/20",
              insight.type === "info" && "border-primary/20",
            )}
          >
            <div
              className={cn(
                "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                insight.type === "positive" && "bg-green-400",
                insight.type === "suggestion" && "bg-accent",
                insight.type === "info" && "bg-primary",
              )}
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground text-sm">{insight.title}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{insight.description}</p>
            </div>
            <button
              onClick={() => setDismissed([...dismissed, String(insight.id)])}
              className="p-1 rounded-lg hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
