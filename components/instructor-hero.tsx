"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export const InstructorHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem do Instrutor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ff]/20 to-transparent rounded-2xl blur-3xl" />
              <Image
                src="/images/whatsapp-image-2025-12-18-at-21.png"
                alt="Giliade Paulino"
                width={500}
                height={600}
                className="relative z-10 rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] text-xs font-bold uppercase tracking-wider">
              Especialista em Telecomunicações
            </div>

            <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight">
              <span className="text-white">Giliade</span>
              <br />
              <span className="text-[#00f2ff]">Paulino</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              14 anos de experiência no setor de telecomunicações, especialista em fibra óptica e infraestrutura de
              rede.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-[#00f2ff]">14+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Anos de Experiência</div>
              </div>
              <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-[#00f2ff]">2000+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Horas de Formação</div>
              </div>
              <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-black text-[#00f2ff]">CFT</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Ativo</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
