"use client"

import { useEffect, useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Zap, Radio } from "lucide-react"

export function MissedOpportunityCounter() {
  const [internshipsToday, setInternshipsToday] = useState(0)
  const [channels, setChannels] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setInternshipsToday((prev) => {
        const next = prev + 1
        return next > 27 ? 27 : next
      })
    }, 180)

    const channelInterval = setInterval(() => {
      setChannels((prev) => {
        const next = prev + 1
        return next > 8 ? 8 : next
      })
    }, 400)

    return () => {
      clearInterval(interval)
      clearInterval(channelInterval)
    }
  }, [])

  return (
    <section className="py-8">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-5 rounded-2xl glass-card">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {internshipsToday}
                  <span className="text-primary ml-1 text-sm font-medium">new today</span>
                </p>
                <p className="text-xs text-muted-foreground">internships & jobs posted</p>
              </div>
            </div>

            <div className="w-px h-8 bg-border hidden sm:block" />

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan/10">
                <Radio className="w-5 h-5 text-cyan" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {channels}
                  <span className="text-cyan ml-1 text-sm font-medium">channels</span>
                </p>
                <p className="text-xs text-muted-foreground">aggregated in real-time</p>
              </div>
            </div>

            <div className="w-px h-8 bg-border hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm text-green-400 font-medium">Live</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
