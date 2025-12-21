"use client"

import { motion } from "framer-motion"
import { Handshake } from "lucide-react"

export const PartnershipsHero = () => {
  return (
    <section className="relative pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20"
          >
            <Handshake className="w-10 h-10 text-[#00f2ff]" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tight">Parcerias</h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Conectando marcas de excelência ao mercado de telecomunicações mais qualificado do Brasil
          </p>
        </motion.div>
      </div>
    </section>
  )
}
