import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InstructorHero } from "@/components/instructor-hero"
import { InstructorMission } from "@/components/instructor-mission"
import { InstructorExperience } from "@/components/instructor-experience"
import { InstructorEducation } from "@/components/instructor-education"
import { InstructorFieldWork } from "@/components/instructor-field-work"
import { InstructorResults } from "@/components/instructor-results"
import { NeonSnakes } from "@/components/neon-snakes"

export default function InstructorPage() {
  return (
    <main className="relative min-h-screen bg-[#02040a] text-white overflow-hidden">
      <NeonSnakes />
      <Navbar />

      <InstructorHero />
      <InstructorMission />
      <InstructorExperience />
      <InstructorEducation />
      <InstructorFieldWork />
      <InstructorResults />

      <Footer />
    </main>
  )
}
