import { TrendingUp, Lightbulb, Target, Award } from "lucide-react"

const insights = [
  {
    type: "trend",
    icon: TrendingUp,
    title: "Stress Improvement",
    description: "Your average stress decreased 18% compared to last week. Breathing exercises seem to be helping!",
    color: "text-green-400 bg-green-500/10",
  },
  {
    type: "pattern",
    icon: Lightbulb,
    title: "Afternoon Pattern",
    description:
      "Your stress tends to spike between 2-4 PM on weekdays. Consider scheduling a short break during this time.",
    color: "text-accent bg-accent/10",
  },
  {
    type: "goal",
    icon: Target,
    title: "Sleep Goal Progress",
    description:
      "You've hit your 8-hour sleep goal 4 out of 7 nights this week. 2 more nights to reach your weekly target!",
    color: "text-primary bg-primary/10",
  },
  {
    type: "achievement",
    icon: Award,
    title: "HRV Personal Best",
    description: "You reached 62ms HRV on Saturday - your highest reading this month! Great recovery.",
    color: "text-yellow-400 bg-yellow-500/10",
  },
]

const recommendations = [
  "Try the 4-7-8 breathing exercise during your afternoon stress window",
  "Your HRV improves after 7+ hours of sleep - prioritize bedtime tonight",
  "You haven't logged a mood entry in 3 days - how are you feeling?",
]

export function CoachInsights() {
  return (
    <div className="p-4 space-y-6 overflow-y-auto h-full">
      {/* Weekly Summary */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">This Week's Summary</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">78</p>
            <p className="text-xs text-muted-foreground">Wellness Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-400">↓18%</p>
            <p className="text-xs text-muted-foreground">Stress Change</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">7.2h</p>
            <p className="text-xs text-muted-foreground">Avg Sleep</p>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">AI Insights</h3>
        {insights.map((insight, i) => (
          <div key={i} className="p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${insight.color}`}>
                <insight.icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm">{insight.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Personalized Recommendations</h3>
        <div className="space-y-2">
          {recommendations.map((rec, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-card/30 border border-border">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">{i + 1}</span>
              </div>
              <p className="text-sm text-foreground">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
