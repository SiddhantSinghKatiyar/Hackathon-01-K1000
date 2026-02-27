"use client"

import { Briefcase, Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react"

const footerLinks = {
  Platform: ["Browse Jobs", "For You Feed", "Dashboard", "AI Assistant"],
  Resources: ["Career Blog", "Resume Tips", "Interview Prep", "Skill Roadmaps"],
  Company: ["About Us", "Careers", "Privacy Policy", "Terms of Service"],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-bold text-gold-gradient">TalentTrail</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              The all-in-one career platform that aggregates every internship and job opportunity
              into a single, intelligent, searchable feed.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-8 border-t border-border/50 gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 CareerHub. All rights reserved. Built with passion for students.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card text-xs text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
