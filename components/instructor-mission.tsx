"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"

export const InstructorMission = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-12"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/30">
            <Target className="w-5 h-5 text-[#00f2ff]" />
            <span className="text-[#00f2ff] text-xs font-bold uppercase tracking-wider">Minha Missão</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">Quem Sou Eu?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Originário do estado do <strong className="text-white">Pará</strong>, iniciei minha trajetória no setor de
              telecomunicações em <strong className="text-white">2012</strong>. Um marco significativo em minha carreira
              foi a minha participação na construção da{" "}
              <strong className="text-[#00f2ff]">Usina Hidrelétrica Belo Monte</strong>. Desde então, tenho me dedicado
              ao estudo e ao aprimoramento contínuo neste campo.
            </p>
            <p>
              Ao longo da minha trajetória profissional, adquiri experiências valiosas em{" "}
              <strong className="text-white">provedores de internet e operadoras</strong>. Atualmente, exerço a função
              de{" "}
              <strong className="text-[#00f2ff]">especialista em telecomunicações no setor elétrico brasileiro</strong>.
            </p>
            <p>
              Paralelamente, dedico-me à <strong className="text-white">produção de conteúdo técnico</strong>,
              incentivando meus seguidores a buscar qualificação e a prosperar no competitivo mercado de
              telecomunicações.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
