"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MissedOpportunityCounter } from "@/components/missed-opportunity-counter"
import { StatsSection } from "@/components/stats-section"
import { FeaturedJobsSection } from "@/components/featured-jobs"
import { ForYouFeed } from "@/components/for-you-feed"
import { FeaturesGrid } from "@/components/features-grid"
import { OpportunityTimeline } from "@/components/opportunity-timeline"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import { AIChatbot } from "@/components/ai-chatbot"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MissedOpportunityCounter />
        <StatsSection />
        <FeaturedJobsSection />
        <ForYouFeed />
        <FeaturesGrid />
        <OpportunityTimeline />
        <TestimonialsSection />
        <AboutSection />
        <BlogSection />
      </main>
      <Footer />
      <AIChatbot />
    </>
  )
}
