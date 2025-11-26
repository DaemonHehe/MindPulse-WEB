import { StressGauge } from "@/components/app/stress-gauge"
import { MetricChart } from "@/components/app/metric-chart"
import { StressHistory } from "@/components/app/stress-history"
import { QuickActions } from "@/components/app/quick-actions"
import Link from "next/link"
import { ChevronRight, Heart, Zap, Thermometer } from "lucide-react"

export default function StressPage() {
  return (
    <div className="px-4 py-6 space-y-6 max-w-lg mx-auto">
      {/* Current Stress Level */}
      <StressGauge level={23} status="Low" />

      {/* Real-time Chart */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Today's Stress Pattern</h3>
        <MetricChart
          data={[
            { time: "6AM", value: 15 },
            { time: "8AM", value: 22 },
            { time: "10AM", value: 35 },
            { time: "12PM", value: 28 },
            { time: "2PM", value: 42 },
            { time: "4PM", value: 38 },
            { time: "6PM", value: 25 },
            { time: "8PM", value: 18 },
          ]}
          color="primary"
          unit="%"
          showArea
        />
      </div>

      {/* Related Metrics */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Related Metrics</h3>
        <div className="space-y-2">
          <Link
            href="/stress/hrv"
            className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border hover:bg-card/70 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-green-500/10">
                <Zap className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="font-medium text-foreground">Heart Rate Variability</p>
                <p className="text-sm text-muted-foreground">48 ms average</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Link>
          <Link
            href="/stress/eda"
            className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border hover:bg-card/70 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10">
                <Thermometer className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="font-medium text-foreground">EDA & Skin Response</p>
                <p className="text-sm text-muted-foreground">2.4 μS current</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Link>
          <Link
            href="/stress/hrv"
            className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border hover:bg-card/70 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-red-500/10">
                <Heart className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="font-medium text-foreground">Heart Rate</p>
                <p className="text-sm text-muted-foreground">72 bpm resting</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* History */}
      <StressHistory />
    </div>
  )
}
