"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Layers, SlidersHorizontal, ExternalLink, Shield } from "lucide-react"

export function FeaturesGrid() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Problem Killer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            Built to Solve <span className="text-gold-gradient">Real Problems</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-balance">
            Every feature is designed to eliminate the chaos of job hunting for students.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Centralized Aggregator */}
          <AnimatedSection delay={0}>
            <div className="group relative p-6 rounded-2xl glass-card hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Centralized Aggregator
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every opportunity from WhatsApp, Discord, LinkedIn, email, and job boards — all in one searchable feed.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Smart Filtering */}
          <AnimatedSection delay={100}>
            <div className="group relative p-6 rounded-2xl glass-card hover:border-cyan/20 transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="absolute inset-0 rounded-2xl bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-cyan/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                  <SlidersHorizontal className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Smart Filtering
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Filter by role, location, skills, company size, deadline, and more. Find exactly what matches your profile.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Direct Apply */}
          <AnimatedSection delay={200}>
            <div className="group relative p-6 rounded-2xl glass-card hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Direct Apply Pathways
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Apply directly from our platform. No more jumping between 10 tabs — one click gets you there.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
