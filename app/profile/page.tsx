"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { DashboardPreview } from "@/components/dashboard-preview"

export default function ProfilePage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <DashboardPreview />
            </main>
            <Footer />
            <AIChatbot />
        </>
    )
}
