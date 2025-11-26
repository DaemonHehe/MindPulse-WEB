"use client"

import { usePathname } from "next/navigation"
import { Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pageTitles: Record<string, string> = {
  "/dashboard": "MindPulse",
  "/stress": "Stress & HRV",
  "/sleep": "Sleep",
  "/coach": "AI Coach",
  "/profile": "Profile",
}

export function AppHeader() {
  const pathname = usePathname()
  const title = pageTitles[pathname] || "MindPulse"

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-between h-14 px-4 max-w-lg mx-auto">
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="w-9 h-9">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-9 h-9" asChild>
            <Link href="/profile/settings">
              <Settings className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
