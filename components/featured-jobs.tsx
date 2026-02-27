"use client"

import { useState } from "react"
import { featuredJobs } from "@/lib/mock-data"
import { AnimatedSection } from "@/components/animated-section"
import {
  MapPin,
  Clock,
  Bookmark,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function FeaturedJobsSection() {
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set())

  const toggleBookmark = (id: number) => {
    setBookmarked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section id="jobs" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Featured Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            Handpicked for <span className="text-gold-gradient">Top Talent</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-balance">
            Curated from the best companies, updated in real-time across all platforms.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredJobs.map((job, index) => (
            <AnimatedSection key={job.id} delay={index * 80}>
              <div className="group relative p-5 rounded-2xl glass-card hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 hover:glow-gold">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-sm font-bold text-primary border border-primary/20">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleBookmark(job.id)}
                    className="p-1.5 rounded-lg hover:bg-secondary/50 transition-colors"
                    aria-label={bookmarked.has(job.id) ? "Remove bookmark" : "Bookmark job"}
                  >
                    <Bookmark
                      className={cn(
                        "w-4 h-4 transition-all duration-300",
                        bookmarked.has(job.id)
                          ? "text-primary fill-primary"
                          : "text-muted-foreground"
                      )}
                    />
                  </button>
                </div>

                {/* Info */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {job.deadline}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-secondary/60 text-xs text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10">
                      <span className="text-xs font-semibold text-primary">{job.match}%</span>
                      <span className="text-xs text-primary/70">match</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{job.salary}</span>
                  </div>
                  <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors group/btn">
                    Apply
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10" delay={500}>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-sm text-foreground hover:border-primary/20 hover:text-primary transition-all duration-300 group">
            View All Opportunities
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
