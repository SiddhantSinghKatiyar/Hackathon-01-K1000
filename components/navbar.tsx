"use client"

import { useState, useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import {
  Briefcase,
  Bell,
  User,
  Menu,
  X,
  Sparkles,
  Command
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Magnetic } from "./ui/magnetic"

const navLinks = [
  { label: "Opportunities", href: "/#jobs", icon: Briefcase },
  { label: "Community", href: "/#for-you", icon: User },
  { label: "Insights", href: "/#blog", icon: Command },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const [mobileOpen, setMobileOpen] = useState(false)



  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex items-center gap-6 px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto",
          scrolled
            ? "glass border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] scale-100"
            : "bg-background/80 backdrop-blur-md border border-transparent scale-[1.02]"
        )}
      >
        {/* Logo Section */}
        <Magnetic distance={0.1}>
          <a href="/" className="flex items-center gap-2 group pr-4 border-r border-white/10">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            </div>
            <span className="text-sm font-black tracking-tighter uppercase text-gold-gradient">
              TalentTrail
            </span>
          </a>
        </Magnetic>

        {/* Desktop Links - Minimalist */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Magnetic key={link.label} distance={0.2}>
              <a
                href={link.href}
                className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-1/2 transition-all duration-300"
                />
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Actions Dock */}
        <div className="flex items-center gap-1 pl-4 border-l border-white/10">


          <Magnetic distance={0.15}>
            <ToolbarButton className="relative">
              <Bell size={16} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full" />
            </ToolbarButton>
          </Magnetic>

          <Magnetic distance={0.15}>
            <a href="/profile" className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all duration-300">
              <User size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
            </a>
          </Magnetic>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2.5 rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 glass-card rounded-[2rem] p-6 flex flex-col gap-4 border-white/10 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <link.icon size={18} />
                <span className="font-bold uppercase tracking-widest text-xs">{link.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ToolbarButton({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300",
        className
      )}
    >
      {children}
    </button>
  )
}
