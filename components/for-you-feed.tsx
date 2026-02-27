"use client"

import { forYouJobs } from "@/lib/mock-data"
import { AnimatedSection } from "@/components/animated-section"
import { Sparkles, ArrowRight, Brain } from "lucide-react"

export function ForYouFeed() {
  return (
    <section id="for-you" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
            <Brain className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-medium text-cyan">AI-Powered Recommendations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            Curated <span className="text-gold-gradient">For You</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-balance">
            Our AI analyzes your skills, interests, and activity to surface the most relevant opportunities.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {forYouJobs.map((job, index) => (
            <AnimatedSection key={job.id} delay={index * 100} direction="left">
              <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl glass-card hover:border-cyan/20 transition-all duration-500 hover:-translate-y-0.5 hover:glow-cyan">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center text-sm font-bold text-cyan border border-cyan/20 shrink-0">
                    {job.logo}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-cyan transition-colors truncate">
                      {job.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{job.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan/10">
                    <Sparkles className="w-3 h-3 text-cyan" />
                    <span className="text-xs text-cyan font-medium">{job.reason}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {job.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded-md bg-secondary/60 text-xs text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold text-cyan">{job.match}%</span>
                  <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-cyan transition-colors group/btn">
                    View
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
