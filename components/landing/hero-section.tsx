"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Activity, Heart, Brain, Thermometer, Zap, MessageCircle, Watch, Smartphone } from "lucide-react"
import { PulseAnimation } from "@/components/landing/pulse-animation"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <PulseAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
              <Activity className="h-4 w-4" />
              <span>AI-Powered Health Monitoring</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              <span className="text-primary">MindPulse</span>
              <br />
              <span className="text-muted-foreground">Real-time Health & Mood Insights</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Your personal AI well-being assistant that monitors physiological signals in real-time and provides
              empathetic, personalized coaching for stress management and emotional balance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Zap className="h-5 w-5" />
                Try Demo
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary gap-2 bg-transparent">
                <Smartphone className="h-5 w-5" />
                Download App (Soon)
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">93%</div>
                <div className="text-sm text-muted-foreground">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">Real-time</div>
                <div className="text-sm text-muted-foreground">Signal Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Biomarkers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mockups */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Phone Mockup */}
              <Card className="col-span-2 p-6 bg-card/50 backdrop-blur-xl border-border/50 shadow-2xl shadow-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Mobile Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-400" />
                      <span className="text-sm text-foreground">HRV</span>
                    </div>
                    <span className="text-sm font-mono text-primary">68 ms</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-accent" />
                      <span className="text-sm text-foreground">Stress Level</span>
                    </div>
                    <span className="text-sm font-mono text-yellow-400">Moderate</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-orange-400" />
                      <span className="text-sm text-foreground">Skin Temp</span>
                    </div>
                    <span className="text-sm font-mono text-primary">33.2°C</span>
                  </div>
                </div>
              </Card>

              {/* Smartwatch Mockup */}
              <Card className="p-4 bg-card/50 backdrop-blur-xl border-border/50 shadow-xl shadow-accent/5">
                <div className="flex items-center gap-2 mb-3">
                  <Watch className="h-4 w-4 text-accent" />
                  <span className="text-xs font-medium text-foreground">Empatica E4</span>
                </div>
                <div className="text-center py-4">
                  <div className="text-3xl font-bold text-primary">72</div>
                  <div className="text-xs text-muted-foreground">BPM</div>
                </div>
                <div className="h-12 flex items-end justify-center gap-1">
                  {[40, 60, 45, 80, 55, 70, 45, 60, 75, 50].map((h, i) => (
                    <div key={i} className="w-2 bg-primary/60 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </Card>

              {/* AI Chatbot */}
              <Card className="p-4 bg-card/50 backdrop-blur-xl border-border/50 shadow-xl shadow-primary/5">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">AI Coach</span>
                </div>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-xs text-foreground leading-relaxed">
                    {"Your stress looks slightly elevated — let's take a calming break together. 🌿"}
                  </p>
                </div>
              </Card>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
