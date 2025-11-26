interface MetricStatsProps {
  stats: Array<{ label: string; value: string }>
}

export function MetricStats({ stats }: MetricStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className="p-4 rounded-xl bg-card/30 border border-border text-center">
          <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
          <p className="text-lg font-bold text-foreground">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
