"use client"

import { useState, useRef, useEffect } from "react"
import { chatbotResponses } from "@/lib/mock-data"
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  role: "bot" | "user"
  text: string
}

const quickActions = ["Apply Process", "Resume Help", "Dashboard Help", "Internship Tips"]

export function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm CareerBot, your AI career assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  const handleSend = (text: string) => {
    if (!text.trim()) return

    setMessages((prev) => [...prev, { role: "user", text }])
    setInput("")
    setTyping(true)

    const response = chatbotResponses[text] || "I can help with applying, resumes, dashboard navigation, and internship tips. Try clicking one of the quick actions below!"

    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { role: "bot", text: response }])
    }, 1200 + Math.random() * 800)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg",
          open
            ? "bg-secondary text-foreground rotate-0"
            : "bg-primary text-primary-foreground glow-gold hover:scale-105"
        )}
        aria-label={open ? "Close chat" : "Open AI chat"}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl bg-background/40 backdrop-blur-2xl border border-border/50 overflow-hidden animate-fade-in-up shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border/50">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">CareerBot</p>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Online
              </p>
            </div>
            <div className="ml-auto">
              <Sparkles className="w-4 h-4 text-primary/50" />
            </div>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-start gap-2",
                  msg.role === "user" ? "flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs",
                  msg.role === "bot"
                    ? "bg-primary/10 text-primary"
                    : "bg-cyan/10 text-cyan"
                )}>
                  {msg.role === "bot" ? <Bot className="w-3 h-3" /> : <User className="w-3 h-3" />}
                </div>
                <div className={cn(
                  "rounded-xl px-3 py-2 text-xs leading-relaxed max-w-[75%] whitespace-pre-line shadow-sm",
                  msg.role === "bot"
                    ? "bg-secondary/40 backdrop-blur-md border border-white/5 text-foreground"
                    : "bg-primary/20 backdrop-blur-md border border-primary/10 text-foreground"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bot className="w-3 h-3 text-primary" />
                </div>
                <div className="rounded-xl bg-secondary/50 px-3 py-2">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {quickActions.map((action) => (
              <button
                key={action}
                onClick={() => handleSend(action)}
                className="px-2.5 py-1 rounded-lg bg-secondary/40 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border/50 bg-background/30 backdrop-blur-lg">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                placeholder="Type a message..."
                className="flex-1 bg-secondary/30 rounded-xl px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground outline-none border border-border/50 focus:border-primary/30 transition-colors"
              />
              <button
                onClick={() => handleSend(input)}
                className="p-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
