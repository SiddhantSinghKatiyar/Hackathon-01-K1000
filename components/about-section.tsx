"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Heart, Target, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe every student deserves equal access to career opportunities, regardless of their network.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We use AI and smart aggregation to solve the information chaos plaguing student job seekers.",
  },
  {
    icon: Users,
    title: "Community Built",
    description: "Built by students, for students. Every feature is shaped by real user feedback and needs.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
              <Heart className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Our Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              We&apos;re Fixing How Students <span className="text-gold-gradient">Find Careers</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CareerHub was born from frustration. As students, we spent hours scouring WhatsApp groups,
              Discord servers, LinkedIn, and email chains just to find relevant opportunities. Most went
              undiscovered. Deadlines passed unnoticed. Great matches were buried in noise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We built CareerHub to change that. By aggregating every opportunity into one intelligent,
              searchable platform, we ensure no student misses their next big break. Our AI-powered
              matching connects the right students with the right roles, automatically.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group flex items-start gap-4 p-4 rounded-xl glass-card hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
