import type React from "react"
import { BottomNavigation } from "@/components/app/bottom-navigation"
import { AppHeader } from "@/components/app/app-header"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />
      <main className="flex-1 pb-20 overflow-y-auto">{children}</main>
      <BottomNavigation />
    </div>
  )
}
