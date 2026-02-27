"use client"

import { blogPosts } from "@/lib/mock-data"
import { AnimatedSection } from "@/components/animated-section"
import { BookOpen, ArrowRight, Clock } from "lucide-react"

export function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
            <BookOpen className="w-3.5 h-3.5 text-cyan" />
            <span className="text-xs font-medium text-cyan">Career Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            Career Blog & <span className="text-gold-gradient">Roadmaps</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-balance">
            Expert guides, internship tips, and career roadmaps to accelerate your journey.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.title} delay={index * 100}>
              <article className="group flex flex-col h-full p-5 rounded-2xl glass-card hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan/10 text-xs font-medium text-cyan">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-balance">
                  {post.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors group/btn">
                    Read more
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
