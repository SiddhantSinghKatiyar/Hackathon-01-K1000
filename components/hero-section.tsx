"use client"

import { useState } from "react"
import { Search, Sparkles, ArrowRight, MapPin, Code, Palette } from "lucide-react"
import { Magnetic } from "./ui/magnetic"

const quickFilters = [
  { label: "Remote", icon: MapPin },
  { label: "Engineering", icon: Code },
  { label: "Design", icon: Palette },
  { label: "AI/ML", icon: Sparkles },
]

export function HeroSection() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">The Future of Job Search</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] mb-8 animate-fade-in-up">
              From <span className="text-muted-foreground/40 italic font-serif">Chaos</span> <br />
              to <span className="text-gold-gradient">Career.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-snug animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              TailentTrail aggregates every internship and job opening into a single searchable stream. No more noise, just your next big move.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full sm:max-w-md group">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3 p-1.5 rounded-2xl glass border border-border/50 transition-all duration-300">
                  <div className="flex items-center gap-2 flex-1 px-3">
                    <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                    <input
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Search roles..."
                      className="bg-transparent text-foreground placeholder:text-muted-foreground outline-none w-full text-sm py-2"
                    />
                  </div>
                  <Magnetic distance={0.2}>
                    <button className="shrink-0 p-2.5 rounded-xl bg-primary text-primary-foreground hover:scale-[0.98] transition-all duration-200">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Magnetic>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {quickFilters.map((filter) => (
                <Magnetic key={filter.label} distance={0.1}>
                  <button
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full glass-card text-[10px] font-bold uppercase tracking-tight text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
                  >
                    <filter.icon className="w-3.5 h-3.5" />
                    {filter.label}
                  </button>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Component / Statistics Card */}
          <div className="lg:col-span-5 xl:col-span-6 relative hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-cyan/30 blur-2xl rounded-[2.5rem] opacity-50" />
              <div className="relative glass-card rounded-[2rem] p-8 border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono">system.analytics.v2</div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-muted-foreground">Active Opportunities</span>
                      <span className="text-xs text-green-400 font-bold">+12.4%</span>
                    </div>
                    <div className="text-2xl font-bold font-mono">14,284</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] text-muted-foreground uppercase block mb-1">Success Rate</span>
                      <div className="text-xl font-bold font-mono">84%</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] text-muted-foreground uppercase block mb-1">Avg. Salary</span>
                      <div className="text-xl font-bold font-mono">$120k</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0a0a0f] bg-secondary flex items-center justify-center text-[10px] font-bold`}>
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0f] bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">+1k</div>
                    </div>
                    <span className="text-[10px] text-muted-foreground italic">Joining TalentTrail today</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-4 w-24 h-24 glass-card rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-8 left-12 p-3 glass-card rounded-xl animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Live Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - moved to bottom of viewport */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in z-20" style={{ animationDelay: "1.2s" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[8px] uppercase tracking-[0.3em] text-muted-foreground font-bold" style={{ letterSpacing: '0.4em' }}>Discover More</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
