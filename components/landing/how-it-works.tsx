"use client"

import { Card } from "@/components/ui/card"
import { Database, Cpu, Brain, MessageSquare, Smartphone, ArrowRight, Activity, Cloud, Layers, Zap } from "lucide-react"

const stages = [
  {
    number: "01",
    title: "Data Acquisition",
    description: "Collect real-time physiological signals from wearable devices and environmental APIs.",
    icon: Database,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    signals: ["HRV", "EDA", "BVP", "Temp", "ACC", "UV Index", "AQI"],
  },
  {
    number: "02",
    title: "Diagnostic Processing",
    description: "Preprocess, segment, and normalize sensor data for feature extraction.",
    icon: Cpu,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    signals: ["Windowing", "HRV Extraction", "Normalization"],
  },
  {
    number: "03",
    title: "Context Fusion",
    description: "LSTM/CNN models classify affective states through multimodal fusion.",
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    signals: ["Stress", "Neutral", "Amusement"],
  },
  {
    number: "04",
    title: "AI Coaching",
    description: "LLM generates empathetic, personalized wellness recommendations.",
    icon: MessageSquare,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    signals: ["Contextual Prompts", "Personalized Response"],
  },
  {
    number: "05",
    title: "Interface",
    description: "Real-time visualizations and feedback loops on mobile/web.",
    icon: Smartphone,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    signals: ["Charts", "Recommendations", "Feedback"],
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
            <Layers className="h-4 w-4" />
            <span>5-Stage Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">How MindPulse Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A sophisticated pipeline that transforms raw physiological data into actionable wellness insights.
          </p>
        </div>

        {/* Desktop View - Horizontal Stepper */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-between relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />

            {stages.map((stage, index) => (
              <div key={stage.number} className="flex flex-col items-center flex-1 relative">
                <Card
                  className={`w-full max-w-[200px] p-6 ${stage.bgColor} border ${stage.borderColor} backdrop-blur-xl relative z-10`}
                >
                  <div className={`text-xs font-mono ${stage.color} mb-2`}>{stage.number}</div>
                  <stage.icon className={`h-8 w-8 ${stage.color} mb-3`} />
                  <h3 className="text-sm font-semibold text-foreground mb-2">{stage.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{stage.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {stage.signals.slice(0, 3).map((signal) => (
                      <span
                        key={signal}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                      >
                        {signal}
                      </span>
                    ))}
                  </div>
                </Card>

                {index < stages.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-16 h-5 w-5 text-primary/50 z-20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Vertical Stepper */}
        <div className="lg:hidden space-y-6">
          {stages.map((stage, index) => (
            <div key={stage.number} className="relative">
              {index < stages.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30" />
              )}

              <Card className={`p-6 ${stage.bgColor} border ${stage.borderColor} backdrop-blur-xl`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${stage.bgColor} border ${stage.borderColor}`}>
                    <stage.icon className={`h-6 w-6 ${stage.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-mono ${stage.color} mb-1`}>Stage {stage.number}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{stage.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{stage.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {stage.signals.map((signal) => (
                        <span
                          key={signal}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                        >
                          {signal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <Card className="mt-16 p-8 bg-card/50 backdrop-blur-xl border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>Wearable Sensors</span>
            </div>
            <ArrowRight className="h-4 w-4 text-primary/50" />
            <div className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-accent" />
              <span>Cloud Processing</span>
            </div>
            <ArrowRight className="h-4 w-4 text-accent/50" />
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <span>ML Models</span>
            </div>
            <ArrowRight className="h-4 w-4 text-primary/50" />
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              <span>LLM Coaching</span>
            </div>
            <ArrowRight className="h-4 w-4 text-accent/50" />
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" />
              <span>User Interface</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
