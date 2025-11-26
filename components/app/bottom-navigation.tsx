"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Activity, Moon, Brain, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/stress", label: "Stress", icon: Activity },
  { href: "/sleep", label: "Sleep", icon: Moon },
  { href: "/coach", label: "Coach", icon: Brain },
  { href: "/profile", label: "Profile", icon: User },
]

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/80 backdrop-blur-xl">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-200",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <item.icon
                className={cn("w-6 h-6 transition-all", isActive && "drop-shadow-[0_0_8px_rgba(110,201,255,0.6)]")}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
