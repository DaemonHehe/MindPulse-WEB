"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const stages = [
  { name: "Awake", duration: "24m", percent: 5, color: "bg-orange-400" },
  { name: "REM", duration: "1h 32m", percent: 21, color: "bg-accent" },
  { name: "Light", duration: "3h 48m", percent: 51, color: "bg-primary" },
  { name: "Deep", duration: "1h 40m", percent: 23, color: "bg-blue-600" },
]

const timeline = [
  { stage: "Light", start: 0, end: 15 },
  { stage: "Deep", start: 15, end: 30 },
  { stage: "Light", start: 30, end: 40 },
  { stage: "REM", start: 40, end: 55 },
  { stage: "Awake", start: 55, end: 58 },
  { stage: "Light", start: 58, end: 70 },
  { stage: "Deep", start: 70, end: 82 },
  { stage: "REM", start: 82, end: 95 },
  { stage: "Light", start: 95, end: 100 },
]

const stageColors: Record<string, string> = {
  Awake: "bg-orange-400",
  REM: "bg-accent",
  Light: "bg-primary",
  Deep: "bg-blue-600",
}

export function SleepStages() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-foreground">Sleep Stages</h3>

      {/* Timeline visualization */}
      <div className="space-y-2">
        <div className="flex h-8 rounded-lg overflow-hidden">
          {timeline.map((segment, i) => (
            <div
              key={i}
              className={cn(
                stageColors[segment.stage],
                "transition-opacity cursor-pointer",
                selectedStage && selectedStage !== segment.stage && "opacity-40",
              )}
              style={{ width: `${segment.end - segment.start}%` }}
              onMouseEnter={() => setSelectedStage(segment.stage)}
              onMouseLeave={() => setSelectedStage(null)}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>11:24 PM</span>
          <span>2:00 AM</span>
          <span>4:00 AM</span>
          <span>6:48 AM</span>
        </div>
      </div>

      {/* Stage breakdown */}
      <div className="grid grid-cols-2 gap-2">
        {stages.map((stage) => (
          <div
            key={stage.name}
            className={cn(
              "p-3 rounded-xl bg-card/30 border border-border transition-all cursor-pointer",
              selectedStage === stage.name && "ring-2 ring-accent",
            )}
            onMouseEnter={() => setSelectedStage(stage.name)}
            onMouseLeave={() => setSelectedStage(null)}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={cn("w-3 h-3 rounded-full", stage.color)} />
              <span className="text-sm text-foreground">{stage.name}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-foreground">{stage.duration}</span>
              <span className="text-xs text-muted-foreground">{stage.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
