import { MetricChart } from "@/components/app/metric-chart"
import { HrvZones } from "@/components/app/hrv-zones"
import { MetricStats } from "@/components/app/metric-stats"
import { TimeRangeSelector } from "@/components/app/time-range-selector"

export default function HrvPage() {
  return (
    <div className="px-4 py-6 space-y-6 max-w-lg mx-auto">
      {/* Current HRV */}
      <div className="text-center p-6 rounded-2xl bg-card/50 border border-border">
        <p className="text-sm text-muted-foreground mb-1">Current HRV</p>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold text-green-400">48</span>
          <span className="text-xl text-muted-foreground">ms</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">Good recovery state</p>
      </div>

      {/* Time Range */}
      <TimeRangeSelector />

      {/* HRV Chart */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">HRV Trend</h3>
        <MetricChart
          data={[
            { time: "Mon", value: 42 },
            { time: "Tue", value: 45 },
            { time: "Wed", value: 38 },
            { time: "Thu", value: 51 },
            { time: "Fri", value: 47 },
            { time: "Sat", value: 55 },
            { time: "Sun", value: 48 },
          ]}
          color="green"
          unit=" ms"
          showArea
        />
      </div>

      {/* Heart Rate */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Heart Rate</h3>
        <MetricChart
          data={[
            { time: "6AM", value: 58 },
            { time: "9AM", value: 72 },
            { time: "12PM", value: 78 },
            { time: "3PM", value: 82 },
            { time: "6PM", value: 75 },
            { time: "9PM", value: 68 },
          ]}
          color="red"
          unit=" bpm"
        />
      </div>

      {/* HRV Zones */}
      <HrvZones />

      {/* Stats */}
      <MetricStats
        stats={[
          { label: "7-Day Avg", value: "46 ms" },
          { label: "30-Day Avg", value: "44 ms" },
          { label: "Best", value: "62 ms" },
          { label: "Lowest", value: "32 ms" },
        ]}
      />
    </div>
  )
}
