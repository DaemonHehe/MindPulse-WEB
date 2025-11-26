"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface StressGaugeProps {
  level: number
  status: "Low" | "Moderate" | "High" | "Very High"
}

export function StressGauge({ level, status }: StressGaugeProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedLevel(level), 100)
    return () => clearTimeout(timer)
  }, [level])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Low":
        return "text-green-400"
      case "Moderate":
        return "text-yellow-400"
      case "High":
        return "text-orange-400"
      case "Very High":
        return "text-red-400"
      default:
        return "text-primary"
    }
  }

  const getGaugeColor = (level: number) => {
    if (level <= 25) return "bg-green-400"
    if (level <= 50) return "bg-yellow-400"
    if (level <= 75) return "bg-orange-400"
    return "bg-red-400"
  }

  return (
    <div className="p-6 rounded-2xl bg-card/50 border border-border">
      <div className="text-center mb-4">
        <p className="text-sm text-muted-foreground mb-1">Current Stress Level</p>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold text-foreground">{animatedLevel}</span>
          <span className="text-xl text-muted-foreground">%</span>
        </div>
        <p className={cn("text-lg font-medium mt-1", getStatusColor(status))}>{status}</p>
      </div>

      {/* Gauge Bar */}
      <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
        <div
          className={cn(
            "absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out",
            getGaugeColor(level),
          )}
          style={{
            width: `${animatedLevel}%`,
            boxShadow: `0 0 20px ${level <= 25 ? "rgba(74, 222, 128, 0.5)" : level <= 50 ? "rgba(250, 204, 21, 0.5)" : level <= 75 ? "rgba(251, 146, 60, 0.5)" : "rgba(248, 113, 113, 0.5)"}`,
          }}
        />
        {/* Markers */}
        <div className="absolute inset-0 flex justify-between px-1">
          {[25, 50, 75].map((mark) => (
            <div key={mark} className="w-0.5 h-full bg-background/50" style={{ marginLeft: `${mark}%` }} />
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>Low</span>
        <span>Moderate</span>
        <span>High</span>
        <span>Very High</span>
      </div>
    </div>
  )
}
