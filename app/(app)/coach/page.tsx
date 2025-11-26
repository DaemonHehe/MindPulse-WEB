"use client"

import { useState } from "react"
import { CoachChat } from "@/components/app/coach-chat"
import { CoachExercises } from "@/components/app/coach-exercises"
import { CoachInsights } from "@/components/app/coach-insights"
import { cn } from "@/lib/utils"

const tabs = ["Chat", "Exercises", "Insights"]

export default function CoachPage() {
  const [activeTab, setActiveTab] = useState("Chat")

  return (
    <div className="flex flex-col h-[calc(100vh-7.5rem)] max-w-lg mx-auto">
      {/* Tab Navigation */}
      <div className="flex gap-2 p-4 pb-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 py-2 px-4 text-sm font-medium rounded-xl transition-all duration-200",
              activeTab === tab
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "Chat" && <CoachChat />}
        {activeTab === "Exercises" && <CoachExercises />}
        {activeTab === "Insights" && <CoachInsights />}
      </div>
    </div>
  )
}
