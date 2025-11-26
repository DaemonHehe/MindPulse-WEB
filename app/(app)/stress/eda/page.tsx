import { MetricChart } from "@/components/app/metric-chart"
import { MetricStats } from "@/components/app/metric-stats"
import { TimeRangeSelector } from "@/components/app/time-range-selector"
import { Thermometer, Droplets, Zap } from "lucide-react"

export default function EdaPage() {
  return (
    <div className="px-4 py-6 space-y-6 max-w-lg mx-auto">
      {/* Current Readings */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-card/50 border border-border text-center">
          <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-cyan-500/10 flex items-center justify-center">
            <Droplets className="w-5 h-5 text-cyan-400" />
          </div>
          <p className="text-xs text-muted-foreground mb-1">EDA Level</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-2xl font-bold text-foreground">2.4</span>
            <span className="text-sm text-muted-foreground">μS</span>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-card/50 border border-border text-center">
          <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-orange-500/10 flex items-center justify-center">
            <Thermometer className="w-5 h-5 text-orange-400" />
          </div>
          <p className="text-xs text-muted-foreground mb-1">Skin Temp</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-2xl font-bold text-foreground">33.2</span>
            <span className="text-sm text-muted-foreground">°C</span>
          </div>
        </div>
      </div>

      {/* Time Range */}
      <TimeRangeSelector />

      {/* EDA Chart */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Electrodermal Activity</h3>
        <MetricChart
          data={[
            { time: "6AM", value: 1.8 },
            { time: "8AM", value: 2.1 },
            { time: "10AM", value: 3.2 },
            { time: "12PM", value: 2.8 },
            { time: "2PM", value: 3.8 },
            { time: "4PM", value: 3.1 },
            { time: "6PM", value: 2.4 },
            { time: "8PM", value: 1.9 },
          ]}
          color="cyan"
          unit=" μS"
          showArea
        />
        <p className="text-xs text-muted-foreground">
          EDA measures skin conductance changes related to emotional arousal and stress responses.
        </p>
      </div>

      {/* Skin Temperature */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Skin Temperature</h3>
        <MetricChart
          data={[
            { time: "6AM", value: 32.1 },
            { time: "9AM", value: 32.8 },
            { time: "12PM", value: 33.4 },
            { time: "3PM", value: 33.8 },
            { time: "6PM", value: 33.2 },
            { time: "9PM", value: 32.6 },
          ]}
          color="primary"
          unit="°C"
        />
      </div>

      {/* Peak Detection */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-accent" />
          <h3 className="font-semibold text-foreground">SCR Peaks Detected</h3>
        </div>
        <div className="p-4 rounded-xl bg-card/30 border border-border">
          <div className="flex items-center justify-between mb-3">
            <span className="text-foreground">Today's Peaks</span>
            <span className="text-2xl font-bold text-accent">12</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Skin Conductance Response peaks indicate moments of heightened emotional or stress arousal.
          </p>
        </div>
      </div>

      {/* Stats */}
      <MetricStats
        stats={[
          { label: "Avg EDA", value: "2.6 μS" },
          { label: "Peak EDA", value: "4.2 μS" },
          { label: "Avg Temp", value: "33.1°C" },
          { label: "SCR Peaks/Day", value: "14" },
        ]}
      />
    </div>
  )
}
