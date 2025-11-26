import { HealthSummaryRing } from "@/components/app/health-summary-ring"
import { QuickMetricCard } from "@/components/app/quick-metric-card"
import { TodayInsights } from "@/components/app/today-insights"
import { RecentActivity } from "@/components/app/recent-activity"
import { Heart, Activity, Moon, Thermometer, Wind, Zap } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="px-4 py-6 space-y-6 max-w-lg mx-auto">
      {/* Greeting */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Good Morning</h2>
        <p className="text-muted-foreground">Here's your wellness overview</p>
      </div>

      {/* Health Score Ring */}
      <HealthSummaryRing score={78} label="Wellness Score" />

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-2 gap-3">
        <QuickMetricCard
          icon={Heart}
          label="Heart Rate"
          value="72"
          unit="bpm"
          trend="stable"
          color="red"
          href="/stress/hrv"
        />
        <QuickMetricCard
          icon={Activity}
          label="Stress Level"
          value="Low"
          subvalue="23%"
          trend="down"
          color="blue"
          href="/stress"
        />
        <QuickMetricCard icon={Moon} label="Sleep" value="7h 24m" trend="up" color="purple" href="/sleep" />
        <QuickMetricCard icon={Zap} label="HRV" value="48" unit="ms" trend="up" color="green" href="/stress/hrv" />
        <QuickMetricCard
          icon={Thermometer}
          label="Skin Temp"
          value="33.2"
          unit="°C"
          trend="stable"
          color="orange"
          href="/stress/eda"
        />
        <QuickMetricCard icon={Wind} label="EDA" value="2.4" unit="μS" trend="stable" color="cyan" href="/stress/eda" />
      </div>

      {/* Today's Insights */}
      <TodayInsights />

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  )
}
