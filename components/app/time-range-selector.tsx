"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const ranges = ["Day", "Week", "Month", "Year"]

export function TimeRangeSelector() {
  const [selected, setSelected] = useState("Week")

  return (
    <div className="flex gap-2 p-1 bg-secondary rounded-xl">
      {ranges.map((range) => (
        <button
          key={range}
          onClick={() => setSelected(range)}
          className={cn(
            "flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200",
            selected === range
              ? "bg-primary text-primary-foreground shadow-lg"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {range}
        </button>
      ))}
    </div>
  )
}
