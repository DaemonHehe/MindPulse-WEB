"use client"

import { Card } from "@/components/ui/card"
import { Database, Users, Watch, Activity, BarChart3, CheckCircle } from "lucide-react"

const datasetStats = [
  { label: "Participants", value: "15", icon: Users },
  { label: "Devices", value: "2", icon: Watch },
  { label: "Signals", value: "6+", icon: Activity },
  { label: "Accuracy", value: "80-93%", icon: BarChart3 },
]

const signals = [
  "ECG (Electrocardiogram)",
  "BVP (Blood Volume Pulse)",
  "EDA (Electrodermal Activity)",
  "Temperature",
  "ACC (3-axis Acceleration)",
  "EMG (Electromyogram)",
]

const states = [
  { name: "Stress", color: "bg-red-400" },
  { name: "Neutral", color: "bg-primary" },
  { name: "Amusement", color: "bg-accent" },
]

export function DatasetSection() {
  return (
    <section id="dataset" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm mb-6">
            <Database className="h-4 w-4" />
            <span>Training Data</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">About the WESAD Dataset</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our models are trained on the Wearable Stress and Affect Detection dataset — a gold standard in affective
            computing research.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {datasetStats.map((stat) => (
            <Card key={stat.label} className="p-6 bg-card/50 backdrop-blur-xl border-border/50 text-center">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Devices */}
          <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Watch className="h-5 w-5 text-primary" />
              Recording Devices
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">Empatica E4</span>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">Wrist</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Medical-grade wristband capturing BVP, EDA, temperature, and 3-axis acceleration.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">RespiBAN</span>
                  <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">Chest</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Chest-worn device for ECG, respiration, EDA, EMG, and temperature monitoring.
                </p>
              </div>
            </div>
          </Card>

          {/* Signals & States */}
          <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5 text-accent" />
              Recorded Signals
            </h3>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {signals.map((signal) => (
                <div key={signal} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>

            <h4 className="text-sm font-medium text-foreground mb-3">Affective States</h4>
            <div className="flex gap-3">
              {states.map((state) => (
                <div key={state.name} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${state.color}`} />
                  <span className="text-sm text-muted-foreground">{state.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Accuracy Benchmarks */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-primary/30 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Classification Accuracy Benchmarks</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">80%+</div>
              <div className="text-sm text-muted-foreground">3-class (Stress/Neutral/Amusement)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">93%+</div>
              <div className="text-sm text-muted-foreground">Binary (Stress vs Non-stress)</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
