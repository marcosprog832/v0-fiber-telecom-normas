import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PartnershipsHero } from "@/components/partnerships-hero"
import { PartnershipsGrid } from "@/components/partnerships-grid"
import { PartnershipsContact } from "@/components/partnerships-contact"
import { NeonSnakes } from "@/components/neon-snakes"
import { SocialMediaStats } from "@/components/social-media-stats"

export default function ParceriasPage() {
  return (
    <main className="relative min-h-screen bg-[#02040a] overflow-hidden">
      <NeonSnakes />
      <Navbar />
      <PartnershipsHero />
      <PartnershipsGrid />
      <SocialMediaStats />
      <PartnershipsContact />
      <Footer />
    </main>
  )
}
