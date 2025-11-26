import { SleepRing } from "@/components/app/sleep-ring"
import { SleepStages } from "@/components/app/sleep-stages"
import { SleepChart } from "@/components/app/sleep-chart"
import { SleepHistory } from "@/components/app/sleep-history"
import { TimeRangeSelector } from "@/components/app/time-range-selector"
import { MetricStats } from "@/components/app/metric-stats"
import { Moon, Sunrise, Clock } from "lucide-react"

export default function SleepPage() {
  return (
    <div className="px-4 py-6 space-y-6 max-w-lg mx-auto">
      {/* Last Night Summary */}
      <div className="p-6 rounded-2xl bg-card/50 border border-border">
        <div className="flex items-center gap-2 mb-4">
          <Moon className="w-5 h-5 text-accent" />
          <span className="text-sm text-muted-foreground">Last Night</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">7h 24m</span>
            </div>
            <p className="text-accent text-sm mt-1">Good sleep</p>
          </div>
          <SleepRing score={82} />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Moon className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Bedtime</p>
              <p className="text-sm font-medium text-foreground">11:24 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-500/10">
              <Sunrise className="w-4 h-4 text-orange-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Wake up</p>
              <p className="text-sm font-medium text-foreground">6:48 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sleep Stages */}
      <SleepStages />

      {/* Time Range */}
      <TimeRangeSelector />

      {/* Sleep Duration Chart */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Sleep Duration</h3>
        <SleepChart />
      </div>

      {/* Sleep Consistency */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Sleep Consistency</h3>
        </div>
        <div className="p-4 rounded-xl bg-card/30 border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">This week</span>
            <span className="text-lg font-bold text-green-400">85%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-green-400 rounded-full" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Your bedtime varied by only 32 minutes this week. Great consistency!
          </p>
        </div>
      </div>

      {/* Stats */}
      <MetricStats
        stats={[
          { label: "Avg Duration", value: "7h 12m" },
          { label: "Avg Bedtime", value: "11:18 PM" },
          { label: "Best Night", value: "8h 45m" },
          { label: "Sleep Debt", value: "-1h 30m" },
        ]}
      />

      {/* History */}
      <SleepHistory />
    </div>
  )
}
