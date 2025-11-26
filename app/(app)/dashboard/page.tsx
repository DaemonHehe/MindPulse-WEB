import { formatDistanceToNow } from "date-fns"
import { HealthSummaryRing } from "@/components/app/health-summary-ring"
import { QuickMetricCard } from "@/components/app/quick-metric-card"
import { TodayInsights, type InsightItem } from "@/components/app/today-insights"
import { RecentActivity, type ActivityItem } from "@/components/app/recent-activity"
import {
  backendFetch,
  normalizePercent,
  type CoachingMessage,
  type JournalEntry,
  type Prediction,
  type User,
  type WindowData,
} from "@/lib/backend"
import { Heart, Activity, Moon, Thermometer, Wind, Zap, Brain } from "lucide-react"

type DashboardData = {
  user?: User
  latestPrediction?: Prediction | null
  latestWindow?: WindowData | null
  coaching?: CoachingMessage | null
  journal?: JournalEntry[]
}

async function safeGet<T>(path: string) {
  try {
    return await backendFetch<T>(path)
  } catch (error) {
    console.error(`[dashboard] Failed to fetch ${path}:`, error)
    return null
  }
}

async function getDashboardData(): Promise<DashboardData> {
  const [userRes, windowRes, predictionRes, coachingRes, journalRes] = await Promise.all([
    safeGet<{ user: User }>("/api/users/me"),
    safeGet<{ items: WindowData[] }>("/api/data/windows?limit=1"),
    safeGet<{ prediction: Prediction | null }>("/api/predictions/latest"),
    safeGet<{ message: CoachingMessage | null; prediction?: Prediction | null }>("/api/coaching/current"),
    safeGet<{ items: JournalEntry[] }>("/api/journal"),
  ])

  return {
    user: userRes?.data.user,
    latestWindow: windowRes?.data.items?.[0] || null,
    latestPrediction: coachingRes?.data.prediction ?? predictionRes?.data.prediction ?? null,
    coaching: coachingRes?.data.message ?? null,
    journal: journalRes?.data.items ?? [],
  }
}

function buildInsights(data: DashboardData, stressPercent?: number): InsightItem[] {
  const insights: InsightItem[] = []

  if (data.coaching?.headline || data.coaching?.message) {
    insights.push({
      id: "coach",
      type: "suggestion",
      title: data.coaching.headline || "Coach update",
      description: data.coaching.message || "We generated a new coaching recommendation.",
    })
  }

  if (stressPercent !== undefined) {
    insights.push({
      id: "stress",
      type: stressPercent > 60 ? "suggestion" : "positive",
      title: stressPercent > 60 ? "Stress elevated" : "Stress steady",
      description:
        stressPercent > 60
          ? "Signals suggest elevated stress. Try a quick breathing break."
          : "Stress looks steady compared to your last check.",
    })
  }

  if (data.latestWindow?.features?.steps) {
    insights.push({
      id: "steps",
      type: "info",
      title: "Steps synced",
      description: `Latest window captured ${Math.round(data.latestWindow.features.steps)} steps.`,
    })
  }

  return insights
}

function buildActivities(entries?: JournalEntry[]): ActivityItem[] {
  if (!entries?.length) return []

  return entries.slice(0, 4).map((entry) => ({
    id: entry.id,
    title: entry.note || `Mood logged (${entry.moodRating}/5)`,
    time: formatDistanceToNow(new Date(entry.timestamp), { addSuffix: true }),
    href: "/coach",
    icon: Brain,
    color: "text-accent",
  }))
}

function clamp(value: number, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value))
}

export default async function DashboardPage() {
  const data = await getDashboardData()
  const features = data.latestWindow?.features
  const stressPercent = normalizePercent(data.latestPrediction?.stressLevel)
  const wellnessScore = clamp(stressPercent !== undefined ? 100 - Math.round(stressPercent * 0.6) : 78)
  const insights = buildInsights(data, stressPercent)
  const activities = buildActivities(data.journal)

  const heartRate = features?.HR_mean
  const hrv = features?.HRV_RMSSD
  const skinTemp = features?.TEMP_mean
  const eda = features?.EDA_mean
  const sleepHours = data.user?.goals?.sleepHoursTarget ?? 7.4

  return (
    <div className="px-4 py-6 space-y-6 max-w-lg mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Welcome back{data.user ? `, ${data.user.name}` : ""}</h2>
        <p className="text-muted-foreground">Here&apos;s your wellness overview</p>
      </div>

      <HealthSummaryRing score={wellnessScore} label="Wellness Score" />

      <div className="grid grid-cols-2 gap-3">
        <QuickMetricCard
          icon={Heart}
          label="Heart Rate"
          value={heartRate !== undefined ? Math.round(heartRate).toString() : "72"}
          unit="bpm"
          trend="stable"
          color="red"
          href="/stress/hrv"
        />
        <QuickMetricCard
          icon={Activity}
          label="Stress Level"
          value={data.latestPrediction?.stressLabel || (stressPercent !== undefined ? `${stressPercent}%` : "Calm")}
          subvalue={stressPercent !== undefined ? `${stressPercent}%` : undefined}
          trend={stressPercent !== undefined && stressPercent > 60 ? "up" : "stable"}
          color="blue"
          href="/stress"
        />
        <QuickMetricCard
          icon={Moon}
          label="Sleep"
          value={`${sleepHours.toFixed(1)}h`}
          trend="stable"
          color="purple"
          href="/sleep"
        />
        <QuickMetricCard
          icon={Zap}
          label="HRV"
          value={hrv !== undefined ? Math.round(hrv).toString() : "48"}
          unit="ms"
          trend={hrv !== undefined && hrv > 50 ? "up" : "stable"}
          color="green"
          href="/stress/hrv"
        />
        <QuickMetricCard
          icon={Thermometer}
          label="Skin Temp"
          value={(skinTemp ?? 33.2).toFixed(1)}
          unit="C"
          trend="stable"
          color="orange"
          href="/stress/eda"
        />
        <QuickMetricCard
          icon={Wind}
          label="EDA"
          value={(eda ?? 2.4).toFixed(1)}
          unit="uS"
          trend="stable"
          color="cyan"
          href="/stress/eda"
        />
      </div>

      <TodayInsights items={insights} />
      <RecentActivity items={activities} />
    </div>
  )
}
