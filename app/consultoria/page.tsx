import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConsultoriaHero } from "@/components/consultoria-hero"

export default function ConsultoriaPage() {
  return (
    <main className="relative min-h-screen bg-[#02040a] overflow-hidden">
      <Navbar />
      <ConsultoriaHero />
      <Footer />
    </main>
  )
}