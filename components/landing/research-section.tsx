"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, Cpu, Heart, MessageSquare, CheckCircle, FileText } from "lucide-react"

const researchTopics = [
  {
    icon: Cpu,
    title: "Wearables + ML for Health Monitoring",
    description:
      "Integration of consumer wearable devices with machine learning pipelines enables continuous, non-invasive health monitoring beyond clinical settings.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Emotional State Inference via HRV + EDA",
    description:
      "Heart rate variability and electrodermal activity provide reliable biomarkers for stress detection and emotional state classification.",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: MessageSquare,
    title: "Chatbots for Healthcare",
    description:
      "AI-powered conversational agents show promise for mental health support, though gaps remain in personalization and physiological integration.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: FileText,
    title: "WESAD Scientific Relevance",
    description:
      "The WESAD dataset provides gold-standard multimodal physiological data for affective computing research with validated stress protocols.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
            <BookOpen className="h-4 w-4" />
            <span>Scientific Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Research-Backed Approach</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MindPulse is built on peer-reviewed research in affective computing, wearable health monitoring, and
            AI-assisted wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchTopics.map((topic) => (
            <Card
              key={topic.title}
              className="p-6 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${topic.bgColor} flex-shrink-0`}>
                  <topic.icon className={`h-6 w-6 ${topic.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Citation Strip */}
        <Card className="mt-12 p-6 bg-secondary/30 backdrop-blur-xl border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {"An AI-Driven Companion for Real-time Health & Mood Insights"}
                </p>
                <p className="text-xs text-muted-foreground">
                  with Context-Aware Well-Being Coaching — Academic Research Project
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Peer-reviewed methodology
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Validated datasets
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
