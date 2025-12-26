"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-[#00f2ff]/10 border border-[#00f2ff]/20 px-4 py-2 rounded-full mb-8">
              <Zap size={16} className="text-[#00f2ff]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f2ff]">
                Inscrições Abertas 2026
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
              DOMINE AS NORMAS DA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0099ff]">
                TELECOMUNICAÇÃO
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
              O treinamento definitivo para técnicos que buscam a excelência em projetos de comunicações e
              infraestrutura de rede.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
      <a
        href="https://pay.kiwify.com.br/pC68vFi"
        target="_blank"
        rel="noopener noreferrer"
        className="group px-8 py-4 bg-[#00f2ff] text-[#02040a] font-bold rounded-lg hover:bg-[#00d4e6] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,242,255,0.3)]"
      >
        COMEÇAR AGORA
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>


            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "+500", label: "Alunos" },
                { value: "35h", label: "de Conteúdo" },
                { value: "100%", label: "Prático" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-3xl font-black text-[#00f2ff] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00f2ff]/20 via-transparent to-transparent rounded-3xl blur-3xl"></div>

              {/* Image Container */}
              <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#0a1520] to-[#02040a]">
                <img
                  src="/images/whatsapp-image-2025-12-18-at-21.png"
                  alt="Instrutor Profissional"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto object-contain object-bottom"
                />
                {/* Natural Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-[#00f2ff]/20 rounded-full"></div>
              <div className="absolute top-10 -left-4 w-4 h-4 bg-[#00f2ff] rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
