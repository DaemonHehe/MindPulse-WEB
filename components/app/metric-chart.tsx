"use client"

import { useState } from "react"

interface DataPoint {
  time: string
  value: number
}

interface MetricChartProps {
  data: DataPoint[]
  color: "primary" | "accent" | "green" | "red" | "cyan"
  unit: string
  showArea?: boolean
  height?: number
}

const colorMap = {
  primary: {
    stroke: "#6EC9FF",
    fill: "rgba(110, 201, 255, 0.1)",
    glow: "rgba(110, 201, 255, 0.4)",
  },
  accent: {
    stroke: "#B488FF",
    fill: "rgba(180, 136, 255, 0.1)",
    glow: "rgba(180, 136, 255, 0.4)",
  },
  green: {
    stroke: "#4ADE80",
    fill: "rgba(74, 222, 128, 0.1)",
    glow: "rgba(74, 222, 128, 0.4)",
  },
  red: {
    stroke: "#F87171",
    fill: "rgba(248, 113, 113, 0.1)",
    glow: "rgba(248, 113, 113, 0.4)",
  },
  cyan: {
    stroke: "#22D3EE",
    fill: "rgba(34, 211, 238, 0.1)",
    glow: "rgba(34, 211, 238, 0.4)",
  },
}

export function MetricChart({ data, color, unit, showArea = false, height = 160 }: MetricChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const colors = colorMap[color]

  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue || 1
  const padding = 20

  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: 100 - ((d.value - minValue) / range) * 80 - 10,
    ...d,
  }))

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")
  const areaPath = `${linePath} L 100 100 L 0 100 Z`

  return (
    <div className="p-4 rounded-xl bg-card/30 border border-border">
      <svg viewBox={`0 0 100 100`} className="w-full" style={{ height }} preserveAspectRatio="none">
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.stroke} stopOpacity="0.3" />
            <stop offset="100%" stopColor={colors.stroke} stopOpacity="0" />
          </linearGradient>
          <filter id={`glow-${color}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {/* Area fill */}
        {showArea && <path d={areaPath} fill={`url(#gradient-${color})`} className="transition-all duration-300" />}

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke={colors.stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          filter={`url(#glow-${color})`}
          className="transition-all duration-300"
        />

        {/* Data points */}
        {points.map((point, i) => (
          <g key={i}>
            <circle
              cx={point.x}
              cy={point.y}
              r={hoveredIndex === i ? "4" : "2"}
              fill={colors.stroke}
              className="transition-all duration-200 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                filter: hoveredIndex === i ? `drop-shadow(0 0 6px ${colors.glow})` : undefined,
              }}
            />
          </g>
        ))}
      </svg>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        {data
          .filter((_, i) => i % 2 === 0 || i === data.length - 1)
          .map((d, i) => (
            <span key={i}>{d.time}</span>
          ))}
      </div>

      {/* Tooltip */}
      {hoveredIndex !== null && (
        <div className="text-center mt-2">
          <span className="text-sm font-medium" style={{ color: colors.stroke }}>
            {data[hoveredIndex].value}
            {unit}
          </span>
          <span className="text-xs text-muted-foreground ml-2">at {data[hoveredIndex].time}</span>
        </div>
      )}
    </div>
  )
}
