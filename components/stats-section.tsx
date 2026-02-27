"use client"

import { useCountUp, useInView } from "@/hooks/use-animations"
import { Briefcase, Building2, Users } from "lucide-react"

const stats = [
  { label: "Opportunities", value: 500, suffix: "+", icon: Briefcase },
  { label: "Companies", value: 50, suffix: "+", icon: Building2 },
  { label: "Students Placed", value: 1000, suffix: "+", icon: Users },
]

function StatCard({ label, value, suffix, icon: Icon }: { label: string; value: number; suffix: string; icon: React.ComponentType<{ className?: string }> }) {
  const { ref, isInView } = useInView()
  const count = useCountUp(value, 2000, isInView)

  return (
    <div ref={ref} className="text-center group">
      <div className="flex items-center justify-center mb-3">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <p className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
        {count}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 p-8 rounded-2xl glass-card">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
