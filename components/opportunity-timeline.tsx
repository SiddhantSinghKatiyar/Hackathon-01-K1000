"use client"

import { AnimatedSection } from "@/components/animated-section"
import { useInView } from "@/hooks/use-animations"
import { Search, BarChart3, MessageSquare, Trophy, ArrowRight } from "lucide-react"

export function OpportunityTimeline() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
            <ArrowRight className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Your Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            From Discovery to <span className="text-gold-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-balance">
            A streamlined path from finding opportunities to landing your dream role.
          </p>
        </AnimatedSection>

        <div ref={ref} className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2">
            <div
              className="h-full bg-gradient-to-r from-primary via-cyan to-primary transition-all duration-[2000ms] ease-out"
              style={{ width: isInView ? "100%" : "0%" }}
            />
          </div>

          {/* Connecting line - mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-border">
            <div
              className="w-full bg-gradient-to-b from-primary via-cyan to-primary transition-all duration-[2000ms] ease-out"
              style={{ height: isInView ? "100%" : "0%" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {/* Step 1: Discovery */}
            <AnimatedSection delay={0}>
              <div className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center group">
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 md:mb-5">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground mb-1 block">Step 1</span>
                  <h3 className="text-base font-semibold text-foreground mb-1">Discovery</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Browse aggregated opportunities from every platform in one unified feed.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 2: Tracking */}
            <AnimatedSection delay={200}>
              <div className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center group">
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan/20 md:mb-5">
                  <BarChart3 className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground mb-1 block">Step 2</span>
                  <h3 className="text-base font-semibold text-foreground mb-1">Tracking</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Save, organize, and track every application with your personal dashboard.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 3: Interview */}
            <AnimatedSection delay={400}>
              <div className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center group">
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 md:mb-5">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground mb-1 block">Step 3</span>
                  <h3 className="text-base font-semibold text-foreground mb-1">Interview</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Get prep resources, tips, and AI-powered practice to ace your interviews.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 4: Offer */}
            <AnimatedSection delay={600}>
              <div className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center group">
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan/20 md:mb-5">
                  <Trophy className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground mb-1 block">Step 4</span>
                  <h3 className="text-base font-semibold text-foreground mb-1">Offer</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Land your dream role and kick-start your career journey with confidence.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
