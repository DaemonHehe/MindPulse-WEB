"use client"

import { Card } from "@/components/ui/card"
import { Activity, Heart, Zap, Moon, Sun, Wind, MessageCircle, TrendingUp, TrendingDown } from "lucide-react"

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
            <Activity className="h-4 w-4" />
            <span>Live Dashboard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Dashboard Preview</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beautiful visualizations that make complex health data easy to understand.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Stress Graph */}
          <Card className="lg:col-span-2 p-6 bg-card/50 backdrop-blur-xl border-border/50 shadow-xl shadow-primary/5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Stress Prediction (LSTM)</h3>
                <p className="text-sm text-muted-foreground">Last 24 hours</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="flex items-center gap-1 text-primary">
                  <TrendingDown className="h-4 w-4" /> -12%
                </span>
              </div>
            </div>

            {/* Chart Mockup */}
            <div className="h-48 relative">
              <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="stressGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6EC9FF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#6EC9FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,80 Q50,60 100,70 T200,50 T300,75 T400,45" fill="none" stroke="#6EC9FF" strokeWidth="3" />
                <path d="M0,80 Q50,60 100,70 T200,50 T300,75 T400,45 L400,150 L0,150 Z" fill="url(#stressGradient)" />
                {/* Data points */}
                <circle cx="100" cy="70" r="4" fill="#6EC9FF" />
                <circle cx="200" cy="50" r="4" fill="#6EC9FF" />
                <circle cx="300" cy="75" r="4" fill="#6EC9FF" />
                <circle cx="400" cy="45" r="4" fill="#6EC9FF" />
              </svg>

              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground -ml-6">
                <span>High</span>
                <span>Med</span>
                <span>Low</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
              <div className="flex gap-4">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  Stress Level
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  Threshold
                </span>
              </div>
            </div>
          </Card>

          {/* HRV Trends */}
          <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50 shadow-xl shadow-primary/5">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-red-400" />
              <h3 className="text-lg font-semibold text-foreground">HRV Trends</h3>
            </div>

            <div className="text-center py-6">
              <div className="text-4xl font-bold text-primary">68</div>
              <div className="text-sm text-muted-foreground">ms average</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">RMSSD</span>
                <span className="text-sm font-mono text-foreground">42.3 ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">SDNN</span>
                <span className="text-sm font-mono text-foreground">58.7 ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">pNN50</span>
                <span className="text-sm font-mono text-foreground">12.4%</span>
              </div>
            </div>

            <div className="mt-4 h-16 flex items-end justify-center gap-1">
              {[45, 52, 48, 55, 60, 58, 65, 62, 68, 64, 70, 68].map((h, i) => (
                <div
                  key={i}
                  className="w-3 bg-red-400/60 rounded-t transition-all hover:bg-red-400"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </Card>

          {/* EDA Peak Detector */}
          <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50 shadow-xl shadow-accent/5">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold text-foreground">EDA Peaks</h3>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl font-bold text-accent">23</div>
                <div className="text-sm text-muted-foreground">peaks/hour</div>
              </div>
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+5</span>
              </div>
            </div>

            <div className="h-20 relative">
              <svg className="w-full h-full" viewBox="0 0 200 60">
                <path
                  d="M0,50 L20,50 L25,20 L30,50 L50,50 L55,30 L60,50 L80,50 L85,15 L90,50 L110,50 L115,25 L120,50 L140,50 L145,10 L150,50 L170,50 L175,35 L180,50 L200,50"
                  fill="none"
                  stroke="#B488FF"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </Card>

          {/* Sleep Pattern */}
          <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50 shadow-xl shadow-primary/5">
            <div className="flex items-center gap-2 mb-4">
              <Moon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Sleep Quality</h3>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl font-bold text-foreground">7h 23m</div>
                <div className="text-sm text-muted-foreground">last night</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-primary">82%</div>
                <div className="text-xs text-muted-foreground">quality score</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-16 text-xs text-muted-foreground">Deep</div>
                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-primary rounded-full" />
                </div>
                <span className="text-xs text-muted-foreground">1h 45m</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 text-xs text-muted-foreground">Light</div>
                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-accent rounded-full" />
                </div>
                <span className="text-xs text-muted-foreground">3h 20m</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 text-xs text-muted-foreground">REM</div>
                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary/60 rounded-full" />
                </div>
                <span className="text-xs text-muted-foreground">2h 18m</span>
              </div>
            </div>
          </Card>

          {/* Environmental Widgets */}
          <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50 shadow-xl shadow-primary/5">
            <h3 className="text-lg font-semibold text-foreground mb-4">Environment</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-secondary/50 text-center">
                <Sun className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
                <div className="text-lg font-semibold text-foreground">UV 4</div>
                <div className="text-xs text-muted-foreground">Moderate</div>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50 text-center">
                <Wind className="h-5 w-5 text-primary mx-auto mb-1" />
                <div className="text-lg font-semibold text-foreground">AQI 42</div>
                <div className="text-xs text-muted-foreground">Good</div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
              <p className="text-xs text-green-400 text-center">✓ Optimal conditions for outdoor activity</p>
            </div>
          </Card>

          {/* AI Chatbot Interface */}
          <Card className="lg:col-span-3 p-6 bg-card/50 backdrop-blur-xl border-border/50 shadow-xl shadow-accent/5">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold text-foreground">AI Wellness Coach</h3>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 p-4 rounded-2xl rounded-tl-none bg-secondary/50">
                  <p className="text-sm text-foreground">
                    {
                      "Good afternoon! I noticed your HRV has been slightly lower than usual today, and your stress levels peaked around 2 PM. This might be related to the back-to-back meetings I detected in your calendar."
                    }
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="flex-1 max-w-md p-4 rounded-2xl rounded-tr-none bg-primary/20">
                  <p className="text-sm text-foreground">
                    {"That makes sense. I did feel overwhelmed during those meetings. What do you suggest?"}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-accent">You</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 p-4 rounded-2xl rounded-tl-none bg-secondary/50">
                  <p className="text-sm text-foreground">
                    {
                      "I recommend a 5-minute breathing exercise right now. Your current environment is perfect for it — the air quality is excellent and the temperature is comfortable. Would you like me to guide you through a box breathing session? 🌿"
                    }
                  </p>
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs hover:bg-primary/30 transition-colors">
                      Start Session
                    </button>
                    <button className="px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs hover:bg-secondary/80 transition-colors">
                      Remind Later
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
