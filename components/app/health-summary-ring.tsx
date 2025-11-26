"use client"

import { useEffect, useState } from "react"

interface HealthSummaryRingProps {
  score: number
  label: string
}

export function HealthSummaryRing({ score, label }: HealthSummaryRingProps) {
  const [animatedScore, setAnimatedScore] = useState(0)
  const circumference = 2 * Math.PI * 80
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 100)
    return () => clearTimeout(timer)
  }, [score])

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400"
    if (score >= 60) return "text-primary"
    if (score >= 40) return "text-yellow-400"
    return "text-red-400"
  }

  const getStrokeColor = (score: number) => {
    if (score >= 80) return "stroke-green-400"
    if (score >= 60) return "stroke-primary"
    if (score >= 40) return "stroke-yellow-400"
    return "stroke-red-400"
  }

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 180 180">
          {/* Background ring */}
          <circle cx="90" cy="90" r="80" fill="none" className="stroke-secondary" strokeWidth="12" />
          {/* Progress ring */}
          <circle
            cx="90"
            cy="90"
            r="80"
            fill="none"
            className={`${getStrokeColor(score)} transition-all duration-1000 ease-out`}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              filter: "drop-shadow(0 0 10px rgba(110, 201, 255, 0.4))",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-5xl font-bold ${getScoreColor(score)}`}>{animatedScore}</span>
          <span className="text-sm text-muted-foreground mt-1">{label}</span>
        </div>
      </div>
    </div>
  )
}
