"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Mic, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hi there! I'm your MindPulse AI Coach. I noticed your stress levels were slightly elevated this afternoon. Would you like to talk about what's on your mind, or shall we try a quick relaxation exercise?",
    timestamp: new Date(Date.now() - 60000),
  },
]

const quickReplies = ["How's my stress today?", "Start breathing exercise", "Tips for better sleep", "Analyze my HRV"]

export function CoachChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "how's my stress today?":
          "Based on your physiological data, your stress levels have been mostly low today (averaging 23%). I noticed a brief spike around 2 PM - was there a challenging meeting or situation then? Your HRV is looking healthy at 48ms, which indicates good recovery capacity.",
        "start breathing exercise":
          "Let's do a 4-7-8 breathing exercise. This technique activates your parasympathetic nervous system and can reduce stress quickly.\n\n1. Breathe in through your nose for 4 seconds\n2. Hold your breath for 7 seconds\n3. Exhale slowly through your mouth for 8 seconds\n\nWould you like me to guide you through 3 cycles?",
        "tips for better sleep":
          "Based on your sleep data, here are personalized recommendations:\n\n1. **Consistency**: Your bedtime varies by 45 min - try to sleep at 11 PM consistently\n2. **Screen time**: Consider reducing blue light 1 hour before bed\n3. **Temperature**: Your skin temp data suggests a slightly cooler room might help\n4. **Wind down**: Your HRV improves when you do light stretching before bed",
        "analyze my hrv":
          "Your HRV analysis shows positive trends:\n\n• Current: 48ms (Good)\n• 7-day trend: ↑ 8% improvement\n• Best time: Morning readings\n• Recovery: Above average\n\nYour HRV tends to be highest after nights with 7+ hours of sleep and lower on days with afternoon stress spikes. Keep focusing on sleep consistency!",
      }

      const response =
        responses[input.toLowerCase()] ||
        "I understand. Let me analyze your recent biometric data to give you more personalized insights. Your overall wellness trend is positive - your stress has decreased 15% this week and sleep quality is improving. Is there a specific area you'd like to focus on?"

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (reply: string) => {
    setInput(reply)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-3",
                message.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-card border border-border text-foreground rounded-bl-md",
              )}
            >
              {message.role === "assistant" && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs text-muted-foreground">MindPulse AI</span>
                </div>
              )}
              <p className="text-sm whitespace-pre-line">{message.content}</p>
              <p
                className={cn(
                  "text-xs mt-2",
                  message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground",
                )}
              >
                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <div className="flex gap-1">
                  <span
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-4 py-2 overflow-x-auto">
        <div className="flex gap-2">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              onClick={() => handleQuickReply(reply)}
              className="flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-card/50 text-foreground hover:bg-card transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border focus-within:ring-2 focus-within:ring-primary">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask your AI coach..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground">
              <Mic className="w-4 h-4" />
            </Button>
          </div>
          <Button
            onClick={handleSend}
            disabled={!input.trim()}
            size="icon"
            className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
