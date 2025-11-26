"use client"

import { useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Activity, Heart, Sun, MessageSquare, AlertTriangle, Moon, TrendingUp, Shield } from "lucide-react"
import { createSeededRandom } from "@/lib/utils"

const features = [
  {
    icon: Activity,
    title: "Real-time Stress Detection",
    description:
      "Continuous monitoring of stress levels using advanced ML algorithms that analyze physiological patterns.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    icon: Heart,
    title: "HRV-based Monitoring",
    description: "Track heart rate variability to assess autonomic nervous system health and emotional resilience.",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/30",
  },
  {
    icon: Sun,
    title: "Environmental Awareness",
    description:
      "Integrates AQI, UV index, and temperature data to understand environmental impact on your well-being.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
  },
  {
    icon: MessageSquare,
    title: "LLM-Powered Coaching",
    description: "Empathetic AI companion that provides personalized, context-aware wellness recommendations.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    icon: AlertTriangle,
    title: "Early Warning System",
    description: "Proactive alerts for fatigue, overload risk, and potential burnout before they become critical.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/30",
  },
  {
    icon: Moon,
    title: "Sleep & Behavior Insights",
    description: "Analyze sleep patterns and behavioral trends to optimize recovery and daily performance.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
]

export function KeyFeatures() {
  const graphHeights = useMemo(() => {
    return features.map((_, featureIndex) => {
      const random = createSeededRandom(100 + featureIndex)
      return Array.from({ length: 12 }).map(
        (__, barIndex) => Number((20 + Math.sin(barIndex * 0.8 + featureIndex) * 15 + random() * 10).toFixed(4)),
      )
    })
  }, [])

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm mb-6">
            <Shield className="h-4 w-4" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Key Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive health monitoring powered by cutting-edge AI and wearable technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group p-6 bg-card/50 backdrop-blur-xl border-border/50 hover:${feature.borderColor} transition-all duration-300 hover:shadow-lg hover:shadow-${feature.color}/5`}
            >
              <div
                className={`inline-flex p-3 rounded-xl ${feature.bgColor} ${feature.borderColor} border mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>

              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Mini Graph Decoration */}
              <div className="mt-4 h-8 flex items-end justify-start gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 rounded-t ${feature.bgColor}`}
                    style={{
                      height: `${graphHeights[index][i]}px`,
                    }}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-primary/30 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="p-4 rounded-2xl bg-primary/20 border border-primary/30">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Continuous Learning & Adaptation</h3>
              <p className="text-muted-foreground">
                MindPulse learns your unique patterns over time, becoming more accurate and personalized. The AI adapts
                its coaching style and recommendations based on your feedback and physiological responses.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
