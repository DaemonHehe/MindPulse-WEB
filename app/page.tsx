import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { KeyFeatures } from "@/components/landing/key-features"
import { DashboardPreview } from "@/components/landing/dashboard-preview"
import { ResearchSection } from "@/components/landing/research-section"
import { DatasetSection } from "@/components/landing/dataset-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <DashboardPreview />
      <ResearchSection />
      <DatasetSection />
      <Footer />
    </main>
  )
}
