"use client"

import { Play, Wind, BookOpen, Bell } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    icon: Play,
    label: "Start Check",
    description: "2 min stress scan",
    href: "/stress/check",
    color: "bg-primary/10 text-primary hover:bg-primary/20",
  },
  {
    icon: Wind,
    label: "Breathe",
    description: "Guided exercise",
    href: "/coach?exercise=breathing",
    color: "bg-green-500/10 text-green-400 hover:bg-green-500/20",
  },
  {
    icon: BookOpen,
    label: "Journal",
    description: "Log your mood",
    href: "/coach?tab=journal",
    color: "bg-accent/10 text-accent hover:bg-accent/20",
  },
  {
    icon: Bell,
    label: "Alerts",
    description: "Set reminders",
    href: "/profile/settings",
    color: "bg-orange-500/10 text-orange-400 hover:bg-orange-500/20",
  },
]

export function QuickActions() {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-foreground">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={`flex flex-col items-center justify-center p-4 rounded-xl border border-border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${action.color}`}
          >
            <action.icon className="w-6 h-6 mb-2" />
            <span className="font-medium text-sm">{action.label}</span>
            <span className="text-xs opacity-70">{action.description}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
