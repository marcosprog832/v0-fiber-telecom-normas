"use client"

import { Navbar } from "@/components/navbar"
import { NeonSnakes } from "@/components/neon-snakes"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#02040a] text-white overflow-x-hidden">
      <NeonSnakes />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <BenefitsSection />
        <CurriculumSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}