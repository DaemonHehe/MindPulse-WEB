"use client"

import { useState } from "react"
import { ChevronLeft, Moon, Bell, Watch, Vibrate, Volume2 } from "lucide-react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    stressAlerts: true,
    sleepReminders: true,
    hapticFeedback: true,
    soundEffects: false,
    continuousMonitoring: true,
  })

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="px-4 py-6 space-y-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/profile" className="p-2 rounded-lg hover:bg-secondary transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-bold text-foreground">Settings</h1>
      </div>

      {/* Appearance */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Appearance</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Dark Mode</span>
            </div>
            <Switch checked={settings.darkMode} onCheckedChange={() => toggle("darkMode")} />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Notifications</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Push Notifications</span>
            </div>
            <Switch checked={settings.notifications} onCheckedChange={() => toggle("notifications")} />
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Stress Alerts</span>
            </div>
            <Switch checked={settings.stressAlerts} onCheckedChange={() => toggle("stressAlerts")} />
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Sleep Reminders</span>
            </div>
            <Switch checked={settings.sleepReminders} onCheckedChange={() => toggle("sleepReminders")} />
          </div>
        </div>
      </div>

      {/* Device */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Device</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-3">
              <Watch className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Continuous Monitoring</span>
            </div>
            <Switch checked={settings.continuousMonitoring} onCheckedChange={() => toggle("continuousMonitoring")} />
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-3">
              <Vibrate className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Haptic Feedback</span>
            </div>
            <Switch checked={settings.hapticFeedback} onCheckedChange={() => toggle("hapticFeedback")} />
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">Sound Effects</span>
            </div>
            <Switch checked={settings.soundEffects} onCheckedChange={() => toggle("soundEffects")} />
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Goals</h3>
        <div className="space-y-2">
          <div className="p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground">Daily Sleep Goal</span>
              <span className="text-primary font-medium">8 hours</span>
            </div>
            <input type="range" min="5" max="10" defaultValue="8" className="w-full accent-primary" />
          </div>
          <div className="p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground">Target HRV</span>
              <span className="text-primary font-medium">50 ms</span>
            </div>
            <input type="range" min="30" max="80" defaultValue="50" className="w-full accent-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}
