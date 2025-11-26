import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { TrendingUp, TrendingDown, Minus, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuickMetricCardProps {
  icon: LucideIcon
  label: string
  value: string
  unit?: string
  subvalue?: string
  trend: "up" | "down" | "stable"
  color: "red" | "blue" | "purple" | "green" | "orange" | "cyan"
  href: string
}

const colorMap = {
  red: "bg-red-500/10 text-red-400 border-red-500/20",
  blue: "bg-primary/10 text-primary border-primary/20",
  purple: "bg-accent/10 text-accent border-accent/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
}

const iconColorMap = {
  red: "text-red-400",
  blue: "text-primary",
  purple: "text-accent",
  green: "text-green-400",
  orange: "text-orange-400",
  cyan: "text-cyan-400",
}

export function QuickMetricCard({
  icon: Icon,
  label,
  value,
  unit,
  subvalue,
  trend,
  color,
  href,
}: QuickMetricCardProps) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus
  const trendColor = trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-muted-foreground"

  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col p-4 rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:bg-card/70 active:scale-[0.98]",
        "group",
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={cn("p-2 rounded-xl", colorMap[color])}>
          <Icon className="w-4 h-4" />
        </div>
        <TrendIcon className={cn("w-4 h-4", trendColor)} />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-foreground">{value}</span>
        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
      </div>
      {subvalue && <span className="text-xs text-muted-foreground mt-0.5">{subvalue}</span>}
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-muted-foreground">{label}</span>
        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  )
}

