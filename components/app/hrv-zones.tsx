export function HrvZones() {
  const zones = [
    { label: "Optimal", range: "50+ ms", percent: 35, color: "bg-green-400" },
    { label: "Good", range: "40-50 ms", percent: 45, color: "bg-primary" },
    { label: "Fair", range: "30-40 ms", percent: 15, color: "bg-yellow-400" },
    { label: "Low", range: "<30 ms", percent: 5, color: "bg-red-400" },
  ]

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-foreground">Time in Zones</h3>
      <div className="p-4 rounded-xl bg-card/30 border border-border space-y-4">
        {zones.map((zone) => (
          <div key={zone.label} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">{zone.label}</span>
              <span className="text-muted-foreground">
                {zone.range} ({zone.percent}%)
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${zone.color}`} style={{ width: `${zone.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
