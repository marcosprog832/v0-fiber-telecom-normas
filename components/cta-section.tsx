"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#00f2ff]/10 to-[#0099ff]/10 border border-[#00f2ff]/20 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f2ff]/10 rounded-full blur-[120px]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Pronto para transformar sua <span className="text-[#00f2ff]">carreira</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de profissionais que já dominam as normas da fibra óptica
            </p>
            <button className="group px-10 py-5 bg-[#00f2ff] text-[#02040a] font-bold text-lg rounded-lg hover:bg-[#00d4e6] transition-all inline-flex items-center gap-3 shadow-[0_0_40px_rgba(0,242,255,0.4)]">
              GARANTIR MINHA VAGA
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
