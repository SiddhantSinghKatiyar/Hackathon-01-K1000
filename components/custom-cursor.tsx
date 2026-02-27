"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const trailRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hasPointer = window.matchMedia("(pointer: fine)").matches
    if (!hasPointer) return

    setVisible(true)

    const trail = trailRef.current

    let mouseX = 0
    let mouseY = 0
    let trailX = 0
    let trailY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.12
      trailY += (mouseY - trailY) * 0.12
      if (trail) {
        trail.style.left = `${trailX}px`
        trail.style.top = `${trailY}px`
      }
      requestAnimationFrame(animateTrail)
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setHovering(true)
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)
    requestAnimationFrame(animateTrail)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      ref={trailRef}
      className="fixed pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="rounded-full border-2 transition-all duration-300"
        style={{
          width: hovering ? "48px" : "32px",
          height: hovering ? "48px" : "32px",
          borderColor: hovering
            ? "rgba(212, 175, 55, 0.6)"
            : "rgba(212, 175, 55, 0.25)",
          backgroundColor: hovering
            ? "rgba(212, 175, 55, 0.08)"
            : "transparent",
        }}
      />
    </div>
  )
}
