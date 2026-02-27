"use client"

import { useState, useEffect } from "react"
import { testimonials } from "@/lib/mock-data"
import { AnimatedSection } from "@/components/animated-section"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
            <Star className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            Loved by <span className="text-gold-gradient">Students</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-balance">
            Hear from students who transformed their career journey with CareerHub.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative">
            {/* Main testimonial */}
            <div className="relative overflow-hidden rounded-2xl glass-card p-8 sm:p-10 min-h-[280px] flex items-center">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/10" />

              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-all duration-500 w-full",
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 absolute translate-x-8"
                  )}
                >
                  {index === activeIndex && (
                    <div className="flex flex-col items-center text-center">
                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                        ))}
                      </div>

                      <blockquote className="text-base sm:text-lg text-foreground leading-relaxed mb-6 max-w-2xl">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                          {t.avatar}
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-foreground">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 rounded-xl glass-card hover:border-primary/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "w-8 bg-primary"
                        : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                className="p-2 rounded-xl glass-card hover:border-primary/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
