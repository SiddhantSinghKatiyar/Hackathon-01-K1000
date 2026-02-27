"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { dashboardSavedJobs, dashboardNotifications, trendingSkills } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import {
  User,
  Briefcase,
  Bookmark,
  Bell,
  TrendingUp,
  Upload,
  BarChart3,
  Settings,
  Home,
  FileText,
  Star,
  CheckCircle2,
  Clock,
  ChevronRight,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const activityData = [
  { name: "Mon", apps: 2 },
  { name: "Tue", apps: 5 },
  { name: "Wed", apps: 3 },
  { name: "Thu", apps: 8 },
  { name: "Fri", apps: 6 },
  { name: "Sat", apps: 4 },
  { name: "Sun", apps: 7 },
]

const sidebarItems = [
  { icon: Home, label: "Overview", active: true },
  { icon: Briefcase, label: "Applications" },
  { icon: Bookmark, label: "Saved Jobs" },
  { icon: BarChart3, label: "Analytics" },
  { icon: FileText, label: "Resume" },
  { icon: Settings, label: "Settings" },
]

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <section id="dashboard" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-4">
            <User className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Dashboard Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            Your Personal <span className="text-gold-gradient">Command Center</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-balance">
            Track applications, manage saved jobs, analyze skill gaps, and stay on top of everything.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl glass-card overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[560px]">
              {/* Sidebar */}
              <div className="lg:w-56 border-b lg:border-b-0 lg:border-r border-border/50 p-4">
                {/* Profile */}
                <div className="flex lg:flex-col items-center gap-3 mb-4 pb-4 border-b border-border/50">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <User className="w-5 h-5 lg:w-7 lg:h-7 text-primary" />
                  </div>
                  <div className="lg:text-center">
                    <p className="text-sm font-semibold text-foreground">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">CS Student, Junior</p>
                  </div>
                </div>

                {/* Completion bar */}
                <div className="mb-4 hidden lg:block">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Profile</span>
                    <span className="text-xs text-primary font-medium">72%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary">
                    <div className="h-full w-[72%] rounded-full bg-primary transition-all duration-1000" />
                  </div>
                </div>

                {/* Nav items */}
                <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => setActiveTab(item.label)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap",
                        activeTab === item.label
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                      )}
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Main content */}
              <div className="flex-1 p-5">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Welcome back, Alex</h3>
                    <p className="text-xs text-muted-foreground">You have 3 new recommendations today</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Bell className="w-4.5 h-4.5 text-muted-foreground" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                  {/* Activity Chart */}
                  <div className="lg:col-span-2 rounded-xl bg-secondary/20 border border-border/30 p-4 min-h-[240px] flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        Application Activity
                      </h4>
                      <div className="flex bg-background/40 rounded-lg p-1">
                        <button className="px-2 py-1 rounded-md text-[10px] bg-primary/20 text-primary font-medium">Week</button>
                        <button className="px-2 py-1 rounded-md text-[10px] text-muted-foreground hover:text-foreground">Month</button>
                      </div>
                    </div>
                    <div className="flex-1 w-full h-[180px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={activityData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                          <XAxis
                            dataKey="name"
                            stroke="#888"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis
                            stroke="#888"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "rgba(10, 10, 10, 0.8)",
                              border: "1px solid rgba(212, 175, 55, 0.2)",
                              borderRadius: "8px",
                              fontSize: "10px"
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="apps"
                            stroke="#d4af37"
                            strokeWidth={2}
                            dot={{ r: 3, fill: "#d4af37" }}
                            activeDot={{ r: 5, fill: "#fff" }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Saved Jobs Stats */}
                  <div className="rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-5 flex flex-col justify-center text-center">
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Total Saved</p>
                    <p className="text-4xl font-bold text-gold-gradient mb-2">{dashboardSavedJobs.length + 12}</p>
                    <div className="flex items-center justify-center gap-1 text-green-400 text-xs">
                      <TrendingUp className="w-3 h-3" />
                      <span>+12% from last week</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Saved Jobs */}
                  <div className="rounded-xl bg-secondary/20 border border-border/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Bookmark className="w-4 h-4 text-primary" />
                        Saved Jobs
                      </h4>
                      <span className="text-xs text-muted-foreground">{dashboardSavedJobs.length} items</span>
                    </div>
                    <div className="space-y-2">
                      {dashboardSavedJobs.map((job, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-background/40 hover:bg-background/60 transition-colors">
                          <div className="min-w-0">
                            <p className="text-xs font-medium text-foreground truncate">{job.title}</p>
                            <p className="text-xs text-muted-foreground">{job.company}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className={cn(
                              "text-xs px-2 py-0.5 rounded-md",
                              job.status === "Applied" ? "bg-cyan/10 text-cyan" :
                                job.status === "Interview" ? "bg-green-500/10 text-green-400" :
                                  "bg-secondary text-muted-foreground"
                            )}>
                              {job.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="rounded-xl bg-secondary/20 border border-border/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Bell className="w-4 h-4 text-cyan" />
                        Notifications
                      </h4>
                      <span className="text-xs text-primary">2 new</span>
                    </div>
                    <div className="space-y-2">
                      {dashboardNotifications.map((notif, i) => (
                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-background/40 hover:bg-background/60 transition-colors">
                          <div className={cn(
                            "w-2 h-2 rounded-full mt-1 shrink-0",
                            notif.unread ? "bg-primary" : "bg-muted-foreground/30"
                          )} />
                          <div className="min-w-0">
                            <p className="text-xs text-foreground">{notif.text}</p>
                            <p className="text-xs text-muted-foreground">{notif.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trending Skills */}
                  <div className="rounded-xl bg-secondary/20 border border-border/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Trending Skills
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {trendingSkills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-foreground">{skill.name}</span>
                            <span className="text-xs text-green-400">{skill.growth}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-background/40">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-primary to-cyan transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="rounded-xl bg-secondary/20 border border-border/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <FileText className="w-4 h-4 text-cyan" />
                        Resume
                      </h4>
                    </div>
                    <div className="border-2 border-dashed border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-colors cursor-pointer group">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors" />
                      <p className="text-xs text-muted-foreground mb-1">Drag & drop your resume</p>
                      <p className="text-xs text-muted-foreground/60">PDF, DOCX up to 5MB</p>
                    </div>
                    <div className="mt-3 flex items-center gap-2 p-2.5 rounded-lg bg-background/40">
                      <FileText className="w-4 h-4 text-primary shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-foreground truncate">resume_v3_final.pdf</p>
                        <p className="text-xs text-muted-foreground">Uploaded Feb 22</p>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
