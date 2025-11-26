"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const weekData = [
  { day: "Mon", hours: 6.5, goal: 8 },
  { day: "Tue", hours: 7.2, goal: 8 },
  { day: "Wed", hours: 8.1, goal: 8 },
  { day: "Thu", hours: 5.8, goal: 8 },
  { day: "Fri", hours: 7.5, goal: 8 },
  { day: "Sat", hours: 8.8, goal: 8 },
  { day: "Sun", hours: 7.4, goal: 8 },
]

export function SleepChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const maxHours = 10

  return (
    <div className="p-4 rounded-xl bg-card/30 border border-border">
      {/* Chart */}
      <div className="flex items-end justify-between h-40 gap-2">
        {weekData.map((day, i) => {
          const heightPercent = (day.hours / maxHours) * 100
          const goalPercent = (day.goal / maxHours) * 100
          const metGoal = day.hours >= day.goal

          return (
            <div
              key={day.day}
              className="flex-1 flex flex-col items-center gap-2"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-32">
                {/* Goal line */}
                <div
                  className="absolute left-0 right-0 border-t-2 border-dashed border-muted-foreground/30"
                  style={{ bottom: `${goalPercent}%` }}
                />
                {/* Bar */}
                <div
                  className={cn(
                    "absolute bottom-0 left-1 right-1 rounded-t-lg transition-all duration-300",
                    metGoal ? "bg-accent" : "bg-primary",
                    hoveredIndex === i && "opacity-80",
                  )}
                  style={{
                    height: `${heightPercent}%`,
                    boxShadow:
                      hoveredIndex === i
                        ? `0 0 20px ${metGoal ? "rgba(180, 136, 255, 0.5)" : "rgba(110, 201, 255, 0.5)"}`
                        : undefined,
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{day.day}</span>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-primary" />
          <span className="text-xs text-muted-foreground">Below goal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-accent" />
          <span className="text-xs text-muted-foreground">Met goal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 border-t-2 border-dashed border-muted-foreground/50" />
          <span className="text-xs text-muted-foreground">8h goal</span>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredIndex !== null && (
        <div className="text-center mt-3">
          <span className="text-sm font-medium text-foreground">{weekData[hoveredIndex].hours}h</span>
          <span className="text-xs text-muted-foreground ml-2">on {weekData[hoveredIndex].day}</span>
        </div>
      )}
    </div>
  )
}
