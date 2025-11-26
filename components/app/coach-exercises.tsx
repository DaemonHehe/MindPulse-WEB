"use client"

import { useState } from "react"
import { Wind, Heart, Brain, Moon, Play, Check, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const exercises = [
  {
    id: "breathing",
    title: "4-7-8 Breathing",
    description: "Calm your nervous system",
    duration: "3 min",
    icon: Wind,
    color: "from-primary to-cyan-400",
    completed: true,
  },
  {
    id: "body-scan",
    title: "Body Scan",
    description: "Release physical tension",
    duration: "5 min",
    icon: Heart,
    color: "from-accent to-pink-400",
    completed: false,
  },
  {
    id: "mindfulness",
    title: "Mindful Moment",
    description: "Present awareness practice",
    duration: "2 min",
    icon: Brain,
    color: "from-green-400 to-emerald-400",
    completed: false,
  },
  {
    id: "sleep-prep",
    title: "Sleep Preparation",
    description: "Wind down for better rest",
    duration: "10 min",
    icon: Moon,
    color: "from-indigo-400 to-purple-400",
    completed: false,
  },
]

export function CoachExercises() {
  const [activeExercise, setActiveExercise] = useState<string | null>(null)

  return (
    <div className="p-4 space-y-4 overflow-y-auto h-full">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">Guided Exercises</h3>
          <p className="text-sm text-muted-foreground">1 of 4 completed today</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>20 min total</span>
        </div>
      </div>

      <div className="space-y-3">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className={cn(
              "p-4 rounded-2xl border border-border bg-card/50 transition-all",
              activeExercise === exercise.id && "ring-2 ring-primary",
            )}
          >
            <div className="flex items-start gap-4">
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
                  exercise.color,
                )}
              >
                <exercise.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground">{exercise.title}</h4>
                  {exercise.completed && (
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{exercise.description}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {exercise.duration}
                  </span>
                  <Button
                    size="sm"
                    variant={exercise.completed ? "outline" : "default"}
                    className="h-7 text-xs"
                    onClick={() => setActiveExercise(exercise.id)}
                  >
                    <Play className="w-3 h-3 mr-1" />
                    {exercise.completed ? "Repeat" : "Start"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Progress */}
      <div className="p-4 rounded-xl bg-card/30 border border-border">
        <h4 className="font-medium text-foreground mb-3">Weekly Progress</h4>
        <div className="flex justify-between">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs",
                  i < 3 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
                )}
              >
                {i < 3 ? <Check className="w-4 h-4" /> : day}
              </div>
              <span className="text-xs text-muted-foreground">{day}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">3 day streak! Keep it going.</p>
      </div>
    </div>
  )
}
